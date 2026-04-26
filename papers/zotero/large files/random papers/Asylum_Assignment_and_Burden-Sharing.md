# PDF Document: Caspari and Khanna - 2025 - Asylum Assignment and Burden-Sharing.pdf

**File Path:** Caspari and Khanna - 2025 - Asylum Assignment and Burden-Sharing.pdf

**Processed Date:** 2026-02-10T18:15:56.387Z

**File Size:** 537.94 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3221

**Title:** Asylum Assignment and Burden-Sharing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Asylum Assignment and Burden-Sharing∗
Gian Caspari† Manshu Khanna‡
November 27, 2025
Abstract
We analyze the problem of matching asylum seekers to member states, incorporating wait times, preferences of asylum seekers, and the priorities, capacities, and burden-sharing commitments of member states. We identify a unique choice rule that addresses feasibility while balancing priorities and capacities. We examine the effects of both homogeneous and heterogeneous burden-sizes among asylum seekers on the matching process. Our main result shows that when all asylum seekers are treated as having -
identical burden-sizes, the asylum-seeker-proposing cumulative offer mechanism guarantees both stability and strategy-proofness. In contrast, when burden-sizes vary, there are scenarios where achieving stability or strategy-proofness is no longer possible.
JEL Classification: C62, C78, D47, J15
Keywords: Matching Theory, Market Design, Stability, Asylum Assignment
∗This paper replaces and subsumes Caspari (2019). We are grateful to Tayfun S ̈onmez, M. Utku U ̈ nver, M. Bumin Yenmez, David Delacretaz, Alex Teytelboym, and Kenzo Imamura for their valuable feedback, as well as to participants at the Boston College dissertation workshop, the Nuffield postdoc seminar, MatchUp 2019, and the SAET Conference 2019. We are grateful to Yuan Gao for helpful research assistance. Gian Caspari acknowledges financial support from the Swiss National Science Foundation (SNSF-
) through a doctoral mobility stipend, facilitating his research visit to Oxford University during this project. †Department of Market Design, ZEW — Leibniz Centre for European Economic Research, Mannheim 68161, Germany. Email: gian.caspari@zew.de. ‡Peking University HSBC Business School, Shenzhen 518055, China. Email: manshu@phbs.pku.edu.cn.
1
arXiv:2511.21147v1 [econ.TH] 26 Nov 2025

1 Introduction
When arriving in the European Union, an asylum seeker must submit an application for pro
tection in a single member state. If successful, the person will be granted refugee status or
subsidiary protection by the country that examined the asylum claim. The responsible mem
ber state cannot be chosen freely. Under the Common European Asylum System (CEAS),
the asylum seekers are required to lodge their application for protection in the country in
which they initially arrive.1 This places a disproportionate burden on countries located at
the border of the European Union. Its decentralized approach to asylum assignments leads
to delays and disputes over responsibility, while its strict no-choice approach incentivizes
asylum seekers to engage in illegal secondary movements to reach a more preferred member
state (Maiani, 2016).
1.1 An Alternative Asylum System
A centralized asylum system provides an alternative to the current decentralized approach
by considering both the preferences of asylum seekers and the priorities of member states.
Under this system, member states retain control over eligibility determinations, while asy
lum seekers still apply for asylum at a single member state. Upon registration, asylum
seekers would submit their preferences, and a centralized clearinghouse would then assign
responsibility to a member state based on this information. Once a responsible member
state is designated, asylum seekers must travel to and remain in that state while awaiting
their asylum decision.
Unlike the current system, the centralized approach allows asylum seekers to express
preferences for specific member states, giving them greater agency in the process. This en
sures their preferences are factored into the assignment, making the system more responsive
to their needs. Meanwhile, member states maintain control over eligibility determinations,
allowing them to prioritize and regulate decisions according to their own standards. Impor
tantly, the centralized system designates a responsible state before the asylum application is
processed, avoiding the logistical challenge of relocating refugees after their status is deter
mined.
The decentralized system often struggles to process claims in a timely manner, as re
quired by the Charter of Fundamental Rights of the European Union (Beck et al., 2014).2
1This rule is stated in Article 9 on page 62 of the Text of the agreement on Asylum and migration management regulation. Document last accessed on 22 October 2024 at https://www.europarl.europa.eu/meetdocs/2014_2019/plmrep/COMMITTEES/LIBE/DV/2024/02-14/ 06.RAMM_Asylumandmigrationmanagement_EN.pdf.
2The suggested timeline for a standard asylum claim is six months, and member states must inform
2

The centralized system addresses this by allowing asylum seekers to express preferences for
member states with shorter wait times, avoiding overburdened states and reducing delays.
Recent evidence further underscores the importance of waiting times in shaping asylum
seekers’ location decisions. Farajzadeh et al. (2023) examine a sponsored parole program
for Ukrainian refugees and find that waiting times significantly influence whether families
accept an immediate offer of a sponsor in a less-preferred area, or instead opt to join a
separate queue for a more desirable placement. Their results suggest that applicants will
incur substantial additional waiting time to secure sponsorship in a preferred locality and
that even small improvements in how waiting times are managed can have a major impact
on overall matching efficiency and family well-being. These findings lend empirical support
to the view that incorporating waiting-time considerations into asylum or parole matching
systems is crucial to ensuring that location choices better reflect refugees’ actual preferences.
European regulators have also proposed burden-sharing quotas that set targets for the
number of asylum applications each member state should process. As the European Com
mission (2016) states, “A corrective allocation mechanism should be established to ensure a
fair sharing of responsibility between Member States [...] in situations when a Member State
faces a disproportionate number of applications for international protection.” We show that
a centralized mechanism is particularly well-suited to facilitate the implementation of these
burden-sharing quotas across the EU.
1.2 Summary of Model and Analysis
We formulate the asylum system as matching with contracts problem (Hatfield and Milgrom,
2005), where a contract specifies an asylum seeker, a member state, and a wait time. Asy
lum seekers submit their preferences over combinations of wait times and member states.
Following the CEAS, asylum seekers are restricted to a single application for protection,
making it a many-to-one matching problem. An asylum seeker making an application can
either represent an individual or a group of immediate family members applying for asylum
at the same time. Therefore, each asylum seeker is given a burden-size. Member states are
required to make an asylum decision after the agreed-upon wait time ends. When scheduling
asylum applications, member states are constrained by their bureaucratic capacities, repre
senting the maximum number of asylum claims that can be processed in a given period. A
member state’s burden-sharing quota specifies the total amount of burden-size over asylum
applications that have to be scheduled. Finally, to decide between different asylum seekers,
applicants if the process takes longer. However, providing an estimated completion date does not imply a strict obligation to meet that timeframe (Beck et al., 2014).
3

each member state (strictly) ranks asylum seekers in terms of priority.3
A growing body of work employs mechanism design to account for states’ heterogeneous
costs, refugees’ diverse preferences, and the political constraints over “who goes where.” In
particular, Hagen (2022, 2024a,b) stress that effective relocation schemes must accommodate
cross-country differences (e.g., population, GDP, attitudes toward immigration) and address
informational hurdles (such as free-riding or misrepresentation). They also underscore that
suitable matching or quota-trading frameworks hinge crucially on “distribution keys” spec
ifying not only how many refugees each state should host but also why—these do not arise
spontaneously, but rather from political bargaining, fairness doctrines, or prior agreements
(e.g., the Dublin Regulation). In this paper, we treat burden-sharing quotas and bureau
cratic capacities as exogenously fixed to focus on the matching design; however, Moraga and
Hagen (2021) show that determining these parameters can itself be just as contentious as
designing the matching mechanism.
We focus on finding a stable and strategy-proof mechanism for this problem. A stable
mechanism avoids situations in which an asylum seeker prefers a different contract to the
one she is assigned, and the member state specified in the more desirable contract is willing
to handle her claim in the specified wait time. A strategy-proof mechanism (for asylum
seekers) makes sure that misreporting preferences is not beneficial for asylum seekers, and
thus it is their best interest to state their preferences truthfully.4
We characterize a member state choice rule over contracts in Theorem 1. This choice
rule takes into account a member state’s priority order, bureaucratic capacities, and burden
sharing quota, to make a selection from a given set of contracts. Given the member state
choice rule, in Theorem 2 we show that: if asylum seekers are treated as having iden
tical burden-sizes, the asylum-seeker-proposing cumulative offer mechanism (Hatfield and
Milgrom, 2005) is stable and strategy-proof. However, when asylum seekers have different
burden-sizes, Example 1 and Example 2 illustrate why both stability and strategy-proofness
might not be achievable.
The proof of Theorem 2 builds upon the results developed in the literature on many-to-one
matching markets with contracts. In particular, the member state choice rule (characterized
in Theorem 1) violates the substitutes condition and the law of aggregate demand (Kelso Jr
3Member states’ priority ranking criteria can be chosen freely as long as they don’t interfere with article 14 of the European Convention on Human Rights (Jones and Teytelboym, 2017a), which prohibits discrimination on any grounds such as religion or race (European Council of Human Rights, 2013). For example, in 2015, the former prime minister of Britain, David Cameron, announced the acceptance of up to 20,000 refugees from Syria, prioritizing vulnerable children and orphans (BBC, 2015). Ties betw-
een asylum seekers with identical characteristics may be broken randomly whenever necessary. 4We consider manipulations on the part of asylum seekers only. That is, we assume that member states cannot misreport priorities.
4

and Crawford, 1982; Hatfield and Milgrom, 2005; Hatfield and Kojima, 2010). However, for
the case of homogenous burden-sizes, we show that a completion of the choice rule exists
(Proposition 2(i)), as in Hatfield and Kominers (2019), that satisfies the substitutes condi
tion if large burden-size asylum seekers are prioritized over smaller ones (Proposition 2(iii)).
While the law of aggregate demand is satisfied if small burden-size asylum seekers are pri
oritized over larger ones (Proposition 2(iv)). The cumulative offer mechanism is stable and
strategy-proof for identical burden-sizes because both requirements on the priority orderings
are satisfied simultaneously.
We can obtain the same result by constructing an associated one-to-one market following
Kominers and S ̈onmez (2016) to show that the cumulative offer mechanism is stable and
strategy-proof for asylum seekers. We use Hatfield and Kominers (2019) because it helps us
illustrate the lacking of cumulative offer mechanism in handling heterogeneous burden sizes.
With heterogeneous burden sizes, standard guarantees such as stability, substitutability, and
strategy-proofness can fail. When a member state’s priorities do not meet the large or small
burden-size conditions, there may be no completion that satisfies substitutability or the law
of aggregate demand (see Example 3 and Example 4), and in general, no mechanism is both
stable and strategy-proof (Theorem 3). However, if priorities do satisfy large burden-size
priority, the asylum-seeker-proposing cumulative-offer mechanism attains a stable outcome
and is only non-obviously manipulable (Proposition 3), meaning that no profitable misreport
strictly improves either an asylum seeker’s worst-case or best-case outcome, thereby ruling
out obvious manipulations (see Troyan and Morrill, 2020).
1.3 Related Literature
The concept of managing refugee flows through organized systems has been discussed in
the literature, starting with Schuck (1997), who proposed that each member state should
bear a share of responsibility for temporary protection and permanent resettlement based
on a quota system. Moraga and Rapoport (2014) further developed this idea, proposing
a system for trading quotas multilaterally without monetary exchange, aimed at resettling
longstanding refugees and asylum seekers within the European Union. They were also the
first to mention the possibility of combining a quota system with a matching mechanism,
paving the way for subsequent models.
Jones and Teytelboym (2016, 2017a,b) expanded on this by advocating for the use of
matching mechanisms to enhance or replace existing resettlement practices. They differen
tiated between two levels of refugee matching: the global refugee match, operating at an in
ternational scale, and the local refugee match, which focuses on community-level integration
5

