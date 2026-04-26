# PDF Document: Sánchez-Fernández et al. - 2016 - Proportional Justified Representation.pdf

**File Path:** Sánchez-Fernández et al. - 2016 - Proportional Justified Representation.pdf

**Processed Date:** 2026-02-10T18:16:11.007Z

**File Size:** 318.60 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2724

**Title:** Proportional Justified Representation

**Collection:** Large Files

---

## Extracted Text Content

Proportional Justified Representation
Luis Sa ́nchez-Fern ́andez
Universidad Carlos III de Madrid, Spain luiss@it.uc3m.es
Edith Elkind
University of Oxford, United Kingdom elkind@cs.ox.ac.uk
Martin Lackner
University of Oxford, United Kingdom martin.lackner@cs.ox.ac.uk
Norberto Fern ́andez
Escuela Naval Militar (CUD), Spain norberto@cud.uvigo.es
Jes  ́us A. Fisteus
Universidad Carlos III de Madrid, Spain jaf@it.uc3m.es
Pablo Basanta Val
Universidad Carlos III de Madrid, Spain pbasanta@it.uc3m.es
Piotr Skowron
University of Oxford, United Kingdom p.k.skowron@gmail.com
Abstract
The goal of multi-winner elections is to choose a fixed-size committee based on voters’ preferences. An important concern in this setting is representation: large groups of voters with cohesive preferences should be adequately represented by the election winners. Recently, Aziz et al. (2015a; 2017) proposed two axioms that aim to capture this idea: justified representation (JR) and its strengthening extended justified representation (EJR). In this paper, we extend the work of Aziz et al. in severa-
l directions. First, we answer an open question of Aziz et al., by showing that Reweighted Approval Voting satisfies JR for k = 3, 4, 5, but fails it for k ≥ 6. Second, we observe that EJR is incompatible with the Perfect Representation criterion, which is important for many applications of multi-winner voting, and propose a relaxation of EJR, which we call Proportional Justified Representation (PJR). PJR is more demanding than JR, but, unlike EJR, it is compatible with perfect representation, and-
 a committee that provides PJR can be computed in polynomial time if the committee size divides the number of voters. Moreover, just like EJR, PJR can be used to characterize the classic PAV rule in the class of weighted PAV rules. On the other hand, we show that EJR provides stronger guarantees with respect to average voter satisfaction than PJR does.
