$(document).ready(function() {
    var items = $('.menu-acco__item');
    var contents = $('.menu-acco__content');
    console.log(items);
    console.log(contents);
    items.on('click', function(e) {
        e.preventDefault();
        //var content = $(e.target).find('.menu-acco__content');
        //console.log(content);
        var isActive = $(e.target).closest('.menu-acco__item').find('.menu-acco__content_active').length;
        if (!isActive) {
            contents.removeClass('menu-acco__content_active');
            if ($(window).width() <=  '480') {
                 $('.menu__title').css('opacity', '0.01');
            }
            $(e.target).closest('.menu-acco__item').find('.menu-acco__content').addClass('menu-acco__content_active');
        }
        else {
            contents.removeClass('menu-acco__content_active');
            $('.menu__title').css('opacity', '1');
        }
    }); 
});