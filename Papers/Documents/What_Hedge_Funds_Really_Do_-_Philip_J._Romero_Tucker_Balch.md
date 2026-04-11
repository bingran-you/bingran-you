# PDF Document: What Hedge Funds Really Do - Philip J. Romero, Tucker Balch.pdf

**File Path:** What Hedge Funds Really Do - Philip J. Romero, Tucker Balch.pdf

**Processed Date:** 2026-02-10T18:15:44.150Z

**File Size:** 3515.91 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 786

**Title:** What Hedge Funds Really Do - Philip J. Romero, Tucker Balch

**Collection:** Textbooks > Computer Science > Machine Learning for Trading

---

## Extracted Text Content

What Hedge Funds 
 Really Do

What Hedge Funds 
 Really Do
An Introduction to Portfolio Management
Philip J. Romero and Tucker Balch

What Hedge Funds Really Do: An Introduction to Portfolio Management Copyright © Business Expert Press, LLC, 2014. All rights reserved. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopy, recording, or any other except for brief quotations, not to exceed 400 words, without the prior permission of the publisher.
First published in 2014 by Business Expert Press, LLC 222 East 46th Street, New York, NY 10017 www.businessexpertpress.com
ISBN-13: 978-1-63157-089-6 (paperback) ISBN-13: 978-1-63157-090-2 (e-book)
Business Expert Press Economics Collection
Collection ISSN: 2163-761X (print) Collection ISSN: 2163-7628 (electronic)
Cover and interior design by Exeter Premedia Services Private Ltd., Chennai, India
First edition: 2014
10 9 8 7 6 5 4 3 2 1
Printed in the United States of America.

Abstract
What do hedge funds really do? These lightly regulated funds continually innovate new investing and trading strategies to take advantage of temporary mispricing of assets (when their market price deviates from their intrinsic value). These techniques are shrouded in mystery, which permits hedge fund managers to charge exceptionally high fees. While the details of each fund’s approach are carefully guarded trade secrets, this book draws the curtain back on the core building blocks of many hedge fun-
d strategies. As an instructional text, it will assist two types of students:
• Economics and finance students interested in understanding what “quants” do, and
• Software specialists interested in applying their skills to programming trading systems.
What Hedge Funds Really Do provides a needed complement to journalistic accounts of the hedge fund industry, to deepen the understanding of nonspecialist readers such as policy makers, journalists, and individual investors. The book is organized in modules to allow different readers to focus on the elements of this topic that most interest them. Its authors include a fund practitioner and a computer scientist (Balch), in collaboration with a public policy economist and finance academic (Romero).
Keywords
absolute return, active investment management, arbitrage, capital asset pricing model, CAPM, derivatives, exchange traded funds, ETF, fat tails, finance, hedge funds, hedging, high-frequency trading, HFT, investing, investment management, long/short, modern portfolio theory, MPT, optimization, quant, quantitative trading strategies, portfolio construction,

portfolio management, portfolio optimization, trading, trading strategies, Wall Street

Contents

Part I Chapter 1 Chapter 2 Chapter 3 Chapter 4 Chapter 5

The Basics Introduction So You Want to Be a Hedge Fund Manager An Illustrative Hedge Fund Strategy: Arbitrage Market-Making Mechanics Introduction to Company Valuation

Part II Chapter 6 Chapter 7

Investing Fundamentals: CAPM and EMH How Valuation Is Used by Hedge Funds Framework for Investing: The Capital Asset 
 Pricing Model (CAPM)

Chapter 8 The Efficient Market Hypothesis (EMH)—Its 
 Three Versions

Chapter 9 The Fundamental Law of Active Portfolio 
 Management

Part III Chapter 10

Market Simulation and Portfolio Construction Modern Portfolio Theory: The Efficient Frontier 
 and Portfolio Optimization

Chapter 11 Chapter 12

Event Studies Overcoming Data Quirks to Design 
 Trading Strategies

Chapter 13 Data Sources Chapter 14 Back Testing Strategies

Part IV Chapter 15

Case Study and Issues Hedge Fund Case Study: Long Term 
 Capital Management (LTCM)

Chapter 16 Opportunities and Challenges for Hedge Funds
Teaching Cases Glossary Summary Index

PART I
The Basics

CHAPTER 1
Introduction
George Soros, a poor Hungarian immigrant with a philosopher’s bent and a London School of Economics degree, founded Quantum Capital in the late 1960s and led it to breathtaking returns, famously “breaking the Bank of England” in 1992 by shorting the pound sterling. Julian Robertson, the hard-charging North Carolina charmer who made huge contrarian bets on stocks, built the Tiger Fund in the 1970s and seeded dozens of Tiger Cubs that collectively manage hundreds of billions of dollars. John Meriwet-
her left Salomon Brothers to collect a stable of PhDs in quantitative finance from University of Chicago to form the envied, and later notorious, Long Term Capital Management (LTCM). Each of these groups earned persistent returns for their investors that exceeded 30 percent per year, handily trouncing the market indexes. Each of their partners became billionaires, likely faster than ever before in history.
Each of these financial legends, and hundreds of other lesser-known investors, built a hedge fund. Private pools of funds have existed for as long as liquid capital markets—at least 800 years—but the first hedge fund is generally thought to be Albert Winslow Jones’ “hedged fund,” formed in the late 1940s. Since then, the number of such funds has grown into the thousands, and they manage trillions of dollars in clients’ funds.
Hedge funds are the least understood form of Wall Street institution— partly by design. They are secretive, clannish, and less visible. Hedge funds have received a generous share of envy when they are successful and demonization when financial markets have melted down. But whether you wish to join them or beat them, first you need to understand them, and how they make their money.

Hedge funds are pools of money from “accredited” investors—relatively wealthy individuals and institutions assumed to have sufficient sophistication to protect their own interests. Therefore, unlike publicly traded company stock, mutual funds, and exchange traded funds (ETFs), hedge funds are exempt from most of the laws governing institutions that invest on behalf of clients. Implicitly, policy makers seem to believe that little regulation is necessary. The absence of scrutiny has helped hedge fu-
nds keep their trading strategies secret.
Figure 1.1 Total hedge fund assets under management, 1997 to 2013 The scale of hedge funds has grown tremendously in the past few
decades, as illustrated in Figure 1.1. The amount of funds under management has grown by a factor of 15 from 1997 to 2013. Hedge funds today represent a large minority of all liquid assets in the United States, and only a somewhat smaller fraction worldwide (Figure 1.2).

Figure 1.2 Hedge funds compared with other asset classes
These lightly regulated funds continually adopt innovative investing and trading strategies to take advantage of temporary mispricing of assets (when their market price deviates from their intrinsic value). These techniques are shrouded in mystery, which permits hedge fund managers to charge exceptionally high fees. While the details of the approach of each of the funds are carefully guarded trade secrets, this book draws the curtain back on the core building blocks of many hedge fund strategies. -
As an instructional text, it will assist two types of students:
• Economics and finance students interested in understanding what “quants” do, and
• Software specialists interested in applying their skills to programming trading systems.
A number of fine journalistic accounts of the industry exist—and should be read by anyone interested in understanding this industry—which offer interesting character studies and valuable cautionary tales. These include The Quants by Scott Patterson (2010), The Big Short and Flash Boys by Michael Lewis (2010 and 2014, respectively), More Money Than God:

Hedge Funds and The Making of the New Elite by Sebastian Mallaby (2010), and When Genius Failed: The Rise and Fall of Long-Term Capital Management (2000) by Roger Lowenstein. But none dives very deeply into how quantitative strategies work. Many readers seek such tools so that they can improve current practice—from the inside, at hedge funds; or from the outside, as regulators, journalists, or advocates.
This book is a modest attempt to explain what hedge funds really do. Our focus is on the trading strategies that hedge funds use. We will provide basic investing and portfolio management background to the uninitiated, then move on to the computational details of efforts to automate trading strategies in machine learning systems.
This book is organized in modules; not all modules will be of interest to all readers. The main elements are as follows:
• Part I (Investing Basics) is a short introduction to investing for readers without prior financial training. Those with such training will find it worth a scan to refresh your recollection.
• Part II (Investing Fundamentals) outlines how to “optimize” a collection of investments—a portfolio—to maximize the ratio of return to risk within any constraints imposed by your situation.
• Parts I and II together constitute the financial background that computer scientists will need to program trading systems. Part III constitutes the core techniques of interest to programmers.
• Part III (Market Simulation and Portfolio Construction) describes the heart of most “quant” (quantitative) hedge funds’ strategies—testing proposed trading rules based on historical market experience.
• Part IV (Case Study and Future Directions) provides important context regarding recent and prospective developments in the hedge fund industry, which will set the environment in which investors and programmers will operate.

• Finally, the back matter includes a glossary and a list of related teaching cases for use by instructors who use this book in their courses.
The book will be of interest to a variety of readers:
• Individual investors considering investing in “quant” mutual funds and ETFs, which are increasingly prevalent as Wall Street Markets “absolute return” and “liquid alternative” products to you.
• IT students who need to understand the investing background behind the trading systems they will design and program.
• Finance students who need an introduction to the IT underlying trading systems.
• Investing students who wish to understand how quant strategies can affect their portfolios.
• Public policy makers interested in asset market regulation. • Journalists who wish to understand the markets they cover.
Read carefully the portions least familiar to you, and skim the familiar parts for refresher.
The two authors are, respectively, an economist and a former government official who made public policy regarding financial institutions; and a robotics specialist and former fighter pilot who founded a software firm that designs analytic platforms for hedge funds. We bring diverse perspectives to this topic, and we imagine that you may likewise be interested in more than one aspect. This book is broader than it is deep. We hope we stimulate your appetite to learn more about this growing, powerful-
, but little-known industry—and about the techniques that built its power.
Bio: Julian Robertson, Tiger Management
Born: Julian Harr Robertson, 1932

Firm: Tiger Management Operated: 1980 to 2000 (seeded “Tiger Seeds” and “Tiger Cubs” in the early 2000s)
Annual return: 31.7 percent (1980 to 1998); 26 percent (1980 to 2000) AUM at peak: $22 billion (1998) Style: Long/short equity; added an international macro overlay in the 1990s Robertson background: Raised in North Carolina, with a syrupy Southern charm. During the 1970s when working at Kidder Peabody, Robertson befriended Bob Burch, A. W. Jones’s son-in-law, and later Jones himself. Robertson quizzed Jones about trading strategies and hedge fund structures. When he formed Tiger in 1980, Burch in-
vested $ 5 million, 20 percent of the surviving Jones assets. Differentiation: Tiger emphasized bottom-up domestic stock selection, adding international equities and a global macro view in the early 1990s. “Our mandate is to find the 200 best companies in the world and invest in them, and find the 200 worst companies in the world and go short on them.

If the 200 best don’t do better than the 200 worst, you should probably be in another business.”
Color: “Tall, confident, and athletic of build, he was a guy’s guy, a jock’s jock, and he hired in his own image. To thrive at Tiger Management, you almost needed the physique: otherwise, you would be hard-pressed to survive the Tiger retreats, which involved vertical hikes and outward-bound contests….The Tigers would fly out west…and be taken to a hilltop. They would split up into teams, each equipped with logs the size of telephone poles, some rope, and two paddles. They would heave the equipmen-
t down to the nearby lake, lash the logs together, and race out to a buoy—with the twist that not all of the team could fit on the raft, so some had to plunge into the icy water” ( from Mallaby’s More Money Than God).
Legacy: After Robertson restructured and wound down Tiger in 1998 to 2000, he seeded 36 funds founded by Tiger alumni, deemed “Tiger Seeds” and “Tiger Cubs.” According to Hennessee group LLC hedge fund advisory, the 18 Tiger Cubs for which performance information could be found returned nearly three times Hennessee’s index of long/short hedge funds (11.89 percent vs. 4.44 percent annually) from 2000 to 2008, with slightly less risk (7.42 percent vs. 7.76 percent standard deviation), yielding nearl-
y 3 times the Sharpe ratio (1.42 for the cubs vs. 0.47 for the index). Robertson’s personal investments in Tiger offspring perform handsomely: Forbes reports that in 2009 his personal trading account earned 150 percent.

CHAPTER 2
So You Want to Be a Hedge Fund Manager
You are reading this book because of your interest in hedge funds: you want to work in one, maybe establish a new one; or you want to regulate them, write about them, perhaps even abolish them. In any case, you need to understand what they are and how they do what they do.
In this book we strive to present the essential concepts for quantitative fund management. We need to make some assumptions about our audience in order to frame our presentation. So we will assume you want to manage a fund, and we’ll get you started on the basics from that viewpoint. We will also focus on stocks in the U.S. markets.
Let’s first start with some context. What is investing, and how does that relate to stocks?
The Economic Role of Investing
Economies grow by applying accumulated capital, along with other resources, to produce increasing amounts of goods and services. Capital is accumulated from the savings of households when they do not consume all of their income. Savings are invested in financial instruments if they can offer an attractive return. So available capital is constrained by household savings, and the investments that households make will be those expected to have the best prospects (to offer the best prospective return)-
. Those finite resources (savings) are used most efficiently if there are institutions that help redeploy capital from assets with a poor return to those with superior

