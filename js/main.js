$(document).ready(function() {
    //сброс инпутов внутри формы
    var btnClear = $('.form__btn_clear');
    btnClear.on('click', function() {
    $('.order-form')[0].reset();
    });

    //Изменение надписи в reviews
    var reviewsItem = $('.reviews__item')
    function change_button_caption() {
        if ($(window).width() <=  '480') {
            reviewsItem.on('mouseenter', function(e) {
            $(e.target).find('.btn').text('Читать отзыв');
            });
        }
        else {
            reviewsItem.on('mouseenter', function(e) {
            $(e.target).find('.btn').text('Подробнее');
            });
        }
    }

    //убираем инпут "этаж"
    function hide_floor() {
        if ($(window).width() <=  '480') {
            $('#floor').css('display', 'none');
            $('[for=floor]').closest('div').css('display', 'none');
        }
        else {
            $('#floor').css('display', 'inline-block');
            $('[for=floor]').closest('div').css('display', 'inline-block');
        } 
    }


    $(window).on('load resize', change_button_caption);
    $(window).on('load resize', hide_floor);

    //полноэкранное меню в действии!
    var menuBtn = $('.hamburger-link');
    menuBtn.on('click', function() {
        var hero = $('.hero'); 
        var container = hero.find('.container');
        var nav = hero.find('.nav');
        var navList = nav.find('.nav__list');
        var navItem = nav.find('.nav__item');
        //отображение и скрытие необходимых элементов
        container.css('visibility' , 'hidden');
        hero.find('.logo').css('visibility' , 'visible');
        hero.find('.arrow-btn').css('visibility' , 'hidden');
        hero.css({            
            'background' : '#2f3233'
        });

        //позиционирование
        nav.css({
            'visibility' : 'visible',
            'display' : 'block',
            'position' : 'absolute',
            'left' : $(window).width()*0.41,
            'top' : $(window).height()*0.26,
            'width' : $(window).width()-( $(window).width()*0.41*2)
            //'height' : $(window).height()
        });
        navList.css({
            'display' : 'flex',
            'flex-direction' : 'column',
            'align-items' : 'center',
            'justify-content' : 'center'
        });
        navItem.css({
            'display' : 'flex',
            'flex-direction' : 'column',
            'align-items' : 'center',
            'justify-content' : 'center'
        });


        if ($(window).width()<='480') {
            $('.nav__link').css({
                'font-family': 'Ubuntu',
                'font-size' : '24px',
                'line-height' : '80px'
            });
        }
        else if( $(window).width()<='768') {
            $('.nav__link').css({
                'font-family': 'Ubuntu',
                'font-size' : '24px',
                'line-height' : '80px'
            });
        }
    });
});