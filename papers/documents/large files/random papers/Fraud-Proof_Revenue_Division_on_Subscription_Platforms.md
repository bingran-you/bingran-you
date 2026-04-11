# PDF Document: Ghosh et al. - 2025 - Fraud-Proof Revenue Division on Subscription Platforms.pdf

**File Path:** Ghosh et al. - 2025 - Fraud-Proof Revenue Division on Subscription Platforms.pdf

**Processed Date:** 2026-02-10T18:15:54.426Z

**File Size:** 661.28 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3218

**Title:** Fraud-Proof Revenue Division on Subscription Platforms

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Fraud-Proof Revenue Division on Subscription Platforms
Abheek Ghosh 1 * Tzeh Yuan Neoh 2 * Nicholas Teh 1 * Giannis Tyrovolas 1 *
Abstract
We study a model of subscription-based platforms where users pay a fixed fee for unlimited access to content, and creators receive a share of the revenue. Existing approaches to detecting fraud predominantly rely on machine learning methods, engaging in an ongoing arms race with bad actors. We explore revenue division mechanisms that inherently disincentivize manipulation. We formalize three types of manipulation-resistance axioms and examine which existing rules satisfy these. We show that a mech-
anism widely used by streaming platforms, not only fails to prevent fraud, but also makes detecting manipulation computationally intractable. We also introduce a novel rule, SCALEDUSERPROP, that satisfies all three manipulation-resistance axioms. Finally, experiments with both real-world and synthetic streaming data support SCALEDUSERPROP as a fairer alternative compared to existing rules.
1. Introduction
In September 2024, the FBI criminally charged a musician, Michael Smith, for orchestrating a scheme to fraudulently inflate his music streams on platforms such as Amazon Music, Apple Music, Spotify, and YouTube Music—and according to court documents, walked away with over US$10 million in royalty payments (United States Attorney’s Office, 2024). To successfully execute his scheme, he utilized hundreds of thousands of songs created using AI, and built a complicated network of over a thousand bot ac-
counts that artificially boost streams across these platforms billions of times. Although each stream originated from a bona fide, fee-paying account, the way the platform(s) distributed subscription revenue allowed each bot to generate more in royalties than it cost to maintain its subscription.
Subscription platforms have seen significant growth in recent years, driven by the rise of internet streaming services
*Alphabetical ordering 1University of Oxford, UK 2Harvard University, USA. Correspondence to: Tzeh Yuan Neoh <tzehyuan neoh@harvard.edu>, Nicholas Teh <nicholas.teh@cs.ox.ac.uk>, Giannis Tyrovolas <giannis.tyrovolas@cs.ox.ac.uk>.
such as Spotify, Apple Music, Netflix, etc. For instance, the annual revenue of the music streaming industry reached US$27.6 billion in 2023, with significant increases over the last ten years (International Federation of the Phonographic Industry, 2024). Under this business model, users pay a fixed subscription fee to enjoy unlimited access to all content on the platform, typically by content creators. The platform then takes a fixed revenue cut and distributes the rest to the creators based on e-
ngagement metrics (e.g., play counts or views) and/or specific agreements between creators and platforms.
Despite efforts to curb manipulation, bad actors persist, using bots and click-farms to inflate user engagement (Drott, 2020; Snickars & Ma ̈hler, 2018). This issue is so significant that major music streaming platforms like Amazon Music and Spotify have established an industry advocacy group (Music Fights Fraud Alliance, 2025) to combat such fraud, which is estimated to cost the industry US$300 million annually (Burton, 2021). Additionally, the rise of AI-generated content introduces new challeng-
es— platforms are increasingly flooded with synthetic tracks, videos, and live streams designed to exploit engagement-driven algorithms. This AI-generated content often amplifies fraudulent listening activities, making manipulation harder to detect.
Current machine learning (ML) approaches to this problem predominantly focus on detecting fraudulent activity—using sophisticated algorithms ranging from anomaly detection (Esmaeilzadeh et al., 2022) to unsupervised learning (Mollao ̆glu et al., 2021) and graph neural networks (Li et al., 2021). For instance, music streaming platforms such as Spotify have proprietary models that identify whether a stream is legitimate (using meta-data such as IP location, listening patterns, and other information)-
 and issue fines if they deem too many streams to be fraudulent (Spotify, 2025).
However, as AI continues to evolve, so do the methods used by fraudsters, leading to a continuous arms race. These bad actors increasingly leverage advanced automation tools to make fraudulent activities more sophisticated and harder to detect, challenging the robustness of existing detection frameworks and driving the need for innovative, adaptive solutions (United States Attorney’s Office, 2024).
The root of the problem stems from the way revenue is currently distributed to content creators on most subscription
1
arXiv:2511.04465v1 [cs.GT] 6 Nov 2025

Fraud-Proof Revenue Division on Subscription Platforms
based streaming platforms: “funds from the royalty pool are allocated proportionally among artists based on their respective percentages of total streams” (United States Attorney’s Office, 2024)—we call this rule GLOBALPROP.
In this paper, we tackle this problem from a mechanism design perspective, i.e., we mathematically formalize notions of fraud in this setting and investigate the existence of revenue division mechanisms that can inherently disincentivize fraudulent behavior, thereby reducing the industry’s reliance on expensive and complex fraud detection methods to combat manipulation. Moreover, if such mechanisms exist, they could complement existing ML-based approaches by providing a foundational layer of fraud-
 resistance. These mechanisms inherently target known forms of fraud, allowing ML systems to focus on adapting to emerging, previously unseen types of fraud that may arise in the future, ensuring continuous improvement in detecting and addressing manipulation.
Additionally, many policymakers and academics have also argued against the fairness of GLOBALPROP in favor of an alternative rule—USERPROP (which directly allocates a fixed fraction of each user’s subscription fee only among the creators of the content the user consumes)—from an economic (Meyn et al., 2023; Muikku, 2017), empirical (Moreau et al., 2024), theoretical (Berganti ̃nos & MorenoTernero, 2025), and legal (Dimont, 2018) perspective. Motivated by these debates, we aim to address fairness c-
onsiderations in our work as well.
Lastly, the primary focus of our work is on fraudulent behavior specifically related to the creation of fake users (bots) to manipulate engagement metrics. We deliberately do not address the equally prevalent issue of widespread AIgenerated content on these platforms. The legal status of such content can vary, especially since some popular artists openly release their AI-generated voices as (semi-)opensource (Josan, 2024), making its permissibility platformdependent and governed by specific rules.-
 Nonetheless, our work provides a principled framework for studying similar challenges. As AI continues to evolve and new forms of fraudulent behavior emerge, our approach can be extended to address these issues, provided that appropriate regulatory frameworks are established to guide the platforms.
1.1. Our Results
In this work, we focus on designing manipulation-resistant mechanisms from a computational and axiomatic perspective, setting our research apart from all previous work on this model. Although we build on the standard model for subscription platforms established in prior literature, our key contribution lies in introducing several axioms that aim to capture both resistance to manipulation and maintaining fairness and analyzing these axioms with respect to multiple
revenue-division mechanisms—three from existing literature and one novel mechanism that we propose.
Moreover, we challenge the current status quo rule, GLOBALPROP, by demonstrating that detecting suspicious activity under this rule is computationally intractable—an important finding in this context. Since fraud detection (and fraud in general) is highly relevant to the ML community, we believe this result will be of particular interest to researchers and practitioners in the field.
In Section 2, we establish three fundamental properties that define the space of mechanisms we consider: anonymity, neutrality, and no free-ridership. The first two ensure that payoffs to artists only depend on their engagement with users. In particular, mechanisms cannot distinguish between fraudulent and genuine artists or users. No free-ridership eliminates trivial cases where an artist without engagement receives a non-zero payoff. Next, we formalize three forms of resistance to strategic mani-
pulation. Fraud-proofness prevents adversaries from profitably creating new fraudulent users. Bribery-proofness prevents profitably bribing existing users and is a strengthening of click-fraud-proofness as presented in Berganti ̃nos & Moreno-Ternero (2025). Finally, (strong) Sybil-proofness ensures that artists cannot gain by splitting into multiple identities or merging with others. All three axioms are novel in our setting and are motivated by real-world observations. We also introduce two addit-
ional fairness axioms—engagement monotonicity and Pigou-Dalton consistency, the latter inspired by an equitability concept in welfare economics.
In Section 3, we conduct an axiomatic study (with respect to our proposed concepts) of several rules proposed in the literature so far. Notably, we show that GLOBALPROP fails to satisfy fraud-proofness and bribery-proofness, in contrast to the other two contenders—USERPROP and USEREQ. Contributing to existing critiques of GLOBALPROP, we establish a case against GLOBALPROP through a computational lens, and in the context of fraud detection. We show that if a platform uses GLOBALPROP, detecting pote-
ntially fraudulent activity is NP-hard. We then analyze the two other existing rules: USERPROP and USEREQ. We study their axiomatic properties and prove that they satisfy our manipulation-resistance axioms, unlike GLOBALPROP. We also demonstrate that portioning rules cataloged in Elkind et al. (2023) fail all the manipulation-resistance axioms we consider.
Finally, in Section 4, we propose and study a new ruleSCALEDUSERPROP. We show that it has the same axiomatic guarantees as USERPROP but is fairer when measured by the popular “pay-per-stream” metric. We use this to quantify maximum envy in this setting and empirically verify this against existing rules in Section 5.
2

Fraud-Proof Revenue Division on Subscription Platforms
All omitted proofs can be found in the paper’s appendix.
1.2. Related Work
Our work considers the model proposed and studied by several recent works on (music) streaming platforms.1
Alaei et al. (2022) and Lei (2023) focused on a comparative study between GLOBALPROP and USERPROP. More specifically, Alaei et al. (2022) focused on providing characterizations of both rules with respect to newly proposed axioms. They were also concerned with which of these two rules could sustain a set of artists’ profitability on the platform, as well as comparing them from both the platform’s and the artists’ perspectives. Lei (2023) pointed out the shortcomings of USERPROP. They compared the t-
wo rules primarily in terms of egalitarian fairness (i.e., the lowest payout among all artists) and efficiency (i.e., “dominance on quality profile”), but they allow for artists to vary stream quality and thus this concept is not relevant in our model.
Berganti ̃nos & Moreno-Ternero (2025) go beyond previous works to consider a family of rules that interpolates between GLOBALPROP and USERPROP, and they provide further characterizations for both rules and their interpolation. Subsequently, Berganti ̃nos & Moreno-Ternero (2025) introduced the Shapley index as a rule for this setting and characterized it using existing and new axioms.
Deng & Ma (2024) investigate revenue-sharing mechanisms for AI-generated music platforms. Their work centers on the challenge of attributing a new, AI-created track to specific copyrighted recordings in the training data—an attribution problem that underpins royalty allocation in that setting. This challenge is fundamentally distinct from the problems we address.
A related stream of work is the museum pass problem, popular in the economics literature, and was first introduced by Ginsburgh & Zang (2001; 2003). The problem studies the sharing of revenue among museums from the sale of museum passes for a price below the aggregate admission fee of individual member museums (i.e., bundled pricing). B ́eal & Solal (2010) and Ginsburgh & Zang (2001; 2003) studied the problem as a coalitional game, whereas CasasM ́endez et al. (2011) and Est ́evez-Fern ́andez et a-
l. (2012) studied the problem as a bankruptcy game. Wang (2011) studied the dual version of the problem—the museum cost sharing problem. All of the works above (including several more recent works which look at the Shapley value as a rule (Berganti ̃nos & Moreno-Ternero, 2015; 2016)) essentially conduct an axiomatic study of popular rules in their respective games modeled, but adapted to this new setting. We refer the reader to the Casas-M ́endez et al. (2014)
1However, we note that this model is also applicable to many other content subscription platforms (e.g., education, art, etc.).
for a survey on earlier works on this area. From 2001 to 2014, works on the topic cumulatively studied more than 30 axioms, with broadly two kinds of manipulation-resistant axioms—one based on “ticket prices” and the other based on “reported number of visitors”. However, we note that the museum pass problem is fundamentally different from our problem, and thus the way axioms (and rules) are conceptualized would also naturally be distinct. This distinction is particularly apparent when it comes to -
concepts relating to manipulation.
Our work also contributes to the broader literature on applying computational and algorithmic methods to address incentive-related challenges in online economic systems and platforms. For example, manipulation issues have been studied in the contexts of online advertising markets (Golrezaei et al., 2021a; Kanoria & Nazerzadeh, 2014), recommendation systems (Eilat & Rosenfeld, 2023; Yao et al., 2023), and e-commerce platforms (Golrezaei et al., 2021b; He et al., 2022; Mayzlin et al., 2014).
2. Model and Axioms
For each positive integer k, let [k] := {1, . . . , k}. Let N = [n] be the set of users and C = [m] be the set of artists. Suppose that an adversary controls a set of fake users Nb ⊆ N and a set of fake artists Cb ⊆ C; let nb = |Nb|. For each i ∈ N and j ∈ C, let wij ≥ 0 denote the number of interactions user i has with artist j.2 For each user i ∈ N , we assume that P
j∈C wij > 0, i.e., the user has some
non-zero interactions.3 Let wi = (wi1, . . . , wim) for each i ∈ N . The engagement profile is w = (w1, . . . , wn).
Without loss of generality, we assume that the subscription fee for each user is 1 unit. Then, the total subscription fee collected from the users is n. As assumed in the prior works on this topic, and as observed in the real-world, we assume that the platform takes a cut of (1 − α)n and distributes the remaining αn to the artists, for some α ∈ (0, 1].
A problem instance I = (N, C, w) is defined by the set of users N , the set of artists C, and the engagement profile w. A payment rule (or simply rule) is a function φ that maps each instance I to an m-valued vector (φI(1), . . . , φI(m)), where φI(j) is the payment to artist j ∈ C. To simplify notation, for a subset of artists S ⊆ C, we use φI(S) to denote the sum of the payments to the artists in the set S: φI(S) = P
j∈S φI (j).
2This is typically defined as a stream (on music streaming platforms like Spotify), whereby a user plays a track for a minimum duration, or a view (on video streaming platforms like YouTube Live) when a user joins and stays for a minimum amount of time. 3Note that in many of our proofs, we can without loss of generality assume that weights are rational numbers.
3

