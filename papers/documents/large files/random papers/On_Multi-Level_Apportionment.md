# PDF Document: Schmidt-Kraepelin et al. - 2025 - On Multi-Level Apportionment.pdf

**File Path:** Schmidt-Kraepelin et al. - 2025 - On Multi-Level Apportionment.pdf

**Processed Date:** 2026-02-10T18:18:11.314Z

**File Size:** 277.76 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3208

**Title:** On Multi-Level Apportionment

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On Multi-Level Apportionment
Ulrike Schmidt-Kraepelin1, Warut Suksompong2 and Steven Wijaya2
1TU Eindhoven, The Netherlands 2National University of Singapore, Singapore
Abstract
Apportionment refers to the well-studied problem of allocating legislative seats among parties or groups with different entitlements. We present a multi-level generalization of apportionment where the groups form a hierarchical structure, which gives rise to stronger versions of the upper and lower quota notions. We show that running Adams’ method level-by-level satisfies upper quota, while running Jefferson’s method or the quota method level-by-level guarantees lower quota. Moreover, we prove tha-
t both quota notions can always be fulfilled simultaneously.
1 Introduction
The problem of apportionment in mathematics and politics involves distributing a set of identical resources, often legislative seats, among a number of parties, regions, or groups with differing entitlements [Balinski and Young, 2001, Pukelsheim, 2014]. These entitlements are typically derived from the populations of the regions or groups, or the votes that the parties receive in an election. The difficulty of apportionment stems from the fact that only integer numbers of seats can be apportioned -
whereas the proportional shares according to the entitlements are rarely integers. In addition to its long history, apportionment continues to receive significant interest from researchers nowadays [Brams et al., 2019, Cembrano et al., 2022, Brill et al., 2024, Mathieu and Verdugo, 2024]. Since the exact proportional share of each group—also called the quota—cannot always be achieved, two natural and well-studied notions in apportionment are upper quota and lower quota.1 Upper quota dictates that -
each group should receive at most its quota rounded up, while lower quota requires the group to obtain at least its quota rounded down. Prominent apportionment methods that fulfill at least one of the quota notions include Adams’ method, Jefferson’s method, and the quota method. Each of these methods can be formulated as an iterative procedure that allocates one seat at a time, with the recipient of each subsequent seat determined by the allocation thus far. Adams’ method guarantees upper quota, w-
hile Jefferson’s method ensures lower quota. The quota method is an adaptation of Jefferson’s method that checks against upper quota violations, and thereby achieves both quota notions. Due to their iterative nature, all three methods satisfy an intuitive property called house monotonicity, which means that the number of seats that each group receives does not decrease as the total number of seats increases.2 In this paper, we study a generalized version of apportionment where instead of the group-
s being on a single level, they form an arbitrary hierarchical structure. This is applicable, for instance, when seats are divided among cities in a country and then among districts in each city. Ideally, we would like the quota notions to be satisfied not only for cities with respect to the country or for districts with respect to cities, but also for districts with respect to the country. Another example is when university
1Koriyama et al. [2013] suggested other reasons why one may want to deviate from strict proportionality. 2For a detailed overview of the theory of apportionment, we refer to Appendix A of the book by Balinski and Young [2001]. In particular, the concept of satisfying upper and lower quota is called “staying within the quota” and discussed in Section 7 of Appendix A of that book.
1
arXiv:2511.10000v1 [econ.TH] 13 Nov 2025

0
1
1 4
2
1 4
3
1 4
4
1 4
0
5
1
1 2
2
1 2
1 2
6
3
1 2
4
1 2
1 2
Figure 1: Example tree structures of single-level apportionment (left) and multi-level apportionment (right).
personnel need to be allotted to faculties and further to departments within each faculty. We represent the hierarchical structure by a tree and each group by a node in the tree, and call the resulting problem multi-level apportionment. Note that canonical apportionment corresponds to the special case where the tree consists of a single level (besides its root). The system of apparentment, also known as list alliances [Leutga ̈b and Pukelsheim, 2009, Bochsler, 2010, Karpov, 2015], can be seen as t-
wo-level apportionment, as it allows groups to form a coalition and receive seats collectively in the main apportionment process, before distributing these seats among themselves. However, research on apparentment has primarily focused on the incentives for groups to form such coalitions, rather than on extending the quota notions and house monotonicity to a multi-level framework. To illustrate the challenges that multi-level apportionment brings, consider the two trees in Figure 1, and assume tha-
t there are six seats to be allocated. In the single-level tree on the left, each leaf node has a weight—representing its entitlement—of 1/4 relative to the root. Giving two seats each to nodes 1 and 2 and one seat each to nodes 3 and 4 is sufficient to satisfy both upper and lower quota. On the other hand, in the multi-level tree on the right, each leaf node again has weight 1/4 relative to the root, but nodes 1 and 2 belong to one group with weight 1/2 (represented by node 5) while nodes 3 and 4-
 belong to another such group (represented by node 6). If we use the same distribution of seats to nodes 1, 2, 3, 4 as before, node 5 will receive four seats while node 6 will receive only two. As a result, the upper quota of three for node 5 and the lower quota of three for node 6 relative to the root are both violated. In spite of this apparent difficulty, we prove in Section 3 that for any multi-level apportionment instance, it is possible to distribute the seats so as to fulfill both upper and-
 lower quota. Specifically, our notions of upper and lower quota require each node in the tree to satisfy quotas derived by comparing its seat allocation to that of every of its ancestors. This means that strong quota guarantees can be made regardless of the hierarchical structure and entitlements. In Section 4, we explore running Adams’ and Jefferson’s methods level-by-level and show that the resulting rules ensure upper quota and lower quota, respectively. As a consequence, either quota notion c-
