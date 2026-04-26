# PDF Document: Diamantis - 2025 - The Shape of Data Topology Meets Analytics. A Practical Introduction to Topological Analytics and t.pdf

**File Path:** Diamantis - 2025 - The Shape of Data Topology Meets Analytics. A Practical Introduction to Topological Analytics and t.pdf

**Processed Date:** 2026-02-10T18:16:12.313Z

**File Size:** 5220.57 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3202

**Title:** The Shape of Data: Topology Meets Analytics. A Practical Introduction to Topological Analytics and the Stability Index (TSI) in Business

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Shape of Data: Topology Meets Analytics
A Practical Introduction to Topological Analytics and the Stability Index (TSI) in Business
Ioannis Diamantis
Department of Data Analytics and Digitalisation, Maastricht University
Maastricht, The Netherlands
i.diamantis@maastrichtuniversity.nl
Abstract
Modern business and economic datasets often exhibit nonlinear, multi-scale structures that traditional linear tools under-represent. Topological Data Analysis (TDA) offers a geometric lens for uncovering robust patterns, such as connected components, loops and voids, across scales. This paper provides an intuitive, figure-driven introduction to persistent homology and a practical, reproducible TDA pipeline for applied analysts. Through comparative case studies in consumer behavior, equity markets -
(SAX/eSAX vs. TDA) and foreign exchange dynamics, we demonstrate how topological features can reveal segmentation patterns and structural relationships beyond classical statistical methods. We discuss methodological choices regarding distance metrics, complex construction and interpretation, and we introduce the Topological Stability Index (TSI), a simple yet interpretable indicator of structural variability derived from persistence lifetimes. We conclude with practical guidelines for TDA implemen-
tation, visualization and communication in business and economic analytics.
1 Introduction: Why the Shape of Data Matters
1.1 Motivation
Over the past two decades, data analytics has become central to decision-making in business, finance and economics. Companies now record enormous amounts of information, from customer interactions and online behavior to market prices, risk indicators and supply-chain activity. Yet most analyses still rely on linear tools such as correlations, regressions or principal-component analysis (PCA). These approaches describe how variables move together but say little about the overall structure or shape -
of the data. In reality, many datasets are not flat clouds of points but have curves, clusters and cycles: consumers may form distinct yet overlapping communities; financial assets can move through repeating volatility patterns; and production networks may branch or reconnect in complex ways. Understanding these patterns requires methods that look beyond averages and straight-line relationships. Topological Data Analysis (TDA) provides such a view. It treats data as a collection of points in a spa-
ce where distances measure similarity. By gradually connecting nearby points and observing how the network of connections evolves, TDA reveals stable features; groups that remain connected, loops that persist and gaps that signal missing or redundant structure. These geometric summaries capture relationships that traditional tools overlook, while remaining interpretable in practical terms such as segmentation, seasonality or diversification.
Keywords: Topological Data Analysis, Persistent Homology, Structural Stability, Symbolic Time Series, SAX, eSAX, Business Analytics, Market Segmentation, Systemic Risk, Time Series Clustering, Geometric Data Analysis. MSC 2020: 62R40, 55N31, 91B84, 62H30, 68T09.
1
arXiv:2511.13503v1 [stat.ML] 17 Nov 2025

1.2 From Statistics to Geometry
Traditional statistical and econometric models focus on parametric inference, estimating relationships among variables under distributional assumptions. Even non-parametric or machinelearning approaches such as neural networks often obscure structure behind black-box mappings. In contrast, Topological Data Analysis (TDA) adopts a geometric viewpoint: instead of modeling variables directly, it studies the shape traced by data in a high-dimensional space. The central tool of TDA, persistent homology-
, measures how topological features appear and disappear across scales, yielding a multi-resolution summary known as a barcode or persistence diagram. These objects quantify qualitative aspects, such as connectivity, cycles and cavities, in a way that is invariant to coordinate transformations and stable under noise. This perspective has proven powerful in disciplines where structure is complex and noise pervasive. Early applications appeared in sensor networks, neuroscience, and biology [5, 9, 12-
], revealing hidden organization in genetic, neural and spatial data. More recently, TDA has entered economics and finance, where market networks, correlations and behavioral data exhibit nonlinear interdependencies. Studies have shown that persistence diagrams can detect regime changes in equity markets, structural breaks in foreign-exchange dependencies, and emergent consumer clusters that escape classical clustering or PCA [27]. However, such approaches remain under-represented in mainstream bu-
siness analytics curricula and practice, partly due to the perceived mathematical barrier and the scarcity of accessible introductions.
1.3 Why a Topological Lens for Business Analytics
Business and financial systems are characterized by feedback loops, cyclical behavior, and structural dependencies, properties naturally expressed in topological language. Markets alternate between calm and turbulent phases, supply chains oscillate between shortage and surplus, and consumer preferences evolve through recurring trends. Linear correlation captures average co-movement but cannot describe the geometry of these dynamics. For example, two markets may exhibit near-zero correlation yet fo-
rm a persistent topological loop in their joint state space, indicating a structured but phase-shifted relationship.
A topological framework provides several advantages:
• Model-agnostic structure discovery. TDA uncovers patterns directly from pairwise distances, without assuming linearity or a specific functional form.
• Multi-scale robustness. Persistence summarizes patterns that survive across scales of similarity, filtering out noise and emphasizing stable structure.
• Interpretability. Features such as the birth and death of connected components have natural economic and managerial analogies: market cohesion, regime fragmentation or the merging of consumer segments.
• Integration with existing analytics. Persistence summaries can be combined with clustering, PCA or machine-learning models as geometric features or stability indicators.
From a decision-making perspective, this geometric approach complements rather than replaces conventional analytics. It enables managers to answer questions such as: “How stable are our market clusters as we vary similarity thresholds?” or “Do consumer behaviors form cycles rather than static groups?” Such insights enrich descriptive, diagnostic and even predictive analytics.
1.4 Positioning and Contribution
This paper serves a dual purpose. First, it provides an accessible, figure-driven survey of TDA tailored to readers in data science, business analytics and finance. While the mathematical
2

foundations are well established, expository accounts often assume a level of abstraction unfamiliar to practitioners. Here, we focus on intuition and visualization: point clouds, simplicial complexes, barcodes and persistence diagrams are introduced through minimal notation and concrete examples. Second, we synthesize insights from several applied studies, including prior work on symbolic time series and consumer behavior, equity-market regimes using SAX/eSAX representations and exchange-rate de-
pendencies analyzed through topological lenses, into a unified analytical framework. Together, these examples demonstrate how topology can reveal structural information complementary to traditional statistical measures. Beyond summarizing results, we generalize them theoretically by discussing the role of distance metrics, the choice of complex and the implications of persistence for portfolio diversification and systemic risk.
1.5 Related Work and Research Gap
The mathematical foundations of TDA are documented in seminal works such as Carlsson (2009) [5], Edelsbrunner and Harer (2010) [9], and Ghrist (2008) [12], which established persistent homology as a tractable tool for exploring complex data. Over the past decade, applications have gradually extended to finance and economics [14, 10]. Studies of financial networks have used TDA to analyze correlation structures, detect crisis dynamics and model contagion paths, most notably Gidea and Katz [13], who-
 employed persistence landscapes to identify early warning signals in market data. Beyond finance, TDA has been applied to a wide range of systems, from physical and networked structures [17, 2] to biological and medical datasets [4, 8, 21], and even to large-scale information environments where topology serves as a paradigm for big-data analytics [24]. Despite these advances, applications that translate TDA concepts into the language of business and economic analytics remain limited. In particula-
r, few studies address how choices of distance metric, complex construction or persistence interpretation can be aligned with managerial or market-oriented questions. The present paper fills this gap by providing an accessible, figure-driven exposition of these methodological aspects and by illustrating their value through comparative case studies in consumer behavior, equity markets and currency co-movements.
1.6 Structure of the Paper
The remainder of this paper is organized as follows. Section 2 introduces the geometric intuition behind TDA, from data clouds and distance functions to simplicial complexes and filtrations. Section 3 explains persistent homology and its visualization through barcodes and persistence diagrams. Section 4 presents the full TDA pipeline and integration with standard analytical workflows. Section 5 compares case studies across consumer behavior, equities, and foreignexchange markets, illustrating how -
persistent features capture evolving structures. Section 6 offers theoretical and methodological reflections on distance choice, complex selection, and a proposed topological stability index linking persistence to portfolio and systemic risk. Section 7 provides practical guidelines and reporting standards, and Section 8 concludes with outlooks for future research and applications in data-driven decision making.
We apply Symbolic Aggregate approXimation (SAX) and its extension, eSAX, for discretizing time series into symbolic strings, enabling fast clustering and visual pattern comparison. SAX reduces each time series to a word representation based on mean values over fixed-length segments, while eSAX retains more structure by encoding max–min–mean sequences. For details, see [22] for SAX and [23] for eSAX.
3

