import React from 'react';

import $ from 'jquery';


class Calendar extends React.Component {

	componentDidMount() {

		$.fn.fullCalendar = () => {

			//$.getScript('assets/js/calendar/datePicker.js');
			$.getScript('assets/js/calendar/SingledatePicker.js');
		}
		$(document).fullCalendar();
	}

	render() {

		return (

			<div className="CalendarApp">

                <div className="pull-left panel-input inp_Tl calenPicker">
					<span className="k-widget k-datepicker inputPicker_mini">
						<span className="k-picker-wrap k-state-default kFrom">
							<span className="datepickerFrom" id="datepicker"></span>
			                <span unselectable="on" className="k-select" aria-label="select" role="button" aria-controls="DateFrom_dateview">
	                            <span className="k-icon k-i-calendar chagClr"></span>
	                        </span>
                        </span>
		            </span>
	            </div>

	            <div className="pull-left panel-input inp_Tl">
					<span className="k-widget k-datepicker inputPicker_mini">
						<span className="k-picker-wrap k-state-default kFrom">
							<span className="datepickerTo"></span>
			                <span unselectable="on" className="k-select" aria-label="select" role="button" aria-controls="DateFrom_dateview">
	                            <span className="k-icon k-i-calendar chagClr"></span>
	                        </span>
                        </span>
		            </span>
	            </div>


				{/*<div className="inputPicker_mini width32 inputPicker_mini_top telSHourPicker">
	                <input type="text" className="datepicker" id="datetimepicker2" placeholder="Calendar 1" />
	                <i className="fad fa-calendar" aria-hidden="true"></i>
	            </div>

				<div className="inputPicker_mini width32 inputPicker_mini_top DynCalendarPicker">
	                <input type="text" className="datepicker" id="datetimepicker4" placeholder="Calendar 2" />
	                <i className="fad fa-calendar" aria-hidden="true"></i>
	            </div>*/}


	            <form action="" method="POST">
	            	{/*<input type="text" id="datetimepicker_Top" style={{ position: 'absolute', right: '20px', top: '0'}} />*/}
	            	<input type="text" id="datetimepicker_From" style={{ position: 'absolute', left: '530px', top: '0', display: 'none'}} />

	            	<input type="text" id="datetimepicker_To" style={{ position: 'absolute', left: '716px', top: '0', display: 'none'}} />
	            </form>

			</div>
		);
	}
}

export default Calendar;