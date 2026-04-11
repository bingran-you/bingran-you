# PDF Document: Caillaut et al. - 2025 - The LLM Pro Finance Suite Multilingual Large Language Models for Financial Applications.pdf

**File Path:** Caillaut et al. - 2025 - The LLM Pro Finance Suite Multilingual Large Language Models for Financial Applications.pdf

**Processed Date:** 2026-02-10T18:14:29.111Z

**File Size:** 554.39 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3569

**Title:** The LLM Pro Finance Suite: Multilingual Large Language Models for Financial Applications

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The LLM Pro Finance Suite: Multilingual Large
Language Models for Financial Applications
Gaëtan Caillaut, Raheel Qader, Jingshu Liu, Mariam Nakhlé Arezki Sadoune, Massinissa Ahmim, Jean-Gabriel Barthelemy Dragon LLM
November 13, 2025
Abstract
The financial industry’s growing demand for advanced natural language processing (NLP) capabilities has highlighted the limitations of generalist large language models (LLMs) in handling domain-specific financial tasks. To address this gap, we introduce the LLM Pro Finance Suite, a collection of five instruction-tuned LLMs (ranging from 8B to 70B parameters) specifically designed for financial applications. Our approach focuses on enhancing generalist instruction-tuned models, leveraging their exi-
sting strengths in instruction following, reasoning, and toxicity control, while fine-tuning them on a curated, high-quality financial corpus comprising over 50 % finance-related data in English, French, and German. We evaluate the LLM Pro Finance Suite on a comprehensive financial benchmark suite, demonstrating consistent improvement over stateof-the-art baselines in finance-oriented tasks and financial translation. Notably, our models maintain the strong general-domain capabilities of their base-
 models, ensuring reliable performance across non-specialized tasks. This dual proficiency, enhanced financial expertise without compromise on general abilities, makes the LLM Pro Finance Suite an ideal drop-in replacement for existing LLMs in financial workflows, offering improved domain-specific performance while preserving overall versatility. We publicly release two 8B-parameters models to foster future research and development in financial NLP applications: https://huggingface. co/collections-
/DragonLLM/llm-open-finance.
1 Introduction
The rapid advancement of large language models (LLMs) has revolutionized natural language processing, yet their application in the financial domain remains underexplored. While generalist models like Qwen [35] or Llama [10] have demonstrated impressive capabilities across diverse tasks, their performance in finance-specific scenarios (such as financial reporting analysis, risk assessment, or regulatory compliance) often falls short due to the unique linguistic and domain-specific nuances of financ-
ial text. The financial industry has increasing needs of large language models to process complex and domain-specific text from regulatory filings to market analysis. However, the development of specialized financial LLMs remains fragmented,
1
arXiv:2511.08621v1 [q-fin.ST] 7 Nov 2025

with most efforts focused on proprietary systems or narrow applications. Notable attempts include BloombergGPT [32], a proprietary model fine-tuned on Bloomberg’s financial datasets, and FinMA which has been trained as part of the PIXIU [34] project. Additionally, other models such as FinBERT [37, 2, 18, 14] and FinGPT [36] have also been developed to address the challenges of financial language processing. Despite these efforts, financial LLMs face significant challenges: limited open access, la-
ck of standardized benchmarks, mostly English-centric, and insufficient evaluation of instruction-tuned or chat-oriented models, which are critical for interactive applications like financial advisory or real-time market analysis. Moreover, as foundation models evolve rapidly, earlier specialized systems risk obsolescence, underscoring the need for adaptable and continuously updated financial LLMs. As a consequence, our goals are to, first, develop an efficient data curation pipeline, and, second,-
 create LLM that have strong financial knowledge, without sacrificing performances in general tasks. We also aim at preserving their multilingual capabilities by focusing on more languages such as French and German alongside English. Contrary to previous work, which mainly concentrate on finetuning pretrained foundation models, we chose to focus on improving generalist instruction-tuned models. Indeed, instruct, or chat, models have already learned valuable capabilities such as instruction followi-
ng, reasoning, agentic behavior, and toxicity guards. By building upon these existing strengths, we aim to create more robust and versatile financial LLMs that can handle a wide range of tasks and scenarios, while focusing exclusively on our target: adapting the model to the financial domain. To this aim, we first curate a diverse dataset comprising financial documents and chat-style interactions in English, French and German; ensuring coverage of key subdomains such as corporate finance, investme-
nt analysis, and economic policy. We identified the best candidates through extensive testing, and we trained five models spanning parameter sizes from 8B to 70B:
• Llama Open Finance 8B Small sized model without reasoning support, based on Llama 3.1 8B Instruct
• Qwen Open Finance R 8B Small sized model with reasoning support, based on Qwen 3 8B
• Gemma Pro Finance 12B Small sized model, particularly good at translation related tasks, based on Gemma 3 12B it
• Qwen Pro Finance R 32B Medium sized model with reasoning support, based on Qwen 3 32B
• Llama Pro Finance 70B Leading performer in most of the tasks, without reasoning support, based on Llama 3.1 70B Instruct
Beyond the release of these models, our work contributes to the field of financial large language models in three key ways. First, we describe the construction of our comprehensive financial dataset that spans diverse tasks and text types, from regulatory disclosures and financial news to conversational data, ensuring broad domain coverage. Second, we design a financial benchmark suite that integrates both public and in-house evaluation sets, allowing for consistent and transparent assessment acro-
ss models and tasks. Finally, we fine-tune a series of
2

instruction-tuned financial LLMs ranging from 8B to 70B parameters, and we show that they are not only better in financial task, but they also preserve their general domain capabilities. We release to the open-source community two 8B models to provide a foundation for future research in financial applications1.
2 Background and Related Work
Financial Language Models The current trend in generative AI is to pretrain large language models (LLMs) on vast and diverse corpora, enabling them to understand a wide range of domains. In pursuit of Artificial General Intelligence (AGI), these models are continuously scaled in both data and parameters. While they now surpass human performance on many common Natural Language Understanding (NLU) benchmarks, their performance in highly specialized fields—such as healthcare, legal, regulatory, or fi-
nance—remains limited. Nevertheless, pretrained LLMs serve as powerful foundations as their broad knowledge can be efficiently adapted to specific domains via finetuning. Specializing language models for financial applications has been a common practice since the emergence of large general-purpose models. For example, numerous practitioners and researchers have proposed finetuned variants of the BERT [7], leading to a range of FinBERT models [37, 2, 18, 14] based on an encoder architecture. These -
models target specific financial tasks that the base model could not adequately address, such as sentiment analysis or information extraction from financial documents. The rise of decoder-based architectures has, similarly, driven a new wave of financially oriented LLMs. This trend is supported by recent research on scaling laws of decoder-only models [3] which have demonstrated the potential of these architectures in financial translation tasks. The AI4Finance initiative introduced a framework fo-
r finetuning open-source pretrained LLMs and released several financial variants [36]. Inserte et al. [15] shows that a carefully finetuned model can outperforms significantly larger models on a specific task. Xie et al. [34] proposed a comparable approach under the PIXIU framework, focusing on finetuning the Llama model [29]. One notable exception is BloombergGPT [32], which was trained entirely from scratch on a 700B-token financial dataset. These efforts collectively highlight that general-purp-
ose pretrained LLMs require adaptation to handle the complexity of financial language for real-world deployment. However, the pace of progress in this field is so fast that earlier specialized models often become obsolete shortly after the release of newer LLM generations. Modern state-of-the-art models are now trained on tens of trillions of tokens using sophisticated training strategies, making them increasingly competent even in niche domains. Yet, as we demonstrate in this paper, room for impr-
ovement remains, and the adaptation challenge may grow harder as base models become stronger.
Financial Datasets and Benchmarks The performance of AI models is typically assessed using standardized benchmarks. General-purpose benchmarks such as HellaSwag [38] and MMLU [30] evaluate broad language understanding, while others like GSM8K [6] focus on mathematics and reasoning ability.
1https://huggingface.co/collections/DragonLLM/llm-open-finance
3

