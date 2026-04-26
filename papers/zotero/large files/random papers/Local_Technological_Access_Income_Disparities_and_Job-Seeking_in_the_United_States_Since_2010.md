# PDF Document: Wu - 2025 - Local Technological Access, Income Disparities, and Job-Seeking in the United States Since 2010.pdf

**File Path:** Wu - 2025 - Local Technological Access, Income Disparities, and Job-Seeking in the United States Since 2010.pdf

**Processed Date:** 2026-02-10T18:16:20.488Z

**File Size:** 1724.84 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3211

**Title:** Local Technological Access, Income Disparities, and Job-Seeking in the United States Since 2010

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Local Technological Access, Income
Disparities, and Job-Seeking in the United
States Since 2010
Shaolong Wu †∗
Initial Draft: Dec, 2021; This version: June, 2024
Abstract
In the modern U.S. labor market, digital infrastructures strongly influence how in
dividuals locate opportunities, build skills, and advance wages. Regional differences in
computing access, broadband coverage, and digital literacy have significant labor impli
cations for equity and sustainability. Drawing on longitudinal data from the NLSY97
(National Longitudinal Surveys of Youth) cohort, this study examines how place-based
technological factors, personal demographics, household characteristics, and education
shape income levels and decisions to seek new employment. The regression analyses
reveal that educational attainment, marital status, and frequency of Internet usage
strongly predict both wages and individuals’ job-seeking intensity. Regional dispari
ties in income underscore the need for more localized interventions to ensure equitable
access to technology. This study raises key questions about how digital infrastructures
can reinforce or challenge systemic inequalities in underserved communities.
Key Takeaways:
1. Demographic and Personal Factors: Personal demographics, living habits,
and family backgrounds play a crucial role in shaping wages and income for indi
viduals born in the 1980s and 1990s, particularly as technological advancements
redefine income dynamics.
∗Harvard Business School, Harvard University: lorrywu@g.harvard.edu †I thank Paul Shaman for his generous advice and Jipeng Liu and Utsav Schurmans for helpful comments.
1
arXiv:2511.05294v1 [cs.CY] 7 Nov 2025

2. Job-Seeking Determinants: The study identifies key demographic and per
sonal factors that determine the likelihood of seeking full-time employment in the
United States since 2010.
3. Policy and Sustainability Implications: Addressing digital inequities through
targeted interventions can promote greater equity and sustainability in regional
labor markets.
JEL classification: J15, J21, J62
Keywords: Demographic factors, labor income, household situation, digital infras
tructure, job search, sustainability, technology and economy
1 Introduction
1.1 Background Literature Review
This paper contributes to both the literature on the factors affecting labor income and
the literature on job search. From the 1980s to the 2000s, the workforce has become more
gender-balanced, with higher wages and participation rates for women Blau and Kahn, 2007.
Wage rates, household income, and job-seeking behaviors are critical aspects that charac
terize American workers’ income dynamics. What demographic, personal behavioral, and
situational variables determine labor income and job-seeking behaviors?
Many factors influencing labor income have been examined. Previous research finds a
positive impact of parents’ education and the child’s schooling conditions on future income
Betts, 1995, studies the impact of having a first child on female labor participation Cristia,
2008, the influence of no-fault divorce laws on women’s labor Genadek et al., 2007, the labor
market outcomes of having a GED Song, 2011, and has used probit and OLS regression to
study the impact of age, marital status, education, and health conditions on women’s labor
supply Bradley et al., 2002.
The evolution of technology and artificial intelligence has introduced new dimensions
to labor income studies. Advancements in technology have fundamentally altered the skill
content of jobs, creating new opportunities while rendering certain skills obsolete Autor et
al., 2003. Recent studies on generative AI explore its transformative impact on workplace
productivity and labor dynamics. Generative AI tools can significantly enhance productiv
ity and quality in knowledge-intensive roles, suggesting a potential reshaping of workforce
2

hierarchies and skill prioritization Brynjolfsson et al., 2023. The uneven effects of generative
AI on entrepreneurial performance reveal disparities in outcomes based on users’ ability to
effectively leverage AI tools Otis et al., 2024. Experimental evidence on how AI adoption
influences productivity and decision-making processes among knowledge workers underscores
the complexities of navigating technological frontiers Dell’Acqua et al., 2023. These changes
in skill demands and productivity impacts highlight the importance of understanding how
workers adapt to rapidly changing environments, particularly in the context of uneven access
to digital infrastructure and AI-driven tools.
In terms of job-seeking behaviors, researchers have established various predictors of these
actions. A longitudinal model of demographic, personal, and situational variables predic
tive of job-seeking behavior has been developed Wanberg et al., 1996. The two prominent
motivators of job-search intensity are identified as commitment to work and financial needs
Wanberg et al., 1999. Self-regulation and the need for reemployment also play a critical role
in driving job-seeking behaviors Creed et al., 2009. Identity has been shown to significantly
influence economic decision-making, including labor market participation and job-seeking
intensity Akerlof and Kranton, 2000. Understanding these interactions requires a nuanced
approach that accounts for both individual motivations and structural factors.
The household and social implications of labor decisions and outcomes are substantial.
Households adjust their spending in response to unemployment, shedding light on the finan
cial needs that drive job-seeking intensity Ganong and Noel, 2019. The economic impacts
of the COVID-19 pandemic on labor market outcomes have been comprehensively analyzed,
highlighting the effects on different sectors and demographic groups Chetty et al., 2024. The
rise of alternative work arrangements, such as gig and contract work, and their implications
for labor income and job stability have also been explored, providing insights into changes
in job-seeking behavior and income patterns in the contemporary labor market Katz and
Krueger, 2019.
By building more holistic models to predict labor income and job-seeking willingness
and intensity, our study extends these conversations to the more digitalized modern setting
since 2010, where digital infrastructure and local contexts, such as regional differences in
broadband access and online job-seeking tools, play a central role. Despite rapid technological
3

