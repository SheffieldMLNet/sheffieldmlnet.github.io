+++
title = "Learning Non-Stationary Data Streams With Gradually Evolved Classes"
authors = ["Dr Leandro Minku, University of Leicester"]

date = 2017-11-29T00:00:00 # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2017-11-29T15:30:00Z
time_end = 2017-11-29T16:30:00Z

# Optional shortened abstract
abstract=""
abstract_short = ""

# Name of event and optional event URL.
event = "Machine Learning Seminar"
event_url = ""

# Location of event.
location = "Ada Lovelace (Regent Court COM-108)"

# Seminar host
host="Haiping Lu"

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

In machine learning, class evolution is the phenomenon of class emergence and disappearance. It is likely to occur in many data stream problems, which are problems where additional training data become available over time. For example, in the problem of classifying tweets according to their topic, new topics may emerge over time, and certain topics may become unpopular and not discussed anymore. Therefore, class evolution is an important research topic in the area of learning data streams. Existing work implicitly regards class evolution as an abrupt change. However, in many real world problems, classes emerge or disappear gradually. This gives rise to extra challenges, such as non-stationary imbalance ratios between the different classes in the problem. In this talk, I will present an ensemble approach able to deal with gradually evolved classes. In order to quickly adjust to class evolution, the ensemble maintains a base learner for each class and dynamically creates, updates and (de)activates base learners whenever new training data become available. It also uses a dynamic undersampling technique in order to deal with the non-stationary class imbalance present in this type of problem. Empirical studies demonstrate the effectiveness of the proposed approach in various class evolution scenarios in comparison with existing class evolution approaches.

## Biography

Dr. Leandro L. Minku is a Lecturer at the Department of Informatics, University of Leicester (UK). Prior to that, he was a research fellow at the University of Birmingham (UK) for five years. He received the PhD degree in Computer Science from the University of Birmingham (UK) in 2010. During his PhD, he was the recipient of the Overseas Research Students Award (ORSAS) from the British government and was invited to a 6-month internship at Google. Dr. Minku's main research interests are machine learning in non-stationary environments / data stream mining, online class imbalance learning, ensembles of learning machines and computational intelligence for software engineering. His work has been published in internationally renowned journals such as IEEE Transactions on Neural Networks and Learning Systems, IEEE Transactions on Knowledge and Data Engineering, IEEE Transactions on Software Engineering and ACM Transactions on Software Engineering and Methodology. Among other roles, Dr. Minku was a co-chair for the IJCAI'17 Workshop on Learning in the Presence of Class Imbalance and Concept Drift and a guest editor for the Neurocomputing Special Issue on this topic, and is a steering committee member for the International Conference on Predictive Models and Data Analytics in Software Engineering (PROMISE), an Associate Editor for the Journal of Systems and Software, and a conference correspondent for IEEE Software.
