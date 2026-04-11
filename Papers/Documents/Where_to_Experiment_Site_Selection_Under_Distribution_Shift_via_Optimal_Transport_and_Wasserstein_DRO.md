# PDF Document: Bouyamourn - 2025 - Where to Experiment Site Selection Under Distribution Shift via Optimal Transport and Wasserstein D.pdf

**File Path:** Bouyamourn - 2025 - Where to Experiment Site Selection Under Distribution Shift via Optimal Transport and Wasserstein D.pdf

**Processed Date:** 2026-02-10T18:15:47.802Z

**File Size:** 2476.13 KB

**Total Pages:** 71

**Extracted Pages:** 71

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3213

**Title:** Where to Experiment? Site Selection Under Distribution Shift via Optimal Transport and Wasserstein DRO

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Draft
Where to Experiment?
Site Selection Under Distribution Shift via
Optimal Transport and Wasserstein DRO
Adam Bouyamourn∗
November 7, 2025
Abstract
How should researchers select experimental sites when the deployment population may differ from observed data? I formulate the problem of experimental site selection as an optimal transport problem, developing methods to minimize downstream estimation error by choosing sites that minimize the Wasserstein distance between population and sample covariate distributions. I develop new theoretical upper bounds on PATE and CATE estimation errors, and show that these different objectives lead to differen-
t site selection strategies. I extend this approach by using Wasserstein Distributionally Robust Optimization to develop a site selection procedure robust to adversarial perturbations of covariate information: a specific model of distribution shift. I also propose a novel data-driven procedure for selecting the uncertainty radius the Wasserstein DRO problem, which allows the user to benchmark robustness levels against observed variation in their data. Simulation evidence, and a reanalysis of a ran-
domized microcredit experiment in Morocco (Crépon et al.), show that these methods outperform random and stratified sampling of sites when covariates have progostic R2 > .5, and alternative optimization methods i) for moderate-to-large size problem instances ii) when covariates are moderately informative about treatment effects, and iii) under induced distribution shift.
Keywords: Site Selection, Experimental Design, External Validity, Optimal Transport, Wasserstein Distributionally-Robust Optimization, Causal Inference, Mixed Integer Linear Programming
∗Postdoctoral Research Associate in Politics, Statistics and Machine Learning, Department of Politics, Princeton University. I am grateful to Kirk Bansak, Eli Ben-Michael, Peng Ding, Thad Dunning, Naoki Egami, Avi Feller, Adam Glynn, Erin Hartman, Dean Knox, Sam Pimentel, Tara Slough, Anton Strezhnev and participants at EITM 2024, PolMeth 2025, and the Berkeley Methods Workshop for helpful feedback. An R package to implement the approach will be made available on publication.
1
arXiv:2511.04658v1 [stat.ME] 6 Nov 2025

Draft
Contents
1 Introduction 4 1.1 Learning from Multi-Site Experimental Studies . . . . . . . . . . . . . . 4 1.2 Methodological Contributions . . . . . . . . . . . . . . . . . . . . . . . . 7 1.2.1 Optimal Transport and the Site Selection Problem . . . . . . . . 7 1.2.2 Site Selection Under Distribution Shift . . . . . . . . . . . . . . . 8 1.3 Summary of Proposed Methods . . . . . . . . . . . . . . . . . . . . . . . 10 1.4 Related Literature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 1.4.-
1 Site Selection in Causal Inference . . . . . . . . . . . . . . . . . . 11 1.4.2 Optimal Transport . . . . . . . . . . . . . . . . . . . . . . . . . . 11 1.4.3 Response Surface Methodology . . . . . . . . . . . . . . . . . . . 12 1.5 Structure of Paper . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
2 Where to Experiment? The Problem of Site Selection 12 2.1 Overview of the Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 2.2 Different objectives of Site Selection . . . . . . . . . . . . . . . . . . . . . 14 2.3 Site Selection When the Population is Observed . . . . . . . . . . . . . . 14 2.3.1 Minimizing the Error of the PATE . . . . . . . . . . . . . . . . . 14 2.3.2 Minimizing the Error of the CATE . . . . . . . . . . . . . . . . . 15 2.4 Assumptions Needed to Use Covariate-
s To Select Sites . . . . . . . . . . 15 2.5 Optimal Transport: Some Tools and Definitions . . . . . . . . . . . . . . 16 2.6 Upper-Bounding Errors Due to Site Selection . . . . . . . . . . . . . . . 17 2.6.1 Upper-Bounding the MSE of the PATE . . . . . . . . . . . . . . . 17 2.6.2 Upper-Bounding the PEHE . . . . . . . . . . . . . . . . . . . . . 18 2.6.3 Discussion of Bounds . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.7 Minimizing The Upper Bounds Via Linear Programming . . . . . . . .-
 . 19
3 Site Selection Under Distribution Shift 20 3.1 Wasserstein DRO as Game between Researcher and Nature . . . . . . . . 21 3.2 Algorithm for Wasserstein DRO . . . . . . . . . . . . . . . . . . . . . . . 21 3.3 Intuition: What kind of robustness is Distributional Robustness? . . . . . 23 3.4 Procedure for Choosing Robustness Parameter ρ . . . . . . . . . . . . . . 24
4 Simulations: Randomization versus Optimization, and Solution Sets 25 4.1 Overview of Simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 4.2 Characterizing site selection solution sets . . . . . . . . . . . . . . . . . . 25 4.2.1 Site selection for the PATE and the CATE . . . . . . . . . . . . . 25 4.2.2 Effect of robustness parameter ρ on solution set coverage . . . . . 27 4.3 Comparing random sampling and optimization methods via simulation . 29 4.3.1 PATE: Optimization vs ran-
domization . . . . . . . . . . . . . . . 29 4.3.2 CATE Selection Is Optimal Stratified Sampling . . . . . . . . . . 32 4.4 Conclusions: When should you use optimization methods in practice? . . 33
5 Simulation: Crépon et al. (2015). 33 5.1 Simulation Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 5.1.1 Synthetic Data Generation . . . . . . . . . . . . . . . . . . . . . . 33 5.1.2 Distribution Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . 34 5.1.3 Site Selection Methods . . . . . . . . . . . . . . . . . . . . . . . . 34
2

Draft
5.2 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36 5.2.1 PATE Performance Results . . . . . . . . . . . . . . . . . . . . . 36 5.2.2 CATE Performance Results . . . . . . . . . . . . . . . . . . . . . 36 5.2.3 Optimal Transport methods perform better for medium-to-large site selection problems . . . . . . . . . . . . . . . . . . . . . . . . 38 5.2.4 Optimal Transport methods perform better in high-signal strength conditions . . . . . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . 38 5.2.5 DRO methods perform better for larger distribution shift levels . 38 5.2.6 CATE methods perform poorly in the low-signal regime . . . . . . 38
6 Discussion and Conclusions 39 6.1 Practical Guidance for Applied Researchers . . . . . . . . . . . . . . . . 39 6.2 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 6.3 Future work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
A Proofs of Main Results 53 A.1 Technical Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 A.2 Proof of Theorem 14 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 A.3 Proof of Theorem 15 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58 A.4 Proof of Proposition 16 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59 A.5 Proof of Proposition 19 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
B Simulation Details 61 B.1 Randomization versus Optimization . . . . . . . . . . . . . . . . . . . . . 61 B.2 Cr pon et al. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
C Implementation Details 62 C.1 LP Relaxations of the MILP and Cutting-Plane Algorithm . . . . . . . . 62 C.2 Runtime Experiments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
D Selecting a Radius of Robustness 64
E Additional Theoretical Results 66 E.1 Optimal Transport and Survey Sampling . . . . . . . . . . . . . . . . . . 66 E.2 Game Theory and Distributionally Robust Optimization . . . . . . . . . 69
3

Draft
1 Introduction
1.1 Learning from Multi-Site Experimental Studies
Multi-site experimental studies have become central to cumulative learning and program evaluation across a number of disciplines, as they allow researchers to generate transportable, externally valid estimates of treatment effects that can inform policy-making, theory development, and testing [Bloom et al., 2017, Dunning et al., 2019a]. Across political science, economics, education, public health and medicine, multi-site experimental studies are supported by funding bodies with a view to providin-
g insights that both generalize across multiple contexts, and support cumulative learning about a phenomenon of interest. In political science, EGAP’s Metaketa initiatives have tested voter information campaigns, community policing programs, and natural resource governance interventions across multiple countries [Dunning et al., 2019b,a, Blair et al., 2021, Hyde et al., 2022, Blair et al., 2024, Slough et al., 2021]. In economics, J-PAL, inter alia, coordinated the Graduation Program for the ultra-
-poor across six countries [Banerjee et al., 2015] and Teaching at the Right Level initiatives across multiple education systems [Banerjee et al., 2017, 2016, 2007]. Public health and medical researchers regularly conduct coordinated trials such as the WHO Solidarity trial for COVID-19 treatments across 35 countries [WHO Solidarity Trial Consortium et al., 2021, WHO Solidarity Trial Consortium, 2022], the Women’s Health Inititative (WHI) [Rossouw et al., 2002] and the Antihypertensive and lipid-lo-
wering treatment to prevent heart attack trial (Allhat) [Appel, 2002, Rossouw et al., 2002]. Multisite experiments are also common in education research, where interventions are naturally targeted at the level of schools [Gottfredson et al., 1993, Raudenbush and Schwartz, 2020, Hong and Raudenbush, 2006, Orr et al., 2019]. In each of these multi-site experimental designs, researchers face the following problem: given a finite budget and a universe of potential experimental sites, where should they-
 actually conduct an experiment, given their downstream objective of calculating an unbiased, policy-relevant causal quantity with the smallest possible variance? Further, what should researchers do when deployment populations differ from their observed populations? How should they take into account their limited information about target populations? And how should their decision change when they care about heterogeneity, and ensuring that diverse populations are included in the study sample? Exte-
rnal validity concerns whether findings from an experimental study can be generalized beyond the specific sample, setting, and time period in which the study was conducted [Shadish et al., 2002, Findley et al., 2021, Egami and Hartman, 2023]. One central goal within the external validity literature is to develop methods for transporting causal estimates from experimental samples to target populations of policy interest, ensuring that conclusions drawn from studies remain valid when applied to new -
contexts [Pearl and Bareinboim, 2011, 2014, Rudolph and Díaz, 2021, Egami and Hartman, 2021, Rudolph et al., 2024]. Transporting results from one study context is difficult, because it requires us to make invariance assumptions about lack of change between source and target context. In practice, however, we are likely to encounter distribution shift: systematic differences in the distribution of observed covariates between the experimental sample and the target population [Rothenhausler and Bühlma-
nn, 2023, Jin et al., 2024, Wiles et al., 2021, Taori et al., 2020, Koh et al., 2021]. When the covariate distributions differ substantially, estimates derived from the experimental sample may not accurately
4

Draft
represent treatment effects in the target population, undermining the external validity (and practical utility) of research findings. For the experimental planner, distribution shift can take on a number of concrete forms. Composition of available experimental sites may differ systematically from the policy-relevant population on which the researcher wishes to experiment [Allcott, 2015]. Population characteristics may change in the time period between study planning and implementation [Saville et -
al., 2022, Bansak et al., 2023]. Observed covariates may be measured with error [Bound et al., 2001], and minority groups may be systematically underrepresented in selected experimental units [Tan et al., 2022, Hu et al., 2024]. In political science, differences in institutional quality [Bold et al., 2018], trust in institutions [Cheeseman and Peiffer, 2023], rural-urban mix [Dehejia et al., 2019], and racial and ethnic context [Anoll et al., 2024, Hassell, 2021], can each be the source of substan-
tive differences in the transportability of conclusions from one context to another. In education, school districts enrolled in an experiment may be unrepresentative of the distribution of schools, leading to overly optimistic assessments of policy impacts [Olsen and Orr, 2016, Olsen et al., 2022]. Suppose, for instance, we observe rural and urban sites, and use census data at a particular time to estimate population totals in both locations. Census data may suffer from selection bias: it may syst-
ematically undercount population totals in hard-to-reach, rural areas. There may also be temporal drift: in-migration from rural to urban areas may have shifted the composition of sites. In each case, the data we observe (historic census data) may not be representative of the deployment population: the actual rural-urban mix. How should researchers account for the routine fact that the data they have collected may not accurately represent the population they are in fact interested in [Taori et al.-
, 2020, Rothenhausler and Bühlmann, 2023, Bansak et al., 2023, Cai et al., 2023, Jin et al., 2024]? A goal of recent research in site selection is to choose experimental locations that are, in relevant sense, robust to distribution shift, or designed with external validity in mind [Gechter et al., 2024, Egami and Lee, 2024, Olea et al., 2024]. There a number of different ways we might want to formalize this idea in practice, using different statistical and theoretical tools. Weighting-based method-
s aim to improve the external validity of an estimate by reweighting source data so that it more closely matches a prespecified target population [Egami and Hartman, 2021, Huang et al., 2023, Zhang et al., 2024]. These methods require that the analyst has a specific transport target in mind and has collected covariate data from the target location. They also require assumptions about the stability of the mapping from source to target: that there is a unique map from source to target, which can be -
estimated in practice.
In contrast, Distributionally Robust Optimization (DRO) is a set of methods developed in operations research that find solution sets with guarantees against worst-case performance within the radius of a given solution [Ben-Tal et al., 2013, Esfahani and Kuhn, 2017, Kuhn et al., 2024, Blanchet et al., 2021, Blanchet and Murthy, 2019, Blanchet et al., 2024, Duchi and Namkoong, 2020, Levy et al., 2020, Bertsimas et al., 2023]. DRO methods approach the problem of distributional uncertainty by providin-
g statistical guarantees that a given solution is robust to a worst-case shift of the data. These methods provide insurance against poor performance within a specified neighborhood of the empirical solution [Luo and Mehrotra, 2020, Duchi and Namkoong, 2020]. Instead of asking, under what assumptions can we transport a valid conclusion from context A to context B, these
5

Draft
approaches ask, what solution would we pick if we wanted it to still hold for any context that was “sufficiently close” to the context we actually saw? These methods build on the optimal transport literature, which is an elegant body of applied mathematics that studies the abstract problem of moving (probability) mass from one location to another [Villani and Society, 2003, Villani, 2008, Peyré and Cuturi, 2019, Christensen et al., 2023, Santambrogio, 2015]. I contrast these methods with sampling--
based site selection methods. Throughout this paper, I distinguish between three selection approaches: (1) simple random sampling without stratification, (2) stratified random sampling that randomizes within predefined strata, and (3) optimization-based selection using covariate information. The benefit of simple random sampling is that it does not require prior information about sites, and has optimality and robustness guarantees in general settings. Random sampling is minimax optimal when the an-
alyst has no prior information about experimental units [Kallus, 2020], and when the analyst knows the true underlying treatment response only with some error [Wu, 1981]. Stratification compromises between random sampling and use of prior information and randomization [Thompson, 2022, Parsons, 2017]. Stratification requires splitting the covariate space into strata, where we presume that the stratification occurs along dimensions of high treatment effect heterogeneity, so that the resulting strata-
 capture meaningful variation in treatment response, and guarantee good coverage of the covariate space. It turns out that Optimal Transport methods can be interpreted as a data-adaptive form of stratification: these methods simultaneously solve for optimal strata, and for optimal representatives within each stratum. I show this formally in Section E. In practice, stratification often involves analyst-driven choices about what to stratify on. And in high dimensions, it becomes less clear how the a-
nalyst should make high-dimensional stratification choices (though see [Tipton, 2013b]). Optimization methods instead seek to exploit prior information about experimental sites in the form of covariate information. The goal of the methods outlined in this paper is to choose experiments robust to distribution shift by leveraging what we know about existing sites. This comes with a trade-off: when our prior information is good, that is, highly prognostic, optimization does better. When our prior inf-
ormation is bad, randomization methods are more robust, and have better worst-case performance. This is the so-called ‘price of robustness’ [Bertsimas and Sim, 2004b], or a version of the no free lunch theorem [Wolpert and Macready, 1997]. I study these trade-offs by simulation in Section 4. A fundamental challenge in site selection is that we typically observe only a subset P of the universe of potential experimental sites P. The distance between P and P is often unmeasurable, yet this is the pop-
ulation to which we ultimately wish to generalize. While no method can fully address this limitation, our approach provides robustness guarantees for deployment populations within a specified distance of the observed data. In practice, researchers must play close attention to the informativeness of covariates collected in order to make decisions about site selection [Shpitser et al., 2012, VanderWeele and Shpitser, 2011, Stuart et al., 2013, Bicalho et al., 2022]. Optimization can be a powerful to-
ol to aid study design – if researchers engage in significant efforts to collect data at the planning stage.
6

Draft
1.2 Methodological Contributions
1.2.1 Optimal Transport and the Site Selection Problem
I use optimal transport theory to formulate the problem of selecting sites optimal for the Population Average Treatment Effect and Conditional Average Treatment Effect. Optimal transport is a rich body of applied mathematics with many possible applications in causal inference and machine learning [Villani, 2003, Santambrogio, 2015, Peyré and Cuturi, 2019]. Optimal transport is concerned with the efficient shifting of mass between distributions, and gives rise to an intuitive notion of distance bet-
ween distributions, the Wasserstein distance, which measures the shortest-cost transport distance between two distributions. The Wasserstein distance quantifies how much “work” is required to transform one probability distribution into another, where work is measured as probability mass times the distance it must travel. Formally, for two distributions P and Q, the p-Wasserstein distance is
Wp(P, Q) = inπf
Z
∥x − y∥pdπ(x, y)
1/p
where the infimum is taken over all transport plans π with marginals P and Q. Intuitively, if we think of P as describing the locations of piles of sand, Q as describing where we want to move that sand, and π as any given set of paths used to move sand from P to Q, the Wasserstein distance gives the minimum total cost of the move under the best routing from P to Q. This metric is particularly well-suited for site selection because it directly captures the representativeness of selected sites. When-
 we select experimental sites, we want them to “represent” the broader population in the sense that every population unit is adequately proxied by nearby selected sites. The Wasserstein distance formalizes this intuition: it measures how well a sparse set of selected sites can approximate a dense population by finding the optimal assignment of population units to selected sites while minimizing total “representation error.” For the special case of p = 1, this cost equals the population-weighted av-
erage distance that points must travel under the optimal assignment. For p = 2, we minimize the sum of squared distances, so W 2
2 equals the population-weighted average squared distance, and W2 itself is the square root of this quantity analogous to a population-weighted Euclidean distance. Just as standard deviation captures spread differently than mean absolute deviation, W2 penalizes outliers more heavily than W1: leaving any population point far from its nearest selected site contributes quadratically rather than linearly to the total cost. In our site selection context, W1(PX, SX) measures the average distance from po-
pulation units to their assigned experimental sites, while W2(PX, SX) is the root mean square Euclidean distance under optimal assignment, being more sensitive to ensuring no subpopulation is left too far from representation.
I derive new upper bounds on the errors of the PATE and CATE estimator in terms of Wasserstein distances. By using the tools of optimal transport to analyze the Mean Squared Error of the PATE estimate, and the Precision in Estimated Heterogeneous Effect [Hill, 2011, Shalit et al., 2017], I derive upper bounds for the PATE and CATE errors in terms of the Wasserstein distance (Theorem 14 and 15).
7

Draft
These bounds give us intuition about what our substantive goals are when choosing experimental sites for PATE and CATE estimation. When estimating the PATE, we seek a single number: the average treatment effect across the population. This means we want selected sites that, when averaged together, closely approximate the population average. Think of this as finding sites whose collective “center of gravity” matches the population’s center. When estimating the CATE, we want to estimate an entire fun-
ction: how treatment effects vary across different covariate values. This requires accurate interpolation across the entire covariate space. We need sites spread throughout the population to avoid large gaps where we must extrapolate rather than interpolate. These different goals lead to different selection strategies. For the PATE, the 1Wasserstein distance naturally emerges because we care about average representation. Sites can compensate for each other, and modest coverage gaps in outlying are-
as are acceptable as long as the average is well-represented. For the CATE, the 2-Wasserstein distance emerges because outlying regions contribute quadratically to estimation error: leaving any subpopulation far from a selected site severely degrades our ability to estimate treatment effects in that region. Both optimization problems seek to create balanced partitions of the covariate space that maximize representativeness, but they do so using different distance metrics that encode different noti-
ons of what “good representation" means.
These upper bounds motivate a Mixed Integer Linear Program formulation of the PATE and CATE selection problems. Because our bounds contain Wasserstein distance terms, our objective then becomes to choose experimental sites that minimize the Wasserstein distance between the observed population of experimental sites and the selected sample of experimental sites, subject to a budget constraint of sites. Wasserstein distance minimization can be tractably reformulated in terms of Mixed Integer Linear P-
rograms. These are straightforward to solve using commercial solvers like Gurobi. I develop software to implement this approach.
Empirical Performance versus Randomization and Optimization These optimizationbased methods outperform simple random sampling when covariates are sufficiently informative about treatment effects, as I show via simulation in Section 4. A critical finding from our analysis is that optimization-based site selection requires observed covariates to explain more than approximately 50% of treatment effect variation (R > 0.5). This threshold has important practical implications: researchers should validat-
e covariate informativeness before investing in optimization-based selection, as uninformative covariates can lead to worse performance than randomization.
1.2.2 Site Selection Under Distribution Shift
I extend the site selection problem using Wasserstein distributionally robust optimization (DRO). Rather than optimizing for the observed distribution, we can solve a more conservative problem that hedges against a set of plausible population distributions. Formally, our problem becomes:
min
S:|S|≤K
sup
P ′∈B(P,ρ)
Wp(P, S)
8

