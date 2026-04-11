# PDF Document: Yang et al. - 2025 - How FinTech affects financial sustainability Evidence from Chinese commercial banks using a three-s.pdf

**File Path:** Yang et al. - 2025 - How FinTech affects financial sustainability Evidence from Chinese commercial banks using a three-s.pdf

**Processed Date:** 2026-02-10T18:16:42.040Z

**File Size:** 769.42 KB

**Total Pages:** 38

**Extracted Pages:** 38

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3556

**Title:** How FinTech affects financial sustainability: Evidence from Chinese commercial banks using a three-stage network DEA-Malmquist model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

How FinTech affects financial sustainability: Evidence from
Chinese commercial banks using a three-stage network
DEA-Malmquist model
Yudi Yang a, Fan Yang a, ∗ , Xiajie Yi b, ∗, Dongwei He a, ∗
a School of Finance and Business, Shanghai Normal University, Shanghai, China
b IE ́SEG School of Management, University Lille, CNRS, UMR 9221 - LEM - Lille
Economie Management, F-59000 Lille, France
Abstract
This paper investigates the impact of financial technology (FinTech) on the financial sus
tainability (FS) of commercial banks. We employ a three-stage network DEA-Malmquist
model to evaluate the FS performance of 104 Chinese commercial banks from 2015 to 2023.
A two-way fixed effects model is utilized to examine the effects of FinTech on FS, reveal
ing a significant negative relationship. Further mechanistic analysis indicates that FinTech
primarily undermines FS by eroding banks’ loan efficiency and profitability. Notably, banks
with more patents or listed status demonstrate greater resilience to FinTech disruptions.
These findings help banks identify external risks stemming from FinTech development, and
by elucidating the mechanisms underlying FS, enhance their capacity to monitor and manage
FS in the era of rapid FinTech advancement.
Keywords: Financial technology, Financial sustainability, DEA-Malmquist model, Two-way
fixed effects model, Commercial banks
∗Corresponding authors. E-mail address: fan yang@shnu.edu.cn (F. Yang), x.yi@ieseg.fr(X. Yi), donwayho@shnu.edu.cn (D. He).
1
arXiv:2511.02608v1 [q-fin.GN] 4 Nov 2025

1 Introduction
Commercial banks play a central role in a financial system by channeling funds from savers
to businesses and supporting liquidity creation. Their stability and sustainability are vital to
overall economic development. In 2023, Silicon Valley Bank (SVB) went bankrupt due to bank
runs, in which many depositors withdrew their deposits simultaneously out of concern that the
bank might become insolvent. The collapse of SVB stemmed from an overreliance on short-term
deposits from tech firms and excessive exposure to long-term fixed-income securities. When
interest rates rose sharply, the bank faced an acute liquidity crisis (Metrick, 2024). As the
16th largest bank in the US, the collapse of SVB triggered the failures of Silvergate Bank and
Signature Bank, raising concerns about the resilience of the banking system and the potential for
contagion across the broader financial sector. Aharon et al. (2023) document abnormal returns
on both event and post-event days, indicating a negative response to the collapse of SVB in
equity markets. Akhtaruzzaman et al. (2023) indicate that the collapse of SVB severely shook
and threatened the global banking industry, and led to a pronounced elevation of financial
contagion confined to the banking sector. Overall, this event reveals weaknesses in the risk
management of banks and asset allocation. It also underscores the critical role of maintaining
financial resilience and sustainability in the banking sector to prevent global systemic risks amid
rising interest rates and increasing uncertainty.
According to the National Administration of Financial Regulation (NAFR)1, the total assets
of Chinese commercial banks increased from 155.83 trillion yuan in 2015 to 354.85 trillion yuan
in 2023, while total liabilities rose from 144.27 trillion yuan to 327.15 trillion yuan during
the same period. These numbers represent increases of 127.72% and 126.76%, respectively,
underscoring the sustained expansion of scale and financial depth of the banking sector, as
shown in Figure 1. It should be noted that the growth in total assets and liabilities does
not necessarily indicate improved financial sustainability (FS). Larger balance sheets, although
indicative of business expansion, do not guarantee enhanced profitability or sufficient internal
revenue to cover operating costs. At the same time, a rapid increase may entail higher leverage
1The data on total assets and liabilities refer to quarterly figures for legal-person banking institutions. Before 2018, the data were released by the former China Banking Regulatory Commission (CBRC). Since 2023, they have been published by the NAFR, which succeeded the CBRC.
2

or riskier investments, which can exacerbate costs and financial vulnerability. Here the FS
refers to the ability of a firm to cover its operating costs through internal revenue without
external support (Zeller and Meyer, 2002). It encompasses various aspects of bank operations,
such as financial performance, risk management, and strategic planning. This definition has
been widely studied in empirical studies of microfinance institutions (MFIs). One stream of
research provides systematic reviews of FS in MFIs (Gupta and Sharma, 2023; Maeenuddin
et al., 2023). Another stream examines factors affecting FS, including the trade-offs between
social objectives and financial performance in MFIs (Wry and Zhao, 2018), internal arrangements
that influence sustainability (Dabi et al., 2023), and analyses of FS in commercial banks, such
as its classifications and key determinants (Shi et al., 2025). These studies provide a detailed
account of the significance of FS in financial institutions, and imply that appropriate indicators
must be selected based on its definition.
2015 2016 2017 2018 2019 2020 2021 2022 2023
0
50
100
150
200
250
300
350
156
182
197
210
239
266
289
320
355
144
169
182 193
220
245
265
294
327
Year
Trillion yuan
Total assets Total liabilities
Figure 1: The total assets and liabilities of Chinese commercial banks from 2015 to 2023
Measuring FS is an important methodological challenge. Given its multidimensional nature,
identifying appropriate measurement methods is essential. Such methods are generally catego
rized into single-factor and multi-factor ways. The former methods focus on one representative
financial ratio to reflect the financial condition of an entity. For example, indicators such as finan
3

cial self-sufficiency (Kinde, 2012), return on assets (ROA) (Najam et al., 2022), and operational
self-sufficiency (Bogan, 2012; Abu Wadi et al., 2022; Fonchamnyo et al., 2023) are commonly
used. Single-factor approaches often fail to account explicitly for risk, which may lead to biased
assessments of the actual performance of banks (Prior et al., 2019). To overcome this limitation,
multi-factor measurements often incorporate financial and non-financial variables to capture a
more comprehensive picture of FS. Data Envelopment Analysis (DEA) (Charnes et al., 1978) is
one of the most widely used approaches (Shi et al., 2020). DEA is a non-parametric method that
evaluates organizational performance by integrating multiple input and output indicators into a
composite index. The method calculates the efficiency in converting consumed resources into fi
nal outputs. Its advantages include not requiring assumptions about the underlying distribution
of performance variables and accommodating conflicting performance measures. Consequently,
it has been applied in diverse fields such as energy management (Wei and Zhao, 2024), environ
mental governance (Zhang et al., 2020), public services (Kohl et al., 2019), the pharmaceutical
industry (Qiu et al., 2023), etc. In the banking industry, scholars have developed multi-stage
network DEA models to reflect the structure of the banking sector. For instance, Wang et al.
(2014) use an additive two-stage network DEA for Chinese commercial banks to assess over
all and stage efficiencies in deposit producing and profit earning stages. Similarly, a two-stage
network DEA model is applied by Fukuyama et al. (2020) to divide the banking process into
fund-raising and revenue-generation stages. Shi et al. (2025) adopt a three-stage network DEA
approach for US commercial banks, decomposing the process into deposit, loan, and profitability
stages. Overall, the indicators developed in these studies reflect FS across multiple operational
stages and show that it is influenced by multiple factors. However, with technological changes,
competitive pressures arise not only from internal operations but also from external factors.
Among the emerging external factors, the rapid development of financial technology (FinTech)
has attracted increasing attention. It is changing the business landscape for banks, expanding
their services, and “interfering” in the fields traditionally covered by banks (Rom ̄anova and
Kudinska, 2016).
Generally, FinTech uses technology to provide new and improved financial services (Thakor,
2020). Among the major economies in the world, China offers an example of how FinTech
4

