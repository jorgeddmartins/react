import React from 'react';

import $ from 'jquery';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { process } from '@progress/kendo-data-query';

import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu.jsx';

import products from './products.json';



//import Iconpicker from '../iconpicker/iconpicker';

import Header from '../header/header';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import Searchbar from '../searchbar/searchbar';

// Grid Tabs Filter
const tabs = ['All', 'Requires review', 'Queued for transfer', 'Transferred', 'Rejected', 'Deleted', 'Retained', 'Retained On'];

// Grid Data
const createDataState = (dataState) => {
    return {
        result: process(products.slice(0), dataState),
        dataState: dataState
    };
}

class Leads extends React.Component {


    state = createDataState({
        take: 50,
        skip: 0
    });

    dataStateChange = (event) => {

        this.setState(createDataState(event.data));
    }


   componentDidMount() {

        $.fn.kendoDrops = () => {

            $.fn.GlDrop = function() {

                return this.on('click', '*', function(e) {

                    let cls = $(this)[0].className;

                    if(cls.indexOf('tab-Item') !== -1) {

                        $('.tab-Item').removeClass('k-state-active');
                        $(this).addClass('k-state-active');
                    }

                });
            }
            $(document).GlDrop();

            $('.tab-Item:nth-of-type(1)').addClass('k-state-active');

           // $.getScript('assets/js/calendar/SingledatePicker.js');

        }
        $(document).kendoDrops();


        // let button = document.getElementById("clickPlus"),
        //     buttonminus = document.getElementById("clickMinus"),
        //     increse = document.getElementById("Increse"),
        //     count = 0;

        // button.onclick = function() {
        //     count += 1;
        //     increse.innerHTML = count;
        // };

        // buttonminus.onclick = function() {
        //     count -= 1;
        //     increse.innerHTML = count;
        // };
    }

    render() {

        return (

            <div className="leadsApp">
            
                <Header/>

                <Nav/>

                <Rightnav/>

                <div className="main">

                    <Searchbar/>

                    <div className="grid-Fl">
                        <div className="k-tabstrip-wrapper">
                            <div className="k-widget k-tabstrip k-header k-floatwrap k-tabstrip-top" id="leadstabstrip">

                                <ul className="k-reset k-tabstrip-items">

                                   {tabs.map( tab => (

                                        <li className="k-item tab-Item k-state-default">
                                            <span className="k-link">{ tab }</span>
                                        </li>
                                    ))}

                                </ul>

                                {/* All Leads */}
                                <div className="k-content k-state-active" id="leadstabstrip-1">
                                    <div className="k-widget k-grid k-display-block k-reorderable k-editable">

                                        <div className="k-header k-grid-toolbar k-grid-top">
                                            <a className="k-button k-button-icontext k-grid-excel" href="/"><span className="k-icon fal fa-file-excel"></span>Export to Excel</a>
                                            <a className="k-button k-button-icontext k-grid-custom" href="/"><span className="k-icon fal fa-file-excel"></span>Delete</a>
                                        </div>

                                        <div className="k-grouping-header">Drag a column header and drop it here to group by that column</div>

                                        <div id="grid">

                                            <Grid
                                                data={this.state.result}
                                                {...this.state.dataState}
                                                onDataStateChange={this.dataStateChange}
                                                sortable={true}
                                                pageable={true}
                                                pageSize={8}
                                            >
                                                <Column field="ProductID" title="Product Id" filter={'numeric'} columnMenu={ColumnMenu} />
                                                <Column field="ProductName" title='Product Name' columnMenu={ColumnMenuCheckboxFilter} />
                                                <Column field="UnitPrice" title='Unit Price' filter={'numeric'} columnMenu={ColumnMenu} />
                                                <Column field="Discontinued" title='Discount' filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
                                            </Grid>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

               

                {/*<Iconpicker/>

                <button id="clickPlus">+</button>

                <button id="clickMinus">-</button>

                <span id="Increse">0</span>*/}

            </div>

        );
    }
}

export default Leads;