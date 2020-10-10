import React from 'react';

import Chartwork from '../chart/chartwork';

import { Link } from 'react-router-dom';


function Work() {

	return (

		<div className="workApp">

			<div className="leftApp">
				<h2>You had completed</h2>

				<div className="DaysOff">
					<span className="Day_Off">10 June 17 June</span>
					<span className="Day_Off"><b>You are off</b></span>
				</div>

				 <Link to="/settings" className="actBtn">SET WORK HOURS</Link>

			</div>

			<div className="rightApp">
				<Chartwork/>

				<span className="DateTime">TODAY Saturday 20 June</span>
			</div>

		</div>
	);
}

export default Work;