# PDF Document: (DIQKD - 1998 Princeton) Quantum cryptography with imperfect apparatus.pdf

**File Path:** (DIQKD - 1998 Princeton) Quantum cryptography with imperfect apparatus.pdf

**Processed Date:** 2026-02-10T18:16:30.596Z

**File Size:** 103.89 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 387

**Title:** (DIQKD - 1998 Princeton) Quantum cryptography with imperfect apparatus

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Quantum Cryptography with Imperfect Apparatus 

Dominic Mayers Computer Science Department
Princeton University Princeton, NJ 08544 mayers@cs.princeton.edu

Andrew Yao Computer Science Department
Princeton University Princeton, NJ 08544 yao@cs.princeton.edu

Abstract
Quantum key distribution, ﬁrst proposed by Bennett and Brassard, provides a possible key distribution scheme whose security depends only on the quantum laws of physics. So far the protocol has been proved secure even under channel noise and detector faults of the receiver, but is vulnerable if the photon source used is imperfect. In this paper we propose and give a concrete design for a new concept, self-checking source, which requires the manufacturer of the photon source to provide certain tests-
; these tests are designed such that, if passed, the source is guaranteed to be adequate for the security of the quantum key distribution protocol, even though the testing devices may not be built to the original speciﬁcation. The main mathematical result is a structural theorem which states that, for any state in a Hilbert space, if certain EPR-type equations are satisﬁed, the state must be essentially the orthogonal sum of EPR pairs.
1 Introduction
In 1984, Bennett and Brassard [7] proposed a revolutionary concept that key distribution may be accomplished through public communications in quantum channels. Hopefully, the privacy of the resulted key is to be guaranteed by quantum physical laws alone, quite independent of how much computational resource is available to the adversary. The primary quantum phase of the proposed protocol is a sequence of single photons produced by Alice (the sender) and detected by Bob (the receiver).
The security proof of the BB84-protocol (or its many variants) for adversaries with unrestricted power is a difﬁcult mathematical problem, and has only been achieved with any generality in the last few years. In brief, the BB84-
 This research was supported in part by DIMACS, and by DARPA/ITO and the National Science Foundation under Grant CCR-9627819.

protocol is secure even with channel noise and possible detector faults for Bob, provided that the apparatus used by Alice to produce the photons is perfect. The purpose of this paper is to remove this last assumption, by proposing and giving a concrete design for a new concept, selfchecking source, which requires the manufacturer of the photon source to provide certain tests; these tests are designed such that, if passed, the source is guaranteed to be adequate for the security of the BB84-protoc-
ol, even though the testing devices may not be built to the original speciﬁcation. A self-checking source must receive inputs from multiple locations (two in our case) and returns classical outcomes at these locations. The test needs only to consider the classical inputs and the classical outcomes.
It is well known that there are clever ways to construct imperfect sources for the coding used in the BB84-protocol that behave quite normal on the surface, but seriously compromise the security. In other words, the BB84 coding together with the standard test executed in the BB84-protcol are problematic because the external data can be reproduced by quantum apparatus which are not secure at all. We propose a different source that is self-checking and yet can be used to generate the BB84 coding. Ou-
r result means that one does not have to perform an inﬁnite number of ways to check all possible devious constructions. In some ways our test can be regarded as simple self-testing quantum programs. Our result requires that, when the inputs to the source are ﬁxed, the distribution of probability for the classical outcomes is also ﬁxed.
Our result is that, if these distributions of probability (associated with the different inputs) are exactly as in the speciﬁcation for our self-checking source, the state transmitted is a direct sum of states that are individually normally emitted by a perfect source. In practice, we cannot expect these probabilities to be exactly as in the speciﬁcation for the selfchecking source. However, one can test that they are not too far away from this speciﬁcation. Furthermore, one should expect that the-
 closer to their speciﬁed values these probabilities will be, the closer to the direct sum described above

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

