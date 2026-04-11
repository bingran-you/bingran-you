# PDF Document: Biswas and Yadav - 2025 - A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures.pdf

**File Path:** Biswas and Yadav - 2025 - A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures.pdf

**Processed Date:** 2026-02-10T18:14:35.678Z

**File Size:** 9372.92 KB

**Total Pages:** 37

**Extracted Pages:** 37

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3734

**Title:** A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Graphical Abstract
A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures
Sutirtha Biswas, Kshitij Kumar Yadav
arXiv:2511.21276v1 [cs.LG] 26 Nov 2025

Highlights
A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures
Sutirtha Biswas, Kshitij Kumar Yadav
• A novel PhyULSTM framework is developed for data-driven structural seismic modeling.
• Physics laws in loss guide learning, prevent overfitting, and improve generalization.
• The model can predict seismic response without physical constraints as well.

A Physics-Informed U-net-LSTM Network for Data-Driven Seismic Response Modeling of Structures⋆
Sutirtha Biswas∗, Kshitij Kumar Yadav
Department of Civil Engineering, Indian Institute of Technology (BHU) Varanasi, Varanasi, Uttar Pradesh, India
ARTICLE INFO
Keywords: PhyULSTM LSTM U-net CNNs Data-driven Seismic response prediction
ABSTRACT
Accurate and efficient seismic response prediction is essential for the design of resilient structures. While the Finite Element Method (FEM) remains the standard for nonlinear seismic analysis, its high computational demands limit its scalability and real-time applicability. Recent developments in deep learning—particularly Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and Long Short-Term Memory (LSTM) models—have shown promise in reducing the computational cost of the n-
onlinear seismic analysis of structures. However, these data-driven models often struggle to generalize and capture the underlying physics, leading to reduced reliability. We propose a novel Physics-Informed U-Net-LSTM framework that integrates physical laws with deep learning to enhance both accuracy and efficiency. By embedding domain-specific constraints into the learning process, the proposed model achieves improved predictive performance over conventional Machine Learning (ML) architectures. -
This hybrid approach bridges the gap between purely data-driven methods and physics-based modeling, offering a robust and computationally efficient alternative for seismic response prediction of structures.
1. Introduction
The increasing number and intensity of natural disasters such as earthquakes, typhoons, and
tsunamis have heightened the global demand for resilient and adaptive infrastructure systems.
Among these hazards, seismic events pose particularly severe threats to structural integrity, leading
to widespread damage and loss of life. Accurate prediction of structural response under seismic
loading is thus a cornerstone of resilient design. Conventional numerical methods, including
the Newmark-β [1], KR-α [2], and the finite element method (FEM)[3, 4, 5], have long been
the foundation for modeling dynamic behavior of structures. These techniques are reliable and
grounded in physics, yet they are computationally intensive, especially when applied to nonlinear
∗Corresponding author
sutirtha.biswas.cd.civ21@iitbhu.ac.in (S. Biswas); kshitij.civ@iitbhu.ac.in (K.K. Yadav) ORCID(s): 0009-0006-6411-7189 (S. Biswas); 0000-0001-5287-6635 (K.K. Yadav)
S. Biswas et al.: Preprint submitted to Elsevier Page 1 of 35

phyulstm
analysis of a full-scale structure. Their high computational cost limits real-time applications and
scalability.
In recent years, machine learning (ML) and artificial intelligence (AI) have emerged as
promising alternatives or supplements to traditional physics-based modeling. A range of ML
techniques,including support vector machines (SVM) [6, 7, 8], multilayer perceptrons (MLP)
[9, 10, 11, 12, 13, 14, 15, 16, 17, 18], deep neural networks [19, 20, 21], long short-term memory
networks (LSTMs) [22], and convolutional neural networks (CNNs) [23], have been employed
to develop surrogate models for rapid prediction of structural response. These approaches reduce
computational cost while offering acceptable levels of accuracy. RNNs and LSTMs, in particular,
are often adopted for modeling temporal dynamics in structural systems due to their ability to
learn long-term dependencies in time series data [24]. Meanwhile, CNNs with dilated filters have
shown promise for time-series modeling by enabling access to long-range dependencies without
recurrence [25, 26]. These models have also been successfully applied in domains such as ECG
classification, structural health monitoring, continuum damage mechanics and anomaly detection
[27, 28, 29, 30, 31, 32].
Building upon these advances, physics-informed machine learning has gained traction within
earthquake engineering and structural dynamics community, where it addresses critical challenges
such as data scarcity and limited model generalization. By embedding governing physical laws
directly into ML architectures, physics-informed frameworks enhance predictive accuracy and
ensure physical consistency. For instance, physics-informed LSTM frameworks (e.g., PhyLSTM2,
PhyLSTM3)[33] estimate key variables like displacement and restoring force by incorporating
these laws into the loss function during training. Similarly, PhyCNN [34] integrates domain
knowledge with deep CNNs to predict nonlinear seismic responses through a data-driven approach.
These innovative methods have been applied across diverse scenarios, including subway station
dynamics [35], vehicle–bridge interactions [36], and dam behavior prediction using CNN–GRU
architectures [37]. More recently, PI-LSTM has been introduced and benchmarked against Phy
CNN and PhyLSTM, further demonstrating the potential of physics-guided ML architectures for
S. Biswas et al.: Preprint submitted to Elsevier Page 2 of 35

phyulstm
structural response prediction [38]. Recent works [39, 40, 41, 42] have highlighted the importance
of incorporating physical constraints—such as ordinary and partial differential equations and
boundary conditions—directly into deep learning models to improve stability and accuracy even
when data is limited.
Despite the progress made, key limitations persist. LSTMs and RNNs, while effective in
modeling temporal dependencies, suffer from long training times and are prone to overfitting,
particularly in low-data regimes [43, 44]. Deep CNNs, although powerful, require substantial
computational resources when applied to long time series, and their performance degrades under
large plastic deformations [45]. Moreover, capturing long-range interactions and nonlinearities in
dynamic systems remains a fundamental challenge. To overcome these challenges, we propose
a novel Physics-Informed U-net–LSTM architecture for the data-driven modeling of structural
seismic response. The model incorporates a causal one-dimensional U-Net, developed leveraging
the “slow feature” hypothesis [46], to extract hierarchical temporal features across multiple scales
while preserving temporal causality. These features are then passed to an LSTM network, enabling
efficient sequence modeling and dynamic prediction. Importantly, physical knowledge—expressed
through governing equations of motion—is embedded into the loss function, guiding the model to
honor the laws of mechanics even in data-scarce scenarios. The framework is validated on both
numerical and experimental benchmarks and is compared with PhyCNN framework. Even without
knowledge of the structural system, it can still predict the response only by utilizing the data loss
in a purely data-driven manner. Results demonstrate that the proposed approach offers superior
accuracy, robustness, and generalization, especially under conditions of strong nonlinearity, making
it a viable surrogate for seismic response prediction of complex structural systems.
2. Physics-Informed U-net-LSTM Network
In this section, we present the PhyULSTM framework for surrogate modeling of nonlinear
dynamic structural systems subjected to seismic ground motion. PhyULSTM consists of three core
components: a 1D U-Net, a deep LSTM network, and a graph-based tensor differentiator. The
S. Biswas et al.: Preprint submitted to Elsevier Page 3 of 35

