<section class="section has--padding">
  <div class="container">
    <div class="heading__outer-wrapper fade-in">
      <div class="heading__inner-wrapper">
        <div class="subheader">Blog</div>
        <h2>Follow our latest blog posts</h2>
        <p class="subtitle">Vivamus non dui non eros consectetur tincidunt. 
          Sed in enim egestas, aliquet dolor id, sollicitudin urna. 
          Sed eget velit tortor. Proin convallis lorem urna, eget
        </p>
      </div>
    </div>
    <div class="blog__list fade-in">
<?php 
      $blog_posts = new WP_Query(array(
        'posts_per_page' => 6,
      ));

      while ( $blog_posts -> have_posts()) : $blog_posts -> the_post();
?>
      <div class="blog__list-item">
        <div class="blog__img-outer-wrapper">
          <div class="blog__img-wrapper">
            <img src="<?php echo get_the_post_thumbnail_url(); ?>" class="blog__img" loading="lazy"/>
            <div class="blog__img-overlay"></div>
          </div>
        </div>
        <h3 class="blog__heading"><?php the_title(); ?></h3>
        <p><?php echo wp_trim_words(get_the_excerpt(), 10); ?></p>
        <div class="blog__read-more"><a href="#">Read more</a></div>
      </div>
<?php
      endwhile;
?>
    </div>
  </div>
</section>