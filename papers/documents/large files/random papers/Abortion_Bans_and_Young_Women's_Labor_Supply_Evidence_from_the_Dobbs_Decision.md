# PDF Document: Ando - 2025 - Abortion Bans and Young Women's Labor Supply Evidence from the Dobbs Decision.pdf

**File Path:** Ando - 2025 - Abortion Bans and Young Women's Labor Supply Evidence from the Dobbs Decision.pdf

**Processed Date:** 2026-02-10T18:17:35.958Z

**File Size:** 422.81 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3225

**Title:** Abortion Bans and Young Women's Labor Supply: Evidence from the Dobbs Decision

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Abortion Bans and Young Women’s Labor Supply:
Evidence from the Dobbs Decision
Rintaro Andoa,∗
aGraduate School of Public Policy, The University of Tokyo, Tokyo, Japan
Abstract
This paper provides evidence on the impact of the 2022 Dobbs decision on the labor
supply of young women (ages 18–24). Exploiting the implementation of state-level
abortion bans, I use monthly CPS micro data from January 2021 to December 2023
and estimate Difference-in-Differences (DiD) and Triple-Difference (DDD) mod
els. In a simple DiD comparing young women in ban versus protected states, labor
force participation increases by 3.6 percentage points (p < 0.05), while young
men’s participation in ban states falls by 2.9 percentage points (p < 0.05). My
preferred DDD specification with state-by-month and gender-interacted fixed ef
fects implies a 6.6 percentage point (p < 0.05) increase in labor force participation
for young women in ban states relative to young men in the same states. School
enrollment does not change, whereas employment rises by about 3 percentage
points. These findings indicate that restricted reproductive rights are associated
with an immediate increase in young women’s labor market attachment, poten
tially shifting focus toward current earnings over human capital accumulation in
the short run.
Keywords: Abortion ban, Labor supply, Triple-difference, Human capital
JEL: J13, J22, I21
∗Corresponding author. Graduate School of Public Policy, The University of Tokyo. Email: anrin106@g.ecc.u-tokyo.ac.jp.
arXiv:2511.16120v1 [econ.GN] 20 Nov 2025

1. Introduction
The rapid shift in the U.S. reproductive landscape following the Supreme
Court’s decision in Dobbs v. Jackson (June 2022) raises urgent questions regard
ing its economic consequences. While a growing literature examines the health
and fertility implications of abortion access and its rollback (e.g., Miller et al.,
2020; Myers, 2017; Dench et al., 2024; Guttmacher Institute, 2023), much less
is known about the immediate impact on the labor supply of young women. Re
cent work documents sizable increases in fertility in total-ban states following
Dobbs (Dench et al., 2024) and sharp changes in abortion, birth, and contraceptive
patterns across states with differing legal regimes (Guttmacher Institute, 2023).
Other studies highlight longer-run channels through which abortion policy shapes
women’s human capital and economic security, including college choices (Kane,
2025), contraceptive and sterilization behavior (Gallen and Lu, 2025), and intimate
partner violence (IPV) risk (Dave and Durrance, 2025). This paper focuses on a
complementary, and thus far underexplored, margin: the short-run labor supply
response of young women.
From a historical perspective, the diffusion of the pill and the legalization
of abortion in the 1960s–70s are widely viewed as key drivers of rising female
labor force participation, educational attainment, and narrowing gender wage gaps.
Classic contributions such as Goldin and Katz (2002) show that improved control
over the timing of childbearing reduced uncertainty around career planning and
facilitated long-term human capital investment. The Dobbs decision can be viewed
as a reversal of this “uncertainty reduction” mechanism: by restricting access to
abortion, states raise the expected cost of unintended pregnancy and potentially
alter the trade-off between current work, schooling, and future career prospects. In
parallel, emerging evidence suggests that young women respond to abortion bans
by reallocating their educational and geographic choices away from total-ban states
(Kane, 2025) and, in some cases, by adopting permanent forms of contraception
as a defensive response to policy risk (Gallen and Lu, 2025). Together with the
documented rise in IPV following abortion restrictions (Dave and Durrance, 2025),
2

