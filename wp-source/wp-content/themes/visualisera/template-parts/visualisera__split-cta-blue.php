<section class="section is--blue is--cta fade-in">
  <div class="container">
    <div class="split__wrapper">
      <div class="heading__inner-wrapper is--left is--cta">
<?php 
        $cta_sections = new WP_Query(array(
          'posts_per_page' => 1,
          'post_type' => 'cta_sections',
          's' => 'Start'
        ));

        while ( $cta_sections -> have_posts()) : $cta_sections -> the_post();

        $custom_fields = get_post_custom();
        $subheader = $custom_fields['Subheader'];
        $button_text = $custom_fields['Button Text'];
?>
        <div class="subheader is--white"><?php echo $subheader[0] ?></div>
        <h2 class="is--small"><?php the_title(); ?></h2>
        <p class="subtitle is--white"><?php echo get_the_content(); ?></p>
        <a href="#" class="btn is--secondary is--cta w-button"><?php echo $button_text[0]; ?></a>
      </div>
    </div>
  </div>

  <div class="split__img-wrapper" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')" alt="<?php the_title(); ?>"></div>
<?php
        endwhile;
?>
</section>