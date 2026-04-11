# PDF Document: Vazirani - 2025 - Arctic Auctions, Linear Fisher Markets, and Rational Convex Programs.pdf

**File Path:** Vazirani - 2025 - Arctic Auctions, Linear Fisher Markets, and Rational Convex Programs.pdf

**Processed Date:** 2026-02-10T18:18:07.387Z

**File Size:** 289.94 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3152

**Title:** Arctic Auctions, Linear Fisher Markets, and Rational Convex Programs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Arctic Auctions, Linear Fisher Markets,
and Rational Convex Programs
Vijay V. Vazirani*1
1University of California, Irvine
November 27, 2025
Abstract
This paper unifies two foundational constructs from economics and algorithmic game theory—the Arctic Auction and the linear Fisher market—to address the efficient allocation of differentiated goods in complex markets. We focus on the Arctic Auction [Kle10, Kle18], a mechanism designed to address the challenge of allocating liquidity efficiently across banks pledging heterogeneous collateral of varying quality, and was used for this purpose by the Bank of England and IMF, among other institutions. -
Our main contribution is to show that an equilibrium for the Arctic Auction is captured by a Rational Convex Program (RCP) [Vaz12a], thereby revealing deep structural regularities between market design and convex optimization. Building directly on primal–dual techniques for the linear Fisher market [DPSV08], we derive the first combinatorial polynomial-time algorithm for computing Arctic Auction equilibria. This result establishes that the Arctic Auction, long valued for its practical success, als-
o enjoys strong algorithmic and theoretical foundations.
*Supported in part by NSF grant CCF-2230414.
1
arXiv:2511.21637v1 [cs.GT] 26 Nov 2025

1 Introduction
This paper brings together two foundational notions from economics and algorithmic game theory (AGT), namely Arctic Auctions and linear Fisher markets, to address the challenge of efficiently allocating differentiated goods in complex markets.
We focus on Klemperer’s Arctic Auction [Kle18], a novel and powerful mechanism designed to solve resource allocation problems, notably those encountered in central banking. Our core technical contribution is to establish a fundamental link between this auction design and optimization theory: we show that the equilibrium of the Arctic Auction is captured by a Rational Convex Program (RCP) [Vaz12a]. Next, by building on primal-dual techniques developed by Devanur, Papadimitriou, Saberi, and Vazirani-
 for the linear Fisher market [DPSV08], we are able to derive the first combinatorial polynomial-time algorithm for computing an equilibrium for the Arctic Auction. This work not only provides an exact computational solution for a mechanism of immediate practical importance but also solidifies the theoretical connection between modern market design and convex optimization.
The Product-Mix Auction of Klemperer [Kle10, Kle18, Kle08] is a general sealed-bid mechanism that computes competitive-equilibrium allocations across multiple substitutable goods by solving an optimization that maximizes total surplus, where bidders submit mutually exclusive bids across product categories and the mechanism determines market-clearing prices and allocations simultaneously. The design of the Product-Mix Auction was motivated by the 2007–2008 financial crisis, when the Bank of England-
 faced the challenge of allocating liquidity efficiently across banks pledging heterogeneous collateral of varying quality. The Arctic Auction1 is a specialized implementation of the product-mix auction designed for central bank liquidity operations, with the key difference being that it handles settings where bidders (banks) may choose not to spend all their money if prices exceed their valuation thresholds, and it remains computationally stable even when some asset markets ”freeze”. Variants of -
the Arctic Auction have since been adopted in policy modeling contexts by the IMF and other institutions as a general tool for crisis-time resource allocation when assets are imperfect substitutes and traditional market-clearing mechanisms fail.
The linear Fisher market was the first market model for which an exact efficient algorithm was given [DPSV08]; henceforth we will call this the DPSV algorithm. Equilibrium allocation and prices for this model are captured by the celebrated Eisenberg-Gale convex program [EG59]. However, this program was not sufficient to derive an efficient algorithm for computing an exact equilibrium — that needed an algorithm for diophantine approximation which was given later in [Jai07]. The Arctic Auction can b-
e viewed as a variant of the linear Fisher market in which buyers need not spend all their money and the utility of buyer i for good j gives an upper bound on the price at which i will be happy to buy good j, i.e., if the price of j equals this bound, i is indifferent between getting money back or buying this good and if it exceeds this bound, i will not buy this good [Kle18].
We note that incorporating such upper bounds in the DPSV algorithm is far from straightforward for the following basic reason: The crucial property which yields efficient computability for a
1The name ”Arctic” was given to such auctions since the issue of bidders not spending all their money first arose in Iceland’s planned auction [Kle18].
1

linear Fisher market is weak gross substitutability, i.e., if the demand of one good increases, the (equilibrium) price of another good cannot decrease. This property supports an algorithm which monotonically raises prices of goods, i.e., it never needs to reduce any price. Prices are dual variables of Eisenberg-Gale convex program, and it is well-known that primal-dual algorithms either raise or lower duals monotonically to achieve efficiency; schemes that raise and lower dual variables have not-
 panned out in the past2. For the Arctic Auction, when the price of some good j exceeds buyer i’s upper bound, j should be returned to i. But in doing so, we will be forced to lower the price of good j, since its demand has decreased. The full picture is even more complicated: at any point in the algorithm, different goods have different prices, possibly unrelated to buyer i’s upper bounds, and for the same good, the upper bounds of different buyers are different.
Notwithstanding these challenges, we proceeded to study a convex program appearing in Chen et al. [CYZ07]. On applying KKT conditions, we realized that not only it captures equilibrium allocations and prices for the Arctic Auction but it is also an RCP, Theorems 1 and 2, respectively. These are exceptionally strong structural properties, and there must be an underlying reason for their existence. That reason turned out to be the fact that in the definition of Arctic Auction, the upper bound on the-
 price at which buyer i will be happy to buy a good j is precisely her utility, uij, for good j. The proof of Theorem 1 provided two more clues: the importance of the notion of bang per buck, Definition 2, and the importance of the event αi = 1, where αi is the bang per buck of buyer i.
These facts dramatically changed the outlook—they brought hope despite the complicated picture painted above. Indeed, we believe that if the upper bound at which buyer i will be happy to buy a good j is not exactly uij, no convex program would capture an equilibrium of the resulting market. The fact that convex program (1) is an RCP encouraged us to seek a combinatorial polynomial-time algorithm for Arctic Auction. It was natural to extend the DPSV Algorithm. However, this algorithm uses the sophi-
sticated machinery of balanced flows. Adapting these ideas to the Arctic Auction, i.e., arranging the return of money to buyers without violating any of the conditions, is quite non-trivial, see Theorem 3.
We note that this happy outcome is further testament to the exceptional skill that went into the design of Arctic Auction (and lucky breaks that yielded critical insights which eventually blended well with the DPSV algorithm).
This raises an interesting question: Is this happy outcome a one-off? I.e., can RCP and combinatorial polynomial-time algorithms go much further? We believe the answer is “yes”. As evidence, in Section 6 we present a linear Fisher market model with constant marginal costs for production. We show that an optimal solution to this model is captured by an RCP and we give a simple combinatorial polynomial-time algorithm for it.
2 Related Works
The notion of Product-Mix Auction was given by Klemperer [Kle10, Kle18]. The Arctic Auction was also introduced by Klemperer, as a specialized implementation of the product-mix auc
2The only exception we are aware of is Edmonds’ weighted matching algorithm [Edm65].
2

