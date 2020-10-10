import React from 'react';

import $ from 'jquery';

import Header from '../header/header';

import Nav from '../header/nav';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import { process } from '@progress/kendo-data-query';

import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu.jsx';

import teleleads from './teleleads.json';

// Grid Data
const createDataState = (dataState) => {
    return {
        result: process(teleleads.slice(0), dataState),
        dataState: dataState
    };
}

const topusers = [
	
	{ img: 'assets/img/male.jpg', name: 'Jan Wilson', lead: '0'},
	{ img: 'assets/img/male.jpg', name: 'James Holland', lead: '0'},
	{ img: 'assets/img/male.jpg', name: 'Geraldine Henry', lead: '0'},
	{ img: 'assets/img/male.jpg', name: 'Donna Green', lead: '0'},
	{ img: 'assets/img/male.jpg', name: 'John Boland', lead: '0'},
	{ img: 'assets/img/male.jpg', name: 'Susanna Lucas', lead: '0'}
];

const notifications = [

	{ iconbell: 'fa fa-bell faa-ring animated redIco bellIcon', name: 'June Easdon', value: '03/07/2020 09:59'},
	{ iconbell: 'fa fa-bell faa-ring animated redIco bellIcon', name: 'Carol Hardwick', value: '03/07/2020 09:59'},
	{ iconbell: 'fa fa-bell faa-ring animated redIco bellIcon', name: 'David Kenway', value: '03/07/2020 09:59'}
];

const leadinfos = [
	{ class: 'leadinfo-row Width11', title: 'ID:', info: '3673269'},
	{ class: 'leadinfo-row', title: 'Date:', info: '02-07-2020 18:48'},
	{ class: 'leadinfo-row Width13', title: 'Product:', info: 'Life'},
	{ class: 'leadinfo-row Width13', title: 'Source:', info: 'Affiliate'},
	{ class: 'leadinfo-row Width13', title: 'Tracking:', info: '1168 [27]'},
	{ class: 'leadinfo-row Width9', title: 'Pixel:', info: 'Yes'}
];

const checktoggles = [

	{ title: 'PHF', id: 'phfFilter'},
	{ title: 'SQF', id: 'sqfFilter'}
];

const calloutOptions = [

	{ value: '4', name: 'Busy'},
	{ value: '7', name: 'Call Back'},
	{ value: '8', name: 'Immediate: Clients VM'},
	{ value: '9', name: 'Immediate: Generic VM'},
	{ value: '10', name: 'Invalid Number'},
	{ value: '3', name: 'Keeps Ringing'},
	{ value: '6', name: 'Not Interested'},
	{ value: '2', name: 'Rings: Clients VM'},
	{ value: '1', name: 'Rings: Generic VM'},
	{ value: '5', name: 'Wrong Number'}
];

const staticinfos = [
	
	{ id: 'txtFirstName', value: 'Joseph' },
	{ id: 'txtLastName', value: 'Mcguinness' },
	{ id: 'txtEmail', value: 'mcguinness955@btinternet.com' }
];

const dataphones = [
	
	{ 
		topclass: 'screenData', 
		inpclass: 'phoneInp mobilevalidation valid', 
		id: 'txtMobilePhone', 
		value: '07821363351',
		url: 'sip:07821363351',
		aclass: 'valiDClick mobileClick fad',
		name: '07821363351',
		leadid: '3673275',
		datagrid: 'leadgridquicktransfer'
	},
	{ 
		topclass: 'screenData phoneland landlineQE', 
		inpclass: 'phoneInp disableColor landLineInp', 
		id: 'landLineInp', 
		value: '07821363351',
		url: 'sip:07821363351',
		aclass: 'valiDClick landClick fad',
		name: '07821363351',
		leadid: '3673275',
		datagrid: 'leadgridquicktransfer'
	}
];


class Telesales extends React.Component {

	state = createDataState({
        take: 50,
        skip: 0
    });

    dataStateChange = (event) => {

        this.setState(createDataState(event.data));
    }

