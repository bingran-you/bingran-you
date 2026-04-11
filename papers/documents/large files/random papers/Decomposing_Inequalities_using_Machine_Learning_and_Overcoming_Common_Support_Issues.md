# PDF Document: Flachaire and Picard - 2025 - Decomposing Inequalities using Machine Learning and Overcoming Common Support Issues.pdf

**File Path:** Flachaire and Picard - 2025 - Decomposing Inequalities using Machine Learning and Overcoming Common Support Issues.pdf

**Processed Date:** 2026-02-10T18:15:49.979Z

**File Size:** 619.40 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3214

**Title:** Decomposing Inequalities using Machine Learning and Overcoming Common Support Issues

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Decomposing Inequalities using Machine Learning
and Overcoming Common Support Issues
Emmanuel Flachaire∗ and Bertille Picard†
November 2025
Abstract
The Kitagawa-Oaxaca-Blinder decomposition splits the difference in means between two groups into an explained part, due to observable factors, and an unexplained part. In this paper, we reformulate this framework using potential outcomes, highlighting the critical role of the reference outcome. To address limitations like common support and model misspecification, we extend Neumark’s (1988) weighted reference approach with a doubly robust estimator. Using Neyman orthogonality and double machine le-
arning, our method avoids trimming and extrapolation. This improves flexibility and robustness, as illustrated by two empirical applications. Nevertheless, we also highlight that the decomposition based on the Neumark reference outcome is particularly sensitive to the inclusion of irrelevant explanatory variables.
JEL: C46, D31 Keywords: inequality, decomposition methods, machine learning
∗Aix-Marseille Universit ́e, AMSE. emmanuel.flachaire@univ-amu.fr. †Univ Rennes, Ensai, CNRS, CREST-UMR 9194, F-35000 Rennes, France. bertille.picard@ensai.fr We thank Stephen Bazen, Arthur Charpentier, Michael Knaus, and Anna Simoni, as well as participants at various seminars, conferences, and workshops where this paper was presented, for their helpful comments and suggestions. All remaining errors are our own. The project leading to this paper has received funding from the “France 2030” investm-
ent plan managed by the NRA (reference: ANR-17-EURE-0020), and from the Excellence Initiative of AixMarseille University - A*MIDEX.
1
arXiv:2511.13433v1 [econ.EM] 17 Nov 2025

1 Introduction
The Kitagawa-Oaxaca-Blinder decomposition (Kitagawa 1955; Oaxaca 1973; Blinder 1973) is widely used in empirical studies to study differences in distributional statistics between two groups or two periods (DiNardo et al., 1996; Firpo et al., 2009, 2018).1 It separates an observed difference into an explained part due to individuals’ observed characteristics and an unexplained part. This method is typically used to decompose average wage differences between men and women. In classical decomposition-
s, two major methodological choices are made. The first methodological choice consists of selecting a reference outcome. In the context of gender wage gap decompositions, the reference outcome is the wage an individual would receive in a counterfactual setting where men and women would be paid according to the same wage model. This means that each characteristic, such as education or experience, determines the reference outcome in the same way for men and women. In other words, the reference outco-
me is a counterfactual outcome that would be identical for an individual in one group and an individual in another group, sharing the same observable characteristics. Classical decompositions in the literature assume that the reference outcome is either the wage model of men or of women. Empirically, the final decompositions vary according to this methodological choice, with no consensus which group’s potential outcome should be chosen as the reference (Fortin et al., 2011). The second traditional-
 methodological choice is to impose assumptions about outcome models, such as linearity, invertibility, and exogeneity, to perform ordinary least squares estimates. These standard assumptions can be relaxed by using reweighting techniques (Fortin et al., 2011) and machine learning methods (Strittmatter & Wunsch, 2021). However, these techniques require an additional common support assumption. In this paper, we propose a method to combine the advantages of both approaches, avoiding the restrictive -
assumptions of a standard linear model through machine learning and reweighting methods, without relying on the common support assumption. This is achieved by changing the reference outcome. Instead of choosing the outcome of one of the two groups as the reference outcome, we propose using a propensity score-weighted combination of the two potential outcomes as a reference, following Neumark (1988) in the standard linear framework. To understand why changing the reference outcome helps relaxing th-
ese standard assumptions simultaneously, we underline the idea that the common support hypothesis is needed whenever both reweighting techniques are used and the outcome of one of the two groups is taken as the reference outcome. Indeed, the combination of these two choices forces us to reweight the observed outcomes by the probability of belonging to the reference group, conditional on individual characteristics. This implies divisions by the conditional probability of belonging to the reference -
group, which is feasible only when these probabilities are bounded away from zero (hence the common support assumption). Intuitively, therefore, it is necessary for individuals to have comparable counterparts in the reference group, to avoid unstable weights driven by very small estimated probabilities. While this condition may be credible in situations close to randomized controlled trials, as in impact evaluation programs, it becomes more questionable in the context of inequality decomposition. -
For instance, using a large data set of 1.7 million employees in Switzerland, Strittmatter and Wunsch (2021) find that with the 10 most important variables for explaining male wages, 55% of women in the private sector have no comparable men with respect to these variables. They show that the results are sensitive to the trimming used to have observationally comparable men and women, and thus that common support is a key issue. However, dividing by conditional probabilities is no
1While the decomposition method is also referred to as the “Oaxaca-Blinder decomposition” in the economics literature, similar principles had been introduced earlier by Kitagawa in demographics and sociology. The links between these contributions are discussed in Oaxaca and Sierminska (2025). Given the generality of our counterfactual framework in this paper, we do not attribute the method to any single author and instead cite all three contributions.
2

longer required when choosing a reference outcome defined as a propensity score-weighted sum of the two potential outcomes. This choice of reference outcome was originally proposed by Neumark (1988) within a linear framework, where it was limited to the use of only a few categorical variables. This reference outcome is sensitive to gender composition within sectors and is consistent with the standard concept of equal redistribution conditional on a set of characteristics. We extend this reference-
 outcome to the case of a large set of characteristics, either categorical or continuous, and derive several estimators of the unexplained part of the mean difference. Unlike those based on standard reference outcomes, we show that the resulting reweighting estimators do not require the imposition of the common support hypothesis. To tackle the assumption on the correct parametric specification of the reference outcome or the propensity score regressions, we consider Machine Learning (ML) techniqu-
es. These methods allow us to estimate potentially complex non-linear functions by mapping inputs to outputs and/or by performing variable selection when a large number of characteristics is available. Although it may be tempting to introduce ML estimates of unknown functions directly into standard estimators, this naive approach is not recommended because it provides biased estimators that converge at slower rates than the n−1/2 rate obtained in the parametric framework. A more appropriate approa-
ch has been developed in recent literature on treatment effects. Chernozhukov et al. (2018) provided a so-called double machine learning procedure to recover debiased estimators that achieve root-n convergence rates for the Average Treatment Effect (ATE) and Average Treatment Effect on the Treated (ATT). When the unexplained part in the Kitagawa-Oaxaca-Blinder decomposition can be interpreted as an ATT (Fortin et al., 2011), double machine learning can thus be used to estimate it with good statist-
ical properties (Strittmatter & Wunsch, 2021). Our main contribution can be summarized as follows: drawing on Rubin’s conceptual framework (Rubin, 1974) and reformulating the decomposition problem in terms of potential outcomes, we rewrite the unexplained part when the reference outcome is directly inspired by what is proposed by Neumark (1988). This means that we choose as a reference outcome a combination of the potential outcomes of the two groups, weighted by conditional probabilities of being-
 in each group. While the unexplained part can be analogous to an Average Treatment effect on the Treated (ATT) or an Average Treatment effect on the Untreated (ATU) when choosing standard reference outcomes, this is no longer the case when we choose this reference outcome. Therefore, to apply the double machine learning method, we check that the orthogonality condition remains satisfied for this specific object. Furthermore, we demonstrate that this new construction of the unexplained part, based-
 on this outcome, avoids any division by the propensity score. Thus, it becomes unnecessary to assume that the propensity scores remain far from 1 or 0, once the reference outcome is defined as a weighted average of the potential outcomes of the two groups. Nonetheless, adopting the reference outcome proposed by Neumark (1988) has important implications for the choice of explanatory variables, as discussed in the paper. The remainder of the article is structured as follows. In section 2, we presen-
t the general framework and discuss the choice of the reference outcome. We present an equilibrium reference outcome based on Neumark (1988). Section 3 is devoted to the identification strategy. The appropriate estimators are derived and it is shown that those based on the equilibrium reference outcome do not require the common support condition. Section 4 presents the empirical strategy, distinguishing the standard parametric approach and the proposed non-parametric approach. Section 5 shows two -
empirical illustrations. Finally, section 6 concludes.
3

2 The decomposition problem
2.1 General Framework
An individual may be either in group 1 or in group 0. We suppose groups to be two countries, two time periods or two subpopulations (e.g, females and males). Let D be a random variable with support XD = {0, 1} denoting the group of an individual. We assume that the mean outcome is higher in group 1 than in group 0, so that group 1 is considered the advantaged group and group 0 the disadvantaged group. This is not an assumption, but it will be convenient for interpreting the models. Indeed, the lab-
els of the two groups can always be interchanged to check it. One can express the problem in terms of potential outcomes, following the literature on treatment effects (Rubin, 1974). An individual in group 1 gets an outcome Y (1) that is observed. In contrast, the outcome Y (0) he would have received if he were in group 0 is not observed. For example, if the individual is a female, we only observe her wage as a female. Y obs is a random variable representing the outcome observed depending on the v-
alue of D and is supposed to be continuous:2
Y obs = Y (1)D + Y (0)(1 − D) (1)
Moreover, we assume that, in each group, the outcome may be explained by some individual characteristics X ∈ X . They may be unevenly distributed between both categories. For example, men and women may not have the same average level of education. We want to decompose the observed difference in means between a part explained and a part not explained by the characteristics. In general, the objective is to compare the outcome that individuals in the observed sample receive with an alternative outcom-
e Y (r) they could have received. In the simplest case, it can be the outcome received in the other group. Let ∆obs be the expected observed difference in outcomes:
∆obs : = E[Y obs | D = 1] − E[Y obs | D = 0] (2)
= E[Y (1) | D = 1] − E[Y (0) | D = 0]
By adding and subtracting E Y (r) | D = 0 and E Y (r) | D = 1 , we obtain
∆obs = E[Y (r) | D = 1] − E[Y (r) | D = 0]
| {z }
∆r
X
+ E[Y (1) | D = 1] − E[Y (r) | D = 1]
| {z }
∆r,1
S
− E[Y (0) | D = 0] − E[Y (r) | D = 0]
| {z }
∆r,0
S
(3)
Thus, a difference in means between two groups can be decomposed in three parts which we denote by:
• ∆r
X that can be explained by a different composition in terms of characteristics between both groups. For example, one group may have a higher average level of education, leading to a higher average wage.
2It is possible to extend the decomposition when Y obs is a limited dependent variable. In the case of a binary variable, one can assume an underlying probit model for example, and decompose the probability, as discussed in Fortin et al. (2011), section 3.5.
4

• ∆r,1
S , the unexplained advantage of group 1.
• −∆r,0
S , the unexplained disadvantage of group 0.
The decomposition of the observed difference in outcomes is sensitive to the choice of the reference outcome.
2.2 Choice of the reference outcome
2.2.1 Using the advantaged or disadvantaged group’s potential outcome as a reference
Thanks to the potential outcomes framework, we can bridge the gap between the inequality literature and the literature on treatment effects. When we choose as the reference outcome the potential outcome of one of the two groups, the unexplained component in decomposition analyses can formally resemble an ATT or an ATU. However, these analogies are purely notional. Binary variables such as gender or country of residence differ fundamentally from treatment assignments: they are not manipulable in an-
 experimental sense. There is no experimental framework in which such variables would be randomly assigned across individuals. Drawing a parallel between a group dummy and a treatment variable in observational studies is also problematic. Unlike the baseline or pre-treatment covariates typically used to ensure comparability in treatment effect estimation, the covariates used for the decomposition are not necessarily determined before the group variable. Taking Y (r) := Y (0) implies that, in a wor-