an be satisfied in conjunction with house monotonicity. In Section 5, we demonstrate that while an analogous extension of the quota method satisfies lower quota, the single-level check typically performed by the quota method is insufficient to guard against upper quota violations in the multi-level setting. On the other hand, modifying the check to span multiple levels, while guaranteeing upper quota, can result in a violation of lower quota. Finally, we conduct an experimental analysis in Section-
 6.
2 Preliminaries
An instance of multi-level apportionment consists of a rooted tree with n nodes for some positive integer n, entitlements (to be defined in the next paragraph), and a non-negative number of seats h to be allocated. Assume that the nodes are numbered 0, 1, . . . , n − 1, with the root node having number 0. For each node i, denote by Wi ∈ (0, 1] its entitlement relative to its parent (for the root node 0, we let W0 = 1). We assume that entitlements are normalized, i.e., P
c∈C(i) Wc = 1 holds for every
2

non-leaf node i, where C(i) denotes the set of i’s children. Moreover, for any node i, we let A(i) be the set of i’s ancestors. Formally, A(0) = {0},3 and recursively down the tree, for each node i we define A(i) = {j} ∪ A(j), where j is the parent of i. The h seats need to be allocated among the nodes in the tree. Let Vi be the number of seats allocated to node i. The root node always receives all h seats, and the number of seats allocated to any nonleaf node must be equal to the total number of-
 seats allocated to its children. That is, V0 = h and Vi = P
c∈C(i) Vc for each non-leaf node i. A (multi-level) apportionment rule maps any (multi-level) apportionment instance to an allocation of the seats. For each node i, denote by Ri the entitlement of node i relative to the root node, i.e., Ri :=
Q
a∈A(i)∪{i} Wa.
Definition 2.1. The lower quota of node i is defined as LQi := maxa∈A(i)⌊ Ri
Ra · Va⌋, and the upper
quota as U Qi := mina∈A(i)⌈ Ri
Ra · Va⌉.
Note that both lower and upper quota capture the quota requirements of a node with respect to every of its ancestors in the tree. An allocation of seats is said to fulfill lower (resp., upper) quota if Vi ≥ LQi (resp., Vi ≤ U Qi) for every i.4 An apportionment rule satisfies lower (resp., upper) quota if, for every instance, it returns a seat allocation that fulfills lower (resp., upper) quota. As an example, for the right tree in Figure 1 with h = 6, consider an allocation with V0 = 6, V1 = V2 = -
2, V3 = V4 = 1, V5 = 4, and V6 = 2. This allocation violates lower quota because LQ6 = ⌊ 1
2 · 6⌋ = 3 > V6; it also violates
upper quota because U Q5 = ⌈ 1
2 · 6⌉ = 3 < V5.
Finally, an apportionment rule satisfies house monotonicity if it has the following property: for any instance, if the total number of seats to be allocated increases from h to h + 1, then every node receives no fewer seats than before. A common way to satisfy house monotonicity is to iteratively allocate one seat at a time. For such an iterative method, we denote by V h
i the number of seats allocated to node i after h seats have been allocated in total.
3 Staying Within the Quotas
In single-level apportionment, it is easy to see that there always exists a seat allocation that fulfills both upper and lower quota.5 The situation is less clear in multi-level apportionment, however, as the internal nodes can introduce several additional constraints on the permissible allocation. Nevertheless, we show that for any instance, there exists an allocation that respects both quotas, thereby demonstrating that staying within the quotas is always possible regardless of the hierarchical -
structure.
Theorem 3.1. For every multi-level apportionment instance, there exists a seat allocation that fulfills both upper and lower quota.
Theorem 3.1 is an immediate consequence of Lemmas 3.2 and 3.3, which we state and prove next. Recall that a full binary tree is a binary tree in which every node has either 0 or 2 children.
Lemma 3.2. Suppose that for every multi-level apportionment instance with a full binary tree, there exists a seat allocation that fulfills both upper and lower quota. Then, the same holds for every multilevel apportionment instance (with an arbitrary tree).
3This choice will be more convenient for our purposes than defining A(0) = ∅. 4One could define lower and upper quota with respect to only the root node, i.e., ⌊Ri · h⌋ and ⌈Ri · h⌉, respectively. This leads to weaker quota notions, so our positive results carry over to these notions as well. Also, our quota notions are stronger than those defined by considering each node only with respect to its parent. For example, in the instance shown in Figure 4, the allocation described in the proof of Theor-
em 5.6 satisfies the latter lower quota notion but not ours. 5For example, Hamilton’s method first gives each node its lower quota, then assigns the remaining seats to the nodes with the highest fractional remainders of their quotas until all seats have been allocated.
3

