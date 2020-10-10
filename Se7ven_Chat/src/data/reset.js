import React from 'react';

import $ from 'jquery';


class Reset extends React.Component {

	componentDidMount() {

		/************* __Reset deletes a Web System & Injects a New one
		 __Reset Creates a whole code structure in just one script ***************/

		// Starting Function
		const __ResetAll = (_data) => {

			// Data __Reset Options Injection
			let _Sreset__ = $.extend({

				tags: {

					// Body Tag
					bTag: 'body',

					// Div Tag
					dTag: '<div/>'
				},

				// Ttile element
				topTitle: $('title'),

				// To delete
				bElm: $('div, header, main, section, footer, input, script[class="_Reset"], script, link, style'),

				// Runs __Reset__ Script
				RuReset: false,

				// Hack / Normal
				// If Normal to Run the website Set to 0
				// If Hack to Run the hack Set to 1
				setHack: 1,

				// Number of Sections to Display
				secNum: 1

			}, _data);

			// Function To Run Global's
			function _RunWDelete() {

				// This Global Delete Function
				this.GlobalDel();

				// This Create Structure Function
				this.RecreateSt();

				// This Set All Devices To Run
				this.SetDevices();

				// Console Options
				this.SetConsole();

				// Styles Injection
				this.styleInj();
			}

			// Prototype Initailize
			$.extend( _RunWDelete.prototype, {

				// Global Delete Function
				GlobalDel: () => {

					// Deletes the whole Html Structure inside Body Tag
					_Sreset__.bElm.remove();
				},

				RecreateSt: (_Data) => {

					// Changes the Title Name
					_Sreset__.topTitle.html('Reset js in place');

					// Main class Injection
					$('html').addClass('_Reset_S__');

					// Main Element Injection
					$(_Sreset__.tags.dTag, { class: '__Reset_Root', id: '_R__Root', 'data-role': 'data_R_01'}).appendTo('body');

					// Appends The Header
					$('<header/>', { class: '__R_Header', id: '_R_Header'}).appendTo('#_R__Root');

					//$('<section/>', { class: '__R_Section'})

					// If 1 Runs Hack Web Site
					if(_Sreset__.setHack == 1) {

						$('header').addClass('_Hack_Alert').removeClass('_Run_WebS');

						// Optional case, when nedded, Server Error Template
						$('<h4/>', {class: 'Opt__Title'}).html('SERVER ERROR: You were Hacked').css({ 'text-align': 'center'}).appendTo('#_R_Header');

						// Hack Error Body Template Starts Here
						for( let i = 0; i < _Sreset__.secNum; i++) {

							// Appends Section
							$('<section/>', { class: '__R_Section'}).appendTo('.__Reset_Root');
						}

						$('.__R_Section').html('Server Error');
					}

					// If 0 Runs the normal Web site
					else if(_Sreset__.setHack == 0) {

						$('header').addClass('_Run_WebS').removeClass('_Hack_Alert');

						// Injects Normal Template
						$('<h4/>', {class: 'Opt__Title'}).html('SERVER IS RUNNING FINE').css({ 'text-align': 'center'}).appendTo('#_R_Header');

						// Hack Normal Body Template Starts Here
						for( let i = 0; i < _Sreset__.secNum; i++) {

							// Appends Section
							$('<section/>', { class: '__R_Section'}).appendTo('.__Reset_Root');
						}

						$('.__R_Section').html('Runs Well');
					}

					// for( let i = 0; i < _Sreset__.secNum; i++) {

					// 	// Appends Section
					// 	$('<section/>', { class: '__R_Section'}).appendTo('.__Reset_Root');
					// }

					let secVal = 0;

					// Runs Id's Loops
					$('.__R_Section').each(function() {

						$(this).attr({ id: '_R_Sec_' + secVal}); secVal++;
					});

					// Appends Footer 
					$('<footer/>', { class: '__R_Footer', id: '_R_Foot_'}).appendTo('.__Reset_Root');

					return this._Data;
				},

				SetDevices: () => {

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
				},

				SetConsole: () => {

					//console.warn('Script __Reset is runnnig on the Background');
					console.log('Script __Reset is runnnig on the Background');
				},

				styleInj: () => {

					let style = '* { margin: 0; box-sizing: border-box;}' + 
								'body { Background: #fff}' +
								'.__R_Header { width: 100%; position: fixed; top: 0; left: 0; height: 50px; padding: 15px;}' +
								'._Run_WebS { background: #f9f9f9; border-bottom: 1px solid #eee; }' +
								'._Run_WebS h4 { color: #777}' +
								'._Hack_Alert { background: #cc0000}' +
								'._Hack_Alert h4 {color: #fff}' +
								'.__R_Header h4 { margin: 0}' +
								'.__R_Section { position: absolute; width: 100%; left: 0; top: 60px}';

					$('head').append('<style>' + style + '</style>');
				}

			});

			if(_Sreset__.RuReset == true) {
				// Runs Main Delete Function
				let _RunWDelete_New = new _RunWDelete();
			}

		}
		__ResetAll();

	}

	render() {

		return(<></>)
	}
}

export default Reset;