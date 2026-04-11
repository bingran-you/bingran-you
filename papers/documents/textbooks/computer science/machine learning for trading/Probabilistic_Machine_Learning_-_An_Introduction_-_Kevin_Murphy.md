# PDF Document: Probabilistic Machine Learning - An Introduction - Kevin Murphy.pdf

**File Path:** Probabilistic Machine Learning - An Introduction - Kevin Murphy.pdf

**Processed Date:** 2026-02-10T18:13:50.159Z

**File Size:** 63999.70 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 782

**Title:** Probabilistic Machine Learning - An Introduction - Kevin Murphy

**Collection:** Textbooks > Computer Science > Machine Learning for Trading

---

## Extracted Text Content

Probabilistic Machine Learning

Adaptive Computation and Machine Learning Francis Bach, editor
Bioinformatics: The Machine Learning Approach, Pierre Baldi and Søren Brunak Reinforcement Learning: An Introduction, Richard S. Sutton and Andrew G. Barto Graphical Models for Machine Learning and Digital Communication, Brendan J. Frey Learning in Graphical Models, Michael I. Jordan, ed. Causation, Prediction, and Search, second edition, Peter Spirtes, Clark Glymour, and Richard Scheines Principles of Data Mining, David Hand, Heikki Mannila, and Padhraic Smyth Bioinformatics: The Machine Learning-
 Approach, second edition, Pierre Baldi and Søren Brunak Learning Kernel Classifiers: Theory and Algorithms, Ralf Herbrich Learning with Kernels: Support Vector Machines, Regularization, Optimization, and Beyond, Bernhard Schölkopf and Alexander J. Smola Introduction to Machine Learning, Ethem Alpaydın Gaussian Processes for Machine Learning, Carl Edward Rasmussen and Christopher K.I. Williams Semi-Supervised Learning, Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien, eds. The Minimum Desc-
ription Length Principle, Peter D. Grünwald Introduction to Statistical Relational Learning, Lise Getoor and Ben Taskar, eds. Probabilistic Graphical Models: Principles and Techniques, Daphne Koller and Nir Friedman Introduction to Machine Learning, second edition, Ethem Alpaydın Machine Learning in Non-Stationary Environments: Introduction to Covariate Shift Adaptation, Masashi Sugiyama and Motoaki Kawanabe Boosting: Foundations and Algorithms, Robert E. Schapire and Yoav Freund

Foundations of Machine Learning, Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalker Machine Learning: A Probabilistic Perspective, Kevin P. Murphy Introduction to Machine Learning, third edition, Ethem Alpaydın Deep Learning, Ian Goodfellow, Yoshua Bengio, and Aaron Courville Elements of Causal Inference: Foundations and Learning Algorithms, Jonas Peters, Dominik Janzing, and Bernhard Schölkopf Machine Learning for Data Streams, with Practical Examples in MOA, Albert Bifet, Ricard Gavaldà, Ge-
offrey Holmes, Bernhard Pfahringer Reinforcement Learning, second edition, Richard S. Sutton and Andrew G. Barto Foundations of Machine Learning, second edition, Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalker Introduction to Natural Language Processing, Jacob Eisenstein Introduction to Machine Learning, fourth edition, Ethem Alpaydın Knowledge Graphs: Fundamentals, Techniques, and Applications, Mayank Kejriwal, Craig A. Knoblock, and Pedro Szekely Probabilistic Machine Learning: An Introd-
uction, Kevin P. Murphy

Probabilistic Machine Learning

An Introduction Kevin P. Murphy
The MIT Press
 Cambridge, Massachusetts
 London, England

© 2022 Massachusetts Institute of Technology
This work is subject to a Creative Commons CC-BY-NC-ND license.
Subject to such license, all rights are reserved.
The MIT Press would like to thank the anonymous peer reviewers who provided comments on drafts of this book. The generous work of academic experts is essential for establishing the authority and quality of our publications. We acknowledge with gratitude the contributions of these otherwise uncredited readers.
Library of Congress Cataloging-in-Publication Data Names: Murphy, Kevin P., author. Title: Probabilistic machine learning : an introduction / Kevin P. Murphy. Description: Cambridge, Massachusetts : The MIT Press, [2022] Series: Adaptive computation and machine learning series Includes bibliographical references and index. Identifiers: LCCN 2021027430 | ISBN 9780262369305 Subjects: LCSH: Machine learning. | Probabilities. Classification: LCC Q325.5 .M872 2022 | DDC 006.3/1–dc23 LC record available-
 at https://lccn.loc.gov/2021027430
10 9 8 7 6 5 4 3 2 1
d_r0

This book is dedicated to my mother, Brigid Murphy,
 who introduced me to the joy of learning and teaching.

Brief Contents
1 Introduction
I Foundations 2 Probability: Univariate Models 3 Probability: Multivariate Models 4 Statistics 5 Decision Theory 6 Information Theory 7 Linear Algebra 8 Optimization
II Linear Models 9 Linear Discriminant Analysis 10 Logistic Regression 11 Linear Regression 12 Generalized Linear Models *
III Deep Neural Networks 13 Neural Networks for Structured Data 14 Neural Networks for Images 15 Neural Networks for Sequences
IV Nonparametric Models 16 Exemplar-based Methods 17 Kernel Methods * 18 Trees, Forests, Bagging, and Boosting
V Beyond Supervised Learning

19 Learning with Fewer Labeled Examples 20 Dimensionality Reduction 21 Clustering 22 Recommender Systems 23 Graph Embeddings * A Notation

Contents
Copyright
Preface
1 Introduction 1.1 What is machine learning? 1.2 Supervised learning 1.2.1 Classification 1.2.2 Regression 1.2.3 Overfitting and generalization 1.2.4 No free lunch theorem 1.3 Unsupervised learning 1.3.1 Clustering 1.3.2 Discovering latent “factors of variation” 1.3.3 Self-supervised learning 1.3.4 Evaluating unsupervised learning 1.4 Reinforcement learning 1.5 Data 1.5.1 Some common image datasets 1.5.2 Some common text datasets 1.5.3 Preprocessing discrete input data 1.5.4 Preprocessing text dat-
a 1.5.5 Handling missing data 1.6 Discussion 1.6.1 The relationship between ML and other fields 1.6.2 Structure of the book

1.6.3 Caveats
I Foundations
2 Probability: Univariate Models 2.1 Introduction 2.1.1 What is probability? 2.1.2 Types of uncertainty 2.1.3 Probability as an extension of logic 2.2 Random variables 2.2.1 Discrete random variables 2.2.2 Continuous random variables 2.2.3 Sets of related random variables 2.2.4 Independence and conditional independence 2.2.5 Moments of a distribution 2.2.6 Limitations of summary statistics * 2.3 Bayes’ rule 2.3.1 Example: Testing for COVID-19 2.3.2 Example: The Monty Hall problem 2.3.3 Inverse pro-
blems * 2.4 Bernoulli and binomial distributions 2.4.1 Definition 2.4.2 Sigmoid (logistic) function 2.4.3 Binary logistic regression 2.5 Categorical and multinomial distributions 2.5.1 Definition 2.5.2 Softmax function 2.5.3 Multiclass logistic regression 2.5.4 Log-sum-exp trick 2.6 Univariate Gaussian (normal) distribution 2.6.1 Cumulative distribution function 2.6.2 Probability density function

2.6.3 Regression 2.6.4 Why is the Gaussian distribution so widely used? 2.6.5 Dirac delta function as a limiting case 2.7 Some other common univariate distributions * 2.7.1 Student t distribution 2.7.2 Cauchy distribution 2.7.3 Laplace distribution 2.7.4 Beta distribution 2.7.5 Gamma distribution 2.7.6 Empirical distribution 2.8 Transformations of random variables * 2.8.1 Discrete case 2.8.2 Continuous case 2.8.3 Invertible transformations (bijections) 2.8.4 Moments of a linear transformation 2.8.-
5 The convolution theorem 2.8.6 Central limit theorem 2.8.7 Monte Carlo approximation 2.9 Exercises
3 Probability: Multivariate Models 3.1 Joint distributions for multiple random variables 3.1.1 Covariance 3.1.2 Correlation 3.1.3 Uncorrelated does not imply independent 3.1.4 Correlation does not imply causation 3.1.5 Simpson’s paradox 3.2 The multivariate Gaussian (normal) distribution 3.2.1 Definition 3.2.2 Mahalanobis distance 3.2.3 Marginals and conditionals of an MVN * 3.2.4 Example: conditioning a 2d Gaussian

3.2.5 Example: Imputing missing values * 3.3 Linear Gaussian systems *
3.3.1 Bayes rule for Gaussians 3.3.2 Derivation * 3.3.3 Example: Inferring an unknown scalar 3.3.4 Example: inferring an unknown vector 3.3.5 Example: sensor fusion 3.4 The exponential family * 3.4.1 Definition 3.4.2 Example 3.4.3 Log partition function is cumulant generating function 3.4.4 Maximum entropy derivation of the exponential family 3.5 Mixture models 3.5.1 Gaussian mixture models 3.5.2 Bernoulli mixture models 3.6 Probabilistic graphical models * 3.6.1 Representation 3.6.2 Inference 3.6-
.3 Learning 3.7 Exercises
4 Statistics 4.1 Introduction 4.2 Maximum likelihood estimation (MLE) 4.2.1 Definition 4.2.2 Justification for MLE 4.2.3 Example: MLE for the Bernoulli distribution 4.2.4 Example: MLE for the categorical distribution 4.2.5 Example: MLE for the univariate Gaussian 4.2.6 Example: MLE for the multivariate Gaussian 4.2.7 Example: MLE for linear regression 4.3 Empirical risk minimization (ERM)

4.3.1 Example: minimizing the misclassification rate 4.3.2 Surrogate loss 4.4 Other estimation methods * 4.4.1 The method of moments 4.4.2 Online (recursive) estimation 4.5 Regularization 4.5.1 Example: MAP estimation for the Bernoulli distribution 4.5.2 Example: MAP estimation for the multivariate Gaussian * 4.5.3 Example: weight decay 4.5.4 Picking the regularizer using a validation set 4.5.5 Cross-validation 4.5.6 Early stopping 4.5.7 Using more data 4.6 Bayesian statistics * 4.6.1 Conjugate pr-
iors 4.6.2 The beta-binomial model 4.6.3 The Dirichlet-multinomial model 4.6.4 The Gaussian-Gaussian model 4.6.5 Beyond conjugate priors 4.6.6 Credible intervals 4.6.7 Bayesian machine learning 4.6.8 Computational issues 4.7 Frequentist statistics * 4.7.1 Sampling distributions 4.7.2 Gaussian approximation of the sampling distribution of the
MLE 4.7.3 Bootstrap approximation of the sampling distribution of any
estimator 4.7.4 Confidence intervals 4.7.5 Caution: Confidence intervals are not credible 4.7.6 The bias-variance tradeoff 4.8 Exercises

5 Decision Theory 5.1 Bayesian decision theory 5.1.1 Basics 5.1.2 Classification problems 5.1.3 ROC curves 5.1.4 Precision-recall curves 5.1.5 Regression problems 5.1.6 Probabilistic prediction problems 5.2 Bayesian hypothesis testing 5.2.1 Example: Testing if a coin is fair 5.2.2 Bayesian model selection 5.2.3 Occam’s razor 5.2.4 Connection between cross validation and marginal likelihood 5.2.5 Information criteria 5.3 Frequentist decision theory 5.3.1 Computing the risk of an estimator 5.3.2 Con-
sistent estimators 5.3.3 Admissible estimators 5.4 Empirical risk minimization 5.4.1 Empirical risk 5.4.2 Structural risk 5.4.3 Cross-validation 5.4.4 Statistical learning theory * 5.5 Frequentist hypothesis testing * 5.5.1 Likelihood ratio test 5.5.2 Null hypothesis significance testing (NHST) 5.5.3 p-values 5.5.4 p-values considered harmful 5.5.5 Why isn’t everyone a Bayesian? 5.6 Exercises
6 Information Theory

6.1 Entropy 6.1.1 Entropy for discrete random variables 6.1.2 Cross entropy 6.1.3 Joint entropy 6.1.4 Conditional entropy 6.1.5 Perplexity 6.1.6 Differential entropy for continuous random variables *
6.2 Relative entropy (KL divergence) * 6.2.1 Definition 6.2.2 Interpretation 6.2.3 Example: KL divergence between two Gaussians 6.2.4 Non-negativity of KL 6.2.5 KL divergence and MLE 6.2.6 Forward vs reverse KL
6.3 Mutual information * 6.3.1 Definition 6.3.2 Interpretation 6.3.3 Example 6.3.4 Conditional mutual information 6.3.5 MI as a “generalized correlation coefficient” 6.3.6 Normalized mutual information 6.3.7 Maximal information coefficient 6.3.8 Data processing inequality 6.3.9 Sufficient Statistics 6.3.10 Fano’s inequality *
6.4 Exercises
7 Linear Algebra 7.1 Introduction 7.1.1 Notation 7.1.2 Vector spaces 7.1.3 Norms of a vector and matrix

7.1.4 Properties of a matrix 7.1.5 Special types of matrices 7.2 Matrix multiplication 7.2.1 Vector–vector products 7.2.2 Matrix–vector products 7.2.3 Matrix–matrix products 7.2.4 Application: manipulating data matrices 7.2.5 Kronecker products * 7.2.6 Einstein summation * 7.3 Matrix inversion 7.3.1 The inverse of a square matrix 7.3.2 Schur complements * 7.3.3 The matrix inversion lemma * 7.3.4 Matrix determinant lemma * 7.3.5 Application: deriving the conditionals of an MVN * 7.4 Eigenvalue deco-
mposition (EVD) 7.4.1 Basics 7.4.2 Diagonalization 7.4.3 Eigenvalues and eigenvectors of symmetric matrices 7.4.4 Geometry of quadratic forms 7.4.5 Standardizing and whitening data 7.4.6 Power method 7.4.7 Deflation 7.4.8 Eigenvectors optimize quadratic forms 7.5 Singular value decomposition (SVD) 7.5.1 Basics 7.5.2 Connection between SVD and EVD 7.5.3 Pseudo inverse 7.5.4 SVD and the range and null space of a matrix * 7.5.5 Truncated SVD 7.6 Other matrix decompositions *