tion, designed for central bank liquidity operations [Kle18]. [FFW11] gave an early operational playbook showing how central banks price liquidity across collateral classes via Product-Mix Auctions. Fichtl [Fic22] gave a proof of correctness of an algorithm proposed by Paul Klemperer and DotEcon for finding equilibrium prices for the Arctic Auction if the number of goods is very small, e.g., three. The algorithm was explicitly designed for solving a real practical problem in this regime, even tho-
ugh it is exponential time in the worst case. It maximizes auctioneer surplus (a harder goal) as opposed to our algorithm which maximizes total surplus.
[BK19] analyzed the existence of equilibrium in Product-Mix Auctions when goods are indivisible. They introduce the concept of ”demand types” to characterize solutions when standard assumptions break down. [BGKL24] developed polynomial-time algorithms to find competitive equilibrium prices and quantities for bidders in strong-substitutes product-mix auctions by using submodular minimization for price-finding and a novel constrained matching approach for supply allocation, directly utilizing the au-
ction’s explicit bidding language. [BKL24] established that the Product-Mix Auction’s simple geometric bidding language uniquely represents all concave substitutes and strong-substitutes valuations, thereby providing a new characterization for these preference classes and ensuring the auction implements competitive equilibrium allocations.
[FGL23] study pricing in quasi-linear, budget-constrained multi-good markets and show that the elementwise-minimal competitive equilibrium prices are simultaneously seller revenue maximizing and constrained welfare maximizing, a structural result obtained without assuming gross substitutability or homogeneity. Their work is complementary to ours: while they characterize the geometry and optimality of equilibrium price vectors in markets with budgets, our paper develops an algorithmic framework for-
 computing such equilibria for the Arctic Auction.
In the conference version, [DPSV02] proved that their algorithm for the linear Fisher market terminates with a rational equilibrium if all parameters in the given instance are rational numbers. A corollary of this result is that the Eisenberg-Gale convex program, which captures equilibrium allocations and prices for the linear Fisher market, always has rational optimal solutions. A direct proof of this fact was later given in [Vaz07].
Hence the Eisenberg-Gale convex program, a non-linear program, “behaves” like a linear program, an intriguing phenomenon indeed. Ye [Ye07] gave other convex programs which exhibit this behavior. Drawing analogy with a fundamental phenomenon in combinatorial optimization, namely the existence of LP-relaxations for some problems which always admit integral optimal solutions, e.g., for maximum matching and max-flow [LP86, Sch86] (i.e., these LPs “behave” like integer programs), [Vaz12a] formally defi-
ned the notion of a Rational Convex Program (RCP), see Definition 3. The importance of this notion is that the existence of such a program gives a strong indication that the problem admits a combinatorial polynomial-time algorithm.
RCPs have been found for several other market models, e.g., for the dichotomous-utilities case of the linear Arrow-Debreu Nash bargaining one-sided matching market [GTV24]; 2-player Nash and nonsymmetric bargaining games [Vaz12b]; and a perfect price discrimination market model with production [GV11]. [DGV16] gave an RCP for the linear Arrow–Debreu market. [CDG+17] gave new convex programs for natural generalizations of the linear Fisher market, in particular for the quasi-linear case; however, th-
eir program is different from the one studied in Section 3. Although they established rationality of equilibria for some markets, they did not explore the notion of rational convex programs.
3

Several market equilibrium works utilize the flow-based technique introduced in [DPSV08]. Building on [DPSV08], Orlin gave a strongly polynomial time algorithm for computing an equilibrium for the linear Fisher market [Orl10]. [DM15] gave a combinatorial polynomial algorithm for the linear Arrow-Debreu market and [DGM16] gave an algorithm with an improved running time. [VY25] used these ideas to give a strongly polynomial algorithm for computing the Hylland-Zeckhauser equilibrium [HZ79] for the c-
ase that each agent’s utilities come from a bi-valued set. [GTV24] gave an ε-approximate equilibrium algorithm for the Arrow-Debreu extension of the classic Hylland-Zeckhauser mechanism [HZ79] for a one-sided matching market. [JV10] define the notion of Eisenberg–Gale markets and give efficient algorithms for several resource allocation markets in this class. [Vaz10] gave a polynomial time algorithm for computing an equilibrium for the spending constraint market model.
3 Rational Convex Program for Arctic Auction
Definition 1. (Klemperer [Kle18]) An Arctic Auction is a variant of the linear Fisher market in which buyers need not spend all their money and the utility of buyer i for good j gives an upper bound on the price at which i will be happy to buy good j. The market consists of a set B of n buyers, with buyer i having money mi ∈ Q+, and a set G of m divisible goods, w.l.o.g. one unit of each. The buyers have linear utilities for goods; assume uij ∈ Q+ is the utility of buyer i for a unit of good j. If-
 prices of all goods j (weakly) exceed uij then i may be returned a part or all of her money; the money returned is denoted by si. If xij is the amount of good j allocated to buyer i, then her total utility from this bundle is:
ui(x, si) = ∑
j∈G
uijxij + si = wi(xi) + si,
where xi is the restriction of x to buyer i and wi(xi) = ∑j∈G uijxij. If pj is the price of one unit of good j then the worth of this bundle is ∑j∈G xij pj + si.
We will make the mild assumption that each buyer has positive utility for some good and each good is desired by some buyer. Under these conditions, equilibrium allocations and prices exist, satisfying:
1. Each buyer gets a utility maximizing bundle.
2. The market clears, i.e., all goods are sold and all money is either spent or returned. (In addition, all prices will be positive.)
Note 1. All parameters in all models defined in this paper, e.g., Definition 1, will be assumed to be non-negative rational numbers, i.e., belonging to Q+.
Definition 2. W.r.t. prices p, define the maximum bang per buck of buyer i to be
αi = max
j∈G
uij
pj
.
Furthermore, if the above equality holds for good j, then we will say that j is a maximum bang per buck good for i. For the sake of succinctness we will say that αi is the mbpb of buyer i and j is an mbpb good for i.
4

