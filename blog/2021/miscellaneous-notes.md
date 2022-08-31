---
title: Miscellaneous Notes
date: 2021-11-14 12:40:03
tags:
    - notes
    - crossvalidation
    - regression
    
---

When you are in a contest and are given Training data and Test data, and the Training data has labels/responses but (for obvious reasons) the Test data doesn't, you can only work with the Training data. This is now 'Data' that you split into Training/Test sets right? Well, the 'Test' set is called an 'Evaluation' set by a lot of people. Makes sense that it would be a separate word. The _real_ Test set cannot and should not be a part of the Training set. So yeah, they call it an Evaluation set.

* Categorical = binary, ordinal, and nominal predictors/features
* Tuning the parameters is **Training**
* Confusingly enough, "**Tuning parameters**" are parameters that are _not_ estimated! They are sort of guessed, really. Like in Ridge Regression.
  * You use Cross-Validation to figure out the best value for this tuning parameter.
* When you use a single observation/datapoint to test and all others to train, this is called "**Leave One Out Cross-Validation**"
* _Typically_, you do 10-fold Cross-Validation
* In Math terms,
  * A point is a "flat affine 0-dimensional subspace"
  * A line is a "flat affine 1-dimensional subspace"
  * A plane is a "flat affine 2-dimensional subspace"
  * Typically, and when we say "hyperplane" we are talking about 4+ dimensions. It is a "flat affine subspace"
  * _Technically_ though, all "flat affine subspaces" are hyperplanes!

Dot products and transposes between two vectors:

$$
X \cdot Y = X^TY
$$

### Questions

* Cross-Validation: Do you do this on _all_ the data? Or k-fold on the training only?

$$
K(x,y) = \Phi(x) \cdot \Phi(y) = \Phi(x)^T\Phi(y)
$$

* Do you impute train and test data? The world appears to be split about this. There is a very good point about how
your model can say something about the underlying data collection process. People in contests appear to do both. What's the right approach? Mathematically?

---

* Feature
* Label
* Predictor
* Response

---

[Actual data science here](https://www.drivendata.co/blog/predict-flu-vaccine-data-benchmark/). This was the Flu Vaccine prediction thing...

### Imputation

https://stats.idre.ucla.edu/r/faq/how-do-i-perform-multiple-imputation-using-predictive-mean-matching-in-r/

http://dept.stat.lsa.umich.edu/~jerrick/courses/stat701/notes/mi.html

[The things MICE in R can do](https://stefvanbuuren.name/fimd/sec-modelform.html)

[Missing Values in Clinical Research: Multiple Imputation](https://nerler.github.io/EP16_Multiple_Imputation/slide/07_convergence_and_diagnostics.pdf)

https://datascienceplus.com/imputing-missing-data-with-r-mice-package/

[What is considered to be leakage in imputation?](https://www.kaggle.com/c/titanic/discussion/37730)

https://www.ncbi.nlm.nih.gov/books/NBK493614

http://www.math.chalmers.se/Stat/Grundutb/GU/MSA650/S09/Lecture5.pdf

https://stefvanbuuren.name/fimd/sec-MCAR.html

### Variable Selection

[Algorithms for automatic model selection](https://stats.stackexchange.com/questions/20836/algorithms-for-automatic-model-selection/20856#20856)

[Don't use p-values. Use shit like AIC instead.](https://www.stat.cmu.edu/~cshalizi/mreg/15/lectures/26/lecture-26.pdf)

### Other

https://www4.stat.ncsu.edu/~post/josh/LASSO_Ridge_Elastic_Net_-_Examples.html

### Logistic Regression

[Cannot handle NA values. What do you do?](https://stats.stackexchange.com/questions/46692/how-the-na-values-are-treated-in-glm-in-r)


### Multicollinearity

https://statisticsbyjim.com/regression/multicollinearity-in-regression-analysis/

### RMSE

https://stats.stackexchange.com/a/288809

RMSE of test > RMSE of train => OVER FITTING of the data.
RMSE of test < RMSE of train => UNDER FITTING of the data.

https://daviddalpiaz.github.io/r4sl/regression-for-statistical-learning.html

Specifically, we say that a model is overfitting if there exists a less complex model with lower Test RMSE. Then a model is underfitting if there exists a more complex model with lower Test RMSE.

https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html

Your model is underfitting the training data when the model performs poorly on the training data. This is because the model is unable to capture the relationship between the input examples (often called X) and the target values (often called Y). Your model is overfitting your training data when you see that the model performs well on the training data but does not perform well on the evaluation data. This is because the model is memorizing the data it has seen and is unable to generalize to unseen examples.

https://qr.ae/pGlwkF


| Transform |  R^2   | Training MSE/RMSE | Test MSE/RMSE |
|-----------|--------|-------------------|---------------|
| $log(x)$  | asdasd |                   |               |
|           |        |                   |               |
