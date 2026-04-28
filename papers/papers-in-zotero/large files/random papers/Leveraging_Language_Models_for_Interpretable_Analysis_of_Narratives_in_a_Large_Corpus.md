# PDF Document: Bai et al. - 2025 - Leveraging Language Models for Interpretable Analysis of Narratives in a Large Corpus.pdf

**File Path:** Bai et al. - 2025 - Leveraging Language Models for Interpretable Analysis of Narratives in a Large Corpus.pdf

**Processed Date:** 2026-02-10T18:15:53.097Z

**File Size:** 1075.30 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3287

**Title:** Leveraging Language Models for Interpretable Analysis of Narratives in a Large Corpus

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Leveraging Language Models for Interpretable
Analysis of Narratives in a Large Corpus
Eric A. Bai1, Minling Zhou1, Ricardo Henao1, Kyle M. Schwing2, and Lawrence Carin1 1Duke University, 2USG Federal Laboratory
Abstract
Narratives drive human behavior and lay at the core of geopolitics, but have eluded quantification that would permit measurement of their overlap and evolution. We present an interpretable model that integrates an established bag-of-words (BoW) topical representation and a novel LLM-based question answering (Q&A) narrative model, which share a latent Reproducing Kernel Hilbert Space representation, to quantify written documents. Our approach mitigates the cost, interpretability, and generalization-
 challenges of using a LLM to analyze large corpora without full inference. We derive efficient functional gradient descent updates that are interpretable and structurally analogous to the self-attention mechanism in Transformers. We further introduce an in-context Q&A extrapolation method inspired by Transformer architectures, enabling accurate prediction of Q&A outcomes for unqueried documents.
I. INTRODUCTION
A. Motivation and Framing
Large Language Models (LLMs) [5, 30, 8] have demonstrated remarkable capabilities in analyzing and summarizing large corpora of text. Given a document, an LLM can answer questions, extract themes, and even generate high-level insights. However, while these outputs are often fluent and compelling, the underlying reasoning process remains opaque. This black-box nature of LLMs poses a barrier to trust, especially in high-stakes domains such as policy analysis, legal review and healthcare, where decis-
ions must be transparent, auditable, and justifiable to human stakeholders [15, 24].
In this work, we propose a structured and interpretable alternative: a double-softmax narrative model that leverages LLMs for question-answering but delegates the generalization and reasoning to a transparent latent model. Rather than relying on the LLM to analyze the corpus end-to-end, we use it to generate or answer a set of interpretable questions. These question and answer (Q&A) pairs are then modeled using a principled latent factor model, where each latent dimension – termed a “narrative” – -
is a collection of probability mass functions (PMFs) over answers to each question. This structure allows us to interpret each narrative as a coherent perspective on the corpus, grounded in observable Q&A behavior.
This approach offers several advantages. First, it systematizes the use of LLMs: questions are designed and answered in a controlled, reproducible manner. Second, it enables interpretability at multiple levels: the questions themselves are human-readable, the latent narratives are composed of interpretable PMFs, and the document-level representations are convex combinations of these narratives. We also demonstrate that inference in the model is interpretable. Third, our proposed model supports ext-
rapolation: by learning a mapping from document embeddings to narrative distributions, we can predict Q&A behavior for unseen documents without re-querying the LLM. This reduces cost, ensures consistency, and enables active learning strategies.
Importantly, our framework can incorporate an additional layer of interpretability by asking the LLM to provide provenance information – that is, to specify which parts of the document support each answer. This source attribution can be stored alongside the Q&A data and used to audit or explain the model’s inferences. When combined with our structured narrative model, this enables a hybrid system that is not only interpretable in its latent structure but also traceable in its use of evidence. This-
 is particularly
arXiv:2511.18599v1 [eess.SP] 23 Nov 2025

2
Topic 1 Topic 2 Topic 3 Topic 4
Words
Documents
Question 1 Question 2 Question !
Narrative 1 Narrative 2
Topic 5
Docs with Topic 1 dominant
Answers
LLM Design & Answering of Questions
LLM Analysis of Narratives
LLM Analysis of Topics
Figure 1: Overview of our coupled topic and narrative modeling system. The bottom layer shows BoW-based topic modeling: each topic is a PMF over words, and each document is represented by a PMF over topics. Based on user interest, an LLM selects one or more relevant topics, and the corresponding documents (in blue) are selected for further analysis. An LLM generates Q categorical questions, and a second LLM answers them for each selected document. Each narrative is defined by Q PMFs — one per ques-
tion — and each document is assigned a PMF over narratives. The narratives and topics are learned jointly, and subsequently interpreted by an LLM.
valuable in domains where accountability and transparency are paramount [17].
Our model aligns with the growing emphasis on explainable AI (XAI) in high-stakes decision-making. As recent work has emphasized, interpretability is not merely a technical desideratum – it is a prerequisite for ethical, legal, and institutional accountability [15, 24]. By combining the expressive power of LLMs with the transparency of structured latent models, we offer a hybrid framework that is both powerful and trustworthy. In doing so, we reframe the role of the LLM: not as an opaque analyst, -
but as an oracle embedded within a transparent reasoning system.
As illustrated in Figure 1, the process begins with BoW-based topic modeling over the entire corpus. An LLM interprets the learned topics and identifies those aligned with the user’s interests. Documents with high probability under the selected topics are forwarded for Q&A analysis. One LLM designs a set of categorical questions, and a second LLM answers them for each document. This results in a structured representation of each selected document as a vector of Q&A responses, which serves as input-
 to the narrative model. The narrative, structured here as Q&A responses, is the framing of the topic, which is scoped by the BoW. This relationship codifies the linguistic significance of narrative, a cognitive framework that provides social meaning to communication [12].
The topic and narrative models may be learned jointly or separately. In both cases, we model documentdependent distributions over topics and narratives using latent functions in a reproducing kernel Hilbert space (RKHS) [25]. These functions are updated via a functional gradient descent procedure that we show is interpretable from a Bayesian perspective. Specifically, the updates correspond to posterior-minus-prior shifts, aggregated across documents via a kernel that encodes document similarity. -
We show that this RKHS-based setup can be interpreted as a soft, deterministic analog of hierarchical Bayesian topic models such as HDP [27, 19].

3
B. Summary of Contributions
This paper makes the following key contributions:
• Interpretable Narrative Modeling: We introduce a novel paradigm in which each document is represented by a distribution over latent narratives — interpretable patterns in LLM-derived questionanswer responses. Each narrative consists of a set of probability mass functions (PMFs) over answers to a set of user-selected questions, enabling structured and transparent perspectives across the corpus. These narratives distinguish among the claims of the documents. We note that our model determines discr-
ete narrative differences that often are conflicting statements of causality, which have been a challenge to capture systematically and quantitatively [20].
• Joint RKHS-Based Topic and Narrative Modeling: We formulate both topic and narrative models within a shared reproducing kernel Hilbert space (RKHS). This design enables interpretable, modular learning via functional gradient descent, and provides a principled Bayesian interpretation of the inference procedure.
• Transformer-Inspired Q&A Extrapolation: To reduce reliance on costly LLM inference, we develop a Transformer-style mechanism for in-context extrapolation. This allows the model to predict Q&A outcomes for unseen documents, generalizing narrative structure from a limited set of annotated examples.
• Agentic and Auditable Analysis Framework: We operationalize our model within an agentic system, where LLMs perform interpretable subtasks (e.g., question generation, answering, provenance attribution), and the latent model encodes, extrapolates, and audits these outputs. This hybrid framework is designed for transparency, multilingual flexibility, and real-world scalability.
C. Related Work
a) Factor Models for Categorical Data.: Latent factor models have long been used to analyze categorical response data, particularly in psychometrics and educational testing. Classical models such as Item Response Theory (IRT) and its multidimensional extensions (MIRT) model the probability of a categorical response as a function of a low-dimensional latent trait vector and item-specific parameters [23]. While effective for prediction and measurement, these models often suffer from limited interpre-
tability: the latent traits are real-valued and rotationally invariant, making it difficult to assign semantic meaning to individual dimensions without strong structural constraints [29].
Recent work has sought to improve interpretability in factor models through sparsity, rotation methods, or post hoc analysis [6, 29]. However, these approaches often require additional assumptions or complex optimization procedures. Moreover, they typically operate on binary or ordinal responses and do not generalize easily to structured Q&A data with multiple categorical outcomes per item.
b) Topic Models and LDA.: Latent Dirichlet Allocation (LDA) [3] is a foundational model for interpretable analysis of text corpora. Each topic is a probability distribution over words, and each document is modeled as a mixture of topics. While LDA provides interpretable components by design, it is limited to unsupervised BoW data and does not incorporate structured supervision such as Q&A responses. Neural topic models [11] and embedding-based extensions have improved flexibility but often at the -
cost of interpretability and transparency.

4
Our proposed model generalizes LDA in two key ways: (1) each latent factor (or “narrative”) is a collection of PMFs over answers to multiple questions, rather than a single PMF over words; and (2) we use a double-softmax parameterization that enables efficient point estimation via gradient descent, avoiding the complexity of variational inference or sampling.
c) Explainable AI and Trustworthy Systems.: The rise of explainable AI (XAI) reflects a growing demand for transparency in machine learning systems, particularly in high-stakes domains such as healthcare, law, and public policy [15, 16]. While post hoc explanation methods such as SHAP and LIME provide local interpretability for black-box models, they do not offer a global, structured understanding of how predictions are made. In contrast, intrinsically interpretable models — such as decision trees-
 or rule-based systems — offer transparency but often lack the flexibility needed for complex data.
Our model contributes to this space by offering a hybrid approach: it leverages the expressive power of LLMs for Q&A generation and answering, but delegates generalization and reasoning to a structured, interpretable latent model. Each narrative is a semantically meaningful distribution over Q&A outcomes, and document-level predictions are convex combinations of these interpretable components. This design supports auditability, source attribution, and principled extrapolation — key desiderata in t-
he emerging field of trustworthy AI [1].
II. COUPLED AND INTERPRETABLE TOPIC AND NARRATIVE MODELING
A. Data description
Consider a corpus composed of N documents, and that a set of Q questions are posed toward each of the documents. Each question has A categorical possible answers, where for simplicity we assume that the number of possible answers available for each question, A, is the same for each of the Q questions. This is not a requirement, but it simplifies notation. Further, assume that the vocabulary used for the documents consists of V words (or tokens), and that each of the documents may also be viewed in-
 terms of a count of the number of occurrences of each of the V words; this representation does not account for word order, and is termed a “bag-of-words” (BoW) representation, as widely employed in topic models [3, 27].
The BoW and question-and-answer (Q&A) data connected to the N documents are represented for i = 1, . . . , N as
BoW: ci ∈ ZV
+ (1)
Q&A: yi = (yi1, . . . , yiQ), yiq ∈ {1, . . . , A} (2)
where ci is a vector of counts, of the number of times each of the V words appears in document i, and yi is a vector of Q categorical answers connected to document i. For simplicity, we here assume that LLM-generated Q&A data are available for all documents, but in practice such is done on a targeted subset of documents, as discussed further below (details in Section IV).
We wish to develop a model that analyzes all of these data jointly, and that is interpretable. The model will be used as a tool within an agentic system, as discussed in Section III, and hence the results of the model should be interpretable to an LLM. Toward an interpretable model, we consider factor models for both the BoW and Q&A data, with these models sharing a learned latent representation for each document.
B. Interpretable Joint Model for Bag-of-Words and Question-Answer Data
Let xi ∈ Rd represent a latent vector associated with document i, that is shared by the models for the BoW and Q&A data, and that will be learned. For the BoW data, we consider the factor model
ci ∼ Mult(Φf (xi), Mi) (3)

