# PDF Document: (Laser lock - 2001 Eric) An introduction to Pound–Drever–Hall laser frequency stabilization.pdf

**File Path:** (Laser lock - 2001 Eric) An introduction to Pound–Drever–Hall laser frequency stabilization.pdf

**Processed Date:** 2026-02-10T18:15:56.701Z

**File Size:** 251.23 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1384

**Title:** (Laser lock - 2001 Eric) An introduction to Pound–Drever–Hall laser frequency stabilization

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

An introduction to Pound–Drever–Hall laser frequency stabilization
Eric D. Black LIGO Project, California Institute of Technology, Mail Code 264-33, Pasadena, California 91125
͑Received 3 January 2000; accepted 4 April 2000͒
This paper is an introduction to an elegant and powerful technique in modern optics: Pound– Drever–Hall laser frequency stabilization. This introduction is primarily meant to be conceptual, but it includes enough quantitative detail to allow the reader to immediately design a real setup, suitable for research or industrial application. The intended audience is both the researcher learning the technique for the ﬁrst time and the teacher who wants to cover modern laser locking in an upper-level phys-
ics or electrical engineering course. © 2001 American Association of Physics Teachers. ͓DOI: 10.1119/1.1286663͔

I. INTRODUCTION
Pound–Drever–Hall laser frequency stabilization is a powerful technique for improving an existing laser’s frequency stability,1,2 and it is an essential part of the technology of interferometric gravitational-wave detectors.3 The technique has been used to demonstrate, using a commercial laser, a frequency standard as relatively stable as a pulsar.4,5
The physical basis of the Pound–Drever–Hall technique has a broad range of applications in addition to gravitationalwave detection. A closely related technique is employed in atomic physics, where it goes by the name frequencymodulation ͑fm͒ spectroscopy and is used for probing optical resonances. ͑See, for example, Refs. 6–8. Both techniques are similar to an older method used in microwave applications, invented in the forties by R. V. Pound.9͒ The conceptual foundations of fm spectroscopy and Po-
und–Drever– Hall laser locking are quite similar. If you can understand one, you will have a good handle on the other.
The idea behind the Pound–Drever–Hall method is simple in principle: A laser’s frequency is measured with a Fabry– Perot cavity, and this measurement is fed back to the laser to suppress frequency ﬂuctuations. The measurement is made using a form of nulled lock-in detection, which decouples the frequency measurement from the laser’s intensity. An additional beneﬁt of this method is that the system is not limited by the response time of the Fabry–Perot cavity. You can measure, and suppress, frequen-
cy ﬂuctuations that occur faster than the cavity can respond.
The technique is both simple and powerful; it can be taught in an advanced undergraduate laboratory course.10 It is my hope that this paper will provide a clear conceptual introduction to the Pound–Drever–Hall method. I am going to try and demonstrate both the physical basis of the technique and its fundamental limitations. I also hope that a more widespread understanding of the technique will stimulate further development of laser frequency stabilization ͑and perhaps fm spectroscopy͒ in general.
In this paper I am going to focus on the frequency measurement, also called the error signal. That is really the heart of the technique, and it is often the point of maximum confusion when one ﬁrst encounters it. The frequency measurement is also an essential part of fm spectroscopy, and a good understanding of it will get the reader off to a good start in that ﬁeld as well.
In this paper I will assume that the reader is already familiar with Fabry–Perot cavities as they would be covered in a good introductory optics course. ͑See, for example, Refs. 11 and 12.͒ For some very good comprehensive introductory

materials on both control theory and Fabry–Perot cavities, see Refs. 13–17. An excellent introduction to interferometric gravitational-wave detectors is Ref. 18.
II. A CONCEPTUAL MODEL
Suppose we have a laser that we want to use for some experiment, but we need better frequency stability than the laser provides ‘‘out of the box.’’ Many modern lasers are tuneable: They come with some input port into which you can feed an electrical signal and adjust the output frequency. If we have an accurate way to measure the laser’s frequency, then we can feed this measurement into the tuning port, with appropriate ampliﬁcation and ﬁltering, to hold the frequency ͑roughly͒ constant.
One good way to measure the frequency of a laser’s beam is to send it into a Fabry–Perot cavity and look at what gets transmitted ͑or reﬂected͒. Recall that light can only pass through a Fabry–Perot cavity if twice the length of the cavity is equal to an integer number of wavelengths of the light. Another way to say this is that the frequency of the light’s electromagnetic wave must be an integer number times the cavity’s free spectral range ⌬␯fsrϵc/2L, where L is the length of the cavity and c is-
 the speed of light. The cavity acts as a ﬁlter, with transmission lines, or resonances, spaced evenly in frequency every free spectral range. Figure 1 shows a plot of the fraction of light transmitted through a Fabry–Perot cavity versus the frequency of the light.
If we were to operate just to one side of one of these resonances, but near enough that some light gets transmitted ͑say, half the maximum transmitted power͒, then a small change in laser frequency would produce a proportional change in the transmitted intensity. We could then measure the transmitted intensity of the light and feed this signal back to the laser to hold this intensity ͑and hence the laser frequency͒ constant.
This was often how laser locking was done before the development of the Pound–Drever–Hall method, and it suffers from a few ﬂaws, one of which is that the system cannot distinguish between ﬂuctuations in the laser’s frequency, which changes the intensity transmitted through the cavity, and ﬂuctuations in the intensity of the laser itself.
We could build a separate system to stabilize the laser’s intensity, which was done with some success in the early seventies,19 but a better method would be to measure the reﬂected intensity and hold that at zero, which would decouple intensity and frequency noise. The only problem with this scheme is that the intensity of the reﬂected beam is symmetric about resonance. If the laser frequency drifts out of

