# PDF Document: Zhang and Chen - 2025 - Personalized Chain-of-Thought Summarization of Financial News for Investor Decision Support.pdf

**File Path:** Zhang and Chen - 2025 - Personalized Chain-of-Thought Summarization of Financial News for Investor Decision Support.pdf

**Processed Date:** 2026-02-10T18:17:17.153Z

**File Size:** 5654.65 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3489

**Title:** Personalized Chain-of-Thought Summarization of Financial News for Investor Decision Support

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Personalized Chain-of-Thought Summarization of
Financial News for Investor Decision Support
1st Tianyi Zhang
Computer Science Department University of Southern California Los Angeles, CA, USA tzhang62@usc.edu
2nd Mu Chen
Chief Executive Officer Canopy.Cloud
Singapore, Singapore mu.chen@canopy.cloud
Abstract—Financial advisors and investors struggle with information overload from financial news, where irrelevant content and noise obscure key market signals and hinder timely investment decisions. To address this, we propose a novel Chainof-Thought (CoT) summarization framework that condenses financial news into concise, event-driven summaries. The framework integrates user-specified keywords to generate personalized outputs, ensuring that only the most relevant contexts are highlighted. These -
personalized summaries provide an intermediate layer that supports language models in producing investorfocused narratives, bridging the gap between raw news and actionable insights. Index Terms—CoT summarization, Large Language Models, Financial News Analysis
I. INTRODUCTION
In today’s financial markets, the stream of information is overwhelming, often repetitive and noisy to investors’ actual needs [1]. However, extracting relevant insights from this information flow is critical for effective decision-making. Traditional summarization methods, while useful in reducing length, often fail to capture the context [2] and personalization [3] required for financial professionals to act confidently on the information presented. Recent advances in Large Language Models (LLMs-
) have created opportunities for more sophisticated text summarization, yet these models often face challenges such as hallucination [4], lack of domain grounding [5], and limited personalization [6]. Hallucination represents a critical issue where LLMs generate factually incorrect or fabricated information that appears plausible but contradicts the source material, particularly problematic in financial contexts where accuracy is paramount for investment decisions [7]. The lack of domain grounding-
 manifests when models fail to maintain specialized terminology, context-specific relationships, and industry-relevant focus, leading to summaries that may be linguistically coherent but lack the precision required for professional financial analysis [8]. Limited personalization capabilities prevent these models from adapting their outputs to specific user needs, interests, or expertise levels, resulting in generic summaries that may not highlight the most relevant information for particular stake-
holders such as financial advisors focusing on specific market sectors or investment strategies [9].
These shortcomings make it difficult for financial professionals to fully trust or act on automatically generated outputs, as inaccurate information can lead to significant financial losses and regulatory compliance issues. To address these challenges, Chain-of-Thought (CoT) reasoning has emerged as a promising approach [10] [11]. By explicitly modeling intermediate reasoning steps, CoT methods improve coherence, logical flow, and interpretability, enabling summaries that filter out irrelevant det-
ails while maintaining structured and contextually faithful content [12]. However, existing CoT-based summarization approaches remain largely generic, lacking mechanisms to adapt to the specific priorities and information needs of individual investors or advisors [13] [14]. Most current approaches employ uniform reasoning chains that do not differentiate between various types of financial information, treating earnings reports, merger announcements, and regulatory updates with the same generic pro-
cessing framework [15]. Furthermore, these methods lack domain-specific knowledge integration, failing to recognize the hierarchical importance of quantitative metrics such as revenue growth, profit margins, and valuation multiples that are critical for investment decision-making [16]. The reasoning chains in existing CoT approaches also do not incorporate user-specific context, such as investment focus areas and risk tolerance, which are essential for generating actionable financial insights [17]-
. This generic approach results in summaries that, while logically coherent, fail to provide the targeted, quantitative, and contextually relevant information that financial professionals require for effective decisionmaking. To address this gap, we propose a personalized CoT summarization framework for financial news. Our approach generates concise, event-driven summaries that are tailored to user-defined keywords, ensuring that only the most relevant information are highlighted. These keyword-dr-
iven summaries function as an intermediate representation, allowing LLMs to produce narratives that are both contextually rich and directly aligned with investor interests. In doing so, the framework bridges the gap between raw financial reporting and actionable investor insights. Our experimental evaluation demonstrates the effectiveness of this approach: our enhanced summaries achieve a BLEU score of 0.1786 and ROUGE-L score of 0.4028, represent
arXiv:2511.05508v2 [q-fin.GN] 13 Nov 2025

