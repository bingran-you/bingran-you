# PDF Document: Gupta et al. - 2025 - Dynamic Modeling of Load Demand in Electrified Highways Based on the EV Composition.pdf

**File Path:** Gupta et al. - 2025 - Dynamic Modeling of Load Demand in Electrified Highways Based on the EV Composition.pdf

**Processed Date:** 2026-02-10T18:16:49.199Z

**File Size:** 489.38 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3337

**Title:** Dynamic Modeling of Load Demand in Electrified Highways Based on the EV Composition

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Modeling of Load Demand in Electrified
Highways Based on the EV Composition
Ashutossh Gupta, Vassilis Kekatos, Dionysios Aliprantis, and Steve Pekarek
Elmore Family School of Electrical and Computer Engineering, Purdue University, West Lafayette, IN, USA {gupta799,kekatos,dionysios,spekarek}@purdue.edu
Abstract—Electrified roadways (ERs) equipped with the dynamic wireless power transfer (DWPT) technology can achieve longer driving range and reduce on-board battery requirements for electric vehicles (EVs). Due to the spatial arrangement of transmitter (Tx) coils embedded into the ER pavement, the power drawn by the EV’s receiver (Rx) coil is oscillatory in nature. Therefore, understanding the dynamic behavior of the total DWPT load is important for power system dynamic studies. To this end, we mo-
del the load of individual EVs in the time and frequency domains for constant EV speed. We establish that a nonlinear control scheme implemented in existing DWPTenabled EVs exhibits milder frequency harmonics compared to its linear alternative. According to this model, the harmonics of an EV load decreases in amplitude with the Rx coil length. We further propose and analyze stochastic models for the total DWPT load served by an ER segment. Our models explains how the EV composition on the ER affec-
ts its frequency spectrum. Interestingly, we show that serving more EVs with longer Rx coils (trucks) does not necessarily entail milder harmonics. Our analytical findings are corroborated using realistic flows from a traffic simulator and offer valuable insights to grid operators and ER designers. Index Terms—EV charging, oscillations, power spectrum.
I. INTRODUCTION
Charging EVs wirelessly and during transit has been proposed as a solution to eliminate range anxiety and reduce onboard battery capacity requirements [1]. Electrified roadways (ER) are being developed with transmitter coils embedded within them. When an EV instrumented with a receiver (Rx) coil moves over the ER, it can absorb power through electromagnetic induction. The power gained from the ER can be used to propel EVs or also charge its battery [2]. The Tx coils present in an ER segment are po-
wered by a substation. The total load at the substation is the sum of the power drawn by all EVs served by the ER. As an EV moves over the ER, the spacing between the Tx coils causes the DWPT load to exhibit oscillatory behavior [1]. This work aims to study the effect of the EV composition on the frequency spectrum of the DWPT load served by a substation. Prior works exploring the impact of DWPT systems on power grids focus primarily on the average (DC component) consumed by the ER [3]. Reference -
[4] proposes a battery operation strategy to reduce voltage deviations across the distribution grid powering the ER, while [5] optimally sizes a microgrid to support the ER infrastructure. However, time-varying loads may introduce frequency harmonics that can trigger power system oscillations [6], [7]. If
This work was supported in part by US NSF grants 2500682 and 1941524.
Fig. 1. In a DWPT-enabled ER, transmitters Tx of length lT and gaps of length d are arranged periodically, every D = lT + d meters. An EV draws power when its Rx overlaps with Tx coils. Because of their higher power requirements, trucks have longer Rx lengths than sedans (l2 > l1).
these harmonics occur at frequencies below 2 Hz, such loads might pose the risk of inter-area oscillations [8]. Therefore, it becomes pertinent to study the dynamic (frequency-domain) characteristics of the total DWPT load consumed by an ER. In [9], we studied the location and magnitude of harmonics introduced by DWPT loads under diverse traffic scenarios. Nonetheless, the analysis presumed EV loads were scaled versions of a reference load waveform and ignored the effect of different Rx coil lengt-
hs and peak demands across EVs. To better reflect the heterogeneity of EV populations on dynamic DWPT models, this work contributes on four fronts: c1) We devise a DWPT load model to capture the nonlinear control scheme of the EV controllers (Sec. II); c2) For a single EV load the first harmonic dominates the rest and that EVs with longer Rx coils feature weaker harmonics (Sec. III); c3) We evaluate the spectrum of the total DWPT load when the ER serves EVs of different classes (Sec. IV); and c4) -
Our findings invalidate the conjecture that if an ER serves more trucks than sedans, harmonics in the total DWPT load are weaker (Sec. V). Numerical tests using a traffic simulator corroborate our findings in Sec. VI.
II. TIME-DOMAIN MODELING OF A SINGLE DWPT LOAD
We consider traffic flow in a single direction and assume the DWPT technology has been deployed on a single lane of the ER [10]. The goal is to model the total DWPT load consumed at a substation energizing an ER segment of length L in meters. This section reviews a time-domain model of a single EV load. The ER powers EVs through electromagnetic induction. The ER is instrumented with transmitter (Tx) coils of length lT meters laid under the pavement. To meet road construction standards, every Tx co-
il is followed by a d-meterlong gap; see Fig. 1. A Tx coil and the subsequent gap form a
arXiv:2511.20874v1 [eess.SY] 25 Nov 2025