1 Introduction
Decision-making based on the aggregation of possibly conflicting preferences is a central problem in the field of social choice, which has received a considerable amount of attention from the artificial intelligence researchers (Conitzer 2010; Brandt et al. 2016). The most common preference aggregation scenario is the one where a single candidate has to be selected. However, there are also many applications where the goal is to select a fixed-size set of alternatives: example range from choosing a-
 parliament or a committee to identifying a set of plans, allocating resources, shortlisting candidates for a job or an award, picking movies to be shown on a plane or creating a conference program (Barbera` and Coelho 2008; Monroe 1995; Elkind et al. 2015; Skowron et al. 2015; Elkind et al. 2017). Recently, the complexity of multi-winner voting rules (Betzler et al. 2013; Aziz et al. 2015b) and their social choice properties (Elkind
Copyright c© 2015, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
et al. 2015; Aziz et al. 2015a; Aziz et al. 2017; Elkind et al. 2017) have been actively explored by the artificial intelligence research community. Multi-winner voting rules are often applied in scenarios in which the set of winners needs to represent the different opinions or preferences of the agents involved in the election. Thus, it is important to formulate axioms that capture our intuition about what it means for a set of winners to provide a faithful representation of voters’ preferences (-
Monroe 1995; Dummet 1984; Black 1958). Aziz et al. (2015a; 2017) have recently proposed two such axioms for approvalbased multi-winner voting, namely justified representation (JR) and extended justified representation (EJR). Intuitively, JR requires that a large enough group of agents with similar preferences is allocated at least one representative; EJR says that if this group is large enough and cohesive enough, it deserves not just one, but several representatives (see Section 2 for formal defi-
nitions). Similar axioms have been proposed for multi-winner voting rules with ranked ballots (Dummet 1984; Elkind et al. 2017). Aziz et al. show that for every collection of ballots there is a winning set that provides EJR; they then explore a number of popular multi-winner voting rules and show that several of them satisfy JR, but only one rule satisfies EJR. Our first contribution in this paper is to answer a question left open by Aziz et al. Specifically, Aziz et al. prove that Reweighted Appr-
oval Voting (RAV)1 satisfies JR if the desired number of winners k is 2 but it fails JR if k ≥ 10. We close this gap and prove that RAV satisfies JR if k ≤ 5 and fails JR if k ≥ 6. Our proof proceeds by constructing and solving a linear program that establishes bounds on RAV scores. We then formulate an axiom that we call Perfect Representation (PR), which says that if a given instance admits a ‘perfect solution’ (all voters are represented, and each winner represents the same number of voters), t-
hen we expect a voting rule to output such a solution. This axiom is very appealing in parliamentary elections and similar applications of multi-winner voting. However, it turns out to be incompatible with EJR: there is an election where these two axioms correspond to disjoint sets of winning committees.
1In the journal version of their paper, Aziz et al. (2017) refer to this rule as Sequential Approval Voting (SeqAV).
arXiv:1611.09928v1 [cs.GT] 29 Nov 2016

Motivated by this result, we propose a relaxation of EJR, which we call Proportional Justified Representation (PJR). PJR is more demanding than JR, but, unlike EJR, it is compatible with perfect representation, and a committee that provides PJR can be computed in polynomial time; in particular, we show that a well-studied efficiently computable voting rule satisfies PJR if the committee size k divides the number of voters n. In contrast, it is conjectured that finding committees that provide EJR -
is computationally hard. Moreover, just like EJR, PJR can be used to characterize the classic Proportional Approval Voting (PAV) in the class of weighted PAV rules. However, we then show that the additional flexibility supplied by PJR comes at a cost: we define a measure of average voter satisfaction and show that EJR provides much stronger guarantees with respect to this measure than PJR does. We conclude the paper by discussing our results and indicating directions for future work.
2 Preliminaries
Given a positive integer s, we denote the set {1, . . . , s} by [s]. We consider elections with a set of voters N = {1, . . . , n} and a set of candidates C = {c1, . . . , cm}. Each voter i ∈ N submits an approval ballot Ai ⊆ C, which represents the subset of candidates that she approves of. We refer to the list A = (A1, . . . , An) as the ballot profile. An approval-based multi-winner voting rule takes as input a tuple (N, C, A, k), where k is a positive integer that satisfies k ≤ |C|, and return-
s a subset W ⊆ C of size k, which we call the winning set, or committee. We omit N and C from the notation when they are clear from the context. The following voting rules have received a considerable amount of attention in the literature (Kilgour 2010; Elkind et al. 2017; Aziz et al. 2015a; Aziz et al. 2017):
Proportional Approval Voting (PAV) Under PAV, an agent is assumed to derive an utility of 1 + 1
2+1
3 +···+ 1
j from a committee that contains exactly j of her approved candidates, and the goal is to maximize the sum of the agents’ utilities. Formally, the PAV-score of a set W ⊆ C is defined as ∑
i∈N r(|W ∩ Ai|), where r(p) = ∑
j∈[p]
1
j , and PAV outputs a set W ⊆ C of size k with the highest PAV-score. We can generalize the definition of PAV by using an arbitrary non-increasing score vector in place of (1, 1
2, 1
3 , · · · ):
for every vector w = (w1, w2, . . .), where w1, w2, . . . are non-negative reals, w1 = 1 and w1 ≥ w2 ≥ . . ., we define a voting rule w-PAV that, given a ballot profile (A1, . . . , An) and a target number of winners k, returns a set W of size k with the highest w-PAV score, defined as
∑
i∈N rw(|W ∩ Ai|), where rw(p) = ∑
j∈[p] wj .
Reweighted Approval Voting (RAV) RAV is a multi-round rule that in each round selects a candidate and then reweighs the approvals for the subsequent rounds. Specifically, it starts by setting W = ∅. Then in round j, j ∈ [k], it computes the approval weight of each candidate c as
∑
i:c∈Ai
1
1 + |W ∩ Ai| ,
selects a candidate with the highest approval weight, and adds her to W . Just as for PAV, we can extend the definition
of RAV to score vectors other than (1, 1
2, 1
3 , · · · ): every vec
tor w = (w1, w2, . . .), where w1, w2, . . . are non-negative reals, w1 = 1 and w1 ≥ w2 ≥ . . . defines a sequential voting rule w-RAV, which proceeds as RAV, except that it computes the approval weight of a candidate c in round j as
∑
i:c∈Ai w|W ∩Ai|+1, where W is the winning set after the
first j − 1 rounds.
The Monroe rule For each voter i ∈ N and each candidate c ∈ C we write ui(c) = 1 if c ∈ Ai and ui(c) = 0 if c 6∈ Ai. Given a committee W ⊆ C of size k, we say that a mapping π : N → W is valid if it satisfies |π−1(c)| ∈ {b n
k c, d n
k e}
for each c ∈ W . The Monroe score of a valid mapping π is given by ∑
i∈N ui(π(i)), and the Monroe score of W is
the maximum score of a valid mapping from N to W . The Monroe rule returns a committee of size k with the maximum Monroe score.
The Greedy Monroe rule Given a ballot profile A = (A1, . . . , An) over a candidate set C and a target committee size k, the Greedy Monroe rule proceeds in k rounds. It maintains the set of available candidates C′ and the set of unsatisfied voters N ′; initially C′ = C and N ′ = N . It starts by setting W = ∅. In round t, t = 1, . . . , k, it selects a candidate ct from C′ and a group of voters Nt from N ′
of size approximately n
k (specifically, d n
k e if t ≤ n − kb n
k c,
and b n
k c if t > n − kb n
k c) so as to maximize the quan
tity |{i ∈ Nt : ct ∈ Ai}| over all possible choices of (Nt, ct). The candidate ct is then added to W , and we set
C′ = C′ \ {ct}, N ′ = N ′ \ Nt. We say that the candidates in Nt are assigned to ct. After k rounds, the rule outputs W .
PAV and RAV were defined by Thiele (1895). The Monroe rule was proposed by Monroe (1995) and Greedy Monroe is due to Skowron et al. (2015) (Skowron et al. define this rule for the setting where ballots are rankings of the candidates; we adapt their definition to approval ballots). For PAV and Monroe finding a winning committee is NP-hard (Aziz et al. 2015b; Procaccia et al. 2008), whereas for RAV and Greedy Monroe winning committees can be computed in polynomial time; in fact, RAV and Greedy Monro-
e were originally proposed as approximation algorithms for PAV and Monroe, respectively. Under each of the rules we consider, there may be more than one winning committee. In what follows, we assume that all ties are broken in some deterministic way; none of our results depends on the tie-breaking rule. We will now define the key concepts in the work of Aziz et al. (2015a; 2017): justified representation and extended justified representation.
Definition 1. (Extended) justified representation ((E)JR) Consider a ballot profile A = (A1, . . . , An) over a candidate set C and a target committee size k, k ≤ |C|. Given a positive integer ` ∈ [k], we say that a set of voters N ∗ ⊆ N is `-cohesive if |N ∗| ≥ ` n
k and | ⋂
i∈N∗ Ai| ≥ `. A set
of candidates W is said to provide `-justified representation (`-JR) for (A, k) if there does not exist an `-cohesive set of voters N ∗ such that |Ai ∩ W | < ` for each i ∈ N ∗. We say that W provides justified representation (JR) for (A, k) if it provides 1-JR for (A, k); it provides extended justified representation (EJR) for (A, k) if it provides `-JR for (A, k) for

all ` ∈ [k]. An approval-based voting rule satisfies `-JR if for every ballot profile A and every target committee size k it outputs a committee that provides `-JR for (A, k). A rule satisfies JR (respectively, EJR) if it satisfies `-JR for ` = 1 (respectively, for all ` ∈ [k]).
By definition, EJR implies JR. Aziz et al. (2015a; 2017) show that PAV satisfies EJR (and hence JR), Monroe satisfies JR, but fails EJR, and RAV fails JR for sufficiently large values of k; they do not consider Greedy Monroe in their work.
3 Justified Representation and RAV
Aziz et al. (2015a; 2017) prove that RAV satisfies JR for k = 2, but fails it for k ≥ 10. Whether RAV satisfies JR for k = 3, . . . , 9 was left an open problem. The following theorem provides a complete answer.
Theorem 1. RAV satisfies JR for k ≤ 5 but fails it for k ≥ 6.
Proof. For each k ∈ N, we construct a linear program LPk whose value is the maximum possible ‘relative’ approval weight of a yet unelected candidate (i.e., the ratio between her approval weight and the total number of voters) after k − 1 steps of RAV. Fix a k ∈ N. We can assume without loss of generality that RAV elects a committee {c1, . . . , ck}, where for i ∈ [k] candidate ci is added to the committee in round i; our linear program includes constraints that impose this order. Moreover, as non--
elected candidates do not have any influence on the approval weight under RAV, we may assume that C = {c1, . . . , ck}. For i ∈ [k], we write Ci = {c1, . . . , ci}.
LPk has a variable xA for each nonempty candidate subset A ⊆ Ck; this variable corresponds to the fraction of voters that submit the approval ballot A. The objective function of LPk is the ratio of the approval weight of candidate ck and the total number of agents n after candidates {c1, . . . , ck−1} have already been elected. The constraints say that all variables should be non-negative and sum up to 1, and that RAV can select ci in round i, for i ∈ [k − 1].
maximize
∑
A:ck ∈A
xA
1 + |Ck−1 ∩ A| subject to
xA ≥ 0 for all A ⊆ Ck; (1)
∑
A⊆C
xA = 1; (2)
∑
A:ci ∈A
xA
1 + |Ci−1 ∩ A| ≥
∑
B:cj ∈B
xB
1 + |Ci−1 ∩ B| (3)
for i = 1, . . . , k − 1 and for j = i + 1, . . . , k.
The number of variables in LPk grows exponentially with k, but this is not an issue, because we only have to solve this linear program for small values of k. Solving LPk for k = 3, 4, 5, 6, we obtain the following result.
Lemma 1. For k = 6 the value of LPk is 0.204 > 1
k−1 . For
k = 3, 4, 5 the value of LPk is smaller than 1
k−1 .
Consider an optimal solution (xA)A⊆C6 of LP6. We can find a positive integer n such all values nA = xA · n for A ⊆ C6 are integer, and construct an n-voter ballot profile A = (A1, . . . , An) where each ballot A ⊆ C6 occurs exactly nA times; moreover, we can pick n so that n/5 is an integer. Lemma 1 implies that when we execute RAV on (A, k), in each round RAV selects a candidate whose approval weight is at least 0.204n. Now, consider the ballot A′ = (A′1, . . . , A′
6n/5) over C7 = C6 ∪ {c7} where A′
i = Ai for i ∈ [n] and each of the the additional n/5 voters has Ai = {c7}. Suppose that we
run RAV on A′ with k = 6. As we have 1
6 · (6n/5) = n/5,
the JR axiom requires that c7 is elected. However, this does not happen: at each point the approval weight of c7 is n/5, whereas by Lemma 1 in each round RAV can find a candidate whose approval weight is at least 0.204n > n/5. In the appendix, we provide a concrete implementation of this idea: we describe an election with 5992 candidates on which RAV fails JR for k = 6. We also explain how to extend this example to k > 6. We will now show that RAV satisfies JR for k = 3, 4, 5. Suppose for the sake-
 of contradiction that RAV violates JR for some n-voter ballot profile A and some k ∈ {3, 4, 5}. That is, for some way of breaking ties RAV outputs a win
ning set W and there exists a set of voters N ∗ of size at least
n
k such that all voters in N ∗ approve some candidate c, yet
no voter in N ∗ approves any candidate in W . Let w be the candidate that is added to W during the k-th round. Consider a ballot profile A′ obtained from A by removing all voters in N ∗, and suppose that we execute RAV on (A′, k). It is possible to break intermediate ties in the execution of RAV so that RAV outputs W on (A′, k), and, moreover, candidates are added to W in the same order on both inputs. Indeed, as none of the candidates in W is approved by the voters in N ∗, removing these voters d-
oes not change the approval weights of the candidates in W in each round of RAV, and can only lower the scores of the other candidates. Thus, we can assume that RAV selects W , and, moreover, adds w to W at the k-th step. We can now apply Lemma 1 to A′, which contains at most n′ = n − n
k = n k−1
k voters; by the lemma, when w is
added to W , its approval weight is strictly less than n′
k−1 =
n
k . Since none of the removed voters approved w, when
RAV is executed on A, candidate w’s approval weight in the k-th round is also strictly less than n
k . But this means
that RAV should have favored c over w in the k-th round, a contradiction.
4 Perfect Representation
A key application of multi-winner voting is parliamentary elections, where an important goal is to select a committee that reflects as fairly as possible the different opinions or preferences that are present in a society. Fairness in this context means that each committee member should represent approximately the same number of voters and as many voters as possible should be represented by a committee member that they approve. From this perspective, the best-case scenario is when each voter is re-
presented by a candidate

that she approves and each winning candidate represents exactly the same number of voters. Thus, we may want our voting rules to output committees with this property whenever they exist. This motivates the following definition.
Definition 2. Perfect representation (PR) Consider a ballot profile A = (A1, . . . , An) over a candidate set C, and a target committee size k, k ≤ |C|, such that k divides n. We say that a set of candidates W , |W | = k, provides perfect representation (PR) for (A, k) if it is possible to partition N into k pairwise disjoint subsets N1, . . . , Nk of size n
k each
and assign a distinct candidate from W to each of these subsets in such a way that for each ` ∈ [k] all voters in N` approve their assigned member of W . An approval-based voting rule satisfies PR if for every profile A and every target committee size k the rule outputs a committee that provides PR for (A, k) whenever such a committee exists.
An example of a voting rule that satisfies PR is the Monroe rule: a committee that provides perfect representation for an n-voter ballot profile has the Monroe score of n, i.e., the maximum possible score, whereas the Monroe score of any committee that does not provide perfect representation is at most n − 1. We note that the PR axiom is quite demanding from a computational perspective: the problem of deciding whether there exists a committee that provides PR for a given pair (A, k) is NP-complete-
.
Theorem 2. Given a ballot profile A and a target committee size k, it is NP-complete to decide whether there exists a committee that provides PR for (A, k).
Proof sketch. To show containment in NP, we reduce the problem of checking whether a given committee W provides perfect representation for (A, k) to the problem of finding a b-matching in a bipartite graph that can be associated with A and W ; the latter problem admits a polynomial-time algorithm (Anstee 1987). To prove NP-hardness, we adapt a reduction of Procaccia et al. (2008), which shows that finding a winning committee under the Monroe rule is NP-hard. The details can be found in the appendi-
x.
Remark 1. Theorem 2 immediately implies that, unless P=NP, RAV and Greedy Monroe fail PR; it is also not hard to construct specific examples on which these rules fail PR. As for PAV, Theorem 3 below implies that it also fails PR.
Viewed from a different perspective, PR is a rather weak axiom: it only constrains the behavior of a voting rule on inputs that admit a committee that provides PR. In particular, this axiom has no bite if k does not divide n. Also, unlike EJR, PR does not engage with the idea that a voter may benefit from being represented by more than one candidate. Thus, we may want a voting rule to satisfy both PR and another representation axiom, such as, e.g., EJR. However, this turns out to be impossible: PR-
 and EJR are incompatible.
Theorem 3. There exists a ballot profile A and a target committee size k such that the set of committees that provide PR for (A, k) is non-empty, but none of the committees in this set provides EJR.
Proof. Let C = {c1, . . . , c6}, and consider a ballot profile A = (A1, . . . , A8) where Ai = {ci}, Ai+4 = {ci, c5, c6} for i = 1, . . . , 4. Observe that W = {c1, c2, c3, c4} is the unique committee of size 4 that provides PR for (A, 4). However, W fails to provide EJR: {A5, A6, A7, A8} is a 2cohesive set of voters, but each of these voters only approves one candidate in W .
This motivates the following question: can we find a weakening of the EJR axiom that still provides meaningful guarantees to large cohesive groups of voters, yet is compatible with PR? We address this question in the next section.
5 Proportional Justified Representation
The EJR axiom provides the following guarantee: at least one member of an `-cohesive group has at least ` representatives in the committee. This focus on a single group member does not quite reflect our intuition of what it means for a group to be well-represented. A weaker and perhaps more natural condition is to require that collectively the members of an `-cohesive group are allocated at least ` representatives. This idea is captured by the following definition.
Definition 3. Proportional justified representation (PJR) Given a ballot profile A = (A1, . . . , An) over a candidate set C and a target committee size k, k ≤ |C|, we say that a set of candidates W , |W | = k, provides proportional justified representation (PJR) for (A, k) if for every ` ∈ [k] and every `-cohesive set of voters N ∗ ⊆ N it holds that |W ∩ (⋃
i∈N∗ Ai)| ≥ `. We say that an approval-based vot
ing rule satisfies proportional justified representation (PJR) if for every ballot profile A and every target committee size k it outputs a committee that provides PJR for (A, k).
It is immediate that every committee that provides PJR also provides JR: the PJR condition for ` = 1 is exactly JR. Also, it is easy to see that every committee that provides EJR also provides PJR: the condition “|Aj ∩ W | ≥ ` for some
i ∈ N ∗” in the definition of EJR implies the condition “|W ∩ (
⋃
i∈N∗ Ai)| ≥ `” in the definition of PJR. To summarize, we obtain the following proposition.
Proposition 1. EJR implies PJR, and PJR implies JR.
Moreover, unlike EJR, PJR is compatible with PR.
Theorem 4. For every profile A = (A1, . . . , An) and every target committee size k, if a set of candidates W , |W | = k, provides PR, then W also provides PJR.
Proof. Observe that because W provides PR, k divides n. Let W = {w1, . . . , wk}. As W provides PR, there exist
k pairwise disjoint subsets N1, . . . , Nk of size n
k each such
that all voters in Ni approve wi for each i ∈ [k]. Consider
a set of agents N ∗ ⊆ N and a positive integer ` such that |N ∗| ≥ ` n
k . By the pigeonhole principle, N ∗ has a non
empty intersection with at least ` of the sets N1, . . . , Nk. As
each voter in N ∗ ∩ Ni approves wi, it follows that the the
number of candidates in W approved by some voter in N ∗ must be greater than or equal to `.
Another advantage of PJR is that a committee that provides PJR can be computed in polynomial time as long as the

target committee size k divides the number of voters n; indeed, under this condition both the Monroe rule and Greedy Monroe (the latter of which is polynomial-time computable) provide PJR. We note that PAV satisfies EJR and hence PJR even if k does not divide n; however, computing the output of PAV is NP-hard.
Theorem 5. Consider a ballot profile A = (A1, . . . , An). If the target committee size k divides n then the outputs of Monroe and Greedy Monroe on (A, k) satisfy PJR.
Proof. We provide a proof for Greedy Monroe; the proof for Monroe can be found in the appendix. Let s = n
k ; note that s ∈ N. Suppose for the sake of
contradiction that the set W output by Greedy Monroe fails PJR for some ` ∈ [k] and some `-cohesive set of voters N ∗; we can assume that |N ∗| = ` · s. Consider a candidate c ∈ C \ W that is approved by all voters in N ∗. By the pigeonhole principle N ∗ has a non-empty intersection with at least ` of the sets N1, . . . , Nk constructed by Greedy Monroe (the integrality of s is crucial here); let the first ` of these sets be Ni1 , . . . , Ni` with i1 < · · · < i`.
For each t = 1, . . . , `, pick a voter in Nit ∩ N ∗; note that all these voters are assigned to different candidates in W . Now, if each of these ` voters approves the candidate she is assigned to, we are done, as we have identified ` distinct candidates in W each of which is approved by some voter in N ∗. Otherwise, let j = min{it :
the voter we chose in Nit ∩ N ∗ does not approve of cit }. By our choice of j, not all voters in Nj approve cj, yet the pair (Nj, cj) was chosen at step j. Among the sets N1, . . . , Nj−1 there are at most ` − 1 sets of size s each that
have a non-empty intersection with N ∗, so at step j at least s voters in N ∗ are present in N ′ (N ′ is the set of unsatisfied voters; see the definition of Greedy Monroe in section 2). Now, candidate c, together with s voters from N ∗ ∩ N ′, would be a better choice for Greedy Monroe than (Nj, cj), a contradiction.
We remark that if n
k is not an integer, the proof of Theo
rem 5 breaks down, because N ∗ may be covered by fewer than ` sets among N1, . . . , Nk. The following example shows that both of these rules may fail PJR in this case.
Example 1. Let n = 10, k = 7, C = {c1, . . . , c8}. Suppose that Ai = {ci} for i = 1, . . . , 4 and Ai = {c5, c6, c7, c8}
for i = 5, . . . , 10. Let ` = 4. Then ` · n
k = 40
7 < 6, so the set
of voters {5, 6, 7, 8, 9, 10} “deserves” four representatives. However, under both Monroe and Greedy Monroe only three candidates from {c5, c6, c7, c8} will be selected.
It is then natural to ask if there is a polynomial-time computable voting rule that satisfies PJR for all values of n and k. Interestingly, it turns out that the answer to this question is ‘yes’: in a very recent paper, Brill et al. (2017) describe an approval-based multi-winner rule developed by the Swedish mathematician Lars Edvard Phragme ́n more than 100 years ago, and show that a sequential variant of this rule, which they refer to as seq-Phragmen, is polynomialtime computable and provides PJ-
R. Another voting rule with this combination of properties is the ODH rule, which has been proposed by Sa ́nchez-Ferna ́ndez et al. in a recent
arXiv preprint (Sa ́nchez-Ferna ́ndez et al. 2016). Interestingly, both rules are extensions of the D’Hondt seat allocation method (Farrell 2011) to approval-based multi-winner elections. Moreover, PJR inherits a useful feature of EJR: it characterizes PAV within the class of w-PAV rules.
Proposition 2. The rule w-PAV satisfies PJR if and only if w = (1, 1
2, 1
3 , . . . ).
Proof sketch. If w = (1, 1
2, 1
3 , . . . ) then w-PAV satisfies
EJR (as shown by Aziz et al. (2015a; 2017)) and hence PJR. The converse statement is proved by reusing the key lemmas from the respective proof for EJR in the work of Aziz et al. (2015a; 2017); see appendix for details.
In contrast, all w-RAV rules fail PJR.
Proposition 3. The rule w-RAV fails PJR for each weight vector w.
Proof sketch. The proof is similar to the proof that w-RAV fails EJR (Aziz et al. 2015a; Aziz et al. 2017) and is relegated to the appendix.
6 Average Satisfaction
A useful measure in the context of justified representation is that of average satisfaction: given a ballot profile (A1, . . . , An), a committee W , and a group of voters
N ∗ ⊆ N , we define the average satisfaction of the voters in N ∗ as 1
|N ∗|
∑
i∈N∗ |Ai ∩ W |. While it is maybe impos
sible to ensure that every group of voters has high average satisfaction, it is natural to ask if we can provide some guarantees with respect to this measure to groups of voters that are large and cohesive. Our first observation is that if a committee W provides JR, we can derive a lower bound on the average satisfaction of such groups.
Proposition 4. Consider a ballot profile (A1, . . . , An), and suppose that the target committee size k divides n. Let W be a committee of size k that provides JR, and let ` be a positive integer. For every `-cohesive group of voters N ∗ we have
1 |N ∗|
∑
i∈N ∗
|Ai ∩ W | ≥ 1 − 1
`+ 1
`n .
Proof. Let s = n
k . Since W provides JR, we can find a
voter i1 ∈ N ∗ with |Ai ∩ W | ≥ 1. If |N ∗| > s then the set
N ∗\{i1} satisfies |N ∗\{i1}| ≥ s, | ⋂
i∈N∗\{i1} Ai| ≥ `, so,
applying the JR condition to this set, we can conclude that there is another voter i2 6= i1 that approves some candidate in W . By repeating this argument, we conclude that at most s − 1 voters in N ∗ approve no candidate in W . Hence,
1 |N ∗|
∑
i∈N ∗
|Ai ∩ W | ≥ |N ∗| − s + 1
|N ∗|
=1− s−1
|N ∗| ≥ 1 − s − 1
`s ≥ 1 − 1
`+ 1
`n .

However, for voting rules that satisfy EJR we can obtain a much stronger guarantee.
Theorem 6. Consider a ballot profile (A1, . . . , An), and suppose that the target committee size k divides n. Let W be a committee of size k that provides EJR, and let ` be a positive integer. Then for every `-cohesive group of voters N ∗ ⊆ N it holds that
1 |N ∗|
∑
i∈N ∗
|Ai ∩ W | ≥ ` − 1
2.
Proof. Let s = n
k and let |N ∗| = n∗. EJR implies that every
subset of N ∗ of size ` · s contains a voter who approves ` candidates in W . Let i1 be some such voter. If n∗ >
` · s then the set N ∗ \ {i1} satisfies |N ∗ \ {i1}| ≥ ` · s, |
⋂
i∈N∗\{i1} Ai| ≥ `, so, applying the EJR condition to this set, we can conclude that there is another voter i2 6= i1 that approves ` candidates in W . By repeating this argument, we can construct a subset N` ⊆ N ∗ of size n∗ − ` · s + 1 such that each voter in N` approves at least ` candidates in W .
Now, consider the set N ∗ \ N`. We have |N ∗ \ N`| = ` · s − 1 = (` − 1) · s + (s − 1), | ⋂
i∈N∗\N` Ai| ≥ `. Thus,
by the same argument, the set N ∗ \ N` contains at least s voters each of which approves at least ` − 1 candidates in W ; let N`−1 be a set of exactly s such voters.
Continuing inductively, we partition N ∗ into ` + 1 pairwise disjoint sets N`, . . . , N1, N0 so that we have |N`| =
|N ∗| − `s + 1, |N`−1| = · · · = |N1| = s, |N0| = s − 1 and for 0 ≤ j ≤ ` each voter in Nj approves at least j candidates in W . The average satisfaction of voters in N ∗ \ N` is at least
1
|N ∗ \ N`|
∑
i∈N ∗\N`
|Ai ∩ W | ≥ 1
`s − 1 ·
`−1
∑
j=1
|Nj| · j
≥1
`s · s(` − 1)`
2 = `−1
2,
whereas the average satisfaction of the voters in N` is at least
`. As the average satisfaction of voters in N ∗ is a convex combination of these two quantities, it is at least `−1
2.
In contrast, the worst-case guarantee provided by PJR is not any stronger than the one provided by JR alone.
Example 2. Consider a ballot profile (A1, . . . , An) over a candidate set C = {c1, . . . , cn, d1, . . . , dn} where Ai = {d1, . . . , dn, ci} for i ∈ [n]. For k = n, the committee {c1, . . . , cn} provides PJR (and PR), but the average satisfaction of the voters in N (which form an n-cohesive group) is only 1.
7 Discussion
We consider JR to be an important axiom in a variety of applications of multi-winner voting. Thus, the result of Section 3 shows that RAV should not be ruled out on these grounds if the target committee size is small. In some applications, such as, e.g., shortlisting candidates for a job, k ≤ 5 may be a reasonable assumption (Barbera` and Coelho 2008; Elkind et al. 2017). We find it surprising that the threshold
value of k turns out to be 5 rather than 2 or 3; it would be interesting to see a purely combinatorial proof of this fact. Our results also highlight a difficulty with the notion of EJR: this axiom is incompatible with perfect representation, which is a very desirable property in parliamentary elections and other settings where fairness is of paramount importance. We therefore propose an alternative to this axiom, Proportional Justified Representation, which is motivated by similar considerations -
(namely, ensuring that large cohesive groups of voters are allocated several representatives), but does not conflict with PR. PJR also has further attractive properties: it is satisfied by several well-known multi-winner rules (for some of these rules we have to additionally require that k divides n), some of which are efficiently computable, and, just like EJR, it provides a justification for using the harmonic weight vector (1, 1
2, 1
3 , . . . ) as
the default weight vector for PAV. However, the results of Section 6 can be viewed as an argument in favor of EJR: every committee that provides EJR guarantees high levels of average satisfaction to members of large cohesive groups, whereas the guarantee offered by committees that provide PJR is, in general, much weaker. Thus, one can think of EJR as a more pragmatic requirement: for every ballot profile a committee that provides EJR (and, as shown by Aziz et al. (2015a; 2017), such a committee is-
 guaranteed to exist) ensures that members of large cohesive groups are happy on average, at the cost of possibly ignoring other agents. In some applications of multi-winner voting such a tradeoff may be acceptable. Consider, for instance, an academic department where members of different research groups pool their funding to run a departmental seminar. Faculty members have preferences over potential speakers, with members of each research group agreeing on a few candidates from their field. Choos-
ing speakers so as to please the members of large research groups may be a good strategy in this case, even if this means that some members of the department will not be interested in any of the talks. Indeed, if very few talks are of interest to members of a large group, this group may prefer to withdraw its contribution to the funding pool and run its own event series. The relationship between PR and PJR is more subtle than it may seem at the first sight: while PR implies PJR at the level of com-
mittees (Theorem 4), this is not the case at the level of voting rules. Indeed, a voting rule that satisfies PR may behave arbitrarily when the committee size k does not divide the number of voters n, whereas the PJR axiom remains applicable in such scenarios. Of course, a voting rule can satisfy PJR, but not PR: Greedy Monroe, restricted to instances where k divides n, is a case in point. Thus, these two axioms are only loosely related. Indeed, none of the voting rules we consider always satisfie-
s both PJR and PR: the Monroe rule comes closest, but even this rule only satisfies PJR when k divides n (see Example 1). We can, however, construct an artificial voting rule that satisfies both axioms: given (A, k), this rule checks if there is a committee that provides PR for (A, k) and, if so, outputs some such committee (which, by Theorem 4, also provides PJR), and otherwise it runs PAV. This voting rule can be seen as an analogue of the

Black rule, which is a single-winner rule that outputs a Condorcet winner if one exists and a Borda winner otherwise. Very recently, Brill et al. (2017) identified a voting rule that provides both PR and PJR for all values of n and k, namely, a maximization version of the Phragme ́n’s rule, which they refer to as max-Phragmen. We conclude the paper by mentioning some open questions that are raised by our work. First, we do not know what is the complexity of checking whether a given committee prov-
ides PJR; we note that this problem is polynomialtime solvable for PR (the first part of Theorem 2) and coNPcomplete for EJR (Theorem 11 of Aziz et al.). Also, it would be useful to derive bounds on average satisfaction provided by committees that are produced by the voting rules considered in this paper, both theoretically and empirically. In particular, it would be interesting to see whether PAV, which satisfies EJR, performs better in this regard than Monroe or Greedy Monroe, which only satisfy-
 PJR.
Acknowledgments
This research was supported in part by the Spanish Ministerio de Econom ́ıa y Competitividad (project HERMES-SMARTDRIVER TIN2013-46801-C4-2-R), by the Autonomous Community of Madrid (project e-Madrid S2013/ICE-2715), and by ERC Starting Grant ACCORD (Grant Agreement 639945).
References
[Anstee] R. P. Anstee. A polynomial algorithm for bmatchings: an alternative approach. Information Processing Letters, 24(3):153–157, 1987.
[Aziz et al.] H. Aziz, M. Brill, V. Conitzer, E. Elkind, R. Freeman, and T. Walsh. Justified representation in approval-based committee voting. In 29th AAAI Conference on Artificial Intelligence (AAAI), pages 784–790, 2015.
[Aziz et al.] H. Aziz, S. Gaspers, J. Gudmundsson, S. Mackenzie, N. Mattei, and T. Walsh. Computational aspects of multi-winner approval voting. In 14th International Conference on Autonomous Agents and Multiagent Systems (AAMAS), pages 107–115, 2015.
[Aziz et al.] H. Aziz, M. Brill, V. Conitzer, E. Elkind, R. Freeman, and T. Walsh. Justified representation in approval-based committee voting. Social Choice and Welfare, 2017. to appear.
[Barbera` and Coelho] S. Barbera` and D. Coelho. How to choose a non-controversial list with k names. Social Choice and Welfare, 31(1):79–96, 2008.
[Betzler et al.] N. Betzler, A. Slinko, and J. Uhlmann. On the computation of fully proportional representation. Journal of Artificial Intelligence Research, 47:475–519, 2013.
[Black] D. Black. The theory of committees and elections. Cambridge University Press, 1958.
[Brandt et al.] F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A. D. Procaccia, editors. Handbook of Computational Social Choice. Cambridge University Press, 2016.
[Brill et al.] M. Brill, R. Freeman, S. Janson, and M. Lackner. Phragme ́n’s voting methods and justified representation.
In 31st AAAI Conference on Artificial Intelligence (AAAI), 2017.
[Conitzer] V. Conitzer. Making decisions based on the preferences of multiple agents. Communications of the ACM, 53(3):84–94, 2010.
[Dummet] M. Dummet. Voting Procedures. Oxford University Press, 1984.
[Elkind et al.] E. Elkind, J. Lang, and A. Saffidine. Condorcet winning sets. Social Choice and Welfare, 44(3):493517, 2015.
[Elkind et al.] E. Elkind, P. Faliszewski, P. Skowron, and A. Slinko. Properties of multiwinner voting rules. Social Choice and Welfare, 2017. to appear.
[Farrell] D. M. Farrell. Electoral Systems. A Comparative Introduction. Palgrave Macmillan, second edition, 2011.
[Kilgour] D. M. Kilgour. Approval balloting for multiwinner elections. In J.-F. Laslier and M. R. Sanver, editors, Handbook on Approval Voting, pages 105–124. Springer, 2010.
[Monroe] B. Monroe. Fully proportional representation. American Political Science Review, 89(4):925–940, 1995.
[Procaccia et al.] A. D. Procaccia, J. S. Rosenschein, and A. Zohar. On the complexity of achieving proportional representation. Social Choice and Welfare, 30(3):353–362, 2008.
[Sa ́nchez-Ferna ́ndez et al.] L. Sa ́nchez-Ferna ́ndez, N. Ferna ́ndez, and J. A. Fisteus. Fully Open Extensions to the D’Hondt Method. ArXiv e-prints, September 2016. arXiv:1609.05370 [cs.GT].
[Skowron et al.] P. Skowron, P. Faliszewski, and A. Slinko. Achieving fully proportional representation: Approximability results. Artificial Intelligence, 222:67–103, 2015.
[Thiele] T. N. Thiele. Om flerfoldsvalg. In Oversigt over det Kongelige Danske Videnskabernes Selskabs Forhandlinger, pages 415–441. 1895.

A Justified Representation and RAV: Omitted Proofs
We will now present an explicit example of a ballot profile on which RAV violates JR for k = 6. This profile, which is described in Table 1, is obtained from a solution to the respective linear program, as described in the proof of Theorem 1. The total number of agents in this example is 5992. Since 1000 agents approve c7 only, JR requires that c7 should be in the winning set. But this does not happen: in round 1 c1 is elected with an approval weight of 2000; in round 2 c2 is elected with an appro-
val weight of 1499; in round 3 c3 is elected with an approval weight of 1220.5; in round 4 c4 is elected with an approval weight of 1060.33; in round 5 c5 is elected with an approval weight of 1017.67; and finally, in round 6 c6 is elected with an approval weight of 1017.17. There are no ties. To show that RAV fails JR k = 7, 8, 9, we adapt the argument from the work of Aziz et al. (2015a; 2017). Specifically, we add to the election shown in Table 1 k−6 additional candidates and 1000(k − 6) additi-
onal voters such that for each new candidate there are 1000 voters who approve that candidate only. Note that we still have 1000 > n/k. RAV will select c1, . . . , c6, followed by k − 6 additional candidates, and c7 or one of the new candidates will remain unselected. We remark that we can convert the linear program from the proof of Theorem 1 into an integer linear program that for each value of k finds an election with the minimum number of voters on which RAV never has to break ties and produce-
s a committee that violates JR. Interestingly, while for k = 6 the smallest such example has 108 voters (a valid solution is shown in Table 2), for k = 7 there exists an example with 35 voters (a valid solution is shown in Table 3).
B Perfect Representation: Omitted Proofs
We will now provide a complete proof of Theorem 2.
Theorem 2. Given a ballot profile A and a target committee size k, it is NP-complete to decide whether there exists a committee that provides PR for (A, k).
Proof. To show that this problem is in NP, we will argue that, given a ballot profile A = (A1, . . . , An) and a committee W of size k, where k divides n, we can reduce the problem of deciding whether W provides PR for (A, k) to finding a b-matching in a bipartite graph. Recall that an instance of a b-matching problem is given by a bipartite graph G with parts L and R and edge set E, where each node u ∈ L∪R is associated with a positive integer κ(u); it is a ‘yes’-instance if there is a collection-
 E′ ⊆ E of edges of G such that each node u ∈ L ∪ R is contained in exactly κ(u) edges of E′. It is possible to check in polynomial time if a given instance of the b-matching problem is a ‘yes’-instance (Anstee 1987). Now, given a ballot profile A = (A1, . . . , An) and a committee W of size k, where k divides n, we construct a bipartite graph with parts N and W where there is an edge from i to c if and only if c ∈ Ai. We then ask if this graph admits
a b-matching if the capacity of each node in N is 1 and the capacity of each node in W is n
k . Clearly, W provides PR if
and only if such a b-matching exists. To prove NP-hardness, we modify a reduction in the paper of Procaccia et al. 2008, which shows that finding a committee whose Monroe score is at least as high as a given bound is NP-hard. Recall that an instance of X3C is given by a set U = (u1, . . . , uν) of size ν, where ν is divisible by 3, and a collection F = {F1, . . . , Fr} of size-3 subsets of U . It is a ‘yes’-instance if it is possible to find ν/3 sets in F whose union covers the set U . Given an in-
stance (U, F) of X3C, we construct a set of candidates C, a ballot profile A and a target committee size k as follows. We set n = ν, C = {c1, . . . , cr} and k = n/3. For each i ∈ [n], we let Ai = {cj | ui ∈ Fj}. By construction, n/k = 3. We claim that (U, F) is a ‘yes’-instance of X3C if and only if there exists a committee W that provides perfect representation for (A, k). Indeed, suppose that W = {cj1 , . . . , cjk } is a committee that provides perfect representation for (A, k), and let (N1, .-
 . . , Nk) be respective partition of N such that for each ` ∈ [k] each voter in N` approves cj` . Then {Fj1 , . . . , Fjk } is a cover for U : for each ui ∈ U there exists some ` ∈ [k] such that i ∈ N`; as i approves cj` , this means that ui is covered by Fj` . Conversely, if {Fj1 , . . . , Fjk } is a cover for U , we can set N` = {i | ui ∈ Fj` } for all ` ∈ [k]: by construction all voters in N` approve cj` and |N`| = 3 for each ` ∈ [k], so W = {cj1 , . . . , cjk } provides perfect representation-
 for (A, k).
C Proportional Justified Representation: Omitted Proofs
We will now provide the missing part of the proof of Theorem 5, by showing that the Monroe rule satisfies PJR when k divides n.
Theorem 5′. Consider a ballot profile A = (A1, . . . , An). If the target committee size k divides n then the output of the Monroe rule on (A, k) satisfies PJR.
Proof. Let s = n
k . Note that s ∈ N.
Suppose that the Monroe rule outputs a committee W ; assume without loss of generality that W = {c1, . . . , ck}. Let π be a valid mapping N → W whose Monroe score is equal to the Monroe score of W . Let Nj = π−1(cj) for j = 1, . . . , k.
Suppose for the sake of contradiction that there exists an ` > 0 such that PJR is violated for some `-cohesive set of voters N ∗. Note that this means that at least one of the ` candidates jointly approved by voters in N ∗ does not appear in W ; let c be some such candidate. Let us say that a set Nj is good if at least one voter in
Nj ∩ N ∗ approves cj, and bad otherwise. Note that if there are at least ` good sets among N1, . . . , Nk then there are ` distinct candidates in W each of which is approved by at least one voter in N ∗, a contradiction with our choice of N ∗.

A {c1, c2, c4, c5} {c1, c2, c4, c6} {c1, c3, c5} {c1, c3, c6} {c2, c3, c4} {c2, c3, c5} {c2, c5} {c2, c6} nA 500 500 500 500 222 333 55 389 A {c3, c4} {c3, c5} {c3, c6} {c4} {c5} {c6} {c7} nA 246 43 154 530 566 454 1000
Table 1: Example of RAV failing JR for k = 6
A {c1, c2, c3, c4, c6} {c1, c2, c3, c5} {c1, c2, c3, c6} {c1, c2, c4, c5} {c1, c2, c4, c6} {c1, c2, c6} nA 1 2 1 9 4 2
A {c1, c3, c4, c5} {c1, c3, c4, c6} {c1, c3, c5} {c1, c3, c6} {c1, c4, c6} {c2, c3, c5} nA 2 1 5 8 3 2
A {c2, c3, c6} {c2, c4} {c2, c5} {c2, c6} {c3, c4} {c3, c5} nA 6 5 4 1 5 3 A {c3, c6} {c4} {c5} {c6} {c7} nA 1 7 9 9 18
Table 2: Minimal example of RAV failing JR for k = 6
Thus, there are at most ` − 1 good sets, so at most (` − 1)s voters from N ∗ appear in good sets. Hence, there is bad set Nj with Nj ∩ N ∗ 6= ∅. Also, there are at least s voters in
N ∗ that are assigned to candidates they do not approve; let N ′ ⊆ N ∗ be a set that consists of s such voters. Let W ′ = (W \ {cj}) ∪ {c}. We now construct a valid
mapping π′ : N → W ′ as follows. We let π′(i) = π(i) for all i ∈ N \ (N ′ ∪ Nj). Then, we set π′(i) = c for
each i ∈ N ′. Finally, for each voter i ∈ Nj \ N ′ we define
π′(i) so as to obtain a valid Monroe mapping; this can be done, e.g., by establishing a bijection μ between Nj \ N ′
and N ′ \ Nj and setting π′(i) = π(μ(i)). To obtain a contradiction, it remains to observe that the score of π′ is higher than the score of π: by our choice of Nj, at most s − 1 voters in N ′ ∪ Nj approve their assigned
candidate under π, whereas all s voters in N ′ are approve their assigned candidate under π, and all voters in N \ (N ′ ∪ Nj) are indifferent between π and π′.
Proposition 2. The rule w-PAV satisfies PJR if and only if w = (1, 1
2, 1
3 , . . . ).
Proof. If w = (1, 1
2, 1
3 , . . . ) then w-PAV satisfies EJR (Aziz
et al. 2015a; Aziz et al. 2017) and hence it also satisfies PJR. Our proof that w-PAV fails PJR if w 6= (1, 1
2, 1
3 , . . . ),
is very similar to the respective proof for EJR by Aziz et al. (2015a; 2017). First, Aziz et al. show (Lemma 1 in the journal version) that if wj > 1
j for some j > 1 then w-PAV fails JR. Therefore, in such cases w-PAV fails PJR as well. Second, if wj < 1
j for some j > 1, Aziz et al. construct (Lemma 2 in the journal version) an election in which there exists a subset of candidates C′ with |C′| = j and a set of jn
k voters who approve candidates in C′ only such that w
PAV only elects j − 1 candidates from C′. This establishes that w-PAV fails PJR in this case.
Proposition 3. The rule w-RAV fails PJR for each weight vector w.
Proof. Aziz et al. (2015a; 2017) show that if w 6= (1, 0, . . . ) then w-RAV fails JR; it follows that it also fails PJR. To show that w-RAV fails PJR for w = (1, 0, . . . , 0), consider the following election. Let n = 6, k = 3, C = {c1, c2, c3, c4}. Set A1 = · · · = A4 = {c1, c2}, A5 = {c3}, A6 = {c4}. (1, 0, . . . )-RAV outputs a committee that contains c3, c4 and exactly one of the remaining candidates. However, the set {1, 2, 3, 4} is 2-cohesive, and thus PJR requires that it gets two represen-
tatives.
D A note on Average Satisfaction and PJR
We have shown that the worst-case average satisfaction over cohesive group of voters that is guaranteed by PJR is the same as the one guaranteed by JR. It has to be noted, however, that when the group of voters is “very cohesive” (that is, when all the voters approve exactly the same set of candidates), the average satisfaction that is guaranteed by PJR and EJR is the same and much higher than the one guaranteed by JR. In particular, for an election in which a group of voters of size `n/k exists, -
such that all the voters in such group approve precisely the same set of candidates (of size at least `), a set of winners for such election that provides PJR (or EJR) has a minimum average satisfaction for the “very cohesive” group of voters of `. However, a set of winners for such election that provides JR has a minimum average satisfaction for the “very cohesive” group of voters of only 1.

A {c1, c2, c3, c4, c5, c6} {c1, c2, c3, c5, c6} {c1, c2, c3, c5, c7} {c1, c2, c4, c5, c7} {c1, c2, c4, c6} nA 1 1 2 1 2
A {c1, c3, c4, c7} {c1, c3, c5, c6} {c1, c3, c6} {c1, c4, c6} {c1, c4, c7} nA 1 2 1 1 2
A {c2, c3, c6} {c2, c3, c7} {c2, c4, c6} {c2, c4, c7} {c2, c5, c7} nA 1 1 2 1 1 A {c3, c4} {c3, c5} {c3, c7} {c4, c5} {c5} nA 1 1 1 1 2 A {c6} {c7} {c8} nA 2 2 5
Table 3: Minimal example of RAV failing JR for k = 7

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:11.007Z
- **Text Length:** 50027 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
