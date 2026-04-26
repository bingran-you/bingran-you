# PDF Document: Huang and Bruck - 2017 - Generic Secure Repair for Distributed Storage.pdf

**File Path:** Huang and Bruck - 2017 - Generic Secure Repair for Distributed Storage.pdf

**Processed Date:** 2026-02-10T18:17:11.945Z

**File Size:** 2019.02 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2733

**Title:** Generic Secure Repair for Distributed Storage

**Collection:** Large Files

---

## Extracted Text Content

1
Generic Secure Repair for Distributed Storage
Wentao Huang and Jehoshua Bruck
California Institute of Technology, Pasadena, USA {whuang,bruck}@caltech.edu
Abstract
This paper studies the problem of repairing secret sharing schemes, i.e., schemes that encode a message into n shares, assigned to n nodes, so that any n − r nodes can decode the message but any colluding z nodes cannot infer any information about the message. In the event of node failures so that shares held by the failed nodes are lost, the system needs to be repaired by reconstructing and reassigning the lost shares to the failed (or replacement) nodes. This can be achieved trivially by a trust-
worthy third-party that receives the shares of the available nodes, recompute and reassign the lost shares. The interesting question, studied in the paper, is how to repair without a trustworthy third-party. The main issue that arises is repair security: how to maintain the requirement that any colluding z nodes, including the failed nodes, cannot learn any information about the message, during and after the repair process? We solve this secure repair problem from the perspective of secure multi-p-
arty computation. Specifically, we design generic repair schemes that can securely repair any (scalar or vector) linear secret sharing schemes. We prove a lower bound on the repair bandwidth of secure repair schemes and show that the proposed secure repair schemes achieve the optimal repair bandwidth up to a small constant factor when n dominates z, or when the secret sharing scheme being repaired has optimal rate. We adopt a formal information-theoretic approach in our analysis and bounds. A main-
 idea in our schemes is to allow a more flexible repair model than the straightforward one-round repair model implicitly assumed by existing secure regenerating codes. Particularly, the proposed secure repair schemes are simple and efficient two-round protocols.
I. INTRODUCTION
The problem of repairing secret sharing schemes has attracted significant interests recently. Specifically, a secret sharing scheme encodes a message into n shares, such that the message can be decoded from any n − r shares (reliability), and that any z shares are independent of the message (security). In the setting of distributed storage, a system consists of n nodes and one share is assigned to each node. Therefore a secret sharing scheme can tolerate r node failures (erasures) as well as z col-
luding adversarial nodes trying to infer information about the message. In the event of node failures, the shares held by the failed nodes are lost and in order to maintain the same level of reliability, the system needs to repair the failures by reconstructing the lost shares and reassigning them to the failed (or replacement) nodes. Two problems arise during the repair process, namely, 1) bandwidth efficiency: it is desirable to minimize the amount of communication induced by the repair process;-
 2) repair security: the system needs to maintain the security requirement that any colluding z nodes, including the failed (or replacement) nodes, cannot infer any information about the message, during and after the repair process. Secure regenerating codes, e.g., [11], [13], [12], [10], [9], [16], [4], are a class of secret sharing schemes that are carefully designed to address the above problems. We classify secure regenerating codes into two categories: codes that only address the bandwidth ef-
ficiency problem (i.e., codes with non-secure repair), and codes that address both the bandwidth efficiency and the repair security problems (i.e., codes with secure repair). Specifically, codes with non-secure repair focus on reducing the repair bandwidth without worrying about the security of the repair process. For example, the codes that tolerate Type-I adversary in [16] and the codes in [6] belong to this category. For this case one can think of having a trustworthy repair dealer that will re-
ceive information from the available helper nodes, reconstruct the lost share and then forward it to the failed node. The repair dealer may receive enough information to gain knowledge of the message, and therefore has to be trustworthy. In comparison, regenerating codes with secure repair guarantee by code design that such a dealer will not learn any information about the message. This in fact removes the need for the dealer to be trustworthy and the failed node can act as the dealer. Unfortunate-
ly, the guarantee that the dealer cannot learn any information about the message is shown to come at a high cost in rate [11], [16], because more independent randomness (keys) is required in order to protect the message from the dealer, resulting in increased overhead. Therefore, codes with non-secure repair in general have a significantly better rate and repair bandwidth (when normalized by rate) than codes with secure repair. In this paper we address the problem of repair security from a differe-
nt perspective, without needing to take the heavy penalty in rate and other aspects of efficiency as in the case of secure regenerating codes. The key idea is that we allow a more flexible repair protocol: secure regenerating codes implicitly assume a simple “one-round” repair protocol, in which the helper nodes transmit information to the failed nodes but they themselves do not receive information from other nodes. This implicit “one-round” assumption is expensive in terms of efficiency. We show -
that, just by slightly relaxing this assumption and allowing a “two-round” protocol, it becomes possible to securely repair any secret sharing scheme in a black-box manner, in the sense that the proposed repair protocol is generic and there is no need to design or modify the secret sharing scheme. Refer to Figure 1 for a simple example of the two-round secure repair protocol. We remark that a two-round protocol is advantageous in that more nodes are allowed to receive information rather than only -
the failed node. This is intuitively beneficial because, if d > z nodes can receive information, then we can take advantage
arXiv:1706.00500v1 [cs.IT] 1 Jun 2017

2
of the gap between d and z in the following way. During the repair process, let the information received by any z nodes be independent randomness (so that the security requirement is met), and let the information received by all d nodes reveal useful information on the lost share. We then use an extra round of communication to transmit the information on and only on the lost share from the d nodes to the failed node so that the lost share can be reconstructed. Loosely speaking, we can think of the-
 repair process as letting the failed node “compute” its share securely, so that it only learns the share but nothing else. This is naturally related to the problem of secure multi-party computation and the ideas in [1], [2] play an important role in our repair schemes. We remark that we adopt a formal information-theoretic approach in our analysis and bounds, which differs from many existing works on secure multi-party computation. We also note that relaxing the repair process to involve more tha-
