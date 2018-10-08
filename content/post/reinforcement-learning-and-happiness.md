+++
title= "What Reinforcement Learning tells us about happiness"

date= 2018-05-02T09:00:00Z

draft= false

author="Eleni"

tags=["eleni"]
categories = []

summary= ""

[header]
    image = ""
    caption = ""
    preview=false

+++

I dare to say there is no other Machine Learning technique as relevant to life as Reinforcement Learning.[^1]  It is not only its origin: Reinforcement Learning is rooted in psychology experiments; but also, the fact that Reinforcement Learning ideas can be found in philosophical documents since at least the time of Plato. Even today, Reinforcement Learning tells us - or tells me - how we can achieve happiness.

If you think I am biased, I am absolutely fine with it. I am: this is my interpretation of the philosophy texts I have read, the technical books I teach, my own studies on Reinforcement Learning and - of course - my own experiences. Thus, I am going to start from Epicurus, who is one of my favourite philosophers because he is misunderstood as a hedonist, while he was only practicing and teaching the theory of Reinforcement Learning.

Epicurus believed in optimising a reward function across one’s life. He explicitly said that perusing the pleasures of the flesh is not the point. For the exact phrasing I will direct you to my other text _“Was Epicurus the father of Reinforcement Learning?”_,[^2] which I wrote based on my talk for our Machine Learning retreat in 2017.  Back then I thought that since I became the head of the Machine Learning group, I no longer need to prove myself by giving technical talks, and that at 9:00am in the morning people would rather hear something different for a change. Really, it was not a very serious talk.

Epicurus says we should choose the actions that benefit our souls. This is a very interesting choice of words for someone who limited the presence of gods in his philosophy as much as he could and who didn’t believe in afterlife. I will therefore interpret what is good for “our souls” as what is good in the long run. Epicurus was suggesting that we incorporate also any future punishment that today’s pleasure will bring. If you have ever got drunk, you certainly know what I am talking about. Please forgive me if I turn everything into an equation, I assure you that on the surface it is a most trivial one, though in its essence it is the meaning of it all:


$$R = r(t) + r(t+1) + r(t+2) + \ldots + r(t+N)\text{,}$$

where $r(t)$ represents the reward, or, if a negative value, punishment, at time point $t$. 

In writing this, I assume that I will eventually die, that my moments of pleasure and punishment are finite and their importance doesn’t diminish with how far in the future they are. It is an important notion as I cannot maximise a function of an infinite value. Otherwise, if I feel invincible, which I occasionally still do, I will have to write:


$$R = r(t) + r(t+1)\gamma + r(t+2)\gamma^2 + r(t+3)\gamma^3 + \ldots$$

Now I can live forever, but there is a discount factor $\gamma$ multiplying each reward that I receive, with $\gamma < 1$, which is raised to a power depending on how far away in the future the reward is. This just tells me that the reward I receive now is not as good as a same amount of the reward that I will get next year, and it explains why I am so impatient.

In the Epicurean philosophy, there are clear instructions or suggestions regarding the values of various actions. For instance, Epicurus’ advice is to pursue friendship than romance because the latter brings jealousy and pain. I will therefore write in an equation that the value of friendship is higher than the value of romance. Feel free to disagree with Epicurus but for the sake of the argument:


$$Q(\text{friendship}) > Q(\text{romance})\text{,}$$

where $Q$ is the value of the action to be considered and is interpreted as the expected sum of all the future rewards (and punishments), discounted of course, that can result from this action. Here, there is an omission: saying that the action is independent of our state is clearly an oversimplification. For instance, we can consider a state s that includes our own “state of mind”, and the other person involved. The value of friendship itself must also depend on the person we chose to offer our friendship. A more complete statement is therefore:

$$Q(s, \text{friendship})>Q(s, \text{romance})$$

You can argue that the correctness of this inequality may very well depend on the specific state $s$ but, if I sample a state, on average this is more likely to be true. Of course, nobody says that $Q(s, \text{friendship})$ cannot have a very low value itself if investing in friendship with the wrong person but it is likely to still be higher than $Q(s, \text{romance})$ if investing in romance with the same wrong person. 