5
where Mi is the total number of words in document i, Φ is a V × KBoW matrix, and column k of Φ is a probability mass function (PMF) over the V words (termed a topic in the topic modeling literature [3]). The vector f (xi) is KBoW -dimensional, and is a PMF over topics. Column k of Φ is denoted Φ:,k, and is
represented as Φ:,k = softmax(φk), where φk ∈ RV . Further, we represent f (xi) = softmax(f ̃(xi)), where
f ̃(xi) : Rd → RKBoW . We refer to this as a double-softmax topic model.
We develop a similar model for the Q&A data. In particular
yiq ∼ Mult(Ω(q)g(xi), 1) (4)
where Ω(q) is an A × KQ&A matrix, each column of which is an A-dimensional PMF over the A answers for question q ∈ {1, . . . , Q}. Further, g(xi) is a KQ&A-dimensional PMF, dependent on the same xi
as employed by the topic model. The kth column of Ω(q) is modeled as Ω(q)
:,k = softmax(ω(q)
k ), where
ω(q)
k ∈ RA. Further, g(xi) = softmax(g ̃(xi)).
Let Ω be a QA × KQ&A matrix, manifested by “stacking” the Q matrices Ω(1), . . . , Ω(Q). The kth column of Ω is composed of Q PMFs, each of dimension A. We refer to each of the KQ&A columns of Ω as a narrative, or perspective, on how all Q questions are answered. A narrative generalizes the concept of a topic from the BoW perspective. Like our double-softmax topic model, we also develop a double-softmax narrative model. The columns of Ω are interpretable in terms of narratives, in the same manner -
that the columns of Φ are interpreted in terms of topics. The number of topics, KBoW , need not equal the number of narratives, KQ&A.
This is a hierarchical model for BoW and Q&A data, with {xi} shared across all documents, these driving
BoW and Q&A specific functions f ̃(x) and g ̃(x), respectively. Further connections to prior hierarchical models are discussed in Section II-E, after developing further properties of the proposed model.
C. RKHS Modeling of Latent Functions
The functions f ̃(x) and g ̃(x) are modeled as members of a reproducing kernel Hilbert space (RKHS) [25] defined by a feature mapping ψ(x) : Rd → Rd′, where in principle d′ may be infinity. We therefore have
f ̃(x) = F ψ(x) , g ̃(x) = Gψ(x) (5)
where F ∈ RKBoW ×d′ and G ∈ RKQ&A×d′, and these matrices are learned based on the observed data. However, they are not learned explicitly, but in terms of the associated functions they manifest, as discussed next.
For the BoW data, the log-likelihood of the model parameters is
LBoW ({xi}, {φk}, F ) = 1
N
N
X
i=1
V
X
v=1
nvi
Mi
log[Φv,: · softmax(F ψ(xi))] (6)
where nvi is the number of times word v appears in document i, and Φv,: is row v of Φ. The expression Φv,: · softmax(F ψ(xi)) is an inner product between Φv,: and softmax(F ψ(xi)). Constants associated with the multinomial distribution do not impact learning of the model parameters {xi}, {φk} and F based on LBoW (·), and therefore are ignored. Recall that the kth column of Φ is represented in terms of the softmax of φk, a vector that is among the model parameters.
Similarly, the log-likelihood of the data connected to the Q&A data is represented as

6
LQ&A({xi}, {ω(q)
k }, G) = 1
NQ
N
X
i=1
Q
X
q=1
log[Ω(q)
yiq,: · softmax(Gψ(x))] (7)
where Ω(yqiq),: is row yiq of Ω(q). Recall that the kth column of Ω(q) is represented by the softmax of ω(q)
k, parameters to be learned.
When we perform learning, LBoW ({xi}, {φk}, F ) and LQ&A({xi}, {ω(q)
k }, G) are added for update of
{xi}, and they are considered separately for update of their respective other parameters. Each Φv,: ∈ RKBoW
is a learned vector associated with word v ∈ {1, . . . , V }, and Ω(yq,:) ∈ RKQ&A is a learned vector associated with answer y ∈ {1, . . . , A} to question q ∈ {1, . . . , Q}. These vector representations for discrete variables may be viewed as learned embedding vectors, analogous to the token embedding vectors used in Transformerbased language models [30]. We will make this connection more explicit in Section IV, when we relate the RKHS-based construction to Transformers.
D. Interpretable properties of learning framework
To provide insight into the role of the RKHS function, we consider learning F with LBoW ({xi}, {φk}, F )
and G with LQ&A({xi}, {ω(q)
k }, G), assuming the other parameters are known (this corresponds to parameter updates connected to F and G, with other parameters fixed, based on their previously updated values, for example in the context of a gradient-descent (GD) parameter update, or generalizations thereof).
As derived in Appendix A, a GD update connected to F and G yields the following functional gradient-descent updates for the two latent functions:
f ̃l+1(x) = f ̃l(x) + αF
N
N
X
i=1
V
X
v=1
nvi
Mi
h
pl(1, . . . , KBoW |v) − softmax(f ̃l(xi))
i
κ(x, xi) (8)
g ̃l+1(x) = g ̃l(x) + αG
N
N
X
i=1
Q
X
q=1
1
Q
h
pl(1, . . . , KQ&A|yiq) − softmax(g ̃l(xi))
i
κ(x, xi) (9)
where κ(x, xi) = ψ(x)⊤ψ(xi). With the RKHS representation for f ̃(x) and g ̃(x), we do not explicitly retain update of F and G, but rather directly represent the associated function via the kernel κ(x, xi). The terms in blue font in (8) and (9) correspond to local gradients (connected to each document i). Specifically, these terms correspond to gradients ∇f ̃i and ∇g ̃i with respect to PV
v=1
nvi
Mi log[Φv,: · softmax(f ̃i)] and
PQ
q=1 log[Ω(yqiq),: · softmax(g ̃i)], respectively. The terms in red font in (8) and (9) are manifested by the
chain rule, relating f ̃i to F ψ(xi) and g ̃i to Gψ(xi) (taking gradients with respect to the rows of F and G), ultimately coupling the N documents via the kernel κ(xi, xj). Making connections to the Transformer [30, 31, 32], the kernel-based (red) computations in (8) and (9) have close connections to attention, while the computations in blue correspond to local elements within a Transformer (analogous to the multi-layered perceptron (MLP) Transformer layers). We make more precise connections to T-
ransformers in Section IV.
In (8), pl(1, . . . , KBoW |v) is the conditional probability of each of the KBoW topics, given the observation
of word v ∈ {1, . . . , V }, when fl(xi) = softmax(f ̃l(xi)) is the prior probability of topic usage. Similarly, in (9) pl(1, . . . , KQ&A|yiq) is the conditional probability of the KQ&A narratives, for yiq ∈ {1, . . . , A} the observed answer to question q ∈ {1, . . . , Q}, when gl(xi) = softmax(g ̃l(xi)) represents the prior probability of narrative usage. These may be expressed (see Appendix B for derivation) as
pl(1, . . . , KBoW |v) = Φv,: ⊙ fl(xi)
Φv,: · fl(xi) , fl(xi) = softmax(f ̃l(xi)) (10)
pl(1, . . . , KQ&A|yiq) = Ω(yqiq),: ⊙ gl(xi)
Ω(yqiq),: · gl(xi)
, gl(xi) = softmax(g ̃l(xi)) (11)

