# PDF Document: Polson and Sokolov - 2017 - Deep Learning A Bayesian Perspective.pdf

**File Path:** Polson and Sokolov - 2017 - Deep Learning A Bayesian Perspective.pdf

**Processed Date:** 2026-02-10T18:17:07.491Z

**File Size:** 1943.20 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2732

**Title:** Deep Learning: A Bayesian Perspective

**Collection:** Large Files

---

## Extracted Text Content

Deep Learning: A Bayesian Perspective
Nicholas G. Polson
Booth School of Business University of Chicago∗ Vadim O. Sokolov
Systems Engineering and Operations Research George Mason University
First Draft: May 2017 This Draft: November 2017
Abstract
Deep learning is a form of machine learning for nonlinear high dimensional pattern matching and prediction. By taking a Bayesian probabilistic perspective, we provide a number of insights into more efficient algorithms for optimisation and hyper-parameter tuning. Traditional high-dimensional data reduction techniques, such as principal component analysis (PCA), partial least squares (PLS), reduced rank regression (RRR), projection pursuit regression (PPR) are all shown to be shallow learners. Thei-
r deep learning counterparts exploit multiple deep layers of data reduction which provide predictive performance gains. Stochastic gradient descent (SGD) training optimisation and Dropout (DO) regularization provide estimation and variable selection. Bayesian regularization is central to finding weights and connections in networks to optimize the predictive bias-variance trade-off. To illustrate our methodology, we provide an analysis of international bookings on Airbnb. Finally, we conclude with -
directions for future research.
1 Introduction
Deep learning (DL) is a form of machine learning that uses hierarchical abstract layers of latent variables to perform pattern matching and prediction. Deep learners are probabilistic predictors where the conditional mean is a stacked generalized linear model (sGLM). The current interest in DL stems from its remarkable success in a wide range of applications, including Artificial Intelligence (AI) [DeepMind, 2016, Kubota, 2017, Esteva et al., 2017], image processing [Simonyan and Zisserman, 2014],-
 learning in games [DeepMind, 2017], neuroscience [Poggio, 2016], energy conservation [DeepMind, 2016], and skin cancer diagnostics [Kubota, 2017, Esteva et al., 2017].
∗Polson is Professor of Econometrics and Statistics at the Chicago Booth School of Business. email: ngp@chicagobooth.edu. Sokolov is an assistant professor at George Mason University, email: vsokolov@gmu.edu
1
arXiv:1706.00473v4 [stat.ML] 14 Nov 2017

Schmidhuber [2015] provides a comprehensive historical survey of deep learning and their applications. Deep learning is designed for massive data sets with many high dimensional input variables. For example, Google’s translation algorithm [Sutskever et al., 2014] uses ∼ 1-2 billion parameters and very large dictionaries. Computational speed is essential, and automated differentiation and matrix manipulations are available on TensorFlow Abadi et al. [2015]. Baidu successfully deployed speech recog-
nition systems [Amodei et al., 2016] with an extremely large deep learning model with over 100 million parameters, 11 layers and almost 12 thousand hours of speech for training. DL is an algorithmic approach rather than probabilistic in its nature, see Breiman [2001] for the merits of both approaches. Our approach is Bayesian and probabilistic. We view the theoretical roots of DL in Kolmogorov’s representation of a multivariate response surface as a superposition of univariate activation functions-
 applied to an affine transformation of the input variable [Kolmogorov, 1963]. An affine transformation of a vector is a weighted sum of its elements (linear transformation) plus an offset constant (bias). Our Bayesian perspective on DL leads to new avenues of research including faster stochastic algorithms, hyper-parameter tuning, construction of good predictors, and model interpretation. On the theoretical side, we show how DL exploits a Kolmogorov’s “universal basis”. By construction, deep lear-
ning models are very flexible and gradient information can be efficiently calculated for a variety of architectures. On the empirical side, we show that the advances in DL are due to:
(i) New activation (a.k.a. link) functions, such as rectified linear unit (ReLU(x) = max(0, x)), instead of sigmoid function
(ii) Depth of the architecture and dropout as a variable selection technique
(iii) Computationally efficient routines to train and evaluate the models as well as accelerated computing via graphics processing unit (GPU) and tensor processing unit (TPU)
(iv) Deep learning has very well developed computational software where pure MCMC is too slow.
To illustrate DL, we provide an analysis of a dataset from Airbnb on first time international bookings. Different statistical methodologies can then be compared, see Kaggle [2015] and Ripley [1994] who provides a comparison of traditional statistical methods with neural network based approaches for classification. The rest of the paper is outlined as follows. Section 1.1 provides a review of deep learning. Section 2 provides a Bayesian probabilistic interpretation of many traditional statistical t-
echniques (PCA, PCR, SIR, LDA) which are shown to be “shallow learners” with two layers. Much of the recent success in DL applications has been achieved by including deeper layers and these gains pass over to traditional statistical models. Section 3 provides heuristics on why Bayes procedures provide good predictors in high dimensional data reduction problems. Section 4 describes how to train, validate and test deep learning models. We provide computational details associated with stochastic grad-
ient descent (SGD). Section 5 provides an application to bookings data from the Airbnb website. Finally, Section 6 concludes with directions for future research.
2

1.1 Deep Learning
Machine learning finds a predictor of an output Y given a high dimensional input X . A learning machine is an input-output mapping, Y = F (X ), where the input space is high-dimensional,
Y = F (X ) where X = (X1, . . . , Xp).
The output Y can be continuous, discrete or mixed. For a classification problem, we need to
learn F : X → Y , where Y ∈ {1, . . . , K} indexes categories. A predictor is denoted by Yˆ (X ). To construct a multivariate function, F (X ), we start with building blocks of hidden layers. Let f1, . . . , fl be univariate activation functions. A semi-affine activation rule is given by
f W,b
l = fl
Nj
∑
j =1
Wi j zj + bl
!
Here W and z are the weight matrix and inputs of the l th layer. Our deep predictor, given the number of layers L, then becomes the composite map
Yˆ (X ) := Ä
f W1,b1
1 ◦ . . . ◦ f WL,bL
L
ä (X ) .
Put simply, a high dimensional mapping, F , is modeled via the superposition of univariate semiaffine functions. Similar to a classic basis decomposition, the deep approach uses univariate activation functions to decompose a high dimensional X . To select the number of hidden units (a.k.a neurons), Nl , at each layer we will use a stochastic search technique known as dropout. The offset vector is essential. For example, using f (x) = sin(x) without bias term b would not allow to recover an even fu-
nction like cos(x). An offset element (e.g. sin(x + π/2) = cos(x)) immediately corrects this problem. Let Z(l) denote the l -th layer, and so X = Z(0). The final output is the response Y , which can be numeric or categorical. A deep prediction rule is then
Z (1) = f (1) W (0)X + b (0) ,
Z (2) = f (2) W (1)Z (1) + b (1) ,
...
Z (L) = f (L) W (L−1)Z (L−1) + b (L−1) ,
Yˆ (X ) = W (L)Z (L) + b (L) .
Here, W (l) are weight matrices, and b (l) are threshold or activation levels. Designing a good predictor depends crucially on the choice of univariate activation functions f (l). Kolmogorov’s representation requires only two layers in principle. Vitushkin and Khenkin [1967] prove the remarkable fact that a discontinuous link is required at the second layer even though the multivariate function is continuous. Neural networks (NN) simply approximate a univariate function as mixtures of sigmoids, ty-
pically with an exponential number of neurons, which does not generalize well. They can simply be viewed as projection pursuit regression F (X ) = ∑N
i=1 gi (W X +b )) with the only difference being that in a neural network the nonlinear link functions, are parameter dependent and learned from training data.
3

