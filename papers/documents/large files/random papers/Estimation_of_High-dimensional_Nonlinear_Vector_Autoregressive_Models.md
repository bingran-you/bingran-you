# PDF Document: Han et al. - 2025 - Estimation of High-dimensional Nonlinear Vector Autoregressive Models.pdf

**File Path:** Han et al. - 2025 - Estimation of High-dimensional Nonlinear Vector Autoregressive Models.pdf

**Processed Date:** 2026-02-10T18:18:11.977Z

**File Size:** 728.79 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3141

**Title:** Estimation of High-dimensional Nonlinear Vector Autoregressive Models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Estimation of High-dimensional Nonlinear Vector
Autoregressive Models
Yuefeng Han, Likai Chen and Wei Biao Wu∗
University of Notre Dame, Washington University in St. Louis and The University of Chicago
Abstract
High-dimensional vector autoregressive (VAR) models have numerous applications in fields such as econometrics, biology, climatology, among others. While prior research has mainly focused on linear VAR models, these approaches can be restrictive in practice. To address this, we introduce a high-dimensional non-parametric sparse additive model, providing a more flexible framework. Our method employs basis expansions to construct high-dimensional nonlinear VAR models. We derive convergence rates and -
model selection consistency for least squared estimators, considering dependence measures of the processes, error moment conditions, sparsity, and basis expansions. Our theory significantly extends prior linear VAR models by incorporating both non-Gaussianity and non-linearity. As a key contribution, we derive sharp Bernstein-type inequalities for tail probabilities in both non-sub-Gaussian linear and nonlinear VAR processes, which match the classical Bernstein inequality for independent random va-
riables. Additionally, we present numerical experiments that support our theoretical findings and demonstrate the advantages of the nonlinear VAR model for a gene expression time series dataset.
Index Terms: Nonlinear vector autoregression, time series analysis, high-dimensional analysis, Bernstein inequality, non-parametric, sparsity, basis expansion, Lasso estimation, martingale
1 Introduction
The increasing variety of scientific applications has created a growing need for employing a large set of time series (variables) to model complex social and physical systems. This demand arises from various fields, including genomics (Sharon et al., 2013), neuroscience (M ̈oller et al., 2001, Pereda et al., 2005, Kato et al., 2006), social networks (Aı ̈t-Sahalia et al., 2015), economics (Barigozzi and Hallin, 2017), environmental studies (Lichstein et al., 2002), and communication engineering (B-
addour and Beaulieu, 2005). For example, economic policymakers rely on large-scale models of
∗Yuefeng Han is Assistant Professor, Department of Applied and Computational Mathematics and Statistics, University of Notre Dame, Notre Dame, IN 46556. Email: yuefeng.han@nd.edu. Likai Chen is Assistant Professor, Department of Statistics and Data Science, Washington University in St. Louis, St. Louis, MO 63130. E-mail: likai.chen@wustl.edu. Weibiao Wu is Professor, Department of Statistics, The University of Chicago, Chicago, IL 60637. E-mail: wbwu@uchicago.edu. Han was supported in part by Nati-
onal Science Foundation grant DMS-2412578. Chen was supported in part by National Science Foundation grant EF-2222403 and DMS-2311251. Wu was supported in part by National Science Foundation grants DMS-2311249 and DMS-2027723.
1
arXiv:2511.18641v1 [math.ST] 23 Nov 2025

economic indicators (Sims, 1980, Bernanke et al., 2005, Ban ́bura et al., 2010), as empirical evidence has shown that they improve forecasts and provide better estimates of how current economic shocks will propagate, which guides policy actions more effectively. Similarly, in genomics and neuroscience, the advent of high-throughput technologies has enabled researchers to collect measurements on hundreds of genes or brain regions (Shojaie and Michailidis, 2010, Seth et al., 2015), facilitating com-
prehensive modeling and deeper insights into biological mechanisms. In social sciences, many key variables are not directly observable but can be inferred through related time series variables, enabling a more nuanced understanding of policy decisions (Lin and Michailidis, 2020). Given the wide availability of high-dimensional time series data, understanding their underlying dynamic patterns is crucial for improving practical applications in these domains. A widely used and informative model for c-
apturing linear temporal dependencies between time series is the vector autoregression (VAR) model. Properties of VAR have been extensively studied in low-dimensional settings; see Lu ̈tkepohl (2005) for a comprehensive overview. Over the past decade, a growing body of literature has leveraged structured sparsity and regularized estimation frameworks to achieve consistent estimation of VAR parameters in high-dimensional settings. Basu and Michailidis (2015) investigated the theoretical properties -
of Lasso-penalized high-dimensional VAR models for Gaussian processes. Their result was extended to multi-block VAR models by Lin and Michailidis (2017) and to factor-augmented VAR models by Lin and Michailidis (2020). Guo et al. (2016) introduced a class of VAR models with banded coefficient matrices, which was further developed into spatio-temporal VAR models by Gao et al. (2019). Basu et al. (2019) explored highdimensional VAR models involving low-rank and group-sparse components in network str-
uctures. Hall et al. (2018) studied regularized high-dimensional autoregressive generalized linear models, focusing on Bernoulli and Poisson distributions. Additionally, Ghosh et al. (2019, 2021) developed Bayesian VAR models and analyzed their posterior and strong selection consistency. For further related work, see Zheng and Raskutti (2019), Pandit et al. (2020), Wang et al. (2022), Wang and Tsay (2023), Chen et al. (2023), among others. Although many mechanisms, such as regulatory processes in -
biology (cf. Sima et al. (2009) for a survey), involve nonlinear dynamics, research on high-dimensional time series models addressing such dynamics remains limited. Mazur et al. (2009) and A ̈ ij ̈o and L ̈ahdesm ̈aki (2009) employed Bayesian learning to manage the stochasticity of biological data. Lim et al. (2015) introduced a family of VAR models using operator-valued kernels to identify nonlinear dynamic systems. Zhou and Raskutti (2018) proposed a framework for non-parametric autoregressive m-
odels within generalized linear models by utilizing reproducing kernel Hilbert spaces, analyzing the convex penalized sparse and smooth estimator. Shen et al. (2019) investigated nonlinear structural VAR models with application to brain networks. Additional applications can be found in Pereda et al. (2005), Balcilar et al. (2016), Yu et al. (2021), among others. Among these works, only Zhou and Raskutti (2018) provided theoretical guarantees, although their concentration inequalities are not sharp-
. In this paper, we extend the framework of sparse linear VAR models to sparse non-parametric nonlinear VAR models, with rigorous theoretical guarantees. This paper has two primary objectives: (i) to develop sharp inequalities for tail probabilities for non-sub-Gaussian nonlinear VAR processes; (ii) to propose a new class of methods for high-dimensional non-parametric VAR models and to apply our inequalities to obtain theoretical properties of l1 regularized estimators. It is expected that our fra-
mework, inequalities and tools will be useful in other high-dimensional linear and nonlinear VAR problems.
2

In our theoretical framework, we shall consider the following nonlinear VAR models
Xt “ hp1qpXt ́1q ` hp2qpXt ́2q ` . . . ` hpdqpXt ́dq ` εt, (1)
where εt P Rp, t P Z, are i.i.d. random vectors, Xt “ pXp1q
t , . . . , Xppq
t qJ P Rp, hpjq “ phpjq
1 , . . . , hppjqqJ
and hpjq
k : Rp Ñ R, 1 ď j ď d, 1 ď k ď p, are real-valued functions. By stacking lagged vectors, we can let d “ 1 in (1) and consider the nonlinear VAR(1) model. Then (1) can be rewritten as
Xt “ hpXt ́1q ` εt. (2)
Based on model (2), we shall develop sharp Bernstein-type inequalities. Establishing exponentialtype tail probability inequalities for temporal dependent processes is a challenging problem. There has been some effort to derive concentration inequalities for non-i.i.d. processes. For example, generalizations of Bernstein’s inequality to α-mixing and φ-mixing random variables have been studied in Bosq (1993), Modha and Masry (1996), Samson (2000) and Merlev`ede et al. (2009, 2011), among others. Zha-
ng (2021) provided Bernstein-type inequality for dependent random variables under geometric moment contraction. Exponential-type inequalities were also derived for sums of Markov chains in Douc et al. (2008), Adamczak (2008), Leman ́czyk (2021). Unfortunately, all these inequalities involve extra non-constant factors to account for weak dependence, and are not as sharp as the original Bernstein’s inequality for independent random variables. Recently, Fan et al. (2021) and Jiang et al. (2018) estab-
lished sharp Hoeffding-type inequality and Bernsteintype inequality for stationary Markov dependent random variables. Chen and Wu (2018) derived exponential inequalities and Nagaev-type inequalities for one dimensional linear (or moving average) processes under both short- and long-range dependence. Due to the interactions between temporal and cross-sectional dependence, tail probabilities of high-dimensional time series is much more complicated than the one-dimensional ones. In this work, we esta-
blish Bernstein-type inequalities for nonlinear VAR processes. Our inequalities, up to some constants, are as sharp as the classical Bernstein inequality for i.i.d. random variables. To the best of our knowledge, we are among the first to develop such sharp Bernstein-type inequalities for time series. Notably, we do not use the commonly employed “blocking” technique for sequences of dependent random variables (Hall et al., 2018), which allows us to avoid logarithmic factors. Our technical approach-
 can be used to improve existing studies on high-dimensional VAR models, such as in Kock and Callot (2015), Jiang et al. (2023), Dahlhaus and Richter (2023), Wang and Tsay (2023). To study nonlinear dynamical systems from high-dimensional time series data, in this paper, we introduce sparse additive non-parametric VAR models. Our method combines ideas from sparse linear modelling, additive non-parametric regression and VAR models. Each nonlinear function hj, 1 ď j ď p, in model (2) can be expresse-
d as:
hjpxq “
p
ÿ
k“1
hj k pxk q,
where x “ px1, . . . , xpqJ P Rp and hjkp ̈q are functions of one dimensional variables. The underlying VAR model is similar to sparse linear regression, but we impose a sparsity constraint on the index set tpj, kq : hjkp ̈q ‰ 0u of functions hjk that are not identically zero. Then we estimate each nonlinear function hjk in terms of a truncated set of basis functions. Ravikumar et al. (2009) proposed sparse additive linear models using a basis expansion and LASSO type penalty under i.i.d.
3

data. Meier et al. (2009) considered a sparsity-smoothness penalty for high-dimensional generalized additive models. Koltchinskii and Yuan (2010a), Raskutti et al. (2012) and Yuan and Zhou (2016) studied a different framework, sparse additive kernel regression, for the cases where the component functions belong to a reproducing kernel Hilbert spaces (RKHS). They penalized the sum of the reproducing kernel Hilbert space norms of the component functions. Their sparse additive linear models are exte-
nded to autoregressive generalized linear models in Zhou and Raskutti (2018). Lim et al. (2015) introduced operator-valued kernel-based VAR models, and developed proximal gradient descent algorithms. However, their paper does not provide any theoretical guarantees. Recently, D ̈uker and Waterbury (2025) developed an RKHS-based framework for nonlinear VAR processes and derived non-asymptotic probabilistic bounds. In this work, our method has the nice feature that it decouples smoothness and sparsit-
y. This leads to a simple block coordinate descent algorithm (cf. Ravikumar et al. (2009)) that can be carried out with any non-parametric smoother and scales easily to high-dimensions. Besides, with our new probability inequalities as primary tools, we can analyze the properties of l1 regularized estimators under non-Gaussian errors in the context where p is much larger than n. Roughly speaking, p can be as large as enc for some constant 0 ă c ă 1 if εt has finite exponential moments, and the pow-
er constant c is related to the truncated number of basis expansion. We shall give a detailed description on how the dependence measures of the processes, the moment condition of the errors, the sparsity of functions and basis expansion affect the rate of convergence and the model selection consistency of the estimator. The rest of the paper is structured as follows. Section 2 presents Bernstein-type inequalities for nonlinear VAR processes in (2) under Lipschitz condition and different types of m-
oment conditions for the error processes. In Section 3, we first formulate an l1 regularized optimization problem for nonlinear VAR models on the population level that induces sparsity. Then we derive a sample version of the problem using basis expansion. Theoretical properties that analyze the effectiveness of the estimators in the high-dimensional setting are also presented. Simulation studies and real data analysis are carried out in Sections 4 and 5, respectively. Proofs of theorems and techni-
cal lemmas are contained in Section 6. We now introduce some notation. For a vector x “ px1, . . . , xpqJ, define }x}q “ p|x1|q ` . . . ` |xp|qq1{q, q ě 1, }x} “ }x}2, }x}8 “ max1ďjďp |xj|, and abspxq :“ p|x1|, . . . , |xp|qJ. For a matrix A “ paijq, write |A|8 “ maxi,j |aij|, the Frobenius norm }A}F “ př
ij a2
ijq1{2, the spectral norm }A}2 “ max}x}2ď1 }Ax}2 and the matrix infinity norm }A}8 “ maxi
ř
j |aij|. Let λminpAq (resp. λmaxpAq) be the minimum (resp. maximum) eigenvalue of A. For two sequences of real numbers tanu and tbnu, write an “ Opbnq (resp. an — bn) if there exists a constant C such that |an| ď C|bn| (resp. 1{C ď an{bn ď C) holds for all sufficiently large n, and write an “ opbnq if limnÑ8 an{bn “ 0. Let εt, t P Z, be i.i.d. random vectors and Fk “ p. . . , εk ́1, εkq. Define projection operator Pk, k P Z, by Pkp ̈q “ Ep ̈|Fkq  ́ Ep ̈|Fk ́1q. Let pε1kq be an i.i.d. copy of pεkq.-
 For Xt “ gp. . . , εt ́1, εtq,
where g is a measurable function, we define the coupled version Xt,tku “ gp. . . , εk ́1, ε1k, εk`1, . . . , εtq,
which has the same distribution as Xt with εk in the latter replaced by an i.i.d. copy ε1k.
2 Bernstein Inequalities for Nonlinear VAR Processes
Exponential inequalities play a fundamental role in high-dimensional inference. Differently from i.i.d. random variables, directly applying concentration inequalities for dependent random variables to high-dimensional time series problems may lead to suboptimal results in many cases, due to the
4

interrelationship between temporal and cross-sectional dependencies. Zhang and Wu (2017, 2021), Han et al. (2023) introduced new dependence measures to describe temporal and cross-sectional dependence of high-dimensional time series, then derived Fuk-Nagaev type inequalities for heavy tailed random vectors to study statistical properties of sample mean vector, spectral density matrix estimation and robust M -estimation, respectively. In this section, we shall present new and powerful inequalities-
 for tail probabilities of nonlinear vector autoregressive (VAR) processes. The processes can be non-Gaussian. In Theorem 1, we provide Bernstein-type inequalities for nonlinear VAR process under finite moment condition and exponential moment condition, respectively. In contrast, exponential inequalities provided in Basu and Michailidis (2015) are only applicable to Gaussian processes and linear VAR models with Gaussian innovation vectors (cf. Proposition 2.4 therein). To establish exponential ine-
qualities, we introduce the following assumptions on the function h and the errors εt in model (2). Recall that }  ̈ }8 is the matrix infinity norm.
Assumption 1. Consider model (2), let h “ ph1, . . . , hpqJ and hj : Rp Ñ R, 1 ď j ď p be real valued functions. Assume that componentwise Lipschitz condition holds for each hj. That is, for any x “ px1, . . . , xpqJ, y “ py1, . . . , ypqJ P Rp, 1 ď j ď p, there exist coefficients Hjk ě 0 such that
|hjpxq  ́ hjpyq| ď
p
ÿ
k“1
Hjk|xk  ́ yk|. (3)
Write H “ pHjkqpˆp and }H}8 “ max1ďjďp
řp
k“1 Hjk. Assume there exists an absolute constant 0 ă ρ ă 1 such that }H}8 ď ρ.
The above assumption requires componentwise Lipschitz condition for nonlinear VAR processes. This assumption can be easily extended to nonlinear VAR(d) processes. See also Chen and Tsay (1993), Diaconis and Freedman (1999), Jarner and Tweedie (2001), Shao and Wu (2007), Fan and Yao (2008) and Chen and Wu (2016) for nonlinear autoregressive processes. Intuitively, ρ quantifies the strength of dependence. For example, in one dimensional AR(1) model, Xt “ ρXt ́1 `εt. Larger ρ suggests stronger depend-
ence.
Remark 1 (Existence of stationary distribution). For the sake of completeness, in this remark, we shall apply the theory in Chen and Wu (2016) and show the existence of stationary distribution. Construct a collection of backward series of random vectors Xp ́nq,t, for t ě  ́n, as follows. For all t P Z, define Xptq,t “ 0 and the recursion,
Xp ́nq,t “ h`Xp ́nq,t ́1
 ̆ ` εt.
Let Xpjq
p ́nq,t denote the j-th component of Xp ́nq,t. Then Xp ́nq,t “ pXp1q
p ́nq,t, . . . , Xppq
p ́nq,tqJ. Under Assumption 1, we have
}Xp ́n`1q,t  ́ Xp ́nq,t}8 ď max
1ďjďp
p
ÿ
k“1
Hj k |X pkq
p ́n`1q,t ́1  ́ X pkq
p ́nq,t ́1|
ď ρ}Xp ́n`1q,t ́1  ́ Xp ́nq,t ́1}8
ď ρt`n ́1}Xp ́n`1q, ́n`1  ́ Xp ́nq, ́n`1}8. (4)
Taking the Lq norm and defining cp “ } max1ďjďp |hjp0q ` εpjq
1 |}q, we obtain
›
›}Xp ́n`1q,t  ́ Xp ́nq,t}8
›
›q ď ρt`n ́1cp.
5