ld where individuals from both groups with the same characteristics receive identical outcomes, everyone obtains the potential outcome corresponding to the disadvantaged group Y (0). In this case, ∆0,0
S = 0. This leads to the decomposition:
∆obs = E[Y (0) | D = 1] − E[Y (0) | D = 0]
| {z }
∆0
X
+ E[Y (1) | D = 1] − E[Y (0) | D = 1]
| {z }
∆0,1
S (ATT)
(4)
Note that this is exactly the decomposition derived in Angrist and Pischke (2009), specifically in equation (3.2.1) of their book, in terms of Average Treatment effects on the Treated, ATT:= E[Y (1) − Y (0) | D = 1], and selection bias. Alternatively, one could consider that when people face no unexplained observed difference in means on the market, they all receive the outcome of the advantaged group, thus Y (r) := Y (1) and ∆1,1
S = 0. This leads to the following decomposition.
∆obs = E[Y (1) | D = 1] − E[Y (1) | D = 0]
| {z }
∆1
X
− E[Y (0) | D = 0] − E[Y (1) | D = 0]
| {z }
∆1,0
S (ATU)
) (5)
Here, the unexplained part of the difference in means is analogous to an Average Treatment effect on the Untreated, ATU:= E[Y (1) − Y (0) | D = 0]. The choice of the reference outcome is arbitrary, and the decomposition can be viewed as arbitrary as well. The estimations of the unexplained part ∆0,1
S (ATT) and ∆1,0
S (ATU) may differ significantly in practice. There is no general guidance on this choice (Fortin et al., 2011), and both estimations are often presented in empirical studies.
5

2.2.2 The equilibrium outcome
Building on the taste-based discrimination framework of Becker (1957) and Arrow (1972), Neumark (1988) shows that the Kitagawa-Oaxaca-Blinder decomposition can be derived from a theoretical model of employers’ discriminatory tastes. Setting Y (r) = Y (1) reflects the idea of “pure” discrimination against women, while setting Y (r) = Y (0) reflects the idea of “pure” nepotism toward men, that is, a willingness to hire men even at relatively higher wages. He also proposes a reference outcome where e-
mployers can be both discriminatory against females and nepotistic toward males. For an individual working in a given type of labor3 l, the reference outcome is defined as the weighted average: YNeumark(2) = wl Y (1) + (1 − wl) Y (0) (6)
where wl and (1 − wl) are the proportions of men and women working in labor type l. Here, the non-discriminatory wage is sensitive to the gender composition of each type of labor. This avoids hypotheses in employers’ tastes such that they require more profits to compensate for hiring females at males wage, or they are not willing to accept lower profits to hire males at females wage. With a finite number of types of labor (l = 1, . . . , L), much smaller than the number of observations (L ≪ N ), i-
t is shown that the estimation requires only the estimation of the log wage regression for the full sample. Therefore, the implementation of this method is restricted to the use of only a few categorical variables, in order to have different types of labor with enough observations in each of them. In the following, we extend the reference outcome in (6) to the case of a set of characteristics X, which may consist of many variables, either categorical or continuous. For an individual with a given s-
et of characteristics X, the equilibrium reference outcome is defined as the weighted average:
Y (2) = wX Y (1) + (1 − wX ) Y (0) (7)
where the weights are defined by the proportion of individuals who share the same set of characteristics in each group, that is, wX = P (D = 1 | X) (8)
In this more general setting, Y (2) is nonlinear and the estimation of the equilibrium outcome requires non-parametric or machine learning methods (see the following subsection and section 4). The equilibrium reference outcome aligns with the common notion of equal redistribution in economic inequality, which advocates for dividing a cake equally among a set of individuals. Indeed, when we consider several individuals who share the same set of characteristics X = x, the average equilibrium referen-
ce outcome is a weighted average of the outcome of individuals in each group. It corresponds to the total amount of outcome redistributed equally among individuals who share the same set of characteristics. Choosing Y (r) = Y (2), the decomposition in equation (3) becomes:
∆obs = E[Y (2) | D = 1] − E[Y (2) | D = 0]
| {z }
∆2
X
+ E[Y (1) | D = 1] − E[Y (2) | D = 1]
| {z }
∆2,1
S
− E[Y (0) | D = 0] − E[Y (2) | D = 0]
| {z }
∆2,0
S
(9)
3For Neumark (1988), “types of labor” are job categories, illustrated by the distinction between skilled versus unskilled jobs. Alternative definitions could be based on other criteria, such as employment sectors.
6

Thus, the decomposition consists of three parts. Neither the advantage ∆r,1
S nor the disadvantage
−∆r,0
S disappear from the unexplained part when r = 2 is chosen, unlike in the cases r ∈ {0, 1}.
The analogy between the unexplained part (∆r,1
S − ∆r,0
S ) and an object such as the ATT or ATU is no longer relevant.
2.2.3 Methodological choices to deal with a lack of common support
By choosing r ∈ {0, 1}, there is always a counterfactual quantity, never observed, to be estimated: either E Y (0) | D = 1 in the case r = 0, or E Y (1) | D = 0 in the case r = 1. If we take the example of the case r = 0, we would like to determine what individuals in the group D = 1 would receive if they were paid according to the model Y (0). A common support problem arises when, for certain combinations of covariates X observed in group D = 1, there are no individuals in group D = 0 sharing the-
se characteristics X. In other words, P D = 0 | X) = 0. In the absence of alter egos in the reference group, methodological choices are needed to estimate the counterfactual. The first solution that can be proposed is the most standard one in classical decompositions: extrapolation. If several individuals in group D = 1 are old, which is rarely or never observed in group D = 0, then Y (0) will be predicted outside the support of X | D = 0 on the basis of a linear relationship between the age and t-
he observed outcome in group D = 0. Hence, the actual reference outcome would be:
Extrapolation: Y (r) =
(
Y (0) if P(D = 0 | X) > 0
Y ̃ (0) if P(D = 0 | X) = 0 (10)
Y ̃ (0) corresponds to a counterfactual for which there is no observed alter egos in group D = 0 since P(D = 0 | X) = 0. Thus, it cannot be estimated on actual observations, in contrary of Y (0) that is observed for some individuals in group D = 0. The only way to make a guess about this wage would be to extrapolate Y ̃ (0) based on an estimation of Y (0). The extrapolation Y ̃ (0) requires additional assumptions, for instance the use of a parametric regression being stable outside the support of -
the sample used for the estimation. In a non-parametric regression framework, this approach is more problematic, as extrapolation outside the support is generally infeasible. An alternative approach is to remove observations without (enough) pairs in the reference group. In practice, performing such trimming involves considering the following reference outcome:
Trimming: Y (r) =
(
Y (0) if P(D = 0 | X) > α
Y (1) if P(D = 0 | X) ≤ α (11)
where α is small and arbitrarily chosen. In the treatment effect literature, trimming is often performed for α = 0.01 or α = 0.05. However, there is no consensus on how to select α. Putting (11) in (4) leads to replace Y (0) by Y (1) in the right component ∆0,1
S for the men without (enough) alter egos only. In expectation, this amounts to removing those observations. Thus, trimming can be viewed as a specific extrapolation, Y ̃ (0) = Y (1), where no discrimination is assumed outside the support of the reference group. In this paper, we consider setting r = 2, that is, we take the equilibrium outcome as the reference, as an alternative to extrapolation and trimming. An appealing feature of the equilibrium reference wage in (7)-(8) is that it is sensitive-
 to the gender composition of each profile. Thus, the reference wage for a profile that is predominantly female will be closer to the current wage for women, and vice versa. The equilibrium reference outcome Y (2) is smoothly designed and continuous. In contrast, the trimming reference outcome is discontinuous and changes abruptly
7

Figure 1: The effect of reference outcome selection on the unexplained component under limited common support
Note: On each graph, the reference outcome chosen is shown in black. This makes it possible to observe how each approach (extrapolation, trimming, and equilibrium outcome) deals with the limited common support problem occurring for large x. (Left) In the case of extrapolation, although there are few observations in the group 0 for x ≥ 0.75, the linear model is extended. (Middle) For trimming, it is considered that there is not enough information from x ≥ 0.75, and the distances between the two mod-
els are ignored for these individuals in group 1. (Right) Finally, in the case of the equilibrium outcome, all sample points (i.e., pooled sample observations) are compared with an average of the two potential outcomes models, weighted by the propensity score.
from Y (0) to Y (1) at a given threshold defined by α. In practice, the results are quite sensitive to the choice of α (Strittmatter & Wunsch, 2021). A nice feature of the equilibrium reference outcome is that such arbitrary preliminary choice is not required. Figure 1 illustrates the impact of the choice of the reference outcome on the difference in means decomposition with a lack of common support. Two sets of outcome values are drawn from linear regression models, for the advantaged group 1 and-
 disadvantaged group 0, and the conditional probability model is a logit model.4 This design illustrates the presence of very few pairs for high and low values of X. The unexplained part of the decomposition in (3) is based on E[Y (r)|D = d], for d ∈ (0, 1). The latter is usually obtained from the expectation of the counterfactual E[Y (r)|X], which is drawn with a black line in the figures (see next section for a discussion on the identification of the counterfactual). Figure 1 (left) shows the co-
unterfactual with the outcome of the disadvantaged group taken as reference outcome, E[Y (0)|X], in the case of extrapolation (black line). The counterfactual is extrapolated out of the support of the outcome values of group 0 in a continuous and smooth way, assuming that it is a linear function, E[Y (0)|X] = β0 +β1X. The unexplained part of the difference in means is given by the average of the deviations of group 1 observations from the counterfactual (orange vertical lines). It corresponds to t-
he standard Kitagawa-Oaxaca-Blinder approach with r = 05.
4Y (1) = g(1, X) + ε1 where g(1, X) = 0.3 + 0.42 X and ε1 ∼ N (0, 0.01) and Y (0) = g(0, X) + ε0 where g(0, X) = 0.2 + 0.2 X and ε0 ∼ N (0, 0.015) and P (D = 1|X) = 1/(1 + exp(4 − 8 X)) 5Note that, in the classic approach, it is common to re-estimate both models using linear regression, as discussed in section 4.1.1.
8

Figure 1 (middle) shows the counterfactual with the outcome of the disadvantaged group taken as the reference outcome, in the case of trimming (black lines). Below the threshold X = 0.75, the counterfactual is given by the conditional outcome of the disadvantaged group E[Y (0)|X]. Above the threshold, it is given by the conditional outcome of the advantaged group E[Y (1)|X]. This counterfactual is defined by a discontinuous line, with a jump at the selected threshold. The unexplained part of the -
difference in means is given by the average of the deviations of group 1 observations from the counterfactual (orange vertical lines). It is clear in this example that, by trimming observations with the largest deviations, the unexplained part becomes smaller than that obtained by extrapolation. Figure 1 (right) shows the counterfactual with the equilibrium reference outcome, E[Y (2)|X] (black curve). It is a continuous and smooth function, moving from the outcome values of the disadvantaged group-
 for low values of X to the outcome values of the advantaged group for high values of X. This counterfactual takes into account the balance between the two groups, for given X. The unexplained part of the difference in means is given by the average of the deviations of group 1 observations from the counterfactual (orange vertical lines) minus the average of the deviations of group 0 observations from the counterfactual (green vertical lines). It is worth noting that the counterfactual is non-linea-
r, even if Y (0) and Y (1) are drawn from two linear regression models. This is because X is not categorical and does not define a limited number of profiles. Therefore, using the equilibrium reference outcome (7) requires non-parametric or machine learning estimation methods to estimate the counterfactual. Finally, interpreting the equilibrium reference wage in (7) as “non-discriminatory” in gender gap analysis requires some caution. Indeed, the effect of discrimination is to redistribute wages w-
ithin each profile, defined by a set of characteristics X. This implies that:
• With only women (men) for a given profile, the equilibrium outcome is that of those women (men), and there is no supposed discrimination (nepotism) toward them. The tendency for women to be concentrated in lower-paid occupations, or the fact that when an occupation gets more feminized, the wages may decrease, are not captured as part of the discrimination.
• The estimate of discrimination is sensitive to differences in the distribution of characteristics across men and women. However, if the characteristics are unevenly distributed among groups due to other mechanisms, such as unequal access to education, the intermediate wage also hides this discrimination.
• The equilibrium wage does not take into account selection bias. Individuals with specific characteristics can have unequal chances of being in the sample in both groups - for example, men may participate more or less in the labor market than women, depending on the expected returns of their characteristics.
Each decomposition, either (3), (4), or (5), requires to estimate observable and counterfactual quantities. The next session presents identification strategies for both.
3 Identification strategy
We will focus here on the unexplained part of the observed difference in means defined in (3):
δr = ∆r,1
S − ∆r,0
S (12)
The targeted parameters are the unexplained parts ∆r,1
S and ∆r,0
S . Hence, we aim at estimating
∆r,d
S with d ∈ {0, 1}, which can be written as a difference between an observable mean and a counterfactual mean:
9

∆r,d
S = E Y (d) | D = d
| {z }
Observabled
− E Y (r) | D = d
| {z }
Counterfactualr,d
(13)
When r = d, it is equal to zero. Thus, we let r ∈ {0, 1, 2} \ d herafter. The observable part can be easily estimated by a sample mean. Indeed, since Y (d) is the outcome always observed in group D = d, from the law of total probability we have:
Observabled : = E Y (d) | D = d = E Y obs | D = d = E
"
Y obs 1{D = d}
P(D = d)
#
(14)
The central problem in (13) is the identification of the counterfactual mean, which is unobserved. The different strategies we will consider are:
• Outcome regression: The reference outcome is obtained by a regression model, conditional on a set of covariates, E[Y (r)|X].
• Inverse Probability Weighting (IPW): The reference outcome is obtained by reweighting through the conditional assignment model to one of the two groups P D = d | X).
• Augmented Inverse Probability Weighting (AIPW): combining both strategies, to get an estimator which is consistent if at least one of the models is well-specified.
The outcome regression approach is well-known in the literature on inequality; it is used in the standard Kitagawa-Oaxaca-Blinder decomposition method. The IPW and AIPW are often used in the treatment effects literature. These strategies are detailed below and require more details on either the outcome or the probability model. We will see that the identification of the counterfactual in (13) requires the following assumption:
Assumption 1. [ignorability] For r ∈ {0, 1},
Y (r) ⊥⊥ D | X (15)
where ⊥⊥ denotes statistical independence (Rosenbaum & Rubin, 1983). It is also known as the conditional independence assumption or unconfoundedness (Imbens, 2004).
This condition states that the potential outcome is independent of group membership D, conditional on covariates X. It implies mean independence:
E[Y (r)|X] = E[Y (r)|X, D = 0] = E[Y (r)|X, D = 1] (16)
Therefore, within the subpopulation of individuals with the same covariates, the difference in the distributions of the observed outcomes between individuals from the two groups fairly represents the difference in means in this subpopulation (Imbens & Rubin, 2015). This is because within this subpopulation, the individuals in the two groups are both random samples from that subpopulation.
10

3.1 Outcome regression
3.1.1 Standard reference outcomes (r ∈ {0, 1})
With the law of iterated expectations and assumption 1 [ignorability] for Y (r), the counterfactual in (13) can be related to the observed outcome:
Counterfactualr,d = E Y (r) | D = d (17)
= E E Y (r) | X) | D = d (18)
= E E Y (r) | X, D = r | D = d (19)
= E E Y obs | X, D = r | D = d (20)
=E
"
E Y obs | X, D = r 1{D = d}
P(D = d)
#
(21)
Let us define the conditional expectation by a regression function:
E Y obs | X, D = r = g(r, X) (22)
From (13), (14), (21) and (22), the unexplained advantage of group 1 (∆1,0
S ) and the unexplained
disadvantage of group 0 (−∆0,1
S ) can be identified with:
∆r,d
S =E
"
Y obs − g(r, X) 1{D = d}
P(D = d)
#
, r ̸= d (23)
3.1.2 Equilibrium reference outcome (r = 2)
We first show that the ignorability assumption allows us to link the potential equilibrium outcome to the observed outcome, while Y (2) is never observed directly in the D = 0 or D = 1 group.
Proposition 1. Under assumption 1 [ignorability] for Y (0) and Y (1), we have
E[Y (2)|X] = E[Y obs|X] (24)
Proof. From (1), we have
E Y obs | X = E DY (1) + (1 − D)Y (0) | X
= E Y (1) | X, D = 1 P D = 1 | X + E Y (0) | X, D = 0 P D = 0 | X
Then, using assumption 1 [ignorability] for Y (1) and Y (0):
E Y obs | X = E Y (1) | X P D = 1 | X + E Y (0) | X P D = 0 | X
= E Y (1)P D = 1 | X + Y (0)P D = 0 | X | X
= E Y (2) | X
11