Fraud-Proof Revenue Division on Subscription Platforms
2.1. Preliminary Axioms
We begin by introducing three fundamental fairness properties that any reasonable revenue division mechanism in our setting should satisfy. We will then provide a rationale for the necessity of these axioms in our setting.
The first axiom—anonymity—prescribes that the rule cannot distinguish between real and fake users.
Definition 2.1 (Anonymity). A rule φ is anonymous if permuting the labels of the users does not affect the payoffs of the artists. Formally, rule φ is anonymous if for all instances I = (N, C, w) and I′ = (N, C, w′) and all permutations σ : N → N , if wi = w′
σ(i) for all users i ∈ N , then for all artists j ∈ C, φI (j) = φI′ (j).
The second axiom—neutrality—is similar in nature to anonymity, but for artists. It prescribes that the rule cannot distinguish between real and fake artists.
Definition 2.2 (Neutrality). A rule φ is neutral if permuting the labels of the artists permutes their payoffs. Formally, rule φ is neutral if for all instances I = (N, C, w) and I′ = (N, C, w′) and all permutations σ : C → C, if wij = w′
iσ(j) for all users i ∈ N and artists j ∈ C, then for all artists j ∈ C, φI(j) = φI′ (σ(j)).
In our setting, it is crucial to consider only rules that are anonymous and neutral. In practice, given the number of users/artists, it is virtually impossible to detect all fake users/artists, even with existing fraud detection techniques, as noted in our introduction. This inability to reliably distinguish between real and fake users or artists underscores the importance of addressing the questions we aim to answer.
Finally, the last fundamental axiom we consider is the notion of no free-ridership. Intuitively, this means that artists who receive no user engagement should not receive any payment.
Definition 2.3 (No free-ridership). A rule φ satisfies no free-ridership if, for any instance I = (N, C, w) and artist j ∈ C where P
i∈N wij = 0, then φI (j) = 0.
This axiom rules out trivial rules that allocate payments disregarding user engagement (e.g., giving equal payment to each artist irrespective of user engagement) and are, therefore, resistant to strategic manipulation.
2.2. Axioms for Preventing Strategic Manipulation
We start by formalizing the fraud alleged in the indictment mentioned in the introduction. Intuitively, no adversary should be able to create fake users (Nb), pay their subscription fee, and earn a profit from her own fake artists (Cb).4 Rules that make such fraud impossible are fraud-proof.
4Note that we do not impose any constraints on the listening behavior or engagement profiles of these fake users.
Definition 2.4 (Fraud-proofness). A rule φ is fraud-proof if the following holds: For any two instances I = (N \ Nb, C, w) and I′ = (N, C, w′) with wi = w′
i for all i ∈ N \ Nb, and any Cb ⊆ C, we have that φI′ (Cb) − φI(Cb) ≤ nb.
A rule φ is single-user fraud-proof if nb = 1.
Our definition of fraud-proofness considers only an adversary’s profit from creating fake users, not fake artists. This means an adversary can introduce fake artists to earn profits without using fake users. However, without fake users, any fake artist must attract engagement from real users to profit (by the no free-ridership assumption). Whether this practice violates a platform’s rules is a separate issue beyond our scope—we focus on the extra profit an adversary can gain by adding fake users, -
assuming a fixed set of artists (which may include fake ones).
Next, we show that single-user fraud-proofness is equivalent to (multi-user) fraud-proofness, simplifying how one can reason about fraud-proofness.
Proposition 2.5. A rule φ is fraud-proof if and only if it is single-user fraud-proof.
Another form of manipulation is bribery. Bribery is particularly relevant in scenarios where the platform imposes substantially stringent access requirements, making creating fake users significantly more challenging. However, under such conditions, artists may resort to colluding with and bribing users—offering to pay the subscription fees of the users to manipulate their engagement profiles. This practice is commonly observed in streaming farms, the streaming equivalent of click farms in adverti-
sing (Drott, 2020). We call resistance to such bribery as bribery-proofness.
Definition 2.6 (Bribery-proofness). A rule φ is briberyproof if the following holds: For any two instances I = (N, C, w) and I′ = (N, C, w′) with wi ̸= w′
i for exactly k users, and any Cb ⊆ C, we have that φI′ (Cb) − φI(Cb) ≤ k.
A rule φ is single-user bribery-proof if k = 1.
Similarly to fraud-proofness, multi-user bribery-proofness and single-user bribery-proofness are equivalent.
Proposition 2.7. A rule is bribery-proof if and only if it is single-user bribery-proof.
We note that (single-user) bribery-proofness substantially strengthens the axiom of click-fraud-proofness proposed in Berganti ̃nos & Moreno-Ternero (2025). Click-fraudproofness requires that a single user altering their engagement cannot alter the payoff of any artist by more than 1. Formally, for all j, |φI′ (j) − φI(j)| ≤ 1. Singleuser bribery-proofness requires that for all subsets of artists Cb ⊆ C, |φI′ (Cb) − φI(Cb)| ≤ 1.5 Bribery-proofness im
5Note that by Theorem 2.7, it suffices to only consider single
4

Fraud-Proof Revenue Division on Subscription Platforms
plies click-fraud-proofness and protects from multiple artists colluding.
Fraud-proofness and bribery-proofness capture resilience to two different kinds of manipulation. Despite being similar, we show that the axioms are not equivalent. Recall that α is the fraction of each user’s subscription fee that is allocated to the artists, with the remaining portion retained by the platform as a fixed cut.
Theorem 2.8. Consider some rule φ. Then:
(i) If α = 1 and φ is fraud-proof, it is also bribery-proof;
(ii) For α ∈ (0, 1], there exists a rule that is bribery-proof but not fraud-proof, even when m = 2;
(iii) For α < 1, there exists a rule that is fraud-proof but not bribery-proof, even when m = 2.
The last pair of axioms that we consider—Sybil-proofness6 and its strong counterpart—addresses a different form of strategic manipulation compared to the two earlier concepts. Intuitively, these axioms are designed to prevent any artist(s) from splitting or merging to gain an unfair advantage and fraudulently increasing their revenue share, thus also ensuring that all artists are treated fairly based on their actual level of user engagement.
Definition 2.9 (Sybil-proofness). A rule φ is Sybil-proof if the following holds: For any two instances I = (N, C, w) and I′ = (N, C′, w′) whereby C ⊆ C′, if for every subset of artists C∗ ⊆ C such that
(i) wij = w′
ij for all i ∈ N, j ∈ C∗; and
(ii) P
j∈C\C∗ wij = P
j∈C′\C∗ w′
ij for all i ∈ N ,
then we must have that φI (C \ C∗) = φI′ (C′ \ C∗).
We can define a stronger notion of Sybil-proofness by relaxing (i) and (ii), defined as follows. Note that strong Sybil-proofness implies Sybil-proofness.
Definition 2.10 (Strong Sybil-proofness). A rule φ is strongly Sybil-proof if the following holds: For any two instances I = (N, C, w) and I′ = (N, C′, w′) whereby C ⊆ C′, if for any subset of artists C∗ ⊆ C such that
(i) P
i∈N wij = P
i∈N w′
ij for all j ∈ C∗; and
(ii) P
i∈N
P
j∈C\C∗ wij = P
i∈N
P
j∈C′\C∗ w′
ij ,
then we must have that φI (C \ C∗) = φI′ (C′ \ C∗).
user bribery-proofness. 6The name is inspired by the concept of a Sybil attack in computer networks.
We will show later that GLOBALPROP is the only neutral rule satisfying strong Sybil-proofness (Theorem 3.2), hence also motivating our study of (the weaker) Sybil-proofness.
2.3. Fairness Axioms
Next, we consider two fairness properties—engagement monotonicity and Pigou-Dalton consistency.
Intuitively, if an artist’s engagement increases while every other artists’ engagement does not increase, this artist’s payoff should not decrease—this aligns with basic economic principles. It would be fundamentally unfair for a creator’s rising popularity to result in a lower payoff. We formalize this fairness property as follows.
Definition 2.11 (Engagement monotonicity). A rule φ is engagement monotone if the following holds: For any two instances I = (N, C, w) and I′ = (N, C, w′), if there exists a j∗ ∈ C such that
(i) wij∗ ≤ w′
ij∗ for all i ∈ N ; and
(ii) wij ≥ w′
ij for all i ∈ N and j ∈ C \ {j∗},
then we must have that φI (j∗) ≤ φI′ (j∗).
Next, the Pigou-Dalton principle (Pigou, 1920; Dalton, 1920), is a fundamental fairness notion from welfare economics and often referenced in collective decision-making (Moulin, 2003)—it states that among similar outcomes, the equitable one should be picked. We interpret this principle in our setting: all other things being equal, an artist who is more “uniformly enjoyed” should receive weakly more payoff from an equally popular but “polarizing” artist.
Definition 2.12 (Pigou-Dalton consistency). A rule φ is Pigou-Dalton consistent if the following holds: For any two instances I = (N, C, w) and I′ = (N, C, w′), if there exists some i, i′ ∈ N and j ∈ C such that
(i) w′
ij = wij − δ (where δ > 0 and wij − δ > 0);
(ii) w′
i′j = wi′j + δ and w′
i′j ≤ w′
ij ; and
(iii) wkj′ = w′
kj′ for all k ∈ N and j′ ∈ C \ {j}, and
wkj = w′
kj for all k ∈ N \ {i, i′}.
then we must have that φI(j) ≤ φI′ (j).
3. Existing Mechanisms
In this section, we formally define the three existing mechanisms proposed in the literature, and study which axioms they satisfy. We summarize our results in Table 1. At the end of the section, we also include a reference to a discussion on how our model generalizes portioning rules.
5

Fraud-Proof Revenue Division on Subscription Platforms
Axioms / Rules GP UP UEQ SCUP
Fraud-proofness ✗ ✓ ✓ ✓ Bribery-proofness ✗ ✓ ✓ ✓ Sybil-proofness ✓ ✓ ✗ ✓ Strong Sybil-proofness ✓ ✗ ✗ ✗ Engagement monotonicity ✓ ✓ ✓ ✓ Pigou-Dalton consistency ✓ ✗ ✓ ✗
Table 1. Axiomatic properties of the revenue division mechanisms. GP is GLOBALPROP, UP is USERPROP, UEQ is USEREQ, and SCUP is SCALEDUSERPROP.
The rules we consider in this and the next section trivially satisfy anonymity and neutrality. Therefore, among the three preliminary axioms introduced in Section 2.1, we will only formally prove the satisfaction of no free-ridership.
3.1. GLOBALPROP: The Status Quo
GLOBALPROP distributes the payoff to each artist proportionally to the artist’s share of total engagement. For example, if there are 500 users, and an artist gets 25% of the total user engagement in the platform, then the artist correspondingly receives a payment of 0.25 × 500α = 125α under GLOBALPROP. According to court documents (United States Attorney’s Office, 2024), this is the rule that major streaming platforms use.7
GLOBALPROP
Given an instance I = (N, C, w) and for each j ∈ C, the payment rule GLOBALPROP is defined as follows.
φI (j) =
P
i∈N wij
P
j ′ ∈C
P
i∈N wij′
× αn.
It is easy to observe that users with higher engagement exert a disproportionate influence on revenue distribution. Given this, it is not surprising that this rule fails to satisfy both fraud-proofness and bribery-proofness.
Theorem 3.1. GLOBALPROP satisfies strong Sybilproofness, but fails fraud-proofness and bribery-proofness.
Moreover, strong Sybil-proofness uniquely characterizes GLOBALPROP, given our neutrality assumption.
Theorem 3.2. GLOBALPROP is the only neutral rule satisfying strong Sybil-proofness.
GLOBALPROP also satisfies our fairness axioms.
Theorem 3.3. GLOBALPROP satisfies no free-ridership, engagement monotonicity, and Pigou-Dalton consistency.
7It is also sometimes known as the pro-rata rule.
A Case Against GLOBALPROP: The Computational Intractability of Fraud Detection. We have shown that GLOBALPROP is not fraud-proof. One might hope that artists benefiting from fraud could be easily identified and removed. Unfortunately, detecting the artists who gain the most from fraudulent activity is computationally intractable.
Importantly, a user who streams music extensively is not inherently suspicious—some people naturally listen to music for most of their waking hours. Thus, instead of targeting individual active users, we should focus on identifying artists who may be used as vehicles for fraud by an adversary.8
Definition 3.4 (Potentially Suspicious Profits). Given a set of artists U ⊆ C, their potentially suspicious profit (PSP) from GLOBALPROP is their maximum marginal profits from a set of users V , less the cost of creating these users:
PSP(U ) = max
V ⊆N
P
i∈N
P
j∈U wij
P
i∈N
P
j∈C wij
× αn
−
P
i∈N \V
P
j∈U wij
P
i∈N \V
P
j∈C wij
× α(n − |V |) − |V |
!
.
Thus, our objective of identifying suspicious artists can be framed as finding a set of artists U ⊆ C such that PSP(U ) is high. However, the choice of |U | is crucial. If we restrict U to a single artist (|U | = 1), an adversary can easily evade detection by distributing fake users’ listening activity across multiple fraudulent artists. On the other hand, if we impose no constraint on |U |, we risk identifying a set of legitimate artists with dedicated fan bases. Also, while an adversary can crea-
te multiple fake artists, doing so incurs administrative overhead—such as setting up identification and banking details—which makes the creation of an arbitrarily large number of fake artists impractical in many circumstances.
Therefore, we define the problem of finding suspicious artists as finding the set U ⊆ C of size at most k artists that maximize PSP(U ). However, we show that this problem is computationally intractable, with the following result.
Theorem 3.5. Given an instance I = (N, C, w) and parameters k ≤ |C| and γ > 0, it is NP-hard to determine if there exists a U ⊆ C such that |U | ≤ k and PSP(U ) ≥ γ.
3.2. User-Additive Rules
At the opposite extreme from GLOBALPROP are rules where each user’s subscription fee is distributed solely based on their individual engagement profile. Under these rules, an artist’s total payoff is simply the sum of the amounts they would receive from each user in a single-user setting. We
8Our objective is to identify fraudulent artists as a means of detecting suspicious interactions between fake users and fake artists.
6

