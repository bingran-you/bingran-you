# PDF Document: Bozdag and Roy - 2025 - Common Knowledge, Sailboats, and Publicity.pdf

**File Path:** Bozdag and Roy - 2025 - Common Knowledge, Sailboats, and Publicity.pdf

**Processed Date:** 2026-02-10T18:15:24.591Z

**File Size:** 181.85 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3730

**Title:** Common Knowledge, Sailboats, and Publicity

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A. Bjorndahl (Ed.): Theoretical Aspects of Rationality and Knowledge 2025 (TARK 2025) EPTCS 437, 2025, pp. 190–202, doi:10.4204/EPTCS.437.18
Common Knowledge, Sailboats, and Publicity
Sena Bozdag* Olivier Roy†
We revisit a recent puzzle about common knowledge, the “sailboat” case [22], and argue that Lewisian common knowledge allows us to reconcile the pre-theoretical intuition that certain facts are “public” in such situations, while these facts cannot be common knowledge in the classical, iterative sense. The crux of the argument is to understand Lewisian common knowledge as an account of what it means for an event to be public. We first formulate this argument informally to clarify its philosophical -
commitment and then propose one way to capture it formally in epistemic-plausibility models. Taken together, we take the philosophical and the formal arguments as providing evidence that Lewisian common knowledge is a plausible account of what it means for an event to be public.
The various mathematical definitions of common knowledge, most prominently the iterative and fixed point definitions [4, 5], have often been associated, explicitly or implicitly, with the pre-theoretical notions of something being “public information”, “out in the open”, or what “any fool” [24] would know. Barwise’s [4] argument that “the fixed point is the best conceptual analysis of the pre-theoretic notion” implicitly takes the latter to be some form of publicity. Geanakoplos’ early survey [15]-
 explicitly states that “public events are the most obvious candidates for common knowledge.” Similar remarks can be found in [26, 11] and in informal presentations of the characterizations of iterative common knowledge in terms of “self-evident events” [15, 28]. This association between the pre-thereotical notion of publicity and the mathematical definitions of common knowledge is also salient outside epistemic logic and game theory, for instance, in philosophy of collective action [16, 8, 7], or-
 in Chwe’s work on social rituals [10].
Many of the classical and more recent criticisms of the iterative or the fixed-point definitions of common knowledge can be diagnosed as questioning this association, c.f. [31] for an overview. A common criticism is, for example, that iterative common knowledge is unattainable for resource-bounded agents due to its infinitary character [30]. This fact is most worrying when one assumes that information can be public among such agents, and that iterative common knowledge should somehow capture this -
notion of publicity. One can similarly diagnose the “Halpern-Moses problem” [20, 27, 18]. The paradoxical nature of the problem is most salient when one grants, on the one hand, that successful asynchronous coordination often rests on the publicity of some relevant facts and, on the other hand, that the iterative or the fixed-point definition of common knowledge should capture the latter.
A natural response to these worries, which we follow in this paper, is to propose an alternative account of publicity and argue that it meets some of the challenges facing the iterative or fixed-point definitions of common knowledge [16, 17, 37]. Here we follow a suggestion made by Paternotte [31] to use Lewisian common knowledge [23, 12, 33, 36] to flesh out the pre-theoretical understanding of publicity. While Paternotte provides general, philosophical arguments for understanding publicity in te-
rms of Lewisian common knowledge, in this paper we pitch this suggestion against a structurally related “paradox” of iterated common knowledge: Lederman’s “Sailboat” example [22]. In doing so, we argue that Lewisian common knowledge allows us to reconcile the pre-theoretical intuition that some obvious facts are public with the observation that iterative common knowledge of these facts do not hold, even for ideal reasoners.
*Universit ̈at Bayreuth †Universit ̈at Bayreuth