within a country. In the international context, Jones and Teytelboym (2017a,b) suggested
that the “thickness” of the market allows refugee allocation to be effectively modeled as a
standard school choice problem (Balinski and So ̈nmez, 1999; Abdulkadirog ̆lu and So ̈nmez,
2003). Thus asylum seekers, whether individuals or families, can be treated equivalently in
terms of burden-size, simplifying the allocation process.
The local refugee match, however, presents more complex challenges (Jones and Teytel
boym, 2018). Delacr ́etaz et al. (2023) introduced a framework that incorporates multidimen
sional knapsack constraints, accounting for the thinness of the market and the limitations
of local resources. Andersson et al. (2018) proposed a dynamic model that assigns refugees
to localities based on types and locality-specific quotas. Additionally, Andersson and Ehlers
(2020) examined a market for allocating private housing to refugees, where landlords have
preferences over the sizes of refugee families and the native languages they speak, highlighting
the nuanced preferences that need to be considered in local resettlement. Ahani et al. (2021)
and Ahani et al. (2024) provided practical insights by assisting a U.S. resettlement agency
in matching refugees to their initial placements, achieving improved employment outcomes.
Our work differs from previous studies by incorporating wait times into the global refugee
match and addressing the differential burden-sizes across asylum seekers. Unlike past mod
els, which assume the refugees’ status is determined prior to matching, our approach directly
matches asylum seekers, allowing member states to retain control over the eligibility deter
mination process. This conceptual shift necessitates the use of new framework based on
matching with contracts model that must account for the strategic considerations over both
member states and wait times.
Our work also relates to the literature on stable matchings with sizes, where comple
mentarities arise from a combination of bureaucratic capacities and differential burden-sizes
rather than hard capacity constraints (Dean et al., 2006; McDermid and Manlove, 2010; Biro ́
and McDermid, 2014; Yenmez, 2018; Nguyen and Vohra, 2018; Delacr ́etaz, 2019). While the
non-existence of stable allocations in matching with sizes is often due to rigid capacity limits,
instability in our problem does not arise from the same, as burden-sharing quotas are not
hard constraints. Nonetheless, Proposition 2 reveals a tradeoff unique to matching problems
involving agents of varying “sizes,” echoing well-known impossibility results: accommodating
multi-unit agents (e.g., part-time versus full-time seats, day-care allocations, couples in the
NRMP, or families in refugee resettlement) often forces a choice between competing notions
of fairness or stability. In particular, as Delacre ́taz (2019) and Delacr ́etaz et al. (2023) show,
there is frequently no matching (or matching rule) that both avoids ‘waste’ and respects all
capacity constraints when agents differ in their size of demand. Translating that tension to
our setting, ensuring both substitutability and LAD with size-dependent priorities typically
6

forces one to forgo at least one property in favor of the other.
Our work is also connected to the literature on matching with contracts, which has
been explored in various contexts (Ayg ̈un and Turhan, 2020; Hassidim et al., 2017; Yenmez,
2018; S ̈onmez and Switzer, 2013; Dimakopoulos and Heller, 2019). Among these studies, our
setup is most closely related to Dimakopoulos and Heller (2019). Of particular relevance
is Dimakopoulos and Heller (2019), which examines the German entry-level labor market
for lawyers, incorporating wait times as a contract term. While both models address wait
times, our approach uniquely accounts for member state choice rules, the consideration of
differential burden-sizes, and the inclusion of bureaucratic capacities, highlighting the unique
complexities inherent in asylum assignment.
2 Model and Definitions
An asylum seeker matching problem consists of
1. a finite set of asylum seekers A,
2. a finite set of member states M ,
3. a finite set of wait times W ⊂ R+,
4. a burden-size for each asylum seeker s : A 7→ N,
5. a list of burden-sharing quotas q = (qm)m∈M with P
m∈M qm ≥ P
a∈A s(a).
6. a list of bureaucratic capacities r = (rw
m)m∈M,w∈W with P
w∈W rw
m ≥ qm for all m ∈ M ,
7. a list of preference rankings P = (Pa)a∈A over M × W , and
8. a list of priority orders π = (πm)m∈M over A.
An asylum seeker’s burden-size s(a) specifies the amount of burden an asylum seeker’s
application consumes from a member state’s burden-sharing quota. This allows an asylum
maker applying on behalf of her immediate family differently from an asylum seeker applying
as an individual. We say that an asylum seeker matching problem ⟨s, P ⟩ specifies the same
burden-size for every asylum seeker if s(a) = s(a′) for all a, a′ ∈ A.
A member state’s burden-sharing quota qm specifies the minimum number of applica
tions a member state has to process. Since every asylum seeker has the right to submit an
application, we require that the sum of burden-sharing quotas exceeds the sum of burden
sizes, that is, P
m∈M qm ≥ P
a∈A s(a).
7

Each asylum seeker’s application takes up one unit of bureaucratic capacity. A mem
ber state m can process at most rw
m ≥ 0 asylum seekers in time period w. Moreover, total
bureaucratic capacities are sufficiently large to schedule any asylum seeker if a long enough
time horizon W is considered, that is, P
w∈W rw
m ≥ |A| for all m ∈ M .
Each asylum seeker has a preference ranking Pa over wait-time-member-state combi
nations M × W , with the corresponding weak preference written as Ra.5 Let P denote the
set of all preference profiles.6
Each member state has a priority order πm over the set of asylum seekers A, indicating
the order in which they would prefer to accept applicants.
We fix A, M , W , q, r, and π, denoting an asylum seeker matching problem by ⟨s, P ⟩.
To encompass wait times, we use a matching with contracts framework. A contract x =
(a, m, w) ∈ X = A × M × W specifies an asylum seeker a ∈ A, a member state m ∈ M ,
and a wait time w ∈ W . Let X denote the set of all subsets of X. Given a contract x ∈ X,
let ax represent the asylum seeker, mx the member state, and wx the wait time specified in
the contract. For some subset of contracts X′ ⊆ X, let X′
a = {x ∈ X′ : ax = a} denote the
set of contracts asylum seeker a is part of, with equivalent notation for member states and
wait times. Let A(X′) = {a ∈ A : ax = a for some x ∈ X′} denote the set of asylum seekers
specified in a subset of contracts X′ ⊆ X, again equivalently defined for member states and
wait times. An allocation Y ⊆ X is a set of contracts with |Ya| ≤ 1 for all a ∈ A, and
|Ym ∩ Yw| ≤ rw
m for all m, w ∈ M × W . Let Y denote the set of all allocations. Slightly
abusing notation, we will use Pa for preferences over contracts and allocations.7
3 Member State Choice Rule
A choice rule for a member state makes a selection out of a set of contracts based on the
member state’s priority ordering, burden-sharing quota, and bureaucratic capacities. A
choice rule Cm : X 7→ X associates with each subset of contracts X′ ∈ X a subset of
contracts Cm(X′) ∈ X such that Cm(X′) ⊆ X′
m.
5Pa is a strict simple order, that is, a binary related that is transitive, asymmetric, and complete (ranks everything except (x, x) — a contract with itself). The associated simple order Ra is transitive, antisymmetric, and strongly complete (ranks everything).
6One might assume that asylum seekers prefer lower wait times for the same member state. However, we allow for more general preferences to accommodate the concept of humanitarian visas. This means asylum seekers could opt for longer wait times outside the EU to allow enough time to apply for a humanitarian visa, which requires a designated member state at the time of application, and then travel there after the centralized match. 7For any x, x′ ∈ X we say x Pa x′ ⇐⇒ (mx, wx) Pa (mx′ , wx′ ), and f-
or any Y, Y ′ ∈ Y we say Y Pa Y ′ ⇐⇒ Ya Pa Ya′.
8

We say that, an asylum seeker a ∈ A(X′) qualifies for acceptance under X′ ∈ X if
X
{a′ ∈A(Cm (X ′ )):a′ πm a}
s(a′) < qm.
For a given choice rule and a subset of contracts, consider the set of asylum seekers with at
least one contract accepted. An asylum seeker qualifies for acceptance if the total burden-size
of already accepted asylum seekers with a higher priority is strictly less than the member
state’s burden-sharing quota. Therefore, being “over quota” does not automatically dis
qualify an applicant. Instead, quotas serve as soft budget guidelines rather than absolute
restrictions on assignment.
We say that, an asylum seeker a ∈ A(X′) qualifies for wait time w ∈ W under X′ ∈ X
if X′
a ∩ X′
w ̸= ∅ and
|{a′ ∈ A(Cm(X′)w) : a′πma}| < rw
m.
For a given choice rule, wait time, and a subset of contracts, consider the set of asylum
seekers with a contract accepted for the relevant wait time. An asylum seeker qualifies for
that wait time if the number of higher priority asylum seekers scheduled for that wait time
is strictly less than the relevant bureaucratic capacity.
With this in mind, we propose a choice rule for member states that satisfies the following
three properties:
• A choice rule Cm satisfies feasibility if for all X′ ∈ X, for all a ∈ A(X′), and for all
w ∈ W , we have
|Cm(X′)a| ≤ 1 and |Cm(X′)w| ≤ rw
m.
A choice rule is feasible if at most one contract is accepted per asylum seeker and
the member state’s bureaucratic capacities are not violated. This is unquestionably
essential and is often assumed.
• A choice rule Cm satisfies early filling if for all x ∈ Cm(X′), and x′ ̸∈ Cm(X′), such
that ax = ax′ = a and wx′ < wx, the asylum seeker does not qualify for the lower wait
time wx′.
For a given subset of contracts, a choice rule satisfies early filling if for any accepted
contract there does not exists a lower wait time contract for which there is still bu
reaucratic capacity left. This minimizes overall wait times at the member state.
• A choice rule Cm respects member state priorities if for all X′ ∈ X an asylum
seeker a ∈ A(X′) ends up with a contract if and only if she qualifies for acceptance
9

and a wait time.
This property ensures that if an asylum envies another asylums seekers’ contracts, then
that asylum seeker must have a higher priority.
Our main result in this section shows that there is a unique choice rule that satisfies
feasibility, early filling, and respects member state priorities. The choice rule is straight
forward and intuitive: asylum seekers are processed one by one in order of priority. Each
is assigned the contract with the shortest waiting time that still has sufficient bureaucratic
capacity. The process continues until either all asylum seekers have been matched or the
burden-sharing quota is fully met, at which point no further contracts are accepted.
Member state choice rule Cˆm for a set of contract X′ ⊆ X:
Step k ≥ 1:
1. Let Xk−1 denote the set of accepted contracts with X0 = ∅, and let Zk−1 = {x ∈ X′
m:
rwmx > |Xk−1
wx | and ax ̸∈ A(Xk−1)} denote the set of contracts specifying an asylum
seeker not yet accepted with a wait time that has bureaucratic capacity left.
If either the burden-sharing quota is reached P
x∈Xk−1 s(ax) ≥ qm or no acceptable
contract is left Zk−1 = ∅ the algorithm ends and Cˆm(X′) = Xk−1.
2. Otherwise, determine the highest priority asylum seeker left ak, defined as a ∈ A(Zk−1)
such that a π a′ for all a′ ∈ A(Zk−1) \ {a}.
Then, accept the lowest wait time contract xk available for that asylum seeker, defined
as x ∈ Zk−1
ak such that wx < wx′ for all x′ ∈ Zk−1
ak \ {x}.
Adjust the set of accepted contracts Xk = Xk−1 ∪ {xk} and proceed to step k + 1.
Hereafter, we will use Cˆm as the relevant choice rule, which is characterized in following
result. Proof of Theorem 1 is relegated to Section A.
Theorem 1. A choice rule Cm satisfies feasibility, early filling, and respects member state
priorities if and only if it is Cˆm.
4 A Stable and Strategy-Proof Mechanism
In this section, we introduce a mechanism with desirable properties designed to assign asylum
seekers to member states and manage wait times. We will start with the relevant definitions:
• A mechanism is a function φ that assigns every asylum seeker matching problem
⟨s, P ⟩ an allocation φ(s, P ) ∈ Y.
10

• A mechanism φ is (pairwise) stable if for problem ⟨s, P ⟩ if for every pair a ∈ A,
m ∈ M and contract x ∈ X \ φ(s, P ),
x Pa φ(s, P ) =⇒ x ̸∈ Cmx(φ(s, P ) ∪ {x}).
A mechanism is considered (pairwise) stable if, whenever an asylum seeker prefers
a contract over the one assigned to them by the mechanism, the member state in
volved would reject this alternative contract when evaluated alongside its existing set
of assigned contracts. Thus, stability ensures fairness by preventing any party from
benefiting at the expense of another.8
• A mechanism φ is strategy-proof (for asylum seekers) for problem ⟨s, P ⟩, if for all
a ∈ A, Pˆa ∈ Pa, we have
φ(s, P ) Ra φ(s, Pˆa, P−a).
A mechanism is strategy-proof if for every asylum seeker, revealing her true preferences
is a weakly dominant strategy.
4.1 Homogenous Burden-size
If asylum seekers are treated identically in terms of burden-sizes, then a stable and strategy
proof mechanism exists, namely, the asylum-seeker-proposing cumulative offer mechanism.
We start by defining this mechanism:
Asylum seeker proposing cumulative offer mechanism φc:
Step k ≥ 1.
1. Let Xk denote the set of proposed contacts with X0 = ∅.
A contract x ∈ Xk−1 is tentatively accepted if x ∈ Cmx(Xk−1) and rejected otherwise.
If there is any, let some asylum seeker a, with currently no contract tentatively ac
cepted, propose her most preferred contract, following Pa, among contracts that have
not been proposed xk ∈ X \ Xk. Then, set Xk = Xk−1 ∪ {xk}.
2. Otherwise, the process terminates with φc(s, P ) = S
m∈M Cm(X k−1
m ).
8We follow the matching with contracts tradition, defining stability via the absence of blocking pairs in agents’ choice functions (including priorities/constraints). While it is standard to require that no asylummember state pair strictly prefers to deviate, this does not necessarily imply “no justified envy.” As Romm et al. (2024) illustrate, stable allocations can still allow for higher-priority agents being left out while lowerpriority agents are accepted. Nonetheless, focusing on pairwise blo-
cking fully respects each side’s feasible choices by guaranteeing no local incentive to re-match and aligns with real-world decision rules.
11