Since the utility function of each buyer is linear, it is easy to show that her utility maximizing bundle must contain only mbpb goods. Lemma 1 follows easily from Definition 1.
Lemma 1. Equilibrium allocations and prices for the Arctic Auction satisfy the following conditions for each buyer i ∈ B.
1. If ∃j ∈ G s.t. xij > 0 then j is an mbpb good for i. Furthermore, since pj ≤ uij (because uij is an upper bound on the price at which i is happy to buy j), αi ≥ 1.
2. If si > 0 and ∃j ∈ G s.t. xij > 0 then αi = 1 and each good is bought by i at the upper bound of its price.
3. If ∀j ∈ G, xij = 0 then ∀j ∈ G, pj ≥ uij, i.e., the price of each good is at least its upper bound, and hence αi ≤ 1.
We next study a variant of the Eisenberg-Gale convex program, given by Chen et al. [CYZ07]:
max (∑
i∈B
mi(log (wi(xi) + si)) − s
s.t. ∑
i∈B
xij ≤ 1 ∀j ∈ G,
∑
i∈B
si − s = 0,
xij ≥ 0 ∀i ∈ B, j ∈ G,
si ≥ 0 ∀i ∈ B
(1)
Let pj and λ be the dual variables corresponding to the first and second constraints of (1). Optimal solutions to the primal and dual variables must satisfy KKT conditions, in addition to the constraints of (1):
1. ∀j ∈ G : pj ≥ 0.
2. ∀j ∈ G : pj > 0 =⇒ ∑i∈B xij = 1.
3. 1 − λ ≥ 0.
4. s > 0 =⇒ λ = 1
5.
∀ i ∈ B, ∀j ∈ G : uij
pj
≤ wi(xi) + si
mi
.
6.
∀ i ∈ B, ∀j ∈ G : xij > 0 =⇒ uij
pj
= wi(xi) + si
mi
.
7.
∀ i ∈ B : λ ≥ mi
wi(xi) + si
.
5

8.
∀ i ∈ B : si > 0 =⇒ λ = mi
wi(xi) + si
.
Lemma 2. Optimal primal and dual solutions to convex program (1) satisfy the statements given in Lemma 1.
Proof. Statement 1: Assume xik > 0 for k ∈ G. Then by (6),
uik
pk
= wi(xi) + si
mi
.
By (5),
∀j ∈ G : uij
pj
≤ wi(xi) + si
mi
,
Therefore k is an mbpb good for i and
wi(xi) + si
mi
= αi.
By (7),
wi(xi) + si
mi
≥1
λ.
By condition (3), 1/λ ≥ 1. Hence we get that
αi ≥ 1
λ
≥ 1.
Therefore if xij > 0, uij
pj
= αi ≥ 1.
Hence pj ≤ uij, i.e., the price of j does not exceed uij.
Statement 2: Assume that si > 0 and xik > 0 for k ∈ G. Clearly s > 0, hence by condition (4), λ = 1.
By Statement (1) and condition (8),
αi = wi(xi) + si
mi
=1 λ
= 1.
Now for each good j, if xij > 0 then uij/pj = 1, i.e., j is bought at the upper bound of its price.
Statement 3: Assume that ∀j ∈ G, xij = 0. If so, wi(xi) = 0 and by (3) and (7),
si
mi
≥1 λ
≥ 1.
Therefore si > 0 and hence s > 0. Now by (4), λ = 1. Further, by (8), si = mi. Now by (5), ∀j ∈ G, pj ≥ uij, i.e., the price of each good is at least its upper bound and hence αi ≤ 1.
6

Theorem 1. Optimal primal and dual solutions to convex program (1) give equilibrium allocations and prices for the arctic auction.
Proof. By Definition 1, two facts need to be established.
1). The market clears: By the (mild) assumptions in Definition 1, each good j has an interested buyer, hence pj > 0. Now, by KKT condition (2), it is fully sold. Next we prove that each buyer i spends all her money. There are three cases:
Case 1: si = 0. The money spent by i is
∑
j∈G
xij pj = ∑
j∈G
xij
miuij
wi(xi) = mi.
Case 2: si > 0 and ∃j ∈ G s.t. xij > 0. By Statement (2), αi = 1 and mi = wi(xi) + si. Furthermore, since each good is bought by i at the upper bound of its price,
wi(xi) = ∑
j∈G
uijxij = ∑
j∈G
pj xij ,
i.e., the money spent on goods. Hence, si is precisely the unspent money.
Case 3: ∀j ∈ G, xij = 0. As shown in Statement (3), si = mi.
2). Buyers get optimal bundles: By Statement (1) of Lemma 2, each good bought by i is an mbpb good for i. Furthermore, if money is returned, in Case 2 (Case 3), it provides exactly (at least) as much utility as mbpb goods.
Definition 3. (Vazirani [Vaz12a]) A nonlinear convex program is said to be a rational convex program (RCP) if for any setting of its parameters to rational numbers such that it has a finite optimal solution, it admits an optimal solution that is rational and can be written using polynomially many bits in the number of bits needed to write all the parameters. (As stated in Note 1, for all models studied in this paper, all parameters will be assumed to be non-negative rational numbers.)
Theorem 2. Convex program (1) is a rational convex program.
Proof. Let us assume that all parameters, i.e., the uijs and mis, are rational numbers. We will show that equilibrium allocations and prices form a solution to a linear system hence proving the theorem.
We first give the variables of this linear system. For each good j, define a new variable, qj, which is meant to be 1/pj. The linear system will solve for the m qjs. The pjs will be obtained by taking reciprocals of qjs. Among the xijs, guess the ones that are strictly positive. Assume there are k such variables and discard the rest. Lastly, guess the variables si that are strictly positive. Assume there are l of these and discard the rest.
7

Finally, we give the m + k + l equations of the linear system over these m + k + l variables. For each good j, include the equality given in condition (2). For each positive xij, include the equality given in condition (6). For each positive si, include the equality given in condition (8) with λ replaced by 1. Finally, if all sis are zero and s = 0, λ plays a role only in condition (7) and this is easily satisfied by taking λ to be the largest allowed value, namely λ = 1.
4 An Efficient Primal-Dual Algorithm for Arctic Auction
The fact that program (1) is a rational convex program, Theorem 2, opens up the possibility of obtaining a polynomial time combinatorial algorithm for arctic auction.
4.1 Balanced Flow in Network N (p, r)
Algorithm 1 builds on the polynomial time algorithm for a linear Fisher model given in [DPSV08]. In particular, it also critically uses the notion of balanced flow from [DPSV08]. Section 8 of the latter paper shows how to compute a balanced flow via n max-flow computations. Remark 1 explains the reason for using balanced flows and l2 norm of the surplus vector.
Definition 4. Define N (p, r) to be a directed network on vertices B ∪ G ∪ {s, t}, where s and t are the source and sink of N (p, r). The network has two vectors as parameters, p and r, where pj is the current price of good j and ri is the money returned to buyer i. The left-over money of i is defined to be (mi − ri). The vectors p and r evolve as the algorithm proceeds, hence changing the network itself, as detailed in Algorithm 1. The edges of N (p, r) are:
1. ∀j ∈ G: edge (s, j) with capacity pj.
2. ∀i ∈ B: edge (i, t) with capacity mi − ri, i.e., the left-over money of i.
3. ∀j ∈ G and ∀i ∈ B: if j is an mbpb good for i, then the edge (j, i) with capacity infinity.
If f is a feasible flow in N (p, r), its value is the amount of flow going from s to t and is denoted by | f |.
Definition 5. W.r.t. flow f in network N (p, r), for each buyer i define surplus(i) to be (mi − ri) − f (i, t), i.e., the left-over capacity of edge (i, t). Let γ( f ) denote the vector of surpluses of all buyers. Then f is said to be a balanced flow if it minimizes the l2 norm of the surplus vector, i.e., ∥ f ∥2, over all feasible flows f in N (p, r).
Clearly a balanced flow will be a max-flow in N (p, r). Moreover, all balanced flows have the same surplus vector (Corollary 8.7 in [DPSV08]) and a balanced flow will make the surpluses of the buyers as equal as possible. Let f be a balanced flow in N (p, r) and let R( f ) be the corresponding residual network. The following property plays a key role in the DPSV algorithm as well as in Algorithm 1.
Property 1: Let i, i′ ∈ B. If surplus(i′) < surplus(i) then there is no path from i′ to i in R( f ).
8