Fig. 2. The blue curve depicts the maximum DWPT load p ̄n(xn) as a function of EV position xn. The orange curve depicts the clipped load pˆn(xn)
for peak power demand pdn ∈ (α(ln − d), αln]. The green curve depicts p ̄n(xn) scaled by a factor of an ∈ [0, 1]; see [9].
coil segment of length D = lT + d. Coil segments are indexed by k = 0, . . . , K − 1, where K = L/D.
Suppose this ER segment powers N EVs, indexed by n = 1, . . . , N . Each EV is instrumented with a receiver (Rx) coil. Rxn will denote the Rx coil of EVn and is of length ln in meters. EVs with higher power requirements (electric trucks) may have larger ln. We assume lT > ln ≥ d for all n. Let xn denote the position of Rxn’s front end with respect to the beginning of the ER segment; see Fig. 1.
The maximum power that EVn can consume while being at position xn is determined by i) the overlap between Rxn and the Tx coils; and ii) the rated spatial power density α the ER can supply, measured in kW/m of Rx/Tx overlap [9]. Due to the repetitive layout of Tx coils, the maximum power p ̄n(xn) EVn can consume when located at position xn is a periodic trapezoidal waveform. The spatial period of this waveform is D and the repeating trapezoidal pulse is shown in blue in Fig. 2. Because the Rx/Tx ov-
erlap lies in the range [ln −d, ln], the waveform p ̄n(xn) ranges within (α(ln − d), αln].
Depending on its power needs, the energy management system of EVn may decide to consume less power than p ̄n(xn). Let pˆn(xn) denote the power actually consumed by EVn at position xn, with pˆn(xn) ≤ p ̄n(xn). In current DWPT implementations, the EV energy management system specifies the peak demand pdn. A converter saturates the consumed
power to pdn, so that pˆn(xn) ≤ pdn for all xn [2]. We termed this method of DWPT load control as the clipping control scheme [9]. The consumed power can be expressed as
pˆn(xn) =
(
pdn, p ̄n(xn) ≥ pdn
p ̄n(xn), otherwise. (1)
The DWPT load of EVn over a single coil segment takes the trapezoidal form shown as the orange waveform in Fig. 2:
gn(xn) =

    
    
α(ln − d), 0 ≤ xn < ln − d
αxn, ln − d ≤ xn < pd
n α
pdn, pd
n
α ≤ xn < ln + lT − pd
n α
α(ln + lT − xn), ln + lT − pd
n
α ≤ xn < D.
Across all coil segments, the load pˆn(xn) is a finite-duration, periodic function with period D:
pˆn(xn) =
K−1
X
k=0
gn(xn − kD). (2)
This holds if pdn ∈ (α(ln − d), αln]. For pdn = αln in particular, the orange waveform coincides with the blue one. On the other hand, if pdn ∈ [0, α(ln −d)], the orange waveform
becomes constant and pˆn(xn) = pdn for all xn. To analyze the DWPT load in the frequency domain, we must express it as a function of time t rather than position xn. For simplicity, suppose that all EVs move at constant speed v, measured in m/s. Our analysis could be generalized to the setting of different EV speeds, similarly to [9]. Let tn denote the time in seconds when EVn enters the ER segment. Hence, the position of EVn can be expressed as
xn(t) = v · (t − tn) · u(t − tn), (3)
where u(t) is the unit step function. If we substitute (3), we can express the DWPT load as a periodic function of time
pn(t) =
K−1
X
k=0
gn (v(t − tn − kT )) u(t − tn) (4)
with fundamental period T = D/v s. If pdn ≤ α(ln − d), the
DWPT load pn(t) remains constant at pdn at all times. INDOT ER testbed. Before studying the DWPT spectrum, let us summarize the technical characteristics of a pilot ER project [2]. In this pilot, lT = 3.66 m, d = 0.91 m-long gap, D = 4.57 m, and α = 109.36 kW/m. The speed limit is v = 24.6 m/s. This testbed includes a prototype DWPTenabled Class-8 truck with ln = 1.83 m.
III. FREQUENCY SPECTRUM OF SINGLE DWPT LOAD
This section develops a frequency-domain model for a single DWPT load pn(t). We consider the case where pdn ∈ (α(ln − d), αln], so that pn(t) is periodic. The load pn(t) is a train of K trapezoidal pulses per (2). Because the number of coil segments K is large, the EV load can be approximated by an infinite-duration periodic waveform of trapezoidal pulses. Suppose for now that tn = 0. Then, the DWPT load pn(t) can be approximated by the Fourier series (FS) expansion
pn(t) ≃
∞
X
m=−∞
cm,nejmω0t, (5)
where ω0 = 2πv
D is the fundamental frequency and cm,n is the m-th FS coefficient. We shift gn(t) so it is even-symmetric around t = 0 and the FS coefficients cm,n are real-valued. The FS coefficient of the DC term in (5) is the power actually consumed by EVn and can be found to be
c0,n = pdn
D lT + ln − pdn
α . (6)
At maximum peak demand pdn = αln, the DC term becomes
c0,n = αln lT
D . In this latter case, the power consumed by EVn

scales with its Rx length ln, the power density α of the ER, and the duty cycle lT
D of the ER. The FS coefficient for the m-th harmonic can be found to be for all m ≥ 1
cm,n = c0,nsinc mpdn
αD sinc m
D lT + ln − pdn
α , (7)
where sinc(x) := sin(πx)
πx is the normalized sinc function. For any arbitrary timing tn ̸= 0, the FS expansion of (5) is adjusted per the time-shifting property of the FS as
pn(t) =
∞
X
m=−∞
cm,ne−jmω0tn ejmω0t. (8)
To capture the relative harmonic content of pn(t) over its DC term, we define the metric of total harmonic content:
THCn =
v u u
t2
∞
X
m=1
cm,n
c0, n
2
× 100%. (9)
In the INDOT ER if ln = 1.83 m and pdn = αln = 200 kW, we obtain THCn = 26%. Three results are in order.
Remark 1. Because |sinc(x)| ≤ |πx|−1, the FS coefficients for m ≥ 1 can be upper bounded as
|cm,n| ≤ c0,n
αD2
m2π2pdn lT + ln − pdn
α
= αD
m2π2 . (10)
Given that |cm,n| decreases quadratically in m, the first harmonic is much stronger than the rest. For instance, in the INDOT ER example, the first harmonic exhibits a relative signal power of 25% with respect to the DC term.
Remark 2. Given Remark 1, to explore the effect of Rx length on the THC, it suffices to study how the ratio c1,n/c0,n depends on ln. If EVn consumes maximum power pdn = αln, we get
c1,n
c0,n
= sinc ln
D sinc lT
D . (11)
Since 0 < ln < lT < D, the ratio decreases monotonically with ln. Hence, the DWPT loads of EVs with longer Rx coils (trucks) have weaker harmonics relative to their DC power.
Different from the clipping control scheme of (1), in [9] we considered a scaling control scheme, according to which the EV load is a scaled down version of p ̄n(xn) so that
ps
n(t) = anp ̄n(xn(t)). (12)
where an ∈ (0, 1]. The scaled load is shown in green in Fig. 2. Lemma 1 compares the two schemes in terms of c1,n/c0,n.
Lemma 1. If lT > D/2, the clipping control scheme of (1) attains a smaller harmonic ratio c1,n/c0,n than the scaling control scheme of (12) for all (pdn, ln).
IV. FREQUENCY-DOMAIN MODEL OF TOTAL DWPT LOAD
Upon ignoring losses, the total DWPT load is the sum of EV loads. If all EVs move at the same constant speed v, the load p(t) is periodic and is amenable to an FS expansion:
p(t) =
N
X
n=1
pn(t) =
∞
X
m=−∞
cmejmω0t, (13a)
where cm =
N
X
n=1
cm,ne−jmωotn , (13b)
where (13b) is obtained by plugging (8) into (13a). Note that EV parameters (ln, pdn) affect only cm,n, whereas the
EV timing tn affects only e−jmωotn in (13b). Given the uncertainty in {ln, pdn, tn}nN=1, we model them as random variables. Hence, the FS coefficients cm are random and p(t) is a stochastic signal. Because (ln, pdn) are independent of tn, random variables cm,n and tn are independent. It is practical to model cm,n’s as independent across EVs. Ignoring any correlation across EV timings, we model tn’s as independent and uniformly drawn from [0, T ). To study the frequency content of p(t), one needs t-
o evaluate its power spectral density (PSD) [11, Ch. 4]. The PSD shows how the signal power is distributed across frequencies. A sufficient condition for the PSD of a stochastic signal to exist is that the signal is wide sense stationary (WSS), i.e., its mean and autocorrelation functions are time-invariant. The ensuing lemma establishes that p(t) is WSS and finds its PSD.
Lemma 2. If EV timings tn are independently and uniformly within [0, T ), the total DWPT load p(t) in (13a) is WSS, its mean is μp(t) = N E[c0,n], and its PSD is
Sp(ω) = 2π
∞
X
m=−∞
E[|cm|2] · δ(ω − mω0), (14a)
where E |cm|2 =
(
N 2 E[c0,n] 2, m = 0
N E[c2m,n], m ̸= 0. (14b)
The expectation in (14b) applies over the distribution of cm,n.
According to Lemma 2, the PSD of p(t) consists of discrete components at the harmonic frequencies having magnitude E[|cm|2]. If the ER powers EVs moving at multiple different speeds, the PSD will contain harmonic sets associated with each speed. Analogous to the THC of the single EV load, we can define the THC of the total DWPT load p(t) as
THCp =
s
2
P∞
m=1 E[|cm|2]
E[|c0|2] =
s
2
P∞
m=1 E[|cm,n|2]
N (E[c0,n])2 (15)
where the second equality follows from (14b). If squared, the metric THCp is the ratio of the total power of p(t) distributed across harmonics over the power of its DC component. Next, we study how THCp varies under different EV populations.

V. EFFECT OF EV COMPOSITION ON DWPT SPECTRUM
This section studies how the composition of the EV population served affects the THC of the total DWPT load. We partition EVs into G classes with the same Rx length. For class g = 1, . . . , G, let lg denote the Rx length and πg the probability of an EV belonging to this class. Therefore, the random variable ln is drawn from a probability mass function (PMF) taking G discrete values {lg}gG=1, occurring with probability {πg}gG=1. If Ng is the number of EVs of class g, it follows that πg = Ng/N . Pe-
ak power demands pdn can be drawn from a continuous probability distribution dependent on ln, to capture heterogeneity in EV loads within the same class. Under this model, the expectations needed to compute the PSD from (14)–(15) can be expressed as
E[c0,n] =
G
X
g=1
πg E[c0,n | ln = lg] (16a)
E[c2
m,n] =
G
X
g=1
πg E[c2
m,n | ln = lg]. (16b)
For instance, peak demands pdn can be drawn independently uniformly in (α(lg −d), αlg]. In this case, the final expression for (16) reveal that although E[c20,n] increases with lg’s, the
dependence of E[c2m,n] on lg’s is less obvious. To better understand how THCp depends on the EV composition, we simplify the analysis and assume maximum peak demand pdn = αln. Then, all EVs in class g share the same FS
coefficients cm,n = cgm for all n of class g. This implies that cm,n is a random variable drawn from a PMF taking values {cgm}gG=1 with probability {πg}gG=1. In this case, we obtain
E[c0,n] =
G
X
g=1
πg cg
m=
G
X
g=1
απg lg
lT
D (17a)
E[c2
m,n]=
G
X
g=1
πg
αD
m2π sin mπlg
D sin mπlT
D
2
(17b)
Plugging (17) into (15) provides the THCp. Observe that the DC term increases if EV classes with longer Rx lengths are more populous. Because E[c2m,n] decays with m4, we approximate THCp by considering only the first harmonic. Per Remark 2, the THC of a single DWPT load decreases with ln. One may conjecture that the THC of the total DWPT load decreases when EV classes featuring longer ln are more populous. Corollary 1 shows the conjecture is not always true.
Corollary 1. Suppose the ER serves only two EV classes having Rx lengths la (trucks) and lb (sedans) with 0 < lb < la < D. Consider two traffic scenarios S1) and S2) having a total number of EVs N1 and N2, respectively. Let θ1 and θ2 denote the fraction of trucks per scenario with θ1 > θ2. Select parameters (N1, θ1, N2, θ2) so that the DC component of the total DWPT load is identical for S1) and S2). Then, the THCp under S1) is less than the THCp under S2) if and only if
la sin2 πlb
D > lb sin2 πla
D . (18)
Fig. 3. Numerically computed PSD of 1-min DWPT loads. We observe two sets of harmonics of 4.74 Hz (red) and 6.34 Hz (blue).
Corollary 1 predicates that serving more trucks than sedans does not necessarily entail a lower THC. For the INDOT ER, if trucks are instrumented with Rx of lengths la = 1.83 m, the inequality above holds for lb ∈ (1.51, 1.83) m. If lb < 1.51 m, higher penetration of trucks incurs higher THC. Corollary 1 fixed the DC terms and let the (N1, N2) vary. Interestingly, condition (18) compares the two THCs even if we set N1 = N2 and let the DC terms vary. The following numerical tests validate (18) unde-
r more general settings.
VI. NUMERICAL TESTS AND CONCLUSIONS
We simulated realistic vehicle trajectories using SUMO, an open-source microscopic traffic flow simulator [12]. After simulating the traffic flow on the INDOT ER of length L = 4 km, DWPT loads were obtained using (1) and (13a). Two vehicle classes (trucks and sedans) were considered. Trucks and sedans were assigned maximum speeds of 22 and 30 m/s, respectively. The mean EV arrival rate was 0.21 EV/s. In the first test, we wanted to test whether Lemma 2 explains the DWPT spectrum. We simulated truc-
ks with la = 1.83 m and sedans with lb = 1.2 m. Peak power demands pdn were drawn uniformly from [50, 200] kW. Figure 3 shows the numerically computed PSD of 1-min-long DWPT loads. As trucks and sedans have different maximum speeds, the spectrum contains two sets of harmonics corresponding to speeds 21.7 and 29 m/s. Note that the PSD spreads around the harmonic peaks due to the finite signal length; see [9]. Overall the key features of spectra in Fig. 3 agrees with Lemma 2. In the second test, we -
examined the validity of Corollary 1. To this end, we compared the average THC of multiple 1minute DWPT loads, obtained at different truck penetrations θ and sedan Rx lengths lb. The total number of EVs was fixed to N = 45 for all experiments. We observed that when lb takes values 0.58 and 1.2 m, the THCp increases with θ. This is expected as the (18) is not satisfied for lb < 1.51 m. We also observed THC remains almost constant across varying truck penetrations for lb = 1.7 m, because for lb ∈ (1-
.51, 1.8) m harmonic ratios are close to 1. In conclusion are approximate models accurately predict location and magnitude of harmonics of realistic DWPT loads. The condition on Rx lengths does hold in practice as the