Fraud-Proof Revenue Division on Subscription Platforms
refer to this class of rules as user-additive.9
Definition 3.6 (User-additive rules). For each instance I = (N, C, w), define instances Ii = ({i}, C, wi) for each i ∈ N . Then, a rule φ is user-additive if for all instances I and artists j ∈ C, φI(j) = P
i∈N φIi (j).
We then show the following.
Proposition 3.7. A user-additive rule is fraud-proof and bribery-proof.
We focus on two user-additive rules that have been discussed in the existing literature: USERPROP and USEREQ. Under USERPROP, an α fraction of each user’s subscription fee is allocated to the artists proportional to the user’s engagement. For example, if a user listens to three artists—the first artist 50% of the time and the other two artists 25% each—then under USERPROP, the artists will receive payments of α/2, α/4, and α/4 from this user, respectively. The total payment of an artist is the sum-
 of such payments from each user.
USERPROP
Given an instance I = (N, C, w) and for each j ∈ C, the payment rule USERPROP is defined as follows.
φI (j) =
X
i∈N
wij
P
j′∈C wij′
× α.
We show that it satisfies all of the manipulation-resistant axioms (excluding strong Sybil-proofness) and engagement monotonicity, but fails Pigou-Dalton consistency.
Theorem 3.8. USERPROP is fraud-proof, bribery-proof, and Sybil-proof, but fails strong Sybil-proofness.
Theorem 3.9. USERPROP satisfies no free-ridership and engagement monotonicity, but fails Pigou-Dalton consistency.
Next, we consider the USEREQ rule, first studied in Berganti ̃nos & Moreno-Ternero (2025). They established the equivalence between USEREQ and the Shapley value, a fundamental measure in cooperative game theory that ensures a fair distribution of payoffs among players based on their contributions (Shapley, 1953).
Now, given an instance I = (N, C, w), for each i ∈ N and j ∈ C, let 1wij>0 be the indicator function that returns the value 1 if wij > 0, and 0 otherwise. In USEREQ, an α fraction of each user’s subscription fee is distributed equally among the artists with strictly positive engagement from the user. For example, if a user listens to only three artists80%, 19%, and 1% of the time, respectively—and does not listen to other artists, then these three artists each receives a payment of α/3 from this u-
ser, and the remaining artists do
9This term is distinct from user-centric, which is sometimes used in the literature to refer to USERPROP.
not receive any payment from the user. The total payment to an artist is the sum of such payments from each user.
USEREQ
Given an instance I = (N, C, w) and for each j ∈ C, the payment rule USEREQ is defined as follows.
φI (j) =
X
i∈N
1wij >0
|{j′ ∈ C : wij′ > 0}| × α.
USEREQ has similar guarantees as USERPROP, with the difference being that it fails Sybil-proofness, but satisfies Pigou-Dalton consistency.
Theorem 3.10. USEREQ is fraud-proof and bribery-proof, but fails Sybil-proofness.
Theorem 3.11. USEREQ satisfies no free-ridership, engagement monotonicity, and Pigou-Dalton consistency.
A Generalization of Portioning
We also make an important observation: our model can be viewed as a generalization of portioning under cardinal preferences (Elkind et al., 2023; Freeman et al., 2021),10 where each agent subjectively divides a contiguous resource (such as time or money) among a given set of candidates, and the goal is to aggregate these preferences to obtain one (fair) division. This is similar to our model if we let agents be users, candidates be artists, and preferences be interactions.11 However, portioning ru-
les require that the engagement of each user is normalized (i.e., sums to 1). We can then generate rules for our setting by normalizing each wi and applying a portioning rule to the instance. There are eight portioning rules cataloged in Elkind et al. (2023). One of them is equivalent to USERPROP, but the other seven fail fraud-proofness, bribery-proofness and Sybil-proofness. We present these rules and prove the results in Section C.
4. SCALEDUSERPROP: A Fairer Mechanism
The three rules we considered above are conceptually distinct: GLOBALPROP allows dedicated fans to exert a disproportionate influence on revenue distribution, but this also creates opportunities for fraud by fabricating users who may appear as dedicated fans. In contrast, USERPROP is often viewed by policymakers as a more desirable alternative to GLOBALPROP. However, USERPROP is not necessarily fairer (Lei, 2023), and user-additive rules in general may fail to meaningfully reward artists for incre-
asing the engagement within their existing fanbase.
10We refer the reader to a recent survey by Suksompong & Teh (2026) on works in this area. 11Note that this requires imposing rational number constraints on preferences, as assumed in the preliminaries.
7

Fraud-Proof Revenue Division on Subscription Platforms
To better understand differences in payment fairness, it is useful to examine the pay-per-stream metric (Dimont, 2018; Meyn et al., 2023). Given an instance I and an artist j, let the artist pay-per-stream (PPS) for rule φ be PPS(φ, I, j) = φI(j)
P
i∈N wij . Using this, we define the maxi
mum envy (ME) of I as ME(φ, I) = maxj∈C PPS(φ,I,j)
minj′∈C PPS(φ,I,j′) .
This ratio quantifies the disparity in PPS between the highest-paid and lowest-paid artists, providing a measure of the maximum envy in revenue distribution.
Then, we obtain the following result, which essentially implies that any fraud-proof or bribery-proof rule has the potential to be extremely unfair (unbounded maximum envy).
Proposition 4.1. For all α ∈ (0, 1] and rules φ, if there exists k ∈ R such that for all instances I, ME(φ, I) ≤ k, then φ fails fraud-proofness and bribery-proofness.
However, not all such rules may perform equally bad on this front—we will analyze this later through experiments (in Section 5), with a slight variant of the ME definition.
Given this, we attempt to achieve a compromise by designing a rule that has the same axiomatic guarantees as USERPROP, while offering empirically (in Section 5) stronger fairness guarantees than USERPROP and USEREQ. SCALEDUSERPROP works by having the platform take a disproportionate amount of commission from low-engagement users. The platform then runs USERPROP on the remaining subscription fees. It is defined as follows.
SCALEDUSERPROP
Given an instance I = (N, C, w), let γ be a constant
such that P
i∈N min γ · P
j∈C wij, 1 = αn. Then,
for each j ∈ C, the payment rule SCALEDUSERPROP is defined as follows.
φI (j) =
X
i∈N

min(γ ·
X
j ′ ∈C
wij′ , 1) × wij
P
j′∈C wij′

.
Note that when α = 1, we have min(γ · P
j′∈C wij′ , 1) = 1
for all i ∈ N , making SCALEDUSERPROP equivalent to USERPROP. For α < 1, if no user’s engagement exceeds 1
α
times the average engagement, then SCALEDUSERPROP is equivalent to GLOBALPROP, which we show below.
Theorem 4.2. Fix an instance I = (N, C, w). If
P
j∈C wij ≤ 1
nα
P
i∈N
P
j∈C wij for all i ∈ N , then SCALEDUSERPROP is equivalent to GLOBALPROP.
Thus, SCALEDUSERPROP can be viewed as a variant of GLOBALPROP that “limits the influence” of users who have engagement significantly above average. We then show that SCALEDUSERPROP has exactly the same axiomatic guarantees as USERPROP, with the following results.
Theorem 4.3. SCALEDUSERPROP satisfies fraudproofness, bribery-proofness, and Sybil-proofness, but fails strong Sybil-proofness.
Theorem 4.4. SCALEDUSERPROP satisfies no freeridership, engagement monotonicity, but fails Pigou-Dalton consistency.
5. Experiments
To complement our theoretical analysis, we conduct experiments to evaluate our fraud-proof (and briberyproof) mechanisms—USERPROP, USEREQ, SCALEDUSERPROP—using both synthetic and real-world datasets. Motivated by our definition of maximum envy in Theorem 4.1, for each rule, we analyze the top and bottom few artists based on their pay-per-stream (PPS) relative to GLOBALPROP’s PPS, as the revenue share (α) varies.12 Notably, only SCALEDUSERPROP is influenced non-linearly by changes in α (the other r-
ules scale linearly with α). Consequently, the pay-per-stream values for the other three rules remain constant across different values of α.
Synthetic datasets We generate synthetic problem instances involving 10, 000 users and 1, 000 artists. For each user, we first determine the number of artists they interact with by drawing a value uniformly at random from the range [1, 100]. Based on this value, we randomly select the corresponding number of artists from the pool of 1, 000. For each chosen artist, the number of times the user streams their music is sampled from a Poisson distribution with λ = 1. We repeat the experiments 100 times-
.
Real-world datasets We utilize data from the Music Listening Histories Dataset (Vigliensoni & Fujinaga, 2017), that contains the listening history of approximately 583, 000 users, 439, 000 artists, and a cumulative total of 27 billion listening events (i.e., user-artist interactions).13
Discussion On real-world data, SCALEDUSERPROP emerges as fairest mechanism among those considered, especially for values of α not close to 1; whereas USEREQ, which treats avid and casual listeners equally, is the least fair. SCALEDUSERPROP significantly reduces the top 100 artists’ PPS even for α > 0.9, but it only gradually increases the bottom 100 PPS as α decreases. To understand
12Note that in Theorem 4.1, maximum envy is defined with respect to the single top and bottom user, which differs from the metric used in this section. In our experiments, we chose to report metrics for the top and bottom few users rather than just the single best and worst, as we believe this provides a more robust assessment—mitigating the impact of potential outliers that may disproportionately affect the extremes. However, our definition and theoretical results would easily extend to top and b-
ottom few users, making it consistent with that used for the experiments. 13Our code is accessible at https://github.com/ nicteh/Fraud-Proof-Revenue-Division.
8

Fraud-Proof Revenue Division on Subscription Platforms
(a) Real data, top 100 artists’ PPS relative to GP
(b) Real data, bottom 100 artists’ PPS relative to GP
(c) Synthetic data, top 10 artists’ PPS relative to GP
(d) Synthetic data, bottom 10 artists’ PPS relative to GP
Figure 1. Overview of graphs from real and synthetic data. (a) and (b) show results for real data, while (c) and (d) show results for synthetic data. GP is short for GLOBALPROP.
this outcome, we first observe that artists with high PPS typically attract infrequent listeners, while those with low PPS tend to have a more dedicated, avid fanbase.
We also observe that under SCALEDUSERPROP, each stream from a user contributes min(γ, 1
P
j∈C wij ), whereas
under USERPROP, it contributes α
P
j∈C wij . For avid lis
teners with high P
j∈C wij , a stream under SCALEDUSER
PROP is worth 1
α times its value under USERPROP. Conversely, for infrequent listeners, SCALEDUSERPROP caps a stream’s worth at γ, while under USERPROP, it can reach up to α in the extreme case where P
j∈C wij = 1.
On synthetic data, SCALEDUSERPROP remains the fairest mechanism as α decreases. However, in contrast to the real-world data, we observe two key differences: (1) the top and bottom PPS are much closer in magnitude, and (2) USERPROP and USEREQ perform nearly identically. These differences can be partly attributed to the way synthetic instances are generated. While our model accounts for users with varying streaming frequencies, it does not capture the real-world tendency of certain artists to attrac-
t predominantly avid or infrequent listeners.
6. Conclusion
In this work, we formalized three types of manipulation by fraudulent agents in subscription-based platforms, motivated by a real-world multi-million dollar fraud case. We show that the axioms we introduced are not equivalent and study
the rules that satisfy them. GLOBALPROP, which is used by streaming platforms, does not satisfy fraud-proofness or bribery-proofness. However, we show that USERPROP and USEREQ do. We introduce a novel rule, SCALEDUSERPROP. It is as strong in resisting manipulation as USERPROP and incentivizes artists to increase their overall engagement similarly to GLOBALPROP. Our empirical study on real and synthetic data of fraud-proof rules support SCALEDUSERPROP is a fairer fraud-proof alternative to other ru-
les.
A natural follow-up direction would be to study a freemium model, by incorporating users who have to watch advertisements to gain access to content on the platform, and have been adopted by streaming platforms such as YouTube and Spotify, among others. Revenue division in this context would have different considerations and call for more appropriate axioms to be defined. Machine learning approaches have been adopted here as well (Goli et al., 2024); it would be interesting to explore these questio-
ns from a mechanism design perspective.
References
Alaei, S., Makhdoumi, A., Malekian, A., and Pekeˇc, S. Revenue-sharing allocation strategies for two-sided media platforms: Pro-rata vs. user-centric. Management Science, 68(12):8699–8721, 2022.
Berganti ̃nos, G. and Moreno-Ternero, J. D. The shapley index for music streaming platforms. Information Economics and Policy, 71:101142, 2025.
Berganti ̃nos, G. and Moreno-Ternero, J. D. The axiomatic approach to the problem of sharing the revenue from museum passes. Games and Economic Behavior, 89: 78–92, 2015.
Berganti ̃nos, G. and Moreno-Ternero, J. D. A new rule for the problem of sharing the revenue from museum passes. Operations Research Letters, 44(2):208–211, 2016.
Bergantin ̃os, G. and Moreno-Ternero, J. D. Revenue sharing at music streaming platforms. Management Science, 71 (10):8319–8335, 2025.
Burton, C. S. ‘Playola’ and fraud on digital music platforms: Why legislative action is required to save the music streaming market. Journal of Business & Technology Law, 16(2):387–435, 2021.
B ́eal, S. and Solal, P. R`egles d’allocation pour les programmes de pass culturel. Revue Economique, 61:10991109, 2010.
Casas-M ́endez, B., Fragnelli, V., and Garc ́ıa-Jurado, I. Weighted bankruptcy rules and the museum pass problem. European Journal of Operational Research, 215(1): 161–168, 2011.
9

Fraud-Proof Revenue Division on Subscription Platforms
Casas-M ́endez, B., Fragnelli, V., and Garc`ıa-Jurado, I. A survey of allocation rules for the museum pass problem. Journal of Cultural Economics, 38:191–205, 2014.
Chlamt ́aˇc, E., Dinitz, M., and Makarychev, Y. Minimizing the union: Tight approximations for small set bipartite vertex expansion. In Proceedings of the 28th Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pp. 881–899, 2017.
Dalton, H. The measurement of the inequality of incomes. The Economic Journal, 30(119):348–361, 1920.
Deng, J. and Ma, J. Computational copyright: Towards a royalty model for AI music generation platforms. In Proceedings of the ICLR 2024 Workshop on Navigating and Addressing Data Problems for Foundation Models (DPFM), 2024.
Dimont, J. Royalty inequity: Why music streaming services should switch to a per-subscriber model. Hastings Law Journal, 69(2):675–700, 2018.
Drott, E. Fake streams, listening bots, and click farms: Counterfeiting attention in the streaming music economy. American Music, 38(2):153–175, 2020.
Eilat, I. and Rosenfeld, N. Performative recommendation: Diversifying content via strategic incentives. In Proceedings of the 40th International Conference on Machine Learning (ICML), pp. 9082–9103, 2023.
Elkind, E., Suksompong, W., and Teh, N. Settling the score: Portioning with cardinal preferences. In Proceedings of the 26th European Conference in Artificial Intelligence (ECAI), pp. 621–628, 2023.
Esmaeilzadeh, S., Salajegheh, N., Ziai, A., and Boote, J. Abuse and fraud detection in streaming services using heuristic-aware machine learning. arXiv preprint 2203.02124, 2022.
Est ́evez-Fern ́andez, A., Borm, P., and Hamers, H. A note on passepartout problems. International Game Theory Review, 14(2):1250013, 2012.
Freeman, R., Pennock, D., Peters, D., and Wortman Vaughan, J. Truthful aggregation of budget proposals. Journal of Economic Theory, 193:105234, 2021.
Ginsburgh, V. and Zang, I. Sharing the income of a museum pass program. Museum Management and Curatorship, 19(4):371–383, 2001.
Ginsburgh, V. and Zang, I. The museum pass game and its value. Games and Economic Behavior, 43(2):322–325, 2003.
Goli, A., Reiley, D. H., and Zhang, H. Personalizing ad load to optimize subscription and ad revenues: Product strategies constructed from experiments on pandora. Marketing Science, 44(2):327–352, 2024.
Golrezaei, N., Javanmard, A., and Mirrokni, V. Dynamic incentive-aware learning: Robust pricing in contextual auctions. Operations Research, 69(1):297–314, 2021a.
Golrezaei, N., Manshadi, V., Schneider, J., and Sekar, S. Learning product rankings robust to fake users. In Proceedings of the 22nd ACM Conference on Economics and Computation (EC), pp. 560–561, 2021b.
He, S., Hollenbeck, B., and Proserpio, D. The market for fake reviews. Marketing Science, 41(5):896–921, 2022.
International Federation of the Phonographic Industry. Global music report, 2024. URL https:// www.ifpi.org/wp-content/uploads/2024/ 04/GMR 2024 State of the Industry.pdf.
Josan, H. H. S. AI and deepfake voice cloning: Innovation, copyright and artists’ rights. Digital Policy Hub Working Paper, 2024.
Kanoria, Y. and Nazerzadeh, H. Dynamic reserve prices for repeated auctions: Learning from bids. In Proceedings of the 10th International Conference on Web and Internet Economics (WINE), pp. 232, 2014.
Lei, X. Pro-rata vs user-centric in the music streaming industry. Economics Letters, 226:111111, 2023.
Li, Z., Wang, H., Zhang, P., Hui, P., Huang, J., Liao, J., Zhang, J., and Bu, J. Live-streaming fraud detection: A heterogeneous graph neural network approach. In Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), pp. 3670–3678, 2021.
Mayzlin, D., Dover, Y., and Chevalier, J. Promotional reviews: An empirical investigation of online review manipulation. American Economic Review, 104(8):2421–2455, 2014.
Meyn, J., Kandziora, M., Albers, S., and Clement, M. Consequences of platforms’ remuneration models for digital content: initial evidence and a research agenda for streaming services. Journal of the Academy of Marketing Science, 51:114–131, 2023.
Mollao ̆glu, A., Baltao ̆glu, G., C ̧ akrr, E., and Aktas ̧, M. S. Fraud detection on streaming customer behavior data with unsupervised learning methods. In Proceedings of the 2021 International Conference on Electrical, Communication, and Computer Engineering (ICECCE), pp. 1–6, 2021.
10