n one round is practical. For example, POTSHARDS [15] employs a heuristic multi-round repair scheme to improve the security of the repair process. Our generic secure repair schemes have two important advantages over secure regenerating codes with secure repair. First, the generic nature implies that there is no need to compromise the efficiency of the secret sharing scheme for secure repair. Here, aspects of efficiency at stake are not limited to the rate and repair bandwidth discussed earlier, bu-
t also include, for example, computational complexity [5] and decoding bandwidth [8], as it is not clear how to construct secure regenerating codes with optimal computation or decoding bandwidth. Second, most secure regenerating codes focus on secure repair by a fixed number of helper nodes. In the case that not enough helper nodes are available due to multiple node failures, it is not clear how secure repair can be achieved. We briefly summarize the contributions of the paper. In Section II, we p-
resent a generic two-round secure repair scheme based on the ideas in [1], [2]. Specifically, in the first round each helper node encodes its share into z + 1 pieces using a secret sharing scheme, so that any z pieces reveal no information about the share and that the share can be decoded from z + 1 pieces. The z + 1 pieces are sent to z + 1 receiver nodes, and each receiver node receives a piece from each helper node (if the helper node and the receiver node are the same node, then the correspond-
ing piece needs not be transmitted). For example, in Figure 1-(b), the helper nodes and receiver nodes are both Nodes 2 and 3. The set of pieces received by all receiver nodes contains enough information to decode the shares of all helper nodes and the lost share. We then need to communicate the information about the lost share, but no extra information about the shares of the helper nodes, to the failed node. To achieve this, each receiver node locally computes a function that takes the pieces re-
ceived by the node as inputs, and outputs a “distilled” piece such that the set of “distilled” pieces only contains information about the lost share. This set is then transmitted from the receiver nodes to the failed node. Refer to Figure 1-(c) for an example. The generic repair scheme in Section II requires a relatively large repair bandwidth. In Section III, we reduce the repair bandwidth of the scheme significantly by adopting the idea of parallelism in [3]. Instead of repairing one single shar-
e at a time, we repair multiple shares together in parallel, therefore amortizing the communication overhead over the multiple shares. This is achieved by letting all n nodes be receiver nodes (instead of z + 1 nodes) and by using a secret sharing scheme of a higher rate in the first round. The larger gap between the number of receiver nodes and z implies that we can encode more information in the secret sharing scheme (so that it has a higher rate) and can repair more shares in parallel. The gene-
ric repair schemes in Sections II and III can securely repair any scalar linear secret sharing schemes. A more general class of schemes are vector linear secret sharing schemes. For a vector linear scheme over a field, each node stores multiple elements of the field instead of a single element as in the scalar linear case. Many efficient secret sharing schemes, e.g., schemes with efficient decoding bandwidth [8], [6], schemes with efficient computation [5], [7], and schemes with efficient repair b-
andwidth [13], [6], are intrinsically vector linear. In Section IV we generalize our secure repair schemes to generically repair any vector linear schemes. In particular, this generalization allows us to leverage the property of secret sharing schemes with efficient (non-secure) repair bandwidth, i.e., secure regenerating codes with non-secure repair, to further reduce the (secure) repair bandwidth. Finally, in Section V we prove an information-theoretic lower bound on the repair bandwidth of secu-
re repair schemes. The bound implies that the secure repair schemes in Sections III and IV achieve the optimal repair bandwidth within a small constant factor when n dominates z, or when the secret sharing scheme being repaired has optimal rate.
II. GENERIC SECURE REPAIR
Secret sharing schemes address the problem of storing a secret message securely and reliably. Specifically, an (n, k, r, z) secret sharing scheme over Fq is a randomized function that maps (encodes) a message m = (m1, · · · , mk) of k symbols over Fq to n shares c = (c1, · · · , cn) over Fq, such that 1) m can be decoded from any subset of n − r shares; 2) any subset of z shares do not reveal information on m. Shamir’s scheme is a well known secret sharing scheme with k = 1.
Construction 1. (Shamir’s scheme [14]) For any n, and z < n, let k = 1, r = n − z − 1 and Fq be a finite field of size q > n. Let ui, i ∈ [z] be i.i.d. uniformly distributed over Fq (also referred to as keys) and let αi, i ∈ [n] be arbitrary distinct