2 From Data Clouds to Shapes: Building Intuition
Topological Data Analysis (TDA) begins with something deceptively simple: a collection of data points. Each observation, whether a consumer’s feature vector, a time window of stock returns, or a country’s macroeconomic indicators, can be viewed as a point in a high-dimensional space. The cloud of points formed by all such observations has a shape that reflects underlying relationships: dense regions reveal clusters of similar behavior, loops capture recurrent or cyclical patterns, and empty region-
s (or cavities) mark structural gaps in diversification or activity. Rather than imposing algebraic or parametric models, TDA studies this shape directly through geometry and connectivity, i.e. how points group and link as the notion of similarity expands.
From data to point clouds. In practice, a dataset becomes a point cloud once each observation is represented as a vector of features or measurements. For instance, a consumer profile may correspond to standardized preference scores; a stock to a time window of normalized returns or volatility; and a country to macroeconomic indicators such as GDP, inflation and trade balance. The resulting set of vectors {x1, x2, . . . , xn} ⊂ Rd forms the input for topological analysis. Different pre-processing c-
hoices, standardization, time-delay embedding or symbolic encoding, affect the geometry of this cloud and thus the topology that emerges.
2.1 Distances and Similarity Choices
Every topological analysis starts by defining how “close” two observations are. The choice of distance determines which features of the data are emphasized, and different business contexts call for different metrics. In practice, analysts can choose from several notions of distance, depending on the type of data and the relationships of interest. Below we review the most common choices; geometric, statistical, directional and temporal, highlighting when each is meaningful and where it can fail.
Euclidean distance. The most common choice, measuring straight-line difference between observations across features. It is appropriate when variables are commensurate (same scale and units), for example standardized survey responses or normalized sales indicators. However, in time-series contexts Euclidean distance can be misleading: two markets with similar shapes but shifted in phase (one lags the other) may appear far apart.
Correlation distance. Defined as dij =
√
2(1 − ρij), where ρij is the Pearson correlation between series i and j. This metric captures co-movement rather than magnitude, making it useful for financial returns or other relative signals. It automatically removes scale effects but assumes linear relationships and stationarity, conditions often violated during structural breaks or crises.
Cosine and angular distances. When data are represented as feature vectors (for example, marketing profiles or word embeddings), cosine similarity measures the angle between vectors and is insensitive to absolute magnitude. It is therefore popular in text, recommendation, and customer-segmentation analytics, where direction matters more than length.
Dynamic and symbolic distances. For sequential data, dynamic time-warping (DTW) aligns similar patterns occurring at different speeds or phases. In symbolic representations such as SAX or eSAX [22], distances are computed between symbolic strings, reflecting coarse behavioral similarity. Symbolic metrics reduce noise and dimensionality, at the cost of abstraction: small local variations may be ignored.
4

It must be highlighted that while DTW is a powerful tool, it must be noted that it is technically a pseudo-metric because it often violates the triangle inequality. This technicality does not negate its utility, but applied analysts should be aware that it affects the theoretical stability proof of the persistence diagram. Our decision to use DTW is based on its superior empirical performance in discriminating temporal patterns within our case studies, which we prioritize for the business applica-
tion.
Practical caveats. Before computing distances, analysts should consider:
• Scaling: features with different units or volatilities can dominate distances if not normalized;
• Seasonality and non-stationarity: changing variance or mean levels distort similarity; detrending or rolling-window analysis mitigates this;
• Noise sensitivity: small perturbations can affect pairwise distances; using rank-based or correlation metrics often stabilizes results.
Choosing an appropriate distance is thus the first modeling decision in TDA. The persistence diagrams that follow do not depend on how data are labeled, but they depend sensitively on how proximity is defined.
2.2 From Points to Simplicial Complexes
Once distances are defined, we connect nearby points to form higher-dimensional objects called simplices. A pair of points forms an edge (a 1-simplex), three mutually connected points form a triangle (a 2-simplex), and so on. A collection of such simplices satisfying simple intersection rules is a simplicial complex. It can be seen as a scaffold capturing how data points group and overlap.
Building blocks: simplices. A 0-simplex is a point, a 1-simplex is an edge connecting two points, a 2-simplex is a filled triangle, and a 3-simplex is a tetrahedron. By gluing such simplices along shared faces, one constructs a simplicial complex, that is, a combinatorial structure that encodes how data points interconnect across scales.
Figure 1: Simplices of increasing dimension and their assembly into a simplicial complex. These geometric building blocks form the foundation of topological data analysis.
Several constructions are common:
Vietoris–Rips complex. Connect every pair of points whose distance is below a threshold ε; include all higher-dimensional simplices whose vertices are pairwise connected. This method depends only on pairwise distances and is computationally efficient. It tends to slightly overestimate connectivity but is easy to compute for any metric space.
5

Čech complex. Imagine drawing a ball of radius ε/2 around each point and connecting points whose balls intersect. This construction corresponds to the true underlying topology of the union of balls, but it requires knowledge of coordinates (not just distances) and is more expensive to compute. The main conceptual difference between the Vietoris–Rips and Čech complexes lies in how they determine connectivity. In the Čech complex, a simplex is formed when the corresponding balls (of radius ε/2) cen-
tered at the points have a common intersection, that is, all points overlap in a single region. In contrast, the Vietoris–Rips complex requires only that all pairwise distances between the points are within ε. As a result, the Rips complex is generally easier to compute and tends to be “larger” (containing more simplices) than the Čech complex at the same scale. It is worth mentioning that for any point cloud X and any ε > 0, the Rips complex Ripsε(X)
and the Čech complex Cˇε(X) are related by the sequence of inclusions: Cˇε(X) ⊆ Rips2ε(X)
Figure 2: Illustrative comparison of the Čech and Vietoris-Rips complexes. Left: in the Čech complex, a triangle appears only when the three corresponding balls have a common intersection. Right: in the Vietoris-Rips complex, the triangle is filled once all pairwise overlaps exist, even if there is no triple intersection. The Rips complex is therefore simpler to compute but slightly overestimates connectivity.
Witness complex. For large or high-dimensional datasets, computing all pairwise distances is prohibitive. Witness complexes use a subset of “landmark” points to approximate topology, drastically reducing computational cost while retaining essential structure.
Intuitive picture. At small ε, every point is isolated. As ε grows, edges and triangles appear, and disconnected clusters begin to merge. At a critical scale, loops or voids may form; at larger scales, everything eventually becomes one connected component. Tracking these changes as the scale varies provides the essence of persistent homology.
Figure 3: Growth of a Rips complex on a circular point cloud as the distance threshold ε increases. Small ε: isolated points; intermediate ε: connected ring; large ε: filled disc.
2.3 Filtrations and Multi-Scale Thinking
In practice, we do not fix a single threshold ε but examine a continuum of values. The sequence of nested complexes obtained as ε increases is called a filtration. Filtrations are the backbone of
6

TDA: they capture how topological structures emerge, merge and persist across scales. From an analytical perspective, a filtration resembles a multi-resolution decomposition or a moving-average analysis: short-lived features correspond to noise, while long-lived ones reveal stable organization. For business analysts, this provides a natural notion of scale robustness. If a consumer segment or market cluster persists as we vary the similarity threshold, it is likely a genuine feature of the system-
 rather than an artifact of parameter choice. Likewise, if a loop (cycle) appears briefly and vanishes, it may correspond to transient or anomalous behavior.
Figure 4: Growth of a Vietoris–Rips complex as the distance threshold ε increases. Small ε: isolated points; intermediate ε: edges and small clusters emerge; large ε: loops form and eventually fill in, connecting all points into a single component.
By tracking which features are born and which survive longest along the filtration, we transform geometric growth into a compact summary of structure: a barcode or persistence diagram, introduced next.
3 Persistent Homology Made Simple
Persistent homology quantifies how connectivity evolves as we move through the filtration. It tracks the appearance (birth) and disappearance (death) of topological features at different scales, recording their lifetimes as signatures of structural persistence.
3.1 Birth, Death and Persistence
At the smallest scale, each data point is an isolated component, corresponding to a set of independent customers, stocks or countries. As ε grows, points merge into clusters; each merger represents the death of a component in H0. When loops or cycles form, for example, when three or more clusters connect around an empty region, a new feature in H1 is born. If the loop later fills in, it dies. In higher dimensions, analogous “voids” (holes in 3D) correspond to H2 and above. The collection of all su-
ch births and deaths is captured in two equivalent visualizations:
• Barcodes: horizontal segments whose lengths represent the lifetimes of features;
• Persistence diagrams: scatter plots where each feature is a point with coordinates (birth, death).
The longer a bar, or equivalently, the further a point lies from the diagonal, the more persistent the feature, and the more likely it reflects meaningful structure rather than noise.
3.2 Barcodes and Persistence Diagrams
A circular cloud of points produces many short H0 bars that quickly merge into one component, plus one long H1 bar representing the persistent loop. By contrast, a two-cluster dataset yields two long H0 bars (the clusters) and no H1 bar. Persistence thus distinguishes cyclic structure from mere grouping. In applied contexts:
7

• For consumer behavior, persistent H0 bars may indicate stable preference segments;
• In markets, long H1 bars can capture cyclical co-movement or alternating regimes;
• In portfolios, the emergence or disappearance of cycles may signal diversification or contagion shifts.
Figure 5: Persistent homology visualized through complementary representations. Top: filtration of a circular dataset as the radius ε increases, points merge and a loop persists over several scales. Middle: persistence barcode showing feature lifetimes, where longer bars correspond to more stable structures. Bottom: persistence diagram plotting each feature by its birth and death coordinates; points farther from the diagonal represent robust, long-lived patterns.
Persistence diagrams are particularly valuable because they are stable under small perturbations [7]: if the underlying distances change slightly (due to measurement noise or rescaling), the diagram changes only slightly in the so-called bottleneck distance. This stability theorem provides mathematical justification for using persistence as a reliable descriptor of structure in noisy empirical data.
3.3 Interpretation for Non-Mathematicians
Persistent homology provides a vocabulary for describing the shape of data. Rather than focusing on numerical coordinates or statistical distributions, it summarizes how observations connect across scales. For analysts, long-lived components (H0) reveal enduring groupings, while long-lived loops (H1) capture cyclical or feedback behavior. The absence of persistent features implies either strong homogeneity (everything connects quickly) or extreme fragmentation (no connections form).
See § 6.1 if interested in the algebraic underpinnings of persistent homology.
8