return. That is the role for the financial sector, of which hedge funds are a major part.
Investors can deploy their savings to a variety of financial instruments and institutions. The simplest version is to buy specific instruments, like individual stocks and bonds. The problem for small investors is that they may not have enough capital to diversify over a range of instruments to control risk. Mutual funds pool several investors’ capital together and collectively purchase a diverse portfolio consistent with the fund’s charter (e.g., large and mature companies; or small, speculative c-
ompanies; or short-term corporate bonds; or long-term municipal bonds). “Mutual funds” are their American name; they go by other names elsewhere, such as unit investment trusts in the United Kingdom. Mutual funds allow small investors to achieve diversification. As such, they are heavily regulated—by the Securities and Exchange Commission (SEC) under the Investment Company Act of 1940 in the United States, for instance.
What Are Hedge Funds?
Mutual funds are restricted to investing pursuant to their charter, outlined to prospective investors in a “prospectus.” Most funds aspire to be fully invested most of the time. The first hedge fund, created by ex-journalist Albert Winslow Jones in 1949, specifically undertook a more flexible investing style. Jones specifically would “pair” trades, for instance, identifying two companies whose fortunes he expected to move in opposite directions—say two competitors in a duopolistic industry. Jones -
would buy stock in one company (“go long” that company) and bet against the competitor (“go short” the competitor). This was a “hedged” strategy, in that his “short” hedged against the possibility that the entire market (and thus individual stocks) might move against his position. Jones, in fact, called his fund a “hedged fund” and objected to the term’s bastardization into the now-common “hedge fund.”

From the industry’s beginnings in the mid-20th century, hedge funds grew at a relatively modest rate for the first quarter century, only passing $100 billion in assets under management (AUM) in the early 1990s. But thereafter the industry grew rapidly, passing $500 billion around 2000, and $1 trillion around 2004. The roughly 10,000 extant hedge funds now manage over $2 trillion. If these assets were distributed uniformly among funds—which they definitely are not—a typical fund would manage $200 m-
illion, and earn fees of several million dollars a year. No wonder they’ve piqued your interest!
How Hedge Funds Differ from Mutual Funds
Both types of funds represent pools of investors putting their capital in the hands of a manager. But mutual funds are far more transparent than hedge funds. Mutual funds have accepted SEC regulation as the price of having legal access to millions of small investors. Mutual funds must specify their strategies in their prospectus, and report their holdings and their results regularly.
Hedge funds, by contrast, are very lightly regulated. In the United States, restrictions imposed on investor qualifications serve to replace regulation: eligible investors must be “accredited,” with levels of assets that put them in the upper few percent of American households. The implicit argument is that prosperous individuals can take care of themselves. Hedge funds are prohibited from advertising. (This may soon change, as outlined in the final chapter). In fact, many hedge fund managers shun-
 publicity, in part to avoid any hint that they are engaged in backdoor advertising through the news. Hedge funds’ original investors were wealthy individuals and families, but by the 1990s these were overtaken by large institutions such as charitable endowments and pension funds.
Hedge funds’ legendary secretiveness goes far beyond skittishness about running afoul of the regulators. Finance is an industry where legally

protecting intellectual property (like a new financial product or investing strategy) is virtually impossible, so secrecy is the only way to prevent (or more accurately, delay) competitors from copying your innovations. Hedge funds generally do not disclose their holdings and strategies publicly—and often report them to their investors only in the broadest terms, after the fact. Pulling back this curtain is one of the main motivations behind this book.
Hedge Fund Strategies
With thousands of funds, there are many possible ways to categorize their strategies. Strategies of many funds fall into four major types:
• Equity—where the emphasis is on stock selection. Many equity funds follow A. W. Jones’s original long/short model.
• Arbitrage—where managers seek instances where price relationships between assets fall outside of normal variation, and bet on the relationship returning to normal. Early practitioners plied this trade in fixed income markets, but it now occurs in any market where quantitative analysis can identify price discrepancies to exploit.
• Momentum or direction—where managers have a macro view of the probable direction of prices in a market.
• Event-driven—trades instigated based on an event, such as a war, a supply disruption, or a merger. In the 1990s, “global macro” funds gained in prominence, mainly using event-driven strategies. Several prominent funds made their reputations in merger arbitrage.
This is only one way to categorize strategies; you will encounter others. Because the industry is relatively young and innovation is so continuous, no taxonomy will last long.
Managers can be long-only (they make money only if the asset rises in price), short-only (they profit only if the asset’s price falls), or (most

commonly) hedged (both long and short, although usually not equally). In addition, because the profits per transaction for many of these trades will be quite small proportionally, many hedge funds borrow extensively to “leverage” their investment. (UK investors refer to “leverage” as “gearing.”) So a “130/30” equity strategy, for example, has gone long with 130 percent of available capital (by borrowing 30 percent over and above 100 percent equity capital), and has shorted 30 percent of the portfo-
lio as a hedge.
Many of these distinctions will be elaborated in later chapters. Because the investing industry is so densely populated and so heavily compensated (as discussed later), there is intense competition to identify opportunities for likely profit. The original hedge funds operated mainly on experience and instinct: funds founded by Jones, Robertson, Michael Steinhardt, or Soros are each examples. By the 1990s, quantitative finance had matured as an academic discipline and computing power had become ine-
xpensive enough that it was possible to examine many thousands of relationships among asset prices. The statistical work was often conducted by economists, physicists, or mathematicians, who collectively came to be termed “rocket scientists.” Some of the foundations of this “quant” analysis approach will be introduced in this book.
Funds of Funds
Because hedge funds are barred from advertising (thereby making any search for a fund more challenging), choosing the right fund can be difficult for a client. Furthermore, the range of strategies is very wide, and intense competition among hedge funds and major Wall Street institutions can rapidly erode the effectiveness of any strategy. So institutional clients increasingly are turning to “funds of hedge funds”—managers who select the hedge funds into which to invest clients’ money, monitor thos-
e funds’ strategies and performance, and reallocate among funds as market

conditions change. Funds of funds add their own fees on top of the fees charged by hedge funds themselves.
Hedge Fund Fees
Mutual funds cover their expenses based on an “expense ratio,” measured as a percentage of assets under management. The median fund charges a bit more than 1 percent of assets each year. (Many funds also charge a “load”—a fee paid either at the time of original purchase or when the investor liquidates his holdings, known as a “front end load” or “back end load.”) Note that the expense ratio is not dependent on performance—an investor pays it regardless of how his investment performed. This can be -
grating in a year when returns are negative: the investor is paying for the privilege of seeing their assets decline.
By contrast, hedge funds are compensated in a hybrid structure, with one part being a traditional expense ratio—usually 2 percent, not 1 percent —and the remainder being a portion of the fund’s returns— customarily 20 percent. The 20 percent performance fee is of absolute performance, not for performance above a benchmark. This “2 and 20” fee arrangement is common, identical to that in private equity firms (investment firms that buy a privately held company and improve its operations in order to s-
ell it later at a profit, usually in a public stock offering). However, it is not a universal standard: Funds with superior reputations may charge much more. In its heyday, Renaissance Capital’s Medallion Fund charged 5 percent annually and 44 percent of returns, and we’ve heard of incentive fees as high as 55 percent of returns. However, as the industry has become more crowded and its downside protection was sorely tested in the 2008 market meltdown, some firms are dropping their fees to as low a-
s 1 percent annually plus 10 percent performance fee.
These fees have been sufficient to make many hedge fund founders billionaires. Sometimes they have earned it, generated annual returns of the

long term well in excess of 20 percent annually (well over twice the return of most stock indexes). But since the industry as a whole has disappointed lately, critics argue that hedge funds overcharge and underdeliver.
How Hedge Funds are Evaluated (I): Return
The core issues in evaluating any investment are return and risk. Return is straightforward: Compare the value of holdings at the end of a
time period (a year, or a day) to the value at the beginning. In mathematical terms
Return = [Value (t)/Value (t – 1)] – 1, where (t) indicates a time period.
Example:
Value (t)= $110 Value (t – 1)= $100
Return= [$110/$100] – 1 = 1.1 – 1 = .1 = 10%.
For much of this book, we will be considering daily returns. Commonly, to compare investments, returns are annualized, converting days to years. This is done by compounding the daily return by the number of trading days in a year, 252 as follows (in Python):
annual_return = cumprod(daily_returns+1) – 1
There are 260 weekdays in a 52-week year, but generally markets are closed for about 8 days each year for holidays.
Since money left in a growing asset compounds (like interest), the right way to compute an annual return over several years is the compound annual growth rate (CAGR). Say, your portfolio was worth $200 in 2012, after starting at $100 in 2002. That’s a 100 percent cumulative return over 10 years. But the annual return is not simply [100 percent/10 years] or 10 percent because that computation ignores the compounding effect.

Compounding over multiple years is captured by raising an annual return to an exponent, representing the number of years that the return compounds (in this case, 10 years). In the aforementioned example
$200 = $100 × (1 + annual return) ^ 10
Since annual return, or CAGR, is unknown, we must rearrange this equation:
[$200/100]= (1 + CAGR) ^ 10 2 = (1 + CAGR) ^ 10
2^(1/10)= 1 + CAGR Since 2 ^ 1/10 = 1.072, then
1.072 = 1 + CAGR, and CAGR= 7.2% (i.e., 1.072 – 1)
So a portfolio that grows at 7.2 percent on average each year will double in size in 10 years. We use the term CAGR to remind us that we need to reflect the effects of compounding in computing annual returns. In this instance, the effect of compounding was substantial: 7.2 percent compound annual growth was enough to double a portfolio in 10 years, whereas it would need to grow at 10 percent annual if the growth process was “simple” (not compounded).
Compounding, and exponential math, is very difficult to develop intuitively or to mentally calculate easily. We chose this example to introduce you to your new best friend: the Rule of 72. It is an approximation of compounding. This rule states that you can approximate the number of periods that will be needed for a sum to double by dividing the CAGR (in whole numbers) into the number 72. A portfolio growing at 8 percent will need about 9 years to double, because 8 × 9 = 72. At 6 percent CAGR, 12 -
years will be required to double (6 × 12 = 72). Similarly, you can infer a

CAGR if you know the starting and ending values of a portfolio and the time elapsed. So if a portfolio doubled over 15 years, you know that its CAGR was a bit less than 5 percent; specifically, 4.8 percent (15 × 5 = 75; 15 × 4.8 = 72).
Wall Street interviewers routinely ask the interviewee compounding math problems that most people cannot calculate mentally without a shortcut like this. It is also effective for portfolio growth that is a multiple of two, even a large one. For example, an asset that grew from $100 to $400 has grown four-fold, or 2 × 2 (2 ^ 2); to $800 is eight-fold (2 ^ 3), and so forth. This can be very helpful when considering portfolio growth over long time periods: A 100-fold increase is a bit less than 2 ^ 7-
; 1000-fold is almost exactly 2 ^ 10 (2 ^ 10 = 1,024).
Hedge funds typically receive an incentive or performance fee based on return: 20 percent of the investor’s return over and above a 2 percent management fee. So, for example, if the hedge fund returns 4 percent in a year, the fund managers will receive 2 percent fee plus (0.2 × [4% – 2%] = 0.4%), or a total compensation of 2.4 percent of AUM. In that example, the managers kept 60 percent of the portfolio’s return (2.4%/4%). If the portfolio earned 10 percent in a year, the fund’s compensation woul-
d be 2 percent plus [0.2 × (10% – 2%) = 1.6%], or 36 percent of the portfolio’s return. In other words, all (100 percent) the first 2 percent of the portfolio’s return goes to the fund manager, then 20 percent of any returns above 2 percent. Note that if the portfolio’s returns are negative, the manager will earn no incentive fee, but the 2 percent management fee will represent far more than the (negative) return the client earned.
As you can see, hedge fund fees are very generous to fund managers.
How Hedge Funds Are Evaluated (II): Return Versus Benchmark (Relative Return)

Compensating managers based on absolute return implies that no positive return could have been earned otherwise: that the only alternative would be to put your money under your mattress. But realistically, investors have a vast array of alternatives, from short-term fixed income instruments such as commercial paper or treasury bills to a range of equities (stocks). Investment managers are commonly compared to a benchmark: a nonmanaged investment that presents a relevant comparator. For funds that -
invest in equities, the most common benchmark is a stock index such as the S&P 500 (the 500 largest companies, measured by market capitalization, traded on U.S. stock exchanges). Funds that use narrower strategies can be compared to narrower and more pertinent indexes or a weighted combination of more than one index (with the weights based on the asset class weights in the strategy). Finally, a few research firms such as Hedge Fund Research, Inc. compile an index of hedge fund performance (HFRX). -
However, this index has significant drawbacks, which are outlined later.
Decades of financial academic research, drawn mainly, although not solely, from mutual funds, has demonstrated that very few active investment managers produce consistent performance that exceeds their benchmark. (Exceeding a benchmark constitutes alpha, a measure of investing skill, defined later.) This is a major investor relations problem for active managers: Activity imposes management and trading costs, which are only justified if they produce superior returns to “passive” (unmanaged) investi-
ng. Many studies by finance academics have found such justification very hard to come by: Active management at best matches, and more typically underperforms, benchmark indexes before management costs. Frequent trading—common for active managers—and fees pose a considerable further drag.
With hedge funds, those fees are significantly higher than with mutual funds. Studies of hedge funds have found that managers can frequently generate positive alpha (outperform their benchmark), but their

