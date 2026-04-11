# PDF Document: Takano et al. - 2025 - Modeling Hawkish-Dovish Latent Beliefs in Multi-Agent Debate-Based LLMs for Monetary Policy Decision.pdf

**File Path:** Takano et al. - 2025 - Modeling Hawkish-Dovish Latent Beliefs in Multi-Agent Debate-Based LLMs for Monetary Policy Decision.pdf

**Processed Date:** 2026-02-10T18:18:33.877Z

**File Size:** 417.31 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3586

**Title:** Modeling Hawkish-Dovish Latent Beliefs in Multi-Agent Debate-Based LLMs for Monetary Policy Decision Classification

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Modeling Hawkish-Dovish Latent Beliefs in
Multi-Agent Debate-Based LLMs for Monetary
Policy Decision Classification
Kaito Takano1[0000−0000−0000−0000], Masanori Hirano2[0000−0001−5883−8250], and
Kei Nakagawa3[0000−0001−5046−8128]
1 Osaka Metropolitan University, Japan takaito0423@gmail.com 2 Preferred Networks, Inc., Japan research@mhirano.jp 3 Osaka Metropolitan University, Japan kei.nak.0315@gmail.com
Abstract. Accurately forecasting central bank policy decisions, particularly those of the Federal Open Market Committee (FOMC) has become increasingly important amid heightened economic uncertainty. While prior studies have used monetary policy texts to predict rate changes, most rely on static classification models that overlook the deliberative nature of policymaking. This study proposes a novel framework that structurally imitates the FOMC’s collective decision-making process by modeling multip-
le large language models (LLMs) as interacting agents. Each agent begins with a distinct initial belief and produces a prediction based on both qualitative policy texts and quantitative macroeconomic indicators. Through iterative rounds, agents revise their predictions by observing the outputs of others, simulating deliberation and consensus formation. To enhance interpretability, we introduce a latent variable representing each agent’s underlying belief (e.g., hawkish or dovish), and we theoretic-
ally demonstrate how this belief mediates the perception of input information and interaction dynamics. Empirical results show that this debate-based approach significantly outperforms standard LLMsbased baselines in prediction accuracy. Furthermore, the explicit modeling of beliefs provides insights into how individual perspectives and social influence shape collective policy forecasts.
Keywords: Hawkish-Dovish · Multi-Agent LLMs · Monetary Policy Decision · FOMC
1 Introduction
Monetary policy decision makings by central banks, especially changes in policy interest rates, have direct effects on financial markets and the cost of capital in the real economy [29, 22, 15]. Among central banks, the Federal Open Market Committee (FOMC) of the U.S. is one of the most closely watched
This paper does not reflect the view of the organizations the authors belong to. All errors in this paper are the responsibility of the authors.
arXiv:2511.02469v1 [q-fin.CP] 4 Nov 2025

2 K. Takano et al.
decision-making bodies in the world. Its policy rate decisions have significant influence not only on the U.S. economy but also on global financial markets. When the FOMC raises interest rates, U.S. dollar–denominated assets become more attractive, encouraging capital inflows into the United States. As a result, other countries—particularly emerging markets—often experience capital outflows, currency depreciation, and tighter financial conditions [16, 4, 6]. The FOMC consists of 12 voting members:-
 7 governors from the Federal Reserve Board and 5 presidents of regional Federal Reserve Banks. The committee meets eight times per year to determine the target range for the federal funds rate by majority vote. Each member has a unique background, shaped by their region and area of expertise, and thus brings a different beliefs to monetary policy. These beliefs are often categorized as either “dovish” (favoring more accommodative policy) or “hawkish” (favoring tighter policy). The FOMC’s decision-
-making process is designed to reflect these diverse views. During each meeting, members present their policy beliefs, engage in debates, and ultimately reach a consensus. On the final day of the meeting, the committee releases a policy statement that announces the interest rate decision and outlines the economic reasoning behind it.4 To inform these decisions, the FOMC uses various types of information, including macroeconomic indicators such as the inflation rate. In addition, it consults the Be-
ige Book, a qualitative report that reflects regional economic conditions. The Beige Book is published two weeks before each FOMC meeting and is compiled by the twelve regional Federal Reserve Banks. It summarizes findings from interviews with local businesses and stakeholders. Unlike typical economic data, the Beige Book is released in textual form and contains unstructured qualitative information.5 With the increasing complexity of economic conditions and the acceleration of inflation, accuratel-
y predicting both the timing and direction of monetary policy decisions has become a critical challenge for macroprudential policy design and investment strategy development like [12, 21, 3]. In parallel, central banks themselves are increasingly adopting AI technologies. As monetary policy communication becomes more sophisticated and real-time analytics are further developed, external market participants are also expected to adopt more advanced analytical tools [10, 2]. With this background, this-
 study addresses the problem of predicting policy rate decisions made by the FOMC. Many literature has attempted to forecast monetary policy decisions and market responses by analyzing the content of central bank communications, particularly unstructured policy texts such as the Beige Book and FOMC statements [14, 30, 11]. These studies typically focus on extracting features from the text such as tone, sentiment, or keyword frequencies and apply regression-based approaches to link them with policy-
 outcomes or market variables. However, existing approaches face two main limitations. First, they fail to account for the deliberative decision-making process that is intrinsic to the insti
