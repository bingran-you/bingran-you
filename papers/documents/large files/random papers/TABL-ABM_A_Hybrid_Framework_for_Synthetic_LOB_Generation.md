# PDF Document: Olby et al. - 2025 - TABL-ABM A Hybrid Framework for Synthetic LOB Generation.pdf

**File Path:** Olby et al. - 2025 - TABL-ABM A Hybrid Framework for Synthetic LOB Generation.pdf

**Processed Date:** 2026-02-10T18:14:18.066Z

**File Size:** 2699.46 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3582

**Title:** TABL-ABM: A Hybrid Framework for Synthetic LOB Generation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

TABL-ABM: A Hybrid Framework for Synthetic LOB Generation
Ollie Olby1, Rory Baggott1 and Namid Stillman1,*
1Simudyne London, UK
Abstract. The recent application of deep learning models to financial trading has heightened the need for high fidelity financial time series data. This synthetic data can be used to supplement historical data to train large trading models. The state-of-the-art models for the generative application often rely on huge amounts of historical data and large, complicated models. These models range from autoregressive and diffusion-based models through to architecturally simpler models such as the tempo-
ral-attention bilinear layer. Agent-based approaches to modelling limit order book dynamics can also recreate trading activity through mechanistic models of trader behaviours. In this work, we demonstrate how a popular agent-based framework for simulating intraday trading activity, the Chiarella model, can be combined with one of the most performant deep learning models for forecasting multi-variate time series, the TABL model. This forecasting model is coupled to a simulation of a matching engine-
 with a novel method for simulating deleted order flow. Our simulator gives us the ability to test the generative abilities of the forecasting model using stylised facts. Our results show that this methodology generates realistic price dynamics however, when analysing deeper, parts of the markets microstructure are not accurately recreated, highlighting the necessity for including more sophisticated agent behaviors into the modeling framework to help account for tail events.
Keywords: limit order book model, hybrid model, agent-based model, synthetic order flow
1 Introduction
Financial time series forecasting has had recent boosts in accuracy driven by improvements in deep learning, availability of larger datasets and more powerful compute resources [1, 2]. Financial time series forecasting is a valuable tool, where accurate predictions of price movements can have significant financial implications [3]. Limit Order Books (LOBs) are the primary way in which traders interact with the market [4]. LOBs are queues of limit orders to be executed. The prioritization of the qu-
eue is determined by the exchange’s protocols. For example, a common protocol is the pricetime priority system [5], where limit orders with the most favorable prices are prioritized, and orders at the same price level are ranked by their time of placement, with earlier orders receiving higher priority. Limit orders are important to traders as it ensures that the trader has control over the price they pay for an asset, as opposed to market orders where the price is determined by the current market -
condition.
∗ Email: namid@simudyne.com
Figure 1: High level diagram showing how deep learning and agentbased modeling work together to produce synthetic LOB data.
Most forecasting models focus on predicting subsequent midprices, but to fully capture LOB dynamics, the next order or event must be predicted. This is because limit orders often arrive away from the best bid or ask, contributing to deeper liquidity. Reproducing the order flow is therefore more essential than simply forecasting the next mid-price for generating LOB dynamics. A key aspect of order flow forecasting, involves predicting various features beyond price, such as the size, and rate of ord-
ers. To do this, we built a multivariate forecasting model which predicts the state of the next order in the sequence. One application for this technology would be to allow funds to rehearse their execution strategies on simulated data. Data generated from rare events such as the 2008 financial crash or COVID-19 pandemic could be used to train deep learning trading models to perform under these extreme conditions. These generative models will also be reactive to trades made by a trader and so can -
be used to predict the market impact of an execution strategy. Alongside deep learning methods of predicting LOB dynamics, agent-based modeling frameworks have also been employed for generating synthetic high frequency LOB data. One such framework is the extended Chiarella model [6]. It models traders as one of three types: fundamentalists, chartists, and noise traders. These traders can be calibrated to replicate empirical distributions, enabling realistic market behaviours [7]. This paper propos-
es a novel strategy that combines state-of-theart deep learning models and agent-based models to create synthetic LOB data. The model design is outlined in Figure 1.
arXiv:2510.22685v1 [q-fin.CP] 26 Oct 2025