Theorem 2. Suppose every member state is equipped with choice rule Cˆm. Then the asylum
seeker-proposing cumulative offer mechanism is stable and strategy-proof for any problem
⟨s, P ⟩ with identical burden-sizes across asylum seekers.
A centralized system can assign asylum seekers to member states in a stable and (asylum
seeker) strategy-proof manner, provided families and individuals are treated equally in the
burden-sharing quota during the assignment process. This requires identical treatment of ap
plications from individuals and families. While the additional burden of supporting families
cannot be factored in without compromising stability and strategy-proofness, imbalances can
be addressed over time. Since asylum seeker matching is a recurring event, member states
accepting more families could have their future burden-sharing commitments adjusted down
ward, balancing the overall burden.
Proving Theorem 2 requires conditions on the member state choice rule, which will to
gether ensure that the above defined cumulative offer mechanism is stable and strategy-proof.
• A choice rule Cm satisfies substitutablility if for all X′ ⊆ X, and x, x′ ∈ X \ X′, we
have
x ∈ Cm(X′ ∪ {x, x′}) =⇒ x ∈ Cm(X′ ∪ {x}).
A choice rule is substitutable if whenever a contract is chosen from a set of contracts,
then the contract is also selected from any subset of contracts containing that contract.
• A choice rule Cm satisfies irrelevance of rejected contracts if for all X′ ⊆ X, and
x ∈ X \ X′,
x ̸∈ Cm(X′ ∪ {x}) =⇒ Cm(X′ ∪ {x}) = Cm(X′).
A choice rule satisfies irrelevance of rejected contracts if removing a contract that has
not been chosen does not affect the set of chosen contracts.
• A choice rule Cm satisfies the law of aggregate demand if for all X′ ⊆ X, and
x ∈ X \ X′ we have
|Cm(X′ ∪ {x})| ≥ |Cm(X′)|.
A choice rule satisfies the law of aggregate demand if the set of chosen contracts weakly
increases with the set of available contracts.
Hatfield and Milgrom (2005) and Aygu ̈n and So ̈nmez (2013) show that substitutability
and irrelevance of rejected contracts are sufficient conditions on the choice rule for the cu
mulative offer mechanism to be stable. Additionally, combining these conditions with the
law of aggregate demand ensures strategy-proofness of the cumulative offer mechanism.
12

Proposition 1. The choice rule Cˆm satisfies the irrelevance of rejected contracts condition.
However, wait times introduce complementarities regardless of the specified burden-sizes
for asylum seekers. Therefore, substitutability and law of aggregate demand are violated
for the choice rule Cˆm even if the asylum seeker matching problem ⟨s, P ⟩ specifies the same
burden-size for every asylum seeker. We present Example 1 to illustrate this point.
Example 1 (Choice rule violates substitutability and the law of aggregate demand). Con
sider A = {a1, a2}, M = {m}, W = {wl, wh}. Let s(a1) = s(a2) = 1, qm = 2, rwmh = rwml = 1,
x1 = (a1, m, wl), x2 = (a1, m, wh),
x3 = (a2, m, wl), x4 = (a2, m, wh), and
πm : a1 − a2.
To see that Cˆm violates substitutability, consider X′ = {x2}. Noting that x4 ∈ Cˆm(X′ ∪
{x1, x4}) = {x1, x4} while x4 ̸∈ Cˆm(X′ ∪ {x4}) = {x2} reveals the failure of substitutability.
Similarly, to see a violation of the law of aggregate demand, let X′ = {x2, x3}. We then have
|Cˆm(X′)| = |{x2, x3}| > |Cˆm(X′ ∪ {x1})| = |{x1}|, confirming that Cˆm also violates the law
of aggregate demand.
Remark 1. The choice rule in Example 1 also violates the weaker unilateral substitutes
condition (Hatfield and Kojima, 2010), which together with the law of aggregate demand
is sufficient for stability and strategy-proofness (for asylum seekers). A choice rule Cm is
unilateral substitutable if there does not exist X′ ⊆ X and x, x′ ∈ X\X′ such that ax ̸∈ A(X′),
and if x ∈ Cm(X′ ∪ {x, x′}) then x ∈ Cm(X′ ∪ {x}). We have a violation of unilateral
substitutability as ax4 = a2 ̸∈ A(X′) = {a1}.
The literature has discussed several ways to relax the substitutability condition, as well as
cases in which violations of substitutability and the law of aggregate demand are not harmful
for stability and strategy-proofness (Hatfield and Kojima, 2010; Kominers and So ̈nmez, 2016;
Hatfield and Kominers, 2019; Hatfield et al., 2020). In this paper, we rely on the result of
Hatfield and Kominers (2019) which requires us to define a new property:
• C′
m is a completion of a choice rule Cm, if for all X′ ⊆ X, either C′
m(X′) = Cm(X′), or
there exist distinct contracts x, x′ ∈ C′
m(X′) that are associated with the same asylum
seeker, that is, a(x) = a(x′).
A choice rule completes another choice rule if they both choose the same set of contracts
whenever the selected set of the completing choice rule is feasible.
13

Hatfield and Kominers (2019) show that if completion of a choice rule satisfies substi
tutability and the law of aggregate demand (together with the irrelevance of rejected con
tracts) then the asylum-seeker-proposing cumulative offer mechanism is stable and strategy
proof (for asylum seekers). The result holds even if the cumulative offer mechanism uses the
original choice rule, which violates both properties.
Fact. (Hatfield and Kominers, 2019) If, for each m ∈ M , the choice function Cm has a
substitutable completion C′
m that satisfies the law of aggregate demand and the irrelevance of
rejected contracts condition, then the cumulative offer mechanism is stable and strategy-proof
(for asylum seekers).
The following two restrictions on priority orderings will be useful before proceeding:
• πm satisfies small burden-size priority if for all a, a′ ∈ A, we have
aπma′ =⇒ s(a) ≤ s(a′).
If an asylum seeker has higher priority than another asylum seeker, then she must have
a weakly smaller burden-size.
• πm satisfies large burden-size priority if for all a, a′ ∈ A, we have
aπma′ =⇒ s(a) ≥ s(a′).
If an asylum seeker has higher priority than another asylum seeker, then she must have
a weakly larger burden-size.
We next describe a choice rule that is a completion of the choice rule characterized in
Theorem 1.
Completion of the member state choice rule Cˆ′
m:
Step k ≥ 1:
1. Let Xk denote the set of accepted contracts, with X0 = ∅.
Similarly, let Zk = {x ∈ X′
m : rwmx > |Xk
wx| and x ̸∈ Xk} denote the set of still
acceptable contracts.
If either the burden-sharing quota is reached P
x∈Xk−1 s(ax) ≥ qm, or no acceptable
contract is left Zk−1 = ∅ the algorithm ends and Cˆm(X′) = Xk−1.
14

2. Otherwise, determine the highest priority asylum seeker left ak, defined as a ∈ A(Zk−1)
such that a π a′ for all a′ ∈ A(Zk−1) \ {a}.
Then, accept the lowest wait time contract xk available for that asylum seeker, defined
as x ∈ Zk−1
ak , such that wx < wx′ for all x′ ∈ Zk
ak \ {x}.
Adjust the set of accepted contracts Xk = Xk−1 ∪ {xk} and proceed to step k + 1.
The only difference of the completion Cˆ′
m relative to the original choice rule Cˆm is that
an asylum seeker already holding a contract still remains in the race for more contracts. In
particular, all contracts of a higher priority asylum seeker are accepted before all contracts
with the identical wait time of a lower priority asylum seeker. Moreover, the completion Cˆ′
m
satisfies the irrelevance of rejected contracts, is substitutable if the member states’ priority
order satisfies large burden-size priority, and satisfies the law of aggregate demand if small
burden-size priority holds.
Proposition 2. The construction Cˆ′
m satisfies the following properties:
(i) Cˆ′
m is a completion of Cˆm.
(ii) Cˆ′
m satisfies irrelevance of rejected contracts.
(iii) If πm satisfies large burden-size priority, then Cˆ′
m satisfies substitutability.
(iv) If πm satisfies small burden-size priority, then Cˆ′
m satisfies the law of aggregate demand.
When the burden-size is identical across asylum seekers, the large and small burden-size
conditions hold simultaneously. Therefore, these results collectively demonstrate that the
cumulative offer mechanism is stable and strategy-proof (Theorem 2). Proof of Proposition 2
is relegated to Section A.
We revisit Example 1 to show that the completion addresses issues related to substi
tutability and the law of aggregate demand caused by bureaucratic capacities, provided the
burden-size is homogeneous (Example 2).
Example 2 (Completion Example 1 revisited). Recall the set-up from Example 1:
A = {a1, a2}, M = {m} W = {wl, wh}, s(a1) = s(a2) = 1, qm = 2, rwmh = rwml = 1, and
x1 = (a1, m1, wl), x2 = (a1, m1, wh),
x3 = (a2, m1, wl), x4 = (a2, m1, wh),
πm : a1 − a2.
15

Revisiting the violation of substitutability for X′ = {x2}, x4, and x1. We have that Cˆ′
m(X′ ∪
{x4, x1}) = {x1, x2} as well as Cˆ′
m(X′ ∪ {x4}) = {x2}. Similarly, revisiting the law of
aggregate demand violation for X′ = {x2, x3} and x1, we have |Cˆ′
m(X′)| = |{x2, x3}| =
|Cˆ′
m(X′ ∪ {x1})| = |{x1, x2}|.
4.2 Heterogenous Burden-size
In the following two examples we illustrate the problem in using the cumulative offer mech
anism when the burden-size is not identical across asylum seekers. If the member states’
priority order does not satisfy large burden-size priority, Example 3 shows that there is no
guarantee for the existence of a completion satisfying substitutability. If the member states’
priority order does not satisfy small burden-size priority, Example 4 shows that there is no
guarantee for the existence of a completion satisfying the law of aggregate demand.
Example 3 (No completion satisfying substitutability). Consider A = {a1, a2, a3}, M =
{m}, W = {wl, wh}. Let s(a1) = 1, s(a2) = s(a3) = 2, qm = 2, rwml = rwmh = 1,
x1 = (a1, m, wl),
x2 = (a2, m, wl),
x3 = (a3, m, wh), and
πm1 : a1 − a2 − a3.
Note that priorities violate large burden-size priority. Moreover, for any X′ ⊆ X, such
that |X′
a| ≤ 1 for all a ∈ A, any completion Cˆ′
m of Cˆm must choose the same set of contracts
as Cˆm, that is, Cˆ′
m(X′) = Cˆm(X′). We have that any completion must choose Cˆ′
m({x2, x3}) =
{x2} and Cˆ′
m({x1, x2, x3}) = {x1, x3} which violates substitutability.
Remark 2. With Example 3’s setup we can construct a counterexample for all sufficient
conditions ensuring the existence of a stable mechanism. We have that Cˆm({x2, x3}) = {x2}
and Cˆm({x1, x2, x3}) = {x1, x3}, a violation of bilateral substitutability and therefore also of
unilateral substitutability as well as substitutability (Hatfield and Milgrom, 2005; Hatfield and
Kojima, 2010). Note that a3 gets a wh-slot if {x1, x2, x3} are proposed but foregoes the slot
if only {x2, x3} are proposed, so we cannot construct an associated one-to-one market as in
Kominers and S ̈onmez (2016). Finally, x2, x3, x1 is an observable offer process, and thus we
have a violation of observable substitutability (Hatfield et al., 2020), because Cˆm({x2, x3}) =
{x2} but Cˆm({x1, x2, x3}) = {x1, x3}.
16

