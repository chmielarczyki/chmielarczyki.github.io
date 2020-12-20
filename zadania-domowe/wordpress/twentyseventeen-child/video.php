<?php

/* Template Name: Video */

?>

<?php get_header(); ?>



<!-- <iframe width="420" height="315"
src="https://www.youtube.com/watch?v=M7FIvfx5J10">
</iframe> -->

<div class="video-content">
    <iframe width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
</div>

<?php 

if ( have_posts() ) : while ( have_posts() ) : the_post();
the_content();
endwhile; else: ?>

<p>Sorry, no posts matched your criteria.</p>


<?php endif; ?>

<?php get_footer(); ?>