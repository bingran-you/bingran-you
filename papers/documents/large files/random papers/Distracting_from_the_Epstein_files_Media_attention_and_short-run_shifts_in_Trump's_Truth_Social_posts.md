# PDF Document: Peterson - 2025 - Distracting from the Epstein files Media attention and short-run shifts in Trump's Truth Social pos.pdf

**File Path:** Peterson - 2025 - Distracting from the Epstein files Media attention and short-run shifts in Trump's Truth Social pos.pdf

**Processed Date:** 2026-02-10T18:13:30.434Z

**File Size:** 1492.66 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3180

**Title:** Distracting from the Epstein files? Media attention and short-run shifts in Trump's Truth Social posts

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Distracting from the Epstein files?
Media attention and short-run shifts in Trump’s Truth Social
posts
Andrew J. Peterson *
November 17, 2025
ABSTRACT
Political “circuses” may undermine democratic accountability if leaders facing scandal can reliably pull media coverage toward fresh topics and away from substantive investigations or evaluations. We investigate whether politicians strategically alter their messaging during damaging media coverage (“strategic diversion”) or maintain consistent provocative communication regardless of scandal coverage (“always-on circus”). Using computational text analysis of Donald Trump’s Truth Social posts during-
 the 2025 Epstein revelations, we find that a one-standard-deviation increase in scandal coverage is associated with communication patterns that deviate from baseline by 0.28 standard deviations over a 4-day window. Although these findings do not provide formal causal identification, they are robust to timing placebos and falsification tests. They are consistent with the interpretation that leaders deploy diversionary communication specifically within their own friendly media ecosystem, with impli-
cations for accountability in polarized democracies.
1 Introduction
A central tenet of democratic accountability is that the public, via the media, can evaluate and sanction leaders for their actions. This mechanism fails, however, if leaders can consistently evade scrutiny by strategically diverting attention to other issues. The dynamics of social media, which traditional media now frequently echo and amplify, offer a powerful tool for such agenda control.
This study probes the limits of this power by examining whether a leader’s strategic communication becomes more novel when a persistent, damaging scandal flares. We treat linguistic novelty as an observable behavioral proxy that is consistent with attempts to redirect attention, but we do not attempt to measure leader mental states or intent, nor whether these attempts are ultimately successful.
We examine these dynamics in the context of the 2025 Epstein files scandal, a case that provides a clear example of a president facing a persistent, high-salience threat from both political opponents and internal party dissent. This case adds to existing work on diversionary communication in three ways. First, whereas much prior quantitative work has focused on legal or institutional threats such as investigations and
*Assistant Professor (Maître de conférences), University of Poitiers.
1
arXiv:2511.11532v1 [econ.GN] 14 Nov 2025

Andrew Peterson Distracting from the Epstein files?
corruption probes, we provide a detailed case study of a personal scandal that generated both reputational and intra-party pressure. Second, we measure the novelty of the leader’s content with an embeddings-based distance measure and extend the focus from Twitter and Facebook [e.g. Barberá et al., 2024, Lewandowsky et al., 2020] to Truth Social, a smaller but more ideologically homogeneous platform with different dynamics. Third, by comparing responses to Epstein coverage in friendly and less-alig-
ned media ecosystems, we use source-specific exposure to probe whether the president appears more responsive when the scandal surfaces in information environments central to his base.
We find that when Fox News attention to Epstein rises by one standard deviation, the short-run novelty of the president’s posts increases by 0.28 standard deviations over days t through t+3. The response peaks within 2-3 days and persists for roughly a week in cumulative windows. Timing placebos (future exposure) are null, pre-trend diagnostics show no anticipatory pattern, and falsifications with unrelated media topics are null. The effect is strong for Fox and Google Trends, but not statisticall-
y significant for CNN and MSNBC. This aligns with the interpretation that Trump responds strategically to the media ecosystem he and his base consume most. We note that the observational nature of the study means we cannot definitively establish a causal relationship. We cannot rule out the possibility that an unobserved confounding factor (e.g., separate concurrent events) might be simultaneously influencing both the media’s focus and the president’s posting behavior.
The sections that follow explain narratively the case study context and our hypotheses (Section 2) and review related work (Section 3). We then detail the data and design (Section 4), report the estimates and dynamics (Section 5), and the final section concludes with suggestions for additional work. Additional details and robustness and specificity checks are in the Appendix, and replication code is available on Github.
2 The Epstein Scandal: Research Context and Hypotheses
Since the beginning of 2025, the presidency faced recurring, high-salience public pressure to release the Epstein files (see Figure 1). In response, the White House advanced a sequence of highly visible public countermoves, from large-scale declassifications of unrelated historical records (e.g., JFK/RFK/MLK files) to new law-and-order initiatives (e.g., deploying federal troops in Washington, D.C. in August)1, to announcing a $10 billion lawsuit against the Wall Street Journal for publishing info-
rmation about a 2003 birthday card for Epstein said to be written by Trump.2 These moves were coupled with a stream of attention-drawing social media posts, such as accusing former President Obama of “treason” (amplified by an AI-generated video of his fake arrest), alleging loan fraud against Adam Schiff, and musing about revoking Rosie O’Donnell’s U.S. citizenship.
The political stakes of this scandal were high, as the threat originated not only from political opponents but also from within the president’s own party. A populist faction of Republicans, many of whom have embraced conspiracy claims about Epstein’s death being a high-level cover-up, broke with the White House to demand full disclosure. This intra-party rebellion threatened to pass a discharge petition in the House for a bill to release the Epstein files.3. The administration strongly sought to d-
iscourage this dissent, warning Republicans that supporting the petition would be viewed as a “very hostile act to the administration”4.
1See Appendix Table 12 for dates and outlets. 2Bose & Stempel, “Trump sues Wall Street Journal over Epstein report, seeks $10 billion”, July 19, 2025. Reuters. 3See discharge petition No. 9 (clerk.house.gov) and H.Res.581 (congress.gov) 4Michael Gold, “G.O.P. Thwarts Epstein Disclosure Bill as Accusers Plead for Files”, New York Times Sept 3, 2025.
2

