
$(function() {
	
	"use strict";
	
	$.fn.Se7venApp = (sOption) => {

		let Se7venPlugin = 'Se7venApp';

		let se7venG = $.extend({}, sOption);

		function RunSe7ven() {

			this._name = Se7venPlugin;

			this.GoSe7ven();
		}

		$.extend( RunSe7ven.prototype, {

			GoSe7ven: () => {

				$(document).on('click', '.DeskGo', () => {

					$('.ApphOME').addClass('leftHome');
					$('.AppSignup').addClass('rightSign');

					$('.backImg').addClass('rightSign');

				});

				// Runs Full KeyPad
				$.fn.Se7venKey_Pad = (SevOptions) => {

					// Create Settings
					let settings = $.extend({}, SevOptions);

					// Child 10 changes Text
					$('#KeyPad .keyNum:nth-child(10)').text('');

					$('.chatkeypad #KeyPad .keyNum:nth-child(10)').text('0');

					// Child 11 Changes Text to 0
					$('#KeyPad .keyNum:nth-child(11)').text(0);

					$('.chatkeypad #KeyPad .keyNum:nth-child(11)').text('@');

					// Just allows to write numbers in Inputs
					$('input.keyNumVal').keypress(function(event) {
					  	return /\d/.test(String.fromCharCode(event.keyCode));
					});

					$('input.keyNumVal').attr({ maxlength: 7 });

					$('.AppSignup .padBubbs').remove();

					$('.AppSignup .tkeyPad').html('Use the Keypad above to type your PassCode');

					$.fn.GlobalCl = function() {
						return this.on('click', '*', function(e) {

							let clss = $(this)[0].className;

							if(clss.indexOf('InpPassCode') != -1) {

								$('.AppSignup .keyPad_Row').addClass('keypadUp');
								$('.letterPad_Row').removeClass('letterKeyLeft');
							}

							else if(clss.indexOf('keyNum') != -1) {

								//$('.InpPassCode').val($(this).html());
								$('.placeholder').hide();

								$(this).clone().appendTo('.InpPassCode');

								$('.InpPassCode .keyNum').removeClass('lowers uppers');

								$('.keyNumVal').val( $('.InpPassCode .keyNum').text() );
							}

							else if(clss.indexOf('del') != -1) {

								$('.placeholder').show();
								$('.InpPassCode .keyNum').remove();
								$('.keyNumVal').val('');
							}

							else if(clss.indexOf('CreatePass') != -1) {

								//alert('Yep');
								if($('.InpPassCode .keyNum').length >= 7 && $('.InpPassCode .keyNum').length <= 12 ) {

									$(document).SuccessOpen();
									$('.Success_popUp .Success_in span').text('Great, Well Done!').addClass('setPass');

									let doneTemp = '<span class="gSec doneTemp">Please, Give Us a Sec to set up Your Desk...</span>';

									let wTemp = '<span class="gSec wTemp">Please, Wait...</span>';

									$(doneTemp).appendTo('.Success_popUp .Success_in');

									$('.letterPad_Row').removeClass('letterKeyLeft');
									$('.keyPad_Row').addClass('keypadUp');

									setTimeout(function() {

										$(wTemp).appendTo('.Success_popUp .Success_in');
									}, 3000);

									setTimeout(function() {
										$('.Success_popUp .Success_in span').text('All Done For You!');

										$('.doneTemp').text('We will direct you to the login page.');
										$('.wTemp').text('Please, Login...');

										$('.placeholder').show();
										$('.InpPassCode .keyNum').remove();
										$('.keyNumVal').val('');

									}, 7000);

									setTimeout(function(){

										$('.Success_popUp').hide();
										$('.Success_in').removeClass('Success-Up');

									}, 10000);

									setTimeout(function(){

										$('.AppSignup').removeClass('rightSign');
										$('.ApphOME').removeClass('leftHome');
										$('.backImg').removeClass('rightSign');

									}, 11000);
								}

								else { 

									$(document).SuccessOpen();
									$('.Success_popUp .Success_in span').text('You must have between 7 and 12 Numbers or Letters to create your Desk').removeClass('setPass');

									$('.Success_popUp .Success_in span.gSec').remove();
								}

								if($('.InpPassCode .keyNum').length == 0) {
									
									$(document).SuccessOpen();
									$('.Success_popUp .Success_in span').text('PassCode Field Cannot be Empty').removeClass('setPass');
									$('.Success_popUp .Success_in span.gSec').remove();
								}
							}

							else if(clss.indexOf('Success_popUp') != -1) {

								$(this).hide();
								$('.Success_in', this).removeClass('Success-Up');
							}

							else if(clss.indexOf('Alphabet') != -1) {

								$('.keyPad_Row').removeClass('keypadUp');
								$('.letterPad_Row').addClass('letterKeyLeft');
							}

							else if(clss.indexOf('numeric') != -1) {

								$('.letterPad_Row').removeClass('letterKeyLeft letterPadLeft');
								$('.keyPad_Row').addClass('keypadUp');
							}

							else if(clss.indexOf('upper') != -1) {

								//$('.letterPad_Row .keyNum').css({ 'text-transform': 'uppercase' });
								$(this).css({ 'text-transform': 'lowercase' });
								$('.lowercase').removeClass('upper').addClass('lower');
								$('.lowers').hide();
								$('.uppers').show();
							}

							else if(clss.indexOf('lower') != -1) {

								//$('.letterPad_Row .keyNum').css({ 'text-transform': 'lowercase' });
								$(this).css({ 'text-transform': 'uppercase' });
								$('.lowercase').removeClass('lower').addClass('upper');
								$('.lowers').show();
								$('.uppers').hide();
							}

							else if(clss.indexOf('DeskLogin') != -1) {

								$('.backImg').detach();
							}

						});
					}
					$(document).GlobalCl();

					$.fn.SuccessOpen = () => {

						$('.Success_popUp').show();
						$('.Success_popUp .Success_in').addClass('Success-Up');
					}

					// For UpperCase
					$('.letterPad_Row .keyNum.uppers:nth-child(56)').text('');
					$('.letterPad_Row .keyNum.uppers:nth-child(57)').text('');
					$('.letterPad_Row .keyNum.uppers:nth-child(59)').text('');
					$('.letterPad_Row .keyNum.uppers:nth-child(60)').text('');

					//keyNum lowers SettKeyNum

					// For LowerCase
					$('.letterPad_Row .keyNum.lowers:nth-child(26)').text('');
					$('.letterPad_Row .keyNum.lowers:nth-child(27)').text('');
					$('.letterPad_Row .keyNum.lowers:nth-child(29)').text('');
					$('.letterPad_Row .keyNum.lowers:nth-child(30)').text('');


					$('.chatkeypad .letterPad_Row .keyNum.lowers:nth-child(26)').text('z');
					$('.chatkeypad .letterPad_Row .keyNum.lowers:nth-child(28)').text('');

					$('.chatkeypad .letterPad_Row .keyNum.uppers:nth-child(56)').text('Z');
					$('.chatkeypad .letterPad_Row .keyNum.uppers:nth-child(58)').text('');

					$(document).on('click', '.ApphOME .Alphabet', function() {

						$('.ApphOME #KeyPad').addClass('keyPadHUp');
						$('.ApphOME .tkeyPad').addClass('keyPadHUp');
					});

					$(document).on('click', '.ApphOME .numeric', function() {
						$('.ApphOME #KeyPad').removeClass('keyPadHUp');
						$('.ApphOME .tkeyPad').removeClass('keyPadHUp');
					});

					$(document).on('click', '.ApphOME .keyNum', function() {

						$(this).clone().appendTo('.addBubbs .addBubbs_In');
						$('.bubble').hide();

						$('.addBubbs .addBubbs_In .lowers').show();
						$('.addBubbs .addBubbs_In .uppers').show();

						$('.ApphOME .keyNumVal').val( $('.addBubbs .addBubbs_In .keyNum').text() );

						if($('.addBubbs .addBubbs_In .keyNum').length >= 7 && $('.addBubbs .addBubbs_In .keyNum').length <= 12 ) {
							
							$('.DeskGo').hide();
							$('.DeskLogin').show();

						} else {

							$('.DeskGo').show();
							$('.DeskLogin').hide();
						}
					});

					$(document).on('click', '.ApphOME .lowercase', function() {

						$('.addBubbs .addBubbs_In .lowers').show();
						$('.addBubbs .addBubbs_In .uppers').show();
					});

					$(document).on('click', '.ApphOME .del', function() {
						$('.addBubbs .addBubbs_In .keyNum').remove();
						$('.bubble').show();

						$('.DeskGo').show();
						$('.DeskLogin').hide();
					});

					// Fading Load Screen
					setTimeout(function() { $('.loadElm').fadeOut(300); }, 3000);

					let $imgs = $('#backSlide > img'), current = 0;
    
				    let nextImage = function() {

				        if (current >= $imgs.length) current = 0;
				        	$imgs.eq(current++).fadeIn(function() {
				            $(this).delay(5000).fadeOut(nextImage);
				        })
				    };
				    nextImage();

				    $(document).on('click', '.atSign', function() {

				    	$('.signPad_Row').addClass('signPleft');
						$('.letterPad_Row').removeClass('letterKeyLeft letterPadLeft');
				    });


				    $(document).on('click', '.signPad_Row .lowercase', function() {

				    	$('.signPad_Row').removeClass('signPleft');
				    	$('.letterPad_Row').addClass('letterPadLeft letterKeyLeft');
				    });

				}
				$(document).Se7venKey_Pad();
			}
		});

		let Rs7 =  new RunSe7ven();
	}

	$(document).Se7venApp();



	let WinResol = () => {
					
		let h = $(window).height();
		let	w = $(window).width();
			
		$('html').addClass('h_' + h);
		$('html').addClass('w_' + w);
	};
	$(document).ready(WinResol); 
	$(window).resize(WinResol);


	$(window).ready(function() { mobileCheck(); browserCheck(); });

	// Device Check Function
	function mobileCheck() {

		let ua = navigator.userAgent;
		
		// Check For Android Device
	    if (ua.match(/Android/)) { $('html').addClass('Android'); } 
		
		// Check For Iphone Device
		else if (ua.match(/Phone/)) { $('html').addClass('Iphone'); } 
		
		// Check For Ipad Device
		else if (ua.match(/iPad/)) { $('html').addClass('Ipad'); } 
		
		// Check For Ipod Device
		else if (ua.match(/iPod/)) { $('html').addClass('Ipod'); } 
		
		// Check For BlackBerry Device
		else if (ua.match(/BlackBerry/)) { $('html').addClass('BlackBerry'); } 
		
		// Check For DeskTop Device
		else { $('html').addClass('Desktop'); }
	}

	// Browser Check Function
	function browserCheck() { 
		
		// Check For Opera Browser
	    if((navigator.userAgent.indexOf('Opera') 
			
			|| navigator.userAgent.indexOf('OPR')) != -1 ) { $('html').addClass('Opera'); } 
		
		// Check For Chrome Browser
		else if(navigator.userAgent.indexOf('Chrome') != -1 ) { $('html').addClass('Chrome'); } 
		
		// Check For Safari Browser
		else if(navigator.userAgent.indexOf('Safari') != -1) { $('html').addClass('Safari'); } 
		
		// Check For FireFox Browser
		else if(navigator.userAgent.indexOf('Firefox') != -1 ) { $('html').addClass('Firefox'); } 
	}

	// Clears Cache
	console.clear();
});