has rapidly taken hold in practice. In 2016, the total financing of Chinese FinTech companies
reached 7.7 billion US dollars, surpassing that of the US for the first time, making China the
largest market in the world (Gao, 2022). By 2022, in terms of transaction volume, Alipay and
WeChat Pay accounted for over 90% of the mobile payment market. The emergence of Fin
Tech exerts various impacts on traditional financial sectors, and its influence on conventional
commercial banks remains debated. Existing studies find that FinTech has driven the trans
formation of the banking sector and challenged traditional banking practices (Rom ̄anova and
Kudinska, 2016; Thakor, 2020). On the one hand, FinTech improves efficiency and promotes
innovation. Lee et al. (2021) show that FinTech enhances the cost efficiency and technological
capabilities of banks by optimizing resource allocation, reducing operational costs, and expand
ing service boundaries. Wang et al. (2021b) also find that commercial banks adopt FinTech
to upgrade traditional business models, which helps improve operational efficiency and over
all competitiveness. On the other hand, FinTech exerts disruptive effects on banks. Studies
show that FinTech diverts business from traditional channels through third-party payments and
internet wealth management, thereby reducing interest margins and increasing risks to prof
itability (Murinde et al., 2022; Lee et al., 2023). Li et al. (2023) find that the “Matthew Effect”
in FinTech investment concentrates resources in large banks, placing small and medium-sized
banks at a technological and capital disadvantage. Excessive reliance on external technology
may also lead to technological dependency and worsen operational risks such as data security
and privacy breaches. Furthermore, Wang et al. (2021a) show that FinTech development in
creases bank risk-taking, with more potent effects for larger banks with greater involvement in
shadow banking. As noted above, the rise of FinTech has introduced both opportunities and
threats to banking operations, which affect the FS of banks in turn.
FinTech might promote bank development through technology spillover effects. It may also
undermine traditional operations through competition effects. The effect of FinTech on the long
term FS of banks, however, remains unclear. To the best of our knowledge, previous studies do
not systematically examine the relationship between FS and FinTech. Therefore, we conduct an
empirical analysis to investigate how FinTech influences the FS of Chinese commercial banks.
The analysis is based on panel data from 104 commercial banks between 2015 and 2023. Besides,
5

we also perform robustness checks to validate our findings.
The main contributions of this paper are threefold. First, we construct a three-stage network
DEA-Malmquist framework to measure the dynamic FS of Chinese commercial banks. This
framework also captures the efficiencies of FS in its the deposit, loan, and profitability sub
stages. Second, we use a two-way fixed effects model to examine how FinTech affects FS and
the transmission channels, which fills a gap in the literature on FS. Third, we further explore
heterogeneity across banks with different levels of innovation and marketization.
The remainder of the paper proceeds as follows. Section 2 introduces the three-stage network
DEA-Malmquist model for the FS and the empirical model. In Section 3, we empirically evaluate
the impact of FinTech on the FS of 104 Chinese commercial banks. Finally, in Section 4, we
discuss the findings and future research possibilities.
2 Methodology
This section outlines the methodological framework and describes the data used for the regres
sion analysis. To empirically measure FS, we adopt a three-stage network DEA model of Shi
et al. (2025) in combination with the Malmquist productivity index (MI) (Malmquist, 1953).
Thereafter, to analyze the relationship between FinTech and FS, we employ a two-way fixed
effects model (Wooldridge, 2010; Hsiao, 2014) and present an overview of the relevant data.
The dataset consists of panel data from 104 commercial banks in China from 2015 to 2023.
Bank-level data are obtained from the CSMAR2 and Wind3 databases, with missing values sup
plemented by annual reports4 of the commercial banks. Additionally, macroeconomic data are
collected from the China Statistical Yearbook.
2.1 The three-stage network DEA-Malmquist model
Sherman and Gold (1985) first apply DEA to banking studies, after which DEA has been widely
used to address banking problems. Staub et al. (2010) develop a DEA model to measure cost,
2CSMAR (China Stock Market & Accounting Research Database), developed by GTA Information Technology Co., Ltd., is widely used for empirical studies on the Chinese capital market. 3Wind Database, developed by Wind Information Co., Ltd., provides comprehensive financial and economic data for China. 4The reports are derived from the official websites of various banks and the China Foreign Exchange Trade System.
6

technical, and allocative efficiencies of Brazilian banks, finding that inefficiency was mainly
technical and state-owned banks were more cost efficient than other types of banks. Avkiran
(2015) uses a dynamic network DEA model (DN-DEA) to evaluate Chinese commercial banks,
showing that DN-DEA captures dynamic performance and highlights sub-unit inefficiencies.
Recently, Shi et al. (2025) construct the FS of commercial banks in the US using a three
stage network DEA model, conceptualizing FS as a multi-stage, multi-factor structure. They
also develop a random forest model with SHapley Additive exPlanations (SHAP) to analyze
the impacts of variables. Further references can be consulted in Matthews (2013), Yu et al.
(2021), Xie et al. (2022), and Li et al. (2024).
Bank operations encompass a diverse range of operations, and FinTech has carried distinct
degrees of importance across these activities in recent years. As a result, FS has also been
impacted by FinTech. In particular, the emergence of third-party payment platforms has simul
taneously disrupted the ability of banks to attract deposits and challenged their profitability.
These changes underscore the need for a comprehensive framework to evaluate FS across the
stages of bank operations. For this purpose, we adopt the three-stage network DEA model by
Shi et al. (2025). This approach decomposes the banking process into three stages: the deposit
stage, the loan stage, and the profitability stage, based on the production approach (Sealey Jr.
and Lindley, 1977) and the intermediation approach (Benston, 1965). Figure 2 illustrates the
structure of this three-stage DEA model.
Figure 2: Three-stage network DEA structure for FS
Specifically, following Figure 2, in the deposit stage, the focus is on capturing the FS factors
7

involved in deposit-taking. This stage evaluates the ability of the bank to attract customer de
posits and its capacity to manage deposits effectively. Salary per employee, capital expenditures
(CapEx), and equity of shareholders are initial inputs, representing labor cost structure, capital
investment, and financial strength. The outputs from this stage include total deposits, cash
from operations, and return on equity (ROE). Subsequently, in the loan stage, the banks utilize
the outputs of the deposit stage (deposits and operating cash) as primary funding sources, with
total assets added as an external input. The outputs from this stage include net loan amount,
net interest income, and ROA, reflecting credit issuance capacity and asset utilization efficiency.
Finally, the profitability stage measures the FS of banks. It focuses on their ability to convert in
come from various sources into profits that benefits employees, customers, and investors. Given
that most commercial banks in China are not publicly listed, we replace earnings per share with
net profit margin and shares outstanding with share capital in the original model of Shi et al.
(2025). Therefore, revenue per employee, total revenue, and net profit margin are treated as
outputs that measure this ability.
We employ the additive efficiency decomposition method (Cook et al., 2010), implemented
for a three-stage network DEA (Shi et al., 2025), to model the structure in Figure 2. Let
I = {1, 2, . . . , |I|} denote the set of decision-making units (DMUs), where each i ∈ I represents
a bank, denoted as DM Ui. Let P = {1, . . . , |P |} represent the set of stages in the process,
with p ∈ P indexing each stage. Following the network DEA framework established by Cook
et al. (2010), we classify the flows into and out of each stage p as distinct vectors to ensure clear
definition:
(1) Rp-dimensional vector Z0: The inputs enter the first stage (p = 1);
(2) Rp-dimensional vector Zp1: The outputs are generated at stage p and not passed to the
stage p + 1;
(3) Sp-dimensional vector Zp2: The outputs are generated at stage p and transferred as inputs
to the stage p + 1;
(4) Jp-dimensional vector Zp3: External inputs enter the process at the beginning of stage p+1.
8

The flow of these input and output vectors through the three-stage banking process is visually
represented in Figure 2. The specific components of these vectors for DM Ui are indexed as
follows:
(1) zip1r denotes the r-th component (r = 1, . . . , Rp) of the Rp-dimensional output vector for
DM Ui flowing from stage p, which leaves the process at that stage p, and is not passed
on as an input to stage p + 1. In the last stage |P |, all the outputs are viewed as zi1
|P |r, as
they leave the process;
(2) zi2
pk denotes the k-th component (k = 1, . . . , Sp) of the Sp-dimensional output vector for
DM Ui flowing from stage p, and is passed on as a portion of inputs to stage p + 1;
(3) zi3
pj denotes the j-th component (j = 1, . . . , Jp) of the Jp-dimensional input vector for
DM Ui at stage p + 1, that enters the process at the beginning of that stage.
Specifically, for any stage p (p ≥ 2), the total inputs are derived from the intermediate output
Zp2−1 and the external input Zp3−1. The weights for the above factors are defined as:
(1) upr is the weight assigned to the output component zip1r flowing from stage p;
(2) ηpk is the weight for the output component zi2
pk at stage p, and it is also assigned to the
same component which becomes an input to stage p + 1;
(3) νpj is the weight assigned to the j-th input component zi3
pj that enters the process at the
beginning of stage p + 1.
9