3
(a) A secret sharing scheme over F5 with r = 1 and z = 1, where m is a message symbol and u is a random key uniformly distributed over F5. We denote the three shares by c1, c2 and c3.
(b) Repairing Node 1 (round 1): Node 2 generates a random symbol u2 and sends u2 + c2 to Node 3. Node 3 generates a random symbol u3 and sends it to Node 2.
(c) Repairing Node 1 (round 2): Node 2, having access to u2 and u3, computes and sends 2u2 + 4u3 to Node 1. Node 3, having access to u2 + c2, u3 and c3, computes and sends 2u2 + 4u3 + 2c2 + 4c3 to Node 1. Node 1 can reconstruct its share since c1 = 2c2 + 4c3.
Fig. 1: Securely repairing a secret sharing scheme. Note that it is impossible to securely repair any node failure under the one-round repair model of regenerating codes, because for the failed node to reconstruct its share it has to collect the shares from the other two nodes, which will violate the security requirement. However, any node failure can be securely repaired by the two-round scheme shown above. To see that the scheme is secure, note that after the repair process Node 1 has access to -
c1 and 2u2 + 4u3; Node 2 has access to c2, u2 and u3; Node 3 has access to c3, u3 and u2 + c2. Therefore, any single node has access to only one share as well as some random symbols that are independent of the shares. Therefore no single node can learn any information about the message m.
non-zero elements of Fq. The shares corresponding to message m1 are
(c1, c2, · · · , cn) = (m1, u1, u2, · · · , uz)

   
1 1 ··· 1 α1 α2 · · · αn
... ... ... ...
αz1 αz2 · · · αzn

   
. (1)
Lemma 1. Let ci, i ∈ [n] be the shares of Shamir’s scheme (1) on message m1 and keys ui, i ∈ [z], and let c′
i, i ∈ [n] be the
shares of the scheme on message m′1 and keys u′
i, i ∈ [z]. Then for arbitrary linear function f : Fq2 → Fq, f (ci, c′
i), i ∈ [n]
are the shares of the scheme on message f (m1, m′1) and keys f (ui, u′
i), i ∈ [z].
Proof. Follows from the linearity of (1).
A secret sharing scheme allows secure and reliable storage of information, i.e., it can tolerate the loss of any r shares as well as the exposure of any z shares to an adversary. However, the problem of repair is not addressed. Consider the situation that one or more shares are lost or unavailable, and so in order to maintain the same level of reliability one needs to reconstruct the lost shares. For example, in the application of storage, the n shares are assigned to n storage nodes, and in the s-
ituation of node failures, one wishes to repair the failures by reconstructing the shares originally assigned to the failed nodes. The repair problem can be easily solved if there is a trusted dealer, who can collect the available shares, recompute the lost shares and reassign them to the failed or replacement nodes. However, the assumption of a trusted dealer responsible for centralized repair may not be practical in many applications. In this paper we study the situation that a trusted repair de-
aler is not available and the nodes holding the shares are responsible for carrying out the repair by themselves. A naive approach is to transmit the available shares to the failed node so that it can

4
recompute its share. By doing so, however, information about the message may be leaked to the failed node. Therefore, the main question of interest is how to repair securely without a trusted dealer. Below we utilize the ideas developed in secure multi-party computation [1], [2], [3], to design mechanisms to securely repair secret sharing schemes. We first formalize the notion of secure repair. Throughout the paper, for a vector such as (m1, · · · , mk) and an index set I, we denote {mi : i ∈ I} b-
y mI .
Definition 1. (Secure repair scheme) Consider an (n, k, r, z) secret sharing scheme and n nodes such that node i holds the share ci. For any e ∈ [n], and I ⊂ [n], suppose that node e fails and nodes in I are available to help repairing node e. A secure repair scheme is a protocol of communication between the nodes, such that 1) the information sent by a node to other nodes is a function of the share it holds, its local coin flips, and the information it received from other nodes; 2) denote by di a-
ll the information received by node i from the protocol and denote by ui the result of coin flips at node i, then
• (Repairability) H(ce|de) = 0. • (Security) I(m; cA, uA, dA) = 0, for all A ⊂ [n], |A| = z.
Note that Definition 1 naturally extends the threat model of secret sharing, e.g., it maintains the security requirement that any z nodes cannot learn any information about the message, during and after the repair process.
Construction 2. (Generic secure repair) Consider any (n, k, r, z) secret sharing scheme, any e ∈ [n], and any I = {i1, · · · , i|I|} ⊂ [n], e ∈/ I such that there exists a linear function f so that f (ci1 , ci2 , · · · , ci|I| ) = ce. Let J = {j1, · · · , jz+1} be an arbitrary subset of [n] of size z + 1. The secure repair process involves three steps:
1) For each node i ∈ I, encode ci into ci,1, ci,2, · · · , ci,z+1 by a (z + 1, 1, 0, z) Shamir’s scheme (in Construction 1 all nodes choose the same αi’s) and send ci,k to node jk ∈ J. 2) For each node j ∈ J, compute c′
j = f (ci1,j , ci2,j , · · · , ci|I|,j ), and send c′
j to node e.
3) Node e obtains ce by decoding the (z + 1, 1, 0, z) Shamir’s scheme, regarding c′
j1 , c′
j2 , · · · , c′
jz+1 as the z + 1 shares.
Theorem 1. Construction 2 is a secure repair scheme.
Proof. We need to show that Construction 2 meets the repairability and security requirements in Definition 1. By Lemma 1, c′
j1 , c′
j2 , · · · , c′
jz+1 are the shares of a (z + 1, 1, 0, z) Shamir’s scheme that encodes f (ci1 , ci2 , · · · , ci|I| ) = ce as message. This proves repairability. We now focus on security. Let A be an arbitrary set of nodes controlled by the adversary, with |A| = z. We consider two cases. Case 1: e ∈/ A. In this case dj = (ci1,j, ci2,j, · · · , ci|I|,j) if j ∈ J , and dj = 0 if j ∈/ J . Denote cA,B = {ci,j : i ∈ A, j ∈ B}, we have
I(m; cA, uA, dA) = I(m; cA, uA, cI,J∩A) (2)
(a=) I(m; cA, uA, cI\A,J∩A)
(b=) I(m; cA, uA|cI\A,J∩A) + I(m; cI\A,J∩A)
(c)
≤ I(m; cA, uA|cI\A,J∩A) + I(c; cI\A,J∩A)
(d=) I(m; cA, uA|cI\A,J∩A)
(e=) I(m; cA, uA)
(f=) I(m; cA)
(g=) 0. (3)
Here (a) is due to the fact that cI∩A,J is a function of cA and uA; (b) follows from the chain rule; (c) follows from the data processing inequality and the Markov chain m → c → cI\A,J∩A, i.e., cI\A,J∩A can be dependent on m only via c; (d) follows from the fact that cI\A,J∩A are the shares of |I\A| independent (z + 1, 1, 0, z) secret sharing schemes and that for each scheme at most |J ∩ A| ≤ z of its shares are included; (e) follows from the fact that (m, cA, uA) ⊥ cI\A,J∩A, implied by (d); (f) f-
ollows from (m, cA) ⊥ uA ; and (g) follows from security of the secret sharing scheme being repaired. Case 2: e ∈ A. Since |A| = z and |J| = z +1, J\A is not empty. Assume with out loss of generality that j1 ∈ J\A. Because c′
j1 , c′
j2 , · · · , c′
jz+1 are the shares of a (z+1, 1, 0, z) Shamir’s scheme that encodes ce, it follows that I(ce; c′
j2 , c′
j3 , · · · , c′
jz+1 ) = 0
and that there exists a linear function g such that g(c′
j1 , c′
j2 , · · · , c′
jz+1 ) = ∑z+1
k=1 gkc′
jk = ce. This implies that g1 6= 0 and so c′
j1 = (ce − ∑z+1
k=2 gkc′
jk )g−1
1 , namely,
H (c′
j1 |ce, c′
J\{j1}) = 0. (4)