TABLE I AVERAGE THC (%) FOR DIFFERENT TRUCK PENETRATIONS (θ) AND SEDAN RX LENGTHS (lb)
θ(%)
lb (m) 0.58 1.20 1.70
3.77 8.05 7.02 6.65 5.57 9.37 7.31 6.67 17.75 10.73 8.88 6.82
first harmonic is of highest magnitude. This work can be extended in several directions, such as sizing and designing BESS systems to smooth out the DWPT load and/or analyzing the effect of such loads on power grid frequency dynamics.
APPENDIX
Proof of Lemma 1: From (7), the ratio c1,n/c0,n under the clipping control scheme is
f (pd
n) = sinc pdn
αD sinc 1
D lT + ln − pdn
α . (19)
The ratio under the scaling scheme is f (αln) for all pdn. The
derivative f ′(pdn) is positive for pdn ∈ (α(ln − d), αln] if
sinc 1
D lT + ln − pdn
α > cos π
D lT + ln − pdn
α.
This condition is satisfied for all pdn ∈ (α(ln − d), αln] if
lT > D/2. Then, f (pdn) is an increasing function, and so
f (pdn) ≤ f (αln). For pdn ≤ α(ln − d), clipped DWPT loads become constant (c1,n = 0), whereas scaled loads exhibit the same harmonic ratio of f (αln). Proof of Lemma 2: From (13a), the mean of p(t) is
E[p(t)] =
∞
X
m=−∞
E[cm]ejmω0t. (20)
To find E[cm], apply the expectation operator on (13b) to get
E[cm] =
N
X
n=1
E[cm,n] · E[e−jmω0tn ] = N E[cm,n] · δ[m], (21)
where δ[m] is the Kronecker delta function. The second equality holds because tn is drawn uniformly in [0, T ] so that E[e−jmω0tn ] = δ[m]. Substituting (21) in (20) provides μp(t) = N E[c0,n] or that the mean of p(t) is time-invariant. The autocorrelation Rp(t, t + τ ) = E [p(t)p∗(t + τ )] is
Rp(t, t + τ ) =
∞
X
m=−∞
∞
X
k=−∞
E[cmc∗
k]ejmω0te−jkω0(t+τ ).
Among all E[cmc∗
k] terms, those with k ̸= m are zero because
E[cmc∗
k] = E[cm] · E[c∗
k] = E[cm,n] · E[c∗
k,n] · δ[m] · δ[k] = 0.
Hence, the autocorrelation function of p(t) is time-invariant
Rp(t, t + τ ) = Rp(τ ) =
∞
X
m=−∞
E[|cm|2] · e−jmω0τ , (22)
where E[|cm|2] can be computed from (13b) as
E |cm|2 =
N
X
n=1
N
X
l=1
E [cm,ncm,l] E e−jmw0tn ejmw0tl .
For m ̸= 0, only the terms with n = l remain. For m = 0, all terms contribute to the DC component. Since p(t) is WSS, its PSD is found as the Fourier transform of Rp(τ ) [11].
Proof of Corollary 1: Scenario S1) has θ1N1 trucks and (1 − θ1)N1 sedans, while S1) has θ2N2 trucks and (1 − θ2)N2 sedans. Equating the DC terms under S1) and S2) yields
ca
0 θ1N1 + cb
0(1 − θ1)N1 = ca
0 θ2N2 + cb
0(1 − θ2)N2.
Therefore, the ratio of EV numbers of the two scenarios is
N1
N2
= c0aθ2 + cb0(1 − θ2)
c0aθ1 + cb0(1 − θ1) . (23)
Granted that the first harmonic dominates over the others, it suffices to compare E[|c1|2] for the two traffic scenarios. The ratio of E[|c1|2] under S1) and S2) can be expressed as
Q = (c1a)2θ1N1 + (cb1)2(1 − θ1)N1
(c1a)2θ2N2 + (cb1)2(1 − θ2)N2
. (24)
Substituting the ratio N1/N2 from (23) into (24) yields
Q = (c1a)2θ1 + (cb1)2(1 − θ1)
(c1a)2θ2 + (cb1)2(1 − θ2) · c0aθ2 + cb0(1 − θ2)
c0aθ1 + cb0(1 − θ1) .
Upon rearranging, it can be shown that Q > 1 if and only if cb0(c1a)2 > c0a(cb1)2. The claim of this corollary follows by evaluating the FS coefficients using (6)–(7).
REFERENCES
[1] D. Haddad, T. Konstantinou, A. Prasad, Z. Hua, D. Aliprantis et al., “Data-driven design and assessment of dynamic wireless charging systems,” in IEEE PELS Workshop on Wireless Power Transfer, London, UK, Jun. 2019, pp. 59–64. [2] V. Mehar, N. Frooninckx, I. Abram, S. Pekarek, D. Aliprantis et al., “Receiver-side power control of a 200-kW three-phase DWPT system for heavy-duty vehicles,” in Proc. Wireless Power Tech. Conf. and Expo, Rome, Italy, Jun. 2025. [3] A. Sauter, J. D. Lara, J. Turk, J-
. Milford, and B.-M. Hodge, “Power system operational impacts of electric vehicle dynamic wireless charging,” Applied Energy, vol. 364, p. 123002, Jun. 2024. [4] T. M. Newbolt, P. Mandal, H. Wang, and R. Zane, “Diverse effects of dynamic wireless power transfer roadway in-motion electric vehicle charging,” in Proc. IEEE Conf. on Innovative Smart Grid Technologies, Washington, DC, Jan. 2023, pp. 1–5. [5] D. Ghose, S. Sivaranjani, and J. Qin, “Traffic-aware grid planning for dynamic wireless electri-
c vehicle charging,” 2025. [Online]. Available: https://arxiv.org/abs/2511.00941 [6] T. Chen, A. Y. Lam, Y. Song, and D. J. Hill, “Fast tuning of transmission power flow routers for transient stability constrained optimal power flow under renewable uncertainties,” Electric Power Systems Research, vol. 213, p. 108735, 2022. [7] M. Alizadeh and X. Wang, “Root cause analysis of frequency oscillations observed in Ontario’s distribution system,” IEEE Trans. Power Syst., pp. 1–12, 2025. [8] X. Xu, W. Ju-
, B. Wang, and K. Sun, “Real-time damping estimation on nonlinear electromechanical oscillation,” IEEE Trans. Power Syst., vol. 36, no. 4, pp. 3142–3152, 2021. [9] A. Gupta, V. Kekatos, R. Yang, D. Aliprantis, and S. Pekarek, “Frequency-domain characterization of load demand from electrified highways,” 2025. [Online]. Available: https://arxiv.org/abs/2509.02426 [10] S. Bafandkar and A. Talebpour, “Charging while driving lanes: A boon to electric vehicle owners or a disruption to traffic flow,” arX-
iv preprint arXiv:2504.14360, 2025.
[11] J. G. Proakis, M. Salehi, N. Zhou, and X. Li, Communication systems engineering, 2nd ed. Upper Saddle River, NJ: Prentice-Hall, 1994. [12] P. A. Lopez, M. Behrisch, L. Bieker-Walz, J. Erdmann, Y.-P. Flo ̈ttero ̈d et al., “Microscopic traffic simulation using SUMO,” in Proc. Intl. Conference on Intelligent Transportation Systems, Maui, HI, Nov. 2018, pp. 2575–2582.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:49.199Z
- **Text Length:** 24571 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
