//сброс инпутов внутри формы
var btn_clear = $('.form__btn_clear');
btn_clear.on('click', function() {
    $('.order-form')[0].reset();
});