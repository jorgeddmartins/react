
;(function($) {
	
	$('.actions li:nth-child(1) a').text('Prev');


	slider1 = $('#ex1');

    sliderUp = {

        runSlider: function() {
            slider1.slider({
                formatter: function(value) {
                    return value + ',' + '000';
                }
            });

        }
    }

    sliderUp.runSlider();

})(jQuery);