Example 4 (No completion satisfying the law of aggregate demand). Consider A = {a1, a2, a3},
M = {m}, W = {wl}. Let s(a1) = 2, s(a2) = s(a3) = 1, qm = 2, rwml = 2, and
x1 = (a1, m, wl),
x2 = (a2, m, wl),
x3 = (a3, m, wl),
πm : a1 − a2 − a3.
Note that priorities violate small burden-size priority. Moreover, for any X′ ⊆ X, such that
|X ′
a| ≤ 1 for all a ∈ A, any completion Cˆ′
m of Cˆm must choose the same set of contracts as
Cˆm, that is, Cˆ′
m(X′) = Cˆm(X′). It follows that, any completion must choose Cˆ′
m({x2, x3}) =
{x2, x3} and Cˆ′
m({x1, x2, x3}) = {x1} which violates the law of aggregate demand.
Remark 3. Note that x2, x3, x1 is an observable offer process. Thus Example 4 also shows
a violation of observable size monotonicity (Hatfield et al., 2020). The same is true for
Example 3, which shows a violation of observable substitutability. Thus the weakest known
conditions for existence of a stable and strategy-proof mechanism are violated.
In general, when the burden-size varies across asylum seekers, there does not exist a stable
mechanism (Example 5), nor can we ensure strategy-proofness to hold for a mechanism that
selects a stable outcome, whenever one exists (Example 6).
Theorem 3. For a problem ⟨s, P ⟩ with |A| ≥ 3, |M | ≥ 4 and any heterogenous burden-sizes,
for some instance
h
πm, (rw
m)w∈W , qm m∈M , W
i
of the asylum seeker matching problem,
(i) a stable mechanism does not exist, and
(ii) a strategy proof mechanism that selects a stable outcome (when possible) does not exist.
We present two examples to prove Theorem 3.9 We will use wl < wm < wh to indicate
low, medium and high wait time, respectively.
Example 5 (No stable outcome). Let W = {wl, wm, wh}. By heterogeneous burden-size,
we can find three asylum seekers a1, a2, a3 such that s (a1) ≤ s (a3) < s (a2). Let qm1 =
s (a2) , qm2 = qm3 = 1. Let qm4 = P
a∈A s(a), rwml4 = |A|, and
rwmn = |A| and rwmh = rwml = 1 for all m ∈ {m1, m2, m3} ,
9Unlike previous results, for this result we need to construct burden-sharing quotas and bureaucratic capacities as well. Otherwise, sufficient capacities and quotas will allow for stable and strategy-proof mechanisms.
17

Pa1 : x1 = (a1, m2, wl) − x2 = (a1, m1, wl) − . . . ,
Pa2 : x3 = (a2, m1, wl) − x4 = (a2, m3, wl) − . . . ,
Pa3 : x5 = (a3, m1, wh) − x6 = (a3, m2, wh) − . . . ,
Pan : x6+n = (an, m4, wl) − . . . for all n > 3,
πm1 : a1 − a2 − a3,
πm2 : a3 − a2 − a1,
πm3 : a1 − a2 − a3, and
πm4 : . . .
For any a ∈/ {a1, a2, a3}, a stable outcome must match a to (a, m4, wl) as they like m4 the
most and m4 has sufficient quota. For a ∈ {a1, a2, a3}, we can verify that no stable outcome
in this market: Since asylum seeker a1 has the highest priority in member state m1 = mx2,
in any stable allocation a1 must end up with either x1 or x2. Suppose a1 ends up with her
top choice x1 at member state m2 = mx1. In this case a2 must get her top choice x3, since
she has the highest priority among the remaining asylum seekers at member state m1 = mx3,
preventing a3 from getting x5 with member state m1 = mx5. In turn, a3 forms a blocking
pair with member state m2 = mx6 through contract x6. Suppose a1 gets x2 instead. Then
a2 can no longer get her top choice x3, due to insufficient bureaucratic capacity rwml = 1
of member state m1 = mx3. On the other hand a3 can get her first choice x5 as there is
sufficient bureaucratic capacity for the high wait time rwmh = 1 of member state m1 = mx5,
while a2 gets x4 her second choice. But now m2 has no asylum seeker assigned and a1 forms
a blocking pair with member state m2 = mx1 through contract x1. Thus, the non-existence
of stable outcomes arises from a combination of burden-sizes and bureaucratic capacities.
Example 6 (No strategy-proof outcome). Let W = {wl, wh}. Similarly by heterogeneous
burden-size we can find a1, a2, a3 such that s(a1) > s(a2) ≥ s(a3). Let qm1 = s(a1), qm2 =
qm3 = 1, rwml = 2 and rwmh = P
a∈A s(a) for all m ∈ M . Let qm4 = P
a∈A s(a), and
Pa1 : x1 = (a1, m2, wl) − x2 = (a1, m1, wl) − x3 = (a1, m3, wl) − . . . ,
Pa2 : x4 = (a2, m2, wl) − x5 = (a2, m1, wl) − x6 = (a2, m3, wl),
Pa3 : x7 = (a3, m1, wl) − x8 = (a3, m2, wl) − . . . ,
Pan : x8+n = (an, m4, wh) − . . . for all n > 3,
18

πm1 : a1 − a2 − a3,
πm2 : a3 − a2 − a1,
πm3 : a1 − a2 − a3, and
πm4 : . . .
For any stable mechanism φ, we show it is not strategy-proof. φ(s, P ) = Y1 = {x2, x6, x8} ∪
{x8+n : n > 3, an ∈ A} as Y1 is the unique stable allocation under P . Now consider the
misreport behavior of a2: If she reports Pˆa2 : x5 −x6 −x4, under (Pa)a̸=a2, Pˆa2 there are two
stable allocations Y1 and Y2 = {x1, x5, x7} ∪ {x8+n : n > 3, an ∈ A}. If φ(s, (Pa)a̸=a2, Pˆa2) =
Y2, the manipulation is successful as φ(s, (Pa)a̸=a2, Pˆa2) = Y2 Pa2 φ(s, P ) = Y1, so φ is not
strategy-proof. If φ(s, (Pa)a̸=a2, Pˆa2) = Y1, consider the following misreport by a1: Pˆa1 :
x1 − x3 − x2. Under (Pa)a∈/{a1,a2}, Pˆa2, Pˆa1 there is a unique stable allocation Y2, which
implies φ(s, (Pa)a∈/{a1,a2}, Pˆa2, Pˆa1) = Y2. In this case, a1 has a successful manipulation as
φ(s, (Pa)a∈/{a1,a2}, Pˆa2, Pˆa1) = Y2 Pa1 Y1 = φ(s, (Pa)a̸=a2, Pˆa2). It follows that even if there
exists a mechanism φ that selects a stable outcome whenever one exists, strategy-proofness
is violated for asylum seekers.
4.2.1 Non-obvious manipulations
With heterogeneous burden sizes, if priorities satisfy large burden-size priority, the cumu
lative offer mechanism leads to a stable outcome. While the resulting mechanism is not
strategy-proof, it satisfies the weaker criterion of non-obvious manipulability. That is, even
though there exist profitable deviations for some asylum seekers, these deviations do not
strictly improve the “worst-case” or “best-case” outcome for the asylum seeker and thus fail
to be an obvious manipulation (Troyan and Morrill, 2020).
Recall that Pa denotes asylum seeker a’s true ordinal preference ranking over wait-time
member-state combinations. In line with Troyan and Morrill (2020), we say a manipulation
Pˆa is profitable if it yields a strictly better assignment for some profile of preference reported
by the other asylum seekers. However, a mechanism φ is not obviously manipulable (NOM) if
every profitable manipulation fails to strictly improve either the worst-case or the best-case
outcome for the asylum seeker, when compared to truthful reporting.
Formally, for any given preference profile P ′
a ∈ Pa let Wφ(a; P ′
a) = minP−a φ(s, P ′
a, P−a)
denote the worst possible outcome asylum seeker a can ever obtain reporting Pa, and anal
ogously let Bφ(a; P ′
a) = maxP−a φ(s, P ′
a, P−a) denote the best possible outcome asylum
seeker a can ever obtain reporting P ′
a — here min/max is defined relative to asylum seeker
a’s ordinal ranking Pa.
19

• A mechanism is not obviously manipulable (NOM) if, whenever a has a profitable
lie Pˆa, we do not have
Wφ(a; Pˆa) Pa Wφ(a; Pa) nor Bφ(a; Pˆa) Pa Bφ(a; Pa).
Otherwise, if some profitable deviation yields a strictly better worst-case or strictly
better best-case assignment, we say the mechanism is obviously manipulable.
Proposition 3. Suppose every member state is equipped with choice rule Cˆm and its priority
order πm satisfies large burden-size priority. Then the asylum-seeker-proposing cumulative
offer mechanism is stable and non-obviously manipulable for any problem ⟨s, P ⟩.
5 Discussion
Large Quotas and Capacities. The EU’s legal architecture already provides a baseline
for our assumption that every asylum seeker will ultimately be processed: under the Dublin
III Regulation, a single Member State must examine each claim, and the EU Pact on Mi
gration and Asylum aims to introduce a compulsory solidarity mechanism that shares the
burden among states more equally. Hence, every asylum seeker must, at least in principle,
be processed somewhere. In our model, we presume the existence of a solidarity mechanism,
and this de facto obligation is captured by positing quotas whose sum surpasses the total
burden. Furthermore, we allow cumulative bureaucratic capacity—interpretable as the num
ber of available case officers—to grow with the time horizon, mirroring how administrations
hire staff or redeploy resources when inflows rise. Should a particular state be temporarily
unable to process an applicant, the situation can be represented as assignment to a “waiting
room” state (a fictitious member with a very large quota), so the overall accounting identity
is preserved even if the real burden-sharing formula remains politically contested. This the
oretical device is not merely a mathematical convenience: in practice, cases are often rolled
over to subsequent months or years until new capacity comes online, and German adminis
trative practice illustrates that blanket refusals for capacity reasons would face significant
legal hurdles, reinforcing our no-rejection premise.10
Burden-Size and Bureaucratic Capacity. We treat burden-size as an individual char
acteristic of an asylum seeker (e.g. single applicant vs. family). One could argue that the
10See, for example, the European Council on Refugees and Exiles (ECRE) report on Germany’s regular asylum procedure: https://asylumineurope.org/reports/country/germany/asylum-procedure/ procedures/regular-procedure.
20

effective burden also depends on the receiving member state’s composition of staff and its at
titudes: a state might, for instance, consider certain subgroups less burdensome than others.
While one can easily extend our model to be state-specific in the function sm(a), we abstract
away from such heterogeneity for simplicity. As for the concern that families might require
a larger share of the bureaucratic capacity than single applicants, a more fine-grained model
could differentiate additional capacity costs based on family size or other special needs. Here,
we assume each application is processed by exactly one “slot,” mirroring real-life adminis
trative practice where each case is assigned to a single case officer (irrespective of the family
size).11 These representations of quota and capacity are consistent with the approach taken
in other matching-with-contracts models, yet we acknowledge potential variations in how
bureaucratic workloads could be subdivided.
Homogenous vs. Heterogenous Burden-Size. When we speak of burden we mean the
share of work that a member state is expected to shoulder under whatever burden-sharing
arrangement is assumed to be in force, not the full, real-world load that may ultimately fall
on that state. The simplest yardstick—used in our model—is a head-count of the asylum
applications the administration must process, so a family that files a single joint application
(as in Germany) is counted once and imposes the same formal burden as a single adult.
Treating every case as identical obviously glosses over the rich variety of costs that follow
from differences in family size, health status, housing needs, or labour-market prospects;
countries even diverge on whether they tally each family member separately (“family of four
= four units”) or regard the file as one case. The situation is further complicated by the fact
that not all asylum seekers are ultimately granted refugee status, leading to variation in the
duration of required support. We therefore frame the equal-burden assumption as a clean
baseline that lets us highlight how a stable, strategy-proof matching mechanism operates.
Future extensions could move beyond the equal-burden baseline by weighting cases ac
cording to their expected resource demands—larger families, applicants with significant
healthcare needs, or those requiring specialised housing would count for more capacity than
a single adult—thus preserving the core matching logic while better reflecting real-world
heterogeneity. A complementary line of inquiry is to relax strict stability or capacity con
straints, following evidence from Nguyen et al. (2021) that modest violations of these con
ditions can deliver sizable efficiency gains. Allowing temporary capacity overflows or giving
states flexible quotas might therefore enable assignment mechanisms to accommodate diverse
case profiles without abandoning their strategy-proof foundations, offering policymakers an
11For details on maintaining family unity beyond the standard family size, see Article 23 (“Maintaining family unity”) of Regulation (EU) 2024/1347 of the European Parliament and of the Council, available at: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401347.
21

