+++
title = "Training Spiking Neural Networks with Surrogate Gradients"
authors = ["Friedemann Zenke, University of Oxford"]
date = 2018-10-25T09:00:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2018-12-11T15:00:00Z
time_end = 2018-12-11T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Ada Lovelace (Regent Court COM-108)"

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

Computation in the brain is largely performed by spiking neural networks. However, currently, we neither understand how spiking networks in neurobiology compute nor how to instantiate such capabilities in artificial network models. In my talk, I will revisit the problem of supervised learning in multi-layer and recurrent spiking neural networks. Crucially, standard gradient-based optimization methods fail in the spiking setting because gradients cannot propagate through the threshold nonlinearity of most spiking neuron models. To overcome this limitation, I will introduce surrogate gradients as a continuous relaxation of the true gradients and use them to train spiking neural networks to solve supervised learning problems in the temporal domain. Finally, I will demonstrate the effectiveness of this approach on several benchmarks and discuss its biological plausibility.

## Biography

Friedemann studied physics at the Rheinische Friedrich Wilhelms University in Bonn, Germany and at the Australian National University in Canberra, Australia. He received his PhD in computer science from Ecole Polytechnique Fédérale de Lausanne (EPFL) in Switzerland where he worked in the laboratory of Wulfram Gerstner on the interaction of synaptic and homeostatic plasticity in spiking neural network models. He then joined the laboratory of Surya Ganguli at Stanford University as a postdoctoral fellow to study the role of complex synaptic dynamics as a remedy for catastrophic memory interference in continually learning deep neural networks. Recently, Friedemann joined the Vogels lab at the University of Oxford, UK as a Sir Henry Wellcome fellow. He continues to work on theoretical questions pertaining to learning and memory formation in neural networks.