With (24), ignorability and the law of iterated expectations, the counterfactual in (13) can be related to the observed outcome as follows:
Counterfactual2,d = E Y (2) | D = d (25)
= E E[Y (2) | X, D = d] | D = d (26)
= E E[Y (2) | X] | D = d (27)
= E E[Y obs | X] | D = d (28)
=E
"
E[Y obs | X] 1{D = d}
P(D = d)
#
(29)
Let us define the conditional expectation by a regression function:
E Y obs | X = g(2, X) (30)
From (13), (14), (29) and (30), the unexplained advantage of group 1 (∆2,1
S ) and the unexplained
disadvantage of group 0 (−∆2,0
S ) can be identified with:
∆2,d
S =E
"
Y obs − g(2, X) 1{D = d}
P(D = d)
#
(31)
3.2 Inverse Probability Weighting
The main idea of the Inverse Probability Weighting (IPW) is that an expectation computed from a subpopulation can be corrected to reflect the expectation for the whole population. Counterfactualr,d in (13) is a conditional expectation. Therefore, IPW involves finding weights π(X) such that:
Counterfactualr,d = E[Y (r) | D = d] = E[Y (r)π(X) | D = r] (32)
3.2.1 Standard reference outcome (r ∈ {0, 1})
When the outcome of the advantaged or disadvantaged group is taken as the reference outcome, an additional condition is required.
Assumption 2. [common support]: for r ∈ {0, 1}
P D = r | X > 0 (33)
For example, to estimate E Y (1) − Y (0) | D = 1 , this requires: P D = 0 | X > 0. The consequence of this assumption is that there is no case where a specific set of individual characteristics forces the individual to be found in the group D = 1 only. In other words, there are alter-egos in the group D = 0 for every individual in group D = 1.6 In practice, IPW estimators require one to drop observations with extreme propensity scores, so that the resulting estimation does not depart from the trut-
h due to a division by zero. This causes a lack of observations that could be avoided in the standard Kitagawa-Oaxaca-Blinder decomposition.
6In section 4.1.1, we discuss in detail the links between this assumption in the context of inverse probability weighting, and the assumption of invertibility of X′X generally made in the case of extrapolation.
12

Under Assumptions 1 [ignorability] and 2 [common support], using Bayes’ rule and the law of iterated expectations, one can show that the weights needed in (32) for (r, d) ∈ {0, 1}2 are:7
π(X) = P(D = r)
P(D = r | X)
P(D = d | X)
P(D = d) (34)
Using (34) in (32) and the law of total probability, this leads to the following counterfactual:
Counterfactualr,d = E
"
Y (r)1(D = r)
P(D = r | X)
P(D = d | X)
P(D = d)
#
(35)
=E
"
Y obs1(D = r)
P(D = r | X)
P(D = d | X)
P(D = d)
#
(36)
Let us define the conditional probabilities by a regression model:
P D = d | X = p(d, X) (37)
From (13), (14), (36) and (37), the unexplained advantage of group 1 (∆0,1
S ) and the unexplained
disadvantage of group 0 (−∆1,0
S ) can be identified:
∆r,d
S =E
"
1{D = d}
P(D = d) Y obs − 1{D = r} p(d, X)
P(D = d) p(r, X) Y obs
#
(38)
It is clear from this equation that p(r, X) must be different from zero. The common support condition is then required to identify the unexplained part of the mean decomposition.
3.2.2 Equilibrium reference outcome (r = 2)
Similarly, under ignorability, we can derive π(X) such that equation (32) is satisfied in the case r = 2, building on Kline (2011):
Counterfactual2,d = E Y (2) | D = d (39)
=
Z
E Y (2) | D = d, X = x dFX|D=d(x) (40)
=
Z
E Y (2) | X = x dFX|D=d(x) using ignorability (41)
=
Z
E Y obs | X = x dFX|D=d(x) reusing equation (24) (42)
=
Z
E Y obs | X = x P(D = d | X = x)
P(D = d) dFX (x) (43)
by the definition of conditional distributions
=E
"
Y obs P(D = d | X)
P(D = d)
#
(44)
7See for example Kline (2011) for a proof.
13

From (13), (14), (37) and (44), the unexplained advantage of group 1 (∆2,1
S ) and the unexplained
disadvantage of group 0 (−∆2,0
S ) can be identified:
∆2,d
S =E
"
1{D = d}
P(D = d) Y obs − p(d, X)
P(D = d) Y obs
#
(45)
Unlike in (38), no restriction is required on p(·, X) as it does not appear at the denominator. Therefore, the assumption 2 [commmon support] is not required to identify the unexplained part of the observed difference in outcomes.
3.3 Augmented Inverse Probability Weighting
A doubly-robust estimator is consistent if at least one of the models is correctly specified, either the outcome model or the probability model (Robins & Rotnitzky, 1995). Thus, it combines both strategies. The Augmented Inverse Probability Weighting (AIPW) estimator is the most commonly known doubly robust estimator, and typically relies on parametric regressions to estimate the outcome model and the propensity score.8 It provides an estimator for Counterfactualr,d.
3.3.1 Standard reference outcomes (r ∈ {0, 1})
When the outcome of the advantaged or disadvantaged group is taken as reference outcome, r ∈ {0, 1}, providing that assumption 2 [commmon support] holds, the estimator of the counterfactual mean is equal to:9
Counterfactualr,d = E
"
Y obs − g(r, X) 1(D = r)
P(D = d)
p(d, X)
p(r, X) + 1(D = d)
P(D = d) g(r, X)
#
(46)
=E
"
Y obs1(D = r)
P(D = d)
p(d, X)
p(r, X) + 1(D = d) − p(d, X)
p(r, X)P(D = d)
!
g(r, X)
#
(47)
When g(r, X) is correctly specified, the first term in (46) disappears and the counterfactual reduces to that of the outcome regression approach in (21). When p(r, X) is correctly specified, the second term in (47) disappears and the counterfactual reduces to that of the IPW in (36). From (13), (14) and (46), the unexplained advantage of groups 1 (∆1,0
S ) and the unexplained
disadvantage of group 0 (−∆0,1
S ) can be identified:
∆r,d
S =E
"
Y obs − g(r, X) 1(D = d)
P(D = d) − 1(D = r)
P(D = d)
p(d, X)
p(r, X)
!#
(48)
It is clear from this equation that p(r, X) must be different from zero and that the common support condition is required to identify the unexplained part of the mean decomposition.
8In fact, Kline (2011) shows that the standard Kitagawa-Oaxaca-Blinder estimator constitutes a propensity score re-weighting estimator based upon a linear model for the conditional odds of being treated. This includes assignment models with a latent log-logistic error structure and may yield negative weights. As such, it is a “doubly robust” estimator.
9(46) is equal to E
h Y obs1(D=r) P(D=d)
p(d,X )
p(r,X) + 1(D=d)
P(D=d) − p(d,X)
p(r,X )
1(D=r)
P(D=d) g(r, X)
i
from which we have (47).
14

3.3.2 Equilibrium reference outcome (r = 2)
When the equilibrium outcome is taken as reference outcome, r = 2, the estimator of the couterfactual mean is equal to:
Counterfactual2,d = E
"
Y obs − g(2, X) p(d, X)
P(D = d) + 1(D = d)
P(D = d) g(2, X)
#
(49)
=E
"
Y obsp(d, X)
P(D = d) + 1(D = d) − p(d, X)
P(D = d)
!
g(2, X)
#
(50)
When g(r, X) is correctly specified, the first term in (49) disappears and the counterfactual reduces to that of the outcome regression approach in (29). When p(r, X) is correctly specified, the second term in (50) disappears in average and the counterfactual reduces to that of the IPW in (44). From (13), (14) and (49), the unexplained advantage of groups 1 (∆2,0
S ) and the unexplained
disadvantage of group 0 (−∆2,1
S ) are identified:
∆2,d
S =E
"
Y obs − g(2, X) 1(D = d)
P(D = d) − p(d, X)
P(D = d)
!#
(51)
Unlike in (48), no restriction is required on p(·, X) as it does not appear at the denominator. Therefore, assumption 2 [commmon support] is not required to identify the unexplained part of the observed difference in outcomes.
4 Empirical strategy
In the previous section, the unexplained parts of each group are identified. Estimators of the unexplained part of the observed difference in (12) can then be derived, replacing expectations and functions g(r, ·) and p(d, ·) by sample means and estimations gˆ(r, ·) and pˆ(d, ·). For the different reference outcomes, we obtain the estimators below (see details in Appendix A).
• When r = 1, with the outcome of the advantaged group 1 taken as reference outcome, the unexplained part of observed difference in outcomes (12) can be estimated with:
δˆreg
1 =− 1
n0
n
X
i=1
Y obs
i − gˆ(1, Xi) (1 − Di), (52)
δˆipw
1 =1
n0
n
X
i=1
Y obs
i
Di − pˆ(1, Xi)
pˆ(1, Xi) (53)
δˆaipw
1 =1
n0
n
X
i=1
Y obs
i − gˆ(1, Xi) Di − pˆ(1, Xi)
pˆ(1, Xi) (54)
where n0 is the number of individuals in group 0 and n is the total number of individuals.
• When r = 0, with the outcome of the disadvantaged group 0 taken as reference outcome, the
15