In marketing, this analysis can reveal when consumer clusters merge as similarity thresholds loosen; an indicator of overlapping interests. In finance, it can identify cycles in the joint movement of assets, corresponding to alternating risk regimes. In operations, loops may reflect recurring process states, while voids correspond to unvisited or infeasible configurations. The strength of TDA lies in its universality: the same mathematical machinery applies to any domain where a notion of distanc-
e exists. By translating datasets into geometric objects and measuring their evolving shape, analysts gain an additional dimension of insight, not in variables, but in relationships.
4 The TDA Pipeline for Analysts
Having introduced the basic concepts of filtration and persistence, we now turn to the full analytical workflow that connects raw data to interpretable topological summaries. The strength of Topological Data Analysis lies not only in its mathematical foundation but also in its reproducible workflow. Unlike many statistical models that depend on specific distributional assumptions, the TDA pipeline can be applied to virtually any dataset once a notion of distance or similarity is defined. This sect-
ion outlines the full end-to-end process and interprets each step through the lens of business and economic analytics. Note that various efficient algorithms and practical considerations for computing persistent homology are surveyed in a ‘roadmap’ in [18].
4.1 Overview
Figure 6 provides a schematic overview. Starting from raw data, one first constructs a distance matrix representing pairwise similarities. From these distances, one builds a simplicial complex that captures the data’s geometry. Persistent homology is then computed to summarize multiscale topological features in the form of barcodes or persistence diagrams. Finally, these summaries are interpreted quantitatively or visually and integrated into downstream analyses such as clustering, forecasting or -
risk assessment.
Figure 6: Conceptual workflow of the TDA pipeline: raw data → distance matrix → simplicial complex and persistence computation → interpretation and decision support.
4.2 Step 1: Data Preprocessing
The quality of any topological analysis depends on meaningful pairwise comparisons. Raw business data are often heterogeneous: variables may have different units, trends and seasonal patterns. Preprocessing therefore aims to create a homogeneous representation suitable for distance computation. Typical operations include:
• Normalization and scaling: ensuring comparable ranges across variables, e.g., z-score standardization or log returns for financial time series;
• Detrending and de-seasonalization: removing long-term drift or periodic effects that can dominate distances;
• Windowing: transforming a long time series into overlapping segments (sliding windows) to study temporal evolution;
9

• Noise reduction: smoothing or symbolic representation (SAX, eSAX) to suppress highfrequency fluctuations.
These steps ensure that geometric distances capture genuine similarity rather than artefacts of scale, trend or noise.
4.3 Step 2: Distance Matrix Computation
Once pre-processing is complete, the next step is to compute the pairwise distance matrix D = (dij). Each entry quantifies dissimilarity between observations i and j using the metric most appropriate for the domain:
• Euclidean distance for standardized cross-sectional data;
• Correlation or cosine distance for co-movement in financial or behavioral time series;
• Dynamic Time Warping (DTW) or symbol-based distances for temporal alignment;
• Domain-specific metrics (e.g., Wasserstein distance for distributions or histograms).
In TDA, the distance matrix is the only required input; it defines a metric space in which all subsequent constructions take place. The interpretability of topological results therefore critically depends on this choice, and sensitivity analysis to alternative metrics is recommended.
4.4 Step 3: Complex Construction
From the distance matrix we construct a simplicial complex, a combinatorial object that approximates the data’s underlying shape. The most common choice is the Vietoris–Rips complex, which includes all simplices (edges, triangles, tetrahedra, etc.) whose vertices are pairwise within a given threshold ε. For small ε, the complex consists of isolated points; as ε grows, higher-dimensional simplices appear and clusters merge.
Alternative constructions include:
• Čech complex: based on overlapping balls of radius ε/2; topologically faithful but computationally heavier;
• Witness complex: uses a small set of landmarks to approximate topology for large datasets;
• Alpha complex: suitable when Euclidean coordinates are known; closely related to Delaunay triangulations.
Each of these complexes defines the same homology in the limit of small scales but may differ in computational cost and approximation accuracy. In business analytics, Rips complexes are typically preferred because they require only pairwise distances and scale well to high dimensions.
4.5 Step 4: Persistence Computation
Persistent homology tracks how the topology of the complex changes as the threshold ε varies. In computational practice, one constructs a sequence of complexes
Kε1 ⊆ Kε2 ⊆ · · · ⊆ Kεm ,
known as a filtration. Algorithms compute when each feature (connected component, loop, void) is born and when it dies as the scale increases [28]. The result is a barcode or persistence diagram summarizing the lifetime of features in different dimensions:
10

• H0: connected components (clusters or regimes);
• H1: loops or cycles (periodicity, feedback);
• H2: voids (high-dimensional diversification gaps).
Software such as Ripser ([25]) or giotto-tda ([26]) implements these computations efficiently and outputs visualizations directly.
4.6 Step 5: Feature Extraction and Visualization
Persistence summaries can be interpreted visually or transformed into numerical features for further analysis.
Barcodes and diagrams. Analysts can visually inspect bar lengths to identify persistent structure: long bars indicate stable, significant features; short bars correspond to noise.
Persistence images and landscapes. By mapping diagrams into grids or functional representations, one obtains fixed-size vectors suitable for machine-learning models [1]. These representations have been used for regime classification, anomaly detection and sentiment analysis.
Derived indicators. Aggregating lifetimes or computing their variance yields simple indices such as the Total Persistence (overall structural complexity) or the proposed Topological Stability Index (see Section 6). Visualization plays a central role in communicating results to non-technical audiences. Persistence diagrams, when presented alongside traditional plots (correlation matrices, PCA maps), reveal geometric aspects invisible to linear projections.
4.7 Step 6: Downstream Analysis and Decision Support
As mentioned earlier, TDA rarely stands alone; it complements existing analytical workflows. Once persistence summaries are computed, they can be incorporated into familiar frameworks:
• Clustering and segmentation: use distances between persistence diagrams to cluster similar patterns;
• Classification and forecasting: feed persistence images into machine-learning models as geometric features;
• Portfolio or network analysis: monitor topological indicators as early-warning signals of regime shifts or structural stress;
• Visualization dashboards: combine barcodes with traditional KPIs for managerial interpretation.
Because persistence is scale-invariant and noise-resistant, these downstream tasks inherit its robustness, making decisions less sensitive to arbitrary parameter choices or data perturbations.
4.8 Reporting and Reproducibility Checklist
For reproducibility and comparability, each TDA study should report:
- the data preprocessing steps and windowing scheme used;
- the distance metric and its parameters;
11

- the type of complex and range of ε values;
- the homology dimensions analyzed (H0, H1, etc.);
- software versions and computational settings.
Including such a checklist ensures that results can be validated and reused by other researchers and practitioners.
In summary, the TDA pipeline provides a transparent, domain-independent sequence of geometric transformations from data to insight. Each step adds interpretive meaning, transforming raw numerical data into a map of structural organization. The next section demonstrates this process through comparative case studies in consumer dynamics, equity markets and foreign exchange.
5 Case Studies
To illustrate how Topological Data Analysis (TDA) operates in practice and what kinds of insights it yields beyond traditional tools, we present three detailed case studies drawn from recent research. Each study applies the full TDA pipeline, from preprocessing and metric selection to persistence computation and interpretation, to a different analytical context: stock-market dynamics, consumer attention behavior, and currency co-movements. Together they demonstrate how topology complements classic-
al and symbolic approaches, uncovering geometric structure, cyclic behavior and scale-dependent stability in complex economic systems.
5.1 Stock Markets: Symbolic and Topological Patterns in European Equities
Background and Motivation. Financial markets are dynamic, non-linear and strongly interconnected systems. The evolution of equities reflects overlapping sources of dependency, sectoral structure, macroeconomic conditions, and global shocks, that unfold at different time scales. Traditional linear tools, such as correlation matrices or principal component analysis (PCA), assume stationarity and Gaussian dependence. While effective for broad co-movement analysis, they often fail to capture regime tr-
ansitions or local synchronization. Symbolic representations, such as the Symbolic Aggregate Approximation (SAX), provide an alternative perspective by compressing continuous time series into symbolic strings that encode qualitative trends. They are computationally efficient and highlight recurring motifs but lose the geometric continuity of trajectories. In contrast, Topological Data Analysis (TDA) preserves the full metric structure of the data and describes its organization across multiple scal-
es of similarity, making it well suited to detect regime changes and sectoral dynamics. The study of [14] investigated how symbolic and topological methods differ in identifying structural relationships among large-cap European equities. The central question was whether persistent homology could detect evolving patterns of connectivity more effectively than symbolic representations, and whether combining the two could yield complementary insights.
Data and Preprocessing. The dataset consisted of the daily closing prices of 60 European equities covering eleven economic sectors (A–K in NACE classification), over the period May 2023–May 2024. To ensure comparability, prices were converted to log-returns and z-score normalized per stock. Twelve non-overlapping monthly windows (each of approximately 21 trading days) were extracted, forming a sequence of temporal slices that capture evolving market structure. Each window was analyzed separately. -
Two symbolic representations were generated:
(i) SAX: each normalized time series was divided into equal-length segments; each segment was assigned a symbol according to its mean z-normalized value;
12