phyulstm
proposed 1D U-Net, a tailored variant of the standard U-Net architecture, is designed to work
synergistically with deep LSTM networks for time-series analysis. It has potential to alleviate
common limitations of traditional RNNs and LSTMs—such as difficulty in capturing long
range temporal dependencies and susceptibility to overfitting—especially when processing high
resolution seismic inputs like ground acceleration. This is achieved by leveraging the ‘Slow Feature’
hypothesis [46], which posits that the most informative features in temporal sequences evolve
slowly over time, even when raw signals exhibit rapid fluctuations. By extracting such temporally
stable features across multiple time scales and applying causal convolutions—which restrict each
prediction to depend only on current and past inputs—the U-Net enhances the LSTM’s ability
to learn long-term dependencies within an auto-regressive framework. Additionally, physical
knowledge is explicitly incorporated into the model through a graph-based tensor differentiator
(based on the finite difference method), as introduced by Zhang et al. [34] in their PhyCNN
framework. This component computes derivatives of the state-space outputs to construct a physics
informed loss term derived from the system’s governing equations. The hybrid U-Net–LSTM
model is trained on seismic input–output datasets—obtained either through numerical simulation
or sensor measurements—and subsequently deployed as a surrogate model for predicting structural
responses under future seismic excitations. A detailed illustration of the PhyULSTM framework is
presented in Figure 1.
To demonstrate the PhyULSTM framework, we consider a general dynamic structural system
subjected to ground motion excitation, governed by the equation:
Mẍ(t) + h(t) = −MΓẍ g(t), (1)
where M is the mass matrix; x(t) and ẋ (t) denote the relative displacement and velocity with
respect to the ground;ẍ g(t) is the ground acceleration vector; Γ represents the force distribution
vector; and h(t) denotes the latent generalized restoring force vector, which is modeled as a function
S. Biswas et al.: Preprint submitted to Elsevier Page 4 of 35

phyulstm
Figure 1: The proposed Physics-Informed U-net-LSTM Network (PhyULSTM) for time-series modeling. The 1D U-net first receives the ground acceleration data as input and extracts features at multiple time scales and adapts it to our auto-regressive scenario by ensuring that the convolutions are causal. The outputs from the U-net are then fed to the deep LSTM network that maps the temporal feature maps to the corresponding output space. The outputs are state space variables z(t) = {x(t),ẋ (t), g(t)}. A-
vailable physics knowledge is incorporated directly into the loss function. In addition to it, a graph-based tensor differentiator using the central finite difference method developed by Zhang et.al in their PhyCNN framework is implemented to calculate the derivative of state space outputs zt(t) = {xt(t),ẋ t(t), gt(t)} to construct the physics loss from the governing equation, where the subscript t represents the derivative of the state with respect to time. By optimizing the network hyperparamete-
rs θ = {Wθ, bθ}, PhyULSTM can interpret the measurement data (e.g. {xm,ẋ m, gm}) While satisfying the physical equation of motion in equation 2, e.g. f → 0. Here Wθ,bθ are weights and biases of the neural network. JD(θ) is the data loss based on the measurements and JP (θ) denotes the physics loss, which imposes a physical constraint on the neural network.
of the ground accelerationẍ g(t) and the structural acceleration with respect to the groundẍ(t).
Normalizing Eq. (1) by M, the governing equation can be rewritten as
f ∶ẍ(t) + g(t) + Γẍ g(t) → 0, (2)
where g(t) = M−1h(t) is the mass-normalized restoring force. The explicit form of g(t) is
assumed unknown and is therefore learned implicitly by the proposed PhyULSTM framework.
S. Biswas et al.: Preprint submitted to Elsevier Page 5 of 35

phyulstm
Figure 2: Proposed 1D version of U-net: The U-Net architecture is mainly divided into four major components: the encoder blocks, bottleneck, decoder blocks, and the output convolution block. The encoder blocks perform convolution and pooling operations, generating skip connections and providing input to subsequent encoder blocks after pooling. The decoder blocks involve upsampling, followed by concatenation with the skip connections from the corresponding encoder block outputs, and subsequent conv-
olution operations. The bottleneck layer, serving as a bridge, consists solely of a convolution block, linking the encoder and decoder paths. The output from the final decoder block is fed to the output convolution block, where it first passes through a Conv1D layer with a number of filters equal to the number of channels required in the final output (kernel size = 1), and sigmoid activation, followed by a second Conv1D layer and a linear activation function, which further processes the output to -
format the final output as a three-dimensional array, where the entries are sampled in the first dimension, time history steps in the second dimension, and output features in the last dimension. Here, ‘ConvBlock’is a fundamental building block consisting of a convolutional layer, followed by Batch Normalisation, and a ReLU activation function.
2.1. 1D U-net
U-Net [47] is an established framework originally developed for biomedical image segmenta
tion [48, 49]. It has a symmetrical U-shaped structure, consisting of an encoder and a decoder
connected by skip connections. The encoder captures contextual information by progressively
downsampling the input image, while the decoder reconstructs the image by upsampling and
combining high-resolution features from the encoder, ensuring precise localisation.
The ‘Slow Feature Analysis’ hypothesis [46] posits that meaningful features in dynamic signals
often evolve slowly over time. Considering the encoder-decoder components and the ability to
S. Biswas et al.: Preprint submitted to Elsevier Page 6 of 35

phyulstm
capture contextual information and combine resolution features, U-nets are already doing it, i.e.
computing features at different time scales with two-dimensional convolutions and combining
them to make predictions at the same resolution as the input. One such adaptation is the one
dimensional U-Net, suitable for time-series analysis [50]. In this study, we propose a causal 1D
U-Net to process seismic time-series data that captures such features across multiple temporal
scales while maintaining causal structure, ensuring outputs at a given time step depend only on
current and past inputs. This enhances the model’s suitability for sequential tasks and integration
with LSTM networks.
The architecture comprises four parts: the encoder (contractive path), the bottleneck, the
decoder part (expansive path) and finally, the output convolution block. The input is processed
sequentially through two encoder blocks, having 50 and 100 filters respectively. Each encoder
block generates two outputs: one is a skip connection (or shortcut connection) for the respective
decoder block, and the other (output after 1D pooling operation) serves as the input for the
subsequent encoder block. The final encoder block provides inputs for the bottleneck layer and
also creates a skip connection. The encoder block comprises two sequential ‘ConvBlock’ units.
Each ‘ConvBlock’ executes a series of operations: a 1D convolution ( kernel size = 2, padding =
‘causal’ ), followed by Batch Normalization, and finally a ReLU activation function.
The resulting output from this process serves as both a skip connection (shortcut path) and as the
input for the subsequent MaxPooling1D operation. MaxPooling1D is a down-sampling operation
typically used in convolutional neural networks (CNNs). This method reduces the dimensionality
of the input tensor by extracting the maximum value from within a sliding window, known as the
pool size (set to 2), across the input. So, the encoder block consists of two main components: the
convolution blocks and the max pooling block.
For down-sampling, the ‘Conv1D’ operation with strides=2 (padding= ‘causal’) can also be
implemented, but here in this case ‘MaxPooling1D’ is used to emphasize keeping feature extraction
and down-sampling as distinct operations. And to ensure that the most significant features (e.g.
sudden large significant peaks in ground acceleration data) are preserved during downsampling.
S. Biswas et al.: Preprint submitted to Elsevier Page 7 of 35