7.6.1 LU factorization 7.6.2 QR decomposition 7.6.3 Cholesky decomposition 7.7 Solving systems of linear equations * 7.7.1 Solving square systems 7.7.2 Solving underconstrained systems (least norm estimation) 7.7.3 Solving overconstrained systems (least squares estimation) 7.8 Matrix calculus 7.8.1 Derivatives 7.8.2 Gradients 7.8.3 Directional derivative 7.8.4 Total derivative * 7.8.5 Jacobian 7.8.6 Hessian 7.8.7 Gradients of commonly used functions 7.9 Exercises
8 Optimization 8.1 Introduction 8.1.1 Local vs global optimization 8.1.2 Constrained vs unconstrained optimization 8.1.3 Convex vs nonconvex optimization 8.1.4 Smooth vs nonsmooth optimization 8.2 First-order methods 8.2.1 Descent direction 8.2.2 Step size (learning rate) 8.2.3 Convergence rates 8.2.4 Momentum methods 8.3 Second-order methods 8.3.1 Newton’s method 8.3.2 BFGS and other quasi-Newton methods 8.3.3 Trust region methods

8.4 Stochastic gradient descent 8.4.1 Application to finite sum problems 8.4.2 Example: SGD for fitting linear regression 8.4.3 Choosing the step size (learning rate) 8.4.4 Iterate averaging 8.4.5 Variance reduction * 8.4.6 Preconditioned SGD
8.5 Constrained optimization 8.5.1 Lagrange multipliers 8.5.2 The KKT conditions 8.5.3 Linear programming 8.5.4 Quadratic programming 8.5.5 Mixed integer linear programming *
8.6 Proximal gradient method * 8.6.1 Projected gradient descent 8.6.2 Proximal operator for ℓ1-norm regularizer 8.6.3 Proximal operator for quantization 8.6.4 Incremental (online) proximal methods
8.7 Bound optimization * 8.7.1 The general algorithm 8.7.2 The EM algorithm 8.7.3 Example: EM for a GMM
8.8 Blackbox and derivative free optimization 8.9 Exercises
II Linear Models
9 Linear Discriminant Analysis 9.1 Introduction 9.2 Gaussian discriminant analysis 9.2.1 Quadratic decision boundaries 9.2.2 Linear decision boundaries

9.2.3 The connection between LDA and logistic regression 9.2.4 Model fitting 9.2.5 Nearest centroid classifier 9.2.6 Fisher’s linear discriminant analysis * 9.3 Naive Bayes classifiers 9.3.1 Example models 9.3.2 Model fitting 9.3.3 Bayesian naive Bayes 9.3.4 The connection between naive Bayes and logistic regression 9.4 Generative vs discriminative classifiers 9.4.1 Advantages of discriminative classifiers 9.4.2 Advantages of generative classifiers 9.4.3 Handling missing features 9.5 Exercises
10 Logistic Regression 10.1 Introduction 10.2 Binary logistic regression 10.2.1 Linear classifiers 10.2.2 Nonlinear classifiers 10.2.3 Maximum likelihood estimation 10.2.4 Stochastic gradient descent 10.2.5 Perceptron algorithm 10.2.6 Iteratively reweighted least squares 10.2.7 MAP estimation 10.2.8 Standardization 10.3 Multinomial logistic regression 10.3.1 Linear and nonlinear classifiers 10.3.2 Maximum likelihood estimation 10.3.3 Gradient-based optimization 10.3.4 Bound optimization 10.3.5 MAP-
 estimation

10.3.6 Maximum entropy classifiers 10.3.7 Hierarchical classification 10.3.8 Handling large numbers of classes 10.4 Robust logistic regression * 10.4.1 Mixture model for the likelihood 10.4.2 Bi-tempered loss 10.5 Bayesian logistic regression * 10.5.1 Laplace approximation 10.5.2 Approximating the posterior predictive 10.6 Exercises
11 Linear Regression 11.1 Introduction 11.2 Least squares linear regression 11.2.1 Terminology 11.2.2 Least squares estimation 11.2.3 Other approaches to computing the MLE 11.2.4 Measuring goodness of fit 11.3 Ridge regression 11.3.1 Computing the MAP estimate 11.3.2 Connection between ridge regression and PCA 11.3.3 Choosing the strength of the regularizer 11.4 Lasso regression 11.4.1 MAP estimation with a Laplace prior (ℓ1 regularization) 11.4.2 Why does ℓ1 regularization yield sparse solutions?-
 11.4.3 Hard vs soft thresholding 11.4.4 Regularization path 11.4.5 Comparison of least squares, lasso, ridge and subset selection 11.4.6 Variable selection consistency 11.4.7 Group lasso 11.4.8 Elastic net (ridge and lasso combined) 11.4.9 Optimization algorithms

11.5 Regression splines * 11.5.1 B-spline basis functions 11.5.2 Fitting a linear model using a spline basis 11.5.3 Smoothing splines 11.5.4 Generalized additive models
11.6 Robust linear regression * 11.6.1 Laplace likelihood 11.6.2 Student-t likelihood 11.6.3 Huber loss 11.6.4 RANSAC
11.7 Bayesian linear regression * 11.7.1 Priors 11.7.2 Posteriors 11.7.3 Example 11.7.4 Computing the posterior predictive 11.7.5 The advantage of centering 11.7.6 Dealing with multicollinearity 11.7.7 Automatic relevancy determination (ARD) *
11.8 Exercises
12 Generalized Linear Models * 12.1 Introduction 12.2 Examples 12.2.1 Linear regression 12.2.2 Binomial regression 12.2.3 Poisson regression 12.3 GLMs with non-canonical link functions 12.4 Maximum likelihood estimation 12.5 Worked example: predicting insurance claims
III Deep Neural Networks
13 Neural Networks for Structured Data

13.1 Introduction 13.2 Multilayer perceptrons (MLPs)
13.2.1 The XOR problem 13.2.2 Differentiable MLPs 13.2.3 Activation functions 13.2.4 Example models 13.2.5 The importance of depth 13.2.6 The “deep learning revolution” 13.2.7 Connections with biology 13.3 Backpropagation 13.3.1 Forward vs reverse mode differentiation 13.3.2 Reverse mode differentiation for multilayer perceptrons 13.3.3 Vector-Jacobian product for common layers 13.3.4 Computation graphs 13.4 Training neural networks 13.4.1 Tuning the learning rate 13.4.2 Vanishing and exploding gr-
adients 13.4.3 Non-saturating activation functions 13.4.4 Residual connections 13.4.5 Parameter initialization 13.4.6 Parallel training 13.5 Regularization 13.5.1 Early stopping 13.5.2 Weight decay 13.5.3 Sparse DNNs 13.5.4 Dropout 13.5.5 Bayesian neural networks 13.5.6 Regularization effects of (stochastic) gradient descent * 13.6 Other kinds of feedforward networks * 13.6.1 Radial basis function networks 13.6.2 Mixtures of experts

13.7 Exercises
14 Neural Networks for Images 14.1 Introduction 14.2 Common layers 14.2.1 Convolutional layers 14.2.2 Pooling layers 14.2.3 Putting it all together 14.2.4 Normalization layers 14.3 Common architectures for image classification 14.3.1 LeNet 14.3.2 AlexNet 14.3.3 GoogLeNet (Inception) 14.3.4 ResNet 14.3.5 DenseNet 14.3.6 Neural architecture search 14.4 Other forms of convolution * 14.4.1 Dilated convolution 14.4.2 Transposed convolution 14.4.3 Depthwise separable convolution 14.5 Solving other discr-
iminative vision tasks with CNNs * 14.5.1 Image tagging 14.5.2 Object detection 14.5.3 Instance segmentation 14.5.4 Semantic segmentation 14.5.5 Human pose estimation 14.6 Generating images by inverting CNNs * 14.6.1 Converting a trained classifier into a generative model 14.6.2 Image priors 14.6.3 Visualizing the features learned by a CNN 14.6.4 Deep Dream 14.6.5 Neural style transfer

15 Neural Networks for Sequences 15.1 Introduction 15.2 Recurrent neural networks (RNNs) 15.2.1 Vec2Seq (sequence generation) 15.2.2 Seq2Vec (sequence classification) 15.2.3 Seq2Seq (sequence translation) 15.2.4 Teacher forcing 15.2.5 Backpropagation through time 15.2.6 Vanishing and exploding gradients 15.2.7 Gating and long term memory 15.2.8 Beam search 15.3 1d CNNs 15.3.1 1d CNNs for sequence classification 15.3.2 Causal 1d CNNs for sequence generation 15.4 Attention 15.4.1 Attention as soft d-
ictionary lookup 15.4.2 Kernel regression as non-parametric attention 15.4.3 Parametric attention 15.4.4 Seq2Seq with attention 15.4.5 Seq2vec with attention (text classification) 15.4.6 Seq+Seq2Vec with attention (text pair classification) 15.4.7 Soft vs hard attention 15.5 Transformers 15.5.1 Self-attention 15.5.2 Multi-headed attention 15.5.3 Positional encoding 15.5.4 Putting it all together 15.5.5 Comparing transformers, CNNs and RNNs 15.5.6 Transformers for images * 15.5.7 Other transformer -
variants * 15.6 Efficient transformers *

15.6.1 Fixed non-learnable localized attention patterns 15.6.2 Learnable sparse attention patterns 15.6.3 Memory and recurrence methods 15.6.4 Low-rank and kernel methods 15.7 Language models and unsupervised representation learning 15.7.1 ELMo 15.7.2 BERT 15.7.3 GPT 15.7.4 T5 15.7.5 Discussion
IV Nonparametric Models
16 Exemplar-based Methods 16.1 K nearest neighbor (KNN) classification 16.1.1 Example 16.1.2 The curse of dimensionality 16.1.3 Reducing the speed and memory requirements 16.1.4 Open set recognition 16.2 Learning distance metrics 16.2.1 Linear and convex methods 16.2.2 Deep metric learning 16.2.3 Classification losses 16.2.4 Ranking losses 16.2.5 Speeding up ranking loss optimization 16.2.6 Other training tricks for DML 16.3 Kernel density estimation (KDE) 16.3.1 Density kernels 16.3.2 Parzen wind-
ow density estimator 16.3.3 How to choose the bandwidth parameter 16.3.4 From KDE to KNN classification 16.3.5 Kernel regression

17 Kernel Methods * 17.1 Mercer kernels 17.1.1 Mercer’s theorem 17.1.2 Some popular Mercer kernels 17.2 Gaussian processes 17.2.1 Noise-free observations 17.2.2 Noisy observations 17.2.3 Comparison to kernel regression 17.2.4 Weight space vs function space 17.2.5 Numerical issues 17.2.6 Estimating the kernel 17.2.7 GPs for classification 17.2.8 Connections with deep learning 17.2.9 Scaling GPs to large datasets 17.3 Support vector machines (SVMs) 17.3.1 Large margin classifiers 17.3.2 The dual pro-
blem 17.3.3 Soft margin classifiers 17.3.4 The kernel trick 17.3.5 Converting SVM outputs into probabilities 17.3.6 Connection with logistic regression 17.3.7 Multi-class classification with SVMs 17.3.8 How to choose the regularizer C 17.3.9 Kernel ridge regression 17.3.10 SVMs for regression 17.4 Sparse vector machines 17.4.1 Relevance vector machines (RVMs) 17.4.2 Comparison of sparse and dense kernel methods 17.5 Exercises
18 Trees, Forests, Bagging, and Boosting 18.1 Classification and regression trees (CART)

18.1.1 Model definition 18.1.2 Model fitting 18.1.3 Regularization 18.1.4 Handling missing input features 18.1.5 Pros and cons 18.2 Ensemble learning 18.2.1 Stacking 18.2.2 Ensembling is not Bayes model averaging 18.3 Bagging 18.4 Random forests 18.5 Boosting 18.5.1 Forward stagewise additive modeling 18.5.2 Quadratic loss and least squares boosting 18.5.3 Exponential loss and AdaBoost 18.5.4 LogitBoost 18.5.5 Gradient boosting 18.6 Interpreting tree ensembles 18.6.1 Feature importance 18.6.2 Part-
ial dependency plots
V Beyond Supervised Learning
19 Learning with Fewer Labeled Examples 19.1 Data augmentation 19.1.1 Examples 19.1.2 Theoretical justification 19.2 Transfer learning 19.2.1 Fine-tuning 19.2.2 Adapters 19.2.3 Supervised pre-training 19.2.4 Unsupervised pre-training (self-supervised learning) 19.2.5 Domain adaptation 19.3 Semi-supervised learning

19.3.1 Self-training and pseudo-labeling 19.3.2 Entropy minimization 19.3.3 Co-training 19.3.4 Label propagation on graphs 19.3.5 Consistency regularization 19.3.6 Deep generative models * 19.3.7 Combining self-supervised and semi-supervised learning 19.4 Active learning 19.4.1 Decision-theoretic approach 19.4.2 Information-theoretic approach 19.4.3 Batch active learning 19.5 Meta-learning 19.5.1 Model-agnostic meta-learning (MAML) 19.6 Few-shot learning 19.6.1 Matching networks 19.7 Weakly superv-
ised learning 19.8 Exercises
20 Dimensionality Reduction 20.1 Principal components analysis (PCA) 20.1.1 Examples 20.1.2 Derivation of the algorithm 20.1.3 Computational issues 20.1.4 Choosing the number of latent dimensions 20.2 Factor analysis * 20.2.1 Generative model 20.2.2 Probabilistic PCA 20.2.3 EM algorithm for FA/PPCA 20.2.4 Unidentifiability of the parameters 20.2.5 Nonlinear factor analysis 20.2.6 Mixtures of factor analysers 20.2.7 Exponential family factor analysis