Draft
where B(P, ρ) = {P ′ : Wp(P, P ′) ≤ ρ} is an ambiguity set: the collection of all population distributions within radius ρ, measured in terms of the Wasserstein distance, around the empirical distribution. This provides worst-case performance guarantees when the true population lies within ρ of the observed data. The ambiguity radius ρ is a scalar that represents the total “transportation budget” available to an adversary that seeks to perturb the observed distribution. Specifically, ρ bounds the -
total cost of moving probability mass in the covariate space, measured in the same units as the covariates themselves. For example, if covariates are standardized, then ρ = 0.5 allows Nature to move each population unit up to 0.5 standard deviations on average, or to make larger moves for some units while keeping others fixed, so long as the total transportation cost remains within budget. This provides worst-case performance guarantees when the true population lies within ρ of the observed data.
I solve the Wasserstein DRO site selection problem using a novel cutting-plane algorithm1 that exploits the minimax game structure of the optimization problem. Formulating the DRO problem as a game theory problem directly suggests an algorithm for its implementation: the Researcher chooses a site selection; the adversary perturbs the observed data, subject to a budget on how far it can move points; the Researcher observes the adversary’s new site selection and resolves the problem; and so on until-
 neither the adversary nor the Researcher change their choices. (See Section E.2 for an explicit description of the equivalence.) Here, the Wasserstein DRO solution is interpretable as Nash Equilibrium in a game between Researcher and Nature; the algorithm proceeds by ‘playing’ the game between Nature and the Researcher until there are no further moves left. This removes the need to enumerate all elements of the (infinite) Wasserstein ball; instead, we identify only the set of adversarial best res-
ponses to a given site selection. This game-theoretic cutting-plane approach is novel in the Wasserstein DRO literature. Existing methods for solving Wasserstein DRO problems typically rely on dual reformulations that convert the minimax problem into a single optimization [Esfahani and Kuhn, 2017], entropic regularization techniques that approximate the Wasserstein distance using Sinkhorn iterations to make the problem computationally tractable [Cuturi, 2013], or moment-based approaches that repla-
ce Wasserstein constraints with simpler moment constraints [Gao et al., 2020]. The key insight of this approach is that we never need to characterize the full (infinite) ambiguity set B(P, ρ). Instead, we exploit the sequential structure: at each iteration, Nature reveals only the single adversarial distribution that is a best response to the current site selection, and we accumulate these best responses over iterations.
I introduce a novel data-adaptive procedure for selecting the uncertainty radius in Wasserstein DRO problems. A separate technical contribution is the introduction of a novel data-driven calibration method for selecting the robustness parameter ρ. A fundamental challenge in applying distributionally robust optimization is choosing
1A cutting-plane algorithm solves optimization problems by iteratively adding constraints that eliminate infeasible regions. Rather than solving the full problem at once, the algorithm starts with a simplified version, finds a candidate solution, then checks if this solution satisfies all constraints of the original problem. If not, it adds a new constraint (a “cut”) that rules out this solution and similar infeasible ones, then resolves the simplified problem. This process continues until the can-
didate solution satisfies all original constraints [Bradley et al., 1977].
9

Draft
an appropriate robustness radius: too small provides insufficient protection against distribution shift, while too large yields overly conservative selections that sacrifice performance. Theoretical results provide guidance on how to select a robustness radius in the presence of sampling variability, based on the rate of convergence of empirical measures [Fournier and Guillin, 2013, Blanchet and Si, 2019, Blanchet et al., 2021]. However, it is difficult to formulate a theoretically principled way -
to choose a robustness radius in the face of unknown distribution shift beyond sampling variability: by design, we intend to guard against out-of-sample shifts, and so are limited in how we can use in-sample data to construct a plausible radius. This is because distribution shift in the wild induces Knightian Uncertainty [Knight, 1921, Sunstein, 2023]: we cannot really know, without making assumptions, how much shift to guard against. An alternative approach is to provide the option to guard again-
st shifts that are benchmarked by the observed variation in the data. My procedure, detailed in Section 3.4, first constructs an empirical Wasserstein grid based on empirical distances in the covariate data. Intuitively, given any data set, there is a maximum radius beyond which an adversarial solution will not change. This motivates the heuristic procedure of 1) greedily searching for the maximum radius ρmax and 2) performing adaptive grid search over the line [0, ρmax]. Site selection methods wi-
ll produce different solution sets over this line: the goal is to identify when the output solutions exhibit small, moderate, and large differences from the baseline solution set. We can then define a series of ρ thresholds in terms of these different solution sets. Rather than requiring the user to specify ρ values, this procedure automatically generates ρ values that answer the question, “What would small, medium, and large distributional shocks look like for my specific dataset?.” This makes DR-
O methods useful for practitioners without the need for arbitrary priors about size of the robustness radius.
Empirical performance I demonstrate the performance of these methods by reanalyzing Crépon et al. [2015], who conduct a randomized microcredit experiment in Morocco, in which rural villages were randomized into receiving access to loans. I use as an outcome profits earned by individuals who did and did not take out the loan, and generate semisynthetic treatment effects using observed covariates and a linear model. I first study the properties of site selections generated by my proposed methods, SP-
S, and random and stratified sampling on the full sample, evaluating the performance of these methods in terms of the M SEP AT E and the PEHE. I then implement a simulation study, in which treatment effects vary with signal strength (the informativeness of observed covariates), and in which I induce distribution shift by moving observed covariates away from their actual values. I show that my nonrobust methods outperform SPS under distribution shift, and in high-signal environments.
1.3 Summary of Proposed Methods
This paper introduces four methods for different practical use cases in site selection. First, the researcher should decide whether they are interested in PATE estimation or CATE estimation. Second, the researcher should decide how concerned they are about distribution shift: are they willing to pay ‘the price of robustness’ [Bertsimas and Sim, 2004a] to trade-off accuracy in minimizing observed error against potential unobserved distribution shifts?
10

Draft
Four Site Selection Methods and Their Goals
Method Estimand Objective
p = 1, ρ = 0 PATE Minimize MSE of Population Average Treatment Effect p = 1, ρ > 0 PATE Minimize worst-case MSE of PATE under distribution shift p = 2, ρ = 0 CATE Minimize PEHE (Precision in Estimation of Heterogeneous Effects) p = 2, ρ > 0 CATE Minimize worst-case PEHE under distribution shift
1.4 Related Literature
1.4.1 Site Selection in Causal Inference
Egami and Lee [2024] introduced explicit optimization methods for site selection in political methodology, and contributed significantly to defining the problem of site selection. Their approach, based on the synthetic control method, uses optimization to select included sites that closely approximate sites that are not included in the selection, by estimating balancing weights [Abadie and Gardeazabal, 2003, Alberto Abadie and Hainmueller, 2010, Abadie and Zhao, 2025]. The goal is to have a high-q-
uality weighted average representation of non-selected sites; in practice, this can be thought of as ensuring that non-selected sites are within the convex hull of selected sites. The default implementation contains a penalty term that additionally penalizes using outlying sites in the final selection. The goal of this paper is to use a set of different technical tools to address the site selection problem motivated by Egami and Lee [2024]. Whereas they use an approach based on synthetic controls -
intended to select experiments for the PATE, I i) show that the PATE and CATE have different optimization problems ii) use the theoretical resources of optimal transport to state and implement the minimization problem iii) use Wasserstein Distributionally-Robust Optimization to induce robustness to distribution shift. Tipton [2013b,a] propose a cluster-then-stratify approach to site selection, which we study via simulation, and is weakly dominated by 2-transport, as I show in Section E. Olea et al-
. [2024] solve the site selection problem, by defining it as the k-median problem. This is similar to the PATE transport solution, but the PATE solution implicitly imposes a balance constraint: that each site receive 1
K of the overall population mass.
k-medians is not constrained in this way.
1.4.2 Optimal Transport
Optimal transport has a large number of possible applications for core causal inference tasks [Galichon, 2016]. Studying the changes-in-changes model [Athey and Imbens, 2006], Torous et al. [2024] use optimal transport methods to estimate control group trends over time, and apply this same transformation to predict what the treatment group would have looked like without intervention. Charpentier et al. [2023] propose using optimal transport methods to estimate counterfactual distributions, while D-
unipace [2022] use optimal transport methods to solve IPW-type problems [Hájek, 1971, Horvitz and Thompson, 1952, Ben-Michael et al., 2021].
11

Draft
1.4.3 Response Surface Methodology
The conceptual background of this paper is closely related to Response Surface Methodology [Box and Wilson, 1951, Box and Draper, 1975, 1987]. In RSM, the goal is to choose experiments based on their location on the surface that determines how covariates map onto outcomes. This yields applied optimization problems, where we want to learn, say, the maximum of a given output function given inputs: this may correspond to an efficient configuration of industrial inputs, for instance. In our context, w-
e can think of the treatment effect surface τ (X) as our response surface, and note that we want to choose experiments that are informative about the treatment effect surface, in a sense we will explore below.
1.5 Structure of Paper
Section 2 motivates the problem of site selection, and studies the case where the population of sites is observed, describes the assumptions needed to use covariates to select sites, states theoretical upper bounds on the downstream errors in estimating the PATE and CATE due to site selection, formulates the optimization problems associated with each estimand, and states algorithms to implement each procedure. Section 3 describes the application of Wasserstein DRO to the problem, motivates robust -
upper bounds, and describes a cutting-plane algorithm to implement Wasserstein DRO that leverages a game theoretic interpretation of the DRO problem. Section 4 studies the behavior of the site selection procedures by simulation. I study the performance of the methods against randomization as a function of signal strength, and show that these methods have good performance relative to randomization methods even for relatively weak signal strengths. I also characterize the robustness behavior of Wass-
erstein DRO empirically, and show that increasing the robustness radius in practice increases the coverage of the selected set. Section 5 reanalyses Crépon et al. [2015], an experiment in Morocco that randomized encouragement to access microcredit. I generate semi-synthetic treatment effects based on this data, and assess the behavior of the optimal transport and DRO methods compared to Synthetic Purposive Sampling and randomization methods as a function of problem size, signal strength, and distr-
ibution shift. Section 6 concludes.
2 Where to Experiment? The Problem of Site Selection
2.1 Overview of the Problem
Consider a researcher who is faced with a universe of sites P, from which they must choose a subset S of sites, subject to the constraint that they can choose at most K sites. The researcher’s goal is to choose K sites that ‘best represent’ the population P, in a sense that we will consider more specifically below. We can formalize this by saying that the researcher must choose K sites that minimize a specific objective problem. The researcher is interested in the results of a downstream analysis -
of an experiment: they will eventually conduct an experiment and get an estimate of their population estimand of interest. The goal is to minimize the error of this estimate of the population quantity by selecting the ‘best’ sites at the planning stage of the experiment.
12

Draft
1. The researcher defines a population of experimental sites P, and chooses an estimand of interest (the P AT E or the CAT E).
2. The researcher observes covariate information about a subpopulation of sites P ⊆ P.
3. The researcher chooses a subset S ⊂ P in which to run an experiment, where S contains at most K sites.
4. The researcher runs an experiment in the S sites, in-sample error is observed, and out-of-sample error is realized.
Figure 1: The Researcher’s Site Selection Problem
13

Draft
Remark 1. When P = P, the researcher observes the full target population and faces a standard optimal transport problem: select sites S to minimize Wp(P, S), the representation error. When P ⊂ P, the researcher faces population uncertainty and must guard against the possibility that the observed sites P do not represent the true target population P; the distributionally-robust method addresses this uncertainty.
2.2 Different objectives of Site Selection
The choice of objective function depends on the research context. First, the researcher must choose an estimand: they may be interested in the Population Average Treatment Effect (PATE), or the Conditional Average Treatment Effect (CATE).
Definition 2 (Population Average Treatment Effect (PATE)). EP[Y (1) − Y (0)]
Definition 3 (Conditional Average Treatment Effect (CATE)). EP[Y (1) − Y (0)|X = x]
For notational simplicity, I will write τ ≡ Y (1) − Y (0) and τ (x) ≡ Y (1) − Y (0)|X = x, which are related by τ = R τ (x)dx. These represent fundamentally different statistical objectives that lead to different site selection strategies. In selecting the sites for the PATE, the downstream task is to estimate a functional : we seek to estimate a single number τ = E[Y (1) − Y (0)] that summarizes the average treatment effect across the population. Estimating the CATE is a function estimation probl-
em: we seek to estimate the entire function τ (x) = E[Y (1) − Y (0)|X = x] that describes how treatment effects vary across the covariate space. This distinction has direct implications for site selection. For parameter estimation (PATE), we want sites that provide an efficient estimate of the population average. This requires representative sampling that balances coverage of different population subgroups. For function estimation (CATE), we want sites that enable accurate interpolation of τ (x) a-
cross the entire support of X. This requires broad coverage of the covariate space to minimize extrapolation error when predicting treatment effects at unobserved covariate values.
2.3 Site Selection When the Population is Observed
First, consider the case where the full population of sites is known to the researcher, the researcher has collected covariate information about all possible sites, and they can choose to run an experiment in any of those sites.2 This describes the case where P = P. In this case, the expectations described in Definitions 2 and 3 are taken over the observed subpopulation P , because the population and subpopulation exactly coincide. The below errors are ‘downstream’, because they are not realized u-
ntil the analyst actually conducts the experiment. These quantities can be defined in advance of the experiment, however, and the infeasible problem that the analyst would like to solve can be stated.
2.3.1 Minimizing the Error of the PATE
For the PATE, we suppose that the researcher wants to minimize the Mean Squared Error of the downstream treatment effect estimate:
2The formal analysis in Section A does not make this assumption.
14

Draft
Definition 4. PATE problem when the population is observed
mSin M SEPATE = mSin E


1
|P |
X
i∈P
τi − τˆS
!2
 subject to |S| ≤ K
Where the expectation is taken over randomness in treatment assignment and downstream estimation.3
2.3.2 Minimizing the Error of the CATE
For the CATE, we suppose that the researcher wants to minimize the expected Precision in Estimation of Hetereogeneous Effect [Hill, 2011, Shalit et al., 2017].
Definition 5 (PEHE).
PEHE =
Z
X
τ P (x) − τˆS(x) 2 dx
This gives us the researcher’s minimization problem:
Definition 6 (CATE problem when population is observed).
mSin P EHE = mSin
Z
X
τ P (x) − τˆS(x) 2 dx subject to |S| ≤ K
Because these errors are downstream, they are unobserved, and this exact minimization problem is infeasible. We can, however, use covariates to study feasible versions of these problems, and provide guarantees about how close the solution to these feasible problems are to the infeasible problems.
2.4 Assumptions Needed to Use Covariates To Select Sites
Assumption 7 (Observed Covariates Are Informative About Treatment Effects).
∃x, x′ ∈ supp(X) such that τ (x) ̸= τ (x′)
In words, treatment effects vary across the covariate space, making site selection based on covariates meaningful.
Assumption 8 (Common Mechanisms Across Sites). For sites s ̸= s′:
EP[τ (x, S = s)] = EP[τ (x, S = s′)]
This stipulates that covariates have the same effect on treatment effect values across sites.
Assumption 9 (Lipschitz Continuity of τ ). The treatment effect function τ : Rd → R is Lipschitz continuous with constant L:
|τ (x) − τ (x′)| ≤ L · ∥x − x′∥ ∀x, x′ ∈ Rd
3Note that S here is a set, not an index: we are optimizing over possible selections S, and calculating the PATE given that site selection.
15

Draft
This ensures that treatment effects vary smoothly with covariates. When covariate values change, treatment effects must vary within an envelope defined by the size of the change of covariate values. This assumption is important, because it allows us to move from claims about covariates to claims about treatment effects.
Assumption 10 (Independence of Experimental Design and Site Selection). Let Zl be the unit-level treatment assignment indicator and Si be the site inclusion indicator. Then Zl ⊥⊥ Si.
2.5 Optimal Transport: Some Tools and Definitions
In the next section, we use the tools of optimal transport to derive bounds on the errors of the M SEP AT E and P EHE. First, I introduce some terminology and notation, and a brief sketch of relevant concepts needed to state and solve our minimization problem. Optimal transport is a powerful methodological framework with broad application to problems in causal inference. Optimal transport is concerned with moving mass between a source and a target in the most efficient way. An original motivating -
example, known as the Monge-Kantorovich Problem [Monge, 1781, Ambrosio, 2003, Vershik, 2013], can be heuristically described as follows. Given a set of Parisian bakeries with specific production schedules and a set of cafes with specific consumption demands, located across Paris, what is the most efficient way to route bread from bakeries to cafes that minimizes the total transport distance? A transport map formalizes the idea of one possible solution to this problems: a collection of routes from -
bakeries to cafes, stored as a matrix. More formally, we have:
Definition 11 (Transport plan). A transport plan between discrete distributions PX = Pn
i=1 piδxi and QY = Pn
i=1 riδyi is a matrix {πij}(n,m)
(i=1,j=1) such that Pn
i=1 πij = pi
and Pm
j=1 = ri.
Where δ is the Dirac delta. Notice that πij has row sums equal to pi, the total mass of the empirical distribution PX, and column sums equal to ri, the total mass of the empirical distribution QX. In order to evaluate different transport plans, we need a way to assess the costs of a given proposed transport plan. A cost function describes the cost of travelling from X to Y . We use lp distances as our cost function, so that c(X, Y ) = dp(X, Y ) = ||X − Y ||p. For p = 1, this gives us the absolute -
distance, and for p = 2, this is the squared distance between X and Y . The optimal transport plan is the plan π∗ that in fact minimizes the distance between P and Q, for a given cost function c(X, Y ). That is,
Definition 12 (Optimal Transport Plan). A transport plan π∗ is optimal if
π∗ = arg inπf
n
X
i=1
m
X
j=1
πij||xi − yj||p
That is, if π∗ minimizes the cost of transporting mass from P to Q measured in the p-norm. We can think of the solution to the optimal transport as being the shortest possible distance between X and Y , given the distributions P and Q. The p-Wasserstein distance formalizes the notion of the shortest possible distance between P and Q, and is specified in terms of an optimal transport plan:
16

Draft
Definition 13 (p-Wasserstein Distance). The p-Wasserstein distance between discrete distributions P and Q is given by:
Wp(P, Q) = inπf
n
X
i=1
n′
X
j=1
πij||xi − yj||p
In our bakery example, this is defined in terms of the best possible solution to the routing problem between bakeries and cafes. Note the duality between the Wasserstein distance and transport plans: the Wasserstein distance is the shortest distance from P to Q.4
I use the tools of optimal transport to derive upper bounds on the site selection problem: the Wasserstein distance is central to the theory that follows. I use PX to denote the empirical distribution of covariates in the population, and SX to denote the empirical distribution of covariates in the sample.
2.6 Upper-Bounding Errors Due to Site Selection
In order to minimize the error on the M SEPATE and PEHE, we want to find a feasible upper bound on the problem that we can minimize via an optimization procedure. I derive two such bounds below. These bounds have the following properties:
The bounds do not depend on a specific model of treatment effects. That is, they are generically applicable to any site selection problem (as long as treatment effects vary smoothly with covariates).
The bounds make explicit the role of unmeasured heterogeneity. This allows us to be explicit about what our site selection tools can and cannot achieve, and to assess their performance under unmeasured heterogeneity empirically. We can upper bound the errors of the M SEPATE and the P EHE by the 1-Wasserstein and 2-Wasserstein Distances between PX and SX, respectively. In each case we have a sensitivity parameter ηp, which measures how much the conditional distribution of unobserved covariates U di-
ffers between population P and selected sample S, given observed covariates X, which I call unmeasured heterogeneity.5
2.6.1 Upper-Bounding the MSE of the PATE
Theorem 14 (1-Wasserstein Bound on the MSE of the PATE).
M SEPATE ≤ L2 · [W1(PX , SX ) + η1]2 + σ2
S
4A political science versions of the optimal transport problem. Suppose we have a set of precincts and a finite set of campaign workers with different home locations. What is the most efficient way to assign campaign workers to precincts to minimize total distance traveled? 5This captures two factors: signal-to-noise ratio, or how much treatment effects depend on unobserved U ; and unobserved covariate shift: how the distribution of U between population and sample differs. The experimental planner-
 observes only covariates and wants to know i) whether X is sufficient for treatment effects and ii) whether their sample is similar to the population on unobserved dimensions. This is unmeasured heterogeneity in the sense of site-level selection bias, rather than the more usual individual-level treatment assignment bias.