Bozdag & Roy 191
The rest of this extended abstract is organized as follows. After briefly introducing the iterated and the Lewisian definitions of common knowledge, we sketch Lederman’s Sailboat example and our philosophical argument to the effect that Lewisian common knowledge addresses it satisfactorily. We then provide a formalization of our argument in a variant of epistemic-plausibility models [3, 35]. Section 5 concludes that Lewisian common knowledge constitutes a plausible account of publicity.
1 Iterated and Lewisian Common Knowledge
For the present paper, only the iterative definition of common knowledge is relevant. We use its standard version: A proposition A is shared knowledge in a group G whenever every member of G knows A. A is level-n + 1 shared knowledge in group G whenever it is shared knowledge in G that A is level-n shared knowledge. Taking plain shared knowledge as level 0, iterative common knowledge of A is defined as level-n shared knowledge of A, for all n ∈ N. Lewisian common knowledge differs from the iterati-
ve definition in two ways. First and foremost, despite its name, it does not feature higher-order knowledge, but rather generates higher-order reasons to believe.1 Second, Lewisian common knowledge requires the existence of a specific state of affairs, the “basis” for common knowledge, which grounds the group members’ higher-order reasons to believe. In that sense, Lewisian common knowledge has a much more “externalist” flavor [31], since it refers to shared aspects of the informational environmen-
t [5], instead of referring to the members’ mental states. We use Cubitt and Sugden’s [12] rendering of the Lewisian definition. Let Ri(...) stand for “i has a reason to believe...”. A proposition B is then said to be Lewisian common knowledge in group G whenever there exists a state of affairs A such that:
C1 If A then Ri(A) for any agent i
C2 For all agents i, j if Ri(A) then RiR j(A)
C3 For any agent i, if Ri(A) then Ri(B)
C4 For all agents i, j and proposition C, from the fact that Ri(A) implies Ri(C) it follows that Ri(R j(A) implies R j(C))
Conditions C1 to C3 encapsulate the idea that A is the basis for common knowledge, or what Cubitt and Sugden call a reflexive common indicator of B. These conditions do most of the work in generating the infinite hierarchy of higher-order reasons to believe B. C4 states that the agents share reasoning standards.2 Lewis argued informally that these conditions together entail that every member of G has iterated higher-order reasons to believe B, which we write rn(B) following Cubitt and Sugden’s [12-
] notation. In other words, the existence of the relevant state of affairs A satisfying C1 to C4 entails that both agents have a reason to believe B, they have a reason to believe that they have a reason to believe B, and so on. Lewis’ argument, sometimes also called “Lewis’ Theorem,” has been formalized using a variety of tools [12, 33, 36].
1Vromen [36] provides textual evidence that David Lewis himself thought ex post that “common knowledge” was a misnomer for the notion he defined. 2Observe that A is a state of affairs and not a proposition. Ri(A) is thus somewhat an abuse of notation and should be read as “i has a reason to believe that A holds.” Note also that our formulation of C1-C4 slightly differs from Cubit and Sugden’s original formalization. Theirs also uses the Lewisian notion of “indication” in C2-C4. That notion is, how-
ever, defined in terms of conditional reasons to believe, and once unpacked it yields the formulation above.

192 CK, Sailboats, and Publicity
2 The Sailboat Case
Our goal in this paper is to provide support to the view that Lewisian common knowledge constitutes a plausible account of what it means for a proposition or a state of affairs to be public. We do so by analyzing the “Sailboat case” devised by Lederman [22]. Before explaining in more detail the structure of our argument, let us introduce the case.
SAILBOAT: Roman and Columba are ideal reasoners playing in a game show.3 Each contestant has a single button on a console in front of him or her. They have an unobstructed view of each other’s faces, and of an area in the middle of the stage, where the hosts will place a sailboat. First, the hosts will bring out a toy sailboat (the ‘test’) with a 100 cm mast. They will then replace it with a sailboat chosen randomly from an array of sailboats of various sizes. If the mast of the new sailboat is ta-
ller than the test and both players press their respective buttons, they receive $ 1,000 each. If the mast is not taller than the test and both press, or if only one person presses their button, the person or people who pressed must pay the show $ 100. Today, the mast of the chosen boat is 300 cm tall. [22, p.1075]
Lederman assumes that the reader will judge the following to be intuitively true in this example, which we also accept for the sake of argument in this paper.
It is public among Roman and Columba that the mast is larger than 100 cm.
We write [> 100] for “the mast is larger than 100 cm.” Here Lederman uses a pre-theoretical notion of publicity, which stays unanalyzed in the paper. Our point here is precisely that this notion can be fleshed out in terms of Lewisian common knowledge. Lederman argues that, even though this proposition is public, [> 100] is not common knowledge in the iterative sense. The argument rests on the assumption that Roman and Columbia’s knowledge is inexact, that is, it has a margin of error m, and that -
this is public between them. In his words:
[Interpresonal Ignorance] For all r, if it looks to be r cm tall to one of the agents, then for all that agent knows, it looks to be [r ± m] cm tall to the other. [22, p.1081]
In this quote, “for all the agent knows” is capturing the notion of “considering it possible”, or “not being ruled out by the agent’s information” frequently represented by the “diamond” operator in epistemic logic. Interpersonal ignorance thus says that for all n, if it looks to an agent that the mast is n cm tall, then that agent considers it possible that the mast looks n − m tall to the other. That fact is also considered to be public. The argument that they do not have common knowledge then r-
uns like many of the classical examples or “paradoxes” of common knowledge, most prominently the Byzantine Generals case. It builds a chain of “Roman considers it possible that Columba considers it possible that...”4
3 Philosophical Argument
We now present a first version of our argument. We claim that even granting [> 100] is not common knowledge in the iterative sense, Lewisian common knowledge can recapture the pre-theoretical intuition
3For our argument the fact that Roman and Columba are competing in a game show is not important. 4With this in hand Lederman goes on to argue for the admittedly more thought provoking claim that, for all practical purposes, iterative common knowledge does not exists, because cases of inexact knowledge are overwhelmingly common. This is much stronger than what is suggested by the Sailboat case alone, and our argument in this paper is independent of whether that stronger claim is correct.

