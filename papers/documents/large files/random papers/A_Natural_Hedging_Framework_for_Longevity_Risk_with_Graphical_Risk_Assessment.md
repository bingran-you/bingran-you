# PDF Document: Gabric and Zhou - 2025 - A Natural Hedging Framework for Longevity Risk with Graphical Risk Assessment.pdf

**File Path:** Gabric and Zhou - 2025 - A Natural Hedging Framework for Longevity Risk with Graphical Risk Assessment.pdf

**Processed Date:** 2026-02-10T18:14:15.917Z

**File Size:** 3267.42 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3576

**Title:** A Natural Hedging Framework for Longevity Risk with Graphical Risk Assessment

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Natural Hedging Framework for Longevity Risk with
Graphical Risk Assessment
Lydia J. Gabrica and Kenneth Q. Zhoub,1
aSchool of Mathematical and Statistical Sciences, Arizona State University, USA
bDepartment of Statistics and Actuarial Science, University of Waterloo, Canada
Abstract: Natural hedging allows life insurers to manage longevity risk internally by
offsetting the opposite exposures of life insurance and annuity liabilities. Although many
studies have proposed natural hedging strategies under different settings, calibration meth
ods, and mortality models, a unified framework for constructing and evaluating such hedges
remains undeveloped. While graphical risk assessment has been explored for index-based
longevity hedges, no comparable metric exists for natural hedging. This paper proposes a
structured natural hedging framework paired with a graphical risk metric for hedge eval
uation. The framework integrates valuation, calibration, and evaluation, while the graph
ical metric provides intuitive insights into residual dependencies and hedge performance.
Applied to multiple hedging scenarios, the proposed methods demonstrate flexibility, in
terpretability, and practical value for longevity risk management.
Keywords: Natural hedging; Longevity risk; Stochastic mortality models; Graphical risk
metric; Hedge effectiveness
1 Introduction
The uncertainty surrounding future mortality trends, known as longevity risk, has been
extensively studied in the context of life insurance valuation and risk management. In
general, there are two categories of longevity risk management solutions: internal and
external. External solutions transfer longevity risk from life insurers to capital market
investors through index-based hedging instruments and standardised contracts. Internal
solutions, in contrast, utilize the insurer’s own portfolio structure to mitigate longevity
and mortality risks. Among these, natural hedging has received considerable attention for
its intuitive mechanism of balancing opposite exposures within life insurance and annuity
portfolios.
The seminal work of Cox and Lin (2007) introduced the concept of natural hedging by
leveraging the inverse relationship between life insurance and annuity products to diversify
1Corresponding author. E-mail: kenneth.zhou@uwaterloo.ca
1
arXiv:2510.18721v1 [q-fin.RM] 21 Oct 2025

mortality and longevity risks. When mortality changes, the values of life insurance and
annuity liabilities typically move in opposite directions, allowing the insurer to offset these
changes and reduce overall risk exposure. Since Cox and Lin (2007), numerous studies
have explored how this relationship can be more effectively utilized and implemented in
different settings to manage mortality and longevity risks.
For instance, Lin and Tsai (2014) proposed an immunization-based approach to con
struct natural hedges using sensitivity measures. Zhu and Bauer (2014) explored a non
parametric mortality model and found that natural hedging performance may be less effec
tive compared with parametric models. More recently, Yang et al. (2019) combined internal
natural hedges with external index-based hedges under a unified framework. Chen et al.
(2024) analysed product demand and supply considerations in natural hedging, while Cu
pido et al. (2024) studied the impact of spatial dependence on hedge performance. These
studies collectively demonstrate the growing importance of natural hedging in longevity
risk management.
Despite the aforementioned advancements, several challenges remain in constructing
natural hedging effectively. First, identifying appropriate life insurance products to offset
the mortality risk of annuity products can be complex. Second, determining the optimal
quantity of life insurance products to effectively hedge requires detailed mathematical
calibration. Third, evaluating hedge effectiveness is complicated due to residual risks such
as calibration risk, structural basis risk, and model risk. Although prior research has
attempted to address aspects of these challenges, there is still no unified framework that
allows the systematic construction, calibration, and comparison of natural hedges across
different models and methods.
In addition, existing studies primarily rely on numerical risk measures to evaluate hedg
ing performance, which may not fully capture the joint behaviour of liabilities and hedging
instruments. This shortfall could understate the strength of the inverse relationship or the
offsetting effects in natural hedging. To address these gaps, this paper develops a unified
natural hedging framework that integrates both numerical and graphical evaluation meth
ods. The framework provides a consistent process for valuation, calibration and evaluation,
while the accompanying graphical risk metric offers visual insights into the resulting hedge
performance. The contributions of this paper are threefold.
The first contribution of this paper is the development of a risk management framework
specifically designed for natural hedging. While frameworks for constructing and evaluating
external longevity hedges have been proposed in prior studies, such as the index-based
hedging procedure of Coughlan et al. (2011) and the decomposition of hedge effectiveness
2

in Cairns et al. (2014), a comparable framework dedicated to natural hedging has not been
established. To fill this gap, we propose a three-step hedging framework that extends the
structure of Cairns et al. (2014) and adapts it for natural hedging.
The proposed framework consists of three stages: valuation, calibration, and evaluation.
In the first stage, we derive formulas for valuing life insurance and annuity products under
a stochastic mortality setting. In the second stage, we consider multiple hedge calibra
tion techniques categorized by their objectives, including variance minimisation, duration
matching, and delta hedging. In the third stage, hedge evaluation combines risk measures
with graphical tools to provide a comprehensive and interpretable assessment of hedging
effectiveness. The integration of graphical evaluation within the framework leads to our
second contribution.
The second contribution of this paper is the introduction of a graphical risk metric
specifically tailored to natural hedging. Graphical tools have been explored in the context
of standardised longevity hedging, such as the graphical basis risk metrics proposed by
Chan et al. (2016) and extended by Sherris et al. (2020), as well as in Blake et al. (2008),
Dowd et al. (2010) and Li and Liu (2021). Since no comparable metric has been developed
for evaluating natural hedges, we propose a graphical risk metric that visualizes the rela
tionship between life annuity and insurance portfolios, allowing for a direct and intuitive
evaluation of hedge performance.
The proposed graphical risk metric is constructed using a series of joint prediction
regions that represent potential hedge outcomes across multiple confidence levels. To fa
cilitate practical application, we further develop an interpretation procedure that enables
users to visually assess hedge effectiveness and compare alternative hedging strategies.
Visual elements such as shaded regions and reference lines highlight deviations from ex
pected outcomes and the degree of diversification effects. This graphical approach provides
a transparent and intuitive means to diagnose whether hedging shortfalls arise from under
hedging, over-hedging, or a lack of hedging effect.
The third contribution of this paper is the numerical implementation of the proposed
natural hedging framework and graphical risk metric across three practical applications.
First, we demonstrate how the framework can identify trade-offs when selecting an in
surance portfolio as the hedging instrument. Second, we compare alternative calibration
techniques to determine the optimal allocation of the hedging portfolio. Third, we evaluate
model risk by comparing two stochastic mortality models and a non-parametric approach
for a given portfolio configuration. The results from these illustrations show that the pro
posed framework and graphical risk metric together serve as a flexible and interpretable
3

tool for constructing and evaluating natural hedges.
The remainder of the paper is organized as follows. Section 2 outlines the components of
the natural hedging framework and demonstrates its use through a toy example. Section 3
describes the construction and interpretation of the graphical risk metric. Section 4 applies
the framework and graphical metric to three practical illustrations. Finally, Section 5
concludes the paper and discusses possible extensions and limitations.
2 The Natural Hedging Framework
Consider a life insurer issuing both life annuity and life insurance products. Let A and I
denote the present value random variables of the annuity and insurance portfolios, respec
tively. To hedge the longevity risk of A, the insurer employs a natural hedging strategy
resulting in a hedged position
P(h) = A + L(h),
where L(h) = h · I represent the calibrated life insurance portfolio and h is the hedge ratio
indicating the amount of I needed for the hedged position.
To support a systematic implementation of such natural hedging, we develop a three
step framework in this section. We briefly summarise the three steps below:
1. Valuation of A and I: Derive the present value of the annuity and insurance liabili
ties, and obtain their expected values under stochastic mortality assumptions.
2. Calibration of h: Determine the hedge ratio that achieves a specified objective, such
as variance minimization, duration matching, or delta neutral.
3. Evaluation of P(h): Assess the performance of the hedged portfolio through both
numerical and graphical metrics, such as variance, Value-at-Risk, or histograms.
The rest of this section examines each step of the proposed framework in detail and con
cludes with a simple illustrative example.
2.1 Valuation
To construct a natural hedge, the insurer must first quantify the present value of the
annuity and insurance liabilities. Under stochastic mortality modelling, these liabilities
are random variables since their values depend on uncertain future survival outcomes.
Thus, the first step of our natural hedging framework is to define and value these present
value random variables as the foundation for establishing the hedge.
4