7
Global Self-Attention Block, with κ(x!, x")
gl (x! )
+
Local Computations for Average Posterior Over Narratives
+
gl$% (x! )
×L
Figure 2: Representation of (9) as the forward pass of a model, in which each block is composed of self attention (red in (9)) which is performed globally across all N documents, followed by a local update for each index i, moving the PMF over narratives based on an average shift toward the posterior over narratives. When performed for L steps, this is analogous to an L-layer model. The skip connection associated with self-attention manifests the kernel-based update of gl(xi) (red in (9)), and the-
 skip connection associated with the local computations is used in the difference between the posterior PMF over narratives with respect to the prior (blue in (9)).
where Ω(yqiq),: ⊙ gl(xi) is a Hadamard product, and Ω(yqiq),: · gl(xi) is an inner product. Vector Φv,: may be
viewed as an embedding vector for word v, while Ω(yqiq) may be viewed as an embedding vector for answer yiq to question q. The conditional probabilities in (10) and (11) are expressed in terms of these embedding
vectors and the associated vectors f ̃l(xi) and g ̃l(xi) from the previous GD step.
Concerning the interpretation of the functional gradient descent (GD) updates of f ̃l+1(x) and g ̃l+1(x) as summarized in (8) and (9), assume that Φ, Ω and {xi} are fixed. Based on the previous functional GD step, view fl(xi) and gl(xi) as prior probability mass functions (PMFs) over topics and narratives, respectively. In the context of the topic model, connected to (8), based on the observance of each word v ∈ {1, . . . , V } in document i, using Φ, we show in Appendix B that pl(1, . . . , KBoW -
|v) is the posterior PMF over topics. Similarly, in the context of (9), based on observance of yiq, pl(1, . . . , KQ&A|yiq) is the posterior PMF over narratives. For each document i, the difference between the prior and posterior PMFs are computed (blue) for each word (topic model) and observed answer (narrative model), with these differences pushing the priors closer to the posteriors. The aforementioned differences are averaged over the relative word frequencies for the topic model (blue in (8))-
, and uniformly over the Q questions for the narrative model (blue in (9)). These steps are performed in isolation, for each index i. Finally, the change
in the functions f ̃l(x) and g ̃l(x) for any x is manifested as a kernel average of the computations that were performed independently for each i (the kernel average is red in (8) and (9)), with the contribution of document i to the update reflected by the kernel κ(x, xi). The functional GD updates may be viewed as a series of alternating local computations (blue) followed by global averaging (red). There are close connections to Transformer architectures, as reflected in Figure 2 and leveraged in-
 Section IV. The local computations (blue) seek to align the g(xi) and f (xi) with the observed data for document i (aligning the aforementioned prior and posteriors), while the global kernel-based update (red) accounts for the contextual information across all N documents.
E. Connections to Hierarchical Bayesian Topic Models
The functional gradient update in (8) admits a natural Bayesian interpretation, as discussed in Appendix B, where the softmax topic distribution f (xi) for document i is iteratively refined by shifting from a prior (based on the current estimate) toward a posterior derived from observed word frequencies. This update closely mirrors Bayesian inference procedures in classical topic models such as Latent Dirichlet Allocation

8
(LDA) [3], and its nonparametric extensions like the Hierarchical Dirichlet Process (HDP) [27].
In standard LDA, the topic proportions θi for document i (playing a role like our gi) are drawn independently from a Dirichlet prior, and updated solely based on the document’s word tokens. The inference of θi is thus conditionally independent of other documents, assuming the topic-word distributions are fixed. By contrast, in HDP topic models, each θi is drawn from a shared base distribution G0, which itself is sampled from a Dirichlet process. This hierarchical construction induces coupling acro-
ss documents: the base distribution enforces statistical sharing of topics, enabling data from one document to influence topic usage in others [19].
Our RKHS-based model achieves a similar coupling-across-documents effect through the use of kernel
smoothing. Specifically, (8) updates the latent function f ̃(x) by averaging posterior-minus-prior residuals from all documents, modulated by the kernel κ(x, xi). This induces a continuous affinity-based sharing mechanism: the function update at point x is informed more heavily by nearby documents in the latent space, as defined by the kernel.
Importantly, the degree of sharing can be controlled via the kernel bandwidth. In the limit as the bandwidth tends to zero, the kernel κ(x, xi) reduces to a Dirac delta, and updates are performed independently for each document, mimicking the behavior of LDA [3]. Conversely, as the bandwidth increases, the kernel becomes flat and updates become fully shared across the corpus — resembling the global coupling induced by G0 in HDP [27].
This connection suggests that the RKHS-based topic model may be interpreted as a deterministic, function-space generalization of hierarchical Bayesian topic models. Rather than sampling from a Dirichlet process, we perform point estimation of topic proportions via kernel-averaged functional gradient descent. The kernel thus plays a role analogous to the hierarchical prior, enabling smooth, flexible sharing of topic structure without committing to discrete cluster allocations or requiring sampling--
based inference.
This functional viewpoint not only provides a principled explanation for the kernel-based coupling mechanism, but also offers a path toward incorporating additional structure, such as adaptive kernels or learned affinity metrics, into the topic inference process — paralleling recent developments in Bayesian nonparametrics [4]. Further, an important contribution of this work is to extend the analysis beyond a topic model, to a novel narrative model, connected to (9).
Our approach also has connections to Gaussian process (GP) latent variable models [28], where our kernel plays the role of the GP covariance function and the {xi} are the latent variables. Inference in our model is considerably simpler than in GP models. While our framework has connections to Bayesian analysis, by using optimization-based inference, we achieve computational efficiency compared to fully Bayesian approaches.
III. AGENTIC USE OF TOOLS FOR CORPUS ANALYSIS
The algorithm summarized in the previous section analyzes documents from the perspective of BoW and Q&A representations, the latter inferring underlying narratives in the corpus, connected to an area of interest. This algorithm is employed as a tool within a broader LLM-based system, in which multiple LLMs act as a team, undertaking multiple processes for analysis of a large corpus.
The overall system is summarized in Figure 3. As an initial analysis, our BoW topic model infers a set of topics for the corpus. An LLM analyzes and interprets the learned topics, and clusters (groups) them as appropriate (effectively inferring the total number of distinct topics). The user specifies an area of

9
Raw Corpus
User Area of Interest
Interpretable BoW Topic Model
Topic Evaluator (LLM)
Document Selector (LLM)
Start
Selected Documents
Q-Generator (LLM)
Answerer (LLM)
Interpretable Joint Model for BoW Topic + QA
Narrative Interpreter (LLM)
Agentic QA Refinement Loop
Figure 3: Summary of the overall system for document analysis.
interest, and the LLM determines which topics are aligned with it, then selecting those documents for which these topics are probable. Guided by the user’s area of interest and a review of the content in the selected documents, an LLM develops a set of questions with categorical answers, meant to capture the breadth of ways the issue of interest is written about. Another LLM then answers the questions for all selected documents (reviews each document, and answers the questions correspondingly). Fi-
nally, an LLM interprets the narratives (columns of Ω, as discussed in the previous section). To sharpen the distinction and clarity of the narratives, the LLM may choose to add additional questions and subsequent answers, for narrative refinement (a form of adaptivity, or LLM-based active learning). Finally, the user is given an LLM-generated summary of the narratives for the area of interest, as reflected by the corpus.
Large language models play multiple roles in our framework. They (i) interpret and consolidate learned topics, (ii) design questions tailored to user interests, (iii) answer questions for selected documents, and (iv) interpret the discovered narratives. They may also (v) refine narratives by proposing new questions or selecting documents for further analysis. These interactions constitute an agentic system, in which the topic and narrative models serve as interpretable tools for large-scale LLM an-
alysis.
IV. CONNECTING RKHS MODEL TO TRANSFORMERS AND EXTRAPOLATION OF Q&A DATA
A. Simplifying the learning of {xi}
There are situations for which the same corpus may be used repeatedly for analysis of different usergenerated areas of interest. In this setting, we seek to employ methods to reduce the reliance on LLMs, which if employed repeatedly at scale could be expensive. In this context, note that in (8) and (9) the inferred vectors {xi} play a pivotal role in quantifying inter-document relationships, and these vectors are learned anew based on the BoW and Q&A data. However, there have been recent advances -
in mapping documents to vectors [14, 33, 10], and one may envision that such a mapping may be performed once, and then stored for future use (analogous to use in retrieval systems [14]). We consider an augmentation of our framework for this setting, and demonstrate that it affords opportunities for expanding the utility of our model (to reduce reliance on LLMs for answering the questions).
Assume that for each document i we have access to an embedding vector x ̃i ∈ Rde. We now model xi = W x ̃i, where W ∈ Rd×de. Doing this yields a significant reduction in the computational cost of jointly learning the topic and narrative models. In our original formulation, we learned N d-dimensional vectors xi. We now only learn a single d × de matrix W , and therefore this setup is well suited to learning with mini-batches, allowing scaling to very large N .
B. Simplifying LLM-based Q&A and connecting to Transformer-based in-context learning
A fundamental element of our narrative model involves LLM-based question design and question answering. Assume that it is costly to perform LLM-based Q&A analysis on all N documents, as N is

10
large and/or the documents are long (or that this type of analysis is done repeatedly, for different user areas of interest). We leverage the connection of the Q&A model in (9) to a Transformer [30] and extend recent work on Transformer-based in-context (few shot) learning [31, 32, 7]. Specifically, consider a subset of S < N documents that are selected for LLM-based Q&A analysis (LLM question design and answering), and using the associated answers this set of S documents constitute the contextual-
 data for which we will predict the answers associated with the remaining N − S documents. The Transformer-based in-context learning is performed based on a generalization of (9).
As above, assume we have access to embedding vectors x ̃i for each document i, computed once “offline.” Let g ̃i,l = g ̃l(xi). We now generalize (9) as
g ̃j,l+1 = g ̃j,l + αG
N
N
X
i=1
Q
X
q=1
1
Q
h
pl(1, , . . . , KQ&A|yiq) − softmax(g ̃i,l)
i
κ(WQx ̃j, WKx ̃i) (12)
where now (for consistency with Transformers) we introduce two matrices WQ ∈ Rd×de and WK ∈ Rd×de, where WK is connected to keys and WQ to queries (not to be confused with the Q connected to the number of questions), with this notation chosen as to connect to Transformers. In practice, we may choose WQ = WK.
Considering Figure 2, the self-attention layer corresponds to the portion of (12) in red, and the portion of (12) in blue corresponds to the local computations in Figure 2. If one considers L steps of functional gradient descent, this corresponds to L layers of the model in Figure 2.
The representation in Figure 2 closely aligns with the form of a Transformer [30], and (12) corresponds to one attention head. One may consider extending this to multiple attention heads, which generalizes the model to assume g ̃ = PM
m=1 Gmψm(x), with M > 1 different feature transformations, yielding M attention kernels κm(xi, xj). Doing so further aligns with the Transformer, but here we only consider a single attention head for simplicity.
The key difference with a Transformer is that here the local computations will explicitly implement the blue text in (12), while in a Transformer these local computations are performed by a multi-layered perceptron (MLP) [30, 32]. This provides insight into the type of local computations that may be performed within Transformer MLP layers, but for simplicity and consistency with our RKHS analysis, we directly implement the computations in blue in (12). This also reduces the number of parameters th-
at need be learned, as all computations in blue are performed with Ω and gi,l, rather than learning additional MLP parameters.
In-context Q&A proceeds as follows. A subset of S < N documents are selected for initial Q&A analysis, with these selected at random or based on the topic-model analysis. The LLM-based Q&A analysis is performed on these S documents. The answers to these documents are modeled using (12), with the associated learning (data fitting) yielding WQ, WK, αG and Ω. The answers to these S documents are then used as context, for in-context learning of the predicted answers for the remaining N − S documents. -
In particular, employing the learned WQ, WK, αG and Ω and the observed answers from the S documents, (12) is employed for extrapolation, to infer g ̃j for all N − S documents that LLM-based Q&A analysis was not performed on. From these extrapolated PMFs over narratives, the probability of question answers is manifested for all Q questions, for each of the N − S documents. If some of these documents yield low-confidence prediction of the answers, they can be submitted to an LLM for questioning, and-
 the process can be repeated (the model parameters WQ, WK and Ω are refined employing now the newly Q&A-analyzed documents). Seeking LLM-generated answers to those questions for which our extrapolation model has low confidence is a form of active learning [2].

11
V. EXPERIMENTS
A. Narrative Estimation Using Simulated Data
a) Synthetic Data: For generation of the data, we consider KQ&A = 3 true underlying narratives.
Each question q ∈ {1, . . . , Q} admits A = 4 categorical answers, and we use Q = 25. We construct Ω(q) as follows:
1) Let S = {1, . . . , A} denote the answer index set. 2) Sample y1, y2, y3 for the three narratives by drawing uniformly without replacement from S.
3) For each column k ∈ {1, 2, 3} of Ω(q), initialize the column to all ones, then assign a larger value α > 1 to the yk-th entry. Normalize the column to obtain a valid PMF.
This is repeated independently for all q ∈ {1, . . . , Q}.
We generate N sets of answers connected to the narrative model, each defined by a latent narrative mixture gi, drawn:
gi ∼ Dir(β, β, β), for i = 1, . . . , N (13)
yiq ∼ Categorical(Ω(q)gi), for q = 1, . . . , Q. (14)
The parameter β > 0 controls the sparsity of this mixture: When β ≪ 1, most gi are nearly one-hot, inducing clear narrative clusters. When β ≫ 1, documents are smooth blends of multiple narratives, making inference harder.
In Figure 4 we present results for α ∈ {2, 4, 6, 8, 10} and β ∈ {0.1, 1, 10}. While the true underlying number of narratives is KQ&A = 3, when performing inference with the model we consider KQ&A = 3 and KQ&A = 10. In Figure 4 we consider N = 1000, with similar results obtained with N = 500 and N = 2000. We considered 50 distinct data generations, with mean results depicted, as well as 95% confidence intervals.
We concentrate here on the accuracy of the recovered gi, as such accuracy implies accurate estimation of the columns of Ω(q), q = 1, . . . , 25. To compare the true gi (with KQ&A = 3) to the recovered gi (with modeled KQ&A = 3 or KQ&A = 10), we must align the components of the vectors, to allow comparison. When we performed estimation with KQ&A = 3, we employed the Hungarian Algorithm [13, 18] to align
true and recovered columns of Ω(q), q = 1, . . . , 25, and the elements of gi were aligned accordingly. We model estimation was performed with KQ&A = 10, the Hungarian Algorithm was used to align the three
true columns of Ω(q) with the closet matches from the recovered 10.
The accuracy of recovered gi are shown via two measures: (i) cosine similarity between the true and recovered gi, and (ii) consistency in clustering of the N samples (measured via the Rand Index [22]). Concerning (ii), we consider three clusters, corresponding to the three components of gi (after the Hungarian Algorithm). Sample i is clustered to the component of gi with highest probability.
From Figure 4, it is observed that the recovered results are consistent for KQ&A = 3 and KQ&A = 10. When β = 10, the true gi is almost uniform, in which case there is little clear clustering, and the Rand Index is low for all α. We concentrate on β = 0.1 (for which we expect strong clustering, with only one component of gi probable), and β = 1 for which the clustering is present, but less clear. Considering the Rand Index, the accuracy of clustering consistency improves with decreasing β. Rand sco-
res of 0.7-0.9 are generally viewed as “very good,” while 0.3-0.5 is reflective of “moderate” agreement (between clustering based on the underlying gi used for data generation and the recovered gi). As α increases, the columns of Ω(q) associated with the data generation become more distinct, and one would therefore expect the accuracy of the recovery to improve.