Fraud-Proof Revenue Division on Subscription Platforms
Moreau, F., Wikstro ̈m, P., Haampland, O., and Johannessen, R. Alternative payment models in the music streaming market: A comparative approach based on stream-level data. Information Economics and Policy, 68:101103, 2024.
Moulin, H. Fair Division and Collective Welfare. MIT Press, 2003.
Muikku, J. Pro rata and user centric distribution models: A comparative study. Digital Media Finland, 2017.
Music Fights Fraud Alliance. Music fights fraud alliance, 2025. URL https:// www.musicfightsfraud.com/.
Pigou, A. C. The Economics of Welfare. Macmillan and Co., London, 1920.
Shapley, L. S. A value for n-person games. In Kuhn, H. and Tucker, A. (eds.), Contributions to the Theory of Games, Volume II, pp. 307–317. Princeton University Press, 1953.
Snickars, P. and Ma ̈hler, R. Spotibot – turing testing spotify. Digital Humanities Quarterly, 12(1), 2018.
Spotify. Royalties, 2025. URL https: //support.spotify.com/us/artists/ article/royalties/.
Suksompong, W. and Teh, N. Voting in divisible settings: A survey. In Proceedings of the 40th AAAI Conference on Artificial Intelligence (AAAI), 2026.
United States Attorney’s Office, S. D. o. N. Y. North carolina musician charged with music streaming fraud aided by artificial intelligence, 2024. URL https://www.justice.gov/usaosdny/pr/north-carolina-musiciancharged-music-streaming-fraud-aidedartificial-intelligence.
Vigliensoni, G. and Fujinaga, I. The music listening histories dataset. In Proceedings of the 18th International Society for Music Information Retrieval Conference (ISMIR), pp. 96–102, 2017.
Wang, Y. A museum cost sharing problem. American Journal of Operations Research, 1(2):51–56, 2011.
Yao, F., Li, C., Nekipelov, D., Wang, H., and Xu, H. How bad is top-k recommendation under competing content creators? In Proceedings of the 40th International Conference on Machine Learning (ICML), pp. 39674–39701, 2023.
11

Fraud-Proof Revenue Division on Subscription Platforms
Appendix
A. Omitted Proofs from Section 2
A.1. Proof of Theorem 2.5
If φ is fraud-proof then by definition it is single-user fraud-proof. Now, suppose rule φ is single-user fraud-proof. Consider instances I = (N, C, w) and I′ = (N ∪ Nb, C, w′) with N ∩ Nb = ∅ and let Cb ⊆ C. Enumerate Nb = {nb1, . . . , nbk}, then for j ≤ k we construct instances Ij = (N ∪ {nb1, . . . , nbj}, C, w | wbn1 , . . . , wnbj ) where we adjoin engagement vectors w
bn1 , . . . , wbnj to w. We have I0 = I and Ink = I′.
By single user fraud-proofness, for all j: φIj+1 (Cb) − φIj (Cb) ≤ 1. So, Pk−1
j=0 φIj+1 (Cb) − φIj (Cb) ≤ k, but as a telescoping
sum, φIk (Cb) − φI0 (Cb) = φI′ (Cb) − φI (Cb) ≤ k. So, φ is fraud-proof.
A.2. Proof of Theorem 2.7
If a rule is bribery-proof it is also by definition single-user bribery proof. Suppose a rule is not bribery-proof. Then, there are instances I, I′ with wi ̸= w′
i precisely for users {1, . . . , k} and C+ ⊆ C with φI′ (C+) − φI(C+) > k. Now, consider
instances I0 = I, I1, . . . , Ik = I′ with the profile of user i in instance Ij being w′
i if i ≤ j and wi otherwise. Then
Pk−1
j=0 φIj+1 (C+) − φIj (C+) = φI′ (C+) − φI (C+) > k and so in particular at least one term in the sum is greater than 1. So the rule is not single-user bribery-proof.
A.3. Proof of Theorem 2.8
(i) Suppose rule φ is not bribery-proof and consider a pair of instances I and I′ such that bribery-proofness is violated. Let C+ the set of artists with a higher payoff in I′, namely C+ = {c | φI′ (c) > φI(c)}. We similarly define C= = {c | φI′ (c) = φI (c)} and C− = {c | φI′ (c) < φI (c)}. Since φ violates bribery-proofness on I and I′, φI′ (C+) − φI (C+) > 1.
Now, consider an instance with one less user: F . As α = 1, φF (C) = φI(C) − 1. By fraud-proofness, φF (C+ ∪ C=) ≥ φI′ (C+ ∪ C=) − 1 and φF (C−) ≥ φI (C−) − 1. So, adding up the inequalities, φF (C) ≥ φI′ (C+ ∪ C=) + φI (C−) − 2. As this is a bribery-proofness violation, φI′ (C+) > φI(C+) + 1, and by definition φI(C=) = φI′ (C=). So, φF (C) > φI(C) − 1, but φF (C) = φI(C) − 1, giving rise to a contradiction.
(ii) We define a rule that is bribery-proof but not fraud-proof. This rule is anonymous, neutral and satisfies no free-ridership. To do so, we will modify the rule USERPROP which is defined in Section 3.2. We will set a threshold value of β = 2 nα
20 .
Consider an instance I = (N, {0, 1}, w) with 2 artists. For each artist j ∈ {0, 1}, we compute pj = P
i∈N
wij
wi,j +wi,1−j α.
If min(p0, p1) ≥ 2 nα
20 , for j ∈ {0, 1}, φI(j) = pj. Otherwise, let j the artist with pj < p1−j. Let the number of users that have positive engagement with artist j be aj. Then, φ(j) = min(aj, β) and φ(1 − j) = nα − min(aj, β).
This rule is bribery-proof. Suppose we have a bribery-proofness violation in instances I = (N, {0, 1}, w), I′ = (N, {0, 1}, w′). Let k the unique user that modifies her engagement profile and φI′ (j) > φI(j) + 1. We define p′
j
for instance I′ analogously with pj, p′
j =P
i∈N
w′
ij w′
i,j +w′
i,1−j
α. Then, since wij = w′
ij for all i ̸= k, we have that
p′
j − pj = w′
kj w′
k,j +w′
k,1−j
α − wkj
wk,j+wk,1−j α ≤ α ≤ 1. Also, notice that β is equal in both instances as n is unchanged.
We proceed by a case analysis. If φI(j) = pj, then φI′ (j) ≤ max(pj, p′
j) ≤ pj + 1. So, there can be no bribery-proofness violation if min(p0, p1) ≥ β. Suppose instead that for artist j, pj < β. Notice that the number of users engaging with artist j, aj, is greater than pj. So φI(j) ≥ pj. Also, note that since exactly one user modifies her engagement between I and I′, a′
j ≤ aj + 1. If φI (j) = aj, then φI′ (j) ≤ max(p′
j , a′
j). But we have that p′
j ≤ pj + 1 ≤ aj + 1 and a′
j ≤ aj + 1. So,
φI′ (j) ≤ aj + 1 = φI (j) + 1. Suppose instead that φI (j) = β. Then, φI′ (j) > φI (j) implies that φI′ (j) = p′
j. But
pj ≤ β and p′
j ≤ pj + 1, so φI′ (j) ≤ φI(j) + 1. This concludes the proof.
However, this rule is not fraud-proof. For any α, take n = 40
α − 1 . Then, β = 2 nα
20 = 2. Construct an instance with n users and where each user’s engagement is wi = (0.01, 0.99). Then, p0 = 0.01 · nα ≤ β = 2. So φI(j) = 2. Suppose we add an extra user with profile (0.01, 0.99). Then β = 4 as the number of users is now greater than 40
a . As a0 = n > 4,
12