17

Draft
Where η1 = EPX [W1(PU|X, SU|X)] represents the degree of unmeasured heterogeneity, and
σ2
S represents irreducible estimation error. Note that η1 conditions on observed covariates X, capturing only the residual unobserved variation. When unobservables are independent of observables (U ⊥⊥ X), we have η1 = W1(PU , SU ), the full distance between unconditional distributions. When unobservables are perfectly predictable from observables (U = f (X)), we have η1 = 0. Thus η1 automatically adjusts for observable-unobservable correlation, representing only the unobserved heterogeneity that rem-
ains after accounting for what we can measure.
2.6.2 Upper-Bounding the PEHE
Theorem 15 (2-Wasserstein Bound on the PEHE).
P EHE ≤ L2 · [W2(PX , SX ) + η2]2 + σ2
S
Where η2 = EPX [W2(PU|X, SU|X)] represents the effect of unmeasured heterogeneity, and
σ2
S represents irreducible estimation error.6
2.6.3 Discussion of Bounds
These bounds allow us to specify site selection as an optimization problem. The goal of these bounds is to find a feasible target for us to minimize via optimization. In both cases, our losses are upper-bounded by:
Wp(PX, SX) for p ∈ {1, 2}
The p-Wasserstein distance between empirical distribution of covariates in the population and the sample. It is straightforward to minimize this quantity by choice of S using linear programming, as I show below.
Optimal site selections for the PATE and CATE differ. These bounds also help us to understand the difference in goals between selecting sites optimal for the PATE and selecting sites optimal for the CATE. The 1-Wasserstein distance places more weight on location, rather than variance; whereas the 2-Wasserstein distance more heavily penalizes outliers.
6Why 1-Wasserstein for the PATE and 2-Wasserstein for the CATE? There is both a technical explanation and a substantive explanations. In the proofs of Theorem 14 and Theorem 15, we get two upper bounds. In the first case, we note that the difference in estimated ATEs is a difference of linear functionals, and apply Kantorovich-Rubinstein to this difference. This is upper bounded by ther 1-Wasserstin distance. In the second case, the PEHE is the integral of the squared pointwise errors in estimatin-
g τ (x) over X. The intuition is that squared pointwise errors |τ (x) − τˆ(x)| are bounded by L||x − y|| by Lipschitz continuity, so squared pointwise errors are bounded by L2||x − y||2; integrating both sides yields the 2-Wasserstein distance. Another way to compare this is that in the PATE case, we are interested in linear function approximation, which yields linear penalties. In the CATE case, we are interested in an integral of squared pointwise errors – which has the same form as the 2-Wasser-
stein distance by construction.
18

Draft
The bounds include sensitivity parameters ηp, which describe the effect of unobserved heterogeneity. Specifically, varying ηp through simulation, we can empirically assess when site selection methods outperform sampling, which, because they are randomized, are broadly robust to unobserved heterogeneity. This also allows us heuristically to think about the role of data collection in the site selection process. In the best case scenario, when we have perfect data collection, covariates are sufficien-
t for treatment effects, so that ηp = 0, and site selection using observable covariates is a good idea. In the worst case, observed covariates are completely uninformative about unobserved covariates, so that U ⊥⊥ X, and E[Wp(PU|X, SU|X)] = E[Wp(PU , SU )].
2.7 Minimizing The Upper Bounds Via Linear Programming
The bounds derived in the previous section give us clear objectives. If we want to select sites optimal for the PATE, we choose the sites S that minimizes the 1-Wasserstein distance between the empirical distribution of covariates in the selected sites SX and the empirical distribution of the covariates in the population PX. For the CATE, we select the sites that minimize the 2-Wasserstein distance. From Theorem 14 we now have the following optimization problem to minimize the upper bound on M SEP-
ATE:
mSin W1(PX, SX) subject to |S| ≤ K
An important result from ? is that optimal transport problems are linear programs: that is, we can find optimal transport plans by writing out and solving a corresponding linear program (minimize P cijπij subject to marginal constraints) using the optimization toolkit. To solve our Wasserstein distance minimization problem, where we want to select discrete numbers of sites, we can therefore formulate it as a Mixed Integer Linear Program (MILP). Define the site selection indicator si = I{s ∈ S}. Th-
en, our optimization problem is:
19

Draft
MILP formulation for Site Selection Problem (ρ = 0)
ms,iπn
|P |
X
j=1
|P |
X
k=1
πjk∥xj − xk∥p
subject to:
|P |
X
j=1
sj ≤ K (Site budget constraint)
|P |
X
k=1
πjk = 1
|P | ∀j ∈ P (Population marginal)
|P |
X
j=1
πjk = sk
P|P |
l=1 sl
∀k ∈ P (Selected Subset’s marginal)
πjk ≤ sk ∀j, k ∈ P (Can only transport to selected sites)
πjk ≥ 0 ∀j, k ∈ P (Non-trivial transport plan)
sj ∈ {0, 1} ∀j ∈ P (Site selection indicator is binary)
Proposition 16. For appropriate choice of p, minimizing the p-Wasserstein distance is equivalent to solving the above Mixed Integer Linear Program.
Implementation details Because the optimal transport problem can be written as a linear program, it can be implemented and solved directly. I implement this using the R Optimization Infrastructure (ROI) framework with multiple solver backends. The primary fallback solver is GLPK, which is freely available and provides reliable solutions for moderately-sized problems. For larger instances, the implementation calls Gurobi, a commercial solver that typically provides faster solution times and better -
numerical stability. The solver selection is automatic: the code attempts to use Gurobi if available, falling back to GLPK otherwise. I use LP relaxation and warm starting to improve computational performance for larger problem instances. LP relaxation replaces the binary site selection variables zj ∈ {0, 1} with continuous variables zj ∈ [0, 1], converting the converting the MILP to a linear program that can be solved in polynomial time. This relaxed solution then provides a warm start for the ex-
act MILP solver by initializing binary variables to rounded values of the relaxed solution. Runtime experiments show this makes a significant difference in practice (see Section C.2). For problems with n > 100 sites, LP relaxation is used as the default.
3 Site Selection Under Distribution Shift
In the previous section, we studied the problem of selecting sites optimal for the PATE and the CATE given observed information about the covariates. We can think of this as the full-information case: we assume that we have good knowledge of the data-generating process that determines treatment effects, and can have enough information to actually minimize the MSE of the PATE and the PEHE.
20

Draft
Now, however, we explicitly take account of the fact that the empirical distribution PX is not guaranteed to be a perfect representation of the underlying distribution that generated the data. To motivate Wasserstein DRO, we first define an ambiguity set, or Wasserstein ball:
Definition 17 (Ambiguity Set / Wasserstein ball). An ambiguity set of radius ρ around an empirical distribution Pn is the set of all distributions that are ρ-close to P in the p-Wasserstein metric.
B(Pn, ρ) = {P ∈ P : Wp(Pn, P ) ≤ ρ}
We can incorporate our uncertainty about the underlying distribution into our optimization problem via the ambiguity set. In particular, we want to minimize the worst-case risk7, in the following formal sense:
Definition 18 (Distributionally-Robust Site Selection Problem).
min
S :|S|≤K
sup
P ′∈B(P,ρ)
Wp(P ′, S)
Where, by plugging in p ∈ {1, 2}, we recover the site selection problems for the PATE and CATE respectively.
3.1 Wasserstein DRO as Game between Researcher and Nature
Wasserstein DRO has a useful game-theoretic interpretation. Writing out the DRO problem again, we can see:
min
S :|S|≤K
Inner problem: Nature selects worst-case distribution
z }| {
sup
P ∈B(P,ρ)
Wp(P, S)
| {z }
Outer problem: Researcher selects sites
The inner supremum is an action by adversarial Nature, to choose the worst-case distribution P , subject to the constraint that they can reallocate mass equal to at most ρ. In practice, this means that Nature can choose to relocate points adversarially (in practice, as outliers), selecting the worst-case distribution Q, and our result will still represent a valid upper bound on the chosen minimand. The outer minimization represents our best response to this adversarial perturbation. In short, ρ re-
presents the budget of covariate shift that the researcher wishes to insure against.
3.2 Algorithm for Wasserstein DRO
This game-theoretic interpretation is not just a point of theoretical interest: it in fact motivates the algorithm I use to implement the DRO version of site selection. We have:
7Note that this differs from the sense of worst-case risk described in [Egami and Lee, 2024]. They mean that they optimize an upper bound analogous to our results in the previous section; here I mean that we minimize the risk over an adversarially chosen distribution in the ambiguity set.
21

Draft
Figure 2: How Wasserstein DRO applied to Site Selection works in practice. Given an initial site selection, the adversary perturbs the probability mass assigned to observed sites. The researcher chooses a new site selection, and the adversary responds. This process continues until the selection is stable.
22

Draft
Algorithm 1 Wasserstein DRO for Site Selection
Require: Site coordinates X ∈ Rn×d, number of sites s, robustness radius ρ, tolerance ε Ensure: Selected sites S∗, robust distance W ∗
p
1: Initialize: Solve non-robust problem to get S(0) 2: Set worst-case scenarios Q(0) = ∅, t = 0 3: while not converged do 4: Given site selection S(t), Nature chooses an adversarial perturbation: 5: Q(t+1) ∈ arg maxQ:Wp(Q,P )≤ρ Wp(Q, S(t))
6: Let UB(t+1) = Wp(Q(t+1), S(t)) ▷ Upper bound 7: The adversarial perturbation is stored in memory:
8: Q(t+1) ← Q(t) ∪ {Q(t+1)}
9: Researcher minimizes site selection error against all observed adversarial perturbations:
10: S(t+1) ∈ arg minS:|S|=s maxQ∈Q(t+1) Wp(Q, S)
11: Let LB(t+1) = maxQ∈Q(t+1) Wp(Q, S(t+1)) ▷ Lower bound
12: if UB(t+1) − LB(t+1) < ε then
13: break ▷ Gap is small: solution is near-optimal 14: end if
15: t ← t + 1 16: end while
17: S∗ ← S(t+1)
18: return Selected sites S∗ and robust distance W ∗
p
The ambiguity set B(P, ρ) is built constructively out of Nature’s best responses to the Researcher’s site selections. We do not need to enumerate all elements of the Wasserstein ball, which is an infinite set; we need only enumerate the adversarial perturbations that increase the Researcher’s observed loss.
Proposition 19. The solution S∗ of Algorithm 1 is ε-close to the minimizer of the Wasserstein DRO site selection problem.
3.3 Intuition: What kind of robustness is Distributional Robust
ness?
Incorporating the robustness parameter ρ allows to describe new bounds on our estimates. This gives us the robust upper-bounds:
sup
Q∈B(Pn,ρ)
M SEPATE(Q, S) ≤ L2 · (W1(P, S) + ρ + η1)2 + σ2
sup
Q∈B(P,ρ)
P EHE(Q, S) ≤ L2 · (W2(P, S) + ρ + η2)2 + σ2
Where these guarantees are given over a Wasserstein ball8 around the observed distribution. DRO ensures that the solution is robust to distribution shift – that is, robust to changes in the distribution of observed covariates. We can also think of this as
8Constraining shifts to be within a Wasserstein ball simply limits the total mass that can be moved around, and specifies a cost – either an l1 or l2 penalty, depending on the estimand – for doing so.
23

Draft
measurement error: our solution should be robust to a specified degree of mismeasurement ρ. This is in contrast to the parameter ηp, which represents outcome model error due to unmeasured heterogeneity. procedure. The Wasserstein ambiguity set B(PX, ρ) = {Q : Wp(Q, PX) ≤ ρ} contains all distributions that can be reached by moving the observed covariate distribution’s mass by at most ρ units. Each distribution Q in this set represents a different way our observed site characteristics could be wrong-
: measurement error, temporal drift, or systematic misrepresentation of the target population. The core idea is that an adversary creates gaps in how representative our sample is by strategically relocating probability mass. ρ represents uncertainty about where the population is located in covariate space. The larger the budget ρ, the more mass the adversary can relocate to regions poorly served by our specific site selection. The “worst case” distribution Q∗ is the one that maximally exploits dif-
ferences in site characteristics. For example: the worst-case distribution might concentrate all mass in rural extremes, given an initial selection of urban sites. By optimizing against the worst case, we obtain a site selection that is robust to every distribution in the ambiguity set. This is because our selection must perform well against the adversary’s best response: which means it performs at least as well against any other distribution the adversary could have chosen. In this sense, Wassers-
tein DRO provides insurance against all possible covariate shifts of magnitude ρ, representing all the ways we could have mismeasured the true site characteristics. The robustness parameter ρ controls shifts in observed covariates, while our bounds include an additive term ηp = EPX [Wp(PU|X, SU|X)] capturing unobserved heterogeneity. This formulation already accounts for observable-unobservable correlation: when X and U are independent, ηp equals the Wasserstein distance between unconditional dist-
ributions; when they are perfectly correlated, ηp approaches zero. The additive structure (Wp(P, S) + ρ + ηp) separates robustness to observable shifts (ρ) from residual unobserved heterogeneity (ηp). In practice, the adversary shifts the entire observed distribution, including components correlated with unobservables. This means that choosing ρ based on empirical variation provides implicit protection against correlated unobserved factors. This is not explicitly stated in the bounds, which are co-
nservative and describe the pessimistic case where X and U are orthogonal. When X and U are correlated, the effective robustness exceeds what the additive bound suggests, as the ρ-ball constrains both observable variation and its correlated unobservable components.
3.4 Procedure for Choosing Robustness Parameter ρ
How should one choose the degree of robustness in practice? Previous work uses theory based on bootstrapping to estimate a radius based on observed variation in the data [Blanchet and Murthy, 2019]. A problem with this approach is that it essentially assumes away distribution shift: bootstrapping relies on asymptotics based on resampling, where the bootstrap distribution converges to the underlying distribution of the data [Bickel and Freedman, 1981, Efron and Tibshirani, 1993]. In Section D, I de-
scribe a procedure for selecting ρ based on finding ‘stable’ solution sets at different levels of empirical variation in the data, and allowing the user to specify what degree of variation they would like the solution to be robust to. The idea is to run grid search over possible values of ρ, and evaluate the stability (in
24

Draft
terms of Jaccard stablility) of the solution set as ρ changes. Intuitively, there must be a maximum value, ρmax, beyond which the solution set cannot get any more ‘extremal’; the first step of the algorithm is to do a greedy search for this value. Then, given a value ρmax, the algorithm looks for stable solution sets on the interval [0, ρmax], and outputs them, corresponding to ordered degrees of robustness.
4 Simulations: Randomization versus Optimization,
and Solution Sets
4.1 Overview of Simulations
The simulations address three questions: (1) How do solution sets differ between 1Wasserstein (PATE)and 2-Wasserstein (CATE) optimization? (2) How do site selection solutions change as the robustness parameter ρ increases? and (3) How do optimization methods compare to selection methods based on random sampling and stratified sampling? First, I provide visual characterizations of solution sets generated by different objectives, illustrating how the 1-Wasserstein objective (PATE) trades off between-
 central location and coverage while the 2-Wasserstein objective (CATE) more heavily penalizes leaving any region uncovered. Second, I plot the evolution of solution sets, using synthetic data, as the parameter ρ changes. These simulations show that increasing ρ increases the size of the convex hull spanned by the solution set. This comes at a price, however, as the ‘naive’ PATE estimate taken by aggregating sites is shifts as ρ increases. Finally, I use simulations to evaluate when optimization-b-
ased selection outperforms randomization approaches. For these performance comparisons, I generate candidate populations with covariates Xs ∼ N (0, I5) and site-level treatment effects τs = p1 − η2f (Xs) + ηεs, where η ∈ [0, 1] controls the signal-to-noise ratio: the fraction of treatment effect variation unexplained by observed covariates. I compare simple random sampling (uniform selection), stratified random sampling (k-means clustering followed by within-stratum sampling), and the optimization-
 methods across varying covariate signal-to-noise ratios. The key finding is that optimization methods dominate when η < 0.7 (equivalently, when observable covariates explain more than 50% of treatment effect variation).
4.2 Characterizing site selection solution sets
4.2.1 Site selection for the PATE and the CATE
25

Draft
Figure 3: Illustrative solution sets for the PATE and the CATE. Both methods simultaneously solve for optimal Voronoi partitions
of the covariate space, and optimal representatives within that partition. They differ with respect to the p-norm used to solve the problem.
We can understand both methods as optimal versions of stratified sampling (see Appendix E); the l1 norm places more weight on location,
while the l2 norm places more weight on minimizing the variance of the site selection. is therefore an optimal version of stratified sampling.
The difference is between choosing points that well represent the support of a function, τ (X), which requires good coverage of the space of
X, versus choosing points that well represent a functional E[τ (X)], which requires choosing sites that provide good coverage of a single
point, the population centroid.
26

Draft
The above bounds show that there are different site selection objectives for the PATE and the CATE. In the PATE case, we care about the 1-Wasserstein Distance, and in the CATE case the 2-Wasserstein distance. Recall that the 1-Wasserstein distance contains the absolute norm, and the 2-Wasserstein distance is a function of the l2 norm. This entails that while the cost of increasing distance is linear in the 1-Wasserstein case, the cost of increasing distance from unselected points to selected point-
s is quadratic in the difference of distances. This should penalize selections that are far away from unselected points more in the 2-Wasserstein case, leading to a more compact set for the 1-Wasserstein solution and a larger set for the 2-Wasserstein solution. This is intuitively appealing in the causal inference context, since the 1-Wasserstein distance is associated with the PATE, where our best guess of the PATE is the centroid of our observed sites. The CATE problem involves estimating a func-
tion over the support of X, and so, intuitively, we would want a solution set with improved coverage over the support of X. To test these theoretical predictions, I generate synthetic datasets with known covariate distributions and compare the geometric properties of optimal site selections under both objectives. The simulation uses |P | = 30 candidate sites distributed across a twodimensional covariate space, from which K = 5 sites are selected. In practice, for small-sized problem instances, the-
 solution sets are fairly similar. This is because, for sufficiently well-behaved data, site selections that minimize the 1-Wasserstein distance also minimize the 2-Wasserstein distance and vice versa. This behavior is analogous to that of Least Absolute Deviations versus Ordinary Least Squares – while using the l1 distance rather than the l2 distance does in fact produce different solutions, these solutions may not be qualitatively different. However, as the dimensionality and complexity of the c-
ovariate space increases, the differences become more pronounced. The CATE solutions exhibit systematically larger convex hull areas and greater dispersion, consistent with the goal of function estimation over the support of the space rather than centroid approximation. In our causal inference context, the practical implication is that, for small sized problem sets, solution sets that are optimal for the PATE are likely also to be optimal for the CATE. The CATE objective, in principle, prioritizes-
 coverage over the space, so that we can learn E[τ |X = x] for a large support X. The PATE objective prioritizes coverage of the center, so that we learn the average location with high probability. In practice, however, good coverage of the space implies good coverage of the average, and a solution that minimizes absolute distance from selected sites to non-selected sites will also provide good coverage of the support of the covariates.
4.2.2 Effect of robustness parameter ρ on solution set coverage
The robustness parameter ρ controls the budget allocated to the adversary in the distributional robustness problem. As ρ increases, the DRO framework hedges against increasingly severe distribution shifts by selecting more dispersed site configurations. This section demonstrates how robustness considerations systematically alter the geometry of optimal selections. To illustrate this behavior, I solve the DRO problem across a range of ρ values and track the evolution of site selection patterns. The-
 simulation uses a two-dimensional covariate space with 30 candidate sites, selecting 5 sites at different robustness levels.
27

Draft
−3
−2
−1
0
1
2
x2
−2 −1 0 1 2
x1
ρ
0.0
0.2
0.4
0.6
Hull areas: .=0 (1.30) −> .=0.7 (6.11)
DRO Site Selection: Hull Evolution with Gradual Density
−3
−2
−1
0
1
2
x2
−2 −1 0 1 2
x1
ρ
0.0
0.2
0.4
0.6
Arrow shows direction of increasing .
Centroid trajectory of selections
Figure 4: As ρ increases, site selections expand. Left panel : The volume of the set defined by the selected sites increases from 1.30 to 6.11 as ρ increases from 0 to 0.7. Right panel: Centroids follow a path away from the initial solution, showing that how the selection focus shifts (marginally) away from the population center toward broader coverage as distributional uncertainty increases. This illustrates the ‘price of robustness’ some amount of drift in our (naive) point estimate of the PATE.
28

Draft
This robustness-coverage trade-off has implications for experimental design under uncertainty. Researchers facing potential distribution shift should choose ρ values that balance the benefits of robustness against the costs of suboptimal site allocation. The Jaccard radius selection procedure, described in Section 3.5, provides an automated way to select this radius, with implications for the size of the hull selected.
4.3 Comparing random sampling and optimization methods via
simulation
4.3.1 PATE: Optimization vs randomization
Randomization is minimax optimal for experimental selection when the researcher has no prior information about experiments [Kallus, 2020]. We are essentially using prior information, in the form of covariates, to choose sites, and would expect that the quality of our site selection improves as covariates become more informative. The key question is: at what threshold of covariate informativeness do optimization methods cease to provide benefits over simpler approaches? This threshold determines th-
e practical applicability of the optimization procedures. To evaluate this, I run a simulation in which the site selections are evaluated over a grid of η values, where η controls the degree of unmeasured confounding, as in the upper bounds derived above. There is a mild reparameterization, as η is now defined on the support [0, 1], with the interpretation that η = 0 implies that covariates are sufficient, and there are no unobserved determinants of treatment effect, while η = 1 implies that covar-
iates are completely uninformative about treatment effects, and the optimization methods are essentially fitting to noise. The simulation generates treatment effects using the parameterization detailed in Appendix B.1, which allows systematic variation of signal strength while maintaining realistic correlation structures between covariates and outcomes. The goal is to compare the optimization procedures to 1) complete randomization, in which sites are selected at random and 2) stratification, in w-
hich k-means is first used to separate the sites into strata, and sites are then sampled from the k clusters. This is the procedure suggested in Tipton [2013b]. These represent two different assumptions about our prior information. Complete randomization implies that we have no information about potential outcomes from covariates. Stratification implies that we have some information about covariates: we know that some covariates are important enough that we should condition our randomization on th-
em. Stratification can be understood as a compromise between complete randomization and optimization approaches: it is a constrained randomization approach. Results are displatyed in Figure 5 and Figure 6. Optimization methods outperform randomization when covariates are informative up to η ≈ .7. We can translate η ≈ .7 =⇒ R2 ≈ .5. The Crépon study below has an R2 of .66, which would mean we had good enough covariates to consider optimization-based selection methods. This breakdown point has impor-
tant practical implications. Researchers should validate covariate informativeness before relying heavily on optimization-based site selection. This suggests a straightforward moral: optimization methods outperform random assignment when covariates are sufficiently informative about potential outcomes.
29

