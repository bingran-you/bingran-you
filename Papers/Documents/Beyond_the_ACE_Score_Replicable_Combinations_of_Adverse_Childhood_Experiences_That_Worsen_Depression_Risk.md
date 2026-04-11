# PDF Document: Zhang et al. - 2025 - Beyond the ACE Score Replicable Combinations of Adverse Childhood Experiences That Worsen Depressio.pdf

**File Path:** Zhang et al. - 2025 - Beyond the ACE Score Replicable Combinations of Adverse Childhood Experiences That Worsen Depressio.pdf

**Processed Date:** 2026-02-10T18:18:10.496Z

**File Size:** 974.15 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3378

**Title:** Beyond the ACE Score: Replicable Combinations of Adverse Childhood Experiences That Worsen Depression Risk

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

BEYOND THE ACE SCORE: REPLICABLE COMBINATIONS OF
ADVERSE CHILDHOOD EXPERIENCES THAT WORSEN DEPRESSION
RISK
RUIZHE ZHANG1, JOOYOUNG KONG2, DYLAN S. SMALL3, AND WILLIAM BEKERMAN3
1Fudan University, Shanghai, China 2Sandra Rosenbaum School of Social Work, University of Wisconsin-Madison, Madison, WI, USA 3Department of Statistics and Data Science, University of Pennsylvania, Philadelphia, PA, USA
Abstract. Adverse childhood experiences (ACEs) are categories of childhood abuse, neglect, and household dysfunction. Screening by a single additive ACE score (e.g., a ≥ 4 cutoff) has poor individual-level discrimination. We instead identify replicable combinations of ACEs that elevate adult depression risk. Our data turnover framework enables a single research team to explore, confirm, and replicate within one observational dataset while controlling the family-wise error rate. We integrate isoton-
ic subgroup selection (ISS) to estimate a higher-risk subgroup under a monotonicity assumption- additional ACE exposure or higher intensity cannot reduce depression risk. We pre-specify a risk threshold τ corresponding to roughly a two-fold increase in the odds of depression relative to the no-ACE baseline. Within data turnover, the prespecified component improves power while maintaining FWER control, as demonstrated in simulations. Guided by EDA, we adopt frequency coding for ACE items, retaining-
 intensity information that reduces false positives relative to binary or score codings. The result is a replicable, pattern-based higher-risk subgroup. On held-out BRFSS 2022, we show that, at the same level of specificity (0.95), using our replicable subgroup as the screening rule increases sensitivity by 26% compared with an ACE-score cutoff, yielding concrete triggers that are straightforward to implement and help target scarce clinical screening resources toward truly higher-risk profiles.
1. Introduction
Adverse childhood experiences (ACEs) describe specific categories of early life hardship or
harm that occur before an individual reaches adulthood. They include abuse (physical, emo
tional, or sexual), neglect (physical or emotional), and household challenges such as mental
illness, substance use, intimate partner violence, parental separation or divorce, and incar
ceration. The landmark study conducted by the Centers for Disease Control and Prevention
(CDC) and Kaiser Permanente shows that ACEs are common and that they have a clear dose
response relation with multiple negative adult health and social outcomes [Felitti et al., 1998,
Dube et al., 2003, Anda et al., 2006]. Also, exposure to individual ACEs has been repeatedly
Key words and phrases. adverse childhood experiences, sample splitting, exploratory data analysis, replication, subgroup selection.
Corresponding authors:
William Bekerman, bekerman@wharton.upenn.edu; Ruizhe Zhang, zhangrz22@m.fudan.edu.cn.
1
arXiv:2511.19574v1 [stat.AP] 24 Nov 2025

2 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
associated with a range of adverse physical and emotional health consequences later in life. For
example, emotional abuse relates to depression, parental alcohol misuse relates to depression,
and maltreatment relates to obesity [Chapman et al., 2004, Anda et al., 2002, Williamson et al.,
2002]. Unfortunately, ACEs often occur together [Dong et al., 2004, Felitti, 2002]. Large studies
show cumulative associations. Each extra category increases the chance of adverse outcomes,
and higher counts of ACEs are related to higher risks in many domains [Felitti et al., 1998,
Chapman et al., 2004, Hughes et al., 2017, Merrick, 2019], which led to the additive ’ACE
score’.
However, the use of a simple additive ACE score is open to question. A single additive score
reduces different experiences to one count and treats all events as equal, which is problematic
on its face. Two people can share the same score but have very different childhood histories.
For example, repeated sexual abuse and parental divorce each add one point. This confuses
which exposure patterns should trigger follow-up. Also, the additive ACE score overlooks po
tential interactions between different ACEs. In clinical and public-health screening and triage,
such thresholds give limited individual-level discrimination and can encourage oversimplified
or stigmatizing stories [Lacey and Minnis, 2020, Baldwin et al., 2021, Austin et al., 2024]. Em
pirical work suggests that although higher ACE counts correlate with worse outcomes at the
population level, the score performs poorly for discriminating individuals at risk (e.g., Meehan
et al. 2022). In particular, screening based on an ACE threshold (e.g., ≥ 4) may yield high
specificity but very low sensitivity (i.e., many at-risk individuals are missed) and only lim
ited improvement in post-test risk. For screening, clinicians and program leads need triggers
that are both interpretable and usable. Concrete exposure patterns can guide assessment and
services while a single count cannot.
Thus, motivated by this, we focus on combinations of specific ACE items instead of counts.
We study adult depression as the primary outcome because it is common and burdensome. Our
goal is to identify a higher–risk set of combinations defined by exceeding a prespecified risk
threshold—for example, when the odds are at least twice those of people with no ACEs. This
yields a screening rule rather than a single score. The rule says which exposure patterns cross
a fixed bar. Clinicians can raise or lower the bar to fit the setting. The rule is interpretable and
concrete as it points to specific exposure patterns, encodes the simple clinical principle that
additional ACEs cannot lower risk of depression, and undergoes a replicability check through

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 3
our design. Requiring the same high-risk patterns to reappear in distinct subpopulations re
duces the chance that an apparent trigger is driven by unmeasured confounding. These features
increase causal credibility and practical use of the findings.
We employ a novel statistical design called data turnover (Bekerman et al., in preparation;
see Bekerman et al., 2024 for a description). The design splits the data into two complemen
tary parts, and integrates qualitative and quantitative insights from exploratory data analysis
(EDA) with structured confirmation. EDA lets us inspect the data, check for anomalies that
do not reflect natural variation, and refine questions. EDA also helps flag variables that may
not measure the intended constructs and can guide improved definitions and hypotheses [Bek
erman et al., 2025]. In observational studies like ours, where treatment assignment is not under
our direct control, obtaining replicability (consistent results) across groups that may differ in
assignment mechanisms strengthens evidence about the effect under study [Rosenbaum, 2001,
2015]. Prior work often separates these goals. Some methods allow exploration without repli
cation [Cox, 1975, Heller et al., 2009]. Other methods enable replication without exploration
[Zhao et al., 2018, Karmakar et al., 2019]. There are also approaches that cover both explo
ration and replication but that require two independent teams [Roy et al., 2022]. Data turnover
aims to achieve both exploration and replication with a single research group.
We combine isotonic subgroup selection (ISS) with data turnover to find higher-risk combi
nations. ISS builds on a reasonable clinical belief that more ACE exposure should not lower
the risk of depression. This creates a partial order on combinations. ISS utilizes this structure
to share evidence and to control the family-wise error rate (FWER) in large testing problems.
The result is an upward-closed set of higher-risk combinations. We summarize this set by its
corner (boundary) combinations, which are easy to read and useful for screening and triage.
We study combinations of ACEs and adult depression using the 2023 Behavioral Risk Factor
Surveillance System (BRFSS). BRFSS is a national, ongoing telephone survey run by the CDC.
In 2023 it sampled more than 400,000 adults across the United States. Ten states1 administered
the CDC ACE module in that year. More than 50,000 respondents have complete ACE records.
About 17,000 report zero ACEs, and the rest report at least one ACE. This scale allows precise
estimates and supports analysis of ACE combinations. We predefine two complementary parts
of the data (red and blue) to implement cross-screening exploration and validation, report both
global and replicable findings, and control the FWER throughout.
1Delaware, Florida, Georgia, Missouri, Nevada, New Jersey, Oregon, Rhode Island, Tennessee, Virginia.

