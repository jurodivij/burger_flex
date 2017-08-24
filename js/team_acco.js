$(document).ready(function() {
    var items = $('.team-acco__item');
    var titles = $('.team-acco__title');
    titles.on('click', function(e) {
        e.preventDefault();
        var isActive = $(e.target).closest(items).hasClass('.team-acco__item_active');
        console.log($(e.target));
        if (!isActive) {
            items.removeClass('team-acco__item_active');
            $(e.target).closest(items).addClass('team-acco__item_active');
        }
        else {
            items.removeClass('team-acco__item_active');
        }
        
    }); 
});