import React from 'react';

import $ from 'jquery';


class Data extends React.Component {

	componentDidMount() {

		const chatApp = () => {

			let WinResol = () => {
							
				let h = $(window).height();
				let	w = $(window).width();
					
				$('html').addClass('h_' + h);
				$('html').addClass('w_' + w);
			};
			$(document).ready(WinResol); 
			$(window).resize(WinResol);

			// Load Function to check mobile device & Browser Type
			$(window).ready(function() { mobileCheck(); browserCheck(); });

			// Top Small Title Slides Left when page loads
			setTimeout(function() { $('.topSmall_Title').addClass('goLeft')}, 500);

			// Top Welcome Text Slides Left when page loads
			setTimeout(function() { $('.Top_welcome_txt').addClass('goLeft')}, 1000);

			// Bottom Welcome Text Slides Right When page loads
			setTimeout(function() { $('.Bottom_welcome_txt').addClass('goRight')}, 1500);

			// Bottom Block Slides to Top When Page Loads
			setTimeout(function() { $('.bottomSection .tab_top').addClass('goTop') }, 2000);

			// Login Bottom Block Slides Top When Page Loads
			setTimeout(function() { $('.bottomSection .tab_top_Up').addClass('goTop')}, 2500);



			function rchatApp() {

				// Main prototype function
				this.chatAppR();
			}


			$.extend( rchatApp.prototype, {

				chatAppR: () => {

					$.fn.glChapp = function() {

						return this.on('click', '*', function() {

							let clas = $(this)[0].className;

							if(clas.indexOf('signUp') != -1) {

								$('.SignUp_popUp, .TopClose').show();

								// Form platform shows with delay
								setTimeout(function() { $('.SignUp_popUp_In').addClass('goTop').removeClass('goBottom'); }, 300);
							}

							else if(clas.indexOf('TopClose') != -1) {

								setTimeout(function() { $('.SignUp_popUp_In').removeClass('goTop').addClass('goBottom'); }, 300);

								setTimeout(function() { $('.SignUp_popUp_In').removeClass('goTop goBottom'); }, 400);

								setTimeout(function() { $('.SignUp_popUp, .TopClose').hide(); }, 500);
							}

						});
					}

					$(document).glChapp();


					// Routing
					let rWindow = window.location.pathname;

					let hrefp = window.location.href;

					let devurl1 = 'http://localhost:3001';

					let devurl = 'http://localhost:3002';

					let url = 'http://se7venchat.jorgedd.com'


					if(hrefp === devurl + '/#/chat' || hrefp === url + '/#/chat' || hrefp === devurl1 + '/#/chat') {
						
						$('.overlay_App, .imBack, .SignUp_popUp').detach();

						$('html').addClass('AppChat');

						$('title').html('Se7venChat' + ' ' + 'Chat');
					}

					else if(hrefp === devurl + '/#/settings' || hrefp === url + '/#/settings' || hrefp === devurl1 + '/#/settings') {

						$('.overlay_App, .imBack, .SignUp_popUp').detach();

						$('html').addClass('AppSettings');

						$('title').html('Se7venChat' + ' ' + 'Settings');
					}

					else if(hrefp === devurl + '/#/gochat' || hrefp === url + '/#/gochat' || hrefp === devurl1 + '/#/gochat') {

						$('.overlay_App, .imBack, .SignUp_popUp').detach();

						$('html').addClass('AppGochat');

						$('title').html('Se7venChat' + ' ' + 'Gochat');
					}
				}

			});

			// runs The main App Fuction
			let rchatApp_R = new rchatApp();

			// Clears the Console
			console.clear();
		}

		chatApp();

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


		const AppChat_R = () => {

			$(document).on('click', '.signIn', function() {

				$('.overlay_App, .imBack, .SignUp_popUp').detach();
			});
		}
		AppChat_R();

	}

	render() {

		return (<></>)
	}
}

export default Data;