Bozdag & Roy 193
that [> 100] is public. In other words, a failure of iterative common knowledge of [> 100] is consistent with Lewisian common knowledge of that proposition. Three remarks are in order before proceeding. First, we start with an informal version of the argument to clarify its philosophical commitments. Second, despite us talking in terms of consistency, we do not take issue with Lederman’s claim that theories associating publicity and iterative common knowledge for ideal reasoners are inconsistent w-
ith the fact that [> 100] is public in the Sailboat case [22, p.1075]. Our argument can, in fact, be read as adding support to that claim. Relatedly, it is worth re-emphasizing that we follow Lederman and assume that Roman or Columba are ideal reasoners. So the argument is not based on them only being able to entertain finitely many levels of knowledge or on them not forming the beliefs that they have reasons to form. The argument rests rather on the simple observation that having a reason to beli-
eve a proposition A is consistent with considering ¬A possible, i.e. not completely ruling out that A might be false.
Assumption: existence of a reflexive common indicator A: To argue that [> 100] is Lewisian common knowledge in the Sailboat example we need to identify a “basis”, i.e. the reflexive common indicator A that grounds the relevant higher-order reasons to believe. We simply take for granted that because Roman and Columba “have an unobstructed view of each other’s faces and an area in the middle of the stage, where the hosts will place a sailboat” they are in a “shared environment” that constitutes the -
relevant basis A for Lewisian common knowledge. We furthermore assume that A can be approximately described by a proposition, so that statements of the form “Ri(A)” are meaningful. This means, in other words, that we assume that conditions C1 and C2 hold for this appropriately described A. Finally, we assume that this A entails certain other propositions, crucially with regard to the margin of errors and [> 100].
Assumption: shared standards of reasoning: We also assume that Roman and Columba have “shared standards of reasoning.” They are ideal reasoners, and this is public between them. Standards of reasoning go, however, beyond “mere” logical omniscience, since they also capture evidential relations and common sense, defeasible inferences that either of them can make. This should be modeled more precisely using some defeasible or nonmonotonic theories for the “implies” and “if... then” statements in C4, -
but we leave that issue aside in this paper. See, however, [31] for one way to model defeasibility in Lewisian common knowledge, using probabilistic credences.
Publicity of the margins: Let us write [n − m, n + m] for the fact that the mast is at least n − m cm, at most n + m cm tall, with n being any number and m the given margin of error. We write [n] for the fact that the mast is exactly n cm tall. Publicity of the margins would then correspond to saying that A is a reflexive common indicator for the following:
∀n∀i if [n] then Ri([n − m, n + m]) (Margins)
For this we need to argue that C1-C4 hold for (Margins), given the basis A that we assume exists. We have already mentioned that C1, C2, and C4 hold by assumption about A. The fact that the margins are public then simply boils down to saying that C3 holds with B being (Margins). In other words, if Roman and Columba have a reason to believe that A holds, then they have a reason to believe (Margins). We find it a plausible assumption. By “Lewis’ Theorem” we then obtain that there is iterated, higher-
-order reason to believe (Margins), which we write rn(Margins).

