# PDF Document: Vu - 2025 - Random Collection.pdf

**File Path:** Vu - 2025 - Random Collection.pdf

**Processed Date:** 2026-02-10T18:17:54.299Z

**File Size:** 810.34 KB

**Total Pages:** 55

**Extracted Pages:** 55

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3148

**Title:** Random Collection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Random Collection∗
Tri Phu Vu†
University of Maryland
November 21, 2025
Abstract
This paper studies choice situations in which a decision maker can choose
multiple alternatives. Given a menu of available options, the decision maker
selects a subset of the menu with certain probabilities. We employ an axiomatic
approach to characterize various parametric models in the literature. Our re
sults elucidate the implications of the functional form assumptions and shed
light on the distinctions between models. The behavioral postulates offer simple
tools for testing and falsifying the choice procedures used by the decision maker
and reveal a close connection between models that are seemingly unrelated.
Keywords: Stochastic choice correspondence, choice bundles, choice correspondence,
consideration set.
JEL classification: D01, D11, D91.
∗I am indebted to Yusufcan Masatlioglu, Emel Filiz-Ozbay, and Erkut Y. Ozbay for their continuous guidance, encouragement, and support. I want to thank Marina Agranov, Victor H. Aguiar, Yunus C. Aybas, Christopher P. Chambers, Kfir Eliaz, Andrew Ellis, Onur Kesten, Matthew Kovach, Marco Mariotti, Kirby Nielsen, Quang Pham, Daniel Reck, Gerelt Tserenjigmid, Daniel Vincent, Kemal Yildiz, and seminar audiences at the University of Maryland, Caltech Summer Program, and BRIC XI for helpful discussions -
and comments. †Department of Economics, 3114 Tydings Hall, 7343 Preinkert Dr., College Park, MD 20742. Email: tvuphu@umd.edu.
1
arXiv:2511.18476v1 [econ.TH] 23 Nov 2025

1 Introduction
Decision makers frequently encounter choices with many options. The standard ap
proach to modeling choice behavior assumes that decision makers select a single al
ternative each time they face a choice problem. In many environments, however,
it is natural for decision makers to choose a collection of options rather than just
one. Examples are abundant. Platforms often select a set of products to recommend
to their customers. Supermarkets regularly choose an assortment of products to of
fer. Coaches in soccer or basketball typically pick a group of players for the starting
lineup. Investors select a portfolio of financial assets to invest in. Investigating the
behavior of decision makers in such situations is crucial, as it enables more accurate
modeling of choices that naturally involve selecting multiple options.
This paper studies choice problems where decision makers can choose a collection
of alternatives, allowing for variation in the selected collection. Formally, given a set
S of feasible options, decision makers can choose an arbitrary subset T of S with a
probability μ(T, S), where μ represents a probability measure over the power set of
S. Various examples and interpretations of μ exist; we present several below.
• Product recommendation: A platform uses an algorithm based on individual
characteristics, purchase history, popularity of the products, etc., to recommend
some products to customers from the set of products it offers. In online environ
ments, Amazon’s “Amazon’s Choice,” Spotify’s “Editor’s Picks,” and Disney+’s
“Fan Favorites” are typical examples. In physical settings, Kawaguchi et al.
(2021) illustrate that some vending machines in Japan can utilize facial recog
nition technology to analyze a customer’s age and gender and provide drink
recommendations based on these demographic factors. Because the underly
ing data varies across customers and over time, the platform (or the vending
machine) recommends each collection T with probability μ(T, S).
• Assortment choice: A supermarket selects a collection of items to offer to
its customers from the set of all products it can provide. Due to limited shelf
space, varying items’ perishability, and fluctuating demand, the collection of
items the supermarket selects varies over time. Consequently, the supermarket
offers a set T of products with probability μ(T, S). Such random assortments
can arise from the supermarket optimizing its expected revenue (Ma, 2023).
2

• Approval behavior: In online shopping, customers often add a subset of the
available products to a wishlist or shopping cart for later consideration. Such
actions, referred to as approval behavior (Manzini et al., 2024), also include
adding videos to a playlist on YouTube or marking places as “Want to go” on
Google Maps. In these cases, μ(T, S) denotes the probability that the decision
maker approves a collection T of products for later use.
In the examples above, μ(T, S) represents the choices of a single decision maker
in varying situations (intrapersonal). Depending on the context, μ(T, S) can also
be interpreted as the choices of different decision makers within a population (in
terpersonal). For instance, in the Japanese vending machine example, the analyst
may observe data from multiple vending machines, and μ(T, S) may indicate the
proportion of vending machines recommending a set T of products.
Various functional forms of μ have been proposed in the literature, each grounded
in distinct underlying narratives and offering different interpretations. Rather than
introducing a new model, this paper undertakes a systematic examination of well
known parametric models of μ listed in Table 1. Several models in Table 1 were
originally proposed to study the formation of consideration sets.1 However, as we
will thoroughly illustrate in Section 2, these parametric functional forms can also
be applied to investigate choice situations that naturally involve selecting multiple
options, such as supermarket assortment problems or product recommendations.
Despite the widespread use and numerous applications of the models of μ in Ta
ble 1, little is known about their behavioral implications. Additionally, it is unclear
how to distinguish these models from each other, as they often have complicated
functional forms and are motivated by distinct stories. This paper provides behav
ioral characterizations of several formulations of μ in Table 1 and highlights a close
connection between well-known but seemingly unrelated models. Our results offer
a better understanding of the implications of functional form assumptions, allowing
the analyst to differentiate between alternative models of μ and to identify the most
suitable model for their specific application.
First, many formulations of μ, despite their cumbersome functional forms, have
simple and intuitive behavioral foundations, with several characterized by a single
1Consideration set formation is another interpretation of μ. For this interpretation, see Manzini and Mariotti (2014) and Cattaneo et al. (2020), among others.
3

Models Papers Factors impacting μ List A
Logit Brady and Rehbeck (2016) Importance (or salience) of sets of options Nested stochastic choice Kovach and Tserenjigmid (2022)
Nests (a partition of the grand set)
Nested logit McFadden (1978) Nests and the DM’s preference List B
Independent Choice Manzini and Mariotti (2014) Importance (or salience) of individual options List C
Random categorization Aguiar (2017) Salience of categories of options Elimination by aspects Tversky (1972) Salience of attributes of options Attribute rule Gul et al. (2014) Salience of attributes of options Random reference model Kibris et al. (2024) Salience of individual options
Table 1: Models of μ and their underlying motivations
Notes. Models are divided into lists A, B, and C based on their behavioral characterizations.
axiom. While functional forms facilitate empirical applications, it is often challeng
ing to tell whether two parametric formulations are equivalent, related, or distinct,
especially when they have complicated forms. Identifying behavioral foundations al
lows us to perform such comparisons more easily. We show that several models of
μ that are conceptually distinct in their underlying stories are strikingly similar in
behavioral predictions. At the same time, formulations that look alike intersect only
in special cases. Second, the behavioral postulates identified in the paper offer a set of
testable predictions that allow for empirical verification of these models. An outside
analyst with access to data on μ can utilize these behavioral implications to identify
the underlying data-generating process and potentially falsify models.2
Our characterizations of various models of μ identify two main behavioral postu
lates and their variants: Independence of Irrelevant Sets (IIS) and Relative Additivity.
IIS conceptually resembles the Independence of Irrelevant Alternatives (IIA) axiom
in the probabilistic choice literature, but differs in the domain on which it operates.
IIS states that the relative choice probability of two collections is independent of the
2For instance, a researcher interested in understanding the formation of consideration sets might apply the behavioral postulates identified in our paper to the data to investigate how decision makers choose their consideration sets. Such data is available; see, for instance, Ellis et al. (2025).
4

presence or absence of other sets:
μ(T, S)
μ(T ′, S) = μ(T, S′)
μ(T ′, S′) for all non-empty T, T ′ ⊆ S ∩ S′.
Section 2 shows that IIS and its variants appear in the characterizations of μ in Logit,
Independent Choice, and Nested Stochastic Choice. Meanwhile, roughly speaking,
Relative Additivity states that adding a new option to the choice set has a constant
effect on the choice probabilities of a given collection. That is, for a fixed S ∋ x,
μ(T, S \ {x})
μ(T, S) + μ(T ∪ {x}, S) is independent of T for all non-empty T ⊆ S \ {x}.
To understand Relative Additivity, suppose S \ {x} is the initial choice set and T
is the chosen collection. Adding x to the choice set can affect T in two different ways.
On the one hand, x may have only an indirect effect, in which case it does not alter
the chosen collection but only affects its selection probability. In that situation, T is
selected with probability μ(T, S). On the other hand, x may have a direct impact and
be added to the chosen collection, in which case T ∪ {x} is selected with probability
μ(T ∪ {x}, S). Thus, the sum μ(T, S) + μ(T ∪ {x}, S) can be interpreted as the
total choice probability associated with T under the expanded choice set. The ratio
μ(T ,S \{x})
μ(T,S)+μ(T ∪{x},S) then captures the relative probability of choosing a collection before
and after adding the new option. Relative Additivity states that this relative choice
probability is independent of T . In Section 2, we show that Relative Additivity and its
variants appear in the characterizations of μ in Random Categorization, Elimination
by Aspects, Attribute Rule, and Random Reference Model.
Figure 1 summarizes the connections among various models of μ. We identify
the following key relationships. First, Random Reference Model is notably distinct
from other frameworks: it intersects with some of them only in a special case of μ
referred to as singleton-μ. This μ, formally defined in Section 3, is related to the
Luce model in the probabilistic choice literature. Second, many models of μ intersect
at the singleton-μ, but not at the deterministic-with-full-choice-μ, where the whole
choice set is always selected with certainty. Third, the endogenous versions of the for
mulations of μ in Elimination by Aspects (static version, see Section 2.5.1), Attribute
Rule, and Random Categorization are all equivalent. Finally, the formulation of μ
in Independent Choice is equivalent to the intersection of Logit and Random Cat
5

egorization, a result also obtained by Kovach and Suleymanov (2023) in a different
setting.
Figure 1: Relationship among various models of μ
Notes. Label legend: Logit (Brady and Rehbeck, 2016), IC—Independent Choice (Manzini and Mariotti, 2014), EBA—endogenous (static) Elimination By Aspects (Tversky, 1972), AR—endogenous (first stage) Attribute Rule (Gul et al., 2014), RCG—Random Categorization (Aguiar, 2017), NSC—Nested Stochastic Choice (Kovach and Tserenjigmid, 2022), RRM—Random Reference Model (Masatlioglu and Ok, 2014; Kibris et al., 2024). The definitions of deterministic-with-full-choice μ, singleton-μ, and nest-invariant μ ar-
e given in Section 3. Singleton-μ is the intersection of RRM, NSC, and EBA/AR/RCG. Singleton-μ is related to the Luce model in the probabilistic choice literature. Nest-invariant μ is the intersection of EBA/AR/RCG and NSC. Nest-invariant μ is a subset of NSC satisfying the probabilistic version of the attention filter condition studied in Masatlioglu et al. (2012). We assume that the chosen collection is non-empty in all models of μ in the figure.
The paper proceeds as follows. Section 2 introduces various models of μ and pro
vides their behavioral characterizations. Section 3 analyzes the relationships among
these models. Section 4 reviews the related literature. Appendix A provides charac
terizations of additional models. All proofs are delegated to Appendix B.
2 Models and Behavioral Characterizations
2.1 Primitives
Let X be the finite set of all alternatives. We call X the grand set and assume that
there are at least three distinct alternatives in X. Typical elements of X are denoted
by x, y, z. Let X be the set of all non-empty subsets of X. Let S ∈ X denote a choice
set. For notational simplicity, given a set S and an element x, we write S ∪ x instead
of S ∪ {x} and S \ x instead of S \ {x}. Denote the sets of non-negative and positive
real numbers by R+ and R++, respectively.
6

Let μ denote a stochastic choice correspondence from X × X to [0, 1], meaning
that μ satisfies three properties: (i) μ(T, S) ∈ [0, 1] for all non-empty T ⊆ S and for
all S ∈ X , (ii) ∑
T :T ⊆S,T ̸=∅ μ(T, S) = 1 for all S ∈ X , and (iii) μ(T, S) = 0 whenever
T ̸⊆ S. In this definition, μ(T, S) represents the probability of choosing a non-empty
collection T from choice set S.3 We say that μ has full support if μ(T, S) > 0 for all
pairs (T, S) such that T ⊆ S ⊆ X and T is non-empty.
2.2 Logit
In Brady and Rehbeck (2016), each collection T is associated with a numerical value
denoted by π(T ), where π is a mapping from X to R++. Brady and Rehbeck (2016)
interpret π(T ) as the likelihood that T is feasible in X. Depending on the context, the
number π(T ) may represent the value, importance, salience, or weight of T from the
DM’s perspective. For instance, in the product recommendation example, π(T ) may
correspond to the platform’s benefit from recommending a set T of products to its
customers. In the case of supermarket assortment choice, π(T ) may denote the sales
revenue generated by items in T . Given a choice set S, the probability of choosing a
non-empty T ⊆ S is proportional to its value according to a logit formula:
μLG(T, S) = π(T )
∑
T ′:T ′⊆S,T ′̸=∅ π(T ′) for all non-empty T ⊆ S.
The logit formulation of μLG is reminiscent of the Luce model in probabilistic choice
theory (Luce, 1959). The Luce model and μLG, however, are distinct as they operate
in two different domains.
It is well known that the Luce model can be characterized by a single axiom,
Independence of Irrelevant Alternatives (IIA), which states that the ratio between
two choice probabilities does not depend on the presence or absence of other options
in the choice set. As μLG resembles the Luce model, a similar version of IIA, called
Independence of Irrelevant Sets, can fully characterize μLG. The Independence of Ir
relevant Sets (IIS), formalized in Axiom 1 below, states that the relative probability
of choosing two collections is independent of the presence or absence of other collec
tions. Note that IIS and IIA share similar underlying intuitions but differ in their
domains of application.
3Several models of μ examined in the paper allow the chosen collection to be empty; the decision maker is often assumed to select a default option in this case. Appendix A.1 provides characterizations of these models when T can be empty.
7

Axiom 1 (Independence of Irrelevant Sets - IIS).
μ(T, S)
μ(T ′, S) = μ(T, S′)
μ(T ′, S′) for all non-empty T, T ′ ⊆ S ∩ S′
as long as the two ratios are well defined and positive.
Proposition 1 (Characterization of Logit μ). A full-support μ has a Logit represen
tation if and only if it satisfies IIS.
Proposition 1 states that the logit formulation of μ in Brady and Rehbeck (2016)
is captured by a simple behavioral postulate. The necessity part in Proposition 1 is
straightforward. For the sufficiency direction, the proof is constructive and follows
an approach similar to that used in the characterization of the Luce model.
2.3 Random Categorization
Consider a decision maker (hereafter DM) who divides the grand set into different
categories. Each category represents a bundle of alternatives. The categories can
overlap with each other. The DM selects a particular category and subsequently
chooses a collection by including all available options that belong to the category she
considers. In simple terms, the chosen collection is the intersection of the choice set
and the considered category. Aguiar (2017) calls this model Random Categorization
(RCG).
Formally, Aguiar (2017) assumes that each category C is a subset of the grand
set X. Each category C has an associated probability m(C), where m : X → [0, 1]
is a probability distribution over X .4 The decision maker first considers a category
C, which happens with probability m(C). If there is nothing for the decision maker
to choose from, i.e., C ∩ S = ∅, the DM redraws another category until finding one
category C′ such that C′ ∩ S ̸= ∅. For this process to end in a finite number of steps,
each option x ∈ X is assumed to belong to at least one category C with m(C) > 0.
The probability of choosing a non-empty T ⊆ S is the sum over all categories C
for which the intersection of S and C equals T , normalized by the probability of all
4Aguiar (2017) assumes that the collection of categories is a strict subset of X . However, one can easily extend the collection of categories to X by simply assigning zero weight to all non-empty subsets of X that do not belong to the original set of categories.
8