0
1
1 4
2
1 4
3
1 4
4
1 4
0
1
1 4
5
2
1 3
6
3
1 2
4
1 2
2 3
3 4
Figure 2: Illustration of reducing an arbitrary tree to a full binary tree in the proof of Theorem 3.2. Shaded nodes are the introduced intermediate nodes.
Lemma 3.3. For every multi-level apportionment instance with a full binary tree, there exists a seat allocation that fulfills both upper and lower quota.
Proof of Theorem 3.2. We claim that an arbitrary instance can be reduced to one with a full binary tree. Given an arbitrary instance, we can apply the following transformation rules for each node i:
• If |C(i)| = 0 or 2, do nothing;
• If |C(i)| = 1, merge i with its only child, since the two nodes must receive the same number of seats;
• If |C(i)| > 2, introduce a new intermediate node j to become the parent of |C(i)| − 1 children of i, and make i the parent of both j and the remaining child i∗ of i. Set Wj = P
c∈C(j) Wc, and
replace Wc by Wc
1−Wi∗ for each c ∈ C(j). Then, apply the same transformation rules to j.
An example of the reduction is shown in Figure 2. Observe that all quota constraints between nodes in the original tree are still present in the new tree. Therefore, a seat allocation that fulfills both quotas in the new tree does so in the original tree as well.
Proof of Theorem 3.3. We proceed by induction, showing that if a satisfactory seat allocation can be found for all full binary trees with n nodes, then the same is true for all full binary trees with n + 2 nodes (note that the number of nodes in a full binary tree is always odd). The base case n = 1 holds trivially. Consider an arbitrary instance with n + 2 ≥ 3 nodes. Let i be a node such that both of its children, denoted by x and y, are leaf nodes—such a node i always exists in a full binary tre-
e when n > 1. We have Wx, Wy > 0 and Wx + Wy = 1. By the induction hypothesis, in the tree with x and y removed, there exists a seat allocation (with the same number of seats) that fulfills both quotas. For any two nodes c and a such that a ∈ A(c), let ec,a = Rc
Ra · Va, and recall that LQc = maxa∈A(c)⌊ec,a⌋ and U Qc = mina∈A(c)⌈ec,a⌉. Fix c ∈ {x, y}, let emax := maxa∈A(c) ec,a and emin := mina∈A(c) ec,a, and suppose that the maximum and minimum are achieved at ancestors a1 and a2 of c, respectively. We will show that emax − emin < 1. This is clear if a1 = a2, so assume that a1 ̸= a2. If a1 occupies a higher position in the tree than a2, we have
0 ≤ emax − emin = Rc
Ra1
· Va1 − Rc
Ra2
· Va2 = Rc
Ra2
Ra2
Ra1
· Va1 − Va2 .
4

Notice that Rc
Ra2
< 1 since a2 is an ancestor of c, and Ra2
Ra1
· Va1 − Va2 < 1 since lower quota for a2 with
respect to a1 is satisfied. Hence, emax − emin < 1 in this case. On the other hand, if a2 occupies a higher position in the tree than a1, we have
0 ≤ emax − emin = Rc
Ra1
· Va1 − Rc
Ra2
· Va2 = Rc
Ra1
Va1 − Ra1
Ra2
· Va2 .
Notice that Rc
Ra1
< 1 since a1 is an ancestor of c, and Va1 − Ra1
Ra2
· Va2 < 1 since upper quota for a1 with
respect to a2 is satisfied. Hence, emax − emin < 1 always holds. Since LQc = ⌊emax⌋ and U Qc = ⌈emin⌉, it follows that LQc ≤ U Qc. Thus, there exists a number of seats Vc that can be allocated to node c so that both quotas are satisfied for c with respect to all of its ancestors. To complete the proof, it remains to show that we can choose Vx and Vy so that Vi = Vx + Vy. Since Rx + Ry = Ri, it holds that ex,a + ey,a = ei,a for each a ∈ A(i) ∪ {i}. Thus,
⌊ex,a⌋ + ⌊ey,a⌋ ≤ ⌊ei,a⌋ ≤ Vi ≤ ⌈ei,a⌉ ≤ ⌈ex,a⌉ + ⌈ey,a⌉ (1)
for each a ∈ A(i) ∪ {i}.
Now, for any c ∈ {x, y} and any a1, a2 ∈ A(c) (note that A(c) = A(i) ∪ {i}), we know that
ex,a1 ey,a1
= ex,a2
ey,a2
= Rx
Ry , which means that ex,a1 ≤ ex,a2 implies ey,a1 ≤ ey,a2 . From the definition
LQc = maxa∈A(c)⌊ec,a⌋, we have
LQx + LQy = max
a1∈A(c)
⌊ex,a1 ⌋ + max
a2∈A(c)
⌊ey,a2 ⌋ = max
a∈A(c)
(⌊ex,a⌋ + ⌊ey,a⌋),
where the second equality holds by the previous sentence. Similarly, U Qx+U Qy = mina∈A(c)(⌈ex,a⌉+ ⌈ey,a⌉). Combining these with (1), we find that
LQx + LQy ≤ Vi ≤ U Qx + U Qy.
Together with the previously established claims that LQx ≤ U Qx and LQy ≤ U Qy, this implies that we can choose Vx and Vy so that Vi = Vx + Vy, as desired.
4 Evaluating Adams and Jefferson
While Theorem 3.1 ensures that both upper and lower quota can be fulfilled in any multi-level apportionment instance, it does not give rise to a method that satisfies house monotonicity. A simple way to create such a method is to take an arbitrary house-monotone single-level method and run it on a multilevel instance one level at a time, starting at the root node and going down the tree—it is clear that if the total number of seats increases, no node receives fewer seats as a result. In this secti-
on, we show that if we take Adams’ method (resp., Jefferson’s method),6 which satisfies upper quota (resp., lower quota) in single-level apportionment, the corresponding quota compliance is preserved in the multi-level setting. We start with Adams’ method, whose multi-level version is displayed as Algorithm 1. The algorithm iteratively allocates one seat at a time based on the existing allocation. We first prove an auxiliary lemma.
Lemma 4.1. Let h ≥ 1. In Algorithm 1, suppose that the nodes that receive the h-th seat are a0, a1, . . . , ak
from top to bottom, where a0 = 0. Then, Vahj−1
Raj−1
≥ Vahj
Raj
for each j ∈ {1, 2, . . . , k}.
6The iterative form of these methods that we use here is described, e.g., by Balinski and Young [2001, p. 100, Prop. 3.3].
5

