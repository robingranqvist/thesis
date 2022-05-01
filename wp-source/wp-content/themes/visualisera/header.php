<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Thesis - performance">
    <meta name="author" content="Robin Granqvist">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri() . "/assets/images/icons/favicon__visualisera-wordpress.svg" ?> ">
    <?php wp_head() ?>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3J8JWJ10Q0');
    </script>
    
  </head>
  <body>
    <div class="topbar__outer-wrapper">
      <div class="container">
        <div class="topbar__inner-wrapper">
          <div class="subheader is--white has--no-margin has--right-margin is--top-bar">New feature</div><p>
          Share your dashboards with your team.&nbsp;<a href="#" class="is--white has--border">Learn more!</a></p>
        </div>
      </div>
    </div>
    <section class="section is--hero">
      <div class="container">
        <div class="nav__outer-wrapper">
          <div class="nav__brand">
            <?php 
              if (function_exists('the_custom_logo')) {
                $custom_logo_id = get_theme_mod('custom_logo');
                $logo = wp_get_attachment_image_src($custom_logo_id);
              }
            ?> 

            <img class="nav__logo" src="<?php echo $logo[0] ?>" alt="Visualisera Logo" />
          </div>
          <?php
            wp_nav_menu(
              array(
                'menu' => 'desktop',
                'container' => '',
                'items_wrap' => '<ul class="nav__wrapper">%3$s</ul>',
              )
            );
          ?> 
          <div class="nav__wrapper is--responsive">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon__menu.svg" class="icon__menu-mobile"/>
          </div>
        </div>
        <!-- Responsive menu -->
        <div class="menu__outer-wrapper">
          <div class="menu__inner-wrapper">
            <?php
              wp_nav_menu(
                array(
                  'menu' => 'mobile',
                  'container' => '',
                  'items_wrap' => '<ul class="mobile-nav__wrapper">%3$s</ul>',
                )
              );
            ?> 
          </div>
        </div>
      