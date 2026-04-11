# PDF Document: Moradi et al. - Exploring the landscape of large language models Foundations, techniques, and challenges.pdf

**File Path:** Moradi et al. - Exploring the landscape of large language models Foundations, techniques, and challenges.pdf

**Processed Date:** 2026-02-10T18:17:10.225Z

**File Size:** 1474.18 KB

**Total Pages:** 26

**Extracted Pages:** 26

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2827

**Title:** Exploring the landscape of large language models: Foundations, techniques, and challenges

**Collection:** Large Files

---

## Extracted Text Content

1
Exploring the landscape of large language models:
Foundations, techniques, and challenges
Milad Moradi*
AI Research, Tricentis, Vienna, Austria
m.moradi-vastegani@tricentis.com
ORCID: 0000-0002-9724-0339
Ke Yan
AI Research, Tricentis, Sydney, Australia
k.yan@tricentis.com
David Colwell
AI Research, Tricentis, Sydney, Australia
d.colwell@tricentis.com
Matthias Samwald
Institute of Artificial Intelligence, Center for Medical Statistics, Informatics, and Intelligent Systems, Medical University of Vienna, Vienna, Austria
matthias.samwald@meduniwien.ac.at
ORCID: 0000-0002-4855-2571
Rhona Asgari
AI Research, Tricentis, Vienna, Austria
r.asgari@tricentis.com
* Corresponding author. Postal address: Tricentis GmbH, Leonard-Bernstein-Straße 10, 1220 Vienna, Austria.

2
Abstract
In this review paper, we delve into the realm of Large Language Models (LLMs), covering their
foundational principles, diverse applications, and nuanced training processes. The article sheds
light on the mechanics of in-context learning and a spectrum of fine-tuning approaches, with a
special focus on methods that optimize efficiency in parameter usage. Additionally, it explores
how LLMs can be more closely aligned with human preferences through innovative
reinforcement learning frameworks and other novel methods that incorporate human feedback.
The article also examines the emerging technique of retrieval augmented generation, integrating
external knowledge into LLMs. The ethical dimensions of LLM deployment are discussed,
underscoring the need for mindful and responsible application. Concluding with a perspective on
future research trajectories, this review offers a succinct yet comprehensive overview of the
current state and emerging trends in the evolving landscape of LLMs, serving as an insightful
guide for both researchers and practitioners in artificial intelligence.
Keywords: Large language models, Artificial intelligence, Natural language processing, Machine
learning

3
1. Introduction
Generative Artificial Intelligence (GAI) has experienced an unprecedented surge in growth
and adoption over the recent years, reshaping the landscape of Artificial Intelligence (AI) (Banh
& Strobel, 2023; Ooi et al.). At the forefront of this transformative wave are advanced generative
language models, particularly exemplified by technologies like Generative Pre-trained
Transformer (GPT) series (Cooper, 2023). These models, equipped with extraordinary large
neural networks, novel Machine Learning (ML) algorithms, and trained on extensive datasets,
have demonstrated remarkable capabilities in understanding, generating, and manipulating
human-like text. The accessibility of pre-trained models and the open-source nature of many
frameworks have democratized the application of generative Large Language Models (LLMs),
leading to its integration into various sectors, from chatbots and personal assistants to healthcare
and finance (Bakhshandeh, 2023; Y. Chang et al., 2023; Kasneci et al., 2023; Thirunavukarasu et
al., 2023). Table 1 presents a wide range of example applications of LLMs in various domains. In
this review article, we present a comprehensive overview of foundations, methods, applications,
and challenges of LLMs.
In early 2010s, Recurrent Neural Networks (RNNs) stood out as effective models that
leverage their sequential processing capabilities to capture contextual dependencies and produce
coherent textual sequences (Schuster & Paliwal, 1997; Sutskever et al., 2011). However, RNNs
suffer from limitations such as difficulties in capturing long-range dependencies, vanishing or
exploding gradients during training, and slow processing of sequential information (De Mulder
et al., 2015; Yu et al., 2019). The advent of transformers revolutionized text generation and
language modelling by introducing attention mechanisms that enable capturing contextual
information across the entire input sequence simultaneously (Vaswani et al., 2017). Transformers,
with models like GPT, have surpassed RNNs in performance, allowing for parallelization, better
handling of long-term dependencies, and enhanced modelling of complex linguistic structures
(Devlin et al., 2018). Multi-headed self-attention, which is regarded as the basic power behind
transformer language models, involves using multiple attention heads to simultaneously capture
different aspects of language, facilitating a richer understanding of relationships within the
context (Vaswani et al., 2017).
In recent years, the size of LLMs has experienced an exponential surge, thanks to three main
factors: 1) introduction of new transformer architectures and training algorithms, 2) access to
massive datasets of text, and 3) very powerful computational resources (Gillioz et al., 2020; Wolf
et al., 2020). Table 2 presents a list of well-known LLMs developed and released since the advent
of transformers.

4
Table 1 Examples of applications in various domains where large language models can be utilized to effectively and intelligently automate processes.
Domain LLMs application examples
Education and research
• Tutoring systems providing personalized learning experiences. • Summarization of academic papers and generation of research hypotheses.
Healthcare and medical • Medical documentation automation.
• Analysis and generation of patient information leaflets.
Finance and economics • Sentiment analysis of financial reports and news.
• Automated financial advising and report generation.
Technology and software development
• Code generation and assistance in software development. • Bug detection and automated code documentation.
Legal and compliance
• Automated contract review and legal document analysis. • Compliance monitoring through the analysis of communications and documents.
Marketing and advertising • Generation of personalized marketing content.
• Social media content creation and management.
Entertainment and gaming
• Creating dynamic dialogues for non-player characters in video games. • Scriptwriting assistance for movies and TV shows.
Human resources • Resume screening and job matching.
• Automated generation of job descriptions.
Public relations and communications
• Crisis management through sentiment analysis of social media. • Automated press release generation.
Customer service • Chatbots for handling customer inquiries.
• Automated email response generation.
Content creation and journalism
• Automated generation of news articles and reports. • Writing assistance for creative writing, scripts, and advertising copy.
Translation and linguistics • Real-time translation services.
• Dialect and language preservation through linguistic analysis.

