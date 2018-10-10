+++
title = "Variational Inference for Stochastic Differential Equations"
authors = ["Dennis Prangle, University of Newcastle"]
date = 2018-10-08T16:00:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2018-10-23T15:00:00Z
time_end = 2018-10-23T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Pool Seminar Room (9 Mappin Street G3)"

# Seminar host
host="Mauricio Alvarez and Wil Ward"

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

A stochastic differential equation (SDE) defines a random function of
time, known as a diffusion process, by describing its instantaneous
behaviour. As such, SDEs are powerful modelling tools in fields such as
econometrics, biology, physics and epidemiology. This talk considers the
common problem where SDEs involve unknown parameters which we wish to
infer from partial noisy observations of the diffusion process.

Parameter inference for SDEs is challenging due to the latent diffusion
process. Working with discretised SDEs, we approximate the joint
posterior distribution of parameters and latent diffusion using
variational inference. That is, we introduce a flexible family of
approximations to the posterior distribution and use optimisation to
select the member closest to the true posterior. The novelty of our
approach is using a recurrent neural network to approximate the
posterior for the latent diffusion conditional on the parameters. This
neural network learns how to provide diffusion paths which bridge
between observations in the same way the diffusion process does,
conditional on particular parameter values.

The talk will describe this method, illustrate it on population dynamics
and epidemic examples, and discuss future extensions.

## Biography

Dennis Prangle is a lecturer in statistics at Newcastle University.
having previously worked at Lancaster University (PhD) and Reading
University (postdoc). His main research interest is approximate Bayesian
inference, including likelihood-free and variational methods.