these findings underscore that reproductive autonomy is tightly linked to women’s
bargaining power and economic trajectories.
For women aged 18–24, the loss of reproductive autonomy sharply increases
the expected cost of unintended pregnancy at a critical stage for human capital accu
mulation. The widespread adoption of “trigger bans” acts as a plausibly exogenous
shock to reproductive control. Economic theory suggests that restricted ability to
delay parenthood may force earlier labor market entry or greater attachment to
earnings-generating activities (Goldin and Katz, 2002). Using high-frequency
data from the Current Population Survey (CPS) from January 2021 to December
2023, I examine whether this type of policy shock is associated with an immediate
change in young women’s labor supply, exploiting geographic variation in state
laws.
I document a 3.6 percentage point increase in labor force participation (LFP)
for young women in ban states relative to protected states. Crucially, I find a con
current decline in LFP of 2.9 percentage points for young men in the same regions,
suggesting that the female response is unlikely to be driven by a general improve
ment in local labor demand. A Triple-Difference (DDD) estimate that controls
flexibly for state-specific and gender-specific shocks confirms a significant relative
increase for women of 6.6 percentage points. I find no immediate drop in school
enrollment, suggesting that young women are adjusting at the intensive margin
(i.e., combining work and study) or entering the workforce from non-employment.
Employment (EPOP) also rises, albeit somewhat less precisely estimated. The re
sults complement recent evidence on post-Dobbs fertility, contraceptive behavior,
and educational choices (Dench et al., 2024; Guttmacher Institute, 2023; Gallen
and Lu, 2025; Kane, 2025), by showing that abortion bans are associated with a
rapid, measurable change in young women’s labor market attachment. Through
out, I emphasize that the estimates capture short-run effects in the first 18 months
after Dobbs and do not speak directly to longer-run adjustment dynamics.
3

2. Data and Empirical Strategy
I use the Basic Monthly CPS micro data, accessed via IPUMS CPS (Flood et
al., 2024), and restrict the main sample to individuals aged 18–24 observed from
January 2021 to December 2023. The treatment group consists of 13 states that
implemented immediate or trigger bans (e.g., TX, MO, AL). The control group
comprises 8 states that explicitly protected abortion rights (e.g., CA, NY). I exclude
states with ambiguous or delayed legal statuses to ensure a clean comparison. This
state classification aligns with the emerging empirical literature on the post-Dobbs
environment, which documents sharp discontinuities in fertility and access to
abortion services across these groups of states (e.g., Dench et al., 2024; Guttmacher
Institute, 2023).
The main outcome is an indicator for being in the labor force (LFP), defined
using the CPS labor force status. I also construct indicators for being enrolled in
school and for being employed (at work or with a job but not at work), which I use
in robustness checks. All regressions are weighted using CPS person weights, and
standard errors are clustered at the state level.
My preferred specification is a Triple-Difference (DDD) model that uses young
men as a within-state control group for young women. Let Yisgt denote the outcome
for individual i in state s, gender g, and month t. Define Treats as an indicator for
ban states and Postt as an indicator for months from July 2022 onward. The DDD
model is:
Yisgt = βDDD (Treats × Postt × Femaleg) + μst + ψsg + φtg + εisgt, (1)
where μst are state-by-month fixed effects, ψsg are state-by-gender fixed effects, and
φtg are month-by-gender fixed effects. This saturated set of fixed effects absorbs
all lower-order main effects and interactions of Treats, Postt, and Femaleg, so
that the triple interaction captures the differential post-Dobbs change in ban versus
protected states for women relative to men within the same state. The coefficient
βDDD is therefore identified from within-state, within-month differences between
4

young women and young men across the two sets of states.
For transparency and to facilitate graphical analysis, I also estimate simpler
Difference-in-Differences (DiD) models separately for young women and young
men:
Yist = α + βDiD (Treats × Postt) + γs + λt + εist, (2)
where Yist is the outcome for individual i in state s and month t, γs are state fixed
effects, and λt are month-by-year fixed effects. In this specification, the main
effects of Treats and Postt are absorbed by the fixed effects and are not separately
identified; the interaction Treats × Postt captures the average post-Dobbs change
in ban states relative to protected states for each gender. I use equation (2) to
report women-only and men-only DiD estimates and to construct an event-study
figure for women. The DDD model in equation (1) is the central specification
used to assess the robustness of the results to state-specific economic trends and
gender-specific shocks.
3. Results
Table 1 presents the main estimates. Column (1) reports the women-only DiD
result from equation (2): young women in ban states increased their LFP by 3.6
percentage points (p < 0.05) relative to young women in protected states. Column
(2) presents the analogous DiD for young men, showing a statistically significant
decline of 2.9 percentage points. This pattern is consistent with relatively weaker
local labor demand in ban states over the sample period. Consequently, the simple
DiD estimate for women may understate the underlying supply-side response if
women in ban states are increasing their attachment to the labor market despite
these conditions.
Column (3) reports the DDD specification in equation (1), which flexibly ab
sorbs state-by-month, state-by-gender, and month-by-gender fixed effects. The
coefficient on the triple interaction term is 6.6 percentage points (p < 0.05), con
firming that abortion bans are associated with a sizable increase in young women’s
labor supply relative to men in the same states and periods. Column (4) shows that
5

