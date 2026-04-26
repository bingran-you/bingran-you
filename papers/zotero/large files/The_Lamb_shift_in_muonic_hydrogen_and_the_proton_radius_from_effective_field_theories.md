# PDF Document: Peset and Pineda - 2015 - The Lamb shift in muonic hydrogen and the proton radius from effective field theories.pdf

**File Path:** Peset and Pineda - 2015 - The Lamb shift in muonic hydrogen and the proton radius from effective field theories.pdf

**Processed Date:** 2026-02-10T18:15:01.689Z

**File Size:** 380.19 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2741

**Title:** The Lamb shift in muonic hydrogen and the proton radius from effective field theories

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1508.01948v2 [hep-ph] 1 Dec 2015
The Lamb shift in muonic hydrogen and the proton radius from effective field theories
Clara Peset and Antonio Pineda
Grup de F ́ısica Te`orica, Dept. F ́ısica and IFAE, Universitat Aut`onoma de Barcelona, E-08193 Bellaterra (Barcelona), Spain September 5, 2018
Abstract
We comprehensively analyse the theoretical prediction for the Lamb shift in muonic hydrogen, and the associated determination of the proton radius. We use effective field theories. This allows us to relate the proton radius with well-defined objects in quantum field theory, eliminating unnecessary model dependence. The use of effective field theories also helps us to organize the computation so that we can clearly state the parametric accuracy of the result. In this paper we review all (and check -
several of) the contributions to the energy shift of order α5, as well as those that scales like α6×logarithms in the context of non-relativistic effective field theories of QED.
PACS numbers: 11.10.St, 12.20.Ds, 13.40.Gp

Contents
1 Introduction 2
2 NRQED(μp) 3
3 pNRQED 7 3.1 The static potential: V (0) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 3.2 The potential beyond the static limit . . . . . . . . . . . . . . . . . . . . . . 11 3.3 The potential in position space . . . . . . . . . . . . . . . . . . . . . . . . . 14
4 Muonic hydrogen Lamb shift: E(2P3/2) − E(2S1/2) 16 4.1 Corrections from the static potential: V (0) . . . . . . . . . . . . . . . . . . . 18
4.1.1 One-loop Vacuum Polarization: δEV (0,2)
VP
L ∼ O(mμα3) . . . . . . . . . . 18
4.1.2 Two-loop Vacuum Polarization: δEV (0,3)
VP
L ∼ O(mrα4) . . . . . . . . . 18
4.1.3 Double Vacuum Polarization: δEV (0,2)
VP ×V (0,2)
VP
L ∼ O(mrα4) . . . . . . . 19
4.1.4 Static potential (vacuum polarization): δEL ∼ O(mrα5) . . . . . . . 19
4.1.5 Static potential (light-by-light): δEV (0,4)
LbL
L ∼ O(mrα5) . . . . . . . . . 20 4.2 Corrections from the 1/mμ potentials without vacuum polarization . . . . . 20 4.2.1 Relativistic corrections: δEL ∼ O(mrα4) . . . . . . . . . . . . . . . . 20 4.2.2 Relativistic corrections: δEL ∼ O(mrα5) . . . . . . . . . . . . . . . . 22 4.3 Ultrasoft effects: δEL ∼ O(mrα5) . . . . . . . . . . . . . . . . . . . . . . . . 23 4.4 1/m2μ electron vacuum polarization corrections: δEL ∼ O(mrα5) . . . . . . . 25
4.5 O(mrα6 × ln) effects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
5 Summary of results and conclusions 28
A Muonium spectrum 30
1

1 Introduction
The measurement [1, 2] of the Lamb shift in muonic hydrogen,
E(2P3/2) − E(2S1/2) ≡ ∆Eexp
L = 202.3706(23) meV (1.1)
and the associated determination of the root mean square electric radius of the proton:
rp ≡
√
〈rp2〉 = 0.84087(39) fm has led to a lot of controversy. The reason is that this number
is 7.1σ away from the CODATA value, rp = 0.8775(51) fm [3]. This last number is an average of determinations coming from hydrogen spectroscopy and electron-proton scattering1. In order to asses the significance of the discrepancy, it is of fundamental importance to perform the computation of the Lamb shift in muonic hydrogen (in particular of the errors) in a model independent way. This was done in Ref. [6]. In that Letter we revisited the theoretical derivation of the Lamb shift using effective f-
ield theories (EFTs) and obtained the following expression
∆EtLh =
[
206.070(13) − 5.2270(7) rp2
fm2
]
meV . (1.2)
Using this result and Eq. (1.1) we then obtained
rp = 0.8413(15) fm, (1.3)
which is at 6.8σ variance with respect to the CODATA value. Therefore, the proton radius puzzle survived our model independent analysis. The good point now is that the EFT analysis allows us to have a parametric control of the uncertainties, which are of the order
of uncomputed terms of O(mμα5 m3μ
m3ρ , mμα6). This parametric control of the uncertainties
allowed us to obtain a model independent estimate of the error, which is dominated by hadronic effects. EFTs help organizing the computation by providing with power counting rules that asses the importance of the different contributions. This is specially so for the muonic hydrogen, as its dynamics is characterized by several scales:
mp ∼ mρ, mμ ∼ mπ ∼ mr ≡ mμmp
mp + mμ
, mrα ∼ me.
By considering ratios between them, the main expansion parameters are obtained:
mπ
mp
∼ mμ
mp
≈1
9 , me
mr
∼ mrα
mr
∼ mrα2
mrα ∼ α ≈ 1
137 . (1.4)
For our evaluation we used potential non-relativistic QED (pNRQED) [7]. Particularly relevant for us is Ref. [8], which contains detailed information on the application of pNRQED to the muonic hydrogen. Since pNRQED describes degrees of freedom with E ∼ mμα2, any other degree of freedom with larger energy is integrated out. This implies treating the proton
1The latter though has been challenged in Refs. [4, 5], and its exclusion would certainly diminish this tension.
2

and muon in a non-relativistic fashion and integrating out pions (and Delta particles). This is the step of going from Heavy Baryon Effective Theory (HBET) [9] to Non-Relativistic QED (NRQED) [10]. By integrating out the scale mμα, pNRQED is obtained and the potentials appear. Schematically the path followed is the following (∆ ≡ m∆ − mp):
HBChPT (mπ/μ,∆)
=⇒ NRQED (mμα)
=⇒ pNRQED .
A detailed explanation of the matching computation between HBET and NRQED was given in Ref. [11]. This corresponds to the hadronic part of the computation presented in Ref. [6]. It is one of the main motivations of this paper to give the details of QED-related part of the analysis in Ref. [6]. This means to analyse the potentials that contribute to the given order, as well as to actually compute the associated energy shifts associated to the potentials and the ultrasoft photons. We have made some -
effort to present the result assuming an arbitrary charge for the muon and proton, so that the results can be of use in a more general situation, in particular for muonic atoms. This is so because the expressions of the potentials would be equal for light muonic atoms after appropriately changing the NRQED Wilson coefficients produced by the hadronic scales. Therefore, we will present some results in terms of Zμ(= 1), Zp(= 1) and Z ≡ ZμZp(= 1). We also expect that the analysis presented in this pa-
per will set the basis for higher order computations using EFTs.
2 NRQED(μp)
In the muon-proton sector, by integrating out the mπ ∼ mμ scale, an EFT for non-relativistic muons and protons, relativistic electrons and photons appears. In principle, we should also consider neutrons but they play no role at the precision we aim. The effective theory has a hard cut-off ν ≪ mπ and therefore pion and Delta particles have been integrated out. The effective Lagrangian reads
LNRQED(μ) = Lγ + Le + L(NR)
μ + LN + LNe + L(NR)
Nμ . (2.1)
The pure photon sector is approximated by the following Lagrangian
Lγ = −1
4 F μν Fμν +
(
d(μ)
2
m2μ
+ d2
m2p
+ d(τ)
2
mτ2
)
Fμν D2F μν , (2.2)
d(μ)
2 and d(τ)
2 are generated by the vacuum polarization loops with only muons and taus respectively. At O(α) they read
d(μ)
2 = Zμ2α
60π + O(α2) , d(τ)
2 =α
60π + O(α2) . (2.3)
The hadronic effects of the vacuum polarization are encoded in d2:
d2 = m2p
4 Π′
h(0) = Zp2α
60π + d2had + O(α2) . (2.4)
3

Π′h(0) is the derivative of the hadronic vacuum polarization (we have defined Πh(−k2) =
−k2Π′h(0) + . . .). The experimental figure for the total hadronic contribution reads Π′h ≃
9.3× 10−3 GeV−2 [12]. Following standard practice, we have singled out the contribution due to the loops of protons (assuming them to be point-like) in the second equality of Eq. (2.4). Note though that d2had is still of order α. The electron sector reads (iDμ = i∂μ − eAμ)
Le = l ̄e(iD/ − mle)le . (2.5)
We do not include the term
− egle
mμ
l ̄eσμν leF μν , (2.6)
since the coefficient gle is suppressed by powers of α and the mass of the lepton. Therefore, it would give contributions beyond the accuracy we aim. In any case, any eventual contribution would be absorbed in a low energy constant. The muonic sector reads
L(NR)
μ = l†
μ
{
iD0μ + D2μ
2mμ
+ D4μ
8m3μ
+ e c(μ)
F
2mμ
σ·B
+e c(μ)
D
8m2μ
[∇ · E] + ie c(μ)
S
8m2μ
σ · (Dμ × E − E × Dμ)
}
lμ, (2.7)
with the following definitions: iD0μ = i∂0 − ZμeA0, iDμ = i∇ + ZμeA and Zμ = 1. The Wilson coefficients can be computed order by order in α. They read (where we have used the fact that c(μ)
S = 2c(μ)
F − Zμ [13])
c(μ)
F = Zμ
(
1 + Zμ2α
2π + O(α2)
)
, (2.8)
c(μ)
S = Zμ
(
1 + Zμ2α
π + O(α2)
)
. (2.9)
Taking the values of the form factors for the muon-electron difference computed in [14] and those for the electron computed in [15], we can deduce the following expression for the
c(μ)
D,MS(ν) Wilson coefficient2:
2In NRQED(μp), the electron has not been integrated out. Therefore, Eq. (2.10) is not the c(μ)
D Wilson coefficient of NRQED(μp). Eq. (2.10) will show up after lowering the muon energy cut-off below the electron mass in pNRQED. Still we choose to present it here as otherwise we would be forced to do an extra intermediate matching computation that it is unnecessary to obtain the final result. Since we have integrated out the electron, note also that α = 1/137.14... in this equation, i.e. any running associated to the electron is written explicitly in Eq. (2.10).
4

