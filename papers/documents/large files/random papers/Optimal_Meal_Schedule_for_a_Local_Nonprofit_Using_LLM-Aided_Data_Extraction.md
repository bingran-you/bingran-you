# PDF Document: Marin et al. - 2025 - Optimal Meal Schedule for a Local Nonprofit Using LLM-Aided Data Extraction.pdf

**File Path:** Marin et al. - 2025 - Optimal Meal Schedule for a Local Nonprofit Using LLM-Aided Data Extraction.pdf

**Processed Date:** 2026-02-10T18:17:27.315Z

**File Size:** 818.50 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3461

**Title:** Optimal Meal Schedule for a Local Nonprofit Using LLM-Aided Data Extraction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimal Meal Schedule for a Local Nonprofit Using LLM-Aided Data Extraction
Sergio Marin1, Nhu Nguyen1, Max (Bohong) Zheng1, Christina M. Weaver1 1Department of Mathematics & Statistics, Franklin & Marshall College, Lancaster, PA, USA 17604
Abstract We present a data-driven pipeline developed in collaboration with the Power Packs Project, a nonprofit addressing food insecurity in local communities. The system integrates data extraction from PDFs, large language models for ingredient standardization, and binary integer programming to generate a 15-week recipe schedule that minimizes projected wholesale costs while meeting nutritional constraints. All 157 recipes were mapped to a nutritional database and assigned estimated and predicte-
d costs using historical invoice data and category-specific inflation adjustments. The model effectively handles real-world price volatility and is structured for easy updates as new recipes or cost data become available. Optimization results show that constraint-based selection yields nutritionally balanced and cost-efficient plans under uncertainty. To facilitate real-time decision-making, we deployed a searchable web platform that integrates analytical models into daily operations by enabling s-
taff to explore recipes by ingredient, category, or through an optimized meal plan.
Keywords: large language model; optimization; data extraction; meal recipes; nonprofit
Introduction
Food insecurity, commonly defined as the lack of reliable access to affordable and nutritious food, remains a persistent challenge that affects millions of households in the United States, with serious implications for child development and family well-being [1]. In 2023 alone, an estimated 18 million US households experienced food insecurity [2]. The Power Packs Project (PPP), a nonprofit based in Lancaster, Pennsylvania, addresses this problem by distributing weekly food boxes and recipe cards t-
o families with school-aged children in Lancaster, Lebanon, and York counties [3]. In the academic year 2024-25, PPP averaged more than 14,000 meals per week. By pairing donated or low-cost ingredients with simple and nutritious recipes, PPP not only improves food
1
arXiv:2511.18483v1 [cs.CY] 23 Nov 2025

security, but also encourages families to cook and eat together, a practice associated with improved nutritional and psychosocial outcomes for children [4, 5, 6]. Families who pick up their weekly Power Pack report less food-related stress and greater food sufficiency compared to those who do not [7]. Despite its impact, PPP operates with a small paid staff and a large volunteer base, making efficiency crucial. Over the past six years, PPP has produced more than 150 recipes, stored as PDFs, many -
of which are reused or adapted depending on available inventory. Through partnerships and donations, ingredients are often acquired at low or zero cost, but unpredictable availability and inflation make it difficult to anticipate the cost of any given recipe. Optimization methods such as linear programming have been widely applied in institutional contexts, such as schools and long-term care facilities, to generate lowcost nutritionally adequate meal plans [8]. Many of these models adopt multi-obj-
ective frameworks to jointly address cost, environmental impact, food waste, and nutritional quality. For instance, Vici [9] optimized Italian primary school menus with respect to nutrition, sustainability, and food waste, while Benvenuti and De Santis [10] developed a binary linear programming model to produce balanced and cost-effective diets in schools and nursing homes. Despite their strengths, these systems are typically designed for fixed meal services with stable data inputs, which limits t-
heir applicability in dynamic, resource-constrained environments such as community nonprofits. In parallel, advances in natural language processing, particularly large language models (LLMs), have enabled robust extraction and standardization of unstructured text data, including ingredient strings. Applications of LLMs in the food domain are emerging, such as food name entity linking [11], but few tools exist that apply these models in a practical, nonprofit setting for real-time nutritional and c-
ost analysis. In this study, we present a data-focused pipeline designed in close collaboration with the PPP team. Our system digitizes and cleans their full archive of recipes, uses LLMbased semantic matching to align ingredient strings with a nutritional database, and links each recipe to a predicted wholesale cost using historical invoices and categoryspecific inflation adjustments. A binary integer programming model then selects an optimized 15-week recipe schedule that satisfies key nutrition-
al thresholds while minimizing expected cost. All data are integrated into a searchable web platform that allows PPP staff to plan by ingredient, category, or optimized schedule. This work contributes a scalable, low-barrier system that blends modern NLP and optimization methods within a nonprofit’s operational workflow. The pipeline is modular and extensible, supporting future use cases such as inventory-aware planning or dynamic cost tracking, and demonstrates how tailored data tools can support-
 communitylevel food security with measurable impact. A visual summary of the full pipeline is shown in Figure 1.