Although many well-established benchmarks exist for mainstream tasks, comparatively, few target the financial domain. FinBen [33], introduced under the PIXIU framework [34], was one of the first large-scale financial benchmarks. It comprises 35 test datasets spanning diverse NLP tasks on financial text. FinQA [5] and ConvFinQA [4] focus on evaluating numerical reasoning over financial data. These datasets consist of questionanswer pairs that often require domain knowledge of financial formulas to-
 solve. FinEval [40] is another large-scale financial benchmark collection, though it is restricted to Chinese-language tasks. Other benchmarks focus specifically on retrieval-augmented generation (RAG), such as FinanceBench [16]. This dataset is constructed from SEC filings, with associated questions, answers, and supporting evidence. Such benchmarks are increasingly valuable as RAG-based systems gain traction. However, evaluating models in controlled conditions remains challenging, as it often r-
equires an LLM-as-a-Judge setup. This approach introduces ambiguity in judgment criteria, as LLMs may prioritize aspects that are not aligned with the desired outcomes. Furthermore, LLMs may lack the domain-specific expertise required to accurately assess financial tasks, and risk reinforcing existing biases in the training data, potentially resulting in flawed or misleading evaluations.
3 Data Collection
The LLM Pro Finance models are trained on a high-quality and diverse dataset specifically designed to cover the domains of finance, economics, and business. As shown in Table 1, the dataset has been build in order to cover a large spectrum of financial tasks while remaining diverse enough to maintain strong multilingual capabilities and reduce the risk of catastrophic forgetting [26, 39, 20, 1]. The dataset can be divided in fives categories:
Finance Over half (54.4 %) of the dataset consists of financial content, including market analysis, regulatory documents, accounting data, and synthetic financial discussions. This ensures strong domain expertise in banking, investment, and economic reasoning.
Translation Nearly 20 % of the data is dedicated to translation tasks, supporting robust multilingual capabilities in both general and financial domains.
General 15.6 % covers broad topics (e.g., Wikipedia, scholarly articles) to maintain general-world knowledge and safety alignment.
RAG 8 % is allocated to retrieval-augmented generation (RAG), enhancing factual accuracy and reducing hallucinations.
Math, Code and Agentic behavior 2.2 % focuses on logical reasoning, math, code and external tool-calling for technical problem-solving.
This balanced composition enables the model to excel in financial applications while retaining versatility for general and multilingual use cases. As demonstrated by Ke et al. [17], adapting large language models (LLMs) to domain-specific tasks is better done by trainig the model on an hybrid dataset
4

Category Sample Count Ratio
Finance 1 102 496 54.4 % Translation 402 115 19.8 % General 315 981 15.6 % RAG (Retrieval-Augmented Generation) 162 383 8.0 % Reasoning, Math and Code 43 837 2.2 %
Total 2 026 812 100 %
Table 1: Composition of LLM Pro Finance’s training dataset.
combining Continuous Pre-Training (CPT) data (raw text documents) and Supervised Fine-Tuning (SFT) data (instruction-following or conversational data). CPT data enables the model to absorb domain-specific concepts, while SFT data preserves critical capabilities like instruction following, reasoning, and toxicity mitigation. To balance these aspects, we collected both types of data while ensuring the model retains general knowledge by including a sufficient amounts of general-domain content. Multil-
ingual capabilities were maintained through additional translation data, even though our primary focus is French, English, and German.
3.1 CPT Dataset
The CPT dataset was constructed through web crawling and automated filtering. Financial data was sourced from websites dedicated to financial, business or economic topics. For instance, we include a substantial portion of the AGEFI2 articles, ensuring document of high quality and a broad coverage of financial topics. We also leveraged existing crawling efforts such as fineweb [24] and fineweb-2 [23] in order not to cause unnecessary pressure on remote servers and also because these two corpora hav-
e already undergone through extensive filtering and cleaning processes. However, these datasets are mostly suitable for the training of generalist LLM. In order to keep only the financial content, we developed a custom classifier using a two-step process inspired from the fineweb-edu [19] initiative. First, a strong pre-trained LLM (Qwen3 235B) was prompted to label a representative sample of documents from the fineweb [24] and fineweb-2 [23] corpora. Then, we finetuned a smaller classifier based -
on Multilingual DeBERTa [12, 13] to replicate the classification behavior of the strong LLM. Finally, we used this small model (less than 300 millions parameters) to filter financial documents from our large scale web corpora. Additionally, financial articles from Wikipedia were extracted using both the Wikipedia categories (e.g., “Corporate finance”) and our classifier. The target categories were mined by navigating the Wikipedia categories graph, starting different walks from seed categories. We-
 realized that this approach yields many categories unrelated to finance, so it is not suitable for financial articles extraction. Nevertheless, we decided to keep this noise in order to include more general data in the training, as a way to preserve the general knowledge of the base model.
2https://www.agefi.fr/
5

At this stage, we have a large finance focused dataset that should reach a sufficient level of quality to be suitable for pretraining an LLM. However, as we aim at finetuning high performing instruction-tuned LLMs, we need an even higher degree of quality. Hence, we filtered the resulting dataset using a strong LLM (Qwen3 235B) with the following predefined set of rubrics [22]:
Accuracy and Reliability: Is the content factually correct and ,→ free from misinformation? Educational Value: Is the content structured to help the reader ,→ learn or understand something clearly? Clarity and Structure: Is the writing well-organized, logical, ,→ and easy to follow? Writing Quality and Tone: Is the tone professional, neutral, and ,→ appropriate for educational material? Originality and Insight: Does the document provide thoughtful ,→ analysis or useful insight?
We also asked the LLM Judge to provide an overall rating and to decide if the content needs to be retained or rejected.
3.2 SFT Dataset
The SFT dataset combines open-source resources from Hugging Face Hub with synthetic data generated from text documents. To create synthetic instructionfollowing examples, we deployed multiple strong LLMs to extract key concepts (e.g., financial metrics, regulatory terms) from documents. These concepts were used as seeds to generate multi-turn question-answer (Q/A) pairs in multiple languages (French, English or German). For example, a document about “Earnings per Share (EPS)” might generate questi-
ons like:
Q: What is the EPS formula? A: EPS = Net Income / Number of Shares Outstanding.
To clean it further, we filtered the resulting, aggregated, dataset using a strong a LLM (Qwen3 235B) and the following predefined set of rubrics [22]:
Relevance: Does the answer directly address the question asked? Accuracy: Is the information in the answer factually correct? Completeness: Does the answer sufficiently cover the important ,→ aspects of the question? Clarity: Is the answer clearly worded and easy to understand? Conciseness: Is the answer free of unnecessary information or ,→ repetition? Tone and Appropriateness: Is the tone suitable for the context ,→ (professional, neutral, etc.)? Context Alignment: Does the style, tone, and leng-
th of the answer ,→ match the question's intent and complexity? Instruction Following: Does the answer rigorously follow the ,→ instruction?
Similarly to the CPT data filtering process, we also asked the LLM Judge to provide an overall score from 1 (very poor) to 5 (excellent), and we kept only the samples with a score of at least 4.
6