c(μ)
D,MS(ν) = Zμ
(
1 + 4α
3π Zμ2 ln
( m2μ
ν2
)
(2.10)
+
(α
π
)2 Zμ2
{8
9 ln2
( mμ
me
)
− 40
27 ln
( mμ
me
)
+ 85
81 + 4π2
27
+Zμ2
[π2
6
(
18 ln(2) − 40
9
)
− 1523
324 − 9
2 ζ (3)
]
+O
( me
mμ
)})
+ O (α3) .
Note that written in this way one can easily read the O(αs2) Cf2 and Cf TF nl (for the case of massive nl quarks) coefficients that would appear in the analogous Wilson coefficient cD in QCD. The second line in Eq. (2.10) would correspond to the Cf TF nl term and the third line to the Cf2 one.
For the Lamb shift computation we perform in this paper we only need c(μ)
D with O(α2×ln) accuracy. We also include the finite piece for completeness but neglect O(me/mμ) terms. Note that analogous O(α2) terms (changing mμ by mp and either keeping me or changing it by mμ) would exist for c(p)
D if computing the Wilson coefficient as if the proton were pointlike at the mp scale. Even if these effects are small, they should be taken into account for eventual comparisons with lattice where typically only the hadronic correction is computed. For the proton sector we have
LN = N †
p
{
iD0 + D2p
2mp
+ D4p
8m3p
− e c(p)
F
2mp
σ·B
−e c(p)
D
8m2p
[∇ · E] − ie c(p)
S
8m2p
σ · (Dp × E − E × Dp)
}
Np , (2.11)
where iDp0 = i∂0 + ZpeA0, iDp = i∇ − ZpeA and for the proton Zp = 1. The proton Wilson coefficients are hadronic, non perturbative quantities. In some cases they can be directly related with low energy constants, for instance with the anomalous magnetic moment of the proton, κp = 1.792847356(23) [16]:
c(p)
F = Zp + κp = Zp + κphad + Zp3α
2π + O(α2), (2.12)
c(p)
S = Zp + 2κp = Zp + 2κphad + Zp3α
π + O(α2) . (2.13)
Note that κp includes O(α) effects. In principle, this is also so for κphad, to which we have subtracted the proton-associated point-like contribution to the anomalous magnetic moment
(note that the point-like result is a bad approximation for c(p)
F , even though it gives the right
order of magnitude). The case of c(p)
D is more complicated (a more detailed discussion can be found in Ref. [8]). It can be written in the following way in terms of the electromagnetic current form factors at zero momentum (F1(0) = Zp):
c(p)
D = Zp + 2F2(0) + 8F ′
1(0) = Zp + 8m2p
dGp,E (q 2 ) d q2
∣ ∣ ∣
∣q2=0
. (2.14)
5

This object is infrared divergent, which makes it scale and scheme dependent. This is not a problem from the EFT point of view but makes the definition of the proton radius ambiguous. The standard practice is to make explicit the proton-associated point-like contributions to the computation. In practice this means that one uses the following definition for the proton radius
c(p)
D,MS(ν) ≡ Zp + 4
3
Zp3α
π ln
( m2p
ν2
)
+4
3 rp2m2p + O(α2). (2.15)
In other words (up to O(α2) corrections)
c(p)
D,MS(mp) − Zp ≡ 4
3 rp2m2p . (2.16)
Note that rp includes O(α) terms in its definition. This should be kept in mind when comparing with lattice determinations. Note also that it is not natural to set ν = mp, or, in other words, to assume that the proton is point-like up to (and beyond) the scales of the proton mass; 4
3 rp2m2p ≃ 21.3, to be compared with ”1” for a point-like particle. This
illustrates that the point-like result does not even give the right order of magnitude of cD3. LNe refers to the four-fermion operator made of nucleons and (relativistic) electrons. It will not contribute to the spectrum at O(mrα5). Therefore, we will not consider it any further. For a more detailed discussion see Ref. [17]. Finally, we consider the four-fermion operators4:
LNNRμ = c3
m2p
N†
p Np l†
μlμ − c4
m2p
N†
p σNp l†
μσlμ . (2.17)
Again in this case it is common practice to single-out the proton-associated point-like contribution. Note that this assumes that one can treat the proton as point-like at energies of the order of the proton mass. We have already seen that this is a bad approximation for cD and other Wilson coefficients. Nevertheless, we keep this procedure for the sake of comparison. Therefore,
c3(ν) ≡ − mp
mμ
ds(ν) + c3had + O(α3) , (2.18)
c4 ≡ − mp
mμ
dv + c4had + O(α3) , (2.19)
where the point-like Wilson coefficients read as follows:
ds(ν) = − Z2α2
m2μ − m2p
[
m2μ
(
ln m2p
ν2 + 1
3
)
− m2p
(
ln m2μ
ν2 + 1
3
)]
, (2.20)
dv = Z2α2
m2μ − m2p
mμmp ln m2μ
m2p
. (2.21)
3Although not directly relevant for the specific computation of this paper, note that this also happens for the Wilson coefficients cA1 and cA2 (for the definition see Ref. [8]), for which their physical values are far from zero: cA1 ≃ 12 and cA2 ≃ −72, even though for a point-like particle their values would be ”1” and ”0” respectively (up to O(α) corrections). 4The coefficients c3 and c4 should actually read cplμ
3 and cplμ
4 , as they actually depend on the nucleon and lepton the four-fermion operator is made of. Nevertheless, to ease the notation we eliminate those indices.
6

