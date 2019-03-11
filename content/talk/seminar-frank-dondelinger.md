+++
title = "Multi-task Dirichlet-multinomial regression for detecting global microbiome associations"
authors = ["Frank Dondelinger, University of Lancaster"]
date = 2019-02-25T09:02:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-03-15T14:00:00Z
time_end = 2019-03-15T15:00:00Z

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

There is evidence that the human gut bacterial microbiome influences diseases as disparate as inflammatory bowel disease, cardiovascular disease and schizophrenia. However, current statistical techniques for microbiome association studies either rely on distance measures, which can lead to differing estimates depending on which distance measure is used; or they rely on detecting associations with individual bacterial species or higher-level operational taxonomic units (OTUs). A method that extends the latter approach beyond individual species is the multi-task Dirichlet-multinomial model in Chen and Li, 2013, which uses group lasso penalization across taxonomic units to select non-zero coefficients for each measured covariate. However, while this method can share information across species, it does not take species relatedness into account.

We have improved on the approach by Chen and Li in two respects: 1) by using the phylogenetic tree of the microbial species as prior information about their relatedness, and 2) by extending the model with a hierarchical Bayesian prior on the regression parameters that allow us to estimate the global effect of each covariate on the microbiome. Inference is done via Hamiltonian Monte Carlo, and we use the REBAR approach (Tucker et al., 2017, Maddison et al. 2017) as a continuous approximation to the discrete latent variables that govern the direction of the effect in each individual species.

We have applied our multi-task approach to simulated data, and show that it allows for better estimation of global effects compared to post-processing of the individual effects detected by the Chen and Li method. Additionally, we apply the method to data from a study in inflammatory bowel disease patients which looked for associations with their metabolome (Beamish, 2017). 

## Biography

Frank Dondelinger is a lecturer in biostatistics in the Centre for Health Informatics, Computation And Statistics (CHICAS) at Lancaster University. His research interests include machine learning for molecular medicine, high-dimensional longitudinal models and Bayesian network inference.
