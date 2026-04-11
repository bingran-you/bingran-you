# PDF Document: Krejčí et al. - 2025 - Occlusion-Aware Multi-Object Tracking via Expected Probability of Detection.pdf

**File Path:** Krejčí et al. - 2025 - Occlusion-Aware Multi-Object Tracking via Expected Probability of Detection.pdf

**Processed Date:** 2026-02-10T18:17:32.924Z

**File Size:** 798.29 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3357

**Title:** Occlusion-Aware Multi-Object Tracking via Expected Probability of Detection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Occlusion-Aware Multi-Object
Tracking via Expected
Probability of Detection
Jan Krejˇcı ́
University of West Bohemia, Pilsen, Czech Republic
Oliver Kost
University of West Bohemia, Pilsen, Czech Republic
Yuxuan Xia
Shanghai Jiaotong University, Shanghai, China
Lennart Svensson, Senior Member, IEEE Chalmers University of Technology, Go ̈teborg, Sweden
Ondˇrej Straka, Member, IEEE
University of West Bohemia, Pilsen, Czech Republic
Abstract— This paper addresses multi-object systems, where objects may occlude one another relative to the sensor. The standard point-object model for detection-based sensors is enhanced so that the probability of detection considers the presence of all objects. A principled tracking method is derived, assigning each object an expected probability of detection, where the expectation is taken over the reduced Palm density, which means conditionally on the object’s existence. The assigned probabilit-
y thus considers the object’s visibility relative to the sensor, under the presence of other objects. Unlike existing methods, the proposed method systematically accounts for uncertainties related to all objects in a clear and manageable way. The method is demonstrated through a visual tracking application using the multi-Bernoulli mixture (MBM) filter with marks.
Index Terms— Occlusion, reduced Palm distribution, multiBernoulli mixture filter, visual object tracking
I. Introduction
Multi-object tracking (MOT) refers to estimating the number and locations of multiple moving objects, given sets of noisy detections [1]. The corresponding tracking algorithms are key in fields such as aerial and naval security [2] or autonomous driving [3]. Most sensors require a clear line of sight to detect objects, but occluding objects, can block this visibility. When a tracking algorithm fails to predict occlusion, it may lose sight of occluded objects, which can hinder users in safety-criti-
cal situations. Numerous methods have been proposed to handle such occlusion situations across diverse domains and
This research was partially supported by the European Union under the project ROBOPROX (reg. no. CZ.02.01.01/00/22 008/0004590) and by the Czech Science Foundation (GACR) under grant GA 25-16919J.
0018-9251 © IEEE
sensors. The strategies for handling occlusion can vary significantly, ranging from solutions based on ad-hoc approaches to those grounded in physical models. In particular, the methods can be classified into (i) fully adhoc, (ii) combined ad-hoc and model-based, and (iii) fully model-based strategies. Note that by an ad-hoc solution, we mean that the solution includes some procedure that is inconsistent with a principled (e.g., probabilistic) approximation that leverages the essential physical as-
sumptions about occlusions sketched above. A fully ad-hoc strategy (i) directly handles track losses. Basic strategies aim to reintroduce lost object tracks when the objects become visible to the sensor again after occlusion, e.g., [4]–[7]. One can also compute a variable reflecting the current status of occlusions (e.g., visibility) and use it to prevent the method from losing the track in the first place. In the domain of computer vision (CV), this can be achieved by utilizing re-identification -
(re-ID) visual features, e.g., [6]–[9]. Other approaches from the CV domain include ByteTrack [10], which uses all bounding box outputs (i.e., detections) of a visual detection network, including the detections with low scores. Methods [11] or [12] employ so-called pseudo depth and use a custom detection-to-track matching. To handle track loss using the motion capture sensor, [13] employed the linear MOT approach [14], in which measurements appearing nearby other objects are considered as clutter.-
 Computation of variables reflecting occlusions may involve a model, which leads to strategies (ii). A number of methods employ a customary likelihood function [15]–[23]. In CV, the works [15], [17] compute visibility, while [18] retain occlusion rate variables for each object. Similarly, [19], [20] use an occlusion relationship variable, which approach shares similarity with [16]. The works [21], [22] consider missing measurements due to occlusions as negative information. The work [23] employs p-
article filters that interact via a likelihood function accounting for occlusions. Instead of defining a custom likelihood, one can craft an association cost matrix directly [8], [10], [24], based on occlusion-related variables. Occluded regions are computed in [25] for radar tracking, where objects whose mean vector falls into the occlusion region of the other objects are programatically retained in the algorithm. A similar approach is utilized in [26] for LiDAR tracking. The ad-hoc strategies (i-
)-(ii) may be reasonable and lead to superior performance. However, the heuristic data processing involved in these methods may lead to doubts about their application in safety-critical areas. To alleviate this, a fully model-based approach (iii) can be used. The method [27] proposed minimizing a custom physical energy that included an occlusion model, which shares similarities with [28]. A more common approach, however, is to formulate the entire physical model in probabilistic terms and use the -
Bayes rule to yield the corresponding optimal solution [29]–[31]. Note that despite adopting the Bayesian formulation, the methods [4]–[6] fall into (i) due to their occlusion-handling strategy.
IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No. 1
arXiv:2511.20239v1 [eess.SY] 25 Nov 2025

To account for occlusions in the Bayesian formulation consistently, one can either (iii.a) adopt the merged measurement framework [32]–[34], or (iii.b) model probability of detection (PoD) as a function reflecting occlusions. The latter is more common in the literature. While (iii.a) seems reasonable for the track-before-detect paradigm used in [32], it seems unsuitable for tracking-by-detection focused on by this work, where a detection can usually be assigned to one object only. Outside the Bay-
esian formulation, a related strategy based on object groups is taken in [35], [36], where objects participating in an occlusion event were merged together. Drastic approximations involved in existing methods of (iii.b) make them fall into (ii). Despite the design of the PoD function might be sound, its integration into the method follows ad-hoc workarounds. The work [37] assigns each object a PoD assuming it is a constant function of its mean vector, while [38]–[43] assume it depends on an occlus-
ion-related variable. In particular, [39] extends [25] by using an occlusion likelihood that scales the PoD. The studies [41]–[43] model the PoD for each object as being directly influenced by the other objects. This allowed [41] to conclude that the posterior is no longer conjugate with the prior used therein, and thus intractable. As a simple workaround, [41]–[43] estimated the states of other objects and substituted them into the PoD. This is arguably a sound approximation, provided the objects-
 have little spatial and existence uncertainties. The uncertainties, however, usually vary in time and space. A more sound approximation given in [44] took the uncertainties into account by a weighted sum over data association hypotheses. After analyzing [44], we conclude that the notation and interpretation of the procedure are questionable. Similarly, the definition of occlusion probability used to scale the PoD in [38] is mathematically vague and thus questionable. Finally, the works [45], [46]-
 designed the PoD to account for both occlusions and the existence of all the objects explicitly. To use it efficiently for each heuristically indexed object, an expected PoD (EPoD) was computed over its distribution. Note that adhoc indexing is a subtle issue in a number of the above methods [25], [38]–[40], [45], [46]. To the best of the authors’ knowledge, none of the existing methods handle occlusions in a fully modelbased and thus consistent manner (iii), while also resulting in a tractable e-
nd-to-end algorithm at the same time. This paper addresses this issue by developing a domain-independent variational-Bayesian solution, that yields a tractable occlusion-handling strategy. The main contributions of this paper are:
• Two approximations to the multi-object posterior are derived, given a measurement model whose PoD depends on all objects. The corresponding occlusionhandling strategies involve computing the EPoD for each (1) state or (2) mark, and the expectation is taken over the reduced Palm density (RPD) [47].
• The RPD computation is analytically revealed for several multi-object densities used in MOT problems. • Tractable EPoD computation is proposed for the prior being a multi-Bernoulli mixture (MBM) with marks. • The MBM filter with the proposed occlusion-handling strategy, is applied to visual tracking and shown to outperform comparable existing methods.
The paper is organized as follows. Section II introduces background on Bayesian MOT needed for the proposed solution. Section III introduces Palm conditioning, used when a particular object is known to be present, and auxiliary variables used for convenient measurement density representation. Then the proposed method is outlined. Section IV presents more efficient approximation and a filter implementation. The proposed method is tested in Section V, and the paper concludes in Section VI.
II. Background of Model-Based MOT
This section briefly reviews random finite set (RFS) approach to MOT with Bayesian treatment of finite set statistics (FISST) [29], [30], with special regard to the so-called standard point-object (SPO) model. Furthermore, the occlusion-handling strategy of [41]–[43] is reviewed.
A. RFS Approach to MOT
Throughout the paper, the symbols X and Z denote the state and measurement spaces, respectively, and are both assumed to be complete separable metric and measure spaces with some reference measures (such as the Lebesgue measure in the case of X =Rd). For clarity, unnecessary mathematical details are omitted if possible. Intuitively, an RFS Ξ on X is a random subset of X with a locally finite number of elements (analogically for Z). That is, both the cardinality |Ξ| and the elements x∈Ξ are random.-
 The elements are regarded as points. Throughout the paper, the symbol Xk={x1
k, . . . , xnk
k} denotes the set of object states at time step k=0, . . . , K, with K∈N being the final time step. That is, Xk is a realization of Ξk, k=0, . . . , K. Whenever possible, random entities and their realizations are denoted by the same symbol for convenience. Similarly, measurements received at each time step are modeled as RFSs Zk={z1
k, . . . , zmk
k }. For k=0, . . . , K, the available measurement sets Zk≜(Z0, . . . , Zk) are used to yield the posterior density p(Xk|Zk) of Xk via the Bayes filter [29]
p Xk|Zk ∝ p(Zk|Xk) · p(Xk|Zk−1), (1a)
p(Xk|Zk−1) = R p(Xk|Xk−1)p(Xk−1|Zk−1)δXk−1, (1b)
where p(X0|Z−1)≜p(X0) is the initial density for k=0, p(Xk+1|Zk) is the predictive density and the densities p(Zk|Xk) and p(Xk+1|Xk) encapsulate the measurement and motion models (such as the SPO model), respectively. The symbol ∝ denotes equality up to a normalizing constant. The subscript of density functions will be used to provide additional information, such as the distribution
2 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

name and/or the random variable symbol, if its omission could lead to confusion. The integral of a function f (X) with finite-set inputs is taken to be the set integral [29]
R f (X)δX ≜ P+∞
n=0
1 n!
R f ({x1, . . . , xn})dx1 · · · dxn, (2)
and the densities are such that R p(X)δX = 1. Several key RFS densities are listed below.
1. Bernoulli RFS
A Bernoulli RFS is either empty or a singleton. The corresponding density function is
pBer(X) =