The expression of ds should be understood in the MS scheme, dv on the other hand is finite. ds was computed in Ref. [18] and dv in Ref. [10]. c3had encodes all the hadronic effects to the spin-independent four-fermion Wilson coeffi
cient. At O(α2) it is generated by the two-photon exchange contribution. Since c3had depends linearly on the muon mass, it is dominated by the infrared dynamics and diverges linearly in the chiral limit. This produces an extra mμ/mπ suppression with respect to its natural size, and allows us to compute the leading pure-chiral and Delta-related effects in a model independent way. The complete matching computation between HBET and NRQED was made in Ref. [11] to which we refer for details (partial re-
sults can be found in [8, 19], and in Ref. [20] in the context of relativistic baryon effective theory). Overall we obtained
c3had ∼ α2 mμ
mπ
[
1 + # mπ
∆ +···
]
+O
(
α2 mμ
ΛQCD
)
= α2 mμ
mπ
{
47.2(23.6) (π),
56.7(20.6) (π + ∆), (2.22)
where the upper and lower numbers refer to the matching computation with only pions, or
with pions and the Delta particle, respectively. For comparison, the value c3had = α2 mμ
mπ 54.4(3.3),
which follows from the analysis in Ref. [21], was used in Ref. [2]. We refer to Ref. [11] for a detailed discussion on the status of these hadronic determinations and focus on the QED-like computations in this paper. c4had encodes all the hadronic effects to the spin-dependent four-fermion Wilson coefficients. As in the previous case, this coefficient diverges in the chiral limit. Nevertheless, it only does so logarithmically (unlike in the previous case, where the divergence was linear). Such com-
putation can be found in Ref. [17]. Still it is possible to determine c4had from the analogous one of the proton-electron four-fermion operator determined in Ref. [17]. This was done in Ref. [11], from where we quote the result
c4had ≃ −46α2 . (2.23)
3 pNRQED
After integrating out scales of O(mμα ∼ me), the resulting effective theory is pNRQED [7]. This EFT naturally gives a Schro ̈dinger-like formulation of the bound-state problem but still keeping the quantum field theory nature of the interaction with ultrasoft photons, as well as keeping the information due to high energy modes (of a quantum field theory nature) in the Wilson coefficients of the theory. pNRQED has been applied to hydrogen [22], positronium [23] and muonic hydrogen [17, 8] providing-
 with much of the information needed for this paper. In particular in the last reference the explicit form of the Lagrangian was presented (up to O(mrα5)). We repeat it here but generalized to the case of arbitrary charges:
LpNRQED =
∫
d3xd3XS†(x, X, t)
{
i∂0 − p2
2mr
+ p4
8m3μ
+ p4
8m3p
− P2
2M (3.1)
−V (x, p, σ1, σ2) + e
( Zμmp + Zpmμ mp + mμ
)
x · E(X, t)
}
S(x, X, t) −
∫
d3X 1
4 Fμν F μν ,
7

where M = mμ + mp, mr = mμmp
mμ+mp , x and X, and p and P are the relative and center of
mass coordinate and momentum respectively. V can be written as an expansion in 1/mμ, 1/mp, α, ... We will assume 1/r ∼ me (which is realistic for the case at hand) and that mμ ≪ mp. We then organize the potential as an expansion in 1/mμ:
V (x, p, σ1, σ2) = V (0)(r) + V (1)(r) + V (2)(r) + · · · , (3.2)
where
V (n) ∝ 1
mμn
. (3.3)
We will also make the expansion in powers of α explicit. This means that
V (n,r) ∝ 1
mμn
αr. (3.4)
V (0,1) = − Zα
r has to be included exactly in the leading order Hamiltonian to yield the
leading-order solution to the bound-state problem:
h = p2
2mr
− Zα
r . (3.5)
Thus, the contribution to the energy of a given potential is
〈V (n,r)〉 ∼ mμα1+n+r
up to large logarithms or potential suppression factors due to powers of 1/mp. Iterations of the potential are dealt with using standard quantum mechanics perturbation theory producing corrections such as:
〈V (n,r) · · · V (m,s)〉 ∼ mμα1+n+r+(1+m+s−2) (3.6)
and alike. Therefore, in order to reach the desired O(mα5) accuracy, V (0) has to be computed up to O(α4), V (1) up to O(α3), V (2) up to O(α2) and V (3) up to O(α).
3.1 The static potential: V (0)
The Fourier transform of V (0) reads
V ̃ (0) ≡ −4πZ αV ̃ (k)
k2 ≡
∞
∑
n=1
V ̃ (0,n), (3.7)
which in fact defines αV ̃ , the coupling constant associated to the static potential, which is gauge invariant. The contribution associated to the electron vacuum polarization (Π(0) = 0)
Π(k2) = αΠ1(k2) + α2Π2(k2) + α3Π3(k2) + ...
8

provides with another very popular definition for the effective coupling that enjoys the nice properties of gauge invariance and scheme/scale independence:
αeff (k) = α 1
1 + Π(−k2) = α − α2
π Π1 + α3
π2 (Π21 − Π2) + α4
π3 (−Π31 + 2Π1Π2 − Π3) + O(α5) . (3.8)
αeff corresponds to Dyson summation. If we express αV ̃ (k) in terms of αeff (k), we have
αV ̃ (k) = αeff (k) + ∑
n,m=0
n+m=even>0
ZμnZpmα(n,m)
eff (k) ≡ αeff (k) + δα(k) , δα(k) = O(α4). (3.9)
V ̃ (0,1) ≡ −4πZ α
k2 , (3.10)
is nothing but the Coulomb potential. In order to achieve O(mrα5) accuracy we need to know Π(1), Π(2), Π(3) and the leading, non-vanishing, contributions to α(2,0)
eff (k), α(0,2)
eff (k) and
α(1,1)
eff (k).
k
p
μ
Figure 1: One-loop electron vacuum polarization contribution to the static potential.
The next-to-leading order term of the static potential is displayed in fig. 1 and reads
V ̃ (0,2)
VP (k) = 4πZ α2
π
Π1(−k2)
k2 , (3.11)
where
Π1(k2) = k2
∫∞
4
dq2 1
q2(me2q2 − k2) u(q2), (3.12)
and
u(q2) = 1
3
√
1− 4
q2
(
1+ 2
q2
)
. (3.13)
Thus, we may write for the potential in position space
V (0,2)
VP (r) = − Zα
r
α π
∫∞
4
dq2
q2 u(q2)e−2merq. (3.14)
9

p
μμ
pp
μμ
p
Figure 2: Diagrams contributing to V (0,3).
The next-to-next-to-leading order term of the static potential is produced by the diagrams depicted in Fig. 2, which can be understood as a correction to the vacuum polarization. It was computed by Ka ̈llen and Sabry [24] and reads
V ̃ (0,3)
VP (k) = 4πZ α3
π2
Π21(−k2) − Π2(−k2)
k2 , (3.15)
Π21(k2) − Π2(k2) = k2
∫∞
4
dq2 1
q2(me2q2 − k2) u(2)(q2), (3.16)
where
u(2)(q2) = 1
3
[
τ
(
− 19
24 + 55
72τ 2 − 1
3τ4 − 3 − τ2
2 ln
( 64τ 4
(1 − τ 2)3
))
+ ln
(1 + τ 1−τ
) (33
16 + 23
8 τ 2 − 23
16 τ 4 + 1
6τ6 +
(3
2 + τ2 − τ4
2
)
ln
( (1 + τ )3 8τ 2
))
+
(3 + 2τ 2 − τ 4)
(
2Li2
(1 − τ 1+τ
)
+ Li2
( −1 + τ 1+τ
))]
, (3.17)
with
Li2(x) = −
∫z
0
du ln(1 − u)
u , z ∈ C \[1, ∞) and τ =
√
1− 4
q2 . (3.18)
The next-to-next-to-next-to-leading order term of the static potential coming from the vacuum polarization reads
V ̃ (0,4)
VP (k) = 4πZ α4
π3
−Π31(−k2) + 2Π1(−k2)Π2(−k2) − Π3(−k2)
k2 . (3.19)
This object (more specifically Π3) has been computed in Ref. [25], see also [26] where the complete set of diagrams can be found. The remaining next-to-next-to-leading order contribution to the static potential is generated by diagrams that cannot be completely associated to the vacuum polarization, and
10

is encoded in δα(k). Its sum is constrained to fulfil n + m = even because of the Furry theorem. Each α(n,m)
eff (k) is also gauge invariant. The leading, non-vanishing, contributions
are α(2,0)
eff (k), α(0,2)
eff (k) and α(1,1)
eff (k). They have an expansion in α themselves. Since each of
them is O(α4), we can approximate them by its leading order expression, which is produced by the light-by-light diagrams displayed in Fig. 3. This object could be deduced from the computation in Ref. [27] (we truncate the αeff expressions to its leading order)
V ̃ (0,4)
LbL (k) = − 4πZ
k2
(
(Zμ2 + Zp2)α(2,0)
eff (k) + ZμZpα(1,1)
eff (k)
)
, (3.20)
where we have already used that α(2,0)
eff (k) = α(0,2)
eff (k).
ee e
(0 : 2) (1 : 1) (2 : 0)
μ
p
μμ
pp
Figure 3: Light-by-light contribution to the static potential. The first and third diagram are
the contributions to α(2,0)
eff (k) and α(0,2)
eff (k) respectively. The second diagram contributes to
α(1,1)
eff (k).
3.2 The potential beyond the static limit
In the matching scheme used in this paper (off-shell in the Coulomb gauge) the 1/m potential is zero in QED without light fermions (see Ref. [23]). This is no longer so after the inclusion of light fermions (the electron) into the computation. Yet, after inspection of the diagrams that may contribute, they would produce, at most, O(mrα6) corrections to the energy, so they will be neglected in the following. At order 1/m2 the expression of the potential in momentum space was obtained in Ref. [8]. W-
e summarize its different contributions here. If we switch off the electron vacuum polarization effects, the computation would correspond to the muonium case (or positronium for the equal mass case). The relevant diagrams in such situation are presented in Figs. 4 and 5 (following the classification of Ref. [23] generalized to the non-equal mass case). The one-loop diagrams in Fig. 5 produce the potential quoted in Eq. (3.22) (in the MS scheme). The tree-level diagrams of Figs. 4 produce the poten-
tial quoted in Eq. (3.21) with αeff = α. In order to incorporate the electron vacuum polarization effects at one loop we replace α → αeff ≃ α − α2Π1(−k2) in Eq. (3.21). This means including the vacuum polarization in the 1st, 2nd, 4th, 5th and 6th diagram in Fig. 4. On top of that one has to
11

μ
p
p
μ
μμ
pp
μμ
pp
μ
p
Figure 4: The non-zero relevant diagrams for the matching at tree level in the Coulomb gauge. The dashed and zigzag lines represent the A0 and A fields respectively, while the continuous lines represent the fermion and antifermion fields. For the A0 the circle is the vertex proportional to cD, the square to cS (spin dependent) and the black dot to d2, while for A the square is the vertex proportional to cF and the other vertex appears from the covariant derivative in the kinetic term. The last dia-
gram is proportional to c3 and c4. The symmetric diagrams are not displayed. It corresponds to Eq. (3.21)
include the contribution coming from Fig. 6, which appears from the Taylor expansion in powers of the transfer energy of the vacuum polarization when doing the matching computation off-shell (for further details see the discussion in Ref. [8]). It produces the potential quoted in Eq. (3.23). Overall, the complete expression for the 1/m2μ potential at one loop is summarized in Eqs. (3.21), (3.22) and (3.23), which we list now
12

p
μ
μ
p
μ
p
Figure 5: The non-zero relevant diagrams for the matching at one loop in the Coulomb gauge. The dashed and zigzag lines represent the A0 and A fields respectively, while the continuous lines represent the fermion and antifermion. The interactions for A are the ones which appear from the covariant space derivatives in the kinetic term, while for A0 comes from the covariant time derivative. The symmetric diagrams are not displayed. They correspond to Eq. (3.22).
V ̃ (2)
tree+VP = παeff (k)
2
(
Zp
c(μ)
D
m2μ
+ Zμ
c(p)
D
m2p
)
−i2παeff (k) (p × k)
k2 ·
(
Zp
c(μ)
S Sμ
m2μ
+ Zμ
c(p)
S Sp
m2p
)
−Z 16π α
(
d(μ)
2
m2μ
+ d(τ)
2
mτ2
+ d2
m2p
)
−Z 4παeff(k)
mμmp
( p2
k2 − (p · k)2
k4
)
− i4παeff (k)
mμmp
(p × k)
k2 · (Zpc(μ)
F Sμ + Zμc(p)
F Sp)
4παeff (k)c(μ)
F c(p)
F mμmp
(
Sμ · Sp − Sμ · kSp · k
k2
)
−1
m2p
(c3 − 4c4Sμ · Sp) , (3.21)
V ̃ (2,2)
1−loop = Z2α2
mμmp
(7
3 ln k2
ν2 + 1
3
)
, (3.22)
V ̃ (2,2)
off−shell = − Ze2
4mμmp
(p2 − p′ 2)2 k2
α
π me2
∫∞
4
d(q2) 1
(me2q2 + k2)2 u(q2) , (3.23)
where Si = σi/2 is the spin of the particle i. We stress again that Eq. (3.22) has been
13

k
p
μ
Figure 6: Symbolic representation of the leading correction to the static potential due to the Taylor expansion of the electron vacuum polarization in the Coulomb gauge in powers of k0 = E1 − E′1. It corresponds to Eq. (3.23).
obtained in the MS scheme. The sum of these three potentials includes all terms of O(V (2,1)) and O(V (2,2)):
V ̃ (2) = V ̃ (2)
tree+VP + V ̃ (2,2)
1−loop + V ̃ (2,2)
off−shell + O(V ̃ (2,3)) . (3.24)
3.3 The potential in position space
The matrix elements of the potentials that appear in the energy shifts are more efficiently computed in position space. Therefore, we also write the potentials in position space. In this case it is convenient to split the potential in a slightly different way than in momentum space. In particular, the vacuum polarization contributions are dealt with in an isolated way. We follow the notation of Ref. [8]. The contributions coming from tree-level diagrams read
V (2)
tree = Zα
2mμmp
[
−
{1
r , p2
}
+1
r3 L2 + 4πδ(3)(r)
]
− 16πZα
(
d(μ)
2
m2μ
+ d(τ)
2
mτ2
+ d2
m2p
)
δ(3)(r)
+α
2mμmp
[( Zμc(p)
D m2μ + Zpc(μ)
D m2p
mμmp
)
πδ(3)(r)
+ Zpc(μ)
F
2
r3 L · Sμ + Zμc(p)
F
2
r3 L · Sp + mμmp
{
Zpc(μ)
S
m2μ
1
r3 L · Sμ + Zμc(p)
S
m2p
1
r3 L · Sp
}]
+α
2mμmp
[
16π
3 c(μ)
F c(p)
F δ(3)(r)SμSp + c(μ)
F c(p)
F
2r3 Sˆpμ(rˆ)
]
+1
m2p
(−c3 + 4SμSpc4) δ(3)(r),
(3.25)
where Sˆij(rˆ) = −4(Si · Sj) + 12(Si · rˆ)(Sj · rˆ). The Fourier transform of Eq. (3.22) reads
V (2,2)
1−loop = Z2α2
3mpmμ
[
δ(3)(x)(1 − 7 ln ν2) − 7
2π reg 1
|x|3
]
. (3.26)
14

Finally, the contributions associated to the one-loop vacuum polarization read5
V (2)
VP,1−loop + V (2,2)
off−shell = α
π
∫∞
4
dq2 u(q2)
q2 (3.28)
×
{α
8m2μm2p
(
Zμc(p)
D m2μ + Zpc(μ)
D m2p
)
(
4πδ(3)(~r) − λ2e−λr
r
)
+α
2
(
Zμc(p)
S
L · Sp m2p
+ Zpc(μ)
S
L · Sμ m2μ
) ( e−λr(1 + λr) r3
)
− ZpZμα
4mμmp
( λ2e−λr
r
(
1 − λr
2
)
+ 2pi e−λr
r
(
δij + rirj
r2 (1 + λr)
)
pj
)
+α
mμmp
(
Zpc(μ)
F L · Sμ + Zμc(p)
F L · Sp
)
( e−λr(1 + λr) r3
)
+ αc(μ)
F c(p)
F mμmp
(
−2
3
e−λr λ2
r Sμ · Sp + 8
3 πδ(3)(~r)Sμ · Sp + e−λr
4r3
(
1 + rλ + r2λ2
3
)
Sˆpμ(rˆ)
)
}
,
where λ = meq. Therefore, with the precision we aim at, we obtain
V (2) = V (2)
tree + V (2,2)
1−loop + (V (2)
VP,1−loop + V (2,2)
off−shell) + O(V (2,3)) = V (2,1) + V (2,2) + O(V (2,3)), (3.29)
where in the second equality we organize the potential terms according to their powers in α. This requires expanding the NRQCD Wilson coefficients in powers of α. The leading non-vanishing contribution reads6
V (2,1) = Zα
2mμmp
[
−
{1
r , p2
}
+1
r3 L2 + 4π
(
1 + m2μ + m2p
4mμmp
)
δ(3)(r)
]
(3.30)
+α
2mμmp
[
16
3 πZμ(Zp + κphad)SμSpδ(3)(r) + Zμ
Zp + κphad
2
1
r3 Sˆpμ(rˆ)
]
+α
2mμmp
[
Zμ
(
2(Zp + κphad) + mμ
mp
(Zp + 2κphad)
)1
r3 L · Sp + Z
(
2 + mp
mμ
)1
r3 L · Sμ
]
+ πα
2m2p
Zμ
[4
3 rp2m2p
]
δ(3)(r).
5Note that the fourth line can be written in a way that makes the angular momentum structure more explicit:
∫∞
4
dq2 u(q2)
q2
( λ2e−λr
r
(
1 − λr
2
)
+ 2pi e−λr
r
(
δij + rirj
r2 (1 + λr)
)
pj
)
(3.27)
=
∫∞
4
dq2 u(q2)
q2
(
2
{
p2, e−λr
r
(
1 + λr
2
)}
− 2 e−λr
r3 (1 + λr)L2 + λ2
r e−λr
(
1 + λr
2
)
− 8πδ(3)(~r)
)
.
Nevertheless, one has to be careful when dealing with the right-hand-side of the equality, as the first and last term are separately divergent (but not their sum). 6Strictly speaking there could still be some O(α) included in κphad with the definition we are using, similarly as it happens with the proton radius.
15

For the organization of the computation it is also convenient to split V (2,2) in the following
way:
V (2,2) = V (2,2)
no−VP + V (2,2)
VP . (3.31)
The first term is the potential if we switch off the interaction with the electrons. This is a well defined limit, as it corresponds to the case of muonium. The second term is the correction to the potential associated to the one-loop electron vacuum polarization. Finally, the 1/m3 potential, which we directly consider in position space, just comes from the Taylor expansion of the relativistic expression of the dispersion relation:
V (3,0) = − 1
8
(1
m3μ
+1
m3p
)
p4 . (3.32)
There are no O(α/m3) terms.
4 Muonic hydrogen Lamb shift: E(2P3/2) − E(2S1/2)
In this section we review all (and check several of) the contributions to the energy shift of order α5, as well as those that scales like α6×logarithms in the context of pNRQED. The muonic hydrogen Lamb shift is obtained by the combined use of non-relativistic quantum mechanics perturbation theory and perturbative quantum field theory computations (when ultrasoft photons show up). As we have definite counting rules to asses the relative importance of the different terms we know when we can stop co-
mputing. The application of this program to the muonic hydrogen produces the contributions we use in our analysis, listed in Table 1. Most of the results were already available in the literature, we have checked many. We now discuss them focusing on the novel aspects. Note that, even though most of the contributions can be associated to a pure QED calculation, the hadronic effects are also included in this computation. Their effects are included in the NRQED Wilson coefficients discussed in Sec. 2-
, and are encoded in the different terms of the potential in the Lagrangian of pNRQED discussed in Sec. 3. In order to carry out the computations of this paper we use the most updated PDG values [16] for the masses and fine structure constant
me = 0.510998928(11) MeV,
mμ = 105.6583715(35) MeV,
α = 1/137.035999074(44),
mp = 938.272046(21) MeV,
mτ = 1776.82(16) MeV. (4.1)
These numbers update the values used in Ref. [6]. The effect is very small but it changes the last digit of our numbers in some cases after rounding. This happens in the second term in Eqs. (1.2-5.1), in Eq. (1.3), and in the i) and vii) entries in the table 1. ρnl is the non-relativistic charge density of the nl state. For the n = 2 Lamb shift we will need their difference between the S- and P -wave bound state:
ρ ≡ ρ2P − ρ2S = (mrZα)3/2e−mrZαr
[
1
12 (mrZαr)2 −
(
1 − mrZαr
2
)2]
. (4.2)
16