Theorem 8.4 in [DPSV08] shows that f is a balanced flow iff Property 1 holds. The proof of the main direction is straightforward: if there were a path from i′ to i in R(p), we could find a circulation which increases surplus(i′) and decreases surplus(i) thereby making the flow more balanced, leading to a contradiction.
4.2 Description of Algorithm 1
Similar to [DPSV08], Algorithm 1 is also a primal-dual algorithm. In our algorithm, the dual steps work on the dual variables, i.e., pjs, by raising the price of a well-chosen set of goods. A max-flow in N (p, r) determines the primal variables, i.e., xijs. The task of the primal steps is:
1. Modify N (p, r) appropriately so the subnetwork induced by B ∪ G contains all and only mbpb edges.
2. Determine money returned, i.e., r.
Similar to [DPSV08], Algorithm 1 maintains:
Invariant: Algorithm 1 maintains the invariant that ({s}, B ∪ G ∪ {t}) is a minimum s–t cut in N (p, r).
Because of this Invariant, the prices computed by the algorithm at any point are (weakly) bounded by equilibrium prices, i.e., the algorithm resorts to raising prices only, and not raising and lowering prices.
Let min denote the minimum money of a buyer, i.e., min = mini∈B mi. Step 1 of Algorithm 1 initializes the price of each good to min/m, ensuring that each buyer can buy all m goods with her money. This ensures that αi > 1 and after Step 5, when N (p, r) contains all mbpb edges, it satisfies the Invariant. Step 2 initializes the mbpb, αi, of each buyer i and sets ri to 0. At the beginning of each phase, a balanced flow is computed in N (p, r) and the set I ⊆ B of buyers having the largest surplus is-
 identified (Step 4). J ⊆ G consists of the set of goods desired by buyers in I.
By Property 1, there is no residual path from a buyer in (B − I) to a buyer in I. Therefore there is no flow going from goods in J to buyers in (B − I). In Step 6 of the New Phase, such edges are dropped. Let Z ⊆ B − I be buyers all of whose mbpb edges are in I; clearly, after Step 6, such buyers will have no edges to G. We will call them zero-degree buyers and will put them in the special set Z. For i ∈ Z, edge (i, t) carries no flow and surplus(i) = mi. Importantly, the mbpb, αi of such a buyer -
i decreases as prices of goods in J increase. In contrast, all mbpb goods of buyers in (B − I) − Z are in G − J and since the price of these goods remains unchanged, their mbpb remains unchanged. The algorithm keeps track of buyers in Z for the following two events:
1. If ∃i ∈ Z s.t. αi = 1, Step 9(c)(iv) is triggered, which removes i is from B and N (p, r). Since edge (i, t) carried no flow, the removal of i does not violate the Invariant. Following this, the algorithm continues raising the prices of goods in J. Observe that until i’s money is returned, we cannot raise prices of goods in J.
2. If ∃i ∈ Z and j ∈ (G − J) s.t. j becomes a mbpb good for i, Step 9(c)(v) is triggered, which adds (i, j) to N (p, r) with infinity capacity. i is not a zero-degree buyer anymore and is
9

Algorithm 1. Algorithm for Arctic Auction
Initialization
1. ∀j ∈ G: pj ← min/m.
2. ∀i ∈ B: αi ← maxj∈G
n uij pj
o
and ri ← 0.
3. Compute N (p, r).
4. ∀j ∈ G s.t. degN (p,r)(j) = 0, pj ← maxi∈B
n uij αi
o
.
5. Recompute N (p, r).
New phase
1. f ← balanced flow in N (p, r). 2. ∀i ∈ B: surplus(i) ← (mi − ri) − f (i, t). 3. δ ← maxi∈B{surplus(i)} . 4. I ← arg maxi∈B {surplus(i)} . 5. J ← Γ(I). 6. Remove edges going from B − I to J. 7. Let Z ⊆ (B − I) be buyers having no edges from G in N (p, r). 8. Record initial prices of goods in J: ∀j ∈ J: pj ← pj.
9. New iteration (a) θ ← 1. (b) ∀j ∈ J: pj ← pj · θ. Define capacity of edge (s, j) to be pj. (c) Raise θ continuously until: i. New edge: ∃i ∈ I and j ∈ (G − J) s.t. j is a mbpb good for i. A. Add (i, j) with capacity infinity to N (p, r). B. Recompute balanced flow, f , in N (p, r). C. I′ ← {i ∈ (B − I) | ∃path from i to I in R( f )} . D. I ← (I ∪ I′). E. J ← Γ(I). F. Start new iteration. ii. A set goes tight: ∃S ⊆ J : worth(S) = worth(Γ(S)). A. If S ̸= G, start new phase. B. If S = G, Output cu-
rrent allocations and prices and Halt. iii. Money is returned to a buyer: ∃i ∈ I s.t. αi = 1.
A. Set i’s left-over money to 0. If (s, G ∪ B ∪ t) is an s–t min-cut, return all of i’s money, remove i from B and N (p, r), and go to next phase. B. If (s, G ∪ B ∪ t) is not an s–t min-cut, find a maximal s–t min-cut, say (s ∪ S ∪ T, (G − S) ∪ (B − T) ∪ t). C. Return mi − (worth(S) − worth(T)) money to i. D. Go to next phase. iv. Remove a buyer from Z: If ∃i ∈ Z s.t. αi = 1, return all of i’s money, remove i from B and N (p, r), and continue raising θ. v. New edge in Z: If ∃i ∈ Z and j ∈ (G − J) -
s.t. j is mbpb good for i, add (j, i) to N (p, r), move i from Z to (B − I) − Z, and continue raising θ.
10