4 https://www.federalreserve.gov/monetarypolicy/fomc.htm 5 https://www.federalreserve.gov/monetarypolicy/publications/beige-bookdefault.htm

Modeling Hawkish-Dovish Latent Beliefs 3
tutional structure of the FOMC [32, 19]. As described earlier, FOMC members express divergent policy beliefs informed by differing economic perspectives, and these views are gradually reconciled through discussion and debate to form a final consensus. Yet, many prior studies treat the FOMC as a single unified decision-making entity, neglecting the internal dynamics and diversity of beliefs within the committee.
Second, most existing methods rely on static text analysis based on dictionaries or single-model predictions [14, 30, 11]. As a result, they struggle to integrate macroeconomic indicators with textual information in a cohesive manner, and they lack the capacity to model how individual beliefs emerge and evolve among committee members during the policy formation process.
To address the aforementioned challenges, this study proposes a novel descriptive framework for policy rate determination that structurally simulates the deliberative decision-making process of the FOMC. The proposed framework models the process using multiple pre-trained LLMs, each acting as an autonomous agent. Each LLM-based agent represents an FOMC member with a distinct policy beliefs—such as dovish or hawkish—and operates independently. Each agent receives as input a combination of qualitati-
ve information and quantitative macroeconomic indicators. Based on this input, the agent generates an initial policy decision. Then, in successive rounds, each agent sequentially observes the decisions made by other agents and updates its own output accordingly. In each round, agents revise their decisions by incorporating the judgments of others as part of an ongoing debate. This iterative, interdependent process is designed to structurally mimic the institutional dynamics of actual FOMC meetings-
, namely, the expression of beliefs, debate, beliefs adjustment, and eventual consensus formation.
Furthermore, following [9], we explicitly model each agent’s internal policy beliefs as a discrete latent variable. We assume that the policy label is generated probabilistically based on this latent stance, and we formalize the decision process as a Bayesian generative model. Theoretically, the output of each agent is generated as a function of (i) the input data (text and macroeconomic indicators), (ii) the observed decisions of other agents, and (iii) the agent’s own latent belief, serving as a-
 mediating variable. This structure can capture the interaction between external evidence, peer influence, and individual predispositions.
The goal of this study is to answer two research questions using the proposed structural framework. Although debate-based multi-agent LLMs have proven effective in enhancing reasoning, accuracy, and consensus-building [8, 5, 18], there is no existing research that applies structured debate-based LLM frameworks specifically to the financial domain.
First, we empirically evaluate whether the proposed model can replicate actual FOMC policy decisions. Specifically, we test whether the model, given the Beige Book and macroeconomic indicators available before each FOMC meeting, can produce the same decision outcome as the actual FOMC. This serves as an empirical validation of whether our model, which incorporates the institutional features of the FOMC, also possesses practical predictive power.

4 K. Takano et al.
Second, we aim to identify which components of the proposed framework are most critical for decision-making. To this end, we conduct an ablation study to quantitatively assess the contribution of various components—including textual information, macroeconomic variables, peer agent outputs, and latent beliefs variables. This analysis reveals the key informational and structural factors that drive interest rate decisions in our framework.
2 Related Work
Recent advances in LLMs have been remarkable. Notably, cutting-edge models such as ChatGPT [23], GPT-4 [24], Claude, and Gemini have demonstrated performance and generalizability far beyond previous models, finding applications across diverse fields. These models trace their origins to the Transformer architecture [35], evolving through subsequent developments including BERT [7] and the GPT series [27, 28, 17], ultimately leading to the emergence of LLMs. Since LLMs are trained on diverse texts, t-
hey acquire thought patterns that people have. This capability has been leveraged in research applications such as opinion research, which can generate responses specific to demographic characteristics or individual preferences [26, 13]. Furthermore, Park et al. [25] constructed an RPG-style social simulation featuring LLM-based agents with various roles to investigate how new social structures form. Additionally, ResearchTown [36] - an LLM-based research community simulation environment - was dev-
eloped to model and analyze the emergence of new academic papers through collaborative research among scholars. Takata et al. [34] developed an LLM-based multi-agent environment to examine the mechanisms underlying the manifestation of individual characteristics. Building upon these studies, this study investigates whether LLMs can reproduce the process of collective decision-making in the financial domain. It is well established that when multiple decision-making entities interact, complex behavi-
ors emerge rather than linear patterns. Notable studies include those by Schelling [31, 31] and Axelrod [1], which demonstrate that when numerous agents with extremely simple decision-making behaviors interact, phenomena such as segregation and cultural diversity can emerge. Similarly, in financial markets, Lux et al. [20] demonstrated that agent interactions are crucial for reproducing stylized facts in financial market simulations. Given those backgrounds, this study aims to reproduce the decisi-
on-making process by simulating interactions among members of the FOMC using LLMs, with the goal of reproducing the complex collective decision-making behavior of the members.
3 Problem Formulation
In this study, we consider a three-class classification problem to predict the central bank’s next policy rate decision (Raise, Hold, or Lower) based on financial texts and associated numerical macroeconomic data.

