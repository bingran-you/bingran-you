# PDF Document: Matera - 2025 - Corporate Earnings Calls and Analyst Beliefs.pdf

**File Path:** Matera - 2025 - Corporate Earnings Calls and Analyst Beliefs.pdf

**Processed Date:** 2026-02-10T18:18:26.170Z

**File Size:** 1150.72 KB

**Total Pages:** 59

**Extracted Pages:** 59

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3488

**Title:** Corporate Earnings Calls and Analyst Beliefs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Corporate Earnings Calls and Analyst Beliefs
Giuseppe Matera*
November 26, 2025
Abstract
Economic behavior is shaped not only by quantitative information but also
by the narratives through which such information is communicated and inter
preted (Shiller, 2017). I show that narratives extracted from earnings calls sig
nificantly improve the prediction of both realized earnings and analyst expecta
tions. To uncover the underlying mechanisms, I introduce a novel text-morphing
methodology in which large language models generate counterfactual execu
tive presentation from earnings calls that systematically vary topical emphasis
(the prevailing narrative) while holding quantitative content fixed. This frame
work allows me to precisely measure how analysts under- and over-react to
specific narrative dimensions. The results reveal systematic biases: analysts
over-react to sentiment (optimism) and under-react to narratives of risk and
uncertainty. Overall, the analysis offers a granular perspective on the mech
anisms of expectation formation through the competing narratives embedded
in corporate communication.
*Giuseppe Matera is at EPFL and Swiss Finance Institute. I am very grateful to my advisors,
Andreas Fuster and Semyon Malamud, for precious advice and invaluable support. I also thank
Federico Baldi-Lanfranchi, Andrea Della Vecchia, Francesco Celentano, Emanuele Luzzi (discus
sant), Luca Pagliuca for helpful comments, and seminar and conference participants at SFI PhD
Workshop 2025, EPFL-Unil PhD Workshop Fall 2025. I gratefully acknowledge support from the
Swiss National Supercomputing Centre (CSCS) through project ID lp85 on the Daint-Alps system.
1
arXiv:2511.15214v2 [q-fin.GN] 25 Nov 2025

1 Introduction
Economic decision-making is shaped not only by data and models, but also by the
narratives through which agents interpret and communicate economic reality. As
Shiller (2017) argues, narratives—compelling stories that convey meaning and emo
tional resonance—spread across economic actors much like contagions, influencing
behavior and expectations in ways that traditional models of rational information
processing often overlook. Yet, despite their acknowledged importance, the empiri
cal content of such narratives remains difficult to quantify, and their role in shaping
belief formation is not well understood.1
This paper offers an empirical approach to this problem by focusing on a setting
where narratives are explicitly produced and transmitted: the interaction between
corporate managers and financial analysts. Financial analysts occupy a central po
sition in this narrative ecosystem. Tasked with interpreting corporate disclosures
and market information, they act as intermediaries between firms and investors,
translating managerial communication into forward-looking assessments of firm
value. While the full-information rational expectations (FIRE) framework posits
that forecasts should reflect the unbiased and comprehensive use of quantitative
data, substantial evidence indicates that analysts’ expectations systematically devi
ate from this benchmark. Analysts tend to underreact to new information in the
short term (Livnat and Mendenhall, 2006) and overreact in the long term by ex
trapolating recent positive signals (La Porta, 1996), with biases varying by forecast
horizon (Dessaint et al., 2024; De Silva and Thesmar, 2024). These systematic bi
ases also relate to important macroeconomic and financial phenomena, including
business cycles and asset price variation.2
These empirical regularities suggest that analysts belief formation processes are
influenced by more than hard data alone. Consequentially, framing, tone, and em
phasis, the narrative elements of corporate communication, play a crucial role in
shaping how information is interpreted and transmitted. Earnings calls provide a
1 Studies using surveys and large language models to examine and measure the role of narratives in financial markets and the macroeconomy include Andre et al. (2022), Bybee et al. (2023), Barron and Fries (2023), Andre et al. (2023), Dim et al. (2023), Flynn and Sastry (2024), Andolfatto and Bastianello (2025). 2 See De Bondt and Thaler (1985), Vissing-Jorgensen (2003), Bacchetta et al. (2009), Malmendier and Nagel (2011), Kelly and Ljungqvist (2012), Greenwood and Shleifer (2014), Bordalo et al. -
(2019, 2024, 2025), Balakrishnan et al. (2014), Giglio et al. (2021), and Nagel and Xu (2022), among others, and Adam and Nagel (2023) for a review.
2

