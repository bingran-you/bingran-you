# PDF Document: Kikuchi - 2025 - Dynamic Spatial Treatment Effects and Network Fragility Theory and Evidence from the 2008 Financial.pdf

**File Path:** Kikuchi - 2025 - Dynamic Spatial Treatment Effects and Network Fragility Theory and Evidence from the 2008 Financial.pdf

**Processed Date:** 2026-02-10T18:17:28.272Z

**File Size:** 2472.64 KB

**Total Pages:** 78

**Extracted Pages:** 78

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3591

**Title:** Dynamic Spatial Treatment Effects and Network Fragility: Theory and Evidence from the 2008 Financial Crisis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Spatial Treatment Effects and Network Fragility:
Theory and Evidence from the 2008 Financial Crisis
Tatsuru Kikuchi∗
Faculty of Economics, The University of Tokyo,
7-3-1 Hongo, Bunkyo-ku, Tokyo 113-0033 Japan
(November 13, 2025)
Abstract
The 2008 financial crisis exposed fundamental vulnerabilities in interconnected banking
systems, yet existing frameworks fail to integrate spatial propagation with network
contagion mechanisms. This paper develops a unified spatial-network framework to
analyze systemic risk dynamics, revealing three critical findings that challenge conven
tional wisdom. First, banking consolidation paradoxically increased systemic fragility:
while bank numbers declined 47.3 % from 2007 to 2023, network fragility measured by
algebraic connectivity rose 315.8 %, demonstrating that interconnectedness intensity
dominates institutional count. Second, financial contagion propagates globally with
negligible spatial decay (boundary d* = 47,474 km), contrasting sharply with localized
technology diffusion (d* = 69 km)—a scale difference of 688 times. Third, traditional
∗e-mail: tatsuru.kikuchi@e.u-tokyo.ac.jp
1
arXiv:2511.08602v1 [q-fin.RM] 2 Nov 2025

difference-in-differences methods overestimate crisis impacts by 73.2 % when ignoring
network structure, producing severely biased policy assessments. Using bilateral
exposure data from 156 institutions across 28 countries (2007-2023) and employing
spectral analysis of network Laplacian operators combined with spatial difference-in
differences identification, we document that crisis effects amplified over time rather
than dissipating, increasing fragility 68.4 % above pre-crisis levels with persistent effects
through 2023. The consolidation paradox exhibits near-perfect correlation (r = 0.97)
between coupling strength and systemic vulnerability, validating theoretical predictions
from continuous spatial dynamics. Policy simulations demonstrate network-targeted
capital requirements achieve 11.3x amplification effects versus uniform regulations.
These findings establish that accurate systemic risk assessment and macroprudential
policy design require explicit incorporation of both spatial propagation and network
topology.
Keywords: Financial networks, Systemic risk, Spatial treatment effects, Network
contagion, 2008 Financial Crisis, Consolidation paradox
JEL Classification: G01, G21, G28, C31, C63, E44
2

Contents
1 Introduction 6
1.1 Motivation and Research Questions . . . . . . . . . . . . . . . . . . . . . . . 6
1.2 Theoretical Framework . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
1.3 Empirical Strategy and Data . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
1.4 Key Findings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
1.5 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
1.6 Roadmap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
2 Literature Review 15
2.1 Financial Networks and Systemic Risk . . . . . . . . . . . . . . . . . . . . . 15
2.2 Spatial Treatment Effects and Causal Inference . . . . . . . . . . . . . . . . 17
2.3 Financial Crises and Network Evolution . . . . . . . . . . . . . . . . . . . . 18
2.4 Our Contribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
3 Theoretical Framework 21
3.1 Financial Networks as Weighted Graphs . . . . . . . . . . . . . . . . . . . . 21
3.2 Spectral Characterization of Network Fragility . . . . . . . . . . . . . . . . . 22
3.3 The Consolidation Paradox . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
3.4 Spatial Decay and Network Propagation . . . . . . . . . . . . . . . . . . . . 25
3.5 Crisis Impact Through Spatial Difference-in-Differences . . . . . . . . . . . . 26
3.6 Network-Targeted Policy Design . . . . . . . . . . . . . . . . . . . . . . . . . 28
4 Data and Empirical Methodology 29
4.1 Data Sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3

4.1.1 Bank for International Settlements Consolidated Banking Statistics . 29
4.1.2 Individual Bank Financial Statements . . . . . . . . . . . . . . . . . . 30
4.1.3 Federal Reserve Bank of New York Bilateral Exposure Reports . . . . 30
4.1.4 European Banking Authority Transparency Exercise . . . . . . . . . 31
4.2 Sample Construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
4.3 Network Construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
4.3.1 Exposure Aggregation . . . . . . . . . . . . . . . . . . . . . . . . . . 33
4.3.2 Missing Data Imputation . . . . . . . . . . . . . . . . . . . . . . . . . 34
4.3.3 Adjacency Matrix Construction . . . . . . . . . . . . . . . . . . . . . 35
4.4 Variable Definitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
4.5 Summary Statistics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
5 Empirical Results: 2008 Financial Crisis Impact 41
5.1 Baseline Treatment Effect Estimates . . . . . . . . . . . . . . . . . . . . . . 41
5.2 Dynamic Treatment Effects . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
5.3 The Consolidation Paradox . . . . . . . . . . . . . . . . . . . . . . . . . . . 45
5.4 Spatial Decay Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
5.5 Comparison with Traditional Methods . . . . . . . . . . . . . . . . . . . . . 51
6 Robustness Analysis 54
6.1 Alternative Network Specifications . . . . . . . . . . . . . . . . . . . . . . . 54
6.2 Pre-Trends Tests and Placebo Analysis . . . . . . . . . . . . . . . . . . . . . 56
6.3 Subperiod Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
6.4 Alternative Sample Definitions . . . . . . . . . . . . . . . . . . . . . . . . . . 59
7 Policy Implications and Applications 61
4

7.1 Network-Targeted Capital Requirements . . . . . . . . . . . . . . . . . . . . 61
7.2 Stress Testing with Network Dynamics . . . . . . . . . . . . . . . . . . . . . 63
7.3 Resolution Planning and Too-Big-to-Fail . . . . . . . . . . . . . . . . . . . . 64
7.4 International Coordination . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
8 Conclusion 69
A Computational Algorithms 77
A.1 Eigenvalue Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
A.2 Bootstrap Inference . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77
A.3 Maximum Entropy Network Imputation . . . . . . . . . . . . . . . . . . . . 78
5

1 Introduction
The 2008 financial crisis stands as the defining economic event of the twenty-first century,
triggering the deepest global recession since the Great Depression and fundamentally
reshaping financial regulation worldwide. The crisis revealed that modern financial systems
exhibit complex network properties where local perturbations—such as the collapse of
Lehman Brothers on September 15, 2008—can cascade through interconnected institutions
to generate system-wide instability. Understanding how shocks propagate through financial
networks, how network structure evolves in response to crises, and whether consolidation
enhances or undermines stability remains central to macroprudential policy design fifteen
years later.
This paper develops and empirically implements a unified framework for analyzing
systemic risk in financial networks that combines three methodological advances: continuous
functional analysis of spatial treatment effects from Kikuchi (2024c) and Kikuchi (2024f),
spectral characterization of network fragility from Kikuchi (2024i), and spatial difference
in-differences methods adapted for interconnected systems. By integrating these comple
mentary perspectives, we provide the first comprehensive analysis of how the 2008 crisis
altered financial network structure and demonstrate a consolidation paradox that challenges
conventional wisdom about stability.
1.1 Motivation and Research Questions
The conventional narrative of post-crisis financial regulation emphasizes that consolidation
enhanced stability by eliminating weak institutions and concentrating resources in systemi
cally important financial institutions (SIFIs) subject to enhanced oversight. Bernanke (2010)
6

argues that regulatory reforms including the Dodd-Frank Act successfully strengthened the
system by improving capital adequacy and resolution mechanisms. Adrian & Shin (2010)
documents that the crisis stemmed from excessive leverage and maturity transformation,
problems addressable through higher capital requirements regardless of network structure.
We challenge this narrative by demonstrating that consolidation paradoxically increased
systemic vulnerability measured through network fragility metrics. While the number
of major financial institutions declined 47.3 % from 296 in 2007 to 156 in 2023, the
algebraic connectivity of the global banking network—which governs shock propagation
speed—increased 315.8 % over the same period. This implies that surviving institutions
became more tightly coupled, with contagion spreading faster post-crisis despite fewer nodes.
The finding has profound implications for macroprudential policy: interventions that reduce
institution count without addressing coupling strength may inadvertently increase systemic
risk.
Our analysis addresses four fundamental research questions. First, how did the 2008
financial crisis causally impact network fragility in global banking systems? Answering
this requires overcoming the endogeneity problem that network structure reflects both crisis
impacts and strategic institutional responses. We employ spatial difference-in-differences
methods developed in Kikuchi (2024f) that treat the entire network as the unit of analysis,
comparing pre-crisis (2007) and post-crisis (2009-2023) periods while accounting for spatial
spillovers that violate standard parallel trends assumptions.
Second, what explains the consolidation paradox whereby fewer institutions generate
higher fragility? We develop theoretical foundations showing that algebraic connectivity
λ2 depends not only on node count n but also on coupling strength measured by edge
weights. When bilateral exposures intensify among surviving institutions, λ2 can rise even as
7

n falls. Using the spectral framework from Kikuchi (2024i), we derive closed-form expressions
relating λ2 to exposure concentration and validate predictions using comprehensive bilateral
data.
Third, how do spatial treatment effects in financial networks compare to technology
diffusion patterns studied in Kikuchi (2024j)? That paper documents strong spatial decay
in technology adoption with spatial boundary d∗ = 69 kilometers, reflecting localized
demonstration effects and knowledge spillovers. We hypothesize that financial contagion
exhibits fundamentally different spatial properties due to electronic payment systems
and global capital markets that eliminate geographic frictions. Our estimates reveal
spatial decay rate κ ≈ 0.00002 per kilometer, implying spatial boundary d∗ ≈ 47, 474
kilometers—effectively global propagation.
Fourth, what are the implications for macroprudential policy design? We demonstrate
that network-targeted interventions achieve amplification factors 11.3 times larger than
uniform policies by strategically exploiting spectral centrality. Banks with high eigenvector
centrality contribute disproportionately to λ2, making them priority targets for capital
requirements or resolution planning. This finding extends results from Kikuchi (2024i) to
show that continuous functional analysis provides actionable guidance for regulatory design.
1.2 Theoretical Framework
Our theoretical framework unifies three mathematical approaches that have traditionally
been applied separately. From spatial economics, we adopt the continuous functional
methods developed in Kikuchi (2024c), which characterize treatment effect propagation
through partial differential equations analogous to fluid dynamics. The fundamental
8

insight is that spillovers in interconnected systems satisfy diffusion equations where local
perturbations spread according to network structure:
∂u
∂t = −κ∇2u − λ2Lu + f (x, t) (1)
where u(x, t) represents the state variable (financial stress, default probability, liquidity
shortage) at location x and time t, κ governs spatial decay through geographic distance,
λ2 controls network diffusion through the graph Laplacian L, and f (x, t) represents
external forcing from policy interventions or exogenous shocks. This formulation nests both
geographic and network channels, allowing us to estimate their relative importance.
From spectral graph theory, we adopt methods that characterize network properties
through eigenvalue decomposition of the Laplacian matrix. As established in Fiedler
(1973) and extended to financial networks in Kikuchi (2024i), the algebraic connectivity
λ2 (second-smallest Laplacian eigenvalue) measures network fragility. Higher λ2 indicates
tighter coupling and faster contagion propagation. The mixing time τ ∼ 1/λ2 governs
how quickly shocks equilibrate across the network, with λ2 = 1, 719 pre-crisis yielding
τ ≈ 0.58 milliseconds and λ2 = 7, 151 post-crisis yielding τ ≈ 0.14 milliseconds—a four
fold acceleration in propagation speed.
From causal inference, we adopt spatial difference-in-differences methods adapted from
Kikuchi (2024f) for settings where spatial dependence precludes unit-level treatment effect
identification. The key insight is that while individual institution-level effects cannot be
separately identified due to spillovers, aggregate network-level effects remain identifiable.
We define the treatment effect as:
τspatial = E[λ2(post) − λ2(pre)|Crisis] − E[λ2(post) − λ2(pre)|N oCrisis] (2)
9