79

Am. J. Phys. 69 ͑1͒, January 2001

http://ojps.aip.org/ajp/

© 2001 American Association of Physics Teachers

79

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

Fig. 1. Transmission of a Fabry–Perot cavity vs frequency of the incident light. This cavity has a fairly low ﬁnesse, about 12, to make the structure of the transmission lines easy to see.

Fig. 2. The reﬂected light intensity from a Fabry–Perot cavity as a function of laser frequency, near resonance. If you modulate the laser frequency, you can tell which side of resonance you are on by how the reﬂected power changes.

resonance with the cavity, you can’t tell just by looking at the reﬂected intensity whether the frequency needs to be increased or decreased to bring it back onto resonance. The derivative of the reﬂected intensity, however, is antisymmetric about resonance. If we were to measure this derivative, we would have an error signal that we can use to lock the laser. Fortunately, this is not too hard to do: We can just vary the frequency a little bit and see how the reﬂected beam responds.
Above resonance, the derivative of the reﬂected intensity with respect to laser frequency is positive. If we vary the laser’s frequency sinusoidally over a small range, then the reﬂected intensity will also vary sinusoidally, in phase with the variation in frequency. ͑See Fig. 2.͒
Below resonance, this derivative is negative. Here the reﬂected intensity will vary 180° out of phase from the frequency. On resonance the reﬂected intensity is at a minimum, and a small frequency variation will produce no change in the reﬂected intensity.
By comparing the variation in the reﬂected intensity with the frequency variation we can tell which side of resonance we are on. Once we have a measure of the derivative of the reﬂected intensity with respect to frequency, we can feed this measurement back to the laser to hold it on resonance. The purpose of the Pound–Drever–Hall method is to do just this. Figure 3 shows a basic setup. Here the frequency is modulated with a Pockels cell,20 driven by some local oscillator. The reﬂected beam is pick-
ed off with an optical isolator ͑a polarizing beamsplitter and a quarter-wave plate makes a good isolator͒ and sent into a photodetector, whose output is

compared with the local oscillator’s signal via a mixer. We can think of a mixer as a device whose output is the product of its inputs, so this output will contain signals at both dc ͑or very low frequency͒ and twice the modulation frequency. It is the low frequency signal that we are interested in, since that is what will tell us the derivative of the reﬂected intensity. A low-pass ﬁlter on the output of the mixer isolates this low frequency signal, which then goes through a servo ampliﬁer and in-
to the tuning port on the laser, locking the laser to the cavity.
The Faraday isolator shown in Fig. 3 keeps the reﬂected beam from getting back into the laser and destabilizing it. This isolator is not necessary for understanding the technique, but it is essential in a real system. In practice, the small amount of reﬂected beam that gets through the optical isolator is usually enough to destabilize the laser. Similarly, the phase shifter is not essential in an ideal system but is useful in practice to compensate for unequal delays in the two signal paths. ͑In o-
ur example, it could just as easily go between the local oscillator and the Pockels cell.͒
This conceptual model is really only valid if you are dithering the laser frequency slowly. If you dither the frequency too fast, the light resonating inside the cavity won’t have time to completely build up or settle down, and the output will not follow the curve shown in Fig. 2. However, the technique still works at higher modulation frequencies, and both the noise performance and bandwidth of the servo are typically improved. Before we address a conceptual picture that does apply to the high-fr-
equency regime, we must establish a quantitative model.

Fig. 3. The basic layout for locking a cavity to a laser. Solid lines are optical paths and dashed lines are signal paths. The signal going to the laser controls its frequency.

80

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

80

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

III. A QUANTITATIVE MODEL

A. Reﬂection of a monochromatic beam from a Fabry– Perot cavity

To describe the behavior of the reﬂected beam quantitatively, we can pick a point outside the cavity and measure the electric ﬁeld over time. The magnitude of the electric ﬁeld of the incident beam can be written

E incϭ E 0 e i ␻ t .

The electric ﬁeld of the reﬂected beam ͑measured at the same point͒ is

E refϭ E 1 e i ␻ t .

We account for the relative phase between the two waves by

letting E0 and E1 be complex. The reﬂection coefﬁcient

F(␻) is the ratio of Eref and Einc , and for a symmetric cavity

with no losses it is given by

␻

ͩ ͩ ͪ ͪ r
F͑ ␻ ͒ϭEref /Eincϭ

exp i ⌬␯fsr Ϫ1 ␻

,

ͩ ͪ 1Ϫr2exp i ⌬␯fsr

͑3.1͒