Andrew Peterson Distracting from the Epstein files?
Nov 2024 Dec 2024 Jan 2025 Feb 2025 Mar 2025 Apr 2025 May 2025 Jun 2025 Jul 2025 Aug 2025 Sep 2025 Oct 2025 Date
0.0
0.2
0.4
0.6
Density per 1,000 words (Fox News)
EO 14176
EO: English official
NARA update
New travel ban
Hoax rhetoric
DC Guard move
DOJ handoff
33k pages
Estate cache
Daily density 7-day mean
Figure 1: Density of appearances of ‘Epstein’ in Fox News TV transcripts. Sources for events are provided in Appendix Table 12
This combined internal and external pressure created a recurring threat that the president was forced to manage, and was widely reported as the reason why House Speaker Mike Johnson “called the House to an early recess until September in order to avoid a floor vote on the [Epstein] legislation”5 and then kept the House out of session to avoid seating a new House member who promised to sign the discharge petition, thereby tipping the vote.6
At moments of elevated Epstein attention, President Trump dismissed demands for a “client list” as a partisan “hoax,” castigated critics, and introduced diverse fresh, high-salience issues. Contemporary reporting and commentary repeatedly framed these episodes as diversionary tactics.7
Our empirical design links the public attention environment to the leader’s output on the Truth Social platform. While previous work has looked at Twitter and Facebook, Truth Social is unique in the extent to which it serves as the primary, high-volume broadcast channel for the president, but to a much smaller and more ideologically homogeneous user base.8 This unique structure implies a different diversionary mechanism than the broad public square of Twitter: rather than engaging a mass public di-
rectly, its primary function is likely to mobilize the president’s base and, crucially, to seed narratives for off-platform amplification by
5David Spector, Fox News, July 27, 2025 6The Hill, The Washington Examiner, The Wall Street Journal, Newsweek. On Representative Green (R) getting ‘pushback’ from the White House on discharge bill position, see Timotija, “Greene says she got ‘a lot’ of pushback from White House over Epstein discharge petition”, The Hill, Sept. 3, 2025. 7Appendix Table 13 provides an illustrative list. 8Regular news consumers on Truth Social are overwhelmingly Republican or lean-Republican, and a majority of the pl-
atform’s users utilize it for news. See Pew Research Center, “Key facts about Truth Social” (Nov 18, 2022) and “Social Media and News Fact Sheet” (Pew; Nov 1, 2025). The platform may also have differential access, as suggested by an initial 6-hour exclusivity window before posting on other social media. While this agreement was scheduled to lapse unless renewed in February 2025, recent reporting (e.g. Amatulli, The Guardian Nov. 6, 2025), confirms that Truth Social remained the president’s primary-
 platform for high-volume communication.
3

Andrew Peterson Distracting from the Epstein files?
journalists and allied media outlets.9 This makes it an ideal setting to test whether the leader’s novel content (the supply) is designed to influence the broader media agenda (the measured outcome).
Investigative reporting (e.g., Mayer 2019 in The New Yorker) has detailed how Fox personalities acted as informal advisers (including before being invited to join the administration). This pattern was observed in specific policy actions, such as directives on South Africa land reform or border troop deployments, which were announced in tweets minutes after corresponding Fox segments aired.10 For this reason we specifically look at Fox News TV transcripts in contrast to other media sources as possi-
ble stimuli.
We consider two stylized interpretations of the president’s communication style. The always-on circus view treats provocative, attention-seeking communication as a standing feature of the modern presidency, with novelty driven primarily by a high but relatively stable baseline of controversy-seeking behavior. This perspective implies that, once we account for calendar effects and past posting patterns, day-to-day fluctuations in Epstein salience should not generate systematic shifts in novelty bey-
ond that baseline. The diversionary hypothesis instead posits that when attention to Epstein rises, the president adjusts his messaging in an effort to dilute, redirect, or crowd out the damaging topic. Empirically, we test a necessary implication of the diversionary view: that, holding constant past novelty and calendar patterns, increases in Epstein salience are followed by systematic increases in novelty.11
3 Related Literature
Our work is situated at the intersection of literature on strategic communication, media effects, and the institutional pressures of the modern presidency. The theoretical tension between diversion and a baseline political “circus” has origins that go far beyond the modern media era. The concept of diversion was famously captured in Juvenal’s critique of Roman panem et circenses (bread and circuses) [Juvenal, 1893]. Machiavelli offered a more instrumental analysis, advising in The Prince that rule-
rs use spectacle as a calculated tool to manage reputation and project power, leaving the populace “satisfied and stupefied” [Machiavelli, 1532, ch. 7]. And a long tradition continued to analyze this as a method of control, and probe the nature of its relationship to public collective responses and the ‘crowd’.12
The contemporary theoretical foundation for the diversionary view is anchored in the international relations literature on diversionary war, which argues that leaders facing domestic turmoil may initiate external conflicts to divert public attention and rally support [Levy, 1989, Tir, 2010]. In the digital era, social media provides a low-cost, high-speed mechanism for such tactics, as Barberá et al. [2024] demonstrate on a global scale. The most direct empirical precedent for our study is Lewando-
wsky et al. [2020], who provide strong quantitative evidence that President Trump strategically used Twitter to distract from a political-legal threat. They find that spikes in media coverage of the Mueller investigation were followed by an increase in Trump’s tweets on preferred topics (e.g., jobs, China, immigration), which in turn was followed by a measurable
9Reporting has noted that while on-platform engagement is comparatively small, posts are often picked up and broadcast by mainstream and conservative news, which becomes the primary vector for reaching a mass audience. See, e.g., Nieman Lab (2024) and Bloomberg (2024). 10For quantitative evidence of this ‘watch-and-react’ pattern, see Philip Bump, “The 135 times in 2018...” (The Washington Post). On policy directives in response to coverage of South Africa land reform, see The Washington Post, 201-
8) and on the deployment of troops to the border following coverage of a migrant caravan, see ABC News, 2018). 11Evidence on this necessary condition cannot, on its own, rule out more moderate versions of the always-on circus idea, but it does speak to whether the data are consistent with a fully static, scandal-insensitive baseline. 12While Thomas Hobbes, writing in Leviathan, justified absolute sovereign control over public discourse as a necessity for maintaining peace rather than a diversionar-
y tactic [Hobbes, 1651], his work reinforces the importance of centralized narrative control. The psychological dynamics underlying apparently irrational reactions by crowds were also a focus of the late 19th century [Le Bon, 1895, Sighele, 1903] and later picked up by Freud [1921] and others.
4