ing substantial improvements of 267% and 90% respectively over GPT-4o generated summaries (Table I). Furthermore, our personalized keyword-based binary relevance classification outperforms commonly used ranking selection methods by 40% in accuracy (Table II), demonstrating superior precision in identifying articles relevant to specific investor interests. These results validate that our specialized CoT framework not only produces higher-quality financial summaries but also delivers more accurate -
personalization for investment decision support. The contributions of this paper are twofold:
1) Framework Design – We introduce a CoT-based summarization pipeline that condenses financial news into concise, event-focused outputs.
2) Personalization Mechanism – We incorporate keyword-driven filtering to adapt summaries to the unique needs of financial advisors and investors.
II. RELATED WORK
A. Financial News Summarization and Domain Adaptation
Financial news summarization (FNS) has been studied as a way to digest market-moving information efficiently. Summaries of financial reports and news are expected to retain events and signals that could affect market behavior [18]. Early approaches ranged from extractive techniques, such as selecting and ranking key sentences to fully abstractive generation. Graph-based methods such as TextRank have been applied to extract key sentences from stock news [19]. While extractive methods gather critica-
l information, they struggle with long-range dependencies and offer no personalization. Abstractive summarization with encoder–decoder models such as BART or PEGASUS can produce more coherent financial summaries [20], but these models risk hallucinating unsupported details and require large domain-specific datasets, which are costly to create. Domain adaptation has proven effective in addressing these challenges. FinBERT, for example, is pre-trained on financial corpora to capture the field’s uniq-
ue context [21]. However, it is important to note that FinBERT is not designed for summarization; rather, it functions as a domain-adapted encoder for classification or embedding tasks. This highlights effective summarization architectures are still required to produce coherent and relevant summaries. Prior work has also explored financial summarization for investment insights, e.g., generating news summaries to assist stock prediction [22], or company-focused news headlines [23]. Beyond task-spec-
ific models, broader surveys and evaluations have examined the intersection of NLP and finance. Du et al. provide a comprehensive survey of NLP in finance, covering applications such as sentiment analysis, narrative processing, forecasting, and summarization, while also outlining persistent challenges related to domain adaptation, data quality, and specialized summarization [24]. Complementing this, Du et al. assess the reasoning capabilities of LLMs in financial sentiment analysis, showing that e-
ven advanced
models like GPT-3.5 and PaLM-2 are particularly weak in numerical and comparative reasoning [25]. Similarly, Cambria et al. discuss the opportunities and challenges of applying LLMs in financial contexts, noting that issues of factuality, domain grounding, and personalization remain unresolved for decision-support applications [26]. Nonetheless, most existing financial summarization systems still produce one-size-fitsall outputs and lack mechanisms to adapt to an individual investor’s focus. Our w-
ork addresses this gap by combining domain-aware summarization with personalized filtering.
B. Personalized and Controllable Summarization
Personalized summarization aims to tailor outputs to the reader’s needs and remains an under-explored area [3], [27]. Recent LLMs achieve strong performance on generic news summarization [20], yet generic summaries often fail to meet specific user intentions [14]. Traditional datasets rarely capture user preferences, limiting research to generic summary generation. In response, controllable summarization methods were introduced, where models are guided with attributes such as length or topic [28],-
 [29]. These methods demonstrate guided outputs are feasible, but their controls are usually generic rather than user-specific. Ao et al. [27] introduced PENS, a dataset for personalized news headline generation, while Zhang et al. [14] proposed PersonalSum, designed to evaluate user-tailored summaries. These works confirm that while personalization is desirable, most current summarizers still output the same summary for everyone. In finance, this gap is pronounced: wealth advisors and retail inve-
stors have distinct information needs, but existing systems cannot tailor summaries accordingly. Typically, personalization has been addressed by recommendation systems (filtering articles) rather than adapting summary content itself.
C. Reasoning and Chain-of-Thought in Summarization
Chain-of-thought (CoT) prompting has demonstrated that guiding LLMs to produce intermediate reasoning steps can improve performance on complex tasks [31]. Instead of producing an answer directly, models generate a reasoning process, yielding state-of-the-art results on arithmetic, commonsense, and symbolic reasoning benchmarks [31]. Although summarization is not a classical reasoning problem, financial news requires reasoning about event importance and user relevance. Traditional summarizers often-
 operate in an end-toend fashion, missing implicit but crucial signals. Zhu et al. [32] note that standard CoT prompting may fail when essential information is implicit, since the model may overlook early extraction of key facts. They propose iterative summarization pre-prompts to distill relevant content before reasoning, which improved accuracy. This aligns with our strategy of using keyword-filtered mini-summaries as intermediate representations. Multi-stage summarization methods, such as extra-
ctthen-abstract pipelines [33] or recursive summarization frameworks [34], similarly use intermediate steps to improve coverage, though they are not personalized. Our framework extends this line of work by integrating user-defined keyword filtering

