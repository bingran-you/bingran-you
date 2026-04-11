# PDF Document: Arquint et al. - 2025 - A Jammer-Resilient 2.87 mm$^2$ 1.28 MSs 310 mW Multi-Antenna Synchronization ASIC in 65 nm.pdf

**File Path:** Arquint et al. - 2025 - A Jammer-Resilient 2.87 mm$^2$ 1.28 MSs 310 mW Multi-Antenna Synchronization ASIC in 65 nm.pdf

**Processed Date:** 2026-02-10T18:16:49.050Z

**File Size:** 1058.22 KB

**Total Pages:** 4

**Extracted Pages:** 4

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3789

**Title:** A Jammer-Resilient 2.87 mm$^2$ 1.28 MS/s 310 mW Multi-Antenna Synchronization ASIC in 65 nm

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Jammer-Resilient 2.87 mm2 1.28 MS/s 310 mW
Multi-Antenna Synchronization ASIC in 65 nm
Flurin Arquint, Oscar Castañeda, Gian Marti, and Christoph Studer
Department of Information Technology and Electrical Engineering, ETH Zurich, Switzerland
Abstract—We present the first ASIC implementation of jammerresilient multi-antenna time synchronization. The ASIC implements a recent algorithm that mitigates jamming attacks on synchronization signals using multi-antenna processing. Our design supports synchronization between a single-antenna transmitter and a 16-antenna receiver while mitigating smart jammers with up to two transmit antennas. The fabricated 65 nm ASIC has a core area of 2.87 mm2, consumes a power of 310 mW, and supports a sampli-
ng rate of 1.28 mega-samples per second (MS/s).
I. INTRODUCTION
Our aspirations for a wireless future make jammer-resilient
communications an imperative. Much attention has been paid to
data transmission under jamming [1]–[3], including the design
of jammer-resilient data detectors as integrated circuits [4].
However, to deploy these methods, the transmitter and receiver
must be synchronized in time [5]. This synchronization problem
has received only little attention [6], [7] and, to our knowledge,
no corresponding integrated circuit has been developed so far. Contributions: We present an application-specific integrated
circuit (ASIC) implementation of the recent JASS (short
for Jammer-Aware SynchroniSation) algorithm [7] for time
synchronization between a single-antenna transmitter and a 16
antenna receiver under jamming. The jammer is mitigated by
fitting an adaptive spatial filter to a time-windowed sequence
of the receive signal. Our design can mitigate jammers with
up to two antennas and, by using a secret synchronization
sequence (consisting of 16 BPSK symbols), it is also able
to mitigate smart jammers (i.e., jammers that rely on more
sophisticated strategies than pure noise-like barrage jamming).
To our knowledge, our design is the first ASIC implementation
of a jammer-resilient synchronization algorithm of any kind.
II. PREREQUISITES
A. System Model
We consider a multi-antenna receiver with a single-antenna
transmitter (as in, e.g., a single-user uplink) under attack from a
jammer that can potentially have multiple antennas. We model
the receive signal at sample index k = 0, 1, 2, . . . as follows:
y[k] = hs[k] + Jw[k] + n[k]. (1)
This work has received funding from the Swiss State Secretariat for
Education, Research, and Innovation (SERI) under the SwissChips initiative,
and has also been supported by the European Commission within the context
of the project 6G-REFERENCE (6G Hardware Enablers for Cell Free Coherent
Communications and Sensing), funded under EU Horizon Europe Grant
Agreement 101139155. Contact author: O. Castañeda (e-mail: caoscar@ethz.ch)
Here, y[k] ∈ CB is the receive vector at the B-antenna receiver;
s[k] is the legitimate transmit signal, which corresponds to
s[k] =

 
 
