//Появление\изчезание бургера
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


$(document).ready(function(){
    $('.carousel_inner_styles').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },]
    });
    $('.carousel_inner_countries').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },]
    });


    //появление\исчезание модального окна
    $('[data-modal=subscribe]').on('click', function() {
        $('.overlay, #subscribe').fadeIn();
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #subscribe').fadeOut();
    });


    // Анимирование скролла по id (якори)
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
       
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'swing');
      });


    for (let i = 1; i <= 4; i++) { 
        var rate = document.getElementById("author_rate_" + i).innerHTML;
        var elem = document.getElementById("author_rate_bar_" + i);
        elem.style.width = rate * 10 + '%';
    }

    var rate1 = document.getElementById("author_rate_4").innerHTML;
    var elem1 = document.getElementById("author_rate_bar_4");
    var swag = rate1 * 40;
    if (rate1 < 5) elem1.style.backgroundColor = 'rgba(200,' + swag + ',0,1)';
    else elem1.style.backgroundColor = 'rgba(' + (200 - (swag-200)) + ',200,0,1)';
});