2 Related Work
Generating synthetic financial data is a large active area of research where the central challenge is to create synthetic data with sufficient accuracy for practical applications. Many of the most performant deep learning models at this task are auto-regressive models, such as recurrent neural networks (RNNs), long short-term memory networks (LSTM) [8], and gated recurrent unit networks (GRUs), among others [9]. For a comprehensive review of deep learning models applied to forecasting time series,-
 see [10]. While these models have shown strong empirical performance, they are often criticized for their lack of interpretability and are frequently treated as "black boxes", limiting their practical use in high-stakes financial decisionmaking. One of the most impressive architectures of recent years is the transformer model and recent research has considered how these will perform at financial time series forecasting [11]. Zeng et al. proposed a hybrid CNN-transformer model to help capture both-
 the short and the long-term dependencies of the limit order book (LOB) [12]. Alternatively, Emami et al. proposed a modality-aware transformer for financial time series prediction. This allows the model to incorporate both feature-level attention and temporal attention [13]. This modality-aware model is especially promising in multi-modal data settings. Costa et al. demonstrated that transformer models can outperform LSTMs for financial time series forecasting [14], due to transformers’ superior -
memory capacity. Forecasting models focus on trend prediction and lack the ability to generate the full multivariate structure of the LOB. They typically predict price movements, rather than the underlying order flow or market state transitions. One model suggested by Dong et al. aims to encode the current state of a time series into tokens [15]. This leads to a more accurate state generation. Nagy et al. developed an autoregressive model using microstructure tokenisation for LOB prediction [11], -
showing promising scalability with intraday data. Huang et al. proposed a diffusion model for capturing the dynamics of the market state [16], incorporating a meta-agent to generate realistic order flows. Similarly, Li et al. introduced the Large Market Model, which supports controllable order generation and is designed as a comprehensive market simulation and agent-training environment [17]. A key family of models that bridge forecasting and efficiency are the Temporal Attention Bilinear Layer (T-
ABL) models introduced by Tran et al. [18], and later extended with bilinear normalisation [19]. TABL models offer state-of-the-art results with simple architectures that remain computationally efficient. In this work, we take the TABL approach to forecasting prices and integrate it with an agent-based model to generate synthetic LOB data. In the process, we demonstrate that the combination of relatively simple deep learning models and traditional simulation techniques, can achieve high fidelity d-
ata generation.
3 Background
3.1 Limit Order Books
Limit order books (LOBs) are central to the trading world as they allow for the prioritisation and matching of orders to buy or sell a specific volume of an asset. LOBs are a queue of all the limit orders that have been placed on a particular asset, the orders which are most favourable are called the best bid and best ask price and are placed at the front of the queue, while the difference between these best orders is known as the bid/ask spread. The bid/ask spread is a commonly-used measure of li-
quidity in financial markets, where
it reflects the ease of trading and can serve as a proxy for market stability [20]. A higher spread implies a large disparity between the buy and sell prices, which indicates an unstable market, whereas a smaller spread implies relative agreement about price, and a stable market. Limit orders are orders that are placed at a specific price and volume, such that the trader can be in control of the price point they want to trade at. Limit orders are characterised by price, volume and direction (bid/a-
sk). Market orders are orders which effectively have a duration of zero, and don’t ever populate the LOB. These are categorised by volume and direction only, as they are always placed at best ask and best bid price. Limit orders that cross the spread are treated as market orders because they match existing orders and execute immediately, without entering the LOB. Orders in the LOB are normally matched via a price-time priority (although this is dependent on which exchange is being used). This mean-
s that price is the main priority, i.e. the better priced orders will be matched first. If two orders are placed at the same price, then the priority of matching comes down to who placed the order first.
3.2 Stylised Facts
Stylised Facts, are a collection of features which have been shown to exist in most financial time series [21]. They are used as metrics to assess the fidelity of the simulation. The main facts analysed in this paper are:
• Autocorrelation of returns Autocorrelation is a measure of how similar a series is with its lagged version. It is observed that the autocorrelation of returns is weak. This is because returns do not exhibit strong memory (past price movements do not dictate future ones). • Buy/sell autocorrelation Buy/sell autocorrelation is observed to decay as a power law, due to the long-term persistence in the direction of orders. • Volatility clustering Volatility clustering is measured by examining the aut-
ocorrelation of absolute returns. Financial returns exhibit volatility clustering, where periods of high volatility will be followed by high volatility and vice versa. This means we should observe a slow decay in the autocorrelation of the absolute returns. • Fat tailed distribution The return distributions in financial time series are characterized by fat tails. Therefore, the series should exhibit a high level of kurtosis. The extent of accuracy for this stylised fact can be determined by compar-
ing the Hill index for the distribution of returns.
3.3 Agent-Based Model
The extended Chiarella model is an agent-based modelling framework for modeling market dynamics [6]. There are three types of agents considered: fundamental, momentum, and noise traders.
• The fundamental trader makes trading decisions based on the price differential between the mid-price (pt) and the fundamental price (vt). • The momentum trader bases their decisions on current market trends, such as the direction and timing of price movements, aiming to take advantage of these trends. • The noise trader generates uncorrelated trading decisions and reflects both market features that aren’t captured by this simplified model as well as uncertainty within the market.