Modeling Hawkish-Dovish Latent Beliefs 5
Unlike conventional supervised learning approaches that optimize model parameters using labeled training data, our approach relies on LLMs that have already been pre-trained. These LLMs are used directly for prediction without additional parameter tuning. Let x denote a financial text, and let v ∈ Rd denote a vector of relevant numerical indicators. Here, x is a natural language document, whose length and structure can vary. The vector v summarizes d-dimensional quantitative macroeconomic indicato-
rs relevant to policy decisions, such as recent inflation or unemployment rates. The corresponding label y is an element of the discrete set Y representing the policy rate decision:
Y = {Raise, Hold, Lower} (1)
Our dataset consists of tuples of past published texts, the numerical indicators available at the time, and the actual policy decision made by the central bank. However, we do not fine-tune the model using these data. Instead, each LLM receives the input pair (x, v) as a prompt and generates a prediction z ∈ Y based on its fixed, pre-trained parameters φ:
z ∼ PLLM z | x, v, φ (2)
This formulation treats the LLM as a probabilistic predictor over the set of possible policy actions, conditioned on both textual and numerical inputs.
4 Proposed Method
In this study, we propose a framework in which a total of n LLMs act as agents and conduct a multi-round debate over T iterations to reach a collective decision for classification. Each agent i has pre-trained parameters φi and receives as input a financial text x and numerical vector v. At the initial round t = 0, agent i independently generates a policy label based on its own model as follows:
z(0)
i ∼ PLLM z | x, v, φi , z(0)
i ∈ Y. (3)
Here, z(0)
i represents the initial label proposed by agent i. The distribution PLLM(· | x, v, φi) is fully determined by the fixed pre-trained parameters φi of agent i. From round t ≥ 1 onward, each agent observes the set of predictions made by all agents in the previous round:
Z(t−1) = z(t−1)
1 , z(t−1)
2 , . . . , z(t−1)
n , (4)
and updates its prediction accordingly:
z(t)
i ∼ PLLM z | x, v, Z(t−1), φi , z(t)
i ∈ Y. (5)

6 K. Takano et al.
The conditional distribution PLLM(· | x, v, Z(t−1), φi) represents the agent’s output distribution given not only the original inputs (x, v), but also the collective output of all agents in the previous round Z(t−1) as additional context. For instance, agent i may incorporate the opinions of others along with updated macroeconomic indicators such as inflation and unemployment into its prompt. This allows the agent to refine its judgment by comparing its beliefs with others and the latest data. Thi-
s iterative process forms a debate-based decision-making framework, where each agent updates its output in each round by considering both the opinions of others and the economic data. At the final round T , let a(·) denote a label extraction function that maps each agent’s response to a canonical decision. If all agents agree on the same label, i.e.,
a z(T )
1 = a z(T )
2 = · · · = a z(T )
n , (6)
then the shared label z = a(z(T )
i ) is adopted as the final prediction, and the debate terminates. If consensus is not achieved after the maximum number of rounds T , the label with the highest number of supporting agents is selected as the final output.
4.1 Latent Policy Beliefs
While the debate-based framework described above enables iterative opinion exchange among agents, it lacks transparency in explaining why each agent selects a particular label, that is, the internal policy beliefs remains a black box. To address this, we introduce an explicit latent variable representing the agent’s underlying policy beliefs, following the framework proposed by [9]. This latent variable, referred to as a hawk-dove stance, governs how each agent interprets the input text x and nume-
rical data v. We define a discrete latent space of policy stances as:
Θ = {θ1, θ2, . . . , θK }, (7)
where each element θk represents a cluster of policy beliefs, such as strongly hawkish (favoring aggressive rate hikes), moderately hawkish, or dovish (favoring monetary easing). The cardinality K = |Θ| denotes the number of distinct stance categories. Suppose agent i is given the input text x, numerical data v, and the set of labels from the previous round,
Z(t) = {z(t)
1 , z(t)
2 , . . . , z(t)
n }, (8)
and outputs a label in round t + 1. The probability of its response is modeled as:
PLLM z(t+1)
i | x, v, Z(t), φi , (9)
which can be expanded via marginalization over the latent beliefs variable θ ∈ Θ as follows.