Andrew Peterson Distracting from the Epstein files?
reduction in media coverage of the investigation. This demonstrates a clear, measurable instance of digital diversion.
In contrast, the always-on circus view is supported by institutional theories of the presidency. The concept of the “permanent campaign” suggests that the distinction between governing and campaigning has effectively dissolved, requiring leaders to engage in a continuous quest for public approval [Ornstein, 2000]. This institutional pressure, which builds upon the 20th-century development of the “rhetorical presidency” and its norm of “going public” to legislate [Tulis, 2017], incentivizes a const-
ant stream of provocative, attentionseeking communication. From this perspective, a political “circus” is the institutional constant rather than a reactive strategy.
While the mechanisms of diversion were established in the foundational work on agenda-setting [McCombs, 1977] and priming [Iyengar and Kinder, 2009], which explain how shifts in media salience alter public priorities and evaluative criteria, direct tests of digital diversion have only begun to explore how these dynamics are evolving. We extend this line of research by analyzing a personal scandal, leveraging variation between friendly and mainstream outlets, and focusing on the novelty and content-
 of the president’s Truth Social posts themselves, thereby speaking to both diversionary theory and accounts of the modern political spectacle [Edelman, 1988].
4 Methods
4.1 Data and Preprocessing
We construct a daily time–series to estimate the dynamic relationship between media attention and content novelty. The estimation sample, after trimming for lags/leads, spans October 8, 2024–October 17, 2025.13. In the results we present, we restrict the sample to t has ≥ 3 posts and the trailing window contributes ≥ 10 posts (see Appendix Table 10 for more detail), resulting in n = 256 observations.
The dependent variable Yt is the z-scored novelty index Nt,z. In our baseline, novelty is measured by energy distance on whitened embeddings, with robustness to an alternative MMD2 measure (Section A.1).14
The main independent variable Et is “Epstein attention.” Our baseline uses per-1,000-word counts from Fox News TV transcripts from the Internet Archive;15 robustness compares CNN/MSNBC transcripts and Google Trends (Appendix Table 8), in line with work using Google search as an attention proxy [Da et al., 2011, Mellon, 2014]. Exposure is standardized to Et,z. Controls Xt include day-of-week and month fixed effects, a post-inauguration indicator, and same-day posting-intensity measures. Availabilit-
y windows differ slightly across exposure series.16
13The Trump Truth Social data comes from a Github repository, which is no longer collecting data 14By construction, Nt increases whenever the joint distribution of embeddings on day t is unusual relative to the recent reference window, regardless of whether posts mention Epstein or not. High novelty can therefore arise from (i) shifts toward entirely different issues, (ii) new framings or rhetoric around the same issue or (iii) changes in style or emphasis that are not easily described in simple t-
opic labels. Our empirical analyses below speak to whether this behavioral signal of novelty co-moves with Epstein salience; they do not, on their own, identify which of these substantive channels is operating. 15Internet Archive Television Archive 16For example, Google Trends coverage begins on 2024-11-04, yielding smaller n in those specifications (see Appendix Table 8).
5

Andrew Peterson Distracting from the Epstein files?
4.2 Estimation and Inference
We estimate autoregressive distributed-lag (ARDL) regressions
Yt = α +
p
∑
i=1
φi Yt−i +
q
∑
j=0
βj Et,z−j + Γ′Xt + εt, (1)
with p = 7 and q = 3. The short-run cumulative effect is
βsum =
q
∑
j=0
βj. (2)
To probe timing and potential reverse causality, we augment equation (1) with L = 3 leads of exposure and test whether the cumulative effect of these leads is zero:
Yt = α +
p
∑
i=1
φi Yt−i +
q
∑
j=0
βj Et,z−j +
L
∑
h=1
δh Et,z+h + Γ′Xt + εt, (3)
with δsum = ∑hL=1 δh.
All ARDL models are estimated by OLS with Newey–West heteroskedasticity- and autocorrelation-consistent standard errors [Newey and West, 1987], using a weekly bandwidth (H = 7). For βsum and δsum we report parametric Wald tests based on the HAC covariance matrix. Unless otherwise noted, all reported p-values in the main text and appendix are based on these HAC standard errors.
4.3 Impulse-Response Analyses
To visualize the dynamic response of novelty to exposure shocks, we estimate impulse responses using local projections [Jordà, 2005]. For each horizon h, we run
Yt+h = αh + θhEt,z +
p
∑
i=1
φh,i Yt−i + Γ′
hXt + ut+h,
with p = 7 lags of Yt, the same calendar controls as in the ARDL models, and Newey–West HAC(H = 7) standard errors. We plot the estimated response coefficients θh along with conventional pointwise HAC confidence intervals.
Joint pre-trend checks over negative horizons use Wald tests of the null that the pre-exposure coefficients are jointly zero. We report HAC-based Wald p-values for these pre-trend tests (Appendix Table 9).
5 Results
Our empirical analysis documents a clear, statistically significant, and substantively meaningful association between increases in media attention to the Epstein files and subsequent shifts in the novelty of Donald Trump’s Truth Social communications. The timing, specificity, and source-dependence of this relationship are more consistent with a departure from a purely static, “always-on circus” view than with it, and are suggestive of strategic communications responsiveness to the scandal. At the -
same time, the observational,
6

