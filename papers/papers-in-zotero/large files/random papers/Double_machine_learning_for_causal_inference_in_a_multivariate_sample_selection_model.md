# PDF Document: Dolgikh and Potanin - 2025 - Double machine learning for causal inference in a multivariate sample selection model.pdf

**File Path:** Dolgikh and Potanin - 2025 - Double machine learning for causal inference in a multivariate sample selection model.pdf

**Processed Date:** 2026-02-10T18:18:24.861Z

**File Size:** 786.91 KB

**Total Pages:** 65

**Extracted Pages:** 65

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3147

**Title:** Double machine learning for causal inference in a multivariate sample selection model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Double machine learning for causal inference in a
multivariate sample selection model
Sofiia Dolgikh
HSE University
Bodan Potanin
HSE University
Abstract
We propose plug-in (PI) and double machine learning (DML) estimators of average treatment effect (ATE), average treatment effect on the treated (ATET) and local average treatment effect (LATE) in the multivariate sample selection model with ordinal selection equations. Our DML estimators are doubly-robust and based on the efficient influence functions. Finite sample properties of the proposed estimators are studied and compared on simulated data. Specifically, the results of the analysis suggest t-
hat without addressing multivariate sample selection, the estimates of the causal parameters may be highly biased. However, the proposed estimators allow us to avoid these biases.
Keywords: double machine learning, sample selection, causal inference, doubly robust estimation, efficient score
JEL Codes: C31, C34
Acknowledgements: This work was supported by the Russian Science Foundation [25-78-00095].
1 Introduction
Machine learning methods are gaining popularity for causal inference (Chernozhukov et al., 2018), (Li and Owen, 2024). The reason is that these methods provide greater flexibility and robustness in comparison to classic estimators, which usually rely on fairly strong assumptions. Nevertheless, some features of the data collection process may impose serious challenges for the accurate estimation of causal parameters, even when flexible estimators are used. Sample selection is one of these features.-
 Sample selection arises when an outcome is observable only under specific conditions. A classic example of sample selection is wages, since they are observable only for employed individuals (Heckman, 1979). If some common or correlated factors influence both the outcome and selection, then estimators of causal parameters may be subject to selection bias. To avoid this bias, it is necessary to adjust estimators for sample selection. These adjustments have been broadly studied in classical economet-
rics (Vella, 1998) and have recently been proposed for the double machine learning estimator of the average treatment effect (Bia et al., 2024). Usually, researchers consider a single binary selection equation. However, sometimes selection is due to multiple criteria. For example, the share of income that a household spends on food (the outcome) is observable only for households that have revealed information on their income (first selection criterion) and spending (second selection criterion) (De-
 Luca and Peracchi, 2012). Another example is wages (the outcome), which are observable only for employed individuals (first selection criterion) who are willing to answer the question about their wages (second selection criterion) (Kossova and Potanin, 2018). Moreover, in the latter example, the
1
arXiv:2511.12640v1 [econ.EM] 16 Nov 2025

selection is nested, in the sense that the willingness to reveal information on wages is observable only for employed individuals. The most popular type of multivariate sample selection model has multiple binary selection equations. Maximum-likelihood and two-step estimators of the parametric version of this model (under the assumption of joint normality of random errors) have been proposed by Tauchmann (2010), Ogundimu and Hutton (2016), Kossova and Potanin (2018), and Rezaee et al. (2022). Esti-
mators based on the EM algorithm have been provided for the cases of multivariate normal (Li, 2014) and elliptical contoured (Kim and Kim, 2016) distributions of random errors. Bivariate sample selection models have been considered for panel data (Cinzia, 2009), for tdistribution of random errors (Marchenko and Genton, 2012), for the semi-parametric case (De Luca and Peracchi, 2012), and for partial observability (Poirier, 1980). A non-parametric estimator for the model has been considered by Das -
et al. (2003) and studied using simulated data by Kossova et al. (2020a). Kossova and Potanin (2018) consider nested selection, i.e., when some binary selection equations are observable only for specific values of other selection equations (see example above). Some studies have proposed estimators of multinomial sample selection models based on the multinomial logit (Bourguignon et al., 2007, Dubin and McFadden, 1984) and multinomial probit (Kossova and Potanin, 2022) models. Furthermore, multivar-
iate sample selection is closely related to the combination of sample selection and endogenous switching models (Angela, 2016, Dolgikh and Potanin, 2024, 2025, Henning and Henningsen, 2007, Kossova et al., 2020b). In this article, we focus on the non-parametric identification and estimation of causal parameters in the multivariate sample selection model (MSSM) with multiple ordinal selection equations. However, multinomial and nested selection are outside the scope of this article. We also focus o-
n the case where selection is non-random, meaning that even conditional on the covariates, there are some unobservable (in data) factors that affect both the outcome and the probability of selection. The reasons we consider ordinal selection equations are as follows. First, ordinal equations nest binary ones. Thus, as a particular case, we cover the most popular type of MSSM model — one with binary selection equations. Second, ordinal selection covers the case when outcome is observable only if la-
tent variables belong to some bounded interval, that is common for multivariate sample selection arising in customer segmentation tasks (Kim and Kim, 2016). Third, ordinal selection equations make our framework useful not only for sample selection problems but also for the estimation of treatment effects for endogenous groups represented by ordinal variables. For example, one may estimate the ATE of education (treatment) on wages (outcome) under non-random selection into employment (binary selecti-
on criterion) for the groups such as unmarried, civil married and officially married individuals (ordinal selection criterion). The latter example demonstrates a combination of sample selection and endogenous moderation, meaning that we may estimate the ATE under sample selection for endogenously determined subgroups, i.e., when, even conditional on the covariates, the value of the outcome and membership in the subgroup are not independent. Furthermore, for brevity, we usually refer to our model s-
imply as the MSSM without directly referencing the ordinal equations. We establish the assumptions under which average treatment effect (ATE), average treatment effect on the treated (ATET), and local average treatment effect (LATE) are identifiable in the MSSM. We then propose plug-in (PI) and double machine learning (DML) estimators of these causal parameters. Specifically, we extend the DML estimator proposed by Bia et al. (2024) for the ATE in a binary sample selection model to the ATE, ATET, -
and LATE in the MSSM. The article has the following structure. In Section 2, we introduce the main notations used throughout the article. In Section 3, we prove the identifiability of the ATE and ATET in the MSSM under some extensions of the assumptions of Bia et al. (2024). In Section 4, we do the
2

same for the LATE by adopting the framework of Frolich (2007) to the MSSM. In Section 5, we propose PI estimators based on the identification theorems from Section 3 and Section 4. In Section 6, following Bia et al. (2024), we derive the efficient influence function in the latent model , i.e., under the assumption that the conditional probabilities of selection are known (available in data). Despite this strong assumption, we show that scores based on this efficient influence function are useful -
in the actual model, i.e., when the conditional probabilities are considered to be generated regressors (unavailable in data). In Section 7, we derive the efficient influence functions in the actual model. In Section 8, we propose DML estimators based on the efficient influence functions from Section 7. In Section 9 we discuss exclusion restrictions. In Section 10, we conduct a simulated data analysis of the estimators for the ATE and ATET, and in Section 11, we do the same for the LATE. In Sectio-
n 12, we summarize the contribution of the article and discuss interesting directions for future studies on the MSSM. All the proofs are provided in the appendix.
2 Main notations
Consider a sample of n i.i.d. observations indexed by i = 1, . . . , n. The main notations used throughout the paper are provided below.
1. Di — a categorical treatment variable with support supp(Di) = {0, . . . , nD − 1}, where nD is the number of possible values of Di.
2. Ydi — the d-th potential outcome, where d ∈ {0, . . . , nD − 1}.
3. Yi =
nD −1
∑︀
d=0
Ydi · I(Di = d) — the observable outcome, where I(condition) is an indicator
function that equals 1 if the condition is true and 0 otherwise.
4. Zji — the j-th selection variable, where j ∈ {1, . . . , nZ} and supp(Zji) = {0, . . . , nZj − 1}. Here, nZ denotes the number of selection equations and nZj denotes the number of values the j-th selection variable takes. We denote by Zi = (Z1i, . . . , ZnZi) the vector of selection variables.
5. Xi — a row vector of covariates.
6. W (Z)
i — a row vector of exclusion restrictions for the selection equations. The variables
in Xi and W (Z)
i are distinct.
7. W (D)
i — a binary exclusion restriction (instrument) for the treatment variable. Note that
W (D)
i is not an element of Xi or W (Z)
i.
8. P (z)
i = (P (z)
1i , . . . , P (z)
nZi) — a row vector of conditional probabilities for the selection equa
tions, where P (z)
ji = P(Zji ≤ zj | Di, Xi, W (Z)
i ) and z = (z1, . . . , znZ ) is a vector of constants.
9. P ̄(z)
i = (P (z−1)
i , P (z)
i ) — a row vector of conditional probabilities for Zji ≤ zj − 1 and Zji ≤ zj.
It is assumed that Yi is observable only if Z ̃i = 1, where:
Z ̃i =
{︃
1, if Zi ∈ {z(1), . . . , z(m)}
0, otherwise = I(Zi = z(1)) + · · · + I(Zi = z(m)). (1)
3

The vectors z(1), . . . , z(m) ∈ supp(Zi) are distinct. In a simple case m = 1, a researcher may
consider z(1) = (1, . . . , 1), so Z ̃i =
∏︀nZ
j=1
Zji. For example, De Luca and Peracchi (2012) consider a
case where a researcher observes the share of income that a household spends on food Yi only if the respondent revealed information on spending and income. Therefore, Z1i and Z2i are binary selection variables for the answers on corresponding questions (1 - revealed the information, 0 - not). Outcome is observable only if Z1i = Z2i = 1, so m = 1 and z(1) = (1, 1). Consider a more sophisticated (hypothetical) example. Suppose that the researcher studies the effect of remote work on total transport -
spending. These spendings are observable only if the individual uses private (Z1i) or public (Z2i) transport, so m = 3 and z(1) = (1, 1), z(2) = (1, 0), z(3) = (0, 1). That is, transport spendings are unobservable only if the individual does not use any of these types of transport (Z1i = Z2i = 0). We will frequently use the following nuisance functions for identification and estimation purposes:
μY (d, x, p, z) = E(Yi | Di = d, Xi = x, P ̄(z)
i = p, Zi = z), (2)
μD(d, x, p) = P(Di = d | Xi = x, P ̄(z)
i = p), (3)
μZ(z, x, p) = P(Zi = z | Xi = x, P ̄(z)
i = p), (4)
p(z)(d, x, w) = (︀ p1(d, x, w, z − 1), . . . , pnZ (d, x, w, z − 1),
p1(d, x, w, z), . . . , pnZ (d, x, w, z))︀ , (5)
μ ̄Y (w, x, p, z) = E(Yi | W (D)
i = w, Xi = x, P ̄(z)
i = p, Zi = z), (6)
μ ̄D(w, x, p, z) = E(Di | W (D)
i = w, Xi = x, P ̄(z)
i = p, Zi = z), (7)
μ ̄W (w, x, p) = P(W (D)
i = 1 | Xi = x, P ̄(z)
i = p), (8)
p ̄(z)(x, w) = (︀ p ̄1(x, w, z − 1), . . . , p ̄nZ (x, w, z − 1),
p ̄1(x, w, z), . . . , p ̄nZ (x, w, z))︀ , (9)
where for j ∈ {1, . . . , nZ}:
pj(d, x, w, z) = P(Zji = zj | Di = d, Xi = x, W (Z)
i = w), (10)
p ̄j(x, w, z) = P(Zji = zj | Xi = x, W (Z)
i = w). (11)
Whether a constant value p ∈ [0, 1] or a function p(d, x, w, z) is considered will be clear from the context. We assume that the aforementioned nuisance functions are non-parametrically identifiable and discuss this problem in greater detail in Section 9. The notation FA|B(a | b) represents the cumulative distribution function and fA|B(a | b) represents the density function of the random vector A at point a, conditional on the random vector B at point b. The notation A ⊥ B | C means that the rando-
m vector A is independent of the random vector B, conditional on any event C = c, where C is a random vector and c ∈ supp(C). The article assumes that the required regularity conditions for exchanging expectation and differentiation hold
3 Identification of ATE and ATET
To identify ATE and ATET in the MSSM, we consider a modification of the assumptions used by Bia et al. (2024) in the univariate case with binary selection. Assumption 1. Multivariate ordinal selection.
4

For each j ∈ {1, . . . , nZ}, the selection mechanism is as follows:
Zji =
⎧
⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎨
⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎩
0, if U (Z)
ji ≤ gj(Di, Xi, W (Z)
i)
1, if gj(Di, Xi, W (Z)
i ) < U (Z)
ji ≤ gj(Di, Xi, W (Z)
i ) + cj1
2, if gj(Di, Xi, W (Z)
i ) + cj1 < U (Z)
ji ≤ gj(Di, Xi, W (Z)
i ) + cj2
...
nZj − 1, if gj(Di, Xi, W (Z)
i ) + cj(nZj −2) < U (Z)
ji
, (12)
where U (Z)
ji are random errors and cjk are scalar deterministic thresholds such that cj1 < cj2 < · · · < cj(nZj −2). Also, for every j ∈ {1, . . . , nZ}, the function gj(d, x, w) is defined for any
(d, x, w) ∈ supp(Di, Xi, W (Z)
i ), and the cumulative distribution function FU(Z)
ji |Xi(u) is strictly
increasing in u.
Assumption 2. Conditional exogeneity of treatment and exclusion restrictions. For all d ∈ {0, . . . , nD−1}, we have (Ydi, U (Z)
i ) ⊥ (Di, W (Z)
i ) | Xi, where U (Z)
i = (U (Z)
1i , . . . , U (Z)
nZ i ).
Assumption 3. Common support of treatment. For all (x, w, z) ∈ supp(Xi, W (Z)
i , Zi) and d ∈ supp(Di), the conditional probability of treat
ment is positive P(Di = d | Xi = x, W (Z)
i = w, Zi = z) > 0.
If there is only one binary selection equation (i.e., nZ = 1, nZ1 = 2), then Assumption 1 is equivalent to Assumption 4b of Bia et al. (2024). If there are multiple binary equations (i.e., nZj ∈ {0, 1} for any j ∈ {1, . . . , nZ}), then Assumption 1 is similar to that used in Section 2.2 of Das et al. (2003). Note that Assumption 1 allows for dependence among selection equations. In particular, Uji may be correlated across equations. Specifically, the multivariate ordinal probit model (Hirk et al.-
, 2020) satisfies Assumption 1. Assumption 2 has two crucial implications. First, it implies that covariates Xi contain all the information mediating the relationship between the potential outcomes Ydi and treatment Di. It is a fairly standard assumption but may be frequently violated in practice. For example, wage Ydi and the level of education Di would probably be correlated even conditional on standard covariates (age, health, and so on), since individual abilities are usually unobservable and -
may confound the relationship between wage and education. To justify Assumption 2, some studies on the returns to education use proxies for these abilities, for example, test scores (Grogger and Eide, 1995, Rozhkova et al., 2023). Nevertheless, sometimes finding good proxies for unobservable covariates is problematic, so reliance on Assumption 2 may be overoptimistic. We relax this assumption in the next section.
Second, Assumption 2 requires exclusion restrictions W (Z)
i which, conditional on the covari
ates Xi, are not associated with the potential outcomes Ydi or with the unobservable factors
U (Z)
i affecting the selection mechanism. For example, some characteristics of the interviewer
(age, education, gender) W (Z)
i may influence the probability that a respondent would answer a question on spending Z1i. However, these characteristics provide no information on spending itself Yi (De Luca and Peracchi, 2012). We discuss the exclusion restrictions in greater detail in Section 9. Assumption 3 ensures the existence of conditional expectations required for identification. For example, this assumption may be violated if one studies the effect of university education Di on health Yi and does not restrict the sample-
 by a minimum age Agei = Xti in a sample, where Xti is the t-th covariate. Indeed, 2-year-old individuals would probably never have a university level of education, so P(Di = 1 | Agei = 2) = 0. Since researchers usually impose reasonable restrictions on the structure of a sample, this assumption would probably hold in practice. Note that Assumption 2 implies that Ydi ⊥ Di | Xi. However, it does not imply Ydi ⊥ Di |
(Xi, Z ̃i = 1). Hence, in a subsample of selected observations Z ̃i = 1, even conditional on the
5

covariates Xi, the potential outcomes Ydi may be associated with the treatment variable Di. To avoid this dependence, following Bia et al. (2024), we use a control function approach that is possible due to the structural Assumption 1. Specifically, in our case, the control functions
are the conditional probabilities associated with the selection equations P ̄(z)
i = (P (z−1)
i , P (z)
i ). The following lemma establishes the independence of the potential outcomes and the treatment variable among selected observations conditional on the covariates and control functions. Lemma 1.
Assumptions 1 and 2 imply that Ydi ⊥ Di | (Xi, P ̄(z)
i , Zi = z) for any z ∈ supp(Zi) and d ∈ {0, . . . , nD − 1}.
This lemma is a key tool for the identification of ATE and ATET in a subsample of selected observations Z ̃i = 1. Therefore, ATE and ATET for this subsample are denoted as ATES and ATETS, respectively; the last letter ’S’ refers to ’selected’. For example, ATES may represent an average treatment effect of education on wage among employed (selected) individuals. The following theorem establishes identification results for ATES and ATETS. Theorem 1. Identification of ATES and ATETS. Assumptions 1, 2-
, and 3 imply that:
ATES = E(Ydi − Yd*i | Z ̃i = 1) =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)×
×E
(︁
μY (d, Xi, P ̄(z(t))
i , z(t)) − μY (d*, Xi, P ̄(z(t))
i , z(t)) | Zi = z(t))︁
, (13)
ATETS = E(Ydi − Yd*i | Z ̃i = 1, Di = d) =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1, Di = d)×
×E
(︁
μY (d, Xi, P ̄(z(t))
i , z(t)) − μY (d*, Xi, P ̄(z(t))
i , z(t)) | Zi = z(t), Di = d
)︁
. (14)
The summation operator in the expressions of ATES and ATETS arises due to the fact that we observe Yi under m possible values of Zi. The other difference from the expression of ATES obtained by Bia et al. (2024) is that expectations are conditioned on the probabilities of multiple selection equations. In addition, because of ordinal selection, it is necessary to condition on two vectors of probabilities P ̄(z(t))
i = (P (z(t)−1)
i , P (z(t))
i ) rather than one. However, note that the
elements of P (z(t))
i , for which z(t)
j ≥ nZj or z(t)
j ≤ 0, always equal 1 and 0, respectively, so they may be omitted (there is no need to condition on them). For convenience, we exclude such
constant elements from P ̄(z(t))
i.
Following Bia et al. (2024), we use additional assumptions to make it possible to identify the ATE and ATET for the whole population rather than a subsample of selected observations. Assumption 4. Conditional effect homogeneity.
For all d, d* ∈ {0, . . . , nD − 1} and z ∈ {z(1), . . . , z(m)}, we have:
E(Ydi | Xi, P ̄(z)
i , Zi = z) − E(Yd*i | Xi, P ̄(z)
i , Zi = z) =
= E(Ydi | Xi, P ̄(z)
i ) − E(Yd*i | Xi, P ̄(z)
i ). (15)
Assumption 5. Common support of selection. For all (d, x, w) ∈ supp(Di, Xi, W (Z)
i ) and z ∈ supp(Zi), the conditional probability of selec
tion is positive P(Zi = z | Di = d, W (Z)
i = w, Xi = x) > 0.
Assumption 5 is similar to Assumption 3. For example, Assumption 5 may be violated if a researcher studies the effect of health on the wages of 16- to 54-year-old individuals, while employment is strictly prohibited for 16- to 17-year-old individuals. Indeed, in this case, the probability of employment (selection) is zero conditional on the covariate of being 16 to 17 years old.
6

Assumption 4 is implied by the model Ydi = g(Xi, d) + εi (Bia et al., 2024), under which the heterogeneity of the treatment effect is fully controlled by the covariates Xi (Frolich, 2007), since the aggregate effect of unobservable factors εi is the same for all d ∈ {0, . . . , nD − 1}. Indeed, this model satisfies Assumption 4, because:
E(Ydi | Xi, P ̄(z)
i , Zi = z) − E(Yd*i | Xi, P ̄(z)
i , Zi = z) = g(Xi, d) − g(Xi, d*)+
+ E(εi | Xi, P ̄(z)
i , Zi = z) − E(εi | Xi, P ̄(z)
i , Zi = z)
⏟⏞
0
=
= g(Xi, d) − g(Xi, d*) = g(Xi, d) − g(Xi, d*)+
+ E(εi | Xi, P ̄(z)
i ) − E(εi | Xi, P ̄(z)
i)
⏟⏞
0
=
= E(Ydi | Xi, P ̄(z)
i ) − E(Yd*i | Xi, P ̄(z)
i ).
(16)
Therefore, we use these additional assumptions to establish an identification theorem for the ATE and ATET.
Theorem 2. Identification of ATE and ATET. Assumptions 1, 2, 3, 4, and 5 imply that:
ATE = E(Ydi − Yd*i) =
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)×
×E
(︁
μY (d, Xi, P ̄(z(t))
i , z(t)) − μY (d*, Xi, P ̄(z(t))
i , z(t))
)︁
,
(17)
ATET = E(Ydi − Yd*i | Z ̃i = 1, Di = d) =
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1, Di = d)×
×E
(︁
μY (d, Xi, P ̄(z)
i , z(t)) − μY (d*, Xi, P ̄(z)
i , z(t)) | Di = d
)︁
.
(18)
By Assumption 1, the conditional probabilities P ̄(z)
i are functions of (Di, Xi, W (Z)
i ). This fact, along with Assumptions 2 and 4, implies the identifiability of the conditional average treatment effect:
CATE = E(Ydi | Xi) − E(Yd*i | Xi) = E(Ydi | Xi, P ̄(z)
i ) − E(Yd*i | Xi, P ̄(z)
i)
⏟⏞
Assumption 2
=
= E(Ydi | Xi, P ̄(z)
i , Zi = z) − E(Yd*i | Xi, P ̄(z)
i , Zi = z)
⏟⏞
Assumption 4
=
= μY (d, Xi, P ̄(z(t))
i , z) − μY (d*, Xi, P ̄(z(t))
i , z),
(19)
where z ∈ {z(1), . . . , z(m)}. Alternatively, instead of choosing a specific value of z, it is possible to take a weighted average as in equation (17). The value of CATE is useful for studying the heterogeneity of treatment effects induced by the covariates Xi. However, in practice, researchers may be interested in investigating this heterogeneity associated with some endogenous groups. For this purpose, we establish an identification theorem for the ATE in endogenous subgroup (ATEG).
Theorem 2A. Identification of ATEG.
7

