# PDF Document: Han and Shah - 2025 - Synthetic Survival Control Extending Synthetic Controls for When-If Decision.pdf

**File Path:** Han and Shah - 2025 - Synthetic Survival Control Extending Synthetic Controls for When-If Decision.pdf

**Processed Date:** 2026-02-10T18:14:48.573Z

**File Size:** 590.97 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3228

**Title:** Synthetic Survival Control: Extending Synthetic Controls for "When-If" Decision

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Synthetic Survival Control: Extending Synthetic Controls for “When-If” Decision
Jessy Xinyi Han
Massachusetts Institute of Technology Cambridge, MA xyhan@mit.edu
Devavrat Shah
Massachusetts Institute of Technology Cambridge, MA devavrat@mit.edu
Abstract
Estimating causal effects on time-to-event outcomes from observational data is particularly challenging due to censoring, limited sample sizes, and non-random treatment assignment. The need for answering such “when-if” questions–how the timing of an event would change under a specified intervention–commonly arises in real-world settings with heterogeneous treatment adoption and confounding. To address these challenges, we propose Synthetic Survival Control (SSC) to estimate counterfactual hazard t-
rajectories in a panel data setting where multiple units experience potentially different treatments over multiple periods. In such a setting, SSC estimates the counterfactual hazard trajectory for a unit of interest as a weighted combination of the observed trajectories from other units. To provide formal justification, we introduce a panel framework with a low-rank structure for causal survival analysis. Indeed, such a structure naturally arises under classical parametric survival models. Within-
 this framework, for the causal estimand of interest, we establish identification and finite sample guarantees for SSC. We validate our approach using a multi-country clinical dataset of cancer treatment outcomes, where the staggered introduction of new therapies creates a quasi-experimental setting. Empirically, we find that access to novel treatments is associated with improved survival, as reflected by lower post-intervention hazard trajectories relative to their synthetic counterparts. Given t-
he broad relevance of survival analysis across medicine, economics, and public policy, our framework offers a general and interpretable tool for counterfactual survival inference using observational data.
1 Introduction
Understanding and modeling the time until an event of interest happens is a fundamental problem across various domains, ranging from patient survival in healthcare [Han et al., 2025b], equipment failure in engineering [Papathanasiou et al., 2023], criminal recidivism in criminal justice [Han et al., 2025a], to customer churn [Gao et al., 2024] and dynamic pricing in insurance [Choi et al., 2023]. Unlike classical machine learning algorithms focusing on binary or average outcomes, survival analysis-
 explicitly models how risk evolves over time generally through a survival function, which represents the probability of remaining event-free up to a certain time point, or a hazard (risk) function, which describes the instantaneous probability of the event occurring at a given moment, conditional on not having experienced the event yet. Moreover, survival analysis accounts for censoring, where the event of interest is not observed within the study window or is preempted by a censoring event. As S-
amuel Beckett writes in Waiting for Godot, “Nothing happens, nobody comes, nobody goes, it’s awful”–yet even the wait is informative. The absence of an event still revises our beliefs about underlying risk [Hu and Chen, 2024]. This time-to-event perspective enables us to understand not
Preprint. Under review.
arXiv:2511.14133v1 [cs.LG] 18 Nov 2025

just whether an event happens but also when and more specifically, how the probability of occurrence evolves as time passes.
In applied settings, survival analysis plays more than the aforementioned descriptive role through estimation of survival distributions; it can also be used inferentially to assess how interventions affect the timing and risk of events. For example, do novel cancer therapies prolong patient survival? Our work is motivated precisely by such a real-world problem in oncology: evaluating the effectiveness of new therapies for patients with relapsed or refractory T-cell lymphoma (TCL), a rare and aggre-
ssive form of blood cancer with historically poor prognosis [Han et al., 2025b]. Typically, cancer patients first receive an initial, or first-line, treatment. The disease is considered refractory if this initial treatment fails to work at all and called relapsed if it initially succeeds but the cancer later returns. In either scenario, patients then require an alternative, known as second-line, treatment. Recently, novel single agent (SA) have been adopted as choices for second-line therapies in -
the United States, while many other countries continue to rely primarily on conventional chemotherapy (CC). This staggered adoption across countries provides a natural quasi-experimental setting for investigating the causal effects of novel therapies on patient survival. Such investigations require constructing counterfactual survival functions, which are estimates of how patient survival trajectories would have evolved under alternative treatment strategies.
Inferring such counterfactual survival functions presents additional challenges beyond those faced in classical statistical analyses. First, survival analysis inherently deals with sparse data: individual-level right-censored data typically provides only a single observed time point—the minimum of the actual time-to-event and time-to-censoring, yet the goal is to recover full survival or hazard trajectories under different interventions. In the context of relapsed or refractory TCL, these challeng-
es are further exacerbated. As a rare disease, TCL has limited participation from clinical centers, resulting in small sample sizes and magnified statistical uncertainty. Moreover, its aggressive progression makes it difficult to distinguish survival patterns between treatment groups over short follow-up periods, intensifying the need for more effective therapies and reliable estimation methods. Adding to these difficulties, the available data are observational and collected retrospectively across-
 different countries and institutions. Treatment assignment is therefore non-random and occurs by country-level drug availability, making it particularly challenging to isolate causal effects from spurious associations.
To formalize this problem, it is helpful to situate it within a panel data setup. In classical panel data applications, the outcomes associated with a unit (e.g., country or institution) are repeated measurements of a scalar variable (a single real number) across multiple periods. Methods such as Synthetic Control [Abadie et al., 2010] and Synthetic Interventions [Agarwal et al., 2024] operate in such data-rich scenarios to leverage the structure among units for counterfactual estimations in the p-
resence of confounding. However, our setup is data-sparse by the nature of time-to-event data: each individual often contributes only one observed time-to-event, or none if censored. Moreover, our target is not a scalar but an entire hazard function over time. This leads to the central question of our work: Can methods like Synthetic Control, originally designed for scalar outcomes in data-rich scenarios, be generalized to handle functional, time-evolving survival processes under censoring in data-
-sparse setups?
1.1 Contributions
In this work, our main contribution is to address this question by bridging the gap between the literature on Synthetic Control and Survival Analysis. We propose a panel data setting for survival analysis where multiple units are present and each unit experiences one of the possible treatments in each period. Within a unit and period, we observe multiple observations of, potentially censored, time-to-event. The potential outcomes associated with units in periods under a treatment can be characteri-
zed through “potential survival functions”, which can be factorized into (latent) characteristics associated with units, periods, and treatments. This factorized representation is a natural extension of classical survival models such as Cox, where the log-hazard decomposes into additive contributions from baseline risk, covariates, and treatment. Generalizing this decomposition to higher dimensions suggests a low-rank or factorized structure, with latent unit and period factors playing the role of-
 unobserved confounders. Crucially, we allow for treatment assignment to arbitrarily depend on these (latent) factors of, thereby permitting (unobserved) confounding.
Within this causal framework, we consider a causal estimand analogous to that in the traditional framework of synthetic control (see Section 3.1). For such a causal estimand, we establish identi
2

fication under minimal conditions (see Theorem 1). To estimate the causal estimand, we propose the method of Synthetic Survival Control (SSC) (see Section 3.4.2). We establish finite sample consistency guarantee (and hence inference) property for such an estimator (see Theorem 2).
To demonstrate the soundness of the framework, we first validate it on synthetic data. We apply it to a real-world scenario in the context of evaluating outcomes associated with TCL cancer treatment. Specifically, through collaboration with leading cancer research institutes, we obtain clinical data across multiple countries (units) over different periods. For each patient, typically, there are multiple stages of treatment. We consider two stages (called first-line and second-line). Across all cou-
ntries, patients receive the treatment CC (called control) in stage one and two, with the exception of the United States where in the second stage, patients receive SA (called intervention). In each stage, the outcome of interest is the time to treatment failure, defined as either the initiation of a new line of therapy or death. Therefore, this naturally forms a panel setup for survival analysis with two periods (first stage and second stage of treatment). As it happens, the dataset also contains-
 patients in the US who receive CC in the second stage as well. We withhold such data and use SSC to do counterfactual estimation for patient outcomes in the US under CC in the second stage. We find that SSC faithfully recovers such counterfactual hazard function and thus validates the method. This is particularly significant given all the data challenges present in such observational clinical data.
Together, our work illustrates that counterfactual estimation on survival functions is feasible even with sparse, censored data when leveraging group-level quasi-experiments and survival-specific estimands. By integrating time-to-event modeling with causal inference, our work contributes to a growing literature on counterfactual survival analysis. In summary, this work offers a practical framework for survival-based counterfactual estimation, bridging methodological gaps and addressing real-world -
questions.
1.2 Organization
Section 2 reviews related work on causal inference for survival outcomes and synthetic control methods. Section 3 introduces our panel framework with low-rank structure, including identification, SSC estimator, and theoretical guarantees. Section 5 describes the TCL dataset and and presents our empirical findings on treatment efficacy. Section 6 discusses implications, limitations, and future direction.
2 Related Works
Synthetic Control, Panel Methods and Matrix Completion. Synthetic control methods reconstruct counterfactuals for a single treated unit by optimally weighting a pool of control units, under the assumption that a linear combination of controls can approximate the treated unit’s pre-treatment path. Abadie and Gardeazabal [2003] first applied this idea in economics to assess the costs of conflict in the Basque Country, and Abadie et al. [2010] formalized it in a statistical framework for comparative -
case studies. Subsequent work has extended and unified synthetic control with other panel-data approaches: Doudchenko and Imbens [2017] proposed a unified framework that integrates elements from synthetic controls, difference-in-differences (DiD), and regression-based approaches to address limitations inherent in each method when applied separately, and Xu [2017] proposed a generalized synthetic control via interactive fixed effects models. More recently, Arkhangelsky et al. [2021] blended synthet-
ic control with difference-in-differences in the synthetic DiD estimator, improving robustness to heterogeneous trends. Agarwal et al. [2024] extended the synthetic control estimator to a synthetic intervention method which addresses the complementary question of what could have happened had a control unit received the treatment. Extending scalar outcomes to distributions, Feitelberg et al. [2025] developed a latent-factor nearest-neighbor method for imputing missing empirical distributions in a s-
parsely observed matrix by leveraging Wasserstein geometry, but do not model temporal structure, censoring, or interventions.
Survival Analysis. Classical survival analysis focuses on modeling hazard and survival functions under censoring, with foundational works including Kaplan-Meier’s non-parametric estimator [Kaplan and Meier, 1958] and Cox’s proportional hazards model [Cox, 1972]. These works typically reply on assumptions like random assignment of treatment, non-informative censoring, no noncompliance and so on. Along with the development of causal inference, these strong assumptions are gradually relaxed. Robins a-
nd Tsiatis [1991] developed rank-preserving structural failure time models to correct
3

