---
title: Simple R Code that Illustrates the Inverse Transform Theorem
date: 2021-04-04 12:54:58
tags:
    - inverse transform theorem
    - 6644
    - code
    - r

---

by Michael Kuehn

```r
set.seed(1)
n <- 1e6

# Exponential
X <- rexp(n, rate = 1)
hist(X)
FX <- 1- exp(-X)
hist(FX)

# Using built-in CDF
FX <- pexp(X, rate = 1)
hist(FX)

# Normal
X <- rnorm(n, mean = 0, sd = 1)
hist(X)
FX <- pnorm(X, mean = 0, sd = 1)
hist(FX)

# t
X <- rt(n, df = 10)
hist(X)
FX <- pt(X, df = 10)
hist(FX)

# Cauchy
X <- rcauchy(n, location = 0, scale = 1)
hist(X, freq = F, breaks = "FD", xlim=c(-15,15))
FX <- pcauchy(X, location = 0, scale = 1)
hist(FX)

# Weibull
X <- rweibull(n, shape = 2, scale = 2)
hist(X)
Fx <- pweibull(X, shape = 2, scale = 2)
hist(FX)

# Gamma
X <- rgamma(n, shape = 3)
hist(X)
FX <- pgamma(X, shape = 3)
hist(FX)
```