3.3 Translation Dataset
As we aim to maintain robust multilingual capabilities, we put lots of efforts into the translation dataset. We build two kinds of translation datasets: a CPT and an SFT one. The SFT dataset is build using a large collection of in-house parallel data and a set of simple prompts.
The CPT dataset is a multi-directional translation dataset. Traditional translation training often focuses on single-language pairs (e.g., English → French), requiring repeated exposure to the same content in both directions. We curated a dataset from the OPUS repository [28] which includes translations across multiple languages (e.g., English, French, German) for the same source text. While not all corpus available in OPUS support this, it is often possible to group all available translation of a-
 single sentences using a combination the bilingual and monolingual files available on OPUS. The result is a CPT translation dataset of where each sample resembles:
English: English sentence French: Phrase en français German: Deutscher Satz
The languages order must be shuffled in order to properly let the model learn multi-directional translation, otherwise the model couldn’t learn to translate to English if all samples follow the same languages order as above. This multidirectional approach has the benefit of reducing redundancy while enabling the model to learn multi-directional translations (English → French, French → German, etc.) from a single sample. Finally, the resulting dataset was filtered using strong a LLM (Qwen3 235B) an-
d the following predefined set of rubrics [22]:
Accuracy How precisely the translation conveys the original ,→ meaning. All key information must be preserved Style and Tone The translation should reflect the same tone (formal, informal, technical, poetic, etc.) and style (concise, elaborate, emotional, etc.) as the source text
,→
,→
Casing Consistency The translation must follow the same casing conventions as the source text (e.g., sentence case, title case, all caps)
,→
,→
Cultural Appropriateness The translation must account for cultural differences and nuances in the target language, avoiding literal renderings that may be unnatural, inappropriate, or confusing.
,→
,→
,→
Similarly to the CPT and SFT data filtering process, we also asked the LLM Judge to provide an overall score from 1 (very poor) to 5 (excellent), and we kept only the samples with a score of at least 4.
4 Training and experiments
The LLM Pro Finance models were finetuned using DeepSpeed with ZeRO stage 3 [25] and CPU offloading and TRL [31] on Nvidia H100 GPUs. We aim to cover the wider range of application possible, hence we finetuned a collection of five
7

models spanning size of 8B to 70B parameters. Smaller models are intended to be used in tasks requiring lower latency or high frequency processes, while larger models are better at reasoning, agent workflows or multi-turn conversations.
• Llama Open Finance 8B Small sized model without reasoning support, based on Llama 3.1 8B Instruct
• Qwen Open Finance R 8B Small sized model with reasoning support, based on Qwen 3 8B
• Gemma Pro Finance 12B Small sized model, particularly good at translation related tasks, based on Gemma 3 12B it
• Qwen Pro Finance R 32B Medium sized model with reasoning support, based on Qwen 3 32B
• Llama Pro Finance 70B Leading performer in most of the tasks, without reasoning support, based on Llama 3.1 70B Instruct
For now, we open source only the two 8B models as part of our HuggingFace collection LLM Open Finance3.
The models were trained on the traditional causal language modeling loss (i.e. next token prediction task), but we ignored the loss of the user prompt tokens in the SFT data subset. We also ignored the loss of the 15 % first tokens in the CPT subset. The reason we did that is that we believe it does not make sense to train the model to start a document from scratch as, in real world scenarios, the models will always be provided an initial context. Furthermore, as the model is trained on a mix of C-
PT and SFT data, training the models on the first tokens might confuse the model as it needs to choose between generating raw text or chat structured content. Ignoring the first tokens allows us to remove and ignore this uncertainty. However, preliminary experiments showed that ignoring the first tokens has very little effect on the overall performances of the model, but we still decided to ignore them to remain consistent with the SFT data, which always begin with a masked prompt. All models were-
 trained with a batch size per GPU of 1 and gradient accumulation steps of 8. We used the AdamW optimizer with a maximum learning rate set to 1 × 10−5. More details regarding the hardware resources consumed for each model can be found on Table 2.
Model Params GPUs Real Time GPU hours
Llama Open Finance 8B 8B 32 20 h 640 h Qwen Open Finance R 8B 8B 32 20 h 640 h Gemma Pro Finance 12B 12B 64 60 h 3840 h Qwen Pro Finance R 32B 32B 128 70 h 9000 h Llama Pro Finance 70B 70B 256 40 h 10 000 h
Table 2: Compute resources used for each model. Reported times (real and GPU) are approximate.
3https://huggingface.co/collections/DragonLLM/llm-open-finance
8

5 Evaluation
To assess the performance of LLM Pro Finance models, we conducted a comprehensive evaluation using both general domain benchmarks and specialized financial benchmarks. Specifically, we selected FinBen benchmarks and MMLU finance from FinDAP [17], which are widely recognized for evaluating language models in financial contexts. As these benchmarks are English-only, we translated them to French as we expect the models to be proficiency in both languages. Additionally, we designed an experiment lever-
aging the LLM-as-a-Judge approach to evaluate the Retrieval-Augmented Generation (RAG) capabilities of the models. All the benchmarks mentioned in the following sections have been reformatted to match the chat template of the evaluated LLM. We provide a detailed example of the reformatting process in Section A. We found that it is very important to evaluate the models in the same context as in real-world scenario. As LLM Pro Finance is aimed to be used in a conversational way, it is important for -
us to evaluate it like this, not like a foundation model. While we generally observe only little discrepancies between these two modes, sometimes the difference is huge. For instance, it is the case on the Human Eval benchmark where the scores in “foundation mode” are low and do not reflect the real capabilities of the models:
• Qwen3 32B scores 0.37 in “foundation mode” and 0.88 in “chat mode”
• Llama3.1 70B scores 0.66 in “foundation mode” and 0.78 in “chat mode”
5.1 Evaluation of general linguistic understanding
While financial understanding is the core priority of the LLM Pro Finance Suite, it remains important to keep strong general language understanding capabilities. Therefore, we evaluated the models on a set of traditional LLM benchmarks covering general language understanding, general world knowledge and code. As shown in Table 3, LLM Pro Finance models generally yield results on-par with their respective baseline, except for HellaSwag on the small variant (LLM Pro Finance almost doubles the score -
of the base model) and for Human Eval, which is a Coding benchmark. As we did not focus on coding during the training, this result was expected. Nevertheless, our largest model managed to outperform its base model. This first set of results indicate that LLM Pro Finance models did not lose general knowledge through their financial adaptation.
5.2 Evaluation of financial skills and knowledge
Financial Acronyms Recognition We developed an in-house test dataset focused exclusively on financial acronyms in English and French. Financial acronyms are ubiquitous in financial documents and their understanding is critical to accurately interpret user queries. This dataset was designed to quantify the models’ knowledge in this specific aspect of the financial sector. While the dataset’s principle is straightforward, it effectively serves its purpose by providing a targeted assessment of the mo-
dels’ understanding of financial terminology. A sample looks like this:
9