Modeling Hawkish-Dovish Latent Beliefs 7
Lemma 1 (Latent Beliefs Decomposition).
PLLM z(t+1)
i | x, v, Z(t), φi
=
X
θ∈Θ
P z(t+1)
i | θ, x, v, Z(t), φi P θ | x, v, Z(t), φi . (10)
Here, P (z(t+1)
i | θ, x, v, Z(t), φi) represents the conditional probability that agent
i outputs label z(t+1)
i given a known stance θ, observed inputs x, v, and previous
agent responses Z(t). The posterior distribution P (θ | x, v, Z(t), φi) captures the probability that agent i adopts belief θ after observing x, v, and Z(t).
Assumption 1 (Conditional Independence Given Latent Belief ) For any
round t and any belief θ ∈ Θ, the output z(t+1)
i by agent i is conditionally inde
pendent of x, v, and Z(t) once θ is known:
P z(t+1)
i | θ, x, v, Z(t), φi = P z(t+1)
i | θ, φi (∀ θ ∈ Θ, t ≥ 0). (11)
This assumption implies that once the belief θ is fixed, the final label output becomes independent of the input text x, numerical data v, and others’ responses. Under this assumption, the output probability can be simplified as follows.
Lemma 2 (Posterior Decomposition). Given Assumption 11, the output probability in Equation (9) reduces to:
PLLM z(t+1)
i | x, v, Z(t), φi =
X
θ∈Θ
P z(t+1)
i | θ, φi P θ | x, v, Z(t), φi . (12)
Moreover, the posterior distribution over stances is given by:
P θ | x, v, Z(t), φi ∝ P x, v | θ, φi P θ | φi
n
Y
j=1
P z(t)
j | θ, φi . (13)
Here, P (z(t)
j | θ, φi) is the probability that agent j produces label z(t)
j given stance θ. The term P (x, v | θ, φi) is the likelihood of observing (x, v) under belief θ, and P (θ | φi) represents the prior belief distribution of agent i. The product term reflects how well the previous responses of other agents support belief θ.
Using this framework, each agent determines its own belief θ by jointly considering the input text x, numerical indicators v, and the previous outputs from other agents. Once a belief θ is selected, the agent generates its final label conditioned on that belief. These lemmas provide a formal foundation for modeling the internal reasoning process of each agent. Specifically, they describe how an agent interprets input signals, selects a monetary policy belief, and generates a final decision in a ma-
thematically consistent manner.

8 K. Takano et al.
5 Experiment
In this section, we conduct two experiments to evaluate the effectiveness of our framework. First, we test whether our model can reproduce actual FOMC policy decisions (Raise, Hold, or Lower) using the Beige Book and macroeconomic indicators available before each meeting. Second, we perform an ablation study to analyze the contribution of each component in our model such as textual information, numerical indicators, peer predictions, and belief variables to overall prediction performance.
5.1 Dataset
Our empirical analysis spans all scheduled FOMC meetings from January 2000 to December 2025. The next subsections describe three sources of information that match the inputs used by our agents.
Policy Rate: As our target variable, we use the actual federal funds policy rate decision made by the FOMC at each meeting. We classify each decision into one of three categories: Raise, Hold, or Lower, based on changes in the target range of the policy rate compared to the previous meeting. We also use as an input to the LLM, since information on the current level and trend of the policy rate may be important in decision the policy rate. We obtain this data from the Bloomberg terminal6.
Macroeconomic Indicators: To construct the input data for our model, we use both macroeconomic indicators and qualitative policy texts. In accordance with the Federal Reserve’s dual mandate: maximum employment and price stability, we use the unemployment rate and the inflation rate as macroeconomic indicators. We obtain these data from the Federal Reserve Economic Data (FRED) database7.
Beige Book: The Beige Book compiles economic conditions of the jurisdictions of each regional Federal Reserve Bank, and is published two weeks prior to the FOMC meetings. Its topics span a wide range, including GDP, inflation, employment, manufacturing, agriculture, tourism, real estate, and more. Given its role as material for debate at FOMC meetings, the Beige Book also serves as one of the resources for speculating on the outcomes of the next FOMC meeting[11]. In our research, we work with the -
Beige Book corpus created by [33]. This dataset is structured to be user-friendly for a range of analytical purposes, reflecting insights from existing studies. Its design promotes widespread use, allowing for consistent comparisons in various experiments. Each sentence in this dataset
6 https://www.bloomberg.com/professional/products/bloomberg-terminal/ 7 https://fred.stlouisfed.org/

Modeling Hawkish-Dovish Latent Beliefs 9
is assigned a topic, and we use ’overall economic activity’ or ’summary’ topic sentences.
5.2 Experimental Settings
Given the FOMC’s eight meetings per year, our study’s experimental period encompasses approximately 200 distinct time slices. We randomly select these slices such that 15 instances correspond to "Raise", 30 to "Hold", and 15 to "Lower" decisions. However, periods with minimal policy rate changes (e.g., between 2009-2015) or consecutive rate hikes are considered too trivial as prediction tasks, so we exclude any slices where the true policy decision matches either the preceding or following decisio-
n. We consider the task of predicting the FOMC’s policy rate decision (Raise, Hold, or Lower) at the time of the Beige Book release, with policy decisions to be made two weeks later. The input prompt includes: Beige Book textual data, economic indicators from the past three months, and the last two policy rate decisions. We set the number of agents n to 7 to facilitate majority voting. Each agent is assigned a specific belief profile, consisting of: one each of "Strong Hawkish", "Moderately Hawkis-
h", "Moderately Dovish", "Strong Dovish", and three "Neutral" agents. Detailed definitions of these beliefs are presented in Table 1.
Table 1: Belief Description
Belief Description Strong Hawkish Prioritizes controlling inflation and supports aggressive interest rate hikes Moderately Hawkish Proposes tightening of inflation but is mindful of economic downturns Neutral Makes careful decisions while monitoring the balance between prices and the economy Moderately Dovish Emphasizes supporting the economy while also paying a certain amount of attention to prices Strong Dovish Prioritizes economic recovery and actively supports interest rate cuts
For our LLM implementation, we will use GPT-4o-mini8, with API access provided by OpenAI9. The temperature hyperparameter, which controls the randomness in generation, is set to 1 to enable diverse debate patterns, while all other hyperparameters are configured to their default values. To ensure consistent output format, we will employ Structured Outputs10. This configuration specifies that the output should include both a ’label’ and its supporting ’justification’. The maximum number of rounds is-
 set to 10 to allow sufficient debate time. However, debate will terminate immediately when all LLMs reach complete agreement on their outputs. The actual prompt used is as follows:
8 gpt-4o-mini-2024-07-18 9 https://openai.com/ 10 https://platform.openai.com/docs/guides/structured-outputs?api-mode=responses

10 K. Takano et al.
Round t = 0
Today is {Month}. You will be given beige book text data, associated macroeconomic numerical data, historical policy rate, and a prior belief of central bank policy. Based on these inputs, predict whether the central bank will Raise, Hold, or Lower the policy rate after two weeks. You should provide a brief justification for your answer, and you must output one of the three labels: Raise, Hold, or Lower. Please also note that policy rate changes should be implemented with appropriate speed, and th-
at taking Hold is not necessarily always the best approach. Belief: {Beliefk} Beige Book Text Data: {Text} Macroeconomic Numerical Data: {Indicators} Historical Policy Rate: {Rates}
Round t > 0
Today is {Month}. Several other models have already given their predictions and current beliefs: Model1: Label is {Prediction(t−1)
1 }. {Justification(t−1)
1 } ({Belief1})
Model2: Label is {Prediction(t−1)
2 }. {Justification(t−1)
2 } ({Belief2}) ···
Modeln: Label is {Prediction(t−1)
n }. {Justification(t−1)
n } ({Beliefn})
Now you should consider these responses and beliefs. You are again given beige book text data, associated macroeconomic numerical data, historical policy rate, your current prediction, and your current belief. Use all of these to predict whether the central bank will Raise, Hold, or Lower the policy rate after two weeks. You should provide a brief justification for your answer, and you must output one of the three labels: Raise, Hold, or Lower. Please also note that policy rate changes should be i-
mplemented with appropriate speed, and that taking Hold is not necessarily always the best approach. Belief: {Beliefk} Current Prediction: {Prediction(t−1)
k} Beige Book Text Data: {Text} Macroeconomic Numerical Data: {Indicators} Historical Policy Rate: {Rates}
Here, underline represents a variable containing information embedded in the prompt. The correspondence with Equation 5 is as follows:
z(t)
i = (Prediction(t)
i , Justification(t)
i ) : Predicted Label and Its Justification
φi = Beliefi : Belief
x = Text : Beige Book Text Data
v = Indicators, Rates : Macroeconomic Numerical Data
The above experiments will be referred to as experiment (1) in the following.

Modeling Hawkish-Dovish Latent Beliefs 11
5.3 Ablation Study
As part of our ablation study, we will investigate the impact of: (2) textual information, (3) macroeconomic indicators, and (4) the current policy rate level on prediction accuracy. The prompt structure remains largely unchanged from Experiment (1), with only the following single sentence varying: ’You will be given beige book text data, associated macroeconomic numerical data, historical policy rate, and a prior belief of central bank policy.’ We will modify this information content to assess it-
s influence. For example, the prompt without textual information would appear as follows:
Round t = 0 (Remove Text)
Today is {Month}. You will be given beige associated macroeconomic numerical data, historical policy rate, and a prior belief of central bank policy. Based on these inputs, predict whether the central bank will Raise, Hold, or Lower the policy rate after two weeks. You should provide a brief justification for your answer, and you must output one of the three labels: Raise, Hold, or Lower. Please also note that policy rate changes should be implemented with appropriate speed, and that taking Hold i-
s not necessarily always the best approach. Belief: {Beliefk} Macroeconomic Numerical Data: {Indicators} Historical Policy Rate: {Rates}
Round t > 0 (Remove Text)
Today is {Month}. Several other models have already given their predictions and current beliefs: Model1: Label is {Prediction(t−1)
1 }. {Justification(t−1)
1 } ({Belief1})
Model2: Label is {Prediction(t−1)
2 }. {Justification(t−1)
2 } ({Belief2}) ···
Modeln: Label is {Prediction(t−1)
n }. {Justification(t−1)
n } ({Beliefn})
Now you should consider these responses and beliefs. You are again given associated macroeconomic numerical data, historical policy rate, your current prediction, and your current belief. Use all of these to predict whether the central bank will Raise, Hold, or Lower the policy rate after two weeks. You should provide a brief justification for your answer, and you must output one of the three labels: Raise, Hold, or Lower. Please also note that policy rate changes should be implemented with approp-
riate speed, and that taking Hold is not necessarily always the best approach. Belief: {Beliefk} Current Prediction: {Prediction(t−1)
k}
Macroeconomic Numerical Data: {Indicators} Historical Policy Rate: {Rates}
Furthermore, to examine the predictive capability of a simple approach without beliefs (5), we will investigate accuracy using the following prompt. To main