Figure 1 illustrates a number of commonly used structures; for example, feed-forward architectures, auto-encoders, convolutional, and neural Turing machines. Once you have learned the dimensionality of the weight matrices which are non-zero, there’s an implied network structure.
Feed forward Auto-encoder Convolution
Recurrent Long / short term memory Neural Turing machines
Figure 1: Most commonly used deep learning architectures. Each circle is a neuron which calculates a weighted sum of an input vector plus bias and applies a non-linear function to produce an output. Yellow and red colored neurons are input-output cells correspondingly. Pink colored neurons apply wights inputs using a kernel matrix. Green neurons are hidden ones. Blue neurons are recurrent ones and they append its values from previous pass to the input vector. Blue neuron with circle inside a neuro-
n corresponds to a memory cell. Source: http://www.asimovinstitute.org/neural-network-zoo.
Recently deep architectures (indicating non-zero weights) include convolutional neural networks (CNN), recurrent NN (RNN), long short-term memory (LSTM), and neural Turing machines (NTM). Pascanu et al. [2013] and Montúfar and Morton [2015] provide results on the advantage of representing some functions compactly with deep layers. Poggio [2016] extends theoretical results on when deep learning can be exponentially better than shallow learning. Bryant [2008] implements Sprecher [1972] algorithm to -
estimate the non-smooth inner link function. In practice, deep layers allow for smooth activation functions to provide “learned” hyper-planes which find the underlying complex interactions and regions without having to see an exponentially large number of training samples.
2 Deep Probabilistic Learning
Probabilistically, the output Y can be viewed as a random variable being generated by a proba
bility model p(Y |Y W,b (X )). Given Wˆ , bˆ, the negative log-likelihood defines L as
L (Y, Yˆ ) = − log p(Y |Y Wˆ ,bˆ (X )).
4

The L2-norm, L (Yi , Yˆ (Xi )) = ‖Yi − Yˆ (Xi )‖2
2 is traditional least squares, and negative cross
entropy loss is L (Yi , Yˆ (Xi )) = − ∑n
i=1 Yi log Yˆ (Xi ) for multi-class logistic classification. The
procedure to obtain estimates Wˆ , bˆ of the deep learning model parameters is described in Section 4. To control the predictive bias-variance trade-off we add a regularization term and optimize
Lλ(Y, Yˆ ) = − log p(Y |Y Wˆ ,bˆ (X )) − log p(φ(W , b ) | λ).
Probabilistically this is a negative log-prior distribution over parameters, namely
− log p(φ(W , b ) | λ) = λφ(W , b ),
p(φ(W , b ) | λ) ∝ exp(−λφ(W , b )).
Deep predictors are regularized maximum a posteriori (MAP) estimators, where
p(W , b |D) ∝ p(Y |Y W,b (X )) p(W , b )
∝ exp − log p(Y |Y W,b (X )) − log p(W , b ) .
Training requires the solution of a highly nonlinear optimization
Yˆ := Y Wˆ ,bˆ (X ) where (Wˆ , bˆ) := arg maxW,b log p(W , b |D),
and the log-posterior is optimised given the training data, D = {Y (i), X (i)}T
i=1 with
− log p(W , b |D) =
T
∑
i =1
L (Y (i), Y W,b (X (i))) + λφ(W , b ).
Deep learning has the key property that ∇W,b log p(Y |Y W,b (X )) is computationally inexpensive to evaluate using tensor methods for very complicated architectures and fast implementation on large datasets. TensorFlow and TPUs provide a state-of-the-art framework for a plethora of architectures. From a statistical perspective, one caveat is that the posterior is highly multi-modal and providing good hyper-parameter tuning can be expensive. This is clearly a fruitful area of research for state-of--
the-art stochastic Bayesian MCMC algorithms to provide more efficient algorithms. For shallow architectures, the alternating direction method of multipliers (ADMM) is an efficient solution to the optimization problem.
2.1 Dropout for Model and Variable Selection
Dropout is a model selection technique designed to avoid over-fitting in the training process. This is achieved by removing input dimensions in X randomly with a given probability p. It is instructive to see how this affects the underlying loss function and optimization problem. For example,
suppose that we wish to minimise MSE, L (Y, Yˆ ) = ‖Y − Yˆ ‖2
2, then, when marginalizing over the randomness, we have a new objective
arg minW ED∼Ber(p)‖Y − W (D ? X )‖2
2,
5