5
Table 2 Well-known LLMs developed and released since 2018, along with the number of parameters each one has. During this five-year period, the model size has increased from hundreds of millions to more than one trillion. This exponential growth in model size has had a major contribution in the rapid improvement of LLMs’ performance. Other factors such as more powerful hardware, massive training data, and modern training algorithms have also played important roles in the rapid success of LLMs.
Year Short name Full name Parameters
2018
GPT-1 Generative Pre-trained Transformer 1 117 million
BERT-large Bidirectional Encoder Representations from
Transformers 340 million
2019
XLNet-large - 340 million
GPT-2 Generative Pre-trained Transformer 2 1.5 billion
2020
T5 Text-to-Text Transfer Transformer 11 billion
GPT-3 Generative Pre-trained Transformer 3 175 billion
2021 LaMDA Language Model for Dialogue Applications 137 billion
2022
PaLM-1 Pathways Language Model 1 540 billion
BLOOM BigScience Large Open-science Open-access
Multilingual Language Model 176 billion
2023
LLaMA Large Language Model Meta AI 65 billion
Claude-1 - 93 billion
Claude-2 - 340 billion
PaLM-2 Pathways Language Model 2 137 billion
GPT-4 Generative Pre-trained Transformer 4 > 1 trillion
Gemini 1 - 1.5 trillion
2024
Mistral - 7 billion
Gemini 1.5 - 2.4 trillion
The substantial growth in the number of parameters in LLMs has enhanced their capacity to
learn intricate patterns and semantic complexities, enabling them to excel in more sophisticated
Natural Language Processing (NLP) tasks. As a result of the fast progress in learning various
complicated tasks, LLMs have witnessed widespread adoption across diverse application
domains, from healthcare and finance to education and technology (Kasneci et al., 2023; Safranek
et al., 2023; Thirunavukarasu et al., 2023; S. Wu et al., 2023). The lifecycle of an LLM-powered

6
application involves various steps from selecting model architecture and pre-training to domain
adaptation, aligning with human preferences, and application integration. In the following
sections, we give a review of state-of-the-art methodologies and technological best practices
utilized in different steps of designing, developing, and deploying LLMs and LLM-powered
applications.
2. Pre-training LLMs
Pre-training large language models involves training a neural network on a massive corpus
of text data, allowing the model to learn intricate patterns, contextual relationships, and language
structures (Guu et al., 2020; Z. Lin et al., 2023). During pre-training, the model does not have
specific knowledge about downstream tasks it will later perform. Instead, it learns a generalized
understanding of language. The language understanding capabilities of the LLM are stored within
the model’s parameters, which in fact act as the model’s memory. In other words, the more the
number of model’s parameters, the more the model’s memory and ability to perform sophisticated
tasks (Gholami & Omar, 2023; W. X. Zhao et al., 2023). During pre-training, these parameters
are adjusted with respect to a pre-training objective in order to minimize the training loss and
maximize the model accuracy. Once pre-trained, the LLM can be fine-tuned on smaller, task
specific datasets for various applications, leveraging the comprehensive linguistic knowledge
acquired during pre-training.
2.1. Model architectures and pre-training objectives
LLMs are usually pre-trained in a self-supervised manner, which means no labeled training
samples are used to direct the training process (Ericsson et al., 2022). Self-supervised pre-training
can be conducted using various training objectives, depending on the LLM architecture and the
tasks it is intended to perform (Y. A. Chung et al., 2021; Lai et al., 2021). In general, a transformer
language model can be composed of an encoder, a decoder, or both the components.
An encoder-decoder or sequence to sequence (seq2seq) model utilizes an initial encoder to
process input sequences and distill contextual information, followed by a decoder that generates
an output sequence step by step, making it highly effective for tasks such as translation, question
answering, and summarization (Ramachandran et al., 2017). This model architecture is commonly
pre-trained using a combination of masked language modeling and seq2seq reconstruction. This
combination of objectives helps the model learn both the contextualized representations of input
sequences (from the encoder) and the autoregressive generation of output sequences (from the

7
decoder). T5 (Raffel et al., 2020) and BART (M. Lewis et al., 2019) are among powerful encoder
decoder LLMs. Fig. 1 illustrates the overall architecture of a seq2seq transformer model
consisting of an encoder and a decoder component. Encoder-decoder LLMs may suffer from
scalability problems, hence, encoder- and decoder-only models have attracted more attention in
designing modern LLMs with tens to thousands parameters.
Fig. 1 The overall architecture of an encoder-decoder transformer language model. The encoder and decoder components consist of several encoder and decoder blocks. In the encoder component, the input is first mapped to embeddings, which are numerical vectors. The embeddings are combined with positional encodings, then multi-head self-attention computes a representation conditioning on other words in the sequence. Other computations such as addition, normalization, and feed-forward layers perform s-
ubsequent computations resulting in the final encoded input. The decoder component receives the outputs generated in the previous time steps, converts them to embeddings, combines them with positional encoding, and passes them through self-attention, encoder-attention, addition, normalization and feed-forward layers. Linear transformations and the softmax function are finally applied to have probabilities over the vocabulary for the next output token. Encoder-only and decoder-only models are compr-
ised of multiple encoder or decoder blocks, respectively.

8
An encoder-only model, also known as autoencoder, compresses input sequences into a
dense representation, leveraging the self-attention mechanism to capture contextual information,
and then reconstructs the original input (P. Li et al., 2023). It is usually pre-trained using the
masked language modelling objective, which involves randomly masking out certain tokens in a
given input sequence and training a model to predict the masked tokens based on the context
provided by the surrounding unmasked tokens (Salazar et al., 2020). BERT (Devlin et al., 2018)
and RoBERTa (Y. Liu et al., 2019) are among well-known encoder-only LLMs. This class of
LLMs are suitable for tasks like text classification, sentiment analysis, and Named Entity
Recognition (NER).
A decoder-only model, also known as autoregressive, generates output sequences step by
step, attending to previously generated tokens and conditioning on the context (Z. Yang et al.,
2019). It is pre-trained using the causal language modelling objective, which involves training the
model to predict the next token in a sequence based solely on the preceding tokens, enforcing a
unidirectional causality (Jain et al., 2023). Decoder-only models can perform well on text
generation tasks. GPT (T. B. Brown et al., 2020), Chinchilla (Hoffmann et al., 2022), BLOOM
(Workshop et al., 2022), LLaMA (Touvron et al., 2023), and almost all the current massively
large and powerful language models fall into this category of LLMs.
3. Domain adaptation
Domain adaptation in LLMs refers to the process of adjusting these models to perform
effectively in specific domains of interest or on particular tasks (Nishida et al., 2020). LLMs are
pre-trained on vast and diverse datasets, but their generalization to specific domains may be
limited. Domain adaptation helps overcome this limitation by training the model on domain
specific or task-specific data, enabling it to understand and generate contextually relevant content
within that particular domain or task (Chronopoulou et al., 2022). Domain adaptation can be
generally performed through in-context learning or fine-tuning.
3.1. In-context learning
In-context learning in LLMs refers to the capability of these models to dynamically adapt
and refine their understanding based on the context of a conversation or interaction (T. B. Brown
et al., 2020). In-context learning allows the model to leverage information provided earlier in a
conversation, thus enhancing its ability to generate responses that are contextually coherent and
maintain a consistent narrative. This dynamic adaptation is crucial for tasks such as chatbots,