We will use the following notation:
δEnVlj = 〈nlj|V |nlj〉 (4.3)
and δELV = 〈2P1/2|V |2P1/2〉 − 〈2S1/2|V |2S1/2〉 (4.4)
for the correction to the Lamb shift of a generic potential V .
VV
Figure 7: 2nd order perturbation theory of the bound-state Green function generated by a generic potential V .
We will represent the 2nd order perturbation theory correction to the bound-state Green function generated by a generic potential V by Fig 7, where the double line represents the bound state and the vertices (local in time) the potentials. In case we want to obtain the associated energy shift we will compute objects like (and analogous expressions in case of different potentials (including permutations))
δEV ×V
nlj = 〈ψnlj|V 1
(En − h)′ V |ψnlj〉
=
∫
dr2dr1ψ∗
nlj(r2)V (r2)G′
nl(r1, r2)V (r1)ψnlj(r1), (4.5)
where 1
(En − h)′ = lim
E→En
(1
E−h − 1
E − En
)
, (4.6)
G′
nl(r1, r2) ≡ 〈r1| 1
(Enl − h)′ |r2〉 ≡ lim
E→En
(
G(r1, r2; E) − |ψnl|2
E − En
)
, (4.7)
ψnl(r) is the bound state wave function of the (nl)-state and En is the energy of the state, and G(r1, r2; E) is the Coulomb Green function. In order to perform the computation it is specially useful to use the following represen
tation for a negative energy E = − mrZ2α2
2λ2 of the Coulomb Green function (see for instance,
the appendix of Ref. [28]):
G(r1, r2; E) = mr2Zα
λπ
∞
∑
l=0
(2l + 1)Pl( r1 · r2
r1r2
)( 2mrZα
λ r1)l( 2mrZα
λ r2)le− mrZα
λ (r1+r2)
∞
∑
s=0
L2l+1
s ( 2mr Zα
λ r1)L2l+1
s ( 2mrZα
λ r2)s!
(s + l + 1 − λ)(s + 2l + 1)! . (4.8)
Then G′nl(r1, r2) is just the Coulomb Green function evaluated at λ = n + δλ, and taking out the pole. In the case where the potentials that appear in Eq. (4.5) are only functions
17

of the modulus of r (i.e. they are rotational invariant), the sum over l reduces to the single term that matches the angular momentum l of the bound state. Obviously a similar discussion applies to higher order corrections from perturbation theory, and also similar expressions follow for the Lamb shift. We will now study each relevant contributing term separately, both in the 1/mμ and in the α expansions. We will write explicitly the Zμ, Zp, Z dependence except for the dependence on Z that appear-
s in the combination mrZα/me in the numerical integrals we perform. Therefore, such numerical values will change for different muonic atoms.
4.1 Corrections from the static potential: V (0)
4.1.1 One-loop Vacuum Polarization: δEV (0,2)
VP
L ∼ O(mμα3)
The Lamb shift in muonic hydrogen, unlike in hydrogen, receives its most important contribution from the electron vacuum polarization. This is due to the fact that the typical atomic momentum of the muonic hydrogen is mμα, which is of the order of the electron mass: mμα ∼ 1.5me. This effect comes from the modification of the photon propagator, as we have already seen in the previous chapter (see Fig. 1). In order to compute it, we must take the first order in α of the expansion of Π(−k2). The inte-
gral in r and x can be done analytically. The result reads (see for instance [29])
δEV (0,2)
VP
L=
∫
d3rV (0,2)
VP (r)(ρ2P − ρ2S) = (4.9)
=α
π (Zα)2 mr
[ 8πβ3
3 + 1 − 26β2 + 352β4 − 768β6
18 (1 − 4 β2)2
+ 4β4 (15 − 80β2 + 128β4)
3 (1 − 4 β2)5/2 ln
(
1 − √1 − 4β2 2β
)]
= mrα3Z20.005555 = 205.00737 meV,
where
β = me
(Zα mr) = 0.7373836 . (4.10)
Eq. (4.9) gives the first entry in Table 1. For the case me ≪ Zα mr the computation can be checked with the result of heavy quarkonium. We have checked it. We also observe that me ≪ Zα mr is a bad approximation to this quantity, so we will not consider it further but only for checking. Actually, neither the β ≪ 1 nor the β ≫ 1 give a good approximation to Eq. (4.9).
4.1.2 Two-loop Vacuum Polarization: δEV (0,3)
VP
L ∼ O(mrα4)
We now compute the O(mrα4) contribution associated to the two-loop static potential. We obtain the second entry of Table 1:
δEV (0,3)
VP
L = mrα4Z2 0.005599695 = 1.50795 meV . (4.11)
18