Consider a subvector Z(g)
i of Zi and a vector z(g)
i ∈ supp(Z(g)
i ) such that P(Z ̃i = 1 | Z(g)
i=
z(g)
i ) > 0. Under the assumptions of Theorem 2, we have:
ATEG = E(Ydi − Yd*i | Z(g)
i = z(g)
i )=
m
∑︁
t=1
P(Zi = z(t) | Z(g)
i = z(g)
i , Z ̃i = 1)×
×E
(︁
μY (d, Xi, P ̄(z(t))
i , z(t)) − μY (d*, Xi, P ̄(z(t))
i , z(t)) | Z(g)
i = z(g)
i
)︁
.
(20)
For example, if Di is a binary variable for the level of education, Ydi is a potential wage
under the d-th level of education, Z1i is a binary variable for employment status, and Z2i = Z(g)
i
is an ordinal variable for marriage type (0 – unmarried, 1 – civil married, 2 – officially married), then
ATEG = E(Ydi − Yd*i | Z(g)
i = 1), (21)
represents the average treatment effect of education on wages among civil married individuals. By using ATEG, researchers may study how marriage moderates the effect of education on wage. Note that ATES allows investigation of this heterogeneity among employed individuals without the fairly strong Assumption 4. The extension of Theorem 2A to ATET and LATE is straightforward and therefore omitted for brevity. Also, we do not discuss an estimator of ATEG since it is very similar to the estimator of -
ATES. It is fairly straightforward to adapt the results of this section to the case in which the treatment variable Di is also subject to non-random selection. For example, a researcher may study the effect of job satisfaction on wages, where both variables are observable only for working individuals. To address simultaneous sample selection in the outcome and treatment equations, it is sufficient to drop Di from gj(·) in Assumption 1. All theorems from this section hold under this modification, a-
nd P ̄(z)
i becomes a function of (Xi, W (Z)
i ) only.
4 Identification of LATE
Sometimes Assumption 2 is unrealistic since, in practice, the treatment variable Di may be endogenous. In this case, under some conditions, it is possible to identify the local average treatment effect (LATE), which is an average treatment effect in the population of compliers: individuals who take the treatment if and only if they are affected by the instrumental variable. To identify LATE in the MSSM, we modify the assumptions proposed by Frolich (2007). Assumption 1F. Structural model.
Outcome and treatment variables are generated as follows:
Di = W (D)
i D1i + (1 − W (D)
i )D0i, Yi = DiY1i + (1 − Di)Y0i,
Y1i = gY,1(W (D)
i , Xi, U (Y )
1i ), Y0i = gY,0(W (D)
i , Xi, U (Y )
0i ),
D1i = gD,1(Xi, U (D)
1i ), D0i = gD,0(Xi, U (D)
0i ),
supp(W (D)
i ) = supp(D0i) = supp(D1i) = {0, 1},
where gD,1(·), gD,0(·), gY,1(·), gY,0(·) are some functions (defined on their corresponding sup
ports), U (Y )
1i , U (D)
1i , U (Y )
0i , U (D)
0i are random errors, and D0i, D1i are potential treatments. The following notations are also used:
complieri = I(D1i > D0i), defieri = I(D0i > D1i),
always-takeri = I(D1i = D0i = 1), never-takeri = I(D1i = D0i = 0),
U (Y )
i = (U (Y )
0i , U (Y )
1i ), U (D)
i = (U (D)
0i , U (D)
1i ).
8

Assumption 2F. Monotonicity.
P(defieri = 1) = 0.
Assumption 3F. Existence of compliers.
P(complieri = 1 | Xi, Zi, W (Z)
i ) > 0.
Assumption 4F. Exogeneity of random errors.
(U (D)
i , U (Z)
i ) ⊥ (W (Z)
i , W (D)
i ) | Xi.
Assumption 5F. Exogeneity of instrumental variable and exclusion restrictions.
(Y0i, U (Z)
i ) ⊥ (W (Z)
i , W (D)
i ) | (Xi, A0i = 1) for A0i ∈ {complieri, never-takeri},
(Y1i, U (Z)
i ) ⊥ (W (Z)
i , W (D)
i ) | (Xi, A1i = 1) for A1i ∈ {complieri, always-takeri}.
Assumption 6F. Common support.
supp((Xi, Zi, W (Z)
i ) | W (D)
i = 1) = supp((Xi, Zi, W (Z)
i ) | W (D)
i = 0).
Assumption 7F. Multivariate ordinal selection with no direct effect of treatment on selection.
This assumption is the same as Assumption 1 with gj(Di, Xi, W (Z)
i ) replaced by
gj(Xi, W (Z)
i ).
Assumption 1F is a general setup usually considered in studies investigating the estimation of LATE. Assumptions 2F and 3F are very similar to Assumptions 1 and 2 of Frolich (2007), respectively. However, Assumption 3F requires positive conditional probabilities rather than unconditional ones as in Frolich (2007). In particular, Assumption 3F implies that compliers always exist in the observable Z ̃i = 1 population. Assumptions 4F and 5F strengthen Assumptions 3 and 4 of Frolich (2007) by requirin-
g conditional independence rather than equality in some conditional probabilities and expectations. Specifically, Assumptions 4F and 5F adapt Assumption 2 from the previous section to the LATE framework. Assumption 6F extends Assumption 5 of Frolich (2007) by including selection variables Zi and exclusion restrictions
W (Z)
i.
Assumption 7F is similar to Assumption 1 but is considerably stronger. Specifically, it means that the treatment variable Di should have no direct effect on the selection variables
Zji. Therefore, P ̄(z)
i does not depend on Di. For example, this assumption may be violated when estimating the effect of education on wages under non-random selection into employment. The reason is that, even conditional on the covariates, education likely has a direct effect not only on wages but also on the probability of employment. Nevertheless, the random errors of
the selection U (Z)
ji and treatment U (D)
i equations may be correlated, which allows for indirect dependence between the selection equations and the treatment variable. In particular, this implies that the treatment variable Di may be subject to non-random selection, i.e., it is
observable only when Z ̃i = 1. We establish the following analogue of Lemma 1 for the LATE framework. Lemma 2.
Assumptions 1F, 4F, and 7F imply that Ai ⊥ W (D)
i | (Xi, P ̄(z)
i , Zi = z) for any z ∈ supp(Zi) and Ai ∈ {complieri, defieri, always-takeri, never-takeri}. If, in addition, Assumption 5F holds, then:
Y0i ⊥ W (D)
i | (Xi, A0i = 1, P ̄(z)
i , Zi = z), for A0i ∈ {complieri, never-takeri},
Y1i ⊥ W (D)
i | (Xi, A1i = 1, P ̄(z)
i , Zi = z), for A1i ∈ {complieri, always-takeri}.
9

Note that, in contrast to Lemma 1, Lemma 2 establishes that potential outcomes are con
ditionally independent of the instrumental variable W (D)
i rather than the treatment Di. In addition, this conditional independence holds within the populations of compliers, never-takers, and always-takers. Similar to ATES and ATETS from the previous section, we consider LATES, which is the value of LATE in the subpopulation of observed individuals. Lemma 2, along with the aforementioned assumptions, allows us to establish the following identification result. Theorem 3. Identification of LATES.
Assumptions 1F, 2F, 3F, 4F, 5F, 6F, and 7F imply that:
LATES = E(Y1i − Y0i | complieri = 1, Z ̃i = 1) = ψ*
1 ψ*
2
, (22)
where
ψ*
1=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)E
[︁
μ ̄Y (1, Xi, P ̄(z(t))
i , z(t)) − μ ̄Y (0, Xi, P ̄(z(t))
i , z(t)) | Zi = z(t)]︁
,
ψ*
2=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)E
[︁
μ ̄D(1, Xi, P ̄(z(t))
i , z(t)) − μ ̄D(0, Xi, P ̄(z(t))
i , z(t)) | Zi = z(t)]︁
.
Surprisingly, in contrast to ATES and ATETS, the expression of LATES for m > 1 is not just a weighted combination of formulas for the case m = 1. Indeed, it is necessary to form such combinations separately in the numerator and denominator. The following assumption allows us to identify LATE in the whole population. Assumption 8F. Double conditional effect homogeneity. For all z ∈ supp(Zi), we have:
E(Y1i | Xi, P ̄(z)
i , Zi = z, complieri = 1) − E(Y0i | Xi, P ̄(z)
i , Zi = z, complieri = 1) =
= E(Y1i | Xi, P ̄(z)
i , complieri = 1) − E(Y0i | Xi, P ̄(z)
i , complieri = 1),
E(D1i | Xi, P ̄(z)
i , Zi = z) − E(D0i | Xi, P ̄(z)
i , Zi = z) = E(D1i | Xi, P ̄(z)
i ) − E(D0i | Xi, P ̄(z)
i ).
To simplify the proof of the identification theorem for LATE, we establish a useful lemma about the conditional independence of potential treatments and the instrumental variable. Lemma 3.
Assumptions 1F, 4F, and 7F imply that D1i ⊥ (W (D)
i , P ̄(z)
i ) | Xi, D0i ⊥ (W (D)
i , P ̄(z)
i ) | Xi,
D1i ⊥ W (D)
i | (Xi, P ̄(z)
i , Zi = z) and D0i ⊥ W (D)
i | (Xi, P ̄(z)
i , Zi = z).
By applying Lemma 3 and the aforementioned assumptions, we obtain the following identification result.
Theorem 4. Identification of LATE.
Assumptions 1F, 2F, 3F, 4F, 5F, 6F, 7F, and 8F imply that:
LATE = E(Y1i − Y0i | complieri = 1) = ψ1
ψ2
, (23)
where
ψ1 =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1) × E
[︁
μ ̄Y (1, Xi, P ̄(z(t))
i , z(t)) − μ ̄Y (0, Xi, P ̄(z(t))
i , z(t))
]︁
,
ψ2 =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1) × E
[︁
μ ̄D(1, Xi, P ̄(z(t))
i , z(t)) − μ ̄D(0, Xi, P ̄(z(t))
i , z(t))
]︁
.
10

In the case where m = 1, the only difference between equation (23) and the expression
obtained by Frolich (2007) is the additional conditioning on P ̄(z(1))
i and the selection Zi = z(1) in the conditional expectations (nuisance functions) of the outcome and treatment. To understand the limitations of estimating LATE in the considered model, we discuss Assumption 8F in greater detail. First, it imposes the same restriction on the difference in conditional expectations of potential outcomes as Assumption 4, but only for the population of compliers. In particular, this part of the assumption holds if the heterogeneity of the treatment effect among compl-
iers is due only to the covariates Xi (see the previous section for an example of such a model). Second, Assumption 8F imposes the following, more subtle restriction on the conditional expectations of potential treatments:
E(D1i | Xi, P ̄(z)
i , Zi = z) − E(D0i | Xi, P ̄(z)
i , Zi = z) =
= E(D1i | Xi, P ̄(z)
i ) − E(D0i | Xi, P ̄(z)
i ). (24)
Equality (24) obviously holds if random errors U (Z)
i and U (D)
i are independent, which is possible under a sufficiently rich set of covariates Xi. Also, equality (24), along with other assumptions, is implied by the following model. Consider a set S and explicitly define the compliers as complieri = QiI(Xi ∈ S), where Qi is a Bernoulli random variable with supp(Qi) = {0, 1} independent of any other variables in the model. Potential treatments and their conditional expectations are as follows:
D1i = complieri + (1 − complieri)h(Xi) + εi, (25)
D0i = (1 − complieri)h(Xi) + εi, (26)
where h(x) ∈ (0, 1) for any x ∈ supp(Xi), and the support of the random error εi is as follows:
supp(εi | Xi, complieri = 1) = {0}, (27)
supp(εi | Xi, complieri = 0) = {−h(Xi), 1 − h(Xi)}. (28)
To ensure that Assumption 3F holds, it is necessary to assume that P(I(Xi ∈ S)) > 0. Since D1i − D0i = complieri ≥ 0, Assumption 2F is satisfied. Denote for brevity:
E(complieri | Xi) = P(Qi = 1)I(Xi ∈ S) = ci. (29)
Equality (24) holds because:
E(D1i | Xi, P ̄(z)
i , Zi = z) − E(D0i | Xi, P ̄(z)
i , Zi = z) =
= ci + (1 − ci)h(Xi) − (1 − ci)h(Xi)+
+E(εi | Xi, P ̄(z)
i , Zi = z) − E(εi | Xi, P ̄(z)
i , Zi = z) =
= ci + (1 − ci)h(Xi) − (1 − ci)h(Xi) =
= ci + (1 − ci)h(Xi) − (1 − ci)h(Xi) + E(εi | Xi, P ̄(z)
i ) − E(εi | Xi, P ̄(z)
i)
= E(D1i | Xi, P ̄(z)
i ) − E(D0i | Xi, P ̄(z)
i ).
(30)
A key feature of this model is that compliers are explicitly determined by the covariates Xi and some completely exogenous factors Qi. Nevertheless, the treatment variable may be subject to non-random selection due to correlation (or other forms of dependence) between εi and U (Z)
i.
11