moved from Z to (B − I) − Z, and we continue raising θ.
The main changes from [DPSV08] are primal steps Step 9(c)(iv), Step 9(c)(v) and Step 9(c)(iii). The last step is triggered when αi of a buyer i ∈ I becomes 1. In this case, either i is removed after returning all her money or is retained after returning a part of her money.
Notation Γ(S) will denote the neighborhood of set S in N (p, r) as follows: If S ⊆ G then Γ(S) ⊆ B and if S ⊆ B then Γ(S) ⊆ G.
We will define the worth of a set as follows: If S ⊆ G then worth(S) is defined to be the sum of prices of goods in S and if S ⊆ B then worth(S) is defined to be the sum of leftover money of buyers in S. By the Invariant, ∀S ⊆ G : worth(S) ≤ worth(Γ(S)). Note that while computing worth(T) in Step 9(c)(iii)(C), we will assume that the money of i is zero.
The algorithm runs in phases. A phase is partitioned into iterations. During each iteration, the algorithm increases the prices of goods in set J. For j ∈ J, pj will denote the price of j at the beginning of the iteration. Its current price, pj, is pj · θ, where θ is initialized to 1 and is raised continuously at rate 1. As mentioned above, at the beginning of an iteration, edges from J to B − I will be dropped; by definition, there are no edges from (G − J) to I. Hence the subnetwork induced on (-
I, J) is decoupled from (G − I, B − J). An iteration ends when a new edge enters N (p, r), in Step 9(c)(i), or when the phase ends.
A phase ends when one of these events happens:
1. A set S ⊆ G goes tight, i.e., worth(S) = worth(Γ(S)), in Step 9(c)(ii).
2. αi = 1 for some buyer i and her money is fully returned, in Step 9(c)(iii)(A).
3. αi = 1 for some buyer i and her money is partially returned, in Step 9(c)(iii)(D).
In the third possibility, in Step 9(c)(iii)(B), (s, G ∪ B ∪ t) is not an s–t min-cut in N (p, r), indicating that returning all money to i will violate the Invariant. Hence if (s ∪ S ∪ T, (G − S) ∪ (B − T) ∪ t) is a maximal s–t min-cut, then worth(S) > worth(T). As mentioned above, while computing worth(T) in Step 9(c)(iii)(C), we will assume that the money of i is zero.
In Step 9(c)(iii)(C), the algorithm will return ri = mi − (worth(S) − worth(T)) money to i. As a result, (s, G ∪ B ∪ t) becomes an s–t min-cut again N (p, r), and the Invariant is restored, as shown in Lemma 3. Moreover, S is now a tight set and therefore the phase ends.
Lemma 3. In Step 9(c)(iii)(C), after returning mi − (worth(S) − worth(T)) money to i, (s, G ∪ B ∪ t) becomes an s–t min-cut again, thereby restoring the Invariant. At this point, (s ∪ S ∪ T, (G − S) ∪ (B − T) ∪ t) is also an s–t min-cut in N (p, r), i.e., S is a tight set.
Proof. Before Step 9(c)(iii)(A) is executed, the Invariant holds and therefore (s, G ∪ B ∪ t) is an s–t min-cut in N (p, r). After Step 9(c)(iii)(A) is executed and all of i’s money is returned, (s, G ∪ B ∪ t) is not an s–t min-cut but (s ∪ S ∪ T, (G − S) ∪ (B − T) ∪ t) is. At this point, let us continuously increase the money of buyer i from zero until (s, G ∪ B ∪ t) also becomes an s–t min-cut. Let β be the money of i when this happens. Then clearly, worth(S) = worth(T) + β. Therefore on setting-
 ri = mi − (worth(S) − worth(T)) the Invariant is restored and S is a newly tight set.
11

Observe that at this point, αi is still 1. Now there are two possibilities: First, i enters I in a future phase. At the start of that phase, Step 9(c)(iii) will kick in again since αi = 1. Again i will either be returned all or part of her money. In the former case, the prices of i’s mbpb goods can be raised. After increasing prices, αi < 1, but this is fine since at these high prices, i prefers her money back, and has already been arranged. In the latter case, i is in a tight set again, and the -
whole process will repeat.
Second, the algorithm terminates without i entering the active set I again. One possibility is that i is removed in Step 9(c)(iv) with all her money returned. Otherwise at termination, in the final max-flow in Step 9(c)(ii)(B), i will be allocated her mbpb goods worth her remaining money. Since αi is still 1, i is happy with a combination of money back and her mbpb goods. Note that the algorithm terminates when ({s} ∪ B ∪ G, {t}) becomes a min-cut.
If αi > 1 throughout the run of the algorithm, Step 9(c)(iii) will not kick in and no money will returned to i. At termination, in Step 9(c)(ii)(B), i will be allocated her mbpb goods worth her total money. Algorithm 1 raises prices monotonically and therefore for each buyer i, αi decreases monotonically. Combining with all the observations made above, including those for Steps 9(c)(iv) and 9(c)(v), we get Theorem 3, proving correctness of Algorithm 1 on the main new feature of the Arctic Auction -
over and above a linear Fisher market.
Theorem 3. For each buyer i, Algorithm 1 allocates a bundle of goods and money satisfying:
1. If αi > 1, i will be allocated her mbpb goods worth her entire money.
2. If αi = 1, i may be returned money and any goods allocated will be her mbpb goods. The total worth of the bundle will be mi.
3. If αi < 1, i will be returned all her money.
5 Proof of Running Time
As in [DPSV08], our proof is based on the following potential function
Φ=∑
i∈B
γi2
We will show that in a phase, this potential decreases by at least a multiplicative factor of 1 − 1/n3. We will classify phases into three types based on how they terminate, and we quantify the progress made in each type of phase.
Type I: Phase ends in Step 9(c)(ii), when a set S ⊆ J goes tight.
Type II: Phase ends in Step 9(c)(iii)(A), when a buyer i has all money returned and is removed.
Type III: Phase ends in Step 9(c)(iii)(D), when buyer i has partial money returned.
Remark 1. The main difficulty in establishing the running time of Algorithm 1, as well as the DPSV algorithm, comes from the use of balanced flows and l2 norm of the surplus vector. The
12

question arises: Can we not argue about the l1 norm of the surplus vector? It turns out there is an infinite family of instances for the DPSV algorithm for which the decrease in the l1 norm of the surplus vector is inverse exponential.
The next question is: what is the advantage of using l2 norm? To answer this, consider two 2-dimensional vectors (1, 0) and (1/2, 1/2). The l1 norm of both vectors is 1. On the other hand,
the l2 norms are 1 and 1/√2, respectively. In an iteration, we may go from the first to close to the second vector, resulting in almost no improvement in the l1 norm-based potential function. On the other hand, there is a substantial improvement in the l2 norm-based potential function. Indeed, certain iterations of the algorithm do not lead to much decrease in the total surplus, but they make the surplus vector more balanced, thereby increasing the potential for a substantial improvement in future-
 iterations.
Lemma 4, which is based on Lemma 8.5 and Corollary 8.6 in [DPSV08], plays a critical role in [DPSV08] and our proof for showing that sufficient progress is made towards decreasing the l22 norm of the surplus vector in an iteration. For this reason, we have provided a detailed proof, which is more intuitive and complete than Lemma 8.5 from [DPSV08], and may be of independent interest.
Lemma 4. Let p and p∗ be the price vectors at the beginning and end of an iteration of the algorithm in which no money is returned (so r is fixed). Let f and f ∗ be balanced flows in N (p, r) and N (p∗, r), respectively. Suppose that for some buyer i and some σ > 0 we have
γi( f ∗) = γi( f ) − σ.
Then
∥γ( f ∗)∥22 ≤ ∥γ( f )∥22 − σ2.
Proof. Since this iteration raises prices but never returns money, the capacities of edges from the source do not decrease, and the capacities into t remain fixed. If this iteration ended in Step 9(c)(i), N(p∗, r) contains an additional edge, compared to N(p, r). Hence f is feasible in N(p∗, r). Since f ∗ is a balanced (and thus maximum) flow in N(p∗, r), we have | f ∗| ≥ | f |.
Consider the difference f ∗ − f in the residual network of flow f in N(p∗, r). This difference decomposes into a set of s → t augmenting paths of total value | f ∗| − | f | together with a circulation of value | f |. Select from this decomposition exactly those paths/cycles that traverse the edge (i, t), and augment f along these to obtain a feasible flow h in N(p∗, r). By construction, the flow on (i, t) increases by exactly σ, and therefore
γi(h) = γi( f ) − σ = γi( f ∗).
Since f ∗ is the balanced flow for N(p∗, r) and h is a feasible flow in that network, we have
∥γ( f ∗)∥2 ≤ ∥γ(h)∥2.
Thus it suffices to prove
∥γ(h)∥22 ≤ ∥γ( f )∥22 − σ2.
13

