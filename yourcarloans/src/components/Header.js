import React from 'react';

const Header = ({ nametitle }) => (
  

	<header>
	    <div className="container">
	        <div className="logoBox"><img src="img/logo.jpg" alt="Logo"/></div>
	        <span className="headerTxt">{nametitle}</span>
	    </div>
	</header>


);

export default Header;
