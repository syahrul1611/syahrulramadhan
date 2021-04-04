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

    // paralax portfolio appear
    if(wScroll > $('.c1').offset().top - 300){
        $('.c1').addClass('Cappear');
        $('.c2').addClass('Cappear');
        $('.c3').addClass('Cappear');
    }

    // paralax portfolio disappeared
    if(wScroll < $('.c1').offset().top - 300){
        $('.c1').removeClass('Cappear');
        $('.c2').removeClass('Cappear');
        $('.c3').removeClass('Cappear');
    }

});

// menu toggle
$(".menu-toggle").click(function () {
    $(".list-menu").toggleClass('list-open');
})