Since ρ ă 1, for fixed t, the sequence Xpjq
p ́nq,t converges as n Ñ 8 for any 1 ď j ď p. Denote the
limit by Y pjq
t and set Yt “ pY p1q
t , . . . , Y ppq
t qJ. We now show that Yt is the stationary solution of model (2). For any κ ą 0, there exists an N0 P N, such that for n ą N0 we have }Yk  ́ Xp ́nq,k}8 ă κ. Then, using the Lipschitz condition on h,
max
1ďjďp |hj pYt ́1q ` εpjq
t  ́ Y pjq
t | ď max
1ďjďp |hj pYt ́1q  ́ hj pXp ́nq,t ́1q| ` max
1ďjďp |X pjq
p ́nq,t  ́ Y pjq
t | ď 2κ.
Since κ is arbitrary, this implies Yt “ hpYt ́1q ` εt almost surely, so Yt indeed satisfies the VAR recursion and is stationary.
■
Remark 2. Denote Hm as the result of multiplying the matrix H by itself m times. We can weaken Assumption 1 by requiring only that there exists an integer m ě 1 such that }Hm}8 ď ρ ă 1. In other words, we allow }H}8 ě 1 as long as repeated application of H eventually satisfies this condition. All of our subsequent results remain valid under this relaxed assumption. To see this, we consider the previous argument for the existence of a stationary distribution. Repeatedly applying the first inequalit-
y in (4), we have
}Xp ́n`1q,t  ́ Xp ́nq,t}8 ď max
1ďjďp
p
ÿ
k“1
pH m qj k |X pkq
p ́n`1q,t ́m  ́ X pkq
p ́nq,t ́m|
ď ρ}Xp ́n`1q,t ́m  ́ Xp ́nq,t ́m}8. (5)
Iterating (5), we conclude that }Xp ́n`1q,t  ́ Xp ́nq,t}8 À ρtpn`tq{mu, where txu is the largest integer less or equal to x. Then for fixed t, we have that Xp ́nq,t converges as n Ñ 8. Similar adaptations apply throughout the paper under this relaxed condition instead of Assumption 1. ■
Assumption 2. For i.i.d. random vectors εt “ pεp1q
t , . . . , εppq
t qJ P Rp, t P Z, assume one of the following holds:
(i) (finite moment) μq :“ max1ďjďppE|εpjq
t |qq1{q ă 8 for some q ě 2.
(ii) (exponential moment) μe :“ max1ďjďp E`exppc0|εpjq
t |q ̆, for some c0 ą 0.
Assumption 3. Let function g : Rp Ñ R, be Lipschitz continuous with |gpxq ́gpyq| ď řp
j“1 Gj |xj  ́
yj|, for any x “ px1, . . . , xpqJ, y “ py1, . . . , ypqJ P Rp, where Gj are Lipschitz coefficients. Denote
G “ pG1, . . . , GpqJ and τ :“ }G}1 “ řp
j“1 Gj .
The following theorem presents a Bernstein-type inequality for bounded Lipschitz continuous functions, under both the finite moment condition and the exponential moment condition of the error vectors εt, respectively.
Theorem 1. Consider the VAR process defined in (2), where the function h satisfies Assumption 1. Let g be any function satisfying Assumption 3 with τ “ }G}1. Then:
(i) If Assumption 2 piq holds and g is bounded with }g}8 “ supx |gpxq| ď M , then for all z ě 0,
P
 ̃ˇ ˇ ˇ ˇ ˇ
n
ÿ
t“1
pgpXtq  ́ EgpXtqq
ˇ ˇ ˇ ˇ ˇ
ěz
 ̧
ď 2exp
"
 ́ z2
c1τ 2n ` c2τ M z
*
, (6)
where c1 and c2 are positive constants depending only on q, ρ, and μq.
6

(ii) If Assumption 2 piiq holds, then for all z ě 0,
P
 ̃ˇ ˇ ˇ ˇ ˇ
n
ÿ
t“1
pgpXtq  ́ EgpXtqq
ˇ ˇ ˇ ˇ ˇ
ěz
 ̧
ď 2exp
"
 ́ z2
c3τ 2n ` c4τ z
*
, (7)
where c3 and c4 are positive constants depending only on ρ and μe.
Theorem 1(i) addresses the finite moment case for the error vectors εt (cf. Assumption 2 (i)). If the error vectors εt, t P Z, satisfy stronger moment condition than merely having a finite qth moment, we can expect a stronger inequality than (6). Indeed, when εt has subexponenial tail (Assumption 2 (ii)), we obtain an improved Bernstein-type inequality in (7). Different from Theorem 1 (i), in Theorem 1(ii), function g can be unbounded.
Remark 3. Based on the proof of Theorem 1(i), we can have the explicit form for coefficients c1 and c2 as c1 “ 32e2p ́ρ2logρq ́2μ22 and c2 “ 8ep ́ρ2logρq ́1. If function g is bounded by an absolute constant, then we can simplify above tail inequality (6) and obtain the following Hoeffding type inequality. ■
Corollary 1. Consider the VAR process defined in (2), where the function h satisfies Assumption 1. Let g be any function satisfying Assumption 3. Suppose Assumption 2 piq or 2 piiq holds. If g is bounded with }g}8 ď 1, then we have
P
 ́ˇ ˇ ˇ
n
ÿ
t“1
`gpXtq  ́ EgpXtq ̆
ˇ ˇ
ˇěz
 ̄
ď 2e ́c1z2{pτ 2nq, (8)
where c1 is a positive constant depending only on q, ρ and μq.
Remark 4. Note that up to a multiplicative constant, our Bernstein-type inequality (6) coincides with classical Bernstein’s inequality for i.i.d. random variables. Thus one can expect sharper convergence rates for estimators of nonlinear VAR processes (2). We remark that the majority of the previous inequalities for temporal dependent processes do not recover Bernstein’s inequality. For example, under geometric moment contraction with decay coefficient 0 ă ρ ă 1 (see Wu and Shao (2004)) and assume-
 |Xt| ď M , Zhang (2021) provided the following Bernstein-type inequality,
P
 ́
ˇ ˇ ˇ ˇ ˇ
n
ÿ
t“1
`Xt  ́ EXt
 ̆
ˇ ˇ ˇ ˇ ˇ
ěz
 ̄
ď exp
"
 ́ z2
4c1pc3n ` M 2q ` 2c2M plogpnqq2z
*
,
where c1, c2 are some constants only depending on ρ, and c3 ă 8 is a positive constant measuring the temporal dependence. Similarly, Merleve`de et al. (2009) obtained a Bernstein-type inequality for a class of exponentially decay α-mixing and bounded random variables,
P
 ́
ˇ ˇ ˇ ˇ ˇ
n
ÿ
t“1
`Xt  ́ EXt
 ̆
ˇ ˇ ˇ ˇ ˇ
ěz
 ̄
ď exp
"
 ́ c1z2
nM 2 ` M logpnqloglogpnqz
*
,
where c1 ą 0 and |Xt| ď M . Both involve an unpleasant logpnq-type multiplicative factor. Our sharp Bernstein-type inequality is of independent interest. We expect our sharp inequality can be useful for other high-dimensional linear and nonlinear time series problems. ■
7

Proof Sketch. The proof of Theorem 1 is quite involved. The key steps involve employing a martingale decomposition and deriving a sharp bound for the martingale differences. To be more specific, without loss of generality, assume }G}1 “ 1 with G defined in Assumption 3. Recall that Fk “ p. . . , εk ́1, εkq and the projection operator Pkp ̈q “ Ep ̈|Fkq  ́ Ep ̈|Fk ́1q, for k P Z. The summation can then be decomposed into a sum of martingale differences:
Snpgq :“
n
ÿ
t“1
`gpXtq  ́ EgpXtq ̆ “
ÿ
kďn
ξk, where ξk “ PkpSnpgqq.
For Xt “ Gp. . . , εt ́1, εtq, where G is some measurable function, following Wu (2005), we define the coupled version
Xt,tku “ Gp. . . , εk ́1, ε1k, εk`1, . . . , εtq.
For x “ px1, . . . , xpqJ, write abspxq “ p|x1|, . . . , |xp|qJ. Since the mapping h is componentwise Lipschitz continuous, by induction, we have abspXt  ́ Xt,tkuq ď Ht ́kabspεk  ́ ε1kq. Hence
ˇ
ˇPkpgpXtqq
ˇ
ˇ“
ˇ
ˇEpgpXtq  ́ gpXt,tkuq|Fkq
ˇ ˇ
ď E `GJabspXt  ́ Xt,tkuq
ˇ
ˇFk
 ̆
ďE
 ́
GJHt ́kabspεk  ́ ε1kq
ˇ
ˇFk
 ̄
. (9)
Since the function gp ̈q is bounded by M , it follows that |PkpgpXtqq| ď 2M . Therefore, combining this with (9), we obtain
|ξk| ď
n
ÿ
t“1
|PkpgpXtqq| ď
n
ÿ
t“k_1
min
!
vtJ ́kEpabspεk  ́ ε1kq
ˇ
ˇFkq, 2M
)
, with }vt}1 ď ρt. (10)
Since }vt}1 decays exponentially fast, for all sufficiently large t, one shall expect the first term vtJ ́kEpabspεk  ́ ε1kq
ˇ
ˇFkq to be small. Then by carefully leveraging between the two terms as detailed in Lemma 2, we obtain that
Epe|ξk|hq ă 8
for any h ď h ̊ some constant h ̊ ą 0. Since ξk’s are martingale differences,
Epeξkh|Fk ́1q “ 1 ` Epeξkh  ́ ξkh  ́ 1|Fk ́1q
ď1`E
” e|ξk|h  ́ |ξk|h  ́ 1 h2
ˇ
ˇ
ˇFk ́1
ı
h2, (11)
where the conditional expectation in the last line can be shown to be bounded for any h ď h ̊ with the bound denoted by c. Hence
Epeξkh|Fk ́1q ď 1 ` ch2. (12)
The above applies for  ́n ď k ď n. For k ă  ́n, we can show that those terms are negligible. The desired result then follows by Markov’s inequality and recursively using (12) for  ́n ď k ď n. It should be emphasized that our Bernstein-type concentration inequalities are sharp, and does not contain any annoying extra logarithmic terms. These inequalities are useful for handling nonGaussian VAR problems.
8

3 Sparse additive nonlinear VAR models
In this section, we study sparse additive nonlinear VAR models. We first introduce a populationlevel optimization problem and then derive a sample-based algorithm through basis expansion. Our theoretical analysis builds on the technical tools developed in previous section.
3.1 The model
Assume that we are provided with observed time series data X1, . . . , Xn P Rp, which are sampled from a dynamical system involving p variables. Our primary goal is to infer the direct influence that each variable j exerts on every other variable k (with k ‰ j, 1 ď k ď p). For instance, in the case of linear VAR models, the evolution of the system is often characterized by Xt “ GXt ́1 ` εt, where G is a p ˆ p coefficient matrix, and εt represents noise. In our study, we assume that a firstorder st-
ationary model provides a sufficient approximation of the temporal dependencies within the system. Accordingly, we recall the nonlinear VAR framework in (2),
Xt “ hpXt ́1q ` εt,
where the function h can capture potentially complex, nonlinear dynamics. In this section, we propose a new class of high-dimensional, sparse, additive non-parametric VAR models. Here, each component hj of the function h is assumed to decompose additively in terms of the individual components of the state vector x P Rp. Specifically, we posit that for each variable j
hjpxq “
p
ÿ
k“1
hjkpxkq, (13)
where each function hjk : R Ñ R captures the individual contribution of the k-th variable to the dynamics of the j-th variable. Let Π denote the joint distribution of the vector Xt, and let Πk denote the marginal distribution
of the k-th component Xpkq
t for each 1 ď k ď p. For practical purposes, we define the L2pΠkq-norm of the function hjk as
}hjk}Πk,2 “
d ż
h2
jkpxqdΠkpxq “
b
Eh2
j k pX pkq
t q.
This definition is particularly relevant because it allows us to accommodate functions hjk that might not be Lebesgue integrable over the entire real line; instead, the integrability is considered relative to the distribution Πk. The classical nonlinear ridge regression is defined as
1
n
n
ÿ
t“1
}Xt  ́ hpXt ́1q}2
2`λ
p
ÿ
j“1
p
ÿ
k“1
}hj k }2
Πk ,2 ,
where the norms measure the overall discrepancy and the smoothness penalty on each component. To encourage sparsity in high-dimensional settings, we replace the squared norm }hjk}2
Πk,2 with the
9

norm }hjk}Πk,2 itself. This substitution leads to a population-level penalized least squares estimator defined by the optimization problem
pˆhjk, 1 ď j, k ď pq :“ argmin
hj k PIk ,1ďj,kďp
#
1
n
n
ÿ
t“1
}Xt  ́ hpXt ́1q}2
2`λ
p
ÿ
j“1
p
ÿ
k“1
}hj k }Πk ,2
+
. (14)
Here, h is decomposed as in (13) into a sum of univariate functions, and Ik is an appropriate function class for the k-th component. In practice, the norm }hjk}Πk,2 can be estimated empirically
by pn ́1 řn
t“1 h2
j k pX pkq
t ́1qq1{2.
By decomposing hj into additive components, our framework enhances interpretability and computational efficiency in high-dimensional settings. The imposed sparsity helps to pinpoint which variables have a direct influence on the dynamics. This model is an extension of the sparse additive models developed for the i.i.d. case (Ravikumar et al., 2009) and is especially relevant when the system exhibits nonlinear structure that traditional linear models fail to capture, while still preserving a struct-
ure that is amenable to rigorous analysis and estimation. For each k P t1, . . . , pu, let Hk denote the Hilbert subspace L2pΠkq consisting of measurable
functions f p ̈q satisfying Ef pXpkq
t q “ 0 and the norm }f } “ pEf 2pXpkq
t qq1{2 ă 8. The inner product on Hk is defined as
xf, gy “ E`f pXpkq
t qgpXpkq
t q ̆.
We denote by H “ H1 ‘ H2 ‘  ̈  ̈  ̈ ‘ Hp the Hilbert space of functions of px1, . . . , xpq that admit an additive representation mpxq “ ř
k fkpxkq with each fk P Hk, k “ 1, . . . , p. We now impose the following assumption on our basis expansion.
Assumption 4 (Basis function). Assume that the functions hjkpxq in (13) have compact support for all 1 ď j, k ď p, that is, |hjkpxq| “ 0 for any |x| ą c0, for some constant c0 ą 0. Moreover assume hjk P Ik where
Ik “
#
hjkp ̈q P Hk : hjkp ̈q “
8
ÿ
l“1
bplq ̊
jk ψk,lp ̈q,
8
ÿ
l“1
pbplq ̊
jk q2l2β ď C2
+
,
where pψk,lp ̈q : l “ 1, 2, . . .q is a uniformly bounded orthonormal basis on r ́c0, c0s, that is |ψk,lpxq| ď B, for some 0 ă B, C ă 8 and β ě 1.
For example, we can choose the Fourier basis functions to satisfy Assumption 4. In standard nonparametric regression such as Ravikumar et al. (2009), covariates are often assumed to be bounded (i.e., to have compact support). Similarly, in our nonlinear VAR framework we assume hjkpxq in (13) have compact support for mathematical convenience and tractability; see also Raskutti et al. (2012), Zhou and Raskutti (2018). Many of our results can be extended to the case of unbounded hjkpxq via truncation-
 arguments with proper tail decay conditions. We omit such arguments for the sake of presentation simplicity. For example, the Fourier basis satisfies this assumption. This
assumption implies that the tail of the expansion satisfies ř8
l“L`1pbplq ̊
jl q2 ď C2L ́2β, which corresponds to the functional class condition of Ravikumar et al. (2009) and is a standard requirement in basis expansion methods. The parameter β captures the level of smoothness, effectively linking our function class to a function space. Although one could allow β to vary adaptively with k, we confine ourselves to a common smoothness level in this work.
10

Let L “ Ln be a truncation parameter, and let hpLq
jk be the approximation of hjk defined by
hpLq
jk p ̈q “
L
ÿ
l“1
bplq ̊
jk ψk,lp ̈q. (15)
In this formulation, hpLq
jk is interpreted as the projection of hjk onto the truncated set of basis functions tψk,1, . . . , ψk,Lu. Then, for 1 ď j, k ď p, the model can be written as
X pj q
t“
p
ÿ
k“1
hpLq
jk pXpkq
t ́1q ` rpjq
t ` εpjq
t , where rpjq
t“
p
ÿ
k“1
rhj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1qs (16)
is the reminder term and captures the bias introduced by truncating the basis expansion. We now define the oracle coefficients on the population level for the basis expansion and the design matrix. For any x “ px1, . . . , xpqJ P Rp, set vectors
bj ̊,k “ pbp1q ̊
j,k , . . . , bpLq ̊
j,k qJ,
bj ̊ “ pbj ̊,1J, . . . , bj ̊,pJqJ,
b ̊ “ pb1 ̊J, . . . , bp ̊JqJ,
ψkpxkq “ pψk,1pxkq, . . . , ψk,lpxkqqJ,
ψpxq “ pψ1Jpx1q, . . . , ψpJpxpqqJ.
(17)
Let rt “ prp1q
t , . . . , rppq
t qJ. With these definitions, the model can be rewritten in a compact form as
Xt :“ ΨpXt ́1qJb ̊ ` rt ` εt, (18)
where
ΨpXt ́1q “
 ̈
 ̊  ̊  ̊  ̊  ̊  ̋
ψpXt ́1q 0 0  ̈  ̈  ̈ 0 0 ψpXt ́1q 0  ̈  ̈  ̈ 0 0 0 ψpXt ́1q  ̈  ̈  ̈ 0
... ... ... . . . ...
0 0 0  ̈  ̈  ̈ ψpXt ́1q
 ̨
‹ ‹ ‹ ‹ ‹ ‚
P Rpˆp2L.
Consequently, the solution to our optimization problem (14) can be approximately estimated by solving
bˆ :“ argmin
b
$
’ &
’ %
1
n
n
ÿ
t“1
}Xt  ́ ΨpXt ́1qJb}2
2`λ
p
ÿ
j“1
p
ÿ
k“1
g f f e
1
n
n
ÿ
t“1
 ̃L ÿ
l“1
ψk,l pX pkq
t ́1qbplq
j,k
 ̧2
,
/ .
/ 
. (19)
This formulation can be viewed as a functional version of the group lasso, and the standard convexity arguments guarantee the existence of a minimizer. Compared with the approach in Lim et al. (2015), which employs operator-valued reproducing kernels for VAR models, our formulation offers a key advantage: it decouples the smoothness and sparsity components. This separation allows us to employ a block coordinate descent algorithm (cf. Ravikumar et al. (2009)) to efficiently construct the estimator.-
 In the following section, we leverage the technical tools developed in Section 2 to establish the theoretical properties of our l1-regularized estimator, under the assumption that the particular smoother in (19) is used.
11

3.2 Asymptotic properties
To facilitate the theoretical analysis, we impose the following assumptions on the functions hjk (1 ď j, k ď p) and the basis expansions. For a function f : Rd Ñ R, denote }f }2 :“ pş
Rd f 2pxqdxq1{2.
Assumption 5. There exist constants φU , φL ą 0, so that
λmin
!
EψpXt ́1qψpXt ́1qJ
)
ě φL, (20)
and
max
1ďkďp λmax
!
Eψk pX pkq
t ́1 qψk pX pkq
t ́1qJ
)
ď φU . (21)
Condition (20) in Assumption 5 is similar to the smallest population eigenvalue conditions commonly used in high-dimensional statistics (Raskutti et al., 2011, van de Geer et al., 2014). In addition, it parallels the population minimum eigenvalue condition in Assumption 4 of Chen and Christensen (2015) and Assumption S.3 of Belloni et al. (2019) for sieve basis expansion functions.
If the marginal density of Xpkq
t satisfies 0 ă fmin ď fkpxq ď fmax ă 8 for 1 ď k ď p and almost all x P r ́c0, c0s, then
EuJ ψk pX pkq
t ́1 qψk pX pkq
t ́1qJu “
ż c0
 ́c0
puJψkpxqq2fkpxq dx ď fmax }u}2
2,
EuJ ψk pX pkq
t ́1 qψk pX pkq
t ́1qJu “
ż c0
 ́c0
puJψkpxqq2fkpxq dx ě fmin }u}2
2.
This verifies condition (21) in Assumption 5. In the following Proposition 1, we use concentration inequalities to establish the sample version of Assumption 5.
Proposition 1. Suppose Assumptions 1 and 2(ii) hold. Assume supx |ψk,lpxq| ď B for any 1 ď k ď p, 1 ď l ď L.
(i). Assume that (20) holds and that for some constant c1 ą 0 does not rely on p, L, such that for all u P RpL,
EpuJψpXtqψpXtqJuq2 ď c1
`uJEpψpXtqψpXtqJqu ̆2. (22)
Then, with probability at least 1  ́ p ́c2  ́ pe ́c3n{logpnq, for all u P RpL with }u}2 “ 1,
1
n
n
ÿ
t“1
uJψpXtqψpXtqJu ě φL
2  ́1
n  ́ c4
logpnqlogppLq  ̈ }u}21
n , (23)
where c2, c3, c4 ą 0 are constants independent of n, p, L. (ii). Assume that (21) holds. Then, with probability at least 1  ́ p ́c5  ́ e ́c6n{logpnq, for all u P RL with }u}2 “ 1,
max
1ďkďp
1
n
n
ÿ
t“1
uJ ψk pX pkq
t ́1 qψk pX pkq
t ́1qJu ď φU ` c7L
c
logpnqplogp ` logLq
n , (24)
where c5, c6, c7 ą 0 are constants independent of n, p, L.
12