5
We have,
I(m; cA, uA, dA) = I(m; cA, uA, c′
J , cI,A∩J )
(h)
≤ I(m; cA, uA, c′
J , cI,J\{j1})
(i=) I(m; cA, uA, c′
J\{j1}, cI,J\{j1})
(j=) I(m; cA, uA, cI,J\{j1}). (5)
Here (h) follows from A∩J ⊂ J\{j1}; (i) follows from (4); and (j) follows from the fact that c′
J\{j1} is a function of cI,J\{j1}. We continue the chain of inequality by treating (5) in a similar way as Case 1. Namely, applying an argument similar to that of (2) - (3), we have
I(m; cA, uA, dA) ≤ I(m; cA, uA, cI,J\{j1})
= I(m; cA, uA, cI\A,J\{j1})
= I(m; cA, uA|cI\A,J\{j1}) + I(m; cI\A,J\{j1})
≤ I(m; cA, uA|cI\A,J\{j1}) + I(c; cI\A,J\{j1})
= I(m; cA, uA|cI\A,J\{j1})
= I(m; cA, uA)
= I(m; cA)
= 0.
The proof is complete.
We remark that Construction 2 is a generic scheme that can securely repair any linear secret sharing scheme. Particularly, it does not require modifying the secret sharing scheme. In a sense this suggests that secure repair “comes for free” without needing to compromise other aspects of efficiency of the scheme. In comparison, the secure regenerating codes in [11], [13], [12], [16] allow secure repair at the cost of reducing rate. We also remark that multiple failures can be repaired securely by i-
nvoking Construction 2 multiple times. We analyze the repair bandwidth, i.e., the total amount of information that is communicated during the repair process. In Step 1, at most |I|(z + 1) symbols are transmitted and in Step 2, at most z + 1 symbols are transmitted. Therefore the total repair bandwidth is at most (|I| + 1)(z + 1) symbols, which is approximately z + 1 times of the non-secure repair bandwidth |I |.
III. REDUCING THE SECURE REPAIR BANDWIDTH
While Construction 2 provides a generic approach to repair secret sharing schemes securely, it incurs a large overhead in the repair bandwidth. In this section we propose an improved generic secure repair scheme with a significantly better repair bandwidth. The main idea is that, instead of repairing one single share/symbol at a time, we repair multiple shares together in parallel, and therefore amortizing the communication overhead over the multiple shares. For this to work we need every node to -
store multiple shares, which is typically the case because the amount of information to be stored (e.g., a file) usually exceeds the amount of information that can be stored by a single secret sharing scheme. Therefore the file will be split and stored by multiple independent instances of a secret sharing scheme, resulting in multiple shares to be assigned to a node. In the reminder of the paper we assume that there are enough shares in the failed node to be repaired. Then, the main improvement is-
 that in the first round of the repair scheme, rather than using a low rate (z + 1, 1, 0, z) secret sharing scheme, we use a high rate (n, n − z, 0, z) scheme. This allows one to repair n − z shares in parallel and reduce the amortized overhead in the repair bandwidth (which are the z keys in the secret sharing schemes of the first round) by n − z times. Formally, we assume that each node stores n − z shares from n − z independent instances of a secret sharing scheme. We use superscripts to index -
instances, e.g., m(i) = (m(i)
1 , · · · , m(i)
k ) is the message encoded by the i-th instance. In the first round of repair we use a high rate secret sharing scheme defined in Construction 3, which is a generalization of Shamir’s scheme to the case of k > 1.
Construction 3. (Ramp version of Shamir’s scheme [3], [8]) For any n, r, z such that n > r + z, let k = n − r − z and Fq be a finite field of size q > n. Let ui, i ∈ [z] be i.i.d. uniformly distributed over Fq and let αi, i ∈ [n] be arbitrary distinct non-zero elements of Fq. The shares corresponding to message m = (m1, m2, · · · , mk) are
(c1, c2, · · · , cn) = (m1, · · · , mk, u1, · · · , uz)

   
1 1 ··· 1 α1 α2 · · · αn
... ... ... ...
αz+k−1
1 αz+k−1
2 · · · αz+k−1
n

   
.