(ii) eSAX: an extension encoding both minimum and maximum values per segment, preserving volatility information in addition to trend.
For the TDA approach, pairwise similarities between stocks were expressed through the correlation-based distance
dij =
√
2(1 − ρij),
where ρij is the Pearson correlation between daily returns of assets i and j. This metric captures co-movement while being invariant to linear scaling. The resulting 60 × 60 distance matrix was used to construct Vietoris-Rips complexes at multiple thresholds ε. Embedding parameters for phase-space reconstruction were selected using the false-nearest-neighbor (FNN) criterion with embedding dimension m = 7 and delay τ = 3, ensuring sufficient reconstruction of dynamical structure.
Symbolic Analysis. Symbolic strings were first transformed into numerical feature vectors using piecewise aggregate approximation (PAA). Hierarchical clustering and k-means algorithms were then applied to compare the resulting symbolic feature spaces.
Figure 7: Illustration of symbolic transformations. Left: Piecewise Aggregate Approximation (PAA) of stock prices. Right: SAX and extended SAX (eSAX) representations for Skanska, H&M, and Allianz, showing enhanced sensitivity to volatility range. (Source: Hobbelhagen & Diamantis, 2024.)
Symbolic clustering revealed general patterns of market behavior. Figure 8 displays a hierarchical clustering dendrogram built from SAX features. During low-volatility periods, most equities formed a single macro-cluster, while during turbulent intervals multiple micro-clusters emerged. However, sectors with distinct volatility profiles, such as utilities and healthcare versus cyclicals, were occasionally grouped together when their mean trajectories coincided.
13

Figure 8: Hierarchical clustering of symbolic representations. Left: SAX-based dendrogram showing broad macro-grouping across sectors. Right: three sample equities from the same cluster illustrating diverging short-term behavior despite symbolic similarity. (Source: Hobbelhagen & Diamantis, 2024.)
Topological Analysis. To explore finer-scale geometric dependencies, TDA was applied to the same windows. For each distance matrix, persistent homology was computed in dimensions H0 and H1, and persistence diagrams and landscapes were derived. The FNN analysis guiding embedding selection is summarized in Figure 9.
Figure 9: Average false-nearest-neighbor (FNN) ratios across embedding dimensions m and delays τ . The chosen parameters m = 7, τ = 3 minimize false neighbors, ensuring reliable reconstruction of temporal structure. (Source: Hobbelhagen & Diamantis, 2024.)
Persistence diagrams were converted into summary statistics, total persistence, lifetime variance, and number of long bars, and used as geometric features for clustering and temporal comparison. The TDA dendrogram (Figure 10) shows clearer separation between clusters and isolates outliers more distinctly than the symbolic counterpart, indicating stronger structural
14

differentiation in the correlation geometry.
Figure 10: Hierarchical clustering in the TDA feature space. Left: dendrogram based on persistence features (H0, H1). Right: three example equities from the same TDA cluster showing consistent local geometry and correlated short-term dynamics. (Source: Hobbelhagen & Diamantis, 2024.)
Results and Comparative Insights. Figure 11 compares the average normalized price trajectories of clusters obtained via SAX and TDA. Both methods reveal macro-level coherence but differ in their treatment of micro-level fluctuations. SAX merges assets with broadly similar trends even if their intra-window dynamics diverge, while TDA distinguishes stocks with subtle but persistent differences in temporal synchronization.
Figure 11: Average normalized stock prices per cluster. Top: clusters obtained via TDA; bottom: clusters from SAX. TDA preserves local geometric detail and separates sectors with distinct short-term dynamics. (Source: Hobbelhagen & Diamantis, 2024.)
15

Sector-level analysis revealed that both methods grouped similar industries (construction and finance), but TDA highlighted higher dispersion in others (sectors D, E, and I), pointing to greater internal heterogeneity. Figure 12 displays within-sector median distances for TDA and SAX, averaged across windows. The shaded areas correspond to standard deviations, visualizing temporal variability in cohesion.
Figure 12: Within-sector median distances for TDA (left) and SAX (right). Lines show means; shaded regions indicate standard deviations across time windows. TDA reveals stronger temporal fluctuations in sectoral cohesion, especially in sectors D, E, and I. (Source: Hobbelhagen & Diamantis, 2024.)
A closer inspection of the accommodation and food service sector (I) demonstrates how symbolic and topological methods diverge in sensitivity to local variation. SAX captures general directionality, whereas TDA distinguishes subtle structural differences in shape and local amplitude (Figure 13).
Figure 13: Stock movements in the accommodation and food service sector (I). (a) overall trend; (b) zoomed-in local fluctuations. TDA captures amplitude-level structure that SAX smooths out. (Source: Hobbelhagen & Diamantis, 2024.)
16

Discussion and Economic Interpretation. The comparative analysis demonstrates that TDA captures structural features of market dynamics invisible to symbolic or linear models. While SAX efficiently summarizes broad market regimes, its discretization loses sensitivity to intermediate-scale variability. TDA, by retaining continuous geometric information, identifies scale-dependent transitions: short-lived features correspond to transient fluctuations, whereas long-lived topological components and lo-
ops represent persistent co-movement structures. Economically, persistent H0 features correspond to stable sectoral clusters of equities that move together across thresholds, whereas persistent H1 loops describe cyclical or alternating relationships between sectors. High variance in lifetimes, interpretable as topological volatility, acts as a geometric stress indicator, often rising before spikes in overall market volatility.
Managerial Implications. For portfolio managers, monitoring persistent topological features offers complementary information to classical risk measures. Persistent H1 loops reveal latent cyclic dependencies among sectors that covariance-based models may overlook. Tracking the birth and death of these features over time enables early identification of diversification breakdowns or regime transitions. Because TDA is scale-invariant and noise-resistant, it integrates seamlessly into risk dashboards w-
ithout heavy parametric calibration. In summary, topology enriches symbolic time-series analysis by introducing a continuous, scale-aware perspective on structure. While SAX and eSAX efficiently encode dominant trends, TDA uncovers hidden organization in market geometry, supporting a more robust understanding of financial interconnectedness.
5.2 Consumer Attention Dynamics: The Shape of Online Behavior
Background and Motivation. Consumer attention is among the most volatile and informative signals in modern digital markets. Online interest rises and fades rapidly as global events, technologies and cultural trends compete for visibility. Traditional analytics, such as moving averages, correlations, autoregressive or seasonal-trend models, capture temporal dependence but overlook the geometry of behavioral change. Similarity at a fixed scale may group together categories that share seasonality but-
 differ in how these patterns evolve through time. The study of [3] investigated whether the shape of attention trajectories, rather than only their amplitude or correlation, could uncover latent behavioral regimes. By comparing symbolic (SAX/eSAX) and topological representations of Google Trends time series, the paper introduced TDA as a novel analytical lens for marketing science and behavioral economics.
Data and Preprocessing. Weekly Google Trends indices were collected for 20 consumerrelated keywords covering six thematic categories:
(i) Technology and AI (e.g., “ChatGPT”, “machine learning”);
(ii) Digital Work and Education;
(iii) Finance and Economy;
(iv) Sustainability and Environment;
(v) Personal Devices;
(vi) Common Products.
The observation period spanned 2019–2024. Values were normalized to [0, 1] for cross-term comparability and converted into overlapping 12-week windows with a one-week stride, generating about 250 local segments per keyword (points in R12). Each segment was z-normalized to remove long-term drift, producing a manifold of attention trajectories.
17

Methodology. Two complementary representations were compared:
• Symbolic representation: normalized segments were transformed via SAX and eSAX into symbolic words. Distances between windows were computed as Euclidean distances between their Piecewise Aggregate Approximation (PAA) vectors with alphabet size a = 7.
• Topological representation: the same windows were embedded in a metric space using
correlation-based distance dij =
√
2(1 − ρij), where ρij is the Pearson correlation between windows. Persistent homology was then computed on Vietoris–Rips complexes for increasing thresholds ε, up to homology dimension H1.
Persistence diagrams were transformed into persistence landscapes for interpretability and aggregated over time to track the evolution of long-lived structures in attention dynamics.
Figure 14: Analytical workflow for symbolic (SAX/eSAX) and topological (TDA) representations. Top: SAX pipeline from normalization to symbolic distance matrix. Bottom: TDA pipeline from correlation distance to persistence diagrams. (Source: Bereta & Diamantis, 2025.)
Results. Symbolic methods reproduced well-known seasonal cycles, for example, winter peaks in “holiday shopping” and early-year increases in “budgeting” and “taxes”. However, SAX tended to merge keywords with similar periodicities but different volatility structures: “AI” and “blockchain” shared yearly rhythms yet diverged sharply during hype bursts, which symbolic clustering masked. TDA disentangled these subtleties by examining the geometry of trajectories. Persistent H0 features revealed cohere-
nt behavioral regimes: stable attention clusters within domains such as sustainability or finance. Persistent H1 features captured loops in collective attention, where topics moved through phases of excitement, decline and renewed interest, mirroring the rhythm of hype and stabilization cycles.
18