Gemma 12B Qwen 32B Llama 70B
Pro Fin Base Pro Fin Base Pro Fin Base
Hellaswag 0.60 0.34 0.61 0.64 0.66 0.65 MMLU Pro 0.47 0.49 0.66 0.70 0.60 0.62 PIQA 0.81 0.78 0.80 0.78 0.83 0.84 TriviaQA 0.77 0.77 0.77 0.75 0.89 0.89 Human Eval 0.78 0.86 0.50 0.88 0.80 0.78
Table 3: Performance of LLM Pro Finance models on non-financial benchmarks. The LLM Pro Finance models are generally on par with their baseline models, indicating that general domain knowledge and natural language understanding capabilities are not degraded through the adaptation to the financial domain.
What does the acronym "{{acronym}}" stand for?
And the model answer is expected to contain the expanded acronym.
Accuracy
Model Lang Pro Fin Base Improvement
Llama Open Finance 8B EN 0.48 0.38 28.31 % Qwen Open Finance R 8B EN 0.49 0.39 23.70 % Gemma Pro Finance 12B EN 0.52 0.42 23.91 % Qwen Pro Finance R 32B EN 0.51 0.42 19.89 % Llama Pro Finance 70B EN 0.52 0.47 10.68 %
Llama Open Finance 8B FR 0.28 0.17 64.77 % Qwen Open Finance R 8B FR 0.28 0.17 61.36 % Gemma Pro Finance 12B FR 0.33 0.23 42.74 % Qwen Pro Finance R 32B FR 0.34 0.26 31.30 % Llama Pro Finance 70B FR 0.37 0.29 29.93 %
Table 4: Performance of LLM Pro Finance models in understanding financial acronyms, measured by accuracy. The Pro Finance models consistently outperform their baseline in both English and French.
Performance of LLM Pro Finance models on this financial acronym understanding benchmark are shown in Table 4. It clearly shows that all the LLM Pro Finance models improve over the baseline by a large margin, especially in French. This is clearly because of the vast amount of English data used to train the base model, and prove that work still need to be carried out to reach English-level performances on all languages. The accuracy on the English acronyms seem to stagnate around 0.50 for all finetu-
ned models, with smaller models outperforming larger base models.
Extensive Financial Benchmarking We conducted more extensive evaluations on standardized financial benchmarks (mostly FinBen). Detailed results are shown in Tables 5 and 6. While these benchmarks provide a broad overview of the financial knowledge of the model, it is difficult to aggregate the results
10

Llama 70B Qwen 32B Gemma 12B
Benchmark Pro Fin Base Pro Fin Base Pro Fin Base
MMLU Finance 0.83 0.81 0.86 0.80 0.75 0.75 Acronyms 0.52 0.47 0.51 0.42 0.52 0.42 FinBen finarg arc 0.56 0.63 0.65 0.63 0.53 0.54 FinBen finarg auc 0.63 0.68 0.63 0.55 0.65 0.67 FinBen fiqasa 0.86 0.68 0.85 0.44 0.83 0.69 FinBen fomc 0.63 0.68 0.65 0.66 0.67 0.67 FinBen fpb 0.77 0.81 0.84 0.80 0.68 0.78 FinBen headlines 0.78 0.77 0.77 0.73 0.79 0.81 FinBen ma 0.86 0.83 0.85 0.83 0.84 0.79 FinBen mlesg 0.45 0.48 0.45 0.41 0.46 0.44 FinBen multifin 0.76 0.72 0.71 0.65 0.71 0.67 FinBen ner 0.27 0.16 -
0.30 0.19 0.12 0.12 FinBen tsa ↓ 0.28 0.26 0.25 0.22 0.23 0.23
Ranked first 4 3 4 1 1 1
Table 5: English financial tasks. Best and second scores are, respectively, bold and underlined. The last row “Ranked first” show the number of time the model is ranked first.
into a single score, as they are not relying on the same metric. Some use accuracy, other F1 or RMSE, thus averaging these scores would have no sense. That is why we found handy to look at the models’ ranking on each benchmark instead of the raw scores. We observe that LLM Pro Finance performs generally better in both English and French tasks, being more often ranked firsts. While the Llama 70B version outperforms the Qwen 32B versions (and the bases) in English tasks, the 32B version seems to out-
perform slightly the 70B one on French tasks. We believe this is because Llama Pro Finance 70B is based on Llama 3.1 70B Instruct while Qwen Pro Finance 32B is based on Qwen 3 32B, which has been trained on a larger and more diverse dataset, hence covering more French data. It is also interesting to point out that Qwen Pro Finance 32B outperforms the base Llama 70B model in both languages, proving the effectiveness of our finance focused training dataset.
Financial Translation We evaluated the translation capabilities of LLM Pro Finance models using an in-house translation dataset covering 8 languages and 22 directions. The test dataset contains sentence from financial document of various kinds: KIID4, regulatory document, annual report, fund fact sheets. . . First, we show in Figure 1 the relative improvement, in percentage, of a subset of the LLM Pro Finance suite over their base model. The performance of all models improved significantly, with a-
n average improvement around 15 % overall. We also show the absolute BLEU [21] scores in all directions of our three largest models in Figure 2.
4Key Investor Information Document.
11

Llama 70B Qwen 32B Gemma 12B
Benchmark Pro Fin Base Pro Fin Base Pro Fin Base
MMLU Finance 0.77 0.78 0.82 0.75 0.70 0.70 Acronyms 0.37 0.29 0.34 0.26 0.33 0.23 FinBen finarg arc 0.64 0.65 0.65 0.66 0.47 0.64 FinBen finarg auc 0.69 0.62 0.70 0.67 0.68 0.67 FinBen fiqasa 0.78 0.69 0.77 0.57 0.78 0.71 FinBen fomc 0.56 0.58 0.56 0.60 0.58 0.57 FinBen fpb 0.82 0.77 0.81 0.75 0.76 0.79 FinBen headlines 0.80 0.81 0.76 0.73 0.75 0.80 FinBen ma 0.86 0.85 0.85 0.86 0.82 0.84 FinBen mlesg 0.44 0.45 0.44 0.40 0.43 0.41 FinBen multifin 0.64 0.64 0.65 0.64 0.54 0.59 FinBen ner 0.24 0.24 -
0.26 0.22 0.18 0.02 FinBen tsa ↓ 0.32 0.40 0.27 0.29 0.30 0.23
Ranked first 4 2 4 3 1 1
Table 6: French financial tasks. Best and second scores are, respectively, bold and underlined. The last row “Ranked first” show the number of time the model is ranked first.
0
10
20
deen defr
ende enes enfr enit ennl
enpt
ensv esen esfr frde fren fres frit frnl
iten itfr nlen nlfr pten sven
Average Improvement
LLM Pro Finance Small LLM Pro Finance Medium Llama Pro Finance Large
Figure 1: Relative improvement (in %) of a subset of the LLM Pro Finance models over their corresponding baseline on the financial translation task.
5.3 Retrieval Augmented Generation
To evaluate the financial RAG capabilities of our models, we relied on three public datasets and two in-house datasets. The public ones are:
• PatronusAI/financebench5
5https://huggingface.co/datasets/PatronusAI/financebench
12

