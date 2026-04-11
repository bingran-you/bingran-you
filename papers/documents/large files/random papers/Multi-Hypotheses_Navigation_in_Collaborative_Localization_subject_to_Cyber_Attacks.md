# PDF Document: Karstensen and Galeazzi - 2025 - Multi-Hypotheses Navigation in Collaborative Localization subject to Cyber Attacks.pdf

**File Path:** Karstensen and Galeazzi - 2025 - Multi-Hypotheses Navigation in Collaborative Localization subject to Cyber Attacks.pdf

**Processed Date:** 2026-02-10T18:14:17.818Z

**File Size:** 3702.91 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3354

**Title:** Multi-Hypotheses Navigation in Collaborative Localization subject to Cyber Attacks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Multi-Hypotheses Navigation in Collaborative Localization subject to
Cyber Attacks
Peter Iwer Hoedt Karstensen, Roberto Galeazzi Technical University of Denmark, Control, Robotics and Embodied AI Group
Abstract—This paper addresses resilient collaborative localization in multi-agent systems exposed to spoofed radio frequency measurements. Each agent maintains multiple hypotheses of its own state and exchanges selected information with neighbors using covariance intersection. Geometric reductions based on distance tests and convex hull structure limit the number of hypotheses transmitted, controlling the spread of hypotheses through the network. The method enables agents to separate spoofed and t-
ruthful measurements and to recover consistent estimates once the correct hypothesis is identified. Numerical results demonstrate the ability of the approach to contain the effect of adversarial measurements, while also highlighting the impact of conservative fusion on detection speed. The framework provides a foundation for resilient multi-agent navigation and can be extended with coordinated hypothesis selection across the network.
Index Terms—Collaborative Localization, Cyber Attacks, Multi-Hypotheses Navigation, Covariance Intersection, Resilient Navigation, Multi-Agent System
I. INTRODUCTION
Multi-agent systems, such as multi-robot systems, are projected to see widespread use. In recent years, multi-robot systems have attracted significant interest, demonstrating promising capabilities in applications such as search and rescue and surveillance [1], [2]. Recently, research has largely pivoted toward making such systems resilient, with a particular emphasis on cyberresiliency [3]. A multi-robot system is a cyber-physical system, and malicious actors may spoof or inject, modify, and dele-
te information exchanged between robots. Cyber-resilient navigation is fundamental to achieving system-level cyber-resiliency. Depending on the application, the infrastructure available to support a multi-robot system may be minimal, for example, consisting of only a few base stations or access points. In such cases, collaborative localization becomes especially important. If a malicious actor gains access to the system, it may be subjected to spoofing or other cyber-attacks. Cyber-resiliency refe-
rs to the ability of a system to withstand unforeseen events and recover, either by regaining its original performance or by maintaining a degraded but functional level of performance [4]. A multi-robot system is typically deployed to achieve a mission-oriented goal, such as spatio-temporal security surveillance. This goal is jeopardized when one or more robots are subjected to cyber-attacks that distort their pose estimates, causing them to believe they are at a certain location while they are, i-
n reality, elsewhere. Furthermore, in line with the concept of resiliency, the system cannot anticipate when or where an attack may occur, or how extensive it might be.
For the system to function, at least one reliable subset of measurements must be available from which accurate pose information can be inferred. To address this, the system must track multiple hypotheses of its state. In practice, most measurements may support one hypothesis, which could be the result of a spoofing attack, while only a minority of measurements correspond to the true state. By maintaining multiple hypotheses, robots can recover the true state and thereby restore system performance.-
 This paper extends the work in [5]. That prior work considered the scenario where any radio frequency (RF)-based measurement source, such as a global navigation satellite system (GNSS) receiver or RF anchors, could be spoofed. This paper investigates the same spoofing scenario but extends it to a multi-agent system and in a GNSS-denied environment. The main contribution is the extension of the method proposed in [5], where spoofed sources are grouped, to the domain of collaborative localization. -
The following assumptions in addition to those listed in [5] are used in the development of the proposed method. Assumption 1: The malicious entity may only make a joint attack in two distinct directions such that spoofed location together with the true location form the vertices of a convex hull Assumption 2: The malicious entity is more likely to attack the anchors due to their known location, for which reason the agents as an initial guess remove anchors from a selected hypothesis Robots and ag-
ents are used interchangeably in this paper.
II. RELATED WORK
Collaborative localization is a paradigm in which individual robots in a network perform relative measurements to update their estimates and subsequently share their posteriors, fusing them to achieve more precise localization. Fundamentally, this tightly couples the robots, making their estimation processes dependent on one another. Ignoring this dependence often results in overconfident estimates. Such overconfidence leads to inconsistent estimates [6]–[8]. To address this issue, numerous varian-
ts of the extended Kalman filter (EKF) for collaborative localization have been proposed, each aiming to account for inter-robot dependence, often under additional constraints such as communication outages. These works typically compare the trade-offs between consistency and computational complexity. For example, the authors of [9] propose a fusion method that mimics covariance intersection (CI) by computing covariance matrices that upper
arXiv:2511.21432v1 [eess.SY] 26 Nov 2025

