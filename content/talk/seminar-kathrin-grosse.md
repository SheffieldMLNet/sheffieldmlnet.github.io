+++
title = "On the (Statistical) Detection of Adversarial Examples"
authors = ["Kathrin Grosse, Saarland University"]
date = 2017-04-05  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2017-04-05T15:00:00Z
time_end = 2017-04-05T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Ada Lovelace (Regent Court COM-108)"

# Seminar host
host="Mike Smith"

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

Imagine meeting a dear friend and thinking he is your mother, because he is wearing some glasses. Wait, what? Out of question for most of us, however reality for many machine learning models. So called adversarial examples are original samples where an adversary computes an optimal perturbation, leading to a different classification. To humans, however, the two examples are in most cases not distinguishable. The automated detection of such adversarial examples remains an open problem, since the perturbations are a consequence of an inherent property of all classifiers: the gradient of the decision function.

In this talk, we will first briefly review how adversarial examples are computed (using the example of malware data). We then move to our work on how to detect adversarial examples, presenting two approaches. One confidently detects adversarial examples, however only when presented in a batch. Another approach works as well for a single example, yet is does not work as a reliable defence in all cases: In some cases, it only increases the cost of the attack.

## Biography

I studied cognitive sciences at Osnabrück (Lower Saxony, Germany). I specialized in computer science, AI and neurobiology. In my term abroad at the Universidad del Sur in Bahia Blanca, Argentina, we (joint work with Carlos Chesñevar) started to work on opinion mining on Twitter. Around then I decided to work in Data Mining and ML, and continued my studies at Saarland University (since there is a lot of Data Mining/ML specialists there). I wrote my master thesis on text mining in Jilles Vreeken's group, who does Minimum Description Length based exploratory data analysis. Although always enjoying data mining and machine learning in itself, I became interested in security, particularly the security of ML. Due to this interest, I started working (as a PhD student) on this topic at Michael Backes group at CISPA.
