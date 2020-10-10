import React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { process } from '@progress/kendo-data-query';

import { GridColumnMenuFilter, GridColumnMenuCheckboxFilter } from '@progress/kendo-react-grid';

import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu.jsx';

import wedrotgrid from './wedrotgrid.json';

// Grid Data
const createDataState = (dataState) => {
    return {
        result: process(wedrotgrid.slice(0), dataState),
        dataState: dataState
    };
}


class Weddelgrid extends React.Component {

	state = createDataState({
        take: 50,
        skip: 0
    });

    dataStateChange = (event) => {

        this.setState(createDataState(event.data));
    }


	render() {

		return (
			<>
				<div className="WednesdayG">
					<Grid
	                    data={this.state.result}
	                    {...this.state.dataState}
	                    onDataStateChange={this.dataStateChange}
	                    sortable={true}
	                    pageable={true}
	                    pageSize={8}
	                >
	                    <Column field="d" />
	                    <Column field="Alert" title='Alert' columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="LeadID" title='LeadID' filter={'numeric'} columnMenu={ColumnMenu} />
	                    <Column field="DistID" title='DistID' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Source" title='Source' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Trackingsummary" title='Tracking Summary' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Pix" title='Pix' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Product" title='Product' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Firstname" title='Firstname' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Lastname" title='Lastname' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Landline" title='Landline' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                    <Column field="Email" title='Email' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
	                </Grid>
                </div>
			</>
		)
	}
}

export default Weddelgrid;