Andrew Peterson Distracting from the Epstein files?
Table 1: ARDL short-run effects of Epstein exposure on novelty.
Spec βbsum HAC s.e. pHAC n R2
q = 1 0.104 0.061 0.090 256 0.198 q = 3 0.285 0.077 <0.001 256 0.226 q = 7 0.481 0.124 <0.001 256 0.251 Leads sum (L = 3) -0.042 0.071 0.553 255 0.234
Entries are sums of exposure-lag coefficients with heteroskedasticity-and-autocorrelation-consistent (HAC) standard errors. The final row reports the sum of exposure leads as a timing placebo.
single-case design means these patterns should be interpreted as suggestive rather than definitive evidence of diversion.17.
5.1 Main ARDL Estimates
Table 1 presents the core findings from our ARDL models. Our primary specification (q = 3), which models content novelty as a function of contemporaneous and three lagged days of Epstein exposure, yields a cumulative short-run effect (βbsum) of 0.285. This estimate, which holds after accounting for day-of-week and monthly fixed effects, is significant under conventional HAC inference (p < 0.001) and is stable across reasonable variations in lag length and control sets (Appendix Table 3).
In substantive terms, this coefficient implies that a one standard deviation increase in Fox News attention to the Epstein story is associated with a cumulative 0.28 standard deviation increase in the novelty of Trump’s posts over the four-day window (lags 0–3). The effect is not only immediate but also accumulates over several days, as illustrated by the per-lag coefficients in Figure 2. In short: novelty jumps the same day Fox attention rises, but reverses the next day, then stays modestly eleva-
ted, adding up to a meaningful short-run effect. Overall, this provides clear evidence against the idea that there is no increase in novelty after Epstein attention spikes.
0123 Lag j
0.4
0.2
0.0
0.2
0.4
Coefficient on Et j (sd)
̂ sum = 0.285
ARDL per-lag coefficients (Fox exposure, q = 3)
Figure 2: Per-lag ARDL coefficients (q=3) with 95% HAC CIs. Box annotates the short-run sum βbsum.
17We do not attempt to distinguish whether Trump changes topics specifically or simply varies his rhetorical style in a way captured by embedding distance while remaining on the same broad topics
7

Andrew Peterson Distracting from the Epstein files?
5.2 Timing, Dynamics, and Threats to Inference
A central challenge in political communication research is distinguishing strategic action from mere correlation. Our research design incorporates two diagnostic tests that help assess whether the observed association is consistent with a causal interpretation or more likely reflects simple reverse causality or anticipation.
First, we employ a “timing placebo” test by including future (lead) values of the exposure variable in our model. If the relationship were spurious, or if Trump’s novel posting caused the media attention, we might expect to see a relationship with future media hits. The final row of Table 1 shows this is not the case. The cumulative sum of the lead coefficients is small, negative, and statistically indistinguishable from zero (
δbsum = −0.042, p = 0.553). This null finding demonstrates that future increases in Epstein attention do not predict current shifts in post novelty, ruling out simple anticipation effects or reverse causality.
Second, the impulse response functions (IRFs) estimated via local projections (Figure 3) visualize this dynamic relationship. The plot confirms the findings from the leads test: there is no pre-trend, with coefficients for horizons h < 0 tightly clustered around zero (see also Table 9 for formal tests). The response to an increase in attention is, however, immediate. The effect begins at h = 0, peaks within 2–3 days, and remains statistically significant for approximately one week. This temporal p-
attern—a sharp, immediate, and persistent-but-decaying response—is consistent with what one would expect from a strategic actor reacting in real time to a negative attention spike, although we cannot rule out all other explanations.
5.3 Robustness and specificity of the effect
The observed effect is not an artifact of our measurement strategy, nor is it a generic response to any media “buzz.” We test for topical specificity using a falsification test. In Table 6, we replace our Epstein-related exposure variable with other high-salience, but politically unrelated, media topics: “Taylor Swift” and “NCAA basketball.” Both placebo exposures yield small and statistically weak effects; HAC p-values are 0.098 for “Taylor Swift” and comfortably above conventional thresholds for-
 “NCAA basketball.” This pattern implies the observed response is not a generic reaction to media excitement, but rather a targeted response specific to the politically damaging Epstein coverage.
We compute Nt only on adequately sampled days (≥ 3 posts and ≥ 10 trailing-reference posts) and include posting-intensity controls in all ARDLs, and diagnostics show Nt is effectively uncorrelated with volume (r = −0.054) with 6.5% low-sample days and 1.0% zero-post days; see Table 10 for a compact summary and Table 11 for top novelty dates.
The finding is robust to alternative measures of both the dependent and independent variables, as shown in the forest plot (Figure 4). The positive and significant effect holds when using an alternative novelty metric (Squared Maximum Mean Discrepancy, Table 7) and a different measure of public attention (Google Trends, Table 8). Although the series show differing forms of stationary behavior, they are both effectively I(0), which poses no problem for an ARDL specification as long as standard dete-
rministic terms are included.18
Finally, the analysis reveals a critical nuance in exposure source. The effect is strong and statistically precise for attention on Fox News and in Google Trends, but we do not detect comparable associations for coverage
18In level tests, Nt,z is clearly stationary (ADF p ≈ 0.000, KPSS p ≈ 0.10), while the z-scored Fox-Epstein exposure rejects a unit root (ADF p ≈ 0.005) but fails KPSS level-stationarity (p ≈ 0.01). In trend-augmented tests, Nt,z still strongly rejects a unit root (ADF p ≈ 0.000) but marginally fails KPSS trend-stationarity (KPSS p ≈ 0.03), whereas the exposure rejects a unit root (ADF p ≈ 0.012) and is consistent with trend-stationarity (KPSS p ≈ 0.10). While the main results include an intercept-
 but not a deterministic time trend, adding this linear time trend does not alter the main ARDL result. The short-run cumulative effect remains positive and statistically significant: βsum = 0.262 (SE = 0.076; p < 0.01); N = 256; R2 = 0.241. Inference is unchanged relative to the baseline specification.
8

Andrew Peterson Distracting from the Epstein files?
Figure 3: Local-projection estimates of Yt+h on Et with p=7 Y-lags and calendar FE. Top: level IRF; bottom:
cumulative IRF (sum of responses through horizon h). Shaded bands show 95% HAC CIs. Variables are standardized; coefficients read as sd(Y) per 1 sd(E). Vertical line marks h=0; h<0 are pre-trend placebos.
9