Where ? denotes the element-wise product. It is equivalent to, with Γ = (diag(X >X )) 1
2
arg minW ‖Y − pW X ‖2
2 + p(1 − p)‖Γ W ‖2
2.
Dropout then is simply Bayes ridge regression with a g -prior as an objective function. This reduces the likelihood of over-reliance on small sets of input data in training, see Hinton and Salakhutdinov [2006] and Srivastava et al. [2014]. Dropout can also be viewed as the optimization version of the traditional spike-and-slab prior, which has proven so popular in Bayesian model averaging. For example, in a simple model with one hidden layer, we replace the network
Y (l)
i = f (Z (l )
i ),
Z (l )
i = W (l)
i X (l) + b (l)
i,
with the dropout architecture
D(l)
i ∼ Ber( p),
Y ̃ (l )
i = D(l) ? X (l),
Y (l)
i = f (Z (l )
i ),
Z (l )
i = W (l)
i X (l) + b (l)
i.
In effect, this replaces the input X by D?X , where D is a matrix of independent Ber( p) distributed random variables. Dropout also regularizes the choice of the number of hidden units in a layer. This can be achieved if we drop units of the hidden rather than the input layer and then establish which probability p gives the best results. It is worth recalling though, as we have stated before, one of the dimension reduction properties of a network structure is that once a variable from a layer is d-
ropped, all terms above it in the network also disappear.
2.2 Shallow Learners
Almost all shallow data reduction techniques can be viewed as consisting of a low dimensional auxiliary variable Z and a prediction rule specified by a composition of functions
Yˆ = f W1,b1
1 ( f2(W2X + b2) = f W1,b1
1 (Z), where Z := f2(W2X + b2).
The problem of high dimensional data reduction is to find the Z-variable and to estimate the layer functions ( f1, f2) correctly. In the layers, we want to uncover the low-dimensional Z-structure, in a way that does not disregard information about predicting the output Y . Principal component analysis (PCA), partial least squares (PLS), reduced rank regression (RRR), linear discriminant analysis (LDA), project pursuit regression (PPR), and logistic regression are all shallow learners. Mallows [197-
3] provides an interesting perspective on how Bayesian shrinkage provides good predictors in regression settings. Frank and Friedman [1993] provide excellent discussions of PLS and why Bayesian shrinkage methods provide good predictors. Wold [1956], Diaconis and Shahshahani [1984], Ripley [1994], Cook [2007], Hastie et al. [2016] provide further discussion of dimension reduction techniques. Other connections exists for Fisher’s
6

Linear Discriminant classification rule, which is simply fitting H (wX + b ), where H is a Heaviside function. Polson et al. [2015a] provide a Bayesian version of support vector machines (SVMs) and a comparison with logistic regression for classification. PCA reduces X to f2(X ) using a singular value decomposition of the form
Z = f2(X ) = W >X + b , (1)
where the columns of the weight matrix W form an orthogonal basis for directions of greatest variance (which is in effect an eigenvector problem). Similarly PPR reduces X to f2(X ) by setting
Z = f2(X ) =
N ∑1
i =1
fi (Wi1X1 + . . . + Wi p Xp ) .
Example: Interaction terms, x1x2 and (x1x2)2, and max functions, max(x1, x2) can be expressed as nonlinear functions of semi-affine combinations. Specifically,
x1 x2 = 1
4 (x1 + x2)2 − 1
4 (x1 − x2)2
max(x1, x2) = 1
2 |x1 + x2| + 1
2 |x1 − x2|
(x1 x2)2 = 1
4 (x1 + x2)4 + 7
4 · 33 (x1 − x2)4 − 1
2 · 33 (x1 + 2x2)4 − 23
33 (x1 + 1
2 x2)4
Diaconis and Shahshahani [1981] provide further discussion for Projection Pursuit Regression, where the network uses a layered model of the form ∑N
i=1 f (w>
i X ). Diaconis et al. [1998] pro
vide an ergodic view of composite iterated functions, a precursor to the use of multiple layers of single operators that can model complex multivariate systems. Sjöberg et al. [1995] provide the approximation theory for composite functions.
Example: Deep ReLU architectures can be viewed as Max-Sum networks via the following simple identity. Define x+ = max(x, 0). Let fx(b ) = (x + b )+ where b is an offset. Then (x +
y+)+ = max(0, x, x + y). This is generalized in Feller [1971] (p.272) who shows by induction that
( fx1 ◦ . . . ◦ fxk )(0) = (x1 + (x2 + . . . + (xk−1 + x+
k )+)+ = max
1≤j ≤k(x1 + . . . + xj )+
A composition or convolution of max-layers is then a one layer max-sum network.
2.3 Stacked Auto-Encoders
Auto-encoding is an important data reduction technique. An auto-encoder is a deep learning architecture designed to replicate X itself, namely X = Y , via a bottleneck structure. This means we select a model F W,b (X ) which aims to concentrate the information required to recreate X . See Heaton et al. [2017] for an application to smart indexing in finance. Suppose that we have N input vectors X = {x1, . . . , xN } ∈ RM×N and N output (or target) vectors {x1, . . . , xN } ∈ RM×N .
7

Setting biases to zero, for the purpose of illustration, and using only one hidden layer (L = 2) with K < N factors, gives for j = 1, . . . , N
Yj(x) = F m
W (X )j =
K
∑
k =1
W jk
2f
Ç N ∑
i =1
W ki
1 xi
å
=
K
∑
k =1
W jk
2 Zj for Zj = f
Ç N ∑
i =1
W ki
1 xi
å
.
In an auto-encoder we fit the model X = FW (X ), and train the weights W = (W1,W2) with regularization penalty of the form
L (W ) = arg minW ‖X − FW (X )‖2 + λφ(W )
with φ(W ) = ∑
i, j ,k
|W j k
1 |2 + |W ki
2 |2.
Writing our DL objective as an augmented Lagrangian (as in ADMM) with a hidden factor Z, leads to a two step algorithm, an encoding step (a penalty for Z), and a decoding step for reconstructing the output signal via
arg minW,Z ‖X − W2Z‖2 + λφ(Z) + ‖Z − f (W1, X )‖2,
where the regularization on W1 induces a penalty on Z. The last term is the encoder, the first two the decoder. If W2 is estimated from the structure of the training data matrix, then we have a traditional factor model, and the W1 matrix provides the factor loadings. PCA, PLS, SIR fall into this cate
gory, see Cook (2007) for further discussion. If W2 is trained based on the pair Xˆ = {Y, X } than we have a sliced inverse regression model. If W1 and W2 are simultaneously estimated based on the training data X , then we have a two layer deep learning model. Auto-encoding demonstrates that deep learning does not directly model variance-covariance matrix explicitly as the architecture is already in predictive form. Given a hierarchical non-linear combination of deep learners, an implicit variance-
-covariance matrix exists, but that is not the focus of the algorithm. Another interesting area for future research are long short-term memory models (LSTMs). For example, a dynamic one layer auto-encoder for a financial time series (Yt ) is a coupled system
Yt = Wx Xt + Wy Yt−1 and
Å Xt
Yt −1
ã
= W Yt .
The state equation encodes and the matrix W decodes the Yt vector into its history Yt−1 and the current state Xt .
2.4 Bayesian Inference for Deep Learning
Bayesian neural networks have a long history. Early results on stochastic recurrent neural networks (a.k.a Boltzmann machines) were published in Ackley et al. [1985]. Accounting for uncertainty by integrating over parameters is discussed in Denker et al. [1987]. MacKay [1992]
8

proposed a general Bayesian framework for tuning network architecture and training parameters for feed forward architectures. Neal [1993] proposed using Hamiltonian Monte Carlo (HMC) to sample from posterior distribution over the set of model parameters and then averaging outputs of multiple models. Markov Chain Monte Carlo algorithms was proposed by Müller and Insua [1998] to jointly identify parameters of a feed forward neural network as well as the architecture. A connection of neural networks-
 with Bayesian nonparametric techniques was demonstrated in Lee [2004]. A Bayesian extension of feed forward network architectures has been considered by several authors [Neal, 1990, Saul et al., 1996, Frey and Hinton, 1999, Lawrence, 2005, Adams et al., 2010, Mnih and Gregor, 2014, Kingma and Welling, 2013, Rezende et al., 2014]. Recent results show how dropout regularization can be used to represent uncertainty in deep learning models. In particular, Gal [2015] shows that dropout technique provi-
des uncertainty estimates for the predicted values. The predictions generated by the deep learning models with dropout are nothing but samples from predictive posterior distribution. Graphical models with deep learning encode a joint distribution via a product of conditional distributions and allow for computing (inference) many different probability distributions associated with the same set of variables. Inference requires the calculation of a posterior distribution over the variables of interes-
t, given the relations between the variables encoded in a graph and the prior distributions. This approach is powerful when learning from samples with missing values or predicting with some missing inputs. A classical example of using neural networks to model a vector of binary variables is the Boltzmann machine (BM), with two layers. The first layer encodes latent variables and the second layer encodes the observed variables. Both conditional distributions p(data | latent variables) and p(latent -
variables | data) are specified using logistic function parametrized by weights and offset vectors. The size of the joint distribution table grows exponentially with the number of variables and Hinton and Sejnowski [1983] proposed using Gibbs sampler to calculate update to model weights on each iteration. The multimodal nature of the posterior distribution leads to prohibitive computational times required to learn models of a practical size. Tieleman [2008] proposed a variational approach that rep-
laces the posterior p(latent variables | data) and approximates it with another easy to calculate distribution was considered in Salakhutdinov [2008]. Several extensions to the BMs have been proposed. An exponential family extensions have been considered by Smolensky [1986], Salakhutdinov [2008], Salakhutdinov and Hinton [2009], Welling et al. [2005] There have also been multiple approaches to building inference algorithms for deep learning models MacKay [1992], Hinton and Van Camp [1993], Neal [1-
992], Barber and Bishop [1998]. Performing Bayesian inference on a neural network calculates the posterior distribution over the weights given the observations. In general, such a posterior cannot be calculated analytically, or even efficiently sampled from. However, several recently proposed approaches address the computational problem for some specific deep learning models [Graves, 2011, Kingma and Welling, 2013, Rezende et al., 2014, Blundell et al., 2015, Hernández-Lobato and Adams, 2015, Gal -
and Ghahramani, 2016]. The recent successful approaches to develop efficient Bayesian inference algorithms for deep learning networks are based on the reparameterization techniques for calculating Monte Carlo gradients while performing variational inference. Given the data D = (X , Y ), the variation inference relies on approximating the posterior p(θ | D) with a variation distribution q(θ | D, φ),
9

where θ = (W , b ). Then q is found by minimizing the based on the Kullback-Leibler divergence between the approximate distribution and the posterior, namely
KL(q || p) =
∫
q(θ | D, φ) log q(θ | D, φ)
p(θ | D) d θ.
Since p(θ | D) is not necessarily tractable, we replace minimization of KL(q || p) with maximization of evidence lower bound (ELBO)
ELBO(φ) =
∫
q(θ | D, φ) log p(Y | X , θ) p(θ)
q(θ | D, φ) d θ
The l o g of the total probability (evidence) is then
log p(D) = ELBO(φ) + KL(q || p)
The sum does not depend on φ, thus minimizing KL(q || p) is the same that maximizing ELBO(q). Also, since KL(q || p) ≥ 0, which follows from Jensen’s inequality, we have log p(D) ≥ ELBO(φ). Thus, the evidence lower bound name. The resulting maximization problem ELBO(φ) → maxφ is solved using stochastic gradient descent. To calculate the gradient, it is convenient to write the ELBO as
ELBO(φ) =
∫
q(θ | D, φ) log p(Y | X , θ)d θ −
∫
q(θ | D, φ) log q(θ | D, φ)
p(θ) d θ
The gradient of the first term ∇φ
∫ q(θ | D, φ) log p(Y | X , θ)d θ = ∇φEq log p(Y | X , θ) is not an expectation and thus cannot be calculated using Monte Carlo methods. The idea is to represent the gradient ∇φEq log p(Y | X , θ) as an expectation of some random variable, so that Monte Carlo techniques can be used to calculate it. There are two standard methods to do it. First, the log-derivative trick, uses the following identity ∇x f (x) = f (x)∇x log f (x) to obtain ∇φEq log p(Y | θ). Thus, if we select q(θ | φ) so that it is -
easy to compute its derivative and generate samples from it, the gradient can be efficiently calculated using Monte Carlo technique. Second, we can use reparametrization trick by representing θ as a value of a deterministic function, θ = g (ε, x, φ), where ε ∼ r (ε) does not depend on φ. The derivative is given by
∇φEq log p(Y | X , θ) =
∫
r (ε)∇φ log p(Y | X , g (ε, x, φ))d ε
= Eε[∇g log p(Y | X , g (ε, x, φ))∇φ g (ε, x, φ)].
The reparametrization is trivial when q(θ | D, φ) = N (θ | μ(D, φ), Σ(D, φ)), and θ = μ(D, φ)+ εΣ(D, φ), ε ∼ N (0, I ). Kingma and Welling [2013] propose using Σ(D, φ) = I and representing μ(D, φ) and ε as outputs of a neural network (multi-layer perceptron), the resulting approach was called variational auto-encoder. A generalized reparametrization has been proposed by Ruiz et al. [2016] and combines both log-derivative and reparametrization techniques by assuming that ε can depend on φ.
10

3 Finding Good Bayes Predictors
The Bayesian paradigm provides novel insights into how to construct estimators with good pre
dictive performance. The goal is simply to find a good predictive MSE, namely EY,Yˆ (‖Yˆ − Y ‖2),
where Yˆ denotes a prediction value. Stein shrinkage (a.k.a regularization with an L2 norm) in
known to provide good mean squared error properties in estimation, namely E(||θˆ−θ)||2). These
gains translate into predictive performance (in an iid setting) for E(||Yˆ − Y ||2). The main issue is how to tune the amount of regularisation (a.k.a prior hyper-parameters). Stein’s unbiased estimator of risk provides a simple empirical rule to address this problem as does cross-validation. From a Bayes perspective, the marginal likelihood (and full marginal posterior) provides a natural method for hyper-parameter tuning. The issue is computational tractability and scalability. In the context of-
 DL, the posterior for (W , b ) is extremely high dimensional and
multimodal and posterior MAP provides good predictors Yˆ (X ). Bayes conditional averaging performs well in high dimensional regression and classification problems. High dimensionality, however, brings with it the curse of dimensionality and it is instructive to understand why certain kernel can perform badly. Adaptive Kernel predictors (a.k.a. smart conditional averager) are of the form
Yˆ (X ) =
R
∑
r =1
Kr (Xi , X )Yˆr (X ).
Here Yˆr (X ) is a deep predictor with its own trained parameters. For tree models, the kernel Kr (Xi , X ) is a cylindrical region Rr (open box set). Figure 2 illustrates the implied kernels for trees (cylindrical sets) and random forests. Not too many points will be neighbors in a high dimensional input space.
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0
0.2
0.4
0.6
0.8
0.2 0.4 0.6 0.8
0.0
0.2
0.4
0.6
0.8
1.0
(a) Tree Kernel (b) Random Forest Kernel
Figure 2: Kernel Weight. The intensity of the color is proportional to the size of the weight. Left panel (a) shows weights for tree-based model, with non-zero values only inside a cylindrical region (a box), and (b) shows weights for a random forest model, with non-zero wights everywhere in the domain and sizes decaying away from the location of the new observation.
11

Constructing the regions to preform conditional averaging is fundamental to reduce the curse of dimensionality. Imagine a large dataset, e.g. 100k images and think about how a new image’s input coordinates, X , are “neighbors" to data points in the training set. Our predictor is a smart conditional average of the observed outputs, Y , from our neighbors. When p is large, spheres (L2 balls or Gaussian kernels) are terrible, degenerate cases occur when either no points or all of the points are “nei-
ghbors" of the new input variable will appear. Tree-based models address this issue by limiting the number of “neighbors. Figure 3 further illustrates the challenge with the 2D image of 1000 uniform samples from a 50dimensional ball B50. The image is calculated as wT Y , where w = (1, 1, 0, . . . , 0) and Y ∼ U (B50). Samples are centered around the equators and none of the samples fall anywhere close to the boundary of the set.
-1.0 -0.5 0.5 1.0
-1.0
-0.5
0.5
1.0
Figure 3: The 2D image of the Monte Carlo samples from a the 50-dimensional ball.
As dimensionality of the space grows, the variance of the marginal distribution goes to zero. Figure 4 shows the histogram of 1D image of uniform sample from balls of different dimensionality, that is eT
1 Y , where e1 = (1, 0, . . . , 0).
-0.4 -0.2 0.0 0.2 0.4
2
4
6
8
-0.4 -0.2 0.0 0.2 0.4
2
4
6
8
-0.4 -0.2 0.0 0.2 0.4
2
4
6
8
-0.4 -0.2 0.0 0.2 0.4
2
4
6
8
(a) p = 100 (b) p = 200 (c) p = 300 (d) p = 400
Figure 4: Histogram of marginal distributions of Y ∼ U (Bp) samples for different dimensions p.
Similar central limit results were known to Maxwell who has shown that the random variable wT Y is close to standard normal, when Y ∼ U (Bp), p is large, and w is a unit vector (lies on the boundary of the ball), see Diaconis and Freedman [1987]. More general results in this direction were obtained in Klartag [2007] and Milman and Schechtman [2009] who presents many analytical and geometrical results for finite dimensional normed spaces, as the dimension grows to infinity.
12

Deep learning can improve on traditional methods by performing a sequence of GLM-like transformations. Effectively DL learns a distributed partition of the input space. For example, suppose that we have K partitions and a DL predictor that takes the form of a weighted average or soft-max of the weighted average for classification. Given a new high dimensional input Xnew, many deep learners are then an average of learners obtained by our hyper-plane decomposition. Our predictor takes the form
Yˆ (X ) = ∑
k ∈K
wk(X )Yˆk(X ),
where wk are the weights learned in region K, and k is an indicator of the region with appropriate weighting given the training data. The partitioning of the input space by a deep learner is similar to the one performed by decision trees and partition-based models such as CART, MARS, RandomForests, BART, and Gaussian Processes. Each neuron in a deep learning model corresponds to a manifold that divides the input space. In the case of ReLU activation function f (x) = max(x, 0) the manifold is simpl-
y a hyperplane and the neuron gets activated when the new observation is on the “right” side of this hyperplane, the activation amount is equal to how far from the boundary the given point is. For example in two dimensions, three neurons with ReLU activation functions will divide the space into seven regions, as shown on Figure 5.
w3 x + b3
w1 x + b1
w2 x + b2
1
23
4
5
5
7
-3 -2 -1 1 2 x1
-2
-1
1
2
x2
Figure 5: Hyperplanes defined by three neurons with ReLU activation functions.
The key difference between tree-based architecture and neural network based models is the way hyper-planes are combined. Figure 6 shows the comparison of space decomposition by hyperplanes, as performed by a tree-based and neural network architectures. We compare a neural network with two layers (bottom row) with tree mode trained with CART algorithm (top row). The network architecture is given by
Y =softmax(w0Z2 + b 0)
Z2 = tanh(w2Z1 + b 2)
Z1 = tanh(w1X + b 1) .
13

The weight matrices for simple data W 1, W 2 ∈ R2×2, for circle data W 1 ∈ R2×2 and W 2 ∈ R3×2, for spiral data we have W 1 ∈ R2×2 and W 2 ∈ R4×2. In our notations, we assume that the activation function is applied point-vise at each layer. An advantage of deep architectures is that the number of hyper-planes grow exponentially with the number of layers. The key property of an activation function (link) is f (0) = 0 and it has zero value in certain regions. For example, hinge or rectified learner-
 max(x, 0) box car (differences in Heaviside) functions are very common. As compared to a logistic regression, rather than using softmax(1/(1 + e−x)) in deep learning tanh(x) is typically used for training, as tanh(0) = 0.
0
0
1
0
0 0.0000
0.0000
1.0000
1.0000
0.0312
1.0000
0.0000
0.8000
0.6000
0.0400
1.0000
(a) simple data (b) circle data (c) spiral data
Figure 6: Space partition by tree architectures (top row) and deep learning architectures (bottom row) for three different data sets.
Amit and Geman [1997] provide an interesting discussion of efficiency. Formally, a Bayesian probabilistic approach (if computationally feasible) optimally weights predictors via model aver
aging with Yˆk(x) = E(Y | Xk)
Yˆ (X ) =
R
∑
r =1
wkYˆk(X ).
Such rules can achieve optimal out-of-sample performance. Amit et al. [2000] discusses the striking success of multiple randomized classifiers. Using a simple set of binary local features, one classification tree can achieve 5% error on the NIST data base with 100,000 training data points. On the other hand, 100 trees, trained under one hour, when aggregated, yield an error rate under 7%. This stems from the fact that a sample from a very rich and diverse set of classifiers produces, on average, w-
eakly dependent classifiers conditional on class.
14

To further exploit this, consider the Bayesian model of weak dependence, namely exchange
ability. Suppose that we have K exchangeable, E(Yˆi ) = E(Yˆπ(i)), and stacked predictors
Yˆ = (Yˆ1, . . . , YˆK ).
Suppose that we wish to find weights, w, to attain arg minW E l (Y, wT Yˆ ) where l convex in the second argument;
E l (Y, wT Yˆ ) = 1
K!
∑
π
E l (Y, wT Yˆ ) ≥ E l Y, 1
K!
∑
π
wT
π Yˆ ) = E l
Ä
Y, (1/K)ιT Yˆ
ä
where ι = (1, . . . , 1). Hence, the randomised multiple predictor with weights w = (1/K)ι provides the optimal Bayes predictive performance. We now turn to algorithmic issues.
4 Algorithmic Issues
In this section we discuss two types of algorithms for training learning models. First, stochastic gradient descent, which is a very general algorithm that efficiently works for large scale datasets and has been used for many deep learning applications. Second, we discuss specialized statistical learning algorithms, which are tailored for certain types of traditional statistical models.
4.1 Stochastic Gradient Descent
Stochastic gradient descent (SGD) is a default gold standard for minimizing the a function f (W , b ) (maximizing the likelihood) to find the deep learning weights and offsets. SGD simply minimizes the function by taking a negative step along an estimate g k of the gradient ∇ f (W k, b k) at iteration k. The gradients are available via the chain rule applied to the superposition of semi-affine functions. The approximate gradient is estimated by calculating
gk = 1
|Ek |
∑
i ∈Ek
∇Lw,b (Yi , Yˆ k (Xi )),
where Ek ⊂ {1, . . . , T } and |Ek| is the number of elements in Ek. When |Ek| > 1 the algorithm is called batch SGD and simply SGD otherwise. Typically, the subset E is chosen by going cyclically and picking consecutive elements of {1, . . . , T }, Ek+1 = [Ek mod T ]+1. The direction g k is calculated using a chain rule (a.k.a. back-propagation) providing an unbiased estimator of ∇ f (W k, b k). Specifically, this leads to
E( g k) = 1
T
T
∑
i =1
∇Lw,b (Yi , Yˆ k (Xi )) = ∇ f (W k , b k ).
At each iteration, SGD updates the solution
(W , b )k+1 = (W , b )k − tk g k .
15