20.2.8 Factor analysis models for paired data 20.3 Autoencoders
20.3.1 Bottleneck autoencoders 20.3.2 Denoising autoencoders 20.3.3 Contractive autoencoders 20.3.4 Sparse autoencoders 20.3.5 Variational autoencoders 20.4 Manifold learning * 20.4.1 What are manifolds? 20.4.2 The manifold hypothesis 20.4.3 Approaches to manifold learning 20.4.4 Multi-dimensional scaling (MDS) 20.4.5 Isomap 20.4.6 Kernel PCA 20.4.7 Maximum variance unfolding (MVU) 20.4.8 Local linear embedding (LLE) 20.4.9 Laplacian eigenmaps 20.4.10 t-SNE 20.5 Word embeddings 20.5.1 Latent seman-
tic analysis / indexing 20.5.2 Word2vec 20.5.3 GloVE 20.5.4 Word analogies 20.5.5 RAND-WALK model of word embeddings 20.5.6 Contextual word embeddings 20.6 Exercises
21 Clustering 21.1 Introduction 21.1.1 Evaluating the output of clustering methods 21.2 Hierarchical agglomerative clustering 21.2.1 The algorithm

21.2.2 Example 21.2.3 Extensions 21.3 K means clustering 21.3.1 The algorithm 21.3.2 Examples 21.3.3 Vector quantization 21.3.4 The K-means++ algorithm 21.3.5 The K-medoids algorithm 21.3.6 Speedup tricks 21.3.7 Choosing the number of clusters K 21.4 Clustering using mixture models 21.4.1 Mixtures of Gaussians 21.4.2 Mixtures of Bernoullis 21.5 Spectral clustering * 21.5.1 Normalized cuts 21.5.2 Eigenvectors of the graph Laplacian encode the clustering 21.5.3 Example 21.5.4 Connection with other m-
ethods 21.6 Biclustering * 21.6.1 Basic biclustering 21.6.2 Nested partition models (Crosscat)
22 Recommender Systems 22.1 Explicit feedback 22.1.1 Datasets 22.1.2 Collaborative filtering 22.1.3 Matrix factorization 22.1.4 Autoencoders 22.2 Implicit feedback 22.2.1 Bayesian personalized ranking 22.2.2 Factorization machines 22.2.3 Neural matrix factorization

22.3 Leveraging side information 22.4 Exploration-exploitation tradeoff
23 Graph Embeddings * 23.1 Introduction 23.2 Graph Embedding as an Encoder/Decoder Problem 23.3 Shallow graph embeddings 23.3.1 Unsupervised embeddings 23.3.2 Distance-based: Euclidean methods 23.3.3 Distance-based: non-Euclidean methods 23.3.4 Outer product-based: Matrix factorization methods 23.3.5 Outer product-based: Skip-gram methods 23.3.6 Supervised embeddings 23.4 Graph Neural Networks 23.4.1 Message passing GNNs 23.4.2 Spectral Graph Convolutions 23.4.3 Spatial Graph Convolutions 23.4.4 N-
on-Euclidean Graph Convolutions 23.5 Deep graph embeddings 23.5.1 Unsupervised embeddings 23.5.2 Semi-supervised embeddings 23.6 Applications 23.6.1 Unsupervised applications 23.6.2 Supervised applications
A Notation A.1 Introduction A.2 Common mathematical symbols A.3 Functions A.3.1 Common functions of one argument A.3.2 Common functions of two arguments A.3.3 Common functions of > 2 arguments A.4 Linear algebra

A.4.1 General notation A.4.2 Vectors A.4.3 Matrices A.4.4 Matrix calculus A.5 Optimization A.6 Probability A.7 Information theory A.8 Statistics and machine learning A.8.1 Supervised learning A.8.2 Unsupervised learning and generative models A.8.3 Bayesian inference A.9 Abbreviations
Index
Bibliography

Preface
In 2012, I published a 1200-page book called Machine Learning: A Probabilistic Perspective, which provided a fairly comprehensive coverage of the field of machine learning (ML) at that time, under the unifying lens of probabilistic modeling. The book was well received, and won the De Groot prize in 2013.
The year 2012 is also generally considered the start of the “deep learning revolution”. The term “deep learning” refers to a branch of ML that is based on neural networks with many layers (hence the term “deep”). Although this basic technology had been around for many years, it was in 2012 when [KSH12] used deep neural networks (DNNs) to win the ImageNet image classification challenge by such a large margin that it caught the attention of the wider community. Related advances on other hard problem-
s, such as speech recognition, appeared around the same time (see e.g., [Cir+10; Cir+11; Hin+12]). These breakthroughs were enabled by advances in hardware technology (in particular, the repurposing of fast graphics processing units (GPUs) from video games to ML), data collection technology (in particular, the use of crowd sourcing tools, such as Amazon’s Mechanical Turk platform, to collect large labeled datasets, such as ImageNet), as well as various new algorithmic ideas. some of which we cover-
 in this book.
Since 2012, the field of deep learning has exploded, with new advances coming at an increasing pace. Interest in the field has also exploded, fueled by the commercial success of the technology, and the breadth of applications to which it can be applied. Therefore, in 2018, I decided to write a second edition of my book, to attempt to summarize some of this progress.

By March 2020, my draft of the second edition had swollen to about 1600 pages, and I still had many topics left to cover. As a result, MIT Press told me I would need to split the book into two volumes. Then the COVID-19 pandemic struck. I decided to pivot away from book writing, and to help develop the risk score algorithm for Google’s exposure notification app [MKS21] as well as to assist with various forecasting projects [Wah+21]. However, by the Fall of 2020, I decided to return to working on t-
he book.
To make up for lost time, I asked several colleagues to help me finish by writing various sections (see acknowledgements below). The result of all this is two new books, “Probabilistic Machine Learning: An Introduction”, which you are currently reading, and “Probabilistic Machine Learning: Advanced Topics”, which is the sequel to this book [Mur22]. Together these two books attempt to present a fairly broad coverage of the field of ML c. 2021, using the same unifying lens of probabilistic modeling -
and Bayesian decision theory that I used in the 2012 book.
Nearly all of the content from the 2012 book has been retained, but it is now split fairly evenly between the two new books. In addition, each new book has lots of fresh material, covering topics from deep learning, as well as advances in other parts of the field, such as generative models, variational inference and reinforcement learning.
To make this introductory book more self-contained and useful for students, I have added some background material, on topics such as optimization and linear algebra, that was omitted from the 2012 book due to lack of space. Advanced material, that can be skipped during an introductory level course, is denoted by an asterisk * in the section or chapter title. Exercises can be found at the end of some chapters. Solutions to exercises marked with an asterisk * are available to qualified instructors b-
y contacting MIT Press; solutions to all other exercises can be found online. See the book web site at probml.ai for additional teaching material (e.g., figures and slides).
Another major change is that all of the software now uses Python instead of Matlab. (In the future, we may create a Julia version of the code.) The new code leverages standard Python libraries, such as NumPy, Scikit-learn, JAX, PyTorch, TensorFlow, PyMC3, etc. Details on how to use the code can be found at probml.ai.

Acknowledgements

I would like to thank the following people for helping me with the book:

Zico Kolter, who helped write parts of Chapter 7 (Linear Algebra). Frederik Kunstner, Si Yi Meng, Aaron Mishkin, Sharan Vaswani, and Mark Schmidt who helped write parts of Chapter 8 (Optimization). Mathieu Blondel, who helped write Section 13.3 (Backpropagation). Krzysztof Choromanski, who helped write Section 15.6 (Efficient transformers *). Colin Raffel, who helped write Section 19.2 (Transfer learning) and Section 19.3 (Semi-supervised learning). Bryan Perozzi, Sami Abu-El-Haija and Ines Chami,-
 who helped write Chapter 23 (Graph Embeddings *). John Fearns and Peter Cerno for carefully proofreading the book. Many members of the github community for finding typos, etc (see

https://github.com/probml/pml-book/issues?

q=is:issue for a list of issues).

The 4 anonymous reviewers solicited by MIT Press.

Mahmoud Soliman for writing all the magic plumbing code that

connects latex, colab, github, etc, and for teaching me about GCP and

TPUs.

The 2021 cohort of Google Summer of Code students who worked on

code for the book: Aleyna Kara, Srikar Jilugu, Drishti Patel, Ming

Liang

Ang,

Gerardo

Durán-Martín.