9
virtual assistants, and interactive applications where maintaining context throughout a
conversation is essential for producing meaningful and contextually appropriate output (X. Wang
et al., 2023). Zero-shot, one-shot, and few-shot learning are in-context learning paradigms that
showcase the adaptability and generalization capabilities of LLMs.
In zero-shot learning, the model demonstrates the ability to perform tasks it has never been
explicitly trained on by leveraging its pre-existing knowledge (Pourpanah et al., 2023; Wang et
al., 2019). This is achieved by providing the model with a prompt and task description without
any specific training examples. One-shot learning involves giving the model a single example of
a task, enabling it to grasp the underlying pattern and generalize to similar instances (Tran et al.,
2018). Few-shot learning extends this concept by giving the model a minimal set of examples,
allowing it to learn more nuanced task-specific information (Beltagy et al., 2022; M. Yang, 2021).
In-context learning has some benefits such as reduced training data dependency, rapid task
adaptation, and task flexibility. However, it suffers from some limitations. Examples included in
the prompt may take up the majority of space available as the context window. Moreover, it may
not work for smaller models as they have less generalization abilities than larger models.
Furthermore, its performance can be highly sensitive to the quality and representativeness of
examples provided in the context (Song et al., 2023).
3.2. Fine-tuning
Fine-tuning LLMs is a crucial process that involves adapting a pre-trained model to specific
tasks or domains to enhance its performance and applicability (Radiya-Dixit & Wang, 2020).
Initially trained on extensive and diverse datasets in an unsupervised manner, an LLM can be
fine-tuned using supervised training on narrower datasets that align with one or more particular
tasks or the user's specific needs. This process typically involves exposing the model to task
specific examples and retraining it on this targeted data. Fine-tuning allows the model to learn
task-specific complexities, vocabulary, and context, tailoring its capabilities to better suit
specialized applications such as sentiment analysis, text summarization, or domain-specific
conversational interactions (Howard & Ruder, 2018; Wei et al., 2022). The effectiveness of fine
tuning lies in striking a balance between leveraging the general knowledge gained during pre
training and adapting the model to perform optimally in specific, user-defined contexts, thereby
maximizing its utility across a spectrum of real-world tasks.
The most common approach to fine-tuning LLMs is instruction fine-tuning, also known as
fine-tuning with instruction prompts, which emphasizes on the refinement of model behavior
based on explicit instructions (Zhang et al., 2023). In instruction fine-tuning, the LLM is trained

10
using examples that demonstrate how the model should respond to a specific instruction such that
every prompt-completion pair comes along with a specific instruction to the model. Templates
offered by programming libraries can be utilized to convert data samples to instruction samples
that are suitable for fine-tuning on a wide range of language processing tasks (Wei et al., 2022).
Fine-tuning an LLM on a single task may lead to catastrophic forgetting (Kemker et al.,
2018; Kirkpatrick et al., 2017), which refers to overwriting or overshadowing the knowledge
previously acquired during pre-training caused by updating the model’s weights during fine
tuning. This may cause a decline in performance across other tasks or domains. This phenomenon
hampers the model's ability to maintain a balanced and versatile understanding across a wide
range of contexts, highlighting the trade-off between specialization for a particular task and the
risk of forgetting valuable general knowledge acquired during its initial pre-training phase.
One strategy to address the catastrophic forgetting is to fine-tune the LLM on multiple tasks
at the same time (H. W. Chung et al., 2022; Karimi Mahabadi et al., 2021). The Fine-tuned
Language Net (FLAN) offers a set of templates and techniques for instruction fine-tuning of
LLMs on various tasks, with the goal of retaining and consolidating model’s generalization
abilities (Wei et al., 2022). FLAN was already utilized to fine-tune powerful models such as
FLAN-T5 and FLAN-PaLM (H. W. Chung et al., 2022). It is worth noting that a downside of
multi-task fine-tuning is the need for a large number of training samples across multiple tasks.
Another strategy to cope with the catastrophic forgetting is to avoid modifying majority of the
model’s parameters, which is discussed in the next subsection. Fig. 2 illustrates the two domain
adaptation paradigms for a movie review title generation example task.
3.3. Parameter-efficient fine-tuning
Parameter-Efficient Fine-Tuning (PEFT) is a set of techniques designed to update or adapt
LLMs to specific tasks or datasets without the need to retrain the entire model (Ding et al., 2023;
Fu et al., 2023; H. Liu et al., 2022). This approach is crucial given the immense size and
complexity of LLMs, which can have billions or even trillions of parameters. PEFT methods
target a small subset of the model’s parameters or add a minimal number of task-specific adapter
layers and parameters. These methods enable personalized or task-specific adjustments while
maintaining the general capabilities of the underlying model. PEFT not only reduces the
computational resources and time required for fine-tuning but also shows greater robustness to
the catastrophic forgetting problem since it leaves most of the pre-trained weights unchanged (Fu
et al., 2023). It also allows for more flexible and scalable model customization. PEFT methods
fall into three general categories, i.e. selective, additive, and reparameterization (Lialin et al., 2023),
which are illustrated in Fig. 3.

11
Fig 2 The two different domain-adaptation paradigms of LLMs for a movie review title generation example task. In-context learning offers three different methods, i.e. zero-shot, one-shot, and few-shot learning. Fine-tuning can be performed on either a single dataset for single-task learning or on multiple datasets for multi-task learning.
Selective PEFT methods focus on updating a targeted subset of a model's parameters, layers,
or biases (Gheini et al., 2021; Jiang et al., 2022). On the other hand, additive methods involve
introducing additional, trainable parameters or layers to a pre-trained model, without altering the

12
original model's core structure or parameters. Additive PEFT methods usually adopt two
approaches: 1) adding adapters, which are trainable layers, to the architecture of a pre-trained
language model (Houlsby et al., 2019; Pfeiffer et al., 2020), 2) soft prompting, which refers to
adding trainable parameters to prompt embeddings (X. Liu et al., 2023; Vu et al., 2022). This
additional parameters are added in the form of virtual tokens (also known as soft prompts), whose
optimal values are learned by supervised training on a specific task, a process referred to as
prompt tuning. A different set of soft prompts or adapter layers can be trained for each task, then
swap them at inference time, and combine them with the original LLM’s weights.
Low-Rank Adaptation (LoRA) is a well-known reparameterization PEFT method, whose
goal is to reduce the number of parameters to be trained during fine-tuning (Hu et al., 2021). It
treats the original model’s weights as untrainable, but introduces a pair of rank decomposition
matrices, which contain trainable parameters instead. The typical supervised learning process is
then employed for training these smaller matrices to capture task-specific information. At
inference time, the two low-rank matrices are multiplied together, resulting in a matrix with the
same dimensions as the original frozen weights. The new matrix is then added to the original
weights, and the updated values are used as the final weights. A different rank decomposition
matrix can be trained for each task, then it can be merged with the original model when using the
LLM for that specific task. The key advantage of LoRA lies in its ability to maintain the integrity
and generalization power of an LLM while efficiently adapting it to new tasks, thereby avoiding
the need for extensive retraining or modification of the entire model (Dettmers et al., 2023).
4. Reinforcement learning from human feedback
LLMs have the potential to behave in ways that are concerning, primarily due to the nature
of their training data. These models are trained on vast and diverse datasets sourced from the
internet, which includes a wide range of human expression — from informative and educational
to toxic and harmful (Liang et al., 2021). Consequently, without careful design and robust
safeguards, these models can inadvertently generate toxic language, aggressive responses, or
dangerous information (Ousidhoum et al., 2021). LLMs should adhere to the core values of being
helpful, honest, and harmless, ensuring that their responses are beneficial, truthful, and do not
cause any harm or offense. Reinforcement Learning from Human Feedback (RLHF) plays a
crucial role in mitigating the risks of LLMs generating harmful or unhelpful responses, by refining
and aligning their outputs with human values and preferences (Griffith et al., 2013; J. Lin et al.,
2020).

