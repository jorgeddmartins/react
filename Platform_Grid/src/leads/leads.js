import React from 'react';

import $ from 'jquery';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { process } from '@progress/kendo-data-query';

import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu.jsx';

import allleads from './allleads.json';

import Header from '../header/header';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import Searchbar from '../searchbar/searchbar';

// Grid Tabs Filter
const tabs = ['All', 'Requires review', 'Queued for transfer', 'Transferred', 'Rejected', 'Deleted', 'Retained', 'Retained On'];


const hbtns = [

    { clas: 'k-button k-button-icontext k-grid-excel', url: '/', icon: 'k-icon fal fa-file-excel', name: 'Export to Excel'},
    { clas: 'k-button k-button-icontext k-grid-custom', url: '/', icon: 'k-icon fad fa-times-square', name: 'Delete'}
];

// Grid Data
const createDataState = (dataState) => {
    return {
        result: process(allleads.slice(0), dataState),
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

        const kendoDrops = () => {

            let itemVal = 0;

            $('.tab-Item').each(function() {

                $(this).attr({ id: 'id_' + itemVal});
                itemVal++;
            });

            $.fn.GlDrop = function() {

                return this.on('click', '*', function(e) {

                    let cls = $(this)[0].className;

                    let id = $(this).attr('id');

                    if(cls.indexOf('tab-Item') !== -1) {

                        $('.tab-Item').removeClass('k-state-active');
                        $(this).addClass('k-state-active');
                    }

                    if(id === 'id_1') { $('.k-content').hide(); }

                    else if(id === 'id_0') { $('#leadstabstrip-0').show(); }

                });
            }
            $(document).GlDrop();

            $('.tab-Item:nth-of-type(1)').addClass('k-state-active');


            let trTemp = '<tr role="row" class="headertr" style="touch-action: none;"></tr>';

            $(trTemp).appendTo('.k-grid .k-grid-header table thead');

            let theadTemp = '<th colspan="1" rowspan="1" class="k-header-bottom" aria-sort="none" role="columnheader" aria-colindex="1" aria-selected="false">' +
                                '<input value" aria-label="Alert" class="k-input" />' +
                            '</th>';

            let theadval = 0;

            for( let i = 0; i < 12; i++) { $('.headertr').append(theadTemp); }

            $('.k-header-bottom').each(function() {

                $(this).attr({ id: 'id_' + theadval});
                theadval++;
            });

            $('#id_6 .k-input').detach();
        }
        kendoDrops();
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
                                <div className="k-content k-state-active" id="leadstabstrip-0">
                                    <div className="k-widget k-grid k-display-block k-reorderable k-editable">

                                        <div className="k-header k-grid-toolbar k-grid-top">

                                            {hbtns.map( item => ( 
                                                <a className={item.clas} href={item.url}><span className={item.icon}></span>{item.name}</a>
                                            ))}

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
                                                <Column field="Pos" title="Pos" filter={'numeric'} columnMenu={ColumnMenu} />
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