It agrees with the result of Pachucki [30] with 5 significant digits. We observe that this contribution is significantly bigger than the one coming from double insertions of the leading vacuum polarization potential discussed in the next section. In a different context a similar situation has been found in heavy quarkonium physics [31].
4.1.3 Double Vacuum Polarization: δEV (0,2)
VP ×V (0,2)
VP
L ∼ O(mrα4)
The second O(mrα4) correction is generated by the second order perturbation theory of the
V (0,2)
VP potential. Following Eq. (4.5) and the associated discussion we obtain
δEV (0,2)
VP ×V (0,2)
VP
nl = 〈ψnl|V (0,2)
VP
1
(Enl − h)′ V (0,2)
VP |ψnl〉
= (Zα)2mr
(α
π
)2 ∫ ∞
4
∫∞
4
dρ21dρ22
u (ρ21) ρ21
u (ρ22) ρ22
(4.12)
×
( [1 + β(ρ1 + ρ2)]−3β2Q
12(1 + βρ1)5(1 + βρ2)5 + β2[ρ21 + ρ22 + 2(βρ1ρ2)2]
(1 + βρ1)4(1 + βρ2)4 ln
( (1 + βρ1)(1 + βρ2) 1 + β(ρ1 + ρ2)
))
,
where
Q = 12β8ρ61ρ42+12β8ρ51ρ52 + 36β7ρ61ρ32 + 120β7ρ51ρ42 + 12β6ρ61ρ22 + 84β6ρ51ρ32 + 74β6ρ41ρ42
+ 33β5ρ61ρ2 + 39β5ρ51ρ22 − 62β5ρ41ρ32 + 9β4ρ61 + 111β4ρ51ρ2 − 33β4ρ41ρ22 − 142β4ρ31ρ32
+ 24β3ρ51 + 99β3ρ41ρ2 − 189β3ρ31ρ22 + 18β2ρ41 − 3β2ρ31ρ2 − 75β2ρ21ρ22 − 24βρ21ρ2 − 3ρ21
+ (ρ1 → ρ2). (4.13)
This expression corrects several mistakes in Eq. (11) of [32] (which however gets the correct numerical result) and yields the 3rd entry of Table 1:
δEV (0,3)
VP ×V (0,3)
VP
L = mrα2Z2 ( α
π
)2 0.0055304 = 0.150897 meV. (4.14)
This numerical value agrees with [30] within the significant digits given in this reference.
4.1.4 Static potential (vacuum polarization): δEL ∼ O(mrα5)
The first four entries in Table 1 are the contributions to the Lamb shift associated to the electron vacuum polarization corrections to the static potential V (0). Specially difficult is the 4th entry, as it corresponds to the three-loop static potential and to the third order computation in perturbation theory. It was computed (numerically) in [26] (see also [33] for a small correction). It can be split into the following contributions:
δEV (0,4)
VP
L = mrα5Z20.002694 = 5.295 × 10−3meV. (4.15)
The contribution from 2nd order perturbation theory yields [26] (this result includes all permutations):
δEV (0,2)
VP ×V (0,3)
VP
L + δEV (0,3)
VP ×V (0,2)
VP
L = mrα5Z20.00109562 = 2.153 × 10−3meV. (4.16)
19

And the contribution from 3rd order perturbation theory reads [33, 26]:
δEV (0,2)
VP ×V (0,2)
VP ×V (0,2)
VP
L = mrα5Z20.0000377 = 0.0741 × 10−3meV. (4.17)
The sum of the above three terms gives the final contribution:
δ E O(α5 ),VP
L,static = 0.11868mrZ2α2 ( α
π
)3 = 0.00752 meV. (4.18)
which is the 4th entry of Table 1. The computation has been done independently for a time-like (q2 > 0) and a space-like (q2 < 0) momentum of the photon. This last one involves the integration of the whole vacuum polarization function Π(q2) to the desired order, and the other involves just its imaginary part evaluated at q2 = t me2.
4.1.5 Static potential (light-by-light): δEV (0,4)
LbL
L ∼ O(mrα5)
The 5th entry of Table 1 corresponds to the contribution associated to the light-by-light corrections to the static potential V (0), i.e. to VLbL (see Eq. (3.20)). It was obtained in [27], where a very long explanation was made to argue that the light-by-light contributions could be computed in the static approximation. This is evident in the EFT, as they correspond to a correction to the static potential, as already stated in Ref. [8]. The result for this contribution, given in [27], is
δEV (0,4)
LbL
L = −mrα5Z2 10−3 [(Zp2 + Zμ2)0.5185 − ZpZμ0.5852]
= −mrα5 0.000452 = −0.00089(2) meV. (4.19)
4.2 Corrections from the 1/mμ potentials without vacuum polarization
We jump directly into the V (2) potential, since we already discussed that the V (1) potential produces corrections of, utmost, O(mrα6) and are then beyond the accuracy of our interest. We now compute the corrections to the energy and Lamb shift associated to the potentials in Eqs. (3.25) and (3.26) to O(mrα5). In other words, we compute the relativistic corrections that are not associated to the vacuum polarization.
4.2.1 Relativistic corrections: δEL ∼ O(mrα4)
Eq. (3.25) is the EFT generalization of the Breit potential. Note that it is in this potential
where the hadronic corrections arise at O(mrα5 m2μ
m2p ) (we will consider them in more detail
20

later). The energy shift associated to this potential reads7
δEV (2)
tree
nljjμ = mr3Z3α4
2n3m2μ
{
Zpc(μ)
D δl0 + Zpc(μ)
S
(1 − δl0)
l(l + 1)(2l + 1) djμ,l
+2 mμ
mp
(
Z
(1
n + (1 + 4l)δl0 − 3
2l + 1
)
+ c(μ)
F c(p)
F
( (1 − δl0)δs1
2l(l + 1)(2l + 1) cj,l − 2δl0 + 8
3 δl0δs1
)
+ (1 − δl0)
l(l + 1)(2l + 1)
(
Zpc(μ)
F djμ,l + Zμc(p)
F (2hj,lδs1 − djμ,l)
))
+ m2μ
m2p
(
Zμc(p)
D δl0 + Zμc(p)
S
(1 − δl0) l(l + 1)(2l + 1)
(2δs1hj,l − djμ,l
)
)}
− mr3Z3α3
πn3 δl0
{
1 m2p
(c3 + (3 − 4δs1)c4) + 16πZα
(
d2 m2p
+ d(μ)
2
m2μ
+ d(τ)
2
mτ2
)}
, (4.20)
where
cj,l = 2

  
  
− l+1
2l − 1 j = l − 1,
1 j = l, −l
2l+3 j = l + 1 ,
(4.21)
hj,l =

 
 
