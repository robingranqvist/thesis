<?php

function custom_excerpt_length($length) {
  return 10;
}

add_filter('excerpt_length', 'custom_excerpt_length', 999);

function visualisera_theme_support () {
  add_theme_support('title-tag');
  add_theme_support('custom-logo');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'visualisera_theme_support');

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

function visualisera_menus () {
  $locations = [
    'desktop' => __("Desktop Menu"),
    'mobile' =>  __("Mobile Menu"),
  ];

  register_nav_menus($locations);
}

add_action('init', 'visualisera_menus');

function visualisera_register_styles ()  {
  $version = wp_get_theme()->get('Version');
  wp_enqueue_style('visualisera-fonts', "https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;500;600&display=swap", array(), $version);
  wp_enqueue_style('visualisera-style', get_template_directory_uri() . "/style.css", array(), $version, 'all');
}

add_action('wp_enqueue_scripts', 'visualisera_register_styles');

function visualisera_register_scripts ()  {
  $version = wp_get_theme()->get('Version');
  wp_enqueue_script('visualisera-script', get_template_directory_uri() . '/assets/js/visualisera.js', array(), $version, true);
  wp_enqueue_script('visualisera-gsap', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js", array(), "3.10.4", true);
  wp_enqueue_script('visualisera-tweenlite', "https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js", array(), "3.10.4", true);
  wp_enqueue_script('visualisera-jquery', "https://code.jquery.com/jquery-3.6.0.min.js", array(), "3.10.4", true);
  wp_enqueue_script('visualisera-scrolltrigger', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js", array(), "1.0", true);
}

add_action('wp_enqueue_scripts', 'visualisera_register_scripts');

// Top Features
function top_features() {
  $options = array(
    'labels' => array(
      'name' => 'Homepage Top Features',
      'singular_name' => 'Homepage Top Feature',
    ),
    'hierarchical' => true,
    'public' => true,
    'has_archive' => false,
    'supports' => array(
      'title',
      'editor',
      'thumbnail',
      'custom-fields'
    )
  );

  register_post_type('top_features', $options);
}

add_action('init', 'top_features');

function bottom_features() {
  $options = array(
    'labels' => array(
      'name' => 'Homepage Bottom Features',
      'singular_name' => 'Homepage Bottom Feature',
    ),
    'hierarchical' => true,
    'public' => true,
    'has_archive' => false,
    'supports' => array(
      'title',
      'editor',
      'thumbnail',
      'custom-fields'
    )
  );

  register_post_type('bottom_features', $options);
}

add_action('init', 'bottom_features');

function cta_sections() {
  $options = array(
    'labels' => array(
      'name' => 'Homepage CTA Sections',
      'singular_name' => 'Homepage CTA Section',
    ),
    'hierarchical' => true,
    'public' => true,
    'has_archive' => false,
    'supports' => array(
      'title',
      'editor',
      'thumbnail',
      'custom-fields'
    )
  );

  register_post_type('cta_sections', $options);
}

add_action('init', 'cta_sections');

function testimonials() {
  $options = array(
    'labels' => array(
      'name' => 'Homepage Testimonials',
      'singular_name' => 'Homepage Testimonial',
    ),
    'hierarchical' => true,
    'public' => true,
    'has_archive' => false,
    'supports' => array(
      'title',
      'editor',
      'thumbnail',
      'custom-fields'
    )
  );

  register_post_type('testimonials', $options);
}

add_action('init', 'testimonials');


?>