where the expectation is taken over entire network realizations rather than individual
institutions. This formulation respects spatial structure while maintaining causal interpre
tation.
The integration of these three approaches yields testable predictions. From the diffusion
equation (1), we predict that financial shocks exhibit minimal spatial decay (κ ≈ 0) due
to electronic transmission mechanisms, contrasting sharply with technology diffusion. From
spectral theory, we predict that consolidation increases λ2 when exposure concentration
rises faster than node count declines. From spatial difference-in-differences, we predict that
ignoring network structure produces upward-biased estimates that overstate crisis impacts
by attributing spillover effects to direct treatment.
1.3 Empirical Strategy and Data
We implement this framework using comprehensive bilateral exposure data from 156 major
financial institutions across 28 countries spanning 2007-2023. The dataset comes from
multiple sources: Bank for International Settlements (BIS) Consolidated Banking Statistics
for cross-border exposures, individual bank financial statements for institution-specific
balance sheet data, and Federal Reserve Bank of New York Bilateral Exposure Reports
for US institution linkages. For each institution i and counterparty j, we observe total
exposure Eij,t at quarterly frequency.
From these bilateral exposures, we construct exposure-weighted networks where edge
weights reflect the strength of financial connections. The adjacency matrix is At = [aij,t]
where aij,t = Eij,t/pEi · Ej represents the geometric average normalized exposure. The
degree matrix Dt contains row sums of At, and the Laplacian is Lt = Dt − At. We compute
10

the algebraic connectivity λ2(Lt) using the Lanczos algorithm for sparse symmetric matrices,
as detailed in Section A.
Our identification strategy treats the 2008 financial crisis as a quasi-natural experiment
that exogenously shocked the global financial system. Following Brunnermeier (2009), we
date the crisis onset to September 15, 2008 (Lehman Brothers bankruptcy) and the acute
phase as September 2008 through March 2009. This provides a clear treatment timing:
institutions are unexposed before September 2008 and exposed afterward. The parallel
trends assumption requires that network fragility would have evolved similarly in treated
and control periods absent the crisis—testable using pre-2008 data.
The empirical specification is:
λ2,t = α + β · P ost2008t + γ′Xt + εt (3)
where P ost2008t indicates quarters after September 2008, Xt includes time-varying
controls (global GDP growth, VIX volatility index, sovereign debt levels), and standard
errors are bootstrapped by resampling network realizations. The coefficient β captures the
causal impact of the crisis on network fragility.
1.4 Key Findings
Our empirical analysis yields four principal findings. First, the 2008 crisis caused a large,
statistically significant, and persistent increase in network fragility. Algebraic connectivity
rose from λ2 = 1, 719 in 2007Q2 to λ2 = 7, 151 in 2023Q4, representing a 315.8 % increase.
The difference-in-differences estimate of the treatment effect is β = +1, 176 (95 % CI: [+733,
+1,618], p < 0.001), indicating that the crisis elevated fragility 68.4 % above counterfactual
11

trends. Effects persist through 2023 with no evidence of reversion, demonstrating structural
hysteresis consistent with Kikuchi (2024f).
Second, we document a consolidation paradox whereby network fragility increased despite
substantial reduction in institution count. The number of major banks fell from 296 in
2007 to 156 in 2023 (− 47.3 %), yet λ2 rose 315.8 %. Decomposition analysis reveals that
average bilateral exposure concentration increased 687 % over this period, with the exposure
Herfindahl index rising from 0.043 to 0.339. Surviving institutions became dramatically more
interconnected, with the average bank maintaining 47.3 counterparty relationships in 2023
versus 12.6 in 2007. The correlation between exposure concentration and λ2 is r = 0.97 (p
< 0.001), confirming that coupling strength drives fragility more than node count.
Third, spatial decay analysis reveals fundamentally different propagation patterns for
financial contagion versus technology diffusion. Estimating equation (1) jointly for both
channels, we find spatial decay rate κ = 0.00002 per kilometer for financial networks (95
% CI: [0.000014, 0.000026]) versus κ = 0.043 per kilometer for technology adoption. This
implies spatial boundary d∗ = 47, 474 kilometers for finance versus d∗ = 69 kilometers
for technology—two thousand times larger. Financial contagion propagates essentially
instantaneously across the globe due to electronic payment systems, while technology
adoption remains geographically localized due to tacit knowledge requirements. The finding
demonstrates that spatial treatment effect methodologies developed in Kikuchi (2024c) apply
broadly but with dramatically different parameter values across economic contexts.
Fourth, traditional difference-in-differences methods that ignore network structure
produce severely biased estimates. The naive DID estimator that treats institutions as
independent units yields βˆnaive = +2, 034 (s.e. = 287), 73.2 % larger than the correctly
specified spatial DID estimate βˆspatial = +1, 176 (s.e. = 218). This bias stems from
12

attributing spillover effects to direct treatment: when Institution A experiences direct crisis
impact, connected Institution B experiences indirect impact through bilateral exposures. The
naive estimator incorrectly codes both as direct treatment, double-counting spillovers. Our
spatial DID approach aggregates to network level before differencing, properly accounting
for within-network propagation.
1.5 Contributions
This paper makes three main contributions to the literature. First, we provide the first
comprehensive empirical analysis demonstrating that post-crisis consolidation increased
rather than decreased systemic fragility. This challenges the dominant narrative in policy
circles that consolidation enhances stability by eliminating weak institutions. Our finding
that λ2 rose 315.8 % while bank count fell 47.3 % reveals a consolidation paradox with
profound regulatory implications. Policies that reduce institution count without addressing
exposure concentration may inadvertently increase systemic risk.
Second, we demonstrate the empirical relevance of continuous functional methods for
financial network analysis. While Kikuchi (2024c) and Kikuchi (2024f) develop theoretical
foundations for spatial treatment effects using Navier-Stokes equations, our paper provides
the first large-scale validation using comprehensive bilateral exposure data. The finding
that λ2 governs propagation speed with mixing time τ ∼ 1/λ2 as predicted by spectral
theory confirms that mathematical physics provides actionable insights for financial stability
analysis.
Third, we establish that spatial treatment effect methodologies apply to financial
networks but with dramatically different parameters than technology diffusion. The
spatial decay rate differs by a factor of 2,150 (κfinance/κtech = 0.00002/0.043), reflecting
13

fundamentally distinct propagation mechanisms. This demonstrates the generality of the
continuous functional framework while highlighting context-dependence of specific parameter
values.
1.6 Roadmap
The remainder of the paper proceeds as follows. Section 2 reviews relevant literature on
financial networks, systemic risk measurement, and spatial treatment effects. Section 3
develops the theoretical framework, deriving key results on consolidation paradox and spatial
boundaries. Section 4 describes data sources, network construction, and summary statistics.
Section 5 presents the main empirical results on the 2008 crisis impact, consolidation paradox,
and spatial propagation. Section 6 conducts extensive robustness checks including alternative
network specifications, placebo tests, and sensitivity analysis. Section 7 discusses policy
implications for macroprudential regulation, capital requirements, and resolution planning.
Section 8 concludes. Appendices provide computational algorithms, additional robustness
results, and theoretical proofs.
14

2 Literature Review
This paper contributes to three distinct but related literatures: financial networks and
systemic risk, spatial treatment effects and causal inference with spillovers, and network
dynamics following aggregate shocks. We discuss each strand and highlight how our
framework advances understanding.
2.1 Financial Networks and Systemic Risk
The study of financial networks has emerged as a central research area following the 2008
crisis, with scholars applying graph theory and network science to understand contagion
dynamics. Allen & Gale (2000) provide an early theoretical framework showing that
complete networks may be more resilient than incomplete networks due to loss-sharing
mechanisms, though this result reverses when initial shocks are sufficiently large. Freixas
et al. (2000) extend this analysis to examine optimal network architecture from a social
planner’s perspective, demonstrating that decentralized formation may generate excessive
interconnectedness.
Elliott et al. (2014) develop a comprehensive framework for analyzing financial networks
where institutions hold cross-holdings of debt and equity. They show that network structure
determines whether small shocks dissipate or cascade through the system, with denser
networks exhibiting nonmonotonic stability properties. When shocks are small, connectivity
facilitates risk-sharing and enhances stability. When shocks exceed critical thresholds,
connectivity transmits contagion and undermines stability. This theoretical insight motivates
empirical investigation of actual network structures.
15

Acemoglu et al. (2015) analyze how network topology affects systemic risk in input
output networks and financial systems. They establish sufficient conditions under which
shocks to individual firms have negligible aggregate effects (asymptotic resilience) versus
conditions under which idiosyncratic shocks generate aggregate fluctuations. The key insight
is that heavy-tailed degree distributions—characteristic of real-world networks—amplify tail
risks beyond what diversification arguments suggest. Our analysis complements this work
by providing empirical evidence that post-crisis consolidation created more heavy-tailed
exposure distributions.
The empirical literature on financial network measurement faces significant data chal
lenges since bilateral exposures are typically proprietary and incomplete. Upper & Worms
(2004) develop estimation methods for the German interbank market, showing how to
construct network approximations from aggregate balance sheet data when bilateral positions
are unobserved. Garratt et al. (2014) apply these methods to map global banking networks
using BIS consolidated banking statistics. Our dataset improves on these approaches
by incorporating actual bilateral exposures from regulatory filings rather than estimated
exposures.
Gai & Kapadia (2010) examine contagion dynamics in interbank networks through
simulation analysis, demonstrating that highly connected but heterogeneous network
structures exhibit fragility where the system appears robust in normal times but becomes
vulnerable following negative shocks. Glasserman & Young (2015) refine these results
by deriving analytical approximations for contagion probabilities as functions of network
moments. Our spectral approach complements these simulation-based methods by providing
closed-form characterizations through eigenvalue analysis.
16

Recent work has applied spectral methods from graph theory to characterize financial
network structure. Hautsch et al. (2015) compute systemic risk contributions using principal
component analysis of return covariances, effectively employing spectral decomposition.
Sommese et al. (2021) explicitly analyze the Laplacian spectrum of interbank networks,
demonstrating that algebraic connectivity correlates with systemic importance measures.
Our contribution extends this line by connecting λ2 to treatment effect propagation speed
through continuous functional analysis from Kikuchi (2024f).
2.2 Spatial Treatment Effects and Causal Inference
The problem of estimating treatment effects in the presence of spillovers has received increas
ing attention as researchers recognize that standard causal inference methods break down
when treated units affect control units. Manski (2013) provides a comprehensive treatment
of the identification problem, showing that spillovers create fundamental challenges for
recovering causal effects without strong assumptions. He develops partial identification
bounds that remain valid under weak assumptions about spillover structure.
Abadie et al. (2020) examine inference in experiments with spillovers, demonstrating that
randomization-based approaches remain valid even when spillovers are present, provided
estimation targets are carefully defined. They propose aggregating observations into clusters
where within-cluster spillovers are allowed but between-cluster spillovers are assumed absent.
Our spatial DID approach can be interpreted as implementing this insight by treating the
entire network as a single cluster.
Recent work has developed continuous spatial approaches that model treatment effect
decay as a function of distance. Butts et al. (2017) extends the classic difference-in-differences
design to account for spatial spillovers using kernel weighting functions. Cao & Liu (2021)
17

propose augmented inverse probability weighting estimators that remain consistent under
spatial interference. Our framework builds on Kikuchi (2024c), who shows that spatial
decay satisfies partial differential equations analogous to Navier-Stokes fluid dynamics.
Kikuchi (2024a) provides a unified framework connecting discrete network spillovers with
continuous spatial diffusion, demonstrating that both approaches are special cases of a
general evolution equation. Kikuchi (2024b) extends this framework to stochastic settings
where treatment effects are random functionals. Our contribution applies these theoretical
developments to financial networks, demonstrating their empirical relevance.
The methodological challenge in our context is that financial networks violate standard
spillover assumptions in two ways. First, spillovers occur through bilateral exposures rather
than geographic proximity, requiring network-based distance metrics. Second, network
structure is endogenous to the crisis, as institutions adjust exposures in response to stress.
We address the first challenge using spectral graph distance metrics from Kikuchi (2024i)
and the second through event study designs that compare pre- and post-crisis periods.
2.3 Financial Crises and Network Evolution
A growing empirical literature examines how financial networks evolve during and after
crises. Upper (2011) surveys simulation methods for assessing contagion risk in interbank
markets, documenting substantial heterogeneity in estimated impacts depending on network
specification. Demirgu ̈ ̧c-Kunt et al. (2020) analyze bank performance during the COVID
19 pandemic, finding that better-capitalized banks with more diversified funding structures
exhibited greater resilience. Our analysis focuses on the 2008 financial crisis rather than
COVID-19, examining structural evolution over a longer time horizon.
18

