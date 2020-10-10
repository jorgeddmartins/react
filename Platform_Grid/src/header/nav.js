import React from 'react';

import $ from 'jquery';

import { Link } from 'react-router-dom';

import Menu from '../header/menu';


class Nav extends React.Component {

	componentDidMount() {

		$.getScript('assets/js/routing.js');
	}

	render() {

		return(

			<div className="Nav_App">

				<nav className="left-nav">
				 	<div id="leftNav-Accordion" className="leftNavAccordion content newleft-nav-back">
						<ul id="leftNav-SubAccordion">
							
							<li className="li-Leads" id="id-1">
							    <a className="new-left-nav-item newleft-nav-back paddout no-arr linkUrl" href="#/leads" id="id_1">
							        <span className="new-top-item">Leads</span>
							        <span className="new-top-item-second">Review and Manage all Leads</span>
							        <span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
							            <i className="fad fa-th-list" aria-hidden="true"></i>
							        </span>
							    </a>
							</li>

							<Menu/>

							<li className="li-Log Me Out" id="id-64">
			                    <a className="new-left-nav-item newleft-nav-back paddout no-arr linkUrl" href="/" id="id_64">
			                        <span className="new-top-item">Log Me Out</span>
			                        <span className="new-top-item-second">And Show me a nice picture...</span>

			                        <span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
			                            <i className="fad fa-power-off"> </i>
			                        </span>
			                    </a>
			                </li>

						</ul>
					</div>
				</nav>

			</div>
		);
	}
}

export default Nav;