Andrew Peterson Distracting from the Epstein files?
0.00 0.25 0.50 0.75 Short-run effect on novelty (sd)
Nt: Google Trends Epstein (q = 3)
MMD2: Fox density (q = 7)
MMD2: Fox density (q = 1)
Nt: Fox density (q = 7)
Nt: Fox density (q = 3)
Nt: Fox density (q = 1)
Estimate ±95% HAC CI
Figure 4: Robustness of short-run effect across exposure and novelty measures. Points show βbsum with 95% HAC CIs.
on CNN or MSNBC in this sample (Table 8). Taken at face value, this pattern is consistent with the idea that responsiveness is concentrated when the scandal surfaces in media environments that are especially salient for the president and his supporters (Fox News) or in broader public attention (Google Trends), rather than when it appears in less-aligned outlets. However, as the design does not directly test differences in coefficients across outlets, we interpret these source differences cautiousl-
y.
While these findings provide robust evidence for a diversionary response, some interpretative caution is warranted. Our methods establish a strong temporal relationship that is inconsistent with simple reverse causality, but like all observational time-series, cannot definitively rule out a complex, unobserved confounder that simultaneously drives both media attention and posting behavior.
Furthermore, our measure of novelty quantifies a shift in linguistic patterns; whether this represents a deliberate pivot to new topics or simply a change in rhetorical style remains an important distinction. Finally, this study examines one actor, in response to one event, on one platform. While the finding that the response is triggered by friendly media (Fox) and public search (Google) provides a crucial clue, the precise human mechanism, be it a principal-level reaction or a staff-driven strat-
egy, is beyond the scope of this data, and the external validity of these findings remains a question for future research. These limitations notwithstanding, the overall pattern is more consistent with strategic responsiveness than with a fully static, scandal-insensitive baseline.
6 Conclusion
We set out to explore whether a president’s provocative communication style is a static, baseline feature (an “always-on circus”), or is consistent with a strategic tool for managing political threats. Our analysis of the 2025 Epstein scandal is more consistent with the latter interpretation. We find that increases in Epstein attention on Fox News, or in Google search interest, are followed by rapid and statistically significant increases in the linguistic novelty of the president’s Truth Social o-
utput, whereas we do not detect comparable patterns for coverage on CNN or MSNBC. A fruitful avenue for future work would be to examine the specific
10

Andrew Peterson Distracting from the Epstein files?
dynamics of which co-partisans willingly challenge a scandal-plagued but powerful leader, and how this interacts with the media environment.
The response is not likely a generic reaction to general media shifts, as evidenced by our null falsification tests, nor is it simply reverse causality, as shown by our timing placebos. Instead, the evidence is consistent with targeted strategic responsiveness. In particular, the pattern of media-source heterogeneity fits the interpretation that the president is especially responsive when a damaging narrative surfaces in outlets that are central to his base’s information environment, although the -
underlying decision-making process is beyond the scope of our data. Further work could specifically aim to identify the nature of how these two signals differ.
A critical limitation is that while we find the presence of a strategic response in linguistic novelty, we do not investigate its specific content. Our embedding-based measures show that the president’s messaging becomes more unusual relative to his recent content, but they do not tell us whether this novelty comes from moving onto different topics, reframing, escalating attacks on opponents, or changing rhetorical style. As a result, novelty should be viewed as a behavioral signal that is consist-
ent with, but not restricted to, diversionary communication. As an initial descriptive exercise, Figure 5 provides a timeline that juxtaposes the daily density of Epstein mentions in Fox News TV transcripts with the density of Trump’s Truth Social posts across selected topical categories. We also do not know to what extent these shifts influenced media uptake or ultimately shifted public opinion.
Finally, we cannot definitively rule out all unobserved confounders and do not make a claim about causality or about the intent or mental states of a leader. The analysis is based on observational data for a single leader, in response to one particular scandal, on a single social media platform. As such, the results should be viewed as a detailed case study of strategic responsiveness rather than a general law of political communication. The external validity of these dynamics, such as whether the-
y apply to other leaders, different platforms, or more conventional policy-related threats, remains an open question for future research. Because both the scandal and the broader communications environment continue to evolve, the temporal and external validity of these specific estimates is inherently limited. On the other hand, the design and measurement choices we lay out here can be read as a kind of elaborate pre-registration that future work can revisit and extend as additional data become av-
ailable.
These limitations provide a clear roadmap for future inquiry. The most immediate and vital next step is to open the black box of these novelty spikes. More broadly, this research agenda is central to understanding the mechanics of modern democratic accountability. This study provides behavioral evidence for the supply side of agenda control. The critical, unanswered question is to what degree it works, and when. Future research should test for downstream effects: do these spikes in communicative n-
ovelty successfully suppress media coverage of the original scandal or blunt its impact on public opinion? If leaders can, in fact, use the high-velocity attention economy to systematically crowd out damaging narratives, it poses a profound challenge to the public’s ability to scrutinize and sanction their actions.
References
Pablo Barberá, Anita R. Gohdes, Evgeniia Iakhnis, and Thomas Zeitzoff. Distract and divert: How world leaders use social media during contentious politics. The International Journal of Press/Politics, 29(1):47–73, 2024. doi:10.1177/19401612221102030.
11