2
bound the true covariance. In [7], each robot updates a decomposed joint covariance matrix relative to its neighbors, intended to capture the dependence, however, the authors note that consistency is not guaranteed. A three-step update method is presented in [8], where robots maintain their own states and track their neighbors, sharing posteriors that are fused via CI. In [6] propose a covariance union collaborative localization scheme, able to handle spurious inter-robot measurements, however, wi-
th the downside of being overly conservative. The authors of [10] consider inter-robot measurements that experience measurement outliers. They model the measurement noise as a Student’s t-distribution and though variational Bayesian iteration derive a scalar, that scales the measurement covariance matrix, lowering the contribution of distant measurement in terms of the innovation signal. Beyond estimator consistency, the threat of malicious interference has been a major research focus. Historicall-
y, attacks on navigation systems have concentrated on GNSS spoofing due to the relatively low effort required by an attacker [11], [12]. For instance, [13] proposes a multi-antenna GNSS receiver that uses angle of arrival (AOA) information to determine whether a satellite signal is spoofed. In [14], a χ2detector is employed to detect spoofing by cross-validating GNSS with inertial measurement unit (IMU) data. A multirobot scenario is considered in [15], where robots operate in a region containing -
a spoofed subregion. While robots primarily navigate using IMU and GNSS, they also perform relative ranging, which enables hypothesis testing to verify the integrity of GNSS measurements. By maintaining additional state variables, the robots switch adaptively between GNSS and relative measurements. In contrast, limited work has focused on spoofing of communication infrastructure that provides positional measurements. In [16], an M-estimator is proposed to mitigate locally biased measurements at ea-
ch agent, after which posteriors are fused using CI. The work in [17] considers a system in which one unknown node produces abnormal measurements; the faulty node is isolated by computing n − 1 estimates and identifying the configuration with the highest variance. Similarly, [18] investigates spoofing of relative measurements, which may lead to safety constraint violations. The authors formulate a global optimization problem to estimate the attacks, approximated via distributed optimization. Relat-
ed but not identical, network-wide fault detection is studied in [?], where fault diagnosis is used to isolate faults in robots’ odometry and sensing devices. Event-triggered collaborative localization under adversarial conditions is explored in [3], where robots share measurements and priors that may be manipulated by an attacker. The decision to accept neighbor information is based on a threshold applied to the innovation norm, though the approach introduces several tuning parameters without gui-
dance for selecting them. The method is extended in [19] to handle subregions in which cyber-attacks may target either communication links or sensors. The authors of Fault-tolerant collaborative localization is also considered in [20], where a team of robots relies on both collaborative localization and GNSS. Two filters are maintained and fused using covariance intersection, with weights determined by
the normalized innovation error squared so that inconsistent measurements contribute less. The authors assume that GNSS and collaborative localization cannot be faulty simultaneously, and a chi-squared test is used to determine which source becomes erroneous. A common assumption across the literature is that at least 50% of the measurement sources are uncompromised [18]. This ensures a sufficient number of truthful measurements to maintain localization. When multiple hypotheses are tracked, robots-
 can often recover accurate localization despite attacks. Such ideas date back to early work in simultaneous localization and mapping [21]. In Fault Diagnosis (FD), a similar approach involves maintaining a bank of filters, each using a subset of measurements [22]. This approach lost popularity due to computational overhead and has been left untouched since. Recently, this approach was applied to navigation in [23] considering a single fault and two faults in [24], and extended to consider collabo-
rative localization in [25]. The method maintains two separate bank of filters, one utilizing proprioceptive sensors only and the second utilizing collaborative localization only, both active at the same time and constructing filter utilizing I − 1 and I − 2 measurements, where I is the number of measurements. The authors propose using the interleaving update algorithm of [26] which in itself constructs 2I filters since it needs to track the contribution of each agent to the specific filter. Also,-
 it requires. Recently, it has been demonstrated how an adversary can spoof the positioning capabilities within a cellular network [27].
III. MULTI AGENT NETWORK
This paper considers a network of mobile agents connected through some RF network. The agents form a graph G = (P, E), where the agents are the vertices P, which
encodes their poses P ∋ q(i)
k=
[
(
p(i)
k
)T
θ(i)
k
]T
, where
p(i)
k=
[
x(i)
k y(i)
k
]T
. A subset of the vertices in the graph are static representing anchors, PRF ∈ P, whose position and orientation are known to all other agents in the network. The neighborhood of agent i is denoted as P(i)
k=
{
j | ||p(i)
k − p(j)
k ||2 < ρ
}
, where ρ is the communication
range of the agents and || · ||2 is the 2-norm. The ith agent is referred to as a(i). The state of the agents is modeled in discrete time as
x(i)
k =f
(
x(i)
k−1, u(i)
k
)
+ w(i)
d,k, (1)
where x(i)
k includes the agent’s pose, u(i)
k are the inputs to
the system such as IMU measurements, and w(i)
d,k is white
Gaussian noise with covariance matrix Q(i)
k independent of any other noise sources.
Each agent track its neighbors, P(i)
k , via the following discrete model
x(i,j)
k = gk
(
x(i,j)
k , u(j)
k
)
+ w(i,j)
d,k , (2)
where x(i,j)
k includes the pose of the neighbour j, u(j)
k is the input to the neighbour j, such as IMU measurements,

