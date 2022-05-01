<section class="section is--testimonial has--padding fade-in">
  <div class="container">
    <div class="heading__outer-wrapper is--left is--spread">
      <div class="heading__inner-wrapper is--left">
        <div class="subheader">Testimonials</div>
        <h2>Our customers</h2>
        <p class="subtitle">Easy, scalable and without a single line of code.</p>
      </div>
      <div class="review__wrapper">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon__stars.svg" class="icon__stars"/>
        <p>*Rated 5/5 by 95% of customers</p>
      </div>
    </div>
    <div class="testimonial__list">
<?php 
      $testimonials = new WP_Query(array(
        'posts_per_page' => 3,
        'post_type' => 'testimonials',
        'order' => 'ASC'
      ));
      
      while ( $testimonials -> have_posts()) : $testimonials -> the_post();

      $custom_fields = get_post_custom();
      $name = $custom_fields['Name'];
      $title = $custom_fields['Title'];
?>
      <div class="testimonial__wrapper">
        <div class="testimonial__heading-wrapper">
          <h3 class="has--no-margin"><?php the_title(); ?></h3>
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon__stars-testimonial.svg" class="icon__stars-testimonial"/>
        </div>
        <p><?php echo get_the_content(); ?></p>
        <div class="customer__wrapper">
          <img src="<?php echo get_the_post_thumbnail_url(); ?>" class="testimonial__customer-img"/>
          <div class="customer__name-wrapper">
            <p class="customer__name"><?php echo $name[0]; ?></p>
            <p class="customer__title"><?php echo $title[0]; ?></p>
          </div>
        </div>
      </div>
<?php
      endwhile;
?>
    </div>
  </div>
</section>