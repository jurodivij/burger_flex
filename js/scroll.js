$(function() {
    var sections = $('.section'),
        display = $('.maincontent'),
        isScroll = false;
    var md = new MobileDetect(window.navigator.userAgent),
        isMobile = md.mobile();
    var performTransition = function(sectionEq) {
        if (isScroll) return
            isScroll = true;
            var position = (sectionEq * -100)+ '%';
            display.css({
            'transform' : 'translateY('+ position +')',
            '-webkit-transform' : 'translateY('+ position +')'
            })
        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
        setTimeout(function() {
            isScroll = false;
            $('.fixed-menu__item').eq(sectionEq).addClass('active')
                .siblings().removeClass('active');
        }, 1300);       
    }
    
    var defineSections = function(sections) {
        var activeSection = sections.filter('.active');
        return {
            activeSection : activeSection,
            nextSection : activeSection.next(),
            prevSection : activeSection.prev()
        }
    }

    var scrollToSection = function(direction) {

        var section = defineSections(sections);

        if (direction == 'up' && section.nextSection.length) {   //скроллим вниз
            performTransition(section.nextSection.index());
        }

        if (direction == 'down' && section.prevSection.length) {  //скроллим вверх
            performTransition(section.prevSection.index());
        }
    }

    $('.wrapper').on({
        wheel: function(e) {
            var deltaY = e.originalEvent.deltaY; 
            var direction = deltaY>0 ? 'up' : 'down';
            scrollToSection(direction);
        },
        touchmove: function(e) {
            e.preventDefault();             //чтобы не прыгал экран 
        }
    });


    $(document).on('keydown', function(e) {
        var section = defineSections(sections);
        console.log(e.keyCode);
        switch(e.keyCode) {
            case 40: //up
                if(section.nextSection.length) {
                    performTransition(section.nextSection.index());
                }
                break;
            case 38: //down
                if(section.prevSection.length) {
                    performTransition(section.prevSection.index());
                }
                break;
        }
    });

    $('[data-scroll-to]').on('click touchstart', function(e) {
        e.preventDefault();
        var elem = $(e.target);
        var sectionIndex = parseInt(elem.attr('data-scroll-to'));
        performTransition(sectionIndex);
    });

    if (isMobile) { ///если вернется строка, то это телефон
        $(window).swipe( {
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
              scrollToSection(direction);
            }
        });
    }
    
    $('.arrow-btn').on('click touchstart', function(e) {
        e.preventDefault();
        performTransition(1);
    });

});