Table 1: Notations in the three-stage network DEA-Malmquist model
Notation Description
i ∈ {1, . . . , |I|} Index for DMUs.
p ∈ {1, . . . , |P |} Index for stages.
r ∈ {1, . . . , Rp} Index for final output variables, where Rp is the dimension of Zp1.
k ∈ {1, . . . , Sp} Index for intermediate output variables, where Sp is the dimension of Zp2.
j ∈ {1, . . . , Jp} Index for external input variables, where Jp is the dimension of Zp3.
t ∈ {1, . . . , |T |} Index for years in the MI model.
Z0 The initial input vector to the first stage (p = 1).
Zp1 The Rp-dimensional output vector generated at stage p.
Zp2 The Sp-dimensional output vector generated at stage p that links to stage p + 1.
Zp3 The Jp-dimensional input vector that enters the process at the beginning of stage p + 1.
zip1r The r-th component of the final output vector Zp1 for DM Ui, flowing from stage p and exiting the process.
zi2
pk The k-th component of the output vector Zp2 for DM Ui, flowing from stage p and passed on as an input to stage p + 1.
zi3
pj The j-th component of the external input vector Zp3 for DM Ui, which is an input to stage p + 1 and enters the process at its beginning.
upr Weight for the r-th output zip1r at stage p.
ηpk Weight for the k-th output zi2
pk at stage p.
νpj Weight for the j-th external input zi3
pj entering stage p + 1.
θp DEA estimated efficiency score of a DM Ui at stage p.
θ Weighted aggregate efficiency score across all stages, typically calculated using stage weights w1, w2, w3.
w1, w2, w3 Weights assigned to the efficiency scores of stages 1, 2, and 3, respectively, where w1 + w2 + w3 = 1.
θtt+1 Efficiency of the DM Ui at time t + 1, measured against the period t technology frontier; captures intertemporal efficiency in the MI.
θtp(t + 1) Efficiency of the DM Ui at time t + 1 in stage p, measured against the period t technology frontier; captures intertemporal efficiency in the MI.
When p = 2, 3, . . ., the efficiency for DM Ui would be expressed as:
θp =
PRp
r=1 uprzip1r + PSp
k=1 ηpkzi2
pk + εp
PSp−1
k=1 ηp−1kzi2
p−1k + PJp
j=1 νp−1j zi3
p−1j
, εp is unrestricted in sign. (1)
The DEA formulations for each sub-stage corresponding to Equation (1) are presented below:
10

θ1 = u11zi111 + η11zi121 + η12zi122 + ε1
ν01zi01 + ν02zi02 + ν03zi03
, ε1 is unrestricted in sign, (2a)
θ2 = u21zi211 + η21zi221 + η22zi222 + ε2
η11zi121 + η12zi122 + ν11zi131
, ε2 is unrestricted in sign, (2b)
θ3 = u31zi311 + u32zi312 + u33zi313 + ε3
η21zi221 + η22zi222 + ν21zi231
, ε3 is unrestricted in sign, (2c)
where zi
0j are the only inputs to first stage.
The overall performance theta is computed as a weighted sum of the stage-specific efficiency
scores, subject to a unit-sum constraint on the weights:
θ = w1θ1 + w2θ2 + w3θ3, w1 + w2 + w3 = 1. (3)
We formulate a linear programming model to evaluate the overall efficiency across the three
stages. Equation (4a) maximizes the weighted sum of outputs and intermediate products across
all stages. Equation (4b) imposes a normalization condition, and equations (4c)–(4e) give stage
specific feasibility constraints. Equations (4f)–(4i) are domain constraints
max
P
X
p=1
Rp
X
r=1
upr z o1
pr +
Sp
X
k=1
ηpk z o2
pk + εp (4a)
s.t. ν01zo
01 + ν02zo
02 + ν03zo
03 + η11zo2
11 + η12zo2
12 + ν11zo3
11 + η21zo2
21 + η22zo2
22 + ν21zo3
21 = 1 (4b)
u11zi1
11 + η11zi2
11 + η12zi2
12 + ε1 ≤ ν01zi
01 + ν02zi
02 + ν03zi
03, ∀i ∈ I (4c)
u21zi1
21 + η21zi2
21 + η22zi2
22 + ε2 ≤ η11zi2
11 + η12zi2
12 + ν11zi3
11, ∀i ∈ I (4d)
u31zi1
31 + u32zi1
32 + u33zi1
33 + ε3 ≤ η21zi2
21 + η22zi2
22 + ν21zi3
21, ∀i ∈ I (4e)
u11, u21, u31, u32, u33 > 0 (4f)
η11, η12, η21, η22 > 0 (4g)
ν01, ν02, ν03, ν11, ν21 > 0 (4h)
ε1, ε2, ε3 are unrestricted in sign (4i)
Traditional DEA models suffer from the inherent limitation of being static and failing to
capture intertemporal performance dynamics (F ̈are et al., 1994). Thus, we incorporate the MI,
11

allowing us to track how bank performance evolves over time. The MI is widely applied to
measure the changes in productivity of banks (Caves et al., 1982). Studies include analyses of
credit banks in Japan (Barros et al., 2009), and Bansal et al. (2022) use a dynamic network
DEA-based Malmquist–Luenberger index to measure the productivity changes of Indian banks.
The MI measures efficiency changes between two time periods by calculating the ratio of the
distances of each data point to a common technology frontier (Casu et al., 2004). The overall
MI is defined for periods t ∈ T , where T = {1, 2, . . . , |T | − 1}, as follows:
M It,t+1 =
s
θtt+1
θtt
· θt+1
t+1 θt+1
t
. (5)
Let θtt+1 denote the efficiency of DM Ui at period t + 1 evaluated under the technology of period
t, and the other θ terms in the formula are interpreted similarly.
We use MI to analyze the changes in FS of Chinese commercial banks. Changes in FS
can be assessed by an output-oriented or input-oriented approach. The former way measures
how the actual output compares to the maximum possible output achievable with the same
inputs and technology. On the contrary, the latter one measures productivity changes when the
same output is produced with fewer inputs under a given technology. According to Jaffry et al.
(2007), an output-oriented model is more suitable for developing countries. Therefore, we adopt
an output-oriented approach. In the following, Equation (6) for each production stage p ∈ P is
used:
MIp
t,t+1 =
s
θtp(t + 1)
θtp(t) · θtp+1(t + 1)
θtp+1(t) , (6)
where θtp(t + 1) denotes the efficiency of DM Ui at stage p and period t + 1, evaluated under the
technology of period t, and the other θ terms in the formula are interpreted similarly.
Accordingly, an MI value greater than one indicates a positive trend in FS, a value equal
to one indicates no change, and a value less than one indicates a decline relative to the prior
period. The overall measure of FS can be decomposed into technical change (TC) and efficiency
change (EC). The TC reflects improvements in technology and shifts in the production frontier,
and the EC captures the catching-up effect, indicating whether banks move closer to or farther
12

from the best-practice frontier. TC and EC are computed as follows:
M It,t+1 = θt+1
t+1
θtt
| {z }
Efficiency Change (EC)
×
s
θtt+1 θt+1
t+1
· θtt
θt+1
t
| {z }
Technical Change (TC)
. (7)
In empirical studies of the banking sector, researchers often employ TC and EC. For instance,
Portela and Thanassoulis (2010) evaluate productivity changes in Portuguese bank branches
across different periods and branches by TC and EC. Assaf et al. (2013) compare TC and EC
across different types of banks in Turkey. Given the above studies, we also adopt this approach
as part of our robustness tests in Section 3.2.
2.2 Two-way fixed effects model
To examine the relationship between FS and FinTech, we run a two-way fixed effects regression
using panel data. Reviewing existing literature (Baltagi, 2008; Wooldridge, 2010), we find that
unobserved heterogeneity across units and periods may bias estimation results. The two-way
fixed effects model mitigates this issue by controlling for both individual and time effects. Let
i and t denote the evaluated commercial bank and year, respectively. The dependent variable
is F SI (FS index), which represents the FS of commercial banks. To this end, the regression
model is specified as follows:
F SIi,t = β0 + β1F T Ii,t +
3
X
c=2
βc Mc,t +
10
X
c=4
βc Xc,i,t + δi + μt + ei,t, ∀i ∈ I, ∀t ∈ T. (8)
In Equation (8), the explanatory variable is F T I (FinTech index). The set of control variables
consists of two parts: macroeconomic variables and bank-level variables. The macroeconomic
variables are represented by Mc,t, and the bank-level variables by Xc,i,t. The subscript c indexes
different control variables within each category, while ei,t denotes the stochastic error term.
Moreover, δi and μt denote the individual (bank-specific) and time fixed effects, respectively.
The sign and significance of β1 are used to examine the relationship between FinTech and the FS
of commercial banks, and β0 is the constant term. Standard errors are clustered at the individual
level to address within-group correlation and to avoid underestimating standard errors.
We primarily evaluate the FS of commercial banks and analyze the impact of FinTech
thereon. The dependent variable F SI is derived from the three-stage network DEA-Malmquist
13