Algorithm 1: Multi-Level Adams’ Method
Input : List V h representing the allocation for h seats Output: List V h+1 representing the allocation for h + 1 seats
1 V h+1 ← V h // initialize V h+1 to be V h
2 i ← 0 // root node 3 V h+1
i ←Vh
i + 1 // root node always receives the new seat 4 while i is not a leaf node do
5 Let c be a child of i with the smallest Vch
Rc , breaking ties arbitrarily
6 V h+1
c ← Vch + 1 7 i←c
Proof. Fix any j ∈ {1, 2, . . . , k}, and assume for contradiction that Vahj−1
Raj−1
< Vh
d
Rd for all d ∈ C(aj−1).
Then, we have
Vh
aj−1 =
X
d∈C (aj −1 )
Vh
d>
X
d∈C (aj −1 )
Rd · Vahj−1
Raj−1
=Vh
aj−1 ·
P
d∈C(aj−1) Rd
Raj−1
=Vh
aj−1 ,
a contradiction. Hence, Vahj−1
Raj−1
≥ Vh
d
Rd for some d ∈ C(aj−1). Since the algorithm chooses a node aj ∈
C(aj−1) with the smallest Vahj
Raj
, we have Vahj−1
Raj−1
≥ Vahj
Raj
. It follows that Vah0
Ra0
≥ Vah1
Ra1
≥ · · · ≥ Vahk
Rak
.
Theorem 4.2. Algorithm 1 satisfies upper quota and house monotonicity in multi-level apportionment.
Proof. House monotonicity is clear from the iterative nature of the algorithm. We prove by induction on h that, for any h ≥ 0, the allocation of h seats fulfills upper quota. The base case h = 0 is trivial. Assume that h seats have been allocated for some h ≥ 0, and consider the allocation of the (h + 1)-th seat. Let the nodes that receive this seat be a0, a1, . . . , ak from top to bottom, where a0 = 0. It follows
from Theorem 4.1 that Vahj−1
Raj−1
≥ Vahj
Raj
for each j ∈ {1, 2, . . . , k}.
By the induction hypothesis, after the (h + 1)-th seat is allocated, the only potential upper quota violations are those for some node aj with respect to its ancestor al, where l < j. From the previous
paragraph, we know that Vahl
Ral
≥ Vahj
Raj
. Since V h+1
al = Vahl + 1 and V h+1
aj = Vahj + 1, we have V h+1
al −1
Ral
≥
V h+1
aj −1
Raj
, which implies that V h+1
aj ≤ Raj
Ral
· V h+1
al + 1 − Raj
Ral
< Raj
Ral
· V h+1
al + 1. It follows that
V h+1
aj ≤
l Raj
Ral
· V h+1
al
m
, which means that upper quota for aj with respect to al is satisfied upon the
allocation of the (h + 1)-th seat, completing the proof.
We now turn our attention to Jefferson’s method, whose multi-level version is described as Algo
rithm 2. The only difference from Algorithm 1 is in Line 5, where the ratio Vch+1
Rc is used instead of Vch
Rc .
Again, we first establish an auxiliary lemma.
Lemma 4.3. Let h ≥ 0. After h seats have been allocated by Algorithm 2, for any two nodes p and c
such that c ∈ C(p), it holds that Vch+1
Rc ≥ Vph+1
Rp .
Proof. First, we claim that whenever c has just received a seat—say, the g-th seat—it holds that Vcg
Rc ≥
6