Draft
−0.015
−0.010
−0.005
0.000
0.005
0.00 0.25 0.50 0.75 1.00 . (Confounding Level)
Difference in MSE_PATE (negative = optimization wins)
Best Sampling
Method stratified
95% Bootstrap confidence intervals.
Breakdown Analysis: Optimization beats stratified sampling until . = .7
Colored points show which sampling method performs better
Figure 5: Performance of PATE optimization method as unmeasured heterogeneity increases. The optimization advantage diminishes as η approaches 0.7, beyond which randomization weakly dominates. Error bars represent 95% confidence intervals based on 1000 simulation replications.
30

Draft
1
1
1
1
1
1
1
1
1
1
1
1
1
2
3
1
1
2
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
1
1
1
1
2
1
1
1
1
1
1
1
1
1
1
1
3
1
1
1
1
1
3
1
1
1
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
2
1
3
1
3
1
3
1
1
1
1
1
1
1
1
1
1
1
1
3
1
3
1
1
1
2
1
2
1
1
1
1
1
1
1
1
1
1
1
1
1
1
2
1
1
3
3
3
2
1
1
1
1
1
1
1
1
2
1
1
1
3
1
1
2
1
3
3
3
3
1
1
1
1
1
1
1
1
1
1
1
1
1
2
1
1
1
3
2
3
1
1
1
1
1
1
1
2
1
1
1
1
1
1
3
1
2
2
3
3
2
2
1
1
1
1
1
1
1
1
1
1
2
1
3
2
1
1
1
3
1
1
3
1
1
1
1
1
1
1
1
1
1
1
1
2
1
2
1
1
1
3
2
1
1
1
1
1
1
1
1
1
2
1
1
1
1
1
1
2
1
1
3
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
1
1
1
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
2
1
1
1
2
1
2
3
3
1
1
1
1
1
1
1
1
1
1
1
1
1
3
3
3
2
3
1
3
2
1
1
1
1
1
1
1
1
1
1
1
1
1
2
1
3
2
3
1
1
1
1
1
1
1
1
1
2
1
1
2
1
1
2
1
1
1
3
3
1
1
1
1
1
1
2
1
1
1
1
2
1
3
1
1
2
1
1
1
1
1
1
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
3
1
1
3
3
3
1
1
1
1
1
1
1
1
1
1
1
1
2
2
1
2
3
3
3
2
3
1
1
1
1
1
1
1
1
1
1
1
1
3
2
1
1
1
2
3
3
3
1
1
1
1
1
1
1
1
2
1
1
1
2
2
1
3
2
3
1
3
3
1
1
1
1
1
1
1
1
1
1
1
1
2
2
1
3
3
1
3
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
3
1
2
3
1
1
1
1
1
1
1
1
1
1
1
1
2
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
1
3
3
3
2
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
3
1
2
2
3
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
2
1
1
1
3
3
1
2
1
1
1
1
1
1
1
1
2
1
1
1
2
1
1
3
1
1
1
2
1
3
3
3
3
3
3
2
2
3
3
3
3
3
3
2
3
3
3
3
2
3
3
3
3
3
3
3
3
3
3
3
2
3
3
3
2
3
3
2
3
3
3
3
3
3
3
2
2
3
3
3
3
1
3
3
3
3
3
2
3
2
3
2
3
3
3
3
3
3
3
2
3
2
3
3
2
3
3
3
2
2
2
3
1
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
3
2
3
3
2
3
3
3
3
3
3
3
3
3
3
2
3
3
3
3
3
2
2
2
1
2
1
3
3
3
3
3
3
3
3
3
2
3
2
1
3
3
1
3
1
2
2
2
3
3
3
3
2
3
3
3
3
2
3
3
2
1
3
3
2
2
1
2
2
3
3
3
3
3
3
3
3
3
2
3
3
2
2
2
3
3
1
1
3
3
3
3
3
2
3
2
3
3
3
3
3
3
1
3
3
3
2
2
3
3
2
3
3
3
3
3
2
3
3
3
3
2
3
3
2
3
3
3
3
1
3
2
3
3
3
3
3
3
2
3
3
3
3
3
3
3
2
3
3
2
2
2
3
3
3
3
3
3
3
3
2
3
3
3
3
3
2
2
3
2
2
3
3
3
3
3
3
2
3
3
3
3
3
3
3
1
3
2
3
3
3
2
3
2
2
3
3
3
3
3
3
2
3
2
3
3
2
2
2
2
1
3
1
3
1
3
3
3
2
3
3
2
3
2
3
3
2
3
2
3
2
1
3
1
2
3
3
3
3
3
3
3
3
3
2
3
3
3
2
3
3
3
2
2
2
2
2
2
3
3
3
3
3
3
3
3
3
3
2
3
2
3
2
3
3
2
2
2
2
3
3
3
3
2
3
3
3
3
3
3
3
3
3
2
2
3
3
2
2
2
3
3
3
3
3
3
2
3
3
3
2
2
3
3
2
3
1
2
2
3
1
3
3
3
3
3
3
3
3
3
3
3
2
2
3
2
3
3
3
2
2
2
2
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
3
1
2
2
1
3
3
3
3
3
3
2
3
3
3
3
3
3
3
2
2
2
3
2
1
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
1
2
3
1
2
3
2
3
3
3
3
3
3
3
3
3
3
3
2
3
3
3
2
3
2
3
2
3
3
3
3
3
3
3
3
3
3
3
3
3
2
3
1
3
2
2
2
3
2
3
3
3
3
3
3
2
3
3
3
3
3
3
3
2
3
3
3
2
2
2
3
3
3
3
3
3
3
2
2
2
3
3
3
3
3
3
2
2
2
2
3
2
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
3
2
3
3
2
2
2
2
2
2
2
3
3
2
2
2
2
2
1
1
2
2
1
2
3
2
2
2
2
2
2
2
2
2
2
2
3
2
2
2
1
2
2
3
2
1
2
2
2
2
2
3
3
2
2
2
2
2
2
2
2
2
2
1
2
3
2
1
2
2
2
2
2
2
2
3
2
3
2
2
3
2
1
2
1
3
1
2
2
2
2
2
2
2
2
2
2
2
2
2
2
1
3
1
2
3
2
1
3
1
2
2
2
2
2
2
2
2
2
3
2
2
2
2
1
3
3
1
2
1
3
2
2
2
2
2
2
2
2
1
3
2
3
2
2
2
3
2
2
1
1
1
2
2
2
2
3
2
2
2
2
3
2
2
3
3
2
2
3
1
3
1
3
2
2
2
2
2
2
1
2
2
3
2
2
3
1
3
1
1
2
2
1
1
2
2
2
3
2
3
2
2
2
2
1
2
2
1
2
2
3
1
2
2
1
2
2
2
2
2
3
2
2
2
2
3
2
1
3
1
2
2
2
2
1
3
2
2
2
2
2
2
3
2
1
2
2
2
2
2
3
1
2
3
1
1
2
2
2
2
2
2
2
2
3
2
2
2
2
2
1
3
2
3
1
2
2
2
2
2
2
3
2
2
2
2
2
2
2
2
1
3
2
2
1
3
1
1
1
2
2
2
2
2
2
3
2
3
2
2
3
3
1
1
2
1
2
2
2
1
2
2
3
2
2
3
2
3
2
2
3
2
3
1
3
2
1
2
3
2
2
2
2
2
2
2
2
1
3
2
1
2
3
1
2
2
3
1
1
3
3
3
2
2
2
1
2
2
2
2
1
2
1
2
3
1
3
2
2
3
3
3
1
2
2
2
2
3
2
2
2
2
2
2
2
2
2
1
1
2
2
1
1
1
2
2
2
2
2
2
3
2
2
2
3
3
1
1
3
1
2
1
1
1
2
2
2
2
2
2
2
2
2
2
2
2
3
1
1
3
2
2
1
1
1
1
3
2
2
2
2
2
2
2
1
2
2
2
1
1
2
1
1
2
3
1
2
2
2
2
2
2
2
3
2
2
2
2
2
1
1
3
1
1
2
1
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
1
2
3
1
2
3
2
3
2
2
2
2
2
2
2
2
2
1
2
3
2
2
2
3
2
3
2
3
2
2
2
2
2
2
2
2
2
2
2
2
2
3
2
2
2
1
1
1
1
1
2
2
2
2
2
2
3
2
2
2
2
2
2
2
1
2
1
1
1
3
3
2
2
2
2
2
2
2
3
3
3
2
2
2
1
2
2
3
1
1
3
1
3
2
2
2
2
2
2
2
1
2
2
2
1
3
3
1
2
3
2
1
3
opt_pate random stratified
0.100
0.125
0.150
0.175
0.200
0.225
0.250
0.275
0.300
0.325
0.350
0.375
0.400
0.425
0.450
0.475
0.500
0.525
0.550
0.575
0.600
0.625
0.650
0.675
0.700
0.725
0.750
0.775
0.800
0.100
0.125
0.150
0.175
0.200
0.225
0.250
0.275
0.300
0.325
0.350
0.375
0.400
0.425
0.450
0.475
0.500
0.525
0.550
0.575
0.600
0.625
0.650
0.675
0.700
0.725
0.750
0.775
0.800
0.100
0.125
0.150
0.175
0.200
0.225
0.250
0.275
0.300
0.325
0.350
0.375
0.400
0.425
0.450
0.475
0.500
0.525
0.550
0.575
0.600
0.625
0.650
0.675
0.700
0.725
0.750
0.775
0.800
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0.5
0.55
0.6
0.65
0.7
0.75
0.8
0.85
0.9
0.95
1
Selection Intensity .
Confounding Level .
Rank
(1=best)
1.0
1.5
2.0
2.5
3.0
Numbers show performance rank (1 = best average MSE_PATE)
Method Performance Rankings Across Conditions
Figure 6: Optimization breaks down versus random sampling when between 50 − 90% of treatment effect variance comes from unobserved factors (95% CI). η parameterizes the degree of unmeasured heterogeneity. In figure 4a) we can see that optimization outperforms stratification until η > .7. 95% bootstrapped confidence interval for this breakdown point is [.7, .95]. In figure 4b), optimization dominates when signal strength is high (η is close to 0); with stratification beating randomization otherwise-
.
31

Draft
4.3.2 CATE Selection Is Optimal Stratified Sampling
I show this result formally in Section E, and it can be observed empirically in Figure 7. The intuition is that to select sites that provide optimal coverage of the support of the function, 2-Wasserstein transport simultaneously selects an optimal partition and optimal representatives of the space. This is in distinction to stratification, where optimal representatives are identified given a partition. Hence, 2-Wasserstein transport provides a weak lower bound on the error of the stratified sampli-
ng solution.
Figure 7: The CATE optimization method performs roughly equivalently to optimal stratified sampling. Both methods achieve similar PEHE values across different signal strength levels, confirming the theoretical equivalence.
The connection to stratified sampling arises through the geometric structure of optimal transport solutions. The 2-Wasserstein optimal transport problem induces a Voronoi partition of the covariate space, where each selected site serves as “the local representative” for all sites in its Voronoi cell. Formally, for optimal sites {s∗
1, . . . , s∗
K}, the induced partition is Vj = {x ∈ X : ||x − s∗
j || ≤ ||x − s∗
k|| for all k ̸= j}. We can think of these partitions as optimal strata that are learned from the data and adapt to the dimensionality of the covariates.
32

Draft
4.4 Conclusions: When should you use optimization methods in
practice?
These simulations demonstrate that optimization methods outperform random selection when observable covariates explain at least 50% of treatment effect variation (R2 > 0.5 or η < 0.7). This threshold is achieved in many policy-relevant settings for instance, the Cr pon et al. microcredit study analyzed below has R2 = 0.66. Researchers should use optimization when they have strong priors or evidence about treatment effect predictors; otherwise, stratified random sampling is a sensible choice as a c-
ompromise between ‘informed’ and ‘ex ante impartial’ site selection methods. This also highlights the important of collecting prognostic covariates prior to experimental deployment [Bicalho et al., 2022].
5 Simulation: Crépon et al. (2015).
Crépon et al. (2015) studied the effects of a randomized microcredit intervention in Morocco. They considered a population of 162 villages, which were randomized into 81 matched pairs. Treatment consisted of an encouragement campaign to take out credit from Al Amana banks: “door-to-door campaigns, meetings with current and potential clients, contact with village associations, cooperatives, and women’s centers, etc." (129). These villages that were randomized into treatment were a population of sit-
es that were on the periphery of catchment areas of existing branches: the goal was to assess whether taking up microcredit had an impact on a number of economic variables. In this simulation, we take household self-employment activity profits as the outcome. We estimate the effect of treatment, site-level and individual covariates on profits, and estimate synthetic treatment effects for every individual in the sample using observed information. Sites are selected on the basis of aggregate-level s-
ite data, and we then estimate the error in terms of M SEPATE and P EHE for each site selection. A more detailed description of the simulation procedure can be found in Section B.
5.1 Simulation Design
5.1.1 Synthetic Data Generation
For each of 500 simulation runs, we:
1. Sample village-level covariates from the empirical distribution
2. Apply the trained treatment effect model to predict site-level effects
3. Add controlled noise to achieve target signal-to-noise ratios
4. Generate individual-level outcomes consistent with site-level parameters
5. Use each method to select sites
6. Store MSE and PEHE as a function of simulation parameters.
33

Draft
5.1.2 Distribution Shift
Distribution shift is induced by modifying the covariate distributions of candidate sites relative to the deployment population. Site level covariates are shifted in the following way:
Xshifted
s = Xs + ς · dmed
2 · Xs − X ̄
∥Xs − X ̄ ∥
where:
ς ∈ {0.0, 0.4, 0.6, 0.9, 1.7, 3.4}, dmed = medians,s′∥Xs − Xs′∥
We calculate the actual variation in the data – the observed median shift and perturbation of each site s, and use this as a benchmark level of variation. This then allows us to ‘stretch’ sites away from their current location, as parameterized by our choice of the (true, underling degree of shift) ς. The simulation is run for two signal-to-noise ratio levels: .3, .9. These correspond to a low signal and high signal case respectively.
5.1.3 Site Selection Methods
We implement five site selection methods:
• Random: Uniform random selection from candidate sites
• SPS: Synthetic Purposive Sampling using convex hull optimization
• Optimal Transport (Non-Robust): Wasserstein distance minimization without robustness
• Wasserstein DRO: Distributionally robust optimization with uncertainty radius ρ
• Stratification: K-means clustering followed by within-cluster random sampling
Each method selects K sites from a pool of N candidate sites, with (N, K) ∈ (20, 4), (25, 5). These are small site selection sizes, but are nonetheless sufficient to demonstrate the scale advantages of the optimal transport methods.
34

Draft
Figure 8: Sites selected in Crépon et al.
35

Draft
Problem Size Signal Shift Winner Advantage
20 choose 4 0.3 0.0 SPS 71.9% 20 choose 4 0.3 0.4 SPS 48.0% 20 choose 4 0.3 0.6 SPS 9.0% 20 choose 4 0.3 0.9 SPS 45.4% 20 choose 4 0.3 1.7 Wasserstein DRO 39.8% 20 choose 4 0.3 3.4 Wasserstein DRO 49.9% 20 choose 4 0.9 0.0 Optimal Transport 43.6% 20 choose 4 0.9 0.4 Optimal Transport 21.8% 20 choose 4 0.9 0.6 Optimal Transport 30.1% 20 choose 4 0.9 0.9 Optimal Transport 34.2% 20 choose 4 0.9 1.7 Wasserstein DRO 10.1% 20 choose 4 0.9 3.4 Wasserstein DRO 10.9% 25 choose 5 0.3 0.0 Optimal Transport 3-
.4% 25 choose 5 0.3 0.5 Wasserstein DRO 3.5% 25 choose 5 0.3 1.0 Wasserstein DRO 4.7% 25 choose 5 0.3 1.3 Wasserstein DRO 7.9% 25 choose 5 0.3 1.6 Wasserstein DRO 12.0%
Table 1: Results: Error in estimation of the M SEPATE by method result. Bestperforming method over all simulation runs is reported here. Advantage is % reduction in error of the M SEPATE.
5.2 Results
The simulation results demonstrate three main patterns. First, site selection method choice produces larger performance differences for PATE estimation than for CATE estimation. Second, the relative performance of methods depends on signal strength and problem size. Third, distributionally robust methods become preferred under realistic degrees of distribution shift.
5.2.1 PATE Performance Results
For PATE estimation, performance advantages range from 3.4% to 71.9% . Under low signal strength (0.3), SPS dominates when distribution shift is minimal, but Wasserstein DRO becomes optimal when shift exceeds 1.7 times empirical variation. Under high signal strength (0.9), Optimal Transport methods generally outperform alternatives, except under large distribution shift where DRO maintains advantages.
5.2.2 CATE Performance Results
For CATE estimation, performance differences between methods are substantially smaller, with most advantages below 1%. This pattern holds across signal strength and shift conditions, indicating that CATE performance depends more on fundamental signal-tonoise constraints than on site selection method choice. Our results show that site selection for the PATE is qualitatively different to site selection for the CATE. In Section E, I show
36

Draft
Table 2: PEHE Performance Summary Table
Problem Size Signal Shift Winner Advantage
20 choose 4 0.3 0.0 Optimal Transport 0.9% 20 choose 4 0.3 0.4 Optimal Transport 0.3% 20 choose 4 0.3 0.6 Tie < 0.1% 20 choose 4 0.3 0.9 Tie < 0.1% 20 choose 4 0.3 1.7 Wasserstein DRO 0.7% 20 choose 4 0.3 3.4 Wasserstein DRO 0.7% 20 choose 4 0.9 0.0 Tie < 0.1% 20 choose 4 0.9 0.4 Tie < 0.1% 20 choose 4 0.9 0.6 Optimal Transport 0.3% 20 choose 4 0.9 0.9 Tie < 0.1% 20 choose 4 0.9 1.7 Tie < 0.1% 20 choose 4 0.9 3.4 Wasserstein DRO 0.5% 25 choose 5 0.3 0.0 Tie < 0.1% 25 choose 5 0.3 0.5 Optimal Trans-
port 0.1% 25 choose 5 0.3 1.0 Wasserstein DRO 0.1% 25 choose 5 0.3 1.3 Optimal Transport 0.1% 25 choose 5 0.3 1.6 Tie < 0.1%
Table 3: Error in estimation of the P EHE by method result. Best-performing method over all simulation runs is reported here, differences of less than .1% reported as a tie.
37