for noncompliance; Robins and Finkelstein [2000] proposed the inverse probability of censoring weighted (IPCW) method to address the missing data problem due to dependent censoring, and marginal structural models in Robins et al. [2000] use inverse-probability weighting to estimate time-varying treatment effects.
Causal Survival Analysis. Several recent studies have explored how to adapt causal inference methods to time-to-event outcomes. One line of work focuses on adapting DiD to the survival setting [Wu and Wen, 2022, Wooldridge, 2023, Deaner and Ku, 2024]. Cui et al. [2023] developed doubly robust and tree-based survival estimators. Other works take the perspective of matrix completion in past literature. For example, Gao et al. [2024] proposed a tensor block hazard model using 1-bit tensor completion -
for binary churn outcomes and intervention clustering but their method was focused on modeling the underlying propensity parameters that lead to binary events. This is different from our approach of adapting synthetic control’s weighting philosophy to hazard trajectories under a panel framework with low-rank structure.
3 Causal Framework: Panel Survival Analysis
In this section, we develop a causal framework for estimating counterfactual survival outcomes using panel data, with a motivating application introduced in Section 1, to evaluate the impact of novel cancer therapies on patient survival.
3.1 Setup
We begin by describing the causal survival analysis problem in its most fundamental form. Our TCL study is naturally panel-like: multiple individuals are observed across countries and lines of therapy. Assume there are N units (e.g. countries) and P periods (e.g. p ∈ {0, 1} first-line vs. second-line therapy).
Data Generating Process and DAG. To formalize the data generating process, we describe it in a directed acyclic graph (DAG) shown in Figure 1(a). For each unit n ∈ [N ] and period p ∈ {0, 1}, treatment assignment Dp,n ∈ {0, 1} acts on the event time τp,n ∈ R+ (through a hazard process defined below). Unit- and period-level covariates Xp,n influence both treatment and outcome. However, we do not observe τp,n directly, as it can be masked by the censoring
time Cp,n ∈ R+ if Cp,n < τp,n; we observe time Tp,n = min{τp,n, Cp,n} and the event indicator ∆p,n = I{τp,n ≤ Cp,n}.
Potential Outcomes. Following the potential outcomes framework of Splawa-Neyman et al. [1990] and Rubin [1974], we define the potential hazard function
h(d)
p,n(t) := ∆litm→0
P(t ≤ τ (d)
p,n < t + ∆t | τ (d)
p,n ≥ t)
∆t , t ∈ [0, τe]
which represents instantaneous risk of event occurrence under treatment d at time t for unit n in period p since time-to-event tracking, as opposed to the typical calendar time. Because late-time survival data are sparse and unstable, we restrict attention to a finite evaluation horizon τe > 0.
As such, h(d)
p,n(t) induces the potential survival function S(d)
p,n(t) = exp(− R t
0 h(d)
p,n(s)ds) and density
f (d)
p,n(t) = h(d)
p,n (t)S (d)
p,n(t) of the potential event time τ (d)
p,n .
In our TCL example, d = 0 denotes conventional chemotherapy (CC), while d = 1 corresponds to novel single-agent (SA) therapy. Each patient can only receive one type of therapy in a treatment line and thus, we can never observe all possible potential outcomes – this is the fundamental challenge of causal inference.
3.2 Causal Estimand
Given the model encoded in Figure 1a, we define our causal estimand formally. For a specific unit n, our target is θn(·) = h(0)
1,n(·), which captures the potential hazard trajectory in the post-period p = 1 under control (d = 0). Returning to our motivating example, the estimand corresponds to the potential hazard trajectory in the second-line therapy under the control treatment CC.
4

Xp,n
Dp,n τp,n
Cp,n
Tp,n
(a) Fully observed confounders
τn,p
Dn,p
Cn,p
Tn,p
Vn Up period p
unit n
(b) Unobserved confounder with factor structure
Figure 1: DAGs of panel data generating processes. Dashed arrows indicate potential confounding paths. Gray and light pink nodes are latent at the time of analysis. Dp,n: treatment assignment, τp,n: event time, Cp,n: censoring time, Tp,n: observed time. Figure (a) shows the most fundamental case with fully observed covariates Xp,n; (b) shows the setup where Xp,n are unobserved and consist of latent unit factor Vn and latent period factor Up. The unit n ellipse contains all unit-related information-
 while the period p ellipse contains all period-related information.
For identification and estimation, we have the following assumptions.
Assumption 1 (SUTVA). Fix a period p ∈ {0, 1}.
(a) No interference. For every unit n ∈ [N ], treatment level d ∈ {0, 1}, and any two assignment profiles d−n, d′−n ∈ D[N]\{n} for all units other than n,
τ (d)
p,n, C(d)
p,n has the same distribution under (dp,n = d, dp,−n) and under (dp,n = d, d′
−n).
Equivalently, for each n and d, (τ (d)
p,n, C(d)
p,n) depends only on dp,n and not on dp,−n.
(b) Consistency. If unit n receives treatment Dp,n = d, then the event time and censoring time coincide with the corresponding potential quantities, i.e.,
τp,n = τ (d)
p,n and Cp,n = C(d)
p,n,
Assumption 1 ensures that factual hazards match counterfactual potential hazards under the assigned treatment, and there are no cross-individual spillovers.
Assumption 2 (Non-informative Censoring). τp,n ⊥ Cp,n | (Dp,n, Xp,n).
Assumption 2 allows us to treat censored subjects as if they were removed at random from the risk set, so the remaining risk set stays representative 1.
3.3 Case 1: No Unobserved Confounding
In the setting when we have a rich collection of covariates, a natural modeling assumption is that all pertinent covariates (and hence confounders) are observed. We first discuss how observed data can be utilized for estimating potential outcomes of interest in a simple single-period setting. This allows us to better understand the data generating process and separate the fundamental difficulties of causal survival analysis from those specific to the panel structure.
1Note that we assume this mainly for readability and clarity. A natural extension of our current framework using techniques like inverse probability censoring weighting (IPCW)[Robins and Finkelstein, 2000] should work if this assumption is relaxed.
5

3.3.1 Identification
For identification, we also need the following positivity assumption.
Assumption 3 (Positivity). For each period-unit (p, n), any covariate configuration that occurs with positive probability must admit a positive probability of receiving the control treatment d = 0. Formally, Pr(Dp,n = 0|Xp,n = x) > 0 for all x ∈ support(Xp,n).
We now present the identification result.
Proposition 1 (Identification Under No Unobserved Confounding). Suppose Assumption 1-3 and no unobserved confounding, {τ (0)
p,n, τ (1)
p,n} ⊥ Dp,n | Xp,n. Then for some fixed time horizon τe > 0, the marginal potential hazard function is identified as
h(0)
p,n(t) = EX hp,n(t | Dp,n = 0, Xp,n)Sp,n(t | Dp,n = 0, Xp,n)
EX Sp,n(t | Dp,n = 0, Xp,n) , t ∈ [0, τe].
See Proof in Appendix A.
3.3.2 Estimation
Data. In period p ∈ {0, 1}, we observe survival data for each unit (country in our example) n ∈ [N ] consisting of Kp,n independent observations (patients in our example). For observation i = 1, . . . , Kp,n, they contribute the assigned treatment Dp,n,i, features Xp,n,i and censored time-toevent observation (Tp,n,i, ∆p,n,i).
Time-to-event Modeling. Based on Proposition 1, we boil down the problem of estimating the potential hazard function to estimating the observational conditional hazard hp,n(t | Dp,n = 0, Xp,n) and survival functions Sp,n(t | Dp,n = 0, Xp,n) . This can be done using standard survival models with certain modeling structures. For example, the Cox model encodes the additional structure assumption that covariates contribute to the hazard function multiplicatively, i.e.,
h(d)
p,n(t | Xp,n) = eh(t) exp(β⊤Xp,n + γd), (1)
where eh(t) is a baseline hazard.
In fact, Equation (1) implies that the log-hazard decomposes additively into a baseline term
α(t) = log eh(t), covariate contribution β⊤X, and treatment effect γd. More generally, this suggests representing the transformed hazard surface by an additive (or low-rank) decomposition: α(t) + β(X) + γ(d). Such a representation naturally generalizes to higher-dimensional arrays of transformed hazards indexed by units, periods, treatments, and time, motivating the low-rank structure formulation developed in Section 3.4 later.
Handling Censoring. Note that Assumptions 2 and 3 ensure that hp,n(t | Dp,n = d, Xp,n) and Sp,n(t | Dp,n = d, Xp,n) are estimable from right-censored data. For example, if the event-time model has parameter η, a probability density function f (·) and a survival function S(·), and the
censoring model has parameter ψ, a probability density function fe(·) and a survival function Se(·), then under Assumption 2, we have: for unit n, period p and dt → 0+,
Pr(t ≤ Tp,n < t + dt, ∆p,n = 1 | Dp,n, Xp,n)
= fp,n(t | Dp,n, Xp,n; η)Sep,n(t | Dp,n, Xp,n; ψ)dt
Pr(t ≤ Tp,n < t + dt, ∆p,n = 0 | Dp,n, Xp,n)
=
fep,n(t | Dp,n, Xp,n; ψ)Sp,n(t | Dp,n, Xp,n; η)dt.
6

Hence, likelihood-based survival methods like the Cox model can continue working with the observeddata’s log-likelihood
l(η, ψ) =
X
n,p,i
h
∆p,n,i log fp,n(Tp,n,i | Dp,n,i, Xp,n,i; η) + log Sep,n(Tp,n,i | Dp,n,i, Xp,n,i; ψ)
+ (1 − ∆p,n,i) log fep,n(Tp,n,i | Dp,n,i, Xp,n,i; ψ) + log Sp,n,i(Tp,n,i | Dp,n,i, Xp,n,i; η)
i
∝
X
n,p,i
h
∆p,n,i log fp,n(Tp,n,i | Dp,n,i, Xp,n,i; η)
+ (1 − ∆p,n,i) log Sp,n(Tp,n,i | Dp,n,i, Xp,n,i; η)
i
.
Note that the ψ-terms and η-terms nicely decompose. As such, maximizing over η-terms only is equivalent to maximizing l(η, ψ) with observed data.
Estimation Procedure. We now formally state the estimation procedure for θn(t) = h(0)
1,n(t) for all t in some fixed time horizon [0, τe] for a specific unit n. We introduce the usage of the Cox proportional hazards model and present its consistency result in Section 3.3.3. Note that we are utilizing known results in literature for Cox proportional hazards model. In its place, other methods from literature can be utilized in its place and prior results from literature may provide similar guarantees.
(1) Step 1: Fit a Cox proportional hazards model
h1,n(t | D1,n, X1,n) = eh(t) exp(β⊤X1,n + γD1,n),
obtaining (βb, b
Λe(t) := R t
0
b
eh(s)ds) via the Breslow estimator [Breslow, 1975].
(2) Step 2: Predict potential conditional hazard and survival for each individual by setting the treatment to be the control. Given n and indices of observed data i = 1, . . . , K1,n, regardless of their observed treatment,
bh(0)
1,n,i(t) = b
eh(t) exp(βb⊤X1,n,i), where b
eh(t) is a derivative of b
Λe 0,d (t),
Sb(0)
1,n,i(t) = exp
Å
−
b
Λe(t) · exp(βb⊤X1,n,i)
ã
.
(3) Step 3: Plug-in.
bh(0)
1,n(t) =
P
i
bh(0)
1,n,i(t)Sb(0)
1,n,i(t)
P
i
Sb(0)
1,n,i(t)
.
3.3.3 Consistency Result
Our estimator for the marginal potential hazard h(0)
1,n(t) builds on the Cox proportional hazards model introduced in Section 3.3.2. Under standard regularity assumptions and independent censoring, the Cox partial-likelihood estimator βb is asymptotically consistent and asymptotically normal, and the
Breslow estimator of the baseline cumulative hazard b
Λe(t) converges uniformly to Λe(t) on compact time intervals [Cox, 1972, Tsiatis, 1981]. Consequently,
Sb1,n(t | D = 0, X1,n,i) = exp
Å
−
b
Λe(t) exp(βb⊤X1,n,i)
ã
−p→ S1,n(t | D = 0, X1,n,i)
uniformly in t ∈ [0, τe]. Thus, our estimator of the marginal counterfactual hazard,
bh(0)
1,n(t) =
P
i
bh1,n(t | D = 0, X1,n,i)Sb1,n(t | D = 0, X1,n,i)
P
i
Sb1,n(t | D = 0, X1,n,i) ,
inherits consistency by the continuous mapping theorem.
7