compensation absorbs at least half of the portfolio’s annual excess return over the benchmark. One recent analysis found that over the life of the industry for which performance data were available (1998 to 2010), managers absorbed between 84 and 98 percent of the total profits earned. In other words, clients kept only one-fiftieth to one-sixth of total return. And in one-fourth of those years, total profits were negative—but fund managers were still paid 2 percent of AUM. John Bogle, the founder -
of Vanguard mutual funds, which originated indexed investment, has famously said about mutual funds that investors “get what they don’t pay for.” The analog for hedge funds would be “no gain without at least equal pain”: investors will pay high fees regardless, so that in a good year they will share returns about equally with their managers. In a bad year, the client will bear all of the pain—negative returns, depressed further by the 2 percent management fee.
How Hedge Funds Are Evaluated (III): Risk
Hedge funds’ rationale is not solely to maximize return but also to control risk—that’s the reason for the term “hedge.” Risk is operationalized as volatility of a portfolio’s returns. Figure 2.1 illustrates two portfolios of differing volatility: the Dow Jones Industrial Average (an index of 30 stocks) versus a particular fund, over the period from March 2009 to July 2012. Both earned similar cumulative returns (a cumulative 43 percent for the Dow and 33 percent for the fund, or 11.6 percent and -
9.2 percent annually, respectively), but the fund did so with significantly less volatility: short-term spikes and dips in price were less frequent and less pronounced. This is what investors seek when they pay for hedge fund management: reduced volatility.
The most common statistical measure of volatility is the standard deviation in per-period returns. Standard deviations are the square root of the sum of the squared deviations in per period prices versus the mean for

all periods in the sample. If a given mean daily return was 0.1 percent and return on June 1 was 0.3 percent, its squared deviation (also known as “variance”) for the day would be .04% = 0.2% ^ 2. (The squaring is to correct for negative values—days when the portfolio shrank in value.) For the two portfolios discussed in the previous paragraph, the Dow’s standard deviation was 1.23 percent and the fund’s was 0.58 percent—the fund was less than half as volatile as the index.
Figure 2.1 Price of fund versus benchmark, 2009 to 2012
Source: Courtesy Lucena Research, LLC
Critics argue that standard deviation is a measure that only an academic could love, because it does not differentiate upward deviations—the kind we seek!—from downward deviations. “Drawdown” is a supplemental measure often used to address this. It is simply the maximum drop from peak to trough, measured as a percentage of the peak level. The Sortino ratio focuses on the downside, whereas the more commonly used Sharpe ratio is indifferent between upward and downward deviations.

Sharpe Ratio: Combining Return and Risk
The Capital Asset Pricing Model, discussed in Chapter 7, observes that across different asset classes it is virtually impossible to increase return without also increasing risk. This unavoidable trade-off between risk and return encourages us to consider measures that combine the two: one that we wish to maximize, and one we wish to minimize. Among different portfolios (or different managers), which one offers the lowest risk for a given return or the highest return for a given risk? This is analo-
gous to “cost–benefit analysis” in public projects: Scarce resources mandate that we spend them on those that will produce the most benefit per dollar, or that will produce a given benefit most cheaply.
Nobel Prize winner William Sharpe developed his namesake ratio to measure the efficiency of a portfolio in these terms. The Sharpe Ratio puts return—the thing we wish to maximize—in the numerator and risk—what we want to minimize, as measured by the standard deviation of the portfolio’s return—in the denominator. The only wrinkle is that “return” is excess return above the risk-free rate—usually the rate offered by shortterm Treasury bills. (This is because we can get that return with no risk at a-
ll.) The formula is therefore:
Sharpe Ratio = (r[portfolio] – r [risk free])/standard deviation (portfolio)
As an example, the long-term (since 1926) nominal return for the S&P 500 has been close to 10 percent. During this period, the average risk-free rate has been about 2.5 percent. The S&P 500’s standard deviation has been about 15 percent. So its Sharpe Ratio over the past 80 years has been:
(10% – 2.5%)/15% = 7.5%/15% = 0.5
High Sharpe ratios indicate high return per unit of risk, so 0.5 doesn’t look particularly appealing, but you’ll need to calculate this figure for some other assets or time periods to put it in perspective. (A value of 1.0 can be

thought of very loosely as being fairly compensated for risk—that is, each unit of risk generates an equal number of units of return. But a less loose interpretation of the Sharpe Ratio is simply that higher numbers are better than lower ones. It is important to note that Sharpe ratios at or above 1.0 are very uncommon.) For the two portfolios mentioned earlier, their Sharpe ratios were, respectively, .63 for the Dow and .94 for the fund. So on a riskadjusted basis, the fund was superior by about -
half again over the Dow.
Drawdown ratios and Sortino ratios measure a portfolio’s exposure to downdrafts and are especially relevant to hedge funds, whose raison d’etre is that they aspire to minimize falls in down markets, at the cost of reduced upside exposure in rising markets.

CHAPTER 3
An Illustrative Hedge Fund Strategy: Arbitrage
After long/short “hedged” trading strategies, the next most common hedge fund strategy is arbitrage. In its original form, arbitrage meant earning a profit by exploiting discrepancies in the price of an identical good in two different markets. For instance, due to a glut of oil in the American Midwest in 2012 and 2013, the price of oil (dollars per barrel) differed in the Brent (North Sea) market from the Texas market, with the Brent price being as much as several dollars per barrel higher. Arbitr-
ageurs could make a profit by buying Texas oil and selling Brent oil. In this sense, all retailers are arbitrageurs; in that, they buy a product from a manufacturer or wholesaler and sell it to retail customers at a higher price.
Traditionally, arbitrage refers to strategies that operate on the same asset in two different time periods or at the same time in two different markets. Some fixed-income arbitrageurs exploit price disparities in nearly identical issues. For example, one of LTCM’s (Long Term Capital Management’s) most successful strategies involved buying Treasury bills in the secondary market some days after they were issued, and shorting new bills of the same maturity. This exploited the fact that newly issued b-
ills are the most liquid and carry a liquidity premium. As they age, that premium evaporates, and their price can overshoot downward. Shorting new bills exploited their overpricing, and going long older bills exploited their underpricing.
Similar opportunities can exist among equities. For instance, Company A may own a large position in Company B, but if other factors are depressing A’s stock price, it may be possible to effectively own shares in B at a lower

price (by buying A’s shares) than buying them directly. Owning shares in Royal Dutch Shell has occasionally been an economical way of owning its two parents.
The term “arbitrage” has taken on a broader meaning over time, applying to a wider range of opportunities.
It is not necessary that we arbitrage between prices for the same asset at different exchanges. Such strategies can be named after the instruments traded (e.g., commodities, fixed income, or equities) or the technique used to identify the arbitrage opportunity (e.g., statistical arbitrage, or “stat arb”).
Statistical arbitrage refers to those investing strategies that seek to identify and exploit instances where the market price of an asset has (temporarily) deviated from its true price, or its intrinsic value. In this case the arbitrage is between the true price and the market price. Market prices above intrinsic value can be expected to fall, which suggests a short position. Prices below intrinsic value offer an opportunity to make money in a long position.
If a market is reasonably efficient (efficient markets are discussed in Chapter 8), such opportunities will be fleeting because investors will quickly bid up the price of undervalued assets, and bid down the price of overpriced assets. In other words, investors will “arbitrage away” these inefficiencies.
Another form of statistical arbitrage is based on a phenomenon called regression to the mean. An asset with a volatile price that is driven away from true value will in time return to its “mean” true value—how quickly it returns indicates the market’s efficiency.
Value investing is another type of arbitrage that entails taking long positions in assets that the investor considers underpriced, in the expectation that price will eventually be bid up to the near-true value. Warren Buffett is the best-known value investor practicing today. Short

investing is the opposite: taking short positions on assets the investor considers overpriced. David Einhorn is a well-known “short.”
As in many other strategies, profit margins are small and opportunities may be rapidly competed away by other arbitrageurs. For these reasons, hedge funds often leverage extensively to maximize the volume of trades they can undertake, and use programmed or high-frequency trading systems to act on opportunities very quickly.
Bio: Steven Cohen, SAC Capital
Born: 1956 Firm: SAC Capital Advisers, Stamford, CT Founded: 1992
Style: Equity arbitrage How it Differentiates: Like Ray Dalio’s Bridgewater, an intensely combative culture intended to generate the best ideas through extreme competition. Cohen believes that conviction and speed are critical to SAC’s competitive advantage. He routinely makes very large bets—10 percent of the portfolio or more—very quickly. He believes that the alpha associated with an investing idea dissipates (i.e., is arbitraged away) within 20 days of its discovery. His firm has been accused -
of relying on inside information for much of its competitive advantage (see further text).

AUM: Peaked at $15 billion in early 2013; about $11 billion in summer of 2013; expected to fall to about $9 billion in 2014, all from founder and employees. Reductions due to client redemptions following insider trading criminal charges (see further text).
Cohen’s background: Cohen, the son of a dress manufacturer and part-time piano teacher, grew up in Long Island. He attended Wharton, graduating in 1978. His first job was as a junior options arbitrage trader at Gruntal & Co., rising quickly by 1984 to lead a team of traders that generated an average $100,000 profit per day. He left Gruntal in 1992 to found SAC with $20 million in personal funds. In 2013 Cohen was estimated to be worth over $9 billion dollars, among the richest Americans. He was al-
so on Time magazine and Bloomberg Businessweek’s lists of the most influential Americans.
Insider trading indictment: In the spring of 2013, SAC Capital was indicted by the SEC for insider trading. Cohen required all “high conviction” trade ideas to be approved by him personally; many are alleged to be based on information from insiders at the traded companies. Five former SAC traders were also indicted, and three have confessed as of August 2013. Cohen is under administrative review by the SEC but has not been charged.
Color: Cohen has spent hundreds of millions on Impressionist and contemporary art, including a landscape entitled “Police Gazette” by artist Willem de Kooning for $63.5 million; and $25 million each for a Warhol and a Picasso. In 2006, Cohen attempted to make the most expensive art purchase in history when he offered to purchase Picasso’s Le Reve from casino mogul Steve Wynn for $139 million. Just days before the painting was to be transported to Cohen, Wynn, who suffers from poor vision due to re-
tinitis pigmentosa, accidentally thrust his elbow through the painting while showing it to a group of acquaintances inside of his office at Wynn Las Vegas. The purchase was canceled, and Wynn still held the painting

until early November 2012, when Cohen purchased the painting for $150 million.

CHAPTER 4
Market-Making Mechanics
The basis for any investment market is just that—a market. Markets are locations (physical or virtual) where sellers and customers convene to exchange goods, or in our case, financial instruments. If you’ve ever watched business news on television, you’ve probably seen a shot of the New York Stock Exchange (NYSE)—often companies stage publicity events where a representative rings the bell to open the day’s trading before the cameras. In the NYSE, shares of stock in U.S.-listed companies are exchan-
ged. Prices of each exchange are tracked to reveal trends in interest in those shares—rising prices indicate rising appeal (more buyers than sellers), while falling prices indicate the opposite.
Investors do not occupy the NYSE, or other exchanges, themselves. They transact their exchanges through intermediaries. Brokerage firms interface with end-buyers and end-sellers. Those brokers, in turn, trade with market makers, who facilitate the trades. At the NYSE, the market makers are called specialists and they are the only entities who transact business on the floor of the exchange. In some markets like the NASDAQ, there is no floor —all trading occurs electronically—and therefore no specia-
lists.
Market Spreads
Most of the time there is a small difference between the price at which a buyer may purchase a stock, termed the bid price, and the price at which a seller will sell the stock, the ask price. At a given moment an instrument therefore has two prices: bid and ask. For example, IBM might be quoted as “$200.50 ask; $199.75 bid.” The difference between these two prices is known as the market spread, and represents the profit opportunity that

induces brokerages and specialists to make the market—to connect sellers and buyers.
Markets with high trading volumes will attract more market makers, who will compete with each other based on the price they charge to handle a transaction—that is, based on the spread they charge. Highly liquid markets (with large trading volumes and numerous market makers) tend to have the smallest spreads. In fact, widening spreads can be an early indication of a market whose liquidity is freezing up, as occurred in the fixed income markets in the fall of 2008. Niche markets, such as instruments-
 traded in frontier markets such as Myanmar or Kazakhstan, have low volumes and consequently wide market spreads.
Types of Order (Basic)
Investors enter buy and sell orders with their brokers for a certain number of shares (round lots are 100 shares). Each of these may be either “at the market” (a market order), where the broker simply accepts whatever price the market is offering; or a limit order, which sets a condition before the order can be executed. For example, a buy “limit order for 100 IBM at $200” instructs the broker to buy 100 IBM shares only if he can do so at a price of $200 per share or less. The equivalent limit ord-
er to sell instructs the broker to sell only if the price is $200 or higher.
Types of Order (Intermediate)
Although exchanges only accept and execute buy and sell orders in the exchange’s order book (as described in the next section), other more complex orders can be established, with the added complexity handled by a broker. Two examples are selling short and stop orders.
Selling short is a bet that a stock’s price will fall. (The conventional bet, that a stock’s price will rise, is termed going long.) The investor borrows shares from a holder and sells them, earning the proceeds of the sale. At a