unexplained part of the observed difference in outcomes (12) can be estimated with:
δˆreg
0 =1
n1
n
X
i=1
Y obs
i − gˆ(0, Xi) Di (55)
δˆipw
0 =1
n1
n
X
i=1
Y obs
i
Di − pˆ(1, Xi)
1 − pˆ(1, Xi) (56)
δˆaipw
0 =1
n1
n
X
i=1
Y obs
i − gˆ(0, Xi) Di − pˆ(1, Xi)
1 − pˆ(1, Xi) (57)
where n1 is the number of individuals in group 1.
• When r = 2, with the equilibrium outcome taken as reference outcome, the overall unexplained part of the observed difference in outcomes (12) combines the unexplained parts of both the advantaged and disadvantaged groups. It can be estimated with:
δˆreg
2 =1
n1
n
X
i=1
[Y obs
i − gˆ(2, Xi)]Di − 1
n0
n
X
i=1
[Y obs
i − gˆ(2, Xi)](1 − Di) (58)
δˆipw
2= 1
n1
+1
n0
n
X
i=1
Y obs
i Di − pˆ(1, Xi) (59)
δˆaipw
2 =1
n1
+1
n0
n
X
i=1
Y obs
i − gˆ(2, Xi) Di − pˆ(1, Xi) (60)
Note that the weights from the IPW and AIPW estimators may not sum up to one in finite sample. One can rewrite the IPW and AIPW estimators as a function of weights that can be normalized to sum up to one in this case. Busso et al. (2014) show that normalized IPW estimators with r = 0 and r = 1 perform often better than unnormalized IPW estimators in finite samples. We show normalized IPW and AIPW estimators for r = {0, 1, 2} in Appendix A. All these estimators require Assumption 1 [ignorability]. -
Moreover, Assumption 2 [common support] is required for r = 0 and r = 1. Therefore, trimming observations when pˆ(1, Xi) is close to 0 when r = 1 or 1 when r = 0 is often performed in practice. It is not required for r = 2.
4.1 Parametric approach
Parametric regression models can be estimated efficiently under regular assumptions. However, the unbiasedness and consistency of the estimators depend on the correct specification of the model.
4.1.1 The standard decomposition approach
The standard decomposition approach is implemented with the estimators in (52), (55) and (58), where the outcome regression g(r, ·) is estimated from a parametric linear model:
Assumption 3. [linear outcome]: Let r ∈ {0, 1, 2}, the outcome regression is defined as
Y (r) = g(r, X) + εr = Xβr + εr (61)
where βr is a k-vector of unknown coefficients and εr the error term. Since Y (r) is observed for individuals in group r only, the model will be estimated on the group D = r when r ∈ {0, 1}, and on the full sample when r = 2.
16

Assumption 4. [exogeneity]: Let r ∈ {0, 1, 2}, we have
E(εr|X) = 0 (62)
With the exogeneity assumption, (61) is equivalent to (22) and (30), and the regression function g(r, .) can be estimated consistently from the linear outcome model above. The unknown coefficients βr are usually estimated by OLS, when X′X is invertible. In the case r ∈ {0, 1}, under assumptions 3 [linear outcome] and 4 [exogeneity], the unexplained part of the observed difference can be estimated with δˆreg
1 in (52) or δˆreg
0 in (55), where gˆ(1, Xi)
and gˆ(0, Xi) are replaced, respectively, by OLS estimators Xiβˆ1 and Xiβˆ0. In the case r = 2, even if the outcome regression in each group is linear, g(2, ·) is not necessarily linear.10 This is illustrated in Figure 1 with X continuous (see section 2.2.3). Nonetheless, Neumark (1988) shows that if X defines a finite number of types of labor or workers, the equilibrium reference outcome can be estimated from a linear regression model, g(2, X) = Xβ, by regressing Y obs on X from the full sample. -
Therefore, the unexplained part of the observed difference can be estimated with δˆreg
2 in (58), where gˆ(2, Xi) is replaced by Xiβˆ. However, the case where X defines only a few categories is rather restrictive, and this approach is not often used in empirical studies. Alternative approach: The estimator of the unexplained part of the decomposition proposed by Oaxaca (1973) and Blinder (1973) can be obtained by replacing Y obs
i by Xiβˆ0 in (52), or Y obs
i by
Xiβˆ1 in (55). For instance, with r = 0, the estimator of the unexplained part of the decomposition (55) becomes
δˆreg
0 =1
n1
n
X
i=1
[Y obs
i − Xiβˆ0]Di = 1
n1
n
X
i=1
[Xiβˆ1 − Xiβˆ0]Di = X ̄1(βˆ1 − βˆ0) (63)
where βˆ1 (resp. βˆ0) is the OLS estimator of β1 (resp. β0) obtained from a regression of Y obs on X in group 1 (resp. group 0). In this approach, outcome regressions are estimated for both groups. The first advantage in the linear case is that the resulting decomposition is directly interpretable. The second advantage is that, if the same mistake is made in both models, such as omitting a variable that linearly affects both outcomes in the same proportions, then the resulting difference will be r-
obust to this misspecification. However, a different set of assumptions is required. Indeed, assumption 4 [exogeneity] can be slightly relaxed, but assumptions 3 [linear outcome] for both r = 0 and r = 1 are required. Invertibility versus common support: As indicated in section 3.2.1, the common support assumption is made when using the IPW approach in the r ∈ {0, 1} case. In the case of extrapolation, this assumption is not necessary, but the invertibility of X′X is assumed instead when using OLS-
 to estimate the regression. Although these are two fundamentally different hypotheses, violations of both can arise from similar situations. Suppose we assume r = 1. In this case, the counterfactual to be predicted is E Y (1) | D = 0 . For extrapolation, a prediction model must be estimated on the D = 1 subgroup, then predicted on the D = 0 group. Suppose that there exists Xk, a dummy variable in the model which indicates that the individual has obtained diploma k if Xk = 1, and suppose that all -
members of group D = 1 have obtained diploma k, and that only some members of group D = 0 have received it. Let’s also assume that Xk is a determinant of Y (1). The effect of Xk, omitted from the linear regression estimated by OLS to invert X′X, will be captured in the intercept. This does not prevent accurate prediction of Y (1) in group D = 0 for individuals
10Indeed, with assumption 3 [linear outcome] for both r = 0 and r = 1 , we have: g(2, X) = p(1, X)Xβ1 + p(0, X)Xβ0 which is not linear, except in two cases: if p(1, X) does not depend on X ; or if β1 = β0 except for the intercept.
17

who have obtained diploma k. However, it fails to provide valid predictions of Y (1) for individuals in group D = 0 who do not hold the diploma. Indeed, the lack of variation in Xk in the other group makes it impossible to estimate Y (1) for this subgroup. At the same time, denoting X−k the set of covariates deprived of Xk, P(D = 1 | Xk = 0, X−k) = 0, violating the common support assumption. The complete absence of alter egos in the reference group (D = 1) for a subgroup in D = 0 simultaneously u-
ndermines both strategies, even though the formal assumptions they rely on differ in general. In other words, the same data configuration can simultaneously violate both the invertibility and common support assumptions, although in other cases one assumption may hold while the other fails.
4.1.2 Approaches based on the propensity score
The previous standard decomposition approach requires the correct specification of the reference outcome regression model. Estimators based on the IPW or the AIPW strategies allow relaxing this hypothesis. In the parametric case, the estimation of the propensity score is often obtained by maximum likelihood from a probit or logit model:
Assumption 5. [logit/probit probability]: Assume p(1, X) to be characterized by the unknown parameters β ∈ Rk where k is the number of columns of X
p(1, X) = F (Xβ) (64)
where F is a specified function. It can be the logistic function F (Xβ) = 1
1+e−Xβ leading to the logit regression model, or the cumulative distribution function of the standard Normal distribution F (Xβ) = √12π
R Xβ
−∞ e−t2/2dt leading to the probit regression model.
The IPW approach relies on the correct specification of a parametric model for the propensity score p(1, X), defined in (37). In the case r ∈ {0, 1}, under assumptions 1 [ignorability], 2 [common support] and 5 [logit/probit], the unexplained part of the observed difference can be estimated with δˆipw
1 in (53) and δˆipw
0 in (56),
where pˆ(1, Xi) is replaced by the maximum likelihood estimator F (Xiβˆ). In practice, observations are trimmed when F (Xiβˆ) is close to 0 or 1. In the case r = 2, under the same assumptions, except assumption 2 [common support], the unexplained part of the observed difference can be estimated with (59). It is worth noting that this estimator does not require any restriction on the shape of the outcome regression and remains valid even when the propensity score takes values equal to 0 or 1. There-
fore, with a correct specification of the propensity score model, δˆipw
2 in (59) permits to obtain an estimation of the unexplained part of the decomposition based on the Neumark’s reference outcome, without X being restricted to a few number of categories and without trimming observations.
The AIPW approach combines both strategies. The resulting estimators are doubly robust, meaning that they remain consistent if either the outcome model g(r, ·) or the propensity score model p(1, ·) is correctly specified. In the case r ∈ {0, 1}, under assumptions 2 [common support] and either 3 [linear outcome] and 4 [exogeneity] or either 1 [ignorability] and 5 [logit/probit], the unexplained part of the observed difference can be consistently estimated with δˆaipw
1 in (54) and δˆaipw
0 in (57) using a parametric
approach. In practice, observations are trimmed when pˆ(1, Xi) = F (Xiβˆ) is close to 0 or 1. In the case r = 2, the AIPW estimator remains consistent as long as either the outcome regression model on the pooled sample or the propensity score model is correctly specified. Thus,
18