Let Sx(T ) be the probability that an individual aged x at time 0 will survive another
T years. This probability can be expressed as
Sx(T ) =
T
Y
s=1
(1 − qx+s−1,s), (1)
where qx,s is the probability that an individual aged x at the beginning of year s dies during
year s. In a stochastic setting, Sx(T ) is a random variable since qx,s, for s = 1, . . . , T , is
uncertain due to random mortality fluctuations. We denote its expectation by Sx(T ) :=
E[Sx(T )]. The procedure for generating realisations of Sx(T ) is provided in Appendix B.
2.1.1 Annuity liabilities
Recall that we denote A as the present value random variable of the annuity portfolio. If
the insurer has nA distinct annuity products in the portfolio and applies a constant force
of interest δ, then A is given by
A=
nA
X
j=1
ωA
j
τj +tj −1
X
k=τj
cj · e−δk · Sxj (k),
where ωA
j is the weight of the j-th annuity product, τj is its deferral period, tj is the
number of payments, cj is the payment size, and xj is the issuing age. The weights satisfy
PnA
j=1 ωA
j = 1 and 0 < ωA
j ≤ 1 for all j.
It follows that the expectation of A represents the expected present value of the entire
annuity portfolio liabilities, which can be written as
A := E [A] =
nA
X
j=1
ωA
j
τj +tj −1
X
k=τj
cj · e−δk · Sxj (k). (2)
The distribution of A and the value of A can be obtained using Monte Carlo simulations
under stochastic mortality modelling.
2.1.2 Insurance liabilities
Recall again that we denote I as the present value random variable of the insurance
portfolio. If the insurer has nI distinct insurance products in the portfolio and applies a
5

constant force of interest δ, then I is given by
I=
nI
X
j=1
ωI
j
tj −1
X
k=0
bj · e−δ(k+1) · Sxj (k) − Sxj (k + 1) ,
where ωI
j is the weight of the j-th insurance product, tj is its term length, bj is the benefit
amount, and xj is the issuing age. The weights again satisfy PnI
j=1 ωI
j = 1 and 0 < ωI
j ≤1
for all j.
Similar to the annuity liabilities, the expectation of I is the expected present value of
the entire insurance portfolio liabilities, which can be written as
I := E[I] =
nI
X
j=1
ωI
j
tj −1
X
k=0
bj · e−δ(k+1) · Sxj (k) − Sxj (k + 1) . (3)
The distribution of I and the value of I also can be obtained using Monte Carlo simulations
under stochastic mortality modelling.
2.1.3 Summary of notations
Having derived the annuity and insurance portfolios, we now summarise the notations
before presenting the next two steps of the framework. The hedge ratio is h, the calibrated
insurance portfolio is L(h) = h · I with its expected present value being L(h) = h · I, and
the combined portfolio (i.e., the hedged position) is P(h) = A + L(h) with its expected
present value being P (h) = A + L(h). For ease of reference, Table 1 provides a summary
of the notations introduced for the natural hedging framework.
Description Present Value (PV) Expected PV Mean-adjusted PV
Annuity portfolio A A A ̃ = A − A Insurance portfolio I I I ̃ = I − I Calibrated portfolio L(h) L(h) L ̃(h) = L(h) − L(h) Combined portfolio P(h) P (h) P ̃(h) = P(h) − P (h)
Table 1: Summary of the notations used in the natural hedging framework.
2.2 Calibration
We now turn to the calibration step of the framework. The hedge ratio h determines
how the insurance liabilities offsets annuity liabilities, and calibrating h is therefore a
6

critical step that directly affects the effectiveness of the natural hedge. In this section, we
categorize calibration methods into three groups: optimization, immunization, and Greek
neutral. Before outlining a specific technique from each category to be implemented later
in this paper, we briefly review the main approaches and related literature.
The first category is optimization, which calibrates h by minimizing a chosen risk
measure. Cupido et al. (2024) implemented a risk-minimization approach to construct a
naturally hedged portfolio that accounts for spatial dependencies between different popu
lations. Yang et al. (2019) proposed a unified hedging framework that minimizes changes
in the insurer’s profit function for a portfolio combining internal natural hedges and ex
ternal index-based hedges. Zhu and Bauer (2014) applied a financial hedging approach to
minimize economic capital, as originally introduced by Zhu and Bauer (2011).
The next category is immunization, which seeks to minimize portfolio liability sensitiv
ity to changes in mortality rates. Li and Luo (2012) proposed a key q-Duration framework
that matches sensitivities in mortality rates to hedge longevity risk with q-forward con
tracts. Tsai et al. (2010) introduced a conditional Value-at-Risk minimization approach
that optimizes the insurer’s product mix and compared it with the modified duration
matching method of Wang et al. (2010). Chen et al. (2024) generalized the approach of
Tsai et al. (2010) to incorporate both insurance supply and demand, while Gatzert and
Wesker (2014) extended the method of Wang et al. (2010) to the entire insurance perspec
tive, building on the framework of Gatzert and Wesker (2012).
Lastly, Greek neutral techniques aim to reduce portfolio liabilities with respect to
changes in model-specific mortality quantities. Cairns (2013) introduced delta-nuga hedg
ing as a robust approach to address recalibration risk in portfolios with index-based hedging
instruments. Liu and Li (2017) expanded the delta-nuga method of Cairns (2013) through
a generalized state-space hedging framework. To hedge changes in the reserves of a nat
urally hedged portfolio, Luciano et al. (2017) developed delta-gamma hedging based on
first- and second-order approximations. Jevti ́c and Regis (2015) applied this approach to
assess the solvency of a naturally hedged portfolio from an asset-liability perspective.
We remark that the above review is not intended to be exhaustive but rather to provide
context for the calibration step of the natural hedging framework. A simple benchmark
is the uncalibrated hedge, where the hedge ratio is set to h = 1 and the insurer makes
no adjustment to the insurance liabilities. Lastly, under a stochastic mortality model, the
hedge ratio will need be calculated using Monte Carlo simulations. In the remainder of
this section, we focus on one representative technique from each category, which will later
be used in our numerical implementation.
7

2.2.1 Optimization
The aim of optimization is to calibrate the hedge ratio h by minimizing a chosen risk
measure of the hedged position. Formally, this optimization problem can be written as
min
h∈R ρ(P(h)),
where ρ denotes a selected risk measure and P(h) = A + h · I is the hedged portfolio.
When ρ is taken to be variance, the problem reduces to variance minimization, a well
established approach in longevity risk management. In this case, Cairns et al. (2014)
showed that the optimal hedge ratio h(V M) has a closed-form solution given by
h(V M) = − Cov(A, I)
Var(I) . (4)
The corresponding hedged portfolio is denoted by P(h(V M)) = A + h(V M) · I. This case
will be used in the numerical illustrations later in the paper.
2.2.2 Immunization
Immunization was originally introduced by Redington (1952) for hedging interest rate
risk. Wang et al. (2010) adapted it for natural hedging, where the goal is to neutralize
the sensitivity of annuity and insurance liabilities to changes in mortality. The mortality
duration of the combined portfolio P (h) with respect to the force of mortality μ is defined
as
DP
μ = dP (h)
dμ = dA
dμ + dL(h)
dμ = dA
dμ + h dI
dμ .
The optimal hedge ratio under this approach is obtained by setting DP
μ = 0.
To approximate the mortality durations in DP
μ , we define the modified durations of
the annuity and insurance portfolios as DA
μ = A+−A−
2ε and DI
μ = I+−I−
2ε , where ε is a small
constant, A± and I± are the expected present values of the annuity and insurance liabilities,
respectively, evaluated under adjusted mortality μ ± ε. These quantities capture how much
the expected present values change in response to a small shift in mortality. The resulting
hedge ratio is
h(DM) = − DA
μ
DIμ
. (5)
The corresponding hedged portfolio is P (h(DM)) = A + h(DM)I. This portfolio matches the
8

