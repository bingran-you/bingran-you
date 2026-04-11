# PDF Document: Zhang et al. - 2025 - 2D Sparse Array Design via Reweighted L1 Second Order Cone Programming for 3D Ultrasound Imaging.pdf

**File Path:** Zhang et al. - 2025 - 2D Sparse Array Design via Reweighted L1 Second Order Cone Programming for 3D Ultrasound Imaging.pdf

**Processed Date:** 2026-02-10T18:16:51.643Z

**File Size:** 7832.96 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3336

**Title:** 2D Sparse Array Design via Reweighted L1 Second Order Cone Programming for 3D Ultrasound Imaging

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020 1
2D Sparse Array Design via Reweighted L1
Second Order Cone Programming for 3D
Ultrasound Imaging
Xi Zhang, Miguel Bernal, and Wei-Ning Lee, Member, IEEE
Abstract— Two-dimensional (2D) fully-addressed arrays can conveniently realize three-dimensional (3D) ultrasound imaging while fully controlled such arrays usually demands thousands of independent channels, which is costly. Sparse array technique using stochastic optimization methods is one of promising techniques to reduce channel counts while due to the stochastic nature of these methods, the optimized results are usually unstable. In this work, we introduce a sparse array design approach that f-
ormulates the synthesis problem of sparse arrays as second-order cone programming (SOCP) and a re-weighted L1 technique is implemented to sequentially optimize the SOCP. Based on this method, an on-grid quasi-flatten side-lobe (Q-Flats) 2D sparse array with side-lobe level (SLL) no more than -21.26 dB and 252 activated elements is designed, which aims to achieve as high contrast performance as possible under the limits of resolution and maximum number of independent channels (i.e., 256). The imagi-
ng performance of the Q-Flats array was compared with those of a corresponding dense array (Dense), a Fermat spiral array (Spiral) and a spatially 50%-Tukey tapered spiral array (SpiralTaper) using Field II simulations in a multi-angle steered diverging wave transmission scheme. It was demonstrated that the Dense achieved the best resolution and contrast and the Spiral-Taper the worst. The Q-Flats showed better resolution (about 3%) but slightly worse contrast than the Spiral. All the results indi-
cate the re-weighted L1 SOCP method is a promising and flexible method for seeking trade-offs among resolution, contrast, and number of activated elements.
Index Terms— Sparse aperture, spiral array, convex optimization, 3D ultrasound imaging.
I. INTRODUCTION
U
TRASOUND volumetric imaging inherently provides three-dimensional (3D) information of tissue structures
This paragraph of the first footnote will contain the date on which you submitted your paper for review. It will also contain support information, including sponsor and financial support acknowledgment. For example, “This work was supported in part by the U.S. Department of Commerce under Grant BS123456.” The next few paragraphs should contain the authors’ current affiliations, including current address and e-mail. For example, F. A. Author is with the National Institute of Standards and Technolog-
y, Boulder, CO 80305 USA (e-mail:author@boulder.nist.gov). S. B. Author, Jr., was with Rice University, Houston, TX 77005 USA. He is now with the Department of Physics, Colorado State University, Fort Collins, CO 80523 USA (e-mail: author@lamar.colostate.edu). T. C. Author is with the Electrical Engineering Department, University of Colorado, Boulder, CO 80309 USA, on leave from the National Research Institute for Metals, Tsukuba, Japan (e-mail: author@nrim.go.jp).
and dynamics and reduces inter-operator and diagnostic variability, thereby preferred over two-dimensional (2D) ultrasound imaging [1]–[3]. Temporal evolution of 3D ultrasound imaging is particularly valuable for clinical applications, such as tracking and guiding of surgical instruments during robotic beating-heart intracardiac surgery surgeries [4], detection of the brain activity [5], [6], assessment of mechanical properties of tissues [7]–[11], reconstruction of spatiotemporal distributions of-
 blood flow and micro-vessels [12]–[15], and monitoring of High Intensity Focused Ultrasound (HIFU) treatment [16]. Volumetric ultrasound imaging can be realized by manual or mechanical translation/rotation of one-dimensional (1D) array probes [17], [18] or a direct use of 2D array probes. Volumetric ultrasound imaging with motorized 1D arrays can lead to poor spatial resolution in the elevational direction and a low frame rate. Ideally, 2D matrix probes can focus or steer ultrasonic beams in both-
 the elevational and azimuthal directions [19] and achieve high volume rate by transmitting unfocused beams such as plane waves [20], [21] or diverging waves [9]. In the case of beam steering, the element pitch in full arrays is required to be less than half of the wavelength to prevent grating lobes from appearing in the desired field of view. This means that a 2D array should contain thousands of elements in order to produce comparable image quality in both azimuth and elevation to the lateral d-
irection of a 1D array. In other words, driving a large dense array needs imaging system with thousands of independent channels, which poses significant challenges on not only fabrications, but system cost, size of coaxial cables and data transfer rate [22]. Besides, current standard ultrasonic imaging systems can only support up to 256 independent channels. Despite four Vantage 256 scanners have been successfully synchronized to drive a 32×32 fully addressed array [23], it is of significance to e-
xplore channel reduction techniques since it is costly and inconvenient. One possible solution is micro-beamforming [24]–[26]. Unlike conventional beamforming performed at the imaging system backend, micro-beamforming divides the beamforming process into two stages and move the first stage into the probe handle. In the first stage, the fine delays are applied to the received echo signals from the predetermined subarray elements through application-specific integrated circuits (ASIC) inside the pro-
be, which reduces the channel counts. In the second stage, coarse delays are applied to the prebeamformed signals produced by the first stage in the main
arXiv:2511.21133v1 [eess.SP] 26 Nov 2025

2 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
Fig. 1. The layout of 2D rectangular dense array. dx, and dy denote element pitches in azimuth and elevation, respectively.
system. However, integrating ASIC is expensive and increases the probe fabrication challenges. Another attractive solution is 2D row-column addressing (RCA) arrays [27]–[32]. In RCA, elements along a row or column are treated as 1D linear array through crossed electrodes. Thus, the number of required channels is reduced by a factor of N/2 (from N 2 to 2N ). During imaging, ultrasound beams are transmitted along either rows or columns, and then received along the orthogonal electrodes. As a result,-
 transmit focusing can only be enabled in one direction, and receive focusing in the orthogonal direction. However, the imaging region of RCA is rectilinear in front of the array, which is not suitable for volumetric phased array imaging (e.g., heart imaging), unless with a diverging lens [33]. Sparse array [34] is a promising technique to channel reduction by directly reducing the number of active elements that is needed to be independently controlled by the imaging system [35]. The core idea of -
sparse array is to reduce elements while maintaining the array performance at a certain level in terms of resolution, side-lobe level (SLL) and grating lobe level. Generally, approaches used to design sparse array can be classified into two categories: deterministic [36][43] and non − deterministic methods [19], [22], [44]–[47], respectively. Deterministic methods that construct sparse array through explicit regularities or mathematical formulas include regular and radially sparse periodic array [-
39], Vernier array [37], and Mills cross arrays [48]. Recently, Spiral [40], [42] and Costas arrays [43] have also been introduced and gained much attention. Fermat’s spiral array, also known as sunflower array, is defined by sampling the Fermat’s spiral equation. By setting the so-called divergence angle as golden angle that is an irrational number, each element will have a different angular position from another one, thus breaking any periodicity in the array. As pointed by Sumanaweera et al. [4-
9], spiral array designs can minimize element shadowing and thus contribute to low SLL. Density tapering techniques [50], [51] which act as apodization contracts the elements towards the aperture center to reduce the SLL at the cost of resolution. An N × N Costas sparse 2D array [43] is selected from all the order-N Costas arrays [52], [53]. In a Costas sparse array, any two
elements can not be presented in the same row or column and has a distinct displacement vector between them, which makes it promising to simplify the circuit interconnections. For the non-deterministic 2D sparse array design methods, randomly deactivated some of the elements in a corresponding dense array is initially attempted [19]. However, since finding an optimal layout among all possible sparse arrays is a very large combinatorial optimization problem, this random-based method usually cannot -
obtain the best choice. Based on this, stochastic optimization methods, such as genetic algorithms (GA) [44], and simulated annealing (SA) [45], have been proposed to iteratively search the optimal array. As pointed by Roux et al. [47], for large 2D sparse array design, SA performs much more efficient and robust than GA [54], [55]. Initially, the cost function adopted by these works is a weighted combination of approximating desired continuous wave (CW) beam pattern (BP) (i.e., far-field narrowban-
d BP) and l1 norm of element weighting coefficients. Later, optimizing multidepth pressure field (e.g., 3 depths) strategy [22], [47] is introduced to better approximate and control the BP behavior of the sparse array in 3D space and the calculation of multidepth pressure field can be accelerated [56]. By simulating this realistic BP, new parameters, such as, excitation signal, element directivity and impulse response, even fabrication constraints can be included. Sparse arrays can also be divided-
 into on − grid and out − of − grid ones. On-grid requires all the active elements should be placed on the intersections between equidistant rows and columns. In other words, elements in sparse arrays are selected from corresponding 2D dense arrays. In contrast, outof-grid method poses no constraints on the element position distribution over the aperture excluding the overlapping. Theoretically, out-of-grid method allows better BP performance, (e.g., lower grating lobe levels). However, fabricatin-