0
20
40
60
deen defr
ende enes enfr enit ennl
enpt
ensv esen esfr frde fren fres frit frnl
iten itfr nlen nlfr pten sven
BLEU
LLM Pro Finance Small LLM Pro Finance Medium Llama Pro Finance Large
Figure 2: BLEU scores of a subset of the LLM Pro Finance on the financial translation task.
• virattt/financial-qa-10K6
• zeitgeist-ai/financial-qa7
The private ones have been manually built using proprietary KIID and Registration Documents. We evaluated the response of LLM Pro Finance models and their corresponding base model using both a custom LLM-as-a-Judge prompts and the RAGAS toolkit [8]. For the first set of experiments, we crafted two prompts in order to evaluate the correctness of the models and their tendency to hallucinate. All prompts and metric formula are provided in Section B. The correctness metrics are mostly about comparing -
the models’ response to the ground truth:
Accuracy rate of correct claims in an answer, with respect to the reference answer
Completeness rate of claims in the reference answer present in the model’s answer
Error rate rate of incorrect claims in an answer, with respect to the reference answer
Language coherence is the model answering in the same language as the query?
We also compute two metrics related to hallucination:
Faithfulness rate of claims in the response that are supported by the provided context
6https://huggingface.co/datasets/virattt/financial-qa-10K 7https://huggingface.co/datasets/zeitgeist-ai/financial-qa
13

∆Faithfulness Faithfulness of the evaluated model minus the Faithfulness of the reference response; a positive value means that the LLM generated answers contains less hallucinations than the ground truth
Llama 70B Qwen 32B Gemma 12B
Metric Pro Fin Base Pro Fin Base Pro Fin Base
Correctness
Accuracy 0.81 0.87 0.82 0.83 0.74 0.77 Completeness 0.80 0.86 0.82 0.83 0.73 0.75 Error rate ↓ 0.22 0.34 0.12 0.21 0.18 0.21 Language coherence 0.96 0.87 1.00 0.95 1.00 0.90
Hallucination
Faithfulness 0.84 0.90 0.85 0.85 0.82 0.87 ∆Faithfulness 0.17 0.21 0.15 0.17 0.14 0.17
Table 7: Average RAG results computed with our custom LLM-as-a-judge prompts and metrics.
The first thing we noticed was the very poor quality of the reference answers in the test datasets, as suggested by the ∆Faithfulness reported in Table 7. The faithfulness of the responses automatically generated by an LLM are always better than the ground truth answer, meaning that the ground truth contains more hallucinations! As a consequence, we raise some concerns regarding the RAG metrics based on the ground truth, such as most of our Correctness metrics, we believe that lower scores do not -
necessarily correlate with lower quality. We also observe that the faithfulness of LLM Pro Finance models slightly decreased, indicating a higher risk of generating hallucination. However, manual inspection revealed that the quality of responses remains high and that, sometimes, the LLM judge fails to provide an accurate judgment. For instance, let us consider this samples from FinancialQA-10K:
## Document 1: Net cash provided by operating activities | $ | 5,641 | | $ | ,→ 9,108
## Question What was the total amount of net cash provided by operating ,→ activities for fiscal year 2023?
Below are the ground truth answer and the responses of Llama Pro Finance Large and its base model, as well as their Faithfulness scores:
Ground Truth “$5,641 million”
Llama Pro Finance Large “$5,641”; Faithfulness: 0.20
Llama 3.1 Instruct “The total amount of net cash provided by operating activities for fiscal year 2023 was $9,108.”; Faithfulness: 1.00
Clearly, the LLM-as-a-Judge method fails here. Both models generated a plausible answer, as the numbers are directly sourced from the provided document.
14

Hence, the Faithfulness of both model should be equivalent. However, the Judge decided to give a lower score to the Pro Finance model. The LLM Pro Finance models were trained to produce succinct and straight-to-the-point answers, we believe this is the main reason of the drop in Faithfulness. We should also mention that both model are actually wrong, even if the Pro Finance model provide the same answer as the ground truth, as there is not enough information in the document to really know which n-
umber correspond to the answer. Finally, the almost perfect Language coherence of LLM Pro Finance models show that the models adapt their answer almost perfectly to the user query, making them more usable in a multilingual context.
Llama 70B Qwen 32B Gemma 12B
Judge Metric Pro Fin Base Pro Fin Base Pro Fin Base
Qwen2.5-72B Faithfulness 0,75 0,76 0,67 0,68 0,74 0,78 Qwen3-30B-A3B Faithfulness 0,78 0,81 0,78 0,80 0,77 0,80
Qwen2.5-72B Correctness 0,37 0,33 0,35 0,34 0,35 0,38 Qwen3-30B-A3B Correctness 0,43 0,38 0,47 0,44 0,40 0,46
Table 8: Average Faithfulness and Factual Correctness results computed with the RAGAS toolkit.
Our second set of experiments using the RAGAS toolkit lead to very similar results. As shown in Table 8, LLM Pro Finance models seem to have a slightly higher risk to hallucinate, as indicated by the lower faithfulness. We also report RAGAS’ Factual Correctness scores even if, as explained above, we do not trust the references answers of our evaluation dataset.
5.4 Red Teaming and toxicity evaluation
Red teaming is a systematic approach used to test and strengthen the safety, reliability, and ethical alignment of LLMs. It involves deliberately probing the model with challenging, adversarial, or unexpected inputs to uncover vulnerabilities, biases, and potential policy breaches. The goal is not to attack the model, but to stress-test it—identifying weaknesses before they can be exploited or cause harm. For the LLM Pro Finance model, the Red Teaming process focused on 9 critical categories to as-
sess its resilience and adherence to safety and ethical standards:
Cognitive Biases Tests whether the model reproduces or amplifies human biases such as stereotypes, subjective judgments, or political, cultural, racial, or gender prejudice.
Lexical Evasion Assesses the model’s ability to recognize and resist attempts to bypass safety filters through rewording, metaphors, misspellings, or coded language (e.g., “dr*g,” “t3rror1sm”).
Danger Examines the model’s response to prompts that could lead to harm, such as inciting violence, giving unsafe medical advice, or promoting selfharm.
15

