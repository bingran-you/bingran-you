# PDF Document: Chen et al. - 2025 - Do NOT Think That Much for 2+3= On the Overthinking of o1-Like LLMs.pdf

**File Path:** Chen et al. - 2025 - Do NOT Think That Much for 2+3= On the Overthinking of o1-Like LLMs.pdf

**Processed Date:** 2026-02-10T18:16:20.864Z

**File Size:** 3417.00 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2840

**Title:** Do NOT Think That Much for 2+3=? On the Overthinking of o1-Like LLMs

**Collection:** Large Files

---

## Extracted Text Content

On the Overthinking of o1-Like Models
Do NOT Think That Much for 2+3=? On the Overthinking of o1-Like LLMs
Xingyu Chen∗1,2 , Jiahao Xu∗1 , Tian Liang∗1 , Zhiwei He∗1,2 , Jianhui Pang1 , Dian Yu1 , Linfeng Song1 , Qiuzhi Liu1 , Mengfei Zhou2 , Zhuosheng Zhang2 , Rui Wang† 2 , Zhaopeng Tu†1 , Haitao Mi1 , and Dong Yu1
1Tencent AI Lab
2Shanghai Jiao Tong University
Generated Tokens
0
200
400
600
800
1000
Qwen2.5-72B
LLaMa3.3-70B
DeepSeek-Math-7B
Qwen2.5-Math-7B
Qwen2.5-Math-72B
GPT-4o
GPT-4o-mini
Gemini Pro
Claude-3.5
o1-Preview
o1-mini
DeepSeek-R1-Preview
QwQ-32B-Preview
7
5
77
74
113
12
13
12
conventional models
901
936
218
226
o1-like models
(a) Generated tokens on question “what is the answer of 2 plus 3?”
70
75
80
85
90
95
100
# Tokens
0 750 1500 2250 3000
Ours QwQ-32B-Preview
Qwen2.5-Math-72B
Llama3.3-70B
Llama3.1-405B
Deepseek-R1-Preview
Accuracy (%)
(b) Token-accuracy plot on MATH500
Figure 1: Illustration of overthinking issue in Figure (a): o1-like models (right panel) spend much more tokens than conventional LLMs (left and middle panels). Our method reduces the overthinking issue when applied to QwQ-32B-Preview (Figure (b)).
Abstract
The remarkable performance of models like the OpenAI o1 can be attributed to their ability to emulate human-like long-time thinking during inference. These models employ extended chain-of-thought (CoT) processes, exploring multiple strategies to enhance problem-solving capabilities. However, a critical question remains: How to intelligently and efficiently scale computational resources during testing. This paper presents the first comprehensive study on the prevalent issue of overthinking in these-
 models, where excessive computational resources are allocated for simple problems with minimal benefit. We introduce novel efficiency metrics from both outcome and process perspectives to evaluate the rational use of computational resources by o1-like models. Using a self-training paradigm, we propose strategies to mitigate overthinking, streamlining reasoning processes without compromising accuracy. Experimental results show that our approach successfully reduces computational overhead while pre-
serving model performance across a range of testsets with varying difficulty levels, such as GSM8K, MATH500, GPQA, and AIME.
∗Equal Contribution. †Correspondence to: Zhaopeng Tu <zptu@tencent.com> and Rui Wang <wangrui12@sjtu.edu.cn>.
1
arXiv:2412.21187v1 [cs.CL] 30 Dec 2024

On the Overthinking of o1-Like Models
1 Introduction
The OpenAI o1 model (OpenAI, 2024) and its replicas (Qwen, 2024; DeepSeek, 2024) exemplify the state-of-the-art in AI reasoning. Their success is largely attributed to mimicking human-like long-time thinking before responding to a question. Specifically, o1-like models cultivate a long chain-of-thoughts (CoT), explore multiple strategies, break down complex steps, and perform double-checking, which ultimately enhance their ability to tackle intricate reasoning tasks. This approach, known as “scali-
ng test-time compute”, involves allocating more computational resources during the model’s inference phase to generally yield more accurate responses.
While effective, a critical yet underexplored question remains: are we scaling test-time compute efficiently and intelligently? This study provides an initial exploration of this problem. We first observe that o1-like models exhibit significant overthinking issues. Specifically, they tend to expend excessive compute (in terms of tokens or thinking rounds) on questions that are exceptionally simple or for which the answer is already evident. For example, Figure 1(a) compares the token usage of o1-l-
ike models with conventional models when answering the question, “what is the answer of 2 plus 3?” On average, o1-like models consumed 1,953% more tokens than conventional models to reach the same answer. Figure 2 illustrates a concrete example where o1-style thinking results in generating 13 solutions for this trivially simple question. Across extensive analyses of mathematical benchmarks, we found these overthinking patterns: (1) contribute minimally to improving accuracy, (2) lack diversity in -
reasoning strategies, and (3) occur more frequently with simple problems.
The overthinking observed in o1-like models reveals inefficiency in inference and highlights fundamental limitations in their reasoning and decision-making processes. We assert that reasoning involves not only accuracy but also the application of the appropriate level of complexity based on the problem’s requirements. This insight motivates our exploration of studying and mitigating overthinking. To address this, we propose two metrics from both outcome and process perspectives to evaluate o1-like-
 models’ efficiency. These metrics help provide a comprehensive assessment of the efficiency of o1-like models, augmenting the commonly-used effectiveness metrics.
To mitigate overthinking without introducing external information, we adopt a self-training paradigm. With our proposed efficiency metrics, we streamline the generated responses by removing redundant solutions while maintaining basic reflexivity. Experimental results across testsets of varying difficulty levels (e.g., GSM8K, MATH500, GPQA, and AIME) demonstrate our approach’s effectiveness and robustness in mitigating overthinking issues. For instance, as shown in Figure 1(b), our approach can red-
uce token output by 48.6% while maintaining accuracy on the widely-used MATH500 testset as applied to QwQ-32B-Preview.
In summary, our contributions are three-fold:
1. We present the first study offering both a definitive explanation and comprehensive analysis of the overthinking issue, showing that o1-like LLMs often expend unnecessary computational resources on redundant solutions that contribute minimally to final outcomes.
2. We introduce metrics considering both outcome and process perspectives to assess the efficiency of o1-like models.
3. We explore several strategies to tackle the overthinking issue, significantly reducing token generation while maintaining model performance across testsets of varying difficulty.
2 Observing Overthinking Issues
In this section, we present a comprehensive analysis of outputs generated by o1-like models. First, we provide a basic illustration of the solution distribution in responses from these models (§ 2.1). We then identify two inefficiencies in long CoT responses: their limited contribution to accuracy (§ 2.2) and diversity (§ 2.3). To evaluate these inefficiencies empirically, we propose two efficiency metrics based on our observations. Finally, we present empirical results in § 2.4 and conclude that -
o1-like models often over-think, particularly with easier math problems.
2