13
Fig 3 Different parameter-efficient fine-tuning techniques for large language models. Selective methods involve selecting and updating a limited number of the model’s layers or parameters. Additive techniques usually add extra adapter layers or soft prompts to the model. Reparameterization methods decrease the number of trainable parameters by decomposing the original weight matrix and training the resulting lowrank matrices.
RLHF is a pivotal technique in the development of more reliable and ethical LLMs. This
approach incorporates feedback from human interactions to guide and correct an LLM’s
responses (Ouyang et al., 2022; Stiennon et al., 2020). The importance of RLHF lies in its ability
to fine-tune the model's outputs to align more closely with human values and societal norms. By
actively learning from human input, LLMs can better understand nuances, context, and the
subtleties of human communication, thereby reducing the likelihood of producing inappropriate,
biased, or harmful content. This human-in-the-loop system ensures that the models are continually
evolving and adapting to new information and changing societal standards, making them more
robust, accurate, and safe for widespread use. RLHF is thus a critical step in bridging the gap

14
between purely data-driven AI responses and the complex, often subjective nature of human
interaction and ethics (Bakker et al., 2022).
A RLHF framework typically has two main components, i.e. a reward model and a
Reinforcement Learning (RL) algorithm. The reward model acts as an intermediary that translates
human judgments into a format that the AI can understand and use for learning (Rafailov et al.,
2023). The task of the reward model is to evaluate the outputs generated by the LLM, and assign
a 'reward' score based on how well these outputs align with human expectations and values. The
reward model can be an AI model built through this process: 1) giving a dataset of samples from
a target task to the target LLM, 2) collecting outputs from the LLM, 3) collecting quantifiable
human feedback that evaluate the LLM’s outputs alignment with specific criteria, and 4) training
an AI model, i.e. reward model, in a supervised manner on the evaluated samples. The result of
this process is a reward model that can be used to provide reward values specifying how the LLM
aligns with human preferences (Ouyang et al., 2022).
A single iteration of the RLHF process involves three main steps: 1) a prompt is given to the
LLM and it generates a response, 2) the response is given to the reward model and it outputs a
reward value such that a higher value refers to more alignment with the specific criteria, and 3)
the reward value is passed to the RL algorithm and it updates the LLM’s parameters. This process
continues iteratively until the LLM satisfies some alignment criteria or reaches a maximum
number of iterations (Ouyang et al., 2022; Rafailov et al., 2023). The Proximal Policy
Optimization (PPO) is a popular RL algorithm widely used for conducting RLHF on language
models (Schulman et al., 2017). PEFT techniques can be also used during RL to avoid updating
all model’s parameters. Fig. 4 depicts the overall schema of the RLHF and reward model
frameworks.
Direct Preference Optimization (DPO) (Rafailov et al., 2024) is a novel method for aligning
the model's responses more closely with human preferences or desired outcomes. DPO is
particularly relevant in scenarios where reinforcement learning might not effectively capture clear
distinctions between human judgments or where explicit labels for correct responses are
unavailable or inadequate. The key steps in DPO typically include 1) generating pairs of responses
by the LLM to a given input, 2) evaluating which response in which pair is better based on specific
criteria by human raters or automated systems, and 3) updating the model weights to favor the
production of responses that are more likely to be preferred in future outputs. The advantage of
DPO is that it directly optimizes for the end goal of generating human-preferred text, rather than
merely minimizing a traditional loss function that might not perfectly correlate with what is
subjectively better or more useful. This method is particularly useful for applications like

15
chatbots, AI assistants, or any other systems where the quality of generated text is judged
subjectively by users (Casper et al., 2023).
Fig. 4 The reinforcement learning from human feedback framework. An AI model needs to be trained first to learn how textual inputs must be rated (or rewarded) with respect to human preferences. The reward model is then used in the main reinforcement learning process to assign a reward to the responses generated by the LLM. An optimization method (usually PPO) updates the LLM’s weights based on the reward to align the language model with the specific criteria.
A problem that may emerge in RLHF is reward hacking, which refers to learning to maximize
the reward without truly fulfilling the intended task or adhering to the desired behavior (Eisenstein
et al., 2023; Skalse et al., 2022). For instance, the LLM may learn to add some unnecessary words
to its responses to align with the alignment objectives. In fact, the model finds ways to maximize
the reward score while deviating from the actual objective or behaving in undesirable ways. A
common solution to cope with this problem is to keep an initial version of the LLM and compare
its responses with responses of the model that is updated in RLHF. Then a measure of probability
distribution divergence, e.g. Kullback-Leibler, is used to quantify how the updated model
diverges from the initial model, and a divergence penalty is added to the reward to penalize the
updated model if it deviates too much from the initial LLM (Bai et al., 2022). Another solution to
mitigate reward hacking is to employ an ensemble of reward models, each one assessing a

16
different aspect of aligning with human preferences, or an ensemble of different reward
optimization objectives (Coste et al., 2023; Eisenstein et al., 2023).
5. Retrieval-augmented generation
Although LLMs offer significant advantages in various applications, they also have some
limitations. One major issue is their reliance on the data they were trained on. LLMs may generate
incorrect answers because they fundamentally operate by predicting the next word based on
patterns learned from their training data, rather than access to verified information. Moreover,
LLMs often "hallucinate" answers, a tendency to confidently generate responses even when they
lack accurate or sufficient information on the topic (J. Li et al., 2023). A solution to overcome
these challenges is to combine the generative capabilities of LLMs with information retrieval
from external sources of information to enhance the factual correctness of responses.
Retrieval-Augmented Generation (RAG) is a framework for building LLM-powered
applications by integrating LLMs with external knowledge retrieval mechanisms (P. Lewis et al.,
2020). In RAG, when a query is presented, the model first retrieves relevant documents or data
from an external source, which could be anything from local documents and private wikis to
databases and web pages. This retrieved information is then used as a supplementary context for
the generative model, which crafts its response not only based on its pre-existing training but also
using this freshly sourced, context-specific information. This process significantly boosts the
model's ability to provide accurate, up-to-date, and detailed responses, especially in scenarios
where the answer requires current or specialized knowledge (Cai et al., 2022). RAG effectively
bridges the gap between the deep, pattern-based understanding of LLMs and the need for real
time, fact-based information, making it a powerful tool for applications that demand high
accuracy and specificity in responses. Fig. 5 illustrates the overall schema of the RAG framework.
Vector databases play a crucial role in the RAG process by efficiently managing and
facilitating the retrieval of relevant information (Han et al., 2023). In RAG, when a query is
inputted, the system needs to quickly find the most relevant data from a potentially massive pool
of documents. Vector databases come into play here, as they store data in a format that allows for
quick and efficient similarity searches. They convert text data into high-dimensional vectors, i.e.
embeddings, using a language model. These vectors capture the semantic essence of the text.
When a query is received, the system converts it into a vector and searches the database for the
most similar vectors, effectively finding the most relevant documents (Palma, 2023). This fast
and efficient retrieval process, enabled by vector databases, significantly enhances the RAG's

