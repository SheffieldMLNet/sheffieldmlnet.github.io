+++
title = "MUMBO: MUlti-task Max-value Bayesian Optimization"
authors = ["Henry Moss, Lancaster University"]
date = 2019-10-31T09:06:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-11-06T15:00:00Z
time_end = 2019-11-06T16:00:00Z

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

We propose MUMBO, the first high-performing yet computationally efficient acquisition function for multi-task Bayesian optimization. Here, the challenge is to perform efficient optimization by evaluating low-cost functions somehow related to our true target function, a broad class of problems including the popular task of multi-fidelity optimization. However, while information-theoretic acquisition functions are known to provide state-of-the-art Bayesian optimization, existing implementations for multi-task scenarios have prohibitive computational requirements. Previous acquisition functions have therefore been suitable only for problems with both low-dimensional parameter spaces and function query costs sufficiently large to overshadow very significant optimization overheads. In this work, we derive a novel multi-task version of the max-value entropy search of Wang et al 2017, delivering low-cost and robust performance across classic optimization challenges and multi-task hyper-parameter tuning tasks. Our approach is scalable and efficient, allowing multi-task Bayesian optimization to be deployed in problems with rich parameter and fidelity spaces.

## Biography

I am a second-year PhD student at Lancaster University, supervised by David Leslie (Department. of Mathematics and Statistics) and Paul Rayson (School of Computing and Communications). My research interests lie at the intersection of Statistics and Machine Learning, focusing mainly on Bayesian optimization. I leverage information-theoretic arguments to provide efficient and reliable hyper-parameter tuning for machine learning systems. My favourite application is natural language processing (NLP) - where systems can take days (if not weeks!) to train and consequently pose particular interesting tuning problems. I have just finished an internship at Amazon Alexa, where I applied Bayesian optimization within their text-to-speech pipelines. I spend the rest of my time riding, racing and crashing bikes.