Andrew Peterson Distracting from the Epstein files?
Zhi Da, Joseph Engelberg, and Pengjie Gao. In search of attention. The Journal of Finance, 66(5):1461–1499, 2011.
Murray Edelman. Constructing the political spectacle. University of Chicago Press, 1988.
Sigmund Freud. Group psychology and the analysis of the ego. WW Norton & Company, 1921. Originally published 1921, This edition 1989.
Arthur Gretton, Karsten M Borgwardt, Malte J Rasch, Bernhard Schölkopf, and Alexander Smola. A kernel two-sample test. The journal of machine learning research, 13(1):723–773, 2012.
Thomas Hobbes. Leviathan. Penguin Classics, London, 1651. Edited by C. B. Macpherson. This edition 1982.
Shanto Iyengar and Donald R Kinder. News that matters: Television & American opinion. University of Chicago Press, 2009.
Òscar Jordà. Estimation and inference of impulse responses by local projections. American Economic Review, 95(1):161–182, 2005. doi:10.1257/0002828053828518.
Juvenal. The satires X, 1893. URL https://www.thelatinlibrary.com/juvenal/10.shtml. From
Bücheler’s text of 1893; composed ca. 101 CE. Accessed 22 Oct 2025.
Gustave Le Bon. Psychologie des foules. Alcan, 1895.
Jack S Levy. The diversionary theory of war: A critique. Handbook of war studies, 1:259–288, 1989.
Stephan Lewandowsky, Michael Jetter, and Ullrich KH Ecker. Using the president’s tweets to understand political diversion in the age of social media. Nature communications, 11(1):5764, 2020.
Bohan Li, Hao Zhou, Junxian He, Mingxuan Wang, Yiming Yang, and Lei Li. On the sentence embeddings from pre-trained language models. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 9119–9130, November 2020. doi:10.18653/v1/2020.emnlp-main.733.
Niccolò Machiavelli. The Prince. Penguin Classics, London, revised edition edition, 1532. Originally published in 1532 (written 1513), this edition 2003.
Maxwell McCombs. Agenda setting function of mass media. Public relations review, 3(4):89–95, 1977.
Jonathan Mellon. Internet search data and issue salience: The properties of google trends as a measure of issue salience. Journal of Elections, Public Opinion & Parties, 24(1):45–72, 2014.
Whitney K. Newey and Kenneth D. West. A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3):703–708, 1987.
Norman J Ornstein. The permanent campaign and its future. American Enterprise Institute, 2000.
Scipio Sighele. The criminal crowd and other writings on mass society. University of Toronto Press, 1903. (L’intelligenza della folla). This edition 2018.
Jianlin Su, Jiarun Cao, Weijie Liu, and Yangyiwen Ou. Whitening sentence representations for better semantics and faster retrieval. arXiv preprint arXiv:2103.15316, 2021.
Gábor J Székely and Maria L Rizzo. Energy statistics: A class of statistics based on distances. Journal of statistical planning and inference, 143(8):1249–1272, 2013.
GJ Székely, ML Rizzo, and NK Bakirov. Measuring and testing dependence by correlation of distances. Annals of Statistics, 35(6):2769–2794, 2007.
Jaroslav Tir. Territorial diversion: Diversionary theory of war and territorial conflict. The Journal of Politics, 72(2):413–425, 2010.
Jeffrey K Tulis. The Rhetorical Presidency: New Edition. Princeton University Press, 2017.
12

Andrew Peterson Distracting from the Epstein files?
A Appendix
A.1 Embedding and Novelty Measurement
To quantify content novelty, we first convert the text of each post into a high-dimensional vector representation (embedding). This process begins by cleaning the raw post content (e.g., stripping HTML tags) and feeding the text into a pre-trained SentenceTransformer model, specifically all-MiniLM-L6-v2. This model maps each post to a 384-dimensional vector. From the full corpus of N posts, we obtain a matrix of “raw" embeddings.
These raw embeddings are known to suffer from anisotropy (a non-uniform distribution in the vector space), which can make distance metrics unreliable [Li et al., 2020]. To correct this, we apply a standard decorrelation step. We fit a Principal Component Analysis model with whitening to the entire matrix Eraw. This transformation de-correlates the features and scales them to have unit variance, yielding a matrix of ‘whitened’ embeddings, Ewhite [Su et al., 2021]. These whitened vectors are used fo-
r all novelty calculations.
The daily novelty measure, Nt, is constructed as a two-sample distributional distance. It quantifies how different the distribution of content on a given day t is from the distribution of content in the recent past. We define two samples for each day t:
• Sample 1 (Yt): The set of whitened embeddings {ei ∈ Ewhite} for all posts published on day t.
• Sample 2 (Yref): The set of whitened embeddings for all posts published in a trailing reference window of W days (e.g., days t − W through t − 1).
Prior to computing distances, all vectors in both Yt and Yref are L2-normalized (unit-normalized). The novelty score Nt is therefore a measure of distributional shift on the unit hypersphere in the decorrelated PCA space.
Our primary novelty measure, used for the main results (Table 1), is based on the ‘Energy Distance’, with a W = 7 day reference window [Székely et al., 2007, Székely and Rizzo, 2013]. The energy distance is a non-parametric statistic that measures the distance between two distributions based on the Euclidean distances (∥ · ∥2) between their samples. It is defined as:
N(energy)
t = 2E[∥yt − yref∥] − E[∥yt − y′t∥] − E[∥yref − y′
ref ∥]
where yt, y′t ∼ Yt and yref, y′
ref ∼ Yref are drawn independently.
As a robustness check (Table 7), we compute an alternative measure using the Squared Maximum Mean Discrepancy (MMD2) [Gretton et al., 2012]. This measure uses a W = 30 day reference window and is based on a kernel two-sample test. We use the Radial Basis Function (RBF) kernel, k(x, y) = exp(−γ∥x − y∥22). The kernel’s bandwidth parameter γ is not fixed, but rather set non-parametrically for each day’s comparison using the "median heuristic" (where γ is a function of the median pairwise distance in -
the combined sample Yt ∪ Yref).
A.2 Additional robustness results
This appendix section provides supplementary evidence to bolster the main findings presented in Section 5. We demonstrate that our core results are robust to alternative model specifications, resistant to threats to inference, and specific to the theoretical mechanism under investigation. Summary statistics are presented in Appendix Table 2.
13