	componentDidMount() {

		$.fn.teleS_run = () => {

			// Click Function To Toggle Left Nav
			$.fn.teleNav = function() {

				return this.on('click', '#teleSales_nav', () => {
					$('.left-nav').toggleClass('goNavLeft');
				});
			}
			$(document).teleNav()

			// Ajax Call For Products Answers
			$.getJSON('assets/js/data/prodtelesales.json', function(data) {

				$('#proList_In').empty();

				let items = []

				$.each(data, function(index, value) {

					items.push('<div class="' + value.cTop + '">' +
									'<span class="label">' + value.lable + '</span>' +
									'<div class="k-select-floor">' +
										'<span class="k-widget k-dropdown">' +
											'<span class="k-dropdown-wrap">' +
												'<span class="k-input">' + value.inp + '</span>' +
												'<span class="k-select">' +
													'<span class="k-icon k-i-arrow-60-down"></span>' +
												'</span>' +
											'</span>' +
										'</span>' +
									'</div>' +
									'<div class="dropdown-content">' +
										'<ul>'
								)

					$.each(value.dropd, function(index, value) {

						items.push('<li class="' + value.clas + '">' + value.option + '</li>')

					});

					$.each(data, function(index, values) {items.push('</ul></div></div>')});

				});

				$('#proList_In').html('' + items.join('') + '');
			

				$.fn.formArOver = function() {
					return this.on('mouseover', '.form-article', function(event) {
						$('.k-input').removeClass('toggleDrop');
						$('.k-input', this).addClass('toggleDrop');

						$('.dropdown-content').removeClass('dropShow');
						$('.dropdown-content', this).addClass('dropShow');

						$('.form-article').removeClass('formDrop');
						$(this).addClass('formDrop');
					});
				}
				$(document).formArOver();

				$.fn.formArLeave = function() {
					return this.on('mouseleave', '.form-article', function() {
						$('.dropShow').hide();
						$('.form-article').removeClass('formDrop');
					});
				}
				$(document).formArLeave();


				$(document).on('click', '.toggleDrop', function() {

					$('.form-article .dropdown-content').hide();

					$('.dropShow').show();
				});

				$(document).on('click', '.formDrop .itemProd', function() {

					$('.formDrop .k-input').html($(this).html());
					$('.form-article .dropdown-content').hide();
				});


				$('.k-input').bind('DOMSubtreeModified', function() {

					if($('.toggleDrop').html() !== 'Select') {

						$('#productListFloor .formDrop').removeClass('boxHilight');
					}

					if($('.toggleDrop').html() === 'Select') {

						$('#productListFloor .formDrop').addClass('boxHilight');
					}
				});

				$(document).on('click', '#telesGrid table td', function() {

					$('.miniLeadspinner, .miniLeadspinner i').show();

					setTimeout(function() {

						$('.miniLeadspinner, .miniLeadspinner i').hide();

					}, 500);

				});
			});

			$('.thisHouse .houseEdit').val('2 Kenwater, close');

			if($('.thisHouse .houseEdit').val() === '') {

				$('.thisHouse').addClass('boxHilight');
			}

			$('.thisHouse .houseEdit').on('input', function() { $('.thisHouse').removeClass('boxHilight'); });

			$('.thisHouse .houseEdit').keyup(function() {

				if($(this).val() === '') {

					$('.thisHouse').addClass('boxHilight');

				} else {

					$('.thisHouse').removeClass('boxHilight');
				}
			});
		}
		$(document).teleS_run();

		// Calendar Injection
		$.getScript('assets/js/calendar/dateHourPicker.js');
	}