194 CK, Sailboats, and Publicity
In particular, for every finite level k, we have that Roman and Columba have level-k reason to believe that (Margins) holds. For instance we get that:
RR(∀n∀i ∈ {R,C} if [n] then Ri([n − m, n + m]))
RCRR(∀n∀i ∈ {R,C} if [n] then Ri([n − m, n + m]))
RRRCRR(∀n∀i ∈ {R,C} if [n] then Ri([n − m, n + m]))
... and so on, where RR(...) should be read as “Roman has a reason to believe that...”, and similarly for RC and Columba. We furthermore assume that reasons to believe are sufficiently closed under logical consequence5 for Roman and Columba to have the corresponding (higher-order) reasons to believe every instantiation of these conditionals with specific values of n and agents R or C. We assume, for instance, that the following also holds:
RR( if [300] then RC([300 − m, 300 + m]))
RCRR( if [300 − m] then RC([300 − 2m, 300]))
RRRCRR( if [300 − 2m] then RC([300 − 3m, 300 − m]))
... and so on.
Publicity of [> 100]: We also assume that the basis A for Lewisian common knowledge is such that C3 holds for B being [> 100]. So we also have rn([> 100]). Depending on the size of the margin, there must thus be a number k of iterations of RCRR..., which we write rk..., and a number l such that 300 − (l + m) < 100 and for which the following two statements hold.
rk( if [300 − l] then RC([300 − (l + m), (300 − l) + m])
rk(RC[> 100])
We now informally claim that these two statements are consistent. The first statement in the scope of rk is a conditional, and only its consequent contradicts RC([> 100]). As long as this consequent does not detach, there is no inconsistency. It would detach if we had rk([300 − l]), assuming that the Ri operators satisfy a version of the K axiom, and taking into account the type of defeasible conditional in the scope of rk. We content that Roman and Columba do not have this type of unconditional i-
terated reason to believe, except for 300cm, the actual size of the mast. The epistemic-plausibility model that we construct below can be seen as a way to flesh out this part of the informal argument.
Consistency of publicity with failure of iterative common knowledge: Up to now our argument has been aimed at showing that even though the margins are public, it can be Lewisian common knowledge that the mast is greater than 100 cm. We now want to argue that this Lewisian common knowledge is consistent with Roman and Columba not having iterative common knowledge of that same fact. We grant for the sake of the argument that Roman and Columba consider it possible that the mast is 300 − m. They have,-
 after all, a reason to believe that [300 − m, 300 + m]. As Lederman argues,
5In the philosophical argument we require closure under logical consequence only to go from the general form of rn(Margins) to its instantiations. In the formal argument, however, use the standard semantics for the modal operators, which means that both agents are modeled as logically omniscient.

Bozdag & Roy 195
because the margins of errors are public, both consider it possible that the other has a reason to believe that [300 − 2m, 300], which in turn entails that they both consider it possible that the other considers it possible that the other has a reason to believe that [300 − 3m, 300 − m], and so on. This iteration does not stop when the lower bound of the interval is below 100, so it is not common knowledge between Roman and Columba, in the iterative sense, that the mast is taller than 100 cm. This-
 failure of iterative common knowledge of [> 100] is consistent with Lewisian common knowledge of that proposition for the simple reason that not ruling out something, say ¬C, is consistent with having a reason to believe that C is, in fact, the case. Recall that we follow Lederman and assume that Roman and Columba both consider it possible that the mast is 300 − m cm tall. This does not entail that either of them has a reason to believe [300 − m], or has a reason not to disbelieve [300 − m]. Reas-
ons to believe come in various strengths, and even a conclusive reason to believe might not ground absolute certainty. Roman and Columba might be quite confident in their assessment of the mast, but they are also aware of the margin of error. This means that even though the reason for [300] might be the strongest piece of evidence that each has, that reason might not be strong enough to completely rule out [300 − m]. In other words, having a reason to believe [300] is perfectly consistent with not-
 ruling out [300 − m]. This point generalizes to all [n], which allows the iteration of “Roman considers it possible that Columba considers it possible that Roman...” to continue past the lower bound of 100 cm without threatening Lewisian common knowledge of [> 100]. As we saw in the previous section, because the margins are public, Roman and Columba have a conditional reason to believe that if the mast was 300 − m tall, then the other would have a reason to believe [300 − 2m, 300]. And, of course-
, since they consider [300 − m] possible, they do consider it possible that the other has a reason to believe [300 − 2m, 300] and, by the same argument as in the previous paragraph, this is consistent with the other considering it possible that the mast is 300 − 2m cm tall. But this, so to speak, “possible reason to believe”, does not translate into an unconditional, second-order reason to believe that the other has a reason to believe [300 − 2m, 300], and a fortiori that the other has a reason to-
 believe that the mast is 300 − 2m cm tall. Each has, after all, a whole array of such possible reasons to believe, one for each number n in the interval [300 − m, 300 + m]. Consequently, while there is a number of iterations of “Roman considers it possible that Columba considers it possible that...” for which the mast is less than 100 cm tall, because the consequents of the relevant conditional reasons to believe do not detach, neither at the first nor at any higher-order levels, this failure of -
iterated common knowledge does not clash with the Lewisian common knowledge of [> 100]. Again, “considering it possible” is different, and crucially much weaker than having a reason to believe.6
4 An epistemic-plausibility model to flesh out the philosophical argument
We now argue that the intuitions underlying our philosophical argument can be fleshed out using a variant of epistemic-plausibility models [3, 35]. We should emphasize at the outset that we interpret these models in a slightly non-standard way, for two reasons. First, these models and the language describing them have been developed to study the relation between knowledge and conditional beliefs, and not necessarily the reasons supporting the latter. Second, the standard semantics of conditional b-
eliefs in epistemic-plausibility models is not well suited to handle cases where the condition is known to be false. To address this, we augment epistemic plausibility models with selection functions, a standard tool for analyzing counterfactual beliefs in belief revision [1] and game theory [34, 19].
6This point can also be made using the distinction between pro tanto and conclusive reasons [9]. We omit it here for reasons of space, but we elaborate on it in the full version of the paper.

196 CK, Sailboats, and Publicity
Before we proceed, a further disclaimer is in order: We do not claim that the specific variant of epistemic-plausibility models we use provides, in general, a good account of reasons to believe or of Lewisian common knowledge, nor that it should be seen as an alternative to existing formalizations of the latter [12, 33, 31, 36]. In the full paper, we expand on the reasons why. Our claim is that, given the specific features and idealizations of the Sailboat case, the construction below allows us to-
 flesh out the philosophical consistency argument in the previous section.
Language: We work with a propositional modal language whose propositional variables are of the form [n], for all n ∈ N, together with a designated proposition ⊤ that will denote propositional tautologies. We use p to designate elements of Prop = {[n] : n ∈ N} ∪ {⊤}. Our set of agents A is simply {ρ, κ}, for Roman and Columba. The propositional language is then extended with two modalities, Ri(φ|p) and Kiφ, to be read “agent i has a reason to believe φ, given p” and “agent i knows φ.” For technical-
 reasons to be explained below, we restrict the syntax so that only propositional variables can appear as conditions in formulas of the form Ri(φ|p):
p | φ ∧ ψ | ¬φ | Ri∈A(φ|p) | Ki∈Aφ
Formulas of the form Ri(φ|p) express conditional reasons to believe. We have a subjective interpretation of these conditional reasons, such as “i has a reason to believe that, given p, φ is true”, as opposed to “given p, i has a reason to believe φ”. Unconditional reasons to believe Ri(φ) are defined as Ri(φ|⊤). These formulas have a dual, which we will write ⟨Ri⟩(φ|p) and define as ¬Ri(¬φ|p), and ⟨Ki⟩φ, defined as usual. We do not use the dual of having reasons to believe in our argument below, w-
hereas ⟨Ki⟩φ is the object-language expression of “considering it possible” modality we introduced early on. With this in hand, we are able to define the higher-order notions that we will need below:
• r0(φ|p) = V
i∈A Ri(φ|p). Given rk(φ|p), we define rk+1(φ|p) as V
i∈A Ri(rk(φ|p)|p), and rn(φ|p) as rk(φ|p), for all k ∈ N.
• Similarly, ⟨Ki0⟩φ = ⟨Ki⟩φ, and ⟨Kk+1
i ⟩φ as ⟨Ki⟩⟨Kk
j ⟩φ for i ̸= j, and ⟨Kn
i ⟩φ as ⟨Kk
i ⟩φ for all n.7
Epistemic-Plausibility Frames, Models, and Selection Functions: An epistemic-plausibility frame F , given our set of agents A is a tuple ⟨W, {≤i}i∈A⟩ where W is a set of states and each ≤i is a preorder, i.e., reflexive and transitive relation on W . The strict relations w <i w′ are defined as w ≤i w′ but not w′ ≤i w. The epistemic accessibility relation ≈i is defined as: w ≈i w′ iff either w ≤i w′ or w′ ≤i w. We write [w]i for {w′ : w ≈i w′}. Given our set of propositional letters Prop = {⊤} ∪ {[-
n] : n ∈ N}, a epistemic-plausibility model M is an epistemic-plausibility frame F together with a valuation V : Prop → P(W ) such that V (⊤) = W . Given an epistemic-plausibility model M , a selection function for M is any f : (Prop ×W ) → W .8
Truth conditions: Let M be an epistemic-plausibility model and f a selection function for it. Then we set:
• M , w |= p iff w ∈ V (p).
7For the construction below we need only this limited, diamond version of higher-order knowledge, but we take the iterative common knowledge to be defined in the usual way. 8For the construction below we only need to define conditional reason to believe, and therefore selection functions, for the case where the condition is a propositional variable of our language. Hence the syntactic restriction on Ri(φ|p) and the definition of the selection function taking only arguments in Prop instead of the f-
ull language L .

Bozdag & Roy 197
• M , w |= Ri(φ|p) iff max≤i(||p|| ∩ [ f (p, w)]i) ⊆ ||φ||.
• M , w |= Kiφ iff [w]i ⊆ ||φ||
where ||φ|| = {w : M , w |= φ} and for any X ⊆ W , max≤i(X) = {w ∈ X : there is no v ∈ X such that w <i v}.
Remarks: The truth conditions for the two modal operators are spelled out using the underlying plausibility orderings ≤i. This requires some explanation. As their name suggests, the orderings ≤i are typically interpreted in terms of doxastic plausibility: w ≤i v is then meant to model the fact that i considers v at least as plausible as w. Here we slightly deviate from that standard interpretation. We take w ≤i v to model the fact that i has a reason to believe that v is at least as plausible as w-
. We take these reasons to be subjective, conclusive and normative [25]. The conditional reason-to-believe operators are then interpreted using a combination of this plausibility ordering and the selection function. Leaving the latter aside for a moment, the semantics above yields that an agent has a reason to believe ψ conditional on p whenever ψ is true in all p states (compatible with i’s total evidence) for which i has a reason to believe are maximally plausible.9 The truth conditions for both-
 the conditional reason to believe and the knowledge operators are relativized to the agent’s informational environment [w]i at any given state. This environment is, in turn, defined using the plausibility orderings ≤i: the equivalence relation ≈i generated by the connected components of ≤i [3]. Philosophically, this gives the following interpretation. All states in [w]i are those that are not excluded for the reasons to believe that i has at w. [w]i can thus be seen as capturing i’s total evidenc-
e at w [38]. Returning to the selection functions, they are meant to capture i’s conditional reasons to believe Ri(φ|p) both in cases where i’s total evidence rules out the truth of p, and in cases where i’s total evidence is consistent with p. We define a concrete selection function below, but we could also define them using general constraints that characterize minimal revisions [34]. For example, one could require that if f (φ, w) = w′ then M , w′ |= φ, or that f (φ, w) = w whenever M , w |= φ.-
 The selection function below satisfies the former, but not the latter.
Butterflies and the butterfly flutter: We are now ready to describe the main construction that fleshes out the philosophical argument presented in the previous section. We construct a specific epistemic plausibility model that fulfills three functions. First, it describes the actual situation of Roman and Columba, where both the fact that the mast is 300 cm tall, and thus larger than 100 cm, and the margins of errors, are public. Here we capture publicity by the fact that Roman and Columba have it-
erated higherorder reasons to believe these propositions.10 Second, the model captures the fact that they both entertain the relevant chains of “Roman considers it possible that Columba considers it possible... that the mast is k cm tall”, even for k smaller than 100. Finally, the model also captures the fact that Roman and Columba have the relevant reasons to believe that the first two conditions would hold, counterfactually, for any k ̸= 300. The construction accordingly proceeds in three steps -
corresponding to these three functions.
9This interpretation is not unlike standard semantics for conditional obligations in deontic logic that “lift” reason-based orderings on states to orderings on propositions [21, 13]. Our treatment of conditional reasons to believe is similar also to treatment of counterfactual type of beliefs in the Lewis-Stalnaker tradition. 10Although we argue indirectly for this, the formal argument thus leaves out an explicit representation of the fact that conditions C1-C4 hold for a given reflexive common in-
dicator. The way publicity is captured in our formal model is therefore reminiscent of the understanding of publicity in terms of common commitment to believe [37].

198 CK, Sailboats, and Publicity
Let Prop and A be as above. Now take k, m ∈ N. Intuitively, k will be the ‘center’ of the ‘butterfly’, and m the margin, with k − m > 0. Our goal is to define inductively a butterfly centered on k as an epistemic-plausibility model Mk. We start with the base case. Step 1: Body of the butterfly. The body M 0
k of the butterfly, illustrated in Figure 1, Left, is defined as:
• W 0 = {w0, w1, w2, w3, w4}.
• w0 >0
ρ w1, w0 >0
ρ w2, w0 >0
χ w3, w0 >0
χ w4
• V 0(k) = {w0},V 0(k − m) = {w1, w3},V 0(k + m) = {w2, w4}, V 0(⊤) = W 0, and V 0([l]) = /0 for all l ̸= k, k − m, k + m.
The world w0 in the body of the butterfly centered on k is called its center. The body of the butterfly models the shared environment, i.e. the reflexive common indicator A in our philosophical argument, of Roman and Columba. As we shall see below, taking k = 300 ensures that while both know that the mast is at most 300 + m and at least 300 − m tall, they have an iterated reason to believe that it is 300 cm, that is, rn([300]) holds and therefore also that the mast is larger than 100 cm. Step 2: T-
he k-centered butterfly. Suppose M n
k is defined. We call a state w minimal in M n
k whenever
there is no state w′ such that w >i w′ for some agent i. Observe that if w is minimal in M n
k then there is
a state w′ such that w′ >i w for i ∈ {ρ, χ}. It also holds that for each such minimal state w, it is never the case that there are states w′ and w′′ such that w′ >ρ w and w′′ >χ w. In other words, a minimal state w is connected to other states w′ by the relation of a unique agent i ∈ {ρ, χ}. For that reason, we can label minimal states with that unique agent i ∈ {ρ, χ}, and so call them i-terminating. M n+1
k is then
constructed as follows. For each i-terminating state w in M n
k , we add two additional states v and v′ to
W n, and extend the relations ≥n
i and the valuation V n as follows.
• Add all pairs w >n+1
j v and w >n+1
j v′, with j ̸= i, to the relevant ≥n
j.
• Extend the valuation V n with: V n+1([V ̄ n(w) + m)]) = {v}, V n+1([V ̄ n(w) − m])) = {v′}, V n(⊤) =
W n+1.
In this definition V ̄ n(w) is the inverse of the valuation function V n, giving us the number k ∈ N that is assigned to w in M n
k . If V ̄ n(w) − m < 0, we only add v. Mk, the butterfly centered on k, is then defined as
S
n∈N M n
k . See Figure 1, Right. The induction steps thus extend the butterfly with two “wings”, whose
[k]
[k − m]
[k + m]
[k − m]
[k + m]
ρ
ρ
χ
χ
[k]
[k − m]
[k + m]
[k − m]
[k + m]
ρ
ρ
χ
χ
[k − 2m]
[k]
[k]
[k + 2m]
[k − 3m]
[k − m]
[k − m]
[k + m] [k − m]
[k + m]
[k + m]
[k + 3m]
[k − 2m]
[k]
[k]
[k + 2m]
[k − 3m]
[k − m]
[k − m]
[k + m] [k − m]
[k + m]
[k + m]
[k + 3m]
Figure 1: A k-centered butterfly (Right), and its body (Left). The red and blue arrows represent Roman’s and Columba’s plausibility orderings, respectively.
function is to capture the higher-order uncertainty of Roman and Columba. Indeed, as we shall also see below, moving along each of the paths starting at k generates a chain of “Roman/Columba considers it possible that Columba/Roman considers it possible... that the mast is l cm”, even for l smaller than 100.