Each trader’s behaviour is governed by a simple equation. The fundamentalist is characterised as
Dfundamental = κ (vt − pt) (1)
where κ is a calibrated parameter. The fundamental price of the asset (vt) is modelled as a Geometric Brownian Motion where the mean and standard deviation are fitted to the empirical price path. The momentum trader places orders according to the strength of the momentum signal
Mt = (1 − α)Mt−1 + α(pt − pt−1) (2)
where α is the decay rate and Mt is the momentum signal. From this the demand from the momentum trader can be found
Dmomentum = β tanh (γMt) (3)
where Dmomentum is the demand from the momentum trader, β is a parameter that determines the strength of the momentum trader and γ is a parameter which describes the saturation of the momentum signal and is calibrated. Finally, the noise trader is modelled by a simple Gaussian distribution. The noise trader is shown by
Dnoise ∼ N (0, σN ) (4)
where Dnoise is the demand from the noise traders, σN is the standard deviation and N denotes a normal distribution. The overall demand can be given as:
Doverall = Df ∆T + Dm + Dnoise
√
∆T (5)
where ∆T is the change in time between orders.
4 TABL-ABM
To accurately recreate the order flow, three architecturally similar models were developed. The first model was designed as a binary classifier to predict the type of order, either a limit order or a market order. Based on this prediction, the logic then branches to either the limit order model or the market order model. The limit order model predicts both the size and price of the order, while the market order model predicts only the size, this is shown in Figure 1. These three models are designe-
d as an extension of the work done by Tran et al. on the Temporal Attention Augmented Bilinear Layer (TABL) framework [18] which has been shown by a recent benchmarking study to have state-of-the-art accuracy and computational efficiency when compared with other models [10]. The TABL is extended to perform a multivariate prediction task alongside an ABM. The TABL model combines bilinear layers and an attention mask to help capture relevant dynamics for LOB forecasting. In the next section we outli-
ne how this forecasting model can be used for synthetic LOB generation.
4.1 Model Layers
Bilinear layers are a special type of neural network (NN), that takes two different input vectors and learns the interactions between the two to generate a suitable output. This lets the model capture interactions between two dimensions at the same time. In our example, this facilitates the model to learn the interactions between both the temporal and feature dimensions simultaneously. This is particularly
beneficial for financial data, where modeling the way the features interact with the temporal dimension is useful for generating accurate predictions. Bilinear layers are built using linear transformations and are easier to analyse than standard multi-layer perceptron (MLPs). This drop in relative complexity does not equate to a drop in performance, and bilinear layers will often outperform an MLP of the same size [22]. A bilinear layer learns interactions between two input dimensions. They multip-
ly two input vectors and learn a weight for each pairwise interaction. The mapping for which is expressed as
Y = φ(W1XW2 + B) (6)
where Y is the output of the bilinear layer, φ is a non-linear activation function such as ReLU, sigmoid, or tanh, X is the input, W1 and W2 are learnable weight matrices and B is a learnable bias matrix. To aid interpretability and performance the TABL model uses an attention layer. The attention layer assigns varying importance to different time instances to determine which points in time are most relevant for the prediction task. It uses a learned matrix to weight the temporal dependencies whic-
h is applied to an attention mask that emphasises the important time steps.
4.2 TABL Model
In order to build a realistic model of order flow, we combine a bilinear normalisation TABL (BiNTABL) module and a TABL module. The BiNTABL module processes the book data to extract insights into the microstructure of the LOB. These insights are then concatenated with the order flow from the message data and passed through the TABL module to produce the next order state. The BiN layer performs normalisation along both the temporal and feature dimensions, allowing the model to generalise better and-
 also standardise the input data. The whole model layout is shown in Figure 2 and the architecture of the model can be seen in the paper by Tran et al. [19].
