# PDF Document: Goldsmith-Pinkham and Lyu - 2025 - Causal Inference in Financial Event Studies.pdf

**File Path:** Goldsmith-Pinkham and Lyu - 2025 - Causal Inference in Financial Event Studies.pdf

**Processed Date:** 2026-02-10T18:16:16.229Z

**File Size:** 1963.07 KB

**Total Pages:** 78

**Extracted Pages:** 78

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3184

**Title:** Causal Inference in Financial Event Studies

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Causal Inference in Financial Event Studies∗
Paul Goldsmith-Pinkham
Yale University & NBER
Tianshu Lyu
Yale University
November 20, 2025
Abstract
Financial event studies, ubiquitous in finance research, typically use linear factor mod
els with known factors to estimate abnormal returns and identify causal effects of infor
mation events. This paper demonstrates that when factor models are misspecified—an
almost certain reality—traditional event study estimators produce inconsistent estimates
of treatment effects. The bias is particularly severe during volatile periods, over long
horizons, and when event timing correlates with market conditions. We derive precise
conditions for identification and expressions for asymptotic bias. As an alternative, we
propose synthetic control methods that construct replicating portfolios from control secu
rities without imposing specific factor structures. Revisiting four empirical applications,
we show that some established findings may reflect model misspecification rather than
true treatment effects. While traditional methods remain reliable for short-horizon studies
with random event timing, our results suggest caution when interpreting long-horizon or
volatile-period event studies and highlight the importance of quasi-experimental designs
when available.
∗Contact: paul.goldsmith-pinkham@yale.edu We thank Nick Barberis, Stefano Giglio and Will Goetzmann for helpful discussions, and audiences at the NBER Summer Institute Forecasting & Empirical Methods session, SEA, Dallas Fed, Kellogg Finance department, and SMU Statistics department.
arXiv:2511.15123v1 [econ.EM] 19 Nov 2025

1 Introduction
Financial economists were practicing causal inference well before the credibility revolution (An
grist & Pischke, 2010). By examining how asset prices respond to information events—such
as merger announcements, earnings releases, or regulatory changes—financial event studies
compare the returns of treated assets to benchmark comparison asset returns. The approach
remains central: between 2010 and 2025, 305 articles in the Journal of Finance and the Review
of Financial Studies reference event-study methods (Figure 1).
Figure 1: Prevalence of financial event studies in finance journals: This figure plots the share of articles by year that mention the word “cumulative abnormal returns” OR “announcement returns” in the Journal of Finance or Review of Financial Studies. Source: https://paulgp.com/econlit-pipeline/search.html
While financial event studies target causal effects as their estimands, the suite of estima
tors used in financial event studies are antiquated relative to the many tools available. The
textbook approach, starting as early as Fama et al. (1969) and canonized in the Campbell
et al. (1997) textbook, relies on linear factor models with known factors to construct counter
factual returns, i.e. what a security’s return would have been absent the event. Researchers
typically estimate a security’s exposure to market factors during a pre-event window, then
use these estimated loadings to predict what returns during the event window. The difference
between actual and predicted returns constitutes the abnormal return.
This paper demonstrates that this standard approach faces a fundamental identification
challenge. We show analytically that when the factor model is misspecified—which is almost
certainly the case given the ongoing debates about the appropriate asset pricing model
1

abnormal return estimators are generally inconsistent estimators for causal effects. The prob
lem is particularly severe in three empirically relevant scenarios. First, when events occur
during periods of extreme market volatility, even small misspecification in factor loadings
gets amplified by large factor realizations, potentially generating economically significant bias.
Second, in long-horizon event studies that examine returns over months or years, misspecifi
cation bias accumulates over time, making the resulting estimates potentially more reflective
of model error than treatment effects. Third, when event timing coincides with particular
market conditions—for instance, if mergers cluster during market downturns—the standard
estimators conflate selection effects with treatment effects.
We provide precise conditions under which traditional event study methods identify causal
effects. Identification of the average treatment effect on the treated requires either correct
specification of the factor model (unlikely given decades of asset pricing research showing
the difficulty of this task), or random assignment of treatment across securities. When these
conditions fail, we derive expressions for the asymptotic bias that provide guidance on when
concerns should be most acute.
Our results stand in contrast to folk wisdom that the structure of the factor model does
not have significant impacts on the size of the estimated effects. For example, in footnote 5,
Shleifer (1986) states “The [index inclusion] results were not materially different when returns
were not corrected for market movements.” We show that this irrelevance is due to two key
features: (1) random timing of many events over time (in the Shleifer (1986) case, index
inclusions) and (2) very short-run estimates such that the treatment effect dominates any
omitted risk premium. If these two cases do not hold, this irrelevance will disappear.
We contrast three types of estimators that can be used for financial event studies, and
compare their properties: (1) classic abnormal return estimators, based on specified factors,
(2) difference-in-mean estimators, which construct control groups through decisions of the
econometrician, and (3) synthetic estimators (Abadie & Gardeazabal, 2003; Abadie et al.,
2010), which use historical prices from control assets to construct either a replicating portfolio
(synthetic control) or to construct a set of factors using PCA (Xu, 2017). The key insight is
that rather than imposing a specific factor structure ex ante, the synthetic methods construct
a portfolio of control securities that best match the pre-event return path of treated securities.
If such a replicating portfolio exists, it should provide valid counterfactual returns in the
post-event period without requiring correct specification of the underlying factor model.
Our theoretical results hinge on the assumption that the expected return for a cohort of
treated stocks follows an unknown time-invariant linear factor model. This assumption is not
innocuous, and likely not true for all time periods. But, it is also a weaker assumption than
the traditional abnormal return estimators. Any approach that uses a model to infer the
2

counterfactual outcomes for the treated stocks will require some kind of model stability as
sumption (without additional structure like Kelly et al. (2019)). We view it as valuable future
work to see if other more robust asset pricing models can be used to generate counterfactual
returns, such as Giglio et al. (2025) and Kelly et al. (2019).
One key benefit of focusing carefully on the estimand of interest is that we are able to
show that buy-and-hold abnormal return estimates are particularly challenging to estimate
because they require the matching portfolio to not just match on expected returns, but also on
volatility. If the control group’s returns have different variance, then the differing volatility
drag will lead to very different results. To make this concrete: imagine that there is no
treatment effect, but a diversified portfolio is used as a control group for a stock, both with
equal expected returns. The lower variance for the diversified portfolio will lead to a negative
treatment effect from a buy-and-hold perspective, despite no actual treatment effect. This
implies that doing buy-and-hold abnormal returns with an index can be seriously flawed.
We revisit four empirical settings that span the range of typical applications. First, we
reexamine the Acemoglu et al. (2016) study of political connections during the 2008 financial
crisis, where the Treasury Secretary announcement coincided with extreme market volatil
ity—daily returns exceeded 6% on multiple event days. The original estimates using simple
averaging suggest economically large effects of political connections. Even abnormal return
models using the Fama-French 3 factor model suggest economically meaningful effects. How
ever, the estimates disappear when using our proposed synthetic methods, suggesting that
model misspecification with a single event can create spurious results when events coincide
with volatile market conditions.
Next, we analyze S&P 500 index inclusions, and show that since the index inclusion events
appear random across time, the effect of short-run model misspecification is non-existent, echo
ing the folk wisdom above. However, we show that the substantial pre-announcement drift,
often pointed to as a source of possible index inclusion front-running, disappears once we prop
erly account for the unobserved factor exposures of included firms. This finding suggests that
what appears to be anticipation or momentum may actually reflect model misspecification.
Third, we examine the effect of acquistions in merger deals on acquiring firms with some
studies finding large negative abnormal returns over several years.(Loughran & Vijh, 1997;
Rau & Vermaelen, 1998) We demonstrate that these long-run patterns are highly sensitive
to model specification, consistent with our theoretical prediction that misspecification bias
accumulates over longer horizons.
Our last empirical result applies a version of LaLonde (1986) to our analysis by using
quasi-experimental variation to provide a benchmark for our model-based approaches. The
treatment and control groups for the baseline are found in close merger contests where multiple
3

firms bid for the same target. Following Malmendier et al. (2018), contest losers provide a
natural counterfactual for winners since they are ex ante similar firms competing for identical
targets. The results are not supportive of abnormal return models at all, but only weakly
support synthetic methods. These results suggest that for long-run analyses, it is far better
to construct counterfactuals based on quasi-experimental variation than using model-based
approaches.
These empirical findings have important implications for the interpretation of the vast
event study literature in finance. Many influential results—particularly those involving long
horizons, volatile periods, or systematic event timing—may reflect factor model misspecifi
cation rather than true treatment effects. However, we emphasize that our results do not
invalidate the entire enterprise. For short-horizon studies with plausibly random event tim
ing, traditional methods remain reliable and our empirical work confirms they produce similar
estimates to more sophisticated approaches. The key insight is recognizing when standard
methods are likely to fail and having appropriate alternatives available.
Our work connects several distinct literatures. Methodologically, we build on the economet
rics of event studies in finance (MacKinlay, 1997; Kothari & Warner, 2007) while incorporating
insights from the modern causal inference literature (Imbens & Rubin, 2015; Abadie & Cat
taneo, 2021). We also contribute to the older debate about long-run event studies (Mitchell
& Stafford, 2000; Barber & Lyon, 1997) by providing a formal framework for understanding
when and why these studies are problematic.
2 Estimands and estimators in financial event studies
This section formalizes the setup of financial events on stock market returns in the language
of potential outcomes. We begin by introducing the basic notation (Section 2.1), defining
potential returns and treatment indicators for each security over time. We then specify the
causal estimands of interest, clarifying what it means to identify a treatment effect in an event
study context. Finally, we discuss how these causal quantities relate to traditional event study
methods based on “abnormal returns” and factor model adjustments.
2.1 Setup and notation
We study the causal effects of corporate events on security returns using a potential outcomes
framework. Consider a panel of N securities indexed by i = 1, 2, . . . , N observed over T time
periods indexed by t = 1, 2, . . . , T .
4

2.1.1 Event Timing and Treatment Status
For each security i, let Ti denote the time when an event occurs:
Ti =



s if security i experiences the event at time s
∞ if security i never experiences the event
(1)
We denote the set of event times as S ⊆ {1, . . . , T } and the set of never-treated (control)
securities as C = {i : Ti = ∞}. Following standard practice in event studies, we assume events
are irreversible—once an event occurs (e.g., a merger announcement or earnings release), it
cannot be undone.
2.1.2 Potential Outcomes Framework
Now, we define the potential outcomes framework for our returns. Let Ri,t(s) be the potential
return for security i at time t if it has the event occur in period s, and Ri,t(∞) the potential
return in the absence of any event. Because a security cannot be both treated and untreated,
we only observe one of the potential returns for each (i, t):
Ri,t = Ri,t(∞) +
X
s∈S
(Yi,t(s) − Yi,t(∞))1(Ti = s). (2)
2.1.3 Treatment Effects
We postulate that financial event studies are focused on identifying the difference between
the realized returns for a treated firm (Rit(s)) versus the returns in the absence of the event.
We define the difference in returns due to the event in period s for firm i in period t as the
individual treatment or equivalently, the abnormal firm return:
Definition 1 (Individual treatment effect / abnormal firm return).
τi(s, t) = Ri,t(s)
| {z }
observed for treated firm
− Ri,t(∞)
| {z }
unobserved
counterfactual
. (3)
For a firm that has the event occur in period s, Rit(s) is observed, and hence is identified.
But, Rit(∞) is not. Indeed, in asset pricing, the challenge of modeling the exact return for an
individual asset is viewed as an near-impossible task, even with a structural model. Instead,
a large number of asset pricing papers focus on the challenge of estimating the average return
for firms given a set of characteristics and/or risk factors (E.g. Chamberlain & Rothschild,
1983; Connor, 1984; Fama & French, 1993; Ross, 2013; Kelly et al., 2019; Bryzgalova et al.,
5

2025).
This focus on expected returns makes causal inference and asset pricing models happy
bedfellows. The inability to known the exact counterfactual return is known as the funda
mental problem of causal inference and leads to a focus on other alternative estimators, often
constructing average counterfactual returns for a group of treated units.
A significant body of empirical work and legal scholarship focuses on identifying the effect
of events on single firms’ valuations, since these valuations are used in litigation to estimate
damages (Baker, Gelbach, et al., 2020). But our view is that in academic research studying
financial event studies, a much more natural estimand to target is the average treatment effect
on the treated (ATT), using many treated firms to estimate an overall average effect, rather
than the effect on a single firm. We view the estimated abnormal returns for single firm events
as case studies of a much more stable design that focuses on the average effect.
Definition 2 (Cohort-Period Average Treatment Effect on the Treated (ATT)). Let
the average treatment effect on returns in period t for firms treated in period s be
τ (s, t)AT T = E(τi(s, t) | Ti = s) = E(Ri,t(s) − Ri,t(∞) | Ti = s). (4)
This cohort-period ATT describes the effect of a treatment happening in period s during
period t for those firms who are experience the period s event. If these firms are special in
some way, then this may not be the same effect for other firms (for example, if these firms
are riskier, and the effect differs by risk profile).
2.1.4 Event-Time Analysis
These cohort-period ATTs can be combined in a number of ways. Most crucially for our
results, combining event cohorts to study effects relative to an event time will average across
different event timings. The average treatment effect κ periods after an event is:
θAT T
κ=
X
s∈S
ws · τ AT T (s, s + κ) (5)
where ws represents the weight on event cohort s. A natural choice is ws = Ns/ P
s′ Ns′ ,
where Ns is the number of securities with Ti = s.
Many empirical papers studying these announcements are interested in cumulating the ef
fects. The Cumulative Average Treatment Effect (CATT), analogous to cumulative abnormal
6