model. We use the Peking University Digital Financial Inclusion Index compiled by Guo et al.
(2020) to represent FinTech (Lee et al., 2023; Hu et al., 2024). Notably, this index reflects the
extent of digital delivery and accessibility of financial services across regions, aligning with the
core dimensions of technology-driven financial development. We standardize the index by divid
ing its original values by 100 to control for scale differences and ensure regional comparability.
The resulting standardized index is the core explanatory variable (F T I).
The empirical analysis and robustness checks incorporate a set of control variables consistent
with prior studies (Cheng and Qu, 2020; Wang et al., 2021b; Lee et al., 2023). At the macroeco
nomic level, the prefecture-level GDP growth rate (GDPg) and the financial development level
(F DL) are included. Since banks operate in different regions with varying economic and capital
market conditions, we include these variables as controls to mitigate potential bias caused by
regional differences. At the individual bank level, variables such as loan-to-deposit ratio (LDR),
non-interest income ratio (N IIR), return on assets (ROA), debt-to-asset ratio (DAR), total as
sets (T AS), operating expenses (OEX), and capital adequacy ratio (CAR) are included. These
variables account for differences in profitability, bank size, risk management, and other related
aspects. Controlling these factors reduces bias due to individual bank differences. Definitions
and calculation methods for these variables are presented in Table 2.
14

Table 2: Variables of the two-way fixed effects model
Category Variable Name Abbreviation Definition
Dependent Variable Financial Sustainability Index F SI Composite financial indicators calculated by a three-stage network DEAMalmquist model
Explanatory Variable FinTech Index F T I The Peking University Digital Financial Inclusion Index divided by 100
Control Variables GDP Growth Rate (the prefecture-level) GDPg (Current GDP Previous GDP) / Previous GDP
Financial Development Level F DL Ratio of total deposits and loans to local GDP
Loan-to-Deposit Ratio LDR Total loans / Total deposits
Non-interest Income Ratio N IIR Non-interest income / Operating income
Return on Assets ROA Net profit / Total assets
Debt-to-Asset Ratio DAR Total liabilities / Total assets
Total Assets T AS Natural logarithm of total assets at yearend
Operating Expenses OEX Natural logarithm of operating expenses at year-end
Capital Adequacy Ratio CAR Eligible capital / Risk-weighted assets
3 Empirical analysis
This section presents an empirical analysis to identify the impact, underlying mechanisms, and
heterogeneous effects of FinTech on FS. Firstly, the values of FS are computed based on the
15

methodology in Section 2. We also conduct descriptive statistics for relevant variables and
run a fixed-effects panel regression to examine the impact of FinTech development. Secondly,
a series of robustness checks is performed to verify the reliability of the baseline regression re
sults. Thirdly, stage-specific MIs are introduced as channel variables to investigate the transmis
sion mechanisms, where FinTech affects bank financial performance across different operational
stages. Finally, heterogeneity analyses are conducted based on bank listing status and patent
ownership to explore differential impacts across bank types.
3.1 Main results
FS estimation results: Table 3 reports the annual averages of FS for 104 banks from 2015
to 2023. The mean MI exceeds one in most years, indicating an overall upward trend in FS
of the banking sector. The highest MI value is 1.3287 in 2020, suggesting that the financial
capability of banks demonstrated strong resilience during the initial period of the COVID-19
pandemic, in line with evidence of policy-supported stability in Chinese banks (Wu and Olson,
2020). In contrast, the MI falls sharply to 0.7530 in 2021, the lowest level during the sample
period. This deterioration may be associated with pressures on FS in the post-pandemic period.
These pressures may stem from heightened asset quality risks, tighter regulatory oversight, and
shifts in credit allocation patterns, which are supported by the findings of Elnahass et al. (2021)
and Yao and Fan (2025). By 2023, the MI returns to 1.0016, a near-neutral level, showing that
FS in the banking sector has little change compared to the previous year.
16

Table 3: Annual average MI for 104 banks from 2015 to 2023
Year MI TC EC
2015 1.1311 1.0847 1.0572
2016 0.8056 0.8242 0.9567
2017 1.1678 1.1693 1.0109
2018 1.0798 1.0561 1.0251
2019 1.0760 1.0872 0.9973
2020 1.3287 1.3368 1.0066
2021 0.7530 0.6963 1.0930
2022 1.0677 1.0531 1.0183
2023 1.0016 1.0250 0.9867
Notes: This table reports the annual average values of the MI and its two components: TC and EC, over the period 2015–2023. An MI value greater than one indicates an improvement in FS performance relative to the previous year, while a value less than one indicates a decline.
Descriptive statistical analysis: The descriptive statistics of the variables are reported in
Table 4. Specifically, the mean of F SI is 1.0457, with a standard deviation of 0.2781, indicating
that the FS of Chinese commercial banks in the sample remains relatively stable. For F T I,
the average value is 2.7769 with a standard deviation of 0.4801, suggesting some variation in
the development of FinTech across regions. Regarding the control variables, N IIR displays
considerable variation across banks, while CAR and DAR are relatively stable, likely reflect
ing regulatory consistency. It is worth noting that the minimum value of GDPg is −5.6, which
occurred in Shenyang in 2016, highlighting the existence of substantial regional economic dispar
ities and underscoring the necessity of controlling for such heterogeneity in subsequent analyses.
Given the focus of this study, i.e., examining how FinTech affects the FS of commercial banks,
the detailed statistical characteristics of control variables are not further elaborated here.
17

Table 4: Descriptive statistics of all variables
Variable Sample size Mean Std. Dev. Min Max
F SI 936 1.0457 0.2781 0.5464 1.6356
F T I 936 2.7769 0.4801 1.5221 3.7322
GDPg 935 6.2198 2.5265 -5.6000 12.5000
F DL 927 4.2641 1.5934 1.4265 7.9760
LDR 935 0.7492 0.1215 0.5263 0.9809
N IIR 936 21.3664 12.5907 3.6860 51.5334
ROA 936 0.6973 0.2270 0.2532 1.0747
DAR 936 0.9255 0.0135 0.7824 0.9629
T AS 936 26.8395 1.5258 24.0439 31.4309
OEX 936 22.6281 1.5297 19.6937 26.9756
CAR 936 13.4558 1.9846 2.3700 33.8600
Notes: This table shows the explanation and descriptive statistics of all variables. Differences in sample size are due to missing values in control variables.
Baseline regression: According to Equation (8), we use panel data to test the relation between
FinTech and FS, and Table 5 presents results of a two-way fixed effects model. Columns (1)
and (2) report results without additional control variables, whereas Columns (3) and (4) include
them. Moreover, we cluster standard errors at the bank level in all estimations. Columns (1) and
(3) do not include individual fixed effects, while Columns (2) and (4) control for both individual
and time fixed effects.
Several important observations can be drawn. First, the coefficients of F T I on F SI are
negative and statistically significant across all specifications, regardless of whether control vari
ables or fixed effects are included. This relationship remains stable even after accounting for
potential bank-level and time-varying confounders. Further, in Column (4), which incorporates
individual and time fixed effects as well as additional controls, the coefficient on F T I is -0.540,
and statistically significant at the 1% level. This result implies that a one-unit increase in Fin
Tech development is associated with a 0.54-point decline in F SI, i.e., a non-trivial magnitude
relative to its standard deviation. Economically, FinTech may weaken FS of commercial banks
by intensifying disintermediation and shifting customers toward technology-based financial ser
18

vices. This potential mechanism will be empirically examined in the following analysis. Finally,
among the control variables, ROA and OEX are positively and significantly associated with
F SI, confirming the importance of profitability and operational investment for maintaining sta
bility. By contrast, T AS exhibits a significantly negative coefficient, suggesting that excessive
asset expansion can undermine financial stability through resource misallocation and heightened
financial risk. The primary finding remains robust, as the negative impact of F T I persists across
all model specifications.
19

Table 5: Baseline regression
(1) (2) (3) (4)
FinTech Only Full Controls FSI FSI
F T I -0.042∗∗ -0.530∗∗∗ -0.062∗∗∗ -0.540∗∗∗ (0.017) (0.189) (0.023) (0.203)
GDPg -0.036∗∗∗ 0.005 (0.004) (0.007)
F DL -0.002 -0.004 (0.006) (0.028)
LDR 0.063 0.167 (0.083) (0.129)
N IIR -0.000 -0.001 (0.001) (0.001)
ROA 0.184∗∗∗ 0.166∗∗ (0.050) (0.075)
DAR 1.579 2.783∗ (0.982) (1.562)
T AS -0.151∗∗∗ -0.254∗∗ (0.039) (0.108)
OEX 0.130∗∗∗ 0.196∗∗∗ (0.036) (0.063)
CAR 0.012∗∗ 0.010 (0.006) (0.007)
Bank FE NO YES NO YES
Year FE YES YES NO YES
Constant term 1.163∗∗∗ 2.517∗∗∗ 0.766 1.996 (0.048) (0.525) (0.866) (2.471)
Observations 936 936 925 925 R2 0.06 0.42 0.10 0.45
Notes: The dependent variable is the F SI rating from the three-stage network DEA-Malmquist model. Columns (1) and (2) report results without control variables, while Columns (3) and (4) include control variables. Differences in sample size are due to missing values in control variables. The main model controls for individual and time fixed effects. Variable definitions are provided in Table 2. ∗, ∗∗, and ∗∗∗ indicate statistical significance at the 10%, 5%, and 1% levels, respectively. Standard e-
rrors are clustered at the bank level and reported in parentheses. R2 represents the coefficient of determination.
3.2 Robustness tests
We perform a series of robustness tests to validate the consistency of the main findings. Specifi
cally, we examine whether the results remain robust when using alternative TC and EC measures
20