Remark 5. Condition (22) is the L2-L4 norm equivalence condition for ψpXtq; see Mendelson and
Zhivotovskiy (2020). Let ξ “ wJψpXtq. Then it becomes Epξ4q ď c1
`Epξ2q ̆2, implying that the kurtosis of ξ is bounded. The L2-L4 norm equivalence plays an important role in random matrix theory and it holds in various settings, such as sub-Gaussian random vectors. See Mendelson and Zhivotovskiy (2020) for more details and more examples. In addition, to ensure (23), following Oliveira (2016), condition (22) can be relaxed by letting u be sparse vectors satisfying }u}0 ď n. ■
Assumption 6. Let S :“ tpj, kq : hjkp ̈q ı 0, 1 ď j, k ď pu and Sj :“ tk : hjkp ̈q ı 0, 1 ď k ď pu, 1 ď j ď p. Assume that nonzero indices
s0 :“ max
1ďjďp
p
ÿ
k“1
1thjkı0u “ max
1ďjďp CardpSjq “ oppq and s :“
p
ÿ
j“1
p
ÿ
k“1
1thjkı0u “ CardpSq “ opp2q.
Assumption 6 imposes a sparsity condition on the nonlinear functions. Structural sparsity condition is often used in high-dimensional setting, for example, Cai and Liu (2011) in covariance matrix estimation. To achieve convergence rates without an additional factor of p, as is typically desired in high-dimensional settings, global boundedness of the quantities in Assumption 6 is usually required, as in Koltchinskii and Yuan (2010b). However, Raskutti et al. (2012) finds an elaborate way to circumv-
ent this requirement when studying sparse additive models with RKHS components. The following Proposition 2 establishes an upper bound on the remainder term }rt}8 as a function of the smoothness level β, the number of basis functions L, and the sparsity level s0.
Moreover, the quantity 1
n
řn
t“1 rhj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1qs2 serves as a measure of the L2 bias between hjk and its orthogonal projection onto the finite-dimensional subspace spanned by the chosen basis functions.
Proposition 2. Under Assumptions 4 and 6, we have
}rt}8 “ max
1ďjďp
ˇ ˇ ˇ ˇ ˇ
p
ÿ
k“1
rhj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1qs
ˇ ˇ ˇ ˇ ˇ
ď BCp2β  ́ 1q ́1s0L1{2 ́β,
max
1ďj,kďp
1
n
n
ÿ
t“1
”
hj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1q
ı2
ď B2C2p2β  ́ 1q ́2L1 ́2β.
Formally, we have the following asymptotic properties for the l1 regularized estimators. Theorem 2 shows how the rate of convergence of bˆ  ́ b ̊ and the errors of the estimated functions ˆhjk depend on the sparsity of functions, basis expansions, the dependence strength of the processes and the moment condition.
Theorem 2. Suppose Assumptions 1, 2(ii), 4, 5 and 6 hold. Let ˆb be the corresponding LASSO solution given in the optimization problem (19). Consider the estimator
ˆhjkpxq “
L
ÿ
l“1
ψk,lpxqbˆplq
j,k, 1 ď j, k ď p. (25)
Suppose that condition (22) holds. Assume that
λ ě c2
 ̃c
LlogppLq
n ` s0L1 ́β
 ̧
, (26)
13

for some c2 ą 0. Also suppose that
n ě c3s0L  ̈ logpnqlogppLq ` c3L2  ̈ logpnqlogppLq
for some sufficiently large constant c3. We have, with probability approaching one (as n, p Ñ 8),
}bˆ  ́ b ̊}2 ď c4
?sλ, (27)
p
ÿ
j“1
p
ÿ
k“1
}ˆhjk  ́ hjk}2
2 ď c5sλ2 ` c5sL ́2β, (28)
1
n
n
ÿ
t“1
p
ÿ
j,k“1
pˆhj k pX pkq
t ́1q  ́ hjkpXpkq
t ́1qq2 ď c6sλ2 ` c6sL1 ́2β, (29)
where c4, c5, c6 ą 0 are constants depending on ρ and μe.
Observe that since s ď s0p, the bounds in (27), (28) and (29) imply that
max
1ďjďp }ˆbj  ́ bj ̊}2 ď c4
?s0λ,
max
1ďjďp
p
ÿ
k“1
}ˆhjk  ́ hjk}2
2 ď c5s0λ2 ` c5s0L ́2β,
1
n
n
ÿ
t“1
p
ÿ
k“1
pˆhj k pX pkq
t ́1q  ́ hjkpXpkq
t ́1qq2 ď c6s0λ2 ` c6s0L1 ́2β,
where b ̊ and bj ̊ are defined in (17) and (18). The quantity ρ measures the dependence strength of the processes, and the constant μe encodes the moment condition. Theorem 2 shows that, provided Assumptions 1 and 2(ii) hold with ρ ď ρ0 ă 1 and ρ0 is a constant, neither the dependence strength nor the moment constant μe affects these convergence rates. The second terms in (28) and (29) quantify the bias due to truncating the basis expansion. Moreover, Theorem 2 implies that if the noise εt has fin-
ite exponential moments, then we may allow the dimension p to grow as fast as enc for some constant 0 ă c ă 1; the exponent c depends on the chosen truncation level L of basis expansion. It is instructive to compare the two terms in the tuning requirement λ from (26). In the case
with relative low dimension logppq À s20nL1 ́2β and low basis number L À s2{p2β ́1q
0 pn{lognq1{p2β ́1q,
the basis-expansion bias term s0L1 ́β dominates. On the other hand, if the dimension p is large
such that logppq Á s20nL1 ́2β or basis number L is large with L Á s2{p2β ́1q
0 pn{lognq1{p2β ́1q, the
stochastic term pn ́1LlogppLqq1{2 becomes the leading factor.
Remark 6. The convergence rates of the penalized estimators in (28) and (29) contain two sources of bias: (a) the first from the penalty λ, and (b) the second from the truncation parameter L (which depends on the smoothness of the function space, β). ■
Remark 7 (Use of Bernstein-type Inequalities). Bernstein-type inequalities play a crucial role in the theoretical analysis of high-dimensional methods with regularization. Define the loss function
F pbq “ 1
n
n
ÿ
t“1
}Xt  ́ ΨpXt ́1qJb}2
2`λ
p
ÿ
j,k“1
g f f e
1
n
n
ÿ
t“1
pψk pX pkq
t ́1 qJ bj,k q2 ,
14