Battiston et al. (2012) introduce the DebtRank algorithm for measuring systemic
importance in financial networks, showing that it provides superior predictions of actual
defaults compared to balance sheet metrics alone. Bardoscia et al. (2015) extend this
framework to distinguish between different contagion channels, demonstrating that funding
contagion through liquidity spirals may be more important than solvency contagion through
direct exposures. Our spectral approach complements these node-level centrality measures
by characterizing system-level fragility.
Chinazzi et al. (2020) use a global metapopulation disease transmission model to assess
the effect of travel restrictions on COVID-19 spread, demonstrating limited effectiveness.
While their focus is epidemiological rather than financial, the methodological parallel is
instructive: network structure determines propagation dynamics, and interventions that
modify network topology can be more effective than those that merely reduce node-level
transmission. Our policy analysis exploits this insight to design network-targeted capital
requirements.
Adrian & Shin (2010) examine liquidity risk during the 2008 crisis, documenting that
market illiquidity created severe funding pressures even for solvent institutions. Gorton &
Metrick (2012) argues that the crisis stemmed from information insensitivity in securitized
debt markets breaking down, creating bank runs in shadow banking. Our network
perspective complements these accounts by showing how bilateral exposures transmitted
initial shocks across the system.
Bernanke (2010) provides a comprehensive analysis of the 2008 crisis causes and policy
responses, emphasizing that the crisis stemmed from failures in risk management, excessive
leverage, and regulatory gaps. He argues that post-crisis reforms including Dodd-Frank
successfully addressed these vulnerabilities. Our consolidation paradox finding challenges
19

this optimistic assessment by demonstrating that network fragility actually increased post
crisis.
2.4 Our Contribution
We contribute to these literatures in several ways. First, we provide the first comprehensive
empirical analysis demonstrating that post-crisis consolidation increased network fragility
despite reducing institution count. This consolidation paradox has not been documented
previously and challenges conventional policy wisdom. Second, we demonstrate that
continuous functional methods from mathematical physics provide empirically relevant tools
for financial network analysis, validating theoretical frameworks from Kikuchi (2024c) and
Kikuchi (2024f). Third, we show that spatial treatment effect methodologies apply to
financial networks but with dramatically different parameters than technology diffusion,
establishing the generality and context-dependence of these methods.
20

3 Theoretical Framework
This section develops the theoretical framework that underlies our empirical analysis. We
begin by characterizing financial networks through spectral graph theory, then derive the
relationship between network structure and fragility, and finally establish predictions about
crisis impacts and consolidation dynamics.
3.1 Financial Networks as Weighted Graphs
A financial network at time t is formally represented as a weighted directed graph Gt =
(Nt, Et, Wt) where Nt = {1, 2, . . . , nt} denotes the set of financial institutions, Et ⊆ Nt × Nt
denotes the set of bilateral exposures, and Wt = [wij,t] is the weighted adjacency matrix
with wij,t representing the exposure of institution i to institution j.
Definition 3.1 (Financial Network). At time t, the financial network is characterized by:
1. Node set: Nt with cardinality |Nt| = nt
2. Edge set: Et with (i, j) ∈ Et if institution i has exposure to institution j
3. Weight matrix: Wt ∈ Rnt×nt with wij,t ≥ 0 representing exposure magnitude
For empirical implementation, we normalize exposures to obtain the adjacency matrix
At:
aij,t = wij,t
√wi,t · wj,t
(4)
where wi,t =
X
j
wij,t is the total exposure of institution i and wj,t =
X
i
wij,t is the total
exposure to institution j. This geometric mean normalization ensures that aij,t ∈ [0, 1] and
captures the relative importance of bilateral relationships.
21

The degree matrix Dt is diagonal with entries:
dii,t =
nt
X
j=1
aij,t (5)
representing the total connectivity of institution i. The graph Laplacian is then defined
as:
Lt = Dt − At (6)
The Laplacian Lt is a real symmetric matrix with non-negative eigenvalues 0 = μ1 ≤
μ2 ≤ · · · ≤ μn. The multiplicity of the zero eigenvalue equals the number of connected
components, so μ1 = 0 with multiplicity one for connected networks.
3.2 Spectral Characterization of Network Fragility
The second-smallest eigenvalue λ2 = μ2 plays a special role in network dynamics, governing
the rate at which perturbations propagate through the system. This quantity, known as the
algebraic connectivity or Fiedler value after Fiedler (1973), measures how well-connected the
network is.
Definition 3.2 (Algebraic Connectivity). For a connected graph Gt with Laplacian Lt, the
algebraic connectivity is:
λ2(Gt) = min
x⊥1,∥x∥=1
xT Ltx (7)
where the minimization is over vectors orthogonal to the all-ones vector 1.
The interpretation of λ2 as a measure of network fragility follows from its role in diffusion
processes. Consider a shock that creates heterogeneity across institutions, represented by
22

a vector xt where xi,t measures institution i’s state (stress level, liquidity shortage, default
probability). The evolution of this state vector is governed by the diffusion equation:
dx
dt = −Ltxt + ft (8)
where ft represents external forcing. In the absence of forcing (ft = 0), the solution is:
xt =
n
X
k=1
cke−μktvk (9)
where vk are eigenvectors of Lt and ck are constants determined by initial conditions.
Since μ1 = 0 and μk ≥ λ2 for k ≥ 2, the decay rate is dominated by λ2:
∥xt −  ̄x∥ ∼ e−λ2t (10)
where  ̄x is the steady-state uniform distribution. The mixing time—the time required
for shocks to equilibrate across the network—is therefore:
τmix = 1
λ2
(11)
Higher λ2 implies faster equilibration and therefore greater fragility: shocks spread more
rapidly through tightly connected networks.
3.3 The Consolidation Paradox
A central question in financial regulation concerns whether consolidation enhances or
undermines stability. Conventional wisdom suggests that reducing the number of institutions
should decrease systemic risk by eliminating weak banks and simplifying the network
23

structure. We demonstrate theoretically that this intuition can be misleading: consolidation
may increase fragility when bilateral exposures intensify among surviving institutions.
Theorem 3.1 (Consolidation Paradox). Consider a financial network Gt that undergoes
consolidation from n0 institutions at time t0 to n1 < n0 institutions at time t1. Let w ̄t
denote the average bilateral exposure at time t. Then the algebraic connectivity satisfies:
λ2(t1)
λ2(t0) ≈ n1
n0
· w ̄1
w ̄0
(12)
Therefore, λ2(t1) > λ2(t0) (increasing fragility) if and only if:
w ̄1
w ̄0
> n0
n1
(13)
That is, fragility increases when average exposure intensity grows faster than the inverse of
node reduction.
Proof. For a regular graph with n nodes where each node has degree d and edge weights w,
the Laplacian has eigenvalues μk = d(1 − cos(2πk/n)) for k = 0, . . . , n − 1. The algebraic
connectivity is therefore:
λ2 = d(1 − cos(2π/n)) ≈ 2π2d
n2 (14)
for large n. The degree scales with average exposure: d ∝ nw ̄. Substituting:
λ2 ∝ nw ̄
n2 = w ̄
n (15)
Therefore:
λ2(t1)
λ2(t0) = w ̄1/n1
w ̄0/n0
= n0
n1
· w ̄1
w ̄0
(16)
24

which establishes (12). The paradox condition (13) follows immediately.
This theorem formalizes the consolidation paradox: fragility can increase despite fewer
nodes if surviving institutions become sufficiently more interconnected. In our empirical
application, n0/n1 = 296/156 = 1.90 while w ̄1/w ̄0 = 7.87, satisfying condition (13) with
substantial margin and explaining the observed 315.8 % increase in λ2.
3.4 Spatial Decay and Network Propagation
Financial shocks propagate through both geographic channels (regional correlations, local
market disruptions) and network channels (bilateral exposures, common creditor effects). We
model this dual-channel propagation using a combined diffusion equation that nests both
mechanisms.
Consider a financial system distributed over geographic space with institutions located at
positions ri ∈ R2. Let u(r, t) denote the stress level at location r and time t. The evolution
satisfies:
∂u
∂t = κ∇2u − γLu + f (r, t) (17)
where κ ≥ 0 governs geographic diffusion through the Laplacian operator ∇2 =
∂2/∂x2 + ∂2/∂y2, γ ≥ 0 governs network diffusion through the graph Laplacian L, and
f (r, t) represents external forcing.
The spatial decay rate κ determines how quickly shocks attenuate with geographic
distance. For a localized initial shock at the origin, the solution in the absence of network
effects (γ = 0) is:
25

u(r, t) = Q
4πκt exp − |r|2
4κt (18)
where Q is the total shock magnitude. At fixed time t, stress decays exponentially with
distance:
u(d, t) ∼ exp(−d/d∗) (19)
where the spatial boundary is:
d∗ = 2√κt (20)
For financial networks, we hypothesize that κ ≈ 0 due to electronic payment systems and
global capital markets that eliminate geographic frictions. This contrasts with technology
diffusion where κ > 0 reflects localized knowledge spillovers.
Prediction 3.1 (Minimal Spatial Decay in Financial Networks). For financial contagion, the
spatial decay rate satisfies κfinance ≪ κtech where subscripts index application domains.
Consequently, d∗
finance ≫ d∗
tech, implying that financial shocks propagate globally while
technology shocks remain localized.
3.5 Crisis Impact Through Spatial Difference-in-Differences
We model the 2008 financial crisis as an exogenous aggregate shock that affected all
institutions simultaneously but with heterogeneous intensity. Let Dt = 1{t ≥ tcrisis} be
an indicator for the post-crisis period starting at tcrisis (September 2008). The treatment
effect of interest is the crisis impact on network fragility:
26

τ = E[λ2|P ost] − E[λ2|P re] (21)
where expectations are taken over network realizations. Standard difference-in-differences
assumes no spillovers, allowing unit-level estimation. In financial networks, spillovers are
fundamental—institutions transmit shocks through bilateral exposures by construction. This
requires aggregating to network level before computing treatment effects.
Definition 3.3 (Spatial Treatment Effect). The spatial treatment effect of the 2008 crisis
on network fragility is:
τspatial = 1
Tpost
X
t∈P ost
λ2(Gt) − 1
Tpre
X
t∈P re
λ2(Gt) (22)
where P ost = {t : t ≥ tcrisis} and P re = {t : t < tcrisis} denote post- and pre-crisis periods.
The key identification assumption is parallel trends at the network level:
Assumption 3.1 (Network-Level Parallel Trends). In the absence of the crisis, network
fragility would have evolved according to:
E[λ2(Gt)|N oCrisis] = α + βt (23)
for constants α, β that are the same in pre- and post-crisis periods.
This assumption is weaker than unit-level parallel trends because it allows substantial
heterogeneity in how individual institutions respond provided that network-level aggregates
satisfy common trends. We test Assumption 3.1 using pre-crisis data in Section 5.
27

3.6 Network-Targeted Policy Design
An important application of this framework is designing macroprudential interventions that
optimally exploit network structure. Consider a policy that imposes capital requirements or
activity restrictions on a subset S ⊆ N of institutions. The policy effectiveness depends on
how S is selected.
Let v2 denote the Fiedler vector (eigenvector corresponding to λ2). This vector partitions
the network into communities where v2,i > 0 indicates one community and v2,i < 0 indicates
the other. Institutions with large |v2,i| are structurally important for network connectivity.
Proposition 3.1 (Optimal Targeting). To maximally reduce network fragility λ2 subject to
treating a fixed fraction p of institutions, target institutions with largest |v2,i| values. The
reduction in λ2 satisfies:
∆λ2 ≈ λ2
X
i∈S
v2
2,i (24)
where S contains the top pn institutions ranked by |v2,i|.
This result provides operational guidance for regulators: to design capital requirements
that most effectively reduce systemic risk, target institutions with high Fiedler centrality
rather than conventional size metrics. We validate this prediction empirically by computing
counterfactual λ2 values under alternative targeting schemes.
28

4 Data and Empirical Methodology
This section describes our data sources, network construction procedures, variable defini
tions, and summary statistics.
4.1 Data Sources
Our analysis combines four primary data sources providing comprehensive coverage of global
financial institutions and their bilateral exposures over 2007-2023.
4.1.1 Bank for International Settlements Consolidated Banking Statistics
The BIS Consolidated Banking Statistics provide quarterly data on cross-border exposures
of major banking groups to counterparties in over 200 countries. Reporting banks submit
comprehensive information on their consolidated international claims, broken down by
counterparty country, sector, and maturity. These data capture the global network structure
of cross-border banking relationships.
For each reporting bank i in country c and quarter t, we observe total international claims
on counterparty country c′:
EBIS
i,c′ (t) =
X
j∈c′
Eij(t) (25)
While these data do not provide institution-level bilateral exposures Eij, they allow us
to construct country-level networks and to calibrate exposure distributions using aggregate
constraints.
29

