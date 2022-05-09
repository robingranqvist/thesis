# Thesis

This is the repo containing all files used in my thesis @ BTH.

## Scope

The website is a mock SaaS product called Visualisera, some kind of no-code tool used to visualize data. The website is developed to measure the performance of Webflow by comparing it to an identical version developed in Wordpress. Each website has been hosted in two separate way. One static snapshot hosted using the same Github Pages environment, and one deployed version using Webflow's internal hosting solution and an AWS EC2 t3-micro instance for Wordpress.

Google Lighthouse has been automated to measure 6 performance metrics of each websites' performance on both the desktop and mobile breakpoint. Each version on each breakpoint has been analysed 100 times in order to reach a statistically significant average for each metric.

The results showed that...🥳

![repo__thumb](./thumb__repo.png)

## Static snapshots

Both websites have been downloaded using wget commands, downloading all static code & assets. While Webflow includes javascript libraries such as jQuery & IX2, the alternatives used for Wordpress ([gsap](https://cdnjs.com/libraries/gsap), [scrolltrigger](https://cdnjs.com/libraries/ScrollTrigger), [tweenlite](https://www.cdnpkg.com/gsap/file/TweenLite.min.js/)) have been downloaded as well. Google fonts & analytics scripts have not been downloaded and are instead imported through their CDN's for both sites.

## Deployed versions

The Webflow site has been deployed using Webflow's internal hosting solution on a staging domain, while the Wordpress site has been deployed on an AWS EC2 t3-micro instance with a server location of Stockholm.

## Files

### assets

All assets shared between the Webflow & Wordpress site.

### graphs

The visualized performance data. It can be viewed by [clicking here](https://robingranqvist.github.io/thesis/graphs/graphs/) (temporarily a bit strange looking, will be changed).

### lighthouse

The Google Lighthouse automation- and data parsing scripts.

**performance-test.js** -> The script for automating the performance tests for a specific domain on a specific breakpoint. Results are outputted as JSON files in /data subfolders.

**performance-test-parsing.js** -> The script for parsing JSON performance test result files in the /data folder and outputting them as CSV files in /csv subfolder.

### thesis-assets

Illustrations & graphs used in the thesis.

### webflow

The static, downloaded source code for the Webflow site used for performance analysis 1. It can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/webflow/source).

### wordpress

The static, downloaded source code for the Wordpress site used for performance analysis 1. It can be viewed live through Github Pages by [clicking here](https://robingranqvist.github.io/thesis/wordpress/source).

### wp-source

The full source code for the AWS-deployed Wordpress site. It contains the full installation, however, the template specific files can be found in wp-source/wp-content/themes/visualisera. Assets uploaded through the CMS can be found in wp-source/wp-content/themes/visualisera/uploads/2022/04.