categories overlapping with S:
μRCG(T, S) =
∑
C m(C)1(T = C ∩ S)
∑
C:S∩C̸=∅ m(C) for all non-empty T ⊆ S.
Note that the normalization term, ∑
C:S∩C̸=∅ m(C), arises from the non-emptiness of
the chosen collection. When the chosen collection is allowed to be empty, this term
disappears.5
The RCG model is applicable to the assortment choice of supermarkets or product
recommendations by platforms mentioned earlier. For instance, in the supermarket
assortment choice example, each category C may represent a product category (fruits,
vegetables, etc.), and m(C) may correspond to the probability that items in C are in
stock. The supermarket would like to offer items in C to customers, but only items
in S are available; hence, the supermarket offers everything in C ∩ S. In the product
recommendation example, each category C may also represent a product category.
The RCG model is characterized by two simple axioms: Positivity-1 and Relative
Additivity. The former concerns the coverage of chosen collections, whereas the latter
links choice probabilities across two choice sets of different sizes.
Axiom 2 (Positivity-1). For all (x, S) ∈ X × X with x ∈ S, there exists T ∋ x such
that μ(T, S) > 0.
Positivity-1 arises from the assumption that each option x belongs to at least one
category C with m(C) > 0. To elaborate, suppose x ∈ S. Let C be an arbitrary
category that includes x with m(C) > 0. Then T = C ∩ S is chosen with positive
probability from choice set S. Clearly, T contains x. Note that Positivity-1 is trivially
satisfied when μ has full support.
Axiom 3 (Relative Additivity). For all x, T, T ′, and S such that x ∈ S and T, T ′ ⊆
S \ x and T, T ′ ̸= ∅,
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T, S) + μ(T ∪ x, S)].
To understand Relative Additivity, consider some of its implications. When μ has
5Appendix A.1 provides a characterization of μRCG when the chosen collection can be empty.
9

full support, Relative Additivity states that
μ(T, S \ x)
μ(T, S) + μ(T ∪ x, S) = μ(T ′, S \ x)
μ(T ′, S) + μ(T ′ ∪ x, S) for all non-empty T, T ′ ⊆ S \ x.
Consequently, the ratio μ(T,S\x)
μ(T,S)+μ(T ∪x,S) is independent of T . To understand this ratio,
suppose the initial choice set is S \ x and T is the chosen collection. Adding a new
item x to S \ x may impact T in two distinct ways. When x has an indirect effect, the
chosen collection remains the same and T is selected with updated probability μ(T, S).
Alternatively, x may have a direct effect and be added to the chosen collection, in
which case T ∪x is selected with probability μ(T ∪x, S). Thus, the sum μ(T, S)+μ(T ∪
x, S) can be seen as the total choice probability related to T under the expanded choice
set. Hence, the ratio μ(T,S\x)
μ(T,S)+μ(T ∪x,S) captures the relative probability of choosing a
collection before and after adding the new option. Relative Additivity states that this
relative probability is independent of the collection chosen initially. The multiplicative
form of Relative Additivity in Axiom 3 accounts for the possibility that the ratio
μ(T ,S \x)
μ(T,S)+μ(T ∪x,S) might not be well defined when μ does not have full support.
Another implication of Relative Additivity is that adding a new alternative to the
choice set (weakly) decreases the choice probability of an existing collection. That is,
μ(T, S) ≤ μ(T, S \x) for all non-empty T ⊆ S \x with x ∈ S. This is the monotonicity
condition of μ studied in Cattaneo et al. (2020). Consequently, Relative Additivity
is sufficient for monotonicity.
Finally, note that Relative Additivity arises from an independence structure be
tween what is chosen (collection T ) and how its probability is assigned (via category
C). In RCG, the chosen collection is simply an outcome of the category selection.
The probability of choosing T depends entirely on the probability distribution over
categories and is independent of any properties of T . Once a category is drawn,
there is no additional weight applied directly to the chosen set. This independence
structure gives rise to Relative Additivity. In general, Relative Additivity emerges in
models that exhibit this independence structure and disappears when the structure
is absent (see Section 2.5 for details).
We are now ready to state a characterization of RCG. Proposition 2 establishes
that the RCG model is characterized by Axioms 2-3.
10

Proposition 2 (Characterization of RCG). μ has an RCG representation if and only
if it satisfies Positivity-1 and Relative Additivity.
Proposition 2 allows the researcher to test and falsify the RCG model by checking
two simple conditions. The proof of Proposition 2 is constructive and uses induction
based on the number of alternatives in the choice set. First, for each category C ∈ X ,
we define its probability as m(C) = μ(C, X). By construction, m is a probability
distribution over categories, and μ has an RCG representation at X. Second, we
use Relative Additivity to show that μ has an RCG representation at choice sets
having |X| − 1, . . . , 2 elements by induction. The induction step utilizes the fact that
Relative Additivity connects choice probabilities at two choice sets of different sizes
(S and S \ x), so we can apply the representation at a larger choice set to obtain the
representation in a smaller choice set.
2.4 Independent Choice
In Manzini and Mariotti (2014), the choice probability of a collection depends on the
probabilities of choosing options within the collection. Each option x ∈ X has an
independent parameter γ(x) ∈ (0, 1), which represents the probability of that option
being selected. In the supermarket assortment example, γ(x) may correspond to the
probability that product x is in stock. In the product-recommendation setting, γ(x)
may denote the probability that a similar customer buys x.
For a given choice set S, a non-empty subset T of S is chosen if and only if the
DM selects every alternative in T while ignoring all options in S \ T . The probability
of choosing T is defined as
μIC(T, S) =
∏
x∈T
γ(x) ∏
y∈S\T
(1 − γ(y))
1−∏
z∈S(1 − γ(z)) for all non-empty T ⊆ S.
In the formulation of μIC(T, S), the normalization term, 1−∏
z∈S(1−γ(z)), represents
the probability of drawing a non-empty subset of S. It arises from the non-emptiness
of the chosen collection. In the decision-making process, this normalization ensures
that if the DM draws an empty collection as her choice, which occurs with probability
∏
z∈S[1 − γ(z)], she will redraw another collection (with replacement) until a non
empty collection is selected.6
6When the chosen collection is allowed to be empty, the normalization term disappears. Appendix A.1 provides a characterization of μIC in this case.
11

The three formulations of μ introduced, Logit, Random Categorization, and Inde
pendent Choice, differ in their functional forms and underlying narratives. One may
wonder whether the three models are related in a particular way. Interestingly, there
is a notable connection between them: Independent Choice is equivalent to the inter
section of Logit and Random Categorization. In Proposition 3 below, we present a
behavioral characterization of Independent Choice (IC). We show that a full-support
μ has an Independent Choice representation if and only if it satisfies IIS and Relative
Additivity. Consequently, the relationship between the three models follows directly
from their behavioral foundations.
Proposition 3 (Characterization of IC). A full-support μ has an Independent Choice
representation if and only if it satisfies IIS and Relative Additivity.
Proposition 3 indicates that verifying IIS and Relative Additivity is sufficient
to determine whether a full-support μ has an Independent Choice representation.
Proposition 3, together with Propositions 1-2, sheds light on the connection between
Logit, Random Categorization, and Independent Choice. Note that the relationship
among the three models was first documented in Kovach and Suleymanov (2023) when
studying reference-dependent probabilistic choice in a different setting.7 Kovach and
Suleymanov (2023) do not investigate the behavioral implications of the three models
and use their functional forms to identify the relationship. We employ an alternative
approach by using their behavioral foundations. Our axiomatic approach clarifies the
implications of the functional form assumptions and guides the analyst in selecting
the most suitable model for their application of interest. Moreover, the relationships
among different models of μ often become evident through their behavioral charac
terizations. As we will show in Section 3, our approach is particularly useful for
understanding the connections between various models of μ when they exhibit more
complex functional forms and are motivated by highly distinct narratives.
The proof of sufficiency in Proposition 3 proceeds as follows. First, we use the IIS
axiom and apply Proposition 1 to obtain a Logit representation of μ, allowing us to
express μ(T, S) = π(T )
∑
T′:T′⊆S,T′̸=∅ π(T ′) for some π : X → R++. Next, we apply Relative
Additivity to this functional form and, through induction, demonstrate that the Logit
7More precisely, they document the relationship between the three models when the chosen collection is allowed to be empty. Our result here applies to the case when the selected collection must be non-empty. In Appendix A.1, we provide characterizations of RCG and IC when the DM can select an empty set. Through the behavioral characterizations, we also re-establish their result.
12

representation can be rewritten as an Independent Choice representation by defining
γ(x) = π(X)
π(X)+π(X\x) for all options x.
The proof of Proposition 3 also sheds light on the relationship among the primi
tives in the Logit, Random Categorization, and Independent Choice models. Specifi
cally, given the normalization ∑
T ′:∅̸=T ′⊆X π(T ′) = 1 in the Logit model, we show that
the probability measure over categories in the RCG representation must correspond
to the π function in the Logit representation: m(C) = π(C) for all C ∈ X . Con
sequently, the equations γ(x) = π(X)
π(X)+π(X\x) for all x ∈ X and m(C) = π(C) for all
C ∈ X jointly characterize the interconnection between the primitives in the three
models.
2.5 Salience Models
In this section, we investigate three models that incorporate the salience of various
aspects of the choice environment into the decision-making process. These models
differ in the type of salience they consider: (1) salience of attributes in Elimination
By Aspects (Tversky, 1972), (2) salience of alternatives in Random Reference Model
(Kibris et al., 2024), and (3) salience of nests in Nested Stochastic Choice (Kovach
and Tserenjigmid, 2022).
2.5.1 Salience of Attributes
Many products in real life have observable attributes. For instance, a typical soft
drink can be differentiated from others by its price, size, design, calorie content, and
intended use. Consider a DM who pays attention to a particular attribute and ignores
options that do not possess that attribute when making choices. To illustrate, when
recommending soft drinks on hot days, a vending machine may prioritize refreshing
and hydrating options, such as sparkling water and lemonade, while neglecting heavier
soft drinks like colas and sodas. Tversky (1972) calls this model Elimination By
Aspects (EBA). Throughout the paper, we focus on the so-called static version of
EBA, which is characterized by a one-time elimination of alternatives, as the original
EBA model developed by Tversky (1972) allows for a sequence of eliminations until
only one option remains. This focus allows the decision makers to choose a collection
of options and facilitates comparisons across models, as all other formulations of μ
examined in this paper are also static. With a slight abuse of terminology, we will
refer to the static EBA model simply as EBA. When clarification is necessary, we will
refer to the original EBA model as sequential EBA.
13

Formally, let {i, j, k, . . . } denote the finite set of all observable attributes. Let
ωi > 0 be the level of attention that attribute i receives. It measures the salience (or
value) of aspect i. Without loss of generality, assume that ∑
i ωi = 1. Let Ai be the
set of options having aspect i. Each option has at least one attribute. Suppose aspect
i is salient. All options without aspect i fail to receive attention. The DM chooses all
feasible options having aspect i; hence, the selected collection is Ai ∩ S, with S being
the choice set. When Ai ∩ S = ∅, the DM switches attention to a new attribute until
finding some aspect j such that Aj ∩ S ̸= ∅. The probability of choosing a non-empty
T ⊆ S is the normalized sum over all attributes i satisfying T = Ai ∩ S:8
μEBA(T, S) = ∑
i
ωi1(T = Ai ∩ S)
∑
j:Aj ∩S̸=∅ ωj
for all non-empty T ⊆ S. (1)
In the supermarket assortment choice example, aspect i may represent the shelf
life of a product. The collection Ai could then denote the group of items with similar
shelf life. As only products in S are available, the supermarket offers items in Ai ∩ S
to its customers.
To provide a characterization of EBA, we first document a connection between
EBA and RCG studied in Section 2.3. In Remark 1, we demonstrate that EBA is
nested in RCG by showing that one can obtain a representation for the latter from
a representation of the former by appropriately defining the probability distribution
over the categories.
Remark 1. Let the distribution over categories m : X → [0, 1] in the RCG model be
such that m(C) = ∑
i:Ai=C ωi. For all non-empty S ⊆ X and all non-empty T ⊆ S,
μEBA(T, S) = μRCG(T, S).
Remark 1 follows from the observation that each category C in the RCG model
can be interpreted as the set of options possessing a specific attribute in the EBA
model. If m(C) = ∑
i:Ai=C ωi, i.e., the probability of drawing category C equals the
total consideration probability of all attributes i whose collection of options having
8In Appendix A.2, we show that the static EBA model described here is identical to the first stage of the choice procedure (after reformulation) in the Attribute Rule model introduced by Gul et al. (2014). Our equivalence result sheds light on the differences in choice behaviors between the original EBA model and the Attribute Rule model noted by Gul et al. (2014). See Appendix A.2 for details.
14

aspect i is exactly C, then the two models generate identical choice behavior.
Given that RCG nests EBA as a particular case, it follows from the characteri
zation of μRCG in Proposition 2 that Positivity-1 (Axiom 2) and Relative Additivity
(Axiom 3) are necessary for the EBA model. The two axioms, however, are not suffi
cient for a characterization of EBA. Note that in the EBA model, the DM first selects
a particular attribute and subsequently chooses a collection containing all feasible op
tions possessing that attribute. Hence, the decision maker’s choices depend on the
set of attributes, which is assumed to be observable and exogenous. This exogeneity
assumption of attributes imposes a stronger restriction on μ than Positivity-1. We
refer to this stronger condition as Positivity-2 (Axiom 4). Note that Positivity-2 is
nested in Positivity-1, as the former implies the latter.
Axiom 4 (Positivity-2). For all non-empty T ⊆ S, μ(T, S) > 0 if and only if there
exists an attribute i such that T = Ai ∩ S.
Positivity-2 follows from the definition of the EBA model. Positivity-2 states that
the DM selects a collection with positive probability if and only if it corresponds to
the set of all feasible options possessing a specific attribute. By combining Positivity
2 and Relative Additivity, we obtain a characterization of EBA. This is established
in Proposition 4.
Proposition 4 (Characterization of EBA). μ has an EBA representation if and only
if it satisfies Positivity-2 and Relative Additivity.
Proposition 4 allows the researcher to verify whether the decision maker’s choice
aligns with the elimination of aspects model. The proof of Proposition 4 follows from
the characterization of μRCG in Proposition 2.
We complete this section by commenting on the exogeneity assumption of at
tributes in EBA. The model assumes that attributes are exogenously given and ob
served by the outside analyst. Such an assumption can be overly restrictive in certain
contexts, as the outside analyst may not directly observe the attributes. Hence, relax
ing the exogeneity assumption by endogenizing attributes can improve the practical
relevance of the model. Additionally, it allows us to compare EBA to other models
that do not have attributes in the choice environment.
To investigate the EBA model when attributes are endogenous, we first define an
endogenous EBA model in Definition 1.
15

