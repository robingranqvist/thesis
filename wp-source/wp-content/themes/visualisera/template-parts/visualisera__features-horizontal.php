<section class="section has--padding">
  <div class="container">
    <div class="heading__outer-wrapper fade-in">
      <div class="heading__inner-wrapper">
        <div class="subheader">Product</div>
        <h2>Gather all of your data sources onto one customizable dashboard</h2>
        <p class="subtitle">
          Praesent vel semper mi. In hac habitasse platea dictumst. 
          Etiam vehicula lorem sapien, nec semper lorem accumsan id. 
          Mauris dapibus aliquam ornare.
        </p>
      </div>
    </div>

    <div class="card__grid fade-in">
<?php 
      $top_features = new WP_Query(array(
        'posts_per_page' => 3,
        'post_type' => 'top_features',
        'order' => 'ASC'
      ));

      while ($top_features -> have_posts()) : $top_features -> the_post();

?>
      <div class="card__item">
        <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="feature__img" loading="lazy">
          <div class="card__heading">
            <h3 class="has--no-margin"><?php the_title(); ?></h3>
          </div>
          <p><?php echo get_the_content(); ?></p>
      </div>
<?php
      endwhile;
?>
  </div>
</section>