school enrollment for young women did not change significantly, consistent with
the idea that the short-run adjustment operates mainly through increased work
effort or entry from non-employment rather than immediate withdrawal from edu
cation. In additional results not shown in the table, I find that employment (EPOP)
for young women increases by about 3 percentage points, with a p-value of 0.062,
reinforcing the interpretation that abortion bans increase labor market attachment.
These findings are consistent with a broader pattern in the post-Dobbs literature.
Increases in unintended births in ban states (Dench et al., 2024), defensive shifts
toward permanent contraception (Gallen and Lu, 2025), and selective avoidance
of ban states in college application behavior (Kane, 2025) all point to heightened
uncertainty and risk around childbearing that can rationally induce stronger attach
ment to current earnings. At the same time, rising IPV risk and financial fragility
among women facing unwanted births (Miller et al., 2020; Dave and Durrance,
2025) suggest that such labor supply responses may be driven as much by eco
nomic necessity and weakened bargaining power as by forward-looking investment
considerations.
6

Table 1: Impact of abortion bans on young adults’ labor market outcomes
(1) (2) (3) (4)
Women (DiD) Men (DiD) DDD Women (DiD)
LFP LFP LFP Enrollment
Treat × Post 0.0363∗∗ -0.0294∗∗ -0.0008
(0.0163) (0.0128) (0.0158)
Treat × Post × Female 0.0662∗∗
(0.0259)
Observations 68,902 72,247 141,149 68,902
R-squared 0.013 0.010 0.015 0.024
State & Month FE Yes Yes Yes Yes
Interacted DDD FEs No No Yes No
Note: Regressions are weighted by CPS person weights. Standard errors clustered at the state level are reported in parentheses. Column (1) and (2) report women-only and men-only Difference-in-Differences (DiD) estimates with state and month-by-year fixed effects. Column (3) reports the Triple-Difference (DDD) estimate with state-by-month, state-by-gender, and month-by-gender fixed effects; all lower-order main effects and interactions are absorbed by these fixed effects. Column (4) reports the DiD-
 estimate for school enrollment among young women. ∗∗ p < 0.05. Source: Author’s calculations using CPS data.
Figure 1 plots the event-study coefficients for young women’s LFP from the DiD
model, using quarter-relative-to-Dobbs indicators and showing roughly parallel
pre-trends and a sustained increase in ban states relative to protected states after
the decision. An analogous event-study based on the DDD specification, reported
in the Appendix, shows no systematic pre-trend in the triple interaction coefficients
and a sharp post-Dobbs increase.
7

Figure 1: Event-study estimates: impact of abortion bans on young women’s labor force participa
tion
Note: Coefficients from an event-study regression of LFP on quarter-relative-to-Dobbs dummies
interacted with a ban-state indicator for young women, controlling for state and month-by-year
fixed effects. The omitted category is the quarter immediately preceding the decision. Ninety-five
percent confidence intervals are shown. Standard errors are clustered at the state level.
4. Conclusion
This paper documents that, in the first 18 months after Dobbs v. Jackson,
abortion bans are associated with an immediate increase in young women’s labor
market attachment. Using a Triple-Difference design that exploits variation across
states, time, and gender and saturates the model with state-by-month and gender
interacted fixed effects, I show that women aged 18–24 in ban states increased their
labor force participation by 6.6 percentage points relative to comparable men in the
same states and periods. Simpler DiD estimates comparing women across states,
together with a decline in men’s participation in ban states, point in the same
direction. While school enrollment did not immediately decline, employment
increased and labor force participation rose, raising important questions about the
longer-term implications for human capital accumulation and inequality in the
8