the source will be. This is usually sufﬁcient to prove security.
In Section 2, we show how the main mathematical question arises from the security requirement from the BB84protocol. In Section 3, the precise question is formulated, and the main theorem stated. The proof of the main theorem is given in Section 4.
2 Preliminaries
Ideally, the objective of key distribution is to allow two participants, typically called Alice and Bob, who initially share no information, to share a secret random key (a string of bits) at the end. A third party, usually called Eve, should not be able to obtain any information about the key. In reality, this ideal objective cannot be realized, especially if we give unlimited power to the cheater, but a quantum protocol can achieve something close to it. See [8] (and more recently [28]) for a de-
tailed speciﬁcation of the quantum key distribution task. One of the greatest challenges in quantum cryptography is to prove that a quantum protocol accomplishes the speciﬁed task. One can experimentally try different kinds of attacks, but one can never know in which way the quantum apparatus can be defective. In any case, such experiments are almost never done in practice because it is not the way to establish the security of quantum key distribution. The correct way is a properly designed protoc-
ol together with a security proof.
Recently, there has been a growing interest in practical quantum cryptography and systems have been implemented [1, 2, 3, 4, 5, 6]. However, proving the security of quantum key distribution against all attacks turned out to be a serious challenge. During many years, many researchers directly or indirectly worked on this problem [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]. Using novel techniques [20, 21], a proof of security against all attacks for the quantum key distribution protocol of Ben-
nett and Brassard was obtained in 1996 [22]. Related results were subsequently obtained [23, 24, 25, 26], but as yet [22] is the only known proof of security against all attacks. A more recent version of the proof with extension to the result is proposed in [28]. Also, the basic ideas of [9, 10, 17] might lead to a complete solution if we accept fault tolerant computation (for example, see [27]), but this is not possible with current technology.
In the quantum transmission, Alice sends n photons to
Bob prepared individually in one of the four BB84 states uniformly picked at random. The BB84 states denoted
b 0; 2 , b 1; 2 , b 0; 3  and b 1; 3  correspond to a photon polarized at 0, 90, 45 and ,45 degrees respectively (see ﬁgure 1). (We reserve the states b 0; 1  and b 1; 1  for further
use: we will have to add two other states in our analysis.) Bob measures each photon using either the rectilinear ba-

b @I1;@3 @6,b ,1;, 2 -b 0;b3 0 ; 2 

Figure 1. The BB84 states

sis fb 0; 2 ; b 1; 2 g or the diagonal basis fb 0; 3 ; b 1; 3 g

uniformly chosen at random.

The basic idea of the protocol is the following. Both, Eve

and Bob, do not know Alice’s bases until after the quantum

transmission. Eve cannot obtain information without creat-

ing a disturbance which can be detected. Bob also disturbs

the state when he uses the wrong basis, but this is not a

problem. After the quantum transmission, Alice and Bob

announce their bases. Alice and Bob share a bit when their

bases are identical, so they know which bits they share. The

key point is that it’s too late for Eve because the photons are

on Bob’s side. However, the security of the protocol relies

on the fact that the source behaves as speciﬁed, and this is

the main subject of this paper.

Informally, the source used in the original BB84-

protocol [7] can be described as a blackbox with two but-

tons on it: base2-button and base3-button. When Alice
pushes the base2-button, the output is either  0; b 0; 2   or  1; b 1; 2  , where b 0; 2  and b 1; 2  form an orthonormal 1 2 basis of a two-dimensional system HB, with each possibility occurring with probability = . After the base button is pushed, of the output  x; b x;   , only the vector b x;   goes out to Bob; bit x is only visible to Alice. Sim-

ilarly, if Alice pushes the base3-button, the output is either

 0; b 0; 3   or  1; b 1; 3  , with each possibility occurring

with probability 1=2, where

b 0; 3  b 1; 3 

= =

  b, b0 ;02; 2+  +b b1 ;12; 2 =  p=p2;2:

(1)

The suggested way in [7, 8] to achieve the above is to
have the blackbox generates a ﬁxed state, say b 0; 2 , then the bit x 2 f0; 1g is uniformly chosen at random and this

state is rotated of an appropriate angle to create the desired
state b x;   (assuming that the base -button is pressed).

The security proof of the protocol extends to sources be-

yond mentioned above. To obtain our self-testing source,

we need to consider a different type of sources. A con-

jugate coding source sists of a pure state

S=
in a

 HA
Hilbert

HB;
space

; M2; M3  conHA HB, and

two measurements (each binary-valued) M2, M3 deﬁned on

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

HA HB but operating only on coordinates in HA. Pushing
base2-button, base3-button performs respectively measure-
j i ment M2, M3. (We have restricted the form of the initial
state to be a pure state instead of a general mixed state.

This is without loss of generality for our result, as we will

see.) Let

P +; P ,,

where

2 f2; 3g, denote the projection

operators to the subspaces corresponding to the outcomes

0 1P; 

for measurement M . (We
to denote the measurement

sometimes use the notation
M itself.) After perform-