Definition 1 (Endogenous EBA). μ has an endogenous EBA representation if there
exists a finite collection of attributes {i, j, k, . . . }, with each option having at least
one attribute, such that μ has an EBA representation with {i, j, k, . . . } being the set
of attributes.
Note that as the attributes in the ordinary sense are not observed, the term
attributes in Definition 1 does not possess a specific meaning beyond functioning as a
label. In particular, the outside analyst can define artificial aspects {i, j, k, . . . } and
the associated set of options Ai possessing attribute i to test whether the dataset
adheres to the elimination of the defined artificial aspects.
In environments where attributes are endogenous, Remark 2 shows that EBA and
RCG are equivalent. Note that when attributes are observable, Remark 1 states that
EBA is strictly nested in RCG, with the strictness coming from the exogeneity of
attributes. Endogenizing the attributes eliminates the condition imposed by their
exogeneity; hence, EBA corresponds to RCG without this additional restriction.
Remark 2. μ has an endogenous (static) EBA representation if and only if it has
an RCG representation.
Together with Proposition 2, Remark 2 implies that verifying Positivity-1 and
Relative Additivity is sufficient to determine whether the decision maker’s choice
adheres to the one-time elimination of aspects, where the aspects can be defined
arbitrarily by the analyst.
2.5.2 Salience of Alternatives
Many studies in psychology and economics have documented that the decision maker’s
behaviors often depend on what she perceives as a reference point (Samuelson and
Zeckhauser, 1988; Knetsch, 1989; Kahneman, 1992).9 There are two main views
on modeling these reference-dependent behaviors. The first view assumes that the
reference point directly impacts the DM’s evaluation and explicitly incorporates the
reference point into the DM’s utility function. In the second view, the reference point
does not affect the DM’s utility function but rather influences what the DM perceives
and is willing to select.10
9Reference points can be default options, initial endowments, entitlements, or past choices. 10Note that the two views are not mutually exclusive.
16

The Random Reference Model (RRM) in this section adopts the second view
above and is based on Masatlioglu and Ok (2014) and Kibris et al. (2024). There
exist multiple reference points. The reference point is endogenously determined by a
random process. The RRM restricts the reference point to be an option within the
choice set, i.e., a reference point must be a feasible alternative. Each option x ∈ X
has an associated value sx > 0, which may represent its salience, value, or importance.
The probability of an option being the reference point depends on its salience relative
to the total salience of all feasible alternatives. Given choice set S, option x ∈ S is the
reference point with probability sx
∑
y∈S sy . When alternative x serves as the reference
point, it imposes a constraint on the DM through a constraint set Q(x) ⊆ X. The set
Q(x) is interpreted as the collection of options that are appealing from the perspective
of x. It may correspond to the set of options that x reminds the decision maker of,
the set of options that are similar to x, or the set of options that are unambiguously
better than x. Options that are not appealing from the perspective of x fail to receive
attention. The DM selects all feasible alternatives within her constraint set. Given
choice set S, the probability of choosing a non-empty T ⊆ S is defined as
μRRM(T, S) = ∑
x∈S
sx
∑
y∈S sy
1(T = Q(x) ∩ S) for all non-empty T ⊆ S. (2)
In the supermarket assortment choice example, the reference point x may represent
a product currently in high demand, and the constraint set associated with x, Q(x),
may include complementary items or products frequently purchased together with
x. In the case of Japanese vending machines, as the machine can scan the current
customer’s face and recall similar past customers from its database, the reference point
x may represent the most similar past purchase. The set Q(x) may then represent
the collection of drinks similar to x.
Regarding the constraint set, Masatlioglu and Ok (2014) assume that each option
must be appealing from the perspective of itself, i.e., each alternative x is always
included in its constraint set Q(x). This property is related to experimental findings
that one alternative becomes more desirable when it serves as the reference point
(Knetsch, 1989). We further assume that the constraint sets associated with two
different options are distinct: Q(x) ̸= Q(y) when x ̸= y. This assumption allows the
decision maker to possibly make different choices under two reference points, even
when they are equally salient. The property is related to an experimental finding that
17

individuals often exhibit distinct behaviors under different reference points (Sullivan
and Kida, 1995; Lin et al., 2006).
The functional form of μRRM resembles that in both EBA and RCG. All three mod
els formulate the decision maker’s choice as a collection of feasible options satisfying
certain properties. In EBA, these options possess the salient attribute. In RCG, they
fall into the same category. In RRM, they belong to a constraint set imposed by the
salient alternative (the reference point). Given the similarities in how the three mod
els formalize choices, as we will show, all behavioral postulates in RRM are connected
to those in EBA and RCG. However, the conditions imposed on the constraint sets
and the feasibility of the reference point distinguish RRM from EBA and RCG.11
To provide a characterization of μRRM, we adopt a revealed constraint approach.
We first assume that μ has an RRM representation and identify the constraint sets
from μ. We subsequently utilize the identified constraint sets in behavioral postulates.
Identifying the constraint sets uses choice probabilities from binary choice sets. Table
2 presents the probabilities of choosing different collections at choice set {x, y} under
four possible scenarios regarding the constraint sets.
Scenarios μRRM({x, y}, {x, y}) μRRM({x}, {x, y}) μRRM({y}, {x, y}) x ∈ Q(y) and y ∈ Q(x) 1 0 0 x ̸∈ Q(y) and y ̸∈ Q(x) 0 sx
sx+sy
sy sx+sy
x ̸∈ Q(y) and y ∈ Q(x) sx
sx+sy 0 sy
sx+sy
x ∈ Q(y) and y ̸∈ Q(x) sy
sx+sy
sx
sx+sy 0
Table 2: Probabilities of choosing different collections in choice set {x, y} in RRM
Suppose μ has an RRM representation. From Table 2, it is immediate that y
belongs to the constraint set associated with x if and only if the DM selects the
singleton set {x} from binary choice set {x, y} with zero probability. To understand
why this property holds under the RRM, regarding the if part, note that if y ̸∈
Q(x), then the DM chooses {x} from choice set {x, y} when the reference point
is x. This implies that μ({x}, {x, y}) > 0, which contradicts the assumption that
μ({x}, {x, y}) = 0. For the only-if part, by definition of the RRM, the DM chooses
Q(x) ∩ {x, y} or Q(y) ∩ {x, y} when x or y serves as the reference point, respectively.
11In Section 3, we show that RRM and RCG intersect only in a particular case where the decision maker always selects singleton sets.
18

The assumption that y ∈ Q(x) implies y ∈ Q(x) ∩ {x, y} and the fact that y is
included in its constraint set implies y ∈ Q(y) ∩ {x, y}. Hence, regardless of which
option serves as the reference point, the DM never chooses {x}. It follows that the
choice probability of {x} in choice set {x, y} must be equal to 0.
To formalize the observation above, define the revealed constraint function QR : X →
X as follows. For each x ∈ X, QR(x) includes x and all options y ̸= x for which
μ({x}, {x, y}) = 0. Mathematically,
QR(x) = {x} ∪ {y : y ∈ X, y ̸= x such that μ({x}, {x, y}) = 0} for all x ∈ X.
The revealed constraint function QR corresponds to the underlying constraint function
if μ has an RRM representation.
We are now ready to state the behavioral postulates of RRM. The first axiom
(Axiom 5) follows from the assumption that the constraint sets associated with two
different alternatives are distinct.
Axiom 5 (Distinct Constraint Sets). QR(x) ̸= QR(y) when x ̸= y.
The second and third axioms (Axioms 6 and 7) are relatively similar to those in
EBA and RCG, which follow from the similarity in the formulation of μ across the
three models.
Axiom 6 states that the DM chooses a collection T with a positive probability if
and only if there exists a reference point x such that T is identical to the collection
of all feasible alternatives that belong to the constraint set associated with x. Axiom
6 is a direct consequence of the definition of RRM. Compared to RCG and EBA
models, Axiom 6 is similar to Axiom 2 and Axiom 4.
Axiom 6 (Positivity-3). For all non-empty T ⊆ S, μ(T, S) > 0 if and only if there
exists some x ∈ S such that T = QR(x) ∩ S.
Axiom 7 below is a slightly modified variant of Relative Additivity in EBA and
RCG models.
Axiom 7 (Relative Additivity-1). For all non-empty T, T ′ ⊆ S \ x and x ∈ S such
that T, T ′ ̸= QR(x) ∩ (S \ x)
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T, S) + μ(T ∪ x, S)].
19

Axiom 7 deviates from the original Relative Additivity by narrowing down its
applicability through explicitly requiring T, T ′ to satisfy an additional condition:
T, T ′ ̸= QR(x) ∩ (S \ x). This additional constraint arises from the assumption
that the reference point must be feasible and included in the associated constraint
set. Specifically, the RRM allows x to be a reference point under choice set S ∋ x,
but it cannot be the reference point under S \ x because x is no longer available.
To understand how this assumption affects Relative Additivity, consider a scenario
where T = QR(x) ∩ (S \ x), so the condition in Axiom 7 fails to hold. It follows that
T ∪ x = QR(x) ∩ S because x ∈ QR(x). Consequently, the reference point x influences
the probability of choosing T ∪ x under S. However, there are no similar impacts
under the choice set S \ x because x cannot serve as a reference point when it is no
longer feasible. Hence, Relative Additivity fails to hold, and that explains why the
condition T, T ′ ̸= QR(x) ∩ (S \ x) is present in Axiom 7.
The next behavioral postulate imposes a restriction on μ when T = QR(x)∩(S\x),
a case not covered by Axiom 7. It is also a variant of Relative Additivity.
Axiom 8 (Relative Additivity-2). Suppose x ∈ S and T = QR(x) ∩ (S \ x) is nonempty. For all non-empty T ′ ⊆ S \ x such that T ′ ̸= T
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)
[
μ(T, S) + μ(T ∪ x, S) − μ(QR(x), X)
∑
y∈S μ(QR(y), X)
} {{ }
adjustment term
]
. (3)
Axiom 8 primarily differs from the original Relative Additivity and Axiom 7
through the inclusion of an additional term, − μ(QR(x),X)
∑
y∈S μ(QR(y),X) , on the right-hand side
of equation (3). This adjustment term, in absolute value, represents the probability
of x being the reference point under S, given that the salience of x is identified as
sx = μ(QR(x), X). Including this adjustment term, as in Axiom 8, neutralizes the
influence of x on the choice probability of T ∪ x when serving as the reference point
at S.
We are now ready to state a characterization of RRM.
Proposition 5 (Characterization of RRM). μ has an RRM representation if and
only if it satisfies Axioms 5-8.
Proposition 5 provides the analyst with a practical means to test whether μ has an
RRM representation by validating four simple conditions. The proof of Proposition 5
20

proceeds as follows. We first define the constraint function Q as the revealed constraint
function QR and the salience of option x as sx = μ(QR(x), X). Axioms 5 and 6
guarantee that {Q(x)}x and {sx}x are well defined. We subsequently show that μ
has an RRM representation given the defined constraint sets and salience parameters.
The proof uses induction based on the number of alternatives in the choice set. The
proof of Proposition 5 also provides a useful identification result, demonstrating that
the constraint function is uniquely identified, and the salience parameters are unique
up to uniform scaling.
2.5.3 Salience of Nests
Nested logit is one of the most common parametric frameworks for analyzing prob
abilistic choice. Kovach and Tserenjigmid (2022) generalize the nested logit model
by introducing a Nested Stochastic Choice (NSC).12 In an NSC, there exist pairwise
disjoint nests N1, N2, . . . , Nq (q ≥ 1) that partition the grand set. Each nest repre
sents a collection of alternatives sharing some common characteristics. Every nest
has an associated value. The DM first draws a salient nest and subsequently selects
a collection comprising all feasible options within the salient nest. The DM’s choice
over nests is governed by a Luce formula through a weighting (or salience) function
σ : X → R+. The function σ assigns a weight σ(T ) to each collection T , where
the weight σ(T ) may represent the salience, value, or importance of T . Kovach and
Tserenjigmid (2022) further assume that σ(∅) = 0 and σ(T ) > 0 whenever T ̸= ∅.
Given choice set S, the probability of choosing a non-empty T ⊆ S is defined as
μNSC(T, S) =
q
∑
i=1
σ(Ni ∩ S)
∑q
j=1 σ(Nj ∩ S) 1(T = Ni ∩ S) for all non-empty T ⊆ S. (4)
In the supermarket assortment choice example, each nest may represent a distinct
product category, such as meat, fish, frozen vegetables, or dairy, while σ(T ) may
indicate the sales of the items in T . In the Japanese vending machine context, each
nest may correspond to a specific product brand, such as Coke or 7UP, with σ(T )
denoting the within-day revenue of drinks in T .
The formulation of μ in equation (4) looks similar to that in EBA, RCG, or RRM.
As each nest in NSC is a collection of alternatives, the notion of a salient nest in NSC
is conceptually comparable to the notions of a category in RCG, a set of options
12See Appendix A.3 for the relationship among nested logit and other models in our framework.
21

possessing a specific attribute in EBA, or a constraint set in RRM. The primary
distinction between NSC and these three models lies in how the weighting functions
impact choice probabilities. In NSC, the probability of choosing a collection depends
on the collection’s salience value, as σ(T ) explicitly appears in μNSC(T, S). In contrast,
in EBA, RCG, or RRM, the probability of selecting a collection is independent of
its salience, properties, or structure. Instead, this probability depends on category
specific weight (in RCG), attribute-specific weight (in EBA), or item-specific weight
(in RRM). More generally, EBA, RCG, and RRM exhibit an independence structure
between what is chosen and how its probability is assigned. Meanwhile, in NSC, such
an independence structure is absent. As we will show in Section 3, this fundamental
distinction sets NSC apart from the other three models.
Because of the way in which the probability of choosing a collection is assigned,
NSC is behaviorally closest to the Logit model of Brady and Rehbeck (2016). Intu
itively, this similarity arises from the fact that Brady and Rehbeck (2016) adopt a logit
functional form, whereas NSC is a generalization of the nested logit. In Section 2.2,
we showed that a full-support Logit μ is characterized by IIS (Axiom 1). The primary
behavioral postulate in NSC, Path-Independence of Irrelevant Sets (PIIS, Axiom 9),
is conceptually analogous to IIS. Broadly speaking, PIIS states that μ(T,S)
μ(T ∗,S)
μ(T ∗,S′)
μ(T ′,S′) is
independent of the collection T ∗ (the “path”) and choice sets S, S′ whenever the two
ratios are well defined and positive.
Axiom 9 (Path-Independence of Irrelevant Sets, PIIS). For arbitrary T and T ′,
μ(T, S)
μ(T ∗, S)
μ(T ∗, S′)
μ(T ′, S′) is independent of the choice of (T ∗, S, S′)
as long as the two ratios are well defined and positive.
PIIS constitutes a generalization of IIS. To elaborate, whenever two collections
T and T ′ are selected with strictly positive probabilities in both choice sets S and
S′, applying PIIS with (T ∗, S, S′) = (T, S, S′) and (T ∗, S, S′) = (T ′, S, S′) yields IIS.
This scenario, however, does not always occur in the NSC model because the decision
maker may choose certain collections with zero probability. Consequently, PIIS can
be interpreted as a generalization of IIS that accommodates situations where μ does
not have full support.
Besides PIIS, characterizing NSC requires two additional behavioral postulates
22

