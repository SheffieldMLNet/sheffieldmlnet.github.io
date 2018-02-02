+++
title = "Factorised Gaussian Process Models"
authors = ["Carl Henrik Ek, University of Bristol"]
date = 2017-06-14T13:53:44Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2017-06-14T15:00:00Z
time_end = 2017-06-14T16:00:00

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Ada Lovelace (Regent Court COM-108)"

# Seminar host
host="Mauricio Alvarez"

# Is this a selected talk? (true/false)
selected = false

tags = ["seminar"]

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = ""

# Does the content use math formatting?
math = false

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

## Abstract

Regression is the task of relating an input variate to an output domain by the means of a function. To learn the mapping from data means that we are faced with the daunting task of specifying a distribution over the space of functions. Gaussian process priors allow us to do just this in an interpretable and flexible manner. However, for many types of data the relationship cannot be described by a function as there are multiple parts of the output domain corresponding to the same input location. In this scenario we often have to resort to latent variable models in order to capture the relationship which are often characterised by expensive and challenging inference scenarios.

In this talk I will describe a set of different approaches to modelling in the above described scenario. Our idea is that we can build models that learns a factorisation of the variations in the data such that we can simplify the inference problem. I will exemplify some of these models on real-data from robotics and computer vision.

## Biography

Dr. Carl Henrik Ek is a lecturer at the University of Bristol. His reasearch focuses on developing computational models that allows machines to learn from data. In specific he is interested in Bayesian non-parametric models which allows for principled quantification of uncertainty, easy interpretability and adaptable complexity. He has worked extensively on models based on Gaussian process priors with applications in robotics and computer vision.