0 :k<L
s ̆k+1−L : L ≤ k < L + K
undefined : L + K ≤ k,
(2)
where s ̆ = [s ̆1, . . . , s ̆K ]T ∈ {±1}K is the length-K synchro
nization sequence and L ≥ 0 represents the time at which the
legitimate transmitter sends the start of the synchronization
sequence; h ∈ CB is the channel between the legitimate
transmitter and the receiver; J ∈ CB×I is the channel between
the I-antenna jammer and the receiver; w[k] ∈ CI is the
jammer transmit vector; and n[k] ∼ CN (0, N0IB) is additive
white Gaussian thermal noise with variance N0 per entry.
We assume that the synchronization sequence s ̆ is unknown
a priori to the jammer (i.e., w[k] can only depend on s ̆k′ if
k − L ≥ k′), while L is unknown a priori to the receiver and
has to be estimated based on the receive vectors. Specifically,
the receiver has to solve the following problem: Based on a
running receive sequence y[0], . . . , y[l + K − 1], the receiver
must decide—for each l—if l is equal to L or not. A false
alarm occurs when the receiver erroneously decides that l = L.
A miss occurs when the receiver erroneously decides that l ̸= L.
After the (L+K −1)th sample has been processed, the receiver
has either successfully found L or made an error (false alarm
or miss), so there is no need to define s[k] for k ≥ L + K.
B. Jammer-Resilient Synchronization
Our design is based on the JASS algorithm proposed recently
in [7], which approximately solves the optimization problem
arg min
l≥0
l such that maxP ̃ ∈PImax
∥  ̃PYls ̆∗∥22
∥  ̃PYl∥2
F
≥ τ, (3)
where Yl = [y[l], . . . , y[l + K − 1]] is the windowed receive
signal, τ ≥ 0 is a detection threshold tunable for an optimal
tradeoff between false alarms and misses, (·)∗ is the complex
conjugate, and PImax = {IB − AA† : A ∈ CB×Imax } is the
set of orthogonal projections onto the (B − Imax)-dimensional
subspaces of CB, with Imax being the maximum number of
jammer antennas that can be mitigated (I ≤ Imax < B); IB,
the B ×B identity matrix; and (·)†, the Moore-Penrose inverse.
To approximately solve (3), JASS performs the following
operations for l = 0, 1, . . . , lmax: First, it estimates the
interference subspace by computing the Imax principal eigen
vectors of Λ = ∥s ̆∥22YlYH
l − Yl ̆s∗s ̆T YH
l . These principal
arXiv:2511.21451v1 [cs.AR] 26 Nov 2025