progress, a ”modern productivity paradox” persists, where the economic benefits of these
advancements are not evenly distributed Brynjolfsson et al., 2017. Attention frictions in the
external public perceptions of corporations, which reinforce geographical disparities, have
also been captured in recent research Wu, 2024.
The rise of remote work platforms has fundamentally changed the landscape of job
seeking and labor markets Horton, 2017. Digital job boards, algorithmic hiring systems, and
the interplay of formal and informal strategies in navigating infrastructural and economic
challenges in emerging markets have further emphasized the centrality of digitalization to
questions of equity and sustainability in contemporary labor markets Eaglin and Fang, 2021.
Our study situates itself within this evolving landscape, addressing how access to and usage
of digital infrastructure mediate labor market outcomes.
1.2 Motivations
Pioneers in labor income and supply studies focused on married women in heterosexual
binary families, laying foundational insights into these dynamics Mincer, 1996, Heckman and
Macurdy, 1980, Mroz, 1987. However, changes in social values, family structures, and labor
market conditions have vastly altered these considerations. The rise of same-sex marriages,
single-parent families, improved women’s status, and higher educational attainment have
significantly shifted the landscape.
Previous research that examines one unique aspect of labor income factors often has its
limitations. The effect of education, for instance, should be studied with more categories
rather than a binary measure of whether one completed a GED Song, 2011. This is partic
ularly important given the increasing percentage of people achieving high school education
and beyond—77.2
1.3 Research Questions
I address three key research questions: First, How do local computing contexts (e.g., fre
quency of Internet usage) and regional economic conditions jointly influence wage progression
among U.S. workers born in the 1980s and 1990s? Second, To what extent do differences in
digital access and usage intensify or mitigate income disparities and job-seeking behaviors
4

across diverse regions of the U.S.? Third, Can I observe place-based patterns that sug
gest certain communities or demographics face structural disadvantages related to digital
infrastructure, impacting their labor income or propensity to search for jobs?
The central approach here is to explore the factors that impact the income and job
seeking status of a representative cohort born in the 1980s in the United States and are the
mainstay of the American labor force. To narrow the focus, I study the cohort of NLSY
(National Longitudinal Surveys of Youth) born in the 1980s. The National Longitudinal
Survey of Youth 1979 (NLSY79) is a sample of 12,686 men and women born during the
years 1957 through 1964 and living in the United States when the survey began. Since
people of the 1990s are just getting married and not having diverse marital and household
statuses, and people of the 2000s and younger are not mostly entering the labor force, our
data sets of income factors based on the NLSY97 cohort is the most up-to-date cohort worth
analyzing. In the data set, 8984 respondents (4599 male, 4385 female) were surveyed 4 times
respectively in 2011, 2013, 2015, and 2017.
I seek to understand the personal and household income dynamics of people born in
the 1980s from 2010 to 2020 (before COVID-19). I want to consider what demographic
(such as marital), personal (such as education, substance use), and situational factors play a
significant role in determining the wage rates of the primary jobs of the individuals, household
income, and spouse income. I want to examine the patterns of influence of these factors over
a representative time frame of 2010 to 2020. Lastly, I will seek to build a model that predicts
the odds that an individual will search for new full-time jobs and makes interpretations.
2 Data
2.1 Raw Data
I use the National Longitudinal Surveys of Youth (NLSY) from the Bureau of Labor
Statistics1. The NLSY972 consists of a nationally representative sample of 8,984 men and
women born between 1980 and 1984, living in the United States at the initial survey in
1The data set is free and open to the public at: https://www.bls.gov/nls/home.html 2The introductions of the data set are quoted from the official website of the National Longitudinal Survey of Youth. https://www.nlsinfo.org/
5

1997. Participants were aged 12 to 16 as of December 31, 1996. Interviews were conducted
annually from 1997 to 2011 and biennially thereafter. The ongoing cohort has been surveyed
18 times as of now. Data are available from Round 1 (1997-98) through Round 18 (2017
18)3. In addition to personal demographics, education, and marital status, I incorporate
variables capturing Internet usage frequency—an important measure of technological access
in different local contexts.
The major sections of survey questions (variables) include Education, Training & Achieve
ment Scores, Employment, Household, Geography & Contextual Variables, Parents, Family
Process & Childhood, Dating, Marriage & Cohabitation, Sexual Activity, Pregnancy & Fer
tility, Children, Income, Assets & Program Participation, Health: Conditions & Practices,
Attitudes, Expectations, Non-Cognitive Tests, Activities, and Crime & Substance Use. I
handle the missing data of certain variables (such as e.g., spouse’s income in 2017) conser
vatively to preserve integrity.
2.2 Processed Data
The bulk of our analysis is based on four data sets named
income factors 2011, income factors 2013,
income factors 2015, and income factors 2017, which contain variables surveyed in the
respective years and are selected from NLSY97 rounds 1-18. The major factors used in our
data sets include sex, spouse income in the previous year, household gross income in the
previous year, hourly wage rates in the previous year, region, whether job-seeking in the
past three months, highest degree obtained, unemployment status (measured as the number
of weeks unemployed in the last year), substance usage status (smoking and marijuana),
household size, and income-to-poverty ratios. The summary statistics are presented as fol
lows.
3Please refer to the Appendix for the processed data sets.
6

Table 1: Mean Sample Characteristics of income factors (sub-dataset of NLSY)a
Mean of numerical variables
2011 2013 2015 2017
Hourly wage rates of primary job
17.930 21.330 -b 25.220
Spouse income last year
37929 43310 47327 53567
Household gross income last year
63160 67521 73962 82994
Household size 3.224 3.333 3.392 3.460
Unemployed weeks last year
1.358 2.515 1.936 1.358
Marijuana/smoke usage percentage
0.170 (marijuana) 0.239 (smoke) 0.163 (marijuana) -c
a There are multiple skips and invalid data entries: refusal (-1), don’t know (-2), invalid skip (-3), valid skip (-4), non-interview (-5). Here, the sample means refer to the mean of the sample when these are excluded. b The 2015 data set does not have hourly wage. For regression models, I replace it with the individual’s total income that year. c The 2017 data set does not have marijuana usage variable.
7

Table 2: Distribution of Categorical Variables of income factors (sub-dataset of NLSY)d
Distribution of Categorical Variables
2011 2013 2015 2017
Internet usage frequency
3754 (several times a day), 733 (once a day), 326 (less than once a day)
5201 (several times a day), 723 (once a day), 1091 (less than once a day)
4513 (several times a day), 922 (once a day), 1844 (less than once a day)

Marital status 4144 (never married), 2653 (married), 114 (separated), 419 (divorced), 11 (widowed)
3522 (never married), 2934 (married), 84 (separated), 546 (divorced), 16 (widowed)
4144 (never married), 2653 (married), 114 (separated), 479 (divorced), 11 (widowed)
2766 (never married), 3066 (married), 154 (separated), 663 (divorced), 23 (widowed)
Region 914
(Northeast), 1246 (South Central), 2296 (South), 1337 (Southwest)
1078 (Northeast), 1487 (South Central), 2913 (South), 1594 (Southwest)
1140 (Northeast), 1515 (South Central), 3020 (South), 1682 (Southwest)
1023 (Northeast), 1368 (South Central), 2770 (South), 1499 (Southwest)
d There are multiple skips and invalid data entries: refusal (-1), don’t know (-2), invalid skip (-3), valid skip (-4), non-interview (-5). Here, the sample means refer to the mean of the sample when these are excluded.
8

