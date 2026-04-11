# PDF Document: (LEC#4 Inside-out interpretability training dynamics in multi-layer transformer) Scan and Snap Understanding Training Dynamics and Token Composition in 1-layer Transformer.pdf

**File Path:** (LEC#4 Inside-out interpretability training dynamics in multi-layer transformer) Scan and Snap Understanding Training Dynamics and Token Composition in 1-layer Transformer.pdf

**Processed Date:** 2026-02-10T18:14:42.342Z

**File Size:** 1137.06 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 430

**Title:** (LEC#4 Inside-out interpretability: training dynamics in multi-layer transformer) Scan and Snap: Understanding Training Dynamics and Token Composition in 1-layer Transformer

**Collection:** Courses > LLM

---

## Extracted Text Content

arXiv:2305.16380v4 [cs.CL] 30 Oct 2023

Scan and Snap: Understanding Training Dynamics and Token Composition in 1-layer Transformer
Yuandong Tian1 Yiping Wang2,4 Beidi Chen1,3 Simon Du2
1Meta AI (FAIR) 2University of Washington 3Carnegie Mellon University 4Zhejiang University {yuandong,beidic}@meta.com, {ypwang61,ssdu}@cs.washington.edu
Abstract
Transformer architectures have shown impressive performance in multiple research domains and have become the backbone of many neural network models. However, there is limited understanding on how Transformer works. In particular, with a simple predictive loss, how the representation emerges from the gradient training dynamics remains a mystery. In this paper, we analyze the SGD training dynamics for 1-layer transformer with one self-attention plus one decoder layer, for the task of next token pred-
iction in a mathematically rigorous manner. We open the black box of the dynamic process of how the self-attention layer combines input tokens, and reveal the nature of underlying inductive bias. More specifically, with the assumption (a) no positional encoding, (b) long input sequence, and (c) the decoder layer learns faster than the self-attention layer, we prove that selfattention acts as a discriminative scanning algorithm: starting from uniform attention, it gradually attends more to key toke-
ns that are distinct for a specific next token to be predicted, and pays less attention to common key tokens that occur across different next tokens. Among distinct tokens, it progressively drops attention weights, following the order of low to high co-occurrence between the key and the query token in the training set. Interestingly, this procedure does not lead to winner-takes-all, but decelerates due to a phase transition that is controllable by the learning rates of the two layers, leaving (alm-
ost) fixed token combination. We verify this scan and snap dynamics on synthetic and real-world data (WikiText).
1 Introduction
The Transformer architecture [1] has demonstrated wide applications in multiple research domains, including natural language processing [2, 3, 4], computer vision [5, 6, 7], speech [8, 9], multimodality [10, 11], etc. Recently, large language models (LLMs) based on decoder-only Transformer architecture also demonstrate impressive performance [4, 12, 13], after fine-tuned with instruction data [14] or reward models [15]. Why a pre-trained model, often supervised by simple tasks such as predicting t-
he next word [4, 3, 13] or filling in the blanks [2, 16, 17], can learn highly valuable representations for downstream tasks, remains a mystery.
To understand how Transformer works, many previous works exist. For example, it has been shown that Transformer is a universal approximator [18], can approximate Turing machines [19, 20], and can perform a diverse set of tasks, e.g., hierarchical parsing of context-free grammar [21], if its weights are set properly. However, it is unclear whether the weights designed to achieve specific tasks are at a critical point, or can be learned by SoTA optimizers (e.g., SGD, Adam [22], AdaFactor [23], AdamW-
 [24]). In fact, many existing ML models, such as k-NN, Kernel SVM, or MLP, are also universal approximators, while their empirical performance is often way below Transformer.
To demystify such a behavior, it is important to understand the training dynamics of Transformer, i.e., how the learnable parameters change over time during training. In this paper, as a first step, we formally characterize the SGD training dynamics of 1-layer position-encoding-free Transformer for
37th Conference on Neural Information Processing Systems (NeurIPS 2023).

next token prediction, a popular training paradigm used in GPT series [3, 4], in a mathematically rigorous manner. The 1-layer Transformer contains one softmax self-attention layer followed by one decoder layer which predicts the next token. Under the assumption that the sequence is long, and the decoder learns faster than the self-attention layer, we prove the following interesting dynamic behaviors of self-attention during training. Frequency Bias: it progressively pays more attention to key tok-
ens that co-occur a lot with the query token, and loses attention to tokens that co-occur less. Discriminative Bias: it pays attention to distinct tokens that appear uniquely given the next token to be predicted, while loses interest to common tokens that appear across multiple next tokens. These two properties suggest that self-attention implicitly runs an algorithm of discriminative scanning, and has an inductive bias to favor unique key tokens that frequently co-occur with the query ones.
Furthermore, while self-attention layer tends to become more sparse during training, as suggested by Frequency Bias, we discover that it will not collapse to one-hot, due to a phase transition in the training dynamics. In the end, the learning does not converge to any stationary points with zero gradient, but ventures into a region where the attention changes slowly (i.e., logarithmically over time), and appears frozen and learned. We further show that the onset of the phase transition are control-
led by the learning rates: large learning rate gives sparse attention patterns, and given fixed self-attention learning rate, large decoder learning rate leads to faster phase transition and denser attention patterns. Finally, the SGD dynamics we characterize in this work, named scan and snap, is verified in both synthetic and simple real-world experiments on WikiText [25].
Concurrent works on Transformer dynamics. Compared to [26] that uses ℓ2 loss, our analysis focuses on cross-entropy, which is more realistic, imposes no prior knowledge on possible attention patterns inaccessible to training, and allows tokens to be shared across topics. Compared to [27] that analyzes “positional attention” that is independent of input data with symmetric initialization, our analysis focuses on attention on input data without symmetric assumptions. [28, 29, 30] give similar conclu-
sions that self-attention attends to relevant tokens. In comparison, our work analyzes richer phenomena in 1-layer transformers related to frequency and discriminative bias, which has not been brought up by these works. For example, sparse attention patterns are connected with co-occurrence frequency of contextual token and query, characterization of such connection over training with softmax, including two-stage behaviors of attention logits, etc. We also leverage analytical solutions to certain -
nonlinear continuous dynamics systems that greatly simplifies the analysis. Detailed comparison can be found in Appendix B.
2 Related Works
Expressiveness of Attention-based Models. A line of work studies the expressive power of attention-based models. One direction focuses on the universal approximation power [18, 31, 32, 33, 20]. More recent works present fine-grained characterizations of the expressive power for certain functions in different settings, sometimes with statistical analyses [34, 35, 36, 37, 21, 38, 39, 40]. In particular, there is growing interest in explaining the capability of in-context learning [41] of Transformer-
, by mapping the gradient descent steps of learning classification/regression into feedforward steps of Transformer layers [42, 43, 44, 45, 37, 46]. Different from our work, the results in these papers are existential and do not take training dynamics into consideration.
Training Dynamics of Neural Networks. Previous works analyze the training dynamics in multilayer linear neural networks [47, 48], in the student-teacher setting [49, 50, 51, 52, 53, 54, 55, 56, 57], and infinite-width limit [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], including extentions to attention-based models [72, 73]. For self-supervised learning, works exist to analyze linear networks [74] and understand the role played by nonlinearity [75]. Focusing on attentionbased models, Z-
hang et al. [76] study adaptive optimization methods in attention models. Jelassi et al. [27] propose an idealized setting and show the vision transformer [5] trained by gradient descent can learn spatial structure. Li et al. [26] show that the 1-layer Transformer can learn a constrained topic model, in which any word belongs to one topic, with ℓ2 loss, BERT [2]-like architecture and additional assumptions on learned attention patterns. Snell et al. [77] study the dynamics of a singlehead attentio-
n head to approximate the learning of a Seq2Seq architecture. While these papers also study the optimization dynamics of attention-based models, they focus on different settings and do not explain the phenomena presented in our paper.
2

3 Problem Setting

Notation. Let {uk}M k=1 be d-dimensional embeddings, and {xt} be discrete tokens. For each token, xt takes discrete values from 1 to M , denoted as xt ∈ [M ], and xt := ext ∈ RM is the corresponding one-hot vector, i.e., the xt-th entry of xt is 1 while others are zero. uxt is the token embedding at location t in a sequence.

Let U = [u1, . . . , uM ]⊤ ∈ RM×d be the embedding matrix, in which the k-th row of U is the embedding vector of token k. X = [x1, . . . , xT −1]⊤ ∈ R(T −1)×M is the data matrix encoding the sequence of length T − 1. XU ∈ R(T −1)×d is the sequence of embeddings for a given sequence
{x1, . . . , xT −1}. It is clear that X1M = 1T −1.

We use X[i] to denote i-th sample in the sequence dataset. Similarly, xt[i] is the token located at t in i-th sample. Let D be the dataset used for training.

1-Layer Transformer Architecture. Given a sequence {x1, . . . , xT , xT +1}, the embedding after 1-layer self attention is:

T −1

uˆT =

btT uxt ,

t=1

btT :=

√ Tt=e−x11pe(xup⊤x(TuW⊤xTQWWQK⊤WuKx⊤tu/ xtd/)√d)

(1)

Here btT is the normalized self-attention weights (

T −1 t=1

btT

=

1).

One important detail is that

we mask the weight that the query token attends to itself, which is also being used in previous

works (e.g., QK-shared architecture [78]). See Sec. 7 for discussions about residual connection. Let

bT := [b1T , . . . , bT −1,T ]⊤ ∈ RT −1 be an attention vector, then b⊤T 1 = 1 and uˆT = U ⊤X⊤bT .

ℓ2-Normalization. We consider adding a normalization to the output of the self-attention layer: u˜T = U ⊤LN(X⊤bT ), where LN(x) := x/∥x∥2. NormFormer and RMSNorm [79, 80] also leverages this setting (up to a global constant). Our analysis can also be extended to standard LayerNorm [81], which also subtracts the mean of x, while [80] shows that mean subtraction may not affect the empirical results much. LLaMA [82] also uses RMSNorm. Empirically uˆT (or WV uˆT ) is normalized (instead of X⊤bT ) and -
here we use an approximation to facilitate analysis: when the token embedding {um} are approximately orthogonal to each other, then ∥U ⊤x∥2 ≈ ∥x∥2 and thus u˜T ≈ LN(uˆT ).

Objective. We maximize the likelihood of predicted (T + 1)-th token using cross entropy loss:

max J := ED
WK ,WQ,WV ,U

u⊤xT +1 WV u˜T − log

l

exp(u⊤l WV u˜T )

(2)

For simplicity, we consider single-head attention setting, and multiple-head attention can be re-
garded as single-head setting with simultaneous different initializations (see Sec. 4). We call xT = m as the query token of the sequence, and xT +1 = n as the next token to be predicted. Other tokens xt (1 ≤ t ≤ T − 1) that are encoded in X are called contextual tokens. Both the contextual and query tokens can take values from 1 to M (i.e., m ∈ [M ]) and next token takes the value from 1 to K (i.e., n ∈ [K]) where K ≤ M . Fig. 1(a) shows the overall setting. For an
overview of the notation used in the paper, please check Tbl. 1 in the Appendix.

3.1 Reparameterization
Instead of studying the dynamics with respect to the parameters of token embedding U , key, value and query projection matrices WK , WQ and WV , we study the dynam√ics of two pairwise token relation matrices Y := U WV⊤U ⊤ ∈ RM×M and Z := U WQWK⊤U ⊤/ d ∈ RM×M . Intuitively, entries of Y and Z store the “logits” of pairs of tokens. We regard the empirical parameterization using U , WK , WQ and WV as a specific way of parametrization of Y and Z, in order to reduce the number of parameters to be estim-
ated. Previous work also leverage similar parameterization for self-attention layers [27, 46].
For real-world applications, the number of tokens M can be huge (e.g., the vocabulary size M = 50, 272 in OPT-175B [83] and M = 32, 000 in LLaMA [82]) and directly optimizing Y and Z would be prohibitive. However, as we will show in this work, from the theoretical perspective, treating Y and Z as independent variables has some unique advantages and leads to useful insights.

3

(a)
𝑥!

Decoding & Softmax

Normalization

Self-attention

𝑥"
Contextual tokens

𝑥#$!

𝑥#
Query token

𝑥#%!
Next token

(b)
Sequence classes

Contextual tokens 𝑥' (1 ≤ 𝑡 ≤ 𝑇 − 1) ℙ(𝑙|𝑛!) ℙ(𝑙|𝑛")

Query token 𝑥% Next token 𝑥%&!

𝑛!

𝑚!

𝑛"

ℙ(𝑙|𝑛#) ℙ(𝑙|𝑛$)

𝑛,

𝑚"

𝑛-

Distinct tokens: There exists unique 𝑛 with ℙ(𝑙|𝑛) > 0 Common tokens: There exists multiple 𝑛 with ℙ(𝑙|𝑛) > 0

Figure 1: Overall of our setting. (a) A sequence with contextual tokens {x1, . . . , xT −1} and query token xT is fed into 1-layer transformer (self-attention, normalization and decoding) to predict the next token xT +1. (b) The definition of sequence classes (Sec. 3.2). A sequence class specifies the conditional probability P(l|m, n) of the contextual tokens, given the query token xT = m and the next token xT +1 = n. For simplicity, we consider the case that the query token is determined by the n-
ext token: xT = ψ(xT +1) (and thus P(l|m, n) = P(l|n)), while the same query token m may correspond to multiple next tokens (i.e., ψ−1(m) is not unique). We study two kinds of tokens: common tokens (CT) with P(l|n) > 0 for multiple sequence class n, and distinct tokens (DT) with P(l|n) > 0 for a single sequence class n only.

Lemma 1 (Dynamics of 1-layer Transformer). The gradient dynamics of Eqn. 2 with batchsize 1 is:

Y˙ = ηY LN(X⊤bT )(xT +1 − α)⊤,

Z˙

=

ηZ xT (xT +1

− α)⊤Y

⊤

PX⊥⊤ bT ∥X⊤bT ∥2

X

⊤

diag(bT

)X

(3)

Here Pv⊥ := I − vv⊤/∥v∥22 projects a vector into v’s orthogonal complementary space, ηY and ηZ are the learning rates for the decoder layer Y and self-attention layer Z, α := [α1, . . . , αM ]⊤ ∈ RM and αm := exp(Y ⊤LN(X⊤bT ))/1⊤ exp(Y ⊤LN(X⊤bT )).

Please check Appendix C for the proof. We consider Y (0) = Z(0) = 0 as initial condition. This
is reasonable since empirically Y and Z are initialized by inner product of d-dimensional vectors
whose components are independently drawn by i.i.d Gaussian. This initial condition is also more realistic than [27] that assumes dominant initialization in diagonal elements. Since (xT +1−α)⊤1 = 0 and PX⊥⊤bT X⊤diag(bT )X1 = 0, we have Y˙ 1 = Z˙ 1 = 0 and summation of rows of Z(t) and Y (t) remains zero. Since xT is a one-hot column vector, the update of Z = [z1, z2, . . . , zM ]⊤ is
done per row:

z˙m

=

ηZ X⊤[i]diag(bT

[i])X

[i]

PX⊥⊤[i]bT [i] ∥X⊤[i]bT [i]∥2

Y

(xT +1[i]

−

α[i])

(4)

where m = xT [i] is the query token for sample i, zm is the m-th row of Z and z˙m′ = 0 for row m′ ̸= m = xT [i]. Note that if xT [i] = m, then bT [i] is a function of zm only (but not a function of any other zm′ ). Here we explicitly write down the current sample index i, since batchsize is 1.

3.2 Data Generation
Next we specify a data generation model (Fig. 1(b)), named sequence class, for our analysis.
Sequence Class. We regard the input data as a mixture of multiple sequence classes. Each sequence class is characterized by a triple sm,n := (P(l|m, n), m, n). To generate a sequence instance from the class, we first set xT = m and xT +1 = n, and then generate the contextual tokens with conditional probability P(l|m, n). Let supp(m, n) be the subset of token l with P(l|m, n) > 0.
In this work, we consider the case that given a next token xT +1 = n, the corresponding sequence always ends with a specific query token xT = m =: ψ(n). This means that we could index sequence class with next token xT +1 = n alone: sn := (P(l|ψ(n), n), ψ(n), n), P(l|m, n) = P(l|n) and supp(n) := supp(ψ(n), n).
Note that |ψ−1(m)| = 1 means that the occurrence of token m alone decides next token n to be predicted, regardless of other tokens in the sequence, which is a trivial case. When |ψ−1(m)| ≥ 2, the same query token m, combined with other token l in the sequence with non-zero probability P(l|m, n) > 0, determine the next token.
Overlapping sequence class. Two sequence classes sn and sn′ overlap if supp(n) ∩ supp(n′) ̸= ∅.

4

(a) Initialization

𝑐!̃ |##
Seq class (𝑚, 𝑛!)

Distinct Token

(b) Common Token Suppression

Common

𝑐!̃ |##

Token

(c) Winners-take-all 𝑐!̃ |##

(d) Attention frozen 𝑐!̃ |##

Seq class (𝑚, 𝑛")
𝑐!̃ |#$

𝑐!̃ |#$

𝑐!̃ |#$

𝑐!̃ |#$

Figure 2: Overview of the training dynamics of self-attention map. Here c˜l|m,n := P(l|m, n) exp(zml) is the un-normalized attention score (Eqn. 5). (a) Initialization stage. zml(0) = 0 and c˜l|m,n = P(l|m, n). Distinct tokens (Sec. 3.2) shown in blue, common tokens in yellow. (b) Common tokens (CT) are suppressed (z˙ml < 0, Theorem 2). (c) Winners-take-all stage. Distinct tokens (DT) with large initial value c˜l|m,n(0) start to dominate the attention map (Sec. 5, Theorem 3). (d) Once passing the -
phase transition, i.e., t ≥ t0 = O(K ln M/ηY ),
attention appears (almost) frozen (Sec. 6) and token composition is fixed in the self-attention layer.

(Global) distinct and common tokens. Let Ω(l) := {n : P(l|n) > 0} be the subset of next tokens that co-occur with contextual token l. We now can identify two kinds of tokens: the distinct token l which has |Ω(l)| = 1 and the common token l with |Ω(l)| > 1. Intuitively, this means that there exists one common token l so that both P(l|n) and P(l|n′) are strictly positive, e.g., common words like ‘the’, ‘this’, ‘which’ that appear in many sequence classes. In Sec. 5, we will see how
these two type of contextual tokens behave very differently when self-attention layer is involved in
the training: distinct tokens tend to be paid attention while common tokens tend to be ignored.

3.3 Assumptions

To make our analysis easier, we make the following assumptions:
Assumption 1. We consider (a) no positional encoding, (b) The input sequence is long (T → +∞) and (c) The decoder layer learns much faster than the self-attention layer (i.e., ηY ≫ ηZ).

Assumption 1(a) suggests that the model is (almost) permutation-invariant. Given the next token to predict xT +1 = n and the query token xT = m acted as query, the remaining tokens in the sequence may shuffle. Assumption 1(b) indicates that the frequency of a token l in the sequence approaches its conditional probability P(l|m, n) := P(l|xT = m, xT +1 = n).
Note that the assumptions are comparable with or even weaker than previous works, e.g., [27] analyzes positional attention with symmetric initialization, without considering input data and [28] models the data distribution as discriminative/non-discriminative patterns, similar to our common/distinct tokens. Empirically, NoPE [84] shows that decoder-only Transformer models without positional encoding still works decently, justifying that Assumption 1(a) is reasonable.

Given the event {xT = m, xT +1 = n}, suppose for token l, the conditional probability that it appears in the sequence is P(l|m, n). Then for very long sequence T → +∞, in expectation the number of token l appears in a sequence of length T approaches T P(l|m, n). Therefore the pertoken self-attention weight cl|m,n is computed as:

cl|m,n :=

T P(l|m, n) exp(zml) l′ T P(l′|m, n) exp(zml′ )

=

P(l|m, n) exp(zml) l′ P(l′|m, n) exp(zml′ )

=:

c˜l|m,n l′ c˜l′|m,n

(5)

Here zml is zm’s l-th entry and c˜l|m,n := P(l|m, n) exp(zml) is un-normalized attention score.

Lemma 2. Given the event {xT = m, xT +1 = n}, when T → +∞, we have

X⊤bT → cm,n,

X⊤diag(bT )X → diag(cm,n)

(6)

where cm,n = [c1|m,n, c2|m,n, . . . , cM|m,n]⊤ ∈ RM . Note that c⊤m,n1 = 1.

By the data generation process (Sec. 3.2), given the next token xT +1 = n, the query token xT = m is uniquely determined. In the following, we just use cn to represent cm,n (and similar for c˜n).

4 Dynamics of Y
We first study the dynamics of Y . From Assumption 1(c), Y learns much faster and we can treat the lower layer output (i.e., X⊤bT ) as constant. From Lemma 2, when the sequence is long, we know

5

given the next token xT +1 = n, X⊤bT becomes fixed. Therefore, the dynamics of Y becomes:

Y˙ = ηY fn(en − αn)⊤,

αn

=

exp(Y ⊤fn) 1⊤ exp(Y ⊤fn)

(7)

Here fn

:=

X ⊤ bT ∥X⊤bT ∥2

→ cn
∥cn ∥2

∈ RM .

Obviously ∥fn∥2 = 1 and fn ≥ 0.

Define

F = [f1, . . . , fK]. Since the vocabulary size M typically is a huge number, and different sequence

classes can cover diverse subset of vocabulary, we study the weak correlation case:

Assumption 2 (Weak where the eigenvalues

Correlations). of E ∈ RK×K

We assume M ≫

satisfies

|λ1|

<

1 K

K2 and and |λi

({Ef)n|}≥Kn=√16sa,ti∀sifie∈s
M

F ⊤F [K ].

=

I

+ E,

Assumption 2 means that fn share some weak correlations and it immediately leads to the fact that F ⊤F is invertible and F is column full-rank. Note that the critical point Y ∗ of Eqn. 7 should satisfy that for any given xT +1 = n, we need α = en. But such Y ∗ must contain infinity entries due to the property of the exponential function in α and we can not achieve Y ∗ in finite steps. To analyze Eqn. 7, we leverage a reparameterized version of the dynamics, by setting W = [w1, . . . , wK ]⊤ := F ⊤-
Y ∈ RK×M and compute gradient update on top of W instead of Y :
Lemma 3. Given xT +1 = n, the dynamics of W is (here αj = exp(wj)/1⊤ exp(wj)):

w˙ j = ηY I(j = n)(en − αn)

(8)

While we cannot run gradient update on W directly, it can be achieved by modifying the gradient of Y to be Y˙ = ηY (fn − F E′en)(en − αn)⊤. If λ1 is small, the modification is small as well.

Please check Appendix D for the proof. Lemma 3 shows that for every fixed n, only the corresponding row of W is updated, which makes the analysis much easier. We now can calculate the backpropagated gradient used in Eqn. 3.

Theorem 1. If Assumption 2 holds, the initial condition Y (0) = 0, M ≫ 100, ηY satisfies M −0.99 ≪ ηY < 1, and each sequence class appears uniformly during training, then after t ≫ K2 steps of batch size 1 update, given event xT +1[i] = n, the backpropagated gradient g[i] := Y (xT +1[i] − α[i]) takes the following form:





g[i] = γ ιnfn −

βnn′ fn′ 

(9)

n′ ̸=n

Here the coefficients ιn(t), βnn′ (t) and γ(t) are defined in Appendix with the following properties:

• (a) ξn(t) := γ(t) n̸=n′ βnn′ (t)fn⊤(t)fn′ (t) > 0 for any n ∈ [K] and any t;

•

(b) The speed control coefficient γ(t)

>

0 satisfies γ(t) =

O(ηY t/K) when t

≤

ln(M )·K ηY

and γ(t) = O

K ln(ηY t/K) ηY t

when t

≥

2(1+δ′) ln(M )·K ηY

with δ′

=

Θ(

ln ln M ln M

).

In the remark of Lemma 5 in Appendix, we analyze the original dynamics (Eqn. 7) with identical off-diagonal elements of E, and Theorem 1 still holds with a smaller effective learning rate.

5 The dynamics of Self-attention

Now we analyze the dynamics of self-attention logits Z, given the dynamics of upper layer Y . Lemma 4 (Self-attention dynamics). With Assumption 1(b) (i.e., T → +∞), Eqn. 4 becomes:

z˙m = ηZ γ

diag(fn)

βnn′ (fnfn⊤ − I)fn′ ,

n∈ψ −1 (m)

n′ ̸=n

(10)

Please check Appendix E for the proof. Now we study the dynamics of two types of contextual tokens (Sec. 3.2), namely distinct tokens (DT) which appear only for a single next token (i.e., |Ω(l)| = 1 with Ω(l) := {n : P(l|n) > 0}), and common tokens (CT) that appear across multiple next tokens (|Ω(l)| > 1). We show their fates are very different: over training, distinct tokens gain attention but common ones lose it.

6

Theorem 2 (Fates of contextual tokens). Let GCT be the set of common tokens (CT), and GDT (n) be the set of distinct tokens (DT) that belong to next token n. Then if Assumption 2 holds, under the
self-attention dynamics (Eqn. 10), we have:

• (a) for any distinct token l ∈ GDT (n), z˙ml > 0 where m = ψ(n);
• (b) if |GCT | = 1 and at least one next token n ∈ ψ−1(m) has at least one distinct token, then for the single common token l ∈ GCT , z˙ml < 0.

Now we know DTs grow and a single CT will shrink. For multiple CTs to shrink, the condition can be a bit involved (see Corollary 2 in Appendix E). The following theorem further shows that the growth rates of DTs critically depend on their initial conditions:
Theorem 3 (Growth of distinct tokens). For a next token n and its two distinct tokens l and l′, the dynamics of the relative gain rl/l′|n(t) := fn2l(t)/fn2l′ (t)−1 = c˜2l|n(t)/c˜2l′|n(t)−1 has the following analytic form (here the query token m = ψ(n) and is uniquely determined by distinct token l):

rl/l′|n(t) = rl/l′|n(0)e2(zml(t)−zml(0)) =: rl/l′|n(0)χl(t)

(11)

where χl(t) := e2(zml(t)−zml(0)) is the growth factor of distinct token l. If there exist a dominant

token l0 such that the initial condition satisfies rl0/l|n(0) > 0 for all its distinct token l ̸= l0, and all

of its common tokens l satisfy z˙ml < 0. Then both zml0 (t) and fnl0 (t) are monotonously increasing over t, and

e2fn2l0 (0)Bn(t) ≤ χl0 (t) ≤ e2Bn(t)

(12)

here Bn(t) := ηZ

t 0

ξn(t′)dt′.

Intuitively,

larger

Bn

gives

larger

rl0/l|n

and

sparser

attention

map.

Self-attention as an algorithm of token scanning. From Eqn. 11, we could see that self-attention

performs token scanning. To see that, consider the simplest initialization that z(0) = 0, which means

that rl0/l|n(0) =

P(l0 |m,n) P(l|m,n)

2
− 1.

Therefore, distinct token l with low conditional probability

P(l|m, n) will have rl0/l|n(0) ≫ 0, According Eqn. 11, this leads to quickly growing ratio rl0/l|n(t), which means that the corresponding component fnl will be quickly dwarfed by the dominating

component fnl0 . On the other hand, token with high conditional probability P(l|m, n) will have smaller rl0/l|n(0), and the ratio rl0/l|n(t) grows slower, costing longer time for l0 to dominate l.

Initial value as prior information. From the theorems, it is clear that the initial value rl/l′|n(0) :=

P(l|m,n) exp(zml(0)) P(l′|m,n) exp(zml′ (0))

2
− 1 critically determines the fate of the dynamics. Two tokens l and l′ with

comparable conditional probability P(l|m, n) and P(l′|m, n) can be suppressed in either way, de-

pending on their initial logits zml(0) and zml′ (0). In the empirical implementation, the initial value

of the logits are determined by the inner products of independently initialized high-dimensional

vectors, which fluctuate around zero.

The concept of “initial value as prior” can explain empirical design choices such as multi-head selfattention [1]. From this perspective, each head h has its own Zh and is initialized independently, which could enable more diverse token combination (e.g., a combination of 1st, 3rd, 5th tokens, rather than a combination of 1st, 2nd, 3rd tokens).

6 The Moment of Snapping: When Token Combination is fixed
Theorem 3 suggests two possible fates of the self-attention weights: if ξn(t) decays slowly (e.g., ξn(t) ≥ 1/t), then Bn(t) → +∞ and all contextual tokens except for the dominant one will drop (i.e., fnl → 0) following the ranking order of their conditional probability P(l|m, n). Eventually, winner-takes-all happens. Conversely, if ξn(t) drops so fast that Bn(t) grows very slowly, or even has an upper limit, then the self-attention patterns are “snapped” and token combination is learned and fixed.
The conclusion is not obvious, since ξn(t) depends on the decay rate of γ(t) and βnn′ (t), which in turns depends on the inner product fn⊤(t)fn′ (t), which is related to the logits of the common tokens that also decays over time.
Here we perform a qualitative estimation when there is only a single common token l and every next token shares a single token m (i.e., for any next token n, ψ(n) = m). We assume all normalization

7

600

Z = 0.5

500

400

l0(t)

300

200

100
0 0

Y = 0.5 Y = 1.0 Y = 2.0 Y = 5.0
100 200 300 t 400 500 600 700

Figure 3: Growth factor χl(t) (Theorem 3) over time with fixed ηZ = 0.5 and changing ηY . Each solid line is χl(t) and the dotted line with the same color corresponds to the transition time t0 for a given ηY .

terms in fn are approximately constant, denoted as ρ0, which means that fn⊤fn′ ≈ exp(2zml)/ρ20 and βnn′ ≈ En′ n′ ≈ fn⊤fn′ ≈ exp(2zml)/ρ20 as well, and 1 − fn⊤fn′ ≈ 1 due to the fact that common token components are small, and will continue to shrink during training.

Under these approximations, its dynamics (Eqn. 10) can be written as follows (here C0 := ρ40/K):

z˙ml = ηZ γ

fnl

βnn′ (fn2l − 1)fnl′ ≈ −C0−1ηZ γe4zml , ξn(t) ≈ C0−1γe4zml (13)

n∈ψ −1 (m)

n′ ̸=n

Surprisingly, we now find a phase transition by combining the rate change of γ(t) in Theorem 1:

Theorem 4 (Phase Transition in Training). If the dynamics of the single common token zml satisfies z˙ml = −C0−1ηZ γ(t)e4zml and ξn(t) = C0−1γ(t)e4zml , then we have:


 Bn(t) =


1 4

ln

1 4

ln

C0

+

2(M −1)2 KM2

ηY

ηZ t2

C0

+

2K(M −1)2 M2

ηZ ηY

ln2(M ηY t/K)

t

<

t′0

:=

K ln M ηY

t

≥

t0

:=

2(1+o(1))K ln M ηY

(14)

As a result, there exists a phase transition during training:

• Attention scanning. At the beginning of the training, γ(t) = O(ηY t/K) and Bn(t) ≈

1 4

ln

K −1 (ρ40

+

2ηY

ηZ

t2)

=

O(ln

t).

This

means

that

the

growth

factor

for

dominant

token

l0 is (sub-)linear: χl0 (t) ≥ e2fn2l0 (0)Bn(t) ≈ [K−1(ρ40 + 2ηY ηZ t2)]0.5fn2l0 (0), and the

attention on less co-occurred token drops gradually.

•

Attention snapping.

When t

≥

t0

:=

2(1 + δ′)K ln M/ηY

with δ′

=

Θ(

ln ln M ln M

),

γ(t)

=

O

K ln(ηY t/K) ηY t

and Bn(t) = O(ln ln t). Therefore, while Bn(t) still grows to infinite,

the growth factor χl0 (t) = O(ln t) grows at a much slower logarithmic rate.

See proof in Appendix F. This gives a few insights about the training process: (a) larger learning
rate ηY of the decoder Y leads to shorter phase transition time t0 ≈ 2K ln M/ηY , (b) scaling up both learning rate (ηY and ηZ ) leads to larger Bn(t) when t → +∞, and thus sparser attention maps, and (c) given fixed ηZ , small learning rate ηY leads to larger Bn(t) when t ≥ t0, and thus sparser attention map. Fig. 3 shows numerical simulation results of the growth rate χl(t). Here we set K = 10 and M = 1000, and we find smaller ηY given fixed ηZ indeed leads to later transition and larger Bn(t) (-
and χl(t)).

7 Discussion and Limitations
Positional encoding. While our main analysis does not touch positional encoding, it can be added easily following the relative encoding schemes that adds a linear bias when computing self attention (E.g., T5 [17], ALiBi [85], MusicTransformer [86]). More specifically, the added linear bias exp(zml + z0) = exp(zml) exp(z0) corresponds to a prior of the contextual token to be learned in the self-attention layer.

8

Common token Distinct token (seq1) Distinct token (seq2)

Common token Distinct token (seq1) Distinct token (seq2)

ItIIIIIetttttFreeeeeinrrrrr1a024680l

ItIIIIIetttttFreeeeeinrrrrr1a024680l

0

5

10

15

20

25

0

5

10

15

20

25

ItIIIIIetttttFreeeeeinrrrrr1a024680l

ItIIIIIetttttFreeeeeinrrrrr1a024680l

0

5

10 Toke1n5 #

20

25

0

5

10 Toke1n5 # 20

25

Figure 4: Visualization of cn (n = 1, 2) in the training dynamics of 1-layer Transformer using SGD on

Syn-Small setting. Top row for query token n = 1 and bottom row for query token n = 2. Left: SGD training

with ηY = ηZ = 1. Attention pattern cn becomes sparse and concentrated on highest P(l|n) (rightmost)

for each sequence class (Theorem 3). Right: SGD training with ηY = 10 and ηZ = 1. With larger ηY ,

convergence becomes faster but the final attention maps are less sparse (Sec. 6).

Residue connection. Residue connection can be added in the formulation, i.e., u¯T = LN(LN(u˜T )+uxT ), where u˜T is defined in Eqn. 1, and u¯T is used instead in the objective (Eqn. 2). In this case, the βnn′ in Theorem 1 now is approximately βnn′ ∼ fn⊤fn′ + I(ψ(n) = ψ(n′)), which is much larger for sequence classes n and n′ that share the same query token xT than otherwise.
In this case, Theorem 1 now gives g[i] = γ ιnfn − n̸=n′∈ψ−1(ψ(n)) βnn′ fn′ for xT +1[i] = n. Due to the additional constraint n′ ∈ ψ−1(ψ(n)) (i.e., n and n′ shares the same query token), we can define local distinct and common tokens to be within the sequence class subset ψ−1(m) and Theorem 2 now applies within each subset. Empirically this makes more sense, since the query token xT = m1 or m2 alone can already separate different subsets ψ−1(m1) and ψ−1(m2) and there should not be any interactions-
 across the subsets. Here we just present the most straightforward analysis and leave this extension for future work.
Possible future extension to multi-layer cases. For multilayer training, a lasting puzzle is to explain how the input tokens get combined together to form high-level concepts. The analysis above shows that the training leads to sparse attention even among relevant tokens, and demonstrates that there is a priority in token combinations for 1-layer attention based on their co-occurrence: even if there are 10 relevant contextual tokens to the query, the self-attention may only pick 1-2 tokens to comb-
ine first due to attention sparsity. This can be regarded as a starting point to study how tokens are composed hierarchically. In comparison, [28, 29, 30] show that attention attends to all relevant tokens, which may not suggest a hierarchical / multi-layer architecture.
8 Experiments
We conduct experiments on both synthetic and real-world dataset to verify our theoretical findings.
Syn-Small. Following Sec. 3.2, we construct K = 2 sequence classes with vocabulary size M = 30. The first 10 tokens (0-9) are shared between classes, while the second and third 10 tokens (10-19 and 20-29) are distinct for class 1 and class 2, respectively. The conditional probability P(l|n) for tokens 10-19 is increasing monotonously (the same for 20-29). The 1-layer Transformer is parameterized with Y and Z (Sec. 3.1), is trained with initial condition Y (0) = Z(0) = 0 and SGD (with momentum 0.9)-
 using a batchsize of 128 and sequence length T = 128 until convergence.
Fig. 4 shows the simulation results. The attention indeed becomes sparse during training, and increasing ηY with fixed ηZ leads to faster convergence but less sparse attention. Both are consistent with our theoretical predictions (Theorem 3 and Sec. 6). Interestingly, if we use Adam optimizer instead, self-attention with different learning rate ηY = ηZ picks different subsets of distinct tokens to focus on, showing tune-able inductive bias (Fig. 5). We leave analysis on Adam for future work.
Syn-Medium. To further verify our theoretical finding, we now scale up K to create Syn-Medium and compute how attention sparsity for distinct tokens (in terms of entropy) changes with the learning rates (Fig. 6). We can see indeed the entropy goes down (i.e., attention becomes sparser) with larger ηZ , and goes up (i.e., attention becomes less sparse) by fixing ηZ and increasing ηY passing the threshold ηY /ηZ ≈ 2, consistent with Sec. 6. Note that the threshold is due to the fact that our theory -
is built on Assumption 1(c), which requires ηY to be reasonably larger than ηZ.
9

Average Entropy of cn

Common token Distinct token (seq1)

Common token Distinct token (seq1)

Common token Distinct token (seq1)

ItIIIIIetttttFreeeeeinrrrrr1a024680l

ItIIIIIetttttFreeeeeinrrrrr1a024680l

ItIIIIIetttttFreeeeeinrrrrr1a024680l

0

5

10

15

0

5

10

15

0

5

10

15

Token #

Token #

Token #

Figure 5: Visualization of (part of) cn for sequence class n = 1 in the training dynamics using Adam [22] on

Syn-Small setting. From left to right: ηV = ηZ = 0.1, 0.5, 1. With different learning rate Adam seems to

steer self-attention towards different subset of distinct tokens, showing tune-able inductive bias.

#last/next tokens = 1/2

2.0

1.8

Z = 0.5

1.6

Z = 1.0 Z = 2.0

1.4

Z = 3.0

2 4 6 8 10 Y/ Z

#last/next tokens = 3/6
2.0 1.9 1.8 1.7
2 4 6 8 10 Y/ Z

#last/next tokens = 5/10

#last/next tokens = 10/20

2.05

2.0

2.00

1.9

1.95

1.90

1.8

1.85

1.7

1.80

2 4 6 8 10 Y/ Z

2 4 6 8 10 Y/ Z

Figure 6: Average entropy of cn (Eqn. 5) on distinct tokens versus learning rate ratio ηY /ηZ with more query tokens M /next tokens K. We report mean values over 10 seeds and standard derivation of the mean.

iter-0
0 5 10 15 20 25 30

iter-500
0 5 10 15 20 25 30

iter-1000
0 5 10 15 20 25 30

iter-1500
0 5 10 15 20 25 30

0

10

20

30

0

10

20

30

0

10

20

30

0

10

20

30

0

iter-0

0

iter-500

0

iter-1000

0

iter-1500

5

5

5

5

10

10

10

10

15

15

15

15

20

20

20

20

25

25

25

25

30

30

30

30

0

10

20

30

0

10

20

30

0

10

20

30

0

10

20

30

Figure 7: Attention patterns in the lowest self-attention layer for 1-layer (top) and 3-layer (bottom) Trans-

former trained on WikiText2 using SGD (learning rate is 5). Attention becomes sparse over training.

Real-world Dataset. We also test our finding on WikiText [25] using both 1-layer and multi-layer Transformers with regular parameterization that computes Y and Z with embedding U . In both cases, attentions of the first layer freeze (and become sparse) at some point (Fig. 7), even if the learning rate remains the same throughout training. More results are in Appendix G.
9 Conclusion and Future Work
In this work, we formally characterize SGD training dynamics of 1-layer Transformer, and find that the dynamics corresponds to a scan and snap procedure that progressively pays more attention to key tokens that are distinct and frequently co-occur with the query token in the training set. To our best knowledge, we are the first to analyze the attention dynamics and reveal its inductive bias on data input, and potentially open a new door to understand how Transformer works. Many future works follow-
. According to our theory, large dataset suppresses spurious tokens that are perceived as distinct in a small dataset but are actual common ones. Our finding may help suppress such tokens (and spurious correlations) with prior knowledge, without a large amount of data.
10

References
[1] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, and Illia Polosukhin. Attention is all you need. 2017.
[2] Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805, 2018.
[3] Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever, et al. Language models are unsupervised multitask learners. OpenAI blog, 1(8):9, 2019.
[4] Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.
[5] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, et al. An image is worth 16x16 words: Transformers for image recognition at scale. arXiv preprint arXiv:2010.11929, 2020.
[6] Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, and Baining Guo. Swin transformer: Hierarchical vision transformer using shifted windows. In Proceedings of the IEEE/CVF international conference on computer vision, pages 10012–10022, 2021.
[7] Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dolla´r, and Ross Girshick. Masked autoencoders are scalable vision learners. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 16000–16009, 2022.
[8] Ching-Feng Yeh, Jay Mahadeokar, Kaustubh Kalgaonkar, Yongqiang Wang, Duc Le, Mahaveer Jain, Kjell Schubert, Christian Fuegen, and Michael L Seltzer. Transformer-transducer: End-to-end speech recognition with self-attention. arXiv preprint arXiv:1910.12977, 2019.
[9] Alexei Baevski, Yuhao Zhou, Abdelrahman Mohamed, and Michael Auli. wav2vec 2.0: A framework for self-supervised learning of speech representations. Advances in neural information processing systems, 33:12449–12460, 2020.
[10] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, et al. Learning transferable visual models from natural language supervision. In International conference on machine learning, pages 8748–8763. PMLR, 2021.
[11] Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu, and Michael Auli. Data2vec: A general framework for self-supervised learning in speech, vision and language. In International Conference on Machine Learning, pages 1298–1312. PMLR, 2022.
[12] Aakanksha Chowdhery, Sharan Narang, Jacob Devlin, Maarten Bosma, Gaurav Mishra, Adam Roberts, Paul Barham, Hyung Won Chung, Charles Sutton, Sebastian Gehrmann, et al. Palm: Scaling language modeling with pathways. arXiv preprint arXiv:2204.02311, 2022.
[13] OpenAI. Gpt-4 technical report, 2023.
[14] Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, et al. Scaling instruction-finetuned language models. arXiv preprint arXiv:2210.11416, 2022.
[15] Nisan Stiennon, Long Ouyang, Jeffrey Wu, Daniel Ziegler, Ryan Lowe, Chelsea Voss, Alec Radford, Dario Amodei, and Paul F Christiano. Learning to summarize with human feedback. Advances in Neural Information Processing Systems, 33:3008–3021, 2020.
[16] Yi Tay, Mostafa Dehghani, Vinh Q Tran, Xavier Garcia, Jason Wei, Xuezhi Wang, Hyung Won Chung, Dara Bahri, Tal Schuster, Steven Zheng, et al. Ul2: Unifying language learning paradigms. In The Eleventh International Conference on Learning Representations, 2022.
11

[17] Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J Liu. Exploring the limits of transfer learning with a unified text-to-text transformer. The Journal of Machine Learning Research, 21(1):5485–5551, 2020.
[18] Chulhee Yun, Srinadh Bhojanapalli, Ankit Singh Rawat, Sashank J Reddi, and Sanjiv Kumar. Are transformers universal approximators of sequence-to-sequence functions? arXiv preprint arXiv:1912.10077, 2019.
[19] Colin Wei, Yining Chen, and Tengyu Ma. Statistically meaningful approximation: a case study on approximating turing machines with transformers. Advances in Neural Information Processing Systems, 35:12071–12083, 2022.
[20] Jorge Pe´rez, Pablo Barcelo´, and Javier Marinkovic. Attention is turing complete. The Journal of Machine Learning Research, 22(1):3463–3497, 2021.
[21] Haoyu Zhao, Abhishek Panigrahi, Rong Ge, and Sanjeev Arora. Do transformers parse while predicting the masked word? arXiv preprint arXiv:2303.08117, 2023.
[22] Diederik P Kingma and Jimmy Ba. Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980, 2014.
[23] Noam Shazeer and Mitchell Stern. Adafactor: Adaptive learning rates with sublinear memory cost. In International Conference on Machine Learning, pages 4596–4604. PMLR, 2018.
[24] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization. arXiv preprint arXiv:1711.05101, 2017.
[25] Stephen Merity, Caiming Xiong, James Bradbury, and Richard Socher. Pointer sentinel mixture models. arXiv preprint arXiv:1609.07843, 2016.
[26] Yuchen Li, Yuanzhi Li, and Andrej Risteski. How do transformers learn topic structure: Towards a mechanistic understanding. arXiv preprint arXiv:2303.04245, 2023.
[27] Samy Jelassi, Michael Sander, and Yuanzhi Li. Vision transformers provably learn spatial structure. Advances in Neural Information Processing Systems, 35:37822–37836, 2022.
[28] Hongkang Li, Meng Wang, Sijia Liu, and Pin-Yu Chen. A theoretical understanding of shallow vision transformers: Learning, generalization, and sample complexity. ICLR, 2023.
[29] Samet Oymak, Ankit Singh Rawat, Mahdi Soltanolkotabi, and Christos Thrampoulidis. On the role of attention in prompt-tuning. ICML, 2023.
[30] Davoud Ataee Tarzanagh, Yingcong Li, Xuechen Zhang, and Samet Oymak. Max-margin token selection in attention mechanism. arXiv preprint arXiv:2306.13596, 3(7):47, 2023.
[31] Satwik Bhattamishra, Kabir Ahuja, and Navin Goyal. On the ability and limitations of transformers to recognize formal languages. arXiv preprint arXiv:2009.11264, 2020.
[32] Satwik Bhattamishra, Arkil Patel, and Navin Goyal. On the computational power of transformers and its implications in sequence modeling. arXiv preprint arXiv:2006.09286, 2020.
[33] Mostafa Dehghani, Stephan Gouws, Oriol Vinyals, Jakob Uszkoreit, and Łukasz Kaiser. Universal transformers. arXiv preprint arXiv:1807.03819, 2018.
[34] Benjamin L Edelman, Surbhi Goel, Sham Kakade, and Cyril Zhang. Inductive biases and variable creation in self-attention mechanisms. In International Conference on Machine Learning, pages 5793–5831. PMLR, 2022.
[35] N Elhage, N Nanda, C Olsson, T Henighan, N Joseph, B Mann, A Askell, Y Bai, A Chen, T Conerly, et al. A mathematical framework for transformer circuits. Transformer Circuits Thread, 2021.
[36] Valerii Likhosherstov, Krzysztof Choromanski, and Adrian Weller. On the expressive power of self-attention matrices. arXiv preprint arXiv:2106.03764, 2021.
12

[37] Ekin Akyu¨rek, Dale Schuurmans, Jacob Andreas, Tengyu Ma, and Denny Zhou. What learning algorithm is in-context learning? investigations with linear models. arXiv preprint arXiv:2211.15661, 2022.
[38] Shunyu Yao, Binghui Peng, Christos Papadimitriou, and Karthik Narasimhan. Self-attention networks can process bounded hierarchical languages. arXiv preprint arXiv:2105.11115, 2021.
[39] Cem Anil, Yuhuai Wu, Anders Andreassen, Aitor Lewkowycz, Vedant Misra, Vinay Ramasesh, Ambrose Slone, Guy Gur-Ari, Ethan Dyer, and Behnam Neyshabur. Exploring length generalization in large language models. arXiv preprint arXiv:2207.04901, 2022.
[40] Boaz Barak, Benjamin Edelman, Surbhi Goel, Sham Kakade, Eran Malach, and Cyril Zhang. Hidden progress in deep learning: Sgd learns parities near the computational limit. Advances in Neural Information Processing Systems, 35:21750–21764, 2022.
[41] Qingxiu Dong, Lei Li, Damai Dai, Ce Zheng, Zhiyong Wu, Baobao Chang, Xu Sun, Jingjing Xu, and Zhifang Sui. A survey for in-context learning. arXiv preprint arXiv:2301.00234, 2022.
[42] Shivam Garg, Dimitris Tsipras, Percy S Liang, and Gregory Valiant. What can transformers learn in-context? a case study of simple function classes. Advances in Neural Information Processing Systems, 35:30583–30598, 2022.
[43] Johannes Von Oswald, Eyvind Niklasson, Ettore Randazzo, Joa˜o Sacramento, Alexander Mordvintsev, Andrey Zhmoginov, and Max Vladymyrov. Transformers learn in-context by gradient descent. arXiv preprint arXiv:2212.07677, 2022.
[44] Yu Bai, Fan Chen, Huan Wang, Caiming Xiong, and Song Mei. Transformers as statisticians: Provable in-context learning with in-context algorithm selection. arXiv preprint arXiv:2306.04637, 2023.
[45] Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, Nova DasSarma, Tom Henighan, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, et al. In-context learning and induction heads. arXiv preprint arXiv:2209.11895, 2022.
[46] Shuai Li, Zhao Song, Yu Xia, Tong Yu, and Tianyi Zhou. The closeness of in-context learning and weight shifting for softmax regression. arXiv preprint arXiv:2304.13276, 2023.
[47] Sanjeev Arora, Nadav Cohen, Noah Golowich, and Wei Hu. A convergence analysis of gradient descent for deep linear neural networks. arXiv preprint arXiv:1810.02281, 2018.
[48] Peter Bartlett, Dave Helmbold, and Philip Long. Gradient descent with identity initialization efficiently learns positive definite linear transformations by deep residual networks. In International conference on machine learning, pages 521–530. PMLR, 2018.
[49] Alon Brutzkus and Amir Globerson. Globally optimal gradient descent for a convnet with gaussian inputs. In International conference on machine learning, pages 605–614. PMLR, 2017.
[50] Yuandong Tian. An analytical formula of population gradient for two-layered relu network and its applications in convergence and critical point analysis. In International conference on machine learning, pages 3404–3413. PMLR, 2017.
[51] Mahdi Soltanolkotabi. Learning relus via gradient descent. Advances in neural information processing systems, 30, 2017.
[52] Surbhi Goel, Adam Klivans, and Raghu Meka. Learning one convolutional layer with overlapping patches. In International Conference on Machine Learning, pages 1783–1791. PMLR, 2018.
[53] Simon S Du, Jason D Lee, and Yuandong Tian. When is a convolutional filter easy to learn? arXiv preprint arXiv:1709.06129, 2017.
[54] Simon Du, Jason Lee, Yuandong Tian, Aarti Singh, and Barnabas Poczos. Gradient descent learns one-hidden-layer cnn: Don’t be afraid of spurious local minima. In International Conference on Machine Learning, pages 1339–1348. PMLR, 2018.
13

[55] Mo Zhou, Tianyi Liu, Yan Li, Dachao Lin, Enlu Zhou, and Tuo Zhao. Toward understanding the importance of noise in training neural networks. In International Conference on Machine Learning, pages 7594–7602. PMLR, 2019.
[56] Tianyi Liu, Minshuo Chen, Mo Zhou, Simon S Du, Enlu Zhou, and Tuo Zhao. Towards understanding the importance of shortcut connections in residual networks. Advances in neural information processing systems, 32, 2019.
[57] Weihang Xu and Simon S Du. Over-parameterization exponentially slows down gradient descent for learning a single neuron. arXiv preprint arXiv:2302.10034, 2023.
[58] Arthur Jacot, Franck Gabriel, and Cle´ment Hongler. Neural tangent kernel: Convergence and generalization in neural networks. Advances in neural information processing systems, 31, 2018.
[59] Lenaic Chizat, Edouard Oyallon, and Francis Bach. On lazy training in differentiable programming. Advances in neural information processing systems, 32, 2019.
[60] Simon S. Du, Xiyu Zhai, Barnabas Poczos, and Aarti Singh. Gradient descent provably optimizes over-parameterized neural networks, 2018.
[61] Simon Du, Jason Lee, Haochuan Li, Liwei Wang, and Xiyu Zhai. Gradient descent finds global minima of deep neural networks. In International conference on machine learning, pages 1675–1685. PMLR, 2019.
[62] Zeyuan Allen-Zhu, Yuanzhi Li, and Zhao Song. A convergence theory for deep learning via over-parameterization. In International Conference on Machine Learning, pages 242–252. PMLR, 2019.
[63] Sanjeev Arora, Simon Du, Wei Hu, Zhiyuan Li, and Ruosong Wang. Fine-grained analysis of optimization and generalization for overparameterized two-layer neural networks. In International Conference on Machine Learning, pages 322–332. PMLR, 2019.
[64] Samet Oymak and Mahdi Soltanolkotabi. Toward moderate overparameterization: Global convergence guarantees for training shallow neural networks. IEEE Journal on Selected Areas in Information Theory, 1(1):84–105, 2020.
[65] Difan Zou, Yuan Cao, Dongruo Zhou, and Quanquan Gu. Gradient descent optimizes overparameterized deep relu networks. Machine learning, 109:467–492, 2020.
[66] Yuanzhi Li and Yingyu Liang. Learning overparameterized neural networks via stochastic gradient descent on structured data. Advances in neural information processing systems, 31, 2018.
[67] Lenaic Chizat and Francis Bach. On the global convergence of gradient descent for overparameterized models using optimal transport. Advances in neural information processing systems, 31, 2018.
[68] Song Mei, Andrea Montanari, and Phan-Minh Nguyen. A mean field view of the landscape of two-layer neural networks. Proceedings of the National Academy of Sciences, 115(33):E7665– E7671, 2018.
[69] Phan-Minh Nguyen and Huy Tuan Pham. A rigorous framework for the mean field limit of multilayer neural networks. arXiv preprint arXiv:2001.11443, 2020.
[70] Cong Fang, Jason Lee, Pengkun Yang, and Tong Zhang. Modeling from features: a mean-field framework for over-parameterized deep neural networks. In Conference on learning theory, pages 1887–1936. PMLR, 2021.
[71] Yiping Lu, Chao Ma, Yulong Lu, Jianfeng Lu, and Lexing Ying. A mean field analysis of deep resnet and beyond: Towards provably optimization via overparameterization from depth. In International Conference on Machine Learning, pages 6426–6436. PMLR, 2020.
14

[72] Jiri Hron, Yasaman Bahri, Jascha Sohl-Dickstein, and Roman Novak. Infinite attention: Nngp and ntk for deep attention networks. In International Conference on Machine Learning, pages 4376–4386. PMLR, 2020.
[73] Greg Yang, Edward J Hu, Igor Babuschkin, Szymon Sidor, Xiaodong Liu, David Farhi, Nick Ryder, Jakub Pachocki, Weizhu Chen, and Jianfeng Gao. Tensor programs v: Tuning large neural networks via zero-shot hyperparameter transfer. arXiv preprint arXiv:2203.03466, 2022.
[74] Yuandong Tian. Understanding the role of nonlinearity in training dynamics of contrastive learning. arXiv preprint arXiv:2206.01342, 2022.
[75] Yuandong Tian. Understanding the role of nonlinearity in training dynamics of contrastive learning. ICLR, 2023.
[76] Jingzhao Zhang, Sai Praneeth Karimireddy, Andreas Veit, Seungyeon Kim, Sashank Reddi, Sanjiv Kumar, and Suvrit Sra. Why are adaptive methods good for attention models? Advances in Neural Information Processing Systems, 33:15383–15393, 2020.
[77] Charlie Snell, Ruiqi Zhong, Dan Klein, and Jacob Steinhardt. Approximating how single head attention learns. arXiv preprint arXiv:2103.07601, 2021.
[78] Nikita Kitaev, Łukasz Kaiser, and Anselm Levskaya. Reformer: The efficient transformer. ICLR, 2020.
[79] Sam Shleifer, Jason Weston, and Myle Ott. Normformer: Improved transformer pretraining with extra normalization. arXiv preprint arXiv:2110.09456, 2021.
[80] Biao Zhang and Rico Sennrich. Root mean square layer normalization. Advances in Neural Information Processing Systems, 32, 2019.
[81] Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E Hinton. Layer normalization. arXiv preprint arXiv:1607.06450, 2016.
[82] Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothe´e Lacroix, Baptiste Rozie`re, Naman Goyal, Eric Hambro, Faisal Azhar, et al. Llama: Open and efficient foundation language models. arXiv preprint arXiv:2302.13971, 2023.
[83] Susan Zhang, Stephen Roller, Naman Goyal, Mikel Artetxe, Moya Chen, Shuohui Chen, Christopher Dewan, Mona Diab, Xian Li, Xi Victoria Lin, et al. Opt: Open pre-trained transformer language models. arXiv preprint arXiv:2205.01068, 2022.
[84] Amirhossein Kazemnejad, Inkit Padhi, Karthikeyan Natesan Ramamurthy, Payel Das, and Siva Reddy. The impact of positional encoding on length generalization in transformers. arXiv preprint arXiv:2305.19466, 2023.
[85] Ofir Press, Noah A Smith, and Mike Lewis. Train short, test long: Attention with linear biases enables input length extrapolation. arXiv preprint arXiv:2108.12409, 2021.
[86] Cheng-Zhi Anna Huang, Ashish Vaswani, Jakob Uszkoreit, Noam Shazeer, Ian Simon, Curtis Hawthorne, Andrew M Dai, Matthew D Hoffman, Monica Dinculescu, and Douglas Eck. Music transformer. arXiv preprint arXiv:1809.04281, 2018.
[87] Zeyuan Allen-Zhu, Yuanzhi Li, and Yingyu Liang. Learning and generalization in overparameterized neural networks, going beyond two layers. Advances in neural information processing systems, 32, 2019.
15

Basic Notations

M

Vocabulary size

T

Sequence length

ek X ∈ RT −1×M
bT ∈ RT −1 xt ∈ RM xT −1 ∈ RM xT ∈ RM xt[i] ∈ RM
K

One-hot vector (1 at component k) Input sequence (of length T − 1) Vector of self-attention weights to predict the token at time T . contextual token (0 ≤ t ≤ T − 2) (one-hot) Last/query token (one-hot) Next token (class label) to be predicted (one-hot) i-th training sample of token at location t in the sequence Number of possible choices the next token could take.

α(t)

Softmax score of the output layer.

Learnable Parameters

Y ∈ RM×M Z ∈ RM×M

decoder layer parameters self-attention logits

zm

m-th row of Z (i.e., attention logits for a query/query token m)

Hyperparameters

ηY

Learning rate of the decoder layer

ηZ

Learning rate of the self-attention layer

Token Types and Distribution

ψ(n) ψ−1(m)
P(l|m, n)

Mapping from next token xT = n to its unique last/query token The subset of next tokens for last/query token xT −1 = m Conditional probability of contextual token l

given query token is m and next token to be predicted as n

GCT GDT(n)

Subset of common tokens Subset of distinct tokens for xT = n
Attention Score

c˜n ∈ RM cn ∈ RM fn ∈ RM g ∈ RM
F

Unnormalized attention score given next token xT = n ℓ1-normalized attention score given next token xT = n ℓ2-normalized attention score given next token xT = n Back-propagated gradient for fn Input matrix of the decoder layer. Each column of F is fn
Self-attention dynamics

rl′/l|n(t) Bn(t) γ(t)

Relative gain between distinct token l and l′ for next token n Growth factor bound of the relative gain Speed control coefficient

Table 1: Overall notation table of the main symbols in the paper.

A Notation Table
Tbl. 1 gives the notation of the main quantities in the paper.
B Detailed comparison with the concurrent works
B.1 Comparison with [28]
Setting, Assumptions and Conclusions. [28] analyzes the SGD convergence of 1-layer ViT model (1 layer self-attention + 2 layer FFN with ReLU, with the top layer of FFN fixed as random, token embedding fixed). Under a specific binary data model in which the data label is determined by counting the number of tokens that belong to positive/negative pattern, [28] gives a generalization bound when the number of hidden nodes in FFN is large, and at the same time, shows that the selfattention attends to -
relevant tokens and becomes sparse (if number of relevant tokens are small). In comparison, our work focuses on language models, assume broader data distribution (e.g., multiple classes, arbitrary conditional probability of token given class label) and incorporate LayerNorm
16

naturally. We propose more detailed quantitative properties, e.g., attention sparsity even among relevant tokens, two-stage evolution of attention scores, with a much simpler analysis.
Techniques. The techniques used in [28] are based on feature learning techniques applied to MLP (e.g., [87]). It identifies lucky neurons if the number of hidden neurons is large enough. In comparison, our framework and analysis is much simpler by leveraging that certain nonlinear continuous dynamics systems can be integrated out analytically to yield clean solutions (e.g., Theorem 3 (Eqn. 11) and Theorem 4 (Eqn. 128)), avoiding complicated bounds in [28]. This allows us to characterize the conver-
ging behavior of self-attentions when t → +∞.
B.2 Comparison with [29]
[29] focuses on 1-layer attention-based prompt-tuning, in which some parameters of the models are fixed (Wp, Wq). The analysis focuses on the initial (3x one-step) SGD trajectory, and constructs the dataset model containing specific context-relevant/context-irrelevant data, and the context-vector indicates the token relevance. As a result, [29] shows the attention becomes sparse (i.e., attending to context-relevant tokens) over time, which is consistent with ours, and shows that prompt-attention c-
an find the relevant tokens and achieve high accuracy while self-attention/linear-attention can’t.
In comparison, our work goes beyond the 2-classes model and further points out that the attention weight will be relevant to the conditional probability of the contextual tokens, which is more detailed than the sparse attention result in [29] that relies on the sparsity assumption of contextual tokens itself. We also focus on the pre-training stage (training from scratch, predicting the next token), characterize the entire trajectory under SGD for the self-attention layer, in particular its conver-
ging behavior.
B.3 Comparison with [30]
Compared to [29], [30] also analyzes the dynamics of the query-key matrix and the embedding of a single tunable token (often [CLS] token). It makes connection between the binary classification problem with 1-layer transformer and max-margin SVM formulation, when the tokens are linearly separable. The dynamics is characterized completely, which is nice. Note here is not an attention since its norm can be shown to go to infinity over training.
In comparison, our work does not learn the embedding of an individual token, but focuses on the dynamics of (all-pair) attention scores during training. We also work on multiple-class setup and do not explicitly assume the linear separability among classes.

C Proof of Section 3

Lemma 1 (Dynamics of 1-layer Transformer). The gradient dynamics of Eqn. 2 with batchsize 1 is:

Y˙ = ηY LN(X⊤bT )(xT +1 − α)⊤,

Z˙

=

ηZ xT (xT +1

− α)⊤Y

⊤

PX⊥⊤ bT ∥X⊤bT ∥2

X

⊤

diag(bT

)X

(3)

Here Pv⊥ := I − vv⊤/∥v∥22 projects a vector into v’s orthogonal complementary space, ηY and ηZ are the learning rates for the decoder layer Y and self-attention layer Z, α := [α1, . . . , αM ]⊤ ∈ RM and αm := exp(Y ⊤LN(X⊤bT ))/1⊤ exp(Y ⊤LN(X⊤bT )).

Proof. With the reparameterization of Y and Z, the loss function is the following:

J (Y, Z) = ED x⊤T +1Y ⊤LN(X⊤bT ) − log(1⊤ exp(Y ⊤LN(X⊤bT )))

(15)

and

αm

=

exp(e⊤mY ⊤LN(X⊤bT )) 1⊤ exp(Y ⊤LN(X⊤bT ))

(16)

Therefore, taking matrix differentials, we have:

dJ = (xT +1 − α)⊤d(Y ⊤LN(X⊤b)) = (xT +1 − α)⊤

dY

⊤

LN(X

⊤

b)

+

Y

⊤

PX⊥⊤b ∥X ⊤ b∥

X

⊤

db

(17)

17

since in general we have d(exp(a)/1⊤ exp(a)) = Lda with L := diag(b)−bb⊤, let a := XZ⊤xT and we have:

dJ

=

(xT +1 − α)⊤

dY

⊤

LN(X

⊤

b)

+

Y

⊤

PX⊥⊤b ∥X ⊤ b∥

X

⊤

Ld(X

Z

⊤

xT

)

(18)

=

(xT +1 − α)⊤

dY

⊤

LN(X

⊤

b)

+

Y

⊤

PX⊥⊤b ∥X ⊤ b∥

X

⊤

LX

dZ

⊤

xT

(19)

Finally notice that PX⊥⊤bX⊤L = PX⊥⊤bX⊤diag(b) due to the fact that Pv⊥v = 0 and the conclusion follows.

Lemma 2. Given the event {xT = m, xT +1 = n}, when T → +∞, we have

X⊤bT → cm,n,

X⊤diag(bT )X → diag(cm,n)

(6)

where cm,n = [c1|m,n, c2|m,n, . . . , cM|m,n]⊤ ∈ RM . Note that c⊤m,n1 = 1.

Proof. Let p = [exp(zm1), . . . , exp(zmM )]⊤ ∈ RM , pxt := exp(zmxt ), and pX := [exp(zmx1 ), . . . , exp(zmxT−1)]⊤, then for any T we have

T −1

T −1

X⊤bT =

btT xt =

t=1

t=1

pxt xt p t′ xt′

=

X ⊤ pX 1⊤ X ⊤ pX

(20)

Combining Lemma 18 and the definition of cl|m,n (Eqn. 5), we have that when T → +∞,

M
X⊤bT →
l=1

P(l|m, n) exp(zml)el l′ P(l′|m, n) exp(zml′ )

=

cm,n

(21)

Similarly:

X⊤diag(bT )X

=

X⊤diag(pX )X 1⊤ X ⊤ pX

(22)

Let T → +∞, then we also get

X⊤diag(bT )X → diag(cm,n)

(23)

D Proof of Section 4

D.1 Notation

For convenience, we introduce the following notations for this section:

• Denote E′ := (I + E)−1 − I.

• Apply orthogonal diagonalization on E and obtain E = U ⊤DU where U := [u1, ..., uK ] ∈ OK×K , D = diag(λ1, ..., λK ) and |λ1| ≥ ... ≥ |λK | ≥ 0.

• Denote F ′ := [F, F ◦] ∈ RM×M where F ◦ ∈ RM×(M−K) is some matrix such that rank(F ′) = M . This is possible since {fi}i∈[K] are linear-independent.

• Denote W ′ := (F ′)⊤Y = [F, F ◦]⊤Y = [W ⊤, Y ⊤F ◦]⊤ = [w1, . . . , wK , wK+1, . . . , wM ]⊤ ∈ RM×M .

•

Denote ζn

:=

M M −1

(en

−

1 M

1)

∈

RM

.

•

Denote q1

:= ζi⊤ζi

=1+

1 M −1

,

q0

:= ζj⊤ζi

=

−

M (M −1)2

where i, j

∈ [M ], i ̸= j.

• Denote h to be a continuous function that satisfies h(0) = 0 and h˙ = ηY · (M − 1 + exp(M h))−1. Details in Lemma 6.

18

•

Denote ω1 to be the constant defined in Lemma 8 that satisfies ω1

=

Θ(

ln ln(M ln(M )

)

).

• Denote Nn :=

N i=1

I[xT +1

=

n]

to

be

the

number

of

times

the

event

xT +1

=

n

happens.

• Denote N¯ := ⌈N/K⌉ to be the average value of Nn when P(n) ≡ 1/K and ∆ :=

⌈

N

ln(

1 δ

)⌉

to

be

the

radius

of

confidence

interval

centered

on

N¯

with

confidence

1

−

δ.

Here ∆/N¯ ≍ √K
N

ln(

1 δ

)

≪

1

since

N

≫

K2.

Details

in

Lemma

10

and

Remark

4.

• Denote W¯ ′(N ) := [w¯1(N ), ..., w¯K (N ), 0, ..., 0]⊤ ∈ RM×M , where w¯n(N ) := (M − 1)h(N¯ )ζn, ∀n ∈ [K].

D.2 Proof of Lemma 3

We assume ∪m∈[M]ψ−1(m) = [K] for convenience, but we claim that our proof can be easily generalized into the case where Ω ̸= [K] by reordering the subscript of the vectors. First, we prove the dynamics equation of the reparameterized dynamics of Y .
Lemma 3. Given xT +1 = n, the dynamics of W is (here αj = exp(wj)/1⊤ exp(wj)):

w˙ j = ηY I(j = n)(en − αn)

(8)

While we cannot run gradient update on W directly, it can be achieved by modifying the gradient of Y to be Y˙ = ηY (fn − F E′en)(en − αn)⊤. If λ1 is small, the modification is small as well.

Proof. We let F ′ := [F, F ◦] ∈ RM×M where rank(F ′) = M , this is possible since {fn}n∈[K] are linear-independent. And we further define W ′ := (F ′)⊤Y = [F, F ◦]⊤Y = [W ⊤, Y ⊤F ◦]⊤ = [w1, . . . , wK , wK+1, . . . , wM ]⊤ ∈ RM×M . When given xT +1 = n, the first term of the differential of loss function J is:

tr

dY

⊤

X ⊤ bT ∥X⊤bT ∥2

(xT +1

−

α)⊤

= tr(dY ⊤F ′(F ′)−1fn(xT +1 − α)⊤)

(24)

= tr(d(W ′)⊤en(xT +1 − α)⊤)

So W˙ ′ = en(xT +1 − α)⊤. This nice property will limit W to independently update its n-th row for any xT +1 = n ∈ [K], and the last M − K rows of W ′ are not updated. Similarly for α we have

α

=

exp(U WV u˜T ) 1⊤ exp(U WV u˜T )

=

exp(Y ⊤fn) 1⊤ exp(Y ⊤fn)

=

exp(Y ⊤F ′(F ′)−1fn) 1⊤ exp(Y ⊤F ′(F ′)−1fn)

=

exp(wn) 1⊤ exp(wn)

(25)

We get Eqn. 8 by combining the above results.

If we don’t run gradient update on W directly, we can run a modified gradient update on Y :

Y˙ = ηY (fn − F E′en)(en − αn)⊤

(26)

This will lead to (note that F does not change over time due to Assumption 1 (c)):

W˙ = F ⊤Y˙ = ηY F ⊤(fn − F E′en)(en − αn)⊤

(27)

= ηY F ⊤fn − F ⊤F (I − (I + E)−1)en (en − αn)⊤

(28)

= ηY F ⊤fn − F ⊤F en + en (en − αn)⊤

(29)

= ηY en(en − αn)⊤

(30)

By Lemma 17, we know that if λ1 is small, so does maxi∈[K] |λi(E′)| and thus the modification is small as well. In Lemma 5 Remark 1, we will show that the additional term −F E′en effectively
reduces the learning rate, if all off-diagonal elements of E are the same.

Lemma 3 shows that we can transfer the problem into solving K independent and similar non-linear

ODE. And we then show that such a problem can be well solved by following Lemma. Recall that

ζn

:=

M M −1

(en

−

1 M

1)

∈

RM ,

we

have:

19

Lemma 5. Assume Y is initialized to be a zero matrix, Z is fixed, and the learning rate of Y is ηY . Then if event xT +1 = n always holds at s step (s ≥ 1) we have

wn(s) = (M − 1)h∗(s)ζn

(31)



exp(M h∗(s − 1))



 

(M

−

1)

+

exp(M h∗(s

−

1))

,

j=n

αnj(s) =

1

(32)

   (M − 1) + exp(M h∗(s − 1))

,

j ̸= n

And

thus

en

− αn(s)

=

M

M −1 −1+exp(M h∗

(s−1))

ζn

.

Here

h∗(s)

satisfies:

h∗(s)

=

 h∗(s

−

1)

+

(M

−

1)

+

ηY exp(M h∗(s

−

1))

,

s≥1

(33)

0

, s=0

Proof. We prove this Lemma by induction.

Step 1: Note that Y is initialized to be a zero matrix, then wi(0) = 0, ∀i ∈ [K]. So we have

1

αn(1)

=

, M

∀j ∈ [K]

(34)

1

1 − , j = n

 w˙ nj(1) =

M 1

(35)

 

−

,

j ̸= n

M



1

wnj (1)

=

ηY (1 − M ),

 

−

ηY

,

j=n j ̸= n

(36)

M

It’s easy to check that these equations match that of Lemma 5.

Step s: Assume the equations of Lemma 5 hold for step s − 1. Then at the s step, we have



exp((M − 1)h∗(s − 1))

exp(M h∗(s − 1))



 

exp((M

−

1)h∗(s

−

1))

+

(M

−

1)

exp(−h∗(s

−

1))

=

exp(M h∗(s

−

1))

+

(M

−

, 1)

αnj (s)

=



exp(−h∗(s − 1))



 exp((M − 1)h∗(s − 1)) + (M − 1) exp(−h∗(s − 1))

1

=

exp(M h∗(s

−

1))

+

(M

−

, 1)



M −1

  

exp(M h∗(s

−

1))

+

(M

−

, 1)

w˙ nj(s) =

1

  

−

exp(M h∗(s

−

1))

+

(M

−

, 1)

j=n j ̸= n


(M 

−

1)

·

( exp(M h∗(s

ηY − 1))

+

(M

−

1)

+

h∗(s

−

1))

=(M − 1)h∗(s),

wnj (s)

=

 

−

( exp(M h∗(s

ηY − 1))

+

(M

−

1)

+

h∗(s

−

1))

= − h∗(s),

j=n j ̸= n

j=n (37)
j ̸= n
(38)
(39)

And the equations of Lemma 5 also hold for step s. So we finish the proof.

Remark 1. If we following the original dynamics (Eqn. 7), then it corresponds to the W dynamics as follows:

W˙ = ηY (en + (I + E)E′en)(en − αn)⊤ = ηY F ⊤fn(en − αn)⊤

(40)

When all off-diagonal elements of E are identical, i.e., fn⊤fn′ = ρ for n ̸= n′, then 0 ≤ ρ ≤ 1 and we have

w˙ n = ηY (en − αn)⊤

(41)

w˙ j = ηY ρ(en − αn)⊤, j ̸= n

(42)

20

So if different sequence classes are sampled uniformly, then by similar induction argument, we will

have





wn(N ) = (M − 1)h∗(N/K) ζn + ρ ζn′  = (1 − ρ)(M − 1)h∗(N/K)ζn (43)
n′ ̸=n

where the last equation is due to the fact that

n ζn

=

M M −1

n

en

−

1 M

1

=

M M −1

(1

−

1)

=

0.

This means that n′̸=n ζn′ = −ζn. Therefore, the effective learning rate is ηY′ := (1−ρ)ηY ≤ ηY .

D.3 Property of h∗(s) and its continuous counterpart.

Before further investigation on Y , we need to get some basic properties of h∗, in particular, how fast it grows over time. First, if we consider the continuous version of h∗, namely h, then we can directly obtain the equation that h needs to satisfy by integrating the corresponding differential equation.
Lemma 6. If we consider the continuous version of h∗(s), namely h, as the following ODE:

dh =

ηY

(44)

dt (M − 1) + exp(M h)

and assume h(0) = 0, then we have

exp(M h(t)) + (M − 1)M h(t) = M ηY t + 1

(45)

Then we will show that the h is actually almost the same as the original step function h∗. Lemma 7. For h and h∗ we have:

•

(a) For any s ∈ N, 0 such that for any s ≤

≤

h∗(s) − h(s)

≤

2ηY M

ln(M )/ηY , h(s + c) ≥

. Then there exists h∗(s) ≥ h(s).

some

constant

c

=

Θ(1)

• (b) h∗(s) − h(s) → 0 when s → +∞.

Proof. (a) First we show that h∗(s) ≥ h(s) for all s ∈ N, and the convex packet function of h∗ can almost control the upper bound of h. Define h◦ : R+ → R+ as follows:

h◦(t) := (t − ⌊t⌋) · [h∗(⌈t⌉) − h∗(⌊t⌋)] + h∗(⌊t⌋), ∀t ∈ R+

(46)

Here ⌈·⌉ and ⌊·⌋ mean ceil function and floor function, respectively. It’s clear that h◦ is a strictly monotonically increasing function, and for any s ∈ N, h◦(s) = h∗(s), while for any t ∈/ N, (t, h◦(t)) lies on the line connecting point (⌊t⌋, h∗(⌊t⌋)) and point (⌈t⌉, h∗(⌈t⌉)). To prevent ambi-
guity, we let h˙ ◦(t) to be the left limit of h◦, i.e., h˙ ◦(t) = limt′→t− h˙ ◦(t′).

We claim h(t) ≤ h◦(t), ∀t ∈ R+. We prove it by induction. First when t = 0, we have h◦(0) = h∗(0) = h(0) = 0. Then we assume h(t′) ≤ h◦(t′) hold for time t′ ≤ t ∈ N and prove that h(t′) ≤ h◦(t′) hold for t′ ∈ (t, t + 1]. If this is not true, then from the continuity of h◦ and h, we
know it must exist t′′ ∈ (t, t + 1] such that h(t′′) ≥ h◦(t′′) and h˙ (t′′) > h˙ ◦(t′′). The later condition results that ηY [M − 1 + exp(M h(t′′))]−1 > ηY [M − 1 + exp(M h∗(⌊t′′⌋))]−1. So

h(t′′) < h∗(⌊t′′⌋) = h◦(⌊t′′⌋) ≤ h◦(t′′)

(47)

This contradicts the hypothesis h(t′′) ≥ h◦(t′′). So h(t′) ≤ h◦(t′) hold for t′ ∈ (t, t + 1] and thus
for all t ∈ R+. Hence for any s ∈ N, we have h(s) ≤ h◦(s) = h∗(s). Actually, we can use the similar method to prove that h(s) < h∗(s) for any s ∈ N+.

Then we show h∗(s) − h(s) ≤ 2ηY /M by proving that for any s ∈ N+, h(s) must meet at least one of the following two conditions:

(i) h(s) ∈ [h∗(s − 1), h∗(s)].

(ii) h∗(s) − h(s) < h∗(s − 1) − h(s − 1).

If (i) doesn’t hold, then we have for any t ∈ [s − 1, s), h(t) ≤ h(s) < h∗(s − 1) = h◦(s − 1), which results that h˙ (t) > h˙ ◦(t) for all t ∈ [s − 1, s). Therefore, h∗(s) − h∗(s − 1) = h◦(s) − h◦(s − 1) < h(s) − h(s − 1) and thus h(s) meets condition (ii). It’s clear that h(0) and h(1) meet (i).

21

h / h* h / h*

Z = 0.05, M = 50

Z = 0.1, M = 1000

0.175

0.012

0.150

0.125

0.100

Y = 0.1 Y = 0.1

0.075

Y = 0.2 Y = 0.2

Y = 0.5

0.050

Y = 0.5

Y = 1.0

0.025

Y = 1.0

Y = 2.0

0.000

Y = 2.0

0 10 20 30 t40 50 60 70 80

0.010

0.008

Y = 0.2

Y = 0.2

0.006

Y = 0.5

Y = 0.5

0.004

Y = 1.0 Y = 1.0

0.002

Y = 2.0 Y = 2.0

Y = 4.0

0.000

Y = 4.0

0

10

20

30 t 40

50

60

70

Figure 8: Numerical simulation of h∗ and h with changing ηY . The stepped folded line represents h∗ and the smooth curve represents h. The gap between h∗ and h is bounded and goes to zero when time grows.

These two conditions mean that the gap between h∗ and h will not grow if h(s) is smaller than h∗(s − 1). Then for all h(s) that meet (i), we have h∗(s) − h(s) ≤ h∗(s) − h∗(s − 1) ≤ h∗(1) − h∗(0) = ηY /M from Eqn. 33. And for any s ≥ 2, every time h(s) transfer from (i) to (ii) exactly at s, which means that h(s − 1) meets (i) and thus no smaller than h∗(s − 2), we get h∗(s) − h(s) ≤ h∗(s) − h(s − 1) ≤ h∗(s) − h∗(s − 2) ≤ h∗(2) − h∗(0) ≤ 2ηY /M .

Finally

from

Eqn.

53

in

Lemma

9,

when

s

≤

ln M ηY

,

we

get

h(s)

=

Θ(ηY t/M )

and

thus

there

exist

some constant c = Θ(1) such that h(s + c) ≥ h(s) + 2ηY /M ≥ h∗(s) ≥ h(s).

(b) Assume that there exist ϵ ∈ (0, 2ηY /M ] such that h∗(s) − h(s) ≥ ϵ for all s ∈ N. Since h is

unbounded, then h˙ (t) → 0 when t → ∞ from Eqn. 33, so there exist some s′0 ∈ N such that when

s

≥

s′0, h(s+1)−h(s)

≤

ϵ+ln(1/2)/M .

Also,

from Lemma 9 we know that exists s′0′

=

(3+δ) ln(M ) ηY

where δ > 0, δ = Θ(1) such that when s ≥ s′0′, exp(M h(s)) > 2(M − 1). Since s → ∞, we just

consider

the

case

that

s

=

⌊t⌋

≥

s0

:=

max(s′0, s′0′).

Then

denote

∆1

:=

2(M −1) exp(M h(s))

<

1,

we

have:

h˙ ◦(t)

−

h˙ (t)

=

M

−

1

+

ηY exp(M h∗(s))

−

M

−

1

ηY + exp(M h(t))

≤

ηY

−

ηY

M − 1 + exp(M (h(s) + ϵ)) M − 1 + exp(M h(s + 1))

= − ηY exp(M h(s)) · [exp(M ϵ) − exp(M h(s + 1) − M h(s))] [M − 1 + exp(M (h(s) + ϵ))] · [M − 1 + exp(M h(s + 1))]

≤

− 2[M

−

1

+

ηY exp(M h(s)) · exp(M (h(s) + ϵ))] · [M

exp(M ϵ)

−

1

+

1 2

exp(M (h(s)

+

ϵ))]

(48)

≤

−

(1

+

∆1)2

ηY exp(M ϵ) exp(M h(s))

exp(4ηY

)

,

(s ≥ s0 = max(s′0, s′0′))

exp(M ϵ) 1

C

≤−

· =: −

4 exp(4ηY )M t

t

Here C

=

exp(M ϵ) 4 exp(4ηY )M

> 0 and for the last inequality, we use the fact that t ≥

s′0

>

3 ln M ηY

and thus

h(s)

≤

h(t)

=

O(

ln(M ηY M

t) )

from

Lemma

9.

So

we

get

[h◦(t) − h(t)] − [h◦(s0) − h(s0)] ≤ −

∞ Cdt → −∞
t′=s0 t

(49)

This contradicts h◦(t) − h(t) ≥ 0! So the original assumption doesn’t hold, which means that h∗(s) − h(s) → 0 when s → ∞.

Remark 2. By some qualitative estimation, we claim that if ηY = O(1), then there exists some

constant c

=

O(ln M ) such that h(s)

≤

h∗(s)

≤

h(s + c) for all s

>

s1

:=

2 ln(1+ω1) ηY

where

ω1 = Θ(ln ln M/ ln M ) is defined in Lemma 8. Denote δh(t) := h◦(t) − h(t), when δh(t) ≪ h(t),

22

we have δ˙h(t) = h˙ ◦(t) − h˙ (t) ≍ −ηY M · δh(t) · exp(−M h(t)) ≍ −δh(t)/t by computing the second-order derivative of δh, and thus h◦(t)−h(t) ≍ 2ηY s0/(M t) = O(ln M/(M t)). Combining this with the fact that h(t) = Θ(ln(M ηY t)/M ) when t > s1, we prove our claim. The results of Lemma 7 and Remark 2 are also confirmed by the numerical simulation results as Fig. 8.

So from Lemma 7 and Remark 2, we just assume ηY < 1 and replace h∗ with h in the latter parts for convenience. Then we further investigate the properties of Eqn. 45.

Lemma 8.

There exists ωi, 0

<

ωi

≪

1, i

=

2, 3, such that for h

∈

J1

:=

[1
M 2−ω0

,

(1+ω1) ln(M M

)

],

we have exp(M h(t)) ≤ (M − 1)M h(t). And for h ∈/ J1, we have exp(M h(t)) > (M − 1)M h(t).

Here

ω1

=

Θ(

ln ln(M ln(M )

)

),

and

if

M

≫

100,

we

have

ω0

≲

(

M

1
0.99

ln

M

)

≪

0.01.

Proof. It’s obvious that exp(M h(t)) − (M − 1)M h(t) has two zero points in R+. Let h(t) = M −(2−ω0), we get

1

M

1

1

ω0

=

ln M

(ln( M

−

) 1

+

M 1−ω0

)

=

O( M 0.99

) ln(M )

(50)

For

another zero

point,

let

ω1

∈

(0, 1)

to be

some

constant

such

that h(t)

=

(1+ω1) ln(M ) M

satisfies

exp(M h) = (M − 1)M h , then we get

M ω1

=

(1

+

(M − ω1) ln(M ) M

1)

=

c′

·

(M − ln(M )
M

1)

ln ln(M )

(51)

⇒ ω1 = Θ( ln(M ) )

where c′ ∈ (0.5, 2) is some universal constant.

Remark 3. From Lemma 8, if we assume M ≫ 100, then ω0 ≪ 0.01, and if we assume ηY ≫

1 M 1−ω0

>

1 M 0.99

,

then

h(1)

≳

ηY M

≫

1 M 2−ω0

and function exp(M h(t)) − (M − 1)M h(t) has only

one zero point

(1+ω1) ln M M

in [1, ∞).

For convenience, we just assume M

≫ 100 and 1 > ηY

≫

1 M 0.99

and

thus

focus

on

the

unique

zero

point

(1+ω1) ln M M

of

h

in

the

latter

parts.

We

can then

show

the properties

of

speed control coefficient

γ(t)

:=

(M −1)2h(t/K) (M −1)+exp(M h(t/K))

as

below.

Lemma 9. We have two stage for h and γ:

•

When t

≤

K

ln(M ηY

)

,

we have exp(M h(t/K))

≤

min(M

− 1, (M

− 1)M h(t/K)),

h

=

O(ηY t/(M K)) and γ(t) = O(ηY t/K).

• When t

≥

2(1+ω1)K ln(M ) ηY

where ω1

=

Θ(

ln ln M ln M

)

is

defined

in

Lemma

8,

we

have

exp(M h(t/K))

≥

max(M

− 1, (M

− 1)M h(t/K)),

h

=

O(

1 M

ln(M ηY

t/K ))

and

γ(t)

=

O(

K

ln(M ηY ηY t

t/K )

).

Proof. For convenience, we just let K = 1. And the proof for K ̸= 1 is similar. We denote

∆1(h) :=

exp(M h) M −1

and ∆2(h)

:=

exp(M h) (M −1)M h

.

Step

1:

t

≤

ln(M ηY

)

.

If

h

≥

ln(M −1) M

,

from

Eqn.

45

we

have:

M − 2 + (M − 1) ln(M − 1) ln(M )

t≥

>

(52)

M ηY

ηY

So

when

t

≤

ln(M ) ηY

we

have

h

<

ln(M −1) M

,

and

thus

exp(M h(t))

≤

min(M

−

1, (M

−

1)M h(t)),

i.e., ∆1, ∆2 ≤ 1. Then from Eqn. 45 we get

h=

M ηY t + 1

=O

(1 + ∆2)M (M − 1)

1 M ηY t

(53)

γ

=

(M − 1)h 1 + ∆1

=

M ηY t + 1 (1 + ∆1)(1 + ∆2)M

= O(ηY t)

(54)

23

Step 2:

t>

2(1+ω1) ln(M ) ηY

where

ω1

=

Θ(

ln ln(M ln(M )

)

).

So now h >

ln(M −1) M

and thus ∆1

>

1

from Eqn. 52. Then if exp(M h) ≤ M (M − 1)h, i.e. ∆2 ≤ 1, from Lemma 8 we have h =

M ηY t+1 (1+∆2)M (M −1)

≤

(1+ω1) ln(M M

)

.

Therefore,

t

≤

1 ηY

((1 +

ω1)(1 +

M− ∆2) M

1

ln M

−

1 )
M

<

2(1

+ ω1) ln(M ) . ηY

(55)

Contradiction!

So

when

t

≥

2(1+ω1 ) ηY

ln(M

)

,

we

have

∆2

>

1.

Then

from

Eqn.

45

we

get:

1 h = ln
M

M ηY t + 1 1 + ∆−2 1

=O

1 M ln(M ηY t)

(56)

γ

=

M −1 M

(M

−

1)

ln(

M ηY t+1 1+∆− 2 1

)

(1

+

∆−1 1)(

M ηY t+1 1+∆− 2 1

)

=

O

ln(M ηY t) ηY t

(57)

D.4 The dynamics under multiple uniformly sampled sequence classes

We then generalize our analysis of W to the case where xT +1 can be any value in [K] rather than fixing xT +1 = n with the key observation that the row vectors of W ′ can be independently updated.

Before formalizing this result, we first conduct the concentration inequality of the sampling number

for each next-token case. Let Nn :=

N i=1

I[xT

+1

=

n]

to

be

the

number

of

times the

event

xT +1 = n happens, then we have:

Lemma 10. For δ ∈ (0, 1), with probability at least 1 − δ we have

N2

2

|Nn − ⌈N P(n)⌉| ≤

ln( ) + 1 < N ln( )

2δ

δ

(58)

Proof. From Hoeffding’s inequality, we have

P

Nn N

−

P(n)

>t

≤ 2 exp(−2N t2)

(59)

Let t =

1 2N

ln(

2 δ

)

and

we

can

get

the

results

by

direct

calculation.

Remark 4.

From Lem√ma 10, if we consider the uniform sampling case where P(n)

≡

1 K

,

then

N P(n) = N/K ≫ N . So Nn are all concentrated around N P(n). Recall the definition of

N¯ = ⌈N/K⌉ and ∆ = ⌈

N

ln(

1 δ

)⌉,

with

probability

at

least

1

−

δ

we

have:

|Nn − N¯ | ≲ ∆ ≪ N¯

(60)

We then further investigate the concentration of h(Nn): Lemma 11. For δ ∈ (0, 1), with probability at least 1 − δ we have

|h(Nn)

−

h(N¯ )|

≲

h(N¯ )

·

∆ N¯

(61)

1

1

| M

−

1

+

exp(M h(Nn))

−

M

−

1

+

exp(M h(N¯ )) |

≲M

−

1

+

1 exp(M h(N¯ ))

·

σ′

(62)

where σ′

>

0 is some constant such that σ′

≤

1 3

ηY

∆

≪

ln(M ).

And if N

≥

2K(1+ω1) ln M ηY

where

ω1

is

defined

in

Lemma

8,

then

σ′

≲

∆ N¯

≪

1.

24

Proof. First, we note that h has a decreasing gradient, so h(x) ≥ h˙ (x)×x and h(x1 +x2)−h(x1) ≤ h˙ (x1) × x2 for any x1, x2 ≥ 0. So with probability at least 1 − δ, we have:

|h(Nn)

−

h(N¯ )|

≤

h(N¯ )

−

h(N¯

−

∆)

≤

h˙ (N¯

−

∆)

×

∆

≤

h(N¯ )∆ N¯ − ∆

≍

h(N¯ )

·

∆ N¯

(63)

For the second inequality, without loss of generality, we let Nn > N¯ . Denote g(s) := (M − 1 + exp(M h(s)))−1 and note that:

dg

M exp(M h(s))

dh

ds = (M − 1 + exp(M h(s)))2 · ds

=

M

−

1+

1 exp(M h(s))

·

ηY M exp(M h(s)) (M − 1 + exp(M h(s)))2

(64)

≤

1

· M · ηY

M − 1 + exp(M h(s)) (M − 1) 4

the last equality holds only when h(s)

=

ln(M −1) M

.

So from |g(N¯ + ∆) − g(Nn)| ≤

maxs∈[Nn,Nn+∆] g˙ (s) · ∆, we get:

1

1

1

1

| M

−

1

+

exp(M h(N¯

+

∆))

−

M

−

1

+

exp(M h(N¯ )) |

≤

M

−

1

+

exp(M h(N¯ ))

·

3 ηY

∆

(65)

If N¯

<

2(1+ω1) ln(M ) ηY

+ ∆ with ω1

=

Θ(

ln ln M ln M

)

defined in Lemma 8,

we have σ′

≤

ηY ∆/3

≪

ηY

N¯

≲

ln(M ).

If

N¯

≥

2(1+ω1) ln(M ) ηY

+

∆,

we

utilize

the

Eqn.45

and

obtain:

1

1

| M

−

1

+

exp(M

h(N¯

+

∆))

−

M

−

1

+

exp(M h(N¯ )) |

1

| exp(M h(N¯ + ∆)) − exp(M h(N¯ ))|

= M − 1 + exp(M h(N¯ )) · M − 1 + exp(M h(N¯ + ∆))

≤ M

−

1

+

1 exp(M h(N¯ ))

·

M

−

1

+

M ηY ∆ exp(M h(N¯

+

, ∆))

(Eqn. 45)

≤ M

−

1

+

1 exp(M h(N¯ ))

·

M

+

1 2

M ηY ∆ · M ηY (N¯

+

, ∆)

1

∆

≲ M − 1 + exp(M h(N¯ )) · N¯

(Lemma

9, Nn

≥

2(1

+

ω1) ln(M ) ηY

+

∆)

So σ′ ≤ ∆/N¯ . When Nn < N¯ , with probability at least 1 − δ we have Nn ≳ N¯ − ∆, and similar inequalities also hold for such cases, so we finish the proof.

Recall that ζn

∈

RM

is defined as ζn

=

M M −1

(en

−

1 M

1).

And we have q1

:=

ζi⊤ζi

=

1+

1 M −1

,

q0

:=

ζj⊤ζi

=

−

M (M −1)2

for all i, j

∈

[M ] where i

̸=

j.

For convenience, we denote

W¯ ′(N ) := [w¯1(N ), ..., w¯K (N ), 0, ..., 0]⊤ ∈ RM×M , where w¯n(N ) := (M − 1)h(⌈N/K⌉)ζn =

(M − 1)h(N¯ )ζn. So using these concentration inequalities, we get:

Lemma 12. Assume the assumptions in Lemma 5 hold but we uniformly sample the training data. Then if the total number of epochs N satisfies N ≫ K2, we have Y = (F ′)−⊤(I + Θ′)W¯ ′(N ) where Θ′ := diag(θ1, . . . , θK , 0, . . . , 0) ∈ RM×M and with probability at least 1 − δ we have

|θi|

≲

√K N

ln(

K δ

),

∀i

∈

[K ].

Proof. From Lemma 5 and the first inequality of Lemma 11, we know that

wn(N ) = (M − 1)h(Nn)ζn

(66)

= (M − 1)h(N¯ )ζn + (M − 1)(h(Nn) − h(N¯ ))ζn

(67)

= (1 + θn) · (M − 1)h(N¯ )ζn

(68)

= (1 + θn)w¯n(N )

(69)

25

where

for

any

δ

∈

(0, 1),

with

probability

at

least

1−δ

we

have

|θi|

≲

√K N

ln(

K δ

),

∀n

∈

[K ].

Therefore, W ′(N ) = [w1(N ), . . . , wK (N ), 0, . . . , 0]⊤ = (I + Θ′)W¯ ′(N ), then from W ′ =

(F ′)⊤Y , we finish the proof.

Then, we can give out the exact solution of Y by pointing out the properties of F ◦ and F ′ from the observation that each row of Y should be the linear combination of vectors in {fn⊤}n∈[K]:

Theorem 5. If Assumption 2 holds and Y (0) = 0. Furthermore, we assume the training data is uniformly sampled and the total number of epochs N satisfies N ≫ K2 . Then the solution of

Eqn. 26 will be:

Y = (F †)⊤(I + Θ)W¯ (N ) = F (I − E′)(I + Θ)W¯ (N )

(70)

Here Θ := diag(θ1, . . . , θK ) and for any δ ∈ (0, 1), with probability at least 1 − δ we have |θi| ≲

√K N

ln(

K δ

),

∀i

∈

[K ].

Proof. Let qi, i ∈ [M ] be the i-th row vector of (F ′)−1, then we have qj⊤fi = I[i = j]. From Lemma 12 we get Y = (F ′)−⊤(I + Θ′)W¯ ′(N ). And from Eqn. 26, we know all the columns of Y are the linear combination of fn, n ∈ [K]. Note that W¯ (N ) has only top K rows to be non-zero, so we need to constrain that all the top K columns of (F ′)−⊤, i.e., qi, i ∈ [K], to be the linear
combination of fn, n ∈ [K], which means that q1, . . . , qK must be the basis of Ξ := span(fj; j ∈ [K]) and thus qK+1, . . . , qM are the basis of Ξ′ := span(fj; K ≤ j ≤ M ). Therefore, we get
Ξ ⊥ Ξ′, and thus [q1, . . . , qK ] can only be (F †)⊤. So the proof is done.

Actually, we see that the result of Theorem 5 matches the modified gradient update on Y (Eqn. 26).

And we show that using such reparameterization dynamics, we can still approach the critical point

of

Eqn.

7

in

the

rate

of

O(

1 N

):

Corollary 1. Assume assumptions in Theorem 5 hold, M ≫ 100 and ηY satisfies M −0.99 ≪ ηY < 1. Then ∀n ∈ [K], we have

M −1

(xT +1 − αn) = (M − 1) + exp(M h(Nn)) ζn M −1

(71)

= (M − 1) + exp(M h(N¯ )) · (1 + σ) · ζn

where σ > −1 and for any δ ∈ (0, 1), with probability at least 1 − δ we have |σ| ≲ ηY

N

ln(

1 δ

),

and when N ≫ K(

N

ln(

1 δ

)

+

2(1+ω1) ln M ηY

)

with

ω1

defined in Lemma 8, |σ|

≲

√K N

ln(

1 δ

).

Further, to let ∥xT +1 − αn∥2 ≤ ϵ with probability at least 1 − δ for any n ∈ [K] and ϵ ≪ 1, we

need

the

total

number

of

training

epochs

to

be

at

most

O(

K ϵηY

log(

M ϵ

)).

Proof. Note that xT +1 = en, then we just need to combine Lemma 5 and the second inequality of Lemma 11, to get Eqn. 71. Denote Sn to be the number of training epochs that are needed to let ∥xT +1 − αn∥2 ≍ ϵ, then we have

1M

h(Sn) ≍ M ln( ϵ )

(72)

But

note

that

h(t +

1)

− h(t)

≥

ηY M −1+exp(M h(Sn))

≍

ηY ϵ M −1

,

∀t

∈

[0, S

−

1]

from

Eqn.

71,

we

have

Sn

≲

h(Sn) ηY ϵ/(M − 1)

≍

1 ϵηY

M ln( )
ϵ

(73)

Note that ϵ ≪ 1 and we have N ≫ K2, then we have S =

n Sn

≲

K ϵηY

ln(

M ϵ

).

26

D.5 Proof of Theorem 1
Finally, we turn to prove Theorem 1. Obviously, all the diagonal elements of E are zero and all the off-diagonal elements of E are non-negative since cl|m,n ≥ 0. Note that E is a real symmetric matrix, then it can be orthogonal diagonalization by E = U ⊤DU where U := [u1, ..., uK ] ∈ OK×K , D = diag(λ1, ..., λK ) and |λ1| ≥ ... ≥ |λK | ≥ 0. Then we can get the following properties of E and E′:
Lemma 13. maxi,j∈[K](|Eij |) ≤ |λ1|.

Proof. We have:

|Eij| = u⊤i Duj ≤ |λ1| · ∥ui∥2∥uj∥2, ∀i, j ∈ [K]

(74)

Lemma 14. If E ∈ RK satisfies |λ1| ≤ λ < 1, then (I + E) is invertible and (I + E)−1 = I − E′

,where

E′

satisfies

E′

=

U ⊤D′U

and

D′

=

diag(λ′1, ..., λ′K )

and

λ′i

=

λi 1+λi

,

∀i

∈

[K ].

Proof. Since U is orthonormal and |λi| ≤ λ < 1, we have En = U ⊤DnU → O. Then from the property of the Neumann series, we get I + E is invertible and

∞

(I + E)−1 = I + (−1)nEn

(75)

n=1

∞

= I + U ⊤( (−Dn)U

(76)

n=1

= I − U ⊤D′U =: I − E′

(77)

Here we define D′ = diag(λ′1, ..., λ′K ) and use the fact that

∞ n=1

(−λi)n

=

−

λi 1+λi

Lemma 15.

If |λ1| ≤ λ < 1, then maxi∈[K] |λi(E′)| ≤

1 1−λ

|λ1|

≤

λ 1−λ

.

Proof. We have

max |λi(E′)|
i∈[K ]

=

max |
i∈[K ]

−

λi | 1 + λi

≤

1

maxi∈[K] |λi| − maxi∈[K] |λi|

≤

1 1 − λ |λ1|

(78)

Lemma 16. Assume that Assumption 2 holds, then all the diagonal elements of E′ are nonpositive,i.e., Ei′i ≤ 0, ∀i ∈ [K]. Further, if there exist any k ̸= i ∈ [K] such that Eki > 0, then Ei′i < 0.

Proof. Note that Eii =

K k=1

λk

u2ik

=

0

(here

uik

is

the

k-th

component

of

eigenvector

ui)

and

|λk| < 1, we have

Ei′i

=

K k=1

1

λk + λk

u2ik

=

K
λk u2ik
k=1

−

K k=1

1

λ2k + λk

u2ik

=

K
−
k=1

1

λ2k + λk

u2ik

≤

0

(79)

When Ei′i = 0, then λ := (λ1, . . . , λK ) must don’t have overlapping entries with respect to ui,

which results that Eij :=

K k=1

λk uik uj k

=

0

holds

for

any

j

∈

[K ].

So

we

prove

the

results.

Lemma 17. If λ1 < 1, then |En′ n′ − Enn′ | ≤ |λ1|2(1 − |λ1|)−1. 27

Proof. From Lemma 14 we have:

|En′ n′

−

Enn′ |

=

K
| λkunkun′k
k=1

−

K k=1

1

λk + λk

unk un′ k |

=

|

K k=1

1

λ2k + λk

unk un′ k |

≤

|λ1|2 1 − |λ1|

K
|unk ||un′ k |
k=1

(80)

≤ |λ1|2 1 − |λ1|

K

K

( |unk|2)( |un′k|2)

k=1

k=1

=

|λ1|2 1 − |λ1|

Finally we can prove our main theorem in Sec. 4.

Theorem 1. If Assumption 2 holds, the initial condition Y (0) = 0, M ≫ 100, ηY satisfies M −0.99 ≪ ηY < 1, and each sequence class appears uniformly during training, then after t ≫ K2 steps of batch size 1 update, given event xT +1[i] = n, the backpropagated gradient g[i] := Y (xT +1[i] − α[i]) takes the following form:





g[i] = γ ιnfn −

βnn′ fn′ 

(9)

n′ ̸=n

Here the coefficients ιn(t), βnn′ (t) and γ(t) are defined in Appendix with the following properties:

• (a) ξn(t) := γ(t) n̸=n′ βnn′ (t)fn⊤(t)fn′ (t) > 0 for any n ∈ [K] and any t;

•

(b) The speed control coefficient γ(t)

>

0 satisfies γ(t) =

O(ηY t/K) when t

≤

ln(M )·K ηY

and γ(t) = O

K ln(ηY t/K) ηY t

when t

≥

2(1+δ′) ln(M )·K ηY

with δ′

=

Θ(

ln ln M ln M

).

Proof.

Note that if Assumption 2 holds, then F †

=

(I

− E′)F ⊤.

Recall q1

:=

1+

1 M −1

≈

1 and

q0

:=

−

M (M −1)2

≈

0.

Then given xT +1[i]

=

n, we get:

g[i] := Y (xT +1[i] − α[i])

(81)

= F (I − E′)(I + Θ)W¯ (N )(xT +1[i] − α[i]), (Theorem 5)

(82)

= (1 + σ)γ ∗ F (I − E′)(I + Θ)[q0, . . . , q1, . . . , q0]⊤, (Lemma 5, Corollary 1)(83)





= γ ιnfn −

βnn′ fn′ 

n′ ̸=n,n′ ∈[K ]

(84)

where

(M − 1)2h(⌈t/K⌉)

γ(t) :=

>0

(85)

(M − 1) + exp(M h(⌈t/K⌉))

ιn := (1 + σ)[q1 · (1 + θn)(1 − En′ n) − q0

(1 + θk)Ek′ n]

(86)

k̸=n,k∈[K ]

= (1 + σ)[(1 − En′ n) · (1 + δ1) + δ2]

(87)

βnn′ := (1 + σ)[q1 · (1 + θn)En′ n′ + q0((1 + θn′ ) +

(1 + θk)Ek′ n′ ))] (88)

k̸=n,k∈[K]

= (1 + σ)[En′ n′ · (1 + δ1) + δ3]

(89)

28

Here σ

is defined in Cor. 1 and satisfies −1

<

σ

≪

ln M .

|δ1|

≲

√K N

ln(

1 δ

)

+

1 M

≪

1 and

|δ2|, |δ3| ≤

M (M −1)2

× 2(1 + 3|δ1|)

<

3 M

.

Here we use the fact that |θ|, |θi| ≲

√K N

ln(

1 δ

),

k∈[K] λkujkujn′ = Ekn′ and the fact from Lemma 15:

|Ek′ n|

≤

max |λi(E′)|
i∈[K]

≤

1

1 − 1/K |λ1|

≤

1 K−

1

(90)

(a) Now let’s prove that ξn(t) > 0. First from (I + E)(I − E′) = I we have E − E′ − EE′ = O. Then use the symmetry of E and E′, we get

(EE′)nn =

EnkEk′ n =

EnkEn′ k =

EnkEn′ k =

EnkEn′ k + EnnEn′ n

k=1

k=1

k=1

k̸=n

(91)

Note that F ⊤F = I + E, we have Enn′ = fn⊤fn′ , ∀n′ ̸= n and Enn = 0. Then

(E − E′ − EE′)nn = Onn = 0 ⇒ EnkEn′ k = −En′ n

(92)

k̸=n

Note that |λi(E)| > 0, ∀i ∈ [K] in Assumption 2 implies that Eki > 0 holds for some k ̸= i ∈ [K]. Then from (1) of Lemma 16 we get k̸=n En′ n′ fn⊤fn′ > 0.

From Theorem 1 we have βnn′ = (1 + σ)[En′ n′ · (1 + δ1) + δ3]. Note that 0 < 1 + σ ≪ ln(M ), we have:

βnn′ fn⊤fn′ = (1 + σ)[ [En′ n′ (1 + δ1) + δ3]Enn′ ]

n′ ̸=n

n′ ̸=n

= (1 + σ)[−(1 + δ1)En′ n + δ3

Enn′ ]

n′ ̸=n

=

(1

+

σ)[(1

+

δ1)

K k=1

1

λ2k + λk

u2nk

+

δ3

n′ ̸=n

Enn′ ]

(Eqn. 79)

≥

(1

+

σ)[

1 + δ1 1 − |λ1|

(min
i

|λi(E)|2)

−

3 M

· K|λ1|],

3

(Eqn.

90,

|δ3|

<

) M

>

(1

+

σ)[

1 2

(min
i

|λi(E

)|2

)

−

3 M

· K|λ1|],

1 (|δ1| ≪ 1, |λ1| < K ≪ 1)

> 0, (Assumption 2)

(93)

(b) We directly use Lemma 9, then we finish the proof.

E Proof of Section 5

Lemma 4 (Self-attention dynamics). With Assumption 1(b) (i.e., T → +∞), Eqn. 4 becomes:

z˙m = ηZ γ

diag(fn)

βnn′ (fnfn⊤ − I)fn′ ,

n∈ψ −1 (m)

n′ ̸=n

(10)

Proof. Taking long sequence limit (T → +∞), and summing over all possible choices of next token xT +1 = n, plugging in the backpropagated gradient (Eqn. 9) into the dynamics of Z with query token m (Eqn. 4), we arrive at the following:

z˙m

=

ηZ

n∈ψ −1 (m)

diag(cn)

Pf⊥n ∥cn∥2

Y

(xT

+1[i]

−

α[i])

(94)

= −ηZ γ

diag(fn)Pf⊥n

βnn′ fn′

n∈ψ −1 (m)

n′ ̸=n

(95)

= ηZ γ

diag(fn)(fnfn⊤ − I)

βnn′ fn′

n∈ψ −1 (m)

n′ ̸=n

(96)

29

Note here we leverage the property that Pf⊥f = 0 and Pc⊥n = Pf⊥n .
Theorem 2 (Fates of contextual tokens). Let GCT be the set of common tokens (CT), and GDT (n) be the set of distinct tokens (DT) that belong to next token n. Then if Assumption 2 holds, under the self-attention dynamics (Eqn. 10), we have:

• (a) for any distinct token l ∈ GDT (n), z˙ml > 0 where m = ψ(n);
• (b) if |GCT | = 1 and at least one next token n ∈ ψ−1(m) has at least one distinct token, then for the single common token l ∈ GCT , z˙ml < 0.

Proof. For any token l, we have:

z˙ml = ηZ γ

fnl

βnn′ (fn⊤fn′ )fnl − fn′l

n∈ψ −1 (m)

n′ ̸=n

(97)

Distinct token. For a token l distinct to n, by definition, for any n′ ̸= n, P(l|m, n′) = 0 and fn′l(t) ∝ P(l|m, n′) exp(zml) ≡ 0. Therefore, we have:

z˙ml = ηZ γfn2l

βnn′ fn⊤fn′ = ηZ fn2lξn > 0

n′ ̸=n

(98)

Note that z˙ml > 0 is achieved by ξn > 0 from Theorem 1.

Common token. For any query token m, consider n ∈ ψ−1(m) and n′ ̸= n. if n and n′ does
not overlap then diag(fn)(fnfn⊤ − I)fn′ = −diag(fn)fn′ = 0. When n and n′ overlaps, let GCT (n, n′) := {l : P(l|n)P(l|n′) > 0} be the subset of common tokens shared between n and n′, since |GCT | = 1 and ∅ ̸= GCT (n, n′) ⊆ GCT := n̸=n′ GCT (n, n′), we have |GCT (n, n′)| = 1 and l ∈ GCT (n, n′), i.e., the common token l is the unique overlap. Then we have:

fnl (fn⊤fn′ )fnl − fn′l = (fn⊤fn′ )fn2l − fn⊤fn′ = −(1 − fn2l)(fn⊤fn′ )

(99)

So we have:

z˙ml = −ηZ γ

(1 − fn2l)

βnn′ fn⊤fn′ = −ηZ

(1 − fn2l)ξn ≤ 0

n∈ψ −1 (m)

n′ ̸=n

n∈ψ −1 (m)

(100)

Since ξn(t) > 0, the only condition that will lead to z˙ml = 0 is fn2l = 1. However, since at least one such n has another distinct token l′, and thus fnl′ > 0, by normalization condition, fnl < 1 and thus z˙ml < 0.

Note that for multiple common tokens, things can be quite involved. Here we prove a case when the symmetric condition holds. Corollary 2 (Multiple CTs, symmetric case). If Assumption 2 holds and assume
• (1) Single query token m0. For any next token n ∈ [K], ψ(n) = m0. • (2) Symmetry. For any two next tokens n ̸= n′, there exists a one-to-one mapping ϕ that
maps token l ∈ GDT (n) to l′ ∈ GDT (n′) so that P(l|n) = P(ϕ(l)|n′);
• (3) Global common tokens with shared conditional probability: i.e., the global common token set GCT satisfies the following condition: for any l ∈ GCT , P(l|n) = ρl, which is independent of next token n;
• (4) The initial condition Z(0) = 0.
Then for any common token l ∈ GCT , z˙m0,l < 0.
Proof. Since there is a global query token m0, we omit the subscript m0 and let zl := zm0,l. We want to prove the following induction hypothesis: for any t (a) zl(t) = zϕm(l)(t) for n, n′ which are next tokens that the distinct token l (and l′) belongs to, and (b) the normalization term o2n(t) := l c˜2l|n(t) = o2(t), i.e., it does not depend on n.
30

We prove by induction on infinitesimal steps δt. First when t = 0, both conditions hold due to the initial condition Z(0) = 0. Then we assume that both conditions hold for time t, then by symmetry, we know that for any n1 and any distinct token l1 ∈ GDT (n1):

z˙l1 (t) = ηZ γfn21l1

βn1n′ fn⊤1 fn′ = ηZ γfn22l2

βn2n′ fn⊤2 fn′ = z˙l2 (t)

n′ ̸=n1

n′ ̸=n2

(101)

where l2 = ϕ(l1) is the image of the distinct token l1. This is because (1) fn⊤1 fn′ = l∈GCT ρ2l exp(2zl(t))/o2(t) is independent of n1 and n′ by inductive hypothesis, therefore, β
is also independent of its subscripts. And (2) fn21l1 := c˜2l1|n1 /o2(t) = c˜2l2|n2 /o2(t) = fn22l2 .
Therefore, z˙l1 (t) = z˙l2 (t), which means that zl1 (t′) = zl2 (t′) for t′ = t + δt.
Let GCT (n1, n2) := {l : P(l|n1)P(l|n2) > 0} be the subset of common tokens shared between n1 and n2, then for their associated n1 and n2, obviously GCT (n1, n2) ⊆ GCT and we have:

on1 (t′) =

c˜2l|n1 (t′) = P2(l|n1) exp(2zl(t′))

l

l

(102)

=

P2(l1|n1) exp(2zl1 (t′)) +

P2(l|n1) exp(2zl(t′)) (103)

l1∈GDT (n1)

l∈GCT (n1,n2)

=

P2(ϕ(l1)|n2) exp(2zϕ(l1)(t′)) +

ρ2l exp(2zl(t′)) (104)

l1∈GDT (n1)

l∈GCT (n1,n2)

=

P2(l2|n2) exp(2zl2 (t′)) +

P2(l|n2) exp(2zl(t′)) (105)

l2∈GDT (n2)
= on2 (t′)

l∈GCT (n1,n2)

(106)

So we prove the induction hypothesis holds for t′ = t + δt. Let δt → 0 and we prove it for all t.

Now we check the dynamics of common token l ∈ GCT . First we have for any n ̸= n′, fn2l(t) = c˜2l|n(t)/o2(t) = ρ2l exp(2zl(t))/o2(t) = c˜2l|n′ (t)/o2(t) = fn2′l(t) and thus fnl(t) = fn′l(t) := fl(t) > 0, therefore:

fnl (fn⊤fn′ )fnl − fn′l = −fl2(1 − fn⊤fn′ ) < 0

(107)

On the other hand, from the proof on induction hypothesis, we know all off-diagonal elements of E are the same and are positive. Then all all the off-diagonal elements of E′ are also the same and are
positive. Following Theorem 1, we know βnn′ > 0 and is independent of the subscripts. Therefore, z˙l < 0.

Theorem 3 (Growth of distinct tokens). For a next token n and its two distinct tokens l and l′, the dynamics of the relative gain rl/l′|n(t) := fn2l(t)/fn2l′ (t)−1 = c˜2l|n(t)/c˜2l′|n(t)−1 has the following
analytic form (here the query token m = ψ(n) and is uniquely determined by distinct token l):

rl/l′|n(t) = rl/l′|n(0)e2(zml(t)−zml(0)) =: rl/l′|n(0)χl(t)

(11)

where χl(t) := e2(zml(t)−zml(0)) is the growth factor of distinct token l. If there exist a dominant

token l0 such that the initial condition satisfies rl0/l|n(0) > 0 for all its distinct token l ̸= l0, and all
of its common tokens l satisfy z˙ml < 0. Then both zml0 (t) and fnl0 (t) are monotonously increasing over t, and

e2fn2l0 (0)Bn(t) ≤ χl0 (t) ≤ e2Bn(t)

(12)

here Bn(t) := ηZ

t 0

ξn(t′)dt′.

Intuitively,

larger

Bn

gives

larger

rl0/l|n

and

sparser

attention

map.

Proof. Let m = ψ(n) be the query token associated with next token n. For brievity, we omit subscript m in the proof and let zl := zml.

First of all, for tokens l and l′ that are both distinct for a specific next token n, from Eqn. 98, it is

clear that

z˙l z˙l′

e2(zl (t)−zl (0)) = rl/l′|n(t) + 1 = (rl/l′|n(0) + 1) e2(zl′ (t)−zl′ (0))

(108)

31

This means that

e−2(zl−zl(0))z˙l = (rl/l′|n(0) + 1)e−2(zl′ −zl′ (0))z˙l′

Integrate both side over time t and we get:

(109)

e−2(zl(t)−zl(0)) − 1 = (rl/l′|n(0) + 1) e−2(zl′ (t)−zl′ (0)) − 1

(110)

From this we can get the close-form relationship between rl/l′|n(t) and zl(t):

rl/l′|n(t) = rl/l′|n(0)e2(zl(t)−zl(0))

(111)

Now let l0 be the dominating distinct token that satisfies rl0/l|n(0) > 0 for any distinct token l, then

• we have z˙l0 > 0 due to Theorem 2. • for any token l′ ̸= l0 that is distinct to n, we have:
r˙l0/l′|n = rl0/l′|n(0)e2(zl0 (t)−zl0 (0))z˙l0 > 0

(112)

• for any common token l′, since z˙l′ < 0, we have

d r˙l0/l′|n = dt

c˜2nl0 c˜2nl′

=

P2(l0|n) P2(l′|n)

e2(zl0

−zl′

)

· 2(z˙l0

− z˙l′ )

>

0

(113)

Therefore, we have:

d dt

(fn2l0

)

=

d dt

M+

1 r l′̸=l0 l′/l0|n

>0

(114)

Therefore, fn2l0 (t) is monotonously increasing. Combined with the fact fn2l0 (t) ≤ 1 due to normalization condition ∥fn∥2 = 1, we have:

ξn(t)

≥

1 ηZ

z˙l0

=

fn2l0 (t)ξn(t)

≥

fn2l0 (0)ξn(t)

(115)

Integrate over time and we have:

t
B(t) ≥ z˙l0 (t′)dt′ = zl0 (t) − zl0 (0) ≥ fn2l0 (0)B(t)
0

where B(t) := ηZ

t 0

ξn(t′)dt′.

Plugging

that

into

Eqn.

111,

and

we

have:

e2fn2l0 (0)B(t) ≤ χl0 (t) ≤ e2B(t)

(116) (117)

F Estimation in Sec. 6

Theorem 4 (Phase Transition in Training). If the dynamics of the single common token zml satisfies z˙ml = −C0−1ηZ γ(t)e4zml and ξn(t) = C0−1γ(t)e4zml , then we have:


 Bn(t) =


1 4

ln

1 4

ln

C0

+

2(M −1)2 KM2

ηY

ηZ t2

C0

+

2K(M −1)2 M2

ηZ ηY

ln2(M ηY t/K)

t

<

t′0

:=

K ln M ηY

t

≥

t0

:=

2(1+o(1))K ln M ηY

(14)

As a result, there exists a phase transition during training:

• Attention scanning. At the beginning of the training, γ(t) = O(ηY t/K) and Bn(t) ≈

1 4

ln

K −1 (ρ40

+

2ηY

ηZ

t2)

=

O(ln

t).

This

means

that

the

growth

factor

for

dominant

token

l0 is (sub-)linear: χl0 (t) ≥ e2fn2l0 (0)Bn(t) ≈ [K−1(ρ40 + 2ηY ηZ t2)]0.5fn2l0 (0), and the

attention on less co-occurred token drops gradually.

32

•

Attention snapping.

When t

≥

t0

:=

2(1 + δ′)K ln M/ηY

with δ′

=

Θ(

ln ln M ln M

),

γ(t)

=

O

K ln(ηY t/K) ηY t

and Bn(t) = O(ln ln t). Therefore, while Bn(t) still grows to infinite,

the growth factor χl0 (t) = O(ln t) grows at a much slower logarithmic rate.

Proof. Since every next token n shares the same query token m, we omit the subscript m and let zl := zml.
We start from the two following assumptions:

z˙l = −C0−1ηZ γ(t) exp(4zl) ξn(t) = C0−1γ(t) exp(4zl)

(118) (119)

Given that, we can derive the dynamics of zl(t) and ξn(t):

exp(−4zl)z˙l = −C0−1ηZ γ(t)
d exp(−4zl) = 4C0−1ηZ γ(t)dt
t
exp(−4zl) = 4C0−1ηZ γ(t′)dt′ + 1
0

(use zl(0) = 0)

Let Γ(t) := ηZ

t 0

γ(t′)dt′,

then

Γ(0)

=

0

and

dΓ(t)

=

ηZ γ(t)dt.

Therefore,

we

have

(120) (121)
(122)

ξn(t)

=

C0−1γ(t) exp(4zl)

=

C0

γ(t) + 4Γ(t)

(123)

and thus Bn(t) := ηZ

t 0

ξn(t′)dt′

can

be

integrated

analytically,

regardless

of

the

specific

form

of

γ(t):

t γ(t′)dt′

t dΓ

1

Bn(t) = ηZ

0

= C0 + 4Γ(t)

0

C0 + 4Γ = 4 ln(C0 + 4Γ(t))

(124)

Recall that γ(t)

=

(M −1)2h(t/K) M −1+exp(M h(t/K))

(Theorem 1).

Note that h (if treated in continuous time

step) is strictly monotonically increasing and satisfies h(0) = 0, dh(t/K) = ηY (M − 1 +

exp(M h(t/K)))−1dt/K

(Lemma

6

and

Lemma

7),

we

can

let

γ(h)

:=

(M −1)2h M −1+exp(M h)

and

get:

t

Γ(t) := ηZ

γ(t′)dt′

t=0

=

ηZ K

h(t/K) γ(h′) · M − 1 + exp(M h′) · dh′

h(0)

ηY

=

ηZ K(M − 1)2

h(t/K )
h′dh′

ηY

h(0)

= ηZ · K(M − 1)2 h2(t/K)

ηY

2

(125) (126) (127) (128)

Therefore, Bn(t) has a close form with respect to h, regardless of the specific form of h(t):

1 Bn(t) = 4 ln

C0

+

2 ηZ ηY

K (M

−

1)2 h2 (t/K )

(129)

(1) When t < t′0 := K ln(M )/ηY , from Lemma 9 we have h(t/K) = (1 + o(1)) · ηY t/(M K). We neglect the o(1) term and denote ν := ηY /ηZ , then we have when t ≤ t′0:

1 Bn(t) = 4 ln

C0

+

2(M − 1)2 νKM2

ηY2

t2

(130)

And

Bn(t′0)

=

1 4

ln

C0 + 2K(M − 1)2M −2ν−1 ln2(M )

.

33

= 10.0, M = 100
0.8 0.7 0.6

= 1.0, M = 10000
1.6 1.4 1.2

0.5

1.0

B(t) B(t)

0.4

0.8

0.3

0.2

Z = 0.5, Y = 5.0 Z = 1.0, Y = 10.0

0.1

Z = 2.0, Y = 20.0 Z = 4.0, Y = 40.0

0.0

Z = 8.0, Y = 80.0

0

1

2

t3

4

5

0.6 0.4 0.2 0.0
0

Z = 0.5, Y = 0.5 Z = 1.0, Y = 1.0 Z = 2.0, Y = 2.0 Z = 4.0, Y = 4.0 Z = 8.0, Y = 8.0

10

20

t 30

40

50

Figure 9: Numerical simulation of Bn(t) with changing ηZ and fixed ν = ηZ /ηY . The dotted line denotes the transition time t0, and Bn(t0) marked with the solid dot is independent of ηZ .

(2) Similarly, when t > t0 := 2(1 + ω1)K ln M/ηY with ω1 = Θ(ln ln M/ ln M ) is defined in Lemma 8, from Lemma 9 we have h(t/K) = (1 + o(1)) ln(M ηY t/K)/M . We neglect the o(1) term and get when t > t0:

1 Bn(t) = 4 ln

C0

+

2K(M − νM2

1)2

ln2(M ηY

t/K )

(131)

From this we know Bn(t0)

=

1 4

ln(C0

+

2K (M

−

1)2M −2ν−1 ln2(2(1

+

ω1)M

ln M )).

It’s

interesting to find that Bn(t0) just depends on K, M and ν, and thus fixing ν and changing ηZ will

not influence the value of Bn(t0), which means that the main difference between Bn is arises at the

stage t > t0. This matches the results in Fig. 9.

√ (3) Finally, we estimate Bn(t) when t is large. When ν is fixed and t ≫ (M ηY )−1 exp(1/ 2ν),

we have

Bn(t)

=

(1 + o(1)) ·

1 2

ln

ln(M ηY

t/K )

+

1 4

ln(2K (M

−

1)2M −2ν−1)

(132)

= Θ ln ln( M ηZ νt ) − ln( ν )

K

K

(133)

Therefore, from Eqn. 133 we get:

(a) Fix ν, larger ηZ result in larger Bn(t) and sparser attention map.
(b) Fix ηZ , larger ν (i.e., larger ηY ) result in smaller Bn(t) and denser attention map since ln ln(x) is much slower than ln(x).

These match our experimental results in the main paper (Fig. 6).

G Experiments
We use WikiText [25] dataset to verify our theoretical findings. This includes two datasets, WikiText2 and WikiText103. We train both on 1-layer transformer with SGD optimizer. Instead of using reparameterization Y and Z (Sec. 3.1), we choose to keep the original parameterization with token embedding U and train with a unified learning rate η until convergence. Fig. 10 shows that the averaged entropy of the self-attention map evaluated in the validation set indeed drops with when the learning rate-
 η becomes larger.
Note that in the original parameterization, it is not clear how to set ηY and ηZ properly and we leave it for future work.
Furthermore, we use the recall-threshold relationship to reshow that smaller ηY /ηZ and larger ηZ will result in a sparser self-attention map as Fig. 11 and Fig. 12. Here we use some thresholds to retag every entry of the attention as a 0-1 value based on its softmax value for every query token, and then calculate the recall value by the average value of the proportion of the distinct tokens with new labels

34

wikitext2
2.0 1.5 1.0

wikitext103
2.0 1.5 1.0

Average entropy Average entropy

0.5

0.5

0.0

0.0

1

2

3

4

5

1

2

3

4

5

Figure 10: Average self-attention map entropy over the validation sets in 1-layer transformer after training, when the learning rate ηY and ηZ changes. Note that higher learning rate η leads to higher Bn(t) and thus low entropy (i.e., more sparsity), which is consistent with our theoretical finding (Sec. 6). All the experiments are repeated in 5 random seeds. Error bar with 1-std is shown in the figure.

equal to 1 to the total number of distinct tokens. In the figures, the horizontal coordinates denote the threshold values around 1/M for different last/next tokens setting, and the vertical coordinates denote the recall rate. The dataset is Syn-Medium mentioned in Section 8, and every data point in the figures is the mean value over 10 seeds. It’s obvious that a sparser attention map will result in a slower descent rate of the recall-threshold line since sparser attention corresponds to fewer dist-
inct tokens with higher attention weights, and the results of Fig. 11 and Fig. 12 match that of Fig. 6.

H Technical Lemma

Lemma 18. Let h = [h1, h2, . . . , hM ]⊤ ∈ RM is some M -dimensional vector, hX := [hx1 , ..., hxT−1 ]⊤ ∈ RT −1 is a vector selected by input sequence X, then given event xT = m, xT +1 = n, there exists some qm,n = [q1|m,n, q2|m,n, . . . , qM|m,n]⊤ ∈ RM so that q ≥ 0 and

T

1 −

1 X⊤hX

=

M
ql|m,nhlel = qm,n ◦ h

l=1

(134)

T

1 −

1 X⊤diag(hX )X

=

M
ql|m,nhlele⊤l = diag(qm,n ◦ h)

l=1

(135)

where ql|m,n satisfies

M l=1

ql|m,n

=

1.

And

with

probability

at

least

1

−

δ

we

have

ln(2/δ)

ln(2/δ)

max 0, P(l|m, n) − 2(T − 1) ≤ ql|m,n ≤ P(l|m, n) + 2(T − 1)

(136)

And thus ql|m,n → P(l|m, n) when T → +∞.

Proof. Given that xT = m and xT +1 = n, then we have

T

1 −

1 X⊤hX

=

T

1 −

1

T −1
hxt xt

=

M

t=1

l=1

1 T −1

M

T −1

I[xt = l] hlel =:

ql|m,nhlel (137)

t=1

l=1

And

similar

equations

hold

for

T

1 −1

X

⊤diag(hX

)X

.

Then

we

consider

the

case

that

the

previous

tokens are generated by conditional probability P(l|m, n) as the data generation part, so I[xt =

l], ∀t ∈ [T − 1] are i.i.d. Bernoulli random variables with probability P(l|m, n) and T ql|m,n satisfies

binomial distribution. By Hoeffding inequality, we get

P(|ql|m,n − P(l|m, n)| ≥ t) ≤ 2 exp(−2(T − 1)t2)

(138)

Then we get the results by direct calculation.

35

#last/next tokens = 1/2

#last/next tokens = 3/6

0.9

Y/ Z = 1

0.8

Y/ Z = 2 Y/ Z = 5

0.7

Y/ Z = 10

0.6

0.5

0.4

0.3

0.2

0.028 0.030 0.032 0.034 0.036 0.038 1.0

0.9

0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.028 0.030 0.032 0.034 0.036 0.038
0.9

0.65 0.60 0.55 0.50 0.45 0.40 0.35 0.30
0.028 0.030 0.032 0.034 0.036 0.038
0.9

0.60 0.55 0.50 0.45 0.40 0.35 0.30 0.25
0.028 0.030 0.032 0.034 0.036 0.038
0.75

0.8

0.8

0.8

0.70

0.7

0.7

0.7

0.65

0.6

0.60

0.5

0.6

0.6

0.55

0.4

0.5

0.5

0.50

0.3

0.4

0.012 0.013 0.014 0.015 0.016

0.012 0.013 0.014 0.015 0.016

0.012 0.013 0.014 0.015 0.016 0.45 0.012 0.013 0.014 0.015 0.016

1.0

1.0

0.90

0.9

0.9

0.9

0.85

0.80

0.8

0.8

0.8

0.75

0.7 0.6

0.7 0.6

0.7

0.70

0.65

0.5

0.6

0.60

0.4

0.5 0.00750.00800.00850.00900.00950.01000.0105 0.4

0.5 0.00750.00800.00850.00900.00950.01000.0105

0.55 0.50 0.00750.00800.00850.00900.00950.01000.0105

0.00750.00800.00850.00900.00950.01000.0105

1.0

1.0

1.0

1.0

0.9 0.8 0.7 0.6 0.5 0.4
0.0040 0.0045 0.0050 Z = 0.5

0.9 0.8 0.7 0.6 0.5
0.0040 0.0045 0.0050 Z=1

0.9 0.8 0.7 0.6 0.5
0.0040 0.0045 0.0050 Z=2

0.9 0.8 0.7 0.6
0.0040 0.0045 0.0050 Z=3

#last/next tokens = 5/10

#last/next tokens = 10/20

Figure 11: Recall value of attention on all distinct tokens versus threshold with changing learning rate ratio ηY /ηZ . Smaller ηY /ηZ corresponds to a smaller descent rate and thus sparser attention.

36

#last/next tokens = 1/2

#last/next tokens = 3/6

0.7

Z = 0.5 0.8

Z = 1

0.6

Z = 2 Z = 3

0.7

0.6 0.5
0.5

0.4

0.4

0.3 0.028 0.030 0.032 0.034 0.036 0.038

0.3 0.028 0.030 0.032 0.034 0.036 0.038

0.9

0.9

0.8 0.7 0.6 0.5 0.4 0.3 0.2
0.028 0.030 0.032 0.034 0.036 0.038
0.9

0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2
0.028 0.030 0.032 0.034 0.036 0.038 1.0
0.9

0.8

0.8

0.8

0.8

0.7

0.7

0.7 0.6

0.7 0.6

0.6

0.6

0.5

0.5

0.5

0.4

0.5

0.4

0.3

0.012 0.013 0.014 0.015 0.016

0.012 0.013 0.014 0.015 0.016

0.012 0.013 0.014 0.015 0.016

0.012 0.013 0.014 0.015 0.016

1.0

1.0

0.9

0.9

0.9

0.9

0.8

0.8

0.8

0.8

0.7

0.7

0.7 0.6

0.7 0.6

0.6

0.5

0.6

0.5

0.5 0.4

0.4

0.00750.00800.00850.00900.00950.01000.0105 0.00750.00800.00850.00900.00950.01000.0105 0.00750.00800.00850.00900.00950.01000.0105 0.00750.00800.00850.00900.00950.01000.0105

1.0

1.0

1.0

1.0

0.9 0.8 0.7 0.6
0.0040 0.0045 0.0050 Y/ Z = 1

0.9 0.8 0.7 0.6 0.5
0.0040 0.0045 0.0050 Y/ Z = 2

0.9 0.8 0.7 0.6 0.5
0.0040 0.0045 0.0050 Y/ Z = 5

0.9 0.8 0.7 0.6 0.5 0.4
0.0040 0.0045 0.0050 Y/ Z = 10

#last/next tokens = 5/10

#last/next tokens = 10/20

Figure 12: Recall value of attention on all distinct tokens versus threshold with changing learning rate ηZ . Larger ηZ corresponds to a smaller descent rate and thus sparser attention.

37

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:42.342Z
- **Text Length:** 109072 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