Algorithm 1 Jammer-Aware Synchronisation (JASS)
1: Φ = Y0Y0H
2: for l = 0, 1, 2, . . . , lmax do 3: cl = Yl s ̆∗ 4: Λ = ∥s ̆∥22Φ − clcH
l
5: for i = 1, . . . , Imax(= 2) do
6: ai ← PRNG
7: for t = 1, . . . , tmax(= 2) do 8: a′
i = Λai
9: ai = a′
i/∥a′
i∥2
10: Λ ← Λ − a′
iaH
i
11: A = [a1, a2];  ̃b = a1H a2;  ̃B = 1 − ̃b
− ̃b∗ 1
12: v = AH cl; W = AH Φ
13: N = (1 − | ̃b|2)∥cl∥22 − vH B ̃ v
14: D = (1 − | ̃b|2) tr(Φ) − tr(Be WA) 15: if N − Dτ ≥ 0 then 16: return l
17: Φ ← Φ − y[l]y[l]H + y[l + K]y[l + K]H
eigenvectors are collected into a matrix A, so that the estimated
interference subspace can be removed through the projection
matrix  ̃P = IB − AA† ∈ PImax . Then, JASS computes the
score ∥P ̃ Yls ̆∗∥22/∥  ̃PYl∥2
F . If the score reaches the threshold τ ,
then JASS terminates and declares l to be the delay index L at
which the start of the synchronization sequence s ̆ was received.
If the threshold τ is not reached after evaluating lmax candidate
indexes, then JASS terminates and declares a miss. For a proper
motivation of JASS, its algorithmic details, and corresponding
success guarantees, see [7]. To enable an efficient hardware implementation, the JASS
algorithm from [7] was reorganized into Alg. 1. Instead of
explicitly computing Φ = YlYH
l for each l, Φ is iteratively
updated (line 17). Each of the Imax principal eigenvectors of Λ
is computed using tmax iterations of the power method (lines 5
to 10). Our ASIC is dimensioned to mitigate jammers with
up to Imax = 2 antennas. This parameter choice simplifies the
computation of the matrix inverse (AH A)−1 = (1 − | ̃b|2)−1B ̃
(line 11), which is needed to compute A† = (AH A)−1AH .
To avoid the division required to compute the score, we instead
take the numerator N (line 13) and denominator D (line 14)
of the score and check whether N − Dτ ≥ 0 (line 15) instead
of N/D ≥ τ . Note that in these computations, the projection
matrix  ̃P = IB − AA† is never computed explicitly.
III. VLSI ARCHITECTURE
Our ASIC is designed to execute Alg. 1 for a receiver
with B = 16 antennas, using a programmable synchronization
sequence consisting of K = 16 BPSK symbols under the
interference of a jammer with at most Imax = 2 antennas. The
detection threshold τ , as well as the maximum number lmax
of candidate indexes to be evaluated, is programmable. The
number of iterations for the power method is fixed to tmax = 2,
since it delivers practically the same performance as an exact
eigenvalue decomposition, as used in the original algorithm [7].
PRNG
16×1b 2×16×16×15b 2×22b 2×2×26b
th PE
2×2×16×26b
-PN Score
×16
2×26b 2×23b
2×34b 2×34b
2×36b
2×34b
2×26b
2×22b 2×22b
2×16×25b
2×16×34b
2×22b
Fig. 1. Overview of the JASS architecture, consisting of 16 reconfigurable
processing elements (PEs), a pseudorandom number generator (PRNG), a
∥·∥∞ˆ –pseudonormalization (PN) module, an inverse square root module, and
the score module. Blocks in green correspond to flip-flops (FFs) and FF arrays.
The λTn and φTn FF arrays store the nth row of Λ and Φ, respectively.
Fig. 1 provides an overview of the top-level hardware
architecture, which consists primarily of 16 reconfigurable
processing elements (PEs). Each PE includes a pipelined
complex-valued multiplier, a complex-valued adder, and flip
flop (FF) arrays for local storage. The number of PEs was
chosen to match the largest matrix dimension (in our case,
B = K = 16) in order to reduce latency. Besides the PEs, the
architecture contains a module for complex-valued pseudo
random number generation (PRNG; cf. Sec. III-B), a ∥·∥ ˆ∞
pseudonormalization (PN) module (cf. Sec. III-C), an inverse
square root module (cf. Sec. III-D), and a score module (cf.
Sec. III-A). Finally, the architecture integrates FF arrays to
store s ̆, Yl, b ̃, v, and W. Every PE can access the contents of
these FF arrays, as well as the outputs from other PEs, through
an interconnect network (represented by the large multiplexers
at the top of each PE in Fig. 1).
A. Operation
Most operations of Alg. 1 boil down to matrix-vector
products (lines 3, 8, 12, 13, and 14) and rank-one matrix
updates of the form Λ − a′aH (lines 4, 10, and 17). For the
matrix-vector product Λa on line 8 (which is executed four
times per delay index l), the PEs are configured as depicted
in Fig. 2(a): In each clock cycle k, a new column λk of Λ