1 − r if X = ∅,
r · psp(x) if X = {x}, 0 otherwise,
(3)
where r ∈ [0, 1] is the existence probability and psp(x) is the spatial density of x conditioned on its existence.
2. Multi-Bernoulli RFS
A multi-Bernoulli (MB) RFS is a union of multiple independent Bernoulli RFSs. Denoting the density of the lth Bernoulli RFS with pl
Ber(X), l=1, . . . , N , the resulting MB RFS density is given by
pMB(X) = P
⊎N
l=1Y l=X
QN
l=1 pl
Ber(Y l) , (4)
where the symbol ⊎ means that the sum is taken over all mutually disjoint sets Y 1, . . . , Y N whose union is X.
3. Poisson RFS
A Poisson RFS describes an independent and identically distributed set of points whose number is Poisson distributed. The corresponding density function is
pPois(X) = e−ρ Q
x∈X ρ · psp(x) , (5)
where ρ ≥ 0 is the expected number of points.
4. Poisson Multi-Bernoulli RFS
The union of independent Poisson-distributed RFS X0 and MB-distributed RFS X1 is the Poisson multi-Bernoulli (PMB) RFS. The corresponding density function is
pPMB(X) = P
Y 0⊎Y 1=X pPois Y 0 · pMB Y 1 . (6)
5. Marked RFS
As a special RFS case, an RFS X⊂X with X =X S×M being a joint space of X S and a set of marks M is called a marked RFS, whenever the points without marks (i.e., the corresponding marginal random set on X S) again forms an RFS, c.f. [48, Sec. 1.8]. In this paper, the space of marks M is assumed to be discrete. Analogically for Z. Points with marks will be denoted as x=(x, m)∈X . To extract marks from a set X of marked points, define
L(X) ≜ {m∈M : ∃x∈X S s.t. (x, m)∈X} . (7)
Note that marks are not necessarily unique, i.e., |L(X)| might not be equal to |X|. For a set X, let
Xm ≜ x∈X : L({x})={m} , (8)
denote the subset of points of X with the same mark m∈M. Integral of a function f (x) on X =X S×M is
R f (x)dx = P
m∈M
R f (x, m)dx , (9)
and the set integral (2) of a function f (X) with finite-set inputs thus takes the form
R f (X)δX = P+∞
n=1
1 n!
P
m1 ,...,mn ∈M
R f ({(x1, m1), . . . , (xn, mn)})dx1 · · · dxn . (10)
Denoting the density of a marked RFS with pmarked( · ), the corresponding set of points without marks has the marginal density for any {x1, . . . , xn}⊂X S given by
punmarked({x1, . . . , xn}) =
P
m1,...,mn∈M pmarked({(x1, m1), . . . , (xn, mn)}). (11)
A significant portion of the MOT literature is concerned with the case when points must always have distinct marks. In such a case, the marks are referred to as labels [49][51] and are used to distinguish among different objects to form trajectories. Labels typically apply to a set of states only, while in this paper, both the sets of states and measurements will be considered as having marks.
B. MOT Without the Presence of Occlusions
A widely adopted model for tracking objects without any interactions (including occlusions) is given by the SPO model. It should be emphasized that the terminology pointobject refers to the assumption that each point (i.e., object) xk∈Xk is resolvable as an actual point for the sensor. That is, each object is either detected or not, whereas there is at most one detection per object. In the SPO measurement model, each object xk∈Xk is either detected with the state-dependent PoD PD(xk) and independe-
ntly generates a measurement according to the single-object likelihood function L(zk|xk), or it is undetected with the probability 1−PD(xk). Moreover, independent clutter detections described with the RFS Ck may be produced by a sensor. The set of all measurements at time step k is thus [29, pp. 411],
Zk = S
xk∈Xk D(xk) ∪ Ck , (12)
where D(xk) is a conditional Bernoulli RFS with density
p(D|xk) =



1 − PD(xk) if D = ∅
PD(xk)L(zk|xk) if D = {zk} , 0 otherwise.
(13)
The clutter RFS Ck is modeled as Poisson. The density p(Zk|Xk) resulting from (12) is thus a PMB (6) [29, Sec. 12]. The SPO motion model is omitted in this paper for brevity, and can be found, e.g., in [29, pp. 467]. Assuming the birth and the initial density are both MB (or mixtures thereof), the corresponding model-based filter is the multi-Bernoulli mixture (MBM) filter [52], [53]. If object states for the MBM filter are uniquely marked, the labeled MBM (LMBM) filter [52] results without the ne-
ed to alter the filtering recursion. The socalled generalized labeled multi-Bernoulli (GLMB) [51], also referred to as MBM01 in [54], can be understood as
:3

a special case of the LMBM filter, where the existence probability of each Bernoulli is either 0 or 1, resulting in an exponential increase of global hypotheses in the prediction step. Approximations can be employed to yield, e.g., the LMB [55] and other filters [56]. Assuming the birth and the initial distribution are Poisson is possible as well, see, e.g., [29, Section 16.3], [54], [56]. Particular filtering recursions are omitted and can be found in the literature. Note that Gaussian mixture (-
GM) implementations often assume constant PoD PD(xk)=PD.
C. MOT in the Presence of Occlusions
In this section, the SPO model is generalized to account for occlusions following [41]–[43]. In particular, the structure of the SPO measurement model (12)-(13) is adjusted to allow the possibility that detections are less likely to occur for occluded objects. The corresponding model is referred to as SPO with dependency (SPO-D). Both the PoD and the single-object likelihood function for each xk∈Xk may also depend on the rest of the objects Xk\{xk}. Since we are modeling point objects, it is reaso-
nable to assume that measurements, if received, are not influenced by the presence of other objects. Therefore, the dependency of the likelihood function L(zk|xk) on the other objects Xk\{xk} is dropped. That is, Eq. (12) is generalized for the SPO-D model to
Zk = S
xk∈Xk D(xk, Xk\{xk}) ∪ Ck , (14)
where D(xk, Xk\{xk}) is a Bernoulli RFS with
p(D | xk, Xk\{xk}) (15)
=



1 − PD(xk, Xk\{xk}) if D = ∅ ,
PD(xk, Xk\{xk}) · L(zk|xk) if D = {zk} , 0 otherwise,
where PD(xk, Xk\{xk}) is the PoD that depends on the given object xk and the set of other objects Xk\{xk}. Examples of PD(xk, Xk\{xk}) expressions can be found in [41]–[43] and will be discussed in detail later. Clutter Ck is still modeled as Poisson. It is easy to see that the density p(Zk|Xk) resulting from (14) is still a PMB (6), since Xk is given. The SPO-D motion model is taken to be the SPO motion model. Unless the prior is Bernoulli, the posterior corresponding to the SPO-D model contains -
interactions among objects induced by the dependency of D(xk, Xk\{xk}) on Xk\{xk}. This was observed by [41] for the GLMB prior. To achieve tractability of the posterior, approximations must be developed. The works [41]–[43] used an ad-hoc approximation within the labeled framework, which could be stated as follows:
E: estimate the set of all objects Xˆk based on the prior,
S: substitute Xˆk into the SPO-D model, i.e., define
PD(m) := PD (xˆk, m), Xˆk\{(xˆk, m)} , (16)
where xˆk is the estimate corresponding to label m, O: obey the SPO model parameterized with (16) to achieve tractable filtering recursion.
This occlusion-handling strategy will be referred to as ESO strategy for short. Since the estimation step E is based on existence probabilities, the ESO strategy considers (I) no spatial uncertainties and (II) only limited amount of existence uncertainties corresponding to the objects. Other strategies that take the uncertainties into account are either insufficiently described [38], [44] or assume that the PoD depends on the uncertainties explicitly [45], [46] which fails to follow physical model-
ing. A strategy is proposed in the following section that considers uncertainties in a mathematically sound manner.
III. Proposed Approximation
The proposed occlusion-handling strategy modifies the steps E and S, while it keeps the appealing step O in use. It serves as an approximation of the posterior, which will be detailed later. Specifically, Eq. (16) is replaced by calculating a conditional expectation of PD(xk, Xk\{xk}), i.e., EPoD. Note that [45] computed an EPoD differently, and that EPoD can be found in other contexts [57], [58]. To theoretically develop the strategy outlined above, we first introduce Palm conditioning (Section I-
II.A) and auxiliary variables (Section III.B), which are essential for establishing the approximation in Section III.C.
A. Palm Conditioning
The Palm distribution is the conditional probability law of the RFS Ξ, given that a particular point x∈X is known to be an element of Ξ, i.e., given the event x∈Ξ. The reduced Palm distribution is then the probability law of the other points, i.e., of the subset Θ=Ξ\{x}, given x∈Ξ. Its corresponding density function, called the reduced Palm density (RPD) is needed in this paper. In the FISST notation, the RPD evaluated at O := X\{x} can be computed simply as (see [47, p. 511])
pΘ|x(O|x) ab=br. pΞ\{x}|x∈Ξ(O|x) = pΞ(O ∪ {x})
DΞ(x) , (17)
where DΞ(x) is the PHD corresponding to Ξ as
DΞ(x) = R pΞ(X ∪ {x})δX . (18)
Palm conditioning springs from the random counting measure treatment of RFSs, which is an alternative to FISST. The rigorous construction of (17) within FISST is detailed in Appendix A. Several RPD examples follow.
1. RPD Corresponding to a Bernoulli RFS
It follows trivially that the RPD for a Bernoulli RFS is equal to one if O=∅ and zero otherwise. It also follows from (17) using the Bernoulli PHD DBer(x)=r·psp(x).
2. RPD Corresponding to a Poisson RFS
According to the Slivnyak-Mecke theorem [47, p. 281], Palm conditioning within a Poisson process introduces no knowledge of the distribution of the other points. Indeed,
4 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