Algorithm 2: Multi-Level Jefferson’s Method
Input : List V h representing the allocation for h seats Output: List V h+1 representing the allocation for h + 1 seats
1 V h+1 ← V h // initialize V h+1 to be V h
2 i ← 0 // root node 3 V h+1
i ←Vh
i + 1 // root node always receives the new seat 4 while i is not a leaf node do
5 Let c be a child of i with the smallest Vch+1
Rc , breaking ties arbitrarily
6 V h+1
c ← Vch + 1 7 i←c
Vpg
Rp . Suppose for contradiction that Vcg
Rc < Vpg
Rp . We know that
Vpg
Rp
=
X
c′ ∈C (p)
Vg
c′
Rp
=
X
c′ ∈C (p)
Vg
c′
Rc′
· Rc′
Rp
=
X
c′ ∈C (p)
Vg
c′
Rc′
· Wc′ .
Since P
c′∈C(p) Wc′ = 1 and Vcg
Rc < Vpg
Rp , there exists c∗ ∈ C(p) such that V g
c∗
Rc∗ > Vpg
Rp > Vcg
Rc . Hence, just
before c received this seat, V g−1
c∗
Rc∗ > V g−1
c +1
Rc . However, this means that the last seat allocated to c∗ before this point should have been allocated to c instead, a contradiction that establishes the claim. We now proceed to prove the lemma. Assume for contradiction that for some h, after h seats have
been allocated, Vch+1
Rc < Vph+1
Rp . Let h′ > h be the round in which c receives the next seat; it holds that
V h′−1
c +1
Rc = Vch+1
Rc < Vph+1
Rp ≤ V h′−1
p +1
Rp . Hence, after the h′-th seat has been allocated to c, we have
V h′
c
Rc < V h′
p
Rp . However, this contradicts the claim in the previous paragraph, completing the proof.
Theorem 4.4. Algorithm 2 satisfies lower quota and house monotonicity in multi-level apportionment.
Proof. House monotonicity is clear from the iterative nature of the algorithm. For lower quota, consider any pair of nodes a, b such that a is an ancestor of b. By applying Theorem 4.3 repeatedly along the path between a and b, we have that at any point during the execution of the algorithm, it holds that
Vb+1
Rb ≥ Va+1
Ra . This means that Vb ≥ Rb
Ra · Va − 1 + Rb
Ra > Rb
Ra · Va − 1, so Vb ≥
j Rb
Ra · Va
k
. Hence, lower
quota for b with respect to a is satisfied.
5 Applying the Quota Method
Given the results in Section 4, a natural next approach is to take an iterative method that satisfies both upper and lower quota in single-level apportionment, and apply it level-by-level in the multi-level setting. A well-known method with this property is the quota method [Balinski and Young, 1975, Sec. 5], whose multi-level version is presented as Algorithm 3. The algorithm is the same as multi-level Jefferson (Algorithm 2), except that there is a check against upper quota violations with respe-
ct to the parent of each node (Line 5). We first show that the multi-level quota method satisfies lower quota. The proof proceeds via a similar lemma as for multi-level Jefferson (Theorem 4.3), but proving the lemma is now more involved.
Lemma 5.1. Let h ≥ 0. After h seats have been allocated by Algorithm 3, for any two nodes p and c
such that c ∈ C(p), it holds that Vch+1
Rc ≥ Vph+1
Rp .
7

Algorithm 3: Multi-Level Quota Method
Input : List V h representing the allocation for h seats Output: List V h+1 representing the allocation for h + 1 seats
1 V h+1 ← V h // initialize V h+1 to be V h
2 i ← 0 // root node 3 V h+1
i ←Vh
i + 1 // root node always receives the new seat 4 while i is not a leaf node do
5 Let c be a child of i with the smallest Vch+1
Rc subject to Vch
Wc < V h
i + 1, breaking ties
arbitrarily
6 V h+1
c ← Vch + 1 7 i←c
Proof. It suffices to prove that whenever c has just received a seat, it holds that Vc
Rc ≥ Vp
Rp . Once we have this claim, we can finish the proof of the lemma as in the last paragraph of the proof of Theorem 4.3. Suppose for contradiction that for some h, after the h-th seat has been allocated to c, it holds that
Vch
Rc < Vph
Rp . As in the proof of Theorem 4.3, this means that there exists c∗ ∈ C(p) such that V h
c∗
Rc∗ > Vph
Rp > Vch
Rc . Hence, the set I := {i ∈ C(p) | V h
i
Ri > Vph
Rp } is non-empty and c ̸∈ I. Let g ≥ 0 be the
smallest integer such that V g
i = Vh
i for all i ∈ I. Since c receives the h-th seat, we have g < h. Also,
g = 0 would imply that V g
i = Vh
i = 0 for all i ∈ I, contradicting the definition of I, so g > 0. Let
J := {j ∈ C(p) | V h
j >Vg
j }; by definition, we know that c ∈ J and J ∩ I = ∅. For each j ∈ J, since
j ̸∈ I, we have V h
j
Rj ≤ Vph
Rp . Also, by definition of g, there exists a node i∗ ∈ I that receives the g-th seat.
Thus, for each j ∈ J, we have V g
i∗
Ri∗ = V h
i∗
Ri∗ > Vph
Rp ≥ V h
j
Rj ≥ V g
j +1
Rj . Since j does not receive the g-th seat,
it must be that receiving the g-th seat would violate the upper quota check for j, and so V g
j
Rj ≥ Vpg
Rp .
Summarizing what we have so far, we know that V h
j
Rj ≤ Vph
Rp and V g
j
Rj ≥ Vpg
Rp for all j ∈ J . Combining
them yields V h
j −V g
j
Rj ≤ Vph−Vpg
Rp for all j ∈ J, or equivalently, V h
j −Vg
j ≤ Rj
Rp (Vph − Vpg). Summing this
up across all j ∈ J, we get P
j∈J (V h
j −V g
j )≤
P
j∈J Rj
Rp ·(Vph −Vpg). Since P
j∈J (V h
j −V g
j ) = Vph −Vpg
by definition of J, and Vph − Vpg > 0 because c receives the h-th seat, this simplifies to Rp ≤ P
j∈J Rj .
However, since I is non-empty, we must have P
j∈J Rj < Rp, a contradiction.
With Theorem 5.1 in hand, we can establish lower quota in exactly the same way as for multi-level Jefferson (Theorem 4.4).
Theorem 5.2. Algorithm 3 satisfies lower quota and house monotonicity in multi-level apportionment.
Unfortunately, even though the algorithm has a check against upper quota violations with respect to the parent, this is insufficient to guarantee upper quota in the multi-level setting.
Proposition 5.3. Algorithm 3 fails upper quota in multi-level apportionment.
Proof. Consider the instance where the tree structure is as shown in Figure 3, and assume that there are h = 5 seats to be allocated. Since 4+1
8/9 < 0+1
1/9 and 4
8/9 < 4 + 1, the algorithm allocates all five seats to node 1. By the same reasoning, the algorithm allocates all five seats to node 3. However, since ⌈5 · 8
9·8
9 ⌉ = 4, upper quota for node 3 with respect to node 0 is violated.
8