Figure 15: Symbolic clustering of 20 Google Trends keywords (2019–2024) based on SAX and eSAX representations. Top: k-means clustering for (left) SAX and (right) eSAX feature spaces. Bottom: hierarchical clustering for the same representations. Both methods capture broad seasonal regularities but tend to merge keywords with similar periodicity while overlooking differences in volatility and hype intensity. (Source: Bereta & Diamantis, 2025.)
19

Figure 16: Complementary representations of persistent homology for the keyword “Programming”. Left: persistence barcode showing feature lifetimes across scales. Middle: persistence diagram plotting birth–death coordinates, where points farther from the diagonal represent long-lived, stable structures. Right: persistence landscape providing a functional summary of persistence, useful for statistical comparison and feature extraction. Together these views illustrate how TDA captures both the topol-
ogy and the stability of consumer attention dynamics. (Source: Bereta & Diamantis, 2025.)
Specific examples illustrate the interpretive power of topology:
• Technology and AI: long-lived H1 loops captured repeated surges of attention (e.g., the launch of ChatGPT and subsequent normalization).
• Digital Work: persistent cycles mirrored the pandemic’s work-pattern transitions (lockdown → hybrid → normalization).
• Finance and Economy: reductions in H0 persistence around inflation spikes indicated fragmentation of public focus.
To visualize these quantitative improvements, Figure 17 presents the clustering results obtained directly in the TDA feature space. Compared with the symbolic clusters shown earlier, the topological representation yields sharper boundaries and thematically coherent groups, confirming the discriminative power of persistent features.
20

Figure 17: Clustering of 20 Google Trends keywords in the topological feature space. Left: k-means clustering using TDA-derived features. Right: hierarchical clustering on the same feature set. Compared to symbolic methods, TDA-based clusters exhibit greater compactness and clearer thematic separation, confirming the added geometric discriminability of persistent features. (Source: Bereta & Diamantis, 2025.)
Quantitatively, TDA outperformed symbolic approaches in internal clustering validity: Silhouette score 0.61 vs. 0.44 for SAX, and Davies–Bouldin index 1.15 vs. 1.86. The total persistence of H1 features correlated strongly (r = 0.72) with volatility in weekly Google Trends values, confirming that topological variability tracks bursts of collective attention.
Table 1: Clustering performance metrics comparing symbolic and topological feature spaces. Higher Silhouette and lower DBI values indicate clearer separation. (Source: Bereta & Diamantis, 2025.)
Metric SAX eSAX TDA
Silhouette Score 0.320 0.218 0.146 K-Means Davies–Bouldin Index 0.749 0.777 1.133
Silhouette Score 0.355 0.308 0.375 Hierarchical Davies–Bouldin Index 0.618 0.652 0.723
Interpretation and Discussion. TDA adds a geometric dimension to behavioral analytics. Where SAX compresses data into symbolic motifs, persistent homology links local variations across scales, revealing when attention cycles re-emerge or decay. In marketing terms:
• persistent H0 bars ⇒ stable consumer interests or categories with long-term relevance;
• persistent H1 bars ⇒ cyclical or event-driven attention loops (recurrent hype);
• short bars ⇒ transient curiosity or viral anomalies.
21

These interpretations distinguish structural interest (persistent components) from episodic attention (short loops). Monitoring persistence lifetimes thus quantifies attention durability, namely, the degree to which engagement withstands trend noise.
Managerial Implications. For firms, persistence provides actionable intelligence:
• allocate resources to categories with long-lived H0 features (steady demand);
• synchronize marketing with phases of emerging H1 loops (resurging hype);
• detect consumer fatigue when total persistence declines across themes.
For instance, sustainability maintained consistently high H0 lifetimes, signaling deep and stable concern, whereas technology and AI showed high H1 volatility typical of innovation-driven cycles.
Broader Significance. Beyond empirical findings, the study demonstrates the versatility of TDA in behavioral analytics. It unifies symbolic summarization and geometric analysis within a single pipeline, revealing both macro- and micro-dynamics of attention.
5.3 Currency Networks: Persistent Homology for FX Co-movements
Background and Motivation. Foreign exchange (FX) markets form one of the largest and most interconnected financial systems in the world. Currencies co-move through trade relations, interest-rate differentials, and capital flows that evolve over time. Traditional econometric analyses rely on correlations or co-integration to study these dependencies, assuming linearity and stationarity. However, exchange-rate dynamics often display nonlinear and multi-scale behavior, with structural breaks and regi-
me transitions that such tools cannot fully capture. The study in [10] investigated whether persistent homology can provide a robust, interpretable description of structural organization within FX markets. By comparing topological representations of currency dynamics with classical and statistical methods, the paper demonstrated that TDA can uncover meaningful co-movement patterns that remain stable across scales.
Data and Preprocessing. The dataset consisted of monthly logarithmic returns of 13 major currencies relative to the euro: AUD, BRL, CHF, CNY, GBP, INR, JPY, KRW, RUB, THB, TRY, USD, and ZAR. Two datasets were analyzed: one covering 2000–2022 (including RUB) and one extended to 2024 (excluding RUB). All series were standardized (z-scores) to ensure comparability across currencies. Each currency was analyzed individually through a delay embedding with window length d = 4 and delay τ = 1, transformin-
g each time series into a point cloud in R4. This embedding preserves local temporal geometry and allows persistent homology to detect recurring structural patterns in returns.
22

Figure 18: Statistical dependence structure of standardized monthly FX returns. Left: covariance heatmap. Right: cross-correlation heatmap (maximum lag = 1 month). (Source: De Favereau de Jeneret & Diamantis, 2025.)
Methodology. Three approaches were compared:
(i) Classical approach: hierarchical and k-means clustering on statistical features derived from the standardized return series and their correlation matrices;
(ii) Spectral approach: principal component analysis (PCA) on the covariance matrix to extract dominant co-movement modes;
(iii) Topological approach: computation of persistent homology on the delay-embedded point clouds. Vietoris–Rips filtrations were applied to obtain persistence diagrams in H0 and H1, and pairwise dissimilarities between currencies were quantified via Wasserstein distances between diagrams. For k-means clustering, the Wasserstein matrix was embedded in Euclidean space through multidimensional scaling (MDS), while hierarchical clustering operated directly on the Wasserstein distances.
Figure 19: Hierarchical clustering on statistical features. (Source: De Favereau de Jeneret & Diamantis, 2025.)
23

Results. Classical correlation-based clustering recovered broad regional groupings but failed to capture nonlinear distinctions between currencies. The topological approach, in contrast, revealed richer structural information. Persistence diagrams and barcodes displayed long-lived H0 features; stable regimes of behavior within specific currencies, and occasional H1 features indicating cycles in their embedded dynamics. Illustrative examples for CHF, GBP and THB showed clear differences in geometr-
ic complexity. In Figure 20 we illustrate these features for the CHF currency.
Figure 20: Topological summaries for the CHF currency. Persistence barcode and diagram (top) and their functional analogues: persistence landscape and Betti curve (bottom). (Source: De Favereau de Jeneret & Diamantis, 2025.)
Quantitatively, the TDA-based models outperformed statistical baselines on internal-validity metrics. Average Silhouette and Calinski–Harabasz indices were higher for both k-means and hierarchical clustering in the topological space, indicating more compact and better-separated clusters. Specifically, the Statistical k-means (0.110, 2.657) and Statistical hierarchical (0.111, 2.942) models were surpassed by TDA k-means (0.191, 4.850) and TDA hierarchical (0.182, 5.905).
Figure 21: Hierarchical clustering of 13 major currencies using persistence-based features. (Source: De Favereau de Jeneret & Diamantis, 2025.)
24

Interpretation and Discussion. Topology captures not only the strength but the structure of currency relationships. Long-lived H0 features correspond to persistent behavioral regimes, that is, currencies that maintain coherent dynamics over time, while the emergence of H1 features reflects oscillatory or cyclical tendencies within the embedded trajectories. Because persistence diagrams are stable under small perturbations, these patterns represent genuine geometric organization rather than statis-
tical noise.
Managerial and Policy Implications. For portfolio managers and policymakers, TDA offers a new diagnostic dimension. It provides a scale-independent and noise-resistant measure of similarity that complements correlation analysis. Stable topological components identify robust behavioral regimes, while increased short-lived topological features indicate potential instability or transitions. Combining both perspectives yields a more complete picture of systemic structure and market interdependence.
Table 2: TDA-derived k-means clusters (Wasserstein + MDS embedding).
Cluster Currencies
1 GBP, INR 2 AUD, BRL, CNY, JPY, KRW, THB, TRY, USD, ZAR 3 CHF, RUB
Table 3: Clustering performance metrics across models (average Silhouette; Calinski–Harabasz).
Model Silhouette CH
Statistical k-means 0.110 2.657 Statistical hierarchical 0.111 2.942 TDA k-means 0.191 4.850 TDA hierarchical 0.182 5.905
Broader Significance. This study demonstrates that persistent homology provides a compact, geometric description of global financial interdependence. By summarizing the shape of comovement rather than its magnitude, TDA reveals structural resilience and fragility in a transparent, interpretable manner. Such tools could enrich macro-prudential frameworks by translating complex dependency patterns into robust topological diagnostics for systemic-risk monitoring.
5.4 Comparative Synthesis and Broader Implications
The three case studies presented above, spanning equity markets, consumer attention and foreignexchange dynamics, demonstrate the versatility of Topological Data Analysis (TDA) as a unifying framework for studying structure in complex economic systems. Despite differences in scale, domain and data type, a consistent pattern emerges: topology captures how relationships evolve across similarity thresholds, uncovering organization, cyclicity and transitions that symbolic or linear methods tend to smo-
oth out.
Cross-domain regularities. At a high level, all three applications reveal a shared geometric logic:
• Components (H0): Persistent connected components correspond to stable regimes; market sectors, consumer clusters or regional currency blocs, that remain cohesive across varying similarity thresholds.
25