post-Dobbs era.
The results speak to a rapidly growing body of work documenting how abortion
bans reshape women’s economic lives along multiple margins. Increases in fertility
in total-ban states (Dench et al., 2024), changes in contraceptive and sterilization
choices (Gallen and Lu, 2025), re-sorting of high-achieving women and faculty
away from restrictive states (Kane, 2025; Startz and Lundberg, 2022), and higher
risks of financial distress and IPV (Miller et al., 2020; Dave and Durrance, 2025)
all suggest that Dobbs represents more than a health policy shock: it is a structural
change in the economic environment facing young women. The short-run labor
supply response documented here is likely only one step in a longer adjustment
process. Future research should examine whether this immediate increase in
labor market attachment persists and how it interacts with subsequent decisions
about schooling, family formation, and geographic mobility across the increasingly
divergent reproductive policy regimes of the United States.
References
Dave, D. M., & Durrance, C. P. (2025). Abortion Restrictions and Intimate Partner Violence in the
Dobbs Era. NBER Working Paper No. 33916.
Dench, D., Pineda-Torres, M., & Myers, C. K. (2024). The effects of post-Dobbs abortion bans on
fertility. Journal of Public Economics, 234, 104036.
Flood, S., King, M., Rodgers, R., Ruggles, S., & Warren, J. R. (2024). IPUMS CPS: Version 12.0.
IPUMS, Minneapolis, MN.
Gallen, T. S., & Lu, T. (2025). Post-Roe Planning: The Effect of Dobbs v. Jackson on Contraceptive
and Sterilization Choices. Becker Friedman Institute Working Paper No. 2025-106.
Goldin, C., & Katz, L. F. (2002). The Power of the Pill: Oral Contraceptives and Women’s Career
and Marriage Decisions. Journal of Political Economy, 110(4), 730–770.
Guttmacher Institute. (2023). Research on the Early Impact of Dobbs on Abortion, Births and
Contraception: What We Know So Far. Guttmacher Institute Report.
Kane, S. B. (2025). In the Wake of Dobbs: The Effect of State Abortion Bans on Women’s College
Choices. EdWorkingPaper No. 25-1126, Annenberg Institute at Brown University.
9

Miller, S., Wherry, L. R., & Foster, D. G. (2020). The Economic Consequences of Being Denied
an Abortion. NBER Working Paper No. 26662.
Myers, C. K. (2017). The Power of Abortion Policy: Reexamining the Effects of Young Women’s
Access to Reproductive Control. Journal of Political Economy, 125(6), 2178–2224.
Startz, D., & Lundberg, S. (2022). The end of Roe creates new challenges in higher education.
Brookings Institution, Brown Center Chalkboard, August 9, 2022.
10

Appendix A. Appendix: Additional Results and Robustness Checks
Figure A1: Triple-difference event-study estimates (women relative to men)
Note: This figure plots the coefficients on the triple interaction term from an event
study specification of the DDD model, where the treatment indicator for women in ban
states is interacted with month-relative-to-Dobbs dummies. The outcome is labor force
participation. The reference period is the month prior to the Dobbs decision (t = −1).
Error bars represent 95% confidence intervals based on standard errors clustered at the
state level. The absence of a systematic trend prior to t = 0 supports the validity of the
DDD design.
11

Table A1: Robustness checks for young women’s labor supply
Coefficient Std. Error P-value Observations
(Treat × Post)
A. Alternative outcomes
Employment rate (EPOP) 0.0297∗ (0.0150) 0.062 68,902
B. Sample restrictions
Short window (Jan 2021–Dec 2022) 0.0344∗∗ (0.0148) 0.031 46,453
Age 20–24 only 0.0224∗ (0.0129) 0.097 48,751
Non-students only 0.0204∗ (0.0107) 0.070 37,806
C. Alternative specification
With state-specific linear trends 0.0226 (0.0219) 0.314 68,902
Note: All regressions are DiD specifications for young women weighted by CPS person weights and include state and month-by-year fixed effects. Standard errors are clustered at the state level. Panel A reports results for employment (EPOP) instead of labor force participation. Panel B restricts the sample to a shorter time window, to women aged 20–24, and to non-students, respectively. Panel C adds state-specific linear time trends to the baseline DiD model. ∗∗ p < 0.05,∗ p < 0.10.
Table A2: Placebo triple-difference tests and older cohort
Coefficient Std. Error P-value
(Treat × Post × Female)
A. Placebo pre-period only
Fake Dobbs at July 2021 -0.0036 (0.0347) 0.918
B. Older cohort (ages 25–34)
True Dobbs timing -0.0164 (0.0096) 0.103
Note: Each row reports the coefficient on the triple interaction term from a Triple-Difference model analogous to equation (1), weighted by CPS person weights and with state-by-month, state-by-gender, and month-bygender fixed effects. Panel A restricts the sample to pre-Dobbs months and defines a placebo post period beginning in July 2021. Panel B estimates the DDD model for adults aged 25–34 using the true Dobbs timing. Standard errors are clustered at the state level.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:35.958Z
- **Text Length:** 19129 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