12
Figure 4: Accuracy of narrative model estimation for the experiment with simulated data.
B. United Nations General Assembly Speeches, 2002-2007
Each year in September, the United Nations hosts its General Assembly (UNGA) in New York, during which leaders of each member country is given time to speak on issues of interest to them. The speeches are made public, and are translated into several languages.
We analyze all UNGA speeches from 2002-2007 (a total of 1138 speeches), with this time period selected because it aligns with the run up to and the undertaking of the United States (US) invasion of Iraq. It is generally agreed that there were two primary global narratives concerning the Iraq War [9], as discussed below. We wish to examine how well the proposed approach can extract these narratives from the speeches, using the proposed approach.
Another reason that we analyze these data and the question of the Iraq War is that we have ground-truth data of the argument advocated by each narrative. In particular, there were a set of countries termed The Coalition of the Willing [9], that were publicly aligned with the US position on the Iraq War (at its inception). It is therefore expected that the narratives about the war from these countries are likely, in general, to be aligned with the US narrative, particularly in the run-up and early -
period of the war. We examine this in the analysis below.
While the Iraq War was a prominent policy matter of this time period, each individual country had its own interests, and for many countries the Iraq War was not a significant concern. As shown in Figure 3, the first element of our analysis is a double-softmax topic model analysis on the BoW form of the corpus, to determine the documents that are aligned with the user interest, here specified as the Iraq War. In Table I are presented the topics inferred from analysis of all UNGA speeches over this -
period.
An LLM is asked to rank the coherence of the topics, from 0 (worst) to 5, with the prompt that defines these levels of coherence provided in Appendix H The LLM also names the topics, and identifies similar topics. As shown in Table I five of the topics are deemed (by the LLM) to be related to the user interest (Iraq War), and the documents for which these topics have high probability are then employed to acquire Q&A data, followed by our subsequent narrative analysis. We selected the 200 speeches -
with most probable use of the above topics, for Q&A analysis.
The questions that were developed by the LLM are provided in Appendix C, and in Table II we provide the narrative summaries for the three narratives inferred by our model. The LLM provides a detailed

13
LLM-Generated Sets Coherence LLM-Generated Topic Names Set 1 3.5, 5 Middle East Conflict (×2), Israeli-Palestine Conflict Set 2 4, 4 European Cooperation, Arab Cooperation Set 3 4, 4 Iraq & Terrorism, Global Terrorism Challenges Set 4 5, 4 Human Rights, UN Council & Reform Set 5 3 Pacific Island Issues Set 6 3 Caribbean Issues Set 7 4 African Politics Set 8 3 Haitian Politics Set 9 3 Economic & Social Issues Set 10 4 Climate Change Challenges
Table I: Topics inferred with the UN General Assembly data, covering all speeches from 2002-2007 (1138 speeches). The double-softmax topic model considered KBoW = 15 topics, and the LLM divided these into 10 sets, and it named each of the topics. There were two topics that were both named “Middle East Conflict.” The topics in blue font were identified by the LLM as being aligned with the specified area of interest: The Iraq War.
012 Narrative
0
20
40
60
80
Number of Countries
10
39
2
90
33
26 Non-Coalition
Coalition
Figure 5: For the 200 UNGA speeches that narrative analysis was applied to, three narratives were revealed: Narrative 0 was neutral on the Iraq War, Narrative 1 was against the Iraq War, and Narrative 2 was in favor of the Iraq War (more details in Table II). Coalition of the Willing countries publicly asserted their support of the US in the Iraq War (at least at the start). This figure delineates which countries (Coalition and Non-Coalition) had these narratives as most probable in their UNGA spe-
eches.
2002 2003 2004 2005 2006 2007 Year
0.1
0.2
0.3
0.4
0.5
Mean Narrative Distribution
Narrative Narrative 0 Narrative 1 Narrative 2
Figure 6: For the three narratives summarized in Table II, this figure depicts the frequency with which each of the narratives were most probable, as a function of year.
summary of the narratives based on the most probable answers to each question, across all Q = 47 questions (recall that each narrative is composed of Q PMFs, quantifying the probability of each categorical answer, for each of the questions). In Table II we provide a concise LLM-generative narrative summary, with a more expansive summary provided in Appendix D.
As summarized in Table II, Narrative 1 challenges the justification of the war, while Narrative 2 supports and justifies the war. We would expect that the US and most of the Coalition of the Willing countries would have narratives aligned with Narrative 2.
In Figure 5, for each of the speeches analyzed by the narrative model, we show the portion of them

14
Index Coherence LLM-Generated Narrative description 0 NA The speech did not explicitly address the subject of the Iraq War. 1 5 The speech questions the justification for war, particularly the claims about Weapons of Mass Destruction (WMDs), and condemns the war as illegal or illegitimate due to the lack of UN authorization. The ongoing foreign occupation is portrayed as a key driver of instability, hindering both peace and the rebuilding process. 2 5 The speech justifies the war based on the need-
 to enforce Security Council resolutions on WMDs and prevent proliferation, while also framing Iraq as a central front in the global war on terror. The speech emphasizes positive developments such as the liberation of the Iraqi people, the emergence of democratic governance, and security progress. It conveys a hopeful outlook, suggesting that with sustained international support, Iraq is on a path toward peace, freedom, and prosperity.
Table II: Narratives inferred with the UN General Assembly data, covering 200 speeches from 2002-2007 that the LLM deemed most aligned with the subject of the Iraq War.
2002 2003 2004 2005 2006 2007 Poland Iraq Latvia Denmark Bahrain UK Czechia Lithuania Czechia Australia UK Hungary Albania N. Macedonia Austrlia Romania Hungary Kazakhstan Hungary Costa Rica Iceland S. Korea N. Macedonia Iraq Australia Iceland Italy Bangledash Denmark Romania Bulgaria Albania Bulgaria Samoa Bulgaria Latvia UK Mongolia Japan Kuwait Iraq Bulgaria Mongolia Estonia Lithuania Estonia S. Korea Greece Romania UK UK Ukraine Australia Sweden Italy Croatia Philippines Iraq Latvia Spain
Table III: Top-10 closest nations to the US in terms of UNGA speech narratives delivered from 2002-2007. Countries in blue font were not members of the Coalition of the Willing. The Coalition was formed prior to the war, which started and deposed the ruling regime in Iraq between the 2002 and 2003 speeches. During the time of the 2003 speeches, Iraq was governed by the US-led Coalition Provisional Authority [9].
for which the most probable narrative was each of the three considered. Note that the vast majority of the countries aligned with Narrative 1 were not Coalition of the Willing countries, while Narrative 2 was most prominent for Coalition countries, and the speeches from Coalition countries that are aligned with Narrative 1 (against the war and its justification) were delivered after 2004. By that year, a global public consensus emerged that weapons of destruction, the presence of which were a prim-
ary justification for the war, had not been present in Iraq [9]).
In Figure 6 we show the probability of the narratives as a function of time. Notice that in 2002, prior to Coalition invasion, the narrative supporting the war (Narrative 2) was most prominent. The narrative opposing the war (Narrative 1) peaked in 2003, six months after the war began and as it became apparent that the alleged weapons of mass destruction would not be found. In 2004, the prominence of the narrative opposing the war returned to midway between this peak and its baseline prior to the -
invasion, remaining constant through the remaining time under study. As time progressed, speeches on other topics steadily replaced those that had supported the war.
In Table III we show the countries that had their narrative probability vector most aligned with the US, by year. Recall that gi represents the probability of each of the narratives (here three), for document i (here corresponding to a speech). To perform this ranking, for each year we measure the Jensen-Shannon divergence [26] between gi for the US that year, and all other countries that year. Note from Table III that in the run-up to the war (2002) and in early years of the war, the most closely-
 aligned narratives to the US

15
were from Coalition countries. In later years, when other issues like the occupation and counter-insurgency dominated (and no weapons of mass destruction were found in Iraq), the narrative alignment between US and the original Coalition countries diminished. Note that Iraq in Table III is reflective of after the war started, and hence after the Iraq War started (which is why they were not among the Coalition). Note that in 2003 the Iraq government was under US supervision, and in 2003 Iraq is infe-
rred to have the closest narrative alignment with the US.
As we have noted, one of the features of our model is interpretability and the capacity to audit how the LLM made decisions. In Appendix C we provide identify the highest-probability answers to questions associated with the two inferred principal narratives about the Iraq War. A question that identified a sharp divide in the narratives was Question 25, that addressed the cause of weapons of mass distruction as a justification for the war. As an example of how interpretable auditing can be done, in-
 Appendix E we ask the LLM to justify its answer to Question 25, as applied to the speeches from the US, France, Saudi Arabia and United Kingdom (UK).
C. Comparison of UNGA Analysis, for Speeches in Chinese and English
The United Nations provides its UNGA proceedings translated into Arabic, Chinese, English, French, Russian and Spanish. To test the capability and robustness of our double-softmax topic and narrative model across languages, we consider the same speeches as analyzed in the main paper (for the speeches in English), but now for the speeches in Chinese.
The tokens used in our topic model were aligned with Chinese, and the Q&A narrative analysis proceeded without change. Specifically, the narrative model is agnostic to what language the documents are in, as after the LLM-based Q&A, the narrative model simply processes the categorical answers to questions (and never sees the underlying documents; similar to how topic models only see BoW word/token counts, not the original document).
For the Q&A analysis on the Chinese speeches, recall that the LLM is prompted to develop questions, and then it is prompted to answer the questions (possibly with a different LLM). We performed this test two ways: (i) with the prompt in English and the requested questions in English (as applied to documents in Chinese), and (ii) with the same prompts in Chinese (translated by a native speaker), and the questions in Chinese. These two approaches yielded similar results. The specific results present-
ed next were based on (i).
We repeated the experiments associated with Figures 5 and 6, with the analysis performed from scratch with the documents in Chinese. Recall that the topic model is used, in concert with LLM interpretation of the topics, to select the subset of speeches that are most relevant for analysis of narratives connected to the Iraq War. As in the main body of the paper, we select the 200 speeches most aligned with discussion of the Iraq War, as uncovered by the topic model and LLM analysis. Of the 200 docu-
ments selected by the topic model for the speeches in Chinese, 117 of them were also among the 200 documents selected in the main paper as applied to the speeches in Chinese. This underscores that the tokenization of Chinese and English is very different, and may reflect different meanings (particularly from the limited BoW perspective) [21].
Nevertheless, the 200 documents in Chinese selected by the topic-model analysis were then employed within the narrative analysis. Despite the fact that there was not an exact match between the documents so analyzed, the narrative analysis based on the Chinese and English (comparing with Figures 5 and 6) tell a similar story.
Specifically, in Figures 7 and 8 we show the decomposition of countries across the narratives, as a function of whether they were a Coalition or non-Coalition country. While the detailed numbers are

16
012 Narrative
0
25
50
75
100
Number of Countries
10
28
8
91
46
17 Non-Coalition Coalition
Figure 7: Number of speeches for which each of the three narratives are prominent, among Coalition of the Willing and non-Coalition countries (see Table II). This narrative analysis is based on the UNGA speeches in Chinese.
2002 2003 2004 2005 2006 2007 Year
0.1
0.2
0.3
0.4
0.5
0.6
Mean Narrative Distribution
Narrative Narrative 0 Narrative 1 Narrative 2
Figure 8: For the three narratives summarized in Table II, this figure depicts the frequency with which each of the narratives were most probable, as a function of year. This narrative analysis is based on the UNGA speeches in Chinese.
different (there is not exact overlap in the speeches being analyzed), the strong alignment of non-Coalition countries with Narrative 1, and Coalition countries with Narrative 2 is consistent with Figure 5 from the main paper. Further, Figure 8 shows a narrative evolution with time, based on the speeches in Chinese) that aligns well with Figure 6 (based on the speeches in English). This demonstrates the effectiveness of the narrative model in a cross-language setting, and that the overarching “sto-
ry” from that analysis is robust to differences in languages. That said, there is much future work needed to analyze cross-language narrative analysis. This speaks not only to the narrative model itself, but also to cross-language consistency of the LLMs.
D. Complete NeurIPS papers, 1987-2019
We now consider analysis of all papers from the NeurIPS machine learning conference, from 1987-2019. In Table IV are summarized the results of the double-softmax topic model as applied to these documents (full papers), using KBoW = 30 topics. The coherence score, description and related topics were are provided by GPT-4o.
The user-specified area of interest provided to the LLM is “relationship of neural network and Bayesian modeling.” We choose this user-specified area of interest because it is generally well understood that neural networks were the original focus of the NeurIPS conference, but that neural networks went out of favor, during one of their “winters.” It is also relatively well appreciated that Bayesian methods became prominent in machine learning research during the neural network “winter.” Finally, m-
ore recently there has been a resurgence in neural networks (now also called deep learning), and a relative decline in interest in Bayesian methods. We wish to examine the degree to which our narrative model, coupled with an LLM, is able to infer these shifting “narratives” in machine learning research, over time.
The LLM-generated questions for this area of interest are provided in the Appendix F, and in Table V are provided summaries of the KQ&A = 5 narratives inferred by our narrative model.