modified durations of the annuity and insurance portfolios, thereby aligning their sensitiv
ities to mortality fluctuations.
2.2.3 Greek neutral
Greek neutral methods extend the notion of Greeks to mortality and longevity hedging.
Luciano et al. (2012) first introduced this idea, and Zhou and Li (2021) further developed
it for index-based longevity hedging, where the longevity delta was defined as a sensitivity
measure with respect to the period effect of a stochastic mortality model. We now adapt
this approach to natural hedging.
Consider the Lee-Carter (LC) model (Lee and Carter, 1992):
ln(mx,t) = αx + βxκt,
where mx,t is the central death rate for age x in year t, and αx, βx, and κt are the LC
parameters, with κt following a random walk with drift. The longevity delta measures the
first-order sensitivity of the survival probability Sx(T ) to changes in the current period
effect κ0, and is defined as ∆x(T ) := ∂Sx(T )
∂κ0 . Assuming a constant force of mortality
between integer ages, Zhou and Li (2021) showed that ∆x(T ) can be written as
∆x(T ) = −
T
X
s=1
βx+s−1 E[exp(Yx(s) − Zx(T ))] ,
where Yx(s) = αx+s−1 + βx+s−1κs and Zx(T ) = PT
s=1 exp(Yx(s)), with ∆x(0) = 0 since
Sx(0) = 1.
For the natural hedging framework, the longevity deltas of the annuity and insurance
portfolios from Section 2.1 can then be derived as ∆A = PnA
j=1 ωA
j
Pτj +tj
k=τj cj e−δk∆xj (k)
and ∆I = PnI
j=1 ωI
j
Ptj −1
k=0 bje−δ(k+1) ∆xj (k) − ∆xj (k + 1) . A delta-neutral natural hedge
would require ∆A + h∆I = 0, and thus the hedge ratio is
h(DN) = − ∆A
∆I . (6)
The corresponding delta-neutral hedged portfolio is P (h(DN)) = A + h(DN)I. Lastly, we
note that longevity delta is model-dependent. While we have illustrated it under the LC
model, the delta-neutral approach can be applied to other stochastic mortality models by
deriving the corresponding longevity deltas.
9

2.3 Evaluation
The last step of the proposed natural hedging framework is evaluation. In this step, the
insurer evaluates the effectiveness of a hedged position P(h) using both numerical and
graphical assessment tools. We discuss both types of assessments in this subsection and
consider them in the toy example shown in the next subsection.
A numerical risk measure for natural hedging can be defined in general as a mapping
ρ : P(h) 7→ R,
which assigns a real-valued assessment to the hedged position P(h). A fundamental exam
ple is the portfolio variance, given by Var(P(h)) = Var(A) + h2Var(I) + 2h Cov(A, I). If
the insurer focuses on downside risk, the Value-at-Risk (VaR) can be considered, defined
as VaRα(P(h)) = inf{x ∈ R : FP(h)(x) ≥ α} at confidence level α ∈ (0, 1), where FP(h)
is the distribution function of P(h). A related measure is Expected Shortfall (ES), given
by ESα(P(h)) = 1
1−α
R1
α VaRu(P(h))du, which captures the average loss in the tail be
yond VaR. For a natural hedge, these numerical risk measures can provide complementary
perspectives on the risk profile of the hedged position.
We make two remarks on numerical risk measures. First, beyond variance, VaR, and
ES, other measures may also be considered, and they can be applied to transformations of
the hedged position. For example, one may evaluate hedge effectiveness using VaRα(P ̃(h)),
where P ̃(h) is the mean-adjusted hedged portfolio given in Table 1. Second, we do not aim
to identify a single numerical risk measure that is universally applicable to hedged port
folios. In optimization, the chosen objective is a natural candidate, but in immunization
or Greek neutral approaches no obvious measure exists. In such cases, it is important to
consider multiple numerical risk measures and complementary graphical assessments.
In conjunction with numerical measures, graphical risk metrics can further provide
visual insights into the distribution of the hedged position. A common approach is to
plot histograms of P(h) or P ̃(h), and overlay numerical risk measures such as VaR and
ES. Other useful visualizations include empirical cumulative distribution functions, Q-Q
plots, or kernel density estimates. While these graphical tools are widely used, they remain
limited in the depth of analysis they provide. In Section 3, we extend beyond such standard
methods and propose a new graphical risk metric tailored for natural hedging.
In summary, the last step of our framework incorporates both numerical and graphical
risk assessments to evaluate hedged positions, aiming to provide a comprehensive view of
their risk profile. However, relying solely on numerical measures can overlook important
10

aspects of hedge performance, and simple graphical diagnostics may also be insufficient.
To illustrate these issues, the next subsection presents a toy example that demonstrates
the implementation of the proposed natural hedging framework and motivates the new
graphical risk metric introduced in Section 3.
2.4 Framework summary and toy example
We now summarise the proposed natural hedging framework and illustrate its implemen
tation through a toy example. Table 2 provides a compact reference for the three steps of
the framework. Under stochastic mortality modelling, each step requires future mortality
projections. In practice, Monte Carlo simulations are used to compute present values in
the valuation step, hedge ratios in the calibration step, and risk measures in the evalua
tion step. The mortality simulation methods need not be identical across steps, which in
turn allows model uncertainty to present in the natural hedge. The mortality simulation
methods considered in this paper are presented in Appendix B.
Step Details
Step 1: Valuation
Derive and calculate the present values of annuity and insurance liabilities to be included in the hedge.
Step 2: Calibration
Determine the hedge ratio, either set to 1 for an uncalibrated hedge or calculated under a chosen calibration method.
Step 3: Evaluation
Assess the resulting hedged positions using numerical risk measures and graphical risk assessment tools.
Projected Mortality
Mortality scenarios are required in each of the valuation, calibration, and evaluation steps.
Table 2: The proposed natural hedging framework.
To demonstrate the implementation of the proposed framework, we now present a toy
example. Consider a life insurer with an annuity portfolio consisting of a single 20-year
deferred 20-term life annuity issued to a 45-year-old individual, paying $20 annually at the
beginning of each year after the deferral period. To hedge this liability, the insurer issues
a 30-year term life insurance policy with a death benefit of $250, payable at the end of
the year of death, to an individual aged either 40 or 50. For both issuing ages, the hedge
ratio is set to h = 1, yielding two uncalibrated hedges. The interest rate is assumed to be
i = 4% (or δ = ln(1.04)).
Following the framework, Step 1 derives the present values of the annuity A and the
two insurance portfolios I1 and I2 for ages 40 and 50, respectively. Step 2 constructs the
11

calibrated insurance portfolios L1(1) = I1 and L2(1) = I2 by setting h1 = h2 = 1. Step
3 evaluates the hedged portfolios P1 = A + I1 and P2 = A + I2 using both numerical
and graphical risk assessments. Mortality scenarios are generated using the bootstrapping
method described in Appendix B.2, based on U.S. male mortality data (ages 40-99, years
1970-2018) obtained from the Human Mortality Database.2
Table 3 reports the mean, variance, VaR0.95, and the excess of VaR0.95 over the mean for
the annuity portfolio A, the two insurance portfolios L1 and L2, and the combined hedged
portfolios P1 and P2. The variance is greatly reduced when either L1 or L2 is added to A,
reflecting the hedging effect of combining portfolios. Between the two hedged portfolios, P2
has the smaller variance and excess VaR, while P1 achieves the lower mean and lower VaR.
The mixed results underscore the complexity of assessing hedge effectiveness in natural
hedging and motivate the need for further graphical risk assessments.
Portfolio Mean Variance VaR0.95 VaR0.95 − Mean
A 98.81 1.61 100.84 2.03 L1 22.00 1.01 23.69 1.68 L2 43.52 2.67 46.27 2.75 P1 120.81 0.39 121.83 1.01 P2 142.33 0.27 143.19 0.86
Table 3: Numerical risk measures for the annuity portfolio A, the two insurance portfolios L1 and L2, and the hedged portfolios P1 and P2.
Figure 1 provides a graphical assessment of the hedged portfolios using histograms.
Panel (a) shows the empirical distributions of P1 and P2, with dashed lines indicating
their VaR0.95. Consistent with the numerical results, P1 has a smaller VaR0.95, reflecting
lower liabilities compared to P2. Panel (b) displays the empirical distributions of the mean
adjusted portfolios P ̃1 and P ̃2 (defined in Table 1), again with dashed lines marking their
VaR0.95. In this panel, P2 shows smaller deviations from its mean than P1, confirming the
lower variance observed in the numerical measures.
This toy example illustrates how different numerical and graphical risk assessments can
lead to inconclusive results about hedge effectiveness. More importantly, such assessments
cannot capture the underlying relationship between the annuity portfolio A and the insur
ance portfolio L within the hedged position P. For example, when the realized liability
of P exceeds its VaR0.95, it is unclear whether this outcome reflects weak offsetting effect
2HMD. Human Mortality Database. Max Planck Institute for Demographic Research (Germany), University of California, Berkeley (USA), and French Institute for Demographic Studies (France). Available at www.mortality.org (data downloaded on 2 January 2024).
12