4.3 Agent-Based Model
The Chiarella model is designed to capture the overall demand of traders by incorporating momentum, fundamental value, and noisedriven behaviours, which are common components of real-world trading. In this framework, the sign of the demand reflects the likely direction of the next order: a positive demand suggests a buy order, while a negative demand implies a sell. By leveraging this structure, we use the Chiarella model to statistically infer the direction of the next order under the assumption -
that traders act according to these dynamics. This framework also anchors the model to a fundamental price, thereby preventing it from diverging into out-of-distribution values that the TABL architecture may not be well-equipped to handle. This separation of roles within the model allows us to combine the strengths of both behavioural (agent-based) finance and machine learning. The Chiarella model introduces a framework that is more grounded in financial behaviours than purely data-driven AI model-
s. In contrast, the machine learning model is tasked with generating the price, size, and type (market vs. limit). These characteristics are often shaped by short-term market microstructure, for which data-driven approaches are highly effective. By combining deep learning and ABM, we enable better predictive abilities when the generated paths deviate from the historical data. This is especially key when building a model using a small amount of data.

Figure 2: Model architecture schematic. LOB data is processed by a BiNTABL model, and its output is concatenated with message data before being passed to a TABL model for final prediction.
5 Simulated Matching Engine
We propose a simulated matching engine designed to perform two tasks. The first task is to correctly queue limit orders and match any market orders. The second task is to model the deletion of orders. This is used to assess the fidelity of the deep learning model in its ability to create realistic order flow. There are several limitations to the matching engine. First, it operates in event time rather than clock time, meaning it does not model real-world temporal intervals between events. Second, -
in rare instances where multiple orders are deleted simultaneously or a large market order results in the execution of many resting orders, the matching engine imposes constraints on the order book depth. It maintains a maximum depth of 25 levels and a minimum depth of 10 levels. When the depth falls below this threshold, noise orders are introduced to restore the depth, positioned between 5 and 10 ticks away from the furthest existing price level.
5.1 Deleted Orders
To reproduce deleted orders, a per time step probability of deletion was determined per order. This probability is calculated based on the orders’ depth of insertion, its current depth in the limit order book and its current duration. We determine the probability that an order is at a certain depth, given that it is deleted, by
P (Depth = x | Deleted = T rue) = P (A ∩ B)
P (B) = N x
d Nd
(7)
where, event N d
x is the number of orders deleted from a certain depth and Nd is the total number of limit orders deleted. For ease of notation, A will represent the event: Deleted = True and B will represent
Depth = x. Using Bayes theorem, it is possible to find the probability that an order is deleted given its current depth.
P (A | B) = P (B | A)P (A)
P (B) (8)
P (A | B) = P (B | A) × Nd
Nt Npx Nt
(9)
where N x
p is the number of limit orders placed at a depth of x and Nt is the total number of limit orders placed. The assumption
P (Depth = x) = Nx
p
Nt is made, as this serves as a measure of relative activity at each depth. A more precise metric would involve tracking individual orders and determining the probability of their progression to a specific depth. This is very computationally heavy and involves in depth LOB data, hence we use this simplifying assumption. Given the probability that an order will be deleted for its current depth, the per time step probability needed to be found. The probability of an order being deleted can be repres-
ented as a conditional probability tree with T time steps, where the probability of deletion at each event step is Pe. The probability can be calculated as the complement of the probability of the order not being deleted throughout all T steps.
P (A | B) = 1 − (1 − Pe)T (10)
The per time step probability Pe is then
Pe = 1 − (1 − P (A | B))1/(T0−Tt) (11)
The total duration, T0, of the order is estimated empirically from its insertion depth. Then, as the order moves through the LOB the probability changes according to equation 11. After each event all probabilities are updated to reflect the current duration of each order in events, Tt. The probabilities are then given a small scaling factor to help match the empirical results directly. Hence, the duration of an order is a function of the depth at which it is placed, its current depth in the LOB an-
d how long it has been in the LOB (current duration), given by
P (Deletion) = f (Depthi, Deptht, Tt) (12)
where Depthi is the insertion depth, Deptht is the current depth and Tt is how long the order has been in the LOB in time steps. This value is then used to calculate the per event probability (Pe) for each event step. This calculation is repeated at each event, as P (Deleted = True | Depth = x) changes dynamically with the current position of the order (x) in the LOB and the current duration for each order (Tt). The per event probability, Pt, is evaluated at each event. A random number is drawn fr-
om a uniform distribution over [0,1], and the order is deleted if the random number is less than Pt.
6 Methodology
In this section we explain how the data and TABL-ABM model is set up and trained before being tested in the simulator to assess its performance in replicating stylised facts.
6.1 Data and Preprocessing
In this work, we use the LOBSTER sample limit order book data [23]. The data consists of both order book files and message files for 5 different symbols (MSFT, AAPL, GOOG, INTC, AMZN). The

