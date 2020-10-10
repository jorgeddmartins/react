import React from 'react';

//import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";


function Login() {
	return(

		<div className="LoginApp">

			<div className="overlay_back">
			    <div className="overlay-t">

			        <span className="topMsg errorMsg">UserName or Password is Incorrect</span>

			        <div className="conv-large-A20-wl row-content-lg">
			            <div className="column-grid-login">
			                <div className="logo_box"></div>
								
							<form action="" className="login_fr" method="get"> 
			               
			                    <div className="box-usern">
			                        <label id="u-login" className="user-login user-login-sc">Username</label>
			                        <input type="text" className="in-user" id="username" name="UserName" />
			                    </div>

			                    <div className="box-usern">
			                        <label id="p-login" className="pass-login user-login-sc">Password</label>
			                        <input type="password" className="in-pass" id="password" name="Password" />
			                    </div>

			                    <div className="box-submit">
			                        <div className="fc-submit"></div>
			                        <a className="lg-btn-bx" href="#/leads">Let Me in</a>
			                    </div>

			                     <div className="RegsBlk">
			                        <a className="RegistLog" href="/">Register user</a>
			                        <a className="RegistLog" href="/">Forgot Pasword?</a>
			                    </div>

							</form>
			            </div>
			        </div>
			    </div>
			</div>

		</div>

	);
}

export default Login;