returns (CAR), from event time 0 to H is:
θCAT T
H=
H
X
κ=0
θAT T
κ (6)
In this paper, we focus on these linear transformations of the ATT because they are well
behaved econometrically. However, an alternative approach to cumulative arithmetric returns
is the buy-and-hold abnormal return, which we discuss briefly here to highlight its econometric
challenges.
2.1.5 Geometric Returns and Buy-and-Hold Abnormal Returns
Announcement effects are often cumulated using buy-and-hold returns, which correspond to
geometric returns. The usual approach for defining abnormal buy-and-holds returns in the
literature differences out the buy and hold return of a counterfactual portfolio or stock (Savor
& Lu, 2009; Barber & Lyon, 1997) from a stock’s buy-and-hold return. In our setting, this is
analogous to
H
Y
κ=0
(1 + Ri,s+κ(s)) −
H
Y
κ=0
(1 + Ri,s+κ(∞)). (7)
This object is challenge to analyze analytically, and has many challenging statistical properties
(Barber & Lyon, 1997; Mitchell & Stafford, 2000).
In our notation, this corresponds to the following geometric estimands. Let the cohort
horizon geometric ATT for cohort s at horizon H as
τ geo,AT T (s, H) = E(log(
H
Y
κ=0
(1 + Ri,s+κ(s)) − E(log(
H
Y
κ=0
(1 + Ri,s+κ(∞))))
=
H
X
κ=0
E(log(1 + Ri,s+κ(s))) − E(log(1 + Ri,s+κ(∞))).
As with the arithmetic ATT, this can be averaged over the event timings:1
θgeo,AT T
H=
X
s
wsτ geo,AT T (s, H)
Note that this estimand effectively studies the percentage difference in gross cumulative
returns, rather than level difference in gross cumulative returns. For researchers interested in
sign tests (e.g. positive or negative long-run returns), both objects work equally well.
1Note that in the case of the geometric cumulative return, we first cumulate over the holding period, and then average across periods, since the non-linear structure makes the two non-interchangeable.
7

We now present a result tying the arithmetic (abnormal return) and geometric (buy and
hold) ATT together.
Lemma 1. The following holds for τ geo,AT T (s, t) under all models of Rit(∞):
θgeo,AT T
H = θAT T
H−
X
s
ws
H
X
κ=0
E(Ri,s+κ(∞)τi(s, s + κ) + 1
2 τi(s, s + κ)2 | Ti = s) . (8)
If treatment effects and control return are independent across cohort s, such that we can
write μ = E(Ri,s+κ(∞)|Ti = s) for all κ and s, then this can be simplified to
θgeo,AT T
H = (1 − μ)θAT T
H−
H
X
κ=0
1
2 V ar(θAT T
κ )− 1
2 (θAT T
κ )2 (9)
This result shows that buy-and-hold returns incorporate both volatility drag and the
interaction between base returns and treatment effects, making them more complex to analyze
than arithmetic returns. An important implication of this is if the counterfactual return Rˆ
chosen for Rit(s) identifies E(Rit(∞)|Ti = s), it may be a bad counterfactual for buy-and-hold
returns because it does not match on volatility. For example, a portfolio with identical returns
to E(Rit(∞)|Ti = s) may have much lower variance (due to diversification). As a result, the
volatility drag from the treated observed units will bring down the geometric returns, even in
the absence of any true effect!
As a result of Lemma 1, we focus on estimating the arithmetic ATT, rather than approx
imating the buy-and-hold return.2 Geometric returns would require a counterfactual return
portfolio that matches on both level and variance, and since the variance of a portfolio does
not have the same theoretical guidance for a model as expected returns, finding this counter
factual portfolio is quite hard. It also suggests that papers that use buy-and-hold abnormal
returns may contaminate their results as a function of how many firms are included in the
counterfactual return portfolio due to diversification differences.
2.1.6 Factor Model Structure
We now operationalize our model for E(Rit(∞)|Ti = s, ), based on a long literature in asset
pricing (Chamberlain & Rothschild, 1983; Connor, 1984).
2The issues raised here are analogous to problems in difference-in-difference for log vs. level outcomes. If the parallel trends assumption holds for a level outcome, than it almost surely cannot equivalently hold for a log outcome, unless the treatment is randomly assigned. (Roth & Sant’Anna, 2023)
8

Assumption 1 (Linear Factor Model ). In the absence of the event, the average return
of the portfolio of assets exposed to the event in period s follows a linear factor model with
intercept αi, K time varying factors Ft and factor weights βi, such that
E (Rit(∞) | Ti = s) = αs + βsFt, (10)
where αs = E(αi|Ti = s), βs = E(βi|Ti = s).
Note that the linear factor assumption is quite strong. For example, it does not allow
for changing factor loadings (Barberis et al., 2005). It also does not allow for the market to
anticipate an event (rationally) in the future if the event does not eventually occur.3 However,
it nests generally almost all financial event study methods, such as using the market model,
CAPM, or Fama-French factors to construct the counterfactual return (Campbell et al., 1997).
It is also possible that this model could only hold for a short period of time, allowing for
varying loadings over a longer period of time (as in Kelly et al., 2019).
2.1.7 Identification Assumptions
Assumption 2 (Limited Anticipation). For some known δ ≥ 0,
Ri,t(s) = Ri,t(∞) for all t < s − δ (11)
Remark 1. Since we can write
E(Ri,t(Ti) | Ti = s, F t) = E(Ri,t(∞) | Ti = s, F t) + τ (t, s)AT T (12)
= αs + βsF t + τ (s, t)AT T , (13)
Assumption 2 implies that τ (s, t)AT T = 0 for all t < Ti − δ. This means that the event has
no impact on the returns of the treated group prior to δ periods before the event. Setting
δ > 0 allows for some pre-event information leakage, while δ = 0 assumes no anticipation.
Assumption 3 (Event Assignment). The probability that security i experiences an
event at time t is:
pt(Xi, F) = Pr(Ti = t | Xi, F) (14)
3This issue is considered in a series of papers in the finance literature, e.g. Prabhala (1997), that consider conditional events.
9

where Xi = (αi, βi) represents security characteristics and F = (F1, . . . , FT ) represents
all factor realizations.
Two important special cases are:
• Random assignment: pt(Xi, F) = pt(F) (event assignment independent of security
characteristics)
• Random timing: pt(Xi, F) = pt(Xi) (event timing independent of factor realizations)
These assumptions formalize when simple estimators will be unbiased and when more
sophisticated methods are needed.
This assumption implies that the treated group cannot have an impact from the announce
ment for a sufficient window prior to the date of the release. There is obvious evidence in
the finance literature of hidden information leaking out, with prices responding beforehand
(e.g. Schwert (1996)). Indeed, this is often pointed to evidence for the strong version of the
efficient markets hypothesis. Hence, limited anticipation will be necessary to set a benchmark
for when leakage has not yet occurred. This will allow the researcher to identify the periods
in which we can estimate the counterfactual returns. This is the assumption necessary to use
the pre-event estimation window commonly used in financial event studies (Campbell et al.,
1997; Kothari & Warner, 2007).
However, it is important to distinguish between selection into the treatment (e.g. {Rit(s)}s∈S
being correlated Ti) and anticipation of the treatment. The former is quite plausible, as we
see in our analysis of the S&P 500 index inclusion effect in Section 4.2 – firms that are growing
and having a large market cap are more likely to be selected into the S&P. The latter will
bias our estimates of the true treatment effect, and can be caused by market participants
anticipating the event.
2.2 Estimators
We now present four sets of estimators and characterize the conditions under which they
identify the ATT. In all cases, we assume returns are already adjusted for the risk-free rate.
2.2.1 The Abnormal Returns Approach
Consider first the canonical abnormal returns model used in finance research (Campbell et al.,
1997; Brown & Warner, 1985). The researcher begins by selecting a set of observable factors
Fto and estimates factor loadings (αˆi, βˆi) using ordinary least squares on data prior to Ti − δ:
Rit = αi + βiF o
t + εit, t < Ti − δ (15)
10

These estimates αˆi and βˆi minimize squared prediction errors for stock i’s returns using
the observed factors. The factors Fto may include no factors, a single factor (the market
return), or multiple factors (e.g., Fama-French factors).
Definition 3 (Abnormal Returns Estimator ). Define the predicted return for stock i at
time t as Rˆit = αˆi + βˆiFto. The abnormal return is:
ARit = Rit − Rˆit (16)
The cohort-period abnormal return estimator is:
τ AR(s, t) = E(ARi,t|Ti = s) = E(Ri,t|Ti = s) − E(Rˆit|Ti = s) (17)
This approach attempts to remove the component of returns attributable to systematic
factor exposure, leaving only the “abnormal” component. Under correct specification of the
factor structure (Fto = Ft for all relevant factors), this abnormal component should isolate the
treatment effect. However, when factors are omitted or mismeasured, the estimated loadings
βˆi may fail to capture the true exposures βi, leading to bias.
2.2.2 Alternative Approaches
We compare the abnormal returns approach to three alternatives estimation approaches.
Definition 4 (Difference-in-Means Estimator ). The difference-in-means estimator com
pares average returns of treated securities to a control group:
τˆcont(s, t) = E(Ri,t|Ti = s) − E(Ri,t|i ∈ C) (18)
θˆcont
κ=
X
s∈S
wsτˆcont(s, s + κ) (19)
When the control group consists of all securities weighted by market capitalization, this
estimator corresponds to the “market-adjusted-return model” of Campbell et al. (1997) and
Brown and Warner (1985). Alternatively, the control group might consist of matched firms
selected based on observable characteristics, as in Barber and Lyon (1997) and Loughran and
Vijh (1997).
Second, we consider a synthetic control estimator (Abadie & Cattaneo, 2021) that uses
the pre-event data to construct a synthetic control group:
Definition 5 (Synthetic Control Estimator ). Let Rs,t = E(Rit|Ti = s) denote the average
return of securities treated at time s. The synthetic control estimator constructs a weighted
11

portfolio of control securities to match the pre-event return path of the treated portfolio:
τˆsynth(s, t) = Rs,t −
X
j∈C
ωˆjRj,t (20)
θˆsynth
κ=
X
s∈S
wsτˆsynth(s, s + κ) (21)
where the weights ωˆj solve:
ωˆ = arg mωin
X
t<s−δ

Rs,t −
X
j∈C
ωj Rj,t


2
(22)
and are subject to a non-negativity constraint: ωj ≥ 0.
The synthetic control method originated in Abadie and Gardeazabal (2003) and Abadie
et al. (2010) and has expanded and grown as a method over the last decade. Synthetic control
directly constructs a counterfactual by matching the pre-event dynamics of treated securities
using a portfolio of controls. This synthetic control is then used as a counterfactual return
following the event.
The key distinction from abnormal returns is that synthetic control does not require
the researcher to specify or estimate the underlying factor structure. Instead, it searches
for portfolio weights that replicate the treated group’s returns in the pre-period, effectively
letting the data determine the appropriate factor exposures. If such a replicating portfolio
exists, it should continue to provide valid counterfactual returns in the post-period (absent
the treatment).
We could depart from the original synthetic control applications by allowing negative
weights. Traditionally, synthetic control methods restrict ωj ≥ 0 to ensure the counterfactual
represents a convex combination of control units. However, this restriction is unnecessarily
limiting in financial applications. Allowing negative weights permits short positions and signif
icantly expands the set of achievable factor loadings, making it more likely that a replicating
portfolio exists. This flexibility is natural in financial markets and consistent with standard
long-short portfolio construction. However, absent this restriction, we are not able to prove
our results on unbiasedness using results from Ferman (2021).
We focus on constructing a single synthetic control for the portfolio of treated securities
(Rs,t) rather than constructing separate synthetic controls for each individual security. This
choice reflects both practical and theoretical considerations. Empirically, individual stock
returns contain substantial idiosyncratic noise that would make firm-by-firm matching chal
lenging. Theoretically, our estimands target average treatment effects for groups of securities,
12

not individual effects, making portfolio-level analysis natural. This approach follows very nat
urally the approach advocated in Ben-Michael et al. (2022) for staggered synthetic control.
In practice, perfect pre-period fit may not be achievable. Extensions by Abadie and
L’hour (2021) and Ben-Michael et al. (2021, 2022) allow for approximate rather than exact
matching, trading off pre-period fit against overfitting concerns. However, most importantly
for our analysis in financial event studies, Ferman (2021) shows that if the data follows a
linear factor structure, then with sufficient pre-event time periods and control units, the
estimator is consistent. This is consistent with a wide-range of asset pricing work highlighting
the importance of having assets that span risk factors (Giglio & Xiu, 2021; Giglio et al.,
2025).There is also a close connection to the mimicking-portfolio approach (E.g. Huberman
et al., 1987).
We also consider a third estimator, following Xu (2017), which uses PCA regression with
cross-validation to estimate a factor structure with unknown factors:
Definition 6. The Gsynth approach assumes that non-treated stocks follow an interactive
fixed effects model:
Rit(∞) = αi + λ′
iFt + εit (23)
where Ft are r unobserved common factors and λi are unit-specific factor loadings.
The estimation proceeds in three steps:
Step 1: Initial Factor Estimation Using only control units, estimate factors via prin
cipal components:
(Fˆ , Λˆ ) = arg min
F,Λ
X
i∈C
T
X
t=1
(Rit − αi − λ′
iFt)2 (24)
subject to normalization constraints F′F/T = Ir and Λ′Λ diagonal.
Step 2: Cross-Validation for Model Selection Select the number of factors r via
cross-validation:
rˆ = arg min
r∈{1,...,rmax}
CV (r) (25)
where CV (r) is the cross-validated mean squared prediction error using pre-treatment periods
for the treatment group.
Step 3: Counterfactual Construction For each treated unit i with Ti = s:
1. Estimate unit-specific loadings using pre-treatment data:
λˆi = arg mλin
X
t<s−δ
(Rit − αi − λ′ ˆFt)2 (26)
13

2. Construct counterfactual for post-treatment periods:
RˆGSC
it (∞) = αˆi + λˆ′
i ˆFt (27)
The treatment effect estimate is:
τˆGS(s, t) = 1
Ns
X
i:Ti=s
Rit − RˆGS
it (∞) (28)
The Gsynth estimator more directly leans on the linear factor structure, but does not
require knowing the true factors, and uses the set of control firms to construct the set of
counterfactual returns.
We focus on these two alternative estimators, but other alternative methods, such as IPCA
Kelly et al. (2019) or the three-pass method in Giglio and Xiu (2021) may work as well or
better. We leave it to future work to consider what approaches may work best.
2.3 Theoretical Results
We now establish conditions under which these estimators identify the ATT. For this propo
sition, it is convenient to see how these estimators differ from the target single event-period
estimand:
τ AR(s, t) − τ AT T (s, t) = (αs − αˆs) + (βsFt − βˆsF o
t ) + εst (29)
τˆcont(s, t) − τ AT T (s, t) = (αs − α∞) + (βs − β∞)Ft + (εst − ε∞,t) (30)
τˆalt(s, t) − τ AT T (s, t) = (αs − αˆalt
s ) + (βs − βˆalt
s )Ft + εst (31)
where αs = E(αi|Ti = s), βs = E(βi|Ti = s) are the average intercept and factor loadings
for treated securities, α∞ and β∞ are corresponding quantities for the control group, αˆs and
βˆs are the estimated loadings from the abnormal returns approach, and αˆsalt and βˆsalt are the
implied loadings from either the synthetic control or gsynth estimator. εst = ns−1
P εit is the
average idiosyncratic noise for the i cohort, and ε∞,t = n−1
i∈C
P varepsilonit is the average
noise for the control group.
Proposition 1 (Single Event Finite Sample and Asymptotic Bias). Let Assump
tions 1, and 2 hold. Then:
14

1. Asymptotic properties. As ns, nc, Tpre → ∞:
τ AR(s, t) − τ AT T (s, t) −p→ (αs − α ̃s) + (βsFt − β ̃sF o
t ) (32)
τˆcont(s, t) − τ AT T (s, t) −p→ (αs − α∞) + (βs − β∞)Ft (33)
τˆsynth(s, t) − τ AT T (s, t) −p→ 0 (34)
where α ̃s and β ̃s are probability limits of the estimated parameters.
2. Under random assignment (pt(Xi, F) = pt(F)),as ns, nc → ∞, the difference-in
means estimator is consistent even with fixed Tpre:
τˆcont(s, t) − τ AT T (s, t) −p→ 0 (35)
3. Under correct specification, (Fto = Ft for all t), the abnormal returns estimator is
consistent as ns, Tpre → ∞:
τ AR(s, t) − τ AT T (s, t) −p→ 0 (36)
All proofs are in Section A.
The most complex part of this proof, proof of asymptotic unbiasedness of the synthetic
control estimator, follows directly from Ferman (2021), who show that the synthetic control
estimator is asymptotically unbiased under the assumption of an unknown linear factor model
and many control units. The results for Gsynth also follow directly from Xu (2017). The other
two results follow from the assumptions and the definition of the estimators.
Remark 2. Both the misspecified abnormal return estimator and the difference-in-means
estimator in a given time period are inconsistent. Both converge to a random variable
that is a linear combination of the two factors, but the linear combination varies depends
on the factor loadings (and factor correlation). These inconsistencies are similar to the
inconsistencies highlighted in Theorem 1 of Andrews (2005). In contrast, the synthetic
control estimator is consistent and converges to the true effect. If the abnormal return
estimator is correctly specified, then it is also consistent. If the treatment is randomly
assigned, then the difference-in-means estimator is also consistent, since βs = β∞ in the
limit. This implies that these estimators are highly susceptible to coincident shocks at
the same time, and the inference will be highly suspect (hence the need to cluster on
event-timings in many financial event studies).
Of course, intuitively, in many applications the factor loadings are often not too large, and
the underlying risk premia are, on average, typically small relative to τ AT T (s, t). For example,
15

the one-day index inclusion effect is estimated to be somewhere between 1-4%, depending on
the time period. By comparison, the market return is, on average, 0.05%, two orders of
magnitude smaller than the treatment effects.
However, there are many periods when the market return can be far larger, such as during
periods of market volatility. There is substantial variation in the size of these factors, with
an interquartile range of 1% and very large fat tails. Hence, the correlation of the factors
with the timing of the event is very important. This will be apparent in our first empirical
example of Acemoglu et al., 2016. As a result, this bias can be quite large. Formally, we can
write the following from Theorem 2.1:
Corollary 1. Fix αs, βs, αˆs, βˆs and Fto. Then, |τ AR(s, s) − τ AT T (s, s)| is increasing in
|Ft| for entries where βs is non-zero.
We next consider how these results change if there are multiple event periods.
Theorem 2.1 (Bias with multiple events). Let Assumption 1 and 2 hold.
1. If ns, nc, Tpre → ∞, then asymptotically, the synthetic control and gsynth estimators
are unbiased,
θˆalt
κ − θAT T
κ →p 0. (37)
where alt ∈ {synth, gs}.
2. If |S| > 0 and 1 > pt(Xi, F) > ε > 0, then if ns, nc, Tpre → ∞, the other two
estimators are biased and converge to a weighted combination of conditional expected
risk premia across the event periods:
θˆar
κ − θAT T
κ = E (αs − α ̃s) + (βsF s+κ − β ̃sF o
s+κ) | Ti ∈ S (38)
θˆcont
κ − θAT T
κ = E ((αs − α∞) + (βs − β∞)Ft | Ti ∈ S) (39)
3. If random assignment across firms holds, then for ns, nc → ∞,
θˆcont
κ − θAT T
κ →p 0. (40)
16

4. If random timing holds, for ns, Tpre → ∞,then
θˆar
κ − θAT T
κ = E (αs − α ̃s | Ti ∈ S) (41)
+ E (βi | Ti ∈ S) E (F t) − E β ̃i | Ti ∈ S E F o
s+κ (42)
and for ns, nc → ∞,
θˆcont
κ − θAT T
κ = E (αs − α∞ | Ti ∈ S) + E (βs − β∞ | Ti ∈ S) E (Ft) (43)
An implication of this is that the abnormal returns estimator is can be quite close to the
true treatment effect, even when the factor model is misspecified. Moreover, this bias could be
small even for a model that ignores factors, consistent with the simulation evidence in Brown
and Warner (1985) that the form of the abnormal return estimator has limited effects on the
estimates.4 In fact, a common phrase described in event studies is that the structure of the
model used in τ AR does not have significant impacts on the estimated effects. For example,
in footnote 5, Shleifer (1986) states “The [index inclusion] results were not materially different
when returns were not corrected for market movements. Similarly, combining the before and
after estimation periods did not make much difference.” Or in Edmans (2012) “I use the
standard short event-study window so that the calculation of abnormal returns is relatively
insensitive to the benchmark asset pricing model used.”
2.4 Increasing cumulative bias in long-run event studies
Researchers are often interested in the trends or cumulative impact of events on returns,
as measured by cumulative abnormal returns or buy-and-hold abnormal returns. This gets
mapped to different economic and behavioral theories about how the market processes in
formation (e.g. Daniel et al. (1998) is a theory to explain these effects from a behavioral
perspective; Kwon and Tang (2022) consider 90 day post-announcement effects relative to
announcement day effects).
Some papers have pointed to flaws in studying these types of long-run perspectives – for
example, Mitchell and Stafford (2000) highlight the flaws in the inference around long-run
abnormal return studies of firm activity. As we show in Lemma 1, the buy-and-hold abnormal
return has additional challenges caused by variance considerations in the counterfactual port
folio. We now use our results in Proposition 1 and theorem 2.1 to show that even estimating
arithmetic cumulative abnormal returns in the long-run amplifies the misspecification bias.
4The simulations in Brown and Warner (1985) are such that the event days are exactly randomly assigned across time: “Each time a security is selected, a hypothetical event day is generated. Events are selected with replacement, and are assumed to occur with equal probability on each trading day from July 2, 1962, through December 31, 1979.”
17

Following the analogy principle for the CATT, Theorem 2.1 tells us that the bias in for
the abnormal return and difference-in-mean estimators is intimately related to the cumulative
sum of the factor premium. Under random timing and many events, the bias for the CATT
at horizon H is HE(βi | Ti ∈ S)E(Ft). The factors have a positive mean (since the risk of
the factors leads to positive expected return), and thus the bias in the estimator will drift
proportional to the expected value of the factors during the time period, scaled by the relative
estimation error in E(βi | Ti ∈ S).
Consider estimating the long-run impact of a merger on stock market prices. Raghavendra
Rau and Vermaelen (1998) find a three-year long run effect of -4% for all mergers, while Savor
and Lu (2009) find a three-year long-run effect of -13.1% for stock-financed mergers and 1.6%
for cash financed mergers. These results are well-motivated by Shleifer and Vishny (2003),
but their magnitude may reflect bias due to the errors in βˆ:
(βs − βˆs)E(Ft) =
K
X
k=1
(βsk − βˆsk)E(Ftk). (44)
If K = 1, for example, and was equal to the market, then our expected excess return is
6%. If βsk − βˆsk was −0.1, then at the three year level, we might expect a bias of -1.8%.
This is of course an empirical question of which way the biases would go; is the constructed
portfolio of firms too heavily loaded on risk factors?
Note that these issues are not solved by using multiple event timings. This bias in factors
cannot average out to zero, and so the only source by which we can achieve zero bias is
through mean zero differences in the loadings.
It is also worth remarking how the results from Mitchell and Stafford (2000) can be seen
analytically in our statistical terms. While the misspecification term (βs − βˆs) PK0
κ=0 Fs+κ
creates bias, it also creates cross-correlation in errors for every event-timing.5
2.5 Key takeaways re: randomness
Key takeaways for practitioners are four-fold:
1. If treatment is randomly assigned across firms, then comparing returns to the average
of the market is as good as any other approach.
2. If treatment is randomly assigned across periods, and there are multiple event timings,
then the model used to estimate effects does not matter in the short-run.
5As they state: “[M]ajor corporate events cluster through time by industry. This leads to positive crosscorrelation of abnormal returns, making test statistics that assume independence severely overstated.”
18

3. If treatment is randomly assigned across periods, but the model used to estimate effects
is misspecified, then the estimates will be biased, even with many event timings.
4. These results are identical whether there is a single treated firm or many treated firms.
2.6 Individual estimates are noisy, but not necessarily biased
We briefly discuss the case of a single firm being treated. To analyze this case, we need to
allow for slightly more flexibility in our notation.
Assumption 4. Let Rit(∞) = αi + βiF t + εit, where εit is i.i.d. across firms, and i.n.i.d.
across time, and mean zero.
Remark 3. This assumption implies we can write Rit(Ti) = Rit(∞) + τi(s, t) = αi +
βiF t + τi(s, t) + εit.
Then, consider the case of a single firm estimated in each estimator:
τ AR
i (s, s) − τi(s, s) = (αs − αˆs) + (βsF s − βˆsF o
s) + εit. (45)
Statistically, there are now three objects with randomness to worry about: the estimated
parameters, the aggregate factors, and the idiosyncratic variance for the individual firm. Note
that with several treated units, this last term disappears, but with a single unit, we have
insurmountable noise. This is a common problem flagged in the event studies literature
looking at securities litatigation (Baker, Gelbach, et al., 2020).
However, consider an approach that estimates many individual treatment effects in this
manner (such as Kogan et al. (2017)). On, average, these estimates will be subject to the
same results outlined above, but each one is quite noisy. This is equivalent to problems
associated with estimating many treatment effects. One approach is to consider shrinkage
estimators. Another would be to pool the firms based on characteristics of interest, and
construct portfolios this way. This would remove ε.
3 Simulations
We highlight how the non-random timing and assignment, together with a misspecified factor
model, could affect the bias with different estimators of treatment effects, using a simple
simulation exercise. In the simulation, the returns follow a two-factor structure, with the
second factor omitted in the estimation of abnormal returns. We compare the expected bias,
root mean square error, and coverage with random vs. nonrandom assignment and timing.
19

3.1 Simulation Design with 2 Factors and Selection
We simulate a panel of stock returns with a linear factor structure:
rit = rf,t + βi,mkt(rmkt,t − rf,t) + βi,smbrsmb,t + εi,t, (46)
where the return for each stock equals to the risk-free rate, plus the exposure times risk
premium of a market factor and a size factor (small-minus-big), and a stock-level idiosyncratic
component.
We assume that both factor loadings follow independent normal distributions: βi,mkt, βi,smb ∼
N (1, 0.32). We further assume that the idiosyncratic component of each stock is drawn i.i.d.
from a Normal distribution: εi,t ∼ N (0, 0.12). We choose a standard deviation of around 0.1
so that the residual variance constitutes approximately half of the total variance.
We simulate returns for 500 firms, with pre-treatment period of 239 days, 1 event day, and
10 post-treatment periods. Roughly 10% of firms are treated, following one of two treatment
assignment processes, discussed below. Treated firms get a true effect of 3% on the treatment
day, and nothing afterwards. The factor returns and the risk-free rate are randomly sampled
from daily Fama-French returns from July 1926 to 2022 with block sampling to preserve the
correlation structure between factors.
Treatment assignment process We compare expected bias with different treatment as
signment selection and timing selection. For firm assignment, we either completely randomly
assign the treatment to 10% of firms, or to instead relax this assumption, we model that the
probability of a firm getting treated follows a logit function of the beta on the SMB factor
p(treated)i = exp(δβi,smb)
1 + exp(δβi,smb) , (47)
where δ = log(0.1)
E(βi,smb) < 0 to achieve an average probability of 10%. The lower the simulated
SMB factor loading of the firm, the more likely to be treated.
For treatment period selection, we similarly use two different assignment mechanisms. The
first is to randomly sample the 250 data periods, and always set the treatment period equal
to t = 240. This effectively makes the treatment period’s factor draw uncorrelated with the
treated firms’ factor loadings. The secon approach with timing selection works as follows.
First, we rank the SMB factor in 250 candidate treatment periods. We then use the rank of
SMB returns as inputs to the selection function.6 The probability of any one of the candidate
6Raw factors returns have positive and negative values with mean close to 0, which will make the logit function highly sensitive.
20

period being the treatment period is
p(selected)t = exp(δRank2t)
1 + exp(δRank2t) , (48)
where δ = log(1/250)
E(Rankt) . We then draw indicator variables for each candidate period from binomial
distributions with respective treatment probability in each period. If multiple periods are
drawn to be the event period, we use the one with the highest factor realization. Thus, if
a period has a high factor realization of the omitted factor, it is more likely to become the
treatment period.
3.2 Simulation Results with 2 Factors and Selection
In Table 1, we compare the performance of four different estimators across 50 simulations:
mean difference between treated and control firms, average abnormal returns using the market
factor (estimating the factor loading for each treated firm in the pre-period), average abnormal
returns using the both factors (estimating the factor loadings for each treated firm in the pre
period), and average treatment effects from the generalized synthetic control method (Gsynth).
Estimated bias is reported in percentage points. We also report the root mean square error
(RMSE) and coverage of 95% confidence intervals.
21

Table 1: Treatment Effect Bias and Coverage in Simulations: Two-Factor Structure This table presents the bias and coverage of different estimators of treatment effects in financial returns. We simulate 500 firms with 10% treated. The estimation period is 239 days and postevent period is 11 days. More details on the simulations is in Section 3.1. Panel A reports simulation results with no selections, Panel B with only assignment selection, Panel C with only timing selection, and Panel D with both.-
 We consider several estimators: difference in simple average, CAPM and 2-factor abnormal returns, and generalized synthetic methods. The expected biases and coverage are from 50 simulations.
Panel A: Random Assignment + Random Timing
All Periods Treated Periods Untreated Periods
Model E(Bias) MAD RMSE E(Bias) MAD Coverage E(Bias) MAD Coverage
Simple Means 0.00 0.04 0.58 0.01 0.17 1 0.00 0.04 0.03 CAPM -0.06 0.16 2.11 -0.07 0.43 1 -0.06 0.17 0.44 Correct Factor Structure -0.01 0.04 0.54 0.00 0.16 1 -0.01 0.04 0.04 Gsynth (PCA) 0.00 0.04 0.56 0.02 0.17 1 0.00 0.04 0.03
Panel B: Assignment Selection + Random Timing
All Periods Treated Periods Untreated Periods
Model E(Bias) MAD RMSE E(Bias) MAD Coverage E(Bias) MAD Coverage
Simple Means 0.02 0.05 0.71 0.04 0.18 1.00 0.02 0.05 0.11 CAPM -0.05 0.13 1.78 -0.04 0.35 0.98 -0.05 0.14 0.40 Correct Factor Structure -0.01 0.03 0.54 0.02 0.14 1.00 -0.01 0.04 0.04 Gsynth (PCA) 0.00 0.04 0.57 0.03 0.15 1.00 0.00 0.04 0.05
Panel C: Random Assignment + Timing Selection
All Periods Treated Periods Untreated Periods
Model E(Bias) MAD RMSE E(Bias) MAD Coverage E(Bias) MAD Coverage
Simple Means -0.01 0.05 0.63 0.00 0.21 1 -0.01 0.05 0.05 CAPM 0.25 0.27 3.49 2.71 2.71 1 0.00 0.16 0.46 Correct Factor Structure -0.02 0.04 0.54 0.00 0.12 1 -0.02 0.04 0.04 Gsynth (PCA) -0.01 0.04 0.57 0.01 0.13 1 -0.01 0.04 0.04
Panel D: Assignment Selection + Timing Selection
All Periods Treated Periods Untreated Periods
Model E(Bias) MAD RMSE E(Bias) MAD Coverage E(Bias) MAD Coverage
Simple Means -0.05 0.07 0.88 -0.52 0.52 1 -0.01 0.05 0.08 CAPM 0.21 0.23 2.92 2.26 2.26 1 0.00 0.13 0.40 Correct Factor Structure -0.02 0.04 0.52 0.01 0.12 1 -0.02 0.04 0.05 Gsynth (PCA) -0.01 0.04 0.56 -0.01 0.14 1 -0.01 0.04 0.04
First, in Panel A, we see that the average bias is small even with the wrong factor structure,
if the treatment is randomly assigned. Similarly, in Panel B, if we only have non-random
assignment selection, the expected bias is also insignificant on average. However, this masks
the variation across simulations - if a time period has a larger factor draw on the treatment
22

day, that leads to much larger bias.
Figure 2: Bias from CAPM Model on SMB Returns with Assignment Selection This figure plots the biases from a CAPM estimator on the treatment period over realizations of the second factor across 50 simulations. We simulate 500 firms with 10% of them getting treated. The estimation period is 239 days and post-event period is 11 days. More details on the simulations is in Section 3.1. Panel A reports simulation results with no selections, Panel B with only assignment selection, Panel C with only timin-
g selection, and Panel D with both. We consider several estimators: difference in simple average, CAPM and 2-factor abnormal returns, and generalized synthetic methods. The expected biases and coverage are from 50 simulations.
−0.04
−0.03
−0.02
−0.01
0.00
0.01
−0.04 −0.03 −0.02 −0.01 0.00 0.01 SMB
Bias (CAPM)
Scatterplot of SMB vs. CAPM Bias
In Panel C, we consider random assignment of treatment to units, but non-random event
timing. As in Panel A, the difference in means is unbiased thanks to the results in Theorem 2.1.
Since treatment is uncorrelated with factor loadings, there is no endogeneity and the simple
means estimator is an unbiased estimator of the treatment effect. However, with non-random
timing, the CAPM model is biased, because the abnormal return (as discussed in Section 2.2)
will be the average β for the omitted factor multiplied by the largest possible factor draw. In
contrast, the difference in means is unbiased because while both treated and untreated firms
are exposed to the high factor draw, they have identical factor exposures, which cancels out.
For the correctly specified model, the estimated model correctly specifies the counterfactual,
23

and so there is no bias. Finally, the Gsynth estimator is able to identify the correct underlying
factor structure, and has limited bias as well.
Once we have both types of selection in treatment in Panel D, we see that the simple
difference in means is now biased. However, it is still less biased in absolute value than
the misspecified CAPM model. This is because the gap in the treatment and control factor
loadings for the simple mean difference is still smaller than the level misspecification in the
factor loadings in the CAPM estimation. Again, the Gsynth approach does quite well, with
similar performance to the correctly specified factor model.
4 Applications
4.1 Empirical Example 1: Geithner as Treasury Secretary
We now turn to our first empirical example, examining the period when the announcement
of Timothy Geithner as Treasury Secretary was leaked, following the setup of Acemoglu et
al. (2016). This example highlights the results of Proposition 1 in a simultaneous treatment
setting. We demonstrate that the bias from an incorrect factor structure can be substantial
in this setting, and that synthetic control methods help alleviate this bias. We argue that
the bias arises from two sources: first, the event window coincides with turbulent market
conditions characterized by large daily factor realizations; second, the counterfactual returns
are constructed from control firms with substantially different factor exposures. We show
that synthetic methods, which greatly reduce these biases, also match the factor loadings of
treated firms for known factors such as size and value.
Empirical setup. We examine the announcement of Timothy Geithner as nominee for Trea
sury Secretary on November 21, 2008. Following Acemoglu et al. (2016), we estimate average
treatment effects over the 11-day window encompassing and following the announcement date,
from November 21, 2008 (day 0) through December 8, 2008 (day 10).7 For treated and con
trol bank returns, we use the data provided by the authors, who collected daily returns from
Datastream.8 For all trading days before and after the event, returns represent full trading
day returns during regular trading hours. For the event day, returns are calculated from 3:00
p.m. (when the news leaked) until market close at 4:00 p.m.
We consider two sets of control firms. First, we use the same set of financial firms listed
on the NYSE or NASDAQ that are not connected to Geithner, as in Acemoglu et al. (2016).
Second, we expand the control group to include all NYSE, AMEX, and NASDAQ (exchange
7November 24, 2008 corresponds to day 1 due to the weekend. 8We thank Amir Kermani for providing the replication code and data on his website.
24

codes 1–3) common stocks (share codes 10 or 11).
Table 2: ATT of Treasury Secretary Announcement This table presents average treatment effects after the announcement of Timothy Geithner as Treasury Secretary. Event day 0 is November 21, 2008 from 3pm (when the news leaked) to market closing, consistent with Acemoglu et al. (2016). The average treatment effect is estimated using post periods from trading day 0 to day 10. We consider two control samples: banks or financial services firms trading on the NYSE or Nasdaq (Panel A), and all NYSE, AMEX,-
 and NASDAQ common stocks (Panel B). We consider several estimators: difference in simple average, difference-in-differences, synthetic control, synthetic DinD, and generalized synthetic methods. Standard errors of simple average is from a two-sample t-test. Standard errors of DID, synthetic control, and synthetic DID are calculated using placebo inference following Arkhangelsky et al. (2021) with 100 repetitions. Standard errors of Gsynth is computed using parametric bootstrap with 1,000 samples.-
 Standard errors in parentheses. * p<0.10, ** p<0.05, *** p<0.01
Panel A: Bank Controls
(1) (2) (3) (4) (5) (6) (7) (8) Average DID Market CAPM FF3F SC SDID Gsynth
Schedule connections 0.026*** 0.027*** 0.024*** 0.016*** 0.014*** 0.016*** 0.018*** 0.012** (0.007) (0.005) (0.007) (0.007) (0.006) (0.005) (0.005) (0.006) Personal connections 0.029*** 0.030*** 0.027** 0.016 0.013 0.004 0.009** 0.008 (0.010) (0.006) (0.012) (0.011) (0.011) (0.003) (0.005) (0.007) New York connections 0.019*** 0.020*** 0.017*** 0.011*** 0.009*** 0.009*** 0.012*** 0.009** (0.005) (0.004) (0.004) (0.004) (0.004) (0.003) (0.003) (0.004)
Observations 5,995 129,165 129,165 129,165 129,165 129,165 129,165 129,625
Panel B: All Firm Controls
Average DID Market CAPM FF3F SC SDID Gsynth
Schedule connections 0.020** 0.020*** 0.024*** 0.016*** 0.014*** 0.004 0.009 0.001 (0.008) (0.007) (0.007) (0.007) (0.006) (0.007) (0.006) (0.008) Personal connections 0.020* 0.021*** 0.027** 0.016 0.013 -0.003 0.006 0.003 (0.010) (0.006) (0.012) (0.011) (0.011) (0.005) (0.005) (0.008) New York connections 0.011** 0.011*** 0.017*** 0.011*** 0.009*** 0.004 0.003 0.001 (0.005) (0.004) (0.004) (0.004) (0.004) (0.004) (0.003) (0.004)
Observations 45,045 966,420 966,420 966,420 966,420 966,420 966,420 916,388
Non-connected banks as controls. We first use public financial institutions without
connections to Geithner as control firms. Panel A of Table 2 reports the average treatment ef
fects over the 11-day post-event window. Column 1 presents the difference in average returns
between treated and control firms, implementing the counterfactual as a simple average of re
turns from non-connected firms—the same approach used in Table 2 of Acemoglu et al. (2016).
Column 2 reports difference-in-differences estimates. Columns 3–5 present traditional factor
model adjustments: the market model (Column 3), CAPM (Column 4), and Fama-French
25

three-factor model (Column 5). Columns 6–8 employ synthetic control methods: standard
synthetic control (Abadie et al., 2010), synthetic difference-in-differences (Arkhangelsky et al.,
2021), and generalized synthetic control (Gsynth) from Xu (2017). For all models requiring
pre-event estimation, we use days −256 to −31, slightly shorter than the −280 to −31 window
in the original paper to maintain a balanced panel. We report a graphical version of Table 2
in Figure 3.
Figure 3: Connections to Geithner and Returns after Treasury Secretary News. This figure plots the average treatment effects on the treated from Table 2 after the announcement of Timothy Geithner as Treasury Secretary. Event day 0 is November 21, 2008 from 3pm (when the news leaked) to market closing, consistent with Acemoglu et al., 2016. The average treatment effect is estimated using returns from trading day 0 to day 10. We consider two control samples: banks or financial services firms trading-
 on the NYSE or Nasdaq (Panel A), and all NYSE, AMEX, and NASDAQ common stocks (Panel B). We consider several estimators: difference in average, differencein-differences, synthetic control, synthetic DinD, and generalized synthetic methods. Standard errors of difference in average is from a two-sample t-test. Standard errors of DID, synthetic control, and synthetic DID are calculated using placebo inference following Arkhangelsky et al., 2021 with 100 repetitions. Standard errors of Gsynth is comp-
uted using parametric bootstrap with 1,000 samples.
Panel A: Bank Controls
Average
CAPM
FF3F
Gsynth
Market
SC
SDID
−0.01 0.00 0.01 0.02 0.03 0.04 0.05 Estimated Effect
Model
Connection Type
New York connections
Personal connections
Schedule connections
Panel B: Full CRSP Controls
Average
CAPM
FF3F
Gsynth
Market
SC
SDID
0.00 0.02 0.04 Estimated Effect
Model
Connection Type
New York connections
Personal connections
Schedule connections
The results reveal a clear pattern. Simple averaging and difference-in-differences (Columns
1–2) show that firms with schedule connections experience 2.6–2.7% higher cumulative re
turns, those with personal connections show 2.9–3.0% higher returns, and firms with New
York connections exhibit 1.9–2.0% higher returns. The market model adjustment (Column
3) produces minimal changes. However, risk-adjusted returns using CAPM and Fama-French
models (Columns 4–5) reduce these estimates by approximately 40–50%, suggesting that con
26

nected firms have higher market betas. The synthetic control methods (Columns 6–8) produce
even larger reductions, with standard synthetic control reducing schedule connection effects
by 38% and personal connection effects becoming statistically insignificant.9
All public firms as controls. We next expand the control group to include all common
shares traded on NYSE, AMEX, and NASDAQ, with results reported in Panel B of Table 2.
This expansion is motivated by the integration of equity markets: systematic factors should
be well-identified using the universe of traded stocks. Restricting controls to financial firms
alone may be suboptimal unless banking-specific factors exist that cannot be spanned by the
broader market.
The expanded control group dramatically changes the results from synthetic control meth
ods while leaving traditional methods largely unaffected. Simple averaging and difference
in-differences (Columns 1–2) continue to show significant effects of approximately 2% for all
connection types. The factor model adjustments (Columns 3–5) show a similar pattern to
Panel A, with the market model producing minimal changes while CAPM and Fama-French
adjustments reduce estimates by 30–50%.
Strikingly, the synthetic control methods now produce near-zero and statistically insignif
icant estimates. Standard synthetic control (Column 6) yields point estimates of 0.4% for
schedule connections and −0.3% for personal connections. Gsynth (Column 8) estimates are
particularly close to zero: 0.1% for schedule connections, 0.3% for personal connections, and
0.1% for New York connections—all statistically insignificant. This dramatic difference sug
gests that the broader control group allows synthetic methods to better match the factor
exposures of treated firms, effectively eliminating the estimated treatment effects. The con
trast between traditional factor adjustments (which still show significant effects) and synthetic
methods (which do not) highlights the importance of allowing flexible, data-driven matching
of factor exposures rather than imposing a specific factor structure.
4.1.1 Market Returns around Event
We now investigate the sources of bias in the original estimates. First, we examine the
distribution of market returns during the event window. Figure 4 displays the kernel density
of daily S&P 500 returns from 1962–2023, overlaid with the realized returns during the 11
day event window. The event period coincides with extraordinary market volatility, with
returns falling in the extreme tails of the historical distribution. The market surged 6.6% on
9Our results contrast with Acemoglu et al. (2016), who employ synthetic control methods as robustness checks. Their approach was necessarily ad hoc given the limited literature at the time on handling multiple treated units in synthetic control settings.
27

November 21 (day 0) and 6.5% on November 24 (day 1), while the largest decline of −8.4%
occurred on December 1 (day 5).
These extreme factor realizations have important implications for identification. As demon
strated in Proposition 1, when treatment occurs simultaneously for all units, abnormal return
estimators are particularly sensitive to factor model misspecification. The bias is proportional
to both the magnitude of factor realizations and the difference in factor loadings between
treated and control firms: (βs − βˆs)Ft. Large factor realizations during the event window
amplify any misspecification bias arising from imperfect matching of factor exposures.
This mechanism explains the substantial reduction in estimated treatment effects when
using synthetic control methods rather than simple averaging. Proposition 1 shows that both
synthetic control and gsynth estimators are asymptotically unbiased even with omitted factors,
as they construct control portfolios that match the pre-event factor structure of treated firms
without requiring explicit factor model specification. The extreme market conditions during
the Geithner announcement thus reveal the importance of proper counterfactual construction
in volatile periods.
4.1.2 Factor loadings of treated units match synthetic control factor loadings
We now provide direct evidence on the factor exposure differences between treated and control
firms. We estimate market betas using daily returns from day −280 to day −31 before the
event, running firm-level time-series regressions on the S&P 500 index return for CAPM betas
and on the Fama-French three factors for multifactor betas.10
Table 3 reports the weighted average betas for treated and control portfolios. Panel A
presents equal-weighted averages for treated firms and two control groups: financial institu
tions only and all public firms. The results reveal substantial factor exposure mismatches.
Treated firms have an average CAPM beta of 1.43, compared to 0.83 for financial controls—a
difference of 0.60. The Fama-French three-factor model confirms this pattern: treated firms
exhibit a market beta of 1.28 versus 0.66 for controls, with similar disparities in SMB (0.23
vs. 0.75) and HML (0.61 vs. 0.72) exposures.
These factor loading differences, combined with the extreme market realizations docu
mented in Section 4.1.1, generate substantial bias in simple difference estimators. During
the event window, the 0.60 difference in market beta translates to a bias of approximately
0.60 × 6.9% = 4.1% on November 21 alone. This mechanical bias explains much of the
estimated effect found using naive averaging methods.
We report the (weighted) average of betas of treated and control firms in Table 3. First, in
10Fama-French factor returns are obtained from Kenneth French’s data library: https://mba.tuck. dartmouth.edu/pages/faculty/ken.french/data_library.html.
28

Figure 4: S&P 500 Returns around Treasury Secretary Announcement This figure plots the daily returns of S&P 500 index around the announcement of Timothy Geithner as Treasury Secretary. Event day 0 is November 21, 2008 from 3pm (when the news leaked) to market closing, consistent with Acemoglu et al., 2016. The blue solid line plots the kernel density function of daily S&P 500 returns from 1962 to 2023, and the sienna dashed vertical lines are the realization of daily returns in the post periods f-
rom trading day 0 to day 10. We label the dates with the largest outliers. The most positive realization is on event days November 21 and 24.
Dec 1, 2008 Nov 21/24, 2008
0
20
40
60
Kdensity
-.2 -.1 0 .1 S&P 500 Daily Returns
S&P 500 Returns in Event Periods
Panel A, we first show the average CAPM and Fama-French three-factor betas of the treated
firms and equal-weighted averages of financial firm controls and all public firm controls. The
average CAPM beta of the treated firms is 1.43, much higher than 0.83 from the control
firms. Expanding to a three-factor model, we still see a higher market beta in treated firms.
Given these mismatches of treated and control betas, together with turmoil market returns,
as shown in Section 4.1.1, could lead to large biases in average treatment effects by comparing
treated versus control firms.
In Panel B, we compute the weighted average betas of control firms using synthetic control
weights, with both standard synthetic control and synthetic difference in differences. First,
we see that synthetic methods match the beta in the treated firms well. For example, the
synthetic control gives a weighted average beta of 1.33, much closer to the treated beta of 1.43
than the equal-weighted average. Fama-French three-factor betas of the treated firms are 1.28
on the market, 0.23 on SMB, and 0.61 on HML, and synthetic control weights give a market
beta of 1.15, SMB beta of 0.48, 0.75 ( closer than 0.66, 0.75, and 0.72 with simple average).
29

Table 3: Treated and Control Betas in Geithner as Treasury Secretary This table presents the average CAPM and Fama-French three-factor betas for the treated and control firms. We first estimate firm-level betas using daily stock returns from 280 to 30 days before the announcement of Timothy Geithner as Treasury secretary on Nov 21, 2008. We then average the betas within the treated firms and two control samples: banks or financial services firms trading on the NYSE or Nasdaq, and all NYSE, AMEX, -
and NASDAQ common stocks. In Panel A, we show the simple average of treated firms and two control firms, and in Panel B, we calculate weighted average beta using weights from various synthetic methods: synthetic control and synthetic DinD.
Panel A: Simple Averages
Treated Control Control (All CRSP)
CAPM Beta 1.427 0.825 0.832 FF3F Market Beta 1.275 0.659 0.857 FF3F Size Beta 0.233 0.748 0.553 FF3F Value Beta 0.607 0.720 0.144
Panel B: Weighted Averages with Synthetic Methods
Bank Controls All CRSP Controls SC SDID SC SDID
CAPM Beta 1.331 1.111 1.383 1.281 FF3F Market Beta 1.148 0.905 1.220 1.165 FF3F Size Beta 0.480 0.819 0.377 0.627 FF3F Value Beta 0.750 0.872 0.674 0.593
Second, if we extend the set of possible control firms from financial firms in Acemoglu et al.
(2016) to all public firms in CRSP, we obtain better matches across all synthetic methods. For
synthetic control specifically, controlled firms give an average beta of 1.38, closer to 1.43 in
the treated firm. There is also a significant improvement in matching the Fama-French three
factor betas, synthetic control betas are 1.22, 0.38, and 0.67 (compared to treated betas of
1.28, 0.23, and 0.61). Finally, standard synthetic control methods give slightly better weights
than synthetic difference-in-differences, who is more directly related to a mimicking portfolio
approach.
Overall, synthetic methods matches the beta of treated firms well, which results in a lower
bias in the average treatment effects.
4.2 Empirical Example 2: Index Inclusion
We next examine S&P 500 index inclusion announcements, analyzing both immediate an
nouncement returns and pre-announcement price dynamics to test our theoretical predictions
regarding identification in staggered event settings.
We first demonstrate that in staggered event settings, announcement-day bias is negligible
because factor returns on event days average close to zero, particularly when compared to the
30

large treatment effects of 3–4%. However, consistent with Greenwood and Sammon (2025),
we document substantial pre-announcement drift. Synthetic control methods that match on
pre-event returns nearly eliminate this drift. This pattern is consistent with selection on
unobserved factors: firms added to the index differ systematically from control firms along
dimensions not captured by observable factors, generating apparent pre-event "drift" that
actually reflects factor model misspecification.
Empirical setting. Following Greenwood and Sammon (2025), we obtain index inclusion
dates from Siblis Research and match tickers to CRSP PERMNOs using header information.
Siblis provides announcement dates for S&P 500 additions. For the period September 1976
through September 1989, when announcement dates are missing, we exploit the institutional
detail that index changes were announced after Wednesday market close and became effective
the following day, allowing us to infer announcement dates.11 We measure returns on the
announcement date when it falls on a trading day; otherwise, we use the most recent prior
trading day.
To assess whether event timing can be treated as random, we examine the distribution of
factor returns on announcement days. Appendix Figure D.1, Panel A shows that the distri
bution of daily market returns on S&P 500 index inclusion announcement days is virtually
indistinguishable from the distribution on non-announcement days. This pattern holds consis
tently across our entire sample period, from 1980–1989 through 2010–2020. The small-minus
big (SMB) factor exhibits similar distributional stability (Panel B). These results support
treating announcement timing as conditionally random with respect to factor realizations,
satisfying a key identification assumption for our short-horizon analysis.
Table 4 reports CAPM and Fama-French three-factor betas for firms added to the S&P 500
index, estimated using daily returns from days −250 to −100 relative to announcement.12 We
present results separately by decade from 1980 through 2020 to examine temporal variation
in the characteristics of included firms.
Across all decades, the average market beta of included firms is approximately one. When
treated firms have market betas near unity, the simple market-adjusted return (which implic
itly assumes β = 1) yields similar results to the more sophisticated CAPM adjustment that
estimates firm-specific betas. This convergence occurs because the bias term (1 − βi) × rm,t
approaches zero when βi ≈ 1, consistent with the theoretical predictions in Theorem 2.1.
The combination of two empirical regularities—random event timing with respect to fac
tor realizations and limited selection on factor loadings—suggests that short-horizon abnor
11During this period, S&P followed a predictable schedule of announcing changes after Wednesday close for Thursday implementation. 12We exclude the immediate pre-announcement period to avoid contamination from potential information leakage.
31

Table 4: Beta Distributions of Included Firms across Decades This table presents the average CAPM and Fama-French three-factor betas for firms included in S&P 500, compared with a random set of control firms of the same sample size. For each treated firm and inclusion date, we randomly pick a non-treat firm in CRSP sample with common share in NYSE, NASDAQ, or AMEX, which at least 250 trading days of returns before the announcement date. We then estimate firm-level betas using daily stock returns -
from 250 to 100 days before the announcement of inclusions into S&P 500 index. We provide the summary statistics for the distribution of betas of included firms, separately for each decade.
Treated Random Control Mean Std Mean Std
Panel A: 1980-1989
CAPM Beta 0.961 0.523 0.582 0.551 FF3F Mkt Beta 1.108 0.539 0.854 0.784 FF3F SMB Beta 0.558 0.604 0.815 1.044 FF3F HML Beta -0.148 0.987 0.021 1.188 Panel B: 1990-1999
CAPM Beta 1.025 0.660 0.651 0.754 FF3F Mkt Beta 1.171 0.660 0.873 0.911 FF3F SMB Beta 0.489 0.661 0.805 1.215 FF3F HML Beta -0.015 1.242 0.022 1.475 Panel B: 2000-2009
CAPM Beta 1.087 0.697 0.824 0.985 FF3F Mkt Beta 1.079 0.560 0.820 0.688 FF3F SMB Beta 0.271 0.674 0.667 0.929 FF3F HML Beta -0.002 1.227 0.075 1.482 Panel D: 2010-2020
CAPM Beta 1.060 0.388 0.973 0.997 FF3F Mkt Beta 1.026 0.343 0.872 0.614 FF3F SMB Beta 0.225 0.520 0.628 1.201 FF3F HML Beta -0.273 0.590 0.311 1.272
32

mal return estimates should exhibit minimal bias regardless of the specific factor model em
ployed. This prediction from Theorem 2.1 finds strong empirical support in Table 5, where
announcement-day treatment effects are remarkably stable across estimation methods. The
difference between simple market adjustment and sophisticated synthetic control methods
is less than 0.2 percentage points in most decades, confirming that model specification has
negligible impact on short-horizon estimates when the conditions of Theorem 2.1 are satisfied.
Table 5: Announcement-Day Treatment Effects of Index Inclusion This table presents average treatment effects on the announcement days of index inclusion, averaged across inclusions for each decade. We consider several estimators: difference in simple average, CAPM, Fama-French 3-factor, and gsynth. The estimation window of factor loadings are from -250 to -101 before the announcement dates.
Diff-in-Means Market CAPM FF3F Gsynth
1980-1989 3.27% 3.25% 3.15% 3.05% 3.06% 1990-1999 4.61% 4.62% 4.69% 4.71% 4.79% 2000-2009 3.42% 3.43% 3.33% 3.22% 3.41% 2010-2020 1.14% 0.94% 0.85% 0.85% 0.93%
4.2.1 Pre-inclusion Drift
While Theorem 2.1 predicts negligible bias in short-horizon studies, it also implies that long
horizon estimates may suffer from substantial bias unless factor exposures are correctly speci
fied. We now examine the "pre-announcement drift" documented by Greenwood and Sammon
(2025), analyzing it decade by decade as a manifestation of potential long-horizon bias.
Interpreting pre-announcement price movements requires careful consideration of Assump
tion 2, our limited anticipation assumption. This assumption is particularly tenuous in the
index inclusion setting for two reasons. First, market participants have incentives to antici
pate market index changes. Second, as Greenwood and Sammon (2025) document, inclusion
is partially predictable: firms with market capitalizations just below the S&P 500 cutoff face
substantially higher inclusion probabilities than other firms. This predictability complicates
the identification of treatment effects, as observed pre-announcement returns may reflect ei
ther genuine anticipation (violating Assumption 2) or selection on unobserved characteristics
that drive both inclusion probability and returns.
To disentangle these effects, we pursue a two-pronged empirical strategy. First, we imple
ment propensity score matching based on observable firm characteristics to account for selec
tion on observables. Second, we employ synthetic control methods that match on pre-event
returns, effectively controlling for unobserved factors that drive both selection and returns.
The difference between these two approaches helps identify whether pre-announcement drift
33

reflects anticipation or factor model misspecification.
Index inclusion predictability operates along two dimensions: the timing of additions
(when inclusions occur) and the cross-section of selections (which firms are added). While
ideally we would model both, we focus on cross-sectional predictability by estimating inclusion
propensities based on observable firm characteristics. Specifically, we estimate annual logistic
regressions:
1(Added)i,y,m = αy + βy · MktCapRanki,y,m−1 + εi,y (49)
where MktCapRanki,y,m−1 is firm i’s market capitalization rank at the end of month m − 1,
and inclusion occurs in month m of year y. Consistent with Greenwood and Sammon (2025),
we find increasing predictability over time, with recent decades showing stronger relationships
between lagged size and inclusion probability.
Using these propensity scores, we construct matched control groups via nearest-neighbor
matching, creating portfolios of "pseudo-included" firms with similar inclusion probabilities
but no actual inclusion. Under the assumption that selection between observationally equiv
alent firms is quasi-random, differences between included and pseudo-included firms should
primarily reflect the causal effect of inclusion rather than selection bias.
To address selection on unobservables, we additionally implement the generalized syn
thetic control method of Xu and Liu (2022). For each announcement date, we estimate
factor loadings using returns from days −250 to −101, deliberately excluding the immediate
pre-announcement period where anticipation effects may contaminate estimation. We then
construct synthetic control portfolios that match the pre-event return dynamics of included
firms, examining the period from day −100 to −15.
This dual approach yields three distinct counterfactuals for cumulative abnormal returns
(CARs): (i) simple market adjustment as in Greenwood and Sammon (2025) (we also do
CAPM and FF3F adjustments for completeness, but do not subtract α for reasons that will
be clear shortly) (ii) propensity score-matched pseudo-included firms that control for selection
on observables, and (iii) synthetic controls that account for selection on unobserved factors.
Comparing these counterfactuals from day −100 through the announcement date allows us to
decompose pre-announcement drift into components attributable to observable characteristics
versus unobserved factor exposures. If drift persists after propensity score matching but
disappears with synthetic controls, this would suggest that unobserved factors—rather than
anticipation based on observables—drive the pre-announcement returns.
First, we find the pre-announcement drift as estimated by either the propensity score
matched difference, or by the Gsynth approach drops significantly when compared to the
market adjusted method. The effectiveness of Gsynth is quite striking in this setting, and
suggests that longer-run cumulative effects can be substantially biased. What can explain the
34

Figure 5: Cumulative abnormal pre-addition returns This figure plots the average cumulative abnormal returns following index inclusion announcements in event time, averaged across inclusions for each decade. We use several definitions of abnormal returns with different counterfactual returns. Solid lines plot abnormal returns with S&P 500 market returns, dashed lines plot abnormal returns with a propensity-score-matched counterfactual firm on lagged market cap rank, and dotted lines plot abnormal-
 returns with synthetic portfolios from the generalized synthetic method (Xu & Liu, 2022). The returns are normalized to start at zero, 100-trading days before the announcement.
-.05
0
.05
.1
.15
.2
Average CAR
-100 -80 -60 -40 -20 0 20 Event Date
Market
CAPM
FF3F
PSM
Gsynth
Cumulative abnormal pre-addition returns
differences identified between these estimated methods? In Appendix Figure D.2, we show
that there is a substantial drift in our known factors across most decades. Considering the
positive loadings in Table 4, this suggests that the counterfactual return needs to sufficiently
account for any and all potential unobserved factors driving the expected returns to avoid
this bias highlighted in Theorem 2.1.
35

Figure 6: Per-Period and Cumulative ATT with factor models, gsynth, and synthetic methods
Panel A: Per-Period ATT Panel B: Cumulative ATT
Training
Out-of-sample
0
1
2
3
Return (p.p.)
-280 -260 -240 -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0 20 Event date
Treated (Pre: 0.13, Train: 0.15) Gsynth (Pre: 0.11, Train: 0.15, Alpha: 0.06) CAPM (Pre: 0.14, Train: 0.15, Alpha: 0.10) FF3F (Pre: 0.13, Train: 0.15, Alpha: 0.09) S&P500 (Pre: 0.03, Train: 0.04) SC (Pre: 0.13, Train: 0.16)
Training
Out-of-sample
-20
-10
0
10
20
Cumulative ATT (p.p.)
-280 -260 -240 -220 -200 -180 -160 -140 -120 -100 -80 -60 -40 -20 0 20 Event date
Gsynth Gsynth (no Alpha) CAPM CAPM (no Alpha) FF3F FF3F (no Alpha) SC S&P500
Capturing all potential unobserved factors is not easy, however. In Figure 6, Panel A, we
plot the average return in event time for the treated group, and then our five counterfactuals.
We report the average daily return for each group, and note a 0.13 p.p. daily return for the
included firms (prior to inclusion), an unusually high daily return. In contrast, the S&P500
has a daily return of only 0.03 p.p. during this period. This suggests that the included firms
are quite unusual. Recall that if our factor choice in a linear model sufficiently spans the risk
factors, we should estimate an alpha of zero, even in the presence of positive average returns.
Our counterfactual models do an excellent job of matching the average return in the training
and pre-periods. However, for the CAPM and FF3F, more than half of the average predicted
return comes from just the intercept, α. For gsynth, the estimated α is less than half, but
still 0.06 p.p. Strikingly, the synthetic control counterfactual, which only takes a positive
weighted average of control firms and does not include a constant, matches the pre-period
return closely.
How should we interpret the estimated alpha in this linear factor models? There is pre
sumably two components in an estimated factor model’s alpha, true alpha, and model error:
αˆ = α
|{z}
true α
+ βunobsE(F unobs
t |t ∈ estimation window)
| {z }
Misspecifaction
, (50)
where the model misspecification captures the return premium over this period that is not
included in our model. In this setting, we view true alpha as zero, especially 280 days prior
to the inclusion event. As a result, the positive alpha likely suggests model misspecification.
The implications of this misspecification depend on the stability of this misspecification term.
In Panel B of fig. 6, we see that the inclusion of alpha ensures that the various linear factor
models do as well the synthetic control method in removing almost all pre-inclusion drift.
This suggests that the trend beforehand is not due to front-running, but instead differential
36

return profiles for included stocks. However, failing to include alpha for the CAPM, FF3F
and gsynth fail to remove the pre-inclusion drift.
4.3 Empirical Example 3: Mergers and Acquisitions
4.3.1 Empirical Setting
We examine acquirer returns around merger announcements using deal data from SDC Plat
inum. Following Malmendier (2018) and Savor and Lu (2009), we implement several sample
restrictions to ensure clean identification. We require targets to be classified as “Public,”
“Private,” or “Subsidiary” and restrict to completed deals with all-cash or all-stock payment
structures, as mixed consideration complicates the interpretation of market-timing effects. To
ensure economic materiality, we require the target’s pre-announcement market value to exceed
5% of the acquirer’s market capitalization. We exclude repurchases, self-tenders, and minority
stake purchases by requiring deal types to be “Disclosed Dollar Value” or “Undisclosed Dollar
Value,” and mandating that acquirers hold less than 50% of the target six months before
announcement.
We match acquirers to CRSP using six-digit CUSIPs, restricting to U.S. common shares
(share codes 10 or 11) traded on NYSE, NASDAQ, or AMEX. Our event window spans days
−280 to +250 relative to announcement. For the 20% of deals announced on non-trading
days, we define t = 0 as the next trading day. Control firms comprise all CRSP-listed firms
without contemporaneous merger announcements that have complete returns data over the
event window. Our final sample contains 14,847 merger events across 6,625 unique dates,
providing substantial variation in event timing for identification.
4.3.2 Short-Term Announcement Returns
To assess whether event timing can be treated as random, we examine the distribution of fac
tor returns on announcement days. Appendix Figure D.1 shows that the distribution of daily
market returns on S&P 500 index inclusion announcement days is virtually indistinguishable
from the distribution on non-announcement days. The small-minus-big (SMB) factor exhibits
similar distributional stability (unreported) These results support treating announcement tim
ing as conditionally random with respect to factor realizations, satisfying a key identification
assumption for our short-horizon analysis.
Table E.1 reports CAPM and Fama-French three-factor betas for firms with merger an
nouncements, estimated using daily returns from days −250 to −100 relative to announce
ment.13 We also examine how the betas change following the announcement as well, and
13We exclude the immediate pre-announcement period to avoid contamination from potential information leakage.
37

show that there are statistically significant changes after announcement, but they are small
economically.
We first examine three-day announcement returns [−1, +1] to test whether short-horizon
estimates are robust to model specification, as predicted by Theorem 2.1. We compare two
approaches: market-adjusted returns using the CRSP value-weighted index (including distri
butions) following Malmendier (2018), and gsynth estimates using the generalized synthetic
control method of Xu (2017).
For the synthetic control approach, we estimate a separate model for each of the 6,625 event
dates, treating all firms announcing mergers on that date (typically one or two firms) as the
treatment group. We construct factor loadings using returns from days −280 to −31, excluding
the immediate pre-announcement period to avoid contamination. Control firms consist of all
CRSP securities without merger announcements that satisfy our data requirements.
Table 6 reports cumulative abnormal returns by target type and payment method. Con
sistent with our theoretical predictions, the difference between market-adjusted and synthetic
control estimates is economically negligible—less than 10 basis points in most specifications.
This robustness to model choice confirms that short-horizon merger announcement effects are
identified regardless of the specific factor adjustment employed.
Table 6: Average three day cumulative p.p.
Full sample Public targets Private targets Other targets Cash merger Stock merger
Market mean 0.8 -1.2 1.3 1.6 1.1 0.4
Gsynth mean 0.7 -1.3 1.0 1.5 1.0 0.2
Count 14,847 3,297 7,030 4,520 9,261 5,592
In Figure 7, we plot the daily returns for the treated firms and the various control returns.
Similar to the preannoucnment drift for the S&P index inclusion, the treated firm has signif
icant daily returns prior in the year prior to the announcement, with 0.14 p.p. daily average
returns (contrast with the market having 0.05 p.p. daily average returns). Again, the CAPM
and FF3F models have significant alpha (0.08 p.p.), while gsynth has remarkably small alpha
(0.02 p.p.). However, both gsynth and synthetic control do a poorer job matching the overall
pre-period return, with 0.12 p.p. and 0.19p.p. returns respectively, relative to 0.14 for the
treated group.
The path of the daily return line for the treated group spikes significantly on the event
date, and then declines precipitously to a new steady state. It is worth remarking that within
30 days the event announcement, the treated firms’ returns appear to line up almost exactly
with the market returns. This is suggestive that there is a structural shift in the underlying
38

Figure 7: Per-Period Treated and Counterfactual Returns by event date. Event date= [−120, 250]
Training
Out-of-sample
0
.2
.4
.6
.8
Return (p.p.)
-280 -240 -200 -160 -120 -80 -40 0 40 80 120 160 200 240 Event date
Treated (Pre: 0.14, Train: 0.13)
Gsynth (Pre: 0.12, Train: 0.13, Alpha: 0.02)
CAPM (Pre: 0.13, Train: 0.13, Alpha: 0.08)
FF3F (Pre: 0.13, Train: 0.13, Alpha: 0.08) Market (Pre: 0.05, Train: 0.05) SC (Pre: 0.19, Train: 0.18)
return performance to these acquiring firms, perhaps due to change in true alpha, or perhaps
due to factor loadings.
In Figure 8, we see the long-run implications of these alphas in in that the difference
counterfactual predictions have wildly different long-run cumulative ATT a year after the
event. In the literature, the presence of a negative post-acquisition event is often pointed to
as evidence in favor of Shleifer and Vishny (2003), but the modeling assumptions to make
these types of assessments seem quite strong. This type of analysis also has implications for
papers studying over- and under-reaction in the stock market.
What can we do to deal with this specification error? A crucial alternative is to examine
the effect in a setting where treatment is as-if randomly assigned.
4.4 Empirical Example 4: Close Merger Contests as a Quasi-Experimental
Benchmark
Our previous empirical examples rely on model-based identification strategies that require
correct specification of the factor structure. To validate these approaches, we now examine
a setting with quasi-experimental variation: close merger contests where assignment to treat
ment (winning the contest) is plausibly random conditional on observables. Malmendier et al.
(2018) show that in protracted bidding contests, winners and losers are ex ante similar firms
competing for the same target, making losers natural counterfactuals for winners.
This setting provides a unique opportunity to assess the performance of different estima
39

Figure 8: Cumulative ATT by event date. Event date= [−120, 250]
Training
Out-of-sample
-30
-20
-10
0
10
20
Cumulative ATT (p.p.)
-120 -80 -40 0 40 80 120 160 200 240 Event date
Gsynth Gsynth (Post) CAPM CAPM (no Alpha) FF3F FF3F (no Alpha) SC Market
tors. Since losing bidders offer a design-based counterfactual, we can compare our model
based estimates (market adjustment, factor models, synthetic controls) against this quasi
experimental benchmark. Agreement between model-based and design-based estimates would
validate our econometric approaches; divergence would suggest specification problems in the
model-based methods.
4.4.1 Empirical Setting
Following Malmendier et al. (2018), we analyze close merger contests defined as those with
above-median duration.14 Protracted contests involving multiple rounds of bids and coun
terbids suggest that participants had similar ex ante winning probabilities, supporting the
identifying assumption that contest outcomes are quasi-random.
We construct event-time at the monthly frequency, with t = 0 marking the month-end
before the initial bid announcement. The pre-contest period spans months t = −35 to t = 0.
The contest period (t = 1) encompasses all months from initial bid through completion,
averaging 361 days in our sample. The post-merger period runs from t = 2 to t = 36. This
structure accommodates contests of varying duration while maintaining a consistent event
time framework.
We match contest participants to CRSP monthly returns, filling missing observations
with market returns following Malmendier et al. (2018). For synthetic control estimation, we
14We thank the authors for providing data on winning and losing bidders, announcement and completion dates, and contest duration.
40

augment the sample with all CRSP common shares (share codes 10 or 11) traded on NYSE,
NASDAQ, or AMEX that have complete returns over the event window. This expanded
control group allows the synthetic control algorithm to construct appropriate counterfactuals
even when losing bidders may themselves be poor matches due to contest-specific shocks
affecting all participants.
To check how well the as-if random counterfactual losing bidders match to winners, In
Table 7, we compare the risk exposures on different factors of winners and losers. We see that
these two groups are relatively similar, although the losers have slightly higher HML beta
than winners.
Table 7: Beta Distributions of Winners and Losers in Close Merger Contests This table presents the average CAPM and Fama-French three-factor betas for winner and losers in close contest mergers. We estimate firm-level betas using daily stock returns using event month -35 to -1 before the start of the contest. We provide the mean and median of CAPM market beta and betas in FamaFrench three-factor model. We test if the betas of treated and control firms are statistically different using a two-sided -
t-test with Welch (1947) approximation.
Winner Loser Mean t-test Mean Median Mean Median Loser - Winner
CAPM Beta 1.148 0.922 1.114 0.968 -0.034 FF3F Mkt Beta 1.157 0.945 1.172 1.010 0.015 FF3F SMB Beta 0.369 0.291 0.232 0.168 -0.138 FF3F HML Beta -0.055 -0.171 0.313 0.393 0.368*
In Figure 9, we plot the cumulative ATTs for the winners relative to our various controls.
Our benchmark is the “Loser” control, in solid blue. We see that in the pre-period, there is
reasonable balance between the two groups, and then a small but significant decline following
the announcement, suggesting a negative effect. Notably, this counterfactual has the smallest
and least trending of the different counterfactuals. The only alternative model-based portfolio
that is meaningfully close is the Gsynth control.
41

Figure 9: Cumulative ATT by event date. Event month= [−35, 36]
-.6
-.4
-.2
0
.2
.4
Cumulative ATT
-40 -20 0 20 40 Event Date
Loser Market CAPM (alpha) CAPM (no alpha) FF3F (alpha) FF3F (noalpha) Gsynth SDID SC Augsynth
CATTs: Contest Winners vs. Controls
It is worth noting that the synthetic control methods have much larger declines during
the merger battle, and afterwards as well. The abnormal return models fit well in the pre
period, but then predict significant and continuing declines in cumulative returns. Overall,
this evidence suggests that most of the models (especially abnormal return) do poorly in the
longer run, although gsynth is the exception.
5 Conclusion
This paper brings modern causal inference techniques to financial event studies, highlighting
important limitations in standard approaches while providing constructive solutions. We
demonstrate that traditional abnormal return estimators face inconsistency problems due to
factor model misspecification – a concern that becomes particularly severe in long-horizon
analyses where small daily biases accumulate substantially over time.
While staggered event timing helps mitigate these issues in short-horizon studies by aver
aging out factor realizations, this solution proves inadequate for long-horizon analyses. The
key insight is that misspecification bias compounds over longer horizons, regardless of how
events are distributed across time.
Synthetic control methods offer a promising alternative by directly modeling counterfac
tual security paths without requiring correct specification of the underlying factor structure.
Our empirical applications to political connections during market turbulence and S&P 500
42

index inclusions convincingly demonstrate the practical value of these methods.
Our findings suggest that many influential results based on long-horizon event studies
may reflect factor model misspecification rather than genuine causal effects. We recommend
that researchers employ synthetic control methods as a robust complement to traditional
approaches, particularly when studying extended price responses or when events occur during
periods of high market volatility.
43

References
Abadie, A., & Cattaneo, M. D. (2021). Introduction to the special section on synthetic control
methods.
Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative
case studies: Estimating the effect of california’s tobacco control program. Journal of
the American statistical Association, 105 (490), 493–505.
Abadie, A., & Gardeazabal, J. (2003). The economic costs of conflict: A case study of the
basque country. American economic review, 93 (1), 113–132.
Abadie, A., & L’hour, J. (2021). A penalized synthetic control estimator for disaggregated
data. Journal of the American Statistical Association, 116 (536), 1817–1834.
Acemoglu, D., Johnson, S., Kermani, A., Kwak, J., & Mitton, T. (2016). The value of con
nections in turbulent times: Evidence from the united states. Journal of Financial
Economics, 121 (2), 368–391.
Andrews, D. W. (2005). Cross-section regression with common shocks. Econometrica, 73 (5),
1551–1585.
Angrist, J. D., & Pischke, J.-S. (2010). The credibility revolution in empirical economics:
How better research design is taking the con out of econometrics. Journal of economic
perspectives, 24 (2), 3–30.
Arkhangelsky, D., Athey, S., Hirshberg, D. A., Imbens, G. W., & Wager, S. (2021). Synthetic
difference-in-differences. American Economic Review, 111 (12), 4088–4118.
Baker, A., Gelbach, J. B., et al. (2020). Machine learning and predicted returns for event
studies in securities litigation. Journal of Law, Finance, and Accounting, 5 (2), 231
272.
Barber, B. M., & Lyon, J. D. (1997). Detecting long-run abnormal stock returns: The empirical
power and specification of test statistics. Journal of financial economics, 43 (3), 341
372.
Barberis, N., Shleifer, A., & Wurgler, J. (2005). Comovement. Journal of financial economics,
75 (2), 283–317.
Ben-Michael, E., Feller, A., & Rothstein, J. (2021). The augmented synthetic control method.
Journal of the American Statistical Association, 116 (536), 1789–1803.
Ben-Michael, E., Feller, A., & Rothstein, J. (2022). Synthetic controls with staggered adoption.
Journal of the Royal Statistical Society Series B: Statistical Methodology, 84 (2), 351
381.
Brown, S. J., & Warner, J. B. (1985). Using daily stock returns: The case of event studies.
Journal of Financial Economics, 14 (1), 3–31. https://doi.org/https://doi.org/10.
1016/0304-405X(85)90042-X
44

Bryzgalova, S., Pelger, M., & Zhu, J. (2025). Forest through the trees: Building cross-sections
of stock returns. The Journal of Finance, 80 (5), 2447–2506.
Campbell, J., Lo, A., & MacKinlay, A. (1997). The econometrics of financial markets. Prince
ton University Press. https://books.google.com/books?id=lkeKhnqUHx8C
Chamberlain, G., & Rothschild, M. (1983). Arbitrage, factor structure and mean-variance
analysis on large asset markets. Econometrica, 51 (5).
Connor, G. (1984). A unified beta pricing theory. Journal of Economic Theory, 34 (1), 13–31.
https://doi.org/https://doi.org/10.1016/0022-0531(84)90159-5
Daniel, K., Hirshleifer, D., & Subrahmanyam, A. (1998). Investor psychology and security
market under-and overreactions. the Journal of Finance, 53 (6), 1839–1885.
Edmans, A. (2012). The link between job satisfaction and firm value, with implications for
corporate social responsibility. Academy of Management Perspectives, 26 (4), 1–19.
Fama, E. F., & French, K. R. (1993). Common risk factors in the returns on stocks and bonds.
Journal of financial economics, 33 (1), 3–56.
Fama, E. F., Fisher, L., Jensen, M. C., & Roll, R. (1969). The adjustment of stock prices to
new information. International economic review, 10 (1), 1–21.
Ferman, B. (2021). On the properties of the synthetic control estimator with many periods
and many controls. Journal of the American Statistical Association, 116 (536), 1764
1772.
Giglio, S., & Xiu, D. (2021). Asset pricing with omitted factors. Journal of Political Economy,
129 (7), 1947–1990.
Giglio, S., Xiu, D., & Zhang, D. (2025). Test assets and weak factors. The Journal of Finance,
80 (1), 259–319.
Greenwood, R., & Sammon, M. (2025). The disappearing index effect. The Journal of Finance,
80 (2), 657–698. https://doi.org/https://doi.org/10.1111/jofi.13410
Huberman, G., Kandel, S., & Stambaugh, R. F. (1987). Mimicking portfolios and exact arbi
trage pricing. The Journal of Finance, 42 (1), 1–9.
Imbens, G. W., & Rubin, D. B. (2015). Causal inference in statistics, social, and biomedical
sciences. Cambridge university press.
Kelly, B. T., Pruitt, S., & Su, Y. (2019). Characteristics are covariances: A unified model of
risk and return. Journal of Financial Economics, 134 (3), 501–524.
Kogan, L., Papanikolaou, D., Seru, A., & Stoffman, N. (2017). Technological innovation, re
source allocation, and growth. The Quarterly Journal of Economics, 132 (2), 665–712.
Kothari, S. P., & Warner, J. B. (2007). Econometrics of event studies. In Handbook of empirical
corporate finance (pp. 3–36). Elsevier.
Kwon, S. Y., & Tang, J. (2022). Extreme events and overreaction to news.
45

LaLonde, R. J. (1986). Evaluating the econometric evaluations of training programs with
experimental data. The American economic review, 604–620.
Loughran, T., & Vijh, A. M. (1997). Do long-term shareholders benefit from corporate acqui
sitions? The Journal of finance, 52 (5), 1765–1790.
MacKinlay, A. C. (1997). Event studies in economics and finance. Journal of economic liter
ature, 35 (1), 13–39.
Malmendier, U. (2018). Behavioral corporate finance. In Handbook of behavioral economics:
Applications and foundations 1 (pp. 277–379, Vol. 1). Elsevier.
Malmendier, U., Moretti, E., & Peters, F. S. (2018). Winning by losing: Evidence on the
long-run effects of mergers. The Review of Financial Studies, 31 (8), 3212–3264.
Mitchell, M. L., & Stafford, E. (2000). Managerial decisions and long-term stock price perfor
mance. The Journal of Business, 73 (3), 287–329.
Prabhala, N. R. (1997). Conditional methods in event studies and an equilibrium justification
for standard event-study procedures. The Review of Financial Studies, 10 (1), 1–38.
Raghavendra Rau, P., & Vermaelen, T. (1998). Glamour, value and the post-acquisition per
formance of acquiring firms. Journal of Financial Economics, 49 (2), 223–253. https:
//doi.org/https://doi.org/10.1016/S0304-405X(98)00023-3
Rau, P. R., & Vermaelen, T. (1998). Glamour, value and the post-acquisition performance of
acquiring firms. Journal of financial economics, 49 (2), 223–253.
Ross, S. A. (2013). The arbitrage theory of capital asset pricing. In Handbook of the funda
mentals of financial decision making: Part i (pp. 11–30). World Scientific.
Roth, J., & Sant’Anna, P. H. (2023). When is parallel trends sensitive to functional form?
Econometrica, 91 (2), 737–747.
Savor, P. G., & Lu, Q. (2009). Do stock mergers create value for acquirers? The journal of
finance, 64 (3), 1061–1097.
Schwert, G. W. (1996). Markup pricing in mergers and acquisitions. Journal of Financial
economics, 41 (2), 153–192.
Shleifer, A. (1986). Do demand curves for stocks slope down? The Journal of Finance, 41 (3),
579–590.
Shleifer, A., & Vishny, R. W. (2003). Stock market driven acquisitions. Journal of financial
Economics, 70 (3), 295–311.
Welch, B. L. (1947). The generalization of ‘student’s’problem when several different population
varlances are involved. Biometrika, 34 (1-2), 28–35.
Xu, Y. (2017). Generalized synthetic control method: Causal inference with interactive fixed
effects models. Political Analysis, 25 (1), 57–76.
46

Xu, Y., & Liu, L. (2022). Gsynth: Generalized synthetic control method [R package version
1.2.1]. https://yiqingxu.org/packages/gsynth/
47

A Proofs
Proof of Proposition 1. Let ns = #{i : Ti = s} and nc = #C denote the number of treated
and control securities, respectively. Throughout the proof we maintain Assumptions 1 and 2
and impose the following regularity conditions:
(i) For each i, t, the idiosyncratic component εit satisfies
E(εit | Ft, Xi, Ti) = 0, E(ε2
it) < ∞.
(ii) Within each cohort s and the control group C, {εit} are independent across i (for fixed
t) with uniformly bounded second moments, so that the law of large numbers applies
to cross-sectional averages.
(iii) The usual OLS regularity conditions hold for the pre-treatment regressions used to con
struct the abnormal-returns estimator (e.g. fixed K, non-singular regressor covariance
matrix, etc.).
Define the cohort- and control-group average idiosyncratic shocks
εst ≡ 1
ns
X
i:Ti=s
εit, ε∞t ≡ 1
nc
X
i∈C
εit.
By (i)–(ii), for each fixed t,
εst
−p→ 0 and ε∞t
−p→ 0 as ns, nc → ∞.
Recall the algebraic decompositions in equations (29)–(31):
τ AR(s, t) − τ AT T (s, t) = (αs − αˆs) + (βsFt − βˆsFo
t ) + εst,
τˆcont(s, t) − τ AT T (s, t) = (αs − α∞) + (βs − β∞)Ft + (εst − ε∞,t),
τˆalt(s, t) − τ AT T (s, t) = (αs − αˆalt
s ) + (βs − βˆalt
s )Ft + εst,
where αˆs, βˆs are the cohort averages of the OLS estimates from the abnormal-returns model
and (αˆsalt, βˆsalt) denote the implied factor loadings from an alternative estimator (synthetic
control or GSC) at the cohort level.
48

(1) Probability limits of the three estimators. Abnormal returns estimator. By defi
nition, α ̃s and β ̃s are the probability limits of the cohort-average OLS coefficients:
αˆs
−p→ α ̃s, βˆs
−p→ β ̃s as Tpre → ∞,
where the limit is the linear projection of Rit(∞) onto Fto in the pre-treatment window {t <
s − δ}.15 Combining this with the fact that εst
−p→ 0 as ns → ∞ yields, from (29),
τ AR(s, t) − τ AT T (s, t) −p→ (αs − α ̃s) + (βsFt − β ̃sFo
t ),
which is equation (32).
Difference-in-means estimator. The difference-in-means estimator does not involve any pre
event estimation, so Tpre is irrelevant here. Using (30) and the fact that εst − ε∞,t
−p→ 0 as
(ns, nc) → ∞, we obtain
τˆcont(s, t) − τ AT T (s, t) −p→ (αs − α∞) + (βs − β∞)Ft,
which is equation (33).
Synthetic control estimator. For the synthetic control estimator, we specialize τˆalt(s, t) in (31)
to τˆsynth(s, t) and denote the implied loadings by (αˆsynth
s , βˆsynth
s ).
Under Assumption 1 together with a standard interactive fixed-effects structure for the
untreated potential outcomes,
Rit(∞) = αi + β′
iFt + εit,
the average untreated return for cohort s can be written as
E(Rit(∞) | Ti = s) = αs + β′
sFt,
with an analogous representation for each control unit j ∈ C.
Ferman (Ferman, 2021) shows that, under such a factor structure, with sufficiently many
pre-treatment periods and control units, the synthetic control weights constructed by minimiz
ing the pre-treatment mean squared error recover the factor loadings of the treated unit (here,
the treated cohort) in probability. Formally, applying their Theorem 1 to the cohort-level
treated unit Rs,t, we obtain
αˆsynth
s
−p→ αs, βˆsynth
s
−p→ βs as nc, Tpre → ∞.
15Limited anticipation (Assumption 2) guarantees that Rit = Rit(∞) for t < Ti − δ, so pre-event returns identify the no-event process.
49

Combining this with εst
−p→ 0 and (31) yields
τˆsynth(s, t) − τ AT T (s, t) −p→ 0,
which is equation (34).
Remark (Gsynth). The same logic applies to the generalized synthetic control estimator in
Definition 6. Under the interactive fixed-effects model
Rit(∞) = αi + λ′
iFt + εit
and the regularity conditions in Xu (2017), Xu shows that the counterfactual returns RˆGS
it (∞)
are consistent for Rit(∞), uniformly over post-treatment periods. Aggregating over i within
cohort s then implies that the cohort-period ATT estimated by Gsynth is also consistent:
τˆGS(s, t) − τ AT T (s, t) −p→ 0.
(2) Consistency of the difference-in-means estimator under random assignment.
Assume now the random assignment condition in Assumption 3:
pt(Xi, F) = pt(F),
so that Ti is independent of Xi = (αi, βi). Then the distribution of Xi is the same in every
treatment cohort s and in the never-treated group C. In particular,
αs = E(αi | Ti = s) = E(αi | i ∈ C) = α∞,
and similarly βs = β∞.
Substituting these equalities into the probability limit in (33) gives
τˆcont(s, t) − τ AT T (s, t) −p→ 0.
Note that this result only relies on large ns, nc; it does not require Tpre → ∞ because the
difference-in-means estimator does not use pre-event estimation.
(3) Consistency of the abnormal returns estimator under correct specification.
Finally, suppose that the factor model is correctly specified in the abnormal-returns regression,
i.e. Fto = Ft for all t. For each security i,
Rit(∞) = αi + β′
iFt + εit, t < Ti − δ.
50

By Assumption 2, these pre-event observations coincide with the no-event potential outcome,
and standard OLS consistency arguments imply that, as Tpre → ∞,
αˆi
−p→ αi, βˆ i
−p→ βi.
Averaging within cohort s and applying the law of large numbers as ns → ∞ gives
αˆs ≡ 1
ns
X
i:Ti=s
αˆi
−p→ 1
ns
X
i:Ti=s
αi
−p→ αs,
and analogously βˆs
−p→ βs. Hence, under correct specification,
α ̃s = αs, β ̃s = βs.
Substituting these equalities into (32) yields
τ AR(s, t) − τ AT T (s, t) −p→ 0,
so the abnormal returns estimator is consistent for τ AT T (s, t) when the factor structure is
correctly specified.
This completes the proof.
Proof of Theorem 2.1. Throughout, maintain Assumptions 1 and 2 and the auxiliary regular
ity conditions used in the proof of Proposition 1 (mean-zero idiosyncratic shocks with a law
of large numbers across i, and standard OLS regularity for the abnormal-returns regressions,
plus the spanning/interactive fixed effects conditions for synthetic control and gsynth).
Recall that for any estimator ⋆ ∈ {AR, cont, synth, GS} and horizon κ ≥ 0,
θAT T
κ=
X
s∈S
wsτ AT T (s, s + κ), θˆ⋆
κ=
X
s∈S
wsτˆ⋆(s, s + κ),
with weights ws = Ns/ P
s′∈S Ns′ . Hence
θˆ⋆
κ − θAT T
κ=
X
s∈S
ws τˆ⋆(s, s + κ) − τ AT T (s, s + κ) . (51)
(1) Unbiasedness of synthetic control and gsynth. From Proposition 1, for each fixed
cohort s and period t,
τˆalt(s, t) − τ AT T (s, t) −p→ 0 for alt ∈ {synth, GS}
51

as ns, nc, Tpre → ∞ under the conditions of Ferman (2021) (for synthetic control) and Xu
(2017) (for gsynth). Setting t = s + κ and substituting into (51) yields
θˆalt
κ − θAT T
κ=
X
s∈S
ws τˆalt(s, s + κ) − τ AT T (s, s + κ) .
Since S ⊆ {1, . . . , T } is finite and the weights satisfy 0 ≤ ws ≤ 1 and P
s ws = 1, a finite
linear combination of terms that converge in probability to zero also converges to zero. Thus,
θˆalt
κ − θAT T
κ
−p→ 0,
which proves part (1).
(2) Bias of abnormal-returns and difference-in-means estimators. Assume |S| > 0
and 1 > pt(Xi, F) > ε > 0. The lower bound ε guarantees that each event time in S occurs
with positive probability in the population, so Ns and P
s′ Ns′ both diverge with N and the
cohort weights converge:
ws = Ns
P
s′∈S Ns′
−p→ πs ≡ Pr(Ti = s | Ti ∈ S).
From Proposition 1, for each fixed s and t,
τ AR(s, t) − τ AT T (s, t) −p→ (αs − α ̃s) + (βsFt − β ̃sFo
t ),
τˆcont(s, t) − τ AT T (s, t) −p→ (αs − α∞) + (βs − β∞)Ft.
Evaluating at t = s + κ and plugging into (51), we obtain
θˆar
κ − θAT T
κ
−p→
X
s∈S
πs
h
(αs − α ̃s) + βsFs+κ − β ̃sFo
s+κ
i
,
θˆcont
κ − θAT T
κ
−p→
X
s∈S
πs
h
(αs − α∞) + (βs − β∞)Fs+κ
i
.
Define a random event time S with Pr(S = s | Ti ∈ S) = πs. Then the limits above can
be written compactly as conditional expectations over treated cohorts:
θˆar
κ − θAT T
κ
−p→ E
h
(αS − α ̃S) + βSFS+κ − β ̃SFo
S+κ Ti ∈ S
i
,
θˆcont
κ − θAT T
κ
−p→ E
h
(αS − α∞) + (βS − β∞)FS+κ Ti ∈ S
i
.
Relabeling S as s inside the expectation gives the expressions stated in part (2).
52

(3) Random assignment across firms. Under random assignment across firms,
pt(Xi, F) = pt(F),
so event assignment is independent of Xi = (αi, βi). As in the proof of Proposition 1, this
implies
αs = α∞, βs = β∞ for all s ∈ S.
Substituting these equalities into the limit for θˆcont
κ − θAT T
κ in part (2) gives
θˆcont
κ − θAT T
κ
−p→ 0
as ns, nc → ∞, even for fixed Tpre. This proves part (3).
(4) Random timing. Now assume random timing,
pt(Xi, F) = pt(Xi),
so that event timing is independent of the factor path F, and adopt the standard assumption
that firm characteristics Xi (hence αi, βi, α ̃i, β ̃i) are independent of F. In addition, assume
that the factors have constant mean over time:
E(Ft) = E(Ft′) ≡ E(Ft) for all t, t′,
and similarly for Fto.
Start from the general bias expressions in part (2):
θˆar
κ − θAT T
κ
−p→ E
h
(αs − α ̃s) + βsFs+κ − β ̃sFo
s+κ Ti ∈ S
i
,
θˆcont
κ − θAT T
κ
−p→ E
h
(αs − α∞) + (βs − β∞)Fs+κ Ti ∈ S
i
.
Under random timing and independence between (αs, βs, α ̃s, β ̃s, s) and the factor process
F, we can factor the cross term:
E βsFs+κ | Ti ∈ S = E βs | Ti ∈ S E(Fs+κ) = E βi | Ti ∈ S E(Ft),
E β ̃sFo
s+κ | Ti ∈ S = E β ̃s | Ti ∈ S E(Fo
s+κ) = E β ̃i | Ti ∈ S E(Fo
s+κ),
where the last equalities use that the distribution of s within S is the same as the distribution
of Ti conditional on Ti ∈ S, and that factor means are time-invariant.
53

Thus the asymptotic bias of the abnormal-returns estimator becomes
θˆar
κ − θAT T
κ
−p→ E (αs − α ̃s | Ti ∈ S) + E (βi | Ti ∈ S) E (Ft)
− E β ̃i | Ti ∈ S E Fo
s+κ ,
which is the expression stated in part (4) for θˆκar.
Similarly, for the difference-in-means estimator,
E (βs − β∞)Fs+κ | Ti ∈ S = E(βs − β∞ | Ti ∈ S) E(Fs+κ)
= E(βs − β∞ | Ti ∈ S) E(Ft),
so the asymptotic bias simplifies to
θˆcont
κ − θAT T
κ
−p→ E (αs − α∞ | Ti ∈ S) + E (βs − β∞ | Ti ∈ S) E (Ft) ,
as claimed.
This establishes all four parts of the theorem.
Proof of Lemma 1. Throughout, we work with the second–order Taylor expansion of log(1+x)
around x = 0,
log(1 + x) = x − 1
2 x2 + r(x), with r(x) = O(x3),
and omit the remainder term r(x) for notational simplicity. All equalities below should be
read as holding up to these higher–order terms in returns.
Step 1: Period–by–period geometric ATT. Fix an event cohort s and calendar period
t. By definition,
τ geo,AT T (s, t) = E log(1 + Rit(s)) − log(1 + Rit(∞)) | Ti = s .
Using the second–order expansion,
log(1 + Rit(s)) ≈ Rit(s) − 1
2 Rit(s)2,
log(1 + Rit(∞)) ≈ Rit(∞) − 1
2 Rit(∞)2,
so that
τ geo,AT T (s, t) ≈ E
h
Rit(s) − Rit(∞) − 1
2 Rit(s)2 − Rit(∞)2 Ti = s
i
.
54

Let the individual treatment effect be
τi(s, t) = Rit(s) − Rit(∞),
so that Rit(s) = Rit(∞) + τi(s, t). Then
Rit(s)2 − Rit(∞)2 = Rit(∞) + τi(s, t) 2 − Rit(∞)2 = 2Rit(∞)τi(s, t) + τi(s, t)2.
Substituting this into the expression above,
τ geo,AT T (s, t) ≈ E
h
τi(s, t) − 1
2 2Rit(∞)τi(s, t) + τi(s, t)2 Ti = s
i
= E τi(s, t) | Ti = s − E Rit(∞)τi(s, t) + 1
2 τi(s, t)2 Ti = s .
By definition of the arithmetic cohort–period ATT,
τ AT T (s, t) = E τi(s, t) | Ti = s ,
so we have the key period–by–period relationship
τ geo,AT T (s, t) ≈ τ AT T (s, t) − E Rit(∞)τi(s, t) + 1
2 τi(s, t)2 Ti = s . (52)
Step 2: From period ATT to horizon H. For cohort s, the geometric ATT over horizon
H is
τ geo,AT T (s, H) =
H
X
κ=0
τ geo,AT T (s, s + κ),
and the corresponding arithmetic CATT is
τ CAT T (s, H) =
H
X
κ=0
τ AT T (s, s + κ).
Summing (52) over κ = 0, . . . , H gives
τ geo,AT T (s, H) ≈
H
X
κ=0
τ AT T (s, s + κ) −
H
X
κ=0
E Ri,s+κ(∞)τi(s, s + κ) + 1
2 τi(s, s + κ)2 Ti = s .
Now average across event cohorts with weights ws:
θgeo,AT T
H=
X
s
wsτ geo,AT T (s, H), θAT T
H=
H
X
κ=0
θAT T
κ=
X
s
ws
H
X
κ=0
τ AT T (s, s + κ).
55

Thus,
θgeo,AT T
H≈
X
s
ws
H
X
κ=0
τ AT T (s, s + κ)
−
X
s
ws
H
X
κ=0
E Ri,s+κ(∞)τi(s, s + κ) + 1
2 τi(s, s + κ)2 Ti = s
= θAT T
H−
X
s
ws
H
X
κ=0
E Ri,s+κ(∞)τi(s, s + κ) + 1
2 τi(s, s + κ)2 Ti = s ,
which is the first expression in Lemma 1.
Step 3: Independence and simplification. Now impose the additional assumption
stated in the lemma: for all s and κ,
• Ri,s+κ(∞) and τi(s, s + κ) are independent conditional on Ti = s; and
• the conditional mean of the no–event return is constant,
μ = E Ri,s+κ(∞) | Ti = s
does not depend on s or κ.
Then
E Ri,s+κ(∞)τi(s, s + κ) | Ti = s = μ E τi(s, s + κ) | Ti = s = μ τ AT T (s, s + κ),
and the expression from Step 2 becomes
θgeo,AT T
H ≈ θAT T
H−
X
s
ws
H
X
κ=0
h
μ τ AT T (s, s + κ) + 1
2 E τi(s, s + κ)2 | Ti = s
i
= θAT T
H −μ
H
X
κ=0
X
s
wsτ AT T (s, s + κ) − 1
2
H
X
κ=0
X
s
wsE τi(s, s + κ)2 | Ti = s .
Using P
s wsτ AT T (s, s + κ) = θAT T
κ and PH
κ=0 θAT T
κ = θAT T
H , we get
θgeo,AT T
H ≈ (1 − μ)θAT T
H −1
2
H
X
κ=0
X
s
wsE τi(s, s + κ)2 | Ti = s .
To rewrite the last term in terms of variances, consider a randomly drawn treated security
56

i and define the individual treatment effect at event time κ as
∆i,κ ≡ τi(s, s + κ) for the (random) cohort s = Ti.
Under the cohort weights ws, the distribution of s among treated units satisfies
Pr(s = r | Ti ∈ S) = wr,
so
E(∆i,κ | Ti ∈ S) =
X
s
wsE τi(s, s + κ) | Ti = s =
X
s
wsτ AT T (s, s + κ) = θAT T
κ,
E(∆2
i,κ | Ti ∈ S) =
X
s
wsE τi(s, s + κ)2 | Ti = s .
Denote the cross–sectional variance of individual treatment effects at event time κ by
var(θAT T
κ ) ≡ var ∆i,κ | Ti ∈ S .
Then
E(∆2
i,κ | Ti ∈ S) = var(θAT T
κ ) + θAT T
κ
2,
so that
X
s
wsE τi(s, s + κ)2 | Ti = s = var(θAT T
κ ) + θAT T
κ
2.
Substituting into the expression for θgeo,AT T
H yields
θgeo,AT T
H ≈ (1 − μ)θAT T
H −1
2
H
X
κ=0
h
var(θAT T
κ ) + θAT T
κ
2
i
,
which is the second expression in Lemma 1.
This completes the proof.
57

B Additional Simulation Results
For the simulation sample where treatment is selected based on loading to the second factor
and random timing, We plot the bias from difference in mean, CAPM, and Gsynth estimators,
across simulation samples.
Figure B.1: Bias from Difference-in-Mean Model on SMB Returns with Assignment Selection
This figure plots the biases from a difference-in-mean estimator on the treatment period over realiza
tions of the second factor across 50 simulations. We simulate 500 firms with 10% of them getting
treated. The estimation period is 239 days and post-event period is 11 days. More details on the
simulations is in Section 3.1. Panel A reports simulation results with no selections, Panel B with only
assignment selection, Panel C with only timing selection, and Panel D with both. We consider sev
eral estimators: difference in simple average, CAPM and 2-factor abnormal returns, and generalized
synthetic methods. The expected biases and coverage are from 50 simulations.
−0.04
−0.03
−0.02
−0.01
0.00
0.01
−0.04 −0.03 −0.02 −0.01 0.00 0.01 SMB
Bias (Mean Diff)
Scatterplot of SMB vs. Simple Mean Bias
58

Figure B.2: Bias from Gsynth Model on SMB Returns with Assignment Selection
This figure plots the biases from a Gsynth estimator on the treatment period over realizations of the
second factor across 50 simulations. We simulate 500 firms with 10% of them getting treated. The
estimation period is 239 days and post-event period is 11 days. More details on the simulations is
in Section 3.1. Panel A reports simulation results with no selections, Panel B with only assignment
selection, Panel C with only timing selection, and Panel D with both. We consider several estimators:
difference in simple average, CAPM and 2-factor abnormal returns, and generalized synthetic methods.
The expected biases and coverage are from 50 simulations.
−0.04
−0.03
−0.02
−0.01
0.00
0.01
−0.04 −0.03 −0.02 −0.01 0.00 0.01 SMB
Bias (Gsynth)
Scatterplot of SMB vs. Gsynth Bias
C Additional Results for Geithner
This section presents addition results for the Acemoglu et al. (2016) empirical example.
59

C.1 Period-by-Period ATT
In this section, we compare how different counterfactual affects the daily ATT in the post
event period. The ‘Average’ column computes the difference in the simple mean of treated
versus control firms, as reported in Panel A of Table 2 in the original paper. The ‘Synthetic
Control’ column computes the weighted average daily return with synthetic control weights,
and the ‘Synthetic Diff-in-Diff’ column uses the synthetic diff-in-diff weights instead.
For standard errors, in the ‘Average’ column, we use the same approach as the original
paper and adjust the standard errors for pre-event correlation between firms. In the ‘Synthetic
Control’ column, we report bootstrap standard errors estimated separately for each period.
Since synthetic control weights will not change with the post-period, this method gives the
correct standard errors period-by-period. We cannot use the same methodology for synthetic
difference-in-differences because the estimated unit weight also depends on the data from the
post-period.
We see that with synthetic control weights, the estimated ATT is much smaller compared
to the simple mean.
Table C.1: Period-by-Period ATT to Geithner Announcement (Schedule connections)
Average Synthetic Control Synthetic Diff-in-Diff
Event day Date Conn. Non-conn. Difference Conn. Non-conn. Difference Conn. Non-conn. Difference
0 11/21/08 0.086 0.042 0.043*** 0.086 0.066 0.019* 0.086 0.058 0.028 1 11/24/08 0.130 0.046 0.084*** 0.130 0.080 0.050** 0.130 0.063 0.067 2 11/25/08 0.026 0.015 0.011 0.026 0.045 -0.019 0.026 0.018 0.008 3 11/26/08 0.112 0.041 0.071*** 0.112 0.070 0.042 0.112 0.055 0.057 4 11/28/08 0.056 0.018 0.038** 0.056 0.028 0.027 0.056 0.025 0.030 5 12/1/08 -0.131 -0.076 -0.056*** -0.131 -0.119 -0.013 -0.131 -0.102 -0.030 6 12/2/08 0.046 0.043 0.003 0.046 0.039 0.007 0.046 0.056 -0.010 7 12/3/08 0.034 0.018-
 0.016 0.034 0.035 -0.001 0.034 0.024 0.011 8 12/4/08 -0.009 -0.013 0.005 -0.009 -0.028 0.019 -0.009 -0.016 0.008 9 12/5/08 0.063 0.024 0.038** 0.063 0.034 0.028** 0.063 0.031 0.031 10 12/8/08 0.064 0.027 0.037** 0.064 0.047 0.017 0.064 0.033 0.031
60

Table C.2: Period-by-Period ATT to Geithner Announcement (Personal connections)
Average Synthetic Control Synthetic Diff-in-Diff
Event day Date Conn. Non-conn. Difference Conn. Non-conn. Difference Conn. Non-conn. Difference
0 11/21/08 0.075 0.043 0.033 0.075 0.073 0.003 0.075 0.069 0.007 1 11/24/08 0.143 0.047 0.096*** 0.143 0.106 0.037 0.143 0.074 0.069 2 11/25/08 0.057 0.014 0.043* 0.057 0.059 -0.002 0.057 0.023 0.034 3 11/26/08 0.112 0.042 0.071*** 0.112 0.113 0.000 0.112 0.070 0.042 4 11/28/08 0.085 0.018 0.067*** 0.085 0.077 0.008 0.085 0.031 0.054 5 12/1/08 -0.144 -0.076 -0.067*** -0.144 -0.140 -0.004 -0.144 -0.121 -0.023 6 12/2/08 0.044 0.043 0.001 0.044 0.063 -0.019 0.044 0.066 -0.022 7 12/3/08 0.043 0.018 0.-
024 0.043 0.033 0.010 0.043 0.025 0.017 8 12/4/08 0.005 -0.014 0.019 0.005 -0.024 0.029 0.005 -0.015 0.020 9 12/5/08 0.042 0.025 0.017 0.042 0.046 -0.004 0.042 0.039 0.003 10 12/8/08 0.043 0.028 0.015 0.043 0.055 -0.012 0.043 0.042 0.002
Table C.3: Period-by-Period ATT to Geithner Announcement (New York connections)
Average Synthetic Control Synthetic Diff-in-Diff
Event day Date Conn. Non-conn. Difference Conn. Non-conn. Difference Conn. Non-conn. Difference
0 11/21/08 0.085 0.040 0.044*** 0.085 0.069 0.016* 0.085 0.051 0.033 1 11/24/08 0.078 0.046 0.031*** 0.078 0.082 -0.004 0.078 0.058 0.020 2 11/25/08 0.032 0.014 0.018 0.032 0.011 0.021* 0.032 0.016 0.016 3 11/26/08 0.087 0.040 0.048*** 0.087 0.065 0.022 0.087 0.048 0.040 4 11/28/08 0.016 0.019 -0.003 0.016 0.023 -0.006 0.016 0.022 -0.005 5 12/1/08 -0.105 -0.075 -0.030*** -0.105 -0.106 0.001 -0.105 -0.093 -0.012 6 12/2/08 0.090 0.040 0.050*** 0.090 0.052 0.037*** 0.090 0.050 0.039 7 12/3/08 0.031 0-
.018 0.013 0.031 0.025 0.005 0.031 0.021 0.009 8 12/4/08 -0.020 -0.013 -0.008 -0.020 -0.031 0.010 -0.020 -0.014 -0.006 9 12/5/08 0.050 0.024 0.026** 0.050 0.046 0.004 0.050 0.029 0.021 10 12/8/08 0.050 0.027 0.023** 0.050 0.055 -0.006 0.050 0.031 0.018
C.2 Placebo Period ATT
Table C.4: Placebo Period ATT to Geithner Announcement (Schedule connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.006* -0.006** -0.004 -0.003
(0.004) (0.003) (0.003) (0.003)
Observations 16,350 139,520 139,520 139,520
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
61

Table C.5: Placebo Period ATT to Geithner Announcement (Personal connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.007 -0.006** 0.001 -0.002
(0.005) (0.002) (0.003) (0.003)
Observations 16,350 139,520 139,520 139,520
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
Table C.6: Placebo Period ATT to Geithner Announcement (New York connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.003 -0.002 -0.000 -0.000
(0.002) (0.001) (0.001) (0.001)
Observations 16,350 139,520 139,520 139,520
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
C.3 Placebo Period
In this section, we test how synthetic methods perform in a placebo period before the event.
The placebo period is day -30 to day -1, which is not used in estimation but also the event
is not yet happening. If we assume that synthetic methods perform well in capturing the
underlying factor structure and the factor loadings stay stable before the event, we would
expect that the ATT in the placebo period is close to 0.
Figure C.1 plots the average treatment effect of raw returns on the left and the average
treatment effect of abnormal returns (relative to a CAPM model with beta estimated using
daily returns from day -280 to -31). In Figure C.2, we plot all the ATT on one graph for
better comparison.
We see that synthetic control does the best job in the placebo period, but also has the
least treatment effect post-period. By comparing the treatment effect of raw returns using
synthetic controls with the treatment effect of abnormal returns with a simple average, we see
that they are relatively close, which suggests that synthetic control does a good job matching
the underlying market beta exposure of treatment firms.
62

Figure C.1: Period-by-Period ATT in Placebo and Post Period (Schedule connections)
-.1 -.05 0 .05 .1
-30 -20 -10 0 10 dif
Treated - Control (SC) Treated - Control (Raw) Treated - Control (SDID)
-.05 0 .05
-30 -20 -10 0 10 dif
Treated - Control (SC, AR) Treated - Control (Raw, AR) Treated - Control (SDID, AR)
Figure C.2: Period-by-Period ATT in Placebo and Post Period (Schedule connections)
-.1 -.05 0 .05 .1
-30 -20 -10 0 10 dif
Treated - Control (SC) Treated - Control (SC, AR) Treated - Control (SDID) Treated - Control (SDID, AR) Treated - Control (Raw) Treated - Control (Raw, AR)
C.4 Pre- versus Post-Event Beta and Weights
In this section, we investigate how control beta is compared to treatment beta with different
control weights. We also compare beta estimated pre-event with beta estimated post-event to
see if the event also has a treatment effect on beta loadings. The pre-event beta is estimated
over daily returns from day -280 to day -31, and the post-event beta is estimated over daily
63

returns from day 31 to day 65. We exclude the immediate post-period because the returns
can be confounded by the event effect. We also compare the synthetic weights estimated with
pre- and post-period by comparing the treatment effect with pre- and post-weights.
First, we see that indeed synthetic control weights match control beta to treatment beta
the best, compared to a simple average and synthetic diff-in-diff weights. For the pre-event,
we see a control beta of 1.33 with synthetic control, compared to a treatment beta of 1.43.
For the post-event, we have a control beta of 1.71, which is very close to a treatment beta
of 1.73. The same conclusion can be drawn with Fama-French three-factor betas. Synthetic
control weights give the closest control betas to treatment betas for market, size, and value
factors.
Second, we see that post-betas are on average higher than pre-betas, suggesting that the
event does have an effect on the underlying factor loadings of treatment firms. CAPM market
beta increases from 1.43 to 1.73, a 21% increase. In the three-factor model, we see the largest
increase in size and value betas. Size beta increases from 0.23 to 0.41 (78%), and value beta
increases from 0.61 to 1.00 (64%).
Third, Figure C.3 show the daily ATT with synthetic control weights for the placebo
period (day -30 to -1), post-event period (day 0 to 30), and post-event-estimation period (day
31 to 65). We see that using post-event synthetic control weights gives us a larger event
treatment effect, but it also gives a more positive ATT in the placebo period.
64

Table C.7: Pre-/Post-Event Market Beta from CAPM
Panel A: Pre Beta, Pre Weights
Market
Treated Control
Average 1.4269 0.8251
SDID 1.4269 1.1111
SC 1.4269 1.3309
Panel B: Post Beta, Post Weights
Market
Treated Control
Average 1.7304 0.9377
SDID 1.7304 1.4076
SC 1.7304 1.7083
Panel C: Pre Beta, Post Weights
Market
Treated Control
Average 1.4269 0.8251
SDID 1.4269 1.0954
SC 1.4269 1.0751
Panel D: Post Beta, Pre Weights
Market
Treated Control
Average 1.7304 0.9377
SDID 1.7304 1.2105
SC 1.7304 1.3664
65

Table C.8: Pre-/Post-Event Beta from Fama-French Three Factors
Panel A: Pre Beta, Pre Weights
Market SMB HML
Treated Control Treated Control Treated Control
Original 1.2748 0.6592 0.2330 0.7484 0.6068 0.7196
SDID 1.2748 0.9051 0.2330 0.8187 0.6068 0.8724
SC 1.2748 1.1477 0.2330 0.4796 0.6068 0.7495
Panel B: Post Beta, Post Weights
Market SMB HML
Treated Control Treated Control Treated Control
Original 1.2454 0.6265 0.4139 0.5633 0.9991 0.6898
SDID 1.2454 0.9544 0.4139 0.6791 0.9991 0.9785
SC 1.2454 1.2130 0.4139 0.4697 0.9991 1.0273
Figure C.3: Period-by-Period ATT with Pre & Post SC Weights
-.05 0 .05 .1
-40 -20 0 20 40 60 dif
Treated - Control (Pre SC) Treated - Control (Post SC)
66

C.5 Beta: All Public Firms as Control
Table C.9: Pre-Event Market Beta from CAPM
Panel A: Pre Beta, Pre Weights
Market
Treated Control
Average 1.4269 0.8324
SDID 1.4269 1.2814
SC 1.4269 1.3830
Table C.10: Pre-Event Beta from Fama-French Three Factors
Panel A: Pre Beta, Pre Weights
Market SMB HML
Treated Control Treated Control Treated Control
Original 1.2748 0.8569 0.2330 0.5526 0.6068 0.1436
SDID 1.2748 1.1654 0.2330 0.6273 0.6068 0.5934
SC 1.2748 1.2201 0.2330 0.3774 0.6068 0.6743
C.6 Placebo Period ATT: All Public Firms as Control
Table C.11: Placebo Period ATT to Geithner Announcement (Schedule connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.003 -0.003 -0.004 -0.002
(0.004) (0.002) (0.003) (0.002)
Observations 122,850 1,044,225 1,044,225 1,044,225
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
67

Table C.12: Placebo Period ATT to Geithner Announcement (Personal connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.004 -0.003 -0.001 -0.002
(0.006) (0.004) (0.003) (0.003)
Observations 122,850 1,044,225 1,044,225 1,044,225
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
Table C.13: Placebo Period ATT to Geithner Announcement (New York connections)
(1) (2) (3) (4)
Average DID SC SDID
Treated -0.000 0.000 -0.002 0.001
(0.003) (0.002) (0.002) (0.002)
Observations 122,850 1,044,225 1,044,225 1,044,225
Standard errors in parentheses
* p<0.10, ** p<0.05, *** p<0.01
68

D Additional Results for Index Inclusion
This section presents addition results for the S&P index inclusion empirical example.
69

Figure D.1: Cumulative Distributions of Factor Returns by Announcement Status This figure plots the daily returns of the S&P 500 index and Small-minus-Big (SMB) factor on the dates when there are index inclusion announcements versus the dates without. The blue line plots the overall cumulative distribution function from 1962 to 2023, and the red lines plot the cumulative distribution function of daily returns on the days when there is an index inclusion event.
Panel A: S&P 500 Daily Returns
0
.2
.4
.6
.8
1
Cumulative Probability
-.2 -.1 0 .1 S&P 500 Daily Returns
No-Announce Day
Announce Day
1980-1989
0
.2
.4
.6
.8
1
Cumulative Probability
-.1 -.05 0 .05 S&P 500 Daily Returns
No-Announce Day
Announce Day
1990-1999
0
.2
.4
.6
.8
1
Cumulative Probability
-.1 -.05 0 .05 .1 S&P 500 Daily Returns
No-Announce Day
Announce Day
2000-2009
0
.2
.4
.6
.8
1
Cumulative Probability
-.1 -.05 0 .05 .1 S&P 500 Daily Returns
No-Announce Day
Announce Day
2010-2020
Panel B: SMB Factor Daily Returns
0
.2
.4
.6
.8
1
Cumulative Probability
-.1 -.05 0 .05 SMB Daily Returns
No-Announce Day
Announce Day
1980-1989
0
.2
.4
.6
.8
1
Cumulative Probability
-.02 -.01 0 .01 .02 SMB Daily Returns
No-Announce Day
Announce Day
1990-1999
0
.2
.4
.6
.8
1
Cumulative Probability
-.04 -.02 0 .02 .04 SMB Daily Returns
No-Announce Day
Announce Day
2000-2009
0
.2
.4
.6
.8
1
Cumulative Probability
-.04 -.02 0 .02 .04 .06 SMB Daily Returns
No-Announce Day
Announce Day
2010-2020
70

Figure D.2: Pre-addition Cumulative Market Factor Returns (Inclusion vs. Randomized No-Inclusion Days) This figure plots the average cumulative returns on the market and the SMB factor following index inclusion announcements in event time, averaged across inclusions for each decade. We also plot the average cumulative returns on the market following randomized no-inclusion days. For each inclusion date, we pick a random date on no-inclusion dates. The returns are normalized to start at zero, 100--
trading days before the announcement.
Panel A: S&P 500 Cumulative Returns
-.05
-.03
-.01
.01
.03
.05
Cumulative Log Mkt-Rf Returns
-100 -80 -60 -40 -20 0 Event Day
80-89 90-99 00-09 10-20 80-89 (No Event) 90-99 (No Event) 00-09 (No Event) 10-20 (No Event)
Panel B: SMB Cumulative Returns
-.05
-.03
-.01
.01
.03
.05
Cumulative Log SMB Returns
-100 -80 -60 -40 -20 0 Event Day
80-89 90-99 00-09 10-20 80-89 (No Event) 90-99 (No Event) 00-09 (No Event) 10-20 (No Event)
71

Figure D.3: Cumulative pre-addition market-adjusted returns (Treated vs. propensity score matched)
0
.05
.1
.15
.2
-100 -80 -60 -40 -20 0 20 event_date
80-89 90-99 00-09 10-20 80-89 (PSM) 90-99 (PSM) 00-09 (PSM) 10-20 (PSM)
CAR of Treated and PSM Controls by Year Group
72

Figure D.4: Cumulative pre-addition market-adjusted returns (Treated vs. synthetic method)
0
.05
.1
.15
.2
-100 -80 -60 -40 -20 0 20 event_date
80-89 90-99 00-09 10-20 80-89 (SC) 90-99 (SC) 00-09 (SC) 10-20 (SC)
CAR of Treated and Gsynth Controls by Year Group
73

E Additional results on empirical example 3, merger announc
ments
This section presents additional exhibits and results for our first mergers announcement ex
ample.
74

Figure E.1: Cumulative Distributions of Factor Returns by Announcement Status This figure plots the daily returns of the CRSP value-weighted index on the dates when there are merger announcements versus the dates without. The blue line plots the overall cumulative distribution function from 1962 to 2023, and the red lines plot the cumulative distribution function of daily returns on the days when there is a merger annnouncment event.
0
.2
.4
.6
.8
1
Cumulative Probability
-.2 -.1 0 .1 .2 CRSP Value-Weighted Index Daily Returns
No-Announce Day Announce Day
75

Table E.1: Beta Distributions of Acquirers in Merger This table presents the average CAPM and Fama-French three-factor betas for acquirers in merger transactions. We estimate firm-level betas using daily stock returns before and after the announcement. For pre betas, we use event date -280 to -30, while for post beta, we use event date 30-280 to estimate betas. We provide the mean and median of CAPM market beta and betas in Fama-French three-factor model. We test if the pre and post betas are sta-
tistically different using a two-sided t-test.
Pre Post Mean t-test Mean Median Mean Median Pre - Post
CAPM Beta 0.952 0.909 0.968 0.926 -0.016*** FF3F Mkt Beta 1.020 0.993 1.022 1.001 -0.002 FF3F SMB Beta 0.690 0.620 0.678 0.613 0.012* FF3F HML Beta 0.101 0.141 0.132 0.179 -0.031***
76

F Additional results on empirical example 4, close mergers
with winners and losers
This section presents additional exhibits and results for our second mergers announcement
example.
F.0.1 Estimation Window and Model Stability
We estimate different counterfactual models with different estimation window lengths. We
vary the estimation window from 35 months as default to 12 month. We again leave the
period t = 0 as the placebo period. We plot the average treatment effects in the estimation
window, placebo period, treatment period, and post treatment windows, respectively.
Figure F.1: Average Treatment Effects by Estimation Window Length This figure plots the average treatment effects of winners in merger contests in the estimation, placebo, treatment, and posttreatment windows, by the length of the estimation window. We estimate betas and train synthetic control and gsynth models using pre-announcement periods from 12 months to 35 months. We then compute the counterfactual returns from different models with the design-based loser portfolio.
Panel A: Treatment Period t = 1
-.8
-.6
-.4
-.2
0
.2
ATTs event date 1
10 15 20 25 30 35 Estimation Period Length
Loser CAPM (alpha) CAPM (no alpha) FF3F (alpha) FF3F (no alpha) Gsynth SDID SC Augsynth
Panel B: Post-Treatment Periods t > 1
-.015
-.01
-.005
0
Average post ATTs
10 15 20 25 30 35 Estimation Period Length
Loser CAPM (alpha) CAPM (no alpha) FF3F (alpha) FF3F (no alpha) Gsynth SDID SC Augsynth
Panel A: Placebo Period t = 0
-.02
-.01
0
.01
.02
ATTs event date 0
10 15 20 25 30 35 Estimation Period Length
Loser CAPM (alpha) CAPM (no alpha) FF3F (alpha) FF3F (no alpha) Gsynth SDID SC Augsynth
Panel B: Estimation Periods t < 0
-.005
0
.005
.01
Average pre ATTs
10 15 20 25 30 35 Estimation Period Length
Loser CAPM (alpha) CAPM (no alpha) FF3F (alpha) FF3F (no alpha) Gsynth SDID SC Augsynth
77

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:16.229Z
- **Text Length:** 138988 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 78 of 78