12 K. Takano et al.
tain consistent conditions, we will perform seven predictions and determine policy decisions through majority voting.
Round t = 0 (Remove Belief )
Today is {Month}. You will be given beige book text data, associated macroeconomic numerical data and historical policy rate. Based on these inputs, predict whether the central bank will Raise, Hold, or Lower the policy rate after two weeks. You should provide a brief justification for your answer, and you must output one of the three labels: Raise, Hold, or Lower. Please also note that policy rate changes should be implemented with appropriate speed, and that taking Hold is not necessarily always-
 the best approach. Beige Book Text Data: {Text} Macroeconomic Numerical Data: {Indicators} Historical Policy Rate: {Rates}
Finally, to demonstrate the utility of multi-round agent debate in reaching consensus, we define Experiment (6) as the majority vote result from round 0 of the main experiment (1).
5.4 Results & Discussion
We conducted experiments (1) through (6), calculating three evaluation metrics—Precision, Recall, and F1-Score using macro averaging. The results are presented in Table 2.
Table 2: All results (Precision, Recall, F1-Score)
Experimental Settings Precision Recall F1-Score
(1) Proposed Method 0.549 0.467 0.476 (2) Remove Beige Book 0.399 0.422 0.385 (4) Remove Historical Policy Rate 0.535 0.456 0.464 (5) Remove Belief 0.514 0.411 0.399 (6) No Debate 0.543 0.422 0.415
Experimental results showed that (1) yielded the best performance. The confusion matrix for (1) is presented in Table 3. As shown in Table 3, no significant directional errors were observed—for instance, raising rates when lowering was the actual decision or vice versa. The information sources used in this research demonstrate that policy direction can be reasonably constrained. Results from Experiment (2) indicate that Beige Book information proves valuable for policy rate determination. The Beig-
e Book contains descriptions of overall U.S. price and employment conditions, which align with the Fed’s Dual Mandate. Furthermore, results from Experiment (3) confirm that both

Modeling Hawkish-Dovish Latent Beliefs 13
Table 3: Confusion Matrix Predicted Raise Hold Lower
Raise 7 8 0 Actual Hold 8 20 2 Lower 0 11 4
quantitative and textual macroeconomic indicators are crucial for policy rate decision-making. However, the presence of recent policy rate trends (Experiment (4)) showed no significant impact on prediction accuracy. This finding may be partially explained by our intentional selection of policy rate transition points. When policy rate trends are present, it could potentially be useful for predicting rate changes, but excessive reliance on current trend biases may pose risks and requires caution. Ex-
periments (5) and (6) represent majority voting results without interagent debate. These results demonstrate that the iterative decision-making approach—where each agent refines its judgment based on others’ opinions over multiple rounds—is an effective methodology. Based on the empirical results from Experiments (1) and (6), we present in Table 4: (1) aggregated policy decisions for each belief category after the final round, and (6) aggregated policy decisions for each belief category before any-
 debate.
Table 4: Aggregate policy decisions by belief category
(1)After debate (6)Before debate Raise Hold Lower Raise Hold Lower
Strong Hawkish 30 29 1 33 22 5 Moderately Hawkish 28 32 0 27 27 6 Neutral 31 136 13 45 117 18 Moderately Dovish 3 53 4 15 36 9 Strong Dovish 4 46 10 15 32 13 Total 96 296 28 135 234 51
Furthermore, the aggregated policy decision counts for "Raise", "Hold", and "Lower" in Experiment (5) without belief information are 111, 280, and 29 respectively. From Experiment (5) results, we observe that regardless of belief type, there is a consistent predictive bias toward "Hold", followed by "Raise" and then "Lower". This bias persists even after incorporating belief information. Comparing Experiment (5) with (6), we note that providing belief information somewhat mitigates the tendency to-
ward "Hold" dominance, resulting in more diverse policy decision outcomes. By allowing each agent to generate diverse opinions based on initial beliefs in Experiment (1) and then facilitating their

14 K. Takano et al.
mutual exchange, we achieve the optimal results shown in 2. Figure 5 illustrates the policy decision changes resulting from the debate process.
Table 5: Transition Matrix
(6)Before debate Raise Hold Lower
Raise 80 55 0 (1)After debate Hold 16 217 1 Lower 0 24 27
6 Conclusion
In this study, we proposed a structured modeling approach that simulates the FOMC’s collective decision-making process using multiple large language models. Each agent integrates policy texts and macroeconomic indicators, updates its belief through debate, and makes a final prediction. We also introduced a latent belief variable and theoretically showed that it mediates the relationship between input information and the agent’s decision, thereby enhancing the interpretability of agent behavior. We-
 evaluated the method on 60 meetings held between 2000 and 2025. The full model that includes both debate and beliefs reached an F1 score of 0.48, outperforming versions that remove the debate, the beliefs, the Beige Book, or the macroeconomic indicators. The ablation study showed that the Beige Book is especially important for accuracy, and that the debate rounds lessen the strong Hold bias seen when the agents do not interact. Several limitations remain in this study: The belief space is small a-
