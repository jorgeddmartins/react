import React from 'react';

import $ from 'jquery';

import {Link} from "react-router-dom";

import Chatusers from '../chat/chatusers';

class Chat extends React.Component {

	componentDidMount() {

		$(document).on('click', '.plus', function(e) {

			// e.stopPropagation();

			// $('.plusUser').toggle(50);
			$('.plusUser').animate({ left: '0'}, 200);
			$('.plus').css({ opacity: '0.5'});
		});

		$(document).on('click', '.inputEspan', function() {

			$('.inEspanTitle').animate({ 'padding-top': '0'}, 200);
		});
	}

	render() {

		return (

			<div className="ChatApp">

				<header className="HeaderChat WChat" id="Hchat">

					<i className="lnr lnr-magnifier"></i>
					<span className="mTxt">ALL CHATS</span>
					<span className="plus">+</span>

					<div className="plusUser">
						<span className="inEspanTitle">ADD NEW FREIND</span>
						<div className="inputEspan">
							<span className="placeHolder">Freind Email</span>
						</div>
					</div>

					<div className="Avatar">
						<Link to="/settings"><i className="lnr lnr-cog"></i></Link>
						<img src="assets/img/avatar.jpg" alt="" />
						<span className="status online"></span>
					</div>
				</header>

				<Chatusers/>

			</div>
		)
	}
}

export default Chat;