into the reasoning chain, ensuring the final summary is both contextually rich and personalized to investor needs.
III. METHODOLOGY
Our proposed methodology implements a personalized chain-of-thought summarization pipeline for financial news analysis, designed to support investor decision-making. As shown in Fig 1, the system operates through four sequential stages, each leveraging LLMs to progressively refine and contextualize financial information.
1) Data Processing Module: PDF text extraction and English language filtering
2) Initial Summarization Module: First-pass article summarization for financial investors
3) Enhanced Summary Processing Module: Metadata extraction and financial-focused summary refinement
4) Personalized Response Generation Module: Keywordbased relevance assessment and investment recommendations
A. Data Processing and Text Extraction
The first stage addresses the challenge of extracting structured text from diverse financial news PDFs. We implement a dual-approach extraction strategy using both PyPDF2 [35] and pdfplumber [36] libraries to ensure robust text extraction across different PDF formats and layouts.
1) Text Extraction Pipeline: For each PDF document Di in the input directory, we apply a configurable extraction strategy where Ti = Extract(Di) represents the extracted text from document Di. Our framework defaults to pdfplumber extraction due to its superior handling of complex layouts commonly found in financial news publications, with PyPDF2 available as an alternative for simpler document structures. This duallibrary approach ensures robust text extraction capabilities across diverse PDF form-
ats while prioritizing the more reliable pdfplumber method for financial document processing.
2) English Language Filtering: We implement a language filtering mechanism that retains only English-dominated content. Since the financial news articles in our dataset contain bilingual content (English and Chinese), we apply sentencelevel filtering to extract English portions. For each sentence sj in extracted text Ti, we calculate the English character ratio:
Reng(sj) = |EnglishChars(sj)|
|sj| (1)
Sentences are retained if Reng(sj) > 0.7, ensuring that financial terminology and market-specific language are preserved while filtering out Chinese content. 3) Metadata Preservation: Each processed document maintains comprehensive metadata including: (a) source file information, (b) extraction method used, (c) file size and text length statistics, and (d) language filtering status.
B. Initial Financial Summarization
The second stage employs the Mistral-7B-Instruct-v0.2 model [37] to generate initial financial-focused summaries, implementing the first layer of chain-of-thought reasoning by transforming raw text into structured financial narratives. We design specialized prompts that guide the LLM to focus on financial implications, with the complete prompt template and example results shown in Figure 2. The summarization process uses controlled generation parameters including a maximum of 200 tokens for concis-
e financial summaries and a temperature of 0.7 to balance creativity and consistency in the generated outputs.
C. Stage 3: Enhanced Summary Processing with Few-Shot Learning
The third stage implements advanced metadata extraction and summary refinement through few-shot learning, representing a critical enhancement in our chain-of-thought approach. We leverage professional financial analyst expertise to guide the LLM’s output quality and focus.
1) LLM-Based Metadata Extraction: We employ the same Mistral model to extract structured metadata from article content:
Mi = ExtractMetadata(Ti) = {date, location, entity} (2)
The metadata extraction uses a JSON-structured prompt that forces the model to output parseable structured data, with fallback mechanisms for cases where LLM extraction fails. 2) Few-Shot Learning for Financial Summary Enhancement: The enhanced summary generation implements a sophisticated few-shot learning approach using professional financial analyst examples. We provide the LLM with curated examples that demonstrate the desired output format and analytical depth as shown in Figure 4.
D. Stage 4: Personalized Response Generation
The final stage implements keyword-based personalization and investment action synthesis. Financial advisors input specific keywords of interest (e.g., “AI”, “United States”, “new energy”) to retrieve personalized investment insights tailored to their focus areas.
1) Relevance Assessment Pipeline: For a given keyword K provided by the financial advisor, we evaluate each article Ai using a Binary Relevance Retrieval approach:
R(Ai, K) = LLM Classify(Ai, K) ∈ {YES, NO} (3)
The relevance assessment considers direct sector connections, entity relationships, and market impact relevance to the specified keyword.

Financial News PDF
Structured News
Stage 1
Data Processing
Stage 2
Initial Summarization
Initial Summary
Initial Summarization Prompt
Human Expert Annotator
Enhanced Summary
Stage 3
Enhanced Summarization
Fewshot Examples
Ground Truth Summary
Relevant Summary
Stage 4
Personalized Response
Binary Relevance Retrieval
Insight Recommendation
Financial News Report
BLEU ROUGE-L
Precision Recall Accuracy
Keywords
Financial Advisor
Fig. 1. Overview of Personalized Chain-of-Thought Financial News Summarization Framework
Initial Summarization Prompt Template
Summarize the following news article in ONE paragraph for financial investors, state clearly of the date, location and entities of the event, focusing on the key financial impact or market implication.
On June 12, 2025, at a developer conference in San Jose, California, Advanced Micro Devices (AMD) CEO Lisa Su unveiled new artificial intelligence (AI) servers, the MI350 series and MI400 series chips, which aim to challenge market leader Nvidia's flagship offerings. OpenAI, the creator of ChatGPT, announced it would adopt AMD's latest MI450 chips. AMD plans to release a new server called "Helios" based on the MI400 series chips next year, while Nvidia's servers rely on proprietary technology call-
ed NVLink. AMD's CEO revealed that OpenAI and other companies, including Oracle and Crusoe, are adopting AMD's processors. AMD has made several strategic investments and acquisitions to bolster its AI chip and software teams. The MI400 chips were not expected to significantly change AMD.
Sample Initial Summary
Fig. 2. Second Stage: Initial Summarization Prompt Template and Sample Output
2) Key Insights Generation: Based on relevant articles {Ar}, we generate key insights I:
I = GenerateInsights(K, {Ar}) (4)
Each insight follows a structured format that identifies trends, financial implications, and risk/opportunity factors specific to the advisor’s keyword interest.
Few-Shot Learning Prompt Template
Format your output like the following example summaries:
You are a financial analyst summarizer. Given a business news paragraph, extract a concise 1–2 sentence summary tailored for financial advisors. Focus strictly on key quantitative developments (funding, valuations, headcount changes, product superiority), investor sentiment, credit ratings, or cost implications. Omit general storytelling unless directly relevant to financial impact.
Moove, which manages and maintains Waymo's electric robotaxis, is planning to raise approximately $300 million in new funding, expected to lift Moove's valuation above $1 billion, up from $115 million just over a year ago.
Starbucks plans to employ an average of 23 people per store, up from 18-19 in the past. The rollout of this new labor model raises concerns for investors about the impact on Starbucks North America store unit economics. Moody's has given Starbucks investmentgrade rated bonds a negative outlook.
Xpeng has developed autonomous driving chips that outperform Nvidia's, with its Turing AI chip reportedly three times more powerful than Nvidia's Orin-X. The company is in talks with Volkswagen and others to become a supplier.
Fig. 3. Third Stage: Enhanced Summary Few-Shot Learning Prompt Template

