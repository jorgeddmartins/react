import React from 'react';

import $ from 'jquery';



class Calendar extends React.Component {


	componentDidMount() {

		$.fn.calendarR = (options) => {}
	}

	render() {

		return (

			<div className="CalendarApp">The Calendar Goes Here</div>
		);
	}
}

export default Calendar;