# [sheffieldmlnet.github.io](https://sheffieldmlnet.github.io) [![Build Status](https://travis-ci.org/SheffieldMLNet/sheffieldmlnet.github.io.svg?branch=source)](https://travis-ci.org/SheffieldMLNet/sheffieldmlnet.github.io)
Main site for the _Machine Learning Research Network_ at the University of Sheffield.

This website is generated using [Hugo](https://gohugo.io) and [Travis CI](https://travis-ci.org/SheffieldMLNet/sheffieldmlnet.github.io), and hosted on _GitHub Pages_. The code for the site is available open source under the MIT license, and can be found on [GitHub](https://github.com/SheffieldMLNet/sheffieldmlnet.github.io). The theme used is a modified version of the [_Academic_](https://github.com/gcushen/hugo-academic) theme for Hugo.

## Temporary Travis fix
Travis update on 08/03/2018 breaks deploy due to dpl v1.9. The following code was added to [.travis.yml](./.travis.yml) to downgrade edge to allow for deployment.
```
deploy:
  edge:
    branch: v1.8.47
```
**TODO** review deploy settings to work inline with dpl 1.9