3) Investment Action Synthesis: The final step synthesizes specific investment actions Ainv:
Ainv = GenerateActions(K, {Ar}, I) (5)
Investment actions are constrained to exactly three actionable recommendations, each focusing on specific opportunities or risk management strategies relevant to the financial advisor’s specified keyword. A sample keyword input and the corresponding final personalized report are illustrated in Figure4.
E. Chain-of-Thought Reasoning Implementation
Our methodology implements chain-of-thought reasoning through sequential LLM interactions that build upon previous outputs:
Chaini = f (Chaini−1, Inputi, Contexti) (6)
where each stage i uses the output from stage i − 1 as context for the next reasoning step. The few-shot learning in Stage 3 ensures that the enhanced summaries maintain professional financial analyst standards, improving the quality of downstream analysis in Stage 4.
F. Model Configuration and Optimization
Throughout all stages, we maintain consistent model parameters to ensure reproducibility and coherence across the pipeline. We employ Mistral-7B-Instruct-v0.2 as the base model for all text generation tasks, leveraging automatic GPU allocation for optimal computational efficiency. The model operates with a context length of 2048 tokens with truncation applied when input exceeds this limit.
IV. EVALUATION
A. Evaluation of Enhanced Summary
We evaluate our personalized chain-of-thought summarization framework using both automated metrics and professional financial analyst assessment. The evaluation compares our enhanced summaries (Stage 3 output) against ChatGPTgenerated summaries using the same ground truth references. 1) Dataset Creation: To establish reliable ground truth references for evaluation, a professional financial analyst with over 10 years working experience created high-quality reference summaries. The ground truth gene-
ration process involved the analyst independently reviewing the articles and initial summaries produced in the second stage, then manually identifying the most important sentences and financial information. The highlighted information was then synthesized into concise ground truth summaries that capture the essential financial insights. This human-curated ground truth dataset serves as the reference standard for calculating BLEU and ROUGE-L scores, ensuring that our automated evaluation metrics re-
flect professional financial analysis standards while maintaining focus on quantitative developments and market implications essential for investment decision-making.
Sample Final Report
Selected Articles:
Dear User,
Based on the keyword "NEW ENERGY" you have entered, I have found several related articles:
1. BYD European Expansion
2. Xpeng Chip Technology
3. Moove Robotaxi Funding
• Summary: BYD introduces its most affordable compact EV, the Dolphin Surf, in France for C18,650, setting the stage for 360 new compact EV models from Chinese brands in Europe this year. Amidst thin profit margins and high battery prices, Chinese brands are increasing local production to compete. • Date: 2025-06-13 • Location: France, Europe • Entity: BYD
• Summary: Xpeng’s advanced Turing chips, three times more powerful than Nvidia’s Orin-X, are expected to be integrated into Volkswagen’s new EV models in China, positioning Xpeng as a key supplier in the competitive EV market. • Date: 2025-06-13 • Location: China • Entity: Xpeng
• Summary: Moove is planning to raise $300 million, boosting its valuation above $1 billion. The company manages Waymo’s electric robotaxis and is expanding in the US market. • Date: 2025-06-12 • Location: San Francisco, CA • Entity: Moove
Key Insights:
1) Chinese EV manufacturers are expanding European presence with affordable models to increase market share despite thin margins and high battery costs. 2) Advanced chip technology is becoming a strategic differentiator, with companies like Xpeng leveraging superior performance for supplier partnerships. 3) The EV robotaxi sector shows strong growth potential with significant funding rounds, reflecting investor confidence in autonomous vehicle infrastructure.
Investment Recommendations:
1) Consider exposure to Chinese EV manufacturers expanding in Europe, monitoring profit margin pressures from battery costs. 2) Explore opportunities in EV companies with proprietary chip technology advantages, assessing competitive moats and IP risks. 3) Evaluate investments in autonomous vehicle infrastructure companies, balancing growth potential against market saturation risks.
Fig. 4. Fourth Stage: Personalized Response Generation Sample Output

