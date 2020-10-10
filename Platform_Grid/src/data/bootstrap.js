import React from 'react';

import $ from 'jquery';


class BootstrapApp extends React.Component {

	componentDidMount() {

		$.getScript('assets/js/bootstrap.min.js');
	}

	render() {

		return (<></>)
	}
}

export default BootstrapApp;