For establishing this inequality, we need to consider only buyers whose surplus increases in h (other than i). For each such buyer j, let σj ≥ 0 denote its surplus increase. Flow conservation in the selected augmentation implies ∑j σj ≤ σ.
Furthermore, in f ∗ there is a residual path from i to each such j (because the portions of f ∗ − f used to form h include these paths). Now Property 1 of balanced flows (no residual path from strictly smaller surplus to strictly larger surplus), implies
γi( f ∗) ≥ γj( f ∗).
Since γi(h) = γi( f ∗) and γj(h) ≤ γj( f ∗), we have for all affected j:
γi(h) ≥ γj(h).
Finally, for concreteness, assume that there are k such buyers j namely i1, i2, . . . , ik and positive
values σ1, . . . , σk with ∑k
l=1 σl ≤ σ such that for 1 ≤ l ≤ k:
γi(h) = γi( f ) − σ ≥ γil ( f ) + σl = γil (h)
Now using Lemma 5 (i.e., which is Lemma 8.3 from [DPSV08]), we get
∥γ( f )∥22 − ∥γ(h)∥22 ≥ σ2.
Combining this with ∥γ( f ∗)∥2 ≤ ∥γ(h)∥2 yields
∥γ( f )∥22 − ∥γ( f ∗)∥22 ≥ σ2,
as required.
Lemma 5. (Lemma 8.3 from [DPSV08]) Assume that a ≥ bi ≥ 0 for i = 1, 2, ..., n. Assume further that
∑k
l=1 σl ≤ σ , where σ, σl ≥ 0. Then
∥(a + σ, b1 − σ1, b2 − σ2, . . . bn − σn)∥2 ≤ ∥(a, b1, b2, . . . , bn)∥2 − σ2.
Next we quantify the decrease the in the potential Φ in a Type I phase.
Lemma 6. (Bounding Type I Phases) During any Type I phase, the potential
Φ=∑
i∈B
γi2
decreases by at least a multiplicative factor of 1 − 1/n3.
14

Proof. Let p0 be the price vector at the start of the Type I phase and let f0 be the balanced flow in N(p0, r), where r remains fixed throughout the phase. Let
δ = max
i∈B γi( f0) and I0 = { i ∈ B : γi( f0) = δ }.
Let J0 = Γ(I0) denote the set of goods connected to buyers in I0.
During a Type I phase the algorithm repeatedly increases the prices of all goods in J, and whenever a new maximum bang-per-buck edge enters the equality graph (Step 9(c)(i)), we update I and J and recompute a balanced flow, thereby starting a new iteration of the phase. Let these iterations be 0, 1, . . . , k. Since each such iteration adds at least one new good to J and |J| ≤ n, we have k ≤ n.
For each iteration t, let pt be the price vector and let It be the corresponding set of active buyers. Define
δt = min
i∈ It
γi ( pt ).
At the start of the phase δ0 = δ, and at the end of the phase (event (1) of Step 9(c)) we have δk = 0 because some buyer in Ik has surplus 0.
Since δ0 = δ and δk = 0 and there are at most k ≤ n iterations, there exists an iteration t ∈ {1, . . . , k} such that
δt−1 − δt ≥ δ
n . (1)
We next show that this drop occurs in the surplus of a single buyer already in It−1. If i′ ∈ It \ It−1 is a newly added buyer, then by Step 9(c)(i)(C) there is a path in the residual graph
of the balanced flow (for prices pt) from i′ to some buyer h ∈ It−1. By Property 1 of balanced flows, which prohibits residual paths from lower surplus to higher surplus buyers, we obtain γi′ (pt) ≥ γh(pt) ≥ δt−1. Hence δt cannot be achieved by a newly added buyer, and therefore there exists i ∈ It−1 such that
γi(pt−1) − γi(pt) ≥ δt−1 − δt ≥ δ
n . (2)
Let σ = γi(pt−1) − γi(pt); then σ ≥ δ/n. Now we apply Lemma 4 to balanced flows ft−1 and ft at prices pt−1 and pt. If the surplus of some buyer decreases by σ, then
∥γ( ft−1)∥22 − ∥γ( ft)∥22 ≥ σ2. (3)
Therefore, from iteration t − 1 to iteration t we have
Φt−1 − Φt ≥ σ2 ≥ δ2
n2 . (4)
In all other iterations of the phase, the potential Φ is nonincreasing: when prices rise, we recompute a balanced flow at the new prices, resulting in a surplus vector with l2-norm no larger than before. Thus overall, from the start to the end of the Type I phase,
Φafter ≤ Φbefore − δ2
n2 . (5)
15

Finally, at the start of the phase every buyer has surplus at most δ, so
Φbefore = ∑
i∈B
γi2 ≤ n δ2.
Combining this with (5) gives
Φafter ≤ Φbefore − δ2
n2 ≤ Φbefore 1 − 1
n3 ,
which completes the proof.
Lemma 7. (Bounding Type II Phases) There are at most n Type II phases throughout the algorithm.
Proof. Each Type II phase removes one buyer from B. Since we start with at most n buyers, there can be at most n such phases.
We next consider Type III phases which end in Step 9(c)(iii)(D), i.e., when buyer i has partial money returned.
Lemma 8. (Bounding Type III Phases) During any Type III phase, the potential Φ decreases by at least a multiplicative factor of 1 − 1/(4n3).
Proof. We will use the notation set up in the proof of Lemma 6. Let δ be the maximum surplus of a buyer at the start of this phase. There are k ≤ n iterations, with iteration k ending in the return of money ρi to buyer i. Let r be the vector of money returned at the start of the phase and r + ρi at the end. Now there are two cases:
Case 1: There is a buyer j ∈ Ik−1 whose surplus drops to ≤ δ/2. If so, there exists an iteration t ∈ {1, . . . , k − 1} such that
δt−1 − δt ≥ δ
2n . (1)
As in Lemma 6, applying Lemma 4, the desired result follows.
Case 2: The minimum surplus of a buyer in Ik−1 is > δ/2.
Since i is in a tight set at the end of the phase, its surplus drops to zero. Let f ∗ be a balanced flow in N (p∗, r) when αi becomes 1 and before money is returned to i. Let the drop in the surplus of i up to this point in iteration k be δk (note that δk may be < 0). When money is returned to i, her surplus drops further by ρi, therefore,
δk + ρi > δ/2.
16