the RPD (17) for the Poisson RFS (5) is
pPois:Θ|x(O|x)=
e−ρ Q
o∈O∪{x} ρ·psp(o)
ρ·psp(x) =pPois(O). (19)
3. RPD Corresponding to a Poisson Multi-Bernoulli RFS Consider an RFS Ξ with a PMB density (6). A point x∈Ξ might have come from either the Poisson component or one of the Bernoulli components. Conditioning on “x∈Ξ” must thus explore either possibility, leading to a mixture of PMB densities. First, the numerator of (17) is
pPMB(O∪{x}) = P
O0⊎O1=O∪{x} pPois(O0)·pMB(O1)
=
P
Y 0⊎Y 1=O pPois(Y 0) ρ·psp(x)·pMB(Y 1)
+
PN
l=1 rl·pslp(x)·pMB\l(Y 1) , (20)
where rl is the existence probability and pslp(x) is the spatial probability density corresponding to the l-th Bernoulli component, respectively; l=1, . . . , N , The symbol MB\l is a shorthand notation for the MB resulting by omitting the l-th component,
pMB\l(X) = P
⊎N
m=1
m̸=l
Y m=Y
QNm.=1
m̸=l
pm
Ber(Y m) . (21)
Dividing (20) with the PHD
DPMB(x) = ρ·psp(x) + PN
l=1 rl·pslp(x) (22)
(c.f. (17)) yields the desired RPD as
pPMB:Θ|x(O|x) = P
O0⊎O1=O pPois(O0) w0·pMB(O0) +
PN
l=1 wl·pMB\{l}(O1) , (23)
which is a PMB mixture, where the weights are
w0 = ρ·psp(x)
ρ·psp (x)+PN
l=1 rl·pslp(x) , (24a) wl = rl·pl
sp (x) ρ·psp (x)+PN
l=1 rl·pslp(x) , l = 1, . . . , N. (24b)
Note that the RPD corresponding to MB RFS is a special case of (23)-(24) when setting ρ=0. If a point x∈Ξ contains the information from which PMB component it came from, both the PMB density and its RPD get simplified significantly. We aim to simplify the PMB densities related to the SPO and SPO-D measurement likelihoods for convenience. For this reason, a special class of marked RFSs is introduced, whose marks are made to correspond with the different density components. Such marks effectively be-
have like auxiliary variables that facilitate the development of efficient approximations [59].
B. Auxiliary Variables
First, define a spatial density auxiliary supported on μ∈M to be a spatial density on the joint space X =X S ×M, for which
psp(x, m) = psp(x|m) · δμ[m] , (x, m) ∈ X , (25)
where psp(x|m) is a spatial density on X S conditioned on m∈M, and δμ[m] is the Kronecker delta. Moreover, an auxiliary Bernoulli (resp. Poisson) RFS supported on μ∈M is a Bernoulli (resp. Poisson) RFS whose spatial
density is auxiliary supported on μ. The corresponding density functions are denoted with pμ
A-Pois(X) and pμ
A-Ber (X ),
for the Poisson and Bernoulli cases, respectively. The union X = X0 ⊎ X1 ⊎ · · · ⊎ XN of independent RFSs where X0 is auxiliary Poisson RFS supported on μ0∈M, and Xl is auxiliary Bernoulli RFS supported on μl∈M, l=1, . . . , N , with μ0, μ1, . . . , μN being distinct, is the auxiliary PMB (A-PMB) RFS. The corresponding density function defined on the joint space is
pA-PMB(X) =
1M (L(X)) · pμ0
A-Pois X μ0 QN
l=1 pμl
A-Ber Xμl , (26)
where M = {μl}N
l=1, the symbol Xμl is as defined in (8) and 1A(B) is the inclusion function [50] which is equal to one if B ⊆ A and zero otherwise. The density corresponding to the set of points without marks (11) is the standard PMB density (6), see [59]. To define auxiliary measurement likelihoods, let Z=ZS×(M ⊎ {0}) be the joint space of measurements, where 0 will be used to determine clutter. Consider that actual measurements received are subsets Z ̃k of ZS. Note that the SPO and SPO-D measurement models fro-
m Section II.B and II.C, respectively, are considered to be defined for Zk on Z. Moreover, it is assumed that the set of states on the joint space X =X S×M forms a labeled RFS, i.e., elements of Xk have distinct marks. For each given xk∈X , specialize the definition of the single-object likelihood L( · |x) on Z to be the spatial density auxiliary supported on L(xk)∈M, as
L(z, m|xk) = L(z|xk) · δL(xk)[m] , (z, m) ∈ Z , (27)
where L(z|xk) is the likelihood of the actual z∈ZS. For the SPO measurement model, the corresponding likelihood is the A-PMB density, further called auxiliary likelihood
pA-SPOk (Zk|Xk, PD) = 1L(Xk)⊎{0} L(Zk) ×
pCk (Z0
k) Q
xk∈Xk pD(xk)(Z L(xk)
k |xk, PD), (28)
where Zm
k (8) is the subset of measurements with the mark m and where pCk ( · ) is a Poisson density of clutter. The density pD(xk)( · |xk, PD) is defined in (13), where the dependency on PD( · , · ) is coined explicitly. The SPO-D auxiliary likelihood pA-SPO-Dk (Zk|Xk) is a straightforward generalization of (28) and is thus omitted. Since (28) is an auxiliary PMB, the density corresponding to the set of points without marks (i.e., the actual measurements) becomes the likelihood of the standard form (6). -
Note that the number of Bernoulli components in (28) is |Xk| and that marks in Xk must be distinct so that (28) is A-PMB.
C. SPO Approximation with Best PoD: General Case
Consider that the true MOT model obeys the SPO-D measurement model. A top-down approximation of the (unnormalized) posterior is established below, using auxiliary likelihood corresponding to a much simpler SPO model structure and an optimal parameter PD(xk).
DEFINITION 1 (KULLBACK-LEIBLER DIVERGENCE (KLD)): Given two densities p( · ) and q( · ) defined on a
:5

(measure) space Y, the expression
DKL(p∥q) = R
Y p(y) log p(y)
q(y) dy , (29)
is a statistical quantification of discrepancy between the two densities, commonly known as the KLD.
Let p( · ) be the true joint density on the right-hand side of (1a). That is, omitting the conditioning on Zk−1,
p(Zk, Xk) := pA-SPO-Dk (Zk|Xk)p(Xk|Zk−1) . (30)
Let q( · ) be a joint density qP ( · ) resulting from using the simpler likelihood (28) with parameter P : X →[0, 1] as
qP (Zk, Xk) := pA-SPOk (Zk|Xk, P)p(Xk|Zk−1) . (31)
Denote the space of joint densities of the form (31) with
Q ≜ qP ( · , · ) of the form (31) : P : X →[0, 1] . (32)
The following proposition reveals the optimal P∗, for which the joint densities are closest in the sense of KLD.
PROPOSITION 1 The best-fitting joint density
q∗ = arg min
qP ∈Q
DKL(p∥qP ) (33)
with p( · ) of the form (30) is qP∗ (Zk, Xk), where
P∗(xk) = EΘk|xk PD(xk, Ok) (34)
is the EPoD. The expectation is taken over the RPD (17). Proof is given in Appendix B.
Using PD(xk):=P∗(xk) (34) for the SPO model, we conclude that the density pA-SPOk (Zk|Xk, P∗) best matches pA-SPO-Dk (Zk|Xk) for any Xk distributed according to the prior density. By considering the auxiliary likelihoods without marks using (11), we obtain the best SPO approximation for the intractable SPO-D model.
IV. SPO Approximation with Best PoD: Marks Only
As indicated before, implementations using GMs often assume a constant PoD. To address occlusions, however, the PoD cannot be the same constant for all objects. In the following, we deal with an efficient mark-only case of Proposition 1 to find a suitable constant for each object. Assume that P in (31) is a function of only the mark, i.e., P : M→[0, 1]. Redefining Q (32) as
Q ≜ qP ( · , · ) of the form (31) : P : M→[0, 1] , (35)
and using it with (33) yields the optimal
P∗(m) = EOk,xk|( · ,m) PD (xk, m)), Ok (36a)
≡
RR PD (xk, m)), Ok × pΘk|xk Ok|(xk, m) D(xk|m)δOkdxk, (36b)
where the single-object conditional and marginal densities for the given mark m∈M are given by the PHD as
D(xk|m) = DΞ(xk,m)
D(m) , D(m) = R DΞ(xk, m)dxk . (37)
As a special case of Proposition 1, the result (36) provides the best-fitting PoD as a function of only the mark. Its practical use is explained in the following, while the proof is given in Appendix B (Corollary 3).
Recall that marks in Xk must be distinct so that the auxiliary SPO and SPO-D likelihoods are A-PMB densities. It is apparent that this assumption is unnecessary for computing (36), while Xk does not even need to be marked for the calculation of (34). For such a case, however, the optimality (Proposition 1 and thus Corollary 3) was not established in this paper. To give a provably optimal end-to-end solution below, we remain consistent with the assumption on Xk and use MBM filter for convenience.
A. Multi-Bernoulli Mixtures in MOT
Assuming the birth is MB, the MBM density is a conjugate prior for the SPO model II.B, giving rise to the MBM filter [53]. We equip each Bernoulli with a unique mark to compute the EPoD for each mark instead of each state. Following directly Section III.B, the marks are called auxiliary variables in this paper and they are equivalent to labels. In particular, we deal with the special case of A-PMB densities where the Poisson part is missing, which are addressed as auxiliary MB (A-MB) densities. No-
te that the resulting algorithm is a special case of the MBM filter that is equivalent to the LMBM filter. For notational simplicity, the time index k is dropped in the following.
1. Auxiliary MB RFS
The A-MB RFS results by dropping the Poisson component from the A-PMB RFS (Section III.B), and it can be regarded as the LMB RFS [30, pp. 453-458]. The corresponding density can be written as
pA-MB(X) = 1M (L(X)) · QN
l=1 pμl
A-Ber Xμl . (38)
If m∈M ={μ1, . . . , μN }, its RPD is a special case of (23),
pA-MB:Θ|x(O|(x, m)) = pA-MB\m(O) , (39)
and zero otherwise, with pA-MB\m(O) given in (21)
2. Auxiliary MBM RFS
A mixture of A-MB-distributed RFSs is referred to as the auxiliary MBM (A-MBM) RFS, which can be viewed as the LMBM RFS [52]. In MOT, each mixture term corresponds to a global data association hypothesis. Assigning a subindex h to each term/hypothesis, the density of the A-MBM RFS becomes
pA-MBM(X) = PH
h=1 wh · pA-MB,h(X) , (40)
where H is the number of mixture terms, and wh is
the weight of the hypothesis h, h=1, . . . , H, such that
PH
h=1 wh = 1. Let Mh≜{μl
h}Nh
l=1 be the set of auxiliary variables forming the support corresponding to the A-MB hypothesis h, and extend the existence probability rm
h to be zero if m∈/Mh. The RPD for the A-MBM RFS is then
pA-MBM:Θ|x O|(x, m) (41)
=1
DA-MBM (x,m)
PH
h=1wh·rm
h ·psp,h(x|m)·pA-MB,h\m(O),
where the PHD of the A-MBM RFS is
DA-MBM(x, m) = PH
h=1 wh·rm
h ·psp,h(x|m) . (42)
6 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

