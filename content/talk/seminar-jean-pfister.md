+++
title = "Weightless Particle Filters and Their Applications in Neuroscience"
authors = ["Jean-Pascal Pfister, University of Zurich"]
date = 2019-03-01T09:03:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-03-22T13:30:00Z
time_end = 2019-03-22T14:30:00Z

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

Nonlinear filtering is the Bayesian optimal solution to the problem of dynamically estimating a latent variable from a continuous stream of noisy observations. It is highly relevant in neuroscience both for data analysis applications[^1] as well as a candidate for brain function at different levels ranging from the single synapse level[^2] to the neural network level[^3]. A widely used solution to the nonlinear filtering problem is to rely on a set of samples (particles) to represent the filtering distribution. However, this standard particle filtering approach which relies on importance weights does not scale well when the dimensionality of the problem increases, i.e. it requires a number of particles which scales exponentially with the number of dimensions. In this talk, I will introduce a new class of particle filters which do not depend on importance weight and show that they overcome this curse of dimensionality.[^4] Furthermore, I will show that a specific weightless particle filter - called the neural particle filter - is relevant for brain function as it could be implemented by a network of neurons.[^2] In the last part of the talk, I will show several applications of nonlinear filtering in neuroscience.[^1][^2][^3]

## Biography

Jean-Pascal Pfister is assistant professor at the Department of Physiology (University of Bern) and at the Institute of Neuroinformatics (University of Zurich / ETH). He is heading the theoretical neuroscience group and aims at discovering fundamental computational principles that govern brain dynamics. During his PhD at EPFL, he developed several models of spike-timing dependent plasticity (including the “triplet model”). During his post-doc in Cambridge (UK) and his sabbatical in Harvard he developed statistical models of synaptic dynamics, neuronal dynamics and neural network dynamics.

[^1]: Kutschireiter, A., & Pfister, J.-P. (2018). Particle-filtering approaches for nonlinear Bayesian decoding of neuronal spike trains, arXiv:1804.09739v1,1–20.

[^2]: Pfister, J.-P., Dayan, P., & Lengyel, M. (2010). Synapses with short-term plasticity are optimal estimators of presynaptic membrane potentials. Nature Neuroscience, 13(10), 1271–1275. 

[^3]: Kutschireiter, A., Surace, S. C., Sprekeler, H., & Pfister, J.-P. (2017). Nonlinear Bayesian filtering and learning: a neuronal dynamics for perception. Nature Scientific Reports, 7(1), 8722. 

[^4]: Surace, S. C., Kutschireiter, A., & Pfister, J.-P. (2019). How to avoid the curse of dimensionality: scalability of particle filters with and without importance weights. SIAM Review, 61( 1), 79–91