phyulstm
There are also a few additional advantages. It is more straightforward than implementing ‘Conv1D’
with a stride of 2, and it reduces feature map size without adding extra learnable parameters.
The bottleneck layer also comprises two sequential ’ConvBlock’ units, using 200 filters without
any pooling operation. This layer acts as a crucial bridge between the encoder and decoder,
capturing complex, high-level features while maintaining the spatial dimensions of the feature
maps. In the decoder stage, the first decoder block receives the output from the bottleneck layer,
along with the skip connection from the second encoder block, and uses these inputs to upsample
the feature map.
Within the decoder block, a 1D upsampling operation is performed on the input tensor that
repeats each temporal step size times along the time axis. In this case, as the parameter size=2 is
specified, the layer performs upsampling by repeating each temporal step of the input sequence
twice along the time axis. This step helps to gradually reconstruct the original input size. After the
1D upsampling operation, the feature map is concatenated with the corresponding skip connection
from the encoder blocks. Then the output passes through two ConvBlocks. This sequence is
repeated in each of the two decoder blocks, with 100 and 50 filters, respectively, to progressively
refine the feature maps and reconstruct the final output with high accuracy and detail. The output
from the final decoder block is then first passed through a Conv1D layer with a number of filters
equal to the number of channels required in the final output, a kernel size of 1, and sigmoid
activation, which reduces the channels to match the dimension of the final output required and maps
the output values between 0 and 1. The output has the same length as the input due to padding. This
is followed by a second Conv1D layer and a linear activation function, which further processes the
output by expanding the channels to format the final output as a three-dimensional array, where the
entries are sampled in the first dimension, time history steps in the second dimension, and output
features in the last dimension, this is very crucial otherwise the deep LSTM network cannot be
implemented subsequently. The network architecture is shown in Figure 2 and represented in the
table 1. The U-Net output feeds directly into the LSTM module.
S. Biswas et al.: Preprint submitted to Elsevier Page 8 of 35

phyulstm
Layer Type Number of Filters Kernel Size Stride Activation Encoder 1 Conv Block (x2) 50 2 1 ReLU Encoder 1 Max Pooling - 2 2 Encoder 2 Conv Block (x2) 100 2 1 ReLU Encoder 2 Max Pooling - 2 2 Bottleneck Conv Block (x2) 200 2 1 ReLU Decoder 1 UpSampling1D - - - Decoder 1 Conv Block (x2) 100 2 1 ReLU Decoder 2 UpSampling1D - - - Decoder 2 Conv Block (x2) 50 2 1 ReLU Output Convolutional Number of output channels 1 1 Sigmoid
Final output Convolutional Number of output channels 1 1 Linear
Table 1
Proposed 1D U-Net Architecture. Note: Inside each Conv Block (Convolution Block), a consecutive set of the following operations: Convolution → Batch Normalization → ReLU activation takes place.
2.2. Deep LSTM Network
Each LSTM layer consists of a set of LSTM cells, as depicted in Figure 3. Like the neural nodes
in traditional ANNs, each LSTM cell contains an independent set of weights and biases shared
across the entire temporal sequence within the layer. First, the basic architecture of the deep LSTM
network for sequence-to-sequence modeling is presented[22]. The architecture includes a number
of hidden layers - additional to input and output layers - as shown in Figure 3(a), some of which are
LSTM layers, while others are fully connected layers. The LSTM cell includes four components:
an internal cell, an input gate, a forget gate, and an output gate. The internal cell remembers the
cell state from the previous time step via a self-recurrent connection. The input gate maintains the
flow of input activations into the internal cell state, while the output gate controls the flow of output
activations from the LSTM cell. The forget gate scales the internal cell state, allowing the LSTM
cell to adaptively forget or reset its memory. Through the coordinated actions of the input, forget,
and output gates, the cell state can selectively transmit essential information along the temporal
sequence, capturing both long-term and short-term dependencies in a dynamic system effectively.
Let us consider at time step t (where ( t = 1, 2, 3, ... , n ); with n being the total number of
time steps) and within the l-th LSTM network layer, the input state to the LSTM cell as x(l)
t , and
the forget gate as f (l)
t , the input gate as i(l)
t , the output gate as o(l)
t , the cell state memory as c(l)
t
S. Biswas et al.: Preprint submitted to Elsevier Page 9 of 35

phyulstm
(a)
(b)
Figure 3: Schematic of deep LSTM networks: (a) corresponds to the network architecture of a deep LSTM network featuring m LSTM layers and multiple fully-connected layers for sequence-tosequence modeling and (b) corresponds to the architecture of a typical LSTM cell at the lth layer and time t, showing cell input X(l)
t , cell output Y (l)
t , cell state c(l)
t , hidden state h(l)
t , and gate variables
{f (l)
t , i(l)
t ,c̃ (l)
t , o(l)
t }, respectively.
and hidden state memory as h(l)
t . Similarly, for the previous time step t-1, we denote the cell state
memory as c(l)
(t−1) and hidden state memory as h(l)
(t−1). The relationship between these variables can
S. Biswas et al.: Preprint submitted to Elsevier Page 10 of 35

phyulstm
be expressed as follows:
f (l)
t =σ
(
W (l)
xf ⋅ xt + W (l)
hf ⋅ h(l)
t−1 + b(l)
f
)
(3)
i(l)
t =σ
(
W (l)
xi ⋅ xt + W (l)
hi ⋅ h(l)
t−1 + b(l)
i
)
(4)
c̃ (l)
t = tanh
(
W (l)
xc ⋅ xt + W (l)
hc ⋅ h(l)
t−1 + b(l)
c
)
(5)
o(l)
t =σ
(
W (l)
xo ⋅ xt + W (l)
ho ⋅ h(l)
t−1 + b(l)
o
)
(6)
c(l)
t = f (l)
t ⊙ c(l)
t−1 + i(l)
t ⊙c̃ (l)
t (7)
h(l)
t = o(l)
t ⊙ tanh
(
c(l)
t
)
(8)
Where W (l)
(αβ) (with α = {x, h} and β = {f , i, c, o} ) denotes weight matrix corresponding to
different inputs (e.g. xl
t or hl
t ) different gates (e.g., input gate, forget gate, tanh layer, or output gate).
And b(l)
β represents the corresponding bias vectors; the lth layer of the LSTM network is denoted
by the superscript l. Here,c̃ (l)
t denotes a vector of intermediate candidate values created by a tanh
layer shown in Fig. 1(b); σ is the logistic sigmoid function; tanh is the hyperbolic tangent function;
S. Biswas et al.: Preprint submitted to Elsevier Page 11 of 35

phyulstm
⊙ denotes the Hadamard product (elementwise product). The complex connection system within
each LSTM cell makes the deep LSTM network powerful in sequence modelling, in which the
fully connected layers are beneficial to map the temporal feature maps to the corresponding output
space.
The output of the final dense layer produces a time-series prediction of the state-space variables
z(t) = x(t),ẋ (t), g(t), where x is displacement, ẋ is velocity, and g is restoring force. While this
formulation accurately captures temporal patterns, it lacks explicit knowledge of the governing
physical laws.To address this limitation, the predicted outputs are further processed using a graph
based tensor differentiator to compute their temporal derivatives. A specialized loss function is then
formulated, tailored to the specific requirements of each scenario. The tensor differentiator and the
loss function are described in detail in Sections 2.3 and 2.4, respectively. Training proceeds by
minimizing the loss:
̂θ ∶= arg mθin J (θ) (9)
The model is implemented in Python using Keras [51] with TensorFlow backend. Training
is conducted on Google Colab Pro with GPU acceleration. All hyperparameters, including the
number of LSTM layers m, number of hidden units per layer, batch size, learning rate, and optimizer
settings, are specified in the Supplementary Information.The detailed network architecture of the
proposed framework is represented in Figure 1.
2.3. Graph Based Tensor Differentiator
Numerical differentiation is an essential method widely used in computational mathematics,
particularly in solving differential equations and gradient-based optimization. Finite differences
(FD) approximate derivatives by combining nearby function values using a set of weights. Here
in this study to calculate the derivatives of the state space outputs of the neural network a graph
based tensor differentiator utilizing finite difference approach is implemented.[34] This section
gives detailed explanation about the construction of finite difference matrix ([Φt]) to calculate the
S. Biswas et al.: Preprint submitted to Elsevier Page 12 of 35

