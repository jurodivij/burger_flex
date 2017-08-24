$(document).ready(function() {
    //сброс инпутов внутри формы
    var btnClear = $('.form__btn_clear');
    btnClear.on('click', function() {
    $('.order-form')[0].reset();
    });

    //Изменение надписи в reviews
    var reviewsItem = $('.reviews__item');
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
            console.log('yes');
            $('#floor').css('display', 'none');
            $('[for=floor]').closest('div').css('display', 'none');
        }
        else {
            console.log('no');
            $('#floor').css('display', 'inline-block');
            $('[for=floor]').closest('div').css('display', 'inline-block');
        } 
    }

    change_button_caption();
    
});