	render() {

		return (

			<div className="telesalesApp">

				<Header/>
				<Nav/>

				<div className="main">

					<div className="leftMini">
						<span id="teleSales_nav"><i className="fa fa-navicon"></i></span>

						<div className="header-sales" style={{ paddingBottom: '7px' }}>
							<div className="Top-UserCont btnEnable">

								<span className="flipImg">
									<i className="fad fa-database"></i>
									<span class="flipImgToolTip" style={{left: '-15px'}} id="totalLeadsReviews">Total Leads Reviews = 1006</span>
								</span>
								<span className="UserC_Count">0</span>
							</div>

							<div className="teleSaleUsersTab">

								{ topusers.map ( item => (

									<div className="Top-UserCont">
										<span className="flipImg">
											<img src={item.img} alt="" />
											<span className="flipImgToolTip">{item.name}</span>
										</span>
										<span className="UserC_Count">{item.lead}</span>
									</div>

								))}
								
							</div>

							{checktoggles.map( item => (
								<div className="caseToggle">
									<span className="caseToggle_In">{item.title}</span>
									<div className="marchants-commands">
										<div className="rights-blk">
											<div className="pausediv">
												<input type="checkbox" id={item.id} name="check" />
												<label for={item.id}></label>
												<div className="subbac"></div>
											</div>
										</div>
									</div>
								</div>
							))}

						</div>

						<section className="body-sales">
							<div id="telesGrid">

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
						</section>

					</div>

					<div className="rightMini injectCalend">

						<div className="header-sales">
							<div className="right-sales">
								<div className="taskNotification">

									{notifications.map( note => (
										<div className="topNotification">
											<span className="ico-plat">
												<i className={note.iconbell}></i>
											</span>
											<span className="notifi-plat">{note.name}</span>
											<input type="text" className="notifi-plat datetimepicker-4" value={note.value} readonly="readonly" />
											<div className="notifi_notes notes-4">
												<input type="text" className="notifi-plat" placeholder="Notes" value="" readonly="readonly" />
											</div>
											<span className="notifi-plat"></span>
										</div>
									))}

								</div>
							</div>
						</div>

						<div className="body-sales">
							<div className="right-sales">

								<div className="leadId_info">

									{leadinfos.map( item => (
										<div className={item.class}>
											<div className="BchgClr">
												<span className="top_title">{item.title}</span>
												<span className="btt_info">{item.info}</span>
											</div>
										</div>
									))}

									<div className="leadinfo-row Width18 backWidth">
										<div className="BchgClr"></div>
									</div>
								</div>

								{staticinfos.map( item => (
									<input type="text" className="screenData" id={item.id} value={item.value} />
								))}

								{dataphones.map( item => (
									<span className={item.topclass}>
										<input type="text" className={item.inpclass} id={item.id} value={item.value} />
										<a href={item.url} className={item.aclass} name={item.name} leadid={item.leadid} data-gridname={item.datagrid}></a>
									</span>
								))}

								<div className="callOut-border">
									<select className="callOut" id="CallOutcomeIdQE" data-val="true" data-val-number="The field CallOutcomeId must be a number." data-val-required="The CallOutcomeId field is required." name="CallOutcomeId" onchange="updateCallOutcomeQE(3673275)">
										<option selected="selected" value="0">Select...</option>

										{calloutOptions.map( itemval => (
											<option value={itemval.value}>{itemval.name}</option>
										))}
									</select>
								</div>

								<div className="input-group dateTop" id="datetimepicker5">
						            {/*<input type="text" className="form-control" id="datepicker" placeholder="Task On" />*/}
						            <span className="form-control inputFe taskPicker" id="datepicker">
						            	<span className="placeholder">Task On</span>
						            </span>
						            <span className="input-group-addon">
										<i id="calendarIcon" className="fad fa-calendar" aria-hidden="true"></i>
						            </span>
						        </div>

						        <div className="input-group dateBottom" id="datetimepicker6">
						            {/*<input type="text" className="form-control" placeholder="Available On" />*/}
						            <span className="form-control inputFe taskPicker" id="datepickerBottom"><span className="placeholder">Available On</span></span>
						            <span className="input-group-addon">
										<i id="calendarIcon" className="fad fa-calendar" aria-hidden="true"></i>
						            </span>
						        </div>

						        <div className="productAnwList">
						        	<div className="BchgClr"></div>
						        	<span className="titleProduct">Product Answers

						        		<span className="fa closeCsave" id="lblSaveConfirmation">
						        			<span className="closeC_TipSave">Save</span>
						        		</span>
						        		<span className="boardPop fad board-Open"></span>
						        	</span>
						        </div>

						        <div id="productListFloor" className="productList_Floor">

						        	<div className="productList_In" id="proList_In"></div>

						        	<div className="form-article thisHouse">
						        		<span className="label">House</span>
						        		<input type="text" className="k-select-floor houseEdit" />
						        	</div>

						        </div>

						        <div className="miniLeadspinner">
						        	<i className="fad fa-spinner fa-spin fa-3x fa-fw"></i>
						        </div>

							</div>
						</div>

					</div>

				</div>
			</div>
		);
	}
}

export default Telesales;