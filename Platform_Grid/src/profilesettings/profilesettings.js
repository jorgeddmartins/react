import React from 'react';

import Header from '../header/header';

import Searchbar from '../searchbar/searchbar';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import $ from 'jquery';

import UploadApp from '../upload/upload';

class Profilesettings extends React.Component {

	componentDidMount() {

		const _ProfSett = (elm) => {

			let element = document.querySelector(elm);

			element.classList.add('ProfileSettings');


			let name = 'Jorge';
			let lastName = 'Martins';


			$('.fullName label').html(name + ' ' + lastName).attr({ for: name + '_' + lastName });


			$.fn.opChange = function() {

				return this.on('click', '.OpenToChange', function() {

					$('.FormProfile').show();
					$(this).detach();
				});
			}
			$(document).opChange();

		}
		_ProfSett('html');
	}

	render() {

		return (
			<div classNamde="AccountProfile">

				<Header/>

                <Nav/>

                <Rightnav/>

                <div className="main">

                	<div id="searchbar">
                		<div className="panel panel-heading">
	                		<h4 className="pull-left">Profile Settings:
	                			<span className="new-right-ico-floor"><i className="fad fa-cog"></i></span>
	                		</h4>
	                	</div>	
                	</div>

                	<div className="panel panel-body">

                		<div className="profStt fullName">
                			<h5><label></label></h5>
                		</div>


                		<div className="profStt">
                			<div className="prof_UserIn">
                				<UploadApp/>
                				<img src="assets/img/male.jpg" className="EditUserImg" />
                			</div>
                		</div>

                		<div className="profStt">
                			<span className="OpenToChange">Change Your Password</span>

                			<div className="FormProfile">
                				<div className="profStt">
                					<label>Current Password:</label>
                					<div className="ProfileUpd fas">
                						<input className="k-textbox" id="OldPassword" name="OldPassword" style={{ width: '300px'}} type="password" autocomplete="autocomplete" />
                					</div>
                				</div>

                				<div className="profStt">
                					<label>New Password:</label>
                					<div className="ProfileUpd fas">
                						<input className="k-textbox" id="NewPassword" name="NewPassword" style={{ width: '300px'}} type="password" autocomplete="autocomplete" />
                					</div>
                				</div>

                				<div className="profStt">
                					<label>Confirm Password:</label>
                					<div className="ProfileUpd fas">
                						<input className="k-textbox" id="ConfirmPassword" name="ConfirmPassword" style={{ width: '300px'}} type="password" autocomplete="autocomplete" />
                					</div>
                				</div>
                			</div>
                		</div>



                		<div className="OverLayBtn" style={{ width: '135px' }}>
                			<span className="oLayer" style={{background: 'rgba(39, 150, 198, 0.5)' }}></span>
                			<button id="btnSubmit" type="submit" className="MlBtn k-button" style={{display: 'inline-block', background: 'transparent', color: '#fff', 'font-size': '12px'}} data-role="button" role="button" aria-disabled="false" tabindex="0">Update Profile</button>
                		</div>



                	</div>

                </div>
			</div>
		)
	}
}

export default Profilesettings;