17
Topic # Coherence Description Related Topic(s) 0 3 Focus on circuits and signals; neural and network are marginal. 2,5,15 1 4 Clear theme on human trials and responses; coherent. 13 2 5 All words relate to neural networks; perfectly coherent. 5,15 3 4 Focus on words, documents, and language; coherent. None 4 2 Memory and market terms mixed; loose theme. None 5 4 Focus on neural networks and training; coherent. 2 6 3 Focus on data and algorithms; some marginal words. None 7 3 Focus on search and st-
ructure; some marginal words. None 8 4 Focus on classification and training; coherent. 17 9 3 Focus on trees and rules; some marginal words. None 10 3 Focus on programming and logic; some marginal words. None 11 5 All words relate to speech recognition; perfectly coherent. None 12 2 Focus on algorithms. None 13 4 Focus on brain and functional analysis; coherent. 1 14 4 Focus on actions and policies; coherent. 18 15 4 Focus on neurons and spikes; coherent. 2 16 5 All words relate to Bayesian method-
s; perfectly coherent. None 17 4 Focus on classification and error; coherent. 8 18 4 Focus on policy and control; coherent. 14 19 3 Focus on signals and noise; some marginal words. None 20 4 Focus on attention and visual processing; coherent None 21 3 Focus on algorithms and bounds; some marginal words. None 22 4 Focus on adversarial examples and robustness; coherent. None 23 5 All words relate to time series; perfectly coherent. None 24 4 Focus on tasks and learning; coherent. None 25 4 Focus on -
graphs and nodes; coherent. None 26 5 All words relate to motion; perfectly coherent. None 27 4 Focus on visual stimuli and cells; coherent. None 28 4 Focus on images and features; coherent. None 29 3 Focus on data and users; some marginal words. None
Table IV: Analysis of topics inferred from the NeurIPS dataset, as analyzed by GPT4o. The coherence score (1 minimum, 5 maximum) is generated via LLM analysis. The topic description and related topics are also generated by the LLM. The topics the LLM inferred as related to the user-specified (see text) area of interest are shown in blue font.
Narrative #
Coherence Description Related Narrative(s) 0 5 Perfectly consistent story of deterministic, optimization-based neural networks. It explicitly rejects Bayesian concepts and uncertainty quantification across all relevant questions, representing the earliest paradigm.
4
1 5 Presents a clear, consistent view of the initial bridge between fields: regularization as priors, data as evidence, and confronting intractability with analytical solutions for small, non-scalable models.
None
2 5 A perfectly coherent narrative of modern BNNs. It focuses on scalable approximation (VI/MCMC), uncertainty quantification, and the full integration of probabilistic principles into deep learning models.
None
3 1 Highly incoherent. It claims to link fields (Q4, Q9) and use probabilistic objectives (Q8), but also that it doesn’t use Bayesian methods (Q5) and relies on deterministic techniques (Q0, Q2).
4
4 2 A loose theme of applied classical NNs (Q0, Q3, Q17) but with notable inconsistencies. It claims to link fields (Q9) while simultaneously using classical terminology and methods.
0,3
Table V: Analysis of narratives inferred from the NeurIPS dataset, with a focus on neural networks, Bayesian methods, and their interrelationship. This interpretation was done by Gemeni-2.5-Pro. The coherence score (1 minimum and 5 maximum), the description, and identification of related narratives are generated by the LLM.

18
1987 1992 1997 2002 2007 2012 2017 Year
0.0
0.2
0.4
0.6
0.8
Mean Narrative Distribution
Narrative Narrative 0 Narrative 1 Narrative 2
Figure 9: Average probability of inferred narratives for the NeurIPS dataset (papers from 1987-2019). Details on these narratives are shown in Table II.
Note that the model infers three highly coherent narratives, meaning that all or most of the most-probable answers to the Q = 20 questions are aligned with the narratives. Note that the LLM-generated narrative descriptions are far more detailed and granular than the aforementioned topic summaries for the same data.
As reflected in Table V, Narrative 0 clearly focuses on deterministic neural networks, and rejects the Bayesian perspective. Narrative 2 addresses topics like Bayesian neural networks (BNNs), while also considering Bayesian inference methods like variational inference (VI) and Markov Chain Monte Carlo (MCMC). It is generally appreciated in the machine learning field that over time the neural network and Bayesian perspectives have merged in some areas (e.g., with methods like the variational autoen-
coder), and this narrative seems to be embodied by Narrative 1. Papers that have high alignment with each of these narratives are identified in Appendix G.
To gain further validation of this perspective, in Figure 9 we depict how probable each of the inferred narratives is over time. In the early years of the NeurIPS conference, narrative 0 was dominant, and the Bayesian narrative (Narrative 2) was very improbable. However, between approximately 1999-2013 the neural network narrative was out of favor, and in this period (particularly from 2006-2015) the Bayesian perspective (narrative) dominated NeurIPS papers. Finally, from roughly 2015 forward, neu-
ral networks (now also called deep learning) was an ascendant narrative, with the Bayesian narrative becoming less probable. Note that the perspective for which there was a merging of the neural network and Bayesian perspectives (Narrative 1), was most probable from roughly 2003-2011, and this perspective became less prominent during the rebirth of interest in neural networks.
E. In-Context Learning for Extrapolating Q&A
In Section IV we discussed how our framework may be used to infer Q&A data, via in-context learning (ICL) based on the answers to a subset of the documents. We demonstrate this on the UNGA dataset. For this task, each UNGA speech is mapped to an embedding vector; for this purpose we employed Embed 4 from the company Cohere, yielding a 1024-dimensional embedding vector x ̃i, for each document i.
In Table VI we show ICL results for which the model parameters were learned based on the answers to 100 or 500 of the documents, and ICL is used to predict answers on the remaining documents (in total there are 1138 documents). The same Q = 47 questions were used, related to the Iraq War, as discussed

19
Few-Shot Train Train Inference Inference Size ICL CE Joint CE ICL CE Joint CE 100 0.683±0.017 0.701±0.018 0.840±0.006 0.908±0.024 500 0.683±0.013 0.683±0.013 0.789±0.006 0.861±0.014 Full Dataset 0.681±0.016 0.681±0.018 NA NA
Table VI: Cross entropy (CE) loss for ICL (Section IV) and joint model (Section II). Train CE is computed on the training data (100, 500, or full dataset). Inference CE is computed on held-out data for few-shot learning scenarios. For full dataset, inference CE is NA since all data is used for training.
Figure 10: Calibration assessment of model confidence on held-out (inference) UNGA data for 100 “shots”. For each prediction, we extract the maximum probability (model confidence) and bin predictions by confidence level. Within each bin, we compute the accuracy (proportion of predictions where the ground truth matches the highest-probability category). Well-calibrated models should exhibit accuracy equal to confidence, lying along the diagonal dashed line. Both models show reasonable calibration, -
with the ICL model outperforming the Joint model.
above and detailed in the Appendix C.
For the extrapolation results we consider two approaches: (i) the ICL approach of Section IV, in which we employ document-to-embedding vectors x ̃i; (ii) the joint model discussed in Section II, in which the Q&A and BoW forms of the data are used jointly to model the data, with the BoW form of the data leveraged to predict answers for those documents without Q&A data. The advantage of this approach is that there is no need for mapping documents to vectors.
The results in Table VI show that the ICL-based approach yields better held-out cross-entropy (CE) loss than the joint model of Section II. This demonstrates the effectiveness of the added information provided by the document embedding vector, x ̃i. However, when one considers performance when trained on the full dataset (not few-shot learning), Table VI shows that the two approaches yield almost identical results.
We test the calibration of the predictive model for categorical observations. On the held-out data, via Ω(q)gi, with the few-shot-predicted gi, we have a prediction of the probability of answer q ∈ {1, . . . , Q}.
We test the calibration of these predictions as follows. For question q, held-out document i, let π(q)
i ∈ (0, 1)
represent the predicted highest probability among the A answers. We now bin the max probabilities π(q)
i, as manifested across all held-out documents.
Considering, for example, the bin of probabilities (0.6, 0.7), if the model is well-calibrated, we expect the most-probable answer would be given about 65% of the time for questions in this bin. We test this, considering all held-out documents, as shown in Figure 10 for few-shot learning with 100 of the 1138

20
documents. This figure demonstrates that the ICL approach of Section IV and the joint model of Section II yield well-calibrated predictions, with ICL slightly more calibrated than the Joint approach.
VI. CONCLUSIONS
We have introduced a structured, interpretable framework for analyzing large document corpora by coupling bag-of-words topic modeling with a novel narrative model over LLM-derived question-answer (Q&A) data. While topics summarize distributions over words, narratives generalize this notion to capture latent semantic perspectives over structured responses. We modeled both using latent functions in an RKHS, enabling interpretable inference via functional gradient descent and establishing formal conn-
ections to hierarchical Bayesian models and Transformer-style architectures.
Our narrative model supports efficient extrapolation of Q&A outcomes through a Transformer-inspired in-context learning mechanism, reducing LLM reliance and cost. Experiments on United Nations General Assembly speeches demonstrated the model’s ability to extract meaningful geopolitical narratives, while analysis of NeurIPS papers over three decades revealed evolving relationships between neural and Bayesian perspectives in machine learning research.
By repositioning the LLM as a cooperative agent rather than an end-to-end analyzer, our framework enables agentic, transparent, and multilingual document analysis. Looking forward, we plan to explore active learning strategies for narrative refinement, multilingual evaluation across diverse corpora, and applications in high-stakes domains such as education, law, and international relations.
ACKNOWLEDGMENT
This paper is based on work funded by a USG Federal Laboratory, and performed in part by an employee of that Laboratory in their official capacity. This publication is not a USG product, and the views expressed herein do not necessarily represent those of the USG.

21
APPENDIX A
DERIVATION OF GRADIENTS FOR RKHS FUNCTION UPDATE
We detail the derivation of (9), with (8) derived similarly.
The latent function g ̃i = g ̃(xi) = Gψ(xi), and we consider gradients with respect to the rows of G, these corresponding to the components of g ̃i. Recall that the PMF over narratives for document i is gi = g(xi) = softmax(g ̃i). We consider gradient-descent learning for G and hence g ̃i, i = 1, . . . , N . To do this, we seek to minimize the negative log-likelihood of the data:
L(G) = − 1
N
N
X
i=1
1
Q
Q
X
q=1
log[Ω(q)
yiq,: · gi] (15)
= −1
N
N
X
i=1
1
Q
Q
X
q=1
log[Ω(q)
yiq,: · softmax(Gψ(xi))] (16)
= −1
N
N
X
i=1
1
Q
Q
X
q=1
log[
KQ&A X
k=1
Ω(q)
yiq ,k
exp(gik)
PKQ&A
k′=1 exp(gik′ )
] (17)
where gik is component k of gi.
Consider the gradient of L(G) wrt Gm, meant to reflect the mth row of G (connected to vector component m, gim). Then
∇GmL(G) = − 1
NQ
N
X
i=1
Q
X
q=1
1
PKQ&A
k=1 Ω(q)
yiq ,k
exp(g ̃ik )
PKQ&A
k′=1 exp(q ̃ik)
×[[ Ω(yqiq),m exp(g ̃im)
PKQ&A
k′=1 exp(g ̃ik′ )
−
KQ&A X
k=1
exp(g ̃im) Ω(q)
yiq,k exp(g ̃ik))
(
PKQ&A
k′=1 exp(g ̃ik′))2 ]ψ(xi) (18)
=− 1
NQ
N
X
i=1
Q
X
q=1
exp(g ̃im)/ PKQ&A
k′=1 exp(g ̃ik)
PKQ&A
k=1 Ω(q)
yiq,k exp(g ̃ik)/ PKQ&A
k′=1 exp(g ̃ik)
h
Ω(q)
yiq,m −
KQ&A X
k=1
Ω(q)
yiq,k exp(g ̃ik)
PKQ&A
k′=1 exp(g ̃ik)
i
ψ(xi)
=− 1
NQ
N
X
i=1
Q
X
q=1
gim
Ωyiq,: · gi
Ω(q)
yiq,m − Ω(q)
yiq,: · gi ψ(xi) (19)
=1
NQ
N
X
i=1
Q
X
q=1
gim − gimΩ(yqiq),m
Ω(yqiq),: · gi
ψ(xi) (20)
Consider gradient descent update of component m of g ̃i, where l represents the gradient steps. Specifically, gim,l represents gim at gradient step l, with other terms defined similarly. Then
g ̃jm,l+1 = g ̃jm,l − αGψ(xj)⊤∇GmL(G) (21)
= g ̃jm,l + αG
NQ
N
X
i=1
Q
X
q=1
gim,lΩ(yqiq),m
Ω(yqiq),: · gi,l
− gim,l κ(xi, xj) (22)
Generalizing this to gradients with respect to all rows of G, equivalently all components of g ̃i, we have
g ̃j,l+1 = g ̃j,l + αG
NQ
N
X
i=1
Q
X
q=1
gi,l ⊙ Ω(yqiq),:
gl(xi) · Ω(yqiq),:
− gi,l κ(xi, xj) (23)