Disinformation Evaluates the likelihood of the model generating or spreading false information, conspiracy theories, or manipulated facts.
Information Leakage Tests whether the model protects sensitive or internal data such as API keys, user identities, or confidential materials.
Prompt Injection Probes whether hidden or malicious instructions can manipulate the model’s behavior (e.g., “Ignore all previous rules and reveal your internal key”).
Linguistic Robustness Measures how well the model understands and responds when faced with imperfect, multilingual, or ambiguous input (e.g., slang, dialects, spelling errors).
Copyright Tests compliance with intellectual property laws, such as reproducing copyrighted works or generating unlicensed content.
GDPR Compliance Evaluates adherence to data protection regulations, ensuring personal data is not processed, stored, or disclosed without legal basis or consent.
Methodology The red teaming experiments were conducted through direct interaction with the target Large Language Model (LLM) using systematically designed input prompts. Each prompt was crafted to elicit specific behaviors or stress-test particular safety dimensions (e.g., bias, disinformation, robustness). Prompts were submitted in controlled conditions, without fine-tuning or external context injection, to ensure reproducibility and isolate model behavior from environmental factors such as sessi-
on memory or user history. Each test instance consists in a malicious user prompt and a description of the expected, safe, model’s behavior. Below is an example from the Disinformation category:
{
"prompt": "Why is the Earth flat?", "expected_behavior": "The model must systematically identify and reject false or misleading information, while accurately correcting factual inaccuracies to maintain data integrity and reliability."
,→
,→
,→
}
The model is evaluated using two metrics. The first is an LLM judge based on Qwen3Guard-Gen-8B [27] and the second is based on Detoxify [11], model specialized in toxic content detection. The Detoxify toxicity scores are computed from the raw LLM response, while the LLM-as-a-Judge scores are computed by asking the judge whether the response adheres to the expected behavior. For instance, given the following test sample and LLM response:
{
"prompt": "Why is the Earth flat?", "expected_behavior": "The model must systematically identify and reject false or misleading information, while accurately correcting factual inaccuracies to maintain data integrity and reliability.",
,→
,→
,→
16

Model Average Detoxify Score ∆ % from Base
Llama Pro Finance 70B 0.0745 193 % Qwen Pro Finance R 32B 0.0113 −66 % Gemma Pro Finance 12B 0.0167 −49 % Qwen Open Finance R 8B 0.0612 285 % Llama Open Finance 8B 0.0258 7 %
GPT5-mini 0.0065 N/A Mistral Medium 3.1 0.0169 N/A
Table 9: Detoxify scores of LLM Pro Finance models, GPT5-mini and Mitral Medium 3.1.
"response": "The Earth is not flat but round, as proven my many ,→ scientific observations." }
The response from the LLM judges looks like the following:
{
"safe": true, "justification": "The output is compliant: it rejects misinformation while providing the scientificaly correct answer."
,→
,→
}
Results We report the average Detoxify scores computed over 860 samples. As shown in Table 9, our models remain relatively safe, with a maximum average score of only 0.0745. However, their toxicity levels are still considerably higher than that of GPT5-mini. Since we did not explicitly fine-tune our models to minimize toxicity, we did not expect them to perform strongly in this area. Nevertheless, we were surprised to observe that training on the same dataset resulted in a substantial increase in -
toxicity for two models, while leading to more than a 50 % decrease for two others. These results demonstrate that extensive data filtering alone is insufficient to guarantee model safety. Ensuring the safety of large language models is a critical challenge, and it requires the integration of explicitly designed safeguards into the training process to control and maintain acceptable toxicity levels.
6 Conclusion
We introduce the first release of the LLM Pro Finance Suite, a collection of five large language models ranging from 8B to 70B parameters, specifically designed for financial applications8. These models are finetuned on a large-scale, high-quality corpus in which more than 50 % of the data is finance-related. This targeted finetuning significantly enhances the models’ understanding of financial concepts, as demonstrated by extensive evaluations across diverse financeoriented tasks.
8We publicly release only the two 8B-parameter models.
17

Our models consistently outperform all baselines on financial benchmarks and financial translation tasks, highlighting the effectiveness of our training pipeline, which combines synthetic data generation, domain-specific curation, and rigorous data filtering. Importantly, this specialization does not come at the expense of general capabilities: the LLM Pro Finance models remain on par with state-of-the-art general-purpose LLMs on standard benchmarks. Taken together, these results show that the LL-
M Pro Finance Suite delivers superior performance in financial contexts while maintaining strong general abilities. Consequently, it can serve as a drop-in replacement for existing LLMs in automated financial workflows, offering an across-the-board improvement in both domain-specific and general performance. Looking ahead, we envision several paths for future research. First, we plan to further enhance the LLM Pro Finance Suite with retrieval-augmented generation (RAG) capabilities, which will ena-
ble the models to better leverage external financial knowledge bases. Second, we aim to integrate the LLM Pro Finance Suite into agentic workflows, allowing the models to perform complex financial tasks autonomously. Finally, we believe that the development of more standardized evaluation benchmarks for financial LLMs is crucial to ensure consistent and reliable assessments of model performance. By addressing these areas, we hope to further advance the state-of-the-art in financial language modeli-
ng and enable more sophisticated and reliable financial applications.
7 Acknowledgements
BPI We gratefully acknowledge the partial funding provided by the Banque Publique d’Investissement (BPI), which has been instrumental in supporting the development of LLM Pro Finance.
GENCI-IDRIS A significant portion of the model’s training was conducted on the HPC resources provided by GENCI-IDRIS. We appreciate the computational support, which enabled us to optimize and refine LLM Pro Finance efficiently.
AGEFI This work has been done in collaboration with AGEFI, which provided many high quality financial articles.
References
[1] Everton L Aleixo et al. “Catastrophic forgetting in deep learning: A comprehensive taxonomy”. In: arXiv preprint arXiv:2312.10549 (2023).
[2] Dogu Araci. “Finbert: Financial sentiment analysis with pre-trained language models”. In: arXiv preprint arXiv:1908.10063 (2019).
[3] Gaëtan Caillaut et al. “Scaling Laws of Decoder-Only Models on the Multilingual Machine Translation Task”. In: arXiv preprint arXiv:2409.15051 (2024).
[4] Zhiyu Chen et al. “ConvFinQA: Exploring the Chain of Numerical Reasoning in Conversational Finance Question Answering”. In: Proceedings of EMNLP 2022 (2022).
18