−(l + 1) j = l − 1,
−1 j = l,
l j = l+1,
(4.22)
dj1,l =
{
−(l + 1) j1 = l − 1
2, l j1 = l + 1
2 . (4.23)
The energy has been expressed in terms of the total angular momentum J = L + S (where S = Sμ + Sp) and in terms of the angular momentum of the muon Jμ=L + Sμ. The basis is taken in terms of the lightest particle, since it is the most convenient one to express the energy shift. This is so since the lightest particle gives rise to larger effects in the terms which involve the ratio of the masses, and this comes out more clearly when using this basis.
δEV (2)
tree
nljjμ encodes all the O(mrα4) corrections to the spectrum due to the 1/m2μ. It also includes higher order effects through the O(α) terms in the NRQCD Wilson coefficients. If
7In the last line of this equation we have still included the contribution associated to the tau vacuum polarization. As its numerical effect is very small we will neglect it in the following.
21

we set them to zero, we obtain the non-trivial leading-order contribution:
δEV (2)
tree
nljjμ = mr3Z3α4
2n3m2μ
{
Zδl0 + Z (1 − δl0)
l(l + 1)(2l + 1) djμ,l
+2 mμ
mp
(
Z
(1
n + (1 + 4l)δl0 − 3
2l + 1
)
+Zμ(Zp + κphad)
( (1 − δl0)δs1
2l(l + 1)(2l + 1)cj,l − 2δl0 + 8
3 δl0δs1
)
+ (1 − δl0)
l(l + 1)(2l + 1)
(Zdjμ,l + Zμ(Zp + κphad)(2hj,lδs1 − djμ,l))
)
+ m2μ
m2p
(
Zδl0 + Zμ(Zp + 2κphad) (1 − δl0)
l(l + 1)(2l + 1)
(2δs1hj,l − djμ,l
)
)}
+
[4
3 rp2m2p
] πα 2m2p
Zμδl0
1 π
( mrZα n
)3
. (4.24)
We shall also take into account the correction to this order in α coming from the perturbative expansion of the relativistic kinetic term, i.e. from Eq. (3.32), which leads to the energy shift:
δEV (3,0)
nl = mr3Z4α4
2m2μ
[(
1 − mμ
mp
+
( mμ
mp
)2)
(3
4n4 − 2
n3(2l + 1)
)
]
. (4.25)
Summing up the contributions of Eqs. (4.24), (4.25) we get for the transition of the 2S1/2 → 2P 1/2 states:
δEV (2,1)
L + δEV (3,0)
L = mr3α4Z4
48m2p
− mr3α4Z3Zμ
16m2p
[4
3 rp2m2p
]
=
(
0.05747 − 5.1975 rp2
fm2
)
meV.
(4.26) The first term agrees both analytically and numerically with the one obtained in [30]. We shall remark that it has an extra mr2
m2p suppression factor, which was to be expected since
this correction does not contribute for the case of the hydrogen (in the infinite proton mass limit). The 2nd term is the leading contribution associated to the proton radius. Both contributions appear as the 6th and 11th entries in Table 1.
4.2.2 Relativistic corrections: δEL ∼ O(mrα5)
We now compute the O(mrα5) contributions to the spectrum with no electron vacuum polarization. As we have already mentioned, this is a well defined quantity, as it amounts to the corresponding evaluation of the muonium (μe) spectrum (if we turn off the hadronic effects). Taking the O(mrα5) corrections generated from Eq. (4.20) (typically generated by the O(α) corrections of the NRQCD Wilson coefficients) plus the energy shift produced by the expectation value of Eq. (3.26), we obtain (note that th-
is computation has been done in
22

the MS scheme)
δEV (2,2)
no−VP
nljjμ = mr3Z3α5
2πn3
{ ZZμ2
m2μ
(4
3
(
−2
5 + ln
( m2μ
ν2
))
δl,0 + 1 − δl,0
l(l + 1)(2l + 1) djμ,l
)
+ Zp2Z
m2p
(4
3
(
−2
5 + ln
( m2p
ν2
))
δl,0 + 1 − δl,0
l(l + 1)(2l + 1) (2δs,1hj,l − djμ,l)
)
+1
mμmp
(
−2
(
ZZμ2 + ZZp2 − Z2
3 + Zμ3κphad
)
δl,0 − 14
3 Z2 1 − δl,0
l(l + 1)(2l + 1)
+ 14
3 Z2δl,0
(
1− 1
n + 2k(n) + 2 ln
( 2αmr nν
))
+8
3
(ZZμ2 + ZZp2 + Zμ3κphad
) δs,1δl,0 + 1 − δl,0
l(l + 1)(2l + 1)
(1
2
(ZZμ2 + ZZp2 + Zμ3κphad
) δs,1cj,l
+ 2ZZp2δs,1hj,l + Z(Zμ2 − Zp2)djμ,l
))
+ 2Z2δl,0
m2μ − m2p
( mp
mμ
(1
3 + ln
( m2μ
ν2
))
+ mμ
mp
(1
3 + ln
( m2p
ν2
))
+ ln
( m2μ
m2p
)
(3 − 4δs,1)
)
− 8ZpZμ
15mτ2
δl,0
}
− mr3Z3α3
πn3 δl0
[1
m2p
(c3had + (3 − 4δs,1)c4had
) + 16πα d2had
m2p
]
, (4.27)
where k(n) = ∑n
k=1
1
k is the n-th harmonic number. Note that in this expression the hadronic
corrections that scale as α2: c3had, c4had and αd2had are also included, as they also produce an
mrα5 energy shift.
4.3 Ultrasoft effects: δEL ∼ O(mrα5)
kU S
Figure 8: Correction due to ultrasoft photons.
The interaction of the bound state with ultrasoft photons (symbolically pictured in Fig. 8) produces an energy shift of O(mrα5). It has been computed in the MS in Refs. [22, 23] for the case of hydrogen and positronium respectively. The application to muonic hydrogen is trivial, as we only have to rescale for the reduced mass. On top of that we introduce the changes for the case of particles with general charges Zμ, Zp. Finally, the energy shift reads
23

(in the MS scheme)
δEnUlS = 2
3
( Zμmp + Zpmμ mp + mμ
)2 α
π
((
ln ν
mr
+5
6 − ln 2
) ( Ze2
2
) |φn(0)|2 mr2
−
∑
n′ 6=n
|〈n| p
mr
|n′〉|2(En − En′ ) ln mr
|En − En′|
)
≡ mrZ4α5
n3π
( Zμmp + Zpmμ mp + mμ
)2 (
δl,0
(
−4
3
(
ln R(n, l) + ln mrZ2α2
ν
)
+ 10
9
)
− (1 − δl,0) 4
3 ln R(n, l)
)
, (4.28)
where |φn(0)|2 = 1
π
( mrZα n
)3. ln R(n, l) are the Bethe logarithms and are implicitly defined by the equality with Eq. (4.28). For their numerical values for the 2S and 2P states we have used the values quoted in [30]. We observe that δEnU,lS is factorization scale dependent. Such dependence cancels with
the scale dependence of Eq. (4.27). The sum of both contributions gives all the O(mrα5) corrections to the spectrum that are not associated to the electron vacuum polarization:
δ E O(α5 ),no−VP
nljjμ = δEV (2,2)
no−VP
nljjμ + δEnUlS , (4.29)
and is independent of the factorization scale. It can also be split into the different hadronic contributions, associated to the fact that the proton is not point-like, and the O(α5) contribution to the spectrum of two point-like particles (relevant for muonium) in the following way:
δ E O(α5 ),no−VP
nljjμ = δEO(α5),no−VP
nljjμ,point−like + δEO(α5),no−VP
nlj jμ ,d2had
+ δEO(α5),no−VP
nlj jμ ,c3had
+ δEO(α5),no−VP
nlj jμ ,c4had
. (4.30)
Similar equations follow for the Lamb shift energy splitting: δEO(α5),no−VP
L , although in
this last case the contribution proportional to c4had vanishes, since the spin-dependent term does not contribute to the average energy over polarizations. The above computation keeps the complete proton and muon mass dependence. It is
interesting to see the convergence of the mμ/mp expansion. We do so for δEO(α5),no−VP
L,point−like ,
which has a non-trivial dependence on this ratio. We obtain
- O(mμα5) : δEO(α5),no−VP
L,point−like = −0.900 meV
- O(mμα5 mμ
mp ) : δEO(α5),no−VP
L,point−like = 0.226 meV
- O(mμα5 m2μ
m2p ) : δEO(α5),no−VP
L,point−like = −0.054 meV
- O(mμα5 m3μ
m3p ) : δEO(α5),no−VP
L,point−like = 0.010 meV,
which, summing up to all orders, leads to the following O(α5) energy contribution to the
Lamb shift
δ E O(α5 ),no−VP
L,point−like = −0.71896 meV, (4.31)
24

which corresponds to the 7th entry of Table 1. This result is very similar to the one computed by Pachucki [30], where these effects sum up to E(2P1/2 − 2S1/2) = −0.663 − 0.045 − 0.010 = −0.718 meV at O(mμα5). We now consider the hadronic corrections. The energy shift associated to the hadronic vacuum polarization reads
δ E O(α5 ),no−VP
L,d2had
= 16αZd2had
m2p
( mrZα n
)3
= 0.0111(2) meV, (4.32)
which corresponds to the 14th entry of Table 1. The energy shift associated to c3had is usually named the two-photon exchange contribution. Using the lower value in Eq. (2.22) we obtained
δ E TPE
L ≡ δEO(α5),no−VP
L,c3had
= c3had
m2p
1 π
( mrZα n
)3
= 0.0344(125) meV, (4.33)
which corresponds to the 15th entry of Table 1.
4.4 1/m2μ electron vacuum polarization corrections: δEL ∼ O(mrα5)
We now compute the energy shifts, with O(mrα5) precision, associated to the electron vacuum polarization. They are produced by 2nd order non-relativistic quantum mechanics
perturbation theory of V (0,2)
VP ∼ α2/r, together with the V (2,1) ∼ α/m2 and V (3,0) ∼ 1/m3
potentials, as well as by the correction due to the V (2,2)
VP ∼ α2/m2 potential. This sum constitutes a well defined set, as it can be parametrically distinguished from other contributions (formally through the number of light fermions). The energy shift then reads
δEV (2,2)
VP
nl + δEV (2,1)×V (0,2)
VP
nl + δEV (3,0)×V (0,2)
VP
nl
= 〈ψnl|V (2,2)
VP |ψnl〉 + 2〈ψnl|(V (2,1) + V (3,0)) 1
(Enl − h)′ V (0,2)
VP |ψnl〉. (4.34)
For the Lamb shift corrections we obtain the explicit expressions
δEV (2,2)
VP
L = (mrZα)3 α
8
α π
∫∞
4
dq2 u(q2)
q2 (4.35)
×
{
−1
2
(
Zpc(μ)
D
m2μ
+ Zμc(p)
D
m2p
)
(1 + 2βq)(1 + 2βq(1 + βq))
(1 + βq)4 + Z
mμmp
1 + 2βq (1 + βq)2
− Zp
3
(
c(μ)
S
2m2μ
+ c(μ)
F
mμmp
)
( 3βq + 1 (βq + 1)3
)
}
=−
(
0.027714 + 0.0112 rp2
fm2
)
meV
+O(α6) ,
25

δEV (0,2)
VP ×V (2,1)
L + δEV (0,2)
VP ×V (3,0)
L = (mrZα)3 α
2
α π
∫∞
4
dq2 u(q2)
q2
×
{ mr 6
(Z
m3μ
+Z
m3p
)(
− 4 (1 + 3q2β2)
(1 + qβ)4 ln
(1
1 + qβ
)
+ 16 + 64qβ + 53q2β2 + 81q3β3 + 24q4β4
4(1 + qβ)5
)
+Z
mμmp
(
− 1 + 4q2β2
(1 + qβ)4 ln
(1
1 + qβ
)
+ (3 + 11qβ) (1 + q2β2)
4(1 + qβ)5
)
+1
2
(
Zpc(μ)
D
m2μ
+ Zμc(p)
D
m2p
) (
− 3 + 11qβ + 4q2β2 + 12q3β3 + 4q4β4
4(1 + qβ)5
+ 1 + 2q2β2
(1 + qβ)4 ln
(1
1 + qβ
))
+ Zp
3
(
c(μ)
S
2m2μ
+ c(μ)
F
mμmp
)

− 3 + 11qβ + 4q2β2
4(1 + qβ)5 +
ln
(1
1+qβ
)
(1 + qβ)4





=
(
0.046473 − 0.016953 rp2
fm2
)
meV + O(α6). (4.36)
For this last result we have used Eq. (4.8). Summing up both contributions, Eqs. (4.35) and (4.36), we obtain
δEV (2,2)
VP
L + δEV (2,1)×V (0,2)
VP
L + δEV (3,0)×V (0,2)
VP
L
= mrα5 0.0095460 − mrα5 0.01433 rp2
fm2 =
(
0.018759 − 0.0282 rp2
fm2
)
meV . (4.37)
As we have already stated, this sum constitutes a well defined set, as it can be parametrically distinguished from other contributions (formally through the number of light fermions). This is also so for each individual term in the last equality in Eq. (4.37). The first term corresponds to assuming the proton to be point-like (switching off the proton radius contribution) and gives the viii) entry in Table 1. This contribution was first computed in [30] and later corrected in [34, 35]. Nevertheles-
s, a different number has been obtained in two recent analyses [29, 36]. We confirm this last number, which is the one we quote in Table 1. The term proportional to the proton radius in Eq. (4.37) emanates from the coefficient
c(p)
D . It corresponds to the xi) entry of the table and it is in agreement with the result found in [30].
4.5 O(mrα6 × ln) effects
The first 8 entries in Table 1 give the complete O(mrα5) result for a point-like proton. In this result we have kept the exact mass dependence. The O(mrα6) contribution is dominated by the logarithmic enhanced terms. Here, we compute the leading ones. We assign a general counting of mr/mp <∼ ln α ∼ ln(me/mμ). Therefore, we only compute those contributions
at leading order in the mr/mp expansion, i.e. those where the proton is infinitely massive. If we switch off electron vacuum polarization effects (i.e. we switch off the interaction with the electron) the system corresponds to the standard hydrogen situation, which has no
26