0
500
1000
1500
−2 −1 0 1 2 Mean Adjsuted Portfolio Liability
Count
(a) Liabilities for each hedged portfolio with pink and blue dashed lines denoting the VaR0.95 for P1 (pink) and P2 (blue), respectively.
0
2000
4000
6000
120 125 130 135 140 145 Portfolio Liability
Count
(b) Mean-adjusted liabilities for each hedged portfolio with pink and blue dashed lines denoting the VaR0.95 for P ̃1 and P ̃2, respectively.
Figure 1: Graphical risk assessment for the hedged portfolios P1 (pink) and P2 (blue).
between A and L, or whether both portfolios simultaneously contribute to large losses.
Answering such questions can help insurers to make more informed decisions in portfolio
selection and in the design of natural hedges, which we address in Section 3.
3 The Graphical Risk Metric
This section introduces a new graphical risk metric for natural hedging. The metric pro
vides a deeper analysis of the hedged position by examining the joint distribution of the
underlying annuity and insurance portfolios on a two-dimensional scale. In the following,
we first describe how this graphical risk metric is constructed and then develop an inter
pretation procedure that enables an enhanced risk assessment of the hedged position. To
illustrate the construction and interpretation, we continue to use the toy example outlined
in Section 2.4.
3.1 Constructing the metric
The construction of our graphical risk metric is inspired by the work of Chan et al. (2016),
who introduced a visual tool for evaluating population basis risk in index-based longevity
hedges. A brief review of the original method by Chan et al. (2016) is provided in Ap
pendix A.1. We adapt this approach to the context of natural hedging and construct a
two-dimensional assessment of the joint distribution of the underlying annuity and insur
ance portfolios, rather than focusing solely on the hedged position. This representation
13

enables direct visualisation of the dependence structure between the annuity and insurance
liabilities.
18
20
22
24
26
96 98 100 102 Annuity Portfolio
Insurance Portfolio
Figure 2: Graphical risk metric illustrating the joint distribution of the annuity portfolio A and the insurance portfolio L1 for the hedged position P1 from the toy example.
Figure 2 illustrates the result of applying the metric to the hedged position P1 from the
toy example. Details on how this figure is constructed are provided in Appendix A.2. The
x- and y-axes represent the present values of the annuity portfolio A and the insurance
portfolio L1, respectively. Each black dot corresponds to a realisation of (A, L1), while
the shaded pink regions denote joint prediction regions at different confidence levels. The
figure reveals a clear inverse relationship between A and L1, forming a downward-sloping
pattern in both the point cloud and the shaded regions.
The graphical risk metric illustrated in Figure 2 enables a visual evaluation of the hedge
effectiveness of a single portfolio. The same construction can be extended to compare
multiple hedged portfolios, which is particularly useful when several hedging opportunities
are available. Figure 3 illustrates such an extension by jointly displaying the annuity
portfolio A against two insurance portfolios, L1 and L2, corresponding to the hedged
positions P1 and P2 from the toy example. This extension allows for a direct comparison
of alternative natural hedges under a single visual platform.
Panel (a) of Figure 3 plots the annuity portfolio A against the corresponding insurance
14

20
30
40
50
94 96 98 100 102 Annuity Portfolio
Insurance Portfolio
(a) Unadjusted
−2.5
0.0
2.5
−2.5 0.0 2.5 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Mean-adjusted
Figure 3: Graphical risk metric illustrating the effectiveness of the hedged positions P1 (pink) and P2 (blue) from the toy example.
portfolios L1 and L2. Since the annuity is identical across both portfolios, the larger
insurance liabilities of L2 (relative to L1) result in higher total liabilities, consistent with
the numerical measures reported in Table 3. This outcome is expected, as the life insurance
policy from P2 is issued to a 50-year-old individual, whose higher mortality risk will lead
to greater liabilities than the 40-year-old policy from P1.
To enable a fairer comparison, Panel (b) of Figure 3 presents the mean-adjusted annuity
and insurance liabilities, represented by (A ̃, L ̃1) and (A ̃, L ̃2), whose joint prediction regions
are centred at the origin. The solid black line with slope −1 represents the benchmark
line, corresponding to scenarios in which deviations in the annuity and insurance liabilities
perfectly offset (i.e., A ̃+L ̃ = 0), resulting in a “perfect” hedge. Building on this benchmark,
we next introduce an interpretative procedure to analyse potential hedging outcomes based
on the mean-adjusted portfolios.
3.2 Interpreting the metric
To gain a comprehensive visual understanding of the risk profile underlying a hedged
position, we now develop an interpretation aid for the proposed graphical risk metric.
This aid functions as a diagnostic tool for analysing the joint behaviour of the annuity and
insurance portfolios. By representing all present value realisations in the (A ̃, L ̃) plane, it
15

enables visual assessment of how effectively deviations in the insurance liability offset those
in the annuity liability.
A
B
C
D
Too Much Insurance Liabilities
Too Much Insurance Liabilities
Not Enough Insurance Liabilities
Not Enough Insurance Liabilities
No Hedging Effect
No Hedging Effect
−4
−2
0
2
4
−4 −2 0 2 4 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(a) Interpretation
−4
−2
0
2
4
−4 −2 0 2 4 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Application
Figure 4: Interpretation procedure for the proposed graphical risk metric and its application to the hedged positions P1 (pink) and P2 (blue) from the toy example.
Figure 4 illustrates our interpretation procedure. Panel (a) defines the shaded regions
and benchmark lines used to classify hedging outcomes, where the shading corresponds to
different types of hedging outcome and the dashed lines indicate the magnitude of deviation
from a perfect hedge. To clarify the interpretation of these shaded regions, we provide brief
explanations of the scenarios marked by Points A, B, C, and D in Figure 4a:
• Point A: The annuity liability is $2 below its expected value, while the insurance
liability is $2 above. The surplus in the insurance liability fully offsets the annuity
shortfall, representing a perfectly hedged scenario. All points along the benchmark
line correspond to this ideal outcome.
• Point B: The annuity liability is $3 above its expectation, but the insurance liability
is only $2 below. The shortfall in the insurance liability leaves a net liability surplus
of $1 for the hedged position, corresponding to the case of Not Enough Insurance
Liabilities (red region).
• Point C: The annuity liability is $1 below its expected value, while the insurance
liability is $2 above. The excess in the insurance liability leads to a net liability
16

surplus of $1 for the hedged position, representing the case of Too Much Insurance
Liabilities (blue region).
• Point D: Both the annuity and insurance liabilities fall below their expectations, by
$1 and $1.5 respectively. This scenario creates a combined liability deficit of $2.5,
indicating the case of No Hedging Effect (grey region), where losses occur simultane
ously in both portfolios.
The two dashed lines in Figure 4a represent equal magnitudes of deviation from the
expected total liability, corresponding to either a surplus or a deficit of $1. Since Point D
lies below the lower dashed line, it immediately means that it has a larger magnitude of
deviation than Points B and C. Although Points B and C both have a surplus of $1, they
arise from different causes; Point B has insufficient insurance liabilities, while Point C has
excessive insurance liabilities. This distinction would not be apparent in a one-dimensional
graphical assessment, such as a histogram. Figure 5 extends this idea by showing simulated
realisations coloured by hedging outcome types.
−5.0
−2.5
0.0
2.5
5.0
−5.0 −2.5 0.0 2.5 5.0 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(a) Hedged position P ̃1
−5.0
−2.5
0.0
2.5
5.0
−5.0 −2.5 0.0 2.5 5.0 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Hedged position P ̃2
Figure 5: Simulated outcomes of P ̃1 and P ̃2, coloured by hedging outcome with the dashed line denoting the mean-adjusted VaR0.95.
Figure 5 presents 20,000 simulated realisations of (A ̃, L ̃1) and (A ̃, L ̃2) in Panels (a)
and (b), respectively. Points are coloured by the type of hedging outcome. Pink and blue
indicate Too Much Insurance Liabilities, leading to a surplus and deficit in total liability,
respectively. Green and teal denote Not Enough Insurance Liabilities, leading to a deficit
17

and surplus in total liability, respectively. Red and gold represent No Hedging Effect, where
both the insurance and annuity portfolios deviate in the same direction. The dashed lines
mark the mean-adjusted VaR0.95 of the corresponding hedged positions. Any realisations
above these lines exceed the respective VaR0.95 values reported in Table 3.
Comparing the simulated hedging outcomes in Figure 5, P ̃1 shows more realisations
associated with Not Enough Insurance Liabilities (green and teal) and No Hedging Effect
(red and gold) than P ̃2. Conversely, P ̃2 exhibits a higher frequency of Too Much Insurance
Liabilities (pink and blue), indicating that its insurance exposure tends to overcompensate
for annuity deviations. Among the outcomes that exceed the mean-adjusted VaR0.95 as
marked by the dashed lines, those from P ̃1 primarily arise from Not Enough Insurance
Liabilities (teal) and No Hedging Effect (gold), while those from P ̃2 are mostly driven by
Too Much Insurance Liabilities (pink).
We now return to Figure 4b, which applies the interpretation aid to compare P ̃1 and
P ̃2 by overlaying their joint prediction regions. The dashed lines above and below the solid
benchmark line represent equal magnitudes of surplus and deficit in the hedged position.
It is clear that the joint prediction region of P ̃1 extends further into the area associated
with Not Enough Insurance Liabilities, while P ̃2 covers more of the Too Much Insurance
Liabilities area. More importantly, the joint prediction region of P ̃1 extends above the
upper dashed line, indicating more severe (liability surplus) scenarios than that of P ̃2.
In conclusion, the proposed graphical risk metric complements numerical evaluation
by exposing the underlying hedging behaviour. Specifically, P2 achieves stronger offsets
between annuity and insurance liabilities but is more prone to excess insurance exposure,
whereas P1 faces greater downside risk from insufficient offsetting. These findings highlight
how the graphical risk metric reveals important behavioural differences between hedged
positions. In the next section, we apply this graphical framework to a broader set of
numerical illustrations to further explore its practical use and interpretive value.
4 Numerical Illustrations
We now demonstrate how the natural hedging framework and the graphical risk metric
can be applied to address practical natural hedging problems. Three illustrations are con
sidered: (1) identifying the most effective insurance portfolio, (2) selecting the optimal
hedge calibration technique, and (3) evaluating model risk arising from alternative mortal
ity projections. Each illustration follows the same framework as in Section 2 and employs
the graphical risk metric developed in Section 3. Appendix C provides the details of the
18

