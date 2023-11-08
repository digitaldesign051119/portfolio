$(function(){

    // гамбургер меню
    $('.hamburger').on('click', function(){
        $('header .menu').toggleClass('active');
    });

    //Якори
    window.scrollto = function(destination, speed) {

        if (typeof speed == 'undefined') {
            speed = 800;
        }

        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination - 60
        }, speed);
    };

    $(".menu a").click(function() {

        $('.menu a').removeClass('active');
        $(this).addClass('active');
        
        let id = $(this).attr("href");
        let destination = $(id).offset().top;
        scrollto(destination);
        return false;

    });

    // индикатор для пунктов меню (анимация)
    let indicator = document.querySelector('#indicator');

    let menuPuncts = document.querySelectorAll('.menu a');

    function marker (e) {

        indicator.style.left = e.offsetLeft + 'px';

        indicator.style.width = e.offsetWidth + 'px';

    }

    menuPuncts.forEach(punct => {

        punct.addEventListener('click', (e) => {

            marker(e.target);

        });

    });




});