import React from 'react';

import $ from 'jquery';

import Calendar from '../calendar/calendar';

const periods = ['Today', 'Previous Day', 'Last Week', 'This Month', 'Last Month', 'This Quarter', 'Last Quarter'];

class Searchbar extends React.Component {

	componentDidMount() {

		$.fn.kendoDropsSearch = () => {

            $.fn.GlDropSearch = function() {

                return this.on('click', '*', function(e) {

                    let cls = $(this)[0].className;

                    if(cls.indexOf('k-dropdown-wrap') !== -1) {

                        e.stopPropagation();

                        $('.dropContainer').slideToggle(100);
                        $('html').toggleClass('clDrop');

                    } else if(cls.indexOf('list-Item') !== -1) {

                        $('.list-Item').removeClass('itemSelected');
                        $(this).addClass('itemSelected');

                        $('.k-input').html( $(this).html() );
                        $('.dropContainer').slideUp(100);

                        $('html').removeClass('clDrop');
                    }

                    else if(cls.indexOf('clDrop') !== -1) {
                        $('html').removeClass('clDrop');
                        $('.dropContainer').slideUp(100);
                    }

                });
            }
            $(document).GlDropSearch();

            $('.k-item[data-item="Today"]').addClass('itemSelected');


            //$('.blkHide').detach();

        }
        $(document).kendoDropsSearch();
	}

	render() {

		return (

			<>
				<div id="searchbar">
                    <div className="panel panel-heading">

                        <h4 className="pull-left blkHide"> 
                            <span className="new-right-ico-floor"><i className=""></i></span>
                        </h4>
                
                        
                        <div className="searchSteps">

                            <div className="pull-left panel-input inp_Tl periStatH">
                                <div className="k-widget k-dropdown">
                                    <span className="k-dropdown-wrap k-state-default">
                                        <span className="k-input">Today</span>
                                        <span className="k-select" aria-label="select">
                                            <span className="k-icon k-i-arrow-60-down"></span>
                                        </span>
                                    </span>

                                    <div className="dropContainer">
                                        <ul className="k-list">
                                            {periods.map( period => ( <li className="k-item list-Item" data-item={ period }>{ period }</li> ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Calendar/>

                            <div className="pull-left panel-input">
                                <button id="PrevDate" type="button" className="k-button k-button-icon">
                                    <span className="k-icon k-i- fa fa-arrow-left"></span>
                                </button>

                                <button id="NextDate" type="button" className="k-button k-button-icon" >
                                    <span className="k-icon k-i- fa fa-arrow-right"></span>
                                </button>
                            </div>

                            <div className="pull-left panel-input">
                                <input className="k-textbox" id="WildcardSearch" name="WildcardSearch" placeholder="Lead Id Search" title="Excludes date from and date to in search" />
                            </div>

                            <div className="pull-left panel-input">
                                <div className="OverLayBtn">
                                    <span class="oLayer" style={{background: 'rgba(39, 150, 198, 0.5)'}}></span>
                                    <button id="GetLead" type="button" className="MlBtn k-button k-button-icontext" style={{display: 'inline-block'}}>
                                        <span className="k-icon k-i- fa fa-search"></span>
                                    Get Leads</button>
                                </div>

                                <button id="ClearGetLead" type="button" className="k-button k-button-icontext">
                                    <span className="k-icon k-i- fa fa-undo"></span>
                                Reset</button>
                            </div>

                        </div>

                    </div>
                </div>
			</>

		);
	}
}

export default Searchbar;