annuity and insurance portfolios considered in this section.
4.1 Illustration 1: Insurance Portfolio Selection
Our first illustration investigates how to identify an effective insurance portfolio for natural
hedging. Consider an insurer managing an annuity portfolio issued to individuals aged 40
60, with $10,000 annual payments starting at age 65. The insurer considers three candidate
insurance portfolios, each providing a death benefit of $750,000 payable at the end of the
year of death: (1) whole life policies issued to individuals aged 40-60 (I1), (2) whole
life policies issued to individuals aged 40-49 (I2), and (3) 20-year term policies issued to
individuals aged 40-49 (I3). The annual interest rate is assumed to be 4%, and the limiting
age is set at 100. Table 4 summarises how the natural hedging framework is applied to
this illustration. The three steps are applied consistently, with the only difference arising
from the features of the insurance portfolios.
Step Details
Step 1: Valuation
Derive the present values of the annuity portfolio (issuing ages 40-60, deferred to age 65, 35 annual payments of $10,000) and three candidate insurance portfolios with a $750,000 death benefit: I1 (issuing ages 40-60, whole life), I2 (issuing ages 40-49, whole life), and I3 (issuing ages 40-49, 20-year term). Step 2:
Calibration Calibrate hedge ratios h1, h2, and h3 using the variance-minimisation method.
Step 3: Evaluation
Construct the hedged portfolios P1, P2, and P3, and evaluate them comparatively using both numerical risk measures and the proposed graphical risk metric.
Projected Mortality
Mortality scenarios are generated using the bootstrapping method described in Appendix B.2, applied consistently across the valuation, calibration, and evaluation steps.
Table 4: Natural hedging framework applied to Illustration 1.
Table 5 reports the calibrated hedge ratios and numerical risk measures for the three
hedged portfolios. Based on the variance and the mean-adjusted VaR0.95, P1 outperforms
P2 and P3, whereas the VaR0.95 indicates that P3 performs best. To complement these nu
merical results and reveal the underlying hedging behaviour, Figure 6 presents the graphical
risk metric for the three hedged portfolios. In Panel (a), the unadjusted version shows that
the three portfolios differ in the magnitude of their calibrated insurance liabilities, with
P1 having the largest and P3 the smallest. The mean-adjusted version in Panel (b) shows
that P ̃1 aligns most closely with the benchmark line, indicating stronger offsetting between
19

annuity and insurance liabilities, P ̃2 exhibits greater variability with more outcomes falling
into the Not Enough Insurance Liabilities and Too Much Insurance Liabilities regions, and
P ̃3 displays the widest dispersion and more frequent No Hedging Effect.
Portfolio Hedge Ratio Variance VaR0.95 Mean-adjusted VaR0.95
P1 = A + h1 · I1 0.267 34,090 133,295 290 P2 = A + h2 · I2 0.275 112,252 123,496 563 P3 = A + h3 · I3 0.311 875,566 90,413 1,571
Table 5: Calibrated hedge ratios and numerical risk measures for Illustration 1.
20000
30000
40000
50000
60000
68000 70000 72000 74000 Annuity Portfolio
Insurance Portfolio
(a) Unadjusted
−2000
0
2000
−2000 0 2000 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Mean-adjusted
Figure 6: Graphical risk metric applied to the hedged positions P1 (yellow), P2 (blue) and P3 (pink) from Illustration 1.
In summary, this illustration demonstrates how the proposed framework and graphical
risk metric together facilitate the selection of an appropriate insurance portfolio for natural
hedging. Consistent with expectations, P1 with whole life policies issued to the same age
range as the annuity portfolio provides the most effective hedge. Restricting the insurance
portfolio to younger issuing ages, as in P2, increases variability and weakens the offset
between annuity and insurance liabilities. Further shortening the policy term to 20 years,
as in P3, amplifies this effect and leads to more outcomes with No Hedging Effect. These
results highlight that when issuing ages or policy terms deviate from those of the underlying
annuity portfolio, the effectiveness of natural hedging reduces and the residual risk becomes
more pronounced.
20

4.2 Illustration 2: Hedge Calibration
The second illustration examines how different hedge calibration methods affect the effec
tiveness of a natural hedge. Consider an insurer managing an annuity portfolio issued to
individuals aged 40-60, with $10,000 annual payments starting at age 65 for 20 years. The
insurer constructs an insurance portfolio of whole life policies issued to the same age range
and applies three different calibration methods for determining the hedge ratio: variance
minimisation (VM), duration-matching (DM), and delta-neutral (DN). Table 6 summarises
how the natural hedging framework is applied to this illustration. The valuation and eval
uation steps remain identical across the three methods, with the only difference lying in
the calibration step.
Step Details
Step 1: Valuation
Derive the present values of the annuity portfolio (issuing ages 40-60, deferred to 65, 20 annual payments of $10,000) and the insurance portfolio of whole life policies with a $750,000 death benefit issued to individuals aged 40-60.
Step 2: Calibration
Calibrate the hedge ratio using three different methods: h(V M) from the variance-minimisation method, h(DM) from the duration-matching method, and h(DN) from the delta-neutral method.
Step 3: Evaluation
Construct the hedged portfolios P(V M), P(DM), and P(DN), and evaluate them comparatively using both numerical risk measures and the proposed graphical risk metric.
Projected Mortality
Mortality scenarios are generated using the Lee-Carter model described in Appendix B.1, applied consistently across the valuation, calibration, and evaluation steps.
Table 6: Natural hedging framework applied to Illustration 2.
Table 7 reports the calibrated hedge ratios and numerical risk measures for the three
portfolios. The hedge ratios range between 0.189 and 0.211, with the smallest from dura
tion matching and the largest from delta neutral. As expected, P(V M) achieves the lowest
variance while P(DN) exhibits the highest risk across all measures. Figure 7 compares
the three hedged portfolios using the graphical risk metric. In Panel (a), the unadjusted
portfolios show that P(DM) requires the least amount of insurance liabilities, while P(DN)
requires the most, consistent with their respective hedge ratios. Panel (b) displays the
mean-adjusted portfolios, where P ̃(V M) lies closest to the benchmark line, indicating bal
anced offsetting between annuity and insurance liabilities. In contrast, P ̃(DM) tilts toward
the Not Enough Insurance Liabilities region, and P ̃(DN) toward the Too Much Insurance
21

Liabilities region, revealing systematic under- and over-hedging tendencies.
Portfolio Hedge Ratio Variance VaR0.95 Mean-adjusted VaR0.95
P(V M) = A + h(V M) · I 0.198 4,816 108,670 113 P(DM) = A + h(DM) · I 0.189 5,744 106,614 123 P(DN) = A + h(DN) · I 0.211 6,642 111,690 132
Table 7: Calibrated hedge ratios and numerical risk measures for Illustration 2.
42500
45000
47500
50000
52500
60000 61000 62000 63000 64000 65000 Annuity Portfolio
Insurance Portfolio
(a) Unadjusted
−1000
0
1000
−1000 0 1000 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Mean-adjusted
Figure 7: Graphical risk metric applied to the hedged positions P(V M) (yellow), P(DM) (blue), and P(DN) (pink) from Illustration 2.
In summary, this illustration shows how the choice of hedge ratio calibration method
influences both numerical performance and hedging behaviour. The variance-minimisation
method achieves the most balanced hedge, with the lowest variance and a symmetric
distribution of hedging outcomes. The duration-matching approach tends to under-hedge,
while the delta-neutral approach tends to over-hedge, leaving asymmetric residual risk
exposure in the hedged position. The numerical and graphical results jointly provide a
coherent view of the trade-offs underlying different calibration methods.
4.3 Illustration 3: Model Risk
Our final illustration examines the impact of model risk on natural hedging effectiveness.
Suppose an insurer uses the Lee-Carter (LC) model to calibrate a natural hedge but is
22