(Axioms 10-11). Axiom 10 follows from the partition structure of the nests in the
model’s definition. Given observed data on μ, let N R
1 ,NR
2 ,...,NR
q be all pairwise
distinct collections selected with positive probability in the grand set (q ≥ 1). These
collections are the revealed nests, i.e., the underlying nests if μ has an NSC repre
sentation. Axiom 10 states that these revealed nests form a partition of the grand
set.
Axiom 10 (Partition). N R
i ∩ NR
j = ∅ for all i, j such that i ̸= j. Furthermore,
⋃q
i=1 N R
i = X.
Axiom 11, presented below, is similar to Positivity-1 (Axiom 2) in RCG, Positivity
2 (Axiom 4) in EBA, or Positivity-3 (Axiom 6) in RRM. Axiom 11 states that the DM
chooses a collection with a strictly positive probability if and only if it corresponds
to the set of feasible options within some revealed nest. This behavioral postulate is
also a consequence of the model’s definition.
Axiom 11 (Positivity-4). For all non-empty T ⊆ S, μ(T, S) > 0 if and only if there
exists some i such that T = N R
i ∩ S.
We are now ready to state a characterization of NSC. Proposition 6 establishes
that NSC is characterized by Axioms 9-11.
Proposition 6 (Characterization of NSC). μ has an NSC representation if and only
if it satisfies Axioms 9-11.
Proposition 6 implies that determining whether μ has an NSC representation is
equivalent to testing whether it satisfies three conditions in Axioms 9-11. The proof
of sufficiency in Proposition 6 proceeds as follows. Define the nests as the revealed
nests. Obtaining an NSC representation is trivial when there is only one revealed nest.
When at least two distinct revealed nests exist, we construct the weighting function
σ using a cross-nest strategy. Fix two arbitrary options in two different revealed
nests: x1 ∈ N R
1 and x2 ∈ N R
2 . Assign σ({x1}) = 1 and let σ({x2}) = μ({x2},{x1,x2})
μ({x1},{x1,x2}) .
When T and {x1} are in different revealed nests, define σ(T ) through σ({x1}) by
setting σ(T ) = μ(T,T ∪x1)
μ({x1},T ∪x1) σ({x1}). When T and {x1} are in the same revealed nest,
we use the fact that T and {x2} are in two different nests and define σ(T ) through
σ({x2}) by setting σ(T ) = μ(T,T ∪x2)
μ({x2},T ∪x2) σ({x2}). Using Axioms 9-11, we prove that
the σ function is well defined and that μ has an NSC representation given σ and
23

the revealed nests. The proof of Proposition 6 also indicates that if μ has an NSC
representation, then the nests can be uniquely identified and the weighting function
is unique up to uniform scaling.
3 Relationship Between Models
In this section, we investigate the relationship between various models of μ studied in
Section 2. We first define three particular cases of μ. In Definition 2, we say that μ
is deterministic-with-full-choice if the decision maker selects everything in the choice
set with certainty. In the consideration set literature, this specification of μ is often
referred to as full attention.
Definition 2. μ is deterministic-with-full-choice if μ(S, S) = 1 for all non-empty
S ⊆ X.
In Definition 3 below, we introduce a singleton representation of μ. Under a
singleton-μ, the DM chooses a collection with positive probability if and only if it
contains only one option (part (i)). Additionally, the relative choice probabilities
are independent of the choice set (part (ii)). Note that the singleton-μ and the
Luce model in the probabilistic choice literature are distinct, as they operate in two
different domains. However, one can obtain the Luce model from a singleton-μ by
appropriately defining choice probabilities.13
Definition 3 (Singleton-μ). μ admits a singleton representation if
(i) μ({x}, S) > 0 for all x ∈ S, for all S ⊆ X, and μ(T, S) = 0 whenever |T | ≥ 2;
(ii) μ({x},S)
μ({y},S) = μ({x},S′)
μ({y},S′) for all S, S′ ⊇ {x, y}.
Definition 4 below presents a particular case of the NSC model, called nest
invariant μ, where the weighting function remains constant within the same nest:
σ(T ) = σ(T ′) whenever T, T ′ ̸= ∅ and T, T ′ ⊆ Ni for some i. This scenario may
correspond to an environment where every collection of items within the same nest
is equally salient, or to a decision maker who values such collections equally.
Definition 4 (Nest-invariant μ). μ has a nest-invariant representation if μ has an
NSC representation with a nest-invariant weighting function.
13To elaborate, suppose μ has a singleton representation. Let ρ : X × X → [0, 1] be a stochastic choice function. For all non-empty S ⊆ X, define ρ(x, S) = 0 if x ̸∈ S and ρ(x, S) = μ({x}, S) if x ∈ S. It is straightforward to verify that ρ has a Luce representation.
24

The nest-invariant μ encompasses both the deterministic-with-full-choice-μ and
the singleton-μ as special cases. Specifically, the deterministic-with-full-choice μ cor
responds to a nest-invariant μ wherein there exists a single nest that is identical to
the grand set. Meanwhile, the singleton-μ is equivalent to a nest-invariant μ where
there are |X| nests, each consisting of a distinct option.
Although the nest-invariant μ is defined in terms of the model’s unobserved primi
tive (the weighting function), it can also be characterized solely by the observed data.
The nest-invariant μ satisfies a property called the probabilistic attention filter. This
property specifies conditions under which adding a new item to the choice set does
not affect the choice probabilities of a collection chosen initially. It is a generalization
of the attention filter condition studied in Masatlioglu et al. (2012) to a probabilistic
setting.14
Definition 5 (Probabilistic attention filter). Take x ∈ S and non-empty T ⊆ S \ x.
Then μ(T, S) = μ(T, S \ x) if μ({x}, S) = 0, μ(T, S) > 0, and μ(T, S \ x) > 0.
To understand the probabilistic attention filter property, consider a scenario where
the initial choice set is S \ x and T ̸= ∅ is the chosen collection, which implies that
μ(T, S \ x) > 0. The property states that adding x to the choice set does not
impact the choice probability of T provided that two conditions are satisfied: (i) {x}
is not selected in the expanded choice set, and (ii) T is still chosen with positive
probability in the expanded choice set. Intuitively, these conditions ensure that the
introduction of x does not shift the decision maker’s focus away from T ; hence, the
choice probability of T remains unchanged. We will show in Proposition 8 that the
nest-invariant μ is equivalent to an NSC that satisfies the probabilistic attention filter
condition. Consequently, the nest-invariant μ is characterized by three axioms in the
NSC model (Axioms 9-11) along with the probabilistic attention filter property.
We are now ready to provide the connections between different models of μ.
Relationship between Logit, IC, and other models. As mentioned earlier in
the discussion following Proposition 3, the intersection of Logit and RCG is identical
to IC. Additionally, Remark 2 states that RCG and endogenous (static) EBA are
equivalent. Therefore, the intersection of Logit and endogenous EBA is also identical
14The deterministic attention filter condition states that choice is unaffected by an overlooked alternative: Γ(S) = Γ(S \ x) if x ∈ S \ Γ(S) and x ∈ S. Here, Γ(S) denotes the (deterministic) chosen collection from choice set S.
25

to IC. This result implies that the intersection of two models of μ that have proven
useful in capturing individuals’ behavior has its own distinct appeal.
Regarding other formulations of μ, note that Logit requires μ to have full support.
In both RRM and NSC, this full-support condition fails to hold, as the DM always
chooses some collections with zero probability. For instance, in NSC, two distinct
and overlapping collections cannot be selected with positive probability from the
same choice set. Consequently, Logit μ is disjoint from RRM and NSC. Additionally,
since IC is nested in Logit following Propositions 1-3, IC is also disjoint from RRM
and NSC. These results are stated in Remark 3.
Remark 3 (Logit, IC, and other models). Suppose μ has an RRM or NSC represen
tation. Then it does not have a Logit or an IC representation.
Relationship between RRM and other models. Proposition 7 below summa
rizes the connections between RRM and other formulations of μ. It establishes that
RRM is sharply distinct from these models, as RRM intersects other models only in
a particular case where μ has a singleton representation.
Proposition 7 (RRM and other models). The following are equivalent:
(i) μ has a singleton representation
(ii) μ has both RRM and endogenous EBA (or RCG) representations
(iii) μ has both RRM and NSC representations.
Two comments follow from Proposition 7. First, although conceptually similar in
terms of the underlying choice procedure and behavioral postulates, RRM intersects
endogenous EBA (or RCG) only in a particular case when μ has a singleton represen
tation. The strong distinction between RRM and these two models primarily comes
from the restrictions imposed on the reference points and constraint sets in RRM.
When these restrictions are relaxed, the intersection of these models enlarges.
Second, Proposition 7 implies that RRM and NSC intersect when the constraint
sets in RRM and the collection of nests in NSC share a common structure. Specifically,
in the RRM, each constraint set must consist of a single option. Similarly, each
nest in the NSC model also comprises only one alternative. Consequently, at the
intersection of RRM and NSC, there is a one-to-one mapping that links each nest
to an identical constraint set. To understand why this result holds, note that, by
definition, μ({x}, S) > 0 for all x and S ∋ x when μ has a singleton representation.
26

On the one hand, in RRM, the constraint set associated with option x cannot include
another alternative y ̸= x. Otherwise, it follows from Table 2 (see Section 2.5.2) that
μ({x}, {x, y}) = 0, which contradicts the definition of a singleton-μ. On the other
hand, in NSC, if there exists a nest Ni consisting of at least two distinct alternatives
x and y, the DM will select {x} with zero probability at choice set {x, y}, which also
contradicts the singleton-μ definition.
Relationship between NSC and other models. Proposition 8 below summarizes
the connections between NSC and other formulations of μ. The link between NSC
and RRM is omitted as it is detailed in Proposition 7. Overall, Proposition 8 indicates
that NSC is more closely aligned with other models than RRM, as the intersection of
NSC and a given model always nests the intersection of RRM and that model.
Proposition 8 (NSC and other models). The following are equivalent:
(i) μ has a nest-invariant representation
(ii) μ has NSC and endogenous EBA (or RCG) representations
(iii) μ has an NSC representation and satisfies the probabilistic attention filter prop
erty.
Two remarks are in order. First, note that nest-invariant μ includes deterministic
with-full-choice-μ and singleton-μ as two particular cases. Consequently, Proposition
8 implies that the intersection of NSC and endogenous EBA (or RCG) nests the
intersection of NSC and RRM (see also Proposition 7). Second, at the intersection of
NSC and endogenous EBA, the attributes in the EBA model are mutually exclusive,
meaning that each option has exactly one attribute. Similarly, at the intersection of
NSC and RCG, the categories in RCG are necessarily non-overlapping. These results
follow directly from the partition structure of the collection of nests in the NSC model.
In summary, by combining the results in Propositions 1-3, Propositions 7-8, Re
marks 2-3, and Corollary 2, we establish the connections among all models of μ
examined in the paper (see Figure 1 for their relationships).
4 Related Literature
Our paper builds on the existing literature on random consideration set formation,
pioneered by Manzini and Mariotti (2014) and Cattaneo et al. (2020), among others.
Our work contributes to this literature by demonstrating the link between various
27

parametric models of random consideration set formation and by offering a practical
tool, based on behavioral postulates, to test and potentially falsify these models.
As the μ object studied in the paper is a stochastic choice correspondence, our
work contributes to the literature axiomatizing choice correspondences. Most papers
in this literature focus on deterministic environments.15 Our paper belongs to the
small set of studies axiomatizing stochastic choice correspondences (see also Barber ́a
and Pattanaik (1986)). Additionally, the decision maker in our framework deliber
ately chooses multiple alternatives each time she faces a choice problem. Meanwhile,
the literature on deterministic choice correspondences typically assumes that the DM
selects a single option, and a choice correspondence arises from factors such as indif
ference, incompleteness, multiple preferences (Rubinstein, 2012; Balakrishnan et al.,
2022), or frames (Salant and Rubinstein, 2008).
The work closest to ours is Kovach and Suleymanov (2023). Their paper assumes
that a reference point affects the formation of μ and interprets μ as a distribution of
consideration sets. Their focus differs fundamentally from ours: we investigate choices
that involve selecting multiple options, whereas their study analyzes how reference
dependent attention affects the choice probabilities of individual options. Moreover,
their paper does not provide a behavioral characterization of any model of μ examined
in our study.
Another broadly related paper is Manzini et al. (2024), which proposes a model
of approval in which decision makers approve a collection of options for later use
from a ranked list of items. Manzini et al. (2024) introduce a new model rather than
providing a systematic examination of well-known models of μ, as we do. Additionally,
items in our setting are not necessarily ordered.
5 Conclusion
We study choice situations that naturally involve selecting multiple options. We sys
tematically investigate various parametric and stochastic models in the literature by
providing their behavioral foundations and identifying their relationships. Theoreti
cally, our results indicate that popular models, though based on distinct underlying
narratives, share similar behavioral foundations. These theoretical results help the
15Recent studies axiomatize deterministic choice correspondences in different contexts. See, for instance, Aizerman and Aleskerov (1995); Masatlioglu and Ok (2005); Salant and Rubinstein (2008); Stoye (2015), among others.
28

analyst better understand the implications of the functional form assumptions and
distinguish between different models of μ. Empirically, our behavioral postulates fa
cilitate the identification and testing of the choice procedures used by decision makers.
Business managers, for instance, can use our behavioral characterizations to inves
tigate how customers form their consideration sets, which is essential for analyzing
their choices.
References
Aguiar, V. H. (2017): “Random Categorization and Bounded Rationality,” Eco
nomics Letters, 159, 46–52.
Aizerman, M. A. and F. T. Aleskerov (1995): Theory of Choice, vol. 38 of
Studies in Mathematical and Managerial Economics, Amsterdam: North-Holland
/ Elsevier.
Balakrishnan, N., E. A. Ok, and P. Ortoleva (2022): “Inference of Choice
Correspondences,” Working Paper.
Barber ́a, S. and P. K. Pattanaik (1986): “Falmagne and the rationalizability
of stochastic choices in terms of random orderings,” Econometrica: Journal of the
Econometric Society, 707–715.
Brady, R. L. and J. Rehbeck (2016): “Menu-Dependent Stochastic Feasibility,”
Econometrica, 84, 1203–1223.
Cattaneo, M. D., X. Ma, Y. Masatlioglu, and E. Suleymanov (2020): “A
random attention model,” Journal of Political Economy, 128, 2796–2836.
Ellis, K., E. Filiz-Ozbay, and E. Ozbay (2025): “Consideration and Choice,”
Working Paper.
Gul, F., P. Natenzon, and W. Pesendorfer (2014): “Random Choice as
Behavioral Optimization,” Econometrica, 82, 1873–1912.
Kahneman, D. (1992): “Reference Points, Anchors, Norms, and Mixed Feelings,”
Organizational Behavior and Human Decision Processes, 51, 296–312.
29

Kawaguchi, K., K. Uetake, and Y. Watanabe (2021): “Designing context
based marketing: Product recommendations under time pressure,” Management
Science, 67, 5642–5659.
Kibris,  ̈O., Y. Masatlioglu, and E. Suleymanov (2024): “A Random Refer
ence Model,” American Economic Journal: Microeconomics, 16, 155–209.
Knetsch, L. (1989): “The Endowment Effect and Evidence of Nonreversible Indif
ference Curves,” American Economic Review, 79, 1277–1284.
Kovach, M. and E. Suleymanov (2023): “Reference dependence and random
attention,” Journal of Economic Behavior & Organization, 215, 421–441.
Kovach, M. and G. Tserenjigmid (2022): “Behavioral foundations of nested
stochastic choice and nested logit,” Journal of Political Economy, 130, 2411–2461.
Lin, C.-H., W.-H. Huang, and M. Zeelenberg (2006): “Multiple reference
points in investor regret,” Journal of Economic Psychology, 27, 781–792.
Luce, R. D. (1959): Individual choice behavior, Wiley, New York.
Ma, W. (2023): “When is assortment optimization optimal?” Management Science,
69, 2088–2105.
Manzini, P. and M. Mariotti (2014): “Stochastic Choice and Consideration
Sets,” Econometrica, 82, 1153–1176.
Manzini, P., M. Mariotti, and L. U ̈ lku ̈ (2024): “A model of approval with an
application to list design,” Journal of Economic Theory, 217, 105821.
Masatlioglu, Y., D. Nakajima, and E. Y. Ozbay (2012): “Revealed Atten
tion,” American Economic Review, 102, 2183–2205.
Masatlioglu, Y. and E. A. Ok (2005): “Rational Choice with Status Quo Bias,”
Journal of Economic Theory, 121, 1–29.
——— (2014): “A Canonical Model of Choice with Initial Endowments,” Review of
Economic Studies, 81, 851–883.
30