Deep learning algorithms use a step size tk (a.k.a learning rate) that is either kept constant or a simple step size reduction strategy, such as tk = a exp(−k t ) is used. The hyper parameters of reduction schedule are usually found empirically from numerical experiments and observations of the loss function progression. One caveat of SGD is that the descent in f is not guaranteed, or it can be very slow at every iteration. Stochastic Bayesian approaches ought to alleviate these issues. The varia-
nce of the gradient estimate g k can also be near zero, as the iterates converge to a solution. To tackle those problems a coordinate descent (CD) and momentum-based modifications can be applied. Alternative directions method of multipliers (ADMM) can also provide a natural alternative, and leads to non-linear alternating updates, see Carreira-Perpinán and Wang [2014]. The CD evaluates a single component Ek of the gradient ∇ f at the current point and then updates the Ekth component of the variabl-
e vector in the negative gradient direction. The momentumbased versions of SGD, or so-called accelerated algorithms were originally proposed by Nesterov [1983]. For more recent discussion, see Nesterov [2013]. The momentum term adds memory to the search process by combining new gradient information with the previous search directions. Empirically momentum-based methods have been shown a better convergence for deep learning networks Sutskever et al. [2013]. The gradient only influences changes in t-
he velocity of the update, which then updates the variable
v k+1 =μv k − tk g ((W , b )k )
(W , b )k+1 =(W , b )k + v k
The hyper-parameter μ controls the dumping effect on the rate of update of the variables. The physical analogy is the reduction in kinetic energy that allows to “slow down" the movements at the minima. This parameter can also be chosen empirically using cross-validation. Nesterov’s momentum method (a.k.a. Nesterov acceleration) calculates the gradient at the point predicted by the momentum. One can view this as a look-ahead strategy with updating scheme
v k+1 =μv k − tk g ((W , b )k + v k )
(W , b )k+1 =(W , b )k + v k .
Another popular modification are the AdaGrad methods Zeiler [2012], which adaptively scales each of the learning parameter at each iteration
c k+1 =c k + g ((W , b )k )2
(W , b )k+1 =(W , b )k − tk g (W , b )k)/(pc k+1 − a),
where is usually a small number, e.g. a = 10−6 that prevents dividing by zero. PRMSprop takes the AdaGrad idea further and places more weight on recent values of gradient squared to scale the update direction, i.e. we have
c k+1 = d c k + (1 − d ) g ((W , b )k)2
The Adam method [Kingma and Ba, 2014] combines both PRMSprop and momentum methods,
16

