# PDF Document: Lloyd - 2025 - Thermodynamics + Natural Selection = Bayesian Inference.pdf

**File Path:** Lloyd - 2025 - Thermodynamics + Natural Selection = Bayesian Inference.pdf

**Processed Date:** 2026-02-10T18:16:58.754Z

**File Size:** 135.26 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3666

**Title:** Thermodynamics + Natural Selection = Bayesian Inference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Cambridge, November 13th 2025
Thermodynamics + Natural Selection = Bayesian Inference
Seth Lloyd, MIT
Abstract: Consider a population of organisms that harvest free energy from their envi
ronment to reproduce. This paper shows that if the organisms’ reproductive rates are
proportional to the amount of physical free energy that they can convert into reproductive
work, then the implicit probabilities that the organisms assign to environmental states are
updated according to Bayes’ rule.
Free energy is energy that is available to do work [1-7]. Living organisms harvest free
energy from their environment and use that free energy to perform biochemical work. The
goal of this paper is to make mathematically rigorous the intuition that a system that
has a better model of its environment ought to be able to harvest more free energy, to
perform more biochemical work more efficiently, and to reproduce more. A photosynthetic
organism that produces a pigment that is sensitive to light at a new frequency, or animal
that can produce an enzyme that allows it to metabolize a previously indigestible molecule,
can convert more free energy to work and gains a potential reproductive advantage over
its competitors.
Consider a population of self-reproducing organisms that interact with a non-equilibrium
subsystem of the environment together with a thermal bath to convert free energy into
work. Although the organisms do not explicitly estimate the probabilities of the states
of the non-equilibrium system, we show that – based on the actions an organism takes to
convert free energy to work – each organism possesses an implicit model of the physical
probabilities. We show that an organism with a better implicit model can convert more
free energy to work: the free energy lost due to an inaccurate model is proportional to
1
arXiv:2511.17641v1 [q-bio.PE] 19 Nov 2025

relative entropy between the actual, physical probabilities and the probabilities as pre
dicted by the model. But this relative entropy can be shown to be the same quantity that
governs the growth rate of a population of models that perform Bayesian inference [3-7].
As a consequence, if the growth rate of an organism/model is proportional to the amount
of free energy the organism can convert to reproductive work, the population as a whole
effectively performs Bayesian inference.
Organisms that perform Bayesian inference maximize the conversion of free energy
into work. Organisms that maximize the conversion of free energy into work perform
Bayesian inference.
1. Free energy and dissipation
Consider a system whose states x have energies Ex. If the probabilities for the states
x are p(x), then the amount of work that can be extracted from the system via adjusting
the energies Ex and by interacting with a bath at temperature T is equal to the difference
between the system’s non-equilibrium free energy
F=
∑
x
p(x)Ex − T (−
∑
x
p(x) ln p(x)) = E − T S (1)
and its equilibrium free energy
Feq =
∑
x
pth(x)Ex − T (−
∑
x
pth(x) ln pth(x)), (2)
where pth(Ex) = (1/Z(T ))e−Ex/T are the Boltzmann-Gibbs thermal probabilities and
Z(T ) = − ∑
x e−Ex/T is the partition function (we work in units where Boltzmann’s con
stant is 1).
The work that can be extracted from a sequence of adiabatic/entropy-preserving steps
and isothermal steps (as in the Carnot process) is then [1]
W = F − Feq = T D(p||pth) (3)
where D(p||pth) = − ∑
x p(x) ln pth(x)/p(x) is the relative entropy/Kullbach-Leibler dis
tance between p(x) and pth(x). For example, the work W can be extracted by first per
forming an adiabatic/isentropic quench that changes the energies Ex to E′x = −T ln p(x),
so that the new energy for the state x is equal to its thermal probability at temperature T .
We then isothermally restore the energies to their original values [1]. This process extracts
the work given by equation (3).
2