Employing the PHD conditioning (37) yields
DA-MBM(xk|m) =
PH
h=1 wh·rm
h ·psp,h(x|m)
DA-MBM(m) , (43a)
DA-MBM(m) = PH
h=1 wh·rm
h . (43b)
The conditional density for the expectation (36) becomes
pA-MBM:Θ|x Ok|(xk, m) DA-MBM(xk|m) (44)
=1
DA-MBM (m)
PH
h=1wh·rm
h ·psp,h(x|m)·pA-MB,h\m(O) .
B. Optimal parameter for MBM Filtering
Once the A-MBM prior density is obtained in the form (40), the best-fitting approximation (36) becomes
PD(m) := 1
PH
h=1 wh·rm
h
PH
h=1 wh·rm
h ·P ̄D(m, h) , (45)
where the EPoD corresponding to the hypothesis h is
P ̄D(m, h) ≜ RR PD (x, m), O pA-MB,h\m(O)psp,h(x|m) δOdx. (46)
Since PD( · , · ) cannot generally be written as a sum or a product, the computation of (46) is challenging. We propose to use directly the set integral form of (46), i.e.,
P ̄D(m, h) = P|Mh\{m}|
n=0
P
A⊆(Mh\{m}), s.t. |A|=n ωm
h (A)
R R ···R
| {z }
n-times
PD (x, m), {(oμ, μ)}μ∈A × psp,h(x|m) Q
μ∈A psp,h(oμ|μ) dx Q
μ∈A doμ , (47)
if m∈Mh and zero otherwise, where
ωm
h (A) ≜ Q
μ∈(Mh\{m})\A(1 − rμ
h) Q
μ∈A rμ
h , (48)
is a set function, c.f. [30, p. 454]. In practice, the number of other objects with high existence probability that are likely to occlude the object with mark m can be expected to be rather small. Therefore, the summation in (47) often involves many insignificant terms. Next, we propose a reduction and efficient approximation of the integral (47).
1. Simplification of the Hypothesis h
First, reduce the set Mh by discarding Bernoulli components with insignificant existence probabilities. Further reduction can be based on the following axiom.
AXIOM 1 (OBJECTS OCCLUDE INDIVIDUALLY): PoD is a locally integrable function satisfying the implication
PD x,{o} =PD(x, ∅) ⇒ PD x, O∪{o} =PD(x,O), (49)
for any x, o∈X and any finite O⊂X . In essence, if an object o does not influence the PoD of the object x (i.e., does not occlude x) on its own, then it never will, regardless of the presence of any other object.
COROLLARY 1 Let x and o be random variables on X with continuous (spatial) density functions, then
Ex,o PD x,{o} =Ex PD(x, ∅)
⇒ Ex,o PD x, O∪{o} =Ex PD(x,O) , (50)
for any finite O⊂X , where X is further assumed to be directionally limited1 [60, p. 7]. In words, if an object
1This geometric assumption is key to the Lebesgue differentiation theorem used in the proof. Spaces like Rn satisfy this condition automatically.
o does not affect the integral of the PoD of x itself, it will not do so in the presence of other objects either. The proof is given in Appendix C.
It follows that one can discard μ∈Mh, for which
Ex,o PD (x, m),{(o, μ)} ≈ Ex PD((x, m), ∅)
| {z }
≜P ∅
D (m,h)
, (51)
where the densities used to compute the expectations are taken from the hypothesis h. Both the left and right-hand sides of (51) can be implemented using Monte Carlo (MC) integration. From an implementation perspective, the MC samples should be stored for future reference. Finally, we approximate existence probabilities that can be considered high enough by one, so that any combinationset A in (47) excluding the corresponding marks leads to negligible ωm
h (A) (48). Note that this simplification can be computed in a track-oriented manner. That is, for each local hypothesis corresponding to the mark m, one can go through local hypotheses of other objects included in the same global hypothesis. The simplification for the given m is likely to be the same among many global hypotheses, eventually leading to the same approximation of (47) for them. For the next approximation step, it would be generally possible to employ the K-shortest path algorithm us-
ed in the early implementations of the GLMB filter [51]. However, only a small number of other Bernoullies in the set Mh\{m} are likely to remain for consideration after the simplification IV.B.1. Therefore, we find the following exhaustive computation readily suited.
2. Approximation of Eq. (47) Directly Denote with M c
h⊂Mh\{m} the subset of certain marks for which existence probabilities are equal to one, and denote its cardinality with nc=|M c
h|. Similarly,
denote with M u
h =Mh\{m}\M c
h the set of uncertain
marks, and denote its cardinality with nu=|M u
h |. For
each n=nc, nc+1, . . . , nc+nu compute the terms of the outmost sum in (47) as follows. First, generate directly the subsets (i.e., combinations) Au⊆M u
h , with |Au|=ν for
each ν=0, . . . , nu, such that A=Au∪M c
h. For each such A, approximate the corresponding (n+1)-way integral in (47) with, e.g., the MC integration.
C. Summary of the Proposed Strategy
The proposed filter utilizes the following strategy to deal with occlusions. To distinguish it from the ESO strategy (Section II.C), it is termed as the PRO strategy:
P : Palm condition the prior distribution of states, R: reduce the dependency within the SPO-D model by computing the EPD PD( · ), O: obey the SPO model parameterized with the computed PD( · ) to achieve tractable filtering recursion.
The proposed filter will be referred to as MBM-PRO. Analogically, if the ESO strategy (Section II.C) is applied
:7

instead, the algorithm will be referred to as MBM-ESO. While occlusions can occur in various domains, visual MOT is chosen to evaluate the proposed strategy.
V. Application to Visual MOT
In [61], an SPO model for pedestrian MOT using a monocular camera was developed with parameters obtained by identification and physical modeling. The MOT-17 dataset [62], [63] was considered, and the Faster R-CNN (FRCNN) bounding box (BB) detections included in the dataset were used for the identification. Pedestrians were modeled in 3D with the state at time step k defined as [64]
xk = [xk x ̇ k yk y ̇k zk z ̇k ωk hk]⊤, (52)
with the position xk, yk, zk of the lower-bottom center of the box and the width ωk and height hk expressed in meters, while the velocities x ̇ k, y ̇k, z ̇k in meters per second. Geometric illustration of the measurement and the state quantities is given in Fig. 1. For details, please refer to [64]. The fifth state-vector element [xk]5=zk will be called depth in the sequel.
C
z
yx
//
//
//
//


x ̇ k y ̇k z ̇k


hk
BB(xk) ωk


xk yk zk


Fig. 1. Illustration of the pedestrian state xk (52) in red. The image plane is depicted in turquoise, and C is the camera center.
The SPO model [61] involves the constant PD=0.529, that was estimated from the entire MOT-17 training dataset.
Fig. 2. PoD as a function of visibility ratio.
An apparent model–data mismatch was revealed in [61] by computing an estimate PD(v) of the PoD conditionally on the visibility ratio v∈[0, 1], where v is available in ground-truth (GT) data [62, Table 5]. The resulting PD(v) curve is far from being constant and is shown in Fig. 2. While heuristic models for such dependency exist [41]–[43], the function PD(v) (Fig. 2) estimated from data is used in this paper. The visibility ratio v was discussed in [62] rather briefly. In this paper, the ratio v i-
s modeled without any reference to ground plane, c.f. [62, Sec. 2.5]. In particular, a definition similar to [42, Sec. 4.2] (c.f. [17]) is used as
v(xk, Ok) = Area BB(xk)\ ∪ok∈φ(Ok,xk) BB(ok)
Area BB(xk) , (53)
where the function BB( · )⊂R2 yields the bounding box corresponding to the state as illustrated in Fig. 3, and
φ(Ok, xk)={ok∈Ok : [ok]5<zmax, [ok]5<[xk]5−κ} (54)
is the subset of other objects that are considered eligible to occlude xk. The condition [ok]5<zmax means that occlusions by objects that appear further than zmax=15
BB(xk) \ ∪ok∈φ(Ok,xk)BB(ok)
xk
o1
k o3
k
o2
k
Ok = {o1
k, o2
k, o3
k}
BB(xk )
MOT17-04 frame 212
φ(Ok, xk) = {o1
k, o3
k}
Fig. 3. Graphical illustration of sets whose area is computed in (53).
meters are ignored due to limited depth estimation accuracy for distant objects. The condition [ok]5<[xk]5−∆ means that occlusions by objects that are in front of xk but too close in z-coordinate are ignored to ensure physical validity of occlusion. Here, the κ= 0.85
2 meters was set to half of a mean BB width [61]. Assuming the PoD depends on pedestrians via the visibility ratio only, it follows that
PD(xk, Ok) = PD v(xk, Ok) , (55)
where PD( · ) on the right-hand side is PD(v) (Fig. 2).
In this paper, the SPO model [61] is adopted together with the approximate GM implementation as in [61]. However, the methods developed in this paper rely on the assumption that the birth density is MB, which is adopted based on [61, Sec. II.C.1]. A suitable MB is also used as the initial density. Note that FRCNN detections were used as the measurements. For each time step, estimates are drawn for simplicity using the sub-optimal Estimator 1 [54, Sec. VI.A] with a non-informative threshold of 0.5 -
for existence probabilities. Since only 2D GT data are available, estimates are further projected into 2D for evaluation, which is achieved using the Unscented transform as in [64, Sec. IV]. Ellipsoidal gating was used with a threshold of 6. The number of global hypotheses was capped at 100, with a pruning threshold of -300 for log-weights. For hypothesis h, the Murty’s M -best assignments algorithm was used with M =⌈wh · 10⌉ [51], [54].
A. Performance Evaluation Metric
To evaluate the estimates, CV scores such as multiple object tracking accuracy (MOTA), higher order tracking accuracy (HOTA), and identity F1 (IDF1) are often considered in the CV literature [62], [65]. However, the CV scores may behave undesirably [66], [67] and hardly allow for performance evaluation based on user preferences. Therefore, we employ the trajectory generalized suboptimal assignment (TGOSPA) metric [68], which includes several parameters: (i) metric d(x, y) between GT BB x and an es-
timated BB y, (ii) power parameter p≥1, (iii) cutoff c>0 that is the maximum possible distance for x and y to be assigned to each other, and (iv) switching penalty γ>0. The parameters allow the TGOSPA metric to be tailored for applications such as online surveillance or offline scene understanding [67].
8 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

The TGOSPA metric value can be decomposed into errors E resulting from (i: ETP) properly estimated objects, i.e., true positives (TP), (ii: EFN) missed objects, i.e., false negatives (FN), (iii: EFP) false objects, i.e., false positives (FP), and (iv: ESw) properly defined track switches (Sw). Informally, the TGOSPA metric is given by
d(c,γ)
p (X, Y) = min“over assignments between trajectories” (56)
P
(x,y)∈TP d(x, y)p
| {z } ETP
+ cp
2 |FN|
| {z } EFN
+ cp
2 |FP|
| {z } EFP
+ γpSw
| {z } ESw
1/p
,
where X and Y are sets of GT and estimated trajectories, respectively, the symbol | · | denotes the cardinality and Sw counts changes within the assignments as
Sw = PK
k=1
P|X|
i=1 s(assignmenti
k−1, assignmenti
k)
| {z }
≜

  
  