22
Expressed using alternative notation, we have
g ̃l+1(xj) = g ̃l(xj) + αG
NQ
N
X
i=1
Q
X
q=1
gl(xi) ⊙ Ω(yqiq),:
gl(xi) · Ω(yqiq),:
− gl(xi) κ(xi, xj) (24)
where ⊙ represents the Hadamard vector product. For simpliicty we have a single learning rate αG for each component of g ̃i, but in general the learning rate may be component-dependent.
APPENDIX B
BAYESIAN INTERPRETATION OF RKHS FUNCTION UPDATE
Assume that the matrices Ω(q) are known. Further, assume that gi,l is the PMF over the KQ&A narratives, based on the output of the lth functional gradient step. We treat gi,l as a “prior” PMF for each of the KQ&A narratives, which will be updated to a posterior based on the observed answer. For observed answer yiq ∈ {1, . . . , A} to question q for document i,
p(Yiq = yiq|Narrative k) = Ω(q)
yi,q,k (25)
Hence, the product of this likelihood by the prior over narratives is
p(Yiq = yiq, Narrative k) = p(Yiq = yiq|Narrative k)p(Narrative k) (26)
= Ω(q)
yi,q,kgik,l (27)
Marginalizing out the narratives, we have
p(Yiq = yiq) =
KQ&A X
k=1
Ω(q)
yi,q,kgik,l (28)
= Ω(q)
yi,q,: · gi,l (29)
Therefore, the posterior probability of narrative k, based on the observed answer to question q, is
p(Narrative k|Yiq = yiq) = p(Yiq = yiq|Narrative k)p(Narrative k)
p(Yiq = yiq) (30)
= Ω(q)
yi,q ,k gik,l
Ω(yqi,)q,: · gi,l
(31)
Considering now all KQ&A narratives, we have
p(Narrative 1, . . . , Narrative KQ&A|Yiq = yiq) = Ω(yqi,)q,: ⊙ gi,l
Ω(yqi,)q,: · gi,l
(32)
Considering (24), we observe that
Ω(yqi,)q,: ⊙ gi,l
Ω(yqi,)q,: · gi,l
− gi,l = p(Narrative 1, . . . , Narrative KQ&A|Yiq = yiq) − p(Narrative 1, . . . , Narrative KQ&A)
reflecting the difference between the posterior and prior PMFs over narratives, where the posterior is
based on observed answer yiq. Hence, the local update gl(xi)⊙Ω(q)
yiq,:
gl (xi )·Ω(q)
yiq ,:
− gl(xi) associated with document i,
question q moves the distribution over narratives such that it is aligned with the posterior.
In (24), for document i, such an update is performed for all Q questions, and the updates are averaged uniformly (i.e., multiplied by 1/Q). Finally, each of the locally averaged function updates are integrated via kernel-weighted averaging.

23
APPENDIX C
ANSWERS WITH HIGHEST PROBABILITY FOR EACH IRAQ WAR NARRATIVE
A. Narrative 1
Q3: B. The speech urges the Security Council to prioritize peaceful solutions and avoid unilateral military action. Q4: B. The speech does not directly link Iraq to terrorism, focusing instead on disarmament and inspections. Q6: B. The speech supports inspections but emphasizes the need for negotiation and cooperation with Iraq. Q7: B. The speech expresses concern about undermining multilateralism but urges continued diplomatic engagement. Q8: B. The speech insists that any military action must ha-
ve explicit Security Council authorization. Q10: B. The speech does not advocate regime change, focusing instead on compliance with international law. Q12: A. The restoration of sovereignty should occur as soon as possible, guided by the needs and capacity of the Iraqi people. Q14: B. The use of force is only justified with explicit UN Security Council approval. Q18: A. The timeline should be determined by the situation on the ground and the readiness of Iraqi institutions. Q19: B. The war undermi-
ned the authority and credibility of the United Nations. Q20: B. Multilateral consensus and UN authorization are always required for legitimate action. Q21: B. The war is illegal or illegitimate without explicit UN Security Council authorization. Q22: B. The war caused chaos, instability, and suffering for the Iraqi people. Q23: B. The UN should have a central, leading role in Iraq’s political process and reconstruction, with international support contingent on UN leadership. Q24: B. The Iraq war -
is not directly linked to the global war on terror, or is seen as exacerbating terrorism. Q25: B. The speech questions or criticizes the WMD justification for the war. Q26: B. The speech insists that international consensus and multilateralism are essential prerequisites for legitimate action. Q27: B. No, the speech emphasizes the need for a UN-led political process focusing on Iraqi sovereignty and inclusive national reconciliation, rather than primarily framing it as a counter-terrorism mission.-
 Q28: B. The speech stresses that long-term stability primarily depends on the rapid restoration of full Iraqi sovereignty and an inclusive political settlement addressing the grievances of all Iraqi communities. Q29: B. The speech views the UN’s role as primarily supportive of efforts led by the Iraqi government and its key international partners, focusing on specific tasks like electoral assistance or humanitarian aid, without an overarching guiding role. Q30: B. The speech emphasizes the urgent-
 need for a swift transition to full Iraqi security responsibility and sovereignty, potentially expressing concerns about the prolonged presence or actions of multinational forces. Q31: B. The speech suggests that ongoing violence and instability stem from a complex mix of factors including the foreign military occupation, the lack of a fully inclusive political process, and sectarian tensions, in addition to terrorist activities. Q32: B. No, the speech focuses on other rationales such as democrac-
y promotion, combating terrorism, or regional stability, without emphasizing WMD proliferation in the context of Iraq. Q33: B. The speech calls for an immediate or accelerated timeline for the restoration of complete Iraqi sovereignty and the withdrawal of foreign forces, viewing this as key to stabilization. Q34: B. As an occupation force that has failed to establish security and whose continued presence may be a source of instability or serve external agendas. Q35: B. The foreign occupation itse-
lf and its consequences, or efforts by external/occupying forces to deliberately heighten insecurity. Q36: B. Skeptical or critical, suggesting that such efforts are fundamentally undermined or made ineffective

24
by the continued foreign military presence or external interference. Q37: B. No, the speech focuses more on issues of Iraqi sovereignty, national unity, the failures of occupation, or the need for a UN-led or regionally-inclusive political solution independent of a global ideological conflict. Q38: B. The full withdrawal of foreign forces and the end of occupation, allowing for a genuinely Iraqi-led political process and national reconciliation. Q39: B. The speech asserts that the occupying/multin-
ational forces are incapable of establishing security and may even be contributing to the insecurity. Q40: B. Yes, the speech explicitly calls for or strongly implies the need for the withdrawal of foreign forces to restore Iraqi sovereignty and stability. Q41: B. The speech characterizes the foreign military presence primarily as an occupation, a source of instability, or calls for its withdrawal to restore Iraqi sovereignty. Q42: B. The speech primarily attributes the violence and instability to-
 the consequences of the foreign military invasion and/or the ongoing occupation. Q43: B. The speech questions or explicitly condemns the legitimacy of the intervention, for example, by referring to false pretexts, lack of broad UN consensus, or violations of international law. Q44: A. The speech emphasizes a central and leading role for the United Nations in guiding the political process, national reconciliation, or overall stabilization efforts in Iraq. Q45: B. The speech primarily emphasizes ne-
gative consequences, such as increased civilian suffering, regional destabilization, a rise in terrorism, or the failure to achieve stated objectives. Q46: B. The speech calls for or implies that a clear timetable for the withdrawal of foreign military forces is a necessary step towards restoring Iraqi sovereignty and achieving peace. Q47: B. The speech directly or indirectly assigns significant responsibility to the actions of foreign intervening or occupying powers for the humanitarian situation-
 and security challenges.
B. Narrative 2
Q9: A. The speech presents Iraq as a test case for the credibility and authority of the United Nations and the international order. Q12: A. The restoration of sovereignty should occur as soon as possible, guided by the needs and capacity of the Iraqi people. Q13: A. The United Nations should play a supportive but not leading role, with the coalition maintaining primary responsibility. Q17: A. The United Nations should help facilitate the transition but not control the process. Q18: A. The timeline-
 should be determined by the situation on the ground and the readiness of Iraqi institutions. Q19: A. The war tested the United Nations but ultimately reaffirmed the need for collective action. Q20: B. Multilateral consensus and UN authorization are always required for legitimate action. Q22: A. The war liberated Iraqis from dictatorship and set them on a path to democracy and freedom. Q23: A. The UN is encouraged to support the new Iraqi government and reconstruction, but the main responsibility -
lies with the coalition and Iraqis themselves. Q24: A. The Iraq war is presented as a key front in the global war on terror, with terrorists being the main threat to Iraq’s future. Q25: A. The speech justifies the war as necessary to enforce WMD-related Security Council resolutions and prevent proliferation. Q26: A. The speech emphasizes the importance of action, even without full international consensus, if necessary for security and freedom. Q27: B. No, the speech emphasizes the need for a UN-le-
d political process focusing on Iraqi sovereignty and inclusive national reconciliation, rather than primarily framing it as a counter-terrorism mission. Q28: A. The speech identifies the establishment and support of democratic institutions, facilitated by