g such kind of nongrid 2D sparse arrays requires more sophisticated and costly manufacture technique, e.g., capacitive micromachined ultrasound transducers (CMUTs) [57]–[59]. Synthesis of sparse antenna arrays has always been a hot topic in antennas and wireless communication for decades [60]. Besides above mentioned stochastic optimization methods, sparse antenna arrays with complex excitation can also be designed through matrix pencil method [61], linear programming [62], l1 minimization [63], a-
nd reweighted l1 minimization [64], [65]. As pointed by Lebret et al. [66], antenna array pattern synthesis problems with a limit on the number of active elements are usually nonconvex. Among these methods, linear programming, l1 minimization, and weighted l1 minimization belong to convex optimization, which reformulate the original nonconvex problems as convex problems through some assumptions or relaxions. Inspired by these pioneer works, we hereby formulate the 2D sparse array design problem wi-
th real-valued weights as a second-order cone programming (SOCP) and solve it iteratively using a re-weighted l1 minimization technique [64], [65]. Through this iterative optimization, a highly sparse 2D array can be designed with a BP strictly fulfilling certain constraints. This paper is organized as follows. Section II describes the SOCP formulation based on the assumption of a

AUTHOR et al.: PREPARATION OF PAPERS FOR IEEE TRANSACTIONS ON MEDICAL IMAGING 3
far-field narrowband BP. Section III presents a quasi-flattened side-lobe sparse (Q-Flats) array design method with SLL no higher than -21.26 dB and 252 activated elements and its simulation pipeline. Section IV compares BP characteristics, PSFs, and contrast across the Q-Flats and benchmark methods. Section V discusses results and makes concluding remarks.
II. PROBLEM FORMULATION
A. Far-Field Narrowband Beam Pattern (BP)
Under the assumption of a far-field narrowband BP, each element is regarded as an omni-directional point source and transmits a monochromatic wave at the center frequency of an ultrasound array. Consider a planar array with elements uniformly spaced on an N × M dense grid (Fig. 1), the array BP can be defined as [62], [67]
P (u, v) =
N
X
n=1
M
X
m=1
wn,mejβ(ndxu+mdyv), (1)
where wn,m ∈ R is the real-valued weight of each element for n = 1, ..., N and m = 1, ..., M ; β is the wavenumber; dx and dy denote the pitches of the elements in the x (azimuth) and y (elevation) directions, respectively; u and v are defined as sin(θ) cos(φ)−sin(θ0) cos(φ0) and sin(θ) sin(φ)− sin(θ0) sin(φ0), respectively; (θ0, φ0) represents the direction of beam steering (Fig. 1).
B. Sparse Array Synthesis
The target 2D sparse array should have as few elements as possible while having a SLL that satisfies the prescribed BP constraints. The objective function for such a sparse array design can thus be formulated as
mwin ∥w∥0 (2a)
s.t. |P (u, v)| ≤ D(u, v), (2b)
P (u0, v0) = 1, (2c)
where w = [w1,1, w1,2, ..., wn,m]⊤ ∈ Rm×n
+ , u0 = u(θ0, φ0) = 0, v0 = v(θ0, φ0) = 0, and D(u, v) is the upper limit or a mask on the BP and u, v ∈ [−2, 2]. Unfortunately, the optimization problem in Eq. (2) is nonconvex and does not guarantee finding the global optimum. An alternative way to solve it is to relax it as the following convex optimization problem:
mwin ∥w∥1 (3a)
s.t. |P (u, v)| ≤ D(u, v), (3b)
P (u0, v0) = 1. (3c)
The only difference between Eq. (2) and Eq. (3) is the choice of the objective function. l1 norm is well-known to produce sparse solutions in a wide range of applications, e.g., recovering sparse signals in compressed sensing [68]. To further enhance the sparsity of the solution w given by problem (3), an iterative re-weighted l1 minimization strategy [69], [70] is exploited. It has been shown that such an strategy can approximate the original problem (2) more closely
Algorithm 1 Re-weighted L1 SOCP
Input: M, N, β, dx, dy, ε, and D(u, v) Output: w 1. Initialization: c1 = 1⊤, k = 1. 2. Squential Re-weighted Optimization: for k = 1 to L do
➀ Solve problem (4) to obtain wk; ➁ Normalize wk with max (wk); ➂ Count the number of elements N k
ele with weights
wkn,m/ max (wk) ≥ wthre; ➃ If k ≥ 3 and N k
ele == N k−1
ele == N k−2
ele
break; End if
➄ ck+1 = (|wk| + ε)−1. end for return w ← wk / max (wk)
than only using unweighted l1 norm, thus providing sparser solutions. The weighted l1 minimization problem to be solved at the kth iteration is written as follows
mwikn
∥c⊤
k wk∥1 (4a)
s.t. |P (u, v)| ≤ D(u, v), (4b)
P (u0, v0) = 1, (4c)
where wk = [w1k,1, w1k,2, ..., wkn,m]⊤ ∈ Rm×n
+ , ck = [c1k,1, c1k,2, ..., ckn,m]⊤ ∈ Rm×n
+ , and ckn,m = (|wk−1
n,m | + ε)−1, ε > 0. Here the coefficients ck used to weight the apodizations are positive and calculated on solution wk−1 from last step. Small weights wk−1
n,m at previous step k − 1 results in large weights ckn,m and are penalized at next step k, while large weights result in small weights that ensure their reconduction at the next iteration. The parameter ε is to stabilize the iterative process and ensures that a zero apodization wk−1
n,m at last step allow wkn,m ̸= 0. As pointed by Candes et al. [70], ε should be set slightly smaller than the non-zero magnitudes of the expected solution. Notably, at the first iteration (k = 1), ck = 1⊤. In other words, this sequential optimization algorithm solves the problem (3) in the beginning. The initialization and optimization process of this iterative re-weighted l1 optimization algorithm are summarized in the Algorithm 1.
C. Second-Order Cone Programming (SOCP)
Although problem (4) is implicitly treated as convex optimization, its convexity still has not been verified until now. In this subsection, problem (4) is formulated as a SOCP which is explicitly a convex optimization. First, all the w and c are non-negative real numbers, and therefore, the objective function of problem (4) can be easily simplified as c⊤
k wk, since ∥c⊤
k wk∥1 = PN
n=1
PM
m=1 |ckn,mwkn,m| =
PN n=1
PM
m=1 ckn,mwkn,m = c⊤
k wk. For the final constraints
(4c), P (u0, v0) = P (0, 0) = PN
n=1
PM
m=1 wn,m = 1. For the first constraints (4b), it can be reformulated as a secondorder-cone (SOC) constraints as shown in (5b). Based on these