The adiabatic/isentropic steps of the work extraction process are energy and en
tropy conserving. However, extra dissipation arises when during the isothermal step if
one changes the energies to the ‘wrong’ values E′x′ 6= −T ln p(x). The choice of energies E′′
defines implicit probabilities q(x) = − ln E′x′/T : q(x) are the probabilities which – if they
were equal to p(x) – would result in the maximal conversion of free energy to work.
When the implicit probabilities q(x) are not equal to the physical probabilities p(x)
the free energy dissipated when the – now non-thermal – state is put into contact with the
thermal bath and comes to equilibrium is
∆Flost = Fq − Fp =
∑
x
p(x)E′′
x −TS −(
∑
x
p(x)E′
x − T S) = T D(p‖q). (4)
That is, the loss of free energy/work arising from an incorrect estimate of the actual
physical probabilities when putting the system in contact with the thermal bath is equal
the temperature times the relative entropy between the physical probabilities and the
implicit probabilities.
(2) Natural selection and Bayesian inference
Consider a population of reproducing organisms. Each organism has access to a non
equilibrium subsystem of the environment with states x, physical probabilities p(x), and
energies Ex as above. The organism uses a sequence of adiabatic and isothermal steps to
convert free energy into work: each organism can interact with the system by changing
the energies of its states, and by putting it in contact with a thermal bath at temperature
T . After the interaction is completed, the energies of the system’s states are returned to
their initial, non-interacting values.
Assume that the rate of reproduction of an organism that adopts a particular free
energy conversion strategy is proportional to the amount of free energy it is able to convert
into work. The free energy extraction process is repeated multiple times. We now show
that the population of organisms as a whole performs Bayesian inference, in the sense
that the implicit probabilities q(x) that the population assigns to the states x are updated
according to Bayes’s rule [3-7].
First, review the dynamics of a such a population of organisms under Bayes rule, with
out any thermodynamic considerations. Let q(m) be the fraction of of the self-replicating
population that possess a probabilistic model m that assigns probabilities q(x|m) to the
states x of the environment during the free energy conversion process as described above.
3

Let q0(m) the prior probability of the model m. When the environment is found to have
state x, the prior probability q0(m) is updated to its posterior probability q(m|x) according
to Bayes’s rule [3-7]:
q(m|x)
q0(m) = q(x|m)
q(x) , (5)
where q(x) = ∑
m q0(m)q(x|m) is the ensemble prediction for the state x, averaged over
the ensemble.
Now look at the expected growth rates for different models over multiple rounds of
Bayesian inference. Taking the logarithm of equation (2), and averaging the over the
physical probabilities p(x), we find that m’s average growth rate is
∑
x
p(x) ln q(m|x)/q0(m) =
∑
x
p(x) ln q(x|m)/q(x) = −D(p(x)‖q(x|m)) + D(p(x)‖q(x)).
(6)
That is, the average growth rate of model m is given by the relative entropy between
the true probabilities p(x) and the ensemble prediction q(x), minus the relative entropy
between the true probabilities and the probabilities q(x|m) predicted by the model m.
Models whose predicted probabilities q(x|m) are closer to the actual physical probabilities
p(x), as measured by smaller relative entropy, have a larger average growth rate, and will
in time come to dominate the population.
Comparing equations (4) and (6), we see that the penalty in growth rate for organisms
with model m is equal the one over the temperature times the extra dissipation in free
energy that such an organism suffers from assigning probabilities q(x|m) that do not match
the physical probabilities p(x): both are equal to the relative entropy between the physical
probabilities and model’s probabilities. More precisely, the growth rate of organism with
model m minus the average growth rate over the population, is equal to the free energy
converted to work by the organism minus the average free energy converted to work by
the population as a whole, divided by the temperature.
This equality is our main result: an organism’s efficiency in converting free energy to
work, divided by the temperature, is equal the growth rate of the organism compared with
the overall population when the population is performing Bayesian inference.
3. Remarks
(I) The results above were derived for classical probabilities. The quantum version can be
obtained simply by substituting in the density matrix ρ for the non-equilibrium system,
4