4 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
The remainder of the paper is as follows. Section 2 includes more details about the dataset,
data turnover framework and ISS. We analyzes the BRFSS 2023 data in Section 3. In Section 4,
we present the simulation results inspired by the application. Section 5 compares different ways
of screening on a held-out dataset. Section 6 concludes.
2. Methods
2.1. Data. We analyze the 2023 BRFSS ACE module from ten states (listed above), with
>50,000 complete ACE records. Depression is coded Y =1 if the answer to ’(Ever told) (you
had) a depressive disorder (including depression, major depression, dysthymia, or minor de
pression)?’ is ’Yes’ and 0 otherwise. Following previous studies utilizing the BRFSS data
[Bhan et al., 2014, Gilbert et al., 2015, Waehrer et al., 2020], we collapse different questions
into particular indicators. More details are provided in table 1. In total, we create 10 binary
ACE items from the BRFSS data (see table 2), which is consistent with the categorization
in CDC-Kaiser study [Felitti et al., 1998]. Figure 1 summarizes marginal prevalence and co
occurrence of ACE items in BRFSS 2023. We display only the top 30 combinations by size.
The plot mainly shows two messages. First, item prevalence is uneven across different ACEs.
Second, co-occurrence is common. Many respondents report multi-item exposure rather than
a single item. For example, the pair ACEHURT1 & ACESWEAR is among the largest inter
sections (rank 8 of 30) with 656 respondents, and even the set with all the 10 ACEs appears
(rank 16 of 30) with 294 respondents. These patterns are consistent with our study design that
we focus on combinations rather than counts.
To support the data turnover design, we split the BRFSS sample into two parts for ex
ploration, confirmation, and replication. We form two subpopulations in BRFSS 2023. One
includes respondents in states that voted for the Democratic candidate in the 2024 U.S. pres
idential election (’blue states’). The other includes respondents in states that voted for the
Republican candidate (’red states’). These two sets of states often differ in social, economic,
and health policy. Prior work shows that socio-political context relates to childhood maltreat
ment [Ulke et al., 2021]. For example, states may adopt different strategies toward public
health programs and in the scope of social safety nets. Such differences may affect the preva
lence of ACEs and the mechanisms of exposure. They may also lead to different patterns of
co-occurrence across ACE items.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 5
Table 1. Data Processing Steps and Collapsed Indicators
ACE Items Questions Collapsed Encoding Method Any Sexual Abuse Number of times forced to touch, be touched, or have sex with anyone at least five years older or an adult
Constructed by summing responses across multiple questions: all “never” encoded as 0, otherwise encoded as 1 Household Substance Use
Alcohol and illegal drug use in the household Constructed by summing responses across multiple questions: all “never” encoded as 0, otherwise encoded as 1 Physical Abuse Frequency of physical abuse ‘Once’ or ‘More than once’ encoded as 1, ‘None’ encoded as 0 Verbal Abuse Frequency of verbal abuse ‘Once’ or ‘More than once’ encoded as 1, ‘None’ encoded as 0 Parental Divorce Response to parental divorce question ’Yes’ encoded as 1, ’No’ encoded as 0 Living with a Depressed or Mentally Ill Person
Response to question about living with a mentally ill person
’Yes’ encoded as 1, ’No’ encoded as 0
Living with an Incarcerated Person
Response to question about living with an incarcerated person
’Yes’ encoded as 1, ’No’ encoded as 0 Physical Violence Between Parents
Frequency of physical violence between parents ‘Once’ or ‘More than once’ encoded as 1, ‘None’ encoded as 0 Emotional Neglect For how much of your childhood was there an adult in your household who made you feel safe and protected
‘Never’ and ‘A little of the time’ encoded as 1, ‘Some of the time’, ‘Most of the time’, ‘All of the time’ encoded as 0 Physical Neglect For how much of your childhood was there an adult in your household who tried hard to make sure your basic needs were met
‘Never’ and ‘A little of the time’ encoded as 0, ‘Some of the time’, ‘Most of the time’, ‘All of the time’ encoded as 1
After processing the data, we restrict our sample to those who do not have any missing
values in any of the ten ACE variables and depression measurement. In total, there are 49,547
remaining individuals, among whom 23,390 individuals are from blue states2 and 26,157 indi
viduals from red states3. In the part of data with individuals from blue states, 7,363 individuals
do not have any ACEs while 16,027 were exposed to at least one ACE. In the part of data with
individuals from red states, 8,479 individuals do not have any ACEs while 17,678 were exposed
to at least one ACE.
2.2. Isotonic Subgroup Selection. We use isotonic subgroup selection (ISS) to identify the
high-risk group [M ̈uller et al., 2025]. Let (Xi, Yi) be independent for i = 1, . . . , n. The vector
2Delaware, New Jersey, Oregon, Rhode Island, Virginia 3Florida, Georgia, Missouri, Nevada, Tennessee

6 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Table 2. ACE Items in BRFSS 2023
ACE Item Variable
Live With Anyone Depressed, Mentally Ill, Or Suicidal ACEDEPRS Substance Abuse in the Home ACESUB Live With Anyone Who Served Time in Prison or Jail ACEPRIS Were Your Parents Divorced/Separated ACEDIVRC How Often Did Your Parents Beat Each Other Up ACEPUNCH How Often Did A Parent Physically Hurt You In Any Way ACEHURT1 How Often Did A Parent Swear At You ACESWEAR Sexual Abuse ACESEX Did An Adult Make You Feel Safe And Protected ACEADSAF Did An Adult Make Sure Basic Needs Were Met ACEADNED
2685
2035
1624
1406
953
730 675 656
513 466 450 443 388
311 296 294 290 286 283 265 261 233 216 209 209 200 186 173 166 165
0
1000
2000
3000
Intersection size (sample count)
ACESWEAR
ACEDIVRC
ACESUB
ACEADSAF
ACEHURT1
ACEDEPRS
ACEPUNCH
ACEADNED
ACESEX
ACEPRISN
15000 10000 5000 0 Set size (sample count)
Figure 1. UpSet plot of ACE combinations. Bars at the top show intersection sizes (sample counts). Connected filled dots mark which ACE items co-occur in each intersection. Horizontal bars on the left show marginal set sizes for each item (sample counts). The figure displays the largest intersections in the BRFSS 2023 analytic sample and provides a compact view of both prevalence and co-occurrence.
Xi ∈ Rd contains covariates. The variable Yi is the outcome. In this study, Yi = 1 indicates
depression and Yi = 0 otherwise. The vector Xi encodes combinations of ten binary ACE
indicators.
We define η(x) = E(Y | X = x) and assume coordinate-wise monotonicity: if x ⪯ x′, then
η(x) ≤ η(x′). The relation x ⪯ x′ means xj ≤ x′
j for all j = 1, . . . , d. This assumption

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 7
encodes a simple idea: added ACE exposure should not reduce the probability of depression.
For example, a profile with physical abuse and parental substance use should have risk at least
as high as a profile with only parental substance use.
Fix a threshold τ . The target set is the superlevel region
Xτ (η) = { x : η(x) ≥ τ },
interpreted as the subgroup of profiles whose depression probability exceeds τ . ISS estimates
a subset Aˆ that approximates Xτ (η) with principled error control.
Step 1: hypothesis construction. For each observed profile Xi, test
H0,i : η(Xi) < τ vs. H1,i : η(Xi) ≥ τ.
Because Y is binary, we use anytime-valid martingale p-values for bounded outcomes. The
construction aggregates evidence from profiles Xj ⪯ Xi, comparing the observed number of
depressed cases to what would be expected under η(Xi) < τ . This yields valid pi even under
dependence across tests.
Formally, let I(x) = { j : Xj ⪯ x } and n(x) = |I(x)|. Write the associated responses
as Y(1)(x), . . . , Y(n(x))(x), and set Sk(x) = Pk
j=1 Y(j)(x). An anytime-valid p-value for testing
η(x) < τ is
pτ (x) = min
1≤k≤n(x)
τ Sk(x)(1 − τ ) k−Sk(x)+1
B 1 − τ ; k − Sk(x) + 1, Sk(x) + 1 ,
where B(z; a, b) is the incomplete Beta function. Then Pr pτ (x) ≤ α | X ≤ α whenever
η(x) < τ [Mu ̈ller et al., 2025, Lemma 22].
Step 2: logical structure and multiple testing. Let {x(1), . . . , x(m)} be the distinct observed
profiles and index the corresponding hypotheses by i = 1, . . . , m. The nulls are logically
related: if x(i) ⪯ x(j), then H0,j ⊆ H0,i. Encode these relations in a directed acyclic graph
(DAG) G = (I, E) with I = {1, . . . , m} and an edge i → j whenever x(j) ⪯ x(i) (edges point
from stronger to weaker profiles). Form a polyforest F by keeping at most one parent per
node. The parent choice is not unique; one may use the closest parent in l∞ norm or another
distance.