6
Construction 3 is an (n, k = n − r − z, r, z) secret sharing scheme [8].
Construction 4. (Bandwidth-efficient secure repair) Consider any (n, k, r, z) secret sharing scheme, any e ∈ [n], and any I = {i1, · · · , i|I|} ⊂ [n], e ∈/ I such that there exists a linear function f so that f (ci1 , ci2 , · · · , ci|I| ) = ce. The secure repair process involves three steps: 1) For each node i ∈ I, encode c(1)
i , c(2)
i , · · · , c(n−z)
i into ci,1, ci,2, · · · , ci,n by a (n, n − z, 0, z) scheme according to Construction 3 (all nodes should choose the same αi’s) and send ci,j to node j. 2) For each node j ∈ [n], compute c′
j = f (ci1,j , ci2,j , · · · , ci|I|,j ), and send c′
j to node e.
3) Node e obtains c(1)
e , c(2)
e , · · · , c(n−z)
e by decoding the (n, n − z, 0, z) scheme, regarding c′1, c′2, · · · , c′n as the n shares.
Theorem 2. Construction 4 is a secure repair scheme.
Proof. Similar to Theorem 1, repairability follows from the linearity of Construction 3, which implies that c′
[n] are the
shares of a (n, n − z, 0, z) secret sharing scheme that encodes (f (c(1)
i1 , c(1)
i2 , · · · , c(1)
i|I| ), · · · , f (c(n−z)
i1 , c(n−z)
i2 , · · · , c(n−z)
i|I| )) = (c(1)
e , · · · , c(n−z)
e ) as message. Focusing on security, let A ⊂ [n], |A| = z be an arbitrary set of nodes controlled by the adversary, then by the property of Construction 3 it follows that c[n−z]
e ⊥ c′
A and H(c′
A) = z. We have
H (c′
[n]\A|c[n−z]
e , c′
A) (=a) H (c[n−z]
e , c′
[n]) − H(c[n−z]
e , c′
A) (6)
(b)
≤ H(c[n−z]
e ) + z − H(c[n−z]
e , c′
A)
(=c) H (c[n−z]
e ) + z − H(c[n−z]
e |c′
A) − H(c′
A)
(=d) H (c[n−z]
e ) + z − H(c[n−z]
e ) − H(c′
A)
= z − H(c′
A)
(=e) 0. (7)
Here (a) and (c) follows from the chain rule; (b) follows from the fact that c′
[n] is a function of c[n−z]
e and z random keys; (d)
follows from c[n−z]
e ⊥ c′
A and (e) follows from H(c′
A) = z. Consider the case that e ∈ A, we have
I(m[n−z]; c[n−z]
A , uA, dA) = I(m[n−z]; c[n−z]
A , uA, c′
[n], cI,A) (8)
(f=) I(m[n−z]; c[n−z]
A , uA, c′
A, cI,A)
(g=) I(m[n−z]; c[n−z]
A , uA, cI,A), (9)
(h=) I(m[n−z]; c[n−z]
A , uA, cI\A,A)
(i=) I(m[n−z]; c[n−z]
A , uA|cI\A,A) + I(m[n−z]; cI\A,A)
(j)
≤ I(m[n−z]; c[n−z]
A , uA|cI\A,A) + I(c[n−z]; cI\A,A)
(k=) I(m[n−z]; c[n−z]
A , uA|cI\A,A)
(l=) I(m[n−z]; c[n−z]
A , uA)
(m =) I(m[n−z]; c[n−z]
A)
(n=) 0, (10)
where (f) follows from (7); (g) follows from the fact that c′
A is a function of cI,A; (h) follows from the fact that cA,A is a
function of c[n−z]
A and uA; (i) follows from the chain rule; (j) follows form the Markov chain m[n−z] → c[n−z] → cI\A,A and the data processing inequality; (k) follows from the fact that cI\A,A are the shares of |I\A| independent (n, n − z, 0, z) secret sharing schemes and that for each scheme only |A| = z of its shares are included; (l) follows from the fact that
(m[n−z], c[n−z]
A , uA) ⊥ cI\A,A, implied by (k); (m) follows from (m[n−z], c[n−z]
A ) ⊥ uA; and (n) follows from security of the secret sharing scheme being repaired. For the case that e ∈/ A, we have I(m[n−z]; c[n−z]
A , uA, dA) = I(m[n−z]; c[n−z]
A , uA, cI,A), which can be treated in the same way as (9) - (10). The proof is complete.
In Step 1, at most |I|n symbols are communicated and in Step 2, at most n symbols are communicated. Therefore the total repair bandwidth is at most (|I| + 1)n symbols, for repairing n − z symbols. The normalized repair bandwidth to repair each symbol is at most (|I|+1)n
n−z symbols. In the case that n dominates z, the normalized repair bandwidth approaches |I| + 1

7
symbols. Note that |I| is the non-secure repair bandwidth and a trivial lower bound on the secure repair bandwidth. Therefore when n dominates z (e.g., the high rate case), the secure repair bandwidth of Construction 4 is essentially optimal. Specifically, it is essentially the same as the non-secure repair bandwidth, implying that we can have secure repair essentially for free, even in terms of repair bandwidth.
IV. VECTOR LINEAR SECURE REPAIR
The secure repair schemes in Constructions 2 and 4 deal with scalar secret sharing schemes, i.e., schemes that are linear over a finite field and such that each share is an element of the field. A more general class of secret sharing schemes are vector linear secret sharing schemes, also referred to as array schemes. A vector linear (n, k, r, z) secret sharing scheme over Ftq is a
randomized function that maps (encodes) a message m = (m1, · · · , mk) of k symbols over Ftq to n shares c = (c1, · · · , cn) over
Ftq, such that the encoding function is linear over Fq and that the same reliability and security requirements as before are met. We denote mi = (mi,1, mi,2, · · · , mi,t), where mi,j ∈ Fq, for i ∈ [k], j ∈ [t]. Similarly we denote ci = (ci,1, ci,2, · · · , ci,t), for i ∈ [n]. Note that scalar schemes are special cases of vector schemes with t = 1. Many efficient secret sharing schemes, e.g., schemes with efficient decoding bandwidth [8], [6], schemes with efficient computation [5], [7], and schem-
es with efficient repair bandwidth [13], [6], are intrinsically vector linear. In this section we extend our secure repair framework to vector linear schemes. This is especially interesting because it allows us to leverage the property of secret sharing schemes with efficient (non-secure) repair bandwidth, i.e., secure regenerating codes, to further reduce the (secure) repair bandwidth. We remark that existing secure regenerating codes can be classified into two categories: codes with non-secure r-
epair and codes with secure repair. Secure regenerating codes with non-secure repair focus on reducing the repair bandwidth without worrying about the security of the repair process. In this case one can think of having a trustworthy repair dealer that will reconstruct the lost share and forward it to the failed node. As remarked previously, during the repair process the dealer may gain information about the message and therefore has to be trustworthy. In comparison, regenerating codes with secure-
 repair, by code design, guarantee that such a dealer will not learn any information about the message. This in fact removes the need for the dealer to be trustworthy and the failed node can act as the dealer. In this sense, secure regenerating codes with secure repair naturally admit a secure repair scheme that meets Definition 1. Particularly, the secure repair scheme is a simple “one-round” scheme in the sense that the helper nodes will transmit information to the failed node but they themselve-