Andrew Peterson Distracting from the Epstein files?
Table 2: Summary statistics variable count mean std min p25 median p75 max missing missing pct
Energy (Nt) 359 0.028 0.041 0 0.008 0.017 0.033 0.368 21 0.055 n posts 380 13.845 11.237 1 7 11 19 131 0 0 0 Fox News TV transcripts: hits 386 2.907 7.395 0 0 0 2 59 0 0 words 386 84398.005 10722.499 0 81105 85373 89638 99231 0 0 shows 386 23.671 3.211 0 24 24 24 48 0 0 shows with hits 386 1.220 2.244 0 0 0 2 14 0 0 density per 1000 386 0.034 0.087 0 0 0 0.024 0.671 0 0
First, we confirm that our findings are not an artifact of our baseline ARDL(p = 7, q = 3) specification. Appendix table 3 details the results for alternative distributed lag lengths. While a model with only one lag (q = 1) is insufficient to capture the full dynamic response, specifications allowing for a longer response window (q = 3 and q = 7) both yield strong, highly significant cumulative effects under HAC inference. This reinforces our interpretation that the strategic response is not a sin-
gle-day event but rather one that unfolds and accumulates over several days.
A primary challenge to our diversionary perspective is the threat of reverse causality or spurious correlation from pre-existing trends. Our timing and placebo tests squarely address these concerns. Table 4 reports the results of our timing placebo test, which includes future (lead) values of the exposure variable. The cumulative sum of these leads is small and statistically indistinguishable from zero (p = 0.553), providing strong evidence against reverse causality. This null finding is further c-
orroborated by the formal pre-trend diagnostics in Table 9. A joint HAC Wald test (p = 0.686) for the pre-shock horizons (h ∈ [−5, −1]) in our local projection model shows no evidence of a pre-existing trend. Table 5 complements this by showing that, while the cumulative pre-trend window (−3 to −1) is null, the post-shock windows (e.g., 0 to 7) are positive and highly significant.
Finally, we validate our findings by testing their specificity and robustness to measurement choices. To refute the “always-on circus” perspective, we must demonstrate that the response is specific to the politically damaging Epstein coverage, not just any salient media topic. Table 6 presents this falsification test. When we replace our Epstein exposure variable with placebo keywords (“Taylor Swift” or “NCAA basketball”). This suggests a targeted, strategic response, but does not fully rule out t-
he possibility of some unobserved confounder.
The finding is also not dependent on our specific operationalization of novelty or exposure. Table 7 shows that our main result holds when using an entirely different distributional distance metric (Squared Maximum Mean Discrepancy) to measure novelty. Table 8 provides crucial nuance regarding the exposure source. It confirms the main finding using both Fox News density and raw mention counts. More importantly, it shows the effect is strong and significant for Google Trends (p < 0.001 under HAC in-
ference) but is null for hostile media outlets (MSNBC and CNN). This corroborates the interpretation in the main text: the diversionary strategy appears to be triggered not by enemy criticism, but by signals that the damaging narrative has penetrated friendly media ecosystems or captured the attention of the broader public.
Taken together, these supplementary results provide a robust evidentiary foundation for our central claim, demonstrating that while the aforementioned caveats about causal inference still apply, the observed relationship is temporally precise, specific to the threat, and not an artifact of model specification or measurement.
14

Andrew Peterson Distracting from the Epstein files?
Table 3: ARDL specification grid for the novelty outcome.
Spec βbsum HAC s.e. pHAC Sample n R2
q = 1 0.104 0.061 0.090 2024-10-08–2025-10-17 256 0.198 q = 3 0.285 0.077 <0.001 2024-10-08–2025-10-17 256 0.226 q = 7 0.481 0.124 <0.001 2024-10-08–2025-10-17 256 0.251
Columns report the short-run exposure effect alongside HAC inference, sample window, and fit statistics.
Table 4: Timing placebo tests using leads of the exposure variable.
Spec δbsum HAC s.e. pHAC Sample n R2
Fox density (q = 3) -0.042 0.071 0.553 2024-10-08–2025-10-16 255 0.234 MMD2 novelty (q = 3) -0.066 0.059 0.269 2024-10-08–2025-10-16 255 0.244
Estimates report the sum of lead coefficients along with HAC inference and model diagnostics.
Table 5: Local-projection cumulative windows for the novelty response. Window Estimate HAC s.e. t pHAC Uniform band excl. 0? n
-3—1 0.105 0.115 0.909 0.363 – 266 0–1 0.181 0.094 1.925 0.054 – 246 0–3 0.366 0.123 2.981 0.003 – 228 0–7 0.783 0.185 4.231 <0.001 – 197 0–14 0.326 0.160 2.042 0.041 – 160
Rows list the estimated impulse responses over selected horizons together with HAC inference and whether the 95% uniform confidence band excludes zero.
Table 6: Falsification checks replacing Epstein exposure with alternative transcript keywords.
Keyword βbsum HAC s.e. pHAC n
Taylor Swift -0.136 0.082 0.098 256 NCAA basketball 0.026 0.055 0.635 256
Effects are expected to be null if the novelty response is specific to the Epstein coverage spike.
Table 7: Alternative novelty measure (MMD2) using Fox exposure.
Spec βbsum HAC s.e. pHAC n R2
q = 1 0.058 0.056 0.296 256 0.201 q = 3 0.238 0.067 <0.001 256 0.235 q = 7 0.475 0.111 <0.001 256 0.265
Entries mirror Table 1.
Table 8: Robustness of the short-run novelty response across alternative exposure measures.
Exposure βbsum HAC s.e. pHAC Sample n R2
Fox News density 0.285 0.077 <0.001 2024-10-08–2025-10-17 256 0.226 Fox News mentions 0.277 0.076 <0.001 2024-10-08–2025-10-17 256 0.224 MSNBC density 0.100 0.064 0.117 2024-10-08–2025-10-17 256 0.183 CNN density 0.109 0.066 0.100 2024-10-08–2025-10-17 256 0.206 Cable mean (Fox+MSNBC+CNN) 0.128 0.064 0.045 2024-10-08–2025-10-17 256 0.198 Google Trends: Epstein 0.320 0.085 <0.001 2024-11-04–2025-10-17 229 0.310
All specifications use the novelty outcome Nt with q = 3 exposure lags.
15

Andrew Peterson Distracting from the Epstein files?
Table 9: Joint pre-trend diagnostics accompanying the local-projection event study. Test Statistic df p-value Notes
Wald H0: no pre-trend 3.090 5 0.686
Rows report Wald tests over h ∈ [−5, −1].
Table 10: Novelty diagnostics and posting intensity Days (total) 384 Missing Nt (days; share) 25; 0.065 Low-sample days 25 Zero-post days 4 Posts/day (median [p10, p90]) 11 [4, 28] Corr(Nt, volume) -0.054 Corr(Nt, posts) -0.054
Nt computed only when day t has ≥ 3 posts and the trailing window contributes ≥ 10 posts; otherwise Nt is missing and the day is flagged “lowsample.” “Zero-post days” are the subset with no posts. “Posts/day” summarizes the cross-day distribution. Correlations are Pearson between standardized Nt and same-day volume/post count on non-missing days.
Table 11: Top novelty days (z-scored) Date Nt,z Posts 2024-11-06 8.31 13 2025-07-17 7.37 15 2025-08-09 5.87 27 2025-01-25 4.26 26 2025-06-08 3.98 3
Nt,z is Nt standardized over the sample; “Posts” is the number used to compute Nt on that date. High-Nt,z dates are substantively unusual rather than volume spikes.
16