Fraud-Proof Revenue Division on Subscription Platforms
φI′ (j) = 4 > φI(j) + 1 = 3. This constitutes a fraud-proofness violation.
This rule is anonymous, neutral and satisfies no-freeridership. Anonymity and neutrality should be immediate. In the case that no user engages with an artist j then pj = aj = 0 and so φI(j) = 0, satisfying no-freeridership.
(iii) Suppose α < 1, then we construct a rule φ that is fraud-proof but not bribery-proof. For ease of presentation, we add a surrogate rule ψ, that is then modified to make φ satisfy no-freeridership. Consider an instance with two candidates. Let n the number of users and ε a small positive constant, such that 0 < ε < 1 − α. Let k the smallest integer such that kα > 2(1 + ε). For n ≤ k, ψ(j) = nα
2 . For n > k, the rule distributes the payoff based on the number of users
approving an artist. Let aj the number of users i with wij > 0. If a0 = a1, then ψ(0) = ψ(1) = nα
2 . For aj > a1−j, then
ψ(j) = nα+1+ε
2 and ψ(1 − j) = nα+1−ε
2.
We construct φ using ψ. If for j ∈ {0, 1}, ψI(j) ≤ aj then φI(j) = ψI(j). If aj < ψI(j) for some j then φI(j) = aj and φI(1 − j) = nα − aj. Notice that since we disallow users with (0, 0) engagement, a0 + a1 ≥ n > nα. As ψI(0) + ψI(1) = nα, aj < ψI(j) implies that ψI(1 − j) < a1−j, so φ is well defined. Equationally, φI(j) = max(min(ψI (j), aj), nα − a1−j)
Now, to show that the rule is fraud-proof. Suppose there was a fraud-proofness violation with I = (N, {0, 1}, w), I′ = (N ∪ {k}, {0, 1}, w′) with wi = w′
i for all i < k. Let j be the artist benefiting from fraud so φI′ (j) > φI(j) + 1.
First we prove that ψI′ (j) ≤ ψI(j) + 1. If aj < a1−j in I then we cannot have a′
j > a1−j in I′ as we add exactly one
user. So, if aj < a1−j in I, then ψI′ (j) ≤ (n+1)α
2 . So, ψI′ (j) − ψI (j) ≤ (n+1)a
2 − nα−1−ε
2 = α+1+ε
2 < 1 by our choice
of ε. If aj ≥ a1−j then ψI (j) ≥ nα
2 and ψI′ (j) ≤ nα+1+ε
2 and again ψI′ (j) ≤ ψI (j) + 1.
Now, φI (j) = max(min(ψI (j), aj), nα − a1−j) and φI′ (j) = max(min(ψI′ (j), a′
j), (n + 1)α − a′
1−j). We have
proven that ψI′ (j) ≤ ψI(j) + 1. As we add one user, a′
j ≤ aj + 1. Finally, no agent is removed so a′
1−j ≥ a1−j , so
(n+1)α−a′
1−j ≤ nα−a1−j +1. So, φI′ (j) ≤ max(min(ψI (j)+1, aj +1), nα−a1−j +1) = max(min(ψI (j), aj), nα− a1−j) + 1 = φI(j) + 1 proving fraud-proofness.
However, the rule is not bribery-proof. For a concrete example, let α = 1
2, ε = 1
4 . Let I = ([5], {0, 1}, w) with
w1 = w2 = w3 = (1, 0) and w4 = w5 = (0, 1). Then, φI (1) = nα+1+ε
2 =5
8 . But, if we construct I′ by setting
w3 = (0, 1), then φI′ (1) = 15
8 . But, φI′ (1) − φI (1) = 10
8 > 1, which violates bribery-proofness.
A.4. User-addition monotonicity
As an additional tool, we consider the user-addition monotonicity property, which will be frequently used in proving several of our axioms. Intuitively, it states that adding a user should not decrease an artist’s payoff. This property is considerably strong and implies fraud-proofness and bribery-proofness. With user-addition monotonicity the axiom implications are captured by Figure 2.
Bribery-proofness Fraud-proofness
User-addition monotonicity
α=1
Figure 2. Relationship of axioms, arrows denote implications. The dashed arrow denotes conditional implication.
Definition A.1 (User-addition monotonicity). For an instance I and any engagement profile wn+1 consider instance In+1 constructed by adding a user with profile wn+1 to I. A rule φ satisfies user-addition monotonicity if for all I, wn+1 and In+1 for all artists c ∈ C, φI (c) ≤ φIn+1 (c).
Proposition A.2. If a rule is user-addition monotone, then it is both fraud-proof and bribery-proof.
Proof. Consider instances I and In+1 for some wn+1. A user adds α to the total payoff: φIn+1 (C) − φI(C) = α. So for Cb ⊆ C: φIn+1 (Cb) − φI (Cb) + φIn+1 (C \ Cb) − φI (C \ Cb) = α
13

Fraud-Proof Revenue Division on Subscription Platforms
But, by monotonicity, for S ⊆ C the marginal contribution of user n + 1 is non-negative: φIn+1 (S) − φI(S) ≥ 0. So, φIn+1 (Cb) − φI (Cb) ≤ α ≤ 1 and φ is fraud-proof.
Now to prove bribery-proofness. Consider an instance I = (N, C, w). We construct instance I−n = (N \ {n}, C, w−n) with user n removed. Take any instance I′ = (N, C, w′) with wi = w′
i for all i ̸= n. Then, for all Cb ⊆ C, φI−n (Cb) − φI(Cb) ≤ 0 by monotonicity. By fraud-proofness, φI′ (Cb) − φI−n (Cb) ≤ 1. Adding up, for all I and I′ with engagement differing for a single user φI′ (Cb) − φI(Cb) ≤ 1, proving bribery-proofness.
B. Omitted Proofs from Section 3
B.1. Proof of Theorem 3.1
We will prove each property separately.
GLOBALPROP is not fraud-proof. Consider an instance I = (N, {1, 2}, w) with |N | > 2
α + 1. Let wi = (1, 0) for all
i ∈ N , so that φI(2) = 0. Then, constructing an instance I′ by adding a single profile wn+1 = (0, n), would result in a payoff of φI′ (2) = n
2n (n + 1)α > 1 by assumption on n, contradicting fraud-proofness.
GLOBALPROP is not bribery-proof. Similarly, for an instance I = (N, {1, 2}, w) with |N | > 2
α + 1 and for each i,
wi = (1, 0) we have that φI(2) = 0. However, if we construct I′ by bribing user n to change their profile to w′n = (0, n),
φI′ (2) = n
2n nα > 1 by assumption.
B.2. Proof of Theorem 3.2
Suppose φ is strongly Sybil-proof and neutral.
Observe first, that if φ is strongly Sybil-proof, there exists a function f such that:
φI(c) = f


X
i∈N
wic,
X
i∈N
X
j∈C
wij , N


To see this, suppose there are instances I = (N, C, w) and I′ = (N, C′, w′) with P
i∈N wic = P
i∈N w′
ic and
P
i∈N
P
j∈C′ wij = P
i∈N
P
j∈C w′
ij. So, P
i∈N
P
j̸=c wij = P
i∈N
P
j̸=c w′
ij and the criteria for strong Sybil
proofness hold for C∗ = {c}. So, φI(C \ {c}) = φI′ (C′ \ {c}). Because the number of users is equal in I and I′, φI (C) = φI′ (C′) = |N |α. Hence,
φI(c) = φI(C) − φI(C \ {c})
= φI′ (C′) − φI′ (C′ \ {c})
= φI′ (c).
We now claim that f is a linear function of P
i∈N wic.14 To see this, observe that f P
i∈N wic, P
i∈N
P
j∈C wij , N =
P
i∈N wic × g P
i∈N
P
j∈C wij, N . Clearly, if P
i∈N wic = 0, then for all T and N , f (0, T, N ) = 0. For any instance
I = (N, C∗ ∪{c}, w) with c, d, e ∈/ C∗ and β ∈ (0, 1), we construct Iβ = (N, C∗ ∪{d, e}, w′). For j ∈/ {d, e}, w′
ij = wij .
We let w′
id = βwic and w′
ie = (1 − β)wic. So, strong Sybil-proofness applies for C∗ and so φI (c) = φIβ (d) + φIβ (e).
But the total engagement of the users and the number of users is equal in I and Iβ. So, f is linear on P
i∈N wij . Now,
suppose we fix P
i∈N
P
j∈C wij = T and N . By linearity, if P
i∈N wic = 0 then f (0, T, N ) = 0. Conversely, if all artists other than c receive 0 engagement from all users, user c will receive the entire payoff of nα: φI(c) = f (T, T, N ) = nα. This determines f uniquely:
f


X
i∈N
wic,
X
i∈N
X
j∈C
wij , N

=
P
i∈N wic
P
i∈N
P
j∈C wij
× nα.
14Here, we consider linearity as typically defined in linear algebra, and thus exclude affine functions.
14

Fraud-Proof Revenue Division on Subscription Platforms
Which is equivalent to GLOBALPROP.
B.3. Proof of Theorem 3.3
We will prove each property separately.
GLOBALPROP satisfies no free-ridership. Consider an instance I = (N, C, w). For every j ∈ C where P
i∈N wij = 0,
φI (j) =
P
i∈N wij
P
j ′ ∈C
P
i∈N wij′
× αn = 0,
since we assume P
j′∈C wij′ > 0 for all i ∈ N .
GLOBALPROP is engagement monotone. Consider any two instances I = (N, C, w) and I′ = (N, C, w′) whereby for some j∗ ∈ C, we have that (i) wij∗ ≤ w′
ij∗ for all i ∈ N , and (ii) wij ≥ w′
ij for all i ∈ N and j ∈ C \ {j∗}.
Now, since
X
i∈N
w′
ij∗ ≥
X
i∈N
wij∗ and
X
j ∈C \{j ∗ }
X
i∈N
wij ≥
X
j ∈C \{j ∗ }
X
i∈N
w′
ij ,
we get that
X
i∈N
w′
ij∗ ·
X
j ∈C \{j ∗ }
X
i∈N
wij ≥
X
i∈N
wij∗ ·
X
j ∈C \{j ∗ }
X
i∈N
w′
ij .
Adding P
i∈N w′
ij∗ · P
i∈N wij∗ to both sides of the equation, we can factorize the expressions on each side to obtain
X
i∈N
w′
ij∗ ·


X
j ∈C \{j ∗ }
X
i∈N
wij +
X
i∈N
wij∗

≥
X
i∈N
wij∗ ·


X
j ∈C \{j ∗ }
X
i∈N
w′
ij +
X
i∈N
w′
ij∗

.
Algebraic manipulation (note that by our model assumption, for each i ∈ N , P
j′∈C wij′ > 0 and P
j′∈C w′
ij′ > 0) gives us
P
i∈N wij∗
P
j ∈C \{j ∗ }
P
i∈N wij + P
i∈N wij∗
≤
P
i∈N w′
ij∗
P
j ∈C \{j ∗ }
P
i∈N w′
ij + P
i∈N w′
ij∗
,
which simplifies to
P
i∈N wij∗
P
j ′ ∈C
P
i∈N wij′
≤
P
i∈N w′
ij∗
P
j ′ ∈C
P
i∈N w′
ij′
.
Consequently, we have that
φI (j∗) =
P
i∈N wij∗
P
j ′ ∈C
P
i∈N wij′
× αn ≤
P
i∈N w′
ij∗
P
j ′ ∈C
P
i∈N w′
ij′
× αn = φI′ (j∗).
GLOBALPROP is Pigou-Dalton consistent. Consider any two instances I = (N, C, w) and I′ = (N, C, w′) where there exists some i, i′ ∈ N and j ∈ C such that
(i) w′
ij = wij − δ (where δ > 0 and wij − δ > 0);
(ii) w′
i′j = wi′j + δ and wi′j ≤ wij ; and
(iii) wkj′ = w′
kj′ for all k ∈ N and j′ ∈ C \ {j}, and wkj = w′
kj for all k ∈ N \ {i, i′}.
15

Fraud-Proof Revenue Division on Subscription Platforms
Then, we get that
φI (j) =
P
k∈N wkj
P
j ′ ∈C
P
k∈N wkj′
× αn
= wij + wi′j + P
k∈N \{i,i′} wkj
wij + wi′j + P
j ′ ∈C
P
k∈N wkj′ − wij − wi′j
× αn
= w′
ij + δ + w′
i′j − δ + P
k∈N \{i,i′} w′
kj
w′
ij + δ + w′
i′j − δ + P
j ′ ∈C
P
k∈N w′
kj′ − w′
ij − δ − w′
i′j + δ
× αn (using (i), (ii), and (iii))
=
P
k∈N w′
kj
P
j ′ ∈C
P
k∈N w′
kj′
× αn
= φI′ (j),
as desired.
B.4. Proof of Theorem 3.5
We reduce from the Small Set Bipartite Vertex Expansion (SSBVE) problem. The SSBVE problem is known to be NPcomplete and cannot be approximated better than O(|V |1/4), where V is the set of vertices, under plausible complexity conjectures (Chlamta ́cˇ et al., 2017). We first define the neighborhood of a set of vertices in a graph and then formally define the decision variant of SSBVE.
Definition B.1 (Neighborhood). For a graph G = (V, E) and a subset of vertices S ⊆ V , the neighborhood of S is defined as N (S) = {v | ∃(u, v) ∈ E ∧ u ∈ S}. Slightly overloading notation, let N (v) = N ({v}) for v ∈ V .
Definition B.2 (Small Set Bipartite Vertex Expansion (SSBVE)). Given a bipartite graph (U, V, E) and integers l ≤ |U | and δ ≤ |V |, is there an S ⊆ U with |S| ≥ l and |N (S)| ≤ δ?
We are given an arbitrary instance of SSBVE: (U, V, E, l, δ). Let U = {u1, . . . , u|U|) and V = {v1, . . . v|V |}. Let d = maxu∈U |N (u)| be the maximum number of neighbors, i.e., degree, of any vertex in U .
For our reduction, we will construct an instance I = (N, C, w) with |N | = t + |U | users and |C| = t + |V | + 1 artists, where the value of t is specified later, and with w defined as follows
wij =

   
   
αd, if i ∈ [t] and j = i,
1, if i − t ∈ [|U |], j − t ∈ [|V |] and (ui−t, vj−t) ∈ E,
d + 1 − |N (ui−t)|, if i − t ∈ [|U |] and j = t + |V | + 1,
0, otherwise.
Intuitively, the first t users and t artists are dummies, where user i listens to only artist j = i, and does so αd times,15 but does not listen to any other artists. The next |U | users and the next |V | artists correspond to the nodes in U and V , respectively. The final artist, artist t + |V | + 1, ensures that the total listening activity of each user i ∈ N \ [t] is d + 1, i.e., for all i ∈ [t + 1, . . . , t + |U |], P
j∈C wij = d + 1.
Note that each user streams at least αd times, i.e., ∀i ∈ N, P
j∈C wij ≥ αd. Thus, the pay-per-stream (PPS) of
GLOBALPROP for the instance will be PPS(I) ≤ α
αd = 1
d . Note that the pay-per-stream remains bounded above by 1
d even if we remove some users from instance I as we maintain the property that each user streams at least αd times.
Next, we show that for all ε > 0, as long as t ≥ (d+1)|U|
αdε , the pay-per-stream of I is at least 1
d − ε.
Lemma B.3. If t ≥ (d+1)|U|
αdε , then PPS(I) ≥ 1
d − ε.
15In this proof, we allow the wij values to be non-integers. As long as these are rational numbers, e.g., if α is a rational number, which is a reasonable assumption in practice, we could scale the weights to make everything integral.
16