phyulstm
first order derivatives providing second order accuracy meaning the truncation error is of order 2
(i.e. O(Δt2)). For all the interior points central difference stencil is utilized whereas for the first and
last point forward and backward difference stencil is implemented.
Let us assume a function u = [u0, u1, ... , un−1] is sampled at time t0, t1, ... , tn−1. Here the data
ui = u(ti) given at equispaced points ti = t0 + iΔt, for i = 0, 1, 2, ... , n − 1 where Δt is the step
size. The first order derivatives are approximated as:
du
dt
| | |
|ti
≈
⎧
⎪
⎪
⎪
⎨
⎪
⎪
⎪ ⎩
−3
2 ui + 2ui+1 − 1
2 ui+2
Δt , i = 0
ui+1 − ui−1
2Δt , 0 < i < n − 1
1
2 ui−2 − 2ui−1 + 3
2 ui
Δt , i = n − 1
(10)
In order to compute the first-order derivative of vector {u} = [u0, u1, ... , un−1]T as mentioned in
equation 10, which is {ut} , matrix [Φt] is constructed which transforms {u} to {ut}.
{ut} = [Φt]{u} (11)
Where [Φt] is an n × n finite difference matrix whose entries constitute the optimal weights
for approximating first derivatives at each discrete point through a weighted combination of
neighboring function values. The complete finite difference matrix can be expressed as:
Φt = 1
Δt
⎡
⎢
⎢
⎢
⎢
⎢
⎢
⎢
⎢
⎢ ⎣
−3∕2 2 −1∕2 0 ... 0
−1∕2 0 1∕2 0 ... 0
0 −1∕2 0 1∕2 ... 0
⋮ ⋮ ⋱ ⋱⋱ ⋮
0 ... 0 1∕2 −2 3∕2
⎤
⎥
⎥
⎥
⎥
⎥
⎥
⎥
⎥
⎥
⎦n×n
S. Biswas et al.: Preprint submitted to Elsevier Page 13 of 35

phyulstm
2.4. Loss function
In this study, three different loss functions are utilised for each of the two numerical validation
scenario and the experimental validation of the model. To incorporate physical constraints,
temporal derivatives ż (t) = x t(t),ẋ t(t), gt(t) are estimated using a graph-based differentiator [22],
which implements finite-difference approximations over a local stencil. This component enables
embedding of physics-based residuals into the loss function. For the first scenario of the numerical
validation where full-state measurements are available for training, the total loss function used for
training combines data loss and physics-based loss:
J (θ) = w1 ⋅ JD(θ) + w2 ⋅ JP (θ) (12)
JD(θ) = 1
N
‖xp − xm
‖
2
2+ 1
N
‖ẋ p − ẋ m
‖
2
2+ 1
N
‖gp − gm
‖
2
2 (13)
JP (θ) = 1
N
‖ ‖
ẋ p − xp
t‖
‖
2
2+ 1
N
‖ ‖ ‖
ẋ p
t + gp + Γẍ g
‖ ‖ ‖
2
2 (14)
Where JD(θ) is the data loss based on the measurements and JP (θ) denotes the physics
loss . Superscripts p and m denote predicted and measured quantities, respectively. When certain
measurement channels are unavailable, corresponding loss terms are omitted. In the physics loss the
second term incorporates the physical laws in terms of the governing equation where ẋ p
t represents
the derivative of the predicted velocity (which corresponds to the acceleration). The first term serves
as a consistency or sanity check, ensuring that the predicted state-space variables align with their
physical definitions. Specifically, the predicted velocity ẋ p should be equal with the derivative of
the predicted displacement(xp
t ) computed using the graph-based tensor differentiator. In this study,
S. Biswas et al.: Preprint submitted to Elsevier Page 14 of 35

phyulstm
equal weights (w1 = w2 = 1) are used, but these can be tuned depending on the application.
For the second case of numerical validation, although the system information—such as the mass
matrix, stiffness, and damping coefficients—is available, only acceleration measurements are used
as training data. A modified loss function is architected to incorporate the governing equations and
enable training using acceleration data alone to accommodate this limitation. The formulation of
this loss function is presented below:
J (θ) = 1
N
‖ ‖
ẋ p − xp
t‖
‖
2
2+ 1
N
‖ ‖
ẋ p
t −ẍ m‖
‖
2
2+ 1
N
‖ ‖ ‖
ẋ p
t + gp + Γẍ g
‖ ‖ ‖
2
2 , (15)
This modified loss function’s first term is identical to the original physics loss’s first term, ensuring
consistency between predicted state variables. The third term also remains unchanged from the
second term of the original physics loss, enforcing adherence to the physical laws. In the second
term the ẋ p
t represents the time derivative of the predicted velocity, computed via the graph-based
tensor differentiator, and enforced to match the available measured acceleration data.
For the experimental validation where we dont have a complete description of the structural
system—including mass, stiffness, damping properties, and interaction effect, it is not possible to
implement physics based loss term and the model relies solely on the data loss. In this purely data
driven scenario, only acceleration data gathered from the sensors are available for training. The
model is designed to predict displacements, which are then differentiated twice using the graph
based tensor differentiator to obtain the corresponding accelerations (xtt) using tensor differentiator.
The loss function implemented for this case is presented below:
J (θ) = 1
N
‖ ‖
ẍ m − xp
tt‖
‖
2
2 (16)
S. Biswas et al.: Preprint submitted to Elsevier Page 15 of 35

phyulstm
2.5. Numerical Validation:
For numerical validation, we consider a nonlinear single-degree-of-freedom system subjected
to ground motion excitation. The system is governed by
mẍ + cẋ + k 1x + k2x3
⏟⏞⏞⏞⏞⏞⏞⏞⏞⏟⏞⏞⏞⏞⏞⏞⏞⏞⏟
h
= −mΓẍ g (17)
where m = 1 kg, c = 1 Ns∕m, k1 = 20 N∕m, and k2 = 200 N∕m. The restoring force h is
normalized by mass to yield g = h∕m, following Zhang [34]. Two scenarios are considered. In the
first, full-state measurements—displacement, velocity, and restoring force—are assumed available
for training. These can be extracted from numerical simulations, with g computed via g = −ẍ −Γẍ g.
In the second, only acceleration data are used, representing a more constrained condition. This
setup enables direct assessment of the proposed model’s robustness under varying levels of data
availability.
2.5.1. Case 1: Full-state measurements available for training
We consider the scenario in which full-state measurements—displacement (x), velocity (ẋ ), and
restoring force (g)—are available for training the model. Following Zhang [34], we adopt a dataset
of 100 numerical simulations of a nonlinear single-degree-of-freedom system subjected to synthetic
earthquake ground motions drawn from the PEER Strong Motion Database [52], representing a 10%
probability of exceedance in 50 years. Each simulation spans 50 seconds with a sampling rate of
20 Hz, resulting in 1001 time steps per example. Out of these, 10 records are randomly selected for
training, while the remaining 90 are reserved for validation. The proposed PhyULSTM framework
(Fig. 1) is trained to map ground motion acceleration to system response using these data. The
model input and output tensors are of shapes [10, 1001, 1] and [10, 1001, 3], respectively. Training
follows the architecture and loss function detailed in 2.4.
S. Biswas et al.: Preprint submitted to Elsevier Page 16 of 35