4 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
Fig. 2. The layout of the optimized quasi-flatten side-lobe (Q-flats) sparse array (252 activated elements). Each square denotes a single activated elements in corresponding dense array and the color denotes the normalized apodization.
derivations, problem (4) can be expressed as
mwikn
c⊤
k wk (5a)
s.t. ∥A(u, v)wk∥2 ≤ D(u, v), (5b)
N
X
n=1
M
X
m=1
wkn,m = 1, (5c)
where:
A(u, v) =

    
cos(β(x1,1u + y1,1v)), sin(β(x1,1u + y1,1v)) cos(β(x1,2u + y1,2v)), sin(β(x1,2u + y1,2v)) ... ... ... ...
cos(β(xm,nu + ym,nv)), sin(β(xm,nu + ym,nv))

    
⊤
,
wk = w1k,1, w1k,2, ..., wkn,m
⊤ ∈ Rm×n
+, u, v = −2, 2 .
Now problem (5) is a standard SOCP [71]. The objective function (5a) is a linear function. The constraints (5b) and (5c) are SOC, and linear equality constraints, respectively. To finally solve the problem (5), the constraint (5b), which is parameterized by u, v, are approximated by discretizing u, v evenly at a certain density. Low density cannot completely control the BP. High density can increase the computational accuracy, but the number of SOC constraints increases quadratically for designing-
 2D arrays, therefore computational burden dramatically.
III. METHODS
A. 2D Sparse Arrays Design
The dense matrix array M3dV is used as reference array in this paper, which has 1024 elements in a 32 × 32 grid without any blanks. The main parameters of M3dV is shown in Table I. Based on the grided layout of the M3dV matrix array, a 2D sparse array with maximum SLL lower than a certain value is designed. Once the main-beam width is determined,
TABLE I PARAMETERS OF MATRIX ARRAY M3DV
Parameters Values Center frequency [MHz] 3.0 Number of elements 1024(32 × 32) Pitch [mm] 0.3 Elevation Aperture [mm] 9.6 × 9.6
the maximum SLL is suppressed as low as possible until the number of active elements in the finally obtained array exceeds 256. Through trials and errors, a 2D sparse array was designed through the optimization problem (5) by using Algorithm 1. The values of M , and N are both 32. The mask D(u, v) of BP is designed as
D(u, v) = 0.0865, 0.0552 ≤ u2+v2 ≤ [1+sin(41◦)]2. (6)
Here 20 ∗ lg(0.0865) equals about -21.26 dB. The 0.055 indicates the radius of the main-lobe region is no more than 0.055. When discretizing problem (5), the value of ∆u and ∆v are both 0.005. The parameters used to calculate BP is from Table I. The ε and wthre is set as 0.001 and 0.05, respectively. The problem (5) is solved by the Yalmip toolbox [72] with Mosek [73] solvers in MATLAB (Version 2019b, Mathworks Inc. MA, USA). Finally, a 2D sparse array with maximum SLL of -21.26 dB and 252 activat-
ed elements was obtained after 42 iterations. The positions and apodizations of all the activated elements are shown in Fig. 2. The number of active elements in each iteration is shown in Fig. 3. The dense arrayM3dV and our designed sparse array are hereinafter referred as Dense and Q-Flats, respectively. Besides the designed Q-Flats, a Fermat spiral array, and a density-tapered spiral array according to a 50%-Tukey window [74] were also implemented on the grided layout of the Dense as comparison.-
 They are hereinafter referred as Spiral and Spiral-Taper, respectively. The elements belonging to Spiral were selected among those of the Dense, by activating the ongrid elements whose positions are closet to the ideal positions of an ungrided, 9.6-mm-wide with 256 seeds spiral array. The element arrangements of the Spiral-Taper were also on the layout of the Dense and in the same way as designing the Spiral.
B. Field II Simulation Setup
The imaging performance of the four arrays (Dense, Sparse, Spiral, and Spiral-Taper) were simulated using Field II [75], [76] in MATLAB (2019 b). Since all four arrays were realized on the same matrix array layout-M3dV array, a 32 × 32 2D matrix array transmitting a Hanning modulated 1-cycle sinusoidal pulse with a central frequency of 3 MHz and 60% bandwidth were simulated in this work. The transducer parameters were the same as those used in 2D Sparse array design and detailed in Table I. The sa-
me steered diverging wave (DW) imaging sequence [77], [78] was applied to the four arrays. 49 volumes were acquired by using 7 × 7 virtual sources distributed over a spherical cap at about 8.05 mm away from the center of the array. All the elements were used to transmit and receive, resulting an opening angle of

AUTHOR et al.: PREPARATION OF PAPERS FOR IEEE TRANSACTIONS ON MEDICAL IMAGING 5
Fig. 3. The number of activated array elements and accumulated computational time versus iteration steps with different ε values and wthre (a) 0.05, and (b) 0.01.
60◦ × 60◦. The distribution of steering angles were from - 30◦ to 30◦ at a 10◦ step in both azimuth and elevation directions. Pyramidal volumes were beamformed with delay and sum (DAS) algorithm for each DW transmission and subsequently coherently compounded to form a final high-quality volumetric image with 60◦ × 60◦ opening angles both in the azimuth and elevation dimensions. The speed of sound in all simulations was set to 1540 m/s. The sampling frequency was 100 MHz. To evaluate the point spre-
ad functions (PSFs) of the four different 3D imaging system, two numeric phantoms were developed. For the first phantom, four scatters were placed on the axial axis at 20, 50, 80, and 110 mm depth, respectively, to assess the on-axis PSFs at different depths. For the second phantom, four scatters were placed on the off-axial axis with an azimuth angle of 13◦ and another four scatters with an elevation angle of 13◦. To assess the contrast performance, a tissue mimicking phantom was generated by pos-
itioning point scatters randomly in a cube of 50 mm × 50 mm × 20 mm (azimuth × elevation × axial) centered at a depth of 50 mm. The density of scatters was 16/mm3 to produce fully developed speckle. Five 10-mmdiameter spheroidal cystic regions were placed inside the cubic phantom and centered at (0, 0, 50), (-15, 0, 50), (15, 0, 50), (0, -15, 50), and (0, 15, 50) mm, respectively. The scattering amplitude of scatters inside these five cystic reigons were set as 0 while Gaussian distributed amplitu-
des were assigned to the remaining scattering inside the phantom.
C. Performance Metrics
Spatial resolutions (e.g., azimuthal, and elevational resolution) were evaluated by measuring the full-width at halfmaximum (FWHM) from the C plane cross each of scatters. Moreover, to predict the contrast performance of the four arrays, the mean-sidelobe-level (MSLL) was calculated by averaging the gray level between the -80 dB and -6 dB isoline in the C plane. For cyst regions, the contrast ratio (CR) and generalized contrast-to-noise ratio (gCNR) were calculated to assess the lesion detectabili-
ty of the four arrays, as follows:
CR = 20 ∗ log10( μcyst
μback
). (7)
gCNR = 1 −
Z +∞
−∞
mxin (pback(x), pcyst(x))dx. (8)
Where μcyst, is the mean amplitude of the region of interest (ROI) inside the cyst, μback is the mean amplitude of the ROI in background tissues. The pback(x), and pcyst(x) are the probability density function of values taken by the cyst ROI pixels and background ROI pixels, respectively.
IV. RESULTS
A. The effect of parameters ε and wthre
Fig. 3 shows the number of activated elements and the total computational time as a function of iteration step with different values of ε and wthre. When ε equals to 0.001, the sparsest array was achieved with a number of activated elements of 252, a total iteration count of 40, and a total computational time of about 17 hours. In general, about 60% elements were reduced within the first three iterations and the total computation time scaled linearly with the total number of iterations. The time c-
ost of one iteration was no more than about 28 minutes on average despite a small variation with respect to the ε. As is shown in Fig. 3 (a), when ε was equal to 0.1, the iteration processes achieved a sparse array with less activated elements of 230 and less iteration step of 35. However, as indicated by Fig. 3 (b), when ε was larger than 0.001, hundreds of element weights fell between 0.01 and 0.05 after normalization, which caused a significant deviation from desired BP. When ε was smaller than-
 0.001, only several elements were between 0.01 and 0.05. Finally, it seemed that excessive values of ε tended to result in less sparse solutions than overly-small ones. To sum up, the most suitable value for ε in our case was 0.001, which achieved a truly sparsest array.