McFadden, D. (1978): “Modelling the choice of residential location,” in Spatial
Interaction Theory and Planning Models, ed. by A. Karlqvist and J. W., North
Holland.
Rubinstein, A. (2012): Lecture notes in microeconomic theory: the economic agent,
Princeton University Press.
Salant, Y. and A. Rubinstein (2008): “(A, f): Choice with Frames,” Review of
Economic Studies, 75, 1287–1296.
Samuelson, W. and R. Zeckhauser (1988): “Status Quo Bias in Decision Mak
ing,” Journal of Risk and Uncertainty, 1, 7–59.
Stoye, J. (2015): “Choice theory when agents can randomize,” Journal of Economic
Theory, 155, 131–151.
Sullivan, K. and T. Kida (1995): “The effect of multiple reference points and prior
gains and losses on managers’ risky decision making,” Organizational Behavior and
Human Decision Processes, 64, 76–83.
Tversky, A. (1972): “Elimination by aspects,” Psychological Review, 79, 281–299.
31

Appendix A Additional Models
A.1 Logit, RCG, and IC with empty chosen collection
In the main body of the paper, we investigated Logit, RCG, and IC under the as
sumption that the chosen collection is non-empty. In this section, we relax this
assumption and provide characterizations for the three models when the chosen col
lection is allowed to be empty. We add a superscript o to the names of these models
to differentiate them from the models studied in the main body of the paper. Table
3 provides the functional forms of the three models when the chosen collection can
be empty.
Models Functional forms when the chosen collection can be empty
Logito μo
LG(T, S) = π(T )
∑
T ′:T ′⊆S π(T ′) for all T ⊆ S
RCGo μo
RCG(T, S) = ∑
C m(C)1(T = S ∩ C) for all T ⊆ S
ICo μo
IC(T, S) = ∏
x∈T γ(x) ∏
y∈S\T (1 − γ(y)) for all T ⊆ S
Table 3: Logit, RCG, and IC with empty chosen collections
Characterization of RCGo. Under the new assumption that the chosen collection
can be empty, RCGo is characterized by a single behavioral postulate, Additivity
(Axiom 12). Additivity states that removing an alternative x from the choice set
increases the choice probability of any collection T that excludes x, with the increase
being precisely equal to the likelihood that T ∪x is the chosen collection in the original
choice set.
Axiom 12 (Additivity). For all x, T, S such that x ∈ S and T ⊆ S \ x
μ(T, S \ x) − μ(T, S) = μ(T ∪ x, S).
Note that Additivity implies Relative Additivity (Axiom 3) and is therefore more
restrictive. To elaborate, Additivity implies μ(T, S \ x) = μ(T, S) + μ(T ∪ x, S) and
μ(T ′, S) + μ(T ′ ∪ x, S) = μ(T ′, S \ x). Multiplying these two equations yields Relative
Additivity.
Proposition 9 establishes that Additivity characterizes the RCGo model.
32

Proposition 9 (Characterization of RCGo). μ has an RCGo representation if and
only if it satisfies Additivity.
Characterization of ICo. With regard to the ICo model, Proposition 10 establishes
that a full-support μ has an ICo representation if and only if it satisfies IISo and
Additivity. Here, IISo is the variant of IIS (Axiom 1) that allows T to be empty.16
Proposition 10 (Characterization of ICo). A full-support μ has an ICo representa
tion if and only if it satisfies IISo and Additivity.
As in the environment where the chosen collection must be non-empty, Proposition
10 implies that the ICo model remains equivalent to the intersection of the Logito and
RCGo models. This result is stated in Corollary 1.
Corollary 1. Suppose μ has full support. The following are equivalent:
(i) μ has an ICo representation
(ii) μ has Logito and RCGo representations.
A.2 Attribute Rule
In a framework related to the original EBA model, Gul et al. (2014) introduce an
Attribute Rule model to study choice situations where the decision maker selects a
single option. In an Attribute Rule (AR), the DM first picks an attribute according
to a logit formula and subsequently chooses an alternative possessing that attribute
according to another logit formula. Let B(S) represent the set of all attributes that
are possessed by at least one element in S. The probability of choosing an option x
from S ∋ x is denoted as pAR(x, S) and is given by
pAR(x, S) = ∑
i∈B(S)
θi
∑
j∈B(S) θj
ηi
x
∑
y∈S ηiy
for all x ∈ S.
In the formulation of pAR(x, S), function θ governs the choice of attributes and maps
attributes to R++. Meanwhile, function η governs the choice of options and maps a
pair of an attribute and an option possessing that attribute to the natural numbers,
with ηi
x = 0 if option x does not have attribute i.
16Formally, IISo states that μ(T, S)/μ(T ′, S) = μ(T, S′)/μ(T ′, S′) for all T, T ′ ⊆ S ∩ S′ whenever the two ratios are well defined. IISo fully characterizes the Logito model when μ has full support. Because the characterization of Logito deviates only slightly from that of Logit, we omit it here for brevity.
33

Let Bi denote the collection of options possessing attribute i. As ηi
x = 0 if x does
not have attribute i, it is the case that ∑
y∈S ηi
y =∑
y∈(Bi∩S) ηi
y. Equivalently,
pAR(x, S) = ∑
i∈B(S)
θi
∑
j∈B(S) θj
ηi
x
∑
y∈(Bi∩S) ηiy
for all x ∈ S.
This reformulation motivates an alternative interpretation of an Attribute Rule as
follows. The decision maker first draws an attribute i with probability θi
∑
j∈B(S) θj .
The DM then pays attention only to feasible options possessing that attribute, which
is the set T = Bi ∩ S. Finally, the DM picks an option x from T with probability
proportional to its value on attribute i. Based on this alternative interpretation of
the AR model, we can reformulate it as a two-stage decision-making process. In the
first stage the DM chooses a collection T from the choice set S; in the second stage
she selects an option from T as the final choice.
Mathematically, let IT = {i : i ∈ B(S) such that T = Bi ∩ S} denote the set of
attributes that induce collection T to be chosen in the first stage. The probability of
choosing T from choice set S equals the total weight of all attributes i in IT , divided
by the total weight of all feasible attributes:
μAR(T, S) = ∑
i∈IT
θi
∑
j∈B(S) θj
for all non-empty T ⊆ S. (5)
In the second stage, the DM selects x from T with probability ρS(x|T ), defined
as
ρS(x|T ) = Ei∈IT [Pr(x|T, i)] = ∑
i∈IT
[Pr(i|T ) · Pr(x|T, i)].
Here, Ei∈IT denotes expectation over i ∈ IT . Term Pr(x|T, i) denotes the probability
that an option x is chosen from T based on its value on attribute i and is given by
Pr(x|T, i) = ηix
∑
y∈T ηiy
. Meanwhile, Pr(i|T ) represents the probability that attribute
i induced collection T to be chosen in the first stage. This probability is given by
Pr(i|T ) = θi
∑
j∈IT θj . Note that ρS(x|T ) generally depends on S as the set IT depends
on S; we therefore make the subscript S explicit in ρS(x|T ).
It is straightforward to verify that, for each non-empty S ⊆ X and each non-empty
34

T ⊆ S, ρS(.|T ) constitutes a probability distribution over T , and that
pAR(x, S) = ∑
T : T ⊆S,T ̸=∅
μAR(T, S) · ρS(x|T ) for all x ∈ S, for all S ⊆ X.
We say that μ has an AR representation if it has the form given in equation (5), i.e., if
it corresponds to the first stage of the choice procedure in an AR after reformulation.
Note that the functional forms of μEBA in equation (1) and μAR in equation (5) are
identical. To see this, define ωi = θi and Ai = Bi for all aspects i. This equates
the two numerators in μEBA and μAR. Regarding the two denominators, note that
Aj ∩ S ̸= ∅ if and only if there is at least one option in S possessing aspect j. This is
equivalent to saying j ∈ B(S). Hence, the formulations of μ in static EBA and AR
are identical. This result is stated in Remark 4.
Remark 4. μ has a static EBA representation if and only if it has an AR represen
tation.
Remark 4 is useful in explaining the differences in the choice probabilities of
individual options between the sequential EBA and AR models, as noted by Gul et al.
(2014). Remark 4 implies that the disparity comes from distinct choice procedures
after the initial collection is selected. Specifically, in an AR, the DM picks an element
from the chosen collection according to a logit formula. Meanwhile, in the sequential
EBA model, the DM keeps eliminating options until only one remains.
A.3 Nested Logit Model
In this section, we introduce the formulation of μ in the nested logit model and present
its connection to other models we investigated. The nested logit is a particular case
of NSC model (Section 2.5.3). Given a choice set S, the probability of choosing a
non-empty T ⊆ S is defined as
μNL(T, S) = σ(Ni ∩ S)
∑q
j=1 σ(Nj ∩ S) 1(T = Ni ∩ S) for all non-empty T ⊆ S,
where (N1, . . . , Nq) is a partition of the grand set and σ is the weighting function.
Nested logit differs from NSC in that there exist η1, . . . , ηq ∈ R++ and a function
v : X → R++ such that σ(Ni ∩ S) =
( ∑
x∈(Ni∩S) v(x)
)ηi for all nest Ni and non-empty
S ⊆ X. The function v represents the DM’s preference over alternatives. Meanwhile,
35

the scalar ηi captures the degree of substitutability or complementarity among ele
ments in nest Ni. As the value of each collection, σ(T ), is increasing in the total
utilities of its elements, ∑
x∈T v(x), the probability of choosing a collection depends
on the DM’s underlying preference over alternatives. The stronger the preference
for elements within the collection, the higher the probability that the collection is
selected.
Corollary 2 describes the relationship between μ in nested logit and the other
models studied in our paper. It shows that nested logit is highly distinct from those
models. The corollary follows from Propositions 7 and 8.
Corollary 2. The following are equivalent:
(i) μ has a singleton representation
(ii) μ has nested logit and RRM representations
(iii) μ has nested logit and endogenous EBA (or RCG) representations.
36

Appendix B Omitted Proofs
Proof of Proposition 1: The necessity is straightforward. We show the sufficiency.
Define π(T ) = μ(T, X) for all non-empty T ⊆ X. As μ has full support, π(T ) > 0
for all non-empty T ⊆ X. By definition, π(T )
π(T ′) = μ(T,X)
μ(T ′,X) for all non-empty T, T ′ ⊆ X.
It immediately follows that π(T )
∑
T ′:∅̸=T ′⊆X π(T ′) = μ(T,X)
∑
T ′:∅̸=T ′⊆X μ(T ′,X) = μ(T , X ) for all non
empty T ⊆ X, where the second equation uses the fact that ∑
T ′:∅̸=T ′⊆X μ(T ′, X) = 1.
Now, consider an arbitrary choice set S ⊂ X such that S ̸= ∅. We have
μ(T, S)
μ(T ′, S) = μ(T, X)
μ(T ′, X) = π(T )
π(T ′) for all non-empty T, T ′ ⊆ S.
The first equation holds because of the IIS axiom. The second equation holds be
cause of the definition of π. It follows from the equation above that μ(T, S) =
μ(T ,S )
∑
T ′:∅̸=T ′⊆S μ(T ′,S) = π(T )
∑
T′:∅̸=T′⊆S π(T ′) . Hence, μ has a Logit representation. This com
pletes our proof of Proposition 1. ■
Proof of Proposition 2: We first state and prove the following Lemma.
Lemma 1. Suppose μ satisfies Positivity-1 and Relative Additivity. Then for all
S ∋ x, |S| ≥ 2, and all non-empty T ⊆ S \ x
(i) μ(T, S \ x) = 0 implies μ(T, S) + μ(T ∪ x, S) = 0
(ii) μ(T, S \ x) > 0 implies μ(T, S) + μ(T ∪ x, S) > 0.
Proof. For part (i), suppose μ(T 1, S \ x) = 0 with T 1 ⊆ S \ x and x ∈ S and T 1 ̸= ∅.
This implies there must exist a non-empty T ′ ⊆ S \ x such that μ(T ′, S \ x) > 0.
Plugging such (T 1, T ′) into Relative Additivity (Axiom 3):
μ(T 1, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T 1, S) + μ(T 1 ∪ x, S)].
The LHS of the equality above is equal to 0 because μ(T 1, S \ x) = 0 by the selection
of T 1. Hence, the RHS of the equality above is also 0. As μ(T ′, S \ x) > 0 by the
selection of T ′, it follows μ(T 1, S) + μ(T 1 ∪ x, S) = 0.
For part (ii), suppose μ(T 2, S \ x) > 0 with T 2 ⊆ S \ x and x ∈ S and T 2 ̸= ∅.
We want to show μ(T 2, S) + μ(T 2 ∪ x, S) > 0. Proof is by a contradiction. Suppose
37

μ(T 2, S) + μ(T 2 ∪ x, S) = 0. Take an arbitrary non-empty T ′′ ⊆ S \ x. Plugging such
(T 2, T ′′) into Relative Additivity (Axiom 3), we have
μ(T 2, S \ x)[μ(T ′′, S) + μ(T ′′ ∪ x, S)] = μ(T ′′, S \ x)[μ(T 2, S) + μ(T 2 ∪ x, S)].
The RHS of the equality above is zero because μ(T 2, S) + μ(T 2 ∪ x, S) = 0 by as
sumption. Hence, the LHS of the equality above must be 0. As μ(T 2, S \ x) > 0, this
implies that μ(T ′′, S) + μ(T ′′ ∪ x, S) = 0. As T ′′ is chosen arbitrarily, this implies
0= ∑
T ′′:∅̸=T ′′⊆S\x
[μ(T ′′, S) + μ(T ′′ ∪ x, S)] = 1 − μ({x}, S).
The second equation comes from the fact that ∑
T :∅̸=T ⊆S μ(T, S) = 1 by the definition
of μ. Note that 1 − μ({x}, S) = 0 implies μ({x}, S) = 1. This contradicts with
Positivity-1 (Axiom 2). To elaborate, consider an arbitrary y ∈ S \ x. Such y exists
because S \ x is non-empty. Then there does not exist a non-empty T ⊆ S with
y ∈ T such that μ(T, S) > 0 because μ({x}, S) = 1 (contradiction). This completes
our proof of Lemma 1.
Back to the main proof of Proposition 2. Suppose μ satisfies Positivity-1 and
Relative Additivity. This implies that for all x ∈ S ⊆ X and T, T ′ ⊆ S \ x such that
T, T ′ ̸= ∅
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T, S) + μ(T ∪ x, S)].
For each category C ∈ X , define m(C) = μ(C, X). By Positivity-1 (Axiom 2), for
every x ∈ X, there exists T ∋ x such that μ(T, X) > 0. It follows that x belongs to
at least one category C with m(C) > 0; the category C can be chosen to be identical
to T . Now, for all non-empty T ⊆ S, we show
μ(T, S) = ∑
C
m(C)1(T = S ∩ C)
∑
C:S∩C̸=∅ m(C) = 1
∑
C:S∩C̸=∅ m(C)
∑
C: C=T ∪A with A⊆X\S
m(C) (6)
by induction based on the number of alternatives in S by “stepping down.”
Step 1: When S = X, by definition μ(T, X) = m(T ) = ∑
C ∈X
m(C)1(T = X∩C). Addi
tionally, note that ∑
C:X∩C̸=∅ m(C) = ∑
C:C⊆X,C̸=∅ m(C) = ∑
C:C⊆X,C̸=∅ μ(C, X) = 1.
38