phyulstm
J (θ) = w1 ⋅ JD(θ) + w2 ⋅ JP (θ)
JD(θ) = 1
N
‖xp − xm
‖
2
2+ 1
N
‖ẋ p − ẋ m
‖
2
2+ 1
N
‖gp − gm
‖
2 2
JP (θ) = 1
N
‖ ‖
ẋ p − xp
t‖
‖
2
2+ 1
N
‖ ‖ ‖
ẋ p
t + gp + Γẍ g
‖ ‖ ‖
2
2
Figure 4 illustrates the predicted displacement response for three unseen ground motion using both
PhyULSTM and PhyCNN models. The proposed PhyULSTM architecture demonstrates excellent
predictive performance, accurately reproducing the displacement time history with close agreement
to the ground truth. Notably, PhyULSTM captures both the overall trend and the rapid fluctuations
in the response that are significantly underrepresented by PhyCNN. This difference is especially
prominent in regions with sharp nonlinear behavior, underscoring PhyULSTM’s superior ability
to generalize across previously unseen inputs. Figure 5 further compares the predicted velocity
and nonlinear restoring force for the a representative ground motion. Again, PhyULSTM closely
matches the true values obtained from direct numerical integration of the governing equations.
In contrast, PhyCNN tends to smooth out higher-frequency variations and fails to capture abrupt
transitions in the restoring force dynamics. This limitation becomes particularly evident in the
high-gradient regions, where PhyULSTM maintains fidelity to the true signal.
The nonlinear dynamic behavior of the system is further examined through hysteresis plots of
the restoring force versus displacement and velocity, as shown in Fig. 6. These plots serve as critical
indicators of the model’s ability to capture complex energy dissipation mechanisms and stiffness
degradation inherent in nonlinear structural systems.
The results in Fig. 6 thus confirm that PhyULSTM is not only capable of accurate time-series
predictions but also preserves the nonlinear physics of the underlying system, making it a reliable
tool for surrogate modeling in structural dynamics.
S. Biswas et al.: Preprint submitted to Elsevier Page 17 of 35

phyulstm
Figure 4: Time histories of displacement responses predicted by PhyULSTM (red, left column) and PhyCNN (red, right column) compared against the reference solution (blue). Each row corresponds to a different earthquake input (1, 2, and 3). Subplots are labeled 1a, 1b, 2a, 2b, 3a, and 3b for reference, where the left subplots (a) show PhyULSTM predictions and the right subplots (b) show PhyCNN predictions. Across all three test cases, PhyULSTM consistently tracks the true system behavior with higher-
 accuracy, capturing both transient peaks and steady-state oscillations. In contrast, PhyCNN fails to reproduce finer-scale dynamics and underestimates displacement amplitudes during critical phases.
Figure 7 presents the results of a regression analysis comparing the predicted and true displace
ment responses for both PhyULSTM and PhyCNN models. The proposed PhyULSTM framework
demonstrates remarkable predictive fidelity, achieving a maximum correlation coefficient of 0.998
and a minimum of 0.83 across all 90 unseen test cases. These values indicate near-perfect agreement
in most scenarios, even under conditions involving significant nonlinearity and variability in input
ground motions. In contrast, the PhyCNN model exhibits noticeably lower predictive accuracy,
with correlation coefficients ranging from 0.97 down to 0.577, suggesting poorer generalization
and a tendency to underperform in more complex test cases.
S. Biswas et al.: Preprint submitted to Elsevier Page 18 of 35

phyulstm
Figure 5: Predicted time histories of velocity (ẋ ) and nonlinear restoring force (g) for a representative ground motion are shown.The left column shows the responses predicted by PhyULSTM, and the right column shows those predicted by PhyCNN. Subplots are labeled 4a, 4b, 4c, and 4d for reference: 4a and 4c correspond to velocity and normalized restoring force predicted by PhyULSTM, while 4b and 4d correspond to the same predicted by PhyCNN. The PhyULSTM model captures both quantities with high fi-
delity compared to the numerical reference, successfully reproducing subtle fluctuations and transient peaks.
Additionally, in the case of the PhyCNN model, 61.1% of the predicted displacement responses
exhibit a Pearson correlation coefficient greater than 0.9 with the reference values. In contrast,
the proposed PhyULSTM model achieves a significantly improved performance, with 96.7% of
its predicted displacements exceeding the 0.9 correlation threshold. This comparison underscores
the robustness and reliability of PhyULSTM, particularly in scenarios with limited training data.
The ability of PhyULSTM to maintain high prediction accuracy across diverse and challenging test
inputs highlights its superior generalization capacity and establishes it as a more effective surrogate
modeling framework for nonlinear dynamic systems.
S. Biswas et al.: Preprint submitted to Elsevier Page 19 of 35

phyulstm
Figure 6: PhyULSTM accurately replicates the mechanical response of the nonlinear system, as evidenced by the hysteresis plots of restoring force g versus displacement x (left) and velocity ẋ (right). The model successfully captures the characteristic loops, amplitude variations, and shape distortions typical of nonlinear restoring forces, affirming its ability to infer high-order dynamic behavior from limited observations.
Figure 7: Histogram of predicted versus ground-truth displacements for PhyULSTM (left) and PhyCNN (right). PhyULSTM achieves a maximum correlation coefficient of 0.998 and a minimum of 0.83 across all test cases, indicating robust accuracy and generalization. In contrast, PhyCNN exhibits lower performance, with correlation values ranging from 0.97 to 0.577. These results highlight the superior learning capacity of the proposed physics-informed LSTM architecture.
S. Biswas et al.: Preprint submitted to Elsevier Page 20 of 35