nd discrete, the framework relies on a single language model family, and the experiments cover only the FOMC. For further study, we will test continuous belief spaces, introduce safeguards against hallucination, and apply the framework to other central bank policy committees such as the European Central Bank and the Bank of Japan.
A Proof of Lemma
A.1 Proof of Lemma 1
Proof. Using the law of total probability, we can marginalize over the latent policy belief θ to express the label generation probability at round t + 1 as:
PLLM z(t+1)
i | x, v, Z(t), φi =
X
θ∈Θ
P z(t+1)
i , θ | x, v, Z(t), φi
=
X
θ∈Θ
P z(t+1)
i | θ, x, v, Z(t), φi P θ | x, v, Z(t), φi .

Modeling Hawkish-Dovish Latent Beliefs 15
Here, P (z(t+1)
i | θ, x, v, Z(t), φi) denotes the conditional probability that agent
i generates label z(t+1)
i given a known latent belief θ and observations x, v, and
Z(t). The term P (θ | x, v, Z(t), φi) represents the posterior distribution over stances after observing x, v, and Z(t). This completes the proof of Lemma 1.
A.2 Proof of Lemma 2
Proof. According to Assumption 11, we have:
P z(t+1)
i | θ, x, v, Z(t), φi = P z(t+1)
i | θ, φi (∀ θ ∈ Θ, t ≥ 0). (14)
Substituting this into the decomposition from Lemma 1, we obtain:
PLLM z(t+1)
i | x, v, Z(t), φi =
X
θ∈Θ
P z(t+1)
i | θ, φi P θ | x, v, Z(t), φi , (15)
which corresponds to the first part of Lemma 2. Next, we derive the posterior distribution P θ | x, v, Z(t), φi using Bayes’ theorem:
P θ | x, v, Z(t), φi = P x, v, Z(t) | θ, φi P θ | φi
P x, v, Z(t) | φi
. (16)
Since the denominator P (x, v, Z(t) | φi) does not depend on θ, we consider the proportional relationship instead. We now assume conditional independence of the text x, numerical data v, and previous responses Z(t) given the stance θ:
P x, v, Z(t) | θ, φi = P x, v | θ, φi P Z(t) | θ, φi . (17)
Substituting this into the numerator of Equation (16), we get:
P x, v | θ, φi P Z(t) | θ, φi P θ | φi . (18)
Furthermore, we assume that each element z(t)
j in Z(t) = {z(t)
j }n
j=1 is conditionally independent given the same belief θ:
P Z(t) | θ, φi =
n
Y
j=1
P z(t)
j | θ, φi . (19)
Substituting into Equation (16), we obtain:
P θ | x, v, Z(t), φi ∝ P x, v, Z(t) | θ, φi P θ | φi
=
h
P x, v | θ, φi P Z(t) | θ, φi
i
P θ | φi
= P x, v | θ, φi P θ | φi
n
Y
j=1
P z(t)
j | θ, φi .
This corresponds to the posterior decomposition in Equation (13) of Lemma 2. Therefore, under Assumption 11, both Lemma 1 and Lemma 2 hold.