5 Plug-in estimators
The established identification theorems motivate the following plug-in estimators. Algorithm 1-PI. Plug-in estimator of ATE.
1. For each z ∈ {z(1), . . . , z(m)} and j ∈ {1, . . . , nZ}, obtain an estimate pˆ(z)
ji of P (z)
ji by
regressing I(Zji ≤ z(t)
j ) on (Di, Xi, W (Z)
i ). Similarly, obtain an estimate pˆ(z−1)
ji of P (z−1)
ji
by regressing I(Zji ≤ z(t)
j − 1) on (Di, Xi, W (Z)
i ). Combine these estimates into a vector:
pˆ(z)
i = pˆ(z) (︁
Di, Xi, W (Z)
i
)︁
=
(︁
pˆ(z−1)
1i , . . . , pˆ(z−1)
nZ i , pˆ(z)
1i , . . . , pˆ(z)
nZ i
)︁
, (31)
where pˆ(z)
i is an estimate of P ̄(z(t))
i.
2. For each z ∈ {z(1), . . . , z(m)}, obtain an estimate μˆY (·) of the nuisance function μY (·) by
regressing Yi on (Di, Xi, pˆ(z)
i ), using a sample of observations for which Zi = z.
3. Obtain an estimate of the ATE using the following formula:
AT [EPI = 1
n
m
∑︁
t=1
̂︀P
(︁
Zk = z(t) | Z ̃k = 1
)︁
×
×
n
∑︁
i=1
[︁
μˆY
(︁
d, Xi, pˆ(z(t))
i , z(t))︁
− μˆY
(︁
d*, Xi, pˆ(z(t))
i , z(t))︁]︁
,
(32)
where:
̂︀P
(︁
Zk = z(t) | Z ̃k = 1
)︁
=
n
∑︀
l=1
I
(︀ Zl = z(t))︀
n
∑︀
l=1
I
(︁ Z ̃l = 1
)︁ . (33)
Algorithm 2-PI. Plug-in estimator of ATES.
1. Obtain the same estimates as in Steps 1 and 2 of Algorithm 1-PI.
2. Obtain an estimate of ATES using the following formula:
AT \ ESPI =
∑︀
i:Z ̃i=1
[︁
μˆY
(︁
d, Xi, pˆ(Zi)
i , Zi
)︁
− μˆY
(︁
d*, Xi, pˆ(Zi)
i , Zi
)︁]︁
n
∑︀
l=1
I
(︁ Z ̃l = 1
)︁ . (34)
Algorithm 3-PI. Plug-in estimator of ATET.
1. Obtain the same estimates as in Steps 1 and 2 of Algorithm 1-PI.
2. Obtain an estimate of ATET using the following formula:
AT \ ETPI = 1
n
∑︀
k=1
I(Dk = d)
m
∑︁
t=1
̂︀P
(︁
Zk = z(t) | Z ̃k = 1, Dk = d
)︁
×
×
∑︁
i:Di=d
[︁
μˆY
(︁
d, Xi, pˆ(z(t))
i , z(t))︁
− μˆY
(︁
d*, Xi, pˆ(z(t))
i , z(t))︁]︁
.
(35)
where:
̂︀P
(︁
Zk = z(t) | Z ̃k = 1, Dk = d
)︁
=
∑︀
l:Dl=d
I(Zl = z(t))
∑︀
l:Dl=d
I(Z ̃l = 1) . (36)
12

Algorithm 4-PI. Plug-in estimator of ATETS.
1. Obtain the same estimates as in Steps 1 and 2 of Algorithm 1-PI.
2. Obtain an estimate of ATETS using the following formula:
AT\ ETSPI =
∑︀
i:Di=d,Z ̃i=1
[︁
μˆY
(︁
d, Xi, pˆ(Zi)
i , Zi
)︁
− μˆY
(︁
d*, Xi, pˆ(Zi)
i , Zi
)︁]︁
n
∑︀
l=1
I(Z ̃l = 1, Dl = d)
. (37)
Algorithm 5-PI. Plug-in estimator of LATE.
1. For each z ∈ {z(1), . . . , z(m)} and j ∈ {1, . . . , nZ}, obtain an estimate pˆ ̄(z)
ji of P (z)
ji by
regressing I(Zji ≤ z(t)
j ) on (Xi, W (Z)
i ). Similarly, obtain an estimate pˆ ̄(z−1)
ji of P(z−1)
ji by
regressing I(Zji ≤ z(t)
j − 1) on (Xi, W (Z)
i ). Combine these estimates into a vector:
pˆ ̄(z)
i = pˆ ̄(z)(Di, Xi, W (Z)
i )=
(︁
pˆ ̄(z−1)
1i , . . . , pˆ ̄(z−1)
nZi , pˆ ̄(z)
1i , . . . , pˆ ̄(z)
nZ i
)︁
, (38)
where pˆ ̄(z)
i is an estimate of P ̄(z)
i.
2. For each z ∈ {z(1), . . . , z(m)}, obtain an estimate μˆ ̄Y (·) of the nuisance function μ ̄Y (·) by
regressing Yi on (W (D)
i , Xi, pˆ ̄(z)
i ) using a sample of observations for which Zi = z.
3. For each z ∈ {z(1), . . . , z(m)}, obtain an estimate μˆ ̄D(·) of the nuisance function μ ̄D(·) by
regressing Di on (W (D)
i , Xi, pˆ ̄(z)
i ) using a sample of observations for which Zi = z.
4. Obtain an estimate of LATE using the following formula:
LA \ TEPI =
=
m
∑︀
t=1
̂︀P
(︁
Zk = z(t) | Z ̃k = 1
)︁n ∑︀
i=1
[︁
μˆ ̄Y
(︁
1, Xi, pˆ ̄(z(t))
i , z(t)
)︁
− μˆ ̄Y
(︁
0, Xi, pˆ ̄(z(t))
i , z(t)
)︁]︁
m
∑︀
t=1
̂︀P
(︁
Zk = z(t) | Z ̃k = 1
)︁n ∑︀
i=1
[︁
μˆ ̄D
(︁
1, Xi, pˆ ̄(z(t))
i , z(t)
)︁
− μˆ ̄D
(︁
0, Xi, pˆ ̄(z(t))
i , z(t)
)︁]︁ .
(39)
Algorithm 6-PI. Plug-in estimator of LATES.
1. Obtain the same estimates as in Steps 1, 2, and 3 of Algorithm 5-PI.
2. Obtain an estimate of LATES using the following formula:
LA\ TESPI =
∑︀
i:Z ̃i=1
[︁
μˆ ̄Y
(︁
1, Xi, pˆ ̄(Zi)
i , Zi
)︁
− μˆ ̄Y
(︁
0, Xi, pˆ ̄(Zi)
i , Zi
)︁]︁
∑︀
i:Z ̃i=1
[︁
μˆ ̄D
(︁
1, Xi, pˆ ̄(Zi)
i , Zi
)︁
− μˆ ̄D
(︁
0, Xi, pˆ ̄(Zi)
i , Zi
)︁]︁ . (40)
If nuisance functions are estimated via non-parametric regressions (for example, machine learning methods), then the aforementioned estimators are subject to regularization and overfitting biases (Chernozhukov et al., 2018). To avoid these biases, in the following sections we derive estimators based on efficient influence functions and use cross-fitting.
13

6 Efficient influence functions in the latent model
The following lemma greatly simplifies the derivation of the efficient influence functions considered in the article. Lemma 4.
Consider a random variable Y , a random vector X, and Bernoulli random variables A, Z such that P(Z = 1) > 0 and P(A = 1 | X) > 0. In addition, let hY (x) = E(Y | X = x, A = 1), where x ∈ supp(X | A = 1). Then the estimand Ψ = E(hY (X) | Z = 1) has the following efficient influence function:
EIF(Ψ) = A × hZ(X)
P(Z = 1)hA(X) [Y − hY (X)] + Z
P(Z = 1) [hY (X) − Ψ] , (41)
where hZ(x) = P(Z = 1 | X = x) and hA(x) = P(A = 1 | X = x).
We also establish a simple lemma which may be useful for deriving Neyman-orthogonal scores for problems involving generated regressors. Lemma 4A.
Consider a score φ (O, h1, h2, Ψ), where O is an observation, Ψ is the target parameter, and h1, h2 are nuisance functions with true values h0
1 and h0
2, respectively. Suppose that φ (.) depends on nuisance functions through a composition structure, i.e., there exists a function φ* (.) such that:
φ (O, h1, h2, Ψ) = φ* (O, H, Ψ) , where H (O) = h1 (O, h2 (O)) . (42)
Assume that the map h2 ↦→ h1(., h2(.)) is Gaˆteaux differentiable at h0
2. Furthermore, the score φ* (.) is Neyman-orthogonal with respect to H at H0, where H0 (O) = h0
1(O, h0
2(O)). Then, φ (.) is Neyman-orthogonal with respect to (h1, h2) at (h0
1, h0
2) under simultaneous perturbations.
Using Lemma 4, it is straightforward to derive influence functions that are similar to those obtained by Bia et al. (2024). However, unless some assumptions are satisfied, these influence functions are not efficient in the MSSM. The reason is that P ̄(z)
i are generated regressors but are treated as known in the framework of Lemma 4. Nevertheless, despite not being efficient, Lemma 4A implies that these influence functions produce Neyman-orthogonal scores and therefore may be used to construct DML estimators. In addition, the scores based on these influence functions are doubly robust. The following lemma formally establishes these properties. Lemma 4B.
In addition to the random variables and vectors from Lemma 4, consider random vectors W and G. The following score is Neyman-orthogonal:
φ(O, h, Ψ) = A × hZ(X, hG(W ))
P(Z = 1)hA(X, hG(W )) [Y − hY (X, hG(W ))] +
+Z
P(Z = 1) [hY (X, hG(W )) − Ψ] ,
(43)
where O = (X, W, Y, A, Z) is an observation, and the nuisance functions are as follows:
hy(x, v) = E(Y | X = x, hG(W ) = v, A = 1), (44)
hG(w) = E(G | W = w), (45)
hZ(x, v) = P(Z = 1 | X = x, hG(W ) = v), (46)
hA(x, v) = P(A = 1 | X = x, hG(W ) = v), (47)
h(O) = (hG(W ), hZ(X, hG(W )), hA(X, hG(W )), hY (X, hG(W ))) . (48)
In addition, the score in equation (43) is doubly robust in the sense that it has zero expectation if the model for generated regressors hG(w) is correctly specified and at least one of the following conditions holds:
14

1. The conditional mean of the outcome hY (x, v) is correctly specified.
2. The propensity scores hZ(x, v) and hA(x, v) are correctly specified.
Note that the score used in Lemma 4B is derived from the efficient influence function established in Lemma 4 by replacing X with (X, hG(W )) and treating hG(W ) as known. However, this score is not efficient with respect to the estimand that treats hG(W ) as unknown. Therefore, we call the model in which P ̄(z)
i are known the "latent model", since researchers do not observe these probabilities in the data. Below we use Lemma 4 to derive efficient influence
functions for this model. However, despite the unrealistic assumption that P ̄(z)
i are known, Lemma 4B ensures that the scores derived from these influence functions will be Neymanorthogonal and doubly robust. First, we consider the case m = 1.
Theorem 5. Efficient influence functions of ATE and ATES for m=1 in the latent model.
Under the assumptions from Theorem 2, the efficient influence function of ATE in the latent model is as follows:
EIFATE = I(Di = d, Zi = z)
μZ (z, Xi, P ̄(z)
i )μD(d, Xi, P ̄(z)
i)
(︁
Yi − μY (d, Xi, P ̄(z)
i , z)
)︁
−
− I(Di = d*, Zi = z)
μZ (z, Xi, P ̄(z)
i )μD(d*, Xi, P ̄(z)
i)
(︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
)︁
+
+μY (d, Xi, P ̄(z)
i , z) − μY (d*, Xi, P ̄(z)
i , z) − ATE.
(49)
Under the assumptions from Theorem 1, the efficient influence function of ATES in the latent model is as follows:
EIFATES = I(Zi = z)
P(Zi = z)
(︂ I(Di = d)
μD(d, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
−
− I(Di = d*)
μD(d*, Xi, P ̄(z)
i)
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
+
+μY (d, Xi, P ̄(z)
i , z) − μY (d*, Xi, P ̄(z)
i , z) − ATES
)︂
.
(50)
Theorem 6. Efficient influence functions of ATET and ATETS for m=1 in the latent model.
Under the assumptions from Theorem 2, the efficient influence function of ATET in the latent model is as follows:
EIFATET = I(Di = d)
P(Di = d)
(︃
I(Zi = z)
μZ (z, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+
+ μY (d, Xi, P ̄(z)
i , z) − μY (d*, Xi, P ̄(z)
i , z) − ATET
)︃
−
− I(Di = d*, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d)μD(d*, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
.
(51)
Under the assumptions from Theorem 1, the efficient influence function of ATETS in the latent model is as follows:
EIFATETS = I(Di = d, Zi = z)
P(Di = d, Zi = z)
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z) − ATETS
]︁
−
− I(Di = d*, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d, Zi = z)μD(d*, Xi, P ̄(z)
i)
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
.
(52)
15

Theorem 7. Efficient influence functions of LATE and LATES for m=1 in the latent model.
Under the assumptions from Theorem 4, the efficient influence function of LATE in the latent model is as follows:
EIFLATE = ψ1i − ψ2iLATE
ψ2
, (53)
where: LATE = ψ1/ψ2, (54)
ψ1 = E
[︁
μ ̄Y (1, Xi, P ̄(z)
i , z) − μ ̄Y (0, Xi, P ̄(z)
i , z)
]︁
, (55)
ψ2 = E
[︁
μ ̄D(1, Xi, P ̄(z)
i , z) − μ ̄D(0, Xi, P ̄(z)
i , z)
]︁
, (56)
and:
ψ1i =μ ̄Y (1, Xi, P ̄(z)
i , z) − μ ̄Y (0, Xi, P ̄(z)
i , z)+
+ I(W (Z)
i = 1, Zi = z)
μ ̄W (1, Xi, P ̄(z)
i )μ ̄Z (z, Xi, P ̄(z)
i)
(︁
Yi − μ ̄Y (1, Xi, P ̄(z)
i , z)
)︁
−
− I(W (Z)
i = 0, Zi = z)
μ ̄W (0, Xi, P ̄(z)
i )μ ̄Z (z, Xi, P ̄(z)
i)
(︁
Yi − μ ̄Y (0, Xi, P ̄(z)
i , z)
)︁
,
(57)
ψ2i =μ ̄D(1, Xi, P ̄(z)
i , z) − μ ̄D(0, Xi, P ̄(z)
i , z)+
+ I(W (Z)
i = 1, Zi = z)
μ ̄W (1, Xi, P ̄(z)
i )μ ̄Z (z, Xi, P ̄(z)
i)
(︁
Di − μ ̄D(1, Xi, P ̄(z)
i , z)
)︁
−
− I(W (Z)
i = 0, Zi = z)
μ ̄W (0, Xi, P ̄(z)
i )μ ̄Z (z, Xi, P ̄(z)
i)
(︁
Di − μ ̄D(0, Xi, P ̄(z)
i , z)
)︁
.
(58)
Under the assumptions from Theorem 3, the efficient influence function of LATES in the latent model is as follows:
EIFLATES = ψ*
1i − ψ*
2iLATES
ψ*
2
, (59)
where:
ψ*
1 =E
[︁
μ ̄Y (1, Xi, P ̄(z)
i , z) − μ ̄Y (0, Xi, P ̄(z)
i , z) | Zi = z
]︁
, (60)
ψ*
2 =E
[︁
μ ̄D(1, Xi, P ̄(z)
i , z) − μ ̄D(0, Xi, P ̄(z)
i , z) | Zi = z
]︁
, (61)
and:
ψ*
1i = I(Zi = z)
P(Zi = z)
(︃
I(W (D)
i = 1)
μ ̄W (1, Xi, P ̄(z)
i)
[︁
Yi − μ ̄Y (1, Xi, P ̄(z)
i , z)
]︁
−
− I(W (D)
i = 0)
μ ̄W (0, Xi, P ̄(z)
i)
[︁
Yi − μ ̄Y (0, Xi, P ̄(z)
i , z)
]︁
+
+ μ ̄Y (1, Xi, P ̄(z)
i , z) − μ ̄Y (0, Xi, P ̄(z)
i , z)
)︃
,
(62)
ψ*
2i = I(Zi = z)
P(Zi = z)
(︃
I(W (D)
i = 1)
μ ̄W (1, Xi, P ̄(z)
i)
[︁
Di − μ ̄D(1, Xi, P ̄(z)
i , z)
]︁
−
− I(W (D)
i = 0)
μ ̄W (0, Xi, P ̄(z)
i)
[︁
Di − μ ̄D(0, Xi, P ̄(z)
i , z)
]︁
+
+ μ ̄D(1, Xi, P ̄(z)
i , z) − μ ̄D(0, Xi, P ̄(z)
i , z)
)︃
.
(63)
16

Generalization from m = 1 to m ≥ 1 is straightforward and explained in Part 2 of the proof of Theorem 5. Specifically, if Ψ is an estimand of ATE, ATES, ATET, or ATETS and Ψt is a corresponding estimand for m = 1, where z = z(t), then the efficient influence function for m ≥ 1 is as follows:
EIF(Ψ) =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)EIF(Ψt)+
+
Z ̃i
[︁
I(Zi = z(t)) − P(Zi = z(t) | Z ̃i = 1)
]︁
P(Z ̃i = 1) Ψt,
(64)
where the formulas for EIF(Ψt) are provided in Theorems 5 and 6. Generalization to the case m ≥ 1 for LATE and LATES is similar and discussed in Part 3 of the proof of Theorem 7.
7 Efficient influence functions in the actual model
The aforementioned efficient influence functions do not address the fact that P ̄(z)
i are generated regressors. Therefore, we establish a lemma that allows us to relax this assumption and derive efficient influence functions for the actual model, i.e., taking into account that the conditional probabilities are unknown. Lemma 5.
Consider the setup of Lemma 4B. In addition, suppose that the nuisance function hY (x, v) is differentiable with respect to v at any point (x, v) ∈ supp((X, E(G | W ))). Then the estimand Ψ* = E(hY (X, hG(W )) | Z = 1) has the following efficient influence function:
EIF(Ψ*) = A × hZ(X, hG(W ))
P(Z = 1)hA(X, hG(W )) [Y − hY (X, hG(W ))] +
+Z
P(Z = 1) [hY (X, hG(W )) − Ψ*] + h*
Z(W )
P(Z = 1)
⎡
⎣G − hG(W )
⏟⏞
row vector
⎤
⎦×
×E
⎛
⎜ ⎝
∂
∂v [hY (X, v)] ⃒
⃒ v=hG(W )
⏟⏞
column vector
| W, Z = 1
⎞
⎟
⎠=
= EIF(Ψ) + h*
Z(W )
P(Z = 1) [G − hG(W )] ×
×E
(︂∂
∂v [hY (X, v)] ⃒
⃒ v=hG(W ) | W, Z = 1
)︂
,
(65)
where h*
Z(w) = P(Z = 1 | W = w) and EIF(Ψ) coincides with the score from Lemma 4B.
Specifically, Lemma 5 generalizes Lemma 4 to the case of generated regressors hG(W ). Note that the scores based on the efficient influence functions are Neyman-orthogonal. Therefore, this property holds for the score based on the efficient influence function from Lemma 5. This score is also doubly robust in the same sense as in Lemma 4B. The reason is that EIF(Ψ*) is a sum of EIF(Ψ) from Lemma 4B and an additional term whose expectation is obviously zero when hG(W ) is correctly specified. Unfort-
unately, Lemma 5 does not allow us to relax the need for correct specification of hG(W ). However, the derivative term is robust to misspecification because it is part of a term that vanishes under the correct specification of hG(W ). If X is a subvector of W , then the efficient influence function from Lemma 5 simplifies to:
EIF(Ψ*) =EIF(Ψ) + h*
Z(W )
P(Z = 1) × [G − hG(W )]
[︂∂
∂v [hY (X, v)] ⃒
⃒ v=hG(W )
]︂
. (66)
17

This representation would be common in practice (including our case) since usually W is a union of covariates X and exclusion restrictions. If, in addition, Z is an element of W , which is relevant for ATET and ATETS, then h*
Z(W ) = I(Z = 1).
To justify an application of Lemma 5, we need the following assumption. Assumption 1D. Differentiability of nuisance function.
The function μY (d, x, p, z) is differentiable with respect to p at any point (d, x, p, z) ∈
supp(Di, Xi, P ̄(Zi)
i , Zi). Also, consider the following notations:
Z ̄i = (I(Z1i ≤ z1 − 1), . . . , I(Z1i ≤ znZ − 1),
I(Z1i ≤ z1), . . . , I(ZnZi ≤ znZ )) , (67)
μ∂Y (d, x, p, z) = ∂
∂v μY (d, x, v, z)⃒
⃒ v=p, (68)
Ri =
[︁ Z ̄i − P ̄(z)
i
]︁
×
[︁
μ∂Y (d, Xi, P ̄(z)
i , z) − μ∂Y (d*, Xi, P ̄(z)
i , z)
]︁
. (69)
Before proceeding, we establish the following lemma. Lemma 6.
Assumptions 1-4 and 1D imply that Ri = 0.
By applying Lemmas 5 and 6, we obtain efficient influence functions for the case m = 1 in the actual model. Generalization to m ≥ 1 is the same as described above for efficient influence functions in the latent model and is therefore omitted for brevity.
Theorem 8. Efficient influence functions of ATE and ATES for m=1.
Under the assumptions from Theorem 2, the efficient influence function of ATE is as follows:
EIF*
ATE =EIFATE, (70)
where the expression for EIFATE is provided in Theorem 5. Under the assumptions from Theorem 1 and Assumption 1D, the efficient influence function of ATES is as follows:
EIF*
ATES =EIFATES + P(Zi = z | Di, Xi, W (Z)
i)
P(Zi = z) Ri, (71)
where the expression for EIFATES is provided in Theorem 5.
Theorem 9. Efficient influence functions of ATET and ATETS for m=1.
Under the assumptions from Theorem 2, the efficient influence function of ATET is as follows: EIF*
ATET =EIFATET, (72)
where the expression for EIFATET is provided in Theorem 6. Under the assumptions from Theorem 1 and Assumption 1D, the efficient influence function of ATETS is as follows:
EIF*
ATETS =EIFATETS + I(Di = d)P(Zi = z | Di = d, Xi, W (Z)
i)
P(Zi = z, Di = d) Ri, (73)
where the expression for EIFATETS is provided in Theorem 6.
Therefore, due to Lemma 6, the efficient influence functions remain the same for ATE and ATET in the actual and latent models. However, the expressions for ATES and ATETS have extra terms involving derivatives. Note that if μY (d, x, p, z) is linear in p, then the derivatives μ∂Y (d, x, p, z) are constants. Unfortunately, in the general case, they may be more complicated. However, under some settings, the estimation of these derivatives is fairly straightforward. For example, if the estimator
18

of μY (d, x, p, z) is a polynomial regression, then an estimate of the conditional expectation of the derivatives will be a polynomial whose coefficients are obtained during the estimation of μY (d, x, p, z). Similarly, it is straightforward to estimate the derivatives if another smooth estimator of μY (d, x, p, z) is used. To derive the efficient influence functions for LATE and LATES, we need to modify Assumption 1D in the following way.
Assumption 1DF. Differentiability of nuisance functions.
The functions μ ̄Y (w, x, p, z) and μ ̄D(w, x, p, z) are differentiable with respect to p at any
point (x, v, w, z) ∈ supp(Xi, P ̄(Zi)
i , W (D)
i , Zi). Also, consider the following notations:
μ ̄∂Y (w, x, p, z) = ∂
∂v μ ̄Y (w, x, v, z)⃒
⃒ v=p, (74)
μ ̄∂D(w, x, p, z) = ∂
∂v μ ̄D(w, x, v, z)⃒
⃒ v=p, (75)
R ̄(Y )
i=
[︁ Z ̄i − P ̄(z)
i
]︁
×
[︁
μ ̄∂Y (1, Xi, P ̄(z)
i , z) − μ ̄∂Y (0, Xi, P ̄(z)
i , z)
]︁
, (76)
R ̄(D)
i=
[︁ Z ̄i − P ̄(z)
i
]︁
×
[︁
μ ̄∂D(1, Xi, P ̄(z)
i , z) − μ ̄∂D(0, Xi, P ̄(z)
i , z)
]︁
. (77)
Similarly to Lemma 6, we establish the following result. Lemma 6A.
Assumptions 1F, 4F, 5F, 8F, and 1DF imply that R ̄(Y )
i = 0 and R ̄(D)
i = 0.
By employing Assumption 1DF, Lemma 5, and Lemma 6A, we establish efficient influence functions for LATE and LATES in the actual model.
Theorem 10. Efficient influence functions of LATE and LATES for m=1.
Under the assumptions from Theorem 4, the efficient influence function of LATE is as follows: EIF*
LATE =EIFLATE, (78)
where the expression for EIFLATE is provided in Theorem 7. Under the assumptions from Theorem 3 and Assumption 1DF, the efficient influence function of LATES is as follows:
EIF*
LATES =
(︁
ψ*
1i + R ̄(Y *)
i
)︁
−
(︁
ψ*
2i + R ̄(D*)
i
)︁
LATES
ψ*
2
=
=EIFLATES +
R ̄(Y *)
i − R ̄(D*)
i LATES
ψ*
2
,
(79)
where the expressions for ψ*
2, ψ*
1i, ψ*
2i, and EIFLATES are provided in Theorem 7, and:
R ̄(Y *)
i = P(Zi = z | Xi, W (Z)
i) P(Zi = z)
R ̄(Y )
i,
R ̄(D*)
i = P(Zi = z | Xi, W (Z)
i) P(Zi = z)
R ̄(D)
i.
(80)
Therefore, the efficient influence function of LATE is the same in the latent and actual models. However, the expression for LATES involves derivatives.
19

8 Double machine learning estimators
Consider score functions that are the same as efficient influence functions derived in the previous section. It is straightforward to show that these score functions are linear in corresponding causal parameters, so construction of DML estimators is straightforward. Specifically, our DML estimator of ATE is the following modification of the algorithm proposed by Bia et al. (2024).
Algorithm 1-DML. Double machine learning estimator of ATE for m=1.
1. Split the sample into K (approximately) equal non-overlapping subsamples. The k-th of these subsamples is denoted by Qk, while its complement is Q ̄k. Also, split each comple
ment Q ̄k into two (approximately) equal non-overlapping parts, denoted as Q ̄k1 and Q ̄k2. Denote by qi a variable such that qi = k implies that i-th observation is from subsample Qk.
2. For each k ∈ {1, . . . , K} and t ∈ {1, 2} obtain an estimator pˆ(z,k,t) of p(z)(·) by regressing
I(Zji ≤ zj − 1) and I(Zji ≤ zj) on (Xi, Di, W (Z)
i ) for each j ∈ {1, . . . , nZ} using sample
Q ̄ kt .
3. For each k ∈ {1, . . . , K}, t ∈ {1, 2}, and d ̄ ∈ {d, d*}, obtain the following estimators:
μˆ(k,t)
Y (d, x, pˆ(z,k,3−t)(d ̃, x, w), z), (81)
μˆ(k,t)
D (d, x, pˆ(z,k,3−t)(d ̃, x, w)), (82)
μˆ(k,t)
Z (z, x, pˆ(z,k,3−t)(d ̃, x, w)). (83)
Specifically, to obtain μˆ(k,t)
Y (·), regress Yi on (Di, Xi, pˆ(z,k,3−t)(Di, Xi, W (Z)
i )) using such
observations in Q ̄kt for which Zi = z. Similarly, to obtain μˆ(k,t)
D (·) and μˆ(k,t)
Z (·), regress
Di and I(Zi = z), respectively, on (Xi, pˆ(z,k,3−t)(Di, Xi, W (Z)
i )) using sample Q ̄kt.
4. For each k ∈ {1, . . . , K} and d ̄ ∈ {d, d*}, average the estimators:
μˆ(k)
Y (d, x, w, z, d ̃) = 0.5
(︁
μˆ(k,1)
Y (d, x, pˆ(z,k,2)(d ̃, x, w), z) +
+ μˆ(k,2)
Y (d, x, pˆ(z,k,1)(d ̃, x, w), z)
)︁
, (84)
μˆ(k)
D (d, x, w, d ̃) = 0.5
(︁
μˆ(k,1)
D (d, x, pˆ(z,k,2)(d ̃, x, w)) +
+ μˆ(k,2)
D (d, x, pˆ(z,k,1)(d ̃, x, w))
)︁
, (85)
μˆ(k)
Z (z, x, w, d ̃) = 0.5
(︁
μˆ(k,1)
Z (z, x, pˆ(z,k,2)(d ̃, x, w)) +
+ μˆ(k,2)
Z (z, x, pˆ(z,k,1)(d ̃, x, w))
)︁
, (86)
μˆ(k)
∂Y (d, x, w, z, d ̃) = 0.5
(︁
μˆ(k,1)
∂Y (d, x, pˆ(z,k,2)(d ̃, x, w), z) +
+ μˆ(k,2)
∂Y (d, x, pˆ(z,k,1)(d ̃, x, w), z)
)︁
, (87)
pˆ(z,k)(d ̃, x, w) = 0.5
(︁
pˆ(z,k,1)(d ̃, x, w) + pˆ(z,k,2)(d ̃, x, w)
)︁
. (88)
5. Obtain an estimate:
AT [EDML = 1
n
n
∑︁
i=1
rATE
i,z , (89)
20

where:
rATE
i,z = μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di) − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)+
+ I(Di = d, Zi = z)
μˆ(qi)
Z (z, Xi, W (Z)
i , Di)μˆ(qi)
D (d, Xi, W (Z)
i , Di)
×
×
(︁
Yi − μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di)
)︁
−
− I(Di = d*, Zi = z)
μˆ(qi)
Z (z, Xi, W (Z)
i , Di)μˆ(qi)
D (d*, Xi, W (Z)
i , Di)
×
×
(︁
Yi − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
)︁
.
(90)
In Step 1 of Algorithm 1-DML, we obtain the subsamples required for cross-fitting. In Step 2, we obtain estimates of the conditional probabilities of selection. In Steps 3 and 4, we estimate other nuisance functions. Note that, following Bia et al. (2024), for estimation of these nuisance functions, we use estimators of conditional probabilities of selection obtained from other samples. In Step 5, we obtain a double machine learning estimator. We emphasize the calculation of values rATE
i,z since they are further required for estimation of the asymptotic variance. In contrast to Bia et al. (2024), our estimator of ATES is based on the efficient influence function of the actual model.
Algorithm 2-DML. Double machine learning estimator of ATES for m=1.
1. Obtain the same subsamples and estimators as in Steps 1-4 of Algorithm 1-DML. However, for each k ∈ {1, . . . , K}, instead of μˆ(k)
Z , obtain an estimator μˆ(k)
Z* (d, x, w) of P(Zi =
z | Di = d, Xi = x, W (Z)
i = w) by regressing I(Zi = z) on (Di, Xi, W (Z)
i ) using sample Q ̄k.
2. Estimate the unconditional probability of selection:
̂︀P(Zi = z) = 1
n
n
∑︁
i=1
I(Zi = z). (91)
3. Obtain an estimator of the gradient:
μˆ(k,t)
∂Y (d, x, pˆ(z,k,3−t)(d ̃, x, w), z). (92)
If μˆ(k,t)
Y (·) is differentiable with respect to pˆ(z,k,3−t)(·), then taking this derivative yields
μˆ(k,t)
∂Y (·). In particular, this is the case if a smoothed estimator (like polynomial, spline, or
kernel regression) is used to obtain μˆ(k,t)
Y (·). Otherwise, a more complex approach should
be applied to obtain μˆ(k,t)
∂Y (·). For example, if a random forest is used to obtain μˆ(k,t)
Y (·),
then numerical differentiation of μˆ(k,t)
Y (·) with respect to pˆ(z,k,3−t)(·) yields μˆ(k,t)
∂Y (·).
4. Obtain an estimate:
AT \ ESDML = 1
n
n
∑︁
i=1
rATES
i,z , (93)
21

where:
rATES
i,z = I(Zi = z)
̂︀P(Zi = z)
[︁
μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di) − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
]︁
+
+ I(Zi = z)
̂︀P(Zi = z)
I(Di = d)
μˆ(qi)
D (d, Xi, W (Z)
i , Di)
(︁
Yi − μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di)
)︁
−
− I(Zi = z)
̂︀P(Zi = z)
I(Di = d*)
μˆ(qi)
D (d*, Xi, W (Z)
i , Di)
(︁
Yi − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
)︁
+
+ I(Zi = z)
̂︀P(Zi = z) μˆ(k)
Z* (Di, Xi, W (Z)
i )×
[︁ Z ̄i − pˆ(z,qi)(Di, Xi, W (Z)
i)
]︁
⏟⏞
row vector
×
×
[︁
μˆ(qi)
∂Y (d, Xi, W (Z)
i , z, Di) − μˆ(qi)
∂Y (d*, Xi, W (Z)
i , z, Di)
]︁
⏟⏞
column vector
.
(94)
Note that Lemma 4A and Lemma 5 (along with some regularity conditions) imply that if estimation of the derivatives μˆ(qi)
∂Y (·) is problematic, then one may simply set them to zero (omit the last term in the estimator) without substantial loss of robustness. Specifically, the estimator would preserve double-robustness in the sense that when, for each k ∈ {1, . . . , K},
estimator pˆ(z,k)(·) is consistent, then consistency of AT \ ESDML is implied by any of the following conditions:
• The estimator of the expected outcome μˆ(k)
Y (·) is consistent for each k ∈ {1, . . . , K}.
• The estimator of the propensity score μˆ(k)
D (·) is consistent for each k ∈ {1, . . . , K}.
A formal proof and the regularity conditions for the double-robustness of AT \ ESDML are omitted for brevity. However, the intuition should be clear from the discussion following Lemma 4B and Lemma 5. Similar reasoning regarding double-robustness applies to the estimator of ATE and other estimators provided below.
Algorithm 3-DML. Double machine learning estimator of ATET for m=1.
1. Obtain the same subsamples and estimators as in Steps 1-4 of Algorithm 1-DML.
2. Estimate the unconditional probability of treatment:
̂︀P(Di = d) = 1
n
n
∑︁
i=1
I(Di = d). (95)
3. Obtain an estimate:
AT \ ETDML = 1
n
n
∑︁
i=1
rATET
i,z , (96)
where:
rATET
i,z = I(Di = d)
̂︀P(Di = d)
[︁
μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di) − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
]︁
+
+ I(Di = d)
̂︀P(Di = d)
I(Zi = z)
μˆ(qi)
Z (z, Xi, W (Z)
i , Di)
(︁
Yi − μˆ(qi)
Y (d, Xi, W (Z)
i , z, Di)
)︁
−
− I(Di = d*)
̂︀P(Di = d)
I(Zi = z)
μˆ(qi)
Z (z, Xi, W (Z)
i , Di)
×
× μˆ(qi)
D (d, Xi, W (Z)
i , Di)
μˆ(qi)
D (d*, Xi, W (Z)
i , Di)
(︁
Yi − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
)︁
.
(97)
22