and define
Σk “ 1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ and Jn “ 1
n
n
ÿ
t“1
ΨpXt ́1qΨpXt ́1qJ.
Following the standard proof technique for regularized estimators (Negahban et al., 2012), we compare F pbˆq to F pb ̊q, where ˆb minimizes F pbq, to obtain
0 ě F pbˆq  ́ F pb ̊q “  ́ 2∇nJpbˆ  ́ b ̊q ` pbˆ  ́ b ̊qJJnpbˆ  ́ b ̊q ` λ
p
ÿ
j,k“1
`}Σ1{2
k bˆj,k}2  ́ }Σ1{2
k bj ̊,k}2
 ̆,
where ∇n is the gradient of the least squares loss, defined in (56) below. In our analysis, Theorem 1 is not applied verbatim in the proof of Theorem 2, but its underlying arguments and closely related concentration inequalities are used. First, we establish a high probability bound on |∇n|2,8, where |  ̈ |2,α is defined in (52) below. In particular, Lemma 6 requires an exponential-type tail
probability bound for 1
n
řn
t“1 gpXt ́1qεpjq
t analogous to the bound in Theorem 1. Next, we need a
high probability bound for the quadratic term pbˆ ́b ̊qJJnpˆb ́b ̊q. Obtaining this bound also relies on Bernstein-type inequalities, as generalized in Lemma 5. However, because of temporal dependence, the quantities in Lemmas 5 and 6 involve quadratic forms or noise terms rather than simple Lipschitz functions g of Xt as in Assumption 3, so Theorem 1 cannot be applied directly. We therefore adapt its technical arguments to establish a corresponding exponential-type tail probability bound and then-
 use those bounds to prove Theorem 2.
■
Remark 8. Our framework in Theorem 2 is quite general: it accommodates a broad class of nonlinear VAR processes whose innovations need not be sub-Gaussian. By contrast, Han et al. (2015) and Basu and Michailidis (2015) focus on linear VAR models with i.i.d. Gaussian errors, estimating the transition matrix. Like those linear VAR analyses, we also allow the ambient dimension p to vastly exceed the sample size n. A crucial distinction arises in the tuning parameter condition (26). The second term on-
 the right, originating from the bias in truncating the basis expansion, enters the gradient of the loss and must be retained when verifying restricted strong convexity (Negahban et al., 2012). Consequently, the truncation level L influences both the choice of λ and the estimator’s convergence rate. In the fully nonlinear setting, one typically requires L Ñ 8, so the first term aLlogppLq{n in λ’s bound exceeds the familiar alogppq{n rate for linear VARs (Basu and Michailidis, 2015). This inflation-
 can be viewed as the statistical “cost of nonlinearity”. However, in special cases where each hjk admits an exact (or arbitrarily precise) finite dimensional basis representation, the bias term s0L1 ́β in (26) vanishes and the first term collapses to alogppq{n. Under those circumstances, our nonlinear estimator attains the same tuning and convergence rates as its linear counterpart.
■
Next, we turn to model-selection consistency. In place of Assumptions 5, we present an alternative condition that directly targets the support of each component. To simplify the notation, let
ΨSj pXtq “ pψkpXpkq
t qJ, k P Sjq be the truncated feature vector in RL ̈CardpSjq, where ψk is defined
15

in (17). We then assemble these vectors into the block-diagonal matrix
ΨSpXtq “
 ̈
 ̊  ̊  ̊  ̊  ̊  ̋
ΨS1 pXtqJ 0 0  ̈  ̈  ̈ 0 0 ΨS2 pXtqJ 0  ̈  ̈  ̈ 0 0 0 ΨS3 pXtqJ  ̈  ̈  ̈ 0
... ... ... . . . ...
0 0 0  ̈  ̈  ̈ ΨSp pXtqJ
 ̨
‹ ‹ ‹ ‹ ‹ ‚
.
Assumption 7. There are some constants φmax, φmin ą 0, 0 ă δ ď 1, so that
min
1ďjďp λmin
!
EΨSj pXt ́1qΨSj pXt ́1qJ
)
ě φmin ą 0, (30)
max
1ďjďp λmax
!
EΨSj pXt ́1qΨSj pXt ́1qJ
)
ď φmax ă 8, (31)
and
max
1ďjďp
› › ›
 ́
EΨSc
j pXt ́1qΨSj pXt ́1qJ
 ̄
`EΨSj pXl ́1qΨSj pXl ́1qJ ̆ ́1›
›
›2,8
ď
d
φmin
φmax
 ̈ 1 ́δ
?s0
, (32)
where the induced matrix p2, 8q-norm is defined as }A}2,8 “ max1ďjďm1
b
řm2
k“1 A2
jk for A P
Rm1ˆm2 .
This assumption corresponds to the condition of Ravikumar et al. (2009, 2010). Similar to Assumption 5, (30) and (31) are also standard, and are commonly imposed for high-dimensional regression analysis. Besides, (32) relates to the incoherence condition, see e.g. Wainwright (2009), Ravikumar et al. (2010). In the following proposition, we establish a sample version of Assumption 7.
Proposition 3. Suppose Assumptions 1, 2(ii), 6 and 7 hold. Assume supx |ψk,lpxq| ď B for any 1 ď k ď p, 1 ď l ď L. Assume that (37) holds and that for some constant c1 ą 0 does not rely on p, s0, L, such that for all u P RCardpSjqL,
EpuJΨSj pXtqΨSj pXtqJuq2 ď c1
`uJEpΨSj pXtqΨSj pXtqJqu ̆2. (33)
Then, with probability approaching one (as n, p Ñ 8), we have
λmin
!1
n
n
ÿ
t“1
ΨS pXt ́1qΨS pXt ́1qJ
)
ě p1 ` op1qqφmin ą 0, (34)
λmax
!1
n
n
ÿ
t“1
ΨS pXt ́1qΨS pXt ́1qJ
)
ď p1 ` op1qqφmax ă 8, (35)
and
max
1ďjďp max
kPSc
j
› › › › › ›
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qΨSj pXt ́1qJ
 ̧ ̃
1
n
n
ÿ
l“1
ΨSj pXl ́1qΨSj pXl ́1qJ
 ̧ ́1›
› › › › ›2
ď p1 ` op1qq
d
φmin
φmax
 ̈ 1 ́δ
?s0
. (36)
16

In Theorem 3, we show that, under certain conditions, our method recovers the sparsity pattern asymptotically. Recall S “ tpj, kq : hjkp ̈q ı 0, 1 ď j, k ď pu. Then S “ tpj, kq : bj ̊,k ‰ 0, 1 ď j, k ď
pu. Let Sˆn :“ tpj, kq : bˆj,k ‰ 0, 1 ď j, k ď pu.
Theorem 3. Suppose Assumptions 1, 2(ii), 4, 6 and 7 hold. Let ˆb be the corresponding LASSO solution given in the optimization problem (19). Let β ą 3{2. Suppose that condition (33) holds. Assume that
s0L2  ̈ logppLq
n ` s0L1 ́2β{3 Ñ 0, (37)
and
λ?s0L ` λ ́1
c
Llogpnq
n ` λ ́1s0L1 ́β Ñ 0. (38)
Then the solution bˆ to problem (19) is unique and satisfies Sˆn “ S, with probability approaching one (as n, p Ñ 8).
In a p-dimensional vector time series, the pattern of direct influences among variables can be represented by a binary adjacency matrix A “ pajkq P t0, 1upˆp, where
ajk “
#
1, if variable k directly influences variable j,
0, otherwise.
In a linear VAR model Xt “ G Xt ́1 ` εt, this network structure is typically inferred from the nonzero entries of the transition matrix G, which is often assumed to be sparse (Hall et al., 2018). A theory-free principle was advocated in Sims (1980) for inferring economic relations between variables of linear VARs. In our nonlinear VAR framework, each component function hjk quantifies the influence of k on
j. Moreover, the group lasso formulation in (19) yields a sparse estimate ˆb, so that many blocks bˆj,k are exactly zero. We therefore define the estimated adjacency matrix Aˆ “ paˆjkq by
ˆajk “
#
1, if ˆbj,k ‰ 0,
0, if ˆbj,k “ 0.
Since Aˆ need not be symmetric, it encodes a directed graph. Our Theorem 3 then guarantees model selection consistency for Aˆ, ensuring that the true influence network is recovered with high probability. We demonstrate the proposed network estimation method on real data in Section 5.
4 Simulation Studies
In this section, we shall evaluate the numerical performance of the proposed estimation procedures of nonlinear VAR models. We design three different patterns of the binary transition matrix (network matrix, see Section 3.1) A: random, band, cluster. Typical realizations of these patterns are illustrated in Figure 1. The pattern “cluster” has block diagonal structure, where each block is of dimension 10 ˆ 10 and
17

satisfies the pattern “random”. In each dimension j, 1 ď j ď p, we randomly assign 5 nonzero functions, according to the pattern of the transition matrix. The relevant nonzero component functions are given by
f1pxq “ 0.2x,
f2pxq “  ́0.15 sinp1.5xq,
f3pxq “  ́0.5Φpx, 0.5, 1q,
f4pxq “ 0.2xe ́0.5x2 ,
f5pxq “ 0.15logp|x| ` 2q,
where Φp ̈, 0.5, 1q is the Gaussian probability distribution function with mean 0.5 and standard deviation 1. In other words, for each j with 1 ď j ď p, we randomly select 5 functions hjk (1 ď k ď p) to be the above nonzero functions. The rest p  ́ 5 functions of hjk (1 ď k ď p) are all zeros. Elementary calculation shows that this nonlinear VAR process is stable and satisfies Assumption 1. In order to ensure reasonable signal to noise ratio, the error processes εt are generated from 0.2N p0, 1q. -
In all the conducted experiments, we assess the model selection performance of our procedure using the area under the receiver operating characteristic curve (AUROC) and the area under the Precison-Recall curve (AUPR) ignoring the sign (positive negative influence), where the ROC curve is created by plotting the true positive rate (TPR) against the false positive rate (FPR) and the precision-recall curve is a plot of the precision against the recall. Define TPR, FPR, precision and recall as follow-
s
TPR “ recall “ TP
TP ` FN , FPR “ FP
TN ` FP , Precision “ TP
TP ` FP .
Here TP and TN stand for true positives and true negatives, respectively, and FP and FN stand for false positives/negatives. We choose a set of data dimensions p “ 20, 50, 100 while the sample size is n “ 50, 100, 200, 500, respectively. The empirical values reported in Tables 1 are averages over 1000 replications. It can be seen from Table 1 that the proposed estimation procedure of nonlinear VAR model performs fairly well as reflected in both AUROC and AUPR. In particular, when the sample size i-
s moderate (n ě 100), our method provides pretty good AUROC in all cases. As expected, when the sample size n increases, our method performs better. And both AUROC and AUPR decreases as the dimension p increase. Besides, our proposed method makes no significant differences in terms of 3 patterns of transition matrix.
5 Real Data Analysis
We now apply our nonlinear VAR model to the analysis of a real biological gene regulatory network time series expression data. The network is an E. coli SOS DNA repair system, which has been well studied in biology, see e.g, Ronen et al. (2002). The main function of the SOS signaling pathway is to regulate cellular immunity and repair DNA damage. We consider an eight gene network, part of the SOS DNA repair network in the bacteria E. coli. The time series gene expression data set of the network wa-
s collected by Ronen et al. (2002). The data are kinetics of 8 genes, that is,
18

(a) random (b) band (c) cluster
Figure 1: Three different network matrix patterns used in the simulation studies. Here gray points represent the zero entries and black points represent nonzero entries.
Table 1: Model selection performance of the proposed nonlinear VAR method with three different patterns of the transition matrix, “random”, “band”, “cluster”, based on 1000 replications. p AUROC AUPR n 50 100 200 500 50 100 200 500 Pattern “random” 20 0.633 0.744 0.851 0.924 0.443 0.651 0.856 0.937 50 0.611 0.720 0.842 0.920 0.230 0.458 0.753 0.904 100 0.591 0.696 0.830 0.918 0.132 0.320 0.666 0.883 Pattern “band” 20 0.647 0.753 0.858 0.928 0.469 0.681 0.864 0.938 50 0.610 0.720 0.841 0.920 0.234 -
0.464 0.758 0.905 100 0.592 0.698 0.830 0.918 0.143 0.339 0.672 0.881 Pattern “cluster” 20 0.642 0.746 0.855 0.922 0.464 0.667 0.861 0.933 50 0.609 0.718 0.839 0.920 0.231 0.454 0.744 0.905 100 0.591 0.696 0.827 0.918 0.138 0.328 0.661 0.883
19

lexA, recA, ruvA, polB, umuDC, uvrA, uvrD, uvrY, where lexA and recA are the key genes in the pathway. The 8 genes were measured at 50 instants which are evenly spaced by 6 min intervals. We compare the performance of our method with the Lasso regularized linear VAR method (Basu and Michailidis (2015)). The tuning parameter λ in both methods and the number of basis function L are chosen by time series cross-validation procedure (see Han et al. (2015)). Figure 2 represents the bacterial SOS DNA re-
pair system. Figure 3 shows the real SOS DNA repair network, which contains 9 edges. Figures 4 and 5 show the inferred gene regulatory networks using our nonlinear VAR model and the l1 regularized linear VAR model, respectively. In Figure 4, one can see that our method finds 6 out of the 9 edges in the target network and identifies lexA as the hub gene for this network. Our method identifies most interactions except lexAÑruvA, lexAÑuvrY and recAÑlexA. In comparison, in the Figure 5, the l1 regular-
ized linear VAR model recognizes only 4 out of the 9 true edges, and predicts a wrong edge. Furthermore, our proposed method gives the area under ROC curve 0.8116 and the area under Precison-Recall curve 0.6836. While, the l1 regularized linear VAR model gives AUROC 0.7222 and AUPR 0.6036. In summary, our proposed method has a better performance than the regularized linear VAR model on the SOS DNA repair network, although none of these two methods can faithfully recover all of the edges. This phen-
omenon also confirms that there exists nonlinear dynamics in the gene regulatory networks.
Figure 2: The bacterial SOS DNA repair system
6 Proofs
Write random variable ξ P Lm, m ě 1, if the m-norm }ξ}m :“ pE|ξ|mq1{m ă 8. Denote }ξ} :“ }ξ}2. Let Fk “ p. . . , εk ́1, εkq, F n
k “ tεk, . . . , εnu, and E0pXq “ X  ́ EX. Define projection operator
Pkp ̈q “ Ep ̈|Fkq  ́ Ep ̈|Fk ́1q, k P Z. Let pε1kqkPZ be an i.i.d. copy of pεkqkPZ, so that εi, ε1j, i, j P Z are i.i.d. For any Xt “ Gp. . . , εt ́1, εtq, where G is a measurable function, we define the coupled version Xt,tku “ Gp. . . , εk ́1, ε1k, εk`1, . . . , εtq. If k ą i, then Xt,tku “ Xt.
20

lexA
polB
recA
ruvA
umuDC
uvrA
uvrD
uvrY
Figure 3: The target SOS DNA repair network
lexA
polB
recA
ruvA
umuDC
uvrA
uvrD
uvrY
Figure 4: Reconstruction of SOS DNA repair network by nonlinear VAR model
21

lexA
polB
recA
ruvA
umuDC
uvrA
uvrD
uvrY
Figure 5: Reconstruction of SOS DNA repair network by linear VAR model
6.1 Proofs of Theorems in Section 2
Lemma 1 (Burkholder (1988), Rio (2009)). Let q ą 1, q1 “ mintq, 2u. Let DT “ řT
t“1 ξt, where
ξt P Lq are martingale differences. Then
}DT }q1
q ď Kq1
q
T
ÿ
t“1
}ξt}q1
q , where Kq “ max ␣pq  ́ 1q ́1, aq  ́ 1(.
Lemma 2. Let ε P Rp be a random vector with non-negative entries, satisfying Assumption 2(i) with μq ă 8 for some q ě 2. For non-negative vectors vt P Rp, i ě 0, assume }vt}1 ď ρt where ρ ă 1. Denote
X“
8
ÿ
t“0
min ␣vtJε, M (.
Take c0 “  ́ρ2logρ{p2eq. Then for any c ď c0{M , EpecX q exists and
Epec0X{M q  ́ Epc0X{M q  ́ 1 ď μ2
2M  ́2 ă 8.
Proof. Note that we have the decomposition
X “M
8
ÿ
t“0
1tvtJεěM u `
8
ÿ
t“0
vtJε1tvtJεăMu “: I1 ` I2.
22

For I1 part, we have for any m ě 1,
E|I1|m ď M m
 ̃8 ÿ
t“0
›
›1tvtJεěM u
› ›m
 ̧m
“ Mm ́ 8
ÿ
t“0
PpvtJε ě M q1{m ̄m
. (39)
By Markov’s inequality,
PpvtJε ě M q ď }vtJε}2
2{M 2 ď ρ2iμ2
2{M 2.
Applying above into (39), we further have
E|I1|m ď M m ́
μ2{m
2 M  ́2{m
8
ÿ
t“0
ρ2i{m ̄m
ď μ2
2p1  ́ ρ2{mq ́mM m ́2.
Since for any m ě 1, we have
1  ́ ρ2{m ě p1  ́ ρ2q{m. (40)
We further obtain
E|I1|m ď μ2
2pp1  ́ ρ2q{mq ́mM m ́2.
Choose c1,M “  ́ρ2logpρq{peM q, then by m! ě p2πq1{2mm`1{2e ́m (Robbins (1955)), we have
ÿ
mě2
Eppc1,M I1qmq
m! ď 1
2 μ2
2M  ́2.
For I2 part, for any m ě 2,
E|I2|m ď
 ̃8 ÿ
t“0
}vtJε1vtJεăM }m
 ̧m