17
capability to pull in the most pertinent and contextually appropriate information, thereby
improving the accuracy and relevance of the responses generated by the LLM.
Fig. 5 The retrieval-augmented generation framework commonly used in LLM-powered applications. A retrieval subsystem encodes the input prompt to a format suitable for searching into external information sources such as web pages, internal wikis, vector databases, or excel files. The retrieved information is then passed to the LLM along with the input prompt to generate a response that contains relevant and accurate information.
6. Ethical considerations
Developing and using LLMs involve various ethical considerations, reflecting the broad
impact this technology can have on society. Here are some key areas of concern:
• Bias and fairness: Language models can inherit and amplify biases present in their
training data, potentially leading to unfair or discriminatory outcomes. It's essential to
consider how these models might perpetuate biases based on race, gender, age, or other
factors, and to take steps to mitigate these biases (Liang et al., 2021).
• Privacy: Since language models are trained on vast amounts of data, including potentially
sensitive or personal information, there are significant privacy concerns. Ensuring that
the data used for training respects individuals' privacy and does not expose personal
information is crucial (H. Brown et al., 2022).
• Misinformation and manipulation: These models can generate convincing but false or
misleading information, which can be used for malicious purposes like spreading

18
misinformation or manipulating public opinion. Managing and mitigating these risks is a
major ethical concern (Huertas-García et al., 2021).
• Transparency and accountability: Understanding how decisions are made by AI
models is essential for accountability, especially when these decisions affect people's
lives. Ensuring transparency in how models are trained, what data they use, and how they
make predictions is vital for ethical deployment (Z. Wu et al., 2023).
• Environmental impact: The energy consumption required for training and running
large-scale AI models has significant environmental impacts. It's important to consider
and minimize the carbon footprint associated with these technologies (Luccioni et al.,
2023).
Addressing these ethical considerations requires a multi-disciplinary approach, involving not
just technologists but also ethicists, policymakers, and representatives from various impacted
communities.
7. Conclusion and future directions
In conclusion, this review has comprehensively explored the multifaceted domain of LLMs,
elucidating their foundational aspects, diverse applications, and intricate methodologies. We have
seen how in-context learning and fine-tuning, particularly through parameter-efficient techniques,
significantly enhance LLMs' capabilities. Moreover, the alignment of these models with human
preferences via reinforcement learning from human feedback, and the integration of external data
through retrieval-augmented generation, mark significant strides in their evolution. However, the
ethical considerations surrounding LLMs underscore the need for cautious and responsible
advancement. As we look towards the future, the potential of LLMs in various fields is immense,
yet it is accompanied by a responsibility to navigate their challenges and opportunities with a
balanced approach. This review underscores the importance of continued research and thoughtful
application in the realm of LLMs, ensuring their benefits are maximized while mitigating
potential risks.
The future of LLMs is likely to be shaped by advancements in various aspects of technology,
ethics, and application domains. Here are some potential future directions:
• Model architecture and efficiency: Developing more efficient and powerful neural
network architectures that can process information more effectively. This includes
research into sparser models, better parameter efficiency, and techniques to reduce the

19
computational and environmental costs of training and running these models (Kaplan et
al., 2020).
• Improved understanding and contextualization: Future LLMs need to offer enhanced
understanding and contextualization capabilities, allowing them to grasp more complex
and nuanced human interactions. This might include better handling of sarcasm, idioms,
and cultural references (Kumar & Anand, 2020).
• Data curation and quality: Improving the way data is curated and used for training. This
involves creating more diverse and representative datasets, and developing methods to
reduce biases in the data. It also includes better techniques for data privacy and security
(T.-Y. Chang & Jia, 2023).
• Multimodal integration: Expanding the capabilities of LLMs to handle multimodal
inputs and outputs, such as integrating text with images, audio, and possibly other sensory
data. This would allow LLMs to understand and generate a broader range of content
(Meskó, 2023).
• Personalization and adaptability: Future LLMs might be more adaptable to individual
user preferences and styles, offering a more personalized interaction experience while
maintaining privacy and ethical standards (King & Cook, 2020).
• Expanded application areas: We can expect to see LLMs being applied in more diverse
fields such as healthcare (for diagnosis and patient care), education (personalized
learning), law (legal research and analysis), and creative industries (content creation)
(Kaddour et al., 2023; H. Wang et al., 2023).
• Interpretability and explainability: Enhancing the ability to interpret and explain model
decisions. This is crucial for building trust in AI systems and for their safe deployment in
sensitive areas like healthcare and law (H. Zhao et al., 2024).
• Bias detection and mitigation: Continuing to research and develop methods to detect
and mitigate biases in model outputs. This is essential for ensuring that LLMs are fair and
do not perpetuate or amplify harmful stereotypes (Huang et al., 2020).
• Improved safety and robustness: Efforts need to be made to ensure LLMs operate safely
within their intended parameters, to strengthen their robustness against adversarial attacks
and misuse, and ensuring they are secure from attempts to exploit their capabilities for
malicious purposes (Moradi & Samwald, 2021; Zhiheng et al., 2023).
These potential directions reflect a combination of technical innovations, societal needs, and
ethical considerations. The actual path of LLM development will depend on a variety of factors,

20
including technological breakthroughs, market demands, regulatory environments, and public
acceptance.
Statements and Declarations
The authors have no relevant financial or non-financial interests to disclose. The authors
have no conflicts of interest to declare that are relevant to the content of this article.
References
Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., . . . Henighan, T. (2022). Training a helpful and harmless assistant with reinforcement learning from human feedback. arXiv preprint arXiv:2204.05862.
Bakhshandeh, S. (2023). Benchmarking medical large language models. Nature Reviews Bioengineering, 1(8), 543-543. doi: 10.1038/s44222-023-00097-7 Bakker, M., Chadwick, M., Sheahan, H., Tessler, M., Campbell-Gillingham, L., Balaguer, J., Botvinick, M. (2022). Fine-tuning language models to find agreement among humans with diverse preferences. Advances in neural information processing systems, 35, 38176-38189. Banh, L., & Strobel, G. (2023). Generative artificial intelligence. Electronic Markets, 33-
(1), 63. doi: 10.1007/s12525-023-00680-1 Beltagy, I., Cohan, A., Logan IV, R., Min, S., & Singh, S. (2022). Zero- and Few-Shot NLP with Pretrained Language Models, Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics: Tutorial Abstracts, Dublin, Ireland. Brown, H., Lee, K., Mireshghallah, F., Shokri, R., & Tramèr, F. (2022). What Does it Mean for a Language Model to Preserve Privacy? Paper presented at the Proceedings of the 2022 ACM Conference on Fairness, Accou-
ntability, and Transparency, Seoul, Republic of Korea. https://doi.org/10.1145/3531146.3534642 Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Amodei, D. (2020). Language models are few-shot learners. the 34th Conference on Neural Information Processing Systems (NeurIPS 2020).
Cai, D., Wang, Y., Liu, L., & Shi, S. (2022). Recent Advances in Retrieval-Augmented Text Generation. Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval, Madrid, Spain. https://doi.org/10.1145/3477495.3532682 Casper, S., Davies, X., Shi, C., Gilbert, T. K., Scheurer, J., Rando, J., Freire, P. (2023). Open problems and fundamental limitations of reinforcement learning from human feedback. arXiv preprint arXiv:2307.15217. Chang, T.-Y., & J-
ia, R. (2023, July). Data Curation Alone Can Stabilize In-context Learning, Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Toronto, Canada. Chang, Y., Wang, X., Wang, J., Wu, Y., Zhu, K., Chen, H., Wang, Y. (2023). A survey on evaluation of large language models. arXiv preprint arXiv:2307.03109.
Chronopoulou, A., Peters, M., & Dodge, J. (2022, July). Efficient Hierarchical Domain Adaptation for Pretrained Language Models, Proceedings of the 2022 Conference of the North

