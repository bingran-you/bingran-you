# PDF Document: Thakkar - 2025 - A mark and recapture perspective on vaccination touchpoints.pdf

**File Path:** Thakkar - 2025 - A mark and recapture perspective on vaccination touchpoints.pdf

**Processed Date:** 2026-02-10T18:14:23.357Z

**File Size:** 929.40 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3656

**Title:** A mark and recapture perspective on vaccination touchpoints

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A mark and recapture perspective on vaccination touchpoints
Niket Thakkar∗
The Gates Foundation’s Institute for Disease Modeling Seattle, Washington 98109 (Dated: November 18, 2025)
This paper considers large-scale vaccination campaigns, a major platform for vaccine access in a lot of the world, as a recapture estimate of the target population marked by routine immunization. Framing the campaign as a measurement, we learn about its properties, including the campaign’s coverage of the target population and some implied sampling properties of post-campaign coverage surveys (PCCSs), the current gold-standard in implementation quality measurement. We develop this idea in the cont-
ext of the 2023 measles campaign in Kano State, Nigeria, where we have detailed implementation data collected by vaccination teams involved in that effort. Looking specifically at the teams’ tally sheets, the daily records of who they vaccinated, we find significant discrepancies between the recapture estimates and those from the corresponding PCCS. Exploring a variety of bias models applied to both the tally sheets and the PCCS helps clarify how anecdotal issues from the field relate to this disc-
repancy. Overall, we find that the tally sheets, despite being an unorthodox population sample, provide a tractable perspective on implementation and measurement, one that’s in principle available nearly instantly and at high resolution for any vaccination touchpoint.
Keywords: Vaccination campaigns, max entropy, coverage measurement, Bayesian inference, survey sampling
I. INTRODUCTION
It’s generally recognized that a commitment to improving global health is also a commitment to measuring the properties of interventions [1]. Unfortunately, the consensus tends to disintegrate from there. What needs to be measured, to what precision, how to do it, who it’s for (and so who should pay for it) are all open questions in a broadly chaotic measurement environment. Measles vaccine delivery is a concrete example. In the highest-burden settings, routine vaccination services are inaccessibl-
e or unreliable, leaving gaps in immunity that have to be closed by dedicated vaccination campaigns every few years [2]. In those efforts, medical teams bring vaccines to underserved areas and try to immunize kids within a predetermined target population. Designing these efforts to better reach susceptible individuals before the virus does is a major global health initiative [3], one that requires high-quality measures of intervention impact, comprehensiveness, and failure-modes. The accepted stan-
dard for measuring campaign quality is the post-campaign coverage survey [2, 4]. PCCS is a 2-stage cluster survey where individuals in the target population are asked about their campaign experience, including if they received a vaccine at all. While useful in principle, in practice PCCS is underpowered at the granular scale relevant to implementation, it’s rarely conducted in a reasonable time frame, and often its findings are colloquially reduced to just a coverage number and then forgotten. It’-
s becoming clear that PCCS isn’t satisfying programmatic measurement needs. In fact, most
∗ niket.thakkar@gatesfoundation.org; https://github.com/NThakkar-IDM/recapture
countries that conducted a campaign since 2020 haven’t even bothered with a PCCS [4]. For a complex intervention like a vaccination campaign it seems unwise to rely so heavily on one measurement platform. Ideally, measurement methods offer light touch, timely, accurate, and interpretable insights into intervention details, which is a lot to ask of a single approach. As campaigns progress with no measurement plans at all, the toolbox is starting to feel pretty empty. Along those lines, the main ide-
a in this paper is to make better use of the implementation records already collected in a vaccination campaign. We focus specifically on the tally sheets [5], Fig. 1 is a blank example, literal paper records of who vaccination teams encounter as they work. In exploring the data photographed and digitized during the 2023 measles campaign in Kano State, Nigeria [6], we show that campaign coverage can be estimated directly from the tally sheets in a principled Bayesian inference scheme, making use o-
f prior information on routine immunization coverage and target population size. The approach is analogous to mark and recapture methods common in ecology [7, 8], and so we call this the recapture coverage estimate. In the specific example considered, the recapture coverage estimate is in disagreement with the corresponding PCCS estimate. Two quiet but common narratives in global health are that tally sheets are at least partially fabricated to increase campaign scale and that PCCS sampling is bia-
sed to increase coverage in response to political pressures on performance. We consider these hypotheses quantitatively in our example, and we show that an unrealistically structured bias in tallying would be necessary to corroborate the PCCS. This paper does not fully settle the issue of campaign coverage and target population size in 2023 in Kano. But it does demonstrate that implementation records offer
arXiv:2511.12536v1 [q-bio.PE] 16 Nov 2025

2
TABLE I. Routine, campaign, and post-campaign measles vaccine coverage data from Kano State Nigeria, circa 2023
Source Coverage Sample size DHSa (12–23mo.) .386 531 Tally sheets (12–23mo.) .927 204137 PCCSb (9mo.–5yr.) .89 600 PCCS with ZD at the campaignc .11 600
a The 2023 DHS does not yet have a published design effect. We take De = 1.303 from the 2018 DHS throughout [12]. b Approximately 107 of the 600 samples are 1-year-olds, and De = 8 for overall coverage [11]. We take estimates across ages as representative of 1 year-olds but with higher uncertainty.
c De = 2. Estimates across all states suggest this could be ≈ .15 for 1 year-olds, higher, but still within the Kano interval [11].
timely and interpretable insight into campaign coverage. As our understanding develops, that could free the PCCS to focus on other implementation details, and we conclude with some general thoughts to that effect.
II. FOUR CONFUSING NUMBERS
The 2023 measles vaccination campaign in Kano State took place over 9 days in mid December. In the planning phase, the Gates Foundation funded GRID3 to support implementation in a variety of ways, including a pilot study where paper records were photographed and handdigitized by GRID3 employees in 6 local government areas (LGAs, the Nigerian administrative level 2 unit, essentially districts) considered representative of the state1. The tally sheet photographs in particular were taken on a nightly-
 basis in a direct interaction with vaccination team supervisors [6]. For our purposes, the implementation data is essentially a collection of counts by vaccination team every campaign day, taken from records like that in Fig. 1. While the tallies are disaggregated by sex and age, we’ll focus specifically on the 12 to 23 month-olds across their caregiver reported status of having had measles vaccine before (“other dose”, OD) or not (“zero dose”, ZD). In Kano, across the 6 LGAs, there were 204137 1-
 year-old tallies in total, with 189321 reporting OD. Since the previous campaign in Kano was in 2021, these caregivers must have been referring to vaccines delivered through the routine immunization (RI) system. With that thought in mind, we might take tallied 1 year-olds as a sample of RI coverage and conclude that
