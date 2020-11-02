import React from 'react';

import { Link } from "react-router-dom";

function Home() {

	return (

		<div className="HomeApp">

			<section>
				
				<h1 id="header" className="header"></h1>
		        <p id="paragraph" className="paragraph"></p>

		        <img id="mobilehome" className="mobile" alt="" />
		        <img id="desktophome" className="desktop" alt="" />

		        <div className="btn_Sec">
		        	<Link className="btnAct btn_left" to="/portfolio">Check out my Portfolio</Link>
		        	<Link className="btnAct btn_right" to="/about">Read more About me</Link>
		        </div>

			</section>

		</div>
	);
}

export default Home;