later point, they buy the same number of shares and return them to their lender. If the shares fell in price from the earlier sale price, the investor pockets the difference. If it rises, they lose the difference. In addition, the investor who is shorting must pay interest to the owner of the shares borrowed—a fee known as the rebate—as well as any dividends to which the owner is entitled during the borrowing period.
Shorting, then, involves two transactions: “sell to open” (to open the short position) and “buy to close.” Their order in time is the reverse of that in a normal long transaction. Shorts are considered riskier than longs, on average, for several reasons. First, the long-term trend in stock prices is upward, so a short bet must be premised on the belief that the stock in question will move in a contrary direction. Second, the potential loss is unbounded. The maximum loss with a long position is 100-
 percent—the stock’s price can’t go below zero. But the theoretical maximum loss for a short is unlimited, since a stock’s price can rise without boundary. Finally, executives in companies being shorted do not take kindly to it. If the investor relies on access to the company (e.g., a brokerage firm’s analysts who cover the company), the company may retaliate by curtailing access by those analysts. Not surprisingly, few hedge funds are short-only, although many use shorts to hedge long positions. -
Shorts require exceptionally deep research to identify overvalued stocks, and an iron determination to be contrarian.
Stop orders are contingent orders, usually used for risk management. Stop loss orders are the most common type. An investor might instruct one’s broker to place a market order automatically if the price of the stock falls more than a specified threshold (e.g., 25 percent) below the purchase price. Trailing stops act equivalently, but make the condition the most recent high to preserve most of the gains for an asset whose price has risen since original purchase. Less commonly, investors may sell a -
portion of their position to preserve partial gains; a free ride, for example, specifies that the

broker should sell half of a position when it has doubled in price from original purchase. That way the original capital is “taken off the table,” and only profits are at risk. Each of these more complex or contingent orders must be placed through a broker. Some investors believe that stop loss orders constitute important information that other market participants can exploit (as illustrated in a later section), so they advise keeping stop loss rules private (i.e., withholding from a broker until -
it is time to execute).
Matching Orders: The Order Book
As investors place orders in the market, specialists (or the exchange computer system) tabulate an ever-changing order book. An example is shown in Figure 4.1.
Orders are grouped as Buy or Sell; noting the number of shares being offered (ask) and requested (bid) at each possible price. The spread is the difference between the lowest ask price and the highest bid price—in this instance, 5 cents (0.05 dollars), or 0.5 percent of the midpoint between bid and ask. This very small spread is an indication of a very liquid market.
If a seller places a market order for 150 shares, it would be filled by combining buy orders that cumulate to that many shares, starting from the highest buy order (in this case, for 100 shares at $99.95) and adding additional buy orders until all 150 shares have been absorbed. In this instance, the next-highest buy order, for 50 shares at $99.90, would also be utilized. The seller’s average price per share would be $99.933. Economically, this sale has moved the equilibrium price of XYZ a short di-
stance down the demand curve: the next buyer will only bid $99.85 for XYZ. A purchase will move in the opposite direction, up the demand curve. So if the preponderance of trades is sales, prices will fall, and if most are purchases, they will rise. Equal numbers of shares bought and sold should result in stable prices. In the example in Figure 4.1, there is a higher volume of XYZ shares on offer than there are bids for them, which suggests that

XYZ’s share price will probably decline. As you can see, knowledge of the order book can provide useful information for predicting short-term price changes.
The Advantage of Milliseconds
Trades aren’t always cleared on exchanges. A brokerage firm that simultaneously holds overlapping buy and sell orders from different clients may clear them internally. This saves the firm exchange fees; further, the broker can earn the market maker’s spread. In the past decade, syndicates of brokerage firms have created “dark pools”—essentially informal exchanges among those firms. Market making specialists may likewise clear trades before they are submitted to the formal exchange.
As the example in Figure 4.1 illustrates, discrepancies in the volume of sell versus buy orders can predict short-term price trends. So brokers and market makers possess important information on which they can trade. The key is speed, since orders change constantly and new orders will change the balance of trading volumes between sell and buy orders. For this reason, firms have invested heavily in automating trading systems (since computers can execute trades far faster than people can), and in mi-
nimizing the time it takes to communicate trade orders to their recipients. Time can be saved with better communications technology, such as replacing copper wire with fiber optic cable; or by locating the trading platforms closer to the receiving entities, such as co-locating the platform at the exchange itself. Competitive advantage can hinge on milliseconds. Several books have covered “high frequency trading” (HFT), including most recently Lewis’s Flash Boys.

Figure 4.1 Sample order book for XYZ stock
Front running is one where a broker issues trades in advance of those of its clients, knowing the price movements that will probably occur when clients’ orders are executed. Its ethics are dubious when a broker is trading against its own clients, but fair game when the counterparty is another broker’s client. Reducing (through technology or colocation) the time to see an opportunity and execute a transaction is sanctioned front-running. Processing large numbers of trades very quickly to exploit ev-
ident shortterm price trends is at the core of trading-oriented hedge funds’ strategies, and provides ample opportunities for IT professionals.

CHAPTER 5
Introduction to Company Valuation
A successful investment indicates that the buyer had a more accurate view of the asset’s true value than the seller had (otherwise, the seller would have demanded a higher price). The reverse is true for failed investments. This implies that different market participants have different views of the value of an asset, like a company’s stock. (Remember that a share of company stock is simply partial ownership of the entire company.) In fact, it is this mixture of views that enables a market to work.
This suggests that investing opportunities appear when an investor spots an asset whose current price diverges from what he believes is its true value. Financial markets may be quite efficient—that is, they may rapidly reflect most relevant information that affect an asset’s value in its current market price—but hedge funds and other investors seek to make money from these occasional differences, or inefficiencies. (Market efficiency or inefficiency will be treated in a later chapter). If the curr-
ent price is below estimated true value, it presents an opportunity to go long on that asset; if the asset is presently overpriced, it presents a short opportunity.
Successful investors develop and apply techniques that independently value companies to discover discrepancies between price and value. The first popular book on “value investing,” Benjamin Graham’s The Intelligent Investor (often cited by Graham protégé Warren Buffett as the definitive work on this investing style), argued that investors should seek a margin of safety—that is, they should only buy stocks whose price was well below the investor’s estimate of their true value. This has been called -
“buying dollar

bills for fifty cents.” But value investing is only possible if the investor is confident of his or her own personal estimate of true value. This chapter is an introduction to valuation techniques.
The methods that follow are often called fundamental analysis, because they are based on the fundamentals of a company’s business operations and finances. These methods are distinct from technical analysis, which attempts to predict stock prices based on past price behavior. Technical analysis also is known more descriptively as “charting.”
We will cover three key methods for estimating the value of a company using fundamental factors:
• Book value: An estimate based on the sum of assets and liabilities of the company
• Intrinsic value: An estimate based on future dividends to be paid by the company
• Earnings growth: Projection of expanded earnings into the future
Asset-Based Valuation: Book Value
Companies are required to periodically report their assets and their liabilities, with the difference between the two constituting the firm’s net worth. Assets are productive items the firm owns, which can be tangible assets such as factories, or intangible assets such as patents. Assets are categorized according to how quickly they can be converted into cash. Liabilities are financial obligations the firm has undertaken: debts, commitments to pay for raw materials, employment contracts, and so fo-
rth; they are likewise categorized by their duration into the future. If the firm closed its doors tomorrow, its net worth is the best available approximation of what its owners would be left with after selling off its assets and paying off its obligations. On the balance sheet this is shown as stockholder’s

equity or book value: it is the value of the firm as captured by accountants on its books.
Book value can diverge from market value—the value of the firm as appraised by market prices, also known as market capitalization—for several reasons. First, accounting rules are biased to be conservative, so even if an asset has risen in value since the firm originally purchased it— say, a piece of real estate in a growing city—it will be carried on the balance sheet at its original price, less accumulated depreciation. This deflates book value relative to the firm’s intrinsic value. For these re-
asons, the reported book value is usually below the price the company is worth if it were actually liquidated. However, if the firm is forced to sell an asset involuntarily—such as in bankruptcy—it may receive far less than what it had paid, especially if the sale is forced by bad economic conditions that depress the price of all assets. So, in a recession, book value may overstate true value.
When using book value for investing purposes, an asset-based assessment would compare a company’s book value—possibly adjusted if the investor believes it is inflated or depressed by special conditions—to its market capitalization. On a per-share basis, the investor would compute the priceto-book ratio:
Price-to-book ratio = share price/book value per share Mature companies with few growth prospects (discussed in further text), or troubled companies that may face liquidation, may have a share price below book value, or little above it. That is, a price-to-book ratio of less than 1.0 or barely above 1.0. Conservative value–style investors are attracted when they can buy a share for less than its book value; this is not uncommon if the company, its industry, or the entire economy is in distress.
Intrinsic Value: Dividend-Based Valuation

Companies exist to use assets in such a way that their value grows over time. This is one of the reasons why book value may underestimate the company’s true value: Book value does not reflect future prospects. Capturing this element of value requires us to examine one of the fundamental concepts in finance: the time value of money.
Time Value of Money
Assets are more valuable if they generate cash into the future. If I buy that asset from you, cash flows you received while you owned it will now be paid to me. But I will probably pay you a single lump sum to gain ownership, a sum that is likely far more than one year of cash flows. So the price we negotiate must somehow convert a stream of future cash flows— that the seller relinquishes and the buyer expects—into a lump sum. This process is called discounting to reflect the time value of money.
Money’s time value can be illustrated with a simple example. Say your friend is scheduled to receive a sum of money in one year—for instance, when his deceased grandfather’s estate is settled. He can document with certainty that he will receive $10,000 one year from today. But he needs money now. He offers to sell you his right to that bequest. What would you pay for it?
Certainly less than $10,000. Your first reaction is probably that you can’t be certain that something won’t go wrong and deny you the transferred bequest, so you need to lower your price to reflect that uncertainty. That’s an absolutely correct reaction; but for simplicity’s sake, let’s assume that there is absolutely no doubt that the $10,000 will be forthcoming in 1 year. Is this asset—your purchased claim on the grandfather’s estate—worth $10,000 to you?
Again, almost certainly not. Why? Because whatever sum you spend to buy this claim can’t be used for some other productive purpose—to deposit in a bank, to start a business, or to buy shares in an existing business. If you

buy your friend’s promissory note due in 1 year, you lose the use of your money for 1 year. The lost opportunity—which economists call, literally, “opportunity cost”—is the return that you’ve sacrificed by failing to make the best alternative investment. Let’s say that the alternative is to buy shares in the S&P 500 ETF, SPY, which you expect will return 10 percent over the next year. Then your friend’s note is only attractive if its expected return is at least as good.
We “charge” the proposed investment—your friend’s promissory note, $10,000 payable in 1 year—for the opportunity that you are sacrificing to invest in SPY and earn 10 percent. We discount the expected $10,000 payout in 1 year by 10 percent per year to express that future value as a value in the present or present value. Specifically,

Present value = future value/(1 + discount rate) ^ (number of years till

PV = FV/(1 + DR) ^ I PV = $10,000/(1.1) ^ 1 PV = $9,090.91

payment)

Where I is the number of years until payment. So you should not pay more than roughly $9,091 for the promissory note. The discount rate, shown as DR, is the rate of return the investor could receive from investing in the best alternative asset. We used the example of the stock market, but others often use a less risky investment such as the interest rate on Treasury bonds. The discount rate chosen should reflect the lost opportunity associated with most likely alternative investment. We charge tha-
t opportunity cost to this investment by discounting it to reflect the time value of money we are sacrificing by investing here.
Assets can offer either a single payment, like the aforementioned promissory note, or a stream of payments. Stocks differ from bonds or

promissory notes in that they may provide a stream of payments in the form of dividends. These dividends will be paid on a regular basis into the infinite future as long as the company’s board elects to maintain the dividend. Note, however, that not all companies pay dividends, and, of course, sometimes companies suspend dividends or fail completely.
Accordingly, assessing the value of a stock based on those future dividend payments is a bit more complex. The present value of all the future dividend payments is equivalent to the present value of each payment, added together.
To explain this, let’s go back to the example of promissory notes: If you bought two promissory notes—one payable in 1 year, and the other offering $10,000 payable in 2 years—the value of that portfolio would be the sum of the present values of each note:
PV note 1 (due in 1 year): $10,000/(1.1) ^ 1 = $9,090.91 PV note 2 (due in 2 years): $10,000/(1.1) ^ 2 = $8,264.46 Portfolio value (sum of each note’s PV) = $17,355.37
The intrinsic value of any asset is simply the present value of all future returns. This is true whether the returns are a single payment or multiple payments, uniform in amount (as in this example), or nonuniform.
The math of discounting to compute the present value is straightforward if the future payments are constant. A challenge is in estimating the future value cash flows, which is outside this book’s scope. So we will illustrate valuing a share of stock with simple constant cash flows: dividends.
The Dividend Discount Model
Say that you own a share in an electric utility company, Divco, which pays $1 per year in dividends. Also assume that your best alternative use of your capital offered a return of 8 percent per year. Then the value of the stream of dividends over 10 years from Divco would be as follows:

Year 1: $1/(1.08) ^ 1 = $0.9259 Year 2: $1/(1.08) ^ 2 = $0.8573 Year 3: $1/(1.08) ^ 3 = $.07938 . . . Year 10: $1/(1.08) ^ 10 = $0.4632
The total value of this 10-year stream of dividends is simply the sum of these ten present values, or $6.71. If the only returns to shareholders were this constant stream of dividends for 10 years, a share of Divco stock would have an intrinsic value of $6.71. If it traded in the market for $7.00, it would be overpriced. If it sold for $5.00 a share, it would be a bargain.
Note that each successive year’s dividend is worth less in the present, because each dividend is paid farther in the future. By year 10, one dollar in dividends a decade hence is worth less than half as much today. However, dividends don’t usually end after 10 years. What if we extended payments farther in the future? For example, a $1.00 dividend payable 50 years from now would today be worth as follows:
Year 50: $1/(1.08) ^ 50 = $0.0213 … or barely 1/50th of its future value of $1.
Long-Term Ownership of an Asset
You can see that if you extend the time horizon far enough into the future, the present value of a dividend then is effectively zero today. So an infinite time horizon won’t generate an infinite present value, since beyond some time horizon the present value of future cash flows will be as close to zero as to be negligible. Still those future payments do have value, so how can we compute it?

Ownership of an income-producing asset means, in principle, that you will receive payments in perpetuity. (This applies, for example, to any stock: as long as the company survives, its owners receive its earnings.) Consider our earlier equation for a single payment I years in the future:
PV = FV/(1 + DR) ^ I
We’re looking for the sum of all these future values, so we can take advantage of the solution to the infinite sum
And substitute (1 + DR) for n in the equation to get: PV = FV/((1 + DR) – 1) PV = FV/DR
The value of a perpetuity—that is, a stream of equal payments forever—is simply the payment (we will use D for dividend now instead of FV) divided by the discount rate. Thus, the PV of perpetuity of payments of D each year is D/DR. In the Divco example, the present value of a share of Divco stock paying $1.00 in dividends each year forever (assuming an 8 percent DR) is
PV (Divco share) = $1.00/.08 = $12.50
So more than half of the share’s total value will be realized within the first 10 years,
since PV (10 years) = $6.71, while PV (forever) = $12.50. Said differently, all of the dividends paid from years 11 to infinity are worth $5.79.
Growth-Based Valuations

Fast-growing assets, like small growth companies, are valued based on the projections of (fast growing) future earnings. The methods used are identical to those mentioned in the previous sections. The difference is that each year’s earnings are projected to be higher than the previous years. The company’s value is the sum of each year’s discounted cashflow (i.e., present value). In theory, this could be infinity, but, in practice, for any reasonable discount rate, cash flows many years in the futu-
re will be discounted essentially to zero. This is why a perpetual cash flow still has a finite present value.
Of course, valuations will depend critically on the assumed rate of growth in earnings. Small differences in growth assumptions can lead to big disparities in valuations.
Integrating Asset-Based and Cash Flow–Based Valuations
The mathematics is the easy part; the challenging part is all the judgments that must be made to create the inputs and assumptions used in these calculations.
Usually asset-based estimates produce lower valuations than do those based on long-term discounted cash flows. This is because asset-based valuations are based mainly on past prices paid for assets, not the— hopefully—enhanced value they have achieved from their use (hopefully superior) by the company. But even book value can overestimate company value if the conditions of sale are not conducive to getting a good price— like a forced liquidation, or a bad recession. Asset-based calculations are of-
ten viewed as “lower bounds,” but even they may need to be adjusted downward in distress sale circumstances. Analysts commonly discount book value by 30 percent or 50 percent to represent what they believe is the true “worst case.”
Cash flow–based estimates are slightly more involved, since it may be necessary to compute, and then discount, future cash flow for each of a

number of years. Clearly, the farther in the future you project, the more conjectural your projection will be, since the number of intervening surprises can only increase. You can be reassured that forecasting errors have declining importance farther in the future, because their present values will be more heavily discounted.
An asset-based valuation implicitly ignores future earnings; while a cash flow–based valuation focuses exclusively on those future earnings. Adding the two together can produce the most complete valuation.
Analysts commonly produce a range of valuations. Different methods (such as asset- vs. cash flow–based methods) produce different values, as just noted. Different assumptions will likewise cause variations in values.
What If?
As an example, say, Divco is building a new power plant in an undeveloped area expected to experience rapid population growth (and therefore growth in demand for electric power). The investor might develop several scenarios, reflecting different hypothetical growth rates (and therefore rates of growth in power sales). The “base case” reflects the expected future— say, 4 percent annual population growth for 10 years, tapering to 1 percent per year thereafter. But the investor would be prudent to co-
nsider an alternative, more pessimistic scenario, of, say, 2 percent for 10 years and 0 percent annually thereafter. The optimistic scenario might produce a value several times the pessimistic scenario.
For asset-based valuations, an optimistic scenario might assume that each asset will be sold for full book value, and a pessimistic scenario might assume, say, 50 percent of book.
So with several possible valuations—different methods, and different scenarios—which one is right? There is no way to know until the future unfolds. Investors commonly consider a range of value estimates. If they are aggressive, they will emphasize the high end; if conservative, the low

end. Graham argued for a margin of safety—emphasizing the low end, or possibly something even lower.
In the interests of simplicity, many Wall Street analysts produce a single, point-estimate “target price,” but that is really substituting precision for accuracy. All of us have been “mugged by reality”—surprised by developments, usually on the downside, that made a mockery of optimistic valuations. (Dramatic examples of this were behind the 2008 meltdown of most financial institutions.) Your authors believe it is better to be roughly right than precisely wrong. Further, we agree with Graham about-
 the importance of a margin of safety. While we can rarely buy dollar bills for 50 cents, we generally aren’t tempted unless dollars are priced below 80 cents.

PART II
Investing Fundamentals: CAPM and EMH

CHAPTER 6
How Valuation Is Used by Hedge Funds
Value investors, and the long strategies of hedge funds, will screen for companies whose current price is well below their estimate of intrinsic value. The short component of a hedge fund strategy will do the opposite: they will short firms whose market price is well above intrinsic value.
How and Why Events Affect Prices
If a company’s value is—optimistically—the present value of all of its future cash flows, then new information that changes expectations about those cash flows will change stock prices.
If most trades occur when the buyer has a different view of the stock’s value than the seller, then the receipt of value-relevant news presents an opportunity. If negative news about a company occurs, sellers may wish to unload the stock now in the hope that the buyers who are not yet aware of it will continue to value the stock based on old information that indicates a higher price. Similarly, if buyers believe they know positive news sooner than do sellers, they can buy the stock before sellers -
upgrade their asking price. So self-interest can drive stock prices up or down out of proportion to the apparent significance of a piece of news, as each trader tries to exploit it before others. A market’s efficiency reflects the speed at which this happens.
A study by MacKinlay examined the effects of good and bad news on stock prices, tracing prices for 21 days before and 21 days after an event, where events were characterized as good news, bad news, or no news.

Averaging over many companies and their events, bad news generally reduced stock prices by a few percent. Typically the price fell by 2 to 3 percent immediately after the news, then partly recovered in the ensuing days, ending 1 to 2 percent below the price just before the event. The pattern after good news was the mirror image: prices jumped immediately after the event, then partly retraced, ending up 1 to 2 percent 21 days after the event. Interestingly, prices followed a similar, but less prono-
unced, trajectory before the event: sliding slowly down in the 21 days before the bad news, or creeping slowly up in the 21 days before good news. This again suggests the market is quite efficient, with investors anticipating the news and trading accordingly in advance of the actual event.
Events can be company specific, industry specific, or economy wide. Many “macro” hedge funds specialize in investing based on expected indirect and secondary effects of events. For example, a belief that developed economies will slow might lead a fund to short Chinese manufacturers, on the theory that those firms that export will see slower sales as demand from consumers of developed world declines. As an extension of this idea, an event that negatively affects one industry may help an industry th-
at produces a substitute product: A drought in coffeeproducing regions might cause some beverage drinkers to switch to tea, helping tea producers. A hedge fund might short coffee companies and go long in tea companies.
Event studies are discussed at greater length in Chapter 11.
Bio: David Einhorn, Greenlight Capital
Born: 1968
Firm: Greenlight Capital, midtown Manhattan
Founded: 1996

Style: Long/short value–oriented equity.
Annual return: “north of 19 percent,” according to Forbes
AUM: $8 billion (2012)
Einhorn’s background: He was born in New Jersey and raised mostly in Wisconsin. He graduated from Cornell in 1991 with a bachelor’s in Government. He founded Greenlight with $900,000 in his own and family funds. Greenlight’s early years, and a deep look into its short of Allied Capital based on Einhorn’s suspicions of accounting fraud, are detailed in his book Fooling Some of the People All of the Time, published in 2008, with a second edition in 2010.
Significant trades: Major shorts (covered extensively in the media) include Allied Capital in the mid-2000s; Lehmann Brothers in 2007 (18 months before its bankruptcy), and Green Mountain Coffee Roasters in 2011. In April 2013, Einhorn filed a lawsuit against Apple to pressure it to issue dividend-paying preferred stock, to return some of its $100 + billion in cash to shareholders.
Color: Einhorn founded the “Portfolios with Purpose” virtual stock trading contest, with proceeds to charity; and he donates his winnings in the World Series of Poker to charity. In the summer of 2011, Einhorn entered into negotiations to purchase a minority stake in the New York Mets for $200 million, but those talks were suspended by the autumn.

CHAPTER 7
Framework for Investing: The Capital Asset Pricing Model
(CAPM)
Although finance and investing have existed as long as there have been markets to connect suppliers of capital (savers) with those who need capital (businesses), the beginnings of a rigorous framework for appraising and designing portfolios did not really come into being until the mid-twentieth century. The Capital Assets Pricing Model (CAPM) is one of the most influential models developed to address this. Merton Miller, Franco Modigliani, and William Sharpe shared a Nobel Prize in Economics in 19-
90 for their development of the CAPM.
To jump ahead for a moment, one of the core implications of CAPM when combined with the Efficient Markets Hypothesis (EMH), which will be described in the next chapter, is that very few investors can produce sustained returns superior to market averages. Therefore, CAPM and EMH adherents asserted, buying “the market,” such as a stock market index, would produce superior results to most other strategies. Burton Malkiel’s A Random Walk Down Wall Street was the first popular book on indexing; first p-
ublished in 1973, it has now appeared in over a dozen new editions. John Bogle founded Vanguard Funds in the early 1970s to make index investing available to retail customers.
Hedge funds are premised on the belief that it is in fact possible to outperform a long-only market indexing strategy. So why spend a chapter on a framework that seems to contradict this? Because CAPM has been

hugely influential in the investment community. And because it presents a framework that allows us to break down investing performance into component parts.
An Overview of CAPM
Figure 7.1 shows daily price movements of a stock, ExxonMobil (ticker symbol XOM) and an index, the S&P 500 (ticker symbol SPX), for about 1 year from late 2011 to late 2012.
You can see that prices of these two assets mostly move in tandem. But there are periods where one moves by more, or less, than the other. This suggests two things:
• There appears to be a strong relationship (positive correlation) between XOM and SPX—that is, most events seem to affect both assets in the same general way.
• Changes in XOM do not appear (for the most part) to be quite as pronounced as changes in SPX.
Clearly, relative price movements for a given stock—in this case XOM— compared to the overall market—captured in the S&P 500 index, SPX— deserve attention. But there may also be a systematic difference in a stock’s returns, aside from the portion of its returns that seem to relate to broader market movements. That is the core of CAPM: distinguishing between stock returns that derive from broad market movements and those that do not.

Figure 7.1 Daily price movements for XOM and SPX
The ABCs of CAPM: Alphas, Betas, and Correlations
Figure 7.2 shows the price changes (i.e., the daily returns in percent) in XOM and SPX. In many instances, the two series are indistinguishable, a sign that whatever affects the overall market (SPX) is also affecting ExxonMobil (XOM). Recall that returns are simply
[(Price at time t/Price at time t – 1) – 1].
The most basic measure of the relationship between movements in XOM’s price and SPX is correlation. In a simple form, a correlation coefficient measures the frequency with which prices of two assets move in the same direction. Correlation coefficients can be as follows:
• –1.0—a perfect negative relationship. Whenever the S&P rises, XOM falls, and vice versa.

• 0—no visible relationship. • +1.0—a perfect positive relationship. Whenever the S&P rises, XOM
rises, and vice versa.
Figure 7.2 Daily percentage change in price for SPX and XOM Correlations among financial instruments will be essential elements of portfolio construction, discussed in a later chapter. In general, combining assets with low or negative correlations to each other—that is, correlation coefficients that are near zero, or even negative—dampens a portfolio’s volatility (i.e., lowers risk).
The essence of CAPM is illustrated in Figure 7.3. This is a scatter plot of XOM’s daily returns versus those of SPX. Each dot represents one day of data—the horizontal location indicates the change in SPX, while the vertical location is the change in XOM. This pattern of a generally upwardsloping oval-shaped scatter is very common: On days when the overall