Draft
that there are theoretical equivalences between optimal transport methods and familiar survey sampling approaches.
5.2.3 Optimal Transport methods perform better for medium-to-large site selection problems
SPS methods have an advantage in the 20
4 case under low signal strength, but are
dominated by Optimal Transport methods for the larger problem size of 25
5 . This is
practically important, as convex hull methods suffer from the curse of dimensionality as the sample size increases.
5.2.4 Optimal Transport methods perform better in high-signal strength conditions
Optimal transport methods strictly dominate in the signal = .9 case. This was true for both the original and shifted problems, with performance advantages over SPS ranging from 10.1% to 43.6%.
5.2.5 DRO methods perform better for larger distribution shift levels
The crossover point where DRO methods become preferred occurs at shift levels of 1.7 times observed empirical variation. This is in part because DRO is specifically designed for the distribution shift context; the synthetic control method does not come with specific robustness guarantees against adversarial distribution shift. For CATE estimation, both methods perform equivalently well, with Optimal Transport methods weakly dominant. This is largely because of the Nature of the CATE estimation tas-
k, in which the goal is to smoothly interpolate a function over a large covariate space. In this setting, the optimal site selection is a regularly spaced grid over the support of the covariates.
5.2.6 CATE methods perform poorly in the low-signal regime
Estimating the CATE is a fundamentally difficult problem, because it requires that we are able to well-estimate τ (x) at every ‘cell’ X = x. In the low-signal regime, our estimates will be inherently noisy. The limited difference between CATE and PATE methods may be an artifact of the simulation structure. Dehejia et al. [2019] argue that macro-level variables are, in the case they study, more significant moderators of treatment effects. By aggregating up individual level treatment effects, it is -
likely that we are constructing macro level variables with little realistic variation between sites, instead of supposing that treatment effects vary significantly as a function of macro variables. When within-site variance of treatment effects is large relative to between-variance, selecting sites based on aggregate-level data is not very informative. This will naturally be the case when selecting sites based on aggregated data: we lose the individual-level information that ultimately determines -
how precise our estimate of the PEHE is. In essence, even though we are in a high-signal regime, our site selection covariates are not especially predictive of individual treatment effects. We essentially need to study the behavior of the CATE method when treatment effects contain large, site-moderated effects.
38

Draft
6 Discussion and Conclusions
6.1 Practical Guidance for Applied Researchers
How can researchers assess whether their covariates are sufficiently informative (i.e., η < 0.7 or R2 > 0.5) without running the full experiment? Several approaches are available: (1) Prior experiments: Use treatment effect estimates from similar interventions to assess how much variation is explained by observable characteristics. For instance, in educational interventions, prior multi-site trials can reveal whether school-level characteristics predict treatment effects. (2) Pre-treatment outcome-
s: When available, the relationship between covariates and pre-treatment outcomes is suggestive about the relationship between covariates and treatment, under the assumption that these covariates are also effect mediators (3) Domain expertise and theory: In many fields, accumulated knowledge suggests which characteristics drive heterogeneity: for example, baseline health status in medical trials or institutional capacity in policy interventions. (4) Pilot studies: Smallscale pilots across diverse -
sites can help researchers estimate treatment effect heterogeneity before committing to the full experiment. To apply these methods in practice:
Gather informative covariate data. Before site selection, collect covariate data on all candidate sites. These should include characteristics you believe predict treatment effect heterogeneity based on theory, prior studies, or pilot evidence.
Assess covariate informativeness. Assess whether your covariates explain sufficient treatment effect variation. If observable covariates explain >50% of variation (R2 > 0.5), optimization will outperform randomization. This can be evaluated through prior experiments, pre-treatment outcomes, or pilot studies. Otherwise, use stratified random sampling.
Select an estimand. If you need a single average treatment effect for policy decisions, optimize for the PATE using 1-Wasserstein distance. If you need to understand how effects vary across populations, optimize for the CATE using 2-Wasserstein distance.
Adjust for distribution shift. If your deployment population differs from observed sites, use the Jaccard radius procedure (Section 3.5) to select appropriate robustness levels. The automated procedure provides moderate, high, and maximum robustness options based on your data.
Ex post balance testing. After site selection, verify that selected sites adequately represent the population on observable characteristics. Check (i) covariate means and variances across selected versus non-selected sites, (ii) maximum distance from any population site to its nearest selected site, and (iii) the distribution of population mass assigned to each selected site under the optimal transport plan. For enhanced diagnostics, apply prognostic balance testing [Bicalho et al., 2022] using pr-
e-treatment outcomes or predictions from auxiliary models to assess whether selected sites capture relevant predictive variation beyond observed covariates.
39

Draft
6.2 Summary
Distributionally-Robust Optimization methods hedge against realistic uncertainty in the deployment of field experiments.
The Crépon reanalysis demonstrates that distributionally robust optimization provides insurance against population misspecification at realistic uncertainty levels. In our simulation, DRO methods become preferred when deployment populations differ from candidate sites by margins exceeding 1.7 times observed empirical variation in candidate sites. This is a useful heuristic.
Optimization tools incentivize the allocation of more resources to the planning stage.
A practitioner objection to these methods might be that collecting data before engaging in an RCT is expensive or difficult, and that large-scale, policy-relevant RCTs are already difficult enough. I argue however that pre-emption is better than cure: given the expense and scale of many modern RCTs, improving pre-execution data collection may significantly increase the efficiency of the actual experimental estimate, making it much less likely that the experiment will fail due to random features of-
 the selected experimental population, rather than the absence of a treatment effect.
Optimal transport-based site selection methods should be particularly useful for large scale experimental planning.
Optimal transport methods are likely to scale better than convex hull methods to large experimental design problems. This is because, in high dimensions, the volume of a convex hull is concentrated at its surface: this is one version of the curse of dimensionality. Optimal transport methods estimate pairwise distances, are not computationally expensive to calculate, and can be solved by linear programming. The computational advantages become more pronounced as numbers of sites and numbers of covar-
iates increase, making these approaches particularly suitable for large experimental site selection problems in the 100s.
Optimization methods need good covariate information to be useful; otherwise, use randomization.
We found that optimization methods perform well compared to randomization when covariates were moderately informative (R2 > .5).
Fundamental Limits and Knightian Uncertainty.
A fundamental challenge in site selection is that we typically observe only a subset P ⊂ P of the universe of potential experimental sites, and the gap between P and P represents a form of Knightian uncertainty [Knight, 1921, Sunstein, 2023]. While our distributionally robust optimization methods provide insurance against distribution shifts within a Wasserstein ball of radius ρ around the observed data, choosing ρ itself requires confronting irreducible uncertainty about the nature of unobserved -
sites. This uncertainty differs qualitatively from the statistical risk we can quantify within P : we cannot assign probabilities to different ways P might differ from P without making
40

Draft
untestable assumptions. For instance, if infrastructure constraints systematically exclude remote rural sites from P , we face true uncertainty about how treatment effects might differ in these unobserved contexts. This limitation is not specific to our methods but reflects an inherent constraint in experimental site selection: optimization can only operate within the bounds of what we observe. In practice, expanding the set of feasible experimental sites P – the extensive margin – also matters si-
gnificantly for the quality of downstream inferences.
6.3 Future work
Neyman-type allocation
If we have information about individual covariates in a given site, it would be possible to incorporate this information into the site selection problem [Neyman, 1934, Rosenman and Miratrix, 2022]. Intuitively, for the PATE, we would want to minimize the within-variance of selected sites: this simply increases the error of our downstream estimate. But for the CATE, within-variance of selected sites is heterogeneity to be exploited downstream. In both cases, we could incorporate prior information a-
bout the informativeness of sites into the objective function of the minimization problem [Bertsimas et al., 2015].
Selecting individual units
We can adapt this method to select individuals to enroll in an experiment, not just sites. This is a topic of particular interest in experimental planning in industry settings, where user bases may be large, and understanding the behavior of specific market segments is of core interest [Arbour et al., 2021]. Sinkhorn regularization can be used to make optimal transport methods scalable to problem instances with N in the 1000s [Cuturi, 2013].
Optimal transport and DRO are applicable to a wide variety of core causal inference tasks.
A wide variety of core tasks in causal inference can be described as optimal transport problems: achieving balance between treatment and control distributions, matching, and synthetic control-type approaches [Dunipace, 2022, Bruns-Smith and Feller, 2022]. Distributionally Robust Optimization methods could also be practically useful for applied researchers in political science, where there is uncertainty about the quality of data collection, or, broadly, about differences between trial and deployme-
nt populations. Here, the connection with sensitivity analysis is germane: researchers can find treatment effect estimates with guarantees on their stability under worst-case distribution shift.
References
Alberto Abadie and Javier Gardeazabal. The economic costs of conflict: A case study of the basque country. American Economic Review, 93(1):113–132, March 2003. doi: 10. 1257/000282803321455188. URL https://www.aeaweb.org/articles?id=10.1257/ 000282803321455188.
Alberto Abadie and Jinglong Zhao. Synthetic controls for experimental design, 2025. URL https://arxiv.org/abs/2108.02196.
41

Draft
Alexis Diamond Alberto Abadie and Jens Hainmueller. Synthetic control methods for comparative case studies: Estimating the effect of california’s tobacco control program. Journal of the American Statistical Association, 105(490):493–505, 2010. doi: 10.1198/jasa.2009.ap08746. URL https://doi.org/10.1198/jasa.2009.ap08746.
Hunt Allcott. Site selection bias in program evaluation *. The Quarterly Journal of Economics, 130(3):1117–1165, 03 2015. ISSN 0033-5533. doi: 10.1093/qje/qjv015. URL https://doi.org/10.1093/qje/qjv015.
Luigi Ambrosio. Optimal transport maps in monge-kantorovich problem, 2003. URL https://arxiv.org/abs/math/0304389.
Garnet L Anderson, Marian Limacher, Annlouise R Assaf, Tamsen Bassford, Shirley AA Beresford, Henry Black, Denise Bonds, Rebecca Brunner, Robert Brzyski, Bette Caan, et al. Effects of conjugated equine estrogen in postmenopausal women with hysterectomy: The women’s health initiative randomized controlled trial. JAMA, 291(14):1701–1712, 2004. doi: 10.1001/jama.291.14.1701.
Allison P. Anoll, Lauren D. Davenport, and Rachel Lienesch. Racial context(s) in american political behavior. American Political Science Review, page 1–17, 2024. doi: 10.1017/S0003055424000832.
Lawrence J. Appel. The verdict from allhat—thiazide diuretics are the preferred initial therapy for hypertension. JAMA, 288(23):3039, December 2002. ISSN 0098-7484. doi: 10.1001/jama.288.23.3039. URL http://dx.doi.org/10.1001/jama.288.23.3039.
David Arbour, Drew Dimmery, and Anup Rao. Efficient balanced treatment assignments for experimentation. In Arindam Banerjee and Kenji Fukumizu, editors, Proceedings of The 24th International Conference on Artificial Intelligence and Statistics, volume 130 of Proceedings of Machine Learning Research, pages 3070–3078. PMLR, 13–15 Apr 2021. URL https://proceedings.mlr.press/v130/arbour21a.html.
Susan Athey and Guido W. Imbens. Identification and inference in nonlinear differencein-differences models. Econometrica, 74(2):431–497, 2006. ISSN 00129682, 14680262. URL http://www.jstor.org/stable/3598807.
Abhijit Banerjee, Shawn Cole, Esther Duflo, and Leigh Linden. Remedying education: Evidence from two randomized experiments in india. The Quarterly Journal of Economics, 122(3):1235–1264, 2007. doi: 10.1162/qjec.122.3.1235.
Abhijit Banerjee, Esther Duflo, Nathanael Goldberg, Dean Karlan, Robert Osei, William Parienté, Jeremy Shapiro, Bram Thuysbaert, and Christopher Udry. A multifaceted program causes lasting progress for the very poor: Evidence from six countries. Science, 348(6236):1260799, 2015. doi: 10.1126/science.1260799.
Abhijit Banerjee, Rukmini Banerji, James Berry, Esther Duflo, Harini Kannan, Shobhini Mukherji, Marc Shotland, and Michael Walton. Mainstreaming an effective intervention: Evidence from randomized evaluations of "teaching at the right level" in india. Working Paper 22746, National Bureau of Economic Research, 2016.
42

Draft
Abhijit Banerjee, Rukmini Banerji, James Berry, Esther Duflo, Harini Kannan, Shobhini Mukherji, Marc Shotland, and Michael Walton. From proof of concept to scalable policies: Challenges and solutions, with an application. Journal of Economic Perspectives, 31(4): 73–102, 2017. doi: 10.1257/jep.31.4.73.
Kirk Bansak, Elisabeth Paulson, and Dominik Rothenhausler. Learning under random distributional shifts, 2023. URL https://arxiv.org/abs/2306.02948.
Eli Ben-Michael, Avi Feller, David A. Hirshberg, and José R. Zubizarreta. The balancing act in causal inference, 2021. URL https://arxiv.org/abs/2110.14831.
Aharon Ben-Tal, Dick den Hertog, Anja De Waegenaere, Bertrand Melenberg, and Gijs Rennen. Robust solutions of optimization problems affected by uncertain probabilities. Management Science, 59(2):341–357, 2013. doi: 10.1287/mnsc.1120.1641. URL https: //doi.org/10.1287/mnsc.1120.1641.
Dimitris Bertsimas and Melvyn Sim. The price of robustness. Operations Research, 52(1):35–53, February 2004a. ISSN 1526-5463. doi: 10.1287/opre.1030.0065. URL http://dx.doi.org/10.1287/opre.1030.0065.
Dimitris Bertsimas and Melvyn Sim. The price of robustness. Operations Research, 52(1): 35–53, 2004b. doi: 10.1287/opre.1030.0065. URL https://doi.org/10.1287/opre. 1030.0065.
Dimitris Bertsimas, Mac Johnson, and Nathan Kallus. The power of optimization over randomization in designing experiments involving small samples. Operations Research, 63(4):868–876, August 2015. ISSN 1526-5463. doi: 10.1287/opre.2015.1361. URL http://dx.doi.org/10.1287/opre.2015.1361.
Dimitris Bertsimas, Kosuke Imai, and Michael Lingzhi Li. Distributionally robust causal inference with observational data, 2023. URL https://arxiv.org/abs/2210.08326.
Clara Bicalho, Adam Bouyamourn, and Thad Dunning. Conditional balance tests: Increasing sensitivity and specificity with prognostic covariates, 2022.
Peter J. Bickel and David A. Freedman. Some asymptotic theory for the bootstrap. The Annals of Statistics, 9(6), November 1981. ISSN 0090-5364. doi: 10.1214/aos/1176345637. URL http://dx.doi.org/10.1214/aos/1176345637.
Graeme Blair, Jeremy M Weinstein, Fotini Christia, Eric Arias, Emile Badran, Robert A Blair, Ali Cheema, Ahsan Farooqui, Thiemo Fetzer, Guy Grossman, Dotan Haim, Zulfiqar Hameed, Rebecca Hanson, Ali Hasanain, Dorothy Kronick, Benjamin S Morse, Robert Muggah, Fatiq Nadeem, Lily L Tsai, Matthew Nanes, Tara Slough, Nico Ravanilla, Jacob N Shapiro, Barbara Silva, Pedro C L Souza, and Anna M Wilke. Community policing does not build citizen trust in police or reduce crime in the global south. Science, 3-
74(6571):eabd3446, 2021. doi: 10.1126/science.abd3446.
Graeme Blair, Fotini Christia, and Jeremy M Weinstein, editors. Crime, Insecurity, and Community Policing: Experiments on Building Trust. Studies in Comparative Politics. Cambridge University Press, 2024.
43

Draft
Jose Blanchet and Karthyek Murthy. Quantifying distributional model risk via optimal transport. Mathematics of Operations Research, 44(2):565–600, 2019. doi: 10.1287/ moor.2018.0936. URL https://doi.org/10.1287/moor.2018.0936.
Jose Blanchet and Nian Si. Optimal uncertainty size in distributionally robust inverse covariance estimation. Operations Research Letters, 47(6):618–621, 2019. ISSN 0167-6377. doi: https://doi.org/10.1016/j.orl.2019.10.005. URL https://www.sciencedirect. com/science/article/pii/S0167637719300732.
Jose Blanchet, Karthyek Murthy, and Viet Anh Nguyen. Statistical analysis of wasserstein distributionally robust estimators, 2021. URL https://arxiv.org/abs/2108.02120.
Jose Blanchet, Jiajin Li, Sirui Lin, and Xuhui Zhang. Distributionally robust optimization and robust statistics, 2024. URL https://arxiv.org/abs/2401.14655.
Howard S. Bloom, Stephen W. Raudenbush, Michael J. Weiss, and Kristin Porter and. Using multisite experiments to study cross-site variation in treatment effects: A hybrid approach with fixed intercepts and a random treatment coefficient. Journal of Research on Educational Effectiveness, 10(4):817–842, 2017. doi: 10.1080/19345747.2016.1264518. URL https://doi.org/10.1080/19345747.2016.1264518.
Tessa Bold, Mwangi Kimenyi, Germano Mwabu, Alice Ng’ang’a, and Justin Sandefur. Experimental evidence on scaling up education reforms in kenya. Journal of Public Economics, 168:1–20, 2018. ISSN 0047-2727. doi: https://doi.org/10.1016/j. jpubeco.2018.08.007. URL https://www.sciencedirect.com/science/article/pii/ S0047272718301518.
John Bound, Charles Brown, and Nancy Mathiowetz. Chapter 59 - measurement error in survey data. volume 5 of Handbook of Econometrics, pages 3705–3843. Elsevier, 2001. doi: https://doi.org/10.1016/S1573-4412(01)05012-7. URL https://www.sciencedirect. com/science/article/pii/S1573441201050127.
G. E. P. Box and K. B. Wilson. On the experimental attainment of optimum conditions. Journal of the Royal Statistical Society: Series B (Methodological), 13(1):1–38, 12 1951. ISSN 0035-9246. doi: 10.1111/j.2517-6161.1951.tb00067.x. URL https://doi.org/10. 1111/j.2517-6161.1951.tb00067.x.
George E. P. Box and Norman R. Draper. Robust designs. Biometrika, 62(2):347–352, 1975. ISSN 00063444. URL http://www.jstor.org/stable/2335371.
G.E.P. Box and N.R. Draper. Empirical Model-Building and Response Surfaces. Wiley Series in Probability and Statistics. Wiley, 1987. ISBN 9780471810339. URL https: //books.google.com/books?id=QO2dDRufJEAC.
Stephen Boyd and Lieven Vandenberghe. Convex Optimization. Cambridge University Press, 2004.
S.P. Bradley, A.C. Hax, and T.L. Magnanti. Applied Mathematical Programming. AddisonWesley Publishing Company, 1977. ISBN 9780201004649. URL https://books.google. com/books?id=MSWdWv3Gn5cC.
George W. Brown. Iterative solution of games by fictitious play. In T. C. Koopmans, editor, Activity Analysis of Production and Allocation. Wiley, New York, 1951.
44

Draft
David A. Bruns-Smith and Avi Feller. Outcome assumptions and duality theory for balancing weights. In Gustau Camps-Valls, Francisco J. R. Ruiz, and Isabel Valera, editors, Proceedings of The 25th International Conference on Artificial Intelligence and Statistics, volume 151 of Proceedings of Machine Learning Research, pages 11037–11055. PMLR, 2830 Mar 2022. URL https://proceedings.mlr.press/v151/bruns-smith22a.html.
Tiffany Tianhui Cai, Hongseok Namkoong, and Steve Yadlowsky. Diagnosing model performance under distribution shift, 2023. URL https://arxiv.org/abs/2303.02011.
Arthur Charpentier, Emmanuel Flachaire, and Ewen Gallic. Optimal transport for counterfactual estimation: A method for causal inference, 2023. URL https://arxiv. org/abs/2301.07755.
Nic Cheeseman and Caryn Peiffer. Why efforts to fight corruption can undermine the social contract: Lessons from a survey experiment in nigeria. Governance, 36(4):1045–1061, 2023. doi: https://doi.org/10.1111/gove.12720. URL https://onlinelibrary.wiley. com/doi/abs/10.1111/gove.12720.
Timothy Christensen, Hyungsik Roger Moon, and Frank Schorfheide. Optimal decision rules when payoffs are partially identified, 2023.
Bruno Crépon, Florencia Devoto, Esther Duflo, and William Parienté. Estimating the impact of microcredit on those who take it up: Evidence from a randomized experiment in morocco. American Economic Journal: Applied Economics, 7(1):123–50, January 2015. doi: 10.1257/app.20130535. URL https://www.aeaweb.org/articles?id=10. 1257/app.20130535.
Marco Cuturi. Sinkhorn distances: Lightspeed computation of optimal transportation distances, 2013. URL https://arxiv.org/abs/1306.0895.
Thomas R Dawber, Felix E Moore, and George V Mann. Coronary heart disease in the framingham study. American Journal of Public Health and the Nation’s Health, 47 (Supplement):4–24, 1957.
Rajeev Dehejia, Cristian Pop-Eleches, and Cyrus Samii. From local to global: External validity in a fertility natural experiment, 2019. URL https://arxiv.org/abs/1906. 08096.
John Duchi and Hongseok Namkoong. Learning models with uniform performance via distributionally robust optimization, 2020. URL https://arxiv.org/abs/1810.08750.
Eric Dunipace. Optimal transport weights for causal inference, 2022. URL https: //arxiv.org/abs/2109.01991.
T Dunning, G Grossman, M Humphreys, S D Hyde, C McIntosh, and G Nellis, editors. Information, Accountability, and Cumulative Learning: Lessons from Metaketa I. Cambridge University Press, 2019a.
Thad Dunning, Guy Grossman, Macartan Humphreys, Susan D Hyde, Craig McIntosh, Gareth Nellis, Claire L Adida, Eric Arias, Clara Bicalho, Taylor C Boas, Mark T Buntaine, Simon Chauchard, Anirvan Chowdhury, Jessica Gottlieb, F Daniel Hidalgo, Marcus Holmlund, Ryan Jablonski, Eric Kramon, Horacio Larreguy, Malte Lierl, John
45