s do not need to receive information from other nodes. Unfortunately, one-round secure repair comes at a high cost in rate and codes with non-secure repair generally have a much better rate as well as repair bandwidth when normalized by rate than codes with secure repair [11], [16]. Our main result in this section implies that this trade-off between rate and secure repair is not necessary: we can apply our generic approach to secure regenerating codes with non-secure repair to achieve secure repai-
r, a good rate, and a good repair bandwidth. The only cost is that the repair process now involves two rounds instead of one round.
Construction 5. (Vector linear secure repair) Consider any vector linear (n, k, r, z) secret sharing scheme over Ftq, any e ∈ [n], and any I = {i1, · · · , i|I|} ⊂ [n], e ∈/ I such that there exists J ⊂ [t] and a linear function f over Fq that takes ci,j, i ∈ I, j ∈ J as input and outputs ce = (ce,1, ce,2, · · · , ce,t). The secure repair process involves three steps:
1) For each node i ∈ I, and j ∈ J, encode c(1)
i,j , c(2)
i,j , · · · , c(n−z)
i,j into ci,j,1, ci,j,2, · · · , ci,j,n by a (n, n − z, 0, z) scheme according to Construction 3 (all nodes choosing the same α1, α2 · · · , αn) and send ci,j,k to node k. 2) For each node k ∈ [n], compute (c′
k,1, c′
k,2, · · · , c′
k,t) = f (ci,j,k)i∈I,j∈J , and send c′
k,j, j ∈ [t] to node e.
3) For j ∈ [t], node e obtains c(1)
e,j , c(2)
e,j , · · · , c(n−z)
e,j by decoding the (n, n − z, 0, z) scheme, regarding c′
1,j , c′
2,j , · · · , c′
n,j as
the n shares.
Theorem 3. Construction 5 is a secure repair scheme.
Proof. As in Theorem 2, repairability follows from the linearity of Construction 3, which implies that c′
1,j , c′
2,j , · · · , c′
n,j are the shares of a (n, n − z, 0, z) secret sharing scheme that encodes c(1)
e,j , c(2)
e,j , · · · , c(n−z)
e,j as message, for j ∈ [t]. We now turn to security, and follow a similar flow as Theorem 2. Let A ⊂ [n], |A| = z be an arbitrary set of nodes controlled by the adversary, then by the property of Construction 3 it follows that c[n−z]
e ⊥ c′
A,j = 0 and H(c′
A,j) = z, for j ∈ [t]. We have, for j ∈ [t],
H (c′
[n]\A,j |c[n−z]
e,j , c′
A,j ) = H(c[n−z]
e,j , c′
[n],j ) − H (c[n−z]
e,j , c′
A,j ) ≤ H(c[n−z]
e,j ) + z − H(c[n−z]
e,j , c′
A,j ) = H(c[n−z]
e,j ) + z − H(c[n−z]
e,j |c′
A,j ) − H(c′
A,j ) = H(c[n−z]
e,j ) + z − H(c[n−z]
e,j ) − H(c′
A,j )
= z − H(c′
A,j )
= 0, (11)