21
American Chapter of the Association for Computational Linguistics: Human Language Technologies, Seattle, United States. Chung, H. W., Hou, L., Longpre, S., Zoph, B., Tay, Y., Fedus, W., Brahma, S. (2022). Scaling instruction-finetuned language models. arXiv preprint arXiv:2210.11416. Chung, Y. A., Zhang, Y., Han, W., Chiu, C. C., Qin, J., Pang, R., & Wu, Y. (2021). w2v-BERT: Combining Contrastive Learning and Masked Language Modeling for Self-Supervised Speech Pre-Training. Paper presented at the -
2021 IEEE Automatic Speech Recognition and Understanding Workshop (ASRU). Cooper, G. (2023). Examining Science Education in ChatGPT: An Exploratory Study of Generative Artificial Intelligence. Journal of Science Education and Technology, 32(3), 444-452. doi: 10.1007/s10956-023-10039-y Coste, T., Anwar, U., Kirk, R., & Krueger, D. (2023). Reward model ensembles help mitigate overoptimization. arXiv preprint arXiv:2310.02743.
De Mulder, W., Bethard, S., & Moens, M.-F. (2015). A survey on the application of recurrent neural networks to statistical language modeling. Computer Speech & Language, 30(1), 61-98. doi: https://doi.org/10.1016/j.csl.2014.09.005 Dettmers, T., Pagnoni, A., Holtzman, A., & Zettlemoyer, L. (2023). Qlora: Efficient finetuning of quantized llms. arXiv preprint arXiv:2305.14314.
Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805. Ding, N., Qin, Y., Yang, G., Wei, F., Yang, Z., Su, Y., Sun, M. (2023). Parameter-efficient fine-tuning of large-scale pre-trained language models. Nature Machine Intelligence, 5(3), 220-235. doi: 10.1038/s42256-023-00626-4 Eisenstein, J., Nagpal, C., Agarwal, A., Beirami, A., D'Amour, A., Dvijotham, D., Ramachandran, D. (2023-
). Helping or herding? reward model ensembles mitigate but do not eliminate reward hacking. arXiv preprint arXiv:2312.09244.
Ericsson, L., Gouk, H., Loy, C. C., & Hospedales, T. M. (2022). Self-Supervised Representation Learning: Introduction, advances, and challenges. IEEE Signal Processing Magazine, 39(3), 42-62. doi: 10.1109/MSP.2021.3134634 Fu, Z., Yang, H., So, A. M.-C., Lam, W., Bing, L., & Collier, N. (2023). On the Effectiveness of Parameter-Efficient Fine-Tuning. Proceedings of the AAAI Conference on Artificial Intelligence, 37(11), 12799-12807. doi: 10.1609/aaai.v37i11.26505 Gheini, M., Ren, X., & May, J. (202-
1, November). Cross-Attention is All You Need: Adapting Pretrained Transformers for Machine Translation, Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, Online and Punta Cana, Dominican Republic. Gholami, S., & Omar, M. (2023). Do Generative Large Language Models need billions of parameters? arXiv preprint arXiv:2309.06589.
Gillioz, A., Casas, J., Mugellini, E., & Khaled, O. A. (2020, 6-9 Sept. 2020). Overview of the Transformer-based Models for NLP Tasks. the 2020 15th Conference on Computer Science and Information Systems (FedCSIS). Griffith, S., Subramanian, K., Scholz, J., Isbell, C. L., & Thomaz, A. L. (2013). Policy shaping: Integrating human feedback with reinforcement learning. Advances in neural information processing systems, 26.
Guu, K., Lee, K., Tung, Z., Pasupat, P., & Chang, M. (2020). Retrieval Augmented Language Model Pre-Training. Paper presented at the Proceedings of the 37th International Conference on Machine Learning, Proceedings of Machine Learning Research. https://proceedings.mlr.press/v119/guu20a.html Han, Y., Liu, C., & Wang, P. (2023). A Comprehensive Survey on Vector Database: Storage and Retrieval Technique, Challenge. arXiv preprint arXiv:2310.11703.

22
Hoffmann, J., Borgeaud, S., Mensch, A., Buchatskaya, E., Cai, T., Rutherford, E., . . . Clark, A. (2022). An empirical analysis of compute-optimal large language model training. Advances in neural information processing systems, 35, 30016-30030.
Houlsby, N., Giurgiu, A., Jastrzebski, S., Morrone, B., Laroussilhe, Q. D., Gesmundo, A., . . . Gelly, S. (2019). Parameter-Efficient Transfer Learning for NLP. Paper presented at the Proceedings of the 36th International Conference on Machine Learning, Proceedings of Machine Learning Research. https://proceedings.mlr.press/v97/houlsby19a.html
Howard, J., & Ruder, S. (2018, July). Universal Language Model Fine-tuning for Text Classification, Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Melbourne, Australia. Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., . . . Chen, W. (2021). Lora: Low-rank adaptation of large language models. arXiv preprint arXiv:2106.09685. Huang, P.-S., Zhang, H., Jiang, R., Stanforth, R., Welbl, J., Rae, J., . . . Kohli, P. (2020)-
. Reducing Sentiment Bias in Language Models via Counterfactual Evaluation, Findings of the Association for Computational Linguistics: EMNLP 2020, Online. Huertas-García, Á., Huertas-Tato, J., Martín, A., & Camacho, D. (2021). Countering Misinformation Through Semantic-Aware Multilingual Models, Intelligent Data Engineering and Automated Learning – IDEAL 2021, Cham. Jain, N., Zhang, D., Ahmad, W. U., Wang, Z., Nan, F., Li, X., . . . Xiang, B. (2023). ContraCLM: Contrastive Learning For Causal Lang-
uage Model, Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Toronto, Canada. Jiang, L., Zhou, H., Lin, Y., Li, P., Zhou, J., & Jiang, R. (2022). ROSE: Robust Selective Fine-tuning for Pre-trained Language Models, Abu Dhabi, United Arab Emirates.
Kaddour, J., Harris, J., Mozes, M., Bradley, H., Raileanu, R., & McHardy, R. (2023). Challenges and applications of large language models. arXiv preprint arXiv:2307.10169. Kaplan, J., McCandlish, S., Henighan, T., Brown, T. B., Chess, B., Child, R., . . . Amodei, D. (2020). Scaling laws for neural language models. arXiv preprint arXiv:2001.08361. Karimi Mahabadi, R., Ruder, S., Dehghani, M., & Henderson, J. (2021). Parameter-efficient Multitask Fine-tuning for Transformers via Shared Hypernetworks-
, Online.
Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., . . . Kasneci, G. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274. doi: https://doi.org/10.1016/j.lindif.2023.102274 Kemker, R., McClure, M., Abitino, A., Hayes, T., & Kanan, C. (2018). Measuring Catastrophic Forgetting in Neural Networks. Proceedings of the AAAI Conference on Artificial Intelligence, 32(1). doi: 10.16-
09/aaai.v32i1.11651
King, M., & Cook, P. (2020). Evaluating Approaches to Personalizing Language Models, Proceedings of the Twelfth Language Resources and Evaluation Conference, Marseille, France. Kirkpatrick, J., Pascanu, R., Rabinowitz, N., Veness, J., Desjardins, G., Rusu, A. A., . . . Hadsell, R. (2017). Overcoming catastrophic forgetting in neural networks. Proceedings of the National Academy of Sciences, 114(13), 3521-3526. doi: doi:10.1073/pnas.1611835114 Kumar, A., & Anand, V. (2020). Transformers on Sarcasm -
Detection with Context, Proceedings of the Second Workshop on Figurative Language Processing, Online. Lai, C. I., Chuang, Y. S., Lee, H. Y., Li, S. W., & Glass, J. (2021). Semi-Supervised Spoken Language Understanding via Self-Supervised Speech and Language Model Pretraining. Paper presented at the ICASSP 2021 - 2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP).