market is driven upward (i.e., when there are more buyers than sellers), the same is true of XOM. This implies the correlation coefficient is positive (between 0 and 1). If XOM benefitted from events that hurt the overall market (or vice versa), the general shape of the scatter would be downward, and the SPX and XOM correlation coefficient would be negative (between –1 and 0).
As shown in Figure 7.3, we can fit a regression line through this scatter to find the linear equation that best captures its pattern. All linear equations have the general form Y = b × X + a; in this example:
Return (XOM) = beta × Return (SPX) + alpha where alpha is the Y-intercept of the regression line, and beta is its slope.
Figure 7.3 Scatter graph of XOM return versus market return, with regression line

We can interpret these ABCs—alphas, betas, and correlations—as follows:
• Alpha is the systematic difference in performance (return) of a stock over and above the market. Positive alpha could come from superior management, production technology, or product design; or from having a dominant position in the company’s market that provides it pricing power (the ability to raise prices without losing many customers). Alpha is the intercept of the regression line in Figure 7.3. Since collectively all stocks cannot beat the market because together they are the market, alpha -
is assumed to be zero on average. (Any stock with positive alphas is counterbalanced by other stocks with negative alphas.)
• Beta represents the stock’s price volatility relative to the overall market. Simply put, a stock with a beta of, say, 1.5 will rise on average 1.5 times as much, and fall 1.5 times as much, as the overall market, in percentage terms. Small, speculative companies usually have betas well above 1.0, while large companies with very stable earnings usually have betas well under 1.0. XOM’s beta is 0.77; it isn’t surprising that a large company whose fortunes are so intertwined with other companies (th-
rough oil supplier relationships) would see its stock move almost as much as the overall market. The market’s beta is by definition 1.0. Beta is the slope of the regression line as shown in Figure 7.3. You can find a stock’s beta on many investing websites, such as Google Finance or Yahoo Finance.
• Correlation coefficients capture the “tightness” of the scatter around the regression line, which summarizes the pattern in that scatter. The higher (closer to 1.0) the correlation between XOM and SPX, the more that XOM’s price movements are explained by movements in SPX. Said differently, a high correlation coefficient suggests that events that

affect prices in the overall market have similar effects on the price of XOM.
Implications of CAPM
A fund manager can derive return from beta and alpha: When returns are based primarily on an upward general market we call this buying beta. On the other hand, returns resulting from investment skill are known as seeking alpha. As noted earlier, extensive study of the mutual fund industry finds little evidence of persistent alpha among fund managers.
So CAPM allows the most basic disaggregation of an investment’s performance into two parts: based on market return (which could be achieved simply by buying an index)—beta; and based on companyspecific factors—alpha. Since there are extremely inexpensive ways to guarantee a beta of 1.0 by buying index funds or ETFs, outperforming the market entails investing in stocks more volatile than the index (buying beta), or finding stocks that systematically outperform (buying alpha). Buying beta means, by -
definition, buying increased risk, since high beta stocks not only rise faster than the index on “up” days, but also fall farther on “down” days. Buying alpha is the oft-sought, but rarely achieved goal.
Basic Hedge Fund Strategies in the CAPM Framework
Hedge funds are so called because the first hedge fund, Albert Winslow Jones’ fund formed in 1949, strove for absolute positive returns through hedging—making contrary bets that would pay off if their main bet failed. These hedges would at a minimum reduce losses, and in the best case could produce absolute positive returns (i.e., returns above zero even if the general market direction was downward). In exchange, these hedges posed a drag on returns when the market headed upward.
In CAPM terms, a hedge works as follows. (We will retain the XOM and SPX example from the previous figures.)

A portfolio’s return is the weighted average of the returns of its constituent assets. (Portfolio construction will be treated at length in later chapters.) So if an investor holds a portfolio that constitutes a long position in XOM for 60 percent of its holdings and in SPY (SPY is a publicly traded ETF that tracks SPX) for 40 percent, the portfolio’s return would be calculated as follows:

XOM weight: 60 percent; XOM return: 8 percent

SPY weight: 40 percent; SPY return: 10 percent

Portfolio return: 60% × 8% + 40% × 10% = 4.8% + 4% = 8.8%.

(XOM) (SPY)

(Portfolio)

As you would expect, the portfolio’s return falls between that of its two constituents, shaded toward XOM, which has a larger share of the overall portfolio.
In CAPM terms, a portfolio’s return is likewise an amalgam of the returns on each stock within it:
return (portfolio) = weight (XOM) × return (XOM) + weight (SPY) × return (SPY), where each stock’s return is as follows:

return (XOM) = beta (XOM) × return (market) + alpha (XOM)

and

return (SPY) = beta (SPY) × return (market) + alpha (SPY)

Note: We assume beta for SPY is 1.0 and that SPY’s alpha is 0 because its performance is equivalent to the market’s.
Let’s move on now to a hedge example: Assume that the investor has some reason to believe that Exxon will experience positive developments and will rise faster than the overall market. A long-only investor would simply buy XOM. If it performs as expected, the investor will do well; however, if the market drops substantially, XOM will drop with it and he will lose money.

To hedge against this possibility—that XOM may decline because the overall market declines—when a hedge fund buys a long position in XOM, it can short the SPX. Accordingly, suppose the manager takes a 50 percent positive position in XOM, and a negative 50 percent position in SPY: The portfolio return is the weighted average of the two positions:
0.5 × [beta (XOM) × return (market) + alpha (XOM)] + –0.5 × [beta (SPY) × return (market) + alpha (SPY)]
The portfolio weight for SPY has a negative sign because the fund is shorting the SPX. Again note that the alpha for SPY—the market—is by definition 0.
If the investor’s forecast is incorrect and XOM falls (not rises as he expected), the tumble may be because of a general fall in the market, in which case his short would make money that would at least partly compensate for his loss in the long XOM position. At the same time, if his forecast is correct and both XOM and the overall market rise, his XOM gains will be at least partly offset (dragged down) by his losses on the short SPX position.
Note that this portfolio (50 percent XOM, –50 percent SPY) is dollar balanced, meaning that there is an equivalent investment on the long side as on the short side. But the portfolio is not beta balanced. The two positions do not quite cancel each other out—the portfolio will still be skewed long or short by the respective alphas and betas of its two positions. In this instance, it’s because XOM’s beta (0.77) is lower than SPY’s (1.0). If the market goes up the portfolio will only be net long if X-
OM’s alpha is sufficiently greater than the market’s to counteract the 0.23 difference in betas (1.0 – 0.77). However, if the betas of the two issues were very close, the positive return would be 0.5 × the long position’s alpha (in this case, XOM’s).

Most hedge funds seek beta-balanced portfolios so that they are precisely protected against market-wide moves. That means, essentially
Sum(beta_i * w_i) = 0, and Sum(|w_i|) = 1.0
where beta_i is the beta for stock I, and w_i is its weight in the portfolio. In this case, because XOM’s beta is 0.77, we must hold a larger portion of XOM to offset its lower beta. A beta-balanced portfolio of these two issues would contain 56 percent XOM, and –44 percent in SPY. (We leave the algebra as an exercise.)
Such excess returns are quite small, which is why hedge funds need to trade in very large volumes, and often use leverage (borrowing) to expand the magnitude of their trades. Many financial institutions like hedge funds leverage 20 or 30 times their invested capital. Leverage magnifies both gains and losses. This is why high degrees of leverage are often combined with hedged (long/short) strategies.

CHAPTER 8
The Efficient Market Hypothesis (EMH)—Its Three Versions
Another extremely influential element of finance theory is the idea that most asset markets are highly efficient. In this context, efficiency means that information that can affect prices travels quickly throughout a market and that their prices are affected accordingly. Recall that arbitrage opportunities exist when a buyer and a seller have differing views of the true price of a stock—perhaps because of differences in information available. The more efficient a market, the more that relevant inf-
ormation is equally available to all market participants. Many disclosure requirements in law and regulation aim to improve the efficiency of the market. Likewise, prohibitions on insider trading are intended to make it difficult for those company insiders to exploit their information advantage. (Most criminal cases involving hedge fund personnel have been related to insider trading.)
What Makes Markets Efficient?
An indirect measure of market efficiency is the speed with which a stock’s price adjusts to company-relevant information. Why would this occur? Let’s consider a few examples:
1. Say, for example, that a mining company reports that the results of test borings of a new mine yielded less gold per ton than expected. Interested investors might conclude that the company’s profits would be depressed because the cost to generate an ounce of gold in the future will be higher than expected.

2. Lower than expected earnings could have a double effect: It will reduce the company’s stock price for a given price to earnings (P/E) ratio; and the reduced prospects might lower the stock’s P/E. Investors who follow the stock closely will rush to unload their shares before (they hope) others realize that the stock has become less valuable. In this way, investor self-interest will cause new information to be reflected in stock prices quite quickly.
Asset markets undoubtedly vary in their efficiency. Those with very high trading volumes and significant transparency (i.e., wide disclosure of relevant information), such as the NYSE, are at the high end of the efficiency spectrum. Illiquid, niche markets with poor information transmission, such as a “frontier” stock market in an emerging economy, will be much less efficient.
Market efficiency is crucial to determining whether active investment management, such as by hedge funds, is cost-effective. In highly efficient markets, several investment managers may be competing to profit from arbitrage opportunities that those opportunities are “arbitraged away” almost instantaneously.
Three Versions of the EMH
Eugene Fama first postulated the EMH in the mid-1960s. As elaborated by others, it has now been posed in three different, increasingly rigorous versions:
1. Weak form: Future asset prices cannot be predicted using historical price and volume data. Such information is widely available from the business press and on investing websites such as Google Finance or Yahoo Finance.
2. Semi-strong form: Asset prices adjust immediately to all publicly available information, including that which reflects the company’s

fundamentals like financial disclosures. 3. Strong form: Asset prices adjust immediately to reflect all relevant
information, including that available to insiders.
Which form of the EMH best approximates real conditions will fundamentally affect which investing strategies can succeed.
If the weak form of the EMH is correct, technical analysis (using only historical price and volume data) cannot succeed, but investors who can develop other relevant information (such as independent fundamental estimates of intrinsic value) can have and exploit an information advantage.
If the semi-strong form is correct, technical analysis and fundamental analysis cannot work: Value investors are wasting their time—value arbitrage opportunities don’t exist, because they have been already arbitraged away.
If the strong form is correct, even those who trade on inside information cannot succeed: They are risking jail to little gain.
Debates over the EMH
Most academic studies have supported the validity of some version of the EMH. A good layman’s summary is Burton Malkiel’s A Random Walk Down Wall Street. As noted earlier, it is likely that different versions apply in different markets. The strongest versions apply in the largest, most transparent, most liquid markets such as for U.S. large cap stocks. In these markets, numerous studies have demonstrated that very few managers persistently outperform market indexes—even fewer than would be expecte-
d by mere chance.
A casual reader might conclude that if the EMH applies, then hedge funds or any active management approach could not succeed, and that they incur expenses with no sustained benefit. As noted earlier, this supposition seems reasonable for most managers, based on extensive empirical research by

economic and finance academics. But such reasoning may be overdone. Active managers may be precisely the agents who make a market efficient! They have incentive to identify any possible opportunity to arbitrage. Because their competitors seek similar opportunities, they have reason to act on those they identify as quickly as possible. So hedge funds may contribute to the existence of efficient markets, rather than being made unnecessary by them. While high hedge fund fees may offer dubious value t-
o clients, they may provide a more general service by incentivizing greater market efficiency.

CHAPTER 9
The Fundamental Law of Active Portfolio Management
Wide diversification is only required when investors do not understand what they are doing.
—Warren Buffett
Buffett’s quote seems to contradict quantitative investment approaches: Quant funds often diversify across hundreds or thousands of positions. Do quant funds know what they are doing?
You already know Warren Buffett is an effective fund manager, perhaps the best ever (see Figure 9.1). What might we learn from his investing style? We can learn a lot of course, but let’s focus here on his allocation strategy: How does he apportion Berkshire Hathaway’s (BRK-A and BRKB) assets across the various equities they hold? (Figure 9.1).
Buffett invests strongly in a small number of companies: As of September 2010, 54 percent of BRK-A’s holdings were in just three stocks: Coca Cola (KO), American Express (AXP), and Wells Fargo (WFC). Ninety percent of their holdings were in just 12 stocks. Let’s compare Buffett’s allocation with Renaissance Technologies’ Medallion Fund. Renaissance Technologies (RenTec) is perhaps the most successful quantitative hedge fund management firm, with consistent annual returns of 35 percent or more for -
their Medallion Fund each year. In contrast to BRK, RenTec’s portfolio is distributed more or less uniformly across hundreds of positions.
So we have two very different but successful allocation strategies. They are at either end of a spectrum: One with just a few holdings (BRK-A) and

another with hundreds (RenTec). You may be interested to learn about an investment theory that explains how they can both be successful.
Figure 9.1 Performance of Berkshire Hathaway
Source: Yahoo.com
Relating Performance, Skill, and Breadth
In the 1980s, Richard Grinold introduced what he calls the Fundamental Law of Active Portfolio Management. It is described nicely in his book with Ronald Kahn, Active Portfolio Management. For the moment we will offer a simplified version of this law. We paraphrase it as follows:
performance = skill * √breadth Skill is a measure of how well a manager transforms information about an equity into an accurate prediction of future return, and breadth represents the number of investment decisions (trades) the manager makes each year. This law suggests that as a manager’s skill increases, returns increase. That is not surprising. What is interesting and perhaps surprising is that to double