where r is the amplitude reﬂection coefﬁcient of each mirror, and ⌬␯fsrϭc/2L is the free spectral range of the cavity of length L.
The beam that reﬂects from a Fabry–Perot cavity is actually the coherent sum of two different beams: the promptly reﬂected beam, which bounces off the ﬁrst mirror and never enters the cavity; and a leakage beam, which is the small part of the standing wave inside the cavity that leaks back through the ﬁrst mirror, which is never perfectly reﬂecting. These two beams have the same frequency, and near resonance ͑for our lossless, symmetric cavity͒ their intensities are almost the same as well. Their -
relative phase, however, depends strongly on the frequency of the laser beam.
If the cavity is resonating perfectly, i.e., the laser’s frequency is exactly an integer multiple of the cavity’s free spectral range, then the promptly reﬂected beam and the leakage beam have the same amplitude and are exactly 180° out of phase. In this case the two beams interfere destructively, and the total reﬂected beam vanishes.
If the cavity is not quite perfectly resonant, that is, the laser’s frequency is not exactly an integer multiple of the free spectral range but close enough to build up a standing wave, then the phase difference between the two beams will not be exactly 180°, and they will not completely cancel each other out. ͑Their intensities will still be about the same.͒ Some light gets reﬂected off the cavity, and its phase tells you which side of resonance your laser is on. Figure 4 shows a plot of the inte-
nsity and phase of the reﬂection coefﬁcient around resonance.
We will ﬁnd it useful to look at the properties of F(␻) in the complex plane. ͑See Fig. 5.͒ It is not too hard to show ͑see Appendix A͒ that the value of F always lies on a circle in the complex plane, centered on the real axis, with ␻ being the parameter that determines where on this circle F will be. ͉F(␻)͉2 gives the intensity of the reﬂected beam, and it is given by the familiar Airy function. F is symmetric around resonance, but its phase is different depending on whether the laser’s frequenc-
y is above or below the cavity’s resonance. As ␻ increases, F advances counterclockwise around the circle. For the symmetric, lossless cavity we are consid-

Fig. 4. Magnitude and phase of the reﬂection coefﬁcient for a Fabry–Perot cavity. As in Fig. 1, the ﬁnesse is about 12. Note the discontinuity in phase, caused by the reﬂected power vanishing at resonance.
ering, this circle intersects the origin, with Fϭ0 on resonance. Very near resonance, F is nearly on the imaginary axis, being in the lower half plane below resonance and in the upper half plane above resonance.
We will use this graphical representation of F in the complex plane when we try to understand the results of our quantitative model.
Fig. 5. The reﬂection coefﬁcient in the complex plane. As the laser frequency ͑or equivalently, the cavity length͒ increases, F(␻) traces out a circle ͑counterclockwise͒. Most of the time, F is near the real axis at the left edge of the circle. Only near resonance does the imaginary part of F become appreciable. Exactly on resonance, F is zero.

81

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

81

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

B. Measuring the phase of the reﬂected beam
To tell whether the laser’s frequency is above or below the cavity resonance, we need to measure the phase of the reﬂected beam. We do not, as of this writing, know how to build electronics that can directly measure the electric ﬁeld ͑and hence the phase͒ of a light wave, but the Pound– Drever–Hall method ͑and fm spectroscopy͒ provides us with a way of indirectly measuring the phase.
Our conceptual model suggests that if we dither the frequency of the laser, that will give us enough information to tell which side of resonance we are on. A more quantitative way of thinking about this frequency dither is this: Modulating the laser’s frequency ͑or phase͒ will generate sidebands with a deﬁnite phase relationship to the incident and reﬂected beams. These sidebands will not be at the same frequency as the incident and reﬂected beams, but a deﬁnite phase relation will be there noneth-
eless. If we interfere these sidebands with the reﬂected beam, the sum will display a beat pattern at the modulation frequency, and we can measure the phase of this beat pattern. The phase of this beat pattern will tell us the phase of the reﬂected beam. The sidebands effectively set a phase standard with which we can measure the phase of the reﬂected beam.
C. Modulating the beam: Sidebands
I talked about varying the frequency of this beam in the qualitative model, but in practice it is easier to modulate the phase. The results are essentially the same, but the math that describes phase modulation is simpler than the math for frequency modulation. Phase modulation is also easy to implement with a Pockels cell, as shown in Fig. 3. After the beam has passed through the Pockels cell, its electric ﬁeld has its phase modulated and becomes
E incϭ E 0e i͑␻tϩ␤ sin ⍀t͒. We can expand this expression, using Bessel functions, to21
EincϷ͓ J0͑ ␤ ͒ϩ2iJ1͑ ␤ ͒sin ⍀t ͔ei␻t
ϭE0͓J0͑␤͒ei␻tϩJ1͑␤͒ei͑␻ϩ⍀͒tϪJ1͑␤͒ei͑␻Ϫ⍀͒t͔.
͑3.2͒
I have written it in this form to show that there are actually three different beams incident on the cavity: a carrier, with ͑angular͒ frequency ␻, and two sidebands with frequencies ␻Ϯ⍀. Here, ⍀ is the phase modulation frequency and ␤ is known as the modulation depth. If P0ϵ͉E0͉2 is the total power in the incident beam, then the power in the carrier is ͑neglecting interference effects for now͒
PcϭJ02͑ ␤ ͒P0 ,
and the power in each ﬁrst-order sideband is
PsϭJ12͑ ␤ ͒P0 .
When the modulation depth is small (␤Ͻ1), almost all of the power is in the carrier and the ﬁrst-order sidebands,
Pcϩ2PsϷP0 .
D. Reﬂection of a modulated beam: The error signal
To calculate the reﬂected beam’s ﬁeld when there are several incident beams, we can treat each beam independently and multiply each one by the reﬂection coefﬁcient at the