and leads to the following update equations
v k+1 =μv k − (1 − μ)tk g ((W , b )k + v k)
c k+1 =d c k + (1 − d ) g ((W , b )k)2
(W , b )k+1 =(W , b )k − tk v k+1/(pc k+1 − a)
Second order methods solve the optimization problem by solving a system of nonlinear equations ∇ f (W , b ) = 0 by applying the Newton’s method
(W , b )+ = (W , b ) − {∇2 f (W , b )}−1∇ f (W , b ).
Here SGD simply approximates ∇2 f (W , b ) by 1/t . The advantages of a second order method include much faster convergence rates and insensitivity to the conditioning of the problem. In practice, second order methods are rarely used for deep learning applications [Dean et al., 2012b]. The major disadvantage is its inability to train models using batches of data as SGD does. Since a typical deep learning model relies on large scale data sets, second order methods become memory and computationally -
prohibitive at even modest-sized training data sets.
4.2 Learning Shallow Predictors
Traditional factor models use linear combination of K latent factors, {z1, z2, . . . , zK },
Yi =
K
∑
k =1
wik zk , ∀i = 1, . . . , N .
Here factors zk and weights Bik can be found by solving the following problem
argminw,F
N
∑
n=1
‖zn −
K
∑
k =1
wnk zk ‖2 + λ
N∑,K
k ,n =1
‖wnk‖l .
Then, we minimize the reconstruction error (a.k.a. accuracy), plus the regularization penalty, to control the variance-bias trade-off for out-of-sample prediction. Algorithms exist to solve this problem very efficiently. Such a model can be represented as a neural network model with L = 2 with identity activation function. The basic sliced inverse regression (SIR) model takes the form Y = G(W X , ε), where G(·) is a nonlinear function and W ∈ Rk×p, with k < p, in other words, Y is a function of k -
linear combinations of X . To find W , we first slice the feature matrix, then we analyze the data’s covariance matrices and slice means of X , weighted by the size of slice. The function G is found empirically by visually exploring relations. The key advantage of deep learning approach is that functional relation G is found automatically. To extend the original SIR fitting algorithm, Jiang and Liu [2013] proposed a variable selection under the SIR modeling framework. A partial least squares regre-
ssion (PLS) [Wold et al., 2001] finds T , a lower dimensional representation of X = T P T and then regresses it onto Y via Y = T BC T . A deep learning least squares network arrives at a criterion function given by a negative logposterior, which needs to be minimized. The penalized log-posterior, with φ denoting a generic
17

regularization penalty is given by
L(G, F ) =
n
∑
i =1
‖yi − g (F (xi ))‖2 + λg φ(G, F )
φi = ∑
k
fL
k (aL
ik ), aL
ik = zL
ikwL, zL
ik = ∑
j
f L−1(aL−1
j k ).
Carreira-Perpinán and Wang [2014] propose a method of auxiliary coordinates which replaces the original unconstrained optimization problem, associated with model training, with an alternative function in a constrained space, that can be optimized using alternating directions method and thus is highly parallelizable. An extension of these methods are ADMM and Divide and Concur (DC) algorithms, for further discussion see Polson et al. [2015a]. The gains for applying these to deep layered models, in -
an iterative fashion, appear to be large but have yet to be quantified empirically.
5 Application: Predicting Airbnb Bookings
To illustrate our methodology, we use the dataset provided by the Airbnb Kaggle competition. This dataset whilst not designed to optimize the performance of DL provides a useful benchmark to compare and contrast traditional statistical models. The goal is to build a model that can predict which country a new user will make his or her first booking. Though Airbnb offers bookings in more than 190 countries, there are 10 countries where users make frequent bookings. We treat the problem as classifica-
tion into one of the 12 classes (10 major countries + other + NDF); where other corresponds to any other country which is not in the list of top 10 and NDF corresponds to situations where no booking was made. The data consists of two tables, one contains the attributes of each of the users and the other contains data about sessions of each user at the Airbnb website. The user data contains demographic characteristics, type of device and browser used to sign up, and the destination country of the f-
irst booking, which is our dependent variable Y . The data involves 213,451 users and 1,056,7737 individual sessions. The sessions data contains information about actions taken during each session, duration and devices used. Both datasets has a large number of missing values. For example age information is missing for 42% of the users. Figure 7(a) shows that nearly half of the gender data is missing and there is slight imbalance between the genders.
(a) Number of observations (b) Percent of reservations (c) Relationship between for each gender per destination age and gender
Figure 7: Gender and Destination Summary Plots for Airbnb users.
18