phyulstm
2.5.2. Case 2: Training with acceleration measurements only
In practical structural monitoring, accelerometers are often the only sensors installed, provid
ing solely acceleration time histories. Traditional deep learning models approaches attempt to
infer displacements by numerical integration of accelerations before training predictive models.
However, this introduces significant numerical errors that degrade prediction accuracy. In contrast,
the proposed PhyULSTM framework directly incorporates physics constraints into its training,
enabling accurate displacement field predictions using only acceleration inputs. Leveraging a
specialized 1D U-net architecture combined with LSTM units, the model extracts salient features
from acceleration signals to infer the full state vector z(t) = {x(t),ẋ (t), g(t)}. These predictions are
further refined by a tensor differentiator employing central finite differences to compute derivatives
ż (t) = {x t(t),ẋ t(t), gt(t)}. The loss function is designed to penalize deviations between predicted
derivatives and measured accelerations, enforcing physical consistency as
J (θ) = 1
N
‖ ‖
ẋ p − xp
t‖
‖
2
2+ 1
N
‖ ‖
ẋ p
t −ẍ m‖
‖
2
2+ 1
N
‖ ‖ ‖
ẋ p
t + gp + Γẍ g
‖ ‖ ‖
2
2,
where only acceleration measurementsẍ m contribute to the loss due to data availability. The
model is trained on 50 randomly selected datasets and tested on 50 unseen datasets.
Figure 8 illustrates the displacement time histories predicted by the proposed PhyULSTM
model alongside those from the baseline PhyCNN and the ground truth numerical solutions for
three distinct, previously unseen seismic excitation inputs. The PhyULSTM predictions (left)
closely track the true system response (blue), accurately capturing both the amplitude and phase of
complex oscillatory behavior inherent to nonlinear structural dynamics. In contrast, the PhyCNN
predictions (right) exhibit noticeable deviations, particularly during peak displacement intervals
and rapid transient phases, indicating an underestimation of key dynamic features. Figure 9 further
highlights the predictive fidelity of PhyULSTM by comparing the velocity (ẋ ) and nonlinear
restoring force (g) time histories for a representative unseen seismic event. The model faithfully
S. Biswas et al.: Preprint submitted to Elsevier Page 21 of 35

phyulstm
reproduces the intricate temporal variations and sharp fluctuations characteristic of nonlinear
hysteretic behavior, which are only partially captured by PhyCNN.
The regression analysis summarised in Figure 10 quantitatively confirms these observations.
PhyULSTM achieves a maximum correlation coefficient of 0.996 and maintains a minimum of
0.764 across all test cases, demonstrating robust generalization even when trained exclusively with
acceleration measurements. By contrast, PhyCNN’s correlation coefficients span a lower range
(0.984 maximum to 0.727 minimum), underscoring its comparatively weaker predictive accuracy
and generalization. Additionally, in the case of the PhyCNN model, 80% of the predicted displace
ment responses exhibit a Pearson correlation coefficient greater than 0.9 with the reference values.
In contrast, the proposed PhyULSTM model achieves a significantly improved performance, with
94% of its predicted displacements exceeding the 0.9 correlation threshold. These comprehensive
results establish that PhyULSTM is a powerful tool for real-world structural health monitoring and
seismic response analysis.
S. Biswas et al.: Preprint submitted to Elsevier Page 22 of 35

phyulstm
Figure 8: Time histories of displacement responses predicted (red) by PhyULSTM (left) and PhyCNN (right) are compared against reference numerical solutions (blue) obtained via direct integration. Each row corresponds to a different earthquake input (1, 2, and 3). Subplots are labeled 1a, 1b, 2a, 2b, 3a, and 3b for reference, where the left subplots (a) show PhyULSTM predictions and the right subplots (b) show PhyCNN predictions. PhyULSTM consistently captures transient dynamics and amplitude varia-
tions with high fidelity across three distinct seismic events, whereas PhyCNN exhibits noticeable deviations, especially in peak displacement magnitudes and oscillation patterns.
S. Biswas et al.: Preprint submitted to Elsevier Page 23 of 35

phyulstm
Figure 9: PhyULSTM accurately reproduces velocity (ẋ ) and restoring force (g) time histories, closely matching the ground truth obtained from numerical integration. The left column shows the responses predicted by PhyULSTM, and the right column shows those predicted by PhyCNN. Subplots are labeled 4a, 4b, 4c, and 4d for reference: 4a and 4c correspond to velocity and normalized restoring force predicted by PhyULSTM, while 4b and 4d correspond to the same predicted by PhyCNN. The model effectively-
 captures the nonlinear system response including sharp fluctuations, which alternative methods fail to capture effectively.
Figure 10: Correlation between predicted and true displacements across all test cases is higher for PhyULSTM (left), with maximum and minimum correlation coefficients of 0.996 and 0.764 respectively, compared to PhyCNN (right) which attains 0.984 and 0.727. This demonstrates the superior generalization and predictive robustness of PhyULSTM when trained solely on acceleration data.
S. Biswas et al.: Preprint submitted to Elsevier Page 24 of 35

phyulstm
2.6. Experimental Validation
Structural systems are inherently complex, often characterized by nonlinear behavior, hetero
geneous materials, and uncertain boundary conditions. In many real-world scenarios, obtaining
a complete description of the structural system—including mass, stiffness, damping properties,
and interaction effects—is infeasible due to limited instrumentation, inaccessible subsystems, or
cost constraints. Traditional numerical methods, while powerful, rely on prior knowledge of the
governing equations and boundary conditions. As such, they are generally limited to idealized
models and may exhibit significant deviations from actual system behavior when applied to
partially known or ill-defined systems. To overcome these limitations, we extend the PhyULSTM
framework—originally formulated with embedded physics-based constraints—to operate under
data-driven settings where physical knowledge of the system is incomplete or entirely unavailable.
In this formulation, the loss function excludes physics-based residual terms, relying solely on
measurement-based error minimization. The network architecture remains unchanged, retaining the
hybrid encoder–decoder configuration that combines a one-dimensional U-Net with a Long Short
Term Memory (LSTM) decoder . This architecture is capable of learning complex mappings from
input ground motions to structural responses, even in the absence of explicit physical regularization.
To validate this data-driven variant of the PhyULSTM model, we utilize recorded seismic
response data from a six-story reinforced concrete hotel building located in San Bernardino, Cali
fornia. The structure, designed in 1970, has been instrumented with nine accelerometers on the first,
third, and roof levels in both principal directions. The dataset, curated by the Center for Engineering
Strong Motion Data (CESMD) [53], comprises earthquake recordings collected between 1987 and
2018. These events span a broad range of magnitudes and frequency content, thereby providing
a representative and challenging benchmark for data-driven structural response modeling. For
consistency and reproducibility, the dataset partitioning follows the protocol established in Zhang
et al. [34], which involves stratified sampling into training, validation, and test subsets. The training
objective for the data-driven PhyULSTM model is to learn a mapping from ground acceleration
inputs to structural displacement outputs. The model is trained by minimizing the discrepancy
S. Biswas et al.: Preprint submitted to Elsevier Page 25 of 35

phyulstm
between predicted and measured accelerations, defined by the following objective function:
J (θ) = 1
N
‖ ‖
ẍ m − xp
tt‖
‖
2 2
whereẍ m denotes the measured structural acceleration and xp
tt represents the predicted accel
eration obtained by applying a central finite difference operator to the predicted displacement time
series. The network is trained using 11 earthquake records, with 4 events used for validation. Once
trained, the model is tested on previously unseen events to evaluate its generalization capability.
Figure 11 and Figure 12 present the predicted displacement responses at the 3rd floor and roof
levels, respectively, of the six-story instrumented hotel building in San Bernardino, California,
subjected to the 2014 Big Bear Lake and 2016 Loma Linda earthquakes. The PhyULSTM model
was trained using only acceleration time histories obtained from sensors distributed across the
lower, middle, and upper stories of the structure, without incorporating explicit physics-based
constraints in the loss function. Despite this, the model accurately captures essential structural
behaviors across events of varying intensity, duration, and frequency content. These findings
highlight the robustness and generalization capacity of the PhyULSTM architecture for modeling
real-world nonlinear structural systems under seismic excitation. Importantly, the model achieves
this without requiring detailed system identification or constitutive modeling, positioning it as
a viable surrogate modeling tool for structural health monitoring applications, particularly in
scenarios where only partial or noisy sensor data are available.
S. Biswas et al.: Preprint submitted to Elsevier Page 26 of 35