1 It’s not easy to verify this claim in this context. The LGAs in question cover 15.6% of the state’s population. Half of the LGAs are urban, the other half are rural in the sense that they’re outside Kano City. Recent LGA-level estimates [9] of RI coverage have the 6 LGA average deviating from the state average by < 1%. In any case, since the focus of this paper is the method, not any specific campaign coverage estimate, we don’t explore potential ecological fallacies in much detail.
92.7% of kids get measles vaccine through RI in Kano. In the same year though, the Demographics and Health Survey (DHS) found that RI coverage among 1 year-olds was 38.6% [10]. Meanwhile, for this campaign, the PCCS estimated that 89% of the target population was covered, with 11% of them getting their first ever measles vaccine from the intervention [11]. These numbers are collected in Table I with some sample size and design details.
It’s not clear how the pieces fit together. For example, taking the PCCS and tally sheets at face value and assuming every missed child is ZD, we’d estimate RI coverage is 82.5% at a minimum, more than 22 standard deviations from the DHS. Meanwhile, accepted population estimates like that from GRID3 [13] put approximately 144k 1 year-olds in the 6 LGAs, so we sometimes see reports that campaign coverage is an impressive ≈ 140%.
The usual thing to do at this stage is to argue that the DHS and PCCS have rigorous sample designs while the
Male Female Male Female Male Female
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
Male Female Male Female Male Female 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 0000-
0 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
00000 00000 00000 00000 00000 00000
Sub total
9- 11 months
Zero Doses
Sub Total
12-23 Months
Zero Dose
Sub Total
24-59 Months
(other dose)
9- 11 months
(other dose)
Sub Total
12-23 Months
(other dose)
Sub Total
Total
Settlement 1 Name: ............................... Settlement 2 Name: ..................................... Settlement 3 Name: .............................. Age-Group
FIG. 1. A blank tally sheet from Nigeria circa 2023. Vaccinators tick off the relevant bubbles as they work, compiling a histogram each campaign day.

3
tally sheets do not. Something must be wrong with the latter, and they should be ignored. As we’ll see, there is probably something wrong with the tally sheets. But they shouldn’t be ignored.
III. MARK AND RECAPTURE
The size of the target population, that is the number of 1 year-olds in the 6 LGAs, is a fundamental uncertainty underlying the discordance above. Mark and recapture methods are an established approach to estimating population sizes based on relationships between distinct samples. They inspire a line of thinking for us in Kano. For the unfamiliar, the canonical [7] mark-recapture example is something like this: An ecologist wants to know how many fish are in a lake. She first goes to the lake, cat-
ches 10 fish, and marks them in some durable way. Then she puts them back into the water. When she returns the next day, she catches 20 fish, of which 4 are marked. Since the expected number of marked fish in 20 samples from a large population of N fish is 20 × (10/N ), she might estimate that there are N = 50 fish in the lake, the so-called Lincoln-Peterson [14, 15] estimate. Our situation is a variant where we have some uncertainty in the number of individuals marked. Specifically, in Kano, the -
DHS tells us that 38.6% of the population are “marked” by vaccine through RI, and in the campaign, teams found a sample of 204k children, of which 92.7% were marked. If we assume that the campaign exhausted the population covered by RI, that would imply there are 204k × (92.7/38.6) ≈ 490k 1 year-olds in the population, and campaign coverage was about 42%. This quick calculation is the basic idea in what follows. It turns out, with some care, we can leverage prior information to avoid assumptions a-
bout campaign coverage in OD children. Moreover, in framing the problem probabilistically, we can quantify uncertainty more thoughtfully throughout, giving us some perspective on the PCCS estimates in Table I as well. To get started, consider a population of N 1 year-olds. Conditional on N , we can define a length N binary vector R = (R1, R2, ..., RN ) representing each 1 year-old’s RI status just before the campaign, with Ri = 1 if the ith child received one or more measles vaccines through RI. T-
he population has some true RI coverage
CN (R) = 1
N
N
X
i=1
Ri, (1)
a population average based in this case on N samples, that is, a census for a given N . For our purposes, the DHS is an estimate of Eq. 1, and we can retrieve the corresponding average and variance directly from the survey report. But for completeness and clarity, we treat the DHS as another length N binary vector S0 = (S10, S20, ..., S0
N ), where S0
i = 1 means a child
was sampled in the DHS, and P
i S0
i = n0 is a known
constraint called the sample size. The relevant estimate in our case is
Cn0 (R) = 1
n0
N
X
i=1
S0
i W0
i Ri,
a weighted average where W 0
i is the ith child’s normalized survey weight. The DHS sample is constructed for these averages to be unbiased and E[Cn0 (R)] = CN (R),
where the expected value is taken over p(S0 | n0), a joint distribution sometimes called the sample design. Meanwhile, for binary R, the variance V[Cn0 (R)] ≈
(De0/n0)E[Cn0 (R)](1 − E[Cn0 (R)]), where De0 is called the design effect, quantifying variance inflation relative to a less economical, large N simple random sample [16]. Along similar lines, the campaign is a distinct sample, again a length N binary vector S1 = (S11, S21, ..., S1
N)
where S1
i = 1 means the ith child received a campaign
vaccine and P
i S1
i = n1 is known from the tally sheets. The sample is unorthodox in the sense that it has unknown design. In other words, we need a reasonable and tractable model for statistics of p(S1 | n1). To make progress, we consider Ri as a correlate of the ith child’s campaign participation, and we can hypothesis test against a sampling model with two distinct sub-populations, those with and without routine measles vaccine. Specifically, let
k1 ≡
N
X
i=1
S1
i Ri ∼ Binom {N CN (R), π1} ,
k0 ≡
N
X
i=1
S1
i (1 − Ri) ∼ Binom {N (1 − CN (R)), π0} ,
such that k0 + k1 = n1 and both π0 and π1 are unknown sampling probabilities. Standard manipulations give the more concise form
p(k1|n1, R) ∝ N CN (R)
k1
N (1 − CN (R)) n1 − k1
ψk1 , (2)
where ψ ≡ π1(1−π0)/π0(1−π1) is the odds ratio of being sampled based on RI status, and conditionality on N is implicit in the conditionality on R. For general ψ ̸= 1, this construction is sometimes called Fisher’s noncentral hypergeometric distribution [17]. Its properties and large n1 asymptotic approximations to its mean and variance are discussed in Appendix A. In the context of Eq. 2, the tally sheet RI coverage estimate is Cn1 (R) = k1/n1. As a result, the observed difference, ∆ ≡ Cn0 (R) − C-
n1 (R) has statistics
E[∆] = E[Cn0 (R)] − 1
n1
E[k1],
V[∆] = V[Cn0 (R)] + 1
n21
V[k1],
where in the second line we assume the two samples are independent. From Appendix A, V[k1] ∼ O(n1), so the