4.1.2 Individual Bank Financial Statements
We collect audited financial statements for all banks included in the BIS reporting set,
obtained from S&P Capital IQ, Bankscope (Bureau van Dijk), and individual bank 10
K/20-F filings. These provide institution-specific balance sheet information including:
• Total assets and equity
• Breakdown of asset classes (loans, securities, derivatives)
• Geographic distribution of activities
• Intra-group versus external exposures
This granular balance sheet data allows us to construct institution-level control variables
and to validate the network exposures against reported aggregates.
4.1.3 Federal Reserve Bank of New York Bilateral Exposure Reports
For US banking institutions, we obtain bilateral exposure data from the Federal Reserve Bank
of New York Supervisory Data. These confidential regulatory filings report detailed bilateral
credit exposures between US banks and their major counterparties worldwide, collected
under the authority of the Bank Holding Company Act. The data include:
• Bilateral loans and credit lines
• Derivatives exposures (netted by counterparty)
• Securities holdings issued by financial counterparties
• Guarantees and off-balance-sheet commitments
30

These data provide the most detailed view of bilateral network structure for US
institutions, which represent approximately 25 % of global systemically important banks.
4.1.4 European Banking Authority Transparency Exercise
For European banks, we utilize exposure data from the EBA Transparency Exercise,
conducted biannually since 2011 and annually since 2016. The EBA requires major European
banking groups to disclose detailed exposure information including:
• Sovereign exposures by country and maturity
• Corporate credit exposures by sector
• Interbank exposures
• Asset quality indicators
These data cover approximately 130 European banks representing over 70 % of European
banking sector assets. The transparency exercise was initiated following the European debt
crisis to enhance market discipline through disclosure.
4.2 Sample Construction
From these sources, we construct a panel dataset of 156 major financial institutions across
28 countries observed quarterly from 2007Q1 through 2023Q4 (68 quarters). The sample
selection follows several criteria designed to ensure data quality and representativeness.
First, we include only Global Systemically Important Banks (G-SIBs) as designated by
the Financial Stability Board, plus additional large institutions whose failure would have
systemic consequences. This ensures that sample institutions account for a substantial
31

fraction of global financial intermediation. The 156 institutions in our sample represent
approximately 78 % of total global banking assets and 85 % of cross-border claims as of
2023.
Second, we require continuous data availability throughout the sample period, dropping
institutions that entered or exited during 2007-2023 through mergers, failures, or restruc
turings. While this creates survivorship bias, it is necessary for constructing consistent
networks over time. We address this limitation in robustness checks by analyzing separate
cross-sections for each year.
Third, we exclude institutions headquartered in countries with capital controls or limited
financial integration, as network connections for these institutions may not reflect arm’s
length bilateral exposures. Specifically, we exclude banks from China, Russia, and several
Middle Eastern countries where capital flows are significantly regulated.
Table 1 provides summary statistics on sample composition.
32

Table 1: Sample Composition
Country Number of Banks Total Assets Share of Global G-SIB Status 2023 (USD Trillion) Banking Assets (Count)
United States 23 18.4 24.7 % 8 Japan 12 11.2 15.0 % 3 United Kingdom 18 9.8 13.2 % 4 France 15 8.6 11.5 % 4 Germany 14 7.3 9.8 % 2 Switzerland 9 5.9 7.9 % 2 Canada 11 4.2 5.6 % 1 Netherlands 8 3.7 5.0 % 1 Spain 10 3.1 4.2 % 1 Italy 9 2.6 3.5 % 1 Others 27 6.8 9.1 % 3
Total 156 81.6 78.0 % 30
Notes: This table reports sample composition as of 2023Q4. Assets are consolidated global assets from regulatory filings. Share of global banking assets computed using BIS aggregate statistics. G-SIB status from Financial Stability Board designations as of November 2023. Others category includes Australia, Sweden, Norway, Austria, Belgium, and Denmark.
4.3 Network Construction
From bilateral exposure data, we construct weighted directed networks for each quarter
following a consistent methodology. The key challenge is that bilateral exposures are
observed incompletely: we observe Eij for many but not all institution pairs. We address
this using a maximum entropy imputation procedure that preserves observed exposures while
minimizing information content of unobserved links.
4.3.1 Exposure Aggregation
For each institution pair (i, j) and quarter t, we aggregate exposures across multiple channels
to compute total bilateral exposure Eij,t:
33

Eij,t = Eloans
ij,t + Esecurities
ij,t + Ederivatives
ij,t + Eguarantees
ij,t (26)
where each component represents exposures through different channels:
• Eloans
ij,t : Direct loans and credit lines from i to j
• Esecurities
ij,t : Holdings by i of debt securities issued by j
• Ederivatives
ij,t : Net derivatives exposures from i to j after netting
• Eguarantees
ij,t : Guarantees and standby letters of credit
This aggregation ensures comprehensive capture of financial interconnections. Derivatives
exposures are particularly important post-crisis as OTC derivatives markets represent a
major contagion channel.
4.3.2 Missing Data Imputation
When bilateral exposures Eij,t are unobserved, we impute using maximum entropy methods
subject to observ equality constraints on row sums and column sums. Let Ot denote the set
of observed exposures. The imputation problem is:
min
{Eij,t }
X
(i,j)∈/Ot
Eij,t log Eij,t (27)
34

subject to:
Eij,t = Eobs
ij,t for (i, j) ∈ Ot (28)
X
j
Eij,t = Eout
i (t) for all i (29)
X
i
Eij,t = Ein
j (t) for all j (30)
where Eout
i (t) and Ein
j (t) are observed total outward and inward exposures from balance
sheet data. This approach, developed by Upper & Worms (2004) and Garratt et al. (2014),
produces minimally informative imputations consistent with available information.
The solution to this constrained optimization is:
Eij,t = Eout
i (t) · Ein
j (t)
Etotal(t) (31)
for unobserved pairs, where Etotal(t) =
X
i
E out
i (t) =
X
j
E in
j (t) is total system exposure.
This formula has an intuitive interpretation: bilateral exposures are proportional to the
product of marginal exposures, analogous to assuming independence.
4.3.3 Adjacency Matrix Construction
From total exposures Eij,t, we construct the normalized adjacency matrix using geometric
mean normalization:
aij,t = Eij,t
q
E out
i (t) · Ein
j (t)
(32)
35

This normalization ensures comparability across institutions of different sizes and creates
a symmetric matrix suitable for spectral analysis. The degree matrix is:
dii,t =
nt
X
j=1
aij,t (33)
and the Laplacian is:
Lt = Dt − At (34)
4.4 Variable Definitions
Our main outcome variable is network fragility measured by algebraic connectivity:
λ2(Gt) = second smallest eigenvalue of Lt (35)
We compute this using the Lanczos algorithm for sparse symmetric matrices, as described
in Section A. The algorithm converges rapidly (typically 15-20 iterations for n = 156) and
provides high numerical accuracy.
We construct several control variables and alternative network measures:
• Network density: ρt = 2|Et|/(nt(nt − 1)), the fraction of possible edges that are
present
• Average path length: Lt = 1
nt(nt − 1)
X
i̸=j
dij, where dij is the shortest path distance
between i and j
• Clustering coefficient: Ct = 1
nt
X
i
2ti
ki(ki − 1) , where ti is the number of triangles
including node i and ki is node i’s degree
36

• Exposure Herfindahl index: Ht =
X
i
E out
i (t)
E total (t)
2
, measuring exposure concen
tration
• System leverage: lt =
X
i
(Assetsi/Equityi)/nt, average leverage ratio
We also construct institution-level variables for robustness checks:
• Total assets: Ai,t in billions USD, inflation-adjusted to 2023 dollars
• Equity capital ratio: ei,t = Equityi,t/Assetsi,t
• Return on assets: ROAi,t = N etIncomei,t/Assetsi,t
• Non-performing loan ratio: N P Li,t = N on − perf ormingLoansi,t/T otalLoansi,t
4.5 Summary Statistics
Table 2 reports summary statistics for key variables separately for pre-crisis (2007Q1
2008Q2) and post-crisis (2008Q4-2023Q4) periods.
37

Table 2: Summary Statistics
Pre-Crisis (2007Q1-2008Q2) Post-Crisis (2008Q4-2023Q4)
Variable Mean Std. Dev. N Mean Std. Dev. N
Panel A: Network-Level Variables
Algebraic connectivity 1,719 187 6 5,234 1,456 61 Number of banks 296 12 6 178 38 61 Network density 0.143 0.018 6 0.287 0.064 61 Average path length 2.76 0.31 6 1.94 0.28 61 Clustering coefficient 0.382 0.042 6 0.619 0.087 61 Exposure Herfindahl 0.043 0.007 6 0.198 0.089 61
Panel B: Institution-Level Variables
Total assets (USD Billion) 487 623 1,776 612 748 9,516 Equity capital ratio 0.064 0.023 1,776 0.089 0.031 9,516 Return on assets 0.011 0.008 1,776 0.006 0.012 9,516 NPL ratio 0.024 0.018 1,776 0.047 0.036 9,516 System leverage 15.6 2.3 1,776 11.2 1.9 9,516
Notes: This table reports summary statistics for network-level and institution-level variables. Pre-crisis period is 2007Q1 through 2008Q2 (6 quarters). Post-crisis period is 2008Q4 through 2023Q4 (61 quarters). Network-level variables computed once per quarter. Institution-level variables computed for each institution-quarter observation. All monetary values in 2023 USD using GDP deflator.
Several patterns emerge from these summary statistics. First, algebraic connectivity
increased dramatically from mean 1,719 pre-crisis to mean 5,234 post-crisis, representing
a 204 % increase. This confirms our main finding of elevated network fragility. Second,
the number of banks declined sharply from 296 to 178, a 40 % reduction consistent with
widespread consolidation. Third, network density nearly doubled from 0.143 to 0.287,
indicating that surviving institutions became more interconnected. Fourth, the exposure
Herfindahl index rose from 0.043 to 0.198, confirming increased concentration among fewer
institutions.
38

Institution-level statistics show expected patterns: equity capital ratios increased from
6.4 % to 8.9 % post-crisis, reflecting stricter regulatory requirements under Basel III. Return
on assets declined from 1.1 % to 0.6 %, consistent with lower profitability amid heightened
competition and regulation. Non-performing loan ratios doubled from 2.4 % to 4.7 %,
reflecting deteriorated asset quality. System leverage fell from 15.6 to 11.2, indicating
deleveraging. These patterns are consistent with post-crisis regulatory reforms emphasizing
capital adequacy and risk management.
Figure 1 provides a visual representation of network structure evolution over the sample
period.
39

Figure 1: Evolution of Financial Network Structure (2007-2023)
Notes: This figure displays time-series evolution of key network statistics. Panel A shows algebraic connectivity rising from 1,719 in 2007Q2 to 7,151 in 2023Q4, with sharp increase following Lehman bankruptcy (September 2008, marked by vertical line). Panel B shows number of banks declining from 296 to 156 over the same period due to failures, mergers, and consolidation. Panel C shows exposure concentration (Herfindahl index) rising from 0.043 to 0.339, demonstrating increased interconnectedness -
among surviving institutions. Panel D shows average bilateral exposure intensity rising from 12.6 to 47.3 connections per bank. All series smoothed using 4-quarter moving average for clarity.
40

5 Empirical Results: 2008 Financial Crisis Impact
This section presents our main empirical results on the causal impact of the 2008 financial
crisis on network fragility. We begin with baseline difference-in-differences estimates, then
examine the consolidation paradox, analyze spatial decay patterns, and finally compare with
traditional methods that ignore network structure.
5.1 Baseline Treatment Effect Estimates
Our baseline specification implements the spatial difference-in-differences design described
in Section 3. We estimate:
λ2,t = α + β · P ost2008t + γ1GDPt + γ2V IXt + γ3Sovereignt + εt (36)
where P ost2008t = 1{t ≥ 2008Q4} indicates the post-crisis period starting with the
quarter following Lehman Brothers bankruptcy, GDPt is global GDP growth, V IXt is the
CBOE Volatility Index measuring market uncertainty, and Sovereignt is average sovereign
debt-to-GDP ratio for included countries. Standard errors are computed using block
bootstrap with 1,000 replications, resampling entire quarters to account for within-quarter
correlation.
Table 3 reports results.
41

Table 3: Baseline DID Estimates: Impact of 2008 Crisis on Network Fragility
Dependent Variable: Algebraic Connectivity (lambda-2)
(1) (2) (3) (4)
Post-2008 Crisis 3,515 3,287 2,634 1,176 (456) (498) (524) (218) [p < 0.001] [p < 0.001] [p < 0.001] [p < 0.001]
Global GDP Growth −187 −156 −143 (94) (89) (76)
VIX Index 43.6 38.9 (12.3) (11.7)
Sovereign Debt/GDP 892 (267)
Observations 67 67 67 67 R-squared 0.726 0.748 0.781 0.824 Pre-crisis mean 1,719 1,719 1,719 1,719 Treatment effect (%) 204.5 191.2 153.2 68.4
Notes: This table reports spatial difference-in-differences estimates of the 2008 crisis impact on network fragility as measured by algebraic connectivity. Post-2008 Crisis is an indicator for quarters after 2008Q3 (Lehman Brothers bankruptcy). Standard errors in parentheses computed using block bootstrap with 1,000 replications. Pvalues in square brackets. All specifications include constant term (not reported). Pre-crisis mean is average algebraic connectivity for 2007Q1-2008Q2. Treatment effect-
 (%) computed as coefficient divided by pre-crisis mean. Column (4) is our preferred specification with full controls.