Draft
Marshall, Gwyneth McClendon, Marcus A Melo, Daniel L Nielson, Paula M Pickering, Melina R Platas, Pablo Querubín, Pia Raffler, and Neelanjan Sircar. Voter information campaigns and political accountability: Cumulative findings from a preregistered meta-analysis of coordinated trials. Science Advances, 5(7):eaaw2612, 2019b. doi: 10.1126/sciadv.aaw2612.
Charles R Ebersole, Olivia E Atherton, Aimee L Belanger, Hayley M Skulborstad, Jill M Allen, Jonathan B Banks, Erica Baranski, Michael J Bernstein, Diane BV Bonfiglio, Leanne Boucher, et al. Many labs 3: Evaluating participant pool quality across the academic semester via replication. Journal of Experimental Social Psychology, 67:68–82, 2016. doi: 10.1016/j.jesp.2015.10.012.
Charles R Ebersole et al. Many labs 5: Testing pre-data-collection peer review as an intervention to increase replicability. Advances in Methods and Practices in Psychological Science, 3, 2020.
Bradley Efron and Robert J. Tibshirani. An Introduction to the Bootstrap. Number 57 in Monographs on Statistics and Applied Probability. Chapman & Hall/CRC, Boca Raton, Florida, USA, 1993.
Naoki Egami and Erin Hartman. Covariate selection for generalizing experimental results: Application to a large-scale development program in uganda. Journal of the Royal Statistical Society Series A: Statistics in Society, 184(4):1524–1548, August 2021. ISSN 1467-985X. doi: 10.1111/rssa.12734. URL http://dx.doi.org/10.1111/rssa.12734.
Naoki Egami and Erin Hartman. Elements of external validity: Framework, design, and analysis. American Political Science Review, 117(3):1070–1088, 2023. doi: 10.1017/ S0003055422000880.
Naoki Egami and Diana Da In Lee. Designing multi-site studies for external validity: Site selection via synthetic purposive sampling, 2024.
Peyman Mohajerin Esfahani and Daniel Kuhn. Data-driven distributionally robust optimization using the wasserstein metric: Performance guarantees and tractable reformulations, 2017. URL https://arxiv.org/abs/1505.05116.
Michael G. Findley, Kyosuke Kikuta, and Michael Denly. External validity. Annual Review of Political Science, 24(1):365–393, May 2021. ISSN 1545-1577. doi: 10.1146/annurev-polisci-041719-102556. URL http://dx.doi.org/10.1146/ annurev-polisci-041719-102556.
Nicolas Fournier and Arnaud Guillin. On the rate of convergence in wasserstein distance of the empirical measure, 2013. URL https://arxiv.org/abs/1312.2128.
Alfred Galichon. Optimal Transport Methods in Economics. Number 10870 in Economics Books. Princeton University Press, 2016. URL https://ideas.repec.org/b/pup/ pbooks/10870.html.
Rui Gao, Xi Chen, and Anton J. Kleywegt. Wasserstein distributionally robust optimization and variation regularization, 2020. URL https://arxiv.org/abs/1712.06050.
46

Draft
Michael Gechter, Keisuke Hirano, Jean Lee, Mahreen Mahmud, Orville Mondal, Jonathan Morduch, Saravana Ravindran, and Abu S. Shonchoy. Selecting experimental sites for external validity, 2024.
Denise C. Gottfredson, Gary D. Gottfredson, and Lois G. Hybl. Managing adolescent behavior a multiyear, multischool study. American Educational Research Journal, 30(1): 179–215, 1993. doi: 10.3102/00028312030001179. URL https://doi.org/10.3102/ 00028312030001179.
J. Hájek. Contribution to discussion of paper by D. Basu. In Foundations of Statistical Inference, 1971.
Hans J.G. Hassell. Local racial context, campaign messaging, and public political behavior: A congressional campaign field experiment. Electoral Studies, 69:102247, 2021. ISSN 0261-3794. doi: https://doi.org/10.1016/j.electstud.2020.102247. URL https://www. sciencedirect.com/science/article/pii/S0261379420301268.
Jennifer L. Hill. Bayesian nonparametric modeling for causal inference. Journal of Computational and Graphical Statistics, 20(1):217–240, 2011. doi: 10.1198/jcgs.2010. 08162. URL https://doi.org/10.1198/jcgs.2010.08162.
Guanglei Hong and Stephen W. Raudenbush. Evaluating kindergarten retention policy: A case study of causal inference for multilevel observational data. Journal of the American Statistical Association, 101(475):901–910, 2006. ISSN 01621459. URL http: //www.jstor.org/stable/27590770.
D. G. Horvitz and D. J. Thompson. A generalization of sampling without replacement from a finite universe. Journal of the American Statistical Association, 47(260):663–685, 1952. ISSN 01621459. URL http://www.jstor.org/stable/2280784.
Yuchen Hu, Henry Zhu, Emma Brunskill, and Stefan Wager. Minimax-regret sample selection in randomized experiments, 2024. URL https://arxiv.org/abs/2403.01386.
Melody Huang, Naoki Egami, Erin Hartman, and Luke Miratrix. Leveraging population outcomes to improve the generalization of experimental results: Application to the jtpa study. The Annals of Applied Statistics, 17(3), September 2023. ISSN 1932-6157. doi: 10.1214/22-aoas1712. URL http://dx.doi.org/10.1214/22-AOAS1712.
S D Hyde, E Malesky, A Coppock, M Poertner, L Young, et al. Metaketa v: Women’s action committees and local services, 2022.
Ying Jin, Naoki Egami, and Dominik Rothenhausler. Beyond reweighting: On the predictive role of covariate shift in effect generalization, 2024. URL https://arxiv. org/abs/2412.08869.
Nathan Kallus. Optimal a priori balance in the design of controlled experiments. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 82(4):1243–1272, 2020.
William B Kannel, Thomas R Dawber, A Kagan, N Revotskie, and J Stokes. Factors of risk in the development of coronary heart disease — six year follow-up experience: The framingham study. Annals of Internal Medicine, 55:33–50, 1961.
47

Draft
William B Kannel, William P Castelli, Patricia M McNamara, Maureen A McKee, and Manning Feinleib. Role of blood pressure in the development of congestive heart failure: The framingham study. New England Journal of Medicine, 287(16):781–787, 1972. doi: 10.1056/NEJM197210192871601.
006)]Kantorovich2006 L. V. Kantorovich. On the translocation of masses. Journal of Mathematical Sciences, 133(4):1381–1382, March [1942] 2006. ISSN 1573-8795. doi: 10.1007/s10958-006-0049-2. URL http://dx.doi.org/10.1007/s10958-006-0049-2.
Narendra Karmarkar. A new polynomial-time algorithm for linear programming-ii. Combinatorica, 4:373–395, 12 1984. doi: 10.1007/BF02579150.
Richard A Klein, Kate A Ratliff, Michelangelo Vianello, Reginald B Adams Jr, Štěpán Bahník, Michael J Bernstein, Konrad Bocian, Mark J Brandt, Brooks Brooks, Claudia C Brumbaugh, et al. Investigating variation in replicability: A "many labs" replication project. Social Psychology, 45(3):142–152, 2014. doi: 10.1027/1864-9335/a000178.
Richard A Klein, Michelangelo Vianello, Fred Hasselman, Byron G Adams, Reginald B Adams Jr, Sinan Alper, Mark Aveyard, Jordan R Axt, Mayowa T Babalola, Štěpán Bahník, et al. Many labs 2: Investigating variation in replicability across samples and settings. Advances in Methods and Practices in Psychological Science, 1(4):443–490, 2018. doi: 10.1177/2515245918810225.
Frank H. Knight. Risk, Uncertainty and Profit. Houghton Mifflin Co, Boston, MA, 1921. URL http://www.econlib.org/library/Knight/knRUP.html.
Pang Wei Koh, Shiori Sagawa, Henrik Marklund, Sang Michael Xie, Marvin Zhang, Akshay Balsubramani, Weihua Hu, Michihiro Yasunaga, Richard Lanas Phillips, Irena Gao, Tony Lee, Etienne David, Ian Stavness, Wei Guo, Berton A. Earnshaw, Imran S. Haque, Sara Beery, Jure Leskovec, Anshul Kundaje, Emma Pierson, Sergey Levine, Chelsea Finn, and Percy Liang. Wilds: A benchmark of in-the-wild distribution shifts, 2021. URL https://arxiv.org/abs/2012.07421.
Daniel Kuhn, Peyman Mohajerin Esfahani, Viet Anh Nguyen, and Soroosh ShafieezadehAbadeh. Wasserstein distributionally robust optimization: Theory and applications in machine learning, 2024. URL https://arxiv.org/abs/1908.08729.
Daniel Levy, Yair Carmon, John C. Duchi, and Aaron Sidford. Large-scale methods for distributionally robust optimization, 2020. URL https://arxiv.org/abs/2010.05893.
Fengqiao Luo and Sanjay Mehrotra. Distributionally robust optimization with decision dependent ambiguity sets. Optimization Letters, 14(8):2565–2594, April 2020. ISSN 1862-4480. doi: 10.1007/s11590-020-01574-3. URL http://dx.doi.org/10.1007/ s11590-020-01574-3.
JoAnn E Manson, Rowan T Chlebowski, Marcia L Stefanick, Aaron K Aragaki, Jacques E Rossouw, Ross L Prentice, Garnet Anderson, Barbara V Howard, Cynthia A Thomson, Andrea Z LaCroix, et al. Menopausal hormone therapy and health outcomes during the intervention and extended poststopping phases of the women’s health initiative randomized trials. JAMA, 310(13):1353–1368, 2013. doi: 10.1001/jama.2013.278040.
48

Draft
JoAnn E Manson, Carolyn J Crandall, Jacques E Rossouw, Rowan T Chlebowski, Garnet L Anderson, Marcia L Stefanick, Aaron K Aragaki, Jane A Cauley, Gretchen L Wells, Andrea Z LaCroix, et al. The women’s health initiative randomized trials and clinical practice: A review. JAMA, 331(20):1748–1760, 2024. doi: 10.1001/jama.2024.6542.
Gaspard Monge. Mémoire sur la théorie des déblais et des remblais. De l’Imprimerie Royale, Paris, 1781. Memoirs de l’Académie Royale des Sciences de Paris, pp. 666–704.
Balas K. Natarajan. Sparse approximate solutions to linear systems. SIAM J. Comput., 24:227–234, 1995. URL https://api.semanticscholar.org/CorpusID:2072045.
Jerzy Neyman. On the Two Different Aspects of the Representative Method : The Method of Stratified Sampling and the Method of Purposive Selection. Journal of the Royal Statistical Society, 97(4):558–606, 12 1934. ISSN 0952-8385. doi: 10.1111/j.2397-2335. 1934.tb04184.x. URL https://doi.org/10.1111/j.2397-2335.1934.tb04184.x.
José Luis Montiel Olea, Brenda Prallon, Chen Qiu, Jörg Stoye, and Yiwei Sun. Externally valid selection of experimental sites via the k-median problem, 2024. URL https: //arxiv.org/abs/2408.09187.
Frank Olsen, Bård Uleberg, Bjarne K. Jacobsen, Ivar Heuch, Pål M. Tande, Einar Bugge, and Lise Balteskard. Socioeconomic and geographic differences in ablation of atrial fibrillation in norway - a national cohort study. BMC Public Health, 22(1), February 2022. doi: 10.1186/s12889-022-12628-9. URL https://doi.org/10.1186/ s12889-022-12628-9.
Robert B. Olsen and Larry L. Orr. On the “where” of social experiments: Selecting more representative samples to inform policy. New Directions for Evaluation, 2016 (152):61–71, December 2016. ISSN 1534-875X. doi: 10.1002/ev.20207. URL http: //dx.doi.org/10.1002/ev.20207.
Larry L. Orr, Robert B. Olsen, Stephen H. Bell, Ian Schmid, Azim Shivji, and Elizabeth A. Stuart. Using the results from rigorous multisite evaluations to inform local policy decisions. Journal of Policy Analysis and Management, 38(4):978–1003, June 2019. ISSN 1520-6688. doi: 10.1002/pam.22154. URL http://dx.doi.org/10.1002/pam.22154.
Van L. Parsons. Stratified sampling, February 2017. URL http://dx.doi.org/10.1002/ 9781118445112.stat05999.pub2.
Judea Pearl and Elias Bareinboim. Transportability of causal and statistical relations: A formal approach. In 2011 IEEE 11th International Conference on Data Mining Workshops, pages 540–547, 2011. doi: 10.1109/ICDMW.2011.169.
Judea Pearl and Elias Bareinboim. External validity: From do-calculus to transportability across populations. Statistical Science, 29(4), November 2014. ISSN 0883-4237. doi: 10.1214/14-sts486. URL http://dx.doi.org/10.1214/14-STS486.
Gabriel Peyré and Marco Cuturi. Computational optimal transport. Foundations and Trends in Machine Learning, 11(5-6):355–607, 2019.
49

Draft
Stephen W. Raudenbush and Daniel Schwartz. Randomized experiments in education, with implications for multilevel causal inference. Annual Review of Statistics and Its Application, 7(1):177–208, March 2020. ISSN 2326-831X. doi: 10.1146/annurev-statistics-031219-041205. URL http://dx.doi.org/10.1146/ annurev-statistics-031219-041205.
Evan T. R. Rosenman and Luke Miratrix. Designing experiments toward shrinkage estimation, 2022. URL https://arxiv.org/abs/2204.06687.
Jacques E Rossouw, Garnet L Anderson, Ross L Prentice, Andrea Z LaCroix, Charles Kooperberg, Marcia L Stefanick, Rebecca D Jackson, Shirley AA Beresford, Barbara V Howard, Karen C Johnson, et al. Risks and benefits of estrogen plus progestin in healthy postmenopausal women: Principal results from the women’s health initiative randomized controlled trial. JAMA, 288(3):321–333, 2002. doi: 10.1001/jama.288.3.321.
Dominik Rothenhausler and Peter Bühlmann. Distributionally robust and generalizable inference, 2023. URL https://arxiv.org/abs/2209.09352.
Tim Roughgarden. Twenty Lectures on Algorithmic Game Theory. Cambridge University Press, August 2016. ISBN 9781316779309. doi: 10.1017/cbo9781316779309. URL http://dx.doi.org/10.1017/CBO9781316779309.
Kara E Rudolph and Iván Díaz. Efficiently transporting causal direct and indirect effects to new populations under intermediate confounding and with multiple mediators. Biostatistics, 23(3):789–806, February 2021. ISSN 1468-4357. doi: 10.1093/biostatistics/ kxaa057. URL http://dx.doi.org/10.1093/biostatistics/kxaa057.
Kara E. Rudolph, Nicholas T. Williams, Elizabeth A. Stuart, and Ivan Diaz. Improving efficiency in transporting average treatment effects, 2024. URL https://arxiv.org/ abs/2304.00117.
Filippo Santambrogio. Optimal Transport for Applied Mathematicians: Calculus of Variations, PDEs, and Modeling. Progress in Nonlinear Differential Equations and Their Applications. Springer, Cham, 2015.
Benjamin R Saville, Donald A Berry, Nicholas S Berry, Kert Viele, and Scott M Berry. The bayesian time machine: Accounting for temporal drift in multi-arm platform trials. Clinical Trials, 19(5):490–501, August 2022. ISSN 1740-7753. doi: 10.1177/ 17407745221112013. URL http://dx.doi.org/10.1177/17407745221112013.
W.R. Shadish, T.D. Cook, and D.T. Campbell. Experimental and Quasi-experimental Designs for Generalized Causal Inference. Number v. 1 in Experimental and Quasiexperimental Designs for Generalized Causal Inference. Houghton Mifflin, 2002. ISBN 9780395615560. URL https://books.google.com/books?id=o7jaAAAAMAAJ.
Uri Shalit, Fredrik D. Johansson, and David Sontag. Estimating individual treatment effect: generalization bounds and algorithms, 2017. URL https://arxiv.org/abs/ 1606.03976.
Ilya Shpitser, Tyler VanderWeele, and James M. Robins. On the validity of covariate adjustment for estimating causal effects, 2012. URL https://arxiv.org/abs/1203. 3515.
50

Draft
Tara Slough, Daniel Rubenson, Ro’ee Levy, Francisco Alpizar Rodriguez, María Bernedo del Carpio, Mark T Buntaine, Darin Christensen, Alicia Cooperman, Sabrina Eisenbarth, Paul J Ferraro, Louis Graham, Alexandra C Hartman, Jacob Kopas, Sasha McLarty, Anouk S Rigterink, Cyrus Samii, Brigitte Seim, Johannes Urpelainen, and Bing Zhang. Adoption of community monitoring improves common pool resource management across contexts. Proceedings of the National Academy of Sciences, 118(29): e2015367118, 2021. -
doi: 10.1073/pnas.2015367118.
Elizabeth A. Stuart, Brian K. Lee, and Finbarr P. Leacy. Prognostic score–based balance measures can be a useful diagnostic for propensity score methods in comparative effectiveness research. Journal of Clinical Epidemiology, 66(8):S84–S90.e1, August 2013. ISSN 0895-4356. doi: 10.1016/j.jclinepi.2013.01.013. URL http://dx.doi.org/10. 1016/j.jclinepi.2013.01.013.
Cass R. Sunstein. Knightian uncertainty. SSRN Electronic Journal, 2023. ISSN 1556-5068. doi: 10.2139/ssrn.4662711. URL http://dx.doi.org/10.2139/ssrn.4662711.
Yen Yi Tan, Vaclav Papez, Wai Hoong Chang, Stefanie H Mueller, Spiros Denaxas, and Alvina G Lai. Comparing clinical trial population representativeness to real-world populations: an external validity analysis encompassing 43895 trials and 5685738 individuals across 989 unique drugs and 286 conditions in england. The Lancet Healthy Longevity, 3(10):e674–e689, October 2022. ISSN 2666-7568. doi: 10.1016/s2666-7568(22) 00186-6. URL http://dx.doi.org/10.1016/S2666-7568(22)00186-6.
Rohan Taori, Achal Dave, Vaishaal Shankar, Nicholas Carlini, Benjamin Recht, and Ludwig Schmidt. Measuring robustness to natural distribution shifts in image classification, 2020. URL https://arxiv.org/abs/2007.00644.
Ryan Thompson. Robust subset selection. Computational Statistics &; Data Analysis, 169:107415, May 2022. ISSN 0167-9473. doi: 10.1016/j.csda.2021.107415. URL http://dx.doi.org/10.1016/j.csda.2021.107415.
Elizabeth Tipton. Stratified sampling using cluster analysis: A sample selection strategy for improved generalizations from experiments. Evaluation Review, 37(2):109–139, April 2013a. ISSN 1552-3926. doi: 10.1177/0193841x13516324. URL http://dx.doi.org/ 10.1177/0193841X13516324.
Elizabeth Tipton. Improving generalizations from experiments using propensity score subclassification: Assumptions, properties, and contexts. Journal of Educational and Behavioral Statistics, 38(3):239–266, 2013b. doi: 10.3102/1076998612441947. URL https://doi.org/10.3102/1076998612441947.
William Torous, Florian Gunsilius, and Philippe Rigollet. An optimal transport approach to estimating causal effects via nonlinear difference-in-differences, 2024. URL https: //arxiv.org/abs/2108.05858.
Tyler J. VanderWeele and Ilya Shpitser. A new criterion for confounder selection. Biometrics, 67(4):1406–1413, May 2011. ISSN 0006-341X. doi: 10.1111/j.1541-0420.2011. 01619.x. URL http://dx.doi.org/10.1111/j.1541-0420.2011.01619.x.
51