Figure 9: Booking behavior for users who opened their accounts before 2014
Figure 7(b) shows the country of origin for the first booking by gender. Most of the entries in the destination columns are NDF, meaning no booking was made by the user. Further, Figure 7(c) shows relationship between gender and age, the gender value is missing for most of the users who did not identify their age. We find that there is little difference in booking behavior between the genders. However, as we will see later, the fact that gender was specified, is an important predictor. Intuitively-
, users who filled the gender field are more likely to book. On the other hand, as Figure 8 shows, the age variable does play a role.
0.00
0.25
0.50
0.75
1.00
AU CA DE ES FR GB IT NDF NL other PT US Country
Percent
age 0−4 5−9 15−19 20−24 25−29 30−34 35−39 40−44 45−49 50−54 55−59 60−64 65−69 70−74 75−79 80−84 85−89 90−94 95−99 100+
Share of age by country
of first destination
(a) Empirical distribution of (b) Destination by age (c) Destination by age user’s age category group
Figure 8: Age Information for Airbnb users.
Figure 8(a) shows that most of the users are of age between 25 and 40. Furthermore, looking at booking behavior between two different age groups, younger than 45 cohort and older than 45 cohort, (see Figure 8(b)) have very different booking behavior. Further, as we can see from Figure 8(c) half of the users who did not book did not identify their age either. Another effect of interest is the non-linearity between the time the account was created and booking behavior. Figure 9 shows that “old timer-
s" are more likely to book when compared to recent users. Since the number of records in sessions data is different for each users, we developed
19

features from those records so that sessions data can be used for prediction. The general idea is to convert multiple session records to a single set of features per user. The list of the features we calculate is
(i) Number of sessions records
(ii) For each action type, we calculate the count and standard deviation
(iii) For each device type, we calculate the count and standard deviation
(iv) For session duration we calculate mean, standard deviation and median
Furthermore, we use one-hot encoding for categorical variables from the user table, e.g. gender, language, affiliate provider, etc. One-hot encoding replaces categorical variable with K categories by K binary dummy variable. We build a deep learning model with two hidden dense layers and ReLU activation function f (x) = max(x, 0). We use ADAGRAD optimization to train the model. We predict probabilities of future destination booking for each of the new users. The evaluation metric for this competit-
ion is NDCG (Normalized discounted cumulative gain). We use top five predicted destinations and is calculated as:
NDCGk = 1
n
n
∑
i =1
DCGi
5,
where DCGi
5 = 1/ log2 ( p(i ) + 1) and p(i ) is the position of the true destination in the list of five predicted destinations. For example, if for a particular user i the destination is FR, and FR was at the top of the list of five predicted countries, then
DCGi
5= 1
log2(1 + 1) = 1.0.
When FR is second, e.g. model prediction (US, FR, DE, NDF, IT) gives a
DCGi
5= 1
log2(2 + 1) = 1/1.58496 = 0.6309
We trained our deep learning network with 20 epochs and mini-batch size of 256. For a holdout sample we used 10% of the data, namely 21346 observations. The fitting algorithm evaluates the DC G function at every epoch to monitor the improvements of quality of predictions from epoch to epoch. It takes approximately 10 minutes to train, whereas the variational inference approach is computationally prohibitive at this scale. Our model uses a two-hidden layer architecture with ReLU activation function-
s
Y =softmax(w0Z2 + b 0)
Z2 = max(w2Z1 + b 2, 0)
Z1 = max(w1X + b 1, 0) .
20

Dest AU CA DE ES FR GB IT NDF NL PT US other % obs 0.3 0.6 0.5 1 2.2 1.2 1.2 59 0.31 0.11 29 4.8
Table 1: Percent of each class in out-of-sample data set
(a) first (b) second (c) third
Figure 11: Prediction accuracy for deep learning model. Panel (a) shows accuracy of prediction when only top predicted destination is used. Panel (b) shows correct percent of correct predictions when correct country is in the top two if the predicted list. Panel (c) shows correct percent of correct predictions when correct country is in the top three if the predicted list
The weight matrices for simple data W 1 ∈ R64×p, W 2 ∈ R64×64. In our notations, we assume that the activation function is applied point-vise at each layer. The resulting model has out-of-sample N DC G of −0.8351. The classes are imbalanced in this problem. Table 1 shows percent of each class in out-of-sample data set. Figure 10 shows out-of-sample NDCG for each of the destinations.
Figure 10: Out-of-sample NDCG for each of the destinations
Figure 11 shows accuracy of prediction for each of the destination countries. The model accurately predicts bookings in the US and FR and other when top three predictions are considered. Furthermore, we compared the performance of our deep learning model with the XGBoost algorithms [Chen and Guestrin, 2016] for fitting gradient boosted tree model. The performance of the model is comparable and yields NGD of −0.8476. One of the advantages of the tree-based
21

model is its ability to calculate the importance of each of the features [Hastie et al., 2016]. Figure 12 shows the variable performance calculated from our XGBoost model.
Figure 12: The fifteen most important features as identified by the XGBoost model
The importance scores calculated by the XGBoost model confirm our exploratory data analysis findings. In particular, we see the fact that a user specified gender is a strong predictor. Number of sessions on Airbnb site recorded for a given user before booking is a strong predictor as well. Intuitively, users who visited the site multiple times are more likely to book. Further, web-users who signed up via devices with large screens are also likely to book as well.
6 Discussion
Our view of deep learning is a high dimensional nonlinear data reduction scheme, generated probabilistically as a stacked generalized linear model (GLM). This sheds light on how to train a deep architecture using SGD. This is a first order gradient method for finding a posterior mode in a very high dimensional space. By taking a predictive approach, where regularization learns the architecture, deep learning has been very successful in many fields. There are many areas of future research for Bayes-
ian deep learning which include
(i) By viewing deep learning probabilistically as stacked GLMs allows many statistical models such as exponential family models and heteroscedastic errors.
(ii) Bayesian hierarchical models have similar advantages to deep learners. Hierarchical models include extra stochastic layers and provide extra interpretability and flexibility.
22

(iii) By viewing deep learning as a Gaussian Process allows for exact Bayesian inference Neal [1996], Williams [1997], Lee et al. [2017]. The Gaussian Process connection opens opportunities to develop more flexible and interpretable models for engineering Gramacy and Polson [2011] and natural science applications Banerjee et al. [2008].
(iv) With gradient information easily available via the chain rule (a.k.a. back propagation), a new avenue of stochastic methods to fit networks exists, such as MCMC, HMC, proximal methods, and ADMM, which could dramatically speed up the time to train deep learners.
(v) Comparison with traditional Bayesian non-parametric approaches, such as treed Gaussian Models [Gramacy, 2005], and BART [Chipman et al., 2010] or using hyperplanes in Bayesian non-parametric methods ought to yield good predictors [Francom, 2017].
(vi) Improved Bayesian algorithms for hyper-parameter training and optimization [Snoek et al., 2012]. Langevin diffusion MCMC, proximal MCMC and Hamiltonian Monte Carlo (HMC) can exploit the derivatives as well as Hessian information [Polson et al., 2015a,b, Dean et al., 2012a].
(vii) Rather than searching a grid of values with a goal of minimising out-of-sample means squared error, one could place further regularisation penalties (priors) on these parameters and integrate them out.
MCMC methods also have lots to offer to DL and can be included seamlessly in TensorFlow [Abadi et al., 2015]. Given the availability of high performance computing, it is now possible to implement high dimensional posterior inference on large data sets is now a possibility, see Dean et al. [2012a]. The same advantages are now available for Bayesian inference. Further, we believe deep learning models have a bright future in many fields of applications, such as finance, where DL is a form of nonlinea-
r factor models [Heaton et al., 2016a,b], with each layer capturing different time scale effects and spatio-temporal data is viewed as an image in space-time [Dixon et al., 2017, Polson and Sokolov, 2017]. In summary, the Bayes perspective adds helpful interpretability, however, the full power of a Bayes approach has still not been explored. From a practical perspective, current regularization approaches have provided great gains in predictive model power for recovering nonlinear complex data rela-
tionships.
References
Martín Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mané, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda -
Viégas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, and Xiaoqiang Zheng. TensorFlow: Large-scale machine learning on heterogeneous systems, 2015. URL http://tensorflow. org/. Software available from tensorflow.org. 2, 23
23