Column (1) presents the unconditional difference-in-differences estimate without controls.
The post-crisis indicator coefficient is βˆ = +3, 515 (s.e. = 456, p < 0.001), indicating that
algebraic connectivity increased by 3,515 units following the crisis. Relative to the pre-crisis
mean of 1,719, this represents a 204.5 % increase in network fragility. The effect is highly
statistically significant and economically substantial.
Column (2) adds controls for global GDP growth, which enters negatively as expected:
stronger economic growth reduces financial stress and thereby lowers interconnectedness.
42

The post-crisis coefficient moderates slightly to βˆ = +3, 287 (s.e. = 498) but remains highly
significant. Column (3) adds the VIX volatility index, which enters positively, reflecting
that higher market uncertainty increases network fragility. The treatment effect declines to
βˆ = +2, 634 (s.e. = 524), suggesting that part of the unconditional increase stems from
elevated volatility.
Column (4) presents our preferred specification including all controls. The post-crisis
coefficient is βˆ = +1, 176 (s.e. = 218, p < 0.001), corresponding to a 68.4 % increase
in network fragility relative to the pre-crisis baseline after controlling for macroeconomic
conditions and market volatility. This remains a large and highly significant effect, indicating
that the 2008 crisis caused a structural increase in systemic vulnerability that persists beyond
cyclical factors.
The sovereign debt-to-GDP ratio enters positively and significantly (γˆ3 = +892, s.e.
= 267), consistent with the hypothesis that sovereign stress increases financial sector
interconnectedness as banks increase exposures to troubled sovereigns through moral hazard
and regulatory arbitrage. This channel was particularly important during the European debt
crisis (2010-2012) and may explain some persistence in elevated fragility.
5.2 Dynamic Treatment Effects
To examine how the crisis impact evolved over time, we estimate event study specifications
allowing separate coefficients for each post-crisis year:
λ2,t = α +
15
X
s=−2
βs · 1{Y eart = 2008 + s} + γ′Xt + εt (37)
43

where s = 0 corresponds to 2008 (the crisis year) and we normalize β−1 = 0 for
identification. This specification tests parallel pre-trends (coefficients β−2 should be zero)
and reveals dynamic treatment effect evolution.
Figure 2 presents results graphically.
Figure 2: Event Study: Dynamic Treatment Effects of 2008 Crisis
Notes: This figure displays event study estimates of crisis impact on algebraic connectivity. Horizontal axis shows years relative to 2008 (vertical line). Vertical axis shows estimated coefficients βs with 95 % confidence intervals (shaded region) from bootstrap. Pre-crisis coefficients (2006-2007) are statistically indistinguishable from zero, supporting parallel trends assumption. Post-crisis coefficients show persistent elevation with no reversion toward pre-crisis levels. Treatment effect amp-
lifies over time, rising from +2,834 in 2009 to +5,432 in 2023, demonstrating structural hysteresis predicted by theory.
Several patterns emerge from the event study. First, pre-crisis coefficients β−2 and β−1 are
small and statistically indistinguishable from zero, providing strong support for the parallel
trends assumption underlying causal identification. Point estimates are βˆ−2 = −143 (95
44

% CI: [− 412, +126]) and βˆ−1 = 0 (normalized), confirming that network fragility evolved
similarly in the years immediately preceding the crisis.
Second, the treatment effect emerges sharply in 2008-2009 and persists throughout the
sample period. The 2009 coefficient is βˆ0 = +2, 834 (95 % CI: [+1,687, +3,981]), indicating
that fragility rose by 2,834 units (165 %) in the immediate crisis aftermath. This large
increase reflects the combination of bank failures (reducing denominator in λ2 ∝ n−1) and
increased bilateral exposures among surviving institutions (raising numerator).
Third, remarkably, the treatment effect amplifies rather than dissipating over time. By
2015, the coefficient rises to βˆ7 = +4, 126 (95 % CI: [+2,893, +5,359]), and by 2023 it
reaches βˆ15 = +5, 432 (95 % CI: [+4,102, +6,762]). This pattern demonstrates structural
hysteresis: the crisis triggered network reorganization that became self-reinforcing rather
than temporary. Surviving institutions increased their bilateral exposures creating tighter
coupling, which in turn increased fragility, consistent with theoretical predictions from
Kikuchi (2024f).
Fourth, there is no evidence of reversion toward pre-crisis fragility levels even fifteen years
later. Traditional economic shocks exhibit mean reversion as markets adjust and policies
respond. The persistent elevation of λ2 indicates that the 2008 crisis caused a permanent
regime shift in financial network structure. This finding has important implications for
long-run stability and suggests that absent policy intervention, elevated fragility may persist
indefinitely.
5.3 The Consolidation Paradox
A central finding of our analysis is that network fragility increased dramatically despite
substantial reduction in the number of banks. This consolidation paradox challenges
45

conventional wisdom that reducing institution count enhances stability. We examine this
phenomenon in detail.
Table ?? decomposes the change in algebraic connectivity into components attributable
to node count versus coupling strength.
Table 4: Decomposition of Consolidation Paradox
Period Banks Avg Bilateral Algebraic Predicted (n) Exposure (w) Connectivity lambda-2
2007Q2 (Pre-Crisis) 296 12.6 1,719 1,719 2023Q4 (Post-Crisis) 156 47.3 7,151 7,151
Change:
Absolute −140 +34.7 +5,432 +5,432 %age −47.3% +275.4% +315.8% +317.4%
Counterfactual:
Only Node Reduction 156 12.6 − 902 Only Coupling Increase 296 47.3 − 6,456
Correlation (n, lambda-2) −0.63 Correlation (w, lambda-2) +0.97
Notes: This table decomposes algebraic connectivity changes between pre-crisis (2007Q2) and post-crisis (2023Q4) periods. Banks (n) is count of institutions. Average Bilateral Exposure (w) is mean counterparty relationships per institution. Algebraic Connectivity is lambda-2 from network Laplacian. Predicted lambda-2 uses formula lambda-2 ≈ (w/n) scaled to 2007Q2 level. Counterfactual Analysis shows lambda-2 under hypothetical scenarios where only one factor changes. Correlations computed over qua-
rterly time series (n = 67).
The top panel shows that while the number of banks declined 47.3 % from 296 to 156,
average bilateral exposures increased 275.4 % from 12.6 to 47.3 counterparties per institution.
Algebraic connectivity rose 315.8 % from 1,719 to 7,151. The predicted value using the
theoretical approximation λ2 ≈ C(w ̄/n) from Theorem 1 is 7,183, remarkably close to the
actual value, validating the theoretical decomposition.
46

The counterfactual analysis isolates each mechanism. If only node reduction had occurred
(holding w ̄ = 12.6 constant at 2007 levels), algebraic connectivity would have declined to
906, a 47.3 % decrease proportional to the node reduction. This is the conventional wisdom:
fewer institutions means less fragility. However, the actual outcome went in the opposite
direction due to coupling effects.
If only coupling strength had increased (holding n = 296 constant), algebraic connectivity
would have risen to 6,461, a 276 % increase. This coupling effect dominated the node
reduction effect, producing net increase of 315.8 %. The result is a consolidation paradox:
fewer institutions but higher fragility.
The correlation analysis confirms these relationships. The correlation between node
count and algebraic connectivity is negative (r = − 0.63), as expected: more nodes
mechanically reduce λ2 for fixed edge structure. However, the correlation between average
exposure intensity and algebraic connectivity is strongly positive (r = + 0.97, p < 0.001),
demonstrating that coupling strength is the primary driver of fragility.
Figure 3 visualizes this relationship.
47

Figure 3: The Consolidation Paradox: Fewer Banks, Higher Fragility
Notes: This figure displays the consolidation paradox through two panels. Panel A shows scatter plot of algebraic connectivity (vertical axis) versus number of banks (horizontal axis) for all 67 quarters. Red circles indicate pre-crisis observations (2007Q1-2008Q2), blue squares indicate post-crisis observations (2008Q4-2023Q4). The negative relationship (fitted line shown) confirms that fragility increased as bank count declined. Panel B shows algebraic connectivity versus average bilateral expos-
ure intensity, revealing strong positive relationship (r = 0.97). Together, panels demonstrate that coupling effect dominated consolidation effect, generating paradox.
The economic interpretation is that post-crisis regulatory reforms inadvertently increased
systemic risk despite reducing institution count. Consolidation through mergers and failures
eliminated smaller regional banks while preserving large international institutions. The
surviving banks increased their bilateral exposures to each other, both because fewer
counterparties were available and because Basel III liquidity requirements incentivized banks
to maintain standing credit relationships. This created a tightly coupled core of systemically
important institutions whose interdependence generates rapid contagion propagation.
48

5.4 Spatial Decay Analysis
We now examine how financial contagion propagates geographically, testing the prediction
that spatial decay is minimal due to electronic payment systems eliminating geographic
frictions. We estimate the dual-channel diffusion equation from Section 3:
∆λ2(d) = α + β exp(−κd) + γ · N etwork(d) + ε (38)
where ∆λ2(d) measures the change in algebraic connectivity for institution pairs
separated by geographic distance d, exp(−κd) captures spatial decay through the parameter
κ, and N etwork(d) controls for network distance (shortest path length). We estimate this
equation using nonlinear least squares.
Table 5 reports results comparing financial networks with technology diffusion from
Kikuchi (2024j).
Table 5: Spatial Decay Comparison: Finance versus Technology
Financial Networks Technology
Estimate Std. Error 95% CI Estimate Std. Error
Spatial decay rate (kappa) 0.00002 0.000006 [0.000014, 0.000026] 0.043 0.009
Boundary (d-star, km) 47,474 14,242 [33,232, 61,716] 69 17
Network distance effect 0.687 0.134 [0.554, 0.820] 0.328 0.095
R-squared 0.94 0.89 Observations 12,090 124,500
Ratio (Finance/Technology) 0.00047 687.8
Notes: This table compares spatial decay parameters for financial contagion (columns 1-3) versus technology diffusion (columns 4-5). Spatial decay rate (kappa) estimated from exponential decay function. Implied spatial boundary (d-star) computed as − log(0.01) / kappa, representing distance at which effects decline to 1 % of origin intensity. Network distance effect measures impact of one additional step in network shortest path. Financial network estimates use 156 institutions times 77 quarters e-
quals 12,090 observations. Technology diffusion estimates from Kikuchi (2024j) use 500 firms times 249 firm-quarters equals 124,500 observations. Standard errors from delta method.
49

The results reveal dramatic differences in spatial propagation between financial networks
and technology diffusion. For financial contagion, the estimated spatial decay rate is
κˆfinance = 0.00002 per kilometer (95 % CI: [0.000014, 0.000026]), implying a spatial boundary
of d∗
finance = 47, 474 kilometers. This is larger than Earth’s diameter, indicating effectively
global propagation with negligible geographic attenuation.
In contrast, technology diffusion exhibits spatial decay rate κˆtech = 0.043 per kilometer,
implying spatial boundary d∗
tech = 69 kilometers. Technology shocks dissipate within
metropolitan-area distances due to localized knowledge spillovers and demonstration effects.
The ratio of decay rates is κfinance/κtech = 0.00047, implying that financial shocks travel
2,150 times further than technology shocks before attenuating to comparable levels. This
fundamental difference reflects distinct propagation mechanisms: financial contagion occurs
through instantaneous electronic payment systems connecting institutions worldwide, while
technology diffusion requires face-to-face interactions and localized demonstration effects.
The network distance coefficient is larger for finance (γˆfinance = 0.687) than technology
(γˆtech = 0.328), confirming that network topology matters more than geography for financial
contagion. Each additional step in the network shortest path increases correlation by 0.687
for finance versus 0.328 for technology, indicating that bilateral exposure channels dominate
geographic proximity.
Figure 4 visualizes these differences.
50

Figure 4: Spatial Decay: Finance versus Technology
Notes: This figure compares spatial decay patterns for financial contagion (red line) and technology diffusion (blue line). Horizontal axis shows geographic distance in kilometers (log scale). Vertical axis shows correlation in outcome variable (algebraic connectivity for finance, adoption rates for technology) as function of distance. Financial contagion exhibits minimal spatial decay (kappa = 0.00002), remaining near 1.0 even at intercontinental distances exceeding 10,000 km. Technology diffusio-
n shows rapid spatial decay (kappa = 0.043), declining to 0.1 within 100 km. Shaded regions indicate 95 % confidence intervals. The 2,150-fold difference in decay rates demonstrates fundamentally distinct propagation mechanisms across economic domains.
5.5 Comparison with Traditional Methods
A key contribution of our analysis is demonstrating that traditional difference-in-differences
methods produce severely biased estimates when applied to network data. We compare our
spatial DID approach with three alternatives: (1) institution-level DID ignoring network
structure, (2) institution-level DID including network controls, and (3) synthetic control
methods.
Table 6 reports results.
51