2

Power Packs Recipes (~150)
Wholesale supplier data
Wholesale cost
PDF text extraction
price prediction
string matching
portion sizing
data
Nutrition
AB
Binary Linear Integer Programming
Recommendations
Optimal Recipe
Fig. 1. Recipe optimization workflow. A: Excerpt from one recipe used for data extraction. B: Flowchart of our approach, starting from the provided recipes and invoices, to our optimal recipe recommendations.
1. Methods
All code was written in Python 3.12.5 and RStudio 4.4.2 [12, 13].
1.1 Recipe Database Construction
We compiled a comprehensive database of 157 recipes distributed by PPP from the academic years 2019–2020 through 2024–2025, sourced from Microsoft Word and PDF documents. Typically PDFs were read using standard Python tools. When necessary, optical character recognition (OCR) was used to extract text from non-selectable formats. The resulting dataset, in which each unique recipes is tagged with its distribution year and full ingredient list, was reviewed manually for errors. Recipes were assigned -
to one of four categories based on the kind of protein it contained: beef, poultry, seafood, or vegetarian.
1.2 String-Matching for Nutritional Mapping
To quantify nutritional data for each recipe, we first compared PPP recipe ingredient strings against more than 13, 000 entries in the freely-available My Food Data (MFD) nutritional database [link]. The matching process uses the all-MiniLM-L6-v2 model from the SentenceTransformers library in Python [14], which encodes text strings into unique representations within a 384-dimensional vector space. The semantic similarity between two strings A and B was measured as
sim(A, B) = cos θ = A · B
‖A‖ ‖B‖, (1)
where θ is the angle between A and B in this embedded vector space. We implemented a two-stage string matching approach, first identifying the string from MFD with highest similarity to a given PPP ingredient. If visual inspection confirmed this match was suitable, the MFD identification number was saved. Otherwise,
3