4
FIG. 2. The tally sheets at face value. (Left) The joint prior distribution p(N, θ) (log contours in black) gives the N, θ-space some basic structure. The likelihood (tan) highlights the ridge consistent with the data. (Right) Their combined contributions are evident in p(N, θ | ∆) (log contours at the same levels), which can be used to compute the relevant marginals (grey).
DHS variance dominates when n1 >> n0, and p(∆ | N, ψ) is Gaussian to a good approximation when we’re thinking about a scale where the DHS is well-powered. Under that assumption, Bayes’ theorem gives us an approachable, 2-dimensional inference problem characterizing the campaign,
p(N, θ | ∆) = p(∆ | N, θ)p(N, θ)
p(∆)
≈ N (∆ | E[∆], V[∆])p(N )p(θ)
p(∆) ,
(3)
where N is a Gaussian distribution, and we’ve chosen to work in terms of θ ≡ ln ψ to facilitate the numerical integration needed to estimate p(∆) and solve the inference problem. Note that all the distributions in Eq. 3 are implicitly conditional on the sample sizes n0 and n1. In Appendix B, we show that the maximum entropy principle [18–20] guides us to logical forms for the prior distributions p(N ) and p(θ) assuming there’s some known prior average target population size, Nˆ , used for campaign-
 planning, like the one from GRID3 [13] mentioned previously. For completeness in this section, we take
p(N ) = 1
Nˆ 1 − 1
Nˆ
N −n1
(4)
p(θ) = 1
2 csch2 θ
2
θ
2 coth θ
2 − 1 , (5)
on domains N ≥ n1 and θ ∈ (−∞, ∞). To whatever extent it’s helpful, Eq. 4 might be called a left-truncated
geometric distribution. Eq. 5 doesn’t have a name to our knowledge but is an exact consequence of 0 ≤ π0, π1 ≤ 1 and the definition of the log odds ratio.
The joint prior distribution p(N )p(θ) is log-contourplotted (black lines) in Fig. 2’s first panel. The distribution is peaked at N = n1, θ = 0, and then falls geometrically with increasing N and exponentially with θ. Intuitively, the prior encodes that the target population is at least n1 and otherwise finite. Meanwhile, the symmetry around θ = 0 represents our ignorance on how Ri = 1 is associated with campaign coverage in the absence of any data.
The observed ∆ = 0.386−0.927 in Table I specifies the likelihood p(∆ | N, θ), which we visualize as a tan shaded interval within 5% of the log-maximum in Fig. 2. The likelihood defines a ridge of N , θ pairs that are consistent with ∆. As θ increases to infinity, OD children are infinitely more likely than ZD children to participate in the campaign, and we see the ridge approach the perfect OD coverage estimate, N ≈ 490k, discussed above.
But with the machinery in Eq. 3 we can solve the inference problem more completely, as illustrated in Fig. 2’s second panel. Log joint posterior contours show how geometric features of the inputs combine to highlight the region most probably consistent with the data and prior uncertainties. The intuition that both perfect OD coverage and extremely high N are unlikely leads us to the corner in the likelihood ridge. Marginal distributions p(N | ∆) and p(θ | ∆), estimated via numerical integration an-
d visualized along the corresponding axes, high

