    //полноэкранное меню в действии!
    var menuBtn = $('.hamburger-link');
    menuBtn.on('click', function() {
        var hero = $('.hero'); 
        var container = hero.find('.container');
        var nav = hero.find('.nav');
        var navList = nav.find('.nav__list');
        var navItem = nav.find('.nav__item');
        var arrowBtn = hero.find('.arrow-btn');
        var navLink = hero.find('.nav__link');
        var hamburger = hero.find('.hamburger-link_bars');
        var isHidden = false;
        //отображение и скрытие необходимых элементов
        if (!isHidden) {
            container.addClass('container-hidden');
            arrowBtn.addClass('arrow-btn-hidden');
            hero.addClass('hero-hidden');
            nav.addClass('nav-hidden');
            navList.addClass('nav__list-hidden');
            navItem.addClass('nav__item-hidden');
            navLink.addClass('nav__link-hidden');
            hamburger.addClass('hamburger-link_bars-hidden');
            console.log(navLink[0]);
            console.log(navLink[1]);
            navLink.eq(0).text('Почему мы');
            navLink.eq(0).attr('data-scroll-to','1')
            navLink.eq(1).text('Меню');
            navLink.eq(1).attr('data-scroll-to','4')
            navLink.eq(2).text('Советы');
            navLink.eq(2).attr('data-scroll-to','5')
            navLink.eq(3).text('Кто мы');
            navLink.eq(3).attr('data-scroll-to','3')
            navLink.eq(4).text('Свяжитесь');
            navLink.eq(4).attr('data-scroll-to','6')
            navLink.eq(5).text('Контакты');
            navLink.eq(5).attr('data-scroll-to','7')
            //navlink[0].text('Почему мы');
            isHidden = true;
        }
        
        //позиционирование
        
    });