Bozdag & Roy 199
Step 3: The butterfly flutter. The last step is simply to put together the k-centered butterflies, for all k ∈ N, to build a flutter. These copies will be used to define the conditional beliefs. A butterfly flutter S is the disjoint union • Sk∈N Mk of the k-centered butterflies for all k ∈ N, together with a selection function f.
We can now define a selection function in detail as follows: For all w and [k] ∈ Prop, f ([k], w) is the center of the k-centered butterfly in S . For ⊤, we set f (⊤, w) to be the center of the k-centered butterfly for the unique k such that w ∈ V ([k]). Observe that by this construction all conditional and unconditional belief statements are evaluated at the center of a butterfly. Introducing a selection function as such allows us to evaluate within epistemic plausibility models reasons to believ-
e a proposition A that is consistent with considering ¬A possible. Key facts: Take the butterfly flutter defined above, and w be the center of the butterfly centered on 300, and let m be the margin of error. The following facts capture the key points of our philosophical argument. Their proofs are elementary, so for reason of space we only sketch them here.
1. Both agents know that the mast is 300 ± m cm tall: S , w |= Kρ ([300 − m] ∨ [300] ∨ [300 + m]), and similarly for χ. Argument: clear by construction.
2. Both agents have an unconditional reason to believe that the mast is 300 cm tall: S , w |= Rρ ([300]), and similarly for χ. Argument: [300] is true at w, by the definition of f , we have f (⊤, w) = w, and w is maximal in [w]ρ .
3. Roman and Columba have iterated higher-order reasons to believe that the mast is 300 ± m cm tall: S , w |= rn
{ρ,χ}([300−m]∨[300]∨[300+m]). This also means S , w |= rn
{ρ,χ}([> 100]). Argument:
We have already seen that f (⊤, w) = w and that w is maximal in [w]ρ and [w]χ . So at every iteration of higher-order reasons to believe the only state considered is w itself.
4. Roman and Columba have the corresponding counterfactual, iterated higher-order reasons to believe that the mast is k cm tall for any k ∈ N: For i ∈ {ρ, χ}, we have S , w |= rn(R j([k])|[k]). Argument: This is ensured by modifying for k the argument above for 300, together with the fact that f (k, w) is the center of the relevant butterfly centered on k in S .
5. [> 100] is not common knowledge in the iterated sense, i.e., for all l such that 300 − (l.m) > 0, there is r such that S , w |= ⟨Ki⟩⟨Kr
j ⟩[300 − (l.m)]. Argument: recall that v ≈i v′ is defined as v ≥i v′
or v′ ≥i v. That the fact holds can then be verified by following the uppermost paths to the left and the right of the center in Figure 1, assuming that k = 300.
Facts 1 to 5 together flesh out the philosophical argument that we developed in Section 3. They show that iterative higher-order reasons to believe that [> 100] is consistent, now in the precise, logical sense of the term, with, first, a failure of iterative common knowledge of that same proposition and, second, the relevant iterative, higher-order counterfactual reasons to believe that we described in Section 3. The fact that these counterfactual reasons to believe are consistent with [> 100] at -
w shows that they do not detach.
5 Conclusion
We have argued both philosophically and formally that understanding publicity in terms of Lewisian common knowledge allows one to give a satisfactory analysis of the Sailboat example. The crux of the philosophical argument is the fact that having a reason to believe in a proposition A is consistent with considering it possible that A is false. This allows Lewisian common knowledge of [> 100] to hold