Implicit here is the investment in all these actions. Any action of friendship, or of anything else in fact, rarely comes for free: it typically involves some effort. In this framework, and to keep things simple, I may consider the investment as a negative reward, i.e. something that I pay now in order to get a higher return in the future. The update rule for learning the $Q$ values according to the well-known SARSA algorithm is:

$$\Delta Q(s,a) = (r + \gamma Q(s’,a’)) - Q(s,a)\text{,}$$

which I can interpret as “total reward $-$ expected reward”. The value $Q(s,a)$ is the expectation for immediate and future rewards that I will receive when I am in state $s$ and choose action $a$. If my prediction is correct, $Q(s,a)$ should be equal to the immediate reward $r$ plus the $Q$ value of the future state action pair $(s’, a’)$, i.e. my expected reward for the future state $s’$ when taking future action $a’$, discounted of course. If my expectation is wrong then the terms do not match and I need to update $Q(s,a)$. Given my investments on the way to my goal, represented as negative rewards, I need, and perhaps expect, future rewards that are large enough to compensate my investment and that arrive at a time that they do not feel heavily discounted.

Therefore, receiving a smaller reward than anticipated can feel like punishment: the difference is negative. The film that your friend told you is amazing might disappoint you if you watch it with great expectations. Correspondingly, I remember watching the end of “[_Lost_](https://en.wikipedia.org/wiki/Lost_(TV_series))" many years after its first airing, having heard way too many times how awful it was. I assure you, it didn’t seem quite as bad to me. You see, after all the negative comments I had heard, my expectations were pretty low. 

In friendship or romance, or indeed anything else, great expectations and high investment are likely to lead to disappointment. Reinforcement Learning suggests you should have low expectations in situations you cannot really control and should avoid over-investment. In doing so, any reward is more likely to feel like a reward and any punishment as less of a punishment.

Ongoing investments also lead to a natural bias in the perception of people. I, as an external observer for someone else, may be aware of signs of success (rewards) but I am likely unaware of their investments (punishments). On the contrary, I am perfectly aware of my own investments and therefore any perception of my personal success may feel less to me than in the eyes of other people. Sometimes it may even feel like a punishment: since I consumed the punishment first, the success may not be enough to make up for it; or my assessment may not wait for the time of the success itself – after all, I am impatient! 

This is how Reinforcement Learning tells me to live my life: enjoy simple things; do not expect too much from others; do not over-invest; and never underestimate the effort or investment that people made on their way to reach their goals. Is there an element of luck? Reinforcement Learning says there is, though, unless you are trapped in local maxima, you will eventually find the optimal solution given sufficient time. This, however, is a discussion for another time. 

<br/>
_Eleni_


Acknowledgements go to Peter Dayan for his amazingly fast feedback on this text (as always!) and for pointing me to the work of Kent Berridge,[^3] who makes the distinction between _“liking”_ vs _“wanting”_, as well as the work of Robb Rutledge,[^4] a modern Epicurus who proposed a computational model of momentary subjective happiness. Also to Wil Ward for meticulous proofreading. Many thanks!

[^1]: [Sutton, R.S. & Barto, A.G. Reinforcement Learning: An Introduction, second edition. (2018)](http://incompleteideas.net/book/the-book.html).
[^2]: [Vasilaki, E. Is Epicurus the father of Reinforcement Learning? (2017)](https://arxiv.org/abs/1710.04582).
[^3]: [Kringelbach, M.L. & Berridge, K.C. The affective core of emotion: Linking pleasure, subjective well-being, and optimal metastability in the brain. Emotion Review, 9(3), 191-199 (2017)](https://www.ncbi.nlm.nih.gov/pubmed/28943891).
[^4]: [Rutledge R.B., Skandali, N., Dayan, P. & Dolan, R.J. A computational and neural model of momentary subjective well-being. PNAS, 111(33), 12252-12257 (2014)](https://www.ncbi.nlm.nih.gov/pubmed/25092308).