particularly suitable context for this research. Held quarterly, they serve as both
disclosure and performance overview: occasions where executives present quan
titative results while also framing the firm’s trajectory through interpretive nar
ratives. For analysts, these events offer a concentrated flow of both hard and soft
information, with forecast revisions peaking in the immediate aftermath of the call.
As such, earnings calls constitute a natural laboratory for testing how narratives are
constructed, transmitted, and internalized within financial markets—and whether
the attention financial analysts devote to them is justified by their informational
content.
The first contribution of this paper is to examine whether and how analysts
incorporate information expressed and framed in corporate earnings calls into their
belief formation processes. I also study whether analysts’ focus on these narratives
reflects genuine informational value or merely responds to managerial framing.
I show that the narrative and linguistic content of earnings calls indeed contains
incremental information about firms’ fundamentals, and analysts take this into
account while forming their beliefs. Extracting such narratives requires modern
Large Language Models (LLMs) because corporate disclosures are inherently high
dimensional and context-dependent, and early textual proxies, such as word counts
or readability indices, fail to capture the semantic nuance and communicative style.
Specifically, to represent text, I compute earnings call transcripts embeddings3
using a finance-specific FinBERT model pretrained on financial text available before
2014.4 I deliberately avoid the latest foundation models to eliminate the risk of a
look-ahead bias.5
To pin down the incremental information contained in the narratives, I bench
mark my results against a comprehensive set of more than 300 numerical firm char
acteristics constructed from the Global Factor Data of Jensen et al. (2023) (hence
forth referred to as JKP data), as well as the most recent financial statements from
3 Embeddings are high-dimensional vector representations of the text capturing semantic and syntactic features. Every LLM generates a different embedding of a given text. 4 Implementation details appear in later sections. For the model, see https://huggingface.co/ ProsusAI/finbert.
5 Several papers (see, e.g., Glasserman and Lin (2023), Sarkar and Vafa (2024), Ludwig et al. (2025), have criticized using modern LLMs for economic research due to their inadvertent exposure during pretraining to economic data or contemporaneous news in the sample that the models are used to explain. By contrast, all results in this paper are free from such exposure. Hence, they should be interpreted as conservative: more expressive, state-of-the-art models would likely capture additional meaning-
 and structure in the transcripts, yielding potentially stronger findings than those reported in this work.
3

the SEC 10-Ks filings. I also include abnormal stock returns (FF5-adjusted) on
the earnings announcement date, along with realized earnings yields and the Stan
dardized Unexpected Earnings (SUE; (Livnat and Mendenhall, 2006)), as additional
characteristics.
I estimate several machine learning (ML) models based on three alternative fea
ture sets: one using numerical stock characteristics alone, one using embeddings
of earnings call transcripts alone, and one combining both sources. I then evaluate
the models’ out-of-sample performance primarily through changes in the out-of
sample R-squared. Since direct comparisons of R-squared values can be sensitive
to differences in the variability of test samples, I complement this analysis with
the Clark and West (2007) test to assess whether the observed improvement in pre
dictive accuracy is statistically significant. Textual information derived from earn
ings calls markedly improves the prediction of analysts’ expectations and forecast
dispersion. Incorporating these linguistic measures provides a statistically signif
icant enhancement in capturing analysts’ beliefs, beyond what can be explained
by traditional quantitative predictors. These results suggest that linguistic content
from managerial disclosures provides incremental information beyond traditional
quantitative fundamentals, capturing nuanced aspects of firm communication that
complement established information sources in the analysts’ forecast formation
process.
The second contribution of this paper is to identify which narratives of corpo
rate communication are most influential in shaping analysts’ beliefs, and whether
these same features predict subsequent realized earnings.
Estimating what causes particular analysts’ reactions would, in an ideal world,
require rerunning the same earnings call while varying only one clearly identi
fied narrative of the CEO’s remarks—an experiment which is clearly infeasible.
Instead, I propose a novel framework that (i) constructs credible counterfactual
disclosures: precise, transparent edits (henceforth, morphs) to the CEO’s speech
along pre-specified linguistic dimensions; (ii) holds fundamentals and the mar
ket’s information set fixed; and (iii) measures how each morph changes analysts’
responses.
I identify six key narrative dimensions likely to influence analysts’ belief for
mation: Guidance, Jargon, Confidence, Global Perspective, Sentiment, and Un
certainty. These dimensions are selected based on prior research on the effects of
linguistic features and stock market reactions. To verify that these narratives are in
4

formative, I use a state-of-the-art large language model to assign each earnings call
a score from 0 to 10 for the extent to which each narrative dimension is expressed.
A ML model trained on these six scores achieves an average out-of-sample perfor
mance of approximately 40% relative to models using the full textual embeddings,
suggesting that the six narratives capture informational content relevant to ana
lysts’ belief formation.
Then, inspired by the methodology of Horton (2023) and Ludwig and Mul
lainathan (2024), I construct an in-silico experimental design with a simple approach
to generate human-like text. Namely, I train a model that maps earnings call tran
scripts to analysts’ measurable actions; then I create systematic, structured, human
like edits (morphs) to the same transcript along the above-mentioned six linguistic
dimensions. Finally, I generate embeddings of the morphed text and feed them
into my ML model. The difference between the outcomes based on the original
(baseline) and morphed (counterfactual) texts recovers the predicted treatment ef
fect (PTE) of the targeted language narrative. This methodology advances beyond
conventional natural-language-processing framework that relies on simplistic text
based proxies (e.g., bag-of-words, fixed sentiment lexicons) by making it possible
to intervene directly on the text. The granularity and flexibility of this framework
make it possible to quantitatively evaluate the influence of narratives within fi
nancial markets and to estimate with precision the contribution of each narrative
dimension to realized earnings and to analysts’ earnings expectations.
Most importantly, this in-silico experiment allows me to disentangle the nar
ratives that financial analysts pay attention to—those driving the ML model that
predicts their forecasts (Analysts Expectation for Earnings, AEE)—from the narra
tives they should pay attention to—those associated with future realized earnings
(Future Realized Earnings, FRE). I find that, while analysts appear to allocate a
rational level of attention to jargon, they severely under-react to narratives of un
certainty (Average PTE for AEE = -9.22 bps versus Average PTE for FRE = -41.09
bps), confidence (Average PTE for AEE = 6.09 bps, Average PTE for FRE = 25.76
bps), and future guidance (Average PTE for AEE = 10.84 bps, Average PTE for FRE
= 19.43 bps). Conversely, they over-react to narratives of sentiment (Average PTE
for AEE = 34.88 bps, Average PTE for FRE = 25.76 bps) and global perspective
(Average PTE for AEE = 10.84 bps, Average PTE for FRE = -19.43 bps).
To summarize, I show that language, although it conveys no additional quan
titative information and often reflects managerial framing rather than substantive
5

disclosure, is still informative about future economic prospects and can induce
sizeable shifts in analysts’ forecasts. This finding underscores the powerful role of
corporate communication in shaping market expectations and, more broadly, the
role of narrative within financial markets. The framework developed in this paper
provides a way to precisely measure the effects of such narratives and sheds new
light on the mechanism of expectation formation within financial markets. For cor
porate managers, it offers an opportunity to strategically design communication
by experimenting with alternative framings of the same message. For analysts, it
highlights the importance of distinguishing substantive information from rhetori
cal choices and of redirecting attention away from topics that may be emphasized
for strategic rather than informational purposes.
Related Literature
This paper connects the literature on subjective belief formation with the emerging
research that leverages large language models (LLMs) for social science inference.
By using earnings calls as the textual input, the analysis develops experimental en
vironments that cannot be implemented through traditional experimental designs.
Subjective beliefs and analyst expectations. A substantial body of research shows
that equity analysts form expectations under cognitive constraints and frictions,
and examines the determinants and consequences of these limitations. This litera
ture includes studies that analyze quantitative forecasts obtained from surveys or
elicited through the traditional Institutional Brokers Estimates System (I/B/E/S).
(Easterwood and Nutt (1999), Diether et al. (2002), Livnat and Mendenhall (2006),
Greenwood and Shleifer (2014), Bouchaud et al. (2019), Ma et al. (2024), Bordalo
et al. (2019, 2024, 2025), Giglio et al. (2021), Bastianello and Fontanier (2023); Bas
tianello et al. (2024); Bastianello and Fontanier (2025), Nagel and Xu (2022), Ben
David and Chinco (2024), Dahlquist and Ibert (2024), De ́caire and Guenzel (2023);
De ́caire et al. (2024), De La O and Myers (2021, 2024), De La O et al. (2025)).
A rapidly expanding literature combining machine learning, textual analysis,
and finance to study belief formation (Binsbergen et al. (2023), Charles and Sui
(2025); Charles and Kendall (2025), Bybee (2025), Giglio et al. (2022), Bastianello
(2022), Gormsen and Huber (2024, 2025), Bianchi et al. (2024), Gabaix et al. (2025),
Chen and Huang (2024), Hailiang Chen and Peng (2025), Lopez-Lira and Tang
6

(2023), Lv (2024), Cohen and Nguyen (2024), Sarkar (2025), Stolborg and Green
wood (2025)).6
Recent work has increasingly used sell-side equity analyst reports as a primary
data source. For example, De Rosa (2024), Ke (2024), and Bastianello et al. (2024)
combine these reports with I/B/E/S forecast data to study different dimensions of
analysts’ information processing, including memory, attention, and the structure
of their mental models.
In this paper, I take a complementary approach and examine analysts’ expectation
formation processes using corporate earnings calls, which allows me to measure
how the information environment of the corporate earnings calls shapes analysts’
beliefs.
LLMs as tools for empirical social science. Recent work shows that large lan
guage models can reliably reproduce classic behavioral patterns, simulate experi
mental decision-making environments, and act as transparent proxies for human
judgment (Horton (2023), Hansen et al. (2024), Manning et al. (2024), Bhagwat et al.
(2025), Ludwig et al. (2025), Kazinnik and Sinclair (2025)). They can also implement
causal inference through textual interventions, emulate survey-based expectation
formation exercises, and capture heterogeneity in how different in-silico “agents”
interpret the same information. Together, these findings demonstrate the potential
of LLMs to complement or substitute traditional experimental and survey methods
in social science research.
Financial disclosures and textual analysis. This paper also builds on research
examining the informational role of corporate narratives. A growing body of work
analyzes how different forms of financial disclosures shape market participants’
beliefs and decisions. Studies using corporate earnings calls, including Dzielin ́ ski
et al. (2017), Hassan et al. (2019), Cohen et al. (2020), Li et al. (2021), Mamaysky
et al. (2023), Meursault et al. (2023), Sautner et al. (2023), Cohen and Nguyen (2024),
and Siano (2025), investigate the linguistic and tonal features of managers’ commu
nication and their impact on investor reactions. Complementary research on 10-K
filings, such as Loughran and Mcdonald (2011), Hoberg and Phillips (2010), Hoberg
and Maksimovic (2015), Hoberg and Phillips (2016), and Kim and Nikolaev (2024),
6 See Kothari et al. (2016) and Giglio et al. (2025) for a more extensive review.
7

explores how narrative content and disclosure structure contribute to the transmis
sion of firm-specific information. Together, these studies highlight the central role
of corporate communication in shaping how information is interpreted in financial
markets.7
Contribution. By integrating these strands, this paper proposes a framework in
which LLMs are used to construct counterfactual versions of earnings calls, de
signed to test how specific linguistic changes affect analysts’ belief updating. In
doing so, the paper contributes to both the behavioral finance literature on sub
jective expectations and the methodological literature on LLMs as instruments for
social-scientific experimentation.
Outline. Section 2 describes the data, including the construction of text-based
features and the definition of the prediction tasks. Section 3 illustrates the novel
methodology. Sections 4 and 5 present the empirical results on the prediction
of analysts’ beliefs and on the treatment effects of counterfactual earnings calls,
respectively. Section 6 concludes.
2 Data
Annual earnings announcements are scheduled corporate events through which
firms disclose fundamental information to the market, most notably the earnings
figures that give the event its name. On such occasions, publicly traded firms typi
cally hold earnings calls, during which senior management reports recent financial
results and provides forward-looking guidance to investors and financial analysts.
It has also become increasingly common for firms to file their annual 10-K reports
with the SEC within two days of the earnings release (Arif et al., 2019).
Trying to predict the future, financial analysts incorporate a large number of
data and information sources, use complex models and engage in corporate inter
actions. In this paper, I assume that the financial statements filed in these 10-Ks
enter analysts’ information set and shape their expectations about the future per
formance of the company. In addition, I control for standard stock-level character
istics, obtained from the Jensen et al. (2023) dataset (henceforth the JKP dataset), to
7 See Hoberg and Manela (2025) for a more extensive review of papers and future directions.
8

measure the predictive contribution of earnings call content, beyond information
that may be contained in accounting and market-based firm characteristics.
2.1 Corporate Earnings Calls
I obtain earnings conference call transcripts from Capital IQ–Transcripts, which
provides verbatim records of corporate and institutional events. I retain all English
language transcripts related to US public companies that announce their annual
earnings. Although I use the full history of available calls, coverage before 2008 is
sparse and relies mostly on other sources (e.g., SeekingAlpha). My sample com
prises 35,203 earnings call transcripts corresponding to annual earnings announce
ment days, for a total of 5,370 companies, covering the full set of forecast horizons
considered in this study. Details on the dataset are in Section A in the appendix.
Earnings calls typically consist of two distinct sections: a prepared statement by
executives, followed by a question-and-answer (Q&A) session that allows investors
and financial analysts to comment, pose questions, and potentially challenge man
agement’s remarks. The Capital IQ data are available at the speaker level, allowing
the two segments of each earnings call—i.e., the prepared remarks from manage
ment and the Q&A session—to be distinguished. For the rest of the analysis, I
focus only on the management remarks and how these affect analyst expectation
formation.
Figure 1 shows that, over the sample period, the number of earnings calls
related to annual earnings announcements is stable at roughly 2,000 per year.
The structure of these calls is likewise stable, with an average length of about
3,000 words for the management speeches. The only two notable deviations oc
cur around the 2008 Financial Crisis and the outbreak of the Covid-19 crisis, when
these remarks were, on average, about 10% longer.
Immediately following these days, the volume of financial analyst reports surges,
reflecting the assimilation and processing of the newly released information, as il
lustrated in Figure 2.
2.2 Analyst Forecasts
I construct the sample of analyst expectations using analyst-level earnings-per
share (hereafter EPS) forecast data from the Institutional Brokers’ Estimate System
9

(IBES) Detail Unadjusted History database, which contains earnings forecasts sub
mitted by sell-side analysts. For the purposes of my analysis, I restrict the sample to
U.S. companies and focus on one-, two-, and three-year-ahead forecasts. The IBES
Detail Unadjusted History dataset reports analyst–firm–date-specific forecasts and
realizations without retroactive adjustments for corporate actions such as stock
splits.8 These corporate actions can introduce mechanical discrepancies between
forecasts and realizations (Diether et al., 2002; Bouchaud et al., 2019). To address
this, I adjust all EPS forecasts and realized EPS values to the prevailing share count
to ensure comparability. I obtain cumulative share adjustment factors (CFACSHR)
from the CRSP daily stock file (dsf), which I merge with IBES using the WRDS
IBES–CRSP linking table (ibcrsphist). Following this merge, I retain only ob
servations with a valid link at the time of the forecast announcement. When the
forecast date falls outside the CRSP trading calendar, I use the adjustment factor
from the closest prior trading date. Finally, I impose additional filters to ensure
data quality, such as correcting for temporal inconsistencies between forecast an
nouncement dates and other relevant dates.9
Following standard practice in the literature (Bouchaud et al., 2019), I use earn
ings yields, i.e., earnings-to-price ratios, rather than raw EPS values. To avoid
look-ahead bias, I use the price prevailing at the time of the earnings call. This
scaling accounts for heterogeneity in firm size and price levels, making compar
isons across firms and over time more meaningful. Nevertheless, for simplicity, I
continue to refer to all variables of interest as Earnings.
Summary information on the number of firms, of brokers and analysts in the
final sample per horizon are reported in Table 1. As expected, broker coverage is
incomplete across forecast horizons: most brokers issue near-term forecasts, while
only fewer provide projections at longer horizons. Consequently, observations thin
out as the horizon extends. All industries are included in the baseline sample, as
the general perspective used in this paper adopts measures which are normalized
using each firm’s past accounting figures as a benchmark.
8 Evidence suggests that concerns about other retroactive changes and ID reshuffling are relatively minor in U.S. data, indicating that the dataset can serve as a reliable proxy for market expectations. See Law (2023) for a comprehensive discussion of these limitations and their empirical relevance. 9 See https://wrds-www.wharton.upenn.edu/pages/support/support-articles/ibes/ anndats-actdats-some-situations-where-not-case/ for examples.
10

2.3 Matching Forecasts to Earnings Calls
I link analyst forecasts to conference calls by matching Capital IQ transcripts with
forecast data from the IBES Unadjusted Detail file, using the linking tables provided
by WRDS.
To capture the effect of the flow of information present in the earnings call on
analysts’ expectation-formation process, I focus on all forecasts issued within 15
days of the call date, thereby reducing the risk that subsequent news contaminates
their forecasts. I construct the consensus forecast by computing the median of
all available forecasts, rather than relying on the consensus provided by the data
vendor, since the latter may incorporate forecasts outside the event window.
I exclude earnings call transcripts that are associated with multiple companies,
as such cases could create ambiguous links between the text and firm-specific out
comes and potentially induce spurious predictability.
2.4 Accounting and Market-Based Information
As a starting point, I incorporate accounting and market-based information, which
reflect both realized fundamentals and market perceptions, in order to measure the
incremental predictive power of textual features10.
2.4.1 Jensen-Kelly-Pedersen (JKP) stock characteristics
The first purpose of this work is to compute the predictive value of earnings call
transcripts beyond any hard information contained in financial statements or avail
able to financial analysts from the stock market. While modeling such a benchmark
is impossible—I cannot know what analysts actually know or think—I assume their
information set is largely captured by the set of market- and accounting-based stock
characteristics from the JKP dataset (Jensen et al., 2023). This dataset includes 153
characteristics. Following the taxonomy in Jensen et al. (2023), I group firm charac
teristics into 13 clusters: Accruals, Debt Issuance, Investment, Leverage, Low Risk,
Momentum, Profit Growth, Profitability, Quality, Seasonality, Short-Term Reversal,
Size, and Value. These clusters provide a structured representation of the large
cross-section of characteristics used in asset pricing studies.
10 In the machine learning literature, the outcome and predictors are typically referred to as the ”target” and ”features.” I adopt this nomenclature throughout this paper.
11

I merge this dataset so that all conditioning variables reflect information avail
able in the month preceding the conference call. In addition to the levels of these
characteristics, I compute one-year changes.
Standardized Unexpected Earnings (SUE). The Standardized Unexpected Earn
ings (SUE) is a measure of earnings surprise, defined as the deviation of reported
earnings per share from the prevailing analyst consensus prior to the release. The
JKP data already include SUE, but because I merge the dataset using information
from the month before the earnings call, the variable refers to the prior quarter
rather than the quarter of interest.Therefore, I recompute SUE from the IBES data.
Following Livnat and Mendenhall (2006), I use only estimates issued within 90
days before the earnings call date, retaining the latest forecast when an analyst
issues more than one in order to avoid stale information. I then normalize the
resulting earnings surprise by the stock price at the report date.
2.4.2 Financial Statements
Financial Statements (FS) are a central input in analysts’ work, as they reveal trends
in accounting information and provide the basis for constructing financial ratios. In
my analysis, I include the three main statements filed by firms in their 10-Ks: the
Income Statement, Balance Sheet, and Statement of Cash Flows.11 I match these
with the dataset described above using company identifiers and fiscal year-end
dates. In addition to the levels of these variables, I compute one-year changes, as I
do for the JKP characteristics.
Because these variables differ in scale, distribution, and time variation, I rank
standardize them within each date to the [−0.5, 0.5] interval before merging. This
procedure places all variables on a common, bounded scale that is robust to outliers
and time-varying dispersion.
11 In order to retrieve Balance Sheet, Income Statement and Statement of Cash Flows, I use the query available at https://wrds-www.wharton.upenn.edu/pages/ get-data/compustat-capital-iq-standard-poors/compustat/north-america-daily/ simplified-financial-statement-extract/.
12

3 Methodology
3.1 Analyst Expectation Formation around Earnings Calls
Analysts are more active in issuing forecasts immediately after earnings calls. Fig
ure 2 shows a sharp increase in the issuance of analyst forecasts immediately after
the earnings call. Prior studies suggest that this surge reflects analysts processing
newly released financial statements and earnings information. In this paper, I ar
gue that the way management frames information, and the qualitative guidance
provided during earnings calls, matter over and above the quantitative disclosures.
To do so, I study how earnings-call content affects analyst forecasts, restricting
attention to forecasts issued within 15 calendar days after the earnings call to min
imize interference from subsequent news. I use a 15-calendar-day period after the
earnings call to capture the the majority of forecasts related to that precise event,
while limiting exposure to unrelated news. I then construct a consensus forecast
by taking the median of all forecasts within this window.
In the analysis, following Bouchaud et al. (2019), I use the earnings yield (earn
ings per share divided by stock price), which facilitates comparisons across firms
relative to raw EPS. To avoid look-ahead bias, I use the stock price prevailing at
the time of the earnings call. Nevertheless, for simplicity, I continue to refer to the
forecasted and realized variable as earnings.
I track how analysts adjust their beliefs along three dimensions following an
earnings call. First, I examine the median expected change in analysts’ forecasts,
a robust aggregate measure that summarizes how expectations shift. Second, I as
sess whether this consensus tends to overshoot or undershoot the earnings that are
ultimately realized, signaling the presence of under- or over-reaction. Third, I con
sider the cross-sectional standard deviation of forecasts in the consensus to gauge
the degree of disagreement among analysts. Together, these measures describe
not only the central movement in beliefs but also their accuracy and the degree of
consensus.
For clarity, Figure 3 summarizes the earnings-release timeline. At date t, the
firm reports results for the prior period, Yt−1, and holds the earnings call. Ana
lysts then issue (or revise) forecasts for Yt+h within the subsequent 15-calendar-day
window. At date t + h, the firm reports realized earnings Yt+h.
To describe the variables related to analysts behavior, let me assume at t, a
13

company i releases
yi,t := the earnings for the previous period, Yt−1, released at t.
and holds an earnings call with financial analysts and investors. Then, the analysts
issue forecasts for a set of forecast horizon, incorporating information just heard.
Their forecasts are aggregated forming a consensus estimate,
Fi,t(yi,t+h) := consensus formed at t, for the earnings released at t + h.
During the earnings call, the newly realized earnings becomes public and enters
analysts’ information sets. As a naive benchmark—abstracting from any private
information—there is no reason to expect the future earnings to deviate from the
most recently realized level. To characterize departures from this benchmark, Eq. 1
defines the Analysts’ Expected Change in Earnings, capturing how analysts be
lieve the future value will differ from the current one. For each firm i and horizon
h, I define
ECi,t,h
| {z }
Expected Change in Earnings
= Fi,t(yi,t+h) − yi,t. (1)
Individual financial analysts naturally form their own expectations about future
earnings, even when exposed to the same information during a corporate earnings
call. Such dispersion can arise from heterogeneous priors, risk tolerances, models,
and, crucially, differences in how the same language is interpreted. Therefore,
I examine cross-analyst disagreement using the dispersion of expected changes,
defined in Equation 2 for a firm i and a forecast horizon h, and test whether specific
linguistic features are systematically associated with higher or lower disagreement
in expectations. To ensure comparability across firms and consistency with other
variables here defined, I scale the cross-sectional dispersion of forecasts by the stock
price prevailing at the earning call date and define Forecast Disagreement as
σECi,t,h
Pi,t
| {z }
Forecast Disagreement
= St. Dev. ECi,t,h (2)
Although corporate earnings calls do not mechanically determine these real
izations, I estimate a model predicting the realized change in earnings to identify
14

which narratives in corporate communications are most closely related to real
ized fundamentals. This, in turn, allows me to construct an in-silico counterfac
tual through which I can study how analysts form their beliefs. I define Realized
Change in Earnings as follows:
∆Ei,t,h
| {z }
Realized Change in Earnings
= yi,t+h − yi,t (3)
All the target variables are trimmed at the 5% and 95% levels. The summary
statistics for the afore-defined variables can be found in Table 2.
3.2 Representation in Textual Spaces: Earnings Call Embeddings
Text is inherently high-dimensional and context-dependent. To obtain compact nu
meric representations that preserve semantics and tone, I use textual embeddings.
Textual embeddings are continuous, fixed-length vector representations of text
that place words, sentences, or documents in a geometric space where semantic
similarity corresponds to proximity. The geometry of this space captures nuances
such as synonymy, tone, and topical relatedness, providing a compact and mean
ingful summary of the original text.
State-of-the-art model embeddings are produced by transformer encoders trained
on large corpora with self-supervised objectives; they yield contextual representa
tions in which the same word can map to different vectors depending on its sur
rounding context.
Creating a framework able to predict future analyst forecasts from earnings call
transcripts presents two serious concerns: text length feasibility and look-ahead
bias . Earnings calls are long and often exceed transformer input limits, which can
make downstream tasks (classification, similarity) sensitive to how long texts are
chunked and aggregated. To mitigate this, I focus on the management’s prepared
remarks, the most structured and information, dense segment of each earnings call.
To represent each earnings call as a single vector, I compute textual embed
dings on non-overlapping segments of the transcript that fit the encoder’s con
text window. The resulting segment-level vectors must be combined to form a
document-level representation. There is no consensus on a uniquely superior pool
ing rule for long texts, and–consistently with prior practice–reasonable alternatives
perform similarly in this setting. I therefore employ an approach that preserves as
15

much information as possible, using the widely used Hugging Face transformers
library: within each segment, I average the token representations across all the to
kens, from the last transformer layer, and then aggregate the segment vectors to
obtain embeddings for each earnings call transcript. This approach retains signal
that is distributed across all the earnings call; results are qualitatevily similar under
common alternatives such as mean, max, or [CLS]-based pooling.
Text models can “peek into the future” if content leakage lets them read explicit
future cues (dates, magnitudes), or temporal leakage lets them learn from documents
that occur after the prediction target. Either failure mode would inflate perfor
mance and weaken the credibility of my counterfactual exercise. (Sarkar and Vafa,
2024).
Masking. A threat to the downstream tasks in this article would involve man
agers potentially mentioning metrics and accounting figures during presentation
in earnings calls, making the soft information and the framing of the latter uniden
tifiable with textual embeddings.
To address these issues, I mask all numerals e.g., accounting figures, guidance
ranges, percentages, dates, quarters/years, and ticker-like digit strings–masking
them using the model’s [MASK] token provided by the Hugging Face tokenizer.12
This forces the models to rely on semantics, tone, and discourse structure rather
than magnitudes or calendar markers (e.g., terms like “Q4 2022” or “+35%”), and
it prevents subtle forward references (such as “updated 2027 outlook”) from acting
as proxies for realized outcomes.
I also use a finance-specific pretrained encoder model i.e., ProsusAI/FinBERT,
whose training data extends to 2017, which I do not fine-tune on my earnings
calls dataset. Furthermore, this model was trained on general-domain and finan
cial news corpora, not on earnings-call transcripts, and its upstream training data
predate my evaluation windows.
This design attenuates the risk of look-ahead bias, where future information
would otherwise hamper prediction.
12 For reference, see https://huggingface.co/docs/transformers/en/main_classes/tokenizer.
16

4 Earnings Calls and Analyst Forecasts
Analysts are continuously exposed to a wide range of information. In forming
their forecasts, they routinely incorporate market-based information, balance sheets
and other financial statements into their models. A central question, however, is
whether the corporate communication conveyed during earnings calls also influ
ences analyst expectations. If it does, does this communication merely complement
existing numerical data—acting as a proxy for information already available—or
does it provide independent and additional predictive content?
4.1 Predicting Analyst Beliefs with Machine Learning
To address these questions, I train and evaluate two model specifications. The
first (i) is a stock characteristics-only model, which uses the JKP dataset together
with the most recent financial statements (in levels and one-year changes), the
prevailing abnormal stock return at the earnings call date, and the most recent
Standardized Unexpected Earnings. The second (ii) augments this baseline with
textual embeddings extracted from earnings call transcripts. The two specifications
comprise 446 and 1,214 features, respectively.
I employ a Gradient Boosting regressor, a machine-learning model which ac
commodates non-linearities and interactions while offering competitive computa
tional performance. The analysis is conducted separately by forecast horizon, in
order to assess whether the contribution of transcript-based textual features is con
centrated in the near term or persists at longer horizons.
For each forecast horizon and target variable, the most recent 30% of observa
tions are held out as an out-of-sample test set, while the remaining 70% are used
for model fitting and hyper-parameter tuning. To avoid overfitting and to ensure
robustness of the selected hyper-parameters, I implement K-fold cross-validation
within the training set.
Because all numerical values and dates are comprehensively masked, the text
features contain no forward-looking cues, eliminating content-based look-ahead.
In addition, the test data for these predictive exercises are well after the last time
stamp of the FinBERT training sample, ensuring that the embeddings are applied
strictly out-of-sample.
Out-of-sample performance is evaluated using two standard metrics: the Mean
17

Squared Error (MSE) and the R-squared statistic. The MSE measures the average
squared difference between predicted and actual values, as defined in Eq. 4, while
the R-squared captures the share of variance in the test set explained by the model
relative to the test-set mean, as reported in Eq. 5.
MSE(y, yˆ) = 1
n
n
∑
i=1
(yi − yˆi)2 (4)
R-squared(y, yˆ) = 1 − ∑in=1(yi − yˆi)2
∑in=1(yi − y ̄)2 (5)
Here, yˆi denotes the model’s prediction of the outcome yi for observation i, and
y ̄ represents the sample mean of the dependent variable in the test set. A positive R
squared indicates that the model explains more variation in the dependent variable
than a na ̈ıve benchmark that predicts only the sample mean.
This measure is used to evaluate out-of-sample performance; for readability, I
omit the “out-of-sample” (“OOS”) label in what follows.
4.2 Do Financial Analysts Pay Attention to Managerial Commu
nication?
To evaluate whether financial analysts pay attention to managerial communication,
I test whether textual features extracted from earnings calls provide incremental
predictive power beyond numerical information when forecasting analysts’ sub
sequent behavior. The idea is that, if analysts incorporate qualitative cues from
management discourse into their decision-making, the textual component should
convey additional information not already captured by quantitative variables.
In order to assess the incremental predictive value of textual features, I set up a
simple comparative framework.
Let {(yi, xiS, xiT)}in=1 be the time-ordered sample, where yi is one of the afore
mentioned four variables capturing analysts’ actions, xiS ∈ RpS are purely numeric
characteristics, and xiT ∈ RpT are textual embeddings.
I define xi := (xiS, xiT) and X := Xstock characteristics ∪ Xtextual embeddings, and adopt
a single generic modeling framework,
yi = f (k) z(k)
i + εi,
18

and instantiate it by varying only the predictor set:
(S) z(S)
i = xiS, hence yi = f (S)(xiS) + εi.
(T) z(T)
i = xiT, hence yi = f (T)(xiT) + εi.
(ST) z(ST)
i = (xiS, xiT), hence yi = f (ST)(xiS, xiT) + εi.
Figure 4 presents the R-squared values for models using textual features, the
(T) specification , alone across different forecast horizons and outcomes namely,
Expected Change, Forecast Disagreement, and Realized Change. The explanatory power
of text is consistently positive for expected changes and disagreement, ranging
from roughly 25% to 40% depending on the horizon. Although the contribution
slightly declines with longer horizons, the model still retains substantial predictive
strength even at three years ahead.
Overall, the figure highlights the remarkable informativeness of text-based fea
tures: even without incorporating any numerical or firm-level fundamentals, the
model captures a sizeable share of the variation in analyst expectations and real
ized outcomes. This performance underscores how linguistic signals embedded
in earnings calls or reports contain rich forward-looking information that analysts
and markets process over time.
This suggests that language in earnings calls not only informs near-term ana
lyst reactions but also embeds systematic cues that relate to longer-term forecast
accuracy.
Table 3 summarizes out-of-sample performance across horizons. These results
extend previous research by highlighting the role of highly non-linear machine
learning methods and the value of incorporating an increasingly rich set of predic
tors. Beyond traditional accounting variables, market-based measures and analyst
related information contribute meaningfully, with unstructured inputs like textual
embeddings yielding incremental predictive performance. (Chen et al., 2022)13
13 Quoting from Chen et al. (2022): “We use two machine-learning methods to predict the level of earnings and the amount of earnings changes following the same rolling windows as in Subsection 3.2.3. Consistent with prior research, we observe a low out-of-sample R-squared of 5.3% (6%) for random forests (stochastic gradient boosting) in predicting the level of one-year-ahead earnings, lower than the out-of-sample R-squared of 7.5% for a simple random-walk model. We also observe a low out-of-sample-
 R-squared of 8% (5.8%) for random forests (stochastic gradient boosting) in predicting the amount of one-year-ahead earnings changes.”
19

Empirical Test of Analyst Attention to Managerial Communication. To further
validate whether the inclusion of textual features enhances predictive performance
relative to the characteristics-only benchmark, I apply the MSPE-adjusted test for
nested models developed by Clark and West (2007). This approach is particularly
suitable in settings where models are nested and traditional measures such as out
of-sample R-squared may be noisy or difficult to interpret in small samples.
The test compares the squared forecast errors of the competing models but
adjusts for the mechanical disadvantage faced by the larger, nested specification:
additional estimated parameters can inflate prediction error even when the ex
tra information is genuinely useful. The adjustment removes this noise-induced
penalty and evaluates whether the average difference in accuracy is positive, with
the resulting test statistic defined in Eq. 6.
CW =
d ̄ ̃
q
Vdar(d ̃t+1)/T
, d ̄ ̃ = 1
T
T
t= ∑1
(e(r)
t+1)2 − (e(u)
t+1)2 + yˆ(r)
t+1 − yˆ(u)
t+1
2 (6)
I report Clark–West statistics for nested forecast comparisons in Table 5. The
statistics are computed from the adjusted loss differential using heteroskedasticity
and autocorrelation-robust (Newey–West) standard errors appropriate for h-step
ahead forecasts. The alternative is one-sided (the augmented model is better).
Across targets and horizons, the Clark and West t-statistics are positive and large,
indicating that adding transcript-based textual features reduces forecast MSE rel
ative to the benchmark. The implied mean-squared-error reductions are economi
cally meaningful, typically about 6–13%.
Is It Rational for Financial Analysts to Pay Attention to Corporate Communica
tion? Table 4 compares the predictive accuracy of the proposed model to analysts’
forecasts across different horizons, thereby assessing whether it is rational for fi
nancial analysts to pay attention to corporate communication. The Mean Squared
Error (MSE) values represent the baseline forecast error, while the “Gains” columns
indicate percentage improvements relative to this benchmark when incorporating
textual and numerical information.
At the one-year horizon, the model achieves only a modest improvement over
analysts’ forecasts, with a total gain of 8.38%. This limited enhancement suggests
20

that the immediate informational content of corporate communication may be ei
ther already incorporated into analysts’ assessments or overshadowed by short
term quantitative signals. It is also possible that analysts initially overreact to qual
itative cues, leading to a temporary reduction in the predictive value of textual
information.
By contrast, the two- and three-year horizons exhibit substantial gains of 27.50%
and 31.64%, respectively, indicating that the incorporation of textual variables mean
ingfully enhances forecast accuracy over longer periods. This pattern implies that
the qualitative dimensions of managerial discourse, such as tone, strategic em
phasis, and forward-looking statements, capture aspects of firms’ trajectories that
unfold only gradually and are not fully reflected in contemporaneous numerical
data.
Overall, the results suggest that while short-term expectations may be ade
quately informed by quantitative fundamentals, the integration of textual informa
tion becomes increasingly valuable for medium- to long-term forecasting. Hence,
paying attention to corporate communication is rational for financial analysts seek
ing to understand firms’
4.3 Measuring the Impact of Fundamental News
Understanding how analysts process fundamental news is central to evaluating the
efficiency of their forecast revisions. Earnings announcements and related disclo
sures convey both quantitative and qualitative information about firms’ underlying
fundamentals, and the way analysts interpret these signals can shape the dynamics
of market expectations. To assess this process, I measure the impact of funda
mental news on analysts’ forecast updates following earnings calls. Easterwood
and Nutt (1999) show that analysts systematically underreact to bad news and
overreact to good news, generating predictable forecast errors around earnings an
nouncements. To relate my setting to this classic result—and to investigate how
these dynamics extend to the context of earnings calls—I examine the relationship
between standardized unexpected earnings (SUE) and analysts’ forecasts. Figure 5
reports partial dependence plots (PDPs) of the one-year targets on SUE. These PDP
charts trace the marginal effect of a predictor on the model outcome, averaging
over the distribution of other covariates, and thus provide a transparent view of
how forecasts vary with earnings surprises.
21

The patterns reveal familiar asymmetries in analysts’ reactions: (a) forecast er
rors rise monotonically with SUE, with a steep transition around modest negative
surprises and saturation in the tails; (b) realized changes in earnings exhibit an
asymmetric, step-like increase after large negative surprises, plateauing and then
slightly tapering for very positive surprises, consistent with mean reversion; (c)
expected forecast changes decline with SUE—negative surprises are followed by
upward revisions, while positive surprises are tempered by smaller or even neg
ative adjustments; and (d) forecast disagreement is U-shaped, lowest near zero
surprise and higher at the extremes, suggesting greater dispersion when news is
unusually good or bad.
I compute the inter-quartile shift, a ”typical” move in SUE, (from the 25th to
the 75th percentile) in standardized unexpected earnings (SUE) as the baseline
variation. These results provide a benchmark against which, in later sections, I
compare the effects of language morphing with large language models, thereby
assessing whether earnings call framing can move forecasts in ways comparable to
fundamental earnings news.
4.4 Discussion
The results provide clear evidence that financial analysts attend to earnings calls
and that such attention has incremental informational value beyond traditional
quantitative predictors. Across specifications, augmenting benchmark models based
on accounting variables and stock characteristics with textual features from earn
ings calls improves predictive performance. While out-of-sample R2 remains a
noisy metric, the Clark and West (Clark and West, 2007) test consistently indicates
that the incremental forecasting value of the narrative component is genuine rather
than spurious.
These findings imply that analysts do not rely exclusively on hard data when
forming expectations; they also process qualitative and contextual dimensions of
managerial communication. From an informational-efficiency perspective, this is
potentially beneficial: even models predicting realized earnings improve when tex
tual features are included, suggesting that the narratives emphasized in earnings
calls embed information about fundamentals that is not fully captured by standard
predictors.
At the same time, the nature of analysts’ attention raises important open ques
22

tions. It remains to be established whether analysts focus on the same narrative
dimensions that predict realized earnings—thereby incorporating value-relevant
information in a manner consistent with rational processing—or whether atten
tion is drawn to different, potentially more salient but less informative aspects of
corporate communication. Disentangling these possibilities is essential to deter
mine whether narratives primarily operate as carriers of genuine information or as
channels for behavioral bias in financial markets.
5 Counterfactual Earnings Calls with Large Language
Models
The ideal experimental setting for isolating the causal effect of language on an
alyst perception would resemble a controlled environment in which a group of
financial analysts resets their priors and issues new forecasts in response to alter
native narrative formulations of the same earnings call. Such a laboratory-style
manipulation is infeasible in practice. To address this challenge, I adopt a novel
in-silico approach that leverages recent advances in natural language processing
(NLP). While early NLP techniques enabled the transformation of textual data into
vector representations suitable for econometric modeling, they lacked the capac
ity to simulate variations in rhetorical framing or tonal emphasis. The emergence
of large language models (LLMs) overcomes this limitation by enabling the sys
tematic generation of semantically equivalent, but stylistically distinct, versions of
CEO earnings call presentations. This technological development allows for the
construction of a counterfactual framework in which the informational content re
mains fixed, while linguistic framing is varied exogenously—thus permitting a
thorough analysis of language effects on analyst behavior.
To do so, I generate synthetic variants of management speech using large lan
guage models (LLMs) implemented through the Hugging Face Transformers li
brary. Specifically, I employ Meta’s LLaMA 3 70B-Instruct model, a chat-optimized
transformer fine-tuned for instruction-following and coherent text generation in
conversational contexts.
For each document, I generate the output paragraph by paragraph in sequential
forward passes, ensuring internal consistency and preserving global structure. To
control the realism and interpretability of the generated texts, I apply prompt engi
23

neering techniques that guide the model to preserve numerical content (e.g., finan
cial figures) while varying qualitative language. Specifically, I structure prompts
in a way that keeps key values unchanged and induces linguistic transformations
within a narrow range of word count variation, thereby enabling controlled com
parisons between original and modified statements. See Section B in the appendix
for further details.
This setup allows for systematic manipulation of the rhetorical framing and tone
of the earnings call content, holding constant the quantitative core of the message.
In this regard, look-ahead bias does not affect our results because we train the
predictive model ex ante, apply modifications through prompting to the LLM, and
evaluate performance exclusively on out-of-sample morphed embeddings.
5.1 Methodology for Language Generation
Language generation is a high-dimensional statistical process that depends on the
careful tuning of hyper-parameters governing the model’s stochastic output. Un
like conventional econometric models, there are no universally accepted guidelines
for tuning these parameters, as their effectiveness depends on complex interac
tions and the specific textual context. I adopt standard settings widely used in
practice. The temperature parameter controls the entropy of the sampling distri
bution; lower values yield more deterministic output. I set temperature to 0.7, a
commonly used value in production settings such as ChatGPT. The top p parame
ter (set to 0.95) constrains sampling to the smallest set of candidate tokens whose
cumulative probability exceeds 95%, thereby excluding implausible continuations.
These parameters jointly influence the diversity, coherence, and rhetorical varia
tion of the generated text, and thus have meaningful implications for the empirical
content and the realism of simulated earnings calls.
5.2 LLM as a Judge
While large language models enable scalable counterfactual text generation, they
remain susceptible to hallucinations that can undermine empirical validity. For
example, a synthetically altered earnings call transcript might inadvertently report
incorrect earnings figures, thereby biasing the predictive accuracy metrics reported
in this paper. Even with carefully engineered prompts, instruction-tuned chat vari
ants can introduce spurious references to unrelated firms, stray numerical data, or
24

extraneous statements drawn from their training corpus. Without an ex post val
idation mechanism, these unintended deviations threaten to produce misleading
inferences and spurious results.
This unintended behavior, commonly referred to as “hallucination” in the ML
literature, has been documented extensively by computer scientists and practition
ers (e.g., Huang et al., 2024). Relying on manual inspection to verify whether
prompt-driven modifications have been executed correctly is both laborious and
inherently subjective, exposing the analysis to evaluator bias. To overcome these
limitations and ensure the internal validity of our counterfactual text experiments,
I implement an automated “judge” using another instance of the model described
above, Meta’s LLaMA 3 70B-Instruct. LLM-as-a-judge functions as an automated
validation layer: a pretrained LLM assigns integer scores to both original and coun
terfactual transcripts along predefined dimensions—such as confidence, sentiment,
and guidance strength—while flagging any spurious insertions (e.g., hallucinated
figures or false statements). (Li et al., 2024)
By comparing these scores across versions, I ask the LLM to classify each mor
phed transcript into one of three categories:
1. Yes — the morphing was executed correctly and the language modification is
clear and evident;
2. I am unable to determine — the morphing quality is uncertain;
3. No — the morphing is inadequate.
I discard every variant that fails to meet the highest quality standard, thereby
ensuring that the predictive analyses are based exclusively on precisely controlled
linguistic change. The details on the prompt I use are in Section C.
This methodology helps create and validate credible textual counterfactuals by
establishing an objective and reproducible mechanism for assessing the quality of
generated texts. The LLM-as-a-judge framework acts as a consistency filter that
ensures counterfactuals preserve the informational core of the original transcript
while exhibiting a controlled and interpretable linguistic modification. By system
atically scoring and classifying each counterfactual according to predefined seman
tic and stylistic dimensions, the judge model operationalizes the notion of “credi
ble” counterfactuals—texts that differ meaningfully in the intended attribute (e.g.,
tone or sentiment) yet remain faithful to the underlying economic message.
25

In doing so, the approach mitigates two critical threats to internal validity.
First, it minimizes the risk of semantic drift, that is, the introduction of unintended
changes to factual or contextual content that could distort the causal interpreta
tion of downstream results. Second, it limits evaluation bias by replacing subjective
human judgment with an automated and transparent scoring procedure. Because
the same pretrained model family is used for both generation and evaluation, the
validation process benefits from consistent representational semantics across tasks,
enhancing the reliability of the comparisons.
5.3 Narratives and Counterfactual Earnings Calls
To isolate the effect of language on analyst forecasts, I generate counterfactual ver
sions of earnings call transcripts in which the underlying quantitative content is
held constant, but the linguistic framing is systematically modified.
The goal of this exercise is to assess how much of the analyst reaction can be
attributed to style and delivery, rather than to substance. More in detail, I generate
versions of the same earnings call that vary according to a number of linguistic
characteristics, and evaluate how a classifier trained on historical data responds to
each variant. The linguistic characteristics I use are:
• Confidence: Refers to how assertive and in-control the speaker sounds. This
is adjusted by prompting the model to adopt the tone of a confident CEO, us
ing decisive language, avoiding hedging, and conveying authority over strat
egy and performance.
(Mayew and Venkatachalam, 2012; De la Parra and Gallemore, 2024)
• Global Focus: Captures the emphasis placed on broader macroeconomic and
industry-wide conditions. The model is guided to highlight external forces,
such as inflation, regulation, or global trends, and to link them explicitly to
the firm’s performance.
(Song and Stern, 2025; Link et al., 2023; Hassan et al., 2019)
• Guidance: Reflects how specific and forward-looking the company’s state
ments are. Stronger guidance is elicited by prompting clear, actionable expec
tations, directional indicators, and strategic intent, avoiding vague or generic
phrasing.
26

(Call et al., 2024; Bozanic et al., 2018; Anilowski et al., 2007)
• Sentiment: Denotes the overall emotional tone of the message. The text is
modified to sound more positive and optimistic by emphasizing momentum,
wins, and enthusiasm for the company’s future.
(Price et al., 2012; Huang et al., 2014)
• Jargon: Indicates the degree of technical or finance-specific language used.
Higher jargon is introduced through prompts that incorporate institutional
and domain-specific terminology without changing the underlying facts.
(Li, 2008; Miller, 2010)
• Uncertainty: Reflects the visibility and emphasis of risk-related language.
To increase risk salience, prompts guide the model to explicitly highlight
uncertainties, market challenges, and operational risks in a measured and
professional tone.
(Kravet and Muslu, 2013; Lyle et al., 2023)
Because the generated calls differ only in their language, any change in the
model’s prediction can be interpreted as an effect of linguistic framing on analyst
perception. This setup allows me to quantify the persuasive power of narrative,
assess the potential for strategic disclosure, and explore whether firms could influ
ence analyst expectations through subtle shifts in communication—without alter
ing the underlying message related to financial fundamentals.
The methodology also sheds light on the boundaries of predictability: how far
a firm’s rhetorical adjustments can shift market expectations, and whether such
shifts align with or deviate from future fundamentals.
I illustrate this morphing exercise in Figure 7, where I project both the origi
nal and morphed transcripts into a two-dimensional semantic space. Each panel
corresponds to a distinct linguistic attribute: guidance strength, jargon density,
speaker confidence, global focus, sentiment, and risks mentioned, the original base
line in the bottom panel. The heatmaps reveal that morphing pushes transcripts
toward the extremes of these attributes, generating clearly differentiated clusters.
This demonstrates that the procedure succeeds in producing systematically varied
earnings calls, thereby enabling the in-silico experimental design.
27

To further illustrate the results of my morphing exercise, I report Table 6, which
illustrates how the original text of an earnings call can be systematically morphed
along distinct narrative dimensions. Each row presents a representative passage
from an original managerial statement alongside a transformed version that am
plifies a specific linguistic or narrative feature. The six dimension i.e., Guidance,
Jargon, Confidence, Global Focus, Sentiment, and Uncertainty, capture comple
mentary aspects of managerial communication that may influence analysts’ inter
pretation of firm fundamentals. These examples serve to clarify the nature of the
textual transformations applied in the empirical analysis and to make the corre
sponding treatments intuitively interpretable.
Relevance of Linguistic Dimensions. Although these narratives (Shiller, 2017)
draw upon established concepts in economics and finance, their direct connec
tion to analyst behavior remains largely unexplored. In this paragraph, I examine
whether the six previously defined linguistic “factors” are predictive of analysts’
expected changes in earnings, forecast dispersion, and realized earnings changes.
The analysis follows the estimation framework underlying Figure 4, with the
key difference that, instead of employing the full 768-dimensional textual embed
dings, I use six-dimensional vectors that capture the intensity of each specific lin
guistic dimension within the earnings call. To measure these dimensions, I employ
Llama 3.1, prompting each chunk of the transcript to rate the presence of the corre
sponding linguistic factor on a scale from 1 to 10. I then compute the average score
across all chunks for each call.
As shown in Figure 6, these linguistic factors exhibit substantial predictive
power for analyst expectations and realized earnings changes. They account for
approximately 25–35% of the explanatory capacity of the full textual embeddings,
as reported in Figure 4, suggesting that these narrative dimensions capture core
mechanisms through which language in earnings calls shapes analysts’ beliefs and
firm performance.
5.4 Predicted Treatment Effects (PTEs) induced by Narratives
To summarize, I use one of the most recent language models, Llama 3, to generate
morphed versions of each earnings call transcript, specifically designed to empha
size and incorporate a given narrative dimension. Formally, the transformation can
28

be expressed as
LLM(ECi,t) = Morphed ECi,t, (7)
for each company i holding an earnings call at t, where the large language
model produces a modified embedding that reflects the targeted linguistic theme.
I then compute the Predicted Text Effect (PTE) associated with the morphing proce
dure as
PTEi,t,morph = F(SCi,t, Morphed ECi,t) − F(SCi,t, ECi,t), (8)
where F(fundamentals, textual features) is the model trained on the stock char
acteristics and the original earnings calls- The PTE measures the change in the
model’s predicted outcome when the textual representation is altered to highlight
the specified theme, holding all other market-based firm-level and accounting pre
dictors (SCi,t) constant.
I use the in-silico laboratory to compute the predicted treatment effect (PTE) of
applying linguistic morphings to the management presentations in earnings calls,
while holding all other factors constant. The laboratory setting allows me to sys
tematically vary tone or topical emphasis in the transcripts and then trace the im
plied change in analysts’ reactions, as captured by the machine-learning models
described in the previous sections.
The PTE therefore represents the marginal effect of a counterfactual change
in communication style, abstracting from any concurrent shifts in fundamentals
or other explanatory variables, as I use the model specification including all the
available features.
Figures 8 and 9 present the average predicted treatment effects (PTEs), ex
pressed in basis points, for each linguistic morph applied to earnings calls. These
effects quantify how shifts in communication style—independent of any change
in firm fundamentals—alter analysts’ forecasts and realized outcomes. To bench
mark the magnitude of these effects, I also report the model-implied response to
an inter-quartile change in fundamental earnings news, defined as the difference
in predicted outcomes when standardized unexpected earnings (SUE) move from
the 25th to the 75th percentile of its distribution, as computed in prior sections.
Figure 8 displays the average predicted treatment effects for both expected and
realized outcomes across linguistic dimensions. The chart highlights that narra
tive tone and content meaningfully shape the information that analysts extract
from corporate communication. The most pronounced effects emerge in the “Senti
29

ment” and “Confidence” dimensions, where both expected and realized responses
are positive and of comparable magnitude, indicating that optimistic or assertive
managerial language systematically elevates analysts’ forecasts and is partially val
idated by subsequent firm performance. Conversely, “Uncertainty” exerts a strong
negative effect on realized outcomes, suggesting that ambiguous or risk-laden dis
course dampens analysts’ expectations and is indeed associated with weaker future
fundamentals. The “Global Focus” and “Guidance” categories exhibit moderate
positive effects, consistent with the notion that outward-looking and directive com
munication enhances perceived managerial clarity. Overall, the close alignment be
tween expected and realized treatment effects supports the model’s interpretability,
as it suggests that linguistic features influence beliefs in economically meaningful
ways.
Figure 9 isolates the predicted treatment effects of each narrative dimension on
forecast disagreement, capturing how language shapes the dispersion of analysts’ ex
pectations rather than their central tendency. Here, “Uncertainty” again stands out
as the dominant driver, with a markedly higher treatment effect than any other
linguistic feature. This finding aligns with the theoretical expectation that ambigu
ous communication amplifies interpretive heterogeneity among analysts, leading
to greater disagreement. However, confident, sentiment-rich, and globally oriented
discourse also increase forecast dispersion, albeit to a lesser extent. This pattern
suggests that even positive or outward-looking narratives can introduce divergent
interpretations among analysts, possibly because such language allows multiple
readings of firms’ strategic intent or the macroeconomic implications of manage
rial optimism. Together, Figures 8 and 9 underscore that managerial narratives not
only shift the level of analysts’ forecasts but also shape the distribution of beliefs
across forecasters, revealing a dual channel through which corporate communica
tion affects market expectations.
5.5 Discussion
The finding that language—often conveying no new quantitative disclosure and
reflecting managerial tone rather than substantive information—can nonetheless
induce sizeable revisions in analysts’ forecasts underscores the powerful role of
corporate communication in shaping market expectations. This result aligns with
the broader view, emphasized by Shiller (2017), that narratives act as vehicles for
30

economic meaning: they organize complex information into coherent stories that
influence behavior even when their quantitative content is limited. Beyond this,
the analysis shows that textual features extracted from earnings calls provide incre
mental predictive power over traditional accounting- and market-based predictors.
The soft information embedded in managerial speech thus captures dimensions of
analysts’ responses not explained by fundamentals alone. In this sense, earnings
calls illustrate how the transmission of information in financial markets depends
not only on the release of hard data, but also on framing, emphasis, and rhetorical
style.
At the same time, the results highlight a deeper tension in belief formation. Fi
nancial analysts absorb and process a vast amount of quantitative and qualitative
information, yet what ultimately drives realized earnings is largely tied to underly
ing risk and its evolution over time. Whether analysts attend to the same narratives
that carry genuine information about these risks—or instead to stories that merely
resonate with prevailing sentiment—remains an open question. Distinguishing be
tween these two forms of narrative attention is essential for understanding whether
the influence of corporate communication reflects rational information processing
or the behavioral power of persuasion in financial markets.
6 Conclusion
Narratives are ubiquitous in financial markets. I show that, in the context of corpo
rate earnings calls, they affect analysts’ expectations: financial analysts rationally
incorporate narrative information, which also proves useful in predicting future
realized changes in earnings.
To investigate how financial analysts under- or over-react to specific narratives,
I propose a novel framework that performs human-like edits (morphs) to the text
of earnings calls, altering the predominant narrative within each document.
I then input the morphed transcripts into the machine learning models trained
on analysts’ expectations and realized earnings. The difference between the new
predicted outcome and the original prediction represents the predicted treatment
effect of the specific narrative.
This methodology allows me to precisely compute analysts’ over- and under
reaction to a given narrative. I find that financial analysts severely under-react to
the narrative of uncertainty and over-react to the optimistic narrative and to global
31

focus framing. I also find that disagreement among analysts is mainly driven by
the narrative of uncertainty and global-focus perspective.
The framework developed in this paper offers a practical and scalable tool for
market participants. For corporate managers, it provides a means to strategically
design corporate communication by experimenting, in an in-silico environment,
with alternative framings of the same message to anticipate potential market re
actions. For analysts, it highlights the importance of distinguishing substantive
information from rhetorical framing and of exercising caution when firms empha
size certain topics for strategic rather than informational reasons. For researchers,
it opens new avenues for examining the role of narratives in financial markets and
offers fresh insights into the mechanisms underlying belief formation among finan
cial analysts.
This approach can be extended to other domains of corporate disclosure, such
as sustainability reporting, M&A announcements, or regulatory filings, where lan
guage plays a central role in shaping investor beliefs. It can likewise be applied
to macroeconomic and policy communication—such as FOMC press conferences
or central bank statements—to study how variations in tone, emphasis, or framing
influence market reactions. More broadly, the paper illustrates how advances in
natural language processing can be leveraged to address long-standing questions
in financial economics concerning the interaction between information and beliefs.
32

7 Figures
Figure 1: Earnings Calls: Number per Year and Average Length
This figure illustrates the combined dataset of corporate earnings calls and associated analyst forecasts. The blue bars (left axis) represent the total number of earnings calls held each calendar year, while the red line (right axis) indicates the average number of words in the management remarks section per call. The sample includes only earnings calls followed by at least one individual analyst forecast, across all forecast horizons. Each earnings call typically consists of two parts: the prepa-
red management remarks and the question&answer session with analysts and investors. Only earnings call transcripts containing non-empty management remarks are retained in the dataset.
33

Figure 2: Timing of Analyst Forecasts Around Earnings Calls
This figure depicts the distribution of analyst forecast releases in the weeks surrounding earnings calls. It reports the weekly proportion of individual analyst forecasts with annual periodicity, across all forecast horizons, relative to the total number of forecasts issued within the seven-week window around the call. Week 1 corresponds to the week beginning on the day of the earnings call. Since earnings calls occur quarterly, forecasts issued more than seven weeks before or after a call are as-
sociated with the preceding or subsequent event. The data cover the period from 2008 to 2023.
34

Figure 3: Timeline of the Earnings Announcement Cycle
This figure illustrates the standard sequence of events in the corporate earnings announcement cycle. At time t, the firm reports realized earnings for the preceding period (Yt−1) and files its Form 10-K with the SEC, which includes the income statement, balance sheet, and statement of cash flows. Around the same time, management holds an earnings conference call with investors and financial analysts to discuss recent performance and provide forward-looking guidance. Analysts then revise their ear-
nings forecasts for the current period (Yt) in light of the new information. At time t + h, where h denotes the forecast horizon, the firm reports the realized earnings for the forecasted period (Yt+h−1).
Time t
1. The company discloses realized earnings for the previous period (Yt−1) and files its 10-K report with the SEC.
2. A corporate earnings call is held where management delivers prepared remarks to financial analysts and investors.
3. Financial analysts review the latest information and revise their earnings forecasts for the current year (Yt).
Time t + h
• The company discloses the realized earnings for the forecasted period (Yt+h−1).
35

Figure 4: Term Structure of Textual Predictive Power
This chart reports the out-of-sample explanatory power, expressed in R-squared, of a model based solely on textual features from earnings calls across different forecast horizons (1-year ahead, 2-year ahead, and 3-year ahead) for three outcomes: (i) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized), (ii) Forecast Disagreement (the standard deviation of analysts’ consensus after the earnings call), and (iii) Realized Change in Earnings-
 (the value to be realized in one, two, or three years minus the value just realized).