3 Empirical Methodology
3.1 Data Selection and Analysis Strategy
For the cross-sectional data analysis, I select 2011–2017 to avoid disruptions from the
2008–2009 crisis and the COVID-19 pandemic, and because respondents were mostly in
their 20s to early 30s during this stable economic expansion.
In addition to ensuring the cohorts are approximately 20 to 30 years old during the
surveys, I choose the period from 2011 to 2017 because this is a period of continued economic
expansion. The absence of economic downturns or recessions during this period allows for
more consistency between models and enables us to observe trends with time series analysis.
This research specifically aims to examine how personal behavioral, demographic, and
situational factors, such as race, education, and substance use, impact individual income
dynamics and wage rates in the 21st century. Ordinary least squares (OLS) models are used
to predict the wage rates of individuals’ primary jobs, while logistic regression is used to
model the probability of a person seeking a job. Initially, this research begins with cross
sectional analysis by assuming individual years as independent. Subsequently, a preliminary
longitudinal analysis will be conducted to account for changes in the importance of these
factors over time and to examine the trends.
3.2 Income Trend Analysis
For an overview of labor income dynamics, I analyze trends for three major income
metrics: spouse’s annual income (of the previous year), household gross annual income (of
the previous year), and hourly wage rates. The correlation across years is tabulated below4.
To proceed from the correlation matrix, I examine whether the correlation matrix fits
the AR (1) structure.
The first-order autoregressive [AR (1)] structure can be written as follows, with |ρ| < 1:
ui,t = ρui,t−1 + eit
4Some of the correlations are very small due to the missing data points in some years.
9

Where
E(eit|xi,t, ui,t−1, xi,t−1, · · · ) = 0
E(e2
it|xi,t) = E(e2
it) = σ2
Assuming there are 4 selected years, say 2011, 2013, 2015, and 2017, the covariance
matrix structure should be as follows:
Ω = σ2
1 − ρ2

      
1 ρ ρ2 ρ3
ρ 1 ρ ρ2
ρ2 ρ 1 ρ
ρ3 ρ2 ρ 1

      
It is evident that AR(1) is not appropriate: if the correlation matrix indeed follows the
AR(1) structure, the correlation decreases exponentially from the principal diagonal to the
subprime diagonal and beyond, following the pattern ρ, ρ2, ρ3, . . . etc. with |ρ| < 1. Here,
the correlation from one year to the next is so low compared to our expectations. For
exploratory purposes, I find that an AR(2) model may better fit the correlation matrix,
indicating a positive correlation between income from the past two years and income for
the current year in the NLSY97 cohort. Below, I illustrate the correlation patterns of wage,
household gross income, and spouse income for the NLSY97 cohort.
10

Figure 1: Correlation of Wage of NLSY97 Cohort
Figure 2: Correlation of Household Gross Income of NLSY97 Cohort
11

Figure 3: Correlation of Spouse Income of NLSY97 Cohort
3.3 Cross-Sectional Models
3.3.1 OLS Model for Labor Income
I model hourly wage (or annual wage) as a function of demographics, education, sub
stance use, and indicators of Internet usage. To reflect regional heterogeneity in digital
infrastructure, I include geographic region as a key factor.
Our OLS model for labor income5 is:
Wit = α + β1Xit + β2Zit + eit
In the OLS model, α is the time-invariant term, and eit is the error term for individual i
at time t, for which t = 2011, 2013, 2015, 2017.
Xit represents the level of the individuals’ education for individual i at time t (no educa
tion, GED, high school, associate/junior college, bachelor’s, master’s, PhD, or professional
degrees), and Zit represents the demographic and socioeconomic regressors, including sex
(binary dummy), marital status, region, substance use, and access/usage frequency of the
internet (as a measure of financial conditions).
5There are three measures of income, such as spouse income, gross household income, and labor wages. Without loss of generality, I use labor wage as the response variable here to explain the procedure, which is the same if I use spouse income and gross household income as independent variables.
12

Given the efforts in improving GED education, most people tend to have completed GED
according to the NLSY97 cohort data (only 746 in 2011, 647 in 2013, 616 in 2015, and 536
in 2017 out of 8984 survey participants did not complete a GED certificate). Thus, using a
binary variable for education is no longer sufficient. I need to accurately reflect the multiple
levels of education within the sample. It’s helpful to shift research interests to comparisons of
education into three categories: having no education or GED, having completed high school
or associate’s/junior college, or having a bachelor’s degree or above.
3.3.2 Logistic Model for Job-Seeking Probabilities
To capture the binary decision of actively seeking employment, I use a logit model to
measure the binary outcome of whether a person sought a job three months before the survey.
Our analyses explicitly test whether frequent Internet usage—potentially enabling robust
online search and digital networking—significantly correlates with job-search intensity.
The logit model for binary response is:
f (yt = 1|x′
t, θ0) = Λ(x′
tθ0)
f (yt = 0|x′
t, θ0) = 1 − Λ(x′
tθ0)
Λ(γ) := eγ
1 + eγ
Thus, I need to maximize the following objective function:
Qn(θ) = 1
n
n
X
i=1
{yt log(Λ(x′
tθ0)) + (1 − yt) log(1 − Λ(x′
tθ0))}
Using this logit model, the probability of searching for a job is modeled as:
α + β1Xit + β2Zit + eit
In the logit model, α is the time-invariant term, and eit is the error term for individual i
13

at time t, for which t = 2011, 2013, 2015, and 2017. Xit and Zit are just the same as those
in the OLS model. Yit = 0 the individual was not seeking for a job in the past three months,
or 1 if the individual did seek a job in the past three months. Admittedly, there is a more
direct question, “Did you want full-time work?”, but that question was only asked in the
2006 survey for the NLSY97 cohort. However, our focus is not just on employment status but
job-seeking behavior. Fortunately, job-seeking behavior status was well recorded, so I used it
as the binary response variable. In all income factors datasets, the categorical variables used
are family background, job conditions, income and wealth, and personal demographics. In
the Appendix, I explain some unique interpretations of the coefficients of dummy variables
involved in the models with factor variables. The representative set of independent variables
include socioeconomic and situational variables such as sex, region, education, marital status,
Internet usage frequency, substance usage (marijuana or cigarettes), household size, income
to-poverty ratio, and the number of weeks unemployed.
In addition, I also include a two-stage least square procedure to estimate the employment
days. If one is unemployed and wants to seek a job depending on her personal or family
needs, she will likely be in the status of actively seeking jobs. To address the endogeneity
arising from unemployment, I use the first stage regression to predict the number of weeks
unemployed with all the independent variables and then include the predicted number of
weeks unemployed in the regression on the entire job search probability.
4 Model Results and Interpretations
4.1 Labor Income OLS Results
I present the respective OLS models for labor income for 2011, 2013, 2015, and 2017
in Table 4 Labor Income OLS Results without Aggregating Categories and Table 5 Labor
Income OLS Results with Categories Aggregated. Here the significant codes in the tables
are 0.001 ‘***’, 0.01 ‘**’, and 0.05 ‘*’. Aggregating the categories is beneficial as it helps
avoid small counts in certain categories of Internet usage and marriage variables. Note that
in 2015, due to the absence of hourly wage data for the main full-time job of the sample,
I must use annual income as the response variable alternatively. Similarly, in 2013, I used
14