5
light the specific θ and N values most consistent with the first two rows in Table I. Overall, in Kano in 2023, if we believe the tally sheets, we also must believe in a large, significantly less accessible ZD population that was missed by the campaign.
IV. RECAPTURE COVERAGE
Getting from Fig. 2 to a coverage estimate is straightforward since campaign coverage is n1/N , a one-to-one function of N . In other words, we can take the marginal distribution p(N | ∆) and compute p(n1/N | ∆) directly. The result (black) is visualized alongside the corresponding PCCS estimate (grey) in Fig. 3. Based on the tally sheets, our best guess for campaign coverage is n1/N ∗ ≈ 39%, with a hard stop at the 42%, ψ → ∞ limiting estimate. There is essentially no chance the 89% PCCS coverage-
 estimate (95% interval shaded) is consistent with the recapture approach. To add some texture to this result, we can calculate an individual-level contingency table p(Ri, S1
i | ∆) encapsulating the implications consistent with the tally sheets. Specifically, if we take the marginal probabilities
X
S1
i
p(Ri = 1, S1
i | ∆) = p(Ri = 1 | ∆) ≈ Cn0 (R),
X
Ri
p(Ri, S1
i = 1 | ∆) = p(S1
i = 1 | ∆) ≈ n1
N∗,
we find
p(Ri, S1
i | ∆) =
Ri = 0 Ri = 1 S1
i = 0 0.557 0.049
S1
i = 1 0.057 0.337 (6)
FIG. 3. Recapture coverage. Taking the tally sheets as they are, we get a campaign coverage estimate (black) that’s inconsistent with the corresponding post-campaign survey (grey).
making use of the most probable log odds ratio in Fig. 2 and noting that πj ≡ p(S1
i = 1 | Ri = j) for j = 0, 1 in this new notation. At the most probable parameter values, an OD child is more than 9 times as likely to be reached by the campaign than a ZD child. Along those lines, we estimate that the campaign covers 87.4% of the OD population but only 9.3% of the ZD population. The probability of a child getting their first vaccine from the campaign is p(Ri = 0 | S1
i = 1) ≈ 14.5%. Meanwhile, in this picture of the
6 LGAs, we find N ∗ ≈ 518k, more than 3.5 times the GRID3 estimate. Eq. 6 paints a surprising picture, particularly in light of the campaign’s stated 95% coverage goal [11]. We should and will be skeptical of it. But before that, the PCCS results in Table I are still lingering, and it’s interesting that surveyed coverage among ZD was 11%, in reasonable agreement with the recapture estimate. It’s helpful to think of participation in the PCCS as another length N binary vector, S2 = (S12, S22, ..., S-
2
N)
with S2
i = 1 indicating the ith child was surveyed and
P
i S2
i = n2. While the PCCS has well-defined survey design, and is unbiased in principle like the DHS, Fig. 3 at least suggests we should test for potential issues. With that motivation, we might have two competing hypotheses for its sampling distribution p(S2 | S1, R) in the post-campaign context. The more diplomatic hypothesis is that p(S2 | S1, R) ≈ p(S2 | R). In words, PCCS is conditionally independent of the campaign, and sampling bias is explained by health care access. Surveyed campaign coverage-
 estimates are spuriously inflated because the campaign shares a correlation with Ri = 1. In this case, as we did for S1, we would test against
l1 ≡
N
X
i=1
S2
i Ri ∼ Binom {N CN (R), π ̃1} ,
l0 ≡
N
X
i=1
S2
i (1 − Ri) ∼ Binom {N (1 − CN (R)), π ̃0} ,
such that l0 + l1 = n2 and the sampling probabilities π ̃0 and π ̃1 reduce to one unknown as in Eq. 2. On the other hand, the more cynical p(S2 | S1, R) ≈ p(S2 | S1) has campaign participation itself as the dominant bias, maybe because incentive structures pressure programs to have high coverage campaigns. In that case we might test
m1 ≡
N
X
i=1
S2
i S1
i ∼ Binom
(N X
i=1
S1
i , πˆ1
)
,
m0 ≡
N
X
i=1
S2
i (1 − S1
i ) ∼ Binom
(
N−
N
X
i=1
S1
i , πˆ0
)
,
a comparable model, with m0 + m1 = n2, but with the population structured by campaign participation instead