8 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Let RIαSS(G, p) be the rejection set from the DAG algorithm. Distribute the global level α
across the roots of F ; each root i receives
αi = #{leaf descendants of i in F }
#{all leaf nodes in F } · α.
Reject a root i if pτ,i ≤ αi, and then reject all ancestors of i in the full DAG G. Remove
rejected nodes from F , reallocate unused α to the remaining roots, and iterate until no further
rejections occur [Mu ̈ller et al., 2025, Algorithm 1]. The final rejection set respects the partial
order and controls the family-wise error rate (FWER).
Step 3: upward closure. Let RIαSS(G, p) be the set of rejected nodes. Define
Aˆ = { x : x ⪰ x(i) for some i ∈ RISS
α (G, p) }.
Thus Aˆ is the upward closure of RIαSS(G, p) under ⪯. If a profile x(i) is high-risk, every more
severe profile x ⪰ x(i) is included.
Under this construction, ISS controls the FWER: with probability at least 1 − α, no pro
file with η(x) < τ enters Aˆ. More formally, conditional on the observed X, ISS returns a
data–dependent set Aˆ such that P Aˆ ⊆ Xτ (η) X ≥ 1 − α, uniformly over the monotone
model class considered in M ̈uller et al. [2025, Theorem 9]. Equivalently, P ∃ x ∈ Aˆ : η(x) <
τ X ≤ α. ISS provides a conservative and rigorous way to define ACE exposure patterns
linked to higher depression risk. The selected subgroups include only ACE combinations whose
estimated depression probability exceeds the threshold. The procedure uses valid error control
and the monotonicity structure to yield interpretable high-risk subgroups.
2.3. Data Turnover: Design and Implementation. We employ data turnover [Bekerman
et al., 2024] to analyze the data, which combines screening with data-informed exploration
while keeping strong family-wise error control. The approach is more flexible than automated
cross-screening [Zhao et al., 2018] as it allows exploratory data analysis (EDA) in one part
of the sample and still guarantees valid inference [e.g., Bekerman et al., 2025]. We split the
sample into a red part and a blue part. The roles are fixed before any analysis. The red
part follows a pre-specified screening and validation plan [Zhang et al., 2025] without EDA.
The blue part permits EDA. Both parts are used to screen and to validate, but only the blue
part can generate novel hypotheses for the red part. In other words, when we formulate the
data analysis plan on the red part, we may use extra information from the blue part rather

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 9
than strictly follow a pre-specified one. The whole procedure strictly controls the family-wise
error rate (FWER). We call a result replicable if it shows a significant effect in both groups
[Bogomolov and Heller, 2023]. We also test a global null hypothesis expressed, i.e., identifying
outcomes that are affected in at least one of the two subpopulations.
Threshold and target. For each observed item-set Xi, we test
H0,i : η(Xi) < τ vs. H1,i : η(Xi) ≥ τ,
where η(x) = Pr(Y = 1 | X = x) and Y indicates depression. As stated in the protocol, we
pre-specify τ = 0.172, which is interpreted as at least double the odds of depression compared
with the group with no ACEs.
Step 1: Screening in the red part (no EDA).. Compute ISS p-values pR
τ,i for combinations of
ACEs in the red part. Form the screened set Sκ = i : pR
τ,i ≤ κ , with the pre-specified
cutoff κ = α/2 = 0.025. Build a polyforest on Sκ to encode the monotone logical order used
by ISS. Let G be the full DAG over candidate combinations. For i ∈ Sκ, define the cover
set Cover(i) = j ∈ Sκ : Xj ≻ Xi and there is no k ∈ Sκ with Xj ≻ Xk ≻ Xi . Select
at most one parent via red-side evidence: par(i) ∈ arg minj∈Cover(i) pR
τ,j, breaking ties at
random. If Cover(i) = ∅, declare i a root. Denote the resulting structure by FκB. This routes
α toward chains with stronger upstream evidence and reduces α–blocking by weak parents.
Further explanations and illustrative examples are provided in Appendix A. Send (Sκ, FκB) to
the blue part for validation.
Step 2: EDA on the blue part. First, we could repeat the pre-specified screening steps in the
blue part. We use the blue data to select the candidate combinations to test in the red part.
We also use blue-side evidence to set the polyforest structure for red validation. Notably, we
perform EDA only in the blue part and then prepare a validation plan for the red part.
Step 3: Two-way validation and error control. Validate the red-screened set Sκ in the blue
part by running ISS on FκB at a pre-assigned level αB (we use αB = α/2). Validate the
blue-generated hypotheses in the red part at level αR (we use αR = α/2). The split satisfies
αB + αR ≤ α and yields strong FWER control for all claims combined. We report two types of
findings. A combination is replicable if both parts reject the null hypothesis that the probability
of depression conditional on this combination exceeds the threshold. The global null for a
combination is rejected if at least one part rejects the null hypothesis.

10 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
ISS supplies anytime-valid p-values under monotonicity and controls multiplicity over the
structured family through its DAG procedure [Mu ̈ller et al., 2025]. Data turnover decides
which hypotheses enter validation, how parents are chosen for the polyforest, and provides
more flexibility through EDA. More details about the pre-specified plan is in the protocol
[Zhang et al., 2025].
3. Application
We analyze BRFSS 2023 with the ACE module. The outcome is a binary indicator for
depression. We report results in both directions - Red→Blue and Blue→Red. Specifically,
Red→Blue strictly follow the prespecified plan [Zhang et al., 2025]. As for Blue→Red, we do
EDA on the blue part to formulate the data analysis plan on the red part. After completing both
data analysis, we report two sets of findings. First, replicable profiles are those combinations
rejected in both the red and blue parts (each tested at level α/2). Second, global discoveries
are profiles for which the global null Hred
0,i ∩ H blue
0,i is rejected, i.e., at least one part rejects its
corresponding null.
Since the higher-risk group may include many profiles, we report the corner combinations.
They are the boundary points of the upward-closed region. A corner combination is a minimal
selected profile under the coordinate-wise order: it is in the set, but if you remove any ACE
from it, the resulting profile is not. Reporting corners is sufficient because, by monotonicity,
any profile that adds ACEs to a corner is also included.
3.1. Red→Blue: Pre-specified screening and validation. We follow the pre-specified
plan. We compute ISS p–values in the red part. We screen with the cutoff κ = α/2 = 0.025
and obtain the candidate set Sκ = {i : pred
τ,i ≤ 0.025}. We then validate these candidates in the
blue part. We build a polyforest on Sκ using the evidence–guided rule. We run the ISS DAG
test at level α/2 = 0.025 and take the upward closure. This yields the selected set Abbin
R→B .
The blue–side validation rejects 77 candidates before closure and selects 2 corner combi
nations after upward closure: {ACEDEPRS}, {ACESUB, ACEDIVRC, ACESWEAR, ACESEX} . By
monotonicity, every profile that adds any further ACEs to either corner is included. On the
binary grid (210 profiles), Abbin
R→B covers 544/1024 = 53.1% of profiles. In the BRFSS 2023
sample, it flags 9,842 of 49,547 respondents (19.9%) under this rule.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 11
3.2. Blue→Red: EDA. In this section, we analyzed the data on the blue subgroup, the one
with a smaller sample size, to plan the analysis for the red data. Below we provide a detailed
description on how we conduct the exploratory data analysis (EDA) and prepared the plan for
analysis on the red subgroup.
Prior BRFSS studies collapse multiple questionnaire items into binary indicators for each
ACE domain. Yet several BRFSS ACE questions offer frequency choices such as None, Once,
and More than once. We therefore try to bring in frequency information. Concretely, we still
collapse multiple questions into the ten standard ACE domains, but for four items (ACEPUNCH,
ACEHURT1, ACESWEAR, ACESEX) we code 0 = never, 1 = once, 2 = ≥2 times. In addition, two
items (ACEADSAF, ACEADNED) report five categories: Never, A little of the time, Some of the time,
Most of the time, All of the time. Because these questions are framed in protective terms, we
reverse code them so that larger values indicate worse adversity: All of the time→ 0, Most→ 1,
Some→ 2, A little→ 3, Never → 4. More details appear in Table 3. Note that under frequency
coding, the monotonicity assumption implies that increasing exposure, either by adding ACE
items or by raising the frequency level of any item, cannot lower the probability of depression
(i.e., if x ⪯ x′ coordinate–wise, then η(x′) ≥ η(x)).
We then run ISS on the blue part under two specifications: (a) the traditional binary coding
for all ten domains; (b) the frequency coding in which the four items above are three-level
categorical and two are five-level ordered after reverse coding. The two analyses yield markedly
different pictures of the high–risk exposure structure (Tables 4–5).

12 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Table 3. Data Processing Steps and Collapsed ACE Items (Frequency Coding)
ACE Item Questions Collapsed Encoding Method ACESEX Number of times forced to touch, be touched, or have sex with anyone at least five years older or an adult
Constructed by summing responses across multiple questions: all “never” encoded as 0, total frequency = 1 encoded as 1, total frequency ≥ 2 encoded as 2 ACESUB Alcohol and illegal drug use in the household
Constructed by summing responses across multiple questions: all “never” encoded as 0, otherwise encoded as 1 ACEHURT1 Frequency of physical abuse ‘More than once’ encoded as 2, ’Once’ encoded as 1 and ‘None’ encoded as 0 ACESWEAR Frequency of verbal abuse ‘More than once’ encoded as 2, ’Once’ encoded as 1 and ‘None’ encoded as 0 ACEDIVRC Response to parental divorce question ’Yes’ encoded as 1, ’No’ encoded as 0 ACEDEPRS Response to question about living with a mentally ill person
’Yes’ encoded as 1, ’No’ encoded as 0
ACEPRISN Response to question about living with an incarcerated person
’Yes’ encoded as 1, ’No’ encoded as 0
ACEPUNCH Frequency of physical violence between parents
‘More than once’ encoded as 2, ’Once’ encoded as 1 and ‘None’ encoded as 0 ACEADSAF For how much of your childhood was there an adult in your household who made you feel safe and protected
Five-level ordered (reverse-coded): All of the time = 0; Most of the time = 1; Some of the time = 2; A little of the time = 3; Never = 4 ACEADNED For how much of your childhood was there an adult in your household who tried hard to make sure your basic needs were met
Five-level ordered (reverse-coded): All of the time = 0; Most of the time = 1; Some of the time = 2; A little of the time = 3; Never = 4

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 13
Table 4. ISS-selected corners on Blue: binary coding
ACEDEPRS ACESUB ACEPRISN ACEDIVRC ACEPUNCH ACEHURT1 ACESWEAR ACESEX ACEADSAF ACEADNED
Corner 1 1 0 0 1 1 1 1 0 0 0
Corner 2 1 0 0 0 1 1 1 1 0 0
Table 5. ISS-selected corners on Blue: frequency coding
ACEDEPRS ACESUB ACEPRISN ACEDIVRC ACEPUNCH ACEHURT1 ACESWEAR ACESEX ACEADSAF ACEADNED
Corner 1 1 0 0 0 0 0 2 2 0 0
Corner 2 1 1 0 0 0 0 2 0 0 0
Corner 3 1 0 0 1 0 1 2 1 1 1
Corner 4 0 0 0 0 0 1 2 2 1 0
Corner 5 0 1 0 0 0 0 2 2 1 0
Corner 6 1 1 1 0 0 0 0 2 1 0
Corner 7 0 0 0 1 0 0 2 2 1 0
Corner 8 1 0 0 0 0 2 2 0 2 1
Corner 9 1 0 0 1 0 1 2 0 2 1
Corner 10 0 1 0 1 0 0 2 2 0 0
Corner 11 0 0 1 1 0 1 2 2 0 0
Corner 12 1 1 0 1 1 0 0 2 1 0
Corner 13 1 1 0 1 0 1 0 2 1 0
Corner 14 1 0 1 1 1 1 2 1 1 0
Corner 15 1 0 0 0 0 0 2 0 3 1
Corner 16 1 0 0 1 0 0 2 1 2 1
Corner 17 1 1 0 0 0 0 1 2 1 0
Corner 18 1 0 0 1 2 2 2 1 3 0
Corner 19 1 1 0 1 0 0 1 2 0 0
Corner 20 1 0 1 1 0 0 2 0 2 1
Corner 21 1 1 0 0 0 1 1 2 0 0
Corner 22 1 0 0 0 0 1 2 1 2 1

