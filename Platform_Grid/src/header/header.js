import React from 'react';

import $ from 'jquery';

import { Link } from "react-router-dom";

class Header extends React.Component {

	componentDidMount() {

		$.fn.RHeader = () => {

			$(document).on('click', '.avatar', function() {

				$('.avatar-modal').toggle();

			});
		}
		$(document).RHeader();
	}

	render() {

		return (

			<nav className="top-nav">
				<div className="box_lg"><img src="assets/img/login/QinexLogo.svg" alt="" /></div>

				<div className="avatar_room">
					<span className="avatar"><img src="assets/img/male.jpg" alt="" /></span>
					<div className="avatar-modal">
						<span className="avatar-arrow"></span>
						<ul className="avatar-helpers">
							<li><Link className="settings-role" to="/profilesettings">Profile Settings</Link></li>
							<li className="logout-state"><a href="/">Logout</a></li>
						</ul>
					</div>
					<span className="name_avatar">Hi Jorge </span>
				</div>
			</nav>
		);
	}
}

export default Header;