• Loops (H1): Persistent cycles indicate recurrent feedback mechanisms, such as alternating investor sentiment, product-hype phases or hedging loops among currencies.
• Instability: In every domain, bursts in total persistence or lifetime variance coincide with transitions-volatility spikes in equities, attention shifts in consumers, and contagion episodes in FX markets.
These analogies suggest that persistence plays a universal role as a measure of structural stability: long-lived features correspond to resilient organization, while short-lived ones capture transient or noisy behavior.
Symbolic vs. Topological perspectives. The studies also highlight the complementarity between symbolic and topological representations. Symbolic methods (SAX, eSAX) are efficient at compressing information and detecting recurring temporal motifs, offering a discrete language for interpreting behavioral and market patterns. However, they discretize continuous variation and may merge distinct regimes into coarse symbolic categories. TDA, by contrast, retains the geometric continuity of data, exposin-
g nonlinear dependencies and gradual transitions between regimes. Symbolic features thus excel at pattern summarization, whereas topological features excel at structure detection. Together they define a hybrid paradigm for modern analytics, combining the interpretability of symbolic methods with the robustness and depth of topology.
Methodological convergence. Beyond their domain-specific results, all three studies share a reproducible and conceptually simple computational workflow:
1. Define a domain-relevant distance (Euclidean, correlation or symbolic);
2. Construct a simplicial complex (typically Vietoris–Rips);
3. Compute persistent homology (H0, H1);
4. Interpret long-lived features as structural invariants.
This four-step process generalizes seamlessly across contexts, from high-frequency trading data to macroeconomic aggregates, showing that TDA is not bound to a particular application but to a principle: that structure emerges through persistence across scales.
Managerial and analytical insights. From a practical perspective, persistence-based indicators can inform decision-making in diverse analytical settings:
• In finance, topological persistence reflects changes in structural connectivity among assets, complementing volatility and correlation-based measures of market stress.
• In marketing, it quantifies the durability and cyclicity of consumer attention, distinguishing stable interest from transient hype.
• In macroeconomics, it visualizes the geometry of interdependence and diversification across currencies, regions, or sectors.
These insights are inherently multi-scale: topology imposes no fixed parameter but tracks how relational patterns endure or vanish as the similarity threshold changes, offering a richer and more interpretable view of systemic organization.
26

Toward theoretical unification. Conceptually, the three case studies converge on a central theme: data in modern business and finance are rarely linear, and their complexity cannot be captured by variance or correlation alone. TDA extends the analytical vocabulary by introducing geometric notions, i.e. connectivity, cycles and persistence, into quantitative reasoning. Persistence diagrams can therefore be viewed as structural fingerprints of complex systems, providing interpretable and comparable-
 representations across domains.
Looking forward. The unifying message of these case studies is that the shape of data carries meaning. By shifting focus from variables to relationships, TDA allows analysts to visualize and quantify organization itself. The next section develops these insights theoretically, examining how distance choices and complex constructions shape persistence, and introducing the Topological Stability Index (TSI), a quantitative measure linking persistence lifetimes to systemic resilience.
6 Theoretical and Methodological Considerations
The preceding case studies illustrated how topological structure can reveal hidden organization in business and financial data. This section develops the theoretical and methodological foundation behind those observations. It focuses on three core layers of the TDA framework: the definition of distance, the construction of simplicial complexes, and the translation of persistence into interpretable indicators. While the exposition remains accessible, the goal is to clarify why TDA produces robust a-
nd meaningful geometric summaries that complement classical statistical models.
6.1 Algebraic Formalism of Persistent Homology
Topological Data Analysis translates data into algebraic structure by tracking the evolution of topological features across a sequence of nested spaces. This process is formalized using tools from algebraic topology. Let X be a finite metric space (e.g., a point cloud or a distance matrix) and {Kε}ε≥0 a filtration of simplicial complexes constructed from X, typically using the Vietoris–Rips complex. For each ε, we compute the k-th homology group with coefficients in a field F:
Hk(Kε; F) = ker ∂k
im ∂k+1
,
where ∂k is the boundary operator mapping k-simplices to (k − 1)-simplices. The dimension of Hk is called the k-th Betti number βk, which counts the number of k-dimensional holes (e.g., β0 counts components, β1 counts loops). As ε increases, we obtain a sequence of inclusions:
Kε1 ↪→ Kε2 ↪→ · · · ,
which induces a sequence of homology group homomorphisms:
Hk(Kε1 ) → Hk(Kε2 ) → · · · .
A topological feature (e.g., a loop) is said to be born at scale εb if it appears in Hk(Kεb) but not earlier, and dies at εd if it becomes trivial or merges with an older feature. The collection of such (εb, εd) pairs is the persistence diagram Dk.
The algebraic stability theorem guarantees that small perturbations in the input data induce small changes in the persistence diagram (with respect to the bottleneck distance), making these summaries robust for noisy empirical data [7].
27

6.2 Distances: What Are We Measuring?
The notion of distance is the first, and often most consequential, modeling choice in Topological Data Analysis. It determines what kind of similarity the analyst deems meaningful and directly shapes the geometry from which persistence is computed. Formally, a distance (or metric) d(xi, xj) satisfies non-negativity, identity, symmetry, and the triangle inequality, yet in practice it also serves a semantic role: it encodes the domain’s definition of proximity in behavioral, financial, or operationa-
l terms.
Euclidean and Mahalanobis distances. For cross-sectional data such as customer profiles, product attributes, or firm-level indicators, the Euclidean metric
dij = ∥xi − xj∥2
remains the most common. It measures absolute dissimilarity but assumes that all variables are commensurate. When correlations between variables are non-negligible, the Mahalanobis distance introduces covariance normalization, effectively rescaling the space by its variance–covariance structure. This adjustment is crucial in finance and econometrics, where multiple factors interact and simple Euclidean proximity may distort relationships.
Correlation and cosine distances. For time-dependent or compositional data, distances based on co-movement are more informative. The correlation-based distance
dij =
√
2(1 − ρij)
and its directional analogue, the cosine distance, measure similarity in shape rather than magnitude. They are invariant to linear rescaling and highlight structural alignment, namely, two assets or behaviors moving in parallel but at different amplitudes remain “close”. This makes them particularly suitable for financial returns, marketing signals or sentiment trajectories.
Dynamic and symbolic distances. Sequential data often exhibit time shifts or variable speeds. Dynamic Time Warping (DTW) compensates by elastically aligning patterns before computing distances, allowing comparison of behaviors that evolve at different temporal paces. In symbolic representations such as SAX or eSAX, distances are computed between symbolic strings using edit or block metrics, capturing coarse-grained similarity while filtering out highfrequency noise. Such symbolic metrics emphasize-
 overall behavioral resemblance, though fine local variations may be suppressed.
Interpretation. The chosen distance determines the lens through which TDA perceives data structure. Selecting it appropriately aligns mathematical abstraction with economic meaning:
• In marketing, Euclidean or symbolic distances capture similarity in consumer trajectories or purchase patterns.
• In finance, correlation-based metrics reflect systemic co-movement among assets or indices.
• In macroeconomics, Wasserstein or earth-mover distances compare distributions of indicators across countries or time.
Stability principle. A central theoretical result in TDA is the stability of persistence diagrams [7]. Small perturbations in the input distance matrix produce only proportionally small changes, in the bottleneck distance, between the resulting diagrams. Consequently, if the chosen distance captures a meaningful notion of similarity, the qualitative features extracted by TDA remain robust to noise, outliers, and sampling uncertainty. This property underpins TDA’s reliability and interpretability i-
n empirical analytics, distinguishing it from many model-based techniques whose output can fluctuate under minor data variation.
28

