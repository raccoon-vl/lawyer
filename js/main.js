$(function(){

        $('.slider__inner, .news__slider-inner').slick({
                nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
                prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
                infinite: false
        });

        $('select').styler();


        /* Анимация скрола */

        $(".menu").on("click","a", function (event) {

                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
            
                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),
            
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
                //анимируем переход на расстояние - top за 1000 мс
                $('body,html').animate({scrollTop: top}, 1000);
            
              });

        
        /* Меню гамбургер */

        $(".header__btn-menu").on("click", function(){

                $(".menu ul").slideToggle();

        });

});