import React from 'react';

import { Link } from "react-router-dom";

function Header() {

	return (

		<header>
			<nav>
				<a className="l_Url" href="/">Homepage</a>
				<Link className="l_Url portUrl" to="/portfolio">Portfolio</Link>
				<Link className="l_Url" to="/about">About</Link>
			</nav>
		</header>
	)
}

export default Header;