O(mrα6 ln α) effects. Actually, this is also true if we consider the case of muonium (with finite recoil effects), which again has no O(mrα6 ln α) effects. The reason is that the sum of all possible contributions vanishes for the case of the lamb shift, since the effective energy shift is [37]8
δEnls = 1
3
mr5 m2pm2μ
α6 ln 1
α
(
δs1 − 3
4
) δl0
n3 , (4.38)
which vanishes for the Lamb shift. Therefore, we can actually claim that all the O(mrα6 ln α) logarithms are generated by the electron vacuum polarization (for a point-like proton). Note that this would also be true if we consider proton-recoil corrections. In any case, as we have already mentioned, here we only consider the infinite proton mass limit. In this limit, for a point-like proton, only two contributions are produced (both of them generated by electron vacuum polarization effects), liste-
d in the the ix) and x) entries of Table 1, which we now discuss.
The 9th entry is due to the logarithmic-enhanced O(α2) corrections to the c(μ)
D Wilson
coefficient (see Eq. (2.10)) that appear in the tree-level potential (see the c(p)
D -dependent term
of Eq. (3.25)). It produces an α3/m2μ×logarithm-potential, the expectation value of which gives the following energy shift to the spectrum
δEnl = mr3α4
2m2μ
c(μ)
D
n3 δl0
∣ ∣ ∣ ∣
∣O(α6 ln)
, (4.39)
and to the Lamb shift
δEL = −mrα6 0.08885 = −0.0012741 meV, (4.40)
which is the number that we quote in the 9th entry of Table 1. The 10th entry in Table 1 is generated in the same way as the 8th entry but multiplied
by the (logarithmic enhanced) O(α) term of c(μ)
D (ν) (see Eqs. (2.10) and (4.35)):
δEV (2,2)
VP
L
∣ ∣ ∣ ∣
∣O(α6)
= −(mrα)3 α
16
α π
∫∞
4
dq2 u(q2)
q2
c(μ)
D
m2μ
{(1 + 2βq)(1 + 2βq(1 + βq)) (1 + βq)4
+ 4β4q4 + 12β3q3 + 4β2q2 + 11βq + 3
(βq + 1)5 −
4 (2β2q2 + 1) ln
(1
βq+1
)
(βq + 1)4



∣ ∣ ∣ ∣
∣O(α6 ln)
(4.41.)
The ν dependence gets regulated by the ultrasoft scale, which we set to ν = mμα2, producing the number
δEV (2,2)
VP
L
∣ ∣ ∣ ∣
∣O(α6 ln)
= −mrα6 0.31644 = −0.004538 meV, (4.42)
which we quote in the 10th entry in Table 1.
8For simplicity we set Zp = Zμ = 1 in this section.
27

Both computations were considered before in Ref. [30]. We agree with them for the significant digits given in that reference. It is also interesting to see that both contributions can be understood from a renormalization group analysis in some appropriate limit [38]. This analysis also gives us information on the logarithmic structure of the recoil, mr/mp, corrections. At this order extra logarithmic terms appear. Nevertheless, they are at most linear: O(mμα6 mr
mp ln α), i.e. there are no O(mrα6 mμ
mp ln2 α) terms, contrary to the claim in Ref. [29]. For a point-like proton this computation would finish our analysis. The error would be
due to uncomputed contributions of O(mrα6) and O(mrα6 mμ
mp ln α). In Refs. [32, 39] several
terms of this order were computed. We use these analyses to estimate the error. Specially useful to us are the (a) and (d) entries in Table IV of the last reference. They are related with the large logarithmic contributions discussed above but also include some finite pieces. We take the difference with the pure logarithmic terms for the generic O(mrα6) error. Taking instead 1/2 of the sum of the 9th and 10th entries yields a similar error: ∼ 3 μeV. This is the error we quote in the first term of -
Eq. (5.1), which encodes all the QED-like contributions assuming the proton to be point-like. We now consider the O(mrα6 ln α) correction associated to the proton radius. It scales like O(mrα6 ln α × mr2 rp2) and has been computed in [40]. Such effect would be generated by the 2nd order perturbation theory of the delta potential (note that a similar effect would also exist in the analogous hydrogen computation). The infrared behaviour of this computation would be regulated by the inverse Bohr radi-
us generated by the bound state dynamics, ∼ mμα. The ultraviolet behaviour gets regulated by energy scales of order mμ ∼ mπ. This produces the large logarithm: ln((mμα)/mμ) = ln α. The explicit correction reads
δEL = 2π
3
[ mr3α3
23π
]
rp2α3 ln α = −0.0014 rp2
fm2 , (4.43)
and it is listed in the 13th entry of Table 1. We use 1/2 of this result for the error of the rp2 coefficient in Eq. (1.2) and Eq. (5.1). A complete analysis of the O(mrα6) effects from an EFT perspective will be discussed elsewhere.
5 Summary of results and conclusions
All the contributions to the Lamb shift considered in this paper are listed in Table 1. Their sum produces the following theoretical prediction for the Lamb shift
∆Ethis work
L=
[
206.0243(30) − 5.2270(7) rp2
fm2 + 0.0455(125)
]
meV . (5.1)
The first ten terms in Table 1 are those associated to a pure QED-like computation assuming the proton to be point-like. Their sum is the first term in Eq. (5.1), and its error is the estimate of the O(mrα6) effects. The second term in Eq. (5.1) encodes all the corrections proportional to the proton radius x)-xiii) entries in Table 1). The error of the coefficient of the term proportional to rp2 is the estimated size of the O(mrα6(m2μrp2)) terms. The last
28

term encodes the rp2-independent hadronic effects. The error is the assigned uncertainty due
to unknown terms of O(mrα5 m3μ
m3ρ ). We emphasize that a partial incorporation of subleading
corrections in α to the above expression will not improve the precision of the result (unless there are arguments to argue that such contributions are the dominant ones), as the uncertainty is still dominated by unknown parametric terms of order mrα6. For an account of some of these corrections see [41]. In order to obtain our primary result Eq. (1.2), the first and last term of Eq. (5.1) has been added and the error combined in quadrature. With this, together with the experimental result in Eq. (-
1.1), we obtained in Ref. [6] the value for the proton radius quoted in Eq. (1.3), where the theoretical and experimental errors have been combined in quadrature. Nevertheless, the latter is completely subdominant with respect to the total error, which is fully dominated by the hadronic effects. In this respect it is also convenient to present our result in the following way
∆EL = 206.0243 meV
−
[1
π
mr3α3 8
]α
m2p
rp2
fm2
[47.3525 + 35.1491α + 47.3525α2 ln(1/α)]
+
[1
π
mr3α3 8
]1
m2p
[c3had + 16παd2had
]
+O(mrα6) . (5.2)
Note that since c3had ∼ α2 and αd2had ∼ α2, the third line of the previous equation encodes all
the hadronic effects that are not related to the proton radius of order α5. This presentation of the result where rp and c3had are kept explicit could be important for the future. In the long term (once the origin of the proton radius puzzle is clarified) the natural place where to get the proton radius is from the hydrogen Lamb shift and c3had (once the radius has been
obtained) from the muonic hydrogen, since c3had is suppressed by an extra factor of the lepton
mass. In this scenario a complete evaluation of the O(mrα6) term may improve the precision of an eventual experimental determination of c3had. Note that in this discussion we assume
that we can determine d2had from alternative methods, like dispersion relations.
Finally, we profit this computation to give in the Appendix the exact α5 expression for the muonium spectrum, keeping the complete mass dependence, which can be easily deduced by changing mp → mμ and mμ → me, and setting the hadronic coefficients, dτ2, and the electron vacuum polarization effects to zero.
Acknowledgements
This work was supported in part by the Spanish grants FPA2013-43425-P, FPA2011-25948 and SO-2012-0234 and the Catalan grant SGR2014-1450.
29