200 CK, Sailboats, and Publicity
even when iterative common knowledge of that proposition fails. The formal construction in Section 4 makes this intuition concrete by modeling, respectively, reasons to believe using plausibility orderings and knowledge using their connected components.
We should emphasize that these arguments should not be read as criticism of, or proposal to “replace” the iterative or fixed-point definitions of common knowledge with its Lewisian counterpart. These definitions have been extremely helpful in a number of areas, in particular for understanding the type of “back-and-forth” reasoning underlying game-theoretical solution concepts [32, 29]. What the argument suggests is that Lewisian common knowledge is perhaps better suited than iterative common knowl-
edge to capture precisely the pre-theoretical notion of publicity, and that this should be taken into account when analyzing concrete cases that involve the latter. Of course, there remain numerous other cases where this view should be put to test: e.g. the classical Byzantine generals example, the Halpern-Moses problem, the consecutive numbers example, or philosophical accounts of collective agency that rely on iterative common knowledge. Other logical framework could be used to represent those c-
ases, for instance the ones developed in [2] or in [14, 6] We leave those for future work, but conjecture that Lewisian common knowledge would prove illuminating in those cases too.
Acknowledgements
The authors would like to thank the anonymous reviewers of TARK for helpful comments and suggestions, as well as the participants of the CELIA project meeting 2025. Financial support of the DFGGACR project CELIA (RO 4548/13-1) is gratefully acknowledged.
References
[1] Carlos E Alchourr ́on, Peter Ga ̈rdenfors & David Makinson (1985): On the logic of theory change: Partial meet contraction and revision functions. The journal of symbolic logic 50(2), pp. 510–530, doi:10.2307/2274239.
[2] Alexandru Baltag & Johan van Benthem (2018): Some Thoughts on the Logic of Imprecise Observation. Tsinghua University Journal of Philosophy, Issue 2018.
[3] Alexandru Baltag & Sonja Smets (2016): A Qualitative Theory of Dynamic Interactive Belief Revision. Readings in Formal Epistemology: Sourcebook, pp. 813–858, doi:10.1007/978-3-319-20451-2-39.
[4] Jon Barwise (1988): Three views of common knowledge. In: Proceedings of the 2nd conference on Theoretical aspects of reasoning about knowledge, pp. 365–379, doi:10.1007/978-3-319-20451-2-37.
[5] Jon Barwise (1989): The Situation in Logic. CSLI lecture notes.
[6] Marta B ́ılkova ́, Hans van Ditmarsch, Roman Kuznets & Rojo Randrianomentsoa (2024): Bisimulation for Impure Simplicial Complexes. arXiv preprint arXiv:2406.16785, doi:10.48550/arXiv.2406.16785.
[7] Olle Blomberg (2016): Common knowledge and reductionism about shared agency. Australasian Journal of Philosophy 94(2), pp. 315–326, doi:10.1080/00048402.2015.1055581.
[8] Michael E Bratman (2013): Shared agency: A planning theory of acting together. Oxford University Press.
[9] John Broome (2005): Does rationality give us reasons? Philosophical Issues 15, pp. 321–337, doi:10.1111/j.1533-6077.2005.00069.x.
[10] Michael Suk-Young Chwe (2013): Rational ritual: Culture, coordination, and common knowledge. Princeton University Press, doi:10.23943/princeton/9780691158280.001.0001.

