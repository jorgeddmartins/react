import React from 'react';

import $ from 'jquery';



class Scrollbar extends React.Component {


	componentDidMount() {

		$.getScript('assets/js/jquery.mCustomScrollbar.js');
	}


	render() {

		return (<></>)
	}
}

export default Scrollbar;