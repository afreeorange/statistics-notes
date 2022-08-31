---
title: Why Add Variances?
date: 2021-02-07 11:23:39
tags:
    - variance
    - probability
    - intuition

---

If $Var(aX) = a^2Var(X)$, then

$X - Y = X + (-Y)$

$\implies Var(X - Y) = (1)^2Var(X) + (-1)^2Var(Y) = Var(X) + Var(Y)$

$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$

But why is this additive?

> We buy some cereal. The box says “16 ounces.” We know that’s not precisely the weight of the cereal in the box, just close. After all, one corn flake more or less would change the weight ever so slightly. Weights of such boxes of cereal vary somewhat, and our uncertainty about the exact weight is expressed by the variance (or standard deviation) of those weights.
>
> Next we get out a bowl that holds 3 ounces of cereal and pour it full. Our pouring skill is not very precise, so the bowl now contains about 3 ounces with some variability (uncertainty).
>
> How much cereal is left in the box? Well, we assume about 13 ounces. But notice that we’re less certain about this remaining weight than we were about the weight before we poured out the bowlful. The variability of the weight in the box has increased even though we subtracted cereal.
>
> Moral: Every time something happens at random, whether it adds to the pile or subtracts from it, uncertainty (read “variance”) increases.
> 
> -- [Source](https://apcentral.collegeboard.org/courses/ap-statistics/classroom-resources/why-variances-add-and-why-it-matters)