16 K. Takano et al.
References
1. Axelrod, R.: The dissemination of culture: A model with local convergence and global polarization. Journal of conflict resolution 41(2), 203–226 (1997) 2. Balsategui, I., Gorjón, S., Marqués, J.M.: Artificial intelligence in the financial system: implications and progress from a central bank perspective. Financial Stability Review (Autumn) (2024) 3. Brandão-Marques, M.L., Meeks, M.R., Nguyen, V.: Monetary Policy with Uncertain Inflation Persistence. International Monetary Fund (2024) 4. Bruno, -
V., Shin, H.S.: Capital flows and the risk-taking channel of monetary policy. Journal of monetary economics 71, 119–132 (2015) 5. Chan, C.M., Chen, W., Su, Y., Yu, J., Xue, W., Zhang, S., Fu, J., Liu, Z.: Chateval: Towards better LLM-based evaluators through multi-agent debate. In: The Twelfth International Conference on Learning Representations (2024) 6. Couture, C.: Financial market effects of fomc projections. Journal of Macroeconomics 67, 103279 (2021) 7. Devlin, J., Chang, M.W., Lee, K., Tout-
anova, K.: BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. In: Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics. pp. 4171–4186. Association for Computational Linguistics (2019) 8. Du, Y., Li, S., Torralba, A., Tenenbaum, J.B., Mordatch, I.: Improving factuality and reasoning in language models through multiagent debate. In: Forty-first International Conference on Machine Learning (2023) 9. Estornell,-
 A., Liu, Y.: Multi-llm debate: Framework, principals, and interventions. Advances in Neural Information Processing Systems 37, 28938–28964 (2024) 10. Fanta, N., Horvath, R.: Artificial intelligence and central bank communication: the case of the ecb. Applied Economics Letters pp. 1–8 (2024) 11. Fujiwara, M., Suimon, Y., Nakagawa, K.: Treasury yield spread prediction with sentiments of beige book and macroeconomic data. In: 2023 14th IIAI International Congress on Advanced Applied Informatics (IIA-
I-AAI). pp. 337–342. IEEE (2023) 12. Fulton, C., Hubrich, K.: Forecasting us inflation in real time. Econometrics 9(4), 36 (2021) 13. Gatto, J., Basak, M., Srivastava, Y., Bohlman, P., Preum, S.M.: Scope of large language models for mining emerging opinions in online health discourse. arXiv (2024), https://arxiv.org/abs/2403.03336 14. Hansen, S., McMahon, M., Prat, A.: Transparency and deliberation within the fomc: A computational linguistics approach. The Quarterly Journal of Economics 133(2), 80-
1–870 (2018) 15. Jarociński, M., Karadi, P.: The macroeconomic impact of news about policy and news about the economy in ecb announcements. Research Bulletin 50 (2018) 16. Kim, S.: International transmission of us monetary policy shocks: Evidence from var’s. Journal of monetary Economics 48(2), 339–372 (2001) 17. Larochelle, H., Ranzato, M., Hadsell, R., Balcan, M., Lin, H. (eds.): Language Models are Few-Shot Learners, vol. 33. Curran Associates, Inc. (2020) 18. Liang, T., He, Z., Jiao, W., Wang,-
 X., Wang, Y., Wang, R., Yang, Y., Shi, S., Tu, Z.: Encouraging divergent thinking in large language models through multi-agent debate. In: Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing. pp. 17889–17904 (2024) 19. López-Moctezuma, G.: Sequential deliberation in collective decision-making: The case of the fomc (2016)

Modeling Hawkish-Dovish Latent Beliefs 17
20. Lux, T., Marchesi, M.: Scaling and Criticality in a Stochastic Multi-agent Model of a Financial Market. Nature 397(6719), 498–500 (1999) 21. Nakagawa, K., Suimon, Y.: Inflation rate tracking portfolio optimization method: Evidence from japan. Finance Research Letters 49, 103130 (2022) 22. Nakamura, E., Steinsson, J.: High-frequency identification of monetary nonneutrality: the information effect. The Quarterly Journal of Economics 133(3), 1283–1330 (2018) 23. OpenAI: ChatGPT (2023), https://op-
enai.com/blog/chatgpt/ 24. OpenAI: GPT-4 Technical Report (2023), https://arxiv.org/abs/2303.08774 25. Park, J.S., O’Brien, J., Cai, C.J., Morris, M.R., Liang, P., Bernstein, M.S.: Generative agents: Interactive simulacra of human behavior. In: Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology. UIST ’23, Association for Computing Machinery, New York, NY, USA (2023) 26. Qu, Y., Wang, J.: Performance and biases of large language models in public opinion simulatio-
n. Humanities and Social Sciences Communications 11(1), 1–13 (2024) 27. Radford, A., Narasimhan, K., Salimans, T., Sutskever, I.: Improving Language Understanding by Generative Pre-Training (2018), https://cdn.openai.com/researchcovers/language-unsupervised/language_understanding_paper.pdf 28. Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., Sutskever, I.: Language Models are Unsupervised Multitask Learners (2019), https://cdn.openai.com/betterlanguage-models/language_models_are_unsupervised_-
multitask_learners.pdf 29. Romer, C.D., Romer, D.H.: Federal reserve information and the behavior of interest rates. American economic review 90(3), 429–457 (2000) 30. Routledge, B.R.: Machine learning and asset allocation. Financial Management 48(4), 1069–1094 (2019) 31. Schelling, T.C.: Models of Segregation. The American Economic Review 59(2), 488–493 (1969) 32. Schonhardt-Bailey, C.: Deliberating American monetary policy: A textual analysis. MIT press (2013) 33. Takano, K., Hasegawa, N., Naito-
, A., Nakagawa, K.: Construction of the frb beige book corpus and analysis (japanese). Proceedings of The 37th Annual Conference of the Japanese Society for Artificial Intelligence pp. 3Xin4–33 (2023) 34. Takata, R., Masumori, A., Ikegami, T.: Spontaneous emergence of agent individuality through social interactions in large language model-based communities. Entropy 26(12), 1092 (2024) 35. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, L.u., Polosukhin, I.: Att-
ention is all you need. In: Advances in Neural Information Processing Systems. vol. 30. Curran Associates, Inc. 36. Yu, H., Hong, Z., Cheng, Z., Zhu, K., Xuan, K., Yao, J., Feng, T., You, J.: Researchtown: Simulator of human research community. arXiv (2024)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:33.877Z
- **Text Length:** 43058 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