0 if assignmenti
k−1 = assignmenti
k, 1 if 0 ̸= assignmenti
k−1 ̸= assignmenti
k−1 ̸= 0 , 1
2 otherwise,
(57)
where assignmenti
k is the index j∈{0, 1, . . . , |Y |} to which the i-th GT trajectory is assigned to at time step k with 0 meaning it is left unassigned. Note that all of TP, FP, and FN depend on the assignments as well. See [68] for a precise definition and approximate computation of (56). The desired meaning and impact of the diffident terms in (56) vary among applications. In the following, the guidelines presented in [67] are used to select d, p, c and γ concisely. The terms ETP, EFN and EFP are further decom-
posed to better assess performance under occlusions.
1. TGOSPA Metric For Assessing Occlusions
The function d(x, y) = 1−IoU(x, y) with IoU being the intersection over union was proven to be a metric in [67] and it is adopted in this paper. The maximum possible cut-off c=1 is used, allowing any two BBs to be assigned as long as they have a nonempty intersection. The power parameter p=2.41 is selected according to [67, Eq. (32)] so that estimates with error 0.75= c
p√2 in d or
larger are better to be omitted. That is, tracking algorithms are encouraged to output even very distant predictive estimates with errors up to 0.75 in the metric d. Since p>1, the EFP and EFN can be expected to have the largest influence to the final metric value, compared to ETP and Sw. The switching penalty γ=2.60 is set according to [67, Eq. (32)] so that switches Sw encapsulate longterm track changes that last for at least 10 time steps2 (see [67, Sec. 4.4.2]). Such choice of γ favors TP pair-
s that correspond to the same trajectories over pairs with the smallest error for a given time step. Tracking algorithms are thus encouraged to form trajectories without fragments, such as those caused by occlusions. The visibility ratio is available for each GT BB x in the MOT-17 dataset, further denoted as vx. The error ETP
2The videos considered in this paper were captured with 30 frames per second, i.e., 10 time steps correspond to 0.33 seconds of a video.
can thus be decomposed as
ETP = P
(x,y)∈TP(1−vx + vx)d(x, y)p
=
P
(x,y)∈TP(1−vx)d(x, y)p
| {z }
Eo
TP
+
P
(x,y)∈TP vxd(x, y)p
| {z }
Ev
TP
,
(58)
where Eo
TP and Ev
TP are the portions of ETP corresponding to cases when the GT BBs were occluded and visible, respectively. Furthermore,
|TP| = P
(x,y)∈TP(1−vx)
| {z }
No
TP
+
P
(x,y)∈TP vx
| {z }
Nv
TP
, (59)
where No
TP and Nv
TP correspond to occluded and visible BBs, respectively. The error EFN can be decomposed as
EFN =
Eo
FN
z }| {
cp 2
P
x∈FN(1−vx)
| {z }
No
FN
+
Ev
FN
z }| {
cp 2
P
x∈FN vx
| {z }
Nv
FN
(60)
where Eo
FN and Ev
FN are the parts of EFN for the cases when missed GT BBs were occluded or visible, respectively.
B. Results and Discussion
To analyze the performance in challenging real scenarios, the scenarios should obey the assumed SPO-D model. In particular, the camera must be static, and occlusions should be present. We thus selected MO17-02, MOT17-04, and MOT17-09 videos from the MOT-17 dataset. Performance is evaluated for the MBM filter with (i) the proposed PRO and (ii) the existing ESO ( [41]–[43], see Section II.C) occlusion-handling strategies that both utilize PD(xk, Ok) (55), and also for (iii) the “basic” MBM filter wi-
th constant PD=0.529 as a reference. Additionally, (iv) the SORT [69] and (v) FasterTracker [9] algorithms were considered as representatives of CV-based algorithms. The SORT algorithm processes FRCNN detections without using video images directly, similarly to the MBM filters, and it is evaluated for a fair comparison with CV-based algorithms. The FastTracker algorithm is evaluated as a representative of re-ID-based strategies. It processes both the video images and the FRCNN detections and domin-
ates the MOT-17 Public leader board3. The results for MOT17-02, MOT17-04 and MOT17-09 videos are given in Tables I, II and III, respectively. As expected, FastTracker performs best in all the considered metrics and videos. The algorithm ranking based on CV scores is difficult to justify clearly and is included for completeness. In the TGOSPA metric, the performance of the filters is comparable to that of SORT, among which the MBM-PRO is the best. Detailed observations and discussions follow.
OBSERVATION 1 (MORE INFORMATIVE POD MODEL ENHANCES MEASUREMENT-TO-TRACK ASSOCIATIONS): Both MBM-PRO and MBM-ESO mostly have a higher number |TP| compared to the basic MBM in all videos.
3motchallenge.net/results/MOT17/
:9

TABLE I Results for MOT17-02 Video
CV scores (↑) TGOSPA metric (↓) and its decomposition Hz (↑)
MOTA HOTA IDF1 d(c,γ)
p ETP
|TP|
Eo
TP
No
TP
Ev
TP
Nv
TP
EFN |FN|
Eo
FN
No
FN
Ev
FN
Nv
FN
EFP |FP|
ESw
Sw fpps
MBM-PRO 0.287 0.298 0.348 39.96 700.71
7320
512.8 2007.3
187.9 5312.7
5630.5 11261
4531.1 9062.2
1099.4 2198.8
457 914
440
44 0.59
MBM-ESO 0.265 0.313 0.362 40.58 466.2
6119
369.6 1437.4
96.6 4681.6
6231 12462
4816.1 9632.2
1414.9 2829.8
517.5 1035
285
28.5 0.68
MBM 0.279 0.316 0.347 40.09 291.6
5751
158.9 1007.1
132.7 4743.9
6415 12830
5031.2 10062
1383.8 2767.5
246.5 493
330
33 1.05
SORT 0.320 0.313 0.364 40.15 315.9
6521
159.6 834.4
156.2 5686.6
6030 12060
5117.6 10235
912.4 1824.8
538 1076
425
42.5 
FastTracker 0.827 0.581 0.679 24.77 620.2
17175
539.7 9778.7
80.5 7396.3
703.0 1406
645.4 1290.8
57.6 115.2
265.5 531
695.0
69.5 
TABLE II Results for MOT17-04 Video
CV scores (↑) TGOSPA metric (↓) and its decomposition Hz (↑)
MOTA HOTA IDF1 d(c,γ)
p ETP
|TP|
Eo
TP
No
TP
Ev
TP
Nv
TP
EFN |FN|
Eo
FN
No
FN
Ev
FN
Nv
FN
EFP |FP|
ESw
Sw fpps
MBM-PRO 0.536 0.486 0.561 50.31 836.0
26803
416.9 4137.1
419.1 22665.9
10377.0 20754
7022.0 14044.1
3355.0 6709.9
784.5 1569
590.0
59.0 0.24
MBM-ESO 0.514 0.479 0.556 51.20 446.2
25397
165.4 3541.2
280.8 21855.8
11080.0 22160
7320.0 14640.0
3760.0 7520.0
1007.5 2015
600.0
60.0 0.15
MBM 0.506 0.466 0.536 51.46 863.4
25399
406.6 3801.2
456.8 21597.8
11079.0 22158
7190.0 14380.0
3889.0 7778.0
699.0 1398
655.0
65.5 0.47
SORT 0.540 0.498 0.564 50.39 290.9
26084
102.9 3409.4
187.9 22674.6
10736.5 21473
7385.9 14771.8
3350.6 6701.2
913.5 1827
695
69.5 
FastTracker 0.988 0.887 0.968 14.19 209.8
47273
108.7 17939.7
101.1 29333.3
142.0 284
120.7 241.5
21.3 42.5
150.0 300
95
9.5 
TABLE III Results for MOT17-09 Video
CV scores (↑) TGOSPA metric (↓) and its decomposition Hz (↑)
MOTA HOTA IDF1 d(c,γ)
p ETP
|TP|
Eo
TP
No
TP
Ev
TP
Nv
TP
EFN |FN|
Eo
FN
No
FN
Ev
FN
Nv
FN
EFP |FP|
ESw
Sw fpps
MBM-PRO 0.574 0.465 0.542 19.35 138.2
3503
103.2 723.1
35.0 2779.9
911.0 1822
741.7 1483.4
169.3 338.6
34.5 69
175
17.5 0.41
MBM-ESO 0.536 0.505 0.596 19.71 140.6
3318
109.2 646.6
31.3 2671.4
1003.5 2007
779.9 1559.9
223.6 447.1
33.0 66
140
14 0.47
MBM 0.559 0.445 0.515 20.00 47.5
3055
25.1 388.0
22.5 2667.0
1135.0 2270
909.2 1818.5
225.8 451.5
21.5 43
160
16 0.45
SORT 0.530 0.437 0.501 20.69 25.4
2840
7.9 221.1
17.5 2618.9
1242.5 2485
992.7 1985.4
249.8 499.6
22.0 44
190
19 
FastTracker 0.915 0.614 0.690 12.78 143.4
5173
105.4 2082.6
38.1 3090.4
76.0 152
61.9 123.9
14.1 28.1
49.5 99
195
19.5 
When pedestrians are visible, the occlusion-handling strategies assign considerably higher EPoD to marks compared to PD=0.529 used otherwise. Measurement-to-track associations are thus more likely for the MBM-PRO and MBM-ESO compared to the basic MBM.
OBSERVATION 2 (PRO AND ESO COMPUTATIONAL COMPLEXITIES ARE HARDLY PREDICTABLE): The algorithms’ computational complexity was measured in frames processed per second (fpps), which is denoted with Hz in the MOT-17 website4. Since EPoD for visible pedestrians are considerably higher when using either occlusion-handling strategy, the discrepancy among different measurementto-track associations is larger. This may lead to better computational efficiency for a small number of objects, such as for MBM-ESO-
 in MOT17-09. For a larger number of objects, however, the computational demand is likely to be larger when using either PRO or ESO. It should
4The values for SORT and FastTracker of 143.3 Hz and 355.1 Hz, respectively, are reported by the website motchallenge.net/results/MOT17. The values were provided by the algorithms’ authors for the entire dataset and not officially evaluated by the MOTChallenge.
be noted that non-optimized implementations of MBMPRO, MBM-ESO, and the MBM filters was run in R2025b version of Matlab® software on an Apple M1 Pro laptop.
OBSERVATION 3 (PRO INCREASES TRACKING PERFORMANCE FOR VISIBLE PEDESTRIANS OVER ESO): The MBM-PRO tracks a larger number Nv
TP of visible pedes
trians with a similar error Ev
TP as MBM-ESO and MBM, and also as SORT except for MOT17-02 video.
OBSERVATION 4 (ESO PRESERVES TRACKING PERFORMANCE FOR VISIBLE PEDESTRIANS): The MBM-ESO tracks a similar or smaller number Nv
TP of visible pedes
trians with a similar or smaller error Ev
TP compared to MBM-PRO and MBM. The latter indicates that MBM-ESO provides less outliers.
OBSERVATION 5 (PRO HANDLES MORE OCCLUSIONS THAN ESO): Among the properly tracked objects, MBM-PRO tracks more occluded pedestrians than MBM-ESO in all videos. This follows since the ratios No
TP/|TP| are higher for MBM-PRO compared to MBM-ESO: in MOT17-02 we have 0.274>0.235, in MOT17-04 it is 0.154>0.139, and in MOT17-09 it is 0.206>0.195.
10 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

OBSERVATION 6 (PRO MISSES LESS PEDESTRIANS): MBM-PRO has less |FN|, No
FN and also Nv
FN than MBM-ESO and MBM in all the videos. That is, MBM-PRO misses less pedestrians under any of the considered circumstances compared to the other filters. Furthermore, MBM-PRO mitigates Nv
FN over SORT in MOT17-09, has
nearly the same Nv
FN as SORT in MOT17-04, however, it
has larger Nv
FN than SORT in MOT17-02. Nevertheless, MBM-PRO misses less occluded pedestrians then SORT as it has fewer No
FN, and also in total |FN|.
OBSERVATION 7 (ESO MAY FAIL HANDLING OCCLUSIONS): In MOT17-04, MBM-ESO provides the least number No
TP of occluded pedestrians. At the same time, it has the largest |FP|. That is, the use of the ESO strategy to handle occlusions may lead to reduced performance.
OBSERVATION 8 (MORE ESTIMATES LEADS TO MORE FALSE POSITIVES): MBM-PRO and MBM-ESO have more overall number |TP|+|FP| of estimates than MBM. While both MBM-PRO and MBM-ESO usually have more TPs (Observation 1), they also have more FPs relative to MBM. In either PRO or ESO strategy, high existence probabilities of occluded Bernoullies last longer and yield distant predictive estimates. Whenever such estimates are not assigned to GTs in TGOSPA minimization, they get counted as FPs. This issue is pres-
ent in FastTracker as well, especially in MOT17-04, where the error EFP=150 is only slightly lower than ETP=209.8, and it has higher influence on the metric value compared to EFN and ESw.
OBSERVATION 9 (HANDLING OCCLUSIONS ̸= HANDLING SWITCHES): Although a switch may have several graphical explanations [67], at least one Sw appears whenever a GT pedestrian is successively successfully tracked by two different trajectories (their fragments) for at least 10 frames by each trajectory. It turns out that the algorithms get rewarded more for successfully estimating occluded objects than they get penalized for an occasional switch. Note that if γ was set even larger, such track fragments -
may fail to be counted as Sw [67]. Although FastTracker handles occlusions, it has the largest number of switches in MOT17-02 (and also in MOT17-09). Furthermore, the largest TGOSPA error term for FastTracker in MOT17-09 is the ESw. Except for MOT17-04, MBM-PRO has more switches than MBM-ESO. Nevertheless, the filters mostly have fewer switches than SORT.
OBSERVATION 10 (MODEL-BASED APPROACH CAN BEAT AD-HOD-BASED METHODS): Utilizing the same input data, the MBM-PRO beats SORT in all the videos by improving the performance of the basic MBM. That is, the use of a more realistic model led to better results. However, algorithms such as FastTracker will be hard to outperform since they process considerably larger amount of information (entire images). It should be noted that such ad-hoc-based algorithms are usually unable to reliably quantify their esti-
mation errors, e.g., in probabilistic terms, since they do not utilize probabilistic models which may be problematic for safety-critical applications.
The experiment indicated that the proposed occlusion-handling strategy PRO improves tracking performance not only under occlusion, but also for visible pedestrians, and that it also mitigates false negatives. The strategy, however, provides more false positives and switches. On the other hand, this effect also appears in advanced ad-hoc-based algorithms processing not only BB detections such as the FastTracker. The proposed strategy thus appears promising for dealing with occlusions in practice.
VI. Conclusion
This paper focused on multi-object tracking problems where occlusions among objects may arise. A principled approximation was proposed, leading to a straightforward and fully model-based strategy for handling occlusions. The essence of the strategy is the calculation of the conditional expectation related to detection probability. As the solution necessitates marked state densities to be proven optimal, the paper investigated the implementation of filters using multi-Bernoulli mixtures with distin-
ct marks. The application of visual tracking demonstrated that the proposed strategy outperformed others. Future work could focus on incorporating Poisson birth or addressing implementation for unmarked objects.
Appendix A Rigorous Palm Conditioning
A point process could be understood as a collection of points drawn at random. When the number of points is locally finite and they do not coincide, the point process can be represented as an RFS. However, counting measure representation is most common in the literature discussing Palm conditioning, see [47, Ch. 13, Ch. 15.5], [48, Sec. 3.2] for details. In this appendix, the counting measure treatment is employed to incorporate Palm conditioning into FISST, i.e., the theory used in this paper.
A. Preliminaries
In general [30], the underlying spaces X and Z can be assumed locally compact, second countable, and Hausdorff (LCSCH) topological spaces. With such an assumption, one can rigorously tackle applications involving more general spaces than Rn [30, Chapter 18]. For instance, objects may move on a manifold, such as on a globe, or objects that live in state spaces of different dimensions may coexist. LCSCH spaces are Polish [70, p. 13 and 29], i.e., any LCSCH space can be turned into a complete separab-
le metric (CSM) space. A metric on the underlying state space is usually needed to measure the performance of tracking algorithms5 [68]. Therefore, being CSM seems as the convenient assumption for X and Z.
5The metric must be chosen such that the space is CSM in that metric. Being Polish, such a metric is guaranteed to exist for a LCSCH space. If X =Rn, any metric on Rn, including the cut-off metric, can be used.
: 11

The Dirac measure centered at x∈X , denoted with δx is the set function, such that δx(B)=1 if x∈B⊂X and zero otherwise. The counting measure NΞ associated with Ξ⊂X is a set function that simply counts the number of points of Ξ within B, i.e.,
NΞ(B) = P
x∈X δx(B) = |Ξ ∩ B| . (61)
Let (X, S, PΞ) be the probability space corresponding to the RFS Ξ. Briefly, the set X= ⊎n≥0 X (n) is the space such that Ξ∈X, where B(n) is the set of all subsets of the closed set B⊆X containing n elements and B(0)={∅} is the empty configuration. The set S is a convenient sigma-algebra on X (see [29, Appendix F], [71, Ch. 4]) and PΞ is the probability measure. To give the RPD, the following definitions are needed. The first moment measure DΞ is defined as
DΞ(B) = E [ NΞ(B) ] , (62)
where E [ · ] is the expectation operator. The first moment measure of any RFS must be absolutely continuous with respect to (w.r.t.) some reference measure, otherwise it fails to form a locally finite set [72, p. 138], thus
DΞ(B) = R
B DΞ(x) dx , (63)
where DΞ(x) is the PHD (18) of the RFS Ξ. The same holds true for the so-called Janossy densities [72, p.136],
which are in the FISST literature defined via set derivatives
δ
δX [71, Ch. 4] as
pΞ(X) = δβΞ( · )
δX , βΞ(G) = PΞ ⊎n≥0 G(n) , (64)
where βΞ(G) is the belief mass function evaluated at the closed set G⊆X and pΞ({x1, . . . , xn}) is the n-th order Janossy density aka the FISST density function. Probabilities thus can be computed as [29, p. 714]
PΞ(S) = R
χ−1(S∩X (|X|)) pΞ(X)δX , (65)
where χ is the mapping from vectors to sets defined as χ([x1, . . . , xn]⊤) = {x1, . . . , xn}.
The Campbell measure CΞ corresponding to Ξ is the measure on X × X satisfying (cf. [47, pp. 270-271])
CΞ(B × S) = E [ NΞ(B) · 1S ] (66a)
=
R
χ−1(S∩X (|X|)) |X ∩ B| pΞ(X)δX , (66b)
for each measurable B⊆X and each event S∈S, where 1S is the indicator random variable of the event S∈S.
B. Palm Conditioning within FISST
The Palm distribution PΞ|x∈Ξ is defined as the Radon–Nikody ́m derivative of the Campbell measure in the first argument w.r.t the first moment measure DΞ (62). Since DΞ (62) is absolutely continuous, it follows that for any fixed event S∈S,
CΞ(B × S) = R
B PΞ|x∈Ξ(S|x)DΞ(x) dx , (67)
which can be understood as the disintegration of CΞ w.r.t. the first component. Note that PΞ|x∈Ξ(S|x) is a probability measure in S and a function in x. Its density can be defined using several methods. In the point process
literature, it is common to take the Radon–Nikod ́ym derivative of PΞ|x∈Ξ( · |x) w.r.t. the unit-rate Poisson point process [47, Ch. 10.4]. In FISST, however, belief mass functions are used instead. For a fixed measurable B⊆X define
βC,Ξ(G; B) ≜ CΞ B × (∪n≥0G(n)) (68a)
=
R
B PΞ|x∈Ξ (∪n≥0G(n))|x
| {z }
≜βΞ|x∈Ξ (G|x)
DΞ(x) dx , (68b)
where βC,Ξ is the belief mass function corresponding to CΞ in the second argument and βΞ|x∈Ξ is the belief mass function corresponding to PΞ|x∈Ξ with x fixed. Note that βC,Ξ(G; B) (68a) can be used instead of CΞ(B × S) thanks to the Choquet theorem, see [29, p. 713], [71, Ch.3]. Assuming it exists, the set derivative of βC,Ξ(G; B) (68a) where B is still fixed is denoted with
pC,Ξ(X ; B) ≜ δβC,Ξ( · ;B)
δX = R
B
δβΞ|x∈Ξ( · |x) δX
| {z }
≜pΞ|x∈Ξ (X |x)
DΞ(x) dx ,
(69)
where X⊂X is a finite set such that x∈X and x∈B, while pΞ|x∈Ξ is the FISST density corresponding to βΞ|x∈Ξ, i.e., the Palm density. Substituting X=O∪{x} into (69) yields
pC,Ξ(O∪{x}; B) = R
B pΞ|x∈Ξ(O∪{x}|x)
| {z }
≜pΘ|x∈Ξ (O|x)
DΞ(x)dx,
(70)
where the function O 7→ pΞ|x∈Ξ(O∪{x}|x) for a given x is defined as the desired reduced Palm density (RPD), i.e.,
pΘ|x∈Ξ(O|x) ≜ pΞ|x∈Ξ(O∪{x}|x) , (71)
with Θ=Ξ\{x} being the RFS of points in Ξ besides x. The relation (17) suitable for practical computation of RPD remains to be established. Employing (66b) directly, an alternative form of (68a) involves the FISST density,
βC,Ξ(G; B) = R
G
P
x∈X δx(B) pΞ(X) δX (72a)
=
R
B
R
G pΞ(X ∪ {x}) δX dx, (72b)
where the representation (61) was used and the last two equations follow as a simple generalization of the proof of [73, Theorem 2], i.e., a straightforward extension of [29, Eq. (4.74)] from Dirac “functions” to measures. Using the fundamental theorem of multi-object calculus [71, pp. 159-161], the set derivative (69) of βC,Ξ(G; B) (72b) thus also equals to
pC,Ξ(X ; B) = δβC,Ξ( · ;B)
δX = R
B pΞ(X ∪ {x})dx , (73)
provided that pΞ(X)<M for some large M ∈R+ for all X∈X using the Lebesgue dominated convergence theorem. Substituting X=O∪{x} into (73) and using (70) yields
R
B pΞ(O∪{x}) dx = R
B pΘ|x∈Ξ(O|x) DΞ(x) dx , (74)
which must hold for any measurable B⊆X and thus the integrands must be equal almost everywhere (provided that X is directionally limited [60, p. 7] using the Lebesgue differentiation theorem). Assuming the densities are continuous, the integrands are equal everywhere in X , thus
pΞ(O∪{x}) = pΘ|x∈Ξ(O|x) DΞ(x) , (75)
for any x∈X . Dividing both sides by DΞ(x), while assuming it is nonzero, yields the desired relation (17).
12 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

Appendix B Proof of Proposition 1 and Its Special Case
The proof of Proposition 1 uses the following Lemma, c.f. [48, p.48], [47, p. 512].
LEMMA 1 (CAMPBELL-MECKE FORMULA FOR RFSS): Let a function f : X ×X→R+ be measurable w.r.t. the Campbell measure. Let Ξ be an RFS on X with a density pΞ(X) and PHD DΞ(x). Then
EΞ
P
x∈Ξf (x, Ξ\{x}) = R EΘ|x f (x, Θ) DΞ(x)dx. (76)
PROOF: Directly,
EΞ
P
x∈Ξf (x, Ξ\{x}) =R P
x∈X f (x, X\{x})pΞ(X)δX
=
P∞ n=0
1 n!
Pn i=1
R R ···R R ···R
f (xi, {x1, . . . , xi−1, xi+1, . . . , xn})×
pΞ({x1, . . . , xi−1, xi+1, . . . , xn} ∪ {xi})×
dx1 · · · dxi−1dxi+1 · · · dxndxi . (77a)
For each n, the integrals for i=1, . . . , n are the same. Noting that the summand for n=0 can be neglected,
EΞ
P
x∈Ξf (x, Ξ\{x})
=
R P+∞ n=1
n n!
R · · · R f (x, {o1, . . . , on−1})×
pΞ({o1, . . . , on−1} ∪ {x})do1 · · · don−1 · dx (78a)
=
R P+∞ m=0
1 m!
R · · · R f (x, {o1, . . . , om})×
pΞ({o1, . . . , om} ∪ {x})
| {z }
pΘ|x ({o1 ,...,om }|x)DΞ (x)
do1 · · · dom · dx (78b)
=
R R f (x, O)pΘ|x(O|x)δO DΞ(x)dx , (78c)
using substitution m=n−1 and the RPD (17). □
COROLLARY 2 If the space X is a joint space with marks X =X S×M and the RFS Ξ is a marked RFS on X S with marks in M, then (76) from Lemma 1 becomes
EΞ
P
x∈Ξ f (x, Ξ\{x}) (79)
=
P
m∈M EΘ,x|( · ,m) f (x, m), Θ · D(m) ,
where the inner expectation is a function of m, computed over the density pΘ|x O|(x, m) ·D(x|m) for each m fixed, and the PHD of Ξ is DΞ(x, m) = D(x|m)·D(m), see (37).
PROOF OF PROPOSITION 1: First, from the structure of Q (32), the optimal parameter can be established as
P∗ = arg min
P : X →[0,1]
DKL p ∥ qP . (80)
Given the definitions of p( · ) (30) and q( · , P) (31), notice that the KLD in (80) can be written as
DKL p ∥ qP =EXk
h
EZk |Xk
h
log pA-SPO-Dk (Zk|Xk)
pA-SPOk (Zk|Xk, P)
ii
. (81)
The following adjustments of the inner expectation follow the classic proof [74, p. 277]. We have that
EZk |Xk
h
log pA-SPO-Dk (Zk|Xk)
pA-SPOk (Zk|Xk, P)
i
= (82)
EZk |Xk
h
log pA-SPO-Dk (Zk|Xk)
pA-SPOk (Zk|Xk, Pg)
i
+ EZk|Xk
h
log pA-SPOk (Zk|Xk, Pg)
pA-SPOk (Zk|Xk, P)
i
,
where the guessed Pg(xk)=EOk|xk [ PD(xk, Ok) ] is to be
proven to be the optimal P∗. The first term on the righthand-side of (82) does not depend on P and since KLD is nonnegative, it can be neglected. Using the product form of the auxiliary SPO measurement likelihood (28),
EZk |Xk
h
log pA-SPOk (Zk|Xk, Pg)
pA-SPOk (Zk|Xk, P)
i
= EZk|Xk
h
log pCk (Z0)
pCk (Z0)
i
+
EZk |Xk
h P
xk∈Xk log pD(xk)(ZL(xk)|xk,Pg )
pD(xk)(ZL(xk)|xk,P )
i
. (83)
The DKL p ∥ qP in (80) thus can be substituted with
∆=EXk
h P
xk∈Xk EZk|Xk
h
log pD(xk)(ZL(xk)|xk,Pg )
pD(xk)(ZL(xk)|xk,P )
ii
. (84)
Note that the measurements ZL(xk) given Xk are Bernoulli distributed. Using [30, Eq. (3.53)], the inner expectation
EZk |Xk
h
log pD(xk)(ZL(xk)|xk,Pg )
pD(xk)(ZL(xk)|xk,P )
i
= (85)
1 − PD(xk, Xk\{xk}) log 1−Pg(xk)
1−P(xk) +
PD(xk, Xk\{xk}) R log Pg(xk)L(z|xk)
P(xk)L(z|xk) L(z|xk)dz .
Using Lemma 1, the shorthand variable ∆ (84) becomes
∆ = R EOk|xk PD(xk, Ok) log Pg(xk)
P(xk) × (86)
R L(z|xk)dz · DΞ(xk)dxk +
R EOk|xk 1−PD(xk, Ok) log 1−Pg(xk)
1−P(xk) DΞ(xk)dxk .
Since Pg(xk) = EOk|xk [ PD(xk, Ok) ], it follows that (86)
is zero if and only if P = Pg, and thus P∗ = Pg. □
COROLLARY 3 (SPECIAL CASE OF PROPOSITION 1): Assume that P is a function of only the mark in (80), i.e., P : M→[0, 1]. Take Pg(m) to be EOk,xk|( · ,m)[ PD (xk, m)), Ok ]. Using Corollary 2, the variable ∆ (84) can be adjusted further as
∆ = (87)
P
m∈MEOk,xk|(·,m) 1−PD (xk, m), Ok log 1−Pg(m)
1−P(m) D(m)
+
P
m∈MEOk,xk|(·,m) PD (xk, m), Ok log Pg(m)
P(m) D(m).
which is zero if and only if P(m) is equal to EOk,xk|( · ,m)[ PD (xk, m)), Ok ], i.e, P∗ = Pg. □
Appendix C Proof of Corollary 1
Corollary 1 is a special case of the following lemma.
LEMMA 2 Let px and po be given continuous probability densities on a directionally limited [60, p. 7] (complete and) separable metric space X , then the implication
R
A1
R
A2 PD(x,{o}) px(x)po(o) dxdo =
R
A1
R
A2 PD(x, ∅) px(x)po(o) dxdo (88a)
⇒
R
B1
R
B2 PD(x,O⊎{o}) px(x)po(o) dxdo =
R
B1
R
B2 PD(x,O) px(x)po(o) dxdo , (88b)
holds for all measurable A1, A2, B1, B2 ⊆ X .
PROOF: The integrand in (88a) is a product of integrable
: 13

