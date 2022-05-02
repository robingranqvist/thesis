# Thesis - 2022 - Robin Granqvist

![repo__thumb](https://user-images.githubusercontent.com/54509721/166127326-3ce75a36-45a9-41a1-bbd6-d7c49b0e25f3.png)

This is the repo containing all my files used in my thesis @ BTH.

The website(s) is a mock SaaS product called Visualisera, some kind of no-code tool used to visualize data. The pages are built to measure the performance of a Webflow site by comparing it to an identical version developed in Wordpress.

Mock company logos freely usable under [LogoIpsum's](https://logoipsum.com/) license. Open source icons by [Google Icons](https://fonts.google.com/icons) & [Font Awesome](https://fontawesome.com/v4/license). All photos are free to use for both commercial & non-commercial purposes, as described on [Unsplash's lincense agreement](https://unsplash.com/license) as well as background videos under [Pexel's open lincense](https://www.pexels.com/sv-se/license). All code, illustrations, web design & interaction design by Robin G.

The Webflow site is currently deployed through [Webflow](https://performance-test-webflow-robin-g.webflow.io/), while the Wordpress site is temporarily deployed on a [t3-micro AWS EC2 instance](http://13.53.139.156/).

## Static snapshots

Both websites have been downloaded using wget commands, downloading all static code & assets. While Webflow includes javascript libraries such as jQuery & IX2, the alternatives used for Wordpress ([gsap](https://cdnjs.com/libraries/gsap), [scrolltrigger](https://cdnjs.com/libraries/ScrollTrigger), [tweenlite](https://www.cdnpkg.com/gsap/file/TweenLite.min.js/)) have been downloaded as well. Google fonts & analytics scripts have not been downloaded and are instead imported through their CDN's for both sites.

## Assets

These are all assets shared between the Webflow & Wordpress site.

## webflow

This is the static, downloaded source code for the Webflow site used for performance analysis 1. The static snapshot can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/webflow/performance-test-webflow-robin-g.webflow.io).

## wordpress

This is the static, downloaded source code for the Wordpress site used for performance analysis 1. The static snapshot can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/wordpress/13.53.139.156).

## wp-source

This is the full source code for the AWS-deployed Wordpress site. It contains the full installation, however, the template specific files can be found in wp-source/wp-content/themes/visualisera. Assets uploaded through the CMS can be found in wp-source/wp-content/themes/visualisera/uploads/2022/04.