Hence one of δk and ρi is at least δ/4. In the first case, the argument of Lemma 6 applies and gives the desired result. In the second case, on returning money, the surplus of i drops by at least δ/4 and the surplus of other buyers remains unchanged, resulting in a drop in the l1 norm of the surplus vector by the same amount. Consequently, the l22 norm of the surplus vector drops
by at least (δ2/4) and it may decrease further on recomputing a balanced flow. Since Φ at the start of the phase is ≤ nδ2, we get:
Φafter ≤ Φbefore − δ
4
2
≤ Φbefore 1 − 1
16n ≤ Φbefore 1 − 1
4n3 ,
which completes the proof.
We now prove that Algorithm 1 runs in time polynomial in n, log U, and the bit-size of the initial money vector (mi). Our analysis mirrors that of DPSV [DPSV08], but includes two differences specific to the Arctic Auction: (i) buyers may have money returned during the algorithm, and hence their effective budgets (mi − ri) decrease over time; and (ii) the network N(p, r) contains buyer–return arcs that must be accounted for in the bit-size analysis. Importantly, the return of money never increases -
any coordinate of the surplus vector, and therefore never increases the potential function Φ.
Theorem 4. (Running Time)
Let all numbers mi and uij be nonnegative rationals whose numerators and denominators are written with at most L bits in total, and let M = ∑i∈B mi and U = maxi,j uij. Then Algorithm 1 terminates after at most
O n3 log n + n log U + log M
phases, and performs at most
O n5 log n + n log U + log M
max-flow computations.
Proof. At the start of the algorithm, ri = 0 for all i, so 0 ≤ γi ≤ mi. Thus
Φinit = ∑ i
γi2 ≤ ∑
i
mi2 ≤ M2.
Whenever money is returned, (mi − ri) only decreases. Therefore γi never increases, and hence
Φ ≤ Φinit ≤ M2 throughout the algorithm.
Thus decreasing money does not worsen the upper bound for Arctic Auction, compared to [DPSV08].
17

Potential drop per phase: By Lemma 6, in every Type I phase,
Φafter ≤ 1 − 1
n3 Φbefore.
By Lemma 8 in every Type III phase,
Φafter ≤ 1 − 1
4n3 Φbefore.
By Lemma 7, each Type II phase removes one buyer permanently, and hence there are at most n Type II phases.
Thus for every Type I or Type III phase, we have the uniform multiplicative decrease
Φafter ≤ 1 − 1
4n3 Φbefore. (2)
Lower bound on nonzero potential: All prices, flows, surpluses, and money-return values arise as solutions of linear systems of equations with coefficients taken from {mi}, {uij} and previous values of (p, r), all of which have bit-size at most O(log n + n log U + log M) by the same argument used in [DPSV08]. Thus every rational number appearing in the algorithm has denominator
of size at most 2O(log n+n log U+log M).
Hence if any γi > 0, then
γi ≥ 2−O(log n+n log U+log M),
and therefore
Φ ≥ 2−O(log n+n log U+log M). (3)
This lower bound does not depend on the current total money ∑i(mi − ri) and therefore remains valid even as money is returned.
Bounding the total number of phases and max-flow computations: Let K denote the number of Type I plus Type III phases. By repeated application of (2), we obtain
Φfinal ≤ 1 − 1
4n3
KΦinit ≤ 1 − 1
4n3
K
M2.
As long as the algorithm has not terminated, Φ > 0, and hence by (3),
2−O(log n+n log U+log M) ≤ 1 − 1
4n3
K
M2.
Taking logarithms and using ln(1 − x) ≤ −x, we obtain
K = O n3 log n + n log U + log M .
Each phase consists of at most n iterations, since each iteration adds a new mbpb edge and no such edge can be added twice. Since the balanced-flow procedure of DPSV requires n max-flow computations (Section 8 of [DPSV08]), each iteration requires at most O(n) max-flow computations. Therefore each phase uses O(n2) max-flow calls, giving a total of O(n5(log n + n log U + log M)) max-flows.
18

6 Linear Fisher Market with Constant Marginal Costs
Definition 6. The Linear Fisher market with constant marginal costs for production differs from Definition 1 in two respects: first, there is no upper bound on the amount of goods available for sale, and second, for each good j, the production cost incurred by the seller for good j is given by a function cj : R+ → R+ with cj(yj) = dj · yj, where dj > 0 is a rational parameter. Because supply is unbounded, we are not seeking a competitive equilibrium3.
Allocations and prices must satisfy: each buyer gets a utility maximizing bundle of goods and the money of each buyer is either spent on goods or is returned. The seller’s revenue is defined to be
∑
i∈B
mi − s.
For each good j, let yj = ∑i∈B xij, i.e., the amount of good j sold. Then the profit of the seller is defined to be:
∑
i∈B
mi − s − ∑
j∈G
cj(yj).
We will show that the following variant of program (1) captures optimal allocations and prices for the market given in Definition 6.
max ∑
i∈B
mi(log (wi(xi) + si) − s − ∑
j∈G
dj · yj
s.t. ∑
i∈B
xij − yj = 0 ∀j ∈ G,
∑
i∈B
si − s = 0,
xij ≥ 0 ∀i ∈ B, j ∈ G,
si ≥ 0 ∀i ∈ B
(4)
Let pj and λ be the dual variables corresponding to the first and second constraints of (4). Optimal solutions to the primal and dual variables must satisfy KKT conditions, in addition to the constraints of (4):
1. ∀j ∈ G : dj − pj ≥ 0.
2. ∀j ∈ G : yj > 0 =⇒ dj = pj.
3. 1 − λ ≥ 0.
4. s > 0 =⇒ λ = 1
5.
∀ i ∈ B, ∀j ∈ G : uij
pj
≤ wi(xi) + si
mi
.
3This model is not used for central-bank liquidity matters and therefore ”arctic auction” has been dropped from the name.
19

6.
∀ i ∈ B, ∀j ∈ G : xij > 0 =⇒ uij
pj
= wi(xi) + si
mi
.
7.
∀ i ∈ B : λ ≥ mi
wi(xi) + si
.
8.
∀ i ∈ B : si > 0 =⇒ λ = mi
wi(xi) + si
.
It is easy to see that the statements given in Lemma 1 hold for this market as well and optimal primal and dual solutions to convex program (4) satisfy them via the same proof as given in Lemma 2.
Theorem 5. There exist optimal primal and dual solutions to convex program (4) which form a solution to a Fisher market with constant marginal costs for production. At such a solution, the seller’s revenue is maximized and his profit will be zero.
Proof. Three facts need to be established.
1). Buyers get optimal bundles: By Lemma 1, each good bought by i is an mbpb good for i, and if money is returned, it provides at least as much utility as mbpb goods. Furthermore, for each buyer i, all her money is either spent on mbpb goods or is returned, i.e.,
mi = ∑
j∈G
uijxij + si.
2). The seller maximizes her revenue: We will consider three cases:
Case 1: αi > 1. If so, i’s mbpb goods give her more utility than money. Therefore in every optimal primal, si = 0, i.e., i spends all her money on goods and it becomes the seller’s revenue.
Case 2: αi = 1. If so, i gets the same utility from her mbpb goods as from money. In this case, we will assume that i spends all her money on goods and it becomes the seller’s revenue.
Case 3: αi < 1. If so, i derives more utility from money than her mbpb goods. Therefore in every optimal primal, si = mi.
3). The seller’s profit will be zero: By KKT condition (2), if yj > 0, pj = dj. As a result, all the revenue made from selling good j, i.e., pj · yj, will be used for paying cost, since dj · yj = pj · yj. Therefore seller’s profit will be zero.
Theorem 6. Convex program (4) is a rational convex program.
Proof. The proof is easier than the one for Theorem 2 because for each good j that is sold to a non-zero extent, pj = dj, establishing its rationality. Corresponding to non-zero xijs and sis, we will use the linear equations given in Theorem 2 to obtain the required linear system.
20