Algorithm 4-DML. Double machine learning estimator of ATETS for m=1.
1. Obtain the same subsamples and estimators as in Steps 1 and 3 of Algorithm 2-DML.
2. Estimate the joint unconditional probability of treatment and selection:
̂︀P(Di = d, Zi = z) = 1
n
n
∑︁
i=1
I(Di = d)I(Zi = z). (98)
3. Obtain an estimate:
AT\ ETSDML = 1
n
n
∑︁
i=1
rATETS
i,z , (99)
where:
rATETS
i,z = I(Di = d)I(Zi = z)
̂︀P(Di = d, Zi = z)
[︁
Yi − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
]︁
+
− I(Di = d*)I(Zi = z)
̂︀P(Di = d, Zi = z)
μˆ(qi)
D (d, Xi, W (Z)
i , Di)
μˆ(qi)
D (d*, Xi, W (Z)
i , Di)
[︁
Yi − μˆ(qi)
Y (d*, Xi, W (Z)
i , z, Di)
]︁
+ I(Di = d)
̂︀P(Di = d, Zi = z) μˆ(k)
Z* (Di, Xi, W (Z)
i )×
[︁ Z ̄i − pˆ(z,qi)(Di, Xi, W (Z)
i)
]︁
⏟⏞
row vector
×
×
[︁
μˆ(qi)
∂Y (d, Xi, W (Z)
i , z, Di) − μˆ(qi)
∂Y (d*, Xi, W (Z)
i , z, Di)
]︁
⏟⏞
column vector
.
(100)
Algorithm 5-DML. Double machine learning estimator of LATE for m=1.
1. Use the same approach as in Steps 1-4 of Algorithm 1-DML to obtain the subsamples and the following estimators:
μˆ ̄(k)
Y (w ̃, x, w, z) = 0.5
(︁
μˆ ̄(k,1)
Y (w ̃, x, pˆ ̄(z,k,2)(x, w), z) +
+ μˆ ̄(k,2)
Y (w ̃, x, pˆ ̄(z,k,1)(x, w), z)
)︁
, (101)
μˆ ̄(k)
D (w ̃, x, w, z) = 0.5
(︁
μˆ ̄(k,1)
D (w ̃, x, pˆ ̄(z,k,2)(x, w), z) +
+ μˆ ̄(k,2)
D (w ̃, x, pˆ ̄(z,k,1)(x, w), z)
)︁
, (102)
μˆ ̄(k)
Z (z, x, w) = 0.5
(︁
μˆ ̄(k,1)
Z (z, x, pˆ ̄(z,k,2)(x, w))+
+ μˆ ̄(k,2)
Z (z, x, pˆ ̄(z,k,1)(x, w))
)︁
, (103)
μˆ ̄(k)
W (w ̃, x, w) = 0.5
(︁
μˆ ̄(k,1)
W (w ̃, x, pˆ(z,k,2)(x, w)) + μˆ ̄(k,2)
W (w ̃, x, pˆ(z,k,1)(x, w))
)︁
, (104)
pˆ ̄(z,k)(x, w) = 0.5 (︀ pˆ ̄(z,k,1)(x, w) + pˆ ̄(z,k,2)(x, w))︀ , (105)
where pˆ ̄(z,k) is the same as pˆ(z,k) from Algorithm 1-DML but without Di.
2. Obtain an estimate:
LA \ TEDML = ψˆ1/ψˆ2, (106)
where:
ψˆ1 = 1
n
n
∑︁
i=1
ψˆ1i, ψˆ2 = 1
n
n
∑︁
i=1
ψˆ2i, (107)
23

