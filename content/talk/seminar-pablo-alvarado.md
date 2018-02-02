+++
title = "Frequency Content Priors for Gaussian Process Pitch Detection in Polyphonic Music"
authors = ["Pablo Alvarado, Queen Mary University of London"]
date = 2017-09-20T13:32:50Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2017-09-20T15:00:00Z
time_end = 2017-09-20T16:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Pool Seminar Room G03, 9 Mappin Street"

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

Automatic music transcription (AMT) aims to infer a latent symbolic representation (piano-roll, MIDI) of a piece of music, given a corresponding observed audio recording. Transcribing polyphonic music, i.e. when multiple notes are played simultaneously, is a challenging problem, due to highly structured overlapping between harmonics. We introduce acoustically inspired Gaussian process (GP) priors into audio content analysis models to improve the detection of patterns required for AMT. In the proposed approach, audio signals are described as a linear combination of sources. Each source is decomposed into the product of an amplitude-envelope activation, and a quasi-periodic component process. We propose the Matérn spectral mixture (MSM) kernel for describing frequency content of single music notes and consider two different regression approaches. In the sigmoid model activation processes are independently non-linear transformed. In the softmax model activation functions are jointly non-linearly transformed. We use variational Bayes for approximate inference, and empirically evaluate how these models work in practice transcribing polyphonic music.

## Biography

Pablo Alvarado received a degree in Electronic Engineering (B. Eng.), and a master in Electrical Engineering (M. Eng.) from Universidad Tecnológica de Pereira, Colombia, in 2013 and 2014 respectively. In March 2015 Pablo Alvarado joined, as a Ph.D. student, the Centre for Digital Music (C4DM) at Queen Mary University of London, UK. Pablo is interested in machine learning, Gaussian process regression, music audio content analysis, and signal processing. He works on the development of new approaches for pitch detection applied to automatic music transcription using Gaussian processes.