14 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Under the binary coding, ISS identifies only two corner combinations (Table 4). Both
require ACEDEPRS= 1, ACEPUNCH= 1, ACEHURT1= 1, ACESWEAR= 1, and either ACEDIVRC= 1
or ACESEX= 1. When frequency information is incorporated (Table 5), the picture changes
substantially. ISS now detects several distinct corners. For example, in Corner 1 of Table 5,
only ACEDEPRS= 1, ACESWEAR= 2 and ACESEX= 2 are required. Relative to Corner 2 in Table 4,
this shows that experiencing verbal abuse more than once, experiencing sexual abuse more
than once together with living with a depressed or mentally ill household member, suffices to
exceed the risk threshold even without physical abuse or interparental violence. In addition,
in most corners of Table 5, ACESEX= 2 or ACESWEAR= 2 are required, indicating that repeated
sexual/verbal abuse can push many combinations above the threshold and highlighting the
severity of repeated exposure to sexual abuse.
Conclusively, the binary approach implicitly mixes individuals exposed once with those
exposed repeatedly, assuming the same level of risk across very different exposure intensi
ties. This masks meaningful differences in the intensity of adverse experiences. The fre
quency–augmented approach distinguishes one-time from repeated exposures, revealing that
repeated verbal and sexual abuse have a disproportionate impact on depression risk. This
provides a clearer and more interpretable characterization of high-risk profiles, motivating the
use of frequency–augmented coding in the red subgroup analysis.
Then, we mirror the pre-specified plan: use blue to help the red analysis by (i) screening to
shrink the set of combinations to be tested and (ii) organizing the polyforest used for testing
on the red side, aiming to remove unpromising profiles, reduces multiplicity, and increases
power at the same total error level. Throughout this Blue→Red path we adopt the frequency
encoding for both screening and validation. Other implementation details are exactly the same
as the pre-specified Red→Blue plan.
Guided by blue-side EDA, we considered a tiered α allocation that prioritizes combinations
featuring ACEs judged more consequential (e.g., ACEDEPRS, ACESEX). We built marginal risk
ratio summaries and a conditional dominance map to inform the tiers (Figures 8–9). We first
evaluated tiering in the exploratory blue part. This run did not use candidate screening or
evidence-guided parenting. Adding tiering to ISS produced a more selective set. The tiered set
was smaller than the non-tiered set and mainly pruned combinations, with few new additions.
We then ran simulations that used cross-part evidence for screening and parent selection.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 15
Evidence-guided ISS with and without tiering showed almost the same rejection patterns and
discovery counts. Complete exploration details and results appear in Appendix B and Figure 10.
Following this analysis plan informed by EDA on the blue part, we analyze the red part. The
screened candidate set contains 4,616 unique ACE combinations to be tested on the red side.
This is an 85.8% reduction relative to the full frequency–coded grid of 24 × 34 × 52 = 32,400
combinations. The red–side validation rejects 3,206 candidates before closure and selects 17
corner point after upward closure (see Table 6 for more details.). By monotonicity under
frequency coding, the selected set is upward–closed in both breadth and intensity. Any profile
that adds further ACE items (turning a 0 into a positive level) is included, and any profile that
raises the frequency level of an already present ACE is also included. On the frequency grid
(32,400 profiles), the upward–closed selection covers 6,166 profiles, i.e., 19.03% of the grid. In
the BRFSS 2023 sample with frequency coding (N = 49,547), the rule flags 4,364 respondents,
i.e., 8.81% of individuals.

16 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Table 6. Corner Combinations (blue → red) under frequency coding
ACEDEPRS ACESUB ACEPRISN ACEDIVRC ACEPUNCH ACEHURT1 ACESWEAR ACESEX ACEADSAF ACEADNED
Corner 1 1 0 0 0 0 0 2 1 0 0
Corner 2 1 1 1 1 0 0 0 2 0 0
Corner 3 1 1 0 1 0 1 1 2 0 0
Corner 4 1 1 0 0 0 0 2 0 1 0
Corner 5 1 1 1 0 0 0 0 2 1 0
Corner 6 1 1 0 1 0 0 0 2 1 0
Corner 7 0 1 0 1 1 1 2 2 1 0
Corner 8 1 0 0 1 1 1 2 0 2 0
Corner 9 1 0 1 0 1 2 2 0 2 0
Corner 10 0 1 0 1 1 0 2 2 2 0
Corner 11 1 1 1 0 1 1 2 0 0 1
Corner 12 1 1 0 1 0 1 0 2 0 1
Corner 13 1 0 1 0 0 1 2 0 1 1
Corner 14 0 1 0 1 1 0 2 2 1 1
Corner 15 1 0 0 1 0 1 2 0 2 1
Corner 16 1 0 0 0 0 2 2 0 2 1
Corner 17 0 1 0 1 0 2 2 2 2 1

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 17
3.3. Replicable Findings and Global Discoveries. We obtain two upward–closed selec
tions: Abbin
R→B ⊆ Ubin = {0, 1}10 and Abfreq
B→R ⊆ Ufreq = L1 × · · · × L10, where Lj = {0, 1} for
binary items, {0, 1, 2} for three–level items, and {0, 1, 2, 3, 4} for five–level items (with larger
values coded as worse for the five–level items). The red→blue analysis uses binary coding,
while the blue→red analysis uses frequency coding.
Define the deterministic coarsening map C : Ufreq → Ubin by C(x)j = 1{xj ≥ 1} for
three–/five–level items under frequency coding, C(x)j = xj for already–binary items. For
B ⊆ Ubin, define the lifting operator L(B) = { x ∈ Ufreq : C(x) ∈ B }. For any set S in either
domain, let up(S) denote its upward closure under the coordinate–wise order in that domain.
3.3.1. Replicable findings. We define the replicable set at the frequency resolution as
Rep = up Abfreq
B→R ∩ L Abbin
R→B ⊆ Ufreq.
Equivalently, a frequency–coded profile x is replicable iff x ∈ Abfreq
B→R and its binary collapse
C(x) ∈ Abbin
R→B. If x ∈ Rep and x′ ⪰ x (adding ACEs or increasing any frequency level), then
x′ ∈ Rep. Thus we report the corners (minimal elements) of Rep in Ufreq.
For example, consider the binary corner selected in the red→blue analysis:
b = {ACESEX=1, all other ACEs=0} ∈ Abbin
R→B. Suppose the blue→red analysis (under fre
quency coding) selects the corner x = {ACESEX=2, all other ACEs=0} ∈ Abfreq
B→R, where ACESEX
has levels {0, 1, 2} with larger values worse. The coarsening map C(·) collapses frequency to
presence/absence, so C(x) = {ACESEX=1, all other ACEs=0} = b. Because x ∈ Abfreq
B→R and
C(x) = b ∈ Abbin
R→B, we have x ∈ Abfreq
B→R ∩ L Abbin
R→B , hence x ∈ Rep by definition. By
monotonicity under frequency coding, any profile x′ ⪰ x (e.g., ACESEX=2 with ACESWEAR=1,
or ACESEX=2 with higher levels on other ACEs) is also in Rep and will appear via the up
ward closure. Intuitively, binary coding collapses intensity. For an item with frequency levels
(e.g., ACESEX∈ {0, 1, 2}, larger is worse), the binary event ACESEX=1 stands for the family
{ACESEX ≥ 1} under frequency coding. Monotonicity gives, for any fixed values of the other
ACEs, η(ACESEX=2, others) ≥ η(ACESEX=1, others) ≥ η(ACESEX=0, others). Hence, if a
binary corner that requires ACESEX=1 exceeds the threshold τ , then the refined pattern with
ACESEX=2 also exceeds τ .