23
Lewis, M., Liu, Y., Goyal, N., Ghazvininejad, M., Mohamed, A., Levy, O., . . . Zettlemoyer, L. (2019). Bart: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension. arXiv preprint arXiv:1910.13461. Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., . . . Rocktäschel, T. (2020). Retrieval-augmented generation for knowledge-intensive nlp tasks. Advances in neural information processing systems, 33, 9459-9474.
Li, J., Cheng, X., Zhao, X., Nie, J.-Y., & Wen, J.-R. (2023). HaluEval: A Large-Scale Hallucination Evaluation Benchmark for Large Language Models, Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, Singapore. Li, P., Pei, Y., & Li, J. (2023). A comprehensive survey on design and application of autoencoder in deep learning. Applied Soft Computing, 138, 110176. doi: https://doi.org/10.1016/j.asoc.2023.110176 Lialin, V., Deshpande, V., & Rumshisky, A. (2023). Sca-
ling down to scale up: A guide to parameterefficient fine-tuning. arXiv preprint arXiv:2303.15647.
Liang, P. P., Wu, C., Morency, L.-P., & Salakhutdinov, R. (2021). Towards Understanding and Mitigating Social Biases in Language Models. Paper presented at the Proceedings of the 38th International Conference on Machine Learning. https://proceedings.mlr.press/v139/liang21a.html Lin, J., Ma, Z., Gomez, R., Nakamura, K., He, B., & Li, G. (2020). A Review on Interactive Reinforcement Learning From Human Social Feedback. IEEE Access, 8, 120757-120765. doi: 10.1109/ACCESS.2020.3006254 Lin, Z., Gong, Y.-
, Shen, Y., Wu, T., Fan, Z., Lin, C., . . . Chen, W. (2023). Text Generation with Diffusion Language Models: A Pre-training Approach with Continuous Paragraph Denoise. Paper presented at the Proceedings of the 40th International Conference on Machine Learning, Proceedings of Machine Learning Research. https://proceedings.mlr.press/v202/lin23d.html Liu, H., Tam, D., Muqeeth, M., Mohta, J., Huang, T., Bansal, M., & Raffel, C. A. (2022). Few-shot parameter-efficient fine-tuning is better and cheaper -
than in-context learning. Advances in neural information processing systems, 35, 1950-1965.
Liu, X., Zheng, Y., Du, Z., Ding, M., Qian, Y., Yang, Z., & Tang, J. (2023). GPT understands, too. AI Open. doi: https://doi.org/10.1016/j.aiopen.2023.08.012 Liu, Y., Ott, M., Goyal, N., Du, J., Joshi, M., Chen, D., . . . Stoyanov, V. (2019). Roberta: A robustly optimized bert pretraining approach. arXiv preprint arXiv:1907.11692. Luccioni, A. S., Viguier, S., & Ligozat, A.-L. (2023). Estimating the carbon footprint of bloom, a 176b parameter language model. Journal of Machine Learning Research, 2-
4(253), 1-15. Meskó, B. (2023). The Impact of Multimodal Large Language Models on Health Care’s Future. J Med Internet Res, 25, e52865. doi: 10.2196/52865
Moradi, M., & Samwald, M. (2021). Evaluating the Robustness of Neural Language Models to Input Perturbations, Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, Online and Punta Cana, Dominican Republic. Nishida, K., Nishida, K., Saito, I., Asano, H., & Tomita, J. (2020). Unsupervised Domain Adaptation of Language Models for Reading Comprehension, Proceedings of the Twelfth Language Resources and Evaluation Conference, Marseille, France. Ooi, K.-B., Tan, G. W.--
H., Al-Emran, M., Al-Sharafi, M. A., Capatina, A., Chakraborty, A., . . . Wong, L.-W. (2023). The Potential of Generative Artificial Intelligence Across Disciplines: Perspectives and Future Directions. Journal of Computer Information Systems, 1-32. doi: 10.1080/08874417.2023.2261010 Ousidhoum, N., Zhao, X., Fang, T., Song, Y., & Yeung, D.-Y. (2021). Probing Toxic Content in Large Pre-Trained Language Models, Proceedings of the 59th Annual Meeting of the