On the Overthinking of o1-Like Models
Figure 2: An example of overthinking issue for QwQ-32B-Preview model’s output response that consists of 13 solutions. We also list the outputs of other conventional LLMs for reference.
2.1 Solution Distribution of o1-Like Models
Experimental Setup We conduct experiments on three testsets:
• ASDIV (Miao et al., 2020): an English math word problem corpus with 2,305 instances, each annotated with its problem type and grade level (1 to 6, indicating difficulty). The test set covers three main problem types (i.e., basic arithmetic operations, aggregative operations, and additional domain knowledge required), typically found in elementary schools.
• GSM8K (Cobbe et al., 2021): a dataset of high-quality, linguistically diverse grade school math word problems created by human problem writers. The test set includes 1,319 problems, with solutions often involving a sequence of elementary calculations using basic arithmetic. A middle school student should be able to solve every problem.
• MATH500 (Hendrycks et al., 2021): a challenging dataset consisting of problems from high school math competitions across seven subjects (e.g., Prealgebra, Algebra, Number Theory) and difficulty levels based on AoPS (ranging from 1 to 5). Problems in these competitions range from level 1, the easiest, often found in AMC 8 exams, to level 5, like those in AIME.
The overall difficulty levels of the test sets are ASDIV < GSM8K < MATH500.
We mainly investigate two widely recognized o1-like models featuring visible long CoT: QwenQwQ-32B-Preview and DeepSeek-R1-Preview. QwQ-32B-Preview is an open-source model, while DeepSeek-R1-Preview is accessible only through a web interface. Given DeepSeek-R1-Preview’s daily message limit of 50, we evaluated this model solely on the MATH500 test set.
Solution Distribution In this paper, we define solution as part of the full model generation that contains an answer explicitly. For example, in Figure 2, each solution in the QwQ generation contains the answer 5. We use the Llama-3.3-70B model to separate solutions from generated responses. Figure 3 shows the distribution of solution counts in generated responses. Generally, o1-like models produce 2 to 4 solution rounds for most instances, covering 76% to 85% of cases for
3