concerned that actual mortality may not be accurately described by it. To investigate
the risk that the mortality model assumed for calibration differs from the one generating
actual future mortality, the insurer considers two additional models for evaluation: the
Cairns-Blake-Dowd (CBD) model and a non-parametric bootstrapping (BS) model. The
goal is to assess whether the hedged position constructed by the LC model is robust to
alternative mortality generating methods. Table 8 summarises how the natural hedging
framework is applied to this setting. The annual interest rate is again assumed to be 4%,
and the limiting age is set at 100.
Step Details
Step 1: Valuation
Derive the present values of the annuity portfolio (issuing ages 40-60, deferred to age 65, 35 annual payments of $10,000) and the whole-life insurance portfolio with a $750,000 death benefit issued to the same ages.
Step 2: Calibration
Calibrate the hedge ratio h using the variance-minimisation method with mortality scenarios generated from the LC model.
Step 3: Evaluation
Construct and compare the hedged portfolios P(LC), P(CBD), and P(BS), which are evaluated using mortality scenarios generated by the LC, CBD, and BS models, respectively.
Projected Mortality
Mortality scenarios are generated from the LC model in the calibration step, and from the LC, CBD, and BS models in the evaluation step. The mortality generating processes are provided in Appendix B.
Table 8: Natural hedging framework applied to Illustration 3.
Table 9 reports the calibrated hedge ratio and numerical risk measures for the three
portfolios. The hedge ratio is identical across all portfolios (h = 0.310). When evaluated
by the same model used in the calibration step, P(LC) exhibits the lowest variance and
mean-adjusted VaR0.95. However, when mortality is generated from an alternative model,
P(CBD) shows substantially higher variability, while P(BS) lies between P(LC) and P(CBD)
in both variance and mean-adjusted VaR0.95. These results suggest that when a natural
hedge is both calibrated and evaluated under the LC model, its hedge effectiveness may
be significantly overestimated.
Figure 8 compares the three portfolios using the graphical risk metric. In Panel (a),
the unadjusted version shows that P(LC) exhibits the smallest joint prediction region,
while P(CBD) and P(BS) display much wider dispersion in both the annuity and insurance
portfolios. The mean-adjusted version in Panel (b) reveals that P ̃(LC) lies closest to the
benchmark line, whereas both P ̃(CBD) and P ̃(BS) tilt toward the Too Much Insurance
Liabilities region. This suggests that the LC-calibrated natural hedge tends to require an
23

Portfolio Hedge Ratio Variance VaR0.95 Mean-adjusted VaR0.95
P(LC) 0.310 1,628 143,093 67 P(CBD) 0.310 245,611 142,538 697 P(BS) 0.310 66,711 143,290 350
Table 9: Calibrated hedge ratio and numerical risk measures for Illustration 3.
excessive amount of insurance liabilities, resulting in suboptimal hedging outcomes when
actual mortality deviates from the LC model. This is an insight that cannot be easily
inferred from the numerical results alone.
66000
70000
74000
67500 70000 72500 75000 Annuity Portfolio
Insurance Portfolio
(a) Unadjusted
−2500
0
2500
−2500 0 2500 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Mean-adjusted
Figure 8: Graphical risk metric applied to the hedged positions P(LC) (yellow), P(CBD) (blue), and P(BS) (pink) in Illustration 3.
From Figure 8, we see that P ̃(CBD) extends beyond the dashed lines, while P ̃(BS) remains
within them, indicating that the CBD model implies more volatile and extreme hedging
outcomes than the non-parametric BS approach. To further illustrate their differences,
Figure 9 plots simulated realisations of P ̃(CBD) and P ̃(BS), coloured by hedging outcome.
Both portfolios show a concentration of realisations in the Too Much Insurance Liabilities
region. However, when compared against their respective mean-adjusted VaR0.95 thresholds
(marked by the dashed lines), the exceedances for P ̃(CBD) occur mainly due to Too Much
Insurance Liabilities, whereas for P ̃(BS), the exceedances arise across all three hedging
outcome types.
24

−5000
−2500
0
2500
5000
−5000 −2500 0 2500 5000 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(a) Hedged position P ̃(CBD)
−5000
−2500
0
2500
5000
−5000 −2500 0 2500 5000 Mean−adjusted Annuity Portfolio
Mean−adjusted Insurance Portfolio
(b) Hedged position P ̃(BS)
Figure 9: Simulated outcomes of P ̃(CBD) and P ̃(BS), coloured by hedging outcome with the dashed line denoting the mean-adjusted VaR0.95.
In summary, this illustration demonstrates that model risk can significantly distort the
perceived effectiveness of a natural hedge. When the mortality model used for evaluation
differs from the one used in calibration, the hedged position exhibits suboptimal perfor
mance and excess volatility under our natural hedging framework. The proposed graphical
risk metric complements traditional numerical measures by revealing how these distortions
arise from differing mortality dynamics and by exposing variations in hedging outcome
types that numerical summaries alone would overlook.
5 Conclusion
This paper developed a comprehensive framework for constructing and evaluating natural
hedging strategies, complemented by a graphical risk metric specifically designed for visual
assessment of natural hedges. The proposed framework unifies the valuation, calibration,
and evaluation steps of natural hedging to provide a structured process for comparing
different portfolio settings, calibration techniques, and mortality scenarios. The graphical
risk metric provides a new evaluation dimension by visualizing the joint distribution of
annuity and insurance liabilities and by distinguishing different hedging outcome types.
Together, these risk management tools form an integrated approach for analysing longevity
and mortality risks underlying a life insurer’s balance sheet.
25

The proposed natural hedging framework and graphical risk metric offer several prac
tical benefits. The framework enables consistent implementation of natural hedging across
multiple policy types, calibration techniques, and model assumptions. It is also highly
flexible and can accommodate various existing or newly developed natural hedging strate
gies beyond those demonstrated in this paper. The graphical risk metric complements the
framework as an innovative evaluation tool for assessing and comparing multiple natural
hedges when making hedging decisions. It further enhances interpretability by revealing
whether poor performance arises from insufficient or excessive diversification, or from a
lack of offsetting effects between liabilities.
Using three numerical illustrations, we demonstrated the capability and diagnostic
value of the proposed methods. The results show that the framework can identify trade
offs among different insurance portfolios, assess calibration techniques across variance
minimisation, duration-matching, and delta-neutral approaches, and evaluate hedge ro
bustness under alternative mortality scenario generators. In all cases, the graphical risk
metric reveals dependencies and asymmetries in hedge performance that are otherwise
hidden within numerical risk measures. Although the underlying risks differ across il
lustrations, the proposed methods effectively address each scenario, demonstrating their
flexibility and practical applicability.
This study has several limitations that call for further development. First, future
research could extend the framework to incorporate stochastic interest rates, dynamic
hedging strategies, and alternative mortality models. Second, the graphical risk metric
can be enhanced by asymmetric or non-convex joint prediction regions to capture skewed
risk profiles and sudden mortality shocks. Finally, the natural hedging framework could be
expanded to integrate solvency capital requirements and to support intuitive visualization
for regulatory solvency assessments. Together, these potential directions would further
advance the integration of natural hedging within longevity risk management research.
Conflict of Interest
The authors declare that they have no competing interests.
Data Availability
Replication code and data used in this study are available from the corresponding author
upon reasonable request. All simulated mortality and portfolio data were generated using
26

publicly available mortality inputs from the Human Mortality Database.
Funding
This research was supported by the Natural Sciences and Engineering Research Council of
Canada under Grant No. RGPIN-2025-04157 and DGECR-2025-00488. The funder had
no role in study design, data collection and analysis, decision to publish, or preparation of
the manuscript.
References
Blake, D., Dowd, K., and Cairns, A. J. (2008). Longevity risk and the grim reaper’s toxic
tail: The survivor fan charts. Insurance: Mathematics and Economics, 42(3):1062–1066.
Cairns, A. J. (2013). Robust hedging of longevity risk. Journal of Risk and Insurance,
80(3):621–648.
Cairns, A. J., Dowd, K., Blake, D., and Coughlan, G. D. (2014). Longevity hedge effec
tiveness: A decomposition. Quantitative Finance, 14(2):217–235.
Chan, W.-S., Li, J. S., Zhou, K. Q., and Zhou, R. (2016). Towards a large and liquid
longevity market: A graphical population basis risk metric. The Geneva Papers on Risk
and Insurance-Issues and Practice, 41:118–127.
Chen, H., Gao, J., and Zhu, W. (2024). A unified framework for insurance demand and
mortality immunization. North American Actuarial Journal, 28(2):469–490.
Coughlan, G. D., Khalaf-Allah, M., Ye, Y., Kumar, S., Cairns, A. J., Blake, D., and Dowd,
K. (2011). Longevity hedging 101: A framework for longevity basis risk analysis and
hedge effectiveness. North American Actuarial Journal, 15(2):150–176.
Cox, S. H. and Lin, Y. (2007). Natural hedging of life and annuity mortality risks. North
American Actuarial Journal, 11(3):1–15.
Cupido, K., Jevti ́c, P., Regis, L., and Zhou, K. Q. (2024). Spatial natural hedging: a gen
eral framework with application to the mortality of u.s. states. Scandinavian Actuarial
Journal, 0(0):1–29.
27