6
of RI coverage, and so with distinct sampling probabilities, πˆ0 and πˆ1, in general. In the first case, campaign coverage is
E1
n2
X
S2
i S1
i = E[l1]
n2
p(S1
i = 1 | Ri = 1)
+ 1 − E[l1]
n2
p(S1
i = 1 | Ri = 0),
(7)
a weighted average of OD and ZD coverage. Eq. 7 can be compared to the overall estimate in Table I to specify E[l1]/n2 consistent with Eq. 6. Meanwhile, in the second case, surveyed campaign coverage is E[m1]/n2 directly. In other words, both models can explain the overall PCCS estimate with different underlying mechanisms. But with each sampling distribution specified by the 89% number in Table I, we can calculate the statistic F =
P
i S2
i S1
i (1 − Ri)/n2, the surveyed estimate that a child gets their first measles vaccine from the campaign. In the p(S2 | R) model, this is just the second term in Eq. 7, and we would estimate F < 2% almost certainly. Meanwhile, in the p(S2 | S1) model, we find F = (E[m1]/n2)×p(Ri = 0 | S1
i = 1) ≈ 12.9%, and highly likely bounded between 9 and 15%, an order of magnitude higher. Reflecting on the two mechanisms, if the campaign and PCCS share an underlying correlation with Ri = 1, surveying a ZD child who was also vaccinated in the campaign is rare twice over. But if the PCCS is correlated with S1
i = 1 directly, surveying a ZD child is much less of a hindrance. In other words, if we believe the tally sheets from 2023, we must also believe that the corresponding PCCS was biased towards high coverage directly.
V. SOME ASYMPTOTIC INTUITION
So far we’ve discussed one explanation for the discordance in Table I, one that takes the DHS and the tally sheets as the two most reliable pieces of data. It’s healthy to ask how potential recording errors or biases might influence our results. With that motivation in this section, we derive a coarse but interpretable approximation to n1/N ∗, which highlights how the recapture estimates change with distortions to the data. In Appendix A, where we discuss some known statistical properties of the d-
istribution in Eq. 2, we show that its mode, k1∗, is related to θ through
k1∗
n1
= A(θ)
2n1(eθ − 1) 1 − B(θ)
A(θ) , (8)
where
A(θ) = N + (eθ − 1)(n1 + N CN (R)),
B(θ)2 = A(θ)2 − 4eθ(eθ − 1)n1N CN (R).
In our case, reflecting on Fig. 2, we’re in a situation where campaigns are much better at reaching OD children than ZD children. Mathematically then, we’re concerned with inference stability in the large θ limit, which
means characterizing Eq. 8 to leading order in e−θ = 1/ψ and calculating the downstream properties of Eq. 3. To start, we expand the terms outside and inside the brackets in Eq. 8 separately, and find
A(θ)
2n1(eθ − 1) = 1
2 1 + CN (R)
z + O e−θ ,
where we’ve introduced the notation z ≡ n1/N , and
B(θ)
A(θ) =
s
1 − 4zCN (R)
(z + CN (R))2 + O e−θ .
Combining the two expressions and collecting terms exposes the mode’s leading order behavior,
k1∗
n1
= CN (R)
z + O e−θ ,
recovering the ψ → ∞ result discussed in the last two sections, that k1∗ → N CN (R), the full OD population. When n1 is large, Eq. 2 is sharp, and the mean is close enough to the mode for our purposes here. Taking E[k1]/n1 ≈ CN (R)/z, Eq. 3 reduces to
ln p(z, θ | ∆) ≈ const. + n1
z ln 1 − 1
Nˆ
−1
2V[∆] ∆ − CN (R) 1 − 1
z
2
,
(9)
where the constant depends on θ but not on z. Then, in the same large n1 limit, V[∆] ≈ V[Cn0 (R)], and Eq. 9
can be maximized to find z∗, the most probable campaign coverage estimate. Carrying out the calculation, with ln(1 − 1/Nˆ ) ≈ −1/Nˆ , we find
1
z∗ = N∗
n1
≈1− ∆
CN (R) − n1
Nˆ
V[Cn0 (R)]
CN (R)2 . (10)
Eq. 10 bounds coverage in the ψ → ∞ limit and helps scaffold our thinking. The ratio V[Cn0 (R)]/CN (R)2 is an index of dispersion, quantifying our uncertainty in RI coverage. It decays as 1/n0 for the DHS. As a result, when our RI coverage estimate is precise and the prior population estimate is O(n1), the final term in Eq. 10 is small. In 2023 in Kano for example, it’s −0.006 if the DHS is genuinely unbiased so Cn0 (R) ≈ CN (R). If the DHS were biased, a possible error neglected in the previous t-
wo sections, we might more generally write Cn0 (R) = (1 + α)CN (R) with α ̸= 0 characterizing the degree. In that case, a precise but shifted DHS estimate would modify z∗ like so,
z∗ ≈ Cn0 (R)
Cn1 (R) 1 − α 1 − Cn0 (R)
Cn1 (R) ,
to leading order in α. Realistically, if it’s biased at all, the DHS likely overestimates CN (R), so α > 0. In the large θ regime we’re in, that would decrease z∗, making

7
the discrepancy in Fig. 3 worse. DHS bias doesn’t seem like a viable explanation for the issues in Table I. Meanwhile, when it comes to tally sheet recording, Eq. 10 tells us that the recapture coverage estimate depends mainly on the ratio of RI coverage to the tally sheet average. In the Kano example, an error that inflates n1 by 10 times would modify recapture coverage by only 0.1% if it maintains Cn0 (R)/Cn1 (R). That said, those same
types of errors effect N ∗ directly, and we should interpret recapture target population estimates with that in mind.
VI. A HYPOTHETICAL TALLY
Eq. 10 suggests that the recapture coverage estimate would align with Kano’s PCCS if Cn1 (R) was roughly halved. In fact, it seems like the recapture estimate is robust in the sense that no other change will do the job. Tabling discussions of plausibility for now, let’s assume half of the OD tallies were misrecorded and were actually ZD. In that case Cn1 (R) goes from 92.7% to 46.4%, and we can calculate the consequences from Eq. 3 onward. The new coverage estimate is visualized in Fig. 4, and it -
agrees with the PCCS as expected. Revisiting the contingency table, p(Ri, S1
i | ∆), at the most probable estimates, we find
p(Ri, S1
i | ∆) =
Ri = 0 Ri = 1 S1
i = 0 0.139 0.051
S1
i = 1 0.475 0.335 . (11)
Now, an OD child is 1.1 times as likely as a ZD child to be reached by the campaign, the campaign covers 86.8% of the OD population and 77.4% of the ZD population, and the probability of a child getting their first vaccine from the campaign is 59%. The estimate of target population size changes as well, N ∗ ≈ 252k, a potentially more reasonable [21] 1.7 times the GRID3 estimate. Our previous thoughts on PCCS sampling basically reverse. Specifically, to explain overall coverage surveyed around 89%,-
 many more ZD children are required to have been vaccinated in the campaign. Under the p(S2 | S1) sampling model specified by PCCS coverage, we’d estimate that F > 37% of children surveyed got their first measles vaccine from the campaign. Meanwhile, in the competing p(S2 | R) model, F is unconstrained, covering the 11% number in Table I. So in this hypothetical situation, the campaign and the PCCS sharing an underlying correlation with Ri = 1 seems necessary.