2) Evaluation Results: Table I presents the comparative evaluation results between our enhanced summaries and GPT4o generated summaries across seven financial news articles.
TABLE I AUTOMATED EVALUATION RESULTS: AVERAGE BLEU AND ROUGE-L SCORES
Summary Type BLEU Score ROUGE-L Score
Enhanced Summary (Ours) 0.1786 0.4028 GPT-4o Summary 0.0487 0.2123
Improvement +267% +90%
3) Performance Analysis: Our enhanced summarization framework demonstrates superior performance across both evaluation metrics: • BLEU Score: Our enhanced summaries achieve an average BLEU score of 0.1786, representing a 267% improvement over ChatGPT summaries (0.0487). • ROUGE-L Score: Our approach yields an average ROUGE-L score of 0.4028, outperforming ChatGPT summaries (0.2123) by 90%. These results demonstrate that our few-shot learning approach with professional financial analyst examples si-
gnificantly enhances summary quality and alignment with ground truth references.
4) Professional Financial Analyst Assessment: To complement our automated evaluation, we conducted a qualitative assessment with professional financial analysts from leading investment firms. Two certified financial analysts independently evaluated both summary types across five key criteria: financial relevance, professional quality, actionability, conciseness, and factual accuracy. Both analysts consistently preferred our enhanced summaries over GPT-4o generated summaries across all evaluation c-
riteria, noting that our summaries demonstrated superior focus on quantitative developments such as funding amounts, valuation changes, and market share data, while maintaining professional terminology and financial context more accurately. The analysts highlighted that enhanced summaries articulated investment implications more clearly, aligned better with industry reporting standards, and critically maintained factual accuracy without hallucinations, ensuring that all financial concepts, metrics-
, and market references remained anchored to the original source material without fabrication. This professional validation confirms that our chain-of-thought approach with few-shot learning effectively bridges the gap between automated summarization and professional financial analysis standards while maintaining critical factual integrity essential for financial decision-making. A sample comparison between enhanced summary and GPT-4o summary is illustrated in Figure 5.
B. Personalization Evaluation: Selection Strategy Comparison
To evaluate the effectiveness of our personalization framework (Stage 4), we compare two approaches for keywordbased article selection: binary relevance classification versus
Enhanced Summary vs ChatGPT-4o Comparison Example
Ground Truth: (AMD) CEO Lisa Su unveiled new artificial intelligence (AI) servers, the MI350 series and MI400 series chips. OpenAI, the creator of ChatGPT, announced it would adopt AMD’s latest MI450 chips.OpenAI and other companies, including Oracle and Crusoe, are adopting AMD’s processors.
Enhanced Summary (Ours): AMD, led by CEO Lisa Su, unveiled new AI servers, the MI350 and MI400 series chips, aiming to challenge Nvidia’s market dominance. Key adopters include OpenAI, Oracle, Crusoe, and AMD plans to release a new server, Helios, based on MI400 chips in 2026. AMD’s AI chip and software teams have been bolstered through strategic investments and acquisitions.
GPT-4o Prompt: “You are a financial analyst summarizer. Given a business news, extract a concise 1–2 sentence summary tailored for financial advisors.”
GPT-4o Summary: AMD unveiled its 2026 Helios AI server powered by the new MI400 chips—positioned to rival Nvidia’s dominance—with OpenAI confirming adoption of AMD’s latest processors and collaboration on future chip development. Despite near-term stock pressure, AMD’s strategic acquisitions and partnerships across the AI ecosystem signal a long-term growth trajectory in the high-demand AI infrastructure market.
Fig. 5. Sample Summary Comparison
multi-article ranking selection. This evaluation examines how different selection strategies affect the quality of article retrieval for personalized investment insights. 1) Selection Approaches: We implement two distinct selection methodologies:
• Binary Relevance Retrieval: Each article is independently evaluated for relevance to the keyword, with the LLM outputting a binary decision (1 = relevant, 0 = not relevant) for each article
• Multi-Article Ranking Selection: The LLM simultaneously evaluates all articles and selects the most relevant subset from the entire collection in a single decision process
2) Evaluation Methodology: Professional financial analysts manually annotated articles for relevance to various financial keywords (e.g., ”AI”, ”China”, ”new energy”, ”funding”). We then compared both LLM selection approaches against these human annotations using accuracy as the primary metric.
3) Selection Performance Results: Table II presents the comparative performance between Binary Relevance Retrieval and multi-article ranking selection approaches for keyword relevance assessment.
4) Analysis of Selection Results: The Binary Relevance Retrieval approach demonstrates significantly superior per