On the Overthinking of o1-Like Models
Figure 3: Distribution of solution counts in generated responses for different test sets and models (QwQ-32B-Preview (“QwQ”) and DeepSeek-R1-Preview (“R1”)).
QwQ-32B-Preview across the test sets and 74% for DeepSeek-R1-Preview on the MATH500 test set. Regarding different test sets, QwQ-32B-Preview tends to generate more solutions for easier test sets. For instance, the average number of solutions of QwQ model on the easiest ASDIV test set is 3.6, whereas on the most difficult MATH500 test set, it is 2.8.
(a) QwQ-32B-Preview (b) DeepSeek-R1-Preview
Figure 4: Average rounds of solutions (“#Solutions”) and tokens (“#Tokens”) in responses generated by (a) QwQ-32B-Preview and (b) DeepSeek-R1-Preview across different difficulty levels of the MATH500 test set.
To empirically validate this finding, we conducted an analysis across various difficulty levels in the MATH500 test set, as illustrated in Figure 4. Both QwQ-32B-Preview and DeepSeek-R1-Preview generate more solution rounds for problems at easier levels 1-2 (e.g., averaging 3.75 rounds and 3.35 rounds, respectively) compared to levels 4-5 (e.g., averaging 3.0 rounds and 2.7 rounds, respectively), despite the number of tokens consistently increasing with the difficulty level. These results support -
our claim that o1-like models tend to generate more solution rounds for easier math problems.
2.2 Efficiency on Accuracy Improvements
Intuition In the example depicted in Figure 2, we observe that the initial round of solutions already yields the correct answer. Subsequent solutions, which account for the majority of generated tokens, do not enhance accuracy. Based on this observation, we empirically investigate whether
4

On the Overthinking of o1-Like Models
later solutions contribute to accuracy improvements. Specifically, for all cases where o1-like models produce the correct answer in the response, we calculate the distribution of occurrences for the first correct answer, termed the “first correctness distribution”. If more correct answers appear in earlier solutions, then the subsequent solutions contribute minimally to accuracy improvement, indicating reduced efficiency.
Figure 5: Distribution of occurrences for the first correct answer.
Observation Figure 5 illustrates the first correctness distribution across the test sets and models. In more than 92% of cases, the initial round of solutions produces the correct answer. Notably, the first round generally comprises less than 60% of the total tokens generated, suggesting that the extended CoT might not significantly enhance accuracy. For instance, the average length of the first round of solutions for QwQ-32B-Preview on the ASDIV test set is 287 tokens, constituting only 38.7% of -
the entire response. These results suggest that later solutions marginally contribute to improvements in accuracy.
Outcome Efficiency Metric Based on the above observation, we propose an outcome efficiency metric to empirically evaluate how effectively later solutions contribute to accuracy improvements. The outcome efficiency metric, denoted ξO, is defined by the following formula:
ξO = 1
N
N
∑
i=1
σi
Tˆi
Ti
(1)
where N is the number of instances in a given test set, Ti is the total number of tokens produced for
the i-th instance, and Tˆi denotes the efficient tokens that contribute to reaching the correct answer:
Tˆi =
(
#tokens to first arrive at correct answer, σi = 1 Ti, σi = 0
σi denotes whether the evaluated model can produce a correct answer in the response:
σi =
(
1, if at least one solution in response is correct 0, otherwise
Intuitively, if a model correctly answers at an early stage, the tokens generated thereafter do not contribute to improving accuracy and are considered inefficient. Consider Figure 2 as an example: The first solution correctly addresses the problem with Tˆ = 39. Consequently, ξO = 39
901 = 4.3%,
which can be considered extremely inefficient.
2.3 Efficiency on Diverse Thinking
Intuition Some researchers might argue that while solving an easy math problem may appear straightforward, approaching it from different perspectives can deepen understanding and build flexibility in mathematical thinking, which is also valuable. Consider the example output of QwQ32B-Preview in Figure 2: Solution 1 states the basic fact that 2 plus 3 equals 5; Solution 2 breaks the addition into smaller steps; Solution 3 uses a counting objects analogy. These three solutions provide different pers-
pectives. However, Solution 4 repeats Solution 3, and Solution 5 repeats Solution 2 using similar perspectives. In this section, we empirically examine the diversity among solutions within a response.
Observation To empirically evaluate whether later solutions provide new perspectives, we introduce the “distinctness ratio” as the measure for the ratio of distinct solutions for each data index.
5

On the Overthinking of o1-Like Models
Consider Ri = {si1, . . . , sim, . . . , sMi
i } as the set of Mi solutions in the i-th instance response. Let
Sm = {s1m, . . . , skm, . . . , sKm} be the set of m-th solutions in the responses of all instances in the test
subset.1 The distinctness ratio is defined as:
Dism = ∑kK=1 τkm
K where
τkm =
(
1, if Φ(skm) ⊈ {Φ(sk1), . . . , Φ(sm−1
k )}
0, otherwise
In this context, Φ(skm) is the solution perspective of skm. We use GPT-4o to cluster the solutions
for each instance into groups via a prompt like (Ye et al., 2024).2 The clustering results for the QwQ-32B-Preview response in Figure 2 are:
cluster1 [Solution 1, Solution 6, Solution 11] stating or affirming the basic arithmetic fact that 2 plus 3 equals 5. cluster2 [Solution 2, Solution5] breaking down the addition into smaller, simpler steps to reach the result. cluster3 [Solution 3, Solution 4] using a practical analogy of counting objects to explain the addition. cluster4 [Solution 7] using subtraction as a reverse check to verify the addition result. cluster5 [Solution 8] using algebraic manipulation and solving simple equations -
to confirm the result. cluster6 [Solution 9, Solution 10] converting numbers into different systems (binary and Roman numerals) to verify the result. cluster7 [Solution 12, Solution 13] considering specific contexts or frameworks like modular arithmetic or programming which could change traditional addition results.
Figure 6: Ratio of whether a solution provides a new perspective for each index.
Figure 6 displays the distinctness ratio for each solution index. Intuitively, the ratio for Solution#1 is always 100%, as it has no preceding solutions, thus τ ≡ 1 for all instances. Generally, the ratio decreases with higher indices, indicating that later solutions often repeat earlier ones. For example, the distinctness ratios for Solution#4 across test sets are mostly below 30%, lower than Solution#3, which is above 45%. In test sets other than ASDIV, the ratio of Solution#2 significantly decr-
eases, underperforming Solution#3. By reviewing outputs, we find that Solution#2 often double-checks answers from Solution#1 using the same perspective. Subsequently, Solution#3 attempts to solve the problem from a new perspective.
Process Efficiency Metric Based on the above observation, we propose a process efficiency metric to empirically evaluate the contribution of later solutions to solution diversity. The process efficiency metric, denoted ξP, is calculated using the formula:
ξP = 1
N
N
∑
i=1
Di
Ti
(2)
1If a response does not contain the m-th solution (i.e. Mi<m), that response is excluded from the set, hence K does not necessarily equal the number of test set instances N. 2Refer to Appendix A.2 for clustering prompt details.
6

On the Overthinking of o1-Like Models
Models Accuracy Response Efficiency
#Solution #Token Outcome Process
ASDIV
Llama-3.3-70B-Instruct 95.6 1.0 167.4 95.6% 100.0% Qwen2.5-Math-72B-Instruct 96.3 1.0 209.6 96.3% 100.0% QwQ-32B-Preview 96.2 3.6 714.8 41.8% 66.4%
GSM8K
Llama-3.3-70B-Instruct 92.6 1.0 235.4 92.6% 100.0% Qwen2.5-Math-72B-Instruct 95.8 1.0 312.1 95.8% 100.0% QwQ-32B-Preview 94.3 3.2 745.6 50.4% 67.7%
MATH500
Llama-3.3-70B-Instruct 75.4 1.0 575.0 75.4% 100.0% Qwen2.5-Math-72B-Instruct 86.8 1.0 561.5 86.8% 100.0% QwQ-32B-Preview 92.8 3.3 2409.2 52.2% 72.4% DeepSeek-R1-Preview 93.4 2.8 2168.6 58.9% 76.0%
Table 1: Model efficiency results of strong LLMs.
where Di represents the number of efficient tokens that contribute to the solutions’ diversity. Here, we intentionally exclude the factor σi to concentrate on diversity, independent of correctness.
Let Tim denote the number of tokens in solution sim. We define:
Di =
M
m∑=1
τim Tim
Intuitively, the tokens in a distinct solution are regarded as process efficient tokens. In the example shown in Figure 2, the 13 solutions are categorized into 7 distinct perspectives. Consequently, tokens
in Solutions 1, 2, 3, 7, 8, 9, and 12 are efficient, resulting in ξP = (39+109+39+29+29+19+59)
901 = 35.8%.
2.4 Empirical Efficiency Results
Table 1 presents the results on model efficiency. For comparison, we include two representative conventional large language models (LLMs): Llama-3.3-70B-Instruct and Qwen2.5-Math-72B-Instruct.
These conventional LLMs produce only a single solution, meaning that DTii = TTˆii = 1. Therefore, in
these cases, the outcome efficiency metric ξO = 1N ∑iN=1 σi equals accuracy, and the process efficiency
metric ξP = 1.0. In comparison, o1-like models generate significantly longer responses, which are less efficient in improving accuracy and solution diversity. We refer to the inefficient use of generated tokens as the “overthinking issue”.
Figure 7 presents the detailed efficiency results across various difficulty levels of the MATH500 test set. DeepSeek-R1-Preview consistently outperforms QwQ-32B-Preview in terms of both outcome and process efficiency on Levels 2-5. Notably, both models perform poorly on the simplest Level 1 problems, achieving less than 50% outcome efficiency, a pattern that corresponds with results observed on the easy ASDIV test set. These findings underscore that the overthinking issues faced by o1-like models -
are particularly pronounced with simpler math problems.
3 Mitigating Overthinking Issues
In this section, we explore several strategies aimed at enhancing the efficiency of o1-like models. We adopt the settings for LLM reasoning tasks and primarily utilize the self-training strategy (Zelikman et al., 2022; Ho et al., 2023), where the model itself generates the training data. Consistent with
7

On the Overthinking of o1-Like Models
(a) QwQ-32B-Preview (b) DeepSeek-R1-Preview
Figure 7: Efficiency results of (a) QwQ-32B-Preview and (b) DeepSeek-R1-Preview across different difficulty levels of the MATH500 testset.
previous studies, we employ the PRM12K dataset (Lightman et al., 2024) as our training dataset to generate self-training data. The QwQ-32B-Preview model serves as our testing platform because it is available for post-training.
3.1 Length Preference Optimization
Response #Solutions #Tokens Efficiency Outcome Process
Greedy 3.1 1434.8 55.6% 72.6% Shortest 2.5 1051.3 69.8% 80.3% Longest 4.1 2258.7 46.0% 66.4%
Table 2: Statistics on different types of generated responses based on the training data. “Greedy” denotes responses generated via greedy search; “Shortest” and “Longest” indicate the shortest and longest responses among 10 samples, respectively.
We began by assessing whether the model could produce more efficient responses. We generated 10 samples for each instance in the training dataset with a temperature of 1.0. We discard samples that failed to generate a correct answer. Table 2 presents the statistics of different types of generated responses. Our analysis of these sampled responses reveals that the shortest response performs better in terms of both outcome and process efficiency, using fewer rounds and tokens. These findings support-
 our initiative to enhance model efficiency through self-improvement.
We explore several effective post-training methods for self-improvement:
• Supervised Fine-Tuning (SFT; Wei et al. 2022a): This method involves fine-tuning a pre-trained model using positive synthetic data. The model learns to map inputs to preferred outputs by minimizing the cross-entropy loss between predicted and actual outputs. SFT enables the model to mimic the behavior demonstrated in training examples.
• Direct Preference Optimization (DPO; Rafailov et al. 2024): This method trains a model directly on human-preferred responses to increase the likelihood of preferred responses over unpreferred ones. DPO implicitly optimizes the objective by aligning reward functions with optimal policies.
8

On the Overthinking of o1-Like Models
• Reasoning Preference Optimization (RPO; Pang et al. 2024; Liu et al. 2024): This approach modifies the DPO loss by adding a negative log-likelihood (NLL) term on the preferred response. RPO enhances DPO training stability by maintaining desired formatting for generated content and preventing a decrease in the log probability of selected responses.
• Simple Preference Optimization (SimPO; Meng et al. 2024): This method addresses the discrepancy between the reward function and the generation metric during inference found in other preference optimization methods. SimPO incorporates techniques like adaptive margin and length regularization into DPO training.
Apart from the SFT method, which uses only the shortest sampled response as training data, the other three preference optimization methods require contrastive instance pairs (positive, negative). It is straightforward to use the response generated by greedy search as the negative example, aligning with the real-time inference scenario. However, in our preliminary experiments, we found it less effective than using the longest sampled response as the negative example. One possible reason is that the-
 longest sampled response provides a clearer contrastive signal.
3.2 Simplifying Responses to Further Enhance Efficiency
Positive Example #Solutions #Tokens Efficiency Outcome Process
Shortest Response 2.5 1051.3 69.8% 80.3% First-Correct Solutions (FCS) 1.1 681.0 99.5% 99.1% FCS + Reflection 1.9 878.7 78.4% 82.4% Greedily Diverse Solutions (GDS) 1.6 856.8 86.8% 94.2%
Table 3: Statistics on different types of generated responses based on the training data. “Greedy” denotes responses generated via greedy search; “Shortest” and “Longest” indicate the shortest and longest responses among 10 samples, respectively.
Although shorter sampled responses improve the efficiency of o1-like models, they still suffer from overthinking issues. Based on the observations in Section 2, where earlier solutions in the response are more efficient, we further simplify the responses to enhance efficiency. We propose three types of simplification strategies that differ in how they truncate the responses from the beginning:
• First-Correct Solutions (FCS): This strategy retains the earliest solutions that first arrive at the correct answer.
• FCS+Reflection: Since the majority of responses achieve the correct answer on the first solution (see Figure 5), maintaining only the First-Correct Solutions might cause o1-like models to revert to conventional LLM behavior. To counter this, we extend the approach to include the second solution that reaches the correct answer in positive examples, recalling the model’s long-reflective capability while maintaining efficiency.
• Greedily Diverse Solutions (GDS): Figure 6 demonstrates that the distinctiveness of Solution#2 significantly decreases because the second solution often double-checks answers from the first using the same perspective. Consequently, FCS+Reflection may reduce efficiency. To address this issue, we propose a simple heuristic that greedily expands solutions providing new perspectives. Additionally, this strategy includes more solutions when the second solution does not repeat the first, thereby incre-
asing diversity.
For each instance, we select the shortest result of each type from a set of 10 samples. Consequently, the three types of simplified responses may originate from different original responses.
9

On the Overthinking of o1-Like Models
Distribution Ratio
0%
20%
40%
60%
80%
100%
Number of Solutions
1 2 3 ≥4
1%
9%
35%
55%
1%
3%
87%
9%
0%
1%
3%
96% FCS
FCS+Ref. GDS
Figure 8: Distribution of solution counts in three types of simplified responses on the training data.
Table 3 presents the statistics for these three types of simplified responses. Notably, all three types of simplified responses enhance efficiency compared to the shortest sampled response. “FCS” is the most efficient, both in terms of outcome and process, using the fewest number of solution rounds and tokens. “FCS+Reflection” incorporates reflection, requiring approximately one additional solution round, which reduces both outcome and process efficiencies. “Greedily Diverse Solutions” serves as a-
 compromise, balancing the number of solutions and tokens, and achieving moderate to high efficiency. Figure 8 shows the distribution of solution counts in the simplified responses.
3.3 Experimental Results
Table 4 displays the results of the proposed efficiency-enhancing methods.
Performance of Length Preference Optimization Methods SFT only slightly reduces the number of solution rounds and tokens compared to the vanilla QwQ-32B-Preview model, underperforming the preference optimization methods. Among these methods, SimPO achieves the best results, reducing the number of generated tokens by 31.1%, 21.8%, and 22.3% on ASDIV, GSM8K, and MATH500, respectively. Consequently, SimPO is used as the default post-training method in the subsequent experiments.
Performance of Response Simplification Methods As anticipated, the First-Correction Solutions strategy achieves the greatest reduction in length. However, this method decreases performance on the difficult MATH500 test set, which may require more rounds of reflection. The ”FCS+Reflection” approach alleviates this issue and surpasses the FCS method by 1.4% with an additional round of reflection. The ”Greedily Diverse Solutions” strategy balances performance with the number of generated tokens. Howe-
ver, it significantly underperforms compared to “FCS+Reflection”, reinforcing our claim that the difficult MATH500 testset requires the deep inference provided by o1-like models. Hence, we adopt “FCS+Reflection” as the default response simplification method.
Distribution Ratio
0%
20%
40%
60%
80%
100%
Number of Solutions
1 2 3 ≥4
1%
9%
35%
55%
1%
3%
87%
9% 0%
1%
3%
96% FCS
FCS+Ref. GDS
Accuracy (%)
80
85
90
95
100
MATH500 Level (Difficulty↑)
12345
85.7
94.2
97.1
96.9
100.0
83.6
93.8
97.1
97.8
97.7 QwQ Ours
#Solutions
1
2
3
4
MATH500 Level (Difficulty↑)
12345
1.9
2.0 1.8
2.0
2.0
2.9
3.1
3.6
3.8
3.6 QwQ
Ours
#Tokens (K)
0
1
2
3
4
MATH500 Level (Difficulty↑)
12345
2.4
1.3
0.9
0.7
0.7
3.9
2.3
1.8 1.5 1.1
QwQ Ours
(a) Accuracy
Distribution Ratio
0%
20%
40%
60%
80%
100%
Number of Solutions
1 2 3 ≥4
1%
9%
35%
55%
1%
3%
87%
9% 0%
1%
3%
96% FCS
FCS+Ref. GDS
Accuracy (%)
80
85
90
95
100
MATH500 Level (Difficulty↑)
12345
85.7
94.2
97.1
96.9
100.0
83.6
93.8
97.1
97.8
97.7 QwQ Ours
#Solutions
1
2
3
4
MATH500 Level (Difficulty↑)
12345
1.9
2.0 1.8
2.0
2.0
2.9
3.1
3.6
3.8
3.6 QwQ
Ours
#Tokens (K)
0
1
2
3
4
MATH500 Level (Difficulty↑)
12345
2.4
1.3
0.9
0.7
0.7
3.9
2.3
1.8 1.5 1.1
QwQ Ours
(b) #Solution
Distribution Ratio
0%
20%
40%
60%
80%
100%
Number of Solutions
1 2 3 ≥4
1%
9%
35%
55%
1%
3%
87%
9% 0%
1%
3%
96% FCS
FCS+Ref. GDS
Accuracy (%)
80
85
90
95
100
MATH500 Level (Difficulty↑)
12345
85.7
94.2
97.1
96.9
100.0
83.6
93.8
97.1
97.8
97.7 QwQ Ours
#Solutions
1
2
3
4
MATH500 Level (Difficulty↑)
12345
1.9
2.0 1.8
2.0
2.0
2.9
3.1
3.6
3.8
3.6 QwQ
Ours
#Tokens (K)
0
1
2
3
4
MATH500 Level (Difficulty↑)
12345
2.4
1.3
0.9
0.7
0.7
3.9
2.3
1.8 1.5 1.1
QwQ Ours
(c) #Token
Figure 9: Detailed comparative results on the MATH500 testset across different difficulty levels.
Detailed Results on the MATH500 Testset Figure 9 presents the detailed results on the MATH500 testset across varying difficulty levels. Interestingly, our approach improves the accuracy for the easiest Level 1 from 97.7% to 100.0% while using only 63.6% of the tokens compared to the vanilla
10

On the Overthinking of o1-Like Models
Methods Accuracy Response Efficiency
#Solution #Token Outcome Process
ASDIV
Llama-3.3-70B-Instruct 95.6 1.0 167.4 95.6% 100% Llama-3.1-405B-Instruct 95.2 1.0 127.0 95.2% 100% Qwen2.5-Math-72B-Instruct 96.3 1.0 209.6 96.3% 100% QwQ-32B-Preview 96.2 3.5 741.8 41.9% 66.5% SFTShortest Response 96.2 3.4 725.3 44.8% 68.2% +DPOShortest Response 96.7 3.0 583.4 49.5% 69.7% +RPOShortest Response 96.5 3.0 576.5 49.5% 70.4% +SimPOShortest Response 96.6 2.7 511.0 53.5% 71.5% +SimPOFirst-Correct Solution 96.7 1.2 271.3 92.8% 96.4% +SimPOFCS+Reflection 96.6 2.0 381.6 68.5% 78.3% +SimPOG-
reedily Diverse Solutions 96.3 1.6 332.5 80.1% 88.1%
GSM8K
Llama-3.3-70B-Instruct 92.6 1.0 235.4 92.6% 100% Llama-3.1-405B-Instruct 95.6 1.0 186.7 95.6% 100% Qwen2.5-Math-72B-Instruct 95.8 1.0 312.1 95.8% 100% QwQ-32B-Preview 94.3 3.1 772.8 50.7% 67.6% SFTShortest Response 94.8 3.0 749.5 53.7% 70.4% +DPOShortest Response 94.9 2.6 607.0 58.7% 71.7% +RPOShortest Response 94.8 2.6 593.3 59.3% 71.6% +SimPOShortest Response 94.2 2.3 554.2 63.5% 74.8% +SimPOFirst-Correct Solution 94.8 1.1 326.2 95.7% 98.9% +SimPOFCS+Reflection 95.1 1.6 416.6 79.4% 85.0% +SimPOG-
reedily Diverse Solutions 94.9 1.3 368.4 90.7% 95.0%
MATH500
Llama-3.3-70B-Instruct 75.4 1.0 575.0 75.4% 100% Llama-3.1-405B-Instruct 72.0 1.0 470.3 72.0% 100% Qwen2.5-Math-72B-Instruct 86.8 1.0 561.5 86.8% 100% QwQ-32B-Preview 92.8 3.2 2407.9 52.3% 71.2% SFTShortest Response 92.8 3.0 2359.5 53.4% 73.2% +DPOShortest Response 93.4 2.7 1929.5 60.2% 76.4% +RPOShortest Response 92.0 2.8 2015.7 57.4% 75.4% +SimPOShortest Response 92.4 2.6 1871.8 60.6% 77.0% +SimPOFirst-Correct Solution 91.8 1.4 1016.0 87.7% 94.2% +SimPOFCS+Reflection 93.2 1.9 1330.7 75.8% 83.4% -
+SimPOGreedily Diverse Solutions 92.2 1.6 1286.1 79.8% 90.6%
Table 4: Experimental results of the proposed efficiency enhancing methods.
11

On the Overthinking of o1-Like Models
Methods Accuracy Response Efficiency
#Solution #Token Outcome Process
GPQA
Llama-3.3-70B-Instruct 42.4 1.0 831.5 42.4% 100% Llama-3.1-405B-Instruct 53.5 1.0 604.3 53.5% 100% Qwen2.5-Math-7B-Instruct 31.8 1.0 762.0 31.8% 100% Qwen2.5-Math-72B-Instruct 46.5 1.0 682.7 46.5% 100% QwQ-32B-Preview 58.6 2.5 3098.1 50.9% 79.5% Ours 59.1 2.2 2085.7 56.2% 83.6%
AIME90
Llama-3.3-70B-Instruct 26.7 1.0 956.7 26.7% 100% Llama-3.1-405B-Instruct 22.2 1.0 1099.9 22.2% 100% Qwen2.5-Math-7B-Instruct 10.0 1.0 1109.8 10.0% 100% Qwen2.5-Math-72B-Instruct 16.7 1.0 955.4 16.7% 100% QwQ-32B-Preview 37.8 2.6 5879.8 34.7% 80.4% Ours 37.8 1.6 5070.0 37.0% 92.2%
Table 5: Results on the challenging GPQA and AIME testsets.
model. These results reaffirm the overthinking issues present in o1-like models, and our approach effectively mitigates them. Encouragingly, our approach also enhances performance on more challenging Levels 4-5 with fewer tokens, demonstrating the effectiveness and versatility of our approach in addressing overthinking issues.
3.4 Results on Challenging Testsets
To address the concerns of some researchers that our approach might weaken the ability of o1-like models to tackle complex problems requiring long-term reasoning, we validate our method using more challenging test sets, specifically GPQA and AIME:
• GPQA (Rein et al., 2023): a graduate-level dataset consisting of multiple-choice questions in subdomains of physics, chemistry, and biology. For our experiment, we select the highest quality subset, known as GPQA Diamond (composed of 198 questions).
• AIME90 (MAA Committees): a dataset from the American Invitational Mathematics Examination, which tests mathematical problem solving across multiple areas (e.g. algebra, counting, geometry, number theory, and probability). Because AIME 2024 contains only 30 examples, we combined the examples from AIME 2022-2024 to create a larger set, AIME90, with 90 examples.
As listed in Table 5, our approach maintains model performance while using fewer tokens, demonstrating the robustness and generalization capability of our approach.
4 Related Work
4.1 Scaling Test-Time Compute
Scaling test-time compute has been shown to enhance model performance, particularly in reasoning and solving complex tasks. This approach can be broadly categorized into two main lines: 1) scaling search space, and 2) scaling human-like thinking patterns.
Scaling search space One perspective is that current LLMs already possess strong reasoning capabilities (Li et al., 2024a), such that the correct solution often lies within their probability distribution. However, the auto-regressive decoding process typically fails to explore the full range of possible
12

On the Overthinking of o1-Like Models
solutions, thus limiting the model’s ability to find the optimal outcome. By scaling the search space, more opportunities are provided for the model to discover and select the correct solution within the probability distribution. A notable example of this approach is the self-consistency method (Wang et al., 2023b), where multiple responses are generated, and the final output is determined through majority voting. When equipped with an external reward function or scorer, this strategy can be adapt-
ed to techniques like best-of-n decoding (Lightman et al., 2024), weighted majority voting (Li et al., 2023; Khanov et al., 2024) and minimum bayes risk decoding (Heineman et al., 2024; Wu et al., 2024). Other strategies, such as Tree-of-Thought (Yao et al., 2024), Graph-of-Thought (Besta et al., 2024), and Monte Carlo Tree Search (Luo et al., 2024; Tian et al., 2024; Wan et al., 2024), attempt to scale the search space in different forms and structures.
Scaling human-like thinking patterns LLM reasoning is typically in the form of natural language. Therefore, it is natural for it to reason in human-like thinking patterns. Chain-of-thought (Wei et al., 2022b; Kojima et al., 2022) pioneered this trend by prompting the LLM to think step by step, rather than producing a final answer directly. This approach has been extended by subsequent works such as debating (Liang et al., 2024; Du et al., 2024; Xiong et al., 2023), self-correction (Kumar et al., 2-
024; Kamoi et al., 2024), self-critique (Ke et al., 2023; Lin et al., 2024; Yu et al., 2024), plan-and-solve (Wang et al., 2023a), etc. Recent works also explore LLM thinking in latent space to further simulate human cognitive processes (Hao et al., 2024; Goyal et al., 2024). Rather than applying these thinking patterns in isolation, o1-like models ensemble and scale these thinking patterns within a single response, forming an extremely long chain-of-thought that might span minutes or even hours d-
uring test time. As they reason, these models associate relevant knowledge, test various strategies, and retrace their steps when a particular approach proves unpromising–much like human thinking. Recent progress (OpenAI, 2024) has shown that the more time a model spends on thinking, the more accurate its response tends to be.
4.2 Efficient Thinking
Scaling the search space and scaling human-like thinking involves two distinct aspects of efficiency: efficient search and efficient thinking. However, few works specifically focus on efficient thinking in LLMs. Zhao et al. (2024) encourages the model to terminate reasoning by saying “I don’t know” when the problem is hard to solve. Han et al. (2024) introduces token-budget-aware reasoning, where the model is prompted with a specified token budget to guide its reasoning process. There are also sev-
eral contributions (Damani et al., 2024; Wang et al., 2024) made to predict the distribution of the computation budget and allocate the computation power based on the prompt’s difficulty. Another line of work emphasizes the early stopping strategy to save computation budget while reasoning (Manvi et al., 2024; Li et al., 2024b). Moreover, multi-agent framework utilize large LLMs for difficult tasks while small LLMs for simple tasks (Kirchner et al., 2024; Damani et al., 2024)
In summary, all the aforementioned works consider conventional models rather than o1-like models with longer chains-of-thought. In contrast, our work first identifies the overthinking problem in o1-like model. Additionally, instead of limiting the reasoning space or leaving the token budget to be specified by the user, we aim to train the model to learn how to think efficiently.
5 Conclusion
This study identifies a key challenge in o1-like models —- efficient and intelligent scaling of testtime computational resources. By highlighting the overthinking phenomenon and proposing efficiency metrics, we enhance our understanding of resource utilization in o1-like models. Our self-training based approach effectively mitigates overthinking, reducing unnecessary computation while maintaining performance. This work not only improves model efficiency but also sets the groundwork for future rese-
arch on optimizing computational resource allocation in AI reasoning tasks. Future directions include exploring adaptive compute strategies that dynamically adjust to problem complexity and refining efficiency metrics for broader model generalization.
13

On the Overthinking of o1-Like Models
Limitation
This study has the following limitations:
• Model Coverage: Our analysis of overthinking issues is based solely on two models: QwQ32B-Preview and DeepSeek-R1-Preview. These are the only two o1-like models that exhibit a visible long chain-of-thought (CoT) process. Additionally, our efficiency-enhancing methods are exclusively validated on QwQ-32B-Preview, the only o1-like model available for further posttraining. We plan to validate our findings and approaches on more o1-like models as they become accessible.
• Diversity Measurement: Our diversity measurement utilizes the powerful GPT-4o for clustering solutions, which is costly and difficult to replicate. In forthcoming revisions, we aim to employ more open-source LLMs for diversity assessment, such as LLama3.3-70B, to facilitate easier replication of the methodology.
• Bias in PRM12K Training Data: Our current validation relies solely on the widely-used PRM12K dataset, which might compromise the robustness of our approach. We intend to explore larger datasets (e.g., with 1 million instances) to address this concern.
This work does not solve the overthinking issue in o1-like models but lays the groundwork for future research.
References
Maciej Besta, Nils Blach, Ales Kubicek, Robert Gerstenberger, Michal Podstawski, Lukas Gianinazzi, Joanna Gajda, Tomasz Lehmann, Hubert Niewiadomski, Piotr Nyczyk, et al. Graph of thoughts: Solving elaborate problems with large language models. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 38, pp. 17682–17690, 2024.
Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse, and John Schulman. Training verifiers to solve math word problems. arXiv:2110.14168, 2021.
Mehul Damani, Idan Shenfeld, Andi Peng, Andreea Bobu, and Jacob Andreas. Learning how hard to think: Input-adaptive allocation of lm computation, 2024. URL https://arxiv.org/abs/2410. 04707.
DeepSeek. Deepseek-r1-lite-preview: Unleashing supercharged reasoning power. https:// api-docs.deepseek.com/news/news1120, 2024. Accessed: 2024-12-29.
Yilun Du, Shuang Li, Antonio Torralba, Joshua B Tenenbaum, and Igor Mordatch. Improving factuality and reasoning in language models through multiagent debate. In Forty-first International Conference on Machine Learning, 2024.
Sachin Goyal, Ziwei Ji, Ankit Singh Rawat, Aditya Krishna Menon, Sanjiv Kumar, and Vaishnavh Nagarajan. Think before you speak: Training language models with pause tokens. In The Twelfth International Conference on Learning Representations, 2024. URL https://openreview.net/forum? id=ph04CRkPdC.
Tingxu Han, Chunrong Fang, Shiyu Zhao, Shiqing Ma, Zhenyu Chen, and Zhenting Wang. Tokenbudget-aware llm reasoning. arXiv preprint arXiv:2412.18547, 2024.
Shibo Hao, Sainbayar Sukhbaatar, DiJia Su, Xian Li, Zhiting Hu, Jason Weston, and Yuandong Tian. Training large language models to reason in a continuous latent space, 2024. URL https: //arxiv.org/abs/2412.06769.
David Heineman, Yao Dou, and Wei Xu. Improving minimum bayes risk decoding with multiprompt. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pp. 22525–22545, 2024.
14

On the Overthinking of o1-Like Models
Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, and Jacob Steinhardt. Measuring mathematical problem solving with the MATH dataset. In NeurIPS, 2021.
Namgyu Ho, Laura Schmid, and Se-Young Yun. Large language models are reasoning teachers. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 14852–14882, 2023.
Ryo Kamoi, Yusen Zhang, Nan Zhang, Jiawei Han, and Rui Zhang. When can llms actually correct their own mistakes? a critical survey of self-correction of llms. Transactions of the Association for Computational Linguistics, 12:1417–1440, 2024.
Pei Ke, Bosi Wen, Zhuoer Feng, Xiao Liu, Xuanyu Lei, Jiale Cheng, Shengyuan Wang, Aohan Zeng, Yuxiao Dong, Hongning Wang, et al. Critiquellm: Scaling llm-as-critic for effective and explainable evaluation of large language model generation. corr, abs/2311.18702. detection for generative large language models. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pp. 9004–9017, 2023.
Maxim Khanov, Jirayu Burapacheep, and Yixuan Li. Args: Alignment as reward-guided search. In The Twelfth International Conference on Learning Representations, 2024.
Jan Hendrik Kirchner, Yining Chen, Harri Edwards, Jan Leike, Nat McAleese, and Yuri Burda. Proververifier games improve legibility of llm outputs, 2024. URL https://arxiv.org/abs/2407.13692.
Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, and Yusuke Iwasawa. Large language models are zero-shot reasoners. Advances in neural information processing systems, 35: 22199–22213, 2022.
Aviral Kumar, Vincent Zhuang, Rishabh Agarwal, Yi Su, John D Co-Reyes, Avi Singh, Kate Baumli, Shariq Iqbal, Colton Bishop, Rebecca Roelofs, et al. Training language models to self-correct via reinforcement learning. arXiv preprint arXiv:2409.12917, 2024.
Chen Li, Weiqi Wang, Jingcheng Hu, Yixuan Wei, Nanning Zheng, Han Hu, Zheng Zhang, and Houwen Peng. Common 7b language models already possess strong math capabilities, 2024a. URL https://arxiv.org/abs/2403.04706.
Yifei Li, Zeqi Lin, Shizhuo Zhang, Qiang Fu, Bei Chen, Jian-Guang Lou, and Weizhu Chen. Making language models better reasoners with step-aware verifier. In Anna Rogers, Jordan Boyd-Graber, and Naoaki Okazaki (eds.), Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 5315–5333, Toronto, Canada, July 2023. Association for Computational Linguistics. doi: 10.18653/v1/2023.acl-long.291. URL https://aclanthology. org/2023.acl-long.291.
Yiwei Li, Peiwen Yuan, Shaoxiong Feng, Boyuan Pan, Xinglin Wang, Bin Sun, Heda Wang, and Kan Li. Escape sky-high cost: Early-stopping self-consistency for multi-step reasoning. In The Twelfth International Conference on Learning Representations, 2024b. URL https://openreview.net/forum? id=ndR8Ytrzhh.
Tian Liang, Zhiwei He, Wenxiang Jiao, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Shuming Shi, and Zhaopeng Tu. Encouraging divergent thinking in large language models through multiagent debate. In Yaser Al-Onaizan, Mohit Bansal, and Yun-Nung Chen (eds.), Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pp. 17889–17904, Miami, Florida, USA, November 2024. Association for Computational Linguistics. doi: 10.18653/v1/2024. emnlp-main.992. URL https://aclanthology-
.org/2024.emnlp-main.992.
Hunter Lightman, Vineet Kosaraju, Yuri Burda, Harrison Edwards, Bowen Baker, Teddy Lee, Jan Leike, John Schulman, Ilya Sutskever, and Karl Cobbe. Let’s verify step by step. In The Twelfth International Conference on Learning Representations, 2024. URL https://openreview.net/forum? id=v8L0pN6EOi.
15

On the Overthinking of o1-Like Models
Zicheng Lin, Zhibin Gou, Tian Liang, Ruilin Luo, Haowei Liu, and Yujiu Yang. CriticBench: Benchmarking LLMs for critique-correct reasoning. In Lun-Wei Ku, Andre Martins, and Vivek Srikumar (eds.), Findings of the Association for Computational Linguistics: ACL 2024, pp. 1552–1587, Bangkok, Thailand, August 2024. Association for Computational Linguistics. doi: 10.18653/v1/ 2024.findings-acl.91. URL https://aclanthology.org/2024.findings-acl.91.
Zhihan Liu, Miao Lu, Shenao Zhang, Boyi Liu, Hongyi Guo, Yingxiang Yang, Jose Blanchet, and Zhaoran Wang. Provably mitigating overoptimization in rlhf: Your sft loss is implicitly an adversarial regularizer. arXiv preprint arXiv:2405.16436, 2024.
Liangchen Luo, Yinxiao Liu, Rosanne Liu, Samrat Phatale, Harsh Lara, Yunxuan Li, Lei Shu, Yun Zhu, Lei Meng, Jiao Sun, et al. Improve mathematical reasoning in language models by automated process supervision. arXiv preprint arXiv:2406.06592, 2024.
Rohin Manvi, Anikait Singh, and Stefano Ermon. Adaptive inference-time compute: Llms can predict if they can do better, even mid-generation, 2024. URL https://arxiv.org/abs/2410.02725.
MAA Committees. Aime problems and solutions. https://artofproblemsolving.com/wiki/ index.php/AIME_Problems_and_Solutions.
Yu Meng, Mengzhou Xia, and Danqi Chen. Simpo: Simple preference optimization with a referencefree reward. In Advances in Neural Information Processing Systems (NeurIPS), 2024.
Shen-Yun Miao, Chao-Chun Liang, and Keh-Yih Su. A diverse corpus for evaluating and developing english math word problem solvers. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 2020.
OpenAI. Learning to reason with llms. https://openai.com/index/ learning-to-reason-with-llms, 2024.
Richard Yuanzhe Pang, Weizhe Yuan, He He, Kyunghyun Cho, Sainbayar Sukhbaatar, and Jason E Weston. Iterative reasoning preference optimization. In The Thirty-eighth Annual Conference on Neural Information Processing Systems, 2024. URL https://openreview.net/forum?id=4XIKfvNYvx.
Qwen. Qwq: Reflect deeply on the boundaries of the unknown, November 2024. URL https: //qwenlm.github.io/blog/qwq-32b-preview/.
Rafael Rafailov, Archit Sharma, Eric Mitchell, Christopher D Manning, Stefano Ermon, and Chelsea Finn. Direct preference optimization: Your language model is secretly a reward model. Advances in Neural Information Processing Systems, 36, 2024.
David Rein, Betty Li Hou, Asa Cooper Stickland, Jackson Petty, Richard Yuanzhe Pang, Julien Dirani, Julian Michael, and Samuel R Bowman. Gpqa: A graduate-level google-proof q&a benchmark. arXiv preprint arXiv:2311.12022, 2023.
Ye Tian, Baolin Peng, Linfeng Song, Lifeng Jin, Dian Yu, Haitao Mi, and Dong Yu. Toward selfimprovement of llms via imagination, searching, and criticizing. arXiv preprint arXiv:2404.12253, 2024.
Ziyu Wan, Xidong Feng, Muning Wen, Stephen Marcus McAleer, Ying Wen, Weinan Zhang, and Jun Wang. Alphazero-like tree-search can guide large language model decoding and training. In Forty-first International Conference on Machine Learning, 2024.
Lei Wang, Wanyu Xu, Yihuai Lan, Zhiqiang Hu, Yunshi Lan, Roy Ka-Wei Lee, and Ee-Peng Lim. Plan-and-solve prompting: Improving zero-shot chain-of-thought reasoning by large language models. In Anna Rogers, Jordan Boyd-Graber, and Naoaki Okazaki (eds.), Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 2609–2634, Toronto, Canada, July 2023a. Association for Computational Linguistics. doi: 10.18653/ v1/2023.acl-long.147. URL https://a-
clanthology.org/2023.acl-long.147.
16

On the Overthinking of o1-Like Models
Xinglin Wang, Shaoxiong Feng, Yiwei Li, Peiwen Yuan, Yueqi Zhang, Boyuan Pan, Heda Wang, Yao Hu, and Kan Li. Make every penny count: Difficulty-adaptive self-consistency for cost-efficient reasoning, 2024. URL https://arxiv.org/abs/2408.13457.
Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc V Le, Ed H. Chi, Sharan Narang, Aakanksha Chowdhery, and Denny Zhou. Self-consistency improves chain of thought reasoning in language models. In The Eleventh International Conference on Learning Representations, 2023b. URL https: //openreview.net/forum?id=1PL1NIMMrw.
Jason Wei, Maarten Bosma, Vincent Zhao, Kelvin Guu, Adams Wei Yu, Brian Lester, Nan Du, Andrew M Dai, and Quoc V Le. Finetuned language models are zero-shot learners. In International Conference on Learning Representations, 2022a.
Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al. Chain-of-thought prompting elicits reasoning in large language models. Advances in neural information processing systems, 35:24824–24837, 2022b.
Ian Wu, Patrick Fernandes, Amanda Bertsch, Seungone Kim, Sina Pakazad, and Graham Neubig. Better instruction-following through minimum bayes risk. arXiv preprint arXiv:2410.02902, 2024.
Kai Xiong, Xiao Ding, Yixin Cao, Ting Liu, and Bing Qin. Examining inter-consistency of large language models collaboration: An in-depth analysis via debate. In Findings of the Association for Computational Linguistics: EMNLP 2023, pp. 7572–7590, 2023.
Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Tom Griffiths, Yuan Cao, and Karthik Narasimhan. Tree of thoughts: Deliberate problem solving with large language models. Advances in Neural Information Processing Systems, 36, 2024.
Junyi Ye, Jingyi Gu, Xinyun Zhao, Wenpeng Yin, and Guiling Wang. Assessing the creativity of llms in proposing novel solutions to mathematical problems. arXiv preprint arXiv:2410.18336, 2024.
Yue Yu, Zhengxing Chen, Aston Zhang, Liang Tan, Chenguang Zhu, Richard Yuanzhe Pang, Yundi Qian, Xuewei Wang, Suchin Gururangan, Chao Zhang, et al. Self-generated critiques boost reward modeling for language models. arXiv preprint arXiv:2411.16646, 2024.
Eric Zelikman, Yuhuai Wu, Jesse Mu, and Noah Goodman. Star: Bootstrapping reasoning with reasoning. Advances in Neural Information Processing Systems, 35:15476–15488, 2022.
Zirui Zhao, Hanze Dong, Amrita Saha, Caiming Xiong, and Doyen Sahoo. Automatic curriculum expert iteration for reliable llm reasoning, 2024. URL https://arxiv.org/abs/2410.07627.
17

On the Overthinking of o1-Like Models
A Appendix
A.1 Case Overview for Deepseek-R1-Preview
Figure 10: Deepseek-R1-Preview response for the query “What is the answer of 2 plus 3?”
A.2 Prompts for Clustering Solutions
Inspired by (Ye et al., 2024), we leverage GPT-4o to cluster the solutions for each instance into groups with the following prompt:
18

On the Overthinking of o1-Like Models
Criteria for clustering the mathematical solutions: 1. If the solutions used to arrive at the solutions are fundamentally different from each other, such as algebraic manipulation versus geometric reasoning, they can be considered novel; 2. Even if the results are the same, if the intermediate steps or processes involved in reaching those solutions vary significantly, the solutions can be considered different; 3. If the solutions relies on different assumptions or conditions, they should be consid-
ered different from each other; 4. A solution might generalize to a broader class of problems, while another solution might be specific to certain conditions. In such cases, they are considered distinct; 5. If one solution is significantly simpler or more complex than the others, it can be regarded as essentially novel, even if they lead to the same result.
Given the following mathematical problem: ***problem***
Solutions: Solution 1: ... Solution 2: ...
Please output the clusters strictly following the following format, each row containing a cluster, names, and reasons. Do not include any additional text or explanations outside of this format: cluster1 [solution names] reason for cluster cluster2 [solution names] reason for cluster cluster3 [solution names] reason for cluster ...
For example: cluster1 [Solution 1, Solution 3, Solution 5] similar algebraic approach using the volume formula and canceling terms or directly solving for the height. cluster2 [Solution 2, Solution 4] verifying the correctness and consistency of the formula and solution and considering unit checks or logical reasoning on how volume relates to base area and height.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:20.864Z
- **Text Length:** 53801 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