VII. SOME STRUCTURED ERROR MODELS
Fig. 4 demonstrates that it’s possible for the recapture and PCCS estimates to agree. Realizing that agreement in Kano would require a systematic recording error where about half of OD tallies are actually ZD. It seems unlikely that a net 50% false positive rate is realistic, but it’s worth ruling out more thoroughly.
FIG. 4. Hypothetical tally sheets in Kano. Recapture coverage (black) and the post-campaign survey (grey) agree if half of the OD tallies are actually ZD.
One potential mechanism is caregiver recall – maybe children get other vaccines and their parents get them mixed up when asked about measles. Literature on this topic [22] doesn’t suggest a large, one directional effect however. In most studies, people are roughly as likely to forget doses they received, falsely reporting ZD, as they are to invent doses they haven’t. Recall doesn’t seem affected by the campaign environment either. Looking at serological data from the 2020 measles campaign in Zambi-
a [23], differences in seropositivity between those with documented vaccine and those with recalled vaccine suggests that OD memory is accurate ≈ 86% of time. That number is in good agreement with more focused recall studies [24]. Moving on then to recording itself, we might guess that some vaccination teams didn’t bother asking about dose history. Across the 409 teams in the 6 LGAs, 100 never tally a ZD in any age group. If we remove those tally sheets from the dataset however, Cn1 (R) → 0.906. N-
ot even close to what we’d need. We can try more sophisticated misrecording indicators too. Since the number of children who show up on a given day is a random process, we shouldn’t expect any preference for round numbers. Looking at the work across the teams, with 10 numbers per sheet, we get a sample of up to 90 nonzero numbers per team across the campaign. We can test for example if the last digit in each nonzero entry is uniformly drawn from 0 to 9 using a standard Pearson’s χ2 test applied to-
 each team’s tallies. There’s definitely evidence of non-uniform recording. Some examples are striking: One team recorded 33 nonzero numbers across the campaign, 30 of which ended in 0. More broadly, if we remove the sheets from teams with less than 10% probability of drawing from a uniform last digit distribution, we lose the work from 60% of

8
the vaccinators. Doses delivered in the campaign decline substantially, n1 → 77139, but the OD fraction remains essentially the same, Cn1 (R) → 0.923. As a result, as expected from Eq. 10, the recapture coverage estimate is unchanged, but N ∗ → 229k, larger than the GRID3 estimate by 1.6 times. Returning to the motivating goal, while we could probably find more reasons to question subsets of the tally sheets, it’s difficult to imagine a mechanism for systematic false OD tallies at such a large sca-
le. From an estimate stability perspective then, the recapture coverage approach seems generally reliable.
VIII. CONCLUSION
At this stage, reflecting on Table I, the tally sheets give compelling evidence that Kano’s 2023 campaign had lower coverage in the 6 LGAs than the PCCS’s state-wide 89%. At the same time, the tally sheets imply there are more than 3 times as many 1 year-olds as people think, so it also seems likely that the number of tallies is inflated in some way. To what extent is unclear. More to the point though, we have shown that implementation data, despite being collected outside a traditional survey pla-
tform, can power provably robust inferences about campaign quality, target population size, and measurement. The approach illustrated in Fig. 2 is applicable instantly after tallies are totaled, Eq. 10 suggests that resolution is limited mainly by precision in RI coverage, and results like Eq. 6 meaningfully highlight campaign failure modes. Analysis like this costs very little. It should probably be a part of all campaigns. If it were, it would inspire more thoughtful tally sheet design and more -
intentional data collection. We might reconsider PCCS’s role in that context. The Kano example suggests that PCCS is less suited to measuring coverage, and is better for measuring other campaign details, like the characteristics of children conditional on their campaign participation. It seems worth some study to design post campaign surveys with that narrower focus in mind, giving vaccination programs more fit-for-purpose measurement tools.
ACKNOWLEDGMENTS
This work benefited immensely from discussions with colleagues at the Gates Foundation. In particular, I want to thank Amine El Mourid, Kevin McCarthy, Roy Burstein, Hil Lyons, Katie Maloney, Chris Wolff, Marisa Gaetz, and Ana Leticia Nery. Their technical and programmatic perspectives influenced this research at every stage. I also want to thank GRID3 for their care with the pilot study, and their input on early iterations of this work. Finally, I want to thank the National Primary Health Care De-
velopment Agency in Nigeria for their role in pilot study data collection.
Appendix A: Noncentral, hypergeometric likelihoods
Both the campaign and PCCS are modeled as two binomial samples constrained in sum, as in Eq. 2. That construction is called Fisher’s noncentral hypergeometric distribution, and its properties are well-studied, but the derivations in the literature are a little confusing with results are scattered across multiple books and papers [17, 25–27]. We include a concise derivation of the asymptotic results used here in case it’s useful for reference. A random variable x is a noncentral hypergeometric if
p(x | m, N1, N2, ψ) ∝ N1
x
N2
m − x ψx,
where ψ is the odds ratio of contributions to the m samples coming from subpopulation N1 relative to N2. Taking the log, applying Sterling’s approximation to the binomial coefficients, and maximizing gives the condition
ψ = x∗(N2 − m + x∗)
(N1 − x∗)(m − x∗) (A1)
which is quadratic in the mode x∗ and solvable as in Eq. 8. Differentiating the log-probability with respect to x again and evaluating at x∗ gives
 ̃V[x] = 1
x∗ + 1
N1 − x∗ + 1
m − x∗ + + 1
N2 − m + x∗
−1
for the variance around the mode. Frequently in asymptotic Bayesian inference, we stop here [20], but for this distribution we can make these approximations more accurate with two more ideas. The first is credited to McCullagh and Nelder [25], who noted that p(x | m, N1, N2, ψ) should reduce to the standard (central) hypergeometric distribution when ψ = 1. Comparing the mode and variance above to that distribution’s known statistics inspires a correction
V[x] = N1 + N2
N1 + N2 − 1
 ̃V[x],
which they demonstrate improves accuracy. The second improvement is to adjust the mode closer to the mean [27], which is what’s actually needed in Eq. 3. The mode condition Eq. A1 inspires us to calculate the averages E[x(N2 − m + x)] and E[(N1 − x)(m − x)]. Manipulations of the binomial coefficients expose the exact formula,
ψ = E[x(N2 − m + x)]
E[(N1 − x)(m − x)] ,
generally credited to Cornfield [26]. Rearranging gives the mean-variance relationship,
f (E[x]) + (ψ − 1)σ2 = 0,