0
1
3
8 9
4
1 9
8 9
2
1 9
Figure 3: Example tree structure for which Algorithm 3 fails upper quota.
Algorithm 4: Upper-Compliant Multi-Level Quota Method
Input : List V h representing the allocation for h seats Output: List V h+1 representing the allocation for h + 1 seats
1 V h+1 ← V h // initialize V h+1 to be V h
2 i ← 0 // root node 3 V h+1
i ←Vh
i + 1 // root node always receives the new seat
/* Threshold value to prevent upper quota violation. When considering a node c, we have t = mina∈A(c)
Vh
a +1
Ra . */
4 t ← V0h + 1 // Note that, by definition, R0 = 1. 5 while i is not a leaf node do
6 Let c be a child of i with the smallest Vch+1
Rc subject to Vch
Rc < t, breaking ties arbitrarily
7 V h+1
c ← Vch + 1 8 i←c
9 t ← min(t, Vch+1
Rc )
To fix the failure in Theorem 5.3, one could try to prevent upper quota violations of a node not only with respect to its parent, but also with respect to all of its ancestors. The resulting algorithm is shown as Algorithm 4. In order for a node c to be eligible to receive the next seat, the algorithm requires that
Vc
Rc < Va+1
Ra for all a ∈ A(c). Unlike the previous three algorithms, it is not trivial to see that Algorithm 4 is well-defined—that is, if a non-leaf node i receives a seat, then at least one of its children is also eligible to receive the seat. We establish this fact in the following proposition.
Proposition 5.4. Algorithm 4 is well-defined.
Proof. Suppose for contradiction that a node i receives a seat but none of its children is eligible to receive the seat. This means that Vc
Rc ≥ mina∈A(i)∪{i} Va+1
Ra for all c ∈ C(i). If mina∈A(i)∪{i} Va+1
Ra = Vi+1
Ri , we would have
Vi
Ri
=
X
c∈C (i)
Vc
Ri
=
X
c∈C (i)
Vc
Rc
· Wc ≥ Vi + 1
Ri
·
X
c∈C (i)
Wc = Vi + 1
Ri
, (2)
a contradiction. Hence, Vc
Rc ≥ mina∈A(i) Va+1
Ra for all c ∈ C(i). Using the same reasoning as in (2), we
get Vi
Ri ≥ mina∈A(i) Va+1
Ra . However, this means that i should not have received the seat, a contradiction.
Since Algorithm 4 prevents all possible upper quota violations when assigning each seat, upper quota is satisfied. In addition, house monotonicity is fulfilled due to the iterative nature of the algorithm.
Theorem 5.5. Algorithm 4 satisfies upper quota and house monotonicity in multi-level apportionment.
9