Dowd, K., Blake, D., and Cairns, A. J. (2010). Facing up to uncertain life expectancy:
The longevity fan charts. Demography, 47:67–78.
Gatzert, N. and Wesker, H. (2012). The impact of natural hedging on a life insurer’s risk
situation. The Journal of Risk Finance, 13(5):396–423.
Gatzert, N. and Wesker, H. (2014). Mortality risk and its effect on shortfall and risk
management in life insurance. Journal of Risk and Insurance, 81(1):57–90.
Jevtic ́, P. and Regis, L. (2015). Assessing the solvency of insurance portfolios via a
continuous-time cohort model. Insurance: Mathematics and Economics, 61:36–47.
Lee, R. D. and Carter, L. R. (1992). Modeling and forecasting us mortality. Journal of the
American statistical association, 87(419):659–671.
Li, J. S.-H. and Liu, Y. (2021). Recent declines in life expectancy: Implication on longevity
risk hedging. Insurance: Mathematics and Economics, 99:376–394.
Li, J. S.-H. and Luo, A. (2012). Key q-duration: A framework for hedging longevity risk.
Astin Bulletin: The Journal of the IAA, 42(2):413–452.
Li, J. S.-H. and Ng, A. C.-Y. (2011). Canonical valuation of mortality-linked securities.
Journal of Risk and Insurance, 78(4):853–884.
Lin, T. and Tsai, C. C.-L. (2014). Applications of mortality durations and convexities in
natural hedges. North American Actuarial Journal, 18(3):417–442.
Liu, Y. and Li, J. S.-H. (2017). The locally linear cairns–blake–dowd model: a note
on delta–nuga hedging of longevity risk. ASTIN Bulletin: The Journal of the IAA,
47(1):79–151.
Luciano, E., Regis, L., and Vigna, E. (2012). Delta–gamma hedging of mortality and
interest rate risk. Insurance: Mathematics and Economics, 50(3):402–412.
Luciano, E., Regis, L., and Vigna, E. (2017). Single-and cross-generation natural hedging
of longevity and financial risk. Journal of Risk and Insurance, 84(3):961–986.
Redington, F. M. (1952). Review of the principles of life-office valuations. Journal of the
Institute of Actuaries, 78(3):286–340.
Riffe, T. (2015). Reading human fertility database and human mortality database data
into r. Technical Report TR-2015-004, MPIDR.
28

Sherris, M., Xu, Y., and Ziveyi, J. (2020). Cohort and value-based multi-country longevity
risk management. Scandinavian Actuarial Journal, 2020(7):650–676.
Tsai, J. T., Wang, J. L., and Tzeng, L. Y. (2010). On the optimal product mix in life insur
ance companies using conditional value at risk. Insurance: Mathematics and Economics,
46(1):235–241.
Villegas, A. M., Kaishev, V. K., and Millossovich, P. (2018). StMoMo: An R package for
stochastic mortality modeling. Journal of Statistical Software, 84(3):1–38.
Wang, J. L., Huang, H., Yang, S. S., and Tsai, J. T. (2010). An optimal product mix for
hedging longevity risk in life insurance companies: The immunization theory approach.
Journal of Risk and Insurance, 77(2):473–497.
Yang, S. S., Huang, H.-C., and Yeh, Y.-Y. (2019). Optimal longevity hedging framework
for insurance companies considering basis and mispricing risks. The Journal of Risk and
Insurance, 86(3):783–805.
Zhou, K. Q. and Li, J. S.-H. (2021). Longevity Greeks: What do insurers and capital
market investors need to know? North American Actuarial Journal, 25(sup1):S66–S96.
Zhu, N. and Bauer, D. (2011). Applications of forward mortality factor models in life
insurance practice. The Geneva Papers on Risk and Insurance-Issues and Practice,
36(4):567–594.
Zhu, N. and Bauer, D. (2014). A cautionary note on natural hedging of longevity risk.
North American Actuarial Journal, 18(1):104–115.
A Metric Construction
A.1 Review of Chan et al. (2016)
Chan et al. (2016) proposed a graphical risk metric to visually assess population basis
risk that cannot be transferred through an index-based longevity hedge. It serves as a
visualization tool to identify the reference population with the lowest basis risk. In this
appendix, we briefly review the construction of this risk metric, which we adapted for
developing the graphical risk metric for natural hedging.
Suppose a hedger seeks to mitigate the longevity risk of its mortality-dependent li
abilities associated with population H that is proportional to a survivor measure S(H).
29

The hedger selects a mortality-dependent derivative linked to population R, with a payoff
proportional to a survivor index S(R). The graphical population basis risk metric aims to
visualize the potential deviations between the mortality dependent liabilities S(H) and the
derivatives S(R). Let C(i) = S(i) − E(S(i)) be the mean-adjusted value of S(i) for i = R
and H. Using C(i) instead of S(i) has two advantages: it focuses on deviations from the
expectation rather than the values themselves, and it centers the realisations of S(i) at the
origin, allowing visual comparison of outcome of different reference populations R.
Prior to constructing the graphical metric, Chan et al. (2016) incorporates a variance
minimization hedging approach, similar to the one provided in Section 2.2.1. The hedge
ratio is calibrated with realisations of C(R) and C(H), denoted as h(R) for the reference
population R. Therefore, the hedged position contains C(H) and h(R)C(R). The graphical
risk metric constructs multiple joint prediction regions, reflecting varying uncertainty levels,
defined by deviations between C(H) and h(R)C(R). Formally, the joint prediction region Jα
for (C(H), h(R)C(R)) is defined as
Pr C(H), h(R)C(R) ∈ Jα = 1 − α,
where α ∈ [0, 1] is the level of uncertainty, such that the area of Jα contains 100(1 − α)%
of the realisations of (C(H), h(R)C(R)). A higher level of population basis risk corresponds
to a larger area spanned by Jα for a given α.
Finally, the graphical population basis risk metric is constructed as follows:
1. Simulate N realisations of the mortality rates that are relevant to S(H) and S(R), and
use the simulated mortality rates to calculate N realized values of C(H) = S(H) −
E(S(H)) and C(R) = S(R) − E(S(R)).
2. Use the realized values of C(H) and C(R) to compute the hedge ratio h(R), and obtain
the hedged position consisting of C(H) and h(R)C(R).
3. For each realisation of Y := C(H), h(R)C(R) ′
, calculate the Mahalanobis distance to
the origin as Y′Σ−1Y, where Σ is the covariance matrix of Y and is estimated using
the N realisations of Y.
4. Order the N realisations of Y by their Mahalanobis distance, and select the obser
vations that have the shortest N (1 − α) distances with α = 0.1, 0.2, . . . , 0.9.
5. Enclose the selected N (1−α) observations of Y by drawing a convex hull to form the
joint prediction region for each α, where different values of α will be given different
levels of shading transparency.
30

A.2 Construction of the graphical risk metric
In this appendix, we provide the procedure for constructing the proposed graphical risk
metric for natural hedging. Recall from Table 1 that A and I are the present value random
variables of the annuity and insurance portfolios, respectively, in the valuation step. The
present value of the calibrated insurance portfolio is defined as L := L(h) = h · I, where
h is the hedge ratio computed in the calibration step. At the evaluation step, the hedged
portfolio is expressed as P(h) = A + L(h).
An objective of our graphical risk metric is to visualize the joint distribution of (A, L).
Figure A.1 presents the step-by-step progression of a graphical region construction for a
single portfolio. This portfolio is from the toy example with an issuing age of 40 for life
insurance. Figure A.1a shows a scatter plot of 20,000 realisations of (A, L), generated
by the Lee-Carter model. We observe an inverse relationship between A and L – as
A increases, L generally decreases, forming a downward sloping cloud of points. This
relationship is expected, as both variables depend on survival probabilities in opposite ways;
when projected survival probabilities rise, the present value of future annuity liabilities
increase, while the present value of future insurance liabilities decrease.
Following Chan et al. (2016), we measure the Mahalanobis distance for each pair (A, L)
to its expectation value (A, L), where A = E[A] and L = E[L]. The Mahalanobis distance
of the realisations Y := (A, L)′ to Y := (A, L)′ is calculated as
(Y − Y )′ Σ−1 (Y − Y ) ,
where Σ is the covariance matrix of Y. In Figure A.1b, the red dot at the center of the
cloud represents the position of Y, while the two red lines depicts the physical distance of
the realisations of Y to Y. The Mahalanobis distance can be interpreted as the physical
distance weighted by the covariance matrix Σ.
We are now ready to construct the graphical risk metric. Similar to Chan et al. (2016),
our proposed graphical risk metric consists of multiple joint prediction regions representing
different levels of uncertainty. For a probability α ∈ [0, 1], the joint prediction region Jα
for (A, L) is given by
Pr {(A, L) ∈ Jα} = 1 − α.
Figure A.1c displays the joint prediction region for α = 0.05, where J0.05 contains 95% of
the 20,000 realisations of (A, L).
Figure A.1d displays multiple joint prediction regions where different levels of shading
distinguish the varying values of α. As α increases, the corresponding joint prediction
31