Hence, μ has the representation at X.
Step 2: Suppose equation (6) holds for all (T, S) such that T ⊆ S, T ̸= ∅, and
|S| = k + 1, k + 2, . . . , |X|. Consider a choice set S with x ∈ S and |S| = k + 1. We
show equation (6) holds at S \ x. For notational simplicity, let βS = ∑
C:S∩C̸=∅ m(C).
Case 2.1: Take non-empty T ⊆ S \ x such that μ(T, S \ x) = 0. It follows from
Lemma 1 that μ(T, S) + μ(T ∪ x, S) = 0. Therefore, we can write μ(T, S \ x) = 0 =
μ(T, S) + μ(T ∪ x, S). This is equivalent to
1
βS
∑
C: C=T ∪A with A⊆X\S
m(C )
} {{ }
μ(T, S)
+1
βS
∑
C: C=(T ∪x)∪A with A⊆X\S
m(C )
} {{ }
μ(T ∪ x, S)
=1
βS


∑
C: C=T ∪A′, A′⊆((X\S)∪x) and x̸∈A′
m(C) + ∑
C: C=T ∪A′, A′⊆((X\S)∪x) and x∈A′
m(C )


=1
βS


∑
C: C=T ∪A′, A′⊆X\(S\x) and x̸∈A′
m(C) + ∑
C: C=T ∪A′, A′⊆X\(S\x) and x∈A′
m(C )


=1
βS


∑
C: C=T ∪A′, A′⊆X\(S\x)
m(C )

= 1
βS\x


∑
C: C=T ∪A′, A′⊆X\(S\x)
m(C )

.
Note that we replace βS by βS\x in the last equation. This does not impact the equality
as the expression inside the big square bracket equals 0 because μ(T, S)+μ(T ∪x, S) =
μ(T, S \ x) = 0 by the selection of T . Hence, equation (6) holds for all non-empty
T ⊆ S \ x such that μ(T, S \ x) = 0.
Case 2.2: Fix a non-empty T ⊆ S \ x such that μ(T, S \ x) > 0. Lemma 1 implies
that μ(T, S) + μ(T ∪ x, S) > 0. Applying Relative Additivity with (T, T ′), where
non-empty T ′ ⊆ S \ x can be chosen arbitrarily, we have
μ(T ′, S \ x)
μ(T, S \ x) = μ(T ′, S) + μ(T ′ ∪ x, S)
μ(T, S) + μ(T ∪ x, S) =
∑
C: C=T ′∪A with A⊆X\(S\x) m(C )
∑
C: C=T ∪A with A⊆X\(S\x) m(C) ,
where the second equation follows a logic similar to that of case 2.1. Take a summation
over all non-empty T ′ ⊆ S \ x
∑
T ′:T ′⊆S\x,T ′̸=∅
μ(T ′, S \ x)
μ(T, S \ x) = ∑
T ′:T ′⊆S\x,T ′̸=∅
∑
C: C=T ′∪A with A⊆X\(S\x) m(C )
∑
C: C=T ∪A with A⊆X\(S\x) m(C)
39

⇔1
μ(T, S \ x) = βS\x
∑
C: C=T ∪A with A⊆X\(S\x) m(C)
⇔ μ(T, S \ x) = 1
βS\x
∑
C: C=T ∪A with A⊆X\(S\x)
m(C ),
where the second equation uses ∑
T ′:T ′⊆S\x,T ′̸=∅ μ(T ′, S \ x) = 1 and the definition of
βS\x
βS\x = ∑ C :(S \x)∩C ̸=∅
m(C) = ∑
T ′: T ′⊆S\x,T ′̸=∅


∑
C: C=T ′∪A with A⊆X\(S\x)
m(C )


Hence, equation (6) holds for all non-empty T ⊆ S \ x such that μ(T, S \ x) > 0. This
completes our proof of Proposition 2. ■
Proof of Proposition 3: The necessity can be easily verified. We show the suf
ficiency. As μ has full support and satisfies IIS, by Proposition 1, we can write
μ(T, S) = π(T )
∑
T′:∅̸=T′⊆S π(T ′) for all non-empty T ⊆ S, where π(T ) = μ(T, X) for all
non-empty T ⊆ X. Applying Relative Additivity (Axiom 3) to this functional form
of μ and note that μ has full support, we have
π(T )
π(T ′) = π(T ) + π(T ∪ x)
π(T ′) + π(T ′ ∪ x) ⇒ π(T ∪ x)
π(T ) = π(T ′ ∪ x)
π(T ′) (7)
for all non-empty T, T ′ ⊆ X such that x ̸∈ T, T ′. Define a function γ : X → (0, 1)
such that γ(x) = π(X)
π(X)+π(X\x) for all x ∈ X. Equivalently, γ(x)
1−γ(x) = π(X)
π(X\x) . We show
π(X )
π(X\T ) = ∏
x∈T
γ(x)
1−γ(x) for all non-empty T ⊆ X such that T ̸= X. Consider some
T = {x1, x2, . . . , xk}, where xi ̸= xj when i ̸= j such that T ̸= X. Let T0 = ∅ and
Ti = {x1, . . . , xi} for i = 1, . . . , k. By definition T = Tk. Equation (7) implies that
π(X \Ti )
π(X\Ti+1) = π(X)
π(X\xi+1) = γ(xi+1)
1−γ(xi+1) , where the second equation comes from the definition
of γ function. Note that π(X)
π(X\T ) = ∏k−1
i=0
π(X \Ti )
π(X\Ti+1) as T0 = ∅ and Tk = T . Hence,
π(X )
π(X\T ) = ∏k−1
i=0
γ(xi+1)
1−γ(xi+1) = ∏
x∈T
γ(x)
1−γ(x) for all non-empty T ⊆ X such that T ̸= X.
Next, we express π(X) in terms of γ. Note that,
∑
T :T ⊆X,T ̸=∅
π(T ) = ∑
T :T ⊆X,T ̸=∅
μ(T, X) = 1.
40

Therefore,
∑
T :T ⊂X,T ̸=∅
π(X \ T )
π(X) = 1 − π(X)
π(X) ⇒ ∑
T :T ⊂X,T ̸=∅
∏
x∈T
1 − γ(x)
γ(x) = 1 − π(X)
π(X) .
This yields π(X) =
∏
x∈X γ(x)
1−∏
x∈X(1−γ(x)) using the binomial-style expansion. Since π(X)
π(X\T ) =
∏
x∈T
γ(x)
1−γ(x) , it follows π(T ) =
∏
x∈T γ(x) ∏
y∈X\T (1−γ(y))
1−∏
x∈X(1−γ(x)) for all non-empty T ⊆ X. Plug
ging this π(T ) into the logit representation of μ gives the IC representation. This
completes our proof of Proposition 3. ■
Proof of Remark 2: First, suppose μ has an RCG representation. We define
artificial aspects based on μ. At the grand set, enumerate all nonempty T with
positive probabilities of being chosen as T1, T2, . . . , TK, where Ti ̸= Tj when i ̸= j.
Define K artificial aspects by calling them aspect 1, aspect 2,. . . , aspect K. Let
the collection of options possessing artificial aspect i, Ai, be Ai = Ti. Let option
x possess attribute i if and only if x ∈ Ai. By definition of the artificial aspects
and the RCG representation of μ, μ satisfies Positivity-2 (Axiom 4). Additionally, μ
satisfies Relative Additivity because it has an RCG representation. It follows from
Proposition 4 that μ has an EBA representation with the aspects we defined, which
implies that it has an endogenous EBA representation.
Now, suppose μ has an endogenous EBA representation. Let {i1, . . . , iM } be the
set of all (artificial) attributes. Let the set of options possessing attribute it be Ait.
Let each category C be a set Ait. We show that μ has an RCG representation with
these categories. First, we show that μ satisfies Positivity-1. By the definition of
endogenous EBA, for an arbitrary option x, there exists attribute ij such that x
possesses attribute ij, i.e., x ∈ Aij . Hence, for each option x the category C = Aij
includes x. This observation, together with the fact that μ satisfies Positivity-2
(because it has an endogenous EBA representation), implies that μ satisfies Positivity
1. Second, by Proposition 4, μ also satisfies Relative Additivity since it has an
endogenous EBA representation. Therefore μ satisfies both Positivity-1 and Relative
Additivity, and it follows from Proposition 2 that μ has an RCG representation. This
completes our proof of Remark 2. ■
Proof of Proposition 5: First, we show the necessity of Axiom 7. The necessity of
Axiom 8 is similar to we omit a formal proof.
41

Necessity of Axiom 7: Suppose μ has an RRM representation with {Q(x)}x and {sx}x
being the constraint sets and salience parameters. Take x ∈ S and T ⊆ S \ x such
that T ̸= ∅. Let
C1 = {y : y ∈ S \ x such that T = Q(y) ∩ (S \ x)}
C2 = {y : y ∈ S such that T = Q(y) ∩ S}
C3 = {y : y ∈ S such that T ∪ x = Q(y) ∩ S}.
Clearly, C2 and C3 are disjoint. Using definitions of C1, C2, C3 and the RRM repre
sentation of μ, we can write
μ(T, S \ x) =
( ∑
z∈S\x
sz
)−1
∑
y
sy1(y ∈ C1)
μ(T, S) =
( ∑
z∈S
sz
)−1
∑
y
sy1(y ∈ C2)
μ(T ∪ x, S) =
( ∑
z∈S
sz
)−1
∑
y
sy1(y ∈ C3).
To show that Axiom 7 is necessary, it is sufficient to show C1 = C2 ∪ C3 when
T ̸= Q(x) ∩ (S \ x) and T is non-empty. We do that in three steps.
Step 1: Take an arbitrary y1 ∈ C1. It follows that y1 ∈ S. If x ̸∈ Q(y1) then
T = Q(y1) ∩ (S \ x) = Q(y1) ∩ S. Consequently, y1 ∈ C2. If x ∈ Q(y1) then
Q(y1) ∩ S = T ∪ x. It follows that y1 ∈ C3. Therefore, for each y1 ∈ C1, either
y1 ∈ C2 or y1 ∈ C3. It follows C1 ⊆ C2 ∪ C3.
Step 2: Take an arbitrary y2 ∈ C2. It follows that y2 ∈ S. First, note that
x ̸∈ Q(y2). This is because if x ∈ Q(y2) then x ∈ Q(y2) ∩ S because x ∈ S. But
then it follows that x ∈ T = Q(y2) ∩ S, which contradicts with T ⊆ S \ x. Second,
x ̸∈ Q(y2) implies that T = Q(y2) ∩ S = Q(y2) ∩ (S \ x). Additionally, x ̸∈ Q(y2)
implies y2 ̸= x because y2 ∈ Q(y2) by assumption. Hence, y2 ∈ C1.
Step 3: Take an arbitrary y3 ∈ C3. It follows that y3 ∈ S. By definition of C3,
the facts that y3 ∈ C3 and T ⊆ S \ x imply that T = Q(y3) ∩ (S \ x). Additionally,
it must be the case that y3 ̸= x. Suppose not and y3 = x. Then it implies that
T = Q(x) ∩ (S \ x), which contradicts the initial assumption that T ̸= Q(x) ∩ (S \ x).
With y3 ̸= x, y3 ∈ S, and T = Q(y3) ∩ (S \ x), it follows that y3 ∈ C1. Combining
42

the three steps, we have C1 = C2 ∪ C3.
The sufficiency part: Suppose μ satisfies Axioms 5-8. We show μ has an RRM repre
sentation. Define the nest Q(x) as the revealed nest QR(x). For each x ∈ X, define
the salience parameter sx = μ(QR(x), X). Note that sx > 0 (because of Axiom 6) and
∑
x∈X sx = 1 because ∑
T :T ⊆X,T ̸=∅ μ(T, X) = 1. We first state and prove the following
Lemma.
Lemma 2. Axiom 6 implies that for all x, T, S with x ∈ S, T ⊆ S \ x, and T ̸= ∅, if
μ(T, S \ x) > 0 then μ(T, S) + μ(T ∪ x, S) > 0.
Proof. Suppose μ(T, S \ x) > 0. Then Axiom 6 implies that there exists y ∈ S \ x
such that T = QR(y) ∩ (S \ x). If x ∈ QR(y) then T ∪ x = QR(y) ∩ S. Therefore,
Axiom 6 implies that μ(T ∪ x, S) > 0. Otherwise, if x ̸∈ QR(y) then T = QR(y) ∩ S.
Axiom 6 then implies that μ(T, S) > 0. In either case, μ(T, S) + μ(T ∪ x, S) > 0.
This completes our proof of Lemma 2.
Back to the main proof of Proposition 5. We show the sufficiency by induction
based on the number of alternatives in S by “stepping down.” Suppose S = X.
First, consider a non-empty T ⊆ X such that μ(T, X) = 0. Axiom 6 implies that
T ̸= QR(x) ∩ X for all x ∈ X. Hence, we can write,
μ(T, X) = 0 = ∑
y∈X
sy
∑
z∈X sz
1(T = QR(y) ∩ X)
Second, consider a non-empty T ⊆ X such that μ(T, X) > 0. Axiom 6 implies that
there is at least one y ∈ X such that T = QR(y) ∩ X = QR(y). Axiom 5 claims that
such y is unique. Hence, μ(T, X) = μ(QR(y), X) = sy = ∑
z∈X sz1(T = QR(z) ∩ X).
The first two equations come from the definition of y and parameters {sz}z∈X. The
last equation comes from the uniqueness of y.
Now, suppose that μ has an RRM representation at all choice sets S with |S| =
k + 1, k + 2, . . . , |X| with k ≥ 2. Take an arbitrary S such that |S| = k + 1. Let x be
an arbitrary element in S. We show that μ also has an RRM representation at S \ x.
First, take a non-empty T ⊆ S \ x such that μ(T, S \ x) = 0. It follows from Axiom
6 that ∄y ∈ S \ x such that T = QR(y) ∩ (S \ x). Hence, we can write
μ(T, S \ x) = 0 =
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x))
∑
z∈S\x sz
.
43

Second, take a non-empty T ⊆ S \ x such that μ(T, S \ x) > 0. Consider the following
cases.
Case 1: Suppose QR(x) ∩ (S \ x) = ∅. In this case, Axiom 7 applies to all T, T ′ ⊆
S \ x such that T, T ′ ̸= ∅. As μ(T, S \ x) > 0, Lemma 2 implies that μ(T, S) + μ(T ∪
x, S) > 0. Hence, for all non-empty T ′ ⊆ S \ x
μ(T ′, S \ x)
μ(T, S \ x) = μ(T ′, S) + μ(T ′ ∪ x, S)
μ(T, S) + μ(T ∪ x, S)
=
∑
y∈S sy1(T ′ = QR(y) ∩ S) + ∑
y∈S sy1(T ′ ∪ x = QR(y) ∩ S)
∑
y∈S sy1(T = QR(y) ∩ S) + ∑
y∈S sy1(T ∪ x = QR(y) ∩ S)
= ...(following the same logic as in the necessary part in Axiom 7)
=
∑
y∈S\x sy1(T ′ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) .
Take the summation over all non-empty T ′ ⊆ S \ x, we have
∑
T ′:∅̸=T ′⊆S\x μ(T ′, S \ x)
μ(T, S \ x) =
∑
T ′:∅̸=T ′⊆S\x
∑
y∈S\x sy1(T ′ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x))
⇔1
μ(T, S \ x) =
∑
y∈S\x sy
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x))
⇔ μ(T, S \ x) =
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x))
∑
y∈S\x sy
.
In the second equation above, the numerator of the ratio on the LHS is equal to 1
by definition of the μ function. The numerator of the ratio on the RHS is equal to
∑
y∈S\x sy because for each y ∈ S \ x, there exists a unique non-empty T ′ ⊆ S \ x such
that T ′ = QR(y) ∩ (S \ x). The non-emptiness of such T ′ comes from the fact that
y ∈ QR(y) (by definition of the QR function) and y ∈ S \ x (by the selection of y).
The last equation implies that μ(T, S \ x) has an RRM representation at S \ x.
Case 2: Suppose QR(x) ∩ (S \ x) = T ∗ and T ∗ ̸= ∅. In this case, Axiom 7 is only
applicable to all non-empty T, T ′ ⊆ S \ x such that T, T ′ ̸= T ∗.
Case 2.1: Suppose μ(T ∗, S \ x) = 1. This implies μ(T, S) = 0 for all non-empty
T ⊆ S \ x and T ̸= T ∗. Axiom 6 implies that for all non-empty T ⊆ S \ x such that
T ̸= T ∗, ∄y ∈ S \ x such that T = QR(y) ∩ (S \ x). Additionally, for all z ∈ S \ x,
it must be the case that QR(z) ∩ (S \ x) = T ∗. Otherwise, there exists another set
44