Fraud-Proof Revenue Division on Subscription Platforms
Proof. The pay-per-stream in I is PPS(I) = α(t+|U|)
P
i∈N
P
j∈C wij = α(t+|U |)
tαd+|U|(d+1) . Thus,
1
d − PPS(I) = 1
d − α(t + |U |)
tαd + |U |(d + 1)
= |U |(d + 1)d − α|U |d
tαd2 + d(d + 1)|U |
< |U |(d + 1)
tαd , as α, d, |U | are all positive.
If t ≥ (d+1)|U|
αdε , then 1
d − PPS(I) < ε, and thus PPS(I) ≥ 1
d − ε, as required.
We note that if ε < 1
d|U|(d(δ+1)+1) , then l−1
d =l
d−1
d<l
d − ε|U |(d(δ + 1) + 1). Furthermore, at this value of ε, as d ≤ |V |
and δ ≤ |V |, we have t = O(d2δ|U |2) = (|V |3|U |2), and this reduction can be done in polynomial time.
We now prove that there is a C′ ⊆ C such that |C′| ≤ k = δ + 1 and PSP(C′) ≥ γ = l−1
d if and only if there is an S ⊆ U with |S| ≥ l and |N (S)| ≤ δ.
Let C′ ⊆ C be the subset of artists that maximizes PSP(C′) among all subsets of size at most δ + 1, i.e., C′ = arg maxCb∈C,|Cb|≤δ+1 PSP(Cb). Further, PSP(C′) is maximized using some subset of users as defined in Theorem 3.4; let N ′ ⊆ N be the smallest among those subsets, i.e.,
N = arg max
Nb ⊆N
P
i∈N
P
j∈C′ wij
P
i∈N
P
j∈C wij
α(t + |U |) −
P
i∈N \{Nb}
P
j∈C′ wij
P
i∈N \{Nb}
P
j∈C wij
α(t + |U | − |Nb|) − |Nb|
!
,
N ′ = arg min
Nb ∈N
|
Nb |.
Next, we show that N ′ does not contain any of the first t users.
Lemma B.4. [t] ∩ N ′ = ∅.
Proof. For the purpose of contradiction, let [t] ∩ N ′ ̸= ∅. Let us pick an i′ ∈ [t] ∩ N ′. Consider the three instances I1, I2, and I3 defined as follows:
• I1 removes all users in N ′ from I.
• I2 removes all users in N ′ \ {i′} from I.
• I3 is constructed as follows: In the instance I2, for some j ∈ C′, increase wi′j until P
j∈C wi′j =
P
i∈N \{N ′ }
P
j∈C wij′ |N |−|N ′|
(note that P
j∈C wi′j was originally αd because i′ ∈ [t], which is the minimum possible total engagement for any user, so we are in fact increasing wij′ ).
Notice that I1, I2, and I3 differ only with respect to user i′, where I1 does not contain i′, I2 contains i′ with its original engagement vector, while I3 contains i′ with an increased engagement for artist j ∈ C′ to ensure that the total engagement of user i′, and therefore, the average total engagement per user of I3 matches that of I1. As the engagement of i′ is exactly equal to the average engagement of users in I3 and I1, so i′ controls exactly 1
|N|−|N′|+1 fraction of the GLOBALPROP allocation of I3. Therefore,
φI3 (C′) − φI1 (C′) ≤ 1
|N | − |N ′| + 1 α(|N | − |N ′| + 1) ≤ α.
Furthermore, as GLOBALPROP is engagement monotone (Theorem 3.3), we have φI3 (C′) ≥ φI2 (C′). So,
φI2 (C′) − φI1 (C′) ≤ φI3 (C′) − φI1 (C′) ≤ α < 1.
As the difference in the total payment to the artists in C′ from instances I1 and I2 is less than 1, so the marginal profit of N ′ is less than N ′ \ {i}, which is a contradiction.
17

Fraud-Proof Revenue Division on Subscription Platforms
Next, we show that N ′ does not contain any user i ∈ N \ [t], if P
j∈C′ wij ≤ d.
Lemma B.5. If i ∈ [t + 1, . . . , t + |U |] ∩ N ′, then P
j∈C′ wij = d + 1.
Proof. For the purpose of contradiction, let there be an i′ ∈ (N \ [t]) ∩ N ′ such that P
j∈C′ wi′j ≤ d. Let us consider the
two instances I1 and I2 defined as: I1 removes all users in N ′ from I, and I2 removes all uses in N ′ \ {i′} from I. As user i′ streams d + 1 times, which is the maximum possible, we have PPS(I2) ≤ PPS(I1). Further, as each user streams at least αd times, we have PPS(I2) ≤ α
αd = 1
d . Using assumption P
j∈C′ wi′j ≤ d, we have
φI2 (C′) − φI1 (C′)
= PPS(I2)


X
j ∈C ′
wi′j +
X
i∈N \{N ′}
X
j ∈C ′
wij

 − PPS(I1)


X
i∈N \{N ′}
X
j ∈C ′
wij


≤ PPS(I2)

d +
X
i∈N \{N ′}
X
j ∈C ′
wij

 − PPS(I1)


X
i∈N \{N ′}
X
j ∈C ′
wij


≤ PPS(I2)d, as PPS(I2) ≤ PPS(I1),
≤ 1, as PPS(I2) < 1
d.
As the difference in the total payment to the artists in C′ from instances I1 and I2 is at most 1, so the marginal profit of N ′ \ {i} is at least as good as N ′, which contradicts the minimality of N ′.
The above two lemmas prove that N ′ consists only of users i ∈ [t + 1, . . . , t + |U |] satisfying P
j∈C′ wij = d + 1. Let I1
be the the instance that removes all users in N ′ from I. Note that all users in I either stream d + 1 times or stream αd times. As the removed set of users N ′ contains only users who stream d + 1 times, so PPS(I) < PPS(I1).
Let L = P
i∈N \N ′
P
j∈C′ wij. All artist in [t] are streamed αd times, all artists in [t + 1, . . . , t + |V |] are streamed at most |U | times, and the artist N + |V | + 1 is streamed at most d|U | times. Thus,
L=
X
i∈N \N ′
X
j ∈C ′
wij ≤ |C′| max
j ∈C ′
X
i∈N \N ′
wij ≤ |C′|d|U | ≤ d|U |(δ + 1).
If |N ′| < l, then
PSP(U ) = PPS(I)(L + (d + 1)|N ′|) − PPS(I1)L − |N ′|
< PPS(I)(d + 1)|N ′| − |N ′|, as PPS(I) < PPS(I1),
≤ d+1
d |N ′| − |N ′|, as PPS(I) ≤ 1
d,
≤ l−1
d , as |N ′| < l.
If |N ′| ≥ l, then
PSP(U ) = PPS(I)(L + (d + 1)|N ′|) − PPS(I1)L − |N ′|
= PPS(I)(d + 1)|N ′| − |N ′| − (PPS(I1) − PPS(I))L
≥1
d − ε (d + 1)|N ′| − |N ′| − εL, as 1
d − ε ≤ PPS(I) ≤ 1
d and PPS(I1) ≤ 1
d,
≥ |N ′|
d − ε(L + |N ′|)
≥l
d − ε|U |(d(δ + 1) + 1), as |N ′| ≤ l and |N ′| ≤ |U |,
≥ l−1
d , by our choice of ε.
18

Fraud-Proof Revenue Division on Subscription Platforms
Thus, we have shown that there is a C′ ⊆ C such that |C′| ≤ δ + 1 = k and PSP(C′) ≥ l−1
d = γ if and only if there are
users N ′ ⊆ [t + 1, . . . , t + |U |] such that |N ′| ≥ l and P
j∈C′ wij = d + 1 for all i ∈ N ′.
We claim that the final artist t + |V | + 1 is in C′. Notice that the streams of the users in N \ [t] = [t + 1, . . . , t + |U |] for the artists in [t + 1, . . . , t + |V |] have one-to-one correspondence with the edges of the graph, by construction. Therefore, for any user i ∈ N \ [t], the total streams for the artists in [t + 1, . . . , t + |V |] is at most the maximum degree d of the graph, i.e., P
j∈[t+1,...,t+|V |] wij ≤ d for all i ∈ N \ [t], which implies that P
j∈[t+1,...,t+|V |] wij ≤ d for all i ∈ N ′ because N ′ ⊆ N \ [t]. Further, users in N \ [t] do not listen to the first t artists. Therefore, as P
j∈C′ wij = d + 1 for all i ∈ N ′, we
must have the final artist t + |V | + 1 ∈ C′. This also implies that |C′ ∩ [t + 1, . . . , t + |V |]| ≤ |C′| − 1 ≤ δ.
Let S ⊆ U be the set that corresponds to N ′. It is clear that N (S) is a subset of the nodes in V that correspond to C′. We note that |S| = |N ′| ≥ l and |N (S)| = |C′ ∩ [t + 1, . . . , t + |V |]| ≤ δ. Thus, there is a straightforward bijection between the sets (N ′, C′) such that |N ′| ≥ l and |C′| ≤ δ + 1 and the sets (S, N (S)) such that |S| ≥ l and |N (S)| ≤ δ.
B.5. Proof of Theorem 3.7
A user-additive rule is user-addition monotone. Let I be any instance, In+1 an instance with the addition of a user n + 1 and arbitrary engagement profile, and In+1 the instance containing only user n + 1. As φ is user-additive, φIn+1 (c) − φI(c) = φIn+1 (c) ≥ 0. By Theorem A.2, it is also fraud-proof and bribery-proof.
B.6. Proof of Theorem 3.8
We will prove each property separately. Note that the fact that USERPROP fails strong Sybil-proofness follows from Theorem 3.2.
We first show that USERPROP is user-additive, which will be useful in proving it is also fraud-proof and bribery-proof.
USERPROP is user-additive. This follows immediately from the definition. For any instance I = (N, C, w), let In+1 an
instance with a profile wn+1 appended to I. Then, for all artists j, φIn+1 (j) − φI (j) = α wn+1,j
P
k∈C wn+1,j which is exactly the
payoff of user j in a single user instance with only user n + 1.
USERPROP is user-addition monotone, fraud-proof and bribery-proof. This claim is just an application of Theorem 3.7.
USERPROP is Sybil-proof. Consider any two instances I = (N, C, w) and I′ = (N, C′, w′) such that C ⊆ C′. Suppose for any subset of artists C∗ ⊆ C,
(i) wij = w′
ij for all i ∈ N, j ∈ C∗, and
(ii) P
j∈C\C∗ wij = P
j∈C′\C∗ w′
ij for all i ∈ N ,
Then, we get that
φI (C \ C∗) =
X
j ∈C \C ∗
X
i∈N
wij
P
j′∈C wij′
×α
=
X
i∈N
P
j∈C\C∗ wij
P
j′∈C wij′
×α
=
X
i∈N
P
j∈C′\C∗ w′
ij
P
j′∈C w′
ij′
× α (by (i) and (ii))
=
X
j ∈C ′ \C ∗
X
i∈N
w′
ij
P
j′∈C wij′
×α
= φI′ (C′ \ C∗).
USERPROP fails strong Sybil-proofness By Theorem 3.2, only GLOBALPROP is strongly Sybil-proof. Hence, USERPROP is not strongly Sybil-proof.
19

Fraud-Proof Revenue Division on Subscription Platforms
B.7. Proof of Theorem 3.9
We will prove each property separately.
USERPROP satisfies no free-ridership. Consider an instance I = (N, C, w). For every j ∈ C where P
i∈N wij = 0,
φI (j) =
X
i∈N
wij
P
j′∈C wij′
× α = 0,
since we assume P
j′∈C wij′ > 0 for all i ∈ N .
USERPROP is engagement monotone. Consider any two instances I = (N, C, w) and I′ = (N, C, w′) whereby for some j∗ ∈ C, we have that (i) wij∗ ≤ w′
ij∗ for all i ∈ N , and (ii) wij ≥ w′
ij for all i ∈ N and j ∈ C \ {j∗}.
Now, consider any i ∈ N . Since
w′
ij∗ ≥ wij∗ and
X
j ∈C \{j ∗ }
wij ≥
X
j ∈C \{j ∗ }
w′
ij ,
we get that
w′
ij∗ ·
X
j ∈C \{j ∗ }
wij ≥ wij∗ ·
X
j ∈C \{j ∗ }
w′
ij .
Adding w′
ij∗ · wij∗ to both sides of the equation, we can factorize the expressions on each side to obtain
w′
ij∗ ·


X
j ∈C \{j ∗ }
+wij∗

 ≥ wij∗ ·


X
j ∈C \{j ∗ }
+w′
ij∗

 . (1)
Algebraic manipulation (note that by our model assumption, for each i ∈ N , P
j′∈C wij′ > 0 and P
j′∈C w′
ij′ > 0) gives us
wij∗
P
j∈C\{j∗} wij
≤ w′
ij∗
P
j∈C\{j∗} w′
ij
,
which simplifies to
wij∗
P
j′∈C wij′
≤ w′
ij∗
P
j′∈C w′
ij′
.
Taking the sum over all users i ∈ N on both sides, we have that
φI (j∗) =
X
i∈N
wij∗
P
j′∈C wij′
× αn ≤
X
i∈N
w′
ij∗
P
j′∈C w′
ij′
× αn = φI′ (j∗).
USERPROP fails Pigou-Dalton consistency. Consider an instance I with two users and two artists. Let wi = (1, 2) and w2 = (9, 0). Then φI(2) = 2
3 α. Suppose instead we consider I′, with w′1 = (1, 1) and w′2 = (9, 1). Then, I′ is a Pigou-Dalton improvement on I as engagement is transferred from a user with higher engagement to a user with a lower engagement. But, φI′ (2) = 3
5 α < φI(2) contradicting Pigou-Dalton consistency.
B.8. Proof of Theorem 3.10
We first show that USERPROP is user-additive, which will be useful in proving it is also fraud-proof and bribery-proof.
USEREQ is user-additive. This follows immediately from the definition. For any instance I = (N, C, w), let In+1
an instance with a profile wn+1 appended to I. Then, for all artists j, φIn+1 (j) − φI (j) = 1wij>0
|{j′∈C:wij′ >0}| × α which is
exactly the payoff of artist j in a single user instance with only user n + 1.
USEREQ is user-addition monotone, fraud-proof and bribery-proof. As USEREQ is user-additive, by Theorem 3.7, we have that USEREQ is user-addition monotone, fraud-proof and bribery-proof.
20