appropriate frequency. In the Pound–Drever–Hall setup, where we have a carrier and two sidebands, the total reﬂected beam is
ErefϭE0͓ F͑ ␻ ͒J0͑ ␤ ͒ei␻tϩF͑ ␻ϩ⍀ ͒J1͑ ␤ ͒ei͑␻ϩ⍀͒t
ϪF͑␻Ϫ⍀͒J1͑␤͒ei͑␻Ϫ⍀͒t͔.
What we really want is the power in the reﬂected beam, since that is what we measure with the photodetector. This is just Prefϭ͉Eref͉2, or after some algebra
Prefϭ Pc͉F͑ ␻ ͉͒2ϩ Ps͕͉F͑ ␻ϩ⍀ ͉͒2ϩ͉F͑ ␻Ϫ⍀ ͉͒2͖
ϩ2ͱPcPs͕Re͓F͑␻ ͒F*͑␻ϩ⍀ ͒
ϪF*͑␻ ͒F͑␻Ϫ⍀ ͔͒cos ⍀tϩIm͓F͑␻ ͒F*͑␻ϩ⍀ ͒
ϪF*͑␻ ͒F͑␻Ϫ⍀ ͔͒sin ⍀t͖ϩ͑2⍀ terms͒. ͑3.3͒
We have added three waves of different frequencies, the carrier, at ␻, and the upper and lower sidebands at ␻Ϯ⍀. The result is a wave with a nominal frequency of ␻, but with an envelope displaying a beat pattern with two frequencies. The ⍀ terms arise from the interference between the carrier and the sidebands, and the 2⍀ terms come from the sidebands interfering with each other.22
We are interested in the two terms that are oscillating at the modulation frequency ⍀ because they sample the phase of the reﬂected carrier. There are two terms in this expression: a sine term and a cosine term. Usually, only one of them will be important. The other will vanish. Which one vanishes and which one survives depends on the modulation frequency. In the next section we will show that at low modulation frequencies ͑slow enough for the internal ﬁeld of the cavity to have time to respond, o-
r ⍀Ӷ⌬␯fsr /F͒, F(␻)F*(␻ϩ⍀)ϪF*(␻)F(␻Ϫ⍀) is purely real, and only the cosine term survives. At high ⍀(⍀ӷ⌬␯fsr /F) near resonance it is purely imaginary, and only the sine term is important.
In either case ͑high or low ⍀͒ we will measure F(␻)F*(␻ϩ⍀)ϪF*(␻)F(␻Ϫ⍀) and determine the laser frequency from that.

E. Measuring the error signal

We measure the reﬂected power given in Eq. ͑3.3͒ with a high-frequency photodetector, as shown in Fig. 3. The output of this photodetector includes all terms in Eq. ͑3.3͒, but we are only interested in the sin(⍀t) or cos(⍀t) part, which we isolate using a mixer and a low-pass ﬁlter. Recall that a mixer forms the product of its inputs, and that the product of two sine waves is

sin͑

⍀

t

͒

sin͑

⍀

Ј

t

͒

ϭ

1 2

͕

cos͓

͑

⍀

Ϫ

⍀

Ј

͒

t

͔

Ϫ

cos͓

͑

⍀

ϩ

⍀

Ј

͒

t

͔

͖

.

If we feed the modulation signal ͑at ⍀͒ into one input of the mixer and some other signal ͑at ⍀Ј͒ into the other input, the output will contain signals at both the sum (⍀ϩ⍀Ј) and difference (⍀Ϫ⍀Ј) frequencies. If ⍀Ј is equal to ⍀, as is the case for the part of the signal we are interested in, then the cos͓(⍀Ϫ⍀Ј)t͔ term will be a dc signal, which we can isolate with a low-pass ﬁlter, as shown in Fig. 3.
Note that if we mix a sine and a cosine signal, rather than two sines, we get

sin͑⍀t ͒cos͑ ⍀Јt ͒ϭ 21͕sin͓͑ ⍀Ϫ⍀Ј͒t͔Ϫsin͓͑ ⍀ϩ⍀Ј͒t͔͖.

82

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

82

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

In this case, if ⍀ϭ⍀Ј our dc signal vanishes! If we want to measure the error signal when the modulation frequency is low we must match the phases of the two signals going into the mixer. Turning a sine into a cosine is a simple matter of introducing a 90° phase shift, which we can do with a phase shifter ͑or delay line͒, as shown in Fig. 3.
In practice, you need a phase shifter even when the modulation frequency is high. There are almost always unequal delays in the two signal paths that need to be compensated for to produce two pure sine terms at the inputs of the mixer. The output of the mixer when the phases of its two inputs are not matched can produce some odd-looking error signals ͑see Bjorklund7͒, and when setting up a Pound–Drever–Hall lock you usually scan the laser frequency and empirically adjust the phase in one signal pa-
th until you get an error signal that looks like Fig. 7.

IV. UNDERSTANDING THE QUANTITATIVE MODEL

A. Slow modulation: Quantifying the conceptual model

Let’s see how the quantitative model compares with our conceptual model, where we slowly dithered the laser frequency and looked at the reﬂected power. For our phase modulated beam, the instantaneous frequency is

d ␻͑t ͒ϭ dt ͑␻tϩ␤ sin ⍀t ͒ϭ␻ϩ⍀␤ cos ⍀t.

The reﬂected power is just Prefϭ P0͉F(␻)͉2, and we might expect it to vary over time as

P ref͑

␻

ϩ

⍀␤

cos

⍀

t

͒Ϸ

P ref͑

␻

͒ϩ

d Pref d␻

⍀

␤

cos

⍀t

d͉F͉2 Ϸ Pref͑ ␻ ͒ϩ P0 d␻ ⍀␤ cos ⍀t.

In the conceptual model, we dithered the frequency of the laser adiabatically, slowly enough that the standing wave inside the cavity was always in equilibrium with the incident beam. We can express this in the quantitative model by making ⍀ very small. In this regime the expression

F͑␻͒F*͑␻ϩ⍀͒ϪF*͑␻͒F͑␻Ϫ⍀͒

ͭ ͮ d

d͉F͉2