PRNG
12
(a) Accumulator configuration of the
PEs for the operation Λa.
12
(b) PEs configured to multipy-and
subtract for the operation Λ − a′aH .
12 3 4 5 6 7 8 9
(c) Adder tree configuration of the PEs with extra pipeline registers.
Fig. 2. Illustration of three different PE configurations for the execution of
the operations of the JASS algorithm.
is scaled by ak and accumulated to the previous result, until
Λa = P16
k=1 λkak is completed. Due to pipelining registers,
computing Λa takes 19 clock cycles. A rank-one matrix update
Λ ← Λ − a′aH also takes 19 clock cycles and is performed
by calculating, in clock cycle k, the column λk ← λk − a′a∗
k
by using the 16 PEs in parallel as visualized in Fig. 2(b).
The computation of cl on line 3 follows the configuration
in Fig. 2(a), but the signs of the columns are simply adjusted
instead of using the multipliers, since  ̆s is a BPSK sequence.
For the same reason, the matrix rescaling ∥s ̆∥22Φ on line 4
amounts to a left shift by log2 16 = 4 bits. The PRNG
operation from line 6 is described in Sec. III-B. The vector
normalization from line 9 is performed in two steps: The first
step consists of a pseudonormalization (described in Sec. III-C)
to reduce the bitwidth of the entries of a′
i for the subsequent
exact normalization. The exact normalization is performed by
multiplying the pseudonormalized a′
i with the inverse square
root (see Sec. III-D) of its squared l2-norm ∥a′
i∥22, with ∥a′
i∥22
being computed using the adder tree configuration shown in
Fig. 2(c). The adder tree configuration is also used to compute
the inner products on lines 11 and 13, the matrix-vector and
matrix-matrix products on line 12, and the trace operations
tr(·) on line 14. Due to pipelining, a single inner product has
a latency of 5 clock cycles. Finally, the score module utilizes
its own real-valued multipliers and subtractors to complete the
computation of N , D, and N − Dτ (lines 13–15), to determine
if the programmable threshold τ was reached. In total, 268
clock cycles are required to process one delay index l, i.e., to
evaluate whether or not the synchronization sequence occurred
within the windowed receive signal Yl.
B. Pseudorandom Number Generator (PRNG)
The PRNG consists of two 32-bit xorshift [8] blocks as
visible in Fig. 3(a) to produce both real and imaginary parts of
the output within one clock cycle. For the first xorshift block,
the initial state for the first delay index l can be programmed,
while for all subsequent indices, the output state from the
second xorshift is fed back to the input of the first xorshift.
C. ∥·∥ ˆ∞–Pseudonormalization (PN) Module
The jammer’s large dynamic range requires the PEs’ data
path to have larger bitwidths [9]. This issue is particularly
Pseudorandom Number Generator
32b
32b
21b
21b xorshift
xorshift
21b
x⊕(x<<13)
x⊕(x>>17)
x⊕(x<<5)
(a) PRNG producing complex-valued
numbers using xorshift.
<<
34b
>> 21b
34b
<<
34b
<<
21b
34b
>> 21b
34b
<<
34b
>> 21b
34b
OR-Tree LOD2
×32
Pseudonormalization Module
(b) ∥·∥∞ˆ –pseudonormalization mod
ule to rescale complex-valued vectors.
13b
LUT
23b
23b
31b
4b
22b
36b
21b
11b
rescaling
iteration
22b
23b
>>
Inverse Square Root Module
Raphson
Newton
LOD4
>>
(c) Module for computing the in
verse square root using a LUT and
a Newton-Raphson iteration.
Fig. 3. Internal structure of the (a) PRNG module, (b) ∥·∥∞ˆ –PN module,
and (c) inverse square root module of the JASS hardware architecture.
exacerbated when computing quantities directly associated to
the jammer’s power, such as ∥a′
i∥22. Instead of using additional
PEs with even larger bitwidths to compute ∥a′
i∥22 as it was
done in [4], we use the ∥·∥ ˆ∞–PN module to scale the entries
of the vector a′
i down into a known range, thereby reducing
the bitwidth of ∥a′
i∥22. To arrive at a low-complexity, hardware
friendly normalization, we use the pseudonorm ∥ · ∥ ˆ∞ ≜ 2n,
where n = ⌊log2(max{∥R{·}∥∞, ∥I{·}∥∞})⌋ and ∥ · ∥∞ is
the infinity norm. As illustrated in Fig. 3(b), normalization
with respect to this pseudonorm amounts to an arithmetic right
shift by n bits, where n is simply computed using an OR-tree
to combine the absolute values of the real and imaginary parts
of all entries of a′
i, followed by a leading-one detector (LOD)
with base 2 (LOD2). After the ∥·∥ ˆ∞–PN module, the real and
imaginary parts of the entries of a′
i are in the range [−2, 2)
and are represented with 21 bits instead of 34 bits.
D. Inverse Square Root Module
The inverse square root module is shown in Fig. 3(c). First,
the input x is rescaled as x′ = x/22α, where α ∈ Z is found
using a LOD with base 4 (LOD4), so that x′ ∈ [0.25, 1).
Then, an initial estimate of 1/√x′ is fetched from a look-up
table (LUT) and refined with one Newton-Raphson iteration:
y = yLUT(3 − yL2UTx′)/2. Here, a dedicated real-valued multi
plier and subtractor are used to avoid the less efficient complex
valued datapath of the PEs. Finally, y ≈ 1/√x′ = 2α/√x is
scaled back to obtain the desired 1/√x.
IV. ASIC IMPLEMENTATION RESULTS
A. Synchronization Error Rate (SER) Performance
Fig. 4 shows the synchronization error rate (SER) as a
function of the threshold1 τ for our fixed-point hardware
1A large threshold τ entails a low probability of a false alarm but a high
probability of a miss, while the opposite holds for a small τ —the optimal τ
balances between false alarms and misses.