T ∗∗ = QR(z) ∩ (S \ x) that is non-empty (because z ∈ S \ x and z ∈ QR(z)) such
that μ(T ∗∗, S) > 0 and T ∗∗ ̸= T ∗, which is a contradiction. Hence, we can write

  
  
μ(T ∗, S \ x) =
∑
y∈S\x sy1(T ∗=QR(y)∩(S\x))
∑
z∈S\x sz
μ(T, S \ x) = 0 =
∑
y∈S\x sy1(T =QR(y)∩(S\x))
∑
z∈S\x sz for all T ⊆ S \ x such that T ̸= ∅, T ∗.
The first equation comes from the fact that QR(z) ∩ (S \ x) = T ∗ for all z ∈ S \ x. The
second equation results from the fact that ∄y ∈ S \ x such that QR(y) ∩ (S \ x) = T
for all T ⊆ S \ x such that T ̸= ∅ and T ̸= T ∗.
Case 2.2: Suppose μ(T ∗, S \ x) < 1. Take non-empty T ⊆ S \ x such that
μ(T, S \ x) > 0 and T ̸= T ∗. Such T must exist because the choice probabilities sum
to 1. As μ(T, S \ x) > 0, it follows from Lemma 2 that μ(T, S) + μ(T ∪ x, S) > 0.
Hence, for all T ′ ⊆ S \ x such that T ′ ̸= ∅ and T ′ ̸= T ∗
μ(T ′, S \ x)
μ(T, S \ x) = μ(T ′, S) + μ(T ′ ∪ x, S)
μ(T, S) + μ(T ∪ x, S)
=
∑
y∈S sy1(T ′ = QR(y) ∩ S) + ∑
y∈S sy1(T ′ ∪ x = QR(y) ∩ S)
∑
y∈S sy1(T = QR(y) ∩ S) + ∑
y∈S sy1(T ∪ x = QR(y) ∩ S)
= ...(following the same logic as in the necessary part in Axiom 7)
=
∑
y∈S\x sy1(T ′ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) .
Take the summation over all non-empty T ′ ⊆ S \ x such that T ′ ̸= T ∗, we have
∑
T ′:∅,T ∗̸=T ′⊆S\x μ(T ′, S \ x)
μ(T, S \ x) =
∑
T ′:∅,T ∗̸=T ′⊆S\x
∑
y∈S\x sy1(T ′ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) ,
which can be simplified to
1 − μ(T ∗, S \ x)
μ(T, S \ x) =
∑
y∈S\x sy − ∑
z∈S\x sz1(T ∗ = QR(z) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) . (8)
Here, the numerator of the ratio on the LHS is equal to 1 − μ(T ∗, S \ x) because we
leave out T ∗ when taking the summation. The same intuition applies to the numerator
of the ratio on the RHS. Now, applying Axiom 8 for (T ∗, T ) with μ(T, S) > 0 (by
45

selection of T ), we have
μ(T ∗, S \ x)
μ(T, S \ x) =
μ(T ∗, S) + μ(T ∗ ∪ x, S) − μ(QR(x),X)
∑
y∈S μ(QR(y),X)
μ(T, S) + μ(T ∪ x, S) .
By definition of parameters {sx}x∈X , the ratio μ(QR(x),X)
∑
y∈S μ(QR(y),X) is indeed sx
∑
y∈S sy . Using
the fact that μ has an RRM representation at choice set S, we have
μ(T ∗, S) + μ(T ∗ ∪ x, S) − μ(QR(x),X)
∑
y∈S μ(QR(y),X)
μ(T, S) + μ(T ∪ x, S)
=
∑
y∈S sy1(T ∗ = QR(y) ∩ S) + ∑
y∈S sy1(T ∗ ∪ x = QR(y) ∩ S) − sx
∑
y∈S sy1(T = QR(y) ∩ S) + ∑
y∈S sy1(T ∪ x = QR(y) ∩ S)
=
∑
y∈S\x sy1(T ∗ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) .
Here, the second equation follows by the same reasoning as the necessity of Axiom 7,
together with the fact that T ∗ = QR(x) ∩ (S \ x). Therefore,
μ(T ∗, S \ x)
μ(T, S \ x) =
∑
y∈(S\x) sy1(T ∗ = QR(y) ∩ (S \ x))
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) . (9)
Combine equations (8) and (9), we get
1
μ(T, S \ x) =
∑
y∈S\x sy
∑
y∈S\x sy1(T = QR(y) ∩ (S \ x)) ⇔ μ(T, S\x) =
∑
y∈S\x
sy
∑
z∈S\x sz
1(T = QR(y)∩(S\x)).
Therefore, μ has an RRM representation at choice set S \ x under all cases. By
induction, μ has an RRM representation. This completes our proof of Proposition 5.
■
Proof of Proposition 6: The necessity is straightforward. We prove the sufficiency.
Suppose the revealed nests are N R
1 ,NR
2 ,...,NR
q . Define the nests as the revealed
nests. If q = 1 then N R
1 = X. It follows from Axiom 11 that μ(S, S) = 1 for all
non-empty S ⊆ X and μ has an NSC representation for any weighting function σ.
Suppose q ≥ 2. Fix x∗
1 ∈ NR
1 and x∗
2 ∈ NR
2 . Take an arbitrary non-empty Ti ⊆ N R
i
for all i = 1, 2, . . . , q. Define the σ function as follows. Assign σ({x∗
1}) = 1. Let
σ(Ti) = μ(Ti,Ti∪x∗
1)
μ({x∗
1 },Ti ∪x∗
1) for i = 2, 3, . . . , q and σ(T1) = μ(T1,T1∪x∗
2)
μ({x∗
2 },T1 ∪x∗
2)
μ({x∗
2 },{x∗
1 ,x∗
2 })
μ({x∗
1 },{x∗
1 ,x∗
2}) . The σ
function is well-defined following Axiom 11.
46

Take arbitrary non-empty T, T ′ ⊆ S such that μ(T, S) > 0 and μ(T ′, S) > 0. We
want to show μ(T,S)
μ(T ′,S) = σ(T )
σ(T ′) . As μ(T, S) > 0 and μ(T ′, S) > 0, Axiom 11 implies that
T = S ∩ NR
i and T ′ = S ∩ N R
j for some values of i and j. In general, i and j are not
necessarily distinct. We consider the following cases.
Case 1: Suppose i, j ̸= 1. It follows T ∩ N R
1 = T′ ∩ NR
1 = ∅. Let T ′′ = {x∗
1}, S′ =
T ∪ x∗
1, and S′′ = T ′ ∪ x∗
1. Axiom 11 implies that μ(T, S′), μ(T ′′, S′), μ(T ′′, S′′) and
μ(T ′, S′′) are all positive. By applying Axiom 9, we have
μ(T, S)
μ(T ′, S) = μ(T, S′)
μ(T ′′, S′)
μ(T ′′, S′′)
μ(T ′, S′′) = μ(T, T ∪ x∗
1) μ({x∗1}, T ∪ x∗1)
μ({x∗
1}, T ′ ∪ x∗
1)
μ(T ′, T ′ ∪ x∗1) = σ(T )
σ(T ′) ,
where the second equation comes from the definitions of T ′′, S′, S′′ and the third
equation uses the definition of σ function.
Case 2: Suppose i = j = 1. It follows T, T ′ ⊆ N R
1 . Let T ′′ = {x∗
2}, S′ = T ∪ x∗
2, and S′′ = T ′ ∪ x∗
2. Again, Axiom 11 implies that μ(T, S′), μ(T ′′, S′), μ(T ′′, S′′) and μ(T ′, S′′) are all positive. By applying Axiom 9, we have
μ(T, S)
μ(T ′, S) = μ(T, S′)
μ(T ′′, S′)
μ(T ′′, S′′)
μ(T ′, S′′) = μ(T, T ∪ x2∗)
μ({x2∗}, T ∪ x2∗)
μ({x2∗}, T ′ ∪ x2∗)
μ(T ′, T ′ ∪ x2∗) =
σ(T ) μ({x∗
1 },{x∗
1 ,x∗
2 })
μ({x∗
2 },{x∗
1 ,x∗
2 })
σ(T ′) μ({x∗
1 },{x∗
1 ,x∗
2 })
μ({x∗
2 },{x∗
1 ,x∗
2 })
= σ(T )
σ(T ′) .
The first equation above uses Axiom 9. The second equation comes from definitions
of T ′′, S′, and S′′. The third equation uses the definition of the σ function.
Case 3: Suppose i = 1 ̸= j. Then T ⊆ N R
1 and T ′ ∩ N R
1 = ∅. Applying Axiom 9,
for given T and T ′, we have
μ(T, T ∪ x∗
2) μ({x∗2}, T ∪ x∗2)
μ({x∗
2}, {x∗
1, x∗
2})
μ({x∗1}, {x∗1, x∗2}) = μ(T, S)
μ(T ′, S)
μ(T ′, T ′ ∪ x∗
1) μ({x∗1}, T ′ ∪ x∗1)
⇔ μ(T, T ∪ x∗
2) μ({x∗2}, T ∪ x∗2)
μ({x∗
2}, {x∗
1, x∗
2})
μ({x∗1}, {x∗1, x∗2})
} {{ }
σ(T )
μ({x∗
1}, T ′ ∪ x∗
1) μ(T ′, T ′ ∪ x∗1)
} {{ }
1/σ(T ′)
= μ(T, S)
μ(T ′, S)
⇔ σ(T )
σ(T ′) = μ(T, S)
μ(T ′, S) ,
where the second equation comes from the definition of the σ function.
Now, as μ(T,S)
μ(T ′,S) = σ(T )
σ(T ′) for all T, T ′, S such that μ(T, S) > 0 and μ(T ′, S) > 0, we
have μ(T, S) = μ(T,S)
∑
T ′:μ(T ′,S)>0 μ(T ′,S) = σ(T )
∑
T ′:μ(T ′,S)>0 σ(T ′) = ∑
i
σ(T )
∑q
j=1 σ(Nj∩S) 1(T = Ni ∩ S).
Here, the last equation uses the fact that we define the nests as the revealed nests,
47

and the revealed nests are pairwise disjoint. This completes our proof. ■
Proof of Proposition 7: We sequentially show that part (i) is equivalent to part
(ii) and part (iii).
Equivalence of Part (i) and Part (ii): We show that μ has RRM and endogenous
EBA representations if and only if it has an RRM representation with Q(x) = x.
The if part is straightforward. If μ has an RRM representation with Q(x) = x then
μ is given by

 
 
μ({x}, S) = sx
∑
y∈S sy for all x ∈ S ⊆ X
μ(T, S) = 0 for all T ⊆ S ⊆ X and |T | ≥ 2.
This μ has a singleton representation. It is routine to check that this μ satisfies
Relative Additivity and Positivity-1. Hence, it follows from Proposition 2 and Remark
2 that μ has an endogenous EBA representation. For the only if part, the proof is by
a contradiction. Suppose μ has RRM and endogenous EBA representations. Suppose
there exists x∗ such that QR(x∗) ̸= {x∗}. Take an arbitrary S such that x∗ ∈ S
and (S \ x∗) ∩ QR(x∗) ̸= ∅. Note that μ having an endogenous EBA representation
implies that it satisfies Relative Additivity (Axiom 3). That is, for all non-empty
T, T ′ ⊆ S \ x∗ and x∗ ∈ S, we have
μ(T, S \ x∗)[μ(T ′, S) + μ(T ′ ∪ x∗, S)] = μ(T ′, S \ x∗)[μ(T, S) + μ(T ∪ x∗, S)]. (10)
Meanwhile, μ having an RRM representation implies that it satisfies Axiom 8, which says that when T = QR(x∗) ∩ (S \ x∗) and T ̸= ∅ then for all non-empty T ′ ⊆ S \ x∗ such that T ′ ̸= T
μ(T, S\x∗)[μ(T ′, S)+μ(T ′∪x∗, S)] = μ(T ′, S\x∗)
[
μ(T, S)+μ(T ∪x∗, S)− μ(QR(x∗), X)
∑
y∈S μ(QR(y), X)
]
. (11)
Because of our assumption that QR(x∗) ̸= {x∗} and by selection of S, such T in
equation (11) always exists. Note that μ(QR(x),X)
∑
y∈S μ(QR(y),X) > 0 because μ has an RRM
representation (see Axiom 6). Hence, the two equations (10) and (11) can occur
simultaneously if and only if μ(T ′, S \ x∗) = 0 for all non-empty T ′ ⊆ S \ x∗ such that
T ′ ̸= T . This implies that μ(T, S\x∗) = μ(QR(x∗)∩(S\x∗), S\x∗) = 1. Consequently,
for all y ∈ S \ x∗ we have QR(y) ∩ (S \ x∗) = QR(x∗) ∩ (S \ x∗). Otherwise, the decision
48

maker chooses QR(y) ∩ (S \ x∗) with a strictly positive probability under choice set
S \ x∗, contradicting the fact that μ(QR(x∗) ∩ (S \ x∗), S \ x∗) = 1.
Now take S = X. Using the argument above, for all y ∈ X \ x∗,
QR(y) ∩ (X \ x∗) =

 
 
QR(y) \ x∗ if x∗ ∈ QR(y)
QR(y) if x∗ ̸∈ QR(y).
Note that QR(x∗) ∩ (X \ x∗) = QR(x∗) \ x∗. Therefore, using QR(y) ∩ (X \ x∗) =
QR(x∗) ∩ (X \ x∗) for all y ∈ X \ x∗ (note that S = X here) we have
QR(x∗) \ x∗ =

 
 
QR(y) \ x∗ if x∗ ∈ QR(y)
QR(y) if x∗ ̸∈ QR(y).
(12)
When |X| ≥ 3, there are at least two alternatives y, z ∈ X \ x∗ such that y ̸= z.
If x∗ ∈ QR(y) then (12) implies that QR(x∗) \ x∗ = QR(y) \ x∗, which then implies
QR(y) = QR(x∗). This contradicts the assumption that constraint sets associated
with two different options are distinct. Now, suppose x∗ ̸∈ QR(y) and x∗ ̸∈ QR(z).
Then it follows from (12) that QR(x∗) \ x∗ = QR(y) and QR(x∗) \ x∗ = QR(z).
Consequently, QR(y) = QR(z), which is also a contradiction. Hence, the initial
assumption is wrong and QR(x) = x for all x ∈ X.
Now, the equivalence of parts (i) and (ii) immediately follows from the fact that
μ has a singleton representation if and only if it has an RRM representation with
Q(x) = x.
Equivalence of Part (i) and Part (iii): First, suppose μ has a singleton representa
tion. To obtain an NSC representation of μ, let each nest contain only one alter
native, so there are |X| nests in total. To obtain an RRM representation of μ, let
the constraint associated with option x be Q(x) = x. Define the weighting function
σ in NSC and salience parameter sx in RRM as σ({x}) = sx = μ({x}, X) for all
x ∈ X. It is routine to check that with the collection of nests {{x}, {y}, {z}, . . . }
and weighting function σ, μ has an NSC representation. Additionally, with the con
straint sets {Q(x)}x and salience parameters {sx}x defined as above, μ has an RRM
representation.
Now, suppose μ has RRM and NSC representations. Consider choice probabilities
at the grand set. Note that Axiom 6 in RRM states that μ(T, X) > 0 if and only
49

if T = QR(x) for some value of x, where QR() is the revealed constraint function.
Meanwhile, Axiom 11 in NSC states that μ(T, X) > 0 if and only if T = N R
i for
some value of i, where N R
i is a revealed nest. It follows from these two axioms that
each revealed constraint set QR(x) identically maps to one revealed nest N R
i . Note
that for each x ∈ X there is one QR(x). Also, the constraint sets associated with
two different options are assumed to be distinct. Furthermore, the revealed nests are
pairwise disjoint and must form a partition of the grand set (Axiom 10 in NSC). This
implies that there are |X| distinct revealed nests N R
1 ,NR
2 ,...,NR
|X| with N R
i = {x}
for some x ∈ X. Using this result, it follows from Axiom 11 (or Axiom 6) that
at any choice set S, μ({x}, S) > 0 for all x ∈ S and μ(T, S) = 0 when |T | ≥ 2.
Additionally, it follows from the Path-Independence of Irrelevant Sets (Axiom 9 in
NSC) that μ({x},S)
μ({y},S) = μ({x},S′)
μ({y},S′) for all S, S′ ⊇ {x, y}. Hence, μ satisfies both conditions
in Definition 3, which implies that it has a singleton representation. This completes
our proof of Proposition 7. ■
Proof of Proposition 8: We sequentially show that part (i) is equivalent to part
(ii) and part (iii).
Equivalence of Part (i) and Part (ii): First, suppose μ has a nest-invariant represen
tation. Clearly μ has an NSC representation. To show that μ has an endogenous EBA
representation, it is sufficient to show that μ satisfies Positivity-1 (Axiom 2) and Rel
ative Additivity (Axiom 3). It is straightforward to see that μ satisfies Positivity-1.
For Relative Additivity, we want to show that for all x, T, T ′, S such that x ∈ S and
T, T ′ ⊆ S \ x and T, T ′ ̸= ∅
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T, S) + μ(T ∪ x, S)]. (13)
If μ(T, S \ x) = 0, then the NSC representation of μ implies that there does not exist
nest Ni such that T = Ni ∩ (S \ x). This observation, together with the fact that
x ∈ S \ T , implies that there does not exist nest Ni such that T = Ni ∩ S or T ∪ x =
Ni ∩ S. It follows μ(T, S) = μ(T ∪ x, S) = 0 so 0 = μ(T, S \ x) = μ(T, S) + μ(T ∪ x, S).
In this case, (13) holds for any non-empty T ′ ⊆ S \ x.
Now, suppose μ(T, S \ x) > 0 and μ(T ′, S \ x) > 0. The NSC representation
of μ implies that there exist nests Ni and Nj (not necessarily distinct) such that
T = Ni ∩ (S \ x) and T ′ = Nj ∩ (S \ x). Consider the following cases.
50