18 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Below is a non–replicable contrast. Suppose instead the blue→red analysis selects y =
{ACESEX=1, all other ACEs=0} ∈ Abfreq
B→R, but the red→blue analysis selects only the binary
corner b′ = {ACESEX=1, ACEDIVRC=1, others=0} ∈ Abbin
R→B. Then C(y) = {ACESEX=1, others=0}
∈/ Abbin
R→B (because b′ also requires ACEDIVRC=1). Hence y ∈/ L Abbin
R→B and y ∈/ Rep, replicabil
ity fails.
We summarize Rep by its corner combinations under frequency coding (see Table 7 for de
tails). The set of replicable corners at the frequency resolution is identical to the Blue→Red
frequency corners. This follows from the two binary corners produced by the Red→Blue anal
ysis: B1 = {ACEDEPRS = 1}, B2 = {ACESUB = 1, ACEDIVRC = 1, ACESWEAR = 1, ACESEX = 1},
with all other items equal to 0. Let C(x) = 1{x ≥ 1} be the frequency→binary map applied
component-wise, and recall that Rep = Abfreq
B→R ∩ L Abbin
R→B , L(B) = {x : C(x) ∈ B}.
Case A (ACEDEPRS≥ 1). Any Blue→Red frequency corner x with ACEDEPRS≥ 1 satisfies
C(x) = B1. Since B1 ∈ Abbin
R→B, we have x ∈ L Abbin
R→B and thus x ∈ Rep. By monotonicity,
every x′ ⪰ x (adding ACEs or raising any frequency) also lies in Rep.
Case B (ACEDEPRS= 0). Each remaining Blue→Red frequency corner x contains ACESUB ≥
1, ACEDIVRC ≥ 1, ACESWEAR ≥ 1, ACESEX ≥ 1. Hence C(x) ⪰ B2 and in particular C(x) ∈
Abbin
R→B. Therefore x ∈ L Abbin
R→B and x ∈ Rep.
Because these two corners cover all Blue→Red frequency corners, the replicable set coincides
with the Blue→Red frequency selection. Therefore, the replicable higher-risk subgroup covers
6,166 profiles, i.e., 19.03% of the trequency grid, and in the BRFSS 2023 sample with frequency
coding (N = 49,547), the rule flags 4,364 respondents, i.e., 8.81% of individuals.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 19
Table 7. Corner Combinations of the Replicable High-risk Subgroup under Frequency Coding
ACEDEPRS ACESUB ACEPRISN ACEDIVRC ACEPUNCH ACEHURT1 ACESWEAR ACESEX ACEADSAF ACEADNED
Corner 1 1 0 0 0 0 0 2 1 0 0
Corner 2 1 1 1 1 0 0 0 2 0 0
Corner 3 1 1 0 1 0 1 1 2 0 0
Corner 4 1 1 0 0 0 0 2 0 1 0
Corner 5 1 1 1 0 0 0 0 2 1 0
Corner 6 1 1 0 1 0 0 0 2 1 0
Corner 7 1 0 0 1 1 1 2 0 2 0
Corner 8 1 0 1 0 1 2 2 0 2 0
Corner 9 1 1 1 0 1 1 2 0 0 1
Corner 10 1 1 0 1 0 1 0 2 0 1
Corner 11 1 0 1 0 0 1 2 0 1 1
Corner 12 1 0 0 1 0 1 2 0 2 1
Corner 13 1 0 0 0 0 2 2 0 2 1
Corner 14 0 1 0 1 1 1 2 2 1 0
Corner 15 0 1 0 1 1 0 2 2 2 0
Corner 16 0 1 0 1 1 0 2 2 1 1
Corner 17 0 1 0 1 0 2 2 2 2 1

20 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
3.3.2. Global Discoveries. Let C : Ufreq → Ubin be the coarsening map and, for B ⊆ Ubin, the
lifting operator L(B) = { x ∈ Ufreq : C(x) ∈ B }.
We report the global discoveries under frequency coding as
G = up Abfreq
B→R ∪ L Abbin
R→B ⊆ Ufreq.
A profile x is in the global set iff it is high–risk in at least one part (blue→red at the native
frequency resolution, or red→blue after lifting its binary discoveries).
For example, let b = (ACESEX = 1, others = 0) ∈ Ubin be a binary corner selected in the
red→blue analysis, and let x(2) = (ACESEX = 2, others = 0) ∈ Ufreq be a frequency corner
selected in the blue→red analysis. The lift of {b} is L {b} = x ∈ Ufreq : C(x) = b =
x : xACESEX ≥ 1, others = 0 .
Hence the global set reported under frequency coding G = up Abfreq
B→R ∪ L {b} contains
all profiles with ACESEX ≥ 1 and other items at 0, as well as any blue–side frequency selections.
By monotonicity, the frequency profile x(1) = (ACESEX = 1, others = 0) is a corner of G, while
x(2) ⪰ x(1) lies above it and therefore is not a corner though it remains in G by upward closure.
We present G by its corner points in Ufreq. Specifically, there are two corners under frequency
coding: {ACEDEPRS = 1, others = 0}, {ACESUB = 1, ACEDIVRC = 1, ACESWEAR = 1, ACESEX =
1, others = 0} . On the frequency grid, G covers 18,000 profiles (55.56%). In the BRFSS 2023
sample with frequency coding (N = 49,547), the global rule flags 9,842 respondents (19.86%).
4. Simulations
4.1. Simulation Settings. We generate a latent frequency–coded profile X ̃ = (x1, . . . , x10)
on a mixed grid: x1:4 ∈ {0, 1} (binary), x5:8 ∈ {0, 1, 2} (three–level), and x9:10 ∈ {0, 1, 2, 3, 4}
(five–level). Coordinates are independent with fixed marginals matching the application. We
then coarsen to a binary vector by Xbin = C(X ̃ ), C(x)j = 1{xj ≥ 1}.
The outcome model is defined on the latent frequency space Pr(Y =1 | X ̃ ) = logit−1 b0 +
s η0(X ̃ ) , b0 = logit(0.10)4. The signal η0(·) is monotone in each coordinate level. We con
sider two signal shapes for η0(·).(i) a logistic model only with main effects (coordinate-wise
monotonicity and no interactions), logit p(x) = β0 + P10
j=1 βjxj, βj ≥ 0 for all j, so the risk is
non-decreasing in each coordinate. (ii) the additive form augmented with a positive interaction
4logit(p) = log p
1−p , logit−1(z) = 1
1+e−z .

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 21
term on the logit scale, logit p(x) = β0 + P10
j=1 βjxj + γ x9x10, γ > 0. We choose the scale s
by calibration so that the superlevel mass Pr η(X ̃ ) ≥ τ equals a target in {0.50, 0.60, 0.70}.
After simulating (X ̃ , Y ) we record both codings (X ̃ , Xbin) and split observations into blue
(45%) and red (55%). We fix the ISS threshold at τ = 0.20. The scale s is calibrated by
root–finding on the latent frequency distribution so that the superlevel mass satisfies Pr η(X ̃ ) ≥
τ ∈ {0.50, 0.60, 0.70}. Sample sizes are n ∈ {10,000, 20,000, 30,000, 40,000, 50,000, 60,000}.
The familywise error rate is controlled at α = 0.05. For each design cell we run R = 100
replications with fixed seeds.
4.1.1. Part 1: Parent Selection Rules. We first run the simulation on binary coded data to
compare different parent selection rules.
(1) Nearest–cover baseline. Attach each node to a strictly dominating cover that min
imizes the l∞ distance on {0, 1}10; break ties at random (matches the default in the
ISS R package).
(2) Evidence–guided rule. Among screened covers, attach to the cover whose screening
p–value (computed in the opposite part) is smallest; break ties at random.
This corresponds to our design in the pre-specified plan. Both ways can be fully automated.
In other words, we don’t need to explore the data to organize the structure of the polyforest.
Therefore, in this module of simulation, we don’t include EDA. We run the pre–specified
cross–screening in both directions on the binary grid, hold τ and the screening cutoff fixed,
and vary only how we attach at most one parent (cover) per node in the validation part.
For reporting, we first summarize with: (i) Intersection (replicable): Ab∩ = Abbin
B→R ∩ Abbin
R→B.
Profiles in Ab∩ are rejected in both parts, hence are replicable. (ii) Union (global discovery):
Ab∪ = Abbin
B→R ∪ Abbin
R→B. Profiles in Ab∪ are rejected in at least one part, so the global null is
rejected.
For each profile x ∈ Ufreq, we compute Pr(Y =1 | X ̃ =x) under the model and mark x as
truly high–risk if this probability is at least τ . The frequency–level oracle set is Tfreq = up{ x :
Pr(Y =1 | X ̃ =x) ≥ τ }. We compute the population mass πfreq(x) of each profile from the
product marginals used by the DGP. For the binary coded datasets,let C : Ufreq → Ubin be
the deterministic coarsening with C(x)j = 1{xj ≥ 1} for nonbinary items and C(x)j = xj for
already–binary items. We define the binary oracle set by coarsening the frequency truth and
taking upward closure: Tbin = up C(Tfreq) . The mass of a binary profile b is the induced mass

22 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
πbin(b) = P
x: C(x)=b πfreq(x). These quantities are used only for evaluation. We summarize
performance by average regret- the total population mass of truly high–risk profiles not covered
by the selected set, divided by the total grid mass. We also report empirical FWER, defined
as the fraction of simulation runs with at least one false inclusion (i.e., a profile with Pr(Y =1 |
X ̃ =x) < τ entering Aˆ).
4.1.2. Part 2: Coding Choices. Secondly, inspired by the change of coding criteria during our
EDA on the red part, we set up the simulation to compare three different ways of coding.
(1) ISS on ACE score. Let Z(x) = P10
j=1 1{xj ≥ 1} be the ACE score. The domain
is the totally ordered set {0, 1, . . . , 10} with 0 ≺ 1 ≺ · · · ≺ 10. For each level z, test
H0(z) : η(Z=z) < τ vs. H1(z) : η(Z=z) ≥ τ , under the monotonicity constraint
η(z) ≤ η(z′) for z ≤ z′. ISS on this chain yields a data–driven threshold zb0 (the smallest
rejected level). The selected set at the profile level is {x : Z(x) ≥ zb0}.
(2) ISS with binary coding. Collapse each item to presence/absence 1{xj ≥ 1} and run
ISS on the d=10–dimensional product order, as specified earlier.
(3) ISS with frequency coding. Use the original ordinal levels (three–/five–level where
applicable), and run ISS on the full grid.
For each observation i = 1, . . . , n with profile Xi, define the oracle label Ti = 1{ Pr(Y =1 | Xi) ≥ τ }.
Given a method m that selects a set of profiles Ab(m), define the predicted label Tb(m)
i=
1
n
Xi ∈ Ab(m)
o
. Evaluate:
• ISS on frequency coding: check Xi ∈ Ab(freq) directly.
• ISS on binary coding: collapse Xi to C(Xi)j = 1{Xij ≥ 1} and check C(Xi) ∈ Ab(bin).
• ISS on ACE score: compute Z(Xi) = P
j 1{Xij ≥ 1} and check Z(Xi) ≥ zb0.
From {Ti, Tb(m)
i }n
i=1 we compute TP = P 1{Ti = 1, Tb(m)
i = 1}, FP = P 1{Ti = 0, Tb(m)
i=
1}, FN = P 1{Ti = 1, Tb(m)
i = 0}, TN = P 1{Ti = 0, Tb(m)
i = 0}, and report Sensitivity =
TP
TP+FN , Specificity = TN
TN+FP , positive predictive value(PPV) = TP
TP+FP and negative predictive
value(NPV)= TN
TN+FN .
4.2. Results. Figures 2 and 3 summarize performance across sample sizes, target masses, and
data-generating mechanisms. The evidence-guided polyforest achieves uniformly lower average
regret than the nearest-cover baseline. Importantly, the ordering of methods is unchanged in

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 23
target_mass=0.5 target_mass=0.6 target_mass=0.7
additive additive_synergy
10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60
0.1
0.2
0.3
0.4
0.5
0.6
0.1
0.2
0.3
0.4
0.5
0.6
Sample size n (thousands)
Average regret
Method nearest−cover baseline evidence−guided rule
UNION
Figure 2. Union (global discovery). Average regret versus sample size n for the union of higher-risk groups identified in the two parts. Panels vary the target mass and the functional form η(·). Solid orange: nearest–cover baseline, parent chosen by minimum l∞ distance (the default in the ISS R package). Dashed blue: evidence–guided parent selection, parent chosen as the screened cover with the smallest opposite–part screening p–value). Lower is better.
both the union (global discovery of higher-risk group) and the intersection (replicable higher
risk group), and for all different settings of data generating process (DGP). As expected, em
pirical FWER remains below the controlled level α = 0.05 across all configurations. Thus, the
evidence-guided construction of polyforest improves coverage of truly high-risk combinations
without sacrificing error control.
Figures 4–5 show a clear, stable pattern across data-generating mechanisms and target
masses. First, specificity and PPV are consistently highest under frequency-coded ISS, with
only mild variation as n grows. Both binary and ACE score implementations remain well below
the frequency curves on these two metrics throughout, reflecting structural information loss.
Keeping frequency levels retains both which ACE items are present and how often, allowing
ISS to rule out low–intensity look–alikes and thereby reduce false positives while collapsing

