+++
title = "Automatic Learning of Dependency Structures and Alignments"
authors = ["Neill Campbell, University of Bath"]
date = 2019-02-25T09:00:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-03-01T14:00:00Z
time_end = 2019-03-01T15:00:00Z

# Optional shortened abstract
abstract="" # ignore this
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Main Lewin (COM-G12)"

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

We present two recent models, from collaborative work between the Universities of Bath and Bristol, looking at the use of Gaussian Processes (GPs) in the context of multi-view learning and alignment in an unsupervised setting.


The first is a latent variable model capable of learning dependency structures across dimensions in a multivariate setting. Our approach is based on GP priors for the generative mappings and interchangeable Dirichlet process priors to learn the structure. The introduction of the Dirichlet process as a specific structural prior allows our model to circumvent issues associated with previous GP latent variable models. Inference is performed by deriving an efficient variational bound on the marginal log-likelihood on the model.

The second is a model that can automatically learn alignments between high-dimensional data in an unsupervised manner. Our proposed method casts alignment learning in a framework where both alignment and data are modelled simultaneously. Further, we automatically infer groupings of different types of sequence within the same dataset. We derive a probabilistic model built on non-parametric priors that allows for flexible warps while at the same time providing means to specify interpretable constraints. We demonstrate the efficacy of our approach via quantitative comparison to the state-of-the-art approaches and provide examples to illustrate the versatility of our model in automatic inference of sequence groupings, absent from previous approaches, as well as easy specification of high level priors for different modalities of data.

## Biography

Neill is a Royal Society Industry Fellow and a Senior Lecturer (Associate Professor) in Computer Vision, Graphics and Machine Learning at the University of Bath. He also holds an Honorary Associate Professor position in the Virtual Environments and Computer Graphics Group in the Department of Computer Science at University College London where he was formerly a Research Associate working with Jan Kautz and Simon Prince on synthesizing and editing photorealistic visual objects. He completed his PhD in the Machine Intelligence Laboratory at the Department of Engineering at the University of Cambridge under the supervision of Roberto Cipolla. His main area of research involves learning models of shape (2D and 3D), motion and appearance from images. As part of his Fellowship he works with the Foundry (a world leading supplier of software tools to the creative industries) on the development of “intelligent software tools” where machine learning is used to make creative visual computing tasks easier for users.
