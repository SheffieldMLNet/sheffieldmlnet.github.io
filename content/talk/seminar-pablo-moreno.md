+++
title = "Continual Gaussian Processes"
authors = ["Pablo Moreno-Muñoz, Universidad Carlos III, Madrid"]
date = 2019-10-30T21:00:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-11-08T15:00:00Z
time_end = 2019-11-08T16:00:00Z

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

Gaussian processes (GP) are powerful tools for non-linear regression and classification with application to a wide range of scenarios, many of them related to temporal problems. The main focus in the literature has been on the reduction of their computational cost, typically O(N^3) for training and O(N^2) for prediction. In order to sidestep that prohibitive complexity, sparse approximations based on inducing-inputs appeared as the most fundamental solution, substituting exact inference by variational methods. However, learning from sequential observations is still unfeasible even for sparse GPs, since updating their posterior distribution in an online manner is not trivial. Inspired in conjugate-exponential models, where both the prior and posterior take the same form and recurrent updates are tractable, we present a variational GP-prior reconstruction with similar benefits. In our preliminary results, we show important improvements with respect to the state-of-the-art methods. Additionally, we introduce the first solution for continual multi-output GPs seen so far, with many potential applications in healthcare.

## Biography

Pablo Moreno-Muñoz obtained his B.Sc. and M.Sc in Telecommunication Engineering from Universidad Carlos III de Madrid, Spain in 2014 and 2016, respectively. In 2015, he held a 6-month traineeship at European Space Agency for the investigation of probabilistic methods applied to distance calculations in astronomy. He is currently PhD student at the Dept. of Signal Theory and Communications also at the Universidad Carlos III de Madrid. During the last years, he has been research visitor at the University of Sheffield, UK and the Max Planck Institute for Intelligent Systems in Tübingen, Germany. His research interests include probabilistic machine learning methods for heterogeneous data, Gaussian processes, change-point detection, continual Bayesian inference, and its application to human behaviour modelling in medicine.