smoking within the past 12 months as a proxy for marijuana usage, given the absence of
specific marijuana data. Although not a perfect substitute, smoking is a reasonable proxy6
due to similar addictive properties and health impacts.
The model indicates that most marital status and education categories are significant,
while sex and internet usage are not. Before discussing and interpreting these results, I
recognize the issue of too many categories causing small sample sizes and reducing model
significance. To address this, I aggregated certain categories. For example, I combined
“divorced,” “separated,” and “widowed” into a single category of “was married.” Similarly,
education was simplified into “completed high school” and “did not complete high school.”
This aggregation helps mitigate the impact of small counts and is theoretically justified. Our
models across all 2011, 2013, 2015, and 2017 have large degrees of freedom, exceeding 4000,
with more balanced counts.
I use ANOVA to test the significance of the factor variables. The results show that sex,
region, and education are significant at the α = 0.01 level, while internet usage frequency is
significant at the α = 0.1 level (with p-values around 0.06).
Our model shows that men earn approximately $4.63 more per hour than women. In
dividuals in the North Central and South regions earn $2.4 and $1.6 less per hour, respec
tively, compared to those in the Northeast, with no significant wage differences between the
Northeast and West. This reflects regional economic disparities, with the West Coast and
Northeast being more prosperous.
Being married is associated with a substantial increase (about $3) in hourly wage com
pared to never being married. This effect can be attributed to financial stability before
marriage and increased workplace performance due to marital encouragement.
Education is the most significant factor for wage increases, with high school completion
and bachelor’s degrees being critical milestones, each leading to at least a $5-per-hour wage
increase. Higher education degrees, such as master’s and PhDs, further boost earnings.
These wage differences between categories are consistent from 2011 to 2017, and overall
wage levels have increased over time.
6In the subsample selected for 2011, 2013, 2015, 2017 models, by looking at the unique ID of every respondent, I find that co-use of both substances is more common than tobacco or marijuana use only.
15

4.2 Job-seeking Logistic Regression Results
In this section, I aggregate categories in the job-seeking logistic regression and present
the results from four different models, as shown in the Appendix.
• Table 6: Shows a logistic regression model of the probability of seeking jobs.
• Table 7: Displays a logistic model where the number of weeks unemployed is estimated
in the first stage using all other variables.
• Table 8: Adds more situational variables to the standard logistic regression model of
the probability of seeking jobs.
• Table 9: Presents a two-staged least square estimation version of the model in Table
8.
Our findings indicate that higher education levels increase the likelihood of seeking full
time employment. Household income, however, has a relatively small effect, as indicated
by its small coefficient. Additionally, higher parental education is associated with a greater
likelihood of seeking full-time jobs. It’s important to note that the willingness to take a
full-time job was assessed prospectively when the NLSY97 cohort was younger. Their actual
job-seeking decisions in their 20s and 30s are influenced by the process of aging.
For the cross-sectional results in Table 1.3, the model shows strong significance for 2011,
2013, 2015, and 2017. The West region shows low significance, indicating no significant
difference in job search willingness between the West and Northeast.
Having married once (means both currently married or were married) significantly de
creases one’s chance of “searching for a job in the past 3 months”. Marriage often correlates
with economic security, or individuals would be more stable with their employment once
they have married. Hence, they are less likely to lose or switch jobs.
Additionally, income-to-poverty ratio and household size are significant variables across
all four years, though their influence is small compared to education and marital status. Un
like other factor variables which are mostly fixed for an individual within 10 years, these are
good situational variables that change across time. Income-to-poverty ratio and household
16

size are significant variables across all four years, though their influence is small compared
to education and marital status.
I use chi-square statistics to evaluate the overall significance of the logistic models, calcu
lating the overall p-value for each model. Including the income-to-poverty ratio and house
hold size enhances the overall significance of the model. The chi-square distribution’s de
viance and degrees of freedom can be calculated from the null and residual distribution in
the logistic regression output.
deviance = deviancenull − devianceresidual
df = dfnull − dfresidual
Despite the small practical influence, I find that the p-value of the model in Table 8
is even smaller than the model in Table 6. Thus, income to income-to-poverty ratio and
household size should be included in the model.
4.3 Discussion of Results
4.3.1 Technological Access and Job-Seeking
Across multiple years (2011 to 2017), I observe that individuals with higher frequency of
Internet usage—especially those accessing the Internet daily—are more likely to search for
new jobs, all else equal. This relationship is particularly strong in early years (2013, 2015),
suggesting that the digital divide could significantly influence labor market mobility.
4.3.2 Regional Disparities and Digital Infrastructure
Wage outcomes continue to reflect longstanding regional inequalities; individuals in the
Northeast and West generally reported higher hourly wages than those in the South or
North Central regions. Our results suggest that differences in regional digital infrastructure
could compound these inequalities, raising questions about whether computing resources and
broadband access in disadvantaged regions are sufficient to facilitate equitable opportunities
17

for job mobility.
4.3.3 Marital Status, Education, and Sustainability
As in prior literature, marital status and education remain robust predictors of earn
ings. However, from a sustainability perspective, the interplay of local computing resources
with these socio-demographic factors is critical: higher-educated or married individuals in
regions with robust digital infrastructure can leverage online job platforms more effectively,
potentially widening gaps with those lacking reliable connectivity.
4.3.4 Implications for “Computing in Place”
Our findings underscore that digital resources are not uniformly distributed; local condi
tions (e.g., rural vs. urban broadband penetration, digital literacy, regional economic poli
cies) shape how effectively workers can use technology to improve their labor prospects. This
place-based lens reveals how technology can simultaneously be an “equalizer” of opportunity
and a mechanism that amplifies systemic inequalities.
5 Serial Correlation & Autoregressive Structure
I explore potential serial correlation within income patterns over 2011, 2013, 2015, and
2017. Typical methods include calculating residuals across cross-sections or time series or
including previous years’ income as lag terms in the regression model.
Calculating residuals across cross-sections or time series was not feasible due to insuffi
cient data points with valid responses across all four years. Therefore, I included lag terms
(lag 1, lag 2, lag 3) of income variables in our OLS models. For example, in the Ordinary
Least Square model for spouse income in 2016, I include spouse income in 2014, spouse
income in 2012, and spouse income in 2010. Likewise, in the Ordinary Least Square model
for spouse income in 2014, I include spouse income in 2012 and spouse income in 2010. The
table for the OLS model for spouse income in 2016 and the table for the OLS model for
spouse income in 2014 are included in the Appendix.
There is no obvious difference for significance models if I include weeks of unemployment.
18

