+++
title = "Generalized Variational Inference"
authors = ["Jeremias Knoblauch, University of Warwick and Alan Turing Institute"]
date = 2019-10-22T09:06:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-10-30T15:00:00Z
time_end = 2019-10-30T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "COM-108 Ada Lovelace Room (Regent Court), DCS"

# Seminar host
host="Mauricio Alvarez"

# Is this a selected talk? (true/false)
selected = false

tags = ["seminar"]

# Links (optional).
url_pdf = "./downloads/knoublach-generalized-variational-inference.pdf"
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

In this talk, I introduce a generalized representation of Bayesian inference. It is derived axiomatically, recovering existing Bayesian methods as special cases. It is then used to prove that variational inference (VI) based on the Kullback-Leibler Divergence with a variational family Q produces the optimal Q-constrained approximation to the exact Bayesian inference problem. Surprisingly, this implies that standard VI dominates any other Q-constrained approximation to the exact Bayesian inference problem. This means that alternative Q-constrained approximations such as VI minimizing other divergences and Expectation Propagation can produce better posteriors than VI only by implicitly targeting more appropriate Bayesian inference problems. This inspires the introduction of Generalized Variational Inference (GVI), a modular approach for instead solving such alternative inference problems explicitly. Some applications of GVI are explored, including robustness and better marginals. To showcase its applicability, GVI is deployed on Bayesian Neural Networks and Deep Gaussian Processes, where it can comprehensively outperform competing methods.

## Biography

Jeremias is a doctoral researcher working at the nexus of computer science and statistics within the Oxford-Warwick Statistics Programme (OxWaSP). He is part of the Warwick Machine Learning Group, a visiting researcher at the Alan Turing Institute for Data Science and AI in London and affiliated with the London Air Quality project to support London’s Major’s office with data-driven policy. Beyond this, he is part of the Facebook Fellowship PhD programme. Jeremias' research interests revolve around novel strategies for deriving generalizations of Bayesian posteriors, with an application focus on time series and black box Bayesian models.