the four next-best matches between the ingredient and MFD strings were identified, and the best match of these five candidates was identified visually. If none of the five candidates were suitable, an appropriate match was identified by a manual search of MFD. After obtaining suitable mappings between PPP ingredients and MFD entries, we converted nutritional information from MFD (reported per 100 g) to reflect per-person serving sizes from the PPP recipes. Since recipe measurements were given in -
household units such as cups, ounces, or cans, ingredient weights could vary widely. Recipes with missing ingredient measurements were updated by hand, based on measurements in similar recipes. Ingredient categories with similar weights were grouped together manually, with reasonable measurement-to-weight conversion factors identified accordingly. Nutritional values per serving for each recipe were then obtained by summing those from each ingredient. Nutrients obtained included calories; protein, -
fiber, carbohydrates, fat, saturated fats (measured in g); calcium, iron, magnesium, vitamin C, zinc, cholesterol, sodium (measured in mg); and folate as well as vitamins C, B6 and B12 (measured in mcg). These were selected through consultation with a dietitian.
1.3 Recipe Price Prediction
To assess the cost of ingredients, we constructed a second, product pricing database using historical vendor invoice PDFs from four sources: the Central Pennsylvania Food Bank, the Restaurant Store, and two local produce wholesalers. We had one year of data (2024–25) from all sources, plus three more years from the Central PA Food Bank (2021–24). We extracted and cleaned product-level pricing data, categorizing items by food group. Then each recipe ingredient was matched manually to one or more en-
tries from the pricing database, enabling estimation of the price per unit (or per pound, as appropriate) over time. PPP sometimes (but not always) obtained recipe ingredients for free. We used this to construct a basic model of Ci, the cost of each ingredient i for the 2025–26 academic year:
Ci = P (Bi) · p ̄i · (1 + Ii), (2)
where Bi is the probability of buying the ingredient (estimated as the number of times PPP purchased the item, divided by the number of times they ordered it), p ̄i is its average historical unit price, and Ii is its price inflation factor (Table 1; [15, 16, 17, 18, 19] ). Summing the predicted, per-unit cost of all ingredients in a recipe yields Rj, the inflation-adjusted predicted cost for recipe j.
Table 1. Price inflation factors for various food categories.
Product Beef Poultry Seafood Eggs Legumes Dairy Factor 6.8 2.3 3 40 2.7 1.7
Product Pasta/Rice Fruit Vegetables Baking Spices Soups Factor -0.6 1.6 -2.5 1.5 1.6 1.6
4