25
international partners, as the most crucial element for long-term stability. Q29: B. The speech views the UN’s role as primarily supportive of efforts led by the Iraqi government and its key international partners, focusing on specific tasks like electoral assistance or humanitarian aid, without an overarching guiding role. Q30: A. The speech implicitly or explicitly supports the continued presence of multinational forces as essential for providing security, training Iraqi forces, and supporting t-
he democratic transition. Q31: A. The speech attributes the violence primarily to foreign terrorists, Al-Qaida operatives, and remnants of the former regime seeking to derail the new democratic process. Q32: B. No, the speech focuses on other rationales such as democracy promotion, combating terrorism, or regional stability, without emphasizing WMD proliferation in the context of Iraq. Q33: A. The speech views the restoration of full sovereignty as a gradual process, contingent on the development -
of Iraqi capacity and the defeat of anti-democratic forces, justifying an extended international security presence. Q34: A. As a vital support to the elected Iraqi government in its fight against terrorism and extremism, helping to establish democracy and security. Q35: A. Terrorists, extremists, and radicals aiming to derail the democratic process and the legitimately elected government. Q36: A. Strongly supportive, viewing them as key instruments for Iraq to achieve democracy, stability, and pro-
sperity with international assistance. Q37: A. Yes, the speech explicitly or implicitly frames Iraq as a central battleground in a global ideological war against terror and extremist ideologies. Q38: A. The defeat of terrorist and extremist elements by Iraqi and multinational forces, alongside the strengthening of the democratic government. Q39: A. The speech suggests that multinational forces are making progress or are essential in helping the Iraqi government establish security against insurgent-
s and terrorists. Q40: A. No, the speech implies that the continued presence of multinational forces is necessary for the foreseeable future to support the Iraqi government and security. Q41: A. The speech portrays the foreign military presence as a necessary intervention to support Iraqi democracy and security against extremist threats, often highlighting Iraqi consent or request. Q42: A. The speech primarily attributes the violence and instability to extremist groups, terrorists, or remnants of -
the former regime seeking to derail the new political process. Q43: A. The speech supports or implies the intervention’s legitimacy, for example, by focusing on the removal of a tyrannical regime or the aim of establishing democracy. Q44: B. The speech views the United Nations’ role as primarily supportive of efforts led by the Iraqi government and/or multinational forces, focusing on specific assistance or coordination tasks. Q45: A. The speech primarily emphasizes positive outcomes or progress, -
such as the establishment of democratic institutions, security improvements, or the liberation of the Iraqi people. Q46: A. The speech suggests that a continued, conditions-based foreign military presence is essential for training Iraqi forces and ensuring stability before any significant withdrawal. Q47: A. The speech primarily assigns responsibility to terrorist organizations and extremist factions for perpetuating the humanitarian crisis and security issues.
APPENDIX D
DETAILS ON THE LLM ANALYSIS OF INFERRED NARRATIVES FOR IRAQ WAR
A. Narrative 1
The below is the LLM-generated summary of this narrative, in full:
“The speech presents a strong critique of the Iraq War, emphasizing the importance of international law, UN authority, and multilateralism. It warns against unilateral military actions and stresses that any use of

26
force must have explicit authorization from the UN Security Council.
The speaker does not link Iraq to terrorism or advocate for regime change, instead focusing on disarmament, inspections, and diplomatic engagement. The speech questions the justification for war, particularly the claims about Weapons of Mass Destruction (WMDs), and condemns the war as illegal or illegitimate due to the lack of UN authorization.
A major theme is the restoration of Iraqi sovereignty. The speech argues that long-term stability hinges on a swift and complete withdrawal of foreign troops and the establishment of a UN-led political process that promotes inclusive national reconciliation. The ongoing foreign occupation is portrayed as a key driver of instability, hindering both peace and the rebuilding process.
Furthermore, the speech attributes humanitarian suffering and regional instability to the foreign intervention and criticizes the ineffectiveness and possible ulterior motives of the occupying forces. It calls for the UN to take a leading role in reconstruction, with a focus on Iraqi ownership of the political future.
Overall, the speech is critical of the war and its aftermath, firmly grounded in principles of international cooperation, legal legitimacy, and the rights of the Iraqi people to determine their own future. ”
B. Narrative 2
The below is the LLM-generated summary of this narrative, in full. The bolded font was as generated by the LLM.
“The speech presents Iraq as a critical test for the international order, asserting that the war, while controversial, has ultimately affirmed the need for collective action and international engagement. It emphasizes the importance of restoring Iraqi sovereignty as soon as possible but in a manner that is conditioned by ground realities and the readiness of Iraqi institutions.
The role of the United Nations is portrayed as supportive rather than leading, with the coalition and Iraqis bearing primary responsibility for political transition, security, and reconstruction. The UN is encouraged to assist with specific tasks like elections and humanitarian aid, but not to direct the overall process. The speech justifies the war based on the need to enforce Security Council resolutions on WMDs and prevent proliferation, while also framing Iraq as a central front in the global -
war on terror. It portrays terrorist groups, extremists, and remnants of the former regime as the main sources of ongoing violence, working to derail Iraq’s path toward democracy.
Foreign military forces are characterized as necessary and constructive, supporting the Iraqi government in fighting terrorism, training security forces, and building democratic institutions. The continued international presence is seen as essential for stability, with withdrawal contingent on the defeat of insurgent threats and the strengthening of Iraqi capacity.
The speech emphasizes positive developments such as the liberation of the Iraqi people, the emergence of democratic governance, and security progress. It conveys a hopeful outlook, suggesting that with sustained international support, Iraq is on a path toward peace, freedom, and prosperity.”
APPENDIX E
EXAMPLE LLM AUDITING CONNECTED TO UNGA NARATIVES
The US and UK had significant probability of Narrative 2, in support of the war. France had highest probability on Narrative 1, in opposition to the war. Saudi Arabia had highest probability on Narrative 0,

27
Country Answer Justification France B The speech does not justify the war as necessary to enforce WMD-related Security Council resolutions and prevent proliferation. Instead, it emphasizes that “force cannot be the sole response” and warns against “unilateral preventive action,” advocating for collective action through the United Nations. The speaker states, “France advocates a démarche made completely legitimate by collective deliberation,” and insists that “the Security Council should then decid-
e on the measures to be taken without excluding any option,” only if Iraq refuses to comply. This approach questions the justification of unilateral war based on WMDs and stresses “the need for international legitimacy and process.” Saudi Arabia
C The speech discusses Iraq’s implementation of relevant Security Council resolutions and welcomes Iraq’s decision to allow the unconditional return of United Nations weapons inspectors, viewing it as a positive diplomatic step. However, it does not justify the war as necessary to enforce WMD-related resolutions (A), nor does it question or criticize the WMD justification for the war (B). Instead, it emphasizes diplomatic solutions and the responsibility of both Iraq and the Security Council. Ther-
efore, the correct answer is “None of the above.” UK A The speech states, “Alongside the threats from failing States and from terrorism, the proliferation of weapons of mass destruction poses the greatest current threat to global security, and nowhere is the case for universal support for the enforcement of United Nations law stronger than in the field of weapons of mass destruction.” It further says, “That exception is Iraq. For two decades, Saddam Hussein’s regime has defied and frustrated every-
 attempt to enforce the international rule of law... No country presents as fundamental a challenge to the United Nations as Iraq.” The speaker argues, “So those of us who believe in an active international community cannot stand by and do nothing while Iraq continues to defy the will of the United Nations. All of us who believe in the United Nations have to make up our minds now about how to deal with Iraq. The authority of the United Nations itself is at stake.” “This justifies action against Ir-
aq as necessary to enforce WMD-related Security Council resolutions and prevent proliferation.” USA A The speech repeatedly asserts that Iraq has violated Security Council resolutions regarding weapons of mass destruction, is continuing to develop such weapons, and that this poses a grave threat. It states: “Saddam Hussein’s regime is a grave and gathering danger. To suggest otherwise is to hope against the evidence.” and “The conduct of the Iraqi regime is a threat to the authority of the United -
Nations and a threat to peace.” The speech calls for enforcement of Security Council resolutions and warns that action will be unavoidable if Iraq does not comply, justifying the war as necessary to prevent WMD proliferation.
Table VII: GPT-4o generated justifications for its answers to Question 25 connected to 2002 UNGA speeches from France, Saudi Arabia, the UK, and the US.
which took a neutral stance.
Question 25 asked the degree to which the country, in their speech, articulated support for the Iraq War because of the need to stop the proliferation of weapons of mass destruction. This was a key question in distinguishing stances of countries, and hence narratives.
We asked GPT-4o to explain why it selected the answer it did for Question 25, connected to the speeches from the France, Saudi Arabia, the UK and the US. We quote in Table VII from the response from GPT-4o.
APPENDIX F
LLM-GENERATED QUESTIONS FOR THE NEURIPS DATASET
Q1: How does the paper conceptualize the model’s parameters (e.g., weights)? A. As fixed, deterministic values to be found via optimization. B. As random variables with a posterior distribution to be inferred. C. Through an ensemble of point estimates from multiple training runs. D. The paper is purely theoretical and does not discuss specific parameterization.
Q2: How is the concept of regularization treated in the paper? A. As a numerical technique (e.g., weight decay) to prevent overfitting, without deeper justification."

28
B. It is explicitly framed as imposing a prior distribution over the model’s parameters." C. Through architectural choices like dropout or data augmentation. D. Regularization is not a primary concern or is not discussed. E. None of the above
Q3: "What is the primary method used for model training or inference? A. Error backpropagation to find a single optimal set of parameters (a point estimate). B. Markov Chain Monte Carlo (MCMC) methods to sample from the parameter posterior. C. Variational Inference (VI) to approximate the parameter posterior. D. The paper focuses on analytical solutions for a restricted class of models. E. None of the above
Q4: "How does the model presented in the paper handle or represent predictive uncertainty? A. It produces a single, deterministic output (a point prediction). B. It explicitly calculates a predictive posterior distribution by marginalizing over model parameters. C. It uses an ensemble of models to generate a range of predictions without a formal probabilistic basis. D. The paper does not address the issue of predictive uncertainty. E. None of the above
Q5: What is the relationship between the neural network and probabilistic principles in the paper? A. The model is presented as a function approximator with no explicit connection to probability theory. B. The paper establishes a link between a network component (e.g., cost function) and a probabilistic concept (e.g., likelihood). C. The entire neural network is framed as a probabilistic graphical model where inference is the core task. D. The paper contrasts neural network approaches with probabi-
listic methods as competing paradigms. E. None of the above
Q6: If Bayesian methods are used, what is the primary motivation cited? A. To provide a principled method for model regularization and prevent overfitting. B. To quantify the model’s uncertainty in its predictions (epistemic uncertainty). C. To perform model selection or optimize hyperparameters automatically. D. The paper does not use Bayesian methods. E. None of the above
Q7: What is the primary barrier or challenge addressed by the paper’s methodology? A. Developing a learning algorithm for a novel network architecture. B. The computational intractability of performing exact Bayesian inference in neural networks. C. The challenge of scaling probabilistic methods to large datasets and deep architectures. D. The lack of biologically plausible learning rules. E. None of the above
Q8: "What type of uncertainty is the primary focus of the paper? A. Aleatoric uncertainty, representing inherent noise in the data generating process. B. Epistemic uncertainty, representing the model’s own uncertainty due to limited data. C. The paper aims to quantify both aleatoric and epistemic uncertainty. D. The paper does not make a distinction between different types of uncertainty, or does not address it. E. None of the above
Q9: "What is the conceptual framing of the learning objective or loss function? A. As an error metric to be minimized (e.g., mean squared error).

29
B. As a negative log-likelihood of the data given the parameters. C. As an approximation to the model evidence or marginal likelihood (e.g., the Evidence Lower Bound). D. The paper does not focus on a specific learning objective.", "E. None of the above
Q10: "How integrated are the Bayesian and neural network concepts within the paper? A. The paper describes them as two separate, and possibly competing, fields. B. The paper uses a concept from one field to explain a phenomenon in the other (e.g., regularization as a prior). C. The paper describes a fully-integrated model where neural networks are used to parameterize and perform inference in a Bayesian model. D. The paper focuses exclusively on one of the two fields with no mention of the other. -
E. None of the above
Q11: "How does the paper address the challenge of model selection (e.g., choosing the network architecture)? A. By evaluating a few handcrafted architectures on a validation set. B. By using Bayesian model selection principles, such as approximating the model evidence. C. By employing regularization techniques that effectively prune or simplify the network.", "D. The paper assumes a fixed architecture and does not discuss model selection. E. None of the above
Q12: "What is the implicit or explicit view of the data’s role in the learning process? A. Data is primarily a source of error signals for adjusting model parameters. B. Data is treated as evidence to update a prior belief over parameters into a posterior belief. C. Data is used to directly construct a non-parametric model without explicit parameters. D. The paper’s focus is theoretical, with little discussion of the role of empirical data. E. None of the above
Q13: "If an approximation technique is used for inference, how is its quality assessed? A. By its final predictive performance on a test set, without direct assessment of the approximation. B. By measuring the tightness of a bound on the marginal likelihood (e.g., the ELBO). C. By comparing the approximate posterior to results from a more computationally expensive ’gold standard’ method like long-run MCMC. D. The paper introduces an approximation method but does not formally evaluate its quality. -
E. None of the above
Q14: What is the primary model output that the paper analyzes? A. The accuracy or error rate based on the model’s single best prediction. B. The full predictive distribution, including its mean and variance. C. The internal representations or features learned by the model’s hidden layers. D. The structure of the learned probability distributions over the model weights. E. None of the above
Q15: "How are hyperparameters (e.g., learning rate, regularization strength) handled in the paper? A. They are set to conventional values or tuned manually via trial and error. B. They are optimized as part of a nested loop using a validation set. C. They are treated as random variables and inferred from the data within a hierarchical Bayesian model. D. The paper proposes a method that is largely insensitive to hyperparameter settings. E. None of the above