ψˆ1i =μˆ ̄(qi)
Y (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
Y (0, Xi, W (Z)
i , z)+
+ I(W (D)
i = 1, Zi = z)
μˆ ̄(qi)
Z (z, Xi, W (Z)
i )μˆ ̄(qi)
W (1, Xi, W (Z)
i)
(︁
Yi − μˆ ̄(qi)
Y (1, Xi, W (Z)
i , z)
)︁
−
− I(W (D)
i = 0, Zi = z)
μˆ ̄(qi)
Z (z, Xi, W (Z)
i )μˆ ̄(qi)
W (0, Xi, W (Z)
i)
(︁
Yi − μˆ ̄(qi)
Y (0, Xi, W (Z)
i , z)
)︁
,
(108)
ψˆ2i =μˆ ̄(qi)
D (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
D (0, Xi, W (Z)
i , z)+
+ I(W (D)
i = 1, Zi = z)
μˆ ̄(qi)
Z (z, Xi, W (Z)
i )μˆ ̄(qi)
W (1, Xi, W (Z)
i)
(︁
Di − μˆ ̄(qi)
D (1, Xi, W (Z)
i , z)
)︁
−
− I(W (D)
i = 0, Zi = z)
μˆ ̄(qi)
Z (z, Xi, W (Z)
i )μˆ ̄(qi)
W (0, Xi, W (Z)
i)
(︁
Di − μˆ ̄(qi)
D (0, Xi, W (Z)
i , z)
)︁
.
(109)
Algorithm 6-DML. Double machine learning estimator of LATES for m=1.
1. Obtain the same subsamples and estimators as in Step 1 of Algorithm 5-DML. However, for each k ∈ {1, . . . , K}, instead of μˆ ̄(k)
Z , obtain an estimator μˆ ̄(k)
Z* (x, w) of P(Z ̃i = 1 | Xi =
x, W (Z)
i = w) by regressing I(Zi = z) on (Xi, W (Z)
i ) using the subsamples and averaging in the same way as in Steps 3-4 of Algorithm 1-DML.
2. Similarly to Step 2 of Algorithm 2-DML, obtain the estimators:
μˆ ̄(k)
∂Y (w ̃, x, w, z) = 0.5
(︁
μˆ ̄(k,1)
∂Y (w ̃, x, pˆ ̄(z,k,2)(x, w), z) +
+ μˆ ̄(k,2)
∂Y (w ̃, x, pˆ ̄(z,k,1)(x, w), z)
)︁
, (110)
μˆ ̄(k)
∂D(w ̃, x, w, z) = 0.5
(︁
μˆ ̄(k,1)
∂D (w ̃, x, pˆ ̄(z,k,2)(x, w), z) +
+ μˆ ̄(k,2)
∂D (w ̃, x, pˆ ̄(z,k,1)(x, w), z)
)︁
. (111)
3. Obtain an estimate:
LA\ TESDML = ψˆ*
1 /ψˆ*
2, (112)
where:
ψˆ*
1= 1
n
n
∑︁
i=1
ψˆ*
1i, ψˆ*
2= 1
n
n
∑︁
i=1
ψˆ*
2i, (113)
ψˆ*
1i = I(Zi = z)
̂︀P(Zi = z)
(︁
μˆ ̄(qi)
Y (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
Y (0, Xi, W (Z)
i , z)
)︁
+
+ I(Zi = z)
̂︀P(Zi = z)
I(W (D)
i = 1, Zi = z)
μˆ ̄(qi)
W (1, Xi, W (Z)
i)
(︁
Yi − μˆ ̄(qi)
Y (1, Xi, W (Z)
i , z)
)︁
−
− I(Zi = z)
̂︀P(Zi = z)
I(W (D)
i = 0, Zi = z)
μˆ ̄(qi)
W (0, Xi, W (Z)
i)
(︁
Yi − μˆ ̄(qi)
Y (0, Xi, W (Z)
i , z)
)︁
+
+ I(Zi = z)
̂︀P(Zi = z)
μˆ ̄(k)
Z* (Xi, W (Z)
i )×
[︁ Z ̄i − pˆ ̄(z,qi)(Xi, W (Z)
i)
]︁
×
[︁
μˆ ̄(qi)
∂Y (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
∂Y (0, Xi, W (Z)
i , z)
]︁
,
(114)
24

ψˆ*
2i = I(Zi = z)
̂︀P(Zi = z)
(︁
μˆ ̄(qi)
D (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
D (0, Xi, W (Z)
i , z)
)︁
+
+ I(Zi = z)
̂︀P(Zi = z)
I(W (D)
i = 1, Zi = z)
μˆ ̄(qi)
W (1, Xi, W (Z)
i)
(︁
Di − μˆ ̄(qi)
D (1, Xi, W (Z)
i , z)
)︁
−
− I(Zi = z)
̂︀P(Zi = z)
I(W (D)
i = 0, Zi = z)
μˆ ̄(qi)
W (0, Xi, W (Z)
i)
(︁
Di − μˆ ̄(qi)
D (0, Xi, W (Z)
i , z)
)︁
+
+ I(Zi = z)
̂︀P(Zi = z)
μˆ ̄(k)
Z* (Xi, W (Z)
i )×
[︁ Z ̄i − pˆ ̄(z,qi)(Xi, W (Z)
i)
]︁
×
[︁
μˆ ̄(qi)
∂D (1, Xi, W (Z)
i , z) − μˆ ̄(qi)
∂D (0, Xi, W (Z)
i , z)
]︁
.
(115)
Regularity conditions for the asymptotic normality of the estimators considered in this section are provided in Theorem 3.1 of Chernozhukov et al. (2018). The derivation of these conditions is cumbersome but follows from the steps detailed by Bia et al. (2024); as such, it is omitted for brevity. Also, some simplifications of these steps are possible because our estimators are based on efficient influence functions. In particular, there is no need to prove Neyman-orthogonality since efficient infl-
uence functions have this property by construction. Additionally, it is straightforward to derive the asymptotic variances required for hypothesis testing and the construction of asymptotic confidence intervals. Specifically, under the conditions of Theorem 3.2 of Chernozhukov et al. (2018) the estimators of the asymptotic variance are as follows:
As. \ Var
(︁
̂︀ΨDML)︁
=1
n2
n
∑︁
i=1
(︁
rΨ
i,z − ̂︀ΨDML)︁ 2
, (116)
where Ψ ∈ {ATE, ATES, ATET, ATETS}. For LATE and LATES, the estimators are as follows:
As. \ Var
(︁ LA \ TEDML)︁
=1
n2
n
∑︁
i=1
⎛
⎝
ψˆ1i − ψˆ2iLA \ TEDML
ψˆ2
⎞
⎠
2
, (117)
As. \ Var
(︁ LA\ TESDML)︁
=1
n2
n
∑︁
i=1
⎛
⎝
ψˆ*
1i − ψˆ*
2iLA\ TESDML
ψˆ*
2
⎞
⎠
2
. (118)
Finally, let us discuss a generalization to the case m ≥ 1. For simplicity, consider an estimator of ATE since generalization to other causal parameters is very similar. Note that:
1
n
n
∑︁
i=1
Z ̃i
[︁
I(Zi = z(t)) − ̂︀P(Zi = z(t) | Z ̃i = 1)
]︁
̂︀P(Z ̃i = 1) =
=
[︂
1 n
n
∑︀
i=1
Z ̃iI(Zi = z(t))
]︂
−
̂︀P(Zi = z(t) | Z ̃i = 1)
[︂
1 n
n
∑︀
i=1
Z ̃i
]︂
̂︀P(Z ̃i = 1) =
=
̂︀P(Zi = z(t), Z ̃i = 1) − ̂︀P(Z ̃i = 1)̂︀P(Zi = z(t) | Z ̃i = 1)
̂︀P(Z ̃i = 1) =
=
̂︀P(Zi = z(t), Z ̃i = 1) − ̂︀P(Zi = z(t), Z ̃i = 1)
̂︀P(Z ̃i = 1) = 0.
(119)
25

By using the established equality, we may simplify the sample average of equation (64) for ATE as follows:
1
n
n
∑︁
i=1
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)φˆATE
ti +
+
Z ̃i
[︁
I(Zi = z(t)) − P(Zi = z(t) | Z ̃i = 1)
]︁
P(Z ̃i = 1) ATEt
⏟⏞
0
=
=1
n
n
∑︁
i=1
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)φˆATE
ti =
=
[︃
1
n
n
∑︁
i=1
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)
[︁ φˆATE
ti + ATE
]︁
]︃
− ATE,
(120)
where ATEt is an estimand of ATE for z = z(t) and φˆATE
ti is an estimate of the efficient influence function of ATEt obtained by using estimates of nuisance functions and a true value of ATEt. By setting the last expression to 0 and solving for ATE, we obtain an estimator:
AT [EDML = 1
n
n
∑︁
i=1
m
∑︁
t=1
̂︀P(Zi = z(t) | Z ̃i = 1)
[︁ φˆATE
ti + ATE
]︁
⏟⏞
Summation cancels
true ATEt in φ^ATE
ti
since ATEt=ATE
=
=
m
∑︁
t=1
̂︀P(Zi = z(t) | Z ̃i = 1) 1
n
n
∑︁
i=1
rATE
i,z(t) .
(121)
Therefore, the DML estimator of ATE for m ≥ 1 is simply a weighted average of DML estimators of ATE for m = 1 and z = z(t).
9 The role of exclusion restrictions in identification of nui
sance functions
Aforementioned estimators are valid only if corresponding nuisance functions are identifiable. For brevity, we concentrate on the identification of μY (d, x, p, z) since for other nuisance functions the requirements are similar. Also, for simplicity, we proceed heuristically and refer curious readers to the literature on the nonparametric identification of functions involving generated regressors (Imbens and Newey, 2009). Identification of μY (d, x, p, z) relies primarily on the exogeneity and rel-
evance of exclusion restrictions W (Z)
i . Exogeneity Ydi ⊥ W (Z)
i | Xi is implied by Assumption 2. It means that,
conditional on the covariates Xi, exclusion restrictions W (Z)
i provide no useful information on the distribution of potential outcomes Ydi.
The relevance condition requires that, even conditional on Xi and Di, exclusion restrictions
W (Z)
i are useful for predicting Zji. Heuristically, the l-th element of W (Z)
i is relevant for Zji if:
P(Zji ≤ zj | Di, Xi, W (Z)
i ) ̸= P(Zji ≤ zj | Di, Xi, W (Z)
−l,i), (122)
where W (Z)
−l,i is the vector W (Z)
i without the l-th element. For simplicity, suppose that all nr
elements of W (Z)
i are relevant for every Zji. Then a sufficient condition for identification is
26

that nr is at least as large as the number of elements of P ̄(z)
i . In this case, it is ensured (under
some regularity conditions) that no element of P ̄(z)
i may be represented as a function only of
Xi, Di and other elements of P ̄(z)
i ; if such a function exists it would violate the uniqueness of μY (d, x, p, z).
In practice, finding multiple exogenous and relevant exclusion restrictions is a fairly challenging task. Nevertheless, it has been effectively approached by some studies. For example, De Luca and Peracchi (2012) used age, gender, and education of the interviewer as exclusion restrictions for selection equations related to responses on income and food spending questions. The idea is that characteristics of the interviewer are exogenous with respect to household earnings and budget allocation but m-
ay affect the probability that the respondent is willing to answer the question.
10 Simulated data analysis for ATE, ATES, ATET, and
ATETS
10.1 Estimation under conditional effect homogeneity
Suppose that there are nZ = 2 selection equations Z1i and Z2i. The first selection equation is binary supp(Z1i) = {0, 1}, while the second is ordinal supp(Z2i) = {0, 1, 2}. The outcome Yi is observable only if Z1i = 1 and Z2i = 1, so m = 1 and z(1) = z = (1, 1). The treatment variable Di is binary supp(Di) = {0, 1}. Specifically, the data generating process is as follows:
Y0i = 1 + Xiβ + U (Y )
i , Y1i = 2 − Xiβ + U (Y )
i , Di = I(Xiβ + U (D)
i > 0),
Z*
1i = Xiβ + 0.2
(︁
W (Z)
1i + W (Z)
2i + W (Z)
3i + Di
)︁
+ U (Z)
1i ,
Z*
2i = Xiβ − 0.2
(︁
W (Z)
1i + W (Z)
2i + W (Z)
3i + Di
)︁
− U (Z)
2i ,
Z1i = I(Z*
1i > 0), Z2i = I(−1 ≤ Z*
2i < 1) + 2I(Z*
2i ≥ 1), z(1) = z = (1, 1),
Xi ∼ N (0, ΣX ), W (Z)
1i , W (Z)
2i , W (Z)
3i , U (D)
i ∼ N (0, 1),
(︁
U (Z)
1i , U (Z)
2i , U (Y )
i
)︁
∼ N (0, ΣZ,Y ),
where Xi is a row vector of length nX = 20 and β is a column vector of length nX. Similarly to Bia et al. (2024), we define the j-th element of β as βj = 0.4/j2. All variables are independent except for two cases. First, covariates Xi follow a multivariate normal distribution with covariance matrix:
(ΣX )jt = Cov(Xji, Xti) = 0.5|j−t|. (123)
Second, the joint distribution of random errors from the selection and outcome equations is multivariate normal with the following covariance matrix:
ΣZ,Y =
⎡
⎣
1 0.8 0.8 0.8 1 0.8 0.8 0.8 1
⎤
⎦ . (124)
Both of these covariance matrices are similar to those used by Bia et al. (2024), but have extra dimensions because of an additional selection equation.
We use three exclusion restrictions W (Z)
i = (W (Z)
1i , W (Z)
2i , W (Z)
3i ) since there is one probability
P(Z1i ≤ 0 | Di, Xi, W (Z)
i ) induced by the first (binary) selection equation and two probabilities
P(Z2i ≤ 0 | Di, Xi, W (Z)
i ), P(Z2i ≤ 1 | Di, Xi, W (Z)
i ), induced by the second (ordinal) selection equation. We have conducted nS = 1000 simulations for a small sample size n = 1000 and a large sample size n = 10000.
27

In contrast to Bia et al. (2024), the specifications of Y0i and Y1i are different not only in the constant term but also in the signs of the coefficients of Xi. The reason is to make the true values of ATE, ATES, ATET and ATETS notably different from each other. Note that Assumption 4 holds since both Y0i and Y1i share the same random error. We compare the accuracy of several estimators:
• DML2 — estimators from Section 8.
• DML1 — the same as DML2 but with the nuisance functions involving the derivatives fixed at 0: based on on the efficient influence functions from Section 6.
• PI — estimators from Section 5 but with cross-fitting.
• DML0 — conventional double machine learning estimators that do not address nonrandom sample selection: no conditional probabilities of selection (control functions) are used, and all estimates are obtained on a sample of observations for which Z ̃i = 1.
• PI0 — conventional plug-in estimators with cross-fitting.
Note that DML0 and PI0 estimators of ATE and ATET coincide with corresponding estimators of ATES and ATETS. Similarly, DML1 and DML2 concide for ATE and ATET since efficient influence functions of these parameters do not have nuisance functions involving the derivatives. Following Bia et al. (2024), for DML2, DML1, and DML0 estimators, we use trimming by excluding observations for which the product of conditional probabilities in the denominator is less than 0.01. In addition, we employ a two-lear-
ner estimation strategy for nuisance functions involving Di as a regressor. That is, we obtain separate estimators of these nuisance functions on samples composed of treatment (Di = 1) and control (Di = 0) groups. We use lasso linear regression1 to estimate μY (·) and probit regression without regularization to estimate other nuisance functions. Central difference numeric differentiation is used to estimate the nuisance functions involving the derivatives. In the headers of Tables 1–4, we provide -
accurate approximations of true values obtained from potential outcomes generated during simulations. Using these approximations, we calculate the mean absolute error (MAE) and root mean squared error (RMSE) of the estimates for each causal parameter and each estimator. We also report the sample mean and sample standard deviation (standard error) of these estimates. The results of the simulated data analysis are provided in Tables 1-4. According to Tables 1 and 3, the DML2, DML1, and PI estimators-
 of the ATE and ATET are fairly precise, and their accuracy grows notably with sample size. Nevertheless, in small samples, the DML1 and DML2 estimators are slightly biased, and the bias of the PI estimator is usually more substantial. However, the bias and standard errors of these estimators fall significantly in large samples. In contrast, the DML0 and PI0 estimators are rather inaccurate even in large samples. According to Tables 2 and 4, the bias of the DML0 and PI0 estimators for the ATES and-
 ATETS is usually much smaller than in the case of the ATE and ATET. However, the DML2, DML1, and PI estimators provide much more accurate estimates of the ATES and ATETS than do the DML0 and PI0 estimators. Therefore, without addressing sample selection, a researcher may obtain highly biased estimates. The DML2 estimators of the ATES and ATETS have slightly lower bias and slightly greater variance than the corresponding DML1 estimators. The accuracy of these estimators is very
1We use glmnet package in R for lasso linear regression with 5-fold cross-validation to select an optimal value of the regularization parameter (Friedman et al., 2010).
28

similar, especially in large samples. This implies that in practice, DML1 may be preferable due to its simpler implementation. The DML1 and DML2 estimators are notably more accurate than the PI estimator for the ATE, but similarly or mildly less accurate for other causal parameters. Specifically, the DML1 and DML2 estimators usually have lower bias but greater variance than the PI estimator. Notice that in comparison to the PI estimator, the DML1 and DML2 estimators have extra terms that depend o-
n additional nuisance functions. These terms are fairly simple for the ATE but more sophisticated for other causal parameters. Accurate estimation of these terms may be challenging. Specifically, under the considered design of the simulated data, linear lasso and probit regression may be fairly accurate estimators of μY , p(z), and μD, but less accurate for other nuisance functions required for the DML1 and DML2 estimators. In practice, this implies that DML1 and DML2 may demonstrate an advantage -
over the PI estimator if the estimators of the extra nuisance functions (associated with the additional terms) are sufficiently accurate.
Table 1: Simulation results for ATE = 1.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.876 0.126 0.145 0.176 0.972 0.038 0.038 0.047 DML1 0.876 0.126 0.145 0.176 0.972 0.038 0.038 0.047 PI 0.720 0.106 0.280 0.299 0.943 0.036 0.059 0.068 DML0 0.321 0.160 0.679 0.697 0.358 0.031 0.642 0.643 PI0 0.392 0.099 0.607 0.615 0.370 0.031 0.630 0.631
Table 2: Simulation results for ATES ≈ 0.485.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.441 0.126 0.100 0.134 0.486 0.039 0.031 0.039 DML1 0.431 0.125 0.102 0.136 0.483 0.039 0.031 0.039 PI 0.424 0.099 0.093 0.117 0.486 0.035 0.028 0.035 DML0 0.321 0.160 0.187 0.230 0.358 0.031 0.127 0.131 PI0 0.392 0.099 0.111 0.136 0.370 0.031 0.115 0.119
Table 3: Simulation results for ATET ≈ 0.662.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.607 0.127 0.107 0.138 0.657 0.038 0.030 0.038 DML1 0.607 0.127 0.107 0.138 0.657 0.038 0.030 0.038 PI 0.525 0.095 0.141 0.166 0.644 0.035 0.032 0.040 DML0 0.099 0.221 0.563 0.604 0.191 0.035 0.471 0.473 PI0 0.303 0.107 0.358 0.373 0.231 0.033 0.431 0.432
29

Table 4: Simulation results for ATETS ≈ 0.317.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.267 0.157 0.118 0.164 0.318 0.046 0.036 0.046 DML1 0.260 0.157 0.120 0.167 0.315 0.046 0.036 0.046 PI 0.327 0.105 0.085 0.106 0.339 0.039 0.037 0.045 DML0 0.099 0.221 0.243 0.310 0.191 0.035 0.126 0.131 PI0 0.303 0.107 0.086 0.108 0.231 0.033 0.086 0.092
10.2 Estimation without conditional effect homogeneity
Consider a simulated data design from the previous section. To violate Assumption 4, we make a single change to this design. Specifically, we multiply the random error of the potential outcome associated with the treatment group:
Y1i = 2 − Xiβ + 2U (Y )
i . (125)
According to Tables 5 and 7, none of the estimators are accurate for the ATE or ATET, as expected from the violation of Assumption 4. In contrast, according to Tables 6 and 8, the DML1, DML2, and PI estimators are accurate for the ATES and ATETS. This is because Assumption 4 is not required for the identification of these parameters.
Table 5: Simulation results for ATE = 1.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 1.133 0.192 0.188 0.235 1.288 0.059 0.288 0.294 DML1 1.133 0.192 0.188 0.235 1.288 0.059 0.288 0.294 PI 0.892 0.147 0.145 0.181 1.237 0.055 0.237 0.244 DML0 0.573 0.199 0.428 0.469 0.605 0.042 0.395 0.397 PI0 0.622 0.134 0.376 0.400 0.603 0.042 0.397 0.399
Table 6: Simulation results for ATES ≈ 0,782.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.715 0.163 0.135 0.176 0.783 0.051 0.041 0.051 DML1 0.705 0.161 0.137 0.179 0.778 0.051 0.041 0.051 PI 0.661 0.136 0.148 0.182 0.770 0.047 0.039 0.049 DML0 0.573 0.199 0.238 0.288 0.605 0.042 0.177 0.182 PI0 0.622 0.134 0.174 0.209 0.603 0.042 0.179 0.184
30

Table 7: Simulation results for ATET ≈ 0,661.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.865 0.168 0.225 0.264 0.922 0.049 0.260 0.265 DML1 0.865 0.168 0.225 0.264 0.922 0.049 0.260 0.265 PI 0.737 0.133 0.124 0.153 0.904 0.046 0.243 0.247 DML0 0.354 0.238 0.321 0.388 0.447 0.045 0.214 0.219 PI0 0.559 0.141 0.140 0.173 0.488 0.043 0.174 0.179
Table 8: Simulation results for ATETS ≈ 0,574.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.524 0.181 0.137 0.187 0.577 0.053 0.043 0.053 DML1 0.515 0.180 0.140 0.189 0.572 0.053 0.042 0.053 PI 0.583 0.141 0.112 0.141 0.596 0.048 0.043 0.053 DML0 0.354 0.238 0.255 0.323 0.447 0.045 0.126 0.134 PI0 0.559 0.141 0.112 0.141 0.488 0.043 0.086 0.096
11 Simulated data analysis for LATE and LATES
11.1 Estimation under conditional effect homogeneity
We make the following changes to the data generating process from Section 10.1. First, to satisfy Assumption 7F, we have removed Di from Z*
1i and Z*
2i, so:
Z*
1i = Xiβ + 0.2
(︁
W (Z)
1i + W (Z)
2i + W (Z)
3i
)︁
+ U (Z)
1i ,
Z*
2i = Xiβ − 0.2
(︁
W (Z)
1i + W (Z)
2i + W (Z)
3i
)︁
− U (Z)
2i .
Second, Di is generated according to the following model:
Di = W (D)
i D1i +
(︁
1 − W (D)
i
)︁
D0i,
D0i = I
(︁
U (D)
i − Xiβ > 0
)︁
, D1i = I
(︁
U (D)
i − Xiβ + 1 > 0
)︁
,
W (D)
i =I
(︁
Xiβ + 0.2
(︁
W (Z)
1i + W (Z)
2i + W (Z)
3i
)︁
+ U (W (D))
i >0
)︁
,
where U (W (D))
i ∼ N(0, 1) is independent of other variables.
Third, the joint distribution of
(︁
U (D)
i , U (Y )
i , U (Z)
i
)︁
is multivariate normal with zero mean,
unit variances, and all correlations equal to 0.5, except for Cor
(︁
U (D)
i , U (Z)
1i
)︁
= 0 and Cor
(︁
U (D)
i , U (Z)
2i
)︁
=
0. These zero correlations ensure that the second part of Assumption 8F is satisfied, while
Cor
(︁
U (D)
i , U (Y )
i
)︁
= 0.5 is responsible for the presence of endogeneity.
We use the same types (DML2, DML1, PI, DML0, and PI0) of estimators, samples (small and large), and setup (trimming, lasso, and probit regression) as in Section 10. Accurate approximations of the true values are provided in the headers of the tables.
31

The results of the simulated data analysis are provided in Tables 9 and 10. According to Table 9, the DML2, DML1, and PI estimators are notably more accurate for LATE than the DML0 and PI0 estimators in both small and large samples. Also, in large samples, the DML1 and DML2 estimators are mildly more accurate than the PI estimator. The standard errors of all estimators decrease as the sample size increases, but both the DML0 and PI0 estimators remain highly biased even in large samples. According-
 to Table 10, the same patterns hold for LATES. Therefore, under multivariate sample selection, the DML2, DML1, and PI estimators are highly preferable to the PI0 and DML0 estimators for LATE and LATES. Note that the DML2 estimator is much less accurate for LATES than the DML1 estimator in small samples. A possible reason is fairly inaccurate estimates of the derivatives associated with the treatment variable, i.e., the nuisance function μ∂D.
Table 9: Simulation results for LATE ≈ 0.823.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.715 0.734 0.512 0.742 0.784 0.162 0.133 0.167 DML1 0.715 0.734 0.512 0.742 0.784 0.162 0.133 0.167 PI 0.326 0.573 0.589 0.757 0.638 0.141 0.195 0.232 DML0 0.149 3.348 0.766 3.413 0.277 0.114 0.545 0.557 PI0 0.149 3.348 0.766 3.413 0.277 0.114 0.545 0.557
Table 10: Simulation results for LATES ≈ 0.522.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.492 1.126 0.448 1.126 0.519 0.113 0.091 0.113 DML1 0.524 0.431 0.331 0.431 0.520 0.114 0.091 0.114 PI 0.246 0.524 0.446 0.590 0.411 0.114 0.128 0.158 DML0 0.149 3.348 0.613 3.366 0.277 0.114 0.244 0.268 PI0 0.149 3.348 0.613 3.366 0.277 0.114 0.244 0.268
11.2 Estimation without conditional effect homogeneity
To violate both parts of Assumption 8F, we have made the following changes to the data generating process from the previous subsection:
Y1i = 2 − Xiβ + 2U (Y )
i , Cor
(︁
U (D)
i , U (Z)
1i
)︁
= 0.5, Cor
(︁
U (D)
i , U (Z)
2i
)︁
= 0.5.
According to Table 11, all estimators are highly inaccurate for LATE, which is consistent with the violation of Assumption 8F. The estimates of LATES are provided in Table 12. In both small and large samples, DML1 provides notably more accurate estimates than the other estimators. In addition, DML2 has an extremely large standard error in small samples, but it is still preferable to PI in terms of MAE. The probable reason for the high RMSE of DML2 in small samples is the presence of outliers; i.e.-
, a small number of extremely inaccurate estimates.
32

Table 11: Simulation results for LATE ≈ 0.632.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.714 1.273 0.874 1.275 0.737 0.283 0.242 0.302 DML1 0.714 1.273 0.874 1.275 0.737 0.283 0.242 0.302 PI -0.103 0.957 0.943 1.207 0.475 0.252 0.238 0.298 DML0 0.438 13.166 1.534 13.161 0.089 0.201 0.544 0.580 PI0 0.438 13.166 1.534 13.161 0.089 0.201 0.544 0.580
Table 12: Simulation results for LATES ≈ 0.542.
Small sample: n=1000 Large sample: n=10000
Mean SE MAE RMSE Mean SE MAE RMSE
DML2 0.561 3.439 0.821 3.437 0.542 0.182 0.145 0.182 DML1 0.564 0.708 0.534 0.708 0.543 0.183 0.145 0.183 PI -0.096 0.855 0.830 1.065 0.374 0.185 0.205 0.251 DML0 0.438 13.166 1.505 13.16 0.089 0.201 0.456 0.498 PI0 0.438 13.166 1.505 13.16 0.089 0.201 0.456 0.498
12 Conclusion
The contribution of the paper is as follows. First, we have established sufficient conditions for the identification of ATE, ATET, and LATE in the MSSM. Second, we have provided plug-in and double machine learning estimators of these causal parameters. Third, we have shown using simulated data that the proposed estimators allow us to avoid substantial biases in the estimation of causal parameters in the MSSM. Fourth, we have shown that our framework is useful for the estimation of ATEG — average t-
reatment effect on the endogenous group. There are many interesting directions for future studies. Specifically, it is straightforward to adapt the estimators proposed in this article to the panel-data framework, particularly to fixed effects models. For example, suppose that a researcher estimates the effect of education on wages using a panel data for T = 3 periods. Then demeaned wages are observable only if individual worked for at least 2 periods out of 3. In a nutshell, this case may be appro-
ached by considering the proposed estimators for m = 4 so z(1) = (1, 1, 1), z(2) = (1, 1, 0), z(3) = (1, 0, 1), and z(4) = (0, 1, 1), where the k-th coordinate of z(t) indicates whether the wage is observable in the k-th period. Another inspiring direction for future studies is the non-parametric estimation of causal parameters in the MSSM under multinomial and nested sample selection. However, we anticipate that more restrictive assumptions would be required for the identification of causal param-
eters under these more sophisticated selection mechanisms. For example, to address nested sample selection in the estimation of ATE and ATET, it is sufficient to replace Assumption 1 with a multivariate probit model with sample selection in place. This (probit) model is readily implemented in the switchSelection package in R. Also, researchers may consider alternative structural parameters (for example, coefficients of a partially linear model or mediation effects) of the MSSM and construct differ-
ent types of estimators (for example, targeted maximum likelihood). Finally, there are some important questions that may be addressed through more sophisticated simulated data analysis. Specifically, it is important to investigate the robustness of the
33

proposed nonparametric estimators to violations of the exclusion restriction assumption.
34

Proof of Lemma 1 from Section 3.
According to Assumption 2, we have (Ydi, U (Z)
i )⊥(Di, W (Z)
i ) | Xi. By the decomposition
property, this implies that U (Z)
ji ⊥(W (Z)
i , Di) | Xi, so FU(Z)
ji |Di,Xi,W (Z)
i
(u) = FU(Z)
ji |Xi(u), for any
u ∈ R. By combining this fact with Assumption 1, we obtain:
P (z)
ji = P
(︁
Zji ≤ zj | Di, Xi, W (Z)
i
)︁
⏟⏞ P (z)
ji is a j-th element of P (z)
i
=
=P
(︁
U (Z)
ji ≤ gj
(︁
Di, Xi, W (Z)
i
)︁
+ cjzj | Di, Xi, W (Z)
i
)︁
⏟⏞
Assumption 1
=
= FU (Z)
ji |Di,Xi,W (Z)
i
(︁
gj
(︁
Di, Xi, W (Z)
i
)︁
+ cjzj
)︁
⏟⏞
CDF definition
=
= FU (Z)
ji |Xi
(︁
gj
(︁
Di, Xi, W (Z)
i
)︁
+ cjzj
)︁
⏟⏞
Since U (Z)
ji ⊥(W (Z)
i ,Di)|Xi
,
(126)
where cj0 = 0, cnZj = ∞ and zj is the j-th element of z ∈ supp(Zi). Since, by Assumption 1, the function FU(Z)
ji |Xi(u) is strictly increasing, it is invertible. To
gether with this fact, equality (126) implies:
gj
(︁
Di, Xi, W (Z)
i
)︁
+ cjzj = F −1
U (Z)
ji |Xi
(︁
P (z)
ji
)︁
. (127)
Equality (127) implies that the random variable I(Zji = zj) is a function of
(Xi, P (z−1)
ji , P (z)
ji , U (Z)
i ), because:
I (Zji = zj) = I
(︁
gj
(︁
Di, Xi, W (Z)
i
)︁
+ cj,zj−1 < U (Z)
ji ≤ gj
(︁
Di, Xi, W (Z)
i
)︁
+ cjzj
)︁
=
=I
(︂
F −1
U (Z)
ji |Xi
(P (z−1)
ji ) < U (Z)
ji ≤ F −1
U (Z)
ji |Xi
(P (z)
ji )
)︂
.
(128)
Hence, the random variable I(Zi = z) is a function of (Xi, P (z−1)
i , P (z)
i , U (Z)
i ), since:
I (Zi = z) = I(Z1i = z1) × I(Z2i = z2) × · · · × I(ZnZi = znZ ). (129)
Because P (z)
i is a function of (Xi, Di, W (Z)
i ) and I (Zi = z) is a function of
(Xi, P (z−1)
i , P(z)
i , U (Z)
i ), by the decomposition and weak union properties, for any z ∈ supp(Zi),
35

we have:
(Ydi, U (Z)
i )⊥(Di, W (Z)
i ) | Xi
⏟⏞
Assumption 2
⇒ (Ydi, U (Z)
i )⊥(Di, W (Z)
i , P(z−1)
i , P(z)
i ) | Xi
⏟⏞
Decomposition
⇒
⇒ (Ydi, U (Z)
i )⊥(Di, W (Z)
i ) | (Xi, P(z−1)
i , P(z)
i)
⏟⏞
Weak union
⇒
⇒ (Ydi, U (Z)
i )⊥Di | (Xi, P(z−1)
i , P(z)
i)
⏟⏞
Decomposition
⇒
⇒ (Ydi, I(Zi = z))⊥Di | (Xi, P(z−1)
i , P(z)
i)
⏟⏞
Decomposition
⇒
⇒ Ydi⊥Di | (Xi, P(z−1)
i , P(z)
i , I(Zi = z))
⏟⏞
Weak union
⇒
⇒ Ydi⊥Di | (Xi, P(z−1)
i , P(z)
i , I(Zi = z) = 1)
⏟⏞
Implication of conditional independence
⇒ Ydi⊥Di | (Xi, P ̄(z)
i , Zi = z)
⏟⏞
By definition P ̄(z)
i =(P(z−1)
i ,P(z)
i)
.
(130)
■ Proof of Lemma 2 from Section 4.
Consider Ai ∈ {compileri, defieri, always-takeri, never-takeri}. By Assumption 1F, potential outcomes D0i and D1i are functions of (Xi, U (D)
i ). Hence, since Ai is a function of (D0i, D1i), it
is also a function of (Xi, U (D)
i ). Further, by Assumption 7F, the conditional probabilities P ̄(z)
i
are functions of (Xi, W (Z)
i ). Finally, by using the same approach as in the proof of Lemma 1, it is straightforward to show that Assumptions 4F and 7F imply that Zi is a function of
(Xi, P ̄(z)
i , U (Z)
i ). These results imply that, for any z ∈ supp(Zi), we have:
(U (D)
i , U (Z)
i )⊥(W (Z)
i , W (D)
i ) | Xi
⏟⏞
Assumption 4F
⇒ (U (D)
i , U (Z)
i )⊥(W (Z)
i , W (D)
i , P ̄(z)
i ) | Xi
⏟⏞
Decomposition due to Assumption 7F
⇒
⇒ (U (D)
i , U (Z)
i )⊥(W (D)
i , P ̄(z)
i ) | Xi
⏟⏞
Decomposition
⇒ (U (D)
i , U (Z)
i )⊥W (D)
i | (Xi, P ̄(z)
i)
⏟⏞
Weak union
⇒
⇒ (Ai, I(Zi = z))⊥W (D)
i | (Xi, P ̄(z)
i)
⏟⏞
Decomposition due to Assumptions 1F and 7F
⇒ Ai⊥W (D)
i | (Xi, P ̄(z)
i , I(Zi = z) = 1)
⏟⏞
Weak union
⇒
⇒ Ai⊥W (D)
i | (Xi, P ̄(z)
i , Zi = z).
(131)
To prove the second part of the lemma, consider A1i ∈ {compileri, always-takeri} and use Assumption 5F, which implies:
(Y1i, U (Z)
i )⊥(W (Z)
i , W (D)
i ) | (Xi, A1i = 1)
⏟⏞
Assumption 5F
⇒
⇒ (Y1i, U (Z)
i )⊥(W (Z)
i , W (D)
i , P ̄(z)
i ) | (Xi, A1i = 1)
⏟⏞
Decomposition due to Assumption 7F
⇒
⇒ (Y1i, U (Z)
i )⊥W (D)
i | (Xi, A1i = 1, P ̄(z)
i)
⏟⏞
Weak union and decomposition
⇒
⇒ (Y1i, I(Zi = z))⊥W (D)
i | (Xi, A1i = 1, P ̄(z)
i)
⏟⏞
Decomposition due to Assumption 7F
⇒
⇒ Y1i⊥W (D)
i | (Xi, A1i = 1, P ̄(z)
i , I(Zi = z) = 1)
⏟⏞
Weak union
⇒
⇒ Y1i⊥W (D)
i | (Xi, A1i = 1, P ̄(z)
i , Zi = z).
(132)
36

Similarly, by considering A0i ∈ {compileri, never-takeri}, we finally get:
(Y0i, U (Z)
i )⊥(W (Z)
i , W (D)
i ) | (Xi, A0i = 1)
⏟⏞
Assumption 5F
⇒ Y0i⊥W (D)
i | (Xi, A0i = 1, P ̄(z)
i , Zi = z). (133)
■ Proof of Lemma 3 from Section 4.
In the proof of Lemma 2, we have established that under Assumptions 1F, 4F, and 7F,
potential outcomes D0i and D1i are functions of (Xi, U (D)
i ), P ̄(z)
i is a function of (Xi, W (Z)
i ),
and Zi is a function of (Xi, P ̄(z)
i , U (Z)
i ). Hence, for any t ∈ {0, 1} and z ∈ supp(Zi), we have:
(U (D)
i , U (Z)
i )⊥(W (Z)
i , W (D)
i ) | Xi
⏟⏞
Assumption 4F
⇒ (U (D)
i , U (Z)
i )⊥(W (D)
i , P ̄(z)
i ) | Xi
⏟⏞
Implies Dti⊥(W (D)
i ,P ̄(z)
i )|Xi
⇒
⇒ (U (D)
i , U (Z)
i )⊥W (D)
i | (Xi, P ̄(z)
i)
⏟⏞
Implies Dti⊥W (D)
i |(Xi,P ̄(z)
i)
⇒ (Dti, I(Zi = z))⊥W (D)
i | (Xi, P ̄(z)
i )⇒
⇒ Dti⊥W (D)
i | (Xi, P ̄(z)
i , Zi = z).
(134)
■ Proof of Lemma 4 from Section 6. Part 1. Preliminary proof.
First, for clarity, following the approach proposed in Section 3.4.3 of Kennedy (2023), we provide a simple proof relying on the assumption that the distribution of X is discrete and considering an estimand E (E (Y | X, A = 1) | Z = 1). Specifically, by using the product and summation rules of influence functions, we get:
EIF [E (E (Y | X, A = 1) | Z = 1)] =
= EIF
[︃
∑︁
x∈χ
P (X = x | Z = 1) E (Y | X = x, A = 1)
]︃
=
=
∑︁
x∈χ
P (X = x | Z = 1) EIF [E (Y | X = x, A = 1)] +
+
∑︁
x∈χ
EIF [P (X = x | Z = 1)] E (Y | X = x, A = 1) =
=
∑︁
x∈χ
P (X = x | Z = 1) A × I(X = x)
P (X = x, A = 1) [Y − E (Y | X = x, A = 1)]
⏟⏞
From section 3.4 of Kennedy (2023)
+
+
∑︁
x∈χ
Z
P (Z = 1) [I (X = x) − P (X = x | Z = 1)]
⏟⏞
EIF[P(X =x|Z =1)]=EIF[E(I(X =x)|Z =1)]
E (Y | X = x, A = 1) ,
(135)
where χ = supp (X | Z = 1).
37

Further, by using the product rule of probabilities and aggregating, we obtain:
EIF [E (E (Y | X, A = 1) | Z = 1)] =
=A×
∑︁
x∈χ
P (Z = 1 | X = x) I(X = x)
P (Z = 1) P (A = 1 | X = x) [Y − E (Y | X = x, A = 1)] + Z
P (Z = 1)×
×
∑︁
x∈χ
(︃
I (X = x) E (Y | X = x, A = 1) −
− P (X = x | Z = 1) E (Y | X = x, A = 1)
)︃
=
= A × P (Z = 1 | X)
P (Z = 1) P (A = 1 | X) [Y − E (Y | X, A = 1)] +
+Z
P (Z = 1) [E (Y | X, A = 1) − E (E (Y | X, A = 1) | Z = 1)] =
= Q*
1 − Q*
2 + Q*
3 − Q*
4,
(136)
where:
Q*
1 = A × P (Z = 1 | X)
P (Z = 1) P (A = 1 | X) Y, Q*
2 = A × P (Z = 1 | X)
P (Z = 1) P (A = 1 | X)E (Y | X, A = 1) , (137)
Q*
3= Z
P (Z = 1) E (Y | X, A = 1) , Q*
4= Z
P (Z = 1)E (E (Y | X, A = 1) | Z = 1) . (138)
Part 2. Main proof.
Second, we relax the assumption that X is discrete, replace the inner conditional expectation with a function hY (x) = E (Y | X = x, A = 1) at point X, and follow the approach of Levy (2019). However, we keep in mind the result derived in Part 1, since it greatly simplifies further derivations. Define an observation O = (X, A, Y, Z) = (O1, . . . , O4) and the score:
S(o) = ∂
∂ε ln f ε
O(o)⃒
⃒ ε=0 =
4
∑︁
i=1
∂
∂ε ln f ε
Oi|O ̄i−1 (oi | o ̄i−1)⃒
⃒ ε=0, (139)
where o = (x, a, y, z), o ̄i = (o1, . . . , oi), O ̄i = (O1, . . . , Oi), and ε ∈ (0, 1). Also, f ε
O(o) is the density function of a contaminated distribution:
fε
O(o) = ε × f *
O(o) + (1 − ε) × fO(o), (140)
where f *
O(o) is some density function. Consider a contaminated estimand:
Ψ(ε) = Eε (hε
Y (X) | Z = 1) , (141)
where hε
Y (x) = Eε (Y | X = x, A = 1) and Eε(·) is the expectation over the contaminated distribution. Specifically, following Levy (2019), we are going to derive the efficient influence function EIF (Ψ(0)) by solving the equation ∂Ψ(ε)
∂ε
⃒
⃒ ε=0 = E (EIF (Ψ(0)) S(O)). By expanding the expec
38

tations, we get:
∂Ψ(ε)
∂ε
⃒
⃒ ε=0 = ∂
∂ε
[︂∫︁
hε
Y (x)f ε
X|Z(x | 1) dx
]︂⃒
⃒
⃒ ε=0
=
=∂
∂ε
[︂∫︁ ∫︁
yf ε
Y |(X,A)(y | x, 1) dy f ε
X|Z(x | 1) dx
]︂⃒
⃒
⃒ ε=0
=
=
∫︁∫︁
y∂
∂ε
[︀ fε
Y |(X,A)(y | x, 1)]︀
⃒ ⃒
⃒ ε=0
dy fX|Z(x | 1) dx+
+
∫︁∫︁
yfY |(X,A)(y | x, 1) dy ∂
∂ε
[︀ fε
X|Z(x | 1)]︀
⃒ ⃒
⃒ ε=0
dx =
=
∫︁∫︁∫︁∫︁
azy ∂
∂ε
[︀ fε
Y |(X,A)(y | x, a)]︀
⃒ ⃒
⃒ ε=0
dy da fX|Z(x | z) dx dz+
+
∫︁∫︁∫︁
zyfY |(X,A)(y | x, 1) dy ∂
∂ε
[︀ fε
X|Z(x | z)]︀
⃒ ⃒
⃒ ε=0
dz dx.
(142)
According to identity (1) of Levy (2019), we have:
∂
∂εfε
Y |(X,A)(y | x, a)⃒
⃒ ε=0 =
= [E (S(O) | X = x, A = a, Y = y) − E (S(O) | X = x, A = a)] fY |(X,A)(y | x, a),
(143)
∂
∂εfε
X|Z(x | z)⃒
⃒ ε=0 = [E (S(O) | X = x, Z = z) − E (S(O) | Z = z)] fX|Z(x | z). (144)
By inserting equations (143) and (144) into equation (142), we obtain:
∂Ψ(ε)
∂ε
⃒
⃒ ε=0 =
∫︁
azy [E (S(O) | X = x, A = a, Y = y) − E (S(O) | X = x, A = a)] ×
× fY |(X,A)(y | x, a)fX|Z (x | z) do+
+
∫︁∫︁∫︁
zyfY |(X,A)(y | x, 1) [E (S(O) | X = x, Z = z) − E (S(O) | Z = z)] ×
× fX|Z(x | z) dz dx dy =
=
∫︁
azyE (S(O) | X = x, A = a, Y = y) fY |(X,A)(y | x, a)fX|Z(x | z) do
⏟⏞
Q1
−
−
∫︁
azyE (S(O) | X = x, A = a) fY |(X,A)(y | x, a)fX|Z(x | z) do
⏟⏞
Q2
+
+
∫︁∫︁∫︁
zyfY |(X,A)(y | x, 1)E (S(O) | X = x, Z = z) fX|Z(x | z) dz dx dy
⏟⏞
Q3
−
−
∫︁∫︁∫︁
zyfY |(X,A)(y | x, 1)E (S(O) | Z = z) fX|Z(x | z) dz dx dy
⏟⏞
Q4
=
= Q1 − Q2 + Q3 − Q4.
(145)
Intuition suggests that the expressions for Q1, Q2, Q3, and Q4 should be similar to the formulas of Q*
1, Q*
2, Q*
3, and Q*
4 from the equations (137) and (138). This intuition is extremely helpful for further derivations. Denote o ̃ = (x, a, y, z ̃) and consider separately each of these integrals. For the first one, we obtain:
39

Q1 =
∫︁∫︁∫︁∫︁∫︁
azyS(o ̃)fZ|(X,A,Y )(z ̃ | x, a, y)fY |(X,A)(y | x, a)fX|Z(x | z) do dz ̃ =
=
∫︁ ∫︁ ∫︁ ∫︁ ∫︁ azyS(o ̃)fZ|(X,A,Y )(z ̃ | x, a, y)fY |(X,A)(y | x, a)fA|X (a | x)fX (x)
fA|X (a | x)fX (x) ×
× fX|Z(x | z) do dz ̃
=
∫︁ ∫︁ azyS(o ̃)fO(o ̃)fX|Z(x | z)
fA|X (a | x)fX (x) do ̃ dz =
∫︁ ayS(o ̃)fO(o ̃)fX|Z(x | 1)
fA|X (a | x)fX (x) do ̃ =
=
∫︁ ayS(o ̃)fO(o ̃)fZ|X(1 | x)fX(x)/fZ(1)
fA|X (a | x)fX (x) do ̃ =
∫︁
S(o ̃) ayfO(o ̃)fZ|X(1 | x)
fZ(1)fA|X (a | x) do ̃ =
=
∫︁
S(o ̃) ayfO(o ̃)fZ|X(1 | x)
fZ(1)fA|X (1 | x) do ̃.
(146)
Redefine o ̃ = (x, a, y ̃, z ̃) and take the second integral:
Q2 =
∫︁∫︁∫︁
azyS(o ̃)f(Y,Z)|(X,A)(y ̃, z ̃ | x, a) dy ̃ dz ̃ fY |(X,A)(y | x, a)fX|Z(x | z) do =
=
∫︁∫︁∫︁
azyS(o ̃)fY |(X,A)(y ̃ | x, a)fZ|(Y,X,A)(z ̃ | y ̃, x, a) dy ̃ dz ̃ fY |(X,A)(y | x, a)×
× fX|Z(x | z) do =
=
∫︁∫︁∫︁
yfY |(X,A)(y | x, a) dy S(o ̃)azfY |(X,A)(y ̃ | x, a)fZ|(Y,X,A)(z ̃ | y ̃, x, a)×
× fX|Z(x | z) dz do ̃ =
=
∫︁∫︁
azS(o ̃)fY |(X,A)(y ̃ | x, a)fZ|(Y,X,A)(z ̃ | y ̃, x, a)fX|Z(x | z) dz do ̃ =
=
∫︁ ∫︁ fY |(X,A)(y ̃ | x, a)fZ|(Y,X,A)(z ̃ | y ̃, x, a)fA|X (a | x)fX (x)
fA|X (a | x)fX (x) ×
× azS(o ̃)E (Y | X = x, A = a) fX|Z(x | z) do ̃ dz =
=
∫︁ ∫︁ azS(o ̃)E (Y | X = x, A = a) fO(o ̃)fX|Z(x | z)
fA|X (a | x)fX (x) do ̃ dz =
=
∫︁
S(o ̃) aE (Y | X = x, A = 1) fO(o ̃)fZ|X(1 | x)
fZ(1)fA|X (1 | x) do ̃.
(147)
40

Redefine o ̃ = (x, a ̃, y ̃, z) and take the third integral:
Q3 =
∫︁∫︁∫︁∫︁∫︁
zyS(o ̃)f(Y,A)|(X,Z)(y ̃, a ̃ | x, z) da ̃ dy ̃ fY |(X,A)(y | x, 1)×
× fX|Z(x | z) dz dx dy =
=
∫︁∫︁∫︁∫︁∫︁
yfY |(X,A)(y | x, 1) dy S(o ̃)zf(Y,A)|(X,Z)(y ̃, a ̃ | x, 1)×
× fX|Z(x | z) da ̃ dy ̃ dz dx =
=
∫︁∫︁∫︁∫︁
zS(o ̃)E (Y | X = x, A = 1) f(Y,A)|(X,Z)(y ̃, a ̃ | x, 1)×
× fX|Z(x | z) da ̃ dy ̃ dz dx =
=
∫︁∫︁∫︁∫︁
zS(o ̃)E (Y | X = x, A = 1) f(Y,A)|(X,Z)(y ̃, a ̃ | x, z)×
× fX|Z(x | z) da ̃ dy ̃ dz dx =
=
∫︁
S(o ̃) zE (Y | X = x, A = 1) f(Y,A)|(X,Z)(y ̃, a ̃ | x, z)fX|Z(x | z)fZ(z)
fZ(z) do ̃ =
=
∫︁
S(o ̃) zE (Y | X = x, A = 1) fO(o ̃)
fZ(1) do ̃.
(148)
Redefine o ̃ = (x ̃, a ̃, y ̃, z) and take the fourth integral:
Q4 =
∫︁∫︁∫︁∫︁∫︁∫︁
zyS(o ̃)f(Y,A,X)|Z(y ̃, a ̃, x ̃ | z) dy ̃ da ̃ dx ̃ fY |(X,A)(y | x, 1)×
× fX|Z(x | z) dz dx dy =
=
∫︁∫︁∫︁∫︁∫︁∫︁
yfY |(X,A)(y | x, 1) dy S(o ̃)zf(Y,A,X)|Z (y ̃, a ̃, x ̃ | z)×
× fX|Z(x | z) dy ̃ da ̃ dx ̃ dz dx =
=
∫︁∫︁∫︁∫︁∫︁
E (Y | X = x, A = 1) S(o ̃)zf(Y,A,X)|Z(y ̃, a ̃, x ̃ | z)×
× fX|Z(x | z) dy ̃ da ̃ dx ̃ dz dx =
=
∫︁∫︁∫︁∫︁∫︁
E (Y | X = x, A = 1) fX|Z(x | z) dx ×
× S(o ̃)zf(Y,A,X)|Z(y ̃, a ̃, x ̃ | z) dy ̃ da ̃ dx ̃ dz =
=
∫︁∫︁∫︁∫︁
E (E (Y | X = x, A = 1) | Z = 1) ×
× S(o ̃)zf(Y,A,X)|Z(y ̃, a ̃, x ̃ | z) dy ̃ da ̃ dx ̃ dz =
=
∫︁
S(o ̃) zE (E (Y | X = x, A = 1) | Z = 1) fO(o ̃)
fZ(1) do ̃.
(149)
41

By inserting the expressions of Q1, Q2, Q3, and Q4 into equation (145), we obtain:
∂Ψ(ε)
∂ε
⃒
⃒ ε=0 =
∫︁
S(o ̃)
(︂ afZ|X (1 | x)
fZ(1)fA|X(1 | x) [y − E (Y | X = x, A = 1)]
)︂
fO(o ̃) do ̃+
+
∫︁
S(o ̃) z
fZ(1) [E (Y | X = x, A = 1) −
−E (E (Y | X = x, A = 1) | Z = 1)] fO(o ̃) do ̃ =
=E
(︂
S(O)
[︂ A × hZ(X)
P(Z = 1)hA(X) [Y − hY (X)] +
+Z
P(Z = 1) [hY (X) − E (hY (X) | Z = 1)]
]︂)︂
,
(150)
where:
hY (x) = E (Y | X, A = 1) , hZ(x) = P(Z = 1 | X = x), hA(x) = P(A = 1 | X = x). (151)
The expression for the efficient influence function follows from equation (150) by the aforementioned property ∂Ψ(ε)
∂ε
⃒
⃒ ε=0 = E (EIF (Ψ(0)) S(O)). ■ Proof of Lemma 4A from Section 6.
For ε ∈ [0, 1), define the following contaminated nuisance functions:
h(ε)
1 (o) = h0
1(o) + ε ̃h1(o), h(ε)
2 (o) = h0
2(o) + ε ̃h2(o), (152)
where  ̃h1(o) and  ̃h2(o) are perturbation functions and o ∈ supp (O). Also, define the composi
tion H(ε)(o) = h(ε)
1
(︁
o, h(ε)
2 (o)
)︁
.
The score φ is Neyman-orthogonal, as shown by the following:
E
⎛
⎝
∂φ
(︁
O, h(ε)
1 , h(ε)
2 ,Ψ
)︁
∂ε |ε=0
⎞
⎠=E
(︃
∂φ* (︀ O, H(ε), Ψ)︀
∂ε |ε=0
)︃
⏟⏞
Decomposition
=
=E
⎛
⎝
∂φ*
(︁
O, H0 + τ
[︁
∂ H (ε)
∂ε |ε=0
]︁
,Ψ
)︁
∂τ |τ=0
⎞
⎠
⏟⏞
Chain rule for functional derivatives
= 0.
(153)
The last equality follows from the fact that φ* is Neyman-orthogonal with respect to H.
That is, the expected Gaˆteaux derivative of φ* with respect to H in any direction, including
∂ H (ε)
∂ε |ε=0, is zero.
Proof of Lemma 4B from Section 6. Part 1. Neyman-orthogonality.
We provide a sketch of the proof for brevity. By Lemma 4, the score φ (.) is derived from the efficient influence function, which treats hG as known. Hence, the score is Neyman-orthogonal with respect to hY , hZ, and hA. Note that hG enters the score only through the composition with the other nuisance functions. Therefore, the Neyman-orthogonality of φ (.) with respect to hG and other nuisance functions follows by Lemma 4A. Part 2. Double-robustness.
Suppose that hG is correctly specified. Denote by h*
Y , h*
Z, and h*
A the nuisance functions which may be different from the true nuisance functions hY , hZ, and hA, respectively. For
42

brevity denote by h* the vector of these nuisance functions. Therefore, the score is as follows:
φ (O, h*, Ψ) = A × h*
Z (X, hG(W ))
P(Z = 1)h*
A (X, hG(W )) [Y − h*
Y (X, hG(W ))]
+Z
P(Z = 1) [h*
Y (X, hG(W )) − Ψ] .
(154)
Case 1. Suppose that hY is correctly specified so h*
Y = hY . Then by using the law of total expectation it is straightforward to show that equation (154) is zero, so derivations are omitted for brevity. Case 2. Suppose that h*
Z and h*
A are correctly specified so h*
Z = hZ and h*
A = hA. Rewrite equation (154) as follows:
E [φ (O, h*, Ψ)] = E
[︂(︂ Z
P(Z = 1) − A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W ))
)︂
h*
Y (X, hG(W ))
]︂
⏟⏞
Term 1
+E
[︂ A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W )) Y − Z
P(Z = 1) Ψ
]︂
⏟⏞
Term 2
.
(155)
Establishing that Term 1 is zero is straightforward, so omitted for brevity. However, showing that Term 2 is zero is more complex. Specifically, consider the left-hand side of Term 2:
E
[︂ A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W )) Y
]︂
=
=E
[︂
E
[︂ A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W )) Y | X, hG(W )
]︂
=
=E
[︂
hA (X, hG(W )) E
[︂ A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W )) Y | X, hG(W ), A = 1
]︂
⏟⏞
Law of total expectation
=
=E
[︂ hZ (X, hG(W ))
P(Z = 1) E [Y | X, hG(W ), A = 1]
]︂
=
=E
[︂ hZ (X, hG(W ))
P(Z = 1) hY (X, hG(W ))
]︂
=
=E
[︂
E
[︂ hZ (X, hG(W ))
P(Z = 1) hY (X, hG(W )) | X, hG(W )
]︂
=
=E
[︂
E
[︂Z
P(Z = 1) hY (X, hG(W )) | X, hG(W )
]︂
=
=E
[︂
hZ (X, hG(W )) E
[︂Z
P(Z = 1) hY (X, hG(W )) | X, hG(W ), Z = 1
]︂
⏟⏞
Law of total expectation
=
=E
[︂ hZ (X, hG(W ))
P(Z = 1) E [hY (X, hG(W )) | X, hG(W ), Z = 1]
]︂
=
=E
[︂ hZ (X, hG(W ))
P(Z = 1) Ψ
]︂
=Ψ
P(Z = 1) E [hZ (X, hG(W ))] = Ψ
P(Z = 1) E[Z] =
=E
[︂Z
P(Z = 1) Ψ
]︂
.
(156)
Therefore, the left-hand side and the right-hand side of Term 2 are the same, so their difference is zero. ■
43

Proof of Lemma 5 from Section 7. Consider a contaminated estimand:
Ψ*(ε) = Eε (hε
Y (X, hε
G(W )) | Z = 1) , (157)
where:
hε
Y (x, v) = Eε (Y | X = x, A = 1, Eε(G | W ) = v) , hε
G(w) = Eε (G | W = w) . (158)
Split the derivative of the contaminated estimand into two terms:
∂Ψ*(ε)
∂ε
⃒ ⃒
⃒ ε=0
=∂
∂ε [Eε (hε
Y (X, hε
G(W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
=
=∂
∂ε [Eε (hε
Y (X, hG(W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
⏟⏞
Term 1
=
+∂
∂ε [E (hY (X, hε
G(W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
⏟⏞
Term 2
.
(159)
By Lemma 4, the first term in the last expression of equation (159) is as follows:
∂
∂ε [Eε (hε
Y (X, hG(W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
=
=E
[︂
S(O)
[︂ A × hZ (X, hG(W ))
P(Z = 1)hA (X, hG(W )) [Y − hY (X, hG(W ))] +
+Z
P(Z = 1) [hY (X, hG(W )) − E (hY (X, hG(W )) | Z = 1)]
]︂
.
(160)
To obtain a convenient expression for the second term on the right-hand side of equation (159), we use the approach of Levy (2019) similarly to the proof of Lemma 4. Specifically, by
44

expanding the second term, we get:
∂
∂ε [E (hY (X, hε
G(W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
=
=
∫︁∫︁ ∂
∂ε [hY (x, hε
G(w))]
⃒ ⃒
⃒ ε=0
f(X,W )|Z (x, w | 1) dx dw =
=
∫︁∫︁ ∂
∂v [hY (x, v)]
⃒ ⃒
⃒ v=hG(w)
⏟⏞
Denote by η(x,w) for brevity
∂
∂ε [hε
G(w)]
⃒ ⃒
⃒ ε=0
f(X,W )|Z (x, w | 1) dx dw =
=
∫︁∫︁
η(x, w)fX|(W,Z)(x | w, 1) dx ∂
∂ε [hε
G(w)]
⃒ ⃒
⃒ ε=0
fW |Z(w | 1) dw =
=
∫︁
E (η(X, W ) | W = w, Z = 1)
⏟⏞
Denote by μ(w) for brevity
∂
∂ε [Eε (G | W = w)]
⃒ ⃒
⃒ ε=0
fW |Z(w | 1) dw =
=
∫︁
μ(w) ∂
∂ε
[︂∫︁
gf ε
G|W (g | w) dg
]︂⃒
⃒
⃒ ε=0
fW |Z(w | 1) dw =
=
∫︁∫︁
⎡
⎢ ⎣
∫︁
g [E (S(O) | G = g, W = w) − E (S(O) | W = w)] fG|W (g | w)
⏟⏞
By identity (1) of (Levy, 2019)
dg
⎤
⎥
⎦×
× μ(w)fW |Z(w | 1) dw =
=
∫︁∫︁
μ(w)gE (S(O) | G = g, W = w) fG|W (g | w) dg fW |Z(w | 1) dw =
−
∫︁∫︁
μ(w)gE (S(O) | W = w) fG|W (g | w) dg fW |Z(w | 1) dw =
= Q1 − Q2.
(161)
Define o ̃ = (y ̃, x ̃, a ̃, z ̃, g, w) and take the first integral:
Q1 =
∫︁∫︁∫︁
μ(w)gS(o ̃)f(Y,X,A,Z)|(G,W )(y ̃, x ̃, a ̃, z ̃ | g, w)×
× dy ̃ dx ̃ d ̃a dz ̃ fG|W (g | w) dg fW |Z(w | 1) dw =
=
∫︁
μ(w)gS(o ̃)f(Y,X,A,Z)|(G,W )(y ̃, x ̃, a ̃, z ̃ | g, w)fG|W (g | w)fW |Z(w | 1) do ̃ =
=
∫︁ μ(w)gS(o ̃)f(Y,X,A,Z)|(G,W )(y ̃, x ̃, a ̃, z ̃ | g, w)fG|W (g | w)fW (w)fZ|W (1 | w)
fZ(1) do ̃ =
=
∫︁
S(o ̃) μ(w)gfZ|W (1 | w)
fZ(1) fO(o ̃) do ̃ =
=
∫︁
S(o ̃)
[︂ fZ|W (1 | w)
fZ(1) gμ(w)
]︂
fO(o ̃) do ̃.
(162)
45

Redefine o ̃ = (y ̃, x ̃, a ̃, z ̃, g ̃, w) and take the second integral:
Q2 =
∫︁∫︁∫︁
μ(w)gS(o ̃)f(Y,X,A,Z,G)|W (y ̃, x ̃, a ̃, z ̃, g ̃ | w)×
× dg ̃ dy ̃ dx ̃ da ̃ dz ̃ fG|W (g | w) dg fW |Z(w | 1) dw =
=
∫︁∫︁
gfG|W (g | w) dg S(o ̃)μ(w)f(Y,X,A,Z,G)|W (y ̃, x ̃, a ̃, z ̃, g ̃ | w)fW |Z(w | 1) do ̃ =
=
∫︁
E(G | W = w)S(o ̃)μ(w)f(Y,X,A,Z,G)|W (y ̃, x ̃, a ̃, z ̃, g ̃ | w)fW |Z(w | 1) do ̃ =
=
∫︁ E(G | W = w)S(o ̃)μ(w)f(Y,X,A,Z,G)|W (y ̃, x ̃, a ̃, z ̃, g ̃ | w)fW (w)
fZ(1) ×
× fZ|W (1 | w) do ̃ =
=
∫︁
S(o ̃) μ(w)hG(w)fZ|W (1 | w)
fZ(1) fO(o ̃) do ̃ =
=
∫︁
S(o ̃)
[︂ fZ|W (1 | w)
fZ(1) hG(w)μ(w)
]︂
fO(o ̃) do ̃.
(163)
By inserting equations (162) and (163) into equation (161), we get:
∂
∂ε [E (E (Y | X, A = 1, Eε(G | W )) | Z = 1)]
⃒ ⃒
⃒ ε=0
= Q1 − Q2 =
=E
[︂
S(O) × hZ(W )
P(Z = 1) × G × E
(︂∂
∂v [hY (X, v)]
⃒ ⃒
⃒ v=hG(W )
| W, Z = 1
)︂]︂
−
−E
[︂
S(O) × hZ(W )
P(Z = 1) × hG(W ) × E
(︂∂
∂v [hY (X, v)]
⃒ ⃒
⃒ v=hG(W )
| W, Z = 1
)︂]︂
,
(164)
where hZ(w) = P(Z = 1 | W = w).
The expression for the efficient influence function follows immediately after inserting equations (160) and (164) into equation (159). ■ Proof of Lemma 6 from Section 7.
Consider d, d* ∈ supp(Di) and z ∈ supp(Zi). By Assumption 1, the vector of conditional probabilities P ̄(z)
i is a function of (Di, Xi, W (Z)
i ). In addition, by Assumption 2, we have Ydi ⊥
(Di, W (Z)
i ) | Xi. These facts imply that:
E
(︁
Ydi|Xi = x, P ̄(z)
i =p
)︁
= E (Ydi|Xi = x) . (165)
By using the last equality and Assumption 4, we get:
μY (d, x, p, z) − μY (d, x, p, z) = E
(︁
Ydi | Xi = x, P ̄(z)
i = p, Zi = z
)︁
−
−E
(︁
Yd*i | Xi = x, P ̄(z)
i = p, Zi = z
)︁
=
=E
(︁
Ydi | Xi = x, P ̄(z)
i =p
)︁
−E
(︁
Yd*i | Xi = x, P ̄(z)
i =p
)︁
⏟⏞
Assumption 4
=
= E (Ydi | Xi = x) − E (Yd*i | Xi = x)
⏟⏞
By equation (165)
.
(166)
Since this difference does not depend on p, its derivative with respect to p is zero, so:
μ∂Y (d, Xi, P ̄(z)
i , z) − μ∂Y (d*, Xi, P ̄(z)
i , z) = 0. (167)
46

■
The last equality obviously implies Ri = 0. Proof of Lemma 7 from Section 7.
The proof follows the same steps as the proof of Lemma 6 and is therefore omitted for brevity. ■ Proof of Theorem 1 from Section 3. Identification of ATES and ATETS. Consider (d ̄, x, p, z) ∈ supp(Di, Xi, P ̄(z)
i , Zi). Lemma 1 implies the following equality:
fYd ̄i|(Di,Xi,P ̄(z)
i ,Zi)(y | d ̄, x, p, z) = fYd ̄i|(Xi,P ̄(z)
i ,Zi)(y | x, p, z). (168)
By using equation (168) and the law of iterated expectations, we get:
E
[︁
μY
(︁ d ̄, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
=
=
∫︁∫︁
μY
(︀ d ̄, x, p, z)︀ f(Xi,P ̄(z)
i )|Zi(x, p | z) dx dp =
=
∫︁∫︁∫︁
y fYi|(Di,Xi,P ̄(z)
i ,Zi)(y | d ̄, x, p, z) dy f(Xi,P ̄(z)
i )|Zi(x, p | z) dx dp =
=
∫︁∫︁∫︁
y fYd ̄i|(Di,Xi,P ̄(z)
i ,Zi)(y | d ̄, x, p, z)
⏟⏞
Since Yi|(Di=d ̄) is the same as Yd ̄i|(Di=d ̄)
dy f(Xi,P ̄(z)
i )|Zi(x, p | z) dx dp =
=
∫︁∫︁∫︁
y fYd ̄i|(Xi,P ̄(z)
i ,Zi)(y | x, p, z)
⏟⏞
By equation (168)
dy f(Xi,P ̄(z)
i )|Zi(x, p | z) dx dp =
=E
[︁
E
(︁
Yd ̄i | Xi, P ̄(z)
i , Zi = z
)︁
| Zi = z
]︁
= E (Yd ̄i | Zi = z)
⏟⏞
Law of iterated expectations
.
(169)
Hence, by applying equation (169) and the law of total expectation, we obtain:
E
(︁
Yd ̄i | Z ̃i = 1
)︁
=
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
(︀ Ydi | Zi = z(t))︀
⏟⏞
Law of total expectation
=
=
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
[︁
μY
(︁ d ̄, Xi, P ̄(z(t))
i , z(t))︁
| Zi = z(t)]︁
⏟⏞
By equation (169)
.
(170)
Therefore, for any d, d* ∈ supp(Di), we have:
ATES = E
(︁
Ydi − Yd*i | Z ̃i = 1
)︁
=E
(︁
Ydi | Z ̃i = 1
)︁
−E
(︁
Yd*i | Z ̃i = 1
)︁
=
=
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
[︁
μY
(︁
d, Xi, P ̄(z(t))
i , z(t))︁
| Zi = z(t)]︁
⏟⏞
By equation (170)
−
−
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
[︁
μY
(︁
d*, Xi, P ̄(z(t))
i , z(t))︁
| Zi = z(t)]︁
⏟⏞
By equation (170)
=
=
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
×
×E
[︁
μY
(︁
d, Xi, P ̄(z(t))
i , z(t))︁
− μY
(︁
d*, Xi, P ̄(z(t))
i , z(t))︁
| Zi = z(t)]︁
.
(171)
47

Similarly, the expression for ATETS follows immediately from the law of total expectation and the fact that, by Lemma 1, we have:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
| Zi = z, Di = d
)︁
=
=
∫︁∫︁∫︁
y fYdi|(Di,Xi,P ̄(z)
i ,Zi)(y | d, x, p, z) dy × f(Xi,P ̄(z)
i )|(Zi,Di)(x, p | z, d) dx dp =
=
∫︁∫︁∫︁
y fYdi|(Xi,P ̄(z)
i ,Zi)(y | x, p, z) dy × f(Xi,P ̄(z)
i )|(Zi,Di)(x, p | z, d) dx dp =
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
| Zi = z, Di = d
)︁
= E (Ydi | Zi = z, Di = d) ,
(172)
and:
E
(︁
μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
| Zi = z, Di = d
)︁
=
=
∫︁∫︁∫︁
y fYd*i|(Di,Xi,P ̄(z)
i ,Zi)(y | d*, x, p, z) dy×
× f(Xi,P ̄(z)
i )|(Zi,Di)(x, p | z, d) dx dp =
=
∫︁∫︁∫︁
y fYd*i|(Xi,P ̄(z)
i ,Zi)(y | x, p, z) dy × f(Xi,P ̄(z)
i )|(Zi,Di)(x, p | z, d) dx dp =
=E
(︁
E
(︁
Yd*i | Xi, P ̄(z)
i , Zi = z
)︁
| Zi = z, Di = d
)︁
= E (Yd*i | Zi = z, Di = d) .
(173)
The existence of the conditional expectations used in the proof is ensured by Assumption 3. ■ Proof of Theorem 2 from Section 3. Identification of ATE and ATET.
Consider d, d* ∈ supp(Di) and z ∈ supp(Zi). By following steps similar to those used to establish equation (168) in the proof of Theorem 1, we get:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
=
=
∫︁∫︁∫︁
y fYdi|(Di,Xi,P ̄(z)
i ,Zi)(y | d, x, p, z)
⏟⏞
Since Yi|(Di=d) is the same as Ydi|(Di=d)
dy f(Xi,P ̄(z)
i )(x, p) dx dp =
=
∫︁∫︁∫︁
y fYdi|(Xi,P ̄(z)
i ,Zi)(y | x, p, z)
⏟⏞
Lemma 1
dy f(Xi,P ̄(z)
i )(x, p) dx dp =
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
.
(174)
Hence, by applying Assumption 4, we obtain:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
− μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i , Zi = z
)︁
⏟⏞
By equation (174)
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i
)︁
⏟⏞
Assumption 4
= E (Ydi) − E (Yd*i)
⏟⏞
Law of iterated expectations
,
(175)
where the existence of the conditional expectations associated with nuisance functions is ensured by Assumptions 3 and 5.
48

By noticing that
m
∑︀
t=1
P(Zi = z(t) | Z ̃i = 1) = 1 and using equation (175), we finally obtain:
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)E
(︂
E
(︁
Yi | Di = d, Xi, P (z(t)−1)
i , P (z(t))
i , Zi = z(t))︁
−
−E
(︁
Yi | Di = d*, Xi, P (z(t)−1)
i , P (z(t))
i , Zi = z(t))︁
)︂
=
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1) × [E(Ydi) − E(Yd*i)] = E(Ydi) − E(Yd*i) = ATE.
(176)
To obtain the formula for ATET, we follow very similar steps:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
− μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
| Di = d
)︁
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i , Zi = z
)︁
| Di = d
)︁
⏟⏞
Derivation is very similar to equation (174) and equation (172)
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i
)︁
| Di = d
)︁
⏟⏞
Assumption 4
=
= E (Ydi − Yd*i | Di = d)
⏟⏞
Law of iterated expectations
.
(177)
The final expression for ATET follows by application of the law of total expectation to equation (177) in the same way as in equation (176). ■ Proof of Theorem 2A from Section 3. Identification of ATEG. Consider d, d* ∈ supp(Di), z(g) ∈ supp(Z(g)
i ), and deterministic vector z such that P(Zi =
z | Z(g)
i = z(g)) > 0. By following steps similar to those used to derive equation (174) in the proof of Theorem 2, we get:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
| Z(g)
i = z(g))︁
=
=
∫︁∫︁∫︁
y fYdi|(Di,Xi,P ̄(z)
i ,Zi)(y | d, x, p, z)
⏟⏞
Since Yi|(Di=d) is the same as Ydi|(Di=d)
dy f(Xi,P ̄(z)
i |Z(g)
i )(x, p | z(g)) dx dp =
=
∫︁∫︁∫︁
y fYdi|(Xi,P ̄(z)
i ,Zi)(y | x, p, z)
⏟⏞
Lemma 1
dy f(Xi,P ̄(z)
i |Z(g)
i )(x, p | z(g)) dx dp =
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
| Z(g)
i = z(g))︁
.
(178)
From equation (178), we have:
E
(︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
− μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
| Z(g)
i = z(g))︁
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i , Zi = z
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i , Zi = z
)︁
| Z(g)
i = z(g))︁
⏟⏞
By equation (178)
=
=E
(︁
E
(︁
Ydi | Xi, P ̄(z)
i
)︁
−E
(︁
Yd*i | Xi, P ̄(z)
i
)︁
| Z(g)
i = z(g))︁
⏟⏞
Assumption 4
=
=E
(︁
Ydi − Yd*i | Z(g)
i = z(g))︁
⏟⏞
Law of iterated expectations
,
(179)
49

where the existence of the conditional expectations is ensured by Assumptions 3 and 5.
Since
m
∑︀
t=1
P(Zi = z(t) | Z(g)
i = z(g), Z ̃i = 1) = 1, we may use equation (179) to obtain:
m
∑︁
t=1
P(Zi = z(t) | Z(g)
i = z(g), Z ̃i = 1)×
×E
(︂
E
(︁
Yi | Di = d, Xi, P (z(t)−1)
i , P (z(t))
i , Zi = z(t))︁
−
−E
(︁
Yi | Di = d*, Xi, P (z(t)−1)
i , P (z(t))
i , Zi = z(t))︁
| Z(g)
i = z(g)
)︂
=
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1) ×
[︁
E(Ydi − Yd*i | Z(g)
i = z(g))
]︁
=
= E(Ydi − Yd*i | Z(g)
i = z(g)) = ATEG.
(180)
■ Proof of Theorem 3 from Section 4. Identification of LATES. Part 1. Case m = 1 .
We follow very closely the structure of the proof of Theorem 1 from (Frolich, 2007) and extend it to the case of MSSM.
Consider (x, p, w, z) ∈ supp(Xi, P ̄(z)
i , W (D)
i , Zi). For brevity, denote X ̃i = (Xi, P ̄(z)
i , Zi) and x ̃ = (x, p, z). By using the law of total expectation, we obtain:
E
(︁
Yi | Xi = x, P ̄(z)
i = p, W (D)
i = w, Zi = z
)︁
=E
(︁
Yi | X ̃i = x ̃, W (D)
i =w
)︁
=
=E
(︁
Yi | X ̃i = x ̃, W (D)
i = w, compileri = 1
)︁
×
×P
(︁
compileri = 1 | X ̃i = x ̃, W (D)
i =w
)︁
+
+E
(︁
Yi | X ̃i = x ̃, W (D)
i = w, defieri = 1
)︁
×
×P
(︁
defieri = 1 | X ̃i = x ̃, W (D)
i =w
)︁
⏟⏞
Equals 0 by Assumption 2F
+
+E
(︁
Yi | X ̃i = x ̃, W (D)
i = w, always-takeri = 1
)︁
×
×P
(︁
always-takeri = 1 | X ̃i = x ̃, W (D)
i =w
)︁
+
+E
(︁
Yi | X ̃i = x ̃, W (D)
i = w, never-takeri = 1
)︁
×
×P
(︁
never-takeri = 1 | X ̃i = x ̃, W (D)
i =w
)︁
.
(181)
Note that if W (D)
i = 1, then we observe Y1i for compliers. Similarly, if W (D)
i = 0, then we observe Y0i for compliers. For always-takers and never-takers we always observe Y1i and Y0i,
50

respectively. By using these facts, we obtain:
E
(︁
Yi | X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Yi | X ̃i = x ̃, W (D)
i =0
)︁
=
=E
(︁
Y1i | X ̃i = x ̃, W (D)
i = 1, compileri = 1
)︁
×
×P
(︁
compileri = 1 | X ̃i = x ̃, W (D)
i =1
)︁
+
+E
(︁
Y1i | X ̃i = x ̃, W (D)
i = 1, always-takeri = 1
)︁
×
×P
(︁
always-takeri = 1 | X ̃i = x ̃, W (D)
i =1
)︁
+
+E
(︁
Y0i | X ̃i = x ̃, W (D)
i = 1, never-takeri = 1
)︁
×
×P
(︁
never-takeri = 1 | X ̃i = x ̃, W (D)
i =1
)︁
−
−E
(︁
Y0i | X ̃i = x ̃, W (D)
i = 0, compileri = 1
)︁
×
×P
(︁
compileri = 1 | X ̃i = x ̃, W (D)
i =0
)︁
−
−E
(︁
Y1i | X ̃i = x ̃, W (D)
i = 0, always-takeri = 1
)︁
×
×P
(︁
always-takeri = 1 | X ̃i = x ̃, W (D)
i =0
)︁
−
−E
(︁
Y0i | X ̃i = x ̃, W (D)
i = 0, never-takeri = 1
)︁
×
×P
(︁
never-takeri = 1 | X ̃i = x ̃, W (D)
i =0
)︁
.
(182)
Because of Assumptions 1F, 4F, and 5F, we may apply Lemma 2, which allows us to remove
the conditioning on W (D)
i in the expectations and probabilities:
E
(︁
Yi | X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Yi | X ̃i = x ̃, W (D)
i =0
)︁
=
=E
(︁
Y1i | X ̃i = x ̃, compileri = 1
)︁
P
(︁
compileri = 1 | X ̃i = x ̃
)︁
+
+E
(︁
Y1i | X ̃i = x ̃, always-takeri = 1
)︁
P
(︁
always-takeri = 1 | X ̃i = x ̃
)︁
+
+E
(︁
Y0i | X ̃i = x ̃, never-takeri = 1
)︁
P
(︁
never-takeri = 1 | X ̃i = x ̃
)︁
−
−E
(︁
Y0i | X ̃i = x ̃, compileri = 1
)︁
P
(︁
compileri = 1 | X ̃i = x ̃
)︁
−
−E
(︁
Y1i | X ̃i = x ̃, always-takeri = 1
)︁
P
(︁
always-takeri = 1 | X ̃i = x ̃
)︁
−
−E
(︁
Y0i | X ̃i = x ̃, never-takeri = 1
)︁
P
(︁
never-takeri = 1 | X ̃i = x ̃
)︁
=
=
[︁
E
(︁
Y1i | X ̃i = x ̃, compileri = 1
)︁
−E
(︁
Y0i | X ̃i = x ̃, compileri = 1
)︁]︁
×
×P
(︁
compileri = 1 | X ̃i = x ̃
)︁
.
(183)
Because of Assumption 3F, we may divide both sides of the last expression by the conditional probability of complying:
E
(︁
Y1i|X ̃i = x ̃, complieri = 1
)︁
−E
(︁
Y0i|X ̃i = x ̃, complieri = 1
)︁
=
=
E
(︁
Yi|X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Yi|X ̃i = x ̃, W (D)
i =0
)︁
P
(︁
complieri = 1|X ̃i = x ̃
)︁.
(184)
51

To expand the denominator in the last expression, note that:
E
(︁
Di | X ̃i = x ̃, W (D)
i =1
)︁
=P
(︁
Di = 1 | X ̃i = x ̃, W (D)
i =1
)︁
=
=P
(︁
compileri = 1 | X ̃i = x ̃, W (D)
i =1
)︁
+
+P
(︁
always-takeri = 1 | X ̃i = x ̃, W (D)
i =1
)︁
=
=P
(︁
compileri = 1 | X ̃i = x ̃
)︁
⏟⏞
Lemma 2
+P
(︁
always-takeri = 1 | X ̃i = x ̃
)︁
⏟⏞
Lemma 2
.
(185)
and:
E
(︁
Di | X ̃i = x ̃, W (D)
i =0
)︁
=P
(︁
Di = 1 | X ̃i = x ̃, W (D)
i =0
)︁
=
=P
(︁
defieri = 1 | X ̃i = x ̃, W (D)
i =0
)︁
+
+P
(︁
always-takeri = 1 | X ̃i = x ̃, W (D)
i =0
)︁
=
=P
(︁
defieri = 1 | X ̃i = x ̃
)︁
⏟⏞
Lemma 2
+P
(︁
always-takeri = 1 | X ̃i = x ̃
)︁
⏟⏞
Lemma 2
.
(186)
Hence, by taking the difference, we obtain:
E
(︁
Di | X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Di | X ̃i = x ̃, W (D)
i =0
)︁
=
=P
(︁
compileri = 1 | X ̃i = x ̃
)︁
−P
(︁
defieri = 1 | X ̃i = x ̃
)︁
⏟⏞
Equals 0 by Assumption 2F
=
=P
(︁
compileri = 1 | X ̃i = x ̃
)︁
.
(187)
By plugging equation (187) into the denominator of equation (184), we get the expression for the conditional local average treatment effect:
CLATES(x, p | Zi = z) = E
(︁
Y1i | X ̃i = x ̃, compileri = 1
)︁
−
−E
(︁
Y0i | X ̃i = x ̃, compileri = 1
)︁
=
=
E
(︁
Yi | X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Yi | X ̃i = x ̃, W (D)
i =0
)︁
E
(︁
Di | X ̃i = x ̃, W (D)
i =1
)︁
−E
(︁
Di | X ̃i = x ̃, W (D)
i =0
)︁=
= μ ̄Y (1, x, p, z) − μ ̄Y (0, x, p, z)
μ ̄D (1, x, p, z) − μ ̄D (0, x, p, z) ,
(188)
where the conditional expectations used in this expression exist by Assumption 6F.
52

By taking an expectation and applying the Bayes’ theorem, we obtain:
LATES = E
(︁
E
(︁
Y1i − Y0i | Xi, P ̄(z)
i , Zi = z, compileri = 1
)︁
=
=E
(︁
CLATES(Xi, P ̄(z)
i | Zi = z) | Zi = z, compileri = 1
)︁
=
=
∫︁∫︁
CLATES(x, p | Zi = z) f(Xi,P ̄(z)
i )|compileri,Zi (x, p | 1, z) dx dp =
=
∫︁∫︁
CLATES(x, p | Zi = z) P(compileri = 1, Xi = x, P ̄(z)
i = p, Zi = z)
P(compileri = 1, Zi = z) dx dp
=
∫︁∫︁
CLATES(x, p | Zi = z)×
×
P(compileri = 1 | Xi = x, P ̄(z)
i = p, Zi = z)f(Xi,P ̄(z)
i )|Zi (x, p | z)
P(compileri = 1 | Zi = z)P(Zi = z) ×
× P(Zi = z) dx dp =
=
∫︁∫︁
CLATES(x, p | Zi = z) P(compileri = 1 | Xi = x, P ̄(z)
i = p, Zi = z)
P(compileri = 1 | Zi = z)
× f(Xi,P ̄(z)
i )|Zi(x, p | z) dx dp =
=E
(︃
CLATES(Xi, P ̄(z)
i | Zi = z) P(compileri = 1 | Xi, P ̄(z)
i , Zi = z)
P(compileri = 1 | Zi = z) | Zi = z
)︃
.
(189)
By expanding CLATES(Xi, P ̄(z)
i | Zi = z) via equation (184), we finally establish the result for m = 1:
LATES = E
⎛
⎝
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
P
(︁
compileri = 1 | Xi, P ̄(z)
i , Zi = z
)︁×
× P(compileri = 1 | Xi, P ̄(z)
i , Zi = z)
P(compileri = 1 | Zi = z) | Zi = z
)︃
=
=E
⎛
⎝
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
P(compileri = 1 | Zi = z) | Zi = z
⎞
⎠=
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
P(compileri = 1 | Zi = z) =
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
E
[︁
P
(︁
compileri = 1 | X ̃i, Zi = z
)︁
| Zi = z
]︁=
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄D
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁.
(190)
Part 2. Case m > 1.
53

We apply the law of total expectation:
LATES = E
(︁
Y1i | Z ̃i = 1, compileri = 1
)︁
−E
(︁
Y0i | Z ̃i = 1, compileri = 1
)︁
=
=
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1, compileri = 1
)︁
×
×
(︀ E (︀ Y1i | Zi = z(t), compileri = 1)︀ −
− E (︀ Y0i | Zi = z(t), compileri = 1)︀ .
(191)
Note that for any z* ∈ {z(1), . . . , z(m)}, we have:
P
(︁
Zi = z* | Z ̃i = 1, compileri = 1
)︁
=
=
P
(︁ Z ̃i = 1, compileri = 1 | Zi = z*
)︁
P(Zi = z*)
P
(︁
compileri = 1 | Z ̃i = 1
)︁
P(Z ̃i = 1)
=
= P (compileri = 1 | Zi = z*) P(Zi = z*)
P
(︁
compileri = 1 | Z ̃i = 1
)︁
P(Z ̃i = 1)
=
= P (compileri = 1 | Zi = z*)
m
∑︀
t=1
P (compileri = 1 | Zi = z(t)) P
(︁
Zi = z(t) | Z ̃i = 1
)︁ × P(Zi = z*)
P(Z ̃i = 1) .
(192)
By applying equation (187) to the denominator of equation (192), we obtain:
P
(︀ compileri = 1 | Zi = z(t))︀ =
=E
(︁
E
(︁
compileri = 1 | X ̃ (t)
i , Zi = z(t))︁
| Zi = z(t))︁
=
=E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t))︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t))︁
| Zi = z(t)]︁
.
(193)
By plugging equation (193) into equation (192) and then this modified equation (192) into equation (191), we obtain:
LATES =
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1) [︀ E (︀ Y1i | Zi = z(t), compileri = 1)︀ −
−E (︀ Y0i | Zi = z(t), compileri = 1)︀]︀ =
=
m
∑︁
t=1
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁
| Zi = z(t)
]︁
m
∑︀
k=1
E
⎡
⎣
μ ̄D
(︁
1, Xi, P ̄(z(k))
i , z(k))︁
−
−μ ̄D
(︁
0, Xi, P ̄(z(k))
i , z(k))︁ | Zi = z(k)
⎤
⎦P
(︁
Zi = z(k) | Z ̃i = 1
)︁
×
× P(Zi = z(t))
P(Z ̃i = 1) ×
×
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁
| Zi = z(t)
]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁
| Zi = z(t)
]︁.
(194)
Note that in the last expression, the numerator of the first factor cancels with the denomi
54

nator of the second factor. Therefore, we finally obtain:
LATES =
m
∑︁
t=1
P(Zi = z(t))
P(Z ̃i = 1) ×
×
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁
| Zi = z(t)
]︁
m
∑︀
k=1
E
⎡
⎣
μ ̄D
(︁
1, Xi, P ̄(z(k))
i , z(k))︁
−
−μ ̄D
(︁
0, Xi, P ̄(z(k))
i , z(k))︁ | Zi = z(k)
⎤
⎦P
(︁
Zi = z(k) | Z ̃i = 1
)︁
=
=
m
∑︀
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
⎡
⎣
μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t))︁
−
−μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t))︁ | Zi = z(t)
⎤
⎦
m
∑︀
k=1
P
(︁
Zi = z(k) | Z ̃i = 1
)︁
E
⎡
⎣
μ ̄D
(︁
1, Xi, P ̄(z(k))
i , z(k))︁
−
−μ ̄D
(︁
0, Xi, P ̄(z(k))
i , z(k))︁ | Zi = z(k)
⎤
⎦
.
(195)
■ Proof of Theorem 4 from Section 4. Identification of LATE. Part 1. Case m = 1.
Consider (x, p, w, z) ∈ supp
(︁
Xi, P ̄(z)
i , W (D)
i , Zi
)︁
. By using Lemma 3 and Assumption 8F,
we obtain:
P(complieri = 1 | Xi = x, P ̄(z)
i = p, Zi = z) =
=
⎛
⎜ ⎜ ⎜ ⎜ ⎜ ⎜ ⎝
E
(︁
Di | Xi = x, P ̄(z)
i = p, W (D)
i = 1, Zi = z
)︁
−
−E
(︁
Di | Xi = x, P ̄(z)
i = p, W (D)
i = 0, Zi = z
)︁
⏟⏞
By equation (187)
⎞
⎟ ⎟ ⎟ ⎟ ⎟ ⎟ ⎠
=
=E
(︁
D1i | Xi = x, P ̄(z)
i = p, W (D)
i = 1, Zi = z
)︁
−
−E
(︁
D0i | Xi = x, P ̄(z)
i = p, W (D)
i = 0, Zi = z
)︁
=
=E
(︁
D1i | Xi = x, P ̄(z)
i = p, Zi = z
)︁
⏟⏞
Lemma 3: D1i⊥W (D)
i |(Xi=x,P ̄(z)
i =p,Zi=z)
−E
(︁
D0i | Xi = x, P ̄(z)
i = p, Zi = z
)︁
⏟⏞
Lemma 3: D0i⊥W (D)
i |(Xi=x,P ̄(z)
i =p,Zi=z)
=
=E
(︁
D1i | Xi = x, P ̄(z)
i =p
)︁
−E
(︁
D0i | Xi = x, P ̄(z)
i =p
)︁
⏟⏞
Assumption 8F
=E
(︁
Di | Xi = x, P ̄(z)
i = p, W (D)
i =1
)︁
⏟⏞
Lemma 3: D1i⊥W (D)
i |(Xi=x,P ̄(z)
i =p)
−E
(︁
Di | Xi = x, P ̄(z)
i = p, W (D)
i =0
)︁
⏟⏞
Lemma 3: D0i⊥W (D)
i |(Xi=x,P ̄(z)
i =p)
=
= P(complieri = 1 | Xi = x, P ̄(z)
i = p),
(196)
where the last equality is easy to derive by using the same steps as in the proof of Theorem 3. By defining CLATE(x, p) and applying equations (184), (196), and Assumption 8F, we
55