9
where σ2 = E[x2] − E[x]2 is the exact variance around the mean, and we’ve defined
f (ξ) ≡ ψ(N1 − ξ)(m − ξ) − ξ(N2 − m + ξ).
Note that Eq. A1 implies f (x∗) = 0, so we can take f (E[x]) ≈ f ′(x∗)(E[x] − x∗) to perturb the mode towards the mean. Carrying out the calculation gives
E[x] ≈ x∗ + (ψ − 1)σ2
(ψ − 1)[N1 + m − 2x∗] + N1 + N2
,
which we evaluate in practice with σ2 ≈ V[x] from above. These are the two statistics of Eq. 2 needed in the Gaussian approximation to the likelihood p(∆ | N, θ) used throughout the main text. It’s worth briefly pointing out that we approximate p(Cn0 (R) | n0) as Gaussian too. That approximation makes errors at the level of tail probabilities where Cn0 (R) < 0 or Cn0 (R) > 1 have nonphysical support. The total tail probability is
E =1−
Z1
0
dz N (z | E[Cn0 (R)], V[Cn0 (R)]),
and for the DHS in Kano, numerical integration gives E ≈ 0, as expected for a well-powered survey. In other words, we can safely use the Gaussian likelihood in our example. But notably, if we were working at higher spatial resolution with correspondingly larger V[Cn0 (R)], E could potentially be significant.
Appendix B: Maximum entropy prior probabilities
The inference problem in Eq. 3 requires prior structure through p(N, θ) = p(N )p(θ). Fig. 2 makes it clear that this choice is influential since the likelihood alone, the tan ridge, does not have a distinct maximum. Different choices for p(N, θ) will yield different inferences, a reflection of those choices expressing higher preference for some N or θ than that in Eqs. 4 and 5. As mentioned in the main text, we calculate information entropy maximizing priors consistent with the data available in a-
dvance of the campaign. This is a theoretically supported and rigorous approach to choosing p(N, θ), especially in problems where prior information is a key ingredient [18, 19]. Maximum entropy is a principle that helps us find distributions consistent with the data we have but with the least amount of structure otherwise. Ref. 20 is an approachable introduction. In any case, starting with θ, we first consider a sampling probability πj with j = 0, 1 as in Eq. 2. If we think of a p(πj), the related-
 entropy is
Hπ[p(πj)] = −
Z1
0
dπj p(πj) ln(p(πj)),
reflecting the fact that 0 ≤ πj ≤ 1. We want to maximize Hπ subject to the constraint that p(πj) is normalized.
Jaynes proved [19], by discretizing the 0 to 1 interval into m pieces, that p(πj) ≈ 1/m, which yields πj ∼ Uniform{0, 1} exactly in the continuous limit. This is the intuitive result. Knowing nothing else, just that πj is a probability, we’d place it anywhere from 0 to 1 without preference. To specify p(θ), we need to work from π0 and π1 to a log odds ratio. The odds, yj = πj/(1 − πj), is an invertible transformation, so
p(yj) = dπj
dyj
p πj = yj
1 + yj
=1
(1 + yj)2 ,
which is apparently called a beta-prime distribution. Moving to zj = ln yj is another invertible transformation, which this time yields
p(zj) = 1
(1 + ezj )(1 + e−zj ) ,
which is a product of logistic functions evaluated at ±zj. The density p(zj) is sometimes called a generalized logistic distribution in light of that fact. In this notation, θ = ln z1 − ln z0, and so p(θ) is a convolution of two generalized logistic distributions. To evaluate the convolution, we first calculate the characteristic function,
φz(t) ≡ E eitz =
Z∞
−∞
dz eitz
(1 + ez)(1 + e−z) ,
where i = √−1 and we’ve suppressed the index on z. The integral can be taken on a semi-circular contour in the complex z plane, summing over the poles on the imaginary axis. We find φz(t) = πtcsch(πt), implying
φθ(t) = φz1 (t)φz0 (−t)
= (πt)2csch2(πt),
via the convolution theorem. Taking the inverse Fourier transform, again by summing residues within a semicircular contour, gives
p(θ) = 1
2 csch2 θ
2
θ
2 coth θ
2 −1 ,
which is Eq. 5 in the main text. Note that p(θ) is a direct consequence of the definition eθ = π1(1 − π0)/(1 − π1)π0, and so p(θ) maximizes entropy exactly. The result above is admittedly a little opaque. To build some intuition, we can expand ln p(θ) to quadratic order around θ = 0. That teaches us that p(θ) ≈ N (θ | 0, 6), a centered normal distribution with variance 6. The comparison is visualized in Fig. 5, showing that the approximation is good for most of the probable domain, with heavier bu-
t still exponential tails in p(θ). Evidently odds ratios start to lose meaning above or below ≈ e±5, as one or both of the πi get closer and closer to 0 or 1.

