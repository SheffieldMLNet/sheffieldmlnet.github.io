+++
title = "Advances in GANs based on the MMD"
authors = ["Dougal Sutherland, Gatsby Computational Neuroscience Unit, UCL"]
date = 2018-05-25T09:00:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2018-05-30T15:30:00Z
time_end = 2018-05-30T16:30:00Z

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

Generative adversarial networks have led to huge improvements in sample quality for image generation. But their success is hindered by both practical and theoretical problems, leading to the proposal of a huge number of alternative methods over the last few years. We study one of these alternatives, the MMD GAN, which uses a similar architecture to an original GAN but does some of its optimization in closed form, in a Hilbert space. We deepen the understanding of these models, with a particular focus on the behavior of gradient penalties – inspired by the WGAN-GP and the more recent Sobolev GAN – in this context. Based on this, we propose a method to constrain the gradient analytically, rather than with an additive optimization penalty. We demonstrate that MMD GANs with gradient penalties improve on the existing state of the art, the WGAN-GP; our new method, the Scaled MMD GAN, does even better on unsupervised image generation on CelebA and ImageNet.

Based on joint work with Michael Arbel, Mikołaj Bińkowski, and Arthur Gretton.

## Biography

Dougal Sutherland is a postdoc at University College London's Gatsby Computational Neuroscience Unit, working with Arthur Gretton; he completed his PhD in 2016 from Carnegie Mellon University, advised by Jeff Schneider. His research focuses on problems of learning about distributions from samples, including density estimation, two-sample testing, training implicit generative models, and distribution regression.