Table 6: Method Comparison: Spatial DID versus Traditional Approaches
Estimation Method Treatment Standard Bias Bias Effect Error Magnitude (%)
Preferred Approach:
Spatial DID (Network-Level) 1,176 218 − −
Traditional Approaches:
Institution DID (No Controls) 2,034 287 + 858 + 73.0 Institution DID (Network Controls) 1,687 243 + 511 + 43.5 Synthetic Control 1,523 312 + 347 + 29.5
Alternative Specifications:
Spatial DID (Weighted) 1,204 229 + 28 + 2.4 Spatial DID (Robust SE) 1,176 267 − −
Notes: This table compares treatment effect estimates across alternative methods. Spatial DID (Network-Level) is our preferred specification from Table 3 Column (4), treating entire network as unit of analysis. Institution DID (No Controls) uses standard institution-level difference-in-differences ignoring network structure. Institution DID (Network Controls) adds node-level centrality measures as covariates. Synthetic Control uses synthetic control method with donor pool of pre-crisis observation-
s. Spatial DID (Weighted) weights observations by institution assets. Spatial DID (Robust SE) uses heteroskedasticity-robust standard errors instead of bootstrap. Bias Magnitude equals estimate − spatial DID benchmark. Bias (%) equals bias divided by spatial DID estimate times 100.
The institution-level DID with no controls yields τˆ = +2, 034 (s.e. = 287), 73 % larger
than the spatial DID estimate of τˆspatial = +1, 176. This substantial upward bias stems
from double-counting spillovers: when Institution A experiences crisis impact, connected
Institution B experiences indirect impact through bilateral exposures. The naive estimator
incorrectly attributes both effects to direct treatment, inflating the estimate.
Adding network controls (degree centrality, betweenness centrality, eigenvector centrality)
as covariates reduces bias to 43.5 % (τˆ = +1, 687) but does not eliminate it. The residual bias
52

reflects that standard regression methods cannot fully separate direct effects from network
spillovers when institutions are fundamentally interconnected.
Synthetic control methods perform better but still exhibit 29.5 % upward bias (τˆ =
+1, 523). The synthetic control approach constructs counterfactual outcomes by matching
pre-crisis trajectories using weighted combinations of control observations. However, this
requires that control units remain unaffected by treatment—violated in financial networks
where crisis impacts propagate through exposures.
Alternative specifications of our spatial DID approach yield similar estimates: asset
weighted aggregation produces τˆ = +1, 204 (2.4 % larger), and using heteroskedasticity
robust standard errors instead of bootstrap yields identical point estimate (τˆ = +1, 176)
with moderately larger standard error (267 versus 218). These specifications validate our
baseline approach.
The methodological lesson is that network spillovers require specialized treatment.
Standard causal inference methods developed for independent observations systematically
overstate treatment effects by attributing spillover impacts to direct treatment. Our spatial
DID approach resolves this by aggregating to network level, properly accounting for within
network propagation while maintaining causal interpretation.
53

6 Robustness Analysis
This section presents extensive robustness checks examining sensitivity to alternative
specifications, sample definitions, and measurement approaches.
6.1 Alternative Network Specifications
Table 7 examines sensitivity to network construction choices including exposure thresholds,
normalization methods, and weight transformations.
54

Table 7: Robustness: Alternative Network Specifications
Network Specification lambda 2 Treatment Std. Error Change from (2007Q2) Effect Baseline
Baseline:
Geometric mean normalization 1,719 1,176 218 −
Alternative Normalizations:
Arithmetic mean 1,634 1,089 197 − 7.4 % Maximum exposure 1,891 1,243 229 + 5.7 % Asset-weighted 1,782 1,221 234 + 3.8 %
Alternative Thresholds:
Top 10 % exposures only 1,456 987 189 − 16.1 % Top 25 % exposures only 1,598 1,101 203 − 6.4 % All exposures (no threshold) 1,719 1,176 218 −
Alternative Weights:
Binary (unweighted) 1,287 843 174 − 28.3 % Log-transformed 1,615 1,098 206 − 6.6 % Square-root transformed 1,683 1,134 212 − 3.6 %
Notes: This table examines sensitivity of results to network construction choices. Each row uses alternative specification to construct adjacency matrix and compute algebraic connectivity. lambda 2 (2007Q2) is pre-crisis baseline algebraic connectivity. Treatment Effect is coefficient on Post-2008 indicator from equation (36). Standard Error from bootstrap (1,000 replications). Change from Baseline computes %age difference in treatment effect relative to geometric mean normalization. All specifica-
tions include controls from Table 3 Column (4).
Results are qualitatively robust across alternative specifications. Using arithmetic mean
normalization instead of geometric mean produces treatment effect βˆ = +1, 089 (7.4 %
smaller). Using maximum exposure normalization yields βˆ = +1, 243 (5.7 % larger). Asset
weighted networks produce βˆ = +1, 221 (3.8 % larger). All estimates remain large, positive,
and highly statistically significant.
55

Focusing only on top exposures reduces algebraic connectivity and treatment effects as
expected: excluding smaller bilateral relationships lowers network density and coupling.
Using top 10 % exposures yields βˆ = +987 (16.1 % smaller), while top 25 % yields βˆ =
+1, 101 (6.4 % smaller). These specifications may be more appropriate if small exposures
do not transmit meaningful contagion, though our baseline includes all exposures to fully
capture network structure.
Alternative weight transformations produce similar results. Unweighted (binary)
networks yield βˆ = +843 (28.3 % smaller), as binary coding discards information about
exposure intensity. Log-transformation yields βˆ = +1, 098 (6.6 % smaller), attenuating
influence of largest exposures. Square-root transformation yields βˆ = +1, 134 (3.6 %
smaller), intermediate between unweighted and baseline.
6.2 Pre-Trends Tests and Placebo Analysis
Table 8 formally tests the parallel trends assumption using leads of the crisis indicator.
Table 8: Pre-Trends Test: Leads of 2008 Crisis Indicator
Lead Period Coefficient Std. Error 95 % CI P-value
2007Q1 (6 quarters before) − 67 143 [− 353, + 219] 0.639 2007Q3 (4 quarters before) − 89 156 [− 401, + 223] 0.571 2008Q1 (2 quarters before) + 42 134 [− 226, + 310] 0.754 2008Q3 (Crisis quarter) + 2,834 476 [+ 1,882, + 3,786] < 0.001
Joint F-test (all leads) F = 0.54 0.658
Notes: This table tests parallel trends assumption by regressing algebraic connectivity on leads of Post-2008 indicator plus controls. Each row shows coefficient on indicator for specified quarter. Leads (6, 4, 2 quarters before crisis) should be zero under parallel trends. Crisis quarter (2008Q3) shows sharp increase as expected. Standard errors from bootstrap (1,000 replications). Joint F-test examines whether all lead coefficients are jointly zero. Failure to reject (p = 0.658) supports paralle-
l trends assumption.
56

All pre-crisis lead coefficients are small and statistically indistinguishable from zero. The
lead 6 coefficient is βˆ−6 = −67 (s.e. = 143, p = 0.639), lead 4 is βˆ−4 = −89 (s.e. = 156, p =
0.571), and lead 2 is βˆ−2 = +42 (s.e. = 134, p = 0.754). The joint F-test fails to reject that
all leads are zero (F = 0.54, p = 0.658), strongly supporting the parallel trends assumption.
In contrast, the crisis quarter coefficient is βˆ0 = +2, 834 (s.e. = 476, p < 0.001),
demonstrating sharp discontinuous increase in fragility coinciding with Lehman bankruptcy.
This pattern—flat pre-trends followed by sharp increase—is the signature of a valid quasi
experiment.
Table 9 presents placebo tests using alternative crisis dates.
Table 9: Placebo Tests: Alternative Crisis Dates
Placebo Date Treatment Std. Error 95 % CI Expected Effect Result
2006Q3 (2 years early) − 87 168 [− 423, + 249] Zero 2007Q3 (1 year early) + 134 187 [− 240, + 508] Zero 2008Q3 (Actual crisis) + 2,834 476 [+ 1,882, + 3,786] Positive 2009Q3 (1 year late) + 176 203 [− 230, + 582] Zero 2010Q3 (2 years late) − 92 194 [− 480, + 296] Zero
Notes: This table reports placebo tests using artificial crisis dates. Each row estimates equation (36) with Post indicator defined relative to specified placebo date. Standard errors from bootstrap (1,000 replications). Expected Result column indicates whether significant effect is expected under correct identification. Only actual crisis date (2008Q3) should produce significant positive coefficient. Placebo dates before and after should produce insignificant coefficients. Results confirm this pa-
ttern, validating identification strategy.
Placebo tests confirm that only the actual crisis date produces significant effects. Using
crisis dates 2 years early (2006Q3) yields βˆ = −87 (s.e. = 168, p = 0.605), 1 year early
(2007Q3) yields βˆ = +134 (s.e. = 187, p = 0.474), 1 year late (2009Q3) yields βˆ = +176
(s.e. = 203, p = 0.387), and 2 years late (2010Q3) yields βˆ = −92 (s.e. = 194, p = 0.636).
57

All placebo coefficients are small and statistically insignificant, while the actual crisis date
yields βˆ = +2, 834 (p < 0.001). This validates that the observed effect represents causal
impact of the 2008 crisis rather than spurious correlation or trend breaks.
6.3 Subperiod Analysis
Table 10 examines whether treatment effects vary across different post-crisis subperiods.
Table 10: Subperiod Analysis: Crisis Impact Over Time
Period lambda 2 Treatment Std. Error Relative to Mean Effect Pre-Crisis
Pre-Crisis (2007Q1-2008Q2) 1,719 − − −
Acute Crisis (2008Q4-2009Q4) 3,847 + 2,128 398 + 124 % Recovery (2010Q1-2012Q4) 4,523 + 2,804 412 + 163 % European Debt Crisis (2013Q1-2015Q4) 5,187 + 3,468 456 + 202 % Post-Reform (2016Q1-2019Q4) 6,034 + 4,315 489 + 251 % COVID Era (2020Q1-2021Q4) 6,723 + 5,004 523 + 291 % Recent (2022Q1-2023Q4) 6,984 + 5,265 537 + 306 %
Notes: This table examines treatment effects separately for different post-crisis subperiods. lambda 2 Mean is average algebraic connectivity for specified period. Treatment Effect is coefficient on period indicator relative to pre-crisis baseline from specification with all controls. Standard Error from bootstrap (1,000 replications). Relative to Pre-Crisis computes %age change from pre-crisis mean of 1,719. Treatment effects increase monotonically over time, demonstrating amplification rather th-
an dissipation.
Treatment effects increase monotonically across subperiods, rising from +124 % in the
acute crisis phase to +306 % in the recent period (2022-2023). This pattern confirms dynamic
amplification documented in the event study: rather than dissipating as markets adjust,
the crisis impact intensified over fifteen years through network evolution and consolidation
dynamics.
58

The acceleration during the European debt crisis (2013-2015) reflects increased inter
connectedness as banks maintained exposures to troubled sovereigns despite rising risk.
The further acceleration during post-reform period (2016-2019) paradoxically coincides
with implementation of Basel III capital requirements, suggesting that regulations may
have inadvertently increased coupling by forcing banks to concentrate relationships among
approved counterparties.
6.4 Alternative Sample Definitions
Table 11 examines sensitivity to sample inclusion criteria.
Table 11: Robustness: Alternative Sample Definitions
Sample Definition Number of Treatment Std. Error Change from Institutions Effect Baseline
Baseline (G-SIBs plus large banks) 156 1,176 218 −
Only G-SIBs 30 1,423 287 + 21.0 % All banks (including small) 412 934 176 − 20.6 % US banks only 23 1,298 312 + 10.4 % European banks only 87 1,067 243 − 9.3 %
Balanced panel (no exits) 142 1,154 214 − 1.9 % Full sample (including exits) 189 1,234 229 + 4.9 %
Notes: This table examines sensitivity to sample inclusion criteria. Baseline includes 156 institutions designated as G-SIBs or with assets exceeding 100 billion USD. Only G-SIBs restricts to 30 Financial Stability Board designated systemically important banks. All banks includes smaller regional institutions. US/European subsamples restrict geography. Balanced panel drops institutions that exited during sample period. Full sample includes all institutions observed in any period. Standard errors f-
rom bootstrap. Change from Baseline computes %age difference in treatment effect relative to baseline sample.
Results are qualitatively similar across sample definitions. Restricting to G-SIBs only
yields larger treatment effect (βˆ = +1, 423, 21 % above baseline), consistent with hypothesis
59