Bozdag & Roy 201
[11] Herbert H. Clark & Catherine R. Marshall (1981): Definite Knowledge and Mutual Knowledge. In Aravind K. Joshi, Bonnie L. Webber & Ivan A. Sag, editors: Elements of Discourse Understanding, Cambridge University Press, pp. 10–63.
[12] Robin P Cubitt & Robert Sugden (2003): Common Knowledge, Salience and Convention: A Reconstruction of David Lewis’ Game Theory. Economics & Philosophy 19(2), pp. 175–210, doi:10.1017/S0266267103001123.
[13] Franz Dietrich & Christian List (2013): A reason-based theory of rational choice. Nous 47(1), pp. 104–134, doi:10.1111/j.1468-0068.2011.00840.x.
[14] Hans van Ditmarsch (2021): Wanted dead or alive: Epistemic logic for impure simplicial complexes. In: Logic, Language, Information, and Computation: 27th International Workshop, WoLLIC 2021, Virtual Event, October 5–8, 2021, Proceedings 27, Springer, pp. 31–46, doi:10.1007/978-3-030-88853-4 3.
[15] John Geanakoplos (1994): Common knowledge. Handbook of game theory with economic applications 2, pp. 1437–1496, doi:10.1016/S1574-0005(05)80072-4.
[16] Margaret Gilbert (1992): On social facts. Princeton University Press, doi:10.1515/9780691214627.
[17] Margaret Gilbert (2007): Mutual recognition, common knowledge, and joint attention. Hommage a` Wlodek: Philosophical papers dedicated to Wlodek Rabinowicz, pp. 1–21.
[18] Yannai A Gonczarowski & Yoram Moses (2023): Common Knowledge, Regained. arXiv preprint arXiv:2311.04374, doi:10.48550/arXiv.2311.04374.
[19] Joseph Y Halpern (2001): Substantive rationality and backward induction. Games and Economic Behavior 37(2), pp. 425–435, doi:10.1006/game.2000.0838.
[20] Joseph Y Halpern & Yoram Moses (1990): Knowledge and common knowledge in a distributed environment. Journal of the ACM (JACM) 37(3), pp. 549–587, doi:10.1145/79147.79161.
[21] Dick de Jongh & Fenrong Liu (2009): Preference, priorities and belief. In: Preference change: Approaches from philosophy, economics and psychology, Springer, pp. 85–107, doi:10.1007/978-90-481-2593-7 4.
[22] Harvey Lederman (2018): Uncommon knowledge. Mind 127(508), pp. 1069–1105, doi:10.1093/mind/fzw072.
[23] David Lewis (2008): Convention: A philosophical study. John Wiley & Sons.
[24] John McCarthy, Masahiko Sato, Takeshi Hayashi & Shigeru Igarashi (1978): On the model theory of knowledge. Technical Report.
[25] David McNaughton & Piers Rawling (2018): Motivating reasons and normative reasons. The Oxford handbook of reasons and normativity, pp. 171–196, doi:10.1093/oxfordhb/9780199657889.013.0008.
[26] Paul Milgrom (1981): An axiomatic characterization of common knowledge. Econometrica: Journal of the Econometric Society, pp. 219–222, doi:10.2307/1911137.
[27] Stephen Morris (2014): Coordination, timing and common knowledge. Research in Economics 68(4), pp. 306–314, doi:10.1016/j.rie.2014.04.004.
[28] Martin J Osborne & Ariel Rubinstein (1994): A course in game theory. MIT press.
[29] Eric Pacuit & Olivier Roy (2017): Epistemic Foundations of Game Theory. In Edward N. Zalta, editor: The Stanford Encyclopedia of Philosophy, Summer 2017 edition, Metaphysics Research Lab, Stanford University.
[30] Rohit Parikh (2005): Logical omniscience and common knowledge: WHAT do we know and what do WE know? In: TARK, 5, Citeseer, pp. 62–77, doi:10.1145/1089933.1089943.
[31] Cedric Paternotte (2011): Being realistic about common knowledge: a Lewisian approach. Synthese 183(2), pp. 249–276, doi:10.1007/s11229-010-9770-y.
[32] Andre ́s Perea (2012): Epistemic game theory: reasoning and choice. Cambridge University Press, doi:10.1017/CBO9780511844072.

202 CK, Sailboats, and Publicity
[33] Giacomo Sillari (2008): Common knowledge and convention. Topoi 27, pp. 29–39, doi:10.1007/s11245-0089030-7.
[34] Robert Stalnaker (1996): Knowledge, belief and counterfactual reasoning in games. Economics & Philosophy 12(2), pp. 133–163, doi:10.1017/S0266267100004132.
[35] Johan van Benthem (2011): Logical dynamics of information and interaction. Cambridge University Press, doi:10.1017/CBO9780511974533.
[36] Huub Vromen (2023): Reasoning with reasons: Lewis on common knowledge. Economics & Philosophy, pp. 1–22, doi:10.1017/S0266267123000238.
[37] J Robert G Williams (2023): Publicity and Common Commitment to Believe. Erkenntnis 88(3), pp. 10591080, doi:10.1007/s10670-021-00393-x.
[38] Timothy Williamson (1997): Knowledge as evidence. Mind 106(424), pp. 717–741, doi:10.1093/mind/106.424.717.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:24.591Z
- **Text Length:** 44316 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