36

Figure 5: Predicted Effects of Fundamental Information
This figure shows partial dependence plots (PDPs) of predicted 1-, 2-, 3-year outcomes with respect to Fundamental Information, proxied by Standardized Unexpected Earnings (SUE). PDPs show how the model’s predictions vary with a given feature while averaging over the empirical distribution of all other features. Panels show, respectively: (top left) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized), (right) Forecast Disagreement (the -
standard deviation of analysts’ consensus after the earnings call), and (bottom left) Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized).. The line traces the model’s average prediction as SUE varies (holding other features at their empirical distribution).
37

Figure 6: Term structure of Linguistic Factors Predictive Power
This chart reports the out-of-sample predictive power, expressed in R-squared, that incorporate only six linguistic factors quantifying the presence of key narratives in earnings call transcripts, specifically Guidance, Jargon, Confidence, Global Focus, Sentiment, and Uncertainty. The predictive results are shown for different forecast horizons (1-year ahead, 2-year ahead, and 3-year ahead) and for three outcomes: (i) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings ca-
ll minus the value just realized), (ii) Forecast Disagreement (the standard deviation of analysts’ consensus after the earnings call), and (iii) Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized).
38

Figure 7: Geometry of Original and Morphed Earnings Calls
This figure shows UMAP-computed (McInnes et al., 2018) two-dimensional projections of text embeddings for original and morphed earnings call transcripts. Each panel is a 30×30 bins two-dimensional histogram; darker cells indicate higher local transcript density. The UMAP algorithm approximately preserves neighborhood structure, so transcripts with similar topics lie near one another. The last row shows the original (un-morphed) embeddings for comparison, and the 2D coordinates are to be interprete-
d in the comparison across morphing directions, so corresponding regions tend to represent the same topics across embeddings.
39

