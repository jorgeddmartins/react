import React from 'react';

// import axios from 'axios';

import $ from 'jquery';

import { Link } from  'react-router-dom';

// import TeamSrequest from './data/teamsrequest';

//import Calendar from './calendar/calendar';

import Chat from './chat/chat';


class Createteam extends React.Component {

	componentDidMount() {

		$.fn.RunCreateT =  () => {}
	}

	render() {

		return (

			<div className="createTApp">
				<header>
					<Link to="/desk" className="backLink"><i className="lnr lnr-arrow-left"></i></Link>
		    		<span>Create a Team</span>
		    		<span className="Hbtttrace"></span>
		    	</header>


		    	{/*<Calendar/>*/}

		    	<Chat/>

			</div>
		);

	}
}

export default Createteam;