24 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
target_mass=0.5 target_mass=0.6 target_mass=0.7
additive additive_synergy
10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60
0.2
0.4
0.6
0.2
0.4
0.6
Sample size n (thousands)
Average regret
Method nearest−cover baseline evidence−guided rule
INTERSECTION
Figure 3. Intersection (replicable discovery). Average regret versus sample size n for the intersection of higher-risk groups identified in the two parts. Layout and line styles match Figure 2.
to binary items or to a single score discards exactly this information, which limits attainable
specificity and PPV. This is intrinsic to the coding.
Second, sensitivity and NPV exhibit the expected trade–off respectively with specificity
and PPV. The ACE score version attains the largest sensitivity/NPV at small and moderate n
because it triggers on many coarse profiles, whereas binary is intermediate and frequency starts
lower but improves steadily with sample size. Indeed, as n increases, sensitivity for both binary
and frequency coding rises (greater power), while specificity and PPV remain comparatively
stable for all three methods.
From a screening standpoint, our aim is to identify a replicable higher–risk subgroup that
can be used as a practical trigger for follow-up assessment or intervention under finite program
capacity. Prior work (e.g., Meehan et al. [2022]) cautions that implementing ACE screening
via ACE score thresholds can have detrimental consequences for resource allocation because
low specificity admits many false positives. In our setting, using binary collapse or ACE score
similarly enrolls many low-intensity or off-pattern profiles, which manifests as lower specificity.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 25
target_mass=0.5 target_mass=0.6 target_mass=0.7
additive additive_synergy
10 20 30 40 50 10 20 30 40 50 10 20 30 40 50
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Sample size n (thousands)
Performance metric
Metric sensitivity specificity
Method binary frequency acescore
Sensitivity & Specificity
Figure 4. Sensitivity and specificity by coding choice. Curves plot each metric against sample size. Columns vary the target superlevel mass; rows vary the DGP. Three implementations of ISS are shown: ACE–score, binary coding, and frequency coding.
By contrast, at the same prespecified risk threshold τ , frequency-coded ISS consistently yields
higher specificity and PPV, while its sensitivity improves as sample size increases. The re
sulting rule is also operationally clear that it specifies which items and the minimum levels
required. Taken together with the blue–part EDA, our simulations quantify and corroborate
the advantage of adopting frequency coding.
5. External Comparison
We benchmark simple ACE–score cutoffs against the replicable higher-risk combinations we
just identified on an external held-out set - BRFSS 2022. We keep the outcome definition
consistent with earlier sections. Let Y =1 if the respondent reports ever being told they had a
depressive disorder, and 0 otherwise (variable ADDEPEV3 in BRFSS). We reuse the same ACE
item construction and the same frequency coding as in the application.
Specifically, we compare two screening rules.

26 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
target_mass=0.5 target_mass=0.6 target_mass=0.7
additive additive_synergy
10 20 30 40 50 10 20 30 40 50 10 20 30 40 50
0.00
0.25
0.50
0.75
1.00
0.00
0.25
0.50
0.75
1.00
Sample size n (thousands)
Performance metric
Metric ppv npv
Method binary frequency acescore
PPV & NPV
Figure 5. Positive predictive value (PPV) and negative predictive value (NPV) by coding choice. Layout and line styles/colors match Figure 4.
(1) ACE–score threshold. Let Z(x) = P10
j=1 1{xj ≥ 1} be the ACE count under
frequency coding. For K ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9}, classify x as high–risk iff Z(x) ≥ K.
(2) Replicable higher-risk subgroup Let Rep ⊆ Ufreq be the frequency–coded replicable
set defined in the application. Classify x as high–risk iff x ∈ Rep.
We report standard sample–level metrics. Let R(X) ∈ {0, 1} be a rule’s classification on an
individual profile X: PPR = E[R(X)], Sensitivity = E[R(X) | Y =1], Specificity = E[1−R(X) |
Y =0], PPV = P(Y =1 | R(X)=1), NPV = P(Y =0 | R(X)=0). We estimate all quantities by
sample proportions on BRFSS 2022.
We construct the BRFSS 2022 analysis set using the same inclusion rules as in the applica
tion. In total, the analysis set includes 27, 652 samples. We evaluate each K ∈ {1, 2, 3, 4, 5, 6, 7, 8, 9}
and the replicable higher-risk combinations on the identical set of respondents.
Table 8 compares ACE score cutoffs with our replicable rule on BRFSS 2022. Motivated by
the Neyman–Pearson paradigm (hold the Type I error fixed and maximize power), we align
rules at the same specificity and then compare sensitivity. At specificity = 0.95 (false–positive
rate = 0.05), the ACE score cutoff ≥ 7 attains sensitivity = 0.19, PPV = 0.49, NPV = 0.83,

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 27
Table 8. Screening metrics on BRFSS 2022 by rule.
Rule PPR Sensitivity Specificity PPV NPV
ACE score ≥ 1 0.67 0.84 0.38 0.25 0.91 ACE score ≥ 2 0.45 0.68 0.61 0.30 0.89 ACE score ≥ 3 0.31 0.55 0.74 0.34 0.87 ACE score ≥ 4 0.23 0.45 0.83 0.39 0.86 ACE score ≥ 5 0.17 0.35 0.88 0.41 0.85 ACE score ≥ 6 0.12 0.27 0.92 0.45 0.84 ACE score ≥ 7 0.08 0.19 0.95 0.49 0.83 ACE score ≥ 8 0.05 0.12 0.97 0.52 0.82 ACE score ≥ 9 0.02 0.06 0.99 0.57 0.81 Replicable higher-risk subgroup 0.09 0.24 0.95 0.53 0.84
and PPR = 0.08. Our replicable subgroup achieves the same specificity = 0.95 with higher
sensitivity = 0.24 (a 26% relative gain), and also higher PPV = 0.53 and slightly higher NPV
= 0.84. Lower ACE cutoffs increase sensitivity but sharply reduce specificity and PPV, while
higher cutoffs increase PPV at the cost of very low sensitivity and very small PPR. Under
the fixed–specificity comparison above, our replicable higher-risk subgroup performs better
because it catches more truly at-risk individuals. In other words, using our replicable higher
risk subgroup controls false positives to the certain extent so resources aren’t wasted and
simultaneously misses fewer true cases by using specific item and frequency information rather
than a cumulative score or binary items. Besides, in BRFSS 2022, matching the subgroup’s
specificity requires an ACE score cutoff of ≥ 7. However, the commonly used ≥ 4 cutoff is much
less specific and would admit many more low-risk respondents, which may have detrimental
consequences for resource allocation.
6. Conclusions
We used data turnover combined with isotonic subgroup selection (ISS) to identify a repli
cable higher–risk subgroup of ACE exposure patterns. ISS’s monotonicity assumption matches
the question of how ACEs relate to adult depression: if a profile x is made more adverse to
x′ by adding ACE items or increasing their frequency (x ⪯ x′), the depression risk should not
decrease, i.e., η(x) ≤ η(x′). This implies that the selected subgroup is upward–closed and can
be summarized by its minimal corner combinations (i.e., the weakest combinations that still
exceed the threshold τ ) making the result transparent and easy to implement in screening. The
data turnover framework allows us to do exploration, confirmation, and replication with only

