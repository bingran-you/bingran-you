# PDF Document: L2_TasksDataEval.pdf

**File Path:** L2_TasksDataEval.pdf

**Processed Date:** 2026-02-10T18:16:53.552Z

**File Size:** 15330.54 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2692

**Collection:** Large Files

---

## Extracted Text Content

NLP Tasks, Data, and
Evaluation
EECS 183/283a: Natural Language Processing

Today
• What tasks have NLP researchers historically cared about?
• How do we evaluate success on these tasks?
• Dominant paradigm: automatic metrics computed on
static benchmarks
• As models have improved their abilities, how have our
evaluations changed?

Tasks and Evaluation
Metrics

Classification
• Input: text data
• Output: label from a closed set

Binary Classification
• Input: text data
• Output: label from a closed set
• Spam detection
Not Spam

Binary Classification
Spam
• Input: text data
• Output: label from a closed set
• Spam detection

Multiclass Classification
Battle-tested industrial managers here always buck
up nervous newcomers with the tale of the first of
their countrymen to visit Mexico, a boatload of
samurai warriors blown ashore 375 years ago.
JJ JJ NNS RB RB VB
RP JJ NNS IN DT NN IN DT JJ IN
PP NNS TO VB NNP DT NN IN
NNS NNS VB RB CD NNS RB
• Input: text data
• Output: label from a closed set
• Part of speech tagging

Evaluation
Battle-tested industrial ...
Battle-tested industrial ...
... industrial managers here ...
... managers here always ...
... here always buck up ...
... blown ashore 375 years ago.
Input
(31 words)
Correct
Label
JJ
JJ
NNS
RB
RB
RB
......
VBD
JJ
NNS
RB
RB
RB
...

Confusion Matrix
JJ RB IN TO DT NN NNS NNP PP VB VBN VBD CD
JJ 2 1 1
RB 5
IN 4
TO 1
DT 3
NN 2
NNS 6
NNP 1
PP 1
VB 2
VBN 1
VBD
CD 1
Predicted Class
Target Class
Count examples for each pair of (target class, predicted class)

4 incorrect
27 correct
Accuracy
What % of model predictions are correct?
27/31 =
87.1%
accuracy
JJ RB IN TO DT NN NNS NNP PP VB VBN VBD CD
JJ 2 1 1
RB 5
IN 4
TO 1
DT 3
NN 2
NNS 6
NNP 1
PP 1
VB 2
VBN 1
VBD
CD 1
Predicted Class
Target Class

3 false positive
2 true positive
Precision
For a particular class, how many of the model’s predictions of that
class are accurate? (how precise is the model?)
TP
TP + FP
2/5 =
40%
precision
JJ RB IN TO DT NN NNS NNP PP VB VBN VBD CD
JJ 2 1 1
RB 5
IN 4
TO 1
DT 3
NN 2
NNS 6
NNP 1
PP 1
VB 2
VBN 1
VBD
CD 1
Predicted Class
Target Class
Class: singular noun (NN)

0 false negative
2 true positive
Recall
For examples with a particular correct class label, how often does the
model accurately predict that label? (how well does the model recall
the items for a particular class?)
TP
TP + FN
2/2 =
100%
recall
JJ RB IN TO DT NN NNS NNP PP VB VBN VBD CD
JJ 2 1 1
RB 5
IN 4
TO 1
DT 3
NN 2
NNS 6
NNP 1
PP 1
VB 2
VBN 1
VBD
CD 1
Predicted Class
Target Class
Class: singular noun (NN)

F1 Score
Harmonic mean of precision and recall (overall, how well is the
model doing with a particular class?)
2xPxR
P+R
2 x 0.4 x 1.0
0.4 + 1.0
=
0.57 F1
JJ RB IN TO DT NN NNS NNP PP VB VBN VBD CD
JJ 2 1 1
RB 5
IN 4
TO 1
DT 3
NN 2
NNS 6
NNP 1
PP 1
VB 2
VBN 1
VBD
CD 1
Predicted Class
Target Class
Class: singular noun (NN)

Automatic Speech Recognition
• ASR performance is measured using error rates
• Sentence error rate (exact match) can be too penalizing (1 or 0)
• Word Error Rate (WER) captures average number (%) of wrong
words in the transcript
• For now, let’s assume words are separated by spaces
• For languages that are not space delimited, Character Error
Rate (CER) can be used
Task: Convert a speech utterance into a text transcript