Figure 3: Cumulative order deletion rate over simulated and historical events.
message data is in the form: time stamp, event type, order ID, size, price, direction. For this project we used the level 10 orderbook data from Apple (AAPL). Market orders are not shown in the messages of the LOB as the orders never enter the LOB. Therefore, they have to be inferred from the execution of limit orders on the opposite side of the book. We can be reasonably confident about aggregating consecutive executions of limit orders into larger market orders as the executions occur at the sam-
e time stamp and have the same direction. An additional feature added to the message data is the signed contributions to the limit order book. It is defined as [24]
en = qn
b I{P n
b ≥ P n−1
b } − qn−1
b I{P n
b ≤ P n−1
b}
− qn
s I{P n
s ≤ P n−1
s } + qn−1
s I{P n
s ≥ P n−1
s } (13)
where q is the volume and P is the price. This feature, denoted as en, is a measure of order flow imbalance (OFI) at a per order resolution, by accounting for both direction and magnitude of changes to bid/ask prices and volumes. It provides the model with insight into the current microstructure of the LOB, this insight helps the model to predict the state of the next order [25]. The data is divided into three distinct subsets. The first includes all orders, combining both limit and market orders.-
 The second contains only market orders, and the third consists solely of limit orders. Three separate models are then trained using the same architecture shown in Figure 2. The first model, trained on the full dataset, is a binary classifier that predicts the order type (market or limit). The second model, trained on the market order subset, focuses on market orders and predicts the order size. The third model, trained on the limit order subset, handles limit orders and is a multi-class classifie-
r that predicts both the size and price level of the order. The labels used for each subset are defined as follows. For the full dataset, the label is binary, 1 for market orders and 0 for limit orders. In the limit order subset, the model predicts two targets: order size and price distance, where price distance refers to the difference between the order’s price and the current best bid or ask (i.e., the touch line). Both features are discretised into classes: size is divided into 20 bins, and pri-
ce distance into 40 bins. These bins are constructed to cover 80% of the data for size and 90% for price distance, ensuring the model focuses on the most frequently occurring values. The bins are not evenly spaced, they are designed to reflect the non-uniformity of financial markets. For the market order subset, the label is limited to order size, and the same 20-class binning strategy used for limit orders is applied. Finally, each subset of data was reshaped so that each instance contained the l-
ast 500 events. This was then resampled into training, validation, and testing datasets in the following percentages: 64%, 16% and 20% respectively. A min/max scaler was applied to the data to help regularise the weights during training.
6.2 Training and Model Parameter Set Up
The model uses a learning rate scheduler which reduces the learning rate by a factor of 0.1 when the model has plateaued for 5 epochs. Checkpointing and early stopping are used, such that if the validation loss does not improve for 10 epochs, training is halted and the model reverts to the version with the lowest recorded validation loss. A dropout strength of 0.3 was included to help reduce the effects of overfitting. For the limit and market order models, the loss function used was a focal loss -
with a gamma of 2, this was chosen to help limit the effects of class imbalance. The order type model was formulated as a binary classification task, with a positive class weight of 2 to address class imbalance.
6.3 ABM Calibration
The extended Chiarella model required calibrating to the asset and day in question. The fundamental value (vt) is modeled as a Geometric Brownian Motion with μ equal to the average historical price and σ is equal to the average volatility of the historical data. The decay rate for the momentum traders α is fixed as α = 1/(1 + τ ) where τ is equal to the look back period for the momentum signal [26]. Here, α was fixed as α = 1/(1+h), where h is the typical horizon of trend computation which is deci-
ded to be 1 day, which gives α = 0.5 [7]. γ is also fixed as γ−1 = 2σ where σ is the standard deviation of the momentum signal (Mt). The following parameters were calibrated using a grid search to minimise a loss function based on the stylised facts (β, κ, σN , γ).
L(θ) = |Hsim − Hhist| + |σsim − σhist| + |Ksim − Khist|
+
9
X
i=1
ρ(r)
sim (i) − ρ(r)
hist (i)
+
9
X
i=1
ρ(r2 )
sim (i) − ρ(r2)
hist (i)
(14)
where L is the loss function, H is the Hill index, σ is the standard deviation of returns, ρ(r)(i) is the autocorrelation of returns at lag i, ρ(r2)(i) is the autocorrelation of squared returns at lag i and K is the kurtosis of the signal. Equation 5 shows how these values can be converted into a demand. If the demand is positive the order will be a buy and if the demand is negative then the order is a sell.
6.4 Simulated Matching Engine
A matching engine is used to test the efficacy of the TABL-ABM model by using stylised facts as the main performance metric. The engine works in tandem with the TABL-ABM whereby the TABLABM model produces the next order in the sequence based on the current and previous state of the LOB. This order is then executed using the simulated matching engine. If the order is a market order then limit orders on the opposite side of the book are liquidated to match the volume of the market order. If the orde-
r is a limit order then the order will join the queue as per the LOB queuing protocol used (in this case a price-time priority). Once the new orders have been added, the matching engine has the opportunity to delete any orders based on empirical statistics as shown in Section 5.1. The LOB is then updated and then passed to the TABL-ABM to get the next order in the sequence.