phyulstm
Figure 11: Predicted displacement response at the 3rd floor (DOF-1) of the six-story instrumented hotel building in San Bernardino, California, subjected to the 2014 Big Bear Lake and 2016 Loma Linda earthquakes. The model was trained using historical seismic data from 1987–2018, relying solely on acceleration measurements from strategically placed sensors, without incorporating any explicit physical constraints in the loss function. Despite this, the PhyULSTM model successfully captures the dynam-
ic behavior of the structure, including transient displacement patterns and resonant oscillations, aligning well with sensor-derived ground truth.
Figure 12: Predicted roof-level displacement (DOF-2) of the six-story San Bernardino hotel building under the 2014 Big Bear Lake and 2016 Loma Linda earthquake events.
S. Biswas et al.: Preprint submitted to Elsevier Page 27 of 35

phyulstm
3. Conclusion
This study introduces a hybrid deep learning framework, PhyULSTM, that integrates the
architectural strengths of U-net and LSTM within a physics-informed training regime for the
surrogate modeling of nonlinear structural systems under seismic excitation. When available,
governing physical laws are incorporated directly into the loss function to guide learning, mitigate
overfitting, and enhance generalization, particularly in data-scarce environments. Moreover, the
model outperforms existing seismic response prediction models like PhyCNN and is also capable of
operating without explicit physical constraints, enabling its application to systems with incomplete
or unknown constitutive characteristics. Extensive numerical experiments on nonlinear single
degree-of-freedom systems and experimental validation using sensor data from a mid-rise concrete
building in San Bernardino demonstrate that the PhyULSTM framework outperforms existing
physics-informed CNN architectures. It exhibits superior predictive accuracy, higher correlation
in regression analysis, and robust performance under varied excitation characteristics, including
amplitude and frequency content. These results underscore the framework’s ability to generalize
structural response behavior under seismic loading, even when trained on limited and noisy data.
The modular nature of the PhyULSTM model allows it to be extended to other structural
typologies, including bridges, tunnels, and other civil infrastructure. Furthermore, the combination
of U-net and LSTM makes the architecture well-suited for broader time-series modeling tasks
beyond structural engineering, such as applications in signal processing and sequential decision
making. Overall, this study establishes PhyULSTM as a reliable, interpretable, and physically
grounded metamodeling tool that advances the state of surrogate modeling for structural dynamics
and provides a foundation for future developments in hybrid physics-informed machine learning.
References
[1] Nathan M Newmark. A method of computation for structural dynamics. Journal of the
engineering mechanics division, 85(3):67–94, 1959.
S. Biswas et al.: Preprint submitted to Elsevier Page 28 of 35

phyulstm
[2] Chinmoy Kolay and James M Ricles. Development of a family of unconditionally stable
explicit direct integration algorithms with controllable numerical energy dissipation.
Earthquake Engineering & Structural Dynamics, 43(9):1361–1380, 2014.
[3] Junuthula Narasimha Reddy. An introduction to the finite element method. New York,
27(14), 1993.
[4] Kenneth H Huebner, Donald L Dewhirst, Douglas E Smith, and Ted G Byrom. The
finite element method for engineers. John Wiley & Sons, 2001.
[5] Olgierd Cecil Zienkiewicz, Robert Leroy Taylor, and Jian Z Zhu. The finite element
method: its basis and fundamentals. Elsevier, 2005.
[6] Dong Yinfeng, Li Yingmin, Lai Ming, and Xiao Mingkui. Nonlinear structural
response prediction based on support vector machines. Journal of Sound and Vibration,
311(3-5):886–897, 2008.
[7] Rocio Segura, Jamie E Padgett, and Patrick Paultre. Metamodel-based seismic
fragility analysis of concrete gravity dams. Journal of Structural Engineering, 146
(7):04020121, 2020.
[8] Sadjad Gharehbaghi, Hessam Yazdani, and Mohsen Khatibinia. Estimating inelastic
seismic response of reinforced concrete frame structures using a wavelet support vector
machine and an artificial neural network. Neural Computing and Applications, 32(8):
2975–2988, 2020.
[9] Kurt Hornik. Approximation capabilities of multilayer feedforward networks. Neural
networks, 4(2):251–257, 1991.
[10] Tianping Chen and Hong Chen. Approximations of continuous functionals by neural
networks with application to dynamic systems. IEEE Transactions on Neural networks,
4(6):910–918, 1993.
S. Biswas et al.: Preprint submitted to Elsevier Page 29 of 35

phyulstm
[11] SABS Chen and Stephen A Billings. Neural networks for nonlinear dynamic system
modelling and identification. International journal of control, 56(2):319–346, 1992.
[12] He Yu’ao, Hu Xianzhong, and Zhan Sheng. Predicting seismic response of structures
by artificial neural networks. Transaction of Tianjin University, 2(2):36–39, 1996.
[13] Sarangapani Jagannathan and Frank L Lewis. Identification of nonlinear dynamical
systems using multilayered neural networks. Automatica, 32(12):1707–1712, 1996.
[14] J-S Pei, AW Smyth, and EB Kosmatopoulos. Analysis and modification of
volterra/wiener neural networks for the adaptive identification of non-linear hysteretic
dynamic systems. Journal of Sound and Vibration, 275(3-5):693–718, 2004.
[15] Chiung-Shiann Huang, Shih-Lin Hung, CM Wen, and TT Tu. A neural network
approach for structural identification and diagnosis of a building from seismic response
data. Earthquake engineering & structural dynamics, 32(2):187–206, 2003.
[16] YC Liang, DP Feng, and JE Cooper. Identification of restoring forces in non
linear vibration systems using fuzzy adaptive neural networks. Journal of sound and
vibration, 242(1):47–58, 2001.
[17] Rodolphe Le Riche, David Gualandris, Jean Jacques Thomas, and F Hemez. Neural
identification of non-linear dynamic structures. Journal of Sound and vibration, 248
(2):247–265, 2001.
[18] Nikos D Lagaros and Manolis Papadrakakis. Neural network based prediction schemes
of the non-linear seismic response of 3d buildings. Advances in Engineering Software,
44(1):92–115, 2012.
[19] CV Vaidyanathan, P Kamatchi, and R Ravichandran. Artificial neural networks for
predicting the response of structural systems with viscoelastic dampers. Computer
Aided Civil and Infrastructure Engineering, 20(4):294–302, 2005.
S. Biswas et al.: Preprint submitted to Elsevier Page 30 of 35