10
FIG. 5. Interpreting Eq. 5. Extreme values of log odds ratios, θ, aren’t meaningfully different from one another.
Moving on to N , we assume campaign planning is based on some prior estimate Nˆ , which we model as the expected value of p(Nˆ ). Thus, we want to maximize
HN [p(N )] = −
∞
X
N =1
p(N ) ln p(N ),
subject to constraints
∞
X
N =1
p(N ) = 1
∞
X
N =1
N p(N ) = Nˆ .
The usual Lagrange multiplier method [19] gives
p(N ) = 1
Nˆ 1 − 1
Nˆ
N −1
,
a standard geometric distribution. At the moment, this result is unconditional on n1, the total number of doses given in the campaign. In the context of Eq. 3, we need to incorporate that N ≥ n1. Truncating p(N ) by taking
p(N | n1) = p(N )
1 − Pn1−1
N ̃ =1 p(N ̃ ) ,
gives
p(N | n1) = 1
Nˆ 1 − 1
Nˆ
N −n1
,
which is Eq. 4 in the main text.
We note briefly that in principle GRID3 and others who produce Nˆ also occasionally publish measures of uncertainty. That said, the literature suggests that uncertainty in population sizes is poorly estimated [21], particularly at higher resolution. Moreover, that uncertainty does not inform campaign planning in the same way prior targets do. Regardless, we choose to ignore prior population uncertainty estimates to emphasize the values consistent with the tally sheets. But if we had stronger feeli-
ngs on Nˆ , they would manifest in p(N | n1) having faster decaying tails, which would effect the results.
[1] A. Lindstrand, E. Mast, S. Churchill, N. Rahimi, J. Grevendork, A. Brooks, E. Magnus, R. Nandy, and K. L. O’Brien, Implementing the immunization agenda 2030: A framework for action through coordinated planning, monitoring & evaluation, ownership & accountability, and communications & advocacy, Vaccine 42, S15 (2024). [2] World Health Organization, Planning and implementing high-quality supplementary immunization activities for injectable vaccines using an example of measles and rubella vaccine-
s: field guide (2016). [3] Measles & Rubella Partnership, Global measles & rubella strategic framework 2021-2030, (2020). [4] M. C. Danovaro-Holliday, M. Koh, C. Steulet, D. A. Rhoda, and M. K. Trimner, Lessons from recent measles post-campaign coverage surveys worldwide, Vaccines 12, 1257 (2024). [5] A. Higgins-Steele, S. Shendale, J. Grevendonk, M. GacicDobo, and M. C. Danovaro-Holliday, Recording vaccine
doses administered: A global analysis of tally sheet design for infant and child immunizations, PLOS Global Public Health 5, 1 (2025). [6] GRID3, Digitizing granular fixed-post campaign data (2024), unpublished technical report. [7] D. G. Chapman, The estimation of biological populations, Annals of Mathematical Statistics 25, 1 (1954). [8] A. Chao, P. Tsay, S.-H. Lin, W.-Y. Shau, and D.-Y. Chao, The applications of capture-recapture models to epidemiological data, Stats. in Med. 20, 3123 (2001). [-
9] E. Haeuser, S. Byrne, J. Nguyen, C. Raggi, S. A. McLaughlin, C. Bisignano, A. A. Harris, A. E. Smith, P. A. Lindstedt, G. Smith, et al., Global, regional, and national trends in routine childhood vaccination coverage from 1980 to 2023 with forecasts to 2030: a systematic analysis for the global burden of disease study 2023, The Lancet (2025). [10] NPC and ICF, Nigeria demographic and health survey 2023–24: Key indicators report (2024).

11
[11] NBS and NPHCDA, Integrated post-campaign coverage survey (ipccs) main survey report 2023/2024 (2024). [12] NPC and ICF, Nigeria demographic and health survey 2018 (2019). [13] GRID3, GRID3 data repository, https://data.grid3. org/ (2025), accessed September 2025.
[14] F. C. Lincoln, Calculating waterfowl abundance on the basis of banding returns, 118 (US Dept. of Ag., 1930). [15] C. G. J. Petersen, The yearly immigration of young plaice in the limfjord from the german sea, Rept. Danish Biol. Sta. 6, 1 (1896). [16] W. G. Cochran, Sampling techniques (1977). [17] R. Eisinga and B. Pelzer, Saddlepoint approximations to the mean and variance of the extended hypergeometric distribution, Statistica Neerlandica 65, 22 (2011). [18] C. E. Shannon, A mathematical th-
eory of communication, Bell System Technical Journal 27, 379 (1948). [19] E. T. Jaynes, Information theory and statistical mechanics, Phys. Rev. 106, 620 (1957).
[20] D. Sivia and J. Skilling, Data analysis: a Bayesian tutorial (Oxford University Press, 2006). [21] J. La ́ng-Ritter, M. Keskinen, and H. Tenkanen, Global gridded population datasets systematically underrepresent rural population, Nat. Comm. 16, 2170 (2025). [22] R. N. Modi, C. King, N. Bar-Zeev, and T. Colbourn, Caregiver recall in childhood vaccination surveys: Sys
tematic review of recall quality and use in low- and middle-income settings, Vaccine 36, 4161 (2018). [23] C. Prosperi, S. Truelove, A. C. Carcelen, G. Chongwe, F. D. Mwansa, P. Ndubani, E. Simulundu, I. C. Bwalya, M. Hamahuwa, K. Kapungu, K. H. Matakala, G. Musukwa, I. Mutale, E. Betha, N. Chaavwa, L. Kampamba, J. Matoba, P. Munachoonga, W. Mufwambi, K. Situtu, P. E. Thuma, C. Sakala, P. Kayeye, A. K. Winter, M. J. Ferrari, W. J. Moss, and S. Mutembo, High measles and rubella vaccine coverage and-
 seroprevalence among Zambian children participating in a measles and rubella supplementary immunization activity, PLOS Global Public Health 5, 1 (2025). [24] E. Gareaballah and B. Loevinsohn, The accuracy of mother’s reports about their children’s vaccination status, Bulletin of the WHO 67, 669 (1989). [25] P. McCullagh and J. A. Nelder, Generalized Linear Models, 2nd ed. (Routledge, New York, 1989). [26] J. Cornfield, A statistical problem arising from retrospective studies, in Proceedings of th-
e Third Berkeley Symposium on Mathematical Statistics and Probability, Vol. 4, edited by J. Neyman (University of California Press, Berkeley, CA, 1956) pp. 135–148. [27] B. Levin, Simple improvements on Cornfield’s approximation to the mean of a noncentral hypergeometric random variable, Biometrika 71, 630 (1984).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:23.357Z
- **Text Length:** 48491 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