(a) Historical and Monte Carlo simulation mid-price paths. (b) Demonstrating market impact
Figure 4: Market simulation results showing (a) Monte Carlo simulations of mid-price paths compared to historical data, where we display fifty simulated mid-price trajectories generated by the model, overlaid with the historical mid-price of Apple (21/6/2012). In (b), we show the market impact of a large order, shown by mid-price paths from fifty simulations, where twenty-five have a large market order and twenty-five stochastic realisations of the baseline scenario. A red dashed vertical line sho-
ws the moment at which a large order is introduced.
7 Results and Discussion
First, we assess the order deletion rate to check if our framework for modeling deleted orders, as proposed in this paper, is effective at reproducing empirical dynamics. Figure 3 shows how the empirical and simulated order deletion rates change over time. It can be seen from both historical and simulated that the rate is more volatile at the start of the day, and that this volatility then subsides to where the deletion rate reaches a stable level of roughly 0.4 deletions per event. This plot high-
lights how the simulated order flow reproduces the historical deletion rates and supports our novel deletion methodology as a viable solution to introducing order deletions into simulated limit order book dynamics. We next look into our models ability to reproduce realistic price paths. Figure 4a shows the generated mid-price path for 50 Monte Carlo runs over 10,000 simulated events. These paths illustrate the model’s ability to capture key features of the market, such as the volatility and mean-r-
everting behaviour. These realistic trajectories support the model’s validity as a tool for simulating financial markets. To further explore the usefulness of our model, we conduct a counterfactual market impact experiment, shown in Figure 4b. This figure highlights how the simulated market initially responds with a sharp price movement. This is followed by a gradual reversion toward the original price trajectory, indicating a degree of market resilience or recovery once the imbalance subsides. Th-
is behavior is consistent with empirical observations in financial markets. This supports the potential use of the model in stress testing and in the design of execution algorithms. To assess the fidelity of the price paths, we compute several stylised facts, commonly observed in real markets. Figure 5a compares the autocorrelations of buy/sell indicators, returns, and absolute returns between the simulated and empirical datasets. The expected behaviour for the bid/ask indicators autocorrelation i-
s that the correlation decreases as a power law due to the observed direction persistence in the market. The model uses the Chiarella model to determine the direction, due to this being influenced by noise traders, the model has less persistence of the direction of orders at higher lags. It is possible that this can be improved by calibrating the Chiarella model not for minimising Equation 14 but for the order flow direction generation.
It is expected that there is almost no autocorrelation with the returns. This is observed in the results from the model and the results are well matched to the historical levels. This shows that the model is aligning well with the efficient market hypothesis, meaning the model’s prices are sufficiently unpredictable in the short term. The last autocorrelation analysed is the absolute returns autocorrelations. This is a measure of volatility clustering, we expect to see that there is a correlation -
in the absolute returns at longer lags. We observe a similar decay pattern to the empirical volatility clustering, however, we do not see similar levels to the historical at longer lags. This shows that our model does exhibit short term volatility memory but lacks persistence. Finally, the distributions of price fluctuations is examined using the Hill index, a statistical measure used to quantify the heaviness of the tails in a distribution. A smaller Hill index indicates fatter tails, implying a -
higher likelihood of extreme returns. The empirical Hill index of 0.27 points to a pronounced heavy-tailed behavior in the historical data. In contrast, the simulated mid-price returns yield a Hill index of 0.49, indicating that the simulation produces lighter tails than those observed empirically. These discrepancies prompted a closer investigation into the underlying microstructure of our model, which we examine in Figure 5b. This figure shows how the historic and simulated LOB dynamics differ a-
nd helps to see the limitations of the model. It is observed that the spread is wider and more diverse than the historic. However the key observation is that the spread and mid-price change more gradually in the simulator and the simulator is not prone to instantaneous jumps from either the best bid or best ask price. These jumps can be seen in Figure 5b where we see very aggressive, but likely small volume, limit orders being placed far across the spread, these are then quickly deleted or execute-
d and the spread jumps back immediately. These events cause very fast and large changes to the mid-price. The events are not adequately recreated in the model and could explain why the simulation experiences a lighter tail than the historical data. The lack of persistence in volatility clustering can also be explained by the microstructure deficiencies. Without the stabilising presence of liquidity providers, the spread is more volatile and less stable. This makes sustained volatility patterns obs-
erved in real markets difficult to reproduce. This unstable microstructure fails to generate the longer-term volatility memory that characterises empirical financial data.

