# Thesis

This is the repo containing all files used in my thesis @ BTH.

The website(s) is a mock SaaS product called Visualisera, some kind of no-code tool used to visualize data. The pages are built to measure the performance of a Webflow site by comparing it to an identical version developed in Wordpress.

![repo__thumb](./thumb__repo.png)

Mock company logos freely usable under [LogoIpsum's](https://logoipsum.com/) license. Open source icons by [Google Icons](https://fonts.google.com/icons) & [Font Awesome](https://fontawesome.com/v4/license). All photos are free to use for both commercial & non-commercial purposes, as described on [Unsplash's lincense agreement](https://unsplash.com/license) as well as background videos under [Pexel's open license](https://www.pexels.com/sv-se/license). All code, illustrations, web design & interaction design by Robin G.

## Static snapshots

Both websites have been downloaded using wget commands, downloading all static code & assets. While Webflow includes javascript libraries such as jQuery & IX2, the alternatives used for Wordpress ([gsap](https://cdnjs.com/libraries/gsap), [scrolltrigger](https://cdnjs.com/libraries/ScrollTrigger), [tweenlite](https://www.cdnpkg.com/gsap/file/TweenLite.min.js/)) have been downloaded as well. Google fonts & analytics scripts have not been downloaded and are instead imported through their CDN's for both sites.

## assets

All assets shared between the Webflow & Wordpress site.

## graphs

The visualized performance data. It can be viewed by [clicking here](https://robingranqvist.github.io/thesis/graphs/graphs/) (temporarily a bit strange looking, will be changed).

## thesis-assets

Illustrations & graphs used in the thesis.

## lighthouse

The Google Lighthouse automation- and data parsing scripts.

**performance-test.js** -> The script for automating the performance tests for a specific domain on a specific breakpoint. Results are outputted as JSON files in /data subfolders.

**performance-test-parsing.js** -> The script for parsing JSON performance test result files in the /data folder and outputting them as CSV files in /csv subfolder.

## webflow

The static, downloaded source code for the Webflow site used for performance analysis 1. The static snapshot can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/webflow/source).

## wordpress

The static, downloaded source code for the Wordpress site used for performance analysis 1. The static snapshot can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/wordpress/source).

## wp-source

The full source code for the AWS-deployed Wordpress site. It contains the full installation, however, the template specific files can be found in wp-source/wp-content/themes/visualisera. Assets uploaded through the CMS can be found in wp-source/wp-content/themes/visualisera/uploads/2022/04.