I find that the lag 1, lag 2, and lag 3 terms are all significant. To analyze the exact autore
gressive structure of the correlation, I may output the inverse of the correlation matrix of
the 2014 and 2016 spouse income models7.
Table 3: Inverse matrix of the correlation matrix of spouse income in 2010, 2012, 2014, and 2016
2011 2013 2015 2017
2011 0.4279 -0.0346 0.0341 0.0226
2013 -0.0346 0.8306 0.0003 -0.0043
2015 0.0341 0.0003 0.7000 -0.0354
2017 0.0226 -0.0043 -0.0354 0.7112
The inverse matrix indicates that off-diagonal terms are relatively small, suggesting no
clear autoregressive structure with rapidly decaying correlations over time. This discrepancy
may stem from missing data in the dataset, necessitating further modeling to verify the
presence of an AR(2) structure.
6 Limitations and Future Directions
Our trend analysis is constrained by an unbalanced dataset with occasional missing data
across years, primarily categorized as ‘valid skips’ due to the survey’s design allowing respon
dents to choose not to answer certain questions. Nearly all individuals exhibit at least one
skipped variable in one year. Addressing this limitation by improving dataset balance and
increasing interview frequency could significantly enhance the robustness of our research.
Future avenues include expanding our models to encompass the 2019 NLSY97 cohort,
enabling a more comprehensive observation of trends. Recognizing the influence of economic
downturns such as COVID-19 on future analyses is essential. Moreover, ongoing technological
advancements and societal shifts over time may necessitate recalibrating model accuracy.
Further exploration into job-seeking motivations is essential. Our current linear logis
tic models may oversimplify the complexity of these behaviors. Incorporating nonlinear
7Please refer to the Appendix for code for computation of the covariance matrix.
19

relationships or additional socioeconomic indicators could offer deeper insights into the mul
tifaceted factors guiding job search decisions. Addressing potential simultaneity among
regressors—such as how internet access impacts job-seeking channels and unemployment
duration—remains crucial for refining model precision.
Job seekers may pursue employment for varied reasons, from reemployment necessity
to income enhancement. Factors such as educational attainment and regional development
levels play significant roles in job-seeking dynamics, with demographic attributes like sex
and household size influencing risk tolerance towards job instability. Exploring nonlinear
relationships, such as quadratic effects in income-to-poverty ratios, could yield more nuanced
insights.
The extensive socioeconomic measures available in the NLSY dataset offer promising
avenues for future research, allowing for refined categorizations of individuals based on their
job-seeking objectives.
7 Conclusion
This study provides a comprehensive analysis of labor income and job-seeking disparities
among individuals born in the 1980s and 1990s in the United States. Utilizing data from the
National Longitudinal Surveys of Youth (NLSY97), I examined the impact of various de
mographic, personal, and situational factors on income levels and job-seeking behavior from
2010 to 2017. Our findings provide key insights into contemporary labor market dynamics.
Firstly, demographic factors such as marital status, education level, and regional location
significantly influence labor income. Our analysis reveals that higher educational attainment
is strongly associated with increased wage rates, with individuals holding bachelor’s degrees
or higher earning substantially more than those with only high school education. Addition
ally, being married is correlated with higher wages, reflecting the potential economic stability
provided by marriage.
Secondly, I identified notable regional disparities in income, with individuals in the North
east and West earning more compared to those in the South and North Central regions. These
findings underscore the persistent economic inequalities across different parts of the United
States, highlighting the need for targeted regional economic policies.
20

Thirdly, our logistic regression analysis on job-seeking behavior indicates that higher edu
cation levels increase the likelihood of seeking full-time employment. Moreover, factors such
as substance use, internet usage frequency, and weeks of unemployment also play significant
roles in influencing job search activities. Interestingly, the presence of a higher income-to
poverty ratio and larger household sizes, although significant, had relatively smaller effects
on job-seeking probabilities.
This study contributes to the literature on labor income and job-seeking disparities by
providing updated empirical evidence on the determinants of income dynamics and employ
ment decisions in the United States. Our findings emphasize the importance of education,
marital status, and regional factors in shaping labor market outcomes, and they offer criti
cal implications for policymakers aiming to reduce economic inequalities and improve labor
market efficiency.
By emphasizing the localized, socio-technical fabric within which labor market processes
unfold, this paper moves beyond a purely demographic or economic analysis of income dy
namics. Our use of the NLSY97 dataset, augmented with variables related to digital access,
reveals how “computing in place” can intersect with marital status, education, and household
characteristics in determining both wages and job-seeking strategies. I call for continued,
interdisciplinary work that foregrounds the political, material, and ethical consequences of
uneven digital infrastructures as I strive toward sustainable and equitable futures in the
developed labor markets like the United States.
21

8 Appendix
8.1 Interpretations of the Factor Variables
The coefficients for the model may be explained as: (where each of the subscripts repre
sents different subcategories of the categorical variable)
• Sex: S1 + S2 = 0
• Region: R1 + R2 + R3 + R4 = 0
• Education: E0 + E1 + E2 + · · · + E7 = 0
• Internet usage frequency: I1 + I2 + · · · + I7 = 0
• Marital: M0 + M1 + · · · + M4 = 0
• Marijuana: M J0 + M J1 = 0
The model output of the following coefficients sums up to 0. Thus, it’s possible to calcu
late the actual individual coefficient of each category, instead of looking at their comparative
difference from the model coefficients.
• Coefficient 1: Intercept + S1 + R1 + E0 + I1 + M0 + M J0
• Coefficient 2: S2 − S1
• Coefficient 3: R2 − R1
• Coefficient 4: R3 − R1
• Coefficient 5: R4 − R1
• Coefficient 6: E1 − E0
• Coefficient 7: E2 − E0
22