(a) Comparison of autocorrelations. (b) Comparison of order book levels.
Figure 5: Validation of simulation fidelity showing (a) autocorrelation between historical and simulated data for buy/sell indicators, returns, and absolute returns and (b) comparison of order book level dynamics between simulated and historical data, showing the top three bid and ask levels over time for both the historical and simulated environment. Best bid and ask prices are shown with stronger line weights, while deeper levels are faded for clarity. The plot begins shortly after the opening a-
uction to exclude early-day volatility.
Despite the promising alignment of some stylised facts, these metrics alone do not fully reflect the true quality or realism of the simulated market. While our model is successful in generating plausible price paths and shock reactions, closer inspection reveals structural differences in the price dynamics that a more comprehensive analysis of stylised facts would likely help to diagnose. This will be the topic of future work.
8 Conclusion
In this work, we have shown how the combination of the proposed TABL-ABM model and a simulated matching engine produces realistic, synthetic order flow. The realism of the data is validated by comparing the resulting mid-price path to established stylized facts. This is made possible through a novel agent-based modeling (ABM) approach for simulating order direction, along with the statistical modeling of order deletions within the simulator. Despite the qualitatively strong results and support for-
 some stylised facts, some key parts of the market microstructure are not well replicated. This emphasises the need for more robust and comprehensive evaluation methods to assess the fidelity of synthetic LOB data, which will be the topic of future work.
References
[1] Cheng Zhang, Nilam Nur Amir Sjarif, and Roslina Ibrahim. Deep learning models for price forecasting of financial time series: A review of recent advancements: 2020–2022. WIREs Data Mining and Knowledge Discovery, 14(1):e1519, 2024. doi: https://doi.org/10. 1002/widm.1519. URL https://wires.onlinelibrary.wiley.com/doi/abs/ 10.1002/widm.1519. [2] Litton Jose Kurisinkel, Pruthwik Mishra, and Yue Zhang. Text2timeseries: Enhancing financial forecasting through time series prediction updates with ev-
ent-driven insights from large language models, 2024. URL https://arxiv.org/abs/2407.03689. [3] Predicting stock price trends based on financial news articles and using a novel twin support vector machine with fuzzy hyperplane. Applied Soft Computing, 98:106806, 2021. ISSN 1568-4946. doi: https://doi. org/10.1016/j.asoc.2020.106806. URL https://www.sciencedirect.com/ science/article/pii/S1568494620307444. [4] Martin D. Gould, Mason A. Porter, Stacy Williams, Mark McDonald, Daniel J. Fenn, and Sam -
D. Howison. Limit order books. Quantita
tive Finance, 13(11):1709–1742, 2013. doi: 10.1080/14697688.2013. 803148. URL https://doi.org/10.1080/14697688.2013.803148. [5] James J. Angel and Daniel G. Weaver. Priority rules! 11 1998. Available at SSRN: https://ssrn.com/abstract=169274 or http://dx.doi.org/10. 2139/ssrn.169274. [6] Carl Chiarella, Giulia Iori, and Josep Perelló. The impact of heterogeneous trading rules on the limit order book and order flows. Journal of Economic Dynamics and Control, 33(3):525–537, March 2009. ISSN 0165-188-
9. doi: 10.1016/j.jedc.2008.08.001. URL http://dx.doi.org/10. 1016/j.jedc.2008.08.001. [7] Kang Gao, Stephen Weston, Perukrishnen Vytelingum, Namid Stillman, Wayne Luk, and Ce Guo. Deeper hedging: A new agent-based model for effective deep hedging. In 4th ACM International Conference on AI in Finance, ICAIF ’23, page 270–278. ACM, November 2023. doi: 10.1145/3604237.3626913. URL http://dx.doi.org/10.1145/ 3604237.3626913. [8] Carmina Fjellström. Long short-term memory neural network for financial -
time series, 2022. URL https://arxiv.org/abs/2201.08218.
[9] E. Michael Azoff. Neural Network Time Series Forecasting of Financial Markets. John Wiley & Sons, Inc., USA, 1st edition, 1994. ISBN 0471943568. [10] Matteo Prata, Giuseppe Masi, Leonardo Berti, Viviana Arrigoni, Andrea Coletta, Irene Cannistraci, Svitlana Vyetrenko, Paola Velardi, and Novella Bartolini. Lob-based deep learning models for stock price trend prediction: A benchmark study, 2023. URL https://arxiv.org/abs/2308. 01915. [11] Peer Nagy, Sascha Frey, Silvia Sapora, Kang Li, Anisoara C-
alinescu, Stefan Zohren, and Jakob Foerster. Generative ai for end-to-end limit order book modelling: A token-level autoregressive generative model of message flow using a deep state space network, 2023. URL https: //arxiv.org/abs/2309.00638. [12] Zhen Zeng, Rachneet Kaur, Suchetha Siddagangappa, Saba Rahimi, Tucker Balch, and Manuela Veloso. Financial time series forecasting using cnn and transformer, 2023. URL https://arxiv.org/abs/2304. 04912. [13] Hajar Emami, Xuan-Hong Dang, Yousaf Shah, and -
Petros Zerfos. Modality-aware transformer for financial time series forecasting, 2024. URL https://arxiv.org/abs/2310.01232. [14] Lorenzo Dusty Costa and Alexei Manso Corrêa Machado. Prediction of stock price time series using transformers. Anais do II Brazilian Workshop on Artificial Intelligence in Finance (BWAIF 2023), 2023. URL https://api.semanticscholar.org/CorpusID:260051407. [15] Jiaxiang Dong, Haixu Wu, Yuxuan Wang, Li Zhang, Jianmin Wang, and Mingsheng Long. Metadata matters for time ser-
ies: Informative forecasting with transformers, 2024. URL https://arxiv.org/abs/2410. 03806. [16] Yu-Hao Huang, Chang Xu, Yang Liu, Weiqing Liu, Wu-Jun Li, and Jiang Bian. Controllable financial market generation with diffusion guided meta agent, 2024. URL https://arxiv.org/abs/2408.12991.