additional lever for distributing the long-term responsibilities of receiving differently sized
asylum-seeker cohorts.
6 Conclusion
We presented an alternative to the current decentralized asylum assignment to effectively
match asylum seekers to member states, taking into account the complex interplay of pref
erences, priorities, capacities, and burden-sharing commitments. We demonstrate that a
centralized mechanism can ensure stability and strategy-proofness under conditions of equal
burden-sizes. However, when the burden-sizes differ, the feasibility of achieving these desir
able properties is challenged.
While the homogeneous burden-size assumption simplifies the problem and leads to a
desirable solution, it might not reflect the real-world complexities of asylum assignment,
where some member states may face disproportionately higher numbers of asylum seekers
with families. To address the challenges posed by heterogeneous burden-sizes, one may
consider adjusting burden-sharing quotas over time by rewarding member states that accept
a disproportionate number of families by lowering their quotas in subsequent assignment
rounds. Such an approach could help mitigate the long-term effects of burden imbalances.
In terms of practicality, our proposed mechanism can be implemented at regular intervals
as a recurring process, allowing the batch of newly arrived asylum seekers to incorporate
their preferences into the asylum assignment process. This approach is similar to Japan’s
centralized daycare center allocation, which is not based on a first-come, first-served basis.
Instead, slots are assigned annually in April via a centralized algorithm that considers family
preferences and prioritizes children from low-income households, single-parent families, or
those with guardians facing health challenges (Sun et al., 2023). German municipalities also
allocate daycare places at regular intervals.12 Another example of this type of matching
mechanism is Singapore’s Build-To-Order (BTO) system for public housing, where flats are
allocated monthly based on buyers’ preferences and a priority system. While asylum seekers
arrive continuously, processing applications in batches at regular intervals could significantly
improve the current decentralized system.
12See https://kitamatch.com/.
22

References
Abdulkadirog ̆lu, Atila and Tayfun So ̈nmez, “School choice: A mechanism design ap
proach,” American Economic Review, 2003, 93 (3), 729–747.
Ahani, Narges, Paul G ̈olz, Ariel D. Procaccia, Alexander Teytelboym, and An
drew C. Trapp, “Dynamic Placement in Refugee Resettlement,” Operations Research,
2024, 72 (3), 1087–1104.
, Tommy Andersson, Alessandro Martinello, Alexander Teytelboym, and An
drew C Trapp, “Placement optimization in refugee resettlement,” Operations Research,
2021, 69 (5), 1468–1486.
Andersson, Tommy and Lars Ehlers, “Assigning refugees to landlords in Sweden: Effi
cient, stable, and maximum matchings,” The Scandinavian Journal of Economics, 2020,
122 (3), 937–965.
, , and Alessandro Martinello, “Dynamic refugee matching,” 2018.
Ayg ̈un, Orhan and Bertan Turhan, “Dynamic reserves in matching markets,” Journal
of Economic Theory, 2020, 188, 105069.
and Tayfun So ̈nmez, “Matching with contracts: Comment,” American Economic Re
view, 2013, 103 (5), 2050–2051.
Balinski, Michel and Tayfun S ̈onmez, “A tale of two mechanisms: student placement,”
Journal of Economic Theory, 1999, 84 (1), 73–94.
BBC, “UK to accept 20,000 refugees from Syria by 2020,” 2015.
Beck, Gunnar, Nuale Mole, and Marcelle Reneman, “The application of the EU
Charter of Fundamental Rights to asylum procedure law, European Council on Refugees
and Exiles,” 2014.
Biro ́, Pe ́ter and Eric McDermid, “Matching with sizes (or scheduling with processing
set restrictions),” Discrete Applied Mathematics, 2014, 164, 61–67.
Caspari, Gian, “An alternative approach to asylum assignment,” 2019.
Dean, Brian C, Michel X Goemans, and Nicole Immorlica, “The unsplittable stable
marriage problem,” in “Fourth IFIP International Conference on Theoretical Computer
Science-TCS 2006: IFIP 19th Worm Computer Congress, TC-1, Foundations of Computer
Science, August 23–24, 2006, Santiago, Chile” Springer 2006, pp. 65–75.
23

Delacre ́taz, David, “Stability in matching markets with sizes,” 2019.
, Scott Duke Kominers, and Alexander Teytelboym, “Matching mechanisms for
refugee resettlement,” American Economic Review, 2023, 113 (10), 2689–2717.
Dimakopoulos, Philipp D and C-Philipp Heller, “Matching with waiting times: The
German entry-level labor market for lawyers,” Games and Economic Behavior, 2019, 115,
289–313.
European Commission, “Proposal for establishing the criteria and mechanisms for de
termining the Member State responsible for examining an application for international
protection lodged in one of the Member States by a third-country national or a stateless
person,” Technical Report 2016.
European Council of Human Rights, “European Convention on Human Rights,” 2013.
Farajzadeh, Fatemeh, Ryan Baylor Killea, Alexander Teytelboym, and An
drew Christopher Trapp, “Optimizing Sponsored Humanitarian Parole,” in “Proceed
ings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and
Optimization” 2023, pp. 1–13.
Hagen, Martin, “Tradable immigration quotas revisited,” Journal of Public Economics,
2022, 208, 104619.
, “Optimal Refugee Status Determination,” Available at SSRN 4703869, 2024.
, “Refugee relocation: A mechanism design approach,” The Economic Journal, 2024, 134
(663), 3027–3046.
Hassidim, Avinatan, Assaf Romm, and Ran I Shorrer, “Redesigning the Israeli
psychology master’s match,” 2017, pp. 121–122.
Hatfield, John William and Fuhito Kojima, “Substitutes and stability for matching
with contracts,” Journal of Economic Theory, 2010, 145 (5), 1704–1723.
and Paul R Milgrom, “Matching with contracts,” American Economic Review, 2005,
95 (4), 913–935.
and Scott Duke Kominers, “Hidden substitutes,” 2019.
, , and Alexander Westkamp, “Stability, Strategy-Proofness, and Cumulative Offer
Mechanisms,” The Review of Economic Studies, 09 2020, 88 (3), 1457–1502.
24

