$(document).ready(function(){

    $('.accordion-item').click(function(){

        // console.log($(this).hasClass('open'));

        // if ($(this).hasClass('open')) {
        //     $(this).removeClass('open');
        //     $(this).find('.accordion-content').slideUp();

        // } else {
        //     $(this).addClass('open');
        //     $(this).find('.accordion-content').slideDown();
        // } 

      
        $(this).find('.accordion-content').slideToggle(1500);

        $(this).toggleClass('open');        
    });

});