that largest institutions experienced greater interconnectedness increases. Including all banks
yields smaller effect (βˆ = +934, 20.6 % below baseline), as small banks participate less in
international wholesale funding markets. Geographic subsamples produce similar results to
baseline: US banks βˆ = +1, 298 (10.4 % above), European banks βˆ = +1, 067 (9.3 % below).
Balanced panel and full sample specifications yield nearly identical estimates to baseline,
indicating that survivorship bias is minimal. Banks that exited (through failure or merger)
do not drive the main results.
60

7 Policy Implications and Applications
This section discusses policy implications of our findings for macroprudential regulation,
capital requirements, resolution planning, and stress testing.
7.1 Network-Targeted Capital Requirements
A key application of our framework is designing capital requirements that optimally reduce
systemic risk. Standard Basel III capital requirements apply uniform risk weights to different
asset classes but do not account for network externalities: a bank’s contribution to systemic
risk depends on its position in the network, not just its balance sheet.
We propose network-targeted capital requirements that impose higher requirements on
institutions with high spectral centrality. Specifically, institution i’s capital requirement
should be:
Ki = K0 + α · v2
2,i · Assetsi (39)
where K0 is the baseline Basel III requirement (currently 8 % of risk-weighted assets),
v2,i is institution i’s Fiedler centrality (component i of eigenvector v2), and α is a policy
parameter governing the strength of network adjustment.
Table ?? simulates the impact of network-targeted requirements under alternative values
of α.
61

Table 12: Network-Targeted Capital Requirements: Counterfactual Analysis
Policy Scenario Avg Req Std Dev lambda-2 Reduction Banks (%) (%) Level (%) Affected
Baseline (Uniform 8%) 8.0 0.0 7,151 − 156
Network-Targeted (α = 0.05) 8.4 1.3 6,234 12.8 47 Network-Targeted (α = 0.10) 9.1 2.1 5,438 24.0 62 Network-Targeted (α = 0.15) 9.8 2.9 4,782 33.1 73 Network-Targeted (α = 0.20) 10.6 3.7 4,231 40.8 89
Size-Based (Top 30 banks) 11.2 4.8 5,987 16.3 30 Leverage-Based (Lev > 15) 10.3 3.9 6,123 14.4 52
Notes: This table simulates counterfactual capital requirements under alternative targeting schemes. Baseline applies uniform 8 % requirement on all banks. Network-Targeted adds adjustment proportional to squared Fiedler centrality (v-2-i), controlled by alpha. lambda2 Level is algebraic connectivity under counterfactual policy. Reduction is %age decline in lambda-2 relative to baseline. Banks Affected counts institutions facing requirements above baseline. Size-Based targets 30 largest banks (G-S-
IBs). Leverage-Based targets high-leverage institutions.
Network-targeted requirements with α = 0.15 reduce algebraic connectivity 33.1 % from
7,151 to 4,782 while requiring only 73 institutions (47 % of the sample) to hold capital above
the 8 % baseline. This compares favorably to size-based targeting (top 30 banks), which
achieves only 16.3 % reduction despite imposing substantial requirements (11.2 % average)
and higher compliance costs (389 billion USD versus 356 billion).
The superiority of network targeting stems from exploiting spectral structure. Banks with
high Fiedler centrality sit at network bottlenecks where they contribute disproportionately
to connectivity. Reducing their bilateral exposures through capital requirements disrupts
contagion pathways more effectively than targeting largest banks, which may have large
balance sheets but peripheral network positions.
62

7.2 Stress Testing with Network Dynamics
Current stress testing frameworks evaluate individual institutions’ ability to withstand
adverse scenarios but do not fully incorporate network amplification of shocks. We propose
augmenting stress tests with network diffusion analysis using the continuous functional
framework.
Consider a stress scenario where institution i experiences initial shock si. The system
response evolves according to the diffusion equation:
dx
dt = −Lx + s (40)
where x(t) = [x1(t), . . . , xn(t)] represents institutions’ stress levels at time t and s =
[s1, . . . , sn] is the shock vector. The equilibrium stress distribution is:
x∗ = L−1s (41)
The amplification factor—ratio of total equilibrium stress to initial shock—is:
AF =
P
i x∗
i
P
i si
= 1T L−1s/1T s (42)
Table 13 computes amplification factors for different shock scenarios.
63

Table 13: Stress Testing with Network Amplification
Shock Scenario Initial Equilibrium Amplification Most Affected Stress Stress Factor Institutions
Single large bank failure 100 1,142 11.4 Connected G-SIBs Three regional bank failures 75 623 8.3 Regional networks Sovereign default (European) 200 2,387 11.9 European banks Market liquidity shock 150 1,698 11.3 Market makers
Average across scenarios 131 1,463 10.7 −
Notes: This table computes network amplification factors for different stress scenarios using the network diffusion model in equation (40). Initial Stress is total shock magnitude (arbitrary units). Equilibrium Stress is steady-state total stress after network propagation. Amplification Factor is ratio of equilibrium to initial stress, measuring network magnification. Most Affected Institutions indicates which bank types experience largest stress increases. Scenarios calibrated to plausible magnit-
udes based on 2008 crisis events.
Network amplification factors range from 8.3 to 11.9 across scenarios, averaging 10.7. This
implies that a shock affecting one institution with initial severity 100 generates equilibrium
system stress of 1,070 after propagating through bilateral exposures. Current stress tests
that ignore network amplification underestimate systemic impacts by approximately one
order of magnitude.
The policy implication is that stress testing frameworks should incorporate network
diffusion analysis to accurately assess system-wide consequences. Regulators should evaluate
not just whether individual banks survive shocks but whether the network as a whole remains
stable accounting for cascading failures and exposure amplification.
7.3 Resolution Planning and Too-Big-to-Fail
Our consolidation paradox finding has direct implications for resolution planning. The
Dodd-Frank Act requires G-SIBs to prepare ”living wills” describing how they would be
64

wound down in bankruptcy without taxpayer support. However, our analysis suggests that
traditional resolution planning may be insufficient when network fragility is high.
Consider the impact of resolving (orderly shutting down) institution i on system fragility.
Removing node i changes the Laplacian from L to L−i where row i and column i are deleted.
The change in algebraic connectivity is:
∆λ2 = λ2(L−i) − λ2(L) ≈ v2
2,i (43)
where v2,i is institution i’s Fiedler centrality. Institutions with large v2
2,i contribute
substantially to network fragility, making their resolution beneficial for systemic stability.
Table ?? ranks institutions by resolution impact.
Table 14: Resolution Priority Ranking by Network Impact
Institution Assets Fiedler Resolution lambda-2 Fragility Priority (Anonymous) (USD T) Centrality Impact Reduction Reduction Rank (v-2-i) (squared) (%)
Bank A 3.2 0.187 0.035 7,151 to 6,901 3.5 1 Bank B 2.8 0.173 0.030 7,151 to 6,937 3.0 2 Bank C 2.4 0.159 0.025 7,151 to 6,972 2.5 3 Bank D 3.6 0.156 0.024 7,151 to 6,980 2.4 4 Bank E 2.1 0.148 0.022 7,151 to 6,994 2.2 5 ... ... ... ... ... ... ...
Average (Top 10) 2.9 0.164 0.027 − 2.7 − Average (All 156) 0.52 0.048 0.002 − 0.2 −
Notes: This table ranks institutions by their contribution to network fragility, measured through squared Fiedler centrality. Institution identities anonymized for confidentiality. Total Assets in trillions USD as of 2023Q4. Fiedler Centrality is absolute value of eigenvector component v-2-i. Resolution Impact equals v-2-i squared, measuring change in lambda-2 from removing institution. lambda-2 Reduction shows counterfactual algebraic connectivity after resolution. Fragility Reduction is %age dec-
line in lambda-2. Priority Rank indicates resolution ordering that maximally reduces systemic risk. Top 10 institutions account for 27 % of fragility reduction despite representing 6.4 % of total banks.
65

The top 10 institutions ranked by Fiedler centrality contribute 27 % of potential fragility
reduction through resolution, despite representing only 6.4 % of banks. This concentration
indicates that resolution planning should prioritize these systemically important network
hubs. Importantly, the ranking differs from simple size ranking: Bank D has largest balance
sheet (3.6 trillion USD) but only fourth-highest network impact because its exposures are
relatively diversified.
The policy implication is that ”too-big-to-fail” should be redefined as ”too-connected-to
fail.” Resolution priorities should target network centrality rather than asset size. This re
quires collecting bilateral exposure data to compute spectral centrality measures—currently
not systematically done by most regulators.
7.4 International Coordination
Our finding of effectively global contagion propagation (spatial boundary 47,474 kilometers)
implies that financial stability is a global public good requiring international coordination.
Unilateral national regulations may be ineffective when shocks transmit rapidly across
borders through bilateral exposures.
Consider two countries, Home and Foreign, that can each impose capital requirements.
The payoff to Home from imposing requirement kH when Foreign imposes kF depends on
network structure:
πH (kH , kF ) = −C(kH ) − γ · λ2(kH , kF ) (44)
where C(kH) is the cost of imposing requirement kH and γλ2 represents expected
crisis costs proportional to network fragility. The Nash equilibrium (k∗
H, k∗
F ) satisfies first
66

order conditions, but will be inefficiently low due to coordination failure: neither country
internalizes the benefit of reducing fragility for the other.
Table 15 simulates equilibrium under alternative coordination regimes.
Table 15: International Policy Coordination: Game-Theoretic Analysis
Coordination Regime Capital lambda 2 Expected Efficiency Requirement Level Crisis Cost Gain (%) (USD Billion) (%)
No Coordination (Nash) 8.4 6,847 342 − Bilateral Agreement 9.6 5,923 296 13.5 Full Coordination (Social Optimum) 11.2 4,891 245 28.4
Basel III (Actual) 8.0 7,151 358 − 4.7
Notes: This table compares outcomes under alternative international coordination regimes using a two-country game-theoretic model. No Coordination is Nash equilibrium where each country optimizes unilaterally. Bilateral Agreement has countries jointly optimize capital requirements. Full Coordination is social optimum maximizing joint welfare. Basel III (Actual) shows current policy. Capital Requirement is equilibrium or optimal requirement. lambda 2 Level is resulting network fragility. Expected C-
risis Cost computed as probability times severity times GDP. Efficiency Gain is %age reduction in expected cost relative to no coordination. Model calibrated using estimated parameters.
Full international coordination achieves 28.4 % reduction in expected crisis costs relative
to Nash equilibrium through higher capital requirements (11.2 % versus 8.4 %) and lower
fragility (lambda 2 = 4,891 versus 6,847). Bilateral agreements achieve intermediate gains
(13.5 %). Notably, actual Basel III requirements (8.0 %) produce even higher costs than
Nash equilibrium, suggesting that international coordination is currently insufficient.
The policy implication is that financial regulation requires strengthened international
institutions. The Basel Committee on Banking Supervision provides a coordination
mechanism, but lacks enforcement power. Our analysis suggests that coordinated capital
requirements targeting network centrality could reduce expected crisis costs by nearly 30
67

% relative to uncoordinated policies—a substantial efficiency gain justifying institutional
investment in coordination mechanisms.
68

8 Conclusion
This paper develops and empirically implements a unified framework for analyzing systemic
risk in financial networks by integrating spatial treatment effect methodology with spectral
network fragility analysis. Building on continuous functional methods from Kikuchi (2024c),
Kikuchi (2024f), and Kikuchi (2024i), we characterize contagion dynamics through the
spectral properties of network Laplacian operators and identify causal impacts using spatial
difference-in-differences methods adapted for interconnected systems.
Our empirical analysis of the 2008 financial crisis yields four principal findings. First,
the crisis caused a large, statistically significant, and persistent increase in network fragility
measured by algebraic connectivity. Fragility rose 68.4 % above pre-crisis baselines (95 % CI:
[42.7 %, 94.1 %], p < 0.001) and continued amplifying rather than dissipating over fifteen
years, demonstrating structural hysteresis where systems settle into new equilibria rather
than reverting automatically.
Second, we document a consolidation paradox: while the number of major banks declined
47.3 % between 2007 and 2023, network fragility increased 315.8 %. This occurred because
bilateral exposure concentration rose 687 %, with surviving institutions becoming more
tightly coupled. The correlation between exposure concentration and fragility is r = 0.97
(p < 0.001), confirming that coupling strength drives systemic risk more than institution
count. This finding challenges conventional wisdom that consolidation enhances stability
and suggests that post-crisis regulatory reforms may have inadvertently increased systemic
vulnerability.
Third, spatial decay analysis reveals that financial contagion exhibits negligible geo
graphic attenuation with spatial decay rate kappa = 0.00002 per kilometer, implying spatial
boundary d-star = 47,474 kilometers—effectively global propagation. This contrasts sharply
69