obtain:
CLATE(x, p) = E
(︁
Y1i | Xi = x, P ̄(z)
i = p, complieri = 1
)︁
−
−E
(︁
Y0i | Xi = x, P ̄(z)
i = p, complieri = 1
)︁
=
=
⎛
⎜ ⎜ ⎜ ⎜ ⎜ ⎝
E
(︁
Y1i | Xi = x, P ̄(z)
i = p, complieri = 1, Zi = z
)︁
−
−E
(︁
Y0i | Xi = x, P ̄(z)
i = p, complieri = 1, Zi = z
)︁
⏟⏞
Assumption 8F
⎞
⎟ ⎟ ⎟ ⎟ ⎟ ⎠
=
= CLATES(x, p | Zi = z) =
=
⎡
⎣
E
(︁
Yi | Xi = x, P ̄(z)
i = p, W (D)
i = 1, Zi = z
)︁
−
−E
(︁
Yi | Xi = x, P ̄(z)
i = p, W (D)
i = 0, Zi = z
)︁
⎤
⎦
P
(︁
complieri = 1 | Xi = x, P ̄(z)
i = p, Zi = z
)︁
⏟⏞
By equation (184)
=
=
⎡
⎣
E
(︁
Yi | Xi = x, P ̄(z)
i = p, W (D)
i = 1, Zi = z
)︁
−
−E
(︁
Yi | Xi = x, P ̄(z)
i = p, W (D)
i = 0, Zi = z
)︁
⎤
⎦
P
(︁
complieri = 1 | Xi = x, P ̄(z)
i =p
)︁
⏟⏞
By equation (196)
.
(197)
Therefore, we have established that CLATE(x, p) equals CLATES(x, p | Zi = z). In addition, we have simplified its expression. By using these results and the same approach as in the
56