8
where the justification for the steps are similar to that of (6) - (7). (11) implies that
H (c′
[n]\A,[t]|c[n−z]
e,[t] , c′
A,[t]) = 0. (12)
Now consider the case that e ∈ A, we have
I(m[n−z]; c[n−z]
A,[t] , uA, dA) = I(m[n−z]; c[n−z]
A,[t] , uA, c′
[n],[t], cI,J,A)
(=a) I(m[n−z]; c[n−z]
A,[t] , uA, c′
A,[t], cI,J,A)
= I(m[n−z]; c[n−z]
A,[t] , uA, cI,J,A), (13)
= I(m[n−z]; c[n−z]
A,[t] , uA, cI\A,J,A)
= I(m[n−z]; c[n−z]
A,[t] , uA|cI\A,J,A) + I(m[n−z]; cI\A,J,A)
≤ I(m[n−z]; c[n−z]
A,[t] , uA|cI\A,J,A) + I(c[n−z]; cI\A,J,A)
(b=) I(m[n−z]; c[n−z]
A,[t] , uA|cI\A,J,A)
= I(m[n−z]; c[n−z]
A,[t] , uA)
= I(m[n−z]; c[n−z]
A,[t] )
= 0, (14)
where (a) follows from (12); (b) follows from the fact that cI\A,J,A are the shares of |I\A|·|J| independent (n, n−z, 0, z) secret sharing schemes and that for each scheme only |A| = z of its shares are included; and the remaining equalities/inequalities are similar to (8) - (10).
For the case that e ∈/ A, we have I(m[n−z]; c[n−z]
A,[t] , uA, dA) = I(m[n−z]; c[n−z]
A,[t] , uA, cI,J,A), which can be treated in the same way as (13) - (14). The proof is complete.
Consider the repair bandwidth of the scheme. In Step 1, at most n|I||J| symbols (over Fq) are transmitted and in Step 2, at most nt symbols are transmitted. Therefore, the total repair bandwidth is at most (|I||J| + t)n symbols, for repairing (n − z)t symbols. The normalized repair bandwidth to repair each symbol is at most (|I||J|+t)n
(n−z)t symbols. In the case that n dominates
z, the normalized repair bandwidth approaches |I||J|
t + 1. Note that the normalized non-secure repair bandwidth is |I||J|
t , and therefore in this case the the secure repair bandwidth of Construction 5 is essentially optimal and is almost the same as the non-secure repair bandwidth. The MSR secure regenerating codes in [13], [6] have optimal rate as well as optimal non-secure repair bandwidth (among rate-optimal schemes). Specifically, the rate of the scheme is n−k−z
n , and that for |I| helper nodes to non-securely repair a
failed node, each helper node will transmit 1/(1 + |I| − k − z) fraction of the symbols it stores, i.e., |J| = t
1+|I|−k−z . By
applying Construction 5 to these codes, we obtain schemes with optimal rate and low secure repair bandwidth. In the next section we will show that the secure repair bandwidth is in fact optimal up to a small constant factor.
V. LOWER BOUND ON SECURE REPAIR BANDWIDTH
The bandwidths of Construction 4 and Construction 5 are significantly better than Construction 2. A natural question is whether it is possible to do even better, or in other words, what is a lower bound on the secure repair bandwidth. As we previously remarked, when n dominates z, the bandwidths of Constructions 4 and 5 approach the non-secure repair bandwidth, which is a naive lower bound. Therefore in this case the bandwidths of Constructions 4 and 5 are asymptotically optimal. In this section, -
we prove a stronger lower bound on the secure repair bandwidth and show that the bandwidths of Constructions 4 and 5 are optimal for all parameters up to a constant factor of 2, as long as the secret sharing scheme being repaired is rate-optimal. Assume that a trustworthy repair dealer is available. The dealer will receive information from the helper nodes, evaluate a repair function that outputs the lost share, and reassign the share. In this case, the repair bandwidth is the size of the input to-
 the repair function plus the size of the lost share. Now consider the situation that a trustworthy dealer is not available and a secure repair scheme is used for repair. The secure repair scheme essentially is a method to evaluate the repair function (e.g., f in Constructions 2, 4 and 5) securely at the failed node, and the repair bandwidth again depends on the size of the input to the repair function. The repair function is an intrinsic component of the secret sharing scheme and the size of the -
input can be minimized by carefully designing the secret sharing scheme, e.g., [13], [6]. Refer to the size of the input to the repair function as the non-secure repair bandwidth of a secret sharing scheme. Below we prove a lower bound on the repair bandwidth of secure repair schemes, given the non-secure repair bandwidth of the secret sharing scheme.
Theorem 4. For any rate-optimal (n, k = n − r − z, r, z) secret sharing scheme, let W be the non-secure repair bandwidth of the scheme, then a secure repair scheme requires a bandwidth of at least (n−1)W
2(n−z−1) .

9
Proof. Note that k = n − r − z implies that the scheme is rate-optimal [8]. Let the message m = (m1, m2, · · · , mk) be uniformly distributed. Then for any I ⊂ [n], |I| = k + z and J ⊂ I, |J| = z, by the security and the decodability of the scheme we have I(m; cJ ) = 0 and I(m; cI ) = H(m) = k. It follows that
I(m; cI\J |cJ ) = H(m|cJ ) − H(m|cI )
= H(m) − H(m|cI )
= I(m; cI )
= k. (15)
Since |I\J | = k, H(cI\J ) ≤ k, and hence (15) implies that H(cI\J ) = k and cI\J ⊥ cJ and that
H(cI\J |m, cJ ) = 0. (16)
Therefore among the n shares of the secret sharing scheme, any |I\J| = k shares are uniformly distributed and that any |J| = z shares are independent of any other k shares. This in turn implies that any k + z shares are uniformly distributed, i.e.,
H(cI ) = k + z. (17)
Assume that ce is lost, and for i ∈ [n]\{e}, let wi be the information sent by node i to node e for non-secure repair, namely, the input signal to the repair function from node i (with the convention that wi = 0 if node i does not participate in the repair). Then wi is a function of ci and ∑
i∈[n]\{e} H(wi) = W . Now consider any secure repair protocol, and for i ∈ [n]\{e}, j ∈ [n], let vi,j be the set of signals that are sent to node j by node i or sent to node i by node j during the protocol (with the convention that vi,i = ∅). Then wi must be a function of the signals incoming to and outgoing from node i, namely, H(wi|vi,[n]) = 0, implying that
I(wi; vi,[n]) = H(wi). (18)
Let A be an arbitrary set of nodes controlled by the adversary such that i ∈/ A, |A| = z, and let B be an arbitrary set of nodes such that i ∈ B, |B| = k, A ∩ B = ∅. We have
I(wi; vi,A) = H(wi) − H(wi|vi,A)
(a=) H(wi|cA) − H(wi|vi,A)
≤ H(wi|cA) − H(wi|vi,A, cA)
= I(wi; vi,A|cA)
(b)
≤ I(ci; vi,A|cA)
≤ I(cB; vi,A|cA)
(c=) I(m; vi,A|cA)
(d=) I(m; vi,A|cA) + I(m; cA)
= I(m; vi,A, cA)
(e=) 0. (19)
Here (a) follows from the fact that wi is a function of ci and by (17), ci ⊥ cA; (b) follows from the data processing inequality and the fact that wi is a function of ci; (c) follows from the data processing inequality and (16), i.e., cB is a function of m given cA; (d) follows from the security of the secret sharing scheme; and (e) follows from the security of the repair scheme. Let
A∗ = argmax
A⊂[n]\{i},|A|=z
∑
l∈A
H (vi,l ),
and let A ̄∗ = [n]\({i} ∪ A∗), then for j ∈ A ̄∗ and j∗ ∈ A∗, H(vi,j) ≤ H(vi,j∗ ). We have
H(vi,A ̄∗ ) ≥ I(wi; vi,A ̄∗ |vi,A)
(f=) I(wi; vi,A ̄∗ |vi,A) + I(wi; vi,A)
= I(wi; vi,[n])
(g=) H(wi),
where (f) follows from (19) and (g) follows from (18). Therefore there exist j ∈ A ̄∗ such that H(vi,j) ≥ H(wi)/|A ̄∗| and so