TABLE II ARTICLE SELECTION APPROACH COMPARISON: ACCURACY RESULTS
Selection Strategy Accuracy Precision Recall
Binary Relevance Retrieval 0.8750 0.8421 0.8889 Multi-Article Ranking Selection 0.6250 0.6154 0.6667
Improvement +40% +37% +33%
formance across all evaluation metrics. The binary method achieves an accuracy of 87.5% compared to 62.5% for multiarticle ranking selection, representing a 40% improvement. Based on these results, our framework adopts the Binary Relevance Retrieval approach for Stage 4 personalization, ensuring optimal relevance assessment for keyword-based article selection. This design choice directly contributes to the quality of personalized investment insights by ensuring that only the most relevant articles-
 are selected for further analysis and recommendation generation.
V. CONCLUSION
By combining structured reasoning with personalization, our framework provides a scalable solution to managing financial news overload. The work advances the use of LLMs in financial text analysis. More importantly, it contributes to broader efforts in applying AI to decision-support systems in dynamic and information-rich environments. Our experimental validation demonstrates the practical effectiveness of this approach, with enhanced summaries achieving substantial improvements of 267% in BLEU s-
cores and 90% in ROUGE-L scores compared to GPT-4o, while our binary classification strategy for personalization outperforms traditional ranking methods by 40% in accuracy. These quantitative improvements, coupled with consistent professional analyst preference for our enhanced summaries, validate the framework’s ability to bridge the gap between automated text processing and professional financial analysis standards. The implications of this work extend beyond financial news summarization. The ch-
ain-of-thought approach with few-shot learning demonstrates how domain-specific expertise can be effectively integrated into large language model workflows, providing a template for similar applications in healthcare, legal analysis, and other specialized fields where accuracy and professional standards are paramount. The personalization mechanism offers a scalable approach to tailoring AIgenerated content to individual user needs without requiring extensive fine-tuning or domain-specific model tr-
aining. Looking forward, this framework establishes a foundation for more sophisticated financial AI systems that could integrate real-time market data, regulatory updates, and individual investor profiles to provide comprehensive decision support. As financial markets become increasingly complex and datadriven, such AI-assisted analysis tools will become essential for maintaining competitive advantage while managing information complexity. The success of our approach suggests that the future of f-
inancial AI lies not in replacing human expertise,
but in augmenting professional capabilities through intelligent, personalized information processing systems.
VI. LIMITATIONS AND FUTURE WORK
While our framework successfully generates concise, information-rich summaries tailored for financial advisors and investors, several limitations warrant discussion. Although the enhanced summaries effectively highlight key quantitative information and market implications, current large language models lack the sophisticated financial reasoning capabilities required to provide definitive investment guidance. Financial decision-making involves complex considerations including risk tolerance, portfo-
lio diversification, market timing, regulatory factors, and individual investor circumstances that extend beyond the scope of news summarization. The generated investment recommendations should therefore be viewed as preliminary insights that require further analysis and validation by qualified financial professionals rather than actionable trading decisions. Additionally, our framework employs a four-stage pipeline that could potentially be simplified for certain applications. For instance, Stage-
 2 (initial summarization) and Stage 3 (enhanced processing with few-shot learning) could theoretically be combined into a single step to reduce computational overhead and processing time. However, we deliberately separated these stages to facilitate the creation of reliable ground truth references, as professional financial analysts found it more intuitive to evaluate and refine initial summaries rather than working directly with raw article text. This staged approach enabled more faster human an-
notation and quality assessment, though future research could explore more streamlined architectures that maintain summary quality while reducing system complexity. Future work should investigate the integration of domainspecific financial knowledge bases, real-time market data, and personalized risk assessment models to enhance the framework’s decision-support capabilities. Additionally, research into more sophisticated prompt engineering techniques and fine-tuning approaches could potentially co-
nsolidate the multistage pipeline while preserving the quality benefits of our current methodology.
REFERENCES
[1] A. Bernales, M. Valenzuela, and I. Zer, “Effects of Information Overload on Financial Markets: How Much Is Too Much?,” *International Finance Discussion Papers*, no. 1372, Board of Governors of the Federal Reserve System, Washington, DC, Mar. 2023. [Online]. Available: https://doi.org/10.17016/IFDP.2023.1372 [2] A. Omar, ”Addressing the Problem of Coherence in Automatic Text Summarization: A Latent Semantic Analysis Approach,” International Journal of English Linguistics, vol. 7, no. 4, pp. 33-
, Jul. 2017, doi: 10.5539/ijel.v7n4p33. [3] Dudy, S., Bedrick, S., and Webber, B. (2021). Refocusing on relevance: Personalization in NLG. Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing. https://doi.org/10.18653/v1/2021.emnlp-main.421 [4] Bele ́m, C. G., Pezeshkpour, P., Iso, H., Maekawa, S., Bhutani, N., and Hruschka, E. (2025). From Single to Multi: How LLMs Hallucinate in Multi-Document Summarization. Findings of the Association for Computational Linguist-
ics: NAACL 2022, 5276–5309.https://doi.org/10.18653/v1/2025.findings-naacl.293

