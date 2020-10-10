import React from 'react';

import $ from 'jquery';


class Data extends React.Component {

	componentDidMount() {

		const QinexApp = (sOption) => {

			let QinexPlugin = 'QinexApp';

			let win = $(window);

			let qsetts = $.extend({

				wheight: win.height(),

				wwidth: win.width(),

				dropTip: $('<span/>', { class: 'dropToolTip'}),

				toolTip: $('<span/>', { class: 'searchTip' }),

				valTip: true

			}, sOption);


			function RunQinex() {

				this._name = QinexPlugin;

				this.GoQinex();

				this.KendoTips();

				this.globalclk();
			}

			$.extend( RunQinex.prototype, {

				GoQinex: () => {

					let WinResol = () => {
					
						$('html').addClass('h_' + qsetts.wheight);
						$('html').addClass('w_' + qsetts.wwidth);
					};
					$(document).ready(WinResol); 
					$(window).resize(WinResol);

					// Runs on Load Functions 'mobileCheck & browserCheck'
					$(window).ready(function() { mobileCheck(); browserCheck(); });
				},

				KendoTips: () => {

					// Creates ToolTips for each DropDown
					$(qsetts.dropTip).appendTo('.inp_Tl .k-widget .k-state-default').append(qsetts.toolTip);

					$(qsetts.toolTip).html('Test It');

					if(qsetts.valTip === true) {

						$('.periStatH .dropToolTip').addClass('periStat fad');

						$('.periStat .searchTip').addClass('periTip').html('Period').css({ left: '-11px'});
					}
				},

				globalclk: () => {

					$(document).on('click', '.delivLi', function() {

						$('.gridBody h4').html( $(this).html());

						$('.gridBody h4 i').css({ color: '#2796c6' });

						$('.gridBody h4 span').css({ 'margin-left': '15px' });

					});

				}

			});

			let Rs7 =  new RunQinex();
		}

		QinexApp();

		// Clears Cache
		console.clear();



		// $(document).on('click', '.delivLi', function() {

		// 	$('.gridBody h4').html( $(this).html());

		// 	$('.gridBody h4 i').css({ 'margin-right': '10px', color: '#2796c6' });

		// });




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
				
				|| navigator.userAgent.indexOf('OPR')) !== -1 ) { $('html').addClass('Opera'); } 
			
			// Check For Chrome Browser
			else if(navigator.userAgent.indexOf('Chrome') !== -1 ) { $('html').addClass('Chrome'); } 
			
			// Check For Safari Browser
			else if(navigator.userAgent.indexOf('Safari') !== -1) { $('html').addClass('Safari'); } 
			
			// Check For FireFox Browser
			else if(navigator.userAgent.indexOf('Firefox') !== -1 ) { $('html').addClass('Firefox'); } 
		}
	}

	render() {

		return (<></>)
	}
}

export default Data;