3
transmitted to agent i and w(j)
d,k is white Gaussian noise with
covariance matrix Q(i,j)
k , representing tracking errors. This
is distinct from w(j)
d,k, since the motion model in (1) may differ from the tracking model. To reduce the bandwidth, preintegrated IMU measurements should be transmitted [28]. When agent i is within communication range of agent j, it performs measurements as follows [5]
z(i,j)
k =h
(
q(i)
k , q(j)
k , ǫ(i,j)
k
)
+ w(i,j)
m,k , (3)
where
z(i,j)
k=
[
r(i,j)
k θ(i,j)
AOA,k θ(i,j)
AOD,k
]T
, (4)
h
(
q(i)
k , q(j)
k , ǫ(i,j)
k
)
= (5)

  
||p(j)
k − p(i)
k + ǫk||
π + tan−1 (
y(j)
k − y(i)
k + ǫy,k, x(j)
k − x(i)
k + ǫx,k
)
− θ(i)
k
tan−1 (
y(j)
k − y(i)
k + ǫy,k, x(j)
k − x(i)
k + ǫx,k
)
− θ(j)
k

  
.
(6)
r(i,j) is the inter-agent distance. θ(i,j)
AOA is the AOA at agent i.
θ(i,j)
AOD is the angle of departure (AOD) at agent j. w(i,j)
RF,k is
white Gaussian noise with zero expected value and covariance matrix RRF. ǫk = [ǫx,k ǫy,k
] is some unknown time-varying adversarial signal. The measurements are associated with an identifier o(i)
k.
In some regions, agents may localize relative to an RF anchor. The same measurement model as in (3) applies, except that the anchor’s position and orientation are assumed known. Each agent tracks nominal trajectores t(ni), which are sequences of time-indexed poses.
A. Multi Hypotheses Navigation
In [5], a method was presented for scenarios where any measurement source, in any number, may be spoofed. This lead to a multi-hypothesis formulation, where each hypothesis utilizes a subset of the measurements. The hypotheses are compactly expressed as
H(i)
k=
{
h(i,ι)
k
}|H(i)
k|
ι=1 , h(i,ι)
k=
((
μ(i,ι)
(·) , P(i,ι)
(·)
)
, O(i,ι)
k
)
, (7)
where μ(i,ι)
(·) and P(i,ι)
(·) denote the mean and covariance matrix, respectively, of the prior, predicted prior, or posterior of the Gaussian hypothesis indexed with ι. O(i,ι)
k is the subset of
utilized measurements by hypothesis h(ι)
k . If a hypothesis
considers all measurement sources, O(i,ι)
k = P (i)
k.
The method in [5] removes and generates hypotheses checking the consistency of the measurements with the hypotheses. It does so by counting the number of measurement outliers over a window W , and when this count exceeds an allowed number of outliers, then the hypothesis is rejected. When h(i,ι) is rejected, |O(i,ι)
k | − 1 hypotheses are generated inheriting the Gaussian parameters where the covariance matrix is inflated with αd > 1 and for each a measurement source in O(i,ι)
k
are removed. Reduction methods are established such that no
replicates of hypotheses in terms of O(i,ι)
k . The method con
structs a validation region Eγαχ
RRF,q (z(i)
k,q) around each measure
ment and outliers for each predicted measurement zˆ(ι,i)
k|k−1,q 6∈
E γαχ
RRF,q (z(i)
k,q) are counted over a window W , where q is the q’th component of the vector or diagonal of a matrix. The binary variable encoding whether the measurement is an outlier is a Bernoulli random variable whose probability can be computed through the motion and measurement model. The outlier probability of measurement j’s q component with respect to hypothesis ι of agent i is denoted as P (i,ι,j)
out,k,q.
The sum of these Bernoulli random variables will follow a Poisson-binomial distribution. The maximum allowed number of outliers can then be determined when selecting a percentile β as follows
o(ι,i)
β,q = F −1
PB
(
β; W,
{
P (ι,i)
out,k,q
}W
k=1
)
. (8)
An operational hypothesis h(i,op)
k is maintained, using all measurements.
B. Hypotheses Filtering
The agents employ an EKF to estimate their own state along with the states of their neighbors. Each agent forms a complete state vector, s(i,ι)
k , similar to EKF-SLAM, as
s(i,ι)
k=
[
μ(i,ι)
k Vec
[
μ(i,ι,j)
k
]T
j∈O(i,ι)
k
]T
, (9)
where Vec[·] concatenates the neighbor states. The associated covariance matrix is denoted Σ(i,ι)
k.
State prediction is carried out using IMU measurements from the agent itself and transmitted measurements from neighbors. The update step is performed using the measurement model in (3), relative to neighbors and anchors. Agents then share portions of their posteriors with neighbors and locally fuse their own posteriors with those received. Details of this procedure follow in the next section.
IV. RESILIENT COLLABORATIVE LOCALIZATION
Once agent i performs a relative measurement to neighbor j, after the Kalman filter update step the agents exchange posteriors, which are subsequently fused using CI. This is visualized in Fig. 1. Directly applying the framework in [5] framework to a multi-agent system would limit a agent with only other agents as neighbors to a single hypothesis. This is due to the reduction methods that do not allow replicates in term of O(i,ι)
k . When an anchor measurement or more are spoofed somewhere in the network, a agent not in range of these anchors will eventually be presented with multiple hypotheses by one of its neighbors. This will have to prompt it to create additional hypotheses with a set of measurement support which already exists in its set of hypotheses. This is a way of spreading the hypotheses across the network, and that the neighbor is non-adversarial but that it simply also is spreading the hypotheses across the n-
etwork. To still maintain the reduction methods, the hypotheses need to have an additional identifier to distinguish in those cases.

