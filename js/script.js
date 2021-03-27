const home = document.querySelector('.home');
const skill = document.querySelector('.skill');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');

home.addEventListener('click', function() {
    home.classList.add('active');
    skill.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
})

skill.addEventListener('click', function() {
    home.classList.remove('active');
    skill.classList.add('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
})

portfolio.addEventListener('click', function() {
    home.classList.remove('active');
    skill.classList.remove('active');
    portfolio.classList.add('active');
    contact.classList.remove('active');
})

contact.addEventListener('click', function() {
    home.classList.remove('active');
    skill.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.add('active');
})

// animation jumbotron
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.hero img').css({
        'transform':'translate(0,'+ wScroll/4 +'%)'
    });
    $('.hero h1').css({
        'transform':'translate(0,'+ wScroll/5 +'%)'
    });
});

// list open
const toggle = document.querySelector('.menu-toggle');

const listMenu = document.querySelector('.list-menu');

toggle.addEventListener('click', function () {
    listMenu.classList.toggle('list-open');
})