0
1
3
5
8 9
6
1 9
9 10
4
1 10
8 9
2
1 9
Figure 4: Example tree structure where Algorithm 4 fails lower quota.
However, the upper quota check across multiple levels can cause lower quota to be violated.
Proposition 5.6. Algorithm 4 fails lower quota in multi-level apportionment.
Proof. Consider the instance where the tree structure is as shown in Figure 4, and assume that there are h = 5 seats to be allocated. As in the proof of Theorem 5.3, the algorithm allocates all five seats
to node 1. Without the upper quota check, node 3 would receive all five seats. However, because
3
(8/9)·(9/10) < 3 + 1 while 4
(8/9)·(9/10) ≥ 4 + 1, it only receives the first four seats. Similarly, because
2
(8/9)·(9/10)·(8/9) < 2 + 1 while 3
(8/9)·(9/10)·(8/9) ≥ 3 + 1, among the four seats that node 3 receives, only
the first three are passed on to node 5. Since ⌊5 · 9
10 · 8
9 ⌋ = 4, this means that lower quota for node 5 with respect to node 1 is violated.
In light of our results, an interesting question is whether there exists a rule that satisfies both upper and lower quota as well as house monotonicity in multi-level apportionment, as the quota method does in single-level apportionment [Balinski and Young, 1975, Thm. 3]. This question is open even when we relax our quota notions to require compliance only relative to the root node (cf. Footnote 4).
6 Experimental Evaluation
To complement our theoretical results, we experimentally evaluate Adams’, Jefferson’s, Quota, and Upper-Compliant (UC) Quota methods (Algorithms 1–4, respectively). In particular, we run experiments with trees of heights 3, 4, 5, and 6, using the following two tree types:
• Full binary tree. Following our claim in Theorem 3.2, an arbitrary instance can be reduced to a full binary tree instance without relaxing any constraints, thereby making full binary trees natural for evaluation. We run tests with n ∈ {15, 31, 63, 127}, which correspond to perfect binary trees. However, since Jefferson’s and Quota methods can be shown to be equivalent when a node has only two children, we also consider another tree type, as explained next.
• Full 4-ary tree. To keep the value of n relatively small, we generate trees in the following manner: if we list the nodes at each level ordered from left to right, then except for the last level, nodes with even indices (0-based) have four children while the remaining nodes have zero children. We run tests with n ∈ {29, 61, 125, 253}; these values arise because the number of nodes at each level are 1, 4, 8, 16, 32, 64, and 128, respectively.
10

For each combination of tree type and n-value, we generate 100,000 instances with random entitlements. We assign entitlements as follows: for each non-leaf node, we generate a random array with length equal to the number of its children, where each entry is an integer between 1 and 10 (inclusive). The entitlement of each child equals its corresponding value divided by the sum of the array. This keeps the ratio of entitlement between any two sibling nodes at most 1 : 10 and the assigned entitlemen-
ts relatively small, which helps avoid precision errors when working with floating-point numbers. We run the four algorithms for each generated instance and analyze the allocation results at h ∈ {100, 500} with respect to the following four metrics:
• Lower quota violation rate. This is calculated by dividing the number of nodes that violate their lower quota (as defined in Section 2) by the value of n, then averaging across all generated instances. The results are presented in Tables 1–2, with Jefferson’s and Quota methods omitted because Theorems 4.4 and 5.2 show that they always satisfy lower quota.
• Upper quota violation rate. This is calculated by dividing the number of nodes that violate their upper quota (as defined in Section 2) by the value of n, then averaging across all generated instances. The results are presented in Tables 3–4, with Adams’ and Upper-Compliant Quota methods omitted because Theorems 4.2 and 5.5 show that they always satisfy upper quota.
• Average deviation. This is calculated by averaging the absolute difference between the number of allocated seats and the strict quota7 across all nodes and generated instances. The results are presented in Tables 5–6.
• Maximum deviation. This is calculated by taking the maximum absolute difference between the number of allocated seats and the strict quota across all nodes and generated instances. The results are presented in Tables 7–8.
Our code is available at https://github.com/stevenwjy/multi-level-apportionment. From the results, we make the following observations:
• As discussed earlier, Jefferson’s and Quota methods yield identical results on binary trees.
• The violations and deviations tend to increase with n for perfect binary trees, but decrease with n for 4-ary trees. We hypothesize that the latter occurs because our construction makes 4-ary trees sparser as the height increases.
• As shown in Tables 1–2, the lower quota violation rate of the Upper-Compliant Quota method is substantially smaller than that of Adams’ method.
• As shown in Table 4, the upper quota violation rate of the Quota method is smaller than that of Jefferson’s method in 4-ary trees.
• As shown in Tables 5–8, the Upper-Compliant Quota method generally exhibits smaller average and maximum deviations than the other three algorithms.
7The strict quota of a node i is defined as Ri · h, where Ri denotes the entitlement of node i relative to the root (as defined in Section 2).
11

Method n = 15 n = 31 n = 63 n = 127
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 1.2747 1.0580 1.4816 1.3939 1.6183 1.5440 1.7694 1.6135
UC Quota 0.0120 0.0087 0.0300 0.0310 0.0502 0.0513 0.0609 0.0655
Table 1: Average lower quota violation rate (% of nodes) for binary tree.
Method n = 29 n = 61 n = 125 n = 253
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 1.6681 1.4281 1.5177 1.5740 0.7814 1.4439 0.3863 0.8205
UC Quota 0.0001 0.0001 0.0000 0.0001 0.0000 0.0001 0.0000 0.0001
Table 2: Average lower quota violation rate (% of nodes) for 4-ary trees. Note that while some values for the Upper-Compliant Quota method appear as 0.0000, they are non-zero but rounded to four decimal places.
Method n = 15 n = 31 n = 63 n = 127
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Jefferson 0.9587 1.1367 1.3113 1.4119 1.4798 1.5552 1.4998 1.6120
Quota 0.9587 1.1367 1.3113 1.4119 1.4798 1.5552 1.4998 1.6120
Table 3: Average upper quota violation rate (% of nodes) for binary tree.
Method n = 29 n = 61 n = 125 n = 253
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Jefferson 1.5021 1.6556 1.1891 1.5936 0.6871 1.2565 0.3452 0.7668
Quota 0.4949 0.4806 0.4916 0.5660 0.2994 0.5209 0.1502 0.3387
Table 4: Average upper quota violation rate (% of nodes) for 4-ary tree.
Method n = 15 n = 31 n = 63 n = 127
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 0.3009 0.2857 0.3251 0.3155 0.3457 0.3315 0.3683 0.3427
Jefferson 0.2850 0.2919 0.3156 0.3191 0.3296 0.3331 0.3288 0.3397
Quota 0.2850 0.2919 0.3156 0.3191 0.3296 0.3331 0.3288 0.3397
UC Quota 0.2628 0.2673 0.2846 0.2864 0.2955 0.2955 0.2983 0.3001
Table 5: Average deviation from strict quota for binary tree.
12

