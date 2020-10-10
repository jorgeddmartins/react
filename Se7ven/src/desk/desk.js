
import React, { Component } from 'react';

import $ from 'jquery';

import { Link } from "react-router-dom";

import Work from '../desk/work/work';
import Teams from '../desk/teams/teams';
import Clients from '../desk/clients/clients';


class Desk extends Component {

	componentDidMount() {

		$.fn.deskComp = () => {}
	}

	render() {
		return (

			<div className="deskApp">

				<header>

					<img src="assets/img/header.jpg" alt="" />
					<div className="top_header">

						<h1 className="nameTitle">Hi, <span className="fName">Jorge</span></h1>
						<span className="Jposition">Front End Engineer<span> at </span>
							<span className="JCompany">Se7ven</span>
						</span>

						<div className="edit_Blk">

							<Link to="/settings" className="settingd_btn" id="settsBtn">Edit Settings</Link>

							<div className="WHours">
								<span className="WHtitle">Your Working Hours:</span>
								<span className="WHdesc">09:00am to 05:30pm</span>
							</div>
						</div>

						<span className="code7">Your Code: <span>JORWARTasfd777</span></span>
						<span className="access7">Desktop Access: <span>https://www.se7ven/acces7</span></span>

					</div>
				</header>

				<section>
					<Work/>
					<Teams/>
					<Clients/>
				</section>

				<footer></footer>

			</div>
		);
	}
}

export default Desk;