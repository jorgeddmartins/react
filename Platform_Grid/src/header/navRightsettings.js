import React from 'react';

import $ from 'jquery';

const lifeblks = ['ALC', 'ALL', 'ALLPQ', 'COR', 'FIR', 'FIRPQ'];


class Navrightsettings extends React.Component {

	componentDidMount() {

		$.fn.navSettings = () => {

			$('.NavRsettings').detach();

			//$('.rights-blk.Life_Blk').show().appendTo('');

			$('.NavRsettings .Life_Blk').clone().appendTo('.Products_floor #Life');

		}
		$(document).navSettings();
	}

	render() {

		return(

			<div className="NavRsettings">

				{ lifeblks.map( (value, index) => (

					<div className="rights-blk Life_Blk">
						<label className="switch">
						  	<input type="checkbox" />
						  	<span className="slider round"></span>
						</label>
						<span className="right_title" key="{index}">{ value }</span>
						<hr/>
					</div>

				))}

			</div>
		);
	}
}

export default Navrightsettings;