10
for j∗ ∈ A∗, H(vi,j∗ ) ≥ H(wi)/(n − z − 1). Therefore the amount of information transmitted and received by node i is lower bounded by
∑
j∈[n]
H(vi,j ) ≥ H(vi,A ̄∗ ) + |A∗| H(wi)
n−z−1
= (n − 1)H(wi)
n − z − 1 . (20)
Summing (20) over all i ∈ [n]\{e}, it follows that the amount of information transmitted and received by nodes in [n]\{e} is at least (n−1)W
n−z−1 . Since the amount of communication is counted exactly twice, i.e., when information is transmitted and when
it is received, the repair bandwidth of the scheme is lower bounded by (n−1)W
2(n−z−1) . This completes the proof.
The bandwidths of Constructions 4 and 5 are upper bounded by (W +1)n
n−z , and therefore are optimal up to a factor of approximately 2 by Theorem 4.
VI. CONCLUDING REMARKS
This paper studies the problem of repairing lost shares of a secret sharing scheme without a trustworthy repair dealer. We design generic repair schemes that can securely repair any (scalar or vector) linear secret sharing schemes. We prove a lower bound on the repair bandwidth of secure repair schemes and show that the proposed secure repair schemes achieve the optimal repair bandwidth up to a small constant factor when n dominates z, or when the secret sharing scheme being repaired has optimal r-
ate. An interesting open problem is to study the secure repair bandwidth under the general repair model when the secret sharing scheme being repaired is not rate-optimal. More generally, while the tradeoff between repair bandwidth and rate has attracted significant interests under the one-round repair model, under the general repair model whether a tradeoff exists or not and how to characterize it remain open. Another interesting open problem is to study secure repair in the presence of active adv-
ersarial nodes that may deviate from the prescribed repair protocol.
REFERENCES
[1] M. Ben-Or, S. Goldwasser, and A. Wigderson, “Completeness theorems for non-cryptographic fault-tolerant distributed computation,” in ACM symposium on Theory of computing, 1988, pp. 1–10.
[2] D. Chaum, C. Crpeau, and I. Damgrd, “Multiparty unconditionally secure protocols,” in ACM symposium on Theory of computing, 1988, pp. 11–19. [3] M. Franklin and M. Yung, “Communication complexity of secure computation,” in ACM symposium on Theory of computing, 1992, pp. 699 – 710. [4] K. Huang, U. Parampalli, and M. Xian, “On secrecy capacity of minimum storage regenerating codes,” IEEE Transactions on Information Theory, vol. 63, no. 3, pp. 1510 – 1524, 2017. [5] W. Huang and J. Bruck, “Secur-
e RAID schemes for distributed storage,” in IEEE International Symposium on Information Theory (ISIT), 2016. [6] W. Huang and J. Bruck, “Secret sharing with optimal decoding and repair bandwidth,” in IEEE International Symposium on Information Theory (ISIT), 2017. [7] W. Huang and J. Bruck, “Secure RAID schemes from EVENODD and STAR codes,” in IEEE International Symposium on Information Theory (ISIT), 2017. [8] W. Huang, M. Langberg, J. Kliewer, and J. Bruck, “Communication efficient secret sharin-
g,” IEEE Transactions on Information Theory, vol. 62, no. 12, pp. 7195–7206, 2016. [9] S. Kadhe and A. Sprintson, “Weakly secure regenerating codes for distributed storage,” in International Symposium on Network Coding, 2014. [10] O. O. Koyluoglu, A. S. Rawat, and S. Vishwanath, “Secure cooperative regenerating codes for distributed storage systems,” IEEE Transactions on Information Theory, vol. 60, no. 9, pp. 5228 – 5244, 2014. [11] S. Pawar, S. E. Rouayheb, and K. Ramchandran, “Securing dynamic -
distributed storage systems against eavesdropping and adversarial attacks,” IEEE Transactions on Information Theory, vol. 57, no. 10, pp. 6734–6753, 2011.
[12] A. S. Rawat, O. O. Koyluoglu, N. Silberstein, and S. Vishwanath, “Optimal locally repairable and secure codes for distributed storage systems,” IEEE Transactions on Information Theory, vol. 60, no. 1, pp. 212 – 236, 2014.
[13] N. B. Shah, K. V. Rashmi, and P. V. Kumar, “Information-theoretically secure regenerating codes for distributed storage,” in IEEE GLOBECOM 2011. IEEE, 2011, pp. 1–5. [14] A. Shamir, “How to share a secret,” Communications of the ACM, vol. 22, no. 11, pp. 612–613, 1979. [15] M. W. Storer, K. M. Greenan, E. L. Miller, and K. Voruganti, “Potshards - a secure, recoverable, long-term archival storage system,” ACM Transactions on Storage, vol. 5, no. 2, pp. 1–35, 2009. [16] R. Tandon, S. Amuru, T. -
C. Clancy, and R. M. Buehrer, “Toward optimal secure distributed storage systems with exact repair,” IEEE Transactions on Information Theory, vol. 62, no. 6, pp. 3477–3492, 2016.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:11.945Z
- **Text Length:** 44108 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
