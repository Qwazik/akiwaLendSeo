//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }
    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    $.fn.equalHeight = function(){
        var global = this,
            maxHeigh = 0,
            tmpHeigh = 0;
        $(this).each(function(){
            tmpHeight = $(this).outerHeight();
            if(tmpHeight > maxHeigh){
                maxHeigh = tmpHeight;
            }
        })

        $(this).each(function(){
            $(this).css('min-height', maxHeigh);
        })
    }
  }(jQuery));

  $(function(){
    pageHeaderHeight();
    colorTopPositions();
    starToRequired();
    $('.fancybox').fancybox({
        padding: 0,
        wrapCSS: 'modal-fancy'
    });
    $('input[name="phone"]').inputmask('+7(999)-999-99-99');
    $('input[name="site"]').inputmask('www.a{0,}.a{0,}');
    $(window).resize(pageHeaderHeight);
    $('.tarifs__item .big').equalHeight();
    $('.tarifs__item .desc').equalHeight();
    var achivementsSlider = $('.achivements-slider').owlCarousel({
        items: 1,
        margin: 50,
        loop: true
    });
    $('.achivements-slider__controls a').click(function(){
        if($(this).is('.prev')){
            achivementsSlider.trigger('prev.owl.carousel');
        }else{
            achivementsSlider.trigger('next.owl.carousel');
        }
        return false;
    });

  });


function pageHeaderHeight(){
    $('.page__header').height($(window).height());
}

function colorTopPositions(){
    $('.position-table__position').each(function(){
        if(+$(this).text() <= 3){
            $(this).addClass('top');
        }
    });
}

function starToRequired(){
    $('input').each(function(){
        if($(this).is(':required')){
            var span = $(this).closest('label').find('span');
            $(span).text($(span).text() + '*');
        }
    });
}