David H Ackley, Geoffrey E Hinton, and Terrence J Sejnowski. A learning algorithm for boltzmann machines. Cognitive science, 9(1):147–169, 1985. 8
Ryan Adams, Hanna Wallach, and Zoubin Ghahramani. Learning the structure of deep sparse graphical models. In Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics, pages 1–8, 2010. 9
Y. Amit and D. Geman. Shape Quantization and Recognition with Randomized Trees. Neural Computation, 9(7):1545–1588, July 1997. 14
Yali Amit, Gilles Blanchard, and Kenneth Wilder. Multiple randomized classifiers: Mrcl. 2000. 14
Dario Amodei, Sundaram Ananthanarayanan, Rishita Anubhai, Jingliang Bai, Eric Battenberg, Carl Case, Jared Casper, Bryan Catanzaro, Qiang Cheng, Guoliang Chen, et al. Deep speech 2: End-to-end speech recognition in english and mandarin. In International Conference on Machine Learning, pages 173–182, 2016. 2
Sudipto Banerjee, Alan E Gelfand, Andrew O Finley, and Huiyan Sang. Gaussian predictive process models for large spatial data sets. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 70(4):825–848, 2008. 23
David Barber and Christopher M Bishop. Ensemble learning in Bayesian neural networks. Neural Networks and Machine Learning, 168:215–238, 1998. 9
Charles Blundell, Julien Cornebise, Koray Kavukcuoglu, and Daan Wierstra. Weight uncertainty in neural networks. arXiv preprint arXiv:1505.05424, 2015. 9
Leo Breiman. Statistical Modeling: The Two Cultures (with comments and a rejoinder by the author). Statistical Science, 16(3):199–231, August 2001. 2
Donald W. Bryant. Analysis of Kolmogorov’s superpostion theorem and its implementation in applications with low and high dimensional data. University of Central Florida, 2008. 4
Miguel A Carreira-Perpinán and Weiran Wang. Distributed optimization of deeply nested systems. In AISTATS, pages 10–19, 2014. 16, 18
Tianqi Chen and Carlos Guestrin. Xgboost: A scalable tree boosting system. CoRR, abs/1603.02754, 2016. 21
Hugh A Chipman, Edward I George, Robert E McCulloch, et al. Bart: Bayesian additive regression trees. The Annals of Applied Statistics, 4(1):266–298, 2010. 23
R. Dennis Cook. Fisher Lecture: Dimension Reduction in Regression. Statistical Science, 22(1): 1–26, February 2007. 6
Jeffrey Dean, Greg Corrado, Rajat Monga, Kai Chen, Matthieu Devin, Mark Mao, Marc’Aurelio Ranzato, Andrew Senior, Paul Tucker, Ke Yang, Quoc V. Le, and Andrew Y. Ng. Large Scale Distributed Deep Networks. In F. Pereira, C. J. C. Burges, L. Bottou, and K. Q. Weinberger,
24

editors, Advances in Neural Information Processing Systems 25, pages 1223–1231. Curran Associates, Inc., 2012a. 23
Jeffrey Dean, Greg Corrado, Rajat Monga, Kai Chen, Matthieu Devin, Mark Mao, Andrew Senior, Paul Tucker, Ke Yang, Quoc V. Le, and others. Large scale distributed deep networks. In Advances in Neural Information Processing Systems, pages 1223–1231, 2012b. 17
DeepMind. DeepMind AI Reduces Google Data Centre Cooling Bill by 40%. https:// deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-40/, 2016. 1
DeepMind. The story of AlphaGo so far. https://deepmind.com/research/alphago/, 2017. 1
John Denker, Daniel Schwartz, Ben Wittner, Sara Solla, Richard Howard, Lawrence Jackel, and John Hopfield. Large automatic learning, rule extraction, and generalization. Complex systems, 1(5):877–922, 1987. 8
P. Diaconis and M. Shahshahani. On Nonlinear Functions of Linear Combinations. SIAM Journal on Scientific and Statistical Computing, 5(1):175–191, March 1984. 6
Persi Diaconis and David Freedman. A dozen de finetti-style results in search of a theory. In Annales de l’IHP Probabilités et statistiques, volume 23, pages 397–423, 1987. 12
Persi Diaconis and Mehrdad Shahshahani. Generating a random permutation with random transpositions. Probability Theory and Related Fields, 57(2):159–179, 1981. 7
Persi W Diaconis, David Freedman, et al. Consistency of Bayes estimates for nonparametric regression: normal theory. Bernoulli, 4(4):411–444, 1998. 7
Matthew F. Dixon, Nicholas G. Polson, and Vadim O. Sokolov. Deep Learning for SpatioTemporal Modeling: Dynamic Traffic Flows and High Frequency Trading. arXiv:1705.09851 [stat], May 2017. arXiv: 1705.09851. 23
Andre Esteva, Brett Kuprel, Roberto A Novoa, Justin Ko, Susan M Swetter, Helen M Blau, and Sebastian Thrun. Dermatologist-level classification of skin cancer with deep neural networks. Nature, 542(7639):115–118, 2017. 1
William Feller. An introduction to probability theory and its applications. Wiley, 1971. ISBN 978-0-471-25709-7. 7
Devin Francom. BASS: Bayesian Adaptive Spline Surfaces, 2017. URL https://CRAN. R-project.org/package=BASS. R package version 0.2.2. 23
Ildiko E Frank and Jerome H Friedman. A statistical view of some chemometrics regression tools. Technometrics, 35(2):109–135, 1993. 6
Brendan J Frey and Geoffrey E Hinton. Variational learning in nonlinear gaussian belief networks. Neural Computation, 11(1):193–213, 1999. 9
25

Yarin Gal. A theoretically grounded application of dropout in recurrent neural networks. arXiv:1512.05287, 2015. 9
Yarin Gal and Zoubin Ghahramani. Dropout as a Bayesian approximation: Representing model uncertainty in deep learning. In international conference on machine learning, pages 1050–1059, 2016. 9
Robert B Gramacy. Bayesian treed Gaussian process models. PhD thesis, University of California Santa Cruz, 2005. 23
Robert B Gramacy and Nicholas G Polson. Particle learning of gaussian process models for sequential design and optimization. Journal of Computational and Graphical Statistics, 20(1): 102–118, 2011. 23
Alex Graves. Practical variational inference for neural networks. In Advances in Neural Information Processing Systems, pages 2348–2356, 2011. 9
Trevor Hastie, Robert Tibshirani, and Jerome Friedman. The Elements of Statistical Learning: Data Mining, Inference, and Prediction, Second Edition. Springer, New York, NY, 2nd edition edition, 2016. ISBN 978-0-387-84857-0. 6, 22
JB Heaton, NG Polson, and JH Witte. Deep learning in finance. arXiv preprint arXiv:1602.06561, 2016a. 23
JB Heaton, NG Polson, and JH Witte. Deep portfolio theory. arXiv preprint arXiv:1605.07230, 2016b. 23
JB Heaton, NG Polson, and Jan Hendrik Witte. Deep learning for finance: deep portfolios. Applied Stochastic Models in Business and Industry, 33(1):3–12, 2017. 7
José Miguel Hernández-Lobato and Ryan Adams. Probabilistic backpropagation for scalable learning of Bayesian neural networks. In International Conference on Machine Learning, pages 1861–1869, 2015. 9
G. E. Hinton and R. R. Salakhutdinov. Reducing the dimensionality of data with neural networks. Science (New York, N.Y.), 313(5786):504–507, July 2006. 6
Geoffrey E Hinton and Terrence J Sejnowski. Optimal perceptual inference. In Proceedings of the IEEE conference on Computer Vision and Pattern Recognition, pages 448–453. IEEE New York, 1983. 9
Geoffrey E Hinton and Drew Van Camp. Keeping the neural networks simple by minimizing the description length of the weights. In Proceedings of the sixth annual conference on Computational learning theory, pages 5–13. ACM, 1993. 9
Bo Jiang and Jun S Liu. Sliced inverse regression with variable selection and interaction detection. arXiv preprint arXiv:1304.4056, 652, 2013. 17
Kaggle. Airbnb New User Bookings. https://www.kaggle.com/c/ airbnb-recruiting-new-user-bookings, 2015. Accessed: 2017-09-11. 2
26

