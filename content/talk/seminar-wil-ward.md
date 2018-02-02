+++
title = "Fuzzy Rules for Recursive Bayesian Filtering in Multi-Process State Models"
authors = ["Wil Ward, University of Sheffield"]
date = 2017-10-18T13:27:17Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2017-10-18T15:30:00Z
time_end = 2017-10-18T16:30:00Z

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

Systems under the influence of uncertain dynamic processes can pose a distinct challenge for predictive estimators, especially in the case where there are multiple non-linear processes influencing the system state to varying degree. In a wide range of application domain problems, including sensing data and target tracking, there are complex system processes that occur simultaneously or consecutively at unknown intervals. The general case can by modelled using a Markov-switching state space model, where each SSM represents a process affecting the state. The challenge lies in the weighting of each process's effect. Current solutions use a switching probability matrix to weight an inference that propagates a set of parallel Kalman filters. However, the switching probability can drastically affect the results, and in real world cases it is often unknown and potentially highly variable. The alternative approach presented approaches to problem by combining aspects of fuzzy inference with a recursive Bayesian inference. Based on predictions of the state in each SSM of the switching model, the corresponding pdfs of the estimated observation can be considered membership functions to fuzzy sets over each component process. Each process can be considered a linguistic value in the overall SSM. The resulting derivation gives great flexibility and has an intuitive setup. Under certain conditions, inferring the switching probability can be shown to be equivalent to probabilistic models, such as a Gaussian mixture model.

## Biography

Wil Ward is a Research Associate in Deep Probabilistic Machine Learning at the University of Sheffield, starting from October 2017. Previously, he studied his undergraduate to Masters level in Mathematics and Computer Science at the University of Nottingham. He went on to study a PhD in Computer Science in a collaborative project with the British Geological Survey, funded by the BGS-University Funding Initiative. The research project dealt with developing and adapting Computer Vision and Machine Learning techniques for Electrical Resistivity Tomography images. Prior to this, he briefly worked as a research assistant looking at image analysis for medical data. His work has appeared across a range of application publications, including the proceedings of EMBC, and journals including Geophysical Journal International and Water Resources Research.