4
Fig. 1: The information exchanged by the agents are the IMU measurements and the posteriors.
t0 1 2
op hi,0,op) hi,1,op) hi,2,op) H h(i,0,0) h(i,3,1) h(i,5,2) h(i,1,0) h(i,4,1) h(i,6,2) h(i,2,0) h(i,7,2)
TABLE I: Tag of hypotheses shown as a hypotheses table. Each tag has an operational hypotheses and a set of hypotheses.
A. Tagging of Hypotheses
This paper extends the hypotheses of agent i such that it now contains a tag t as follows
H(i)
k=
{
h(i,ι,t(ι))
k
}|H(i)
k|
ι=0 ,
h(i,ι)
k=
((
s(i,ι,t(ι))
(·) , P(i,ι,t(ι)
(·)
)
, O(i,ι,t(ι))
k
)
,
(10)
where t(ι) denotes the tag of hypothesis ι. During reduction, only hypotheses with identical tags are considered. At time step k, the number of tags is given by
T (i)
k=
∣ ∣ ∣
{
t | t(ι) ∈ N, h(i,ι,t(ι))
k ∈ H (i)
k
}∣ ∣
∣ . (11)
Initially, all hypotheses share one tag until agent i receives multiple consecutive hypotheses from a neighbor. The tagging logic is described in Section IV-C. Each tag t has an associated operational hypothesis h(i,t,op)
k. Its measurement support is defined as
O(t,op)
k=
{
o(j) | j ∈ P (i) ∩ O(i,ι,t(ι))
k , ι = 0, . . . , |Hk|
}
. (12) The tag and how the hypotheses and operational hypotheses are related is illustrated in Table I.
B. Transmitting Information
In previous work on collaborative localization using CI, agent i shares its complete state vector s(i)
k with agent j [8], which contains information about agent is neighbors beyond agent j, and potentially have a common other neighbor. This allows agent i to potentially skew the estimates of agent j and a specific common neighbor. Therefore, the information sharing is limited to the state contents related to agent i and j.
Hypotheses supported by measurements relative to neighbor j are selected via the index set
I (i,j)
k=
{
ι | j ∈ O(i,ι,t(ι))
k , ι = 1, . . . , |H(i)
k|
}
. (13)
Agent i constructs a matrix T(i,ι,j)
s that extracts only the
entries relating to i and j in s(i,ι)
k , i.e.,
s(i,ι,j)
k,s = T(i,ι,j)
s s(i,ι)
k,
Σ(i,ι,j)
k,s = T(i,ι,j)
s Σ(i,ι,j)
k
(
T(i,ι,j)
s
)T
,
for ι ∈ I(i,j)
k . (14)
Although the dimension of s(i,ι)
k may vary, s(i,ι,j)
k has consistent dimension across all ι. An agent continuously splits hypotheses. Waiting for the diagnosis to conclude before transmitting a set of hypotheses would delay diagnosis across the network. However, transmitting all hypotheses ι ∈ I(i,j)
k increases fusion complexity and communication overhead. Thus, hypotheses must be reduced before transmission. Building on Assumption 1, the most distant hypotheses are selected. Since malicious entities bias poses toward extremes, the hypotheses representing the true state and those representing spoofed states eventually form vertices of a convex hull in terms of the positional estimates at each agents. The procedure will be detailed in the following and is illustrated in Fig. 2. To identify the-
 vertices of the convex hull, a Mahalanobis Distance (MD) matrix D(i,j)
k,s is first formed across all hypotheses at agent i, computed on the marginalized poses of the agent i. Denote s(i,j,ι)
k,s,q as the marginalized states at agent
i containing agent is pose, with associated covariance matrix
Σ(i,j,ν)
k,s,q . The entries of the MD matrix is
D(i,j)
k,(ι,ν) = d(ι,ν), ι, ν ∈ I(i,j)
k , (15)
where d(ι,ν) =
(
e(i,j,ι,ν)
k
)T (
Σ(i,j,ι)
k,s,q + Σ(i,j,ν)
k,s,q
)−1
e(i,j,ι,ν)
k and e(i,j,ι,ν)
k = s(i,j,ι)
k,s,q − s(i,j,ν)
k,s,q .
Assuming d(ι,ν) follows a χ2-distribution, the entries are compared against the inverse cumulative distribution function (CDF) at percentile αT and with three degrees of
freedom. This yields a binary matrix B(i,j)
k . Denote Jι =
{ν | bν = bι} ∪ {ι}, where bν is the ν row of B(i,j)
k. Hypotheses with identical rows, in which case |Jι| > 1, are clustered. Within each cluster the hypothesis with max
imum distance to any other hypothesis is retained. Denote
D(i,j,Jν )
k = D(i,j)
k,(Jν,Jν) as the matrix which only contains
rows and columns according to the index set Jν, the hypotheses with the maximum distance is stated as ιJν =
arg maxl maxm D(i,j,Jν)
k,l,m . This reduces the index set I(i,j)
k, such that the index set I(i,j)
k \ {ιJν | |Jν | > 1} reduces D(i,j)
k
and B(i,j)
k further. The convex hull of the remaining hypotheses is then de
termined via Quickhull [29] using only the position of agent
i in s(i,j,ι)
k,s,q denoted as s(i,j,ι)
k,s,p . The Ramer-Douglas-Peucker (RDP) algorithm [30] reduces the vertex set, removing a vertex that falls inside a strip between two other vertices. The width of the strip ε is user-defined. This further reduces I(i,j)
k.

5
Fig. 2: The procedure of determining the set of hypotheses transmitted to the neighbours. The middle box shows that first through B(i,j)
k , similar hypotheses are found such as hypotheses numbered 1 and 2 are considered the same, where 1 is retained due to its distance to the remaining hypotheses higher is higher than 2. The convex hull has hypotheses 1, 3, 4, 7 and 8 as vertices. The right box shows how the hypotheses not constituting a vertex in the convex hull are not considered. The RDP along with reductions on B(i,j)
k remove vertices 4 and 7, falling inside the strip defined by ε.
Again, hypotheses with identical rows in B(i,j)
k following the procedure described in the previous paragraph. The procedures are summarized in Algorithm 1.
Algorithm 1 Determine transmitting hypotheses
Require: D(i,j)
k , B(i,j)
k , I (i,j)
k , s(i,j,ι)
k,s,q
Ensure: H(i,j)
k,s
D, B, I ← CLUSTER(D(i,j)
k , B(i,j)
k , I (i,j)
k)
s(I) ← s(i,j,ι)
k,s,p,(I ,I )
s(ICH), ICH ← QuickHull(s(I))
s(IRDP), IRDP ←RDP(s(ICH), ICH)
B ← B(IRDP,IRDP), D ← D(IRDP,IRDP)
D, B, I ← CLUSTER(D, B, IRDP) return hypotheses indexed by I procedure CLUSTER(D, B, I) Jν ← {ι | bι = bν} ∪ {ν} ⊲ With bν the ν row of B
D(Jν ) ← D(Jν ,Jν )
ιJν = arg maxl maxm D(Jν ) I ← I \ {ιJν | |Jν | > 1} B ← BI,I , D ← DI,I return D, B, I end procedure
C. Utilizing Received Information
Each agent receives a set of hypotheses from its neighbors and needs to associate these to its own hypotheses. This is
done using the operational hypotheses of each tag t, denoted
h(i,t,op)
k , and the Hungarian algorithm.
At time k, agent i has T (i)
k tags and receives Gaussian parameters from neighbor j
H(i,j)
k,r =
{(
μ(i,ι,j)
k,r , Σ(i,ι,j)
k,r
)}|H(i,j)
k,r |
ι=0 . (16)
Agent a(i) computes a cost matrix whose entries are MDs between marginalized pose states:
C(i,j)
k,r,t,ι = d(i,t,j,ι)
k,r , (17)
where d(i,t,j,ι)
k,r =
(
e(i,j,t,ι)
k
)T (
Σ(i,j,t,ι)
k
)−1
e(i,j,t,ι)
k, e(i,j,t,ι)
k = s(i,j,t,op)
k − s(i,j,ι)
k and Σ(i,j,t,ι)
k=
Σ(i,j,t,op)
k + Σ(i,j,ι)
k.
The Hungarian algorithm applied to C(i,j)
k,r,t,ι yields the optimal association, encoded as
X(i,j)
t,ι =
{
1 if tag t matches hypothesis ι,
0 otherwise. (18)
D. Communication Update Step
Agent a(i) will have established a mapping between its own tags and the hypotheses transmitted by its neighbors. Since neighbors transmit only information about themselves and agent i, the received state is incomplete relative to s(i,ι,t(ι))
k
and s(i,t,op)
k . To handle this, agent i constructs another set
of extraction matrices S(i,t,j)
k,r and S(i,ι,t(ι),j)
k,r , different from
T(i,ι,j)
s , and forms received information matrices and vectors:
S (·)
k=
{
S(·)
k,r
(
Σ(i,ν,j)
k,r
)−1 (
S(·)
k,r
)T
| X(i,j)
t,ν = 1, j = 1, . . . ,
∣ ∣
∣P (i)
k
∣ ∣ ∣
}
,
V (·)
k=
{
S(·)
k,r
(
Σ(i,ν,j)
k,r
)−1
μ(i,ν,j)
k,r
| X(i,j)
t,ν = 1, j = 1, . . . ,
∣ ∣
∣P (i)
k
∣ ∣ ∣
}
,
(19)
where in the superscripts with (·) there is either (i, t) or (i, ι, t(ι)) depending whether the operational hypotheses or tagged hypotheses are updated. Covariance intersection is then applied as
(
Σ(·)
k
)+
=

 
∑
(j,I)∈S (·)
k,r
c(j,·)
k I + c(i,·)
k
(
Σ(·)
k
)−1

 
−1
,
(
μ(·)
k
)+
=
(
Σ(·)
k
)+

 
∑
(j,v)∈S (·)
k,r
c(j,·)
k v + c(i,·)
k v(·)


.
(20)
where v(·) =
(
Σ(·)
k
)−1
μ(·). The weights satisfy ∑
j c(j,·)
k+ c(i,·)
k = 1. The superscripts with (·) is either (i, t, op) or (i, t, t(ι)) depending whether the operational hypotheses or the tagged hypotheses are updated. Likewise, the weights superscript is either given as (i, t) or (i, ι, t(ι)).
The parameters
(
Σ(i,t,op)
k
)+
,
(
Σ(i,ι,t(ι))
k
)+
,
(
μ(i,t,op)
k
)+
and
(
μ(i,ι,t(ι)
k
)+
are treated as the priors in the next prediction step.
E. Tuning Covariance Intersection Weights
The weights c(j,t)
k , c(i,t)
k , c(j,ι,t(ι))
k , and c(i,ι,t(ι))
k are tuned to ensure rapid splitting of hypotheses in response to neighbors’ information, thereby enforcing timely attack detection across the network. Two special cases apply for the self-weight:

6
• If the agent maintains two or more tags with identical measurement support that include anchor measurements, then c(i,t)
k = c(i,ι,t(ι))
k = 0.25.
• If no such duplicate tags exist then c(i,t)
k = c(i,ι,t(ι))
k= 0.5.
Neighbor weights are further scaled relative to MDs computed in (17), increasing separation between hypotheses and aligning them more strongly with neighbors. Specifically,
c(j,·)
k=
(
1 − c(i,·))
∑
ν 1X(i,j)
t,ν =1 d(i,t,j,ν)
r
∑
l∈P (i)
k
∑
ν 1X(i,l)
t,ν =1 d(i,t,l,ν)
r
, (21)
where for (·) in the superscripts one has (t) or (ι, t(ι)).
F. Increasing the Count of Hypotheses Tags
The logic for incrementing hypothesis tags t(ι), introduced in (10), is as follows. When neighbor j detects an unlikely outlier count, it begins splitting hypotheses with varying subsets of measurement support. According to the rules in Section IV-B, j then transmits a set of hypotheses H(i,j)
k,r to agent i, see Section IV-C. This set may randomly contain more hypotheses than agent i maintains. At initialization each agent is ready to increment the count of tags by one when at some k, it receives |H(i,j)
k,r | > 1. Once incremented the count of tags to 2, the agents will only increment the number of tags, when they have seen τn consecutive time steps where |H(i,j)
k,r | > T (i)
k . There is a counter associated to each neighbour, such that when one of these counters exceed τn, the tag is increased. The unmatched hypothesis from agent j in terms of the matching presented in Section IV-C, determines which existing tag will be cloned by looking at which tag is closest in terms of the cost matrix (17). The operational hypothesis along with the hypotheses with the same tag will be copied and subsequently maintained in the following recursions.
G. Initial Removal of Anchors as Measurement Support
When an agent a(i) detects an abnormal count of outliers, and T (i)
k > 1, and each tag only has one hypothesis, which occurs when recently the agent has increased the tag count, and it is within range of at least one anchor, following Assumption 2, the agents initial guess is to suspect the violating measurement support to be the anchor. Then, instead of splitting |O(i,ι,t(ι)
k | − 1 hypotheses, the anchor is removed from the measurement set of the affected hypothesis. This strongly separates the operational hypotheses in subsequent fusion steps.
H. Computational Complexity
The computational complexity of the EKF prediction and update at any given time instance, assuming the EKF has a complexity of nz4, where nx is the state dimension of xk, is given by ∑
ι∈H(i)
k
(nx + ∣
∣O(i,ι)∣
∣ nx
)4. The Hungarian
algorithm has a complexity of n3, where n is the dimension
of the cost matrix in (17). The Quickhull algorithm has a worst-case complexity of n2, where n is the number of points. Hence, the EKF constitutes the worst scaling, especially since the number of hypotheses may increase rapidly. For instance, consider an agent with a measurement support {0, 1, 2, 3, 4}, where the subsets {0, 1, 2} and {3, 4} agree, respectively. The worst-case complexity occurs when the hypotheses split once, producing subsets including {0, 1, 2, 3} and {0, 1, 2, 4}, such that th-
e number of filters is five. Each filter is then estimating a state of dimension 5nx. This results in a total computational complexity scaling with the state dimension as 5(5nx)4.
V. NUMERICAL RESULTS
This Section presents numerical results applied on a specific case study. In the case study each agent uses the following discrete motion model
x(i)
k+1 = x(i)
k + Ts
[ (
R
(
θ(i)
k
)
v(i)
k
)T
a(i)
x,k a(i)
y,k ω(i)
k
]T
,
R(θ) =
[cos(θ) − sin(θ) sin(θ) cos(θ)
]
,
v(i)
k=
[
v(i)
x,k v(i)
y,k
]T
,
(22)
where vx,k, ax,k, vy,k and ay,k are the velocities and accelerations in x and y directions respectively, and ω is the angular velocities. ax,k, ay,k and ω are the inputs to the systems and are measurements from an IMU. Ts is the sampling period. The process noise covariance matrices are Q(i) = Q(i,j) = diag ([σx2 σy2 σv2x σv2y σθ2
]) with σx2 = σy2 = 0.5m2,
σv2x = σv2y = 10−4 m2
s2 and σθ = π
1800 rad2, RIMU =
diag ([σa2x σa2x σ2ω
]) where σa2x = σa2y = 10−3 m2
s4 and
σω = 2·10−5 rad2
s2 , and RRF = diag ([σr2 σ2AOA σ2AOD
]),
where σr2 = 1m2, σ2AOA = σ2AOD = π
360 rad2. The agents use the same model in (22) to track their neighbors. The case study considers eight agents and three anchors, shown in Fig. 3. A malicious attacker spoofs the anchors RF0 and RF1 such that the agents are biased 5m in the xcoordinate. Each agent does a circular maneuver, where the circle has a radius of five meters. Fig. 4 show the operational hypotheses at specific time steps for agents a(0) and a(7). These agents are shown since a(0) together a(2) are those furthest from the -
truthful RF2, and a(7) is the furthest from RF1 and RF2.
A metric used in collaborative localization is the normalized estimation error squared (NEES). It measures the property of the estimator to be consistent. Since this paper introduces a change in the typical CI fusion protocol in that only the agents may share their own information together with the neighbours information, the NEES is shown in four different cases; (1) where there is no attack and the agents only transmit their own information together with the recipients information, (2) there is -
no attack and the agents share all information with their neighbours, (3) there is an attack and information is shared as in (1), and (4) there is an attack and the information is shared as in (2).

7
Fig. 3: Multi-Agent system
The NEES is presented only based on the pose of the agents. Denote μ(i)
k,q and P(i)
k,q as the mean value and covariance matrix
agent a(i)’s pose. The NEES is hence computed as
dNEES =
(
e(i)
k,q
)T (
P(i)
k,q
)−1
e(i)
k,q, (23)
where e(i)
k,q = q(i)
k − μ(i)
k,q.
The average NEES results are shown in Fig. 5. The figure shows a dashed black line which represents the expected value of the NEES. A filter which is consistent is supposed to be equal to this line as the number of realization increases. Anything below that line is said to conservative and anything above is inconsistent or overconfident. In the cases where there is no attack, the filter is conservative which is expected of the CI collaborative localization method. The method proposed in this paper-
 creates two tags when an attacker is present, shown in green. It can be seen, that one of the tags is consistent, representing the hypotheses tracking the true state, and a second, tracking the spoofed state. This is visualized in Fig. 4 for specific time steps. The figure shows how prior to the splitting of hypotheses the agent is overconfident. Right when the split occurs, it remains overconfident, but regains its consistency as time progresses. Agent 0’s consistent hypothesis has a relatively -
large covariance matrix, which is due to to being the most distant to the non-adversarial anchor.
The root mean square (RMS) of the pose is shown in Fig. 6. It can be seen, that the attack, although only effectuated in the x-coordinates, also affects the y-coordinate and the heading. Is can be seen, that the algorithm does not regain the same navigational performance. The hypotheses tracking the true state have effectively lost a measurement source, and will naturally have lower accuracy. It can be seen, that the loss in navigation performance is lower when using the proposed algorithm compare-
d to the naive fusion, where no attack is anticipated.
(a) Agent a(0) at k = 55 (b) Agent a(7) at k = 55
(c) Agent a(0) at k = 57 (d) Agent a(7) at k = 57
(e) Agent a(0) at k = 165 (f) Agent a(7) at k = 165
(g) Agent a(0) at k = 222 (h) Agent a(7) at k = 222
Fig. 4: Specific time steps showing the operational hypotheses h(i,t,op) of agents a(0) and a(7) along with the neighbors estimate of their position The plots show the error ellipses with containment probability 99.73%. The relative positions of agents are shown in Fig. 3. The attack occurs at time step k = 20, affecting the measurements relative to anchors RF0 and RF1. At time step k = 55 agent a(7) has received more than one hypothesis from one of its neighbour, adding a new tag such that new op-
erational hypothesis is added. The same occurs at at agent a(0) at k = 57. Time steps k = 165 and k = 222 shows how the true state fall within the error ellipses. The black dot represents the true coordinates of the agents. The gray curve shows the nominal trajectory, which the agent is supposed to track.
VI. DISCUSSION
The method presented in this paper is based on CI based collaborative localization. CI is known to be a conservative

8
0 10 20 Time (s)
0
1
2
3
4
ANEES (log)
Case 0 Case 1
Case 2 Case 3
(a) Agent a(0)
0 10 20 Time (s)
0
1
2
3
ANEES (log)
Case 0 Case 1
Case 2 Case 3
(b) Agent a(7)
Fig. 5: The average NEES over 200 noise realizations and using the scenario shown in Fig. 4. The cases are: (1) where there is no attack and the agents only transmit their own information together with the recipients information, (2) there is no attack and the agents share all information with their neighbours, (3) there is an attack and information is shared as in (1) and (4) there is an attack and the information is shared as in (2). The two curves for case 2 show that the algorithm creates anot-
her tag within on average 40 samples. The black dashed line shows the expected value of the NEES, E(dNEES) = 3.
0 10 20
−1
0
1
ex,RMS (log m)
Case 0 Case 1
Case 2 Case 3
0 10 20
−1
0
ey,RMS (log m)
0 10 20 Time (s)
−5.5
−5.0
−4.5
eθ,RMS (log rad)
(a) Agent 0
0 10 20
−1
0
1
ex,RMS (log m)
Case 0 Case 1
Case 2 Case 3
0 10 20
−1
0
ey,RMS (log m)
0 10 20 Time (s)
−5
−4
eθ,RMS (log rad)
(b) Agent 7
Fig. 6: The RMS of the x- and y-coordinates and the heading θ, computed using 200 noise realizations.
fusion method, since it assumes maximum correlation, with the consequence of inflating the covariance matrix. This impacts the windowed count detector in the sense that the outlier probability increases, which in turns implies that the count of outliers over the window W needs to be relatively high. The numerical results provided in the previous Section use a bias magnitude of five meters, which is relatively large compared to the noise parameters. As each hypothesis effectively needs to see a hig-
h count of outliers, this delays the detection and
conclusion of the diagnosis at the individual agents and for the system as shown in Fig. 5 and 6. The complexity of the algorithm grows greatly as the number of measurement sources increases, which is also true for the CI collaborative localization method used in [8]. As was shown in [31], adding more agents has a diminishing return in increasing the accuracy of the system. Following this, one would have to plan the nominal trajectories t(ni) such that collaborative localization is done with five -
neighbors, which is where the gain in accuracy drops relatively [31]. Instead of using the convex hull approach to determine the number of hypotheses to transmit, it would seem appropriate to use a clustering method, such as k-means clustering or spectral clustering. In both clustering methods, a number of k clusters should be selected apriori and is typically determined based on data or expert knowledge. In spectral-clustering one could use the eigengap heuristic [32] to determine the number of c-
lusters. However, it was found that the distances in D(i,j)
k,(ι,ν)
would lead to an inconsistent number of clusters and could suddenly jump to a large number of clusters. The CI has an averaging effect. To enforce the seperation of the hypotheses, (21) scales the weights according to the MD evaluation, with the intention to separate the hypotheses. In a constellation where agent a(i) is a neighbor to agents a(j) and a(l), who are not neighbors of each other, agent a(j) will have a relatively high MD evaluation, moving a(i)s estimate towards agent a(j)s estimate. -
In a subsequent fusion step however, agent a(l) will now have a relatively high MD evaluation such that it brings agents a(i)s estimate back. This will prolong the separation of the hypotheses, therefore also the ability of the system to propagate the hypotheses and in turn also the ability of each individual agents to detect the spoofing attack.
VII. CONCLUSION
This paper presented a method for resilient collaborative localization in multi-agent systems subject to attacks on RF measurements. The approach extends a multi-hypotheses framework to the networked setting by introducing tagged hypotheses and fusion through CI. A set of reductions based on distance tests and convex hull geometry limits the number of hypotheses that agents share, which enables the network to propagate diagnostic information without excessive communication. The results show that t-
he method allows agents to identify and separate spoofed measurements and to recover estimates that remain consistent with the true state once the correct hypothesis is isolated. The reduction in accuracy that follows from removing compromised measurements and the conservative nature of covariance intersection is expected, and the study also indicates that detection slows due to relatively large covariance matrices. The approach can be strengthened by reducing conservativeness in the fusion proces-
s and improving hypothesis management. A next step is to investigate the coordination between agents to accept a single hypothesis across the whole network.

9
REFERENCES
[1] J. Scherer and B. Rinner, “Multi-Robot Persistent Surveillance with Connectivity Constraints,” IEEE Access, vol. 8, pp. 15 093–15 109, 2020, arXiv: 1909.07703 Publisher: Institute of Electrical and Electronics Engineers Inc. [2] P. Li, Y. Wu, J. Liu, G. S. Sukhatme, V. Kumar, and L. Zhou, “Resilient and Adaptive Replanning for Multi-Robot Target Tracking with Sensing and Communication Danger Zones,” Sep. 2024, arXiv:2409.11230 [cs]. [Online]. Available: http://arxiv.org/abs/2409.11230 [3] T. K-
argar Tasooji and H. J. Marquez, “A Secure Decentralized Event-Triggered Cooperative Localization in Multi-Robot Systems Under Cyber Attack,” IEEE Access, vol. 10, pp. 128 101–128 121, 2022, conference Name: IEEE Access. [Online]. Available: https: //ieeexplore.ieee.org/document/9970722 [4] V. Tzavara and S. Vassiliadis, “Tracing the evolution of cyber resilience: a historical and conceptual review,” International Journal of Information Security, vol. 23, no. 3, pp. 1695–1719, Jun. 2024. [Online].-
 Available: https://doi.org/10.1007/s10207-023-00811-x [5] P. I. H. Karstensen and R. Galeazzi, “Multi-Hypotheses Ego-Tracking for Resilient Navigation,” Nov. 2025, arXiv:2511.19770 [eess]. [Online]. Available: http://arxiv.org/abs/2511.19770 [6] X. Wang, S. Sun, T. Li, and Y. Liu, “Fault Tolerant Multi-Robot Cooperative Localization Based on Covariance Union,” IEEE Robotics and Automation Letters, vol. 6, no. 4, pp. 7799–7806, Oct. 2021, publisher: Institute of Electrical and Electronics Engineer-
s Inc. [Online]. Available: https://ieeexplore.ieee.org/document/9496133/ [7] L. Luft, T. Schubert, S. I. Roumeliotis, and W. Burgard, “Recursive decentralized localization for multi-robot systems with asynchronous pairwise communication,” The International Journal of Robotics Research, vol. 37, no. 10, pp. 1152–1167, Sep. 2018, publisher: SAGE Publications Inc. [Online]. Available: http://journals.sagepub.com/doi/ 10.1177/0278364918760698 [8] T.-K. Chang, K. Chen, and A. Mehta, “Resilient and Con-
sistent Multirobot Cooperative Localization With Covariance Intersection,” IEEE Transactions on Robotics, vol. 38, no. 1, pp. 197–208, Feb. 2022, conference Name: IEEE Transactions on Robotics. [9] J. Zu and S. S. Kia, “Cooperative Localization Under Limited Connectivity,” IEEE Transactions on Robotics, vol. 35, no. 6, pp. 1523–1530, Dec. 2019, arXiv: 1904.13074 Publisher: Institute of Electrical and Electronics Engineers Inc. [Online]. Available: https://ieeexplore.ieee.org/document/8796410/ [10]-
 J. Yan, F. Zhu, Y. Huang, and Y. Zhang, “Robust Decentralized Cooperative Localization for Multirobot System Against Measurement Outliers,” IEEE Internet of Things Journal, vol. 11, no. 10, pp. 17 934–17 947, May 2024. [Online]. Available: https://ieeexplore.ieee. org/document/10418257 [11] Y. Xu, X. Han, G. Deng, J. Li, Y. Liu, and T. Zhang, “SoK: Rethinking Sensor Spoofing Attacks against Robotic Vehicles from a Systematic View,” in 2023 IEEE 8th European Symposium on Security and Privacy (Euro-
S&P), Jul. 2023, pp. 1082–1100. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/10190511 [12] A. Venturino, E. d’Afflisio, N. Forti, P. Braca, P. Willett, and M. Z. Win, “Adaptive Resilience Navigation Filter for Detecting and Mitigating Multispoofing Attacks in Range-Based Localization Systems Using Antenna Arrays,” IEEE Transactions on Aerospace and Electronic Systems, vol. 61, no. 3, pp. 6856–6872, Jun. 2025. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/-
10854643 [13] A. Venturino, E. d’Afflisio, N. Forti, P. Braca, P. Willett, and M. Z. Win, “Adaptive Resilience in Navigation: Multi-Spoofing Attacks Defence with Statistical Hypothesis Testing and Directional Receivers,” in 2024 27th International Conference on Information Fusion (FUSION), Jul. 2024, pp. 1–8. [Online]. Available: https: //ieeexplore.ieee.org/abstract/document/10706399 [14] H.-J. Yoon, W. Wan, H. Kim, N. Hovakimyan, L. Sha, and P. G. Voulgaris, “Towards Resilient UAV: Escape Time i-
n GPS Denied Environment with Sensor Drift,” IFAC-PapersOnLine, vol. 52, no. 12, pp. 423–428, Jan. 2019. [Online]. Available: https://www.sciencedirect. com/science/article/pii/S2405896319312339 [15] G. Michieletto, F. Formaggio, A. Cenedese, and S. Tomasin, “Robust Localization for Secure Navigation of UAV Formations Under GNSS Spoofing Attack,” IEEE Transactions on Automation Science and Engineering, vol. 20, no. 4, pp. 2383–2396, Oct. 2023. [Online]. Available: https://ieeexplore.ieee.org/docum-
ent/9905662 [16] R. He, Y. Shan, and K. Huang, “Robust Cooperative Localization With Failed Communication and Biased Measurements,” IEEE Robotics and Automation Letters, vol. 9, no. 3, pp. 2997–3004, Mar. 2024,
conference Name: IEEE Robotics and Automation Letters. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/10423111 [17] S. Salimpour, P. T. Moro ́n, X. Yu, T. Westerlund, and J. Pen ̃aQueralta, “Exploiting redundancy for UWB anomaly detection in infrastructure-free multi-robot relative localization,” Frontiers in Robotics and AI, vol. 10, Dec. 2023, publisher: Frontiers. [Online]. Available: https://www.frontiersin.org/journals/robotics-and-ai/articles/ 10.3389/frobt.2023.1190296/f-
ull [18] V. Vijay, K. A. Pant, M. Cho, Y. Guo, J. M. Goppert, and I. Hwang, “Range-Based Multi-Robot Integrity Monitoring For Cyberattacks and Faults: An Anchor-Free Approach,” IEEE Robotics and Automation Letters, vol. 10, no. 3, pp. 2630–2637, Mar. 2025. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/10854616 [19] T. K. Tasooji and R. Parasuraman, “Distributed Fault-Tolerant MultiRobot Cooperative Localization in Adversarial Environments,” Jul. 2025, arXiv:2507.06750 [cs]. [O-
nline]. Available: http://arxiv.org/abs/ 2507.06750 [20] Y. Qu, J. Wu, B. Xiao, and D. Yuan, “A Fault-Tolerant Cooperative Positioning Approach for Multiple UAVs,” IEEE Access, vol. 5, pp. 15 630–15 640, Jul. 2017, publisher: Institute of Electrical and Electronics Engineers Inc. [21] K. Arras, J. Castellanos, and R. Siegwart, “Feature-based multihypothesis localization and tracking for mobile robots using geometric constraints,” in Proceedings 2002 IEEE International Conference on Robotics and Au-
tomation (Cat. No.02CH37292), vol. 2. IEEE, 2002, pp. 1371–1377, iSSN: 10504729. [Online]. Available: http: //ieeexplore.ieee.org/document/1014734/ [22] J. Gertler, “Survey of model-based failure detection and isolation in complex plants,” IEEE Control Systems Magazine, vol. 8, no. 6, pp. 3–11, Dec. 1988, conference Name: IEEE Control Systems Magazine. [23] J. Jurado, J. Raquet, C. M. Schubert Kabban, and J. Gipson, “Residual-based multi-filter methodology for allsource fault detection, exclusion,-
 and performance monitoring,” NAVIGATION, vol. 67, no. 3, pp. 493–510, 2020, eprint: https://onlinelibrary.wiley.com/doi/pdf/10.1002/navi.384. [Online]. Available: https://onlinelibrary.wiley.com/doi/abs/10.1002/navi. 384 [24] J. S. Gipson and R. C. Leishman, “Resilience Monitoring for Multi-Filter All-Source Navigation Framework With Assurance,” NAVIGATION: Journal of the Institute of Navigation, vol. 69, no. 4, Dec. 2022, publisher: Institute of Navigation Section: Original Article. [Online]. Av-
ailable: https://navi.ion.org/content/navi/69/4/navi.550 [25] ——, “A Framework for Collaborative All-Source Navigation With Fault Detection and Exclusion,” IEEE Transactions on Aerospace and Electronic Systems, vol. 58, no. 5, pp. 4615–4625, Oct. 2022. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/9745771 [26] A. Bahr, M. R. Walter, and J. J. Leonard, “Consistent cooperative localization,” in 2009 IEEE International Conference on Robotics and Automation, May 2009, pp. 3415–342-
2, iSSN: 1050-4729. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/5152859 [27] M. Li, H. Chen, A. Pourafzal, and H. Wymeersch, “RIS-Aided Positioning Under Adverse Conditions: Interference from Unauthorized RIS,” Feb. 2025, arXiv:2502.19928 [eess] version: 1. [Online]. Available: http://arxiv.org/abs/2502.19928 [28] C. Forster, L. Carlone, F. Dellaert, and D. Scaramuzza, “OnManifold Preintegration for Real-Time Visual–Inertial Odometry,” IEEE Transactions on Robotics, vol. 33,-
 no. 1, pp. 1–21, Feb. 2017. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/7557075 [29] C. B. Barber, D. P. Dobkin, and H. Huhdanpaa, “The quickhull algorithm for convex hulls,” ACM Trans. Math. Softw., vol. 22, no. 4, pp. 469–483, 1996. [Online]. Available: https://dl.acm.org/doi/10.1145/ 235815.235821 [30] U. Ramer, “An iterative procedure for the polygonal approximation of plane curves,” Computer Graphics and Image Processing, vol. 1, no. 3, pp. 244–256, Nov. 1972. [Online]-
. Available: https://www.sciencedirect.com/science/article/pii/S0146664X72800170 [31] S. Roumeliotis and I. Rekleitis, “Analysis of multirobot localization uncertainty propagation,” in Proceedings 2003 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2003) (Cat. No.03CH37453), vol. 2, Oct. 2003, pp. 1763–1770 vol.2. [Online]. Available: https://ieeexplore.ieee.org/abstract/document/1248899 [32] U. von Luxburg, “A tutorial on spectral clustering,” Statistics and Computing, -
vol. 17, no. 4, pp. 395–416, Dec. 2007. [Online]. Available: https://doi.org/10.1007/s11222-007-9033-z

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:17.818Z
- **Text Length:** 48614 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
