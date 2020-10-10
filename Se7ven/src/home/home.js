import React from 'react';

//import { Route, NavLink, HashRouter } from "react-router-dom";

import logoW from '../assets/img/logoW.png';

import { Link } from "react-router-dom";

import Keypad from '../keypad/keypad';

function Home() {
  return (

    <div className="ApphOME">

       <header>
        	{/*<div className="logo_Box"><img src="assets/img/logoW.png" alt="" /></div>*/}
            <div className="logo_Box"><img src={ logoW } alt="" /></div>
        </header>

        <section>

        	<span style={{ fontSize: '20px', letterSpacing: '0' }}><strong>Hi, Welcome!</strong></span>
        	<span>Please create your Home Desk or Login</span>

        	<span className="DeskGo">Create Home Desk 
        		<i className="lnr lnr-arrow-right"></i>
        	</span>

            <Link to="/desk" className="DeskLogin">Login To Your Desk <i className="lnr lnr-arrow-right"></i></Link>

            <Keypad/>

        </section>
    
    </div>
  );
}

export default Home;