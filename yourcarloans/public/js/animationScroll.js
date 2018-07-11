
$(function(_animScrollFunction) {

    var $checkScrollview = $checkfade = $checkpush = $checkanimate = $checkzoom = $checkzoomDown = $checkzoomUp = $checkzoomLeft = $checkzoomRight = $checkbounceEffect = $checkbounceIn = $checktada = $checkshake = $checkshakeride = $checkrubberband = $checkspeedin = $checkspeedinright = $checkslideup = $checkslidedown = $checkslideleft = $checkslideright = $checkfadeinleft = $checkfadeinright = $checkfadeleftshake = $checkfaderightshake = $checkswing = $checkslideleftroll = $checksliderightroll = $(window);
    
    var $fadeBlock = $('.fadeIn');
    var $pushBlock = $('.pushIn');
    var $aimateImg = $(".openpulse");
    var $zoomIn = $(".zoomIn");
    var $zoomInDown = $(".zoomIndown");
    var $zoomInUp = $(".zoomInup");
    var $zoomInLeft = $(".zoomInleft");
    var $zoomInRight = $(".zoomInright");
    var $bounceEffect = $(".bounce");
    var $bounceIn = $(".bounceIn");
    var $tadaEffect = $(".tada");
    var $shakeEffect = $(".shake");
    var $shakerideEffect = $(".shakeRide");
    var $rubberbandEffect = $(".rubberband");
    var $speedinEffect = $(".speedInleft");
    var $speedinrightEffect = $(".speedInright");
    var $slideupEffect = $(".slideUp");
    var $slidedownEffect = $(".slideDown");
    var $slideleftEffect = $(".slideLeft");
    var $sliderightEffect = $(".slideRight");
    var $fadeinleftEffect = $(".fadeInleft");
    var $fadeinrightEffect = $(".fadeInright");
    var $fadeleftshakEffect = $(".fadeLeftshake");
    var $faderightshakEffect = $(".fadeRightshake");
    var $swingEffect = $(".swing");
    var $slideleftrollEffect = $(".slideLeftroll");
    var $sliderightrollEffect = $(".slideRightroll");

    function check_scrollView() {

        $.each($fadeBlock, function(_fadeViewData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkfade.scrollTop()) && ($(this).offset().top <= ($checkfade.scrollTop() + $checkfade.height()))) {
                $(this).addClass('imgfade');$(this).removeClass('imgfadeOut');
            } else {
                $(this).removeClass('imgfade');$(this).addClass('imgfadeOut');
            }
        });

        $.each($pushBlock, function(_pushViewData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkpush.scrollTop()) && ($(this).offset().top <= ($checkpush.scrollTop() + $checkpush.height()))) {
                $(this).addClass('pushup');$(this).removeClass('pushdown');
            } else {
                $(this).removeClass('pushup');$(this).addClass('pushdown');
            }
        });

        $.each($aimateImg, function(_animateImgData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkanimate.scrollTop()) && ($(this).offset().top <= ($checkanimate.scrollTop() + $checkanimate.height()))) {
                $(this).addClass('animateImg');
            } else {
                $(this).removeClass('animateImg');
            }
        });

        $.each($zoomIn, function(_zoomInData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkzoom.scrollTop()) && ($(this).offset().top <= ($checkzoom.scrollTop() + $checkzoom.height()))) {
                $(this).addClass('zoomfade');
            } else {
                $(this).removeClass('zoomfade');
            }
        });

        $.each($zoomInDown, function(_zoomInDownData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkzoomDown.scrollTop()) && ($(this).offset().top <= ($checkzoomDown.scrollTop() + $checkzoomDown.height()))) {
                $(this).addClass('zoomDown');
            } else {
                $(this).removeClass('zoomDown');
            }
        });

        $.each($zoomInUp, function(_zoomInUpData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkzoomUp.scrollTop()) && ($(this).offset().top <= ($checkzoomUp.scrollTop() + $checkzoomUp.height()))) {
                $(this).addClass('zoomUp');
            } else {
                $(this).removeClass('zoomUp');
            }
        });

        $.each($zoomInLeft, function(_zoomInLeftData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkzoomLeft.scrollTop()) && ($(this).offset().top <= ($checkzoomLeft.scrollTop() + $checkzoomLeft.height()))) {
                $(this).addClass('zoomleft');
            } else {
                $(this).removeClass('zoomleft');
            }
        });

        $.each($zoomInRight, function(_zoomInRightData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkzoomRight.scrollTop()) && ($(this).offset().top <= ($checkzoomRight.scrollTop() + $checkzoomRight.height()))) {
                $(this).addClass('zoomright');
            } else {
                $(this).removeClass('zoomright');
            }
        });

        $.each($bounceEffect, function(_bounceEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkbounceEffect.scrollTop()) && ($(this).offset().top <= ($checkbounceEffect.scrollTop() + $checkbounceEffect.height()))) {
                $(this).addClass('bounceeffect');
            } else {
                $(this).removeClass('bounceeffect');
            }
        });

        $.each($bounceIn, function(_bounceInData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkbounceIn.scrollTop()) && ($(this).offset().top <= ($checkbounceIn.scrollTop() + $checkbounceIn.height()))) {
                $(this).addClass('bounceineffect');
            } else {
                $(this).removeClass('bounceineffect');
            }
        });

         $.each($tadaEffect, function(_tadaEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checktada.scrollTop()) && ($(this).offset().top <= ($checktada.scrollTop() + $checktada.height()))) {
                $(this).addClass('tadaeffect');
            } else {
                $(this).removeClass('tadaeffect');
            }
        });

         $.each($shakeEffect, function(_shakeEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkshake.scrollTop()) && ($(this).offset().top <= ($checkshake.scrollTop() + $checkshake.height()))) {
                $(this).addClass('shakeffect');
            } else {
                $(this).removeClass('shakeffect');
            }
        });

         $.each($shakerideEffect, function(_shakerideEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkshakeride.scrollTop()) && ($(this).offset().top <= ($checkshakeride.scrollTop() + $checkshakeride.height()))) {
                $(this).addClass('shakerideffect');
            } else {
                $(this).removeClass('shakerideffect');
            }
        });

         $.each($rubberbandEffect, function(_rubberbandEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkrubberband.scrollTop()) && ($(this).offset().top <= ($checkrubberband.scrollTop() + $checkrubberband.height()))) {
                $(this).addClass('rubberbandffect');
            } else {
                $(this).removeClass('rubberbandffect');
            }
        });

         $.each($speedinEffect, function(_speedInleftEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkspeedin.scrollTop()) && ($(this).offset().top <= ($checkspeedin.scrollTop() + $checkspeedin.height()))) {
                $(this).addClass('speedinlefteffect');
            } else {
                $(this).removeClass('speedinlefteffect');
            }
        });

        $.each($speedinrightEffect, function(_speedInrightEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkspeedinright.scrollTop()) && ($(this).offset().top <= ($checkspeedinright.scrollTop() + $checkspeedinright.height()))) {
                $(this).addClass('speedinrighteffect');
            } else {
                $(this).removeClass('speedinrighteffect');
            }
        });

         $.each($slideupEffect, function(_slideUpEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkslideup.scrollTop()) && ($(this).offset().top <= ($checkslideup.scrollTop() + $checkslideup.height()))) {
                $(this).addClass('slideupeffect');
            } else {
                $(this).removeClass('slideupeffect');
            }
        });

        $.each($slidedownEffect, function(_slideDownEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkslidedown.scrollTop()) && ($(this).offset().top <= ($checkslidedown.scrollTop() + $checkslidedown.height()))) {
                $(this).addClass('slidedowneffect');
            } else {
                $(this).removeClass('slidedowneffect');
            }
        });

        $.each($slideleftEffect, function(_slideLeftEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkslideleft.scrollTop()) && ($(this).offset().top <= ($checkslideleft.scrollTop() + $checkslideleft.height()))) {
                $(this).addClass('slidelefteffect');
            } else {
                $(this).removeClass('slidelefteffect');
            }
        });

        $.each($sliderightEffect, function(_slideRightEffectData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkslideright.scrollTop()) && ($(this).offset().top <= ($checkslideright.scrollTop() + $checkslideright.height()))) {
                $(this).addClass('sliderighteffect');
            } else {
                $(this).removeClass('sliderighteffect');
            }
        });

        $.each($fadeinleftEffect, function(_fadeInleftData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkfadeinleft.scrollTop()) && ($(this).offset().top <= ($checkfadeinleft.scrollTop() + $checkfadeinleft.height()))) {
                $(this).addClass('fadeinlefteffect');
            } else {
                $(this).removeClass('fadeinlefteffect');
            }
        });

        $.each($fadeinrightEffect, function(_fadeInrighttData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkfadeinright.scrollTop()) && ($(this).offset().top <= ($checkfadeinright.scrollTop() + $checkfadeinright.height()))) {
                $(this).addClass('fadeinrighteffect');
            } else {
                $(this).removeClass('fadeinrighteffect');
            }
        });

        $.each($fadeleftshakEffect, function(_fadeLeftshakeData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkfadeleftshake.scrollTop()) && ($(this).offset().top <= ($checkfadeleftshake.scrollTop() + $checkfadeleftshake.height()))) {
                $(this).addClass('fadeleftshakeffect');
            } else {
                $(this).removeClass('fadeleftshakeffect');
            }
        });

        $.each($faderightshakEffect, function(_fadeRightshakeData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkfaderightshake.scrollTop()) && ($(this).offset().top <= ($checkfaderightshake.scrollTop() + $checkfaderightshake.height()))) {
                $(this).addClass('faderightshakeffect');
            } else {
                $(this).removeClass('faderightshakeffect');
            }
        });

        $.each($swingEffect, function(_swingData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkswing.scrollTop()) && ($(this).offset().top <= ($checkswing.scrollTop() + $checkswing.height()))) {
                $(this).addClass('swingeffect');
            } else {
                $(this).removeClass('swingeffect');
            }
        });

        $.each($slideleftrollEffect, function(_slideleftrollData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checkslideleftroll.scrollTop()) && ($(this).offset().top <= ($checkslideleftroll.scrollTop() + $checkslideleftroll.height()))) {
                $(this).addClass('slideleftrolleffect');
            } else {
                $(this).removeClass('slideleftrolleffect');
            }
        });

        $.each($sliderightrollEffect, function(_slideleftrollData) {
            if ((($(this).offset().top + $(this).outerHeight()) >= $checksliderightroll.scrollTop()) && ($(this).offset().top <= ($checksliderightroll.scrollTop() + $checksliderightroll.height()))) {
                $(this).addClass('sliderightrolleffect');
            } else {
                $(this).removeClass('sliderightrolleffect');
            }
        });


    }

    $checkScrollview.on('scroll resize', check_scrollView);
    $checkScrollview.trigger('scroll');


});