0 0.2 0.4 0.6 0.8 1
10−3
10−2
10−1
100
normalized threshold τ /‖ ̆s‖22
sync. error rate (SER)
Unmitigated (float)
JASS (float)
JASS (fixed)
(a) Delayed-spoofing, ρ = 0 dB
0 0.2 0.4 0.6 0.8 1
10−3
10−2
10−1
100
normalized threshold τ /‖ ̆s‖22
sync. error rate (SER)
Unmitigated (float)
JASS (float)
JASS (fixed)
(b) Antenna-switch., ρ = 10 dB
0 0.2 0.4 0.6 0.8 1
10−3
10−2
10−1
100
normalized threshold τ /‖ ̆s‖22
sync. error rate (SER)
Unmitigated (float)
JASS (float)
JASS (fixed)
(c) Erratic, ρ = 20 dB
0 0.2 0.4 0.6 0.8 1
10−3
10−2
10−1
100
normalized threshold τ /‖ ̆s‖22
sync. error rate (SER)
Unmitigated (float)
JASS (float)
JASS (fixed)
(d) Barrage, ρ = 30 dB
Fig. 4. Synchronization error rate (SER) performance against a two-antenna
jammer at a signal-to-noise ratio (SNR) of 5 dB, for different jammer types
and jammer-to-signal ratios ρ. The delayed-spoofing jammer repeats the
synchronization sequence  ̆s with one sample delay; the antenna-switching
jammer transmits Gaussian symbols using sometimes one antenna, sometimes
the other; the erratic jammer transmits Gaussian symbols at random times and
is otherwise silent; and the barrage jammer transmits white Gaussian noise.
SRAMs
16 PEs
CTRL
Score
-PN
PRNG
Fig. 5. Micrograph of the 2 mm ×
2 mm JASS ASIC in TSMC 65 nm LP
with highlighted modules.
0.84 0.96 1.08 1.2 1.32
0
100
200
300
400
core supply voltage [V]
max. clock frequency [MHz]
125
250
375
0
500
power [mW]
clock freq.
power
Fig. 6. Measured maximum clock
frequency and power consumption
versus core supply voltage.
implementation of JASS under different types of two-antenna
jammers with different jammer-to-signal ratios ρ. In all
four jammer scenarios, JASS consistently and substantially
outperforms an unmitigated synchronization approach (i.e.,
setting the matrix A to the all-zeroes matrix), which fails due
to jamming. It is also evident from Fig. 4 that the fixed-point
arithmetic2 implemented in the JASS ASIC incurs in virtually
no performance loss compared to a floating-point baseline.
B. ASIC Measurements
Fig. 5 presents the micrograph of the 4 mm2 JASS ASIC
fabricated in TSMC 65 nm LP, with its different modules,
including the control unit and SRAMs, highlighted within
the 2.87 mm2 core area. The SRAMs are used to store up to
1024 receive samples y[k]. At nominal core supply voltage of
1.2 V and a room temperature of 300 K, the ASIC achieves a
maximum clock frequency of 344 MHz, which corresponds to
2The bitwidths of the fixed-point implementation are indicated in Figs. 1
and 3, where the (2×) accounts for real and imaginary components.
TABLE I
MEASUREMENT RESULTS FOR THE JASS ASIC
Receiver antennas B 16 Core area [mm2] 2.87
Sync. seq. length K 16 Frequency [MHz] 344
Jammer antennas I 0–2 Sampling rate [MS/s] 1.28
Technology [nm] 65 Power [mW] 310
Supply [V] 1.2 Area eff. [MS/s/mm2] 0.45
Energy/sample [nJ/S] 242
a sampling rate of 1.28 mega-samples per second (MS/s). At
this operating point, the ASIC (including SRAMs) consumes
310 mW when facing a two-antenna barrage jammer with
ρ = 30 dB. Table I summarizes the performance metrics of
the JASS ASIC, while Fig. 6 shows how the clock frequency
and power scale with the core supply voltage.
As JASS is the first jammer-resilient synchronization ASIC,
a comparison with other designs is not possible. Nevertheless,
we contextualize our results by noting that, after technology
normalization, our JASS ASIC (including SRAMs) occupies
9% of the area of the jammer-resilient MIMO detector from [4],
while consuming 8% of its power when operating at the same
clock frequency. We emphasize that jammer resilience comes
at the cost of a significantly lower hardware efficiency and
throughput [4]. This remains true for our JASS ASIC, especially
when considering that it is able to counteract smart jammers
with more than one antenna. Still, higher sampling rates could
be achieved at the cost of silicon area by having several
instances of the proposed JASS architecture operating in parallel
on different delay indexes l, or simply by reimplementing JASS
in a more advanced technology node.
V. CONCLUSIONS
We have presented the first ASIC for jammer-resilient time
synchronization reported in the open literature. Even when
confronted with smart and strong jammers, our JASS ASIC
performs accurate time synchronization at 1.28 MS/s when
implemented on 2.87 mm2 in a 65 nm technology node.
REFERENCES
[1] T. T. Do, E. Björnsson, E. G. Larsson, and S. M. Razavizadeh, “Jamming
resistant receivers for the massive MIMO uplink,” IEEE Trans. Inf.
Forensics Security, vol. 13, no. 1, pp. 210–223, Jan. 2018.
[2] L. M. Hoang, J. A. Zhang, D. N. Nguyen, X. Huang, A. Kekirigoda, and
K.-P. Hui, “Suppression of multiple spatially correlated jammers,” IEEE
Trans. Veh. Technol., vol. 70, no. 10, pp. 10 489–10 500, Oct. 2021.
[3] G. Marti, T. Kölle, and C. Studer, “Mitigating smart jammers in multi-user
MIMO,” IEEE Trans. Signal Process., vol. 71, pp. 756–771, 2023.
[4] F. Bucheli, O. Castañeda, G. Marti, and C. Studer, “A jammer-mitigating
267 Mb/s 3.78 mm2 583 mW 32×8 multi-user MIMO receiver in 22FDX,”
in IEEE Int. Symp. VLSI Technol. Circuits, Jun. 2024.
[5] T. M. Schmidl and D. C. Cox, “Robust frequency and timing synchroniza
tion for OFDM,” IEEE Trans. Commun., vol. 45, no. 12, pp. 1613–1621,
Dec. 1997.
[6] D. W. Bliss and P. A. Parker, “Temporal synchronization of MIMO
wireless communication in the presence of interference,” IEEE Trans.
Signal Process., vol. 58, no. 3, pp. 1794–1806, Mar. 2010.
[7] G. Marti, F. Arquint, and C. Studer, “Jammer-resilient time synchronization
in the MIMO uplink,” IEEE Trans. Signal Process., vol. 73, 2025.
[8] G. Marsaglia, “Xorshift RNGs,” J. Stat. Software, vol. 8, Jul. 2003.
[9] G. Marti, A. Stutz-Tirri, and C. Studer, “Fundamental limits for jammer
resilient communication in finite-resolution MIMO,” in Proc. Asilomar
Conf. Signals, Syst., Comput., Oct. 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:49.050Z
- **Text Length:** 20892 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 4 of 4