Ϸ2 Re F͑␻ ͒ d␻ F*͑␻ ͒ ⍀Ϸ d␻ ⍀,

which is purely real. Of the ⍀ terms, only the cosine term in Eq. ͑3.3͒ survives.
If we approximate ͱPcPsϷ P0␤/2, the reﬂected power
from Eq. ͑3.3͒ becomes
d͉F͉2 PrefϷ͑ constant terms͒ϩ P0 d␻ ⍀␤ cos ⍀t

ϩ͑2⍀ terms͒,

in agreement with our expectation from the conceptual model.
The mixer will ﬁlter out everything but the term that varies as cos ⍀t. ͑We may have to adjust the phase of the signal before we feed it into the mixer.͒ The Pound–Drever–Hall error signal is then

⑀ϭP0

d͉F͉2 d␻

⍀␤Ϸ2ͱPcPs

d͉F͉2 d␻

⍀.

Figure 6 shows a plot of this error signal.

B. Fast modulation near resonance: Pound–Drever– Hall in practice
When the carrier is near resonance and the modulation frequency is high enough that the sidebands are not, we can assume that the sidebands are totally reﬂected, F(␻Ϯ⍀) ϷϪ1. Then the expression
F͑␻ ͒F*͑␻ϩ⍀ ͒ϪF*͑␻ ͒F͑␻Ϫ⍀ ͒ϷϪi2 Im͕F͑␻ ͖͒, ͑4.1͒
is purely imaginary. In this regime, the cosine term in Eq. ͑3.3͒ is negligible, and our error signal becomes
⑀ϭϪ2ͱPcPs Im͕F͑␻ ͒F*͑␻ϩ⍀ ͒ϪF*͑␻ ͒F͑␻Ϫ⍀ ͖͒.
Figure 7 shows a plot of this error signal. Near resonance the reﬂected power essentially vanishes,
since ͉F(␻)͉2Ϸ0. We do want to retain terms to ﬁrst order in F(␻), however, to approximate the error signal,
PrefϷ2 PsϪ4ͱPcPs Im͕F͑ ␻ ͖͒sin ⍀tϩ͑ 2⍀ terms͒.

Fig. 6. The Pound–Drever–Hall error signal, ⑀/2ͱPcPs vs ␻/⌬␯fsr , when
the modulation frequency is low. The modulation frequency is about half a linewidth: about 10Ϫ3 of a free spectral range, with a cavity ﬁnesse of 500.

Fig. 7. The Pound–Drever–Hall error signal, ⑀/2ͱPcPs vs ␻/⌬␯fsr , when
the modulation frequency is high. Here, the modulation frequency is about 20 linewidths: roughly 4% of a free spectral range, with a cavity ﬁnesse of 500.

83

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

83

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

Fig. 8. Sidebands at ␻Ϯ⍀.

Fig. 9. The sum of the two sidebands shown in Fig. 8. This is the actual electric ﬁeld produced when the two sidebands interfere with each other. Note that the intensity oscillates at 2⍀.

Since we are near resonance we can write

␻

␦␻

⌬␯fsr ϭ2␲Nϩ ⌬␯fsr ,

where N is an integer and ␦␻ is the deviation of the laser

frequency from resonance. It is useful at this point to make

the approximation that the cavity has a high ﬁnesse F Ϸ␲/(1Ϫr2). The reﬂection coefﬁcient is then

i ␦␻ FϷ ␲ ␦␯ ,

where ␦␯ϵ⌬␯fsr /F is the cavity’s linewidth. The error signal is then proportional to ␦␻, and this approximation is good as long as ␦␻Ӷ␦␯,

⑀ϷϪ

4 ␲

ͱPcPs

␦␻ ␦␯

.

That the error signal is linear near resonance allows us to use the standard tools of control theory to suppress frequency noise. We will use this linear behavior later on to examine some fundamental noise limits. It will be useful for us to write the error signal in terms of the regular frequency f ϭ␻/2␲, instead of ␻, and deﬁne the proportionality constant between ⑀ and ␦ f ,

⑀ϭD␦f,

where the proportionality constant,

D

ϵ

Ϫ

8

ͱPc
␦␯

P

s

,

͑4.2͒

is called the frequency discriminant.

We can represent the electric ﬁelds of each beam by timevarying vectors in a complex plane that rotates along with the carrier at frequency ␻. We can choose this ‘‘moving reference frame’’ such that the incident carrier’s electric ﬁeld component always lies along the real axis. The part of the carrier that gets reﬂected from the Fabry–Perot cavity is also represented by a vector in this plane, as shown in Fig. 5, and near resonance it is given by

E

carrierϷ

i

ͱP

␦␻ c␲␦␯

.

The sidebands have different frequencies than the carrier, so they are represented by vectors that spin around in this reference frame. The upper (␻ϩ⍀) sideband has a higher frequency than the carrier, so its vector rotates counterclockwise in the plane with angular frequency ⍀. The lower side-

C. A conceptual model good for high modulation frequency
When the modulation frequency was low, we could picture the reﬂected power in the time domain and compare it with the modulation of the laser. At high modulation frequencies, we can still conceptualize the technique, but we will have to be a bit more subtle.

Fig. 10. Sidebands and the reﬂected carrier near resonance. The actual reﬂected beam is the coherent sum of these two ﬁelds. The small reﬂected carrier introduces an asymmetry in the intensity over its 2⍀ period, which produces a component that varies at ⍀. This ⍀ component is the beat signal between the carrier and the sidebands, and its sign tells you whether you are above resonance or below it.

84

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

84

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