ď
 ̃8 ÿ
t“0
pM m ́2E|vtJε|2q1{m
 ̧m
ď μ2
2
 ́
M 1 ́2{m
8
ÿ
t“0
ρtq{m ̄m
ď μ2
2p ́2ρ2logpρq{mq ́mM m ́2,
where the last inequality is by (40). Therefore
ÿ
mě2
Eppc1,M I2qmq
m! ď 1
2 μ2
2M  ́2 ă 8,
We complete the proof by combining the two parts and setting c0 “ M c1,M {2.
Eec0X{M  ́ 1  ́ Epc0X{M q “
ÿ
mě2
Eppc0X{M qmq
m! ď
ÿ
mě2
Eppc1,M I1qmq
m! `
ÿ
mě2
Eppc1,M I2qmq
m! ď μ2
2M  ́2.
Proof of Theorem 1. Part (i). Without loss of generality, assume }G}1 “ 1. For Xt “ Gp. . . , εt ́1, εtq, where G is some measurable function, we define the coupled version
Xt,tku “ Gp. . . , εk ́1, ε1k, εk`1, . . . , εtq.
23

Recall that abspxq “ p|x1|, . . . , |xp|qJ for x “ px1, . . . , xpqJ. By Assumption 1, for k ď i  ́ 1, we have
abspXt  ́ Xt,tkuq ď HabspXt ́1  ́ Xt ́1,tkuq,
and for k “ i, abspXt  ́ Xt,tkuq “ εk  ́ ε1k. Hence by induction, we obtain
abspXt  ́ Xt,tkuq ď Ht ́kabspεk  ́ ε1kq.
Since the function g is Lipschitz continuous, combined with the above inequality, we have
|PkgpXtq| “
ˇ
ˇEpgpXtq  ́ gpXt,tkuq|Fkq
ˇ ˇ
ďE
 ́
GJabspXt  ́ Xt,tkuq
ˇ
ˇ
ˇFk
 ̄
ďE
 ́
GJHt ́kabspεk  ́ ε1kq
ˇ
ˇ
ˇFk
 ̄
. (41)
Let Snpgq “ řn
t“1
`gpXtq  ́ EgpXtq ̆. For k ď n, denote ξk “ PkpSnpgqq. Then
Snpgq “
ÿ
kďn
ξk .
The tail probability can be decomposed into two parts
PpSnpgq ě 2zq ď P
 ́ÿ
 ́năkďn
ξk ě z
 ̄
`P
 ́ÿ
kď ́n
ξk ě z
 ̄
“: I1 ` I2.
In the following, we will first bound ξk and then address I1 and I2 separately. The first part I1 is the leading term, while the second part I2 is relatively small. By Assumption 1 and }G}1 ď 1, we have
}Ht ́kJG}1 ď }H}t ́k
8 }G}1 ď ρt ́k.
Denote vt “ HtJG. Since |g|8 ď M , we have |PkgpXtq| ď 2M. Thus by (41),
|ξk| ď
n
ÿ
t“1
|PkgpXtq| ď
n
ÿ
t“k_1
min
!
vtJ ́kEpabspεk  ́ ε1kq
ˇ
ˇFkq, 2M
)
, with }vt}1 ď ρt. (42)
For part I1, let h ̊ :“  ́ρ2plogρq{p4eM q. By Lemma 2 and (42) for any 0 ă h ď h ̊, Epe|ξk|hq ă 8. Note that Epξk|Fk ́1q “ 0. Then
Epeξkh|Fk ́1q “ 1 ` Epeξkh  ́ ξkh  ́ 1|Fk ́1q
ď1`E
” e|ξk|h  ́ |ξk|h  ́ 1 h2
ˇ
ˇ
ˇFk ́1
ı
h2, (43)
in view of ex  ́ x ď e|x|  ́ |x| for any x. Note that for any fixed x ą 0, petx  ́ tx  ́ 1q{t2 is increasing in t P p0, 8q. By Lemma 2, we have
E
” e|ξk|h  ́ |ξk|h  ́ 1 h2
ˇ
ˇ
ˇFk ́1
ı
ďE
” e|ξk|h ̊  ́ |ξk|h ̊  ́ 1
h ̊2
ˇ
ˇ
ˇFk ́1
ı
ď ph ̊q ́2μ2
2p2M q ́2
ď c3, (44)
24

where c3 “ 4e2p ́ρ2logρq ́2μ22. Hence for any h ď h ̊, by (43) and (44),
Epeξkh|Fk ́1q ď 1 ` c3h2. (45)
By Markov’s inequality we have I1 ď e ́zhErexppř
 ́năkďn ξkhqs. Let h “ mintzp4c3nq ́1, h ̊u, then by recursively applying (45),
I1 ďe ́zhE
 ́
e
řn ́1
k“ ́n`1 ξkhEpeξnh|Fn ́1q
 ̄
ďe ́zhp1 ` c3h2q2n
ďexp`  ́ zh ` 2nc3h2 ̆
ďexp
!
 ́ z2
8c3n ` c4M z
)
, (46)
where the third inequality is due to 1 ` x ď ex for x ą 0, and c4 “ 8e{p ́ρ2logρq.
For I2, by (42), }ξk}q ď řn
t“1 ρt ́kμq ď ρ1 ́kp1  ́ ρq ́1μq, for k ď 0. Then by Lemma 1,
I2 ď z ́q ́
pq  ́ 1q
ÿ
kď ́n
}ξk }2
q
 ̄q{2
ď pq  ́ 1qq{2z ́q ́ ÿ
kď ́n
}ξk }2
q
 ̄q{2
ď c5ρqn{zq “ c5e ́qnlogpρ ́1q{zq, (47)
where c5 “ pq  ́ 1qq{2μqqp1  ́ ρq ́3q{2 only depends on ρ, q and μq. Combining I1 and I2 parts, the desired result follows by noticing z ď 2M n.
Part (ii). Without loss of generality, assume }G}1 “ 1. Similar to the proof of Theorem 1(i), let
Snpgq “ řn
t“1
`gpXtq  ́ EgpXtq ̆, and ξk “ PkpSnpgqq. Then Snpgq “ ř
kďn ξk, and
PpSnpgq ě 2zq ď P
 ́ÿ
 ́năkďn
ξk ě z
 ̄
`P
 ́ÿ
kď ́n
ξk ě z
 ̄
“: I1 ` I2.
Denote vt “ HtJG and ωk “ řn
t“1_k vt ́k. Since (41) still holds, we have
|ξk| ď
n
ÿ
t“k_1
vtJ ́kEpabspεk  ́ ε1kq
ˇ
ˇFkq “ ωkJEpabspεk  ́ ε1kq
ˇ
ˇFkq. (48)
For I2, k ď  ́n, }wk}1 ď ρ1 ́k{p1  ́ ρq. Let h ̊ :“ c0p1  ́ ρq{ρ. By (43) and (44), for any 0 ď h ď h ̊,
Epeξkh|Fk ́1q ď 1 ` E
” e|ξk|h ̊  ́ |ξk|h ̊  ́ 1
h ̊2
ˇ
ˇ
ˇFk ́1
ı
h2 ď 1 ` Epe|ξk|h ̊  ́ 1|Fk ́1q
h ̊2 h2. (49)
Let ak “ ρ1 ́k{p1  ́ ρq and uk “ wk{ak, then
Epe|ξk|h ̊  ́ 1|Fk ́1q ď E
 ́
ewJ
k abspεk ́ε1
kqh ̊  ́ 1
 ̄
“E
 ́
ec0uJ
k abspεk ́ε1
kqρ ́k  ́ 1
 ̄
.
25

If f p0q “ 0, then Epf pXqq “ ş8
0 f 1ptqPpX ě tqdt. Therefore we further obtain
Epe|ξk|h ̊  ́ 1|Fk ́1q ď
ż8
0
etρ ́k ρ ́kPpc0ukJabspεk  ́ ε1kq ě tqdt
ď ρ ́k
ż8
0
e ́tp1 ́ρ ́k q μ2
edt ď ρ ́kp1  ́ ρq ́1μ2
e. (50)
Since 1 ` x ď ex, by (49) and (50),
Epeξkh|Fk ́1q ď 1 ` ρ ́kp1  ́ ρq ́1μ2
eph ̊q ́2h2 ď ec3ρ ́kh2 , (51)
where c3 “ μe2p1  ́ ρq ́3ρ2c ́2
0 . Recursively applying (51), we can obtain
I2 ď e ́zh ̊ E
 ́
e
ř
kď ́n ξkh ̊  ̄
ď expp ́zh ̊ ` c4ρnh ̊2q,
where c4 “ c3{p1  ́ ρq. Similar to (46), we can bound the I1 part and we complete the proof.
6.2 Proofs of Theorems in Section 3
By (17), for vector b “ pbj,kq1ďj,kďp and bj,k P RL, define the p2, αq group structure norm
|b|2,α :“ ||bj,k|2|α “
 ̈
 ̋
p
ÿ
j“1
p
ÿ
k“1
 ̃L ÿ
l“1
pbplq
j,k q2
 ̧α{2 ̨
‚
1{α
, (52)
where α ě 1. For instance, with the choice α “ 1, this norm corresponds to the regularizer that underlies the group Lasso. For α “ 8,
|b|2,8 :“ ||bj,k|2|8 “ max
1ďj,kďp
 ̃L ÿ
l“1
pbplq
j,k q2
 ̧1{2
.
Proof of Proposition 2. Note that since basis functions are orthonormal, }hjk}2 “ př8
l“1pbplq ̊
jl q2q1{2. Since basis functions are bounded by B, by Assumption 4, we have
}hjk  ́ hpLq
jk }8 ď
ÿ
lěL`1
|bplq ̊
jk |B
“B
ÿ
lěL`1
|bplq ̊
jk |lβ
lβ
ďB
d ÿ
lěL`1
pbplq ̊
jl q2l2β
d ÿ
lěL`1
l ́2β
ď BCp2β  ́ 1q ́1L1{2 ́β.
Hence, as s0 “ max1ďjďpCardpSjq with Sj :“ tk : hjkp ̈q ‰ 0, 1 ď k ď pu,
}rt}8 ď
p
ÿ
k“1
}hjk  ́ hpLq
jk }8 ď BCp2β  ́ 1q ́1s0L1{2 ́β.
26

Furthermore, we have
1
n
n
ÿ
t“1
”
hj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1q
ı2
“1
n
n
ÿ
t“1
«
ÿ
lěL`1
ψk,l pX pkq
t ́1qbplq ̊
jk
ff2
ď B2
«
ÿ
lěL`1
bplq ̊
jk
ff2
ď B2C2p2β  ́ 1q ́2L1 ́2β.
Then we obtain the desired result.
Proof of Proposition 1. We first prove part (i). By (20), we have, for any u P RpL with }u}2 “ 1,
EuJψpXtqψpXtqJu ě φL.
Let m “ 4p ́logρq ́1logpnq. Recall F n
k “ tεk, . . . , εnu. By Lemma 3, we have, with probability at
least 1  ́ mp ́c1 {12  ́ 2mpLe ́3n{p10mq, for any u P RpL,
1
n
n
ÿ
t“1
uJE`ψpXtqψpXtqJ|F n
t ́m`1
 ̆u ě 1
2 uJEψpXtqψpXtqJu  ́ c2logpnqlogppLq
n }u}2
1.
Note that L “ opnq. Let z “ 1 in Lemma 4, we can obtain, with probability at least 1  ́ mp ́c1{12  ́ 2mpLe ́3n{p10mq  ́ e ́c3n, for any u P RpL,
1
n
n
ÿ
t“1
uJ`ψpXtqψpXtqJ ̆u ě 1
2 uJEψpXtqψpXtqJu  ́ c2logpnqlogppLq
n }u}2
1 ́ 1
n }u}2
2.
Then (23) follows.
For part (ii), denote Ωk “ EpψkpXpkq
t qψkpXpkq
t qJq. For m “ opnq, let N “ rpn  ́ 1q{ms and N “ t1, m ` 1, 2m ` 1, . . . , pN  ́ 1qm ` 1u. Then there exists constant c3 ą 0 such that for any 1 ď l1, l2 ď L, z ą 0, we have
P
 ̃ ˇ ˇ ˇ
1
N
ÿ
tPN
E
ˆ
pψk pX pkq
t qψkpXpkq
t qJql1,l2 |F n
t ́m`1
 ̄
 ́ pΩkql1,l2
ˇ ˇ
ˇěz
 ̧
ď 2exp␣  ́ c3N z2(.
Therefore with probability at least 1  ́ 2L2expt ́c3N z2u, for any u P RL with }u}2 “ 1,
ˇ ˇ ˇ
1
N
ÿ
tPN
E
ˆ
uJ ψk pX pkq
t qψkpXpkq
t qJu|F n
t ́m`1
 ̄
 ́ uJΩku
ˇ ˇ
ˇ ď Lz.
Take z “ c4
a
plogppq ` logpLqq{N for some constant c4 large enough. Then we have with probability greater than 1  ́ mppLq ́c4, for any u P RL, }u}2 “ 1, 1 ď k ď p,
1
n
n
ÿ
t“1
E
ˆ
uJ ψk pX pkq
t qψkpXpkq
t qJu|F n
t ́m`1
 ̄
ď φU ` c5L
c
logppq ` logpLq
N.
Then (24) follows by combining above and Lemma 4 with z “ 1 and m “ 4p ́logρq ́1logpnq.
27

Lemma 3. For m “ opnq, denote N “ rpn  ́ 1q{ms and N “ t1, m ` 1, 2m ` 1, . . . , pN  ́ 1qm ` 1u. Consider the VAR process (2), suppose Assumptions 1 and 2(ii) hold. Assume that there exists a
constant c ą 0, such that for all u P RpL, ErpuJψpXtqψpXtqJuq2s ď c`uJEpψpXtqψpXtqJqu ̆2. Let N ě ClogppLq, where C ą 0 is a sufficiently large constant. Then, we have, with probability at least 1  ́ p ́c1 {12  ́ 2pLe ́3N{10,
@u P RpL, 1
N
ÿ
tPN
uJE`ψpXtqψpXtqJ|F n
t ́m`1
 ̆u ě 1
2 uJEψpXtqψpXtqJu  ́ c2logppLq
N }u}2
1,
where c1 ą 0 is a sufficiently large constant and c2 depends only on c and B.
Proof. Recall for any 1 ď k ď p, 1 ď l ď L, supx |ψk,lpxq| ď B, some B ě 1, and F n
k “ tεk, . . . , εnu.
Denote Σ “ EpψpXtqψpXtqJq and
 ̃ΣN “ N  ́1 ÿ
tPN
E
`ψpXtqψpXtqJ|F n
t ́m`1
 ̆.
Let  ̃Σdiag be the diagonal of  ̃ΣN . Note that E`ψpXtqψpXtqJ|Ftn ́m`1
 ̆ “ E`ψpXtqψpXtqJ|Ftt ́m`1
 ̆
are independent for all t P N . By Jensen’s inequality,
E
”
`E`uJψpXtqψpXtqJu|F n
t ́m`1
 ̆ ̆2ı
ď ErpuJψpXtqψpXtqJuq2s ď c`uJEpψpXtqψpXtqJqu ̆2.
Then, employing similar arguments as in the proof of Lemmas 5.1 and 5.2 in Oliveira (2016), we can obtain, for N ě 1568cpc3 ` 1qlogppLq and c3 ą 0,
P
ˆ
@u P RpL, uJ  ̃ΣN u ě 1
2 uJΣu  ́ 1568cpc3 ` 1qlogppLq
N
ˇ ˇ ˇ
 ̃Σ1{2
diagu
ˇ ˇ ˇ
2
1
 ̇
ě1 ́ 1
12 p ́c3 . (53)
Since for any 1 ď k ď p, 1 ď l ď L, |ψk,l|8 ď B, then, by Bernstein’s inequality, we have,
P
 ̃ˇ ˇ ˇ ˇ ˇ
1
N
ÿ
tPN
pψk,l pX pkq
t q2  ́ Erψk,lpXpkq
t q2|F n
t ́m`1sq
ˇ ˇ ˇ ˇ ˇ
ěz
 ̧
ď 2exp
ˆ
 ́ Nz2
2B4 ` 4B2z{3
 ̇
.
Hence, we have
P
 ̃
max
1ďkďp,1ďlďL
ˇ ˇ ˇ ˇ ˇ
1
N
ÿ
tPN
ψk,l pX pkq
t q2
ˇ ˇ ˇ ˇ ˇ
ě 2B2
 ̧
ď 2pLexp p ́10N {3q .
Combining the above inequality with (53), it follows that, with probability at least 1  ́ p ́c3{12  ́ 2pLe ́3N{10, for any u P RpL,
uJ  ̃ΣN u ě 1
2 uJΣu  ́ 3136B2cpc3 ` 1qlogppLq
N }u}2
1.
Lemma 4. (m-approximation) Considering the VAR process (2), suppose Assumptions 1 and 2 (ii) hold. Let zρ ́m{ps0Lq ą Cn, where C ą 0 is a sufficient large constant. We have
P
 ̃
sup
}u}2“1, }u}2
1“s0L
ˇ ˇ ˇ
n
ÿ
t“1
uJ“ψpXtqψpXtqJ  ́ E`ψpXtqψpXtqJ|F n
t ́m`1
 ̆‰u
ˇ ˇ
ˇěz
 ̧
ď s2
0L2e ́cn,
for some constant c ą 0.
28

Proof. For matrix A, denote by Ak1,k2 the pk1, k2qth entry of A, and let Et ́m`1p ̈q “ p ̈q  ́ Ep ̈|Ftn ́m`1q, then we have
P
 ̃
sup
}u}2“1, }u}2
1“s0L
ˇ ˇ
ˇuJ
n
ÿ
t“1
Et ́m`1
`ψpXtqψpXtqJ ̆u
ˇ ˇ
ˇěz
 ̧
ďP
 ̃
sup
}u}2“1, }u}2
1“s0L
}u}2
1 max
1ďk1,k2ďpL
ˇ ˇ ˇ
n
ÿ
t“1
Et ́m`1
`pψpXtqψpXtqJqk1,k2
 ̆1uk1 ,uk2 ‰0
ˇ ˇ
ˇěz
 ̧
ďs2
0L2 max
1ďk1,k2ďpL P
 ̃ ˇ ˇ ˇ
n
ÿ
t“1
Et ́m`1
`pψpXtqψpXtqJqk1,k2
 ̆
ˇ ˇ
ˇ ě z{ps0Lq
 ̧
.
By construction, for any indices k1, k2, there exist functions
φ1, φ2 P tf : Rp Ñ R|f pxq “ ψk,lpxkq for some 1 ď k ď p, 1 ď l ď Lu
such that pψpXtqψpXtqJqk1,k2 “ φ1pXtqφ2pXtq. Since function ψk,l satisfies conditions in Lemma 5, we complete the proof.
Lemma 5. Consider the VAR process (2), suppose Assumptions 1 and 2(ii) hold. Assume functions φ1, φ2 : Rp Ñ R are both bounded with |φt|8 ď B, i “ 1, 2. For any x, y P Rp, assume |φtpxq  ́
φtpyq| ď βJabspx  ́ yq “ řp
j“1 βj|xj  ́ yj|, where }β}1 ď 1. Then we have
P
 ́ˇ ˇ
n
ÿ
t“1
“φ1pXtqφ2pXtq  ́ E`φ1pXtqφ2pXtq|F n
t ́m`1
 ̆‰ˇ
ˇěz
 ̄
ď e ́c mintn,zρ ́m,z2ρ ́2m{nu, (54)
where constant c only depends on ρ, μ2, μe and B.
Proof. Recall F n
k “ tεk, . . . , εnu. Denote
Sn “
n
ÿ
t“1
“φ1pXtqφ2pXtq  ́ E`φ1pXtqφ2pXtq|F n
t ́m`1
 ̆‰ and ξk “ EpSn|F n
k ́1q  ́ EpSn|F n
k q.
Then Sn “ ř
kďn ́m`1 ξk and
|ξk| ď
n
ÿ
t“pk`m ́1q_1
E
 ́
|φ1pXt,tkuq  ́ φ1pXtq||φ2pXtq|
ˇ
ˇF n
k
 ̄
`
n
ÿ
t“pk`m ́1q_1
E
 ́
|φ1pXt,tkuq||φ2pXt,tkuq  ́ φ2pXtq|
ˇ
ˇF n
k
 ̄
“: ξ1k ` ξ2k. (55)
Since |φ1pXt,tkuq  ́ φ1pXtq| ď βJHt ́kabspε1k  ́ εkq and |φ1|8 ď B, we have
ξ1k ď
n
ÿ
t“pk`m ́1q_1
B ̈E
 ́
βJHt ́kabspε1k  ́ εkq
ˇ
ˇF n
k
 ̄
.
29

A similar bound can be derived for ξ2k. Hence
|ξk| ď E`ωkJabspε1k  ́ εkq|F n
k
 ̆, where ωkJ “ 2BβJ
n
ÿ
t“pk`m ́1q_1
H t ́k .
Then }ωk}1 ď 2Bp1  ́ ρq ́1ρm ́1 for k ą  ́n and }ωk}1 ď 2Bp1  ́ ρq ́1ρ1 ́k if k ď  ́n. For k ď  ́n, since ξk are martingale differences, by Burkholder’s inequality (Lemma 1), we have, for any q ě 2,
› › ›
ÿ
kď ́n
ξk
› › ›
2
q ď pq  ́ 1qq{2 ́ ÿ
kď ́n
}ξk }2
q
 ̄q{2
ď pq  ́ 1qq{2p2Bqqμq
qp1  ́ ρq ́qp1  ́ ρ2q ́q{2ρqρnq.
Thus by Markov’s inequality
P
 ́ˇ ˇ
ÿ
kď ́n
ξk
ˇ
ˇěz
 ̄
ď z ́24B2p1  ́ ρq ́2p1  ́ ρ2q ́1μ2
2ρ2  ̈ ρ2n ď z ́24B2p1  ́ ρq ́4μ2
2ρ2  ̈ e ́p ́2logρqn.
For k ą  ́n, let h ̊ “ p2Bq ́1p1  ́ ρqρc0 and ξ1k “ ξk{ρm Then Eexpph ̊|ξ1k|q ď 2μe ă 8. By (43),
(44) and (45), we have for any h ď h ̊,
Epeξ1
kh|Fk ́1q ď 1 ` c1h2,
where c1 “ 2μeh ̊ ́2. Similar as (46), we have
P
 ́ˇ ˇ
n
ÿ
k“ ́n`1
ξk {ρm ˇ
ˇěz
 ̄
ď inf
hďh ̊ exp`  ́ zh ` 2c1nh2 ̆ ď exp␣  ́ z2{pc2z ` c3nq(,
for some constants c2, c3 depending on ρ, μ2, μe and B. Then the desired result follows.
Remark 9. The proof of Lemma 5 follows a similar approach to that of Theorem 1. ■
Proof of Theorem 2. Let
F pbq “ 1
n
n
ÿ
t“1
}Xt  ́ ΨpXt ́1qJb}2
2`λ
p
ÿ
j,k“1
g f f e
1
n
n
ÿ
t“1
pψk pX pkq
t ́1 qJ bj,k q2 .
Define
∇n “ 1
n
n
ÿ
t“1
ΨpXt ́1qpXt  ́ ΨpXt ́1qJb ̊q. (56)
Recall the definition of |  ̈ |2,α in (52). Then
|∇n|2,8 “
ˇ ˇ
1
n
n
ÿ
t“1
ΨpXt ́1qpεt ` rtq
ˇ
ˇ2,8
ď1
n
n
ÿ
t“1
L1{2›
›ΨpXt ́1q
›
›8}rt}8 `
ˇ ˇ
1
n
n
ÿ
t“1
ΨpXt ́1qεt
ˇ
ˇ2,8
:“ I1 ` I2. (57)
30

For I1 part, by (18) and Proposition 2, we have }ΨpXt ́1q}8 ď B and thus I1 ď B2Cp2β  ́
1q ́1s0L1 ́β. For I2 part, by Lemma 6, with probability at least 1  ́ ppLq ́c1, I2 ď caLlogppLq{n, for some constants c, c1 ą 0. For c2 ě 12pc ` CB2p2β  ́ 1q ́1q{φL, by Proposition 1, we have
λ ě p12{φLq`caLlogppLq{n ` B2Cp2β  ́ 1q ́1s0L1 ́β ̆ ě 12|∇n|2,8{φL.
Let
φrL “ φL
2  ́1
n  ́ c4ps0LqlogpnqlogppLq
n,
and
φrU “ φU ` c7L
c
logpnqlogppLq
n,
where }u}1 “ s0L in Proposition 1, and c4, c7 are the constants in (23) and (24). Then, for n ě c3ps0LqlogpnqlogppLq ` c3L2logpnqlogppLq with sufficient large constant c3 ą 0, we have
φrL ě φL
3 and φrU ď 2φU .
Denote
Σk “ 1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ and Jn “ 1
n
n
ÿ
t“1
ΨpXt ́1qΨpXt ́1qJ.
Hence, by Assumption 5 and Proposition 1, with probability approaching one, we have
F pbq  ́ F pb ̊q “  ́ 2∇nJpb  ́ b ̊q ` pb  ́ b ̊qJJnpb  ́ b ̊q ` λ
p
ÿ
j,k“1
`}Σ1{2
k bj,k}2  ́ }Σ1{2
k bj ̊,k}2
 ̆
ě  ́ 2|∇n|2,8|b  ́ b ̊|2,1 ` φrL}b  ́ b ̊}2
2`λ
ÿ
j,kRS
}Σ1{2
k bj,k}2  ́ λ
ÿ
j,kPS
}Σ1{2
k pbj,k  ́ bj ̊,kq}2
ě
φrL}b  ́ b ̊}2
2  ́ λpφL{6 ` φrU q
ÿ
j,kPS
}bj,k  ́ bj ̊,k}2
ěpφL{3q}b  ́ b ̊}2
2  ́ λpφL{6 ` 2φU q
ÿ
j,kPS
}bj,k  ́ bj ̊,k}2.
Since CardpSq “ |S|0 “ s, we have
ÿ
j,kPS
}bj,k  ́ bj ̊,k}2 ď ?s
d ÿ
j,kPS
}bj,k  ́ bj ̊,k}22 ď s1{2}b  ́ b ̊}2.
Hence }ˆb  ́ b ̊}2 ď p1{2 ` 6φU {φLq?sλ in view of F pbˆq  ́ F pb ̊q ď 0. Furthermore,
p
ÿ
j,k“1
}ˆhjk  ́ hjk}2
2ď
?2
p
ÿ
j,k“1
› › › › ›
L
ÿ
l“1
pbˆplq
j,k  ́ bplq ̊
j,k qψk,l
› › › › ›
2
2
`
?2
p
ÿ
j,k“1
› › › › ›
8
ÿ
l“L`1
bplq ̊
j,k ψk,l
› › › › ›
2
2
.
31

Since pψk,lqj,k,l are orthonormal basis functions, we have
p
ÿ
j,k“1
}ˆhjk  ́ hjk}2
2ď
?2
p
ÿ
j,k“1
L
ÿ
l“1
pˆbplq
j,k  ́ bplq ̊
j,k q2 `
?2
p
ÿ
j,k“1
8
ÿ
l“L`1
pbplq ̊
j,k q2
À sλ2 `
p
ÿ
j,k“1
8
ÿ
l“L`1
pbplq ̊
j,k q2l2β l ́2β
À sλ2 ` sL ́2β,
which also implies (28). Moreover,
1
n
n
ÿ
t“1
p
ÿ
j,k“1
pˆhj k pX pkq
t ́1q  ́ hpLq
jk pXpkq
t ́1qq2 “ pˆb  ́ b ̊qJJnpˆb  ́ b ̊q
À
p
ÿ
j,k“1
pbˆ  ́ b ̊q2 “ }bˆ  ́ b ̊}2
2
À sλ2.
By Proposition 2, we can obtain (29).
Lemma 6. For function g : Rp Ñ R, assume |g|8 ď B. Under Assumption 2(ii), we have
P
 ́ˇ ˇ