Fraud-Proof Revenue Division on Subscription Platforms
USEREQ fails Sybil-proofness. Consider an instance with one user and two artists, C = {1, 2}. Suppose w1 = (1, 1), then φI (1) = 1
2 α. Suppose instead we consider splitting artist 2 to artists 2′ and 3′, with C′ = {1, 2′, 3′}. If w′1 = (1, 1
2, 1
2 ),
USEREQ will assign payoff of 1
3 α to each artist, and so the combined payoff of 2′ and 3′ in instance I′ is greater than that in I, contradicting Sybil-proofness.
B.9. Proof of Theorem 3.11
We will prove each property separately.
USEREQ satisfies no free-ridership. Consider an instance I = (N, C, w). For every j ∈ C where P
i∈N wij = 0,
φI (j) =
X
i∈N
1wij >0
|{j′ ∈ C : wij′ > 0}| × α = 0,
since we assume P
j′∈C wij′ > 0 for all i ∈ N , and so |{j′ ∈ C : wij′ > 0}| > 0 for all i ∈ N .
USEREQ is engagement monotone. Consider any two instances I = (N, C, w) and I′ = (N, C, w′) whereby for some j∗ ∈ C, we have that (i) wij∗ ≤ w′
ij∗ for all i ∈ N , and (ii) wij ≥ w′
ij for all i ∈ N and j ∈ C \ {j∗}.
Consider any i ∈ N . If wij∗ = 0, then we trivially get that
φI (j∗) = 1wij∗ >0
|{j′ ∈ C : wij′ > 0}| = 0 ≤
1w′
ij∗ >0
|{j′ ∈ C : w′
ij′ > 0}| = φI′ (j∗).
Note that by our model assumption, P
j′∈C wij′ > 0 and P
j′∈C w′
ij′ > 0, and thus the fractions are well-defined. If
wij∗ > 0, then w′
ij∗ ≥ wij∗ > 0, by (i). Together with (ii), this means that
|{j′ ∈ C : wij′ > 0}| ≥ |{j′ ∈ C : w′
ij′ > 0}| > 0.
Then, taking the reciprocal, we get that
1
|{j′ ∈ C : wij′ > 0}| ≤ 1
|{j′ ∈ C : w′
ij′ > 0}| .
Since 1wij∗ >0 = 1w′
ij∗ >0 = 1, taking the sum over all i ∈ N , we get that
φI (j∗) =
X
i∈N
1wij∗ >0
|{j′ ∈ C : wij′ > 0}| × α ≤
X
i∈N
1w′
ij∗ >0
|{j′ ∈ C : w′
ij′ > 0}| × α = φI′ (j∗).
USEREQ is Pigou-Dalton consistent. Consider any two instances I = (N, C, w) and I′ = (N, C, w′) whereby there exists some i, i′ ∈ N and j ∈ C such that
(i) w′
ij = wij − δ (where δ > 0 and wij − δ > 0);
(ii) w′
i′j = wi′j + δ and wi′j ≤ wij ; and
(iii) wkj′ = w′
kj′ for all k ∈ N and j′ ∈ C \ {j}, and wkj = w′
kj for all k ∈ N \ {i, i′}.
Then, since wij > δ > 0 (by (i)), this implies w′
ij = wij − δ > 0, giving us
1wij >0 = 1w′
ij>0 = 1. (2)
Also, since w′
i′j > δ, we get that
1wi′j >0 ≤ 1 = 1w′
i′j >0. (3)
21

Fraud-Proof Revenue Division on Subscription Platforms
Then, a direct implication from (2) is
1wij >0
|{j′ ∈ C : wij′ > 0}| = 1wij>0
|{j′ ∈ C \ {j} : wij′ > 0}| + 1wij>0
=
1w′
ij >0
|{j′ ∈ C \ {j} : wij′ > 0}| + 1w′
ij >0
=
1w′
ij >0
|{j′ ∈ C : wij′ > 0}| .
Moreover, we also get that
1wi′j >0
|{j′ ∈ C : wi′j′ > 0}| = 1wi′j>0
|{j′ ∈ C \ {j} : wi′j′ > 0}| + 1wi′j>0
= 1 − |{j′ ∈ C \ {j} : wi′j′>0}|
|{j′ ∈ C \ {j} : wi′j′ > 0}| + 1wi′j>0
≤ 1 − |{j′ ∈ C \ {j} : wi′j′>0}|
|{j′ ∈ C \ {j} : wi′j′ > 0}| + 1w′
i′j >0
(by (3))
= 1 − |{j′ ∈ C \ {j} : w′
i′j′>0}|
|{j′ ∈ C \ {j} : w′
i′j′ > 0}| + 1w′
i′j >0
(by (iii))
=
1w′
i′j >0
|{j′ ∈ C \ {j} : w′
i′j′ > 0}| + 1w′
i′j >0
=
1w′
i′j >0
|{j′ ∈ C : w′
i′j′ > 0}| .
Utilizing the two implications obtained above, together with (iii), we get that
φI (j) =
X
k∈N
1wkj >0
|{j′ ∈ C : wkj′ > 0}| × α
=α×


1wij >0
|{j′ ∈ C : wij′ > 0}| + 1wi′j>0
|{j′ ∈ C : wi′j′ > 0}| +
X
k∈N \{i,i′}
1wkj >0
|{j′ ∈ C : wkj′ > 0}|


≤α×


1w′
ij >0
|{j′ ∈ C : w′
ij′ > 0}| +
1w′
i′j >0
|{j′ ∈ C : w′
i′j′ > 0}| +
X
k∈N \{i,i′}
1w′
kj >0
|{j′ ∈ C : w′
kj′ > 0}|


=
X
i∈N
1w′
ij >0
|{j′ ∈ C : w′
ij′ > 0}| × α
= φI′ (j),
as desired.
C. Connections to Portioning
We first formally define a portioning instance and portioning rule.
Definition C.1 (Portioning Instance). A portioning instance is an instance I = (N, C, w) such that for all i ∈ N , ∥wi∥1 = 1.
Definition C.2 (Portioning Rule). A portioning rule is a function ψ that maps each portioning instance I to an m-valued vector (ψI(1), . . . , ψI(m)). Each ψI(j) ≥ 0 and we require additionally that P
j∈C ψI (j) = 1.
22

Fraud-Proof Revenue Division on Subscription Platforms
Because of this relationship, we can generate payment rules by normalizing the engagement vectors and using existing por
tioning mechanisms. So, for an instance I = (N, C, (wij)) we can construct a portioning instance I∗ = N, C, wij
∥wi ∥1
where ∥wi∥ is the l1 norm, ∥wi∥ = P
j∈C wij. For a portioning rule ψ, we construct a payment rule φ such that for all artists j, the payment is given by the portioning rule φI(j) = ψI∗ (j) × nα.
Major portioning rules are cataloged in Elkind et al. (2023). One broad category of portioning rules are coordinate-wise rules. We can construct these from a function that aggregates the engagement of each artist and then normalize it.
Definition C.3. Given a family of functions f n : (R≥0)n → (R≥0) we can construct a coordinate-wise portioning rule such
that the payoff to an artist j is ψI (j) = fn(w1j,w2j,...,wnj)
P
k∈C f n(w1k,w2k,...,wnk) .
The functions mentioned in Elkind et al. (2023) aggregate preferences based on the coordinate-wise average, the maximum, the minimum, the median and the geometric mean. From these portioning rules, we can construct analogous payment rules AVG, MAX, MIN, MED and GEO respectively. We then obtain the following results.
Theorem C.4. AVG is equivalent to USERPROP. As such it satisfies fraud-proofness, bribery-proofness and Sybil-proofness.
Proof. Given a problem instance I = (N, C, w) with unnormalized w, AVG will assign artist j a payoff nα ×
P
i∈N
wij ∥wi ∥1
1 n
P
k∈C
P
i∈N
wik ∥wi ∥1
1 n
= nα ×
P
i∈N
wij ∥wi ∥1
P
i∈N
P
k∈C
wik ∥wi ∥1
. But note that the denominator simplifies to n giving payoff to each
artist j equal to α P
i∈N
wij
∥wi∥1 , which is identical to USERPROP.
Theorem C.5. Rules MAX, MIN, GEO, MED, UTIL, EGAL and INDEPENDENTMARKETS fail fraud-proofness, briberyproofness and Sybil-proofness for all α ∈ (0, 1].
The eighth rule, AVG, assigns payout proportional to the average engagement of an artist. This is equivalent to the rule USERPROP. The strong axiomatic guarantees of AVG in the portioning setting add an extra layer of support towards USERPROP. Conversely, our results that AVG satisfies fraud-proofness and bribery-proofness in our expanded setting add an extra layer of support towards AVG.
To simplify our analysis, we will prove the Theorem C.5 using four separate results as follows.
Lemma C.6. Coordinate-wise rules MAX, MIN, MED, GEO fail fraud-proofness and bribery-proofness for all α ∈ (0, 1], even if there are only two artists.
Proof. We prove that the rules fail fraud-proofness, the counterexamples for bribery-proofness are very similar. For MAX, let n = 6
α + 1. Let wi = ( 1
2, 1
2 ), so that each artist receives a payment of nα
2 . If an adversary in support of 1 adds
wn+1 = (1, 0) then the payment to 1 is 2(n+1)α
3 . But, 2(n+1)α
3 − nα
2 = 4(n+1)α−3nα
6 = nα+α
6 . But n > 6
α so that the benefit from fraud is greater than 1.
For MIN, let n = 2⌈ 1
α ⌉, C = {1, 2} and for all i ∈ N , wi = ( 1
2, 1
2 ), so that each user receives a payoff of nα
2 . Suppose we
construct instance I′ by adding profile wn+1 = (1, 0). Then, φI′ (1) = (n + 1)α and φI′ (1) − φI(1) = (n + 1)α − nα
2= (n+2)α
2 > 1 by n ≥ 2
α.
For GEO, we can reuse the counterexample for MIN.
For MED, let n = 2
α if odd or 2
α + 1 otherwise and n = 2k + 1 for a natural number k. Then for i ≤ k, wi = (1, 0) and
for k + 1 ≤ i ≤ 2k + 1 let wi = (0, 1). Then φI (1) = 0. Adding in profile wn+1 = (1, 0) means φI′ (1) = (n+1)α
2 >1 by construction.
Another class of rules focuses on welfare maximization. For a portioning rule ψ we can measure the disutility of a user i as the l1-difference between their engagement and the output payment profile, dI(i) = P
j∈C |ψI (j) − wij|, the user’s
welfare is then −dI(i). Rule UTIL maximizes utilitarian welfare − P
i∈N dI(i) and EGAL maximizes egalitarian welfare mini∈N (−dI(i)). Ties are broken in favour of the maximum entropy distribution in the case of UTIL. For EGAL, we break ties in a leximin manner, however, our counterexamples do not rely on the tie-breaking method.
Lemma C.7. UTIL and EGAL fail fraud-proofness and bribery-proofness for all α ∈ (0, 1].
23

Fraud-Proof Revenue Division on Subscription Platforms
Proof. We prove that the rules fail fraud-proofness, the counterexamples can be slightly modified to also prove briberyproofness. For UTIL, consider n = 2k + 1 and C = {1, 2}, with i ≤ k + 1 submitting wi = (1, 0) and i > k submitting wi = (1, 0), then UTIL will allocate the entire resource to artist 1 giving payoff φI(2) = 0. If a new user is added with wn+1 = (0, 1) then φI (2) = nα
2 > 1 for large enough n.
For EGAL, let C = {1, 2} and for all i, wi = ( 1
2, 1
2 ). Then φI (1) = nα
2 . If we add a profile (1, 0) then to minimize
disutility, φI′ (1) = 3
4 nα, such that φI′ (1) − φI (1) = 1
4 nα > 1 for large n.
The more sophisticated independent markets rule was recently introduced in Freeman et al. (2021). This rule is strategy-proof and in some precise sense proportional. For an instance with n users, the rule constructs n + 1 phantom values. Each artist j receives the median of {wij | i ∈ N } and the n + 1 phantom values. To compute these phantom values the rule uses functions f0, . . . , fn : [0, 1] → [0, 1] with fk(t) = min(kt, 1). The rule then uses t∗ such that the payoff to each artist is 1, i.e.-
, P
j∈C med(w1j, . . . , wnj, f0(t∗), . . . , fn(t∗)) = 1. Unfortunately, despite it’s sophistication the rule fails to be fraud-proof.
Lemma C.8. The INDEPENDENTMARKETS rule fails to be fraud-proof, bribery-proof or Sybil-proof for all α ∈ (0, 1].
Proof. For a number of users n, construct an instance In = ({1, . . . , n}, {1, . . . , n + 1}, w), with wi1 = 1 and for artist j with j ̸= 1, wij = 0. Then, φIn (1) = nα as the users unanimously assign their payoff to user 1. Now, suppose we construct instance I′n by adding a user profile wn+1 = (0, 1
n,..., 1
n ). Then, there are n + 2 phantom values generated by the independent markets rule and so each player will be assigned the n + 2’nd highest value among the phantom and real values. For player 1 that will be the second largest phantom value t∗n and for players i > 1 it will be the second lowest phantom value which is t∗. Given the constraint nt∗ + Pn+1
i=2 t∗ = 1, we get that t∗ = 1
2n . So, the total payoff artists
2, . . . , n + 1 receive is tn(n + 1)α = (n+1)a
2 . So, for Cb = C \ {1}, φI′n (Cb) − φI (Cb) = (n+1)α
2 > 1 for large enough n.
Similarly for bribery-proofness, given an instance In, we can construct I′ by setting the profile wn to (0, 1
n,..., 1
n ). By the
above analysis this generates revenue of nα
2 which is greater than 1 for n > 2
α.
For Sybil-proofness, construct an instance I = ({1, . . . , n + 1}, {1, 2}, w} with wi = (1, 0) for i ≤ n and wn+1 = (0, 1). Then the value users 1, 2 will be assigned by the independent markets rule is t∗n and t∗ respectively. As such φI(1) = nα and φI(2) = α. However, from our example in fraud-proofness, we can split user 2 to users 2′, 3′, . . . , n + 1′ and distribute the engagement of user n + 1 equally. This would give a payoff of (n+1)α
2 to the Sybil artists which is greater than α for n > 2.
Theorem C.9. Rules MAX, MIN, GEO, MED, UTIL, EGAL fail Sybil-proofness for all α ∈ (0, 1].
Proof. For MAX, consider instances I = ({1, 2, 3}, {1, 2}, w) with w1 = (1, 0), w2 = w3 = (0, 1). Then φI(2) =
3α
2 . Suppose construct I′ by splitting user 2 to user 2′, 3′ and w′1 = (1, 0, 0), w′2 = (0, 1, 0), w′3 = (0, 0, 1). Then
φI(2′) + φI(3′) = 2α > φI(2) contradicting Sybil-proofness.
For MIN, consider instance I with N = {1, 2} and C = {1, 2, 3} and w1 = ( 1
3 , 0, 2
3 ), w2 = ( 1
3, 2
3 , 0), then for C′ = {2, 3},
φI (C′) = 0. If instead we construct I′ = (N, C, w′) with w′1 = w1, w′2 = w′3 = ( 1
3, 1
3, 1
3 ), then φI (C′) = 2α > φI (C′) and contradicting Sybil-proofness.
For GEO, we can reuse the example from MIN.
For MED, consider N = {1, 2, 3}, C = {1, 2, 3} and w1 = (1, 0, 0), w2 = ( 1
2, 1
2 , 0) and w3 = ( 1
2 , 0, 1
2 ). For C′ = {2, 3},
φI (C′) = 0. Now, consider instead w′, with w′1 = w1, w′2 = w′3 = ( 1
2, 1
4, 1
4 ). Then, φI′ (C′) = 3α
2 > φI (C′) = 0.
For UTIL, consider N = {1, 2, 3}, C = {1, 2, 3} and w1 = (1, 0, 0), w2 = (0, 1, 0) and w3 = (0, 0, 1), then for C′ = {2, 3}, φI (C′) = 2α. Consider instead instance I′ with w′1 = w1, w′2 = w′3 = (0, 1
2, 1
2 ). Then, φI′ (C′) = 3α > φI (C′).
For EGAL, consider N = {1, 2, 3}, C = {1, 2, 3} and w1 = ( 1
3, 1
3, 1
3 ), w2 = (0, 1
2, 1
2 ) and w3 = (0, 1
2, 1
2 ), then for
C′ = {2, 3}, φI (C′) = 5
2 α. Consider instead instance I′ with w′1 = w1, w′2 = (0, 1, 0) and w′3 = (0, 0, 1). Then,
φI′ (C′) = 3α > φI (C′).
24

