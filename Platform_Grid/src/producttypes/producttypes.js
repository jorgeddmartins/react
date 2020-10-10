import React from 'react';


import Header from '../header/header';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import Searchbar from '../searchbar/searchbar';


class Producttypes extends React.Component {

	componentDidMount() {}

	render() {

		return (

			<div className="ProductTypesApp">
				
				<Header/>

                <Nav/>

                <Rightnav/>

                <div className="main"> 

                	<Searchbar/>

                	Product Types
                </div>

			</div>
		)
	}
}

export default Producttypes;