Diederik Kingma and Jimmy Ba. Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980, 2014. 16
Diederik P Kingma and Max Welling. Auto-encoding variational Bayes. arXiv preprint arXiv:1312.6114, 2013. 9, 10
Bo’az Klartag. A central limit theorem for convex sets. Inventiones mathematicae, 168(1):91–131, 2007. 12
Andrei Nikolaevich Kolmogorov. On the representation of continuous functions of many variables by superposition of continuous functions of one variable and addition. American Mathematical Society Translation, 28(2):55–59, 1963. 2
Taylor Kubota. Artificial intelligence used to identify skin cancer. http://news.stanford.edu/ 2017/01/25/artificial-intelligence-used-identify-skin-cancer/, January 2017. 1
Neil Lawrence. Probabilistic non-linear principal component analysis with gaussian process latent variable models. Journal of machine learning research, 6(Nov):1783–1816, 2005. 9
H. Lee. Bayesian Nonparametrics via Neural Networks. ASA-SIAM Series on Statistics and Applied Mathematics. Society for Industrial and Applied Mathematics, January 2004. ISBN 978-089871-563-7. 9
Jaehoon Lee, Yasaman Bahri, Roman Novak, Samuel S Schoenholz, Jeffrey Pennington, and Jascha Sohl-Dickstein. Deep neural networks as gaussian processes. arXiv preprint arXiv:1711.00165, 2017. 23
David JC MacKay. A practical Bayesian framework for backpropagation networks. Neural computation, 4(3):448–472, 1992. 8, 9
Colin L Mallows. Some comments on Cp. Technometrics, 15(4):661–675, 1973. 6
Vitali D Milman and Gideon Schechtman. Asymptotic theory of finite dimensional normed spaces: Isoperimetric inequalities in riemannian manifolds, volume 1200. Springer, 2009. 12
Andriy Mnih and Karol Gregor. Neural variational inference and learning in belief networks. arXiv preprint arXiv:1402.0030, 2014. 9
Guido F. Montúfar and Jason Morton. When Does a Mixture of Products Contain a Product of Mixtures? SIAM Journal on Discrete Mathematics, 29(1):321–347, 2015. 4
Peter Müller and David Rios Insua. Issues in Bayesian Analysis of Neural Network Models. Neural Computation, 10(3):749–770, April 1998. 9
Radford M Neal. Learning stochastic feedforward networks. Department of Computer Science, University of Toronto, page 64, 1990. 9
Radford M Neal. Bayesian training of backpropagation networks by the hybrid monte carlo method. Technical report, Technical Report CRG-TR-92-1, Dept. of Computer Science, University of Toronto, 1992. 9
27

Radford M Neal. Bayesian learning via stochastic dynamics. Advances in neural information processing systems, pages 475–475, 1993. 9
Radford M Neal. Priors for infinite networks. In Bayesian Learning for Neural Networks, pages 29–53. Springer, 1996. 23
Yurii Nesterov. A method of solving a convex programming problem with convergence rate O (1/k2). In Soviet Mathematics Doklady, volume 27, pages 372–376, 1983. 16
Yurii Nesterov. Introductory lectures on convex optimization: A basic course, volume 87. Springer Science & Business Media, 2013. 16
Razvan Pascanu, Caglar Gulcehre, Kyunghyun Cho, and Yoshua Bengio. How to Construct Deep Recurrent Neural Networks. arXiv:1312.6026 [cs, stat], December 2013. arXiv: 1312.6026. 4
T. Poggio. Deep Learning: Mathematics and Neuroscience. A Sponsored Supplement to Science, Brain-Inspired intelligent robotics: The intersection of robotics and neuroscience:9–12, 2016. 1, 4
Nicholas G. Polson and Vadim O. Sokolov. Deep learning for short-term traffic flow prediction. Transportation Research Part C: Emerging Technologies, 79:1–17, June 2017. 23
Nicholas G. Polson, James G. Scott, Brandon T. Willard, and others. Proximal algorithms in statistics and machine learning. Statistical Science, 30(4):559–581, 2015a. 7, 18, 23
Nicholas G Polson, Brandon T Willard, and Massoud Heidari. A statistical theory of deep learning via proximal splitting. arXiv preprint arXiv:1509.06061, 2015b. 23
Danilo Jimenez Rezende, Shakir Mohamed, and Daan Wierstra. Stochastic backpropagation and approximate inference in deep generative models. arXiv preprint arXiv:1401.4082, 2014. 9
Brian D Ripley. Neural networks and related methods for classification. Journal of the Royal Statistical Society. Series B (Methodological), pages 409–456, 1994. 2, 6
Francisco R Ruiz, Michalis Titsias RC AUEB, and David Blei. The generalized reparameterization gradient. In Advances in Neural Information Processing Systems, pages 460–468, 2016. 10
Ruslan Salakhutdinov. Learning and evaluating boltzmann machines. Tech. Rep., Technical Report UTML TR 2008-002, Department of Computer Science, University of Toronto, 2008. 9
Ruslan Salakhutdinov and Geoffrey Hinton. Deep boltzmann machines. In Artificial Intelligence and Statistics, pages 448–455, 2009. 9
Lawrence K Saul, Tommi Jaakkola, and Michael I Jordan. Mean field theory for sigmoid belief networks. Journal of artificial intelligence research, 4:61–76, 1996. 9
Jürgen Schmidhuber. Deep learning in neural networks: An overview. Neural networks, 61: 85–117, 2015. 2
28

Karen Simonyan and Andrew Zisserman. Very deep convolutional networks for large-scale image recognition. 2014. 1
Jonas Sjöberg, Qinghua Zhang, Lennart Ljung, Albert Benveniste, Bernard Delyon, Pierre-Yves Glorennec, Håkan Hjalmarsson, and Anatoli Juditsky. Nonlinear black-box modeling in system identification: a unified overview. Automatica, 31(12):1691–1724, 1995. 7
P. Smolensky. Parallel Distributed Processing: Explorations in the Microstructure of Cognition, Vol. 1. pages 194–281. MIT Press, Cambridge, MA, USA, 1986. ISBN 978-0-262-68053-0. 9
Jasper Snoek, Hugo Larochelle, and Ryan P Adams. Practical bayesian optimization of machine learning algorithms. In Advances in neural information processing systems, pages 2951–2959, 2012. 23
David A. Sprecher. A survey of solved and unsolved problems on superpositions of functions. Journal of Approximation Theory, 6(2):123–134, 1972. 4
Nitish Srivastava, Geoffrey E. Hinton, Alex Krizhevsky, Ilya Sutskever, and Ruslan Salakhutdinov. Dropout: a simple way to prevent neural networks from overfitting. Journal of Machine Learning Research, 15(1):1929–1958, 2014. 6
Ilya Sutskever, James Martens, George Dahl, and Geoffrey Hinton. On the importance of initialization and momentum in deep learning. In International conference on machine learning, pages 1139–1147, 2013. 16
Ilya Sutskever, Oriol Vinyals, and Quoc V Le. Sequence to sequence learning with neural networks. In Advances in neural information processing systems, pages 3104–3112, 2014. 2
Tijmen Tieleman. Training restricted boltzmann machines using approximations to the likelihood gradient. In Proceedings of the 25th international conference on Machine learning, pages 1064–1071. ACM, 2008. 9
A. G. Vitushkin and G. M. Khenkin. Linear superpositions of functions. Russian Mathematical Surveys, 22(1):77, 1967. 3
Max Welling, Michal Rosen-Zvi, and Geoffrey E Hinton. Exponential family harmoniums with an application to information retrieval. In Advances in neural information processing systems, pages 1481–1488, 2005. 9
Christopher KI Williams. Computing with infinite networks. In Advances in neural information processing systems, pages 295–301, 1997. 23
Herman Wold. Causal inference from observational data: A review of end and means. Journal of the Royal Statistical Society. Series A (General), 119(1):28–61, 1956. 6
Svante Wold, Michael Sjöström, and Lennart Eriksson. Pls-regression: a basic tool of chemometrics. Chemometrics and intelligent laboratory systems, 58(2):109–130, 2001. 17
Matthew D Zeiler. Adadelta: an adaptive learning rate method. arXiv preprint arXiv:1212.5701, 2012. 16
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.491Z
- **Text Length:** 69070 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