B. Theoretical Analysis of Far-Field Beam Pattern (BP)
Figs. 4 (a)-(d) show the normalized magnitude 2D far-field BP of the four arrays-Dense, Spiral, Spiral-Taper, and QFlats, respectively. Only half of the amplitude of BP (−2 ≤ u ≤ 2, 0 ≤ v ≤ 2) was plotted due to symmetry properties. In general, all the four BPs had one main lobe at u = 0, v = 0 and five grating lobes with the same amplitude at u = 1.72, v = 0; u = −1.72, v = 0; u = 1.72, v = 1.72; u = −1.72, v = 1.72; u = 0, v = 1.72, respectively. The BP of the Dense had more regions with magnitu-
de of about -60 dB than those of Spiral, Spiral-Taper, and Q-Flats since the Dense had much more activated elements (1024). The BP of the Q-Flats had quasi-flatten SLLs no more than -21.26 dB, which strictly satisfied the predetermined constraints on side-lobe regions. Figs. 5 (a) and (c) show the BP profiles of the four arrays in v = 0 plane and u = 0 plane, respectively. Figs. 5 (b) and (d) show zoomed-in main-lobe profiles of the four arrays as outlined by the gray dashed box in (a) and (c). Th-
e Dense had the narrowest main-lobe width and the Spiral-Taper the widest main-lobe width both in v = 0 plane and u = 0 plane among the four arrays. Since the Spiral-Taper had the smallest

6 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
Fig. 4. Normalized magnitude in dB of 2D beam pattern (BP) of the (a) Dense, (b) Spiral, (c)Spiral-Taper, (d) Q-Flats arrays, respectively.
Fig. 5. Comparison of normalized magnitude in dB of 2D BP of the Dense, Spiral, Spiral-Taper(50%-Tukey), and Q-Flats arrays at (a) v = 0 plane (c) u = 0 plane. (b) and (d) are zoomed-in main-lobe regions within -10 dB indicated by gray-dashed line in (a) and (c), respectively. Here, u=sin(θ) cos(φ) − sin(θ0) cos(φ0), v = sin(θ) sin(φ) − sin(θ0) sin(φ0). (θ0, φ0) represents the beam steering direction (Fig. 1)
aperture size. Besides, the Q-Flats had a little narrower mainlobe width compared with that of the Spiral both in v = 0 plane and u = 0 plane. For the SLLs, as is shown in Figs. 5 (a) and (c), the Dense and Spiral-Taper had relatively low SLLs. However, the Dense had the highest first side lobe of about -13 dB close to the main lobe. The Q-Flats had the highest SLLs visually, but it has the lowest first side lobe of about -21.26 dB among the four arrays.
C. Simulated Point Phantom
Fig. 6 shows the simulated PSFs of on-axis (0◦ for both elevation and azimuth directions) scatters obtained by the four arrays-Dense, Spiral, Spiral-Taper, and Q-Flats at different depths of 20, 50, 80, and 110 mm, respectively. For each array, all the azimuth-axial plane (XZ), elevation-axial plane (YZ), and four C planes (XY) of scatters at different depths were presented. Table II summarizes the FWHM and MSLL values of these on-axis PSFs. Visually, resolution of the four arrays decreased signif-
icantly as the depth of point scatters increased. In near-field region (20 mm in depth), except for the Dense, the remaining three arrays showed obvious side lobes. The Dense and Q-Flats presented a little stronger axial lobes compared with the Spiral and Spiral-Taper, which might be caused by edge waves from edge elements [31]. In the C planes, compared with other PSFs, the Q-Flats showed more obvious sporadic side lobes in edge regions, however, fortunately, the levels of these side lobes were a-
lmost lower than -40 dB. Quantitatively, as shown in Table II, the Dense performed the best and the Spiral-Taper worst in terms of resolution
among the four arrays regardless of depth. Since the SpiralTaper had the smallest effective aperture size. The Q-Flats showed a little better resolution (≥ 3%) than the Spiral especially in deep regions, which was consistent with the BP results in Fig. 5. Finally, the four arrays performed the same in both the XZ and YZ planes. For the MSLL, similar to resolution, the Dense, and the Spiral-Taper had the lowest and highest MSLL, respectively. The Spiral had a little lower MSLL than the Q-Flats (≤ 0-
.97dB). It should be noticed that at a depth of 110 mm, the MSLL of Q-Flats was lower than that of the Spiral about 0.45 dB exceptionally. Fig. 7 shows the simulated PSFs of off-axis (13◦ for elevation or azimuth direction) scatters obtained by the Dense, Spiral, Spiral-Taper, and Q-Flats at different depths of 20, 50, 80, and 110 mm, respectively. In general, all the arrays exhibited comparable steering performance with no grating lobes visually. Compared with the on-axis results in Fig. 6, the D-
ense showed no axial lobes anymore at depth of 50 mm, but the Spiral presented more obvious axial lobe at the same depth.
D. Simulated Cyst Phantom
Fig. 8 presents the simulated B-mode images of the cyst phantom by using the Dense, Spiral, Spiral-Taper, and Q-Flats. Visually, the Dense showed the best performance in terms of contrast and cysts boundary delineation. And the Spiral-Taper performed the worst, especially for the cysts located on offaxis positions. The Spiral performed slightly better than the Q-Flats mainly in contrast performance. Table III lists the calculated CR and gCNR values. As shown in Fig. 8 (a), the area inside the red -
dashed line with a radius

AUTHOR et al.: PREPARATION OF PAPERS FOR IEEE TRANSACTIONS ON MEDICAL IMAGING 7
Fig. 6. Simulated on-axis PSFs using various arrays including Dense (a)-(c), Spiral (d)-(f), Spiral-Taper (g)-(i), and Q-Flats (j-L) . XZ: azimuth-axial plane. YZ: elevation-axial plane. XY: C planes at four depths of the point scatters.
of 4 mm was taken as cyst region, while the region inside the two concentric yellow dashed lines was selected as the backgroud region. Quantitatively, the Dense, and the SpiralTaper had the highest and lowest CR and gCNR values on
average, respectively. The CR value of the Spiral was slightly higher than that of the Q-Flats averagely (0.3 dB). The QFlats had the same gCNR value on average with the Spiral. All these quantitative results were consistent with the visual