Figure 8: Narratives in Analysts Beliefs and Realized Earnings
This chart reports the average predicted treatment effects (PTEs) of the narratives (described in Section 5) on Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized) and Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized). PTEs are computed as the difference between the output of the model trained on fundamentals and textual features (F(fundamentals, text)) when earnings call tr-
anscripts are morphed to emphasize a given narrative and its output when evaluated on the original transcripts. Fundamental News corresponds to the effect associated with an inter-quartile change in the empirical distribution of Standardized Unexpected Earnings (SUE), as predicted by the same model, F(fundamentals, text). The Difference bar reports the gap between the Analysts’ Expected Change in Earnings and Realized Change in Earnings
40

Figure 9: Narratives and Forecast Disagreement
This chart reports the average predicted treatment effects (PTEs) of the narratives (described in Section 5) on Forecast Disagreement (the standard deviation of analysts’ consensus after the earnings call). PTEs are computed as the difference between the output of the model trained on fundamentals and textual features (F(fundamentals, text)) when earnings call transcripts are morphed to emphasize a given narrative and its output when evaluated on the original transcripts. Fundamental News correspo-
nds to the effect associated with an inter-quartile change in the empirical distribution of Standardized Unexpected Earnings (SUE), as predicted by the same model, F(fundamentals, text).
41