28 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
one team of researchers. On the exploratory side we examined coding choices and found that
incorporating frequency levels for selected ACE items is well–matched to the ACE context. On
the confirmatory/replication side, cross–screening and validation preserved strong error control
and improved effective power of ISS by focusing testing on promising candidates and organizing
the structure of the polyforest to avoid bottlenecks.
Exploration contributed substantively in our work. Frequency coding preserves which ACE
items appear and how often, revealing boundary combinations that binary collapse cannot.
This produced concrete, pattern–based triggers that replicated across splits. Replicability, in
turn, increases credibility for downstream use for screening and supports transport to external
data.
We then evaluated this replicable higher-risk group as screening rules on an external held–out
set (BRFSS 2022). Under a fixed–specificity comparison (matching specificity at 0.95), the
replicable subgroup achieved higher sensitivity (increase by around 26%) and higher PPV than
the ACE score threshold needed to reach the same specificity (here, ACE score ≥ 7). This shows
that one can control false positives to the same extent yet miss fewer truly at–risk individuals
by using specific item and frequency patterns rather than a cumulative score or binary items.
Our design prespecifies a risk threshold τ that defines higher risk. In this study we set τ
to approximately double the odds of depression relative to the no ACE baseline. The same
framework permits other choices of τ to match program goals and capacity: a lower τ yields
broader screening (higher sensitivity and lower specificity), whereas a higher τ yields narrower
screening (lower sensitivity and higher specificity).
In BRFSS 2022 our replicable subgroup attains sensitivity = 0.24 at specificity = 0.95. For
depression screening this is a favorable operating point relative to ACE score cutoffs, but it also
underscores that ACEs are only one component of risk. Stronger screening pipelines will likely
need to integrate additional predictors (e.g., sociodemographics, current symptoms, stressors,
social determinants) alongside ACE patterns. In addition, heterogeneity likely matters for the
effect of ACEs on depression. Selected patterns may vary by sex, race/ethnicity, and age.
Extending to assess subgroup–specific rules with multiplicity control and to monitor stability
across years and regions is a natural direction for future work.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 29
Acknowledgments
We thank Prof. Jacob Bien for the insightful conversations and guidance during the early
stages of this project, these discussions greatly helped shape the direction and development of
our work.
References
Robert F Anda, Charles L Whitfield, Vincent J Felitti, Daniel Chapman, Valerie J Edwards,
Shanta R Dube, and David F Williamson. Adverse childhood experiences, alcoholic parents,
and later risk of alcoholism and depression. Psychiatric services, 53(8):1001–1009, 2002.
Robert F Anda, Vincent J Felitti, J Douglas Bremner, John D Walker, CH Whitfield, Bruce D
Perry, Sh R Dube, and Wayne H Giles. The enduring effects of abuse and related adverse
experiences in childhood: A convergence of evidence from neurobiology and epidemiology.
European archives of psychiatry and clinical neuroscience, 256:174–186, 2006.
Anna E Austin, Kayla N Anderson, Marissa Goodson, Phyllis Holditch Niolon, Elizabeth A
Swedo, Andrew Terranella, and Sarah Bacon. Screening for adverse childhood experiences:
A critical appraisal. Pediatrics, 154(6):e2024067307, 2024.
Jessie R Baldwin, Avshalom Caspi, Alan J Meehan, Antony Ambler, Louise Arseneault, He
len L Fisher, HonaLee Harrington, Timothy Matthews, Candice L Odgers, Richie Poulton,
et al. Population vs individual prediction of poor health from results of adverse childhood
experiences screening. JAMA pediatrics, 175(4):385–393, 2021.
William Bekerman, Marina Bogomolov, Ruth Heller, Matthew Spivey, Kevin G Lynch,
David W Oslin, and Dylan S Small. Protocol for an observational study on the effects of pa
ternal alcohol use disorder on children’s later life outcomes. arXiv preprint arXiv:2412.15535,
2024.
William Bekerman, Abhinandan Dalal, Carlo Del Ninno, and Dylan S Small. Planning for gold:
Hypothesis screening with split samples for valid powerful testing in matched observational
studies. Biometrika, page asaf078, 2025.
Nandita Bhan, M Maria Glymour, Ichiro Kawachi, and SV4212798 Subramanian. Childhood
adversity and asthma prevalence: evidence from 10 us states (2009–2011). BMJ Open Res
piratory Research, 1(1):e000016, 2014.

30 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Marina Bogomolov and Ruth Heller. Replicability across multiple studies. Statistical Science,
38(4):602–620, 2023.
Daniel P Chapman, Charles L Whitfield, Vincent J Felitti, Shanta R Dube, Valerie J Edwards,
and Robert F Anda. Adverse childhood experiences and the risk of depressive disorders in
adulthood. Journal of affective disorders, 82(2):217–225, 2004.
David R Cox. A note on data-splitting for the evaluation of significance levels. Biometrika,
pages 441–444, 1975.
Maxia Dong, Robert F Anda, Vincent J Felitti, Shanta R Dube, David F Williamson,
Theodore J Thompson, Clifton M Loo, and Wayne H Giles. The interrelatedness of multiple
forms of childhood abuse, neglect, and household dysfunction. Child abuse & neglect, 28(7):
771–784, 2004.
Shanta R Dube, Vincent J Felitti, Maxia Dong, Wayne H Giles, and Robert F Anda. The impact
of adverse childhood experiences on health problems: evidence from four birth cohorts dating
back to 1900. Preventive medicine, 37(3):268–277, 2003.
Vincent J Felitti. The relationship of adverse childhood experiences to adult health: Turning
gold into lead/belastungen in der kindheit und gesundheit im erwachsenenalter: die ver
wandlung von gold in blei. Zeitschrift fu ̈r Psychosomatische Medizin und Psychotherapie, 48
(4):359–369, 2002.
Vincent J Felitti, Robert F Anda, Dale Nordenberg, David F Williamson, Alison M Spitz,
Valerie Edwards, and James S Marks. Relationship of childhood abuse and household dys
function to many of the leading causes of death in adults: The adverse childhood experiences
(ace) study. American journal of preventive medicine, 14(4):245–258, 1998.
Leah K Gilbert, Matthew J Breiding, Melissa T Merrick, William W Thompson, Derek C Ford,
Satvinder S Dhingra, and Sharyn E Parks. Childhood adversity and adult chronic disease:
an update from ten states and the district of columbia, 2010. American journal of preventive
medicine, 48(3):345–349, 2015.
Ruth Heller, Paul R Rosenbaum, and Dylan S Small. Split samples and design sensitivity in
observational studies. Journal of the American Statistical Association, 104(487):1090–1101,
2009.
Karen Hughes, Mark A Bellis, Katherine A Hardcastle, Dinesh Sethi, Alexander Butchart,
Christopher Mikton, Lisa Jones, and Michael P Dunne. The effect of multiple adverse
childhood experiences on health: a systematic review and meta-analysis. The Lancet public

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 31
health, 2(8):e356–e366, 2017.
Bikram Karmakar, Benjamin French, and Dylan S Small. Integrating the evidence from evi
dence factors in observational studies. Biometrika, 106(2):353–367, 2019.
Rebecca E Lacey and Helen Minnis. Practitioner review: twenty years of research with adverse
childhood experience scores–advantages, disadvantages and applications to practice. Journal
of Child Psychology and Psychiatry, 61(2):116–130, 2020.
Alan J Meehan, Jessie R Baldwin, Stephanie J Lewis, Jelena G MacLeod, and Andrea Danese.
Poor individual risk classification from adverse childhood experiences screening. American
journal of preventive medicine, 62(3):427–432, 2022.
Melissa T Merrick. Vital signs: estimated proportion of adult health problems attributable
to adverse childhood experiences and implications for prevention—25 states, 2015–2017.
MMWR. Morbidity and mortality weekly report, 68, 2019.
Manuel M Mu ̈ller, Henry WJ Reeve, Timothy I Cannings, and Richard J Samworth. Isotonic
subgroup selection. Journal of the Royal Statistical Society Series B: Statistical Methodology,
87(1):132–156, 2025.
Paul R Rosenbaum. Replicating effects and biases. The american statistician, 55(3):223–227,
2001.
Paul R Rosenbaum. How to see more in observational studies: Some new quasi-experimental
devices. Annual Review of Statistics and Its Application, 2(1):21–48, 2015.
Samrat Roy, Marina Bogomolov, Ruth Heller, Amy M Claridge, Tishra Beeson, and Dylan S
Small. Protocol for an observational study on the effects of giving births from unintended
pregnancies on later life physical and mental health. arXiv preprint arXiv:2210.05169, 2022.
C Ulke, T Fleischer, H Muehlan, L Altweck, S Hahm, H Glaesmer, J ̈org M Fegert, M Zenger,
HJ Grabe, S Schmidt, et al. Socio-political context as determinant of childhood maltreat
ment: a population-based study among women and men in east and west germany. Epidemi
ology and Psychiatric Sciences, 30:e72, 2021.
Geetha M Waehrer, Ted R Miller, Sara C Silverio Marques, Debora L Oh, and Nadine
Burke Harris. Disease burden of adverse childhood experiences across 14 states. PLoS
one, 15(1):e0226134, 2020.
David F Williamson, Theodore J Thompson, Robert F Anda, William H Dietz, and Vincent
Felitti. Body weight and obesity in adults and self-reported abuse in childhood. International
journal of obesity, 26(8):1075–1082, 2002.