performance at the same level of skill, a manager must find four times as many opportunities to trade.
The law also implies that Buffett could improve his performance significantly by expanding his portfolio. Why doesn’t he do that? We can only speculate, but it is likely because his skill does not scale. Not only that, he is probably aware of the diminishing returns suggested by the Fundamental Law: If he worked twice as hard by looking at more companies, returns would only improve by 41 percent. Buffett spends a great deal of time understanding a small number of companies deeply. His attention an-
d depth enables him to make accurate predictions for the companies he thinks about. But he can’t apply this depth of attention to all of the 4,000 equities traded on the NYSE.
On the other hand, RenTec’s predictive power is not as strong as Buffett’s, but it is scalable. They use computerized techniques to assess thousands of equities in a more shallow way. But they do it rapidly, perhaps hundreds of times a second. The accuracy of each of their predictions is not as high as Buffett’s, but because they are able to apply a modest level of skill to so many equities their breadth substantially outpaces his.
Breadth as Diversification
There are two ways to increase the breadth of a portfolio: We can choose to hold more equities at once, or we can turn over those assets more frequently. The first approach is more suitable for a conventional managed portfolio approach to investing, while the second relates more to an active trading strategy. In this section, we’ll take a look at the managed portfolio.
You’ve heard the cliché’ “Don’t put all your eggs in one basket.” If you run into a negative surprise regarding that basket, you will be glad that all your eggs are not there. By the same token, if the basket surprises you positively, you will regret having spread your bets around.

Modern portfolio theory distinguishes between two broad categories of risk:
• Systematic risk is that risk undertaken by exposure to any asset in the asset class. You may invest in the bluest blue chip stock, but it too will take a beating if the entire market falls.
• Specific risk is the risk associated with a particular asset. An oil company’s stock price may suffer if a new oil field fails to produce as expected—regardless of what else is occurring in the stock market.
Diversification mutes specific risk. Research has shown that the volatility, or standard deviation of returns, of a portfolio of stocks declines as more individual stocks are included in the portfolio. Accordingly, some investment advisors counsel limiting any single position to no more than 5 percent of a total portfolio. (Some recommend even lower percentages.) But the benefit decelerates as the portfolio becomes too diverse. Experts argue that diversification beyond 20 to 40 separate issues pro-
vides little additional risk reduction.
There is a trade-off, however. The more breadth in an investor’s portfolio, the less expertise they can apply to each of its contents. Since alpha is assumed to stem from research and knowledge—that is, from investmentspecific information—the broader the portfolio, the less alpha can be generated.
Breadth as More Frequent Trading
Another approach to adding breadth to a portfolio or strategy is through more trading opportunities. We will illustrate that idea here using a simple example of an even money bet: coin flipping.
Assume you have been given a coin and invited to wager on the result of a series of coin flips. Each flip requires you to bet a fixed amount, which you choose; say $1 at the start. If the coin lands on the side you predict, you

receive a second dollar: a 100 percent return. If it lands on the other side, you lose your bet: a –100 percent return. If the coin was fair (i.e., it could fall on either side with an equal 50 percent probability), then the expected return of any one-dollar bet would be zero, regardless of how many times you bet:

Expected return for each flip:= Prob (heads) × Reward (heads) + Prob (tails) × Reward (tails)
= 0.50 x $1 + 0.50 x (–$1) = 0

Therefore, the total expected return would be zero regardless of the number of flips for one dollar each.
But say your coin wasn’t fair—it had a small bias toward one side, say heads. Let that small bias reflect skill. Assume the bias creates a 51 percent probability of heads and a 49 percent probability of tails. Clearly your expected return for each flip will now be positive:

Expected return for each flip:0.51 × $1 + 0.49 × (–$1) = 0.51 – (–.49) = 0.02 (two cents)

Clearly this is a bet you wish to take. The question is, for how much each flip? Say you have $1,000 to bet. Should you bet it all on a single $1,000 flip, or flip 1,000 times for 1,000 individual one dollar bets? This is analogous to the question: How diverse should your portfolio be?
The expected return is the same whether you make one bet of $1,000 or 1,000 bets of $1:

0.02 × 1,000

= $20;

