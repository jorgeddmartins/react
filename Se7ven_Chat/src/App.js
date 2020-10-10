import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  HashRouter,
  Switch,
  Route, Link
} from "react-router-dom";

import Chat from './chat/chat';

import Gochat from './chat/gochat';

import Settings from './settings/settings';

import Data from './data/data';

import Reset from './data/reset';

const tabtxts = ['Sign Up or Sign In To be', 'anywhere, anytime with Your Team Mates!'];


{/*function App() { */}

class App extends React.Component {

	render() {
           
		return (

		  	<HashRouter> 
			    <div className="App">
			    	<div className="overlay_App">

			    		<div className="topSection">
			    			<span className="topSmall_Title">Build Your Team, Build Your Business</span>

			    			<div className="WelcomeTxt_Blk">
			    				<span className="Top_welcome_txt">WELCOME TO</span>
			    				<span className="Bottom_welcome_txt">SE7VEN CHAT</span>
			    			</div>
			    		</div>

			    		<div className="bottomSection">

			    			<div className="tab_top">

			    				{tabtxts.map((value, index) => (
			    					<p className="tab_Top_Txt" key={index}>{ value }</p>
			    				))}

			    			</div>

			    			<div className="tab_top_Up">
			    				<div className="tab_Top_Btns">
			    					<span className="action_Btn signUp">Sign Up</span>
			    					{/*<span className="action_Btn signIn">Sign In</span>*/}
			    					<Link to="/chat" className="action_Btn signIn">Sign In</Link>
			    				</div>

			    				<div className="middleOr">
			    					<span className="trace"></span>
			    					<span className="trace_Letter">Or</span>
			    					<span className="trace"></span>
			    				</div>

			    				<div className="tab_Top_Btns">
			    					<span className="action_Btn sigInW">SIGN IN WITH LINKEDIN ACCOUNT</span>
			    				</div>
			    			</div>

			    		</div>
			    	</div>

			    	<img className="imBack" src="assets/img/7.jpg" alt="" />


			    	<div className="SignUp_popUp">
			    		<span className="TopClose"></span>
			    		<div className="SignUp_popUp_In"></div>
			    	</div>



					{/*<span>Welcome To Se7ven Chat Mobile First</span>
					<p>🍔</p>
					<p>😀</p>

					<span>&#129315;</span>
					<p>I will display &#129315;</p>
					<p>I will display &#x1F923;</p>*/}


					<Data/>
					<Reset/>

					<Switch>
			            <Route path="/chat">
			                <Chat/>
			            </Route>
			            <Route path="/gochat">
			            	<Gochat/>
			            </Route>
			            <Route path="/settings">
			            	<Settings/>
			            </Route>
			            <Route path="/"></Route>
			        </Switch>
			    </div>
		    </HashRouter>
		);

	}
}

export default App;