8 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
TABLE II THE FULL WIDTH AT HALF MAXIMUM (FWHM [MM]) AND MEAN SIDE-LOBE LEVEL (MSLL [DB]) FOR THE FOUR DIFFERENT ARRAYS.
Array
FWHM [mm] MSLL [dB]
XZ YZ 20 [mm] 50 [mm] 80 [mm] 110 [mm] 20 [mm] 50 [mm] 80 [mm] 110 [mm] 20 [mm] 50 [mm] 80 [mm] 110 [mm] Dense 1.38 (+0.0%) 3.00 (+0.0%) 4.74 (+0.0%) 6.06 (+0.0%) 1.38 (+0.0%) 3.00 (+0.0%) 4.74 (+0.0%) 6.06 (+0.0%) -45.22 -38.69 -36.83 -36.74 Spiral 1.50 (+8.7%) 3.30 (+10.0%) 5.19 (+9.5%) 6.42 (+5.9%) 1.50 (+8.7%) 3.30 (+10.0%) 5.19 (+9.5%) 6.42 (+5.9%) -48.46 -39.29 -36.65 -36.04 Spiral-Taper 1.71 (+23.9%) 3.99 (+33.0%) 6.24 (+31.7%) 7.26 (+19.8%) 1.71 (+23.9%) 3.99 (+33.0%) 6.24 (+31.7%) 7.26 (+-
19.8%) -44.60 -36.34 -34.82 -35.39 Q-Flats 1.50 (+8.7%) 3.21 (+7.0%) 4.98 (+5.1%) 6.24 (+3.0%) 1.50 (+8.7%) 3.21 (+7.0%) 4.98 (+5.1%) 6.24 (+3.0%) -47.75 -38.32 -35.80 -36.49
Fig. 7. Simulated off-axis (13◦ for elevation or azimuth direction) PSFs using various arrays including Dense (a) and (b), Spiral (c) and (d), Spiral-Taper (e) and (f), and Q-Flats (g) and (h). XZ: azimuth-axial plane. YZ: elevation-axial plane.
performance.
V. CONCLUSION AND DISCUSSION
A. Brief summaries
In this study, we introduced an alternative way to synthesis 2D sparse array through sequential convex optimization. Specifically, the original non-convex optimization problem for array synthesis was relaxed and formulated as a iterativelysolved SOCP through re-weighting technique. To the best of our knowledge, we were the first one who conducted this method on 3D medical ultrasound imaging. Based on this method, a 252-elements sparse array with SLL no more than 21.26 dB - Q-Flats was designed bas-
ed on the layout of a 32× 32 dense array. The imaging performance of the Q-Flats array was compared with a dense array (Dense), a 256-elements uniform spiral array (Spiral), and a 50 %-Tukey window-tapered 256-elements spiral array (Spiral-Taper). Simulated PSFs (Fig. 6 and 7) and cyst phantom results (Fig. 8) showed that as expected, the Dense performed the best in terms of resolution and contrast. The Q-Flats showed slightly better resolution and worse contrast than Spiral, which seemed to provi-
de a good compromise between resolution and contrast. The SpiralTaper performed the worst in both the resolution and contrast. Theoretically, the Spiral-Taper tended to show better contrast than the Spiral at the sacrifice of resolution. However, based on the simulation results both visually and quantitatively, the contrast performance of Spiral-Taper was significantly worse than the Spiral. The possible explanations were as follows:
first, since the Spiral-Taper was realized by discretizing the ideal tapered spiral array on a dense array as described in Section III-A, the deviation of element positions caused by the discretization to its ideal position might influence the performance of the Spiral-Taper; Second, the excessively low resolution of the Spiral-Taper severely influenced the detection and delineation of cysts, which hinted that for small size matrix array imaging, main-lobe width might play a more important role th-
an SLL. Besides, the results of the Spiral-Taper also indicated that randomly selected sparse array might deteriorate the imaging resolution and performance simultaneously, which underlined the significance of designing sparse array by appropriate methods (e.g., optimization-based methods). Finally, all the simulated results showed no grating lobes because the maximum steering angle for diverging wave transmission in this work is 30◦, and the theoretically-allowed maximum steering angle was 41◦ un-
der the far-field narrow-band BP assumption. For the re-weighted L1 techniques, as shown in Fig. 3, the hyper-parameter ε had a significant influence on the iteration process. An appropriate ε could achieve a sparser result within a moderate total iteration steps. Besides, the variation of computation time for each step and ε was relatively small. The computation time for each step mainly depended on the scale of problems-the number of optimization variables and SOC constraints. Finally, due to th-
e non-stochastic nature of the optimization process, compared with the stochastic optimization methods such as GA and SA, the final solution of the re-weighted L1 method was significantly more stable and reliable.
B. Feasible and Infeasible Problems
In this work, a sequential convex optimization problem was solved iteratively (e.g., (4)). During the iterative process, the constraints (4b) and (4c) needed to be satisfied remaining unchanged and only the objective function was updated based on the previous step. Therefore, the feasibility of this series of convex problems was the same. At the first iteration (problem (3)), the value of the objective function was constantly equal to 1, which was determined by equality constraint function (3c). T-
hus, the feasibility of this sequential convex optimization problem could be verified at the very beginning. The feasibility illustrated that the predetermined BP constraints could be reached with at least one feasible point. Infeasibility indicated that the predetermined BP constraints could not be reached with any apodizations. In practical design, the infeasibility was usually caused by three type of reasons: excessively narrow main lobe, or excessively low SLL, or both. Excessively narrow main-
 lobe meant that main

AUTHOR et al.: PREPARATION OF PAPERS FOR IEEE TRANSACTIONS ON MEDICAL IMAGING 9
TABLE III THE CONTRAST RATIO (CR [DB]) AND GENERALIZED CONTRAST-TO-NOISE RATIO (GCNR) FOR THE FOUR DIFFERENT ARRAYS.
Array
CR [dB] Avg. of CR
gCNR XZ YZ XZ YZ Avg. of gCNR Left Middle Right Left Middle Right Left Middle Right Left Middle Right
Dense -8.83 -9.08 -8.78 -9.07 -9.40 -9.25 -9.07 0.64 0.63 0.57 0.63 0.64 0.65 0.63 Spiral -7.77 -8.09 -6.98 -8.17 -8.64 -8.18 -7.97 0.57 0.58 0.50 0.59 0.61 0.59 0.57 Spiral-Taper -5.85 -6.04 -4.61 -6.96 -6.96 -6.41 -6.14 0.47 0.48 0.39 0.51 0.51 0.48 0.47 Q-Flats -7.45 -7.36 -7.46 -7.60 -7.91 -8.25 -7.67 0.55 0.56 0.52 0.56 0.59 0.62 0.57
Fig. 8. Simulated B-mode images of the cyst phantom using various arrays including Dense (a) and (e), Spiral (b) and (f), Spiral-Taper (c) and (g), and Q-Flats (d) and (h). The top row for XZ slices, and the bottom row for YZ slices. XZ: azimuth-axial plane. YZ: elevation-axial plane.
lobe width narrower than certain values could not be reached. For instance, if the radius of main-lobe region was smaller than 0.03 with SLLs lower than -13 dB, the problem was infeasible. Excessively low SLL meant that under certain appropriate main-lobe width, SLL lower than certain levels could not be reached. For instance, in our case, the radius of main-lobe region is set as 0.055 in (6), if the SLL is set lower than -30 dB, the problem becomes infeasible. Thus, one of the possible advantage -
of formulating the sparse array synthesis problem as a SOCP was that the achievement of a desired BP could be verified compared with those adopting stochastic optimization methods.
C. With and Without Reweighted L1 Algorithm
The original non-convex problem (2) was relaxed to convex problem (3) by replacing the l0 norm with l1 norm in the objective function. Without using the re-weighted L1 algorithm (only one iteration), as shown in Fig. 3, regardless of the parameter ε, the number of elements always equalled to 992. This showed that simply using l1 norm to approximate l0 norm was far from enough in reducing the extra elements as much as possible. Through adopting the re-weighted technique, the number of activated ele-
ments was quickly reduced by about 60% at the first four iterations. Then, the number of activated elements decreased gradually until meeting the stopping criterion in Algorithm 1. In summary, adopting the re-weighted technique could significantly and effectively thin a dense array. The threshold used to determine which elements should be activated was no less than five percent of the maximum weight in Algorithm 1. A high threshold (e.g., 0.1) can reduce more elements, but it can possibly filter o-
ut elements with relatively high weights leading to BP deviation to the desired one. A
low threshold (e.g., 0.01) rejected less elements, but it might include extra elements with very low weights.
D. On-grid and Out-of-grid Array Layout
The re-weighted L1 SOCP method used in this work was appropriate for designing on-grid sparse arrays. As mentioned in Sec III-A, sparse array design in this work was based on the 32 × 32 grided layout of the M3dV matrix array with element pitch equal to 0.3 mm. Another on-grid design method was the Costas array method, which was not compared in this work. If a 256-element sparse array was designed by the Costas array method, the aperture of M3dV array should be first evenly divided into a 256 × 25-
6 grid with an element pitch of 0.3/8 = 0.0375 mm and then one layout with 256 elements from 65534 different Costas arrays based on some criteria (e.g., peak side-to-main lobe ratio) was selected. Since one of the aim of this study was to quickly implement the designed sparse array on a mass-produced 2D dense array, it seemed that the re-weighted L1 SOCP method was more suitable than the Costas array method in this case. Besides, the re-weighted L1 SOCP method could also be easily extended to a 25-
6 × 256 grid case theoretically. Spiral arrays belonged to out-of-grid array layouts and were realized on the M3dV dense array in this work. It should be pointed that out-of-grid array architectures could be seen as selecting a certain number of elements (e.g., 256) from a grid with infinitely small grid size. Practically, in Matlab, numbers were recorded by using double-precision floating-point data type, which was finite precision. Therefore, spiral arrays could also be treated as on-grid ones i-
n some sense.