6.3 Complexes and Filtrations: Aggregating Local Geometry
Once a distance measure is fixed, the next step is to translate pairwise proximities into a global geometric object. This is achieved through a simplicial complex, a collection of vertices, edges, triangles, and higher-dimensional faces that represent how data points cluster and overlap. Simplicial complexes transform local similarity information into a combinatorial representation of the data’s shape.
Vietoris-Rips complex. The Vietoris-Rips complex Rε includes all simplices whose vertices are pairwise within a distance threshold ε. It depends solely on the distance matrix and is therefore applicable even when coordinates are unavailable. The Rips complex scales well to high-dimensional or non-Euclidean data, making it the default choice in most empirical TDA applications, including all three case studies presented earlier.
Čech and Alpha complexes. When data points have explicit Euclidean coordinates, more geometrically faithful constructions can be employed. The Čech complex includes a simplex whenever the corresponding ε/2-balls intersect, thus reproducing the exact topology of the underlying union of balls. The Alpha complex refines this idea via Delaunay triangulations, producing a smaller but topologically equivalent subcomplex. Both constructions offer superior geometric accuracy but are computationally heavie-
r and therefore less common in large-scale analytics.
Witness complexes. For very large datasets, the number of simplices in a full Rips complex grows exponentially. Witness complexes provide an efficient approximation by selecting a representative subset of landmark points and using the remaining data as witnesses that determine which simplices to include. This strategy preserves essential topological information while drastically reducing computational cost, making it suitable for big-data applications such as consumer-stream analysis or high-frequ-
ency trading networks.
Filtrations and multi-scale structure. Rather than fixing a single threshold ε, TDA examines how connectivity evolves as ε varies. This produces a nested sequence of complexes
Rε1 ⊆ Rε2 ⊆ · · · ⊆ Rεm ,
known as a filtration. Tracking how features appear and disappear along this sequence reveals structure across scales: short-lived features correspond to local noise, while long-lived ones represent persistent, global organization. Filtrations thus act as a geometric analogue of multiresolution analysis in signal processing—nonparametric, data-driven and inherently multi-scale.
6.4 From Persistence to Indicators: Quantifying Structure
Persistent homology converts the filtration into a set of features with measurable lifetimes. For each topological dimension k, the corresponding persistence diagram Dk contains points (bi, di) representing the birth and death of the i-th feature as the scale ε increases. These diagrams serve as the central output of TDA: they summarize how long each structural pattern (connected component, loop or void) persists across scales. Analytically, persistence diagrams can be treated either qualitatively-
, through visual inspection of barcodes or diagrams, or quantitatively, through derived numerical summaries.
Total persistence. A widely used scalar summary is the total persistence
TPk = ∑
i
(di − bi),
29

which measures the overall topological activity in dimension k. Large total persistence implies rich and long-lived structure, greater heterogeneity, stronger clustering or more pronounced cyclic organization. In economic data, a rise in total persistence may reflect regime diversification, market segmentation or systemic instability depending on context.
Lifetime variance and entropy. The distribution of lifetimes provides additional information about structural stability. The variance or entropy of the lifetimes {di − bi} quantifies whether persistence is concentrated in a few dominant features or spread across many transient ones. Systems with numerous short-lived loops or components often display erratic, unstable behavior, whereas dominance by a few long-lived features signals consistent structural organization.
Topological similarity. To compare persistence diagrams across time, categories, or markets, one can use distances such as the bottleneck or Wasserstein metrics [6]. These provide a principled measure of structural proximity between systems, allowing clustering, classification, or trend tracking directly in the topological feature space. In this sense, persistence diagrams act as fingerprints of structure: objects that can be compared quantitatively while remaining interpretable.
6.5 The Topological Stability Index (TSI)
While persistence diagrams encapsulate rich geometric information, practitioners often require concise numerical indicators that can be tracked and compared over time. To this end, we introduce the Topological Stability Index (TSI), a simple, scale-agnostic measure that quantifies the dispersion of structural lifetimes and thereby reflects the system’s degree of organizational stability. Let Lt denote the multiset of feature lifetimes (di − bi) observed in homology dimensions H0 and H1 within a ro-
lling time window t. The TSI is defined as
TSIt = Var(Lt),
that is, the variance of persistence lifetimes within the window.
Interpretation. The intuition behind TSI is straightforward:
• Low TSI values indicate that all topological features have similar lifetimes, suggesting structural equilibrium, either a stable, well-organized configuration or uniformly random noise.
• High TSI values imply a heterogeneous mix of short- and long-lived features, signaling transitions between order and disorder.
In economic systems, a rising TSI coincides with periods of structural reorganization: increasing systemic stress in financial networks, emerging volatility in consumer segmentation, or shifts in macroeconomic alignments.
Normalization and extensions. Because the scale of persistence can vary across datasets, it is useful to normalize TSI by total persistence:
nTSIt = Var(Lt)
TPt + ε ,
where ε is a small constant preventing division by zero. The normalized index nTSIt expresses relative instability—variance of structural lifetimes per unit of total topological activity. It can be visualized as a time series, analogous to volatility or entropy measures, thereby linking topology to familiar empirical indicators used in monitoring and risk assessment.
30

Relation to existing risk measures. Conceptually, TSI plays a role analogous to variance in classical statistics, but in the space of topological lifetimes rather than numerical returns. While volatility measures the dispersion of amplitudes, TSI measures the dispersion of structural persistence. In portfolio networks, an increase in TSI may reveal diversification breakdowns before they appear in volatility metrics; in macroeconomic or trade systems, it can detect early signs of reconfiguration i-
n connectivity patterns or policy alignment. TSI thus extends conventional risk analytics from the numerical to the structural domain.
Figure 22: Conceptual illustration of the Topological Stability Index (TSI). Left: persistence diagrams for three consecutive time windows. Right: corresponding TSI values; rising variance of feature lifetimes reflects increasing structural instability and reorganization.
Figure 22 illustrates the conceptual logic behind the Topological Stability Index (TSI). The left panel shows persistence diagrams for three consecutive time windows t1, t2 and t3, each representing the system’s topological structure at a given stage. In these diagrams, each point corresponds to a topological feature (connected component or loop), with its horizontal coordinate marking the birth and its vertical coordinate the death of the feature. The vertical distance of a point from the diagona-
l measures its lifetime, i.e., the persistence of that structural feature across scales. At t1, points are concentrated close to the diagonal, implying that most features appear and disappear rapidly. This corresponds to a homogeneous or equilibrated structure, where all components behave similarly, resulting in a low TSI. At t2, a few points begin to separate from the diagonal, representing longer-lived features that coexist with short-lived ones. The system exhibits partial structural differenti-
ation, and the TSI rises accordingly. By t3, the dispersion of points is substantial, some features persist for long intervals while others vanish quickly, indicating that the system has become topologically heterogeneous and dynamically unstable. This stage yields a high TSI, reflecting increased variability in structural lifetimes. The right panel translates these qualitative changes into a quantitative trajectory: as the variance of lifetimes across the persistence diagrams grows, the TSI incre-
ases over time. A rising TSI therefore signals the onset of structural reorganization or regime transition. In financial or economic contexts, such upward trends may precede market instability or systemic stress; in behavioral data, they may correspond to emerging volatility in consumer attention or segmentation dynamics. A more detailed exploration of the Topological Stability Index, including theoretical properties and empirical calibration, is left for a sequel paper [11].
6.6 Reporting Standards and Reproducibility
As Topological Data Analysis becomes more prevalent in applied analytics, consistent reporting practices are essential to ensure transparency and reproducibility. Each empirical study should clearly document the modeling choices that shape its topological results, including:
31

• Data and pre-processing: dataset description, time-windowing scheme, normalization, detrending, and any symbolic transformation applied;
• Distance metric: definition, rationale for selection, and parameter settings (e.g., correlation, DTW, or symbolic distance);
• Complex construction: type of complex used (Vietoris-Rips, witness, Čech, or alpha) and range of filtration thresholds ε;
• Homology dimensions: the topological dimensions analyzed (H0, H1, optionally H2) and their domain interpretation;
• Software and computation: algorithms or libraries employed (e.g., Ripser, GUDHI, giotto-tda) and computational settings;
• Interpretation layer: visualization or feature extraction method used (barcodes, persistence diagrams, images, or derived indices such as the TSI).
A concise summary table may accompany each application, mapping these methodological choices to their analytical consequences. Such documentation not only facilitates replication and benchmarking but also fosters comparability across domains, allowing financial, behavioral, and macroeconomic studies to speak a common geometric language. Adopting reproducible standards thus transforms TDA from a mathematical tool into a transparent, evidence-based methodology for modern data analytics.
6.7 Conceptual Summary
Topology offers a language for describing structure without assuming a specific model. The stability of persistence guarantees robustness against noise; the filtration framework captures how organization evolves across scales; and derived indices such as the Topological Stability Index (TSI) translate geometric variability into interpretable diagnostics. Together, these principles explain why TDA generalizes naturally across consumer, market and macro-financial domains. They also reconcile mathema-
tical abstraction with empirical insight, positioning topology as both a theoretical foundation and an operational framework for analyzing complexity in economic and behavioral systems.
7 Practical Guidelines and Reporting Standards
7.1 Bridging Mathematics and Practice
While the conceptual foundations of TDA are mathematically rigorous, its impact in applied analytics depends on transparent, interpretable and reproducible implementation. This section provides concrete guidelines for analysts and researchers applying TDA in business, financial or behavioral settings. The focus is on clarity and methodological consistency rather than algorithmic novelty, aiming to bridge the gap between formal theory and operational practice.
7.2 A Minimal Reporting Checklist
Table 4 summarizes essential information that should accompany every empirical TDA study. Such transparency enables replication, facilitates comparison across domains, and ensures that structural interpretations are grounded in coherent methodological choices.
32

