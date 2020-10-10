import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import { Route, NavLink, HashRouter } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Keypad from '../keypad/keypad';

function Signup() {
  	return (

	    <div className="AppSignup">

	    	<header>
	    		<span>Create Home Desk</span>
	    		<span className="Hbtttrace"></span>
	    	</header>

	    	<span className="subTitlesup">Please, Create Your:</span>

	    	<form action="" method="post">

	    		{/*<input type="text" className="InpPassCode" name="" placeholder="PassCode" />*/}
	    		<div className="InpPassCode"><span className="placeholder">PassCode</span></div>
	    		<input type="text" className="keyNumVal" id="keyNumVal" name="keyNumVal" style={{ display: 'none' }} />

	    		<span className="bttInp">Type Minimum 7 numbers for your PassCode</span>

	    		<div className="crBtn_Floor">
	    			<span className="CreatePass">CREATE</span>
	    		</div>

	    	</form>

	    	<Keypad />  

	    	<div className="Success_popUp">
	    		<div className="Success_in">
	    			<span></span>
	    		</div>
	    	</div> 
	    
	    </div>
  	);
}

export default Signup;