Draft
A. M. Vershik. Long history of the monge-kantorovich transportation problem: (marking the centennial of l.v. kantorovich’s birth!). The Mathematical Intelligencer, 35(4):1–9, May 2013. ISSN 1866-7414. doi: 10.1007/s00283-013-9380-x. URL http://dx.doi. org/10.1007/s00283-013-9380-x.
C. Villani and American Mathematical Society. Topics in Optimal Transportation. Graduate studies in mathematics. American Mathematical Society, 2003. ISBN 9781470418045. URL https://books.google.com/books?id=MyPjjgEACAAJ.
Cedric Villani. Optimal Transport: Old and New, volume 338 of Grundlehren der Mathematischen Wissenschaften. Springer, Berlin, 2008.
Cédric Villani. Topics in Optimal Transportation. American Mathematical Society, March 2003. ISBN 9781470418045. doi: 10.1090/gsm/058. URL http://dx.doi.org/10. 1090/gsm/058.
WHO Solidarity Trial Consortium. Remdesivir and three other drugs for hospitalised patients with covid-19: final results of the who solidarity randomised trial and updated meta-analyses. The Lancet, 399(10339):1941–1953, 2022. doi: 10.1016/S0140-6736(22) 00519-0.
WHO Solidarity Trial Consortium, Hongchao Pan, Richard Peto, Ana-Maria HenaoRestrepo, Marie-Pierre Preziosi, Vasee Sathiyamoorthy, Quarraisha Abdool Karim, Marissa M Alejandria, César Hernández García, Marie-Paule Kieny, et al. Repurposed antiviral drugs for covid-19 — interim who solidarity trial results. New England Journal of Medicine, 384(6):497–511, 2021. doi: 10.1056/NEJMoa2023184.
Olivia Wiles, Sven Gowal, Florian Stimberg, Sylvestre Alvise-Rebuffi, Ira Ktena, Krishnamurthy Dvijotham, and Taylan Cemgil. A fine-grained analysis on distribution shift, 2021. URL https://arxiv.org/abs/2110.11328.
D.H. Wolpert and W.G. Macready. No free lunch theorems for optimization. IEEE Transactions on Evolutionary Computation, 1(1):67–82, 1997. doi: 10.1109/4235.585893.
Chien-Fu Wu. On the robustness and efficiency of some randomized designs. The Annals of Statistics, 9(6), November 1981. ISSN 0090-5364. doi: 10.1214/aos/1176345634. URL http://dx.doi.org/10.1214/aos/1176345634.
Yi Zhang, Melody Huang, and Kosuke Imai. Minimax regret estimation for generalizing heterogeneous treatment effects with multisite data, 2024. URL https://arxiv.org/ abs/2412.11136.
52

Draft
A Proofs of Main Results
A.1 Technical Preliminaries
We first show three minor results that are needed to state the proof of the two main theorems in the text.
Lemma 20 (Corollary of Kantorovich-Rubenstein Formula). If f is Lipschitz, then
Z
f dμ −
Z
f dν ≤ L · W1(μ, ν)
Proof. The Kantorovich-Rubinstein Formula states: If f is Lipschitz with constant L, then:
Z
f dμ −
Z
f dν ≤ sup
h
Z
h dμ −
Z
h dν : h is 1-Lipschitz
= W1(μ, ν)
Define g(x) = f(x)
L . Then:
Z
g dμ −
Z
g dν ≤ W1(μ, ν)
Zf
L dμ −
Zf
L dν ≤ W1(μ, ν)
1
L
Z
f dμ −
Z
f dν ≤ W1(μ, ν)
Z
f dμ −
Z
f dν ≤ L · W1(μ, ν)
We also require two facts about Wasserstein Distances:
Lemma 21 (Wasserstein Distance with Shared Conditionals). If PX,U = PX × PU|X and QX,U = QX × PU|X are two joint distributions that share the same conditional distribution PU|X but have different marginals PX and QX, then:
Wp(PX,U , QX,U ) = Wp(PX , QX )
Proof. To show that Wp(PX,U , QX,U ) = Wp(PX , QX ), we need to show that Wp(PX,U , QX,U ) ≤ Wp(PX , QX ) and Wp(PX , QX ) ≤ Wp(PX,U , QX,U ). First, we show that Wp(PX,U , QX,U ) ≤ Wp(PX , QX ). Let γ∗
X be an optimal transport plan between PX and QX, so that:
Z
|x1 − x2|p dγ∗
X (x1, x2) = W p
p (PX , QX )
We define a transport plan π∗ for PX,U and QX,U by setting:
dπ∗((x1, u1), (x2, u2)) = dγ∗
X (x1, x2)K(du1|x1)δu1(du2)
53

Draft
Where δu1(du2) implies u2 = u1. The first marginal of π∗ is:
Z
x2,u2
dπ∗((x1, u1), (x2, u2)) = K(du1|x1)
Z
x2
dγ∗
X (x1, x2) = K(du1|x1)dPX (x1) = dPX,U (x1, u1)
The second marginal of π∗ is:
Z
x1,u1
dπ∗((x1, u1), (x2, u2)) =
Z
x1
K (du2 |x1 )dγ ∗
X (x1, x2)
We can apply the Disintegration Theorem (see [Villani, 2008]), to show that, for shared kernel K and optimal γ∗
X, the second marginal can be written as:
dQX (x2)K(du2|x2) = dQX,U (x2, u2)
.
The cost of π∗ is
C(π∗) =
Z
(|x1 − x2|p + |u1 − u2|p)dπ∗
u1 = u2 by construction, so that |u1 − u2|p = 0, giving us:
C(π∗) =
Z
|x1 − x2|pdγ∗
X (x1, x2)
Z
K (du1 |x1 )
.
Since R K(du1|x1) = 1:
C(π∗) =
Z
|x1 − x2|pdγ∗
X (x1, x2) = W p
p (PX , QX )
Since W p
p (PX,U , QX,U ) is the infimal cost,
Wp
p (PX,U , QX,U ) ≤ C(π∗) = W p
p (PX , QX )
Finally, because the p-Wasserstein distance is the p-th root of the optimal cost,
Wp(PX,U , QX,U ) = inγf
Z
d((x, u), (x′, u′))p dγ
1/p
≤
Z
|x1 − x2|p dγ∗
X
1/p
= Wp(PX , QX ).
This entails that:
Wp(PX,U , QX,U ) ≤ Wp(PX , QX )
As required. For the reverse direction, consider any transport plan γ between PX,U and QX,U . Define:
γX (x1, x2) =
Z
u1
Z
u2
γ((x1, u1), (x2, u2)) du2 du1
This gives a transport plan between PX and QX. The cost of this plan is less than or equal to the cost of γ:
Z
x1,x2
|x1 − x2|p dγX (x1, x2) ≤
x
(|x1 − x2|p + |u1 − u2|p) dγ((x1, u1), (x2, u2))
54

