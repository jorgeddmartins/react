
$(function() {

	"use strict";

	const __routingN = (rOptions) => {

		let rSettings = $.extend({

			rWindow: window.location.pathname,

			hrefp: window.location.href,

			url: 'http://localhost:3001',

			urlf: 'http://localhost:3000' 

		}, rOptions);

		function routingS() { 

			this.runRoute(); 

			this.navSetup();

			this.resRoute();
		}

		$.extend( routingS.prototype, {

			runRoute: () => {

				// Design Settings Route
				if(rSettings.hrefp === rSettings.url + '/#/designsettings' 
					|| rSettings.hrefp === rSettings.urlf + '/#/designsettings') {
						
					$('#searchbar h4').removeClass('blkHide').html( $('#id-162 a').html());
					$('.searchSteps').addClass('blkHide');

					$('html').addClass('DesignSettings');

					$('title').html('Qinex' + ' ' + $('#id-162 a').text());
				}

				// TeleSales Route
				else if(rSettings.hrefp === rSettings.url + '/#/telesales' 
					|| rSettings.hrefp === rSettings.urlf + '/#/telesales') {

					$('html').addClass('TeleSalesHome');
				}

				// Product Types Route 
				else if(rSettings.hrefp === rSettings.url + '/#/producttypes' 
					|| rSettings.hrefp === rSettings.urlf + '/#/producttypes') {
						
					$('#searchbar h4').removeClass('blkHide').html( $('#id-58 a').html());
					$('.searchSteps').addClass('blkHide');

					$('html').addClass('ProductTypes');

					$('title').html('Qinex' + ' ' + $('#id-58 a').text());
				}

				// DeliveryRotation Route
				else if(rSettings.hrefp === rSettings.url + '/#/deliveryrotation' 
					|| rSettings.hrefp === rSettings.urlf + '/#/deliveryrotation') {

					$('#searchbar h4').removeClass('blkHide').html( $('#id-41 a').html() );

					$('html').addClass('DeliveryRotation');

					$('title').html('Qinex' + ' ' + $('#id-41 a').text());

					$('.DeliveryRotation #searchbar .searchSteps').detach();

					$('.DeliveryRotation #searchbar').css({ width: '82.4%'});
				}
			},

			navSetup: () => {

				$("li.li-Merchant.Settings").before($('<div>', { class: "separate-nav li_Merchant" })
					.append($('<span>', { class: "separ-title" }).html("Settings"))); 

				$("li.li-Log").before($('<div>', { class: "separate-nav li_Log" })
					.append($('<span>', { class: "separ-title" }).html("Logout"))); 

				$(".new-left-nav-item").addClass("linkUrl"); 

				$(".new-drop-qx").addClass("subMenu"); 




				// Starts Nav Accordion

				var speed = 110;

				let n = function (e, a) {

					this.el = e || {}, this.multiple = a || !1, this.el.find(".linkUrl").on('click', {
						el: this.el,
						multiple: this.multiple
					}, this.dropdown)

				};

				n.prototype.dropdown = function (e) {

					let a = e.data.el,
						t = $(this),
						n = t.next();

					n.slideToggle(speed), 

					t.parent().toggleClass("open");

					e.data.multiple || a.find(".subMenu").not(n).slideUp(speed).parent().removeClass("open");
				};
				new n($("#leftNav-Accordion"), !1);

				$(".new-sub-url").addClass("SublinkUrl"); 

				$(".new-drop-sub").addClass("SubsubMenu"); 

				(l = function (e, a) {

					this.el = e || {}, this.multiple = a || !1, this.el.find(".SublinkUrl").on('click', {
						el: this.el,
						multiple: this.multiple
					}, this.dropdown)

				}).prototype.dropdown = function (e) {
					let a = e.data.el,
						t = $(this),
						n = t.next();
					n.slideToggle(speed), 
					t.parent().toggleClass("Subopen"), 
					e.data.multiple || a.find(".SubsubMenu").not(n).slideUp(speed).parent().removeClass("Subopen");
				};

				var l = new l($("#leftNav-SubAccordion"), !1);




				// $(document).on('click', '.toggle', function(e) {

				// 	e.stopPropagation();

				// 	let t = $(this);


				// 	t.parent().parent().find('li .inner').slideUp(250);
				// 	t.next('div').slideDown(250);
	
				// });



				$("#leftNav-Accordion").mCustomScrollbar({
					theme: "minimal",
					scrollInertia: 700
				});


			},

			resRoute: () => {

				// @Media Queries( Height ) Function
				let getBrowserWidth = () => {
					
					if(window.innerHeight == 1008) {}
					
					let width = $(window).width();
					
					if( width >= 1100 && width <= 1600 ) { $('html').addClass('SmallScreen'); 
					
					} else { $('html').removeClass('SmallScreen')}
					
					if(width <= 1330) {
						
						$('.teleSaleDownCase').addClass('ResizeCase');
						
						$('.teleSaleUsersTab').next('.marchants-commands').addClass('ResizeCase');
						
					} else {
						
						$('.teleSaleDownCase').removeClass('ResizeCase');
						
						$('.teleSaleUsersTab').next('.marchants-commands').removeClass('ResizeCase');
					}
				};
				getBrowserWidth();
			}

		});

		let routingSett = new routingS();

		$('.blkHide').detach();
	}

	__routingN();



	// DeliveryRotation Accordion ( Scroll Bar )
    $("#deliveryFloor, #loghistsecond").mCustomScrollbar({ theme: "minimal" });

});