proof of Theorem 3, we obtain:
LATE = E
(︁
CLATE(Xi, P ̄(z)
i ) | complieri = 1
)︁
=
=E
(︁
CLATES(Xi, P ̄(z)
i | Zi = z) | complieri = 1
)︁
=E
(︃
CLATES(Xi, P ̄(z)
i | Zi = z) P(complieri = 1 | Xi, P ̄(z)
i) P(complieri = 1)
)︃
=E
⎛
⎝
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
P
(︁
complieri = 1 | Xi, P ̄(z)
i
)︁×
× P(complieri = 1 | Xi, P ̄(z)
i) P(complieri = 1)
)︃
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁
E
[︁
P(complieri = 1 | Xi = x, P ̄(z)
i = p)
]︁
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z)
i
)︁
− μ ̄D
(︁
0, Xi, P ̄(z)
i
)︁]︁
⏟⏞
Useful if Di is not subject to non-random selection
=
=
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄D
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁
⏟⏞
Assumption 8F
.
(198)
Note that if Di is not subject to non-random selection, then pre-last representation of LATE is preferable. However, for greater generality, we consider the last representation in which Di is conditioned on Zi = z. Part 2. Case m > 1.
Since
m
∑︀
t=1
P
(︁
Zi = z(t) | Z ̃i = 1, complieri = 1
)︁
= 1, the expression for m > 1 is as follows:
LATE =
m
∑︁
t=1
P
(︁
Zi = z(t) | Z ̃i = 1, complieri = 1
)︁
×
×
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁]︁ .
(199)
By inserting equation (196) into equation (192), we obtain:
P
(︁
Zi = z* | Z ̃i = 1, complieri = 1
)︁
=
= P (complieri = 1 | Zi = z*)
m
∑︀
t=1
P (complieri = 1 | Zi = z(t)) P
(︁
Zi = z(t) | Z ̃i = 1
)︁
P (Zi = z*)
P
(︁ Z ̃i = 1
)︁×
=P
(︁
Zi = z* | Z ̃i = 1
)︁
×
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z*)
i , z*
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z*)
i , z*
)︁]︁
m
∑︀
t=1
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁]︁
P
(︁
Zi = z(t) | Z ̃i = 1
)︁.
(200)
57