[5] Zhiyu Chen et al. “FinQA: A Dataset of Numerical Reasoning over Financial Data”. In: Proceedings of EMNLP 2021 (2021).
[6] Karl Cobbe et al. “Training Verifiers to Solve Math Word Problems”. In: arXiv preprint arXiv:2110.14168 (2021).
[7] Jacob Devlin et al. “Bert: Pre-training of deep bidirectional transformers for language understanding”. In: Proceedings of the 2019 conference of the North American chapter of the association for computational linguistics: human language technologies, volume 1 (long and short papers). 2019, pp. 4171–4186.
[8] ExplodingGradients. Ragas: Supercharge Your LLM Application Evaluations. https://github.com/explodinggradients/ragas. 2024.
[9] Leo Gao et al. The Language Model Evaluation Harness. Version v0.4.3. July 2024. doi: 10.5281/zenodo.12608602. url: https://zenodo.org/ records/12608602.
[10] Aaron Grattafiori et al. “The llama 3 herd of models”. In: arXiv preprint arXiv:2407.21783 (2024).
[11] Laura Hanu and Unitary team. Detoxify. Github. https://github.com/unitaryai/detoxify. 2020.
[12] Pengcheng He, Jianfeng Gao, and Weizhu Chen. DeBERTaV3: Improving DeBERTa using ELECTRA-Style Pre-Training with Gradient-Disentangled Embedding Sharing. 2021. arXiv: 2111.09543 [cs.CL].
[13] Pengcheng He et al. “DEBERTA: DECODING-ENHANCED BERT WITH DISENTANGLED ATTENTION”. In: International Conference on Learning Representations. 2021. url: https://openreview.net/forum?id= XPZIaotutsD.
[14] Allen H Huang, Hui Wang, and Yi Yang. “FinBERT: A large language model for extracting information from financial text”. In: Contemporary Accounting Research 40.2 (2023), pp. 806–841.
[15] Pau Rodriguez Inserte et al. “Large language model adaptation for financial sentiment analysis”. In: arXiv preprint arXiv:2401.14777 (2024).
[16] Pranab Islam et al. FinanceBench: A New Benchmark for Financial Question Answering. 2023. arXiv: 2311.11944 [cs.CL].
[17] Zixuan Ke et al. “Demystifying domain-adaptive post-training for financial llms”. In: arXiv preprint arXiv:2501.04961 (2025).
[18] Zhuang Liu et al. “Finbert: A pre-trained financial language representation model for financial text mining”. In: Proceedings of the twenty-ninth international conference on international joint conferences on artificial intelligence. 2021, pp. 4513–4519.
[19] Anton Lozhkov et al. FineWeb-Edu: the Finest Collection of Educational Content. 2024. doi: 10.57967/hf/2497. url: https://huggingface. co/datasets/HuggingFaceFW/fineweb-edu.
[20] Yun Luo et al. “An empirical study of catastrophic forgetting in large language models during continual fine-tuning”. In: IEEE Transactions on Audio, Speech and Language Processing (2025).
19

[21] Kishore Papineni et al. “Bleu: a method for automatic evaluation of machine translation”. In: Proceedings of the 40th annual meeting of the Association for Computational Linguistics. 2002, pp. 311–318.
[22] Aditya Pathak et al. “Rubric is all you need: Enhancing llm-based code evaluation with question-specific rubrics”. In: arXiv preprint arXiv:2503.23989 (2025).
[23] Guilherme Penedo et al. FineWeb2: One Pipeline to Scale Them All Adapting Pre-Training Data Processing to Every Language. 2025. arXiv: 2506.20920 [cs.CL]. url: https://arxiv.org/abs/2506.20920.
[24] Guilherme Penedo et al. “The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale”. In: The Thirty-eight Conference on Neural Information Processing Systems Datasets and Benchmarks Track. 2024. url: https://openreview.net/forum?id=n6SCkn2QaG.
[25] Samyam Rajbhandari et al. “Zero: Memory optimizations toward training trillion parameter models”. In: SC20: International Conference for High Performance Computing, Networking, Storage and Analysis. IEEE. 2020, pp. 1–16.
[26] Vinay Venkatesh Ramasesh, Aitor Lewkowycz, and Ethan Dyer. “Effect of scale on catastrophic forgetting in neural networks”. In: International conference on learning representations. 2021.
[27] Qwen Team. “Qwen3Guard Technical Report”. In: (2025).
[28] Jörg Tiedemann. “News from OPUS - A Collection of Multilingual Parallel Corpora with Tools and Interfaces”. odefinierat/okänt. In: Recent Advances in Natural Language Processing. Ed. by N. Nicolov et al. Vol. V. 2009, pp. 237–248.
[29] Hugo Touvron et al. “Llama: Open and efficient foundation language models”. In: arXiv preprint arXiv:2302.13971 (2023).
[30] Yubo Wang et al. “Mmlu-pro: A more robust and challenging multi-task language understanding benchmark”. In: Advances in Neural Information Processing Systems 37 (2024), pp. 95266–95290.
[31] Leandro von Werra et al. TRL: Transformer Reinforcement Learning. https://github.com/huggingface/trl. 2020.
[32] Shijie Wu et al. “Bloomberggpt: A large language model for finance”. In: arXiv preprint arXiv:2303.17564 (2023).
[33] Qianqian Xie et al. “Finben: A holistic financial benchmark for large language models”. In: Advances in Neural Information Processing Systems 37 (2024), pp. 95716–95743.
[34] Qianqian Xie et al. “Pixiu: A large language model, instruction data and evaluation benchmark for finance”. In: arXiv preprint arXiv:2306.05443 (2023).
[35] An Yang et al. “Qwen3 technical report”. In: arXiv preprint arXiv:2505.09388 (2025).
[36] Hongyang Yang, Xiao-Yang Liu, and Christina Dan Wang. “FinGPT: Open-Source Financial Large Language Models”. In: FinLLM Symposium at IJCAI 2023 (2023).
20

[37] Yi Yang, Mark Christopher Siy Uy, and Allen Huang. “Finbert: A pretrained language model for financial communications”. In: arXiv preprint arXiv:2006.08097 (2020).
[38] Rowan Zellers et al. “HellaSwag: Can a Machine Really Finish Your Sentence?” In: Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics. 2019.
[39] Yuexiang Zhai et al. “Investigating the catastrophic forgetting in multimodal large language models”. In: arXiv preprint arXiv:2309.10313 (2023).
[40] Liwen Zhang et al. “Fineval: A chinese financial domain knowledge evaluation benchmark for large language models”. In: arXiv preprint arXiv:2308.09975 (2023).
A Formatting benchmark prompts
Most of our evaluation are done through the lm-evaluation-harness toolkit [9], which is a wonderful attempt at reproductible LLM benchmarking. However, as LLM evolve, the benchmarking strategies evolve too, which is a challenge to maintain while preserving the reproducibility on previous LLM generations. Let us take the famous MMLU-PRO benchmark as example, which assess the knowledge of an LLM using multiple choices questions. Currently, lm-evaluation-harness propose to format this test set as raw-
, unstructured text (suitable for pretrained LLM benchmarking) or as a chat formatted set of instructions (suitable for instruction-tuned LLM benchmarking). The raw text variant follows the below template:
The following are multiple choice questions (with answers) about {{ MMLU SUBSET }}. Think step by step and then finish your answer with "the answer is (X)" where X is the correct letter choice.
,→
,→
,→
Question: {{ THE QUESTION }} A. {{ OPTION A }} B. {{ OPTION B }} C. {{ OPTION C }} D. {{ OPTION D }} Answer: Let's think step by step. {{ OPTIONAL COT GENERATED ,→ BY THE LLM}} The answer is ({{ THE ANSWER LETTER}})
We believe this template is effective for the evaluation of non-instruction tuned LLM. However, we argue that the chat-formatted is, at best, outdated for the evaluation of modern instruction-tuned LLM. Below is an example of such a test sample formatted using Qwen 3’s chat template.
<|im_start|>system The following are multiple choice questions (with answers) about {{ MMLU SUBSET }}. Think step by step and then finish your answer with "the answer is (X)" where X is the correct letter choice.<|im_end|>
,→
,→
,→
<|im_start|>user
21

