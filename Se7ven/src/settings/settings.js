
import React from 'react';

import { Link } from "react-router-dom";

import $ from 'jquery';
import Keypad from '../keypad/keypad';

import Switch from '../switchNow/switchNow';


class Settings extends React.Component {

	componentDidMount() {

		$.fn.EditSettings = () => {

			$('.SettingsApp .KeypadApp .keyNum').addClass('SettKeyNum');

			// let devs = ['dev1', 'dev2', 'dev3', 'dev4'];
			// console.log(devs.join(' '));


			$.fn.cSetts = function() {

				return this.on('click', '*', function() {

					//let id = $(this)[0].id;

					let cls = $(this)[0].className;

					if(cls.indexOf('formSett') !== -1) {

						$('.formSett').removeClass('PressKey');
						$(this).addClass('PressKey');
						
						//$('.SettingsApp .keyPad_Row').addClass('SfnameTop');
						$('.SettingsApp .letterPad_Row').addClass('letterPadLeft');

						$('.saveSettings').hide();
						$('.RemoveKeyBoard').show();
					}

					else if(cls.indexOf('SettKeyNum') !== -1) {

						$(this).clone().appendTo('.PressKey');
						$('.PressKey .fTxt').hide();

						$('#Sfname').val( $('.fakeForm .Sfname .SettKeyNum').text());
						$('#Slname').val( $('.fakeForm .Slname .SettKeyNum').text());
						$('#Smail').val( $('.fakeForm .Smail .SettKeyNum').text());
						$('#Sjposition').val( $('.fakeForm .Sjposition .SettKeyNum').text());
						$('#Scompany').val( $('.fakeForm .Scompany .SettKeyNum').text());
					}

					else if(cls.indexOf('RemoveKeyBoard') !== -1) {

						$('.letterPad_Row').removeClass('letterPadLeft');
						$('.formSett').removeClass('PressKey');
						$('.signPad_Row').removeClass('signPleft');

						$('.keyPad_Row').removeClass('keypadUp');

						$('.saveSettings').show();
						$(this).hide();

						$('.fakeForm').removeClass('TLess58 TLess102 TLess150 TLess198');
					}

					else if(cls.indexOf('saveSettings') !== -1) {

						if(!$('#Sfname').val() === '') {

							alert('This page was saved');

						} else {

							alert('This Page can not be saved, there are empty fields. All Fields are required!');
						}
					}

					// Setitngs Screen Animation
					if(cls.indexOf('Slname') !== -1) {

						$('.fakeForm').addClass('TLess58');
					}

					else if(cls.indexOf('Smail') !== -1 ) {

						$('.fakeForm').addClass('TLess102');
					}

					else if(cls.indexOf('Sjposition') !== -1) {

						$('.fakeForm').addClass('TLess150');
					}

					else if(cls.indexOf('Scompany') !== -1) {

						$('.fakeForm').addClass('TLess198');
					}

					else if(cls.indexOf('react-switch-button') !== -1) {

						//$('.userInfo').text('You are Visible, Teams and Clients can see You');
						$('.userInfo').text(function(i, text) {

							return text === 'You are not Visible' ? 'You are Visible, Teams and Clients can see You' : 'You are not Visible';
						});
					}

				});
			}

			$(document).cSetts();
		}

		$(document).EditSettings();
	}


	render() {

		return (

			<div className="SettingsApp">

				<header>
					<Link to="/desk" className="backLink"><i className="lnr lnr-arrow-left"></i></Link>
		    		<span>Edit Settings</span>
		    		<span className="saveSettings" id="sSettings2">Save</span>
		    		<span className="RemoveKeyBoard" id="sSettings3">Hide KeyBoard</span>
		    		<span className="Hbtttrace"></span>
		    	</header>
		    	<span className="userInfo">You are not Visible</span>

		    	<section>

		    		{/* Front End Code */}
		    		<div className="fakeForm">
		    			<span className="formSett Sfname"><span className="fTxt">Your First Name</span></span>
		    			<span className="formSett Slname"><span className="fTxt">Your Last Name</span></span>
		    			<span className="formSett Smail"><span className="fTxt">Your Email</span></span>
		    			<span className="formSett Sjposition"><span className="fTxt">Job Position</span></span>
		    			<span className="formSett Scompany"><span className="fTxt">Company</span></span>
		    			<div className="Switch_Box">
		    				<span className="Switch_Title">Set me Visible</span>
		    				<Switch/>
		    			</div>
		    			
		    		</div>

		    		{/* Back End Code */}
		    		<form action="" method="POST">
		    			<input type="text" id="Sfname" style={{ display: 'none'}} />
		    			<input type="text" id="Slname" style={{ display: 'none'}} />
		    			<input type="text" id="Smail" style={{ display: 'none'}} />
		    			<input type="text" id="Sjposition" style={{ display: 'none'}} />
		    			<input type="text" id="Scompany" style={{ display: 'none'}} />
		    		</form>
		    	</section>

		    	<footer>
		    		<a href="/" className="logOut">Log Me Out</a>
		    	</footer>

		    	<Keypad/>
		    	
			</div>
		);
	}
}


export default Settings; 