24
Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), Online. Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., . . . Ray, A. (2022). Training language models to follow instructions with human feedback. Advances in neural information processing systems, 35, 27730-27744. Palma, D. D. (2023). Retrieval-augmented Recommender System: Enhancing Recommender Systems with Large Language Models. P-
aper presented at the Proceedings of the 17th ACM Conference on Recommender Systems, Singapore, Singapore. https://doi.org/10.1145/3604915.3608889
Pfeiffer, J., Rücklé, A., Poth, C., Kamath, A., Vulić, I., Ruder, S., . . . Gurevych, I. (2020). AdapterHub: A Framework for Adapting Transformers, Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: System Demonstrations, Online. Pourpanah, F., Abdar, M., Luo, Y., Zhou, X., Wang, R., Lim, C. P., . . . Wu, Q. M. J. (2023). A Review of Generalized Zero-Shot Learning Methods. IEEE Transactions on Pattern Analysis and Machine Intelligence, 45(4), 4051-4070. doi: 10-
.1109/TPAMI.2022.3191696
Radiya-Dixit, E., & Wang, X. (2020). How fine can fine-tuning be? Learning efficient language models. Paper presented at the Proceedings of the Twenty Third International Conference on Artificial Intelligence and Statistics, Proceedings of Machine Learning Research. https://proceedings.mlr.press/v108/radiya-dixit20a.html Rafailov, R., Sharma, A., Mitchell, E., Ermon, S., Manning, C. D., & Finn, C. (2023). Direct preference optimization: Your language model is secretly a reward model. Paper present-
ed at the 37th Conference on Neural Information Processing Systems (NeurIPS). Rafailov, R., Sharma, A., Mitchell, E., Manning, C. D., Ermon, S., & Finn, C. (2024). Direct preference optimization: Your language model is secretly a reward model. Advances in neural information processing systems, 36.
Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., . . . Liu, P. J. (2020). Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res., 21(1), Article 140.
Ramachandran, P., Liu, P., & Le, Q. (2017). Unsupervised Pretraining for Sequence to Sequence Learning, Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing, Copenhagen, Denmark. Safranek, C. W., Sidamon-Eristoff, A. E., Gilson, A., & Chartash, D. (2023). The role of large language models in medical education: applications and implications (Vol. 9, pp. e50945): JMIR Publications Toronto, Canada. Salazar, J., Liang, D., Nguyen, T. Q., & Kirchhoff, K. (2020). Masked-
 Language Model Scoring, Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Online. Schulman, J., Wolski, F., Dhariwal, P., Radford, A., & Klimov, O. (2017). Proximal policy optimization algorithms. arXiv preprint arXiv:1707.06347.
Schuster, M., & Paliwal, K. K. (1997). Bidirectional recurrent neural networks. IEEE Transactions on Signal Processing, 45(11), 2673-2681. doi: 10.1109/78.650093 Skalse, J., Howe, N., Krasheninnikov, D., & Krueger, D. (2022). Defining and characterizing reward gaming. Advances in neural information processing systems, 35, 9460-9471.
Song, Y., Wang, T., Cai, P., Mondal, S. K., & Sahoo, J. P. (2023). A Comprehensive Survey of Fewshot Learning: Evolution, Applications, Challenges, and Opportunities. ACM Comput. Surv., 55(13s), Article 271. doi: 10.1145/3582688 Stiennon, N., Ouyang, L., Wu, J., Ziegler, D., Lowe, R., Voss, C., . . . Christiano, P. F. (2020). Learning to summarize with human feedback. Advances in neural information processing systems, 33, 3008-3021.

25
Sutskever, I., Martens, J., & Hinton, G. E. (2011). Generating text with recurrent neural networks. Paper presented at the Proceedings of the 28th international conference on machine learning (ICML-11). Thirunavukarasu, A. J., Ting, D. S. J., Elangovan, K., Gutierrez, L., Tan, T. F., & Ting, D. S. W. (2023). Large language models in medicine. Nature Medicine, 29(8), 1930-1940. doi: 10.1038/s41591-023-02448-8 Touvron, H., Lavril, T., Izacard, G., Martinet, X., Lachaux, M.-A., Lacroix, T., . . . Azh-
ar, F. (2023). Llama: Open and efficient foundation language models. arXiv preprint arXiv:2302.13971. Tran, T. K., Sato, H., & Kubo, M. (2018). One-shot Learning Approach for Unknown Malware Classification. Paper presented at the 2018 5th Asian Conference on Defense Technology (ACDT). Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., . . . Polosukhin, I. (2017). Attention is all you need. Paper presented at the Advances in neural information processing systems. Vu, T., -
Lester, B., Constant, N., Al-Rfou’, R., & Cer, D. (2022). SPoT: Better Frozen Model Adaptation through Soft Prompt Transfer, Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Dublin, Ireland. Wang, H., Li, J., Wu, H., Hovy, E., & Sun, Y. (2023). Pre-Trained Language Models and Their Applications. Engineering, 25, 51-65. doi: https://doi.org/10.1016/j.eng.2022.04.024 Wang, W., Zheng, V. W., Yu, H., & Miao, C. (2019). A Survey of Zero-Sh-
ot Learning: Settings, Methods, and Applications. ACM Trans. Intell. Syst. Technol., 10(2), Article 13. doi: 10.1145/3293318 Wang, X., Zhu, W., & Wang, W. Y. (2023). Large language models are implicitly topic models: Explaining and finding good demonstrations for in-context learning. arXiv preprint arXiv:2301.11916.
Wei, J., Bosma, M., Zhao, V. Y., Guu, K., Yu, A. W., Lester, B., . . . Le, Q. V. (2022). Finetuned language models are zero-shot learners. Paper presented at the The Tenth International Conference on Learning Representations. Wolf, T., Debut, L., Sanh, V., Chaumond, J., Delangue, C., Moi, A., . . . Rush, A. (2020). Transformers: State-of-the-Art Natural Language Processing, Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: System Demonstrations, Online.
Workshop, B., Scao, T. L., Fan, A., Akiki, C., Pavlick, E., Ilić, S., . . . Yvon, F. (2022). Bloom: A 176bparameter open-access multilingual language model. arXiv preprint arXiv:2211.05100. Wu, S., Irsoy, O., Lu, S., Dabravolski, V., Dredze, M., Gehrmann, S., . . . Mann, G. (2023). Bloomberggpt: A large language model for finance. arXiv preprint arXiv:2303.17564. Wu, Z., Merrill, W., Peng, H., Beltagy, I., & Smith, N. A. (2023). Transparency Helps Reveal When Language Models Learn Meaning. Transac-
tions of the Association for Computational Linguistics, 11, 617-634. doi: 10.1162/tacl_a_00565
Yang, M. (2021). A Survey on Few-Shot Learning in Natural Language Processing. Paper presented at the 2021 International Conference on Artificial Intelligence and Electromechanical Automation (AIEA). Yang, Z., Dai, Z., Yang, Y., Carbonell, J., Salakhutdinov, R. R., & Le, Q. V. (2019). Xlnet: Generalized autoregressive pretraining for language understanding. Paper presented at the Advances in neural information processing systems. Yu, Y., Si, X., Hu, C., & Zhang, J. (2019). A Review of Recurrent Ne-
ural Networks: LSTM Cells and Network Architectures. Neural Computation, 31(7), 1235-1270. doi: 10.1162/neco_a_01199

26
Zhang, S., Dong, L., Li, X., Zhang, S., Sun, X., Wang, S., . . . Wu, F. (2023). Instruction tuning for large language models: A survey. arXiv preprint arXiv:2308.10792.
Zhao, H., Chen, H., Yang, F., Liu, N., Deng, H., Cai, H., . . . Du, M. (2024). Explainability for Large Language Models: A Survey. ACM Trans. Intell. Syst. Technol. doi: 10.1145/3639372 Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., . . . Dong, Z. (2023). A survey of large language models. arXiv preprint arXiv:2303.18223. Zhiheng, X., Rui, Z., & Tao, G. (2023). Safety and Ethical Concerns of Large Language Models, Proceedings of the 22nd Chinese National Conference on Computational Li-
nguistics (Volume 4: Tutorial Abstracts), Harbin, China.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:10.225Z
- **Text Length:** 62659 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 26 of 26