Word Error Rate (WER)
• Reference : Take me to UC campus (# words N=5)
• ASR Transcript : Take me to you see campus
• 1 substitution 1 insertion 0 deletions
• WER = 2/5 * 100 = 40 %
• WER can be greater than 100% (eg. Too many insertions)
• S + D + I needs to be computed using Edit (Levenshtein)
distance
Possible Errors : Substitutions (S), Deletions (D), Insertions (I)
<latexit sha1_base64="TlEKNPTVe2evIuVrNKeih2Qw5WQ=">AAACGXicbZDLSsNAFIYn9VbrLerSzWARBKEkItVlURe6kYr2Ak0pk+mkHTq5MHMilpDXcOOruHGhiEtd+TZO24DaemDg4//P4cz53UhwBZb1ZeTm5hcWl/LLhZXVtfUNc3OrrsJYUlajoQhl0yWKCR6wGnAQrBlJRnxXsIY7OBv5jTsmFQ+DWxhGrO2TXsA9TgloqWNaTteThCYOsHtIblJ8gCd4/oOXaZr5V2naMYtWyRoXngU7gyLKqtoxP5xuSGOfBUAFUaplWxG0EyKBU8HSghMrFhE6ID3W0hgQn6l2Mr4sxXta6WIvlPoFgMfq74mE+EoNfVd3+gT6atobif95rRi8k3bCgygGFtDJIi8WGEI8igl3uWQUxFADoZLrv2LaJzop0GEWdAj29MmzUD8s2eVS+fqoWDnN4sijHbSL9pGNjlEFXaAqqiGKHtATek-
GvxqPxbLwZ75PWnJHNbKM/ZXx+A4ZdoUo=</latexit>
S+D+I
N

Levenshtein/Edit distance
Dynamic Programming based edit matrix computation d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0.
1. Take
2. me d[i,j]
3. to
4. UC
5.
campus
Reference (j)
Transcript or Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
Calculate the least
cost alignment/edit
path allowing
insertion, deletion
and substitution of
words
# Insertion
# Substitution # Deletion

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
Reference (j)
Hypothesis (i)
Initialize 0 cost in
extra row/column
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0
1. Take
2. me
3. to
4. UC
5.
campus
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
Take me to You See Campus
0
Take
me
to
UC
Campus
Reference (j)
Hypothesis (i)
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. d[i-1, j]
+1
1. Take d[i, j-1]
+1
2. me
3. to
4. UC
5.
campus
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
Take me to You See Campus
0
Take
me
to
UC
Campus
Reference (j)
Hypothesis (i)
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 1
1. Take 1 min(1,
1, 0)
2. me
3. to
4. UC
5.
campus
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1
1. Take 1 0
2. me
3. to
4. UC
5.
campus
Reference (j)
Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2
1. Take 1 0 min(2,1,3)
2. me
3. to
4. UC
5.
campus
Reference (j)
Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2
1. Take 1 0 1
2. me 2 1 0
3. to
4. UC
5.
campus
Reference (j)
Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2 3
1. Take 1 0 1 2
2. me 2 1 0 1
3. to 3 2 1 0
4. UC
5.
campus
Reference (j)
Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2 3 4
1. Take 1 0 1 2 3
2. me 2 1 0 1 2
3. to 3 2 1 0 1
4. UC 4 3 1 1 1
5.
campus
Reference (j)
Hypothesis (i)
Substitution!
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2 3 4 5
1. Take 1 0 1 2 3 4
2. me 2 1 0 1 2 3
3. to 3 2 1 0 1 2
4. UC 4 3 1 1 1 2
5.
campus 5 4 2 2 2 2
Reference (j)
Hypothesis (i)
d [ i, j ] = min ( d [ i-1, j ] + 1 ,
d [i , j -1] + 1 ,
d [i -1 , j -1] + local_substitution (i , j) )
# Insertion
# Deletion
# Substitution
“Grow” the edit
matrix iteratively,
by accumulating
the cost for each
element d [i,j]

Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2 3 4 5 6
1. Take 1 0 1 2 3 4 5
2. me 2 1 0 1 2 3 4
3. to 3 2 1 0 1 2 3
4. UC 4 3 1 1 1 2 2
5.
campus 5 4 2 2 2 2 2
Reference (j)
Hypothesis (i)
Edit cost
d[N, M] = 2
WER = 2/5 = 40%

0. 1. Take 2. me 3. to 4. you 5. see 6.
campus
0. 0 1 2 3 4 5 6
1. Take 1 0 1 2 3 4 5
2. me 2 1 0 1 2 3 4
3. to 3 2 1 0 1 2 3
4. UC 4 3 1 1 1 2 2
5.
campus 5 4 2 2 2 2 2
Levenshtein/Edit distance
Dynamic Programming based edit matrix d [N, M]
Reference (j)
Hypothesis (i)
Optimal path:
tells us what
the errors were
substitution insertion

Structured Prediction
• Input: text data
• Output: structured
combination of labels from
a closed set
• Syntactic (constituency)
parsing
Penn Treebank, Marcus et al. 1993
Marcus et al. 1993, CL, “Building a large annotated corpus of English”

Structured Prediction
• Input: text data
• Output: structured
combination of labels from
a closed set
• Syntactic (dependency)
parsing
Generated from https://hanlp.hankcs.com/en/

Structured Prediction
• Input: text data
• Output: structured
combination of labels from
a closed set
• Semantic parsing
(abstract meaning
representation)

Structured Prediction
• Input: text data
• Output: structured
combination of labels from
a closed set
• Semantic parsing
(text-to-SQL)
Task-specific eval metrics:
- exact match accuracy
- execution accuracy
airline #
AA 123
Delta 456
......
JetBlue 404
airline #
AA 123
Delta 456
......
United 789
?=

Structured Prediction
• Input: text data
• Output: structured
combination of labels from
a closed set
• Semantic parsing
(code generation)
Task-specific eval metrics:
- exact match accuracy
- test case pass rate
HumanEval, Chen et al. 2021
Chen et al. 2021, “Evaluating large language models trained on code”

Text Comprehension
• Input: text data
• Output: short piece of text
(extractive QA: span in
input text)
Rajpurkar et al. 2016
Rajpurkar et al. 2016, EMNLP, “SQuAD”
Task-specific eval metrics:
- span selection accuracy

Information Extraction
• Input: lots of text data
• Output: structured representation of information
Lockard et al. 2020, ACL tutorial on Multi-Modal Information Extraction
Task-specific eval metrics:
- precision of extracted facts
- recall of known facts

Question Answering
• Input: none
• Output: short piece of text
• Factual and commonsense
If someone wants to
submerge themselves
in water, what should
they use?
Options
(a) coffee cup
(b) whirlpool bath
(c) cup
(d) puddle
Example from Holtzman et al. 2021, EMNLP, “Surface form competition”
0.2%
0.1%
0.3%
0.3%
Task-specific eval metrics:
- multiple-choice accuracy

Question Answering
• Input: none
• Output: short piece of text
• Factual and commonsense
If someone wants to
submerge themselves
in water, what should
they use?
Example from Holtzman et al. 2021, EMNLP, “Surface form competition”
bathtub
most likely
answer
Task-specific eval metrics:
- multiple-choice accuracy
- string similarity?
≈ whirlpool bath

Reference-Based
Text Generation
• Input: text data
• Output: same text, but in a different language
• Machine translation
The bottle floated into the cave
La botella entró a la cuerva flotando
Example from Yoav Artzi

Reference-Based
Evaluation: BLEU
• Reference
The most natural form of language use is dialogue.
• System outputs / candidates
The most common form of language use is conversation.
The most common form of language is speech.
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="k3XHulc28TWo2L9LrYdkOluQtKk=">AAAB7nicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4jmAWSIfR0epImPQvdNcIw5CO8eFDEq9/jzb+xJ4ng+qDpx3tVVNXzEyk0Os67VVpZXVvfKG9WtrZ3dveq+wcdHaeK8TaLZax6PtVcioi3UaDkvURxGvqSd/3pVeF377jSIo5uMUu4F9JxJALBKBqpO5hQzLPZsFpz7LpTgPwmrj3/nRos0RpW3wajmKUhj5BJqnXfdRL0cqpQMMlnlUGqeULZlI5539CIhlx7+XzdGTkxyogEsTIvQjJXv3bkNNQ6C31TGVKc6J9eIf7l9VMMLrxcREmKPGKLQUEqCcakuJ2MhOIMZWYIZUqYXQmbUEUZmoQqJoTPS8n/pFO33YbduDmrNS+XcZThCI7hFFw4hyZcQwvawGAK9/AIT1ZiPVjP1suitGQtew7hG6zXD74Rj9-
s=</latexit>
yˆ
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2

Reference-Based
Evaluation: BLEU
• Reference
The most natural form of language use is dialogue.
• System outputs / candidates
The most common form of language use is conversation.
The most common form of language is speech.
• is the set of n-grams in sequence
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="k3XHulc28TWo2L9LrYdkOluQtKk=">AAAB7nicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4jmAWSIfR0epImPQvdNcIw5CO8eFDEq9/jzb+xJ4ng+qDpx3tVVNXzEyk0Os67VVpZXVvfKG9WtrZ3dveq+wcdHaeK8TaLZax6PtVcioi3UaDkvURxGvqSd/3pVeF377jSIo5uMUu4F9JxJALBKBqpO5hQzLPZsFpz7LpTgPwmrj3/nRos0RpW3wajmKUhj5BJqnXfdRL0cqpQMMlnlUGqeULZlI5539CIhlx7+XzdGTkxyogEsTIvQjJXv3bkNNQ6C31TGVKc6J9eIf7l9VMMLrxcREmKPGKLQUEqCcakuJ2MhOIMZWYIZUqYXQmbUEUZmoQqJoTPS8n/pFO33YbduDmrNS+XcZThCI7hFFw4hyZcQwvawGAK9/AIT1ZiPVjP1suitGQtew7hG6zXD74Rj9-
s=</latexit>
yˆ
<latexit sha1_base64="2Wp5nmRzSJCRKdg+thmPeYq/NRU=">AAAB7XicdVDLSgMxFL1TX7W+qi7dBItQN8NMkeqy6EKXFWwttEPJpJk2NpMMSUYsQ//BjQtF3Po/7vwb04fg80DI4Zx7ufeeMOFMG897d3ILi0vLK/nVwtr6xuZWcXunqWWqCG0QyaVqhVhTzgRtGGY4bSWK4jjk9Docnk3861uqNJPiyowSGsS4L1jECDZWap53RfnusFsseW7FmwD9Jr47/b0SzFHvFt86PUnSmApDONa67XuJCTKsDCOcjgudVNMEkyHu07alAsdUB9l02zE6sEoPRVLZJwyaql87MhxrPYpDWxljM9A/vYn4l9dOTXQSZEwkqaGCzAZFKUdGosnpqMcUJYaPLMFEMbsrIgOsMDE2oIIN4fNS9D9pVly/6lYvj0q103kcediDfSiDD8dQgwuoQwMI3MA9PMKTI50H59l5mZXmnHnPLnyD8/oBzU-
OOpA==</latexit>
Gn (x) <latexitsha1_base64="Y+ACyBc/uJRta2WUe2bAkfUpw7I=">AAAB6HicdVDLSgNBEOyNrxhfUY9eBoPgadkNEj0GvXhMwCRCsoTZSW8yZvbBzKwYlnyBFw+KePWTvPk3ziYRfBYMU1R1093lJ4Ir7TjvVmFpeWV1rbhe2tjc2t4p7+61VZxKhi0Wi1he+1Sh4BG2NNcCrxOJNPQFdvzxRe53blEqHkdXepKgF9JhxAPOqDZS865frjh21clBfhPXnv1OBRZo9MtvvUHM0hAjzQRVqus6ifYyKjVnAqelXqowoWxMh9g1NKIhKi+bLTolR0YZkCCW5kWazNSvHRkNlZqEvqkMqR6pn14u/uV1Ux2ceRmPklRjxOaDglQQHZP8ajLgEpkWE0Mok9zsStiISsq0yaZkQvi8lPxP2lXbrdm15kmlfr6IowgHcAjH4MIp1OESGtACBgj38AhP1o31YD1bL/PSgrXo2YdvsF4/APKJ-
jQ0=</latexit> x
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2

Reference-Based
Evaluation: BLEU
• Reference
The most natural form of language use is dialogue.
• System outputs / candidates
The most common form of language use is conversation.
The most common form of language is speech.
• is the set of n-grams in sequence
the, most, natural, form, of, language, use, is, dialogue, .
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="k3XHulc28TWo2L9LrYdkOluQtKk=">AAAB7nicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4jmAWSIfR0epImPQvdNcIw5CO8eFDEq9/jzb+xJ4ng+qDpx3tVVNXzEyk0Os67VVpZXVvfKG9WtrZ3dveq+wcdHaeK8TaLZax6PtVcioi3UaDkvURxGvqSd/3pVeF377jSIo5uMUu4F9JxJALBKBqpO5hQzLPZsFpz7LpTgPwmrj3/nRos0RpW3wajmKUhj5BJqnXfdRL0cqpQMMlnlUGqeULZlI5539CIhlx7+XzdGTkxyogEsTIvQjJXv3bkNNQ6C31TGVKc6J9eIf7l9VMMLrxcREmKPGKLQUEqCcakuJ2MhOIMZWYIZUqYXQmbUEUZmoQqJoTPS8n/pFO33YbduDmrNS+XcZThCI7hFFw4hyZcQwvawGAK9/AIT1ZiPVjP1suitGQtew7hG6zXD74Rj9-
s=</latexit>
yˆ
<latexit sha1_base64="2Wp5nmRzSJCRKdg+thmPeYq/NRU=">AAAB7XicdVDLSgMxFL1TX7W+qi7dBItQN8NMkeqy6EKXFWwttEPJpJk2NpMMSUYsQ//BjQtF3Po/7vwb04fg80DI4Zx7ufeeMOFMG897d3ILi0vLK/nVwtr6xuZWcXunqWWqCG0QyaVqhVhTzgRtGGY4bSWK4jjk9Docnk3861uqNJPiyowSGsS4L1jECDZWap53RfnusFsseW7FmwD9Jr47/b0SzFHvFt86PUnSmApDONa67XuJCTKsDCOcjgudVNMEkyHu07alAsdUB9l02zE6sEoPRVLZJwyaql87MhxrPYpDWxljM9A/vYn4l9dOTXQSZEwkqaGCzAZFKUdGosnpqMcUJYaPLMFEMbsrIgOsMDE2oIIN4fNS9D9pVly/6lYvj0q103kcediDfSiDD8dQgwuoQwMI3MA9PMKTI50H59l5mZXmnHnPLnyD8/oBzU-
OOpA==</latexit>
Gn (x) <latexitsha1_base64="Y+ACyBc/uJRta2WUe2bAkfUpw7I=">AAAB6HicdVDLSgNBEOyNrxhfUY9eBoPgadkNEj0GvXhMwCRCsoTZSW8yZvbBzKwYlnyBFw+KePWTvPk3ziYRfBYMU1R1093lJ4Ir7TjvVmFpeWV1rbhe2tjc2t4p7+61VZxKhi0Wi1he+1Sh4BG2NNcCrxOJNPQFdvzxRe53blEqHkdXepKgF9JhxAPOqDZS865frjh21clBfhPXnv1OBRZo9MtvvUHM0hAjzQRVqus6ifYyKjVnAqelXqowoWxMh9g1NKIhKi+bLTolR0YZkCCW5kWazNSvHRkNlZqEvqkMqR6pn14u/uV1Ux2ceRmPklRjxOaDglQQHZP8ajLgEpkWE0Mok9zsStiISsq0yaZkQvi8lPxP2lXbrdm15kmlfr6IowgHcAjH4MIp1OESGtACBgj38AhP1o31YD1bL/PSgrXo2YdvsF4/APKJ-
jQ0=</latexit> x
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="QAJUXRufR59hGTBMHZMGlfJMWJk=">AAAB8nicdVDLSsNAFJ3UV62vqks3g0Wom5AUqW6EogtdVrAPSEOZTCft0MkkzNwIJfQz3LhQxK1f486/cdJW8HlgmMM593LvPUEiuAbHebcKS8srq2vF9dLG5tb2Tnl3r63jVFHWorGIVTcgmgkuWQs4CNZNFCNRIFgnGF/mfueOKc1jeQuThPkRGUoeckrASN5V361OjvE57mX9csWxa04O/Ju49ux3KmiBZr/81hvENI2YBCqI1p7rJOBnRAGngk1LvVSzhNAxGTLPUEkipv1stvIUHxllgMNYmScBz9SvHRmJtJ5EgamMCIz0Ty8X//K8FMIzP+MySYFJOh8UpgJDjPP78YArRkFMDCFUcbMrpiOiCAWTUsmE8Hkp/p+0a7Zbt+s3J5XGxSKOIjpAh6iKXHSKGugaNVELURSje/SIniywHqxn62VeWrAWPfvoG6-
zXDzfMj+4=</latexit>
G1(y) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
unigram

Reference-Based
Evaluation: BLEU
• Reference
The most natural form of language use is dialogue.
• System outputs / candidates
The most common form of language use is conversation.
The most common form of language is speech.
• is the set of n-grams in sequence
the, most, natural, form, of, language, use, is, dialogue, .
the most, most natural, natural form, form of, ...
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="k3XHulc28TWo2L9LrYdkOluQtKk=">AAAB7nicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4jmAWSIfR0epImPQvdNcIw5CO8eFDEq9/jzb+xJ4ng+qDpx3tVVNXzEyk0Os67VVpZXVvfKG9WtrZ3dveq+wcdHaeK8TaLZax6PtVcioi3UaDkvURxGvqSd/3pVeF377jSIo5uMUu4F9JxJALBKBqpO5hQzLPZsFpz7LpTgPwmrj3/nRos0RpW3wajmKUhj5BJqnXfdRL0cqpQMMlnlUGqeULZlI5539CIhlx7+XzdGTkxyogEsTIvQjJXv3bkNNQ6C31TGVKc6J9eIf7l9VMMLrxcREmKPGKLQUEqCcakuJ2MhOIMZWYIZUqYXQmbUEUZmoQqJoTPS8n/pFO33YbduDmrNS+XcZThCI7hFFw4hyZcQwvawGAK9/AIT1ZiPVjP1suitGQtew7hG6zXD74Rj9-
s=</latexit>
yˆ
<latexit sha1_base64="2Wp5nmRzSJCRKdg+thmPeYq/NRU=">AAAB7XicdVDLSgMxFL1TX7W+qi7dBItQN8NMkeqy6EKXFWwttEPJpJk2NpMMSUYsQ//BjQtF3Po/7vwb04fg80DI4Zx7ufeeMOFMG897d3ILi0vLK/nVwtr6xuZWcXunqWWqCG0QyaVqhVhTzgRtGGY4bSWK4jjk9Docnk3861uqNJPiyowSGsS4L1jECDZWap53RfnusFsseW7FmwD9Jr47/b0SzFHvFt86PUnSmApDONa67XuJCTKsDCOcjgudVNMEkyHu07alAsdUB9l02zE6sEoPRVLZJwyaql87MhxrPYpDWxljM9A/vYn4l9dOTXQSZEwkqaGCzAZFKUdGosnpqMcUJYaPLMFEMbsrIgOsMDE2oIIN4fNS9D9pVly/6lYvj0q103kcediDfSiDD8dQgwuoQwMI3MA9PMKTI50H59l5mZXmnHnPLnyD8/oBzU-
OOpA==</latexit>
Gn (x) <latexitsha1_base64="Y+ACyBc/uJRta2WUe2bAkfUpw7I=">AAAB6HicdVDLSgNBEOyNrxhfUY9eBoPgadkNEj0GvXhMwCRCsoTZSW8yZvbBzKwYlnyBFw+KePWTvPk3ziYRfBYMU1R1093lJ4Ir7TjvVmFpeWV1rbhe2tjc2t4p7+61VZxKhi0Wi1he+1Sh4BG2NNcCrxOJNPQFdvzxRe53blEqHkdXepKgF9JhxAPOqDZS865frjh21clBfhPXnv1OBRZo9MtvvUHM0hAjzQRVqus6ifYyKjVnAqelXqowoWxMh9g1NKIhKi+bLTolR0YZkCCW5kWazNSvHRkNlZqEvqkMqR6pn14u/uV1Ux2ceRmPklRjxOaDglQQHZP8ajLgEpkWE0Mok9zsStiISsq0yaZkQvi8lPxP2lXbrdm15kmlfr6IowgHcAjH4MIp1OESGtACBgj38AhP1o31YD1bL/PSgrXo2YdvsF4/APKJ-
jQ0=</latexit> x
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="QAJUXRufR59hGTBMHZMGlfJMWJk=">AAAB8nicdVDLSsNAFJ3UV62vqks3g0Wom5AUqW6EogtdVrAPSEOZTCft0MkkzNwIJfQz3LhQxK1f486/cdJW8HlgmMM593LvPUEiuAbHebcKS8srq2vF9dLG5tb2Tnl3r63jVFHWorGIVTcgmgkuWQs4CNZNFCNRIFgnGF/mfueOKc1jeQuThPkRGUoeckrASN5V361OjvE57mX9csWxa04O/Ju49ux3KmiBZr/81hvENI2YBCqI1p7rJOBnRAGngk1LvVSzhNAxGTLPUEkipv1stvIUHxllgMNYmScBz9SvHRmJtJ5EgamMCIz0Ty8X//K8FMIzP+MySYFJOh8UpgJDjPP78YArRkFMDCFUcbMrpiOiCAWTUsmE8Hkp/p+0a7Zbt+s3J5XGxSKOIjpAh6iKXHSKGugaNVELURSje/SIniywHqxn62VeWrAWPfvoG6-
zXDzfMj+4=</latexit>
G1(y) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexit sha1_base64="SrACJ8Hllqe/jmy1eKvtykGo/VI=">AAAB8nicdVDLSsNAFL2pr1pfVZduBotQNyUpUt0IRRe6rGAfkIYymU7aoZNMmJkIIfQz3LhQxK1f486/cdJW8HlgmMM593LvPX7MmdK2/W4VlpZXVteK66WNza3tnfLuXkeJRBLaJoIL2fOxopxFtK2Z5rQXS4pDn9OuP7nM/e4dlYqJ6FanMfVCPIpYwAjWRnKvBvVqeozOUT8blCt2rW7nQL+JU5v9dgUWaA3Kb/2hIElII004Vsp17Fh7GZaaEU6npX6iaIzJBI+oa2iEQ6q8bLbyFB0ZZYgCIc2LNJqpXzsyHCqVhr6pDLEeq59eLv7luYkOzryMRXGiaUTmg4KEIy1Qfj8aMkmJ5qkhmEhmdkVkjCUm2qRUMiF8Xor+J516zWnUGjcnlebFIo4iHMAhVMGBU2jCNbSgDQQE3MMjPFnaerCerZd5acFa9OzDN1-
ivHzlYj+8=</latexit>
G2(y) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
bigram

Reference-Based
Evaluation: BLEU
• Reference
The most natural form of language use is dialogue.
• System outputs / candidates
The most common form of language use is conversation.
The most common form of language is speech.
• is the set of n-grams in sequence
the, most, natural, form, of, language, use, is, dialogue, .
the most, most natural, natural form, form of, ...
• is the number of occurrences of n-gram in
the, = 1 most, = 1 natural form, = 1
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="k3XHulc28TWo2L9LrYdkOluQtKk=">AAAB7nicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4jmAWSIfR0epImPQvdNcIw5CO8eFDEq9/jzb+xJ4ng+qDpx3tVVNXzEyk0Os67VVpZXVvfKG9WtrZ3dveq+wcdHaeK8TaLZax6PtVcioi3UaDkvURxGvqSd/3pVeF377jSIo5uMUu4F9JxJALBKBqpO5hQzLPZsFpz7LpTgPwmrj3/nRos0RpW3wajmKUhj5BJqnXfdRL0cqpQMMlnlUGqeULZlI5539CIhlx7+XzdGTkxyogEsTIvQjJXv3bkNNQ6C31TGVKc6J9eIf7l9VMMLrxcREmKPGKLQUEqCcakuJ2MhOIMZWYIZUqYXQmbUEUZmoQqJoTPS8n/pFO33YbduDmrNS+XcZThCI7hFFw4hyZcQwvawGAK9/AIT1ZiPVjP1suitGQtew7hG6zXD74Rj9-
s=</latexit>
yˆ
<latexit sha1_base64="2Wp5nmRzSJCRKdg+thmPeYq/NRU=">AAAB7XicdVDLSgMxFL1TX7W+qi7dBItQN8NMkeqy6EKXFWwttEPJpJk2NpMMSUYsQ//BjQtF3Po/7vwb04fg80DI4Zx7ufeeMOFMG897d3ILi0vLK/nVwtr6xuZWcXunqWWqCG0QyaVqhVhTzgRtGGY4bSWK4jjk9Docnk3861uqNJPiyowSGsS4L1jECDZWap53RfnusFsseW7FmwD9Jr47/b0SzFHvFt86PUnSmApDONa67XuJCTKsDCOcjgudVNMEkyHu07alAsdUB9l02zE6sEoPRVLZJwyaql87MhxrPYpDWxljM9A/vYn4l9dOTXQSZEwkqaGCzAZFKUdGosnpqMcUJYaPLMFEMbsrIgOsMDE2oIIN4fNS9D9pVly/6lYvj0q103kcediDfSiDD8dQgwuoQwMI3MA9PMKTI50H59l5mZXmnHnPLnyD8/oBzU-
OOpA==</latexit>
Gn (x) <latexitsha1_base64="Y+ACyBc/uJRta2WUe2bAkfUpw7I=">AAAB6HicdVDLSgNBEOyNrxhfUY9eBoPgadkNEj0GvXhMwCRCsoTZSW8yZvbBzKwYlnyBFw+KePWTvPk3ziYRfBYMU1R1093lJ4Ir7TjvVmFpeWV1rbhe2tjc2t4p7+61VZxKhi0Wi1he+1Sh4BG2NNcCrxOJNPQFdvzxRe53blEqHkdXepKgF9JhxAPOqDZS865frjh21clBfhPXnv1OBRZo9MtvvUHM0hAjzQRVqus6ifYyKjVnAqelXqowoWxMh9g1NKIhKi+bLTolR0YZkCCW5kWazNSvHRkNlZqEvqkMqR6pn14u/uV1Ux2ceRmPklRjxOaDglQQHZP8ajLgEpkWE0Mok9zsStiISsq0yaZkQvi8lPxP2lXbrdm15kmlfr6IowgHcAjH4MIp1OESGtACBgj38AhP1o31YD1bL/PSgrXo2YdvsF4/APKJ-
jQ0=</latexit> x
<latexit sha1_base64="4kGc1IUyBHzmTrgaV9VdzWgDGlU=">AAAB7nicdVDLSgMxFL1TX7W+qi7dBItQQYaZUqrLYjcuK9gHtEPJpJk2NJMZkoxYhn6EGxeKuPV73Pk3ZtoKPg+EHM65l3vv8WPOlHacdyu3srq2vpHfLGxt7+zuFfcP2ipKJKEtEvFIdn2sKGeCtjTTnHZjSXHoc9rxJ43M79xSqVgkbvQ0pl6IR4IFjGBtpE6jrM7Q3emgWHLsipMB/SauPf+dEizRHBTf+sOIJCEVmnCsVM91Yu2lWGpGOJ0V+omiMSYTPKI9QwUOqfLS+bozdGKUIQoiaZ7QaK5+7UhxqNQ09E1liPVY/fQy8S+vl+jgwkuZiBNNBVkMChKOdISy29GQSUo0nxqCiWRmV0TGWGKiTUIFE8Lnpeh/0q7Ybs2uXVdL9ctlHHk4gmMogwvnUIcraEILCEzgHh7hyYqtB+vZelmU5qxlzyF8g/X6Ad-
dajpw=</latexit>
C ( s , x) <latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A-
6vWNCA==</latexit> s <latexitsha1_base64="Y+ACyBc/uJRta2WUe2bAkfUpw7I=">AAAB6HicdVDLSgNBEOyNrxhfUY9eBoPgadkNEj0GvXhMwCRCsoTZSW8yZvbBzKwYlnyBFw+KePWTvPk3ziYRfBYMU1R1093lJ4Ir7TjvVmFpeWV1rbhe2tjc2t4p7+61VZxKhi0Wi1he+1Sh4BG2NNcCrxOJNPQFdvzxRe53blEqHkdXepKgF9JhxAPOqDZS865frjh21clBfhPXnv1OBRZo9MtvvUHM0hAjzQRVqus6ifYyKjVnAqelXqowoWxMh9g1NKIhKi+bLTolR0YZkCCW5kWazNSvHRkNlZqEvqkMqR6pn14u/uV1Ux2ceRmPklRjxOaDglQQHZP8ajLgEpkWE0Mok9zsStiISsq0yaZkQvi8lPxP2lXbrdm15kmlfr6IowgHcAjH4MIp1OESGtACBgj38AhP1o31YD1bL/PSgr-
Xo2YdvsF4/APKJjQ0=</latexit> x
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="QAJUXRufR59hGTBMHZMGlfJMWJk=">AAAB8nicdVDLSsNAFJ3UV62vqks3g0Wom5AUqW6EogtdVrAPSEOZTCft0MkkzNwIJfQz3LhQxK1f486/cdJW8HlgmMM593LvPUEiuAbHebcKS8srq2vF9dLG5tb2Tnl3r63jVFHWorGIVTcgmgkuWQs4CNZNFCNRIFgnGF/mfueOKc1jeQuThPkRGUoeckrASN5V361OjvE57mX9csWxa04O/Ju49ux3KmiBZr/81hvENI2YBCqI1p7rJOBnRAGngk1LvVSzhNAxGTLPUEkipv1stvIUHxllgMNYmScBz9SvHRmJtJ5EgamMCIz0Ty8X//K8FMIzP+MySYFJOh8UpgJDjPP78YArRkFMDCFUcbMrpiOiCAWTUsmE8Hkp/p+0a7Zbt+s3J5XGxSKOIjpAh6iKXHSKGugaNVELURSje/SIniywHqxn62VeWrAWPfvoG6-
zXDzfMj+4=</latexit>
G1(y) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexit sha1_base64="SrACJ8Hllqe/jmy1eKvtykGo/VI=">AAAB8nicdVDLSsNAFL2pr1pfVZduBotQNyUpUt0IRRe6rGAfkIYymU7aoZNMmJkIIfQz3LhQxK1f486/cdJW8HlgmMM593LvPX7MmdK2/W4VlpZXVteK66WNza3tnfLuXkeJRBLaJoIL2fOxopxFtK2Z5rQXS4pDn9OuP7nM/e4dlYqJ6FanMfVCPIpYwAjWRnKvBvVqeozOUT8blCt2rW7nQL+JU5v9dgUWaA3Kb/2hIElII004Vsp17Fh7GZaaEU6npX6iaIzJBI+oa2iEQ6q8bLbyFB0ZZYgCIc2LNJqpXzsyHCqVhr6pDLEeq59eLv7luYkOzryMRXGiaUTmg4KEIy1Qfj8aMkmJ5qkhmEhmdkVkjCUm2qRUMiF8Xor+J516zWnUGjcnlebFIo4iHMAhVMGBU2jCNbSgDQQE3MMjPFnaerCerZd5acFa9OzDN1-
ivHzlYj+8=</latexit>
G2(y) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexit sha1_base64="JqTTSsQpg5WO6m0nbkwtNUB3jEk=">AAAB6XicdVDLSgMxFL3xWeur6tJNsAhdDTNFqstiNy6r2Ae0Q8mkmTY0kxmSjFCG/oEbF4q49Y/c+Tdm2go+D4QczrmXe+8JEsG1cd13tLK6tr6xWdgqbu/s7u2XDg7bOk4VZS0ai1h1A6KZ4JK1DDeCdRPFSBQI1gkmjdzv3DGleSxvzTRhfkRGkoecEmOlm0ZlUCq7TtXNgX8Tz5n/bhmWaA5Kb/1hTNOISUMF0brnuYnxM6IMp4LNiv1Us4TQCRmxnqWSREz72XzTGT61yhCHsbJPGjxXv3ZkJNJ6GgW2MiJmrH96ufiX10tNeOFnXCapYZIuBoWpwCbG+dl4yBWjRkwtIVRxuyumY6IINTacog3h81L8P2lXHa/m1K7PyvXLZRwFOIYTqIAH51CHK2hCCyiEcA+P8IQm6AE9o5dF6Qpa9hzBN6DXDwQLjQo=</-
latexit>
C(
<latexit sha1_base64="v/mCo896eqtPd8PpY9yVfss0xGM=">AAAB6XicdVDLSsNAFL2pr1pfVZduBougm5AUqS6LblxWMW2hDWUynbRDJ5MwMxFC6B+4caGIW//InX/jpK3g88Awh3Pu5d57goQzpR3n3SotLa+srpXXKxubW9s71d29topTSahHYh7LboAV5UxQTzPNaTeRFEcBp51gcln4nTsqFYvFrc4S6kd4JFjICNZGuslOBtWaY9edAug3ce3Z79Rggdag+tYfxiSNqNCEY6V6rpNoP8dSM8LptNJPFU0wmeAR7RkqcESVn882naIjowxRGEvzhEYz9WtHjiOlsigwlRHWY/XTK8S/vF6qw3M/ZyJJNRVkPihMOdIxKs5GQyYp0TwzBBPJzK6IjLHERJtwKiaEz0vR/6Rdt92G3bg+rTUvFnGU4QAO4RhcOIMmXEELPCAQwj08wpM1sR6sZ+tlXlqyFj378A3W6wdXnY1B</-
latexit>
y)
<latexit sha1_base64="JqTTSsQpg5WO6m0nbkwtNUB3jEk=">AAAB6XicdVDLSgMxFL3xWeur6tJNsAhdDTNFqstiNy6r2Ae0Q8mkmTY0kxmSjFCG/oEbF4q49Y/c+Tdm2go+D4QczrmXe+8JEsG1cd13tLK6tr6xWdgqbu/s7u2XDg7bOk4VZS0ai1h1A6KZ4JK1DDeCdRPFSBQI1gkmjdzv3DGleSxvzTRhfkRGkoecEmOlm0ZlUCq7TtXNgX8Tz5n/bhmWaA5Kb/1hTNOISUMF0brnuYnxM6IMp4LNiv1Us4TQCRmxnqWSREz72XzTGT61yhCHsbJPGjxXv3ZkJNJ6GgW2MiJmrH96ufiX10tNeOFnXCapYZIuBoWpwCbG+dl4yBWjRkwtIVRxuyumY6IINTacog3h81L8P2lXHa/m1K7PyvXLZRwFOIYTqIAH51CHK2hCCyiEcA+P8IQm6AE9o5dF6Qpa9hzBN6DXDwQLjQo=</-
latexit>
C(
<latexit sha1_base64="v/mCo896eqtPd8PpY9yVfss0xGM=">AAAB6XicdVDLSsNAFL2pr1pfVZduBougm5AUqS6LblxWMW2hDWUynbRDJ5MwMxFC6B+4caGIW//InX/jpK3g88Awh3Pu5d57goQzpR3n3SotLa+srpXXKxubW9s71d29topTSahHYh7LboAV5UxQTzPNaTeRFEcBp51gcln4nTsqFYvFrc4S6kd4JFjICNZGuslOBtWaY9edAug3ce3Z79Rggdag+tYfxiSNqNCEY6V6rpNoP8dSM8LptNJPFU0wmeAR7RkqcESVn882naIjowxRGEvzhEYz9WtHjiOlsigwlRHWY/XTK8S/vF6qw3M/ZyJJNRVkPihMOdIxKs5GQyYp0TwzBBPJzK6IjLHERJtwKiaEz0vR/6Rdt92G3bg+rTUvFnGU4QAO4RhcOIMmXEELPCAQwj08wpM1sR6sZ+tlXlqyFj378A3W6wdXnY1B</-
latexit>
y)
<latexit sha1_base64="JqTTSsQpg5WO6m0nbkwtNUB3jEk=">AAAB6XicdVDLSgMxFL3xWeur6tJNsAhdDTNFqstiNy6r2Ae0Q8mkmTY0kxmSjFCG/oEbF4q49Y/c+Tdm2go+D4QczrmXe+8JEsG1cd13tLK6tr6xWdgqbu/s7u2XDg7bOk4VZS0ai1h1A6KZ4JK1DDeCdRPFSBQI1gkmjdzv3DGleSxvzTRhfkRGkoecEmOlm0ZlUCq7TtXNgX8Tz5n/bhmWaA5Kb/1hTNOISUMF0brnuYnxM6IMp4LNiv1Us4TQCRmxnqWSREz72XzTGT61yhCHsbJPGjxXv3ZkJNJ6GgW2MiJmrH96ufiX10tNeOFnXCapYZIuBoWpwCbG+dl4yBWjRkwtIVRxuyumY6IINTacog3h81L8P2lXHa/m1K7PyvXLZRwFOIYTqIAH51CHK2hCCyiEcA+P8IQm6AE9o5dF6Qpa9hzBN6DXDwQLjQo=</-
latexit>
C(
<latexit sha1_base64="v/mCo896eqtPd8PpY9yVfss0xGM=">AAAB6XicdVDLSsNAFL2pr1pfVZduBougm5AUqS6LblxWMW2hDWUynbRDJ5MwMxFC6B+4caGIW//InX/jpK3g88Awh3Pu5d57goQzpR3n3SotLa+srpXXKxubW9s71d29topTSahHYh7LboAV5UxQTzPNaTeRFEcBp51gcln4nTsqFYvFrc4S6kd4JFjICNZGuslOBtWaY9edAug3ce3Z79Rggdag+tYfxiSNqNCEY6V6rpNoP8dSM8LptNJPFU0wmeAR7RkqcESVn882naIjowxRGEvzhEYz9WtHjiOlsigwlRHWY/XTK8S/vF6qw3M/ZyJJNRVkPihMOdIxKs5GQyYp0TwzBBPJzK6IjLHERJtwKiaEz0vR/6Rdt92G3bg+rTUvFnGU4QAO4RhcOIMmXEELPCAQwj08wpM1sR6sZ+tlXlqyFj378A3W6wdXnY1B</-
latexit>
y)

Reference-Based
Evaluation: BLEU
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the
most
common
form
of
language
use
is
conversation
.

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1
most 1
common 1
form 1
of 1
language 1
use 1
is 1
conversation 1
.1
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1
most 1 1
common 1 0
form 1 1
of 1 1
language 1 1
use 1 1
is 1 1
conversation 1 0
. 11
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
use 1 1 1
is 1 1 1
conversation 1 0 0
. 11 1
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
use 1 1 1
is 1 1 1
conversation 1 0 0
. 11 1
Sum 8
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="z6fX+sY78dv44sqjEgBkdTb/ys8=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1HeO4Bl0c9+s2VbDLgB/E8eadbsGFmj75ps7jHEaEa4wQ1IOHDtRXo6EopiRacVNJUkQnqARGWjKUUSkl8+On8JDrQxhGAtdXMGZ+nUjR5GUWRToyQipsfzpFeJf3iBV4amXU56kinA8fyhMGVQxLJKAQyoIVizTBGFB9a0Qj5FAWOm8KjqEz5/C/0m3YTlNq3l9XGudL+Iog31wAOrAASegBa5AG3QABhm4B4/gybgzHoxn42-
U+WjIWO1XwDcbrB8ADk5A=</latexit>
G1(yˆ1) = {
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
use 1 1 1
is 1 1 1
conversation 1 0 0
. 11 1
Sum 10 8
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
= 8 / 10 = 0.8
<latexit sha1_base64="HPSgUQI6V02gCYtbWAdrIURZxuE=">AAAB+nicdVDLSsNAFL2pr1pfqS7dDBahgpSkSHVZdOOygn1AG8JkOmmHTh7MTJQQ+yluXCji1i9x5984aSv4PHC5h3PuZe4cL+ZMKst6NwpLyyura8X10sbm1vaOWd7tyCgRhLZJxCPR87CknIW0rZjitBcLigOP0643ucj97g0VkkXhtUpj6gR4FDKfEay05JrllmtXB2OssnTq2scoPXLNilWrWznQb2LXZt2qwAIt13wbDCOSBDRUhGMp+7YVKyfDQjHC6bQ0SCSNMZngEe1rGuKASiebnT5Fh1oZIj8SukKFZurXjQwHUqaBpycDrMbyp5eLf3n9RPlnTsbCOFE0JPOH/IQjFaE8BzRkghLFU00wEUzfisgYC0yUTqukQ/j8KfqfdOo1u1FrXJ1UmueLOIqwDwdQBRtOoQmX0II2ELiFe3iEJ+POeDCejZf5aM-
FY7OzBNxivH6CPkvY=</latexit>
P1(yˆ1, y)
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language use is conversation.
the, most, common, form, of, language, use, is, conversation, .

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the
most
common
form
of
language
is
speech
.

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1
most 1
common 1
form 1
of 1
language 1
is 1
speech 1
.1

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1
most 1 1
common 1 0
form 1 1
of 1 1
language 1 1
is 1 1
speech 1 0
. 11

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
is 1 1 1
speech 1 0 0
. 11 1

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
is 1 1 1
speech 1 0 0
. 11 1
Sum 7

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
The most common form of language is speech.
the, most, common, form, of, language, is, speech, .
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="+L/SulQogoxgXmoFjM5/9BnOl7A=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyEpUt0IRRe6rGAf0IQwmU7aoZNJmJkIIdRfceNCEbd+iDv/xklbweeByz2ccy9z5wQJo1LZ9rtRWlpeWV0rr1c2Nre2d8zdva6MU4FJB8csFv0AScIoJx1FFSP9RBAUBYz0gslF4fduiZA05jcqS4gXoRGnIcVIack3q5e+U3fHSOXZ1G8cwTPo5r5Zs62GXQD+Jo4163YNLND2zTd3GOM0IlxhhqQcOHaivBwJRTEj04qbSpIgPEEjMtCUo4hIL58dP4WHWhnCMBa6uIIz9etGjiIpsyjQkxFSY/nTK8S/vEGqwlMvpzxJFeF4/lCYMqhiWCQBh1QQrFimCcKC6lshHiOBsNJ5VXQInz+F/5Nuw3KaVvP6uNY6X8RRBvvgANSBA05AC1yBNugADDJwDx7Bk3FnPBjPxs-
t8tGQsdqrgG4zXD8GNk5E=</latexit>
G1(yˆ2) = {
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
the 1 1 1
most 1 1 1
common 1 0 0
form 1 1 1
of 1 1 1
language 1 1 1
is 1 1 1
speech 1 0 0
. 11 1
Sum 9 7 = 7 / 9 = 0.77
= 8 / 10 = 0.8
<latexit sha1_base64="HPSgUQI6V02gCYtbWAdrIURZxuE=">AAAB+nicdVDLSsNAFL2pr1pfqS7dDBahgpSkSHVZdOOygn1AG8JkOmmHTh7MTJQQ+yluXCji1i9x5984aSv4PHC5h3PuZe4cL+ZMKst6NwpLyyura8X10sbm1vaOWd7tyCgRhLZJxCPR87CknIW0rZjitBcLigOP0643ucj97g0VkkXhtUpj6gR4FDKfEay05JrllmtXB2OssnTq2scoPXLNilWrWznQb2LXZt2qwAIt13wbDCOSBDRUhGMp+7YVKyfDQjHC6bQ0SCSNMZngEe1rGuKASiebnT5Fh1oZIj8SukKFZurXjQwHUqaBpycDrMbyp5eLf3n9RPlnTsbCOFE0JPOH/IQjFaE8BzRkghLFU00wEUzfisgYC0yUTqukQ/j8KfqfdOo1u1FrXJ1UmueLOIqwDwdQBRtOoQmX0II2ELiFe3iEJ+POeDCejZf5aM-
FY7OzBNxivH6CPkvY=</latexit>
P1(yˆ1, y)
<latexit sha1_base64="KT3J2itCjh+rTxl8SE/Gghu1tN8=">AAAB+nicdVDLSsNAFL2pr1pfqS7dDBahgpSkSHVZdOOygn1AG8JkOmmHTh7MTJQQ+yluXCji1i9x5984aSv4PHC5h3PuZe4cL+ZMKst6NwpLyyura8X10sbm1vaOWd7tyCgRhLZJxCPR87CknIW0rZjitBcLigOP0643ucj97g0VkkXhtUpj6gR4FDKfEay05JrllmtXB2OssnTq1o9ReuSaFatWt3Kg38SuzbpVgQVarvk2GEYkCWioCMdS9m0rVk6GhWKE02lpkEgaYzLBI9rXNMQBlU42O32KDrUyRH4kdIUKzdSvGxkOpEwDT08GWI3lTy8X//L6ifLPnIyFcaJoSOYP+QlHKkJ5DmjIBCWKp5pgIpi+FZExFpgonVZJh/D5U/Q/6dRrdqPWuDqpNM8XcRRhHw6gCjacQhMuoQVtIHAL9/AIT8ad8WA8Gy/z0Y-
Kx2NmDbzBePwCiF5L3</latexit>
P1(yˆ2, y)

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
language
language
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
<latexit sha1_base64="8jqKmqlK/no4deIsckoA4UtSGg4=">AAAB/HicdVDLSsNAFJ3UV62vaJduBotQNyGpUt0IRRe6rGBboQlhMp20QyeTMDMRQqi/4saFIm79EHf+jZO2gs8Dl3s4517mzgkSRqWy7XejtLC4tLxSXq2srW9sbpnbO10ZpwKTDo5ZLG4CJAmjnHQUVYzcJIKgKGCkF4zPC793S4SkMb9WWUK8CA05DSlGSku+Wb3wnbo7QirPJv7hATyFbu6bNdtq2AXgb+JY027XwBxt33xzBzFOI8IVZkjKvmMnysuRUBQzMqm4qSQJwmM0JH1NOYqI9PLp8RO4r5UBDGOhiys4Vb9u5CiSMosCPRkhNZI/vUL8y+unKjzxcsqTVBGOZw+FKYMqhkUScEAFwYplmiAsqL4V4hESCCudV0WH8PlT+D/pNiynaTWvjmqts3kcZbAL9kAdOOAYtMAlaIMOwCAD9+ARPBl3xoPxbL-
zMRkvGfKcKvsF4/QDDF5OS</latexit>
G1(yˆ3) = {
<latexit sha1_base64="p82nb6viBgMe6iSBhEYfmncx1Kc=">AAAB6XicdVBNSwMxEJ2tX7V+VT16CRbB07ItUj0WvXisYmuhXUo2zbah2eySzApl6T/w4kERr/4jb/4bs20FPx+EPN6bYWZekEhh0PPencLS8srqWnG9tLG5tb1T3t1rmzjVjLdYLGPdCajhUijeQoGSdxLNaRRIfhuML3L/9o5rI2J1g5OE+xEdKhEKRtFK171pv1zx3JqXg/wmVXf2exVYoNkvv/UGMUsjrpBJaky36iXoZ1SjYJJPS73U8ISyMR3yrqWKRtz42WzTKTmyyoCEsbZPIZmpXzsyGhkziQJbGVEcmZ9eLv7ldVMMz/xMqCRFrth8UJhKgjHJzyYDoTlDObGEMi3sroSNqKYMbTglG8LnpeR/0q651bpbvzqpNM4XcRThAA7hGKpwCg24hCa0gEEI9/AIT87YeXCenZd5acFZ9OzDNzivH6rcjXg=</-
latexit>
}
<latexitsha1_base64="EU9o9etr1puNMD4yWDCEKtfOPZI=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qw5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGTxP0QjqKeMAZ1UZqqkG54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2suo1JwJnJX6qcKEsgkdYc/QiIaovGy+6IycGGVIgliaF2kyV792ZDRUahr6pjKkeqx+ern4l9dLdXDhZTxKUo0RWwwKUkF0TPKryZBLZFpMDaFMcrMrYWMqKdMmm5IJ4fNS8j9pV223ZteaZ5X65TKOIhzBMZyCC+dQh2toQAsYINzDIzxZt9aD9Wy9LEoL1rLnEL7Bev0A6vWNCA==</l-
atexit> s
<latexit sha1_base64="GrO5+hFGyXlE3aeLgoN7m1FHCM8=">AAAB9HicdVDLSgMxFL1TX7W+qi7dBItQQYZpkeqy2I3LCvYB7VAyaaYNzWTGJFMYhn6HGxeKuPVj3Pk3ZtoKPg9c7uGce8nN8SLOlHacdyu3srq2vpHfLGxt7+zuFfcP2iqMJaEtEvJQdj2sKGeCtjTTnHYjSXHgcdrxJo3M70ypVCwUtzqJqBvgkWA+I1gbyW2U1Rnqj7FOk9npoFhy7KqTAf0mFXvenRIs0RwU3/rDkMQBFZpwrFSv4kTaTbHUjHA6K/RjRSNMJnhEe4YKHFDlpvOjZ+jEKEPkh9KU0Giuft1IcaBUEnhmMsB6rH56mfiX14u1f+mmTESxpoIsHvJjjnSIsgTQkElKNE8MwUQycysiYywx0Sanggnh86fof9Ku2pWaXbs5L9WvlnHk4QiOoQwVuIA6XEMTWkDgDu7hEZ6sqfVgPVsvi9Gctdw5hG-
+wXj8ArLiRag==</latexit>
C(s, yˆ)
<latexit sha1_base64="l7g97Yrvb76Gg+SFBiEpgiCmLIk=">AAAB7nicdVDLSsNAFL2pr1pfVZduBotQQUJSpLosduOygn1AG8pkOmmHTiZhZiKE0I9w40IRt36PO//GSVvB54FhDufcy733+DFnSjvOu1VYWV1b3yhulra2d3b3yvsHHRUlktA2iXgkez5WlDNB25ppTnuxpDj0Oe3602bud++oVCwStzqNqRfisWABI1gbqdusqjOUng7LFceuOTnQb+La89+pwBKtYfltMIpIElKhCcdK9V0n1l6GpWaE01lpkCgaYzLFY9o3VOCQKi+brztDJ0YZoSCS5gmN5urXjgyHSqWhbypDrCfqp5eLf3n9RAeXXsZEnGgqyGJQkHCkI5TfjkZMUqJ5aggmkpldEZlgiYk2CZVMCJ+Xov9Jp2a7dbt+c15pXC3jKMIRHEMVXLiABlxDC9pAYAr38AhPVmw9WM/Wy6K0YC17DuEbrNcP2N-
+OnQ==</latexit>
C(s, y)
<latexit sha1_base64="x6IYWZ1blDgVFv2ebFva6/KS47s=">AAACBHicdVDLSgMxFM34rPU16rKbYBFaKMO0SHVZ7MZlBfuAzlAyaaYNzWSGJCMMQxdu/BU3LhRx60e482/MTCv4PBBycs693NzjRYxKZdvvxsrq2vrGZmGruL2zu7dvHhz2ZBgLTLo4ZKEYeEgSRjnpKqoYGUSCoMBjpO/N2pnfvyFC0pBfqyQiboAmnPoUI6WlkVlyAsor7YqsQWeKVJrMazB/JdXqyCzbVsPOAH+TupXfdhks0RmZb844xHFAuMIMSTms25FyUyQUxYzMi04sSYTwDE3IUFOOAiLdNF9iDk+0MoZ+KPThCubq144UBVImgacrA6Sm8qeXiX95w1j5525KeRQrwvFikB8zqEKYJQLHVBCsWKIJwoLqv0I8RQJhpXMr6hA+N4X/k17Dqjet5tVpuXWxjKMASuAYVEAdnIEWuAQd0AUY3IJ78AiejD-
vjwXg2XhalK8ay5wh8g/H6AWcclgc=</latexit>
min(C(s, yˆ, C(s, y))
language 1 1 1
Sum 1 1
<latexit sha1_base64="HEg6jgI/EtBWp2e6KygnZX4APmU=">AAAB+nicdVDLSsNAFL3xWesr1aWbwSJUkJBUqS6LblxWsA9oQ5hMp+3QyYOZiRJiP8WNC0Xc+iXu/BsnbQWfBy73cM69zJ3jx5xJZdvvxsLi0vLKamGtuL6xubVtlnZaMkoEoU0S8Uh0fCwpZyFtKqY47cSC4sDntO2PL3K/fUOFZFF4rdKYugEehmzACFZa8sxSw3MqvRFWWTrxjo9QeuiZZduq2jnQb+JY026XYY6GZ771+hFJAhoqwrGUXceOlZthoRjhdFLsJZLGmIzxkHY1DXFApZtNT5+gA6300SASukKFpurXjQwHUqaBrycDrEbyp5eLf3ndRA3O3IyFcaJoSGYPDRKOVITyHFCfCUoUTzXBRDB9KyIjLDBROq2iDuHzp+h/0qpaTs2qXZ2U6+fzOAqwB/tQAQdOoQ6X0IAmELiFe3iEJ+POeDCejZfZ6I-
Ix39mFbzBePwCjn5L4</latexit>
P1(yˆ3, y) = 1 / 1 = 1.0 ?

Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
<latexit sha1_base64="o5tHAIQB3YsDCLY18wfcxphNzio=">AAACYXicdVFNb9QwEHVCoW2gJZRjLyNWoK0ES1KhwgVUtZceF4ltK22WleOd3bXqOKk9QY2y+ZPcuHDpH6mz3SLKx0iWn9+8mbGf00JJS1H0w/MfrD18tL6xGTx+srX9NHy2c2rz0ggciFzl5jzlFpXUOCBJCs8LgzxLFZ6lF8dt/uwbGitz/YWqAkcZn2k5lYKTo8bhVUJ4RfVRv+kmc0511byGag8+QpCkOJO6Fq65bYIYXsFipVgAfIJFtYAkCfBr3Y3hTXvce/tL0NxTJwovW0GQoJ7cNRyHnai3H7UBf4O4t9yjDltFfxx+Tya5KDPUJBS3dhhHBY1qbkgKhU2QlBYLLi74DIcOap6hHdVLhxp46ZgJTHPjliZYsr9X1DyztspSp8w4ze2fuZb8V25Y0vTDqJa6KAm1uB00LRVQDq3dMJEGBanKAS6MdHcFMe-
eGC3Kf0ppw91L4Pzjd78UHvYPP7zqHRys7Ntgue8G6LGbv2SE7YX02YIL99Na8LW/bu/Y3/dDfuZX63qrmObsX/u4Ne5q0cg==</latexit>
BP(yˆ, y) =
(
1 |yˆ| > |y|
e(1 |y|)/|yˆ| |yˆ|  |y|
n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
language

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
language
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
<latexit sha1_base64="o5tHAIQB3YsDCLY18wfcxphNzio=">AAACYXicdVFNb9QwEHVCoW2gJZRjLyNWoK0ES1KhwgVUtZceF4ltK22WleOd3bXqOKk9QY2y+ZPcuHDpH6mz3SLKx0iWn9+8mbGf00JJS1H0w/MfrD18tL6xGTx+srX9NHy2c2rz0ggciFzl5jzlFpXUOCBJCs8LgzxLFZ6lF8dt/uwbGitz/YWqAkcZn2k5lYKTo8bhVUJ4RfVRv+kmc0511byGag8+QpCkOJO6Fq65bYIYXsFipVgAfIJFtYAkCfBr3Y3hTXvce/tL0NxTJwovW0GQoJ7cNRyHnai3H7UBf4O4t9yjDltFfxx+Tya5KDPUJBS3dhhHBY1qbkgKhU2QlBYLLi74DIcOap6hHdVLhxp46ZgJTHPjliZYsr9X1DyztspSp8w4ze2fuZb8V25Y0vTDqJa6KAm1uB00LRVQDq3dMJEGBanKAS6MdHcFMe-
eGC3Kf0ppw91L4Pzjd78UHvYPP7zqHRys7Ntgue8G6LGbv2SE7YX02YIL99Na8LW/bu/Y3/dDfuZX63qrmObsX/u4Ne5q0cg==</latexit>
BP(yˆ, y) =
(
1 |yˆ| > |y|
e(1 |y|)/|yˆ| |yˆ|  |y|
<latexit sha1_base64="9BSRKCZ5EuCcRZmcLSup02N8vAU=">AAAB7XicdVDLSsNAFL2pr1pfVZduBovgKiRFqhuh6MZlBfuANpTJdNKOnUzCzEQIaf/BjQtF3Po/7vwbJ20FnweGOZxzL/fe48ecKe0471ZhaXllda24XtrY3NreKe/utVSUSEKbJOKR7PhYUc4EbWqmOe3EkuLQ57Ttjy9zv31HpWKRuNFpTL0QDwULGMHaSK1JOkHnqF+uOHbVyYF+E9ee/U4FFmj0y2+9QUSSkApNOFaq6zqx9jIsNSOcTku9RNEYkzEe0q6hAodUedls2yk6MsoABZE0T2g0U792ZDhUKg19UxliPVI/vVz8y+smOjjzMibiRFNB5oOChCMdofx0NGCSEs1TQzCRzOyKyAhLTLQJqGRC+LwU/U9aVdut2bXrk0r9YhFHEQ7gEI7BhVOowxU0oAkEbuEeHuHJiqwH69l6mZcWrEXPPnyD9foB6F-
eOtQ==</latexit>
|y| = 10
<latexit sha1_base64="wBXiqaGPKAx6npqxqQE1kETZqJs=">AAAB+HicdVDLSsNAFL3xWeujUZduBotQQUJSpLosunFZwT6gDWEynbRDJw9mJkIM/RI3LhRx66e482+ctBV8Hrjcwzn3MneOn3AmlW2/G0vLK6tr66WN8ubW9k7F3N3ryDgVhLZJzGPR87GknEW0rZjitJcIikOf064/uSz87i0VksXRjcoS6oZ4FLGAEay05JmVlufUBmOs8mx6grJjz6zaVt0ugH4Tx5p1uwoLtDzzbTCMSRrSSBGOpew7dqLcHAvFCKfT8iCVNMFkgke0r2mEQyrdfHb4FB1pZYiCWOiKFJqpXzdyHEqZhb6eDLEay59eIf7l9VMVnLs5i5JU0YjMHwpSjlSMihTQkAlKFM80wUQwfSsiYywwUTqrsg7h86fof9KpW07DalyfVpsXizhKcACHUAMHzqAJV9CCNhBI4R4e4cm4Mx6MZ+NlPrpkLH-
b24RuM1w9xPZJS</latexit>
P1(yˆ, y)
<latexit sha1_base64="UqqRsA82MDyzuWFmyQIbyYjyKuo=">AAAB8HicdVDLSgMxFM3UV62vqks3wSK4GqZFqsuiG5cVbKu0Q8mkmTY0yQzJHWGY9ivcuFDErZ/jzr8x01bweSDkcM693HtPEAtuwPPencLS8srqWnG9tLG5tb1T3t1rmyjRlLVoJCJ9ExDDBFesBRwEu4k1IzIQrBOML3K/c8e04ZG6hjRmviRDxUNOCVjpdtIbEcjS6aRfrnhuzcuBf5OqO/u9Clqg2S+/9QYRTSRTQAUxplv1YvAzooFTwaalXmJYTOiYDFnXUkUkM342W3iKj6wywGGk7VOAZ+rXjoxIY1IZ2EpJYGR+ern4l9dNIDzzM67iBJii80FhIjBEOL8eD7hmFERqCaGa210xHRFNKNiMSjaEz0vx/6Rdc6t1t351UmmcL+IoogN0iI5RFZ2iBrpETdRCFEl0jx7Rk6OdB+fZeZmXFpxFzz76Buf1A4-
bbkOc=</latexit>
|yˆ|
<latexit sha1_base64="5CSh/9gYo//3Mb4Fm3L+MLwulnU=">AAAB9XicdVDLSgMxFM3UV62vqks3wSJUkGFapLosdeOygn1AO5ZMmmlDM5khuaMMQ//DjQtF3Pov7vwbM20Fnwcu93DOveTmeJHgGhzn3cotLa+sruXXCxubW9s7xd29tg5jRVmLhiJUXY9oJrhkLeAgWDdSjASeYB1vcpH5nVumNA/lNSQRcwMyktznlICRbhrNcn9MIE2mJzg5HhRLjl11MuDfpGLPulNCCzQHxbf+MKRxwCRQQbTuVZwI3JQo4FSwaaEfaxYROiEj1jNUkoBpN51dPcVHRhliP1SmJOCZ+nUjJYHWSeCZyYDAWP/0MvEvrxeDf+6mXEYxMEnnD/mxwBDiLAI85IpREIkhhCpubsV0TBShYIIqmBA+f4r/J+2qXanZtavTUr2xiCOPDtAhKqMKOkN1dImaqIUoUugePaIn6856sJ6tl/lozlrs7K-
NvsF4/AFnekck=</latexit>
BP (yˆ, y)
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
Text
the most common 0.8 10 1.00
the most common 0.77 9 0.37
language 1.00 1 0.0001

n-gram precision
How many of the n-grams actually occur in the reference?
The most natural form of language use is dialogue.
language
Brevity penalty
Reference-Based
Evaluation: BLEU
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexitsha1_base64="ezJ37iRNCb6hs5dSM9+FMEnFXNM=">AAAB6HicdVDJSgNBEK2JW4xb1KOXxiB4GmaCRI9BLx4TMAskQ+jp1CRteha6e4Qh5Au8eFDEq5/kzb+xJ4ng+qDpx3tVVNXzE8GVdpx3q7Cyura+UdwsbW3v7O6V9w/aKk4lwxaLRSy7PlUoeIQtzbXAbiKRhr7Ajj+5yv3OHUrF4+hGZwl6IR1FPOCMaiM1s0G54thVJwf5TVx7/jsVWKIxKL/1hzFLQ4w0E1Spnusk2ptSqTkTOCv1U4UJZRM6wp6hEQ1RedP5ojNyYpQhCWJpXqTJXP3aMaWhUlnom8qQ6rH66eXiX14v1cGFN+VRkmqM2GJQkAqiY5JfTYZcItMiM4Qyyc2uhI2ppEybbEomhM9Lyf+kXbXdml1rnlXql8s4inAEx3AKLpxDHa6hAS1ggHAPj/Bk3VoP1rP1sigtWMueQ/gG6/UD9A2NDg==</l-
atexit> y
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
<latexit sha1_base64="o5tHAIQB3YsDCLY18wfcxphNzio=">AAACYXicdVFNb9QwEHVCoW2gJZRjLyNWoK0ES1KhwgVUtZceF4ltK22WleOd3bXqOKk9QY2y+ZPcuHDpH6mz3SLKx0iWn9+8mbGf00JJS1H0w/MfrD18tL6xGTx+srX9NHy2c2rz0ggciFzl5jzlFpXUOCBJCs8LgzxLFZ6lF8dt/uwbGitz/YWqAkcZn2k5lYKTo8bhVUJ4RfVRv+kmc0511byGag8+QpCkOJO6Fq65bYIYXsFipVgAfIJFtYAkCfBr3Y3hTXvce/tL0NxTJwovW0GQoJ7cNRyHnai3H7UBf4O4t9yjDltFfxx+Tya5KDPUJBS3dhhHBY1qbkgKhU2QlBYLLi74DIcOap6hHdVLhxp46ZgJTHPjliZYsr9X1DyztspSp8w4ze2fuZb8V25Y0vTDqJa6KAm1uB00LRVQDq3dMJEGBanKAS6MdHcFMe-
eGC3Kf0ppw91L4Pzjd78UHvYPP7zqHRys7Ntgue8G6LGbv2SE7YX02YIL99Na8LW/bu/Y3/dDfuZX63qrmObsX/u4Ne5q0cg==</latexit>
BP(yˆ, y) =
(
1 |yˆ| > |y|
e(1 |y|)/|yˆ| |yˆ|  |y|
<latexit sha1_base64="9BSRKCZ5EuCcRZmcLSup02N8vAU=">AAAB7XicdVDLSsNAFL2pr1pfVZduBovgKiRFqhuh6MZlBfuANpTJdNKOnUzCzEQIaf/BjQtF3Po/7vwbJ20FnweGOZxzL/fe48ecKe0471ZhaXllda24XtrY3NreKe/utVSUSEKbJOKR7PhYUc4EbWqmOe3EkuLQ57Ttjy9zv31HpWKRuNFpTL0QDwULGMHaSK1JOkHnqF+uOHbVyYF+E9ee/U4FFmj0y2+9QUSSkApNOFaq6zqx9jIsNSOcTku9RNEYkzEe0q6hAodUedls2yk6MsoABZE0T2g0U792ZDhUKg19UxliPVI/vVz8y+smOjjzMibiRFNB5oOChCMdofx0NGCSEs1TQzCRzOyKyAhLTLQJqGRC+LwU/U9aVdut2bXrk0r9YhFHEQ7gEI7BhVOowxU0oAkEbuEeHuHJiqwH69l6mZcWrEXPPnyD9foB6F-
eOtQ==</latexit>
|y| = 11
<latexit sha1_base64="tk+87Ny7IMwOJpdZDiy+roMldRY=">AAACJnicdVDLSgMxFM34tr6qLt0Ei6AgZaaIuilI3bisYFXolCGT3tpgJjMkd8RhmK9x46+4caGIuPNTTB+CzwPJPZxzL8k9YSKFQdd9cyYmp6ZnZufmSwuLS8sr5dW1cxOnmkOLxzLWlyEzIIWCFgqUcJloYFEo4SK8Ph74FzegjYjVGWYJdCJ2pURPcIZWCsp1H+EW8+FteN6QkBZFkKu6V9A6HZmNZkF93o2RNgOPbvt9hnlW7NJsJyhX3GrNHYD+Jl51WN0KGaMZlJ/8bszTCBRyyYxpe26CnZxpFFxCUfJTAwnj1+wK2pYqFoHp5MM1C7pllS7txdoehXSofp3IWWRMFoW2M2LYNz+9gfiX106xd9jJhUpSBMVHD/VSSTGmg8xoV2jgKDNLGNfC/pXyPtOMo022ZEP43JT+T85rVW+/un+6VzlqjOOYIxtkk2-
wTjxyQI3JCmqRFOLkjD+SJPDv3zqPz4ryOWiec8cw6+Qbn/QMI3qVv</latexit>
Bleun=1 = BP · P1(yˆ, y)
<latexit sha1_base64="wBXiqaGPKAx6npqxqQE1kETZqJs=">AAAB+HicdVDLSsNAFL3xWeujUZduBotQQUJSpLosunFZwT6gDWEynbRDJw9mJkIM/RI3LhRx66e482+ctBV8Hrjcwzn3MneOn3AmlW2/G0vLK6tr66WN8ubW9k7F3N3ryDgVhLZJzGPR87GknEW0rZjitJcIikOf064/uSz87i0VksXRjcoS6oZ4FLGAEay05JmVlufUBmOs8mx6grJjz6zaVt0ugH4Tx5p1uwoLtDzzbTCMSRrSSBGOpew7dqLcHAvFCKfT8iCVNMFkgke0r2mEQyrdfHb4FB1pZYiCWOiKFJqpXzdyHEqZhb6eDLEay59eIf7l9VMVnLs5i5JU0YjMHwpSjlSMihTQkAlKFM80wUQwfSsiYywwUTqrsg7h86fof9KpW07DalyfVpsXizhKcACHUAMHzqAJV9CCNhBI4R4e4cm4Mx6MZ+NlPrpkLH-
b24RuM1w9xPZJS</latexit>
P1(yˆ, y)
<latexit sha1_base64="UqqRsA82MDyzuWFmyQIbyYjyKuo=">AAAB8HicdVDLSgMxFM3UV62vqks3wSK4GqZFqsuiG5cVbKu0Q8mkmTY0yQzJHWGY9ivcuFDErZ/jzr8x01bweSDkcM693HtPEAtuwPPencLS8srqWnG9tLG5tb1T3t1rmyjRlLVoJCJ9ExDDBFesBRwEu4k1IzIQrBOML3K/c8e04ZG6hjRmviRDxUNOCVjpdtIbEcjS6aRfrnhuzcuBf5OqO/u9Clqg2S+/9QYRTSRTQAUxplv1YvAzooFTwaalXmJYTOiYDFnXUkUkM342W3iKj6wywGGk7VOAZ+rXjoxIY1IZ2EpJYGR+ern4l9dNIDzzM67iBJii80FhIjBEOL8eD7hmFERqCaGa210xHRFNKNiMSjaEz0vx/6Rdc6t1t351UmmcL+IoogN0iI5RFZ2iBrpETdRCFEl0jx7Rk6OdB+fZeZmXFpxFzz76Buf1A4-
bbkOc=</latexit>
|yˆ|
<latexit sha1_base64="5CSh/9gYo//3Mb4Fm3L+MLwulnU=">AAAB9XicdVDLSgMxFM3UV62vqks3wSJUkGFapLosdeOygn1AO5ZMmmlDM5khuaMMQ//DjQtF3Pov7vwbM20Fnwcu93DOveTmeJHgGhzn3cotLa+sruXXCxubW9s7xd29tg5jRVmLhiJUXY9oJrhkLeAgWDdSjASeYB1vcpH5nVumNA/lNSQRcwMyktznlICRbhrNcn9MIE2mJzg5HhRLjl11MuDfpGLPulNCCzQHxbf+MKRxwCRQQbTuVZwI3JQo4FSwaaEfaxYROiEj1jNUkoBpN51dPcVHRhliP1SmJOCZ+nUjJYHWSeCZyYDAWP/0MvEvrxeDf+6mXEYxMEnnD/mxwBDiLAI85IpREIkhhCpubsV0TBShYIIqmBA+f4r/J+2qXanZtavTUr2xiCOPDtAhKqMKOkN1dImaqIUoUugePaIn6856sJ6tl/lozlrs7K-
NvsF4/AFnekck=</latexit>
BP (yˆ, y)
<latexit sha1_base64="PB8zVp5eUngUOYFi882KsJNvzIQ=">AAAB8HicdVDLSgMxFM34rPVVdekmWARXw0yR6rLoxmUF+5B2KJk004YmmSG5IwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeEieAGPO/dWVpeWV1bL22UN7e2d3Yre/ttE6eashaNRay7ITFMcMVawEGwbqIZkaFgnXByWfidO6YNj9UNZAkLJBkpHnFKwEq3/TGBPJsO/EGl6rk1rwD+TXx39ntVtEBzUHnrD2OaSqaACmJMz/cSCHKigVPBpuV+alhC6ISMWM9SRSQzQT5beIqPrTLEUaztU4Bn6teOnEhjMhnaSklgbH56hfiX10shOg9yrpIUmKLzQVEqMMS4uB4PuWYURGYJoZrbXTEdE00o2IzKNoTPS/H/pF1z/bpbvz6tNi4WcZTQITpCJ8hHZ6iBrlATtRBFEt2jR/TkaOfBeXZe5qVLzqLnAH2D8/oB6L-
WQfw==</latexit>
yˆ1
<latexit sha1_base64="hgPazNB1rvisCpzmswn/2TvN7hg=">AAAB8HicdVDLSgMxFL3js9ZX1aWbYBFcDTNFqsuiG5cV7EPaoWTSTBuaZIYkIwxDv8KNC0Xc+jnu/BszbQWfB0IO59zLvfeECWfaeN67s7S8srq2Xtoob25t7+xW9vbbOk4VoS0S81h1Q6wpZ5K2DDOcdhNFsQg57YSTy8Lv3FGlWSxvTJbQQOCRZBEj2Fjptj/GJs+mg9qgUvXcmlcA/Sa+O/u9KizQHFTe+sOYpIJKQzjWuud7iQlyrAwjnE7L/VTTBJMJHtGepRILqoN8tvAUHVtliKJY2ScNmqlfO3IstM5EaCsFNmP90yvEv7xeaqLzIGcySQ2VZD4oSjkyMSquR0OmKDE8swQTxeyuiIyxwsTYjMo2hM9L0f+kXXP9ulu/Pq02LhZxlOAQjuAEfDiDBlxBE1pAQMA9PMKTo5wH59l5mZcuOYueA/gG5/UD6j-
mQgA==</latexit>
yˆ2
<latexit sha1_base64="wromBkrbjB5e/oQhfb8YAxz60go=">AAAB8HicdVDLSgMxFL1TX7W+qi7dBIvgaphWqS6LblxWsA9ph5JJM21okhmSjDAM/Qo3LhRx6+e482/MtBV8Hgg5nHMv994TxJxp43nvTmFpeWV1rbhe2tjc2t4p7+61dZQoQlsk4pHqBlhTziRtGWY47caKYhFw2gkml7nfuaNKs0jemDSmvsAjyUJGsLHSbX+MTZZOByeDcsVza14O9JtU3dnvVWCB5qD81h9GJBFUGsKx1r2qFxs/w8owwum01E80jTGZ4BHtWSqxoNrPZgtP0ZFVhiiMlH3SoJn6tSPDQutUBLZSYDPWP71c/MvrJSY89zMm48RQSeaDwoQjE6H8ejRkihLDU0swUczuisgYK0yMzahkQ/i8FP1P2jW3Wnfr16eVxsUijiIcwCEcQxXOoAFX0IQWEBBwD4/w5CjnwXl2XualBWfRsw/f4Lx+AO-
u9kIE=</latexit>
yˆ3
Text
the most common 0.8 10 1.00
the most common 0.77 9 0.37
language 1.00 1 0.0001

Reference-Based
Evaluation: BLEU
In practice: Average n-gram precision, for up to N = 4
Papineni et al. 2002, ACL, “BLEU”
<latexit sha1_base64="NvRHQ34D4cphddG29fxoDXeVicc=">AAACY3icfVFbS8MwGE3rfd7q5U2ED4ewwRidiPoiiD7o4wSnwjpKmqUuLElLkgq19E/65psv/g+zOfHuByEn5zuHLzmJUs608f0nx52anpmdm1+oLC4tr6x6a+vXOskUoR2S8ETdRlhTziTtGGY4vU0VxSLi9CYano36N/dUaZbIK5OntCfwnWQxI9hYKvQe2qGsBQNsirxsQF6HYwj6scKkCHQmwkJDwCScf4jqJQTCUrWzmm7AO9mA8TGv18t/jF8sZehV/eaePyr4CVrN8e5X0aTaofcY9BOSCSoN4VjrbstPTa/AyjDCaVkJMk1TTIb4jnYtlFhQ3SvGGZWwa5k+xImySxoYs58dBRZa5yKySoHNQH/vjcjfet3MxEe9gsk0M1SSt0FxxsEkMAoc+kxRYnhuASaK2bsCGWCbsLHfUrEhvL8U/gbXe83WQfPgcr-
96cjqJYx5toR1UQy10iE7QBWqjDiLo2Zl1Vh3PeXEX3XV3803qOhPPBvpS7vYr50W0ag==</latexit>
Pn(yˆ, y) =
P
s2Gn(yˆ) min(C(s, yˆ), C(s, y))
P
s2Gn(yˆ) C(s, yˆ)
<latexit sha1_base64="o5tHAIQB3YsDCLY18wfcxphNzio=">AAACYXicdVFNb9QwEHVCoW2gJZRjLyNWoK0ES1KhwgVUtZceF4ltK22WleOd3bXqOKk9QY2y+ZPcuHDpH6mz3SLKx0iWn9+8mbGf00JJS1H0w/MfrD18tL6xGTx+srX9NHy2c2rz0ggciFzl5jzlFpXUOCBJCs8LgzxLFZ6lF8dt/uwbGitz/YWqAkcZn2k5lYKTo8bhVUJ4RfVRv+kmc0511byGag8+QpCkOJO6Fq65bYIYXsFipVgAfIJFtYAkCfBr3Y3hTXvce/tL0NxTJwovW0GQoJ7cNRyHnai3H7UBf4O4t9yjDltFfxx+Tya5KDPUJBS3dhhHBY1qbkgKhU2QlBYLLi74DIcOap6hHdVLhxp46ZgJTHPjliZYsr9X1DyztspSp8w4ze2fuZb8V25Y0vTDqJa6KAm1uB00LRVQDq3dMJEGBanKAS6MdHcFMe-
eGC3Kf0ppw91L4Pzjd78UHvYPP7zqHRys7Ntgue8G6LGbv2SE7YX02YIL99Na8LW/bu/Y3/dDfuZX63qrmObsX/u4Ne5q0cg==</latexit>
BP(yˆ, y) =
(
1 |yˆ| > |y|
e(1 |y|)/|yˆ| |yˆ|  |y|
<latexit sha1_base64="wEu8BcgMx45hhXuZ12MMrfgDijQ=">AAACVnicdVFda9swFJXdde2yL2973ItYGKQwgl1Kt5dCyV72VDJY2kKUGVm5TkQl2UjXo0b4T24v20/ZS6nyMei+Lkj3cO45SDoqaiUdpumPKN65t3t/b/9B7+Gjx0+eJs+en7uqsQImolKVvSy4AyUNTFCigsvaAteFgovi6v1qfvEFrJOV+YRtDTPNF0aWUnAMVJ5ohnCNfr074UcKmq6jJ3RDj8bdgC05+rZ7Q9sDyuC6pkxBiQPKXKNzb06y7vMZZfPScuGzzp91QWDoODd3nczKxRIP8qSfDg/TVdG/QTZc97RPtjXOk69sXolGg0GhuHPTLK1x5rlFKRR0PdY4qLm44guYBmi4Bjfz61g6+jowc1pWNiyDdM3edXiunWt1EZSa49L9OVuR/5pNGyzfzbw0dYNgxOagslEUK7rKmM6lBYGqDYALK8NdqVjyEB-
CGn+iFEH69lP4fnB8Os+Ph8cej/uloG8c+eUlekQHJyFtySj6QMZkQQb6Rn1Ec7UTfo5t4N97bSONo63lBfqs4uQX5lLPk</latexit>
Bleu = BP(yˆ, y) exp
N
X
n=1
1
N ln Pn(yˆ, y)
!

Reference-Based
Evaluation: Representation Similarity
BERTScore, Zhang et al. 2020
Zhang et al. 2020, ICLR, “BERTScore”
No n-gram overlap,
but should still get
some credit!

Correlation with
Human Judgment
Does our automatic metric reflect human judgments?
Papineni et al. 2002
Papineni et al. 2002, ACL, “BLEU”, Zhang et al. 2020, ICLR, “BERTScore”
Zhang et al. 2020

Reference-Free
Text Generation
• Input: maybe a natural language prompt, but nothing very
complex
• Output: long piece of text
Yang et al. 2022, EMNLP, “Re3”

Human Evaluation
• Pairwise preference comparisons between outputs
• Overall preference
• Across different axes
• Identification of specific error types
• Humanlikeness

Human Evaluation
Yang et al. 2022, EMNLP, “Re3”
Humanlikeness Error Analysis Pairwise Preference

LLM-as-a-Judge
• Human evaluation is expensive
• Maybe we can just prompt LLMs to judge for us?
• Open question!

Communicative Success
• Language is all about getting things done in the world
• Directing a listener’s attention to something
• Instructing or suggesting a listener to do something
• Acquiring information that someone else has
• Teaching something to someone else
•...
• How well do our systems take action via language?

Evaluating NLG through
Communicative Success
• Example task: reference game
• Input: image and target object
Newman et al. 2020, SCiL, “Communication-based evaluation for natural language generation”

Evaluating NLG through
Communicative Success
• Example task: reference game
• Input: image and target object
• Output: referring expression
Newman et al. 2020, SCiL, “Communication-based evaluation for natural language generation”
Purple

Evaluating NLG through
Communicative Success
• Example task: reference game
• Input: image and target object
• Output: referring expression
• Communicative success is
achieved if the listener, who
has access to the image, can
successfully identify the target
Newman et al. 2020, SCiL, “Communication-based evaluation for natural language generation”
Purple
?

Evaluating NLG through
Communicative Success
• Example task: reference game
• Input: image and target object
• Output: referring expression
• Communicative success is
achieved if the listener, who
has access to the image, can
successfully identify the target
Newman et al. 2020, SCiL, “Communication-based evaluation for natural language generation”
Dark Purple

Evaluating NLG through
Communicative Success
• Example task: reference game
• Input: image and target object
• Output: referring expression
• Communicative success is
achieved if the listener, who
has access to the image, can
successfully identify the target
Newman et al. 2020, SCiL, “Communication-based evaluation for natural language generation”
Dark Purple
really easy to evaluate!

Dialogue and
Interactive Systems
• Language is all about interaction:
• How do the utterances we produce influence the world
around is?
• How do other language users change their language use
in response to yours?
• Dynamic properties of interaction
• Formation of common ground
• Alignment
• We need to study models in multi-turn interaction!

Dialogue and
Interactive Systems
But evaluating interaction is hard:
What’s a good place to get gluten free
pastries in Berkeley?
For dedicated gluten-free pastries in
Berkeley, your absolute best bet is
Mariposa Baking Company.
A gluten-free pastry lover in Berkeley!
You’re in luck because Berkeley is a
haven for GF enthusiasts! Here are some
top recommendations for gluten-free
pastries in Berkeley:
1. Bette’s Oceanview Diner (1807 4th St,
Berkeley) — This beloved diner has
...

Dialogue and
Interactive Systems
But evaluating interaction is hard:
What’s a good place to get gluten free
pastries in Berkeley?
For dedicated gluten-free pastries in
Berkeley, your absolute best bet is
Mariposa Baking Company.
A gluten-free pastry lover in Berkeley!
You’re in luck because Berkeley is a
haven for GF enthusiasts! Here are some
top recommendations for gluten-free
pastries in Berkeley:
1. Bette’s Oceanview Diner (1807 4th St,
Berkeley) — This beloved diner has
...
That’s too far from me. Do you have a
recommendation near downtown
Berkeley?

Dialogue and
Interactive Systems
But evaluating interaction is hard:
What’s a good place to get gluten free
pastries in Berkeley?
For dedicated gluten-free pastries in
Berkeley, your absolute best bet is
Mariposa Baking Company.
A gluten-free pastry lover in Berkeley!
You’re in luck because Berkeley is a
haven for GF enthusiasts! Here are some
top recommendations for gluten-free
pastries in Berkeley:
1. Bette’s Oceanview Diner (1807 4th St,
Berkeley) — This beloved diner has
...
Are any of these open on Sundays?

Dialogue and
Interactive Systems
But evaluating interaction is hard:
What’s a good place to get gluten free
pastries in Berkeley?
For dedicated gluten-free pastries in
Berkeley, your absolute best bet is
Mariposa Baking Company.
A gluten-free pastry lover in Berkeley!
You’re in luck because Berkeley is a
haven for GF enthusiasts! Here are some
top recommendations for gluten-free
pastries in Berkeley:
1. Bette’s Oceanview Diner (1807 4th St,
Berkeley) — This beloved diner has
...
Are any of these open on Sundays?
That’s too far from me. Do you have a
recommendation near downtown
Berkeley?
because user behavior changes
depending on system behavior!

Slot-Filling Dialogue Systems
• In well-defined tasks, we can
define slots that need to be
filled before providing
information to the user
• However, this reduces the
expressivity of dialogue:
• “I was hoping you could
recommend something”
• “Are there any churches or
museums on the east side?”
• “I would like the latest train
leaving that will arrive by 9:15
please.”

User Simulators
• Use another model (or a set of rules) to “simulate” a
human user
• Allows scaling up experiments, including to more
complex domains
• Allows stability across system evaluations
• But doesn’t reflect the real-world complexity of actual use
case, e.g., user adaptation to systems over time
• Open question!

Building Language
Technologies

Tasks (in General)
Most tasks can be thought of as a mapping from some input
X to some output Y, where one or both of these have to do
with language
Slide adapted from Graham Neubig
Task Input (X) Output (Y)
Text classification Text Label from a fixed class
Automatic speech recognition Audio signal Text
Dependency parsing Text Dependency tree
Code generation Text Executable code
Question answering Document and question (both text) Answer (text)
Translation Text (in source language) Text (in target language)
Open-ended NLG Optional prompt (text) Text
Referring expression generation Image and target object Referring expression (text)
Dialogue Conversation history (text) Next utterance (text)

How can we implement a classification model?
• Manual rules
• Prompting a model without training
• Machine learning
Slide adapted from Graham Neubig
Implementation
If the following text is about sports, reply
“sports”. Otherwise, reply “other”.
“Cal football is set to lose
its entire starting ...”

Evaluation
• Given the implementation, we want to know how well our
model can perform given new documents
• What is “new”?
• Generally speaking: anything we didn’t have access to
when implementing our model
• How can we estimate performance on new documents?
• Simulate it using held-out data just for evaluation!

Data
Before pretrained models, nearly all datasets
came with splits, assumed to be IID:
Training data
For updating model parameters directly
Validation data
For deciding when to
stop training
Development data
For performing
ablations, choosing
hyperparameters, etc.
Test data
For estimating
performance on the
“real” task

Data
Training data
For updating model parameters directly
Validation data
For deciding when to
stop training
Development data
For performing
ablations, choosing
hyperparameters, etc.
Public
test data
Private
test data
Before pretrained models, nearly all datasets
came with splits, assumed to be IID:

Benchmarks and
Model Evaluations

Why do we need benchmarks?
• Estimating how well our models will work on real-world
data
• Shared understanding of model performance with
standardized evaluations
• Building trust within a community in proving how well a
new model does
• Driving progress towards specific tasks and capabilities

Single-Task Benchmarks
Marcus et al. 1993, CL, “Building a large annotated corpus of English”; Zelle and Mooney 1996, AAAI, “Learning to parse database queries using inductive logic programming”; Palmer et al. 2005, CL, “The Proposition Bank”; Prasad et al. 2008, LREC, “The Penn Discourse TreeBank 2.0”; Bowman et al. 2015, EMNLP, “A large annotated corpus for learning natural language inference”; Agrawal et al. 2015, ICCV, “VQA”; Anderson et al. 2018, CVPR, “Vision-and-language navigation”
SNLI, Bowman et al. 2015
The Penn Treebank, Marcus et al. 1993 Room-to-Room, Anderson et al. 2018
GeoQuery, Zelle and Mooney 1996
PropBank, Palmer et al. 2005
The Penn Discourse Treebank, Prasad et al. 2008
VQA, Agrawal et al. 2015

Single-Task Benchmarks
VQA, Agrawal et al. 2015
Marcus et al. 1993, CL, “Building a large annotated corpus of English”; Zelle and Mooney 1996, AAAI, “Learning to parse database queries using inductive logic programming”; Palmer et al. 2005, CL, “The Proposition Bank”; Prasad et al. 2008, LREC, “The Penn Discourse TreeBank 2.0”; Bowman et al. 2015, EMNLP, “A large annotated corpus for learning natural language inference”; Agrawal et al. 2015, ICCV, “VQA”; Anderson et al. 2018, CVPR, “Vision-and-language navigation”
SNLI, Bowman et al. 2015
The Penn Treebank, Marcus et al. 1993 Room-to-Room, Anderson et al. 2018
GeoQuery, Zelle and Mooney 1996
PropBank, Palmer et al. 2005
The Penn Discourse Treebank, Prasad et al. 2008
Classification
Structured Prediction
Tagging
Question Answering
Spanning / Tagging
Tagging
Sequence Generation

Multi-Task Benchmarks
Wang et al. 2019, ICLR, “GLUE”; Hendrycks et al. 2021, ICLR, “Measuring massive multitask language understanding”
GLUE, Wang et al. 2019
MMLU, Hendrycks et al. 2021

Capability-Pushing
Benchmarks
Benchmarks are getting saturated quickly!
Kiela et al. 2021
Kiela et al. 2021, NAACL, “Dynabench”

Capability-Pushing
Benchmarks
Capability-focused evaluation: choose a
complex task and curate examples of it
GPQA, Rein et al. 2024
Chollet 2019, “On the measure of intelligence”; Rein et al. 2024, COLM, “GPQA”; Xie et al. 2024, NeurIPS, “OSWorld”; Phan et al. 2025, “Humanity’s last exam”
HLE, Phan et al. 2025
Andy Konwinski
BabyLM, Warstadt et al. 2023
ARC-AGI-1, Chollet 2019
OSWorld, Xie et al. 2024

Use of Language Technologies
“In the Wild”
What are people actually using LMs for, and how well do they do?
Zhao et al. 2024, ICLR, “WildChat”; Lin et al. 2024, “WildBench”; Tamkin et al. 2024, “Clio”, Chiang et al. 2024, ICML, “Chatbot Arena”; Singh et al. 2025, “The leaaderboard illusion”
WildChat (Zhao et al. 2024), WildBench (Lin et al. 2024)
Clio, Tamkin et al. 2024 LMArena / Chatbot Arena, Chiang et al. 2024
OpenRouter Singh et al. 2025

Distributional Model Evaluation
• What are the properties of the
outputs models produce in
general?
• Consistency: when evaluating
models on the same task (or
variations of it) multiple times,
how consistent is its
behavior?
• Diversity: do the outputs
models generate have the
same distributional properties
as human language?
Sclar et al. 2024
Sclar et al. 2024, ICLR, “Quantifying language models’ sensitivity to spurious features in prompt design”; Berglund et al. 2024, ICLR, “The reversal curse”; Zhang et al. 2025, “NoveltyBench”
Berglund et al. 2024
How about the name Silver Mist?
How about the name
“Silvermist”?
How about “Silvermist”?
How about “Luna Cascade”?
How about “Luna Mist”?
Suggest a name for
a dappled-gray filly
living in the
mountains.
Zhang et al. 2025

Pitfall:
Dataset Contamination
Before pretrained models, nearly all datasets
came with splits, assumed to be IID:
Training data
For updating model parameters directly
Validation data
For deciding when to
stop training
Development data
For performing
ablations, choosing
hyperparameters, etc.
Test data
For estimating
performance on the
“real” task

Pitfall:
Dataset Contamination
Dataset contamination occurs when actual test data is used in
any of the previous splits (no longer IID). Why is this bad?
Training data
For updating model parameters directly
Validation data
For deciding when to
stop training
Development data
For performing
ablations, choosing
hyperparameters, etc.
Test data
For estimating
performance on the
“real” task

Pitfall:
Dataset Contamination
After pre-training for multi-task models, it
becomes especially problematic
Training data
Models might memorize test
data that happens to be
in their pretraining dataset!
Development tasks
For performing
ablations, choosing
hyperparameters, etc.
Test tasks
For estimating
performance on the
“real” task

Pitfall:
Spurious Correlations
Does the benchmark actually evaluate what we want it to?
What color
is the
banana?
Yellow
Agrawal et al. 2018, CVPR, “Don’t just assume; look and answer”
Correct 80% of the
time without looking
at an image!
• Learned a spurious correlation that gives the model high
accuracy: bananas are yellow
• Doesn’t actually test visual understanding

Pitfall:
Defining “Human Performance”

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:53.552Z
- **Text Length:** 144203 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