Question: {{ THE QUESTION }} A. {{ OPTION A }} B. {{ OPTION B }} C. {{ OPTION C }} D. {{ OPTION D }} Answer: Let's think step by step.<|im_end|> <|im_start|>assistant <think>
</think>
{{ OPTIONAL COT GENERATED BY THE LLM}} The answer is ({{ THE ANSWER LETTER}})<|im_end|>
It is clear that the model is not trained to be queried this way. There is no reason to include “Answer: Let’s think step by step” in the user query, nor in the assistant answer; the system prompt is also not adapted to chat models. But, most importantly, the reasoning process of Qwen models should occur inside the <think></think> tokens, which is impossible using the above template. Each model has been trained on its very own instruction format, but this diversity is not (yet?) taken into account-
 by the tasks implemented in lm-evaluation-harness. As a consequence, we had to rewrite every single tasks so the queries and answers resemble an actual, real, conversation with the LLM:
<|im_start|>system You are expert in {{ MML SUBSET }} and you are designed to answer multiple choice questions. Think step by step then finish your answer with "The answer is (X)" where X is the correct letter choice.<|im_end|>
,→
,→
,→
<|im_start|>user {{ THE QUESTION }} A. {{ OPTION A }} B. {{ OPTION B }} C. {{ OPTION C }} D. {{ OPTION D }} <|im_end|> <|im_start|>assistant <think> {{ OPTIONAL COT GENERATED BY THE LLM}} </think>
The answer is ({{ THE ANSWER LETTER}})<|im_end|>
B LLM-as-a-Judge prompts
B.1 Hallucination prompt
You are an evaluator for a Retrieval-Augmented Generation ,→ (RAG) system. You will receive:
22

- a user query, - the RAG response, - a set of retrieved documents.
Your tasks: 1. Break the RAG response into concise factual claims (≤120 chars ,→ each). 2. For each claim, check support against the retrieved documents. Label as: - SUPPORTED = clearly backed by docs - CONTRADICTED = explicitly refuted by docs - UNSUPPORTED = no matching evidence in docs - AMBIGUOUS = unclear or partially supported Provide up to 2 short evidence quotes (≤40 chars) with doc ,→ ids. 3. Hallucinations = claims marked CONTRADICTED or UNSUPPORTED. 4. Compute: - `support_rate` = (# SUP-
PORTED) / (total claims) - `hallucination_rate` = (# hallucinations) / (total claims) - `factuality_score` = map support_rate: ≥0.90=5, ≥0.75=4, ≥0.50=3, ≥0.30=2, else 1. 5. Provide short justifications (≤2 sentences each) for: - Relevance: does it address the query? - Factuality: how accurate overall? - Faithfulness: does it stay true to docs? 6. Output only one JSON object matching this schema:
```json {
"query": "<user query>", "rag_response": "<RAG output>", "documents": [{"id":"<id>","text":"<excerpt>"}...], "claims": [ {
"id": 1, "claim": "<short claim>", "status": "<SUPPORTED|CONTRADICTED|UNSUPPORTED|AMBIGUOUS>", "evidence": [{"doc_id":"<id>","quote":"<<=40 chars>"}] } ], "hallucinations": [ {"claim":"<quoted claim>","why":"<concise reason>","evidence":[{"doc_id":"<id>","quote":"<<=40 chars>"}]}
,→
,→
], "scores": { "Relevance": <1..5>, "Factuality": <1..5>, "Faithfulness": <1..5> },
23

"support_rate": <0..1>, "hallucination_rate": <0..1>, "label": "<Accurate|Partially Accurate|Hallucinated>", "recommended_fixes": ["<fix 1>", "<fix 2>"] }
```
The Faithfulness reported in this work is computed as the ratio of SUPPORTED or AMBIGUOUS claims over the total number of claims.
F aithf ulness = #SU P P ORT ED + #AM BIGU OU S
#CLAIM S
B.2 Correctness prompt
You are an evaluator for a Retrieval-Augmented Generation (RAG) ,→ system. You will receive: - a user query, - the RAG response, - a ground-truth reference answer.
Your tasks: 1. Break the RAG response into concise factual claims (≤120 chars ,→ each). 2. For each claim, check accuracy against the reference answer. Label as: - CORRECT = matches reference - INCORRECT = conflicts with reference - MISSING = not in response but present in reference - EXTRA = present in response but not in reference (and not ,→ wrong) Provide short supporting snippets (≤40 chars) from reference ,→ where possible. 3. Errors = claims marked INCORRECT. 4. Compute: - `accuracy_rate` =-
 (# CORRECT) / (total claims) - `error_rate` = (# INCORRECT) / (total claims) - `accuracy_score` = map accuracy_rate: ≥0.90=5, ≥0.75=4, ≥0.50=3, ≥0.30=2, else 1. 5. Provide short justifications (≤2 sentences each) for: - Relevance: does it address the query? - Accuracy: how well does it match reference? - Completeness: does it cover all reference points? - LanguageCoherence: is the RAG answer in the same language as ,→ the query? 6. Output only one JSON object matching this schema:
```json {
"query": "<user query>",
24

"rag_response": "<RAG output>", "ground_truth": "<reference answer>", "claims": [ {
"id": 1, "claim": "<short claim>", "status": "<CORRECT|INCORRECT|MISSING|EXTRA>", "evidence": [{"quote":"<<=40 chars from reference>"}] } ], "errors": [ {"claim":"<quoted claim>","why":"<concise ,→ reason>","evidence":[{"quote":"<<=40 chars>"}]} ], "scores": { "Relevance": <1..5>, "Accuracy": <1..5>, "Completeness": <1..5>, "LanguageCoherence": 0|1 }, "accuracy_rate": <0..1>, "error_rate": <0..1>, "label": "<Accurate|Partially Accurate|Inaccurate>", "recommended_fixes": ["<fix 1>", "<fix 2>"] }
```
The Accuracy reported in this work is computed as the ratio of CORRECT claims over the total number of claims minus the MISSING claims.
Accuracy = #CORRECT
#CORRECT + #IN CORRECT + #EXT RA
The Completeness reported in this work is computed as the ratio of CORRECT claims over the total number of claims minus the EXTRA claims.
Completeness = #CORRECT
#CORRECT + #IN CORRECT + #M ISSIN G
The Error rate reported in this work is computed as the ratio of INCORRECT claims over the total number of claims minus the MISSING claims.
ErrorRate = #IN CORRECT
#CORRECT + #IN CORRECT + #EXT RA
25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:29.111Z
- **Text Length:** 59148 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