8.2 Main Regression Tables
Table 4: Labor Income OLS Results without Aggregating Categories.
This table reports the results of labor income OLS regressions without aggregating categories. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) 1587.43*** 1940.36*** 32968*** 1864.51***
(155.87) (193.77) (5047) (221.70)
sex:woman -473.23*** -631.28*** -17225*** -656.53***
(66.47) (82.46) (1882) (93.50)
region:North Central -223.39** -236.56* -5063* -250.50
(108.73) (134.39) (3048) (155.58)
region:South -142.68 -211.20* -1562 -371.31***
(97.81) (122.79) (2784) (138.75)
region:West 16.26 124.13 1603 278.91*
(106.99) (135.36) (3022) (153.27)
educ:GED 75.19 68.25 4095 154.01
(152.33) (174.07) (5110) (242.24)
educ:high school 319.16** 318.53** 11874*** 422.07**
(129.46) (153.36) (4460) (198.19)
educ:associates 506.06*** 583.52*** 12709** 784.69***
(169.49) (199.95) (5248) (225.27)
educ:bachelor 822.61*** 1015.26*** 22962*** 1554.93***
(143.68) (175.19) (4689) (209.87)
educ:master 1399.41*** 1194.55*** 29222*** 2242.96***
(190.43) (228.47) (5318) (242.66)
educ:professional degree 2052.26*** 1427.62* 23191** 2285.27***
(699.14) (801.36) (10875) (529.19)
educ:PhD 2628.26*** 2770.10*** 59400*** 5964.18***
(341.91) (443.78) (8722) (409.08)
23

Table 4 Continued from previous page
2011 2013 2015 2017
Internet:multiple times/day -42.76 -228.78* -5698 /
(101.86) (136.08) (3809) /
Internet: once/day -56.90 -356.96* -8402* /
(127.52) (188.94) (4946) /
Internet: 3-5days/week -257.82* 449.31* -7593 /
(153.33) (241.86) (8006) /
Internet: 1-2days/week -337.69* -170.04 -13174 /
(180.07) (289.38) (10816) /
Internet: once/week -372.11* -408.79 -10639 /
(220.52) (334.36) (10210) /
Internet: no -66.08 -88.84 -8568 /
(174.57) (249.61) (9006) /
marital:married 275.18*** 312.01*** 10427*** 420.56***
(70.83) (87.26) (2019) (101.16)
marital:separated 24.47 427.74 14034** -59.33
(279.84) (358.38) (6208) (317.03)
marital:divorced -10.61 341.21 5369 -1.06
(136.15) (153.30) (3545) (163.09)
marital:widowed -128.05 38.17 -3158 -361.90
(877.84) (755.72) (20559) (790.02)
marijuana:yes 101.08 -71.53 -3446 /
(88.18) (84.54) (2475) /
R2 0.043 0.050 0.052 0.089
Adjusted R2 0.040 0.044 0.048 0.086
Observations 5770 4155 4415 5507
24

Table 5: Labor Income OLS Results with Categories Aggregated.
This table reports the results of labor income OLS regressions with categories aggregated. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) 1652.981*** 2000.31*** 30670*** 1918.864***
(123.103) (155.3) (3649) (172.720)
sex:woman -463.205*** 629.77*** 17152*** -632.740***
(66.566) (82.37) (1882) (94.259)
region:North Central -240.995** -226.31* -5377* -244.950
(108.903) (134.18) (3050) (157.429)
region:South -167.263* -220.00* -1888 -375.596***
(97.921) (122.73) (2787) (140.416)
region:West -1.665 115.10 1235 308.307***
(107.041) (135.15) (3024) (154.961)
educ:high school&associates 296.139*** 313.19*** 9074*** 415.039***
(89.738) (104.62) (2780) (138.459)
educ:bachelor&above 945.227*** 1067.99*** 22984*** 1858.378***
(104.479) (126.81) (3008) (149.266)
Internet:multiple times/day -68.753 -246.12* -6154 /
(101.976) (136.11) (3814) /
Internet: once/day -68.967 -376.59** -8712* /
(127.874) (188.93) (4951) /
Internet: 3-5days/week -275.965* 418.50* -8008 /
(153.736) (240.28) (8019) /
Internet: 1-2days/week -363.489** -194.65 -12981 /
(180.027) (289.73) (10819) /
Internet: once/week -394.497* -426.26 -10587 /
(220.392) (335.44) (10215) /
Internet: no -88.644 -113.99 -8415 /
25

Table 5 Continued from previous page
2011 2013 2015 2017
(174.377) (248.54) (9014) /
marital:married 293.920*** 314.53*** 10736*** 472.762***
(70.926) (87.32) (2021) (102.267)
marital:was married 4.031 355.87* 7039* -2.334
(124.610) (142.77) (3193) (151.100)
Substance usage:yes 96.492 -83.43 -3398 /
(88.453) (84.49) (2479) /
R2 0.036 0.045 0.047 0.064
Adjusted R2 0.033 0.041 0.044 0.063
Observations 5777 4162 4422 5514
Table 6: Logistic Model of Probability for Seeking Jobs.
This table reports the logistic regression results of job search probability. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) -1.822*** -2.737*** -2.626*** -2.834***
(0.164) (0.247) (0.209) (0.238)
sex:woman 0.055 -0.021 -0.014 -0.146
(0.084) (0.118) (0.100) (0.110)
region:North Central -0.230* 0.167 -0.036 -0.053
(0.138) (0.186) (0.158) (0.182)
region:South -0.045 0.033 -0.083 0.043
(0.120) (0.175) (0.144) (0.158)
region:West -0.119 0.076 -0.067 0.016
(0.132) (0.190) (0.155) (0.176)
educ:high school&associates 0.026 0.248 0.412** 0.319
26

Table 6 Continued from previous page
2011 2013 2015 2017
(0.131) (0.190) (0.174) (0.212)
educ:bachelor&above 0.556*** 1.073*** 0.875*** 1.017***
(0.140) (0.198) (0.180) (0.212)
marital:married -0.476*** -0.134 -0.217** -0.268**
(0.093) (0.123) (0.106) (0.116)
marital:was married -0.146 -0.207 -0.310* -0.406**
(0.162) (0.238) (0.187) (0.199)
Internet:multiple times/day -0.196 -0.885*** -0.319 /
(0.139) (0.284) (0.237) /
Internet: once/day 0.149 -0.030 -0.400 /
(0.159) (0.306) (0.307) /
Internet: 3-5days/week -0.130 0.537* 0.014 /
(0.212) (0.324) (0.404) /
Internet: 1-2days/week -0.247 -0.535 -0.498 /
(0.274) (0.605) (0.732) /
Internet: once/week -0.605 -13.269 -0.860 /
(0.402) (248.407) (0.730) /
Internet: no -1.320*** -1.658 -1.604 /
(0.423) (1.018) (1.012) /
substance usage:yes 0.328*** 0.432*** 0.349*** /
(0.106) (0.121) (0.122) /
weeks unemployed 0.012* 0.045*** 0.060*** 0.008
(0.007) (0.015) (0.015) (0.022)
27