(Exp return per bet) × (# of bets) = (Exp return for all bets)

or

$20 × 1

= $20

(Exp return per bet) × (# of bets) = (Exp return for all bets)
The expected return is the same for each situation, but the risk is very different.
First, for the single bet option, there is a 49 percent chance that you will lose your entire $1,000 stake. For the multiple bet option, the probability of a total loss—the coin coming up tails each of 1,000 times—is 0.49 ^ 1000, which is infinitesimal (too small to be displayed on our spreadsheet, even to 23 significant digits). So, for this measure, risk is substantially lower for the 1000-bet scenario.
But we can also use standard deviation—a measure of the range of plausible returns—as a measure of risk. For a single $1,000 bet, the standard deviation is $31.62. For the 1,000 $1 bets, the standard deviation is $1. So for this measure, we also see significantly lower the risk for the 1000- bet case. In finance, we often compare strategies in terms of riskadjusted return, which is to say return divided by the risk. So the return to risk ratios of the two options are as follows:
Single $1,000 bet: $20 reward/$31.62 risk (standard deviation) = 0.6325 One thousand $1 bets: $20 reward/$1 risk = 20.0
This return to risk ratio is similar to the Sharpe ratio. But it is not based on excess return—it doesn’t explicitly deduct a no-risk return from our expected return. But if the risk-free return is zero—if the only way to earn a return is by betting on coin flips—then this is essentially the Sharpe ratio. This specific version is called the information ratio, discussed later in this chapter.
The “diverse” option where we are able to flip the coin more times has a reward to risk ratio more than 30 times that of the concentrated option!
A Few Definitions

We will soon present the fundamental law in full. But we must first introduce some terminology. The Fundamental Law relates overall portfolio performance to investor skill and breadth (or diversification). In our coin flipping example, breadth is reflected in the number of flips, while for investing, it relates to the number of investment opportunities.
To fully explain the fundamental law, we need to introduce two new terms. These are, frankly, not well labeled. But their names have become commonly used, so we are stuck with them.
Information Ratio
A key measure of performance used in quantitative portfolio management is the information ratio (IR). IR is similar to the Sharpe ratio; it adjusts return for risk, by dividing them:
IR = excess return per period/(standard deviation of excess return per period)
We must be more specific now by what we mean by “excess return.” In particular, we seek to measure return that is due to the investor’s skill rather than return that is due to the market. Recall that the CAPM separates market return from stock-specific return:
return (stock i) = beta (i) × return (market) + alpha (i)
The alpha component is sometimes called the “residual.” It reflects the component of price movement that cannot be attributed to the market overall. It is sometimes attributed to the skill of the investor for having selected the stock. Because returns vary daily, the aforementioned terms are usually averages (means) of a series of daily returns. Their variation, or risk, is captured by their standard deviations. You can think of the total return as having two risk components:

• Market risk, captured by the standard deviation of [beta × return (market)].
• Investor-specific or “skill” risk, captured by the standard deviation of alpha.
Hedging investing strategies seek to minimize or eliminate the market risk, leaving a clear field to exploit the investor’s alpha. A summary measure of skill is the information ratio of an investor’s alpha, or:
IR (alpha) = Mean (alpha)/Standard deviation (alpha). This adjusts the average excess return the investor earns by the risk he runs.
Information Coefficient A manager’s information coefficient (IC) is the correlation of a manager’s predictions about asset prices with their actual future prices. A perfect predictor would have an IC of 1.0; a perfectly wrong predictor would have an IC of –1.0. IC captures the quality of the information a manager uses in forecasting prices.
Breadth The breadth (BR) of a portfolio or management strategy is simply the number of trading opportunities presented over time.
The Fundamental Law in Full
Grinold’s Fundamental Law of Active Portfolio Management relates IR to IC and breadth as follows:
IR = IC * √breadth
Implications of the Fundamental Law
An increment of added skill, reflected in the information coefficient, has a greater reflect on risk-adjusted return (the information ratio) than does an

equal increment in portfolio breadth. This is because the portfolio breadth affects the IR as a square root, whereas IC affects IR proportionally. So for an investor like Buffett, whose IC is probably among the highest on the planet, he is absolutely correct—for him—to disparage diversification.
As was mentioned earlier, expanding a portfolio’s breadth often means expanding beyond what Buffett calls the investor’s “circle of competence.” That is why, for example, he eschewed technology businesses during the dot com era. In other words, there may be a physical trade-off between breadth and IC. For both these reasons it is rational to seek a higher IC rather than increased portfolio diversity—if you can actually improve your IC.
Bio: Jim Simons, Renaissance Technologies
Born: 1938, raised in Brookline, Massachusetts Firm: Renaissance Technologies (RenTec). Flagship fund: Medallion Fund Founded: 1982
Annual return: 39 percent, 1989 to 2006 AUM: $20 billion (2010)

Style: Quantitative all-asset trend-following, specializing in commodities
Simons background: B.S. in Math, MIT; PhD in Math, UC Berkeley. Mathematician and code-breaker at the Institute for Defense Analysis (IDA); winner of the highest prize in geometry. Fired from IDA for opposition to the Vietnam War, Simons rode from Boston to Bogota, Columbia, on a motor scooter. He then launched a factory in Colombia. Successfully traded commodities during the high-inflation, high-volatility late 1970s, collecting a team of applied mathematicians who used the principles of cryptogr-
aphy to “decode” commodity price patterns.
Differentiation: RenTec employs many scientists and mathematicians without financial backgrounds, believing that they can examine financial data without preconceptions. “Simons’ team took their experience with code-breaking algorithms and used it to look for ghostly patterns in market data. Economists could not compete in the same league, because they lacked the specialized math to do so.” (from More Money Than God)

PART III
Market Simulation and Portfolio Construction

CHAPTER 10
Modern Portfolio Theory: The Efficient Frontier and Portfolio
Optimization
Investors want the best possible return for a given amount of risk. In other words, they want to maximize risk-adjusted returns. Portfolio design is about the creation of a collection of assets whose combined risk level may be lower than that for any individual component. This apparent magic was first formalized by Harry Markowitz in the 1950s. He shared a Nobel Prize for this work, and his original ideas have been extended by other academics. These ideas are known collectively as modern portfolio-
 theory (MPT). In this chapter we will use a stylized example to make the core elements of MPT clear (Figure 10.1).
Figure 10.1 Risk and returns for asset classes
Risk and Return, Again

Assume your portfolio can be composed of a range of specific assets, such as company stocks or individual bonds. Each of these can be classified in risk and return space based on your expectations for each. Expectations may be based on a forecast, or on past experience (implicitly assuming that the asset’s future behavior will resemble its past behavior). Figure 10.2 illustrates a typical scatter plot for a range of assets. Note that individual stocks’ returns and risks seem to be randomly distrib-
uted, but with an upward bias: Generally, it isn’t possible to enhance return without accepting more risk. Looking at it another way, in an efficient market, investors will price low risk and high return assets highly in the first place, thereby depressing future returns. Only volatile (risky) assets will be priced low and produce superior returns. This risk and return trade-off is one of the fundamental assumptions in modern finance.
Figure 10.2 Risk and returns for two pure asset classes and one 50/50 portfolio
Once assets are selected (e.g., which stocks to buy) a key decision in the construction of a portfolio is to select the proportions we use of each asset, called portfolio weights or allocations. The efficient frontier connects the assets that lie generally above and to the left of all other assets on the scatter plot. If 100 percent of our portfolio is in Asset A, its risk and return are

those of point A in Figure 10.2. A 50/50 mix of Assets A and B will usually produce risk and return about halfway between points A and B. In principle, it seems we should be able to extrapolate this to a portfolio with any number of assets: We would expect its risk and return to fall roughly in the center of the included points (assets included in the portfolio), closer to the heaviest-weighted assets. An example is Figure 10.3. But this need not be the case: The right combination of assets can re-
duce risk at little cost in return. This apparent magic is known as portfolio construction, specifically portfolio optimization.
Figure 10.3 Risk and returns for mixed and optimized portfolios To explain this magic entails a brief digression into the profound
importance of correlations in a portfolio.
Why Low Correlation Is Prized
Figure 10.4 shows the price history of three stocks, with tickers ABC, DEF, and GHI. Each achieves about the same return over the period, and appears to have similar volatility (standard deviation), based on the graph alone. You can see that ABC and DEF move virtually in tandem, so events appear to affect them similarly. These two stocks have a very high positive correlation (say, 0.9). Buying both does not really diversify your portfolio.

In contrast, GHI seems to move opposite to ABC and DEF: it rises when they fall, and vice versa. GHI appears to be highly negatively correlated with ABC and DEF (say, –0.9).
Figure 10.4 Price history of stocks ABC, DEF, and GHI Creating a portfolio combining GHI for 50 percent with each of ABC (25
percent) and DEF (25 percent) will produce Figure 10.5, the portfolio’s price history over the same period. Its total return will be the weighted average of the returns of the three stocks, as expected. But what is surprising is that the portfolio’s volatility is far less than any of its components.
Figure 10.5 Price history of portfolio of stocks ABC (25 percent), DEF (25 percent), and GHI (50 percent)
The reason for this is that the portfolio combines assets that are negatively correlated. This dampens the oscillations in return and produces much less volatility than any of the three stocks achieve by themselves.
Figure 10.6 now returns us to the scatter plot of portfolio components in terms of risk and return, but with two important additions:

• Since our measure of risk-adjusted return, the Sharpe ratio, is the ratio of the vertical (return) divided by the horizontal (risk) in Figure 10.6, the slope of a ray from the origin outward that passes through a portfolio’s location is that portfolio’s Sharpe ratio. The point on the efficient frontier that intersects with the steepest-sloped ray has the highest Share ratio—it delivers the most return per unit of risk.
• Combining assets with negative correlations but similar returns can lower risk without sacrificing return. In practice, few assets are negatively correlated, so we will have to settle for low positive correlations. But the same principle applies, if not as strongly.
Figure 10.6 Scatter plot of asset risks and returns Assume for the moment that Portfolio 1 in Figure 10.6 is our designed portfolio, found by combining several weakly correlated asset choices. You can see that it is above and to the left of most assets in the scatter plot. It will have the highest Sharpe ratio (the steepest-sloped ray from the origin). This is the goal of portfolio optimization: to design the combination of assets that produces the lowest risk for a specified target return.
Optimization Basics

Optimization means identifying the best choice among a number of options. In the context of a portfolio, this means choosing what fraction of the portfolio should comprise each of the available assets. Assets could be specific issues such as individual companies’ common stock, or asset classes such as large cap, midcap, small cap, and microcap equities; short-, intermediate-, or long-term bonds; residential, commercial, or industrial real estate, and so forth—whatever asset class trades on a major-
 exchange.
Most optimization problems have common components. They are listed here, with explanation specific to portfolio optimization.
1. Decision variables: Proportion of portfolio devoted to each asset (portfolio weights).
2. Objective function: Goal you wish to maximize or minimize. Commonly, portfolio optimizers minimize risk, but they could maximize total portfolio return. The objective function has a coefficient on each portfolio element that reflects that element’s contribution to the goal. For an investment portfolio, such coefficients would be each asset’s return.
3. Constraints: Limits you impose on the set the optimizer should consider. If the objective function was to minimize risk, one constraint might be to achieve a total return equal or above a threshold amount. You may also set minimum and maximum weights on some elements of the portfolio, such as holding no more than 10 percent in bonds rated below investment grade; or no more than 5 percent in any single issue. One definitional constraint is that the sum of all weights in a long-only portfolio can-
not exceed 100 percent.
4. A search procedure: The optimization algorithm uses some procedure to efficiently search for the best combination of decision variables. In some cases, it may be brute force—trying one combination after another. Generally, it uses some efficient or semiefficient procedure. For example, if the function being maximized is convex, trying alternatives an

increment above and below the last trial will determine which weights should be increased and which decreased. Some optimization problems have very efficient solutions; for example, any function for which there is a calculable derivative (remember your high school calculus) will have an immediately identifiable optimum. Similarly, for linear programming problems (optimization problems in which the objective and constraints can be expressed as linear functions), optimal solutions will always be cor-
ner solutions, so it is only necessary to compute the objective value in corners (intersections between constraints). Binary search algorithms and similar procedures likewise speed up the process of seeking an optimum.
A publicly available optimizer is available as part of QSTK in the public domain, thanks to the efforts of UCLA. You will find it at http://wiki.quantsoftware.org/index.php?title=QSTK_Tutorial_8. Microsoft Excel also includes a simple optimizer within its macros.
Portfolio Optimization and the Efficient Frontier
Figure 10.7 repeats Figure 10.6 from before, with small additions. You can see that the most desirable portfolios will be located in the upper-left portion of the scatter plot. The point (combination of assets) that intersects with the steepest ray emanating from the origin (Sharpe ratio) will maximize the ratio of return divided by risk. In this figure, two straight lines have been drawn, a horizontal line indicating the target return, and a vertical line indicating the minimum risk portfolio dis-
covered by an optimizer that provides that return.

Figure 10.7 The lowest risk portfolios for each level of return lie along a line called the efficient frontier
For each level of target return, there is a set of weights that provides the lowest-risk portfolio for that return. If we chart all these possible portfolios, by optimizing for each target return they form a curve called the efficient frontier. Note that the efficient frontier provides lower-risk portfolios (further left) than individual assets with similar returns.
A Dynamic Process
You can see that the optimal portfolio weights for any asset will be greatly affected by its expected return, and its correlation with other assets that are candidates for the portfolio. These are not stable values. Returns are cyclical: When an asset becomes popular, buyers bid up its price, which reduces future returns. Correlations can change: If a global event affects two apparently unrelated assets, uncorrelated assets can suddenly become highly correlated. This is common in a market crisis; -
A Wall Street joke is “in a market meltdown, nothing rises except correlations.” When investors feared Depression conditions in the fall of 2008, they rushed to liquidate risky assets—of all types—to move into cash and Treasuries. Bonds and

stocks, which are usually relatively uncorrelated, were suddenly highly correlated. So portfolios need to be optimized on a recurring basis.
No Panacea
While optimization can reduce some of the guesswork of portfolio construction, its apparent rigor and scientific basis can be seductive. Any model-based construction suffers from the following limitations:
• Outputs are only as good as inputs. Asset allocations depend on forecast returns, and forecasts can be noisy and erroneous. Return data may have biases and errors, such as the survivorship bias in hedge fund returns mentioned later. Quantitative outputs can appear overly rigorous if they are based on flawed inputs.
• Standard deviation of return is not the only measure of risk. Other metrics that focus mainly or exclusively on downside deviations in asset returns, such as the Sortino ratio or downside capture, may better reflect what risk means to you.
• Beware tail risk. Many hedge fund blowups, such as LTCM’s in the summer of 1998 (described in the case study later), occurred because managers underestimated the likelihood of extreme negative events. Portfolios that were designed based on only a few decades of data omitted “black swan” events that last occurred before the data series began. In addition, it is arguable that tails are getting fatter—extreme events are occurring more frequently, and with wider consequences as assets become more cl-
osely correlated. In essence, risk was misestimated.
The upshot is that, as with any quantitative decision support tool, it is only a tool, not an oracle.
Bio: Ray Dalio, Bridgewater

Born: 1950 Firm: Bridgewater Associates, Westport, Connecticut Founded: 1975
Style: Global macro How it differentiates: (1) Intensive research, (2) exceptional transparency with clients and (3) corporate culture places strong emphasis on introspection and self-criticism—almost cultlike. Annual return: 18 percent, since 1991 Assets under management (AUM): $145 billion (March 2013) Dalio’s background: Ray Dalio grew up in a middle-class family on Long Island, a self-proclaimed “below average” student. He became interested in investing as a preteen golf caddy. It was the earl-
y 1960s and the stock market was first emerging from a generation-long slumber following the 1929 Crash and the Great Depression. After college, Dalio went to the Harvard Business School for his MBA, graduating in 1973. He worked as a commodities trader only briefly before being fired for insubordination, leaving to found Bridgewater in 1975. The firm was originally a contract research shop, which moved into money management in the early 1990s. Bridgewater’s culture is unique in its emphasis on se-
lf-criticism and other principles at the core of Dalio’s philosophy.

Colorful quotes (from Dalio’s self-published book, Principles):
“The consensus is often wrong, so I have to be an independent thinker. To make any money, you have to be right when they’re wrong.”
“I believe that you can probably get what you want out of life if you can suspend your ego and take a no-excuses approach to achieving your goals with open-mindedness, determination, and courage, especially of you rely on the help of people who are strong in areas where you are weak.”
“Create a culture in which it is OK to make mistakes but unacceptable not to identify, analyze, and learn from them.”

CHAPTER 11
Event Studies
How do events, such as unexpected news, affect the price of a stock? Traders believe that having early knowledge of an impending piece of news —good or bad—provides them an information advantage that they can exploit. If they know the true value of a stock (i.e., after the effects of an event) in advance, they can buy before its price rises or sell before it falls.
But foreknowledge alone—or more likely, a strong hunch, termed conviction in the industry—isn’t enough. Even if you are highly confident that an upcoming event will raise or lower a given stock’s price, you need to forecast by how much that price will change to make a rigorous portfolio decision. And you must recognize the possibility that other investors have already accounted for the event—the news may already be “priced into” the stock. Further, how long after an event will its effects be compl-
etely “priced in,” with no further effect on the stock’s price? This can help an investor decide on his or her holding period following an event.
The efficient markets hypothesis (EMH) rejects the view that information can provide a durable investing advantage to varying degrees, depending on its strength (weak, semi-strong, or strong.) The EMH argues that news propagates into prices very quickly, so there are at best only very fleeting opportunities to arbitrage information discrepancies.
Event studies are a research method developed to illuminate this debate. The most comprehensive meta-study of the effects of events on stock prices was published by A.C. MacKinley in the Journal of Economic Literature in 1997. Its results are summarized in Figure 11.1.

Figure 11.1 Average effects of news on stock prices
Source: MacKinlay (1997).
MacKinley tabulated daily price data for stocks that experienced about 1,700 “events”—company-specific news items. He arrayed these data for 3 weeks (21 days) before and after the event, and computed daily price changes, averaging them among all the stocks in one of three groups: those that experienced good news (the top series); bad news (the bottom series); and a control group of no company-specific news (the middle series). Day 0 is the date of the event for each stock.
The first impression a viewer forms of these series is that markets react very quickly to events, and in the expected direction: Stock prices drop by an average 1.5 percent immediately after (on the day of and day after) a bad news event, and rise by 2 percent immediately after a good news event. As expected, there is no evident pattern among the control group.

But look also at the pattern in the days leading up to the event. Stock prices gradually creep upward before good news events, and slide downward before bad news events. EMH adherents argue that this corroborates their theory: Information about the impending event has leaked forward, and been traded upon, enough to consume about half the total price change that occurs from the based date until the day after the event. A counterargument is that news may simply confirm preexisting biases about a sto-
ck: Good news magnifies ongoing price gains and bad news confirms pessimism that was already driving prices lower.
Look also at the price trajectory in the weeks after events. Stocks gain further beyond the immediate event-driven price increase after good news, and recover about half the event-driven loss after bad news. These are examples of overshoots common in markets. As the section on arbitrage showed, investors can arbitrage overshoots, anticipating a reversion to the mean.
Event studies can help investors to anticipate the future trajectory of a stock’s price before and after news events. While they can maximize the value of this information if they correctly anticipate an event, they can still make money after an event if they exploit knowledge about how the event will affect a stock’s price.
Conducting an Event Study
Besides an optimizer, QSTK includes an event profiler. The analyst identifies the population of stocks for which he wishes to analyze the effect of events on returns. For the example in Figure 11.2 below we used all stocks in the S&P 500 (the 500 largest publicly traded U.S. companies, measured by market capitalization), for the full years of 2008 and 2009. We built an event table that indicated the dates on which company-relevant events occurred, and queried QSTK as to each stock’s return relativ-
e to the market (using the SPY ETF as a proxy for the overall market) day by day

before and after events. We set screens so that only stocks whose returns dropped at least 5 percent relative to the market were included in the set. This is the event we’re looking to analyze. The study yielded 497 stocks and dates for which this event occurred, or about one per trading day in the 2 years. The line in Figure 11.2 shows the average relative return, with the vertical lines around it indicating their (large) standard deviation.
Figure 11.2 Market-relative mean return of 1704 events in 2008–2009, courtesy of Lucena Research
The results of this illustrative event study are broadly consistent with MacKinlay: About half of these stocks’ cumulative excess return ebbed away in the 21 days leading up to the event, with the remainder being lost on the event day itself. Following the event, prices recovered from their event-driven overshoot, regaining about half of the event loss, with the peak excess return coming on about day 12 after the event.

This is a single illustration and should not be casually generalized—do not go out and trade based on this one example. But it illustrates the utility of event studies for developing trading strategies.
Assessing and Using Event Studies
Hedge funds use event studies to identify and appraise trading strategies. Commonly, analysts test out a strategy in a market simulator—a system programmed to generate price trajectories based on random combinations of historical price histories. Strategies are backtested—evaluated based on how they would have performed under past market conditions.
A simple example of an equity value strategy would be to buy a stock whenever its price is near the bottom of its Bollinger band—a range of plus or minus one standard deviation around its mean—while the market is near the top of its own Bollinger band. This strategy would go long in putatively underpriced stocks at a time when the overall market seemed to provide a tailwind. An event study could examine returns following events for these stocks versus returns for all other stocks.
Such studies can not only identify opportunities to generate alpha in a purely directional sense but they can also identify the optimal holding period after an event. Figure 11.2 illustrates this. The stocks affected by the 497 events studied retraced about half their losses in the 3 weeks after the event. Note how, over that time period, standard deviation rose—risk was increasing. While the maximum gain was earned at about 10 days after the event, its risk was substantially higher than at earlie-
r points, such as 5 days after the event. It appears to the eye that the maximum risk-adjusted return (i.e., Sharpe ratio) occurred about five days after the event.
One final point about event studies that has been made before but bears repeating: Automated trading systems can be highly error prone because of faulty assumptions, or coding errors. It is always critical that a human being does a “sanity check” on study results, and on their implementation in

trading strategies. When every trade is small (such that it takes thousands of trades to generate significant income), this step can be easily overlooked. But coding errors or “fat fingers” have nearly ruined several major institutions, so a human check on automatic execution can be vital.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:44.150Z
- **Text Length:** 131236 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
