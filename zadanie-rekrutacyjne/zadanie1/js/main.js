$(document).ready(function(){

    $('#dot-one').click(function() {
        $('#img1').show("slide", { direction: "left" }, 4000);
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
        $('#img5').hide();
        // $('#img1').show("slide", { direction: "left" }, 4000);
    });

    $('#dot-two').click(function() {
        $('#img2').show();
        $('#img1').hide();
        $('#img3').hide();
        $('#img4').hide();
        $('#img5').hide();
        // $('#img2').show("slide", { direction: "left" }, 4000);
    });

    $('#dot-three').click(function() {
        $('#img3').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img4').hide();
        $('#img5').hide();
        // $('#img3').show("slide", { direction: "right" }, 1000);
    });

    $('#dot-four').click(function() {
        $('#img4').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img5').hide();
        // $('#img4').show("slide", { direction: "right" }, 4000);
    });

    $('#dot-five').click(function() {
        $('#img5').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
        // $('#img5').show("slide", { direction: "right" }, 1000);
    });

    // $('.box-img').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // })

});