Case 1: Suppose x ∈ Ni and x ∈ Nj. It follows that Ni and Nj are identical. In
this case, T and T ′ are identical and (13) holds trivially.
Case 2: Suppose x ∈ Ni and x ̸∈ Nj (the case x ̸∈ Ni and x ∈ Nj is similar). It
follows that T ∪x = Ni ∩S and T ′ = Nj ∩S. Consequently, μ(T, S) = μ(T ′ ∪x, S) = 0,
μ(T ∪ x, S) > 0 and μ(T ′, S) > 0. Equation (13) is then equivalent to
μ(T, S \ x)
μ(T ′, S \ x) = μ(T ∪ x, S)
μ(T ′, S) ⇔ σ(T )
σ(T ′) = σ(T ∪ x)
σ(T ′) ,
which is true because σ(T ) = σ(T ∪ x) as both T and T ∪ x belong to the nest Ni.
Case 3: Suppose x ̸∈ Ni and x ̸∈ Nj. It follows that T = Ni ∩ S and T ′ = Nj ∩ S.
Consequently, μ(T ∪ x, S) = μ(T ′ ∪ x, S) = 0, μ(T, S) > 0 and μ(T ′, S) > 0. Equation
(13) is then equivalent to
μ(T, S \ x)
μ(T ′, S \ x) = μ(T, S)
μ(T ′, S) ⇔ σ(T )
σ(T ′) = σ(T )
σ(T ′) ,
which is true.
For the only if part, suppose μ has NSC and endogenous EBA representations.
Suppose the nests in NSC representation are N1, N2, . . . , Nq. If q = 1 then there is
only one nest being identical to the grand set: N1 = X. It follows that μ(S, S) = 1
for all non-empty S ⊆ X regardless of the weighting function σ. As the weighting
function σ can be chosen arbitrarily, we can select σ such that σ(T ) = σ(X) for all
non-empty T ⊆ X. It follows that μ has a nest-invariant representation.
Now, suppose q ≥ 2 so there are at least two distinct nests. We show that
σ(T ) = σ(Ni) for all non-empty T ⊆ Ni. Note that this trivially holds when nest
Ni consists of a single option. Suppose there are at least two elements in Ni. Take
an arbitrary non-empty subset T of Ni such that T ̸= Ni. As T is a strict subset
of Ni, there exists x ∈ Ni such that T ⊆ Ni \ x. Take an arbitrary non-empty
T ′ ⊆ Nj for j ̸= i. We can always choose such T ′ as there are at least two nests.
By selection, T and T ′ are in different nests. Consider choice set S = T ∪ {x} ∪ T ′.
Note that as μ has an NSC representation, it follows from Axiom 11 that all four
terms μ(T, S \ x), μ(T ′, S \ x), μ(T ∪ x, S), and μ(T ′, S) are strictly positive and
μ(T ′ ∪ x, S) = μ(T, S) = 0. As μ has an endogenous EBA representation, it satisfies
51

Relative Additivity (Axiom 3). This implies
μ(T, S \ x)[μ(T ′, S) + μ(T ′ ∪ x, S)] = μ(T ′, S \ x)[μ(T, S) + μ(T ∪ x, S)]
⇒ μ(T, S \ x)μ(T ′, S) = μ(T ′, S \ x)μ(T ∪ x, S)
⇔ μ(T, S \ x)
μ(T ′, S \ x) = μ(T ∪ x, S)
μ(T ′, S)
⇔ σ(T )/σ(T ′) = σ(T ∪ x)/σ(T ′),
where the second equation uses μ(T ′ ∪ x, S) = μ(T, S) = 0, the third equation uses
μ(T ′, S \ x) > 0, μ(T ′, S) > 0, and the last equation uses the NSC representation
of μ. Note that the last equation implies that σ(T ) = σ(T ∪ x). As we choose T
and x arbitrarily, by applying this process iteratively, we have σ(T ) = σ(Ni) for all
non-empty T ⊆ Ni.
Equivalence of Part (i) and Part (iii): First, suppose μ has a nest-invariant repre
sentation. This implies that σ(T ) = σ(T ′) if T and T ′ belong to the same nest and
T, T ′ ̸= ∅. Take arbitrary x, T, S such that x ∈ S \ T and T ⊆ S \ x and T ̸= ∅.
We want to show that μ satisfies the probabilistic attention filter condition; that is,
μ(T, S) = μ(T, S \x) when μ(T, S) > 0, μ(T, S \x) > 0, and μ({x}, S) = 0. Note that
μ(T, S) > 0 implies that there exists a nest Ni with T = Ni ∩ S. Obviously, x ̸∈ Ni
because otherwise x ∈ Ni ∩ S and this implies x ∈ T (contradiction). It follows that
Ni ∩ (S \ x) = T . Using the NSC representation of μ, we have
μ(T, S) = σ(Ni ∩ S)
∑
j σ(Nj ∩ S) and μ(T, S \ x) = σ(Ni ∩ (S \ x))
∑
j σ(Nj ∩ (S \ x)) .
As Ni ∩ S = T = Ni ∩ (S \ x), we have σ(Ni ∩ S) = σ(Ni ∩ (S \ x)). Hence, to show
that μ(T, S) = μ(T, S \ x), it is sufficient to prove ∑
j σ(Nj ∩ S) = ∑
j σ(Nj ∩ (S \ x)).
We show σ(Nj ∩ S) = σ(Nj ∩ (S \ x)) for each nest Nj. Consider the following cases.
Case 1: Suppose Nj ∩ S = Nj ∩ (S \ x) = ∅. Then σ(Nj ∩ S) = σ(Nj ∩ (S \ x))
trivially holds.
Case 2: Suppose Nj ∩ S ̸= ∅ and Nj ∩ (S \ x) ̸= ∅. Then both Nj ∩ S and
Nj ∩ (S \ x) are non-empty subsets of Nj. Using the fact that σ is invariant across
non-empty subsets of the same nest, we have σ(Nj ∩ S) = σ(Nj ∩ (S \ x)).
Case 3: Suppose Nj ∩ S ̸= ∅ but Nj ∩ (S \ x) = ∅. Note that Nj ∩ S ̸= ∅
52

but Nj ∩ (S \ x) = ∅ implies Nj = E ∪ x for some E ⊆ X \ S. Hence, it follows
that Nj ∩ S = {x} and μ({x}, S) > 0. This contradicts the initial assumption that
μ({x}, S) = 0. Therefore, the case in which Nj ∩ S ̸= ∅ but Nj ∩ (S \ x) = ∅ cannot
happen.
Case 4: Suppose Nj ∩ S = ∅ but Nj ∩ (S \ x) ̸= ∅. This case cannot happen
because Nj ∩ (S \ x) is a subset of Nj ∩ S.
Now, suppose μ has an NSC representation and satisfies the probabilistic attention
filter condition. We want to show σ(T ) = σ(T ′) whenever T, T ′ ̸= ∅ and T, T ′ belong
to the same nest. If there is just one nest N1 = X then the NSC representation of μ
implies that μ(T, S) = 0 when T ̸= S and μ(S, S) = 1 for all non-empty S ⊆ X. In
this case, the probabilistic attention filter condition trivially holds. Now, suppose that
there exist at least two distinct nests, Ni and Nj. We show that σ(T ) is the same for
all non-empty T ⊆ Ni. This trivially holds if Ni contains a single option. Suppose Ni
has at least two elements. Consider x ∈ Ni and non-empty T, T ′ such that T ⊆ Ni \ x
and T ′ ⊆ Nj. Let S = T ∪ {x} ∪ T ′. We have μ(T ′, S) > 0 and μ(T ′, S \ x) > 0
because T ′ = Nj ∩ S = Nj ∩ (S \ x). Additionally, μ({x}, S) = 0 because x ∈ Ni but
Ni ∩ S = T ∪ x ̸= {x}. Then the probabilistic attention filter condition is applicable
and implies that μ(T ′, S) = μ(T ′, S \ x). Using the NSC representation of μ and the
definition of (T, T ′, S),
μ(T ′, S) = μ(T ′, S \ x) implies σ(T ′)
σ(T ′) + σ(Ni ∩ S) = σ(T ′)
σ(T ′) + σ(Ni ∩ (S \ x)) .
Note that σ(T ′) > 0 as T ′ ̸= ∅. Consequently, the equation above implies σ(Ni ∩ S) =
σ(Ni ∩ (S \ x)). Equivalently, σ(T ∪ x) = σ(T ). As x and T are chosen arbitrarily,
applying a similar logic iteratively implies that σ(T ) must be the same for all non
empty T ⊆ Ni. This completes our proof of Proposition 8. ■
Proof of Proposition 9: The necessity part is straightforward. We prove the
sufficiency. For all category C ⊆ X, define m(C) = μ(C, X). For all T ⊆ S, we show
μ(T, S) = ∑
C: C⊆X
m(C)1(T = S ∩ C) = ∑
C: C=T ∪A with A⊆X\S
m(C) (14)
by induction based on the number of alternatives in S by “stepping down”.
53

Step 1: When S = X, by definition μ(T, X) = m(T ) = ∑
C⊆X m(C)1(T = X ∩ C)
because X ∩ C = C for all categories C.
Step 2: Suppose equation (14) holds for all (T, S) with T ⊆ S and |S| = k + 1, k +
2, . . . , |X|, where k ≥ 2. Consider some S with |S| = k + 1. Take x ∈ S. By Axiom
12, for all T ⊆ S \ x, we have
μ(T, S \ x) = μ(T, S) + μ(T ∪ x, S)
=
∑
C: C=T ∪A with A⊆X\S
m(C )
} {{ }
μ(T, S)
+
∑
C: C=(T ∪x)∪A, A⊆X\S
m(C )
} {{ }
μ(T ∪ x, S)
=
∑
C: C=T ∪A′, A′⊆((X\S)∪x), x̸∈A′
m(C) + ∑
C: C=T ∪A′, A′⊆((X\S)∪x), x∈A′
m(C )
=
∑
C: C=T ∪A′, A′⊆X\(S\x), x̸∈A′
m(C) + ∑
C: C=T ∪A′, A′⊆X\(S\x), x∈A′
m(C )
=
∑
C: C=T ∪A′, A′⊆X\(S\x)
m(C ).
Hence, equation (14) holds at choice set S \ x. By induction, μ has a representation
at any non-empty choice set. This completes our proof of Proposition 9. ■
Proof of Proposition 10: The necessity can be easily verified. We show the suf
ficiency. As μ has full support and satisfies IIS, by a similar logic as in the proof
of Proposition 1, we can write μ(T, S) = π(T )
∑
T′⊆S π(T ′) for all T ⊆ S ⊆ X, where
π(T ) = μ(T, X) > 0 because μ has full support. Apply Additivity (Axiom 12) to this
functional form of μ, for all T, T ′ ⊆ X such that x ̸∈ T, T ′, we have
μ(T, X \ x)
μ(T ′, X \ x) = μ(T, X) + μ(T ∪ x, X)
μ(T ′, X) + μ(T ′ ∪ x, X) ⇔ π(T )
π(T ′) = π(T ) + π(T ∪ x)
π(T ′) + π(T ′ ∪ x)
⇒ π(T ∪ x)
π(T ) = π(T ′ ∪ x)
π(T ′) .
The last equation is equation (7) in the proof of Proposition 3. From here one follows
the same logic used in the proof of Proposition 3 to obtain the representation for the
ICo model. This completes our proof. ■
Proof of Corollary 2: Suppose μ has a nested logit representation. If each nest in
the nested logit representation of μ consists of a single item, then μ has a singleton
representation following the proof of Proposition 8. Suppose there exists a nest Ni
54

containing at least two elements. Take a proper subset T of Ni with T ̸= ∅. As
the utility of an option is strictly positive, it follows that σ(T ) ̸= σ(Ni). Hence, μ
does not have a nest-invariant representation. The remaining results in the Corollary
directly follow from Propositions 7 and 8. ■
55

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:54.299Z
- **Text Length:** 115461 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 55 of 55