20.0
22.5
25.0
94 96 98 100 102 Annuity Portfolio
Insurance Portfolio
(a) A scatter plot of 20,000 realisations of the assumed annuity and insurance portfolios, (A, L).
20.0
22.5
25.0
93 96 99 102 Annuity Portfolio
Insurance Portfolio
(b) Two red arrow lines indicating the physical distance from a realisation of (A, L) to the expectation point (A, L).
20.0
22.5
25.0
94 96 98 100 102 Annuity Portfolio
Insurance Portfolio
(c) Convex hull for J0.05, the joint prediction region that contains 95% of the 20,000 realisations of (A, L).
20.0
22.5
25.0
94 96 98 100 102 Annuity Portfolio
Insurance Portfolio
(d) A series of convex hulls for Jα, α = 0.05, 0.10, . . . , 0.95, with a darker degree of shading as α increases.
Figure A.1: The construction of graphical risk metric for natural hedging.
region is shaded darker. Figure A.1d illustrates the gradient effect of joint prediction
regions for α = 0.05, 0.10, . . . , 0.95. The layers of joint prediction regions form an oval
shape object, with the smallest region at the center containing 5% of the realisations and
32

the largest region, with the lightest shading, containing 95% of the realisations.
We outline the procedure for constructing a series of joint prediction regions for the
graphical risk metric for natural hedging:
1. Simulate N realisations of A and L using a selected mortality scenario generator,
such as the Lee-Carter model.
2. Calculate the Mahalanobis distance for each realisation of (A, L) to its empirical
expectation.
3. Sort the N realisations of (A, L) by their Mahalanobis distance, and subset the
observations with the shortest N (1 − α) distances for α = 0.05, 0.1, . . . , 0.95.
4. Draw a convex hull that encloses the selected N (1 − α) observations for each α,
adjusting the shading level as α changes.
B Mortality Scenario Generator
B.1 Model-based approach
To simulate survival probabilities under a stochastic mortality model, we apply the follow
ing procedure:
1. Data: Import data into R from the Human Mortality Database using the HMDHFD
plus R package (Riffe, 2015). We imported central death rates for lives aged x in year
t, denoted as mx,t, from the US male population with years 1970-2018 and age 40-99.
2. Fitting: Use the StMoMo package in R (Villegas et al., 2018) to:
(a) Define an StMoMo object for the selected model. For the Lee-Carter model,
define the object by lc(link = ‘‘log’’, const = ‘‘sum’’). For the Cairns
Blake-Dowd model, define the object by cbd(link = ‘‘logit’’).
(b) Fit the model using the fit() function, where the argument includes the
StMoMo model object and the mortality data to be fitted.
3. Projection: Project mortality rates using the simulate() function, where the ar
gument includes the fitted model, the number of sample paths, and the projection
horizon. The output consists of projected central death rates mx,t for the Lee-Carter
model and probabilities of death qx,t for the Cairns-Blake-Dowd model
33

4. Calculation: Substitute the projected mx, t values into equation (1) to obtain sim
ulated survival probabilities Sx(T ). For the Cairns-Blake-Dowd model, we convert
qx,t into mx,t using the constant force of mortality assumption.
B.2 Model-free approach
To generate stochastic survival probabilities from a non-parametric bootstrapping method,
we follow the procedure outlined in Li and Ng (2011).
1. Data: Import data into R from the Human Mortality Database using the HMDHFD
plus R package (Riffe, 2015). We imported central death rates for lives aged x in year
t, denoted as mx,t, from the US male population with years 1970-2018 and age 40-99.
2. Reduction calculation:
(a) Obtain historical mortality reduction rates for lives aged x in year t, denoted as
rx,t = mx,t+1
mx,t . Since the dataset spans 49 years (1970-2018), we have a total of
48 reduction rates for each age.
(b) Construct a mortality reduction matrix, where each row corresponds an age x
and each column denotes a year t. The mortality reduction matrix from our
data is
r=

    
r40,1970 r40,1971 . . . r40,2017
r41,1970 r41,1971 . . . r41,2017
... ... . . . ...
r99,1970 r99,1971 . . . r99,2017

    
.
(c) Form overlapping mortality reduction blocks of size two, following Li and
Ng (2011). We obtained 47 mortality reduction blocks, corresponding to
t = 1970, . . . , 2017: (r1970, r1971) , (r1971, r1972) , . . . , (r2016, r2017).
3. Pseudo sampling:
(a) Set the initial mortality rates to those from the most recent year in the dataset.
We set the initial rates to mx,2018 for x = 40, . . . , 99.
(b) Sample with replacement from the mortality reduction blocks to form a pseudo
reduction matrix of future mortality. We sampled 35 blocks with replacement
to project mortality for 70 future years.
34

(c) Calculate the projected mortality rates by multiplying the initial rates across
the pseudo reduction matrix. We calculated the projected values of mx,t for
x = 40, . . . , 99 and t = 2019, . . . , 2089.
(d) Repeat Steps 3(a)-3(c) to obtain multiple sets of projected mortality rates. We
repeated these steps 20,000 times.
4. Calculation: Substitute the projected mx,t values into equation (1) to compute
simulated survival probabilities Sx(T ).
C Numerical Illustration Details
This appendix summarises the policy specifications used in the numerical illustrations pre
sented in Section 4. Table C.1 outlines the issuing ages x, terms t, deferrals τ and weights
ω of the annuity and insurance portfolios considered in the three illustrations. Specifically,
Annuity Portfolio 1 and Insurance Portfolios 1-3 are used in Illustration 1, Annuity Port
folio 2 along with Insurance Portfolio 1 are used in Illustration 2, and Annuity Portfolio 1
together with Insurance Portfolio 1 are used in Illustration 3.
All portfolio weights are constructed using population counts from the U.S. male pop
ulation in year 2023, obtained from the Human Mortality Database via the HMDHFDplus
package (Riffe, 2015). For each issuing age x, the weight ωx is calculated as the proportion
of the population at age x relative to the total population across all ages considered in
that portfolio: ωx = Population count at age x
P
x′∈X Population count at age x′ ,
where X is the set of all ages considered.
35

j Annuity 1 Annuity 2 Insurance 1 Insurance 2 Insurance 3
xj ωj τj tj xj ωj τj tj xj ωj tj xj ωj tj xj ωj tj
1 40 0.0517 25 35 40 0.0517 25 20 40 0.0517 60 40 0.1084 60 40 0.1084 20 2 41 0.0512 24 35 41 0.0512 24 20 41 0.0512 59 41 0.1073 59 41 0.1073 20 3 42 0.0506 23 35 42 0.0506 23 20 42 0.0506 58 42 0.1062 58 42 0.1062 20 4 43 0.0494 22 35 43 0.0494 22 20 43 0.0494 57 43 0.1035 57 43 0.1035 20 5 44 0.0477 21 35 44 0.0477 21 20 44 0.0477 56 44 0.1000 56 44 0.1000 20 6 45 0.0467 20 35 45 0.0467 20 20 45 0.0467 55 45 0.0980 55 45 0.0980 20 7 46 0.0456 19 35 46 0.0456 19 20 46 0.0456 54 46 0.0955 54 46 0-
.0955 20 8 47 0.0450 18 35 47 0.0450 18 20 47 0.0450 53 47 0.0942 53 47 0.0942 20 9 48 0.0447 17 35 48 0.0447 17 20 48 0.0447 52 48 0.0937 52 48 0.0937 20 10 49 0.0445 16 35 49 0.0445 16 20 49 0.0445 51 49 0.0932 51 49 0.0932 20 11 50 0.0458 15 35 50 0.0458 15 20 50 0.0458 50 – – – – – 12 51 0.0484 14 35 51 0.0484 14 20 51 0.0484 49 – – – – – 13 52 0.0494 13 35 52 0.0494 13 20 52 0.0494 48 – – – – – 14 53 0.0480 12 35 53 0.0480 12 20 53 0.0480 47 – – – – – 15 54 0.0464 11 35 54 0.0464 11 20 54 0.0-
464 46 – – – – – 16 55 0.0458 10 35 55 0.0458 10 20 55 0.0458 45 – – – – – 17 56 0.0461 9 35 56 0.0461 9 20 56 0.0461 44 – – – – – 18 57 0.0471 8 35 57 0.0471 8 20 57 0.0471 43 – – – – – 19 58 0.0484 7 35 58 0.0484 7 20 58 0.0484 42 – – – – – 20 59 0.0488 6 35 59 0.0488 6 20 59 0.0488 41 – – – – – 21 60 0.0487 5 35 60 0.0487 5 20 60 0.0487 40 – – – – – 
Table C.1: Specifications and weights for the annuity and insurance portfolios used in the numerical illustrations.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:15.917Z
- **Text Length:** 75671 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
