(function ($) {
  'use strict';

  $(document).ready(function() {
    var slider = $("#lightSlider").lightSlider({
        auto: true,
        controls: false,
        loop: true,
        pager: false,
        slideEndAnimation: false,
        slideMargin: 30
    });

    document.getElementById('slider-prev').addEventListener('click', slider.goToPrevSlide, false);
    document.getElementById('slider-next').addEventListener('click', slider.goToNextSlide, false);

    /* Затемнение меню при прокрутке */
    function fade(wnd) {
        var top = wnd.scrollTop();
        
        var opacity = top > 400 ? 0.8 : top < 235 ? 0.47 : top / 500;
            $('#nav').css('backgroundColor', 'rgba(86,83,76,' + opacity + ')');
    }


    var wnd = $(window);

    fade(wnd);

    wnd.scroll(function() {
        fade(wnd);
    });


    /* Скролл по якорям */
    $('.header-menu a, .logo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $(document).ready(function(){
      $('#mobile-menu-icon').click(function(){
        $(this).toggleClass('open');
        $('#header-menu-wrapper').slideToggle(220);
      });
    });
});

}(jQuery));