8 Tables
Table 1: Distribution of Sample Observations Across Forecast Horizons
This table reports, for the one-, two-, and three-year ahead forecast horizons, the number of observations, their percentage share of the total sample, the number of companies, the number of brokers, and the number of analysts employed by those brokers. The sample covers the period 2006–2023.
Horizon # Obs % Obs # Companies # Brokers # Analysts
1Y 34798 45 5338 611 8242 2Y 27808 36 4654 563 7388 3Y 15234 19 3240 367 3662
42

Table 2: Summary Statistics for Target Variables
This table reports summary statistics for the three target variables used in the forecasting exercises. The variables are: (i) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized), (ii) Forecast Disagreement (the standard deviation of analysts’ consensus after the earnings call), and (iii) Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized). All variables are trimmed at the 5% -
and 95% levels. For clarity and comparability, all quantities are reported in basis points.
(A) Expected Change in Earnings
Horizon Count Mean Std Min p25 p50 p75 Max
1Y 31318 344.95 376.83 -1227.68 221.45 410.90 568.75 1029.61 2Y 25028 517.20 303.90 -565.25 361.98 528.82 696.09 1270.89 3Y 13714 619.48 304.38 -227.74 433.20 607.21 798.32 1465.52
(B) Forecast Disagreement
Horizon Count Mean Std Min p25 p50 p75 Max
1Y 29769 81.89 101.60 4.38 17.45 40.69 101.47 547.08 2Y 23491 103.83 114.33 9.86 29.56 58.81 130.34 615.78 3Y 9648 128.64 146.76 8.85 34.43 70.45 159.90 775.18
(D) Realized Change in Earnings
Horizon Count Mean Std Min p25 p50 p75 Max
1Y 31316 264.91 500.37 -1716.17 124.27 376.07 556.79 1152.66 2Y 25017 363.07 476.75 -1228.29 148.23 422.05 646.46 1470.19 3Y 13707 439.19 479.46 -1005.35 177.69 469.70 724.51 1662.47
43