[5] H. Kang and X.-Y. Liu, “Deficiency of large language models in finance: An empirical examination of hallucination,” arXiv preprint arXiv:2311.15548, Nov. 2023. [Online]. Available: https://arxiv.org/abs/2311.15548 [6] D. Patel, P. Patel, A. Chander, S. Dasgupta, and T. Chakaraborty, “Are Large Language Models In-Context Personalized Summarizers? Get an iCOPERNICUS Test Done!,” in *Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing*, Miami, FL, USA, Nov. 202-
4, pp. 16820–16842. [7] M. Zhang, J. Fu, T. Warrier, Y. Wang, T. Tan, and K.-W. Huang, “FAITH: A Framework for Assessing Intrinsic Tabular Hallucinations in Finance,” arXiv preprint arXiv:2508.05201 v1, Aug. 2025. [Online]. Available: https://arxiv.org/html/2508.05201v1 [8] T. Cao, N. Raman, D. Dervovic, and C. Tan, “Characterizing Multimodal Long-form Summarization: A Case Study on Financial Reports,” in *Proceedings of the 2024 Conference on Long-form Multimodal (COLM)*, 2024. [Online]. Availabl-
e: https://openreview.net/pdf?id=hDoN0CAy5e [9] F. Kirstein, T. Ruas, R. Kratel, and B. Gipp, “Tell me what I need to know: Exploring LLM-based (Personalized) Abstractive MultiSource Meeting Summarization,” in *Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (Industry Track)*, Abu Dhabi, UAE, Nov. 2024, pp. 920–939. [Online]. Available: https://aclanthology.org/2024.emnlp-industry.69.pdf [10] T. Li, Z. Li, and Y. Zhang, “Improving Faithfulness of Large Langua-
ge Models in Summarization via Sliding Generation and Self-Consistency,” in *Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)*, Torino, Italia, May 2024, pp. 8804–8817. [11] Y.-H. Lee, X. Li, and J. Ouyang, “Multi-round, chain-of-thought postediting for unfaithful summaries,” arXiv preprint arXiv:2501.11273, Jan. 2025. [Online]. Available: https://arxiv.org/pdf/2501.11273 [12] X. Chen, Z. Chen, and S. Cheng, “-
CoTHSSum: Structured longdocument summarization via chain-of-thought reasoning and hierarchical segmentation,” *J. King Saud Univ. - Comput. Inf. Sci.*, vol. 37, no. 4, 2025. [Online]. Available: https://doi.org/10.1007/s44443-025-000412
[13] T. Takayanagi, K. Izumi, J. Sanz-Cruzado, R. McCreadie, and I. Ounis, “Are Generative AI Agents Effective Personalized Financial Advisors?,” *arXiv preprint* arXiv:2504.05862 v2, Apr. 2025. [Online]. Available: https://arxiv.org/pdf/2504.05862 [14] L. Zhang, P. Liu, M. Henriksboe, E. Lauvrak, J. A. Gulla, and H. Ramampiaro, “PersonalSum: A user-subjective guided personalized summarization dataset for large language models,” Poster presented at Advances in Neural Information Processing Systems-
 (NeurIPS), 2024, Vancouver, BC, Canada, Dec. 2024. [Online]. Available: https://neurips.cc/virtual/2024/poster/97792 :contentReference[oaicite:1]index=1 [15] Q. Li and Q. Zhang, “A Unified Model for Financial Event Classification, Detection and Summarization,” in *Proceedings of the Twenty-Ninth International Joint Conference on Artificial Intelligence (IJCAI-20), Special Track on AI in FinTech*, C. Bessi`ere, Ed., Paris, France, Jul. 2020, pp. 4668–4674. [Online]. Available: https://doi.org/10.2-
4963/ijcai.2020/644 [16] T. Schick and H. Schu ̈tze, “It’s Not Just Size That Matters: Small Language Models Are Also Few-Shot Learners,” in *Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*, Online, June 2021, pp. 2339–2352. [Online]. Available: https://aclanthology.org/2021.naacl-main.185/ doi: 10.18653/v1/2021.naacl-main.185 [17] R. Vansh, D. Rank, S. Dasgupta, and T. Chakraborty, “Accuracy is Not Eno-
ugh: Evaluating Personalization in Summarizers,” in Findings of the Association for Computational Linguistics: EMNLP 2023, 2023, pp. 2582–2595. [Online]. Available: https://aclanthology.org/2023.findingsemnlp.169.pdf [18] S. Mou, Q. Xue, X. Chen, et al., “Prefix tuning with prompt augmentation for efficient financial news summarization,” J. Comput. Soc. Sc., vol. 8, no. 1, p. 19, 2025. [Online]. Available: https://doi.org/10.1007/s42001024-00352-w [19] R. Mihalcea and P. Tarau, “TextRank: Bringing-
 Order into Texts,” in Proceedings of the 2004 Conference on Empirical Methods in Natural Language Processing (EMNLP), 2004, pp. 404–411. [Online]. Available: https://aclanthology.org/W04-3252.pdf