32 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Ruizhe Zhang, Jooyoung Kong, Dylan S Small, and William Bekerman. Protocol for an ob
servational study on the effects of combinations of adverse childhood experiences on adult
depression. arXiv preprint arXiv:2502.17679, 2025.
Qingyuan Zhao, Dylan S Small, and Paul R Rosenbaum. Cross-screening in observational
studies that test many hypotheses. Journal of the American Statistical Association, 113
(523):1070–1084, 2018.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 33
Appendix A. Evidence-guided parent selection: full specification and examples
We work with the partial order on ACE combinations and the full DAG G = (I, E). We
form a polyforest F by giving each node at most one parent. The polyforest reduces complexity
but still preserves logical consistency. The in-degree in F is at most one.
We first screen hypotheses and obtain a candidate index set Sκ. The set Sκ contains combi
nations with p-values at most κ = 0.025. We then construct a polyforest on these candidates
only. For each i ∈ Sκ, define the cover set Cover(i) = j ∈ Sκ : Xj ≻ Xi and there is no k ∈
Sκ with Xj ≻ Xk ≻ Xi . We choose at most one parent from this set. We use evidence
to guide the choice. Specifically, par(i) ∈ arg min j∈Cover(i) p(screen)
τ,j , with uniform random
tie-breaking. If Cover(i) = ∅, then i a root. This yields a polyforest Fκval on Sκ. We then
compute validation-side p-values only for i ∈ Sκ and run the ISS DAG-testing algorithm on
Fκval.
ISS allocates the global level α to roots. The procedure reallocates unused α to remaining
roots after each rejection round. Rejection propagates along the structure. A node with strong
evidence may be blocked if its parent has a large p-value and receives limited α. In that case,
the chain cannot unlock budget, and the strong descendant is not reached. Evidence-guided
parenting reduces this risk. When constructing the polyforest, we choose each node’s parent as
the candidate with the strongest available evidence, that is, the one with the smallest screening
p-value. This concentrates α on more promising paths and therefore lowers the chance of
blocking while the FWER control still holds.
Figure 6 shows a blocking case. Nodes 1, 6, and 7 are roots and receive the initial budget.
Node 5 has a small p-value (0.01) but is attached under node 6 with a larger p-value (0.10).
Node 6 is unlikely to be rejected with its assigned budget, so the signal at node 5 is not reached.
This is an α-blocking event.
Figure 7 shows the same graph with a different parent for node 5. The parent is node 7
with a smaller p-value (0.03). After node 1 is rejected, the re-allocation increases node 7’s
budget. Node 7 is then rejected, and node 5 becomes reachable and is rejected as well. The
evidence-guided choice avoids the bottleneck and improves discovery.

34 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
Figure 6. DAG Testing: Example 1. Each node is labeled with its p-value (round brackets); in the induced polyforest-weighted DAG, solid arrows indicate edges that are retained in the polyforest (weight=1), while dashed arrows indicate edges that exist in the full DAG but are not retained in the polyforest (weight=0, since each node can have at most one parent); filled circles indicate hypotheses previously rejected. Panels (a)–(b) correspond to successive iterations of the algorithm, showing how r-
ejections propagate through the structure.

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 35
Figure 7. DAG Testing: Example 2. The setting is the same as in Figure 6, except that node 5 is attached through node 7 rather than node 6. Panels (a)–(d) correspond to successive iterations of the algorithm, showing how rejections propagate through the structure.
Appendix B. Tiered α allocation: motivation, design and results
We try to optimize α budget allocation informed by our exploration on the blue part. One
of the authors raised the question regarding Corner 3 in Table 5: Why is it that in the se
lected corners, ACEDIVRC= 1 appears but ACEPRISN= 1 does not? Intuitively, one might ex
pect parental incarceration (ACEPRISN) to carry a heavier psychological burden than parental
divorce (ACEDIVRC). The American Sociological Association’s website asserts that parental in
carceration can exert more severe consequences than divorce of a parent for both ADD/ADHD
and behavioral problems. Yet in our data-informed ISS corner selection, the block requiring
ACEDIVRC=1 is present whereas ACEPRISN=1 is absent. One plausible explanation is alpha allo
cation in the DAG testing. The p-value for Corner 7 in Table 5 is 9.26 × 10−7, while the p-value
for the combination (ACEPRISN= 1,ACEHURT1= 1,ACESEX= 2,ACESWEAR= 2,ACEADSAF= 1, other
ACE variables = 0) is 1.67 × 10−5. Both p-values are very small, but the latter is still larger
than the former. As a result, even if the two hypotheses received the same share of the α
budget in the DAG testing procedure, it is possible for the first to be rejected while the second

36 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
is not. This suggests that we may consider allocating slightly more α budget to combinations
that are logically or theoretically more plausible, while still controlling the FWER. Therefore,
we seek to combine insights from the blue data with domain knowledge to establish ordering
rules that align more closely with theoretical expectations and real-world understanding.
First, a marginal ranking was obtained by the risk ratio (RR) for Y =1 comparing Xj=1
vs. Xj=0 (Figure 8). This is easy to interpret but may be distorted by confounders and
the co-occurence of other ACEs. Second, a conditional dominance map was constructed by
exact stratification on the remaining ACEs and Mantel–Haenszel one-sided tests on discor
dant strata 1(Figure 9). This assesses whether, holding other ACEs fixed, the profile with
Xi=1, Xj=0 is more strongly associated with depression than the profile with Xi=0, Xj=1.
This controls for other ACEs but can be unstable in sparse strata and depends on the ho
mogeneity of stratum-specific associations. We interpret significant findings as evidence of
stronger conditional association. We used these two views as supporting evidence but not
used as decision rules. We combined them with domain knowledge to guide our interpretation.
One sociologist in our research team noted that the outcome is depression, which is a mental
illness. Emotional and sexual victimization may have a stronger effect than single physical
events. Repeated verbal abuse often reflects long-term hostility and rejection. Emotional ne
glect may be more directly linked to depression than physical neglect. Parental depression
in the household acts as both a psychosocial stressor and an indicator of genetic and envi
ronmental risk. Combining these considerations yields the ordering we adopt for assigning
α-budgets: {ACEDEPRS, ACESEX, ACESWEAR} > {ACESUB, ACEPRISN, ACEADSAF, ACEHURT1} >
{ACEADNED, ACEDIVRC, ACEPUNCH}
The tiered α-allocation scheme reflects both logical relations among nodes and domain pri
orities. At any stage of ISS, some hypotheses are already rejected, while others remain as
candidates. We group the remaining nodes into subsets. Nodes in the same subset are mutu
ally incomparable under the partial order. Across subsets, we define a simple hierarchy based
on our domain-informed ordering rule. Each remaining node keeps its α budget from the DAG
testing scheme. We then sum the α budgets of all candidates in a subset to form the subset’s
joint α budget. Inside each subset, we perform a parallel gatekeeping procedure (Burman et
al., 2009) and the testing follows the item-level ranking. Nodes with higher-tier ACEs (for
example, ACEDEPRS or ACESEX) are tested first. If several nodes share the same priority and are
logically equivalent (for example, all include ACEDEPRS= 1 but differ by ACESUB, ACEPRISN, or

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 37
Figure 8. Marginal Ranking by Risk Ratio (RR)
Figure 9. Conditional Dominance Heatmap

38 REPLICABLE HIGHER-RISK COMBINATIONS OF ACES
ACEHURT1= 1), we split the subset’s α equally among them. If no node in the current priority
level is rejected, testing stops for that branch. If at least one node is rejected, we pass the
remaining α budget from that level to the next one, dividing it according to the tier weights.
This rule allows α budget to flow forward when evidence exists while still controlling the overall
FWER.
Though, tiering may raise or lower power. The net effect is uncertain. If the data align with
the domain ranking, tiering concentrates α on promising chains and can increase power. If the
ranking is misspecified, tiering can misallocate α, slow reallocation, and introduce bottlenecks in
the DAG testing procedure. We therefore run a focused simulation to compare parent–selection
and tiering strategies under frequency coding. The data–generating process (DGP), calibration
to the target superlevel mass, and the testing machinery follow the Simulations Section, so here
we only record what differs.
Each profile x = (x1, . . . , x10) has 4 binary, 4 three–level, and 2 five–level coordinates, so
the evaluation grid has 24 × 34 × 52 = 32,400 cells. We split observations into blue (45%)
and red (55%) as before and analyze the Blue→Red direction only. Here, we compare four
different ways. (i) Nearest–cover baseline (based on the minimall∞ distance), (ii) evidence
guided rule, (iii) evidence-guided rule + tiering. We construct a three–tier ranking for each
simulated dataset using marginal associations computed after binarizing the ACE variables.
For this step, every frequency–coded item is collapsed to 1{xj ≥ 1} vs. 0. This binarization is
used only to form tiers, ISS is still run on the original frequency coding. For each configuration
we still focus on the average regret, as well as the empirical FWER as a finite sample check.
The result is showcased in Figure 10. The evidence–guided rule (blue) and evidence guided
rule + tiering (green) uniformly improves on the nearest–cover baseline (orange). Nevertheless,
adding tiering on top of evidence guidance (green) yields little additional benefit: the tiered and
non–tiered curves are essentially indistinguishable at the plotted scale. As expected, empirical
FWER estimates remain at or below the nominal 0.05 level in all cells. Overall, these patterns
indicate that the utility of tiering is data–dependent. It helps when the domain ranking aligns
with the underlying signal.
Thus, we compare ISS on the blue part with and without tiering. The universe is the
frequency–coded grid U with |U | = 32,400. We obtain |AbISS| = 7,276, |Abtier| = 6,252, |AbISS ∩
Abtier| = 5,775. Thus |AbISS \ Abtier| = 1,501 and |Abtier \ AbISS| = 477. Tiering selects a smaller
set. It mostly trims a subset of the non–tiered discoveries and adds a modest number of

REPLICABLE HIGHER-RISK COMBINATIONS OF ACES 39
alternatives. But here in the exploration, we do not use cross–split screening and also do not use
evidence–guided parent selection. Both runs use the same induced polyforest (nearest–cover,
l∞).
target_mass=0.5 target_mass=0.6 target_mass=0.7
additive additive_synergy
10 20 30 40 50 60 10 20 30 40 50 60 10 20 30 40 50 60
0.25
0.30
0.35
0.40
0.45
0.50
0.25
0.30
0.35
0.40
0.45
0.50
Sample size n (thousands)
Average regret
Method nearest cover baseline evidence guided rule evidence guided rule + tiering
Figure 10. Average regret versus sample size n for the higher-risk group identified in the red part guided by the blue part. Layout and line styles match Figure 2. Notably, the blue and green curves overlap throughout.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:10.496Z
- **Text Length:** 76904 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