ing the measurement, only the coordinates in HB are made

available for transmission. Thus, if button is pushed with
ottwirufiAytthc +oPomu+wtejcio0thm,iht0eh,exjaP,dnte+hdne s,.ditFeywnoosritipchteyor1noa.vtpoeeTrnrhaiientuonstrc,heieis,fwttbrraeuAnts tsooPmmnxitejtteidmiishbepseujaiPsdmhexeni ds-.

The security proof of the protocol is valid if the source
satisﬁes, for x 2 f0; 1g, the conditions

trA P2xj ih jP2x  = jb x; 2 ihb x; 2 j=2; trA P3xj ih jP3x  = jb x; 3 ihb x; 3 j=2; (2)

where  b 0; 2 ; b 1; 2   and  b 0; 3 ; b 1; 3   are orthonor-

mal bases that satisfy equation (1).

It is well known (and easy to see) that the fol-

lowing source satisﬁes the above

H aB 0;

each be a
2 ; a 1; 2  ;

two-dimensional
 a 0; 3 ; a 1; 3  

condition. Let HA,
Hilbert space. Let
be two pairs of or-

thonormal bases
let  b 0; 2 ; b 1;

2o f ;H bA 0r;e3la t;ebd 1b;y3 e qubaetiotwno(1p)a; irssimoiflaorlry-

 tmtoojotbhahwjnraraeeotd solha 0yneiBno0sm,;souega;t3rhe lr3tom leeaaei nssmsai matujl0ialbenr;ebtsne He2aauH0mts s b;BMu;ejAe3saars,np .e3 j tiarm0asT1e+cc; o;lheeoa212njsnenta ; etsjHim3  adiMj1s bA eait;b 0sa2n30y;s,do ;u2MeiHf2Hr  jqe tbia3BhuimB  eaa+10t.etrh;ti;HenIjwo3a3fattnt Bo h wMio;1e( ,opae1=;j2mrea 2)prtr1ceh  efao;si21ooattj3ne.;sgrrb us2iLoo Hc ir 1nsneteiBt;ratlmtsey2lhM.so eseopiLHufnm2ne bte;t=cBshtstMthtpopiei.neva3T2Htecctwbhblhoe=yAoeeees-.

Clearly, (2) is true. We call this source the perfect system.

More generally, the security proof extends to systems