Jones, Will and Alexander Teytelboym, “Choices, preferences and priorities in a match
ing system for refugees,” Forced Migration Review, 2016, (51).
and , “The international refugee match: A system that respects refugees’ preferences
and the priorities of states,” Refugee Survey Quarterly, 2017, 36 (2), 84–109.
and , “Matching systems for refugees,” Journal on Migration and Human Security,
2017, 5 (3), 667–681.
and , “The local refugee match: Aligning refugees’ preferences with the capacities and
priorities of localities,” Journal of Refugee Studies, 2018, 31 (2), 152–178.
Jr, Alexander S Kelso and Vincent P Crawford, “Job matching, coalition formation,
and gross substitutes,” Econometrica, 1982, pp. 1483–1504.
Kominers, Scott Duke and Tayfun S ̈onmez, “Matching with slot-specific priorities:
Theory,” Theoretical Economics, 2016, 11 (2), 683–710.
Maiani, Francesco, “The Reform of the Dublin III Regulation,” Technical Report, Par
lement europe ́en 2016.
McDermid, Eric J and David F Manlove, “Keeping partners together: algorithmic
results for the hospitals/residents problem with couples,” Journal of Combinatorial Opti
mization, 2010, 19, 279–303.
Moraga, Jesu ́s Ferna ́ndez-Huertas and Hillel Rapoport, “Tradable immigration quo
tas,” Journal of Public Economics, 2014, 115, 94–108.
and Martin Hagen, “Can market mechanisms solve the refugee crisis?,” IZA World of
Labor, 2021.
Nguyen, Hai, Th`anh Nguyen, and Alexander Teytelboym, “Stability in matching
markets with complex constraints,” Management Science, 2021, 67 (12), 7438–7454.
Nguyen, Thanh and Rakesh Vohra, “Near-feasible stable matchings with couples,”
American Economic Review, 2018, 108 (11), 3154–3169.
Romm, Assaf, Alvin E Roth, and Ran I Shorrer, “Stability vs. no justified envy,”
Games and Economic Behavior, 2024, 148, 357–366.
Schuck, Peter H, “Refugee Burden-Sharing: A Modest Proposal,” Yale Journal of Inter
national Law, 1997, 22.
25

So ̈nmez, Tayfun and Tobias B Switzer, “Matching with (branch-of-choice) contracts at
the United States Military Academy,” Econometrica, 2013, 81 (2), 451–488.
Sun, Zhaohong, Yoshihiro Takenami, Daisuke Moriwaki, Yoji Tomita, and
Makoto Yokoo, “Daycare matching in Japan: Transfers and siblings,” in “Proceedings
of the AAAI Conference on Artificial Intelligence,” Vol. 37 2023, pp. 14487–14495.
Troyan, Peter and Thayer Morrill, “Obvious manipulations,” Journal of Economic
Theory, 2020, 185, 104970.
Yenmez, M Bumin, “A college admissions clearinghouse,” Journal of Economic Theory,
2018, 176, 859–885.
26

A Mathematical Appendix and Proofs
Theorem 1
Proof. We start with the if direction.
Feasibility: Suppose feasibility is violated and consider the first step k in which some asylum
seeker ak gets her second contract. That is, ak ∈ A(Zk−1) such that akπa′ for all a′ ∈
A(Zk−1) \ {ak}. Note that Zk−1 = {x ∈ X′
m : rwmx > |Xk−1
wx | and ax ̸∈ A(Xk−1)} but by
assumption we have ak ∈ A(Xk−1) as one contract has already been accepted: leading to a
contradiction. Similarly, consider the first step k, in which |Xk−1
w | = rw
m and wxk = w, again
we get a contradiction with ak ∈ A(Zk−1) as rwmx = |Xk−1
wx |.
Early filling: Consider some asylum seeker ak who got assigned contract xk at step k. Note
that the algorithm chooses the lowest contract in Zk−1
ak , hence for x′ ∈ Xak with wx′ < wxk
we have that rwx′
m = |Xk−1
w′x |. Since all asylum seekers in Xk−1 have higher priority than xk,
it follows directly that |{a′ ∈ A(Xk−1
w′x ) : a′πa}| = |{a′ ∈ A(Cm(X′)wx′ ) : a′πa}| = rwmx, and
thus early filling is satisfied.
Respecting member state priorities: Consider ak accepted at step k. We have that P
x∈Xk−1 s(ax) <
qm and since ak has higher priority than all remaining asylum seekers, we have P
x∈Xk−1 s(ax) =
P
{a′∈A(Cm(X′)):a′πma} s(a′) < qm.
Similarly, if the algorithm ends at step k, we have that P
x∈Xk−1 s(ax) ≥ qm and as ak
has lower priority than all previously chosen asylum seekers, we have P
x∈Xk−1 s(ax) =
P
{a′∈A(Cm(X′)):a′πma} s(a′) ≥ qm.
In step k, only contracts Zk−1 = {x ∈ X′
m : rwmx > |Xk
wx| and ax ̸∈ A(Xk)} are considered.
Take any unassigned asylum seekers a ∈ A(X′)\{a1, . . . , ak−1}: clearly any contract x ∈ X′
a\
Zk−1 does not qualify for a wait time as the bureaucratic capacity is already occupied with
higher priority asylum seekers, |Xk−1
wx | = |{a′ ∈ A(Xk−1
wx ) : a′πa}| = |{a′ ∈ A(Cm(X′)wx) :
a′πa}| = rwmx. Similarly, if ak is accepted in step k then xk ∈ Zk−1 and hence |Xk−1
wx | = |{a′ ∈
A(X k−1
wx ) : a′πak}| = |{a′ ∈ A(Cm(X′)wx) : a′πak}| ≤ rwmx.
Hence, almost by construction, an asylum seeker is accepted if and only if she qualifies for
acceptance and a wait time.
We show the only if direction, proceeding by induction. Suppose the described algorithm
for determining Cˆm(X′) stops after k steps, and therefore Cˆm(X′) = Xk−1.
Base step. If the algorithm stops at step 1 then Cˆm(X′) = Cm(X′) = X0; otherwise,
X1 ⊆ Cm(X′).
Suppose the algorithm stops at step 1.
We have P
x∈X0 s(ax) = P
x∈∅ s(ax) = 0 ≥ qm. It follows that no asylum seeker qualifies for
acceptance, since for all a ∈ A(X′) we have P
{a′∈A(Cm(X′)):a′πma} s(a′) ≥ qm. It follows that
27

Cˆm(X′) = Cm(X′) = X0 = ∅ since Cm(X′) satisfies respecting member state priorities.
Suppose the algorithm does not stop at step 1.
No contract in X′ \ Z0 can ever be accepted without violating feasibility, hence the only
relevant asylum seekers are in the set A(Z0). Moreover, as the algorithm did not stop, we
have P
x∈X0 s(ax) = P
x∈∅ s(ax) = 0 < qm and Z0 ̸= ∅. As a1 is the highest priority asylum
seeker, we have that P
{a′∈A(Cm(X′)):a′πma} s(a′) < qm and hence a1 qualifies for acceptance.
Similarly, |{a′ ∈ A(Cm(X′)wx) : a′πa1}| ≤ rwmx holds for all x ∈ Z0
a1 and therefore at least
one contract in Z0
a1 must be accepted since a1 also qualifies for a wait time. Due to early
filling, the lowest available wait time contract must be accepted, which in this case is x1,
that is x1 ∈ Cm(X′) and therefore X1 = {x1} ⊆ Cm(X′). In other words, the contract
accepted under the described choice rule — during step 1 of the described algorithm, that is,
X1 ⊆ Cˆm(X′) — must also be accepted under any other choice rule satisfying the described
axioms X1 ⊆ Cm(X′).
Induction step. We assume that if the algorithm stops at step k − 1 then Cˆm(X′) =
Cm(X′) = Xk−2, otherwise Xk−1 ⊆ Cm(X′). Given that, if the algorithm stopped at step k
then Cˆm(X′) = Cm(X′) = Xk−1, otherwise Xk ⊆ Cm(X′).
Note that if the algorithm stops at step k − 1 then Cˆm(X′) = Cm(X′) = Xk−2 by the
induction assumption.
Suppose the algorithm stops at step k.
We have P
x∈Xk−1 s(ax) ≥ qm. It follows that no asylum seeker qualifies for acceptance,
because due to the induction assumption for all remaining asylum seekers a ∈ A(Xk−1)
we have P
{a′∈A(Cm(X′)):a′πma} s(a′) ≥ qm since Xk−1 ⊆ Cm(X′). It follows that Cˆm(X′) =
Cm(X′) = Xk−1 as Cm(X′) satisfies respecting member state priorities.
Suppose the algorithm does not stop at step k.
No contract in X′ \ Zk−1 can ever be accepted without violating feasibility. Hence, the only
relevant asylum seekers are A(Zk−1). As the algorithm did not stop, we have P
x∈Xk−1 s(ax) <
qm and Zk−1 ̸= ∅. As ak is the highest priority asylum seeker, we have that P
{a′∈A(Cm(X′)):a′πma} s(a′) <
qm and thus ak qualifies for acceptance. Similarly, |{a′ ∈ A(Cm(X′)wx) : a′πak}| ≤ rwmx holds
for all x ∈ Zk−1
ak and hence at least one contract in Zk−1
ak must be accepted as ak also qual
ifies for a wait time. Due to early filling the lowest available wait time contract must be
accepted, which in this case is xk, that is xk ∈ Cm(X′) and therefore together with the
induction assumption Xk = Xk−1 ∪ {xk} ⊆ Cm(X′).
As the algorithm describing Cˆm(X′) ends after a finite number of steps, we have Cˆm(X′) =
Cm (X ′ ).
28

Proposition 1
Proof. Consider X′ and X′ ∪ {x∗} for some x∗ ∈ X \ X′. We refer to the relevant sets during
each step of the algorithm for Cm as Xk′′, Zk′′, and so on under the former (Cm(X′)) and
Xk′, Zk′, and so on under the latter (Cm(X′ ∪ {x∗})).
Given that x∗ ̸∈ Cm(X′ ∪ {x∗}), we want to show that C′
m(X′ ∪ {x∗}) = Cm(X′). We proceed
by induction.
Base step: We assume that x∗ ̸∈ Cm(X′ ∪ {x∗}). If the former algorithm (Cm(X′)) stops
at step 1 we have Cm(X′ ∪ {x∗}) = Cm(X′) and X1′ = X1′′ otherwise.
Suppose the former algorithm stops at step 1.
Case 1: If P
x∈X0′′ s(ax) ≥ qm then P
x∈X0′ s(ax) ≥ qm as X0′′ = X0′ = ∅ and therefore
Cm(X′ ∪ {x∗}) = Cm(X′) = ∅.
Case 2: If P
x∈X0′′ s(ax) < qm but Z0′′ = ∅ then Z0′ ⊆ {x∗} while if Z0′ = {x∗} we have
C′
m(X′ ∪ {x∗}) = {x∗}, leading to a contradiction. Hence Z0′ = Z0′′ and Cm(X′ ∪ {x∗}) =
Cm (X ′ ).
Otherwise, consider a1′′ defined as a ∈ A(Z0′′), such that aπa′ for all a′ ∈ A(Z0′′) \ {a}, and
x1′′ defined as x ∈ Z0′′
a1′′, such that wx < wx′ for all x′ ∈ Z0′′
a1′′ \ {x}.
Suppose by contradiction that x1′ ̸= x1′′. Note that, by assumption x1′ ̸= x∗ and by defini
tion, we have x1′ ∈ Z0′. If ax1′ ̸= ax1′′, we reach a contradiction, as ax1′ ∈ A(Z0′′) and there
fore there exists a higher priority asylum seeker. Similarly, given ax1′ = ax1′′ but wx1′ ̸= wa1′′,
we reach a contradiction as x1′ ∈ Z0′′
a1′′ and the lowest wait time contract is uniquely defined.
Finally, since x1′ = x1′′ and X0′ = X0′′ = ∅ we have X1′ = X0′ ∪ {x1′} = X0′′ ∪ {x1′′} = X1′′.
Induction step: By the induction assumption, if the algorithm has not stopped at step
k − 1, we have Xk−1′ = Xk−1′′. We want to show that if the former algorithm stops at step
k we have Cm(X′ ∪ {x∗}) = Cm(X′) and Xk′ = Xk′′ otherwise.
Suppose the former algorithm stops at step k.
Case 1: If P
x∈Xk−1′′ s(ax) ≥ qm then P
x∈Xk−1′ s(ax) ≥ qm as Xk−1′′ = Xk−1′ and therefore
Cm(X′ ∪ {x∗}) = Cm(X′) = Xk′′.
Case 2: If P
x∈Xk−1′′ s(ax) < qm but Zk′′ = ∅ then Zk′ =⊆ {x∗}. If Zk′ = {x∗} we have
C′
m(X′ ∪ {x∗}) = {x∗}, leading to a contradiction. Hence Zk′ = Zk′′ and Cm(X′ ∪ {x∗}) =
Cm (X ′ ).
Otherwise, consider ak′′ defined as a ∈ A(Zk′′), such that aπa′ for all a′ ∈ A(Zk′′) \ {a}, and
xk′′ defined as x ∈ Zk′′
ak′′, such that wx < wx′ for all x′ ∈ Zk′′
ak′′ \ {x}.
Suppose by contradiction that xk′ ̸= xk′′. Note that by assumption xk′ ̸= x∗ and moreover
Zk′ \ {x∗} = Zk′′. If axk′ ̸= axk′′, we reach a contradiction, as axk+1′ ∈ A(Zk′′) and the
highest priority asylum seeker is uniquely defined. Similarly, given axk′ = axk′′ but wxk′ ̸=
wak′′, we reach a contradiction, as xk′ ∈ Zk′′
ak′′ and the lowest wait time contract is uniquely
29

defined. Finally, since xk′ = xk′′ and by the induction assumption Xk′ = Xk′′, we have
Xk′ = Xk−1′ ∪ {xk′} = Xk−1′′ ∪ {xk′′} = Xk′′.
Proposition 2(i)
Proof. We have to show that for any X′ ⊆ X, whenever there do not exist two contracts
x, x′ ∈ C′
m(X′) specifying the same asylum seeker a(x) = a(x′) we must have C′
m(X′) =
Cm(X′). The proof is by induction on contracts accepted during the steps of the algorithms
describing the choice functions.
Base Step: If the algorithm describing Cm stops at the end of step 1 then C′
m(X′) = Cm(X′)
and X1′ = X1 otherwise.
Suppose the algorithm stops at step 1.
By the definition of step 0 we have X0′ = X0 = ∅ and therefore Z0′ = {x ∈ X′
m:
rwmx > |X0
wx| and x ̸∈ X0)} = Z0 = {x ∈ X′
m : rwmx > |X0
wx| and ax ̸∈ A(X0)}. Hence,
if P
x∈X0 s(ax) ≥ qm, then P
x∈X0′ s(ax) ≥ qm and both algorithms end. Similarly, if Z0 = ∅
then Z0′ = ∅ and both algorithms end. In both instances C′
m(X′) = X0′ = X0 = Cm(X′).
Suppose the algorithm does not stops at step 1.
Under the original choice rule the highest priority asylum seeker in a ∈ A(Z0) is chosen,
which is identical to the highest priority asylum seeker under A(Z0′) = A(Z0), and hence
a1′ = a1. Moreover, the original choice rule selects the lowest wait time contact in Z0, which
is identical to the lowest wait time contract in Z0′ = Z0, and hence x1′ = x1. Trivially, we
have X1′ = X0′ ∪ {x1′} = X0 ∪ {x1} = X1.
Induction Step: We assume that if the algorithm describing Cm stops at the end of step
k − 1, then C′
m(X′) = Cm(X′) and Xk−1′ = Xk−1 otherwise.
We show that if the algorithm describing Cm stops at the end of step k, then C′
m(X′) =
Cm(X′) and Xk′ = Xk otherwise.
Suppose the algorithm stops at step k.
By the induction assumption Xk−1′ = Xk−1. Hence, if P
x∈X0 s(ax) ≥ qm then P
x∈X0′ s(ax) ≥
qm and both algorithms end, and by the induction assumption C′
m(X′) = Xk−1′ = Xk−1 =
Cm (X ′ ).
By the induction assumption we have Xk−1′ = Xk−1, as well as by definition Zk−1′ = {x ∈
X′
m : rwmx > |Xk−1
wx | and x ̸∈ Xk−1)} ⊇ Zk−1 = {x ∈ X′
m : rwmx > |Xk−1
wx | and ax ̸∈ A(Xk−1)}.
Suppose there exist some x ∈ Zk−1′ \ Zk−1. In this case x belongs to an asylum seeker
already being assigned a contract ax ∈ A(Xk−1) with higher priority than any asylum seeker
a ∈ A(Zk−1). In other words, xk′ ∈ Zk−1′\Zk−1 and at the same time we reach a contradiction
30

with the initial assumption that there do not exist two accepted contracts specifying the same
contracts, that is, there exists x ∈ Xk−1 with ax = axk′. We get Zk−1′ = Zk−1.
Suppose Zk−1 = ∅. Then Zk−1′ = Zk−1 implies that C′
m(X′) = Xk−1′ = Xk−1 = Cm(X′).
Suppose the algorithm does not stops at step k.
Under the original choice rule the highest priority asylum seeker in a ∈ A(Zk) is chosen,
which is identical to the highest priority asylum seeker under A(Zk′) = A(Zk), and hence
ak′ = ak. Moreover, the original choice rule selects the lowest wait time contact in Zk, which
is identical to the lowest wait time contract in Zk′ = Zk, and hence xk′ = xk. Trivially, we
have Xk′ = Xk−1′ ∪ {xk′} = Xk−1 ∪ {xk} = Xk.
Lemma 1
Lemma 1 is helpful for analyzing the completion C′
m. Lemma 1 compares the contracts
accepted under C′
m(X) and C′
m(X ∪ {x∗}) given that x∗ ∈ Cm(X′ ∪ {x∗}) and under the
assumption that the burden-sharing stopping condition is not binding, that is, assuming
P
x∈X′∪{x∗} s(ax) ≥ qm. In essence, it states that there exists at most one previously accepted
contract x ∈ C′
m(X) that gets rejected x ̸∈ C′
m(X ∪ {x∗}).
Lemma 1. Assume P
x∈X′∪{x∗} s(ax) ≥ qm. Consider C′
m(X′) and Cm(X′ ∪ {x∗}) for some
x∗ ∈ X \ X′ with x∗ ∈ Cm(X′ ∪ {x∗}). Let {x1′′, . . . , xK′′} = C′
m(X′) and {x1′, . . . , xl′ =
x∗, . . . , xK′} ⊆ C′
m(X ∪ {x∗}). Let step l1 be the step at which x∗ gets accepted. If
|C ′
m(X′)wx∗ | = rwx∗ , let step l2 be the step at which the last contract with wait time wx∗
gets accepted (l2 ≥ l1).
Consider a contract xj′ ̸= x∗
i) if j < l1 then xj′ = xj′′,
ii) if l2 > j > l1 then xj′ = xj−1′′, and
iii) if j > l2 then xj′ = xj′′.
Proof. Consider X′ and X′ ∪ {x∗} for some x∗ ∈ X \ X′. We refer to the relevant sets during
each step of the algorithm for C′
m as Xk′′, Zk′′, and so on under the former (C′
m(X′)) and
Xk′, Zk′, and so on under the latter (C′
m(X′ ∪ {x∗})).
For now, consider both algorithms but ignore the stopping point of either algorithm due to
P
x∈Xk−1′ s(ax) ≥ qm and P
x∈Xk−1′′ s(ax) ≥ qm, respectively. In other words, assume that
P
x∈X′∪{x∗} s(ax) ≥ qm.
31

Moreover, assume that in step l the latter accepts xl′ = x∗ and the former xl′′ and denote wx∗
by w∗. Also, set the contracts accepted under the former as {x1′′, . . . , xl′′, . . . , xl+k′′, . . . , xK′′}.
Base Step. Consider step l + 1.
Case 1: If |Xl′′
w∗ | = |Xl′
w∗| = rw∗
m and |Xl′′
w | = |Xl′
w| for all w ∈ W , then xl+1′ = xl+1′′, . . . , xK′ =
xK′′.
Case 2: If |Xl′′
w∗ | = |Xl′
w∗| < rw∗
m and |Xl′′
w | = |Xl′
w| for all w ∈ W , then xl+1′ = xl′′ with
w∗ = wxl′′ .
Case 3: If |Xl′′
wxl′′ | = |X l′
wxl′′ |+1, |X l′
w∗ | = |Xl′′
w∗|+1, and |Xl′′
w | = |Xl′
w| for all w ∈ W \{w∗, wxl′′},
then xl+1′ = xl′′ with w∗ ̸= wxl′′.
Up until step l both algorithms accept identical contracts during each step, so Xl−1′ = Xl−1′′.
Note that Zk′ = {x ∈ X′
m : rxmw > |Xl′
w| and x ̸∈ Xl′} as Xl′ = Xl−1′ ∪ {x∗} and Zk′′ = {x ∈
X′
m : rxmw > |Xl′′
w | and x ̸∈ Xl′′} with Xl′′ = Xl−1′ ∪ {xl′′}. It follows that we can consider
the following three relevant cases, covering every possible outcome.
Case 1: w∗ = wxl′′ and |Xl−1′′
w∗ | + 1 = |Xl−1′
w∗ | + 1 = rw∗
m.
We have |Xl′′
w∗ | = |Xl′
w∗| = rw∗
m , |Xl′′
w | = |Xl′
w| for all w ∈ W , and Xl′′ \ {xl′′} = Xl′ \ {x∗}.
Hence,
Zl′ = {x ∈ X′
m : rxw
m > |Xl′
w| and x ̸∈ Xl′}
= {x ∈ X′
m : rxw
m > |Xl′′
w | and x ̸∈ Xl′′}
= Zl′′.
It follows that every remaining step of both algorithms is identical, that is, xl+1′ = xl+1′′, . . . , xK′ =
xK′′. That is of course, everything is identical, except that P
x∈Xl′ s(ax) might differ from
P
x∈Xl′′ s(ax), which is irrelevant, since by assumption P
x∈X′ s(ax) ≥ qm.
Case 2: w∗ = wl′′ and |Xl−1′′
w∗ | + 1 = |Xl−1′
w∗ | < rw∗
m.
We have |Xl′′
w∗ | = |Xl′
w∗| < rw∗
m , |Xl′′
w | = |Xl′
w| for all w ∈ W , and Xl′′ \ {xl′′} = Xl′ \ {x∗}.
Hence,
Zl′ = {x ∈ X′
m : rxw
m > |Xl′
w| and x ̸∈ Xl′}
= {x ∈ X′
m : rxw
m > |X l−1′′
w | and x ̸∈ Xl−1′′}
= Zl−1′′.
Since xl′′ was chosen due to having the highest priority and lowest wait time in Zl−1′′, we
have xl+1′ = xl′′.
Case 3: w∗ ̸= wl′′.
We have |Xl′′
wxl′′ | = |X l′
wxl′′ | + 1, |X l′
w∗ | = |Xl′′
w∗| + 1, |Xl′′
w | = |Xl′
w| for all w ∈ W \ {w∗, wxl′′},
32

and Xl′′ \ {xl′′} = Xl′ \ {x∗}. Hence,
Zk′ = {x ∈ X′
m : rxw
m > |Xl′
w| and x ̸∈ Xl′}
⊆ {x ∈ X′
m : rxw
m > |X l−1′′
w | and x ̸∈ Xl−1′}
= Zl−1′′
Since xl′′ was chosen due to having the highest priority and lowest wait time in Zl−1′′, we
have xl+1′ = xl′′ as xl′′ ∈ Zl′ ⊆ Zl−1′′.
Induction Step.
Induction assumption: Assume there are cases 1, 2, and 3 at step l + k.
Case 1: If |Xl+k−1′′
w∗ | = |X l+k−1′
w∗ | = rw∗
m and |Xl+k−1′′
w | = |Xl+k−1′
w | for all w ∈ W then
xl+k′ = xl+k′′, . . . , xK′ = xK′′.
Case 2: If |Xl+k−1′′
w∗ | = |X l+k−1′
w∗ | < rw∗
m and |Xl+k−1′′
w | = |Xl+k−1′
w | for all w ∈ W then
xl+k′ = xl+k−1′′, with w∗ = wxl+k−1′′ .
Case 3: If |Xl+k−1′′
wxl+k−1′′ | = |X l+1′
wxl+k−1′′ | + 1, |X l+k−1′
w∗ | = |X l+k−1′′
w∗ | + 1 and |Xl+k−1′′
w | = |X l+k−1′
w|
for all w ∈ W \ {w∗, wxl′′ } then xl+k′ = xl+k−1′′, with w∗ ̸= wxl+k−1′′ .
There are the same cases 1, 2, and 3 at step l + k + 1.
Case 1 holds at step l + k.
Note that at step l + k if we are in case 1 then trivially case 1 holds for step l + k + 1.
Case 2 holds at step l + k.
By the induction assumption, |Xl+k−1′′
w∗ | = |X l+k−1′
w∗ | < rw∗
m ,|X l+k−1′′
w | = |X l+k−1′
w | for all
w ∈ W , and we have xl+k′ = xl+k−1′′, with w∗ = wxl+k−1′′ .
Case 1: We are in case 1 if wxl+k′′ = w∗ and |Xl+k−1′′
w∗ | + 1 = |Xl+k−1′
w∗ | + 1 = rw∗
m.
We have |Xl+k′′
w∗ | = |X l+k′
w∗ | = rw∗
m , |X l+k′′
w | = |Xl+k′
w | for all w ∈ W , and Xl+k′′ \ {xl+k′′} =
Xl+k′ \ {x∗}. Hence,
Zl+k′ = {x ∈ X′
m : rxw
m > |Xl+k′
w | and x ̸∈ Xl+k′}
= {x ∈ X′
m : rxw
m > |X l+k′′
w | and x ̸∈ Xl+k′′}
= Zl+k′′.
Therefore, all remaining accepted contracts are identical, that is xl+k+1′ = xl+k+1′′, . . . , xK′ =
xK′′.
Case 2: We are in case 2 if wxl+k′′ = w∗ and |Xl+k−1′′
w∗ | + 1 = |Xl+k−1′
w∗ | + 1 = rw∗
m.
We have |Xl+k′′
w∗ | = |X l+k′
w∗ | < rw∗
m , |X l+k′′
w | = |Xl+k′
w | for all w ∈ W , and Xl+k′′ \ {xl+k′′} =
33

Xl+k′ \ {x∗}. Hence,
Zl+k′ = {x ∈ X′
m : rxw
m > |Xl+k′
w | and x ̸∈ Xl+k′}
= {x ∈ X′
m : rxw
m > |X l+k−1′′
w | and x ̸∈ Xl+k−1′′}
= Zl+k−1′′.
Since xl+k′′ was chosen due to having the highest priority and lowest wait time in Zl−1′′, we
have xl+k+1′ = xl+k′′.
Case 3: We are in case 3 if wxl+k′′ ̸= w∗.
We have |Xl+k′′
wxl+k′′ | = |X l+k′
wxl+k′′ | + 1, |X l+k′
w∗ | = |X l+k′′
w∗ | + 1, |Xl+k′′
w | = |Xl+k′
w | for all w ∈
W \ {w∗, wxl+k′′}, and Xl+k′′ \ {xl+k′′} = Xl+k′ \ {x∗}. Hence,
Zl+k′ = {x ∈ X′
m : rxw
m > |Xl+k′
w | and x ̸∈ Xl+k′}
⊆ {x ∈ X′
m : rxw
m > |X l+k−1′′
w | and x ̸∈ Xl+k−1′′}
= Zl+k−1′′.
Since xl+k′′ was chosen due to having the highest priority and lowest wait time in Zl+k−1′′,
we have xl+k+1′ = xl+k′′ as xl+k′′ ∈ Zl+k′ ⊆ Zl+k−1′′.
Case 3 holds at step l + k.
By the induction assumption, |Xl+k−1′′
wxl+k−1′′ | = |X l+k−1′
wxl+k−1′′ | + 1, |X l+k−1′
w∗ | = |X l+k−1′′
w∗ | + 1,
|X l+k−1′′
w | = |X l+k−1′
w | for all w ∈ W \ {w∗, wxl′′} and we have xl+k′ = xl+k−1′′, with
w∗ ̸= wxl+k−1′′ .
Case 1: We are in case 1 if wxl+k′′ = w∗ and |Xl+k−1′′
w∗ | + 1 = rw∗
m.
We have |Xl+k′′
w∗ | = |Xl+k′
w∗ | = rw∗
m , |X l+k′′
w | = |Xl+k′
w | for all w ∈ W and Xl+k′′ \ {xl+k′′} =
Xl+k′ \ {x∗}.
The remaining argument for xl+k+1′ = xl+k+1′′, . . . , xK′ = xK′′ is identical to the previous
argument for case 1 as Zl+k′ = Zl+k′′.
Case 2: We are in case 2 if wxl+k′′ = w∗ and |Xl+k−1′′
w∗ | + 1 < rw∗
m.
We have |Xl+k′′
w∗ | = |X l+k′
w∗ | < rw∗
m and |Xl+k′′
w | = |Xl+k′
w | for all w ∈ W , and Xl+k′′ \ {xl+k′′} =
Xl+k′ \ {x∗}.
The remaining argument for xl+k+1′ = xl+k′′ is identical to the previous argument for case 2,
as Zl+k′ = Zl+k−1′′.
Case 3: We are in case 3 if wxl+k′′ ̸= w∗.
We have |Xl+k′′
wxl+k′′ | = |X l+k′
wxl+k′′ | + 1, |X l+k′′
w∗ | + 1 = |Xl+k′
w∗ |, |X l+k′′
w | = |Xl+k′
w | for all w ∈
W \ {w∗, wxl+k′′ }, and Xl+k′′ \ {xl+k′′} = Xl+k′ \ {x∗}.
34

The remaining argument for xl+k+1′ = xl+k′′ is identical to the previous argument for case 3,
as xl+k′′ ∈ Zl+k′ ⊆ Zl+k−1′′.
Proposition 2(ii)
Proof. This proof is almost identical to the proof for Proposition 1. Consider X′ and X′∪{x∗}
for some x∗ ∈ X \ X′. We refer to the relevant sets during each step of the algorithm for C′
m
as Xk′′, Zk′′, and so on under the former (C′
m(X′)) and Xk′, Zk′, and so on under the latter
(C ′
m(X′ ∪ {x∗})).
Given that x∗ ̸∈ C′
m(X′ ∪ {x∗}), we want to show that C′
m(X′ ∪ {x∗}) = C′
m(X′). We proceed
by induction.
Base step: We assume that x∗ ̸∈ C′
m(X′ ∪ {x∗}). If the former algorithm (C′
m(X′)) stops
at step 1, we have C′
m(X′ ∪ {x∗}) = C′
m(X′) and X1′ = X1′′ otherwise.
Suppose the former algorithm stops at step 1.
Case 1: If P
x∈X0′′ s(ax) ≥ qm, then P
x∈X0′ s(ax) ≥ qm as X0′′ = X0′ = ∅ and therefore
C′
m(X′ ∪ {x∗}) = C′
m(X′) = ∅.
Case 2: If P
x∈X0′′ s(ax) < qm but Z0′′ = ∅, then Z0′ ⊆ {x∗} while if Z0′ = {x∗} we have
C′
m(X′ ∪{x∗}) = {x∗}, which leads to a contradiction. Hence Z0′ = Z0′′ and C′
m(X′ ∪{x∗}) =
C′
m (X ′ ).
Otherwise, consider a1′′ defined as a ∈ A(Z0′′), such that aπa′ for all a′ ∈ A(Z0′′) \ {a}, and
x1′′ defined as x ∈ Z0′′
a1′′, such that wx < wx′ for all x′ ∈ Z0′′
a1′′ \ {x}.
Suppose by contradiction that x1′ ̸= x1′′. Note that, by assumption x1′ ̸= x∗ and by defini
tion, we have x1′ ∈ Z0′. If ax1′ ̸= ax1′′ we reach a contradiction, as ax1′ ∈ A(Z0′′) and therefore
there exists a higher priority asylum seeker. Similarly, given ax1′ = ax1′′ but wx1′ ̸= wa1′′, we
reach a contradiction, as x1′ ∈ Z0′′
a1′′ and the lowest wait time contract is uniquely defined.
Finally, since x1′ = x1′′ and X0′ = X0′′ = ∅, we have X1′ = X0′ ∪ {x1′} = X0′′ ∪ {x1′′} = X1′′.
Induction step: By the induction assumption, if the algorithm has not stopped at step
k − 1, we have Xk−1′ = Xk−1′′. We want to show that if the former algorithm stops at step
k, we will have C′
m(X′ ∪ {x∗}) = C′
m(X′) and Xk′ = Xk′′ otherwise.
Suppose the former algorithm stops at step k.
Case 1: If P
x∈Xk−1′′ s(ax) ≥ qm, then P
x∈Xk−1′ s(ax) ≥ qm as Xk−1′′ = Xk−1′ and therefore
C′
m(X′ ∪ {x∗}) = C′
m(X′) = Xk′′.
Case 2: If P
x∈Xk−1′′ s(ax) < qm but Zk′′ = ∅, then Zk′ =⊆ {x∗}. If Zk′ = {x∗}, we have
C′
m(X′∪{x∗}) = {x∗}, which leads to a contradiction. Hence Zk′ = Zk′′ and C′
m(X′ ∪{x∗}) =
C′
m (X ′ ).
35

Otherwise, consider ak′′ defined as a ∈ A(Zk′′), such that aπa′ for all a′ ∈ A(Zk′′) \ {a}, and
xk′′ defined as x ∈ Zk′′
ak′′ such that wx < wx′ for all x′ ∈ Zk′′
ak′′ \ {x}.
Suppose by contradiction that xk′ ̸= xk′′. Note that, by assumption xk′ ̸= x∗ and moreover
Zk′ \ {x∗} = Zk′′. If axk′ ̸= axk′′, we reach a contradiction, as axk+1′ ∈ A(Zk′′) and the
highest priority asylum seeker is uniquely defined. Similarly, given axk′ = axk′′ but wxk′ ̸=
wak′′, we reach a contradiction as xk′ ∈ Zk′′
ak′′ and the lowest wait time contract is uniquely
defined. Finally, since xk′ = xk′′ and by the induction assumption Xk′ = Xk′′, we have
Xk′ = Xk−1′ ∪ {xk′} = Xk−1′′ ∪ {xk′′} = Xk′′.
By Proposition 2(i), C′
m is a completion of Cm(X′), and therefore there exists a completion
satisfying irrelevance of rejected contracts.
Proposition 2(iv)
Proof. Consider X′ and X′ ∪ {x∗} for some x∗ ∈ X \ X′. We refer to the relevant sets during
each step of the algorithm for C′
m as Xk′′, Zk′′, and so on under the former (C′
m(X′)) and
Xk′, Zk′, and so on under the latter (C′
m(X′ ∪ {x∗})).
Case 1. Suppose that x∗ ̸∈ C′
m(X′ ∪ {x∗}).
By irrelevance of rejected contracts C′
m(X′∪{x∗}) = C′
m(X′) and therefore |C′
m(X′∪{x∗})| =
|C ′
m (X ′ )|.
Case 2. Suppose that x∗ ∈ C′
m(X′ ∪ {x∗}).
Consider a step j with l2 ≥ j > l1 where we have Xj−1′′ = {x1′′ . . . , xl1′′, . . . , xj−1′′} and
by Lemma 1 we get that Xj−1′ = {x1′′ . . . , x∗, xl1′′, . . . , xj−2′′}. In other words, Xj−1′′ \
{xj−1′′} = Xj−1′ \ {x∗} and by small burden-size priority s(ax∗) ≤ s(axj−1′′) and therefore
P
x∈Xj−1′ s(ax) ≤ P
x∈Xj−1′′ s(ax).
It follows that if another step is taken under X′, then another step is taken under X′ ∪ {x}.
Similarly, for any step j with j > l2, we have Xj−1′′ = {x1′′ . . . , xl1′′, . . . , xl2′′, . . . , xj−1′′}
and by Lemma 1 we get that Xj−1′ = {x1′′, . . . , x∗, xl1′′, . . . , xl2′ = xl2−1′′, xl2+1′ = xl2+1′′, . . . , xj−1′ =
xj−1′′}.
In other words, Xj−1′′ \{xl2′′} = Xj−1′ \{x∗} with ax∗πaxl2′′ and by small burden-size priority
s(ax∗) ≤ s(xl2′′) and therefore P
x∈Xj−1′ s(ax) ≤ P
x∈Xj−1′′ s(ax).
It follows that if another step is taken under X′, then another step is taken under X′ ∪ {x}.
To sum up, under small burden-size, if another step is taken under the algorithm for X′,
then another step is taken under the algorithm for X′ ∪ {x}. Since each step corresponds to
an accepted contract, we have |C′
m(X′ ∪ {x∗})| ≥ |C′
m (X ′ )|.
By Proposition 2(i), C′
m is a completion of Cm(X′), and therefore there exists a completion
satisfying the law of aggregate demand.
36

Proposition 2(iii)
Proof. Consider X′ and X′ ∪ {x∗} for some x∗ ∈ X \ X′. We refer to the relevant sets during
each step of the algorithm for C′
m as Xk′′, Zk′′, and so on under the former (C′
m(X′)) and
Xk′, Zk′, and so on under the latter (C′
m(X′ ∪ {x∗})).
Case 1. Suppose that x∗ ̸∈ C′
m(X′ ∪ {x∗}).
By irrelevance of rejected contracts C′
m(X′ ∪ {x∗}) = C′
m(X′) and therefore if x ∈ C′
m(X′ ∪
{x∗}) then x ∈ C′
m (X ′ ).
Case 2. Suppose that x∗ ∈ C′
m(X′ ∪ {x∗}).
Consider a step j with l2 ≥ j > l1 where we have Xj−1′′ = {x1′′ . . . , xl1′′, . . . , xj−1′′} and
by Lemma 1 we get that Xj−1′ = {x1′′ . . . , x∗, xl1′′, . . . , xj−2′′}.
In other words, Xj−1′′ \ {xj−1′′} = Xj−1′ \ {x∗} and by large burden-size priority s(ax∗) ≥
s(axj−1′′) and therefore P
x∈Xj−1′ s(ax) ≥ P
x∈Xj−1′′ s(ax).
It follows that if another step is taken under X′ ∪ {x}, then another step is taken under X′
— large-size priority reverses the observation under Proposition 2(iv).
Similarly, for any step j with j > l2, we have Xj−1′′ = {x1′′ . . . , xl1′′, . . . , xl2′′, . . . , xj−1′′}
and by Lemma 1 we get that Xj−1′ = {x1′′, . . . , x∗, xl1′′, . . . , xl2′ = xl2−1′′, xl2+1′ = xl2+1′′, . . . , xj−1′ =
xj−1′′}. In other words, Xj−1′′ \ {xl2′′} = Xj−1′ \ {x∗} with ax∗πaxl2′′ and by large burden-size
priority s(ax∗) ≤ s(ax∗∗) and therefore P
x∈Xj−1′ s(ax) ≥ P
x∈Xj−1′′ s(ax).
It follows that if another step is taken under X′ ∪ {x}, then another step is taken under X′.
To sum up, under large burden-size, if another step is taken under the algorithm for X′ ∪{x},
then another step is taken under the algorithm for X′. Therefore, if x ∈ C′
m(X′ ∪{x∗})\{x∗}
then x ∈ C′
m (X ′ )
By Proposition 2(i), C′
m is a completion of Cm(X′), and therefore there exists a completion
satisfying substitutability.
Proposition 3
Proof. By Proposition 2, under large burden size priority the asylum-seeker-proposing cumu
lative offer mechanism leads a stable outcome as the completion Cˆ′
m satisfies substitutability
and irrelevance of rejected contracts.
It remains to be shown that the asylum-seeker-proposing cumulative offer mechanism is
non-obviously manipulable if priorities satisfy large burden size priority. We show that for
37

a given true preference Pa, no asylum seeker can submit another preference Pˆa that either
gives a strictly better best outcome or a strictly better worst outcome.
Best possible outcome. It is obvious that, under any asylum seeker a’s true preferences
Pa she can get her top choice for some P ′
−a ∈ P−a. Thus, for any preference Pˆa ∈ Pa we
have Wφ(a; Pa) Ra Wφ(a; Pˆa), contradicting that any profitable manipulation can achieve
Wφ(a; Pˆa) Pa Wφ(a; Pa).
Worst possible outcome. Let a’s worst outcome be achieved under some preference profile
Pw
−a ∈ P−a, i.e., Wφ(a, Pa) = φ(s, Pa, P w
−a)a. Now consider some profitable manipulation Pˆa
and suppose it yields a strictly better worst outcome Wφ(a, Pˆa) Pa Wφ(a, Pa). We show
that no such manipulation can exist. In particular, consider the following preference profile
Pˆ−a ∈ P−a, where the other asylum seekers a′ ∈ A \ {a} submit the following preferences:
Pˆa′ : φ(s, Pa, P w
−a)a′ − φ(s, Pa, P w
−a)a − . . .
Let every a′ ∈ A propose before a and note that everyone’s contract is tentatively accepted.
Moreover, note the following, given any P ′
a ∈ Pa and in particular Pˆa:
i) If a proposes a contract x that is strictly preferred to the worst possible outcome under
truthful preference φ(s, Pa, P w
−a)a; that contract must be rejected as otherwise we have a
contradiction with stability — as, given Proposition 2, under large burden-size priority,
Cˆ′
m satisfies substitutability and irrelevance of rejected contracts . Given irrelevance
of rejected contracts proposing such a contract does not change the outcome of the
COM.
ii) If a proposes φ(s, Pa, P w
−a)a itself, the COM ends and Pˆa has not led to a strictly better
outcome.
iii.a) If a proposes a strictly worse contract and the contract is rejected it does not affect
the outcome of the COM by irrelevance of rejected contracts.
iii.b) If the contract is accepted, a will be assigned that contract at the end of the COM.
– If the acceptance of the contract leads to no rejection the COM trivially ends as
every asylum seeker has a contract assigned.
– If the acceptance of a’s contracts leads to a rejection of an asylum seeker with
the same burden size; that asylum seeker will apply to φ(s, Pa, P w
−a)a, which will
be accepted and leads to a stop of the COM — therefore, a ends up with a worse
contract than φ(s, Pa, P w
−a)a.
38

– If the acceptance leads to the rejection of more than one asylum seeker, those
asylum seekers must have a lower burden size than a, and therefore, by large
burden size priority, a lower priority than a or anyone else having a higher priority
than a at some or all member states. It follows that no matter what contracts the
rejected asylum seekers propose, a can never be rejected from her current contract
— therefore, a ends up with a worse contract than φ(s, Pa, P w
−a)a.
Putting i) − iii) together we find a contradiction with Wφ(a; Pˆa) Pa Wφ(a; Pa) as
Wφ(a; Pa) Ra Wφ(a; Pˆa), concluding the proof.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:56.387Z
- **Text Length:** 88712 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