Method n = 29 n = 61 n = 125 n = 253
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 0.3468 0.3227 0.3581 0.3524 0.2757 0.3553 0.1807 0.2824
Jefferson 0.3216 0.3277 0.2896 0.3309 0.2078 0.2949 0.1249 0.2163
Quota 0.3083 0.3116 0.2815 0.3170 0.2038 0.2860 0.1230 0.2117
UC Quota 0.2945 0.2967 0.2712 0.3002 0.1991 0.2739 0.1208 0.2057
Table 6: Average deviation from strict quota for 4-ary tree.
Method n = 15 n = 31 n = 63 n = 127
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 0.7713 0.7438 0.9306 0.9165 1.0777 1.0638 1.2304 1.2050
Jefferson 0.7402 0.7575 0.9118 0.9241 1.0566 1.0685 1.1930 1.2060
Quota 0.7402 0.7575 0.9118 0.9241 1.0566 1.0685 1.1930 1.2060
UC Quota 0.6555 0.6665 0.7589 0.7677 0.8279 0.8364 0.8803 0.8900
Table 7: Maximum deviation from strict quota for binary tree.
Method n = 29 n = 61 n = 125 n = 253
h = 100 h = 500 h = 100 h = 500 h = 100 h = 500 h = 100 h = 500
Adams 0.9832 0.9447 1.1335 1.1171 1.1533 1.2537 1.1568 1.2801
Jefferson 0.9463 0.9701 1.0384 1.1066 1.0852 1.1990 1.1066 1.2412
Quota 0.8382 0.8512 0.9144 0.9356 0.9667 1.0028 0.9969 1.0452
UC Quota 0.7700 0.7877 0.8208 0.8308 0.8889 0.8663 0.9373 0.9154
Table 8: Maximum deviation from strict quota for 4-ary tree.
13

Acknowledgments
This work is partially supported by the Singapore Ministry of Education under grant number MOET2EP20221-0001 and by an NUS Start-up Grant. Part of this research was carried out while Ulrike Schmidt-Kraepelin was supported by the National Science Foundation under Grant No. DMS-1928930 and by the Alfred P. Sloan Foundation under grant G-2021-16778 while being in residence at the Simons Laufer Mathematical Sciences Institute (formerly MSRI) in Berkeley, California, during the Fall 2023 semester. We w-
ould like to thank Ayumi Igarashi for helpful discussions and the anonymous reviewer for valuable feedback.
References
Michel L. Balinski and H. Peyton Young. The quota method of apportionment. American Mathematical Monthly, 82(7):701–730, 1975.
Michel L. Balinski and H. Peyton Young. Fair Representation: Meeting the Ideal of One Man, One Vote. Brookings Institution Press, 2001.
Daniel Bochsler. Who gains from apparentments under D’Hondt? Electoral Studies, 29(4):617–627, 2010.
Steven J. Brams, D. Marc Kilgour, and Richard F. Potthoff. Multiwinner approval voting: an apportionment approach. Public Choice, 178(1–2):67–93, 2019.
Markus Brill, Paul Go ̈lz, Dominik Peters, Ulrike Schmidt-Kraepelin, and Kai Wilker. Approval-based apportionment. Mathematical Programming, 203(1–2):77–105, 2024.
Javier Cembrano, Jose ́ Correa, and Victor Verdugo. Multidimensional political apportionment. Proceedings of the National Academy of Sciences, 119(15):e2109305119, 2022.
Alexander Karpov. Alliance incentives under the D’Hondt method. Mathematical Social Sciences, 74: 1–7, 2015.
Yukio Koriyama, Antonin Mace ́, Rafael Treibich, and Jean-Fran ̧cois Laslier. Optimal apportionment. Journal of Political Economy, 121(3):584–608, 2013.
Peter Leutg ̈ab and Friedrich Pukelsheim. List apparentements in local elections – a lottery. Homo Oeconomicus, 26(3–4):489–500, 2009.
Claire Mathieu and Victor Verdugo. Apportionment with parity constraints. Mathematical Programming, 203(1–2):135–168, 2024.
Friedrich Pukelsheim. Proportional Representation: Apportionment Methods and Their Applications. Springer, 2014.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:11.314Z
- **Text Length:** 38311 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