Table 3: Predictive Accuracy for Analyst Behavior and Earnings Outcomes
This table reports the out-of-sample performance of predictive models expressed in terms of R-squared. I compare specifications using traditional features (marketbased information and financial statement variables) with specifications augmented by textual embeddings from earnings call transcripts. The three target variables are: (i) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized), (ii) Forecast Disagreement (the standard deviation o-
f analysts’ consensus after the earnings call), and (iii) Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized). The table contains three columns: R-squared (Fundamentals), reporting the explanatory power of the model using only stock characteristics and financial statement variables; R-squared (Fundamentals + Text), reporting the explanatory power once textual embeddings from earnings call transcripts are added; and Gain (%), showing the -
percentage increase in R-squared attributable to the textual features.
(i) Expected Change in Earnings
Horizon R-squared (Fundamentals) R-squared (Fundamentals + Text) Gain (%)
1Y 68.45 69.35 1.32 2Y 56.38 57.07 1.22 3Y 49.43 50.15 1.46
(ii) Forecast Disagreement
Horizon R-squared (Fundamentals) R-squared (Fundamentals + Text) Gain (%)
1Y 57.91 58.55 1.11 2Y 57.62 59.12 2.60 3Y 51.19 52.74 3.05
(iii) Realized Change in Earnings
Horizon R-squared (Fundamentals) R-squared (Fundamentals + Text) Gain (%)
1Y 54.59 55.81 2.23 2Y 38.02 38.80 2.06 3Y 33.26 35.35 6.28
44

Table 4: Performance of the ML Model Relative to Analyst Forecasts
This table compares the out-of-sample performance of the machine-learning model in predicting realized earnings at one-, two-, and three-year horizons with the accuracy of analyst forecasts. The Mean Squared Error (MSE) in the first row corresponds to the baseline forecast error implied by analyst predictions. Two specifications of the ML model are considered: a fundamentals-only model that includes stock characteristics and financial statement variables, and an expanded model that additionally in-
corporates textual features. Fundamentals Gain reports the percentage improvement delivered by the fundamentals-only model, while Total Gain reflects the combined improvement from fundamentals and textual features. Positive values indicate superior predictive accuracy relative to analyst forecasts.
Horizon 1Y 2Y 3Y
MSE (Forecast) 0.001116 0.001784 0.002042 Fundamentals Gain (%) 5.75 26.42 29.59 Total Gain (%) 8.38 27.50 31.64
45