Table 7: Logistic Model of Probability for Seeking Jobs with Two-staged Estimation for Weeks Unemployed.
This table reports the logistic regression results of job search probability with two-staged estimation for weeks unemployed. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) -1.905*** -3.469*** -2.681*** -2.987***
(0.202) (0.412) (0.258) (0.315)
sex:woman 0.053 0.152 0.008 -0.141
(0.097) (0.161) (0.115) (0.129)
region:North Central -0.152 0.408* 0.115 -0.030
(0.151) (0.244) (0.177) (0.202)
region:South -0.033 0.302 -0.053 -0.014
(0.139) (0.238) (0.171) (0.186)
region:West -0.035 0.138 0.001 0.103
(0.147) (0.265) (0.175) (0.199)
educ:high school&associates 0.112 0.730** 0.342 0.425
(0.160) (0.327) (0.213) (0.275)
educ:bachelor&above 0.558*** 1.410*** 0.905*** 1.056***
(0.167) (0.333) (0.216) (0.274)
marital:married -0.459*** -0.042 -0.178 -0.123
(0.105) (0.167) (0.120) (0.138)
marital:was married -0.072 -0.084 -0.233 -0.333
(0.184) (0.347) (0.220) (0.241)
Internet:multiple times/day -0.349** -0.823** -0.328 /
(0.164) (0.404) (0.288) /
Internet: once/day -0.161 -1.205* -0.321 /
(0.209) (0.375) (0.375) /
Internet: 3-5days/week -0.127 -0.084 0.037 /
(0.244) (0.623) (0.533) /
28

Table 7 Continued from previous page
2011 2013 2015 2017
Internet: 1-2days/week -0.374 0.895 -14.014 /
(0.341) (0.666) (496.501) /
Internet: once/week -14.637 -14.179 -0.228 /
(315.88) (714.184) (0.738) /
Internet: no -1.280** -13.966 -14.109 /
(0.517) (484.128) (391.730) /
substance usage:yes 0.295** 0.388** 0.369*** /
(0.119) (0.168) (0.138) /
weeks unemployed predicted 0.002 0.029 -0.019 -0.021
(0.045) (0.041) (0.036) (0.057)
Table 8: Logistic Model of Probability for Seeking Jobs with More Situational Variables.
This table reports the logistic regression results of job search probability with more situational variables. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) -1.601*** -2.753*** -2.378*** -2.553***
(0.216) (0.299) (0.265) (0.287)
sex:woman 0.001 -0.012 -0.009 -0.191
(0.091) (0.119) (0.107) (0.116)
region:North Central -0.218 0.180 -0.045 -0.080
(0.147) (0.187) (0.169) (0.190)
region:South -0.042 0.048 -0.068 -0.011
(0.130) (0.176) (0.155) (0.167)
region:West -0.137 0.088 -0.017 0.030
(0.143) (0.190) (0.165) (0.184)
educ:high school&associates 0.116 0.231 0.459** 0.302
29

Table 8 Continued from previous page
2011 2013 2015 2017
(0.144) (0.191) (0.192) (0.225)
educ:bachelor&above 0.736*** 1.025*** 0.973*** 1.040***
(0.159) (0.209) (0.203) (0.231)
marital:married -0.410*** -0.136 -0.155 -0.094
(0.103) (0.133) (0.124) (0.136)
marital:was married -0.054 -0.208 -0.325 -0.324
(0.177) (0.239) (0.209) (0.216)
Internet:multiple times/day -0.265* -0.877*** -0.188 /
(0.150) (0.285) (0.239) /
Internet: once/day 0.085 -0.014 -0.211 /
(0.174) (0.307) (0.310) /
Internet: 3-5days/week -0.183 0.548* -0.113 /
(0.229) (0.324) (0.475) /
Internet: 1-2days/week -0.273 -0.522 -0.234 /
(0.294) (0.605) (0.739) /
Internet: once/week -0.493 -13.250 -0.789 /
(0.407) (0.025) (0.734) /
Internet: no -1.122*** -1.642 -1.319 /
(0.428) (1.019) (1.016) /
substance usage:yes 0.346** 0.429*** 0.337** /
(0.112) (0.122) (0.129) /
weeks unemployed 0.016** 0.046*** 0.064** 0.014
(0.007) (0.015) (0.017) (0.022)
income poverty ratio -0.001*** 0.000 0.000 0.000*
(0.0001) (0.0001) (0.0001) (0.0001)
household size -0.032 -0.009 -0.101** -0.063
(0.032) (0.044) (0.040) (0.041)
30

Table 9: Logistic Model of Probability for Seeking Jobs with More Situational Variables with Two-staged Estimation for Weeks Unemployed.
This table reports the logistic regression results of job search probability with more situational variables and two-staged estimation for weeks unemployed. Statistical significance is indicated by ***, **, and * for the 0.1%, 1%, and 5% levels, respectively. Standard errors are reported in parentheses below the estimates.
2011 2013 2015 2017
(Intercept) -1.855*** -3.168*** -2.366*** -2.806***
(0.348) (0.554) (0.396) (0.446)
sex:woman 0.035 0.087 0.081 -0.180
(0.131) (0.196) (0.150) (0.165)
region:North Central -0.039 0.386 0.296 -0.282
(0.193) (0.252) (0.219) (0.245)
region:South -0.105 0.279 -0.007 -0.198
(0.181) (0.288) (0.215) (0.220)
region:West -0.043 0.035 0.297 0.072
(0.204) (0.301) (0.232) (0.247)
educ:high school&associates -0.302 0.701 0.098 0.349
(0.248) (0.428) (0.287) (0.369)
educ:bachelor&above 0.826*** 1.192*** 0.865*** 1.156**
(0.259) (0.445) (0.291) (0.370)
marital:married -0.346** -0.131 -0.246 -0.048
(0.148) (0.214) (0.178) (0.198)
marital:was married 0.041 -0.012 -0.637* -0.130
(0.268) (0.440) (0.350) (0.311)
Internet:multiple times/day -0.263* -0.817* -0.360 /
(0.225) (0.480) (0.408) /
Internet: once/day -0.181 -15.37 -0.315 /
(0.299) (59.06) (0.479) /
Internet: 3-5days/week -0.148 0.221 0.115 /
(0.369) (0.774) (0.760) /
31

Table 9 Continued from previous page
2011 2013 2015 2017
Internet: 1-2days/week -1.192 0.804 14.03 /
(0.731) (1.138) (1064) /
Internet: once/week -15.50 -15.23 -0.300 /
(71.80) (1472) (1.044) /
Internet: no -15.49 -15.08 -13.99 /
(580.0) (1133) (526.0) /
substance usage:yes 0.261 0.389* 0.357** /
(0.161) (0.202) (0.178) /
weeks unemployed predicted -0.038 0.041* 0.621** 0.531
(0.085) (0.218) (0.273) (0.386)
income poverty ratio -0.0004** 0.0002 -0.0003 -0.0001
(0.0002) (0.0002) (0.0002) (0.0001)
household size -0.051 -0.088 -0.126** -0.063
(0.051) (0.076) (0.062) (0.062)
32