Fraud-Proof Revenue Division on Subscription Platforms
D. Omitted Proofs from Section 4
D.1. Proof of Theorem 4.1
Consider an instance I with n > ⌈ 2
α ⌉ users and two artists. Let P
i∈N wi1 = 1
4k and P
i∈N wi2 = 1. Then, if
ME(φ, I) ≤ k, then φI(1) ≤ n
4 . Otherwise, if φI(1) > n
4 , then PPS(φ, I, 1) ≥ nk and PPS(φ, I, 2) ≥ 3n
4 . Then, ME(φ, I) ≥ 4k/4 > k.
Next, we add an additional user i′ such that wi′1 = 3k and wi′2 = 0. Let this instance be I′. Then, if ME(φ, I′) ≤ k, then φI′ (1) ≥ 3(n+1)
4 . Otherwise, if φI′ (1) < 3(n+1)
4 , then PPS(φ, I, 1) < (n + 1)/4k and PPS(φ, I, 2) ≥ (n + 1)/4. Then,
ME(φ, I) > (n+1)/4
(n+1)/4k > k.
Thus, if ME(φ, I) ≤ k and ME(φ, I′) ≤ k, then φI′ (1)−φI (1) ≥ 3(n+1)
4 −n
4>n
2 . As n > ⌈ 2
α ⌉, then φI′ (1)−φI (1) > 1 and φ is not fraud-proof.
By modifying instance I and having user i′ such that wi′1 = 0 and wi′2 = ε, a similar argument shows that φ is not bribery-proof.
D.2. Proof of Theorem 4.2
Here, we let ∥wi∥1 = P
j∈C wij .
For an instance where for all i, ∥wi∥1 ≤ 1
nα
P
i′∈n∥wi′ ∥1 SCALEDUSERPROP and GLOBALPROP give the same
payoff to each artist. If for all i, ∥wi∥1 ≤ 1
nα
P
i′∈n∥wi′ ∥1, γ = nα
P
i∈N ∥wi∥1 . From our inequality we have that
γ∥wi∥1 ≤ γ
nα
P
i∈N ∥wi∥1 = 1 and so in particular min(γ∥wi∥1, 1) = γ∥wi∥1. Also, P
i∈N γ∥wi∥1 = nα, so this is the appropriate γ.
So, the payoff to each artist is:
φI (j) =
X
i∈N
γ∥wi∥1
wij
∥wi∥1
=
X
i∈N
γwij = nα
P
i∈N wij
P
i∈N ∥wi∥1
.
Which is identical to GLOBALPROP.
D.3. Proof of Theorem 4.3
We will prove each property separately.
SCALEDUSERPROP is bribery-proof. Suppose for a contradiction the SCALEDUSERPROP does not satisfy briberyproofness. Then there are instances I = (N, C, w) and I′ = (N, C, w′) with wi = w′
i for i < n and wn ̸= w′n such that
for a C+ ⊆ C, φI′ (C+) − φI(C+) > 1. We will prove this result by simplifying the cases we need to consider. First, note that without loss of generality we can collapse C+ to a single artist. For any instance J , we can construct an instance J ∗ by collapsing artists C+ to a single artist in J ∗. Each user i has engagement to a fresh user c+ equal to P
j∈C+ wij then
in SCALEDUSERPROP, φJ ∗ (c+) = φJ (C+). Similarly, for the purposes of this proof we can collapse the complement C \ C+ to a single user. So without loss of generality, it suffices to prove the result for C = {1, 2}.
Also, suppose wn1 > 0, then setting wn1 to 0 would weakly decrease the payoff of artist 1 in instance I and so increase the profit from bribery. So without loss of generality, wn1 = 0 and similarly w′n2 = 0. By engagement monotonicity, the maximum difference φI′ (1) − φI(1) is achieved for profiles wn = (0, M ) and wn = (M, 0) for large M .
If nα ≤ 1 then bribery is inherently impossible as the mechanism does not distribute enough payoff to cover a single subscription fee. If nα > 1 then it suffices to consider the minimum M ∗ such that γM ∗ ≥ 1. Increasing M past M ∗ does not affect γ.
But note: γ in I and γ′ in I are equal! So, φI′ (1) − φI(1) = min(γM, 1) M
M − min(γM, 1) 0
M = 1. So, the maximum benefit from bribing is at most 1, proving bribery-proofness of SCALEDUSERPROP.
25

Fraud-Proof Revenue Division on Subscription Platforms
SCALEDUSERPROP is Sybil-proof. Consider any two instances I = (N, C, w) and I′ = (N, C′, w′) such that C ⊆ C′. Suppose for any subset of artists C∗ ⊆ C,
(i) wij = w′
ij for all i ∈ N, j ∈ C∗, and
(ii) P
j∈C\C∗ wij = P
j∈C′\C∗ w′
ij for all i ∈ N ,
Let γ and γ′ be constants such that
X
i∈N
min(γ ·
X
j∈C
wij, 1) = αn and
X
i∈N
min(γ′ ·
X
j∈C
w′
ij, 1) = αn, respectively.
Then, using (i) and (ii), we equivalently get that γ and γ′ are constants such that
X
i∈N
min(γ ·
X
j∈C
w′
ij, 1) = αn and
X
i∈N
min(γ′ ·
X
j∈C
wij, 1) = αn, respectively.
This means that γ = γ′. Then, we get that
φI (C \ C∗) =
X
j ∈C \C ∗
X
i∈N
min(γ ·
X
j ′ ∈C
wij′ , 1) × wij
P
j′∈C wij′
=
X
i∈N
min(γ ·
X
j ′ ∈C
wij′ , 1) ×
P
j∈C\C∗ wij
P
j′∈C wij′
=
X
i∈N
min(γ′ ·
X
j ′ ∈C
w′
ij′ , 1) ×
P
j∈C\C∗ w′
ij
P
j′∈C w′
ij′
(by (i), (ii), and since γ = γ′)
=
X
j ∈C \C ∗
X
i∈N
min(γ′ ·
X
j ′ ∈C
w′
ij′ , 1) × w′
ij
P
j′∈C w′
ij′
= φI′ (C′ \ C∗).
SCALEDUSERPROP is fraud-proof. Denote ∥wi∥1 = P
j∈C wij .
We prove this result by first simplifying the cases needed to consider. Consider instances I = (N, C, w) and I′ = (N ∪ {n + 1}, C, w′) such that for i < n + 1, wi = w′
i but for some coalition of artists C∗ ⊆ C, φI′ (C∗) − φI (C∗) > 1.
Similarly to the proof of bribery-proofness, without loss of generality the coalition C∗ contains a single user m. In this new instance, m receives engagement from user i equal to P
j∈C∗ wij .
Also, for any vector wn+1 with fixed l1-norm, the payoff to user m, φI(m), is maximized for wn+1,j = 0 for j < |C| and
wn+1,m = ∥wn+1∥1. Fixing ∥wn+1∥1 fixes γ and to maximize the term wn+1,m
∥wn+1∥1 , we place all engagement in coordinate
wn+1,m. So without loss of generality, it suffices to consider wn+1 only of the form (0, 0, . . . , 0, M ).
By engagement monotonicity, for M < M ′, if wn+1 = (0, 0, . . . , 0, M ) is a fraud-proofness violation, so is wn+1 = (0, 0, . . . , 0, M ′).
Now, let γ and γ′ be the parameters produced in instances I and I′ respectively. Without loss of generality we consider instances of the form wn = (0, 0, . . . , 0, M ), with the property that γ′M > 1. This is possible because we assume that (n + 1)α > 1, which is a requirement for there to be fraud. Then:
φI′ (m) − φI (m) = 1 +
n
X
i=1
(min(γ′∥wi∥1, 1) − min(γ∥wi∥1, 1)) × wij
∥wi∥1
But, γ′ ≤ γ because γ′wn+1 ≥ 1 and so α(n + 1) = 1 + Pn
i=1 min(γ′∥wi∥1, 1) =⇒ Pn
i=1 min(γ′∥wi∥1, 1) =
nα − 1 + α ≤ nα = Pn
i=1 min(γ∥wi∥1, 1). So, min(γ′∥wi∥1, 1) − min(γ∥wi∥1, 1) ≤ 0 and so φI′ (m) − φI (m) ≤ 1, proving fraud-proofness.
26

Fraud-Proof Revenue Division on Subscription Platforms
SCALEDUSERPROP fails strong Sybil-proofness This follows directly from Theorem 3.2 as the only rule satisfying strong Sybil-proofness is GLOBALPROP.
D.4. Proof of Theorem 4.4
We will prove each property separately.
SCALEDUSERPROP satisfies no free-ridership. Consider an instance I = (N, C, w). For every j ∈ C where
P
i∈N wij = 0,
φI (j) =
X
i∈N
min(γ ·
X
j ′ ∈C
wij′ , 1) × wij
P
j′∈C wij′
= 0,
since we assume P
j′∈C wij′ > 0 for all i ∈ N .
SCALEDUSERPROP is engagement monotone. Denote ∥wi∥1 = P
j∈C wij and for a specific SCALEDUSERPROP
instance, we write αi as a shorthand for min(γ · P
j′∈C wij′ , 1).
Consider any two instances I = (N, C, w) and I′ = (N, C, w′) such that for with i ̸= n or j ̸= m, w′
ij = wij but
w′
ij > wij. Let γ, α1, . . . , αn and γ′, α′1, . . . , α′n the values computed for instances I and I′ respectively. If γ∥wn∥1 ≥ 1,
then γ′ = γ and so for j < m, α′
j = αj. So, we have φI′ (m) − φI (m) = w′
nm
∥w′n∥ − wnm
∥wn∥ ≥ 0.
Suppose that γ∥wn∥1 < 1. Then we must have γ′ < γ. So for i < n, α′
i ≤ αi and α′n ≥ αn. By nα = P
i∈N αi =
P
i∈N α′
i, α′n − αn = Pn−1
i=0 αi − α′
i.
Suppose in addition, γ′∥w′n∥1 ≤ 1. So, artist m loses payoff of at most γ′∥w′n∥1 − γ∥wn∥1 from a reduction of
payment from users 1, . . . n − 1. However, she makes γ′w′nm − γwnm more from the contribution of user n. But,
(γ′w′nm − γwnm) − (γ′∥w′n∥1 − γ∥wn∥1) = γ(∥wn∥1 − wnm) − γ′(∥w′n∥1 − w′nm) ≥ 0 as γ ≥ γ′ and ∥wn∥1 − wnm =
∥w′n∥1 − w′nm.
To prove the case γ′∥w′n∥1 > 1 we can simply consider an intermediate instance I′′ such that wnm < w′n′m < wnm and
γ′′∥w′′∥1 = 1. We have proven that the payoff of user m increases from I to I′ and from I′ to I′′ and hence from I to I′.
SCALEDUSERPROP fails strong Sybil proofness. This follows directly from Theorem 3.2 as the only rule satisfying strong Sybil-proofness is GLOBALPROP.
SCALEDUSERPROP fails Pigou-Dalton consistency for every α ∈ (0, 1]. Denote ∥wi∥1 = P
j∈C wij .
Fix α ≤ 1. Then, let n = ⌈ 1
α ⌉ + 1 and construct instance I = ({1, 2, . . . , n}, {1, 2}, w). For i < n, let wi1 = 1, wi2 = 0.
Let wi1 = M
2 , wi2 = M
2 for M = ⌈ 1
α⌉
nα−1 .
Then γ = nα−1
n−1 as γ∥wn∥1 = nα−1
n−1
⌈1
α⌉
nα−1 = 1 and so Pn
i=1 min(γ∥wi∥1, 1) = 1 + Pn−1
i=1 γ = nα. So, artist 1 receives
payoff φI (1) = 1
2 + nα − 1. Suppose now we construct instance I′ identical to I, except w11 = 1
2 and wn1 = M+1
2.
Then, γ′ = nα−1
n−1.5 and so γ′ > γ and in particular γ′(M + 1
2 ) > 1.
So, artist 1 receives payoff φI′ (1) = M+1
2M+1 + nα − 1 > φI (1) = 1
2 + nα − 1. This proves that for all α there is an instance that violates Pigou-Dalton consistency.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:54.426Z
- **Text Length:** 98235 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
