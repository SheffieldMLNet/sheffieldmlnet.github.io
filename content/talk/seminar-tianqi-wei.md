+++
title = "Models for Reinforcement Learning and Design of a Soft Robot Inspired by Drosophila Larva"
authors = ["Tianqi Wei, University of Sheffield"]
date = 2018-10-25T09:01:00Z  # Schedule page publish date.
draft = false

# Talk start and end times
time_start = 2018-11-27T15:00:00Z
time_end = 2018-11-27T16:00:00Z

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

Designs for robots are often inspired by animals. Robots can mimic animals' mechanics, motions, behaviours and learning. These properties and functions have been well studied in fruit fly, Drosophila. This thesis explores the Drosophila larva their neural circuits for operant learning and motor system for locomotion. The former is for bio-inspired robot learning and the latter is used for soft robot system design.

A synaptic plasticity model and a neural circuit model for operant learning are proposed based on research of Drosophila larva. Operant learning is a concept similar to reinforcement learning in computer science, i.e., learning by reward or punishment for behaviour. Experiments have shown that Drosophila larvae are capable of operant learning. The operant learning of the Drosophila larva is studied and modelled in the thesis. The proposed synaptic plasticity model includes some complex dynamics of synapses, especially how receptor trafficking affects synaptic strength. Tests of this model on feedforward, recurrent and spiking neural networks show the broad applicability of the synapse model as a reinforcement learning rule. The proposed neural circuit model of the mushroom body, which is a learning centre of the insect brain, reproduced an operant learning behaviour during Drosophila larval locomotion. The synaptic plasticity model is then simplified for applying on robot learning. With the simplified model, a recurrent neural network with internal neural dynamics learns to control a planer bipedal robot in a benchmark reinforcement learning task. Benefiting efficiency in parameter space exploration instead of action space exploration, it is the first known solution to the task with a reinforcement learning approach.  

A soft robot system is also developed based on the mechanics and structures of the larva. A Drosophila larva has a soft body in which a large number of muscles are well organised. The robot uses embedded pneumatic muscles as actuators whose layout patterns mimic the muscle patterns of a Drosophila larval body wall. The structure of the robot body wall is designed to contain those large number of muscles within a small size. A pneumatic control system and embedded control system are designed for the robot. In experiments, the robot makes lifelike motions such as bend, roll and peristalsis.

## Biography

Tianqi Wei did his PhD study at School of Informatics, the University of Edinburgh, where he worked on computational neuroscience studying on the neural circuits and learning rules for operant learning of fruit flies who are capable of learning of complex continuous tasks with small brain. He introduced these finds in reinforcement learning, such as control of bipedal robot locomotion. He also worked on soft robots at the same time. He got his Bachelor degree in Mechatronical Engineering at the Beijing Institute of Technology, China, where he designed several robots and automotive systems, includes a centipede robot and an automatic storage system for home use. His is now in Mauricio’s group as a Postdoc, working on one-shot learning of human motion based on latent force models and Hidden Markov models.