References
Akerlof, G. A., & Kranton, R. E. (2000). Economics and Identity [Place: Cambridge, Mass.
[etc.] Publisher: MIT Press]. The Quarterly journal of economics, 115 (3), 715–753.
Autor, D. H., Levy, F., & Murnane, R. J. (2003). The skill content of recent technological
change: An empirical exploration [Place: Oxford Publisher: MIT Press]. The Quarterly
Journal of Economics, 118 (4), 1279–1333.
Betts, J. R. (1995). Does School Quality Matter? Evidence from the National Longitudinal
Survey of Youth [Publisher: The MIT Press]. The Review of Economics and Statistics,
77 (2), 231–250. https://doi.org/10.2307/2109862
Blau, F. D., & Kahn, L. M. (2007). Changes in the Labor Supply Behavior of Married
Women: 1980–2000 [Place: Chicago Publisher: University of Chicago Press]. Journal
of Labor Economics, 25 (3), 393–438.
Bradley, C. J., Bednarek, H. L., & Neumark, D. (2002). Breast Cancer and Women’s La
bor Supply [Place: Oxford, UK Publisher: Blackwell Science Ltd]. Health Services
Research, 37 (5), 1309–1327.
Brynjolfsson, E., Li, D., & Raymond, L. (2023). Generative AI at Work [Place: Ithaca Pub
lisher: Cornell University Library, arXiv.org]. arXiv.org.
Brynjolfsson, E., Rock, D., & Syverson, C. (2017). Artificial Intelligence and the Modern Pro
ductivity Paradox: A Clash of Expectations and Statistics [Place: Cambridge Pub
lisher: National Bureau of Economic Research, Inc]. NBER Working Paper Series,
24001.
Chetty, R., Friedman, J. N., Stepner, M., Alatas, H., Baker, C., Barnhard, H., Bell, M.,
Bruich, G., Chelidze, T., Chu, L., Cineus, W., Devlin-Foltz, S., Droste, M., Gaur, D.,
Gonzalez, F., Gray, R., Hiller, A., Jacob, M., Jacobson, T., . . . Zheng, A. (2024). The
Economic Impacts of COVID-19: Evidence from a New Public Database Built Using
Private Sector Data [Publisher: Opportunity Insights Team]. The Quarterly journal
of economics, 139 (2), 829–889.
Creed, P. A., King, V., Hood, M., & McKenzie, R. (2009). Goal Orientation, Self-Regulation
Strategies, and Job-Seeking Intensity in Unemployed Adults [Place: Washington, DC
33

Publisher: American Psychological Association]. Journal of applied psychology, 94 (3),
806–813.
Cristia, J. P. (2008). The Effect of a First Child on Female Labor Supply: Evidence from
Women Seeking Fertility Services [Publisher: University of Wisconsin Press]. The
Journal of human resources, 43 (3), 487–510.
Dell’Acqua, F., McFowland, E., Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K., Rajendran,
S., Krayer, L., Candelon, F., & Lakhani, K. R. (2023). Navigating the Jagged Tech
nological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge
Worker Productivity and Quality. SSRN Electronic Journal.
Eaglin, F. C., & Fang, T. P. (2021). Exploring Boundaries: How Firms Choose Informality in
Emerging Markets. Proceedings of the 4th ACM SIGCAS Conference on Computing
and Sustainable Societies, 38–45.
Ganong, P., & Noel, P. (2019). Consumer Spending during Unemployment: Positive and
Normative Implications [Publisher: American Economic Association]. The American
economic review, 109 (7), 2383–2424.
Genadek, K. R., Stock, W. A., & Stoddard, C. (2007). No-Fault Divorce Laws and the Labor
Supply of Women with and without Children [Place: Madison Publisher: University
of Wisconsin Press]. The Journal of human resources, 42 (1), 247–274.
Heckman, J. J., & Macurdy, T. E. (1980). A Life Cycle Model of Female Labour Sup
ply [Place: Oxford, etc Publisher: Wiley-Blackwell]. The Review of economic studies,
47 (1), 47–74.
Horton, J. J. (2017). The Effects of Algorithmic Labor Market Recommendations: Evidence
from a Field Experiment [Place: CHICAGO Publisher: The University of Chicago
Press]. Journal of labor economics, 35 (2), 345–385.
Katz, L. F., & Krueger, A. B. (2019). Understanding Trends in Alternative Work Arrange
ments in the United States [Publisher: Russell Sage Foundation]. RSF : Russell Sage
Foundation journal of the social sciences, 5 (5), 132–146.
Mincer, J. (1996). Economic Development, Growth of Human Capital, and the Dynamics of
the Wage Structure [Publisher: Kluwer Academic Publishers]. Journal of economic
growth (Boston, Mass.), 1 (1), 29–48.
34

Mroz, T. A. (1987). The Sensitivity of an Empirical Model of Married Women’s Hours
of Work to Economic and Statistical Assumptions [Place: Menasha, Wis Publisher:
JSTOR]. Econometrica, 55 (4), 765–799.
Otis, N., Clarke, R. P., Delecourt, S., Holtz, D., & Koning, R. (2024). The Uneven Impact
of Generative AI on Entrepreneurial Performance. SSRN Electronic Journal.
Song, W. (2011). Labor Market Impacts of the GED[R] Test Credential on High School
Dropouts: Longitudinal Evidence from NLSY97. GED Testing Service[R] Research
Studies, 2011-2 [Backup Publisher: American Council on Education, GED Testing
Service Publication Title: GED Testing Service]. GED Testing Service.
Wanberg, C. R., Rotundo, M., & Kanfer, R. (1999). Unemployed Individuals: Motives, Job
Search Competencies, and Job-Search Constraints as Predictors of Job Seeking and
Reemployment [Place: Washington, DC Publisher: American Psychological Associa
tion]. Journal of Applied Psychology, 84 (6), 897–910.
Wanberg, C. R., Watt, J. D., & Rumsey, D. J. (1996). Individuals Without Jobs: An Empir
ical Study of Job-Seeking Behavior and Reemployment [Place: Washington, DC Pub
lisher: American Psychological Association]. Journal of Applied Psychology, 81 (1),
76–87.
Wu, S. (2024). Are ESG Improvements Recognized? Perspectives from the Public Sentiments.
The Journal of Impact and ESG Investing (JESG), 35. https://doi.org/10.2139/ssrn.
4389111
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:20.488Z
- **Text Length:** 55411 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
