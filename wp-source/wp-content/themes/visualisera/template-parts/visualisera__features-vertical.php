<section class="section has--padding">
  <div class="container">
    <div class="feature__grid-vertical">
<?php 
      $bottom_features = new WP_Query(array(
        'posts_per_page' => 3,
        'post_type' => 'bottom_features',
        'order' => 'ASC'
      ));

      while ( $bottom_features -> have_posts()) : $bottom_features -> the_post();
?>
      <div class="feature__item-vertical fade-in">
        <div class="feature__item-split-wrapper">
          <div class="feature-img__wrapper">
            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" loading="lazy">
          </div>
          <div class="feature__content-wrapper">
            <h3><?php the_title(); ?></h3>
            <p><?php echo get_the_content(); ?></p>
            <div class="feature__list__wrapper">
<?php 
              $custom_fields = get_post_custom();
              $list_items = $custom_fields['List item'];
              foreach ( $list_items as $key => $value ) {
?>
                <div class="feature__list-item">
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon__check.svg" class="icon__check"/>
                  <p><?php echo $value; ?></p>
                </div>
<?php
              }
?>
            </div>
          </div>
        </div>
      </div>
<?php
      endwhile;
?>
    </div>
  </div>
</section>