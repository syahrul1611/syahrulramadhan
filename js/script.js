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
    if(wScroll < $('.img-html').offset().top - 500){
        $('.img-html').removeClass('appear');
        $('.info-html').removeClass('appear');
    } if(wScroll < $('.img-css').offset().top - 500){
        $('.img-css').removeClass('appear');
        $('.info-css').removeClass('appear');
    } if(wScroll < $('.img-js').offset().top - 500){
        $('.img-js').removeClass('appear');
        $('.info-js').removeClass('appear');
    }

    // paralax skill appear
    if(wScroll > $('.img-html').offset().top - 500){
        $('.img-html').addClass('appear');
        $('.info-html').addClass('appear');
    } if(wScroll > $('.img-css').offset().top - 500){
        $('.img-css').addClass('appear');
        $('.info-css').addClass('appear');
    } if(wScroll > $('.img-js').offset().top - 500){
        $('.img-js').addClass('appear');
        $('.info-js').addClass('appear');
    }

    // paralax portfolio appear
    if(wScroll > $('.c1').offset().top - 350){
        $('.c1').addClass('appear');
        $('.c2').addClass('appear');
        $('.c3').addClass('appear');
    }

    // paralax portfolio disappeared
    if(wScroll < $('.c1').offset().top - 350){
        $('.c1').removeClass('appear');
        $('.c2').removeClass('appear');
        $('.c3').removeClass('appear');
    }

    // paralax contact appear
    if(wScroll > $('#contact').offset().top - 300){
        $('form').addClass('appear');
        $('.instagram').addClass('appear');
        $('.gmail').addClass('appear');
        $('.github').addClass('appear');
    }

    // paralax contact disappeared
    if(wScroll < $('#contact').offset().top - 300){
        $('form').removeClass('appear');
        $('.instagram').removeClass('appear');
        $('.gmail').removeClass('appear');
        $('.github').removeClass('appear');
    }
});