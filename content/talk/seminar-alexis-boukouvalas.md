+++
title = "Using Gaussian process models to infer pseudotime and identify gene-specific branching dynamics from single-cell data"
authors = ["Alexis Boukouvalas, PROWLER.io"]
date = 2019-04-27T09:06:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2019-07-19T14:00:00Z
time_end = 2019-07-19T15:00:00Z

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
We demonstrate how to develop and apply Gaussian Process models for dimensionality reduction and inference of branching dynamics in single-cell transcriptomic data. We will discuss two models: GrandPrix: an efficient implementation of the Gaussian process latent variable model which allows scaling up the GP approach to modern single-cell datasets. We apply our method on microarray, nCounter, RNA-seq, qPCR and droplet-based datasets from different organisms. The model converges an order of magnitude faster compared to existing methods whilst achieving similar levels of estimation accuracy.

The branching Gaussian process (BGP): a non-parametric model that is able to identify branching dynamics for individual genes and provide an estimate of branching times for each gene with an associated credible region. We demonstrate the effectiveness of our method on simulated data, a single-cell RNA-seq haematopoiesis study and mouse embryonic stem cells generated using droplet barcoding. The method is robust to high levels of technical variation and dropout, which are common in single-cell data.

The papers I will describe are<br/>
https://genomebiology.biomedcentral.com/articles/10.1186/s13059-018-1440-2
https://academic.oup.com/bioinformatics/article/35/1/47/5047752


## Biography

Alexis is the head of the machine learning engineer group at PROWLER.io with 7 years of experience working as a software engineer in the query processor Microsoft SQL Server team and 10 years of research experience in statistics. He has published more than thirty cited peer-reviewed publications in developing novel statistical models and applying them in computational biology, psychology and other domains. His research interests lie in Bayesian non-parametrics including Gaussian processes and sequential decision-making problems.