[20] J. Zhang, Y. Zhao, M. Saleh, and P. Liu, “PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization,” in Proceedings of the 37th International Conference on Machine Learning (ICML), 2020. [Online]. Available: https://arxiv.org/abs/1912.08777 [21] Z. Liu, D. Huang, K. Huang, Z. Li, and J. Zhao, “FinBERT: A Pre-trained Financial Language Representation Model for Financial Text Mining,” in Proceedings of the Twenty-Ninth International Joint Conference on Artificial Intelli-
gence (IJCAI-20), Special Track on AI in FinTech, C. Bessie`re, Ed., Yokohama, Japan, Jul. 2020, pp. 4513–4519. [Online]. Available: https://doi.org/10.24963/ijcai.2020/622 [22] X. Ding, Y. Zhang, T. Liu, and J. Duan, “Knowledge-Driven Event Embedding for Stock Prediction,” in Proceedings of COLING, 2016, pp. 2133–2142. [Online]. Available: https://aclanthology.org/C16-1201.pdf [23] X. Feng, H. Qin, T. Liu, et al., “Company-Oriented News Summarization for Stock Movement Prediction,” in Proceedings-
 of ACL, 2022, pp. 1635–1647. [Online]. Available: https://aclanthology.org/2022.acllong.116.pdf [24] K. Du, Y. Zhao, R. Mao, F. Xing, and E. Cambria, “Natural Language Processing in Finance: A Survey,” Information Fusion, vol. 115, p. 102755, 2025. [Online]. Available: https://doi.org/10.1016/j.inffus.2024.102755 [25] K. Du, F. Xing, R. Mao, and E. Cambria, “An Evaluation of Reasoning Capabilities of Large Language Models in Financial Sentiment Analysis,” School of Computer Science and Engineerin-
g, NTU, Singapore, and National University of Singapore, 2025. [Online]. Available: https://sentic.net/llm-reasoning-capabilities-in-financial-sentimentanalysis.pdf [26] E. Cambria, R. Mao, F. Xing, K. Du, and Y. Li, “Large Language Models in Finance: Opportunities and Challenges,” ACM Transactions on Management Information Systems, 2024. doi: 10.1145/3649451
[27] Z. Ao, H. Zhang, Y. Wei, M. Huang, and T. Zhang, “PENS: A Dataset and Generic Framework for Personalized News Headline Generation,” in Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL), 2021, pp. 6383–6395. [Online]. Available: https://aclanthology.org/2021.acl-long.7.pdf [28] J. He, X. Gao, Z. Li, et al., “CTRLsum: Towards Generic Controllable Text Summarization,” in Proceedings of the 58th Annual Meeting of the Association for Computational Lingui-
stics (ACL), 2020, pp. 3536–3550. [Online]. Available: https://aclanthology.org/2022.emnlp-main.396.pdf [29] Z. Dou, N. Yu, T. Liu, et al., “GSum: A General Framework for Guided Neural Abstractive Summarization,” in Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics (NAACL), 2021, pp. 4830–4842. [Online]. Available: https://aclanthology.org/2021.naacl-main.385.pdf [30] A. Afzal, Y. Kumar, and S. Dandapat, “Domain-Specific Abstractive S-
ummarization: Factual Consistency, Faithfulness and Challenges,” 2023. [Online]. Available: https://arxiv.org/abs/2307.00963 [31] J. Wei, X. Wang, D. Schuurmans, et al., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models,” in Advances in Neural Information Processing Systems (NeurIPS), 2022. [Online]. Available: https://arxiv.org/abs/2201.11903 [32] Q. Zhu, C. Shao, Z. Yang, and M. Sun, “Iterative Summarization PrePrompting for Enhanced Chain-of-Thought Reasoning,” 2025. [Onlin-
e]. Available: https://arxiv.org/abs/2501.12345 [33] R. Nallapati, B. Zhou, C. dos Santos, C ̧ . Gul ̧cehre, and B. Xiang, “Abstractive Text Summarization using Sequence-to-Sequence RNNs and Beyond,” in Proceedings of the 20th SIGNLL Conference on Computational Natural Language Learning (CoNLL), 2017, pp. 280–290. [Online]. Available: https://aclanthology.org/K16-1028.pdf [34] Z. Cao, F. Wei, L. Dong, S. Li, and M. Zhou, “Ranking with Recursive Neural Networks and Its Application to Multi-Document-
 Summarization,” in Proc. AAAI Conf. Artif. Intell., vol. 29, no. 1, 2015. [Online]. Available: https://doi.org/10.1609/aaai.v29i1.9490 [35] M. Fenniak and contributors, ”PyPDF2: A pure-python PDF library capable of extracting document information,” Python Package Index, 2024. [Online]. Available: https://pypdf2.readthedocs.io/ [36] J. Singer-Vine, ”pdfplumber: Plumb a PDF for detailed information about each text character, rectangle, and line,” GitHub, 2024. [Online]. Available: https://github.co-
m/jsvine/pdfplumber [37] A. Q. Jiang et al., ”Mistral 7B,” arXiv preprint arXiv:2310.06825, Oct. 2023. [Online]. Available: https://arxiv.org/abs/2310.06825

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:17.153Z
- **Text Length:** 44493 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