1.4 Web Platform for Recipe Access and Nutrition/Cost Exploration
A user-friendly web application was developed [https://powerpacks.dreamhosters.com/] to enable PPP to search and explore the recipe database. Users can search recipes by category or ingredients and view standardized ingredient lists.
1.5 Optimization of Future Recipe Schedule
Once the database of nutrition and price information was constructed for all N = 157 recipes, we applied binary linear integer programming to identify M recipes which minimized the total cost while maintaining a basic level of nutrition and including recipes from each of the four protein categories. Here we used M = 15, representing the number of recipes that cover the first half of PPP’s upcoming academic year. For flexibility in the flavor profiles of selected recipes, we chose to enforce only t-
hree broad nutritional constraints: that the average amount of protein and calcium among selected recipes
were above certain minimal values (P ̄min = 15 g and C ̄min = 433.33 mg respectively),
and that the average amount of fat was below a certain maximum (C ̄min = 30 g). These protein and calcium bounds are equal to one-third the daily intake recommended by USDA for 14–18 year-old children [20]. The maximal fat bound equals half of 60 grams, which is an estimate of the maximal daily fat intake recommended for an 1800-calorie diet (≤ 30% of daily calories from fat [21]). Mathematically, letting xj ∈ {0, 1} denote whether recipe j was selected, we formulated the problem as follows:
min
N
∑
j=1
Rj xj
such that
N
∑
j=1
P rot(j) · xj ≥ P ̄min · M
N
∑
j=1
Cal(j) · xj ≥ C ̄min · M
N
∑
j=1
F at(j) · xj ≤ F ̄max · M,
N
∑
j=1
xj = M
⌊M
4
⌋
≤
∑ xj∈Categoryk ≤
⌊M
4
⌋
+ 1 ∀k ∈ {Beef, Poultry, Seafood, Vegetarian}.
Here, Rj is the predicted cost of recipe j, while P rot(j), Cal(j) and F at(j) represent the amounts of protein, calcium, and total fat in recipe j respectively. The floor functions ensure that the number of recipes from each protein category is approximately equal. The solution to this linear program provides a nutritionally adequate and cost-effective meal plan that meets the operational needs of the Power Packs team.
5

2. Results
2.1 Ingredient Matching and Nutrition Conversion Results
Construction of the recipe database extracted from four years’ worth of PPP’s PDF files identified a total of 866 ingredients across 157 recipes. Python’s SentenceTransformers function used semantic embeddings to map each PPP recipe ingredient and My Food Database (MFD) entry onto a 384-dimensional vector space. Then the similarity measure predicts which of the MFD entries were most similar semantically to the recipe ingredient. As an example, Figure 2A shows the black vector corresponding to the -
PPP recipe ingredient “Milk" along with different colored vectors corresponding to four phrases from MFD. The two kinds of milk which are typically in liquid form —as one would assume “Milk" is in a PPP recipe—point in very similar directions to the Milk vector. The two other MFD entries are pointing in very different directions. Among these four MFD entries, “Goat Milk" has highest semantic similarity to “Milk" (0.82), though manually we would identify “Whole Milk" as a better match.
-0.8 -0.6 -0.4 -0.2 0.0 0.2 0.4 First Principal Component
Second Principal Component
Beef Dehydrated Milk
Whole Milk
Goat Milk
Milk
-0.2
0.0
0.2
-0.3
-0.1
0.1
0.3
AB
CC
C
0.82
0.80
0.69
0.52
Fig. 2. Matching strings of PPP recipe ingredients to the My Food Database. A:
projection of five phrases onto the first two principal components of the SentenceTransformer vector space. B-C: Successful ingredient matches after stage one (B) or stage two (C). Orange highlighting indicates manually identified best match.
Our two-stage string-matching approach proved effective in aligning PPP recipe ingredients with MFD database entries. In total, 87% of the ingredients received a valid match in the first stage. These matches demonstrated strong semantic alignment between the recipe terms and MFD entries, with high cosine similarity scores, as shown in Figure 2B. Some of these semantically similar best matches had text strings that were nearly identical; in other cases, the actual strings were quite different. The -
remaining 13% of ingredients required the second string-matching stage. While the similarity scores for the second through fifth candidates were generally lower than
6

the top-ranked match, the lower-ranked options often provided better contextual alignment with the original recipe ingredient. In some cases, the best match had a similarity score below 0.5. For example, in Figure 2C, the similarity score for “Seasoning Mix Dry Sazon Coriander & Annatto” was 0.436—the lowest among the top three candidates shown—but ultimately we decided it was the most appropriate match for our goal of estimating nutritional information of the original “Adobo Seasoning" ingredien-
t. On the rare occasion that a recipe ingredient had no suitable match after stage two, we identified the best match among MDB entries manually. After finalizing MFD matches for all PPP ingredients, we proceeded to convert the MFD nutritional data as described above. The result was a powerful and robust dataset that illustrated the nutritional diversity of PPP recipes (Fig. 3). The scatterplot of calories versus fat revealed a positive but diffuse correlation. Recipes with higher values of both qu-
antities were mostly found in the beef and poultry categories. However, a few vegetarian and seafood recipes also appeared in the upper-right quadrant as outliers, despite most of them clustering in the lower-left region with lower fat and calorie content. One of these outliers (solid green circle) was a Macaroni and Cheese recipe, selected by the optimization procedure below. This variation highlights the trade-offs involved in selecting energy-dense versus leaner meals across different protein t-
ypes, as part of a varied diet. Examining calcium vs. protein (Fig. 3B) revealed that most beef, poultry, and seafood dishes fall to the right of the protein lower bound, while vegetarian recipes tend to lie on the left side, reflecting their generally lower protein content. Two clear outliers—one seafood and one vegetarian recipe—show unusually high calcium values. Further inspection reveals that these two are Seafood Chowder and Macaroni and cheese recipes (Table 2). Boxplots of carbohydrates, c-
holesterol, and sodium, respectively, are shown in Figure 3C-E. For cholesterol and sodium, beef recipes exhibit the highest median values, while vegetarian meals show the lowest. This pattern is consistent with expectations based on ingredient types. However, the carbohydrate distribution reveals a different trend: vegetarian recipes tend to have the highest carbohydrate content on average. This reflects the reliance of vegetarian meals on grains, legumes, and starch-heavy components.
2.2 Price Estimation and Prediction
Historical invoice data revealed that wholesale prices of some recipe ingredients varied substantially over time (Fig. 4A). Some items, like canned salmon, were free consistently. Others were used frequently but only free occasionally, including white rice and pinto beans; some (like plantains) were purchased but only rarely. Figure 4B compares the predicted cost of recipes across protein categories. Beef recipes exhibited the highest median cost and variability, closely followed by seafood and po-
ultry. Vegetarian meal costs were lowest. Our model predicts that the overall effects of price inflation on PPP will vary widely over the next year (Fig. 4C). While we predicted modest increases for most recipes, with current inflation estimates we expect that prices of about 30% of recipes will decrease.
7

Fig. 3. Nutritional Metrics of PPP Recipes. A-B: Projections of PPP recipes onto Fat vs. Calories, and Protein vs. Calcium. Dashed lines indicate the bounds for average fat, calcium, and protein during optimization; filled circles indicate recipes included in the optimal schedule, C-E: Distribution of other dietary elements, separated by protein category.
2.3 Recipe optimization
Combining our compiled nutritional information and predicted recipe prices, we used linear programming to recommend an optimal recipe schedule that PPP might use for the first half of their upcoming academic year distribution (15 weeks). See Table 2. The selected plan achieved a total estimated cost of $25.05 per 4-person family, with a cumulative nutritional content of 512.5 g of protein, 6518.3 mg of calcium, and 385.5 g of fat (mean values of 34.17 g, 434.55 mg, and 25.7 g per serving respectiv-
ely). As intended, the 15 recipes include at least 3, and no more than 4, recipes from each category.
3. Discussion
The present study developed a pipeline to provide the Power Packs Project, a local nonprofit, with essential information that will help them perform their job more efficiently on a weekly-to-monthly basis. The recommended optimal recipe schedule will also help PPP spend their funds more effectively over the coming year. The pipeline leverages LLMs, operations research (optimization and basic stochastic modeling), and other data science tools. Our intent to work directly with PPP to support, not re-
invent, their recipe workflow is a novel aspect of the work which allows it to have immediate
8

Product
0.00
0.25
0.50
0.75
2021 2022 2023 2024 2025
Date
Price per lb
canned pinto beans
canned salmon
plantains
white rice
BC
A
Percentage Increase
Number of Recipes
Category
Predicted Cost ($)
Main Protein Beef Poultry Seafood Vegetarian
Beef Poultry Seafood Vegetarian
0
10
20
30
-2.5 0.0 2.5 5.0
1
2
3
4
5
Fig. 4. Price Estimation and Prediction. (A) Historical prices per pound of selected ingredients. (B) Predicted recipe costs by protein category. (C) Histogram of percentage increase in predicted cost across recipes.
real-world impact. This pipeline can be replicated for work with any local organization fighting food insecurity, further increasing its potential reach. Beyond the recipe optimization itself, the system makes the PPP team’s work easier by helping them keep track of which recipes and ingredients have been used, and by providing quick access to that information. This improves weekly operational efficiency and supports longer-term planning. The recommended plan reflects a well-balanced distribution -
across food categories, maintains affordability, and satisfies essential nutritional thresholds. In addition, the pipeline is designed for easy updates: PPP staff can add new recipes to the database over time with minimal effort, ensuring the tool remains useful as their needs evolve. The string-matching procedure provided an essential means for connecting recipe ingredients with nutritional information, and will continue to offer value as new recipes are added. While this did require a few rounds-
 of manual intervention, the overall time to obtain these matches was much quicker than if we had trained our own language model [11]. Some challenges with the pricing data affected our ability to generate accurate price predictions. Certain wholesale price trends may be influenced by local factors
9

Table 2. Results of the 15-week optimized meal plan.
Beef Poultry Seafood Vegetarian Beef Fried Rice, $0.62
Turkey Chili Dogs, $1.43
Salmon Patties, $0.41
Bean Chili Cheese Fries, $0.45 Beef Chili Bake, $2.09
Egg & Turkey Sausage Breakfast, $1.44
Deconstructed Salmon Roll with Cucumber, $0.76
Cauliflower Soup, $1.30
Taco Bowl, $3.07 Chicken & Bean Burritos, $2.06
Salmon Croquettes with Mac and Cheese, $1.60
Vegetarian Chili Stuffed Baked Potato, $1.53 Turkey and Cheese Sandwiches & Soup, $2.79
Seafood Chowder, $2.75
Macaroni and Cheese, $2.75
unrelated to national supply and demand. For example, discounts on items nearing expiration at the Central PA Food Bank. Local produce prices may also fluctuate based on seasonality or weather, which, in some cases, could actually benefit PPP if the system is flexible enough to adapt recipe choices accordingly. We observed considerable variation in prices for items such as canned pinto beans and white rice, likely driven by market dynamics or donation-based availability. These fluctuations justifi-
ed the use of category-specific constraints in the optimization model to balance both affordability and nutritional diversity. Moreover, we tracked invoices from the four main sources of PPP’s inventory; others, including seasonal community food drives, may cause PPP’s recipe costs to be even lower than we predict. One limitation of our cost prediction model is its reliance on general inflation estimates, which are inherently uncertain and subject to rapid change. For example, most of our predicte-
d recipe prices rely on the projected price decline in vegetables [15]; if instead vegetable prices rise in the next several months, our current model will be outdated. Fortunately, the model was designed for easy re-use: it can be re-run using updated inflation assumptions as needed. Looking forward, several plausible inflation scenarios could be incorporated into a Monte Carlo framework to provide better estimates of average costs, including confidence intervals. Several directions for future wo-
rk remain. We did not employ regression for price prediction due to limited historical depth of invoices; this would become feasible as more data become available. We could also model the retail costs that families would pay to prepare these meals on their own, optimizing both retail and wholesale costs with a multi-objective approach. Incorporating data from user meal preference surveys could further enhance our recommended recipe schedule. Finally, the website infrastructure is being expanded to-
 include dynamically generated nutritional summaries, estimated cost breakdowns, and interactive visualizations of price trends. These features will support transparency, enhance usability, and allow for direct integration with the optimization system. In the longer term, the system could also incorporate data on real-time warehouse management by tracking product quantities, expiration dates, and unit costs. Such updates would further improve timeand cost-efficiency, helping Power Packs to fulfill-
 their noble mission: ending hunger among school children over the weekend [3].
10

References
[1] C. T. Hines, A. J. Markowitz, and A. D. Johnson, “Food Insecurity: What Are Its Effects, Why, and What Can Policy Do About It?,” Policy Insights Behav. Brain Sci., vol. 8, no. 2, pp. 127–135, Oct. 2021, doi: 10.1177/23727322211032250.
[2] “Food Security in the U.S. - Key Statistics & Graphics | Economic Research Service.” Accessed: Jul. 06, 2025. [Online]. Available:
https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-us
[3] “Power Packs Project,” Accessed: Jul. 11, 2025. [Online]. Available: https://www.powerpacksproject.org/
[4] A. J. Hammons and B. H. Fiese, “Is Frequency of Shared Family Meals Related to the Nutritional Health of Children and Adolescents?,” Pediatrics, vol. 127, no. 6, pp. e1565–e1574, Jun. 2011, doi: 10.1542/peds.2010-1440.
[5] “Routine and ritual elements in family mealtimes: Contexts for child wellbeing and family identity.” Accessed: Jul. 06, 2025. [Online]. Available: https://onlinelibrary.wiley.com/doi/10.1002/cd.156
[6] L. P. Smith, S. W. Ng, and B. M. Popkin, “Trends in US home food preparation and consumption: analysis of national nutrition surveys and time use studies from 1965–1966 to 2007–2008,” Nutr. J., vol. 12, no. 1, p. 45, Apr. 2013, doi: 10.1186/1475-2891-12-45.
[7] R. M. Ryan, A. Gassman-Pines, S. Steimle, G. Baker, C. T. Hines, and A. D. Johnson, “The role of public and private food assistance in supporting families’ food security and meal routines,” Child. Youth Serv. Rev., vol. 150, p. 106994, Jul. 2023, doi: 10.1016/j.childyouth.2023.106994.
[8] V. Dooren and Corné, “A Review of the Use of Linear Programming to Optimize Diets, Nutritiously, Economically and Environmentally,” Front. Nutr., vol. 5, Jun. 2018, doi: 10.3389/fnut.2018.00048.
[9] G. Vici, D. Giustozzi, D. Camilletti, S. Zufolino, L. Malandrino, S. Renzi, S. Pucciarelli, S. Vincenzetti, L. Belli, and V. Polzonetti, “An evaluation and optimization of nutrition, environmental footprint, and food waste in Italian primary school menus: a case study,” J. Transl. Med., vol. 23, no. 1, p. 537, 2025, doi: 10.1186/s12967-025-06626-9.
[10] L. Benvenuti and A. De Santis, “Making a sustainable diet acceptable: An emerging programming model with applications to schools and nursing homes menus,” Front. Nutr., vol. 7, p. 562833, Nov. 2020, doi: 10.3389/fnut.2020.562833.
[11] D. Feher et al., “Few-shot entity linking of food names,” Inf. Process. Manag., vol. 60, no. 5, p. 103463, Sep. 2023, doi: 10.1016/j.ipm.2023.103463.
[12] “Python 3.12.5,” Python Software Foundation, Aug. 6, 2024. Accessed: Jul. 11, 2025. [Online]. Available: https://www.python.org/downloads/release/python-3125/
11

[13] “RStudio 4.4.2,” Posit, PBC, 2024. [Online]. Available: https://posit.co/download/rstudio-desktop/
[14] “all-MiniLM-L6-v2,” Hugging Face – Sentence Transformers, Accessed: Jul. 11, 2025. [Online]. Available: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
[15] “Summary Findings – Food Price Outlook,” U.S. Department of Agriculture Economic Research Service, Accessed: Jul. 11, 2025. [Online]. Available:
https://www.ers.usda.gov/data-products/food-price-outlook/summary-findings
[16] “Consumer Price Index – Table 2,” U.S. Bureau of Labor Statistics, Accessed: Jul. 11, 2025. [Online]. Available: https://www.bls.gov/news.release/cpi.t02.htm
[17] “In2013Dollars – Historical Price Inflation Calculators,” in2013dollars.com, Accessed: Jul. 11, 2025. [Online]. Available: https://www.in2013dollars.com
[18] “Food Price Inflation Slowed in 2023 and 2024,” U.S. Department of Agriculture – Amber Waves, Jun. 2025. Accessed: Jul. 11, 2025. [Online]. Available:
https://www.ers.usda.gov/amber-waves/2025/june/food-price-inflation-slowed-in-202
[19] “Egg prices rise again amid bird flu outbreaks,” Axios, Feb. 26, 2025. Accessed: Jul. 11, 2025. [Online]. Available:
https://www.axios.com/2025/02/26/bird-flu-egg-prices-growing-shortages-eggs
[20] “Dietary Guidelines for Americans, 2020-2025,” Accessed: Jul. 11, 2025. [Online]. Available:
https://www.dietaryguidelines.gov/sites/default/files/2021-03/Dietary_Guidelines_
[21] “Calculating Calories and Fat Grams,” Accessed: Jul. 11, 2025. [Online]. Available:
https://www.urmc.rochester.edu/encyclopedia/content?contenttypeid=85&contentid=P0
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:27.315Z
- **Text Length:** 28796 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