Table 5: Improvement in Forecast Accuracy from Textual Features
This table reports the results of the Clark and West (2007) nested forecast comparison test assessing whether textual measures provide statistically significant outof-sample gains when predicting both fundamentals and analyst behavior at one-, two-, and three-year forecast horizons. The three target variables are: (i) Analysts’ Expected Change in Earnings (analysts’ consensus after the earnings call minus the value just realized), (ii) Forecast Disagreement (the standard deviation of analysts’ con-
sensus after the earnings call), and (iii) Realized Change in Earnings (the value to be realized in one, two, or three years minus the value just realized). The comparison involves two specifications: a benchmark model including stock characteristics and financial-statement variables, and an expanded model that additionally incorporates textual features. The one-sided alternative hypothesis tests whether the text-augmented model delivers superior forecasting performance relative to the benchmark. -
Mean Squared Error (MSE) Reduction due to Text reports the percentage decrease in test-set MSE attributable to textual information (adjusted for noise induced by model expansion), and C&W t-stat provides the corresponding test statistic.
(i) Expected Change in Earnings
Horizon MSE Reduction due to Text (%) C&W t-stat
1Y 9.70 11.67 2Y 12.13 11.06 3Y 8.10 7.32
(ii) Forecast Disagreement
Horizon MSE Reduction due to Text (%) C&W t-stat
1Y 9.11 10.50 2Y 10.82 9.89 3Y 12.55 7.64
(iii) Realized Change in Earnings
Horizon MSE Reduction due to Text (%) C&W t-stat
1Y 6.97 10.30 2Y 9.21 11.52 3Y 8.93 8.51
46

Table 6: Examples of Original and Morphed Earnings Call Excerpts by Narrative
This table provides illustrative pairs of excerpts corresponding to the morphing exercise detailed in Section 5. The first column contains the passages from the original earnings call, while the second column reports the morphed versions produced by the LLM when prompted to intensify a specific narrative.
Narrative Original Excerpt Morphed Excerpt
Guidance Looking ahead, we expect steady demand in our core markets and continued margin discipline. While some uncertainty remains, we’re confident in our long-term strategy.
Looking ahead, we anticipate revenue growth next quarter, driven by accelerating demand in our core markets. Operating margins should expand as we execute our cost initiatives.
Jargon We have streamlined operations to better align production with customer demand.
We’ve optimized our end-to-end operational footprint through agile capacity realignment to ensure cross-functional synergies across key demand verticals.
Global Focus Our Q2 results were primarily shaped by the success of our new retail partnerships.
Our Q2 results reflected broader macro dynamics–particularly the uptick in consumer confidence and stabilizing global supply chainswhich supported retail expansion across regions.
Uncertainty We are encouraged by our progress and expect continued momentum next quarter.
While we are encouraged by our progress, we remain cautious about potential headwindsincluding raw material inflation, geopolitical tensions, and slowerthan-expected demand recovery in Europe.
Sentiment This quarter’s performance was in line with our expectations.
This quarter’s performance was excellent, surpassing expectations and reaffirming the strength of our business model.
Confidence We think our new product line will perform well, though it is still early in the rollout.
Our new product line is already exceeding expectations, and we are absolutely confident it will continue to drive strong performance as adoption scales.
47

References
Adam, K. and Nagel, S. (2023). Expectations data in asset pricing. Handbook of
Economic Expectations, pages 477–506.
Andolfatto, A. and Bastianello, F. (2025). From numbers to words: Breaking down
institutional beliefs. SSRN Electronic Journal.
Andre, P., Haaland, I., Roth, C., and Wohlfart, J. (2023). Narratives about the
macroeconomy. SSRN Electronic Journal.
Andre, P., Pizzinelli, C., Roth, C., and Wohlfart, J. (2022). Subjective models of the
macroeconomy: Evidence from experts and representative samples. The Review
of Economic Studies, 89:2958–2991.
Anilowski, C., Feng, M., and Skinner, D. J. (2007). Does earnings guidance af
fect market returns? the nature and information content of aggregate earnings
guidance. Journal of Accounting and Economics, 44:36–63.
Arif, S., Marshall, N. T., Schroeder, J. H., and Yohn, T. L. (2019). A growing disparity
in earnings disclosure mechanisms: The rise of concurrently released earnings
announcements and 10-ks. Journal of Accounting and Economics, 68:101221.
Bacchetta, P., Mertens, E., and van Wincoop, E. (2009). Predictability in financial
markets: What do survey expectations tell us? Journal of International Money and
Finance, 28:406–426.
Balakrishnan, K., Billings, M. B., Kelly, B., and Ljungqvist, A. (2014). Shaping liq
uidity: On the causal effects of voluntary disclosure. Journal of Finance, 69:2237
2278.
Barron, K. and Fries, T. (2023). Narrative persuasion. SSRN Electronic Journal.
Bastianello, F. (2022). Time-series and cross-section of risk premia expectations:
Evidence from financial analysts. SSRN Electronic Journal.
Bastianello, F., De ́caire, P. H., and Guenzel, M. (2024). Mental models and financial
forecasts. SSRN Electronic Journal.
Bastianello, F. and Fontanier, P. (2023). Partial equilibrium thinking, extrapolation,
and bubbles. SSRN Electronic Journal.
48

Bastianello, F. and Fontanier, P. (2025). Expectations and learning from prices. The
Review of Economic Studies, 92:1341–1374.
Ben-David, I. and Chinco, A. (2024). Expected eps × trailing p/e. NBER Working
Paper.
Bhagwat, V., Cookson, J. A., Dim, C., and Niessner, M. (2025). The market’s mirror:
Revealing investor disagreement with llms. SSRN.
Bianchi, F., Ludvigson, S. C., and Ma, S. (2024). What hundreds of economic news
events say about belief overreaction in the stock market. NBER Working Paper.
Binsbergen, J. H. V., Han, X., and Lopez-Lira, A. (2023). Man versus machine
learning: The term structure of earnings expectations and conditional biases.
The Review of Financial Studies, 36:2361–2396.
Bordalo, P., Gennaioli, N., Porta, R. L., and Shleifer, A. (2019). Diagnostic expecta
tions and stock returns. The Journal of Finance, 74:2839–2874.
Bordalo, P., Gennaioli, N., Porta, R. L., and Shleifer, A. (2024). Belief overreaction
and stock market puzzles. Journal of Political Economy, 132:1450–1484.
Bordalo, P., Gennaioli, N., Porta, R. L., and Shleifer, A. (2025). Finance without
exotic risk. Journal of Financial Economics, 173:104145.
Bouchaud, J. P., Kru ̈ ger, P., Landier, A., and Thesmar, D. (2019). Sticky expectations
and the profitability anomaly. The Journal of Finance, 74:639–674.
Bozanic, Z., Roulstone, D. T., and Buskirk, A. V. (2018). Management earnings fore
casts and other forward-looking statements. Journal of Accounting and Economics,
65:1–20.
Bybee, J. L. (2025). The ghost in the machine: Generating beliefs with large lan
guage models. Working Paper.
Bybee, L., Kelly, B., and Su, Y. (2023). Narrative asset pricing: Interpretable system
atic risk factors from news text. The Review of Financial Studies.
Call, A. C., Hribar, P., Skinner, D. J., and Volant, D. (2024). Corporate managers’
perspectives on forward-looking guidance: Survey evidence. Journal of Account
ing and Economics, 78:101731.
49

Charles, C. and Kendall, C. (2025). Causal narratives. SSRN Electronic Journal.
Charles, C. and Sui, P. (2025). Marketwide memory. SSRN Electronic Journal.
Chen, X., Cho, Y. H., Dou, Y., and Lev, B. (2022). Predicting future earnings changes
using machine learning and detailed financial data. Journal of Accounting Research,
60:467–515.
Chen, Z. and Huang, J. J. (2024). Memory and beliefs in financial markets: A
machine learning approach. Working Paper.
Clark, T. E. and West, K. D. (2007). Approximately normal tests for equal predictive
accuracy in nested models. Journal of Econometrics, 138:291–311.
Cohen, L., Malloy, C., and Nguyen, Q. (2020). Lazy prices. The Journal of Finance,
75:1371–1415.
Cohen, L. and Nguyen, Q. (2024). Moving targets. SSRN Electronic Journal.
Dahlquist, M. and Ibert, M. (2024). Equity return expectations and portfolios: Evi
dence from large asset managers. The Review of Financial Studies, 37:1887–1928.
De Bondt, W. F. M. and Thaler, R. (1985). Does the stock market overreact? The
Journal of Finance, 40:793.
De La O, R., Han, X., and Myers, S. (2025). The return of return dominance: De
composing the cross-section of prices. Journal of Financial Economics, 169:104059.
De La O, R. and Myers, S. (2021). Subjective cash flow and discount rate expecta
tions. The Journal of Finance, 76:1339–1387.
De La O, R. and Myers, S. (2024). Which subjective expectations explain asset
prices? The Review of Financial Studies, 37:1929–1978.
De la Parra, D. and Gallemore, J. (2024). The sound of uncertainty: Examining
managerial acoustic uncertainty in conference calls. SSRN Electronic Journal.
De Rosa, L. (2024). (Deep) Learning Analyst Memory. SSRN Electronic Journal.
De Silva, T. and Thesmar, D. (2024). Noise in expectations: Evidence from analyst
forecasts. The Review of Financial Studies, 37:1494–1537.
50

Dessaint, O., Foucault, T., and Fresard, L. (2024). Does alternative data improve
financial forecasting? the horizon effect. The Journal of Finance, 79:2237–2287.
Diether, K. B., Malloy, C. J., and Scherbina, A. (2002). Differences of opinion and
the cross section of stock returns. The Journal of Finance, 57:2113–2141.
Dim, C., Sangiorgi, F., and Vilkov, G. (2023). Media narratives and price informa
tiveness. SSRN Electronic Journal.
Dzielin ́ ski, M., Wagner, A., and Zeckhauser, R. J. (2017). Straight talkers and vague
talkers: The effects of managerial style in earnings conference calls. NBER Work
ing Paper.
De ́caire, P. H. and Guenzel, M. (2023). What drives very long-run cash flow growth
expectations? SSRN Electronic Journal.
De ́caire, P. H., Sosyura, D., and Wittry, M. D. (2024). Resolving estimation ambigu
ity. SSRN Electronic Journal.
Easterwood, J. C. and Nutt, S. R. (1999). Inefficiency in analysts’ earnings forecasts:
Systematic misreaction or systematic optimism? The Journal of Finance, 54:1777
1797.
Flynn, J. and Sastry, K. (2024). The macroeconomics of narratives. SSRN Electronic
Journal.
Gabaix, X., Koijen, R. S. J., Richmond, R., and Yogo, M. (2025). Asset embeddings.
SSRN Electronic Journal.
Giglio, S., Kelly, B., and Xiu, D. (2022). Factor models, machine learning, and asset
pricing. Annual Review of Financial Economics, 14:337–368.
Giglio, S., Maggiori, M., Rillo, J., Stroebel, J., Utkus, S., and Xu, X. (2025). Investor
beliefs and expectation formation. SSRN Electronic Journal.
Giglio, S., Maggiori, M., Stroebel, J., and Utkus, S. (2021). Five facts about beliefs
and portfolios. American Economic Review, 111:1481–1522.
Glasserman, P. and Lin, C. (2023). Assessing look-ahead bias in stock return pre
dictions generated by gpt sentiment analysis. Journal of Financial Data Science,
6:25–42.
51

Gormsen, N. J. and Huber, K. (2024). Firms’ perceived cost of capital. Technical
report, National Bureau of Economic Research.
Gormsen, N. J. and Huber, K. (2025). Corporate discount rates. American Economic
Review, 115:2001–49.
Greenwood, R. and Shleifer, A. (2014). Expectations of returns and expected re
turns. The Review of Financial Studies, 27:714–746.
Hailiang Chen, B.-H. H. and Peng, Z. (2025). Why do investors like short-leg
securities? evidence from a textual analysis of buy recommendations. The Review
of Financial Studies.
Hansen, A. L., Horton, J. J., Kazinnik, S., Puzzello, D., and Zarifhonarvar, A. (2024).
Simulating the survey of professional forecasters. SSRN.
Hassan, T. A., Hollander, S., Lent, L. V., and Tahoun, A. (2019). Firm-level political
risk: Measurement and effects. The Quarterly Journal of Economics, 134:2135–2202.
Hoberg, G. and Maksimovic, V. (2015). Redefining financial constraints: A text
based analysis. The Review of Financial Studies, 28:1312–1352.
Hoberg, G. and Manela, A. (2025). The natural language of finance. Foundations
and Trends in Finance, 14:244–365.
Hoberg, G. and Phillips, G. (2010). Product market synergies and competition in
mergers and acquisitions: A text-based analysis. The Review of Financial Studies,
23:3773–3811.
Hoberg, G. and Phillips, G. (2016). Text-based network industries and endogenous
product differentiation. Journal of Political Economy, 124:1423–1465.
Horton, J. J. (2023). Large language models as simulated economic agents: What
can we learn from homo silicus? WP.
Huang, L., Yu, W., Ma, W., Zhong, W., Feng, Z., Wang, H., Chen, Q., Peng, W.,
Feng, X., Qin, B., and Liu, T. (2024). A survey on hallucination in large language
models: Principles, taxonomy, challenges, and open questions. ACM Transactions
on Information Systems, 43.
52