1
n
n
ÿ
t“1
gpXt ́1qεpjq
t
ˇ
ˇěz
 ̄
ď
#
2exp
 ́
 ́ nz2
4c1
 ̄
, if z ď 2c0c1B ́1,
2exp`  ́ c0nz{p2Bq ̆, if z ą 2c0c1B ́1,
(58)
where c1 “ μec ́2
0 B2.
Proof. Let ξt “ gpXt ́1qεpjq
t . Then ξt, 1 ď i ď n, are martingale differences with respect to Ft. Let
h ̊ “ c0{B. By Assumption 2 (ii), for any 0 ă h ď h ̊, Epe|ξk|hq ă 8. Since Epξk|Fk ́1q “ 0 and ex  ́ x ď e|x|  ́ |x| for any x, we have
Epeξkh|Fk ́1q “ 1 ` Epeξkh  ́ ξkh  ́ 1|Fk ́1q
ď1`E
” e|ξk|h  ́ |ξk|h  ́ 1 h2
ˇ
ˇ
ˇFk ́1
ı
h2. (59)
Note that for any fixed x ą 0, petx  ́ tx  ́ 1q{t2 is increasing in t P p0, 8q. Hence
E
” e|ξk|h  ́ |ξk|h  ́ 1 h2
ˇ
ˇ
ˇFk ́1
ı
ďE
” e|ξk|h ̊  ́ |ξk|h ̊  ́ 1
h ̊2
ˇ
ˇ
ˇFk ́1
ı
ď EpeBh ̊|εpjq
t |q
h ̊2 ď c1, (60)
where c1 “ μeB2c ́2
0 . Combining (59) and (60), we can obtain
Epeξkh|Fk ́1q ď 1 ` c1h2.
32