[17] Junjie Li, Yang Liu, Weiqing Liu, Shikai Fang, Lewen Wang, Chang Xu, and Jiang Bian. Mars: a financial market simulation engine powered by generative foundation model, 2024. URL https://arxiv.org/abs/2409. 07486. [18] Dat Thanh Tran, Alexandros Iosifidis, Juho Kanniainen, and Moncef Gabbouj. Temporal attention-augmented bilinear network for financial time-series data analysis. IEEE Transactions on Neural Networks and Learning Systems, 30(5):1407–1418, May 2019. ISSN 2162-2388. doi: 10.1109/t-
nnls.2018.2869225. URL http://dx.doi.org/10.1109/TNNLS. 2018.2869225. [19] Dat Thanh Tran, Juho Kanniainen, Moncef Gabbouj, and Alexandros Iosifidis. Data normalization for bilinear structures in high-frequency financial time-series, 2020. URL https://arxiv.org/abs/2003.00598. [20] William R Nelson and Roberto Perli. Selected indicators of financial stability. Risk Measurement and Systemic Risk, 4:343–372, 2007.
[21] Svitlana Vyetrenko, David Byrd, Nick Petosa, Mahmoud Mahfouz, Danial Dervovic, Manuela Veloso, and Tucker Hybinette Balch. Get real: Realism metrics for robust limit order book market simulations, 2019. URL https://arxiv.org/abs/1912.04941. [22] Lee Sharkey. A technical note on bilinear layers for interpretability, 2023. URL https://arxiv.org/abs/2305.03452. [23] R. Huang and T. Polak. LOBSTER: Limit order book reconstruction system, technical documentation. https://lobsterdata.com/info/ Data-
Samples.php, 2011. Accessed: YYYY-MM-DD. [24] R. Cont, A. Kukanov, and S. Stoikov. The price impact of order book events. Journal of Financial Econometrics, 12(1):47–88, June 2013. ISSN 1479-8417. doi: 10.1093/jjfinec/nbt003. URL http://dx.doi.org/ 10.1093/jjfinec/nbt003. [25] Aditya Nittur Anantha and Shashi Jain. Forecasting high frequency order flow imbalance, 2024. URL https://arxiv.org/abs/2408.03594. [26] Adam Majewski, Stefano Ciliberti, and Jean-Philippe Bouchaud. Coexistence of trend and -
value in financial markets: Estimating an extended chiarella model, 2018. URL https://arxiv.org/abs/1807.11751.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:18.066Z
- **Text Length:** 41785 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
