import React from 'react';

import Chartteam from '../chart/chartteam';

import { Link } from 'react-router-dom';

//import $ from 'jquery';

import TeamSrequest from './data/teamsrequest';


class Teams extends React.Component {

	btnSeeall = () => {

		let elm = document.getElementById('sAllTeams');
		elm.classList.remove('aModalNone');

		let elmIn = document.getElementById('sAll_In');
		elmIn.classList.add('sTeams');
	}


	btnSeeallRemo = () => {

		let elm = document.getElementById('sAllTeams');
		elm.classList.add('aModalNone');

		let elmIn = document.getElementById('sAll_In');
		elmIn.classList.remove('sTeams');
	}

	componentDidMount() {}

	render() {

		return (

			<div className="teamsApp">

				<div className="leftApp">
					<Chartteam/>

					<span className="DateTime">You are member of 7 TEAMS</span>
				</div>

				<div className="rightApp">
					<h2>You Work with</h2>

					<Link to="/createteam" className="actBtn" style={{ marginTop: '10px'}}>CREATE TEAM</Link>

					<span className="actBtn" style={{ marginTop: '40px'}} onClick={this.btnSeeall}>SEE ALL TEAMS</span>

				</div>
				<div className="Team_Request">
					<span className="TRequest_title">MY TEAMS REQUESTS</span>

					<div className="Teamms_Blk">
						<div className="Teamms_Blk_In">

							<TeamSrequest/>

							<div className="acceptModal aModalNone" id="acceptModal">
			                    <span className="aModal_in" id="aModal_in">Team Accepted</span>
			                </div>

			                <div className="removeModal aModalNone" id="removeModal">
			                    <span className="rModal_in" id="rModal_in">Team Removed</span>
			                </div>

						</div>
					</div>

				</div>


				<div className="sAllTeams aModalNone" id="sAllTeams" onClick={this.btnSeeallRemo}>

					<div className="sAll_In" id="sAll_In"></div>
				</div>


			</div>
		);
	}
}

export default Teams;