Table 4: Minimal reporting checklist for empirical TDA studies.
Component Information to Report and Justify
Data Source and Scope
Dataset origin, frequency, time span, variables, pre-processing (normalization, detrending, missing-data handling). Distance Metric Definition and rationale (Euclidean, correlation, cosine, DTW, symbolic, etc.). Clarify why it matches domain semantics. Complex Type Vietoris–Rips, Čech, Alpha or Witness complex; filtration range. Persistence Dimensions
Which homology dimensions are analyzed (H0, H1, possibly H2) and why these are meaningful. Software and Parameters
Library used (e.g., GUDHI, Ripser, giotto-tda), numerical precision and computational settings. Summary Statistics Total persistence, lifetime variance, Topological Stability Index (TSI), or other derived indicators. Interpretation Framework
Economic or managerial meaning of persistent features (clusters, cycles, stability). Validation Sensitivity analysis across metrics, window sizes and filtration parameters.
7.3 Good Practices for Applied Analysts
The following recommendations enhance the robustness, interpretability, and credibility of applied TDA studies:
• Normalize before geometry. Ensure that the distance matrix reflects genuine structure, not scale differences or non-stationarity.
• Prefer simple complexes. Vietoris–Rips complexes are sufficient in most business and financial settings; only move to Alpha or Witness when computationally necessary.
• Track persistence over time. Rolling-window analyses reveal when topological features appear or vanish, linking them to economic or behavioral events.
• Visualize with clarity. Use persistence diagrams and barcodes alongside standard plots (correlation matrices, PCA) to highlight complementary insights.
• Quantify uncertainty. Report sensitivity of persistence features to metric choice and noise; bootstrap diagrams if feasible.
• Integrate with domain metrics. Integrate TDA outputs with volatility indices, sentiment measures, or KPIs to strengthen managerial relevance.
7.4 Reproducibility and Open Data
To encourage cumulative progress, reproducible scripts and open datasets should accompany all TDA studies whenever licensing allows. Providing persistence diagrams, distance matrices, and parameter files facilitates comparison and benchmarking. Repositories such as GitHub or institutional archives enable transparent dissemination and foster interdisciplinary reuse, bridging mathematics, data science and applied economics.
33

7.5 From Workflow to Standard Practice
Over time, TDA can become part of the standard analytics toolbox, comparable to correlation or PCA today. For this to occur, two practices are crucial: (i) explicit documentation of methodological choices, and (ii) consistent reporting of interpretive conventions (e.g., what constitutes a “long-lived” feature). Adherence to such conventions will allow future metaanalyses, enabling systematic assessment of topological indicators across markets and behavioral datasets.
8 Conclusion and Outlook
This work has shown how Topological Data Analysis can function as a unifying geometric framework for business, financial and behavioral analytics. By focusing on the shape of data rather than its point-wise fluctuations, TDA reveals forms of structural organization that complement, and often extend, traditional statistical tools.
Across the three comparative studies of § 5, persistent homology captured:
• sectoral cohesion and cyclical co-movements in equity markets;
• recurring waves of collective attention in consumer behavior;
• regional and policy-aligned currency blocs in the foreign-exchange network.
Despite the diversity of domains, these applications share a common geometric logic: stable topological features correspond to persistent economic organization, while rapid changes in persistence signal transitions, volatility or structural reconfiguration. The theoretical analysis clarified why this framework is both robust and interpretable. Persistence diagrams are mathematically stable under noise, scale naturally across thresholds, and summarize connectivity and cycles in ways that remain mea-
ningful across contexts. The proposed Topological Stability Index (TSI) translates these abstract notions into quantitative diagnostics for systemic risk, market dynamics and consumer behavior, bridging topological insight with managerial and policy relevance.
Future Directions. The next frontier for applied TDA lies in integration across analytical paradigms and domains:
1. Hybrid modeling: combining symbolic, statistical and topological features within machinelearning pipelines for forecasting, segmentation and anomaly detection;
2. Dynamic systems: extending persistence analysis to evolving networks and non-stationary manifolds, enabling real-time monitoring of market or behavioral transitions;
3. Cross-domain applications: applying topology to sustainability analytics, consumer sentiment networks, innovation diffusion and policy-coordination studies.
Closing reflection. Modern data environments are increasingly relational, nonlinear and dynamic. In such settings, topology provides a coherent language for describing stability, transition and emergence. By linking mathematical structure to empirical meaning, TDA bridges theory and application, offering a scalable, interpretable paradigm for understanding the hidden geometry of data.
Acknowledgements. The author gratefully acknowledges the contributions of his students Fredrik Hobbelhagen, Pola Bereta and Pattravadee (Marie) de Favereau de Jeneret, whose research inspired and informed the comparative studies presented in this survey.
34

References
[1] Adams, H., Emerson, T., Kirby, M., Neville, R., Peterson, C., Shipman, P., Chepushtanova, S., Hanson, E., Motta, F., & Ziegelmeier, L. (2017). Persistence images: A stable vector representation of persistent homology. Journal of Machine Learning Research, 18, 1-35.
[2] Aktas, M.E., Akbas, E. & Fatmaoui, A.E. (2019). Persistence homology of networks: methods and applications. Appl Netw Sci 4, 61.
[3] Bereta, P., & Diamantis, I. (2025). The shape of consumer behavior: A symbolic and topological analysis of time series. arXiv preprint, arXiv:2506.19759[stat.ML].
[4] Cámara P. (2017). Topological methods for genomics: present and future directions. Curr Opin Syst Biol. 1, 95–101.
[5] Carlsson, G. (2009). Topology and data. Bulletin of the American Mathematical Society, 46(2), 255-308.
[6] Chazal, F., Cohen-Steiner, D., Glisse, M., Guibas, L. J., & Oudot, S. (2009). Proximity of persistence modules and their diagrams. In Proceedings of the twenty-fifth annual symposium on Computational geometry (SCG ’09). Association for Computing Machinery, New York, NY, USA, 237–246.
[7] Cohen-Steiner, D., Edelsbrunner, H., & Harer, J. (2007). Stability of persistence diagrams. Discrete & Computational Geometry, 37, 103-120.
[8] Crawford, L., Monod, A., Chen, A. X., Mukherjee, S., & Rabadán, R. (2020). Predicting Clinical Outcomes in Glioblastoma: An Application of Topological and Functional Data Analysis. Journal of the American Statistical Association, 115(531), 1139-1150.
[9] Edelsbrunner, H., & Harer, J. (2010). Computational Topology: An Introduction. American Mathematical Society.
[10] De Favereau de Jeneret, P., & Diamantis, I. (2025). Topology of currencies: Persistent homology for FX co-movements. arXiv preprint, arXiv:2510.19306[stat.ML].
[11] I. Diamantis, The Topological Stability Index, manuscript in preparation.
[12] Ghrist, R. (2008). Barcodes: The persistent topology of data. Bulletin of the American Mathematical Society, 45(1), 61-75.
[13] Gidea, M., & Katz, Y. (2018). Topological data analysis of financial time series: Landscapes of crashes. Physica A: Statistical Mechanics and its Applications, 491, 820-834.
[14] Hobbelhagen, F., & Diamantis, I. (2024). A comparative study of symbolic aggregate approximation and topological data analysis. Quantitative Finance and Economics, 8(4), 705-732.
[15] de Jesus, L.C., Fernández-Navarro, F. & Carbonero-Ruz, M. (2025) Enhancing financial time series forecasting through topological data analysis. Neural Comput & Applic 37, 6527-6545.
[16] Katz Y., & Biem A. (2021). Time-resolved topological data analysis of market instabilities. Physica A: Statistical Mechanics and its Applications, 571, 125816.
[17] Kramar, M., Goullet, A., Kondic, L., & Mischaikow, K. (2013). Persistence of force networks in compressed granular media. Physical Review E, 87, 042207.
35

[18] Otter, N., Porter, M. A., Tillmann, U., Grindrod, P., & Harrington, H. A. (2017). A roadmap for the computation of persistent homology. EPJ Data Science, 6(17).
[19] L. Lacasa, B. Luque, F. Ballesteros, J. Luque, & J.C. Nuño, (2008). From time series to complex networks: The visibility graph, Proc. Natl. Acad. Sci. U.S.A. 105 (13) 4972-4975.
[20] Lazar, N., & Ryu, H. (2021). The Shape of Things: Topological Data Analysis. CHANCE, 34(2), 59-64.
[21] Lee, H., Kang, H., Chung, M. K., Kim, B. N., & Lee, D. S. (2012). Persistent Brain Network Homology From the Perspective of Dendrogram. IEEE Transactions on Medical Imaging, 31(12), 2267-2277.
[22] Jessica Lin, Eamonn Keogh, Stefano Lonardi, and Bill Chiu. 2003. A symbolic representation of time series, with implications for streaming algorithms. In Proceedings of the 8th ACM SIGMOD workshop on Research issues in data mining and knowledge discovery (DMKD ’03). Association for Computing Machinery, New York, NY, USA, 2-11.
[23] Battuguldur Lkhagva, Yu Suzuki, and Kyoji Kawagoe. (2006). Extended sax: Extension of symbolic aggregate approximation for financial time series data representation. In Proceedings of the 17th Data Engineering Workshop, IEICE, 2006.
[24] Snášel V., Nowaková J., Xhafa F., Barolli L., (2017). Geometrical and topological approaches to Big Data, Future Generation Computer Systems, 67, 286-296.
[25] Tralie et al., (2018). Ripser.py: A Lean Persistent Homology Library for Python. Journal of Open Source Software, 3(29), 925.
[26] Tauzin, G., Lupo, U., Tunstall, L., Burella Pérez, A., Caorsi, M., Medina-Mardones, A. M., Dassatti, A., & Hess, K. (2021). giotto-tda: A topological data analysis toolkit for machine learning and data exploration. Journal of Machine Learning Research, 22, 1–6.
[27] Wasserman, L. (2018). Topological data analysis. Annual Review of Statistics and Its Application, 5(1), 501-532.
[28] Zomorodian, A., & Carlsson, G. (2005). Computing persistent homology. Discrete & Computational Geometry, 33, 249–274.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:12.313Z
- **Text Length:** 89801 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
