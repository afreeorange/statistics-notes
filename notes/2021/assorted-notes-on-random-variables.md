---
title: Assorted Notes on Independence
date: 2021-02-28 14:02:36
tags:
    - random variables
    - probability
    - 6644
    - notes
    - lists
    
---

## Covariance

$Cov(X, Y) \equiv \sigma_{XY} \equiv \text{Expectation of } (X - E[X]) \times (Y - E[Y])$

Important: Independence implies Zero Covariance. _The reverse is not always true!_

---

👉 _Whether or not_ variables $X_{i}$ are independent,

$E[X + Y] = E[X] + E[Y]$

and generally,

$E[\sum_{i=1}^n{X_{i}}] = \sum_{i=1}^n{E[X_{i}]}$ 

---

But if RV's _are_ independent, you can

* Multiply their Expected Values: $E[XY] = E[X]E[Y]$
* Add their variances: $Var(X + Y) = Var(X) + Var(Y)$

Here's a special one:

$$
    Var[\sum{a_iX_i + b_i}] = \sum{a_i^2 Var[X_i]}
$$

Note that $Var(a_iX_i + b_i) = Var(a_iX_i) + Var(b+i) = a^2Var(X_i)$