phyulstm
[20] Taeyong Kim, Oh-Sung Kwon, and Junho Song. Response prediction of nonlinear
hysteretic systems by deep neural networks. Neural Networks, 111:1–10, 2019.
[21] Taeyong Kim, Junho Song, and Oh-Sung Kwon. Probabilistic evaluation of seismic
responses using deep learning method. Structural Safety, 84:101913, 2020.
[22] Ruiyang Zhang, Zhao Chen, Su Chen, Jingwei Zheng, Oral Büyüköztürk, and Hao
Sun. Deep long short-term memory networks for nonlinear structural seismic response
prediction. Computers & Structures, 220:55–68, 2019.
[23] Rih-Teng Wu and Mohammad R Jahanshahi. Deep convolutional neural network
for structural dynamic response estimation and system identification. Journal of
Engineering Mechanics, 145(1):04018125, 2019.
[24] Alex Graves and Alex Graves. Long short-term memory. Supervised sequence
labelling with recurrent neural networks, pages 37–45, 2012.
[25] Shaojie Bai, J Zico Kolter, and Vladlen Koltun. An empirical evaluation of
generic convolutional and recurrent networks for sequence modeling. arXiv preprint
arXiv:1803.01271, 2018.
[26] Aaron van den Oord, Sander Dieleman, Heiga Zen, Karen Simonyan, Oriol Vinyals,
Alex Graves, Nal Kalchbrenner, Andrew Senior, and Koray Kavukcuoglu. Wavenet: A
generative model for raw audio. arXiv preprint arXiv:1609.03499, 2016.
[27] Jordan J Bird, Jhonatan Kobylarz, Diego R Faria, Anikó Ekárt, and Eduardo P Ribeiro.
Cross-domain mlp and cnn transfer learning for biological signal processing: Eeg and
emg. IEEE Access, 8:54789–54801, 2020.
[28] Zhiyi Tang, Zhicheng Chen, Yuequan Bao, and Hui Li. Convolutional neural network
based data anomaly detection method using multiple information for structural health
monitoring. Structural Control and Health Monitoring, 26(1):e2296, 2019.
S. Biswas et al.: Preprint submitted to Elsevier Page 31 of 35

phyulstm
[29] William Danilczyk, Yan Lindsay Sun, and Haibo He. Smart grid anomaly detection
using a deep learning digital twin. In 2020 52nd North American Power Symposium
(NAPS), pages 1–6. IEEE, 2021.
[30] Jianfeng Zhao, Xia Mao, and Lijiang Chen. Speech emotion recognition using deep
1d & 2d cnn lstm networks. Biomedical signal processing and control, 47:312–323,
2019.
[31] Panos Pantidis and Mostafa E Mobasher. Integrated finite element neural network
(i-fenn) for non-local continuum damage mechanics. Computer Methods in Applied
Mechanics and Engineering, 404:115766, 2023.
[32] Panos Pantidis, Habiba Eldababy, Diab Abueidda, and Mostafa E Mobasher. I-fenn
with temporal convolutional networks: Expediting the load-history analysis of non
local gradient damage propagation. Computer Methods in Applied Mechanics and
Engineering, 425:116940, 2024.
[33] Ruiyang Zhang, Yang Liu, and Hao Sun. Physics-informed multi-lstm networks for
metamodeling of nonlinear structures. Computer Methods in Applied Mechanics and
Engineering, 369:113226, 2020.
[34] Ruiyang Zhang, Yang Liu, and Hao Sun. Physics-guided convolutional neural network
(phycnn) for data-driven seismic response modeling. Engineering Structures, 215:
110704, 2020.
[35] Pengfei Huang and Zhiyi Chen. Deep learning for nonlinear seismic responses
prediction of subway station. Engineering Structures, 244:112735, 2021.
[36] Huile Li, Tianyu Wang, and Gang Wu. Dynamic response prediction of vehicle-bridge
interaction system using feedforward neural network and deep long short-term memory
network. In Structures, volume 34, pages 2415–2431. Elsevier, 2021.
S. Biswas et al.: Preprint submitted to Elsevier Page 32 of 35

phyulstm
[37] Yangtao Li, Tengfei Bao, Zhixin Gao, Xiaosong Shu, Kang Zhang, Lunchen Xie, and
Zhentao Zhang. A new dam structural response estimation paradigm powered by deep
learning and transfer learning techniques. Structural Health Monitoring, 21(3):770
787, 2022.
[38] Fangyu Liu, Junlin Li, and Linbing Wang. Pi-lstm: Physics-informed long short
term memory network for structural response modeling. Engineering Structures, 292:
116500, 2023.
[39] Maziar Raissi. Deep hidden physics models: Deep learning of nonlinear partial
differential equations. Journal of Machine Learning Research, 19(25):1–24, 2018.
[40] Maziar Raissi, Paris Perdikaris, and George E Karniadakis. Physics-informed neural
networks: A deep learning framework for solving forward and inverse problems
involving nonlinear partial differential equations. Journal of Computational physics,
378:686–707, 2019.
[41] Luning Sun, Han Gao, Shaowu Pan, and Jian-Xun Wang. Surrogate modeling for fluid
flows based on physics-constrained deep learning without simulation data. Computer
Methods in Applied Mechanics and Engineering, 361:112732, 2020.
[42] Yinhao Zhu, Nicholas Zabaras, Phaedon-Stelios Koutsourelakis, and Paris Perdikaris.
Physics-constrained deep learning for high-dimensional surrogate modeling and un
certainty quantification without labeled data. Journal of Computational Physics, 394:
56–81, 2019.
[43] Yoshua Bengio, Patrice Simard, and Paolo Frasconi. Learning long-term dependencies
with gradient descent is difficult. IEEE transactions on neural networks, 5(2):157–166,
1994.
S. Biswas et al.: Preprint submitted to Elsevier Page 33 of 35

phyulstm
[44] Trieu Trinh, Andrew Dai, Thang Luong, and Quoc Le. Learning longer-term dependen
cies in rnns with auxiliary losses. In International Conference on Machine Learning,
pages 4965–4974. PMLR, 2018.
[45] Po-Chih Kuo, Yuan-Tung Chou, Kuang-Yao Li, Wei-Tze Chang, Yin-Nan Huang, and
Chuin-Shan Chen. Gnn-lstm-based fusion model for structural dynamic responses
prediction. Engineering Structures, 306:117733, 2024.
[46] Laurenz Wiskott and Terrence J Sejnowski. Slow feature analysis: Unsupervised
learning of invariances. Neural computation, 14(4):715–770, 2002.
[47] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. U-net: Convolutional networks
for biomedical image segmentation. In Medical image computing and computer
assisted intervention–MICCAI 2015: 18th international conference, Munich, Germany,
October 5-9, 2015, proceedings, part III 18, pages 234–241. Springer, 2015.
[48] Nahian Siddique, Sidike Paheding, Colin P Elkin, and Vijay Devabhaktuni. U-net and
its variants for medical image segmentation: A review of theory and applications. IEEE
access, 9:82031–82057, 2021.
[49] Getao Du, Xu Cao, Jimin Liang, Xueli Chen, and Yonghua Zhan. Medical image
segmentation based on u-net: A review. Journal of Imaging Science & Technology,
64(2), 2020.
[50] Daniel Stoller, Mi Tian, Sebastian Ewert, and Simon Dixon. Seq-u-net: A one
dimensional causal u-net for efficient sequence modelling, 2019. URL https://
arxiv.org/abs/1911.06393.
[51] François Chollet et al. Keras: The python deep learning library. Astrophysics source
code library, pages ascl–1806, 2018.
S. Biswas et al.: Preprint submitted to Elsevier Page 34 of 35

phyulstm
[52] Brian Chiou, Robert Darragh, Nick Gregor, and Walter Silva. Nga project strong
motion database. Earthquake Spectra, 24(1):23–44, 2008.
[53] H Haddadi, A Shakal, M Huang, J Parrish, C Stephens, W Savage, and W Leith. Report
on progress at the center for engineering strong motion data (cesmd). In The 15th world
conference on earthquake engineering. Lisbon, Portugal, pages 24–28, 2012.
S. Biswas et al.: Preprint submitted to Elsevier Page 35 of 35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:35.678Z
- **Text Length:** 61670 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 37 of 37