6.1 Efficient Greedy Algorithm
The algorithm for obtaining a solution is straightforward. We set that the price pj of each good j to dj. If for a buyer i, αi < 1, i.e., the price of each good j is greater than her upper bound of uij, then we return money mi to i and remove her from consideration.
For the remaining buyers, αi ≥ 1. For each such buyer i, we find Mi, the set of her mbpb goods. Allocate goods j ∈ Mi worth mi money arbitrarily, i.e., xij > 0 only if j ∈ Mi and ∑j∈G xij · pi = mi. These prices and allocations will constitute a solution.
7 Discussion
Following up on [DPSV08], Orlin gave a strongly polynomial time algorithm for computing an equilibrium for the linear Fisher market [Orl10]. Is such an extension possible for the Arctic Auction as well?
8 Acknowledgements
I wish to express my gratitude to Paul Klemperer and Edwin Lock for their generous help which got me started on this project. Paul introduced me to the elegant notion of Arctic Auction and Edwin informed me about several useful references.
References
[BGKL24] Elizabeth Baldwin, Paul W Goldberg, Paul Klemperer, and Edwin Lock. Solving strong-substitutes product-mix auctions. Mathematics of Operations Research, 49(3):1502–1534, 2024.
[BK19] Elizabeth Baldwin and Paul Klemperer. Understanding preferences:“demand types”, and the existence of equilibrium with indivisibilities. Econometrica, 87(3):867–932, 2019.
[BKL24] Elizabeth Baldwin, Paul Klemperer, and Edwin Lock. Implementing walrasian equilibrium: the languages of product-mix auctions. Available at SSRN 4931623, 2024.
[CDG+17] Richard Cole, Nikhil Devanur, Vasilis Gkatzelis, Kamal Jain, Tung Mai, Vijay V Vazirani, and Sadra Yazdanbod. Convex program duality, fisher markets, and nash social welfare. In Proceedings of the 2017 ACM Conference on Economics and Computation, pages 459–460, 2017.
[CYZ07] Lihua Chen, Yinyu Ye, and Jiawei Zhang. A note on equilibrium pricing as convex optimization. In International Workshop on Web and Internet Economics, pages 7–16. Springer, 2007.
[DGM16] Ran Duan, Jugal Garg, and Kurt Mehlhorn. An improved combinatorial polynomial algorithm for the linear arrow-debreu market. In Proceedings of the twenty-seventh annual ACM-SIAM symposium on discrete algorithms, pages 90–106. SIAM, 2016.
21

[DGV16] Nikhil R Devanur, Jugal Garg, and La ́szlo ́ A Ve ́gh. A rational convex program for linear arrow-debreu markets. ACM Transactions on Economics and Computation (TEAC), 5(1):1–13, 2016.
[DM15] Ran Duan and Kurt Mehlhorn. A combinatorial polynomial algorithm for the linear arrow–debreu market. Information and Computation, 243:112–132, 2015.
[DPSV02] Nikhil R Devanur, Christos H Papadimitriou, Amin Saberi, and Vijay V Vazirani. Market equilibrium via a primal-dual-type algorithm. In The 43rd Annual IEEE Symposium on Foundations of Computer Science, 2002. Proceedings., pages 389–395. IEEE, 2002.
[DPSV08] Nikhil R Devanur, Christos H Papadimitriou, Amin Saberi, and Vijay V Vazirani. Market equilibrium via a primal–dual algorithm for a convex program. Journal of the ACM (JACM), 55(5):22, 2008.
[Edm65] J. Edmonds. Maximum matching and a polyhedron with 0,1-vertices. Journal of Research of the National Bureau of Standards B, 69B:125–130, 1965.
[EG59] E. Eisenberg and D. Gale. Consensus of subjective probabilities: the Pari-Mutuel method. The Annals of Mathematical Statistics, 30:165–168, 1959.
[FFW11] Paul Fisher, Tarkus Frost, and Olaf Weeken. Pricing central bank liquidity through product-mix auctions–the first anniversary of the bank of england’s indexed longterm repo operations. 2011.
[FGL23] Simon Finster, Paul Goldberg, and Edwin Lock. Competitive and revenue-optimal pricing with budgets. arXiv preprint arXiv:2310.03692, 2023.
[Fic22] Maximilian Fichtl. Computing candidate prices in budget-constrained product-mix auctions. arXiv preprint arXiv:2208.02633, 2022.
[GTV24] Jugal Garg, Thorben Tr  ̈obst, and Vijay Vazirani. One-sided matching markets with endowments: equilibria and algorithms. Autonomous Agents and Multi-Agent Systems, 38(2):40, 2024.
[GV11] Gagan Goel and Vijay V Vazirani. A perfect price discrimination market model with production, and a rational convex program for it. Mathematics of Operations Research, 36(4):762–782, 2011.
[HZ79] Aanund Hylland and Richard Zeckhauser. The efficient allocation of individuals to positions. Journal of Political economy, 87(2):293–314, 1979.
[Jai07] Kamal Jain. A polynomial time algorithm for computing an arrow–debreu market equilibrium for linear utilities. SIAM Journal on Computing, 37(1):303–318, 2007.
[JV10] Kamal Jain and Vijay V Vazirani. Eisenberg–gale markets: algorithms and gametheoretic properties. Games and Economic Behavior, 70(1):84–106, 2010.
[Kle08] Paul Klemperer. A new auction for substitutes: Central bank liquidity auctions, the u.s. tarp, and variable product-mix auctions, 2008. https://www.nuffield.ox.ac. uk/economics/Papers/2008/substsauc.pdf.
22

[Kle10] Paul Klemperer. The product-mix auction: A new auction design for differentiated goods. Journal of the European Economic Association, 8(2-3):526–536, 2010.
[Kle18] Paul Klemperer. Product-mix auctions, 2018. http://www.nuffield.ox.ac.uk/ users/klemperer/productmix.pdf.
[LP86] L. Lova ́sz and M.D. Plummer. Matching Theory. North-Holland, Amsterdam–New York, 1986.
[Orl10] James B Orlin. Improved algorithms for computing fisher’s market clearing prices: Computing fisher’s market clearing prices. In Proceedings of the forty-second ACM symposium on Theory of computing, pages 291–300, 2010.
[Sch86] A. Schrijver. Theory of Linear and Integer Programming. John Wiley & Sons, New York, NY, 1986.
[Vaz07] Vijay V Vazirani. Combinatorial algorithms for market equilibria. Algorithmic game theory, pages 103–134, 2007.
[Vaz10] Vijay V Vazirani. Spending constraint utilities with applications to the adwords market. Mathematics of Operations Research, 35(2):458–478, 2010.
[Vaz12a] Vijay V Vazirani. The notion of a rational convex program, and an algorithm for the arrow-debreu nash bargaining game. Journal of the ACM (JACM), 59(2):1–36, 2012.
[Vaz12b] Vijay V Vazirani. Rational convex programs and efficient algorithms for 2-player nash and nonsymmetric bargaining games. SIAM Journal on Discrete Mathematics, 26(3):896918, 2012.
[VY25] Vijay V Vazirani and Mihalis Yannakakis. Computational complexity of the hyllandzeckhauser mechanism for one-sided matching markets. SIAM Journal on Computing, 54(2):193–232, 2025.
[Ye07] Yinyu Ye. Exchange market equilibria with leontief’s utility: Freedom of pricing leads to rationality. Theoretical Computer Science, 378(2):134–142, 2007.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:07.387Z
- **Text Length:** 55286 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