functions by Axiom 1 and thus locally integrable. Since A1 and A2 are arbitrary measurable sets on X , open balls can be taken in the Lebesgue differentiation theorem6 [60, pp. 3-7] to claim that the integrands in (88a) are equal almost everywhere in X ×X , i.e., for all Lebesgue points
PD(x,{o}) px(x)po(o) = PD(x, ∅) px(x)po(o) . (89)
Therefore, wherever px(x)̸=0 and po(o)̸=0, i.e., for almost all x∈supp(px) and o∈supp(po), we have also that PD(x,{o})=PD(x, ∅), with supp being the support. Thus by Axiom 1, we also have that PD(x, O⊎{o})=PD(x,O) for almost all x∈supp(px) and o∈supp(po). Since px(x) and po(o) are zero almost everywhere in the complements of supp(px) and supp(po), respectively, we have that
PD(x,O⊎{o}) px(x)po = PD(x,O) px(x)po(o) , (90)
almost everywhere in X . Integrating (90) on the prescribed B1 and B2 yields (88b) which concludes the proof. □
Corollary 1 results directly from Lemma 2 by setting A1=A2=B1=B2=X and noting that po(o) integrates to one on X . Note that if the densities are, e.g., Gaussian, the assumption (88a) can be satisfied only approximately.
REFERENCES
[1] B.-N. Vo, M. Mallick, Y. Bar-Shalom, S. Coraluppi, R. Osborne III, R. Mahler, and B.-T. Vo, Multitarget Tracking, pp. 1–15. Wiley Enc. of Electrical and Electronics Eng., 2015. [2] S. Blackman and R. Popoli, Design and Analysis of Modern Tracking Systems. Artech House, 1999. [3] A. Geiger, P. Lenz, and R. Urtasun, “Are we ready for autonomous driving? The KITTI vision benchmark suite,” in 2012 IEEE Conf. on Comp. Vision and Pattern Rec., pp. 3354–3361, 2012.
[4] M. Abbaspour and M. A. Masnadi-Shirazi, “Online multi-object tracking with δ-GLMB filter based on occlusion and identity switch handling,” Image and Vision Computing, vol. 127, p. 104553, 2022. [5] T. Rathnayake, A. Khodadadian Gostar, R. Hoseinnezhad, R. Tennakoon, and A. Bab-Hadiashar, “On-line visual tracking with occlusion handling,” Sensors, vol. 20, no. 3, 2020. [6] N. L. Baisa, “Occlusion-robust online multi-object visual tracking using a GM-PHD filter with CNN-based re-identification,”-
 Journal of Visual Commun. and Image Rep., vol. 80, p. 103279, 2021.