with technology diffusion documented in Kikuchi (2024j), which exhibits spatial boundary
of only 69 kilometers. The 2,150-fold difference in propagation range reflects distinct
mechanisms: financial contagion occurs through instantaneous electronic payment systems,
while technology diffusion requires localized face-to-face interactions.
Fourth, traditional difference-in-differences methods that treat institutions as inde
pendent units produce treatment effect estimates biased upward by 73.2 %. This bias
stems from double-counting spillovers: when one institution experiences crisis impact,
connected institutions experience indirect impacts through bilateral exposures. Naive
estimators incorrectly attribute both effects to direct treatment. Our spatial difference
in-differences approach resolves this by aggregating to network level before differencing,
properly accounting for within-network propagation while maintaining causal interpretation.
The theoretical framework provides several insights. Theorem 1 establishes the consol
idation paradox: fragility increases when consolidation occurs if average bilateral exposure
intensity grows faster than the inverse of node reduction. The condition w ̄1/w ̄0 > n0/n1
determines whether fewer institutions generate higher fragility. In our data, this condition
holds with substantial margin (w ̄1/w ̄0 = 7.87 versus n0/n1 = 1.90), explaining the observed
increase.
The integration of spatial decay and network contagion through equation (17) yields
testable predictions about relative channel importance. For financial networks, we find κ ≈ 0
and large λ2, indicating dominant network channel with minimal geographic friction. For
technology diffusion, Kikuchi (2024j) finds large κ and moderate λ2, indicating dominant
spatial channel with important network effects. This demonstrates that the continuous
functional framework applies broadly across economic contexts but with dramatically
different parameter values.
70

The policy implications are substantial. First, network-targeted capital requirements
that impose higher requirements on institutions with high spectral centrality achieve
33.1 % reduction in fragility while affecting only 47 % of institutions. This compares
favorably to size-based targeting, which achieves 16.3 % reduction despite higher compliance
costs. Second, stress testing frameworks should incorporate network diffusion analysis
to accurately assess system-wide impacts, as our estimates suggest network amplification
factors average 10.7 across shock scenarios. Third, resolution planning should prioritize
network centrality rather than asset size, redefining ”too-big-to-fail” as ”too-connected-to
fail.” Fourth, international coordination on capital requirements could reduce expected crisis
costs by 28.4 % relative to uncoordinated policies.
Our analysis has several limitations that suggest directions for future research. First,
we do not observe all bilateral exposures directly, requiring maximum entropy imputation
for missing links. While this approach produces minimally informative estimates, access to
complete supervisory data would strengthen inference. Second, we treat network structure as
exogenous to the crisis, while institutions likely adjusted exposures strategically in response
to stress. Developing identification strategies that account for endogenous network formation
remains an important challenge. Third, we focus on cross-border exposures among major
institutions, omitting domestic interbank markets and shadow banking connections that may
transmit contagion. Extending the analysis to include these channels would provide more
comprehensive systemic risk assessment.
Fourth, our spatial difference-in-differences approach assumes parallel trends at network
level, which we validate using pre-crisis data. However, unobserved time-varying factors
could violate this assumption. Instrumental variables strategies exploiting plausibly
exogenous variation in network structure could provide additional identification. Fifth,
71

we analyze a single crisis (2008 financial crisis), limiting external validity. Replicating the
analysis for other financial crises—such as the 1997 Asian financial crisis or 2011 European
debt crisis—would test generalizability of the consolidation paradox and other findings.
Sixth, we do not model heterogeneous institution responses to the crisis. Banks differed in
their strategic responses based on business models, regulatory constraints, and management
quality. Allowing for treatment effect heterogeneity could reveal important distributional
consequences. Seventh, our stress testing analysis uses linear diffusion dynamics, while
actual contagion may exhibit nonlinearities such as threshold effects where shocks exceeding
critical values trigger cascading failures. Incorporating nonlinear dynamics would improve
realism.
Despite these limitations, our analysis demonstrates that continuous functional methods
from mathematical physics provide empirically relevant tools for analyzing systemic risk
in financial networks. The finding that consolidation paradoxically increased fragility
challenges dominant policy narratives and suggests that post-crisis regulatory reforms may
have inadvertently undermined the stability they sought to enhance. Network-targeted
interventions that exploit spectral structure offer promising alternatives to conventional size
based regulations. More broadly, the framework applies across economic domains—from
technology diffusion to financial contagion—providing unified mathematical foundations for
understanding spatial treatment effects in interconnected systems.
72

References
Abadie, A., Athey, S., Imbens, G. W., & Wooldridge, J. (2020). Sampling-based versus
design-based uncertainty in regression analysis. Econometrica, 88(1), 265–296.
Acemoglu, D., Ozdaglar, A., & Tahbaz-Salehi, A. (2015). Systemic risk and stability in
financial networks. American Economic Review, 105(2), 564–608.
Adrian, T., & Shin, H. S. (2010). Liquidity and leverage. Journal of Financial Intermediation,
19(3), 418–437.
Allen, F., & Gale, D. (2000). Financial contagion. Journal of Political Economy, 108(1),
1–33.
Bardoscia, M., Battiston, S., Caccioli, F., & Caldarelli, G. (2015). Pathways towards
instability in financial networks. Nature Communications, 6, 6627.
Battiston, S., Puliga, M., Kaushik, R., Tasca, P., & Caldarelli, G. (2012). DebtRank: Too
central to fail? Financial networks, the FED and systemic risk. Scientific Reports, 2, 541.
Bernanke, B. S. (2010). Causes of the recent financial and economic crisis. Statement before
the Financial Crisis Inquiry Commission, September 2.
Brunnermeier, M. K. (2009). Deciphering the liquidity and credit crunch 2007-2008. Journal
of Economic Perspectives, 23(1), 77–100.
Butts, K., Dickstein, M., & Shapiro, J. (2017). Revisiting event study designs. NBER
Working Paper No. 23474.
Cao, Y., & Liu, Y. (2021). Estimating dynamic treatment effects in event studies with
heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.
73

Chinazzi, M., Davis, J. T., Ajelli, M., Gioannini, C., Litvinova, M., Merler, S., ... &
Vespignani, A. (2020). The effect of travel restrictions on the spread of the 2019 novel
coronavirus (COVID-19) outbreak. Science, 368(6489), 395–400.
Demirgu ̈ ̧c-Kunt, A., Pedraza, A., & Ruiz-Ortega, C. (2020). Banking sector performance
during the COVID-19 crisis. World Bank Policy Research Working Paper, No. 9363.
Elliott, M., Golub, B., & Jackson, M. O. (2014). Financial networks and contagion. American
Economic Review, 104(10), 3115–3153.
Fiedler, M. (1973). Algebraic connectivity of graphs. Czechoslovak Mathematical Journal,
23(2), 298–305.
Freixas, X., Parigi, B. M., & Rochet, J. C. (2000). Systemic risk, interbank relations, and
liquidity provision by the central bank. Journal of Money, Credit and Banking, 32(3),
611–638.
Gai, P., & Kapadia, S. (2010). Contagion in financial networks. Proceedings of the Royal
Society A, 466(2120), 2401–2423.
Garratt, R., Mahadeva, L., & Svirydzenka, K. (2014). Mapping systemic risk in the
international banking network. Journal of Money, Credit and Banking, 46(s1), 231–257.
Glasserman, P., & Young, H. P. (2015). How likely is contagion in financial networks?
Journal of Banking & Finance, 50, 383–399.
Gorton, G., & Metrick, A. (2012). Securitization. In G. M. Constantinides, M. Harris, & R.
M. Stulz (Eds.), Handbook of the Economics of Finance (Vol. 2, pp. 1–70). Elsevier.
74

Hautsch, N., Schaumburg, J., & Schienle, M. (2015). Financial network systemic risk
contributions. Review of Finance, 19(2), 685–738.
Kikuchi, T. (2024a). A unified framework for spatial and temporal treatment effect
boundaries: Theory and identification. arXiv preprint arXiv:2510.00754.
Kikuchi, T. (2024b). Stochastic boundaries in spatial general equilibrium: A diffusion-based
approach to causal inference with spillover effects. arXiv preprint arXiv:2508.06594.
Kikuchi, T. (2024c). Spatial and temporal boundaries in difference-in-differences: A
framework from Navier-Stokes equation. arXiv preprint arXiv:2510.11013.
Kikuchi, T. (2024d). Nonparametric identification and estimation of spatial treatment
effect boundaries: Evidence from 42 million pollution observations. arXiv preprint
arXiv:2510.12289.
Kikuchi, T. (2024e). Nonparametric identification of spatial treatment effect boundaries:
Evidence from bank branch consolidation. arXiv preprint arXiv:2510.13148.
Kikuchi, T. (2024f). Dynamic spatial treatment effect boundaries: A continuous functional
framework from Navier-Stokes equations. arXiv preprint arXiv:2510.14409.
Kikuchi, T. (2024g). Dynamic spatial treatment effects as continuous functionals: Theory
and evidence from healthcare access. arXiv preprint arXiv:2510.15324.
Kikuchi, T. (2024h). Emergent dynamical spatial boundaries in emergency medical services:
A Navier-Stokes framework from first principles. arXiv preprint arXiv:2510.XXXXX.
Kikuchi, T. (2024i). Network contagion dynamics in European banking: A Navier-Stokes
framework for systemic risk assessment. arXiv preprint arXiv:2510.19630.
75

Kikuchi, T. (2024j). Dual-Channel Technology Diffusion: Spatial Decay and Network
Contagion in Supply Chain Networks. arXiv preprint arXiv:2510.XXXXX.
Manski, C. F. (2013). Identification of treatment response with social interactions. The
Econometrics Journal, 16(1), S1–S23.
Sommese, E., Cerchiello, P., & Torri, G. (2021). A spectral analysis of interbank networks.
Expert Systems with Applications, 168, 114270.
Upper, C. (2011). Simulation methods to assess the danger of contagion in interbank markets.
Journal of Financial Stability, 7(3), 111–125.
Upper, C., & Worms, A. (2004). Estimating bilateral exposures in the German interbank
market: Is there a danger of contagion? European Economic Review, 48(4), 827–849.
76

A Computational Algorithms
A.1 Eigenvalue Computation
For computing the algebraic connectivity λ2 of large graphs (n = 156 nodes), we use the
Lanczos algorithm for sparse symmetric matrices:
Algorithm 1 Compute Algebraic Connectivity lambda 2
1: Input: Laplacian matrix L in R to the n times n power 2: Output: Algebraic connectivity lambda 2 3: Initialize random vector v-0 in R to the n power orthogonal to 1 4: Normalize: v-0 becomes v-0 divided by magnitude v-0 magnitude 2 5: for j = 1 to k (number of Lanczos iterations) do 6: w becomes L v sub j − 1 7: alpha-j becomes v sub j − 1 transposed w 8: w becomes w − alpha-j v sub j − 1 9: if j greater than 1 then 10: w becomes w − beta sub j − 1 v sub j − 2 11: end if
12: beta-j becomes magnitude w magnitude 2 13: v-j becomes w divided by beta-j 14: Construct tridiagonal matrix T-j from alpha-i, beta-i 15: Compute eigenvalues of T-j using QR algorithm 16: end for
17: Return: Second smallest eigenvalue of T-k
A.2 Bootstrap Inference
For constructing confidence intervals robust to clustering and heteroskedasticity:
77

Algorithm 2 Bootstrap Confidence Intervals
1: Input: Network data G-t for t equals 1 to T quarters 2: Input: Number of bootstrap replications B equals 1000 3: Output: 95 % confidence interval 4: Compute point estimate theta-hat on full sample 5: for b equals 1 to B do 6: Sample T quarters with replacement: t-1-star through t-T-star 7: Construct bootstrap sample using networks G sub t-j-star 8: Estimate model on bootstrap sample: theta-hat to the b power 9: end for
10: Sort bootstrap estimates 11: Return: 2.5th and 97.5th %iles
A.3 Maximum Entropy Network Imputation
For imputing missing bilateral exposures:
Algorithm 3 Maximum Entropy Imputation
1: Input: Observed exposures E-ij for pairs in O 2: Input: Row sums E-i-out and column sums E-j-in 3: Output: Complete exposure matrix E 4: Initialize E-ij equals E-ij-obs for pairs in O 5: for iteration equals 1 to max-iterations do 6: for all unobserved pairs i j not in O do 7: E-ij becomes E-i-out times E-j-in divided by E-total 8: end for
9: Rescale rows: E-ij becomes E-ij times E-i-out divided by sum-j E-ij 10: Rescale columns: E-ij becomes E-ij times E-j-in divided by sum-i E-ij 11: Check convergence: if maximum absolute row column deviation less than tolerance, break 12: end for
13: Return: Complete matrix E
78

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:28.272Z
- **Text Length:** 111229 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 78 of 78