3.4 Case 2: Unobserved Confounding
In practice, only a subset of the covariates may be observed. The unobserved components confound both treatment assignment and outcomes, making direct identification of causal survival functions challenging, if not infeasible. Moreover, Assumption 3 may be violated due to limited availability of certain treatment. These motivate need for additional structure for our setting with unobserved confounding.
We notice that persistent latent characteristics of units (e.g., country-level differences in healthcare infrastructure, patient mix, or access to medical technology) influence both treatment assignment and outcomes. Similarly, there are persistent latent characteristics of period (e.g., second-line patients have specific biological, disease-specific conditions that are persistent across countries). These characteristics or factors can be considered to be stable over the duration of the study. Thi-
s suggests factorization of characteristics as Xp,n = (Vn, Up) where Vn represents unit characteristics or factors and Up represent period characteristics or factors. We shall consider Vn and Up to be latent or unobserved. As we discussed near the end of the manuscript, this framework has potential to extend to additional observed covariates and is left for future work.
Because each unit can only adopt one treatment per period, at most one of the potential hazard functions is observed. Estimating counterfactual survival trajectories is therefore equivalent to imputing missing hazards across the unit-period-treatment tuples, which is illustrated in Figure 2.
Unitn
Periodp
Time t
...
D=1
...
D=0
?
?
Pre
Post
Pre
Post
I(") I($)
I(") I($)
Figure 2: Visualization of the setup. I(0)and I(1) denotes the control group and treatment group respectively. The shaded area represents the observed data while the question mark region denotes our target.
Factorization of Survival Function. The distribution of time-to-event τn,p, i.e. the survival function, depends on Xp,n. We imposed restriction that Xn,p separates or factorizes into unit specific component Vn and period specific component Up. More precisely, we impose the following low-rank factorization structure on survival function that factorizes into components that unit specific and period specific. We state the formal assumption first and then provide its justification.
Assumption 4 (Survival Factor Model). For all p ∈ [P ], n ∈ [N ] and t ∈ [0, τe], the potential
survival function under control S(0)
p,n(t) = ⟨up(t), vn⟩, where up : [0, τe] → Rr are (latent) period
factors and vn ∈ Rr are (latent) unit factors for some r ≥ 1.
To understand why Assumption 4 follows naturally once we impose structural separation of Xn,p into unit specific component Vn and period specific component Up, let us recall the Cox model. In such a model, we have that logarithm of hazard function having form
log hp,n(t | D = d, Xp,n = (Vn, Up)) = log eh(t) + β⊤Xp,n + γd,
where eh(·) is a baseline hazard, β being model parameter, γ capturing treatment effect. Writing Xp,n = [VnUp] as a vector with corresponding element-wise split of β = [β1β2], we have
log h(d)
p,n(t) = log hp,n(t | D = d, Xp,n = (Vn, Up))
= log eh(t) + β⊤
1 Vn + β⊤
2 Up + γd.2
8

Denote an = exp(β1⊤Vn), bp = exp(β2⊤Vp), and using the fact that survival function is exponential of negative integral of hazard function, we obtain (for d = 0)
S (0)
p,n(t) = exp −
Zt
0
h(0)
p,n(s)ds
= exp −
Zt
0
eh(s) exp β⊤
1 Vn + β⊤
2 Up ds
= exp an −
Zt
0
bpeh(s)ds
= exp an ̃bp(t) , (2)
where  ̃bp(t) = − R t
0 bpeh(s)ds.
We consider the following elementary fact (see Appendix B for a proof):
Lemma 1. Given ∀x, |x| ≤ B and ε ∈ (0, 1),
ex −
r−1
X
k=0
xk
k! ≤ ε,
as long as r ≥ 5 max(B, ln 1
ε ).
This suggests that
S (0)
p,n(t) ≈
r−1
X
k=0
1
k! ak
nb ̃k
p (t).
By writing vn = [akn : 0 ≤ k ≤ r − 1] ∈ Rr and up(t) = [ 1
k! ̃bpk(t) : 0 ≤ k ≤ r − 1] with
up : R≥0 → Rr, we obtain
S (0)
p,n(t) ≈ ⟨up(t), vn⟩. (3)
That is, Assumption 4 is (approximately) satisfied. More generally, for a number of parametric models, it can be checked that S(0)
p,n(t) is a smooth nonlinear transformation of a bilinear form similar to (2). For such settings, like Lemma 1, this would result into approximate low-rank factorization like (3) (also see Proposition 1, Abadie et al. [2025]). This provides natural justification for Assumption 4.
Selection on Latent Factors. Analogous to the unconfoundedness assumption in classical causal inference, we require that once latent factors are conditioned upon, treatment assignment is independent of potential hazards:
Assumption 5 (Selection on Latent Factors).
S ⊥ D | LF,
where S = {S(d)
p,n(t)}p,n,d,t, realized treatment assignments D = {(p, n) : Dp,n observed}, LF = {up(·), vn}p,n.
Together, Assumptions 4 and 5 provide the structural basis for imputing missing entries of S and thereby estimating counterfactual hazard trajectories.
Causal Estimand. Building upon the definition in Section 3.2, our target causal estimand is θn(·) = S(0)
1,n(·), for a given treated unit n ∈ I(1). Thus it captures the potential transformed hazard
trajectory for an treated unit n ∈ I(1) under control during the post-treatment period, conditional on latent factors. Returning to our motivating example, the estimand corresponds to the true transformed hazard trajectory from second-line treatment onward had the US continued using CC instead of adopting novel SA.
2This is similar to two-way fixed effect in econometrics literature.
9

3.4.1 Identification
We now turn to the identification question: under what assumptions can we recover the unobserved counterfactual trajectories θn(·) for treated units n ∈ I(1)?
Assumption 6 (Linear Span Inclusion). For each treated unit n ∈ I(1), there exists weights wn,m ∈
R|I(0)| such that vn = P
m∈I(0) wn,m · vm.
Assumption 6 states that within the space of latent unit factors, the treated unit n can be represented as a weighted average of control during the post-intervention period and such weights are period- and time-invariant.
It is a direct relaxation of the “convex span” condition in synthetic control and utilized in prior works such as synthetic interventions. It ensures that counterfactual outcomes for experimental units can be approximated as weighted averages of control group outcomes. In the context of our motivating example, Assumption 6 requires USA’s latent factors to be expressed as a weighted sum of the remaining countries’ latent factors in the post-intervention period.
It is worth noting that Assumption 4 implies that all unit-specific latent factors {vn}nN=1 ⊂ Rr lie in an r-dimensional subspace for some fixed r. Let Vi = span{v1, . . . , vi} denote the subspace
generated by the first i vectors. Then the sequence (dim Vi)N
i=1 is nondecreasing and bounded above by r. Hence, there exist at most r indices i1, . . . , ir ∈ [N ] such that dim(Vij ) = dim(Vij−1) + 1, i.e., vectors vij that introduce new linearly independent directions. Equivalently, all but at most r of the vectors {vn}nN=1 lie in the span of their predecessors. Thus, with N large enough, Assumption 6 should be satisfied for almost all (with exception of r units in the worst case).
We now state the identification result.
Theorem 1. Given the assumptions above, we have
S (0)
1,n(·) =
X
m∈I (0)
wn,m S 0
1,m(·).
where h(d)
p,m(·) and hpd,m(·) are the counterfactual and factual hazard function of unit m in period p under treatment d.
See proof in Appendix C. This means the counterfactual post-treatment transformed hazard for treated unit n under control is identified by a linear combination of post-treatment transformed hazards from control units, using weights determined by pre-treatment similarity in latent space.
3.4.2 Synthetic Survival Control (SSC) Estimator
Data. In period p ∈ {0, 1}, we observe survival data for each unit n ∈ [N ] consisting of Kp,n independent observations. For observation i = 1, . . . , Kp,n, they contribute the assigned treatment Dp,n,i and censored time-to-event observation (Tp,n,i, ∆p,n,i).
Estimation Procedure. Consider a treated unit n ∈ I(1) of interest. Let I(0) be N0 control donor
units and I(1) the treated unit(s).
(1) Time-to-event estimation. For every donor m ∈ I(0) and both periods p ∈ {0, 1}, and for the target treated unit n in the pre–period p = 0, fit a Kaplan–Meier estimator to obtain
Sb0
p,l(t), t ∈ [0, τe], l ∈ {n} ∪ I(0).
This inherently handles censoring in patient-level data {Tp,n,i, ∆p,n,i} to estimate the underlying hazard functions for each unit-period combination. The accuracy of these estimates depend on the number of observations Kp,n within each unit-period. See Section D for more details of time-to-event estimation with Kaplan-Meier empirically.
(2) Common grid subsampling. Choose a finite grid T = {t1, . . . , tT0 } ⊂ [0, τe] and subsample from the estimated survival functions to form vectors for all l ∈ {n} ∪ I(0),
Sbp,l := Sbp,l(t1), . . . , Sbp,l(tT0 ) ⊤.
10

(3) Weights from the pre–period. Stack all control units’ pre–period columns into the T0 × N0 matrix Sb0,I(0) := [Sb0,m]m∈I(0) and the treated unit’s pre vector Sb0,n(·). We wish to utilize the Principal Component Regression (PCR) algorithm (cf. Agarwal et al. [2024]) to learn weights. Specifically, compute the top-r0 singular value decomposition of Sb0,I(0) (with r0 chosen by a gap rule, elbow, or cross-validation as explained in Agarwal et al. [2024]):
Sb0,I(0) =
r0
X
i=1
sbiubivb⊤
i , V“0 := [vb1, . . . , vbr0 ] ∈ RN0×r0 .
We estimate weights wb by projecting onto the rank-r0 space and imposing the constraint:
wb ∈ arg min
w∈RN0
Sb0,n − Sb0,I(0) w 2
2 s.t. (I − V“0V“⊤
0 )w = 0,
which has a closed form solution wb = Pr0
i=1 1/sbivbiub⊤
i
Sb00,n.
(4) Post–period extrapolation and inverse transform. Form the counterfactual transformed trajectory for the experimental unit n in the post period:
Sb(0)
1,n(t) =
X
m∈I (0)
wbn,mSb0
1,m(t), t ∈ [0, τe].
In the context of TCL example, the estimator learns a set of weights that minimizes pre-intervention discrepancy between the US and a weighted combination of countries that maintained CC throughout the study period after pre-processesing Sb0,I(0) by obtaining its rank-r0 approximation. Then this weighted average forms our synthetic USA. Accordingly, the estimator applies the learned weights to the post-intervention outcomes of the control countries to estimate the counterfactual hazards trajectory-
 of the US under continued CC after drug offering shift.
Note that in this work, we introduce the use of the Kaplan-Meier estimator for the first step timeto-event estimation. The subsequent finite-sample consistency guarantee is also focused on this approach. Other time-to-event estimators can be applied as well and their finite-sample consistency property analyses are left for future works.
3.4.3 Finite Sample Consistency
We analyze the consistency of our SSC estimator.
First, we state additional assumptions for such analysis. Let S0,I(0) ∈ RT0×N0 be the pre-intervention matrix for units remaining under control, where N0 = |I(0)| is the number of control units and T0 is
the number of evaluation timestamps in T ⊆ [0, τe]. We also note that the survival functions S(0)
p,n(·) are naturally bounded between 0 and 1.
Assumption 7 (Well-conditioned Spectrum). The expectation of the control group pre-treatment matrix satisfies: cond(S0,I(0) ) ≤ ξ′, and ∥S0,I(0) ∥2
F ≥ ξ′′N0T0 for some constants ξ′, ξ′′ > 0, where ∥ · ∥F is the Frobenius norm.
Assumption 8 (Latent time-period span). We assume the post-period specific factors lie in the span of pre-period specific factors, i.e., ∀t ∈ T , u1(t) ∈ span({u0(s) : s ∈ T }) conditional on {LF, D}.
We now state the main result characterizing the consistency of our estimator.
Theorem 2 (Consistency of Counterfactual Transformed Hazard Estimation). Fix a treated unit n ∈ I(1). Let θbn(t) := Sb(0)
1,n(t) denote the survival synthetic control estimate of the counterfactual
transformed hazard θn(t) := S(0)
1,n(t), K = minp,n{Kp,n} be the minimum number of observations per unit and period across all units and periods, T0 be the number of evaluation timestamps in T ⊆ [0, τe], and r0 be defined in the estimtaion procedure. Then, if K > c max{T0, N0}(log N0 + log max{T0, N0}) for some constant c,
sup
t∈T
θbn(t) − θn(t) = Op r3/4
0 T −1/4
0 + r2
0 max
n
N 1/2
0 T −3/2
0 , T −1/2
0 , N −1/2
0
o
!
.
See proof in Appendix E.6.
11

4 Synthetic Validation
To begin with, we consider a simulation setting where we generate observations as per the data generating model introduced in this work. As argued, the SSC method should be able to provide a consistent estimator for such a setting, and we can verify it given the prior knowledge of the data generating process. As we do so, we shall aim to validate a few aspects. First, SSC method is able to provide consistent estimation across a number of popular parametric models from survival analysis literature.-
 Since the SSC method is agnostic to the underlying data generating mechanism, this would suggest robustness of SSC across different types of data characteristics. Second, understanding the role of different aspects of the data on method performance. While theoretical results provide performance guarantees, such data-driven analysis helps set guidelines for using SSC in empirical studies.
Simulation Setup. In each simulation, we consider N = 20 units in the same panel setup introduced in Section 3, with one unit designated as the treated unit that switches from the control treatment D = 0 in the pre-period p = 0 to the intervention treatment D = 1 in the post-period p = 1, and all other units remaining under control (D = 0) in both periods. For each period–unit pair (p, n) we generate Kp,n ∈ {100, 300, 700} independent samples of right–censored time–to–event data
(Tp,n,i, ∆p,n,i) = min{τp,n,i, Cp,n,i}, 1{τp,n,i ≤ Cp,n,i} ,
where censoring times Cp,n,i ∼ Exp(ν) are independent of τp,n,i conditional on Dp,n, Up, Vn , satisfying the independent censoring Assumption 2. We set the censoring rate to be below 10% by choosing ν so that the empirical censoring proportion is approximately 10% across designs. Latent factors (Vn, Up) are drawn i.i.d. from N (0, Ir) with r = 4 and then fixed throughout the simulation.
For the event-time models, we consider two canonical survival specifications.
1. Cox proportional hazards model. For each unit n and period p ∈ {0, 1}, we generate potential event times under control from
h(0)
p,n(t) = eh(t) exp β⊤
1 Vn + β⊤
2 Up , eh(t) ≡ λ > 0,
with λ fixed (we take λ = 0.05 in all experiments) and the coefficient vectors β1, β2 ∈ Rr are drawn
as β1, β2
i.i∼.d. N (0, Ir). The implied survival function under control is thus
S (0)
p,n(t) = exp − λt exp β⊤
1 Vn + β⊤
2 Up ,
and potential event times τ (0)
p,n are sampled via inverse transform:
τ (0)
p,n = − log W
λ exp(β1⊤Vn + β2⊤Up) , W ∼ Unif(0, 1).
2. Aalen’s additive hazards model. For each unit n and period p ∈ {0, 1}, we generate potential event times under control from
h(0)
p,n(t) = eh′(t) + β′⊤
1 Vn + β′⊤
2 Up, eh′(t) ≡ λ0 > 0.
with the coefficient vectors β′1, β′2 ∈ Rr are drawn as β′1, β′2
i.i∼.d. N (0, Ir). To guarantee nonnegative hazards, we choose λ0 = 0.05 − minp∈{0,1},n∈[N] β′1⊤Vn + β′2⊤Up . Thus, the potential event
times τ (0)
p,n are sampled via inverse transform:
τ (0)
p,n = − log W
λ0 + β′1⊤Vn + β′2⊤Up
, W ∼ Unif(0, 1).
Evaluation metrics. For the treated unit n, let θn(t) = S(0)
1,n(t) denote the true post–period control
survival trajectory based on the true data generating process and θbn(t) its SSC estimate, both evaluated on a common time grid T = {t1, . . . , tT0 } ⊂ [0, τe]. Specifically, the evaluation horizon is set to be τe := quantile0.90({Tp,n,i}) , which trims extreme right tails where empirical support is sparse, stabilizing the downstream survival estimates. And the grid is then chosen as T0 = 100 equally spaced timestamps T = linspace(0, τe, T0). We quantify estimation accuracy using the sup–norm err-
or
∥
θbn − θn∥∞ := max
t∈T
θbn(t) − θn(t) ,
which directly captures the worst–case deviation between the estimated and true trajectories.
12

0 10 20 30 40 Time
0.0
0.2
0.4
0.6
0.8
1.0
Survival probability
DGP: Cox
0.0 0.5 1.0 1.5 Time
DGP: Aalen
True SSC Confounder-Aware Parametric Estimator
Figure 3: Counterfactual survival estimation under two DGPs. Post-period control survival trajectory for the treated unit under: (i) the true DGP, (ii) SSC, and (iii) the Confounder-Aware Parametric Estimator which observes the true latent factors and fits the correctly specified parametric survival model. SSC closely approximates the true curve in both Cox and Aalen models.
100 300 700 K
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
SSC Sup-Norm Error
DGP: Cox
100 300 700 K
DGP: Aalen
Figure 4: SSC sup-norm errors across sample sizes. Distribution of sup-norm estimation errors for SSC under Cox and Aalen DGPs over 20 simulations each. Errors decrease rapidly with increasing sample size K, and variability contracts accordingly.
Evaluation results. Figure 3 compares, in one example simulation with K = 700 observations for each period-unit pair, the post-treatment control survival trajectory of the treated unit from the true data generating proces, SSC estimator and Confounder-Aware Parametric Estimator, which observes the true latent factors and fits the correctly specified parametric survival model. In both the Cox and Aalen settings, the SSC estimator closely matches the ground-truth trajectory. The agreement is particu-
larly notable because SSC does not rely on any knowledge of the underlying survival model or the latent confounders. Its estimates also closely track those of the Confounder-Aware Parametric Estimator. This demonstrates that SSC can recover the correct counterfactual trajectory even when the data are generated from structurally distinct models and fully latent confounding variables that are agnostic to the SSC estimator itself.
We repeat the simulation process for 20 times for K = {100, 300, 700} each respectively and Figure 4 reports the distribution of sup-norm errors for SSC as the number of observations per unit-period increases. Both DGPs exhibit a clear and rapid reduction in error as K grows: both the median error and variability shrink substantially from K = 100 to K = 700.
Table 1 summarizes the mean and standard deviation of SSC’s sup-norm error across repeated simulations. In both DGPs, SSC achieves diminishing average errors as K increases. The ConfounderAware Parametric Estimator consistently attains lower error, as expected, since it is given access
13

Table 1: Sup-norm error summary for Cox and Aalen DGPs. Reported are mean ± standard deviation across simulations.
DGP K SSC Error
(mean ± sd)
Confounder-Aware Parametric Estimator Error (mean ± sd)
Cox 100 0.1177 ± 0.0835 0.0247 ± 0.0121 Cox 300 0.0652 ± 0.0497 0.0204 ± 0.0096 Cox 700 0.0542 ± 0.0413 0.0194 ± 0.0104
Aalen 100 0.0621 ± 0.0307 0.0185 ± 0.0052 Aalen 300 0.0507 ± 0.0388 0.0136 ± 0.0067 Aalen 700 0.0245 ± 0.0102 0.0099 ± 0.0044
to the true confounders and the correct parametric form, but the performance gap narrows quickly with increasing K. This convergence in accuracy highlights SSC’s ability to fully exploit the latent low-rank structure without requiring model knowledge or observing the confounders themselves.
Overall, the synthetic experiments demonstrate that SSC is accurate, robust across model classes, and exhibits the expected improvement with additional data.
5 Empirical Application: Evaluating Novel Therapies for T-cell Lymphoma
To complement the synthetic validation, we now demonstrate the use of SSC in our motivating clinical example for evaluating the second-line therapies for relapsed and refractor TCL. This application fits precisely into our SSC framework as all countries prescribe CC in both lines of treatment except the USA, as the treated unit, switches to prescribe the novel SA in second-line. Our multi-country dataset naturally supplies a donor pool of control units so that we can use our SSC estimation procedu-
re to leverage the control units to construct a synthetic control for the USA under CC in the second-line and compare it against the factual USA receiving the novel SA treatment. This section therefore applies SSC to quantify the superiority of treatment efficacy of the novel SA in TCL and to assess estimator fidelity using a held-out USA-CC cohort.
5.1 Data
We use a retrospective clinical dataset on 925 patients with relapsed and refractory TCL from 13 institutions across 10 countries. The data includes time-to-event information and treatment assignments (SA, as intervention, or CC, as control). Follow-up occurred from the date of cancer diagnosis until death, loss to follow-up, or end of study.
The analysis defines the first-line treatment period as pre-period (p = 0) and the second-line treatment as post-period (p = 1). The treatment assignment Dp,n indicates whether a patient received SA (Dp,n = 1) or CC (Dp,n = 0) in period p. For each patient, the observed time Tp,n,i is the minimum of the time-to-event (τp,n,i) and time-to-censoring (Cp,n,i). The censoring indicator is ∆p,n,i = 1 if τp,n,i ≤ Cp,n,i, and 0 otherwise. Since the target outcome is failure of treatment, in the pre-period-
, the event is death or start of second-line treatment, and censoring is loss-to-followup; in the post-period, the event is death or start of third-line treatment, and censoring is loss-to-followup.
5.2 Analysis and Results
Our empirical estimand is the counterfactual second-line survival trajectory for the USA had it continued prescribing CC rather than adopting SA. Applying the SSC procedure, we estimate the USA-SA cohort’s counterfactual survival under CC in second-line and report the pre- and postperiod survival curves in Figure 5. The factual USA trajectory under SA (denoted in orange line) exhibits consistently higher survival than its synthetic control (denoted in blue dash line), suggesting superiority in eff-
icacy of SA relative to CC.
To validate the estimator, we exploit the fact that we observe a cohort of USA patients who received CC in the second-line treatment. A necessary step is to establish that the held-out USA-CC and USA-SA cohorts do not differ systematically at baseline. We compare the two cohorts along a comprehensive
14

0 2 4 5 7 9 11 Time
0.0
0.2
0.4
0.6
0.8
1.0
Survival probability
Pre-intervention
Synthetic USA USA
0 2 4 5 7 9 11 Time
0.0
0.2
0.4
0.6
0.8
1.0
Survival probability
Post-intervention
Synthetic USA (CC) USA (SA) USA (Held-out CC)
Figure 5: Pre-/Post-treatment survival function: USA factual (SA in second-line, orange), synthetic counterfactual under CC (blue), USA held-out (CC in second-line, green).
set of prognostic, clinical, demographic, and laboratory variables, including International Prognostic Index (IPI), Prognostic Index for T-cell lymphoma (PIT), disease characteristics, and standard laboratory markers. Continuous covariates are assessed using two-sample t-tests and binary covariates using chi-squared tests. In addition, we compute standardized mean differences (SMDs), interpreting SMD < 0.1 as negligible imbalance and SMD < 0.2 as acceptable. Across all covariates, hypothesis tests-
 yielded p-values > 0.1, and all SMDs were below 0.2 (with the majority below 0.1), indicating that the two cohorts are well balanced at baseline. This comparability enables the held-out USA-CC cohort to serve as a real-world benchmark for assessing estimator fidelity. We also note that the USA-CC cohort is completely hidden from our SSC estimator, thus no information leakage. Figure 5 shows that SSC closely matches the true USA–CC trajectory in the second-line, supporting the credibility of the s-
ynthetic control estimation.
To further assess robustness, we perform 500 bootstrap resamples of the donor pool and recompute the synthetic USA-CC counterfactual for each resample. The resulting 95% bootstrap confidence interval is shown in Figure 6 alongside the ground truth USA-CC trajectory. The synthetic estimates remain stable across resamples and the confidence band closely overlaps the held-out USA-CC curve throughout the post-period. This bootstrap analysis highlights the robustness of SSC to sampling variability and -
provides additional empirical support for the accuracy of our estimator in a real clinical setting.
0 2 4 5 7 9 11 Time
0.0
0.2
0.4
0.6
0.8
1.0
Survival probability
Post-intervention: Bootstrapped Synthetic USA vs Held-out USA
Synthetic USA (median) Held-out USA (CC)
Figure 6: Bootstrapped 95% CI for synthetic USA SA cohort under CC, alongside the USA CC cohort “ground truth”, in post-period. The shaded blue region represents the 95% CI.
15

Table 2: Comparability of baseline characteristics between USA SA and CC cohorts. Values are reported as mean (standard deviation) unless otherwise noted. There is no statistical evidence of imbalance between the USA CC and SA cohorts across a broad set of clinically relevant baseline characteristics.
Variable USA SA mean (std) USA CC mean (std) p-value SMD
Prognostic Score
IPI Score 2.52 (0.98) 2.58 (0.99) 0.715 0.06 PIT Score 1.65 (1.03) 1.76 (1.03) 0.518 0.10
Clinical
Histology: AITL (%) 38.2 (48.6) 31.7 (46.5) 0.337 0.14 Mean duration 1st line (yrs) 0.94 (1.17) 0.96 (1.09) 0.906 0.01 Refractory (%) 41.2 (49.2) 39.8 (48.9) 0.923 0.03 Extranodal >1 (%) 24.1 (42.8) 26.9 (44.4) 0.707 0.06 Stage 3.29 (0.88) 3.31 (0.92) 0.861 0.02 ECOG Score 0.81 (0.74) 0.89 (0.85) 0.407 0.11
Demographics
Age > 60 (%) 54.1 (49.8) 44.2 (49.7) 0.143 0.20 Race: White (%) 0.79 (0.41) 0.78 (0.42) 0.765 0.04 Sex: Female (%) 37.6 (48.5) 30.8 (46.2) 0.304 0.14
Laboratory
Ki67 ≥ 40% 30.6 (46.1) 31.7 (46.5) 0.949 0.02 Abnormal ALC 41.9 (49.3) 37.8 (48.5) 0.679 0.08 Abnormal Albumin 38.8 (48.7) 40.0 (49.0) 0.973 0.02 Abnormal HepB_cAb 2.33 (0.51) 2.31 (0.53) 0.869 0.03
6 Conclusion
This paper develops a causal framework for survival analysis in panel settings and applies it to evaluate impact of novel TCL therapies. Our method extends synthetic control techniques to the hazard domain, enabling counterfactual estimation with observational panel data.
Empirically, we find that access to novel SA therapies in the US is associated with a significant reduction in post-treatment hazard rates compared to a synthetic control constructed from countries that continue to rely on CC. This suggests that SA may provide a meaningful clinical benefit in prolonging survival among patients with aggressive TCL subtypes. Our framework also enables rigorous validation: by comparing synthetic USA under CC to actual USA-CC patient outcomes, we show that the synthet-
ic control reproduces key survival trends in held-out data. This supports the internal validity of the estimated counterfactual survival.
Several limitations merit discussion. First, we assume non-informative censoring, which may not hold in all clinical settings. Extensions using IPCW [Robins and Finkelstein, 2000] or joint modeling should help relax this. Second, we do not directly leverage the observed covariates in the unobserved confounding panel setup. Future work could explore extensions to time-dependent treatment regimes and the incorporation of high-dimensional covariates. We expect our framework to be extended to applicat-
ions in other domains where timing matters.
16

References
Alberto Abadie and Javier Gardeazabal. The economic costs of conflict: A case study of the basque country. American Economic Review, 93(1):113–132, March 2003. doi: 10.1257/000282803321455188. URL https://www.aeaweb.org/articles?id=10.1257/ 000282803321455188.
Alberto Abadie, Alexis Diamond, and Jens Hainmueller and. Synthetic control methods for comparative case studies: Estimating the effect of california’s tobacco control program. Journal of the American Statistical Association, 105(490):493–505, 2010. doi: 10.1198/jasa.2009.ap08746. URL https://doi.org/10.1198/jasa.2009.ap08746.
Alberto Abadie, Anish Agarwal, and Devavrat Shah. A causal inference framework for data rich environments, 2025. URL https://arxiv.org/abs/2504.01702.
Anish Agarwal, Devavrat Shah, and Dennis Shen. On Model Identification and Out-of-Sample Prediction of Principal Component Regression: Applications to Synthetic Controls, 2023. URL http://arxiv.org/abs/2010.14449.
Anish Agarwal, Devavrat Shah, and Dennis Shen. Synthetic interventions, 2024. URL https: //arxiv.org/abs/2006.07691.
Dmitry Arkhangelsky, Susan Athey, David A. Hirshberg, Guido W. Imbens, and Stefan Wager. Synthetic difference-in-differences. American Economic Review, 111(12):4088–4118, December 2021. doi: 10.1257/aer.20190159. URL https://www.aeaweb.org/articles?id=10.1257/ aer.20190159.
E. Breslow, N. ̇ Analysis of survival data under the proportional hazards model. International Biometric Society, 62:269–272, 1975.
Young-Geun Choi, Gi-Soo Kim, Yunseo Choi, Wooseong Cho, Myunghee Cho Paik, and MinHwan Oh. Semi-parametric contextual pricing algorithm using Cox proportional hazards model. In Andreas Krause, Emma Brunskill, Kyunghyun Cho, Barbara Engelhardt, Sivan Sabato, and Jonathan Scarlett, editors, Proceedings of the 40th International Conference on Machine Learning, volume 202 of Proceedings of Machine Learning Research, pages 5771–5786. PMLR, 23–29 Jul 2023. URL https://proceedings.mlr.press/v202/choi23c.-
html.
D. R. Cox. Regression models and life-tables. Journal of the Royal Statistical Society: Series B (Methodological), 34(2):187–220, 1972. doi: 10.1111/j.2517-6161.1972.tb00899.x.
Yifan Cui, Michael R Kosorok, Erik Sverdrup, Stefan Wager, and Ruoqing Zhu. Estimating heterogeneous treatment effects with right-censored data via causal survival forests. Journal of the Royal Statistical Society Series B: Statistical Methodology, 85(2):179–211, 02 2023. doi: 10.1093/jrsssb/qkac001. URL https://doi.org/10.1093/jrsssb/qkac001.
Ben Deaner and Hyejin Ku. Causal Duration Analysis with Diff-in-Diff, May 2024.
Nikolay Doudchenko and Guido W. Imbens. Balancing, regression, difference-in-differences and synthetic control methods: A synthesis, 2017. URL https://arxiv.org/abs/1610.07748.
Jacob Feitelberg, Kyuseong Choi, Anish Agarwal, and Raaz Dwivedi. Distributional matrix completion via nearest neighbors in the wasserstein space, 2025. URL https://arxiv.org/abs/2410. 13112.
Antonia Foldes and Lidia Rejto. Strong Uniform Consistency for Nonparametric Survival Curve Estimators from Randomly Censored Data. The Annals of Statistics, 9(1): 122–129, 1981. ISSN 0090-5364, 2168-8966. doi: 10.1214/aos/1176345337. URL https://projecteuclid.org/journals/annals-of-statistics/volume-9/issue-1/ Strong-Uniform-Consistency-for-Nonparametric-Survival-Curve-Estimators-from-Randomly/ 10.1214/aos/1176345337.full.
Chenyin Gao, Zhiming Zhang, and Shu Yang. Causal customer churn analysis with low-rank tensor block hazard model, 2024. URL https://arxiv.org/abs/2405.11377.
17

Jessy Xinyi Han, Kristjan Greenewald, and Devavrat Shah. Fairness is more than algorithms: Racial disparities in time-to-recidivism, 2025a. URL https://arxiv.org/abs/2504.18629.
Jessy Xinyi Han, Min Jung Koh, Leora Boussi, Mark Sorial, Sean M. McCabe, Luke Peng, Shambhavi Singh, Ijeoma Julie Eche-Ugwu, Judith Gabler, Maria J. Fernandez Turizo, Caroline T. MacVicar, Aditya Garg, Alexander Disciullo, Kusha Chopra, Alexandra Lenart, Emmanuel Nwodo, Jeffrey Barnes, Min Ji Koh, Eliana Miranda, Carlos Chiattone, Robert Stuver, Steven M. Horwitz, Mwanasha Merrill, Eric Jacobsen, Martina Manni, Monica Civallero, Tetiana Skrypets, Athina Lymboussaki, Massimo Federico, Yuri Kim, Ji-
n Seok Kim, Jae Yong Cho, Thomas Eipe, Tanuja Shet, Epari Sridhar, Alok Shetty, Saswata Saha, Hasmukh Jain, Manju Sengar, Carrie Van Der Weyden, Henry Miles Prince, Ramzi Hamouche, Tinatin Murdashvili, Francine Foss, Marianna Gentilini, Beatrice Casadei, Pier Luigi Zinzani, Takeshi Okatani, Noriaki Yoshida, Sang Eun Yoon, Won-Seog Kim, Girisha Panchoo, Zainab Mohamed, Estelle Verburgh, Jackielyn Cuenca Alturas, Mubarak Al-Mansour, Josie Ford, Maria Elena Cabrera, Amy Ku, Govind Bhagat, Helen Ma, A-
hmed Sawas, Khyati Maulik Kariya, Makoto Iwasaki, Forum Bhanushali, Owen A. O’Connor, Enrica Marchi, Changyu Shen, Devavrat Shah, and Salvia Jain. Global outcomes and prognosis for relapsed/refractory mature t-cell and nk-cell lymphomas: results from the petal consortium. Blood Advances, 9(3):583–602, 01 2025b. ISSN 2473-9529. doi: 10.1182/bloodadvances.2024014674. URL https://doi.org/10.1182/bloodadvances.2024014674.
Shu Hu and George H. Chen. Fairness in survival analysis with distributionally robust optimization. Journal of Machine Learning Research, 25(246):1–85, 2024. URL http://jmlr.org/papers/ v25/23-0888.html.
E. L. Kaplan and P. Meier. Nonparametric estimation from incomplete observations. Journal of the American Statistical Association, 53(282):457–481, 1958. doi: 10.1080/01621459.1958.10501452.
Dimitris Papathanasiou, Konstantinos Demertzis, and Nikos Tziritas. Machine failure prediction using survival analysis. Future Internet, 15(5), 2023. ISSN 1999-5903. doi: 10.3390/fi15050153. URL https://www.mdpi.com/1999-5903/15/5/153.
J. M. Robins, M. A. Hernán, and B. Brumback. Marginal structural models and causal inference in epidemiology. Epidemiology, 11(5):550–560, 2000. doi: 10.1097/00001648-200009000-00006.
James M. Robins and Dianne M. Finkelstein. Correcting for noncompliance and dependent censoring in an aids clinical trial with inverse probability of censoring weighted (ipcw) log-rank tests. Biometrics, 56(3):779–788, 2000. doi: https://doi.org/10.1111/j.0006-341X.2000.00779.x. URL https://onlinelibrary.wiley.com/doi/abs/10.1111/j.0006-341X.2000.00779.x.
James M. Robins and Anastasios A. Tsiatis. Correcting for non-compliance in randomized trials using rank preserving structural failure time models. Communications in Statistics - Theory and Methods, 20(8):2609–2631, 1991. doi: 10.1080/03610929108830654. URL https://doi.org/ 10.1080/03610929108830654.
Donald B. Rubin. Estimating causal effects of treatments in randomized and nonrandomized studies. Journal of Educational Psychology, 66(5):688–701, 1974. doi: 10.1037/h0037350.
Jerzy Splawa-Neyman, D. M. Dabrowska, and T. P. Speed. On the application of probability theory to agricultural experiments. essay on principles. section 9. Statistical Science, 5(4):465–472, 1990. ISSN 08834237, 21688745. URL http://www.jstor.org/stable/2245382.
Anastasios A. Tsiatis. A large sample study of cox’s regression model. The Annals of Statistics, 9(1): 93–108, 1981. ISSN 00905364, 21688966. URL http://www.jstor.org/stable/2240872.
Per-Åke Wedin. Perturbation bounds in connection with singular value decomposition. BIT Numerical Mathematics, 12(1):99–111, 1972. ISSN 1572-9125. doi: 10.1007/BF01932678. URL https: //doi.org/10.1007/BF01932678.
Jeffrey M Wooldridge. Simple approaches to nonlinear difference-in-differences with panel data. The Econometrics Journal, 26(3):C31–C66, September 2023. ISSN 1368-4221, 1368-423X. doi: 10.1093/ectj/utad016.
18

Lawrence L. Wu and Fangqi Wen. Hazard Versus Linear Probability Difference-in-Differences Estimators for Demographic Processes. Demography, 59(5):1911–1928, October 2022. ISSN 0070-3370, 1533-7790. doi: 10.1215/00703370-10207604.
Yiqing Xu. Generalized synthetic control method: Causal inference with interactive fixed effects models. Political Analysis, 25(1):57–76, 2017. doi: 10.1017/pan.2016.2.
19

A Proof of Proposition 1
Proof. All the following proof is for a specific unit n and period p and thus we omit the subscripts for simplicity.
By the consistency and exchangeability assumption,
S(d)(t) = EX [S(d)(t | D = d, X)] = EX [S(t | D = d, X = x)] (4)
f (d)(t) = EX [f (d)(t | X = x)] = EX [f (t | D = d, X = x)]. (5)
Importantly, unlike S(d)(t) or f (d)(t), as the instantaneous rate of event occurrence given that the
event has not happened, h(d)(t) = f(d)(t)
S(d)(t) does not decompose linearly over covariates X; that is, the
marginal hazard h(d)(t) ̸= EX [h(t|D = d, X)]. Instead, it follows from (4) and (5) that
h(d)(t) = f (d)(t)
S(d)(t) = EX [f (t | D = d, X)]
EX [S(t | D = d, X)] = EX [h(t | D = d, X)S(t | D = d, X)]
EX [S(t | D = d, X)] .
B Proof of Lemma 1
The Lagrange form of the Taylor remainder gives, for some c between 0 and x,
Rr(x) = ex −
r−1
X
k=0
xk
k! = ec
r! xr.
Hence, for all |x| ≤ B,
|Rr(x)| ≤ e|c|
r! |x|r ≤ eB
r! Br.
By the lower bound in Stirling’s inequality,
r! ≥ r
e
r
,
so that
|Rr(x)| ≤ eB
Å eB r
ãr
.
Thus, we wish to show that
eB
Å eB r
ãr
≤ ε if r ≥ 5 max{B, ln(1/ε)}.
We consider two cases.
Case 1: ln(1/ε) ≥ B. Then r ≥ 5 ln(1/ε) and r ≥ 5B, hence eB
r ≤ eB
5 ln(1/ε) ≤ e
5.
Therefore, since e
5 < 1 and B ≤ ln(1/ε),
eB
Å eB r
ãr
≤ ε−1 e
5
r
≤ ε−1 e
5
5 ln(1/ε)
= ε5 ln 5−6 ≤ ε.
since 5 ln 5 − 6 > 1.
Case 2: B ≥ ln(1/ε). Now r ≥ 5B, so
eB
Å eB r
ãr
≤ eB e
5
5B
= exp B(6 − 5 ln 5) .
Since 6 − 5 ln 5 ≈ −2.047 ≤ −1, we obtain
exp B(6 − 5 ln 5) ≤ e−B ≤ e− ln(1/ε) = ε.
In both cases, eB(eB/r)r ≤ ε, thus we have
r ≥ 5 max{B, ln(1/ε)} =⇒ eB
Å eB r
ãr
≤ ε.

C Proof of Theorem 1
Proof. Consider a treatment unit n ∈ I(1) and time t ∈ [T ]. By Assumption 4 and 5,
S (0)
1,n(t) = ⟨u1(t), vn⟩.
By Assumption 6, there exists weights {wn,m}m∈I(0) such that:
vn =
X
m∈I (0)
wn,m · vm.
Substituting into the expression above:
S (0)
1,n(t) =
∞
u1(t),
X
m∈I (0)
wn,mvm
∫
=
X
m∈I (0)
wn,m · ⟨u1(t), vm⟩ =
X
m∈I (0)
wn,m · S(0)
1,m(t).
D Time-to-event Estimation with Kaplan-Meier Estimator
Fix a period-unit pair (p, m) with K‹ observed event times, i.e., P
i ∆p,m,i = K‹. Let the distinct
observed event times thus be t(1) < t(2) < · · · < t(Kf), computed from Tp,m,i with ∆p,m,i = 1. For each event time t(j), define:
dp,m(t(j)) = #{i : Tp,m,i = t(j), ∆p,m,i = 1},
np,m(t(j)) = #{i : Tp,m,i ≥ t(j)}.
Then the KM estimator is
Sbd,K
p,m (t) =
Y
t(j ) ≤t
Ç
1 − dp,m(t(j))
np,m(t(j))
å
, t∈T.
We adopt the convention Sbpd,,mK (0) = 1.
E Finite Sample Guarantee of SSC
Fix a period p ∈ {0, 1} and a finite evaluation grid T = {t1, . . . , tT0 } ⊆ [0, τe]. For unit m in period
p, we denote the observed data to be {(Dp,m,i, Tp,m,i, ∆p,m,i)}K
i=1 where Dp,m,i is the assigned treatment, observed time Tp,m,i = min{τp,m,i, Cp,m,i}, event indicator ∆p,m,i = 1{τp,m,i ≤ Cp,m,i}, τp,m,i survival times, Cp,m,i censoring times satisfying the positivity condition inf0≤t≤τe Pr(Cp,m > t) ≥ δ > 0, and K the minimum number of observations per unit and period across all units and periods. τp,m and Cp,m satisfy non-informative censoring (Assumption 2).
Let Sbpd,,mK (·) be the Kaplan–Meier (KM) estimate of the survival distribution based on
{(Dp,m,i, Tp,m,i, ∆p,m,i)}K
i=1 if Dp,m,i = d ∀i. Since the control units are under the control treatment across periods, Dp,m,i = 0 for p ∈ {0, 1}, for all i and m ∈ I(0).
Define the KM estimation error matrix for all the control units I(0) on T by
Ep = Sb0,K
p,m (t) − S0
p,m(t) m∈I(0),t∈T . (6)
All the following lemmas and proofs adopt the aforementioned notations and assumptions. All Op(·) statements are with respect to min(T0, N0) where T0 is the number of evaluation timestamps and N0 is the number of control units. For simplicity, note that in the following sections we use C to denote a generic constant whose value may change in different contexts but does not depend on problem parameters such as N0, T0, r0.
21

Essentially, our proof of Theorem 2 proceeds in three stages. We first establish uniform entry-wise bounds for Ep, the error in the Kaplan–Meier estimator in the presence of non-informative censoring (under appropriate conditions). This leads to operator–norm bounds for Ep. With large enough K, it will satisfy the desired stability property in noisy observations of low-rank covariates as required by Principal Component Regression (PCR) method. Towards that, as the next step, we state a generic PC-
R stability result analogous to what is known in literature (specifically, see Agarwal et al. [2024]). Together, this would conclude that SSC manages to estimate the desired weights within small enough error. Finally, combining these with row–space inclusion property enables the method to extrapolate faithfully to estimate counterfactual survival function for the treated unit of interest.
E.1 Helper Lemmas for Theorem 2
In this section, we state and prove a few helper lemmas for invoking the generic PCR stability result following Agarwal et al. [2024]. Essentially, in the prior literatue Agarwal et al. [2024] the property of PCR is analyzed under low-rank covariates with their noisy observations where element-wise noise is distributed as per 0 mean, independent sub-Gaussian random variable. In our setting, the noise is induced due to estimation error of Kaplan-Meier procedure, which is uniformly bounded but arbit-
rary. Towards that, we extend the PCR stability result to account for such noisy setting.
E.1.1 Perturbation of Singular Values
First, we show the singular values of the true and estimated survival functions of the control units in the pre-period, S0
0,I(0) (·) and Sb0,K
0,I(0) (·) ∈ RT0×N0 , are very close.
Lemma 2 (Perturbation of Singular Values). Conditioned on {LF, D}, let sl and sbl be the l-th singular values of the true and estimated survival functions of the control units in the pre-period, S0
0,I(0) (·) and Sb0,K
0,I(0) (·) ∈ RT0×N0 respectively. Then for any ζ > 0 and l ≤ min{T0, N0}, if
K ≥ c max{N0, T0} ζ2 + log N0 + log max{N0, T0} (7)
then with probability at least 1 − 2e−ζ2 ,
sl − sbl ≤ C pT0 + pN0 , (8)
for some constants c, C.
Proof. Given the operator norm bound in Lemma 3, applying the Weyl’s inequality, we get (8).
Lemma 3 (Operator-norm control from survival estimation error). For a period p, let Ep ∈ RT0×N0 defined in (6). Let the setup of Lemma 2 hold. Then for any ζ > 0, with probability at least 1 − 2e−ζ2 ,
∥Ep∥op ≤ C pT0 + pN0 (9)
for some constant C > 0.
Proof. We use the following uniform tail bound for the KM estimation (cf. Foldes and Rejto [1981]):
Lemma 4 (Uniform error for Kaplan–Meier). There exist absolute constants A, B > 0 such that, for all ε ∈ 12/(Kδ4), 1 where δ is the lower bound on the censoring survival probability (inf0≤t≤τe Pr(Cp,m > t) ≥ δ > 0),
Pr sup
0≤t≤τe
Sb(t) − S(t) > ε ≤ A
ε exp − BKε2 . (10)
Under our causal framework, the potential survival function for a unit under its realized treatment coincides with its true observational survival trajectory, which is estimated with the empirical Kaplan–Meier estimator. We hope to establish that the estimated empirical survival function is close to the true observational survival function and the potential survival function under the realized treatment as well. Given Lemma 4, let
ε2 = c0 log N0 + log max{N0, T0} + ζ2
K , c0 ≥ max{2/B, 2}. (11)
22

For K satisfying (7) and C large enough, we have ε ≤ 1 and ε ≥ 12/(Kδ4), so (10) applies for all control units m ∈ I(0) and period p ∈ {0, 1}.
By a union bound over m ∈ I(0),
Pr max
m∈I (0)
sup
0≤t≤τe
Sb0,K
p,m (t) − S0
p,m(t) > ε
≤ N0
A
ε exp(−BKε2)
= exp log N0 + log A − log ε − Bc0 log N0 + log max{N0, T0} + ζ2 . (12)
Note that
− log ε = 1
2 log K − 1
2 log c0(log N0 + log max{N0, T0} + ζ2) .
From (7),
log K ≥ log C + log max{N0, T0} + log ζ2 + log N0 + log max{N0, T0} .
Substituting this into (12) and canceling terms,
log Pr( max
m∈I (0) ,t∈T
|
Sb0,K
p,m (t) − S0
p,m(t)| > ε) ≤ −Bc0ζ2 − (Bc0 − 1) log N0
− (Bc0 − 1
2 ) log max{N0, T0}.
Since c0 ≥ 2/B, we have Bc0 − 1 ≥ 1 and Bc0 − 1
2≥1
2 , hence for C large enough,
Pr max
m∈I (0) ,t∈T
|
Sb0,K
p,m (t) − S0
p,m(t)| > ε ≤ 2e−ζ2 .
Thus, with probability at least 1 − 2e−ζ2 ,
max
m∈I (0) ,t∈T
|
Sb0,K
p,m (t) − S0
p,m(t)| ≤ ε. (13)
The (13) implies
∥Ep∥2
F=
X
m∈I (0)
X
t∈T
(
Sb0,K
p,m (t) − S0
p,m(t))2 ≤ N0T0ε2 ⇒ ∥Ep∥op ≤ ∥Ep∥F ≤ pN0T0ε.
Plugging (11) and then (7),
∥Ep∥op ≤ pN0T0
c0(log N0 + log max{N0, T0} + ζ2) K
≤ c0N0T0
C max{N0, T0}
≤ C pN0 + pT0 ,
after adjusting the constant C. This proves (9).
E.1.2 Rowspaces Inclusion
Second, we relate the rowspaces of the survival functions in different periods. Observe that Assumption 8 implies that there exist weights β ∈ RT0 such that
u1(t) =
X
s∈T
βsu0(s). (14)
Lemma 5 (Rowspace Inclusion). Let β be defined as in (14). Then for any unit m ∈ [N ],
S1,m(t) =
X
s∈T
βs · S0,m(s).
23

Proof. We have
S1,m(t) = ⟨u1(t), vm⟩ from Assumption 4
=
X
s∈T
βsu0(s), vm from (14)
=
X
s∈T
βsu0(s), vm
=
X
s∈T
βs · S0,m(s) from Assumption 4 .
This completes the proof.
Going forward, to simply notations, we shall drop the n subscript whenever evident since all of them are presented with respect to the target treated unit n ∈ I(1).
E.1.3 Representing Theorem 1 with the Minimum l2-Norm Solution
We present characterization of Theorem 1 by replacing any weight wm by the unique minimum-norm solution wem.
Lemma 6 (Theorem 1 with minimum-norm solution weights). Let V0, V1 denote the row spaces of
the true survival functions of the control units in the pre- and post-period, S0
0,I(0) (·) and S0
1,I(0) (·),
respectively, and define
we := PV0 w with PV0 = V0V ⊤
0.
Then
θ(t) = S(0)
1,n(t) =
X
m∈I (0)
wemS0
1,m(t).
Proof. By Lemma 5, the post-period row span is contained in the pre-period row span:
rowspan(S0
1,I(0) ) ⊆ rowspan(S0
0,I(0) ).
Hence, the orthogonal projector PV0 := V0V0⊤ onto rowspan(S0
0,I(0) ) leaves S0
1,I(0) invariant:
S0
1,I(0) PV0 = S0
1,I(0) . (15)
Therefore,
S0
1,I(0) we = S0
1,I(0) PV0 w
= S0
1,I(0) V0V ⊤
0 w (by definition of PV0 )
= S0
1,I(0) w (by (15))
= θ(t).
E.2 Stability of Principal Component Regression (PCR)
We state a stability result for PCR building upon the prior works cf. Agarwal et al. [2024]. It generalizes the prior work for the setting of arbitrary, bounded error.
Lemma 7 (Stability of PCR). Let M = U ΣV ⊤ ∈ RT0×N0 be a rank-r0 matrix with left singular
space U ∈ RT0×r0 , right singular space V ∈ RN0×r0 , and singular values s1 ≥ · · · ≥ sr0 ≥
» T0N0
r0 . Assume ∥M ∥max := maxi∈[T0],j∈[N0] |Mi,j | ≤ 1. Let PA = AA⊤ denote the projection matrix onto the subspace spanned by the columns of A for any matrix A with orthonormal columns. Let y ∈ RT0 be a target vector and let we ∈ RN0 denote the minimum l2-norm representation of y, i.e.
y = M we + e, we = arg min
w:∥y−M w∥ is minimized
∥w∥2.
24

Let e ∈ RT0 be such that
∥e∥max := max
i∈[T0 ]
|ei| ≤ 1
max{√T0, √N0} (16)
and let E ∈ RT0×N0 be such that
∥E∥max := max
i∈[T0 ],j ∈[N0 ]
|Ei,j | ≤ 1
max{√T0, √N0} . (17)
Let the observed matrix Z = M + E with U“ΣbV“⊤ be its SVD, and its truncation using the top r0
singular components is denoted as Zr0 = U“r0 Σbr0 V“r⊤0 . Let wb be the estimate obtained by PCR: obtain
top r0 singular vectors of Z and project y onto the space spanned by them. Then
∥
we∥2 ≤ C
... r0
N0
, ∥we∥1 ≤ C√r0, (18)
∥
wb − we∥2 = O
Ç r3/4
0 T 1/4
0 N 1/2
0
+ r3/2
0
min{T0, N0}
å
, (19)
∥PV0 (wb − we)∥2 = O
Ç r02
min{T 3/2
0 , N 3/2
0}
+ r3/2
0 N 1/2
0 min{T 1/2
0 , N 1/2
0}
+ r3/4
0 T 1/4
0 N 1/2
0
å
. (20)
Proof. We follow the same calculation as the proof of Theorem 4.1 in Agarwal et al. [2023] after matching the notations βˆ = wˆ, β∗ = we, k = r0, X = M, Ze = Z, ε = e, ρ = 1, n = T0, p = N0. Note that the calculation so far is purely algebraic and does not depend on the property of error terms, thus the expression can be directly translated in our notations that
∥
wb − we∥2
2 ≤ ∥V V ⊤ − V“r0 V“⊤
r0 ∥2
2∥we∥2
2+ 4
sbr20
∥M − Zr0 ∥2
2,∞∥we∥2
1 + + ⟨Zr0 (wb − we), e⟩ .
Similarly, by matching notations in Lemma 8 in Agarwal et al. [2024], we have
∥
we∥2 ≤ C
... r0
N0
, ∥we∥1 ≤ C√r0.
This proves (18).
From Lemma 2 that |sˆr − sr| ≤ C √T0 + √N0 and the lower bound sr0 ≥
» T0N0
r0 , we have sˆr0 = Θ(sr0 ).
Next, to bound (19) and (20), we state a few helper lemmas whose proofs can be found in Section E.3, E.4, and E.5.
Lemma 8. Under the setup of Lemma 7,
max
Ä
U U ⊤ − U“r0 U“⊤
r0 2, V V ⊤ − V“r0 V“⊤
r0 2
ä
≤C
√T0 + √N0
sr0
(21)
for some constant C > 0.
Lemma 9. Under the setup of Lemma 7,
∥M − Zr0 ∥2
2,∞ ≤ C
Ç T0
max{N0, T0} + T0(T0 + N0)
sr20
å
,
Lemma 10. Under the setup of Lemma 7,
⟨Zr0 (wb − we), e⟩ ≤ C
Ä
∥Zr0 − M ∥2,∞ + pT0
ä
∥
we∥1,
for some absolute constant C > 0.
25

Applying Lemmas 8, 9, and 10, we have
∥
wb − we∥2
2≤C
Ç T0 + N0
sr20
∥
we∥2
2 + ∥M − Zr0 ∥22,∞∥we∥21
sbr20
+
√T0∥we∥1
sbr20
å
≤C
Ç T0 + N0
sr20
· r0
N0
+ ∥M − Zr0 ∥22,∞r0
sbr20
+
√T0
√r0
sbr20
å
≤C
Ç (T0 + N0)r02 N02T0
+ r02
N0 max{N0, T0} + r03(T0 + N0)
N02T0
+ r3/2
0
N0
√T0
å
≤C
Ç r03(T0 + N0) N02T0
+ r3/2
0
N0
√T0
å
≤C
Ç r03
min{T0, N0}2 + r3/2
0
N0
√T0
å
.
Thus,
∥
wb − we∥2 ≤ C
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
.
This proves (19).
To establish (20), we consider the following decomposition:
PV (wb − we) = PV − PV“ (wb − we) + PV“ (wb − we). (22)
We proceed to bound each term separately.
Bounding term 1. Recall that ∥Av∥2 ≤ ∥A∥op∥v∥2 for any A ∈ Ra×b and v ∈ Rb. Thus, from Lemma 8
(PV − PV“ )(wb − we) 2 ≤ ∥PV − PV“ ∥op∥(wb − we)∥2
≤
√r0(√T0 + √N0)
√T0N0
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
≤
√r
min{√T0, √N0}
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
. (23)
Bounding term 2. Since V“r0 is an isometry, it follows that
∥PV“ (wb − we)∥2
2 = ∥V“⊤
r0 (wb − we)∥2
2. (24)
We upper bound ∥V“r⊤0 (wb − we)∥22 as follows. Consider
∥Zr0 (wb − we)∥2
2 = V“⊤
r0 (wb − we) ⊤
Sb2
r0
V“⊤
r0 (wb − we) ≥ sb2
r0 ∥V“⊤
r0 (wb − we)∥2
2.
Using (24) and (E.2) together implies
∥PV“ (wb − we)∥2
2 ≤ ∥Zr0 (wb − we)∥22
sbr20
. (25)
To bound the numerator in (25), we use the decomposition
Zr0 (wb − we) = Zr0
wb − y + y − Zr0
we , y = M we + e.
Applying the inequality ∥x + y∥22 ≤ 2∥x∥22 + 2∥y∥22 gives
∥Zr0 (wb − we)∥2
2 ≤ 2∥Zr0
wb − M we∥2
2 + 2∥(M − Zr0 )we∥2
2
≤ 2∥Zr0
wb − M we∥2
2 + 2∥M − Zr0 ∥2
2,∞∥we∥2
1. (26)
26

Combining (25) and (26), we obtain
∥PV“ (wb − we)∥2
2≤ 2
sbr20
∥Z r0
wb − M we∥2
2 + ∥M − Zr0 ∥2
2,∞∥we∥2
1,
which is the desired bound.
Next, we bound ∥Zr0
wb − M we∥22. To this end, observe that
∥Z r0
wb − y∥2
2 = ∥Zr0
wb − M we − e∥2
2
= ∥Zr0
wb − M we∥2
2 + ∥e∥2
2 − 2⟨Zr0
wb − M we, e⟩. (27)
By the optimality of wb (minimum–norm solution in the span of V“r0 ), we have
∥Z r0
wb − y∥2
2 = ∥Zr0
wb − M we − e∥2
2
≤ ∥Zr0
we − M we − e∥2
2
= ∥(Zr0 − M )we − e∥2
2
= ∥(Zr0 − M )we∥2
2 + ∥e∥2
2 − 2⟨(Zr0 − M )we, e⟩. (28)
From (27) and (28), we have
∥Z r0
wb − M we∥2
2 = ∥Zr0
wb − y∥2
2 − ∥e∥2
2 + 2⟨Zr0
wb − M we, e⟩
≤ ∥(Zr0 − M )we∥2
2 + 2⟨Zr0 (wb − we), e⟩
≤ ∥Zr0 − M ∥2
2,∞∥we∥2
1 + 2⟨Zr0 (wb − we), e⟩,
where the last inequality uses
∥(Zr0 − M )we∥2 ≤ ∥Zr0 − M ∥2,∞∥we∥1.
Thus,
∥PV“ (wb − we)∥2
2≤ 4
sbr20
∥Zr0 − M ∥2
2,∞∥we∥2
1 + + ⟨Zr0 (wb − we), e⟩ , (29)
Collecting terms. Combining (22), (23), and (29), and applying Lemmas 9 and 10 , we conclude that
27

∥PV (wb − we)∥2 ≤ (PV − PV“ )(wb − we) 2 + PV“ (wb − we) 2
≤
√r
min{√T0, √N0}
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
+2
sbr0
∥Zr0 − M ∥2,∞∥we∥1 + Zr0 (wb − we), e 1/2
≤
√r
min{√T0, √N0}
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
+
√r0
√T0N0
∥Zr0 − M ∥2,∞r1/2
0 + T 1/4
0 r1/4
0 + Zr0 − M ∥1/2
2,∞r1/4
0
≤
√r
min{√T0, √N0}
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
+
√r0
√T0N0
√r0T0
min{√T0, √N0} r1/2
0 + T 1/4
0 r1/4
0 + r1/4
0 T 1/4
0
min{T 1/4
0 , N 1/4
0}
r1/4
0
≤
√r
min{√T0, √N0}
Ç r3/2
0
min{T0, N0} + r3/4
0 T 1/4
0 N 1/2
0
å
+ r3/2
0
√N0 min{√T0, √N0} + r3/4
0 T 1/4
0 N 1/2
0
+ r0
T 1/4
0 N 1/2
0 min{T 1/4
0 , N 1/4
0}
≤ r02
min{T 3/2
0 , N 3/2
0}
+ r3/2
0 N 1/2
0 min{T 1/2
0 , N 1/2
0}
+ r3/4
0 T 1/4
0 N 1/2
0
This completes the proof.
E.3 Proof of Lemma 8
Proof. First, we notice ∥E∥op ≤ ∥E∥F ≤ √N0T0∥E∥max ≤
√N0 T0
max{√T0,√N0} ≤ √T0 + √N0. From
Wedin’s Theorem [Wedin, 1972], we know
max
Ä
U U ⊤ − U“r0 U“⊤
r0 2, V V ⊤ − V“r0 V“⊤
r0 2
ä
≤ 2∥E∥op
sr0
.
Plugging in the upper bound of ∥E∥op, we prove (21).
E.4 Proof of Lemma 9
Proof. We want to bound ∥M − Zr0 ∥22,∞. To that end, for any j ∈ [N0] define
∆j := M·j − Zr0
·j ∈ RT0 .
Our goal is to bound ∥∆j∥22 uniformly over j, and then take the maximum.
Recall that Zr0 is the rank-r0 truncated SVD of Z, so
Zr0 = U“r0 Σb r0 V“⊤
r0 and Zr0 = U“r0 U“⊤
r0 Z.
In particular,
Z r0
·j = U“r0 U“⊤
r0 Z·j for all j ∈ [N0].
We decompose
Z r0
·j − M·j = Zr0
·j − U“r0 U“⊤
r0 M·j + U“r0 U“⊤
r0 M·j − M·j .
The first term lies in span(U“r0 ), while the second term lies in its orthogonal complement:
Z r0
·j − U“r0 U“⊤
r0 M·j = U“r0 U“⊤
r0 (Z·j − M·j ) ∈ span(U“r0 ),
28

and, since U“r0 U“r⊤0 is the orthogonal projector onto span(U“r0 ),
U“r0 U“⊤
r0 M·j − M·j = − I − U“r0 U“⊤
r0 M·j ∈ span(U“r0 )⊥.
Hence these two vectors are orthogonal, and we obtain
∥Z r0
·j − M·j ∥2
2 = ∥Zr0
·j − U“r0 U“⊤
r0 M·j ∥2
2 + ∥U“r0 U“⊤
r0 M·j − M·j ∥2
2. (30)
Bounding ∥Zr0
·j − U“r0 U“r⊤0 M·j ∥22. Using Zr0
·j = U“r0 U“r⊤0 Z·j , we have
Z r0
·j − U“r0 U“⊤
r0 M·j = U“r0 U“⊤
r0 Z·j − U“r0 U“⊤
r0 M·j
=
U“r0 U“⊤
r0 (Z·j − M·j ).
Therefore, by submultiplicativity of the operator norm and the fact that U“r0 U“r⊤0 is an orthogonal
projector (so ∥U“r0 U“r⊤0 ∥2 = 1),
∥Z r0
·j − U“r0 U“⊤
r0 M·j ∥2
2 ≤ ∥U“r0 U“⊤
r0 ∥2
2∥Z·j − M·j ∥2
2
= ∥Z·j − M·j ∥2
2. (31)
Since Z − M = E and, by assumption (17),
∥E∥max := max
i∈[T0], j∈[N0]
|Eij| ≤ 1
max{√T0, √N0} ,
every entry of E·j has absolute value at most 1/ max{√T0, √N0}. Hence
∥Z·j − M·j ∥2
2 = ∥E·j ∥2
2 ≤ T0 · 1
max{T0, N0} = T0
max{T0, N0} . (32)
Combining (31) and (32), we obtain
∥Z r0
·j − U“r0 U“⊤
r0 M·j ∥2
2 ≤ T0
max{T0, N0} . (33)
Bounding ∥U“r0 U“r⊤0 M·j − M·j∥22. Recall that M = U ΣV ⊤ with rank r0, so M·j ∈ span(U ) and thus U U ⊤M·j = M·j. Therefore
∥
U“r0 U“⊤
r0 M·j − M·j ∥2
2 = ∥(U“r0 U“⊤
r0 − U U ⊤)M·j ∥2
2
≤ ∥U“r0 U“⊤
r0 − U U ⊤∥2
2 ∥M·j ∥2
2. (34)
By the assumption ∥M ∥max ≤ 1, each entry of M·j has absolute value at most 1, so
∥M·j ∥2
2 ≤ T0.
Moreover, Lemma 8 implies
∥
U“r0 U“⊤
r0 − U U ⊤∥2 ≤ C
√T0 + √N0 sr0 (M )
for some constant C > 0, where sr0 (M ) denotes the r0-th singular value of M . Substituting this
bound and ∥M·j∥22 ≤ T0 into (34), we obtain
∥
U“r0 U“⊤
r0 M·j − M·j ∥2
2 ≤ C T0(T0 + N0)
sr20
. (35)
Combining results. Substituting (33) and (35) into (30), we find that for every j ∈ [N0],
∥Z r0
·j − M·j ∥2
2 ≤ T0
max{T0, N0} + C T0(T0 + N0)
sr20
.
Taking the maximum over j ∈ [N0] yields
∥M − Zr0 ∥2
2,∞ = max
j ∈[N0 ]
∥M·j − Zr0
·j ∥2
2
≤C
Ç T0
max{N0, T0} + T0(T0 + N0)
sr20
å
for some constant C > 0, as claimed.
29

E.5 Proof of Lemma 10
Proof. Recall
wb = V“r0 Σb−1
r0
U“⊤
r0 y, Zr0 = U“r0 Σb r0 V“⊤
r0 , y = M we + e.
Thus,
Z r0
wb = U“r0 U“⊤
r0 y = U“r0 U“⊤
r0 M we + U“r0 U“⊤
r0 e,
and
Z r0
we = U“r0 Σbr0 V“⊤
r0 we.
Hence,
⟨Zr0 (wb − we), e⟩ = ⟨U“r0 U“⊤
r0 M we, e⟩
| {z }
(I )
+ ⟨U“r0 U“⊤
r0 e, e⟩
| {z }
(I I )
− ⟨U“r0 Σbr0 V“⊤
r0 we, e⟩
| {z }
(I I I )
. (36)
Bounding (I) By Cauchy–Schwarz, ∥e∥2 ≤ √T0 1
max{√T0,√N0} , ∥M ∥2,∞ ≤ √T0 ,
|(I)| ≤ ∥M we∥2∥e∥2 ≤ ∥M ∥2,∞∥we∥1 ·
q
T0
max{T0,N0} ≤ T0
pmax{T0, N0} ∥we∥1 ≤ pT0∥we∥1.
Bounding (II) Since U“r0 U“r⊤0 is an orthogonal projector,
|(II)| ≤ ∥e∥2
2 ≤ T0∥e∥2
∞ ≤ T0
max{T0, N0} ≤ 1.
Bounding (III) Write
U“r0 Σb r0 V“⊤
r0 we = Zr0
we = (Zr0 − M )we + M we.
Thus,
∥
U“r0 Σb r0 V“⊤
r0 we∥2 ≤
Ä
∥Zr0 − M ∥2,∞ + pT0
ä
∥
we∥1.
Using ∥e∥2 ≤ pT0/ max{T0, N0},
|(III)| ≤
√T0
pmax{T0, N0}
Ä
∥Zr0 − M ∥2,∞ + pT0
ä
∥
we∥1 ≤
Ä
∥Zr0 − M ∥2,∞ + pT0
ä
∥
we∥1.
Combining bounds. From (36), the triangle inequality and Lemma 9,
⟨Zr0 (wb − we), e⟩ ≤ |(I)| + |(II)| + |(III)|
≤C
Ä
∥Zr0 − M ∥2,∞ + pT0
ä
∥
we∥1,
for some absolute constant C > 0.
E.6 Proof of Theorem 2
With our helper lemmas in the last subsection, we now formally establish Theorem 2. For any matrix A with orthonormal columns, let PA = AA⊤ denote the projection matrix onto the subspace spanned by the columns of A.
We first state how we use Lemma 7. In our survival setting, when K ≥ c max{N0, T0} ζ2 + log N0 + log max{N0, T0} for some constant c, ζ > 0, we take
M = S0
0,I(0) (·) ∈ RT0×N0 , Z = Sb0,K
0,I(0) (·) = M + E, E = E0,
where E0 is the KM error matrix on the pre-period grid (cf. (6) with p = 0) and the smallest non-zero
singular value of M satisfies, based on Assumption 7, sr0 ≥
» N0T0
r . The target vector at each t ∈ T is
y = Sb0
1,I(0) (t) ∈ RN0 .
The concentration condition (16) and (17) holds w.h.p. by the KM uniform error bound and its operator-norm corollary. Substituting these identifications into the lemma yields (19)–(20) for the SSC weights.
30

Decomposition. For ∀t ∈ T , by Lemma 6, we have
θb(t) − θ(t) =
 ̈
Sb0
1,I(0) (t), wb
∂
−
 ̈
S0
1,I(0) (t), we
∂
=
 ̈
S0
1,I(0) (t), wb − we
∂
| {z }
(I)
+
 ̈
Sb0
1,I(0) (t) − S0
1,I(0) (t), we
∂
| {z }
(II)
+
 ̈
Sb0
1,I(0) (t) − S0
1,I(0) (t), wb − we
∂
| {z }
(III)
=
 ̈
S0
1,I(0) (t), wb − we
∂
| {z }
(I)
+ e1,I(0),t, we
| {z }
(II)
+ e1,I(0),t, wb − we
| {z }
(III)
(37)
where ep,I(0),t =
î
Sbp0,,mK (t) − Sp0,m(t)
ó
m∈I(0) .
We now bound the three terms in (37) separately.
Bounding term 1. From (15), S0
1,I(0) PV0 = S0
1,I(0) . Thus,
 ̈
S0
1,I(0) (t), wb − w
∂
=
 ̈
S0
1,I(0) (t), PV0 (wb − w)
∂
.
By Cauchy–Schwarz,
 ̈
S0
1,I(0) (t), PV0 (wb − we)
∂
≤ ∥S0
1,I(0) (t)∥2 · ∥PV0 (wb − w)∥2.
Since survival functions are naturally bounded between 0 and 1, ∥S0
1,I(0) (t)∥2 ≲
√N0. Thus it remains to bound ∥PV0 (wb − w)∥2 for which we use (20) in Lemma 7.
Thus,
S0
1,I(0) (t), PV0 (wb − we) = Op
Ç N 1/2
0 r02
min{T 3/2
0 , N 3/2
0}
+ r3/2
0
min{T 1/2
0 , N 1/2
0}
+ r3/4
0 T 1/4
0
å
.
Bounding term 2. Since the estimation errors are independent across units and the true minimum l2 norm solution we depends only on the true survival data in period 0, not on the period 1 estimation error, thus e1,I(0),t, we = Op(∥we∥2) = Op(» r0
N0 ) by (18) in Lemma 7.
Bounding term 3. Define
E1 =
®
∥
wb − we∥2 = O
Ç r3/4
0 T 1/4
0 N 1/2
0
+ r3/2
0
min{T0, N0}
å ́
.
By (19) in Lemma 7:, E1 holds w.h.p. Define
E2 =
®
e1,I(0),t, wb − we = O
Ç r3/4
0 T 1/4
0 N 1/2
0
+ r3/2
0
min{T0, N0}
å ́
.
Again, since the estimation errors are independent across units and the learned weights wb are independent of estimation errors in period 1, by (19) in Lemma 7, E2 holds w.h.p.
Thus,
e1,I(0),t, wb − we = Op
Ç r3/4
0 T 1/4
0 N 1/2
0
+ r3/2
0
min{T0, N0}
å
.
Collecting terms. Plugging all three bounds back to (37) gives us the ideal result.
31

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:48.573Z
- **Text Length:** 83119 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