that behave like a mixture of orthogonal ideal systems. A
dosoretuxhrocsgeeot)in,sawalntiwtheoxbtdei inmxd;ee2nd s;piobeinr afxel;cs3tu sbysdspetaencmoetsiinfHgtihse(tiaret2eseIxi,insstoHimni eHthinaB-t

respect the same ortogonality condition as the above states
X pb roxb; a2b ;ilbit yxd; 3is triinbuHtiBonapnidoenqui a2tioIn, (1), such that for some
trA P2xj ih jP2x  = pi jbi x; 2 ihbi x; 2 j=2;
trA P3xj ih jP3x  = Xi2I pi jbi x; 2 ihbi x; 3 j=2:(3) i2I

Now comes the question. If a manufacturer hands over a source and claims that it is a perfect system, how can we check this claims, or at least, makes sure that it is an extended perfect system?
If the source is a perfect system, let N2; N3 be the measMbcauonermd2et;hmeMRe0e3+3p;n;1rtosoR;njRoe3,cHp2+tepi;ArorRa.not2j,iTenocgphpteraoorttaojnietsocH,HrtsltAeBottoHRinsA+ujbeb;x Rs0japb,;ca 3tc0l (ey;wis2,th bhHieye,rAeHNsaAm2ewjbjibw ft11h2a;;2;yo3 3ui ag its-),,
respectively. Now observe that the following are true for
6= 2 f2; 3g, x; y 2 f+; ,g,

jjPxj ijj2 = 1=2;

jjRy Pxj ijj2 jjPxj ijj2

=

x;y;

jjRyPxj ijj2 jjPxj ijj2

=

1=2:

(4)

We can ask the manufacturer to provide in addition two

measuring devices outside the blackbox corresponding to
N2; N3. A test can be executed to verify that these equa-

tions are satisﬁed (see the related discussion in the Intro-

duction). tation, to

mFaukrtehseurmreotrhea,taMs a0smaantdteNr o0sf

physical implemen-
operate on HA, HB

respectively, we can further demand that the buttons are re-

placed by two measuring devices outside the blackbox. Is

that sufﬁcient to guarantee that we have at least an extended

perfect system?

Unfortunately, the answer is NO. It is not hard to con-

struct examples where (4) is satisﬁed, but it is not an ex-

tended ideal system (and in fact, security is gravely com-

promised).

However, as we will see, if we add one more measure-

ment appropriately on each side, and perform the corre-

sponding checks, then it gurantees to be an extended perfect

system. That will be the main result of this paper.

3 Main Theorem

An
object S =  HA

HB; j i; P1 ; P2 ; P3 ; R1 ; R2 ; R3  

is called an ideal source if the following are valid:

each
 a 0;

of
2 ;

aH A1;;

2H B ;

is a
 a 0;

2-dimensional Hilbert space with
3 ; a 1; 3   being a pair of or-

thonormal basis
 b 0; 2 ; b 1; 2  ;

of
 b 0;

3H A; b 1sa; t3i s ﬁnbgeingeqaupaatiiornof

(1), and orthonor-

smptaitrv aao0etljel;ey3b c;a ati,sP oi0ans3+; 1;ooP;fp 3be3,H  r0aBrta;eorsresps a+ettohciansetif vytp1ehir;nleoygj.se tbceaT tqtio1euo;sandteaio os  pcn0=er;pir(b2a12e t)o,;;PrPas1 2 +o1,;n;iPls2et2 ht,theraaee srsxetpBa;teteh1ecle s-l

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

(x 2 f0; 1g) be the state a x; 2  + a x; 3  after being normalized to unit length. The states a x; 1  and b x; 1  have

anaj1roiept.earrAeatsisc pxueul;csa1turi vasle,tl=aywtuetjshxceiionpnarsonoiuddjerecrbpt Piroxoxn;o1fao ,npade=nrPadtxojwxrsie0o.IanlatTetshrhnteewanstoitvPaaet1el+ltyse;rPjdn01ea,i--,

atarHdietnivosnAgepTralsenethecooeosttnHfapitnot,rBHiooHt .jAnhe=BrsCce8t,flei,oeao+aHrbnnrado lBosyn=aep,er8scePeoarwo1ansr fritidmoet;HhsPrtishplrA2 aeoeRrpn;(sl1 eydPtahcim;3dne tRegetboﬁ2 apatnrot;sreheoeRedmstjhe3 baefcesaoatoisprstopiuhrsPneorefir2j onoaPepgtcr,e0etPsPiHroo.a13  nnALto)eco.arwtospt oeioatrrhnn--

p ;  x; y  = jjRxPyj ijj2:

(5)

These numbers
p slein,   p=18;2   02;=02 .

can
=

b ceose a s=il8y  c2o=m2 pauntedd.

For
p1;2 0;

exam-
1  =

SPosuf1 r=Aae;nmP sHei2e nnlAfi;t-tsPicahR3 le1 Hscatk;aBciRtnte;ig2 nj jg;soRioi;un3 Pr2cc1 aeoc;HotPirnAd2 gin;oaPnt3eH cs;BoiRno, r1 tHdh;irnARea,e2 taem;nsRdiena3 tshH urecrBeeom,nmsseuienscatthss-

that the following conditions are satisﬁed:

jjRxPyj ijj2 = p ;  x; y :

(6)

We will see that a self-checking source gives rise to an

extended ideal system.

S =An HexAtendHedBi;djeail;sPo1u r;cPe2 ; P3 ; R1 ; R2 ; R3   is an or-
thogonal sum of ideal sources in a similar sense as an ex-

tended perfect system in relation to perfect systems. That
is, if there is an index set I, orthogonal two dimensional
P sdsdcuuoeebbnnmssoopppttiilaanneccxggee)ssttnhhHKueemiiss tbt aaettHereHsjBjxAxiiwi0woiiitnninhthibHK2ia iiix,,I ;sxowu rct ih(thh(ooortghroaaalntilt2taefelrIornntrjawasttojioiv2vmede=leilymy1(abep,iino  ssxxiso;;ib11nl  ay))l X = i  ai 0  bi 0  + ai 1  bi 1  :
i2I

iiPffnPagP1F i puj;xxrrPot ih2j =ee=cr;mtP io 0o3 na0rgeji0o ,,0inPf +oH+arc A te1sa1jica1enhxii at1hicin e,t.lytiTfhdooeherneaildefKovesaleiollroulyiwcrkcaeipesnretgohc, jaefweascceceto.tirohirsnaTeveshapePasotytnhidta2so-t,
verify.
Fact 1 Any extended ideal source is a self-checking

source.

Also, omitting

ittheismcleeaasrurthematefnrtosmP1a n;yRs1 el,f-ocnheecokbitnaginssoaurccoen, jbuy-

gate coding source.

Fact 2 The conjugate coding source obtained from an ex-
tended ideal source must be an extended perfect system. The converse of fact 1 is our main theorem.
Main Theorem Any self-checking source is an extended
ideal source.
It follows from the Main Theorem and Fact 2 that a selfchecking source provides an adequate source for the BB84 quantum key distribution protocol [7, 8].
We remark that in our deﬁnition of self-checking source,
j i the restriction of the initial state to a pure state instead
of a mixed state is not a real restriction. Given a source with a mixed state satisfying equation (6), we can con-
j i struct one with a pure state (by enlarging appropriately HA) satisfying (6). We can apply the Main Theorem to this
new source, and conclude that it also gives rise to an adequate source for the BB84-protocol.
menIttsis(sweeelel.gk.no[2w9n],),ftrhoamt qduiascnutistsieiosnssucahboaustjjERPxRPEyjxpeijrji2-
exhibit behavior characteristic of quantum systems that cannot be explained by classical theories. One may view our main result as stating that such constraints are sometimes strong enough to yield precise structural information about the given quantum system; in this case it has to be an orthogonal sum of EPR pairs

4 Proof of Main Theorem

We give in this Section a sketch of the main steps in the

proof.
Let S =  HA

HB; j i; P1 ; P2 ; P3 ; R1 ; R2 ; R3   be a

self-checking source. We show that it must be an extended

ideal source.

In Section 4.1, we derive some structural properties of

the projection operators as imposed by the self-checking

conditions, but without considering in details the constraints

due to the tensor product nature of the state space. In Sec-

tions 4.2 and 4.3, the state is decomposed explicitly in terms

of tensor products, and the properties derived in Section 4.1

are used to show that this decomposition satisﬁes the con-

ditions stated in the Main Theorem.

4.1 Properties of Projections

jectIendthsitsatseusb(sseucctihona,swPe1+pre;sPen1+t Rso2,me

properties of the pro) as consequences of

the constraints put on self-checking sources. The proofs of

these lemmas are somewhat lengthy, and will be left to the

complete paper.
LhaevmemPax 1 =FoRr exve.ry 2 f1; 2; 3g and x 2 f+; ,g, we

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

tlHoinil eLLbwaeeer1rttmt;v wsiap=2p2a;pc iV en s=; g.w8;Wfw,iaem:2nVs dWaiyu!f 1ttfhh;oWauertr21e ;sv  ius1 c; aihv;n 2utih;5na mnt be ew,r;w-eivplhm=reeom rdfeeius nVcvitt;iss- WoporrffmeoasrCoeraerr2lpvltdhwiinei.ocg-
ﬁned by

u1 =  1; 0 ; u2 =  cos2  ; sin   cos   ; u3 =  sin2  ; , sin   cos   ; u4 =  cos2  ; , sin   cos   ; u5 =  sin2  ; sin   cos   : Lpe2m Pm1+a ; P21+R3+ u1;;Pu12+;R   3,  ; u;5P 1+Ri2+s ; Pis1+omRo2,rph .ic to

Lemma 3 Let h = P1+R3+ , P1+R2+ . Then R1,h = h.

LRe3+m km=a

4 Let k 2 sin  

c=osP 2+ 2PP1+1,

,  cos   2P1+
.

. Then  R2+ ,

Since there is a symmetry between the projection opera-
tors P and R, the following is clearly true.

Lemma 5 Lemmas 2-4 remain valid if the projection oper-
ators P and R are exchanged.

4.2 The Decomposition

We now prove that the state 2 HA HB can be de-

cdoemcopmopseodsiitnioton tohfePd1i+rec,t

swuhmicohfiEs PeqRupaal itros.RW1+e

begin with a by Lemma

1.

X Lemma 6 One can write
P1+ =

iai 0  bi 0 

i2I

twa(iavihc ete0liry nego2IrotnhHiosHAnaAo nir)m2ainanlddIse Rex,ts1+bsioe (ft0a,ce tiig2niegnHavoreenBc HtcoiorBm2s)o.pIfle txhaerneouptmwerboaetrorser,sspPaen1c+d-
Proof The lemma is proved with the help of Schmidt de-
composition theorem [30] [31]. We omit the details here.
2KHP2+iiL   eatiHH 0BA ,=bbaeenttd hh2eebsissi nuu1bb  sscpp=oaascc ee  ,ssRpp13a+a.nn,nnDeeddeRﬁbb2+nyy ebbaiiai   i000   1  faaonnr=ddibai2i  1 1IP  ..3;+TLLh,eeett
X plan is to show that
= i ai 0  bi 0  + ai 1  bi 1  ;
i2I

and that Ki; Hi have all the properties required to satisfy

the Main Theorem.

In the remainder of this subsection, we use Lemmas 2-5

tjoecsthioonwotpheartaetoarcshRHxi

((PKxi)).

behaves correctly under the proIn the next subsection, we com-

plete the proof by showing that all Hi (Ki) are orthogonal

to each other.
P ppmau2rBts itPcyau1+llsaLore,;bmtPhe1mi+ssaaRimti3+sp2ﬁl,eie;dsP it1uf+h1uaR;tju3,aa2nr;ye ;l Prie n1+;peulaRar5c2+ reedlai;bstPiyo1+nitshRoem2,ajop rp pjr.uhoipjcr=iaItt0noe

projected states. Now
P1+ = P1+R3+ = P1+R3, = P1+R2+ = P1+R2, =

X iai 0  Xi2I iai 0  Xi2I iai 0  Xi2I iai 0  Xi2I iai 0 
i2I

bi 0 ; R3+bi 0 ; R3,bi 0 ; R2+bi 0 ; R2,bi 0 :

P 2 This means that, for each i I, any linear relation
j  j uj = 0 must also be satisﬁed if we make the fol-
lowing substitutions:

u1   bi 0 ;

u2 u3 u4 u5

       

RRRR33,2++2,bbbbiiii    0000    ;;;:

L beim 0m ;aR73+Fbio r0e a; cRh3,ib2i 0I ,; Ru2+1;bui 20;  ; R  ;2,ub5i  0is  is.omorphic to

Pbtwertoeweonef eURns2+eRbt3+ih be0i  p0are ncdaenRddi2,nRgbi3,o 0bbi s  e0.rv W,ateainoodnmatihntedthotehrtdeheootagrtiohlsnoahgleoitrnyea.bl2iety-

LdiecmNulmoatraet7oth,baiitt bi0si  e.1aI sny=ftaocts ,eRbei3+ th1,a tRisb2+im  1ab pi ips0e adbutyonidttheveﬁenvciettociortonpr.e Fr0pr;oe1nm -

under the isomorphism in Lemma 7.

From Lemma 7, for
space Hi, the projection

otpheeraptourrspoRs3+e ;

oRf3,vceoctrorersspoinndthtoe

choosing the
 bi 0 ; bi 1  

rcootoartdedinbaytethsyesatnemgleo b;tasiinmeidlarflryo,mR2+th;eRs2,yscteomr-

respond to choosing a coordinate system obtained from the

stoysstheomw tbhi a0t  R; b1+i ;1R 1, 

rotated by the correspond to

angle , . It remains
the coordinate system

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

 bi 0 ; bi 1   itself.
mains to prove that

RB1,ybid e1ﬁ n=itiobni 1R 1+. bi 0 

=

bi 0 .

It

re-

To do that, we use Lemma 3. Observe that

h

= =

XP1+R3, , P1+R2,
iai 0  R3+bi 0 

i2I
,

X

iai 0 

R2+bi 0 

= =

X
i2I ,1

i2I
iai 0   R3+ , R2+ bi 0 
X iai 0  bi 1 :

i2I

bSRii xn1cb ee. hRTah1,vieshcaos=mrehpqluebityreesdLtheomenpmtrhoaeo3sfu,tbhwsapet atmhceeupHstroih.jaevcetioRn1,obpie r1a to=rs

As stated explicitly in Lemma 5, we can obtain
metric statement that the the projection operators P

xthbeeshyamve-

as required on the subspace Ki.

Now that we have determined the behavior of the projec-
BptiooylnyLnoeopmmemriaaatlo4ros,fPotnh1,eKpirc;oaHjneicb,tewiowenrcoiatptneenrinaatsoprrsinocnipltehecasltcautelaPte1+any.

P1, = 2 2 R2+ , R3+  P2+ , cos2   P1+ :

X This gives
P1, = 2 2

i P2+ ,cos2   ai 0   R2+ ,R3+ bi 0 :

i2I

X After applying the rules and symplifying, we obtain
P1, = iai 1  bi 1 :
i2I
X As = P1+ + P1, , this proves
= i ai 0  bi 0  + ai 1  bi 1  :
i2I

4.3 Completing the Proof

It remains to show that all other. (A symmetric argument

HthienarsehoowrtshothgaotnaallltKo ieaacrhe

also orthogonal to each other.)
oHbbity hj1L.be irWe tpa0enai id;dr6=besbir  jivb1 ji1e  , 2axaa cnr;oIdebn.jHnt roAyajtd si osiscurattsmrihpoeoeanogn.tronhBtnehaydaotlgdbHtoeyoﬁni beanijalsi. tci0nho on;ot,btHohj rei1trh,i so.agssCpoalanelnalanlrtlhetyode,

Choose a coordinate system for the space spanned by the four vectors such that
bi 0  =  1; 0; 0; 0 ; bi 1  =  0; 1; 0; 0 ; bj 0  =  0; 0; 1; 0 ; bj 1  =  0; s; 0; t ; cowwRtichloofah3+eassreRynbf  r,ajdbbe3c jiR,w0t  s1 w3t,00h  iab6=easni=+ts diR0n0ssR  fi3+.ie,nn3,r;= FRs bticrbihn3,o oj a0sm  stai 1; nrR caeow or3+u=pe shrwbr inojck;0o  jhe00n0twci;;o osts0whrino tes=lh.ornieonendAog-g  wpzsoce;een0octrrhaaosoa=bles t,.oow  iTrunw;,sehtntticestoswsohriincnneohpocre r tbnlro hbueet.diordh uagwea0Sdcov titihnmcioo+=aats-frtl
subspaces. This completes the proof.
5 Concluding Remarks
The security problem for imperfect source is a difﬁcult one to deal with. The present paper is a step in only one possible direction. We have also limited ourselves to the
simplist case when the correlation probabilities p ;  x; y 
are assumed to be measurable precisely. We leave open as future research topics for extensions to more general models.
References
[1] P.D. Townsend, J.G. Rarity and P.R. Tapster, Enhanced single photon fringe visibility in a 10 km-long prototype quantum cryptography channel, Electronics Letters, vol. 29, no. 14, 8 July 1993, pp. 1291 – 1293.
[2] A. Muller, J. Breguet and N. Gisin, “Experimental demonstration of quantum cryptography using polarized photons in optical ﬁber over more than 1 km”, Europhysics Letters, vol. 23, no. 6, 20 August 1993, pp. 383 – 388.
[3] Franson, J. D., Ilves, H., “Quantum cryptography using optical ﬁbers”, Appl. Optics 33 (1994), 2949–2954.
[4] R. J. Hughes, G. G. Luther, G. L. Morgan, C. G. Peterson and C. Simmons “Quantum cryptography over underground optical ﬁbers”, Advances in Cryptology: Proceeding of CRYPTO’96.
[5] B.C. Jacobs and J.D. Franson, “Quantum cryptography in free space”, Optics Letters, vol 21, no 22, November 15, 1996.
[6] W. T. Buttler, R. J. Hughes, P. G. Kwiat, G. G. Luther, G. L. Morgan, J. E. Nordholt, C. G. Peterson, and C. M. Simmons, “Free-space quantum-key distribution”, Tentatively scheduled for 1 April 1998, Physical Review A, vol 57, no 4.

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

[7] C.H. Bennett, G. Brassard, “Quantum Cryptography: Public key distribution and coin tossing”, Proc. of IEEE International Conference on Computers, Systems, and Signal Processing, Banglore, India, December 1984, pp. 175 – 179.
[8] C.H. Bennett, F. Bessette, G. Brassard, L. Salvail and J. Smolin, “Experimental quantum cryptography”, Journal of Cryptology, vol. 5, no 1, 1992, pp. 3 – 28.
[9] A.K. Ekert, Quantum cryptography based on Bell’s theorem, Physical Review Letters, vol. 67, no. 6, 5 August 1991, pp. 661 – 663.
[10] C.H. Bennett, G. Brassard, S. Popescu, B. Schumacher, J. Smolin and W.K. Wootters, “Puriﬁcation of Noisy Entanglement and Faithful Teleportation via Noisy Channels”, Physical Review Letters, vol. 76, pp. 722 (1996).
[11] Deutsch, D., Ekert, A., Jozsa, R., Macchiavello, C., Popescu, S., Sanpera, A., “Quantum privacy ampliﬁcation and the security of quantum cryptography over noisy channels”, Phys. Rev. Lett. 77 (1996), 2818–2821.
[12] C.H. Bennett, “Quantum cryptography using any two nonorthogonal states”, Physical Review Letters, vol. 68, no. 21, 25 May 1992, pp. 3121 – 2124.
[13] D. Mayers and L. Salvail, Quantum Oblivious Transfer is Secure Against All Individual Measurements, Proceedings of the workshop on Physics and Computation, PhysComp ’94, Dallas, Nov 1994, pp. 69 – 77.
[14] B. Huttner and A.K. Ekert, “Information gain in quantum eavesdropping”, Journal of Modern Optics, vol 41, no 12, December 1994, pp. 2455 – 2466.
[15] A.K. Ekert, B. Huttner, G.M. Palma and A. Peres, “Eavesdropping on quantum cryptosystems”, Physical Review A, vol 50, 1994, pp. 1047 – 1056.
[16] N. Lu¨tkenhaus and S.M. Barnett, “Security against eavesdropping in quantum cryptography”, Proceedings of an International Workshop on Quantum Communication, Computing, and Measurement, September 25-30, 1996, Shizuoka, Japan, Plenum Press, New York (1997).
[17] C.H. Bennett, G. Brassard, S. Popescu, B. Schumacher, J. Smolin et W.K. Wootters, Physical Review Letters, vol. 76, 1996, pp. 722 – 725.
[18] D. Deutsch, A.K. Ekert, R. Jozsa, C. Macchiavello, S. Popescu and A. Sanpera, Physical Review Letters, vol. 77, 1996, pp. 2818 –2˜821,.
[19] Bennett, C. H., Mor, T., Smolin, J. A., “Parity bit in quantum cryptography”, Phys. Rev. A 54 (1996), 2675–2684.
[20] A. C. C. Yao, “Security of quantum protocols against coherent measurements”, Proceedings of 1995 ACM Sym. on Theo. Comp. (1995), pp. 67 – 75.
[21] D. Mayers, On the security of the Quantum Oblivious Transfer and Key Distribution protocols, Advances in Cryptology: Proceeding of CRYPTO’95, Lecture Notes in Computer Science, vol. 963, Springer – Verlag, Berlin, 1995, pp. 124 – 135.

[22] D. Mayers, “Quantum key distribution and string oblivious transfer in noisy channel”, Advances in Cryptology: Proceedings of Crypto’96, Lecture Notes in Comp. Sci., vol 1109, (Springer-Verlag, 1996), pp. 343 – 357.
[23] Biham, E., Mor, T., “Bounds on information and the security of quantum cryptography”, Phys. Rev. Lett. 79 (1997), 4034– 4037.
[24] Biham, E., Boyer, M., Brassard, G., van de Graaf, J., Mor, T., “Security of quantum key distribution against all collective attacks”, Los Alamos preprint archive quant-ph/9801022 (1998).
[25] Fuchs, C. A., Gisin, N., Grifﬁths, R. B., Niu, C.-S., Peres, A., “Optimal eavesdropping in quantum cryptography. I. Information bound and optimal strategy”, Phys. Rev. A 56 (1997), 1163–1172.
[26] Grifﬁths, R. B., Niu, C.-S., “Optimal eavesdropping in quantum cryptography. II. A quantum circuit”, Phys. Rev. A 56 (1997), 1173–1176. quant-ph/9803006 [abs, src, ps, other] :
[27] H.-K. Lo, H. F. Chau, “Security of Quantum Key Distribution” Los Alamos preprint archive quant-ph/9803006, March 1998.
[28] D. Mayers, “Unconditional security in quantum cryptography”, Los Alamos preprint archive quant-ph/9802025 (1998).
[29] A. Aspect and P. Grangier, “Experiments on EinsteinPodolsky-Rosen-type correlations with pairs of visible photons”, in Quantum Concepts in Space and Time, edited by R. Penrose and C.J. Isham, Clarendon Press, Oxford, 1986, 1-15.
[30] E. Schmidt, Math. Ann. 63 (1906) 433.
[31] L. P. Hughston, Richard Jozsa and William K. Wootters, Physics Letters A, vol. 183, pp. 14 – 18, 1993.

Authorized licensed use limited to: Univ of Calif Berkeley. Downloaded on April 10,2024 at 19:21:23 UTC from IEEE Xplore. Restrictions apply.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:30.596Z
- **Text Length:** 30170 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