Then, by recursively applying the above inequality, we have
P
 ́1
n
n
ÿ
t“1
ξt ě z
 ̄
ď e ́nzhE
 ́
e
řn ́1
t“1 ξthEpeξnh|Fn ́1q
 ̄
ď e ́nzhp1 ` c1h2qn
ď exp`  ́ nzh ` nc1h2 ̆.
Take h “ minth ̊, z{p2c1qu, we further obtain
P
 ́1
n
n
ÿ
t“1
ξt ě z
 ̄
ďexp
 ́
 ́ nz2
4c1
 ̄
1th ̊ěz{p2c1qu ` exp`  ́ c0nz{p2Bq ̆1th ̊ăz{p2c1qu.
Similar argument can be applied to Ppn ́1 řn
t“1 ξt ď  ́zq and the desired result follows.
Remark 10. The proof of Lemma 6 follows a similar approach to that of Theorem 1. ■
Proof of Proposition 3. Note that
λmin
!1
n
n
ÿ
t“1
ΨS pXt ́1qΨS pXt ́1qJ
)
“ min
1ďjďp λmin
!1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ
)
,
λmax
!1
n
n
ÿ
t“1
ΨS pXt ́1qΨS pXt ́1qJ
)
“ max
1ďjďp λmax
!1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ
)
.
Then, under (37), applying (33) and similar arguments in the proofs of Proposition 1, we have, in an event Ω1 with probability approaching one (as n, p Ñ 8),
min
1ďjďp λmin
!1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ
)
ě p1 ` op1qqφmin ą 0,
max
1ďjďp λmax
!1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ
)
ď p1 ` op1qqφmax ą 0.
Thus, in the event Ω1, (34) and (35) hold. Define
QpSj,Sj “ 1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ,
QpSc
j ,Sj “ 1
n
n
ÿ
t“1
ΨSc
j pXt ́1qΨSj pXt ́1qJ,
QSj,Sj “ EΨSj pXt ́1qΨSj pXt ́1qJ,
QSc
j ,Sj “ EΨSc
j pXt ́1qΨSj pXt ́1qJ.
Then, similar to Ravikumar et al. (2010), we decompose the sample matrix as follows
QpSc
j ,Sj Qp ́1
Sj ,Sj “ QSc
j ,Sj pQp ́1
Sj ,Sj  ́ Q ́1
Sj,Sj q ` pQpSc
j ,Sj  ́ QSc
j ,Sj qQ ́1
Sj ,Sj
` pQpSc
j ,Sj  ́ QSc
j ,Sj qpQp ́1
Sj ,Sj  ́ Q ́1
Sj ,Sj q ` QSc
j ,Sj Q ́1
Sj ,Sj
“ I1 ` I2 ` I3 ` I4.
33

Similar to the proofs of Proposition 1, Lemma 4 and Lemma 5, we can show in an event Ω2 with probability approaching one (as n, p Ñ 8),
}
QpSc
j ,Sj  ́ QSc
j ,Sj }2,8 “ op1q.
Based on the properties of the induced matrix norms (}  ̈ }2,2 “ }  ̈ }2), we have in the event Ω1,
}I1}2,8 ď }QSc
j ,Sj Q ́1
Sj ,Sj }2,8}QSj ,Sj pQp ́1
Sj ,Sj  ́ Q ́1
Sj ,Sj q}2,2
ď }QSc
j ,Sj Q ́1
Sj,Sj }2,8}QSj,Sj }2}Qp ́1
Sj ,Sj  ́ Q ́1
Sj ,Sj }2
ď op1q}QSc
j ,Sj Q ́1
Sj ,Sj }2,8.
Similarly, in the event Ω1 X Ω2
}I2}2,8 ď }QpSc
j ,Sj  ́ QSc
j ,Sj }2,8}Q ́1
Sj,Sj }2,2 “ op1q,
}I3}2,8 ď }QpSc
j ,Sj  ́ QSc
j ,Sj }2,8}Qp ́1
Sj ,Sj  ́ Q ́1
Sj,Sj }2,2 “ op1q.
It follows that in the event Ω1 X Ω2,
}
QpSc
j ,Sj Qp ́1
Sj,Sj }2,8 ď p1 ` op1qq}QSc
j ,Sj Q ́1
Sj,Sj }2,8 ` op1q.
Thus, in the event Ω1 X Ω2 with probability approaching one (as n, p Ñ 8), (34), (35) and (36) hold.
Proof of Theorem 3. Let bS “ pbj,k, pj, kq P Sq P RsL, and
Ωpbq “
p
ÿ
j,k“1
g f f e
1
n
n
ÿ
t“1
pψk pX pkq
t ́1 qJ bj,k q2 .
Denote
ˆΣS,S “ 1
n
n
ÿ
t“1
ΨS pXt ́1 qΨS pXt ́1 qJ ,
and
Σˆ Sj,Sj “ 1
n
n
ÿ
t“1
ΨSj pXt ́1qΨSj pXt ́1qJ.
By Assumption 7 and Proposition 3, (34), (35) and (36) hold on some event Z with PpZq Ñ 1. In the following, we shall only work on Z. A vector bˆ P Rp2L is an optimum of the objective function in (14) if and only if there is a subgradient gˆ P BΩpˆbq, such that
2
n
n
ÿ
t“1
ΨpXt ́1qpΨpXt ́1qJbˆ  ́ Xtq ` λgˆ “ 0. (61)
34

The subdifferential BΩpbq is the set of vectors g “ pgjk, 1 ď j, k ď pq, with gˆjk P RL, satisfying
gjk “
1 n
řn
t“1 ψkpXpkq
t ́1 qψk pX pkq
t ́1qJbj,k
b
1 n
řn
t“1 pψk pX pkq
t ́1 qJ bj,k q2
, (62)
gjJk
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ
 ̧ ́1
gjk ď 1. (63)
Following the primal dual witness argument in Ravikumar et al. (2009) and Wainwright (2009), it suffices to set ˆbSc “ 0 and gˆS “ BΩpb ̊qS, and then show
ˆbj,k ‰ 0, for pj, kq P S, (64)
gˆjJk
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ
 ̧ ́1
gˆjk ă 1, for pj, kq P Sc, (65)
hold with probability approaching 1.
(i). Proof of (64).
Since bˆSc “ b ̊Sc “ 0, (61) reduces to
2
n
n
ÿ
t“1
ΨSpXt ́1qpΨSpXt ́1qJˆbS  ́ Xtq ` λgˆS “ 0. (66)
It implies that
bˆS  ́ b ̊S “ ˆΣ ́1
S,S  ̈ 1
n
n
ÿ
t“1
ΨSpXt ́1qεt ` Σˆ  ́1
S,S  ̈ 1
n
n
ÿ
t“1
ΨSpXt ́1qrt  ́ λ
2
ˆΣ ́1
S,S  ̈ gˆS :“ I1 ` I2  ́ I3. (67)
We now proceed to bound I1, I2 and I3. Recall the definition of |  ̈ |2,α in (52). Also recall that }A}8 is the matrix 8 norm of A “ paijqnˆm with }A}8 “ max1ďiďn
řm
j“1 |aij |.
For I1, we have
|I1|2,8 ď
?L
› › ›
ˆΣ ́1
S,S
› › ›8
 ̈
› › › › ›
1
n
n
ÿ
t“1
ΨS pXt ́1 qεt
› › › › ›8
“
?L max
1ďjďp
› › ›
ˆΣ ́1
Sj ,Sj
› › ›8
 ̈
› › › › ›
1
n
n
ÿ
t“1
ΨS pXt ́1 qεt
› › › › ›8
.
By Lemma 6, with probability at least 1  ́ ppLq ́c1,
› › › › ›
1
n
n
ÿ
t“1
ΨS pXt ́1 qεt
› › › › ›8
ď c2
c
logppLq
n . (68)
Note that
› › ›
ˆΣ ́1
S,S
› › ›8
“ max
1ďjďp
› › ›
ˆΣ ́1
Sj ,Sj
› › ›8
ď max
1ďjďp
› › ›
ˆΣ ́1
Sj ,Sj
› ›
›2  ̈
as0L “
as0L
› › ›
ˆΣ ́1
S,S
› › ›2
.
35

Then by (34), with probability at least 1  ́ ppLq ́c1,
|I1|2,8 ď c2
?L  ̈
?s0L
φmin
 ̈
c
logppLq
n “ c2φ ́1
min
L
as0logppLq
?n . (69)
For I2, by (18) and Proposition 2, we have
|I2|2,8 ď
?L
› › ›
ˆΣ ́1
S,S
› › ›8
}ΨSpXt ́1q}8 }rt}8 ď cB2Cp2β  ́ 1q ́1φ ́1
mins3{2
0 L3{2 ́β. (70)
For I3 part, note that for all pj, kq P S,
1
p1 ` op1qqφmax
}gˆj k }2
2 ď gˆjJk
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ
 ̧ ́1
gˆjk ď 1.
It follows that
}gˆS}8 “ max
pj,kqPS }gˆjk}8 ď max
pj,kqPS }gˆjk}2 ď
a
p1 ` op1qqφmax. (71)
Therefore we obtain
|I3|2,8 ď 1
2 λ?L
› › ›
ˆΣ ́1
S,S
› › ›8
}gˆS}8 ď
a
p1 ` op1qqφmax
2φmin
 ̈ λ?s0L. (72)
Combining (69), (70) and (72), we have, with probability at least 1  ́ ppLq ́c1,
|ˆbS  ́ b ̊S|2,8 “ max
pj,kqPS }ˆbj,k  ́ bj ̊,k}2
ď c2φ ́1
min
L
as0logppLq
?n ` cB2Cp2β  ́ 1q ́1φ ́1
mins3{2
0 L3{2 ́β `
a
p1 ` op1qqφmax
2φmin
 ̈ λ?s0L.
(73)
By (37) and (38), it follows that, on an event Z1 with probability approaching 1,
max
pj,kqPS }bˆj,k  ́ bj ̊,k}2 Ñ 0.
Since maxpj,kqPS }bj ̊,k}2 ą 0 and will not converge to 0 asymptotically, (64) holds on an event Z1 with probability approaching 1.
(ii). Proof of (65).
Since ˆbSc “ b ̊Sc “ 0, for all pj, kq P Sc, (61) reduces to
2
n
n
ÿ
t“1
ψk pX pkq
t ́1qpΨSj pXt ́1qJˆbSj  ́ Xpjq
t q ` λgˆjk “ 0.
It implies that
gˆjk “ 2
λ
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qpΨSj pXt ́1qJpb ̊Sj  ́ ˆbSj q ` 1
n
n
ÿ
t“1
ψk pεpj q
t ` rpjq
tq
 ̧
.
36

By (67), we have
gˆjk “
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qΨSj pXt ́1qJ ˆΣ ́1
Sj ,Sj
 ̧
gˆSj
 ́2
λ
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qΨSj pXt ́1qJ ˆΣ ́1
Sj ,Sj
 ̧
1
n
n
ÿ
t“1
ΨSj pXt ́1qεpjq
t
 ́2
λ
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qΨSj pXt ́1qJ ˆΣ ́1
Sj ,Sj
 ̧
1
n
n
ÿ
t“1
ΨSj pXt ́1qrpjq
t
`2
λ ̈1
n
n
ÿ
t“1
ψk εpj q
t `2
λ ̈1
n
n
ÿ
t“1
ψk rpj q
t
:“ II1  ́ II2  ́ II3 ` II4 ` II5.
Since for all pj, kq P Sc,
gˆjJk
 ̃
1
n
n
ÿ
t“1
ψk pX pkq
t ́1 qψk pX pkq
t ́1qJ
 ̧ ́1
gˆjk ď 1
φmin
}gˆj k }2
2.
It suffices to show maxpj,kqPSc }gˆjk}2 ă
a
p1 ` op1qqφmin. We now proceed to bound II1, II2, II3, II4 and II5. For II1, by (36) and (71),
}II1}2 ď
› › › › ›
1
n
n
ÿ
t“1
ψk pX pkq
t ́1qΨSj pXt ́1qJ ˆΣ ́1
Sj ,Sj
› › › › ›2
}gˆSj }2
ď p1 ` op1qq
d
φmin
φmax
 ̈ 1 ́δ
?s0
 ̈ ?s0