and considering models that give predicted density matrices σ. All the results still hold,
but now in terms of the quantum relative entropy D(ρ‖σ)− = trρ(σ − ρ) and thermal
Hamiltonians of the form Hth = −T ln ρ. In the quantum case, in addition to changing the
energies of the system to match the thermal probabilities, the organism must also match the
energy eigenstates |Ej〉 of Hth to the eigenstates of ρ. Let ρ ̃ = ∑
j |Ej〉〈Ej|ρ|Ej〉〈Ej|. An
inaccurate estimate of the energy eigenstates of the quantum system will incur additional
dissipation T D(ρ‖ρ ̃) due to decoherence during the thermal quench step above.
(II) The results here concern the physical free energy, defined in terms of D(p‖q), not
Friston’s variational free energy [8], which is defined in terms of the relative entropy D(q‖p)
(see, e.g., [6]). Although the two relative entropies have the same fixed point, they are
not in general equal. Physical free energy, not variational free energy, is the quantity that
governs the ability of an organism to convert free energy to work.
(III) The derivations above assumed that the environment has no memory. The results
are easily extended to correlated sequences of states governed by physical probabilities
p(x1 . . . xn) and estimated probabilities q(x1xn . . .) over multiple rounds of work extraction,
where xj is the state of the subsystem at the j’th round. As long as p(x1 . . . xn) is stationary
and ergodic, then both the amount of free energy converted to work and the growth rate
of organisms/models performing Bayesian inference are governed by the relative entropy
D(p‖q) over sequences of states.
4. Discussion
Free energy and Bayesian inference are both intimately related to relative entropy. In
this paper, we showed that the extra energy dissipation associated with having an incorrect
model of environmental probabilities is proportional to the temperature times the relative
entropy between the actual physical probabilities and the model probabilities. But the
same relative entropy also governs the penalty in growth rate for a model in a population
performing Bayesian inference. Consequently, if the reproductive rate of an organism is
proportional to the amount of free energy it can convert into work, a population of organism
evolving under natural selection performs Bayesian inference. Thermodynamics + Natural
selection = Bayesian inference.
5

Acknowledgements: The author thanks Michele Reilly, Sam Gershman, and Jordan Horowitz
for helpful discussions. This material is based upon work supported by, or in part by, the
U. S. Army Research Laboratory and the U. S. Army Research Office under contract/grant
number W911NF2310255, and by DoE under contract, DE-SC0012704.
References:
[1] J.M.R. Parrondo, J.M. Horowitz, T. Sagawa, ‘Thermodynamics of Information,’ Nat.
Phys. 11, 131 (2015).
[2] A. Kolchinsky, I. Marvian, C. Gokler, Z.-W. Liu, P. Shor, O. Shtanko, K. Thompson, D.
Wolpert, S. Lloyd, ‘Maximizing free energy gain,’ Entropy 27 91 (2025); arXiv: 1705.00041
(2017).
[3] Marc Harper, ‘The replicator equation as an inference dynamic,’ arXiv: 0911.1763v3
(2010).
[4] J.C. Baez and B.S. Pollard, ‘Relative entropy in biological systems,’ Entropy 18, 46
(2016).
[5] Martin Nowak, ‘Evolutionary Dynamics: Exploring the Equations of Life,’ Belknap
Press of Harvard University Press, Cambridge 2006.
[6] S.J. Gershman, ‘What does the free energy principle tell us about the brain?’ arXiv:
1901.07945 (2019).
[7] T.M. Cover, J.A. Thomas, Elements of Information Theory, 2nd edition, Wiley 2006
[8] K. Friston Nat. Rev. Neuro. 11, 127-138 (2010).
6

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:58.754Z
- **Text Length:** 12208 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