band has a lower frequency and rotates clockwise at Ϫ⍀. ͑See Fig. 8.͒ The sum of the two sidebands, when they are
both completely reﬂected off the cavity, is a single vector that oscillates up and down along the imaginary axis. ͑See Fig. 9.͒ This ﬁeld is given by ͓see Eq. ͑3.2͔͒

EsidebandsϭϪi2ͱPs sin ⍀t.

The total ﬁeld reﬂected off the cavity is the vector sum of the reﬂected carrier and the two sidebands. ͑See Fig. 10.͒ We measure the intensity of this ﬁeld with the photodetector, and that is just the magnitude ͑squared͒ of the total ﬁeld,

P refϭ͉E carrierϩ E sidebands͉2

ͩ ͪ ϷPc

␦␻ ␲␦␯

2
ϩ 2 P sϪ 4 ͱP c P s

␦␻ ␲␦␯

sin ⍀t

Ϫ2 Ps cos 2⍀t.
The cross term proportional to sin ⍀t represents the beating of the sidebands with the reﬂected carrier, and its sign tells you which side of resonance you are on. The 2⍀ term is the result of the two sidebands beating together.
Now we are in a position to understand why the error signal is not limited by the bandwidth of the cavity. Whenever there is a phase mismatch between the promptly reﬂected ﬁeld and the leakage ﬁeld, we get an error signal. For very fast changes in the frequency of the incident ͑and promptly reﬂected͒ beam, the leakage beam acts as a stable reference, averaging both the frequency and the phase of the laser over the storage time of the cavity.2 If the promptly reﬂected beam ͑which provides an effect-
ively instantaneous measure of the incident beam͒ ‘‘hiccups,’’ i.e., jumps away from this average, the error signal will immediately register this jump, and the feedback loop can compensate for it. We are effectively locking the laser to a time average of itself over the storage time of the cavity.

V. NOISE AND FUNDAMENTAL LIMITS: HOW WELL CAN YOU DO?

A. Noise in various parameters

I have only talked about laser frequency so far, but it is a

straightforward exercise to extend this analysis in terms of

both frequency and cavity length. A little algebra shows that

the laser frequency and the cavity length are on equal foot-

ings near resonance. For high modulation frequencies,

ͭ ͮ ⑀ϭϪ8ͱPcPs

2LF ␭

␦f ␦L ϩ
fL

,

where ␦L is the deviation of the cavity length from resonance, analogous to ␦ f . All along I have been talking about
measuring the frequency noise of the laser and locking it to a quiet cavity, but we could have just as easily measured the length noise in the cavity ͑provided the laser was relatively quiet͒ and locked the cavity to the laser.
Note that it is not possible to distinguish laser frequency noise from cavity noise just by looking at the error signal. One naturally wonders what other noise sources contribute to the error signal. It is a straightforward exercise to show that none of the following contribute to the error signal to ﬁrst order: variation in the laser power, response of the photodiode used to measure the reﬂected signal, the modulation depth ␤, the relative phase of the two signals going into the mixer, and the mo-
dulation frequency ⍀. The system is in-

sensitive to each of these because we are locking on resonance, where the reﬂected carrier vanishes. This causes all of these ﬁrst-order terms to vanish in a Taylor expansion of the error signal about resonance. ͑A good treatment of optically related noise sources in a gravitational-wave detector can be found in Ref. 23.͒
The system is ﬁrst-order sensitive to ﬂuctuations in the sideband power at the modulation frequency ⍀. Most noise sources fall off as frequency increases, so we can usually reduce them as much as we want by going to a high enough modulation frequency. There is one noise source, however, that does not trail off at high frequencies, and that is the shot noise in the reﬂected sidebands. Shot noise has a ﬂat spectrum, and for high enough modulation frequencies it is the dominant noise source.

B. Shot noise limited resolution

Any noise in the error signal itself is indistinguishable from noise in the laser’s frequency. There is a fundamental limit to how quiet the error signal can be, due to the quantum nature of light.24
On resonance, the reﬂected carrier will vanish, and only the sidebands will reﬂect off the cavity and fall on the photodetector. These sidebands will produce a signal that oscillates at harmonics of the modulation frequency. Calculating the shot noise in such a cyclostationary signal is fairly subtle,25 but for our purposes we may estimate it by replacing this cyclostationary signal with an averaged, dc signal. The average power falling on the photodiode is approximately Prefϭ2 Ps . The shot noise-
 in this signal has a ﬂat spectrum with spectral density of
ͱ hc
Seϭ 2 ␭ ͑2Ps͒.

Dividing the error signal spectrum by D gives us the apparent frequency noise,

ͱhc3 1 S f ϭ 8 FLͱ␭ Pc .

Since you can’t resolve the frequency any better than this,

you can’t get it any more stable than this by using feedback

to control the laser. Note that the shot noise limit does not

explicitly depend on the power in the sidebands, as you might expect. It only depends on the power in the carrier.26

It’s worth putting in some numbers to get a feel for these

limits. For this example we will use a cavity that is 20 cm

long and has a ﬁnesse of 104, and a laser that operates at 500

mW with a wavelength of 1064 nm. If the cavity had no

length noise and we locked the laser to it, the best frequency

stability we could get would be

ͩ ͪ ͱ Sfϭ

1.2ϫ

10Ϫ

5 Hz
ͱHz

104 20 cm FL

1064 nm 500 mW

␭

. Pc

The same shot noise would limit your sensitivity to cavity length if you were locking the cavity to the laser. In this case, the apparent length noise would be

L ͱhc ͱ␭

SLϭ f S f ϭ 8 FͱPc .