Draft
Since W p
p (PX, QX) is the minimum cost over all transport plans between PX and QX:
Wp
p (PX , QX ) ≤
Z
x1,x2
|x1 − x2|p dγX (x1, x2) ≤ C(γ)
Taking the pth root, we have:
Wp(PX , QX ) ≤
Z
x1,x2
|x1 − x2|p dγX (x1, x2)
1 p
≤ inγf
Z
d((x, u), (x′, u′))p dγ
1/p
= Wp(PX,U , QX,U )
This implies Wp(PX , QX ) ≤ Wp(PX,U , QX,U ). Combining the two inequalities, we have:
Wp(PX,U , QX,U ) = Wp(PX , QX )
Lemma 22 (Wasserstein Distance with Shared Marginals). If PX,U = FX × PU|X and QX,U = FX × QU|X are two joint distributions with the same marginal distribution FX but different conditional distributions PU|X and QU|X, then:
Wp(PX,U , QX,U ) =
Z
Wp(PU|X=x, QU|X=x) dFX (x) = EFX [Wp(PU|X , QU|X )]
Proof. We will show that the optimal transport plan works independently within each slice corresponding to a specific value of X = x. For any joint distribution γ on (X × U ) × (X × U ) with marginals PX,U and QX,U , define:
γX (x1, x2) =
Z
u1
Z
u2
γ((x1, u1), (x2, u2)) du2 du1
Since both PX,U and QX,U have the same marginal FX, any transport plan γ with these marginals must have:
γX (x1, x2) =
(
FX (x1) if x1 = x2
0 if x1 ̸= x2
This means γ((x1, u1), (x2, u2)) = 0 whenever x1 ̸= x2. We can express any transport plan γ as:
γ((x, u1), (x, u2)) = FX(x) · γx(u1, u2)
where for each x, γx is a transport plan between PU|X=x and QU|X=x. The total transportation cost is:
C(γ) =
x
d((x1, u1), (x2, u2))p dγ((x1, u1), (x2, u2))
=
x
(|x1 − x2|p + |u1 − u2|p) dγ((x1, u1), (x2, u2))
55

Draft
Since γ only assigns probability to pairs where x1 = x2 = x, and |x − x|p = 0:
C(γ) =
x
|u1 − u2|p dγ((x, u1), (x, u2))
=
Z
x
FX (x)
x
|u1 − u2|p dγx(u1, u2) dx
For each x, the minimum value of s |u1−u2|p dγx(u1, u2) is exactly W p
p (PU|X=x, QU|X=x)
by the definition of the Wasserstein distance. Therefore, the minimum total cost is:
Wp
p (PX,U , QX,U ) =
Z
FX (x) · W p
p (PU|X=x, QU|X=x) dx
=
Z
Wp
p (PU|X=x, QU|X=x) dFX (x)
Taking the p-th root:
Wp(PX,U , QX,U ) =
Z
Wp
p (PU|X=x, QU|X=x) dFX (x)
1/p
Corollary 23. For p = 1, we have:
W1(PX,U , QX,U ) =
Z
W1(PU|X=x, QU|X=x) dFX (x)
= EFX [W1(PU|X , QU|X )]
A.2 Proof of Theorem 14
Theorem 24 (Upper Bound on PATE MSE). Under the stated assumptions, the Mean Squared Error of the PATE estimator is bounded by:
MSEPATE ≤ L2 · (W1(PX , SX ) + η)2 + σ2
S
where η = EPX [W1(PU|X, SU|X)] represents the degree of unmeasured heterogeneity, and σ2
S is the error of the downstream treatment effect estimator.
Proof. Starting with the definition of MSEP AT E, we have:
MSEP AT E = E
h
τ P − τˆS 2i
=
Z
τ (x, u) dFP (x, u) −
Z
τˆ(x, u) dFS(x, u)
2
=
Z
τ (x, u) dFP (x, u) −
Z
τ (x, u) dFS(x, u) +
Z
τ (x, u) dFS(x, u) −
Z
τˆ(x, u) dFS(x, u)
2
=
Z
τ (x, u)[dFP (x, u) − dFS(x, u)] +
Z
[τ (x, u) − τˆ(x, u)]dFS(x, u)
2
56

Draft
By Theorem 10 (independence of treatment assignment and site selection):
MSEP AT E =
Z
τ (x, u)[dFP (x, u) − dFS(x, u)]
2
+
Z
[τ (x, u) − τˆ(x, u)]dFS(x, u)
2
Define σ2
S = R [τ (x, u) − τˆ(x, u)]dFS(x, u) 2, which is the sampling error of our estimator of τ . From the perspective of our argument, this is irreducible noise. This gives us:
MSEP AT E =
Z
τ (x, u)[dFP (x, u) − dFS(x, u)]
2
+ σ2
S
Now, since, by Theorem 9, τ (x, u) is Lipschitz with constant L, we can apply Theorem 20 to get an upper bound on the error due to difference in distributions P and S:
Z
τ (x, u)[dFP (x, u) − dFS(x, u)]
2
≤ L2 · W 2
1 (PX,U , SX,U )
We can now decompose the joint Wasserstein distance between PX,U and SX,U into components related to the observed covariates X and unobserved covariates U . First, define QX,U = PX × SU|X, which has the marginal distribution of X from the population (PX) but the conditional distribution of U given X from the selected sites (SU|X). Then, since the Wasserstein distance is a proper metric, we can apply the triangle inequality, so that:
W1(PX,U , SX,U ) ≤ W1(PX,U , QX,U ) + W1(QX,U , SX,U )
Consider the terms on the right hand side. First, by Theorem 21, we have that:
W1(QX,U , SX,U ) = W1(PX , SX )
And by Theorem 22, we have that:
W1(PX,U , QX,U ) =
Z
W1(PU|X , SU|X ) dFPX = EPX W1(PU|X , SU|X )
So that:
W1(PX,U , SX,U ) ≤ EPX W1(PU|X , SU|X ) + W1(PX , SX )
Consistent with practice in sensitivity analysis, let us reparameterize this quantity as follows:
η1 ≡ EPX W1(PU|X , SU|X )
Finally, we can return to upper bounding the M SEPATE. We have:
Z
τ (x, u)[dFP (x, u) − dFS(x, u)]
2
≤ L2 · W 2
1 (PX,U , SX,U ) ≤ L2 · [W1(PX , SX ) + η1]2
Putting this all together, we have:
M SEPATE ≤ L2 · [W1(PX , SX ) + η1]2 + σ2
S
57

Draft
A.3 Proof of Theorem 15
Theorem 25 (Upper Bound on PEHE). Under the stated assumptions, the Precision in Estimation of Heterogeneous Effect is bounded by:
PEHE ≤ L2 · [W2(PX , SX ) + η2]2 + σ2
S
where η2 = EPX [W2(PU|X, SU|X)] represents the effect of unmeasured heterogeneity, and σ2
S represents irreducible estimation error.
Proof. Since treatment effects depend on both observed covariates x and unobserved covariates u, we work with the full covariate vector ξ = (x, u) and treatment effects τ (ξ) = τ (x, u). The PEHE can be written as:
PEHE =
x
[τ P (x, u) − τˆS(x, u)]2dPX,U (x, u)
Using the decomposition τ P (x, u)−τˆS(x, u) = [τ P (x, u)−τ S(x, u)]+[τ S(x, u)−τˆS(x, u)] and applying Assumption 10 (independence of experimental design and site selection):
PEHE =
x
[τ P (x, u) − τ S(x, u)]2dPX,U (x, u) +
x
[τ S(x, u) − τˆS(x, u)]2dPX,U (x, u)
Define the second term as the irreducible estimation error:
σ2
S=
x
[τ S(x, u) − τˆS(x, u)]2dPX,U (x, u)
For the first term, we define τ S(x, u) via the optimal transport plan π∗ from PX,U to
SX,U :
τ S(x, u) =
x
τ (x′, u′)π∗((x, u), d(x′, u′))
By Assumption 9 (τ is L-Lipschitz):
|τ P (x, u) − τ S(x, u)| = τ (x, u) −
x
τ (x′, u′)π∗((x, u), d(x′, u′))
≤L
x
||(x, u) − (x′, u′)||π∗((x, u), d(x′, u′))
Squaring both sides:
[τ P (x, u) − τ S(x, u)]2 ≤ L2 hx
||(x, u) − (x′, u′)||π∗((x, u), d(x′, u′))
i2
Since s π∗((x, u), d(x′, u′)) = 1, we apply Jensen’s inequality:
hx
||(x, u) − (x′, u′)||π∗((x, u), d(x′, u′))
i2
≤
x
||(x, u) − (x′, u′)||2π∗((x, u), d(x′, u′))
Therefore:
[τ P (x, u) − τ S(x, u)]2 ≤ L2 x
||(x, u) − (x′, u′)||2π∗((x, u), d(x′, u′))
Integrating over PX,U and taking the infimum over all transport plans:
x
[τ P (x, u) − τ S(x, u)]2dPX,U (x, u) ≤ L2W 2
2 (PX,U , SX,U )
58

Draft
Now we decompose the joint Wasserstein distance. Define QX,U = PX × SU|X and apply the triangle inequality:
W2(PX,U , SX,U ) ≤ W2(PX,U , QX,U ) + W2(QX,U , SX,U )
By Proposition 23 (shared marginals):
W2(PX,U , QX,U ) = EPX [W2(PU|X , SU|X )] = η2
By Proposition 22 (shared conditionals):
W2(QX,U , SX,U ) = W2(PX , SX )
Therefore:
W2(PX,U , SX,U ) ≤ η2 + W2(PX , SX )
Substituting back:
PEHE ≤ L2W 2
2 (PX,U , SX,U ) + σ2
S ≤ L2[η2 + W2(PX , SX )]2 + σ2
S
Rearranging:
PEHE ≤ L2[W2(PX , SX ) + η2]2 + σ2
S
This completes the proof.
A.4 Proof of Proposition 16
Proof. The goal is to minimize the p-Wasserstein distance Wp(PX, SX) between the empirical distribution of covariates in the population (PX) and the empirical distribution in the selected sites (SX). We show that this minimization is equivalent to our mixed integer linear program.
The p-Wasserstein distance is defined:
Wp(PX , SX ) = inf
γ∈Γ(PX ,SX )
Z
∥x − y∥pdγ(x, y)
1/p
where Γ(PX, SX) is the set of all joint distributions (transport plans) with marginals PX and SX.
For discrete distributions with finite support, this becomes:
Wp(PX , SX ) = min
π∈π(PX ,SX )
X
i,j
πij∥xi − xj∥p
!1/p
where πjk represents the amount of probability mass transported from location xi in the population to location xj in the selected sites. Since the (1/p)-th power function is monotonically increasing, minimizing Wp(PX, SX) is equivalent to minimizing P
i,j πij ∥xi −
xj ∥p .
59

Draft
The constraints arise from the site selection problem structure. The empirical distribution PX assigns equal probability mass 1
|P | to each site in the population, yielding:
|P |
X
k=1
πij = 1
|P | ∀i ∈ P
The empirical distribution SX depends on the selection variables si, assigning mass:
SX (xi) =
(1
K if site i is selected (si = 1)
0 otherwise
where K = P|P |
j=1 si is the number of selected sites. This gives:
|P |
X
j=1
πij = si
P|P |
l=1 sl
∀i ∈ P
We can only transport probability mass to selected sites: πij ≤ si for all i, j ∈ P . The site selection budget constraint limits us to at most K sites: P|P |
i=1 si ≤ K. All transport plan entries must be non-negative: πij ≥ 0 for all i, j ∈ P .
The objective function P|P |
i=1
P|P |
j=1 πij∥xi − xj∥p directly computes the p-Wasserstein distance (up to the monotonic transformation) given a valid transport plan. Therefore, minimizing Wp(PX, SX) subject to selecting at most K sites is equivalent to solving the stated MILP.
A.5 Proof of Proposition 19
Proof. We have UB(t+1) = Wp(Q(t+1), S(t)), which is Nature’s best response to the current site selection. It is an upper bound because the optimal site selection S∗ must minimize the worst-case distance, so it must perform at least as well as any feasible solution against Nature’s worst-case attack:
OPT = max
Q:Wp(Q,PX )≤ρ
Wp(Q, S∗) ≤ max
Q:Wp(Q,PX )≤ρ
Wp(Q, S(t)) = UB(t+1)
Likewise, LB(t+1) = maxQ∈Q(t+1) Wp(Q, S(t+1)) is the Researcher’s best response against all observed scenarios up to time t. This provides a lower bound because S(t+1) is the optimal solution to a relaxed version of the original problem:
LB(t+1) = min
S:|S|=K
max
Q∈Q(t+1)
Wp(Q, S)
Since we only consider scenarios in Q(t+1) rather than all possible adversarial distributions, the relaxed problem is easier than the original:
Q(t+1) ⊆ {Q : Wp(Q, PX ) ≤ ρ}
Therefore, the optimal value of the relaxed problem provides a lower bound on the original problem:
LB(t+1) = min
S:|S|=K
max
Q∈Q(t+1)
Wp(Q, S(t+1)) ≤ min
S:|S|=K
max
Q:Wp(Q,PX )≤ρ
Wp(Q, S) = max
Q:Wp(Q,PX )≤ρ
Wp(Q, S∗)
60

Draft
Combining these inequalities, we have:
LB(t+1) ≤ max
Q:Wp(Q,PX )≤ρ
Wp(Q, S∗) ≤ UB(t+1)
Recall that the algorithim terminates when UB(t+1) − LB(t+1) < ε. But by the above, this implies that we have bracketed the true optimal value within ε, guaranteeing that S(t+1) is ε-close to S∗, as desired.
B Simulation Details
B.1 Randomization versus Optimization
Simulation Design: We generate candidate populations of S = 30 sites with covariates Xs ∼ N (0, I5) and site-level treatment effects
Us = p1 − η2f (Xs) + ηεs, εs ∼ N (0, 1) τis = β⊤Xs + γUs + ξis, ξis ∼ N (0, σ2)
Parameter η ∈ {0, 0.25, 0.5, 0.75, 1} controls the fraction of treatment heterogeneity unexplained by observed covariates: η = 0 implies all variation is explained (Us = f (Xs)), while η = 1 implies purely idiosyncratic effects (Us = εs). The population CATE is τ (x) = β⊤x + γp1 − η2f (x) with PATE τ pop = E[τis].
Site Selection Methods: From each population, select K sites using:
Wasserstein Methods: OPT-PATE, OPT-CATE, DRO variants
Random Sampling: Uniform selection across sites
Stratified Sampling: k-means clustering + within-stratum sampling
Stochastic methods use B = 500 draws.
Evaluation: Fit CATE model τb(m,r,b)(x) on selected sites and compute:
PATE: MSEPATE = τ pop − τ (m,r,b) 2
CATE: PEHE = E τis − τb(m,r,b)(Xis) 2
Where PEHE expectation is over all SN units. Average stochastic methods over B draws, then pool across R = 10 replications to report performance versus η.
Output: Performance comparison across 5 signal strength levels, evaluating optimization versus randomization trade-offs under varying treatment effect predictability.
B.2 Cr pon et al.
Data Setup: Load Cr pon et al. Morocco microcredit data. Generate 250 base datasets by sampling |P | ∈ {20, 25} sites each. Estimate baseline linear model τˆ(x) = xT βˆ for treatment effect prediction.
Treatment Effect Generation: For signal strength η ∈ {0.3, 0.66, 0.9}, generate individual effects:
61

Draft
τi = η · standardize(τˆ(xi)) + (1 − η) · εi + γUi
Where εi ∼ N (0, σ2
noise), Ui ∼ N (0, 1), and γ controls unmeasured heterogeneity.
Population ATE: PATE = 1
|S |
P
s∈S τ ̄s.
Site Selection Methods: From each N-site pool, select K sites using:
Random: Uniform sampling (averaged over 15 trials)
Stratification: k-means clustering + within-stratum sampling
SPS: Synthetic Purposive Sampling [Egami and Lee, 2024].
Wasserstein DRO: Variants combining PATE/CATE objectives (p ∈ {1, 2}) with robustness radius ρ∗ ∈ {0, Q25, Q50, Q75} calibrated from empirical site distances
Robustness Calibration: Compute pairwise Wasserstein distances between sites. Set ρ∗ = 0 (non-robust), 25th/50th/75th percentiles of observed distance in the data.
Performance Metrics:
PATE: MSE = ( ˆ
PATE − PATE)2
CATE: PEHE = E[(τ (x) − τˆ(x))2] where τˆ(x) is linear model fit on selected sites.
Output: Aggregate performance across 3 × 6 = 18 scenarios (signal × shift combinations), comparing method effectiveness under varying conditions.
C Implementation Details
C.1 LP Relaxations of the MILP and Cutting-Plane Algorithm
LP Relaxation of the MILP
In general, the LP relaxation of an MILP removes the ‘mixed integer’ constraint – instead of requiring that we solve an hard discrete optimization problem with binary indicators, we solve a relaxed version of the problem, where integers are allowed to take continuous values in [0, 1], with rounding occuring after a solution to this problem has been found. Continuous linear programs can be solved in polynomial time, while integer programming is NP-hard [Karmarkar, 1984, Natarajan, 1995]. The site i-
nclusion indicators si ∈ {0, 1} are relaxed to si ∈ [0, 1].
LP Relaxation of the Cutting-Plane Algorithm
In the robust setting (ρ > 0), the cutting-plane algorithm alternates between adversarial distribution selection and site selection response. Now we solve two LPs in each iteration: the adversary maximizes transport cost subject to the Wasserstein budget constraint, then the decision maker minimizes maximum transport cost over all observed adversarial distributions.
62

Draft
Warm Starting
As a default, to speed up implementation, LP relaxation is used as initialization strategy for exact MILP solvers in both nonrobust and DRO settings. The continuous solution provides warm start values by initializing binary variables to rounded values of the relaxed solution, often reducing branch-and-bound iterations by orders of magnitude. For problems with n > 100 sites, LP relaxation is used as the default implementation, rather than as the warm start.
C.2 Runtime Experiments
Table 4: Runtime Comparison: Exact MILP vs LP Relaxation for 1-Transport
Sites Selected Combinations Exact (s) LP (s) Speedup 10.00 3.00 1.200000e+02 0.295 0.064 4.6 15.00 4.00 1.365000e+03 0.143 0.077 1.9 20.00 5.00 1.550400e+04 0.304 0.119 2.6 25.00 6.00 1.771000e+05 0.316 0.127 2.5 30.00 7.00 2.0e+06 0.429 0.190 2.3 40.00 10.00 8.5e+08 1.416 0.391 3.6 50.00 12.00 1.2e+11 1.798 0.587 3.1 75.00 18.00 9.6e+16 5.742 1.953 2.9 100.00 25.00 2.4e+23 18.741 4.386 4.3 150.00 37.00 1.9e+35 616.924 16.755 36.8 200.00 50.00 4.5e+47 46.248
63

Draft
D Selecting a Radius of Robustness
The core idea is to calculate the Jaccard similarity between the initial, non-robust, baseline solution, and the solutions chosen given different adversarial budgets {ρ1, ρ2, . . . , ρmax}. Define the Jaccard similarity:
Definition 26. Jaccard similarity J(S1, S2) = |S1 ∩ S2|
|S1 ∪ S2| .
The Jaccard similarity J(S(0), S(ρ)) compares the non-robust baseline solution S(0) (obtained with ρ = 0) to increasingly robust solutions S(ρ). This measures how much the optimal site selection changes as we demand more robustness This Jaccard radius selection procedure chooses robustness parameters in Wasserstein DRO by constructing an empirical Wasserstein grid from pairwise distances between all sites in the covariate space. The algorithm performs a greedy search to identify ρmax, the maximum -
radius beyond which adversarial solutions cease to change meaningfully. Starting from the non-robust baseline solution S(0), the procedure solves the DRO problem at empirical distance quantiles and tracks solution stability using the Jaccard similarity. When the Jaccard similarity falls below 0.5, indicating that half the sites in the robust solution differ from those in the non-robust solution, the algorithm terminates the search and sets ρmax. A refined grid search over [0, ρmax] then maps the s-
olution path, allowing automatic classification into four robustness levels: none (ρ = 0), moderate (75 − 90% solution overlap), high (50 − 75% overlap), and maximum (< 50% overlap), subject to the constraint that the associated values of ρ are also monotonically increasing. Geometrically, we provide a ‘menu’ of solution sets that expand outwards and have less and less in common with the baseline solution. This procedure generates ρ values that answer the question: “What would small, medium, and l-
arge distribution shifts look like for my specific dataset, given observed variation on observable covariates?”
64

Draft
Algorithm 2 Data-Adaptive Robustness Radius Selection via Jaccard Similarity
Require: Site coordinates X ∈ Rn×d, number of sites s, Wasserstein norm p, grid resolution ngrid
Ensure: Robustness levels {ρmoderate, ρhigh, ρmaximum}
1: Compute empirical distance matrix: Dij = Wp(δxi, δxj ) for all i, j ∈ [n] 2: Extract pairwise distances: D = {Dij : i ̸= j} 3: Solve baseline problem: S(0) ∈ arg minS:|S|=s Wp(Pˆn, SX ) ▷ Non-robust case 4: Initialize: ρ = 0, J = ∅, converged = False ▷ Greedy search for ρmax 5: for ρ ∈ quantiles(D, [0.1, 0.2, . . . , 0.9]) do ▷ Empirical grid 6: Solve DRO problem: S(ρ) ∈ arg minS:|S|=s supQ:Wp(Q,Pˆn)≤ρ Wp(Q, SX )
7: Compute Jaccard similarity: J (ρ) = |S(0)∩S(ρ)|
|S (0) ∪S (ρ) |
8: Store: J ← J ∪ {(ρ, J(ρ))} 9: if J(ρ) < 0.5 or plateau detected then ▷ Solutions diverge significantly 10: ρmax ← ρ, break 11: end if
12: end for ▷ Grid search 13: Define grid: G = {ρ1, ρ2, . . . , ρngrid} over [0, ρmax] 14: for ρk ∈ G do
15: Solve DRO problem: S(k) ∈ arg minS:|S|=s supQ:Wp(Q,Pˆn)≤ρk Wp(Q, SX )
16: Compute Jaccard similarity: J (k) = |S(0)∩S(k)|
|S (0) ∪S (k) |
17: end for
18: ρmoderate ← min{ρk : J (k) ∈ [0.75, 0.90]} ▷ Small perturbation 19: ρhigh ← min{ρk : J(k) ∈ [0.50, 0.75]} ▷ Moderate perturbation 20: ρmaximum ← min{ρk : J (k) < 0.50} ▷ Large perturbation
21: return {ρmoderate, ρhigh, ρmaximum}
The intuition behind the procedure is that there must be a maximum adversarial perturbation budget ρmax, such that, for any ρ > ρmax the ‘most robust’ site selection does not change. This is because variation in the data is finite. This motivates the following heuristic procedure: quickly find ρmax, and then do adaptive grid search on the interval [0, ρmax], where we may sequentially add refinements in order to ensure that we collect enough site solutions S(ρ) to be able to estimate J(S(ρ), S(ρ′))-
 for a large number of pairs. Once we have this similarity measure for enough points, we can compare the observed similarities {J(S(ρi), S(ρj))}ij and rank them, giving us a set of solution sets with decreasing similarity. We then output a set of three increasing ρ values such that the solutions at each ρ have decreasing similarity to the baseline solution ρ = 0. This ensures that we have solution sets that increase in dissimilarity to the nonrobust solution as the radius ρ increases.
65

Draft
E Additional Theoretical Results
E.1 Optimal Transport and Survey Sampling
1-Wasserstein transport as balanced sampling on 1-Lipschitz functions
The 1-Wasserstein site selection problem is equivalent to balanced sampling that simultaneously controls the sampling error over the class of 1-Lipschitz functions. Intuitively, this tells us how we should think about the solution set: we choose the sites that are most likely to balance error over all 1-Lipschitz functions of the covariates.
Theorem 27 (1-Wasserstein Transport as Balanced Sampling). Let X = {x1, . . . , xn} ⊂ Rd be a finite population with uniform empirical measure PX = 1
n
Pn
i=1 δxi. For any subset
S ⊂ {1, . . . , n} with |S| = K, define SX = 1
K
P
j∈S δxj .
The 1-Wasserstein site selection problem
min
S:|S|=K
W1(PX , SX )
is equivalent to the balanced sampling problem
min
S |S|=K
sup
f ∈Lip1(Rd)
1
n
n
X
i=1
f (xi) − 1
K
X
j∈S
f (xj)
where Lip1(Rd) = {f : Rd → R : ||f ||Lip ≤ 1} is the class of 1-Lipschitz functions.
Proof. The equivalence follows directly from the Kantorovich-Rubinstein duality theorem for 1-Wasserstein distance. By the Kantorovich-Rubinstein theorem, for any two probability measures μ, ν on a metric space (X , d):
W1(μ, ν) = sup
f :||f ||Lip≤1
Z
f dμ −
Z
f dν
Applying this to our discrete measures PX and SX:
W1(PX , SX ) = sup
f :||f ||Lip≤1
Z
f dPX −
Z
f dSX
= sup
f :||f ||Lip≤1
1
n
n
X
i=1
f (xi) − 1
K
X
j∈S
f (xj)
Therefore:
mSin W1(PX , SX ) = mSin sup
f :||f ||Lip≤1
1
n
n
X
i=1
f (xi) − 1
K
X
j∈S
f (xj)
This establishes the claimed equivalence.
Remark 28 (Comparison with Classical Balanced Sampling). Classical balanced sampling typically balances on a finite set of auxiliary variables. The 1-Wasserstein formulation extends this to balance simultaneously over the infinite-dimensional class of all 1-Lipschitz functions.
66

Draft
2-Wasserstein transport as optimal stratified sampling
When the population size is divisible by the number of selected sites, 2-Wasserstein site selection is equivalent to optimal balanced stratified sampling. When the population size is not divisible by the number of selected sites, 2-Wasserstein site selection allows for fractional assignments, which strictly dominates optimal stratified sampling. To prove this, I first show that the result holds in the case where N is divisible by K. I then show that an analogous optimality result holds when N is n-
ot divisible by K. This equivalence helps us to understand why transport-based and stratification-based site selection methods for the CATE perform similarly in practice.
Theorem 29 (2-Wasserstein Transport as Optimal Stratification). Assume N is divisible by K. Let X = x1, . . . , xn ⊂ Rd be a finite population with uniform empirical measure PX = 1
n
Pn
i=1 δxi. For any subset S ⊂ 1, . . . , n with |S| = K, define SX = 1
K
P
j∈S δxj .
The 2-Wasserstein site selection problem
min
S⊂1,...,n,|S|=K
W2
2 (PX , SX )
is equivalent to the optimal balanced stratification problem:
mC,irn
K
X
j=1
X
i∈Cj
||xi − xrj ||2
where C = C1, . . . , CK is a balanced partition of 1, . . . , n with |Cj| = n
K for all j, and r = (r1, . . . , rK) with rj ∈ 1, . . . , n for all j.
Proof. I establish equivalence by showing that optimal transport plans have a simple structure that corresponds exactly to balanced partitions. The 2-Wasserstein problem requires solving:
min
π∈π(PX ,SX )
n
X
i=1
X
j∈S
πij||xi − xj||2
where π(PX, SX) contains transport plans satisfying marginal constraints.
Lemma 30 (Elements of optimal plan). Assume N is divisible by K. For any optimal transport plan π∗, we have π∗
ij ∈ {0, 1
n } for all (i, j).
Proof. First, I show that the marginal constraints induce balanced partitions, then prove that plans with closest-site assignment dominate plans that assign mass fractionally. Each population point i has mass 1
n and each selected site j ∈ S must receive mass 1
K.
Since 1
K = N/K
N , each selected site must receive mass from exactly N
K population points.
Given the discrete uniform structure, any feasible transport plan must satisfy P
j∈S πij = 1
N , for each site i – that is, that the mass of each site i must be fully allocated to sites j;
and Pn
i=1 πij = 1
K for each site j, that is, that each site j receives mass equal to 1
K.
Since each population point has indivisible mass 1
N and each selected site requires
mass from exactly N
K points, any feasible transport plan corresponds to a partition of the
population into K groups of size N
K.
Suppose for contradiction that some optimal plan π∗ has π∗
ij ∈ (0, 1
N ) for population
point i and selected sites j, j′ ∈ S with j ̸= j′, so that point i fractionally splits its mass between j and j′.
67

Draft
However, either j or j′ is closer to i. So, assigning mass to the further point is not optimal, which is a contradiction.
The optimal transport plan π∗ induces a partition Cj : j ∈ S where Cj = i : π∗
ij = 1
N.
The target marginal constraint ensures balance: P
i∈Cj
1
N= 1
K implies |Cj| = n
s . The
objectives are identical up to scaling:
W2
2 (PX , SX ) = 1
n
X
j∈S
X
i∈Cj
||xi − xj||2
Now, I show that these problems are equivalent. Given optimal site selection S with transport plan π∗, construct stratification by setting Cj = {i : π∗
ij = 1
N } and rj = j for
j ∈ S∗.
Conversely, given an optimal stratification (C∗, r∗), construct site selection S∗ = {r∗
1, . . . , r∗
s} with transport plan π∗
ij = 1
N if i ∈ Ck and j = rk, zero otherwise. Both
mappings are optimal, and equivalent.
Corollary 31 (Optimality versus Stratified Sampling). Assume N is divisible by K. 2Wasserstein site selection weakly dominates any stratified sampling procedure that separates stratification and representative selection.
Proof. Let Fstrat denote the feasible set of stratification, which first fixes a partition P according to some criterion, then optimizes representatives within strata:
Fstrat = {(P, r) : P fixed by Stage 1, rj ∈ Cj for all j}
Let FWasserstein denote the feasible set of 2-Wasserstein optimization:
FWasserstein = {(P, r) : P balanced partition, rj ∈ {1, . . . , n} for all j}
Since stratification restricts representatives to lie within their assigned strata while 2-Wasserstein allows any population point as a representative, we have:
Fstrat ⊂ FWasserstein
. Therefore:
min
(P ,r)∈FWasserstein
s
X
j=1
X
i∈Cj
∥xi − xrj ∥2 ≤ min
(P ,r)∈Fstrat
s
X
j=1
X
i∈Cj
∥xi − xrj ∥2
with equality when stratification is optimal.
Remark 32. Stratification first fixes a partition, then optimizes representatives within strata. This restricts the feasible set compared to 2-Wasserstein optimization, which jointly optimizes partitions and representatives with the constraint that representatives come from the full population.
Remark 33 (Non-divisible case). When n mod K ̸= 0, the equivalence to balanced stratification no longer holds exactly. The optimal transport plan must use fractional assignments π∗
ij ∈ [0, 1/n] to satisfy the marginal constraint P
i πij = 1/K at each selected site (since n/K is non-integer). Meanwhile, stratified sampling is constrained to integer assignments with unequal stratum sizes. The dominance argument of Corollary 31 still holds: fractional assignments form a strictly larger feasible set than integer assignments, so the 2-Wasserstein solution achieves a lower objective value.
68

Draft
Remark 34 (CATE solution induces an Optimal Voronoi Partition of the Covariate Space). The optimal solution creates constrained Voronoi cells where each cell contains exactly n
s population points and centroids are chosen from the population to minimize
total within-cell variance. We can interpret the Voronoi cells as optimal strata.
Remark 35 (Relationship to k-means clustering). While k-means allows arbitrary centroids in Rd, 2-Wasserstein transport constrains centroids to the original population and enforces balanced clusters when n is divisible by K. When n mod K ̸= 0, it enforces clusters as balanced as the discrete constraint allows (sizes ⌊n/K⌋ or ⌈n/K⌉), making it a discrete, approximately-balanced variant of k-means clustering.
E.2 Game Theory and Distributionally Robust Optimization
We can interpret Distributionally Robust Optimization as a game played between Nature and a Researcher.
Setup
Consider the following game: Actors
• A Researcher, who selects sites S to minimize representation error wrt P
• Nature, who perturbs the population distribution to maximize representation error
Order of Actions
1. The Researcher observes population sites {x1, . . . , xn} and chooses site selection S ⊆ |P | with |S| = K
2. Nature observes the Researcher’s choice and selects adversarial distribution Q subject to budget constraint Wp(Q, PX) ≤ ρ
3. Payoffs are realized based on representation error W p
p (Q, SX )
Action Spaces
AResearcher = {S ⊆ [n] : |S| = s}
ANature = {Q ∈ P({x1, . . . , xn}) : Wp(Q, PX ) ≤ ρ}
Payoffs
The Researcher seeks to minimize representation error. Nature seeks to maximize it. The payoff function is:
u(S, Q) = W p
p (Q, SX )
where SX = 1
s
P
j∈S δxj is the empirical distribution of selected sites. The Researcher receives payoff −u(S, Q) and Nature receives payoff u(S, Q) (this is a zero-sum game).
69

Draft
Equilibrium Analysis
Definition 36 (Subgame Perfect Equilibrium). The subgame perfect equilibrium (S∗, Q∗(·)) satisfies:
Nature’s Best Response: For any S ∈ AResearcher,
Q∗(S) ∈ arg max
Q∈P ({x1 ,...,xn })
Wp
p (Q, SX ) : Wp(Q, PX ) ≤ ρ
Researcher’s Optimal Strategy:
S∗ ∈ arg min
S∈AResearcher
Wp
p (Q∗(S), SX )
The equilibrium value is:
V ∗ = min
S⊆[n],|S|=s
max
Q:Wp(Q,PX )≤ρ
Wp
p (Q, SX )
Variable Interpretation
Variable Interpretation
zj ∈ {0, 1} Site selection indicator μk ≥ 0 Nature’s adversarial distribution αik ≥ 0 Transport from original to adversarial distribution βkj ≥ 0 Transport from adversarial to selected distribution
Mixed-Integer Linear Program Formulation
The equilibrium can be computed by solving:
min
z,μ,α,β
n
X
k=1
n
X
j=1
βkjd(xk, xj)p (1)
subject to
n
X
j=1
zj = s (2)
n
X
k=1
μk = 1 (3)
n
X
k=1
αik = 1
n ∀i (4)
n
X
i=1
αik = μk ∀k (5)
n
X
j=1
βkj = μk ∀k (6)
n
X
k=1
βkj = zj
s ∀j (7)
βkj ≤ zj ∀k, j (8)
X
i,k
αikd(xi, xk)p ≤ ρp (9)
zj ∈ {0, 1}, μk, αik, βkj ≥ 0 (10)
70

Draft
Constraints
Linking Constraint (8): If site j is not selected (zj = 0), then βkj = 0 for all k. Nature cannot assign transport cost to unselected sites.
Researcher’s Budget Constraint (2): Researcher can choose K sites.
Nature’s Budget Constraint (9): Limits Nature’s ability to perturb the distribution. Larger ρ gives Nature more power to create challenging distributions. Transport Constraints (4)-(7): Ensure valid probability distributions and transport plans.
Discussion
This game theoretic formulation motivates the cutting-plane algorithm described in Section 3.2: the Researcher chooses sites, Nature responds with worst-case distribution, the Researcher updates their site selection based on all perturbations observed so far, and the process continues until convergence to Nash equilibrium. This is an illustration of an algorithm that implements fictitious play [Brown, 1951].
71

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:47.802Z
- **Text Length:** 166664 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 71 of 71