Huang, X., Teoh, S. H., and Zhang, Y. (2014). Tone management. The Accounting
Review, 89:1083–1113.
Jensen, T. I., Kelly, B., and Pedersen, L. H. (2023). Is there a replication crisis in
finance? Journal of Finance, 78:2465–2518.
Kazinnik, S. and Sinclair, T. M. (2025). Fomc in silico: A multi-agent system for
monetary policy decision modeling. SSRN Electronic Journal.
Ke, S. (2024). Analysts’ belief formation in their own words. SSRN Electronic Journal.
Kelly, B. and Ljungqvist, A. (2012). Testing asymmetric-information asset pricing
models. The Review of Financial Studies, 25:1366–1413.
Kim, A. G. and Nikolaev, V. V. (2024). Context-based interpretation of financial
information. Journal of Accounting Research.
Kothari, S. P., So, E., and Verdi, R. (2016). Analysts’ forecasts and asset pricing: A
survey. Annual Review of Financial Economics, 8:197–219.
Kravet, T. and Muslu, V. (2013). Textual risk disclosures and investors’ risk percep
tions. Review of Accounting Studies, 18:1088–1122.
La Porta, R. (1996). Expectations and the cross-section of stock returns. Journal of
Finance, 51:1715–1742.
Law, K. K. F. (2023). Good-bye i/b/e/s (or not?). Journal of Financial Reporting,
8:41–61.
Li, D., Jiang, B., Huang, L., Beigi, A., Zhao, C., Tan, Z., Bhattacharjee, A., Jiang,
Y., Chen, C., Wu, T., Shu, K., Cheng, L., and Liu, H. (2024). From generation to
judgment: Opportunities and challenges of llm-as-a-judge. Arxiv.
Li, F. (2008). Annual report readability, current earnings, and earnings persistence.
Journal of Accounting and Economics, 45:221–247.
Li, K., Mai, F., Shen, R., and Yan, X. (2021). Measuring corporate culture using
machine learning. The Review of Financial Studies, 34:3265–3315.
Link, S., Peichl, A., Roth, C., and Wohlfart, J. (2023). Attention to the macroecon
omy. SSRN Electronic Journal.
53

Livnat, J. and Mendenhall, R. R. (2006). Comparing the post–earnings announce
ment drift for surprises calculated from analyst and time series forecasts. Journal
of Accounting Research, 44:177–205.
Lopez-Lira, A. and Tang, Y. (2023). Can chatgpt forecast stock price movements?
return predictability and large language models. SSRN Electronic Journal.
Loughran, T. and Mcdonald, B. (2011). When is a liability not a liability? textual
analysis, dictionaries, and 10-ks. The Journal of Finance, 66:35–65.
Ludwig, J. and Mullainathan, S. (2024). Machine learning as a tool for hypothesis
generation. The Quarterly Journal of Economics, 139:751–827.
Ludwig, J., Mullainathan, S., and Rambachan, A. (2025). Large language models:
An applied econometric framework. NBER Working Paper.
Lv, L. (2024). The value of information from sell-side analysts. Arxiv.
Lyle, M. R., Riedl, E. J., and Siano, F. (2023). Changes in risk factor disclosures and
the variance risk premium. The Accounting Review, 98:327–352.
Ma, Y., Ropele, T., Sraer, D. A., and Thesmar, D. (2024). A quantitative analysis of
distortions in managerial forecasts. SSRN Electronic Journal.
Malmendier, U. and Nagel, S. (2011). Depression babies: Do macroeconomic expe
riences affect risk taking?*. The Quarterly Journal of Economics, 126:373–416.
Mamaysky, H., Shen, Y., and Wu, H. (2023). Credit information in earnings calls.
Arxiv.
Manning, B. S., Zhu, K., and Horton, J. J. (2024). Automated social science: Lan
guage models as scientist and subjects. SSRN Electronic Journal.
Mayew, W. J. and Venkatachalam, M. (2012). The power of voice: Managerial
affective states and future firm performance. Journal of Finance, 67:1–43.
McInnes, L., Healy, J., and Melville, J. (2018). Umap: Uniform manifold approxi
mation and projection for dimension reduction. Working Paper.
Meursault, V., Liang, P. J., Routledge, B. R., and Scanlon, M. M. (2023). Pead.txt:
Post-earnings-announcement drift using text. Journal of Financial and Quantitative
Analysis, 58:2299–2326.
54

Miller, B. P. (2010). The effects of reporting complexity on small and large investor
trading. The Accounting Review, 85:2107–2143.
Nagel, S. and Xu, Z. (2022). Asset pricing with fading memory. The Review of
Financial Studies, 35:2190–2245.
Price, S. M. K., Doran, J. S., Peterson, D. R., and Bliss, B. A. (2012). Earnings
conference calls and stock returns: The incremental informativeness of textual
tone. Journal of Banking & Finance, 36:992–1011.
Sarkar, S. K. (2025). Economic representations. Working Paper.
Sarkar, S. K. and Vafa, K. (2024). Lookahead bias in pretrained language models.
SSRN Electronic Journal.
Sautner, Z., Lent, L. V., Vilkov, G., and Zhang, R. (2023). Firm-level climate change
exposure. The Journal of Finance, 78:1449–1498.
Shiller, R. J. (2017). Narrative economics. American Economic Review, 107:967–1004.
Siano, F. (2025). The news in earnings announcement disclosures: Capturing word
context using llm methods. Management Science.
Song, W. and Stern, S. (2025). Firm inattention and the efficacy of monetary policy:
A text-based approach. The Review of Economic Studies, 92:3438–3469.
Stolborg, C. and Greenwood, R. M. (2025). Bubble beliefs. SSRN Electronic Journal.
Vissing-Jorgensen, A. (2003). Perspectives on behavioral finance: Does ”irrational
ity” disappear with wealth? evidence from expectations and actions. NBER
Macroeconomics Annual, 18:138–194.
55

Appendix
A Identification of the latest version of earnings call
transcripts
I obtain the full text and associated metadata for earnings call events from the
Capital IQ Transcripts database. Capital IQ Transcripts contains the full text of
approximately 8,000 public-company events, including earnings calls, M&A calls,
and shareholder meetings. From this database, I extract all available earnings-call
transcripts.
Each transcript undergoes four stages of editorial review: Preliminary (real-time
cleanup of voice-to-text with basic spellcheck), Edited (accuracy pass with added
metadata), Proofing (external review for errors/classifications), and Audited (final
quality assurance).
Different versions are indicated by transcriptCollectionTypeId. Each ver
sion has its own transcriptId, and metadata fields—such as the event date or ti
tle—may exhibit minor revisions across versions even when they refer to the same
underlying event. When multiple versions are available, I consider the most recent
timestamp as typically the most accurate.
Because each event is indexed by keydevid and may pertain to multiple compa
nies, I construct the dataset at the (keydevid, company) level. For each event–company
pair, I retain the most up-to-date transcript—operationalized as the highest-quality
version in the editorial sequence and, within versions, the most recent timestamp.
As an additional safeguard, for any firm–event-date pair with multiple tran
scripts, I retain only the most up-to-date version (i.e., the latest, highest-quality
transcript).
Finally, I link firms across data sources by using the Capital IQ mapping table
to connect the Capital IQ transcript identifier companyId to Compustat’s gvkey.
56

B Prompt Descriptions for Language Generation
This appendix documents the set of textual prompts used to systematically modify
the tone and content of earnings call transcripts in the experimental framework.
Each prompt targets a distinct rhetorical or informational dimension commonly
observed in corporate disclosures. The prompts were operationalized using a large
language model to simulate variation in managerial communication styles.
Confidence: Instructs the model to adopt the tone of a confident and assertive
CEO. The prompt removes hedging language and emphasizes decisiveness,
authority, and control over business operations and strategy.
Prompt:
Rewrite the text in the tone of a confident and assertive CEO during
an earnings call. Use decisive language, remove hedging expressions,
and clearly convey control over business strategy and performance.
Global Focus: Reframes the narrative to emphasize macroeconomic conditions,
global market dynamics, and high-level industry developments. The prompt
links firm-specific performance to broader economic indicators such as infla
tion, GDP, and regulatory trends.
Prompt:
Reframe the discussion to emphasize broader macroeconomic trends, global
market dynamics, and high-level industry shifts. Draw links between
the company’s results and wider economic forces such as inflation, GDP,
regulatory environments, or sector-wide developments.
Guidance: Strengthens forward-looking guidance by prompting the use of clear,
strategic, and directional language. The generated text highlights manage
rial expectations, priorities, and actions while avoiding ambiguity or generic
phrasing.
Prompt:
Clarify and strengthen the company’s forward-looking guidance. Use
assertive, strategic language to highlight expectations, priorities,
and upcoming actions. Where appropriate, specify directionality, expected
57

outcomes, and the rationale behind future decisions. Avoid vague or
generic phrasing.
Sentiment: Enhances the optimistic tone of the text. The prompt increases the
emphasis on business momentum, growth opportunities, and positive out
look, often by highlighting recent wins and expressing confidence in future
performance.
Prompt:
Make the emotional tone more positive and optimistic. Emphasize momentum,
exciting opportunities, and enthusiasm about the company’s future. Highlight
wins and express confidence in continued success.
Jargon: Increases the use of technical, domain-specific terminology common in in
stitutional financial communication. Examples include references to “margin
expansion,” “revenue mix,” and “TAM.” The prompt maintains semantic fi
delity while enriching the financial register.
Prompt:
Use more technical, domain-specific language typical of institutional
earnings calls and financial reporting. Incorporate sector-relevant
terminology (e.g., margin expansion, revenue mix, sequential growth,
TAM, end-market demand) without changing the underlying meaning or facts.
Uncertainty: Prompts the model to introduce or amplify references to business
risks and external uncertainties. These may include regulatory pressures,
market volatility, or operational dependencies. The tone remains professional
but more cautious.
Prompt:
Highlight and emphasize relevant risks, uncertainties, and operational
or market challenges. Introduce cautious language where appropriate,
noting external dependencies, regulatory pressures, or volatility in
end markets. Maintain a professional tone while acknowledging areas
of concern.
These prompts enable structured variation in narrative tone and content, allow
ing for controlled analysis of linguistic effects on perception and interpretation of
earnings disclosures.
58

C Prompt Descriptions for LLM-as-a-Judge
This appendix outlines the prompt template used to evaluate whether a morphed
version of an earnings call transcript preserves factual content while exhibiting a
significant change in tone.
Each prompt consists of the original (Text A) and the morphed (Text B) version.
The large language model is instructed to assess two criteria: (i) that all numerical
information and structural elements (e.g., order, scope) are retained, and (ii) that
Text B exhibits a clear tonal shift (e.g., more confident or more cautious).
The standardized prompt format is as follows:
You are an expert in financial communication.
Below are two excerpts from earnings calls.
Text A: [original excerpt]
Text B: [morphed excerpt]
Does Text B preserve the same numbers and structure as Text A,
while clearly changing the tone?
Respond with one of the following:
1. Yes: the morphing was executed correctly
and the language modification is clear and evident,
2. Not sure
3. No: the morphing is inadequate
All evaluations are performed in a zero-shot setting. All responses labeled “No:
the morphing is inadequate” are discarded from the analysis and reproduced in
another instance.
59

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:26.170Z
- **Text Length:** 111869 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 59 of 59
