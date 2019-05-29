+++
title = "Learning invariances using the marginal likelihood"
authors = ["Mark van der Wilk, PROWLER.io"]
date = 2019-04-27T09:05:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-05-31T14:00:00Z
time_end = 2019-05-31T15:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Main Lewin (COM-G12)"

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
When learning mappings from data, knowledge about any invariances in the function output in response to changes in the input can strongly improve generalisation performance. Invariances are commonplace in many machine learning models under the guise of convolutional structure or data augmentation. However, the choice of  *which* invariances are used is currently still made by humans in the learning loop, often through trial-and-error and cross-validation. In this talk, we will view data augmentation as an invariance that can be expressed in a Gaussian process model, and we give a general method for learning useful invariances for a particular dataset. Our approach works by maximising an approximation to the marginal likelihood, which we can back-propagate through. We hope to convey the usefulness of marginal likelihoods, and how Gaussian processes provide a framework that allow accurate approximation of them.

## Biography

Mark did his PhD at the University of Cambridge on variational inference for Gaussian process models. He now works at PROWLER.io, and is developing deep learning tools based on Gaussian processes. He is particularly interested in the automatic learning of inductive biases, and believes that this can automate many
manual processes. Ultimately, he wants to use robust, automatic models in model based reinforcement learning tasks.