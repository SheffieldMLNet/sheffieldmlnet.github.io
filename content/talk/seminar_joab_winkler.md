+++
title = "Condition Estimation of Linear Algebraic Equations and its Application to Regression and Feature Selection"
authors = ["Joab Winkler, University of Sheffield"]
date = 2019-02-25T09:01:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-03-04T15:00:00Z
time_end = 2019-03-04T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Main Lewin (COM-G12)"

# Seminar host
host="Eleni Vasilaki"

# Is this a selected talk? (true/false)
selected = false

tags = ["seminar"]

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = ""

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

## Abstract
Regression and feature selection occur frequently in machine learning, pattern recognition and statistics.These problems yield a linear algebraic equation $Ax = b$, $A \in R^{m\times n}$, $rank(A) = \min(m, n)$, where $m>n$ in regression and $m < n$ in feature selection. It is often claimed that regularisation must be applied when regression is performed in order to minimise the adverse effects of noise in $b$. This is incorrect and the criterion for determining if regularisation is, or is not, needed requires that the interaction of $A$ and $b$ be considered. It will be shown that for a given matrix $A$, and therefore a given set of basis functions and independent variables $x_i$, $i = 1,\ldots, n$, there exist vectors $b = b_1$ for which the solution $x$ is very stable with respect to a change in $b$, and there also exist vectors $b = b_2$ for which $x$ is very unstable with respect to a change in $b$ and regularisation must, therefore, be applied. It will be shown that the difference between the properties of $b_1$ and $b_2$ can be explained geometrically by considering the left singular matrix $U$ of the SVD $USV^T$ of $A$. This leads to a discussion of the condition number $\kappa(A)$ of $A$ and its disadvantages for the determination of the stability of $x$ due to a change in $b$. A more refined measure of the stability of $Ax = b$ is discussed and it is shown that it distinguishes between the cases defined by $b = b_1$ and $b = b_2$.

The equation $Ax = b$ is underdetermined in feature selection and it, therefore, has an infinite number of solutions. A unique solution is imposed by posing the problem as a constrained minimisation, and the lasso and elastic net are used to solve this constrained minimisation problem. These methods impose sparsity on the solution $x$ and they have termed regularisation methods because they improve the prediction accuracy on new data and they allow improved characterisation of the system being considered. They yield approximate solutions to $Ax = b$, but the error in these approximate solutions has not been considered and computational experiments are required to determine the regularisation parameters, that is, the degree with which the constraints are imposed on the solution.

This talk will describe a new method for the solution of the problem of feature selection. In particular, the matrix $A$ has a non-empty null space and it will be shown that the vectors that lie in this space allow a sparse and regularised solution $x$ that satisfies $Ax = b$ exactly to be computed. This property of zero error must be compared with the lasso and the elastic net, both of which yield solutions that have non-zero errors. A unique and sparse solution from the infinite set of solutions of $Ax = b$ is obtained by considering the stability (condition number) of each component of $x$, and sparsity is obtained by retaining only those components of $x$ whose condition numbers are small. This guarantees that a stable and sparse solution that satisfies $Ax = b$ exactly is obtained. The talk will include a demonstration of examples, using Matlab, that shows the results from the lasso, the elastic net and the method described in this talk.

## Biography

Joab Winkler obtained his undergraduate and postgraduate degrees from Imperial College and University College London, respectively. After a few years in industry, he started his academic career and he initially conducted research into algebraic and numerical issues associated with curves and surfaces in geometric modelling systems. He considered the application of structure-preserving matrix methods to the Sylvester resultant matrix for computations on polynomials, and in particular, the application of this matrix and its subresultant matrices to the computation of high order multiple roots of a polynomial, in the power and Bernstein bases. More recently, he has considered the extension of these structure-preserving matrix methods to blind image deconvolution, which is one of the classical examples of an inverse problem. Very recently, he has started working on the application of linear algebra to the selection of a sparse solution of an under-determined linear algebraic equation and its application to feature selection.