(See

https://probml.github.io/pmlbook/gsoc2021.html for a summary of their contributions.) Many members of the github community for their code contributions (see

https://github.com/probml/pyprobml#acknowledg ements). The authors of [Zha+20], [Gér17] and [Mar18] for letting me reuse or modify some of their open source code from their own excellent books. My manager at Google, Doug Eck, for letting me spend company time on this book. My wife Margaret for letting me spend family time on this book.

About the cover
∈ The cover illustrates a neural network (Chapter 13) being used to classify a
hand-written digit x into one of 10 class labels y {0, 1, … , 9}. The histogram on the right is the output of the model, and corresponds to the conditional probability distribution p(y|x).
Kevin Patrick Murphy Palo Alto, California August 2021.

1 Introduction
1.1 What is machine learning?
A popular definition of machine learning or ML, due to Tom Mitchell [Mit97], is as follows:
A computer program is said to learn from experience E with respect to some class of tasks T, and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.
Thus there are many different kinds of machine learning, depending on the nature of the task T we wish the system to learn, the nature of the performance measure P we use to evaluate the system, and the nature of the training signal or experience E we give it.
In this book, we will cover the most common types of ML, but from a probabilistic perspective. Roughly speaking, this means that we treat all unknown quantities (e.g., predictions about the future value of some quantity of interest, such as tomorrow’s temperature, or the parameters of some model) as random variables, that are endowed with probability distributions which describe a weighted set of possible values the variable may have. (See Chapter 2 for a quick refresher on the basics of probabili-
ty, if necessary.)
There are two main reasons we adopt a probabilistic approach. First, it is the optimal approach to decision making under uncertainty, as we explain in Section 5.1. Second, probabilistic modeling is the language used by most other areas of science and engineering, and thus provides a unifying framework between these fields. As Shakir Mohamed, a researcher at DeepMind, put it:1
Almost all of machine learning can be viewed in probabilistic terms, making probabilistic thinking fundamental. It is, of course, not the only view. But it is through this view that we can connect what we do in machine learning to every other computational science, whether

that be in stochastic optimisation, control theory, operations research, econometrics, information theory, statistical physics or bio-statistics. For this reason alone, mastery of probabilistic thinking is essential.

1.2 Supervised learning

∈ ∈ The most common form of ML is supervised learning. In this problem, the
task T is to learn a mapping f from inputs x X to outputs y Y. The inputs x are also called the features, covariates, or predictors; this is often a

fixed-dimensional vector of numbers, such as the height and weight of a

person, or the pixels in an image. In this case, X = ℝD, where D is the dimensionality of the vector (i.e., the number of input features). The output y

is also known as the label, target, or response.2 The experience E is given in

the form of a set of N input-output pairs

, known as the

training set. (N is called the sample size.) The performance measure P

depends on the type of output we are predicting, as we discuss below.

Figure 1.1: Three types of Iris flowers: Setosa, Versicolor and Virginica. Used with kind permission of Dennis Kramb and SIGNA.

index sl sw pl pw 0 5.1 3.5 1.4 0.2 1 4.9 3.0 1.4 0.2
⋯ 50 7.0 3.2 4.7 1.4
⋯

label Setosa Setosa
Versicolor

149 5.9 3.0 5.1 1.8

Virginica

Table 1.1: A subset of the Iris design matrix. The features are: sepal length, sepal width, petal length, petal width. There are 50 examples of each class.

1.2.1 Classification
In classification problems, the output space is a set of C unordered and mutually exclusive labels known as classes, Y = {1, 2, … , C}. The problem of
∈ ∈ predicting the class label given an input is also called pattern recognition. (If
there are just two classes, often denoted by y {0, 1} or y {−1, +1}, it is called binary classification.)

1.2.1.1 Example: classifying Iris flowers
As an example, consider the problem of classifying Iris flowers into their 3 subspecies, Setosa, Versicolor and Virginica. Figure 1.1 shows one example of each of these classes.

Figure 1.2: Illustration of the image classification problem. From https://cs231n.github.io/. Used with kind permission of Andrej Karpathy.

In image classification, the input space X is the set of images, which is a very high-dimensional space: for a color image with C = 3 channels (e.g., RGB) and D1 × D2 pixels, we have X = ℝD, where D = C × D1 × D2. (In practice we represent each pixel intensity with an integer, typically from the range {0, 1, … , 255}, but we assume real valued inputs for notational
simplicity.) Learning a mapping f : X → Y from images to labels is quite challenging, as illustrated in Figure 1.2. However, it can be tackled using certain kinds of functions, such as a convolutional neural network or CNN, which we discuss in Section 14.1.
Fortunately for us, some botanists have already identified 4 simple, but highly informative, numeric features — sepal length, sepal width, petal length, petal width — which can be used to distinguish the three kinds of Iris flowers. In this section, we will use this much lower-dimensional input space, X = ℝ4, for simplicity. The Iris dataset is a collection of 150 labeled examples of Iris flowers, 50 of each type, described by these 4 features. It is widely used as an example, because it is small -
and simple to understand. (We will discuss larger and more complex datasets later in the book.)
When we have small datasets of features, it is common to store them in an N × D matrix, in which each row represents an example, and each column represents a feature. This is known as a design matrix; see Table 1.1 for an example.3
The Iris dataset is an example of tabular data. When the inputs are of variable size (e.g., sequences of words, or social networks), rather than fixedlength vectors, the data is usually stored in some other format rather than in a design matrix. However, such data is often converted to a fixed-sized feature representation (a process known as featurization), thus implicitly creating a design matrix for further processing. We give an example of this in Section 1.5.4.1, where we discuss the “bag of w-
ords” representation for sequence data.

Figure 1.3: Visualization of the Iris data as a pairwise scatter plot. On the diagonal we plot the marginal distribution of each feature for each class. The off-diagonals contain scatterplots of all possible pairs of features. Generated by code at figures.probml.ai/book1/1.3
1.2.1.2 Exploratory data analysis
Before tackling a problem with ML, it is usually a good idea to perform exploratory data analysis, to see if there are any obvious patterns (which might give hints on what method to choose), or any obvious problems with the data (e.g., label noise or outliers).
For tabular data with a small number of features, it is common to make a pair plot, in which panel (i, j) shows a scatter plot of variables i and j, and the

diagonal entries (i, i) show the marginal density of variable i; all plots are optionally color coded by class label — see Figure 1.3 for an example.
For higher-dimensional data, it is common to first perform dimensionality reduction, and then to visualize the data in 2d or 3d. We discuss methods for dimensionality reduction in Chapter 20.
Figure 1.4: Example of a decision tree of depth 2 applied to the Iris data, using just the petal length and petal width features. Leaf nodes are color coded according to the predicted class. The number of training samples that pass from the root to a node is shown inside each box; we show how many values of each class fall into this node. This vector of counts can be normalized to get a distribution over class labels for each node. We can then pick the majority class. Adapted from Figures 6.1 and -
6.2 of [Gér19]. Generated by code at figures.probml.ai/book1/1.4.
1.2.1.3 Learning a classifier From Figure 1.3, we can see that the Setosa class is easy to distinguish from the other two classes. For example, suppose we create the following decision rule:
This is a very simple example of a classifier, in which we have partitioned the input space into two regions, defined by the one-dimensional (1d) decision

boundary at xpetal length = 2.45. Points lying to the left of this boundary are classified as Setosa; points to the right are either Versicolor or Virginica.
We see that this rule perfectly classifies the Setosa examples, but not the Virginica and Versicolor ones. To improve performance, we can recursively partition the space, by splitting regions in which the classifier makes errors. For example, we can add another decision rule, to be applied to inputs that fail the first test, to check if the petal width is below 1.75cm (in which case we predict Versicolor) or above (in which case we predict Virginica). We can arrange these nested rules into a tree -
structure, called a decision tree, as shown in Figure 1.4a This induces the 2d decision surface shown in Figure 1.4b.

Truth

Setosa Versicolor Virginica

Setosa 0 1 10

Estimate

Versicolor Virginica

1

1

0

1

10

0

Table 1.2: Hypothetical asymmetric loss matrix for Iris classification.

We can represent the tree by storing, for each internal node, the feature index that is used, as well as the corresponding threshold value. We denote all these parameters by θ. We discuss how to learn these parameters in Section 18.1.

1.2.1.4 Empirical risk minimization
The goal of supervised learning is to automatically come up with classification models such as the one shown in Figure 1.4a, so as to reliably predict the labels for any given input. A common way to measure performance on this task is in terms of the misclassification rate on the training set:

where I(e) is the binary indicator function, which returns 1 iff (if and only if ) the condition e is true, and returns 0 otherwise, i.e.,

This assumes all errors are equal. However it may be the case that some errors are more costly than others. For example, suppose we are foraging in the wilderness and we find some Iris flowers. Furthermore, suppose that Setosa and Versicolor are tasty, but Virginica is poisonous. In this case, we might use the asymmetric loss function ℓ(y, ŷ) shown in Table 1.2.
We can then define empirical risk to be the average loss of the predictor on the training set:
We see that the misclassification rate Equation (1.2) is equal to the empirical risk when we use zero-one loss for comparing the true label with the prediction:
See Section 5.1 for more details. One way to define the problem of model fitting or training is to find a
setting of the parameters that minimizes the empirical risk on the training set:
This is called empirical risk minimization. However, our true goal is to minimize the expected loss on future data that
we have not yet seen. That is, we want to generalize, rather than just do well on the training set. We discuss this important point in Section 1.2.3.
1.2.1.5 Uncertainty [We must avoid] false confidence bred from an ignorance of the
probabilistic nature of the world, from a desire to see black and white where we should rightly see gray. — Immanuel Kant, as paraphrased by Maria Konnikova [Kon20].

In many cases, we will not be able to perfectly predict the exact output given the input, due to lack of knowledge of the input-output mapping (this is called epistemic uncertainty or model uncertainty), and/or due to intrinsic (irreducible) stochasticity in the mapping (this is called aleatoric uncertainty or data uncertainty).
Representing uncertainty in our prediction can be important for various applications. For example, let us return to our poisonous flower example, whose loss matrix is shown in Table 1.2. If we predict the flower is Virginica with high probability, then we should not eat the flower. Alternatively, we may be able to perform an information gathering action, such as performing a diagnostic test, to reduce our uncertainty. For more information about how to make optimal decisions in the presence of unce-
rtainty, see Section 5.1.
We can capture our uncertainty using the following conditional probability distribution:

where f : X → [0, 1]C maps inputs to a probability distribution over the C possible output labels. Since fc(x; θ) returns the probability of class label c, we

require 0 ≤ fc ≤ 1 for each c, and

. To avoid this restriction, it is

common to instead require the model to return unnormalized log-

probabilities. We can then convert these to probabilities using the softmax

function, which is defined as follows

This maps ℝC to [0, 1]C, and satisfies the constraints that 0 ≤ S(a)c ≤ 1 and . The inputs to the softmax, a = f(x; θ), are called logits. See
Section 2.5.2 for details. We thus define the overall model as follows:
A common special case of this arises when f is an affine function of the form

where θ = (b, w) are the parameters of the model. This model is called logistic

regression, and will be discussed in more detail in Chapter 10.

In statistics, the w parameters are usually called regression coefficients

(and are typically denoted by β) and b is called the intercept. In ML, the

parameters w are called the weights and b is called the bias. This terminology

arises from electrical engineering, where we view the function f as a circuit

which takes in x and returns f(x). Each input is fed to the circuit on “wires”,

which have weights w. The circuit computes the weighted sum of its inputs,

and adds a constant bias or offset term b. (This use of the term “bias” should

not be confused with the statistical concept of bias discussed in Section

4.7.6.1.)

To reduce notational clutter, it is common to absorb the bias term b into

the weights w by defining

 and defining

,

so that

This converts the affine function into a linear function. We will usually assume that this has been done, so we can just write the prediction function as follows:

1.2.1.6 Maximum likelihood estimation When fitting probabilistic models, it is common to use the negative log probability as our loss function:
The reasons for this are explained in Section 5.1.6.1, but the intuition is that a good model (with low loss) is one that assigns a high probability to the true output y for each corresponding input x. The average negative log probability of the training set is given by

This is called the negative log likelihood. If we minimize this, we can compute the maximum likelihood estimate or MLE:
This is a very common way to fit models to data, as we will see.
1.2.2 Regression
∈ Now suppose that we want to predict a real-valued quantity y ℝ instead of ∈ a class label y {1, … , C}; this is known as regression. For example, in the
case of Iris flowers, y might be the degree of toxicity if the flower is eaten, or the average height of the plant.
Regression is very similar to classification. However, since the output is real-valued, we need to use a different loss function. For regression, the most common choice is to use quadratic loss, or ℓ2 loss:
This penalizes large residuals y − ŷ more than small ones.4 The empirical risk when using quadratic loss is equal to the mean squared error or MSE:

Based on the discussion in Section 1.2.1.5, we should also model the uncertainty in our prediction. In regression problems, it is common to assume the output distribution is a Gaussian or normal. As we explain in Section 2.6, this distribution is defined by

where µ is the mean, σ2 is the variance, and

is the normalization

constant needed to ensure the density integrates to 1. In the context of

regression, we can make the mean depend on the inputs by defining µ = f(xn;

θ). We therefore get the following conditional probability distribution:

If we assume that the variance σ2 is fixed (for simplicity), the corresponding negative log likelihood becomes
We see that the NLL is proportional to the MSE. Hence computing the maximum likelihood estimate of the parameters will result in minimizing the squared error, which seems like a sensible approach to model fitting. 1.2.2.1 Linear regression As an example of a regression model, consider the 1d data in Figure 1.5a. We can fit this data using a simple linear regression model of the form
where w is the slope, b is the offset, and θ = (w, b) are all the parameters of the model. By adjusting θ, we can minimize the sum of squared errors, shown by the vertical lines in Figure 1.5b. until we find the least squares solution
See Section 11.2.2.1 for details.

Figure 1.5: (a) Linear regression on some 1d data. (b) The vertical lines denote the residuals between the observed output value for each input (blue circle) and its predicted value (red cross). The goal of least squares regression is to pick a line that minimizes the sum of squared residuals. Generated by code at figures.probml.ai/book1/1.5.
If we have multiple input features, we can write
where θ = (w, b). This is called multiple linear regression. For example, consider the task of predicting temperature as a function of
2d location in a room. Figure 1.6(a) plots the results of a linear model of the following form:
We can extend this model to use D > 2 input features (such as time of day), but then it becomes harder to visualize.
1.2.2.2 Polynomial regression The linear model in Figure 1.5a is obviously not a very good fit to the data. We can improve the fit by using a polynomial regression model of degree D. This has the form f(x; w) = wTϕ(x), where ϕ(x) is a feature vector derived from the input, which has the following form:

This is a simple example of feature preprocessing, also called feature engineering.

Figure 1.6: Linear and polynomial regression applied to 2d data. Vertical axis is temperature, horizontal axes are location within a room. Data was collected by some remote sensing motes at Intel’s lab in Berkeley, CA

(data courtesy of Romain Thibaux). (a) The fitted plane has the form

. (b)

Temperature data is fitted with a quadratic of the form

.

Generated by code at figures.probml.ai/book1/1.6.

In Figure 1.7a, we see that using D = 2 results in a much better fit. We can keep increasing D, and hence the number of parameters in the model, until D = N − 1; in this case, we have one parameter per data point, so we can perfectly interpolate the data. The resulting model will have 0 MSE, as shown in Figure 1.7c. However, intuitively the resulting function will not be a good predictor for future inputs, since it is too “wiggly”. We discuss this in more detail in Section 1.2.3.
We can also apply polynomial regression to multi-dimensional inputs. For example, Figure 1.6(b) plots the predictions for the temperature model after performing a quadratic expansion of the inputs

The quadratic shape is a better fit to the data than the linear model in Figure 1.6(a), since it captures the fact that the middle of the room is hotter. We can also add cross terms, such as x1x2, to capture interaction effects. See Section 1.5.3.2 for details.

Note that the above models still use a prediction function that is a linear function of the parameters w, even though it is a nonlinear function of the original input x. The reason this is important is that a linear model induces an MSE loss function MSE(θ) that has a unique global optimum, as we explain in Section 11.2.2.1.

1.2.2.3 Deep neural networks

In Section 1.2.2.2, we manually specified the transformation of the input

features, namely polynomial expansion,

. We can

create much more powerful models by learning to do such nonlinear feature

extraction automatically. If we let ϕ(x) have its own set of parameters, say V, then the overall model has the form

Figure 1.7: (a-c) Polynomials of degrees 2, 14 and 20 fit to 21 datapoints (the same data as in Figure 1.5). (d) MSE vs degree. Generated by code at figures.probml.ai/book1/1.7.
We can recursively decompose the feature extractor ϕ(x; V) into a composition of simpler functions. The resulting model then becomes a stack of L nested functions:
where fℓ(x) = f(x; θℓ) is the function at layer ℓ. The final layer is linear and has the form fL(x) = wTf1:L−1(x), where f1:L−1(x) is the learned feature extractor. This is the key idea behind deep neural networks or DNNs, which includes common variants such as convolutional neural networks (CNNs) for images, and recurrent neural networks (RNNs) for sequences. See Part III for details.

1.2.3 Overfitting and generalization
We can rewrite the empirical risk in Equation (1.4) in the following equivalent way:
where |Dtrain| is the size of the training set Dtrain. This formulation is useful because it makes explicit which dataset the loss is being evaluated on.
With a suitably flexible model, we can drive the training loss to zero (assuming no label noise), by simply memorizing the correct output for each input. For example, Figure 1.7(c) perfectly interpolates the training data (modulo the last point on the right). But what we care about is prediction accuracy on new data, which may not be part of the training set. A model that perfectly fits the training data, but which is too complex, is said to suffer from overfitting.
To detect if a model is overfitting, let us assume (for now) that we have access to the true (but unknown) distribution p*(x, y) used to generate the training set. Then, instead of computing the empirical risk we compute the theoretical expected loss or population risk
The difference L(θ; p*) − L(θ; Dtrain) is called the generalization gap. If a model has a large generalization gap (i.e., low empirical risk but high population risk), it is a sign that it is overfitting.
In practice we don’t know p*. However, we can partition the data we do have into two subsets, known as the training set and the test set. Then we can approximate the population risk using the test risk:
As an example, in Figure 1.7d, we plot the training error and test error for polynomial regression as a function of degree D. We see that the training error goes to 0 as the model becomes more complex. However, the test error has a characteristic U-shaped curve: on the left, where D = 1, the model is

underfitting; on the right, where D ≫ 1, the model is overfitting; and when D = 2, the model complexity is “just right”.
How can we pick a model of the right complexity? If we use the training set to evaluate different models, we will always pick the most complex model, since that will have the most degrees of freedom, and hence will have minimum loss. So instead we should pick the model with minimum test loss.
In practice, we need to partition the data into three sets, namely the training set, the test set and a validation set; the latter is used for model selection, and we just use the test set to estimate future performance (the population risk), i.e., the test set is not used for model fitting or model selection. See Section 4.5.4 for further details.
1.2.4 No free lunch theorem
All models are wrong, but some models are useful. — George Box [BD87, p424].5
Given the large variety of models in the literature, it is natural to wonder which one is best. Unfortunately, there is no single best model that works optimally for all kinds of problems — this is sometimes called the no free lunch theorem [Wol96]. The reason is that a set of assumptions (also called inductive bias) that works well in one domain may work poorly in another. The best way to pick a suitable model is based on domain knowledge, and/or trial and error (i.e., using model selection techn-
iques such as cross validation (Section 4.5.4) or Bayesian methods (Section 5.2.2)). For this reason, it is important to have many models and algorithmic techniques in one’s toolbox to choose from.
1.3 Unsupervised learning
In supervised learning, we assume that each input example x in the training set has an associated set of output targets y, and our goal is to learn the inputoutput mapping. Although this is useful, and can be difficult, supervised learning is essentially just “glorified curve fitting” [Pea18].
An arguably much more interesting task is to try to “make sense of ” data, as opposed to just learning a mapping. That is, we just get observed “inputs” D

= {xn : n = 1 : N} without any corresponding “outputs” yn. This is called unsupervised learning.
From a probabilistic perspective, we can view the task of unsupervised learning as fitting an unconditional model of the form p(x), which can generate new data x, whereas supervised learning involves fitting a conditional model, p(y|x), which specifies (a distribution over) outputs given inputs.6
Unsupervised learning avoids the need to collect large labeled datasets for training, which can often be time consuming and expensive (think of asking doctors to label medical images).
Unsupervised learning also avoids the need to learn how to partition the world into often arbitrary categories. For example, consider the task of labeling when an action, such as “drinking” or “sipping”, occurs in a video. Is it when the person picks up the glass, or when the glass first touches the mouth, or when the liquid pours out? What if they pour out some liquid, then pause, then pour again — is that two actions or one? Humans will often disagree on such issues [Idr+17], which means the tas-
k is not well defined. It is therefore not reasonable to expect machines to learn such mappings.7
Finally, unsupervised learning forces the model to “explain” the highdimensional inputs, rather than just the low-dimensional outputs. This allows us to learn richer models of “how the world works”. As Geoff Hinton, who is a famous professor of ML at the University of Toronto, has said:
When we’re learning to see, nobody’s telling us what the right answers are — we just look. Every so often, your mother says “that’s a dog”, but that’s very little information. You’d be lucky if you got a few bits of information — even one bit per second — that way. The brain’s visual system has 1014 neural connections. And you only live for 109 seconds. So it’s no use learning one bit per second. You need more like 105 bits per second. And there’s only one place you can get that much information: -
from the input itself. — Geoffrey Hinton, 1996 (quoted in [Gor06]).
1.3.1 Clustering

A simple example of unsupervised learning is the problem of finding clusters in data. The goal is to partition the input into regions that contain “similar” points. As an example, consider a 2d version of the Iris dataset. In Figure 1.8a, we show the points without any class labels. Intuitively there are at least two clusters in the data, one in the bottom left and one in the top right. Furthermore, if we assume that a “good” set of clusters should be fairly compact, then we might want to split th-
e top right into (at least) two subclusters. The resulting partition into three clusters is shown in Figure 1.8b. (Note that there is no correct number of clusters; instead, we need to consider the tradeoff between model complexity and fit to the data. We discuss ways to make this tradeoff in Section 21.3.7.)
Figure 1.8: (a) A scatterplot of the petal features from the iris dataset. (b) The result of unsupervised clustering using K = 3. Generated by code at figures.probml.ai/book1/1.8.

Figure 1.9: (a) Scatterplot of iris data (first 3 features). Points are color coded by class. (b) We fit a 2d linear

subspace to the 3d data using PCA. The class labels are ignored. Red dots are the original data, black dots are

points generated from the model using

, where z are latent points on the underlying inferred 2d

linear manifold. Generated by code at figures.probml.ai/book1/1.9.

1.3.2 Discovering latent “factors of variation”
When dealing with high-dimensional data, it is often useful to reduce the dimensionality by projecting it to a lower dimensional subspace which captures the “essence” of the data. One approach to this problem is to assume that each
∈ observed high-dimensional output xn ℝD was generated by a set of hidden ∈ or unobserved low-dimensional latent factors zn ℝK. We can represent the
model diagrammatically as follows: zn → xn, where the arrow represents causation. Since we don’t know the latent factors zn, we often assume a simple prior probability model for p(zn) such as a Gaussian, which says that each factor is a random K-dimensional vector. If the data is real-valued, we can use a Gaussian likelihood as well.
The simplest example is when we use a linear model, p(xn|zn; θ) = N (xn|Wzn + µ, Σ). The resulting model is called factor analysis (FA). It is similar to linear regression, except we only observe the outputs xn, and not the inputs zn. In the special case that Σ = σ2I, this reduces to a model called probabilistic principal components analysis (PCA), which we will explain in

Section 20.1. In Figure 1.9, we give an illustration of how this method can find a 2d linear subspace when applied to some simple 3d data.
Of course, assuming a linear mapping from zn to xn is very restrictive. However, we can create nonlinear extensions by defining p(xn|zn; θ) = N(xn|f(zn; θ), σ2I), where f(z; θ) is a nonlinear model, such as a deep neural network. It becomes much harder to fit such a model (i.e., to estimate the parameters θ), because the inputs to the neural net have to be inferred, as well as the parameters of the model. However, there are various approximate methods, such as the variational autoencoder which can-
 be applied (see Section 20.3.5).

1.3.3 Self-supervised learning

A recently popular approach to unsupervised learning is known as self-

supervised learning. In this approach, we create proxy supervised tasks from

unlabeled data. For example, we might try to learn to predict a color image

from a grayscale image, or to mask out words in a sentence and then try to

predict them given the surrounding context. The hope is that the resulting

predictor

, where x2 is the observed input and is the predicted

output, will learn useful features from the data, that can then be used in

standard, downstream supervised tasks. This avoids the hard problem of trying

to infer the “true latent factors” z behind the observed data, and instead relies

on standard supervised learning methods. We discuss this approach in more

detail in Section 19.2.

1.3.4 Evaluating unsupervised learning
Although unsupervised learning is appealing, it is very hard to evaluate the quality of the output of an unsupervised learning method, because there is no ground truth to compare to [TOB16].
A common method for evaluating unsupervised models is to measure the probability assigned by the model to unseen test examples. We can do this by computing the (unconditional) negative log likelihood of the data:

This treats the problem of unsupervised learning as one of density estimation. The idea is that a good model will not be “surprised” by actual data samples (i.e., will assign them high probability). Furthermore, since probabilities must sum to 1.0, if the model assigns high probability to regions of data space where the data samples come from, it implicitly assigns low probability to the regions where the data does not come from. Thus the model has learned to capture the typical patterns in the da-
ta. This can be used inside of a data compression algorithm.
Figure 1.10: Examples of some control problems. (a) Space Invaders Atari game. From https://gym.openai.com/envs/SpaceInvaders-v0/. (b) Controlling a humanoid robot in the MuJuCo simulator so it walks as fast as possible without falling over. From https://gym.openai.com/envs/Humanoid-v2/.
Unfortunately, density estimation is difficult, especially in high dimensions. Furthermore, a model that assigns high probability to the data may not have learned useful high-level patterns (after all, the model could just memorize all the training examples).
An alternative evaluation metric is to use the learned unsupervised representation as features or input to a downstream supervised learning method. If the unsupervised method has discovered useful patterns, then it should be possible to use these patterns to perform supervised learning using much less labeled data than when working with the original features. For example, in Section 1.2.1.1, we saw how the 4 manually defined features of iris flowers contained most of the information needed to perf-
orm classification. We were thus able to train a classifier with nearly perfect performance using just 150 examples. If the input was raw pixels, we would need many more examples to achieve comparable performance (see Section 14.1). That is, we

can increase the sample efficiency of learning (i.e., reduce the number of labeled examples needed to get good performance) by first learning a good representation.
Increased sample efficiency is a useful evaluation metric, but in many applications, especially in science, the goal of unsupervised learning is to gain understanding, not to improve performance on some prediction task. This requires the use of models that are interpretable, but which can also generate or “explain” most of the observed patterns in the data. To paraphrase Plato, the goal is to discover how to “carve nature at its joints”. Of course, evaluating whether we have succesfully discovered-
 the true underlying structure behind some dataset often requires performing experiments and thus interacting with the world. We discuss this topic further in Section 1.4.
1.4 Reinforcement learning
In addition to supervised and unsupervised learning, there is a third kind of ML known as reinforcement learning (RL). In this class of problems, the system or agent has to learn how to interact with its environment. This can be encoded by means of a policy a = π(x), which specifies which action to take in response to each possible input x (derived from the environment state).
For example, consider an agent that learns to play a video game, such as Atari Space Invaders (see Figure 1.10a). In this case, the input x is the image (or sequence of past images), and the output a is the direction to move in (left or right) and whether to fire a missile or not. As a more complex example, consider the problem of a robot learning to walk (see Figure 1.10b). In this case, the input x is the set of joint positions and angles for all the limbs, and the output a is a set of actuation-
 or motor control signals.

Figure 1.11: The three types of machine learning visualized as layers of a chocolate cake. This figure (originally from https://bit.ly/2m65Vs1) was used in a talk by Yann LeCun at NIPS’16, and is used with his kind permission.
The difference from supervised learning (SL) is that the system is not told which action is the best one to take (i.e., which output to produce for a given input). Instead, the system just receives an occasional reward (or punishment) signal in response to the actions that it takes. This is like learning with a critic, who gives an occasional thumbs up or thumbs down, as opposed to learning with a teacher, who tells you what to do at each step.
RL has grown in popularity recently, due to its broad applicability (since the reward signal that the agent is trying to optimize can be any metric of interest). However, it can be harder to make RL work than it is for supervised or unsupervised learning, for a variety of reasons. A key difficulty is that the reward signal may only be given occasionally (e.g., if the agent eventually reaches a desired state), and even then it may be unclear to the agent which of its many actions were responsible f-
or getting the reward. (Think of playing a game like chess, where there is a single win or lose signal at the end of the game.)
To compensate for the minimal amount of information coming from the reward signal, it is common to use other information sources, such as expert demonstrations, which can be used in a supervised way, or unlabeled data, which can be used by an unsupervised learning system to discover the underlying structure of the environment. This can make it feasible to learn from a limited number of trials (interactions with the environment). As Yann

LeCun put it, in an invited talk at the NIPS8 conference in 2016: “If intelligence was a cake, unsupervised learning would be the chocolate sponge, supervised learning would be the icing, and reinforcement learning would be the cherry.” This is illustrated in Figure 1.11.
Figure 1.12: (a) Visualization of the MNIST dataset. Each image is 28 × 28. There are 60k training examples and 10k test examples. We show the first 25 images from the training set. Generated by code at figures.probml.ai/book1/1.12. (b) Visualization of the EMNIST dataset. There are 697,932 training examples, and 116,323 test examples, each of size 28 × 28. There are 62 classes (a-z, A-Z, 0-9). We show the first 25 images from the training set. Generated by code at figures.probml.ai/book1/1.12.
More information on RL can be found in the sequel to this book, [Mur22].
1.5 Data
Machine learning is concerned with fitting models to data using various algorithms. Although we focus on the modeling and algorithm aspects, it is important to mention that the nature and quality of the training data also plays a vital role in the success of any learned model.
In this section, we briefly describe some common image and text datasets that we will use in this book. We also briefly discuss the topic of data preprocessing. 1.5.1 Some common image datasets

In this section, we briefly discuss some image datasets that we will use in this book.
1.5.1.1 Small image datasets One of the simplest and most widely used is known as MNIST [LeC+98; YB19].9 This is a dataset of 60k training images and 10k test images, each of size 28 × 28 (grayscale), illustrating handwritten digits from 10 categories. Each pixel is an integer in the range {0, 1, … , 255}; these are usually rescaled to [0, 1], to represent pixel intensity. We can optionally convert this to a binary image by thresholding. See Figure 1.12a for an illustration.
Figure 1.13: (a) Visualization of the Fashion-MNIST dataset [XRV17]. The dataset has the same size as MNIST, but is harder to classify. There are 10 classes: T-shirt/top, Trouser, Pullover, Dress, Coat, Sandal, Shirt, Sneaker, Bag, Ankle-boot. We show the first 25 images from the training set. Generated by code at figures.probml.ai/book1/1.13. (b) Some images from the CIFAR-10 dataset [KH09]. Each image is 32 × 32 × 3, where the final dimension of size 3 refers to RGB. There are 50k training examp-
les and 10k test examples. There are 10 classes: plane, car, bird, cat, deer, dog, frog, horse, ship, and truck. We show the first 25 images from the training set. Generated by code at figures.probml.ai/book1/1.13.
MNIST is so widely used in the ML community that Geoff Hinton, a famous ML researcher, has called it the “drosophila of machine learning”, since if we cannot make a method work well on MNIST, it will likely not work well on harder datasets. However, nowadays MNIST classification is considered

“too easy”, since it is possible to distinguish most pairs of digits by looking at just a single pixel. Various extensions have been proposed.
In [Coh+17], they proposed EMNIST (extended MNIST), that also includes lower and upper case letters. See Figure 1.12b for a visualization. This dataset is much harder than MNIST, since there are 62 classes, several of which are quite ambiguous (e.g., the digit 1 vs the lower case letter l).
In [XRV17], they proposed Fashion-MNIST, which has exactly the same size and shape as MNIST, but where each image is the picture of a piece of clothing instead of a handwritten digit. See Figure 1.13a for a visualization.
For small color images, the most common dataset is CIFAR [KH09].10 This is a dataset of 60k images, each of size 32 × 32 × 3, representing everyday objects from 10 or 100 classes; see Figure 1.13b for an illustration.
1.5.1.2 ImageNet
Small datasets are useful for prototyping ideas, but it is also important to test methods on larger datasets, both in terms of image size and number of labeled examples. The most widely used dataset of this type is called ImageNet [Rus+15]. This is a dataset of ~ 14M images of size 256 × 256 × 3 illustrating various objects from 20,000 classes; see Figure 1.14a for some examples.

Figure 1.14: (a) Sample images from the ImageNet dataset [Rus+15]. This subset consists of 1.3M color training images, each of which is 256 × 256 pixels in size. There are 1000 possible labels, one per image, and the task is to minimize the top-5 error rate, i.e., to ensure the correct label is within the 5 most probable predictions. Below each image we show the true label, and a distribution over the top 5 predicted labels. If the true label is in the top 5, its probability bar is colored red. Pr-
edictions are generated by a convolutional neural network (CNN) called “AlexNet” (Section 14.3.2). From Figure 4 of [KSH12]. Used with kind permission of Alex Krizhevsky. (b) Misclassification rate (top 5) on the ImageNet competition over time. Used with kind permission of Andrej Karpathy.
The ImageNet dataset was used as the basis of the ImageNet Large Scale Visual Recognition Challenge (ILSVRC), which ran from 2010 to 2018. This used a subset of 1.3M images from 1000 classes. During the course of the competition, significant progress was made by the community, as shown in Figure 1.14b. In particular, 2015 marked the first year in which CNNs could outperform humans (or at least one human, namely Andrej Karpathy) at the task of classifying images from ImageNet. Note that this does n-
ot mean that CNNs are better at vision than humans (see e.g., [YL21] for some common failure modes). Instead, it mostly likely reflects the fact that the dataset makes many fine-grained classification distinctions — such as between a “tiger” and a “tiger cat” — that humans find difficult to understand; by contrast, sufficiently flexible CNNs can learn arbitrary patterns, including random labels [Zha+17a].
Although ImageNet is much harder than MNIST and CIFAR as a classification benchmark, it too is almost “saturated” [Bey+20]. Nevertheless, relative performance of methods on ImageNet is often a surprisingly good

predictor of performance on other, unrelated image classification tasks (see e.g., [Rec+19]), so it remains very widely used.
1.5.2 Some common text datasets
Machine learning is often applied to text to solve a variety of tasks. This is known as natural language processing or NLP (see e.g., [JM20] for details). Below we briefly mention a few text datasets that we will use in this book.
1. this film was just brilliant casting location scenery story direction everyone’s really suited the part they played robert <UNK> is an amazing actor … 2. big hair big boobs bad music and a giant safety pin these are the words to best describe this terrible movie i love cheesy horror movies and i’ve seen hundreds…
Table 1.3: We show snippets of the first two sentences from the IMDB movie review dataset. The first example is labeled positive and the second negative. (<UNK> refers to an unknown token.)
1.5.2.1 Text classification
A simple NLP task is text classification, which can be used for email spam classification, sentiment analysis (e.g., is a movie or product review positive or negative), etc. A common dataset for evaluating such methods is the IMDB movie review dataset from [Maa+11]. (IMDB stands for “Internet Movie Database”.) This contains 25k labeled examples for training, and 25k for testing. Each example has a binary label, representing a positive or negative rating. See Table 1.3 for some example sentences.
1.5.2.2 Machine translation
A more difficult NLP task is to learn to map a sentence x in one language to a “semantically equivalent” sentence y in another language; this is called machine translation. Training such models requires aligned (x, y) pairs. Fortunately, several such datasets exist, e.g., from the Canadian parliament (English-French pairs), and the European Union (Europarl). A subset of the latter, known as the WMT dataset (Workshop on Machine Translation), consists of English-German pairs, and is widely used as a-
 benchmark dataset.
1.5.2.3 Other seq2seq tasks
A generalization of machine translation is to learn a mapping from one sequence x to any other sequence y. This is called a seq2seq model, and can be

viewed as a form of high-dimensional classification (see Section 15.2.3 for details). This framing of the problem is very general, and includes many tasks, such as document summarization, question answering, etc. For example, Table 1.4 shows how to formulate question answering as a seq2seq problem: the input is the text T and question Q, and the output is the answer A, which is a set of words, possibly extracted from the input.
1.5.2.4 Language modeling
The rather grandiose term “language modeling” refers to the task of creating unconditional generative models of text sequences, p(x1, … , xT). This only requires input sentences x, without any corresponding “labels” y. We can therefore think of this as a form of unsupervised learning, which we discuss in Section 1.3. If the language model generates output in response to an input, as in seq2seq, we can regard it as a conditional generative model.
T: In meteorology, precipitation is any product of the condensation of atmospheric water vapor that falls under gravity. The main forms of precipitation include drizzle, rain, sleet, snow, graupel and hail… Precipitation forms as smaller droplets coalesce via collision with other rain drops or ice crystals within a cloud. Short, intense periods of rain in scattered locations are called “showers”. Q1: What causes precipitation to fall? A1: gravity Q2: What is another main form of precipitation besi-
des drizzle, rain, snow, sleet and hail? A2: graupel Q3: Where do water droplets collide with ice crystals to form precipitation? A3: within a cloud
Table 1.4: Question-answer pairs for a sample passage in the SQuAD dataset. Each of the answers is a segment of text from the passage. This can be solved using sentence pair tagging. The input is the paragraph text T and the question Q. The output is a tagging of the relevant words in T that answer the question in Q. From Figure 1 of [Raj+16]. Used with kind permission of Percy Liang.
1.5.3 Preprocessing discrete input data
Many ML models assume that the data consists of real-valued feature vectors, x
∈ ℝD. However, sometimes the input may have discrete input features, such
as categorical variables like race and gender, or words from some vocabulary. In the sections below, we discuss some ways to preprocess such data to convert it to vector form. This is a common operation that is used for many different kinds of models.
1.5.3.1 One-hot encoding
When we have categorical features, we need to convert them to a numerical scale, so that computing weighted combinations of the inputs makes sense.

The standard way to preprocess such categorical variables is to use a one-hot encoding, also called a dummy encoding. If a variable x has K values, we will denote its dummy encoding as follows: one-hot(x) = [I (x = 1), … , I (x = K)]. For example, if there are 3 colors (say red, green and blue), the corresponding one-hot vectors will be one-hot(red) = [1, 0, 0], one-hot(green) = [0, 1, 0], and one-hot(blue) = [0, 0, 1].
1.5.3.2 Feature crosses A linear model using a dummy encoding for each categorical variable can capture the main effects of each variable, but cannot capture interaction effects between them. For example, suppose we want to predict the fuel efficiency of a vehicle given two categorical input variables: the type (say SUV, Truck, or Family car), and the country of origin (say USA or Japan). If we concatenate the one-hot encodings for the ternary and binary features, we get the following input encodi-
ng:
where x1 is the type and x2 is the country of origin. This model cannot capture dependencies between the features. For
example, we expect trucks to be less fuel efficient, but perhaps trucks from the USA are even less efficient than trucks from Japan. This cannot be captured using the linear model in Equation (1.34) since the contribution from the country of origin is independent of the car type.
We can fix this by computing explicit feature crosses. For example, we can define a new composite feature with 3 × 2 possible values, to capture the interaction of type and country of origin. The new model becomes
We can see that the use of feature crosses converts the original dataset into a wide format, with many more columns.

1.5.4 Preprocessing text data
In Section 1.5.2, we briefly discussed text classification and other NLP tasks. To feed text data into a classifier, we need to tackle various issues. First, documents have a variable length, and are thus not fixed-length feature vectors, as assumed by many kinds of models. Second, words are categorical variables with many possible values (equal to the size of the vocabulary), so the corresponding one-hot encodings will be very high-dimensional, with no natural notion of similarity. Third, we may -
encounter words at test time that have not been seen during training (so-called out-of-vocabulary or OOV words). We discuss some solutions to these problems below. More details can be found in e.g., [BKL10; MRS08; JM20].
1.5.4.1 Bag of words model
A simple approach to dealing with variable-length text documents is to interpret them as a bag of words, in which we ignore word order. To convert this to a vector from a fixed input space, we first map each word to a token from some vocabulary.
To reduce the number of tokens, we often use various pre-processing techniques such as the following: dropping punctuation, converting all words to lower case; dropping common but uninformative words, such as “and” and “the” (this is called stop word removal); replacing words with their base form, such as replacing “running” and “runs” with “run” (this is called word stemming); etc. For details, see e.g., [BL12], and for some sample code, see code.probml.ai/book1/text_preproc_torch.
Let xnt be the token at location t in the n’th document. If there are D unique tokens in the vocabulary, then we can represent the n’th document as a D-dimensional vector 
, where 
is the number of times that word v occurs in document n:
where T is the length of document n. We can now interpret documents as vectors in ℝD. This is called the vector space model of text [SWY75; TP10].

We traditionally store input data in an N × D design matrix denoted by X, where D is the number of features. In the context of vector space models, it is more common to represent the input data as a D × N term frequency matrix, where TFij is the frequency of term i in document j. See Figure 1.15 for an illustration.

Figure 1.15: Example of a term-document matrix, where raw counts have been replaced by their TF-IDF values (see Section 1.5.4.2). Darker cells are larger values. From https://bit.ly/2kByLQI. Used with kind permission of Christoph Carl Kling.

1.5.4.2 TF-IDF

One problem with representing documents as word count vectors is that frequent words may have undue influence, just because the magnitude of their word count is higher, even if they do not carry much semantic content. A common solution to this is to transform the counts by taking logs, which reduces the impact of words that occur many times within a single document.
To reduce the impact of words that occur many times in general (across all documents), we compute a quantity called the inverse document frequency,

defined as follows:

, where DFi is the number of documents

with term i. We can combine these transformations to compute the TF-IDF

matrix as follows:

(We often normalize each row as well.) This provides a more meaningful representation of documents, and can be used as input to many ML algorithms. See code.probml.ai/book1/tfidf_demo for an example.
1.5.4.3 Word embeddings
Although the TF-IDF transformation improves the vector representation of words by placing more weight on “informative” words and less on “uninformative” words, it does not overcome the fundamental issue that semantically similar words, such as “man” and “woman”, may be further apart (in vector space) than semantically dissimilar words, such as “man” and “banana”. Thus the assumption that points that are close in input space should have similar outputs, which is implicitly made by logistic regressi-
on models, is invalid.
The standard way to solve this problem is to use word embeddings, in
∈ which we map each sparse one-hot vector, xnt {0, 1}V, to a lower∈ dimensional dense vector, ent ℝK using ent = Exnt, where E is learned such
that semantically similar words are placed close by. There are many ways to learn such embeddings, as we discuss in Section 20.5.
Once we have an embedding matrix, we can represent a variable-length text document as a bag of word embeddings. We can then convert this to a fixed length vector by summing (or averaging) the embeddings:
where is the bag of words representation from Equation (1.37). We can then use this inside of a logistic regression classifier, which we briefly introduced in Section 1.2.1.5. The overall model has the form
We often use a pre-trained word embedding matrix E, in which case the model is linear in W, which simplifies parameter estimation (see Chapter 10). See also Section 15.7 for a discussion of contextual word embeddings.

1.5.4.4 Dealing with novel words
At test time, the model may encounter a completely novel word that it has not seen before. This is known as the out of vocabulary or OOV problem. Such novel words are bound to occur, because the set of words is an open class. For example, the set of proper nouns (names of people and places) is unbounded.
A standard heuristic to solve this problem is to replace all novel words with the special symbol UNK, which stands for “unknown”. However, this loses information. For example, if we encounter the word “athazagoraphobia”, we may guess it means “fear of something”, since phobia is a common suffix in English (derived from Greek) to mean “fear of ”. (It turns out that athazagoraphobia means “fear of being forgotten about or ignored”.)
We could work at the character level, but this would require the model to learn how to group common letter combinations together into words. It is better to leverage the fact that words have substructure, and then to take as input subword units or wordpieces [SHB16; Wu+16]; these are often created using a method called byte-pair encoding [Gag94], which is a form of data compression that creates new symbols to represent common substrings.
1.5.5 Handling missing data
Sometimes we may have missing data, in which parts of the input x or output y may be unknown. If the output is unknown during training, the example is unlabeled; we consider such semi-supervised learning scenarios in Section 19.3. We therefore focus on the case where some of the input features may be missing, either at training or testing time, or both.
To model this, let M be an N × D matrix of binary variables, where Mnd = 1 if feature d in example n is missing, and Mnd = 0 otherwise. Let Xv be the visible parts of the input feature matrix, corresponding to Mnd = 0, and Xh be the missing parts, corresponding to Mnd = 1. Let Y be the output label matrix, which we assume is fully observed. If we assume p(M|Xv, Xh, Y) = p(M), we say the data is missing completely at random or MCAR, since the missingness does not depend on the hidden or observed fe-
atures. If we assume p(M|Xv, Xh, Y) = p(M|Xv, Y), we say the data is missing at random or MAR, since the missingness does not depend on the hidden features, but may depend

on the visible features. If neither of these assumptions hold, we say the data is not missing at random or NMAR.
In the MCAR and MAR cases, we can ignore the missingness mechanism, since it tells us nothing about the hidden features. However, in the NMAR case, we need to model the missing data mechanism, since the lack of information may be informative. For example, the fact that someone did not fill out an answer to a sensitive question on a survey (e.g., “Do you have COVID?”) could be informative about the underlying value. See e.g., [LR87; Mar08] for more information on missing data models.
In this book, we will always make the MAR assumption. However, even with this assumption, we cannot directly use a discriminative model, such as a DNN, when we have missing input features, since the input x will have some unknown values. A common heuristic is called mean value imputation, in which missing values are replaced by their empirical mean. More generally, we can fit a generative model to the input, and use that to fill in the missing values. We briefly discuss some suitable generative mo-
dels for this task in Chapter 20, and in more detail in the sequel to this book, [Mur22].
1.6 Discussion
In this section, we situate ML and this book into a larger context.
1.6.1 The relationship between ML and other fields
There are several subcommunities that work on ML-related topics, each of which have different names. The field of predictive analytics is similar to supervised learning (in particular, classification and regression), but focuses more on business applications. Data mining covers both supervised and unsupervised machine learning, but focuses more on structured data, usually stored in large commercial databases. Data science uses techniques from machine learning and statistics, but also emphasizes ot-
her topics, such as data integration, data visualization, and working with domain experts, often in an iterative feedback loop (see e.g., [BS17]). The difference between these areas is often just one of terminology.11

ML is also very closely related to the field of statistics. Indeed, Jerry Friedman, a famous statistics professor at Stanford, said12
[If the statistics field had] incorporated computing methodology from its inception as a fundamental tool, as opposed to simply a convenient way to apply our existing tools, many of the other data related fields [such as ML] would not have needed to exist — they would have been part of statistics. — Jerry Friedman [Fri97b]
Machine learning is also related to artificial intelligence (AI). Historically, the field of AI assumed that we could program “intelligence” by hand (see e.g., [RN10; PM17]), but this approach has largely failed to live up to expectations, mostly because it proved to be too hard to explicitly encode all the knowledge such systems need. Consequently, there is renewed interest in using ML to help an AI system acquire its own knowledge. (Indeed the connections are so close that sometimes the terms “M-
L” and “AI” are used interchangeably, although this is arguably misleading [Pre21].)
1.6.2 Structure of the book
We have seen that ML is closely related to many other subjects in mathematics, statistics, computer science, etc. It can be hard to know where to start.
In this book, we take one particular path through this interconnected landscape, using probability theory as our unifying lens. We cover statistical foundations in Part I, supervised learning in Part II–Part IV, and unsupervised learning in Part V. For more information on these (and other) topics, please see the sequel to this book, [Mur22],
In addition to the book, you may find the online Python notebooks that accompany this book helpful. See http://probml.ai for details.
1.6.3 Caveats
In this book, we will see how machine learning can be used to create systems that can (attempt to) predict outputs given inputs, and these predictions can then be used to choose actions so as to minimize expected loss. When designing such systems, it can be hard to design a loss function that correctly specifies all of our preferences; this can result in “reward hacking” in which

the machine optimizes the reward function we give it, but then we realize that the function did not capture various constraints or preferences that we forgot to specify [Wei76; Amo+16; D’A+20]. (This is particularly important when tradeoffs need to be made between multiple objectives.)
Reward hacking has raised various concerns in the context of AI ethics and AI safety (see e.g., [KR19; Lia20]). Russell [Rus19] proposes to solve this problem by not specifying the reward function, but instead forcing the machine to infer the reward by observing human behavior, an approach known as inverse reinforcement learning. However, emulating current or past human behavior too closely may be undesirable, and can be biased by the data that is available for training (see e.g., [Pau+20]).
Another approach is to view ML as a tool for building adaptive components that form part of a larger system. Such a system should be designed and regulated in the same way that we design and regulate other complex, semi-autonomous human artefacts, such as aeroplanes, online trading platforms or medical diagnostic systems (c.f. [Jor19]). ML plays a key role in such systems, but additional checks and balances should be put in place to encode our prior knowledge and preferences, and to ensure the sys-
tem acts in the way that we intended.
_______________
1. Source: Slide 2 of https://bit.ly/3pyHyPn 2. Sometimes (e.g., in the statsmodels Python package) x are called the exogenous variables and y are called the endogenous variables. 3. This particular design matrix has N = 150 rows and D = 4 columns, and hence has a tall and skinny shape, since N ≫ D. By contrast, some datasets (e.g., genomics) have more features than examples, D ≫ N; their design matrices are short and fat. The term “big data” usually means that N is large, whereas the term “wide d-
ata” means that D is large (relative to N). 4. If the data has outliers, the quadratic penalty can be too severe. In such cases, it can be better to use ℓ1 loss instead, which is more robust. See Section 11.6 for details. 5. George Box is a retired statistics professor at the University of Wisconsin. 6. In the statistics community, it is common to use x to denote exogenous variables that are not modeled, but are simply given as inputs. Therefore an unconditional model would be denoted p(y) rather -
than p(x). 7. A more reasonable approach is to try to capture the probability distribution over labels produced by a “crowd” of annotators (see e.g., [Dum+18; Aro+19]). This embraces the fact that there can be multiple “correct” labels for a given input due to the ambiguity of the task itself. 8. NIPS stands for “Neural Information Processing Systems”. It is one of the premier ML conferences. It has recently been renamed to NeurIPS.

9. The term “MNIST” stands for “Modified National Institute of Standards”; The term “modified” is used because the images have been preprocessed to ensure the digits are mostly in the center of the image. 10. CIFAR stands for “Canadian Institute For Advanced Research”. This is the agency that funded labeling of the dataset, which was derived from the TinyImages dataset at http://groups.csail.mit.edu/vision/TinyImages/ created by Antonio Torralba. See [KH09] for details. 11. See https://developers.-
google.com/machine-learning/glossary/ for a useful “ML glossary”. 12. Quoted in https://brenocon.com/blog/2008/12/statistics-vs-machine-
learning-fight/

PART I Foundations

2 Probability: Univariate Models
2.1 Introduction
In this chapter, we give a brief introduction to the basics of probability theory. There are many good books that go into more detail, e.g., [GS97; BT08].
2.1.1 What is probability?
Probability theory is nothing but common sense reduced to calculation. — Pierre Laplace, 1812
We are all comfortable saying that the probability that a (fair) coin will land heads is 50%. But what does this mean? There are actually two different interpretations of probability. One is called the frequentist interpretation. In this view, probabilities represent long run frequencies of events that can happen multiple times. For example, the above statement means that, if we flip the coin many times, we expect it to land heads about half the time.1 The other interpretation is called the Bayesi-
an interpretation of probability. In this view, probability is used to quantify our uncertainty or ignorance about something; hence it is fundamentally related to information rather than repeated trials [Jay03; Lin06]. In the Bayesian view, the above statement means we believe the coin is equally likely to land heads or tails on the next toss.
One big advantage of the Bayesian interpretation is that it can be used to model our uncertainty about one-off events that do not have long term frequencies. For example, we might want to compute the probability that the polar ice cap will melt by 2030 CE. This event will happen zero or one times, but cannot happen repeatedly. Nevertheless, we ought to be able to quantify our uncertainty about this event; based on how probable we think this event is, we can decide how to take the optimal action, a-
s discussed in Chapter 5. We shall therefore adopt the Bayesian interpretation in this book. Fortunately, the

basic rules of probability theory are the same, no matter which interpretation is adopted.
2.1.2 Types of uncertainty
The uncertainty in our predictions can arise for two fundamentally different reasons. The first is due to our ignorance of the underlying hidden causes or mechanism generating our data. This is called epistemic uncertainty, since epistemology is the philosophical term used to describe the study of knowledge. However, a simpler term for this is model uncertainty. The second kind of uncertainty arises from intrinsic variability, which cannot be reduced even if we collect more data. This is sometimes-
 called aleatoric uncertainty [Hac75; KD09], derived from the Latin word for “dice”, although a simpler term would be data uncertainty. As a concrete example, consider tossing a fair coin. We might know for sure that the probability of heads is p = 0.5, so there is no epistemic uncertainty, but we still cannot perfectly predict the outcome.
This distinction can be important for applications such as active learning. A typical strategy is to query examples for which ℍ(p(y|x, D)) is large (where ℍ(p) is the entropy, discussed in Section 6.1). However, this could be due to uncertainty about the parameters, i.e., large ℍ(p(θ|D)), or just due to inherent label noise or variability, corresponding to large entropy of p(y|x, θ). See [Osb16] for further discussion.
2.1.3 Probability as an extension of logic
In this section, we review the basic rules of probability, following the presentation of [Jay03], in which we view probability as an extension of Boolean logic.
2.1.3.1 Probability of an event
We define an event, denoted by the binary variable A, as some state of the world that either holds or does not hold. For example, A might be event “it will rain tomorrow”, or “it rained yesterday”, or “the label is y = 1”, or “the parameter θ is between 1.5 and 2.0”, etc. The expression Pr(A) denotes the

probability with which you believe event A is true (or the long run fraction of times that A will occur). We require that 0 ≤ Pr(A) ≤ 1, where Pr(A) = 0 means the event definitely will not happen, and Pr(A) = 1 means the event definitely will happen. We write Pr(A) to denote the probability of event A not happening; this is defined to Pr(A) = 1 − Pr(A).
2.1.3.2 Probability of a conjunction of two events
We denote the joint probability of events A and B both happening as follows:

If A and B are independent events, we have

∈ ∈ For example, suppose X and Y are chosen uniformly at random from the set X
= {1, 2, 3, 4}. Let A be the event that X {1, 2}, and B be the event that Y

{3}. Then we have

.

2.1.3.3 Probability of a union of two events The probability of event A or B happening is given by

If the events are mutually exclusive (so they cannot happen at the same time), we get

∈ ∈ For example, suppose X is chosen uniformly at random from the set X = {1, 2,
3, 4}. Let A be the event that X {1, 2} and B be the event that X {3}.

Then we have

.

2.1.3.4 Conditional probability of one event given another
We define the conditional probability of event B happening given that A has occurred as follows:

This is not defined if Pr(A) = 0, since we cannot condition on an impossible event.
2.1.3.5 Independence of events We say that event A is conditionally independent of event B if
2.1.3.6 Conditional independence of events We say that events A and B are conditionally independent given event C if
⊥ This is written as A B|C. Events are often dependent on each other, but may
be rendered independent if we condition on the relevant intermediate variables, as we discuss in more detail later in this chapter.
2.2 Random variables
Suppose X represents some unknown quantity of interest, such as which way a dice will land when we roll it, or the temperature outside your house at the current time. If the value of X is unknown and/or could change, we call it a random variable or rv. The set of possible values, denoted X, is known as the sample space or state space. An event is a set of outcomes from a given sample space. For example, if X represents the face of a dice that is rolled, so X
∈ = {1, 2, … , 6}, the event of “seeing a 1” is denoted X = 1, the event of “seeing
an odd number” is denoted X {1, 3, 5}, the event of “seeing a number between 1 and 3” is denoted 1 ≤ X ≤ 3, etc.
2.2.1 Discrete random variables If the sample space X is finite or countably infinite, then X is called a discrete random variable. In this case, we denote the probability of the event that X

has value x by Pr(X = x). We define the probability mass function or pmf as a function which computes the probability of events which correspond to setting the rv to each possible value:
∈ The pmf satisfies the properties 0 ≤ p(x) ≤ 1 and ∑x X p(x) = 1.
Figure 2.1: Some discrete distributions on the state space X = {1, 2, 3, 4}. (a) A uniform distribution with p(x = k) = 1/4. (b) A degenerate distribution (delta function) that puts all its mass on x = 1. Generated by code at figures.probml.ai/book1/2.1.
If X has a finite number of values, say K, the pmf can be represented as a list of K numbers, which we can plot as a histogram. For example, Figure 2.1 shows two pmf ’s defined on X = {1, 2, 3, 4}. On the left we have a uniform distribution, p(x) = 1/4, and on the right, we have a degenerate distribution, p(x) = I(x = 1), where I() is the binary indicator function. Thus the distribution in Figure 2.1(b) represents the fact that X is always equal to the value 1. (Thus we see that random variables c-
an also be constant.)
2.2.2 Continuous random variables
∈ If X ℝ is a real-valued quantity, it is called a continuous random variable.
In this case, we can no longer create a finite (or countable) set of distinct possible values it can take on. However, there are a countable number of intervals which we can partition the real line into. If we associate events with X being in each one of these intervals, we can use the methods discussed above

for discrete random variables. By allowing the size of the intervals to shrink to zero, we can represent the probability of X taking on a specific real value, as we show below. 2.2.2.1 Cumulative distribution function (cdf )
∨ Define the events A = (X ≤ a), B = (X ≤ b) and C = (a < X ≤ b), where a < b. We
have that B = A C, and since A and C are mutually exclusive, the sum rules gives
and hence the probability of being in interval C is given by
Figure 2.2: (a) Plot of the cdf for the standard normal, N (0, 1). Generated by code at figures.probml.ai/book1/2.2. (b) Corresponding pdf. The shaded regions each contain α/2 of the probability mass. Therefore the nonshaded region contains 1 − α of the probability mass. The leftmost cutoff point is Φ−1(α/2), where Φ is the cdf of the Gaussian. By symmetry, the rightmost cutoff point is Φ−1(1 − α/2) = −Φ−1(α/2). Generated by code at figures.probml.ai/book1/2.2.
In general, we define the cumulative distribution function or cdf of the rv X as follows:
(Note that we use a capital P to represent the cdf.) Using this, we can compute the probability of being in any interval as follows:

Cdf ’s are monotonically non-decreasing functions. See Figure 2.2a for an example, where we illustrate the cdf of a standard normal distribution, N(x|0, 1); see Section 2.6 for details.
2.2.2.2 Probability density function (pdf ) We define the probability density function or pdf as the derivative of the cdf:
(Note that this derivative does not always exist, in which case the pdf is not defined.) See Figure 2.2b for an example, where we illustrate the pdf of a univariate Gaussian (see Section 2.6 for details).
Given a pdf, we can compute the probability of a continuous variable being in a finite interval as follows:
As the size of the interval gets smaller, we can write
Intuitively, this says the probability of X being in a small interval around x is the density at x times the width of the interval.
2.2.2.3 Quantiles If the cdf P is strictly monotonically increasing, it has an inverse, called the inverse cdf, or percent point function (ppf), or quantile function.
If P is the cdf of X, then P−1(q) is the value xq such that Pr(X ≤ xq) = q; this is called the q’th quantile of P. The value P−1(0.5) is the median of the distribution, with half of the probability mass on the left, and half on the right. The values P−1(0.25) and P−1(0.75) are the lower and upper quartiles.

For example, let Φ be the cdf of the Gaussian distribution N(0, 1), and Φ−1 be the inverse cdf. Then points to the left of Φ−1(α/2) contain α/2 of the probability mass, as illustrated in Figure 2.2b. By symmetry, points to the right of Φ−1(1 − α/2) also contain α/2 of the mass. Hence the central interval (Φ−1(α/2), Φ−1(1 − α/2)) contains 1 − α of the mass. If we set α = 0.05, the central 95% interval is covered by the range

If the distribution is N(µ, σ2), then the 95% interval becomes (µ − 1.96σ, µ + 1.96σ). This is often approximated by writing µ ± 2σ.

2.2.3 Sets of related random variables

In this section, we discuss distributions over sets of related random variables. Suppose, to start, that we have two random variables, X and Y. We can
define the joint distribution of two random variables using p(x, y) = p(X = x, Y = y) for all possible values of X and Y. If both variables have finite cardinality, we can represent the joint distribution as a 2d table, all of whose entries sum to one. For example, consider the following example with two binary variables:

p(X, Y)

Y = 0

Y = 1

X = 0

0.2

0.3

X = 1

0.3

0.2

If two variables are independent, we can represent the joint as the product of the two marginals. If both variables have finite cardinality, we can factorize the 2d joint table into a product of two 1d vectors, as shown in Figure 2.3.
Given a joint distribution, we define the marginal distribution of an rv as follows:

where we are summing over all possible states of Y. This is sometimes called the sum rule or the rule of total probability. We define p(Y = y) similarly. For example, from the above 2d table, we see p(X = 0) = 0.2 + 0.3 = 0.5 and p(Y =

0) = 0.2 + 0.3 = 0.5. (The term “marginal” comes from the accounting practice of writing the sums of rows and columns on the side, or margin, of a table.)
We define the conditional distribution of an rv using
We can rearrange this equation to get
⊥ Figure 2.3: Computing p(x, y) = p(x)p(y), where X Y. Here X and Y are discrete random variables; X has 6
possible states (values) and Y has 5 possible states. A general joint distribution on two such variables would require (6 × 5) − 1 = 29 parameters to define it (we subtract 1 because of the sum-to-one constraint). By assuming (unconditional) independence, we only need (6 − 1) + (5 − 1) = 9 parameters to define p(x, y).
This is called the product rule. By extending the product rule to D variables, we get the chain rule of
probability:
This provides a way to create a high dimensional joint distribution from a set of conditional distributions. We discuss this in more detail in Section 3.6. 2.2.4 Independence and conditional independence
⊥ We say X and Y are unconditionally independent or marginally
independent, denoted X Y, if we can represent the joint as the product of the two marginals (see Figure 2.3), i.e.,

In general, we say a set of variables X1, … , Xn is independent if the joint can be written as a product of marginals, i.e.,
Unfortunately, unconditional independence is rare, because most variables can influence most other variables. However, usually this influence is mediated via other variables rather than being direct. We therefore say X and Y are conditionally independent (CI) given Z iff the conditional joint can be written as a product of conditional marginals:
We can write this assumption as a graph X − Z − Y, which captures the intuition that all the dependencies between X and Y are mediated via Z. By using larger graphs, we can define complex joint distributions; these are known as graphical models, and are discussed in Section 3.6.
2.2.5 Moments of a distribution In this section, we describe various summary statistics that can be derived from a probability distribution (either a pdf or pmf ).
2.2.5.1 Mean of a distribution The most familiar property of a distribution is its mean, or expected value, often denoted by µ. For continuous rv’s, the mean is defined as follows:
If the integral is not finite, the mean is not defined; we will see some examples of this later.
For discrete rv’s, the mean is defined as follows:

However, this is only meaningful if the values of x are ordered in some way (e.g., if they represent integer counts).
Since the mean is a linear operator, we have
This is called the linearity of expectation. For a set of n random variables, one can show that the expectation of their
sum is as follows:
If they are independent, the expectation of their product is given by
2.2.5.2 Variance of a distribution The variance is a measure of the “spread” of a distribution, often denoted by σ2. This is defined as follows:
from which we derive the useful result
The standard deviation is defined as
This is useful since it has the same units as X itself. The variance of a shifted and scaled version of a random variable is given by

If we have a set of n independent random variables, the variance of their sum is given by the sum of their variances:
The variance of their product can also be derived, as follows:
2.2.5.3 Mode of a distribution The mode of a distribution is the value with the highest probability mass or probability density:
If the distribution is multimodal, this may not be unique, as illustrated in Figure 2.4. Furthermore, even if there is a unique mode, this point may not be a good summary of the distribution. 2.2.5.4 Conditional moments When we have two or more dependent random variables, we can compute the moments of one given knowledge of the other. For example, the law of iterated expectations, also called the law of total expectation, tells us that

Figure 2.4: Illustration of a mixture of two 1d Gaussians, p(x) = 0.5N(x|0, 0.5) + 0.5N(x|2, 0.5). Generated by code at figures.probml.ai/book1/2.4.
To prove this, let us suppose, for simplicity, that X and Y are both discrete rv’s. Then we have

To give a more intuitive explanation, consider the following simple example.2 Let X be the lifetime duration of a lightbulb, and let Y be the factory the
lightbulb was produced in. Suppose E[X|Y = 1] = 5000 and E[X|Y = 2] = 4000, indicating that factory 1 produces longer lasting bulbs. Suppose factory 1 supplies 60% of the lightbulbs, so p(Y = 1) = 0.6 and p(Y = 2) = 0.4. Then the expected duration of a random lightbulb is given by

There is a similar formula for the variance. In particular, the law of total variance, also called the conditional variance formula, tells us that

To see this, let us define the conditional moments, µX|Y = E[X|Y], sX|Y =

E[X2|Y], and

 , which are functions of Y (and

therefore are random quantities). Then we have

To get some intuition for these formulas, consider a mixture of K univariate Gaussians. Let Y be the hidden indicator variable that specifies which mixture

component we are using, and let

. In Figure 2.4, we

have π1 = π2 = 0.5, µ1 = 0, µ2 = 2, σ1 = σ2 = 0.5. Thus

So we get the intuitive result that the variance of X is dominated by which centroid it is drawn from (i.e., difference in the means), rather than the local variance around each centroid.

Figure 2.5: Illustration of Anscombe’s quartet. All of these datasets have the same low order summary statistics. Generated by code at figures.probml.ai/book1/2.5.
2.2.6 Limitations of summary statistics *
Although it is common to summarize a probability distribution (or points sampled from a distribution) using simple statistics such as the mean and variance, this can lose a lot of information. A striking example of this is known as Anscombe’s quartet [Ans73], which is illustrated in Figure 2.5. This shows 4 different datasets of (x, y) pairs, all of which have identical low order statistics: E[x] = 9, V[x] = 11, E[y] = 7.50, V[y] = 4.125, and ρ = 0.816. (The quantity ρ is the correlation coefficie-
nt, defined in Section 3.1.2.) However, the joint distributions p(x, y) from which these points were sampled are clearly

very different. Anscombe invented these datasets, each consisting of 10 data points, to counter the impression among statisticians that numerical summaries are superior to data visualization [Ans73].
An even more striking example of this phenomenon is shown in Figure 2.6. This consists of a dataset that looks like a dinosaur3, plus 11 other datasets, all of which have identical low order statistics. This collection of datasets is called the Datasaurus Dozen [MF17]. The exact values of the (x, y) points are available online.4 They were computed using simulated annealing a derivative free optimization method, which we discuss in the sequel to this book, [Mur22]. (The objective function being opt-
imized measures deviation from the target summary statistics of the original dinasour, plus distance from a particular target shape.)
Figure 2.6: Illustration of the Datasaurus Dozen. All of these datasets have the same low order summary statistics. Adapted from Figure 1 of [MF17]. Generated by code at figures.probml.ai/book1/2.6.

Figure 2.7: Illustration of 7 different datasets (left), the corresponding box plots (middle) and violin box plots (right). From Figure 8 of https://www.autodesk.com/research/publications/same-stats-different-graphs. Used with kind permission of Justin Matejka.
The same simulated annealing approach can be applied to 1d datasets, as shown in Figure 2.7. We see that all the datasets are quite different, but they all have the same median and inter-quartile range as shown by the central shaded part of the box plots in the middle. A better visualization is known as a violin plot, shown on the right. This shows (two copies of ) the 1d kernel density estimate (Section 16.3) of the distribution on the vertical axis, in addition to the median and IQR markers. Thi-
s visualization is better able to distinguish differences in the distributions. However, the technique is limited to 1d data.
2.3 Bayes’ rule
Bayes’s theorem is to the theory of probability what Pythagoras’s theorem is to geometry. — Sir Harold Jeffreys, 1973 [Jef73].
In this section, we discuss the basics of Bayesian inference. According to the Merriam-Webster dictionary, the term “inference” means “the act of passing from sample data to generalizations, usually with calculated degrees of certainty”. The term “Bayesian” is used to refer to inference methods that represent “degrees of certainty” using probability theory, and which leverage Bayes’ rule5, to update the degree of certainty given data.

Bayes’ rule itself is very simple: it is just a formula for computing the probability distribution over possible values of an unknown (or hidden) quantity H given some observed data Y = y:

This follows automatically from the identity
which itself follows from the product rule of probability. In Equation (2.51), the term p(H) represents what we know about possible
values of H before we see any data; this is called the prior distribution. (If H has K possible values, then p(H) is a vector of K probabilities, that sum to 1.) The term p(Y|H = h) represents the distribution over the possible outcomes Y we expect to see if H = h; this is called the observation distribution. When we evaluate this at a point corresponding to the actual observations, y, we get the function p(Y = y|H = h), which is called the likelihood. (Note that this is a function of h, since y i-
s fixed, but it is not a probability distribution, since it does not sum to one.) Multiplying the prior distribution p(H = h) by the likelihood function p(Y = y|H = h) for each h gives the unnormalized joint distribution p(H = h, Y = y). We can convert this into a normalized distribution by dividing by p(Y = y), which is known as the marginal likelihood, since it is computed by marginalizing over the unknown H:

Observation

0

1

Truth 0 TNR=Specificity=0.975 FPR=1-TNR=0.025

1 FNR=1-TPR=0.125 TPR=Sensitivity=0.875

Table 2.1: Likelihood function p(Y | H) for a binary observation Y given two possible hidden states H. Each row sums to one. Abbreviations: TNR is true negative rate, TPR is true positive rate, FNR is false negative rate, FPR is false positive rate.

Normalizing the joint distribution by computing p(H = h, Y = y)/p(Y = y) for each h gives the posterior distribution p(H = h|Y = y); this represents our new belief state about the possible values of H.
We can summarize Bayes rule in words as follows:
∝ Here we use the symbol to denote “proportional to”, since we are ignoring
the denominator, which is just a constant, independent of H. Using Bayes rule to update a distribution over unknown values of some quantity of interest, given relevant observed data, is called Bayesian inference, or posterior inference. It can also just be called probabilistic inference.
Below we give some simple examples of Bayesian inference in action. We will see many more interesting examples later in this book.
2.3.1 Example: Testing for COVID-19
Suppose you think you may have contracted COVID-19, which is an infectious disease caused by the SARS-CoV-2 virus. You decide to take a diagnostic test, and you want to use its result to determine if you are infected or not.
Let H = 1 be the event that you are infected, and H = 0 be the event you
∈ are not infected. Let Y = 1 if the test is positive, and Y = 0 if the test is
negative. We want to compute p(H = h|Y = y), for h {0, 1}, where y is the observed test outcome. (We will write the distribution of values, [p(H = 0|Y = y), p(H = 1|Y = y)] as p(H|y), for brevity.) We can think of this as a form of binary classification, where H is the unknown class label, and y is the feature vector.
First we must specify the likelihood. This quantity obviously depends on how reliable the test is. There are two key parameters. The sensitivity (aka true positive rate) is defined as p(Y = 1|H = 1), i.e., the probability of a positive test given that the truth is positive. The false negative rate is defined as one minus the sensitivity. The specificity (aka true negative rate) is defined as p(Y = 0|H = 0), i.e., the probability of a negative test given that the truth is negative. The false positi-
ve rate is defined as one minus the specificity. We summarize all these quantities in Table 2.1. (See Section 5.1.3.1 for more details.) Following

https://nyti.ms/31MTZgV, we set the sensitivity to 87.5% and the specificity to 97.5%.
Next we must specify the prior. The quantity p(H = 1) represents the prevalence of the disease in the area in which you live. We set this to p(H = 1) = 0.1 (i.e., 10%), which was the prevalence in New York City in Spring 2020. (This example was chosen to match the numbers in https://nyti.ms/31MTZgV.)
Now suppose you test positive. We have
So there is a 79.5% chance you are infected. Now suppose you test negative. The probability you are infected is given by
So there is just a 1.4% chance you are infected. Nowadays COVID-19 prevalence is much lower. Suppose we repeat these
calculations using a base rate of 1%; now the posteriors reduce to 26% and 0.13% respectively.
The fact that you only have a 26% chance of being infected with COVID19, even after a positive test, is very counter-intuitive. The reason is that a single positive test is more likely to be a false positive than due to the disease, since the disease is rare. To see this, suppose we have a population of 100,000 people, of whom 1000 are infected. Of those who are infected, 875 = 0.875 × 1000 test positive, and of those who are uninfected, 2475 = 0.025 × 99, 000 test positive. Thus the total number -
of positives is 3350 = 875 + 2475, so the posterior probability of being infected given a positive test is 875/3350 = 0.26.

Of course, the above calculations assume we know the sensitivity and specificity of the test. See [GC20] for how to apply Bayes rule for diagnostic testing when there is uncertainty about these parameters.

2.3.2 Example: The Monty Hall problem

In this section, we consider a more “frivolous” application of Bayes rule. In particular, we apply it to the famous Monty Hall problem.
Imagine a game show with the following rules: There are three doors, labeled 1, 2, 3. A single prize (e.g., a car) has been hidden behind one of them. You get to select one door. Then the gameshow host opens one of the other two doors (not the one you picked), in such a way as to not reveal the prize location. At this point, you will be given a fresh choice of door: you can either stick with your first choice, or you can switch to the other closed door. All the doors will then be opened and you wi-
ll receive whatever is behind your final choice of door.
For example, suppose you choose door 1, and the gameshow host opens door 3, revealing nothing behind the door, as promised. Should you (a) stick with door 1, or (b) switch to door 2, or (c) does it make no difference?

Door 1 Door 2 Door 3 Switch Stay

Car

-

-

Lose

Win

-

Car

-

Win

Lose

-

-

Car

Win

Lose

Table 2.2: 3 possible states for the Monty Hall game, showing that switching doors is two times better (on average) than staying with your original choice. Adapted from Table 6.1 of [PM18].

Intuitively, it seems it should make no difference, since your initial choice of door cannot influence the location of the prize. However, the fact that the host opened door 3 tells us something about the location of the prize, since he made his choice conditioned on the knowledge of the true location and on your choice. As we show below, you are in fact twice as likely to win the prize if you switch to door 2.
To show this, we will use Bayes’ rule. Let Hi denote the hypothesis that the prize is behind door i. We make the following assumptions: the three

hypotheses H1, H2 and H3 are equiprobable a priori, i.e.,
The datum we receive, after choosing door 1, is either Y = 3 and Y = 2 (meaning door 3 or 2 is opened, respectively). We assume that these two possible outcomes have the following probabilities. If the prize is behind door 1, then the host selects at random between Y = 2 and Y = 3. Otherwise the choice of the host is forced and the probabilities are 0 and 1.
Now, using Bayes’ theorem, we evaluate the posterior probabilities of the hypotheses:

The denominator P(Y = 3) is

. So

So the contestant should switch to door 2 in order to have the biggest chance of getting the prize. See Table 2.2 for a worked example.
Many people find this outcome surprising. One way to make it more intuitive is to perform a thought experiment in which the game is played with a million doors. The rules are now that the contestant chooses one door, then the game show host opens 999,998 doors in such a way as not to reveal the prize, leaving the contestant’s selected door and one other door closed. The contestant may now stick or switch. Imagine the contestant confronted by a million doors, of which doors 1 and 234,598 have not b-
een opened, door 1 having been the contestant’s initial guess. Where do you think the prize is?

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:50.159Z
- **Text Length:** 124899 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