under the assumptions 3 [linear outcome] and 4 [exogeneity] with r = 2, or under the assumptions 1 [ignorability] and 5 [logit/probit], the unexplained part of the observed difference can be estimated with δˆaipw
2 in (60). Consequently, no trimming is required.
4.2 Machine learning approach
Supervised machine learning methods predict an outcome Y obs using covariates X. Here, we will use the term machine learning methods to refer to classical methods such as lasso, ridge, random forests, boosting, or neural networks (see Hastie et al. 2005). Linear regression estimated by OLS and logit/probit models estimated by maximum likelihood may be presented as basic methods in standard textbooks. However, the term “machine learning” more generally refers to flexible methods capable of capturin-
g nonlinear relationships between covariates and the outcome, interaction effects between variables on the outcome, and/or selecting relevant covariates for models. These methods can therefore be used to predict E Y obs | X , E Y obs | X, D = d for any d ∈ {0, 1}, or P D = d | X for any d ∈ {0, 1}. This is why they can be considered as alternatives or extensions to the parametric methods presented in the previous sections. However, these non-parametric methods are often based on a bias/variance tr-
adeoff and therefore provide biased estimates with slower convergence rates than parametric models. This may not be an issue when the focus is on prediction, but it may be problematic when the quality of the estimation is key and inference is required, as in the estimation of a treatment effect. In our application, the parameter of interest is not directly the quantity predicted by supervised machine learning techniques. Rather, we aim to estimate it using plug-in strategies based on either an est-
imation for the outcome model, the propensity score model, or both. Since these naive plug-in approaches neither guarantee convergence to the target value at a sufficient rate nor allow for the construction of valid confidence intervals or the asymptotic normality of the estimators, alternative strategies have been proposed in the literature to adapt plug-in methods estimated via machine learning while preserving desirable properties for statistical inference. Chernozhukov et al. (2018) developed -
a theory of inference with machine learning methods and proposed a double/debiased
Machine Learning method providing estimators that can achieve √n-consistency and asymptotic Normality. Let θ0 be the true value of a low-dimensional parameter of interest and η0 the true
nuisance parameter. In our decomposition framework, θ0 would be ∆r,d
S and η0 would be g(r, ·) and p(d, ·), for r ∈ {0, 1, 2} and d ∈ {0, 1}. The double/debiased machine learning is based on two crucial ingredients: the Neyman orthogonality condition and cross-fitting.
Neyman orthogonality: Let us consider scores ψ(.) that satisfy the following identification condition: E[ψ(W ; θ0, η0)] = 0 (65)
and the Neyman orthogonality condition
∂
∂c E[ψ(W ; θ0, η0 + c(η − η0)]
c=0
= 0 (66)
where W = (Y obs, D, X) and c ∈ [0, 1). An estimator of the parameter of interest θ0 can be obtained from the empirical analog of (65) with η0 replaced by a machine learning estimation ηˆ. The orthogonality condition (66) ensures the estimator of θ0 to be insensitive to small mistakes in the estimation of nuisance parameters. Chernozhukov et al. (2018) show that, with scores defined by (65) and (66) and nuisance parameters quite well estimated by ηˆ,11 the estimator of θ0 obtained
11It is required that ηˆ converges at a rate faster than n−1/4. This rate is achieved by many ML methods.
19

from
1
n
n
X
i=1
ψ(Wi; θˆ, ηˆ) = 0 is asymptotically Normal √n(θˆ − θ0) −d→ N (0, σ2) (67)
where σ2 = E[ψ2(Wi; θ0, η0)] and n it the total number of observations in the sample.
Cross-fitting: To avoid overfitting, often associated with machine learning methods, the parameter of interest and the nuisance parameters should be estimated from two different samples. Let us consider K replications, where an estimator of θ0 is obtained on a random subsample Ik
with nk observations from
1
nk
X
i∈Ik
ψ(Wi; θˆk, ηˆk) = 0 (68)
while the nuisance functions ηˆk are estimated from an auxiliary sample, which includes all observations that are not in Ik. This can be done for each replication. Finally, the parameter of interest
θ0 can be estimated by averaging all θˆk
θˆ = 1
K
K
X
k=1
θˆk (69)
and the variance of θˆ can be estimated with σˆ2/n where
σˆ2 = 1
K
K
X
k=1
1
nk
X
i∈Ik
ψ2(Wi; θˆk, ηˆk) (70)
Hence, the standard error of θˆ is
se(θˆ) = √σˆn (71)
Estimation and inference of a parameter of interest can then be made with good properties in a quite general framework. It is known from Chernozhukov et al. (2018) that the score functions based on the AIPW estimators δˆaipw
1 in (54), δˆaipw
0 in (57) satisfy the Neyman orthogonality condition. Importantly,
we extend this result by proving that the estimator δˆaipw
2 in (60) which corresponds to the unexplained component of the decomposition when using Neumark (1988)’s equilibrium outcome as the reference, also satisfies the Neyman orthogonality condition. Thus, these estimators can be used with machine learning methods and cross-fitting to estimate the unexplained part of the observed difference in outcomes, as detailed in Algorithm 1.
4.2.1 Standard reference outcomes (r ∈ {0, 1})
When the outcome of the disadvantaged group is taken as reference outcome, r = 0, the score function is equal to
ψ0(W ; δ, η) := Y obs − g(0, X) 1(D = 1)
P(D = 1) − 1(D = 0)
P(D = 1)
p(1, X)
p(0, X) − 1(D = 1)
P(D = 1) δ (72)
where p(0, X) = 1 − p(1, X), and the nuisance functions are η = {g(r, ·), p(r, ·)}. Chernozhukov et al. (2018) show that the score function ψ0 satisfies the identification condition (65) and the
20

Algorithm 1 Machine Learning Estimation of the Unexplained Part
Require:
Data (Yi, Di, Xi) for i = 1, . . . , N , where Yi is the outcome, Di is the group, and Xi is a vector of covariates. r ∈ {0, 1, 2}: choice of a reference outcome pthresh: threshold value for trimming, close to 1 if r = 0 and close to 0 if r = 1. This threshold is not required for r = 2 K: number of repetitions of the cross-fitting procedure. Ensure: Estimated unexplained part θb depending on the choice of r. 1: for k = 1 to K do
2: Take a random subsample Ik of the full sample I, and define the auxiliary sample Ic
k ≡ I\Ik which includes all observations that are not in Ik. 3: First stage. Estimate the nuisance functions g(r, .) and p(1, .) from the auxiliary subsample Ic
k, denoted gˆc
k(r, .) and pˆc
k(1, .), with standard machine learning methods, as lasso, ridge, random forests, boosting or neural networks. if r = 0 then Trim the data by removing observations in Ik for which pˆc
k(1, Xi) > pthresh
if r = 1 then Trim the data by removing observations in Ik for which pˆc
k(1, Xi) < pthresh
4: Second stage. Compute θbk the estimator of the unexplained part of the decomposition from the subsample Ik, based on (54) if r = 1, (57) if r = 0, and (60) if r = 2: 5: end for
6: Compute the final estimator as the average of the K estimates: θb = 1
K
PK
k=1 θbk
orthogonality condition (66).12 The estimator of δ is derived from (65), by setting the expectation of (72) equal to zero. Since E[1(D = d)] = P(D = d), it is easy to see that the estimator of δ is equal to (48) with r = 0 and d = 1. When the outcome of the advantaged group is taken as reference outcome, r = 1, the score function is equal to
ψ1(W ; δ, η) := Y obs − g(1, X) 1(D = 0)
P(D = 0) − 1(D = 1)
P(D = 0)
p(0, X)
p(1, X) + 1(D = 0)
P(D = 0) δ (73)
The score function ψ1 satisfies the identification condition (65) and it respects the orthogonality condition (66) as shown by Chernozhukov et al. (2018). Indeed, ψ1 can be obtained by switching the role of the two groups in (72) and by changing the sign of the second component. The empirical scores are, respectively, equal to
ψ0(W ; δˆaipw
0 , ηˆ) = Y obs − gˆ(0, X) nD
n1
− n(1 − D) pˆ(1, X)
n1[1 − pˆ(1, X)] − nD
n1
δˆaipw
0 (74)
ψ1(W ; δˆaipw
1 , ηˆ) = Y obs − gˆ(1, X) n(1 − D)
n0
− nD[1 − pˆ(1, X)]
n0 pˆ(1, X) + n(1 − D)
n0
δˆaipw
1 (75)
They can be used to obtain variances of the estimators, by calculating the empirical variance of these scores, divided by n.
var(δˆaipw
r )= 1
n2
n
X
i=1
ψ2
r (W, δˆaipw
r , ηˆ) (76)
12The score function ψ0 in (72) is similar to equation (5.4) in Chernozhukov et al. (2018) with g ̄(X) = g(0, X), m(X) = p(0, X) and p = P(D = d).
21

Therefore, appropriate estimators of the unexplained part of the difference in means with the reference outcome taken from group r = 0 (ATT) or group r = 1 (ATU) are obtained with the AIPW estimators δˆaipw
1 in (54) or δˆaipw
0 in (57), with variances obtained from (74)-(76).
4.2.2 Equilibrium reference outcome (r = 2)
When the equilibrium outcome is taken as reference outcome, r = 2, let us consider the score function:
ψ2(W ; δ, η) := 1
P(D = 1) + 1
P(D = 0)
!
Y obs − g(2, X) D − p(1, X) − δ (77)
where η = {g(2, ·), p(1, ·)}. This score satisfies the identification condition (65) and the orthogonality condition (66) (see proof in Appendix B).13. The estimator of θ is derived from (65), by setting the expectation of (77) equal to zero. The empirical analog of θ is equal to the AIPW estimator in (107) and then in (60). The empirical scores are equal to:
ψ2(W ; δˆaipw
2 , ηˆ) = n
n1
+n
n0
Y obs − gˆ(2, X) D − pˆ(1, X) − δˆaipw
2 (78)
They can be used to obtain variances of the estimators, by calculating the empirical variance of these scores, divided by n. Therefore, an appropriate estimator of the unexplained part of the difference in means with the equilibrium reference outcome can be obtained with the AIPW estimator δˆaipw
2 in (60), with variance obtained using the empirical scores (78) in (70), combined with cross-fitting.
4.3 Practical considerations
We discuss several practical considerations: calibration, trimming and the use of pooled regression for the equilibrium reference outcome.
4.3.1 Calibration
The use of machine learning models to estimate propensity scores requires some caution. Unlike parametric logit models, ML models for classification are generally not well-calibrated: estimated probabilities may not match empirical probabilities. In other words, an estimated probability of ‘70% of being treated’ is not followed by ‘70% of units being treated’ in samples. A poorly calibrated model can be problematic, since the double orthogonalization requires that outcome and propensity score regr-
essions are quite well estimated. In practice, calibration plots, showing the empirical probability versus the predicted class probability, can be used to check if a model is not well-calibrated, and calibration correction methods can be used (Niculescu-Mizil & Caruana, 2005).
4.3.2 Trimming
When the propensity score is close to zero or one, the variance of the IPW estimators can be huge when r = 0 and r = 1, because pˆ(1, Xi) appears at the denominator in (53) and (56). In practice, it
13Although the main paper focuses on the unexplained part, we also provide in Appendix C an AIPW estimator for the explained part when r = 2, its corresponding score function, and a proof that this score satisfies the Neymanorthogonality condition to perform the full decomposition.
22

is often recommended to trim observations above/below a threshold to avoid very large weights.The standard estimators (52) and (55) may seem appealing, as they do not require propensity score estimation. In fact, these estimators are not transparent about the common support condition. Instead, they extrapolate to regions where there is no data. In linear regression models, it may seem reasonable to assume that the regression model is still the same outside of support, but this is often no longer -
the case in a non-parametric framework. Therefore, with propensity scores close to zero or one, an accurate estimation of the unexplained part is unlikely with none of the estimators. This problem does not arise with estimators based on the equilibrium reference outcome r = 2.
4.3.3 Impact of irrelevant explanatory variables
From (24), the equilibrium reference outcome can be obtained by regressing Y obs on X from the pooled sample, as suggested by Neumark (1988). However, Fortin (2008) and Jann (2008) argue that this approach may transfer an inappropriate component in the explained part of the decomposition. Our potential outcomes approach clarifies the debate. We show that the correction proposed in the literature lead to a modification of the reference outcome. Let us consider a linear framework, with the following-
 regression model
Y obs = α + Xβ + Dγ + (XD)δ + ε (79)
Jann (2008) suggests to estimate the regression from the pooled sample including D as additional covariate:
Y obs = α∗ + Xβ∗ + Dγ∗ + ε (80)
and to use αˆ∗ + Xβˆ∗ as reference outcome. It causes a change in the reference outcome, which becomes:
Y (3) := πY (1) + (1 − π)Y (0) with π = P(D = 1) (81)
see Appendix D. It remains to replace the weights in (6) or (7) by the unconditional probability π. To compare the implications of the reference outcome selection, it is useful to consider the explained part in a linear framework. For the standard reference outcome, r = 0, 1, and for the Jann’s method, r = 3, we have:
∆0
X = (E[X | D = 1] − E[X | D = 0]) β
∆1
X = (E[X | D = 1] − E[X | D = 0]) (β + δ)
∆3
X = (E[X | D = 1] − E[X | D = 0]) (β + πδ)
The explained parts are defined by the mean differences in X between the two groups, multiplied by the coefficients of group 0, 1 or a weighted average between the two as β + πδ = (1 − π)β + π(β + δ). For the Neumark or equilibrium reference outcome, we have:
∆2
X = (E[X | D = 1] − E[X | D = 0]) β
+ (E[p(1, X) | D = 1] − E[p(1, X) | D = 0]) γ (82)
+ (E[Xp(1, X) | D = 1] − E[Xp(1, X) | D = 0]) δ
The explained part is still defined by the mean differences in X between the two groups, but also by the mean differences in p(1, X) and in Xp(1, X). See Appendix D for detailed calculations.
23

The new terms, multiplied by γ and δ in (82), come from the fact that p(1, X) is used to define the equilibrium reference outcome Y (2). At first sight, the presence of these two terms in the explained part seem consistent, since they differ from zero when the covariates X are different between the two groups. However, they may be undesirable depending on the choice of X. To see why, let us consider the case where X is correlated to D but it does not explain Y obs, that is:
when β = δ = 0, then ∆0
X = ∆1
X = ∆3
X = 0 and ∆2
X ̸= 0
For instance, if X denotes “having long hair” and the difference in means refers to the gender wage gap, using r = 0, 1, 3 would lead to the correct conclusion that mean wage differences are not explained by X, while using r = 2 would lead to the wrong conclusion that it explains wage differences. Fortin (2008) and Jann (2008) suggest adding the variable D in the regression model to correct this issue. In Appendix D, we demonstrate that this estimation method leads to change the reference outcome -
as it estimates on average a quantity similar to ∆3
X and not to ∆2
X in the linear case. We would therefore like to emphasize that Jann’s strategy is not a “correction” of an error made when estimating the explained component in the case r = 2. Rather, it is a change of reference outcome and target parameter that removes the influence of irrelevant covariates. It does not allow probabilities to be conditioned on the relevant covariables as the probabilities in equation (81) are unconditional. This analysis highlights the importance of appropriate covariate select-
ion in the case r = 2, as using an inappropriate covariate may introduce undesirable component in the explained part.
5 Applications
To illustrate the findings of the previous sections, we use two datasets and estimate the unexplained part of the difference in means of log-wages between two groups. We consider several reference outcomes: of the disadvantaged group (r = 0), advantaged group (r = 1), and the proposed equilibrium reference (r = 2). We calculate several estimators:
• Reg: the estimator δˆrreg based on the estimation of the outcome regression only, as defined in (52), (55), and (58).
• IPWu: the estimator δˆirpw based on the estimation of the propensity score regression only, as defined in (53), (56), and (59).
• IPWn: the estimator δˆnipw
r based on the estimation of the propensity score regression only and with normalized weights, as defined in (92), (93), and (99).
• AIPWu: the doubly-robust estimator δˆaipw
r based on the estimation of both regressions, as defined in (54), (57) or (60).
• AIPWn: the doubly-robust estimator δˆnaipw
r based on the estimation of both regressions and with normalized weights, as defined in (104), (105) or (108).
First, we consider a parametric approach, with an OLS estimation of the outcome linear regression and a logit estimation of the propensity score regression. The standard errors are computed by bootstrapping pairs, that is, by resampling randomly and with replacement lines in the original sample (Freedman, 1981). The number of bootstrap replications is equal to B = 999. Then, we consider a machine learning approach, with a gradient boosting estimation of the outcome and propensity score regressions-
 (see section 4.2). Estimates of the unexplained part
24

of the difference in means are obtained from Algorithm 1, repeating the cross-fitting procedure K = 100 times where the full sample is randomly split into two subsamples Ik and Ic
k of equal size. A statistical framework has been developed for AIPW estimators combined with cross-fitting (MLAIPWu, ML-AIPWn). This is the so-called double machine learning method (Chernozhukov et al., 2018). Therefore, we show standard errors for AIPW estimators only. They are computed from (70)-(71) with score functions (74), (75) and (78) for un-normalized weights and with (112), (113) and (114) for normalized weights. Standard and IPW estimates are calculated using a machine learning approac-
h for indicative purposes.
5.1 Application 1: Wages of native and foreign-born workers
The data are obtained from the application in Hlavac (2018), on labor wages and demographic characteristics of 712 employed Hispanic workers in the Chicago metropolitan area.14 The difference in means of log-wages between natives and foreign-born workers is equal to 0.1434. The covariates selected in the wage equation and in the propensity score regression are age, gender, and education.15 The quantity of interest is the part of the mean difference unexplained by this set of characteristics.
Parametric ML coef s.e coef s.e.
Reference r = 0
Reg 0.0664 (0.0449) 0.1375 IPWu 0.1274 (0.0619) -0.0793 IPWn 0.0824 (0.0469) 0.1299 AIPWu 0.0869 (0.0470) 0.1159 (0.0776) AIPWn 0.0873 (0.0470) 0.1191 (0.0694)
Reference r = 1
Reg 0.1222 (0.0462) 0.1844 IPWu 0.1567 (0.1118) 0.4501 IPWn 0.0816 (0.0487) 0.1342 AIPWu 0.0708 (0.0493) 0.1184 (0.0796) AIPWn 0.0723 (0.0482) 0.1342 (0.0700)
Reference r = 2
Reg 0.0751 (0.0322) 0.1135 IPWu 0.0793 (0.0322) 0.1593 IPWn 0.0793 (0.0322) 0.1265 AIPWu 0.0793 (0.0322) 0.1090 (0.0458) AIPWn 0.0793 (0.0322) 0.1083 (0.0456)
Table 1: Estimates of the unexplained part of the difference in means of log-wages between native and foreign-born workers, with standard errors in parenthesis. The standard errors for the first column are calculated using the pairwise bootstrap method (Freedman, 1981). The standard errors for the AIPW estimator in the last column are calculated using equation (71).
Table 1 shows estimates and standard errors of the unexplained part of the difference in means of log-wages between native and foreign-born workers. Several reference outcomes are considered:
14The data can be obtained from the chicago data frame, included in the oaxaca R package.
15We use the variables age, female, LTHS, some.college, college and advanced.degree from the chicago dataset.
25

of foreign-born workers (r = 0), native workers (r = 1), and the equilibrium reference (r = 2). The first and second columns show the results of the parametric approach (OLS). The third and fourth columns show the results of the machine learning approach (ML). We can see that:
1. With reference outcome (r = 0, 1), the results are sensitive to the choice of the estimator (Reg, IPWu, IPWn, AIPWu AIPWn) and the estimation method (OLS, ML). For instance, with r = 0 the parametric approach (OLS-Reg) yields an estimate of 0.0664, while the machine learning approach (ML-AIPW) returns values almost twice as high: 0.1159 and 0.1191.
2. IPW estimators with normalized weights (IPWn) are more consistent with other estimators and more accurate than IPW without normalized weights (IPWu), when r = 0 and r = 1, as suggested by Busso et al. (2014). However, there is little difference between the two when r = 2.
3. With equilibrium reference outcome (r = 2), the results are more stable and more precise.
4. The results are quite different between OLS and ML, suggesting that parametric regressions may not be correctly specified.
Finally, the double machine learning method provides estimators robust to misspecification of regression models with valid inference (ML-AIPWu and ML-AIPWn). Using this method with several reference outcomes r = 0, 1, 2, the results suggest that the part of the difference in means which is unexplained by the set of characteristics is quite large, much higher than that obtained by a parametric approach (OLS).
5.2 Application 2: Gender wage gap
The data are obtained from Chernozhukov et al. (2015), on labor wages and socio-economic characteristics of 29,217 employed men and women in the United States in 2012.16 The difference in means of log-wages between men and women is equal to 0.2608. The covariates selected in the wage equation and in the propensity score regression are, among others, on marital status, education, and experience.17 The quantity of interest is the part of the mean difference unexplained by this set of characteristics-
. Table 2 shows the unexplained part estimates of the difference in means of log-wages between men and women, that is, of unexplained part of the gender wage gap. Several reference outcomes are considered: of women workers (r = 0), men workers (r = 1), and the equilibrium reference (r = 2). The first and second columns show the results of the parametric approach (OLS). The third and fourth columns show the results of the machine learning approach (ML). We can see that the results are very similar,-
 whatever the estimator (Reg, IPWu, IPWn, AIPWu, AIPWn) or estimation method (OLS, ML) selected. They suggest that the parametric regressions for outcome and propensity score are correctly specified. This may be partly due to the fact that most explanatory variables are categorical (12 out of 13), and that interactions between covariates do not play a significant role. Overall, the results show that the gender wage gap is largely unexplained by the set of characteristics.
16The data can be obtained from the cps2012 data frame, included in the hdm R package.
17We use the variables widowed, divorced, separated, nevermarried, hsd08, hsd911, hsg, cg, ad, mw, so, we, exp1, exp2, exp3 from the cps2012 dataset.
26

Parametric ML coef s.e coef s.e.
Reference r = 0
Reg 0.2884 (0.0071) 0.2880 IPWu 0.2878 (0.0072) 0.2914 IPWn 0.2897 (0.0072) 0.2850 AIPWu 0.2883 (0.0072) 0.2876 (0.0099) AIPWn 0.2883 (0.0072) 0.2876 (0.0099)
Reference r = 1
Reg 0.2707 (0.0072) 0.2719 IPWu 0.2670 (0.0074) 0.2593 IPWn 0.2691 (0.0072) 0.2685 AIPWu 0.2701 (0.0072) 0.2694 (0.0099) AIPWn 0.2701 (0.0072) 0.2694 (0.0099)
Reference r = 2
Reg 0.2716 (0.0069) 0.2719 IPWu 0.2716 (0.0069) 0.2698 IPWn 0.2716 (0.0069) 0.2696 AIPWu 0.2716 (0.0069) 0.2706 (0.0095) AIPWn 0.2716 (0.0069) 0.2706 (0.0095)
Table 2: Estimates of the unexplained part of the difference in means of log-wages between men and women workers, with standard errors in parenthesis. The standard errors for the first column are calculated using the pairwise bootstrap method (Freedman, 1981). The standard errors for the AIPW estimator in the last column are calculated using equation (71).
27

6 Conclusion
In this paper, we reformulate the problem of inequality decomposition using a potential outcomes framework. This approach clarifies the link between the unexplained component and objects like the Average Treatment Effect on the Treated (ATT) or Untreated (ATU). Changing the reference outcome - typically the potential outcome of one group - to an equilibrium outcome, as originally proposed by Neumark (1988), becomes straightforward within this framework. Our main contribution is to analyze the unex-
plained component using this equilibrium reference outcome, demonstrating that it allows for a doubly robust estimator satisfying Neyman orthogonality, enabling estimation via double machine learning (Chernozhukov et al., 2018). This provides an alternative to extrapolation or trimming strategies, relaxing two key assumptions: the common support condition and the need for correctly specified, low-dimensional parametric models. We present a simple algorithm to estimate this object, along with empir-
ical applications and a broader methodological discussion aimed at applied researchers. We highlight methodological issues that machine learning alone does not fully resolve. When choosing the potential outcome of one of the two groups as the reference outcome, which is the standard choice, adding many variables correlated with the group indicator to the models can lead to excessive trimming. This is equivalent to performing the decomposition on only a subgroup of the population. When using Neumar-
k’s reference outcome, trimming is not necessary, as the AIPW estimator no longer requires division by the propensity score. However, the key assumption becomes that the reference outcome is a weighting of the potential outcomes of the two groups by the propensity score. Thus, we implicitly assume that any variable correlated with the group indicator enters Neumark’s outcome model, even when it is not a variable determining the potential outcomes models taken separately. This makes the decompositi-
on based on Neumark’s reference outcome sensitive to including irrelevant variables. This problem was already known in the linear case, and one solution proposed in the literature was to include the group indicator as a control in the estimation of the observed outcome model on the pooled sample. Thanks to our approach based on potential outcomes, we can demonstrate that this solution is not entirely satisfactory because it implicitly changes the reference outcome. We therefore conclude that appli-
ed researchers must carefully reflect on the relevance of the chosen variables, even when using these data-driven methods to analyze inequalities. Additionally, calibration issues should also receive special attention from empiricists, as they can significantly impact the robustness and interpretability of empirical findings.
References
Angrist, J. D., & Pischke, J.-S. (2009). Mostly harmless econometrics: An empiricist’s companion. Princeton university press. Arrow, K. J. (1972). Some mathematical models of race discrimination in the labor market. Racial discrimination in economic life, 187–204. Becker, G. S. (1957). The economics of discrimination: An economic view of racial discrimination. University of Chicago. Blinder, A. S. (1973). Wage discrimination: Reduced form and structural estimates. Journal of Human resources, 436–4-
55.
Busso, M., DiNardo, J., & McCrary, J. (2014). New evidence on the finite sample properties of propensity score reweighting and matching estimators. Review of Economics and Statistics, 5 (96), 885–897.
28

Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., & Robins, J. (2018). Double/debiased machine learning for treatment and structural parameters. Econometrics Journal, 21, C1–C68.
Chernozhukov, V., Hansen, C., & Spindler, M. (2015). High-dimensional metrics in R [R package version 0.1. https://CRAN.R-project.org/package=hdm]. DiNardo, J., Fortin, N. M., & Lemieux, T. (1996). Labor market institutions and the distribution of wages, 1973-1992: A semiparametric approach. Econometrica, 64, 1001–1044. Firpo, S., Fortin, N. M., & Lemieux, T. (2009). Unconditional quantile regressions. Econometrica, 77 (3), 953–973. Firpo, S., Fortin, N. M., & Lemieux, T. (2018). Decomposing wage -
distributions using recentered influence function regressions. Econometrics, 6 (2), 28. Fortin, N., Lemieux, T., & Firpo, S. (2011). Decomposition methods in economics. In O. Ashenfelter & D. Card (Eds.), Handbook of labor economics (pp. 1–102, Vol. A). North-Holland: Elsevier. Fortin, N. (2008). The gender wage gap among young adults in the United States: The importance of money versus people. Journal of Human Resources, 43 (4), 884–918. Freedman, D. A. (1981). Bootstrapping regression models. Th-
e Annals of Statistics, 9 (6), 12181228. Hastie, T., Tibshirani, R., Friedman, J., & Franklin, J. (2005). The elements of statistical learning: Data mining, inference and prediction. The Mathematical Intelligencer, 27 (2), 83–85. Hlavac, M. (2018). Oaxaca: Blinder-Oaxaca decomposition in R [R package version 0.1.4. https://CRAN.Rproject.org/package=oaxaca].
Imbens, G. W., & Rubin, D. B. (2015). Causal inference for statistics, social, and biomedical sciences. Cambridge University Press. Imbens, G. W. (2004). Nonparametric estimation of average treatment effects under exogeneity: A review. Review of Economics and statistics, 86 (1), 4–29.
Jann, B. (2008). The Blinder-Oaxaca decomposition for linear regression models. Stata journal, 8 (4), 453–479. Kitagawa, E. M. (1955). Components of a difference between two rates. Journal of the American Statistical Association, 50 (272), 1168–1194.
Kline, P. (2011). Oaxaca-Blinder as a reweighting estimator. American Economic Review, 101 (3), 532–537. Neumark, D. (1988). Employers’ discriminatory behavior and the estimation of wage discrimination. Journal of Human resources, 279–295.
Niculescu-Mizil, A., & Caruana, R. (2005). Predicting good probabilities with supervised learning. Proceedings of the 22nd International Conference on Machine Learning, 625–632.
Oaxaca, R. L. (1973). Male-female wage differentials in urban labor markets. International Economic Review, 693–709.
Oaxaca, R. L., & Sierminska, E. (2025). Oaxaca-blinder meets kitagawa: What is the link? PLoS One, 20 (5), e0321874. Robins, J. M., & Rotnitzky, A. (1995). Semiparametric efficiency in multivariate regression models with missing data. Journal of the American Statistical Association, 90 (429), 122–129.
Rosenbaum, P. R., & Rubin, D. B. (1983). The central role of the propensity score in observational studies for causal effects [Publisher: Oxford University Press]. Biometrika, 70 (1), 41–55. Rubin, D. (1974). Estimating Causal Effects of Treatments in Randomized and Nonrandomized Studies. Journal of Educational Psychology, 66 (5), 688–701.
Strittmatter, A., & Wunsch, C. (2021). The gender pay gap revisited with big data: Do methodological choices matter? arXiv preprint arXiv:2102.09207.
29

A Estimators without and with normalized weights
The most natural way to estimate the quantity from (14) is to use the empirical counterpart as an estimator:
\
Observabled : = 1
nd
n
X
i=1
Y obs
i 1{Di = d} (83)
where nd is the number of individuals in group d, and n is the number of individuals in both groups. The observable part is nothing but the average outcome in one group.
A.1 Outcome regression
Standard reference outcomes (r ∈ {0, 1})
Let gˆ(r, ·) be an estimation of g(r, ·) defined in (22), obtained from the subsample of observations belonging to the reference group D = r. From (13), (83), and (23), the unexplained advantage of group 1 and the unexplained disadvantage of group 0 can be estimated as follows:
∆b r,d
S =1
nd
n
X
i=1
[Y obs
i − gˆ(r, Xi)]1{Di = d}, r ̸= d (84)
With the outcome of the advantaged group 1 taken as the reference outcome (r = 1), the unexplained part of the observed difference in outcomes (12) can be estimated as:
δbreg
1 = −∆b 1,0
S =− 1
n0
n
X
i=1
[Y obs
i − gˆ(1, Xi)](1 − Di), (85)
where n1 is the number of individuals in group 1, and n is the number of individuals in both groups. With the outcome of the disadvantaged group 0 taken as reference outcome (r = 0), the unexplained part of the observed difference in outcomes (12) can be estimated as:
δbreg
0 = ∆b 0,1
S =1
n1
n
X
i=1
[Y obs
i − gˆ(0, Xi)]Di (86)
where n0 is the number of individuals in group 0, and n is the number of individuals in both groups.
Equilibrium reference outcome (r = 2)
Let gˆ(2, ·) be an estimation of g(2, ·) defined in (30), obtained from the full sample. With the equilibrium outcome taken as the reference outcome, the overall unexplained part of the observed difference in outcomes (12) combines the unexplained parts of both the advantaged and disadvantaged groups. It can be estimated as:
δbreg
2 = ∆b 2,1
S − ∆b 2,0
S =1
n1
n
X
i=1
[Y obs
i − gˆ(2, Xi)]Di − 1
n0
n
X
i=1
[Y obs
i − gˆ(2, Xi)](1 − Di) (87)
where n0 and n1 are the number of individuals, respectively, in groups 0 and 1, and n = n0 + n1.
30

A.2 Inverse Probability Weighting
Standard reference outcome (r ∈ {0, 1})
Let pˆ(d, X) be an estimation of p(d, X) defined in (37), obtained from the full sample. From (13), (38), and (83), the unexplained advantage of group 1 and the unexplained disadvantage of group 0 can be estimated as follows:
∆b r,d
S =1
nd
n
X
i=1
Y obs
i 1{Di = d} − Y obs
i 1{Di = r} pˆ(d, Xi)
pˆ(r, Xi) (88)
=1
nd
n
X
i=1
Y obs
i 1{Di = d} − (1 − 1{Di = d}) pˆ(d, Xi)
1 − pˆ(d, Xi)
=1
nd
n
X
i=1
Y obs
i
1{Di = d} − pˆ(d, Xi)
1 − pˆ(d, Xi) , when r ∈ {0, 1} \ d (89)
since we have 1{Di = r} = 1 − 1{Di = d} and pˆ(r, Xi) = 1 − pˆ(d, Xi) when r ∈ {0, 1} \ d. With the outcome of the advantaged group 1 taken as reference outcome (r = 1), the unexplained part of the observed difference in outcomes (12) can be estimated as:
δbipw
1 = −∆b 1,0
S =1
n0
n
X
i=1
Y obs
i
Di − pˆ(1, Xi)
pˆ(1, Xi) (90)
With the outcome of the disadvantaged group 0 taken as reference outcome (r = 0), the unexplained part of the observed difference in outcomes (12) can be estimated as:
δbipw
0 = ∆b 0,1
S =1
n1
n
X
i=1
Y obs
i
Di − pˆ(1, Xi)
1 − pˆ(1, Xi) (91)
It is clear from (53) and (56) that pˆ(1, Xi) must be far enough from zero or one to have a denominator substantially different from zero. In other words, the common support condition is required to estimate the unexplained part of the mean decomposition. Normalized estimators can also be obtained from (88):
δbnipw
1 = −∆b 1,0
S =− 1
n0
n
X
i=1
Y obs
i (1 − Di) +
n
X
i=1
Y obs
i w(1)
i=
n
X
i=1
Y obs
i w(1)
i − 1 − Di
n0
(92)
δbnipw
0 = ∆b 0,1
S =1
n1
n
X
i=1
Y obs
i Di −
n
X
i=1
Y obs
i w(0)
i=
n
X
i=1
Y obs
i
Di
n1
− w(0)
i (93)
where the weights are normalized so they sum up to one in finite samples (Busso et al., 2014):
w(1)
i = Di[1 − pˆ(1, Xi)]
pˆ(1, Xi) /
n
X
i=1
Di[1 − pˆ(1, Xi)]
pˆ(1, Xi) (94)
w(0)
i = (1 − Di)pˆ(1, Xi)
1 − pˆ(1, Xi) /
n
X
i=1
(1 − Di)pˆ(1, Xi)
1 − pˆ(1, Xi) (95)
The unnormalized estimators in (90) and (91) are equivalent to, respectively, (92) and (93) with
weights w(1)
i = Di[1−pˆ(1,Xi)]
pˆ(1,Xi) /n0 and w(0)
i = (1−Di)pˆ(1,Xi)
1−pˆ(1,Xi) /n1, which do not necessarily sum up to one
in finite sample. See Busso et al. (2014) and Strittmatter and Wunsch (2021) for more details.
31

Equilibrium reference outcome (r = 2)
From (13), (45), and (83), the unexplained advantage of group 1 and the unexplained disadvantage of group 0 can be estimated as follows:
∆b 2,d
S =1
nd
n
X
i=1
Y obs
i 1{Di = d} − pˆ(d, Xi) (96)
With the equilibrium outcome as reference outcome, the overall unexplained part of the observed difference in outcomes (12) combines the unexplained parts of both the advantaged and disadvantaged groups. It can be estimated as:
δbipw
2 = ∆b 2,1
S − ∆b 2,0
S= 1
n1
+1
n0
n
X
i=1
Y obs
i Di − pˆ(1, Xi) (97)
Unlike (53) and (56), the estimator in (97) is not expressed as a ratio and, thus, no restriction is required on pˆ(1, Xi). Therefore, Assumption 2 [common support] is not required to estimate the unexplained part of the observed difference in outcomes. A normalized estimator can also be obtained from (96):
δbnipw
2 = ∆b 2,1
S − ∆b 2,0
S =1
n1
n
X
i=1
Y obs
i Di − Y obs
i w(1)
i −1
n0
n
X
i=1
Y obs
i (1 − Di) + Y obs
i w(0)
i (98)
=
n
X
i=1
Y obs
i
Di
n1
− 1 − Di
n0
+ v(0)
i − v(1)
i (99)
where the weights are normalized so they sum up to one in finite samples:
v(1)
i = pˆ(1, Xi)
Pn
i=1 pˆ(1, Xi) and v(0)
i = 1 − pˆ(1, Xi)
Pn
i=1[1 − pˆ(1, Xi)] (100)
The unnormalized estimator in (97) is equivalent to (99) with weights v(1)
i = pˆ(1, Xi)/n0 and
v(0)
i = [1 − pˆ(1, Xi)]/n1, which do not necessarily sum up to one in finite sample.
A.3 Augmented Inverse Probability Weighting
Standard reference outcomes (r ∈ {0, 1})
From (13), (48), and (83), the unexplained advantage of group 1 and the unexplained disadvantage of group 0 can be estimated as follows:
∆b r,d
S =1
nd
n
X
i=1
Y obs
i − gˆ(r, Xi) 1(Di = d)pˆ(r, Xi) − 1(Di = r)pˆ(d, Xi)
pˆ(r, Xi) (101)
When r ∈ {0, 1} \ d, we have p(r, X) = 1 − p(d, X) and 1(D = r) = 1 − 1(D = d). Therefore, the unexplained part of the difference in means (12) is equal to
δbaipw
1 = −∆b 1,0
S =1
n0
n
X
i=1
Y obs
i − gˆ(1, Xi) Di − pˆ(1, Xi)
pˆ(1, Xi) (102)
δbaipw
0 = ∆b 0,1
S =1
n1
n
X
i=1
Y obs
i − gˆ(0, Xi) Di − pˆ(1, Xi)
1 − pˆ(1, Xi) (103)
32

It is clear from (102) and (103) that pˆ(1, Xi) must be far enough from zero or one to have a denominator substantially different from zero. In other words, the common support condition is required to estimate the unexplained part of the mean decomposition. Normalized estimators can be obtained from (101):
δbnaipw
1 = −∆b 1,0
S=
n
X
i=1
Y obs
i − gˆ(1, Xi) w(1)
i − 1 − Di
n0
(104)
δbnaipw
0 = ∆b 0,1
S=
n
X
i=1
Y obs
i − gˆ(0, Xi) Di
n1
− w(0)
i (105)
with the weights w(1)
i and w(0)
i are defined in (94) and (95). The unnormalized estimators in (102)
and (103) are equivalent to, respectively, (104) and (105) with the weights w(1)
i = Di[1−pˆ(1,Xi)]
pˆ(1,Xi) /n1
and w(0)
i = (1−Di)pˆ(1,Xi)
1−pˆ(1,Xi) /n0, which do not necessarily sum up to one in finite sample.
Equilibrium reference outcome (r = 2)
From (13), (51) and (83), the unexplained advantage of group 1 and the unexplained disadvantage of group 0 can be estimated as follows:
∆b 2,d
S =1
nd
n
X
i=1
Y obs
i − gˆ(2, Xi) 1(Di = d) − pˆ(d, Xi) (106)
Therefore, the unexplained part of the difference in means (12) is equal to
δbaipw
2 = ∆b 2,1
S − ∆b 2,0
S= 1
n1
+1
n0
n
X
i=1
Y obs
i − gˆ(2, Xi) Di − pˆ(1, Xi) (107)
Unlike (102) and (103), the estimator in (107) is not expressed as a ratio and it does not require the assumption 2 [common support]. A normalized estimator can be obtained from (106):
δbnaipw
2 = ∆b 2,1
S − ∆b 2,0
S=
n
X
i=1
Y obs
i − gˆ(2, Xi) Di
n1
− 1 − Di
n0
+ v(0)
i − v(1)
i (108)
where the weights v(1)
i and v(1)
i are defined in (100).
The unnormalized estimator in (107) is equivalent to (99) with weights v(1)
i = pˆ(1, Xi)/n1 and
v(0)
i = [1 − pˆ(1, Xi)]/n0, which do not necessarily sum up to one in finite sample.
B Double Machine Learning method
B.1 Neyman orthogonality condition
Firstly, we show that the AIPW estimator with the equilibrium reference outcome δˆaipw
2 check the Neyman orthogonality condition and is then robust to small mistakes in the ML estimate of the outcome regression and of the propensity score. Let us consider the score function:
ψ2(W ; θ, η) = 1
P(D = 1) + 1
P(D = 0)
!
Y obs − g(2, X) D − p(1, X) − θ (109)
33

where W = (Y obs, D, X) is the set of observations, θ is a low-dimensional parameter of interest and η = {g(2, X), p(1, X)} is a set of high-dimensional nuisance functions, with true values θ0 and η0 = {g0(2, X), p0(1, X)}. We have,
E[ψ2(W ; θ0, η0 + c(η − η0))] = E
"
1
P(D = 1) + 1
P(D = 0)
!
Y obs − g0(2, X) (110)
−c g(2, X) − g0(2, X) D − p0(1, X) − c p(1, X) − p0(1, X)
#
− θ0 (111)
Here, c(η − η0) measures small deviations to the true nuisance functions, as those obtained by replacing the true values by ML estimates. The first derivative with respect to c is equal to:
∂cE[ψ2(W ; θ0, η0 + c(η − η0))] = E
"
1
P(D = 1) + 1
P(D = 0)
!
g0(2, X) − g(2, X) D − p0(1, X)
−c p(1, X) − p0(1, X) − p(1, X) − p0(1, X) Y obs − g0(2, X) − c g(2, X) − g0(2, X)
!#
The double robustness plays a key role. Indeed, recall that
E[Y obs | X] = g0(2, X) and E[D | X] = p0(1, X)
Therefore, the first derivative evaluated at c = 0 is equal to zero by the law of iterated expectations, since each term of the expression has a null conditional expected value.
B.2 Standard errors of AIPW estimators with normalized weights
Standard errors of AIPW estimators with normalized weights can be obtained with the following score functions:
ψ0(W ; δˆnaipw
0 , ηˆ) = Y obs − gˆ(0, X) nD
n1
− nw(0) − nD
n1
δˆnaipw
0 (112)
ψ1(W ; δˆnaipw
1 , ηˆ) = Y obs − gˆ(1, X) n(1 − D)
n0
− nw(1) + n(1 − D)
n0
δˆnaipw
1 (113)
ψ2(W ; δˆnaipw
2 , ηˆ) = Y obs − gˆ(2, X) nD
n1
− n(1 − D)
n0
+ nv(0) − nv(1) − δˆnaipw
2 (114)
where w(1) is defined in (94), w(0) in (95), v(1) and v(0) in (100), δˆnaipw
0 in (105), δˆnaipw
1 in (104),
and δˆnaipw
2 in (108). These score functions sum up to zero over the full sample and can be plugged in (76) to obtain variances of AIPW estimators (see section 4.2)
34

C AIPW estimator for the explained part and the equilibrium
reference outcome
Using the definition of the explained part ∆r
X in equation (3), and identifying the counterfactual terms by their AIPW estimators defined in equation (49), it follows that:
∆2
X = E Y obs − g(2, X) p(1, X)
P(D = 1) + D
P(D = 1) g(2, X)
− E Y obs − g(2, X) p(0, X)
P(D = 0) + 1 − D
P(D = 0) g(2, X)
= E Y obs − g(2, X) p(1, X)
P(D = 1) − p(0, X)
P(D = 0) + g(2, X) D
P(D = 1) − 1 − D
P(D = 0)
= E Y obs − g(2, X) p(1, X)
P(D = 1) − 1 − p(1, X)
1 − P(D = 1) + g(2, X) D
P(D = 1) − 1 − D
1 − P(D = 1) .
Noting that a
b − 1−a
1−b = a(1−b)−(1−a)b
b(1−b) = a−b
b(1−b) , we can simplify the formula above:
∆2
X = E Y obs − g(2, X) p(1, X) − P(D = 1)
P(D = 1) P(D = 0) + g(2, X) D − P(D = 1)
P(D = 1) P(D = 0)
=E 1
P(D = 1) P(D = 0) Y obs − g(2, X) p(1, X) − P(D = 1) + g(2, X) D − P(D = 1) .
To check that this AIPW estimator of the explained part respects the Neyman orthogonality condition, we can derive a score function:
ψ2,X (W, θ, η) = 1
P(D = 1) P(D = 0)
h
Y obs − g(2, X) p(1, X) − P(D = 1) + g(2, X) D − P(D = 1)
i
−θ
where W = (Y obs, D, X) is the set of observations, θ is a low-dimensional parameter of interest and η = {g(2, X), p(1, X)} is a set of nuisance functions, with true values θ0 and η0 = {g0(2, X), p0(1, X)}. We have
ψ2,X (W, θ0, η0 + c(η − η0)) = 1
P(D = 1) P(D = 0)
"
Y obs − g0(2, X) + c g(2, X) − g0(2, X)
× p0(1, X) + c p(1, X) − p0(1, X) − P(D = 1)
+ g0(2, X) + c g(2, X) − g0(2, X) D − P(D = 1)
#
− θ0
Here, c(η − η0) measures small deviations to the true nuisance functions. The first derivative of the expectation of this score, with respect to c, is equal to:
∂cE[ψ2,X (W ; θ0, η0 + c(η − η0))] = E
"
1
P(D = 1) P(D = 0)
h
(D − P(D = 1)) (g(2, X) − g0(2, X))
− (g(2, X) − g0(2, X)) − P(D = 1) + c (p(1, X) − p0(1, X)) + p0(1, X)
+ (p(1, X) − p0(1, X)) Y obs − c (g(2, X) + g0(2, X)) − g0(2, X)
i
#
35

Hence, evaluated on c = 0, we have:
∂c E ψ2,X W ; θ0, η0 + c(η − η0) c=0 = 1
P(D = 1) P(D = 0) E
"
(D − P(D = 1)) (g(2, X) − g0(2, X))
− (g(2, X) − g0(2, X)) p0(1, X) − P(D = 1)
+ (p(1, X) − p0(1, X)) Y obs − g0(2, X)
#
=1
P(D = 1) P(D = 0) E
"
(D − p0(1, X)) (g(2, X) − g0(2, X))
+ (p(1, X) − p0(1, X)) Y obs − g0(2, X)
#
Using the fact that E Y obs | X = g0(2, X) and that E D | X = p0(1, X), along with the law of iterated expectations:
∂c E ψ2,X W ; θ0, η0 + c(η − η0) c=0 = 0
Once again, the double robustness plays a key role, ensuring that the score based on the AIPW estimator for the explained part also verifies the Neyman-orthogonality condition.
D Equilibrium reference outcome and pooled regression
D.1 Pooled regression with dummy variable
Let us consider the following model
y = Xβ0 + (XD) θ + ε =
(
Xβ0 + ε if D = 0
Xβ1 + ε if D = 1 (115)
where θ = β1 − β0. Applying a conditional expectation to both parts of the equation, we have
E(y|D) = E(X|D) β0 + E(X|D)D θ (116)
when E(ε|D) = 0. Subtracting the two equations, we obtain
y − E(y|D) = [X − E(X|D)] (β0 + Dθ) + ε (117)
y ̃ = X ̃ β0 + (X ̃ D) θ + ε (118)
where y ̃ (X ̃ ) are the residuals of the regression of, y (X) on the dummy variable D. These variables are cleaned of any effect of D. Let us consider the following model:
y ̃ = X ̃ β∗ + ε (119)
The OLS estimator is given by
βˆ∗ = (X ̃ ⊤X ̃ )−1X ̃ ⊤[X ̃ β0 + (X ̃ D) θ + ε] (120)
= β0 + Dθ + (X ̃ ⊤X ̃ )−1X ̃ ⊤ε (121)
36

Thus, we have
E(βˆ∗) = β0 + πθ = (1 − π)β0 + πβ1 (122)
where π = E(D) is the proportion of units with D = 1. From the Frisch-Waugh-Lovell (FWL) theorem, we know that this coefficient would also be obtained from
y = X β∗ + Dγ∗ + ε (123)
which is the pooled regression with an additional dummy variable proposed by Jann (2008). Thus, the two following strategies are equivalent on average:
• using as reference outcome Xβˆ∗ from (123) estimated on the full sample
• using as reference outcome X[(1 − π)βˆ0 + πβˆ1], with βˆ0 and βˆ1 obtained from model (115) estimated on the two subsamples
The last strategy remains to consider as reference outcome: Y (3) = (1 − π)Y (0) + πY (1).
D.2 Explained parts of the difference in means
For r = 0 and the linear regression outcome (79), the explained part of the difference in means in (3) is equal to
∆0
X = E[Y (0)|D = 1] − E[Y (0)|D = 0]
= E[α + Xβ|D = 1] − E[α + Xβ|D = 0]
= (E[X|D = 1] − E[X|D = 0])β
For r = 1, we have
∆1
X = E[Y (1)|D = 1] − E[Y (1)|D = 0]
= E[α + γ + X(β + δ)|D = 1] − E[α + γ + X(β + δ)|D = 0]
= (E[X|D = 1] − E[X|D = 0])(β + δ)
For r = 2, we have
∆2
X = E[Y (2)|D = 1] − E[Y (2)|D = 0]
= E[p(1, X)Y (1) + [1 − p(1, X)]Y (0)|D = 1]
= −E[p(1, X)Y (1) + [1 − p(1, X)]Y (0)|D = 0]
= E[p(1, X)[α + γ + X(β + δ)] + [1 − p(1, X)](α + Xβ)|D = 1]
− E[p(1, X)[α + γ + X(β + δ)] + [1 − p(1, X)](α + Xβ)|D = 0]
= E[p(1, X)γ + p(1, X)Xδ + α + Xβ|D = 1]
− E[p(1, X)γ + p(1, X)Xδ + α + Xβ|D = 0]
= (E[X|D = 1] − E[X|D = 0])β
+ (E[p(1, X)|D = 1] − E[p(1, X)|D = 0])γ
+ (E[p(1, X)X|D = 1] − E[p(1, X)X|D = 0])δ
37

For r = 3, we have
∆2
X = E[Y (3)|D = 1] − E[Y (3)|D = 0]
= E[πY (1) + (1 − π)Y (0)|D = 1] − E[πY (1) + (1 − π)Y (0)|D = 0]
= E[π[α + γ + X(β + δ)] + [1 − π](α + Xβ)|D = 1]
− E[π[α + γ + X(β + δ)] + [1 − π](α + Xβ)|D = 0]
= E[πγ + πXδ + α + Xβ|D = 1] − E[πγ + πXδ + α + Xβ|D = 0]
= (E[X|D = 1] − E[X|D = 0])(β + πδ)
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:49.979Z
- **Text Length:** 97384 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