͑5.1͒

For the example cavity and laser we used above, this would be

85

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

85

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

ͩ ͪ ͱ SLϭ

8.1ϫ 10Ϫ 21ͱmHz

104 F

␭ 500 mW 1064 nm Pc .

ACKNOWLEDGMENTS
Many thanks go to Ken Libbrecht for patiently supporting me while I worked on this paper, and to Stefan Seel for helping me implement my ﬁrst Pound–Drever–Hall lock. I also thank Ron Drever for wonderful insight and some very interesting discussions and Stan Whitcomb and David Shoemaker for carefully reading and reviewing this manuscript. This work was supported by the National Science Foundation as part of the LIGO project, Grant No. PHY98-01158.

APPENDIX A: A PROOF OF THE CIRCLE THEOREM

For the general case of a Fabry–Perot cavity with lossy

mirrors, the reﬂection coefﬁcient is

ͩ ͪ F

ϭ

Ϫ

r

1

ϩ

r

2

͑

r

2 1

ϩ

t

2 1

͒

exp i ␻

␻ ⌬ ␯ fsr

.

ͩ ͪ 1Ϫr1r2exp i ⌬␯fsr

Here, r1 and t1 are the amplitude reﬂection and transmission coefﬁcients of the input mirror, and r2 is the amplitude reﬂection coefﬁcient of the end mirror. ͑Note that the reﬂection
coefﬁcient does not depend on the transmission of the end mirror!͒ It is straightforward algebra to show that F satisﬁes
the equation of a circle:

͉F͑␻͒ϪZ0͉2ϭR2

for all ␻. Z0 and R are both real and are given by

Z

0ϭ

Ϫ

1

r1

Ϫ

r

2 1

r

2 2

͓

1

Ϫ

r

22͑

r

2 1

ϩ

t

2 1

͒

͔

and

Rϭ

t

2 1

r

2

1

Ϫ

r

12r

2 2

.

If this circle intersects the origin ͑i.e., the reﬂected intensity vanishes on resonance͒ then the cavity is said to be critically
coupled. The requirement for critical coupling is that R ϭ͉Z0͉, or

r

1

͓

1

Ϫ

r

22͑

r

12 ϩ

t

2 1

͒

͔

ϭ

t

2 1

r

2

.

͑A1͒

Our lossless, symmetric cavity had r1ϭr2ϵr, t1ϭt2ϵt, r2ϩt2ϭ1, and satisﬁed the conditions for critical coupling. A lossy, asymmetric cavity can also be critically coupled, provided its mirror parameters satisfy Eq. ͑A1͒, which can be rewritten as

ͱ r

2

ϭ

t

2 1

ϩ

t

14 ϩ

4

r

2 1

͑

r

2 1

ϩ

2

r

1͑

r

2 1

ϩ

t

2 1

͒

t

2 1

͒

.

Other cases, known as undercoupling and overcoupling, are illustrated along with critical coupling in Fig. 11. Overcoupling plays a central role in interferometric gravitationalwave detectors and can be achieved by making the end mirror much more reﬂective than the near mirror (t2Ӷt1).

APPENDIX B: OPTIMUM MODULATION DEPTH

It is sometimes useful to maximize the slope of the error

signal D ͓recall Eq. ͑4.2͔͒. This slope is a measure of the

sensitivity of the error signal to ﬂuctuations in the laser fre-

quency ͑or cavity length͒. One example of when you might

need a high sensitivity in this discriminant is if you need a

large gain in the feedback loop.

The discriminant D depends on the cavity ﬁnesse, the laser

wavelength, and the power in the sidebands and the carrier.

Experimental details usually restrict your ﬁnesse and wave-

length choices, but you often have quite a bit of freedom in

adjusting the sideband power. The question I want to address

in this section is this: How does D depend on the sideband

power?

D is proportional to the square root of the product of the

sideband and carrier power. ͓See Eq. ͑4.2͒.͔ This has a very

simple form when Pcϩ2 PsϷ P0 , i.e., when negligible

power goes into the higher order sidebands,

ͱ ͱͩ ͪ DϰͱPcPsϷ

P0 2

1Ϫ Pc Pc. P0 P0

A plot of D in this approximation against Pc / P0 traces out
the top half of a circle, with a maximum at Pc / P0ϭ1/2. ͑See Fig. 12.͒ It is useful to express the power in the sidebands

Fig. 11. Plots of F in the complex plane for various couplings. Only for the impedance matched case does the reﬂected intensity vanish on resonance.

Fig. 12. An approximate plot of D, the slope of the error signal near reso-
nance, vs Ps / Pc . The optimum value is at Ps / Pcϭ1/2, and the maximum is very broad.

86

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

86

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

relative to the power in the carrier, and this gives

P P

s c

ϭ

1 2

.

D is maximized when the power in each sideband is half the power in the carrier, and this maximum is fairly broad.
If you want do a more careful analysis, write D in terms of the Bessel functions of the modulation depth and ﬁnd its maximum. You’ll ﬁnd the optimum modulation depth to be ␤ϭ1.08, and you’ll come up with essentially the same answer as with the simple estimate:

Ps ϭ0.42. Pc

