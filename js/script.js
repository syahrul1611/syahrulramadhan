// animation jumbotron
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.hero img').css({
        'transform':'translate(0,'+ wScroll/4 +'%)'
    });
    $('.hero h1').css({
        'transform':'translate(0,'+ wScroll/5 +'%)'
    });

    // paralax info panel appear
    if(wScroll < $('.img-html').offset().top - 300) {
        $('.info-panel').removeClass('appear');
    } if(wScroll > $('.img-html').offset().top - 300) {
        $('.info-panel').addClass('appear');
    }

    // paralax skill disappeared
    if(wScroll < $('.img-html').offset().top - 200){
        $('.img-html').removeClass('appear');
        $('.info-html').removeClass('appear');
    } if(wScroll < $('.img-css').offset().top - 300){
        $('.img-css').removeClass('appear');
        $('.info-css').removeClass('appear');
    } if(wScroll < $('.img-js').offset().top - 300){
        $('.img-js').removeClass('appear');
        $('.info-js').removeClass('appear');
    }

    // paralax skill appear
    if(wScroll > $('.img-html').offset().top - 200){
        $('.img-html').addClass('appear');
        $('.info-html').addClass('appear');
    } if(wScroll > $('.img-css').offset().top - 300){
        $('.img-css').addClass('appear');
        $('.info-css').addClass('appear');
    } if(wScroll > $('.img-js').offset().top - 300){
        $('.img-js').addClass('appear');
        $('.info-js').addClass('appear');
    }

});

// menu toggle
$(".menu-toggle").click(function () {
    $(".list-menu").toggleClass('list-open');
})