[7] A. Specker, D. Stadler, L. Florin, and J. Beyerer, “An occlusionaware multi-target multi-camera tracking system,” in 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), pp. 4168–4177, 2021. [8] N. Aharon, R. Orfaig, and B.-Z. Bobrovsky, “BoT-SORT: Robust associations multi-pedestrian tracking.” arXiv:2206.14651, 2022. [9] H. Hashempoor and Y. D. Hwang, “FastTracker: Real-time and accurate visual tracking,” arXiv:2508.14370, 2025. [10] Y. Zhang, P. Sun, Y. Jia-
ng, D. Yu, F. Weng, Z. Yuan, P. Luo, W. Liu, and X. Wang, “ByteTrack: Multi-object tracking by associating every detection box,” arXiv:2110.06864, 2021. [11] Z. Liu, X. Wang, C. Wang, W. Liu, and X. Bai, “SparseTrack: Multi-object tracking by performing scene decomposition based on pseudo-depth,” arXiv: 2306.05238, 2023. [12] K. G. Quach, H. Le, P. Nguyen, C. N. Duong, T. D. Bui, and K. Luu, “Depth perspective-aware multiple object tracking,” 2023.
6We use [60, Theorem 1.8] under [60, Remark 1.13] and [60, Example 1.15(f)]. For X =Rn, no further assumptions would be needed assuming the reference measure is Radon [60, Remark 1.13].
[13] S. A. Memon, H. Son, W.-G. Kim, A. M. Khan, M. Shahzad, and U. Khan, “Tracking multiple unmanned aerial vehicles through occlusion in low-altitude airspace,” Drones, vol. 7, no. 4, 2023. [14] D. Musicki, “Limits of linear multitarget tracking,” in 2005 7th International Conference on Information Fusion, vol. 1, p. 6, 2005. [15] B. Wu and R. Nevatia, “Tracking of multiple, partially occluded humans based on static body part detection,” in 2006 IEEE Conf. on Comp. Vis. and Patt. Rec., vol. 1, p-
p. 951–958, 2006.
[16] A. Ess, B. Leibe, K. Schindler, and L. van Gool, “Robust multiperson tracking from a mobile platform,” IEEE Trans. Pattern Anal. Mach. Intell., vol. 31, no. 10, pp. 1831–1846, 2009. [17] C. Wojek, S. Walk, S. Roth, K. Schindler, and B. Schiele, “Monocular visual scene understanding: Understanding multi-object traffic scenes,” IEEE Trans. Pattern Anal. Mach. Intell., vol. 35, no. 4, pp. 882–897, 2013. [18] Y. Ma and Q. Chen, “Depth assisted occlusion handling in video object tracking,” in Adva-
nces in Visual Computing, pp. 449–460, Springer Berlin Heidelberg, 2010. [19] A. O. Ercan, A. E. Gamal, and L. J. Guibas, “Object tracking in the presence of occlusions via a camera network,” in 2007 6th Int. Symp. on Inf. Proc. in Sens. Net., pp. 509–518, 2007.
[20] M. Yang, Y. Liu, L. Wen, Z. You, and S. Z. Li, “A probabilistic framework for multitarget tracking with mutual occlusions,” in 2014 IEEE Conf. Comp. Vis. Patt. Rec., pp. 1298–1305, 2014.
[21] K. Wyffels and M. Campbell, “Negative observations for multiple hypothesis tracking of dynamic extended objects,” in 2014 American Control Conference, pp. 642–647, 2014.
[22] K. Wyffels and M. Campbell, “Negative information for occlusion reasoning in dynamic extended multiobject tracking,” IEEE Transactions on Robotics, vol. 31, no. 2, pp. 425–442, 2015. [23] B. Yang and R. Yang, “Interactive particle filter with occlusion handling for multi-target tracking,” in 2015 12th Int. Conf. on Fuzzy Syst. and Knowledge Disc. (FSKD), pp. 1945–1949, 2015. [24] H.-N. Hu, Q.-Z. Cai, D. Wang, J. Lin, M. Sun, P. Kraehenbuehl, T. Darrell, and F. Yu, “Joint monocular 3d vehicle -
detection and tracking,” in 2019 IEEE/CVF Intern. Conf. on Comp. Vis. (ICCV), pp. 5389–5398, 2019. [25] S. Jovanoska, F. Govaers, R. Thom ̈a, and W. Koch, “Dynamic occlusion handling in the PHD filter for range-only tracking: Proof of concept,” in 2014 Sensor Data Fusion: Trends, Solutions, Applications (SDF), pp. 1–6, 2014.
[26] J.-F. Chen, C.-C. Wang, and C.-F. Chou, “Multiple target tracking in occlusion area with interacting object models in urban environments,” Robotics and Auton. Syst., vol. 103, pp. 68–82, 2018. [27] A. Andriyenko, S. Roth, and K. Schindler, “An analytical formulation of global occlusion reasoning for multi-target tracking,” in 2011 IEEE International Conference on Computer Vision Workshops (ICCV Workshops), pp. 1839–1846, 2011. [28] Y.-M. Song, K. Yoon, Y.-C. Yoon, K. C. Yow, and M. Jeon, “Onl-
ine multi-object tracking with GMPHD filter and occlusion group management,” IEEE Access, vol. 7, pp. 165103–165121, 2019. [29] R. P. S. Mahler, Statistical Multisource-Multitarget Information Fusion. Artech House, 2007.
[30] R. P. S. Mahler, Advances in Statistical Multisource-Multitarget Information Fusion. Artech House, 2014.
[31] R. Streit, R. B. Angle, and M. Efe, Analytic Combinatorics for Multiple Object Tracking. Springer Nature Switzerland AG, 2021. [32] D. Y. Kim, B.-N. Vo, B.-T. Vo, and M. Jeon, “A labeled random finite set online multi-object tracker for video data,” Pattern Recognition, vol. 90, pp. 377–389, 2019. [33] M. Beard, B.-T. Vo, and B.-N. Vo, “Bayesian multi-target tracking with merged measurements using labelled random finite sets,” IEEE Trans. on Signal Processing, vol. 63, no. 6, pp. 1433–1447, 2-
015. [34] D. E. Clark and J. Houssineau, “Faa di Bruno’s formula for Gateaux differentials and interacting stochastic population processes,” arXiv:1202.0264, 2012.
[35] T. Yang, Q. Pan, J. Li, and S. Li, “Real-time multiple objects tracking with occlusion handling in dynamic scenes,” in 2005 IEEE
14 IEEE TRANSACTIONS ON AEROSPACE AND ELECTRONIC SYSTEMS VOL. , No.