1R. W. P. Drever et al., ‘‘A Gravity-Wave Detector Using Optical Cavity
Sensing,’’ in Proceedings of the Ninth International Conference on Gen-
eral Relativity and Gravitation, Jena, July 1980, edited by E. Schmutzer ͑Cambridge U.P., Cambridge, 1983͒, pp. 265–267. 2R. W. P. Drever et al., ‘‘Laser phase and frequency stabilization using an
optical resonator,’’ Appl. Phys. B: Photophys. Laser Chem. 31, 97–105 ͑1983͒. 3A. Abromovici et al., ‘‘LIGO: The laser interferometer gravitational-wave observatory,’’ Science 256, 325–333 ͑1992͒. 4S. Seel, R. Storz, G. Ruoso, J. Mlynek, and S. Schiller, ‘‘Cryogenic optical
resonators: A new tool for laser frequency stabilization at the 1 Hz level,’’ Phys. Rev. Lett. 78 ͑25͒, 4741–4744 ͑1997͒. 5L. A. Rawley et al., ‘‘Millisecond Pulsar PSR 1937ϩ21: A Highly Stable Clock,’’ Science 238, 761–765 ͑1987͒. 6Axel Schenzle, Ralph G. DeVoe, and Richard G. Brewer, ‘‘Phasemodulation laser spectroscopy,’’ Phys. Rev. A 25, 2606–2621 ͑1982͒. 7G. C. Bjorklund et al., ‘‘Frequency Modulation ͑FM͒ Spectroscopy:
Theory of Line shapes and Signal-to-Noise Analysis,’’ Appl. Phys. B: Photophys. Laser Chem. 32, 145–152 ͑1983͒. 8Gary C. Bjorklund, ‘‘Frequency-modulation spectroscopy: A new method
for measuring weak absorptions and dispersions,’’ Opt. Lett. 5, 15–17 ͑1980͒. 9R. V. Pound, ‘‘Electronic Frequency Stabilization of Microwave Oscillators,’’ Rev. Sci. Instrum. 17, 490–505 ͑1946͒.

10R. A. Boyd, J. L. Bliss, and K. G. Libbrecht, ‘‘Teaching physics with
670-nm diode lasers—experiments with Fabry–Perot cavities,’’ Am. J.
Phys. 64, 1109–1116 ͑1996͒. 11Eugene Hecht, Optics ͑Addison–Wesley, Reading, MA, 1998͒. 12Grant R. Fowles, Introduction to Modern Optics ͑Dover, New York,
1975͒. 13G. F. Franklin, J. D. Powell, and A. Emami-Naeni, Feedback Control of
Dynamic Systems ͑Addison–Wesley, Reading, MA, 1987͒. 14B. Friedland, Control System Design: An Introduction to State Space
Methods ͑McGraw–Hill, New York, 1986͒. 15H. Kogelnik and T. Li, ‘‘Laser beams and resonators,’’ Appl. Opt. 5,
1550–1567 ͑1966͒. 16A. E. Siegman. Lasers ͑University Science Books, Mill Valley, CA,
1986͒. 17Amnon Yariv, Optical Electronics in Modern Communications ͑Oxford
U.P., New York, 1997͒. 18Peter R. Saulson, Fundamentals of Interferometric Gravitational Wave
Detectors ͑World Scientiﬁc, Singapore, 1994͒. 19R. L. Barger, M. S. Sorem, and J. L. Hall, ‘‘Frequency stabilization of a
cw dye laser,’’ Appl. Phys. Lett. 22, 573–575 ͑1973͒. 20The Pockels cell actually modulates the laser’s phase, but the distinction
between phase and frequency modulation is irrelevant for the conceptual
model. 21The reader who doesn’t like Bessel functions will ﬁnd that the small angle
expansion, EincϷE0͓ 1ϩi␤ sin ⍀t͔ei␻tϭE0͓1ϩ(␤/2)(ei⍀tϪeϪi⍀t) ͔ei␻t works just about as well. 22There may also be some contribution from higher order terms that we neglected when we expanded ei(␻tϩ␤ sin ⍀t) in terms of Bessel functions. These may make a signiﬁcant contribution to the 2⍀ term, but we do not
need to consider them in this tutorial. 23J. B. Camp, H. Yamamoto, S. E. Whitcomb, and D. E. McClelland,
‘‘Analysis of Light Noise Sources in a Recycled Michelson Interferometer with Fabry–Perot Arms,’’ J. Opt. Soc. Am. A ͑to be published͒. 24You can get around this quantum limit to some extent by squeezing the
light, but that is beyond the scope of this article. 25T. T. Lyons, M. W. Regehr, and F. J. Raab. ‘‘Shot Noise in Gravitational-
Wave Detectors with Fabry–Perot Arms’’ ͑unpublished͒. 26The shot noise limit does depend implicitly on the power in the sidebands,
since Pcϭ P0Ϫ Ps , but this is a relatively minor effect.

GRAND CANYON BOATWOMAN
Lorna ͓Corson͔ rows gracefully and likes being in control. Her least-favorite rapid is unpredictable Granite. ‘‘It’s sloppy, there’s no ﬁnesse.’’ Lorna’s favorite rapid is Deubendorff at low water, when you have to make an exact entry or risk smashing into black fang rocks disguised as foam at the bottom. ‘‘I love reading the water, estimating what you think it will do, getting your angles right, and ﬁnding out how close your calculations were—just the physics of water.’’
Louise Teal, Breaking into the Current: Boatwoman of the Grand Canyon ͑University of Arizona Press, Tucson, 1994͒, p. 130.

87

Am. J. Phys., Vol. 69, No. 1, January 2001

Eric D. Black

87

This article is copyrighted as indicated in the abstract. Reuse of AAPT content is subject to the terms at: http://scitation.aip.org/termsconditions. Downloaded to IP:

143.107.229.160 On: Wed, 20 Nov 2013 21:09:58

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:56.701Z
- **Text Length:** 42558 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
