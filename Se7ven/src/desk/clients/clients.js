import React from 'react';

import Chartclients from '../chart/chartclients';


function Clients() {
	return (

		<div className="ClientsApp">

			<div className="leftApp"></div>

			<div className="rightApp">
				<Chartclients/>
			</div>
		</div>
	);
}

export default Clients;