10 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
E. Side lobes and Grating lobes
Narrow-band far-field BP was adopted to predict each kind of array performance on the magnitude and positions of the side lobes and grating lobes in this work. As shown in Fig. 4, although the BPs of the four arrays showed different characteristics, they all had five grating lobes at the same positions as exact replica of their respective main lobes. Because the positions and amplitudes of grating lobes could not be controlled. Only the grating lobe width and SLLs could be adjusted. This could be -
explained as follows. For simplicity, consider the case where v = 0, (1) could be written as
P (u, 0) =
N
X
n=1
M
X
m=1
wn,mejβndxu. (9)
The grating lobes appeared along the u-axis at
ug = ±nλ/dx, n = 1, 2, · · · . (10)
Similarly, grating lobes appeared along the v-axis at
vg = ±mλ/dy, m = 1, 2, · · · . (11)
And grating lobes in the oblique direction were located at
ug = ±nλ/dx, n = 1, 2, · · · ,
vg = ±mλ/dy, m = 1, 2, · · · . (12)
Since P (0, 0) = P (0 + ug, 0 + vg), the grating lobes were completely the same as the main lobe. Besides, whether these mainlobe-like grating lobes existed in possible visible region (u, v ∈ [−2, 2]) merely depended on the elements pitches dx and dy. Taking the first grating lobe as an example, it could be verified by the following
|ug| = | ± λ/dx| = λ/dx ≤ 2, if, dx ≥ 0.5λ.
|vg| = | ± λ/dy| = λ/dy ≤ 2, if, dy ≥ 0.5λ. (13)
In summary, if dx ≥ 0.5λ or dy ≥ 0.5λ, mainlobe-like grating lobes would appear in the region (u, v ∈ [−2, 2]). In this study, since dx = dy = 0.58λ and |ug| = |vg| = 1.72, five grating lobes were presented as shown in Fig. 2. Thus, we could only seek trade-offs among main lobe width, SLL, and number of activated elements. If dx ≤ 0.5λ and dy ≤ 0.5λ, no grating lobes would exist in the region (u, v ∈ [−2, 2]). However, small pitch usually corresponded to dividing an aperture into finer girds, whic-
h, in turn, posed limitations on the element size. It is worthwhile to perform further investigation in the future study of fine grid cases.
F. Limitations and Future Work
One limitation of the re-wiehgted L1 technique is that it is not guaranteed to reach a globally optimal solution for original problem (2) [64]. Nevertheless, this techniques still dramatically increase the sparsity of the dense array (Fig. 3). Another limitation of formulating the sparse array synthesis problem as a convex optimization is the large memory consumption, especially for designing large sparse array cases. Here, large sparse array case refers to aperture with fine grids (e.g., 128 × 12-
8), not just aperture with large size,
despite large apertures usually possess more elements. For 2D sparse array design, the number of optimization variable grows quadratically, which dramatically increases the computational complexity of solving SOCP by interior-point algorithm. Besides, the number of SOC constraints also influence the scale of the SOCP problem, which depends on the constrained area (e.g., (6)) and discrete intervals, ∆u and ∆v. The iterative optimization process in this work was conducted in Matlab 2019a on a PC wor-
kstation (Intel(R) Xeon(R) Gold 6136 CPU @3.00 GHz, 2.99GHz (2 processors), 192 GB RAM). Relatively low resolution, contrast and signal-to-noise ratio (SNR) are limitations to all the sparse arrays. Large aperture can be easily designed with the method adopted in this paper to improve the resolution. Non-linear beamforming methods, such as minimum variance (MV) [79], coherence factor [80], or deep-learning-based methods [81], [82] can be adopted to improve the resolution and imaging contrast simul-
taneously. For the imaging SNR, compared with Spiral and Spiral-Taper, the Q-Flats produced more inferior SNR since apodization was applied on, which could be improved by coded excitation [83], [84]. Finally, the Q-Flats was designed by limiting the SLLs no higher than a certain level in this work. Other kinds of BP shape, for example, spiral-inspired BPs [22], could be also explored, which, however, increased the complexity of this study. This warrants further investigation.
ACKNOWLEDGMENT
We are very grateful to Prof.Piero Tortoli and Prof. Alessandro Ramalli for their great help in detemining the element distributions of spiral arrays on M3dV matrix array .
REFERENCES
[1] S. Smith, H. Pavy, and O. von Ramm, “High-speed ultrasound volumetric imaging system. i. transducer design and beam steering,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 38, no. 2, pp. 100–108, 1991. [2] A. Fenster, D. B. Downey, and H. N. Cardinal, “Three-dimensional ultrasound imaging,” Physics in medicine & biology, vol. 46, no. 5, p. R67, 2001. [3] B. Savord and R. Solomon, “Fully sampled matrix transducer for real time 3d ultrasonic imaging,” in IEEE Sym-
posium on Ultrasonics, 2003, vol. 1, pp. 945–953 Vol.1, 2003. [4] C. Nadeau, H. Ren, A. Krupa, and P. Dupont, “Intensity-based visual servoing for instrument and tissue tracking in 3d ultrasound volumes,” IEEE Transactions on Automation Science and Engineering, vol. 12, no. 1, pp. 367–371, 2015. [5] M. Gesnik, K. Blaize, T. Deffieux, J.-L. Gennisson, J.-A. Sahel, M. Fink, S. Picaud, and M. Tanter, “3d functional ultrasound imaging of the cerebral visual system in rodents,” NeuroImage, vol. 149, pp-
. 267–274, 2017. [6] R. Rau, P. Kruizinga, F. Mastik, M. Belau, N. de Jong, J. G. Bosch, W. Scheffer, and G. Maret, “3d functional ultrasound imaging of pigeons,” Neuroimage, vol. 183, pp. 469–477, 2018. [7] T. Deffieux, J.-L. Gennisson, M. Tanter, and M. Fink, “Assessment of the mechanical properties of the musculoskeletal system using 2-d and 3-d very high frame rate ultrasound,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 55, no. 10, pp. 2177–2190, 2008. [8] J.-
-F. Deprez, E. Brusseau, C. Schmitt, G. Cloutier, and O. Basset, “3d estimation of soft biological tissue deformation from radio-frequency ultrasound volume acquisitions,” Medical image analysis, vol. 13, no. 1, pp. 116–127, 2009.

AUTHOR et al.: PREPARATION OF PAPERS FOR IEEE TRANSACTIONS ON MEDICAL IMAGING 11
[9] J.-L. Gennisson, J. Provost, T. Deffieux, C. Papadacci, M. Imbault, M. Pernot, and M. Tanter, “4-d ultrafast shear-wave imaging,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 62, no. 6, pp. 1059–1065, 2015. [10] C. Papadacci, E. A. Bunting, E. Y. Wan, P. Nauleau, and E. E. Konofagou, “3d myocardial elastography in vivo,” IEEE transactions on medical imaging, vol. 36, no. 2, pp. 618–627, 2016. [11] M. Correia, T. Deffieux, S. Chatelin, J. Provost, M. Tanter, and-
 M. Pernot, “3d elastic tensor imaging in weakly transversely isotropic soft tissues,” Physics in Medicine & Biology, vol. 63, no. 15, p. 155005, 2018. [12] J. Provost, C. Papadacci, C. Demene, J.-L. Gennisson, M. Tanter, and M. Pernot, “3-d ultrafast doppler imaging applied to the noninvasive mapping of blood vessels in vivo,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 62, no. 8, pp. 1467–1472, 2015. [13] J. Provost, C. Papadacci, C. Demene, J.-L. Gennisson, M. -
