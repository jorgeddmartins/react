import React, { Component } from 'react';

import $ from 'jquery';


class Iconpicker extends Component {

	componentDidMount() {

		const iconpickerPro = () => {

			$.getScript('assets/js/icomodal/iconmodal.js');
		}
		iconpickerPro();
	}

	render() {
		return (
			<div className="pro-imagesettings">
                <div className="close-floor">
                    <span className="fa fa-remove closesettings">
                        <span className="coseTooltip">Close</span>
                    </span>
                    <h5>Icon Menu Settings</h5>
                    <span className="lnr lnr-diamond"></span>
                </div>
                <div className="content-floor">
                    <span className="cont-label">Icon library</span>
                    <div className="position-floor">
                        <div className="library-floor"><span className="dropTextFonts">Font Awesome Pro</span></div>
                    </div>
                    <span className="cont-label">Icon</span>
                    <div className="iconActive-floor"><span className="ico-stage"></span></div>
                    <div className="iconSearch-floor">
                        <input type="text" className="auto-search" id="asearch" placeholder="Search for an Icon..." autoFocus="autofocus" />
                        <i aria-hidden="true" className="fa fa-search"></i>
                    </div>
                    <div className="position-floor">
                        <div className="icons-floor">
                            <div className="iconsFloor-in content" id="iconsFloor-innav"></div>
                        </div>
                        <em>Select Icon from Library</em>
                    </div>
                    <div className="save-blk">
                        <button id="saveFont" className="saveChangesMenu saveNotallowed">Save Changes</button>
                    </div>
                </div>
            </div>
		);
	}
}

export default Iconpicker;