from Equation (7). These measures are components decomposed from the MI applied to F SI.
Furthermore, we alleviate potential endogeneity issues by implementing an instrumental variable
(IV) approach.
IV approach: We include a battery of control variables and apply a two-way fixed effects
model, but the estimation is still influenced by unobserved heterogeneity or omitted variables.
To mitigate these problems, we adopt a strategy with instrumental variables. Specifically, we
implement a two-stage least squares (2SLS) method (Wooldridge, 2010) and a control function
(CF) method (Wooldridge, 2015) to obtain more consistent estimates.
We introduce two instrumental variables. The first instrumental variable (IV1) is the one
period lag of F T I. Due to the temporal precedence over bank financial outcomes, IV1 helps
alleviate potential endogeneity bias. The second instrument (IV2) is the logarithm of the inter
action between the distance to Hangzhou, a recognized FinTech hub, and the average annual
Digital Financial Inclusion Index (excluding the city itself). This variable captures the regional
spillover effects of FinTech development. To ensure the reliability of the instrumental variables
estimation, several diagnostic tests are conducted. The Kleibergen–Paap rk LM and rk Wald F
statistics are used to assess underidentification and weak instrument issues, respectively, while
the Hansen J test examines instrument validity. As shown in the Column (1) of Table 6, both
instruments strongly correlate with F T I. The Kleibergen-Paap rk LM statistic rejects the null
of underidentification (p <0.01), and the rk Wald F statistic (27.377) exceeds the Stock-Yogo
critical value of 19.93, suggesting no weak instrument issue. The Hansen J test also yields an
insignificant p-value (0.1906), confirming the validity of the instruments. Then, let F[ T Ii,t de
note the predicted value from the first-stage regression, and δi and μt indicate the fixed effects
of individual and time, respectively. The instrumental variables include IV1 and IV2. All other
control variables are consistent with those used in the baseline regressions. The IV approach is
conducted by estimating the following 2SLS method Equations (9) and (10):
21

F T Ii,t = ρ0 + ρ1 IV1,i,t + ρ2 IV2,i,t +
2
X
c=1
βc Mc,t +
9
X
c=3
βc Xc,i,t + δi + μt + ξi,t, ∀i ∈ I, ∀t ∈ T,
(9)
F SIi,t = β0 + β1 F[ T Ii,t +
3
X
c=2
βc Mc,t +
10
X
c=4
βc Xc,i,t + δi + μt + ei,t, ∀i ∈ I, ∀t ∈ T.
(10)
As reported in the Column (2) of Table 6, the estimated coefficient on F T I remains sig
nificantly negative after controlling for endogeneity. Overall, the results of this analysis are
consistent with the main findings, namely that FinTech negatively affects FS.
In addition to 2SLS method, we also adopt the CF method as a complementary strategy
to alleviate potential endogeneity. Compared to 2SLS method, the CF method offers greater
flexibility when dealing with heteroskedasticity or complex error structures. The CF method
is specified in Equations (11)–(12). Let ξbi,t denote the residuals from the first-stage regression,
capturing endogeneity effects, while the remaining variables are consistent with those in the
baseline regressions, we obtain
F T Ii,t = ρ0 + ρ1 IV1,i,t + ρ2 IV2,i,t +
2
X
c=1
βc Mc,t +
9
X
c=3
βc Xc,i,t + δi + μt + ξi,t, ∀i ∈ I, ∀t ∈ T,
(11)
F SIi,t = β0 + β1 F T Ii,t + λ ξbi,t +
3
X
c=2
βc Mc,t +
10
X
c=4
βc Xc,i,t + δi + μt + ei,t, ∀i ∈ I, ∀t ∈ T.
(12)
We present the results in the Column (3) of Table 6. The coefficient on F T I remains
significantly negative, consistent with the baseline and 2SLS method estimates. Importantly,
the residual term from the second stage is statistically significant, which suggests that the original
F T I variable suffers from endogeneity. This finding suggests that the CF method successfully
corrects for this bias. Together, these findings reinforce the robustness of the adverse effect of
FinTech development on the FS of commercial banks.
Alternative measure of FS: Given that it is calculated using a three-stage network DEA
Malmquist model, we examine the influence of the internal components of the MI. Specifically,
we decompose the MI into two sub-indicators, TC and EC, and replace F SI with them in the
22

regression model for robustness checks. These two components reflect technological progress
over time and changes in managerial efficiency. Table 3 presents the annual means of these two
indices. As reported in Columns (4) and (5) of Table 6, the signs of the key explanatory variables
remain unchanged, despite the statistical significance of some coefficients declining compared to
the baseline results. This result suggests that the main findings of this study, namely the negative
effect of FinTech on FS of banks, are reasonably robust to alternative specifications.
23

Table 6: Robustness tests
(1) 2SLS & CF 1st
(2) 2SLS 2nd
(3) CF 2nd
(4) TC
(5) EC
F T I -0.878∗∗ -0.878∗∗∗ -0.342∗ -0.237∗
(0.405) (0.304) (0.181) (0.124)
IV1 0.559∗∗∗
(0.069)
IV2 -0.117∗∗∗
(0.034)
ξbi,t 0.840∗∗
(0.374)
GDPg 0.002∗ 0.007 0.007 -0.005 0.011∗∗
(0.001) (0.007) (0.007) (0.004) (0.005)
F DL -0.001 -0.013 -0.013 0.006 -0.006
(0.005) (0.028) (0.026) (0.017) (0.016)
LDR -0.057 0.145 0.145 -0.003 0.203∗∗
(0.035) (0.165) (0.138) (0.111) (0.086)
N IIR -0.000 -0.002∗ -0.002∗ -0.001 -0.000
(0.000) (0.001) (0.001) (0.001) (0.001)
ROA 0.033∗∗ 0.304∗∗∗ 0.304∗∗∗ -0.081 0.205∗∗∗
(0.013) (0.082) (0.072) (0.052) (0.053)
DAR 0.238 2.780∗ 2.780 -0.114 2.822∗∗∗
(0.167) (1.559) (1.705) (1.099) (0.868)
T AS 0.004 -0.289∗∗∗ -0.289∗∗ -0.069 -0.225∗∗∗
(0.017) (0.111) (0.116) (0.072) (0.059)
OEX -0.006 0.220∗∗∗ 0.220∗∗∗ 0.050 0.144∗∗∗
(0.009) (0.065) (0.067) (0.051) (0.042)
CAR 0.002∗∗ 0.007 0.007 0.005 0.003
(0.001) (0.007) (0.007) (0.006) (0.005)
Observations 821 821 821 925 925
R2 0.99 0.45 0.49 0.57 0.17
IV diagnostics for Columns (1)–(3):
Kleibergen-Paap rk LM statistic 112.984 (p-value = 0.0000)
Cragg-Donald Wald F statistic 205.381 (19.93)
Kleibergen-Paap rk Wald F statistic 27.377 (19.93)
Hansen J statistic 1.713 (p-value = 0.1906)
Notes: This table shows the results of robustness tests. Column (1) reports the first-stage regressions of 2SLS and the CF methods. The numbers in parentheses after the Cragg–Donald and Kleibergen–Paap rk Wald F statistics indicate the Stock–Yogo 10% maximal instrumental variables size distortion critical value. Variable definitions are provided in Table 2. ξbi,t denotes the residual term from the first stage of the CF method. Differences in sample size are due to missing values in control variabl-
es and using one-period lagged explanatory variables. All regressions include individual and time fixed effects. *, **, and *** indicate significance at the 10%, 5%, and 1% levels, respectively. Standard errors are clustered at the bank level and reported in parentheses. R2 represents the coefficient of determination.
24

3.3 Economic mechanisms
Building on the baseline regression results, which indicate a negative relationship between Fin
Tech and overall FS of banks, we further explore the potential transmission mechanisms. Fol
lowing the approach of Liang and Renneboog (2017), we conduct separate regressions in two
steps using the stage-level MIs, corresponding to the deposit (M Id), loan (M Il), and profitabil
ity (M Ip) stages. These indices serve as the channel through which FinTech influences FS of
banks. In the first stage, each channel variable is regressed on F T I to obtain the component
explained by FinTech. In the second stage, we regress F SI on the predicted values of channel
variables from the first stage. These predicted values capture the part of FS variation that oper
ates through FinTech-driven channels. Control variables are included in both stages. While this
strategy resembles an IV approach in structure, FinTech is not formally used as an instrument
for channel variables. The specific two-stage model is formally presented in Equations (13) and
(14):
M I(φ)
i,t = α(φ)
0 + α(φ)
1 F T Ii,t +
2
X
c=1
βc Mc,t +
9
X
c=3
βc Xc,i,t + δi + μt + e(φ)
i,t , ∀i ∈ I, ∀t ∈ T, (13)
F SIi,t = κ(φ)
0 + κ(φ)
1
MdI (φ)
i,t +
2
X
c=1
βc Mc,t +
9
X
c=3
βc Xc,i,t + δi + μt + e(φ,2)
i,t , ∀i ∈ I, ∀t ∈ T, (14)
where φ ∈ {d, l, p}5.
The dynamic patterns of banking efficiency across different operational stages are illustrated
in Table 7, which reports the annual averages of MIs for each stage from 2015 to 2023. As shown,
the indices in most years exceed one across all stages, suggesting a generally positive performance
in FS across stages. In 2020, M Id peaked at 1.7710, reflecting a sharp improvement in deposit
efficiency during the early period of the COVID-19 pandemic. In contrast, M Ip dropped to
0.7104 in 2021, which is the lowest among all years, indicating a substantial decline in the
earning capacity of banks. This deterioration is likely attributable to mounting pressure from
non-performing loans, narrowing interest margins, and a tightening regulatory environment.
5The superscript φ ∈ d, l, p denotes the three sub-stages of the FS of banks: the deposit (d), the loan (l), and the profitability (p) stages. Each e(φ)
i,t represents the regression residual corresponding to the respective stage.
25

Table 7: Annual average MIs for each stage from 2015 to 2023
Year Deposit stage Loan stage Profitability stage
M Id M Il M Ip
2015 1.1972 1.1700 1.1643
2016 0.7285 0.8477 0.9187
2017 1.4727 1.0662 1.1391
2018 1.0590 1.0821 1.1605
2019 1.0331 1.0787 1.1783
2020 1.7710 1.1711 1.2709
2021 0.7473 0.8932 0.7104
2022 1.0021 1.0398 1.2527
2023 0.8125 0.9850 1.3863
Table 8 reports the results of the two-stage analysis. In the first stage, we find that FinTech
development is negatively associated with financial efficiency in the loan and profitability stages.
It implies that FinTech companies have eroded the market share of banks in these key areas
by offering lower-cost and more efficient financial services. As a result, they exert substantial
competitive pressure on traditional banking operations. In the second stage, we regress F SI on
the FinTech-predicted MIs from the deposit, loan, and profitability stages. The results indicate
that efficiency in all three stages is positively associated with FS. These findings suggest that
the negative impact of FinTech on the financial efficiency of core banking operations may partly
contribute to the overall adverse effect. We note, however, that this analysis is not definitive,
as FinTech probably also operates through alternative channels or mechanisms that negatively
affect FS of banks.
26

Table 8: Mechanism analysis
(1) (2) (3) (4) (5) (6) M Id F SI M Il F SI M Ip F SI
F T I -0.324 -0.404∗ -0.690∗ (0.305) (0.209) (0.358)
MdId 1.666∗∗∗ (0.628)
MdIl 1.000∗∗∗ (0.377)
MdIp 0.782∗∗∗ (0.295)
GDPg 0.010 -0.011 0.013∗∗ 0.000 -0.007 0.011 (0.010) (0.010) (0.006) (0.008) (0.013) (0.007)
F DL 0.013 -0.026 0.013 -0.000 0.012 -0.014 (0.038) (0.031) (0.021) (0.027) (0.056) (0.029)
LDR 0.302 -0.336 -0.155 0.000 0.301 -0.069 (0.256) (0.242) (0.148) (0.150) (0.226) (0.165)
N IIR -0.002∗∗ 0.003 -0.001 -0.000 -0.001 -0.001 (0.001) (0.002) (0.001) (0.001) (0.002) (0.001)
ROA 0.145 -0.075 0.163∗∗ 0.000 0.168 0.034 (0.118) (0.117) (0.081) (0.097) (0.135) (0.089)
DAR 1.045 1.041 1.477 0.000 4.688∗ -0.884 (2.198) (1.786) (1.278) (2.013) (2.600) (2.241)
T AS -0.185 0.054 -0.193∗∗ -0.000 -0.559∗∗∗ 0.183 (0.137) (0.172) (0.082) (0.156) (0.198) (0.212)
OEX 0.098 0.033 0.169∗∗∗ 0.000 0.411∗∗∗ -0.125 (0.110) (0.091) (0.062) (0.100) (0.112) (0.140)
CAR 0.006 -0.000 0.009 0.000 0.013 -0.000 (0.011) (0.008) (0.007) (0.008) (0.015) (0.008)
Constant term 3.288 -3.483 1.898 -0.000 3.905 -1.058 (3.186) (2.952) (2.295) (2.464) (4.851) (2.551)
Bank FE YES YES YES YES YES YES
Year FE YES YES YES YES YES YES
Observations 925 925 925 925 925 925 R2 0.49 0.45 0.27 0.45 0.28 0.45
Notes: This table reports results on potential mechanisms (“channels”) behind the link between FinTech and FS. The channel variables include the MIs of the deposit, loan, and profitability stages, forming the F SI jointly. Variable definitions are provided in Table 2. Each set of tests contains two stages of regression. In the first stage, F T I is regressed on the channel variables to generate its predicted values. In the second stage, F SI is regressed on the channel variable “predicted” from th-
e first-stage regression. MdId, MdIl, and MdIp denote the stage-level predicted MIs from Equation (13). ∗, ∗∗, and ∗∗∗ indicate statistical significance at the 10%, 5%, and 1%levels, respectively. Standard errors are clustered at the bank level and reported in parentheses. R2 represents the coefficient of determination.
27

3.4 Heterogeneity analysis
Based on the baseline regression, we further classify the 104 bank samples according to inno
vation level and marketization degree. This classification allows us to investigate how FinTech
influences FS of different types of commercial banks.
Firstly, under a well-established market competition mechanism, banks face the pressure
to survive the fittest. This pressure drives them to open new markets, launch new products,
and invest in new technologies, thereby achieving patent-driven innovation (Bos et al., 2013).
Against this background, the innovation level of banks is commonly measured by the number of
patents they hold. Previous studies have found that banks achieved cost reduction and efficiency
improvement by establishing technological barriers. Meanwhile, banks strengthen their market
position through differentiated services (Buchak et al., 2018). Based on these insights, banks
with more patents will likely experience less significant impacts from FinTech on FS of banks.
Guided by the above analysis, we use whether the cumulative patent count of a bank exceeds
the cross-sectional median as the basis for subsample grouping6. The regression results are
shown in Columns (1) and (2) of Table 9. These results display that FinTech significantly and
negatively impacts FS for banks with cumulative patent counts below the median. In contrast,
the regression coefficient is insignificant for those above the median. This subsample analysis
supports our earlier reasoning, i.e., the adverse effect of FinTech on FS is primarily concentrated
among banks with fewer patents.
Secondly, considering the degree of marketization, we classify the banks into two groups:
listed and non-listed. We do so because the listed banks typically have more diversified financing
options, healthier capital positions, and more formalized risk management practices. Non-listed
banks often operate under softer market constraints, relying heavily on private funding sources
and facing limited external oversight. These structural advantages facilitate greater investment
in technological development and help listed banks realize economies of scale (Beccalli et al.,
2015). Consequently, listed banks are likely to experience only a minor impact of FinTech
development on their FS.
We estimate separate regressions for listed and non-listed banks to test this hypothesis. The
6The patent data is sourced from the China National Intellectual Property Administration.
28

results, reported in Columns (3) and (4) of Table 9, reveal a notable difference in how FinTech
development affects the two groups. For listed banks, the estimated effect is not statistically
significant, which suggests a certain degree of resilience to the disruptions brought by FinTech.
Conversely, we find a significant negative relationship between FinTech development and the FS
of non-listed banks. This difference reflects that banks vary in their ability to handle external
shocks. Listed banks have more capital, funding sources, and transparent governance, enabling
them to better handle challenges from technological changes. Non-listed banks, in comparison,
often operate with thinner buffers and less institutional support, leaving them more vulnerable
to the pressure of FinTech advancement.
29

Table 9: Heterogeneity analysis
(1) (2) (3) (4) HighInnov LowInnov Listed NonListed FSI FSI FSI FSI
F T I -0.197 -0.644∗∗ -0.509 -0.506∗∗ (0.467) (0.261) (0.393) (0.239)
GDPg 0.024∗∗ -0.000 0.019 0.000 (0.012) (0.008) (0.012) (0.008)
F DL 0.083∗∗ -0.044 0.010 -0.023 (0.034) (0.035) (0.041) (0.037)
LDR -0.057 0.161 0.160 0.075 (0.278) (0.166) (0.181) (0.175)
N IIR -0.001 -0.002∗ 0.001 -0.002∗ (0.003) (0.001) (0.003) (0.001)
ROA 0.142 0.156∗∗ 0.238∗ 0.194∗ (0.139) (0.074) (0.131) (0.098)
DAR 2.138 3.455∗∗ 6.627∗∗ 2.483 (3.062) (1.597) (3.060) (1.653)
T AS -0.355∗∗ -0.148 -0.654∗∗∗ -0.269∗∗ (0.136) (0.115) (0.236) (0.114)
OEX 0.464∗∗∗ 0.175∗∗∗ 0.304∗∗ 0.193∗∗∗ (0.094) (0.063) (0.116) (0.072)
CAR -0.006 0.019∗∗ 0.002 0.016 (0.004) (0.010) (0.006) (0.010)
Constant term -2.036 -0.684 7.103 2.616 (3.001) (2.382) (5.740) (2.821)
Bank FE YES YES YES YES
Year FE YES YES YES YES
Observations 228 675 298 618 R2 0.72 0.45 0.69 0.38
Notes: This table presents the regression results of the heterogeneity analysis. Columns (1) and (2) show the results for subsamples with patent counts above and below the annual median patent count of all banks, respectively; Columns (3) and (4) report results for listed and non-listed banks, respectively. Differences in sample size are due to missing values in control variables. The model controls for individual and time fixed effects. Variable definitions are provided in Table 2. ∗, ∗∗, and ∗∗∗-
 indicate statistical significance at the 10%, 5%, and 1% levels, respectively. Standard errors are clustered at the bank level and reported in parentheses. R2 represents the coefficient of determination.
30

4 Conclusion
In this paper, we provide evidence that FinTech undermines the FS of commercial banks. Our
main findings are as follows. First, we measure the FS of 104 Chinese commercial banks from
2015 to 2023 using a three-stage network DEA-Malmquist model. Except for the period affected
by the COVID-19 pandemic, the FS of banks generally exhibits a steady upward trend. Second,
empirical results across multiple model specifications, including two-way fixed effects and an IV
approach, reveal that FinTech significantly diminishes the FS of commercial banks. Furthermore,
the mechanism analysis reveals that the impact of FinTech mainly operates through the erosion
of the loan and profitability efficiencies of banks. In addition, heterogeneity analysis indicates
that banks with fewer patents and non-listed experience a greater impact from FinTech.
This paper offers an initial exploration of the impact of FinTech on FS of Chinese com
mercial banks, which has rarely been studied, and we contribute by bridging this gap. An
open question remains as to whether the rise of FinTech will ultimately foster complementary
benefits for traditional banks in the future. Some studies find that the responses of banks to
FinTech can improve their performance. Incumbent banks that invest in or collaborate with Fin
Tech firms may achieve synergies that partly offset the negative impacts of competition (Hornuf
et al., 2021). However, other research argues that competition, interest margins, and the ad
verse effects of alternative digital credit might offset these gains (Cuadros-Solas et al., 2023).
This situation is particularly the case for banks lacking innovation capabilities or market dis
cipline. Moreover, the net effect could also depend on how regulatory frameworks evolve to
balance innovation with financial stability (Vives, 2019). Future research could quantify the
benefits and costs of FinTech adoption for different types of banks. It also could explore how
technological innovation interacts with strategic adaptation, and whether the adverse effects we
document persist, attenuate, or reverse over time. Such analyses would provide valuable insights
for policymakers and bank managers seeking to leverage technological development while safe
guarding FS. In addition, besides FinTech, other factors might also influence the FS of banks.
Future research could investigate alternative explanations from the perspectives of green finance,
macroeconomic policy shocks, and internal governance structures to further enrich the relevant
literature. Methodologically, future research could also consider noise-adjusted approaches, such
31

as the NSCNLS and NStoNED models proposed by Wang et al. (2025). These models extend
network DEA to account for stochastic noise and may provide more robust efficiency estimates
in multi-stage banking processes.
Acknowledgements
This work is supported by the Young Scientists Fund of the National Natural Science Foundation
of China (grant number 72301177), the Shanghai Pujiang Program (grant number 22PJC091),
and the National Social Science Fund of China (grant number 24BGL062).
References
Abu Wadi, R., Bashayreh, A., Khalaf, L., and Abdelhadi, S. (2022). Financial sustainability and
outreach in microfinance institutions: Evidence from MENA countries. Journal of Sustainable
Finance & Investment, 12(1):238–250.
Aharon, D. Y., Ali, S., and Naved, M. (2023). Too big to fail: The aftermath of Silicon Valley
Bank (SVB) collapse and its impact on financial markets. Research in International Business
and Finance, 66:102036.
Akhtaruzzaman, M., Boubaker, S., and Goodell, J. W. (2023). Did the collapse of Silicon Valley
Bank catalyze financial contagion? Finance Research Letters, 56:104082.
Assaf, A. G., Matousek, R., and Tsionas, E. G. (2013). Turkish bank efficiency: Bayesian
estimation with undesirable outputs. Journal of Banking & Finance, 37(2):506–517.
Avkiran, N. K. (2015). An illustration of dynamic network DEA in commercial banking including
robustness tests. Omega, 55:141–150.
Baltagi, B. H. (2008). Econometric Analysis of Panel Data. John Wiley & Sons.
Bansal, P., Mehra, A., and Kumar, S. (2022). Dynamic metafrontier Malmquist–Luenberger pro
ductivity index in network DEA: An application to banking data. Computational Economics,
59(1):297–324.
32

Barros, C. P., Managi, S., and Matousek, R. (2009). Productivity growth and biased technolog
ical change: Credit banks in Japan. Journal of International Financial Markets, Institutions
and Money, 19(5):924–936.
Beccalli, E., Anolli, M., and Borello, G. (2015). Are European banks too big? Evidence on
economies of scale. Journal of Banking & Finance, 58:232–246.
Benston, G. J. (1965). Branch banking and economies of scale. The Journal of Finance,
20(2):312–331.
Bogan, V. L. (2012). Capital structure and sustainability: An empirical study of microfinance
institutions. Review of Economics and Statistics, 94(4):1045–1058.
Bos, J. W., Kolari, J. W., and van Lamoen, R. C. (2013). Competition and innovation: Evidence
from financial services. Journal of Banking & Finance, 37(5):1590–1601.
Buchak, G., Matvos, G., Piskorski, T., and Seru, A. (2018). Fintech, regulatory arbitrage, and
the rise of shadow banks. Journal of Financial Economics, 130(3):453–483.
Casu, B., Girardone, C., and Molyneux, P. (2004). Productivity change in European banking:
A comparison of parametric and non-parametric approaches. Journal of Banking & Finance,
28(10):2521–2540.
Caves, D. W., Christensen, L. R., and Diewert, W. E. (1982). The economic theory of index
numbers and the measurement of input, output, and productivity. Econometrica: Journal of
the Econometric Society, 50(6):1393–1414.
Charnes, A., Cooper, W. W., and Rhodes, E. (1978). Measuring the efficiency of decision making
units. European Journal of Operational Research, 2(6):429–444.
Cheng, M. and Qu, Y. (2020). Does bank FinTech reduce credit risk? Evidence from China.
Pacific-Basin Finance Journal, 63:101398.
Cook, W. D., Zhu, J., Bi, G., and Yang, F. (2010). Network DEA: Additive efficiency decom
position. European Journal of Operational Research, 207(2):1122–1129.
33

Cuadros-Solas, P. J., Cubillas, E., and Salvador, C. (2023). Does alternative digital lending
affect bank performance? Cross-country and bank-level evidence. International Review of
Financial Analysis, 90:102873.
Dabi, R. S. K., Nugraha, Disman, and Sari, M. (2023). Capital structure, financial perfor
mance and sustainability of microfinance institutions (MFIs) in Ghana. Cogent Economics &
Finance, 11(2):2230013.
Elnahass, M., Trinh, V. Q., and Li, T. (2021). Global banking stability in the shadow of Covid-19
outbreak. Journal of International Financial Markets, Institutions and Money, 72:101322.
F ̈are, R., Grosskopf, S., Norris, M., and Zhang, Z. (1994). Productivity growth, technical
progress, and efficiency change in industrialized countries. The American Economic Review,
pages 66–83.
Fonchamnyo, D. C., Anyangwe, T., Chantal, N. N., and Dinga, G. D. (2023). Capital struc
ture and financial sustainability: Stakes of microfinance institutions in Bamenda, Cameroon.
Future Business Journal, 9(1):41.
Fukuyama, H., Matousek, R., and Tzeremes, N. G. (2020). A Nerlovian cost inefficiency two
stage DEA model for modeling banks’ production process: Evidence from the Turkish banking
system. Omega, 95:102198.
Gao, J. (2022). Comparison of fintech development between China and the United States.
International Journal of Innovative Science and Research Technology, 6563524:1272–6.
Guo, F., Wang, J., Wang, F., Kong, T., Zhang, X., and Cheng, Z. (2020). Measuring China’s
digital financial inclusion: Index compilation and spatial characteristics. China Economic
Quarterly, 19(4):1401–1418.
Gupta, P. K. and Sharma, S. (2023). Literature review on effect of microfinance institutions on
poverty in South Asian countries and their sustainability. International Journal of Emerging
Markets, 18(8):1827–1845.
34

Hornuf, L., Klus, M. F., Lohwasser, T. S., and Schwienbacher, A. (2021). How do banks interact
with fintech startups? Small Business Economics, 57:1505–1526.
Hsiao, C. (2014). Analysis of Panel Data. Cambridge University Press.
Hu, D., Zhao, S., and Yang, F. (2024). Will fintech development increase commercial banks
risk-taking? Evidence from China. Electronic Commerce Research, 24(1):37–67.
Jaffry, S., Ghulam, Y., Pascoe, S., and Cox, J. (2007). Regulatory changes and productivity of
the banking sector in the Indian sub-continent. Journal of Asian Economics, 18(3):415–438.
Kinde, B. A. (2012). Financial sustainability of microfinance institutions (MFIs) in Ethiopia.
European Journal of Business and Management, 4(15):1–10.
Kohl, S., Schoenfelder, J., F ̈ugener, A., and Brunner, J. O. (2019). The use of data envelopment
analysis (DEA) in healthcare with a focus on hospitals. Health Care Management Science,
22(2):245–286.
Lee, C.-C., Li, X., Yu, C.-H., and Zhao, J. (2021). Does fintech innovation improve bank
efficiency? Evidence from China’s banking industry. International Review of Economics &
Finance, 74:468–483.
Lee, C.-C., Ni, W., and Zhang, X. (2023). Fintech development and commercial bank efficiency
in China. Global Finance Journal, 57:100850.
Li, L., Gao, W., and Gu, W. (2023). Fintech, bank concentration and commercial bank profitabil
ity: Evidence from Chinese urban commercial banks. Finance Research Letters, 57:104234.
Li, X., Xu, G., Wu, J., Xu, C., and Zhu, Q. (2024). Evaluation of bank efficiency by considering
the uncertainty of nonperforming loans. Omega, 126:103069.
Liang, H. and Renneboog, L. (2017). On the foundations of corporate social responsibility. The
Journal of Finance, 72(2):853–910.
Maeenuddin, S. A. H., Nassir, A., and Hashim, P. M. (2023). Developing an index for the mea
surement of financial sustainability of microfinance providers: A theoretical review. Central
European Management Journal, 31(1):197–205.
35

Malmquist, S. (1953). Index numbers and indifference surfaces. Trabajos de estadı ́stica, 4(2):209
242.
Matthews, K. (2013). Risk management and managerial efficiency in Chinese banks: A network
DEA framework. Omega, 41(2):207–215.
Metrick, A. (2024). The failure of Silicon Valley Bank and the panic of 2023. Journal of
Economic Perspectives, 38(1):133–152.
Murinde, V., Rizopoulos, E., and Zachariadis, M. (2022). The impact of the FinTech revolution
on the future of banking: Opportunities and risks. International Review of Financial Analysis,
81:102103.
Najam, H., Abbas, J., Alvarez-Otero, S., Dogan, E., and Sial, M. S. (2022). Towards green
recovery: Can banks achieve financial sustainability through income diversification in ASEAN
countries? Economic Analysis and Policy, 76:522–533.
Portela, M. C. and Thanassoulis, E. (2010). Malmquist-type indices in the presence of negative
data: An application to bank branches. Journal of Banking & Finance, 34(7):1472–1483.
Prior, D., Tortosa-Ausina, E., Garcı ́a-Alcober, M. P., and Illueca, M. (2019). Profit efficiency
and earnings quality: Evidence from the Spanish banking industry. Journal of Productivity
Analysis, 51(2):153–174.
Qiu, L., Yu, R., Hu, F., Zhou, H., and Hu, H. (2023). How can China’s medical manufacturing
listed firms improve their technological innovation efficiency? An analysis based on a three
stage DEA model and corporate governance configurations. Technological Forecasting and
Social Change, 194:122684.
Rom ̄anova, I. and Kudinska, M. (2016). Banking and Fintech: A challenge or opportunity? In
Contemporary Issues in Finance: Current Challenges from Across Europe, volume 98, pages
21–35. Emerald Group Publishing Limited.
Sealey Jr., C. W. and Lindley, J. T. (1977). Inputs, outputs, and a theory of production and
cost at depository financial institutions. The Journal of Finance, 32(4):1251–1266.
36

Sherman, H. D. and Gold, F. (1985). Bank branch operating efficiency: Evaluation with data
envelopment analysis. Journal of Banking & Finance, 9(2):297–315.
Shi, Y., Charles, V., and Zhu, J. (2025). Bank financial sustainability evaluation: Data envel
opment analysis with random forest and shapley additive explanations. European Journal of
Operational Research, 321(2):614–630.
Shi, Y., Zhu, J., and Charles, V. (2020). Data science and productivity: A bibliometric re
view of data science applications and approaches in productivity evaluations. Journal of the
Operational Research Society, 72(5):975–988.
Staub, R. B., Souza, G. d. S., and Tabak, B. M. (2010). Evolution of bank efficiency in Brazil:
A DEA approach. European Journal of Operational Research, 202(1):204–213.
Thakor, A. V. (2020). Fintech and banking: What do we know? Journal of Financial Interme
diation, 41:100833.
Vives, X. (2019). Digital disruption in banking. Annual Review of Financial Economics,
11(1):243–272.
Wang, K., Huang, W., Wu, J., and Liu, Y.-N. (2014). Efficiency measures of the Chinese
commercial banking system using an additive two-stage DEA. Omega, 44:5–20.
Wang, R., Liu, J., and Luo, H. (2021a). Fintech development and bank risk taking in China.
The European Journal of Finance, 27(4-5):397–418.
Wang, Y., Xiuping, S., and Zhang, Q. (2021b). Can fintech improve the efficiency of commercial
banks? —An analysis based on big data. Research in International Business and Finance,
55:101338.
Wang, Z., Yang, M., Liang, L., and Zhu, J. (2025). A nonparametric least-squares model in
network data envelopment analysis. European Journal of Operational Research. In press.
Wei, X. and Zhao, R. (2024). Evaluation and spatial convergence of carbon emission reduction
efficiency in China’s power industry: Based on a three-stage DEA model with game cross
efficiency. Science of The Total Environment, 906:167851.
37

Wooldridge, J. M. (2010). Econometric Analysis of Cross Section and Panel Data. MIT Press.
Wooldridge, J. M. (2015). Control function methods in applied econometrics. Journal of Human
Resources, 50(2):420–445.
Wry, T. and Zhao, E. Y. (2018). Taking trade-offs seriously: Examining the contextually con
tingent relationship between social outreach intensity and financial sustainability in global
microfinance. Organization Science, 29(3):507–528.
Wu, D. D. and Olson, D. L. (2020). The effect of COVID-19 on the banking sector. In Pandemic
Risk Management in Operations and Finance: Modeling the Impact of COVID-19, pages 89
99. Springer.
Xie, Q., Xu, Q., Chen, L., Jin, X., Li, S., and Li, Y. (2022). Efficiency evaluation of China’s
listed commercial banks based on a multi-period leader-follower model. Omega, 110:102615.
Yao, J. and Fan, J. (2025). The impact of policy uncertainty and risk taking on the credit
resource allocation of urban commercial banks. International Review of Economics & Finance,
97:103766.
Yu, M.-M., Lin, C.-I., Chen, K.-C., and Chen, L.-H. (2021). Measuring Taiwanese bank per
formance: A two-system dynamic network data envelopment analysis approach. Omega,
98:102145.
Zeller, M. and Meyer, R. L. (2002). The Triangle of Microfinance: Financial Sustainability,
Outreach, and Impact. The Johns Hopkins University Press.
Zhang, Y.-J., Liang, T., Jin, Y.-L., and Shen, B. (2020). The impact of carbon trading on
economic output and carbon emissions reduction in China’s industrial sectors. Applied Energy,
260:114290.
38

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:42.040Z
- **Text Length:** 70728 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 38 of 38