i) O(mrα3) V (0)
VP Eq. (4.9) 205. 00737
ii) O(mrα4) V (0)
VP Eq. (4.11) 1. 50795
iii) O(mrα4) V (0)
VP Eq. (4.14) 0. 15090
iv) O(mrα5) V (0)
VP Eq. (4.18) 0. 00752
v) O(mrα5) V (0)
LbL Eq. (4.19) −0. 00089(2)
vi) O(mrα4 × m2μ
m2p ) V (2,1) + V (3,0) Eq. (4.26) 0. 05747
vii) O(mrα5) V (2,2)
no−VP + ultrasoft Eq. (4.31) −0. 71896
viii) O(mrα5) V (2,2)
VP + V (2,1) × V (0,2)
VP + · · · Eq. (4.37) 0. 01876
ix) O(mrα6 × ln( mμ
me )) V (2,3); c(μ)
D Eq. (4.40) −0. 00127
x) O(mrα6 × ln α) V (2,3)
VP ; c(μ)
D Eq. (4.42) −0. 00454
xi) O(mrα4 × mr2rp2) V (2,1); c(p)
D ; rp2 Eq. (4.26) −5. 19745 rp2
fm2
xii) O(mrα5 × mr2rp2) V (2,2)
VP + · · · ; c(p)
D ; rp2 Eq. (4.37) −0. 02815 rp2
fm2
xiii) O(mrα6 ln α × mr2rp2) V (2,3); c(p)
D ; rp2 Eq. (4.43) −0. 00136 rp2
fm2
xiv) O(mrα5 × mr2
m2ρ ) V (2)
VPhad; d2had Eq. (4.32) 0. 0111(2)
xv) O(mrα5 × mr2
m2ρ
mμ
mπ ) V (2); c3had Eq. (4.33) 0. 0344(125)
Table 1: The different contributions to the Lamb shift in muonic hydrogen in meV units.
A Muonium spectrum
We profit from the results obtained in this work to give the spectrum for the muonium bound state (μe) for general quantum numbers at O(mrα5). We first exchange the proton by the muon and the muon by the electron. Then, the main difference with muonic hydrogen is the lack of hadronic contributions, as well as the fact that all electron vacuum polarization effects can be eliminated, in particular this implies that the static potential becomes trivial. Thus, we are only left with the relativistic co-
rrections to the potential which come from Eqs. (3.21) and (3.22) plus the energy coming from the kinetic term and the ultrasoft effect. The ultrasoft correction to the energy only depends on the reduced mass, and so it will be the same as the one for the muonic hydrogen in Eq. (4.28). Altogether, for a given energy level
30

we get
Enljje = − mrα2
2n2 + (δEV (2,1)
nljje + δEV (3,0)
nl ) + (δEV (2,2)
no−VP
nljje + δEnUlS)
= − mrα2
2n2 + mrα4
n3
[ mr2
2me2
{
δl0 + 3
4n − 2
2l + 1 + (1 − δl0)
l(l + 1)(2l + 1) dje,l + 2 me
mμ
(5
8n − 2 + δl0
2l + 1
+8
3 δl0δs1 + (1 − δl0)δs1
2l(l + 1)(2l + 1) (cj,l + 4hj,l)
)
+ me2
m2μ
(
δl0 + 3
4n − 2
2l + 1 + (1 − δl0)
l(l + 1)(2l + 1) (2δs1hj,l − dje,l)
)}
+α
π
{
δl,0
(
−4
3 (ln R(n, l) + 2 ln α) + 10
9
)
− (1 − δl,0) 4
3 ln R(n, l)
+ mr2
2me2
{4
3
(
−2
5 + ln
( me2
mr2
))
δl,0 + 1 − δl,0
l(l + 1)(2l + 1) dje,l
+ me2
m2μ
(4
3
(
−2
5 + ln
( m2μ
mr2
))
δl,0 + 1 − δl,0
l(l + 1)(2l + 1) (2δs,1hj,l − dje,l)
)
+ me
mμ
(
− 10
3 δl,0 − 14
3
1 − δl,0
l(l + 1)(2l + 1) + 14
3 δl,0
(
1− 1
n + 2k(n) + 2 ln
( 2α n
))
+ 16
3 δs,1δl,0 + 1 − δl,0
l(l + 1)(2l + 1) (cj,l + 2hj,l)
)
+ 2me2δl,0
me2 − m2μ
( mμ
me
(1
3 + ln
( me2
mr2
))
+ me
mμ
(1
3 + ln
( m2μ
mr2
))
+ ln
( me2
m2μ
)
(3 − 4δs,1)
)}}]
, (A.1)
where cj,l, hj,l and dje,l have been defined in Eqs. (4.21)-(4.23), and the first and second
parenthesis in the right hand side of the first equality contain the O(mrα4) and O(mrα5) contributions respectively. Note that the exact mass dependence has been kept in this expression to order α5. The expressions for the potential of muonium can also be found in Ref. [42]. One could be worried that the potential is different to the one we use. The reason for this difference is that they obtain the potential by matching on-shell S-matrix elements (and by a change in the renormalization scheme of -
the ultrasoft computation), still their potential is equivalent to ours through field redefinitions, and yields the same physical results. In particular, for spin-independent states the result for the energy shift can already be found in Eqs. (2.12) and (2.13) of that reference.
References
[1] R. Pohl et al., Nature 466 (2010) 213.
[2] A. Antognini, F. Nez, K. Schuhmann, F. D. Amaro, F. Biraben, J. M. R. Cardoso, D. S. Covita and A. Dax et al., Science 339, 417 (2013).
31

[3] P. J. Mohr, B. N. Taylor and D. B. Newell, Rev. Mod. Phys. 84, 1527 (2012) [arXiv:1203.5425 [physics.atom-ph]].
[4] I. T. Lorenz and U. G. Meißner, Phys. Lett. B 737, 57 (2014) [arXiv:1406.2962 [hep-ph]].
[5] I. T. Lorenz, U. G. Meißner, H.-W. Hammer and Y.-B. Dong, Phys. Rev. D 91, no. 1, 014023 (2015) [arXiv:1411.1704 [hep-ph]].
[6] C. Peset and A. Pineda, Eur. Phys. J. A 51, no. 3, 32 (2015) [arXiv:1403.3408 [hep-ph]].
[7] A. Pineda and J. Soto, Nucl. Phys. Proc. Suppl. 64, 428 (1998) [arXiv:hep-ph/9707481].
[8] A. Pineda, Phys. Rev. C 71, 065205 (2005) [arXiv:hep-ph/0412142].
[9] E. E. Jenkins and A. V. Manohar, Phys. Lett. B 255, 558 (1991).
[10] W. E. Caswell and G. P. Lepage, Phys. Lett. B 167, 437 (1986).
[11] C. Peset and A. Pineda, Nucl. Phys. B 887, 69 (2014) [arXiv:1406.4524 [hep-ph]].
[12] F. Jegerlehner, Nucl. Phys. Proc. Suppl. 51C, 131 (1996) [hep-ph/9606484].
[13] A. V. Manohar, Phys. Rev. D 56, 230 (1997) [hep-ph/9701294].
[14] R. Barbieri, M. Caffo and E. Remiddi, Lett. Nuovo Cim. 7S2 (1973) 60 [Lett. Nuovo Cim. 7 (1973) 60].
[15] R. Barbieri, J. A. Mignaco and E. Remiddi, Nuovo Cim. A 11 (1972) 824.
[16] K. A. Olive et al. [Particle Data Group Collaboration], Chin. Phys. C 38 (2014) 090001.
[17] A. Pineda, Phys. Rev. C 67, 025201 (2003) [arXiv:hep-ph/0210210]; A. Pineda, hep-ph/0308193.
[18] A. Pineda and J. Soto, Phys. Rev. D 58 (1998) 114011 [hep-ph/9802365].
[19] D. Nevado and A. Pineda, Phys. Rev. C 77, 035202 (2008) [arXiv:0712.1294 [hep-ph]].
[20] J. M. Alarcon, V. Lensky and V. Pascalutsa, Eur. Phys. J. C 74, no. 4, 2852 (2014) [arXiv:1312.1219 [hep-ph]].
[21] M. C. Birse and J. A. McGovern, Eur. Phys. J. A 48, 120 (2012) [arXiv:1206.3030 [hep-ph]].
[22] A. Pineda and J. Soto, Phys. Lett. B 420, 391 (1998) [hep-ph/9711292].
[23] A. Pineda and J. Soto, Phys. Rev. D 59, 016005 (1999) [arXiv:hep-ph/9805424].
[24] A. O G. Kallen and A. Sabry, Kong. Dan. Vid. Sel. Mat. Fys. Med. 29N17, 1 (1955).
[25] T. Kinoshita and W. B. Lindquist, Phys. Rev. D 27, 853 (1983).
32

[26] T. Kinoshita and M. Nio, Phys. Rev. Lett. 82, 3240 (1999) [Erratum-ibid. 103, 079901 (2009)] [hep-ph/9812442].
[27] S. G. Karshenboim, E. Y. Korzinin, V. G. Ivanov and V. A. Shelyuto, JETP Lett. 92, 8 (2010) [arXiv:1005.4880 [physics.atom-ph]].
[28] A. Pineda, Prog. Part. Nucl. Phys. 67, 735 (2012) [arXiv:1111.0165 [hep-ph]].
[29] U. D. Jentschura, Phys. Rev. A 84 (2011) 012505 [arXiv:1107.1737 [physics.atom-ph]].
[30] K. Pachucki, Phys. Rev. A53, 2092 (1996).
[31] A. H. Hoang, hep-ph/0008102.
[32] U. D. Jentschura and B. J. Wundt, Eur. Phys. J. D 65, 357 (2011) [arXiv:1112.0556 [physics.atom-ph]].
[33] V. G. Ivanov, E. Y. Korzinin and S. G. Karshenboim, arXiv:0905.4471 [physics.atomph].
[34] A. Veitia and K. Pachucki, Phys. Rev. A 69 (2004) 042501.
[35] E. Borie, Annals Phys. 327, 733 (2012).
[36] S. G. Karshenboim, V. G. Ivanov and E. Y. Korzinin, Phys. Rev. A 85 (2012) 032509.
[37] I. B. Khriplovich, A. I. Milstein and A. S. Yelkhovsky, Phys. Scr. Vol T46 (1993) 252.
[38] A. Pineda, Phys. Rev. A 66, 062108 (2002) [hep-ph/0204213].
[39] E. Y. Korzinin, V. G. Ivanov and S. G. Karshenboim, Phys. Rev. D 88, no. 12, 125019 (2013) [arXiv:1311.5784 [physics.atom-ph]].
[40] J. L. Friar, Annals Phys. 122, 151 (1979).
[41] A. Antognini, F. Kottmann, F. Biraben, P. Indelicato, F. Nez and R. Pohl, Annals Phys. 331, 127 (2013) [arXiv:1208.2637 [physics.atom-ph]].
[42] S. N. Gupta, W. W. Repko, and C.J. Suchyta, III, Phys. Rev. D 40, 4100 (1989).
33

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.689Z
- **Text Length:** 65862 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