Tanter, and M. Pernot, “3-d ultrafast doppler imaging applied to the noninvasive mapping of blood vessels in vivo,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 62, no. 8, pp. 1467–1472, 2015. [14] S. Rossi, A. Ramalli, F. Fool, and P. Tortoli, “High-frame-rate 3-d vector flow imaging in the frequency domain,” Applied Sciences, vol. 10, no. 15, p. 5365, 2020. [15] O. Demeulenaere, A. Bertolo, S. Pezet, N. Ialy-Radio, B. Osmanski, C. Papadacci, M. Tanter, T. Deffieu-
x, and M. Pernot, “In vivo whole brain microvascular imaging in mice using transcranial 3d ultrasound localization microscopy,” EBioMedicine, vol. 79, 2022. [16] G. Unsgaard, O. Rygh, T. Selbekk, T. Mu ̈ller, F. Kolstad, F. Lindseth, and T. N. Hernes, “Intra-operative 3d ultrasound in neurosurgery,” Acta neurochirurgica, vol. 148, pp. 235–253, 2006. [17] E. R. Pospisil, R. Rohling, R. Z. Azar, and S. E. Salcudean, “4-d x 3-d ultrasound: real-time scan conversion, filtering, and display of displace-
ment vectors with a motorized curvilinear transducer,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 57, no. 10, pp. 2271–2283, 2010. [18] S. I. Nikolov, J. A. Jensen, R. Dufait, and A. Schoisswohl, “Threedimensional real-time synthetic aperture imaging using a rotating phased array transducer,” in 2002 IEEE Ultrasonics Symposium, 2002. Proceedings., vol. 2, pp. 1585–1588, IEEE, 2002. [19] D. Turnbull and F. Foster, “Beam steering with pulsed two-dimensional transdu-
cer arrays,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 38, no. 4, pp. 320–333, 1991. [20] G. Montaldo, M. Tanter, J. Bercoff, N. Benech, and M. Fink, “Coherent plane-wave compounding for very high frame rate ultrasonography and transient elastography,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 56, no. 3, pp. 489–506, 2009. [21] J. Provost, C. Papadacci, J. E. Arango, M. Imbault, M. Fink, J.-L. Gennisson, M. Tanter, and M. Pern-
ot, “3d ultrafast ultrasound imaging in vivo,” Physics in Medicine & Biology, vol. 59, no. 19, p. L1, 2014. [22] E. Roux, A. Ramalli, P. Tortoli, C. Cachard, M. C. Robini, and H. Liebgott, “2-d ultrasound sparse arrays multidepth radiation optimization using simulated annealing and spiral-array inspired energy functions,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 63, no. 12, pp. 2138–2149, 2016. [23] L. Petrusca, F. Varray, R. Souchon, A. Bernard, J.-Y. Chapelon-
, H. Liebgott, W. A. N’Djin, and M. Viallon, “Fast volumetric ultrasound b-mode and doppler imaging with a new high-channels density platform for advanced 4d cardiac imaging/therapy,” Applied Sciences, vol. 8, no. 2, p. 200, 2018. [24] I. O. Wygant, N. S. Jamal, H. J. Lee, A. Nikoozadeh, O. Oralkan, M. Karaman, and B. T. Khuri-yakub, “An integrated circuit with transmit beamforming flip-chip bonded to a 2-d cmut array for 3-d ultrasound imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, a-
nd Frequency Control, vol. 56, no. 10, pp. 2145–2156, 2009. [25] J. Kortbek, J. A. Jensen, and K. L. Gammelmark, “Sequential beamforming for synthetic aperture imaging,” Ultrasonics, vol. 53, no. 1, pp. 1–16, 2013. [26] G. Matrone, A. S. Savoia, M. Terenzi, G. Caliano, F. Quaglia, and G. Magenes, “A volumetric cmut-based ultrasound imaging system simulator with integrated reception and μ-beamforming electronics models,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. -
61, no. 5, pp. 792–804, 2014. [27] C. Morton and G. Lockwood, “Theoretical assessment of a crossed electrode 2-d array for 3-d imaging,” in IEEE Symposium on Ultrasonics, 2003, vol. 1, pp. 968–971 Vol.1, 2003.
[28] C. H. Seo and J. T. Yen, “A 256 x 256 2-d array transducer with row-column addressing for 3-d rectilinear imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 56, no. 4, pp. 837–847, 2009. [29] C. E. M. Demore, A. W. Joyce, K. Wall, and G. R. Lockwood, “Real-time volume imaging using a crossed electrode array,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 56, no. 6, pp. 1252–1261, 2009. [30] A. S. Logan, L. L. Wong, A. I. Che-
n, and J. T. Yeow, “A 32 x 32 element row-column addressed capacitive micromachined ultrasonic transducer,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 58, no. 6, pp. 1266–1271, 2011. [31] M. F. Rasmussen, T. L. Christiansen, E. V. Thomsen, and J. A. Jensen, “3-d imaging using row-column-addressed arrays with integrated apodization - part i: apodization design and line element beamforming,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, v-
ol. 62, no. 5, pp. 947–958, 2015. [32] T. L. Christiansen, M. F. Rasmussen, J. P. Bagge, L. N. Moesner, J. A. Jensen, and E. V. Thomsen, “3-d imaging using row–column-addressed arrays with integrated apodization—part ii: Transducer fabrication and experimental results,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 62, no. 5, pp. 959–971, 2015. [33] H. Bouzari, M. Engholm, C. Beers, M. B. Stuart, S. I. Nikolov, E. V. Thomsen, and J. A. Jensen, “3-d imaging using row-
-columnaddressed 2-d arrays with a diverging lens: Phantom study,” in 2017 IEEE International Ultrasonics Symposium (IUS), pp. 1–4, 2017.
[34] A. Ramalli, E. Boni, E. Roux, H. Liebgott, and P. Tortoli, “Design, implementation, and medical applications of 2-d ultrasound sparse arrays,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 69, no. 10, pp. 2739–2755, 2022. [35] D. Turnbull, A. Kerr, and F. Foster, “Simulation of b-scan images from two-dimensional transducer arrays,” in IEEE Symposium on Ultrasonics, pp. 769–773 vol.2, 1990. [36] S. I. Nikolov and J. A. Jensen, “Application of different spatial s-
ampling patterns for sparse array transducer design,” Ultrasonics, vol. 37, no. 10, pp. 667–671, 2000. [37] S. S. Brunke and G. R. Lockwood, “Broad-bandwidth radiation patterns of sparse two-dimensional vernier arrays,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 44, no. 5, pp. 11011109, 2002. [38] G. Lookwood and F. S. Foster, “Optimizing the radiation pattern of sparse periodic two-dimensional arrays,” IEEE transactions on ultrasonics, ferroelectrics, and freque-
ncy control, vol. 43, no. 1, pp. 15–19, 2002. [39] A. Austeng and S. Holm, “Sparse 2-d arrays for 3-d phased array imaging-design methods,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 49, no. 8, pp. 1073–1086, 2002. [40] O. Martı ́nez-Graullera, C. J. Martı ́n, G. Godoy, and L. G. Ullate, “2d array design based on fermat spiral for ultrasound imaging,” Ultrasonics, vol. 50, no. 2, pp. 280–289, 2010. [41] S. N. Ramadas, J. C. Jackson, J. Dziewierz, R. O’Leary, and -
A. Gachagan, “Application of conformal map theory for design of 2-d ultrasonic array structure for ndt imaging application: A feasibility study,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 61, no. 3, pp. 496–504, 2014. [42] A. Ramalli, E. Boni, A. S. Savoia, and P. Tortoli, “Density-tapered spiral arrays for ultrasound 3-d imaging,” IEEE Transactions on ultrasonics, ferroelectrics, and frequency control, vol. 62, no. 8, pp. 1580–1588, 2015. [43] M. H. Masoumi, T.-
 Kaddoura, and R. J. Zemp, “Costas sparse 2d arrays for high-resolution ultrasound imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 70, no. 5, pp. 460–472, 2023. [44] R. Haupt, “Thinned arrays using genetic algorithms,” IEEE Transactions on Antennas and Propagation, vol. 42, no. 7, pp. 993–999, 1994. [45] A. Trucco, “Thinning and weighting of large planar arrays by simulated annealing,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, -
vol. 46, no. 2, pp. 347–355, 1999. [46] B. Diarra, M. Robini, P. Tortoli, C. Cachard, and H. Liebgott, “Design of optimal 2-d nongrid sparse arrays for medical ultrasound,” IEEE Transactions on Biomedical Engineering, vol. 60, no. 11, pp. 30933102, 2013. [47] E. Roux, A. Ramalli, H. Liebgott, C. Cachard, M. C. Robini, and P. Tortoli, “Wideband 2-d array design optimization with fabrication constraints for 3-d us imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol-
. 64, no. 1, pp. 108–125, 2017.

12 IEEE TRANSACTIONS ON MEDICAL IMAGING, VOL. XX, NO. XX, XXXX 2020
[48] J. Yen, J. Steinberg, and S. Smith, “Sparse 2-d array design for real time rectilinear volumetric imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 47, no. 1, pp. 93–110, 2000. [49] T. Sumanaweera, J. Schwartz, and D. Napolitano, “A spiral 2d phased array for 3d imaging,” in 1999 IEEE Ultrasonics Symposium. Proceedings. International Symposium (Cat. No.99CH37027), vol. 2, pp. 1271–1274 vol.2, 1999. [50] M. C. Vigan ́o, G. Toso, G. Caille, C. Mangenot, and-
 I. E. Lager, “Sunflower array antenna with adjustable density taper,” International Journal of Antennas and Propagation, vol. 2009, no. 1, p. 624035, 2009. [51] M. C. Vigano, G. Toso, G. Caille, C. Mangenot, and I. E. Lager, “Spatial density tapered sunflower antenna array,” in 2009 3rd European Conference on Antennas and Propagation, pp. 778–782, 2009.