aφmax
ď p1 ` op1qqp1  ́ δq
aφmin. (74)
For II2, by Lemma 6, as s0 ă n, with probability at least 1  ́ pnLq ́c3
}II2}2 ď 2
λ ̈
d
φmin
φmax
 ̈ 1 ́δ
?s0
 ̈
as0L
› › › › ›
1
n
n
ÿ
t“1
ΨSj pXt ́1qεpjq
t
› › › › ›8
ď2
λ ̈
d
φmin
φmax
 ̈ 1 ́δ
?s0
 ̈
as0L  ̈ c4
c
logpnLq
n
“ c5
1
λ
c
LlogpnLq
n . (75)
For II3, by (18) and Proposition 2, we have
}II3}2 ď 2
λ ̈
d
φmin
φmax
 ̈ 1 ́δ
?s0
 ̈
as0L  ̈ B2Cp2β  ́ 1q ́1s0L1{2 ́β “ c6
s0L1 ́β
λ . (76)
37

Similarly, for II4, with probability at least 1  ́ pnLq ́c7,
}II4}2 ď c8
1
λ
c
LlogpnLq
n . (77)
For II5,
}II5}2 ď 2B2Cp2β  ́ 1q ́1 s0L1 ́β
λ “ c9
s0L1 ́β
λ . (78)
In view of (74), (75), (76), (77) and (78), for all pj, kq P Sc, we can obtain, with probability at least 1  ́ pnLq ́c3  ́ pnLq ́c7 ,
}gˆjk}2 ď p1 ` op1qqp1  ́ δq
aφmin ` pc5 ` c8q 1
λ
c
LlogpnLq
n ` pc6 ` c9q s0L1 ́β
λ . (79)
By (38), it follows that, on an event Z2 with probability approaching 1,
}gˆjk}2 ď p1  ́ δq
aφmin ` op1q.
Hence, (65) holds on an event Z2 with probability approaching 1. Then Theorem 3 follows.
References
Adamczak, R. (2008). A tail inequality for suprema of unbounded empirical processes with applications to Markov chains. Electronic Journal of Probability, 13:1000–1034.
A ̈ ij ̈o, T. and L ̈ahdesm ̈aki, H. (2009). Learning gene regulatory networks from gene expression measurements using non-parametric molecular kinetics. Bioinformatics, 25(22):2937–2944.
Aı ̈t-Sahalia, Y., Cacho-Diaz, J., and Laeven, R. J. (2015). Modeling financial contagion using mutually exciting jump processes. Journal of Financial Economics, 117(3):585–606.
Baddour, K. E. and Beaulieu, N. C. (2005). Autoregressive modeling for fading channel simulation. IEEE Transactions on Wireless Communications, 4(4):1650–1662.
Balcilar, M., Thompson, K., Gupta, R., and Van Eyden, R. (2016). Testing the asymmetric effects of financial conditions in South Africa: A nonlinear vector autoregression approach. Journal of International Financial Markets, Institutions and Money, 43:30–43.
Ban ́bura, M., Giannone, D., and Reichlin, L. (2010). Large Bayesian vector auto regressions. Journal of Applied Econometrics, 25(1):71–92.
Barigozzi, M. and Hallin, M. (2017). A network analysis of the volatility of high dimensional financial series. Journal of the Royal Statistical Society Series C: Applied Statistics, 66(3):581605.
Basu, S., Li, X., and Michailidis, G. (2019). Low rank and structured modeling of high-dimensional vector autoregressions. IEEE Transactions on Signal Processing, 67(5):1207–1222.
38

Basu, S. and Michailidis, G. (2015). Regularized estimation in sparse high-dimensional time series models. The Annals of Statistics, 43(4):1535–1567.
Belloni, A., Chernozhukov, V., Chetverikov, D., and Fern ́andez-Val, I. (2019). Conditional quantile processes based on series or many regressors. Journal of Econometrics, 213(1):4–29.
Bernanke, B. S., Boivin, J., and Eliasz, P. (2005). Measuring the effects of monetary policy: a factor-augmented vector autoregressive (FAVAR) approach. The Quarterly Journal of Economics, 120(1):387–422.
Bosq, D. (1993). Bernstein-type large deviations inequalities for partial sums of strong mixing processes. Statistics, 24(1):59–70.
Burkholder, D. L. (1988). Sharp inequalities for martingales and stochastic integrals. Aste ́risque, (157-158):75–94. Colloque Paul L ́evy sur les Processus Stochastiques (Palaiseau, 1987).
Cai, T. and Liu, W. (2011). Adaptive thresholding for sparse covariance matrix estimation. Journal of the American Statistical Association, 106(494):672–684.
Chen, E. Y., Fan, J., and Zhu, X. (2023). Community network auto-regression for high-dimensional time series. Journal of Econometrics, 235(2):1239–1256.
Chen, L. and Wu, W. B. (2016). Stability and asymptotics for autoregressive processes. Electronic Journal of Statistics, 10(2):3723–3751.
Chen, L. and Wu, W. B. (2018). Concentration inequalities for empirical processes of linear time series. The Journal of Machine Learning Research, 18(1):8639–8684.
Chen, R. and Tsay, R. S. (1993). Functional-coefficient autoregressive models. Journal of the American Statistical Association, 88(421):298–308.
Chen, X. and Christensen, T. M. (2015). Optimal uniform convergence rates and asymptotic normality for series estimators under weak dependence and weak conditions. Journal of Econometrics, 188(2):447–465.
Dahlhaus, R. and Richter, S. (2023). Adaptation for nonparametric estimators of locally stationary processes. Econometric Theory, 39(6):1123–1153.
Diaconis, P. and Freedman, D. (1999). Iterated random functions. SIAM Review, 41(1):45–76.
Douc, R., Guillin, A., and Moulines, E. (2008). Bounds on regeneration times and limit theorems for subgeometric Markov chains. In Annales de l’IHP Probabilit ́es et statistiques, volume 44, pages 239–257.
Du ̈ker, M.-C. and Waterbury, A. (2025). Kernel estimation for nonlinear dynamics. arXiv preprint arXiv:2502.18634.
Fan, J., Jiang, B., and Sun, Q. (2021). Hoeffding’s inequality for general Markov chains and its applications to statistical learning. The Journal of Machine Learning Research, 22(139):1–35.
Fan, J. and Yao, Q. (2008). Nonlinear time series: nonparametric and parametric methods. Springer Science & Business Media.
39

Gao, Z., Ma, Y., Wang, H., and Yao, Q. (2019). Banded spatio-temporal autoregressions. Journal of Econometrics, 208(1):211–230.
Ghosh, S., Khare, K., and Michailidis, G. (2019). High-dimensional posterior consistency in Bayesian vector autoregressive models. Journal of the American Statistical Association, 114(526):735–748.
Ghosh, S., Khare, K., and Michailidis, G. (2021). Strong selection consistency of Bayesian vector autoregressive models based on a pseudo-likelihood approach. The Annals of Statistics, 49(3):1267–1299.
Guo, S., Wang, Y., and Yao, Q. (2016). High-dimensional and banded vector autoregressions. Biometrika, 103(4):889–903.
Hall, E. C., Raskutti, G., and Willett, R. M. (2018). Learning high-dimensional generalized linear autoregressive models. IEEE Transactions on Information Theory, 65(4):2401–2422.
Han, F., Lu, H., and Liu, H. (2015). A direct estimation of high dimensional stationary vector autoregressions. The Journal of Machine Learning Research, 16(1):3115–3150.
Han, Y., Tsay, R. S., and Wu, W. B. (2023). High dimensional generalized linear models for temporal dependent data. Bernoulli, 29(1):105–131.
Jarner, S. and Tweedie, R. (2001). Locally contracting iterated functions and stability of Markov chains. Journal of Applied Probability, 38(2):494–507.
Jiang, B., Li, J., and Yao, Q. (2023). Autoregressive networks. The Journal of Machine Learning Research, 24(227):1–69.
Jiang, B., Sun, Q., and Fan, J. (2018). Bernstein’s inequality for general Markov chains. arXiv preprint arXiv:1805.10721.
Kato, H., Taniguchi, M., and Honda, M. (2006). Statistical analysis for multiplicatively modulated nonlinear autoregressive model and its applications to electrophysiological signal analysis in humans. IEEE Transactions on Signal Processing, 54(9):3414–3425.
Kock, A. B. and Callot, L. (2015). Oracle inequalities for high dimensional vector autoregressions. Journal of Econometrics, 186(2):325–344.
Koltchinskii, V. and Yuan, M. (2010a). Sparsity in multiple kernel learning. The Annals of Statistics, 38(6):3660–3695.
Koltchinskii, V. and Yuan, M. (2010b). Sparsity in multiple kernel learning. The Annals of Statistics, 38(6):3660 – 3695.
Leman ́czyk, M. (2021). General Bernstein-like inequality for additive functionals of Markov chains. Journal of Theoretical Probability, 34(3):1426–1454.
Lichstein, J. W., Simons, T. R., Shriner, S. A., and Franzreb, K. E. (2002). Spatial autocorrelation and autoregressive models in ecology. Ecological Monographs, 72(3):445–463.
40

Lim, N., d’Alche ́ Buc, F., Auliac, C., and Michailidis, G. (2015). Operator-valued kernel-based vector autoregressive models for network inference. Machine Learning, 99(3):489–513.
Lin, J. and Michailidis, G. (2017). Regularized estimation and testing for high-dimensional multiblock vector-autoregressive models. The Journal of Machine Learning Research, 18(1):4188–4236.
Lin, J. and Michailidis, G. (2020). Regularized estimation of high-dimensional factor-augmented vector autoregressive (FAVAR) models. The Journal of Machine Learning Research, 21(117):151.
Lu ̈tkepohl, H. (2005). New introduction to multiple time series analysis. NY: Springer.
Mazur, J., Ritter, D., Reinelt, G., and Kaderali, L. (2009). Reconstructing nonlinear dynamic models of gene regulation using stochastic sampling. BMC Bioinformatics, 10(1):448.
Meier, L., Van de Geer, S., and Bu ̈hlmann, P. (2009). High-dimensional additive modeling. The Annals of Statistics, 37(6B):3779–3821.
Mendelson, S. and Zhivotovskiy, N. (2020). Robust covariance estimation under L4  ́ L2 norm equivalence. The Annals of Statistics, 48(3):1648 – 1664.
Merlev`ede, F., Peligrad, M., and Rio, E. (2009). Bernstein inequality and moderate deviations under strong mixing conditions. In High dimensional probability V: the Luminy volume, pages 273–292. Institute of Mathematical Statistics.
Merlev`ede, F., Peligrad, M., and Rio, E. (2011). A Bernstein type inequality and moderate deviations for weakly dependent sequences. Probability Theory and Related Fields, 151(3-4):435–474.
Modha, D. S. and Masry, E. (1996). Minimum complexity regression estimation with weakly dependent observations. IEEE Transactions on Information Theory, 42(6):2133–2145.
M ̈oller, E., Schack, B., Arnold, M., and Witte, H. (2001). Instantaneous multivariate EEG coherence analysis by means of adaptive high-dimensional autoregressive models. Journal of Neuroscience Methods, 105(2):143–158.
Negahban, S. N., Ravikumar, P., Wainwright, M. J., and Yu, B. (2012). A unified framework for high-dimensional analysis of M -estimators with decomposable regularizers. Statistical Science, 27(4):538–557.
Oliveira, R. I. (2016). The lower tail of random quadratic forms with applications to ordinary least squares. Probability Theory and Related Fields, 166:1175–1194.
Pandit, P., Sahraee-Ardakan, M., Amini, A. A., Rangan, S., and Fletcher, A. K. (2020). Generalized autoregressive linear models for discrete high-dimensional data. IEEE Journal on Selected Areas in Information Theory, 1(3):884–896.
Pereda, E., Quiroga, R. Q., and Bhattacharya, J. (2005). Nonlinear multivariate analysis of neurophysiological signals. Progress in Neurobiology, 77(1-2):1–37.
Raskutti, G., Wainwright, M. J., and Yu, B. (2011). Minimax rates of estimation for high-dimensional linear regression over lq-balls. IEEE Transactions on Information Theory, 57(10):6976–6994.
41

Raskutti, G., Wainwright, M. J., and Yu, B. (2012). Minimax-optimal rates for sparse additive models over kernel classes via convex programming. The Journal of Machine Learning Research, 13(1):389–427.
Ravikumar, P., Lafferty, J., Liu, H., and Wasserman, L. (2009). Sparse additive models. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 71(5):1009–1030.
Ravikumar, P., Wainwright, M. J., and Lafferty, J. D. (2010). High-dimensional Ising model selection using l1-regularized logistic regression. The Annals of Statistics, 38(3):1287 – 1319.
Rio, E. (2009). Moment inequalities for sums of dependent random variables under projective conditions. Journal of Theoretical Probability, 22(1):146–163.
Robbins, H. (1955). A remark on Stirling’s formula. The American Mathematical Monthly, 62(1):2629.
Ronen, M., Rosenberg, R., Shraiman, B. I., and Alon, U. (2002). Assigning numbers to the arrows: parameterizing a gene regulation network by using accurate expression kinetics. Proceedings of the National Academy of Sciences, 99(16):10555–10560.
Samson, P.-M. (2000). Concentration of measure inequalities for Markov chains and φ-mixing processes. The Annals of Probability, 28(1):416–461.
Seth, A. K., Barrett, A. B., and Barnett, L. (2015). Granger causality analysis in neuroscience and neuroimaging. Journal of Neuroscience, 35(8):3293–3297.
Shao, X. and Wu, W. B. (2007). Asymptotic spectral theory for nonlinear time series. The Annals of Statistics, 35(4):1773–1801.
Sharon, I., Morowitz, M. J., Thomas, B. C., Costello, E. K., Relman, D. A., and Banfield, J. F. (2013). Time series community genomics analysis reveals rapid shifts in bacterial species, strains, and phage during infant gut colonization. Genome Research, 23(1):111–120.
Shen, Y., Giannakis, G. B., and Baingana, B. (2019). Nonlinear structural vector autoregressive models with application to directed brain networks. IEEE Transactions on Signal Processing, 67(20):5325–5339.
Shojaie, A. and Michailidis, G. (2010). Discovering graphical granger causality using the truncating lasso penalty. Bioinformatics, 26(18):i517–i523.
Sima, C., Hua, J., and Jung, S. (2009). Inference of gene regulatory networks using time-series data: a survey. Current genomics, 10(6):416–429.
Sims, C. A. (1980). Macroeconomics and reality. Econometrica: Journal of the Econometric Society, pages 1–48.
van de Geer, S., Bu ̈hlmann, P., Ritov, Y., and Dezeure, R. (2014). On asymptotically optimal confidence regions and tests for high-dimensional models. The Annals of Statistics, 42(3):1166 1202.
42

Wainwright, M. J. (2009). Sharp thresholds for high-dimensional and noisy sparsity recovery using l1-constrained quadratic programming (Lasso). IEEE Transactions on Information Theory, 55(5):2183–2202.
Wang, D. and Tsay, R. S. (2023). Rate-optimal robust estimation of high-dimensional vector autoregressive models. The Annals of Statistics, 51(2):846–877.
Wang, D., Zheng, Y., Lian, H., and Li, G. (2022). High-dimensional vector autoregressive time series modeling via tensor decomposition. Journal of the American Statistical Association, 117(539):1338–1356.
Wu, W. B. (2005). Nonlinear system theory: Another look at dependence. Proceedings of the National Academy of Sciences, 102(40):14150–14154.
Wu, W. B. and Shao, X. (2004). Limit theorems for iterated random functions. Journal of Applied Probability, 41(2):425–436.
Yu, P.-N., Liu, C. Y., Heck, C. N., Berger, T. W., and Song, D. (2021). A sparse multiscale nonlinear autoregressive model for seizure prediction. Journal of Neural Engineering, 18(2):026012.
Yuan, M. and Zhou, D.-X. (2016). Minimax optimal rates of estimation in high dimensional additive models. The Annals of Statistics, 44(6):2564–2593.
Zhang, D. (2021). Robust estimation of the mean and covariance matrix for high dimensional time series. Statistica Sinica, 31(2):797–820.
Zhang, D. and Wu, W. B. (2017). Gaussian approximation for high dimensional time series. The Annals of Statistics, 45(5):1895–1919.
Zhang, D. and Wu, W. B. (2021). Convergence of covariance and spectral density estimates for high dimensional locally stationary processes. The Annals of Statistics, 49(1):233 – 254.
Zheng, L. and Raskutti, G. (2019). Testing for high-dimensional network parameters in autoregressive models. Electronic Journal of Statistics, 13(2):4977 – 5043.
Zhou, H. H. and Raskutti, G. (2018). Non-parametric sparse additive auto-regressive network models. IEEE Transactions on Information Theory, 65(3):1473–1492.
43

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:11.977Z
- **Text Length:** 91608 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