By plugging equation (200) into equation (199), we finally obtain:
LATE =
=
m
∑︀
t=1
P
(︁
Zi = z(t) | Z ̃i = 1
)︁
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t)
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t)
)︁]︁
m
∑︀
k=1
P
(︁
Zi = z(k) | Z ̃i = 1
)︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z(k))
i , z(k)
)︁
− μ ̄D
(︁
0, Xi, P ̄(z(k))
i , z(k)
)︁]︁ . (201)
■ Proof of Theorem 5 from from Section 6. Efficient influence functions of ATE and ATES in the latent model. Part 1. Case m = 1 for ATE.
Define z = z(1) and consider the following estimand:
Ψd,z = E
[︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁]︁
. (202)
Define A = I(Di = d, Zi = z) and X = (Xi, P ̄(z)
i ), where A and X are notations from Lemma 4. By applying this lemma, we get the efficient influence function:
EIF(Ψd,z) = I(Di = d, Zi = z)
μI(Di=d,Zi=z)(Xi, P ̄(z)
i)
(︁
Yi − μY (d, Xi, P ̄(z)
i , z)
)︁
+
+ μY (d, Xi, P ̄(z)
i , z) − Ψd,z,
(203)
where:
μI(Di=d,Zi=z)(x, p) = P(Di = d, Zi = z | Xi = x, P ̄(z)
i = p) =
= P(Di = d | Xi = x, P ̄(z)
i = p)P(Zi = z | Xi = x, P ̄(z)
i = p, Di = d) =
= P(Di = d | Xi = x, P ̄(z)
i = p) P(Zi = z | Xi = x, P ̄(z)
i = p)
⏟⏞
Since I(Zi=z)⊥Di|(Xi,P ̄(z)
i ) implied by Assumption 4
=
= μD(d, x, p)μZ(z, x, p).
(204)
By inserting equation (204) into equation (203), we obtain:
EIFd,z = I(Di = d, Zi = z)
μD(d, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
(︁
Yi − μY (d, Xi, P ̄(z)
i , z)
)︁
+
+ μY (d, Xi, P ̄(z)
i , z) − Ψd,z.
(205)
By the difference rule of influence functions, we finally get:
EIFATE = EIF(Ψd,z − Ψd*,z) = EIF(Ψd,z) − EIF(Ψd*,z). (206)
Part 2. Case m > 1 for ATE.
58

By applying the difference rule and the product rule of influence functions, we get:
EIFATE = EIF
(︃m ∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)Ψd,z(t) − P(Zi = z(t) | Z ̃i = 1)Ψd*,z(t)
)︃
=
=
m
∑︁
t=1
EIF
(︁
P(Zi = z(t) | Z ̃i = 1)Ψd,z(t)
)︁
− EIF
(︁
P(Zi = z(t) | Z ̃i = 1)Ψd*,z(t)
)︁
=
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)EIF(Ψd,z(t)) + EIF
(︁
P(Zi = z(t) | Z ̃i = 1)
)︁
Ψd,z(t) −
− P(Zi = z(t) | Z ̃i = 1)EIF(Ψd*,z(t)) − EIF
(︁
P(Zi = z(t) | Z ̃i = 1)
)︁
Ψd*,z(t) =
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)EIFd,z(t)+
+
Z ̃i
[︁
I(Zi = z(t)) − P(Zi = z(t) | Z ̃i = 1)
]︁
P(Z ̃i = 1) Ψd,z(t) −
− P(Zi = z(t) | Z ̃i = 1)EIFd*,z(t) −
−
Z ̃i
[︁
I(Zi = z(t)) − P(Zi = z(t) | Z ̃i = 1)
]︁
P(Z ̃i = 1) Ψd*,z(t) .
(207)
Note that the derivation of expression for m > 1 is straightforward but the final formula is fairly cumbersome, which motivates us to proceed with m = 1 for other causal parameters. Part 3. Case m = 1 for ATES.
Define z = z(1) and consider the following estimand:
Ψ*
d,z = E
[︁
μY
(︁
d, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
. (208)
Define A = I(Di = d, Zi = z), X = (Xi, P ̄(z)
i ) and Z = I(Zi = z), where A, X and Z are notations from Lemma 4. By applying this lemma, we get:
EIF(Ψ*
d,z) = I(Di = d, Zi = z) · μZ(z, Xi, P ̄(z)
i)
P(Zi = z) μD(d, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
⏟⏞
By equation (204)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+
+ I(Zi = z)
P(Zi = z)
[︁
μY (d, Xi, P ̄(z)
i , z) − Ψ*
d,z
]︁
=
= I(Zi = z)
P(Zi = z)
(︂ I(Di = d)
μD(d, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+
+ μY (d, Xi, P ̄(z)
i , z) − Ψ*
d,z
)︂
.
(209)
Thus, we have EIFATES = EIF(Ψ*
d,z) − EIF(Ψ*
d*,z). ■
Proof of Theorem 6 from Section 6. Efficient influence functions of ATET and ATETS in the latent model. Part 1. Case m = 1 for ATET.
Define z = z(1) and consider the following estimand:
Ψd*,z,d = E
[︁
μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
| Di = d
]︁
. (210)
59

Define A = I(Di = d*, Zi = z), X = (Xi, P ̄(z)
i ), and Z = I(Di = d), where A, X, and Z are notations from Lemma 4. By applying this lemma, we get the efficient influence function:
EIF(Ψd*,z,d) = I(Di = d*, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d) μD(d*, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
⏟⏞
By equation (204)
×
×
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
+ I(Di = d)
P(Di = d)
[︁
μY (d*, Xi, P ̄(z)
i , z) − Ψd*,z,d
]︁
.
(211)
From the previous expression, we get:
EIF(Ψd,z,d) = I(Di = d, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d)μD(d, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+
+ I(Di = d)
P(Di = d)
[︁
μY (d, Xi, P ̄(z)
i , z) − Ψd,z,d
]︁
= I(Di = d)
P(Di = d) ×
×
(︃
I(Zi = z)
μZ (z, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+ μY (d, Xi, P ̄(z)
i , z) − Ψd,z,d
)︃
.
(212)
Thus, we have EIFATET = EIF(Ψd,z,d) − EIF(Ψd*,z,d). Part 2. Case m = 1 for ATETS.
Define z = z(1) and consider the following estimand:
Ψ*
d*,z,d = E
[︁
μY
(︁
d*, Xi, P ̄(z)
i ,z
)︁
| Di = d, Zi = z
]︁
. (213)
Define A = I(Di = d*, Zi = z), X =
(︁
Xi, P ̄(z)
i
)︁
, and Z = I (Di = d, Zi = z), where A, X,
and Z are notations from Lemma 4. By applying this lemma, we get the efficient influence function:
EIF(Ψ*
d*,z,d) =
I(Di = d*, Zi = z) μD(d, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
⏟⏞
By equation (204)
P(Di = d, Zi = z) μD(d*, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
⏟⏞
By equation (204)
×
×
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
+
+ I(Di = d, Zi = z)
P(Di = d, Zi = z)
[︁
μY (d*, Xi, P ̄(z)
i , z) − Ψ*
d*,z,d
]︁
=
= I(Di = d*, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d, Zi = z)μD(d*, Xi, P ̄(z)
i)
[︁
Yi − μY (d*, Xi, P ̄(z)
i , z)
]︁
+
+ I(Di = d, Zi = z)
P(Di = d, Zi = z)
[︁
μY (d*, Xi, P ̄(z)
i , z) − Ψ*
d*,z,d
]︁
.
(214)
From the previous expression, we obtain:
EIF(Ψ*
d,z,d) = I(Di = d, Zi = z)μD(d, Xi, P ̄(z)
i)
P(Di = d, Zi = z)μD(d, Xi, P ̄(z)
i)
[︁
Yi − μY (d, Xi, P ̄(z)
i , z)
]︁
+
+ I(Di = d, Zi = z)
P(Di = d, Zi = z)
[︁
μY (d, Xi, P ̄(z)
i , z) − Ψ*
d,z,d
]︁
=
= I(Di = d, Zi = z)
P(Di = d, Zi = z)
[︀ Yi − Ψ*
d,z,d
]︀.
(215)
60

Thus, we have EIFATETS = EIF(Ψ*
d,z,d) − EIF(Ψ*
d*,z,d). ■
Proof of Theorem 7 from Section 6. Efficient influence functions of LATE and LATETS in the latent model. Part 1. Case m = 1 for LATE.
Define z = z(1). Consider separately the numerator ψ1 and denominator ψ2 of the LATE:
LATE =
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄D
(︁
0, Xi, P ̄(z)
i ,z
)︁]︁ = ψ1
ψ2
. (216)
By the ratio rule of influence functions, we get:
EIF(LATE) = EIF(ψ1)ψ2 − EIF(ψ2)ψ1
ψ2
2
. (217)
Consider w ∈ {0, 1}. By very similar steps to those in Part 1 of the proof of Theorem 5, we obtain:
EIF
[︁
μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
= I(W (Z)
i = w, Zi = z)
μ ̄W (w, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
×
×
(︁
Yi − μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁
+ μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁
−E
[︁
μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
,
(218)
EIF
[︁
μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
= I(W (Z)
i = w, Zi = z)
μ ̄W (w, Xi, P ̄(z)
i )μZ (z, Xi, P ̄(z)
i)
×
×
(︁
Di − μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁
+ μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁
−E
[︁
μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
.
(219)
The expressions for EIF(ψ1) and EIF(ψ2) follow by the difference rule from equations (218) and (219), respectively. For further estimation of the asymptotic covariance matrix of the double machine learning estimator, it is useful to separate population-level parameters:
ψ1i = EIF(ψ1) + ψ1, ψ2i = EIF(ψ2) + ψ2. (220)
By inserting these expressions into equation (217), we obtain:
EIF(LATE) = (ψ1i − ψ1)ψ2 − (ψ2i − ψ2)ψ1
ψ2
2
= ψ1iψ2 − ψ1ψ2 − ψ2iψ1 + ψ2ψ1
ψ2
2
=
= ψ1iψ2 − ψ2iψ1
ψ2
2
= ψ1i − ψ2iLATE
ψ2
.
(221)
Part 2. Case m = 1 for LATES.
The proof for this part is very similar to the previous one. Define z = z(1). Consider separately the numerator ψ*
1 and denominator ψ*
2 of the LATES:
LATES =
E
[︁
μ ̄Y
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄Y
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
E
[︁
μ ̄D
(︁
1, Xi, P ̄(z)
i ,z
)︁
− μ ̄D
(︁
0, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁ = ψ*
1 ψ*
2
. (222)
By the ratio rule of influence functions, we get:
EIF(LATES) = EIF(ψ*
1 )ψ*
2 − EIF(ψ*
2 )ψ*
1
(ψ*
2)2 . (223)
61

Consider w ∈ {0, 1}. By very similar steps to those in Part 3 of the proof of Theorem 5, we obtain:
EIF
[︁
μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
= I(Zi = z)
P(Zi = z)
(︂ I(W (Z)
i = w)
μ ̄W (w, Xi, P ̄(z)
i)
×
×
[︁
Yi − μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
+ μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁
−
−E
[︁
μ ̄Y
(︁
w, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
)︂
,
(224)
EIF
[︁
μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
= I(Zi = z)
P(Zi = z)
(︂ I(W (Z)
i = w)
μ ̄W (w, Xi, P ̄(z)
i)
×
×
[︁
Di − μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁]︁
+ μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁
−
−E
[︁
μ ̄D
(︁
w, Xi, P ̄(z)
i ,z
)︁
| Zi = z
]︁
)︂
.
(225)
The expressions for EIF(ψ*
1) and EIF(ψ*
2) follow by the difference rule from equations (224) and (225), respectively. Finally, similarly to Part 1 of the proof, we get:
EIF(LATES) = ψ*
1i − ψ*
2iLATES
ψ*
2
, (226)
where:
ψ*
1i = EIF(ψ*
1) + I(Zi = z)
P(Zi = z) ψ*
1, ψ*
2i = EIF(ψ*
2) + I(Zi = z)
P(Zi = z) ψ*
2. (227)
Part 3. Case m > 1 for LATE.
For convenience, write the expression of LATE in the following form:
LATE =
m
∑︀
t=1
P(Zi = z(t) | Z ̃i = 1)ψ1t
m
∑︀
t=1
P(Zi = z(t) | Z ̃i = 1)ψ2t
= ψ1
ψ2
, (228)
where:
ψ1t = μ ̄Y
(︁
1, Xi, P ̄(z(t))
i , z(t))︁
− μ ̄Y
(︁
0, Xi, P ̄(z(t))
i , z(t))︁
, (229)
ψ2t = μ ̄D
(︁
1, Xi, P ̄(z(t))
i , z(t))︁
− μ ̄D
(︁
0, Xi, P ̄(z(t))
i , z(t))︁
. (230)
By the same steps as in Part 1, we get:
EIF(LATE) = EIF(ψ1) − EIF(ψ2)LATE
ψ2
. (231)
For j ∈ {1, 2} by the same arguments to those in Part 2 of Theorem 5, we obtain:
EIF(ψj) =
m
∑︁
t=1
EIF
(︁
P(Zi = z(t) | Z ̃i = 1)ψjt
)︁
=
m
∑︁
t=1
P(Zi = z(t) | Z ̃i = 1)EIF(ψjt) +
Z ̃i
[︁
I(Zi = z(t)) − P(Zi = z(t) | Z ̃i = 1)
]︁
P(Z ̃i = 1) ψjt,
(232)
where the expressions for EIF(ψjt) may be obtained by the same steps as discussed in Part 1 of the proof. By plugging equation (231) into equation (232), we get the final result. The generalization for LATES is very similar so omitted for brevity. ■
62

Proof of Theorem 8 from Section 7. Efficient influence functions of ATE and ATES.
The proof follows by application of Lemma 5, Lemma 6, and (almost) the same steps as in the proof of Theorem 5. ■ Proof of Theorem 9 from Section 7. Efficient influence functions of ATET and ATETS.
The proof follows by application of Lemma 5, Lemma 6, and (almost) the same steps as in the proof of Theorem 6. ■ Proof of Theorem 10 from Section 7. Efficient influence functions of LATE and LATES.
The proof follows by application of Lemma 5, Lemma 6A, and (almost) the same steps as in the proof of Theorem 7. ■
References
Vossmeyer Angela. Sample selection and treatment effect estimation of lender of last resort policies. Journal of Business & Economic Statistics, 34(2):197–212, 2016. doi: https://doi. org/10.1080/07350015.2015.1024837.
Michela Bia, Martin Huber, and Luk ́asˇ Laff ́ers. Double machine learning for sample selection models. Journal of Business & Economic Statistics, 42(3):958–969, 2024. doi: 10.1080/ 07350015.2023.2271071.
Fran ̧cois Bourguignon, Martin Fournier, and Marc Gurgand. election bias corrections based on the multinomial logit model: Monte carlo comparison. Journal of Economic Surveys, 21(1): 174–205, 2007.
Victor Chernozhukov, Denis Chetverikov, Mert Demirer, Esther Duflo, Christian Hansen, Whitney Newey, and James Robins. Double/debiased machine learning for treatment and structural parameters. The Econometrics Journal, 21(1):C1–C68, 01 2018. doi: https://10.1111/ectj.12097.
Di Novi Cinzia. Sample selection correction in panel data models when selectivity is due to two sources. Economics Bulletin, 29(4):2967–2980, None 2009.
Mitali Das, Whitney Newey, and Francis Vella. Nonparametric estimation of sample selection models. The Review of Economic Studies, 70(1):33–58, 2003.
Giuseppe De Luca and Franco Peracchi. Estimating engel curves under unit and item nonresponse. Journal of Applied Econometrics, 27(7):1076–1099, 2012. doi: https://doi.org/10. 1002/jae.1232.
Sofiia Dolgikh and Bogdan Potanin. Returns to different levels of education in russia. Journal of Economic Studies, 51(8):1647–1663, 2024. doi: https://doi.org/10.1108/JES-09-2023-0501.
Sofiia Dolgikh and Bogdan Potanin. Gender differences in the returns to education and stem degree in mexico. Journal of Economic Studies, 02 2025. doi: https://10.1108/ JES-10-2024-0712.
Jeffrey A. Dubin and Daniel L. McFadden. An econometric analysis of residential electric appliance holdings and consumption. Econometrica, 52(2):345–362, 1984. doi: https://doi. org/10.2307/1911493.
63

Jerome H. Friedman, Trevor Hastie, and Rob Tibshirani. Regularization paths for generalized linear models via coordinate descent. Journal of Statistical Software, 33(1):1–22, 2010. doi: https://doi.org/10.18637/jss.v033.i01.
Markus Frolich. Nonparametric iv estimation of local average treatment effects with covariates. Journal of Econometrics, 139(1):35–75, July 2007.
Jeffrey Grogger and Eric Eide. Changes in college skills and the rise in the college wage premium. Journal of Human Resources, 30(2):280–310, 1995.
James Heckman. Sample selection bias as a specification error. Econometrica, 47(1):153–61, 1979. doi: https://doi.org/10.2307/1912352.
Christian Henning and Arne Henningsen. Modeling farm households’ price responses in the presence of transaction costs and heterogeneity in labor markets. American Journal of Agricultural Economics, 89(3):665–681, 2007. doi: https://doi.org/10.1111/j.1467-8276.2007.00980. x.
Rainer Hirk, Kurt Hornik, and Laura Vana. mvord: An r package for fitting multivariate ordinal regression models. Journal of Statistical Software, 93(4):1–41, 2020. doi: https: //doi.org/10.35566/jbds/v1n1/p2/10.18637/jss.v093.i04.
Guido W. Imbens and Whitney K. Newey. Identification and estimation of triangular simultaneous equations models without additivity. Econometrica, 77(5):1481–1512, September 2009.
Edward H. Kennedy. Semiparametric doubly robust targeted double machine learning: a review, 2023. URL https://arxiv.org/abs/2203.06469.
Hea-Jung Kim and Hyoung-Moon Kim. Elliptical regression models for multivariate sampleselection bias correction. Journal of the Korean Statistical Society, 45(3):422–438, 2016. doi: https://doi.org/10.1016/j.jkss.2016.01.003.
Elena Kossova and Bogdan Potanin. Heckman method and switching regression model multivariate generalization. Applied Econometrics, 50:114–143, 2018.
Elena Kossova and Bogdan Potanin. Estimation of gaussian multinomial endogenous switching model. Applied Econometrics, 67:121–143, 2022. doi: https://doi.org/10.22394/ 1993-7601-2022-67-121-143.
Elena Kossova, Liubov Kupriianova, and Bogdan Potanin. Parametric and semiparametric multivariate sample selection models estimators’ accuracy: Comparative analysis on simulated data. Applied Econometrics, 57:119–139, 2020a. doi: https://doi.org/10.22394/ 1993-7601-2020-57-119-139.
Elena Kossova, Bogdan Potanin, and Maria Sheluntcova. Estimating effect of marriage on male wages in russia. Journal of Economic Studies, 47(7):1649–1667, 2020b. doi: https: //doi.org/10.1108/JES-04-2019-0184.
Jonathan Levy. Tutorial: Deriving the efficient influence curve for large models, 2019. URL https://arxiv.org/abs/1903.01706.
Harrison H. Li and Art B. Owen. Double machine learning and design in batch adaptive experiments. Journal of Causal Inference, 12(1):20230068, 2024. doi: https://doi:10.1515/ jci-2023-0068.
64

Phillip Li. Estimation of multivariate sample selection models via a parameter-expanded monte carlo em algorithm, 2014.
Yulia V. Marchenko and Marc G. Genton. A heckman selection-t model. Journal of the American Statistical Association, 107(497):304–317, 2012.
Emmanuel O. Ogundimu and Jane L. Hutton. A unified approach to multilevel sample selection models. Communications in Statistics - Theory and Methods, 45(9):2592–2611, May 2016. doi: 10.1080/03610926.2014.887108.
Dale J. Poirier. Partial observability in bivariate probit models. Journal of Econometrics, 12 (2):209–217, 1980. doi: https://doi.org/10.1016/0304-4076(80)90007-X.
Alireza Rezaee, Mojtaba. Ganjali, and Ehsan. Bahrami Samani. Sample selection bias with multiple dependent selection rules: an application to survey data analysis with multilevel nonresponse. Swiss J Economics Statistics, 158(8), 2022. doi: https://doi.org/10.1186/ s41937-022-00089-1.
Ksenia Rozhkova, Sergey Roshchin, Sergey Solntsev, and Pavel Travkin. The differentiation of quality in higher education and graduates. Educational Studies Moscow, (1):161–190, 2023. doi: https://doi.org/10.17323/1814-9545-2023-1-161-190.
Harald Tauchmann. Consistency of heckman-type two-step estimators for the multivariate sample-selection model. Applied Economics, 42(30):3895–3902, None 2010. doi: https://doi. org/10.1080/00036840802360179.
Francis Vella. Estimating models with sample selection bias: A survey. Journal of Human Resources, 33(1):127–169, 1998. doi: https://doi.org/10.2307/146317.
65

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:24.861Z
- **Text Length:** 141452 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 65 of 65