[52] J. K. Beard, J. C. Russo, K. G. Erickson, M. C. Monteleone, and M. T. Wright, “Costas array generation and search methodology,” IEEE Transactions on Aerospace and Electronic Systems, vol. 43, no. 2, pp. 522–538, 2007. [53] J. Beard, “Costas arrays and enumeration to order 1030,” 2017. [54] D. Adler, “Genetic algorithms and simulated annealing: a marriage proposal,” in IEEE International Conference on Neural Networks, pp. 11041109 vol.2, 1993. [55] S.-F. Hwang and R.-S. He, “Improving real-par-
ameter genetic algorithm with simulated annealing for engineering problems,” Advances in Engineering Software, vol. 37, no. 6, pp. 406–418, 2006. [56] E. Roux, B. Diarra, M. Robini, C. Cachard, P. Tortoli, and H. Liebgott, “Realistic acoustic simulation of 2-d probe elements in simulated annealing sparse array optimization,” in 2014 IEEE International Ultrasonics Symposium, pp. 2125–2128, 2014. [57] A. Savoia, G. Caliano, and M. Pappalardo, “A cmut probe for medical ultrasonography: from microfabr-
ication to system integration,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 59, no. 6, pp. 1127–1138, 2012. [58] A. Stuart Savoia, B. Mauti, L. Fanni, A. Bagolini, E. Boni, A. Ramalli, F. Guanziroli, S. Passi, M. Sautto, G. Matrone, R. Bardelli, P. Bellutti, F. Quaglia, G. Caliano, A. Mazzanti, and P. Tortoli, “A 256-element spiral cmut array with integrated analog front end and transmit beamforming circuits,” in 2018 IEEE International Ultrasonics Symposium (IUS)-
, pp. 206–212, 2018. [59] R. Maffett, E. Boni, A. J. Y. Chee, B. Y. S. Yiu, A. S. Savoia, A. Ramalli, P. Tortoli, and A. C. H. Yu, “Unfocused field analysis of a densitytapered spiral array for high-volume-rate 3-d ultrasound imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 69, no. 10, pp. 2810–2822, 2022. [60] P. Wu, Y.-H. Liu, Z.-Q. Zhao, and Q.-H. Liu, “Sparse antenna array design methodologies: A review,” Journal of Electronic Science and Technology, vol.-
 22, no. 3, p. 100276, 2024. [61] Y. Liu, Z. Nie, and Q. H. Liu, “Reducing the number of elements in a linear antenna array by the matrix pencil method,” IEEE Transactions on Antennas and Propagation, vol. 56, no. 9, pp. 2955–2962, 2008. [62] S. Holm, B. Elgetun, and G. Dahl, “Properties of the beampattern of weight- and layout-optimized sparse arrays,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 44, no. 5, pp. 983–991, 1997. [63] W. Zhang, L. Li, and F. Li, “Redu-
cing the number of elements in linear and planar antenna arrays with sparseness constrained optimization,” IEEE Transactions on Antennas and Propagation, vol. 59, no. 8, pp. 3106–3111, 2011. [64] B. Fuchs, “Synthesis of sparse arrays with focused or shaped beampattern via sequential convex optimizations,” IEEE Transactions on Antennas and Propagation, vol. 60, no. 7, pp. 3499–3503, 2012. [65] G. Prisco and M. D’Urso, “Maximally sparse arrays via sequential convex optimizations,” IEEE Antennas and -
Wireless Propagation Letters, vol. 11, pp. 192–195, 2012. [66] H. Lebret and S. Boyd, “Antenna array pattern synthesis via convex optimization,” IEEE Transactions on Signal Processing, vol. 45, no. 3, pp. 526–532, 1997. [67] F. Yang, S. Yang, Y. Chen, S. Qu, and J. Hu, “Synthesis of sparse antenna arrays subject to constraint on directivity via iterative convex optimization,” IEEE Antennas and Wireless Propagation Letters, vol. 20, no. 8, pp. 1498–1502, 2021. [68] D. Donoho, “Compressed sensing,” -
IEEE Transactions on Information Theory, vol. 52, no. 4, pp. 1289–1306, 2006. [69] M. S. Lobo, M. Fazel, and S. Boyd, “Portfolio optimization with linear and fixed transaction costs,” Annals of Operations Research, vol. 152, pp. 341–365, 2007.
[70] E. J. Candes, M. B. Wakin, and S. P. Boyd, “Enhancing sparsity by reweighted 1 minimization,” Journal of Fourier analysis and applications, vol. 14, pp. 877–905, 2008. [71] S. P. Boyd and L. Vandenberghe, “Convex optimization,” Cambridge University Press, pp. 156–157, 2004. [72] J. Lofberg, “Yalmip: A toolbox for modeling and optimization in matlab,” in 2004 IEEE international conference on robotics and automation (IEEE Cat. No. 04CH37508), pp. 284–289, IEEE, 2004.
[73] A. Mosek, “The Mosek optimization toolbox for MATLAB manual,” http://mosek. com, 2015.
[74] A. Ramalli, S. Harput, S. Be ́zy, E. Boni, R. J. Eckersley, P. Tortoli, and J. D’Hooge, “High-frame-rate tri-plane echocardiography with spiral arrays: From simulation to real-time implementation,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 67, no. 1, pp. 57–69, 2020. [75] J. Jensen and N. Svendsen, “Calculation of pressure fields from arbitrarily shaped, apodized, and excited ultrasound transducers,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Fre-
quency Control, vol. 39, no. 2, pp. 262–267, 1992. [76] J. A. Jensen, “Field: A program for simulating ultrasound systems,” Medical & Biological Engineering & Computing, vol. 34, no. sup. 1, pp. 351–353, 1997. [77] E. Roux, F. Varray, L. Petrusca, C. Cachard, P. Tortoli, and H. Liebgott, “Experimental 3-d ultrasound imaging with 2-d sparse arrays using focused and diverging waves,” Scientific reports, vol. 8, no. 1, p. 9108, 2018. [78] M. Bernal, B. Cunitz, D. Rohrbach, and R. Daigle, “High-frame--
rate volume imaging using sparse-random-aperture compounding,” Physics in Medicine & Biology, vol. 65, no. 17, p. 175002, 2020. [79] J. F. Synnevag, A. Austeng, and S. Holm, “Adaptive beamforming applied to medical ultrasound imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 54, no. 8, pp. 1606–1613, 2007. [80] P.-C. Li and M.-L. Li, “Adaptive imaging using the generalized coherence factor,” IEEE transactions on ultrasonics, ferroelectrics, and frequency contr-
ol, vol. 50, no. 2, pp. 128–141, 2003. [81] B. Luijten, R. Cohen, F. J. de Bruijn, H. A. W. Schmeitz, M. Mischi, Y. C. Eldar, and R. J. G. van Sloun, “Adaptive ultrasound beamforming using deep learning,” IEEE Transactions on Medical Imaging, vol. 39, no. 12, pp. 3967–3978, 2020. [82] M. Tamraoui, H. Liebgott, and E. Roux, “A deep reinforcement learning based region-specific beamformer for sparse arrays 3-d ultrasound imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Contro-
l, vol. 72, no. 6, pp. 772–785, 2025. [83] T. Misaridis and J. Jensen, “Use of modulated excitation signals in medical ultrasound. part i: basic concepts and expected benefits,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 52, no. 2, pp. 177–191, 2005. [84] M. Tamraoui, H. Liebgott, and E. Roux, “Complete complementary coded excitation scheme for snr improvement of 2d sparse array ultrasound imaging,” IEEE Transactions on Biomedical Engineering, vol. 71, no. 3, pp.-
 1043–1055, 2023.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:51.643Z
- **Text Length:** 64345 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