30
Q16: "What is the scale of the computational resources required by the proposed method? A. The method is demonstrated on small models that can be trained quickly on a single CPU. B. The method is computationally intensive, requiring specialized hardware (like GPUs) and/or long training times. C. The paper introduces a method specifically designed to reduce the computational cost of previous approaches. D. The paper does not provide enough detail to assess the computational requirements. E. None of-
 the above
Q17: "Does the paper describe the model as primarily discriminative or generative? A. Purely discriminative, focusing on learning a mapping from inputs to outputs (P(y|x)). B. Purely generative, focusing on learning the underlying data distribution (P(x)). C. The model has both discriminative and generative aspects (e.g., modeling the joint distribution P(x,y)). D. The distinction between discriminative and generative modeling is not relevant to the paper’s topic. E. None of the above
Q18: "What is the paper’s main contribution to the scalability of the methods discussed? A. It demonstrates an existing method on a new, larger-scale problem. B. It introduces a new algorithm or approximation that makes Bayesian/neural methods feasible for larger models or datasets. C. It provides a theoretical analysis of the scaling properties of a class of algorithms. D. Scalability is not a primary concern of the research presented. E. None of the above
Q19: How does the paper engage with the limitations of its proposed approach? A. It primarily focuses on the strengths and novelties, with little discussion of limitations. B. It acknowledges specific limitations, such as computational cost or restrictive model assumptions. C. It compares the limitations of its approach directly against the limitations of alternative methods. D. It frames the limitations as open questions and directions for future research. E. None of the above
Q20: "What terminology does the paper use to describe the fusion of probabilistic methods and neural networks? A. It uses classical neural network terminology (e.g., ’weights’, ’error’) without probabilistic language. B. It refers to ’probabilistic’ or ’stochastic’ neural networks. C. It explicitly uses the term ’Bayesian Neural Network’ or ’Bayesian Deep Learning’. D. The paper describes the concepts without assigning a specific umbrella term to the fusion. E. None of the above

31
Narrative Top #1 Top #2 Top #3 0 Operational Fault Tolerance of CMAC Networks (1989)
Fixed Point Analysis For Recurrent Networks (1988)
An Architecture for Acoustic Transient (1996) 1 Construction of Nonparametric Bayesian Models (2009)
GP CaKe: Effective brain connectivity with causal kernels (2017)
Ambiguous model learning made unambiguous with 1/f priors (2003) 2 Approximating Posterior Distributions in Belief Networks using Mixtures (1997)
The Generalized Reparameterization Gradient (2016)
Improved Variational Inference with Inverse Autoregressive Flow (2016) 3 Data Cleansing for Models Trained with SGD (2019)
Minimization and Proximal Policy Optimization (2018)
Benefits of over-parameterization with EM (2018) 4 Deep Recurrent Neural Network-Based Identification of Precursor microRNAs (2017)
Evaluation of Adaptive Mixtures of Competing Experts (1990)
Fully Neural Network Based Speech Recognition on Mobile and Embedded Devices (2018)
Table VIII: Titles and year of three papers most aligned with each narrative considered in the narrative analysis of the NeurIPS dataset, targeted on neural networks, Bayesian analysis, and their inter-coupling.
APPENDIX G
THREE PAPERS MOST ALIGNED WITH EACH NEURIPS NARRATIVE
In Table VIII we list the top-three papers most aligned with three narratives connecetd to the NeurIPS dataset.

32
APPENDIX H
DETAILS ON THE LLM PROMPT FOR COHERENCE OF TOPICS & NARRATIVES
When the LLM is asked to provide a coherence score for the topics (columns of Φ) and narratives (columns of Ω), the following guidelines are specified to the LLM. The below are verbatum what is given to the LLM.
A. Prompt for topic model
0 = Completely unrelated words 1 = Mostly unrelated; hard to see a theme 2 = Loose theme; several off-topic words 3 = Clear theme; 2–3 marginal words 4 = Very clear; only 1 marginal word 5 = Perfectly coherent; all words belong to a single concept
B. Prompt for narrative model
0 = Answers are random or contradictory across questions 1 = Almost no thematic link; stance shifts question to question 2 = Loose theme with several off-topic or inconsistent answers 3 = Clear theme; a few marginal inconsistencies 4 = Very clear; only 1 minor inconsistency 5 = Perfectly consistent worldview across all questions

33
Experiment Task LLM Used UNGA Topic model evaluation GPT-4o UNGA Q&A design GPT-4.1, Gemeni-2.5-Pro UNGA Q&A answer GPT-4.1 UNGA Narrative model evaluation GPT-4o NeurIPS Topic model evaluation GPT-4o NeurIPS Q&A design Gemeni-2.5-Pro NeurIPS Q&A answer GPT-4.1 NeurIPS Narrative model evaluation Gemeni-2.5-Pro
Table IX: Summary of which LLM was used for each of the presented experiments.
APPENDIX I
SUMMARY OF WHICH LLMS WERE USED IN PRESENTED RESULTS
In the context of our experiments with the UNGA and NeurIPS dataset, we consider several commercial LLMs. The results were not particularly sensitive to which was used, among the list we provide below. For completeness, in Table IX we summarize which LLM was used for each of the results presented in this paper.
REFERENCES
[1] H. I. Aysel, X. Cai, and A. Prugel-Bennett. Explainable artificial intelligence: Advancements and limitations. Applied Sciences, 15(13):7261, 2025. [2] J. Bernard, M. Zeppelzauer, M. Lehmann, M. Müller, and M. Sedlmair. Towards user-centered active learning algorithms. Computer Graphics Forum, 37:121–132, 2018. [3] D. M. Blei, A. Y. Ng, and M. I. Jordan. Latent dirichlet allocation. Journal of Machine Learning Research, 3:993–1022, 2003. [4] T. Broderick, J. Pitman, and M. I. Jordan. Combinato-
rial clustering and the nested chinese restaurant process. Statistical Science, 30(1):75–87, 2015. [5] T. Brown, B. Mann, N. Ryder, M. Subbiah, J. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, S. Agarwal, A. Herbert-Voss, G. Krueger, T. Henighan, R. Child, A. Ramesh, D. Ziegler, J. Wu, C. Winter, C. Hesse, M. Chen, E. Sigler, M. Litwin, S. Gray, B. Chess, J. Clark, C. Berner, S. McCandlish, A. Radford, I. Sutskever, and D. Amodei. Language models are few-shot learners. Neura-
l Information Processing Systems (NeurIPS), 2020.
[6] W. Cheng, Y. Shen, L. Huang, and Y. Zhu. Incorporating interpretability into latent factor models via fast influence analysis. Proceedings of the 25th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2019.
[7] X. Cheng, Y. Chen, and S. Sra. Transformers implement functional gradient descent to learn non-linear functions in context. Int. Conf. Machine Learning (ICML), 2024.
[8] DeepSeek. Deepseek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. arXiv:2501.12948v1, 2025. [9] J. DeFronzo. The Iraq War: Origins and Consequences. Routledge, 2019.
[10] J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova. BERT: Pre-training of deep bidirectional transformers for language understanding. North American Chapter of the Association for Computational Linguistics (NAACL-HLT), 2019.
[11] A. B. Dieng, F. J. Ruiz, and D. M. Blei. Topic modeling in embedding spaces. Transactions of the Association for Computational Linguistics, 8:439–453, 2020.
[12] W. R. Fisher. Narration as a human communication paradigm: The case of public moral argument. Communication Monographs, 51:1–22, 1984.
[13] H. Kuhn. The hungarian method for the assignment problem. Naval Research Logistics Quarterly, 2:83–97, 1955.

34
[14] P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, S. Riedel, and D. Kiela. Retrieval-augmented generation for knowledge-intensive NLP tasks. arXiv:2005.11401v4, 2021.
[15] Q. V. Liao and J. W. Vaughan. Ai transparency in the age of llms: A human-centered research roadmap. Harvard Data Science Review, 2024.
[16] B. Long, E. Liu, R. Qiu, and Y. Duan. Explainable ai – the latest advancements and new trends. arXiv preprint arXiv:2505.07005, 2025.
[17] J. Mökander, J. Schuett, H. R. Kirk, and L. Floridi. Auditing large language models: a three-layered approach. AI and Ethics, 4:1085–1115, 2023. [18] J. Munkres. Algorithms for the assignment and transportation problems. J. Society for Industrial and Applied Mathematics, 5:32–38, 1957.
[19] J. Paisley, D. Blei, and M. I. Jordan. Bayesian nonparametric models. Handbook of Mixed Membership Models and Their Applications, pages 77–106, 2015.
[20] J. Pearl. Causality: Models, Reasoning and Inference. Cambridge University Press, USA, 2nd edition, 2009. [21] Z. Qin, Y. Cong, and T. Wan. Topic modeling of chinese language beyond a bag-of-words. Computer Speech & Language, 40:60–78, 2016.
[22] W. Rand. Objective criteria for the evaluation of clustering methods. J. Am. Statistical Association, 66:846–850, 1971.
[23] M. D. Reckase. Multidimensional Item Response Theory. Springer, 2009.
[24] B. Sahoh and A. Choksuriwong. The role of explainable artificial intelligence in high-stakes decisionmaking systems: a systematic review. Journal of Ambient Intelligence and Humanized Computing, 14:7827–7843, 2023.
[25] B. Schölkopf and A. Smola. Learning with kernels: support vector machines, regularization, optimization, and beyond. MIT press, 2002. [26] H. Schütze and C. D. Manning. Foundations of Statistical Natural Language Processing. MIT Press, 1999. [27] Y. W. Teh, M. I. Jordan, M. J. Beal, and D. M. Blei. Hierarchical dirichlet processes. Journal of the American Statistical Association, 101(476):1566–1581, 2006.
[28] M. K. Titsias and N. D. Lawrence. Bayesian gaussian process latent variable model. Int. Conf. Artificial Intelligence and Statistics (AISTATS), 2010.
[29] J. P. Tuazon, G. M. Abubo, and J. Olea. Interpretability indices and soft constraints for factor models. arXiv preprint arXiv:2409.11525, 2024.
[30] A. Vaswani, N. Shazeer, N. Parmar, et al. Attention is all you need. In Advances in Neural Information Processing Systems (NeurIPS), 2017.
[31] J. von Oswald, E. Niklasson, E. Randazzo, J. Sacramento, A. Mordvintsev, A. Zhmoginov, and M. Vladymyrov. Transformers learn in-context by gradient descent. Int. Conf. Machine Learning (ICML), 2023.
[32] A. Wang, W. Convertino, X. Cheng, R. Henao, and L. Carin. On understanding attention-based in-context learning for categorical data. Int. Conf. Machine Learning (ICML), 2025. [33] L. Wang, N. Yang, X. Huang, L. Yang, R. Majumder, and F. Wei. Improving text embeddings with large language models. arXiv.2401.00368, 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:53.097Z
- **Text Length:** 105819 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