Andrew Peterson Distracting from the Epstein files?
Figure 5: Density of “Epstein” on Fox News TV and Selected Categories of Trump Truth Social Posts.
17

Andrew Peterson Distracting from the Epstein files?
Table 12: Key dates, events, and sources
Date Event Source (title, outlet, date)
2024-01-04 First tranche of Epstein-related court records unsealed (Maxwell defamation case).
Court documents naming Jeffrey Epstein’s associates unsealed. ABC News, 2024-01-04.
2025-01-23 Executive order directing declassification of JFK/RFK/MLK records.
Executive Order 14176-Declassification of Records Concerning the Assassinations of President John F. Kennedy, Senator Robert F. Kennedy, and the Reverend Dr. Martin Luther King, Jr. The American Presidency Project (UCSB), 2025-01-23.
2025-03-01 Executive order declaring English the official U.S. language.
Designating English as the Official Language of the United States. The White House, 2025-03-01.
2025-03-19 NARA posts implementation details responding to EO 14176.
The President John F. Kennedy Assassination Records Collection (Response to Executive Order 14176). U.S. National Archives (NARA), 2025-03-19.
2025-06-04 Trump reinstates U.S. travel ban, barring citizens of 12 countries.
Trump reinstates US travel ban, bars citizens of 12 countries. Reuters, 2025-06-04.
2025-06-07 Los Angeles deployment: announces deployment/federalization of National Guard over state objection.
Statement from the White House. The White House, 2025-06-07; With troops and protests, Trump’s feud with California escalates. CalMatters, 2025-06-09.
2025-07-16 Trump dismisses “Epstein files” pressure as a hoax; coverage notes intra-party backlash.
Trump calls Epstein conspiracy a ‘hoax’ and turns on Maga ‘weaklings’. The Guardian, 2025-07-16.
2025-08-11 Presidential memorandum mobilizing D.C. National Guard (“Restoring Law and Order in the District of Columbia”).
Restoring Law and Order in the District of Columbia. The White House, 2025-08-11.
2025-08-18 DOJ informs House Oversight it will begin producing Epstein-related records.
Chairman Comer: DOJ Complying with Epstein Records Subpoena. U.S. House Committee on Oversight and Accountability, 2025-08-18.
2025-09-02 House Oversight releases 33,295 DOJ-provided pages (“Epstein records”).
Oversight Committee Releases Epstein Records Provided by the Department of Justice. U.S. House Committee on Oversight and Accountability, 2025-0902.
2025-09-08 House Oversight releases records provided by the Epstein estate.
Oversight Committee Releases Records Provided by the Epstein Estate, Chairman Comer Provides Statement. U.S. House Committee on Oversight and Accountability, 2025-09-08.
2025-09-30 Portland deployment: announces federal deployment/resources for public order.
President Trump Deploys Federal Resources to Crush Violent Radical Left Terrorism in Portland. The White House, 2025-09-30.
2025-10-04 Chicago deployment: memorandum invoking federal security posture; National Guard federalization moves.
Department of War Security for the Protection of Federal Personnel and Property in Illinois. The White House, 2025-10-04; Hundreds of Illinois National Guard troops to be called for federal service, memo says. CBS Chicago, 2025-10-05.
2025-10-17 Additional release: transcript from Alex Acosta interview published.
Oversight Committee Releases Acosta Transcript. U.S. House Committee on Oversight and Accountability, 2025-10-17.
18

Andrew Peterson Distracting from the Epstein files?
Table 13: Example Media Claims of Diversionary tactics
Category Name Sources
Deep-state/Scapegoating Obama “treason” claim + AI arrest video
Reuters - “Trump accuses Obama of treason” (Jul 23, 2025); Washington Post - “As MAGA world focuses on Epstein. . . ” (Jul 25, 2025); The Guardian - “Distraction machine. . . ” (Jul 25, 2025)
Culture-war/Sports Threat to block Commanders stadium unless name reverts to “Redskins”
Washington Post (Opinion) “Sleight of Trump: Forget Epstein! Get rid of ‘Commanders’!” (Jul 22, 2025); Washington Post - “As MAGA world focuses on Epstein. . . ” (Jul 25, 2025); The Guardian - “Distraction machine. . . ” (Jul 25, 2025)
Selective transparency/Document dump
Release of MLK Jr. assassination files
Washington Post - “Releases thousands of MLK Jr. files” (Jul 21, 2025); The Guardian - “Distraction machine. . . ” (Jul 25, 2025)
Economic theatre/Institutional provocation
Trip to the Federal Reserve; public tussle with Chair Powell
Reuters - “Distraction methods fall flat. . . ” (Jul 26, 2025)
Media attack/Litigation $10B defamation suit against Wall Street Journal over Epstein birthday-letter report
Reuters - “WSJ suit faces timing hurdle” (Jul 22, 2025); AP - “Trump sues WSJ and Murdoch” (Jul 18, 2025)
Celebrity/pop-culture outrage Floats revoking Rosie O’Donnell’s citizenship (Truth Social)
The Guardian - “Distraction machine. . . ” (Jul 25, 2025)
Flood-the-zone posting/Memes Rapid-fire viral clips and odd posts to drown out Epstein coverage
Washington Post - “As MAGA world focuses on Epstein. . . ” (Jul 25, 2025); The Guardian - “Distraction machine. . . ” (Jul 25, 2025)
Press access management Bans Wall Street Journal from Scotland trip amid Epstein furor
Washington Post - “The 7: Trump’s Epstein distractions. . . ” (Jul 22, 2025)
Narrative reframing Labels Epstein issue a “hoax”; rebukes supporters as “weaklings”
The Guardian - “Calls Epstein conspiracy a ‘hoax’. . . ” (Jul 16, 2025); AP - “Trump slams his own supporters as ‘weaklings’. . . ” (Jul 2025)
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.434Z
- **Text Length:** 52881 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