Computer Society Conference on Computer Vision and Pattern Recognition (CVPR’05), vol. 1, pp. 970–975 vol. 1, 2005. [36] A. Senior, A. Hampapur, Y.-L. Tian, L. Brown, S. Pankanti, and R. Bolle, “Appearance models for occlusion handling,” Image and Vision Computing, vol. 24, no. 11, pp. 1233–1243, 2006. [37] K. Granstrom, C. Lundquist, and O. Orguner, “Extended target tracking using a Gaussian-mixture PHD filter,” IEEE Trans. on Aerospace and Elec. Syst., vol. 48, no. 4, pp. 3268–3286, 2012. [38] -
M. Motro and J. Ghosh, “Measurement-wise occlusion in multiobject tracking,” in 2018 21st International Conference on Information Fusion (FUSION), pp. 2384–2391, 2018.
[39] S. Jovanoska, F. Govaers, R. Thom ̈a, and W. Koch, “Dynamicocclusion likelihood incorporation in a PHD filter based rangeonly tracking system,” in 2015 18th International Conference on Information Fusion (Fusion), pp. 1078–1084, 2015.
[40] L. Strand, J. Honer, and A. Knoll, “Modeling inter-vehicle occlusion scenarios in multi-camera traffic surveillance systems,” in 2023 26th Int. Conf. on Inf. Fus. (FUSION), pp. 1–8, 2023.
[41] J. Ong, B.-T. Vo, B.-N. Vo, D. Y. Kim, and S. Nordholm, “A Bayesian filter for multi-view 3D multi-object tracking with occlusion handling,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 44, no. 5, pp. 2246–2263, 2022. [42] L. V. Ma, T. T. D. Nguyen, B.-N. Vo, H. Jang, and M. Jeon, “Track initialization and re-identification for 3D multi-view multi-object tracking,” Information Fusion, vol. 111, p. 102496, 2024. [43] L. Van Ma, T. T. D. Nguyen, C. Shim, D. Y. Kim, N. Ha-
, and M. Jeon, “Visual multi-object tracking with re-identification and occlusion handling using labeled random finite sets,” Pattern Rec., vol. 156, p. 110785, 2024. [44] K. Dai, Y. Wang, J.-S. Hu, K. Nam, and C. Yin, “Intertarget occlusion handling in multiextended target tracking based on labeled multi-Bernoulli filter using laser range finder,” IEEE/ASME Transactions on Mechatronics, vol. 25, no. 4, pp. 1719–1728, 2020. [45] L. Lamard, R. Chapuis, and J.-P. Boyer, “Dealing with occlusions with-
 multi targets tracking algorithms for the real road context,” in 2012 IEEE Intelligent Vehicles Symposium, pp. 371–376, 2012. [46] L. Lamard, R. Chapuis, and J.-P. Boyer, “CPHD filter addressing occlusions with pedestrians and vehicles tracking,” in 2013 IEEE Intelligent Vehicles Symposium (IV), pp. 1125–1130, 2013.
[47] D. J. Daley and D. Vere-Jones, An Introduction to the Theory of Point Processes: Volume II: General Theory and Structure, 2nd edition. Springer, 2008. [48] A. Baddeley, I. B ́ar ́any, R. Schneider, and W. Weil, Stochastic Geometry: Lectures given at the C.I.M.E. Summer School held in Martina Franca, Italy, September 13-18, 2004. Springer-Verlag Berlin Heidleberg, 2007. [49] B.-T. Vo and B.-N. Vo, “A random finite set conjugate prior and application to multi-target tracking,” in 2011 Seventh I-
nternational Conference on Intelligent Sensors, Sensor Networks and Information Processing, pp. 431–436, 2011. [50] B.-N. Vo and B.-T. Vo, “Labeled random finite sets and multiobject conjugate priors,” IEEE Transactions on Signal Processing, vol. 61, no. 13, pp. 3460–3475, 2013. [51] B.-N. Vo, B.-T. Vo, and D. Phung, “Labeled random finite sets and the Bayes multi-target tracking filter,” IEEE Transactions on Signal Processing, vol. 62, no. 24, pp. 6554–6567, 2014. [52] R. Mahler, “Integral-transf-
orm derivations of exact closed-form multitarget trackers,” in 2016 19th Int. Conf. on Inf. Fus. (FUSION), pp. 950–957, 2016. [53]  ́A. F. Garc ́ıa-Fern ́andez, Y. Xia, K. Granstr ̈om, L. Svensson, and J. L. Williams, “Gaussian implementation of the multi-Bernoulli mixture filter,” in 2019 22th Int. Conf. on Information Fusion (FUSION), pp. 1–8, 2019. [54] A ́ . F. Garcı ́a-Ferna ́ndez, J. L. Williams, K. Granstro ̈m, and L. Svensson, “Poisson multi-Bernoulli mixture filter: Direct derivation and -
implementation,” IEEE Transactions on Aerospace and Electronic Systems, vol. 54, no. 4, pp. 1883–1901, 2018.
[55] S. Reuter, B.-T. Vo, B.-N. Vo, and K. Dietmayer, “The labeled multi-Bernoulli filter,” IEEE Transactions on Signal Processing, vol. 62, no. 12, pp. 3246–3260, 2014. [56] J. L. Williams, “Marginal multi-bernoulli filters: RFS derivation of MHT, JIPDA, and association-based MeMBer,” IEEE Trans. on Aerospace and Elec. Syst., vol. 51, no. 3, pp. 1664–1687, 2015. [57] T. L. Song, D. Muˇsicki, and Y. Kim, “Multi-target tracking with target state dependent detection,” in 2012 15th International Conf-
erence on Information Fusion, pp. 324–329, 2012.
[58] G. Jones,  ́A. F. Garc ́ıa-Fern ́andez, and C. Blackman, “Nonmyopic gospa-driven gaussian bernoulli sensor management,” IEEE Transactions on Aerospace and Electronic Systems, vol. 60, no. 6, pp. 7628–7642, 2024. [59] A ́ . F. Garcı ́a-Ferna ́ndez, L. Svensson, J. L. Williams, Y. Xia, and K. Granstr ̈om, “Trajectory Poisson multi-Bernoulli filters,” IEEE Transactions on Signal Processing, vol. 68, pp. 4933–4945, 2020. [60] J. Heinonen, Lectures on Analysis on Metric Spaces. Springer Science+Bu-
ssiness Media New York, 2001. [61] J. Krejcˇı ́, O. Kost, Y. Xia, L. Svensson, and O. Straka, “Model-based multi-object visual tracking: Identification and standard model limitations,” in 2025 28th Int. Conf. on Inf. Fus. (FUSION), pp. 18, 2025. [62] A. Milan, L. Leal-Taixe, I. Reid, S. Roth, and K. Schindler, “MOT16: A benchmark for multi-object tracking,” arXiv:1603.00831, 2016.
[63] P. Dendorfer, A. Os ̆ep, A. Milan, K. Schindler, D. Cremers, I. Reid, S. Roth, and L. Leal-Taixe ́, “Motchallenge: A benchmark for singlecamera multiple target tracking,” International Journal of Computer Vision, vol. 129, no. 4, pp. 845–881, 2021. [64] J. Krejˇc ́ı, O. Kost, O. Straka, and J. Dun ́ık, “Pedestrian tracking with monocular camera using unconstrained 3D motion model,” in 2024 27th Int. Conf. on Inf. Fus. (FUSION), pp. 1–8, 2024.
[65] J. Luiten, A. O ̆sep, P. Dendorfer, P. Torr, A. Geiger, L. LealTaixe ́, and B. Leibe, “HOTA: A higher order metric for evaluating multi-object tracking,” International Journal of Computer Vision, vol. 129, no. 2, pp. 548–578, 2021. [66] T. T. D. Nguyen, H. Rezatofighi, B.-N. Vo, B.-T. Vo, S. Savarese, and I. Reid, “How trustworthy are performance evaluations for basic vision tasks?,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 45, no. 7, pp. 8538–8552, 2023. [67] J. K-
rejcˇı ́, O. Kost, O. Straka, Y. Xia, L. Svensson, and A ́ . F. Garcı ́aFern ́andez, “TGOSPA metric parameters selection and evaluation for visual multi-object tracking.” arXiv:2412.08321, 2024. [68]  ́A. F. Garc ́ıa-Fern ́andez, A. S. Rahmathullah, and L. Svensson, “A metric on the space of finite sets of trajectories for evaluation of multi-target tracking algorithms,” IEEE Transactions on Signal Processing, vol. 68, pp. 3917–3928, 2020. [69] A. Bewley, Z. Ge, L. Ott, F. Ramos, and B. Upcroft, “-
Simple online and realtime tracking,” in 2016 IEEE International Conference on Image Processing (ICIP), pp. 3464–3468, 2016.
[70] A. S. Kechris, Classical Descriptive Set Theory, vol. 156. SpringerVerlag New York, 1995. [71] I. Goodman, H. T. Nguyen, and R. Mahler, Mathematics of Data Fusion. Kluwer Academic Publishers, 1997. [72] D. J. Daley and D. Vere-Jones, An Introduction to the Theory of Point Processes Volume I: Elementary Theory and Methods: 1st edition. Springer, 2003. [73] R. P. S. Mahler, “Multitarget Bayes filtering via first-order multitarget moments,” IEEE Transactions on Aerospace and Electronic Systems, -
vol. 39, pp. 1152–1178, Oct 2003.
[74] D. Koller and N. Friedman, Probabilistic Graphical Models: Principles and Techniques. Cambridge, MA, USA: MIT Press, 2009.
: 15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:32.924Z
- **Text Length:** 81595 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
